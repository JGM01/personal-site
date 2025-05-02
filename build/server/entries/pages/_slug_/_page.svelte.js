import { K as await_block, C as pop, z as push, G as escape_html } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let slug = page.params.slug;
  let postModules = /* @__PURE__ */ Object.assign({ "../../posts/Creating_a_personal_website.svx": () => import("../../../chunks/Creating_a_personal_website.js").then((n) => n._), "../../posts/Journey_of_one_canvas.svx": () => import("../../../chunks/Journey_of_one_canvas.js").then((n) => n._), "../../posts/Periods_should_be_outside_of_quotes.svx": () => import("../../../chunks/Periods_should_be_outside_of_quotes.js").then((n) => n._), "../../posts/Please_just_call_it_a_computer.svx": () => import("../../../chunks/Please_just_call_it_a_computer.js").then((n) => n._) });
  let post = postModules[`../../posts/${slug}.svx`]?.().catch((err) => {
    console.error("Failed to load post:", err);
    return null;
  });
  await_block(
    $$payload,
    post,
    () => {
      $$payload.out += `<p>Loading...</p>`;
    },
    (module) => {
      if (module && module.default) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<!---->`;
        module.default?.($$payload, {});
        $$payload.out += `<!---->`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<p>Post not found for slug: ${escape_html(slug)}</p>`;
      }
      $$payload.out += `<!--]-->`;
    }
  );
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
