import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../auth/[...nextauth].api";
import { z } from "zod";
import prisma from "@/libs/prisma";

const updateProfileSchema = z.object({
    bio: z.string().nullable(), 
  });
  

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    return res.status(405).end();
  }

  const session = await getServerSession(req, res, buildNextAuthOptions(req, res));

  if (!session) {
    return res.status(401).end();
  }

  const validationResult = updateProfileSchema.safeParse(req.body);

  if (validationResult.success) {
    const { bio } = validationResult.data;

    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        bio,
      },
    });

    return res.status(204).end();
  } else {
    return res.status(400).json({
      error: "Invalid request body",
      details: validationResult.error,
    });
  }
}
