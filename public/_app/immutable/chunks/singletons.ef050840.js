import { w as c } from './index.22269ec3.js';
var _;
const v = ((_ = globalThis.__sveltekit_2jgegq) == null ? void 0 : _.base) ?? '';
var g;
const k = ((g = globalThis.__sveltekit_2jgegq) == null ? void 0 : g.assets) ?? v,
	m = '1684004312808',
	R = 'sveltekit:snapshot',
	S = 'sveltekit:scroll',
	T = 'sveltekit:index',
	f = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1 };
function y(e) {
	let t = e.baseURI;
	if (!t) {
		const n = e.getElementsByTagName('base');
		t = n.length ? n[0].href : e.URL;
	}
	return t;
}
function I() {
	return { x: pageXOffset, y: pageYOffset };
}
function i(e, t) {
	return e.getAttribute(`data-sveltekit-${t}`);
}
const d = { ...f, '': f.hover };
function h(e) {
	let t = e.assignedSlot ?? e.parentNode;
	return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function x(e, t) {
	for (; e && e !== t; ) {
		if (e.nodeName.toUpperCase() === 'A' && e.hasAttribute('href')) return e;
		e = h(e);
	}
}
function O(e, t) {
	let n;
	try {
		n = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI);
	} catch {}
	const a = e instanceof SVGAElement ? e.target.baseVal : e.target,
		l = !n || !!a || E(n, t) || (e.getAttribute('rel') || '').split(/\s+/).includes('external'),
		r = (n == null ? void 0 : n.origin) === location.origin && e.hasAttribute('download');
	return { url: n, external: l, target: a, download: r };
}
function U(e) {
	let t = null,
		n = null,
		a = null,
		l = null,
		r = null,
		s = null,
		o = e;
	for (; o && o !== document.documentElement; )
		a === null && (a = i(o, 'preload-code')),
			l === null && (l = i(o, 'preload-data')),
			t === null && (t = i(o, 'keepfocus')),
			n === null && (n = i(o, 'noscroll')),
			r === null && (r = i(o, 'reload')),
			s === null && (s = i(o, 'replacestate')),
			(o = h(o));
	return {
		preload_code: d[a ?? 'off'],
		preload_data: d[l ?? 'off'],
		keep_focus: t === 'off' ? !1 : t === '' ? !0 : null,
		noscroll: n === 'off' ? !1 : n === '' ? !0 : null,
		reload: r === 'off' ? !1 : r === '' ? !0 : null,
		replace_state: s === 'off' ? !1 : s === '' ? !0 : null
	};
}
function p(e) {
	const t = c(e);
	let n = !0;
	function a() {
		(n = !0), t.update((s) => s);
	}
	function l(s) {
		(n = !1), t.set(s);
	}
	function r(s) {
		let o;
		return t.subscribe((u) => {
			(o === void 0 || (n && u !== o)) && s((o = u));
		});
	}
	return { notify: a, set: l, subscribe: r };
}
function w() {
	const { set: e, subscribe: t } = c(!1);
	let n;
	async function a() {
		clearTimeout(n);
		try {
			const l = await fetch(`${k}/_app/version.json`, {
				headers: { pragma: 'no-cache', 'cache-control': 'no-cache' }
			});
			if (!l.ok) return !1;
			const s = (await l.json()).version !== m;
			return s && (e(!0), clearTimeout(n)), s;
		} catch {
			return !1;
		}
	}
	return { subscribe: t, check: a };
}
function E(e, t) {
	return e.origin !== location.origin || !e.pathname.startsWith(t);
}
let b;
function j(e) {
	b = e.client;
}
function L(e) {
	return (...t) => b[e](...t);
}
const N = { url: p({}), page: p({}), navigating: c(null), updated: w() };
export {
	T as I,
	f as P,
	S,
	R as a,
	O as b,
	U as c,
	I as d,
	v as e,
	x as f,
	y as g,
	j as h,
	E as i,
	L as j,
	N as s
};
