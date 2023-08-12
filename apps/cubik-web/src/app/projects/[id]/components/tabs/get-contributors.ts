"use server";
import { prisma } from "@cubik/database";

export const getContributors = async (id: string) => {
  return await prisma.contribution.findMany({
    where: {
      projectId: id,
    },
    select: {
      id: true,
      totalAmount: true,
      token: true,
      createdAt: true,
      totalUsdAmount: true,
      User: {
        select: {
          id: true,
          profilePicture: true,
          username: true,
          mainWallet: true,
          Proof: true,
        },
      },
    },
  });
};
