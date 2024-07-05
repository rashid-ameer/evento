import EventCard from "./event-card";
import { getEventCount, getEvents } from "@/lib/api";
import { PaginationControls } from "@/components";
import { RESULTS_PER_PAGE } from "@/lib/constants";
import { pageSchema } from "@/lib/schemas";

type EventsListProps = {
  city: string;
  page: number;
};

async function EventsList({ city, page }: EventsListProps) {
  const parsedPage = pageSchema.safeParse(page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  const events = await getEvents(city, page);
  const totalCount = await getEventCount(city);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > page * RESULTS_PER_PAGE
      ? `/events/${city}?page=${page + 1}`
      : "";

  return (
    <section className="max-w-[1100px] flex flex-wrap justify-center gap-10">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
        />
      ))}

      <PaginationControls
        previousPath={previousPath}
        nextPath={nextPath}
      />
    </section>
  );
}
export default EventsList;
