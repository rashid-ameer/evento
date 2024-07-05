import { BASE_URL } from "./constants";
import { TEvent } from "./types";

export async function getEvent(slug: string): Promise<TEvent> {
  const res = await fetch(`${BASE_URL}/${slug}`);

  return res.json();
}

export async function getEvents(city: string): Promise<TEvent[]> {
  const res = await fetch(`${BASE_URL}?city=${city}`);

  return res.json();
}
