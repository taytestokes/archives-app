import Link from "next/link";
import Image from "next/image";

export default function MarketingHeader() {
  return (
    <header className="w-full mx-auto flex items-center py-6">
      <Link href="/" className="flex items-center pointer">
        <Image
          src="/logo-light.png"
          alt="Archives brand logo"
          height="40"
          width="40"
        />
        <h1 className="text-lg font-bold ml-2">Archives</h1>
      </Link>
      <ul className="flex items-center gap-4 ml-auto">
        <li>
          <Link
            href="/auth/login"
            className="h-[40px] flex items-center px-4 text-zinc-700 font-medium text-sm rounded-md pointer transition hover:text-zinc-900 "
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
    </header>
  );
}
