import { VStack, HStack, Center, Box } from "@/utils/chakra";
import Image from "next/image";
import React from "react";
import { prisma } from "@cubik/database";

interface Props {
  id: string;
  type: "hackathon" | "round";
}

const getOverView = async ({ id, type }: Props) => {
  if (type === "hackathon") {
    const res = await prisma.projectJoinHackathon.count({
      where: {
        isArchive: false,
      },
    });
  } else {
  }
};
export const HackathonOverview = async ({ id, type }: Props) => {
  const Overview = await getOverView({ id, type });
  return (
    <>
      <VStack
        w={{ base: "full", md: "fit-content" }}
        gap={["8px", "12px", "16px"]}
        align="start"
      >
        <HStack gap={["2px", "4px", "6px"]}>
          <Center
            width={{ base: "18px", sm: "22px", md: "22px" }}
            height={{ base: "18px", sm: "22px", md: "22px" }}
            position="relative"
            right="auto"
            bottom="auto"
          >
            <Image
              src="/icons/code.svg"
              alt="Solana"
              width={"100"}
              height={"100"}
            />
          </Center>
          <Box
            color="white"
            as="p"
            fontWeight={"700"}
            textStyle={{ base: "title3", sm: "title2", md: "title2" }}
          >
            Hackathon Overview
          </Box>
        </HStack>
        <HStack
          flexWrap={"wrap"}
          bg="#080808"
          p={{ base: "24px", md: "36px" }}
          pr={{ base: "24px", md: "80px" }}
          w="full"
          gap={{ base: "24px", sm: "36px", md: "48px" }}
          alignItems="flex-start"
          rounded={"12px"}
          border="1px solid"
          borderColor="#141414"
        >
          <VStack h="full" align="start" spacing={["4px", "6px", "8px"]}>
            <Box
              color="white"
              as="p"
              fontWeight={"800"}
              textStyle={{ base: "title1", md: "display5" }}
            >
              136
            </Box>
            <Box
              color="#ADB8B6"
              as="p"
              textStyle={{ base: "body6", md: "body5" }}
            >
              Projects Submitted
            </Box>
          </VStack>
          <VStack h="full" align="start" spacing={["4px", "6px", "8px"]}>
            <Box
              color="white"
              as="p"
              fontWeight={"800"}
              textStyle={{ base: "title1", md: "display5" }}
            >
              240
            </Box>
            <Box
              color="#ADB8B6"
              as="p"
              textStyle={{ base: "body6", md: "body5" }}
            >
              Hackers
            </Box>
          </VStack>
          <VStack h="full" align="start" spacing={["4px", "6px", "8px"]}>
            <Box
              color="white"
              as="p"
              fontWeight={"800"}
              textStyle={{ base: "title1", md: "display5" }}
            >
              412
            </Box>
            <Box
              color="#ADB8B6"
              as="p"
              textStyle={{ base: "body6", md: "body5" }}
            >
              Project Tracks
            </Box>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};
