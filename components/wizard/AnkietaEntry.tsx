"use client";

import { useEffect, useState } from "react";
import PlanMatchingLoader from "./PlanMatchingLoader";
import SubscriptionWizard from "./SubscriptionWizard";

const MIN_LOADER_MS = 2000;

export default function AnkietaEntry() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), MIN_LOADER_MS);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) return <PlanMatchingLoader />;

  return <SubscriptionWizard />;
}
