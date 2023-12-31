import Link from "next/link";
import Image from "next/image";

import { getServerSession } from "next-auth";

import SignOutButton from "./SignOutButton";

export default async function Header() {
  const session = await getServerSession();

  return (
    <header className="w-full flex items-center justify-between p-6 border-b border-zinc-200">
      <Link href="/" className="flex items-center pointer">
        <Image
          src="/logo-light.png"
          alt="Archives brand logo"
          height="40"
          width="40"
        />
        <h1 className="text-lg font-bold ml-2">Archives</h1>
      </Link>

      {session && session.user && <SignOutButton />}

      {!session && (
        <ul className="flex items-center gap-4 ml-auto">
          <li>
            <Link
              href="/auth/login"
              className="h-[40px] flex items-center px-4 text-zinc-700 font-medium text-sm rounded-md pointer transition hover:text-zinc-900"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              href="/auth/register"
              className="h-[40px] flex items-center px-6 bg-zinc-900 font-medium text-white text-sm rounded-md pointer transition hover:bg-zinc-800"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
