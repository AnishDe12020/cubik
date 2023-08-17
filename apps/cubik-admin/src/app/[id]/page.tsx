import { VStack } from "@/utils/chakra";
import React from "react";
import { HackathonOverview } from "../components/HackathonOverview";

interface Props {
  params: {
    id: string;
  };
}
const AccessPage = ({ params: { id } }: Props) => {
  return (
    <>
      <VStack
        zIndex={1}
        gap={{ base: "48px", sm: "64px", md: "80px" }}
        align="start"
        w="full"
        maxW="8xl"
      >
        <HackathonOverview id={id as string} />
      </VStack>
    </>
  );
};

export default AccessPage;
