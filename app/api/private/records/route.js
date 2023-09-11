import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { extractJwt } from "@/app/_lib/jwt";

import { getRecords } from "@/app/_services/records";

/**
 * Get all records for a user.
 */
export async function GET() {
  const headersList = headers();
  const bearerToken = headersList.get("Authorization");
  const accessToken = extractJwt(bearerToken);

  try {
    const records = await getRecords(accessToken);
    return new NextResponse(JSON.stringify(records), { status: 200 });
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
