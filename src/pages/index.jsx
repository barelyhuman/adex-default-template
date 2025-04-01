import { THEMES } from "@preachjs/themes";
import { useTheme } from "@preachjs/themes";
import { useEffect, useState } from "preact/hooks";
import { motion } from "motion/react";

const THEME_OPTIONS = [
  {
    id: THEMES.LIGHT,
    label: "Light",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-6 h-6"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
      </svg>
    ),
  },
  {
    id: THEMES.DARK,
    label: "Dark",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-6 h-6"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      </svg>
    ),
  },
  {
    id: THEMES.SYSTEM,
    label: "System",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-6 h-6"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 19l18 0" />
        <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div class="border-t border-neutral-100 dark:border-t-neutral-800 fixed flex bottom-0 left-0 right-0 w-full">
      <div class="p-4 w-full flex items-center">
        <div class="flex ml-auto p-1 z-10 bg-neutral-100 dark:bg-neutral-700 border dark:border-neutral-800 items-center justify-center rounded-md">
          {THEME_OPTIONS.map((d) => {
            return (
              <div key={d.id} class="hover:cursor-pointer relative flex">
                {d.id === theme && (
                  <motion.div
                    layoutId="theme-background"
                    className="absolute top-0 left-0 w-6 h-6 p-1 rounded-sm bg-neutral-200 dark:bg-neutral-800 -z-10"
                  />
                )}
                <div
                  class="p-1 h-6 text-neutral-600 dark:text-neutral-400 w-6 rounded-sm inline-flex items-center justify-center "
                  onClick={() => setTheme(d.id)}
                >
                  {d.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

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
          class="bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-black border dark:border-neutral-800 hover:border-green-400 px-6 py-2 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          {count}
        </button>
      </div>
      <div class="mt-5 flex gap-10 items-center">
        <p class="text-neutral-400 dark:text-neutral-600">From API</p>
        <p class="text-neutral-600 dark:text-neutral-50 font-semibold tracking-wide">
          {date}
        </p>
      </div>

      <Footer />
    </div>
  );
};
