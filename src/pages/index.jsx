import Head from 'next/head'
import Image from 'next/image'

import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { CallToAction } from '@/components/CallToAction'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
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
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        {/* <SecondaryFeatures /> */}
<div className='my-40 '></div>
        <CallToAction />

        {/* <Testimonials /> */}
      

        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
