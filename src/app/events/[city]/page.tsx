import { EventsList, H1 } from "@/components";
import { TEvent } from "@/lib/types";
import { getSentenceCase } from "@/lib/utils";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";

type Props = {
  params: { city: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  return {
    title: `${
      city === "all" ? "All Events" : `Events in ${getSentenceCase(city)}`
    } | ByteGrad`,
  };
}

async function Events({ params }: Props) {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-3 sm:px-9 min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" ? "All Events" : `Events in ${getSentenceCase(city)}`}
      </H1>{" "}
      <Suspense fallback={<Loading />}>
        <EventsList city={params.city} />
      </Suspense>
    </main>
  );
}
export default Events;
