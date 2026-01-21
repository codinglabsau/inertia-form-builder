import { useForm as cn } from "@inertiajs/vue3";
import { ref as At, reactive as So, toRaw as _o, watchEffect as un, defineComponent as Ne, createElementBlock as q, openBlock as L, Fragment as De, renderList as Ue, createVNode as Ze, unref as se, withCtx as be, createTextVNode as $e, toDisplayString as ce, computed as D, isRef as ln, watch as Ao, inject as Ro, createCommentVNode as ye, createBlock as ie, resolveDynamicComponent as $o, mergeProps as fn, toHandlers as xo, provide as Po, renderSlot as gt, createElementVNode as Rt, normalizeClass as Co } from "vue";
import { Checkbox as jo, Label as dn, Alert as Fo, AlertDescription as Lo, Button as pn, FieldError as No } from "@codinglabsau/gooey";
function hn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Do } = Object.prototype, { getPrototypeOf: Ht } = Object, { iterator: st, toStringTag: mn } = Symbol, it = /* @__PURE__ */ ((e) => (t) => {
  const r = Do.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), J = (e) => (e = e.toLowerCase(), (t) => it(t) === e), at = (e) => (t) => typeof t === e, { isArray: Ee } = Array, we = at("undefined");
function Ie(e) {
  return e !== null && !we(e) && e.constructor !== null && !we(e.constructor) && U(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const gn = J("ArrayBuffer");
function Uo(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && gn(e.buffer), t;
}
const Io = at("string"), U = at("function"), yn = at("number"), Be = (e) => e !== null && typeof e == "object", Bo = (e) => e === !0 || e === !1, Ke = (e) => {
  if (it(e) !== "object")
    return !1;
  const t = Ht(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(mn in e) && !(st in e);
}, Mo = (e) => {
  if (!Be(e) || Ie(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Ho = J("Date"), qo = J("File"), zo = J("Blob"), Vo = J("FileList"), ko = (e) => Be(e) && U(e.pipe), Go = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || U(e.append) && ((t = it(e)) === "formdata" || // detect form-data instance
  t === "object" && U(e.toString) && e.toString() === "[object FormData]"));
}, Ko = J("URLSearchParams"), [Jo, Wo, Xo, Zo] = ["ReadableStream", "Request", "Response", "Headers"].map(J), Yo = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Me(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Ee(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    if (Ie(e))
      return;
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (n = 0; n < i; n++)
      a = s[n], t.call(null, e[a], a, e);
  }
}
function bn(e, t) {
  if (Ie(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const ae = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, wn = (e) => !we(e) && e !== ae;
function $t() {
  const { caseless: e, skipUndefined: t } = wn(this) && this || {}, r = {}, n = (o, s) => {
    const i = e && bn(r, s) || s;
    Ke(r[i]) && Ke(o) ? r[i] = $t(r[i], o) : Ke(o) ? r[i] = $t({}, o) : Ee(o) ? r[i] = o.slice() : (!t || !we(o)) && (r[i] = o);
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && Me(arguments[o], n);
  return r;
}
const Qo = (e, t, r, { allOwnKeys: n } = {}) => (Me(t, (o, s) => {
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
}, cs = J("HTMLFormElement"), us = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), lr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), ls = J("RegExp"), vn = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Me(r, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (n[s] = i || o);
  }), Object.defineProperties(e, n);
}, fs = (e) => {
  vn(e, (t, r) => {
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
    if (Be(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (Ie(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = Ee(n) ? [] : {};
        return Me(n, (i, a) => {
          const c = r(i, o + 1);
          !we(c) && (s[a] = c);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, ys = J("AsyncFunction"), bs = (e) => e && (Be(e) || U(e)) && U(e.then) && U(e.catch), En = ((e, t) => e ? setImmediate : t ? ((r, n) => (ae.addEventListener("message", ({ source: o, data: s }) => {
  o === ae && s === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), ae.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  U(ae.postMessage)
), ws = typeof queueMicrotask < "u" ? queueMicrotask.bind(ae) : typeof process < "u" && process.nextTick || En, vs = (e) => e != null && U(e[st]), p = {
  isArray: Ee,
  isArrayBuffer: gn,
  isBuffer: Ie,
  isFormData: Go,
  isArrayBufferView: Uo,
  isString: Io,
  isNumber: yn,
  isBoolean: Bo,
  isObject: Be,
  isPlainObject: Ke,
  isEmptyObject: Mo,
  isReadableStream: Jo,
  isRequest: Wo,
  isResponse: Xo,
  isHeaders: Zo,
  isUndefined: we,
  isDate: Ho,
  isFile: qo,
  isBlob: zo,
  isRegExp: ls,
  isFunction: U,
  isStream: ko,
  isURLSearchParams: Ko,
  isTypedArray: ss,
  isFileList: Vo,
  forEach: Me,
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
  isHTMLForm: cs,
  hasOwnProperty: lr,
  hasOwnProp: lr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: vn,
  freezeMethods: fs,
  toObjectSet: ds,
  toCamelCase: us,
  noop: ps,
  toFiniteNumber: hs,
  findKey: bn,
  global: ae,
  isContextDefined: wn,
  isSpecCompliantForm: ms,
  toJSONObject: gs,
  isAsyncFn: ys,
  isThenable: bs,
  setImmediate: En,
  asap: ws,
  isIterable: vs
};
function O(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
p.inherits(O, Error, {
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
      config: p.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Tn = O.prototype, On = {};
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
Object.defineProperties(O, On);
Object.defineProperty(Tn, "isAxiosError", { value: !0 });
O.from = (e, t, r, n, o, s) => {
  const i = Object.create(Tn);
  p.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", c = t == null && e ? e.code : t;
  return O.call(i, a, c, r, n, o), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", s && Object.assign(i, s), i;
};
const Es = null;
function xt(e) {
  return p.isPlainObject(e) || p.isArray(e);
}
function Sn(e) {
  return p.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function fr(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Sn(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function Ts(e) {
  return p.isArray(e) && !e.some(xt);
}
const Os = p.toFlatObject(p, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ct(e, t, r) {
  if (!p.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = p.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, h) {
    return !p.isUndefined(h[g]);
  });
  const n = r.metaTokens, o = r.visitor || u, s = r.dots, i = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && p.isSpecCompliantForm(t);
  if (!p.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(d) {
    if (d === null) return "";
    if (p.isDate(d))
      return d.toISOString();
    if (p.isBoolean(d))
      return d.toString();
    if (!c && p.isBlob(d))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return p.isArrayBuffer(d) || p.isTypedArray(d) ? c && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, g, h) {
    let b = d;
    if (d && !h && typeof d == "object") {
      if (p.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), d = JSON.stringify(d);
      else if (p.isArray(d) && Ts(d) || (p.isFileList(d) || p.endsWith(g, "[]")) && (b = p.toArray(d)))
        return g = Sn(g), b.forEach(function(S, R) {
          !(p.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? fr([g], R, s) : i === null ? g : g + "[]",
            l(S)
          );
        }), !1;
    }
    return xt(d) ? !0 : (t.append(fr(h, g, s), l(d)), !1);
  }
  const f = [], m = Object.assign(Os, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: xt
  });
  function y(d, g) {
    if (!p.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(d), p.forEach(d, function(b, E) {
        (!(p.isUndefined(b) || b === null) && o.call(
          t,
          b,
          p.isString(E) ? E.trim() : E,
          g,
          m
        )) === !0 && y(b, g ? g.concat(E) : [E]);
      }), f.pop();
    }
  }
  if (!p.isObject(e))
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
  this._pairs = [], e && ct(e, this, t);
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
  p.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = p.isURLSearchParams(t) ? t.toString() : new qt(t, r).toString(n), s) {
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
    p.forEach(this.handlers, function(n) {
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
}, zt = typeof window < "u" && typeof document < "u", Pt = typeof navigator == "object" && navigator || void 0, xs = zt && (!Pt || ["ReactNative", "NativeScript", "NS"].indexOf(Pt.product) < 0), Ps = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cs = zt && window.location.href || "http://localhost", js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: zt,
  hasStandardBrowserEnv: xs,
  hasStandardBrowserWebWorkerEnv: Ps,
  navigator: Pt,
  origin: Cs
}, Symbol.toStringTag, { value: "Module" })), N = {
  ...js,
  ...$s
};
function Fs(e, t) {
  return ct(e, new N.classes.URLSearchParams(), {
    visitor: function(r, n, o, s) {
      return N.isNode && p.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Ls(e) {
  return p.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ns(e) {
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
    const a = Number.isFinite(+i), c = s >= r.length;
    return i = !i && p.isArray(o) ? o.length : i, c ? (p.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !a) : ((!o[i] || !p.isObject(o[i])) && (o[i] = []), t(r, n, o[i], s) && p.isArray(o[i]) && (o[i] = Ns(o[i])), !a);
  }
  if (p.isFormData(e) && p.isFunction(e.entries)) {
    const r = {};
    return p.forEachEntry(e, (n, o) => {
      t(Ls(n), o, r, 0);
    }), r;
  }
  return null;
}
function Ds(e, t, r) {
  if (p.isString(e))
    try {
      return (t || JSON.parse)(e), p.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const He = {
  transitional: Rn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = p.isObject(t);
    if (s && p.isHTMLForm(t) && (t = new FormData(t)), p.isFormData(t))
      return o ? JSON.stringify($n(t)) : t;
    if (p.isArrayBuffer(t) || p.isBuffer(t) || p.isStream(t) || p.isFile(t) || p.isBlob(t) || p.isReadableStream(t))
      return t;
    if (p.isArrayBufferView(t))
      return t.buffer;
    if (p.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Fs(t, this.formSerializer).toString();
      if ((a = p.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ct(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), Ds(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || He.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (p.isResponse(t) || p.isReadableStream(t))
      return t;
    if (t && p.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? O.from(a, O.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: N.classes.FormData,
    Blob: N.classes.Blob
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
p.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  He.headers[e] = {};
});
const Us = p.toObjectSet([
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
]), Is = (e) => {
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
function Je(e) {
  return e === !1 || e == null ? e : p.isArray(e) ? e.map(Je) : String(e);
}
function Bs(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Ms = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function yt(e, t, r, n, o) {
  if (p.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!p.isString(t)) {
    if (p.isString(n))
      return t.indexOf(n) !== -1;
    if (p.isRegExp(n))
      return n.test(t);
  }
}
function Hs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function qs(e, t) {
  const r = p.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, s, i) {
        return this[n].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
let I = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(a, c, l) {
      const u = Se(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = p.findKey(o, u);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = Je(a));
    }
    const i = (a, c) => p.forEach(a, (l, u) => s(l, u, c));
    if (p.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (p.isString(t) && (t = t.trim()) && !Ms(t))
      i(Is(t), r);
    else if (p.isObject(t) && p.isIterable(t)) {
      let a = {}, c, l;
      for (const u of t) {
        if (!p.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? p.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      i(a, r);
    } else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Se(t), t) {
      const n = p.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Bs(o);
        if (p.isFunction(r))
          return r.call(this, o, n);
        if (p.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Se(t), t) {
      const n = p.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || yt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = Se(i), i) {
        const a = p.findKey(n, i);
        a && (!r || yt(n, n[a], a, r)) && (delete n[a], o = !0);
      }
    }
    return p.isArray(t) ? t.forEach(s) : s(t), o;
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
    return p.forEach(this, (o, s) => {
      const i = p.findKey(n, s);
      if (i) {
        r[i] = Je(o), delete r[s];
        return;
      }
      const a = t ? Hs(s) : String(s).trim();
      a !== s && delete r[s], r[a] = Je(o), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return p.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && p.isArray(n) ? n.join(", ") : n);
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
    return p.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
I.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
p.reduceDescriptors(I.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
p.freezeMethods(I);
function bt(e, t) {
  const r = this || He, n = t || r, o = I.from(n.headers);
  let s = n.data;
  return p.forEach(e, function(a) {
    s = a.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function xn(e) {
  return !!(e && e.__CANCEL__);
}
function Te(e, t, r) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, r), this.name = "CanceledError";
}
p.inherits(Te, O, {
  __CANCEL__: !0
});
function Pn(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new O(
    "Request failed with status code " + r.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function zs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Vs(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = n[s];
    i || (i = l), r[o] = c, n[o] = l;
    let f = s, m = 0;
    for (; f !== o; )
      m += r[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), l - i < t)
      return;
    const y = u && l - u;
    return y ? Math.round(m * 1e3 / y) : void 0;
  };
}
function ks(e, t) {
  let r = 0, n = 1e3 / t, o, s;
  const i = (l, u = Date.now()) => {
    r = u, o = null, s && (clearTimeout(s), s = null), e(...l);
  };
  return [(...l) => {
    const u = Date.now(), f = u - r;
    f >= n ? i(l, u) : (o = l, s || (s = setTimeout(() => {
      s = null, i(o);
    }, n - f)));
  }, () => o && i(o)];
}
const Ye = (e, t, r = 3) => {
  let n = 0;
  const o = Vs(50, 250);
  return ks((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, c = i - n, l = o(c), u = i <= a;
    n = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && u ? (a - i) / l : void 0,
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
}, gr = (e) => (...t) => p.asap(() => e(...t)), Gs = N.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, N.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(N.origin),
  N.navigator && /(msie|trident)/i.test(N.navigator.userAgent)
) : () => !0, Ks = N.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, s, i) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      p.isNumber(r) && a.push(`expires=${new Date(r).toUTCString()}`), p.isString(n) && a.push(`path=${n}`), p.isString(o) && a.push(`domain=${o}`), s === !0 && a.push("secure"), p.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
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
const yr = (e) => e instanceof I ? { ...e } : e;
function le(e, t) {
  t = t || {};
  const r = {};
  function n(l, u, f, m) {
    return p.isPlainObject(l) && p.isPlainObject(u) ? p.merge.call({ caseless: m }, l, u) : p.isPlainObject(u) ? p.merge({}, u) : p.isArray(u) ? u.slice() : u;
  }
  function o(l, u, f, m) {
    if (p.isUndefined(u)) {
      if (!p.isUndefined(l))
        return n(void 0, l, f, m);
    } else return n(l, u, f, m);
  }
  function s(l, u) {
    if (!p.isUndefined(u))
      return n(void 0, u);
  }
  function i(l, u) {
    if (p.isUndefined(u)) {
      if (!p.isUndefined(l))
        return n(void 0, l);
    } else return n(void 0, u);
  }
  function a(l, u, f) {
    if (f in t)
      return n(l, u);
    if (f in e)
      return n(void 0, l);
  }
  const c = {
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
    headers: (l, u, f) => o(yr(l), yr(u), f, !0)
  };
  return p.forEach(Object.keys({ ...e, ...t }), function(u) {
    const f = c[u] || o, m = f(e[u], t[u], u);
    p.isUndefined(m) && f !== a || (r[u] = m);
  }), r;
}
const jn = (e) => {
  const t = le({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = t;
  if (t.headers = i = I.from(i), t.url = An(Cn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), p.isFormData(r)) {
    if (N.hasStandardBrowserEnv || N.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (p.isFunction(r.getHeaders)) {
      const c = r.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(c).forEach(([u, f]) => {
        l.includes(u.toLowerCase()) && i.set(u, f);
      });
    }
  }
  if (N.hasStandardBrowserEnv && (n && p.isFunction(n) && (n = n(t)), n || n !== !1 && Gs(t.url))) {
    const c = o && s && Ks.read(s);
    c && i.set(o, c);
  }
  return t;
}, Xs = typeof XMLHttpRequest < "u", Zs = Xs && function(e) {
  return new Promise(function(r, n) {
    const o = jn(e);
    let s = o.data;
    const i = I.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, f, m, y, d;
    function g() {
      y && y(), d && d(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function b() {
      if (!h)
        return;
      const S = I.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), P = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: S,
        config: e,
        request: h
      };
      Pn(function($) {
        r($), g();
      }, function($) {
        n($), g();
      }, P), h = null;
    }
    "onloadend" in h ? h.onloadend = b : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, h.onabort = function() {
      h && (n(new O("Request aborted", O.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(R) {
      const P = R && R.message ? R.message : "Network Error", A = new O(P, O.ERR_NETWORK, e, h);
      A.event = R || null, n(A), h = null;
    }, h.ontimeout = function() {
      let R = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const P = o.transitional || Rn;
      o.timeoutErrorMessage && (R = o.timeoutErrorMessage), n(new O(
        R,
        P.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        e,
        h
      )), h = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in h && p.forEach(i.toJSON(), function(R, P) {
      h.setRequestHeader(P, R);
    }), p.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), a && a !== "json" && (h.responseType = o.responseType), l && ([m, d] = Ye(l, !0), h.addEventListener("progress", m)), c && h.upload && ([f, y] = Ye(c), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (u = (S) => {
      h && (n(!S || S.type ? new Te(null, e, h) : S), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const E = zs(o.url);
    if (E && N.protocols.indexOf(E) === -1) {
      n(new O("Unsupported protocol " + E + ":", O.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(s || null);
  });
}, Ys = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const s = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        n.abort(u instanceof O ? u : new Te(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new O(`timeout ${t} of ms exceeded`, O.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(s) : l.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", s));
    const { signal: c } = n;
    return c.unsubscribe = () => p.asap(a), c;
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
  let s = 0, i, a = (c) => {
    i || (i = !0, n && n(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: l, value: u } = await o.next();
        if (l) {
          a(), c.close();
          return;
        }
        let f = u.byteLength;
        if (r) {
          let m = s += f;
          r(m);
        }
        c.enqueue(new Uint8Array(u));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(c) {
      return a(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, wr = 64 * 1024, { isFunction: ke } = p, ri = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(p.global), {
  ReadableStream: vr,
  TextEncoder: Er
} = p.global, Tr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ni = (e) => {
  e = p.merge.call({
    skipUndefined: !0
  }, ri, e);
  const { fetch: t, Request: r, Response: n } = e, o = t ? ke(t) : typeof fetch == "function", s = ke(r), i = ke(n);
  if (!o)
    return !1;
  const a = o && ke(vr), c = o && (typeof Er == "function" ? /* @__PURE__ */ ((d) => (g) => d.encode(g))(new Er()) : async (d) => new Uint8Array(await new r(d).arrayBuffer())), l = s && a && Tr(() => {
    let d = !1;
    const g = new r(N.origin, {
      body: new vr(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !g;
  }), u = i && a && Tr(() => p.isReadableStream(new n("").body)), f = {
    stream: u && ((d) => d.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !f[d] && (f[d] = (g, h) => {
      let b = g && g[d];
      if (b)
        return b.call(g);
      throw new O(`Response type '${d}' is not supported`, O.ERR_NOT_SUPPORT, h);
    });
  });
  const m = async (d) => {
    if (d == null)
      return 0;
    if (p.isBlob(d))
      return d.size;
    if (p.isSpecCompliantForm(d))
      return (await new r(N.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (p.isArrayBufferView(d) || p.isArrayBuffer(d))
      return d.byteLength;
    if (p.isURLSearchParams(d) && (d = d + ""), p.isString(d))
      return (await c(d)).byteLength;
  }, y = async (d, g) => {
    const h = p.toFiniteNumber(d.getContentLength());
    return h ?? m(g);
  };
  return async (d) => {
    let {
      url: g,
      method: h,
      data: b,
      signal: E,
      cancelToken: S,
      timeout: R,
      onDownloadProgress: P,
      onUploadProgress: A,
      responseType: $,
      headers: V,
      withCredentials: B = "same-origin",
      fetchOptions: H
    } = jn(d), v = t || fetch;
    $ = $ ? ($ + "").toLowerCase() : "text";
    let w = Ys([E, S && S.toAbortSignal()], R), T = null;
    const _ = w && w.unsubscribe && (() => {
      w.unsubscribe();
    });
    let k;
    try {
      if (A && l && h !== "get" && h !== "head" && (k = await y(V, b)) !== 0) {
        let oe = new r(g, {
          method: "POST",
          body: b,
          duplex: "half"
        }), me;
        if (p.isFormData(b) && (me = oe.headers.get("content-type")) && V.setContentType(me), oe.body) {
          const [mt, Ve] = mr(
            k,
            Ye(gr(A))
          );
          b = br(oe.body, wr, mt, Ve);
        }
      }
      p.isString(B) || (B = B ? "include" : "omit");
      const j = s && "credentials" in r.prototype, ee = {
        ...H,
        signal: w,
        method: h.toUpperCase(),
        headers: V.normalize().toJSON(),
        body: b,
        duplex: "half",
        credentials: j ? B : void 0
      };
      T = s && new r(g, ee);
      let X = await (s ? v(T, H) : v(g, ee));
      const cr = u && ($ === "stream" || $ === "response");
      if (u && (P || cr && _)) {
        const oe = {};
        ["status", "statusText", "headers"].forEach((ur) => {
          oe[ur] = X[ur];
        });
        const me = p.toFiniteNumber(X.headers.get("content-length")), [mt, Ve] = P && mr(
          me,
          Ye(gr(P), !0)
        ) || [];
        X = new n(
          br(X.body, wr, mt, () => {
            Ve && Ve(), _ && _();
          }),
          oe
        );
      }
      $ = $ || "text";
      let Oo = await f[p.findKey(f, $) || "text"](X, d);
      return !cr && _ && _(), await new Promise((oe, me) => {
        Pn(oe, me, {
          data: Oo,
          headers: I.from(X.headers),
          status: X.status,
          statusText: X.statusText,
          config: d,
          request: T
        });
      });
    } catch (j) {
      throw _ && _(), j && j.name === "TypeError" && /Load failed|fetch/i.test(j.message) ? Object.assign(
        new O("Network Error", O.ERR_NETWORK, d, T),
        {
          cause: j.cause || j
        }
      ) : O.from(j, j && j.code, d, T);
    }
  };
}, oi = /* @__PURE__ */ new Map(), Fn = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: o } = t, s = [
    n,
    o,
    r
  ];
  let i = s.length, a = i, c, l, u = oi;
  for (; a--; )
    c = s[a], l = u.get(c), l === void 0 && u.set(c, l = a ? /* @__PURE__ */ new Map() : ni(t)), u = l;
  return l;
};
Fn();
const Vt = {
  http: Es,
  xhr: Zs,
  fetch: {
    get: Fn
  }
};
p.forEach(Vt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Or = (e) => `- ${e}`, si = (e) => p.isFunction(e) || e === null || e === !1;
function ii(e, t) {
  e = p.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, o;
  const s = {};
  for (let i = 0; i < r; i++) {
    n = e[i];
    let a;
    if (o = n, !si(n) && (o = Vt[(a = String(n)).toLowerCase()], o === void 0))
      throw new O(`Unknown adapter '${a}'`);
    if (o && (p.isFunction(o) || (o = o.get(t))))
      break;
    s[a || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(s).map(
      ([c, l]) => `adapter ${c} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = r ? i.length > 1 ? `since :
` + i.map(Or).join(`
`) : " " + Or(i[0]) : "as no adapter specified";
    throw new O(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Ln = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ii,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Vt
};
function wt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Te(null, e);
}
function Sr(e) {
  return wt(e), e.headers = I.from(e.headers), e.data = bt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ln.getAdapter(e.adapter || He.adapter, e)(e).then(function(n) {
    return wt(e), n.data = bt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = I.from(n.headers), n;
  }, function(n) {
    return xn(n) || (wt(e), n && n.response && (n.response.data = bt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = I.from(n.response.headers))), Promise.reject(n);
  });
}
const Nn = "1.13.2", ut = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ut[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const _r = {};
ut.transitional = function(t, r, n) {
  function o(s, i) {
    return "[Axios v" + Nn + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new O(
        o(i, " has been removed" + (r ? " in " + r : "")),
        O.ERR_DEPRECATED
      );
    return r && !_r[i] && (_r[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
ut.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function ai(e, t, r) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = t[s];
    if (i) {
      const a = e[s], c = a === void 0 || i(a, s, e);
      if (c !== !0)
        throw new O("option " + s + " must be " + c, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new O("Unknown option " + s, O.ERR_BAD_OPTION);
  }
}
const We = {
  assertOptions: ai,
  validators: ut
}, Z = We.validators;
let ue = class {
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
    n !== void 0 && We.assertOptions(n, {
      silentJSONParsing: Z.transitional(Z.boolean),
      forcedJSONParsing: Z.transitional(Z.boolean),
      clarifyTimeoutError: Z.transitional(Z.boolean)
    }, !1), o != null && (p.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : We.assertOptions(o, {
      encode: Z.function,
      serialize: Z.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), We.assertOptions(r, {
      baseUrl: Z.spelling("baseURL"),
      withXsrfToken: Z.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = s && p.merge(
      s.common,
      s[r.method]
    );
    s && p.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete s[d];
      }
    ), r.headers = I.concat(i, s);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(r) === !1 || (c = c && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(g) {
      l.push(g.fulfilled, g.rejected);
    });
    let u, f = 0, m;
    if (!c) {
      const d = [Sr.bind(this), void 0];
      for (d.unshift(...a), d.push(...l), m = d.length, u = Promise.resolve(r); f < m; )
        u = u.then(d[f++], d[f++]);
      return u;
    }
    m = a.length;
    let y = r;
    for (; f < m; ) {
      const d = a[f++], g = a[f++];
      try {
        y = d(y);
      } catch (h) {
        g.call(this, h);
        break;
      }
    }
    try {
      u = Sr.call(this, y);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, m = l.length; f < m; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = le(this.defaults, t);
    const r = Cn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return An(r, t.params, t.paramsSerializer);
  }
};
p.forEach(["delete", "get", "head", "options"], function(t) {
  ue.prototype[t] = function(r, n) {
    return this.request(le(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
p.forEach(["post", "put", "patch"], function(t) {
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
  ue.prototype[t] = r(), ue.prototype[t + "Form"] = r(!0);
});
let ci = class Dn {
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
function ui(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function li(e) {
  return p.isObject(e) && e.isAxiosError === !0;
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
  const t = new ue(e), r = hn(ue.prototype.request, t);
  return p.extend(r, ue.prototype, t, { allOwnKeys: !0 }), p.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Un(le(e, o));
  }, r;
}
const F = Un(He);
F.Axios = ue;
F.CanceledError = Te;
F.CancelToken = ci;
F.isCancel = xn;
F.VERSION = Nn;
F.toFormData = ct;
F.AxiosError = O;
F.Cancel = F.CanceledError;
F.all = function(t) {
  return Promise.all(t);
};
F.spread = ui;
F.isAxiosError = li;
F.mergeConfig = le;
F.AxiosHeaders = I;
F.formToJSON = (e) => $n(p.isHTMLForm(e) ? new FormData(e) : e);
F.getAdapter = Ln.getAdapter;
F.HttpStatusCode = Ct;
F.default = F;
const {
  Axios: qf,
  AxiosError: zf,
  CanceledError: Vf,
  isCancel: In,
  CancelToken: kf,
  VERSION: Gf,
  all: Kf,
  Cancel: Jf,
  isAxiosError: Bn,
  spread: Wf,
  toFormData: Xf,
  AxiosHeaders: Zf,
  HttpStatusCode: Yf,
  formToJSON: Qf,
  getAdapter: ed,
  mergeConfig: fi
} = F;
var Mn = typeof global == "object" && global && global.Object === Object && global, di = typeof self == "object" && self && self.Object === Object && self, W = Mn || di || Function("return this")(), z = W.Symbol, Hn = Object.prototype, pi = Hn.hasOwnProperty, hi = Hn.toString, _e = z ? z.toStringTag : void 0;
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
var wi = "[object Null]", vi = "[object Undefined]", Ar = z ? z.toStringTag : void 0;
function de(e) {
  return e == null ? e === void 0 ? vi : wi : Ar && Ar in Object(e) ? mi(e) : bi(e);
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
var K = Array.isArray, Rr = z ? z.prototype : void 0, $r = Rr ? Rr.toString : void 0;
function zn(e) {
  if (typeof e == "string")
    return e;
  if (K(e))
    return qn(e, zn) + "";
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
function Vn(e) {
  return e;
}
var Pi = "[object AsyncFunction]", Ci = "[object Function]", ji = "[object GeneratorFunction]", Fi = "[object Proxy]";
function kt(e) {
  if (!M(e))
    return !1;
  var t = de(e);
  return t == Ci || t == ji || t == Pi || t == Fi;
}
var vt = W["__core-js_shared__"], Cr = (function() {
  var e = /[^.]+$/.exec(vt && vt.keys && vt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function Li(e) {
  return !!Cr && Cr in e;
}
var Ni = Function.prototype, Di = Ni.toString;
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
var Ui = /[\\^$.*+?()[\]{}|]/g, Ii = /^\[object .+?Constructor\]$/, Bi = Function.prototype, Mi = Object.prototype, Hi = Bi.toString, qi = Mi.hasOwnProperty, zi = RegExp(
  "^" + Hi.call(qi).replace(Ui, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Vi(e) {
  if (!M(e) || Li(e))
    return !1;
  var t = kt(e) ? zi : Ii;
  return t.test(pe(e));
}
function ki(e, t) {
  return e?.[t];
}
function he(e, t) {
  var r = ki(e, t);
  return Vi(r) ? r : void 0;
}
var jt = he(W, "WeakMap"), jr = Object.create, Gi = /* @__PURE__ */ (function() {
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
function kn(e, t) {
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
var Qe = (function() {
  try {
    var e = he(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), Qi = Qe ? function(e, t) {
  return Qe(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Yi(t),
    writable: !0
  });
} : Vn, Gn = Zi(Qi);
function ea(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var ta = 9007199254740991, ra = /^(?:0|[1-9]\d*)$/;
function Gt(e, t) {
  var r = typeof e;
  return t = t ?? ta, !!t && (r == "number" || r != "symbol" && ra.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Kt(e, t, r) {
  t == "__proto__" && Qe ? Qe(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function qe(e, t) {
  return e === t || e !== e && t !== t;
}
var na = Object.prototype, oa = na.hasOwnProperty;
function Jt(e, t, r) {
  var n = e[t];
  (!(oa.call(e, t) && qe(n, r)) || r === void 0 && !(t in e)) && Kt(e, t, r);
}
function Oe(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var a = t[s], c = void 0;
    c === void 0 && (c = e[a]), o ? Kt(r, a, c) : Jt(r, a, c);
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
  return Gn(Kn(e, t, Vn), e + "");
}
var ia = 9007199254740991;
function Jn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ia;
}
function ft(e) {
  return e != null && Jn(e.length) && !kt(e);
}
function aa(e, t, r) {
  if (!M(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? ft(r) && Gt(t, r.length) : n == "string" && t in r) ? qe(r[t], e) : !1;
}
function ca(e) {
  return sa(function(t, r) {
    var n = -1, o = r.length, s = o > 1 ? r[o - 1] : void 0, i = o > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (o--, s) : void 0, i && aa(r[0], r[1], i) && (s = o < 3 ? void 0 : s, o = 1), t = Object(t); ++n < o; ) {
      var a = r[n];
      a && e(t, a, n, s);
    }
    return t;
  });
}
var ua = Object.prototype;
function Wt(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ua;
  return e === r;
}
function la(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var fa = "[object Arguments]";
function Lr(e) {
  return Q(e) && de(e) == fa;
}
var Wn = Object.prototype, da = Wn.hasOwnProperty, pa = Wn.propertyIsEnumerable, et = Lr(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Lr : function(e) {
  return Q(e) && da.call(e, "callee") && !pa.call(e, "callee");
};
function ha() {
  return !1;
}
var Xn = typeof exports == "object" && exports && !exports.nodeType && exports, Nr = Xn && typeof module == "object" && module && !module.nodeType && module, ma = Nr && Nr.exports === Xn, Dr = ma ? W.Buffer : void 0, ga = Dr ? Dr.isBuffer : void 0, Ce = ga || ha, ya = "[object Arguments]", ba = "[object Array]", wa = "[object Boolean]", va = "[object Date]", Ea = "[object Error]", Ta = "[object Function]", Oa = "[object Map]", Sa = "[object Number]", _a = "[object Object]", Aa = "[object RegExp]", Ra = "[object Set]", $a = "[object String]", xa = "[object WeakMap]", Pa = "[object ArrayBuffer]", Ca = "[object DataView]", ja = "[object Float32Array]", Fa = "[object Float64Array]", La = "[object Int8Array]", Na = "[object Int16Array]", Da = "[object Int32Array]", Ua = "[object Uint8Array]", Ia = "[object Uint8ClampedArray]", Ba = "[object Uint16Array]", Ma = "[object Uint32Array]", C = {};
C[ja] = C[Fa] = C[La] = C[Na] = C[Da] = C[Ua] = C[Ia] = C[Ba] = C[Ma] = !0;
C[ya] = C[ba] = C[Pa] = C[wa] = C[Ca] = C[va] = C[Ea] = C[Ta] = C[Oa] = C[Sa] = C[_a] = C[Aa] = C[Ra] = C[$a] = C[xa] = !1;
function Ha(e) {
  return Q(e) && Jn(e.length) && !!C[de(e)];
}
function Xt(e) {
  return function(t) {
    return e(t);
  };
}
var Zn = typeof exports == "object" && exports && !exports.nodeType && exports, xe = Zn && typeof module == "object" && module && !module.nodeType && module, qa = xe && xe.exports === Zn, Et = qa && Mn.process, ve = (function() {
  try {
    var e = xe && xe.require && xe.require("util").types;
    return e || Et && Et.binding && Et.binding("util");
  } catch {
  }
})(), Ur = ve && ve.isTypedArray, Zt = Ur ? Xt(Ur) : Ha, za = Object.prototype, Va = za.hasOwnProperty;
function Yn(e, t) {
  var r = K(e), n = !r && et(e), o = !r && !n && Ce(e), s = !r && !n && !o && Zt(e), i = r || n || o || s, a = i ? la(e.length, String) : [], c = a.length;
  for (var l in e)
    (t || Va.call(e, l)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Gt(l, c))) && a.push(l);
  return a;
}
function Qn(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ka = Qn(Object.keys, Object), Ga = Object.prototype, Ka = Ga.hasOwnProperty;
function Ja(e) {
  if (!Wt(e))
    return ka(e);
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
function ze(e) {
  return ft(e) ? Yn(e, !0) : Ya(e);
}
var Qa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ec = /^\w*$/;
function tc(e, t) {
  if (K(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || lt(e) ? !0 : ec.test(e) || !Qa.test(e) || t != null && e in Object(t);
}
var je = he(Object, "create");
function rc() {
  this.__data__ = je ? je(null) : {}, this.size = 0;
}
function nc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var oc = "__lodash_hash_undefined__", sc = Object.prototype, ic = sc.hasOwnProperty;
function ac(e) {
  var t = this.__data__;
  if (je) {
    var r = t[e];
    return r === oc ? void 0 : r;
  }
  return ic.call(t, e) ? t[e] : void 0;
}
var cc = Object.prototype, uc = cc.hasOwnProperty;
function lc(e) {
  var t = this.__data__;
  return je ? t[e] !== void 0 : uc.call(t, e);
}
var fc = "__lodash_hash_undefined__";
function dc(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = je && t === void 0 ? fc : t, this;
}
function fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fe.prototype.clear = rc;
fe.prototype.delete = nc;
fe.prototype.get = ac;
fe.prototype.has = lc;
fe.prototype.set = dc;
function pc() {
  this.__data__ = [], this.size = 0;
}
function dt(e, t) {
  for (var r = e.length; r--; )
    if (qe(e[r][0], t))
      return r;
  return -1;
}
var hc = Array.prototype, mc = hc.splice;
function gc(e) {
  var t = this.__data__, r = dt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : mc.call(t, r, 1), --this.size, !0;
}
function yc(e) {
  var t = this.__data__, r = dt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function bc(e) {
  return dt(this.__data__, e) > -1;
}
function wc(e, t) {
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
re.prototype.clear = pc;
re.prototype.delete = gc;
re.prototype.get = yc;
re.prototype.has = bc;
re.prototype.set = wc;
var Fe = he(W, "Map");
function vc() {
  this.size = 0, this.__data__ = {
    hash: new fe(),
    map: new (Fe || re)(),
    string: new fe()
  };
}
function Ec(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function pt(e, t) {
  var r = e.__data__;
  return Ec(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Tc(e) {
  var t = pt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Oc(e) {
  return pt(this, e).get(e);
}
function Sc(e) {
  return pt(this, e).has(e);
}
function _c(e, t) {
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
ne.prototype.clear = vc;
ne.prototype.delete = Tc;
ne.prototype.get = Oc;
ne.prototype.has = Sc;
ne.prototype.set = _c;
var Ac = "Expected a function";
function Qt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ac);
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
var Rc = 500;
function $c(e) {
  var t = Qt(e, function(n) {
    return r.size === Rc && r.clear(), n;
  }), r = t.cache;
  return t;
}
var xc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pc = /\\(\\)?/g, Cc = $c(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(xc, function(r, n, o, s) {
    t.push(o ? s.replace(Pc, "$1") : n || r);
  }), t;
});
function jc(e) {
  return e == null ? "" : zn(e);
}
function ht(e, t) {
  return K(e) ? e : tc(e, t) ? [e] : Cc(jc(e));
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
function tt(e, t, r) {
  var n = e == null ? void 0 : eo(e, t);
  return n === void 0 ? r : n;
}
function tr(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Ir = z ? z.isConcatSpreadable : void 0;
function Fc(e) {
  return K(e) || et(e) || !!(Ir && e && e[Ir]);
}
function Lc(e, t, r, n, o) {
  var s = -1, i = e.length;
  for (r || (r = Fc), o || (o = []); ++s < i; ) {
    var a = e[s];
    r(a) ? tr(o, a) : o[o.length] = a;
  }
  return o;
}
function Nc(e) {
  var t = e == null ? 0 : e.length;
  return t ? Lc(e) : [];
}
function Dc(e) {
  return Gn(Kn(e, void 0, Nc), e + "");
}
var rr = Qn(Object.getPrototypeOf, Object), Uc = "[object Object]", Ic = Function.prototype, Bc = Object.prototype, to = Ic.toString, Mc = Bc.hasOwnProperty, Hc = to.call(Object);
function ro(e) {
  if (!Q(e) || de(e) != Uc)
    return !1;
  var t = rr(e);
  if (t === null)
    return !0;
  var r = Mc.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && to.call(r) == Hc;
}
function qc(e, t, r) {
  var n = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), r = r > o ? o : r, r < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(o); ++n < o; )
    s[n] = e[n + t];
  return s;
}
function zc() {
  this.__data__ = new re(), this.size = 0;
}
function Vc(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function kc(e) {
  return this.__data__.get(e);
}
function Gc(e) {
  return this.__data__.has(e);
}
var Kc = 200;
function Jc(e, t) {
  var r = this.__data__;
  if (r instanceof re) {
    var n = r.__data__;
    if (!Fe || n.length < Kc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ne(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Y(e) {
  var t = this.__data__ = new re(e);
  this.size = t.size;
}
Y.prototype.clear = zc;
Y.prototype.delete = Vc;
Y.prototype.get = kc;
Y.prototype.has = Gc;
Y.prototype.set = Jc;
function Wc(e, t) {
  return e && Oe(t, Yt(t), e);
}
function Xc(e, t) {
  return e && Oe(t, ze(t), e);
}
var no = typeof exports == "object" && exports && !exports.nodeType && exports, Br = no && typeof module == "object" && module && !module.nodeType && module, Zc = Br && Br.exports === no, Mr = Zc ? W.Buffer : void 0, Hr = Mr ? Mr.allocUnsafe : void 0;
function oo(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Hr ? Hr(r) : new e.constructor(r);
  return e.copy(n), n;
}
function Yc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[o++] = i);
  }
  return s;
}
function so() {
  return [];
}
var Qc = Object.prototype, eu = Qc.propertyIsEnumerable, qr = Object.getOwnPropertySymbols, nr = qr ? function(e) {
  return e == null ? [] : (e = Object(e), Yc(qr(e), function(t) {
    return eu.call(e, t);
  }));
} : so;
function tu(e, t) {
  return Oe(e, nr(e), t);
}
var ru = Object.getOwnPropertySymbols, io = ru ? function(e) {
  for (var t = []; e; )
    tr(t, nr(e)), e = rr(e);
  return t;
} : so;
function nu(e, t) {
  return Oe(e, io(e), t);
}
function ao(e, t, r) {
  var n = t(e);
  return K(e) ? n : tr(n, r(e));
}
function Ft(e) {
  return ao(e, Yt, nr);
}
function co(e) {
  return ao(e, ze, io);
}
var Lt = he(W, "DataView"), Nt = he(W, "Promise"), Dt = he(W, "Set"), zr = "[object Map]", ou = "[object Object]", Vr = "[object Promise]", kr = "[object Set]", Gr = "[object WeakMap]", Kr = "[object DataView]", su = pe(Lt), iu = pe(Fe), au = pe(Nt), cu = pe(Dt), uu = pe(jt), G = de;
(Lt && G(new Lt(new ArrayBuffer(1))) != Kr || Fe && G(new Fe()) != zr || Nt && G(Nt.resolve()) != Vr || Dt && G(new Dt()) != kr || jt && G(new jt()) != Gr) && (G = function(e) {
  var t = de(e), r = t == ou ? e.constructor : void 0, n = r ? pe(r) : "";
  if (n)
    switch (n) {
      case su:
        return Kr;
      case iu:
        return zr;
      case au:
        return Vr;
      case cu:
        return kr;
      case uu:
        return Gr;
    }
  return t;
});
var lu = Object.prototype, fu = lu.hasOwnProperty;
function du(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && fu.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var rt = W.Uint8Array;
function or(e) {
  var t = new e.constructor(e.byteLength);
  return new rt(t).set(new rt(e)), t;
}
function pu(e, t) {
  var r = t ? or(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var hu = /\w*$/;
function mu(e) {
  var t = new e.constructor(e.source, hu.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Jr = z ? z.prototype : void 0, Wr = Jr ? Jr.valueOf : void 0;
function gu(e) {
  return Wr ? Object(Wr.call(e)) : {};
}
function uo(e, t) {
  var r = t ? or(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var yu = "[object Boolean]", bu = "[object Date]", wu = "[object Map]", vu = "[object Number]", Eu = "[object RegExp]", Tu = "[object Set]", Ou = "[object String]", Su = "[object Symbol]", _u = "[object ArrayBuffer]", Au = "[object DataView]", Ru = "[object Float32Array]", $u = "[object Float64Array]", xu = "[object Int8Array]", Pu = "[object Int16Array]", Cu = "[object Int32Array]", ju = "[object Uint8Array]", Fu = "[object Uint8ClampedArray]", Lu = "[object Uint16Array]", Nu = "[object Uint32Array]";
function Du(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case _u:
      return or(e);
    case yu:
    case bu:
      return new n(+e);
    case Au:
      return pu(e, r);
    case Ru:
    case $u:
    case xu:
    case Pu:
    case Cu:
    case ju:
    case Fu:
    case Lu:
    case Nu:
      return uo(e, r);
    case wu:
      return new n();
    case vu:
    case Ou:
      return new n(e);
    case Eu:
      return mu(e);
    case Tu:
      return new n();
    case Su:
      return gu(e);
  }
}
function lo(e) {
  return typeof e.constructor == "function" && !Wt(e) ? Gi(rr(e)) : {};
}
var Uu = "[object Map]";
function Iu(e) {
  return Q(e) && G(e) == Uu;
}
var Xr = ve && ve.isMap, Bu = Xr ? Xt(Xr) : Iu, Mu = "[object Set]";
function Hu(e) {
  return Q(e) && G(e) == Mu;
}
var Zr = ve && ve.isSet, qu = Zr ? Xt(Zr) : Hu, zu = 1, Vu = 2, ku = 4, fo = "[object Arguments]", Gu = "[object Array]", Ku = "[object Boolean]", Ju = "[object Date]", Wu = "[object Error]", po = "[object Function]", Xu = "[object GeneratorFunction]", Zu = "[object Map]", Yu = "[object Number]", ho = "[object Object]", Qu = "[object RegExp]", el = "[object Set]", tl = "[object String]", rl = "[object Symbol]", nl = "[object WeakMap]", ol = "[object ArrayBuffer]", sl = "[object DataView]", il = "[object Float32Array]", al = "[object Float64Array]", cl = "[object Int8Array]", ul = "[object Int16Array]", ll = "[object Int32Array]", fl = "[object Uint8Array]", dl = "[object Uint8ClampedArray]", pl = "[object Uint16Array]", hl = "[object Uint32Array]", x = {};
x[fo] = x[Gu] = x[ol] = x[sl] = x[Ku] = x[Ju] = x[il] = x[al] = x[cl] = x[ul] = x[ll] = x[Zu] = x[Yu] = x[ho] = x[Qu] = x[el] = x[tl] = x[rl] = x[fl] = x[dl] = x[pl] = x[hl] = !0;
x[Wu] = x[po] = x[nl] = !1;
function Pe(e, t, r, n, o, s) {
  var i, a = t & zu, c = t & Vu, l = t & ku;
  if (r && (i = o ? r(e, n, o, s) : r(e)), i !== void 0)
    return i;
  if (!M(e))
    return e;
  var u = K(e);
  if (u) {
    if (i = du(e), !a)
      return kn(e, i);
  } else {
    var f = G(e), m = f == po || f == Xu;
    if (Ce(e))
      return oo(e, a);
    if (f == ho || f == fo || m && !o) {
      if (i = c || m ? {} : lo(e), !a)
        return c ? nu(e, Xc(i, e)) : tu(e, Wc(i, e));
    } else {
      if (!x[f])
        return o ? e : {};
      i = Du(e, f, a);
    }
  }
  s || (s = new Y());
  var y = s.get(e);
  if (y)
    return y;
  s.set(e, i), qu(e) ? e.forEach(function(h) {
    i.add(Pe(h, t, r, h, e, s));
  }) : Bu(e) && e.forEach(function(h, b) {
    i.set(b, Pe(h, t, r, b, e, s));
  });
  var d = l ? c ? co : Ft : c ? ze : Yt, g = u ? void 0 : d(e);
  return ea(g || e, function(h, b) {
    g && (b = h, h = e[b]), Jt(i, b, Pe(h, t, r, b, e, s));
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
function wl(e) {
  return this.__data__.has(e);
}
function nt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ne(); ++t < r; )
    this.add(e[t]);
}
nt.prototype.add = nt.prototype.push = bl;
nt.prototype.has = wl;
function vl(e, t) {
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
  var i = r & Tl, a = e.length, c = t.length;
  if (a != c && !(i && c > a))
    return !1;
  var l = s.get(e), u = s.get(t);
  if (l && u)
    return l == t && u == e;
  var f = -1, m = !0, y = r & Ol ? new nt() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < a; ) {
    var d = e[f], g = t[f];
    if (n)
      var h = i ? n(g, d, f, t, e, s) : n(d, g, f, e, t, s);
    if (h !== void 0) {
      if (h)
        continue;
      m = !1;
      break;
    }
    if (y) {
      if (!vl(t, function(b, E) {
        if (!El(y, E) && (d === b || o(d, b, r, n, s)))
          return y.push(E);
      })) {
        m = !1;
        break;
      }
    } else if (!(d === g || o(d, g, r, n, s))) {
      m = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), m;
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
var Al = 1, Rl = 2, $l = "[object Boolean]", xl = "[object Date]", Pl = "[object Error]", Cl = "[object Map]", jl = "[object Number]", Fl = "[object RegExp]", Ll = "[object Set]", Nl = "[object String]", Dl = "[object Symbol]", Ul = "[object ArrayBuffer]", Il = "[object DataView]", Yr = z ? z.prototype : void 0, Tt = Yr ? Yr.valueOf : void 0;
function Bl(e, t, r, n, o, s, i) {
  switch (r) {
    case Il:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ul:
      return !(e.byteLength != t.byteLength || !s(new rt(e), new rt(t)));
    case $l:
    case xl:
    case jl:
      return qe(+e, +t);
    case Pl:
      return e.name == t.name && e.message == t.message;
    case Fl:
    case Nl:
      return e == t + "";
    case Cl:
      var a = Sl;
    case Ll:
      var c = n & Al;
      if (a || (a = _l), e.size != t.size && !c)
        return !1;
      var l = i.get(e);
      if (l)
        return l == t;
      n |= Rl, i.set(e, t);
      var u = mo(a(e), a(t), n, o, s, i);
      return i.delete(e), u;
    case Dl:
      if (Tt)
        return Tt.call(e) == Tt.call(t);
  }
  return !1;
}
var Ml = 1, Hl = Object.prototype, ql = Hl.hasOwnProperty;
function zl(e, t, r, n, o, s) {
  var i = r & Ml, a = Ft(e), c = a.length, l = Ft(t), u = l.length;
  if (c != u && !i)
    return !1;
  for (var f = c; f--; ) {
    var m = a[f];
    if (!(i ? m in t : ql.call(t, m)))
      return !1;
  }
  var y = s.get(e), d = s.get(t);
  if (y && d)
    return y == t && d == e;
  var g = !0;
  s.set(e, t), s.set(t, e);
  for (var h = i; ++f < c; ) {
    m = a[f];
    var b = e[m], E = t[m];
    if (n)
      var S = i ? n(E, b, m, t, e, s) : n(b, E, m, e, t, s);
    if (!(S === void 0 ? b === E || o(b, E, r, n, s) : S)) {
      g = !1;
      break;
    }
    h || (h = m == "constructor");
  }
  if (g && !h) {
    var R = e.constructor, P = t.constructor;
    R != P && "constructor" in e && "constructor" in t && !(typeof R == "function" && R instanceof R && typeof P == "function" && P instanceof P) && (g = !1);
  }
  return s.delete(e), s.delete(t), g;
}
var Vl = 1, Qr = "[object Arguments]", en = "[object Array]", Ge = "[object Object]", kl = Object.prototype, tn = kl.hasOwnProperty;
function Gl(e, t, r, n, o, s) {
  var i = K(e), a = K(t), c = i ? en : G(e), l = a ? en : G(t);
  c = c == Qr ? Ge : c, l = l == Qr ? Ge : l;
  var u = c == Ge, f = l == Ge, m = c == l;
  if (m && Ce(e)) {
    if (!Ce(t))
      return !1;
    i = !0, u = !1;
  }
  if (m && !u)
    return s || (s = new Y()), i || Zt(e) ? mo(e, t, r, n, o, s) : Bl(e, t, c, r, n, o, s);
  if (!(r & Vl)) {
    var y = u && tn.call(e, "__wrapped__"), d = f && tn.call(t, "__wrapped__");
    if (y || d) {
      var g = y ? e.value() : e, h = d ? t.value() : t;
      return s || (s = new Y()), o(g, h, r, n, s);
    }
  }
  return m ? (s || (s = new Y()), zl(e, t, r, n, o, s)) : !1;
}
function go(e, t, r, n, o) {
  return e === t ? !0 : e == null || t == null || !Q(e) && !Q(t) ? e !== e && t !== t : Gl(e, t, r, n, go, o);
}
function Kl(e) {
  return function(t, r, n) {
    for (var o = -1, s = Object(t), i = n(t), a = i.length; a--; ) {
      var c = i[++o];
      if (r(s[c], c, s) === !1)
        break;
    }
    return t;
  };
}
var Jl = Kl(), Ot = function() {
  return W.Date.now();
}, Wl = "Expected a function", Xl = Math.max, Zl = Math.min;
function Yl(e, t, r) {
  var n, o, s, i, a, c, l = 0, u = !1, f = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Wl);
  t = Pr(t) || 0, M(r) && (u = !0, f = "maxWait" in r, s = f ? Xl(Pr(r.maxWait) || 0, t) : s, m = "trailing" in r ? !0 : m);
  function y(A) {
    var $ = n, V = o;
    return n = o = void 0, l = A, i = e.apply(V, $), i;
  }
  function d(A) {
    return l = A, a = setTimeout(b, t), u ? y(A) : i;
  }
  function g(A) {
    var $ = A - c, V = A - l, B = t - $;
    return f ? Zl(B, s - V) : B;
  }
  function h(A) {
    var $ = A - c, V = A - l;
    return c === void 0 || $ >= t || $ < 0 || f && V >= s;
  }
  function b() {
    var A = Ot();
    if (h(A))
      return E(A);
    a = setTimeout(b, g(A));
  }
  function E(A) {
    return a = void 0, m && n ? y(A) : (n = o = void 0, i);
  }
  function S() {
    a !== void 0 && clearTimeout(a), l = 0, n = c = o = a = void 0;
  }
  function R() {
    return a === void 0 ? i : E(Ot());
  }
  function P() {
    var A = Ot(), $ = h(A);
    if (n = arguments, o = this, c = A, $) {
      if (a === void 0)
        return d(c);
      if (f)
        return clearTimeout(a), a = setTimeout(b, t), y(c);
    }
    return a === void 0 && (a = setTimeout(b, t)), i;
  }
  return P.cancel = S, P.flush = R, P;
}
function Ut(e, t, r) {
  (r !== void 0 && !qe(e[t], r) || r === void 0 && !(t in e)) && Kt(e, t, r);
}
function Ql(e) {
  return Q(e) && ft(e);
}
function It(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function ef(e) {
  return Oe(e, ze(e));
}
function tf(e, t, r, n, o, s, i) {
  var a = It(e, r), c = It(t, r), l = i.get(c);
  if (l) {
    Ut(e, r, l);
    return;
  }
  var u = s ? s(a, c, r + "", e, t, i) : void 0, f = u === void 0;
  if (f) {
    var m = K(c), y = !m && Ce(c), d = !m && !y && Zt(c);
    u = c, m || y || d ? K(a) ? u = a : Ql(a) ? u = kn(a) : y ? (f = !1, u = oo(c, !0)) : d ? (f = !1, u = uo(c, !0)) : u = [] : ro(c) || et(c) ? (u = a, et(a) ? u = ef(a) : (!M(a) || kt(a)) && (u = lo(c))) : f = !1;
  }
  f && (i.set(c, u), o(u, c, n, s, i), i.delete(c)), Ut(e, r, u);
}
function yo(e, t, r, n, o) {
  e !== t && Jl(t, function(s, i) {
    if (o || (o = new Y()), M(s))
      tf(e, t, i, r, yo, n, o);
    else {
      var a = n ? n(It(e, i), s, i + "", e, t, o) : void 0;
      a === void 0 && (a = s), Ut(e, i, a);
    }
  }, ze);
}
function rf(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function nf(e, t) {
  return t.length < 2 ? e : eo(e, qc(t, 0, -1));
}
function of(e, t) {
  return go(e, t);
}
var Bt = ca(function(e, t, r) {
  yo(e, t, r);
}), sf = Object.prototype, af = sf.hasOwnProperty;
function cf(e, t) {
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
function uf(e) {
  return ro(e) ? void 0 : e;
}
var lf = 1, ff = 2, df = 4, rn = Dc(function(e, t) {
  var r = {};
  if (e == null)
    return r;
  var n = !1;
  t = qn(t, function(s) {
    return s = ht(s, e), n || (n = s.length > 1), s;
  }), Oe(e, co(e), r), n && (r = Pe(r, lf | ff | df, uf));
  for (var o = t.length; o--; )
    cf(r, t[o]);
  return r;
});
function pf(e, t, r, n) {
  if (!M(e))
    return e;
  t = ht(t, e);
  for (var o = -1, s = t.length, i = s - 1, a = e; a != null && ++o < s; ) {
    var c = er(t[o]), l = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (o != i) {
      var u = a[c];
      l = void 0, l === void 0 && (l = M(u) ? u : Gt(t[o + 1]) ? [] : {});
    }
    Jt(a, c, l), a = a[c];
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
let Le = F.create(), wo = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, vo = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const ot = {}, te = {
  get: (e, t = {}, r = {}) => Re(Ae("get", e, t, r)),
  post: (e, t = {}, r = {}) => Re(Ae("post", e, t, r)),
  patch: (e, t = {}, r = {}) => Re(Ae("patch", e, t, r)),
  put: (e, t = {}, r = {}) => Re(Ae("put", e, t, r)),
  delete: (e, t = {}, r = {}) => Re(Ae("delete", e, t, r)),
  use(e) {
    return Le = e, te;
  },
  axios() {
    return Le;
  },
  fingerprintRequestsUsing(e) {
    return wo = e === null ? () => null : e, te;
  },
  determineSuccessUsing(e) {
    return vo = e, te;
  }
}, Ae = (e, t, r, n) => ({
  url: t,
  method: e,
  ...n,
  ...["get", "delete"].includes(e) ? {
    params: Bt({}, r, n?.params)
  } : {
    data: Bt({}, r, n?.data)
  }
}), Re = (e = {}) => {
  const t = [
    yf,
    wf,
    vf
  ].reduce((r, n) => n(r), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), Le.request(t).then(async (r) => {
    t.precognitive && nn(r);
    const n = r.status;
    let o = r;
    return t.precognitive && t.onPrecognitionSuccess && vo(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && bf(n) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (on(t, n) ?? ((i) => i))(o) ?? o;
  }, (r) => Ef(r) ? Promise.reject(r) : (t.precognitive && nn(r.response), (on(t, r.response.status) ?? ((o, s) => Promise.reject(s)))(r.response, r))).finally(t.onFinish ?? (() => null)));
}, yf = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? Le.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? wo(e, Le) : e.fingerprint,
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
}, bf = (e) => e >= 200 && e < 300, wf = (e) => (typeof e.fingerprint != "string" || (ot[e.fingerprint]?.abort(), delete ot[e.fingerprint]), e), vf = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (ot[e.fingerprint] = new AbortController(), {
  ...e,
  signal: ot[e.fingerprint].signal
}), nn = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, Ef = (e) => !Bn(e) || typeof e.response?.status != "number" || In(e), on = (e, t) => ({
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
  const s = (v) => v !== o ? (o = v, r.validatingChanged) : [];
  let i = [];
  const a = (v) => {
    const w = [...new Set(v)];
    return i.length !== w.length || !w.every((T) => i.includes(T)) ? (i = w, r.validatedChanged) : [];
  }, c = () => i.filter((v) => typeof f[v] > "u");
  let l = [];
  const u = (v) => {
    const w = [...new Set(v)];
    return l.length !== w.length || !w.every((T) => l.includes(T)) ? (l = w, r.touchedChanged) : [];
  };
  let f = {};
  const m = (v) => {
    const w = _f(v);
    return of(f, w) ? [] : (f = w, r.errorsChanged);
  }, y = (v) => {
    const w = { ...f };
    return delete w[Xe(v)], m(w);
  }, d = () => Object.keys(f).length > 0;
  let g = 1500;
  const h = (v) => {
    g = v, A.cancel(), A = P();
  };
  let b = t, E = null, S = [], R = null;
  const P = () => Yl((v) => {
    e({
      get: (w, T = {}, _ = {}) => te.get(w, B(T), $(_, v, T)),
      post: (w, T = {}, _ = {}) => te.post(w, B(T), $(_, v, T)),
      patch: (w, T = {}, _ = {}) => te.patch(w, B(T), $(_, v, T)),
      put: (w, T = {}, _ = {}) => te.put(w, B(T), $(_, v, T)),
      delete: (w, T = {}, _ = {}) => te.delete(w, B(T), $(_, v, T))
    }).catch((w) => In(w) || Bn(w) && w.response?.status === 422 ? null : Promise.reject(w));
  }, g, { leading: !0, trailing: !0 });
  let A = P();
  const $ = (v, w, T = {}) => {
    const _ = {
      ...v,
      ...w
    }, k = Array.from(_.only ?? _.validate ?? l);
    return {
      ...w,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...fi(v, w),
      only: k,
      timeout: _.timeout ?? 5e3,
      onValidationError: (j, ee) => ([
        ...a([...i, ...k]),
        ...m(Bt(rn({ ...f }, k), j.data.errors))
      ].forEach((X) => X()), _.onValidationError ? _.onValidationError(j, ee) : Promise.reject(ee)),
      onSuccess: (j) => (a([...i, ...k]).forEach((ee) => ee()), _.onSuccess ? _.onSuccess(j) : j),
      onPrecognitionSuccess: (j) => ([
        ...a([...i, ...k]),
        ...m(rn({ ...f }, k))
      ].forEach((ee) => ee()), _.onPrecognitionSuccess ? _.onPrecognitionSuccess(j) : j),
      onBefore: () => _.onBeforeValidation && _.onBeforeValidation({ data: T, touched: l }, { data: b, touched: S }) === !1 || (_.onBefore || (() => !0))() === !1 ? !1 : (R = l, E = T, !0),
      onStart: () => {
        s(!0).forEach((j) => j()), (_.onStart ?? (() => null))();
      },
      onFinish: () => {
        s(!1).forEach((j) => j()), S = R, b = E, R = E = null, (_.onFinish ?? (() => null))();
      }
    };
  }, V = (v, w, T) => {
    if (typeof v > "u") {
      const _ = Array.from(T?.only ?? T?.validate ?? []);
      u([...l, ..._]).forEach((k) => k()), A(T ?? {});
      return;
    }
    if (sr(w) && !n) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    v = Xe(v), tt(b, v) !== w && (u([v, ...l]).forEach((_) => _()), A(T ?? {}));
  }, B = (v) => n === !1 ? Mt(v) : v, H = {
    touched: () => l,
    validate(v, w, T) {
      return typeof v == "object" && !("target" in v) && (T = v, v = w = void 0), V(v, w, T), H;
    },
    touch(v) {
      const w = Array.isArray(v) ? v : [Xe(v)];
      return u([...l, ...w]).forEach((T) => T()), H;
    },
    validating: () => o,
    valid: c,
    errors: () => f,
    hasErrors: d,
    setErrors(v) {
      return m(v).forEach((w) => w()), H;
    },
    forgetError(v) {
      return y(v).forEach((w) => w()), H;
    },
    reset(...v) {
      if (v.length === 0)
        u([]).forEach((w) => w());
      else {
        const w = [...l];
        v.forEach((T) => {
          w.includes(T) && w.splice(w.indexOf(T), 1), bo(b, T, tt(t, T));
        }), u(w).forEach((T) => T());
      }
      return H;
    },
    setTimeout(v) {
      return h(v), H;
    },
    on(v, w) {
      return r[v].push(w), H;
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
}), {}), Xe = (e) => typeof e != "string" ? e.target.name : e, Mt = (e) => {
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
  const o = ge(typeof r == "function" ? r() : r), s = Object.keys(o), i = At([]), a = At([]), c = Of((f) => f[an(e)](sn(t), u.data(), n), o).on("validatingChanged", () => {
    u.validating = c.validating();
  }).on("validatedChanged", () => {
    i.value = c.valid();
  }).on("touchedChanged", () => {
    a.value = c.touched();
  }).on("errorsChanged", () => {
    u.hasErrors = c.hasErrors(), u.errors = Sf(c.errors()), i.value = c.valid();
  }), l = (f) => ({
    ...f,
    precognitive: !1,
    onStart: () => {
      u.processing = !0, (f.onStart ?? (() => null))();
    },
    onFinish: () => {
      u.processing = !1, (f.onFinish ?? (() => null))();
    },
    onValidationError: (m, y) => (c.setErrors(m.data.errors), f.onValidationError ? f.onValidationError(m) : Promise.reject(y))
  });
  let u = {
    ...ge(o),
    data() {
      const f = ge(_o(u));
      return s.reduce((m, y) => ({
        ...m,
        [y]: f[y]
      }), {});
    },
    setData(f) {
      return Object.keys(f).forEach((m) => {
        u[m] = f[m];
      }), u;
    },
    touched(f) {
      return typeof f == "string" ? a.value.includes(f) : a.value.length > 0;
    },
    touch(f) {
      return c.touch(f), u;
    },
    validate(f, m) {
      return typeof f == "object" && !("target" in f) && (m = f, f = void 0), typeof f > "u" ? c.validate(m) : (f = Xe(f), c.validate(f, tt(u.data(), f), m)), u;
    },
    validating: !1,
    valid(f) {
      return i.value.includes(f);
    },
    invalid(f) {
      return typeof u.errors[f] < "u";
    },
    errors: {},
    hasErrors: !1,
    setErrors(f) {
      return c.setErrors(f), u;
    },
    forgetError(f) {
      return c.forgetError(f), u;
    },
    reset(...f) {
      const m = ge(typeof r == "function" ? r() : o);
      return f.length === 0 ? s.forEach((y) => u[y] = m[y]) : f.forEach((y) => bo(u, y, tt(m, y))), c.reset(...f), u;
    },
    setValidationTimeout(f) {
      return c.setTimeout(f), u;
    },
    processing: !1,
    async submit(f = {}) {
      return te[an(e)](sn(t), u.data(), l(f));
    },
    validateFiles() {
      return c.validateFiles(), u;
    },
    validator() {
      return c;
    }
  };
  return u = So(u), u;
}, Rf = (e, t, r, n = {}) => {
  const o = cn(r), s = Af(e, t, r, n);
  s.validator().on("errorsChanged", () => {
    c(), l(
      // @ts-expect-error
      gf(s.validator().errors())
    );
  });
  const i = o.submit.bind(o), a = o.reset.bind(o), c = o.clearErrors.bind(o), l = o.setError.bind(o), u = o.transform.bind(o);
  let f = (y) => y;
  const m = Object.assign(o, {
    validating: s.validating,
    touched: s.touched,
    touch(y) {
      return s.touch(y), m;
    },
    valid: s.valid,
    invalid: s.invalid,
    setData(y) {
      return Object.keys(y).forEach((d) => {
        m[d] = y[d];
      }), m;
    },
    clearErrors(...y) {
      return c(...y), y.length === 0 ? s.setErrors({}) : y.forEach(s.forgetError), m;
    },
    reset(...y) {
      a(...y), s.reset(...y);
    },
    setErrors(y) {
      return s.setErrors(y), m;
    },
    forgetError(y) {
      return s.forgetError(y), m;
    },
    setError(y, d) {
      let g;
      if (typeof y != "object") {
        if (typeof d > "u")
          throw new Error("The `value` is required.");
        g = { [y]: d };
      } else
        g = y;
      return m.setErrors({
        ...o.errors,
        ...g
      }), m;
    },
    transform(y) {
      return u(y), f = y, m;
    },
    validate(y, d) {
      return s.setData(f(o.data())), typeof y == "object" && !("target" in y) && (d = y, y = void 0), typeof d == "object" && (d.onValidationError = d.onValidationError ?? d?.onError), typeof y > "u" ? s.validate(d) : s.validate(y, d), m;
    },
    setValidationTimeout(y) {
      return s.setValidationTimeout(y), m;
    },
    validateFiles() {
      return s.validateFiles(), m;
    },
    submit(y = {}, d, g) {
      typeof y != "string" && (g = y, d = hf(t), y = mf(e)), i(y, d, {
        ...g,
        onError: (h) => {
          if (s.validator().setErrors(h), g?.onError)
            return g.onError(h);
        }
      });
    },
    validator: s.validator
  });
  return un(() => m.validating = s.validating), m;
};
F.create();
const $f = { class: "space-y-2" }, xf = /* @__PURE__ */ Ne({
  __name: "CheckboxGroup",
  props: {
    form: {},
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, o = (i) => r.modelValue.includes(i), s = (i, a) => {
      const c = a ? [...r.modelValue, i] : r.modelValue.filter((l) => l !== i);
      n("update:modelValue", c);
    };
    return (i, a) => (L(), q("div", $f, [
      (L(!0), q(De, null, Ue(e.items, (c, l) => (L(), q("div", {
        key: l,
        class: "flex items-center gap-2"
      }, [
        Ze(se(jo), {
          id: `${r.form._prefix}-${c.label ?? c}`,
          checked: o(c.value ?? c),
          "onUpdate:checked": (u) => s(c.value ?? c, u)
        }, null, 8, ["id", "checked", "onUpdate:checked"]),
        Ze(se(dn), {
          for: `${r.form._prefix}-${c.label ?? c}`,
          class: "cursor-pointer"
        }, {
          default: be(() => [
            $e(ce(c.label ?? c), 1)
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
  const r = _t(e), n = t?.precognition ? Rf(t.method, t.url, St(r)) : cn(St(r));
  n._prefix = Pf(6);
  const o = D(() => ir(_t(e)));
  return (typeof e == "function" || ln(e)) && Ao(
    o,
    (i) => {
      const a = St(_t(e));
      for (const l of Object.keys(a))
        l in n || (n[l] = a[l]);
      const c = n.data();
      for (const l of Object.keys(c))
        l !== "_prefix" && !(l in a) && delete n[l];
    },
    { deep: !0 }
  ), {
    elements: o,
    form: n,
    options: t
  };
}
const Cf = { key: 0 }, ar = /* @__PURE__ */ Ne({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    const t = e, r = Ro("schemaOptions", {}), n = D(() => {
      const d = t.element.definition?.fieldset;
      if (!d) return null;
      const g = [];
      for (const [h, b] of Object.entries(d)) {
        const E = b && typeof b == "object" && b.model ? b.model : h;
        g.push({ key: h, formKey: E });
      }
      return g;
    }), o = D(() => {
      const d = n.value;
      if (d) {
        const g = {};
        for (const { key: h, formKey: b } of d)
          g[b] = t.form[b];
        return g;
      }
      return { modelValue: t.form[t.element.name] };
    }), s = D(() => {
      const d = t.element.definition, g = d.component?.props;
      if (!g) return {};
      const h = {}, b = (E, S) => {
        g.hasOwnProperty(E) && (h[E] = S);
      };
      if (b("id", `${t.form._prefix}-${t.element.name}`), b("form", t.form), b("schema", d.schema), b("error", a.value[0] ?? null), d.props)
        for (const [E, S] of Object.entries(d.props))
          b(E, S);
      for (const E of Object.keys(d))
        E !== "component" && E !== "props" && E !== "visible" && E !== "alert" && E !== "fieldset" && E !== "schema" && E !== "showLabel" && E !== "precognitive" && E !== "precognitiveEvent" && b(E, d[E]);
      for (const [E, S] of Object.entries(o.value))
        b(E, S);
      return h;
    }), i = D(() => {
      const d = n.value, g = r?.precognition === !0 && (t.element.definition.precognitive ?? r?.optInPrecognition !== !0), h = t.element.definition.precognitiveEvent ?? "change", b = (E, S = "modelValue") => {
        const R = {
          [`update:${S}`]: (P) => {
            t.form[E] = P, g && h === "update" && t.form.validate(E);
          }
        };
        return g && h !== "update" && (R[h] = () => t.form.validate(E)), R;
      };
      if (d) {
        const E = {};
        for (const { formKey: S } of d)
          Object.assign(E, b(S, S));
        return E;
      }
      return b(t.element.name);
    }), a = D(() => {
      const d = n.value;
      return d ? d.map(({ formKey: g }) => t.form.errors[g]).filter((g) => g) : [t.form.errors[t.element.name]];
    }), c = D(() => (t.element.definition.label ?? t.element.name).replaceAll("_id", "").replaceAll("_", " ")), l = D(() => !!t.element.definition.schema), u = D(() => t.element.definition.showLabel !== void 0 ? t.element.definition.showLabel : t.element.definition.props?.type === "hidden" ? !1 : !l.value), f = D(() => {
      if (t.element.definition.alert !== void 0) {
        const d = t.element.definition.alert;
        return {
          ...d,
          visible: typeof d.visible == "function" ? d.visible : () => !0
        };
      }
      return null;
    }), m = t.element.definition.visible, y = At(typeof m == "function" ? m(t.form) : !0);
    return typeof m == "function" && un(() => {
      y.value = m(t.form);
    }), (d, g) => y.value ? (L(), q("div", Cf, [
      u.value ? (L(), ie(se(dn), {
        key: 0,
        for: s.value.id,
        class: "mb-1 block capitalize"
      }, {
        default: be(() => [
          $e(ce(c.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : ye("", !0),
      (L(), ie($o(e.element.definition.component), fn({
        key: e.element.name
      }, s.value, xo(i.value)), null, 16)),
      f.value && f.value.visible() ? (L(), ie(se(Fo), {
        key: 1,
        variant: "warning",
        class: "mt-2"
      }, {
        default: be(() => [
          Ze(se(Lo), { class: "flex items-center justify-between" }, {
            default: be(() => [
              $e(ce(f.value.text) + " ", 1),
              f.value.actionHref && f.value.actionText ? (L(), ie(se(pn), {
                key: 0,
                as: "a",
                href: f.value.actionHref,
                target: f.value.externalAction ? "_blank" : void 0,
                variant: "outline",
                size: "sm"
              }, {
                default: be(() => [
                  $e(ce(f.value.actionText), 1)
                ]),
                _: 1
              }, 8, ["href", "target"])) : ye("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : ye("", !0),
      s.value.hasOwnProperty("error") ? ye("", !0) : (L(!0), q(De, { key: 2 }, Ue(a.value, (h, b) => (L(), ie(se(No), {
        key: b,
        error: h
      }, null, 8, ["error"]))), 128))
    ])) : ye("", !0);
  }
}), jf = { class: "mx-auto mt-6 max-w-md space-y-6" }, Ff = { class: "flex justify-end gap-2" }, rd = /* @__PURE__ */ Ne({
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
    return (n, o) => (L(), q("div", jf, [
      gt(n.$slots, "default", {}, () => [
        (L(!0), q(De, null, Ue(r.value, (s) => (L(), ie(ar, {
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
            Ze(se(pn), {
              type: "submit",
              loading: e.schema.form.processing
            }, {
              default: be(() => [
                $e(ce(e.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ])
    ]));
  }
}), nd = /* @__PURE__ */ Ne({
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
    return (o, s) => (L(), q("div", {
      class: Co(["grid gap-x-4 gap-y-6 md:grid-flow-col", n.value])
    }, [
      (L(!0), q(De, null, Ue(r.value, (i) => (L(), ie(ar, fn({
        key: i.name,
        element: i,
        form: e.form
      }, { ref_for: !0 }, o.$attrs), null, 16, ["element", "form"]))), 128))
    ], 2));
  }
}), Lf = { class: "mt-10" }, Nf = {
  key: 0,
  class: "mt-1 whitespace-pre-line text-sm leading-6 text-gray-500"
}, Df = { class: "mt-4 space-y-6" }, od = /* @__PURE__ */ Ne({
  __name: "Section",
  props: {
    schema: {},
    form: {},
    heading: {},
    description: {}
  },
  setup(e) {
    const t = e, r = D(() => ir(t.schema));
    return (n, o) => (L(), q("div", Lf, [
      Rt("label", null, ce(e.heading), 1),
      e.description ? (L(), q("p", Nf, ce(e.description), 1)) : ye("", !0),
      Rt("div", Df, [
        (L(!0), q(De, null, Ue(r.value, (s) => (L(), ie(ar, {
          key: s.name,
          element: s,
          form: e.form
        }, null, 8, ["element", "form"]))), 128))
      ])
    ]));
  }
});
function sd(e, t) {
  return {
    component: e,
    ...t
  };
}
function id(e) {
  return {
    component: null,
    // Will be set by the consuming component
    value: e,
    showLabel: !1,
    props: { type: "hidden" }
  };
}
function ad(e, t, r) {
  return {
    component: t,
    visible: e,
    ...r
  };
}
export {
  xf as CheckboxGroup,
  rd as FormBuilder,
  nd as Grid,
  od as Section,
  sd as defineElement,
  id as hidden,
  td as useSchema,
  ad as when
};
