import {
	S as x,
	i as H,
	s as S,
	k as u,
	q as h,
	a as g,
	l as d,
	m as v,
	r as b,
	h as m,
	c as k,
	b as _,
	F as E,
	u as $,
	G as q,
	H as y
} from '../chunks/index.05b97c2d.js';
import { p as C } from '../chunks/stores.cfdaed92.js';
function F(l) {
	var f;
	let a,
		t = l[0].status + '',
		r,
		o,
		n,
		p = ((f = l[0].error) == null ? void 0 : f.message) + '',
		c;
	return {
		c() {
			(a = u('h1')), (r = h(t)), (o = g()), (n = u('p')), (c = h(p));
		},
		l(e) {
			a = d(e, 'H1', {});
			var s = v(a);
			(r = b(s, t)), s.forEach(m), (o = k(e)), (n = d(e, 'P', {}));
			var i = v(n);
			(c = b(i, p)), i.forEach(m);
		},
		m(e, s) {
			_(e, a, s), E(a, r), _(e, o, s), _(e, n, s), E(n, c);
		},
		p(e, [s]) {
			var i;
			s & 1 && t !== (t = e[0].status + '') && $(r, t),
				s & 1 && p !== (p = ((i = e[0].error) == null ? void 0 : i.message) + '') && $(c, p);
		},
		i: q,
		o: q,
		d(e) {
			e && m(a), e && m(o), e && m(n);
		}
	};
}
function G(l, a, t) {
	let r;
	return y(l, C, (o) => t(0, (r = o))), [r];
}
class w extends x {
	constructor(a) {
		super(), H(this, a, G, F, S, {});
	}
}
export { w as component };
