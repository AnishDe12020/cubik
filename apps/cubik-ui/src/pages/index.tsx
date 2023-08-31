import type { GetStaticProps, NextPage } from "next";
import LandingPage from "~/components/pages/landing-page/LandingPage";
import SEO from "~/components/SEO";
import { Button } from "@cubik/ui";

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title={`Cubik`}
        description={`Fund Public Goods Through Community Voting On Solana `}
        image={`https://res.cloudinary.com/demonicirfan/image/upload/v1684179451/cubik%20og.png`}
      />
      {/* <LandingPage /> */}
      <Button className="bg-primary">Button</Button>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 10 * 60 * 60,
  };
};
export default Home;
