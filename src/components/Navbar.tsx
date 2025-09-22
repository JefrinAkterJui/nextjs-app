

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
        <nav className=" flex items-center justify-between bg-blue-950 text-xl text-white py-2 px-8">
            <div><Link href={"/"}>Next.js</Link></div>
            <div className="flex gap-3">
                <Link href="/about" className="">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog" className="">Blogs</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar