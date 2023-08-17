import { HomeLayout } from "@/layouts/HomeLayout";
import React from "react";
import { prisma } from "@cubik/database";
interface Props {
  children: React.ReactNode;
  params: {
    id: string;
  };
}
const getInfo = (id: string) => {
  try {
    const res = prisma.hackathon.findFirst({
      where: {
        id,
      },
      select: {
        name: true,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const LayoutPage = async ({ children, params: { id } }: Props) => {
  const info = await getInfo(id);
  return (
    <>
      <HomeLayout name={info?.name as string}>{children}</HomeLayout>
    </>
  );
};

export default LayoutPage;
