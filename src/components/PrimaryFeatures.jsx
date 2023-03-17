import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import esther from '../images/esther.jpeg'
const features = [
  {
    title: 'Motivation',
    description:
      "It's a fact that with time also comes the lack of motivation to keep pursuing the once desired goal.",
    image: esther,
  },
  {
    title: 'Purpose',
    description:
      'Having a purpose brings meaning to life itself, imagine what could it bring to your carrer.',
    image: esther,
  },
  {
    title: 'Community',
    description: 'We understand how important this part is! With our contribution we help the community grow but at the same time the influence from the tech community can bring a huge impact in our careers.',
    image: esther,
  },
  {
    title: 'The plan',
    description:
      'Sometimes the best part of achieving a milestone is to know what we want to conquer next, it can be very scary on the other hand if we have no idea what is next when this is done.',
    image: esther,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <div className="mx-0 lg:mx-10">
      <section
        id="features"
        aria-label="Spot some career obstacles"
        className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-4 pt-20 pb-28 sm:py-32 lg:mt-14 lg:mb-14 lg:rounded-4xl lg:px-[34px]"
      >
        <Image
          className="absolute top-1/2 left-1/2 max-w-none translate-y-[-42%] translate-x-[-44%]"
          src={backgroundImage}
          alt=""
          width={2445}
          height={1636}
          unoptimized
        />
        <Container className="relative">
          <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <h2 className="text-3xl tracking-tight font-display text-primary-dark sm:text-4xl md:text-5xl">
              Identify your{' '}
              <span className="text-button-pink">career obstacles</span> and
              conquer them
            </h2>
            <p className="mt-6 text-lg tracking-tight text-slate-600">
            
            </p>
          </div>
          <Tab.Group
            as="div"
            className="grid items-center grid-cols-1 py-10 mt-16 gap-y-2 sm:gap-y-6 md:my-20 lg:grid-cols-12 lg:py-0"
            vertical={tabOrientation === 'vertical'}
          >
            {({ selectedIndex }) => (
              <>
                <div className="flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                  <Tab.List className="relative z-10 flex px-4 gap-x-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                    {features.map((feature, featureIndex) => (
                      <div
                        key={feature.title}
                        className={clsx(
                          'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                          selectedIndex === featureIndex
                            ? 'bg-white lg:bg-white/40 lg:ring-1 lg:ring-inset lg:ring-white/40'
                            : 'hover:bg-white/60 lg:hover:bg-white/30'
                        )}
                      >
                        <h3>
                          <Tab
                            className={clsx(
                              'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                              selectedIndex === featureIndex
                                ? 'text-primary-dark  lg:text-primary-dark '
                                : 'text-primary-dark  hover:text-slate-700  lg:text-primary-dark '
                            )}
                          >
                            <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                            {feature.title}
                          </Tab>
                        </h3>
                        <p
                          className={clsx(
                            'mt-2 hidden text-sm lg:block',
                            selectedIndex === featureIndex
                              ? 'text-slate-600 '
                              : 'text-slate-600  group-hover:text-slate-700 '
                          )}
                        >
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels className="lg:col-span-7">
                  {features.map((feature) => (
                    <Tab.Panel key={feature.title} unmount={false}>
                      <div className="relative sm:px-6 lg:hidden">
                        <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/20 ring-1 ring-inset ring-white/20 sm:inset-x-0 sm:rounded-t-xl" />
                        <p className="relative max-w-2xl mx-auto text-base text-slate-600 sm:text-center">
                          {feature.description}
                        </p>
                      </div>
                      <div className="mx-auto mt-10 flex w-[45rem]  items-center justify-center overflow-hidden rounded-xl bg-white/20 shadow-xl shadow-primary-dark/10 sm:w-auto lg:mt-0 lg:w-4/5">
                        <Image
                          className="my-8 rounded-xl"
                          src={feature.image}
                          alt=""
                          priority
                          width={500}
                          height={300}
                          sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                        />
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </>
            )}
          </Tab.Group>
        </Container>
      </section>
    </div>
  )
}
