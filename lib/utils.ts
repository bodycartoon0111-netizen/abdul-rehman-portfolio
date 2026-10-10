type ClassValue =
  | string
  | number
  | false
  | null
  | undefined
  | ClassValue[];

/** Minimal class-names joiner (no external dependency required). */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (input === false || input === null || input === undefined) continue;
    if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) out.push(nested);
      continue;
    }
    const str = String(input).trim();
    if (str) out.push(str);
  }
  return out.join(" ");
}
