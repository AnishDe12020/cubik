import { VStack, HStack, Center, Box } from "@/utils/chakra";
import { prisma } from "@cubik/database";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { fetchOverView } from "./fetchHackathon";

interface Props {
  id: string;
}

export const HackathonOverview = ({ id }: Props) => {
  const Overview = useQuery({
    queryFn: ({ queryKey }) => fetchOverView(queryKey[1] || id),
    queryKey: ["overview", id],
    enabled: id ? true : false,
  });
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
              {Overview.data?.project || 0}
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
              {Overview.data?.tracks || 0}
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
