import { Metadata } from "next";
import { Button, Text } from "@cubik/ui";

export const metadata: Metadata = {
  title: "Cubik - Dashboard",
};

export default function Home() {
  return (
    <main>
      <div>h-96</div>
      <Button variant={"outline"}>Hello world</Button>
    </main>
  );
}
