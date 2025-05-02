import { G as escape_html, I as store_get, J as unsubscribe_stores, C as pop, z as push } from "../../chunks/index.js";
import { p as page } from "../../chunks/index2.js";
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<h1>Error ${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <p>${escape_html(store_get($$store_subs ??= {}, "$page", page).error.message)}</p> <a href="/">Back to Home</a>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
