import { NextResponse } from "next/server";

import bcrypt from "bcrypt";
import prisma from "@/app/_lib/prisma";
import { signJwt } from "@/app/_lib/jwt";

export async function POST(request) {
  const { email, password } = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    const validated = await bcrypt.compare(password, user.password);

    if (validated) {
      delete user.password;

      const accessToken = signJwt(user, process.env.SECRET);

      const userWithAcessToken = { ...user, accessToken };

      return new NextResponse(JSON.stringify(userWithAcessToken));
    }
  }
}
