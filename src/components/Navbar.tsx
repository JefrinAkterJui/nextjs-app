"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="">
      <nav className=" flex items-center justify-between bg-blue-950 text-xl text-white py-2 px-8">
        <div>
          <Link href={"/"}>Next.js</Link>
        </div>
        <div className="flex gap-3">
          <Link
            href="/about"
            className={`${
              pathName === "/about"
                ? "text-blue-600 font-semibold underline"
                : "text-white hover:underline"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${
              pathName === "/contact"
                ? "text-blue-600 font-semibold underline"
                : "text-white hover:underline"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/gallery"
            className={`${
              pathName === "/gallery"
                ? "text-blue-600 font-semibold underline"
                : "text-white hover:underline"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/product"
            className={`${
              pathName === "/product"
                ? "text-blue-600 font-semibold underline"
                : "text-white hover:underline"
            }`}
          >
            Products
          </Link>
          <Link
            href="/dashboard"
            className={`${
              pathName === "/dashboard"
                ? "text-blue-600 font-semibold underline"
                : "text-white hover:underline"
            }`}
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
