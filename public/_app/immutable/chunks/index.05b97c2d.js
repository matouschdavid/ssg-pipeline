function v() {}
function se(e, t) {
	for (const n in t) e[n] = t[n];
	return e;
}
function K(e) {
	return e();
}
function G() {
	return Object.create(null);
}
function E(e) {
	e.forEach(K);
}
function B(e) {
	return typeof e == 'function';
}
function Se(e, t) {
	return e != e ? t == t : e !== t || (e && typeof e == 'object') || typeof e == 'function';
}
let M;
function ke(e, t) {
	return M || (M = document.createElement('a')), (M.href = t), e === M.href;
}
function le(e) {
	return Object.keys(e).length === 0;
}
function oe(e, ...t) {
	if (e == null) return v;
	const n = e.subscribe(...t);
	return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Ae(e, t, n) {
	e.$$.on_destroy.push(oe(t, n));
}
function Me(e, t, n, i) {
	if (e) {
		const r = Q(e, t, n, i);
		return e[0](r);
	}
}
function Q(e, t, n, i) {
	return e[1] && i ? se(n.ctx.slice(), e[1](i(t))) : n.ctx;
}
function Te(e, t, n, i) {
	if (e[2] && i) {
		const r = e[2](i(n));
		if (t.dirty === void 0) return r;
		if (typeof r == 'object') {
			const a = [],
				s = Math.max(t.dirty.length, r.length);
			for (let c = 0; c < s; c += 1) a[c] = t.dirty[c] | r[c];
			return a;
		}
		return t.dirty | r;
	}
	return t.dirty;
}
function je(e, t, n, i, r, a) {
	if (r) {
		const s = Q(t, n, i, a);
		e.p(s, r);
	}
}
function qe(e) {
	if (e.ctx.length > 32) {
		const t = [],
			n = e.ctx.length / 32;
		for (let i = 0; i < n; i++) t[i] = -1;
		return t;
	}
	return -1;
}
function Ce(e) {
	return e ?? '';
}
function De(e) {
	return e && B(e.destroy) ? e.destroy : v;
}
const U = typeof window < 'u';
let Le = U ? () => window.performance.now() : () => Date.now(),
	V = U ? (e) => requestAnimationFrame(e) : v;
const x = new Set();
function X(e) {
	x.forEach((t) => {
		t.c(e) || (x.delete(t), t.f());
	}),
		x.size !== 0 && V(X);
}
function Oe(e) {
	let t;
	return (
		x.size === 0 && V(X),
		{
			promise: new Promise((n) => {
				x.add((t = { c: e, f: n }));
			}),
			abort() {
				x.delete(t);
			}
		}
	);
}
const ce = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : global;
'WeakMap' in ce;
let j = !1;
function ae() {
	j = !0;
}
function ue() {
	j = !1;
}
function fe(e, t, n, i) {
	for (; e < t; ) {
		const r = e + ((t - e) >> 1);
		n(r) <= i ? (e = r + 1) : (t = r);
	}
	return e;
}
function de(e) {
	if (e.hydrate_init) return;
	e.hydrate_init = !0;
	let t = e.childNodes;
	if (e.nodeName === 'HEAD') {
		const l = [];
		for (let o = 0; o < t.length; o++) {
			const f = t[o];
			f.claim_order !== void 0 && l.push(f);
		}
		t = l;
	}
	const n = new Int32Array(t.length + 1),
		i = new Int32Array(t.length);
	n[0] = -1;
	let r = 0;
	for (let l = 0; l < t.length; l++) {
		const o = t[l].claim_order,
			f = (r > 0 && t[n[r]].claim_order <= o ? r + 1 : fe(1, r, (d) => t[n[d]].claim_order, o)) - 1;
		i[l] = n[f] + 1;
		const _ = f + 1;
		(n[_] = l), (r = Math.max(_, r));
	}
	const a = [],
		s = [];
	let c = t.length - 1;
	for (let l = n[r] + 1; l != 0; l = i[l - 1]) {
		for (a.push(t[l - 1]); c >= l; c--) s.push(t[c]);
		c--;
	}
	for (; c >= 0; c--) s.push(t[c]);
	a.reverse(), s.sort((l, o) => l.claim_order - o.claim_order);
	for (let l = 0, o = 0; l < s.length; l++) {
		for (; o < a.length && s[l].claim_order >= a[o].claim_order; ) o++;
		const f = o < a.length ? a[o] : null;
		e.insertBefore(s[l], f);
	}
}
function _e(e, t) {
	if (j) {
		for (
			de(e),
				(e.actual_end_child === void 0 ||
					(e.actual_end_child !== null && e.actual_end_child.parentNode !== e)) &&
					(e.actual_end_child = e.firstChild);
			e.actual_end_child !== null && e.actual_end_child.claim_order === void 0;

		)
			e.actual_end_child = e.actual_end_child.nextSibling;
		t !== e.actual_end_child
			? (t.claim_order !== void 0 || t.parentNode !== e) && e.insertBefore(t, e.actual_end_child)
			: (e.actual_end_child = t.nextSibling);
	} else (t.parentNode !== e || t.nextSibling !== null) && e.appendChild(t);
}
function Pe(e, t, n) {
	j && !n ? _e(e, t) : (t.parentNode !== e || t.nextSibling != n) && e.insertBefore(t, n || null);
}
function he(e) {
	e.parentNode && e.parentNode.removeChild(e);
}
function ze(e, t) {
	for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
}
function me(e) {
	return document.createElement(e);
}
function pe(e) {
	return document.createElementNS('http://www.w3.org/2000/svg', e);
}
function H(e) {
	return document.createTextNode(e);
}
function Be() {
	return H(' ');
}
function He() {
	return H('');
}
function We(e, t, n, i) {
	return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function Fe(e) {
	return function (t) {
		return t.preventDefault(), e.call(this, t);
	};
}
function Re(e, t, n) {
	n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function ye(e) {
	return Array.from(e.childNodes);
}
function ge(e) {
	e.claim_info === void 0 && (e.claim_info = { last_index: 0, total_claimed: 0 });
}
function Y(e, t, n, i, r = !1) {
	ge(e);
	const a = (() => {
		for (let s = e.claim_info.last_index; s < e.length; s++) {
			const c = e[s];
			if (t(c)) {
				const l = n(c);
				return l === void 0 ? e.splice(s, 1) : (e[s] = l), r || (e.claim_info.last_index = s), c;
			}
		}
		for (let s = e.claim_info.last_index - 1; s >= 0; s--) {
			const c = e[s];
			if (t(c)) {
				const l = n(c);
				return (
					l === void 0 ? e.splice(s, 1) : (e[s] = l),
					r ? l === void 0 && e.claim_info.last_index-- : (e.claim_info.last_index = s),
					c
				);
			}
		}
		return i();
	})();
	return (a.claim_order = e.claim_info.total_claimed), (e.claim_info.total_claimed += 1), a;
}
function Z(e, t, n, i) {
	return Y(
		e,
		(r) => r.nodeName === t,
		(r) => {
			const a = [];
			for (let s = 0; s < r.attributes.length; s++) {
				const c = r.attributes[s];
				n[c.name] || a.push(c.name);
			}
			a.forEach((s) => r.removeAttribute(s));
		},
		() => i(t)
	);
}
function Ge(e, t, n) {
	return Z(e, t, n, me);
}
function Ie(e, t, n) {
	return Z(e, t, n, pe);
}
function we(e, t) {
	return Y(
		e,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + t;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => H(t),
		!0
	);
}
function Je(e) {
	return we(e, ' ');
}
function Ke(e, t) {
	(t = '' + t), e.data !== t && (e.data = t);
}
function Qe(e, t, n, i) {
	n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? 'important' : '');
}
function Ue(e, t, n) {
	e.classList[n ? 'add' : 'remove'](t);
}
function Ve(e, t) {
	const n = [];
	let i = 0;
	for (const r of t.childNodes)
		if (r.nodeType === 8) {
			const a = r.textContent.trim();
			a === `HEAD_${e}_END`
				? ((i -= 1), n.push(r))
				: a === `HEAD_${e}_START` && ((i += 1), n.push(r));
		} else i > 0 && n.push(r);
	return n;
}
function Xe(e, t) {
	return new e(t);
}
let S;
function N(e) {
	S = e;
}
function ee() {
	if (!S) throw new Error('Function called outside component initialization');
	return S;
}
function Ye(e) {
	ee().$$.on_mount.push(e);
}
function Ze(e) {
	ee().$$.after_update.push(e);
}
const b = [],
	I = [];
let $ = [];
const J = [],
	te = Promise.resolve();
let P = !1;
function ne() {
	P || ((P = !0), te.then(ie));
}
function et() {
	return ne(), te;
}
function z(e) {
	$.push(e);
}
const O = new Set();
let w = 0;
function ie() {
	if (w !== 0) return;
	const e = S;
	do {
		try {
			for (; w < b.length; ) {
				const t = b[w];
				w++, N(t), be(t.$$);
			}
		} catch (t) {
			throw ((b.length = 0), (w = 0), t);
		}
		for (N(null), b.length = 0, w = 0; I.length; ) I.pop()();
		for (let t = 0; t < $.length; t += 1) {
			const n = $[t];
			O.has(n) || (O.add(n), n());
		}
		$.length = 0;
	} while (b.length);
	for (; J.length; ) J.pop()();
	(P = !1), O.clear(), N(e);
}
function be(e) {
	if (e.fragment !== null) {
		e.update(), E(e.before_update);
		const t = e.dirty;
		(e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(z);
	}
}
function xe(e) {
	const t = [],
		n = [];
	$.forEach((i) => (e.indexOf(i) === -1 ? t.push(i) : n.push(i))), n.forEach((i) => i()), ($ = t);
}
const T = new Set();
let g;
function tt() {
	g = { r: 0, c: [], p: g };
}
function nt() {
	g.r || E(g.c), (g = g.p);
}
function re(e, t) {
	e && e.i && (T.delete(e), e.i(t));
}
function it(e, t, n, i) {
	if (e && e.o) {
		if (T.has(e)) return;
		T.add(e),
			g.c.push(() => {
				T.delete(e), i && (n && e.d(1), i());
			}),
			e.o(t);
	} else i && i();
}
function rt(e, t) {
	e.d(1), t.delete(e.key);
}
function st(e, t, n, i, r, a, s, c, l, o, f, _) {
	let d = e.length,
		m = a.length,
		h = d;
	const q = {};
	for (; h--; ) q[e[h].key] = h;
	const k = [],
		C = new Map(),
		D = new Map(),
		W = [];
	for (h = m; h--; ) {
		const u = _(r, a, h),
			p = n(u);
		let y = s.get(p);
		y ? i && W.push(() => y.p(u, t)) : ((y = o(p, u)), y.c()),
			C.set(p, (k[h] = y)),
			p in q && D.set(p, Math.abs(h - q[p]));
	}
	const F = new Set(),
		R = new Set();
	function L(u) {
		re(u, 1), u.m(c, f), s.set(u.key, u), (f = u.first), m--;
	}
	for (; d && m; ) {
		const u = k[m - 1],
			p = e[d - 1],
			y = u.key,
			A = p.key;
		u === p
			? ((f = u.first), d--, m--)
			: C.has(A)
			? !s.has(y) || F.has(y)
				? L(u)
				: R.has(A)
				? d--
				: D.get(y) > D.get(A)
				? (R.add(y), L(u))
				: (F.add(A), d--)
			: (l(p, s), d--);
	}
	for (; d--; ) {
		const u = e[d];
		C.has(u.key) || l(u, s);
	}
	for (; m; ) L(k[m - 1]);
	return E(W), k;
}
const $e = [
	'allowfullscreen',
	'allowpaymentrequest',
	'async',
	'autofocus',
	'autoplay',
	'checked',
	'controls',
	'default',
	'defer',
	'disabled',
	'formnovalidate',
	'hidden',
	'inert',
	'ismap',
	'loop',
	'multiple',
	'muted',
	'nomodule',
	'novalidate',
	'open',
	'playsinline',
	'readonly',
	'required',
	'reversed',
	'selected'
];
[...$e];
function lt(e) {
	e && e.c();
}
function ot(e, t) {
	e && e.l(t);
}
function ve(e, t, n, i) {
	const { fragment: r, after_update: a } = e.$$;
	r && r.m(t, n),
		i ||
			z(() => {
				const s = e.$$.on_mount.map(K).filter(B);
				e.$$.on_destroy ? e.$$.on_destroy.push(...s) : E(s), (e.$$.on_mount = []);
			}),
		a.forEach(z);
}
function Ee(e, t) {
	const n = e.$$;
	n.fragment !== null &&
		(xe(n.after_update),
		E(n.on_destroy),
		n.fragment && n.fragment.d(t),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function Ne(e, t) {
	e.$$.dirty[0] === -1 && (b.push(e), ne(), e.$$.dirty.fill(0)),
		(e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function ct(e, t, n, i, r, a, s, c = [-1]) {
	const l = S;
	N(e);
	const o = (e.$$ = {
		fragment: null,
		ctx: [],
		props: a,
		update: v,
		not_equal: r,
		bound: G(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(t.context || (l ? l.$$.context : [])),
		callbacks: G(),
		dirty: c,
		skip_bound: !1,
		root: t.target || l.$$.root
	});
	s && s(o.root);
	let f = !1;
	if (
		((o.ctx = n
			? n(e, t.props || {}, (_, d, ...m) => {
					const h = m.length ? m[0] : d;
					return (
						o.ctx &&
							r(o.ctx[_], (o.ctx[_] = h)) &&
							(!o.skip_bound && o.bound[_] && o.bound[_](h), f && Ne(e, _)),
						d
					);
			  })
			: []),
		o.update(),
		(f = !0),
		E(o.before_update),
		(o.fragment = i ? i(o.ctx) : !1),
		t.target)
	) {
		if (t.hydrate) {
			ae();
			const _ = ye(t.target);
			o.fragment && o.fragment.l(_), _.forEach(he);
		} else o.fragment && o.fragment.c();
		t.intro && re(e.$$.fragment), ve(e, t.target, t.anchor, t.customElement), ue(), ie();
	}
	N(l);
}
class at {
	$destroy() {
		Ee(this, 1), (this.$destroy = v);
	}
	$on(t, n) {
		if (!B(n)) return v;
		const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
		return (
			i.push(n),
			() => {
				const r = i.indexOf(n);
				r !== -1 && i.splice(r, 1);
			}
		);
	}
	$set(t) {
		this.$$set && !le(t) && ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
	}
}
export {
	ve as A,
	Ee as B,
	pe as C,
	Ie as D,
	ke as E,
	_e as F,
	v as G,
	Ae as H,
	Me as I,
	je as J,
	qe as K,
	Te as L,
	Le as M,
	Oe as N,
	We as O,
	E as P,
	Ve as Q,
	Ue as R,
	at as S,
	De as T,
	st as U,
	ce as V,
	rt as W,
	B as X,
	Fe as Y,
	ze as Z,
	Ce as _,
	Be as a,
	Pe as b,
	Je as c,
	it as d,
	He as e,
	nt as f,
	re as g,
	he as h,
	ct as i,
	Ze as j,
	me as k,
	Ge as l,
	ye as m,
	Re as n,
	Ye as o,
	Qe as p,
	H as q,
	we as r,
	Se as s,
	et as t,
	Ke as u,
	tt as v,
	I as w,
	Xe as x,
	lt as y,
	ot as z
};
