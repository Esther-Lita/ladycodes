import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    fuchsia:
      'bg-fuchsia-900 text-white hover:bg-fuchsia-700 hover:text-fuchsia-100 active:bg-fuchsia-800 active:text-fuchsia-300 focus-visible:outline-fuchsia-900',
    fuchsia:
      'bg-fuchsia-600 text-white hover:text-fuchsia-100 hover:bg-fuchsia-500 active:bg-fuchsia-800 active:text-fuchsia-100 focus-visible:outline-fuchsia-600',
    white:
      'bg-white text-fuchsia-900 hover:bg-fuchsia-50 active:bg-fuchsia-200 active:text-fuchsia-600 focus-visible:outline-white',
  },
  outline: {
    fuchsia:
      'ring-fuchsia-200 text-fuchsia-700 hover:text-fuchsia-900 hover:ring-fuchsia-300 active:bg-fuchsia-100 active:text-fuchsia-600 focus-visible:outline-fuchsia-600 focus-visible:ring-fuchsia-300',
    white:
      'ring-fuchsia-700 text-white hover:ring-fuchsia-500 active:ring-fuchsia-700 active:text-fuchsia-400 focus-visible:outline-white',
  },
}

export function Button({
  variant = 'solid',
  color = 'fuchsia',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
