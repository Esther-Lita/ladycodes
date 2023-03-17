import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <div className="group">
      <Link
        href={href}
        className="inline-block px-2 py-1 text-lg font-semibold rounded-xl text-primary-dark/80 hover:text-primary-dark"
      >
        {children}
      </Link>
      <div className="mx-2 border border-transparent group-hover:border-b-brand-pink">
        {' '}
      </div>
    </div>
  )
}
