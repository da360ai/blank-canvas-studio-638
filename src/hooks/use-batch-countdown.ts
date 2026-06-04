import { useEffect, useState } from "react";

/**
 * Returns time remaining until the next batch deadline.
 * Deadlines are the 1st Monday and 3rd Monday of every month at 23:59:59 local time.
 * Auto-advances to the next deadline once one passes — no drift, never gets stuck.
 */
export function getNextBatchDeadline(from: Date = new Date()): Date {
  // Helper: nth Monday of a given year/month (month is 0-indexed)
  const nthMondayOfMonth = (year: number, month: number, n: number) => {
    const first = new Date(year, month, 1);
    const offset = (1 - first.getDay() + 7) % 7; // days to first Monday
    const day = 1 + offset + (n - 1) * 7;
    const d = new Date(year, month, day, 23, 59, 59, 999);
    return d;
  };

  const candidates: Date[] = [];
  // Check this month and next month to find the next upcoming deadline
  for (let i = 0; i < 2; i++) {
    const y = from.getFullYear();
    const m = from.getMonth() + i;
    candidates.push(nthMondayOfMonth(y, m, 1));
    candidates.push(nthMondayOfMonth(y, m, 3));
  }

  const upcoming = candidates
    .filter((d) => d.getTime() > from.getTime())
    .sort((a, b) => a.getTime() - b.getTime());

  return upcoming[0];
}

export interface CountdownParts {
  days: number;
  hours: number;
  mins: number;
  secs: number;
  total: number;
}

export function useBatchCountdown(): CountdownParts {
  const compute = (): CountdownParts => {
    const now = new Date();
    const target = getNextBatchDeadline(now);
    const total = Math.max(0, target.getTime() - now.getTime());
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((total / (1000 * 60)) % 60);
    const secs = Math.floor((total / 1000) % 60);
    return { days, hours, mins, secs, total };
  };

  const [parts, setParts] = useState<CountdownParts>(compute);

  useEffect(() => {
    const interval = setInterval(() => setParts(compute()), 1000);
    return () => clearInterval(interval);
  }, []);

  return parts;
}
