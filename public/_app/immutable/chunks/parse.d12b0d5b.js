Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
const b = -1,
	p = -2,
	w = -3,
	E = -4,
	N = -5,
	g = -6;
function O(s, u) {
	return h(JSON.parse(s), u);
}
function h(s, u) {
	if (typeof s == 'number') return a(s, !0);
	if (!Array.isArray(s) || s.length === 0) throw new Error('Invalid input');
	const l = s,
		r = Array(l.length);
	function a(e, I = !1) {
		if (e === b) return;
		if (e === w) return NaN;
		if (e === E) return 1 / 0;
		if (e === N) return -1 / 0;
		if (e === g) return -0;
		if (I) throw new Error('Invalid input');
		if (e in r) return r[e];
		const t = l[e];
		if (!t || typeof t != 'object') r[e] = t;
		else if (Array.isArray(t))
			if (typeof t[0] == 'string') {
				const c = t[0],
					o = u == null ? void 0 : u[c];
				if (o) return (r[e] = o(a(t[1])));
				switch (c) {
					case 'Date':
						r[e] = new Date(t[1]);
						break;
					case 'Set':
						const f = new Set();
						r[e] = f;
						for (let n = 1; n < t.length; n += 1) f.add(a(t[n]));
						break;
					case 'Map':
						const y = new Map();
						r[e] = y;
						for (let n = 1; n < t.length; n += 2) y.set(a(t[n]), a(t[n + 1]));
						break;
					case 'RegExp':
						r[e] = new RegExp(t[1], t[2]);
						break;
					case 'Object':
						r[e] = Object(t[1]);
						break;
					case 'BigInt':
						r[e] = BigInt(t[1]);
						break;
					case 'null':
						const i = Object.create(null);
						r[e] = i;
						for (let n = 1; n < t.length; n += 2) i[t[n]] = a(t[n + 1]);
						break;
					default:
						throw new Error(`Unknown type ${c}`);
				}
			} else {
				const c = new Array(t.length);
				r[e] = c;
				for (let o = 0; o < t.length; o += 1) {
					const f = t[o];
					f !== p && (c[o] = a(f));
				}
			}
		else {
			const c = {};
			r[e] = c;
			for (const o in t) {
				const f = t[o];
				c[o] = a(f);
			}
		}
		return r[e];
	}
	return a(0);
}
export { O as p, h as u };
