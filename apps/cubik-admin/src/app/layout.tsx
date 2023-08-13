"use client";
import {
  Box,
  Center,
  ChakraProvider,
  Container,
  HStack,
  Stack,
} from "@/utils/chakra";
import { VStack } from "@/utils/chakra";
import theme from "@/config/chakra.config";
import { Plus_Jakarta_Sans } from "next/font/google";
//import Header from "@/app/components/layout/header";
import { useState } from "react";
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.className}`}>
        <ChakraProvider theme={theme}>
          <VStack maxW="full" w="100%" h="100vh" p="0" bg="black">
            {/* <Header /> */}

            <Container
              maxW={{ base: "full", md: "7xl" }}
              w="100vw"
              py={{ base: "32px", md: "64px" }}
              px={{ base: "16px" }}
            >
              <Stack
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
                  border="1px solid red"
                  align={"start"}
                  w="full"
                  gap={{ base: "6px", md: "8px" }}
                >
                  <Box
                    color="neutral.11"
                    as="p"
                    textStyle={{ base: "title1", md: "display3" }}
                  >
                    Quadratic Funding Grants
                  </Box>
                  <Center
                    width={{ base: "100px", md: "112px" }}
                    height={{ base: "100px", md: "112px" }}
                    position={{ base: "absolute", md: "relative" }}
                    right={{ base: "-5%", md: "auto" }}
                    bottom={{ base: "-5%", md: "auto" }}
                    // zIndex={'1'}
                  >
                    <Box
                      width={{ base: "100px", md: "112px" }}
                      height={{ base: "100px", md: "112px" }}
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      zIndex="1"
                      mixBlendMode={"hue"}
                      bg="#071A0F"
                    />
                    <Image
                      src="https://res.cloudinary.com/demonicirfan/image/upload/v1689923669/Mask_group_4_xmxqdg.png"
                      alt="Twitter Logo"
                      width={"300"}
                      height={"300"}
                    />
                  </Center>
                </HStack>
              </Stack>
              <VStack
                py={{ base: "32px", md: "64px" }}
                w="full"
                align="start"
                spacing="32px"
              >
                {children}
              </VStack>
            </Container>
          </VStack>
        </ChakraProvider>
      </body>
    </html>
  );
}
