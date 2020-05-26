import Head from 'next/head'
import { motion } from 'framer-motion'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import HeroIntro from '../components/hero-intro'
import Intro from '../components/intro'
import Layout from '../components/layout'
// import WordWall from '../components/wordwall'
import IntroSection from '../components/intro-section'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const easing = [0.48, 0.15, 0.25, 0.96];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: easing } }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: easing } }}
    >
      <Layout>
        <Head>
          <title>Reemuu Designs by {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <HeroIntro />
          {/* <WordWall /> */}
          <IntroSection />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </motion.div>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts },
  }
}
