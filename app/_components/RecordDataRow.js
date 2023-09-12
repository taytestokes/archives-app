"use client";

import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";

import { TrashIcon } from "@heroicons/react/20/solid";

export default function RecordDataRow({ record }) {
  const router = useRouter();
  const session = useSession();
  const accessToken = session?.data?.user?.accessToken;

  const deleteRecord = async (recordId) => {
    try {
      await fetch(`/api/private/records/${recordId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });

      router.replace(router.asPath);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const createdAt = new Date(record.createdAt).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <tr>
      <td className="px-6 py-4 text-xs">{record.title}</td>
      <td className="px-6 py-4 text-xs">{record.url}</td>
      <td className="px-6 py-4 text-xs">{createdAt}</td>
      <td className="px-6 py-4 text-xs">
        <button
          aria-label={`Delete the ${record.title} record`}
          className="bg-red-500 text-white p-2 rounded-md transition hover:bg-red-600"
          onClick={() => {
            deleteRecord(record.id);
          }}
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}
