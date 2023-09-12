"use client";

import { signOut } from "next-auth/react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";

export default function SignOutButton() {
  return (
    <button
      aria-label="Select to sign out"
      className="flex items-center p-2 bg-zinc-100 border border-zinc-200 rounded-md text-zinc-600 font-medium text-sm pointer"
      onClick={() => signOut()}
    >
      <ArrowLeftOnRectangleIcon className="h-4 w-4" />
    </button>
  );
}
