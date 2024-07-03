import { H1, SearchForm } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <H1>Find events around you</H1>
      <p className="text-2xl lg:text-3xl mb-12 mt-7 opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent">10,000</span>{" "}
        events around you
      </p>

      {/* Search Form */}
      <SearchForm />

      <section className="mt-4 flex justify-center gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Asutin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
