import { Metadata } from "next";
import { Button, Text } from "@cubik/ui";

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default function Home() {
  return (
    <main>
      <div className="bg-gray-500">h-96</div>
      <Button variant={"destructive"}>Hello world</Button>
    </main>
  );
}
