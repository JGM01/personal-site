import "clsx";
const metadata = {
  "title": "Periods should be outside of quotes",
  "date": "2025-04-26",
  "summary": "It makes sense to me when thinking about how punctuation scopes a sentence.",
  "published": true
};
const { title, date, summary, published } = metadata;
function Periods_should_be_outside_of_quotes_svx($$payload) {
  $$payload.out += `<p>quotes</p>`;
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Periods_should_be_outside_of_quotes_svx,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_2 as _
};
