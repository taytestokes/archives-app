import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import LoginForm from "./_components/LoginForm";

export default async function LoginPage() {
  const session = await getServerSession();

  if (session && session.user) {
    redirect("/dashboard");
  }

  return <LoginForm />;
}
