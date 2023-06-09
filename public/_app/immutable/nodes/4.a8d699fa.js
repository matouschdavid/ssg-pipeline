import {
	S as Me,
	i as Ne,
	s as Pe,
	k as S,
	a as O,
	q as H,
	e as se,
	Q as Oe,
	l as W,
	h as b,
	c as X,
	m as T,
	r as j,
	n as y,
	R as M,
	F as v,
	b as E,
	O as $,
	T as Ee,
	U as Ae,
	G as re,
	P as Xe,
	H as Ce,
	V as Le,
	W as Se,
	p as J,
	X as De,
	u as ee,
	Y as We,
	Z as Te,
	_ as oe
} from '../chunks/index.05b97c2d.js';
import { p as ze } from '../chunks/parse.d12b0d5b.js';
import { j as He } from '../chunks/singletons.ef050840.js';
import { r as Fe } from '../chunks/index.22269ec3.js';
const Ie = (l, e = {}) => {
	de(e);
	let {
		colors: t = ['#FFC700', '#FF0000', '#2E3191', '#41BBC7'],
		duration: a = 3500,
		force: o = 0.5,
		particleCount: n = 150,
		particleShape: r = 'mix',
		particleSize: s = 12,
		destroyAfterDone: c = !0,
		stageHeight: p = 800,
		stageWidth: m = 1600
	} = e;
	(function (i) {
		const d = Y('style');
		(d.dataset.neoconfetti = ''),
			(d.textContent =
				'@keyframes fk9XWG_y-axis{to{transform:translate3d(0,var(--stage-height),0)}}@keyframes fk9XWG_x-axis{to{transform:translate3d(var(--x-landing-point),0,0)}}@keyframes fk9XWG_rotation{50%{transform:rotate3d(var(--half-rotation),180deg)}to{transform:rotate3d(var(--rotation),360deg)}}.fk9XWG_container{width:0;height:0;z-index:1200;position:relative;overflow:visible}.fk9XWG_particle{animation:x-axis var(--duration-chaos)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:fk9XWG_x-axis}.fk9XWG_particle>div{animation:y-axis var(--duration-chaos)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--width);height:var(--height);animation-name:fk9XWG_y-axis;position:absolute;top:0;left:0}.fk9XWG_particle>div:before{height:100%;width:100%;content:"";background-color:var(--bgcolor);animation:rotation var(--rotation-duration)infinite linear;border-radius:var(--border-radius);animation-name:fk9XWG_rotation;display:block}'),
			Z(document.head, d);
	})(),
		l.classList.add('fk9XWG_container'),
		l.style.setProperty('--stage-height', p + 'px');
	let g,
		_ = ue(n, t),
		u = ne(l, _);
	function f(i, d) {
		const A = U(C() * (Re - 1)),
			L = r !== 'rectangles' && (r === 'circles' || Je(A)),
			w = (z, N) => i.style.setProperty(z, N + '');
		w('--x-landing-point', K(B(fe(d, 90) - 180), 0, 180, -m / 2, m / 2) + 'px'),
			w('--duration-chaos', a - U(1e3 * C()) + 'ms');
		const D = C() < qe ? I(C() * Ue, 2) : 0;
		w('--x1', D),
			w('--x2', -1 * D),
			w('--x3', D),
			w('--x4', I(B(K(B(fe(d, 90) - 180), 0, 180, -1, 1)), 4)),
			w('--y1', I(C() * ce, 4)),
			w('--y2', I(C() * o * (je() ? 1 : -1), 4)),
			w('--y3', ce),
			w('--y4', I(Be(K(B(d - 180), 0, 180, o, -o), 0), 4)),
			w('--width', (L ? s : U(4 * C()) + s / 2) + 'px'),
			w('--height', (L ? s : U(2 * C()) + s) + 'px');
		const q = A.toString(2).padStart(3, '0').split('');
		w(
			'--half-rotation',
			q.map((z) => +z / 2 + '')
		),
			w('--rotation', q),
			w('--rotation-duration', I(C() * (Ve - ie) + ie) + 'ms'),
			w('--border-radius', L ? '50%' : 0);
	}
	for (const [i, d] of Object.entries(u)) f(d, _[+i].degree);
	return (
		Promise.resolve().then(() => (g = setTimeout(() => c && (l.innerHTML = ''), a))),
		{
			update(i) {
				de(i);
				const d = i.particleCount ?? n,
					A = i.colors ?? t,
					L = i.stageHeight ?? p;
				if (((_ = ue(d, A)), d === n && JSON.stringify(t) !== JSON.stringify(A)))
					for (const [w, { color: D }] of Object.entries(_))
						u[+w].style.setProperty('--bgcolor', D);
				d !== n && ((l.innerHTML = ''), (u = ne(l, _))),
					c && !i.destroyAfterDone && clearTimeout(g),
					l.style.setProperty('--stage-height', L + 'px'),
					(t = A),
					(a = i.duration ?? a),
					(o = i.force ?? o),
					(n = d),
					(r = i.particleShape ?? r),
					(s = i.particleSize ?? s),
					(c = i.destroyAfterDone ?? c),
					(p = L),
					(m = i.stageWidth ?? m);
			},
			destroy() {
				clearTimeout(g);
			}
		}
	);
};
function ne(l, e = []) {
	const t = [];
	for (const { color: a } of e) {
		const o = Y('div');
		(o.className = 'fk9XWG_particle'), o.style.setProperty('--bgcolor', a);
		const n = Y('div');
		Z(o, n), Z(l, o), t.push(o);
	}
	return t;
}
const ie = 200,
	Ve = 800,
	qe = 0.1,
	Ue = 0.3,
	ce = 0.5,
	B = Math.abs,
	C = Math.random,
	U = Math.round,
	Be = Math.max,
	Y = (l) => document.createElement(l),
	Z = (l, e) => l.appendChild(e),
	ue = (l, e) =>
		Array.from({ length: l }, (t, a) => ({ color: e[a % e.length], degree: (360 * a) / l })),
	I = (l, e = 2) => U((l + Number.EPSILON) * 10 ** e) / 10 ** e,
	K = (l, e, t, a, o) => ((l - e) * (o - a)) / (t - e) + a,
	fe = (l, e) => (l + e > 360 ? l + e - 360 : l + e),
	je = () => C() > 0.5,
	Re = 6,
	Je = (l) => l !== 1 && je(),
	x = (l) => l === void 0,
	V = (l, e) => {
		if (!x(l) && Number.isSafeInteger(l) && l < 0)
			throw new Error(e + ' must be a positive integer');
	},
	de = ({
		particleCount: l,
		duration: e,
		colors: t,
		particleSize: a,
		force: o,
		stageHeight: n,
		stageWidth: r,
		particleShape: s
	}) => {
		if (
			(V(l, 'particleCount'),
			V(e, 'duration'),
			V(a, 'particleSize'),
			V(o, 'force'),
			V(n, 'stageHeight'),
			V(r, 'stageWidth'),
			!x(s) && !/^(mix|circles|rectangles)$/i.test(s))
		)
			throw new Error('particlesShape should be either "mix" or "circles" or "rectangle"');
		if (!x(t) && !Array.isArray(t)) throw new Error('colors must be an array of strings');
		if (o > 1) throw new Error('force must be within 0 and 1');
	},
	Ke = He('invalidate_all'),
	Qe = He('apply_action');
function Ye(l) {
	const e = JSON.parse(l);
	return e.data && (e.data = ze(e.data)), e;
}
function Ze(l, e = () => {}) {
	const t = async ({ action: o, result: n, reset: r }) => {
		n.type === 'success' && (r !== !1 && HTMLFormElement.prototype.reset.call(l), await Ke()),
			(location.origin + location.pathname === o.origin + o.pathname ||
				n.type === 'redirect' ||
				n.type === 'error') &&
				Qe(n);
	};
	async function a(o) {
		var u, f, i;
		o.preventDefault();
		const n = new URL(
				(u = o.submitter) != null && u.hasAttribute('formaction')
					? o.submitter.formAction
					: HTMLFormElement.prototype.cloneNode.call(l).action
			),
			r = new FormData(l),
			s = (f = o.submitter) == null ? void 0 : f.getAttribute('name');
		s && r.append(s, ((i = o.submitter) == null ? void 0 : i.getAttribute('value')) ?? '');
		const c = new AbortController();
		let p = !1;
		const g =
			(await e({
				action: n,
				cancel: () => (p = !0),
				controller: c,
				data: r,
				form: l,
				submitter: o.submitter
			})) ?? t;
		if (p) return;
		let _;
		try {
			const d = await fetch(n, {
				method: 'POST',
				headers: { accept: 'application/json', 'x-sveltekit-action': 'true' },
				cache: 'no-store',
				body: r,
				signal: c.signal
			});
			(_ = Ye(await d.text())), _.type === 'error' && (_.status = d.status);
		} catch (d) {
			if ((d == null ? void 0 : d.name) === 'AbortError') return;
			_ = { type: 'error', error: d };
		}
		g({
			action: n,
			data: r,
			form: l,
			update: (d) => t({ action: n, result: _, reset: d == null ? void 0 : d.reset }),
			result: _
		});
	}
	return (
		HTMLFormElement.prototype.addEventListener.call(l, 'submit', a),
		{
			destroy() {
				HTMLFormElement.prototype.removeEventListener.call(l, 'submit', a);
			}
		}
	);
}
const Ge = '(prefers-reduced-motion: reduce)',
	xe = () => window.matchMedia(Ge).matches,
	$e = Fe(xe(), (l) => {
		{
			const e = (a) => {
					l(a.matches);
				},
				t = window.matchMedia(Ge);
			return (
				t.addEventListener('change', e),
				() => {
					t.removeEventListener('change', e);
				}
			);
		}
	});
const { document: Q, window: et } = Le;
function he(l, e, t) {
	const a = l.slice();
	return (a[9] = e[t]), a;
}
function _e(l, e, t) {
	const a = l.slice();
	return (a[12] = e[t]), a;
}
function pe(l, e, t) {
	const a = l.slice();
	a[9] = e[t];
	const o = a[9] === a[3];
	return (a[15] = o), a;
}
function me(l, e, t) {
	var m, g;
	const a = l.slice();
	a[18] = e[t];
	const o = (m = a[0].answers[a[9]]) == null ? void 0 : m[a[18]];
	a[19] = o;
	const n = ((g = a[0].guesses[a[9]]) == null ? void 0 : g[a[18]]) ?? '';
	a[20] = n;
	const r = a[15] && a[18] === a[0].guesses[a[9]].length;
	a[21] = r;
	const s = a[19] === 'x';
	a[22] = s;
	const c = a[19] === 'c';
	a[23] = c;
	const p = a[19] === '_';
	return (a[24] = p), a;
}
function tt(l) {
	let e;
	return {
		c() {
			e = H('empty');
		},
		l(t) {
			e = j(t, 'empty');
		},
		m(t, a) {
			E(t, e, a);
		},
		d(t) {
			t && b(e);
		}
	};
}
function at(l) {
	let e;
	return {
		c() {
			e = H('(absent)');
		},
		l(t) {
			e = j(t, '(absent)');
		},
		m(t, a) {
			E(t, e, a);
		},
		d(t) {
			t && b(e);
		}
	};
}
function lt(l) {
	let e;
	return {
		c() {
			e = H('(present)');
		},
		l(t) {
			e = j(t, '(present)');
		},
		m(t, a) {
			E(t, e, a);
		},
		d(t) {
			t && b(e);
		}
	};
}
function st(l) {
	let e;
	return {
		c() {
			e = H('(correct)');
		},
		l(t) {
			e = j(t, '(correct)');
		},
		m(t, a) {
			E(t, e, a);
		},
		d(t) {
			t && b(e);
		}
	};
}
function be(l, e) {
	let t,
		a = e[20] + '',
		o,
		n,
		r,
		s,
		c,
		p,
		m;
	function g(f, i) {
		return f[22] ? st : f[23] ? lt : f[24] ? at : tt;
	}
	let _ = g(e),
		u = _(e);
	return {
		key: l,
		first: null,
		c() {
			(t = S('div')),
				(o = H(a)),
				(n = O()),
				(r = S('span')),
				u.c(),
				(s = O()),
				(c = S('input')),
				this.h();
		},
		l(f) {
			t = W(f, 'DIV', { class: !0 });
			var i = T(t);
			(o = j(i, a)), (n = X(i)), (r = W(i, 'SPAN', { class: !0 }));
			var d = T(r);
			u.l(d),
				d.forEach(b),
				(s = X(i)),
				(c = W(i, 'INPUT', { name: !0, type: !0 })),
				i.forEach(b),
				this.h();
		},
		h() {
			y(r, 'class', 'visually-hidden'),
				y(c, 'name', 'guess'),
				(c.disabled = p = !e[15]),
				y(c, 'type', 'hidden'),
				(c.value = m = e[20]),
				y(t, 'class', 'letter svelte-1pg2j5l'),
				M(t, 'exact', e[22]),
				M(t, 'close', e[23]),
				M(t, 'missing', e[24]),
				M(t, 'selected', e[21]),
				(this.first = t);
		},
		m(f, i) {
			E(f, t, i), v(t, o), v(t, n), v(t, r), u.m(r, null), v(t, s), v(t, c);
		},
		p(f, i) {
			(e = f),
				i & 1 && a !== (a = e[20] + '') && ee(o, a),
				_ !== (_ = g(e)) && (u.d(1), (u = _(e)), u && (u.c(), u.m(r, null))),
				i & 8 && p !== (p = !e[15]) && (c.disabled = p),
				i & 1 && m !== (m = e[20]) && (c.value = m),
				i & 1 && M(t, 'exact', e[22]),
				i & 1 && M(t, 'close', e[23]),
				i & 1 && M(t, 'missing', e[24]),
				i & 9 && M(t, 'selected', e[21]);
		},
		d(f) {
			f && b(t), u.d();
		}
	};
}
function ge(l, e) {
	let t,
		a,
		o = e[9] + 1 + '',
		n,
		r,
		s,
		c = [],
		p = new Map(),
		m,
		g = Array.from(Array(5).keys());
	const _ = (u) => u[18];
	for (let u = 0; u < g.length; u += 1) {
		let f = me(e, g, u),
			i = _(f);
		p.set(i, (c[u] = be(i, f)));
	}
	return {
		key: l,
		first: null,
		c() {
			(t = S('h2')), (a = H('Row ')), (n = H(o)), (r = O()), (s = S('div'));
			for (let u = 0; u < c.length; u += 1) c[u].c();
			(m = O()), this.h();
		},
		l(u) {
			t = W(u, 'H2', { class: !0 });
			var f = T(t);
			(a = j(f, 'Row ')), (n = j(f, o)), f.forEach(b), (r = X(u)), (s = W(u, 'DIV', { class: !0 }));
			var i = T(s);
			for (let d = 0; d < c.length; d += 1) c[d].l(i);
			(m = X(i)), i.forEach(b), this.h();
		},
		h() {
			y(t, 'class', 'visually-hidden'),
				y(s, 'class', 'row svelte-1pg2j5l'),
				M(s, 'current', e[15]),
				(this.first = t);
		},
		m(u, f) {
			E(u, t, f), v(t, a), v(t, n), E(u, r, f), E(u, s, f);
			for (let i = 0; i < c.length; i += 1) c[i] && c[i].m(s, null);
			v(s, m);
		},
		p(u, f) {
			(e = u),
				f & 9 &&
					((g = Array.from(Array(5).keys())), (c = Ae(c, f, _, 1, e, g, p, s, Se, be, m, me))),
				f & 8 && M(s, 'current', e[15]);
		},
		d(u) {
			u && b(t), u && b(r), u && b(s);
			for (let f = 0; f < c.length; f += 1) c[f].d();
		}
	};
}
function rt(l) {
	let e,
		t,
		a,
		o,
		n,
		r,
		s,
		c,
		p,
		m,
		g = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],
		_ = [];
	for (let u = 0; u < 3; u += 1) _[u] = ve(he(l, g, u));
	return {
		c() {
			(e = S('div')),
				(t = S('button')),
				(a = H('enter')),
				(n = O()),
				(r = S('button')),
				(s = H('back')),
				(c = O());
			for (let u = 0; u < 3; u += 1) _[u].c();
			this.h();
		},
		l(u) {
			e = W(u, 'DIV', { class: !0 });
			var f = T(e);
			t = W(f, 'BUTTON', { 'data-key': !0, class: !0 });
			var i = T(t);
			(a = j(i, 'enter')),
				i.forEach(b),
				(n = X(f)),
				(r = W(f, 'BUTTON', { 'data-key': !0, formaction: !0, name: !0, class: !0 }));
			var d = T(r);
			(s = j(d, 'back')), d.forEach(b), (c = X(f));
			for (let A = 0; A < 3; A += 1) _[A].l(f);
			f.forEach(b), this.h();
		},
		h() {
			y(t, 'data-key', 'enter'),
				(t.disabled = o = !l[6]),
				y(t, 'class', 'svelte-1pg2j5l'),
				M(t, 'selected', l[6]),
				y(r, 'data-key', 'backspace'),
				y(r, 'formaction', '?/update'),
				y(r, 'name', 'key'),
				(r.value = 'backspace'),
				y(r, 'class', 'svelte-1pg2j5l'),
				y(e, 'class', 'keyboard svelte-1pg2j5l');
		},
		m(u, f) {
			E(u, e, f), v(e, t), v(t, a), v(e, n), v(e, r), v(r, s), v(e, c);
			for (let i = 0; i < 3; i += 1) _[i] && _[i].m(e, null);
			p || ((m = $(r, 'click', We(l[8]))), (p = !0));
		},
		p(u, f) {
			if (
				(f & 64 && o !== (o = !u[6]) && (t.disabled = o), f & 64 && M(t, 'selected', u[6]), f & 301)
			) {
				g = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
				let i;
				for (i = 0; i < 3; i += 1) {
					const d = he(u, g, i);
					_[i] ? _[i].p(d, f) : ((_[i] = ve(d)), _[i].c(), _[i].m(e, null));
				}
				for (; i < 3; i += 1) _[i].d(1);
			}
		},
		d(u) {
			u && b(e), Te(_, u), (p = !1), m();
		}
	};
}
function ot(l) {
	let e,
		t,
		a = l[4] ? 'you won :)' : 'game over :(',
		o,
		n,
		r = !l[4] && l[0].answer && ke(l);
	return {
		c() {
			r && r.c(), (e = O()), (t = S('button')), (o = H(a)), (n = H(' play again?')), this.h();
		},
		l(s) {
			r && r.l(s), (e = X(s)), (t = W(s, 'BUTTON', { 'data-key': !0, class: !0, formaction: !0 }));
			var c = T(t);
			(o = j(c, a)), (n = j(c, ' play again?')), c.forEach(b), this.h();
		},
		h() {
			y(t, 'data-key', 'enter'),
				y(t, 'class', 'restart selected svelte-1pg2j5l'),
				y(t, 'formaction', '?/restart');
		},
		m(s, c) {
			r && r.m(s, c), E(s, e, c), E(s, t, c), v(t, o), v(t, n);
		},
		p(s, c) {
			!s[4] && s[0].answer
				? r
					? r.p(s, c)
					: ((r = ke(s)), r.c(), r.m(e.parentNode, e))
				: r && (r.d(1), (r = null)),
				c & 16 && a !== (a = s[4] ? 'you won :)' : 'game over :(') && ee(o, a);
		},
		d(s) {
			r && r.d(s), s && b(e), s && b(t);
		}
	};
}
function ye(l) {
	let e, t, a, o, n, r, s;
	return {
		c() {
			(e = S('button')), (t = H(l[12])), this.h();
		},
		l(c) {
			e = W(c, 'BUTTON', { 'data-key': !0, class: !0, formaction: !0, name: !0, 'aria-label': !0 });
			var p = T(e);
			(t = j(p, l[12])), p.forEach(b), this.h();
		},
		h() {
			y(e, 'data-key', l[12]),
				y(e, 'class', (a = oe(l[2][l[12]]) + ' svelte-1pg2j5l')),
				(e.disabled = o = l[0].guesses[l[3]].length === 5),
				y(e, 'formaction', '?/update'),
				y(e, 'name', 'key'),
				(e.value = l[12]),
				y(e, 'aria-label', (n = l[12] + ' ' + (l[5][l[12]] || '')));
		},
		m(c, p) {
			E(c, e, p), v(e, t), r || ((s = $(e, 'click', We(l[8]))), (r = !0));
		},
		p(c, p) {
			p & 4 && a !== (a = oe(c[2][c[12]]) + ' svelte-1pg2j5l') && y(e, 'class', a),
				p & 9 && o !== (o = c[0].guesses[c[3]].length === 5) && (e.disabled = o),
				p & 32 && n !== (n = c[12] + ' ' + (c[5][c[12]] || '')) && y(e, 'aria-label', n);
		},
		d(c) {
			c && b(e), (r = !1), s();
		}
	};
}
function ve(l) {
	let e,
		t,
		a = l[9],
		o = [];
	for (let n = 0; n < a.length; n += 1) o[n] = ye(_e(l, a, n));
	return {
		c() {
			e = S('div');
			for (let n = 0; n < o.length; n += 1) o[n].c();
			(t = O()), this.h();
		},
		l(n) {
			e = W(n, 'DIV', { class: !0 });
			var r = T(e);
			for (let s = 0; s < o.length; s += 1) o[s].l(r);
			(t = X(r)), r.forEach(b), this.h();
		},
		h() {
			y(e, 'class', 'row svelte-1pg2j5l');
		},
		m(n, r) {
			E(n, e, r);
			for (let s = 0; s < o.length; s += 1) o[s] && o[s].m(e, null);
			v(e, t);
		},
		p(n, r) {
			if (r & 301) {
				a = n[9];
				let s;
				for (s = 0; s < a.length; s += 1) {
					const c = _e(n, a, s);
					o[s] ? o[s].p(c, r) : ((o[s] = ye(c)), o[s].c(), o[s].m(e, t));
				}
				for (; s < o.length; s += 1) o[s].d(1);
				o.length = a.length;
			}
		},
		d(n) {
			n && b(e), Te(o, n);
		}
	};
}
function ke(l) {
	let e,
		t,
		a = l[0].answer + '',
		o,
		n;
	return {
		c() {
			(e = S('p')), (t = H('the answer was "')), (o = H(a)), (n = H('"'));
		},
		l(r) {
			e = W(r, 'P', {});
			var s = T(e);
			(t = j(s, 'the answer was "')), (o = j(s, a)), (n = j(s, '"')), s.forEach(b);
		},
		m(r, s) {
			E(r, e, s), v(e, t), v(e, o), v(e, n);
		},
		p(r, s) {
			s & 1 && a !== (a = r[0].answer + '') && ee(o, a);
		},
		d(r) {
			r && b(e);
		}
	};
}
function we(l) {
	let e, t, a, o;
	return {
		c() {
			(e = S('div')), this.h();
		},
		l(n) {
			(e = W(n, 'DIV', { style: !0 })), T(e).forEach(b), this.h();
		},
		h() {
			J(e, 'position', 'absolute'), J(e, 'left', '50%'), J(e, 'top', '30%');
		},
		m(n, r) {
			E(n, e, r),
				a ||
					((o = Ee(
						(t = Ie.call(null, e, {
							particleCount: l[7] ? 0 : void 0,
							force: 0.7,
							stageWidth: window.innerWidth,
							stageHeight: window.innerHeight,
							colors: ['#ff3e00', '#40b3ff', '#676778']
						}))
					)),
					(a = !0));
		},
		p(n, r) {
			t &&
				De(t.update) &&
				r & 128 &&
				t.update.call(null, {
					particleCount: n[7] ? 0 : void 0,
					force: 0.7,
					stageWidth: window.innerWidth,
					stageHeight: window.innerHeight,
					colors: ['#ff3e00', '#40b3ff', '#676778']
				});
		},
		d(n) {
			n && b(e), (a = !1), o();
		}
	};
}
function nt(l) {
	let e,
		t,
		a,
		o,
		n,
		r,
		s,
		c,
		p,
		m,
		g = [],
		_ = new Map(),
		u,
		f,
		i,
		d,
		A,
		L,
		w = Array.from(Array(6).keys());
	const D = (h) => h[9];
	for (let h = 0; h < w.length; h += 1) {
		let k = pe(l, w, h),
			P = D(k);
		_.set(P, (g[h] = ge(P, k)));
	}
	function q(h, k) {
		return h[4] || h[0].answers.length >= 6 ? ot : rt;
	}
	let z = q(l),
		N = z(l),
		G = l[4] && we(l);
	return {
		c() {
			(e = S('meta')),
				(t = O()),
				(a = S('h1')),
				(o = H('Sverdle')),
				(n = O()),
				(r = S('form')),
				(s = S('a')),
				(c = H('How to play')),
				(p = O()),
				(m = S('div'));
			for (let h = 0; h < g.length; h += 1) g[h].c();
			(u = O()), (f = S('div')), N.c(), (i = O()), G && G.c(), (d = se()), this.h();
		},
		l(h) {
			const k = Oe('svelte-18lvto8', Q.head);
			(e = W(k, 'META', { name: !0, content: !0 })),
				k.forEach(b),
				(t = X(h)),
				(a = W(h, 'H1', { class: !0 }));
			var P = T(a);
			(o = j(P, 'Sverdle')),
				P.forEach(b),
				(n = X(h)),
				(r = W(h, 'FORM', { method: !0, action: !0, class: !0 }));
			var F = T(r);
			s = W(F, 'A', { class: !0, href: !0 });
			var te = T(s);
			(c = j(te, 'How to play')), te.forEach(b), (p = X(F)), (m = W(F, 'DIV', { class: !0 }));
			var ae = T(m);
			for (let R = 0; R < g.length; R += 1) g[R].l(ae);
			ae.forEach(b), (u = X(F)), (f = W(F, 'DIV', { class: !0 }));
			var le = T(f);
			N.l(le), le.forEach(b), F.forEach(b), (i = X(h)), G && G.l(h), (d = se()), this.h();
		},
		h() {
			var h;
			(Q.title = 'Sverdle'),
				y(e, 'name', 'description'),
				y(e, 'content', 'A Wordle clone written in SvelteKit'),
				y(a, 'class', 'visually-hidden'),
				y(s, 'class', 'how-to-play svelte-1pg2j5l'),
				y(s, 'href', '/sverdle/how-to-play'),
				y(m, 'class', 'grid svelte-1pg2j5l'),
				M(m, 'playing', !l[4]),
				M(m, 'bad-guess', (h = l[1]) == null ? void 0 : h.badGuess),
				y(f, 'class', 'controls svelte-1pg2j5l'),
				y(r, 'method', 'POST'),
				y(r, 'action', '?/enter'),
				y(r, 'class', 'svelte-1pg2j5l');
		},
		m(h, k) {
			v(Q.head, e),
				E(h, t, k),
				E(h, a, k),
				v(a, o),
				E(h, n, k),
				E(h, r, k),
				v(r, s),
				v(s, c),
				v(r, p),
				v(r, m);
			for (let P = 0; P < g.length; P += 1) g[P] && g[P].m(m, null);
			v(r, u),
				v(r, f),
				N.m(f, null),
				E(h, i, k),
				G && G.m(h, k),
				E(h, d, k),
				A || ((L = [$(et, 'keydown', it), Ee(Ze.call(null, r, ct))]), (A = !0));
		},
		p(h, [k]) {
			var P;
			k & 9 &&
				((w = Array.from(Array(6).keys())), (g = Ae(g, k, D, 1, h, w, _, m, Se, ge, null, pe))),
				k & 16 && M(m, 'playing', !h[4]),
				k & 2 && M(m, 'bad-guess', (P = h[1]) == null ? void 0 : P.badGuess),
				z === (z = q(h)) && N ? N.p(h, k) : (N.d(1), (N = z(h)), N && (N.c(), N.m(f, null))),
				h[4]
					? G
						? G.p(h, k)
						: ((G = we(h)), G.c(), G.m(d.parentNode, d))
					: G && (G.d(1), (G = null));
		},
		i: re,
		o: re,
		d(h) {
			b(e), h && b(t), h && b(a), h && b(n), h && b(r);
			for (let k = 0; k < g.length; k += 1) g[k].d();
			N.d(), h && b(i), G && G.d(h), h && b(d), (A = !1), Xe(L);
		}
	};
}
function it(l) {
	var e;
	l.metaKey ||
		(e = document.querySelector(`[data-key="${l.key}" i]`)) == null ||
		e.dispatchEvent(new MouseEvent('click', { cancelable: !0 }));
}
const ct =
	() =>
	({ update: l }) => {
		l({ reset: !1 });
	};
function ut(l, e, t) {
	let a, o, n, r;
	Ce(l, $e, (_) => t(7, (r = _)));
	let { data: s } = e,
		{ form: c } = e,
		p,
		m;
	function g(_) {
		const u = s.guesses[o],
			f = _.target.getAttribute('data-key');
		f === 'backspace'
			? (t(0, (s.guesses[o] = u.slice(0, -1)), s),
			  c != null && c.badGuess && t(1, (c.badGuess = !1), c))
			: u.length < 5 && t(0, (s.guesses[o] += f), s);
	}
	return (
		(l.$$set = (_) => {
			'data' in _ && t(0, (s = _.data)), 'form' in _ && t(1, (c = _.form));
		}),
		(l.$$.update = () => {
			var _;
			l.$$.dirty & 1 && t(4, (a = s.answers.at(-1) === 'xxxxx')),
				l.$$.dirty & 17 && t(3, (o = a ? -1 : s.answers.length)),
				l.$$.dirty & 9 && t(6, (n = ((_ = s.guesses[o]) == null ? void 0 : _.length) === 5)),
				l.$$.dirty & 5 &&
					(t(2, (p = {})),
					t(5, (m = {})),
					s.answers.forEach((u, f) => {
						const i = s.guesses[f];
						for (let d = 0; d < 5; d += 1) {
							const A = i[d];
							u[d] === 'x'
								? (t(2, (p[A] = 'exact'), p), t(5, (m[A] = 'correct'), m))
								: p[A] ||
								  (t(2, (p[A] = u[d] === 'c' ? 'close' : 'missing'), p),
								  t(5, (m[A] = u[d] === 'c' ? 'present' : 'absent'), m));
						}
					}));
		}),
		[s, c, p, o, a, m, n, r, g]
	);
}
class pt extends Me {
	constructor(e) {
		super(), Ne(this, e, ut, nt, Pe, { data: 0, form: 1 });
	}
}
export { pt as component };
