"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  function isActive(path: string) {
    return pathname === path;
  }
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/"
            className={`hover:text-accent-400 transition-colors ${
              isActive("/") ? "text-accent-400" : ""
            } `}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/cabins"
            className={`hover:text-accent-400 transition-colors ${
              isActive("/cabins") ? "text-accent-400" : ""
            } `}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`hover:text-accent-400 transition-colors ${
              isActive("/about") ? "text-accent-400" : ""
            } `}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className={`hover:text-accent-400 transition-colors ${
              isActive("/account") ? "text-accent-400" : ""
            } `}
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
