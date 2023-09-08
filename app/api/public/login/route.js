import { NextResponse } from "next/server";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../../_lib/prisma";

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

      const accessToken = jwt.sign(user, process.env.SECRET);
      const userWithAcessToken = { ...user, accessToken };

      return new NextResponse(JSON.stringify(userWithAcessToken));
    }
  }
}
