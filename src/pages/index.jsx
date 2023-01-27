import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

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
