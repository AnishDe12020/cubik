import React from "react";
import { prisma } from "@cubik/database";
import { Box } from "@/utils/chakra";

const fetchHackathon = async () => {
  return await prisma.hackathon.findMany({
    where: {
      isActive: true,
    },
    select: {
      id: true,
      name: true,
      shortDescription: true,
    },
  });
};
const fetchRounds = async () => {
  return await prisma.round.findMany({
    where: {
      registrationEndDate: {
        gte: new Date(),
      },
    },
    select: {
      id: true,
      name: true,
      shortDescription: true,
      startTime: true,
    },
  });
};

export const ActiveEvent = async () => {
  const hackathonPromise = fetchHackathon();
  const roundPromise = fetchRounds();
  const [hackathon, round] = await Promise.all([
    hackathonPromise,
    roundPromise,
  ]);
  return (
    <>
      {hackathon.length > 0 && hackathon.map((el) => <Box>{el.name}</Box>)}
      {round.length > 0 && round.map((el) => <Box>{el.name}</Box>)}
    </>
  );
};
