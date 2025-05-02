

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/readings/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CWsyeU4K.js","_app/immutable/chunks/F52fom8h.js","_app/immutable/chunks/CahDdzms.js","_app/immutable/chunks/CQ3UEqnz.js"];
export const stylesheets = [];
export const fonts = [];
