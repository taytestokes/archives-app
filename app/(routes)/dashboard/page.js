import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";

import { getRecords, deleteRecord } from "@/app/_services/records";

import RecordTable from "@/app/_components/RecordTable";

export default async function DashboardPage() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/auth/login");
  }

  const records = await getRecords(session.user.accessToken);

  return (
    <>
      <h2 className="text-lg font-medium">Records</h2>
      <p className="text-zinc-600 text-sm mb-6">
        This is where you can manage all of the records that you have saved.
      </p>
      <RecordTable records={records} />
    </>
  );
}
