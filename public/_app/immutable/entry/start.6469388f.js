import { o as De, t as _e } from '../chunks/index.05b97c2d.js';
import {
	S as Ke,
	a as Ve,
	I as q,
	g as Ne,
	f as qe,
	b as ye,
	c as le,
	s as F,
	i as we,
	d as Z,
	e as V,
	P as He,
	h as Ye
} from '../chunks/singletons.ef050840.js';
import { u as Xe } from '../chunks/parse.d12b0d5b.js';
function Qe(a, o) {
	return a === '/' || o === 'ignore'
		? a
		: o === 'never'
		? a.endsWith('/')
			? a.slice(0, -1)
			: a
		: o === 'always' && !a.endsWith('/')
		? a + '/'
		: a;
}
function Ze(a) {
	return a.split('%25').map(decodeURI).join('%25');
}
function et(a) {
	for (const o in a) a[o] = decodeURIComponent(a[o]);
	return a;
}
const tt = ['href', 'pathname', 'search', 'searchParams', 'toString', 'toJSON'];
function nt(a, o) {
	const l = new URL(a);
	for (const c of tt)
		Object.defineProperty(l, c, {
			get() {
				return o(), a[c];
			},
			enumerable: !0,
			configurable: !0
		});
	return at(l), l;
}
function at(a) {
	Object.defineProperty(a, 'hash', {
		get() {
			throw new Error(
				'Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead'
			);
		}
	});
}
const rt = '/__data.json';
function ot(a) {
	return a.replace(/\/$/, '') + rt;
}
function ze(a) {
	try {
		return JSON.parse(sessionStorage[a]);
	} catch {}
}
function Me(a, o) {
	const l = JSON.stringify(o);
	try {
		sessionStorage[a] = l;
	} catch {}
}
function it(...a) {
	let o = 5381;
	for (const l of a)
		if (typeof l == 'string') {
			let c = l.length;
			for (; c; ) o = (o * 33) ^ l.charCodeAt(--c);
		} else if (ArrayBuffer.isView(l)) {
			const c = new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
			let m = c.length;
			for (; m; ) o = (o * 33) ^ c[--m];
		} else throw new TypeError('value must be a string or TypedArray');
	return (o >>> 0).toString(36);
}
const fe = window.fetch;
window.fetch = (a, o) => (
	(a instanceof Request ? a.method : (o == null ? void 0 : o.method) || 'GET') !== 'GET' &&
		te.delete(Ee(a)),
	fe(a, o)
);
const te = new Map();
function st(a, o) {
	const l = Ee(a, o),
		c = document.querySelector(l);
	if (c != null && c.textContent) {
		const { body: m, ..._ } = JSON.parse(c.textContent),
			E = c.getAttribute('data-ttl');
		return (
			E && te.set(l, { body: m, init: _, ttl: 1e3 * Number(E) }),
			Promise.resolve(new Response(m, _))
		);
	}
	return fe(a, o);
}
function ct(a, o, l) {
	if (te.size > 0) {
		const c = Ee(a, l),
			m = te.get(c);
		if (m) {
			if (
				performance.now() < m.ttl &&
				['default', 'force-cache', 'only-if-cached', void 0].includes(l == null ? void 0 : l.cache)
			)
				return new Response(m.body, m.init);
			te.delete(c);
		}
	}
	return fe(o, l);
}
function Ee(a, o) {
	let c = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
		a instanceof Request ? a.url : a
	)}]`;
	if ((o != null && o.headers) || (o != null && o.body)) {
		const m = [];
		o.headers && m.push([...new Headers(o.headers)].join(',')),
			o.body && (typeof o.body == 'string' || ArrayBuffer.isView(o.body)) && m.push(o.body),
			(c += `[data-hash="${it(...m)}"]`);
	}
	return c;
}
const lt = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function ft(a) {
	const o = [];
	return {
		pattern:
			a === '/'
				? /^\/$/
				: new RegExp(
						`^${dt(a)
							.map((c) => {
								const m = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);
								if (m)
									return (
										o.push({ name: m[1], matcher: m[2], optional: !1, rest: !0, chained: !0 }),
										'(?:/(.*))?'
									);
								const _ = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);
								if (_)
									return (
										o.push({ name: _[1], matcher: _[2], optional: !0, rest: !1, chained: !0 }),
										'(?:/([^/]+))?'
									);
								if (!c) return;
								const E = c.split(/\[(.+?)\](?!\])/);
								return (
									'/' +
									E.map((b, S) => {
										if (S % 2) {
											if (b.startsWith('x+'))
												return ve(String.fromCharCode(parseInt(b.slice(2), 16)));
											if (b.startsWith('u+'))
												return ve(
													String.fromCharCode(
														...b
															.slice(2)
															.split('-')
															.map((A) => parseInt(A, 16))
													)
												);
											const g = lt.exec(b);
											if (!g)
												throw new Error(
													`Invalid param: ${b}. Params and matcher names can only have underscores and alphanumeric characters.`
												);
											const [, N, j, C, U] = g;
											return (
												o.push({
													name: C,
													matcher: U,
													optional: !!N,
													rest: !!j,
													chained: j ? S === 1 && E[0] === '' : !1
												}),
												j ? '(.*?)' : N ? '([^/]*)?' : '([^/]+?)'
											);
										}
										return ve(b);
									}).join('')
								);
							})
							.join('')}/?$`
				  ),
		params: o
	};
}
function ut(a) {
	return !/^\([^)]+\)$/.test(a);
}
function dt(a) {
	return a.slice(1).split('/').filter(ut);
}
function pt(a, o, l) {
	const c = {},
		m = a.slice(1);
	let _ = 0;
	for (let E = 0; E < o.length; E += 1) {
		const y = o[E],
			b = m[E - _];
		if (y.chained && y.rest && _) {
			(c[y.name] = m
				.slice(E - _, E + 1)
				.filter((S) => S)
				.join('/')),
				(_ = 0);
			continue;
		}
		if (b === void 0) {
			y.rest && (c[y.name] = '');
			continue;
		}
		if (!y.matcher || l[y.matcher](b)) {
			c[y.name] = b;
			const S = o[E + 1],
				g = m[E + 1];
			S && !S.rest && S.optional && g && (_ = 0);
			continue;
		}
		if (y.optional && y.chained) {
			_++;
			continue;
		}
		return;
	}
	if (!_) return c;
}
function ve(a) {
	return a
		.normalize()
		.replace(/[[\]]/g, '\\$&')
		.replace(/%/g, '%25')
		.replace(/\//g, '%2[Ff]')
		.replace(/\?/g, '%3[Ff]')
		.replace(/#/g, '%23')
		.replace(/[.*+?^${}()|\\]/g, '\\$&');
}
function ht({ nodes: a, server_loads: o, dictionary: l, matchers: c }) {
	const m = new Set(o);
	return Object.entries(l).map(([y, [b, S, g]]) => {
		const { pattern: N, params: j } = ft(y),
			C = {
				id: y,
				exec: (U) => {
					const A = N.exec(U);
					if (A) return pt(A, j, c);
				},
				errors: [1, ...(g || [])].map((U) => a[U]),
				layouts: [0, ...(S || [])].map(E),
				leaf: _(b)
			};
		return (C.errors.length = C.layouts.length = Math.max(C.errors.length, C.layouts.length)), C;
	});
	function _(y) {
		const b = y < 0;
		return b && (y = ~y), [b, a[y]];
	}
	function E(y) {
		return y === void 0 ? y : [m.has(y), a[y]];
	}
}
let ee = class {
		constructor(o, l) {
			(this.status = o),
				typeof l == 'string'
					? (this.body = { message: l })
					: l
					? (this.body = l)
					: (this.body = { message: `Error: ${o}` });
		}
		toString() {
			return JSON.stringify(this.body);
		}
	},
	Fe = class {
		constructor(o, l) {
			(this.status = o), (this.location = l);
		}
	};
async function mt(a) {
	var o;
	for (const l in a)
		if (typeof ((o = a[l]) == null ? void 0 : o.then) == 'function')
			return Object.fromEntries(
				await Promise.all(Object.entries(a).map(async ([c, m]) => [c, await m]))
			);
	return a;
}
const Ge = new Set(['load', 'prerender', 'csr', 'ssr', 'trailingSlash', 'config']);
[...Ge];
const gt = new Set([...Ge, 'actions']);
[...gt];
function _t(a) {
	return a.filter((o) => o != null);
}
const yt = 'x-sveltekit-invalidated',
	z = ze(Ke) ?? {},
	Q = ze(Ve) ?? {};
function be(a) {
	z[a] = Z();
}
function wt(a, o) {
	var Ce;
	const l = ht(a),
		c = a.nodes[0],
		m = a.nodes[1];
	c(), m();
	const _ = document.documentElement,
		E = [],
		y = [];
	let b = null;
	const S = { before_navigate: [], after_navigate: [] };
	let g = { branch: [], error: null, url: null },
		N = !1,
		j = !1,
		C = !0,
		U = !1,
		A = !1,
		G = !1,
		J = !1,
		H,
		$ = (Ce = history.state) == null ? void 0 : Ce[q];
	$ || (($ = Date.now()), history.replaceState({ ...history.state, [q]: $ }, '', location.href));
	const ue = z[$];
	ue && ((history.scrollRestoration = 'manual'), scrollTo(ue.x, ue.y));
	let M, ne, ae;
	async function Re() {
		(ae = ae || Promise.resolve()), await ae, (ae = null);
		const e = new URL(location.href),
			t = Y(e, !0);
		b = null;
		const r = (ne = {}),
			n = t && (await he(t));
		if (r === ne && n) {
			if (n.type === 'redirect') return re(new URL(n.location, e).href, {}, [e.pathname], r);
			n.props.page !== void 0 && (M = n.props.page), H.$set(n.props);
		}
	}
	function xe(e) {
		y.some((t) => (t == null ? void 0 : t.snapshot)) &&
			(Q[e] = y.map((t) => {
				var r;
				return (r = t == null ? void 0 : t.snapshot) == null ? void 0 : r.capture();
			}));
	}
	function ke(e) {
		var t;
		(t = Q[e]) == null ||
			t.forEach((r, n) => {
				var i, s;
				(s = (i = y[n]) == null ? void 0 : i.snapshot) == null || s.restore(r);
			});
	}
	function Le() {
		be($), Me(Ke, z), xe($), Me(Ve, Q);
	}
	async function re(
		e,
		{
			noScroll: t = !1,
			replaceState: r = !1,
			keepFocus: n = !1,
			state: i = {},
			invalidateAll: s = !1
		},
		u,
		d
	) {
		return (
			typeof e == 'string' && (e = new URL(e, Ne(document))),
			ce({
				url: e,
				scroll: t ? Z() : null,
				keepfocus: n,
				redirect_chain: u,
				details: { state: i, replaceState: r },
				nav_token: d,
				accepted: () => {
					s && (J = !0);
				},
				blocked: () => {},
				type: 'goto'
			})
		);
	}
	async function Pe(e) {
		return (
			(b = {
				id: e.id,
				promise: he(e).then((t) => (t.type === 'loaded' && t.state.error && (b = null), t))
			}),
			b.promise
		);
	}
	async function oe(...e) {
		const r = l
			.filter((n) => e.some((i) => n.exec(i)))
			.map((n) => Promise.all([...n.layouts, n.leaf].map((i) => (i == null ? void 0 : i[1]()))));
		await Promise.all(r);
	}
	function Ae(e) {
		var n;
		g = e.state;
		const t = document.querySelector('style[data-sveltekit]');
		t && t.remove(),
			(M = e.props.page),
			(H = new a.root({ target: o, props: { ...e.props, stores: F, components: y }, hydrate: !0 })),
			ke($);
		const r = {
			from: null,
			to: {
				params: g.params,
				route: { id: ((n = g.route) == null ? void 0 : n.id) ?? null },
				url: new URL(location.href)
			},
			willUnload: !1,
			type: 'enter'
		};
		S.after_navigate.forEach((i) => i(r)), (j = !0);
	}
	async function W({ url: e, params: t, branch: r, status: n, error: i, route: s, form: u }) {
		let d = 'never';
		for (const h of r) (h == null ? void 0 : h.slash) !== void 0 && (d = h.slash);
		(e.pathname = Qe(e.pathname, d)), (e.search = e.search);
		const w = {
			type: 'loaded',
			state: { url: e, params: t, branch: r, error: i, route: s },
			props: { constructors: _t(r).map((h) => h.node.component) }
		};
		u !== void 0 && (w.props.form = u);
		let p = {},
			R = !M,
			k = 0;
		for (let h = 0; h < Math.max(r.length, g.branch.length); h += 1) {
			const f = r[h],
				O = g.branch[h];
			(f == null ? void 0 : f.data) !== (O == null ? void 0 : O.data) && (R = !0),
				f && ((p = { ...p, ...f.data }), R && (w.props[`data_${k}`] = p), (k += 1));
		}
		return (
			(!g.url || e.href !== g.url.href || g.error !== i || (u !== void 0 && u !== M.form) || R) &&
				(w.props.page = {
					error: i,
					params: t,
					route: { id: (s == null ? void 0 : s.id) ?? null },
					status: n,
					url: new URL(e),
					form: u ?? null,
					data: R ? p : M.data
				}),
			w
		);
	}
	async function de({ loader: e, parent: t, url: r, params: n, route: i, server_data_node: s }) {
		var p, R, k;
		let u = null;
		const d = { dependencies: new Set(), params: new Set(), parent: !1, route: !1, url: !1 },
			w = await e();
		if ((p = w.universal) != null && p.load) {
			let P = function (...f) {
				for (const O of f) {
					const { href: T } = new URL(O, r);
					d.dependencies.add(T);
				}
			};
			const h = {
				route: {
					get id() {
						return (d.route = !0), i.id;
					}
				},
				params: new Proxy(n, { get: (f, O) => (d.params.add(O), f[O]) }),
				data: (s == null ? void 0 : s.data) ?? null,
				url: nt(r, () => {
					d.url = !0;
				}),
				async fetch(f, O) {
					let T;
					f instanceof Request
						? ((T = f.url),
						  (O = {
								body: f.method === 'GET' || f.method === 'HEAD' ? void 0 : await f.blob(),
								cache: f.cache,
								credentials: f.credentials,
								headers: f.headers,
								integrity: f.integrity,
								keepalive: f.keepalive,
								method: f.method,
								mode: f.mode,
								redirect: f.redirect,
								referrer: f.referrer,
								referrerPolicy: f.referrerPolicy,
								signal: f.signal,
								...O
						  }))
						: (T = f);
					const D = new URL(T, r);
					return (
						P(D.href),
						D.origin === r.origin && (T = D.href.slice(r.origin.length)),
						j ? ct(T, D.href, O) : st(T, O)
					);
				},
				setHeaders: () => {},
				depends: P,
				parent() {
					return (d.parent = !0), t();
				}
			};
			(u = (await w.universal.load.call(null, h)) ?? null), (u = u ? await mt(u) : null);
		}
		return {
			node: w,
			loader: e,
			server: s,
			universal: (R = w.universal) != null && R.load ? { type: 'data', data: u, uses: d } : null,
			data: u ?? (s == null ? void 0 : s.data) ?? null,
			slash:
				((k = w.universal) == null ? void 0 : k.trailingSlash) ?? (s == null ? void 0 : s.slash)
		};
	}
	function Oe(e, t, r, n, i) {
		if (J) return !0;
		if (!n) return !1;
		if ((n.parent && e) || (n.route && t) || (n.url && r)) return !0;
		for (const s of n.params) if (i[s] !== g.params[s]) return !0;
		for (const s of n.dependencies) if (E.some((u) => u(new URL(s)))) return !0;
		return !1;
	}
	function pe(e, t) {
		return (e == null ? void 0 : e.type) === 'data'
			? e
			: (e == null ? void 0 : e.type) === 'skip'
			? t ?? null
			: null;
	}
	async function he({ id: e, invalidating: t, url: r, params: n, route: i }) {
		if ((b == null ? void 0 : b.id) === e) return b.promise;
		const { errors: s, layouts: u, leaf: d } = i,
			w = [...u, d];
		s.forEach((v) => (v == null ? void 0 : v().catch(() => {}))),
			w.forEach((v) => (v == null ? void 0 : v[1]().catch(() => {})));
		let p = null;
		const R = g.url ? e !== g.url.pathname + g.url.search : !1,
			k = g.route ? i.id !== g.route.id : !1;
		let P = !1;
		const h = w.map((v, L) => {
			var K;
			const x = g.branch[L],
				I =
					!!(v != null && v[0]) &&
					((x == null ? void 0 : x.loader) !== v[1] ||
						Oe(P, k, R, (K = x.server) == null ? void 0 : K.uses, n));
			return I && (P = !0), I;
		});
		if (h.some(Boolean)) {
			try {
				p = await Je(r, h);
			} catch (v) {
				return ie({
					status: v instanceof ee ? v.status : 500,
					error: await X(v, { url: r, params: n, route: { id: i.id } }),
					url: r,
					route: i
				});
			}
			if (p.type === 'redirect') return p;
		}
		const f = p == null ? void 0 : p.nodes;
		let O = !1;
		const T = w.map(async (v, L) => {
			var me;
			if (!v) return;
			const x = g.branch[L],
				I = f == null ? void 0 : f[L];
			if (
				(!I || I.type === 'skip') &&
				v[1] === (x == null ? void 0 : x.loader) &&
				!Oe(O, k, R, (me = x.universal) == null ? void 0 : me.uses, n)
			)
				return x;
			if (((O = !0), (I == null ? void 0 : I.type) === 'error')) throw I;
			return de({
				loader: v[1],
				url: r,
				params: n,
				route: i,
				parent: async () => {
					var je;
					const Ie = {};
					for (let ge = 0; ge < L; ge += 1)
						Object.assign(Ie, (je = await T[ge]) == null ? void 0 : je.data);
					return Ie;
				},
				server_data_node: pe(
					I === void 0 && v[0] ? { type: 'skip' } : I ?? null,
					v[0] ? (x == null ? void 0 : x.server) : void 0
				)
			});
		});
		for (const v of T) v.catch(() => {});
		const D = [];
		for (let v = 0; v < w.length; v += 1)
			if (w[v])
				try {
					D.push(await T[v]);
				} catch (L) {
					if (L instanceof Fe) return { type: 'redirect', location: L.location };
					let x = 500,
						I;
					if (f != null && f.includes(L)) (x = L.status ?? x), (I = L.error);
					else if (L instanceof ee) (x = L.status), (I = L.body);
					else {
						if (await F.updated.check()) return await B(r);
						I = await X(L, { params: n, url: r, route: { id: i.id } });
					}
					const K = await Ue(v, D, s);
					return K
						? await W({
								url: r,
								params: n,
								branch: D.slice(0, K.idx).concat(K.node),
								status: x,
								error: I,
								route: i
						  })
						: await $e(r, { id: i.id }, I, x);
				}
			else D.push(void 0);
		return await W({
			url: r,
			params: n,
			branch: D,
			status: 200,
			error: null,
			route: i,
			form: t ? void 0 : null
		});
	}
	async function Ue(e, t, r) {
		for (; e--; )
			if (r[e]) {
				let n = e;
				for (; !t[n]; ) n -= 1;
				try {
					return {
						idx: n + 1,
						node: { node: await r[e](), loader: r[e], data: {}, server: null, universal: null }
					};
				} catch {
					continue;
				}
			}
	}
	async function ie({ status: e, error: t, url: r, route: n }) {
		const i = {};
		let s = null;
		if (a.server_loads[0] === 0)
			try {
				const p = await Je(r, [!0]);
				if (p.type !== 'data' || (p.nodes[0] && p.nodes[0].type !== 'data')) throw 0;
				s = p.nodes[0] ?? null;
			} catch {
				(r.origin !== location.origin || r.pathname !== location.pathname || N) && (await B(r));
			}
		const d = await de({
				loader: c,
				url: r,
				params: i,
				route: n,
				parent: () => Promise.resolve({}),
				server_data_node: pe(s)
			}),
			w = { node: await m(), loader: m, universal: null, server: null, data: null };
		return await W({ url: r, params: i, branch: [d, w], status: e, error: t, route: null });
	}
	function Y(e, t) {
		if (we(e, V)) return;
		const r = se(e);
		for (const n of l) {
			const i = n.exec(r);
			if (i) return { id: e.pathname + e.search, invalidating: t, route: n, params: et(i), url: e };
		}
	}
	function se(e) {
		return Ze(e.pathname.slice(V.length) || '/');
	}
	function Te({ url: e, type: t, intent: r, delta: n }) {
		var d, w;
		let i = !1;
		const s = {
			from: {
				params: g.params,
				route: { id: ((d = g.route) == null ? void 0 : d.id) ?? null },
				url: g.url
			},
			to: {
				params: (r == null ? void 0 : r.params) ?? null,
				route: { id: ((w = r == null ? void 0 : r.route) == null ? void 0 : w.id) ?? null },
				url: e
			},
			willUnload: !r,
			type: t
		};
		n !== void 0 && (s.delta = n);
		const u = {
			...s,
			cancel: () => {
				i = !0;
			}
		};
		return A || S.before_navigate.forEach((p) => p(u)), i ? null : s;
	}
	async function ce({
		url: e,
		scroll: t,
		keepfocus: r,
		redirect_chain: n,
		details: i,
		type: s,
		delta: u,
		nav_token: d = {},
		accepted: w,
		blocked: p
	}) {
		var T, D, v;
		const R = Y(e, !1),
			k = Te({ url: e, type: s, delta: u, intent: R });
		if (!k) {
			p();
			return;
		}
		const P = $;
		w(), (A = !0), j && F.navigating.set(k), (ne = d);
		let h = R && (await he(R));
		if (!h) {
			if (we(e, V)) return await B(e);
			h = await $e(
				e,
				{ id: null },
				await X(new Error(`Not found: ${e.pathname}`), { url: e, params: {}, route: { id: null } }),
				404
			);
		}
		if (((e = (R == null ? void 0 : R.url) || e), ne !== d)) return !1;
		if (h.type === 'redirect')
			if (n.length > 10 || n.includes(e.pathname))
				h = await ie({
					status: 500,
					error: await X(new Error('Redirect loop'), { url: e, params: {}, route: { id: null } }),
					url: e,
					route: { id: null }
				});
			else return re(new URL(h.location, e).href, {}, [...n, e.pathname], d), !1;
		else
			((T = h.props.page) == null ? void 0 : T.status) >= 400 &&
				(await F.updated.check()) &&
				(await B(e));
		if (
			((E.length = 0),
			(J = !1),
			(U = !0),
			be(P),
			xe(P),
			(D = h.props.page) != null &&
				D.url &&
				h.props.page.url.pathname !== e.pathname &&
				(e.pathname = (v = h.props.page) == null ? void 0 : v.url.pathname),
			i)
		) {
			const L = i.replaceState ? 0 : 1;
			if (
				((i.state[q] = $ += L),
				history[i.replaceState ? 'replaceState' : 'pushState'](i.state, '', e),
				!i.replaceState)
			) {
				let x = $ + 1;
				for (; Q[x] || z[x]; ) delete Q[x], delete z[x], (x += 1);
			}
		}
		(b = null),
			j ? ((g = h.state), h.props.page && (h.props.page.url = e), H.$set(h.props)) : Ae(h);
		const { activeElement: f } = document;
		if ((await _e(), C)) {
			const L = e.hash && document.getElementById(decodeURIComponent(e.hash.slice(1)));
			t ? scrollTo(t.x, t.y) : L ? L.scrollIntoView() : scrollTo(0, 0);
		}
		const O = document.activeElement !== f && document.activeElement !== document.body;
		!r && !O && Se(),
			(C = !0),
			h.props.page && (M = h.props.page),
			(A = !1),
			s === 'popstate' && ke($),
			S.after_navigate.forEach((L) => L(k)),
			F.navigating.set(null),
			(U = !1);
	}
	async function $e(e, t, r, n) {
		return e.origin === location.origin && e.pathname === location.pathname && !N
			? await ie({ status: n, error: r, url: e, route: t })
			: await B(e);
	}
	function B(e) {
		return (location.href = e.href), new Promise(() => {});
	}
	function We() {
		let e;
		_.addEventListener('mousemove', (s) => {
			const u = s.target;
			clearTimeout(e),
				(e = setTimeout(() => {
					n(u, 2);
				}, 20));
		});
		function t(s) {
			n(s.composedPath()[0], 1);
		}
		_.addEventListener('mousedown', t), _.addEventListener('touchstart', t, { passive: !0 });
		const r = new IntersectionObserver(
			(s) => {
				for (const u of s)
					u.isIntersecting && (oe(se(new URL(u.target.href))), r.unobserve(u.target));
			},
			{ threshold: 0 }
		);
		function n(s, u) {
			const d = qe(s, _);
			if (!d) return;
			const { url: w, external: p, download: R } = ye(d, V);
			if (p || R) return;
			const k = le(d);
			if (!k.reload)
				if (u <= k.preload_data) {
					const P = Y(w, !1);
					P && Pe(P);
				} else u <= k.preload_code && oe(se(w));
		}
		function i() {
			r.disconnect();
			for (const s of _.querySelectorAll('a')) {
				const { url: u, external: d, download: w } = ye(s, V);
				if (d || w) continue;
				const p = le(s);
				p.reload ||
					(p.preload_code === He.viewport && r.observe(s),
					p.preload_code === He.eager && oe(se(u)));
			}
		}
		S.after_navigate.push(i), i();
	}
	function X(e, t) {
		return e instanceof ee
			? e.body
			: a.hooks.handleError({ error: e, event: t }) ?? {
					message: t.route.id != null ? 'Internal Error' : 'Not Found'
			  };
	}
	return {
		after_navigate: (e) => {
			De(
				() => (
					S.after_navigate.push(e),
					() => {
						const t = S.after_navigate.indexOf(e);
						S.after_navigate.splice(t, 1);
					}
				)
			);
		},
		before_navigate: (e) => {
			De(
				() => (
					S.before_navigate.push(e),
					() => {
						const t = S.before_navigate.indexOf(e);
						S.before_navigate.splice(t, 1);
					}
				)
			);
		},
		disable_scroll_handling: () => {
			(U || !j) && (C = !1);
		},
		goto: (e, t = {}) => re(e, t, []),
		invalidate: (e) => {
			if (typeof e == 'function') E.push(e);
			else {
				const { href: t } = new URL(e, location.href);
				E.push((r) => r.href === t);
			}
			return Re();
		},
		invalidate_all: () => ((J = !0), Re()),
		preload_data: async (e) => {
			const t = new URL(e, Ne(document)),
				r = Y(t, !1);
			if (!r) throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);
			await Pe(r);
		},
		preload_code: oe,
		apply_action: async (e) => {
			if (e.type === 'error') {
				const t = new URL(location.href),
					{ branch: r, route: n } = g;
				if (!n) return;
				const i = await Ue(g.branch.length, r, n.errors);
				if (i) {
					const s = await W({
						url: t,
						params: g.params,
						branch: r.slice(0, i.idx).concat(i.node),
						status: e.status ?? 500,
						error: e.error,
						route: n
					});
					(g = s.state), H.$set(s.props), _e().then(Se);
				}
			} else
				e.type === 'redirect'
					? re(e.location, { invalidateAll: !0 }, [])
					: (H.$set({ form: null, page: { ...M, form: e.data, status: e.status } }),
					  await _e(),
					  H.$set({ form: e.data }),
					  e.type === 'success' && Se());
		},
		_start_router: () => {
			var e;
			(history.scrollRestoration = 'manual'),
				addEventListener('beforeunload', (t) => {
					var n;
					let r = !1;
					if ((Le(), !A)) {
						const i = {
							from: {
								params: g.params,
								route: { id: ((n = g.route) == null ? void 0 : n.id) ?? null },
								url: g.url
							},
							to: null,
							willUnload: !0,
							type: 'leave',
							cancel: () => (r = !0)
						};
						S.before_navigate.forEach((s) => s(i));
					}
					r ? (t.preventDefault(), (t.returnValue = '')) : (history.scrollRestoration = 'auto');
				}),
				addEventListener('visibilitychange', () => {
					document.visibilityState === 'hidden' && Le();
				}),
				((e = navigator.connection) != null && e.saveData) || We(),
				_.addEventListener('click', (t) => {
					if (
						t.button ||
						t.which !== 1 ||
						t.metaKey ||
						t.ctrlKey ||
						t.shiftKey ||
						t.altKey ||
						t.defaultPrevented
					)
						return;
					const r = qe(t.composedPath()[0], _);
					if (!r) return;
					const { url: n, external: i, target: s, download: u } = ye(r, V);
					if (!n) return;
					if (s === '_parent' || s === '_top') {
						if (window.parent !== window) return;
					} else if (s && s !== '_self') return;
					const d = le(r);
					if (
						(!(r instanceof SVGAElement) &&
							n.protocol !== location.protocol &&
							!(n.protocol === 'https:' || n.protocol === 'http:')) ||
						u
					)
						return;
					if (i || d.reload) {
						Te({ url: n, type: 'link' }) ? (A = !0) : t.preventDefault();
						return;
					}
					const [p, R] = n.href.split('#');
					if (R !== void 0 && p === location.href.split('#')[0]) {
						if (
							((G = !0),
							be($),
							(g.url = n),
							F.page.set({ ...M, url: n }),
							F.page.notify(),
							!d.replace_state)
						)
							return;
						(G = !1), t.preventDefault();
					}
					ce({
						url: n,
						scroll: d.noscroll ? Z() : null,
						keepfocus: d.keep_focus ?? !1,
						redirect_chain: [],
						details: { state: {}, replaceState: d.replace_state ?? n.href === location.href },
						accepted: () => t.preventDefault(),
						blocked: () => t.preventDefault(),
						type: 'link'
					});
				}),
				_.addEventListener('submit', (t) => {
					if (t.defaultPrevented) return;
					const r = HTMLFormElement.prototype.cloneNode.call(t.target),
						n = t.submitter;
					if (((n == null ? void 0 : n.formMethod) || r.method) !== 'get') return;
					const s = new URL(
						((n == null ? void 0 : n.hasAttribute('formaction')) &&
							(n == null ? void 0 : n.formAction)) ||
							r.action
					);
					if (we(s, V)) return;
					const u = t.target,
						{ keep_focus: d, noscroll: w, reload: p, replace_state: R } = le(u);
					if (p) return;
					t.preventDefault(), t.stopPropagation();
					const k = new FormData(u),
						P = n == null ? void 0 : n.getAttribute('name');
					P && k.append(P, (n == null ? void 0 : n.getAttribute('value')) ?? ''),
						(s.search = new URLSearchParams(k).toString()),
						ce({
							url: s,
							scroll: w ? Z() : null,
							keepfocus: d ?? !1,
							redirect_chain: [],
							details: { state: {}, replaceState: R ?? s.href === location.href },
							nav_token: {},
							accepted: () => {},
							blocked: () => {},
							type: 'form'
						});
				}),
				addEventListener('popstate', async (t) => {
					var r;
					if ((r = t.state) != null && r[q]) {
						if (t.state[q] === $) return;
						const n = z[t.state[q]];
						if (g.url.href.split('#')[0] === location.href.split('#')[0]) {
							(z[$] = Z()), ($ = t.state[q]), scrollTo(n.x, n.y);
							return;
						}
						const i = t.state[q] - $;
						await ce({
							url: new URL(location.href),
							scroll: n,
							keepfocus: !1,
							redirect_chain: [],
							details: null,
							accepted: () => {
								$ = t.state[q];
							},
							blocked: () => {
								history.go(-i);
							},
							type: 'popstate',
							delta: i
						});
					}
				}),
				addEventListener('hashchange', () => {
					G && ((G = !1), history.replaceState({ ...history.state, [q]: ++$ }, '', location.href));
				});
			for (const t of document.querySelectorAll('link')) t.rel === 'icon' && (t.href = t.href);
			addEventListener('pageshow', (t) => {
				t.persisted && F.navigating.set(null);
			});
		},
		_hydrate: async ({
			status: e = 200,
			error: t,
			node_ids: r,
			params: n,
			route: i,
			data: s,
			form: u
		}) => {
			N = !0;
			const d = new URL(location.href);
			({ params: n = {}, route: i = { id: null } } = Y(d, !1) || {});
			let w;
			try {
				const p = r.map(async (P, h) => {
						const f = s[h];
						return (
							f != null && f.uses && (f.uses = Be(f.uses)),
							de({
								loader: a.nodes[P],
								url: d,
								params: n,
								route: i,
								parent: async () => {
									const O = {};
									for (let T = 0; T < h; T += 1) Object.assign(O, (await p[T]).data);
									return O;
								},
								server_data_node: pe(f)
							})
						);
					}),
					R = await Promise.all(p),
					k = l.find(({ id: P }) => P === i.id);
				if (k) {
					const P = k.layouts;
					for (let h = 0; h < P.length; h++) P[h] || R.splice(h, 0, void 0);
				}
				w = await W({
					url: d,
					params: n,
					branch: R,
					status: e,
					error: t,
					form: u,
					route: k ?? null
				});
			} catch (p) {
				if (p instanceof Fe) {
					await B(new URL(p.location, location.href));
					return;
				}
				w = await ie({
					status: p instanceof ee ? p.status : 500,
					error: await X(p, { url: d, params: n, route: i }),
					url: d,
					route: i
				});
			}
			Ae(w);
		}
	};
}
async function Je(a, o) {
	const l = new URL(a);
	(l.pathname = ot(a.pathname)), l.searchParams.append(yt, o.map((m) => (m ? '1' : '0')).join(''));
	const c = await fe(l.href);
	if (!c.ok) throw new ee(c.status, await c.json());
	return new Promise(async (m) => {
		var g;
		const _ = new Map(),
			E = c.body.getReader(),
			y = new TextDecoder();
		function b(N) {
			return Xe(N, {
				Promise: (j) =>
					new Promise((C, U) => {
						_.set(j, { fulfil: C, reject: U });
					})
			});
		}
		let S = '';
		for (;;) {
			const { done: N, value: j } = await E.read();
			if (N && !S) break;
			for (
				S +=
					!j && S
						? `
`
						: y.decode(j);
				;

			) {
				const C = S.indexOf(`
`);
				if (C === -1) break;
				const U = JSON.parse(S.slice(0, C));
				if (((S = S.slice(C + 1)), U.type === 'redirect')) return m(U);
				if (U.type === 'data')
					(g = U.nodes) == null ||
						g.forEach((A) => {
							(A == null ? void 0 : A.type) === 'data' &&
								((A.uses = Be(A.uses)), (A.data = b(A.data)));
						}),
						m(U);
				else if (U.type === 'chunk') {
					const { id: A, data: G, error: J } = U,
						H = _.get(A);
					_.delete(A), J ? H.reject(b(J)) : H.fulfil(b(G));
				}
			}
		}
	});
}
function Be(a) {
	return {
		dependencies: new Set((a == null ? void 0 : a.dependencies) ?? []),
		params: new Set((a == null ? void 0 : a.params) ?? []),
		parent: !!(a != null && a.parent),
		route: !!(a != null && a.route),
		url: !!(a != null && a.url)
	};
}
function Se() {
	const a = document.querySelector('[autofocus]');
	if (a) a.focus();
	else {
		const o = document.body,
			l = o.getAttribute('tabindex');
		(o.tabIndex = -1),
			o.focus({ preventScroll: !0, focusVisible: !1 }),
			l !== null ? o.setAttribute('tabindex', l) : o.removeAttribute('tabindex');
		const c = getSelection();
		if (c && c.type !== 'None') {
			const m = [];
			for (let _ = 0; _ < c.rangeCount; _ += 1) m.push(c.getRangeAt(_));
			setTimeout(() => {
				if (c.rangeCount === m.length) {
					for (let _ = 0; _ < c.rangeCount; _ += 1) {
						const E = m[_],
							y = c.getRangeAt(_);
						if (
							E.commonAncestorContainer !== y.commonAncestorContainer ||
							E.startContainer !== y.startContainer ||
							E.endContainer !== y.endContainer ||
							E.startOffset !== y.startOffset ||
							E.endOffset !== y.endOffset
						)
							return;
					}
					c.removeAllRanges();
				}
			});
		}
	}
}
async function xt(a, o, l) {
	const c = wt(a, o);
	Ye({ client: c }),
		l ? await c._hydrate(l) : c.goto(location.href, { replaceState: !0 }),
		c._start_router();
}
export { xt as start };
