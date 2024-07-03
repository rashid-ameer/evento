import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        Find events around you
      </h1>
      <p className="text-2xl lg:text-3xl mb-12 mt-7 opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent">10,000</span>{" "}
        events around you
      </p>

      <form className="w-full sm:w-[36.25rem]">
        <input
          className="w-full h-16 rounded-lg bg-white/5 outline-none px-4 ring-2 ring-transparent focus-within:ring-accent/50 transition-all ease-in-out"
          type="search"
          placeholder="Search Event in any city"
          spellCheck="false"
        />

        <section className="mt-4 flex justify-center gap-x-4 text-sm text-white/50">
          <p>Popular:</p>
          <div className="space-x-2 font-semibold">
            <Link href="/events/austin">Asutin</Link>
            <Link href="/events/seattle">Seattle</Link>
          </div>
        </section>
      </form>
    </main>
  );
}
