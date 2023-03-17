import Link from "next/link"

export default function PinkButton(props) {
  return (
    <div class="group relative inline-block rounded-2xl text-lg shadow-xl shadow-brand-pink/20">
      <Link href={props.href} target="_blank">
        <span class="relative z-10 block overflow-hidden rounded-2xl border-2 border-button-pink px-5 py-3 font-medium leading-tight text-gray-50 transition-colors duration-300 ease-out  group-hover:text-button-pink">
          <span class="absolute inset-0 h-full w-full rounded-2xl bg-button-pink px-5 py-3"></span>
          <span class="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-50 transition-all duration-300 group-hover:-rotate-180 "></span>
          <span class="relative">{props.children}</span>
        </span>
        <span
          class="absolute bottom-0 right-0 mr-0 mb-0 h-12 w-full rounded-2xl bg-button-pink transition-all duration-200 ease-linear group-hover:-mb-1 group-hover:-mr-1"
          data-rounded="rounded-lg"
        ></span>
      </Link>
    </div>
  )
}
