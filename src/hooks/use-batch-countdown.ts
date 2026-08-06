import { useEffect, useState } from "react";

/**
 * Returns the closing time for the August 2026 batch.
 * The deadline is August 10, 2026 at 11:59:59 PM in the user's local time.
 */
export function getNextBatchDeadline(_from: Date = new Date()): Date {
  return new Date(2026, 7, 10, 23, 59, 59, 999);
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
