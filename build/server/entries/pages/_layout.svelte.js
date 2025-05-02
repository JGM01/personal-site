import { _ as __vite_glob_0_0 } from "../../chunks/Creating_a_personal_website.js";
import { _ as __vite_glob_0_1 } from "../../chunks/Journey_of_one_canvas.js";
import { _ as __vite_glob_0_2 } from "../../chunks/Periods_should_be_outside_of_quotes.js";
import { _ as __vite_glob_0_3 } from "../../chunks/Please_just_call_it_a_computer.js";
import { D as ensure_array_like, E as attr_class, F as attr, G as escape_html, C as pop, z as push } from "../../chunks/index.js";
import { p as page } from "../../chunks/index2.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  const isRootPath = page.url.pathname === "/";
  const postModules = /* @__PURE__ */ Object.assign({ "../posts/Creating_a_personal_website.svx": __vite_glob_0_0, "../posts/Journey_of_one_canvas.svx": __vite_glob_0_1, "../posts/Periods_should_be_outside_of_quotes.svx": __vite_glob_0_2, "../posts/Please_just_call_it_a_computer.svx": __vite_glob_0_3 });
  const posts = Object.keys(postModules).map((path) => {
    const slug = path.split("/").pop()?.replace(".svx", "") ?? "";
    return {
      slug,
      metadata: postModules[path].metadata || { title: "Untitled" }
    };
  });
  const sortedPosts = [...posts].sort((a, b) => {
    if (a.metadata.date && b.metadata.date) {
      return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
    }
    return a.metadata.title.localeCompare(b.metadata.title);
  });
  let searchTerm = "";
  function filterPosts(posts2, search) {
    const lowerSearch = search.toLowerCase();
    return posts2.filter((post) => post.metadata.title.toLowerCase().includes(lowerSearch) || post.metadata.summary.toLowerCase().includes(lowerSearch));
  }
  const filteredPosts = filterPosts(sortedPosts, searchTerm);
  const each_array = ensure_array_like(filteredPosts);
  $$payload.out += `<div class="flex flex-col md:flex-row h-screen"><header${attr_class(`border-r px-12 py-4 md:flex md:flex-col md:basis-1/3 ${isRootPath ? "basis-full" : "hidden "}`)}><div class="flex flex-row my-4 justify-between"><a class="text-center text-blue-500 underline" href="/about">About</a> <a class="text-center text-blue-500 underline" href="/readings">Readings</a> <a class="text-center text-blue-500 underline" href="/info">Info</a></div> <h1 class="text-center text-4xl font-bold my-4 underline"><a href="/">Jacob's Website</a></h1> <input class="h-8 border w-full pl-2" type="text" placeholder="Search posts"${attr("value", searchTerm)}> <div class="overflow-y-auto"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { slug, metadata } = each_array[$$index];
    $$payload.out += `<div class="my-4"><a${attr("href", `/${slug}`)} class="font-semibold underline">${escape_html(metadata.title)}</a> <br> <span class="text-sm">${escape_html(metadata.summary)}</span></div>`;
  }
  $$payload.out += `<!--]--></div></header> <div class="w-full h-full flex flex-col"><main${attr_class(`p-12 pb-64 max-w-4xl mx-auto flex-1 overflow-y-auto ${isRootPath ? "hidden " : "basis-full "}`)}><a href="/" class="md:hidden text-left text-xl font-bold underline">Home</a> `;
  children($$payload);
  $$payload.out += `<!----></main></div></div>`;
  pop();
}
export {
  _layout as default
};
