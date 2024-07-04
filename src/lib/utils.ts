import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const getSentenceCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getFormattedDay = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
  });
};

export const getFormattedMonth = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
  });
};

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
