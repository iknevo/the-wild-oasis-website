"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ session }) {
  const pathname = usePathname();
  function isActive(path: string) {
    return pathname === path;
  }
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
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
          {session?.user?.image ? (
            <Link
              href="/account"
              className={`hover:text-accent-400 flex items-center gap-4 transition-colors ${
                isActive("/account") ? "text-accent-400" : ""
              } `}
            >
              <span>{session?.user.name}</span>
              <Image
                className="rounded-full"
                src={session?.user?.image}
                width={32}
                height={32}
                alt={`${session?.user.name}'s profile image`}
                referrerPolicy="no-referrer"
              />
            </Link>
          ) : (
            <Link
              href="/account"
              className={`hover:text-accent-400 transition-colors ${
                isActive("/account") ? "text-accent-400" : ""
              } `}
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
