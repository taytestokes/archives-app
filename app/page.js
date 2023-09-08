import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import MarketingLayout from "@/components/MarketingLayout";

export default async function HomePage() {
  const session = await getServerSession();

  if (session && session.user) {
    redirect("/dashboard");
  }

  return (
    <MarketingLayout>
      <div className="w-full max-w-[1100px] mx-auto px-2">
        <div className="w-1/2 flex-col">
          <h2 className="text-5xl font-extrabold">
            Research tools for managing resources
          </h2>
          <p className="my-4 text-md text-gray-600">
            Start improving your research with tools that allow you to easily
            track and manage the resources you are using.
          </p>
        </div>
      </div>
    </MarketingLayout>
  );
}
