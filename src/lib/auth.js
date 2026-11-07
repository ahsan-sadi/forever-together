import { gate } from "@/data/siteConfig";

// Access is remembered for this page load ONLY. Nothing is written to
// localStorage or sessionStorage, so every refresh, new tab, or fresh visit
// starts locked and asks the security question again.
// Still client-side only — this is a romantic gesture, not real security.
let granted = false;
const listeners = new Set();

// Case-insensitive, punctuation/space-insensitive comparison.
export function normalizeAnswer(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

export function checkAnswer(value) {
  const given = normalizeAnswer(value);
  if (!given) return false;
  return gate.answers.some((answer) => normalizeAnswer(answer) === given);
}

export function isAuthed() {
  return granted;
}

export function grantAccess() {
  granted = true;
  listeners.forEach((notify) => notify());
}

// Lets useSyncExternalStore re-read isAuthed() the moment access is granted.
export function subscribeToAuth(onStoreChange) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}
