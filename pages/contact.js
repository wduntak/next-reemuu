import Head from "next/head";
import Container from "../components/container";
import HeroIntro from "../components/hero-intro";
import Intro from "../components/intro";
import Layout from "../components/layout";
import IntroSection from "../components/intro-section";
import { CMS_NAME } from "../lib/constants";

export default function Contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>Reemuu Designs by {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <HeroIntro />
          <IntroSection />
        </Container>
      </Layout>
    </>
  );
}