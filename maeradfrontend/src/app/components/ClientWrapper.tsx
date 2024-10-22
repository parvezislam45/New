
"use client";

import { usePathname } from "next/navigation";
import Nav from "./shered/Nav";
import { Session } from "next-auth";

export default function ClientWrapper({ session }: { session: Session | null }) {
  const pathname = usePathname();

  // Conditionally render Nav based on pathname
  if (pathname === "/dashboard") return null;

  return <Nav session={session} />;
}
