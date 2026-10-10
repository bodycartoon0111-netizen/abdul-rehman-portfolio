import { defineConfig } from "prisma/config";

// Prisma 7: datasource connection URLs live here, not in schema.prisma.
// `prisma generate` needs *some* URL at config-load time but never connects
// during generation, so fall back to a dummy URL when DATABASE_URL is absent
// (e.g. Vercel build without a database). At runtime lib/db.ts only creates
// a client when a real DATABASE_URL is set, so the dummy is never used.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url:
      process.env.DATABASE_URL ??
      "postgresql://localhost:5432/prisma_generate_dummy",
  },
});
