import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          LadyCodes - To increase the amount of women in the tech community.
        </title>
        <meta
          name="description"
          content="The gender imbalance in software development remains profound."
        />
      </Head>

      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
