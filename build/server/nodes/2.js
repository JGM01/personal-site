

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.a22ZBjDR.js","_app/immutable/chunks/F52fom8h.js","_app/immutable/chunks/CahDdzms.js","_app/immutable/chunks/CQ3UEqnz.js"];
export const stylesheets = [];
export const fonts = [];
