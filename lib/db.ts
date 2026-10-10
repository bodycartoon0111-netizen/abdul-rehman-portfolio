import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Prisma 7 requires a driver adapter. The client is created lazily and only
// when DATABASE_URL is set — the site builds and runs fully without a
// database. Contact-form persistence treats a null client as "skip".
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createClient(): PrismaClient | null {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) return null;
  if (globalForPrisma.prisma) return globalForPrisma.prisma;
  const adapter = new PrismaPg({ connectionString: url });
  const client = new PrismaClient({ adapter });
  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = client;
  }
  return client;
}

/** Prisma client, or null when no DATABASE_URL is configured. */
export const db: PrismaClient | null = createClient();
