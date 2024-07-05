import Image from "next/image";

import { TEvent } from "@/lib/types";
import { H1 } from "@/components";
import { Metadata } from "next";
import { getEvent } from "@/lib/api";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const event = await getEvent(slug);

  return {
    title: `${event.name} | ByteGrad`,
  };
}

async function Event({ params }: Props) {
  const slug = params.slug;

  const event = await getEvent(slug);

  return (
    <main>
      <section className="relative py-14 md:py-20 overflow-hidden flex items-center justify-center">
        <Image
          className="object-cover blur-3xl"
          src={event.imageUrl}
          alt=""
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={30}
          priority
        />

        <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-16">
          <Image
            className="rounded-xl border-2 border-white/10 object-cover"
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />

          <div className="flex flex-col">
            <time className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </time>

            <H1 className="mb-2 mt-1 lg:text-5xl">{event.name}</H1>
            <p className="whitespace-nowrap text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button className="bg-white/20 text-lg capitalize border-white/10 border-2 rounded-md py-2 mt-5 lg:mt-auto hover:scale-105 focus:scale-105 active:scale-[1.02] transition">
              Get tickets
            </button>
          </div>
        </div>
      </section>

      <div className="text-center py-16 px-3 sm:px-9">
        <section className="mb-12">
          <h2 className="text-2xl mb-2">{event.name}</h2>
          <p className="max-w-4xl mx-auto text-lg text-white/75">
            {event.description}
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-2">Location</h2>
          <p className="text-lg text-white/75">{event.location}</p>
        </section>
      </div>
    </main>
  );
}
export default Event;
