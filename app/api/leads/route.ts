import { saveLead } from "@/lib/leads/store";
import { recommendPlan, type WizardData } from "@/lib/wizard/types";
import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WizardData;

    if (!body.dogName?.trim()) {
      return NextResponse.json({ error: "Podaj imię psa." }, { status: 400 });
    }
    if (!body.ownerName?.trim()) {
      return NextResponse.json({ error: "Podaj swoje imię." }, { status: 400 });
    }
    if (!body.email?.trim() || !isValidEmail(body.email.trim())) {
      return NextResponse.json({ error: "Podaj poprawny adres e-mail." }, { status: 400 });
    }

    const plan = recommendPlan(body);
    const lead = {
      ...body,
      dogName: body.dogName.trim(),
      ownerName: body.ownerName.trim(),
      email: body.email.trim().toLowerCase(),
      breed: body.breed.trim(),
      recommendedLine: plan.line,
      recommendedFlavor: plan.flavor,
      dailyPortionG: plan.dailyPortionG,
      dailyPrice: plan.dailyPrice,
      submittedAt: new Date().toISOString(),
    };

    const result = await saveLead(lead);

    return NextResponse.json({ ok: true, storage: result.storage, plan });
  } catch (error) {
    console.error("[leads]", error);
    const message = error instanceof Error ? error.message : "Nie udało się zapisać danych.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
