import CustomTag from "@/app/components/common/tags/CustomTag";
import { BONK, SOL, USDC } from "@/app/components/common/tags/TokenTags";
import {
  Avatar,
  Box,
  Center,
  HStack,
  Skeleton,
  SkeletonCircle,
  Td,
  Tr,
  VStack,
} from "@/utils/chakra";
import { formatNumberWithK } from "@/utils/helpers/formatWithK";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { timeSince } from "@/utils/helpers/timeSince";

interface Props {
  isLoading?: boolean;
  projectLogo: string;
  projectName: string;
  projectOwner: string;
  projectIndustry: string;
  token: "SOL" | "USDC" | string;
  tokenAmount: number;
  usdAmount: number;
  eventName: string;
  amountRaised: number;
  createdAt: string;
}

export const ContributionRow = ({
  isLoading,
  projectLogo,
  projectName,
  projectOwner,
  projectIndustry,
  token,
  amountRaised,
  createdAt,
  eventName,
  tokenAmount,
  usdAmount,
}: Props) => {
  return (
    <Tr _hover={{ backgroundColor: "#0C0D0D" }}>
      <Td px="12px">
        <HStack align={"start"} gap={{ base: "14px", md: "16px" }}>
          <SkeletonCircle
            isLoaded={!isLoading}
            width={{ base: "36px", md: "52px" }}
            height={{ base: "36px", md: "52px" }}
          >
            <Avatar
              // borderRadius={'8px'}
              width={{ base: "36px", md: "52px" }}
              height={{ base: "36px", md: "52px" }}
              src={projectLogo}
            />
          </SkeletonCircle>
          <VStack
            align={"start"}
            justify="center"
            spacing={{ base: "8px", md: "8px" }}
          >
            <Skeleton
              isLoaded={!isLoading}
              fadeDuration={2}
              opacity={isLoading ? 0.5 : 1}
            >
              <Box
                as="p"
                textStyle={{ base: "title5", md: "title4" }}
                color="neutral.11"
              >
                {projectName}
              </Box>
            </Skeleton>
            <Skeleton
              isLoaded={!isLoading}
              fadeDuration={2}
              opacity={isLoading ? 0.5 : 1}
            >
              <Box
                as="p"
                textStyle={{ base: "body5", md: "body4" }}
                color="neutral.7"
              >
                by <b>@{projectOwner}</b>
              </Box>
            </Skeleton>
          </VStack>
        </HStack>
      </Td>
      <Td px="12px">
        <Skeleton
          isLoaded={!isLoading}
          fadeDuration={2}
          opacity={isLoading ? 0.5 : 1}
        >
          <HStack>
            {JSON.parse(projectIndustry).map(
              (industry: { value: string; label: string }) => (
                <CustomTag key={industry.value}>{industry.label}</CustomTag>
              )
            )}
          </HStack>
        </Skeleton>
      </Td>
      <Td px="12px">
        <HStack gap="8px" align={"center"}>
          <Skeleton
            isLoaded={!isLoading}
            fadeDuration={2}
            opacity={isLoading ? 0.5 : 1}
          >
            <Center>
              {token.includes("sol") ? (
                <SOL size={"32px"} />
              ) : token === "USDC" ? (
                <USDC size={"32px"} />
              ) : (
                token
              )}
            </Center>
          </Skeleton>
          <VStack justify={"center"} spacing="2px" align={"start"}>
            <HStack align={"baseline"} color="white">
              <Skeleton
                isLoaded={!isLoading}
                fadeDuration={2}
                opacity={isLoading ? 0.5 : 1}
              >
                <Box as="p" textStyle={{ base: "title5", md: "title4" }}>
                  {formatNumberWithK(tokenAmount)}
                </Box>
              </Skeleton>
              <Box as="p" textStyle={{ base: "title8", md: "title7" }}>
                {token.toUpperCase()}
              </Box>
            </HStack>
            <Skeleton
              isLoaded={!isLoading}
              fadeDuration={2}
              opacity={isLoading ? 0.5 : 1}
            >
              <Box
                as="p"
                color="neutral.8"
                textStyle={{ base: "body6", md: "body5" }}
              >
                {formatNumberWithK(usdAmount)}$
              </Box>
            </Skeleton>
          </VStack>
        </HStack>
      </Td>
      <Td px="12px">
        <VStack alignItems={"start"} gap="0px" justify="start">
          <Skeleton
            isLoaded={!isLoading}
            fadeDuration={2}
            opacity={isLoading ? 0.5 : 1}
          >
            <Box
              as="p"
              textStyle={{ base: "title5", md: "title4" }}
              color="neutral.11"
            >
              {eventName}
            </Box>
          </Skeleton>
          <Skeleton
            isLoaded={!isLoading}
            fadeDuration={2}
            opacity={isLoading ? 0.5 : 1}
          >
            <Box
              as="p"
              textStyle={{ base: "body5", md: "body4" }}
              color="neutral.7"
            >
              {timeSince(new Date(createdAt))}
            </Box>
          </Skeleton>
        </VStack>
      </Td>
      <Td px="12px">
        <Skeleton
          isLoaded={!isLoading}
          fadeDuration={2}
          opacity={isLoading ? 0.5 : 1}
        >
          <Box
            as="p"
            textStyle={{ base: "title4", md: "title3" }}
            color="neutral.11"
          >
            {amountRaised || "0.0"}
          </Box>
        </Skeleton>
      </Td>
      <Td px="12px">
        <BiChevronRight size="24" />
      </Td>
    </Tr>
  );
};
