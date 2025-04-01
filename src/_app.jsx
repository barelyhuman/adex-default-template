import { App as AdexApp } from "adex/app";
import { hydrate as preactHydrate } from "adex/router";

export { prerender } from "adex/app";

import "virtual:adex:global.css";

import { ThemeProvider } from "@preachjs/themes";

export const App = ({ url }) => {
  return (
    <ThemeProvider>
      <AdexApp url={url} />
    </ThemeProvider>
  );
};

async function hydrate() {
  preactHydrate(<App />, document.getElementById("app"));
}

if (typeof window !== "undefined") {
  hydrate();
}
