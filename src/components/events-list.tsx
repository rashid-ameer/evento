import { TEvent } from "@/lib/types";
import EventCard from "./event-card";

type EventsListProps = {
  events: TEvent[];
};

function EventsList({ events }: EventsListProps) {
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
