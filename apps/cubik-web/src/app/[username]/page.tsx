import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@/utils/chakra";
import { ContributionTab } from "./components/contributions";

interface Props {
  params: { username: string };
}
const Details = ({ params: { username } }: Props) => {
  return (
    <>
      <Tabs variant={"cubik"} isLazy>
        <TabList>
          <Tab>Details</Tab>
          <Tab>Projects</Tab>
          <Tab>Contributions</Tab>
        </TabList>
        <TabPanels p={"0"}>
          <TabPanel p="0">
            <Flex maxW={"full"} p="0" flexDir="column" gap="40px">
              aa
            </Flex>
          </TabPanel>
          {/* <TabPanel>
              <Flex direction="column" w="full" gap="32px">
                 {user &&
                user.project.filter(
                  (project) => project.status === ProjectVerifyStatus.VERIFIED
                ).length ? (
                  // filter verified projects only to show on user profile
                  user.project
                    .filter(
                      (project) =>
                        project.status === ProjectVerifyStatus.VERIFIED
                    )
                    .map((project, key) => (
                      <ProjectVisitorCard
                        userName={user.username as string}
                        project={project}
                        isLoading={isLoading}
                        key={key}
                      />
                    ))
                ) : (
                  <VisitorProjectEmptyState />
                )} 
              </Flex>
            </TabPanel>*/}
          <TabPanel>
            <ContributionTab username={username} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Details;
