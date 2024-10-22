"use client"; // This tells Next.js it's a Client Component

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export function SessionProviderWrapper({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}