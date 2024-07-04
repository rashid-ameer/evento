import { TEvent } from "@/lib/types";
import { getFormattedDay, getFormattedMonth } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: TEvent;
};

function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/event/${event.slug}`}
      className="h-[23.75rem] max-w-[31.25rem] flex-1 basis-80">
      <section className="w-full h-full relative flex flex-col rounded-xl overflow-hidden bg-white/5 hover:scale-105 active:scale-[1.02] transition">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />

        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">{event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>

        <div className="flex flex-col justify-center items-center absolute left-[0.75rem] top-[0.75rem] bg-white/30 size-[2.8125rem] rounded-md">
          <p className="text-xl font-bold -mb-1.5">
            {getFormattedDay(event.date)}
          </p>
          <p className="text-xs uppercase text-accent ">
            {getFormattedMonth(event.date)}
          </p>
        </div>
      </section>
    </Link>
  );
}
export default EventCard;
