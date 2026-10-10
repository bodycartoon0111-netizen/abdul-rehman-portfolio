"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import * as THREE from "three";
import type { Line2 } from "three-stdlib";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface GrowthNodeDatum {
  id: string;
  label: string;
  tooltip: string;
  base: [number, number, number];
  color: string;
  phase: number;
}

const NODES: GrowthNodeDatum[] = [
  // Dummy first entry: works around a drei <Html> bug where the first
  // label in the list never renders. Positioned far off-screen.
  { id: "_dummy", label: "", tooltip: "", base: [0, 100, 0], color: "#000000", phase: 0.0 },
  // LANDSCAPE layout: wide top row + right column, routed AROUND the portrait
  // (portrait covers bottom-left). All 7 labels stay visible — none hidden
  // behind the portrait. Composition reads wide/horizontal.
  { id: "seo", label: "SEO", tooltip: "Increase qualified organic visibility", base: [-5.5, 4.9, 0.0], color: "#1b4332", phase: 0.0 },
  { id: "traffic", label: "Traffic", tooltip: "Attract the right visitors, not just more of them", base: [-3.0, 5.1, -0.3], color: "#2d6a4f", phase: 1.3 },
  { id: "content", label: "Content", tooltip: "Answer the questions buyers are actually asking", base: [-0.5, 4.9, 0.4], color: "#40916c", phase: 2.6 },
  { id: "ads", label: "Ads", tooltip: "Buy attention only where it converts", base: [2.0, 5.1, -0.2], color: "#52b788", phase: 3.9 },
  { id: "website", label: "Website", tooltip: "A fast site engineered to earn trust", base: [5.0, 2.5, 0.5], color: "#74c69d", phase: 5.2 },
  { id: "conversion", label: "Conversion", tooltip: "Turn traffic into measurable business outcomes", base: [5.8, 0.5, 0.0], color: "#14532d", phase: 6.5 },
  { id: "automation", label: "Automation", tooltip: "Systems that follow up while you sleep", base: [5.0, -1.8, -0.4], color: "#0b3d2e", phase: 7.8 },
];

const EDGES: Array<[number, number]> = [
  // Flow along the wave
  [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
  // Cross-links for network density
  [1, 3], [2, 4], [3, 5], [4, 6], [5, 7],
  // Long-range links
  [1, 4], [3, 6],
];

/* ------------------------------------------------------------------ */
/*  Camera                                                             */
/* ------------------------------------------------------------------ */

function CameraRig() {
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);

  useEffect(() => {
    const aspect = size.width / Math.max(1, size.height);
    // Wide landscape node spread (x: -6 → 6) needs more distance to fit
    const z = aspect < 0.75 ? 24 : aspect < 1.1 ? 19 : 15;
    camera.position.set(0, 0.35, z);
    const pc = camera as THREE.PerspectiveCamera;
    if (typeof pc.updateProjectionMatrix === "function") pc.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

/* ------------------------------------------------------------------ */
/*  Nodes                                                              */
/* ------------------------------------------------------------------ */

interface NodeProps {
  datum: GrowthNodeDatum;
  index: number;
  positionsRef: { current: Float32Array };
  pointerActive: React.MutableRefObject<boolean>;
}

function GrowthNodeMesh({ datum, index, positionsRef, pointerActive }: NodeProps) {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const tmp = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const fx = Math.cos(t * 0.5 + datum.phase) * 0.28;
    const fy = Math.sin(t * 0.65 + datum.phase * 1.7) * 0.34;

    let tx = 0;
    let ty = 0;
    if (pointerActive.current) {
      tmp.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      const dir = tmp.sub(state.camera.position).normalize();
      const dist = -state.camera.position.z / dir.z;
      const px = state.camera.position.x + dir.x * dist;
      const py = state.camera.position.y + dir.y * dist;
      const dx = datum.base[0] + fx - px;
      const dy = datum.base[1] + fy - py;
      const d = Math.hypot(dx, dy) || 0.0001;
      const radius = 2.4;
      if (d < radius) {
        const f = (1 - d / radius) * 1.15;
        tx = (dx / d) * f;
        ty = (dy / d) * f;
      }
    }
    const k = Math.min(1, delta * 3.5);
    offset.current.x += (tx - offset.current.x) * k;
    offset.current.y += (ty - offset.current.y) * k;

    const x = datum.base[0] + fx + offset.current.x;
    const y = datum.base[1] + fy + offset.current.y;
    const z = datum.base[2] + Math.sin(t * 0.4 + datum.phase) * 0.2;
    group.current?.position.set(x, y, z);
    const pos = positionsRef.current;
    pos[index * 3] = x;
    pos[index * 3 + 1] = y;
    pos[index * 3 + 2] = z;
  });

  return (
    <group ref={group}>
      <mesh
        scale={hovered ? 1.28 : 1}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <icosahedronGeometry args={[0.42, 1]} />
        <meshStandardMaterial
          color={datum.color}
          roughness={0.32}
          metalness={0.12}
          emissive={datum.color}
          emissiveIntensity={hovered ? 0.4 : 0.08}
        />
      </mesh>
      <Html position={[0, -1, 0]} center zIndexRange={[20, 0]} className="pointer-events-none select-none">
        <div className="rounded-full border border-line bg-white/85 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur-sm">
          {datum.label}
        </div>
      </Html>
      {hovered ? (
        <Html position={[0, 0.95, 0]} center zIndexRange={[30, 0]} className="pointer-events-none select-none">
          <div className="w-56 rounded-xl border border-line bg-ink px-4 py-3 text-center shadow-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-mint">{datum.label}</p>
            <p className="mt-1 text-[13px] leading-snug text-white">{datum.tooltip}</p>
          </div>
        </Html>
      ) : null}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Edges (animated dashed flow lines that follow the nodes)           */
/* ------------------------------------------------------------------ */

interface EdgeProps {
  a: number;
  b: number;
  positionsRef: { current: Float32Array };
  phase: number;
}

function NetworkEdge({ a, b, positionsRef, phase }: EdgeProps) {
  const ref = useRef<Line2 | null>(null);
  const pts = useMemo(() => [new THREE.Vector3(), new THREE.Vector3()], []);

  useFrame((state, delta) => {
    const line = ref.current;
    if (!line) return;
    const pos = positionsRef.current;
    pts[0].set(pos[a * 3], pos[a * 3 + 1], pos[a * 3 + 2]);
    pts[1].set(pos[b * 3], pos[b * 3 + 1], pos[b * 3 + 2]);
    line.geometry.setPositions([
      pts[0].x, pts[0].y, pts[0].z,
      pts[1].x, pts[1].y, pts[1].z,
    ]);
    const mat = line.material as unknown as { dashOffset?: number };
    if (typeof mat.dashOffset === "number") {
      mat.dashOffset -= delta * (0.45 + (phase % 1) * 0.35);
    }
  });

  return (
    <Line
      ref={ref}
      points={pts}
      color="#8fae9a"
      transparent
      opacity={0.5}
      lineWidth={1.4}
      dashed
      dashSize={0.4}
      gapSize={0.28}
    />
  );
}

function GrowthScene({
  positionsRef,
  pointerActive,
}: {
  positionsRef: { current: Float32Array };
  pointerActive: React.MutableRefObject<boolean>;
}) {
  return (
    <>
      <CameraRig />
      <ambientLight intensity={0.9} />
      <directionalLight position={[6, 8, 6]} intensity={1.1} />
      <directionalLight position={[-6, -4, -4]} intensity={0.35} color="#bfe3d0" />
      {NODES.map((datum, i) => (
        <GrowthNodeMesh
          key={datum.id}
          datum={datum}
          index={i}
          positionsRef={positionsRef}
          pointerActive={pointerActive}
        />
      ))}
      {EDGES.map(([a, b], i) => (
        <NetworkEdge key={`${a}-${b}`} a={a} b={b} positionsRef={positionsRef} phase={i * 0.7} />
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared node-position store (ref container — mutated in useFrame)     */
/* ------------------------------------------------------------------ */

function usePositions(): { current: Float32Array } {
  const ref = useRef<Float32Array | null>(null);
  if (ref.current === null) {
    const arr = new Float32Array(NODES.length * 3);
    NODES.forEach((n, i) => {
      arr[i * 3] = n.base[0];
      arr[i * 3 + 1] = n.base[1];
      arr[i * 3 + 2] = n.base[2];
    });
    ref.current = arr;
  }
  return ref as { current: Float32Array };
}

/* ------------------------------------------------------------------ */
/*  Static fallback (no WebGL / prefers-reduced-motion)                */
/* ------------------------------------------------------------------ */

function toSvg(x: number, y: number): [number, number] {
  // world x in [-7, 7] -> [40, 860]; world y in [-3, 3] -> [520, 40]
  return [((x + 7) / 14) * 820 + 40, ((3 - y) / 6) * 480 + 40];
}

function StaticNetwork({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} role="img" aria-label="Network diagram of growth services: SEO, Traffic, Content, Ads, Website, Automation, Conversion">
      <svg viewBox="0 0 900 560" className="h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="gn-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d8f3dc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d8f3dc" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="450" cy="280" r="330" fill="url(#gn-glow)" />
        {EDGES.map(([a, b]) => {
          const [x1, y1] = toSvg(NODES[a].base[0], NODES[a].base[1]);
          const [x2, y2] = toSvg(NODES[b].base[0], NODES[b].base[1]);
          return (
            <line key={`${a}-${b}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8fae9a" strokeWidth="1.5" strokeDasharray="7 6" opacity="0.55" />
          );
        })}
        {NODES.map((n) => {
          const [cx, cy] = toSvg(n.base[0], n.base[1]);
          return (
            <g key={n.id}>
              <title>{`${n.label}: ${n.tooltip}`}</title>
              <circle cx={cx} cy={cy} r="30" fill={n.color} opacity="0.16" />
              <circle cx={cx} cy={cy} r="17" fill={n.color} />
              <text x={cx} y={cy + 42} textAnchor="middle" fontSize="12" fontWeight="700" letterSpacing="2" fill="#1a2e22" fontFamily="Manrope, sans-serif">
                {n.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Public component                                                   */
/* ------------------------------------------------------------------ */

export default function GrowthNetwork({
  className = "",
  ariaLabel = "Interactive 3D network of growth services",
}: {
  className?: string;
  ariaLabel?: string;
}) {
  const [mode, setMode] = useState<"webgl" | "static">("webgl");
  const [inView, setInView] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pointerActive = useRef(false);

  const positionsRef = usePositions();

  useEffect(() => {
    let webgl = true;
    try {
      const c = document.createElement("canvas");
      if (!(c.getContext("webgl2") || c.getContext("webgl"))) webgl = false;
    } catch {
      webgl = false;
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const decide = () => setMode(!webgl || mq.matches ? "static" : "webgl");
    decide();
    mq.addEventListener("change", decide);
    return () => mq.removeEventListener("change", decide);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => setInView(entries[0]?.isIntersecting ?? true),
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (mode === "static") return <StaticNetwork className={className} />;

  return (
    <div
      ref={wrapRef}
      className={`relative ${className}`}
      role="img"
      aria-label={ariaLabel}
      style={{
        background:
          "radial-gradient(ellipse 78% 68% at 56% 40%, rgba(216, 243, 220, 0.55) 0%, rgba(216, 243, 220, 0.14) 55%, transparent 78%)",
      }}
      onPointerEnter={() => {
        pointerActive.current = true;
      }}
      onPointerLeave={() => {
        pointerActive.current = false;
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 12.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={inView ? "always" : "never"}
        style={{ background: "transparent" }}
      >
        <GrowthScene positionsRef={positionsRef} pointerActive={pointerActive} />
      </Canvas>
    </div>
  );
}
