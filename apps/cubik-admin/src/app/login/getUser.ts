"use server";

import { prisma } from "@cubik/database";

export const GetUser = (wallet: string) => {
  try {
    const res = prisma.user.findFirst({
      where: {
        mainWallet: wallet,
      },
      include: {
        AdminAccess: {
          select: {
            id: true,
            hackathonId: true,
            roundId: true,
            createdAt: true,
            userId: true,
            isActive: true,
            updatedAt: true,
            hackathon: {
              select: {
                name: true,
              },
            },
            round: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
