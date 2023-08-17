"use server";
import { prisma } from "@cubik/database";
export const fetchHackathon = async (id: string) => {
  try {
    const res = await prisma.hackathonSponsors.findMany({
      where: {
        hackathonId: id,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
