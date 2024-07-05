import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const btnStyles =
  "flex items-center gap-x-2 text-white text-sm bg-white/5 px-4 py-2 rounded-md opacity-75 hover:opacity-100 transition";

function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex items-center justify-between w-full">
      {previousPath && (
        <Link
          href={previousPath}
          className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      )}
      {nextPath && (
        <Link
          href={nextPath}
          className={cn(btnStyles, "ml-auto")}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
export default PaginationControls;
