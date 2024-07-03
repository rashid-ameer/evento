"use client";
import Link from "next/link";
import { Logo } from ".";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

const routes = [
  { name: "Home", path: "/" },
  { name: "All Events", path: "/events/all" },
];

function Header() {
  const activePath = usePathname();

  return (
    <header className="flex items-center justify-between px-3 sm:px-9 h-14 border-b border-white/10">
      <Logo />

      <nav className="h-full">
        <ul className="h-full flex gap-x-6 text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className={clsx(
                "hover:text-white transition flex items-center relative",
                {
                  "text-white": activePath === route.path,
                  "text-white/50": activePath !== route.path,
                }
              )}>
              <Link href={route.path}>{route.name}</Link>
              {activePath === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute left-0 bottom-0"></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
