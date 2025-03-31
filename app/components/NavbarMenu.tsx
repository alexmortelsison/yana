"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Featured",
    href: "/featured",
  },
  {
    name: "About",
    href: "/about",
  },
];
export default function NavbarMenu() {
  const pathName = usePathname();
  return (
    <div className="border border-white px-12 py-4">
      <div className="flex items-center space-x-4">
        {navLinks.map((link) => (
          <div key={link.href}>
            <Link
              href={link.href}
              className={`${
                pathName === link.href
                  ? "font-bold text-white underline underline-offset-8"
                  : "text-gray-500"
              }`}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
