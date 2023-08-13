import { Metadata } from "next";
import { Button, Text } from "@cubik/ui";

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default function Home() {
  return (
    <main>
      <div className="text-5xl bg-black">h-96</div>
      <Button className="bg-primary" variant={"destructive"}>
        Hello world
      </Button>
    </main>
  );
}
