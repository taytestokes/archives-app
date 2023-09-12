import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { extractJwt, verifyJwt } from "@/app/_lib/jwt";
import { deleteRecord } from "@/app/_services/records";

/**
 * Delete a record based on it's ID
 */
export async function DELETE(_, { params }) {
  const { id } = params;
  const headersList = headers();
  const bearerToken = headersList.get("Authorization");
  const accessToken = extractJwt(bearerToken);
  const decodedToken = verifyJwt(accessToken, process.env.SECRET);

  if (!accessToken || !decodedToken) {
    const error = new Error(
      "A valid access token is required to get user records."
    );

    return new NextResponse(
      JSON.stringify({
        error: error.message,
      }),
      {
        status: 401,
      }
    );
  }

  try {
    const deletedRecord = await deleteRecord(id);
    return new NextResponse(`Deleted record: ${deletedRecord.id}`, {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        error: error.message,
      }),
      {
        status: 401,
      }
    );
  }
}
