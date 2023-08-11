import { Container, Stack } from "@/utils/chakra";
import { prisma } from "@cubik/database";
import { Details } from "./components/details";
import { notFound } from "next/navigation";

const getProject = async (id: string) => {
  return await prisma.project.findUnique({
    where: {
      id: id,
    },
    include: {
      Contribution: true,
      Owner: true,
      Team: true,
    },
  });
};

const Project = async ({ params: { id } }: { params: { id: string } }) => {
  console.log("id", id);
  const project = await getProject(id);

  console.log(project);

  if (!project) {
    notFound();
  }

  return (
    <main style={{ width: "full" }}>
      <Container maxW={"full"} p="0">
        <Stack
          maxW="7xl"
          mx="auto"
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "24px", md: "12px", lg: "60px", xl: "100px" }}
          px={{ base: "1rem", sm: "2rem", md: "2rem", xl: "1rem" }}
          py={{ base: "24px", md: "64px" }}
          alignItems={"start"}
          justifyContent={"start"}
        >
          <Details
            name=""
            projectDetails={project!}
            roundId={"1"}
            joinId={""}
            isLoading={false}
            amountRaise={0}
            contributions={0}
            communityContributions={0}
          />
          {/*
          <ProjectInteractions
            projectDetails={data as ProjectsModel}
            isLoading={isLoading}
            preview={true}
            team={data?.Team ?? []}
          /> */}
        </Stack>
      </Container>
    </main>
  );
};

export default Project;
