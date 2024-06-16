"use client";

import { SessionProvider } from "next-auth/react"; // Import Provider as SessionProvider

export function AppProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
