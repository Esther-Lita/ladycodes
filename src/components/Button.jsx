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
    pink: 'bg-fuchsia-900 text-white hover:bg-fuchsia-700   focus-visible:outline-button-pink font-semibold',
    pink: 'bg-button-pink text-white  hover:bg-brand-pink  focus-visible:outline-button-pink font-semibold',
    white:
      'bg-white text-button-pink hover:bg-pink-50   focus-visible:outline-white font-semibold',
  },
  outline: {
    pink: 'ring-button-pink/30 text-button-pink hover:text-brand-pink hover:ring-button-pink/70  focus-visible:outline-button-pink focus-visible:ring-button-pink font-semibold',
    white:
      'ring-fuchsia-700 text-white hover:ring-fuchsia-500 active:ring-fuchsia-700 active:text-fuchsia-400 focus-visible:outline-white',
  },
}

export function Button({
  variant = 'solid',
  color = 'pink',
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
