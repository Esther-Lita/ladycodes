import Image from 'next/image'

import WhiteButton from './WhiteButton'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative py-32 overflow-hidden bg-fuchsia-600"
    >
      <Image
        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-none"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl tracking-tight font-display text-button-pink sm:text-4xl">
            We need your help!
          </h2>
          <p className="mt-4 text-lg tracking-tight text-primary-dark">
            Join <strong>Lady Codes</strong> today to help us bring light to the early stages in the career of other women.
          </p>
          <div className='mt-10'>
            <WhiteButton href="/slack">Join our Slack</WhiteButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
