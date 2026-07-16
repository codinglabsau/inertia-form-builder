import { useForm as Fr } from "@inertiajs/vue3";
import { ref as Nn, reactive as Xo, toRaw as Zo, watchEffect as Yo, defineComponent as Xe, openBlock as D, createElementBlock as J, Fragment as _t, renderList as Ot, createVNode as ct, unref as de, withCtx as xe, createTextVNode as qe, toDisplayString as he, computed as B, isRef as Nr, watch as Qo, createBlock as pe, createCommentVNode as ye, resolveDynamicComponent as es, mergeProps as Dr, toHandlers as ts, renderSlot as Ft, createElementVNode as Vt, normalizeClass as ns } from "vue";
import { Checkbox as rs, Label as Lr, Alert as os, AlertDescription as ss, Button as Ur, FieldError as is } from "@codinglabsau/gooey";
function Ir(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: as } = Object.prototype, { getPrototypeOf: Ce } = Object, { iterator: Ze, toStringTag: Br } = Symbol, ft = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ke = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null && n !== Object.prototype; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    if (r.push(n), ft(n, t))
      return !0;
    n = Ce(n);
  }
  return !1;
}, ls = (e, t) => e != null && ke(e, t) ? e[t] : void 0, on = /* @__PURE__ */ ((e) => (t) => {
  const n = as.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ee = (e) => (e = e.toLowerCase(), (t) => on(t) === e), vt = (e) => (t) => typeof t === e, { isArray: Ee } = Array, $e = vt("undefined");
function Fe(e) {
  return e !== null && !$e(e) && e.constructor !== null && !$e(e.constructor) && z(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Mr = ee("ArrayBuffer");
function us(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Mr(e.buffer), t;
}
const cs = vt("string"), z = vt("function"), Hr = vt("number"), Ne = (e) => e !== null && typeof e == "object", fs = (e) => e === !0 || e === !1, it = (e) => {
  if (!Ne(e))
    return !1;
  const t = Ce(e);
  return (t === null || t === Object.prototype || Ce(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !ke(e, Br) && !ke(e, Ze);
}, ds = (e) => {
  if (!Ne(e) || Fe(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, ps = ee("Date"), hs = ee("File"), ms = (e) => !!(e && typeof e.uri < "u"), gs = (e) => e && typeof e.getParts < "u", ys = ee("Blob"), bs = ee("FileList"), ws = (e) => Ne(e) && z(e.pipe);
function Es() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Dn = Es(), Ln = typeof Dn.FormData < "u" ? Dn.FormData : void 0, _s = (e) => {
  if (!e) return !1;
  if (Ln && e instanceof Ln) return !0;
  const t = Ce(e);
  if (!t || t === Object.prototype || !z(e.append)) return !1;
  const n = on(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && z(e.toString) && e.toString() === "[object FormData]";
}, Os = ee("URLSearchParams"), [vs, Ss, Ts, As] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(ee), Rs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ye(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Ee(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (Fe(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function qr(e, t) {
  if (Fe(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const be = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, zr = (e) => !$e(e) && e !== be;
function kt(...e) {
  const { caseless: t, skipUndefined: n } = zr(this) && this || {}, r = {}, o = (s, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const a = t && typeof i == "string" && qr(r, i) || i, l = ft(r, a) ? r[a] : void 0;
    it(l) && it(s) ? r[a] = kt(l, s) : it(s) ? r[a] = kt({}, s) : Ee(s) ? r[a] = s.slice() : (!n || !$e(s)) && (r[a] = s);
  };
  for (let s = 0, i = e.length; s < i; s++) {
    const a = e[s];
    if (!a || Fe(a) || (Ye(a, o), typeof a != "object" || Ee(a)))
      continue;
    const l = Object.getOwnPropertySymbols(a);
    for (let d = 0; d < l.length; d++) {
      const f = l[d];
      Bs.call(a, f) && o(a[f], f);
    }
  }
  return r;
}
const Ps = (e, t, n, { allOwnKeys: r } = {}) => (Ye(
  t,
  (o, s) => {
    n && z(o) ? Object.defineProperty(e, s, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Ir(o, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, s, {
      __proto__: null,
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), xs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Cs = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    __proto__: null,
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    __proto__: null,
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, $s = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Ce(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, js = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Fs = (e) => {
  if (!e) return null;
  if (Ee(e)) return e;
  let t = e.length;
  if (!Hr(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ns = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ce(Uint8Array)), Ds = (e, t) => {
  const r = (e && e[Ze]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, Ls = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Us = ee("HTMLFormElement"), Is = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), { propertyIsEnumerable: Bs } = Object.prototype, Ms = ee("RegExp"), Vr = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ye(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(e, r);
}, Hs = (e) => {
  Vr(e, (t, n) => {
    if (z(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (z(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, qs = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Ee(e) ? r(e) : r(String(e).split(t)), n;
}, zs = () => {
}, Vs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function ks(e) {
  return !!(e && z(e.append) && e[Br] === "FormData" && e[Ze]);
}
const Gs = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (Ne(r)) {
      if (t.has(r))
        return;
      if (Fe(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const o = Ee(r) ? [] : {};
        return Ye(r, (s, i) => {
          const a = n(s);
          !$e(a) && (o[i] = a);
        }), t.delete(r), o;
      }
    }
    return r;
  };
  return n(e);
}, Ws = ee("AsyncFunction"), Ks = (e) => e && (Ne(e) || z(e)) && z(e.then) && z(e.catch), kr = ((e, t) => e ? setImmediate : t ? ((n, r) => (be.addEventListener(
  "message",
  ({ source: o, data: s }) => {
    o === be && s === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), be.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", z(be.postMessage)), Js = typeof queueMicrotask < "u" ? queueMicrotask.bind(be) : typeof process < "u" && process.nextTick || kr, Gr = (e) => e != null && z(e[Ze]), Xs = (e) => e != null && ke(e, Ze) && Gr(e), u = {
  isArray: Ee,
  isArrayBuffer: Mr,
  isBuffer: Fe,
  isFormData: _s,
  isArrayBufferView: us,
  isString: cs,
  isNumber: Hr,
  isBoolean: fs,
  isObject: Ne,
  isPlainObject: it,
  isEmptyObject: ds,
  isReadableStream: vs,
  isRequest: Ss,
  isResponse: Ts,
  isHeaders: As,
  isUndefined: $e,
  isDate: ps,
  isFile: hs,
  isReactNativeBlob: ms,
  isReactNative: gs,
  isBlob: ys,
  isRegExp: Ms,
  isFunction: z,
  isStream: ws,
  isURLSearchParams: Os,
  isTypedArray: Ns,
  isFileList: bs,
  forEach: Ye,
  merge: kt,
  extend: Ps,
  trim: Rs,
  stripBOM: xs,
  inherits: Cs,
  toFlatObject: $s,
  kindOf: on,
  kindOfTest: ee,
  endsWith: js,
  toArray: Fs,
  forEachEntry: Ds,
  matchAll: Ls,
  isHTMLForm: Us,
  hasOwnProperty: ft,
  hasOwnProp: ft,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: ke,
  getSafeProp: ls,
  reduceDescriptors: Vr,
  freezeMethods: Hs,
  toObjectSet: qs,
  toCamelCase: Is,
  noop: zs,
  toFiniteNumber: Vs,
  findKey: qr,
  global: be,
  isContextDefined: zr,
  isSpecCompliantForm: ks,
  toJSONObject: Gs,
  isAsyncFn: Ws,
  isThenable: Ks,
  setImmediate: kr,
  asap: Js,
  isIterable: Gr,
  isSafeIterable: Xs
}, Zs = u.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Ys = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && Zs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function Qs(e) {
  let t = 0, n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32)
      break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32)
      break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
const ei = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), ti = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function sn(e, t) {
  return u.isArray(e) ? e.map((n) => sn(n, t)) : Qs(String(e).replace(t, ""));
}
const ni = (e) => sn(e, ei), ri = (e) => sn(e, ti);
function Wr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return u.forEach(e.toJSON(), (n, r) => {
    t[r] = ri(n);
  }), t;
}
const Un = /* @__PURE__ */ Symbol("internals");
function Ie(e) {
  return e && String(e).trim().toLowerCase();
}
function at(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(at) : ni(String(e));
}
function oi(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const si = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Nt(e, t, n, r, o) {
  if (u.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!u.isString(t)) {
    if (u.isString(r))
      return t.indexOf(r) !== -1;
    if (u.isRegExp(r))
      return r.test(t);
  }
}
function ii(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ai(e, t) {
  const n = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
let q = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, l, d) {
      const f = Ie(l);
      if (!f)
        return;
      const c = u.findKey(o, f);
      (!c || o[c] === void 0 || d === !0 || d === void 0 && o[c] !== !1) && (o[c || l] = at(a));
    }
    const i = (a, l) => u.forEach(a, (d, f) => s(d, f, l));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (u.isString(t) && (t = t.trim()) && !si(t))
      i(Ys(t), n);
    else if (u.isObject(t) && u.isSafeIterable(t)) {
      let a = /* @__PURE__ */ Object.create(null), l, d;
      for (const f of t) {
        if (!u.isArray(f))
          throw new TypeError("Object iterator must return a key-value pair");
        d = f[0], u.hasOwnProp(a, d) ? (l = a[d], a[d] = u.isArray(l) ? [...l, f[1]] : [l, f[1]]) : a[d] = f[1];
      }
      i(a, n);
    } else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Ie(t), t) {
      const r = u.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return oi(o);
        if (u.isFunction(n))
          return n.call(this, o, r);
        if (u.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ie(t), t) {
      const r = u.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Nt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = Ie(i), i) {
        const a = u.findKey(r, i);
        a && (!n || Nt(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return u.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Nt(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return u.forEach(this, (o, s) => {
      const i = u.findKey(r, s);
      if (i) {
        n[i] = at(o), delete n[s];
        return;
      }
      const a = t ? ii(s) : String(s).trim();
      a !== s && delete n[s], n[a] = at(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return u.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && u.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Un] = this[Un] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = Ie(i);
      r[a] || (ai(o, i), r[a] = !0);
    }
    return u.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
q.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
u.reduceDescriptors(q.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
u.freezeMethods(q);
const li = "[REDACTED ****]";
function ui(e) {
  if (u.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (u.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function ci(e, t) {
  const n = new Set(t.map((s) => String(s).toLowerCase())), r = [], o = (s) => {
    if (s === null || typeof s != "object" || u.isBuffer(s)) return s;
    if (r.indexOf(s) !== -1) return;
    s instanceof q && (s = s.toJSON()), r.push(s);
    let i;
    if (u.isArray(s))
      i = [], s.forEach((a, l) => {
        const d = o(a);
        u.isUndefined(d) || (i[l] = d);
      });
    else {
      if (!u.isPlainObject(s) && ui(s))
        return r.pop(), s;
      i = /* @__PURE__ */ Object.create(null);
      for (const [a, l] of Object.entries(s)) {
        const d = n.has(a.toLowerCase()) ? li : o(l);
        u.isUndefined(d) || (i[a] = d);
      }
    }
    return r.pop(), i;
  };
  return o(e);
}
let w = class Kr extends Error {
  static from(t, n, r, o, s, i) {
    const a = new Kr(t.message, n || t.code, r, o, s);
    return Object.defineProperty(a, "cause", {
      __proto__: null,
      value: t,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), a.name = t.name, t.status != null && a.status == null && (a.status = t.status), i && Object.assign(a, i), a;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, n, r, o, s) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), o && (this.request = o), s && (this.response = s, this.status = s.status);
  }
  toJSON() {
    const t = this.config, n = t && u.hasOwnProp(t, "redact") ? t.redact : void 0, r = u.isArray(n) && n.length > 0 ? ci(t, n) : u.toJSONObject(t);
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: r,
      code: this.code,
      status: this.status
    };
  }
};
w.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
w.ERR_BAD_OPTION = "ERR_BAD_OPTION";
w.ECONNABORTED = "ECONNABORTED";
w.ETIMEDOUT = "ETIMEDOUT";
w.ECONNREFUSED = "ECONNREFUSED";
w.ERR_NETWORK = "ERR_NETWORK";
w.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
w.ERR_DEPRECATED = "ERR_DEPRECATED";
w.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
w.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
w.ERR_CANCELED = "ERR_CANCELED";
w.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
w.ERR_INVALID_URL = "ERR_INVALID_URL";
w.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const fi = null, Jr = 100;
function Gt(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function Xr(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Dt(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Xr(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function di(e) {
  return u.isArray(e) && !e.some(Gt);
}
const pi = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function St(e, t, n) {
  if (!u.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = u.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(b, _) {
      return !u.isUndefined(_[b]);
    }
  );
  const r = n.metaTokens, o = n.visitor || y, s = n.dots, i = n.indexes, a = n.Blob || typeof Blob < "u" && Blob, l = n.maxDepth === void 0 ? Jr : n.maxDepth, d = a && u.isSpecCompliantForm(t), f = [];
  if (!u.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (u.isDate(p))
      return p.toISOString();
    if (u.isBoolean(p))
      return p.toString();
    if (!d && u.isBlob(p))
      throw new w("Blob is not supported. Use a Buffer instead.");
    if (u.isArrayBuffer(p) || u.isTypedArray(p)) {
      if (d && typeof a == "function")
        return new a([p]);
      if (typeof Buffer < "u")
        return Buffer.from(p);
      throw new w("Blob is not supported. Use a Buffer instead.", w.ERR_NOT_SUPPORT);
    }
    return p;
  }
  function m(p) {
    if (p > l)
      throw new w(
        "Object is too deeply nested (" + p + " levels). Max depth: " + l,
        w.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function h(p, b) {
    if (l === 1 / 0)
      return JSON.stringify(p);
    const _ = [];
    return JSON.stringify(p, function(A, T) {
      if (!u.isObject(T))
        return T;
      for (; _.length && _[_.length - 1] !== this; )
        _.pop();
      return _.push(T), m(b + _.length - 1), T;
    });
  }
  function y(p, b, _) {
    let E = p;
    if (u.isReactNative(t) && u.isReactNativeBlob(p))
      return t.append(Dt(_, b, s), c(p)), !1;
    if (p && !_ && typeof p == "object") {
      if (u.endsWith(b, "{}"))
        b = r ? b : b.slice(0, -2), p = h(p, 1);
      else if (u.isArray(p) && di(p) || (u.isFileList(p) || u.endsWith(b, "[]")) && (E = u.toArray(p)))
        return b = Xr(b), E.forEach(function(T, j) {
          !(u.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Dt([b], j, s) : i === null ? b : b + "[]",
            c(T)
          );
        }), !1;
    }
    return Gt(p) ? !0 : (t.append(Dt(_, b, s), c(p)), !1);
  }
  const v = Object.assign(pi, {
    defaultVisitor: y,
    convertValue: c,
    isVisitable: Gt
  });
  function g(p, b, _ = 0) {
    if (!u.isUndefined(p)) {
      if (m(_), f.indexOf(p) !== -1)
        throw new Error("Circular reference detected in " + b.join("."));
      f.push(p), u.forEach(p, function(A, T) {
        (!(u.isUndefined(A) || A === null) && o.call(t, A, u.isString(T) ? T.trim() : T, b, v)) === !0 && g(A, b ? b.concat(T) : [T], _ + 1);
      }), f.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function In(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(r) {
    return t[r];
  });
}
function an(e, t) {
  this._pairs = [], e && St(e, this, t);
}
const Zr = an.prototype;
Zr.append = function(t, n) {
  this._pairs.push([t, n]);
};
Zr.toString = function(t) {
  const n = t ? (r) => t.call(this, r, In) : In;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function hi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Yr(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = u.isFunction(n) ? {
    serialize: n
  } : n, o = u.getSafeProp(r, "encode") || hi, s = u.getSafeProp(r, "serialize");
  let i;
  if (s ? i = s(t, r) : i = u.isURLSearchParams(t) ? t.toString() : new an(t, r).toString(o), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Bn {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    u.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ln = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, mi = typeof URLSearchParams < "u" ? URLSearchParams : an, gi = typeof FormData < "u" ? FormData : null, yi = typeof Blob < "u" ? Blob : null, bi = {
  isBrowser: !0,
  classes: {
    URLSearchParams: mi,
    FormData: gi,
    Blob: yi
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, un = typeof window < "u" && typeof document < "u", Wt = typeof navigator == "object" && navigator || void 0, wi = un && (!Wt || ["ReactNative", "NativeScript", "NS"].indexOf(Wt.product) < 0), Ei = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", _i = un && window.location.href || "http://localhost", Oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: un,
  hasStandardBrowserEnv: wi,
  hasStandardBrowserWebWorkerEnv: Ei,
  navigator: Wt,
  origin: _i
}, Symbol.toStringTag, { value: "Module" })), M = {
  ...Oi,
  ...bi
};
function vi(e, t) {
  return St(e, new M.classes.URLSearchParams(), {
    visitor: function(n, r, o, s) {
      return M.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const Mn = Jr;
function Qr(e) {
  if (e > Mn)
    throw new w(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + Mn,
      w.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function Si(e) {
  const t = [], n = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    Qr(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function Ti(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function eo(e) {
  function t(n, r, o, s) {
    Qr(s);
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = s >= n.length;
    return i = !i && u.isArray(o) ? o.length : i, l ? (u.hasOwnProp(o, i) ? o[i] = u.isArray(o[i]) ? o[i].concat(r) : [o[i], r] : o[i] = r, !a) : ((!u.hasOwnProp(o, i) || !u.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && u.isArray(o[i]) && (o[i] = Ti(o[i])), !a);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const n = {};
    return u.forEachEntry(e, (r, o) => {
      t(Si(r), o, n, 0);
    }), n;
  }
  return null;
}
const Re = (e, t) => e != null && u.hasOwnProp(e, t) ? e[t] : void 0;
function Ai(e, t, n) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Qe = {
  transitional: ln,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = u.isObject(t);
      if (s && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
        return o ? JSON.stringify(eo(t)) : t;
      if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t))
        return t;
      if (u.isArrayBufferView(t))
        return t.buffer;
      if (u.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (s) {
        const l = Re(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return vi(t, l).toString();
        if ((a = u.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const d = Re(this, "env"), f = d && d.FormData;
          return St(
            a ? { "files[]": t } : t,
            f && new f(),
            l
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), Ai(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Re(this, "transitional") || Qe.transitional, r = n && n.forcedJSONParsing, o = Re(this, "responseType"), s = o === "json";
      if (u.isResponse(t) || u.isReadableStream(t))
        return t;
      if (t && u.isString(t) && (r && !o || s)) {
        const a = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, Re(this, "parseReviver"));
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError" ? w.from(l, w.ERR_BAD_RESPONSE, this, null, Re(this, "response")) : l;
        }
      }
      return t;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: M.classes.FormData,
    Blob: M.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
u.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  Qe.headers[e] = {};
});
function Lt(e, t) {
  const n = this || Qe, r = t || n, o = q.from(r.headers);
  let s = r.data;
  return u.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function to(e) {
  return !!(e && e.__CANCEL__);
}
let et = class extends w {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, r) {
    super(t ?? "canceled", w.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function no(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new w(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? w.ERR_BAD_REQUEST : w.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function Ri(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function Pi(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const d = Date.now(), f = r[s];
    i || (i = d), n[o] = l, r[o] = d;
    let c = s, m = 0;
    for (; c !== o; )
      m += n[c++], c = c % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), d - i < t)
      return;
    const h = f && d - f;
    return h ? Math.round(m * 1e3 / h) : void 0;
  };
}
function xi(e, t) {
  let n = 0, r = 1e3 / t, o, s;
  const i = (d, f = Date.now()) => {
    n = f, o = null, s && (clearTimeout(s), s = null), e(...d);
  };
  return [(...d) => {
    const f = Date.now(), c = f - n;
    c >= r ? i(d, f) : (o = d, s || (s = setTimeout(() => {
      s = null, i(o);
    }, r - c)));
  }, () => o && i(o)];
}
const dt = (e, t, n = 3) => {
  let r = 0;
  const o = Pi(50, 250);
  return xi((s) => {
    if (!s || typeof s.loaded != "number")
      return;
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, l = a != null ? Math.min(i, a) : i, d = Math.max(0, l - r), f = o(d);
    r = Math.max(r, l);
    const c = {
      loaded: l,
      total: a,
      progress: a ? l / a : void 0,
      bytes: d,
      rate: f || void 0,
      estimated: f && a ? (a - l) / f : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(c);
  }, n);
}, Hn = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, qn = (e) => (...t) => u.asap(() => e(...t)), Ci = M.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, M.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(M.origin),
  M.navigator && /(msie|trident)/i.test(M.navigator.userAgent)
) : () => !0, $i = M.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, s, i) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      u.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), u.isString(r) && a.push(`path=${r}`), u.isString(o) && a.push(`domain=${o}`), s === !0 && a.push("secure"), u.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.split(";");
      for (let n = 0; n < t.length; n++) {
        const r = t[n].replace(/^\s+/, ""), o = r.indexOf("=");
        if (o !== -1 && r.slice(0, o) === e)
          try {
            return decodeURIComponent(r.slice(o + 1));
          } catch {
            return r.slice(o + 1);
          }
      }
      return null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ji(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Fi(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const Ni = /^https?:(?!\/\/)/i, Di = /[\t\n\r]/g;
function Li(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function Ui(e) {
  return Li(e).replace(Di, "");
}
function zn(e, t) {
  if (typeof e == "string" && Ni.test(Ui(e)))
    throw new w(
      'Invalid URL: missing "//" after protocol',
      w.ERR_INVALID_URL,
      t
    );
}
function ro(e, t, n, r) {
  zn(t, r);
  let o = !ji(t);
  return e && (o || n === !1) ? (zn(e, r), Fi(e, t)) : t;
}
const Vn = (e) => e instanceof q ? { ...e } : e;
function _e(e, t) {
  e = e || {}, t = t || {};
  const n = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function r(f, c, m, h) {
    return u.isPlainObject(f) && u.isPlainObject(c) ? u.merge.call({ caseless: h }, f, c) : u.isPlainObject(c) ? u.merge({}, c) : u.isArray(c) ? c.slice() : c;
  }
  function o(f, c, m, h) {
    if (u.isUndefined(c)) {
      if (!u.isUndefined(f))
        return r(void 0, f, m, h);
    } else return r(f, c, m, h);
  }
  function s(f, c) {
    if (!u.isUndefined(c))
      return r(void 0, c);
  }
  function i(f, c) {
    if (u.isUndefined(c)) {
      if (!u.isUndefined(f))
        return r(void 0, f);
    } else return r(void 0, c);
  }
  function a(f) {
    const c = u.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!u.isUndefined(c))
      if (u.isPlainObject(c)) {
        if (u.hasOwnProp(c, f))
          return c[f];
      } else
        return;
    const m = u.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (u.isPlainObject(m) && u.hasOwnProp(m, f))
      return m[f];
  }
  function l(f, c, m) {
    if (u.hasOwnProp(t, m))
      return r(f, c);
    if (u.hasOwnProp(e, m))
      return r(void 0, f);
  }
  const d = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    allowedSocketPaths: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (f, c, m) => o(Vn(f), Vn(c), m, !0)
  };
  return u.forEach(Object.keys({ ...e, ...t }), function(c) {
    if (c === "__proto__" || c === "constructor" || c === "prototype") return;
    const m = u.hasOwnProp(d, c) ? d[c] : o, h = u.hasOwnProp(e, c) ? e[c] : void 0, y = u.hasOwnProp(t, c) ? t[c] : void 0, v = m(h, y, c);
    u.isUndefined(v) && m !== l || (n[c] = v);
  }), u.hasOwnProp(t, "validateStatus") && u.isUndefined(t.validateStatus) && a("validateStatusUndefinedResolves") === !1 && (u.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const Ii = ["content-type", "content-length"];
function Bi(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, o]) => {
    Ii.includes(r.toLowerCase()) && e.set(r, o);
  });
}
const Mi = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function oo(e) {
  const t = _e({}, e), n = (m) => u.hasOwnProp(t, m) ? t[m] : void 0, r = n("data");
  let o = n("withXSRFToken");
  const s = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let a = n("headers");
  const l = n("auth"), d = n("baseURL"), f = n("allowAbsoluteUrls"), c = n("url");
  if (t.headers = a = q.from(a), t.url = Yr(
    ro(d, c, f, t),
    n("params"),
    n("paramsSerializer")
  ), l) {
    const m = u.getSafeProp(l, "username") || "", h = u.getSafeProp(l, "password") || "";
    try {
      a.set(
        "Authorization",
        "Basic " + btoa(m + ":" + (h ? Mi(h) : ""))
      );
    } catch (y) {
      throw w.from(y, w.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (u.isFormData(r) && (M.hasStandardBrowserEnv || M.hasStandardBrowserWebWorkerEnv || u.isReactNative(r) ? a.setContentType(void 0) : u.isFunction(r.getHeaders) && Bi(a, r.getHeaders(), n("formDataHeaderPolicy"))), M.hasStandardBrowserEnv && (u.isFunction(o) && (o = o(t)), o === !0 || o == null && Ci(t.url))) {
    const h = s && i && $i.read(i);
    h && a.set(s, h);
  }
  return t;
}
const Hi = typeof XMLHttpRequest < "u", qi = Hi && function(e) {
  return new Promise(function(n, r) {
    const o = oo(e);
    let s = o.data;
    const i = q.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: d } = o, f, c, m, h, y;
    function v() {
      h && h(), y && y(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let g = new XMLHttpRequest();
    g.open(o.method.toUpperCase(), o.url, !0), g.timeout = o.timeout;
    function p() {
      if (!g)
        return;
      const _ = q.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), A = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: _,
        config: e,
        request: g
      };
      no(
        function(j) {
          n(j), v();
        },
        function(j) {
          r(j), v();
        },
        A
      ), g = null;
    }
    "onloadend" in g ? g.onloadend = p : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.startsWith("file:")) || setTimeout(p);
    }, g.onabort = function() {
      g && (r(new w("Request aborted", w.ECONNABORTED, e, g)), v(), g = null);
    }, g.onerror = function(E) {
      const A = E && E.message ? E.message : "Network Error", T = new w(A, w.ERR_NETWORK, e, g);
      T.event = E || null, r(T), v(), g = null;
    }, g.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const A = o.transitional || ln;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(
        new w(
          E,
          A.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          e,
          g
        )
      ), v(), g = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in g && u.forEach(Wr(i), function(E, A) {
      g.setRequestHeader(A, E);
    }), u.isUndefined(o.withCredentials) || (g.withCredentials = !!o.withCredentials), a && a !== "json" && (g.responseType = o.responseType), d && ([m, y] = dt(d, !0), g.addEventListener("progress", m)), l && g.upload && ([c, h] = dt(l), g.upload.addEventListener("progress", c), g.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (f = (_) => {
      g && (r(!_ || _.type ? new et(null, e, g) : _), g.abort(), v(), g = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const b = Ri(o.url);
    if (b && !M.protocols.includes(b)) {
      r(
        new w(
          "Unsupported protocol " + b + ":",
          w.ERR_BAD_REQUEST,
          e
        )
      ), v();
      return;
    }
    g.send(s || null);
  });
}, zi = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const o = function(l) {
    if (!r) {
      r = !0, i();
      const d = l instanceof Error ? l : this.reason;
      n.abort(
        d instanceof w ? d : new et(d instanceof Error ? d.message : d)
      );
    }
  };
  let s = t && setTimeout(() => {
    s = null, o(new w(`timeout of ${t}ms exceeded`, w.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (s && clearTimeout(s), s = null, e.forEach((l) => {
      l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
    }), e = null);
  };
  e.forEach((l) => l.addEventListener("abort", o, { once: !0 }));
  const { signal: a } = n;
  return a.unsubscribe = () => u.asap(i), a;
}, Vi = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, ki = async function* (e, t) {
  for await (const n of Gi(e))
    yield* Vi(n, t);
}, Gi = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, kn = (e, t, n, r) => {
  const o = ki(e, t);
  let s = 0, i, a = (l) => {
    i || (i = !0, r && r(l));
  };
  return new ReadableStream(
    {
      async pull(l) {
        try {
          const { done: d, value: f } = await o.next();
          if (d) {
            a(), l.close();
            return;
          }
          let c = f.byteLength;
          if (n) {
            let m = s += c;
            n(m);
          }
          l.enqueue(new Uint8Array(f));
        } catch (d) {
          throw a(d), d;
        }
      },
      cancel(l) {
        return a(l), o.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, pt = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, Wi = (e, t, n) => t + 2 < n && pt(e.charCodeAt(t + 1)) && pt(e.charCodeAt(t + 2));
function Ki(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let i = r.length;
    const a = r.length;
    for (let h = 0; h < a; h++)
      if (r.charCodeAt(h) === 37 && h + 2 < a) {
        const y = r.charCodeAt(h + 1), v = r.charCodeAt(h + 2);
        pt(y) && pt(v) && (i -= 2, h += 2);
      }
    let l = 0, d = a - 1;
    const f = (h) => h >= 2 && r.charCodeAt(h - 2) === 37 && // '%'
    r.charCodeAt(h - 1) === 51 && // '3'
    (r.charCodeAt(h) === 68 || r.charCodeAt(h) === 100);
    d >= 0 && (r.charCodeAt(d) === 61 ? (l++, d--) : f(d) && (l++, d -= 3)), l === 1 && d >= 0 && (r.charCodeAt(d) === 61 || f(d)) && l++;
    const m = Math.floor(i / 4) * 3 - (l || 0);
    return m > 0 ? m : 0;
  }
  let s = 0;
  for (let i = 0, a = r.length; i < a; i++) {
    const l = r.charCodeAt(i);
    if (l === 37 && Wi(r, i, a))
      s += 1, i += 2;
    else if (l < 128)
      s += 1;
    else if (l < 2048)
      s += 2;
    else if (l >= 55296 && l <= 56319 && i + 1 < a) {
      const d = r.charCodeAt(i + 1);
      d >= 56320 && d <= 57343 ? (s += 4, i++) : s += 3;
    } else
      s += 3;
  }
  return s;
}
const cn = "1.18.1", Gn = 64 * 1024, { isFunction: ot } = u, Ji = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), Wn = (e) => {
  if (!u.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, Kn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Xi = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, Zi = (e) => {
  const t = u.global !== void 0 && u.global !== null ? u.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
  e = u.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: o, Request: s, Response: i } = e, a = o ? ot(o) : typeof fetch == "function", l = ot(s), d = ot(i);
  if (!a)
    return !1;
  const f = a && ot(n), c = a && (typeof r == "function" ? /* @__PURE__ */ ((p) => (b) => p.encode(b))(new r()) : async (p) => new Uint8Array(await new s(p).arrayBuffer())), m = l && f && Kn(() => {
    let p = !1;
    const b = new s(M.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }), _ = b.headers.has("Content-Type");
    return b.body != null && b.body.cancel(), p && !_;
  }), h = d && f && Kn(() => u.isReadableStream(new i("").body)), y = {
    stream: h && ((p) => p.body)
  };
  a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !y[p] && (y[p] = (b, _) => {
      let E = b && b[p];
      if (E)
        return E.call(b);
      throw new w(
        `Response type '${p}' is not supported`,
        w.ERR_NOT_SUPPORT,
        _
      );
    });
  });
  const v = async (p) => {
    if (p == null)
      return 0;
    if (u.isBlob(p))
      return p.size;
    if (u.isSpecCompliantForm(p))
      return (await new s(M.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (u.isArrayBufferView(p) || u.isArrayBuffer(p))
      return p.byteLength;
    if (u.isURLSearchParams(p) && (p = p + ""), u.isString(p))
      return (await c(p)).byteLength;
  }, g = async (p, b) => {
    const _ = u.toFiniteNumber(p.getContentLength());
    return _ ?? v(b);
  };
  return async (p) => {
    let {
      url: b,
      method: _,
      data: E,
      signal: A,
      cancelToken: T,
      timeout: j,
      onDownloadProgress: Z,
      onUploadProgress: W,
      responseType: U,
      headers: O,
      withCredentials: S = "same-origin",
      fetchOptions: R,
      maxContentLength: x,
      maxBodyLength: V
    } = oo(p);
    const L = u.isNumber(x) && x > -1, ne = u.isNumber(V) && V > -1, $t = (C) => u.hasOwnProp(p, C) ? p[C] : void 0;
    let Pn = o || fetch;
    U = U ? (U + "").toLowerCase() : "text";
    let ce = zi(
      [A, T && T.toAbortSignal()],
      j
    ), I = null;
    const me = ce && ce.unsubscribe && (() => {
      ce.unsubscribe();
    });
    let Ae, Le = null;
    const xn = () => new w(
      "Request body larger than maxBodyLength limit",
      w.ERR_BAD_REQUEST,
      p,
      I
    );
    try {
      let C;
      const K = $t("auth");
      if (K) {
        const P = u.getSafeProp(K, "username") || "", k = u.getSafeProp(K, "password") || "";
        C = {
          username: P,
          password: k
        };
      }
      if (Xi(b)) {
        const P = new URL(b, M.origin);
        if (!C && (P.username || P.password)) {
          const k = Wn(P.username), fe = Wn(P.password);
          C = {
            username: k,
            password: fe
          };
        }
        (P.username || P.password) && (P.username = "", P.password = "", b = P.href);
      }
      if (C && (O.delete("authorization"), O.set(
        "Authorization",
        "Basic " + btoa(Ji((C.username || "") + ":" + (C.password || "")))
      )), L && typeof b == "string" && b.startsWith("data:") && Ki(b) > x)
        throw new w(
          "maxContentLength size of " + x + " exceeded",
          w.ERR_BAD_RESPONSE,
          p,
          I
        );
      if (ne && _ !== "get" && _ !== "head") {
        const P = await v(E);
        if (typeof P == "number" && isFinite(P) && (Ae = P, P > V))
          throw xn();
      }
      const rt = ne && (u.isReadableStream(E) || u.isStream(E)), Cn = (P, k, fe) => kn(
        P,
        Gn,
        (ge) => {
          if (ne && ge > V)
            throw Le = xn();
          k && k(ge);
        },
        fe
      );
      if (m && _ !== "get" && _ !== "head" && (W || rt)) {
        if (Ae = Ae ?? await g(O, E), Ae !== 0 || rt) {
          let P = new s(b, {
            method: "POST",
            body: E,
            duplex: "half"
          }), k;
          if (u.isFormData(E) && (k = P.headers.get("content-type")) && O.setContentType(k), P.body) {
            const [fe, ge] = W && Hn(
              Ae,
              dt(qn(W))
            ) || [];
            E = Cn(P.body, fe, ge);
          }
        }
      } else if (rt && !l && f && _ !== "get" && _ !== "head")
        E = Cn(E);
      else if (rt && l && !m && _ !== "get" && _ !== "head")
        throw new w(
          "Stream request bodies are not supported by the current fetch implementation",
          w.ERR_NOT_SUPPORT,
          p,
          I
        );
      u.isString(S) || (S = S ? "include" : "omit");
      const Ko = l && "credentials" in s.prototype;
      if (u.isFormData(E)) {
        const P = O.getContentType();
        P && /^multipart\/form-data/i.test(P) && !/boundary=/i.test(P) && O.delete("content-type");
      }
      O.set("User-Agent", "axios/" + cn, !1);
      const $n = {
        ...R,
        signal: ce,
        method: _.toUpperCase(),
        headers: Wr(O.normalize()),
        body: E,
        duplex: "half",
        credentials: Ko ? S : void 0
      };
      I = l && new s(b, $n);
      let se = await (l ? Pn(I, R) : Pn(b, $n));
      const jn = q.from(se.headers);
      if (L) {
        const P = u.toFiniteNumber(jn.getContentLength());
        if (P != null && P > x)
          throw new w(
            "maxContentLength size of " + x + " exceeded",
            w.ERR_BAD_RESPONSE,
            p,
            I
          );
      }
      const jt = h && (U === "stream" || U === "response");
      if (h && se.body && (Z || L || jt && me)) {
        const P = {};
        ["status", "statusText", "headers"].forEach((Ue) => {
          P[Ue] = se[Ue];
        });
        const k = u.toFiniteNumber(jn.getContentLength()), [fe, ge] = Z && Hn(
          k,
          dt(qn(Z), !0)
        ) || [];
        let Fn = 0;
        const Jo = (Ue) => {
          if (L && (Fn = Ue, Fn > x))
            throw new w(
              "maxContentLength size of " + x + " exceeded",
              w.ERR_BAD_RESPONSE,
              p,
              I
            );
          fe && fe(Ue);
        };
        se = new i(
          kn(se.body, Gn, Jo, () => {
            ge && ge(), me && me();
          }),
          P
        );
      }
      U = U || "text";
      let ie = await y[u.findKey(y, U) || "text"](
        se,
        p
      );
      if (L && !h && !jt) {
        let P;
        if (ie != null && (typeof ie.byteLength == "number" ? P = ie.byteLength : typeof ie.size == "number" ? P = ie.size : typeof ie == "string" && (P = typeof r == "function" ? new r().encode(ie).byteLength : ie.length)), typeof P == "number" && P > x)
          throw new w(
            "maxContentLength size of " + x + " exceeded",
            w.ERR_BAD_RESPONSE,
            p,
            I
          );
      }
      return !jt && me && me(), await new Promise((P, k) => {
        no(P, k, {
          data: ie,
          headers: q.from(se.headers),
          status: se.status,
          statusText: se.statusText,
          config: p,
          request: I
        });
      });
    } catch (C) {
      if (me && me(), ce && ce.aborted && ce.reason instanceof w) {
        const K = ce.reason;
        throw K.config = p, I && (K.request = I), C !== K && Object.defineProperty(K, "cause", {
          __proto__: null,
          value: C,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), K;
      }
      if (Le)
        throw I && !Le.request && (Le.request = I), Le;
      if (C instanceof w)
        throw I && !C.request && (C.request = I), C;
      if (C && C.name === "TypeError" && /Load failed|fetch/i.test(C.message)) {
        const K = new w(
          "Network Error",
          w.ERR_NETWORK,
          p,
          I,
          C && C.response
        );
        throw Object.defineProperty(K, "cause", {
          __proto__: null,
          value: C.cause || C,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), K;
      }
      throw w.from(C, C && C.code, p, I, C && C.response);
    }
  };
}, Yi = /* @__PURE__ */ new Map(), so = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, s = [r, o, n];
  let i = s.length, a = i, l, d, f = Yi;
  for (; a--; )
    l = s[a], d = f.get(l), d === void 0 && f.set(l, d = a ? /* @__PURE__ */ new Map() : Zi(t)), f = d;
  return d;
};
so();
const fn = {
  http: fi,
  xhr: qi,
  fetch: {
    get: so
  }
};
u.forEach(fn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const Jn = (e) => `- ${e}`, Qi = (e) => u.isFunction(e) || e === null || e === !1;
function ea(e, t) {
  e = u.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const s = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (o = r, !Qi(r) && (o = fn[(a = String(r)).toLowerCase()], o === void 0))
      throw new w(`Unknown adapter '${a}'`);
    if (o && (u.isFunction(o) || (o = o.get(t))))
      break;
    s[a || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(s).map(
      ([l, d]) => `adapter ${l} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? i.length > 1 ? `since :
` + i.map(Jn).join(`
`) : " " + Jn(i[0]) : "as no adapter specified";
    throw new w(
      "There is no suitable adapter to dispatch the request " + a,
      w.ERR_NOT_SUPPORT
    );
  }
  return o;
}
const io = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ea,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: fn
};
function Ut(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new et(null, e);
}
function Xn(e) {
  return Ut(e), e.headers = q.from(e.headers), e.data = Lt.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), io.getAdapter(e.adapter || Qe.adapter, e)(e).then(
    function(r) {
      Ut(e), e.response = r;
      try {
        r.data = Lt.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = q.from(r.headers), r;
    },
    function(r) {
      if (!to(r) && (Ut(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = Lt.call(
            e,
            e.transformResponse,
            r.response
          );
        } finally {
          delete e.response;
        }
        r.response.headers = q.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const Tt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Tt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Zn = {};
Tt.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + cn + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new w(
        o(i, " has been removed" + (n ? " in " + n : "")),
        w.ERR_DEPRECATED
      );
    return n && !Zn[i] && (Zn[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
Tt.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function ta(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new w("options must be an object", w.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = Object.prototype.hasOwnProperty.call(t, s) ? t[s] : void 0;
    if (i) {
      const a = e[s], l = a === void 0 || i(a, s, e);
      if (l !== !0)
        throw new w(
          "option " + s + " must be " + l,
          w.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new w("Unknown option " + s, w.ERR_BAD_OPTION);
  }
}
const lt = {
  assertOptions: ta,
  validators: Tt
}, H = lt.validators;
let we = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Bn(),
      response: new Bn()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const s = (() => {
          if (!o.stack)
            return "";
          const i = o.stack.indexOf(`
`);
          return i === -1 ? "" : o.stack.slice(i + 1);
        })();
        try {
          if (!r.stack)
            r.stack = s;
          else if (s) {
            const i = s.indexOf(`
`), a = i === -1 ? -1 : s.indexOf(`
`, i + 1), l = a === -1 ? "" : s.slice(a + 1);
            String(r.stack).endsWith(l) || (r.stack += `
` + s);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = _e(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && lt.assertOptions(
      r,
      {
        silentJSONParsing: H.transitional(H.boolean),
        forcedJSONParsing: H.transitional(H.boolean),
        clarifyTimeoutError: H.transitional(H.boolean),
        legacyInterceptorReqResOrdering: H.transitional(H.boolean),
        advertiseZstdAcceptEncoding: H.transitional(H.boolean),
        validateStatusUndefinedResolves: H.transitional(H.boolean)
      },
      !1
    ), o != null && (u.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : lt.assertOptions(
      o,
      {
        encode: H.function,
        serialize: H.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), lt.assertOptions(
      n,
      {
        baseUrl: H.spelling("baseURL"),
        withXsrfToken: H.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && u.merge(s.common, s[n.method]);
    s && u.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (y) => {
      delete s[y];
    }), n.headers = q.concat(i, s);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(v) {
      if (typeof v.runWhen == "function" && v.runWhen(n) === !1)
        return;
      l = l && v.synchronous;
      const g = n.transitional || ln;
      g && g.legacyInterceptorReqResOrdering ? a.unshift(v.fulfilled, v.rejected) : a.push(v.fulfilled, v.rejected);
    });
    const d = [];
    this.interceptors.response.forEach(function(v) {
      d.push(v.fulfilled, v.rejected);
    });
    let f, c = 0, m;
    if (!l) {
      const y = [Xn.bind(this), void 0];
      for (y.unshift(...a), y.push(...d), m = y.length, f = Promise.resolve(n); c < m; )
        f = f.then(y[c++], y[c++]);
      return f;
    }
    m = a.length;
    let h = n;
    for (; c < m; ) {
      const y = a[c++], v = a[c++];
      try {
        h = y(h);
      } catch (g) {
        v.call(this, g);
        break;
      }
    }
    try {
      f = Xn.call(this, h);
    } catch (y) {
      return Promise.reject(y);
    }
    for (c = 0, m = d.length; c < m; )
      f = f.then(d[c++], d[c++]);
    return f;
  }
  getUri(t) {
    t = _e(this.defaults, t);
    const n = ro(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return Yr(n, t.params, t.paramsSerializer);
  }
};
u.forEach(["delete", "get", "head", "options"], function(t) {
  we.prototype[t] = function(n, r) {
    return this.request(
      _e(r || {}, {
        method: t,
        url: n,
        data: r && u.hasOwnProp(r, "data") ? r.data : void 0
      })
    );
  };
});
u.forEach(["post", "put", "patch", "query"], function(t) {
  function n(r) {
    return function(s, i, a) {
      return this.request(
        _e(a || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: s,
          data: i
        })
      );
    };
  }
  we.prototype[t] = n(), t !== "query" && (we.prototype[t + "Form"] = n(!0));
});
let na = class ao {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      r.reason || (r.reason = new et(s, i, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ao(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function ra(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function oa(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
const Kt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Kt).forEach(([e, t]) => {
  Kt[t] = e;
});
function lo(e) {
  const t = new we(e), n = Ir(we.prototype.request, t);
  return u.extend(n, we.prototype, t, { allOwnKeys: !0 }), u.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return lo(_e(e, o));
  }, n;
}
const N = lo(Qe);
N.Axios = we;
N.CanceledError = et;
N.CancelToken = na;
N.isCancel = to;
N.VERSION = cn;
N.toFormData = St;
N.AxiosError = w;
N.Cancel = N.CanceledError;
N.all = function(t) {
  return Promise.all(t);
};
N.spread = ra;
N.isAxiosError = oa;
N.mergeConfig = _e;
N.AxiosHeaders = q;
N.formToJSON = (e) => eo(u.isHTMLForm(e) ? new FormData(e) : e);
N.getAdapter = io.getAdapter;
N.HttpStatusCode = Kt;
N.default = N;
const {
  Axios: Id,
  AxiosError: Bd,
  CanceledError: Md,
  isCancel: uo,
  CancelToken: Hd,
  VERSION: qd,
  all: zd,
  Cancel: Vd,
  isAxiosError: co,
  spread: kd,
  toFormData: Gd,
  AxiosHeaders: Wd,
  HttpStatusCode: Kd,
  formToJSON: Jd,
  getAdapter: Xd,
  mergeConfig: sa,
  create: Zd
} = N;
var fo = typeof global == "object" && global && global.Object === Object && global, ia = typeof self == "object" && self && self.Object === Object && self, te = fo || ia || Function("return this")(), X = te.Symbol, po = Object.prototype, aa = po.hasOwnProperty, la = po.toString, Be = X ? X.toStringTag : void 0;
function ua(e) {
  var t = aa.call(e, Be), n = e[Be];
  try {
    e[Be] = void 0;
    var r = !0;
  } catch {
  }
  var o = la.call(e);
  return r && (t ? e[Be] = n : delete e[Be]), o;
}
var ca = Object.prototype, fa = ca.toString;
function da(e) {
  return fa.call(e);
}
var pa = "[object Null]", ha = "[object Undefined]", Yn = X ? X.toStringTag : void 0;
function ve(e) {
  return e == null ? e === void 0 ? ha : pa : Yn && Yn in Object(e) ? ua(e) : da(e);
}
function oe(e) {
  return e != null && typeof e == "object";
}
var ma = "[object Symbol]";
function At(e) {
  return typeof e == "symbol" || oe(e) && ve(e) == ma;
}
function ho(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Q = Array.isArray, Qn = X ? X.prototype : void 0, er = Qn ? Qn.toString : void 0;
function mo(e) {
  if (typeof e == "string")
    return e;
  if (Q(e))
    return ho(e, mo) + "";
  if (At(e))
    return er ? er.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var ga = /\s/;
function ya(e) {
  for (var t = e.length; t-- && ga.test(e.charAt(t)); )
    ;
  return t;
}
var ba = /^\s+/;
function wa(e) {
  return e && e.slice(0, ya(e) + 1).replace(ba, "");
}
function G(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var tr = NaN, Ea = /^[-+]0x[0-9a-f]+$/i, _a = /^0b[01]+$/i, Oa = /^0o[0-7]+$/i, va = parseInt;
function nr(e) {
  if (typeof e == "number")
    return e;
  if (At(e))
    return tr;
  if (G(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = G(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = wa(e);
  var n = _a.test(e);
  return n || Oa.test(e) ? va(e.slice(2), n ? 2 : 8) : Ea.test(e) ? tr : +e;
}
function go(e) {
  return e;
}
var Sa = "[object AsyncFunction]", Ta = "[object Function]", Aa = "[object GeneratorFunction]", Ra = "[object Proxy]";
function dn(e) {
  if (!G(e))
    return !1;
  var t = ve(e);
  return t == Ta || t == Aa || t == Sa || t == Ra;
}
var It = te["__core-js_shared__"], rr = (function() {
  var e = /[^.]+$/.exec(It && It.keys && It.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function Pa(e) {
  return !!rr && rr in e;
}
var xa = Function.prototype, Ca = xa.toString;
function Se(e) {
  if (e != null) {
    try {
      return Ca.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var $a = /[\\^$.*+?()[\]{}|]/g, ja = /^\[object .+?Constructor\]$/, Fa = Function.prototype, Na = Object.prototype, Da = Fa.toString, La = Na.hasOwnProperty, Ua = RegExp(
  "^" + Da.call(La).replace($a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ia(e) {
  if (!G(e) || Pa(e))
    return !1;
  var t = dn(e) ? Ua : ja;
  return t.test(Se(e));
}
function Ba(e, t) {
  return e?.[t];
}
function Te(e, t) {
  var n = Ba(e, t);
  return Ia(n) ? n : void 0;
}
var Jt = Te(te, "WeakMap"), or = Object.create, Ma = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!G(t))
      return {};
    if (or)
      return or(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
})();
function Ha(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function yo(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var qa = 800, za = 16, Va = Date.now;
function ka(e) {
  var t = 0, n = 0;
  return function() {
    var r = Va(), o = za - (r - n);
    if (n = r, o > 0) {
      if (++t >= qa)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ga(e) {
  return function() {
    return e;
  };
}
var ht = (function() {
  try {
    var e = Te(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), Wa = ht ? function(e, t) {
  return ht(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ga(t),
    writable: !0
  });
} : go, bo = ka(Wa);
function Ka(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Ja = 9007199254740991, Xa = /^(?:0|[1-9]\d*)$/;
function pn(e, t) {
  var n = typeof e;
  return t = t ?? Ja, !!t && (n == "number" || n != "symbol" && Xa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function hn(e, t, n) {
  t == "__proto__" && ht ? ht(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function tt(e, t) {
  return e === t || e !== e && t !== t;
}
var Za = Object.prototype, Ya = Za.hasOwnProperty;
function mn(e, t, n) {
  var r = e[t];
  (!(Ya.call(e, t) && tt(r, n)) || n === void 0 && !(t in e)) && hn(e, t, n);
}
function De(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var a = t[s], l = void 0;
    l === void 0 && (l = e[a]), o ? hn(n, a, l) : mn(n, a, l);
  }
  return n;
}
var sr = Math.max;
function wo(e, t, n) {
  return t = sr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, s = sr(r.length - t, 0), i = Array(s); ++o < s; )
      i[o] = r[t + o];
    o = -1;
    for (var a = Array(t + 1); ++o < t; )
      a[o] = r[o];
    return a[t] = n(i), Ha(e, this, a);
  };
}
function Qa(e, t) {
  return bo(wo(e, t, go), e + "");
}
var el = 9007199254740991;
function Eo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= el;
}
function Rt(e) {
  return e != null && Eo(e.length) && !dn(e);
}
function tl(e, t, n) {
  if (!G(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? Rt(n) && pn(t, n.length) : r == "string" && t in n) ? tt(n[t], e) : !1;
}
function nl(e) {
  return Qa(function(t, n) {
    var r = -1, o = n.length, s = o > 1 ? n[o - 1] : void 0, i = o > 2 ? n[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (o--, s) : void 0, i && tl(n[0], n[1], i) && (s = o < 3 ? void 0 : s, o = 1), t = Object(t); ++r < o; ) {
      var a = n[r];
      a && e(t, a, r, s);
    }
    return t;
  });
}
var rl = Object.prototype;
function gn(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || rl;
  return e === n;
}
function ol(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var sl = "[object Arguments]";
function ir(e) {
  return oe(e) && ve(e) == sl;
}
var _o = Object.prototype, il = _o.hasOwnProperty, al = _o.propertyIsEnumerable, mt = ir(/* @__PURE__ */ (function() {
  return arguments;
})()) ? ir : function(e) {
  return oe(e) && il.call(e, "callee") && !al.call(e, "callee");
};
function ll() {
  return !1;
}
var Oo = typeof exports == "object" && exports && !exports.nodeType && exports, ar = Oo && typeof module == "object" && module && !module.nodeType && module, ul = ar && ar.exports === Oo, lr = ul ? te.Buffer : void 0, cl = lr ? lr.isBuffer : void 0, Ge = cl || ll, fl = "[object Arguments]", dl = "[object Array]", pl = "[object Boolean]", hl = "[object Date]", ml = "[object Error]", gl = "[object Function]", yl = "[object Map]", bl = "[object Number]", wl = "[object Object]", El = "[object RegExp]", _l = "[object Set]", Ol = "[object String]", vl = "[object WeakMap]", Sl = "[object ArrayBuffer]", Tl = "[object DataView]", Al = "[object Float32Array]", Rl = "[object Float64Array]", Pl = "[object Int8Array]", xl = "[object Int16Array]", Cl = "[object Int32Array]", $l = "[object Uint8Array]", jl = "[object Uint8ClampedArray]", Fl = "[object Uint16Array]", Nl = "[object Uint32Array]", F = {};
F[Al] = F[Rl] = F[Pl] = F[xl] = F[Cl] = F[$l] = F[jl] = F[Fl] = F[Nl] = !0;
F[fl] = F[dl] = F[Sl] = F[pl] = F[Tl] = F[hl] = F[ml] = F[gl] = F[yl] = F[bl] = F[wl] = F[El] = F[_l] = F[Ol] = F[vl] = !1;
function Dl(e) {
  return oe(e) && Eo(e.length) && !!F[ve(e)];
}
function yn(e) {
  return function(t) {
    return e(t);
  };
}
var vo = typeof exports == "object" && exports && !exports.nodeType && exports, ze = vo && typeof module == "object" && module && !module.nodeType && module, Ll = ze && ze.exports === vo, Bt = Ll && fo.process, je = (function() {
  try {
    var e = ze && ze.require && ze.require("util").types;
    return e || Bt && Bt.binding && Bt.binding("util");
  } catch {
  }
})(), ur = je && je.isTypedArray, bn = ur ? yn(ur) : Dl, Ul = Object.prototype, Il = Ul.hasOwnProperty;
function So(e, t) {
  var n = Q(e), r = !n && mt(e), o = !n && !r && Ge(e), s = !n && !r && !o && bn(e), i = n || r || o || s, a = i ? ol(e.length, String) : [], l = a.length;
  for (var d in e)
    (t || Il.call(e, d)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    pn(d, l))) && a.push(d);
  return a;
}
function To(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Bl = To(Object.keys, Object), Ml = Object.prototype, Hl = Ml.hasOwnProperty;
function ql(e) {
  if (!gn(e))
    return Bl(e);
  var t = [];
  for (var n in Object(e))
    Hl.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function wn(e) {
  return Rt(e) ? So(e) : ql(e);
}
function zl(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Vl = Object.prototype, kl = Vl.hasOwnProperty;
function Gl(e) {
  if (!G(e))
    return zl(e);
  var t = gn(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !kl.call(e, r)) || n.push(r);
  return n;
}
function nt(e) {
  return Rt(e) ? So(e, !0) : Gl(e);
}
var Wl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Kl = /^\w*$/;
function Jl(e, t) {
  if (Q(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || At(e) ? !0 : Kl.test(e) || !Wl.test(e) || t != null && e in Object(t);
}
var We = Te(Object, "create");
function Xl() {
  this.__data__ = We ? We(null) : {}, this.size = 0;
}
function Zl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Yl = "__lodash_hash_undefined__", Ql = Object.prototype, eu = Ql.hasOwnProperty;
function tu(e) {
  var t = this.__data__;
  if (We) {
    var n = t[e];
    return n === Yl ? void 0 : n;
  }
  return eu.call(t, e) ? t[e] : void 0;
}
var nu = Object.prototype, ru = nu.hasOwnProperty;
function ou(e) {
  var t = this.__data__;
  return We ? t[e] !== void 0 : ru.call(t, e);
}
var su = "__lodash_hash_undefined__";
function iu(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = We && t === void 0 ? su : t, this;
}
function Oe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Oe.prototype.clear = Xl;
Oe.prototype.delete = Zl;
Oe.prototype.get = tu;
Oe.prototype.has = ou;
Oe.prototype.set = iu;
function au() {
  this.__data__ = [], this.size = 0;
}
function Pt(e, t) {
  for (var n = e.length; n--; )
    if (tt(e[n][0], t))
      return n;
  return -1;
}
var lu = Array.prototype, uu = lu.splice;
function cu(e) {
  var t = this.__data__, n = Pt(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : uu.call(t, n, 1), --this.size, !0;
}
function fu(e) {
  var t = this.__data__, n = Pt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function du(e) {
  return Pt(this.__data__, e) > -1;
}
function pu(e, t) {
  var n = this.__data__, r = Pt(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function le(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
le.prototype.clear = au;
le.prototype.delete = cu;
le.prototype.get = fu;
le.prototype.has = du;
le.prototype.set = pu;
var Ke = Te(te, "Map");
function hu() {
  this.size = 0, this.__data__ = {
    hash: new Oe(),
    map: new (Ke || le)(),
    string: new Oe()
  };
}
function mu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function xt(e, t) {
  var n = e.__data__;
  return mu(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function gu(e) {
  var t = xt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function yu(e) {
  return xt(this, e).get(e);
}
function bu(e) {
  return xt(this, e).has(e);
}
function wu(e, t) {
  var n = xt(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ue.prototype.clear = hu;
ue.prototype.delete = gu;
ue.prototype.get = yu;
ue.prototype.has = bu;
ue.prototype.set = wu;
var Eu = "Expected a function";
function En(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Eu);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var i = e.apply(this, r);
    return n.cache = s.set(o, i) || s, i;
  };
  return n.cache = new (En.Cache || ue)(), n;
}
En.Cache = ue;
var _u = 500;
function Ou(e) {
  var t = En(e, function(r) {
    return n.size === _u && n.clear(), r;
  }), n = t.cache;
  return t;
}
var vu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Su = /\\(\\)?/g, Tu = Ou(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(vu, function(n, r, o, s) {
    t.push(o ? s.replace(Su, "$1") : r || n);
  }), t;
});
function Au(e) {
  return e == null ? "" : mo(e);
}
function Ct(e, t) {
  return Q(e) ? e : Jl(e, t) ? [e] : Tu(Au(e));
}
function gt(e) {
  if (typeof e == "string" || At(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ao(e, t) {
  t = Ct(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[gt(t[n++])];
  return n && n == r ? e : void 0;
}
function yt(e, t, n) {
  var r = e == null ? void 0 : Ao(e, t);
  return r === void 0 ? n : r;
}
function _n(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var cr = X ? X.isConcatSpreadable : void 0;
function Ru(e) {
  return Q(e) || mt(e) || !!(cr && e && e[cr]);
}
function Pu(e, t, n, r, o) {
  var s = -1, i = e.length;
  for (n || (n = Ru), o || (o = []); ++s < i; ) {
    var a = e[s];
    n(a) ? _n(o, a) : o[o.length] = a;
  }
  return o;
}
function xu(e) {
  var t = e == null ? 0 : e.length;
  return t ? Pu(e) : [];
}
function Cu(e) {
  return bo(wo(e, void 0, xu), e + "");
}
var On = To(Object.getPrototypeOf, Object), $u = "[object Object]", ju = Function.prototype, Fu = Object.prototype, Ro = ju.toString, Nu = Fu.hasOwnProperty, Du = Ro.call(Object);
function Po(e) {
  if (!oe(e) || ve(e) != $u)
    return !1;
  var t = On(e);
  if (t === null)
    return !0;
  var n = Nu.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ro.call(n) == Du;
}
function Lu(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(o); ++r < o; )
    s[r] = e[r + t];
  return s;
}
function Uu() {
  this.__data__ = new le(), this.size = 0;
}
function Iu(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Bu(e) {
  return this.__data__.get(e);
}
function Mu(e) {
  return this.__data__.has(e);
}
var Hu = 200;
function qu(e, t) {
  var n = this.__data__;
  if (n instanceof le) {
    var r = n.__data__;
    if (!Ke || r.length < Hu - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ue(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function re(e) {
  var t = this.__data__ = new le(e);
  this.size = t.size;
}
re.prototype.clear = Uu;
re.prototype.delete = Iu;
re.prototype.get = Bu;
re.prototype.has = Mu;
re.prototype.set = qu;
function zu(e, t) {
  return e && De(t, wn(t), e);
}
function Vu(e, t) {
  return e && De(t, nt(t), e);
}
var xo = typeof exports == "object" && exports && !exports.nodeType && exports, fr = xo && typeof module == "object" && module && !module.nodeType && module, ku = fr && fr.exports === xo, dr = ku ? te.Buffer : void 0, pr = dr ? dr.allocUnsafe : void 0;
function Co(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = pr ? pr(n) : new e.constructor(n);
  return e.copy(r), r;
}
function Gu(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, s = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (s[o++] = i);
  }
  return s;
}
function $o() {
  return [];
}
var Wu = Object.prototype, Ku = Wu.propertyIsEnumerable, hr = Object.getOwnPropertySymbols, vn = hr ? function(e) {
  return e == null ? [] : (e = Object(e), Gu(hr(e), function(t) {
    return Ku.call(e, t);
  }));
} : $o;
function Ju(e, t) {
  return De(e, vn(e), t);
}
var Xu = Object.getOwnPropertySymbols, jo = Xu ? function(e) {
  for (var t = []; e; )
    _n(t, vn(e)), e = On(e);
  return t;
} : $o;
function Zu(e, t) {
  return De(e, jo(e), t);
}
function Fo(e, t, n) {
  var r = t(e);
  return Q(e) ? r : _n(r, n(e));
}
function Xt(e) {
  return Fo(e, wn, vn);
}
function No(e) {
  return Fo(e, nt, jo);
}
var Zt = Te(te, "DataView"), Yt = Te(te, "Promise"), Qt = Te(te, "Set"), mr = "[object Map]", Yu = "[object Object]", gr = "[object Promise]", yr = "[object Set]", br = "[object WeakMap]", wr = "[object DataView]", Qu = Se(Zt), ec = Se(Ke), tc = Se(Yt), nc = Se(Qt), rc = Se(Jt), Y = ve;
(Zt && Y(new Zt(new ArrayBuffer(1))) != wr || Ke && Y(new Ke()) != mr || Yt && Y(Yt.resolve()) != gr || Qt && Y(new Qt()) != yr || Jt && Y(new Jt()) != br) && (Y = function(e) {
  var t = ve(e), n = t == Yu ? e.constructor : void 0, r = n ? Se(n) : "";
  if (r)
    switch (r) {
      case Qu:
        return wr;
      case ec:
        return mr;
      case tc:
        return gr;
      case nc:
        return yr;
      case rc:
        return br;
    }
  return t;
});
var oc = Object.prototype, sc = oc.hasOwnProperty;
function ic(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && sc.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var bt = te.Uint8Array;
function Sn(e) {
  var t = new e.constructor(e.byteLength);
  return new bt(t).set(new bt(e)), t;
}
function ac(e, t) {
  var n = t ? Sn(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var lc = /\w*$/;
function uc(e) {
  var t = new e.constructor(e.source, lc.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Er = X ? X.prototype : void 0, _r = Er ? Er.valueOf : void 0;
function cc(e) {
  return _r ? Object(_r.call(e)) : {};
}
function Do(e, t) {
  var n = t ? Sn(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var fc = "[object Boolean]", dc = "[object Date]", pc = "[object Map]", hc = "[object Number]", mc = "[object RegExp]", gc = "[object Set]", yc = "[object String]", bc = "[object Symbol]", wc = "[object ArrayBuffer]", Ec = "[object DataView]", _c = "[object Float32Array]", Oc = "[object Float64Array]", vc = "[object Int8Array]", Sc = "[object Int16Array]", Tc = "[object Int32Array]", Ac = "[object Uint8Array]", Rc = "[object Uint8ClampedArray]", Pc = "[object Uint16Array]", xc = "[object Uint32Array]";
function Cc(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case wc:
      return Sn(e);
    case fc:
    case dc:
      return new r(+e);
    case Ec:
      return ac(e, n);
    case _c:
    case Oc:
    case vc:
    case Sc:
    case Tc:
    case Ac:
    case Rc:
    case Pc:
    case xc:
      return Do(e, n);
    case pc:
      return new r();
    case hc:
    case yc:
      return new r(e);
    case mc:
      return uc(e);
    case gc:
      return new r();
    case bc:
      return cc(e);
  }
}
function Lo(e) {
  return typeof e.constructor == "function" && !gn(e) ? Ma(On(e)) : {};
}
var $c = "[object Map]";
function jc(e) {
  return oe(e) && Y(e) == $c;
}
var Or = je && je.isMap, Fc = Or ? yn(Or) : jc, Nc = "[object Set]";
function Dc(e) {
  return oe(e) && Y(e) == Nc;
}
var vr = je && je.isSet, Lc = vr ? yn(vr) : Dc, Uc = 1, Ic = 2, Bc = 4, Uo = "[object Arguments]", Mc = "[object Array]", Hc = "[object Boolean]", qc = "[object Date]", zc = "[object Error]", Io = "[object Function]", Vc = "[object GeneratorFunction]", kc = "[object Map]", Gc = "[object Number]", Bo = "[object Object]", Wc = "[object RegExp]", Kc = "[object Set]", Jc = "[object String]", Xc = "[object Symbol]", Zc = "[object WeakMap]", Yc = "[object ArrayBuffer]", Qc = "[object DataView]", ef = "[object Float32Array]", tf = "[object Float64Array]", nf = "[object Int8Array]", rf = "[object Int16Array]", of = "[object Int32Array]", sf = "[object Uint8Array]", af = "[object Uint8ClampedArray]", lf = "[object Uint16Array]", uf = "[object Uint32Array]", $ = {};
$[Uo] = $[Mc] = $[Yc] = $[Qc] = $[Hc] = $[qc] = $[ef] = $[tf] = $[nf] = $[rf] = $[of] = $[kc] = $[Gc] = $[Bo] = $[Wc] = $[Kc] = $[Jc] = $[Xc] = $[sf] = $[af] = $[lf] = $[uf] = !0;
$[zc] = $[Io] = $[Zc] = !1;
function Ve(e, t, n, r, o, s) {
  var i, a = t & Uc, l = t & Ic, d = t & Bc;
  if (n && (i = o ? n(e, r, o, s) : n(e)), i !== void 0)
    return i;
  if (!G(e))
    return e;
  var f = Q(e);
  if (f) {
    if (i = ic(e), !a)
      return yo(e, i);
  } else {
    var c = Y(e), m = c == Io || c == Vc;
    if (Ge(e))
      return Co(e, a);
    if (c == Bo || c == Uo || m && !o) {
      if (i = l || m ? {} : Lo(e), !a)
        return l ? Zu(e, Vu(i, e)) : Ju(e, zu(i, e));
    } else {
      if (!$[c])
        return o ? e : {};
      i = Cc(e, c, a);
    }
  }
  s || (s = new re());
  var h = s.get(e);
  if (h)
    return h;
  s.set(e, i), Lc(e) ? e.forEach(function(g) {
    i.add(Ve(g, t, n, g, e, s));
  }) : Fc(e) && e.forEach(function(g, p) {
    i.set(p, Ve(g, t, n, p, e, s));
  });
  var y = d ? l ? No : Xt : l ? nt : wn, v = f ? void 0 : y(e);
  return Ka(v || e, function(g, p) {
    v && (p = g, g = e[p]), mn(i, p, Ve(g, t, n, p, e, s));
  }), i;
}
var cf = 1, ff = 4;
function Pe(e) {
  return Ve(e, cf | ff);
}
var df = "__lodash_hash_undefined__";
function pf(e) {
  return this.__data__.set(e, df), this;
}
function hf(e) {
  return this.__data__.has(e);
}
function wt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ue(); ++t < n; )
    this.add(e[t]);
}
wt.prototype.add = wt.prototype.push = pf;
wt.prototype.has = hf;
function mf(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function gf(e, t) {
  return e.has(t);
}
var yf = 1, bf = 2;
function Mo(e, t, n, r, o, s) {
  var i = n & yf, a = e.length, l = t.length;
  if (a != l && !(i && l > a))
    return !1;
  var d = s.get(e), f = s.get(t);
  if (d && f)
    return d == t && f == e;
  var c = -1, m = !0, h = n & bf ? new wt() : void 0;
  for (s.set(e, t), s.set(t, e); ++c < a; ) {
    var y = e[c], v = t[c];
    if (r)
      var g = i ? r(v, y, c, t, e, s) : r(y, v, c, e, t, s);
    if (g !== void 0) {
      if (g)
        continue;
      m = !1;
      break;
    }
    if (h) {
      if (!mf(t, function(p, b) {
        if (!gf(h, b) && (y === p || o(y, p, n, r, s)))
          return h.push(b);
      })) {
        m = !1;
        break;
      }
    } else if (!(y === v || o(y, v, n, r, s))) {
      m = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), m;
}
function wf(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function Ef(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var _f = 1, Of = 2, vf = "[object Boolean]", Sf = "[object Date]", Tf = "[object Error]", Af = "[object Map]", Rf = "[object Number]", Pf = "[object RegExp]", xf = "[object Set]", Cf = "[object String]", $f = "[object Symbol]", jf = "[object ArrayBuffer]", Ff = "[object DataView]", Sr = X ? X.prototype : void 0, Mt = Sr ? Sr.valueOf : void 0;
function Nf(e, t, n, r, o, s, i) {
  switch (n) {
    case Ff:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case jf:
      return !(e.byteLength != t.byteLength || !s(new bt(e), new bt(t)));
    case vf:
    case Sf:
    case Rf:
      return tt(+e, +t);
    case Tf:
      return e.name == t.name && e.message == t.message;
    case Pf:
    case Cf:
      return e == t + "";
    case Af:
      var a = wf;
    case xf:
      var l = r & _f;
      if (a || (a = Ef), e.size != t.size && !l)
        return !1;
      var d = i.get(e);
      if (d)
        return d == t;
      r |= Of, i.set(e, t);
      var f = Mo(a(e), a(t), r, o, s, i);
      return i.delete(e), f;
    case $f:
      if (Mt)
        return Mt.call(e) == Mt.call(t);
  }
  return !1;
}
var Df = 1, Lf = Object.prototype, Uf = Lf.hasOwnProperty;
function If(e, t, n, r, o, s) {
  var i = n & Df, a = Xt(e), l = a.length, d = Xt(t), f = d.length;
  if (l != f && !i)
    return !1;
  for (var c = l; c--; ) {
    var m = a[c];
    if (!(i ? m in t : Uf.call(t, m)))
      return !1;
  }
  var h = s.get(e), y = s.get(t);
  if (h && y)
    return h == t && y == e;
  var v = !0;
  s.set(e, t), s.set(t, e);
  for (var g = i; ++c < l; ) {
    m = a[c];
    var p = e[m], b = t[m];
    if (r)
      var _ = i ? r(b, p, m, t, e, s) : r(p, b, m, e, t, s);
    if (!(_ === void 0 ? p === b || o(p, b, n, r, s) : _)) {
      v = !1;
      break;
    }
    g || (g = m == "constructor");
  }
  if (v && !g) {
    var E = e.constructor, A = t.constructor;
    E != A && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof A == "function" && A instanceof A) && (v = !1);
  }
  return s.delete(e), s.delete(t), v;
}
var Bf = 1, Tr = "[object Arguments]", Ar = "[object Array]", st = "[object Object]", Mf = Object.prototype, Rr = Mf.hasOwnProperty;
function Hf(e, t, n, r, o, s) {
  var i = Q(e), a = Q(t), l = i ? Ar : Y(e), d = a ? Ar : Y(t);
  l = l == Tr ? st : l, d = d == Tr ? st : d;
  var f = l == st, c = d == st, m = l == d;
  if (m && Ge(e)) {
    if (!Ge(t))
      return !1;
    i = !0, f = !1;
  }
  if (m && !f)
    return s || (s = new re()), i || bn(e) ? Mo(e, t, n, r, o, s) : Nf(e, t, l, n, r, o, s);
  if (!(n & Bf)) {
    var h = f && Rr.call(e, "__wrapped__"), y = c && Rr.call(t, "__wrapped__");
    if (h || y) {
      var v = h ? e.value() : e, g = y ? t.value() : t;
      return s || (s = new re()), o(v, g, n, r, s);
    }
  }
  return m ? (s || (s = new re()), If(e, t, n, r, o, s)) : !1;
}
function Ho(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !oe(e) && !oe(t) ? e !== e && t !== t : Hf(e, t, n, r, Ho, o);
}
function qf(e) {
  return function(t, n, r) {
    for (var o = -1, s = Object(t), i = r(t), a = i.length; a--; ) {
      var l = i[++o];
      if (n(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var zf = qf(), Ht = function() {
  return te.Date.now();
}, Vf = "Expected a function", kf = Math.max, Gf = Math.min;
function Wf(e, t, n) {
  var r, o, s, i, a, l, d = 0, f = !1, c = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Vf);
  t = nr(t) || 0, G(n) && (f = !0, c = "maxWait" in n, s = c ? kf(nr(n.maxWait) || 0, t) : s, m = "trailing" in n ? !0 : m);
  function h(T) {
    var j = r, Z = o;
    return r = o = void 0, d = T, i = e.apply(Z, j), i;
  }
  function y(T) {
    return d = T, a = setTimeout(p, t), f ? h(T) : i;
  }
  function v(T) {
    var j = T - l, Z = T - d, W = t - j;
    return c ? Gf(W, s - Z) : W;
  }
  function g(T) {
    var j = T - l, Z = T - d;
    return l === void 0 || j >= t || j < 0 || c && Z >= s;
  }
  function p() {
    var T = Ht();
    if (g(T))
      return b(T);
    a = setTimeout(p, v(T));
  }
  function b(T) {
    return a = void 0, m && r ? h(T) : (r = o = void 0, i);
  }
  function _() {
    a !== void 0 && clearTimeout(a), d = 0, r = l = o = a = void 0;
  }
  function E() {
    return a === void 0 ? i : b(Ht());
  }
  function A() {
    var T = Ht(), j = g(T);
    if (r = arguments, o = this, l = T, j) {
      if (a === void 0)
        return y(l);
      if (c)
        return clearTimeout(a), a = setTimeout(p, t), h(l);
    }
    return a === void 0 && (a = setTimeout(p, t)), i;
  }
  return A.cancel = _, A.flush = E, A;
}
function en(e, t, n) {
  (n !== void 0 && !tt(e[t], n) || n === void 0 && !(t in e)) && hn(e, t, n);
}
function Kf(e) {
  return oe(e) && Rt(e);
}
function tn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Jf(e) {
  return De(e, nt(e));
}
function Xf(e, t, n, r, o, s, i) {
  var a = tn(e, n), l = tn(t, n), d = i.get(l);
  if (d) {
    en(e, n, d);
    return;
  }
  var f = s ? s(a, l, n + "", e, t, i) : void 0, c = f === void 0;
  if (c) {
    var m = Q(l), h = !m && Ge(l), y = !m && !h && bn(l);
    f = l, m || h || y ? Q(a) ? f = a : Kf(a) ? f = yo(a) : h ? (c = !1, f = Co(l, !0)) : y ? (c = !1, f = Do(l, !0)) : f = [] : Po(l) || mt(l) ? (f = a, mt(a) ? f = Jf(a) : (!G(a) || dn(a)) && (f = Lo(l))) : c = !1;
  }
  c && (i.set(l, f), o(f, l, r, s, i), i.delete(l)), en(e, n, f);
}
function qo(e, t, n, r, o) {
  e !== t && zf(t, function(s, i) {
    if (o || (o = new re()), G(s))
      Xf(e, t, i, n, qo, r, o);
    else {
      var a = r ? r(tn(e, i), s, i + "", e, t, o) : void 0;
      a === void 0 && (a = s), en(e, i, a);
    }
  }, nt);
}
function Zf(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Yf(e, t) {
  return t.length < 2 ? e : Ao(e, Lu(t, 0, -1));
}
function Qf(e, t) {
  return Ho(e, t);
}
var nn = nl(function(e, t, n) {
  qo(e, t, n);
}), ed = Object.prototype, td = ed.hasOwnProperty;
function nd(e, t) {
  t = Ct(t, e);
  var n = -1, r = t.length;
  if (!r)
    return !0;
  for (; ++n < r; ) {
    var o = gt(t[n]);
    if (o === "__proto__" && !td.call(e, "__proto__") || (o === "constructor" || o === "prototype") && n < r - 1)
      return !1;
  }
  var s = Yf(e, t);
  return s == null || delete s[gt(Zf(t))];
}
function rd(e) {
  return Po(e) ? void 0 : e;
}
var od = 1, sd = 2, id = 4, Pr = Cu(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = ho(t, function(s) {
    return s = Ct(s, e), r || (r = s.length > 1), s;
  }), De(e, No(e), n), r && (n = Ve(n, od | sd | id, rd));
  for (var o = t.length; o--; )
    nd(n, t[o]);
  return n;
});
function ad(e, t, n, r) {
  if (!G(e))
    return e;
  t = Ct(t, e);
  for (var o = -1, s = t.length, i = s - 1, a = e; a != null && ++o < s; ) {
    var l = gt(t[o]), d = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != i) {
      var f = a[l];
      d = void 0, d === void 0 && (d = G(f) ? f : pn(t[o + 1]) ? [] : {});
    }
    mn(a, l, d), a = a[l];
  }
  return e;
}
function zo(e, t, n) {
  return e == null ? e : ad(e, t, n);
}
N.create();
const ld = (e) => typeof e == "string" ? e : e(), ud = (e) => typeof e == "string" ? e.toLowerCase() : e(), cd = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {});
let Je = N.create(), Vo = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, ko = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const Et = {}, ae = {
  get: (e, t = {}, n = {}) => He(Me("get", e, t, n)),
  post: (e, t = {}, n = {}) => He(Me("post", e, t, n)),
  patch: (e, t = {}, n = {}) => He(Me("patch", e, t, n)),
  put: (e, t = {}, n = {}) => He(Me("put", e, t, n)),
  delete: (e, t = {}, n = {}) => He(Me("delete", e, t, n)),
  use(e) {
    return Je = e, ae;
  },
  axios() {
    return Je;
  },
  fingerprintRequestsUsing(e) {
    return Vo = e === null ? () => null : e, ae;
  },
  determineSuccessUsing(e) {
    return ko = e, ae;
  }
}, Me = (e, t, n, r) => ({
  url: t,
  method: e,
  ...r,
  ...["get", "delete"].includes(e) ? {
    params: nn({}, n, r?.params)
  } : {
    data: nn({}, n, r?.data)
  }
}), He = (e = {}) => {
  const t = [
    fd,
    pd,
    hd
  ].reduce((n, r) => r(n), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), Je.request(t).then(async (n) => {
    t.precognitive && xr(n);
    const r = n.status;
    let o = n;
    return t.precognitive && t.onPrecognitionSuccess && ko(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && dd(r) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (Cr(t, r) ?? ((i) => i))(o) ?? o;
  }, (n) => md(n) ? Promise.reject(n) : (t.precognitive && xr(n.response), (Cr(t, n.response.status) ?? ((o, s) => Promise.reject(s)))(n.response, n))).finally(t.onFinish ?? (() => null)));
}, fd = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? Je.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? Vo(e, Je) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": gd(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, dd = (e) => e >= 200 && e < 300, pd = (e) => (typeof e.fingerprint != "string" || (Et[e.fingerprint]?.abort(), delete Et[e.fingerprint]), e), hd = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (Et[e.fingerprint] = new AbortController(), {
  ...e,
  signal: Et[e.fingerprint].signal
}), xr = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, md = (e) => !co(e) || typeof e.response?.status != "number" || uo(e), Cr = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], gd = (e) => e.headers?.["Content-Type"] ?? e.headers?.["Content-type"] ?? e.headers?.["content-type"] ?? (Go(e.data) ? "multipart/form-data" : "application/json"), Go = (e) => Tn(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => Go(t)), Tn = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, $r = (e) => typeof e == "string" ? e : e(), jr = (e) => typeof e == "string" ? e.toLowerCase() : e(), yd = (e, t = {}) => {
  const n = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let r = !1, o = !1;
  const s = (O) => O !== o ? (o = O, n.validatingChanged) : [];
  let i = [];
  const a = (O) => {
    const S = [...new Set(O)];
    return i.length !== S.length || !S.every((R) => i.includes(R)) ? (i = S, n.validatedChanged) : [];
  }, l = () => i.filter((O) => typeof c[O] > "u");
  let d = [];
  const f = (O) => {
    const S = [...new Set(O)];
    return d.length !== S.length || !S.every((R) => d.includes(R)) ? (d = S, n.touchedChanged) : [];
  };
  let c = {};
  const m = (O) => {
    const S = wd(O);
    return Qf(c, S) ? [] : (c = S, n.errorsChanged);
  }, h = (O) => {
    const S = { ...c };
    return delete S[ut(O)], m(S);
  }, y = () => Object.keys(c).length > 0;
  let v = 1500;
  const g = (O) => {
    v = O, T.cancel(), T = A();
  };
  let p = t, b = null, _ = [], E = null;
  const A = () => Wf((O) => {
    e({
      get: (S, R = {}, x = {}) => ae.get(S, W(R), j(x, O, R)),
      post: (S, R = {}, x = {}) => ae.post(S, W(R), j(x, O, R)),
      patch: (S, R = {}, x = {}) => ae.patch(S, W(R), j(x, O, R)),
      put: (S, R = {}, x = {}) => ae.put(S, W(R), j(x, O, R)),
      delete: (S, R = {}, x = {}) => ae.delete(S, W(R), j(x, O, R))
    }).catch((S) => uo(S) || co(S) && S.response?.status === 422 ? null : Promise.reject(S));
  }, v, { leading: !0, trailing: !0 });
  let T = A();
  const j = (O, S, R = {}) => {
    const x = {
      ...O,
      ...S
    }, V = Array.from(x.only ?? x.validate ?? d);
    return {
      ...S,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...sa(O, S),
      only: V,
      timeout: x.timeout ?? 5e3,
      onValidationError: (L, ne) => ([
        ...a([...i, ...V]),
        ...m(nn(Pr({ ...c }, V), L.data.errors))
      ].forEach(($t) => $t()), x.onValidationError ? x.onValidationError(L, ne) : Promise.reject(ne)),
      onSuccess: (L) => (a([...i, ...V]).forEach((ne) => ne()), x.onSuccess ? x.onSuccess(L) : L),
      onPrecognitionSuccess: (L) => ([
        ...a([...i, ...V]),
        ...m(Pr({ ...c }, V))
      ].forEach((ne) => ne()), x.onPrecognitionSuccess ? x.onPrecognitionSuccess(L) : L),
      onBefore: () => x.onBeforeValidation && x.onBeforeValidation({ data: R, touched: d }, { data: p, touched: _ }) === !1 || (x.onBefore || (() => !0))() === !1 ? !1 : (E = d, b = R, !0),
      onStart: () => {
        s(!0).forEach((L) => L()), (x.onStart ?? (() => null))();
      },
      onFinish: () => {
        s(!1).forEach((L) => L()), _ = E, p = b, E = b = null, (x.onFinish ?? (() => null))();
      }
    };
  }, Z = (O, S, R) => {
    if (typeof O > "u") {
      const x = Array.from(R?.only ?? R?.validate ?? []);
      f([...d, ...x]).forEach((V) => V()), T(R ?? {});
      return;
    }
    if (Tn(S) && !r) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    O = ut(O), yt(p, O) !== S && (f([O, ...d]).forEach((x) => x()), T(R ?? {}));
  }, W = (O) => r === !1 ? rn(O) : O, U = {
    touched: () => d,
    validate(O, S, R) {
      return typeof O == "object" && !("target" in O) && (R = O, O = S = void 0), Z(O, S, R), U;
    },
    touch(O) {
      const S = Array.isArray(O) ? O : [ut(O)];
      return f([...d, ...S]).forEach((R) => R()), U;
    },
    validating: () => o,
    valid: l,
    errors: () => c,
    hasErrors: y,
    setErrors(O) {
      return m(O).forEach((S) => S()), U;
    },
    forgetError(O) {
      return h(O).forEach((S) => S()), U;
    },
    reset(...O) {
      if (O.length === 0)
        f([]).forEach((S) => S());
      else {
        const S = [...d];
        O.forEach((R) => {
          S.includes(R) && S.splice(S.indexOf(R), 1), zo(p, R, yt(t, R));
        }), f(S).forEach((R) => R());
      }
      return U;
    },
    setTimeout(O) {
      return g(O), U;
    },
    on(O, S) {
      return n[O].push(S), U;
    },
    validateFiles() {
      return r = !0, U;
    }
  };
  return U;
}, bd = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), wd = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: typeof e[n] == "string" ? [e[n]] : e[n]
}), {}), ut = (e) => typeof e != "string" ? e.target.name : e, rn = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((n) => {
    const r = t[n];
    if (r !== null) {
      if (Tn(r)) {
        delete t[n];
        return;
      }
      if (Array.isArray(r)) {
        t[n] = Object.values(rn({ ...r }));
        return;
      }
      if (typeof r == "object") {
        t[n] = rn(t[n]);
        return;
      }
    }
  }), t;
}, Ed = (e, t, n, r = {}) => {
  const o = Pe(typeof n == "function" ? n() : n), s = Object.keys(o), i = Nn([]), a = Nn([]), l = yd((c) => c[jr(e)]($r(t), f.data(), r), o).on("validatingChanged", () => {
    f.validating = l.validating();
  }).on("validatedChanged", () => {
    i.value = l.valid();
  }).on("touchedChanged", () => {
    a.value = l.touched();
  }).on("errorsChanged", () => {
    f.hasErrors = l.hasErrors(), f.errors = bd(l.errors()), i.value = l.valid();
  }), d = (c) => ({
    ...c,
    precognitive: !1,
    onStart: () => {
      f.processing = !0, (c.onStart ?? (() => null))();
    },
    onFinish: () => {
      f.processing = !1, (c.onFinish ?? (() => null))();
    },
    onValidationError: (m, h) => (l.setErrors(m.data.errors), c.onValidationError ? c.onValidationError(m) : Promise.reject(h))
  });
  let f = {
    ...Pe(o),
    data() {
      const c = Pe(Zo(f));
      return s.reduce((m, h) => ({
        ...m,
        [h]: c[h]
      }), {});
    },
    setData(c) {
      return Object.keys(c).forEach((m) => {
        f[m] = c[m];
      }), f;
    },
    touched(c) {
      return typeof c == "string" ? a.value.includes(c) : a.value.length > 0;
    },
    touch(c) {
      return l.touch(c), f;
    },
    validate(c, m) {
      return typeof c == "object" && !("target" in c) && (m = c, c = void 0), typeof c > "u" ? l.validate(m) : (c = ut(c), l.validate(c, yt(f.data(), c), m)), f;
    },
    validating: !1,
    valid(c) {
      return i.value.includes(c);
    },
    invalid(c) {
      return typeof f.errors[c] < "u";
    },
    errors: {},
    hasErrors: !1,
    setErrors(c) {
      return l.setErrors(c), f;
    },
    forgetError(c) {
      return l.forgetError(c), f;
    },
    reset(...c) {
      const m = Pe(typeof n == "function" ? n() : o);
      return c.length === 0 ? s.forEach((h) => f[h] = m[h]) : c.forEach((h) => zo(f, h, yt(m, h))), l.reset(...c), f;
    },
    setValidationTimeout(c) {
      return l.setTimeout(c), f;
    },
    processing: !1,
    async submit(c = {}) {
      return ae[jr(e)]($r(t), f.data(), d(c));
    },
    validateFiles() {
      return l.validateFiles(), f;
    },
    validator() {
      return l;
    }
  };
  return f = Xo(f), f;
}, _d = (e, t, n, r = {}) => {
  const o = Fr(n), s = Ed(e, t, n, r);
  s.validator().on("errorsChanged", () => {
    l(), d(
      // @ts-expect-error
      cd(s.validator().errors())
    );
  });
  const i = o.submit.bind(o), a = o.reset.bind(o), l = o.clearErrors.bind(o), d = o.setError.bind(o), f = o.transform.bind(o);
  let c = (h) => h;
  const m = Object.assign(o, {
    validating: s.validating,
    touched: s.touched,
    touch(h) {
      return s.touch(h), m;
    },
    valid: s.valid,
    invalid: s.invalid,
    setData(h) {
      return Object.keys(h).forEach((y) => {
        m[y] = h[y];
      }), m;
    },
    clearErrors(...h) {
      return l(...h), h.length === 0 ? s.setErrors({}) : h.forEach(s.forgetError), m;
    },
    reset(...h) {
      a(...h), s.reset(...h);
    },
    setErrors(h) {
      return s.setErrors(h), m;
    },
    forgetError(h) {
      return s.forgetError(h), m;
    },
    setError(h, y) {
      let v;
      if (typeof h != "object") {
        if (typeof y > "u")
          throw new Error("The `value` is required.");
        v = { [h]: y };
      } else
        v = h;
      return m.setErrors({
        ...o.errors,
        ...v
      }), m;
    },
    transform(h) {
      return f(h), c = h, m;
    },
    validate(h, y) {
      return s.setData(c(o.data())), typeof h == "object" && !("target" in h) && (y = h, h = void 0), typeof y == "object" && (y.onValidationError = y.onValidationError ?? y?.onError), typeof h > "u" ? s.validate(y) : s.validate(h, y), m;
    },
    setValidationTimeout(h) {
      return s.setValidationTimeout(h), m;
    },
    validateFiles() {
      return s.validateFiles(), m;
    },
    submit(h = {}, y, v) {
      typeof h != "string" && (v = h, y = ld(t), h = ud(e)), i(h, y, {
        ...v,
        onError: (g) => {
          if (s.validator().setErrors(g), v?.onError)
            return v.onError(g);
        }
      });
    },
    validator: s.validator
  });
  return Yo(() => m.validating = s.validating), m;
}, Od = { class: "space-y-2" }, vd = /* @__PURE__ */ Xe({
  __name: "CheckboxGroup",
  props: {
    form: {},
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = (i) => n.modelValue.includes(i), s = (i, a) => {
      const l = a ? [...n.modelValue, i] : n.modelValue.filter((d) => d !== i);
      r("update:modelValue", l);
    };
    return (i, a) => (D(), J("div", Od, [
      (D(!0), J(_t, null, Ot(e.items, (l, d) => (D(), J("div", {
        key: d,
        class: "flex items-center gap-2"
      }, [
        ct(de(rs), {
          id: `${n.form._prefix}-${l.label ?? l}`,
          "model-value": o(l.value ?? l),
          "onUpdate:modelValue": (f) => s(l.value ?? l, f === !0)
        }, null, 8, ["id", "model-value", "onUpdate:modelValue"]),
        ct(de(Lr), {
          for: `${n.form._prefix}-${l.label ?? l}`,
          class: "cursor-pointer"
        }, {
          default: xe(() => [
            qe(he(l.label ?? l), 1)
          ]),
          _: 2
        }, 1032, ["for"])
      ]))), 128))
    ]));
  }
}), Wo = (e, t = {}) => {
  for (const n of Object.keys(e)) {
    const r = e[n];
    r.schema ? Wo(r.schema, t) : t[n] = r.value ?? null;
  }
  return t;
}, Sd = (e) => {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let n = "";
  for (let r = 0; r < e; r++)
    n += t.charAt(Math.floor(Math.random() * t.length));
  return n;
}, qt = (e) => {
  const t = {};
  for (const n of Object.keys(e)) {
    const r = e[n];
    if (r.schema) {
      Wo(r.schema, t);
      continue;
    }
    if (r.component === vd) {
      t[n] = r.checked ?? [];
      continue;
    }
    const o = r?.fieldset;
    if (o) {
      for (const [s, i] of Object.entries(o))
        i && typeof i == "object" && i.model ? t[i.model] = i.value ?? null : t[s] = i && typeof i == "object" ? i.value ?? null : i;
      continue;
    }
    t[n] = r.value ?? null;
  }
  return t;
}, An = (e) => Object.entries(e).map(([t, n]) => {
  const r = n.hasOwnProperty("setup") ? { component: n } : n;
  return {
    name: t,
    definition: r
  };
}), zt = (e) => typeof e == "function" ? e() : Nr(e) ? e.value : e;
function Yd(e = {}, t, n) {
  const r = typeof e == "string", o = r ? n ?? {} : e, s = r ? e : void 0, i = r ? t : void 0, a = zt(o), l = r ? _d(s, i, qt(a)) : Fr(qt(a));
  l._prefix = Sd(6);
  const d = B(() => An(zt(o)));
  return (typeof o == "function" || Nr(o)) && Qo(
    d,
    (c) => {
      const m = qt(zt(o));
      for (const y of Object.keys(m))
        y in l || (l[y] = m[y]);
      const h = l.data();
      for (const y of Object.keys(h))
        y !== "_prefix" && !(y in m) && delete l[y];
    },
    { deep: !0 }
  ), {
    elements: d,
    form: l
  };
}
const Td = { key: 0 }, Ad = ["id"], Rn = /* @__PURE__ */ Xe({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set([
      "component",
      "value",
      "label",
      "description",
      "schema",
      "fieldset",
      "visible",
      "alert",
      "props",
      "events",
      "checked",
      "items"
    ]), o = B(() => {
      const g = t.element.definition?.fieldset;
      if (!g) return null;
      const p = [];
      for (const [b, _] of Object.entries(g)) {
        const E = _ && typeof _ == "object" && _.model ? _.model : b;
        p.push({ key: b, formKey: E });
      }
      return p;
    }), s = B(() => {
      const g = o.value;
      if (g) {
        const p = {};
        for (const { key: b, formKey: _ } of g)
          p[_] = t.form[_];
        return p;
      }
      return { modelValue: t.form[t.element.name] };
    }), i = B(() => {
      const g = t.element.definition, p = g.component?.props, b = {}, _ = (E, A) => {
        p?.hasOwnProperty(E) && (b[E] = A);
      };
      if (b.id = `${t.form._prefix}-${t.element.name}`, _("form", t.form), _("schema", g.schema), _("error", l.value[0] ?? null), g.props)
        for (const [E, A] of Object.entries(g.props))
          b[E] = A;
      for (const E of Object.keys(g))
        if (E !== "component" && E !== "props" && E !== "visible" && E !== "alert" && E !== "fieldset" && E !== "schema" && E !== "events" && E !== "description") {
          const A = g[E];
          if (E === "label" && (A === !1 || A === null || A === "")) continue;
          process.env.NODE_ENV !== "production" && !r.has(E) && !p?.hasOwnProperty(E) && !n.has(E) && (n.add(E), console.warn(
            `[inertia-form-builder] "${E}" on element "${t.element.name}" was dropped — the component doesn't declare it as a prop. Put native HTML attributes under \`props: { ${E}: '...' }\` so they fall through to the element.`
          )), _(E, A);
        }
      for (const [E, A] of Object.entries(s.value))
        b[E] = A;
      return b;
    }), a = B(() => {
      const g = o.value, p = t.element.definition.events, b = (_, E = "modelValue") => {
        const A = {
          [`update:${E}`]: (T) => {
            t.form[_] = T, p?.update && p.update(t.form, _);
          }
        };
        if (p)
          for (const [T, j] of Object.entries(p))
            T !== "update" && (A[T] = () => j(t.form, _));
        return A;
      };
      if (g) {
        const _ = {};
        for (const { formKey: E } of g)
          Object.assign(_, b(E, E));
        return _;
      }
      return b(t.element.name);
    }), l = B(() => {
      const g = o.value;
      return g ? g.map(({ formKey: p }) => t.form.errors[p]).filter((p) => p) : [t.form.errors[t.element.name]];
    }), d = B(() => l.value.filter(Boolean).map((g) => ({ message: g }))), f = B(() => (t.element.definition.label || t.element.name).replaceAll("_id", "").replaceAll("_", " ")), c = B(() => !!t.element.definition.schema), m = B(() => c.value ? null : t.element.definition.description || null), h = B(() => {
      const g = t.element.definition.label;
      return g === !1 || g === null || g === "" || t.element.definition.props?.type === "hidden" ? !1 : !c.value;
    }), y = B(() => {
      if (t.element.definition.alert !== void 0) {
        const g = t.element.definition.alert;
        return {
          ...g,
          visible: typeof g.visible == "function" ? g.visible : () => !0
        };
      }
      return null;
    }), v = B(() => {
      const g = t.element.definition.visible;
      return typeof g == "function" ? g(t.form) : !0;
    });
    return (g, p) => v.value ? (D(), J("div", Td, [
      h.value ? (D(), pe(de(Lr), {
        key: 0,
        for: i.value.id,
        class: "mb-1 block capitalize"
      }, {
        default: xe(() => [
          qe(he(f.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : ye("", !0),
      (D(), pe(es(e.element.definition.component), Dr({
        key: e.element.name
      }, i.value, ts(a.value)), null, 16)),
      m.value ? (D(), J("p", {
        key: 1,
        id: `${i.value.id}-description`,
        class: "mt-1.5 whitespace-pre-line text-sm leading-6 text-muted-foreground"
      }, he(m.value), 9, Ad)) : ye("", !0),
      y.value && y.value.visible() ? (D(), pe(de(os), {
        key: 2,
        variant: "default",
        class: "mt-2 border-warning/50 text-warning dark:border-warning [&>svg]:text-warning"
      }, {
        default: xe(() => [
          ct(de(ss), { class: "flex items-center justify-between" }, {
            default: xe(() => [
              qe(he(y.value.text) + " ", 1),
              y.value.actionHref && y.value.actionText ? (D(), pe(de(Ur), {
                key: 0,
                as: "a",
                href: y.value.actionHref,
                target: y.value.externalAction ? "_blank" : void 0,
                variant: "outline",
                size: "sm"
              }, {
                default: xe(() => [
                  qe(he(y.value.actionText), 1)
                ]),
                _: 1
              }, 8, ["href", "target"])) : ye("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : ye("", !0),
      !i.value.hasOwnProperty("error") && d.value.length > 0 ? (D(), pe(de(is), {
        key: 3,
        errors: d.value
      }, null, 8, ["errors"])) : ye("", !0)
    ])) : ye("", !0);
  }
}), Rd = { class: "mx-auto mt-6 max-w-md space-y-6" }, Pd = { class: "flex justify-end gap-2" }, Qd = /* @__PURE__ */ Xe({
  __name: "FormBuilder",
  props: {
    schema: {},
    submit: { default: "Save" }
  },
  setup(e) {
    const t = e, n = B(() => {
      const r = t.schema.elements;
      return "value" in r ? r.value : r;
    });
    return (r, o) => (D(), J("div", Rd, [
      Ft(r.$slots, "default", {}, () => [
        (D(!0), J(_t, null, Ot(n.value, (s) => (D(), pe(Rn, {
          key: s.name,
          element: s,
          form: e.schema.form
        }, null, 8, ["element", "form"]))), 128))
      ]),
      Ft(r.$slots, "actions-wrapper", {
        form: e.schema.form
      }, () => [
        Vt("div", Pd, [
          Ft(r.$slots, "actions", {
            form: e.schema.form
          }, () => [
            ct(de(Ur), {
              type: "submit",
              loading: e.schema.form.processing
            }, {
              default: xe(() => [
                qe(he(e.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ])
    ]));
  }
}), ep = /* @__PURE__ */ Xe({
  __name: "Grid",
  props: {
    schema: {},
    form: {}
  },
  setup(e) {
    const t = e, n = B(() => An(t.schema)), r = B(() => {
      const o = n.value.length;
      return {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
        5: "md:grid-cols-5",
        6: "md:grid-cols-6"
      }[o] ?? `md:grid-cols-${o}`;
    });
    return (o, s) => (D(), J("div", {
      class: ns(["grid gap-x-4 gap-y-6 md:grid-flow-col", r.value])
    }, [
      (D(!0), J(_t, null, Ot(n.value, (i) => (D(), pe(Rn, Dr({
        key: i.name,
        element: i,
        form: e.form
      }, { ref_for: !0 }, o.$attrs), null, 16, ["element", "form"]))), 128))
    ], 2));
  }
}), xd = { class: "mt-10" }, Cd = {
  key: 0,
  class: "mt-1 whitespace-pre-line text-sm leading-6 text-gray-500"
}, $d = { class: "mt-4 space-y-6" }, tp = /* @__PURE__ */ Xe({
  __name: "Section",
  props: {
    schema: {},
    form: {},
    heading: {},
    description: {}
  },
  setup(e) {
    const t = e, n = B(() => An(t.schema));
    return (r, o) => (D(), J("div", xd, [
      Vt("label", null, he(e.heading), 1),
      e.description ? (D(), J("p", Cd, he(e.description), 1)) : ye("", !0),
      Vt("div", $d, [
        (D(!0), J(_t, null, Ot(n.value, (s) => (D(), pe(Rn, {
          key: s.name,
          element: s,
          form: e.form
        }, null, 8, ["element", "form"]))), 128))
      ])
    ]));
  }
});
export {
  vd as CheckboxGroup,
  Qd as FormBuilder,
  ep as Grid,
  tp as Section,
  Yd as useSchema
};
