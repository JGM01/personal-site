export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","timelapse4.mp4","favicon.png","timelapse3.mp4","timelapse2.mp4","reimu.jpg","timelapse1.mp4","Trollface.png"]),
	mimeTypes: {".mp4":"video/mp4",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.C-iqeLl-.js",app:"_app/immutable/entry/app.DtBGR-JP.js",imports:["_app/immutable/entry/start.C-iqeLl-.js","_app/immutable/chunks/RUYM9e5c.js","_app/immutable/chunks/CahDdzms.js","_app/immutable/chunks/DT_7Z-rC.js","_app/immutable/entry/app.DtBGR-JP.js","_app/immutable/chunks/DMLQJ6fT.js","_app/immutable/chunks/CahDdzms.js","_app/immutable/chunks/CTRzo1__.js","_app/immutable/chunks/F52fom8h.js","_app/immutable/chunks/DqFeKwXw.js","_app/immutable/chunks/DT_7Z-rC.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/info",
				pattern: /^\/info\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/readings",
				pattern: /^\/readings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
