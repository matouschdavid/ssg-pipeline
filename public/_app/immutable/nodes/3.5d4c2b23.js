import { d as R } from '../chunks/environment.9aa685ef.js';
import {
	S as V,
	i as N,
	s as U,
	k as o,
	a as _,
	q as r,
	Q as W,
	l,
	h as a,
	c as w,
	m as p,
	r as s,
	n as S,
	F as e,
	b as I,
	G as Y
} from '../chunks/index.05b97c2d.js';
const X = R,
	Z = !0,
	ae = Object.freeze(
		Object.defineProperty({ __proto__: null, csr: X, prerender: Z }, Symbol.toStringTag, {
			value: 'Module'
		})
	);
function $(Q) {
	let i, T, t, m, k, A, c, x, u, P, J, K, f, M, q, g, H, j, h, B, v, L, O;
	return {
		c() {
			(i = o('meta')),
				(T = _()),
				(t = o('div')),
				(m = o('h1')),
				(k = r('About this app')),
				(A = _()),
				(c = o('p')),
				(x = r('This is a ')),
				(u = o('a')),
				(P = r('SvelteKit')),
				(J = r(` app. You can make your own by typing the
		following into your command line and following the prompts:`)),
				(K = _()),
				(f = o('pre')),
				(M = r('npm create svelte@latest')),
				(q = _()),
				(g = o('p')),
				(H =
					r(`The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.`)),
				(j = _()),
				(h = o('p')),
				(B = r('The ')),
				(v = o('a')),
				(L = r('Sverdle')),
				(O = r(` page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!`)),
				this.h();
		},
		l(d) {
			const y = W('svelte-1ds1qyu', document.head);
			(i = l(y, 'META', { name: !0, content: !0 })),
				y.forEach(a),
				(T = w(d)),
				(t = l(d, 'DIV', { class: !0 }));
			var n = p(t);
			m = l(n, 'H1', {});
			var z = p(m);
			(k = s(z, 'About this app')), z.forEach(a), (A = w(n)), (c = l(n, 'P', {}));
			var b = p(c);
			(x = s(b, 'This is a ')), (u = l(b, 'A', { href: !0 }));
			var C = p(u);
			(P = s(C, 'SvelteKit')),
				C.forEach(a),
				(J = s(
					b,
					` app. You can make your own by typing the
		following into your command line and following the prompts:`
				)),
				b.forEach(a),
				(K = w(n)),
				(f = l(n, 'PRE', {}));
			var D = p(f);
			(M = s(D, 'npm create svelte@latest')), D.forEach(a), (q = w(n)), (g = l(n, 'P', {}));
			var F = p(g);
			(H = s(
				F,
				`The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.`
			)),
				F.forEach(a),
				(j = w(n)),
				(h = l(n, 'P', {}));
			var E = p(h);
			(B = s(E, 'The ')), (v = l(E, 'A', { href: !0 }));
			var G = p(v);
			(L = s(G, 'Sverdle')),
				G.forEach(a),
				(O = s(
					E,
					` page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!`
				)),
				E.forEach(a),
				n.forEach(a),
				this.h();
		},
		h() {
			(document.title = 'About'),
				S(i, 'name', 'description'),
				S(i, 'content', 'About this app'),
				S(u, 'href', 'https://kit.svelte.dev'),
				S(v, 'href', '/sverdle'),
				S(t, 'class', 'text-column');
		},
		m(d, y) {
			e(document.head, i),
				I(d, T, y),
				I(d, t, y),
				e(t, m),
				e(m, k),
				e(t, A),
				e(t, c),
				e(c, x),
				e(c, u),
				e(u, P),
				e(c, J),
				e(t, K),
				e(t, f),
				e(f, M),
				e(t, q),
				e(t, g),
				e(g, H),
				e(t, j),
				e(t, h),
				e(h, B),
				e(h, v),
				e(v, L),
				e(h, O);
		},
		p: Y,
		i: Y,
		o: Y,
		d(d) {
			a(i), d && a(T), d && a(t);
		}
	};
}
class ne extends V {
	constructor(i) {
		super(), N(this, i, null, $, U, {});
	}
}
export { ne as component, ae as universal };
