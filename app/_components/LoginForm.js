"use client";

import { useRef } from "react";
import { signIn } from "next-auth/react";

import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function onSubmit(evt) {
    evt.preventDefault();

    await signIn("credentials", {
      email: emailRef.current,
      password: passwordRef.current,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  }

  return (
    <div className="w-full max-w-[320px] flex flex-col grow items-center justify-center mx-auto">
      <Image
        src="/logo-light.png"
        alt="Archives brand logo"
        height="54"
        width="54"
      />

      <h2 className="text-2xl font-bold mt-8">Sign into your account</h2>

      <p className="text-zinc-600 text-center text-sm mt-2">
        Start using our tools to further enhance and improve your research.
      </p>

      <form className="w-full flex flex-col mt-8" onSubmit={onSubmit}>
        <label htmlFor="email" className="text-zinc-600 font-medium text-sm">
          Email
        </label>
        <input
          ref={emailRef}
          id="email"
          type="email"
          className="h-[44px] p-2 mt-1 border border-zinc-200 rounded-md"
          onChange={(evt) => (emailRef.current = evt.target.value)}
        />

        <label
          htmlFor="password"
          className="text-zinc-600 font-medium text-sm mt-4"
        >
          Password
        </label>
        <input
          ref={passwordRef}
          id="password"
          type="password"
          className="h-[44px] p-2 mt-1 border border-zinc-200 rounded-md"
          onChange={(evt) => (passwordRef.current = evt.target.value)}
        />

        <button
          type="submit"
          className="h-[44px] p-2 mt-4 bg-zinc-900 font-medium text-white text-sm rounded-md pointer transition hover:bg-zinc-800"
        >
          Sign In
        </button>

        <p className="mt-4 text-sm text-zinc-600 text-center">
          Not registered?{" "}
          <Link href="/auth/register" className="text-blue-600">
            Create an account.
          </Link>
        </p>
      </form>
    </div>
  );
}
