import Link from 'next/link'

export default function WhiteButton(props) {
  return (
    <div class="group relative inline-block rounded-2xl text-lg shadow-xl shadow-brand-pink/20">
      <Link href={props.href} target="_blank">
        <span class="relative z-10 block overflow-hidden rounded-2xl border-2 border-button-pink px-5 py-3 font-medium leading-tight text-button-pink transition-colors duration-300 ease-out  group-hover:text-white">
          <span class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 px-5 py-3"></span>
          <span class="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-button-pink transition-all duration-300 group-hover:-rotate-180 "></span>
          <span class="relative">{props.children}</span>
        </span>
        <span
          class="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-2xl bg-button-pink transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </Link>
    </div>
  )
}
