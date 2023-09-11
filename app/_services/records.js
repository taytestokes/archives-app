import prisma from "@/app/_lib/prisma";
import { verifyJwt } from "@/app/_lib/jwt";

/**
 * Get all records for a specific user.
 */
export async function getRecords(accessToken) {
  const decodedToken = verifyJwt(accessToken, process.env.SECRET);

  if (!accessToken || !decodedToken) {
    throw new Error("A valid access token is required to get user records.");
  }

  const records = await prisma.record.findMany({
    where: {
      userId: decodedToken.id,
    },
  });

  return records;
}
