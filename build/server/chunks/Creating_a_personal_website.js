import { G as escape_html } from "./index.js";
import "clsx";
const metadata = {
  "title": "Creating a personal website",
  "date": "2025-04-26",
  "summary": "Long-winded explanation for the why/how/etc of making this fairly basic website.",
  "published": true
};
const { title, date, summary, published } = metadata;
function Creating_a_personal_website_svx($$payload) {
  $$payload.out += `<div class="flex flex-col max-w-4xl"><h1 class="m-auto text-4xl font-bold">${escape_html(name)}</h1> <p>${escape_html(date)}</p></div>`;
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Creating_a_personal_website_svx,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
