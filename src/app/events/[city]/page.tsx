import { EventsList, H1 } from "@/components";
import { TEvent } from "@/lib/types";
import { getSentenceCase } from "@/lib/utils";

type EventsProps = {
  params: { city: string };
};

async function Events({ params }: EventsProps) {
  const city = getSentenceCase(params.city);

  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${params.city}`
  );

  const events: TEvent[] = await res.json();

  return (
    <main className="flex flex-col items-center py-24 px-3 sm:px-9 min-h-[110vh]">
      <H1 className="mb-28">
        {city === "All" ? "All Events" : `Events in ${city}`}
      </H1>

      <EventsList events={events} />
    </main>
  );
}
export default Events;
