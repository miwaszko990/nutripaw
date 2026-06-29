import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import type { LeadPayload } from "@/lib/wizard/types";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

async function saveLeadToFile(lead: LeadPayload) {
  await mkdir(path.dirname(LEADS_FILE), { recursive: true });

  let existing: LeadPayload[] = [];
  try {
    const raw = await readFile(LEADS_FILE, "utf8");
    existing = JSON.parse(raw) as LeadPayload[];
  } catch {
    existing = [];
  }

  existing.push(lead);
  await writeFile(LEADS_FILE, JSON.stringify(existing, null, 2), "utf8");
}

async function ensureTable() {
  const { sql } = await import("@vercel/postgres");
  await sql`
    CREATE TABLE IF NOT EXISTS nutripaw_leads (
      id SERIAL PRIMARY KEY,
      email TEXT NOT NULL,
      owner_name TEXT NOT NULL,
      dog_name TEXT NOT NULL,
      payload JSONB NOT NULL,
      marketing_consent BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}

async function saveLeadToPostgres(lead: LeadPayload) {
  const { sql } = await import("@vercel/postgres");
  await ensureTable();
  await sql`
    INSERT INTO nutripaw_leads (email, owner_name, dog_name, payload, marketing_consent)
    VALUES (
      ${lead.email},
      ${lead.ownerName},
      ${lead.dogName},
      ${JSON.stringify(lead)}::jsonb,
      ${lead.marketingConsent}
    )
  `;
}

function hasPostgres() {
  return Boolean(
    process.env.POSTGRES_URL ||
      process.env.POSTGRES_PRISMA_URL ||
      process.env.POSTGRES_URL_NON_POOLING,
  );
}

export async function saveLead(lead: LeadPayload) {
  if (hasPostgres()) {
    await saveLeadToPostgres(lead);
    return { storage: "postgres" as const };
  }

  if (process.env.NODE_ENV === "development") {
    await saveLeadToFile(lead);
    return { storage: "file" as const };
  }

  throw new Error(
    "Brak bazy danych. Dodaj Vercel Postgres (POSTGRES_URL) w ustawieniach projektu.",
  );
}
