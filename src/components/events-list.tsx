import { TEvent } from "@/lib/types";
import EventCard from "./event-card";
import { getEvents } from "@/lib/api";

type EventsListProps = {
  city: string;
};

async function EventsList({ city }: EventsListProps) {
  const events = await getEvents(city);

  return (
    <section className="max-w-[1100px] flex flex-wrap justify-center gap-10">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
        />
      ))}
    </section>
  );
}
export default EventsList;
