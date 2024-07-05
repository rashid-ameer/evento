import { notFound } from "next/navigation";
import prisma from "./db";
import { RESULTS_PER_PAGE } from "./constants";
import { getSentenceCase } from "./utils";
import { unstable_cache } from "next/cache";

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.event.findUnique({
    where: { slug },
  });

  if (!event) {
    notFound();
  }

  return event;
});

export const getEvents = unstable_cache(async (city: string, page: number) => {
  const events = await prisma.event.findMany({
    where: { city: city === "all" ? undefined : getSentenceCase(city) },
    orderBy: {
      date: "asc",
    },
    take: RESULTS_PER_PAGE,
    skip: (page - 1) * RESULTS_PER_PAGE,
  });

  return events;
});

export const getEventCount = unstable_cache(async (city: string) => {
  if (city === "all") {
    return await prisma.event.count();
  }
  return await prisma.event.count({
    where: { city: getSentenceCase(city) },
  });
});
