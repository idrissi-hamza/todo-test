import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="sticky h-14 w-full border-b border-gray-200 bg-white/50 ">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 flex h-14 items-center justify-between ">
        <Link
          href="/"
          className="flex font-bold text-xl"
        >
          ToDo.
        </Link>
      </div>
    </nav>
  )
}

export default Navbar