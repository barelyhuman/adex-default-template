import { useEffect, useState } from "preact/hooks";

export default () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch("/api/date")
      .then((d) => d.text())
      .then((d) => setDate(d));
  }, []);

  return (
    <div class="max-w-4xl mx-auto flex flex-col justify-center items-center min-h-[100vh] gap-3">
      <h1 class="font-semibold">Adex</h1>
      <div class="mt-2">
        <button
          class="bg-neutral-800 text-white hover:bg-black border border-neutral-800 hover:border-green-400 px-6 py-2 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          {count}
        </button>
      </div>
      <div class="mt-5 flex gap-10 items-center">
        <p class="text-neutral-600">From API</p>
        <p class="text-neutral-50 font-semibold tracking-wide">{date}</p>
      </div>
    </div>
  );
};
