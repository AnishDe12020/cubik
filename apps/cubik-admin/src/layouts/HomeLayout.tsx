"use client";
import SelectQuadraticEvent from "@/app/components/SelectEvent";
import { useUser } from "@/context/user";
import { VStack, Container, Stack, HStack, Center } from "@/utils/chakra";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
  name: string;
}
export const HomeLayout = ({ children, name }: Props) => {
  return (
    <>
      <VStack maxW="full" w="100%" h="100vh" p="0" bg="black">
        {/* <Header /> */}
        <Container
          maxW={{ base: "full", md: "7xl" }}
          w="100vw"
          py={{ base: "32px", md: "64px" }}
          px={{ base: "16px" }}
        >
          <Stack
            zIndex={1}
            direction={{ base: "column", md: "row" }}
            gap="40px"
            w="full"
            align="start"
            justify="space-between"
            pb={{ base: "32px", md: "48px" }}
            position={"relative"}
            _after={{
              content: '""',
              zIndex: "0",
              position: "absolute",
              top: "-100%",
              right: { base: "20%", md: "5%" },
              transform: "translate(0%,0%) scale(12)",
              width: "2vw",
              maxW: "1rem",
              minW: "0.6rem",
              height: "full",
              maxH: "1.2rem",
              minH: "0.8rem",
              backgroundColor: "#FFE53D",
              filter: "blur(10px)",
              WebkitFilter: "blur(10px)",
              rounded: "full",
            }}
            _before={{
              content: '""',
              zIndex: "0",
              position: "absolute",
              top: "-100%",
              right: { base: "20%", md: "0%" },
              transform: {
                base: "translate(0%,0%) scale(8)",
                md: "translate(0%,0%) scale(16)",
              },
              width: "2vw",
              maxW: "2rem",
              minW: "1.2rem",
              height: "2vw",
              maxH: "2rem",
              minH: "1.2rem",
              backgroundColor: "#31F579",
              filter: "blur(25px)",
              WebkitFilter: "blur(25px)",
              rounded: "full",
            }}
          >
            <HStack
              zIndex={1}
              align={"start"}
              w="full"
              justify={"space-between"}
              gap={{ base: "6px", md: "8px" }}
            >
              <SelectQuadraticEvent name={name} />
              <Center
                width={{ base: "80px", md: "130px" }}
                height={{ base: "80px", md: "130px" }}
                position="relative"
                right="auto"
                bottom="auto"
                zIndex={0}
              >
                <Image
                  src="/images/solana.svg"
                  alt="Solana"
                  width={"300"}
                  height={"300"}
                />
              </Center>
            </HStack>
          </Stack>
          <VStack
            zIndex={1}
            py={{ base: "16px", md: "16px" }}
            w="full"
            align="start"
            spacing="32px"
          >
            {children}
          </VStack>
        </Container>
      </VStack>
    </>
  );
};
