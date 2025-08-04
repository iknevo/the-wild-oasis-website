import { Session } from "next-auth";

export function getGuestIdOrThrow(session: Session | null): string | number {
  const guestId = session?.user?.guestId;
  if (!guestId) {
    throw new Error("Guest ID is missing from session.");
  }
  return guestId;
}
