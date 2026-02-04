import { useForm as un } from "@inertiajs/vue3";
import { ref as At, reactive as So, toRaw as _o, watchEffect as cn, defineComponent as Le, createElementBlock as k, openBlock as N, Fragment as nt, renderList as ot, createVNode as We, unref as se, withCtx as be, createTextVNode as $e, toDisplayString as ue, computed as D, isRef as ln, watch as Ao, inject as Ro, createCommentVNode as ye, createBlock as ie, resolveDynamicComponent as $o, mergeProps as fn, toHandlers as xo, provide as Po, renderSlot as gt, createElementVNode as Rt, normalizeClass as Co } from "vue";
import { Checkbox as jo, Label as dn, Alert as Fo, AlertDescription as No, Button as pn, FieldError as Lo } from "@codinglabsau/gooey";
function hn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Do } = Object.prototype, { getPrototypeOf: Ht } = Object, { iterator: st, toStringTag: mn } = Symbol, it = /* @__PURE__ */ ((e) => (t) => {
  const r = Do.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), J = (e) => (e = e.toLowerCase(), (t) => it(t) === e), at = (e) => (t) => typeof t === e, { isArray: Ee } = Array, ve = at("undefined");
function De(e) {
  return e !== null && !ve(e) && e.constructor !== null && !ve(e.constructor) && U(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const gn = J("ArrayBuffer");
function Uo(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && gn(e.buffer), t;
}
const Bo = at("string"), U = at("function"), yn = at("number"), Ue = (e) => e !== null && typeof e == "object", Io = (e) => e === !0 || e === !1, Ge = (e) => {
  if (it(e) !== "object")
    return !1;
  const t = Ht(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(mn in e) && !(st in e);
}, Mo = (e) => {
  if (!Ue(e) || De(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Ho = J("Date"), qo = J("File"), Vo = J("Blob"), zo = J("FileList"), Go = (e) => Ue(e) && U(e.pipe), ko = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || U(e.append) && ((t = it(e)) === "formdata" || // detect form-data instance
  t === "object" && U(e.toString) && e.toString() === "[object FormData]"));
}, Ko = J("URLSearchParams"), [Jo, Wo, Xo, Zo] = ["ReadableStream", "Request", "Response", "Headers"].map(J), Yo = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Be(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Ee(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    if (De(e))
      return;
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (n = 0; n < i; n++)
      a = s[n], t.call(null, e[a], a, e);
  }
}
function bn(e, t) {
  if (De(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const ae = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, vn = (e) => !ve(e) && e !== ae;
function $t() {
  const { caseless: e, skipUndefined: t } = vn(this) && this || {}, r = {}, n = (o, s) => {
    const i = e && bn(r, s) || s;
    Ge(r[i]) && Ge(o) ? r[i] = $t(r[i], o) : Ge(o) ? r[i] = $t({}, o) : Ee(o) ? r[i] = o.slice() : (!t || !ve(o)) && (r[i] = o);
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && Be(arguments[o], n);
  return r;
}
const Qo = (e, t, r, { allOwnKeys: n } = {}) => (Be(t, (o, s) => {
  r && U(o) ? e[s] = hn(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), es = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ts = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, rs = (e, t, r, n) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!n || n(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = r !== !1 && Ht(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, ns = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, os = (e) => {
  if (!e) return null;
  if (Ee(e)) return e;
  let t = e.length;
  if (!yn(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, ss = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ht(Uint8Array)), is = (e, t) => {
  const n = (e && e[st]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, as = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, us = J("HTMLFormElement"), cs = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), lr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), ls = J("RegExp"), wn = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Be(r, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (n[s] = i || o);
  }), Object.defineProperties(e, n);
}, fs = (e) => {
  wn(e, (t, r) => {
    if (U(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (U(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, ds = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return Ee(e) ? n(e) : n(String(e).split(t)), r;
}, ps = () => {
}, hs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function ms(e) {
  return !!(e && U(e.append) && e[mn] === "FormData" && e[st]);
}
const gs = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (Ue(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (De(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = Ee(n) ? [] : {};
        return Be(n, (i, a) => {
          const u = r(i, o + 1);
          !ve(u) && (s[a] = u);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, ys = J("AsyncFunction"), bs = (e) => e && (Ue(e) || U(e)) && U(e.then) && U(e.catch), En = ((e, t) => e ? setImmediate : t ? ((r, n) => (ae.addEventListener("message", ({ source: o, data: s }) => {
  o === ae && s === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), ae.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  U(ae.postMessage)
), vs = typeof queueMicrotask < "u" ? queueMicrotask.bind(ae) : typeof process < "u" && process.nextTick || En, ws = (e) => e != null && U(e[st]), d = {
  isArray: Ee,
  isArrayBuffer: gn,
  isBuffer: De,
  isFormData: ko,
  isArrayBufferView: Uo,
  isString: Bo,
  isNumber: yn,
  isBoolean: Io,
  isObject: Ue,
  isPlainObject: Ge,
  isEmptyObject: Mo,
  isReadableStream: Jo,
  isRequest: Wo,
  isResponse: Xo,
  isHeaders: Zo,
  isUndefined: ve,
  isDate: Ho,
  isFile: qo,
  isBlob: Vo,
  isRegExp: ls,
  isFunction: U,
  isStream: Go,
  isURLSearchParams: Ko,
  isTypedArray: ss,
  isFileList: zo,
  forEach: Be,
  merge: $t,
  extend: Qo,
  trim: Yo,
  stripBOM: es,
  inherits: ts,
  toFlatObject: rs,
  kindOf: it,
  kindOfTest: J,
  endsWith: ns,
  toArray: os,
  forEachEntry: is,
  matchAll: as,
  isHTMLForm: us,
  hasOwnProperty: lr,
  hasOwnProp: lr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wn,
  freezeMethods: fs,
  toObjectSet: ds,
  toCamelCase: cs,
  noop: ps,
  toFiniteNumber: hs,
  findKey: bn,
  global: ae,
  isContextDefined: vn,
  isSpecCompliantForm: ms,
  toJSONObject: gs,
  isAsyncFn: ys,
  isThenable: bs,
  setImmediate: En,
  asap: vs,
  isIterable: ws
};
function S(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
d.inherits(S, Error, {
  toJSON: function() {
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
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Tn = S.prototype, On = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  On[e] = { value: e };
});
Object.defineProperties(S, On);
Object.defineProperty(Tn, "isAxiosError", { value: !0 });
S.from = (e, t, r, n, o, s) => {
  const i = Object.create(Tn);
  d.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (l) => l !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", u = t == null && e ? e.code : t;
  return S.call(i, a, u, r, n, o), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", s && Object.assign(i, s), i;
};
const Es = null;
function xt(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function Sn(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function fr(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Sn(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function Ts(e) {
  return d.isArray(e) && !e.some(xt);
}
const Os = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ut(e, t, r) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = d.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, m) {
    return !d.isUndefined(m[h]);
  });
  const n = r.metaTokens, o = r.visitor || c, s = r.dots, i = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(p) {
    if (p === null) return "";
    if (d.isDate(p))
      return p.toISOString();
    if (d.isBoolean(p))
      return p.toString();
    if (!u && d.isBlob(p))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(p) || d.isTypedArray(p) ? u && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function c(p, h, m) {
    let v = p;
    if (p && !m && typeof p == "object") {
      if (d.endsWith(h, "{}"))
        h = n ? h : h.slice(0, -2), p = JSON.stringify(p);
      else if (d.isArray(p) && Ts(p) || (d.isFileList(p) || d.endsWith(h, "[]")) && (v = d.toArray(p)))
        return h = Sn(h), v.forEach(function(E, _) {
          !(d.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? fr([h], _, s) : i === null ? h : h + "[]",
            l(E)
          );
        }), !1;
    }
    return xt(p) ? !0 : (t.append(fr(m, h, s), l(p)), !1);
  }
  const f = [], g = Object.assign(Os, {
    defaultVisitor: c,
    convertValue: l,
    isVisitable: xt
  });
  function y(p, h) {
    if (!d.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      f.push(p), d.forEach(p, function(v, T) {
        (!(d.isUndefined(v) || v === null) && o.call(
          t,
          v,
          d.isString(T) ? T.trim() : T,
          h,
          g
        )) === !0 && y(v, h ? h.concat(T) : [T]);
      }), f.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function dr(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function qt(e, t) {
  this._pairs = [], e && ut(e, this, t);
}
const _n = qt.prototype;
_n.append = function(t, r) {
  this._pairs.push([t, r]);
};
_n.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, dr);
  } : dr;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Ss(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function An(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Ss;
  d.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = d.isURLSearchParams(t) ? t.toString() : new qt(t, r).toString(n), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class pr {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
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
    d.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Rn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, _s = typeof URLSearchParams < "u" ? URLSearchParams : qt, As = typeof FormData < "u" ? FormData : null, Rs = typeof Blob < "u" ? Blob : null, $s = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _s,
    FormData: As,
    Blob: Rs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Vt = typeof window < "u" && typeof document < "u", Pt = typeof navigator == "object" && navigator || void 0, xs = Vt && (!Pt || ["ReactNative", "NativeScript", "NS"].indexOf(Pt.product) < 0), Ps = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cs = Vt && window.location.href || "http://localhost", js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Vt,
  hasStandardBrowserEnv: xs,
  hasStandardBrowserWebWorkerEnv: Ps,
  navigator: Pt,
  origin: Cs
}, Symbol.toStringTag, { value: "Module" })), L = {
  ...js,
  ...$s
};
function Fs(e, t) {
  return ut(e, new L.classes.URLSearchParams(), {
    visitor: function(r, n, o, s) {
      return L.isNode && d.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Ns(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ls(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function $n(e) {
  function t(r, n, o, s) {
    let i = r[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), u = s >= r.length;
    return i = !i && d.isArray(o) ? o.length : i, u ? (d.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !a) : ((!o[i] || !d.isObject(o[i])) && (o[i] = []), t(r, n, o[i], s) && d.isArray(o[i]) && (o[i] = Ls(o[i])), !a);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const r = {};
    return d.forEachEntry(e, (n, o) => {
      t(Ns(n), o, r, 0);
    }), r;
  }
  return null;
}
function Ds(e, t, r) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Ie = {
  transitional: Rn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = d.isObject(t);
    if (s && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
      return o ? JSON.stringify($n(t)) : t;
    if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t) || d.isReadableStream(t))
      return t;
    if (d.isArrayBufferView(t))
      return t.buffer;
    if (d.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Fs(t, this.formSerializer).toString();
      if ((a = d.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return ut(
          a ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), Ds(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Ie.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (d.isResponse(t) || d.isReadableStream(t))
      return t;
    if (t && d.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? S.from(a, S.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
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
    FormData: L.classes.FormData,
    Blob: L.classes.Blob
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
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ie.headers[e] = {};
});
const Us = d.toObjectSet([
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
]), Bs = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || t[r] && Us[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, hr = /* @__PURE__ */ Symbol("internals");
function Se(e) {
  return e && String(e).trim().toLowerCase();
}
function ke(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(ke) : String(e);
}
function Is(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Ms = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function yt(e, t, r, n, o) {
  if (d.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!d.isString(t)) {
    if (d.isString(n))
      return t.indexOf(n) !== -1;
    if (d.isRegExp(n))
      return n.test(t);
  }
}
function Hs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function qs(e, t) {
  const r = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, s, i) {
        return this[n].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
let B = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(a, u, l) {
      const c = Se(u);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const f = d.findKey(o, c);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || u] = ke(a));
    }
    const i = (a, u) => d.forEach(a, (l, c) => s(l, c, u));
    if (d.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (d.isString(t) && (t = t.trim()) && !Ms(t))
      i(Bs(t), r);
    else if (d.isObject(t) && d.isIterable(t)) {
      let a = {}, u, l;
      for (const c of t) {
        if (!d.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = c[0]] = (u = a[l]) ? d.isArray(u) ? [...u, c[1]] : [u, c[1]] : c[1];
      }
      i(a, r);
    } else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Se(t), t) {
      const n = d.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Is(o);
        if (d.isFunction(r))
          return r.call(this, o, n);
        if (d.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Se(t), t) {
      const n = d.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || yt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = Se(i), i) {
        const a = d.findKey(n, i);
        a && (!r || yt(n, n[a], a, r)) && (delete n[a], o = !0);
      }
    }
    return d.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || yt(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return d.forEach(this, (o, s) => {
      const i = d.findKey(n, s);
      if (i) {
        r[i] = ke(o), delete r[s];
        return;
      }
      const a = t ? Hs(s) : String(s).trim();
      a !== s && delete r[s], r[a] = ke(o), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && d.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
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
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[hr] = this[hr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = Se(i);
      n[a] || (qs(o, i), n[a] = !0);
    }
    return d.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
B.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(B.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
d.freezeMethods(B);
function bt(e, t) {
  const r = this || Ie, n = t || r, o = B.from(n.headers);
  let s = n.data;
  return d.forEach(e, function(a) {
    s = a.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function xn(e) {
  return !!(e && e.__CANCEL__);
}
function Te(e, t, r) {
  S.call(this, e ?? "canceled", S.ERR_CANCELED, t, r), this.name = "CanceledError";
}
d.inherits(Te, S, {
  __CANCEL__: !0
});
function Pn(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new S(
    "Request failed with status code " + r.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Vs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function zs(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const l = Date.now(), c = n[s];
    i || (i = l), r[o] = u, n[o] = l;
    let f = s, g = 0;
    for (; f !== o; )
      g += r[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), l - i < t)
      return;
    const y = c && l - c;
    return y ? Math.round(g * 1e3 / y) : void 0;
  };
}
function Gs(e, t) {
  let r = 0, n = 1e3 / t, o, s;
  const i = (l, c = Date.now()) => {
    r = c, o = null, s && (clearTimeout(s), s = null), e(...l);
  };
  return [(...l) => {
    const c = Date.now(), f = c - r;
    f >= n ? i(l, c) : (o = l, s || (s = setTimeout(() => {
      s = null, i(o);
    }, n - f)));
  }, () => o && i(o)];
}
const Xe = (e, t, r = 3) => {
  let n = 0;
  const o = zs(50, 250);
  return Gs((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, u = i - n, l = o(u), c = i <= a;
    n = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: u,
      rate: l || void 0,
      estimated: l && a && c ? (a - i) / l : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, r);
}, mr = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, gr = (e) => (...t) => d.asap(() => e(...t)), ks = L.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, L.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(L.origin),
  L.navigator && /(msie|trident)/i.test(L.navigator.userAgent)
) : () => !0, Ks = L.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, s, i) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      d.isNumber(r) && a.push(`expires=${new Date(r).toUTCString()}`), d.isString(n) && a.push(`path=${n}`), d.isString(o) && a.push(`domain=${o}`), s === !0 && a.push("secure"), d.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
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
function Js(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ws(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Cn(e, t, r) {
  let n = !Js(t);
  return e && (n || r == !1) ? Ws(e, t) : t;
}
const yr = (e) => e instanceof B ? { ...e } : e;
function le(e, t) {
  t = t || {};
  const r = {};
  function n(l, c, f, g) {
    return d.isPlainObject(l) && d.isPlainObject(c) ? d.merge.call({ caseless: g }, l, c) : d.isPlainObject(c) ? d.merge({}, c) : d.isArray(c) ? c.slice() : c;
  }
  function o(l, c, f, g) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(l))
        return n(void 0, l, f, g);
    } else return n(l, c, f, g);
  }
  function s(l, c) {
    if (!d.isUndefined(c))
      return n(void 0, c);
  }
  function i(l, c) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(l))
        return n(void 0, l);
    } else return n(void 0, c);
  }
  function a(l, c, f) {
    if (f in t)
      return n(l, c);
    if (f in e)
      return n(void 0, l);
  }
  const u = {
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
    responseEncoding: i,
    validateStatus: a,
    headers: (l, c, f) => o(yr(l), yr(c), f, !0)
  };
  return d.forEach(Object.keys({ ...e, ...t }), function(c) {
    const f = u[c] || o, g = f(e[c], t[c], c);
    d.isUndefined(g) && f !== a || (r[c] = g);
  }), r;
}
const jn = (e) => {
  const t = le({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = t;
  if (t.headers = i = B.from(i), t.url = An(Cn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), d.isFormData(r)) {
    if (L.hasStandardBrowserEnv || L.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (d.isFunction(r.getHeaders)) {
      const u = r.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(u).forEach(([c, f]) => {
        l.includes(c.toLowerCase()) && i.set(c, f);
      });
    }
  }
  if (L.hasStandardBrowserEnv && (n && d.isFunction(n) && (n = n(t)), n || n !== !1 && ks(t.url))) {
    const u = o && s && Ks.read(s);
    u && i.set(o, u);
  }
  return t;
}, Xs = typeof XMLHttpRequest < "u", Zs = Xs && function(e) {
  return new Promise(function(r, n) {
    const o = jn(e);
    let s = o.data;
    const i = B.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: u, onDownloadProgress: l } = o, c, f, g, y, p;
    function h() {
      y && y(), p && p(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let m = new XMLHttpRequest();
    m.open(o.method.toUpperCase(), o.url, !0), m.timeout = o.timeout;
    function v() {
      if (!m)
        return;
      const E = B.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), x = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: E,
        config: e,
        request: m
      };
      Pn(function($) {
        r($), h();
      }, function($) {
        n($), h();
      }, x), m = null;
    }
    "onloadend" in m ? m.onloadend = v : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, m.onabort = function() {
      m && (n(new S("Request aborted", S.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function(_) {
      const x = _ && _.message ? _.message : "Network Error", R = new S(x, S.ERR_NETWORK, e, m);
      R.event = _ || null, n(R), m = null;
    }, m.ontimeout = function() {
      let _ = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const x = o.transitional || Rn;
      o.timeoutErrorMessage && (_ = o.timeoutErrorMessage), n(new S(
        _,
        x.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        e,
        m
      )), m = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in m && d.forEach(i.toJSON(), function(_, x) {
      m.setRequestHeader(x, _);
    }), d.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), a && a !== "json" && (m.responseType = o.responseType), l && ([g, p] = Xe(l, !0), m.addEventListener("progress", g)), u && m.upload && ([f, y] = Xe(u), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (c = (E) => {
      m && (n(!E || E.type ? new Te(null, e, m) : E), m.abort(), m = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const T = Vs(o.url);
    if (T && L.protocols.indexOf(T) === -1) {
      n(new S("Unsupported protocol " + T + ":", S.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(s || null);
  });
}, Ys = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const s = function(l) {
      if (!o) {
        o = !0, a();
        const c = l instanceof Error ? l : this.reason;
        n.abort(c instanceof S ? c : new Te(c instanceof Error ? c.message : c));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new S(`timeout ${t} of ms exceeded`, S.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(s) : l.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", s));
    const { signal: u } = n;
    return u.unsubscribe = () => d.asap(a), u;
  }
}, Qs = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, ei = async function* (e, t) {
  for await (const r of ti(e))
    yield* Qs(r, t);
}, ti = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, br = (e, t, r, n) => {
  const o = ei(e, t);
  let s = 0, i, a = (u) => {
    i || (i = !0, n && n(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: l, value: c } = await o.next();
        if (l) {
          a(), u.close();
          return;
        }
        let f = c.byteLength;
        if (r) {
          let g = s += f;
          r(g);
        }
        u.enqueue(new Uint8Array(c));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(u) {
      return a(u), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, vr = 64 * 1024, { isFunction: Ve } = d, ri = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(d.global), {
  ReadableStream: wr,
  TextEncoder: Er
} = d.global, Tr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ni = (e) => {
  e = d.merge.call({
    skipUndefined: !0
  }, ri, e);
  const { fetch: t, Request: r, Response: n } = e, o = t ? Ve(t) : typeof fetch == "function", s = Ve(r), i = Ve(n);
  if (!o)
    return !1;
  const a = o && Ve(wr), u = o && (typeof Er == "function" ? /* @__PURE__ */ ((p) => (h) => p.encode(h))(new Er()) : async (p) => new Uint8Array(await new r(p).arrayBuffer())), l = s && a && Tr(() => {
    let p = !1;
    const h = new r(L.origin, {
      body: new wr(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return p && !h;
  }), c = i && a && Tr(() => d.isReadableStream(new n("").body)), f = {
    stream: c && ((p) => p.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !f[p] && (f[p] = (h, m) => {
      let v = h && h[p];
      if (v)
        return v.call(h);
      throw new S(`Response type '${p}' is not supported`, S.ERR_NOT_SUPPORT, m);
    });
  });
  const g = async (p) => {
    if (p == null)
      return 0;
    if (d.isBlob(p))
      return p.size;
    if (d.isSpecCompliantForm(p))
      return (await new r(L.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (d.isArrayBufferView(p) || d.isArrayBuffer(p))
      return p.byteLength;
    if (d.isURLSearchParams(p) && (p = p + ""), d.isString(p))
      return (await u(p)).byteLength;
  }, y = async (p, h) => {
    const m = d.toFiniteNumber(p.getContentLength());
    return m ?? g(h);
  };
  return async (p) => {
    let {
      url: h,
      method: m,
      data: v,
      signal: T,
      cancelToken: E,
      timeout: _,
      onDownloadProgress: x,
      onUploadProgress: R,
      responseType: $,
      headers: V,
      withCredentials: I = "same-origin",
      fetchOptions: H
    } = jn(p), w = t || fetch;
    $ = $ ? ($ + "").toLowerCase() : "text";
    let b = Ys([T, E && E.toAbortSignal()], _), O = null;
    const A = b && b.unsubscribe && (() => {
      b.unsubscribe();
    });
    let z;
    try {
      if (R && l && m !== "get" && m !== "head" && (z = await y(V, v)) !== 0) {
        let oe = new r(h, {
          method: "POST",
          body: v,
          duplex: "half"
        }), me;
        if (d.isFormData(v) && (me = oe.headers.get("content-type")) && V.setContentType(me), oe.body) {
          const [mt, qe] = mr(
            z,
            Xe(gr(R))
          );
          v = br(oe.body, vr, mt, qe);
        }
      }
      d.isString(I) || (I = I ? "include" : "omit");
      const j = s && "credentials" in r.prototype, ee = {
        ...H,
        signal: b,
        method: m.toUpperCase(),
        headers: V.normalize().toJSON(),
        body: v,
        duplex: "half",
        credentials: j ? I : void 0
      };
      O = s && new r(h, ee);
      let X = await (s ? w(O, H) : w(h, ee));
      const ur = c && ($ === "stream" || $ === "response");
      if (c && (x || ur && A)) {
        const oe = {};
        ["status", "statusText", "headers"].forEach((cr) => {
          oe[cr] = X[cr];
        });
        const me = d.toFiniteNumber(X.headers.get("content-length")), [mt, qe] = x && mr(
          me,
          Xe(gr(x), !0)
        ) || [];
        X = new n(
          br(X.body, vr, mt, () => {
            qe && qe(), A && A();
          }),
          oe
        );
      }
      $ = $ || "text";
      let Oo = await f[d.findKey(f, $) || "text"](X, p);
      return !ur && A && A(), await new Promise((oe, me) => {
        Pn(oe, me, {
          data: Oo,
          headers: B.from(X.headers),
          status: X.status,
          statusText: X.statusText,
          config: p,
          request: O
        });
      });
    } catch (j) {
      throw A && A(), j && j.name === "TypeError" && /Load failed|fetch/i.test(j.message) ? Object.assign(
        new S("Network Error", S.ERR_NETWORK, p, O),
        {
          cause: j.cause || j
        }
      ) : S.from(j, j && j.code, p, O);
    }
  };
}, oi = /* @__PURE__ */ new Map(), Fn = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: o } = t, s = [
    n,
    o,
    r
  ];
  let i = s.length, a = i, u, l, c = oi;
  for (; a--; )
    u = s[a], l = c.get(u), l === void 0 && c.set(u, l = a ? /* @__PURE__ */ new Map() : ni(t)), c = l;
  return l;
};
Fn();
const zt = {
  http: Es,
  xhr: Zs,
  fetch: {
    get: Fn
  }
};
d.forEach(zt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Or = (e) => `- ${e}`, si = (e) => d.isFunction(e) || e === null || e === !1;
function ii(e, t) {
  e = d.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, o;
  const s = {};
  for (let i = 0; i < r; i++) {
    n = e[i];
    let a;
    if (o = n, !si(n) && (o = zt[(a = String(n)).toLowerCase()], o === void 0))
      throw new S(`Unknown adapter '${a}'`);
    if (o && (d.isFunction(o) || (o = o.get(t))))
      break;
    s[a || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(s).map(
      ([u, l]) => `adapter ${u} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = r ? i.length > 1 ? `since :
` + i.map(Or).join(`
`) : " " + Or(i[0]) : "as no adapter specified";
    throw new S(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Nn = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ii,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: zt
};
function vt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Te(null, e);
}
function Sr(e) {
  return vt(e), e.headers = B.from(e.headers), e.data = bt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Nn.getAdapter(e.adapter || Ie.adapter, e)(e).then(function(n) {
    return vt(e), n.data = bt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = B.from(n.headers), n;
  }, function(n) {
    return xn(n) || (vt(e), n && n.response && (n.response.data = bt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = B.from(n.response.headers))), Promise.reject(n);
  });
}
const Ln = "1.13.2", ct = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ct[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const _r = {};
ct.transitional = function(t, r, n) {
  function o(s, i) {
    return "[Axios v" + Ln + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new S(
        o(i, " has been removed" + (r ? " in " + r : "")),
        S.ERR_DEPRECATED
      );
    return r && !_r[i] && (_r[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
ct.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function ai(e, t, r) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = t[s];
    if (i) {
      const a = e[s], u = a === void 0 || i(a, s, e);
      if (u !== !0)
        throw new S("option " + s + " must be " + u, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new S("Unknown option " + s, S.ERR_BAD_OPTION);
  }
}
const Ke = {
  assertOptions: ai,
  validators: ct
}, Z = Ke.validators;
let ce = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new pr(),
      response: new pr()
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
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = le(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: s } = r;
    n !== void 0 && Ke.assertOptions(n, {
      silentJSONParsing: Z.transitional(Z.boolean),
      forcedJSONParsing: Z.transitional(Z.boolean),
      clarifyTimeoutError: Z.transitional(Z.boolean)
    }, !1), o != null && (d.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Ke.assertOptions(o, {
      encode: Z.function,
      serialize: Z.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Ke.assertOptions(r, {
      baseUrl: Z.spelling("baseURL"),
      withXsrfToken: Z.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = s && d.merge(
      s.common,
      s[r.method]
    );
    s && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete s[p];
      }
    ), r.headers = B.concat(i, s);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(r) === !1 || (u = u && h.synchronous, a.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(h) {
      l.push(h.fulfilled, h.rejected);
    });
    let c, f = 0, g;
    if (!u) {
      const p = [Sr.bind(this), void 0];
      for (p.unshift(...a), p.push(...l), g = p.length, c = Promise.resolve(r); f < g; )
        c = c.then(p[f++], p[f++]);
      return c;
    }
    g = a.length;
    let y = r;
    for (; f < g; ) {
      const p = a[f++], h = a[f++];
      try {
        y = p(y);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      c = Sr.call(this, y);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, g = l.length; f < g; )
      c = c.then(l[f++], l[f++]);
    return c;
  }
  getUri(t) {
    t = le(this.defaults, t);
    const r = Cn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return An(r, t.params, t.paramsSerializer);
  }
};
d.forEach(["delete", "get", "head", "options"], function(t) {
  ce.prototype[t] = function(r, n) {
    return this.request(le(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, i, a) {
      return this.request(le(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  ce.prototype[t] = r(), ce.prototype[t + "Form"] = r(!0);
});
let ui = class Dn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        n.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      n.reason || (n.reason = new Te(s, i, a), r(n.reason));
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
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Dn(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function ci(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function li(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const Ct = {
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
Object.entries(Ct).forEach(([e, t]) => {
  Ct[t] = e;
});
function Un(e) {
  const t = new ce(e), r = hn(ce.prototype.request, t);
  return d.extend(r, ce.prototype, t, { allOwnKeys: !0 }), d.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Un(le(e, o));
  }, r;
}
const F = Un(Ie);
F.Axios = ce;
F.CanceledError = Te;
F.CancelToken = ui;
F.isCancel = xn;
F.VERSION = Ln;
F.toFormData = ut;
F.AxiosError = S;
F.Cancel = F.CanceledError;
F.all = function(t) {
  return Promise.all(t);
};
F.spread = ci;
F.isAxiosError = li;
F.mergeConfig = le;
F.AxiosHeaders = B;
F.formToJSON = (e) => $n(d.isHTMLForm(e) ? new FormData(e) : e);
F.getAdapter = Nn.getAdapter;
F.HttpStatusCode = Ct;
F.default = F;
const {
  Axios: qf,
  AxiosError: Vf,
  CanceledError: zf,
  isCancel: Bn,
  CancelToken: Gf,
  VERSION: kf,
  all: Kf,
  Cancel: Jf,
  isAxiosError: In,
  spread: Wf,
  toFormData: Xf,
  AxiosHeaders: Zf,
  HttpStatusCode: Yf,
  formToJSON: Qf,
  getAdapter: ed,
  mergeConfig: fi
} = F;
var Mn = typeof global == "object" && global && global.Object === Object && global, di = typeof self == "object" && self && self.Object === Object && self, W = Mn || di || Function("return this")(), q = W.Symbol, Hn = Object.prototype, pi = Hn.hasOwnProperty, hi = Hn.toString, _e = q ? q.toStringTag : void 0;
function mi(e) {
  var t = pi.call(e, _e), r = e[_e];
  try {
    e[_e] = void 0;
    var n = !0;
  } catch {
  }
  var o = hi.call(e);
  return n && (t ? e[_e] = r : delete e[_e]), o;
}
var gi = Object.prototype, yi = gi.toString;
function bi(e) {
  return yi.call(e);
}
var vi = "[object Null]", wi = "[object Undefined]", Ar = q ? q.toStringTag : void 0;
function de(e) {
  return e == null ? e === void 0 ? wi : vi : Ar && Ar in Object(e) ? mi(e) : bi(e);
}
function Q(e) {
  return e != null && typeof e == "object";
}
var Ei = "[object Symbol]";
function lt(e) {
  return typeof e == "symbol" || Q(e) && de(e) == Ei;
}
function qn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var K = Array.isArray, Rr = q ? q.prototype : void 0, $r = Rr ? Rr.toString : void 0;
function Vn(e) {
  if (typeof e == "string")
    return e;
  if (K(e))
    return qn(e, Vn) + "";
  if (lt(e))
    return $r ? $r.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Ti = /\s/;
function Oi(e) {
  for (var t = e.length; t-- && Ti.test(e.charAt(t)); )
    ;
  return t;
}
var Si = /^\s+/;
function _i(e) {
  return e && e.slice(0, Oi(e) + 1).replace(Si, "");
}
function M(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var xr = NaN, Ai = /^[-+]0x[0-9a-f]+$/i, Ri = /^0b[01]+$/i, $i = /^0o[0-7]+$/i, xi = parseInt;
function Pr(e) {
  if (typeof e == "number")
    return e;
  if (lt(e))
    return xr;
  if (M(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = M(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = _i(e);
  var r = Ri.test(e);
  return r || $i.test(e) ? xi(e.slice(2), r ? 2 : 8) : Ai.test(e) ? xr : +e;
}
function zn(e) {
  return e;
}
var Pi = "[object AsyncFunction]", Ci = "[object Function]", ji = "[object GeneratorFunction]", Fi = "[object Proxy]";
function Gt(e) {
  if (!M(e))
    return !1;
  var t = de(e);
  return t == Ci || t == ji || t == Pi || t == Fi;
}
var wt = W["__core-js_shared__"], Cr = (function() {
  var e = /[^.]+$/.exec(wt && wt.keys && wt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function Ni(e) {
  return !!Cr && Cr in e;
}
var Li = Function.prototype, Di = Li.toString;
function pe(e) {
  if (e != null) {
    try {
      return Di.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ui = /[\\^$.*+?()[\]{}|]/g, Bi = /^\[object .+?Constructor\]$/, Ii = Function.prototype, Mi = Object.prototype, Hi = Ii.toString, qi = Mi.hasOwnProperty, Vi = RegExp(
  "^" + Hi.call(qi).replace(Ui, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zi(e) {
  if (!M(e) || Ni(e))
    return !1;
  var t = Gt(e) ? Vi : Bi;
  return t.test(pe(e));
}
function Gi(e, t) {
  return e?.[t];
}
function he(e, t) {
  var r = Gi(e, t);
  return zi(r) ? r : void 0;
}
var jt = he(W, "WeakMap"), jr = Object.create, ki = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!M(t))
      return {};
    if (jr)
      return jr(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
})();
function Ki(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function Gn(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Ji = 800, Wi = 16, Xi = Date.now;
function Zi(e) {
  var t = 0, r = 0;
  return function() {
    var n = Xi(), o = Wi - (n - r);
    if (r = n, o > 0) {
      if (++t >= Ji)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Yi(e) {
  return function() {
    return e;
  };
}
var Ze = (function() {
  try {
    var e = he(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), Qi = Ze ? function(e, t) {
  return Ze(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Yi(t),
    writable: !0
  });
} : zn, kn = Zi(Qi);
function ea(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var ta = 9007199254740991, ra = /^(?:0|[1-9]\d*)$/;
function kt(e, t) {
  var r = typeof e;
  return t = t ?? ta, !!t && (r == "number" || r != "symbol" && ra.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Kt(e, t, r) {
  t == "__proto__" && Ze ? Ze(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Me(e, t) {
  return e === t || e !== e && t !== t;
}
var na = Object.prototype, oa = na.hasOwnProperty;
function Jt(e, t, r) {
  var n = e[t];
  (!(oa.call(e, t) && Me(n, r)) || r === void 0 && !(t in e)) && Kt(e, t, r);
}
function Oe(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var a = t[s], u = void 0;
    u === void 0 && (u = e[a]), o ? Kt(r, a, u) : Jt(r, a, u);
  }
  return r;
}
var Fr = Math.max;
function Kn(e, t, r) {
  return t = Fr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, s = Fr(n.length - t, 0), i = Array(s); ++o < s; )
      i[o] = n[t + o];
    o = -1;
    for (var a = Array(t + 1); ++o < t; )
      a[o] = n[o];
    return a[t] = r(i), Ki(e, this, a);
  };
}
function sa(e, t) {
  return kn(Kn(e, t, zn), e + "");
}
var ia = 9007199254740991;
function Jn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ia;
}
function ft(e) {
  return e != null && Jn(e.length) && !Gt(e);
}
function aa(e, t, r) {
  if (!M(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? ft(r) && kt(t, r.length) : n == "string" && t in r) ? Me(r[t], e) : !1;
}
function ua(e) {
  return sa(function(t, r) {
    var n = -1, o = r.length, s = o > 1 ? r[o - 1] : void 0, i = o > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (o--, s) : void 0, i && aa(r[0], r[1], i) && (s = o < 3 ? void 0 : s, o = 1), t = Object(t); ++n < o; ) {
      var a = r[n];
      a && e(t, a, n, s);
    }
    return t;
  });
}
var ca = Object.prototype;
function Wt(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ca;
  return e === r;
}
function la(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var fa = "[object Arguments]";
function Nr(e) {
  return Q(e) && de(e) == fa;
}
var Wn = Object.prototype, da = Wn.hasOwnProperty, pa = Wn.propertyIsEnumerable, Ye = Nr(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Nr : function(e) {
  return Q(e) && da.call(e, "callee") && !pa.call(e, "callee");
};
function ha() {
  return !1;
}
var Xn = typeof exports == "object" && exports && !exports.nodeType && exports, Lr = Xn && typeof module == "object" && module && !module.nodeType && module, ma = Lr && Lr.exports === Xn, Dr = ma ? W.Buffer : void 0, ga = Dr ? Dr.isBuffer : void 0, Ce = ga || ha, ya = "[object Arguments]", ba = "[object Array]", va = "[object Boolean]", wa = "[object Date]", Ea = "[object Error]", Ta = "[object Function]", Oa = "[object Map]", Sa = "[object Number]", _a = "[object Object]", Aa = "[object RegExp]", Ra = "[object Set]", $a = "[object String]", xa = "[object WeakMap]", Pa = "[object ArrayBuffer]", Ca = "[object DataView]", ja = "[object Float32Array]", Fa = "[object Float64Array]", Na = "[object Int8Array]", La = "[object Int16Array]", Da = "[object Int32Array]", Ua = "[object Uint8Array]", Ba = "[object Uint8ClampedArray]", Ia = "[object Uint16Array]", Ma = "[object Uint32Array]", C = {};
C[ja] = C[Fa] = C[Na] = C[La] = C[Da] = C[Ua] = C[Ba] = C[Ia] = C[Ma] = !0;
C[ya] = C[ba] = C[Pa] = C[va] = C[Ca] = C[wa] = C[Ea] = C[Ta] = C[Oa] = C[Sa] = C[_a] = C[Aa] = C[Ra] = C[$a] = C[xa] = !1;
function Ha(e) {
  return Q(e) && Jn(e.length) && !!C[de(e)];
}
function Xt(e) {
  return function(t) {
    return e(t);
  };
}
var Zn = typeof exports == "object" && exports && !exports.nodeType && exports, xe = Zn && typeof module == "object" && module && !module.nodeType && module, qa = xe && xe.exports === Zn, Et = qa && Mn.process, we = (function() {
  try {
    var e = xe && xe.require && xe.require("util").types;
    return e || Et && Et.binding && Et.binding("util");
  } catch {
  }
})(), Ur = we && we.isTypedArray, Zt = Ur ? Xt(Ur) : Ha, Va = Object.prototype, za = Va.hasOwnProperty;
function Yn(e, t) {
  var r = K(e), n = !r && Ye(e), o = !r && !n && Ce(e), s = !r && !n && !o && Zt(e), i = r || n || o || s, a = i ? la(e.length, String) : [], u = a.length;
  for (var l in e)
    (t || za.call(e, l)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    kt(l, u))) && a.push(l);
  return a;
}
function Qn(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ga = Qn(Object.keys, Object), ka = Object.prototype, Ka = ka.hasOwnProperty;
function Ja(e) {
  if (!Wt(e))
    return Ga(e);
  var t = [];
  for (var r in Object(e))
    Ka.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Yt(e) {
  return ft(e) ? Yn(e) : Ja(e);
}
function Wa(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Xa = Object.prototype, Za = Xa.hasOwnProperty;
function Ya(e) {
  if (!M(e))
    return Wa(e);
  var t = Wt(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Za.call(e, n)) || r.push(n);
  return r;
}
function He(e) {
  return ft(e) ? Yn(e, !0) : Ya(e);
}
var Qa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, eu = /^\w*$/;
function tu(e, t) {
  if (K(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || lt(e) ? !0 : eu.test(e) || !Qa.test(e) || t != null && e in Object(t);
}
var je = he(Object, "create");
function ru() {
  this.__data__ = je ? je(null) : {}, this.size = 0;
}
function nu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ou = "__lodash_hash_undefined__", su = Object.prototype, iu = su.hasOwnProperty;
function au(e) {
  var t = this.__data__;
  if (je) {
    var r = t[e];
    return r === ou ? void 0 : r;
  }
  return iu.call(t, e) ? t[e] : void 0;
}
var uu = Object.prototype, cu = uu.hasOwnProperty;
function lu(e) {
  var t = this.__data__;
  return je ? t[e] !== void 0 : cu.call(t, e);
}
var fu = "__lodash_hash_undefined__";
function du(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = je && t === void 0 ? fu : t, this;
}
function fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fe.prototype.clear = ru;
fe.prototype.delete = nu;
fe.prototype.get = au;
fe.prototype.has = lu;
fe.prototype.set = du;
function pu() {
  this.__data__ = [], this.size = 0;
}
function dt(e, t) {
  for (var r = e.length; r--; )
    if (Me(e[r][0], t))
      return r;
  return -1;
}
var hu = Array.prototype, mu = hu.splice;
function gu(e) {
  var t = this.__data__, r = dt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : mu.call(t, r, 1), --this.size, !0;
}
function yu(e) {
  var t = this.__data__, r = dt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function bu(e) {
  return dt(this.__data__, e) > -1;
}
function vu(e, t) {
  var r = this.__data__, n = dt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function re(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
re.prototype.clear = pu;
re.prototype.delete = gu;
re.prototype.get = yu;
re.prototype.has = bu;
re.prototype.set = vu;
var Fe = he(W, "Map");
function wu() {
  this.size = 0, this.__data__ = {
    hash: new fe(),
    map: new (Fe || re)(),
    string: new fe()
  };
}
function Eu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function pt(e, t) {
  var r = e.__data__;
  return Eu(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Tu(e) {
  var t = pt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ou(e) {
  return pt(this, e).get(e);
}
function Su(e) {
  return pt(this, e).has(e);
}
function _u(e, t) {
  var r = pt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ne(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ne.prototype.clear = wu;
ne.prototype.delete = Tu;
ne.prototype.get = Ou;
ne.prototype.has = Su;
ne.prototype.set = _u;
var Au = "Expected a function";
function Qt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Au);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(o))
      return s.get(o);
    var i = e.apply(this, n);
    return r.cache = s.set(o, i) || s, i;
  };
  return r.cache = new (Qt.Cache || ne)(), r;
}
Qt.Cache = ne;
var Ru = 500;
function $u(e) {
  var t = Qt(e, function(n) {
    return r.size === Ru && r.clear(), n;
  }), r = t.cache;
  return t;
}
var xu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pu = /\\(\\)?/g, Cu = $u(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(xu, function(r, n, o, s) {
    t.push(o ? s.replace(Pu, "$1") : n || r);
  }), t;
});
function ju(e) {
  return e == null ? "" : Vn(e);
}
function ht(e, t) {
  return K(e) ? e : tu(e, t) ? [e] : Cu(ju(e));
}
function er(e) {
  if (typeof e == "string" || lt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function eo(e, t) {
  t = ht(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[er(t[r++])];
  return r && r == n ? e : void 0;
}
function Qe(e, t, r) {
  var n = e == null ? void 0 : eo(e, t);
  return n === void 0 ? r : n;
}
function tr(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Br = q ? q.isConcatSpreadable : void 0;
function Fu(e) {
  return K(e) || Ye(e) || !!(Br && e && e[Br]);
}
function Nu(e, t, r, n, o) {
  var s = -1, i = e.length;
  for (r || (r = Fu), o || (o = []); ++s < i; ) {
    var a = e[s];
    r(a) ? tr(o, a) : o[o.length] = a;
  }
  return o;
}
function Lu(e) {
  var t = e == null ? 0 : e.length;
  return t ? Nu(e) : [];
}
function Du(e) {
  return kn(Kn(e, void 0, Lu), e + "");
}
var rr = Qn(Object.getPrototypeOf, Object), Uu = "[object Object]", Bu = Function.prototype, Iu = Object.prototype, to = Bu.toString, Mu = Iu.hasOwnProperty, Hu = to.call(Object);
function ro(e) {
  if (!Q(e) || de(e) != Uu)
    return !1;
  var t = rr(e);
  if (t === null)
    return !0;
  var r = Mu.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && to.call(r) == Hu;
}
function qu(e, t, r) {
  var n = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), r = r > o ? o : r, r < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(o); ++n < o; )
    s[n] = e[n + t];
  return s;
}
function Vu() {
  this.__data__ = new re(), this.size = 0;
}
function zu(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Gu(e) {
  return this.__data__.get(e);
}
function ku(e) {
  return this.__data__.has(e);
}
var Ku = 200;
function Ju(e, t) {
  var r = this.__data__;
  if (r instanceof re) {
    var n = r.__data__;
    if (!Fe || n.length < Ku - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ne(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Y(e) {
  var t = this.__data__ = new re(e);
  this.size = t.size;
}
Y.prototype.clear = Vu;
Y.prototype.delete = zu;
Y.prototype.get = Gu;
Y.prototype.has = ku;
Y.prototype.set = Ju;
function Wu(e, t) {
  return e && Oe(t, Yt(t), e);
}
function Xu(e, t) {
  return e && Oe(t, He(t), e);
}
var no = typeof exports == "object" && exports && !exports.nodeType && exports, Ir = no && typeof module == "object" && module && !module.nodeType && module, Zu = Ir && Ir.exports === no, Mr = Zu ? W.Buffer : void 0, Hr = Mr ? Mr.allocUnsafe : void 0;
function oo(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Hr ? Hr(r) : new e.constructor(r);
  return e.copy(n), n;
}
function Yu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[o++] = i);
  }
  return s;
}
function so() {
  return [];
}
var Qu = Object.prototype, ec = Qu.propertyIsEnumerable, qr = Object.getOwnPropertySymbols, nr = qr ? function(e) {
  return e == null ? [] : (e = Object(e), Yu(qr(e), function(t) {
    return ec.call(e, t);
  }));
} : so;
function tc(e, t) {
  return Oe(e, nr(e), t);
}
var rc = Object.getOwnPropertySymbols, io = rc ? function(e) {
  for (var t = []; e; )
    tr(t, nr(e)), e = rr(e);
  return t;
} : so;
function nc(e, t) {
  return Oe(e, io(e), t);
}
function ao(e, t, r) {
  var n = t(e);
  return K(e) ? n : tr(n, r(e));
}
function Ft(e) {
  return ao(e, Yt, nr);
}
function uo(e) {
  return ao(e, He, io);
}
var Nt = he(W, "DataView"), Lt = he(W, "Promise"), Dt = he(W, "Set"), Vr = "[object Map]", oc = "[object Object]", zr = "[object Promise]", Gr = "[object Set]", kr = "[object WeakMap]", Kr = "[object DataView]", sc = pe(Nt), ic = pe(Fe), ac = pe(Lt), uc = pe(Dt), cc = pe(jt), G = de;
(Nt && G(new Nt(new ArrayBuffer(1))) != Kr || Fe && G(new Fe()) != Vr || Lt && G(Lt.resolve()) != zr || Dt && G(new Dt()) != Gr || jt && G(new jt()) != kr) && (G = function(e) {
  var t = de(e), r = t == oc ? e.constructor : void 0, n = r ? pe(r) : "";
  if (n)
    switch (n) {
      case sc:
        return Kr;
      case ic:
        return Vr;
      case ac:
        return zr;
      case uc:
        return Gr;
      case cc:
        return kr;
    }
  return t;
});
var lc = Object.prototype, fc = lc.hasOwnProperty;
function dc(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && fc.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var et = W.Uint8Array;
function or(e) {
  var t = new e.constructor(e.byteLength);
  return new et(t).set(new et(e)), t;
}
function pc(e, t) {
  var r = t ? or(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var hc = /\w*$/;
function mc(e) {
  var t = new e.constructor(e.source, hc.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Jr = q ? q.prototype : void 0, Wr = Jr ? Jr.valueOf : void 0;
function gc(e) {
  return Wr ? Object(Wr.call(e)) : {};
}
function co(e, t) {
  var r = t ? or(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var yc = "[object Boolean]", bc = "[object Date]", vc = "[object Map]", wc = "[object Number]", Ec = "[object RegExp]", Tc = "[object Set]", Oc = "[object String]", Sc = "[object Symbol]", _c = "[object ArrayBuffer]", Ac = "[object DataView]", Rc = "[object Float32Array]", $c = "[object Float64Array]", xc = "[object Int8Array]", Pc = "[object Int16Array]", Cc = "[object Int32Array]", jc = "[object Uint8Array]", Fc = "[object Uint8ClampedArray]", Nc = "[object Uint16Array]", Lc = "[object Uint32Array]";
function Dc(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case _c:
      return or(e);
    case yc:
    case bc:
      return new n(+e);
    case Ac:
      return pc(e, r);
    case Rc:
    case $c:
    case xc:
    case Pc:
    case Cc:
    case jc:
    case Fc:
    case Nc:
    case Lc:
      return co(e, r);
    case vc:
      return new n();
    case wc:
    case Oc:
      return new n(e);
    case Ec:
      return mc(e);
    case Tc:
      return new n();
    case Sc:
      return gc(e);
  }
}
function lo(e) {
  return typeof e.constructor == "function" && !Wt(e) ? ki(rr(e)) : {};
}
var Uc = "[object Map]";
function Bc(e) {
  return Q(e) && G(e) == Uc;
}
var Xr = we && we.isMap, Ic = Xr ? Xt(Xr) : Bc, Mc = "[object Set]";
function Hc(e) {
  return Q(e) && G(e) == Mc;
}
var Zr = we && we.isSet, qc = Zr ? Xt(Zr) : Hc, Vc = 1, zc = 2, Gc = 4, fo = "[object Arguments]", kc = "[object Array]", Kc = "[object Boolean]", Jc = "[object Date]", Wc = "[object Error]", po = "[object Function]", Xc = "[object GeneratorFunction]", Zc = "[object Map]", Yc = "[object Number]", ho = "[object Object]", Qc = "[object RegExp]", el = "[object Set]", tl = "[object String]", rl = "[object Symbol]", nl = "[object WeakMap]", ol = "[object ArrayBuffer]", sl = "[object DataView]", il = "[object Float32Array]", al = "[object Float64Array]", ul = "[object Int8Array]", cl = "[object Int16Array]", ll = "[object Int32Array]", fl = "[object Uint8Array]", dl = "[object Uint8ClampedArray]", pl = "[object Uint16Array]", hl = "[object Uint32Array]", P = {};
P[fo] = P[kc] = P[ol] = P[sl] = P[Kc] = P[Jc] = P[il] = P[al] = P[ul] = P[cl] = P[ll] = P[Zc] = P[Yc] = P[ho] = P[Qc] = P[el] = P[tl] = P[rl] = P[fl] = P[dl] = P[pl] = P[hl] = !0;
P[Wc] = P[po] = P[nl] = !1;
function Pe(e, t, r, n, o, s) {
  var i, a = t & Vc, u = t & zc, l = t & Gc;
  if (r && (i = o ? r(e, n, o, s) : r(e)), i !== void 0)
    return i;
  if (!M(e))
    return e;
  var c = K(e);
  if (c) {
    if (i = dc(e), !a)
      return Gn(e, i);
  } else {
    var f = G(e), g = f == po || f == Xc;
    if (Ce(e))
      return oo(e, a);
    if (f == ho || f == fo || g && !o) {
      if (i = u || g ? {} : lo(e), !a)
        return u ? nc(e, Xu(i, e)) : tc(e, Wu(i, e));
    } else {
      if (!P[f])
        return o ? e : {};
      i = Dc(e, f, a);
    }
  }
  s || (s = new Y());
  var y = s.get(e);
  if (y)
    return y;
  s.set(e, i), qc(e) ? e.forEach(function(m) {
    i.add(Pe(m, t, r, m, e, s));
  }) : Ic(e) && e.forEach(function(m, v) {
    i.set(v, Pe(m, t, r, v, e, s));
  });
  var p = l ? u ? uo : Ft : u ? He : Yt, h = c ? void 0 : p(e);
  return ea(h || e, function(m, v) {
    h && (v = m, m = e[v]), Jt(i, v, Pe(m, t, r, v, e, s));
  }), i;
}
var ml = 1, gl = 4;
function ge(e) {
  return Pe(e, ml | gl);
}
var yl = "__lodash_hash_undefined__";
function bl(e) {
  return this.__data__.set(e, yl), this;
}
function vl(e) {
  return this.__data__.has(e);
}
function tt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ne(); ++t < r; )
    this.add(e[t]);
}
tt.prototype.add = tt.prototype.push = bl;
tt.prototype.has = vl;
function wl(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function El(e, t) {
  return e.has(t);
}
var Tl = 1, Ol = 2;
function mo(e, t, r, n, o, s) {
  var i = r & Tl, a = e.length, u = t.length;
  if (a != u && !(i && u > a))
    return !1;
  var l = s.get(e), c = s.get(t);
  if (l && c)
    return l == t && c == e;
  var f = -1, g = !0, y = r & Ol ? new tt() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < a; ) {
    var p = e[f], h = t[f];
    if (n)
      var m = i ? n(h, p, f, t, e, s) : n(p, h, f, e, t, s);
    if (m !== void 0) {
      if (m)
        continue;
      g = !1;
      break;
    }
    if (y) {
      if (!wl(t, function(v, T) {
        if (!El(y, T) && (p === v || o(p, v, r, n, s)))
          return y.push(T);
      })) {
        g = !1;
        break;
      }
    } else if (!(p === h || o(p, h, r, n, s))) {
      g = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), g;
}
function Sl(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, o) {
    r[++t] = [o, n];
  }), r;
}
function _l(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Al = 1, Rl = 2, $l = "[object Boolean]", xl = "[object Date]", Pl = "[object Error]", Cl = "[object Map]", jl = "[object Number]", Fl = "[object RegExp]", Nl = "[object Set]", Ll = "[object String]", Dl = "[object Symbol]", Ul = "[object ArrayBuffer]", Bl = "[object DataView]", Yr = q ? q.prototype : void 0, Tt = Yr ? Yr.valueOf : void 0;
function Il(e, t, r, n, o, s, i) {
  switch (r) {
    case Bl:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ul:
      return !(e.byteLength != t.byteLength || !s(new et(e), new et(t)));
    case $l:
    case xl:
    case jl:
      return Me(+e, +t);
    case Pl:
      return e.name == t.name && e.message == t.message;
    case Fl:
    case Ll:
      return e == t + "";
    case Cl:
      var a = Sl;
    case Nl:
      var u = n & Al;
      if (a || (a = _l), e.size != t.size && !u)
        return !1;
      var l = i.get(e);
      if (l)
        return l == t;
      n |= Rl, i.set(e, t);
      var c = mo(a(e), a(t), n, o, s, i);
      return i.delete(e), c;
    case Dl:
      if (Tt)
        return Tt.call(e) == Tt.call(t);
  }
  return !1;
}
var Ml = 1, Hl = Object.prototype, ql = Hl.hasOwnProperty;
function Vl(e, t, r, n, o, s) {
  var i = r & Ml, a = Ft(e), u = a.length, l = Ft(t), c = l.length;
  if (u != c && !i)
    return !1;
  for (var f = u; f--; ) {
    var g = a[f];
    if (!(i ? g in t : ql.call(t, g)))
      return !1;
  }
  var y = s.get(e), p = s.get(t);
  if (y && p)
    return y == t && p == e;
  var h = !0;
  s.set(e, t), s.set(t, e);
  for (var m = i; ++f < u; ) {
    g = a[f];
    var v = e[g], T = t[g];
    if (n)
      var E = i ? n(T, v, g, t, e, s) : n(v, T, g, e, t, s);
    if (!(E === void 0 ? v === T || o(v, T, r, n, s) : E)) {
      h = !1;
      break;
    }
    m || (m = g == "constructor");
  }
  if (h && !m) {
    var _ = e.constructor, x = t.constructor;
    _ != x && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof x == "function" && x instanceof x) && (h = !1);
  }
  return s.delete(e), s.delete(t), h;
}
var zl = 1, Qr = "[object Arguments]", en = "[object Array]", ze = "[object Object]", Gl = Object.prototype, tn = Gl.hasOwnProperty;
function kl(e, t, r, n, o, s) {
  var i = K(e), a = K(t), u = i ? en : G(e), l = a ? en : G(t);
  u = u == Qr ? ze : u, l = l == Qr ? ze : l;
  var c = u == ze, f = l == ze, g = u == l;
  if (g && Ce(e)) {
    if (!Ce(t))
      return !1;
    i = !0, c = !1;
  }
  if (g && !c)
    return s || (s = new Y()), i || Zt(e) ? mo(e, t, r, n, o, s) : Il(e, t, u, r, n, o, s);
  if (!(r & zl)) {
    var y = c && tn.call(e, "__wrapped__"), p = f && tn.call(t, "__wrapped__");
    if (y || p) {
      var h = y ? e.value() : e, m = p ? t.value() : t;
      return s || (s = new Y()), o(h, m, r, n, s);
    }
  }
  return g ? (s || (s = new Y()), Vl(e, t, r, n, o, s)) : !1;
}
function go(e, t, r, n, o) {
  return e === t ? !0 : e == null || t == null || !Q(e) && !Q(t) ? e !== e && t !== t : kl(e, t, r, n, go, o);
}
function Kl(e) {
  return function(t, r, n) {
    for (var o = -1, s = Object(t), i = n(t), a = i.length; a--; ) {
      var u = i[++o];
      if (r(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var Jl = Kl(), Ot = function() {
  return W.Date.now();
}, Wl = "Expected a function", Xl = Math.max, Zl = Math.min;
function Yl(e, t, r) {
  var n, o, s, i, a, u, l = 0, c = !1, f = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Wl);
  t = Pr(t) || 0, M(r) && (c = !0, f = "maxWait" in r, s = f ? Xl(Pr(r.maxWait) || 0, t) : s, g = "trailing" in r ? !0 : g);
  function y(R) {
    var $ = n, V = o;
    return n = o = void 0, l = R, i = e.apply(V, $), i;
  }
  function p(R) {
    return l = R, a = setTimeout(v, t), c ? y(R) : i;
  }
  function h(R) {
    var $ = R - u, V = R - l, I = t - $;
    return f ? Zl(I, s - V) : I;
  }
  function m(R) {
    var $ = R - u, V = R - l;
    return u === void 0 || $ >= t || $ < 0 || f && V >= s;
  }
  function v() {
    var R = Ot();
    if (m(R))
      return T(R);
    a = setTimeout(v, h(R));
  }
  function T(R) {
    return a = void 0, g && n ? y(R) : (n = o = void 0, i);
  }
  function E() {
    a !== void 0 && clearTimeout(a), l = 0, n = u = o = a = void 0;
  }
  function _() {
    return a === void 0 ? i : T(Ot());
  }
  function x() {
    var R = Ot(), $ = m(R);
    if (n = arguments, o = this, u = R, $) {
      if (a === void 0)
        return p(u);
      if (f)
        return clearTimeout(a), a = setTimeout(v, t), y(u);
    }
    return a === void 0 && (a = setTimeout(v, t)), i;
  }
  return x.cancel = E, x.flush = _, x;
}
function Ut(e, t, r) {
  (r !== void 0 && !Me(e[t], r) || r === void 0 && !(t in e)) && Kt(e, t, r);
}
function Ql(e) {
  return Q(e) && ft(e);
}
function Bt(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function ef(e) {
  return Oe(e, He(e));
}
function tf(e, t, r, n, o, s, i) {
  var a = Bt(e, r), u = Bt(t, r), l = i.get(u);
  if (l) {
    Ut(e, r, l);
    return;
  }
  var c = s ? s(a, u, r + "", e, t, i) : void 0, f = c === void 0;
  if (f) {
    var g = K(u), y = !g && Ce(u), p = !g && !y && Zt(u);
    c = u, g || y || p ? K(a) ? c = a : Ql(a) ? c = Gn(a) : y ? (f = !1, c = oo(u, !0)) : p ? (f = !1, c = co(u, !0)) : c = [] : ro(u) || Ye(u) ? (c = a, Ye(a) ? c = ef(a) : (!M(a) || Gt(a)) && (c = lo(u))) : f = !1;
  }
  f && (i.set(u, c), o(c, u, n, s, i), i.delete(u)), Ut(e, r, c);
}
function yo(e, t, r, n, o) {
  e !== t && Jl(t, function(s, i) {
    if (o || (o = new Y()), M(s))
      tf(e, t, i, r, yo, n, o);
    else {
      var a = n ? n(Bt(e, i), s, i + "", e, t, o) : void 0;
      a === void 0 && (a = s), Ut(e, i, a);
    }
  }, He);
}
function rf(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function nf(e, t) {
  return t.length < 2 ? e : eo(e, qu(t, 0, -1));
}
function of(e, t) {
  return go(e, t);
}
var It = ua(function(e, t, r) {
  yo(e, t, r);
}), sf = Object.prototype, af = sf.hasOwnProperty;
function uf(e, t) {
  t = ht(t, e);
  var r = -1, n = t.length;
  if (!n)
    return !0;
  for (var o = e == null || typeof e != "object" && typeof e != "function"; ++r < n; ) {
    var s = t[r];
    if (typeof s == "string") {
      if (s === "__proto__" && !af.call(e, "__proto__"))
        return !1;
      if (s === "constructor" && r + 1 < n && typeof t[r + 1] == "string" && t[r + 1] === "prototype") {
        if (o && r === 0)
          continue;
        return !1;
      }
    }
  }
  var i = nf(e, t);
  return i == null || delete i[er(rf(t))];
}
function cf(e) {
  return ro(e) ? void 0 : e;
}
var lf = 1, ff = 2, df = 4, rn = Du(function(e, t) {
  var r = {};
  if (e == null)
    return r;
  var n = !1;
  t = qn(t, function(s) {
    return s = ht(s, e), n || (n = s.length > 1), s;
  }), Oe(e, uo(e), r), n && (r = Pe(r, lf | ff | df, cf));
  for (var o = t.length; o--; )
    uf(r, t[o]);
  return r;
});
function pf(e, t, r, n) {
  if (!M(e))
    return e;
  t = ht(t, e);
  for (var o = -1, s = t.length, i = s - 1, a = e; a != null && ++o < s; ) {
    var u = er(t[o]), l = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (o != i) {
      var c = a[u];
      l = void 0, l === void 0 && (l = M(c) ? c : kt(t[o + 1]) ? [] : {});
    }
    Jt(a, u, l), a = a[u];
  }
  return e;
}
function bo(e, t, r) {
  return e == null ? e : pf(e, t, r);
}
F.create();
const hf = (e) => typeof e == "string" ? e : e(), mf = (e) => typeof e == "string" ? e.toLowerCase() : e(), gf = (e) => Object.keys(e).reduce((t, r) => ({
  ...t,
  [r]: Array.isArray(e[r]) ? e[r][0] : e[r]
}), {});
let Ne = F.create(), vo = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, wo = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const rt = {}, te = {
  get: (e, t = {}, r = {}) => Re(Ae("get", e, t, r)),
  post: (e, t = {}, r = {}) => Re(Ae("post", e, t, r)),
  patch: (e, t = {}, r = {}) => Re(Ae("patch", e, t, r)),
  put: (e, t = {}, r = {}) => Re(Ae("put", e, t, r)),
  delete: (e, t = {}, r = {}) => Re(Ae("delete", e, t, r)),
  use(e) {
    return Ne = e, te;
  },
  axios() {
    return Ne;
  },
  fingerprintRequestsUsing(e) {
    return vo = e === null ? () => null : e, te;
  },
  determineSuccessUsing(e) {
    return wo = e, te;
  }
}, Ae = (e, t, r, n) => ({
  url: t,
  method: e,
  ...n,
  ...["get", "delete"].includes(e) ? {
    params: It({}, r, n?.params)
  } : {
    data: It({}, r, n?.data)
  }
}), Re = (e = {}) => {
  const t = [
    yf,
    vf,
    wf
  ].reduce((r, n) => n(r), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), Ne.request(t).then(async (r) => {
    t.precognitive && nn(r);
    const n = r.status;
    let o = r;
    return t.precognitive && t.onPrecognitionSuccess && wo(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && bf(n) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (on(t, n) ?? ((i) => i))(o) ?? o;
  }, (r) => Ef(r) ? Promise.reject(r) : (t.precognitive && nn(r.response), (on(t, r.response.status) ?? ((o, s) => Promise.reject(s)))(r.response, r))).finally(t.onFinish ?? (() => null)));
}, yf = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? Ne.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? vo(e, Ne) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": Tf(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, bf = (e) => e >= 200 && e < 300, vf = (e) => (typeof e.fingerprint != "string" || (rt[e.fingerprint]?.abort(), delete rt[e.fingerprint]), e), wf = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (rt[e.fingerprint] = new AbortController(), {
  ...e,
  signal: rt[e.fingerprint].signal
}), nn = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, Ef = (e) => !In(e) || typeof e.response?.status != "number" || Bn(e), on = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], Tf = (e) => e.headers?.["Content-Type"] ?? e.headers?.["Content-type"] ?? e.headers?.["content-type"] ?? (Eo(e.data) ? "multipart/form-data" : "application/json"), Eo = (e) => sr(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => Eo(t)), sr = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, sn = (e) => typeof e == "string" ? e : e(), an = (e) => typeof e == "string" ? e.toLowerCase() : e(), Of = (e, t = {}) => {
  const r = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let n = !1, o = !1;
  const s = (w) => w !== o ? (o = w, r.validatingChanged) : [];
  let i = [];
  const a = (w) => {
    const b = [...new Set(w)];
    return i.length !== b.length || !b.every((O) => i.includes(O)) ? (i = b, r.validatedChanged) : [];
  }, u = () => i.filter((w) => typeof f[w] > "u");
  let l = [];
  const c = (w) => {
    const b = [...new Set(w)];
    return l.length !== b.length || !b.every((O) => l.includes(O)) ? (l = b, r.touchedChanged) : [];
  };
  let f = {};
  const g = (w) => {
    const b = _f(w);
    return of(f, b) ? [] : (f = b, r.errorsChanged);
  }, y = (w) => {
    const b = { ...f };
    return delete b[Je(w)], g(b);
  }, p = () => Object.keys(f).length > 0;
  let h = 1500;
  const m = (w) => {
    h = w, R.cancel(), R = x();
  };
  let v = t, T = null, E = [], _ = null;
  const x = () => Yl((w) => {
    e({
      get: (b, O = {}, A = {}) => te.get(b, I(O), $(A, w, O)),
      post: (b, O = {}, A = {}) => te.post(b, I(O), $(A, w, O)),
      patch: (b, O = {}, A = {}) => te.patch(b, I(O), $(A, w, O)),
      put: (b, O = {}, A = {}) => te.put(b, I(O), $(A, w, O)),
      delete: (b, O = {}, A = {}) => te.delete(b, I(O), $(A, w, O))
    }).catch((b) => Bn(b) || In(b) && b.response?.status === 422 ? null : Promise.reject(b));
  }, h, { leading: !0, trailing: !0 });
  let R = x();
  const $ = (w, b, O = {}) => {
    const A = {
      ...w,
      ...b
    }, z = Array.from(A.only ?? A.validate ?? l);
    return {
      ...b,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...fi(w, b),
      only: z,
      timeout: A.timeout ?? 5e3,
      onValidationError: (j, ee) => ([
        ...a([...i, ...z]),
        ...g(It(rn({ ...f }, z), j.data.errors))
      ].forEach((X) => X()), A.onValidationError ? A.onValidationError(j, ee) : Promise.reject(ee)),
      onSuccess: (j) => (a([...i, ...z]).forEach((ee) => ee()), A.onSuccess ? A.onSuccess(j) : j),
      onPrecognitionSuccess: (j) => ([
        ...a([...i, ...z]),
        ...g(rn({ ...f }, z))
      ].forEach((ee) => ee()), A.onPrecognitionSuccess ? A.onPrecognitionSuccess(j) : j),
      onBefore: () => A.onBeforeValidation && A.onBeforeValidation({ data: O, touched: l }, { data: v, touched: E }) === !1 || (A.onBefore || (() => !0))() === !1 ? !1 : (_ = l, T = O, !0),
      onStart: () => {
        s(!0).forEach((j) => j()), (A.onStart ?? (() => null))();
      },
      onFinish: () => {
        s(!1).forEach((j) => j()), E = _, v = T, _ = T = null, (A.onFinish ?? (() => null))();
      }
    };
  }, V = (w, b, O) => {
    if (typeof w > "u") {
      const A = Array.from(O?.only ?? O?.validate ?? []);
      c([...l, ...A]).forEach((z) => z()), R(O ?? {});
      return;
    }
    if (sr(b) && !n) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    w = Je(w), Qe(v, w) !== b && (c([w, ...l]).forEach((A) => A()), R(O ?? {}));
  }, I = (w) => n === !1 ? Mt(w) : w, H = {
    touched: () => l,
    validate(w, b, O) {
      return typeof w == "object" && !("target" in w) && (O = w, w = b = void 0), V(w, b, O), H;
    },
    touch(w) {
      const b = Array.isArray(w) ? w : [Je(w)];
      return c([...l, ...b]).forEach((O) => O()), H;
    },
    validating: () => o,
    valid: u,
    errors: () => f,
    hasErrors: p,
    setErrors(w) {
      return g(w).forEach((b) => b()), H;
    },
    forgetError(w) {
      return y(w).forEach((b) => b()), H;
    },
    reset(...w) {
      if (w.length === 0)
        c([]).forEach((b) => b());
      else {
        const b = [...l];
        w.forEach((O) => {
          b.includes(O) && b.splice(b.indexOf(O), 1), bo(v, O, Qe(t, O));
        }), c(b).forEach((O) => O());
      }
      return H;
    },
    setTimeout(w) {
      return m(w), H;
    },
    on(w, b) {
      return r[w].push(b), H;
    },
    validateFiles() {
      return n = !0, H;
    }
  };
  return H;
}, Sf = (e) => Object.keys(e).reduce((t, r) => ({
  ...t,
  [r]: Array.isArray(e[r]) ? e[r][0] : e[r]
}), {}), _f = (e) => Object.keys(e).reduce((t, r) => ({
  ...t,
  [r]: typeof e[r] == "string" ? [e[r]] : e[r]
}), {}), Je = (e) => typeof e != "string" ? e.target.name : e, Mt = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((r) => {
    const n = t[r];
    if (n !== null) {
      if (sr(n)) {
        delete t[r];
        return;
      }
      if (Array.isArray(n)) {
        t[r] = Object.values(Mt({ ...n }));
        return;
      }
      if (typeof n == "object") {
        t[r] = Mt(t[r]);
        return;
      }
    }
  }), t;
}, Af = (e, t, r, n = {}) => {
  const o = ge(typeof r == "function" ? r() : r), s = Object.keys(o), i = At([]), a = At([]), u = Of((f) => f[an(e)](sn(t), c.data(), n), o).on("validatingChanged", () => {
    c.validating = u.validating();
  }).on("validatedChanged", () => {
    i.value = u.valid();
  }).on("touchedChanged", () => {
    a.value = u.touched();
  }).on("errorsChanged", () => {
    c.hasErrors = u.hasErrors(), c.errors = Sf(u.errors()), i.value = u.valid();
  }), l = (f) => ({
    ...f,
    precognitive: !1,
    onStart: () => {
      c.processing = !0, (f.onStart ?? (() => null))();
    },
    onFinish: () => {
      c.processing = !1, (f.onFinish ?? (() => null))();
    },
    onValidationError: (g, y) => (u.setErrors(g.data.errors), f.onValidationError ? f.onValidationError(g) : Promise.reject(y))
  });
  let c = {
    ...ge(o),
    data() {
      const f = ge(_o(c));
      return s.reduce((g, y) => ({
        ...g,
        [y]: f[y]
      }), {});
    },
    setData(f) {
      return Object.keys(f).forEach((g) => {
        c[g] = f[g];
      }), c;
    },
    touched(f) {
      return typeof f == "string" ? a.value.includes(f) : a.value.length > 0;
    },
    touch(f) {
      return u.touch(f), c;
    },
    validate(f, g) {
      return typeof f == "object" && !("target" in f) && (g = f, f = void 0), typeof f > "u" ? u.validate(g) : (f = Je(f), u.validate(f, Qe(c.data(), f), g)), c;
    },
    validating: !1,
    valid(f) {
      return i.value.includes(f);
    },
    invalid(f) {
      return typeof c.errors[f] < "u";
    },
    errors: {},
    hasErrors: !1,
    setErrors(f) {
      return u.setErrors(f), c;
    },
    forgetError(f) {
      return u.forgetError(f), c;
    },
    reset(...f) {
      const g = ge(typeof r == "function" ? r() : o);
      return f.length === 0 ? s.forEach((y) => c[y] = g[y]) : f.forEach((y) => bo(c, y, Qe(g, y))), u.reset(...f), c;
    },
    setValidationTimeout(f) {
      return u.setTimeout(f), c;
    },
    processing: !1,
    async submit(f = {}) {
      return te[an(e)](sn(t), c.data(), l(f));
    },
    validateFiles() {
      return u.validateFiles(), c;
    },
    validator() {
      return u;
    }
  };
  return c = So(c), c;
}, Rf = (e, t, r, n = {}) => {
  const o = un(r), s = Af(e, t, r, n);
  s.validator().on("errorsChanged", () => {
    u(), l(
      // @ts-expect-error
      gf(s.validator().errors())
    );
  });
  const i = o.submit.bind(o), a = o.reset.bind(o), u = o.clearErrors.bind(o), l = o.setError.bind(o), c = o.transform.bind(o);
  let f = (y) => y;
  const g = Object.assign(o, {
    validating: s.validating,
    touched: s.touched,
    touch(y) {
      return s.touch(y), g;
    },
    valid: s.valid,
    invalid: s.invalid,
    setData(y) {
      return Object.keys(y).forEach((p) => {
        g[p] = y[p];
      }), g;
    },
    clearErrors(...y) {
      return u(...y), y.length === 0 ? s.setErrors({}) : y.forEach(s.forgetError), g;
    },
    reset(...y) {
      a(...y), s.reset(...y);
    },
    setErrors(y) {
      return s.setErrors(y), g;
    },
    forgetError(y) {
      return s.forgetError(y), g;
    },
    setError(y, p) {
      let h;
      if (typeof y != "object") {
        if (typeof p > "u")
          throw new Error("The `value` is required.");
        h = { [y]: p };
      } else
        h = y;
      return g.setErrors({
        ...o.errors,
        ...h
      }), g;
    },
    transform(y) {
      return c(y), f = y, g;
    },
    validate(y, p) {
      return s.setData(f(o.data())), typeof y == "object" && !("target" in y) && (p = y, y = void 0), typeof p == "object" && (p.onValidationError = p.onValidationError ?? p?.onError), typeof y > "u" ? s.validate(p) : s.validate(y, p), g;
    },
    setValidationTimeout(y) {
      return s.setValidationTimeout(y), g;
    },
    validateFiles() {
      return s.validateFiles(), g;
    },
    submit(y = {}, p, h) {
      typeof y != "string" && (h = y, p = hf(t), y = mf(e)), i(y, p, {
        ...h,
        onError: (m) => {
          if (s.validator().setErrors(m), h?.onError)
            return h.onError(m);
        }
      });
    },
    validator: s.validator
  });
  return cn(() => g.validating = s.validating), g;
};
F.create();
const $f = { class: "space-y-2" }, xf = /* @__PURE__ */ Le({
  __name: "CheckboxGroup",
  props: {
    form: {},
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, o = (i) => r.modelValue.includes(i), s = (i, a) => {
      const u = a ? [...r.modelValue, i] : r.modelValue.filter((l) => l !== i);
      n("update:modelValue", u);
    };
    return (i, a) => (N(), k("div", $f, [
      (N(!0), k(nt, null, ot(e.items, (u, l) => (N(), k("div", {
        key: l,
        class: "flex items-center gap-2"
      }, [
        We(se(jo), {
          id: `${r.form._prefix}-${u.label ?? u}`,
          "model-value": o(u.value ?? u),
          "onUpdate:modelValue": (c) => s(u.value ?? u, c)
        }, null, 8, ["id", "model-value", "onUpdate:modelValue"]),
        We(se(dn), {
          for: `${r.form._prefix}-${u.label ?? u}`,
          class: "cursor-pointer"
        }, {
          default: be(() => [
            $e(ue(u.label ?? u), 1)
          ]),
          _: 2
        }, 1032, ["for"])
      ]))), 128))
    ]));
  }
}), To = (e, t = {}) => {
  for (const r of Object.keys(e)) {
    const n = e[r];
    n.schema ? To(n.schema, t) : t[r] = n.value ?? null;
  }
  return t;
}, Pf = (e) => {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let r = "";
  for (let n = 0; n < e; n++)
    r += t.charAt(Math.floor(Math.random() * t.length));
  return r;
}, St = (e) => {
  const t = {};
  for (const r of Object.keys(e)) {
    const n = e[r];
    if (n.schema) {
      To(n.schema, t);
      continue;
    }
    if (n.component === xf) {
      t[r] = n.checked ?? [];
      continue;
    }
    const o = n?.fieldset;
    if (o) {
      for (const [s, i] of Object.entries(o))
        i && typeof i == "object" && i.model ? t[i.model] = i.value ?? null : t[s] = i && typeof i == "object" ? i.value ?? null : i;
      continue;
    }
    t[r] = n.value ?? null;
  }
  return t;
}, ir = (e) => Object.entries(e).map(([t, r]) => {
  const n = r.hasOwnProperty("setup") ? { component: r } : r;
  return {
    name: t,
    definition: n
  };
}), _t = (e) => typeof e == "function" ? e() : ln(e) ? e.value : e;
function td(e = {}, t = {}) {
  const r = _t(e), n = t?.precognition ? Rf(t.method, t.url, St(r)) : un(St(r));
  n._prefix = Pf(6);
  const o = D(() => ir(_t(e)));
  return (typeof e == "function" || ln(e)) && Ao(
    o,
    (i) => {
      const a = St(_t(e));
      for (const l of Object.keys(a))
        l in n || (n[l] = a[l]);
      const u = n.data();
      for (const l of Object.keys(u))
        l !== "_prefix" && !(l in a) && delete n[l];
    },
    { deep: !0 }
  ), {
    elements: o,
    form: n,
    options: t
  };
}
const Cf = { key: 0 }, ar = /* @__PURE__ */ Le({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    const t = e, r = Ro("schemaOptions", {}), n = D(() => {
      const h = t.element.definition?.fieldset;
      if (!h) return null;
      const m = [];
      for (const [v, T] of Object.entries(h)) {
        const E = T && typeof T == "object" && T.model ? T.model : v;
        m.push({ key: v, formKey: E });
      }
      return m;
    }), o = D(() => {
      const h = n.value;
      if (h) {
        const m = {};
        for (const { key: v, formKey: T } of h)
          m[T] = t.form[T];
        return m;
      }
      return { modelValue: t.form[t.element.name] };
    }), s = D(() => {
      const h = t.element.definition, m = h.component?.props;
      if (!m) return {};
      const v = {}, T = (E, _) => {
        m.hasOwnProperty(E) && (v[E] = _);
      };
      if (T("id", `${t.form._prefix}-${t.element.name}`), T("form", t.form), T("schema", h.schema), T("error", a.value[0] ?? null), h.props)
        for (const [E, _] of Object.entries(h.props))
          v[E] = _;
      for (const E of Object.keys(h))
        if (E !== "component" && E !== "props" && E !== "visible" && E !== "alert" && E !== "fieldset" && E !== "schema" && E !== "precognitive" && E !== "precognitiveEvent") {
          const _ = h[E];
          if (E === "label" && (_ === !1 || _ === null || _ === "")) continue;
          T(E, _);
        }
      for (const [E, _] of Object.entries(o.value))
        T(E, _);
      return v;
    }), i = D(() => {
      const h = n.value, m = r?.precognition === !0 && (t.element.definition.precognitive ?? r?.optInPrecognition !== !0), v = t.element.definition.precognitiveEvent ?? "change", T = (E, _ = "modelValue") => {
        const x = {
          [`update:${_}`]: (R) => {
            t.form[E] = R, m && v === "update" && t.form.validate(E);
          }
        };
        return m && v !== "update" && (x[v] = () => t.form.validate(E)), x;
      };
      if (h) {
        const E = {};
        for (const { formKey: _ } of h)
          Object.assign(E, T(_, _));
        return E;
      }
      return T(t.element.name);
    }), a = D(() => {
      const h = n.value;
      return h ? h.map(({ formKey: m }) => t.form.errors[m]).filter((m) => m) : [t.form.errors[t.element.name]];
    }), u = D(() => a.value.filter(Boolean).map((h) => ({ message: h }))), l = D(() => (t.element.definition.label || t.element.name).replaceAll("_id", "").replaceAll("_", " ")), c = D(() => !!t.element.definition.schema), f = D(() => {
      const h = t.element.definition.label;
      return h === !1 || h === null || h === "" || t.element.definition.props?.type === "hidden" ? !1 : !c.value;
    }), g = D(() => {
      if (t.element.definition.alert !== void 0) {
        const h = t.element.definition.alert;
        return {
          ...h,
          visible: typeof h.visible == "function" ? h.visible : () => !0
        };
      }
      return null;
    }), y = t.element.definition.visible, p = At(typeof y == "function" ? y(t.form) : !0);
    return typeof y == "function" && cn(() => {
      p.value = y(t.form);
    }), (h, m) => p.value ? (N(), k("div", Cf, [
      f.value ? (N(), ie(se(dn), {
        key: 0,
        for: s.value.id,
        class: "mb-1 block capitalize"
      }, {
        default: be(() => [
          $e(ue(l.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : ye("", !0),
      (N(), ie($o(e.element.definition.component), fn({
        key: e.element.name
      }, s.value, xo(i.value)), null, 16)),
      g.value && g.value.visible() ? (N(), ie(se(Fo), {
        key: 1,
        variant: "warning",
        class: "mt-2"
      }, {
        default: be(() => [
          We(se(No), { class: "flex items-center justify-between" }, {
            default: be(() => [
              $e(ue(g.value.text) + " ", 1),
              g.value.actionHref && g.value.actionText ? (N(), ie(se(pn), {
                key: 0,
                as: "a",
                href: g.value.actionHref,
                target: g.value.externalAction ? "_blank" : void 0,
                variant: "outline",
                size: "sm"
              }, {
                default: be(() => [
                  $e(ue(g.value.actionText), 1)
                ]),
                _: 1
              }, 8, ["href", "target"])) : ye("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : ye("", !0),
      !s.value.hasOwnProperty("error") && u.value.length > 0 ? (N(), ie(se(Lo), {
        key: 2,
        errors: u.value
      }, null, 8, ["errors"])) : ye("", !0)
    ])) : ye("", !0);
  }
}), jf = { class: "mx-auto mt-6 max-w-md space-y-6" }, Ff = { class: "flex justify-end gap-2" }, rd = /* @__PURE__ */ Le({
  __name: "FormBuilder",
  props: {
    schema: {},
    submit: { default: "Save" }
  },
  setup(e) {
    const t = e;
    Po("schemaOptions", t.schema.options);
    const r = D(() => {
      const n = t.schema.elements;
      return "value" in n ? n.value : n;
    });
    return (n, o) => (N(), k("div", jf, [
      gt(n.$slots, "default", {}, () => [
        (N(!0), k(nt, null, ot(r.value, (s) => (N(), ie(ar, {
          key: s.name,
          element: s,
          form: e.schema.form
        }, null, 8, ["element", "form"]))), 128))
      ]),
      gt(n.$slots, "actions-wrapper", {
        form: e.schema.form
      }, () => [
        Rt("div", Ff, [
          gt(n.$slots, "actions", {
            form: e.schema.form
          }, () => [
            We(se(pn), {
              type: "submit",
              loading: e.schema.form.processing
            }, {
              default: be(() => [
                $e(ue(e.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ])
    ]));
  }
}), nd = /* @__PURE__ */ Le({
  __name: "Grid",
  props: {
    schema: {},
    form: {}
  },
  setup(e) {
    const t = e, r = D(() => ir(t.schema)), n = D(() => {
      const o = r.value.length;
      return {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
        5: "md:grid-cols-5",
        6: "md:grid-cols-6"
      }[o] ?? `md:grid-cols-${o}`;
    });
    return (o, s) => (N(), k("div", {
      class: Co(["grid gap-x-4 gap-y-6 md:grid-flow-col", n.value])
    }, [
      (N(!0), k(nt, null, ot(r.value, (i) => (N(), ie(ar, fn({
        key: i.name,
        element: i,
        form: e.form
      }, { ref_for: !0 }, o.$attrs), null, 16, ["element", "form"]))), 128))
    ], 2));
  }
}), Nf = { class: "mt-10" }, Lf = {
  key: 0,
  class: "mt-1 whitespace-pre-line text-sm leading-6 text-gray-500"
}, Df = { class: "mt-4 space-y-6" }, od = /* @__PURE__ */ Le({
  __name: "Section",
  props: {
    schema: {},
    form: {},
    heading: {},
    description: {}
  },
  setup(e) {
    const t = e, r = D(() => ir(t.schema));
    return (n, o) => (N(), k("div", Nf, [
      Rt("label", null, ue(e.heading), 1),
      e.description ? (N(), k("p", Lf, ue(e.description), 1)) : ye("", !0),
      Rt("div", Df, [
        (N(!0), k(nt, null, ot(r.value, (s) => (N(), ie(ar, {
          key: s.name,
          element: s,
          form: e.form
        }, null, 8, ["element", "form"]))), 128))
      ])
    ]));
  }
});
export {
  xf as CheckboxGroup,
  rd as FormBuilder,
  nd as Grid,
  od as Section,
  td as useSchema
};
