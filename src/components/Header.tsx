import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-red-500">
      <div>LOGO</div>
      <nav>
        <menu className="flex gap-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/todos">To Dos</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/todos/add" className="underline">Add New Todo</Link>
          </li>
        </menu>
      </nav>
    </div>
  )
}

export default Header