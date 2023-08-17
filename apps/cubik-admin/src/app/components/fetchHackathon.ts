"use server";
import { prisma } from "@cubik/database";

export const fetchHackathon = async (id: string) => {
  try {
    const hackathon = await prisma.hackathon.findUnique({
      where: {
        id,
      },
    });
    if (!hackathon) {
      throw new Error("Hackathon not found");
    }
    return hackathon;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchOverView = async (id: string) => {
  try {
    const res = prisma.projectJoinHackathon.count({
      where: {
        hackathonId: id,
      },
    });
    const tracks = prisma.hackathonSponsors.count({
      where: {
        hackathonId: id,
      },
    });
    return {
      project: res,
      tracks: tracks,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
