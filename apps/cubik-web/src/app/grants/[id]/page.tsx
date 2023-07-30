import SEO from "@/app/components/SEO";
import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { Box, Container } from "@/utils/chakra";
import React from "react";
import { GrantDetailsHeader } from "../components/GrantDetailsHeader";

type GrantReturnType = Prisma.RoundGetPayload<{
  include: {
    ProjectJoinRound: {
      select: {
        id: true;
        status: true;
        project: {
          select: {
            id: true;
            name: true;
            short_description: true;
            logo: true;
            industry: true;
            project_links: true;
            owner: {
              select: {
                username: true;
              };
            };
          };
        };
      };
    };
  };
}>;
const getGrant = async (
  id: string
): Promise<[GrantReturnType | null, boolean]> => {
  try {
    const res = await prisma.round.findFirst({
      where: {
        id: id,
      },
      include: {
        ProjectJoinRound: {
          where: {
            status: "APPROVED",
          },
          select: {
            id: true,
            status: true,
            project: {
              select: {
                name: true,
                short_description: true,
                logo: true,
                industry: true,
              },
            },
          },
        },
      },
    });

    return [res, false];
  } catch (error) {
    console.log(error);
    return [null, true];
  }
};

const GrantPage = async ({ params }: { params: { id: string } }) => {
  const [grant, error] = await getGrant(params.id);
  return (
    <>
      <SEO
        title={`${grant?.roundName || "Grant"}`}
        description={`${grant?.short_description || "Grant Round on Cubik"}`}
        image={`https://res.cloudinary.com/demonicirfan/image/upload/v1687266944/Projects_ozybde.png`}
      />
      <main>
        <Container
          py={{ base: "32px", md: "80px" }}
          maxW="7xl"
          px="1rem"
          display={"flex"}
          flexDir={"column"}
          gap={{ base: "32px", md: "60px" }}
        >
          <GrantDetailsHeader
            endTime={grant?.endTime || new Date()}
            isLoading={false}
            matchingPool={grant?.matchedPool || 0}
            roundName={grant?.roundName || ""}
            shortDescription={grant?.short_description || ""}
            startTime={grant?.startTime || new Date()}
          />

          <Box h="1px" backgroundColor="#1D1F1E90" w="full" />
        </Container>
      </main>
    </>
  );
};

export default GrantPage;
