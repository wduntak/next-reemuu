import { CMS_NAME, CMS_URL } from '../lib/constants'
import Navigation from './navigation'

export default function Intro() {
  return (
    <section className="absolute flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 z-50 w-full">
      {/* <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1> */}
      <img className="sm:w-40 w-40" src="./reemuu-text-logo.svg" />
      <Navigation />
      {/* <h4 className="text-center self-start md:text-left text-lg mt-5 md:pl-8 ">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {CMS_NAME}
        </a>
        .
      </h4> */}
    </section>
  )
}
