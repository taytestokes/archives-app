"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      className="h-[40px] flex items-center px-4 text-zinc-700 font-medium text-sm rounded-md pointer transition hover:text-zinc-900"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}
