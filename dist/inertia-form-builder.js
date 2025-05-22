import { useForm as Ko, Link as qi } from "@inertiajs/vue3";
import * as Lr from "vue";
import { ref as _, toRaw as Ie, reactive as rr, watchEffect as ee, defineComponent as M, computed as R, watch as ce, provide as ve, h as K, cloneVNode as Jo, onMounted as Q, Fragment as ze, inject as le, onUnmounted as de, nextTick as ie, unref as re, getCurrentInstance as Wi, Teleport as Gi, normalizeClass as Zt, openBlock as B, createElementBlock as Y, createElementVNode as ne, createCommentVNode as De, createVNode as nt, renderSlot as ue, createBlock as pe, mergeProps as je, withCtx as Ae, createTextVNode as ht, toDisplayString as Le, withDirectives as Pn, isRef as Ki, vModelCheckbox as Ji, vShow as Nr, shallowRef as Yo, triggerRef as Mr, onScopeDispose as Yi, renderList as xt, resolveDynamicComponent as Xi, toHandlers as Qi, createSlots as Zi } from "vue";
function Xo(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: el } = Object.prototype, { getPrototypeOf: or } = Object, en = ((e) => (t) => {
  const n = el.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Oe = (e) => (e = e.toLowerCase(), (t) => en(t) === e), tn = (e) => (t) => typeof t === e, { isArray: ot } = Array, bt = tn("undefined");
function tl(e) {
  return e !== null && !bt(e) && e.constructor !== null && !bt(e.constructor) && he(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Qo = Oe("ArrayBuffer");
function nl(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Qo(e.buffer), t;
}
const rl = tn("string"), he = tn("function"), Zo = tn("number"), nn = (e) => e !== null && typeof e == "object", ol = (e) => e === !0 || e === !1, Mt = (e) => {
  if (en(e) !== "object")
    return !1;
  const t = or(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, al = Oe("Date"), il = Oe("File"), ll = Oe("Blob"), sl = Oe("FileList"), ul = (e) => nn(e) && he(e.pipe), cl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || he(e.append) && ((t = en(e)) === "formdata" || t === "object" && he(e.toString) && e.toString() === "[object FormData]"));
}, dl = Oe("URLSearchParams"), [fl, pl, hl, vl] = ["ReadableStream", "Request", "Response", "Headers"].map(Oe), ml = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Rt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), ot(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let l;
    for (r = 0; r < i; r++)
      l = a[r], t.call(null, e[l], l, e);
  }
}
function ea(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const We = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), ta = (e) => !bt(e) && e !== We;
function _n() {
  const { caseless: e } = ta(this) && this || {}, t = {}, n = (r, o) => {
    const a = e && ea(t, o) || o;
    Mt(t[a]) && Mt(r) ? t[a] = _n(t[a], r) : Mt(r) ? t[a] = _n({}, r) : ot(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Rt(arguments[r], n);
  return t;
}
const gl = (e, t, n, { allOwnKeys: r } = {}) => (Rt(t, (o, a) => {
  n && he(o) ? e[a] = Xo(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), bl = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), yl = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, wl = (e, t, n, r) => {
  let o, a, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      i = o[a], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && or(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Sl = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, El = (e) => {
  if (!e)
    return null;
  if (ot(e))
    return e;
  let t = e.length;
  if (!Zo(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ol = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && or(Uint8Array)), Tl = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, xl = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Rl = Oe("HTMLFormElement"), Al = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Br = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Cl = Oe("RegExp"), na = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Rt(n, (o, a) => {
    let i;
    (i = t(o, a, e)) !== !1 && (r[a] = i || o);
  }), Object.defineProperties(e, r);
}, Pl = (e) => {
  na(e, (t, n) => {
    if (he(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (!!he(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, _l = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return ot(e) ? r(e) : r(String(e).split(t)), n;
}, Il = () => {
}, $l = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Fl(e) {
  return !!(e && he(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Dl = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (nn(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = ot(r) ? [] : {};
        return Rt(r, (i, l) => {
          const s = n(i, o + 1);
          !bt(s) && (a[l] = s);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, jl = Oe("AsyncFunction"), Ll = (e) => e && (nn(e) || he(e)) && he(e.then) && he(e.catch), ra = ((e, t) => e ? setImmediate : t ? ((n, r) => (We.addEventListener("message", ({ source: o, data: a }) => {
  o === We && a === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), We.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  he(We.postMessage)
), Nl = typeof queueMicrotask < "u" ? queueMicrotask.bind(We) : typeof process < "u" && process.nextTick || ra, g = {
  isArray: ot,
  isArrayBuffer: Qo,
  isBuffer: tl,
  isFormData: cl,
  isArrayBufferView: nl,
  isString: rl,
  isNumber: Zo,
  isBoolean: ol,
  isObject: nn,
  isPlainObject: Mt,
  isReadableStream: fl,
  isRequest: pl,
  isResponse: hl,
  isHeaders: vl,
  isUndefined: bt,
  isDate: al,
  isFile: il,
  isBlob: ll,
  isRegExp: Cl,
  isFunction: he,
  isStream: ul,
  isURLSearchParams: dl,
  isTypedArray: Ol,
  isFileList: sl,
  forEach: Rt,
  merge: _n,
  extend: gl,
  trim: ml,
  stripBOM: bl,
  inherits: yl,
  toFlatObject: wl,
  kindOf: en,
  kindOfTest: Oe,
  endsWith: Sl,
  toArray: El,
  forEachEntry: Tl,
  matchAll: xl,
  isHTMLForm: Rl,
  hasOwnProperty: Br,
  hasOwnProp: Br,
  reduceDescriptors: na,
  freezeMethods: Pl,
  toObjectSet: _l,
  toCamelCase: Al,
  noop: Il,
  toFiniteNumber: $l,
  findKey: ea,
  global: We,
  isContextDefined: ta,
  isSpecCompliantForm: Fl,
  toJSONObject: Dl,
  isAsyncFn: jl,
  isThenable: Ll,
  setImmediate: ra,
  asap: Nl
};
function D(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
g.inherits(D, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: g.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const oa = D.prototype, aa = {};
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
].forEach((e) => {
  aa[e] = { value: e };
});
Object.defineProperties(D, aa);
Object.defineProperty(oa, "isAxiosError", { value: !0 });
D.from = (e, t, n, r, o, a) => {
  const i = Object.create(oa);
  return g.toFlatObject(e, i, function(s) {
    return s !== Error.prototype;
  }, (l) => l !== "isAxiosError"), D.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, a && Object.assign(i, a), i;
};
const Ml = null;
function In(e) {
  return g.isPlainObject(e) || g.isArray(e);
}
function ia(e) {
  return g.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ur(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = ia(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Bl(e) {
  return g.isArray(e) && !e.some(In);
}
const Ul = g.toFlatObject(g, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function rn(e, t, n) {
  if (!g.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = g.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, m) {
    return !g.isUndefined(m[v]);
  });
  const r = n.metaTokens, o = n.visitor || c, a = n.dots, i = n.indexes, s = (n.Blob || typeof Blob < "u" && Blob) && g.isSpecCompliantForm(t);
  if (!g.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null)
      return "";
    if (g.isDate(p))
      return p.toISOString();
    if (!s && g.isBlob(p))
      throw new D("Blob is not supported. Use a Buffer instead.");
    return g.isArrayBuffer(p) || g.isTypedArray(p) ? s && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function c(p, v, m) {
    let y = p;
    if (p && !m && typeof p == "object") {
      if (g.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), p = JSON.stringify(p);
      else if (g.isArray(p) && Bl(p) || (g.isFileList(p) || g.endsWith(v, "[]")) && (y = g.toArray(p)))
        return v = ia(v), y.forEach(function(P, F) {
          !(g.isUndefined(P) || P === null) && t.append(
            i === !0 ? Ur([v], F, a) : i === null ? v : v + "[]",
            u(P)
          );
        }), !1;
    }
    return In(p) ? !0 : (t.append(Ur(m, v, a), u(p)), !1);
  }
  const d = [], f = Object.assign(Ul, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: In
  });
  function h(p, v) {
    if (!g.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(p), g.forEach(p, function(y, E) {
        (!(g.isUndefined(y) || y === null) && o.call(
          t,
          y,
          g.isString(E) ? E.trim() : E,
          v,
          f
        )) === !0 && h(y, v ? v.concat(E) : [E]);
      }), d.pop();
    }
  }
  if (!g.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function kr(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ar(e, t) {
  this._pairs = [], e && rn(e, this, t);
}
const la = ar.prototype;
la.append = function(t, n) {
  this._pairs.push([t, n]);
};
la.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, kr);
  } : kr;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function kl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function sa(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || kl;
  g.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = g.isURLSearchParams(t) ? t.toString() : new ar(t, n).toString(r), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Hl {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    g.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Hr = Hl, ua = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, zl = typeof URLSearchParams < "u" ? URLSearchParams : ar, Vl = typeof FormData < "u" ? FormData : null, ql = typeof Blob < "u" ? Blob : null, Wl = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zl,
    FormData: Vl,
    Blob: ql
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ir = typeof window < "u" && typeof document < "u", $n = typeof navigator == "object" && navigator || void 0, Gl = ir && (!$n || ["ReactNative", "NativeScript", "NS"].indexOf($n.product) < 0), Kl = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Jl = ir && window.location.href || "http://localhost", Yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ir,
  hasStandardBrowserWebWorkerEnv: Kl,
  hasStandardBrowserEnv: Gl,
  navigator: $n,
  origin: Jl
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ...Yl,
  ...Wl
};
function Xl(e, t) {
  return rn(e, new ae.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return ae.isNode && g.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ql(e) {
  return g.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Zl(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function ca(e) {
  function t(n, r, o, a) {
    let i = n[a++];
    if (i === "__proto__")
      return !0;
    const l = Number.isFinite(+i), s = a >= n.length;
    return i = !i && g.isArray(o) ? o.length : i, s ? (g.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !l) : ((!o[i] || !g.isObject(o[i])) && (o[i] = []), t(n, r, o[i], a) && g.isArray(o[i]) && (o[i] = Zl(o[i])), !l);
  }
  if (g.isFormData(e) && g.isFunction(e.entries)) {
    const n = {};
    return g.forEachEntry(e, (r, o) => {
      t(Ql(r), o, n, 0);
    }), n;
  }
  return null;
}
function es(e, t, n) {
  if (g.isString(e))
    try {
      return (t || JSON.parse)(e), g.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const lr = {
  transitional: ua,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = g.isObject(t);
    if (a && g.isHTMLForm(t) && (t = new FormData(t)), g.isFormData(t))
      return o ? JSON.stringify(ca(t)) : t;
    if (g.isArrayBuffer(t) || g.isBuffer(t) || g.isStream(t) || g.isFile(t) || g.isBlob(t) || g.isReadableStream(t))
      return t;
    if (g.isArrayBufferView(t))
      return t.buffer;
    if (g.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Xl(t, this.formSerializer).toString();
      if ((l = g.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const s = this.env && this.env.FormData;
        return rn(
          l ? { "files[]": t } : t,
          s && new s(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), es(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || lr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (g.isResponse(t) || g.isReadableStream(t))
      return t;
    if (t && g.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? D.from(l, D.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ae.classes.FormData,
    Blob: ae.classes.Blob
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
g.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  lr.headers[e] = {};
});
const sr = lr, ts = g.toObjectSet([
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
]), ns = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && ts[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, zr = Symbol("internals");
function lt(e) {
  return e && String(e).trim().toLowerCase();
}
function Bt(e) {
  return e === !1 || e == null ? e : g.isArray(e) ? e.map(Bt) : String(e);
}
function rs(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const os = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function mn(e, t, n, r, o) {
  if (g.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!g.isString(t)) {
    if (g.isString(r))
      return t.indexOf(r) !== -1;
    if (g.isRegExp(r))
      return r.test(t);
  }
}
function as(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function is(e, t) {
  const n = g.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, a, i) {
        return this[r].call(this, t, o, a, i);
      },
      configurable: !0
    });
  });
}
class on {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(l, s, u) {
      const c = lt(s);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const d = g.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || s] = Bt(l));
    }
    const i = (l, s) => g.forEach(l, (u, c) => a(u, c, s));
    if (g.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (g.isString(t) && (t = t.trim()) && !os(t))
      i(ns(t), n);
    else if (g.isHeaders(t))
      for (const [l, s] of t.entries())
        a(s, l, r);
    else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = lt(t), t) {
      const r = g.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return rs(o);
        if (g.isFunction(n))
          return n.call(this, o, r);
        if (g.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = lt(t), t) {
      const r = g.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || mn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(i) {
      if (i = lt(i), i) {
        const l = g.findKey(r, i);
        l && (!n || mn(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return g.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || mn(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return g.forEach(this, (o, a) => {
      const i = g.findKey(r, a);
      if (i) {
        n[i] = Bt(o), delete n[a];
        return;
      }
      const l = t ? as(a) : String(a).trim();
      l !== a && delete n[a], n[l] = Bt(o), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return g.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && g.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
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
    const r = (this[zr] = this[zr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const l = lt(i);
      r[l] || (is(o, i), r[l] = !0);
    }
    return g.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
on.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
g.reduceDescriptors(on.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
g.freezeMethods(on);
const Se = on;
function gn(e, t) {
  const n = this || sr, r = t || n, o = Se.from(r.headers);
  let a = r.data;
  return g.forEach(e, function(l) {
    a = l.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function da(e) {
  return !!(e && e.__CANCEL__);
}
function at(e, t, n) {
  D.call(this, e == null ? "canceled" : e, D.ERR_CANCELED, t, n), this.name = "CanceledError";
}
g.inherits(at, D, {
  __CANCEL__: !0
});
function fa(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new D(
    "Request failed with status code " + n.status,
    [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function ls(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ss(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(s) {
    const u = Date.now(), c = r[a];
    i || (i = u), n[o] = s, r[o] = u;
    let d = a, f = 0;
    for (; d !== o; )
      f += n[d++], d = d % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), u - i < t)
      return;
    const h = c && u - c;
    return h ? Math.round(f * 1e3 / h) : void 0;
  };
}
function us(e, t) {
  let n = 0, r = 1e3 / t, o, a;
  const i = (u, c = Date.now()) => {
    n = c, o = null, a && (clearTimeout(a), a = null), e.apply(null, u);
  };
  return [(...u) => {
    const c = Date.now(), d = c - n;
    d >= r ? i(u, c) : (o = u, a || (a = setTimeout(() => {
      a = null, i(o);
    }, r - d)));
  }, () => o && i(o)];
}
const zt = (e, t, n = 3) => {
  let r = 0;
  const o = ss(50, 250);
  return us((a) => {
    const i = a.loaded, l = a.lengthComputable ? a.total : void 0, s = i - r, u = o(s), c = i <= l;
    r = i;
    const d = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && l && c ? (l - i) / u : void 0,
      event: a,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, Vr = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, qr = (e) => (...t) => g.asap(() => e(...t)), cs = ae.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, ae.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ae.origin),
  ae.navigator && /(msie|trident)/i.test(ae.navigator.userAgent)
) : () => !0, ds = ae.hasStandardBrowserEnv ? {
  write(e, t, n, r, o, a) {
    const i = [e + "=" + encodeURIComponent(t)];
    g.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), g.isString(r) && i.push("path=" + r), g.isString(o) && i.push("domain=" + o), a === !0 && i.push("secure"), document.cookie = i.join("; ");
  },
  read(e) {
    const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
    return t ? decodeURIComponent(t[3]) : null;
  },
  remove(e) {
    this.write(e, "", Date.now() - 864e5);
  }
} : {
  write() {
  },
  read() {
    return null;
  },
  remove() {
  }
};
function fs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ps(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function pa(e, t, n) {
  let r = !fs(t);
  return e && (r || n == !1) ? ps(e, t) : t;
}
const Wr = (e) => e instanceof Se ? { ...e } : e;
function Ke(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d, f) {
    return g.isPlainObject(u) && g.isPlainObject(c) ? g.merge.call({ caseless: f }, u, c) : g.isPlainObject(c) ? g.merge({}, c) : g.isArray(c) ? c.slice() : c;
  }
  function o(u, c, d, f) {
    if (g.isUndefined(c)) {
      if (!g.isUndefined(u))
        return r(void 0, u, d, f);
    } else
      return r(u, c, d, f);
  }
  function a(u, c) {
    if (!g.isUndefined(c))
      return r(void 0, c);
  }
  function i(u, c) {
    if (g.isUndefined(c)) {
      if (!g.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, c);
  }
  function l(u, c, d) {
    if (d in t)
      return r(u, c);
    if (d in e)
      return r(void 0, u);
  }
  const s = {
    url: a,
    method: a,
    data: a,
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
    validateStatus: l,
    headers: (u, c, d) => o(Wr(u), Wr(c), d, !0)
  };
  return g.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const d = s[c] || o, f = d(e[c], t[c], c);
    g.isUndefined(f) && d !== l || (n[c] = f);
  }), n;
}
const ha = (e) => {
  const t = Ke({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: i, auth: l } = t;
  t.headers = i = Se.from(i), t.url = sa(pa(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let s;
  if (g.isFormData(n)) {
    if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((s = i.getContentType()) !== !1) {
      const [u, ...c] = s ? s.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...c].join("; "));
    }
  }
  if (ae.hasStandardBrowserEnv && (r && g.isFunction(r) && (r = r(t)), r || r !== !1 && cs(t.url))) {
    const u = o && a && ds.read(a);
    u && i.set(o, u);
  }
  return t;
}, hs = typeof XMLHttpRequest < "u", vs = hs && function(e) {
  return new Promise(function(n, r) {
    const o = ha(e);
    let a = o.data;
    const i = Se.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: s, onDownloadProgress: u } = o, c, d, f, h, p;
    function v() {
      h && h(), p && p(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let m = new XMLHttpRequest();
    m.open(o.method.toUpperCase(), o.url, !0), m.timeout = o.timeout;
    function y() {
      if (!m)
        return;
      const P = Se.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), O = {
        data: !l || l === "text" || l === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: P,
        config: e,
        request: m
      };
      fa(function($) {
        n($), v();
      }, function($) {
        r($), v();
      }, O), m = null;
    }
    "onloadend" in m ? m.onloadend = y : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, m.onabort = function() {
      !m || (r(new D("Request aborted", D.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      r(new D("Network Error", D.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let F = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const O = o.transitional || ua;
      o.timeoutErrorMessage && (F = o.timeoutErrorMessage), r(new D(
        F,
        O.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
        e,
        m
      )), m = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in m && g.forEach(i.toJSON(), function(F, O) {
      m.setRequestHeader(O, F);
    }), g.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), l && l !== "json" && (m.responseType = o.responseType), u && ([f, p] = zt(u, !0), m.addEventListener("progress", f)), s && m.upload && ([d, h] = zt(s), m.upload.addEventListener("progress", d), m.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (c = (P) => {
      !m || (r(!P || P.type ? new at(null, e, m) : P), m.abort(), m = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const E = ls(o.url);
    if (E && ae.protocols.indexOf(E) === -1) {
      r(new D("Unsupported protocol " + E + ":", D.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(a || null);
  });
}, ms = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(u) {
      if (!o) {
        o = !0, l();
        const c = u instanceof Error ? u : this.reason;
        r.abort(c instanceof D ? c : new at(c instanceof Error ? c.message : c));
      }
    };
    let i = t && setTimeout(() => {
      i = null, a(new D(`timeout ${t} of ms exceeded`, D.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", a));
    const { signal: s } = r;
    return s.unsubscribe = () => g.asap(l), s;
  }
}, gs = ms, bs = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, ys = async function* (e, t) {
  for await (const n of ws(e))
    yield* bs(n, t);
}, ws = async function* (e) {
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
}, Gr = (e, t, n, r) => {
  const o = ys(e, t);
  let a = 0, i, l = (s) => {
    i || (i = !0, r && r(s));
  };
  return new ReadableStream({
    async pull(s) {
      try {
        const { done: u, value: c } = await o.next();
        if (u) {
          l(), s.close();
          return;
        }
        let d = c.byteLength;
        if (n) {
          let f = a += d;
          n(f);
        }
        s.enqueue(new Uint8Array(c));
      } catch (u) {
        throw l(u), u;
      }
    },
    cancel(s) {
      return l(s), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, an = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", va = an && typeof ReadableStream == "function", Ss = an && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), ma = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Es = va && ma(() => {
  let e = !1;
  const t = new Request(ae.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Kr = 64 * 1024, Fn = va && ma(() => g.isReadableStream(new Response("").body)), Vt = {
  stream: Fn && ((e) => e.body)
};
an && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Vt[t] && (Vt[t] = g.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new D(`Response type '${t}' is not supported`, D.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Os = async (e) => {
  if (e == null)
    return 0;
  if (g.isBlob(e))
    return e.size;
  if (g.isSpecCompliantForm(e))
    return (await new Request(ae.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (g.isArrayBufferView(e) || g.isArrayBuffer(e))
    return e.byteLength;
  if (g.isURLSearchParams(e) && (e = e + ""), g.isString(e))
    return (await Ss(e)).byteLength;
}, Ts = async (e, t) => {
  const n = g.toFiniteNumber(e.getContentLength());
  return n == null ? Os(t) : n;
}, xs = an && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: a,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: s,
    responseType: u,
    headers: c,
    withCredentials: d = "same-origin",
    fetchOptions: f
  } = ha(e);
  u = u ? (u + "").toLowerCase() : "text";
  let h = gs([o, a && a.toAbortSignal()], i), p;
  const v = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let m;
  try {
    if (s && Es && n !== "get" && n !== "head" && (m = await Ts(c, r)) !== 0) {
      let O = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), A;
      if (g.isFormData(r) && (A = O.headers.get("content-type")) && c.setContentType(A), O.body) {
        const [$, T] = Vr(
          m,
          zt(qr(s))
        );
        r = Gr(O.body, Kr, $, T);
      }
    }
    g.isString(d) || (d = d ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    p = new Request(t, {
      ...f,
      signal: h,
      method: n.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: y ? d : void 0
    });
    let E = await fetch(p);
    const P = Fn && (u === "stream" || u === "response");
    if (Fn && (l || P && v)) {
      const O = {};
      ["status", "statusText", "headers"].forEach((j) => {
        O[j] = E[j];
      });
      const A = g.toFiniteNumber(E.headers.get("content-length")), [$, T] = l && Vr(
        A,
        zt(qr(l), !0)
      ) || [];
      E = new Response(
        Gr(E.body, Kr, $, () => {
          T && T(), v && v();
        }),
        O
      );
    }
    u = u || "text";
    let F = await Vt[g.findKey(Vt, u) || "text"](E, e);
    return !P && v && v(), await new Promise((O, A) => {
      fa(O, A, {
        data: F,
        headers: Se.from(E.headers),
        status: E.status,
        statusText: E.statusText,
        config: e,
        request: p
      });
    });
  } catch (y) {
    throw v && v(), y && y.name === "TypeError" && /fetch/i.test(y.message) ? Object.assign(
      new D("Network Error", D.ERR_NETWORK, e, p),
      {
        cause: y.cause || y
      }
    ) : D.from(y, y && y.code, e, p);
  }
}), Dn = {
  http: Ml,
  xhr: vs,
  fetch: xs
};
g.forEach(Dn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Jr = (e) => `- ${e}`, Rs = (e) => g.isFunction(e) || e === null || e === !1, ga = {
  getAdapter: (e) => {
    e = g.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let i;
      if (r = n, !Rs(n) && (r = Dn[(i = String(n)).toLowerCase()], r === void 0))
        throw new D(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + a] = r;
    }
    if (!r) {
      const a = Object.entries(o).map(
        ([l, s]) => `adapter ${l} ` + (s === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? a.length > 1 ? `since :
` + a.map(Jr).join(`
`) : " " + Jr(a[0]) : "as no adapter specified";
      throw new D(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Dn
};
function bn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new at(null, e);
}
function Yr(e) {
  return bn(e), e.headers = Se.from(e.headers), e.data = gn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ga.getAdapter(e.adapter || sr.adapter)(e).then(function(r) {
    return bn(e), r.data = gn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Se.from(r.headers), r;
  }, function(r) {
    return da(r) || (bn(e), r && r.response && (r.response.data = gn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Se.from(r.response.headers))), Promise.reject(r);
  });
}
const ba = "1.8.4", ln = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ln[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Xr = {};
ln.transitional = function(t, n, r) {
  function o(a, i) {
    return "[Axios v" + ba + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return (a, i, l) => {
    if (t === !1)
      throw new D(
        o(i, " has been removed" + (n ? " in " + n : "")),
        D.ERR_DEPRECATED
      );
    return n && !Xr[i] && (Xr[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, i, l) : !0;
  };
};
ln.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function As(e, t, n) {
  if (typeof e != "object")
    throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], i = t[a];
    if (i) {
      const l = e[a], s = l === void 0 || i(l, a, e);
      if (s !== !0)
        throw new D("option " + a + " must be " + s, D.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new D("Unknown option " + a, D.ERR_BAD_OPTION);
  }
}
const Ut = {
  assertOptions: As,
  validators: ln
}, xe = Ut.validators;
class qt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Hr(),
      response: new Hr()
    };
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? a && !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + a) : r.stack = a;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ke(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && Ut.assertOptions(r, {
      silentJSONParsing: xe.transitional(xe.boolean),
      forcedJSONParsing: xe.transitional(xe.boolean),
      clarifyTimeoutError: xe.transitional(xe.boolean)
    }, !1), o != null && (g.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Ut.assertOptions(o, {
      encode: xe.function,
      serialize: xe.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ut.assertOptions(n, {
      baseUrl: xe.spelling("baseURL"),
      withXsrfToken: xe.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = a && g.merge(
      a.common,
      a[n.method]
    );
    a && g.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete a[p];
      }
    ), n.headers = Se.concat(i, a);
    const l = [];
    let s = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (s = s && v.synchronous, l.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c, d = 0, f;
    if (!s) {
      const p = [Yr.bind(this), void 0];
      for (p.unshift.apply(p, l), p.push.apply(p, u), f = p.length, c = Promise.resolve(n); d < f; )
        c = c.then(p[d++], p[d++]);
      return c;
    }
    f = l.length;
    let h = n;
    for (d = 0; d < f; ) {
      const p = l[d++], v = l[d++];
      try {
        h = p(h);
      } catch (m) {
        v.call(this, m);
        break;
      }
    }
    try {
      c = Yr.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, f = u.length; d < f; )
      c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Ke(this.defaults, t);
    const n = pa(t.baseURL, t.url, t.allowAbsoluteUrls);
    return sa(n, t.params, t.paramsSerializer);
  }
}
g.forEach(["delete", "get", "head", "options"], function(t) {
  qt.prototype[t] = function(n, r) {
    return this.request(Ke(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
g.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, i, l) {
      return this.request(Ke(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  qt.prototype[t] = n(), qt.prototype[t + "Form"] = n(!0);
});
const kt = qt;
class ur {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const i = new Promise((l) => {
        r.subscribe(l), a = l;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(a);
      }, i;
    }, t(function(a, i, l) {
      r.reason || (r.reason = new at(a, i, l), n(r.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
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
  static source() {
    let t;
    return {
      token: new ur(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Cs = ur;
function Ps(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function _s(e) {
  return g.isObject(e) && e.isAxiosError === !0;
}
const jn = {
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
  NetworkAuthenticationRequired: 511
};
Object.entries(jn).forEach(([e, t]) => {
  jn[t] = e;
});
const Is = jn;
function ya(e) {
  const t = new kt(e), n = Xo(kt.prototype.request, t);
  return g.extend(n, kt.prototype, t, { allOwnKeys: !0 }), g.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return ya(Ke(e, o));
  }, n;
}
const Z = ya(sr);
Z.Axios = kt;
Z.CanceledError = at;
Z.CancelToken = Cs;
Z.isCancel = da;
Z.VERSION = ba;
Z.toFormData = rn;
Z.AxiosError = D;
Z.Cancel = Z.CanceledError;
Z.all = function(t) {
  return Promise.all(t);
};
Z.spread = Ps;
Z.isAxiosError = _s;
Z.mergeConfig = Ke;
Z.AxiosHeaders = Se;
Z.formToJSON = (e) => ca(g.isHTMLForm(e) ? new FormData(e) : e);
Z.getAdapter = ga.getAdapter;
Z.HttpStatusCode = Is;
Z.default = Z;
const wa = Z, {
  Axios: Gm,
  AxiosError: Km,
  CanceledError: Jm,
  isCancel: Sa,
  CancelToken: Ym,
  VERSION: Xm,
  all: Qm,
  Cancel: Zm,
  isAxiosError: Ea,
  spread: e0,
  toFormData: t0,
  AxiosHeaders: n0,
  HttpStatusCode: r0,
  formToJSON: o0,
  getAdapter: a0,
  mergeConfig: $s
} = wa;
var Fs = typeof global == "object" && global && global.Object === Object && global;
const Oa = Fs;
var Ds = typeof self == "object" && self && self.Object === Object && self, js = Oa || Ds || Function("return this")();
const Te = js;
var Ls = Te.Symbol;
const ye = Ls;
var Ta = Object.prototype, Ns = Ta.hasOwnProperty, Ms = Ta.toString, st = ye ? ye.toStringTag : void 0;
function Bs(e) {
  var t = Ns.call(e, st), n = e[st];
  try {
    e[st] = void 0;
    var r = !0;
  } catch {
  }
  var o = Ms.call(e);
  return r && (t ? e[st] = n : delete e[st]), o;
}
var Us = Object.prototype, ks = Us.toString;
function Hs(e) {
  return ks.call(e);
}
var zs = "[object Null]", Vs = "[object Undefined]", Qr = ye ? ye.toStringTag : void 0;
function Ye(e) {
  return e == null ? e === void 0 ? Vs : zs : Qr && Qr in Object(e) ? Bs(e) : Hs(e);
}
function Pe(e) {
  return e != null && typeof e == "object";
}
var qs = "[object Symbol]";
function sn(e) {
  return typeof e == "symbol" || Pe(e) && Ye(e) == qs;
}
function xa(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ws = Array.isArray;
const Ee = Ws;
var Gs = 1 / 0, Zr = ye ? ye.prototype : void 0, eo = Zr ? Zr.toString : void 0;
function Ra(e) {
  if (typeof e == "string")
    return e;
  if (Ee(e))
    return xa(e, Ra) + "";
  if (sn(e))
    return eo ? eo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Gs ? "-0" : t;
}
var Ks = /\s/;
function Js(e) {
  for (var t = e.length; t-- && Ks.test(e.charAt(t)); )
    ;
  return t;
}
var Ys = /^\s+/;
function Xs(e) {
  return e && e.slice(0, Js(e) + 1).replace(Ys, "");
}
function me(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var to = 0 / 0, Qs = /^[-+]0x[0-9a-f]+$/i, Zs = /^0b[01]+$/i, eu = /^0o[0-7]+$/i, tu = parseInt;
function no(e) {
  if (typeof e == "number")
    return e;
  if (sn(e))
    return to;
  if (me(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = me(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Xs(e);
  var n = Zs.test(e);
  return n || eu.test(e) ? tu(e.slice(2), n ? 2 : 8) : Qs.test(e) ? to : +e;
}
function Aa(e) {
  return e;
}
var nu = "[object AsyncFunction]", ru = "[object Function]", ou = "[object GeneratorFunction]", au = "[object Proxy]";
function cr(e) {
  if (!me(e))
    return !1;
  var t = Ye(e);
  return t == ru || t == ou || t == nu || t == au;
}
var iu = Te["__core-js_shared__"];
const yn = iu;
var ro = function() {
  var e = /[^.]+$/.exec(yn && yn.keys && yn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function lu(e) {
  return !!ro && ro in e;
}
var su = Function.prototype, uu = su.toString;
function Xe(e) {
  if (e != null) {
    try {
      return uu.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var cu = /[\\^$.*+?()[\]{}|]/g, du = /^\[object .+?Constructor\]$/, fu = Function.prototype, pu = Object.prototype, hu = fu.toString, vu = pu.hasOwnProperty, mu = RegExp(
  "^" + hu.call(vu).replace(cu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gu(e) {
  if (!me(e) || lu(e))
    return !1;
  var t = cr(e) ? mu : du;
  return t.test(Xe(e));
}
function bu(e, t) {
  return e == null ? void 0 : e[t];
}
function Qe(e, t) {
  var n = bu(e, t);
  return gu(n) ? n : void 0;
}
var yu = Qe(Te, "WeakMap");
const Ln = yu;
var oo = Object.create, wu = function() {
  function e() {
  }
  return function(t) {
    if (!me(t))
      return {};
    if (oo)
      return oo(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Su = wu;
function Eu(e, t, n) {
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
function Ca(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Ou = 800, Tu = 16, xu = Date.now;
function Ru(e) {
  var t = 0, n = 0;
  return function() {
    var r = xu(), o = Tu - (r - n);
    if (n = r, o > 0) {
      if (++t >= Ou)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Au(e) {
  return function() {
    return e;
  };
}
var Cu = function() {
  try {
    var e = Qe(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Wt = Cu;
var Pu = Wt ? function(e, t) {
  return Wt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Au(t),
    writable: !0
  });
} : Aa;
const _u = Pu;
var Iu = Ru(_u);
const Pa = Iu;
function $u(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Fu = 9007199254740991, Du = /^(?:0|[1-9]\d*)$/;
function dr(e, t) {
  var n = typeof e;
  return t = t == null ? Fu : t, !!t && (n == "number" || n != "symbol" && Du.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function fr(e, t, n) {
  t == "__proto__" && Wt ? Wt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function At(e, t) {
  return e === t || e !== e && t !== t;
}
var ju = Object.prototype, Lu = ju.hasOwnProperty;
function pr(e, t, n) {
  var r = e[t];
  (!(Lu.call(e, t) && At(r, n)) || n === void 0 && !(t in e)) && fr(e, t, n);
}
function it(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var l = t[a], s = r ? r(n[l], e[l], l, n, e) : void 0;
    s === void 0 && (s = e[l]), o ? fr(n, l, s) : pr(n, l, s);
  }
  return n;
}
var ao = Math.max;
function _a(e, t, n) {
  return t = ao(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = ao(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(i), Eu(e, this, l);
  };
}
function Nu(e, t) {
  return Pa(_a(e, t, Aa), e + "");
}
var Mu = 9007199254740991;
function Ia(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Mu;
}
function un(e) {
  return e != null && Ia(e.length) && !cr(e);
}
function Bu(e, t, n) {
  if (!me(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? un(n) && dr(t, n.length) : r == "string" && t in n) ? At(n[t], e) : !1;
}
function Uu(e) {
  return Nu(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, i = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, i && Bu(n[0], n[1], i) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var l = n[r];
      l && e(t, l, r, a);
    }
    return t;
  });
}
var ku = Object.prototype;
function hr(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || ku;
  return e === n;
}
function Hu(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var zu = "[object Arguments]";
function io(e) {
  return Pe(e) && Ye(e) == zu;
}
var $a = Object.prototype, Vu = $a.hasOwnProperty, qu = $a.propertyIsEnumerable, Wu = io(function() {
  return arguments;
}()) ? io : function(e) {
  return Pe(e) && Vu.call(e, "callee") && !qu.call(e, "callee");
};
const Gt = Wu;
function Gu() {
  return !1;
}
var Fa = typeof exports == "object" && exports && !exports.nodeType && exports, lo = Fa && typeof module == "object" && module && !module.nodeType && module, Ku = lo && lo.exports === Fa, so = Ku ? Te.Buffer : void 0, Ju = so ? so.isBuffer : void 0, Yu = Ju || Gu;
const yt = Yu;
var Xu = "[object Arguments]", Qu = "[object Array]", Zu = "[object Boolean]", ec = "[object Date]", tc = "[object Error]", nc = "[object Function]", rc = "[object Map]", oc = "[object Number]", ac = "[object Object]", ic = "[object RegExp]", lc = "[object Set]", sc = "[object String]", uc = "[object WeakMap]", cc = "[object ArrayBuffer]", dc = "[object DataView]", fc = "[object Float32Array]", pc = "[object Float64Array]", hc = "[object Int8Array]", vc = "[object Int16Array]", mc = "[object Int32Array]", gc = "[object Uint8Array]", bc = "[object Uint8ClampedArray]", yc = "[object Uint16Array]", wc = "[object Uint32Array]", q = {};
q[fc] = q[pc] = q[hc] = q[vc] = q[mc] = q[gc] = q[bc] = q[yc] = q[wc] = !0;
q[Xu] = q[Qu] = q[cc] = q[Zu] = q[dc] = q[ec] = q[tc] = q[nc] = q[rc] = q[oc] = q[ac] = q[ic] = q[lc] = q[sc] = q[uc] = !1;
function Sc(e) {
  return Pe(e) && Ia(e.length) && !!q[Ye(e)];
}
function vr(e) {
  return function(t) {
    return e(t);
  };
}
var Da = typeof exports == "object" && exports && !exports.nodeType && exports, vt = Da && typeof module == "object" && module && !module.nodeType && module, Ec = vt && vt.exports === Da, wn = Ec && Oa.process, Oc = function() {
  try {
    var e = vt && vt.require && vt.require("util").types;
    return e || wn && wn.binding && wn.binding("util");
  } catch {
  }
}();
const rt = Oc;
var uo = rt && rt.isTypedArray, Tc = uo ? vr(uo) : Sc;
const mr = Tc;
var xc = Object.prototype, Rc = xc.hasOwnProperty;
function ja(e, t) {
  var n = Ee(e), r = !n && Gt(e), o = !n && !r && yt(e), a = !n && !r && !o && mr(e), i = n || r || o || a, l = i ? Hu(e.length, String) : [], s = l.length;
  for (var u in e)
    (t || Rc.call(e, u)) && !(i && (u == "length" || o && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || dr(u, s))) && l.push(u);
  return l;
}
function La(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Ac = La(Object.keys, Object);
const Cc = Ac;
var Pc = Object.prototype, _c = Pc.hasOwnProperty;
function Ic(e) {
  if (!hr(e))
    return Cc(e);
  var t = [];
  for (var n in Object(e))
    _c.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function gr(e) {
  return un(e) ? ja(e) : Ic(e);
}
function $c(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Fc = Object.prototype, Dc = Fc.hasOwnProperty;
function jc(e) {
  if (!me(e))
    return $c(e);
  var t = hr(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Dc.call(e, r)) || n.push(r);
  return n;
}
function Ct(e) {
  return un(e) ? ja(e, !0) : jc(e);
}
var Lc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Nc = /^\w*$/;
function Mc(e, t) {
  if (Ee(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || sn(e) ? !0 : Nc.test(e) || !Lc.test(e) || t != null && e in Object(t);
}
var Bc = Qe(Object, "create");
const wt = Bc;
function Uc() {
  this.__data__ = wt ? wt(null) : {}, this.size = 0;
}
function kc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Hc = "__lodash_hash_undefined__", zc = Object.prototype, Vc = zc.hasOwnProperty;
function qc(e) {
  var t = this.__data__;
  if (wt) {
    var n = t[e];
    return n === Hc ? void 0 : n;
  }
  return Vc.call(t, e) ? t[e] : void 0;
}
var Wc = Object.prototype, Gc = Wc.hasOwnProperty;
function Kc(e) {
  var t = this.__data__;
  return wt ? t[e] !== void 0 : Gc.call(t, e);
}
var Jc = "__lodash_hash_undefined__";
function Yc(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = wt && t === void 0 ? Jc : t, this;
}
function Je(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Je.prototype.clear = Uc;
Je.prototype.delete = kc;
Je.prototype.get = qc;
Je.prototype.has = Kc;
Je.prototype.set = Yc;
function Xc() {
  this.__data__ = [], this.size = 0;
}
function cn(e, t) {
  for (var n = e.length; n--; )
    if (At(e[n][0], t))
      return n;
  return -1;
}
var Qc = Array.prototype, Zc = Qc.splice;
function ed(e) {
  var t = this.__data__, n = cn(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Zc.call(t, n, 1), --this.size, !0;
}
function td(e) {
  var t = this.__data__, n = cn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function nd(e) {
  return cn(this.__data__, e) > -1;
}
function rd(e, t) {
  var n = this.__data__, r = cn(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Ne(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ne.prototype.clear = Xc;
Ne.prototype.delete = ed;
Ne.prototype.get = td;
Ne.prototype.has = nd;
Ne.prototype.set = rd;
var od = Qe(Te, "Map");
const St = od;
function ad() {
  this.size = 0, this.__data__ = {
    hash: new Je(),
    map: new (St || Ne)(),
    string: new Je()
  };
}
function id(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function dn(e, t) {
  var n = e.__data__;
  return id(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ld(e) {
  var t = dn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function sd(e) {
  return dn(this, e).get(e);
}
function ud(e) {
  return dn(this, e).has(e);
}
function cd(e, t) {
  var n = dn(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Me(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Me.prototype.clear = ad;
Me.prototype.delete = ld;
Me.prototype.get = sd;
Me.prototype.has = ud;
Me.prototype.set = cd;
var dd = "Expected a function";
function br(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(dd);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (br.Cache || Me)(), n;
}
br.Cache = Me;
var fd = 500;
function pd(e) {
  var t = br(e, function(r) {
    return n.size === fd && n.clear(), r;
  }), n = t.cache;
  return t;
}
var hd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, vd = /\\(\\)?/g, md = pd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(hd, function(n, r, o, a) {
    t.push(o ? a.replace(vd, "$1") : r || n);
  }), t;
});
const gd = md;
function bd(e) {
  return e == null ? "" : Ra(e);
}
function fn(e, t) {
  return Ee(e) ? e : Mc(e, t) ? [e] : gd(bd(e));
}
var yd = 1 / 0;
function yr(e) {
  if (typeof e == "string" || sn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -yd ? "-0" : t;
}
function Na(e, t) {
  t = fn(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[yr(t[n++])];
  return n && n == r ? e : void 0;
}
function Kt(e, t, n) {
  var r = e == null ? void 0 : Na(e, t);
  return r === void 0 ? n : r;
}
function wr(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var co = ye ? ye.isConcatSpreadable : void 0;
function wd(e) {
  return Ee(e) || Gt(e) || !!(co && e && e[co]);
}
function Ma(e, t, n, r, o) {
  var a = -1, i = e.length;
  for (n || (n = wd), o || (o = []); ++a < i; ) {
    var l = e[a];
    t > 0 && n(l) ? t > 1 ? Ma(l, t - 1, n, r, o) : wr(o, l) : r || (o[o.length] = l);
  }
  return o;
}
function Sd(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ma(e, 1) : [];
}
function Ed(e) {
  return Pa(_a(e, void 0, Sd), e + "");
}
var Od = La(Object.getPrototypeOf, Object);
const Sr = Od;
var Td = "[object Object]", xd = Function.prototype, Rd = Object.prototype, Ba = xd.toString, Ad = Rd.hasOwnProperty, Cd = Ba.call(Object);
function Ua(e) {
  if (!Pe(e) || Ye(e) != Td)
    return !1;
  var t = Sr(e);
  if (t === null)
    return !0;
  var n = Ad.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ba.call(n) == Cd;
}
function Pd(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + t];
  return a;
}
function _d() {
  this.__data__ = new Ne(), this.size = 0;
}
function Id(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function $d(e) {
  return this.__data__.get(e);
}
function Fd(e) {
  return this.__data__.has(e);
}
var Dd = 200;
function jd(e, t) {
  var n = this.__data__;
  if (n instanceof Ne) {
    var r = n.__data__;
    if (!St || r.length < Dd - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Me(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Ce(e) {
  var t = this.__data__ = new Ne(e);
  this.size = t.size;
}
Ce.prototype.clear = _d;
Ce.prototype.delete = Id;
Ce.prototype.get = $d;
Ce.prototype.has = Fd;
Ce.prototype.set = jd;
function Ld(e, t) {
  return e && it(t, gr(t), e);
}
function Nd(e, t) {
  return e && it(t, Ct(t), e);
}
var ka = typeof exports == "object" && exports && !exports.nodeType && exports, fo = ka && typeof module == "object" && module && !module.nodeType && module, Md = fo && fo.exports === ka, po = Md ? Te.Buffer : void 0, ho = po ? po.allocUnsafe : void 0;
function Ha(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = ho ? ho(n) : new e.constructor(n);
  return e.copy(r), r;
}
function Bd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
function za() {
  return [];
}
var Ud = Object.prototype, kd = Ud.propertyIsEnumerable, vo = Object.getOwnPropertySymbols, Hd = vo ? function(e) {
  return e == null ? [] : (e = Object(e), Bd(vo(e), function(t) {
    return kd.call(e, t);
  }));
} : za;
const Er = Hd;
function zd(e, t) {
  return it(e, Er(e), t);
}
var Vd = Object.getOwnPropertySymbols, qd = Vd ? function(e) {
  for (var t = []; e; )
    wr(t, Er(e)), e = Sr(e);
  return t;
} : za;
const Va = qd;
function Wd(e, t) {
  return it(e, Va(e), t);
}
function qa(e, t, n) {
  var r = t(e);
  return Ee(e) ? r : wr(r, n(e));
}
function Nn(e) {
  return qa(e, gr, Er);
}
function Wa(e) {
  return qa(e, Ct, Va);
}
var Gd = Qe(Te, "DataView");
const Mn = Gd;
var Kd = Qe(Te, "Promise");
const Bn = Kd;
var Jd = Qe(Te, "Set");
const Un = Jd;
var mo = "[object Map]", Yd = "[object Object]", go = "[object Promise]", bo = "[object Set]", yo = "[object WeakMap]", wo = "[object DataView]", Xd = Xe(Mn), Qd = Xe(St), Zd = Xe(Bn), ef = Xe(Un), tf = Xe(Ln), qe = Ye;
(Mn && qe(new Mn(new ArrayBuffer(1))) != wo || St && qe(new St()) != mo || Bn && qe(Bn.resolve()) != go || Un && qe(new Un()) != bo || Ln && qe(new Ln()) != yo) && (qe = function(e) {
  var t = Ye(e), n = t == Yd ? e.constructor : void 0, r = n ? Xe(n) : "";
  if (r)
    switch (r) {
      case Xd:
        return wo;
      case Qd:
        return mo;
      case Zd:
        return go;
      case ef:
        return bo;
      case tf:
        return yo;
    }
  return t;
});
const Et = qe;
var nf = Object.prototype, rf = nf.hasOwnProperty;
function of(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && rf.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var af = Te.Uint8Array;
const Jt = af;
function Or(e) {
  var t = new e.constructor(e.byteLength);
  return new Jt(t).set(new Jt(e)), t;
}
function lf(e, t) {
  var n = t ? Or(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var sf = /\w*$/;
function uf(e) {
  var t = new e.constructor(e.source, sf.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var So = ye ? ye.prototype : void 0, Eo = So ? So.valueOf : void 0;
function cf(e) {
  return Eo ? Object(Eo.call(e)) : {};
}
function Ga(e, t) {
  var n = t ? Or(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var df = "[object Boolean]", ff = "[object Date]", pf = "[object Map]", hf = "[object Number]", vf = "[object RegExp]", mf = "[object Set]", gf = "[object String]", bf = "[object Symbol]", yf = "[object ArrayBuffer]", wf = "[object DataView]", Sf = "[object Float32Array]", Ef = "[object Float64Array]", Of = "[object Int8Array]", Tf = "[object Int16Array]", xf = "[object Int32Array]", Rf = "[object Uint8Array]", Af = "[object Uint8ClampedArray]", Cf = "[object Uint16Array]", Pf = "[object Uint32Array]";
function _f(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case yf:
      return Or(e);
    case df:
    case ff:
      return new r(+e);
    case wf:
      return lf(e, n);
    case Sf:
    case Ef:
    case Of:
    case Tf:
    case xf:
    case Rf:
    case Af:
    case Cf:
    case Pf:
      return Ga(e, n);
    case pf:
      return new r();
    case hf:
    case gf:
      return new r(e);
    case vf:
      return uf(e);
    case mf:
      return new r();
    case bf:
      return cf(e);
  }
}
function Ka(e) {
  return typeof e.constructor == "function" && !hr(e) ? Su(Sr(e)) : {};
}
var If = "[object Map]";
function $f(e) {
  return Pe(e) && Et(e) == If;
}
var Oo = rt && rt.isMap, Ff = Oo ? vr(Oo) : $f;
const Df = Ff;
var jf = "[object Set]";
function Lf(e) {
  return Pe(e) && Et(e) == jf;
}
var To = rt && rt.isSet, Nf = To ? vr(To) : Lf;
const Mf = Nf;
var Bf = 1, Uf = 2, kf = 4, Ja = "[object Arguments]", Hf = "[object Array]", zf = "[object Boolean]", Vf = "[object Date]", qf = "[object Error]", Ya = "[object Function]", Wf = "[object GeneratorFunction]", Gf = "[object Map]", Kf = "[object Number]", Xa = "[object Object]", Jf = "[object RegExp]", Yf = "[object Set]", Xf = "[object String]", Qf = "[object Symbol]", Zf = "[object WeakMap]", ep = "[object ArrayBuffer]", tp = "[object DataView]", np = "[object Float32Array]", rp = "[object Float64Array]", op = "[object Int8Array]", ap = "[object Int16Array]", ip = "[object Int32Array]", lp = "[object Uint8Array]", sp = "[object Uint8ClampedArray]", up = "[object Uint16Array]", cp = "[object Uint32Array]", V = {};
V[Ja] = V[Hf] = V[ep] = V[tp] = V[zf] = V[Vf] = V[np] = V[rp] = V[op] = V[ap] = V[ip] = V[Gf] = V[Kf] = V[Xa] = V[Jf] = V[Yf] = V[Xf] = V[Qf] = V[lp] = V[sp] = V[up] = V[cp] = !0;
V[qf] = V[Ya] = V[Zf] = !1;
function mt(e, t, n, r, o, a) {
  var i, l = t & Bf, s = t & Uf, u = t & kf;
  if (n && (i = o ? n(e, r, o, a) : n(e)), i !== void 0)
    return i;
  if (!me(e))
    return e;
  var c = Ee(e);
  if (c) {
    if (i = of(e), !l)
      return Ca(e, i);
  } else {
    var d = Et(e), f = d == Ya || d == Wf;
    if (yt(e))
      return Ha(e, l);
    if (d == Xa || d == Ja || f && !o) {
      if (i = s || f ? {} : Ka(e), !l)
        return s ? Wd(e, Nd(i, e)) : zd(e, Ld(i, e));
    } else {
      if (!V[d])
        return o ? e : {};
      i = _f(e, d, l);
    }
  }
  a || (a = new Ce());
  var h = a.get(e);
  if (h)
    return h;
  a.set(e, i), Mf(e) ? e.forEach(function(m) {
    i.add(mt(m, t, n, m, e, a));
  }) : Df(e) && e.forEach(function(m, y) {
    i.set(y, mt(m, t, n, y, e, a));
  });
  var p = u ? s ? Wa : Nn : s ? Ct : gr, v = c ? void 0 : p(e);
  return $u(v || e, function(m, y) {
    v && (y = m, m = e[y]), pr(i, y, mt(m, t, n, y, e, a));
  }), i;
}
var dp = 1, fp = 4;
function et(e) {
  return mt(e, dp | fp);
}
var pp = "__lodash_hash_undefined__";
function hp(e) {
  return this.__data__.set(e, pp), this;
}
function vp(e) {
  return this.__data__.has(e);
}
function Yt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Me(); ++t < n; )
    this.add(e[t]);
}
Yt.prototype.add = Yt.prototype.push = hp;
Yt.prototype.has = vp;
function mp(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function gp(e, t) {
  return e.has(t);
}
var bp = 1, yp = 2;
function Qa(e, t, n, r, o, a) {
  var i = n & bp, l = e.length, s = t.length;
  if (l != s && !(i && s > l))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var d = -1, f = !0, h = n & yp ? new Yt() : void 0;
  for (a.set(e, t), a.set(t, e); ++d < l; ) {
    var p = e[d], v = t[d];
    if (r)
      var m = i ? r(v, p, d, t, e, a) : r(p, v, d, e, t, a);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (h) {
      if (!mp(t, function(y, E) {
        if (!gp(h, E) && (p === y || o(p, y, n, r, a)))
          return h.push(E);
      })) {
        f = !1;
        break;
      }
    } else if (!(p === v || o(p, v, n, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), f;
}
function wp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function Sp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Ep = 1, Op = 2, Tp = "[object Boolean]", xp = "[object Date]", Rp = "[object Error]", Ap = "[object Map]", Cp = "[object Number]", Pp = "[object RegExp]", _p = "[object Set]", Ip = "[object String]", $p = "[object Symbol]", Fp = "[object ArrayBuffer]", Dp = "[object DataView]", xo = ye ? ye.prototype : void 0, Sn = xo ? xo.valueOf : void 0;
function jp(e, t, n, r, o, a, i) {
  switch (n) {
    case Dp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Fp:
      return !(e.byteLength != t.byteLength || !a(new Jt(e), new Jt(t)));
    case Tp:
    case xp:
    case Cp:
      return At(+e, +t);
    case Rp:
      return e.name == t.name && e.message == t.message;
    case Pp:
    case Ip:
      return e == t + "";
    case Ap:
      var l = wp;
    case _p:
      var s = r & Ep;
      if (l || (l = Sp), e.size != t.size && !s)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      r |= Op, i.set(e, t);
      var c = Qa(l(e), l(t), r, o, a, i);
      return i.delete(e), c;
    case $p:
      if (Sn)
        return Sn.call(e) == Sn.call(t);
  }
  return !1;
}
var Lp = 1, Np = Object.prototype, Mp = Np.hasOwnProperty;
function Bp(e, t, n, r, o, a) {
  var i = n & Lp, l = Nn(e), s = l.length, u = Nn(t), c = u.length;
  if (s != c && !i)
    return !1;
  for (var d = s; d--; ) {
    var f = l[d];
    if (!(i ? f in t : Mp.call(t, f)))
      return !1;
  }
  var h = a.get(e), p = a.get(t);
  if (h && p)
    return h == t && p == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var m = i; ++d < s; ) {
    f = l[d];
    var y = e[f], E = t[f];
    if (r)
      var P = i ? r(E, y, f, t, e, a) : r(y, E, f, e, t, a);
    if (!(P === void 0 ? y === E || o(y, E, n, r, a) : P)) {
      v = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (v && !m) {
    var F = e.constructor, O = t.constructor;
    F != O && "constructor" in e && "constructor" in t && !(typeof F == "function" && F instanceof F && typeof O == "function" && O instanceof O) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var Up = 1, Ro = "[object Arguments]", Ao = "[object Array]", Dt = "[object Object]", kp = Object.prototype, Co = kp.hasOwnProperty;
function Hp(e, t, n, r, o, a) {
  var i = Ee(e), l = Ee(t), s = i ? Ao : Et(e), u = l ? Ao : Et(t);
  s = s == Ro ? Dt : s, u = u == Ro ? Dt : u;
  var c = s == Dt, d = u == Dt, f = s == u;
  if (f && yt(e)) {
    if (!yt(t))
      return !1;
    i = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new Ce()), i || mr(e) ? Qa(e, t, n, r, o, a) : jp(e, t, s, n, r, o, a);
  if (!(n & Up)) {
    var h = c && Co.call(e, "__wrapped__"), p = d && Co.call(t, "__wrapped__");
    if (h || p) {
      var v = h ? e.value() : e, m = p ? t.value() : t;
      return a || (a = new Ce()), o(v, m, n, r, a);
    }
  }
  return f ? (a || (a = new Ce()), Bp(e, t, n, r, o, a)) : !1;
}
function Za(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Pe(e) && !Pe(t) ? e !== e && t !== t : Hp(e, t, n, r, Za, o);
}
function zp(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), i = r(t), l = i.length; l--; ) {
      var s = i[e ? l : ++o];
      if (n(a[s], s, a) === !1)
        break;
    }
    return t;
  };
}
var Vp = zp();
const qp = Vp;
var Wp = function() {
  return Te.Date.now();
};
const En = Wp;
var Gp = "Expected a function", Kp = Math.max, Jp = Math.min;
function Yp(e, t, n) {
  var r, o, a, i, l, s, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Gp);
  t = no(t) || 0, me(n) && (c = !!n.leading, d = "maxWait" in n, a = d ? Kp(no(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
  function h(A) {
    var $ = r, T = o;
    return r = o = void 0, u = A, i = e.apply(T, $), i;
  }
  function p(A) {
    return u = A, l = setTimeout(y, t), c ? h(A) : i;
  }
  function v(A) {
    var $ = A - s, T = A - u, j = t - $;
    return d ? Jp(j, a - T) : j;
  }
  function m(A) {
    var $ = A - s, T = A - u;
    return s === void 0 || $ >= t || $ < 0 || d && T >= a;
  }
  function y() {
    var A = En();
    if (m(A))
      return E(A);
    l = setTimeout(y, v(A));
  }
  function E(A) {
    return l = void 0, f && r ? h(A) : (r = o = void 0, i);
  }
  function P() {
    l !== void 0 && clearTimeout(l), u = 0, r = s = o = l = void 0;
  }
  function F() {
    return l === void 0 ? i : E(En());
  }
  function O() {
    var A = En(), $ = m(A);
    if (r = arguments, o = this, s = A, $) {
      if (l === void 0)
        return p(s);
      if (d)
        return clearTimeout(l), l = setTimeout(y, t), h(s);
    }
    return l === void 0 && (l = setTimeout(y, t)), i;
  }
  return O.cancel = P, O.flush = F, O;
}
function kn(e, t, n) {
  (n !== void 0 && !At(e[t], n) || n === void 0 && !(t in e)) && fr(e, t, n);
}
function Xp(e) {
  return Pe(e) && un(e);
}
function Hn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Qp(e) {
  return it(e, Ct(e));
}
function Zp(e, t, n, r, o, a, i) {
  var l = Hn(e, n), s = Hn(t, n), u = i.get(s);
  if (u) {
    kn(e, n, u);
    return;
  }
  var c = a ? a(l, s, n + "", e, t, i) : void 0, d = c === void 0;
  if (d) {
    var f = Ee(s), h = !f && yt(s), p = !f && !h && mr(s);
    c = s, f || h || p ? Ee(l) ? c = l : Xp(l) ? c = Ca(l) : h ? (d = !1, c = Ha(s, !0)) : p ? (d = !1, c = Ga(s, !0)) : c = [] : Ua(s) || Gt(s) ? (c = l, Gt(l) ? c = Qp(l) : (!me(l) || cr(l)) && (c = Ka(s))) : d = !1;
  }
  d && (i.set(s, c), o(c, s, r, a, i), i.delete(s)), kn(e, n, c);
}
function ei(e, t, n, r, o) {
  e !== t && qp(t, function(a, i) {
    if (o || (o = new Ce()), me(a))
      Zp(e, t, i, n, ei, r, o);
    else {
      var l = r ? r(Hn(e, i), a, i + "", e, t, o) : void 0;
      l === void 0 && (l = a), kn(e, i, l);
    }
  }, Ct);
}
function eh(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function th(e, t) {
  return t.length < 2 ? e : Na(e, Pd(t, 0, -1));
}
function nh(e, t) {
  return Za(e, t);
}
var rh = Uu(function(e, t, n) {
  ei(e, t, n);
});
const zn = rh;
function oh(e, t) {
  return t = fn(t, e), e = th(e, t), e == null || delete e[yr(eh(t))];
}
function ah(e) {
  return Ua(e) ? void 0 : e;
}
var ih = 1, lh = 2, sh = 4, uh = Ed(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = xa(t, function(a) {
    return a = fn(a, e), r || (r = a.length > 1), a;
  }), it(e, Wa(e), n), r && (n = mt(n, ih | lh | sh, ah));
  for (var o = t.length; o--; )
    oh(n, t[o]);
  return n;
});
const Po = uh;
function ch(e, t, n, r) {
  if (!me(e))
    return e;
  t = fn(t, e);
  for (var o = -1, a = t.length, i = a - 1, l = e; l != null && ++o < a; ) {
    var s = yr(t[o]), u = n;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (o != i) {
      var c = l[s];
      u = r ? r(c, s, l) : void 0, u === void 0 && (u = me(c) ? c : dr(t[o + 1]) ? [] : {});
    }
    pr(l, s, u), l = l[s];
  }
  return e;
}
function ti(e, t, n) {
  return e == null ? e : ch(e, t, n);
}
let Ot = wa.create(), ni = (e, t) => {
  var n, r;
  return `${e.method}:${(r = (n = e.baseURL) != null ? n : t.defaults.baseURL) != null ? r : ""}${e.url}`;
}, ri = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const Xt = {}, $e = {
  get: (e, t = {}, n = {}) => ct(ut("get", e, t, n)),
  post: (e, t = {}, n = {}) => ct(ut("post", e, t, n)),
  patch: (e, t = {}, n = {}) => ct(ut("patch", e, t, n)),
  put: (e, t = {}, n = {}) => ct(ut("put", e, t, n)),
  delete: (e, t = {}, n = {}) => ct(ut("delete", e, t, n)),
  use(e) {
    return Ot = e, $e;
  },
  axios() {
    return Ot;
  },
  fingerprintRequestsUsing(e) {
    return ni = e === null ? () => null : e, $e;
  },
  determineSuccessUsing(e) {
    return ri = e, $e;
  }
}, ut = (e, t, n, r) => ({
  url: t,
  method: e,
  ...r,
  ...["get", "delete"].includes(e) ? {
    params: zn({}, n, r == null ? void 0 : r.params)
  } : {
    data: zn({}, n, r == null ? void 0 : r.data)
  }
}), ct = (e = {}) => {
  var n, r, o;
  const t = [
    dh,
    ph,
    hh
  ].reduce((a, i) => i(a), e);
  return ((n = t.onBefore) != null ? n : () => !0)() === !1 ? Promise.resolve(null) : (((r = t.onStart) != null ? r : () => null)(), Ot.request(t).then(async (a) => {
    var u, c, d, f;
    t.precognitive && _o(a);
    const i = a.status;
    let l = a;
    return t.precognitive && t.onPrecognitionSuccess && ri(l) && (l = await Promise.resolve((u = t.onPrecognitionSuccess(l)) != null ? u : l)), t.onSuccess && fh(i) && (l = await Promise.resolve((c = t.onSuccess(l)) != null ? c : l)), (f = ((d = Io(t, i)) != null ? d : (h) => h)(l)) != null ? f : l;
  }, (a) => {
    var l;
    return vh(a) ? Promise.reject(a) : (t.precognitive && _o(a.response), ((l = Io(t, a.response.status)) != null ? l : (s, u) => Promise.reject(u))(a.response, a));
  }).finally((o = t.onFinish) != null ? o : () => null));
}, dh = (e) => {
  var n, r, o;
  const t = (n = e.only) != null ? n : e.validate;
  return {
    ...e,
    timeout: (o = (r = e.timeout) != null ? r : Ot.defaults.timeout) != null ? o : 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? ni(e, Ot) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": mh(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, fh = (e) => e >= 200 && e < 300, ph = (e) => {
  var t;
  return typeof e.fingerprint != "string" || ((t = Xt[e.fingerprint]) == null || t.abort(), delete Xt[e.fingerprint]), e;
}, hh = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (Xt[e.fingerprint] = new AbortController(), {
  ...e,
  signal: Xt[e.fingerprint].signal
}), _o = (e) => {
  var t;
  if (((t = e.headers) == null ? void 0 : t.precognition) !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, vh = (e) => {
  var t;
  return !Ea(e) || typeof ((t = e.response) == null ? void 0 : t.status) != "number" || Sa(e);
}, Io = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], mh = (e) => {
  var t, n, r, o, a, i;
  return (i = (a = (r = (t = e.headers) == null ? void 0 : t["Content-Type"]) != null ? r : (n = e.headers) == null ? void 0 : n["Content-type"]) != null ? a : (o = e.headers) == null ? void 0 : o["content-type"]) != null ? i : oi(e.data) ? "multipart/form-data" : "application/json";
}, oi = (e) => Tr(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => oi(t)), Tr = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, Vn = (e) => typeof e == "string" ? e : e(), qn = (e) => typeof e == "string" ? e.toLowerCase() : e(), gh = (e, t = {}) => {
  const n = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let r = !1, o = !1;
  const a = (b) => b !== o ? (o = b, n.validatingChanged) : [];
  let i = [];
  const l = (b) => {
    const w = [...new Set(b)];
    return i.length !== w.length || !w.every((S) => i.includes(S)) ? (i = w, n.validatedChanged) : [];
  }, s = () => i.filter((b) => typeof d[b] > "u");
  let u = [];
  const c = (b) => {
    const w = [...new Set(b)];
    return u.length !== w.length || !w.every((S) => u.includes(S)) ? (u = w, n.touchedChanged) : [];
  };
  let d = {};
  const f = (b) => {
    const w = bh(b);
    return nh(d, w) ? [] : (d = w, n.errorsChanged);
  }, h = (b) => {
    const w = { ...d };
    return delete w[Ht(b)], f(w);
  }, p = () => Object.keys(d).length > 0;
  let v = 1500;
  const m = (b) => {
    v = b, A.cancel(), A = O();
  };
  let y = t, E = null, P = [], F = null;
  const O = () => Yp((b) => {
    e({
      get: (w, S = {}, I = {}) => $e.get(w, j(S), $(I, b, S)),
      post: (w, S = {}, I = {}) => $e.post(w, j(S), $(I, b, S)),
      patch: (w, S = {}, I = {}) => $e.patch(w, j(S), $(I, b, S)),
      put: (w, S = {}, I = {}) => $e.put(w, j(S), $(I, b, S)),
      delete: (w, S = {}, I = {}) => $e.delete(w, j(S), $(I, b, S))
    }).catch((w) => {
      var S;
      return Sa(w) || Ea(w) && ((S = w.response) == null ? void 0 : S.status) === 422 ? null : Promise.reject(w);
    });
  }, v, { leading: !0, trailing: !0 });
  let A = O();
  const $ = (b, w, S = {}) => {
    var z, te, we;
    const I = {
      ...b,
      ...w
    }, L = Array.from((te = (z = I.only) != null ? z : I.validate) != null ? te : u);
    return {
      ...w,
      ...$s(b, w),
      only: L,
      timeout: (we = I.timeout) != null ? we : 5e3,
      onValidationError: (X, fe) => ([
        ...l([...i, ...L]),
        ...f(zn(Po({ ...d }, L), X.data.errors))
      ].forEach((H) => H()), I.onValidationError ? I.onValidationError(X, fe) : Promise.reject(fe)),
      onSuccess: (X) => (l([...i, ...L]).forEach((fe) => fe()), I.onSuccess ? I.onSuccess(X) : X),
      onPrecognitionSuccess: (X) => ([
        ...l([...i, ...L]),
        ...f(Po({ ...d }, L))
      ].forEach((fe) => fe()), I.onPrecognitionSuccess ? I.onPrecognitionSuccess(X) : X),
      onBefore: () => I.onBeforeValidation && I.onBeforeValidation({ data: S, touched: u }, { data: y, touched: P }) === !1 || (I.onBefore || (() => !0))() === !1 ? !1 : (F = u, E = S, !0),
      onStart: () => {
        var X;
        a(!0).forEach((fe) => fe()), ((X = I.onStart) != null ? X : () => null)();
      },
      onFinish: () => {
        var X;
        a(!1).forEach((fe) => fe()), P = F, y = E, F = E = null, ((X = I.onFinish) != null ? X : () => null)();
      }
    };
  }, T = (b, w, S) => {
    var I, L;
    if (typeof b > "u") {
      const z = Array.from((L = (I = S == null ? void 0 : S.only) != null ? I : S == null ? void 0 : S.validate) != null ? L : []);
      c([...u, ...z]).forEach((te) => te()), A(S != null ? S : {});
      return;
    }
    if (Tr(w) && !r) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    b = Ht(b), Kt(y, b) !== w && (c([b, ...u]).forEach((z) => z()), A(S != null ? S : {}));
  }, j = (b) => r === !1 ? Wn(b) : b, x = {
    touched: () => u,
    validate(b, w, S) {
      return typeof b == "object" && !("target" in b) && (S = b, b = w = void 0), T(b, w, S), x;
    },
    touch(b) {
      const w = Array.isArray(b) ? b : [Ht(b)];
      return c([...u, ...w]).forEach((S) => S()), x;
    },
    validating: () => o,
    valid: s,
    errors: () => d,
    hasErrors: p,
    setErrors(b) {
      return f(b).forEach((w) => w()), x;
    },
    forgetError(b) {
      return h(b).forEach((w) => w()), x;
    },
    reset(...b) {
      if (b.length === 0)
        c([]).forEach((w) => w());
      else {
        const w = [...u];
        b.forEach((S) => {
          w.includes(S) && w.splice(w.indexOf(S), 1), ti(y, S, Kt(t, S));
        }), c(w).forEach((S) => S());
      }
      return x;
    },
    setTimeout(b) {
      return m(b), x;
    },
    on(b, w) {
      return n[b].push(w), x;
    },
    validateFiles() {
      return r = !0, x;
    }
  };
  return x;
}, ai = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), bh = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: typeof e[n] == "string" ? [e[n]] : e[n]
}), {}), Ht = (e) => typeof e != "string" ? e.target.name : e, Wn = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((n) => {
    const r = t[n];
    if (r !== null) {
      if (Tr(r)) {
        delete t[n];
        return;
      }
      if (Array.isArray(r)) {
        t[n] = Object.values(Wn({ ...r }));
        return;
      }
      if (typeof r == "object") {
        t[n] = Wn(t[n]);
        return;
      }
    }
  }), t;
}, yh = (e, t, n, r = {}) => {
  const o = et(typeof n == "function" ? n() : n), a = Object.keys(o), i = _([]), l = _([]), s = gh((d) => d[qn(e)](Vn(t), c.data(), r), o).on("validatingChanged", () => {
    c.validating = s.validating();
  }).on("validatedChanged", () => {
    i.value = s.valid();
  }).on("touchedChanged", () => {
    l.value = s.touched();
  }).on("errorsChanged", () => {
    c.hasErrors = s.hasErrors(), c.errors = ai(s.errors()), i.value = s.valid();
  }), u = (d) => ({
    ...d,
    precognitive: !1,
    onStart: () => {
      var f;
      c.processing = !0, ((f = d.onStart) != null ? f : () => null)();
    },
    onFinish: () => {
      var f;
      c.processing = !1, ((f = d.onFinish) != null ? f : () => null)();
    },
    onValidationError: (f, h) => (s.setErrors(f.data.errors), d.onValidationError ? d.onValidationError(f) : Promise.reject(h))
  });
  let c = {
    ...et(o),
    data() {
      const d = et(Ie(c));
      return a.reduce((f, h) => ({
        ...f,
        [h]: d[h]
      }), {});
    },
    setData(d) {
      return Object.keys(d).forEach((f) => {
        c[f] = d[f];
      }), c;
    },
    touched(d) {
      return l.value.includes(d);
    },
    touch(d) {
      return s.touch(d), c;
    },
    validate(d, f) {
      return typeof d == "object" && !("target" in d) && (f = d, d = void 0), typeof d > "u" ? s.validate(f) : (d = Ht(d), s.validate(d, Kt(c.data(), d), f)), c;
    },
    validating: !1,
    valid(d) {
      return i.value.includes(d);
    },
    invalid(d) {
      return typeof c.errors[d] < "u";
    },
    errors: {},
    hasErrors: !1,
    setErrors(d) {
      return s.setErrors(d), c;
    },
    forgetError(d) {
      return s.forgetError(d), c;
    },
    reset(...d) {
      const f = et(typeof n == "function" ? n() : o);
      return d.length === 0 ? a.forEach((h) => c[h] = f[h]) : d.forEach((h) => ti(c, h, Kt(f, h))), s.reset(...d), c;
    },
    setValidationTimeout(d) {
      return s.setTimeout(d), c;
    },
    processing: !1,
    async submit(d = {}) {
      return $e[qn(e)](Vn(t), c.data(), u(d));
    },
    validateFiles() {
      return s.validateFiles(), c;
    },
    validator() {
      return s;
    }
  };
  return c = rr(c), c;
}, wh = (e, t, n, r = {}) => {
  const o = Ko(n), a = yh(e, t, n, r);
  a.validator().on("errorsChanged", () => {
    s(), u(
      ai(a.validator().errors())
    );
  });
  const i = o.submit.bind(o), l = o.reset.bind(o), s = o.clearErrors.bind(o), u = o.setError.bind(o), c = o.transform.bind(o);
  let d = (h) => h;
  const f = Object.assign(o, {
    validating: a.validating,
    touched: a.touched,
    touch(h) {
      return a.touch(h), f;
    },
    valid: a.valid,
    invalid: a.invalid,
    setData(h) {
      return Object.keys(h).forEach((p) => {
        f[p] = h[p];
      }), f;
    },
    clearErrors(...h) {
      return s(...h), h.length === 0 ? a.setErrors({}) : h.forEach(a.forgetError), f;
    },
    reset(...h) {
      l(...h), a.reset(...h);
    },
    setErrors(h) {
      return a.setErrors(h), f;
    },
    forgetError(h) {
      return a.forgetError(h), f;
    },
    setError(h, p) {
      let v;
      if (typeof h != "object") {
        if (typeof p > "u")
          throw new Error("The `value` is required.");
        v = { [h]: p };
      } else
        v = h;
      return f.setErrors({
        ...o.errors,
        ...v
      }), f;
    },
    transform(h) {
      return c(h), d = h, f;
    },
    validate(h, p) {
      var v;
      return a.setData(d(o.data())), typeof h == "object" && !("target" in h) && (p = h, h = void 0), typeof p == "object" && (p.onValidationError = (v = p.onValidationError) != null ? v : p == null ? void 0 : p.onError), typeof h > "u" ? a.validate(p) : a.validate(h, p), f;
    },
    setValidationTimeout(h) {
      return a.setValidationTimeout(h), f;
    },
    validateFiles() {
      return a.validateFiles(), f;
    },
    submit(h = {}, p, v) {
      typeof h != "string" && (v = h, p = Vn(t), h = qn(e)), i(h, p, {
        ...v,
        onError: (m) => {
          if (a.validator().setErrors(m), v != null && v.onError)
            return v.onError(m);
        }
      });
    },
    validator: a.validator
  });
  return ee(() => f.validating = a.validating), f;
};
function Sh(e, t) {
  return B(), Y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ne("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Eh = { name: "Spinner" }, $o = /* @__PURE__ */ M({
  ...Eh,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (t, n) => (B(), Y("svg", {
      class: Zt(["h-5 w-5 animate-spin", t.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, n[0] || (n[0] = [
      ne("circle", {
        class: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4"
      }, null, -1),
      ne("path", {
        class: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      }, null, -1)
    ]), 2));
  }
}), Oh = ["disabled", "type"], Th = ["href"], xh = { name: "Button" }, ii = /* @__PURE__ */ M({
  ...xh,
  props: {
    as: { default: "a" },
    external: { type: Boolean },
    href: { default: "" },
    loading: { type: Boolean },
    spinnerClass: { default: "text-white" },
    type: {}
  },
  setup(e) {
    const t = e, n = R(() => t.type !== void 0 && t.as !== "button" ? (console.warn(
      "Warning: The 'as' prop should be set to 'button' when using the 'type' prop. This will be an error in a future release."
    ), "button") : t.as), r = [
      "relative",
      "inline-flex",
      "items-center",
      "rounded-md",
      "border",
      "px-4",
      "py-2",
      "text-sm",
      "font-medium",
      "leading-5",
      "focus:outline-none",
      "focus-visible:outline-none"
    ];
    return (o, a) => n.value === "button" ? (B(), Y("button", je({
      key: 0,
      class: r,
      disabled: o.loading,
      type: o.type
    }, o.$attrs), [
      ue(o.$slots, "default"),
      Pn(nt($o, {
        class: "ml-3",
        "text-class": o.spinnerClass
      }, null, 8, ["text-class"]), [
        [Nr, o.loading]
      ])
    ], 16, Oh)) : o.external ? (B(), Y("a", je({
      key: 2,
      href: o.href,
      class: r
    }, o.$attrs), [
      ue(o.$slots, "default")
    ], 16, Th)) : (B(), pe(re(qi), je({
      key: 1,
      as: o.as,
      href: o.href,
      disabled: o.loading,
      class: r
    }, o.$attrs), {
      default: Ae(() => [
        ue(o.$slots, "default"),
        Pn(nt($o, {
          class: "ml-3",
          "text-class": o.spinnerClass
        }, null, 8, ["text-class"]), [
          [Nr, o.loading]
        ])
      ]),
      _: 3
    }, 16, ["as", "href", "disabled"]));
  }
}), Rh = { class: "border-l-4 border-yellow-400 bg-yellow-50 p-4" }, Ah = { class: "flex" }, Ch = {
  key: 0,
  class: "shrink-0"
}, Ph = { class: "ml-3" }, _h = { class: "text-sm text-yellow-700" }, Ih = { class: "mt-4" }, $h = { class: "-mx-2 -my-1.5 flex items-center space-x-3" }, Fh = { name: "WarningAlert" }, Dh = /* @__PURE__ */ M({
  ...Fh,
  props: {
    withoutIcon: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => (B(), Y("div", Rh, [
      ne("div", Ah, [
        t.withoutIcon ? De("", !0) : (B(), Y("div", Ch, [
          nt(re(Sh), {
            class: "h-5 w-5 text-yellow-400",
            "aria-hidden": "true"
          })
        ])),
        ne("div", Ph, [
          ne("p", _h, [
            ue(t.$slots, "default")
          ]),
          ne("div", Ih, [
            ne("div", $h, [
              ue(t.$slots, "actions")
            ])
          ])
        ])
      ])
    ]));
  }
}), jh = { name: "WarningAlertButton" }, Lh = /* @__PURE__ */ M({
  ...jh,
  props: {
    as: {},
    external: { type: Boolean, default: !1 },
    href: {},
    loading: { type: Boolean },
    type: {}
  },
  setup(e) {
    const t = [
      "border-transparent",
      "bg-yellow-50",
      "text-yellow-800",
      "hover:bg-yellow-100",
      "focus:border-yellow-600",
      "active:bg-yellow-600",
      "!px-2"
    ];
    return (n, r) => (B(), pe(ii, je({
      as: n.as,
      external: n.external,
      href: n.href,
      loading: n.loading,
      type: n.type,
      class: t
    }, n.$attrs), {
      default: Ae(() => [
        ue(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "external", "href", "loading", "type"]));
  }
}), Nh = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Mh = { name: "PrimaryButton" }, Bh = /* @__PURE__ */ M({
  ...Mh,
  props: {
    as: {},
    external: { type: Boolean, default: !1 },
    href: {},
    loading: { type: Boolean },
    type: {}
  },
  setup(e) {
    const t = [
      "border-transparent",
      "bg-primary-600",
      "text-white",
      "hover:bg-primary-500",
      "focus:border-primary-700",
      "active:bg-primary-700"
    ];
    return (n, r) => (B(), pe(ii, je({
      as: n.as,
      external: n.external,
      href: n.href,
      loading: n.loading,
      type: n.type,
      class: t
    }, n.$attrs), {
      default: Ae(() => [
        ue(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "external", "href", "loading", "type"]));
  }
});
function tt(e, t, n) {
  var r;
  let o = (r = n.initialDeps) != null ? r : [], a;
  return () => {
    var i, l, s, u;
    let c;
    n.key && ((i = n.debug) == null ? void 0 : i.call(n)) && (c = Date.now());
    const d = e();
    if (!(d.length !== o.length || d.some((h, p) => o[p] !== h)))
      return a;
    o = d;
    let f;
    if (n.key && ((l = n.debug) == null ? void 0 : l.call(n)) && (f = Date.now()), a = t(...d), n.key && ((s = n.debug) == null ? void 0 : s.call(n))) {
      const h = Math.round((Date.now() - c) * 100) / 100, p = Math.round((Date.now() - f) * 100) / 100, v = p / 16, m = (y, E) => {
        for (y = String(y); y.length < E; )
          y = " " + y;
        return y;
      };
      console.info(
        `%c\u23F1 ${m(p, 5)} /${m(h, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * v, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return (u = n == null ? void 0 : n.onChange) == null || u.call(n, a), a;
  };
}
function On(e, t) {
  if (e === void 0)
    throw new Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
  return e;
}
const Uh = (e, t) => Math.abs(e - t) < 1, kh = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
}, Hh = (e) => e, zh = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, Vh = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const o = (i) => {
    const { width: l, height: s } = i;
    t({ width: Math.round(l), height: Math.round(s) });
  };
  if (o(n.getBoundingClientRect()), !r.ResizeObserver)
    return () => {
    };
  const a = new r.ResizeObserver((i) => {
    const l = i[0];
    if (l != null && l.borderBoxSize) {
      const s = l.borderBoxSize[0];
      if (s) {
        o({ width: s.inlineSize, height: s.blockSize });
        return;
      }
    }
    o(n.getBoundingClientRect());
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Fo = {
  passive: !0
}, qh = typeof window > "u" ? !0 : "onscrollend" in window, Wh = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const a = qh ? () => {
  } : kh(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), i = (u) => () => {
    const { horizontal: c, isRtl: d } = e.options;
    o = c ? n.scrollLeft * (d && -1 || 1) : n.scrollTop, a(), t(o, u);
  }, l = i(!0), s = i(!1);
  return s(), n.addEventListener("scroll", l, Fo), n.addEventListener("scrollend", s, Fo), () => {
    n.removeEventListener("scroll", l), n.removeEventListener("scrollend", s);
  };
}, Gh = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    e.getBoundingClientRect()[n.options.horizontal ? "width" : "height"]
  );
}, Kh = (e, {
  adjustments: t = 0,
  behavior: n
}, r) => {
  var o, a;
  const i = e + t;
  (a = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || a.call(o, {
    [r.options.horizontal ? "left" : "top"]: i,
    behavior: n
  });
};
class Jh {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((a) => {
          this._measureElement(a.target, a);
        });
      }));
      return {
        disconnect: () => {
          var o;
          (o = r()) == null || o.disconnect(), n = null;
        },
        observe: (o) => {
          var a;
          return (a = r()) == null ? void 0 : a.observe(o, { box: "border-box" });
        },
        unobserve: (o) => {
          var a;
          return (a = r()) == null ? void 0 : a.unobserve(o);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      Object.entries(n).forEach(([r, o]) => {
        typeof o > "u" && delete n[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Hh,
        rangeExtractor: zh,
        onChange: () => {
        },
        measureElement: Gh,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        ...n
      };
    }, this.notify = (n) => {
      var r, o;
      (o = (r = this.options).onChange) == null || o.call(r, this, n);
    }, this.maybeNotify = tt(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: process.env.NODE_ENV !== "production" && "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var n, r;
      const o = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== o) {
        if (this.cleanup(), !o) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = o, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = (n = (r = this.scrollElement) == null ? void 0 : r.window) != null ? n : null, this.elementsCache.forEach((a) => {
          this.observer.observe(a);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (a) => {
            this.scrollRect = a, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (a, i) => {
            this.scrollAdjustments = 0, this.scrollDirection = i ? this.getScrollOffset() < a ? "forward" : "backward" : null, this.scrollOffset = a, this.isScrolling = i, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => {
      var n;
      return this.options.enabled ? (this.scrollRect = (n = this.scrollRect) != null ? n : this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0);
    }, this.getScrollOffset = () => {
      var n;
      return this.options.enabled ? (this.scrollOffset = (n = this.scrollOffset) != null ? n : typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset, this.scrollOffset) : (this.scrollOffset = null, 0);
    }, this.getFurthestMeasurement = (n, r) => {
      const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      for (let i = r - 1; i >= 0; i--) {
        const l = n[i];
        if (o.has(l.lane))
          continue;
        const s = a.get(
          l.lane
        );
        if (s == null || l.end > s.end ? a.set(l.lane, l) : l.end < s.end && o.set(l.lane, !0), o.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = tt(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (n, r, o, a, i) => (this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: o,
        getItemKey: a,
        enabled: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = tt(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: a, enabled: i }, l) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const s = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, s);
        for (let c = s; c < n; c++) {
          const d = a(c), f = this.options.lanes === 1 ? u[c - 1] : this.getFurthestMeasurement(u, c), h = f ? f.end + this.options.gap : r + o, p = l.get(d), v = typeof p == "number" ? p : this.options.estimateSize(c), m = h + v, y = f ? f.lane : c % this.options.lanes;
          u[c] = {
            index: c,
            start: h,
            size: v,
            end: m,
            key: d,
            lane: y
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = tt(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (n, r, o) => this.range = n.length > 0 && r > 0 ? Yh({
        measurements: n,
        outerSize: r,
        scrollOffset: o
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getIndexes = tt(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (n, r, o, a) => r === null ? [] : n({
        startIndex: r.startIndex,
        endIndex: r.endIndex,
        overscan: o,
        count: a
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const r = this.options.indexAttribute, o = n.getAttribute(r);
      return o ? parseInt(o, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (n, r) => {
      const o = this.indexFromElement(n), a = this.measurementsCache[o];
      if (!a)
        return;
      const i = a.key, l = this.elementsCache.get(i);
      l !== n && (l && this.observer.unobserve(l), this.observer.observe(n), this.elementsCache.set(i, n)), n.isConnected && this.resizeItem(o, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      var o;
      const a = this.measurementsCache[n];
      if (!a)
        return;
      const i = (o = this.itemSizeCache.get(a.key)) != null ? o : a.size, l = r - i;
      l !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(a, l, this) : a.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", l), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += l,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(a.index), this.itemSizeCache = new Map(this.itemSizeCache.set(a.key, r)), this.notify(!1));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, o) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = tt(
      () => [this.getIndexes(), this.getMeasurements()],
      (n, r) => {
        const o = [];
        for (let a = 0, i = n.length; a < i; a++) {
          const l = n[a], s = r[l];
          o.push(s);
        }
        return o;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return On(
          r[li(
            0,
            r.length - 1,
            (o) => On(r[o]).start,
            n
          )]
        );
    }, this.getOffsetForAlignment = (n, r) => {
      const o = this.getSize(), a = this.getScrollOffset();
      r === "auto" && (n <= a ? r = "start" : n >= a + o ? r = "end" : r = "start"), r === "start" ? n = n : r === "end" ? n = n - o : r === "center" && (n = n - o / 2);
      const i = this.options.horizontal ? "scrollWidth" : "scrollHeight", l = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[i] : this.scrollElement[i] : 0) - o;
      return Math.max(Math.min(l, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const o = this.measurementsCache[n];
      if (!o)
        return;
      const a = this.getSize(), i = this.getScrollOffset();
      if (r === "auto")
        if (o.end >= i + a - this.options.scrollPaddingEnd)
          r = "end";
        else if (o.start <= i + this.options.scrollPaddingStart)
          r = "start";
        else
          return [i, r];
      const l = r === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(l, r), r];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (n, { align: r = "start", behavior: o } = {}) => {
      this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
        adjustments: void 0,
        behavior: o
      });
    }, this.scrollToIndex = (n, { align: r = "auto", behavior: o } = {}) => {
      n = Math.max(0, Math.min(n, this.options.count - 1)), this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const a = this.getOffsetForIndex(n, r);
      if (!a)
        return;
      const [i, l] = a;
      this._scrollToOffset(i, { adjustments: void 0, behavior: o }), o !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(n)
        )) {
          const [s] = On(
            this.getOffsetForIndex(n, l)
          );
          Uh(s, this.getScrollOffset()) || this.scrollToIndex(n, { align: l, behavior: o });
        } else
          this.scrollToIndex(n, { align: l, behavior: o });
      }));
    }, this.scrollBy = (n, { behavior: r } = {}) => {
      this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + n, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var n, r;
      const o = this.getMeasurements();
      let a;
      return o.length === 0 ? a = this.options.paddingStart : a = this.options.lanes === 1 ? (n = (r = o[o.length - 1]) == null ? void 0 : r.end) != null ? n : 0 : Math.max(
        ...o.slice(-this.options.lanes).map((i) => i.end)
      ), Math.max(
        a - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (n, {
      adjustments: r,
      behavior: o
    }) => {
      this.options.scrollToFn(n, { behavior: o, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
}
const li = (e, t, n, r) => {
  for (; e <= t; ) {
    const o = (e + t) / 2 | 0, a = n(o);
    if (a < r)
      e = o + 1;
    else if (a > r)
      t = o - 1;
    else
      return o;
  }
  return e > 0 ? e - 1 : 0;
};
function Yh({
  measurements: e,
  outerSize: t,
  scrollOffset: n
}) {
  const r = e.length - 1, o = li(0, r, (i) => e[i].start, n);
  let a = o;
  for (; a < r && e[a].end < n + t; )
    a++;
  return { startIndex: o, endIndex: a };
}
function Xh(e) {
  const t = new Jh(re(e)), n = Yo(t), r = t._didMount();
  return ce(
    () => re(e).getScrollElement(),
    (o) => {
      o && t._willUpdate();
    },
    {
      immediate: !0
    }
  ), ce(
    () => re(e),
    (o) => {
      t.setOptions({
        ...o,
        onChange: (a, i) => {
          var l;
          Mr(n), (l = o.onChange) == null || l.call(o, a, i);
        }
      }), t._willUpdate(), Mr(n);
    },
    {
      immediate: !0
    }
  ), Yi(r), n;
}
function Qh(e) {
  return Xh(
    R(() => ({
      observeElementRect: Vh,
      observeElementOffset: Wh,
      scrollToFn: Kh,
      ...re(e)
    }))
  );
}
function Zh(e, t, n) {
  let r = _(n == null ? void 0 : n.value), o = R(() => e.value !== void 0);
  return [R(() => o.value ? e.value : r.value), function(a) {
    return o.value || (r.value = a), t == null ? void 0 : t(a);
  }];
}
function xr(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function He() {
  let e = [], t = { addEventListener(n, r, o, a) {
    return n.addEventListener(r, o, a), t.add(() => n.removeEventListener(r, o, a));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return xr(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, o) {
    let a = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: a });
    });
  }, group(n) {
    let r = He();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0)
        for (let o of e.splice(r, 1))
          o();
    };
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return t;
}
function ev() {
  let e = He();
  return de(() => e.dispose()), e;
}
function tv() {
  let e = ev();
  return (t) => {
    e.dispose(), e.nextFrame(t);
  };
}
var Do;
let nv = Symbol("headlessui.useid"), rv = 0;
const se = (Do = Lr.useId) != null ? Do : function() {
  return Lr.inject(nv, () => `${++rv}`)();
};
function C(e) {
  var t;
  if (e == null || e.value == null)
    return null;
  let n = (t = e.value.$el) != null ? t : e.value;
  return n instanceof Node ? n : null;
}
function oe(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, oe), r;
}
var ov = Object.defineProperty, av = (e, t, n) => t in e ? ov(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jo = (e, t, n) => (av(e, typeof t != "symbol" ? t + "" : t, n), n);
class iv {
  constructor() {
    jo(this, "current", this.detect()), jo(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let Pt = new iv();
function Be(e) {
  if (Pt.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = C(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let Gn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Re = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Re || {}), si = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(si || {}), lv = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(lv || {});
function ui(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Gn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Rr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Rr || {});
function Ar(e, t = 0) {
  var n;
  return e === ((n = Be(e)) == null ? void 0 : n.body) ? !1 : oe(t, { [0]() {
    return e.matches(Gn);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Gn))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
function ci(e) {
  let t = Be(e);
  ie(() => {
    t && !Ar(t.activeElement, 0) && ke(e);
  });
}
var sv = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(sv || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function ke(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let uv = ["textarea", "input"].join(",");
function cv(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, uv)) != null ? n : !1;
}
function Cr(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), a = t(r);
    if (o === null || a === null)
      return 0;
    let i = o.compareDocumentPosition(a);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function dv(e, t) {
  return gt(ui(), t, { relativeTo: e });
}
function gt(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  var a;
  let i = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, l = Array.isArray(e) ? n ? Cr(e) : e : ui(e);
  o.length > 0 && l.length > 1 && (l = l.filter((p) => !o.includes(p))), r = r != null ? r : i.activeElement;
  let s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, l.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, l.indexOf(r)) + 1;
    if (t & 8)
      return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, d = 0, f = l.length, h;
  do {
    if (d >= f || d + f <= 0)
      return 0;
    let p = u + d;
    if (t & 16)
      p = (p + f) % f;
    else {
      if (p < 0)
        return 3;
      if (p >= f)
        return 1;
    }
    h = l[p], h == null || h.focus(c), d += s;
  } while (h !== i.activeElement);
  return t & 6 && cv(h) && h.select(), 2;
}
function di() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function fv() {
  return /Android/gi.test(window.navigator.userAgent);
}
function fi() {
  return di() || fv();
}
function jt(e, t, n) {
  Pt.isServer || ee((r) => {
    document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
  });
}
function pi(e, t, n) {
  Pt.isServer || ee((r) => {
    window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
  });
}
function Pr(e, t, n = R(() => !0)) {
  function r(a, i) {
    if (!n.value || a.defaultPrevented)
      return;
    let l = i(a);
    if (l === null || !l.getRootNode().contains(l))
      return;
    let s = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of s) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : C(u);
      if (c != null && c.contains(l) || a.composed && a.composedPath().includes(c))
        return;
    }
    return !Ar(l, Rr.Loose) && l.tabIndex !== -1 && a.preventDefault(), t(a, l);
  }
  let o = _(null);
  jt("pointerdown", (a) => {
    var i, l;
    n.value && (o.value = ((l = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : l[0]) || a.target);
  }, !0), jt("mousedown", (a) => {
    var i, l;
    n.value && (o.value = ((l = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : l[0]) || a.target);
  }, !0), jt("click", (a) => {
    fi() || o.value && (r(a, () => o.value), o.value = null);
  }, !0), jt("touchend", (a) => r(a, () => a.target instanceof HTMLElement ? a.target : null), !0), pi("blur", (a) => r(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Lo(e, t) {
  if (e)
    return e;
  let n = t != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function hi(e, t) {
  let n = _(Lo(e.value.type, e.value.as));
  return Q(() => {
    n.value = Lo(e.value.type, e.value.as);
  }), ee(() => {
    var r;
    n.value || C(t) && C(t) instanceof HTMLButtonElement && !((r = C(t)) != null && r.hasAttribute("type")) && (n.value = "button");
  }), n;
}
function No(e) {
  return [e.screenX, e.screenY];
}
function vi() {
  let e = _([-1, -1]);
  return { wasMoved(t) {
    let n = No(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = No(t);
  } };
}
function mi({ container: e, accept: t, walk: n, enabled: r }) {
  ee(() => {
    let o = e.value;
    if (!o || r !== void 0 && !r.value)
      return;
    let a = Be(e);
    if (!a)
      return;
    let i = Object.assign((s) => t(s), { acceptNode: t }), l = a.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, i, !1);
    for (; l.nextNode(); )
      n(l.currentNode);
  });
}
var _e = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(_e || {}), Ue = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ue || {});
function W({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...o }) {
  var a;
  let i = bi(r, n), l = Object.assign(o, { props: i });
  if (e || t & 2 && i.static)
    return Tn(l);
  if (t & 1) {
    let s = (a = i.unmount) == null || a ? 0 : 1;
    return oe(s, { [0]() {
      return null;
    }, [1]() {
      return Tn({ ...o, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Tn(l);
}
function Tn({ props: e, attrs: t, slots: n, slot: r, name: o }) {
  var a, i;
  let { as: l, ...s } = _t(e, ["unmount", "static"]), u = (a = n.default) == null ? void 0 : a.call(n, r), c = {};
  if (r) {
    let d = !1, f = [];
    for (let [h, p] of Object.entries(r))
      typeof p == "boolean" && (d = !0), p === !0 && f.push(h);
    d && (c["data-headlessui-state"] = f.join(" "));
  }
  if (l === "template") {
    if (u = gi(u != null ? u : []), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [d, ...f] = u != null ? u : [];
      if (!hv(d) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).map((v) => v.trim()).filter((v, m, y) => y.indexOf(v) === m).sort((v, m) => v.localeCompare(m)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let h = bi((i = d.props) != null ? i : {}, s, c), p = Jo(d, h, !0);
      for (let v in h)
        v.startsWith("on") && (p.props || (p.props = {}), p.props[v] = h[v]);
      return p;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return K(l, Object.assign({}, s, c), { default: () => u });
}
function gi(e) {
  return e.flatMap((t) => t.type === ze ? gi(t.children) : [t]);
}
function bi(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, { [r](o, ...a) {
      let i = n[r];
      for (let l of i) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        l(o, ...a);
      }
    } });
  return t;
}
function pv(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function _t(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function hv(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Tt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Tt || {});
let Qt = M({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    var r;
    let { features: o, ...a } = e, i = { "aria-hidden": (o & 2) === 2 ? !0 : (r = a["aria-hidden"]) != null ? r : void 0, hidden: (o & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return W({ ourProps: i, theirProps: a, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} }), yi = Symbol("Context");
var J = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(J || {});
function vv() {
  return It() !== null;
}
function It() {
  return le(yi, null);
}
function _r(e) {
  ve(yi, e);
}
var U = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(U || {}), wi = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(wi || {});
function mv(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Fe = [];
mv(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Fe[0] !== t.target && (Fe.unshift(t.target), Fe = Fe.filter((n) => n != null && n.isConnected), Fe.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function gv(e) {
  throw new Error("Unexpected object: " + e);
}
var k = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(k || {});
function Kn(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let r = t.resolveActiveIndex(), o = r != null ? r : -1;
  switch (e.focus) {
    case 0: {
      for (let a = 0; a < n.length; ++a)
        if (!t.resolveDisabled(n[a], a, n))
          return a;
      return r;
    }
    case 1: {
      o === -1 && (o = n.length);
      for (let a = o - 1; a >= 0; --a)
        if (!t.resolveDisabled(n[a], a, n))
          return a;
      return r;
    }
    case 2: {
      for (let a = o + 1; a < n.length; ++a)
        if (!t.resolveDisabled(n[a], a, n))
          return a;
      return r;
    }
    case 3: {
      for (let a = n.length - 1; a >= 0; --a)
        if (!t.resolveDisabled(n[a], a, n))
          return a;
      return r;
    }
    case 4: {
      for (let a = 0; a < n.length; ++a)
        if (t.resolveId(n[a], a, n) === e.id)
          return a;
      return r;
    }
    case 5:
      return null;
    default:
      gv(e);
  }
}
function Si(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e))
    Oi(n, Ei(t, r), o);
  return n;
}
function Ei(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Oi(e, t, n) {
  if (Array.isArray(n))
    for (let [r, o] of n.entries())
      Oi(e, Ei(t, r.toString()), o);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Si(n, t, e);
}
function bv(e, t) {
  return e === t;
}
var yv = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(yv || {}), wv = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(wv || {}), Sv = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Sv || {});
let Ti = Symbol("ComboboxContext");
function Ze(e) {
  let t = le(Ti, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ze), n;
  }
  return t;
}
let xi = Symbol("VirtualContext"), Ev = M({ name: "VirtualProvider", setup(e, { slots: t }) {
  let n = Ze("VirtualProvider"), r = R(() => {
    let l = C(n.optionsRef);
    if (!l)
      return { start: 0, end: 0 };
    let s = window.getComputedStyle(l);
    return { start: parseFloat(s.paddingBlockStart || s.paddingTop), end: parseFloat(s.paddingBlockEnd || s.paddingBottom) };
  }), o = Qh(R(() => ({ scrollPaddingStart: r.value.start, scrollPaddingEnd: r.value.end, count: n.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return C(n.optionsRef);
  }, overscan: 12 }))), a = R(() => {
    var l;
    return (l = n.virtual.value) == null ? void 0 : l.options;
  }), i = _(0);
  return ce([a], () => {
    i.value += 1;
  }), ve(xi, n.virtual.value ? o : null), () => [K("div", { style: { position: "relative", width: "100%", height: `${o.value.getTotalSize()}px` }, ref: (l) => {
    if (l) {
      if (typeof process < "u" && process.env.JEST_WORKER_ID !== void 0 || n.activationTrigger.value === 0)
        return;
      n.activeOptionIndex.value !== null && n.virtual.value.options.length > n.activeOptionIndex.value && o.value.scrollToIndex(n.activeOptionIndex.value);
    }
  } }, o.value.getVirtualItems().map((l) => Jo(t.default({ option: n.virtual.value.options[l.index], open: n.comboboxState.value === 0 })[0], { key: `${i.value}-${l.index}`, "data-index": l.index, "aria-setsize": n.virtual.value.options.length, "aria-posinset": l.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${l.start}px)`, overflowAnchor: "none" } })))];
} });
M({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], nullable: !0, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 }, immediate: { type: [Boolean], default: !1 }, virtual: { type: Object, default: null } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: r }) {
  let o = _(1), a = _(null), i = _(null), l = _(null), s = _(null), u = _({ static: !1, hold: !1 }), c = _([]), d = _(null), f = _(2), h = _(!1);
  function p(x = (b) => b) {
    let b = d.value !== null ? c.value[d.value] : null, w = x(c.value.slice()), S = w.length > 0 && w[0].dataRef.order.value !== null ? w.sort((L, z) => L.dataRef.order.value - z.dataRef.order.value) : Cr(w, (L) => C(L.dataRef.domRef)), I = b ? S.indexOf(b) : null;
    return I === -1 && (I = null), { options: S, activeOptionIndex: I };
  }
  let v = R(() => e.multiple ? 1 : 0), m = R(() => e.nullable), [y, E] = Zh(R(() => e.modelValue), (x) => r("update:modelValue", x), R(() => e.defaultValue)), P = R(() => y.value === void 0 ? oe(v.value, { [1]: [], [0]: void 0 }) : y.value), F = null, O = null;
  function A(x) {
    return oe(v.value, { [0]() {
      return E == null ? void 0 : E(x);
    }, [1]: () => {
      let b = Ie(T.value.value).slice(), w = Ie(x), S = b.findIndex((I) => T.compare(w, Ie(I)));
      return S === -1 ? b.push(w) : b.splice(S, 1), E == null ? void 0 : E(b);
    } });
  }
  let $ = R(() => {
  });
  ce([$], ([x], [b]) => {
    if (T.virtual.value && x && b && d.value !== null) {
      let w = x.indexOf(b[d.value]);
      w !== -1 ? d.value = w : d.value = null;
    }
  });
  let T = { comboboxState: o, value: P, mode: v, compare(x, b) {
    if (typeof e.by == "string") {
      let w = e.by;
      return (x == null ? void 0 : x[w]) === (b == null ? void 0 : b[w]);
    }
    return e.by === null ? bv(x, b) : e.by(x, b);
  }, calculateIndex(x) {
    return T.virtual.value ? e.by === null ? T.virtual.value.options.indexOf(x) : T.virtual.value.options.findIndex((b) => T.compare(b, x)) : c.value.findIndex((b) => T.compare(b.dataRef.value, x));
  }, defaultValue: R(() => e.defaultValue), nullable: m, immediate: R(() => !1), virtual: R(() => null), inputRef: i, labelRef: a, buttonRef: l, optionsRef: s, disabled: R(() => e.disabled), options: c, change(x) {
    E(x);
  }, activeOptionIndex: R(() => {
    if (h.value && d.value === null && (T.virtual.value ? T.virtual.value.options.length > 0 : c.value.length > 0)) {
      if (T.virtual.value) {
        let b = T.virtual.value.options.findIndex((w) => {
          var S;
          return !((S = T.virtual.value) != null && S.disabled(w));
        });
        if (b !== -1)
          return b;
      }
      let x = c.value.findIndex((b) => !b.dataRef.disabled);
      if (x !== -1)
        return x;
    }
    return d.value;
  }), activationTrigger: f, optionsPropsRef: u, closeCombobox() {
    h.value = !1, !e.disabled && o.value !== 1 && (o.value = 1, d.value = null);
  }, openCombobox() {
    if (h.value = !0, !e.disabled && o.value !== 0) {
      if (T.value.value) {
        let x = T.calculateIndex(T.value.value);
        x !== -1 && (d.value = x);
      }
      o.value = 0;
    }
  }, setActivationTrigger(x) {
    f.value = x;
  }, goToOption(x, b, w) {
    h.value = !1, F !== null && cancelAnimationFrame(F), F = requestAnimationFrame(() => {
      if (e.disabled || s.value && !u.value.static && o.value === 1)
        return;
      if (T.virtual.value) {
        d.value = x === k.Specific ? b : Kn({ focus: x }, { resolveItems: () => T.virtual.value.options, resolveActiveIndex: () => {
          var L, z;
          return (z = (L = T.activeOptionIndex.value) != null ? L : T.virtual.value.options.findIndex((te) => {
            var we;
            return !((we = T.virtual.value) != null && we.disabled(te));
          })) != null ? z : null;
        }, resolveDisabled: (L) => T.virtual.value.disabled(L), resolveId() {
          throw new Error("Function not implemented.");
        } }), f.value = w != null ? w : 2;
        return;
      }
      let S = p();
      if (S.activeOptionIndex === null) {
        let L = S.options.findIndex((z) => !z.dataRef.disabled);
        L !== -1 && (S.activeOptionIndex = L);
      }
      let I = x === k.Specific ? b : Kn({ focus: x }, { resolveItems: () => S.options, resolveActiveIndex: () => S.activeOptionIndex, resolveId: (L) => L.id, resolveDisabled: (L) => L.dataRef.disabled });
      d.value = I, f.value = w != null ? w : 2, c.value = S.options;
    });
  }, selectOption(x) {
    let b = c.value.find((S) => S.id === x);
    if (!b)
      return;
    let { dataRef: w } = b;
    A(w.value);
  }, selectActiveOption() {
    if (T.activeOptionIndex.value !== null) {
      if (T.virtual.value)
        A(T.virtual.value.options[T.activeOptionIndex.value]);
      else {
        let { dataRef: x } = c.value[T.activeOptionIndex.value];
        A(x.value);
      }
      T.goToOption(k.Specific, T.activeOptionIndex.value);
    }
  }, registerOption(x, b) {
    let w = rr({ id: x, dataRef: b });
    if (T.virtual.value) {
      c.value.push(w);
      return;
    }
    O && cancelAnimationFrame(O);
    let S = p((I) => (I.push(w), I));
    d.value === null && T.isSelected(b.value.value) && (S.activeOptionIndex = S.options.indexOf(w)), c.value = S.options, d.value = S.activeOptionIndex, f.value = 2, S.options.some((I) => !C(I.dataRef.domRef)) && (O = requestAnimationFrame(() => {
      let I = p();
      c.value = I.options, d.value = I.activeOptionIndex;
    }));
  }, unregisterOption(x, b) {
    if (F !== null && cancelAnimationFrame(F), b && (h.value = !0), T.virtual.value) {
      c.value = c.value.filter((S) => S.id !== x);
      return;
    }
    let w = p((S) => {
      let I = S.findIndex((L) => L.id === x);
      return I !== -1 && S.splice(I, 1), S;
    });
    c.value = w.options, d.value = w.activeOptionIndex, f.value = 2;
  }, isSelected(x) {
    return oe(v.value, { [0]: () => T.compare(Ie(T.value.value), Ie(x)), [1]: () => Ie(T.value.value).some((b) => T.compare(Ie(b), Ie(x))) });
  }, isActive(x) {
    return d.value === T.calculateIndex(x);
  } };
  Pr([i, l, s], () => T.closeCombobox(), R(() => o.value === 0)), ve(Ti, T), _r(R(() => oe(o.value, { [0]: J.Open, [1]: J.Closed })));
  let j = R(() => {
    var x;
    return (x = C(i)) == null ? void 0 : x.closest("form");
  });
  return Q(() => {
    ce([j], () => {
      if (!j.value || e.defaultValue === void 0)
        return;
      function x() {
        T.change(e.defaultValue);
      }
      return j.value.addEventListener("reset", x), () => {
        var b;
        (b = j.value) == null || b.removeEventListener("reset", x);
      };
    }, { immediate: !0 });
  }), () => {
    var x, b, w;
    let { name: S, disabled: I, form: L, ...z } = e, te = { open: o.value === 0, disabled: I, activeIndex: T.activeOptionIndex.value, activeOption: T.activeOptionIndex.value === null ? null : T.virtual.value ? T.virtual.value.options[(x = T.activeOptionIndex.value) != null ? x : 0] : (w = (b = T.options.value[T.activeOptionIndex.value]) == null ? void 0 : b.dataRef.value) != null ? w : null, value: P.value };
    return K(ze, [...S != null && P.value != null ? Si({ [S]: P.value }).map(([we, X]) => K(Qt, pv({ features: Tt.Hidden, key: we, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: L, disabled: I, name: we, value: X }))) : [], W({ theirProps: { ...n, ..._t(z, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: te, slots: t, attrs: n, name: "Combobox" })]);
  };
} });
M({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let o = (r = e.id) != null ? r : `headlessui-combobox-label-${se()}`, a = Ze("ComboboxLabel");
  function i() {
    var l;
    (l = C(a.inputRef)) == null || l.focus({ preventScroll: !0 });
  }
  return () => {
    let l = { open: a.comboboxState.value === 0, disabled: a.disabled.value }, { ...s } = e, u = { id: o, ref: a.labelRef, onClick: i };
    return W({ ourProps: u, theirProps: s, slot: l, attrs: t, slots: n, name: "ComboboxLabel" });
  };
} });
M({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-combobox-button-${se()}`, i = Ze("ComboboxButton");
  r({ el: i.buttonRef, $el: i.buttonRef });
  function l(c) {
    i.disabled.value || (i.comboboxState.value === 0 ? i.closeCombobox() : (c.preventDefault(), i.openCombobox()), ie(() => {
      var d;
      return (d = C(i.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function s(c) {
    switch (c.key) {
      case U.ArrowDown:
        c.preventDefault(), c.stopPropagation(), i.comboboxState.value === 1 && i.openCombobox(), ie(() => {
          var d;
          return (d = i.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case U.ArrowUp:
        c.preventDefault(), c.stopPropagation(), i.comboboxState.value === 1 && (i.openCombobox(), ie(() => {
          i.value.value || i.goToOption(k.Last);
        })), ie(() => {
          var d;
          return (d = i.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case U.Escape:
        if (i.comboboxState.value !== 0)
          return;
        c.preventDefault(), i.optionsRef.value && !i.optionsPropsRef.value.static && c.stopPropagation(), i.closeCombobox(), ie(() => {
          var d;
          return (d = i.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = hi(R(() => ({ as: e.as, type: t.type })), i.buttonRef);
  return () => {
    var c, d;
    let f = { open: i.comboboxState.value === 0, disabled: i.disabled.value, value: i.value.value }, { ...h } = e, p = { ref: i.buttonRef, id: a, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (c = C(i.optionsRef)) == null ? void 0 : c.id, "aria-expanded": i.comboboxState.value === 0, "aria-labelledby": i.labelRef.value ? [(d = C(i.labelRef)) == null ? void 0 : d.id, a].join(" ") : void 0, disabled: i.disabled.value === !0 ? !0 : void 0, onKeydown: s, onClick: l };
    return W({ ourProps: p, theirProps: h, slot: f, attrs: t, slots: n, name: "ComboboxButton" });
  };
} });
M({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: null } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  var a;
  let i = (a = e.id) != null ? a : `headlessui-combobox-input-${se()}`, l = Ze("ComboboxInput"), s = R(() => Be(C(l.inputRef))), u = { value: !1 };
  o({ el: l.inputRef, $el: l.inputRef });
  function c() {
    l.change(null);
    let O = C(l.optionsRef);
    O && (O.scrollTop = 0), l.goToOption(k.Nothing);
  }
  let d = R(() => {
    var O;
    let A = l.value.value;
    return C(l.inputRef) ? typeof e.displayValue < "u" && A !== void 0 ? (O = e.displayValue(A)) != null ? O : "" : typeof A == "string" ? A : "" : "";
  });
  Q(() => {
    ce([d, l.comboboxState, s], ([O, A], [$, T]) => {
      if (u.value)
        return;
      let j = C(l.inputRef);
      j && ((T === 0 && A === 1 || O !== $) && (j.value = O), requestAnimationFrame(() => {
        var x;
        if (u.value || !j || ((x = s.value) == null ? void 0 : x.activeElement) !== j)
          return;
        let { selectionStart: b, selectionEnd: w } = j;
        Math.abs((w != null ? w : 0) - (b != null ? b : 0)) === 0 && b === 0 && j.setSelectionRange(j.value.length, j.value.length);
      }));
    }, { immediate: !0 }), ce([l.comboboxState], ([O], [A]) => {
      if (O === 0 && A === 1) {
        if (u.value)
          return;
        let $ = C(l.inputRef);
        if (!$)
          return;
        let T = $.value, { selectionStart: j, selectionEnd: x, selectionDirection: b } = $;
        $.value = "", $.value = T, b !== null ? $.setSelectionRange(j, x, b) : $.setSelectionRange(j, x);
      }
    });
  });
  let f = _(!1);
  function h() {
    f.value = !0;
  }
  function p() {
    He().nextFrame(() => {
      f.value = !1;
    });
  }
  let v = tv();
  function m(O) {
    switch (u.value = !0, v(() => {
      u.value = !1;
    }), O.key) {
      case U.Enter:
        if (u.value = !1, l.comboboxState.value !== 0 || f.value)
          return;
        if (O.preventDefault(), O.stopPropagation(), l.activeOptionIndex.value === null) {
          l.closeCombobox();
          return;
        }
        l.selectActiveOption(), l.mode.value === 0 && l.closeCombobox();
        break;
      case U.ArrowDown:
        return u.value = !1, O.preventDefault(), O.stopPropagation(), oe(l.comboboxState.value, { [0]: () => l.goToOption(k.Next), [1]: () => l.openCombobox() });
      case U.ArrowUp:
        return u.value = !1, O.preventDefault(), O.stopPropagation(), oe(l.comboboxState.value, { [0]: () => l.goToOption(k.Previous), [1]: () => {
          l.openCombobox(), ie(() => {
            l.value.value || l.goToOption(k.Last);
          });
        } });
      case U.Home:
        if (O.shiftKey)
          break;
        return u.value = !1, O.preventDefault(), O.stopPropagation(), l.goToOption(k.First);
      case U.PageUp:
        return u.value = !1, O.preventDefault(), O.stopPropagation(), l.goToOption(k.First);
      case U.End:
        if (O.shiftKey)
          break;
        return u.value = !1, O.preventDefault(), O.stopPropagation(), l.goToOption(k.Last);
      case U.PageDown:
        return u.value = !1, O.preventDefault(), O.stopPropagation(), l.goToOption(k.Last);
      case U.Escape:
        if (u.value = !1, l.comboboxState.value !== 0)
          return;
        O.preventDefault(), l.optionsRef.value && !l.optionsPropsRef.value.static && O.stopPropagation(), l.nullable.value && l.mode.value === 0 && l.value.value === null && c(), l.closeCombobox();
        break;
      case U.Tab:
        if (u.value = !1, l.comboboxState.value !== 0)
          return;
        l.mode.value === 0 && l.activationTrigger.value !== 1 && l.selectActiveOption(), l.closeCombobox();
        break;
    }
  }
  function y(O) {
    t("change", O), l.nullable.value && l.mode.value === 0 && O.target.value === "" && c(), l.openCombobox();
  }
  function E(O) {
    var A, $, T;
    let j = (A = O.relatedTarget) != null ? A : Fe.find((x) => x !== O.currentTarget);
    if (u.value = !1, !(($ = C(l.optionsRef)) != null && $.contains(j)) && !((T = C(l.buttonRef)) != null && T.contains(j)) && l.comboboxState.value === 0)
      return O.preventDefault(), l.mode.value === 0 && (l.nullable.value && l.value.value === null ? c() : l.activationTrigger.value !== 1 && l.selectActiveOption()), l.closeCombobox();
  }
  function P(O) {
    var A, $, T;
    let j = (A = O.relatedTarget) != null ? A : Fe.find((x) => x !== O.currentTarget);
    ($ = C(l.buttonRef)) != null && $.contains(j) || (T = C(l.optionsRef)) != null && T.contains(j) || l.disabled.value || l.immediate.value && l.comboboxState.value !== 0 && (l.openCombobox(), He().nextFrame(() => {
      l.setActivationTrigger(1);
    }));
  }
  let F = R(() => {
    var O, A, $, T;
    return (T = ($ = (A = e.defaultValue) != null ? A : l.defaultValue.value !== void 0 ? (O = e.displayValue) == null ? void 0 : O.call(e, l.defaultValue.value) : null) != null ? $ : l.defaultValue.value) != null ? T : "";
  });
  return () => {
    var O, A, $, T, j, x, b;
    let w = { open: l.comboboxState.value === 0 }, { displayValue: S, onChange: I, ...L } = e, z = { "aria-controls": (O = l.optionsRef.value) == null ? void 0 : O.id, "aria-expanded": l.comboboxState.value === 0, "aria-activedescendant": l.activeOptionIndex.value === null ? void 0 : l.virtual.value ? (A = l.options.value.find((te) => !l.virtual.value.disabled(te.dataRef.value) && l.compare(te.dataRef.value, l.virtual.value.options[l.activeOptionIndex.value]))) == null ? void 0 : A.id : ($ = l.options.value[l.activeOptionIndex.value]) == null ? void 0 : $.id, "aria-labelledby": (x = (T = C(l.labelRef)) == null ? void 0 : T.id) != null ? x : (j = C(l.buttonRef)) == null ? void 0 : j.id, "aria-autocomplete": "list", id: i, onCompositionstart: h, onCompositionend: p, onKeydown: m, onInput: y, onFocus: P, onBlur: E, role: "combobox", type: (b = n.type) != null ? b : "text", tabIndex: 0, ref: l.inputRef, defaultValue: F.value, disabled: l.disabled.value === !0 ? !0 : void 0 };
    return W({ ourProps: z, theirProps: L, slot: w, attrs: n, slots: r, features: _e.RenderStrategy | _e.Static, name: "ComboboxInput" });
  };
} });
M({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = Ze("ComboboxOptions"), a = `headlessui-combobox-options-${se()}`;
  r({ el: o.optionsRef, $el: o.optionsRef }), ee(() => {
    o.optionsPropsRef.value.static = e.static;
  }), ee(() => {
    o.optionsPropsRef.value.hold = e.hold;
  });
  let i = It(), l = R(() => i !== null ? (i.value & J.Open) === J.Open : o.comboboxState.value === 0);
  mi({ container: R(() => C(o.optionsRef)), enabled: R(() => o.comboboxState.value === 0), accept(u) {
    return u.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function s(u) {
    u.preventDefault();
  }
  return () => {
    var u, c, d;
    let f = { open: o.comboboxState.value === 0 }, h = { "aria-labelledby": (d = (u = C(o.labelRef)) == null ? void 0 : u.id) != null ? d : (c = C(o.buttonRef)) == null ? void 0 : c.id, id: a, ref: o.optionsRef, role: "listbox", "aria-multiselectable": o.mode.value === 1 ? !0 : void 0, onMousedown: s }, p = _t(e, ["hold"]);
    return W({ ourProps: h, theirProps: p, slot: f, attrs: t, slots: o.virtual.value && o.comboboxState.value === 0 ? { ...n, default: () => [K(Ev, {}, n.default)] } : n, features: _e.RenderStrategy | _e.Static, visible: l.value, name: "ComboboxOptions" });
  };
} });
M({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, order: { type: [Number], default: null } }, setup(e, { slots: t, attrs: n, expose: r }) {
  let o = Ze("ComboboxOption"), a = `headlessui-combobox-option-${se()}`, i = _(null), l = R(() => e.disabled);
  r({ el: i, $el: i });
  let s = R(() => {
    var E;
    return o.virtual.value ? o.activeOptionIndex.value === o.calculateIndex(e.value) : o.activeOptionIndex.value === null ? !1 : ((E = o.options.value[o.activeOptionIndex.value]) == null ? void 0 : E.id) === a;
  }), u = R(() => o.isSelected(e.value)), c = le(xi, null), d = R(() => ({ disabled: e.disabled, value: e.value, domRef: i, order: R(() => e.order) }));
  Q(() => o.registerOption(a, d)), de(() => o.unregisterOption(a, s.value)), ee(() => {
    let E = C(i);
    E && (c == null || c.value.measureElement(E));
  }), ee(() => {
    o.comboboxState.value === 0 && s.value && (o.virtual.value || o.activationTrigger.value !== 0 && ie(() => {
      var E, P;
      return (P = (E = C(i)) == null ? void 0 : E.scrollIntoView) == null ? void 0 : P.call(E, { block: "nearest" });
    }));
  });
  function f(E) {
    E.preventDefault(), E.button === wi.Left && (l.value || (o.selectOption(a), fi() || requestAnimationFrame(() => {
      var P;
      return (P = C(o.inputRef)) == null ? void 0 : P.focus({ preventScroll: !0 });
    }), o.mode.value === 0 && o.closeCombobox()));
  }
  function h() {
    var E;
    if (e.disabled || (E = o.virtual.value) != null && E.disabled(e.value))
      return o.goToOption(k.Nothing);
    let P = o.calculateIndex(e.value);
    o.goToOption(k.Specific, P);
  }
  let p = vi();
  function v(E) {
    p.update(E);
  }
  function m(E) {
    var P;
    if (!p.wasMoved(E) || e.disabled || (P = o.virtual.value) != null && P.disabled(e.value) || s.value)
      return;
    let F = o.calculateIndex(e.value);
    o.goToOption(k.Specific, F, 0);
  }
  function y(E) {
    var P;
    p.wasMoved(E) && (e.disabled || (P = o.virtual.value) != null && P.disabled(e.value) || s.value && (o.optionsPropsRef.value.hold || o.goToOption(k.Nothing)));
  }
  return () => {
    let { disabled: E } = e, P = { active: s.value, selected: u.value, disabled: E }, F = { id: a, ref: i, role: "option", tabIndex: E === !0 ? void 0 : -1, "aria-disabled": E === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onMousedown: f, onFocus: h, onPointerenter: v, onMouseenter: v, onPointermove: m, onMousemove: m, onPointerleave: y, onMouseleave: y }, O = _t(e, ["order", "value"]);
    return W({ ourProps: F, theirProps: O, slot: P, attrs: n, slots: t, name: "ComboboxOption" });
  };
} });
function Ri(e, t, n, r) {
  Pt.isServer || ee((o) => {
    e = e != null ? e : window, e.addEventListener(t, n, r), o(() => e.removeEventListener(t, n, r));
  });
}
var pt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(pt || {});
function Ov() {
  let e = _(0);
  return pi("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ai(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.value) {
    let r = C(n);
    r instanceof HTMLElement && t.add(r);
  }
  return t;
}
var Ci = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ci || {});
let dt = Object.assign(M({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: _(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = _(null);
  r({ el: o, $el: o });
  let a = R(() => Be(o)), i = _(!1);
  Q(() => i.value = !0), de(() => i.value = !1), xv({ ownerDocument: a }, R(() => i.value && Boolean(e.features & 16)));
  let l = Rv({ ownerDocument: a, container: o, initialFocus: R(() => e.initialFocus) }, R(() => i.value && Boolean(e.features & 2)));
  Av({ ownerDocument: a, container: o, containers: e.containers, previousActiveElement: l }, R(() => i.value && Boolean(e.features & 8)));
  let s = Ov();
  function u(h) {
    let p = C(o);
    !p || ((v) => v())(() => {
      oe(s.value, { [pt.Forwards]: () => {
        gt(p, Re.First, { skipElements: [h.relatedTarget] });
      }, [pt.Backwards]: () => {
        gt(p, Re.Last, { skipElements: [h.relatedTarget] });
      } });
    });
  }
  let c = _(!1);
  function d(h) {
    h.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function f(h) {
    if (!i.value)
      return;
    let p = Ai(e.containers);
    C(o) instanceof HTMLElement && p.add(C(o));
    let v = h.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (Pi(p, v) || (c.value ? gt(C(o), oe(s.value, { [pt.Forwards]: () => Re.Next, [pt.Backwards]: () => Re.Previous }) | Re.WrapAround, { relativeTo: h.target }) : h.target instanceof HTMLElement && ke(h.target)));
  }
  return () => {
    let h = {}, p = { ref: o, onKeydown: d, onFocusout: f }, { features: v, initialFocus: m, containers: y, ...E } = e;
    return K(ze, [Boolean(v & 4) && K(Qt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Tt.Focusable }), W({ ourProps: p, theirProps: { ...t, ...E }, slot: h, attrs: t, slots: n, name: "FocusTrap" }), Boolean(v & 4) && K(Qt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Tt.Focusable })]);
  };
} }), { features: Ci });
function Tv(e) {
  let t = _(Fe.slice());
  return ce([e], ([n], [r]) => {
    r === !0 && n === !1 ? xr(() => {
      t.value.splice(0);
    }) : r === !1 && n === !0 && (t.value = Fe.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((r) => r != null && r.isConnected)) != null ? n : null;
  };
}
function xv({ ownerDocument: e }, t) {
  let n = Tv(t);
  Q(() => {
    ee(() => {
      var r, o;
      t.value || ((r = e.value) == null ? void 0 : r.activeElement) === ((o = e.value) == null ? void 0 : o.body) && ke(n());
    }, { flush: "post" });
  }), de(() => {
    t.value && ke(n());
  });
}
function Rv({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let o = _(null), a = _(!1);
  return Q(() => a.value = !0), de(() => a.value = !1), Q(() => {
    ce([t, n, r], (i, l) => {
      if (i.every((u, c) => (l == null ? void 0 : l[c]) === u) || !r.value)
        return;
      let s = C(t);
      s && xr(() => {
        var u, c;
        if (!a.value)
          return;
        let d = C(n), f = (u = e.value) == null ? void 0 : u.activeElement;
        if (d) {
          if (d === f) {
            o.value = f;
            return;
          }
        } else if (s.contains(f)) {
          o.value = f;
          return;
        }
        d ? ke(d) : gt(s, Re.First | Re.NoScroll) === si.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), o;
}
function Av({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, o) {
  var a;
  Ri((a = e.value) == null ? void 0 : a.defaultView, "focus", (i) => {
    if (!o.value)
      return;
    let l = Ai(n);
    C(t) instanceof HTMLElement && l.add(C(t));
    let s = r.value;
    if (!s)
      return;
    let u = i.target;
    u && u instanceof HTMLElement ? Pi(l, u) ? (r.value = u, ke(u)) : (i.preventDefault(), i.stopPropagation(), ke(s)) : ke(r.value);
  }, !0);
}
function Pi(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
function Cv(e) {
  let t = Yo(e.getSnapshot());
  return de(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Pv(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...a) {
    let i = t[o].call(n, ...a);
    i && (n = i, r.forEach((l) => l()));
  } };
}
function _v() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement;
    e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = r.clientWidth - r.offsetWidth, a = e - o;
    n.style(r, "paddingRight", `${a}px`);
  } };
}
function Iv() {
  return di() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((a) => a()).some((a) => a.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let l = He();
        l.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => l.dispose()));
      }
      let a = (o = window.scrollY) != null ? o : window.pageYOffset, i = null;
      t.addEventListener(e, "click", (l) => {
        if (l.target instanceof HTMLElement)
          try {
            let s = l.target.closest("a");
            if (!s)
              return;
            let { hash: u } = new URL(s.href), c = e.querySelector(u);
            c && !r(c) && (i = c);
          } catch {
          }
      }, !0), t.addEventListener(e, "touchstart", (l) => {
        if (l.target instanceof HTMLElement)
          if (r(l.target)) {
            let s = l.target;
            for (; s.parentElement && r(s.parentElement); )
              s = s.parentElement;
            t.style(s, "overscrollBehavior", "contain");
          } else
            t.style(l.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (l) => {
        if (l.target instanceof HTMLElement) {
          if (l.target.tagName === "INPUT")
            return;
          if (r(l.target)) {
            let s = l.target;
            for (; s.parentElement && s.dataset.headlessuiPortal !== "" && !(s.scrollHeight > s.clientHeight || s.scrollWidth > s.clientWidth); )
              s = s.parentElement;
            s.dataset.headlessuiPortal === "" && l.preventDefault();
          } else
            l.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var l;
        let s = (l = window.scrollY) != null ? l : window.pageYOffset;
        a !== s && window.scrollTo(0, a), i && i.isConnected && (i.scrollIntoView({ block: "nearest" }), i = null);
      });
    });
  } } : {};
}
function $v() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Fv(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let Ge = Pv(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: He(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: Fv(n) }, o = [Iv(), _v(), $v()];
  o.forEach(({ before: a }) => a == null ? void 0 : a(r)), o.forEach(({ after: a }) => a == null ? void 0 : a(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Ge.subscribe(() => {
  let e = Ge.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && Ge.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Ge.dispatch("TEARDOWN", n);
  }
});
function Dv(e, t, n) {
  let r = Cv(Ge), o = R(() => {
    let a = e.value ? r.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return ce([e, t], ([a, i], [l], s) => {
    if (!a || !i)
      return;
    Ge.dispatch("PUSH", a, n);
    let u = !1;
    s(() => {
      u || (Ge.dispatch("POP", l != null ? l : a, n), u = !0);
    });
  }, { immediate: !0 }), o;
}
let xn = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map();
function Mo(e, t = _(!0)) {
  ee((n) => {
    var r;
    if (!t.value)
      return;
    let o = C(e);
    if (!o)
      return;
    n(function() {
      var i;
      if (!o)
        return;
      let l = (i = ft.get(o)) != null ? i : 1;
      if (l === 1 ? ft.delete(o) : ft.set(o, l - 1), l !== 1)
        return;
      let s = xn.get(o);
      s && (s["aria-hidden"] === null ? o.removeAttribute("aria-hidden") : o.setAttribute("aria-hidden", s["aria-hidden"]), o.inert = s.inert, xn.delete(o));
    });
    let a = (r = ft.get(o)) != null ? r : 0;
    ft.set(o, a + 1), a === 0 && (xn.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), o.setAttribute("aria-hidden", "true"), o.inert = !0);
  });
}
function jv({ defaultContainers: e = [], portals: t, mainTreeNodeRef: n } = {}) {
  let r = _(null), o = Be(r);
  function a() {
    var i, l, s;
    let u = [];
    for (let c of e)
      c !== null && (c instanceof HTMLElement ? u.push(c) : "value" in c && c.value instanceof HTMLElement && u.push(c.value));
    if (t != null && t.value)
      for (let c of t.value)
        u.push(c);
    for (let c of (i = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? i : [])
      c !== document.body && c !== document.head && c instanceof HTMLElement && c.id !== "headlessui-portal-root" && (c.contains(C(r)) || c.contains((s = (l = C(r)) == null ? void 0 : l.getRootNode()) == null ? void 0 : s.host) || u.some((d) => c.contains(d)) || u.push(c));
    return u;
  }
  return { resolveContainers: a, contains(i) {
    return a().some((l) => l.contains(i));
  }, mainTreeNodeRef: r, MainTreeNode() {
    return n != null ? null : K(Qt, { features: Tt.Hidden, ref: r });
  } };
}
let _i = Symbol("ForcePortalRootContext");
function Lv() {
  return le(_i, !1);
}
let Jn = M({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return ve(_i, e.force), () => {
    let { force: r, ...o } = e;
    return W({ theirProps: o, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} }), Ii = Symbol("StackContext");
var Yn = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Yn || {});
function Nv() {
  return le(Ii, () => {
  });
}
function Mv({ type: e, enabled: t, element: n, onUpdate: r }) {
  let o = Nv();
  function a(...i) {
    r == null || r(...i), o(...i);
  }
  Q(() => {
    ce(t, (i, l) => {
      i ? a(0, e, n) : l === !0 && a(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), de(() => {
    t.value && a(1, e, n);
  }), ve(Ii, a);
}
let $i = Symbol("DescriptionContext");
function Bv() {
  let e = le($i, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Uv({ slot: e = _({}), name: t = "Description", props: n = {} } = {}) {
  let r = _([]);
  function o(a) {
    return r.value.push(a), () => {
      let i = r.value.indexOf(a);
      i !== -1 && r.value.splice(i, 1);
    };
  }
  return ve($i, { register: o, slot: e, name: t, props: n }), R(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
M({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let o = (r = e.id) != null ? r : `headlessui-description-${se()}`, a = Bv();
  return Q(() => de(a.register(o))), () => {
    let { name: i = "Description", slot: l = _({}), props: s = {} } = a, { ...u } = e, c = { ...Object.entries(s).reduce((d, [f, h]) => Object.assign(d, { [f]: re(h) }), {}), id: o };
    return W({ ourProps: c, theirProps: u, slot: l.value, attrs: t, slots: n, name: i });
  };
} });
function kv(e) {
  let t = Be(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n)
    return n;
  let r = t.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(r);
}
const Xn = /* @__PURE__ */ new WeakMap();
function Hv(e) {
  var t;
  return (t = Xn.get(e)) != null ? t : 0;
}
function Bo(e, t) {
  let n = t(Hv(e));
  return n <= 0 ? Xn.delete(e) : Xn.set(e, n), n;
}
let Fi = M({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let r = _(null), o = R(() => Be(r)), a = Lv(), i = le(Di, null), l = _(a === !0 || i == null ? kv(r.value) : i.resolveTarget());
  l.value && Bo(l.value, (f) => f + 1);
  let s = _(!1);
  Q(() => {
    s.value = !0;
  }), ee(() => {
    a || i != null && (l.value = i.resolveTarget());
  });
  let u = le(Qn, null), c = !1, d = Wi();
  return ce(r, () => {
    if (c || !u)
      return;
    let f = C(r);
    f && (de(u.register(f), d), c = !0);
  }), de(() => {
    var f, h;
    let p = (f = o.value) == null ? void 0 : f.getElementById("headlessui-portal-root");
    !p || l.value !== p || Bo(l.value, (v) => v - 1) || l.value.children.length > 0 || (h = l.value.parentElement) == null || h.removeChild(l.value);
  }), () => {
    if (!s.value || l.value === null)
      return null;
    let f = { ref: r, "data-headlessui-portal": "" };
    return K(Gi, { to: l.value }, W({ ourProps: f, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Qn = Symbol("PortalParentContext");
function zv() {
  let e = le(Qn, null), t = _([]);
  function n(a) {
    return t.value.push(a), e && e.register(a), () => r(a);
  }
  function r(a) {
    let i = t.value.indexOf(a);
    i !== -1 && t.value.splice(i, 1), e && e.unregister(a);
  }
  let o = { register: n, unregister: r, portals: t };
  return [t, M({ name: "PortalWrapper", setup(a, { slots: i }) {
    return ve(Qn, o), () => {
      var l;
      return (l = i.default) == null ? void 0 : l.call(i);
    };
  } })];
}
let Di = Symbol("PortalGroupContext"), Vv = M({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let r = rr({ resolveTarget() {
    return e.target;
  } });
  return ve(Di, r), () => {
    let { target: o, ...a } = e;
    return W({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} });
var qv = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(qv || {});
let Zn = Symbol("DialogContext");
function $t(e) {
  let t = le(Zn, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, $t), n;
  }
  return t;
}
let Lt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
M({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Lt }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  var a, i;
  let l = (a = e.id) != null ? a : `headlessui-dialog-${se()}`, s = _(!1);
  Q(() => {
    s.value = !0;
  });
  let u = !1, c = R(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (u || (u = !0, console.warn(`Invalid role [${c}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), d = _(0), f = It(), h = R(() => e.open === Lt && f !== null ? (f.value & J.Open) === J.Open : e.open), p = _(null), v = R(() => Be(p));
  if (o({ el: p, $el: p }), !(e.open !== Lt || f !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof h.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value === Lt ? void 0 : e.open}`);
  let m = R(() => s.value && h.value ? 0 : 1), y = R(() => m.value === 0), E = R(() => d.value > 1), P = le(Zn, null) !== null, [F, O] = zv(), { resolveContainers: A, mainTreeNodeRef: $, MainTreeNode: T } = jv({ portals: F, defaultContainers: [R(() => {
    var H;
    return (H = te.panelRef.value) != null ? H : p.value;
  })] }), j = R(() => E.value ? "parent" : "leaf"), x = R(() => f !== null ? (f.value & J.Closing) === J.Closing : !1), b = R(() => P || x.value ? !1 : y.value), w = R(() => {
    var H, G, ge;
    return (ge = Array.from((G = (H = v.value) == null ? void 0 : H.querySelectorAll("body > *")) != null ? G : []).find((be) => be.id === "headlessui-portal-root" ? !1 : be.contains(C($)) && be instanceof HTMLElement)) != null ? ge : null;
  });
  Mo(w, b);
  let S = R(() => E.value ? !0 : y.value), I = R(() => {
    var H, G, ge;
    return (ge = Array.from((G = (H = v.value) == null ? void 0 : H.querySelectorAll("[data-headlessui-portal]")) != null ? G : []).find((be) => be.contains(C($)) && be instanceof HTMLElement)) != null ? ge : null;
  });
  Mo(I, S), Mv({ type: "Dialog", enabled: R(() => m.value === 0), element: p, onUpdate: (H, G) => {
    if (G === "Dialog")
      return oe(H, { [Yn.Add]: () => d.value += 1, [Yn.Remove]: () => d.value -= 1 });
  } });
  let L = Uv({ name: "DialogDescription", slot: R(() => ({ open: h.value })) }), z = _(null), te = { titleId: z, panelRef: _(null), dialogState: m, setTitleId(H) {
    z.value !== H && (z.value = H);
  }, close() {
    t("close", !1);
  } };
  ve(Zn, te);
  let we = R(() => !(!y.value || E.value));
  Pr(A, (H, G) => {
    H.preventDefault(), te.close(), ie(() => G == null ? void 0 : G.focus());
  }, we);
  let X = R(() => !(E.value || m.value !== 0));
  Ri((i = v.value) == null ? void 0 : i.defaultView, "keydown", (H) => {
    X.value && (H.defaultPrevented || H.key === U.Escape && (H.preventDefault(), H.stopPropagation(), te.close()));
  });
  let fe = R(() => !(x.value || m.value !== 0 || P));
  return Dv(v, fe, (H) => {
    var G;
    return { containers: [...(G = H.containers) != null ? G : [], A] };
  }), ee((H) => {
    if (m.value !== 0)
      return;
    let G = C(p);
    if (!G)
      return;
    let ge = new ResizeObserver((be) => {
      for (let vn of be) {
        let Ft = vn.target.getBoundingClientRect();
        Ft.x === 0 && Ft.y === 0 && Ft.width === 0 && Ft.height === 0 && te.close();
      }
    });
    ge.observe(G), H(() => ge.disconnect());
  }), () => {
    let { open: H, initialFocus: G, ...ge } = e, be = { ...n, ref: p, id: l, role: c.value, "aria-modal": m.value === 0 ? !0 : void 0, "aria-labelledby": z.value, "aria-describedby": L.value }, vn = { open: m.value === 0 };
    return K(Jn, { force: !0 }, () => [K(Fi, () => K(Vv, { target: p.value }, () => K(Jn, { force: !1 }, () => K(dt, { initialFocus: G, containers: A, features: y.value ? oe(j.value, { parent: dt.features.RestoreFocus, leaf: dt.features.All & ~dt.features.FocusLock }) : dt.features.None }, () => K(O, {}, () => W({ ourProps: be, theirProps: { ...ge, ...n }, slot: vn, attrs: n, slots: r, visible: m.value === 0, features: _e.RenderStrategy | _e.Static, name: "Dialog" })))))), K(T)]);
  };
} });
M({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let o = (r = e.id) != null ? r : `headlessui-dialog-overlay-${se()}`, a = $t("DialogOverlay");
  function i(l) {
    l.target === l.currentTarget && (l.preventDefault(), l.stopPropagation(), a.close());
  }
  return () => {
    let { ...l } = e;
    return W({ ourProps: { id: o, "aria-hidden": !0, onClick: i }, theirProps: l, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
M({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-dialog-backdrop-${se()}`, i = $t("DialogBackdrop"), l = _(null);
  return r({ el: l, $el: l }), Q(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...s } = e, u = { id: a, ref: l, "aria-hidden": !0 };
    return K(Jn, { force: !0 }, () => K(Fi, () => W({ ourProps: u, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
M({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-dialog-panel-${se()}`, i = $t("DialogPanel");
  r({ el: i.panelRef, $el: i.panelRef });
  function l(s) {
    s.stopPropagation();
  }
  return () => {
    let { ...s } = e, u = { id: a, ref: i.panelRef, onClick: l };
    return W({ ourProps: u, theirProps: s, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} });
M({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let o = (r = e.id) != null ? r : `headlessui-dialog-title-${se()}`, a = $t("DialogTitle");
  return Q(() => {
    a.setTitleId(o), de(() => a.setTitleId(null));
  }), () => {
    let { ...i } = e;
    return W({ ourProps: { id: o }, theirProps: i, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
let Uo = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function ko(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", o = e.cloneNode(!0);
  if (!(o instanceof HTMLElement))
    return r;
  let a = !1;
  for (let l of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    l.remove(), a = !0;
  let i = a ? (n = o.innerText) != null ? n : "" : r;
  return Uo.test(i) && (i = i.replace(Uo, "")), i;
}
function Wv(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((o) => {
      let a = document.getElementById(o);
      if (a) {
        let i = a.getAttribute("aria-label");
        return typeof i == "string" ? i.trim() : ko(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0)
      return r.join(", ");
  }
  return ko(e).trim();
}
function Gv(e) {
  let t = _(""), n = _("");
  return () => {
    let r = C(e);
    if (!r)
      return "";
    let o = r.innerText;
    if (t.value === o)
      return n.value;
    let a = Wv(r).trim().toLowerCase();
    return t.value = o, n.value = a, a;
  };
}
var Kv = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Kv || {}), Jv = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Jv || {});
function Yv(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let ji = Symbol("MenuContext");
function pn(e) {
  let t = le(ji, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, pn), n;
  }
  return t;
}
M({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let r = _(1), o = _(null), a = _(null), i = _([]), l = _(""), s = _(null), u = _(1);
  function c(f = (h) => h) {
    let h = s.value !== null ? i.value[s.value] : null, p = Cr(f(i.value.slice()), (m) => C(m.dataRef.domRef)), v = h ? p.indexOf(h) : null;
    return v === -1 && (v = null), { items: p, activeItemIndex: v };
  }
  let d = { menuState: r, buttonRef: o, itemsRef: a, items: i, searchQuery: l, activeItemIndex: s, activationTrigger: u, closeMenu: () => {
    r.value = 1, s.value = null;
  }, openMenu: () => r.value = 0, goToItem(f, h, p) {
    let v = c(), m = Kn(f === k.Specific ? { focus: k.Specific, id: h } : { focus: f }, { resolveItems: () => v.items, resolveActiveIndex: () => v.activeItemIndex, resolveId: (y) => y.id, resolveDisabled: (y) => y.dataRef.disabled });
    l.value = "", s.value = m, u.value = p != null ? p : 1, i.value = v.items;
  }, search(f) {
    let h = l.value !== "" ? 0 : 1;
    l.value += f.toLowerCase();
    let p = (s.value !== null ? i.value.slice(s.value + h).concat(i.value.slice(0, s.value + h)) : i.value).find((m) => m.dataRef.textValue.startsWith(l.value) && !m.dataRef.disabled), v = p ? i.value.indexOf(p) : -1;
    v === -1 || v === s.value || (s.value = v, u.value = 1);
  }, clearSearch() {
    l.value = "";
  }, registerItem(f, h) {
    let p = c((v) => [...v, { id: f, dataRef: h }]);
    i.value = p.items, s.value = p.activeItemIndex, u.value = 1;
  }, unregisterItem(f) {
    let h = c((p) => {
      let v = p.findIndex((m) => m.id === f);
      return v !== -1 && p.splice(v, 1), p;
    });
    i.value = h.items, s.value = h.activeItemIndex, u.value = 1;
  } };
  return Pr([o, a], (f, h) => {
    var p;
    d.closeMenu(), Ar(h, Rr.Loose) || (f.preventDefault(), (p = C(o)) == null || p.focus());
  }, R(() => r.value === 0)), ve(ji, d), _r(R(() => oe(r.value, { [0]: J.Open, [1]: J.Closed }))), () => {
    let f = { open: r.value === 0, close: d.closeMenu };
    return W({ ourProps: {}, theirProps: e, slot: f, slots: t, attrs: n, name: "Menu" });
  };
} });
M({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-menu-button-${se()}`, i = pn("MenuButton");
  r({ el: i.buttonRef, $el: i.buttonRef });
  function l(d) {
    switch (d.key) {
      case U.Space:
      case U.Enter:
      case U.ArrowDown:
        d.preventDefault(), d.stopPropagation(), i.openMenu(), ie(() => {
          var f;
          (f = C(i.itemsRef)) == null || f.focus({ preventScroll: !0 }), i.goToItem(k.First);
        });
        break;
      case U.ArrowUp:
        d.preventDefault(), d.stopPropagation(), i.openMenu(), ie(() => {
          var f;
          (f = C(i.itemsRef)) == null || f.focus({ preventScroll: !0 }), i.goToItem(k.Last);
        });
        break;
    }
  }
  function s(d) {
    switch (d.key) {
      case U.Space:
        d.preventDefault();
        break;
    }
  }
  function u(d) {
    e.disabled || (i.menuState.value === 0 ? (i.closeMenu(), ie(() => {
      var f;
      return (f = C(i.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), i.openMenu(), Yv(() => {
      var f;
      return (f = C(i.itemsRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })));
  }
  let c = hi(R(() => ({ as: e.as, type: t.type })), i.buttonRef);
  return () => {
    var d;
    let f = { open: i.menuState.value === 0 }, { ...h } = e, p = { ref: i.buttonRef, id: a, type: c.value, "aria-haspopup": "menu", "aria-controls": (d = C(i.itemsRef)) == null ? void 0 : d.id, "aria-expanded": i.menuState.value === 0, onKeydown: l, onKeyup: s, onClick: u };
    return W({ ourProps: p, theirProps: h, slot: f, attrs: t, slots: n, name: "MenuButton" });
  };
} });
M({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-menu-items-${se()}`, i = pn("MenuItems"), l = _(null);
  r({ el: i.itemsRef, $el: i.itemsRef }), mi({ container: R(() => C(i.itemsRef)), enabled: R(() => i.menuState.value === 0), accept(f) {
    return f.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : f.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(f) {
    f.setAttribute("role", "none");
  } });
  function s(f) {
    var h;
    switch (l.value && clearTimeout(l.value), f.key) {
      case U.Space:
        if (i.searchQuery.value !== "")
          return f.preventDefault(), f.stopPropagation(), i.search(f.key);
      case U.Enter:
        if (f.preventDefault(), f.stopPropagation(), i.activeItemIndex.value !== null) {
          let p = i.items.value[i.activeItemIndex.value];
          (h = C(p.dataRef.domRef)) == null || h.click();
        }
        i.closeMenu(), ci(C(i.buttonRef));
        break;
      case U.ArrowDown:
        return f.preventDefault(), f.stopPropagation(), i.goToItem(k.Next);
      case U.ArrowUp:
        return f.preventDefault(), f.stopPropagation(), i.goToItem(k.Previous);
      case U.Home:
      case U.PageUp:
        return f.preventDefault(), f.stopPropagation(), i.goToItem(k.First);
      case U.End:
      case U.PageDown:
        return f.preventDefault(), f.stopPropagation(), i.goToItem(k.Last);
      case U.Escape:
        f.preventDefault(), f.stopPropagation(), i.closeMenu(), ie(() => {
          var p;
          return (p = C(i.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case U.Tab:
        f.preventDefault(), f.stopPropagation(), i.closeMenu(), ie(() => dv(C(i.buttonRef), f.shiftKey ? Re.Previous : Re.Next));
        break;
      default:
        f.key.length === 1 && (i.search(f.key), l.value = setTimeout(() => i.clearSearch(), 350));
        break;
    }
  }
  function u(f) {
    switch (f.key) {
      case U.Space:
        f.preventDefault();
        break;
    }
  }
  let c = It(), d = R(() => c !== null ? (c.value & J.Open) === J.Open : i.menuState.value === 0);
  return () => {
    var f, h;
    let p = { open: i.menuState.value === 0 }, { ...v } = e, m = { "aria-activedescendant": i.activeItemIndex.value === null || (f = i.items.value[i.activeItemIndex.value]) == null ? void 0 : f.id, "aria-labelledby": (h = C(i.buttonRef)) == null ? void 0 : h.id, id: a, onKeydown: s, onKeyup: u, role: "menu", tabIndex: 0, ref: i.itemsRef };
    return W({ ourProps: m, theirProps: v, slot: p, attrs: t, slots: n, features: _e.RenderStrategy | _e.Static, visible: d.value, name: "MenuItems" });
  };
} });
M({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: t, attrs: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-menu-item-${se()}`, i = pn("MenuItem"), l = _(null);
  r({ el: l, $el: l });
  let s = R(() => i.activeItemIndex.value !== null ? i.items.value[i.activeItemIndex.value].id === a : !1), u = Gv(l), c = R(() => ({ disabled: e.disabled, get textValue() {
    return u();
  }, domRef: l }));
  Q(() => i.registerItem(a, c)), de(() => i.unregisterItem(a)), ee(() => {
    i.menuState.value === 0 && s.value && i.activationTrigger.value !== 0 && ie(() => {
      var y, E;
      return (E = (y = C(l)) == null ? void 0 : y.scrollIntoView) == null ? void 0 : E.call(y, { block: "nearest" });
    });
  });
  function d(y) {
    if (e.disabled)
      return y.preventDefault();
    i.closeMenu(), ci(C(i.buttonRef));
  }
  function f() {
    if (e.disabled)
      return i.goToItem(k.Nothing);
    i.goToItem(k.Specific, a);
  }
  let h = vi();
  function p(y) {
    h.update(y);
  }
  function v(y) {
    h.wasMoved(y) && (e.disabled || s.value || i.goToItem(k.Specific, a, 0));
  }
  function m(y) {
    h.wasMoved(y) && (e.disabled || s.value && i.goToItem(k.Nothing));
  }
  return () => {
    let { disabled: y, ...E } = e, P = { active: s.value, disabled: y, close: i.closeMenu };
    return W({ ourProps: { id: a, ref: l, role: "menuitem", tabIndex: y === !0 ? void 0 : -1, "aria-disabled": y === !0 ? !0 : void 0, onClick: d, onFocus: f, onPointerenter: p, onMouseenter: p, onPointermove: v, onMousemove: v, onPointerleave: m, onMouseleave: m }, theirProps: { ...n, ...E }, slot: P, attrs: n, slots: t, name: "MenuItem" });
  };
} });
function Xv(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Rn(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Nt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var er = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(er || {});
function Qv(e, t) {
  let n = He();
  if (!e)
    return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e), [a, i] = [r, o].map((l) => {
    let [s = 0] = l.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return s;
  });
  return a !== 0 ? n.setTimeout(() => t("finished"), a + i) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function Ho(e, t, n, r, o, a) {
  let i = He(), l = a !== void 0 ? Xv(a) : () => {
  };
  return Nt(e, ...o), Rn(e, ...t, ...n), i.nextFrame(() => {
    Nt(e, ...n), Rn(e, ...r), i.add(Qv(e, (s) => (Nt(e, ...r, ...t), Rn(e, ...o), l(s))));
  }), i.add(() => Nt(e, ...t, ...n, ...r, ...o)), i.add(() => l("cancelled")), i.dispose;
}
function Ve(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Ir = Symbol("TransitionContext");
var Zv = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Zv || {});
function em() {
  return le(Ir, null) !== null;
}
function tm() {
  let e = le(Ir, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function nm() {
  let e = le($r, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let $r = Symbol("NestingContext");
function hn(e) {
  return "children" in e ? hn(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Li(e) {
  let t = _([]), n = _(!1);
  Q(() => n.value = !0), de(() => n.value = !1);
  function r(a, i = Ue.Hidden) {
    let l = t.value.findIndex(({ id: s }) => s === a);
    l !== -1 && (oe(i, { [Ue.Unmount]() {
      t.value.splice(l, 1);
    }, [Ue.Hidden]() {
      t.value[l].state = "hidden";
    } }), !hn(t) && n.value && (e == null || e()));
  }
  function o(a) {
    let i = t.value.find(({ id: l }) => l === a);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: a, state: "visible" }), () => r(a, Ue.Unmount);
  }
  return { children: t, register: o, unregister: r };
}
let Ni = _e.RenderStrategy, rm = M({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  let a = _(0);
  function i() {
    a.value |= J.Opening, t("beforeEnter");
  }
  function l() {
    a.value &= ~J.Opening, t("afterEnter");
  }
  function s() {
    a.value |= J.Closing, t("beforeLeave");
  }
  function u() {
    a.value &= ~J.Closing, t("afterLeave");
  }
  if (!em() && vv())
    return () => K(am, { ...e, onBeforeEnter: i, onAfterEnter: l, onBeforeLeave: s, onAfterLeave: u }, r);
  let c = _(null), d = R(() => e.unmount ? Ue.Unmount : Ue.Hidden);
  o({ el: c, $el: c });
  let { show: f, appear: h } = tm(), { register: p, unregister: v } = nm(), m = _(f.value ? "visible" : "hidden"), y = { value: !0 }, E = se(), P = { value: !1 }, F = Li(() => {
    !P.value && m.value !== "hidden" && (m.value = "hidden", v(E), u());
  });
  Q(() => {
    let S = p(E);
    de(S);
  }), ee(() => {
    if (d.value === Ue.Hidden && E) {
      if (f.value && m.value !== "visible") {
        m.value = "visible";
        return;
      }
      oe(m.value, { hidden: () => v(E), visible: () => p(E) });
    }
  });
  let O = Ve(e.enter), A = Ve(e.enterFrom), $ = Ve(e.enterTo), T = Ve(e.entered), j = Ve(e.leave), x = Ve(e.leaveFrom), b = Ve(e.leaveTo);
  Q(() => {
    ee(() => {
      if (m.value === "visible") {
        let S = C(c);
        if (S instanceof Comment && S.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function w(S) {
    let I = y.value && !h.value, L = C(c);
    !L || !(L instanceof HTMLElement) || I || (P.value = !0, f.value && i(), f.value || s(), S(f.value ? Ho(L, O, A, $, T, (z) => {
      P.value = !1, z === er.Finished && l();
    }) : Ho(L, j, x, b, T, (z) => {
      P.value = !1, z === er.Finished && (hn(F) || (m.value = "hidden", v(E), u()));
    })));
  }
  return Q(() => {
    ce([f], (S, I, L) => {
      w(L), y.value = !1;
    }, { immediate: !0 });
  }), ve($r, F), _r(R(() => oe(m.value, { visible: J.Open, hidden: J.Closed }) | a.value)), () => {
    let { appear: S, show: I, enter: L, enterFrom: z, enterTo: te, entered: we, leave: X, leaveFrom: fe, leaveTo: H, ...G } = e, ge = { ref: c }, be = { ...G, ...h.value && f.value && Pt.isServer ? { class: Zt([n.class, G.class, ...O, ...A]) } : {} };
    return W({ theirProps: be, ourProps: ge, slot: {}, slots: r, attrs: n, features: Ni, visible: m.value === "visible", name: "TransitionChild" });
  };
} }), om = rm, am = M({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r }) {
  let o = It(), a = R(() => e.show === null && o !== null ? (o.value & J.Open) === J.Open : e.show);
  ee(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = _(a.value ? "visible" : "hidden"), l = Li(() => {
    i.value = "hidden";
  }), s = _(!0), u = { show: a, appear: R(() => e.appear || !s.value) };
  return Q(() => {
    ee(() => {
      s.value = !1, a.value ? i.value = "visible" : hn(l) || (i.value = "hidden");
    });
  }), ve($r, l), ve(Ir, u), () => {
    let c = _t(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), d = { unmount: e.unmount };
    return W({ ourProps: { ...d, as: "template" }, theirProps: {}, slot: {}, slots: { ...r, default: () => [K(om, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...d, ...c }, r.default)] }, attrs: {}, features: Ni, visible: i.value === "visible", name: "Transition" });
  };
} });
var zo;
const im = typeof window < "u";
im && ((zo = window == null ? void 0 : window.navigator) == null ? void 0 : zo.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function lm(e) {
  return e;
}
const tr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nr = "__vueuse_ssr_handlers__";
tr[nr] = tr[nr] || {};
tr[nr];
var Vo;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Vo || (Vo = {}));
var sm = Object.defineProperty, qo = Object.getOwnPropertySymbols, um = Object.prototype.hasOwnProperty, cm = Object.prototype.propertyIsEnumerable, Wo = (e, t, n) => t in e ? sm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, dm = (e, t) => {
  for (var n in t || (t = {}))
    um.call(t, n) && Wo(e, n, t[n]);
  if (qo)
    for (var n of qo(t))
      cm.call(t, n) && Wo(e, n, t[n]);
  return e;
};
const fm = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
dm({
  linear: lm
}, fm);
function pm(e, t) {
  return R({
    get: () => e.modelValue,
    set: (n) => t("update:modelValue", n)
  });
}
const hm = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, vm = { name: "Error" }, Mi = /* @__PURE__ */ M({
  ...vm,
  props: {
    error: {}
  },
  setup(e) {
    return (t, n) => t.error ? (B(), Y("div", hm, [
      ue(t.$slots, "default", {}, () => [
        ht(Le(t.error), 1)
      ])
    ])) : De("", !0);
  }
}), mm = { class: "w-full" }, gm = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, bm = {
  name: "Base",
  inheritAttrs: !1
}, ym = /* @__PURE__ */ M({
  ...bm,
  props: {
    description: {},
    error: {},
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, n) => (B(), Y("div", mm, [
      ne("div", {
        class: Zt(["mt-1 w-full rounded-md", { "shadow-sm": t.shadow }])
      }, [
        ue(t.$slots, "default")
      ], 2),
      t.description ? (B(), Y("p", gm, Le(t.description), 1)) : De("", !0),
      t.error ? (B(), pe(Mi, {
        key: 1,
        error: t.error
      }, null, 8, ["error"])) : De("", !0)
    ]));
  }
}), wm = { name: "Actions" }, Sm = { class: "mt-8 border-t border-gray-200 pt-5" }, Em = { class: "flex justify-end" }, Om = { class: "inline-flex" };
function Tm(e, t, n, r, o, a) {
  return B(), Y("div", Sm, [
    ne("div", Em, [
      ne("span", Om, [
        ue(e.$slots, "default")
      ])
    ])
  ]);
}
const xm = /* @__PURE__ */ Nh(wm, [["render", Tm]]), Rm = { class: "relative flex items-start" }, Am = { class: "flex h-5 items-center" }, Cm = ["id", "value", "disabled", "readonly"], Pm = { class: "ml-3" }, _m = ["for"], Im = { name: "Checkbox" }, $m = /* @__PURE__ */ M({
  ...Im,
  props: {
    modelValue: { type: [Array, Boolean] },
    id: {},
    description: {},
    error: {},
    label: {},
    value: {},
    readonly: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = pm(e, t);
    return (r, o) => (B(), pe(ym, je(r.$props, { shadow: !1 }), {
      default: Ae(() => [
        ne("div", Rm, [
          ne("div", Am, [
            Pn(ne("input", je({
              id: r.id,
              "onUpdate:modelValue": o[0] || (o[0] = (a) => Ki(n) ? n.value = a : null),
              value: r.value,
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 accent-primary-600 focus:ring-primary-500",
              disabled: r.disabled,
              readonly: r.readonly
            }, r.$attrs), null, 16, Cm), [
              [Ji, re(n)]
            ]),
            ne("div", Pm, [
              ne("label", {
                for: r.id,
                class: "block text-sm font-medium leading-5 text-gray-700"
              }, Le(r.label), 9, _m)
            ])
          ])
        ])
      ]),
      _: 1
    }, 16));
  }
}), Fm = ["for"], Dm = { name: "Label" }, jm = /* @__PURE__ */ M({
  ...Dm,
  props: {
    for: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (B(), Y("label", {
      for: t.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      ue(n.$slots, "default")
    ], 8, Fm));
  }
});
var Bi = {}, Ui = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  function t(r, o) {
    return {
      handler: r,
      config: o
    };
  }
  t.withOptions = function(r, o = () => ({})) {
    const a = function(i) {
      return {
        __options: i,
        handler: r(i),
        config: o(i)
      };
    };
    return a.__isOptionsFunction = !0, a.__pluginFunction = r, a.__configFunction = o, a;
  };
  const n = t;
})(Ui);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const t = /* @__PURE__ */ n(Ui);
  function n(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const r = t.default;
})(Bi);
let An = Bi;
var Lm = (An.__esModule ? An : { default: An }).default, ki = {}, Hi = {}, Fr = { exports: {} }, N = String, zi = function() {
  return { isColorSupported: !1, reset: N, bold: N, dim: N, italic: N, underline: N, inverse: N, hidden: N, strikethrough: N, black: N, red: N, green: N, yellow: N, blue: N, magenta: N, cyan: N, white: N, gray: N, bgBlack: N, bgRed: N, bgGreen: N, bgYellow: N, bgBlue: N, bgMagenta: N, bgCyan: N, bgWhite: N, blackBright: N, redBright: N, greenBright: N, yellowBright: N, blueBright: N, magentaBright: N, cyanBright: N, whiteBright: N, bgBlackBright: N, bgRedBright: N, bgGreenBright: N, bgYellowBright: N, bgBlueBright: N, bgMagentaBright: N, bgCyanBright: N, bgWhiteBright: N };
};
Fr.exports = zi();
Fr.exports.createColors = zi;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(s, u) {
    for (var c in u)
      Object.defineProperty(s, c, {
        enumerable: !0,
        get: u[c]
      });
  }
  t(e, {
    dim: function() {
      return i;
    },
    default: function() {
      return l;
    }
  });
  const n = /* @__PURE__ */ r(Fr.exports);
  function r(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  let o = /* @__PURE__ */ new Set();
  function a(s, u, c) {
    typeof process < "u" && process.env.JEST_WORKER_ID || c && o.has(c) || (c && o.add(c), console.warn(""), u.forEach((d) => console.warn(s, "-", d)));
  }
  function i(s) {
    return n.default.dim(s);
  }
  const l = {
    info(s, u) {
      a(n.default.bold(n.default.cyan("info")), ...Array.isArray(s) ? [
        s
      ] : [
        u,
        s
      ]);
    },
    warn(s, u) {
      a(n.default.bold(n.default.yellow("warn")), ...Array.isArray(s) ? [
        s
      ] : [
        u,
        s
      ]);
    },
    risk(s, u) {
      a(n.default.bold(n.default.magenta("risk")), ...Array.isArray(s) ? [
        s
      ] : [
        u,
        s
      ]);
    }
  };
})(Hi);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(Hi);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function r({ version: a, from: i, to: l }) {
    t.default.warn(`${i}-color-renamed`, [
      `As of Tailwind CSS ${a}, \`${i}\` has been renamed to \`${l}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const o = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b"
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a"
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
      950: "#0c0a09"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407"
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006"
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16"
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22"
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e"
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344"
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b"
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065"
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764"
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724"
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519"
    },
    get lightBlue() {
      return r({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      }), this.sky;
    },
    get warmGray() {
      return r({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      }), this.stone;
    },
    get trueGray() {
      return r({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      }), this.neutral;
    },
    get coolGray() {
      return r({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      }), this.gray;
    },
    get blueGray() {
      return r({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      }), this.slate;
    }
  };
})(ki);
let Cn = ki;
var Nm = (Cn.__esModule ? Cn : { default: Cn }).default;
Lm.withOptions(
  function() {
    return function() {
    };
  },
  function(e = {}) {
    var t;
    return {
      theme: {
        extend: {
          colors: {
            primary: {
              ...Nm.indigo,
              ...(t = e == null ? void 0 : e.colors) == null ? void 0 : t.primary
            }
          }
        }
      }
    };
  }
);
const Mm = /* @__PURE__ */ M({
  __name: "CheckboxGroup",
  props: {
    form: {},
    schemaOptions: {},
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = R({
      get: () => n.modelValue,
      set: (a) => {
        r("update:modelValue", a);
      }
    });
    return (a, i) => (B(!0), Y(ze, null, xt(a.items, (l, s) => {
      var u, c, d;
      return B(), pe(re($m), {
        id: `${n.form._prefix}-${(u = l.label) != null ? u : l}`,
        key: s,
        modelValue: o.value,
        "onUpdate:modelValue": i[0] || (i[0] = (f) => o.value = f),
        value: (c = l.value) != null ? c : l,
        label: (d = l.label) != null ? d : l,
        "schema-options": a.schemaOptions
      }, null, 8, ["id", "modelValue", "value", "label", "schema-options"]);
    }), 128));
  }
}), Vi = (e) => Object.keys(e).reduce((t, n) => {
  var r;
  return e[n].schema ? { ...t, ...Vi(e[n].schema) } : (t[n] = (r = e[n].value) != null ? r : null, t);
}, {}), Bm = (e) => {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let n = "";
  for (let r = 0; r < e; r++)
    n += t.charAt(Math.floor(Math.random() * t.length));
  return n;
}, Go = (e) => Object.keys(e).reduce((t, n) => {
  var o, a, i;
  if (e[n].schema)
    return { ...t, ...Vi(e[n].schema) };
  if (e[n].component === Mm)
    return t[n] = (o = e[n].checked) != null ? o : [], t;
  const r = (a = e[n]) == null ? void 0 : a.fieldset;
  return r ? (Object.entries(r).forEach(([l, s]) => {
    var u;
    s != null && s.model ? t[s.model] = (u = s.value) != null ? u : null : t[l] = s;
  }), t) : (t[n] = (i = e[n].value) != null ? i : null, t);
}, {}), Dr = (e) => Object.entries(e).map(([t, n]) => {
  const r = n.hasOwnProperty("setup") ? { component: n } : n;
  return {
    name: t,
    definition: r
  };
});
function i0(e = {}, t = {}) {
  const n = t != null && t.precognition ? wh(t.method, t.url, Go(e)) : Ko(Go(e));
  return n._prefix = Bm(6), {
    elements: Dr(e),
    form: n,
    options: t
  };
}
const Um = { key: 0 }, jr = /* @__PURE__ */ M({
  __name: "Element",
  props: {
    element: {},
    form: {},
    schemaOptions: {}
  },
  setup(e) {
    const t = e, n = R(() => {
      var h;
      const f = (h = t.element.definition) == null ? void 0 : h.fieldset;
      return f ? Object.entries(f).reduce((p, [v, m]) => (m != null && m.model ? p[m.model] = t.form[m.model] : p[v] = t.form[v], p), {}) : {
        modelValue: t.form[t.element.name]
      };
    }), r = R(() => {
      var p;
      let f = Object.entries({
        id: `${t.form._prefix}-${t.element.name}`,
        ...t.element.definition,
        ...t.element.definition.props,
        ...n.value,
        schema: t.element.definition.schema,
        form: t.form,
        error: (p = a.value[0]) != null ? p : null
      }), h = t.element.definition.component.props;
      return Object.fromEntries(f.filter(([v]) => h.hasOwnProperty(v)));
    }), o = R(() => {
      var m, y, E, P;
      const f = (m = t.element.definition) == null ? void 0 : m.fieldset, h = (E = (y = t.element.definition.precognitive) != null ? y : t.schemaOptions.fieldsArePrecognitiveByDefault) != null ? E : !0, p = (P = t.element.definition.precognitiveEvent) != null ? P : "update", v = (F, O = "modelValue") => ({
        [`update:${O}`]: (A) => {
          t.form[F] = A, h && p === "update" && t.form.validate(F);
        },
        ...h && p !== "update" ? { [p]: () => t.form.validate(F) } : {}
      });
      return f ? Object.entries(f).reduce((F, [O, A]) => {
        var T;
        const $ = (T = A == null ? void 0 : A.model) != null ? T : O;
        return {
          ...F,
          ...v($, $)
        };
      }, {}) : v(t.element.name);
    }), a = R(() => {
      var h;
      const f = (h = t.element.definition) == null ? void 0 : h.fieldset;
      return f ? Object.keys(f).map((p) => t.form.errors[p]).filter((p) => p) : [t.form.errors[t.element.name]];
    }), i = R(() => {
      var h;
      return ((h = t.element.definition.label) != null ? h : t.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }), l = !!t.element.definition.schema, s = R(() => t.element.definition.showLabel !== void 0 ? t.element.definition.showLabel : t.element.definition.component.name === "Hidden" ? !1 : !l), u = R(() => {
      if (t.element.definition.alert !== void 0) {
        const f = t.element.definition.alert;
        return f.visible = typeof f.visible == "function" ? f.visible : () => !0, f;
      }
      return null;
    }), c = _(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible : () => !0
    ), d = _(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible(t.form) : () => !0
    );
    return ce(t.form, (f) => {
      typeof c.value == "function" && (d.value = c.value(f));
    }), (f, h) => d.value ? (B(), Y("div", Um, [
      s.value ? (B(), pe(re(jm), {
        key: 0,
        for: r.value.id
      }, {
        default: Ae(() => [
          ht(Le(i.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : De("", !0),
      (B(), pe(Xi(f.element.definition.component), je({
        key: f.element.name,
        "schema-options": f.schemaOptions
      }, r.value, Qi(o.value)), null, 16, ["schema-options"])),
      u.value && u.value.visible() ? (B(), pe(re(Dh), {
        key: 1,
        "without-icon": ""
      }, Zi({
        default: Ae(() => [
          ht(Le(u.value.text) + " ", 1)
        ]),
        _: 2
      }, [
        u.value.actionHref && u.value.actionText ? {
          name: "actions",
          fn: Ae(() => [
            nt(re(Lh), {
              external: u.value.externalAction,
              href: u.value.actionHref
            }, {
              default: Ae(() => [
                ht(Le(u.value.actionText), 1)
              ]),
              _: 1
            }, 8, ["external", "href"])
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : De("", !0),
      r.value.hasOwnProperty("error") ? De("", !0) : (B(!0), Y(ze, { key: 2 }, xt(a.value, (p, v) => (B(), pe(re(Mi), {
        key: v,
        error: p
      }, null, 8, ["error"]))), 128))
    ])) : De("", !0);
  }
}), km = { class: "mx-auto mt-6 max-w-md space-y-6" }, l0 = /* @__PURE__ */ M({
  __name: "FormBuilder",
  props: {
    schema: {},
    submit: { default: "Save" }
  },
  setup(e) {
    return (t, n) => (B(), Y("div", km, [
      ue(t.$slots, "default", {}, () => [
        (B(!0), Y(ze, null, xt(t.schema.elements, (r, o) => (B(), pe(jr, {
          key: o,
          element: r,
          form: t.schema.form,
          "schema-options": t.schema.options
        }, null, 8, ["element", "form", "schema-options"]))), 128))
      ]),
      ue(t.$slots, "actions-wrapper", {
        form: t.schema.form
      }, () => [
        nt(re(xm), null, {
          default: Ae(() => [
            ue(t.$slots, "actions", {
              form: t.schema.form
            }, () => [
              nt(re(Bh), {
                as: "button",
                type: "submit",
                loading: t.schema.form.processing
              }, {
                default: Ae(() => [
                  ht(Le(t.submit), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ])
          ]),
          _: 3
        })
      ])
    ]));
  }
}), s0 = /* @__PURE__ */ M({
  __name: "Grid",
  props: {
    schema: {},
    form: {},
    schemaOptions: {}
  },
  setup(e) {
    const n = Dr(e.schema);
    return (r, o) => (B(), Y("div", {
      class: Zt(["grid gap-x-4 gap-y-6 md:grid-flow-col", "md:grid-cols-" + re(n).length])
    }, [
      (B(!0), Y(ze, null, xt(re(n), (a, i) => (B(), pe(jr, je({
        key: i,
        element: a,
        form: r.form,
        "schema-options": r.schemaOptions,
        ref_for: !0
      }, r.$attrs), null, 16, ["element", "form", "schema-options"]))), 128))
    ], 2));
  }
}), Hm = { class: "mt-10" }, zm = {
  key: 0,
  class: "mt-1 whitespace-pre-line text-sm leading-6 text-gray-500"
}, Vm = { class: "mt-4 space-y-6" }, u0 = /* @__PURE__ */ M({
  __name: "Section",
  props: {
    schema: {},
    form: {},
    schemaOptions: {},
    heading: {},
    description: {}
  },
  setup(e) {
    const n = Dr(e.schema);
    return (r, o) => (B(), Y("div", Hm, [
      ne("label", null, Le(r.heading), 1),
      r.description ? (B(), Y("p", zm, Le(r.description), 1)) : De("", !0),
      ne("div", Vm, [
        (B(!0), Y(ze, null, xt(re(n), (a, i) => (B(), pe(jr, {
          key: i,
          element: a,
          form: r.form,
          "schema-options": r.schemaOptions
        }, null, 8, ["element", "form", "schema-options"]))), 128))
      ])
    ]));
  }
});
export {
  Mm as CheckboxGroup,
  l0 as FormBuilder,
  s0 as Grid,
  u0 as Section,
  i0 as useSchema
};
