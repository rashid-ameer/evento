"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchForm() {
  const [searchText, setSearchText] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText.trim()) return;

    router.push(`/events/${searchText}`);
  };

  return (
    <form
      className="w-full sm:w-[36.25rem]"
      onSubmit={handleSubmit}>
      <input
        className="w-full h-16 rounded-lg bg-white/5 outline-none px-4 ring-2 ring-transparent focus-within:ring-accent/50 transition-all ease-in-out"
        type="search"
        placeholder="Search Event in any city"
        spellCheck="false"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
export default SearchForm;
