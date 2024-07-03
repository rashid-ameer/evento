import Link from "next/link";

const routes = [
  { name: "Terms & Condition", path: "/terms-condition" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between text-xs border-t border-white/10 h-16 px-3 sm:px-9 text-white/25">
      <small className="text-xs">
        &copy; ByteGrad. Only for learning purpose
      </small>

      <ul className="flex gap-x-4 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
export default Footer;
