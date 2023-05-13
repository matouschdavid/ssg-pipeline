import {
	M as K,
	N as ee,
	S as X,
	i as Y,
	s as Z,
	k as v,
	C as G,
	a as I,
	q as j,
	l as g,
	m as _,
	D as L,
	h as f,
	c as P,
	r as U,
	n,
	p as F,
	b as H,
	F as r,
	O as Q,
	u as W,
	G as q,
	P as te,
	H as se,
	y as re,
	Q as ae,
	z as ne,
	E as oe,
	A as le,
	g as ce,
	d as ie,
	B as ue
} from '../chunks/index.05b97c2d.js';
import { w as de } from '../chunks/index.22269ec3.js';
const fe = !0,
	xe = Object.freeze(
		Object.defineProperty({ __proto__: null, prerender: fe }, Symbol.toStringTag, {
			value: 'Module'
		})
	);
function J(e) {
	return Object.prototype.toString.call(e) === '[object Date]';
}
function V(e, s, t, a) {
	if (typeof t == 'number' || J(t)) {
		const o = a - t,
			l = (t - s) / (e.dt || 1 / 60),
			i = e.opts.stiffness * o,
			c = e.opts.damping * l,
			m = (i - c) * e.inv_mass,
			d = (l + m) * e.dt;
		return Math.abs(d) < e.opts.precision && Math.abs(o) < e.opts.precision
			? a
			: ((e.settled = !1), J(t) ? new Date(t.getTime() + d) : t + d);
	} else {
		if (Array.isArray(t)) return t.map((o, l) => V(e, s[l], t[l], a[l]));
		if (typeof t == 'object') {
			const o = {};
			for (const l in t) o[l] = V(e, s[l], t[l], a[l]);
			return o;
		} else throw new Error(`Cannot spring ${typeof t} values`);
	}
}
function pe(e, s = {}) {
	const t = de(e),
		{ stiffness: a = 0.15, damping: o = 0.8, precision: l = 0.01 } = s;
	let i,
		c,
		m,
		d = e,
		S = e,
		k = 1,
		x = 0,
		E = !1;
	function O(h, p = {}) {
		S = h;
		const T = (m = {});
		return e == null || p.hard || (b.stiffness >= 1 && b.damping >= 1)
			? ((E = !0), (i = K()), (d = h), t.set((e = S)), Promise.resolve())
			: (p.soft && ((x = 1 / ((p.soft === !0 ? 0.5 : +p.soft) * 60)), (k = 0)),
			  c ||
					((i = K()),
					(E = !1),
					(c = ee((M) => {
						if (E) return (E = !1), (c = null), !1;
						k = Math.min(k + x, 1);
						const w = { inv_mass: k, opts: b, settled: !0, dt: ((M - i) * 60) / 1e3 },
							y = V(w, d, e, S);
						return (i = M), (d = e), t.set((e = y)), w.settled && (c = null), !w.settled;
					}))),
			  new Promise((M) => {
					c.promise.then(() => {
						T === m && M();
					});
			  }));
	}
	const b = {
		set: O,
		update: (h, p) => O(h(S, e), p),
		subscribe: t.subscribe,
		stiffness: a,
		damping: o,
		precision: l
	};
	return b;
}
function me(e) {
	let s,
		t,
		a,
		o,
		l,
		i,
		c,
		m,
		d = Math.floor(e[1] + 1) + '',
		S,
		k,
		x,
		E = Math.floor(e[1]) + '',
		O,
		b,
		h,
		p,
		T,
		M,
		w;
	return {
		c() {
			(s = v('div')),
				(t = v('button')),
				(a = G('svg')),
				(o = G('path')),
				(l = I()),
				(i = v('div')),
				(c = v('div')),
				(m = v('strong')),
				(S = j(d)),
				(k = I()),
				(x = v('strong')),
				(O = j(E)),
				(b = I()),
				(h = v('button')),
				(p = G('svg')),
				(T = G('path')),
				this.h();
		},
		l(y) {
			s = g(y, 'DIV', { class: !0 });
			var u = _(s);
			t = g(u, 'BUTTON', { 'aria-label': !0, class: !0 });
			var C = _(t);
			a = L(C, 'svg', { 'aria-hidden': !0, viewBox: !0, class: !0 });
			var B = _(a);
			(o = L(B, 'path', { d: !0, class: !0 })),
				_(o).forEach(f),
				B.forEach(f),
				C.forEach(f),
				(l = P(u)),
				(i = g(u, 'DIV', { class: !0 }));
			var N = _(i);
			c = g(N, 'DIV', { class: !0, style: !0 });
			var R = _(c);
			m = g(R, 'STRONG', { class: !0, 'aria-hidden': !0 });
			var D = _(m);
			(S = U(D, d)), D.forEach(f), (k = P(R)), (x = g(R, 'STRONG', { class: !0 }));
			var $ = _(x);
			(O = U($, E)),
				$.forEach(f),
				R.forEach(f),
				N.forEach(f),
				(b = P(u)),
				(h = g(u, 'BUTTON', { 'aria-label': !0, class: !0 }));
			var A = _(h);
			p = L(A, 'svg', { 'aria-hidden': !0, viewBox: !0, class: !0 });
			var z = _(p);
			(T = L(z, 'path', { d: !0, class: !0 })),
				_(T).forEach(f),
				z.forEach(f),
				A.forEach(f),
				u.forEach(f),
				this.h();
		},
		h() {
			n(o, 'd', 'M0,0.5 L1,0.5'),
				n(o, 'class', 'svelte-y96mxt'),
				n(a, 'aria-hidden', 'true'),
				n(a, 'viewBox', '0 0 1 1'),
				n(a, 'class', 'svelte-y96mxt'),
				n(t, 'aria-label', 'Decrease the counter by one'),
				n(t, 'class', 'svelte-y96mxt'),
				n(m, 'class', 'hidden svelte-y96mxt'),
				n(m, 'aria-hidden', 'true'),
				n(x, 'class', 'svelte-y96mxt'),
				n(c, 'class', 'counter-digits svelte-y96mxt'),
				F(c, 'transform', 'translate(0, ' + 100 * e[2] + '%)'),
				n(i, 'class', 'counter-viewport svelte-y96mxt'),
				n(T, 'd', 'M0,0.5 L1,0.5 M0.5,0 L0.5,1'),
				n(T, 'class', 'svelte-y96mxt'),
				n(p, 'aria-hidden', 'true'),
				n(p, 'viewBox', '0 0 1 1'),
				n(p, 'class', 'svelte-y96mxt'),
				n(h, 'aria-label', 'Increase the counter by one'),
				n(h, 'class', 'svelte-y96mxt'),
				n(s, 'class', 'counter svelte-y96mxt');
		},
		m(y, u) {
			H(y, s, u),
				r(s, t),
				r(t, a),
				r(a, o),
				r(s, l),
				r(s, i),
				r(i, c),
				r(c, m),
				r(m, S),
				r(c, k),
				r(c, x),
				r(x, O),
				r(s, b),
				r(s, h),
				r(h, p),
				r(p, T),
				M || ((w = [Q(t, 'click', e[4]), Q(h, 'click', e[5])]), (M = !0));
		},
		p(y, [u]) {
			u & 2 && d !== (d = Math.floor(y[1] + 1) + '') && W(S, d),
				u & 2 && E !== (E = Math.floor(y[1]) + '') && W(O, E),
				u & 4 && F(c, 'transform', 'translate(0, ' + 100 * y[2] + '%)');
		},
		i: q,
		o: q,
		d(y) {
			y && f(s), (M = !1), te(w);
		}
	};
}
function he(e, s) {
	return ((e % s) + s) % s;
}
function _e(e, s, t) {
	let a,
		o,
		l = 0;
	const i = pe();
	se(e, i, (d) => t(1, (o = d)));
	const c = () => t(0, (l -= 1)),
		m = () => t(0, (l += 1));
	return (
		(e.$$.update = () => {
			e.$$.dirty & 1 && i.set(l), e.$$.dirty & 2 && t(2, (a = he(o, 1)));
		}),
		[l, o, a, i, c, m]
	);
}
class ve extends X {
	constructor(s) {
		super(), Y(this, s, _e, me, Z, {});
	}
}
const ge = '' + new URL('../assets/svelte-welcome.c18bcf5a.webp', import.meta.url).href,
	ye = '' + new URL('../assets/svelte-welcome.6c300099.png', import.meta.url).href;
function be(e) {
	let s, t, a, o, l, i, c, m, d, S, k, x, E, O, b, h, p, T, M, w, y;
	return (
		(w = new ve({})),
		{
			c() {
				(s = v('meta')),
					(t = I()),
					(a = v('section')),
					(o = v('h1')),
					(l = v('span')),
					(i = v('picture')),
					(c = v('source')),
					(m = I()),
					(d = v('img')),
					(k = j(`\r
\r
		to your new`)),
					(x = v('br')),
					(E = j('SvelteKit app')),
					(O = I()),
					(b = v('h2')),
					(h = j('try editing ')),
					(p = v('strong')),
					(T = j('src/routes/+page.svelte')),
					(M = I()),
					re(w.$$.fragment),
					this.h();
			},
			l(u) {
				const C = ae('svelte-t32ptj', document.head);
				(s = g(C, 'META', { name: !0, content: !0 })),
					C.forEach(f),
					(t = P(u)),
					(a = g(u, 'SECTION', { class: !0 }));
				var B = _(a);
				o = g(B, 'H1', { class: !0 });
				var N = _(o);
				l = g(N, 'SPAN', { class: !0 });
				var R = _(l);
				i = g(R, 'PICTURE', {});
				var D = _(i);
				(c = g(D, 'SOURCE', { srcset: !0, type: !0 })),
					(m = P(D)),
					(d = g(D, 'IMG', { src: !0, alt: !0, class: !0 })),
					D.forEach(f),
					R.forEach(f),
					(k = U(
						N,
						`\r
\r
		to your new`
					)),
					(x = g(N, 'BR', {})),
					(E = U(N, 'SvelteKit app')),
					N.forEach(f),
					(O = P(B)),
					(b = g(B, 'H2', {}));
				var $ = _(b);
				(h = U($, 'try editing ')), (p = g($, 'STRONG', {}));
				var A = _(p);
				(T = U(A, 'src/routes/+page.svelte')),
					A.forEach(f),
					$.forEach(f),
					(M = P(B)),
					ne(w.$$.fragment, B),
					B.forEach(f),
					this.h();
			},
			h() {
				(document.title = 'Home'),
					n(s, 'name', 'description'),
					n(s, 'content', 'Svelte demo app'),
					n(c, 'srcset', ge),
					n(c, 'type', 'image/webp'),
					oe(d.src, (S = ye)) || n(d, 'src', S),
					n(d, 'alt', 'Welcome'),
					n(d, 'class', 'svelte-19xx0bt'),
					n(l, 'class', 'welcome svelte-19xx0bt'),
					n(o, 'class', 'svelte-19xx0bt'),
					n(a, 'class', 'svelte-19xx0bt');
			},
			m(u, C) {
				r(document.head, s),
					H(u, t, C),
					H(u, a, C),
					r(a, o),
					r(o, l),
					r(l, i),
					r(i, c),
					r(i, m),
					r(i, d),
					r(o, k),
					r(o, x),
					r(o, E),
					r(a, O),
					r(a, b),
					r(b, h),
					r(b, p),
					r(p, T),
					r(a, M),
					le(w, a, null),
					(y = !0);
			},
			p: q,
			i(u) {
				y || (ce(w.$$.fragment, u), (y = !0));
			},
			o(u) {
				ie(w.$$.fragment, u), (y = !1);
			},
			d(u) {
				f(s), u && f(t), u && f(a), ue(w);
			}
		}
	);
}
class Me extends X {
	constructor(s) {
		super(), Y(this, s, null, be, Z, {});
	}
}
export { Me as component, xe as universal };
