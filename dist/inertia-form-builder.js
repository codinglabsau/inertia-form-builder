import { useForm as Zo, Link as Xi } from "@inertiajs/vue3";
import * as jr from "vue";
import { ref as I, toRaw as Ie, reactive as nr, watchEffect as ne, defineComponent as M, computed as A, watch as ve, provide as me, h as X, cloneVNode as ea, onMounted as ee, Fragment as Ve, inject as ue, onUnmounted as ge, nextTick as de, unref as oe, getCurrentInstance as Yi, Teleport as Qi, normalizeClass as nn, openBlock as k, createElementBlock as Q, createElementVNode as re, createCommentVNode as De, createVNode as rt, renderSlot as pe, createBlock as be, mergeProps as Le, withCtx as Ce, createTextVNode as mt, toDisplayString as je, withDirectives as _n, isRef as Zi, vModelCheckbox as el, vShow as Nr, shallowRef as ta, triggerRef as Mr, onScopeDispose as tl, renderList as At, resolveDynamicComponent as nl, toHandlers as rl, createSlots as ol } from "vue";
function na(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: al } = Object.prototype, { getPrototypeOf: rr } = Object, { iterator: rn, toStringTag: ra } = Symbol, on = ((e) => (t) => {
  const n = al.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Oe = (e) => (e = e.toLowerCase(), (t) => on(t) === e), an = (e) => (t) => typeof t === e, { isArray: it } = Array, ot = an("undefined");
function Ct(e) {
  return e !== null && !ot(e) && e.constructor !== null && !ot(e.constructor) && he(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const oa = Oe("ArrayBuffer");
function il(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && oa(e.buffer), t;
}
const ll = an("string"), he = an("function"), aa = an("number"), Pt = (e) => e !== null && typeof e == "object", sl = (e) => e === !0 || e === !1, Ht = (e) => {
  if (on(e) !== "object")
    return !1;
  const t = rr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ra in e) && !(rn in e);
}, ul = (e) => {
  if (!Pt(e) || Ct(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, cl = Oe("Date"), dl = Oe("File"), fl = Oe("Blob"), pl = Oe("FileList"), hl = (e) => Pt(e) && he(e.pipe), vl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || he(e.append) && ((t = on(e)) === "formdata" || t === "object" && he(e.toString) && e.toString() === "[object FormData]"));
}, ml = Oe("URLSearchParams"), [gl, bl, yl, wl] = ["ReadableStream", "Request", "Response", "Headers"].map(Oe), Sl = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Rt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), it(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (Ct(e))
      return;
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let l;
    for (r = 0; r < i; r++)
      l = a[r], t.call(null, e[l], l, e);
  }
}
function ia(e, t) {
  if (Ct(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const We = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), la = (e) => !ot(e) && e !== We;
function In() {
  const { caseless: e, skipUndefined: t } = la(this) && this || {}, n = {}, r = (o, a) => {
    const i = e && ia(n, a) || a;
    Ht(n[i]) && Ht(o) ? n[i] = In(n[i], o) : Ht(o) ? n[i] = In({}, o) : it(o) ? n[i] = o.slice() : (!t || !ot(o)) && (n[i] = o);
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && Rt(arguments[o], r);
  return n;
}
const El = (e, t, n, { allOwnKeys: r } = {}) => (Rt(t, (o, a) => {
  n && he(o) ? e[a] = na(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), Ol = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), xl = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Tl = (e, t, n, r) => {
  let o, a, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      i = o[a], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && rr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Al = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Cl = (e) => {
  if (!e)
    return null;
  if (it(e))
    return e;
  let t = e.length;
  if (!aa(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Pl = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && rr(Uint8Array)), Rl = (e, t) => {
  const r = (e && e[rn]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, _l = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Il = Oe("HTMLFormElement"), Fl = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Br = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), $l = Oe("RegExp"), sa = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Rt(n, (o, a) => {
    let i;
    (i = t(o, a, e)) !== !1 && (r[a] = i || o);
  }), Object.defineProperties(e, r);
}, Dl = (e) => {
  sa(e, (t, n) => {
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
}, Ll = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return it(e) ? r(e) : r(String(e).split(t)), n;
}, jl = () => {
}, Nl = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Ml(e) {
  return !!(e && he(e.append) && e[ra] === "FormData" && e[rn]);
}
const Bl = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Pt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Ct(r))
        return r;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = it(r) ? [] : {};
        return Rt(r, (i, l) => {
          const s = n(i, o + 1);
          !ot(s) && (a[l] = s);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, Ul = Oe("AsyncFunction"), kl = (e) => e && (Pt(e) || he(e)) && he(e.then) && he(e.catch), ua = ((e, t) => e ? setImmediate : t ? ((n, r) => (We.addEventListener("message", ({ source: o, data: a }) => {
  o === We && a === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), We.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  he(We.postMessage)
), Hl = typeof queueMicrotask < "u" ? queueMicrotask.bind(We) : typeof process < "u" && process.nextTick || ua, Vl = (e) => e != null && he(e[rn]), g = {
  isArray: it,
  isArrayBuffer: oa,
  isBuffer: Ct,
  isFormData: vl,
  isArrayBufferView: il,
  isString: ll,
  isNumber: aa,
  isBoolean: sl,
  isObject: Pt,
  isPlainObject: Ht,
  isEmptyObject: ul,
  isReadableStream: gl,
  isRequest: bl,
  isResponse: yl,
  isHeaders: wl,
  isUndefined: ot,
  isDate: cl,
  isFile: dl,
  isBlob: fl,
  isRegExp: $l,
  isFunction: he,
  isStream: hl,
  isURLSearchParams: ml,
  isTypedArray: Pl,
  isFileList: pl,
  forEach: Rt,
  merge: In,
  extend: El,
  trim: Sl,
  stripBOM: Ol,
  inherits: xl,
  toFlatObject: Tl,
  kindOf: on,
  kindOfTest: Oe,
  endsWith: Al,
  toArray: Cl,
  forEachEntry: Rl,
  matchAll: _l,
  isHTMLForm: Il,
  hasOwnProperty: Br,
  hasOwnProp: Br,
  reduceDescriptors: sa,
  freezeMethods: Dl,
  toObjectSet: Ll,
  toCamelCase: Fl,
  noop: jl,
  toFiniteNumber: Nl,
  findKey: ia,
  global: We,
  isContextDefined: la,
  isSpecCompliantForm: Ml,
  toJSONObject: Bl,
  isAsyncFn: Ul,
  isThenable: kl,
  setImmediate: ua,
  asap: Hl,
  isIterable: Vl
};
function j(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
g.inherits(j, Error, {
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
const ca = j.prototype, da = {};
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
  da[e] = { value: e };
});
Object.defineProperties(j, da);
Object.defineProperty(ca, "isAxiosError", { value: !0 });
j.from = (e, t, n, r, o, a) => {
  const i = Object.create(ca);
  g.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (c) => c !== "isAxiosError");
  const l = e && e.message ? e.message : "Error", s = t == null && e ? e.code : t;
  return j.call(i, l, s, n, r, o), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", a && Object.assign(i, a), i;
};
const zl = null;
function Fn(e) {
  return g.isPlainObject(e) || g.isArray(e);
}
function fa(e) {
  return g.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ur(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = fa(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function ql(e) {
  return g.isArray(e) && !e.some(Fn);
}
const Wl = g.toFlatObject(g, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ln(e, t, n) {
  if (!g.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = g.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, m) {
    return !g.isUndefined(m[v]);
  });
  const r = n.metaTokens, o = n.visitor || u, a = n.dots, i = n.indexes, s = (n.Blob || typeof Blob < "u" && Blob) && g.isSpecCompliantForm(t);
  if (!g.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null)
      return "";
    if (g.isDate(p))
      return p.toISOString();
    if (g.isBoolean(p))
      return p.toString();
    if (!s && g.isBlob(p))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return g.isArrayBuffer(p) || g.isTypedArray(p) ? s && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, v, m) {
    let S = p;
    if (p && !m && typeof p == "object") {
      if (g.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), p = JSON.stringify(p);
      else if (g.isArray(p) && ql(p) || (g.isFileList(p) || g.endsWith(v, "[]")) && (S = g.toArray(p)))
        return v = fa(v), S.forEach(function(R, $) {
          !(g.isUndefined(R) || R === null) && t.append(
            i === !0 ? Ur([v], $, a) : i === null ? v : v + "[]",
            c(R)
          );
        }), !1;
    }
    return Fn(p) ? !0 : (t.append(Ur(m, v, a), c(p)), !1);
  }
  const d = [], f = Object.assign(Wl, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Fn
  });
  function h(p, v) {
    if (!g.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(p), g.forEach(p, function(S, E) {
        (!(g.isUndefined(S) || S === null) && o.call(
          t,
          S,
          g.isString(E) ? E.trim() : E,
          v,
          f
        )) === !0 && h(S, v ? v.concat(E) : [E]);
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
function or(e, t) {
  this._pairs = [], e && ln(e, this, t);
}
const pa = or.prototype;
pa.append = function(t, n) {
  this._pairs.push([t, n]);
};
pa.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, kr);
  } : kr;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Kl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ha(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Kl;
  g.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = g.isURLSearchParams(t) ? t.toString() : new or(t, n).toString(r), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Gl {
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
const Hr = Gl, va = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Jl = typeof URLSearchParams < "u" ? URLSearchParams : or, Xl = typeof FormData < "u" ? FormData : null, Yl = typeof Blob < "u" ? Blob : null, Ql = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Jl,
    FormData: Xl,
    Blob: Yl
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ar = typeof window < "u" && typeof document < "u", $n = typeof navigator == "object" && navigator || void 0, Zl = ar && (!$n || ["ReactNative", "NativeScript", "NS"].indexOf($n.product) < 0), es = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ts = ar && window.location.href || "http://localhost", ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ar,
  hasStandardBrowserWebWorkerEnv: es,
  hasStandardBrowserEnv: Zl,
  navigator: $n,
  origin: ts
}, Symbol.toStringTag, { value: "Module" })), se = {
  ...ns,
  ...Ql
};
function rs(e, t) {
  return ln(e, new se.classes.URLSearchParams(), {
    visitor: function(n, r, o, a) {
      return se.isNode && g.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function os(e) {
  return g.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function as(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function ma(e) {
  function t(n, r, o, a) {
    let i = n[a++];
    if (i === "__proto__")
      return !0;
    const l = Number.isFinite(+i), s = a >= n.length;
    return i = !i && g.isArray(o) ? o.length : i, s ? (g.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !l) : ((!o[i] || !g.isObject(o[i])) && (o[i] = []), t(n, r, o[i], a) && g.isArray(o[i]) && (o[i] = as(o[i])), !l);
  }
  if (g.isFormData(e) && g.isFunction(e.entries)) {
    const n = {};
    return g.forEachEntry(e, (r, o) => {
      t(os(r), o, n, 0);
    }), n;
  }
  return null;
}
function is(e, t, n) {
  if (g.isString(e))
    try {
      return (t || JSON.parse)(e), g.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ir = {
  transitional: va,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = g.isObject(t);
    if (a && g.isHTMLForm(t) && (t = new FormData(t)), g.isFormData(t))
      return o ? JSON.stringify(ma(t)) : t;
    if (g.isArrayBuffer(t) || g.isBuffer(t) || g.isStream(t) || g.isFile(t) || g.isBlob(t) || g.isReadableStream(t))
      return t;
    if (g.isArrayBufferView(t))
      return t.buffer;
    if (g.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return rs(t, this.formSerializer).toString();
      if ((l = g.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const s = this.env && this.env.FormData;
        return ln(
          l ? { "files[]": t } : t,
          s && new s(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), is(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ir.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (g.isResponse(t) || g.isReadableStream(t))
      return t;
    if (t && g.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? j.from(l, j.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: se.classes.FormData,
    Blob: se.classes.Blob
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
  ir.headers[e] = {};
});
const lr = ir, ls = g.toObjectSet([
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
]), ss = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && ls[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Vr = Symbol("internals");
function ut(e) {
  return e && String(e).trim().toLowerCase();
}
function Vt(e) {
  return e === !1 || e == null ? e : g.isArray(e) ? e.map(Vt) : String(e);
}
function us(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const cs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function gn(e, t, n, r, o) {
  if (g.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!g.isString(t)) {
    if (g.isString(r))
      return t.indexOf(r) !== -1;
    if (g.isRegExp(r))
      return r.test(t);
  }
}
function ds(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function fs(e, t) {
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
class sn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(l, s, c) {
      const u = ut(s);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = g.findKey(o, u);
      (!d || o[d] === void 0 || c === !0 || c === void 0 && o[d] !== !1) && (o[d || s] = Vt(l));
    }
    const i = (l, s) => g.forEach(l, (c, u) => a(c, u, s));
    if (g.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (g.isString(t) && (t = t.trim()) && !cs(t))
      i(ss(t), n);
    else if (g.isObject(t) && g.isIterable(t)) {
      let l = {}, s, c;
      for (const u of t) {
        if (!g.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[c = u[0]] = (s = l[c]) ? g.isArray(s) ? [...s, u[1]] : [s, u[1]] : u[1];
      }
      i(l, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = ut(t), t) {
      const r = g.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return us(o);
        if (g.isFunction(n))
          return n.call(this, o, r);
        if (g.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ut(t), t) {
      const r = g.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || gn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(i) {
      if (i = ut(i), i) {
        const l = g.findKey(r, i);
        l && (!n || gn(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return g.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || gn(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return g.forEach(this, (o, a) => {
      const i = g.findKey(r, a);
      if (i) {
        n[i] = Vt(o), delete n[a];
        return;
      }
      const l = t ? ds(a) : String(a).trim();
      l !== a && delete n[a], n[l] = Vt(o), r[l] = !0;
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
    const r = (this[Vr] = this[Vr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const l = ut(i);
      r[l] || (fs(o, i), r[l] = !0);
    }
    return g.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
sn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
g.reduceDescriptors(sn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
g.freezeMethods(sn);
const Se = sn;
function bn(e, t) {
  const n = this || lr, r = t || n, o = Se.from(r.headers);
  let a = r.data;
  return g.forEach(e, function(l) {
    a = l.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function ga(e) {
  return !!(e && e.__CANCEL__);
}
function lt(e, t, n) {
  j.call(this, e == null ? "canceled" : e, j.ERR_CANCELED, t, n), this.name = "CanceledError";
}
g.inherits(lt, j, {
  __CANCEL__: !0
});
function ba(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new j(
    "Request failed with status code " + n.status,
    [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function ps(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function hs(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(s) {
    const c = Date.now(), u = r[a];
    i || (i = c), n[o] = s, r[o] = c;
    let d = a, f = 0;
    for (; d !== o; )
      f += n[d++], d = d % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), c - i < t)
      return;
    const h = u && c - u;
    return h ? Math.round(f * 1e3 / h) : void 0;
  };
}
function vs(e, t) {
  let n = 0, r = 1e3 / t, o, a;
  const i = (c, u = Date.now()) => {
    n = u, o = null, a && (clearTimeout(a), a = null), e(...c);
  };
  return [(...c) => {
    const u = Date.now(), d = u - n;
    d >= r ? i(c, u) : (o = c, a || (a = setTimeout(() => {
      a = null, i(o);
    }, r - d)));
  }, () => o && i(o)];
}
const Kt = (e, t, n = 3) => {
  let r = 0;
  const o = hs(50, 250);
  return vs((a) => {
    const i = a.loaded, l = a.lengthComputable ? a.total : void 0, s = i - r, c = o(s), u = i <= l;
    r = i;
    const d = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: s,
      rate: c || void 0,
      estimated: c && l && u ? (l - i) / c : void 0,
      event: a,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, zr = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, qr = (e) => (...t) => g.asap(() => e(...t)), ms = se.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, se.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(se.origin),
  se.navigator && /(msie|trident)/i.test(se.navigator.userAgent)
) : () => !0, gs = se.hasStandardBrowserEnv ? {
  write(e, t, n, r, o, a, i) {
    if (typeof document > "u")
      return;
    const l = [`${e}=${encodeURIComponent(t)}`];
    g.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), g.isString(r) && l.push(`path=${r}`), g.isString(o) && l.push(`domain=${o}`), a === !0 && l.push("secure"), g.isString(i) && l.push(`SameSite=${i}`), document.cookie = l.join("; ");
  },
  read(e) {
    if (typeof document > "u")
      return null;
    const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
    return t ? decodeURIComponent(t[1]) : null;
  },
  remove(e) {
    this.write(e, "", Date.now() - 864e5, "/");
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
function bs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ys(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ya(e, t, n) {
  let r = !bs(t);
  return e && (r || n == !1) ? ys(e, t) : t;
}
const Wr = (e) => e instanceof Se ? { ...e } : e;
function Ge(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d, f) {
    return g.isPlainObject(c) && g.isPlainObject(u) ? g.merge.call({ caseless: f }, c, u) : g.isPlainObject(u) ? g.merge({}, u) : g.isArray(u) ? u.slice() : u;
  }
  function o(c, u, d, f) {
    if (g.isUndefined(u)) {
      if (!g.isUndefined(c))
        return r(void 0, c, d, f);
    } else
      return r(c, u, d, f);
  }
  function a(c, u) {
    if (!g.isUndefined(u))
      return r(void 0, u);
  }
  function i(c, u) {
    if (g.isUndefined(u)) {
      if (!g.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, u);
  }
  function l(c, u, d) {
    if (d in t)
      return r(c, u);
    if (d in e)
      return r(void 0, c);
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
    headers: (c, u, d) => o(Wr(c), Wr(u), d, !0)
  };
  return g.forEach(Object.keys({ ...e, ...t }), function(u) {
    const d = s[u] || o, f = d(e[u], t[u], u);
    g.isUndefined(f) && d !== l || (n[u] = f);
  }), n;
}
const wa = (e) => {
  const t = Ge({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: i, auth: l } = t;
  if (t.headers = i = Se.from(i), t.url = ha(ya(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), g.isFormData(n)) {
    if (se.hasStandardBrowserEnv || se.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (g.isFunction(n.getHeaders)) {
      const s = n.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(s).forEach(([u, d]) => {
        c.includes(u.toLowerCase()) && i.set(u, d);
      });
    }
  }
  if (se.hasStandardBrowserEnv && (r && g.isFunction(r) && (r = r(t)), r || r !== !1 && ms(t.url))) {
    const s = o && a && gs.read(a);
    s && i.set(o, s);
  }
  return t;
}, ws = typeof XMLHttpRequest < "u", Ss = ws && function(e) {
  return new Promise(function(n, r) {
    const o = wa(e);
    let a = o.data;
    const i = Se.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: s, onDownloadProgress: c } = o, u, d, f, h, p;
    function v() {
      h && h(), p && p(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(o.method.toUpperCase(), o.url, !0), m.timeout = o.timeout;
    function S() {
      if (!m)
        return;
      const R = Se.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), x = {
        data: !l || l === "text" || l === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: R,
        config: e,
        request: m
      };
      ba(function(F) {
        n(F), v();
      }, function(F) {
        r(F), v();
      }, x), m = null;
    }
    "onloadend" in m ? m.onloadend = S : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, m.onabort = function() {
      !m || (r(new j("Request aborted", j.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function($) {
      const x = $ && $.message ? $.message : "Network Error", C = new j(x, j.ERR_NETWORK, e, m);
      C.event = $ || null, r(C), m = null;
    }, m.ontimeout = function() {
      let $ = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const x = o.transitional || va;
      o.timeoutErrorMessage && ($ = o.timeoutErrorMessage), r(new j(
        $,
        x.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
        e,
        m
      )), m = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in m && g.forEach(i.toJSON(), function($, x) {
      m.setRequestHeader(x, $);
    }), g.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), l && l !== "json" && (m.responseType = o.responseType), c && ([f, p] = Kt(c, !0), m.addEventListener("progress", f)), s && m.upload && ([d, h] = Kt(s), m.upload.addEventListener("progress", d), m.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (u = (R) => {
      !m || (r(!R || R.type ? new lt(null, e, m) : R), m.abort(), m = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const E = ps(o.url);
    if (E && se.protocols.indexOf(E) === -1) {
      r(new j("Unsupported protocol " + E + ":", j.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(a || null);
  });
}, Es = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(c) {
      if (!o) {
        o = !0, l();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof j ? u : new lt(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, a(new j(`timeout ${t} of ms exceeded`, j.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(a) : c.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", a));
    const { signal: s } = r;
    return s.unsubscribe = () => g.asap(l), s;
  }
}, Os = Es, xs = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, Ts = async function* (e, t) {
  for await (const n of As(e))
    yield* xs(n, t);
}, As = async function* (e) {
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
}, Kr = (e, t, n, r) => {
  const o = Ts(e, t);
  let a = 0, i, l = (s) => {
    i || (i = !0, r && r(s));
  };
  return new ReadableStream({
    async pull(s) {
      try {
        const { done: c, value: u } = await o.next();
        if (c) {
          l(), s.close();
          return;
        }
        let d = u.byteLength;
        if (n) {
          let f = a += d;
          n(f);
        }
        s.enqueue(new Uint8Array(u));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(s) {
      return l(s), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Gr = 64 * 1024, { isFunction: Nt } = g, Cs = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(g.global), {
  ReadableStream: Jr,
  TextEncoder: Xr
} = g.global, Yr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ps = (e) => {
  e = g.merge.call({
    skipUndefined: !0
  }, Cs, e);
  const { fetch: t, Request: n, Response: r } = e, o = t ? Nt(t) : typeof fetch == "function", a = Nt(n), i = Nt(r);
  if (!o)
    return !1;
  const l = o && Nt(Jr), s = o && (typeof Xr == "function" ? ((p) => (v) => p.encode(v))(new Xr()) : async (p) => new Uint8Array(await new n(p).arrayBuffer())), c = a && l && Yr(() => {
    let p = !1;
    const v = new n(se.origin, {
      body: new Jr(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return p && !v;
  }), u = i && l && Yr(() => g.isReadableStream(new r("").body)), d = {
    stream: u && ((p) => p.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !d[p] && (d[p] = (v, m) => {
      let S = v && v[p];
      if (S)
        return S.call(v);
      throw new j(`Response type '${p}' is not supported`, j.ERR_NOT_SUPPORT, m);
    });
  });
  const f = async (p) => {
    if (p == null)
      return 0;
    if (g.isBlob(p))
      return p.size;
    if (g.isSpecCompliantForm(p))
      return (await new n(se.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (g.isArrayBufferView(p) || g.isArrayBuffer(p))
      return p.byteLength;
    if (g.isURLSearchParams(p) && (p = p + ""), g.isString(p))
      return (await s(p)).byteLength;
  }, h = async (p, v) => {
    const m = g.toFiniteNumber(p.getContentLength());
    return m == null ? f(v) : m;
  };
  return async (p) => {
    let {
      url: v,
      method: m,
      data: S,
      signal: E,
      cancelToken: R,
      timeout: $,
      onDownloadProgress: x,
      onUploadProgress: C,
      responseType: F,
      headers: T,
      withCredentials: L = "same-origin",
      fetchOptions: O
    } = wa(p), b = t || fetch;
    F = F ? (F + "").toLowerCase() : "text";
    let y = Os([E, R && R.toAbortSignal()], $), w = null;
    const _ = y && y.unsubscribe && (() => {
      y.unsubscribe();
    });
    let D;
    try {
      if (C && c && m !== "get" && m !== "head" && (D = await h(T, S)) !== 0) {
        let U = new n(v, {
          method: "POST",
          body: S,
          duplex: "half"
        }), z;
        if (g.isFormData(S) && (z = U.headers.get("content-type")) && T.setContentType(z), U.body) {
          const [le, ae] = zr(
            D,
            Kt(qr(C))
          );
          S = Kr(U.body, Gr, le, ae);
        }
      }
      g.isString(L) || (L = L ? "include" : "omit");
      const B = a && "credentials" in n.prototype, J = {
        ...O,
        signal: y,
        method: m.toUpperCase(),
        headers: T.normalize().toJSON(),
        body: S,
        duplex: "half",
        credentials: B ? L : void 0
      };
      w = a && new n(v, J);
      let Z = await (a ? b(w, O) : b(v, J));
      const K = u && (F === "stream" || F === "response");
      if (u && (x || K && _)) {
        const U = {};
        ["status", "statusText", "headers"].forEach((et) => {
          U[et] = Z[et];
        });
        const z = g.toFiniteNumber(Z.headers.get("content-length")), [le, ae] = x && zr(
          z,
          Kt(qr(x), !0)
        ) || [];
        Z = new r(
          Kr(Z.body, Gr, le, () => {
            ae && ae(), _ && _();
          }),
          U
        );
      }
      F = F || "text";
      let ce = await d[g.findKey(d, F) || "text"](Z, p);
      return !K && _ && _(), await new Promise((U, z) => {
        ba(U, z, {
          data: ce,
          headers: Se.from(Z.headers),
          status: Z.status,
          statusText: Z.statusText,
          config: p,
          request: w
        });
      });
    } catch (B) {
      throw _ && _(), B && B.name === "TypeError" && /Load failed|fetch/i.test(B.message) ? Object.assign(
        new j("Network Error", j.ERR_NETWORK, p, w),
        {
          cause: B.cause || B
        }
      ) : j.from(B, B && B.code, p, w);
    }
  };
}, Rs = /* @__PURE__ */ new Map(), Sa = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, a = [
    r,
    o,
    n
  ];
  let i = a.length, l = i, s, c, u = Rs;
  for (; l--; )
    s = a[l], c = u.get(s), c === void 0 && u.set(s, c = l ? /* @__PURE__ */ new Map() : Ps(t)), u = c;
  return c;
};
Sa();
const sr = {
  http: zl,
  xhr: Ss,
  fetch: {
    get: Sa
  }
};
g.forEach(sr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qr = (e) => `- ${e}`, _s = (e) => g.isFunction(e) || e === null || e === !1;
function Is(e, t) {
  e = g.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const a = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let l;
    if (o = r, !_s(r) && (o = sr[(l = String(r)).toLowerCase()], o === void 0))
      throw new j(`Unknown adapter '${l}'`);
    if (o && (g.isFunction(o) || (o = o.get(t))))
      break;
    a[l || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(a).map(
      ([s, c]) => `adapter ${s} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? i.length > 1 ? `since :
` + i.map(Qr).join(`
`) : " " + Qr(i[0]) : "as no adapter specified";
    throw new j(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Ea = {
  getAdapter: Is,
  adapters: sr
};
function yn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new lt(null, e);
}
function Zr(e) {
  return yn(e), e.headers = Se.from(e.headers), e.data = bn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ea.getAdapter(e.adapter || lr.adapter, e)(e).then(function(r) {
    return yn(e), r.data = bn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Se.from(r.headers), r;
  }, function(r) {
    return ga(r) || (yn(e), r && r.response && (r.response.data = bn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Se.from(r.response.headers))), Promise.reject(r);
  });
}
const Oa = "1.13.2", un = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  un[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const eo = {};
un.transitional = function(t, n, r) {
  function o(a, i) {
    return "[Axios v" + Oa + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return (a, i, l) => {
    if (t === !1)
      throw new j(
        o(i, " has been removed" + (n ? " in " + n : "")),
        j.ERR_DEPRECATED
      );
    return n && !eo[i] && (eo[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, i, l) : !0;
  };
};
un.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Fs(e, t, n) {
  if (typeof e != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], i = t[a];
    if (i) {
      const l = e[a], s = l === void 0 || i(l, a, e);
      if (s !== !0)
        throw new j("option " + a + " must be " + s, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new j("Unknown option " + a, j.ERR_BAD_OPTION);
  }
}
const zt = {
  assertOptions: Fs,
  validators: un
}, Te = zt.validators;
class Gt {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ge(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && zt.assertOptions(r, {
      silentJSONParsing: Te.transitional(Te.boolean),
      forcedJSONParsing: Te.transitional(Te.boolean),
      clarifyTimeoutError: Te.transitional(Te.boolean)
    }, !1), o != null && (g.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : zt.assertOptions(o, {
      encode: Te.function,
      serialize: Te.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), zt.assertOptions(n, {
      baseUrl: Te.spelling("baseURL"),
      withXsrfToken: Te.spelling("withXSRFToken")
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
    const c = [];
    this.interceptors.response.forEach(function(v) {
      c.push(v.fulfilled, v.rejected);
    });
    let u, d = 0, f;
    if (!s) {
      const p = [Zr.bind(this), void 0];
      for (p.unshift(...l), p.push(...c), f = p.length, u = Promise.resolve(n); d < f; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    f = l.length;
    let h = n;
    for (; d < f; ) {
      const p = l[d++], v = l[d++];
      try {
        h = p(h);
      } catch (m) {
        v.call(this, m);
        break;
      }
    }
    try {
      u = Zr.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Ge(this.defaults, t);
    const n = ya(t.baseURL, t.url, t.allowAbsoluteUrls);
    return ha(n, t.params, t.paramsSerializer);
  }
}
g.forEach(["delete", "get", "head", "options"], function(t) {
  Gt.prototype[t] = function(n, r) {
    return this.request(Ge(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
g.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, i, l) {
      return this.request(Ge(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  Gt.prototype[t] = n(), Gt.prototype[t + "Form"] = n(!0);
});
const qt = Gt;
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
      r.reason || (r.reason = new lt(a, i, l), n(r.reason));
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
const $s = ur;
function Ds(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ls(e) {
  return g.isObject(e) && e.isAxiosError === !0;
}
const Dn = {
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
Object.entries(Dn).forEach(([e, t]) => {
  Dn[t] = e;
});
const js = Dn;
function xa(e) {
  const t = new qt(e), n = na(qt.prototype.request, t);
  return g.extend(n, qt.prototype, t, { allOwnKeys: !0 }), g.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return xa(Ge(e, o));
  }, n;
}
const te = xa(lr);
te.Axios = qt;
te.CanceledError = lt;
te.CancelToken = $s;
te.isCancel = ga;
te.VERSION = Oa;
te.toFormData = ln;
te.AxiosError = j;
te.Cancel = te.CanceledError;
te.all = function(t) {
  return Promise.all(t);
};
te.spread = Ds;
te.isAxiosError = Ls;
te.mergeConfig = Ge;
te.AxiosHeaders = Se;
te.formToJSON = (e) => ma(g.isHTMLForm(e) ? new FormData(e) : e);
te.getAdapter = Ea.getAdapter;
te.HttpStatusCode = js;
te.default = te;
const Ta = te, {
  Axios: Ym,
  AxiosError: Qm,
  CanceledError: Zm,
  isCancel: Aa,
  CancelToken: e0,
  VERSION: t0,
  all: n0,
  Cancel: r0,
  isAxiosError: Ca,
  spread: o0,
  toFormData: a0,
  AxiosHeaders: i0,
  HttpStatusCode: l0,
  formToJSON: s0,
  getAdapter: u0,
  mergeConfig: Ns
} = Ta;
var Ms = typeof global == "object" && global && global.Object === Object && global;
const Pa = Ms;
var Bs = typeof self == "object" && self && self.Object === Object && self, Us = Pa || Bs || Function("return this")();
const xe = Us;
var ks = xe.Symbol;
const we = ks;
var Ra = Object.prototype, Hs = Ra.hasOwnProperty, Vs = Ra.toString, ct = we ? we.toStringTag : void 0;
function zs(e) {
  var t = Hs.call(e, ct), n = e[ct];
  try {
    e[ct] = void 0;
    var r = !0;
  } catch {
  }
  var o = Vs.call(e);
  return r && (t ? e[ct] = n : delete e[ct]), o;
}
var qs = Object.prototype, Ws = qs.toString;
function Ks(e) {
  return Ws.call(e);
}
var Gs = "[object Null]", Js = "[object Undefined]", to = we ? we.toStringTag : void 0;
function Xe(e) {
  return e == null ? e === void 0 ? Js : Gs : to && to in Object(e) ? zs(e) : Ks(e);
}
function Re(e) {
  return e != null && typeof e == "object";
}
var Xs = "[object Symbol]";
function cn(e) {
  return typeof e == "symbol" || Re(e) && Xe(e) == Xs;
}
function _a(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ys = Array.isArray;
const Ee = Ys;
var Qs = 1 / 0, no = we ? we.prototype : void 0, ro = no ? no.toString : void 0;
function Ia(e) {
  if (typeof e == "string")
    return e;
  if (Ee(e))
    return _a(e, Ia) + "";
  if (cn(e))
    return ro ? ro.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Qs ? "-0" : t;
}
var Zs = /\s/;
function eu(e) {
  for (var t = e.length; t-- && Zs.test(e.charAt(t)); )
    ;
  return t;
}
var tu = /^\s+/;
function nu(e) {
  return e && e.slice(0, eu(e) + 1).replace(tu, "");
}
function ye(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var oo = 0 / 0, ru = /^[-+]0x[0-9a-f]+$/i, ou = /^0b[01]+$/i, au = /^0o[0-7]+$/i, iu = parseInt;
function ao(e) {
  if (typeof e == "number")
    return e;
  if (cn(e))
    return oo;
  if (ye(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ye(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = nu(e);
  var n = ou.test(e);
  return n || au.test(e) ? iu(e.slice(2), n ? 2 : 8) : ru.test(e) ? oo : +e;
}
function Fa(e) {
  return e;
}
var lu = "[object AsyncFunction]", su = "[object Function]", uu = "[object GeneratorFunction]", cu = "[object Proxy]";
function cr(e) {
  if (!ye(e))
    return !1;
  var t = Xe(e);
  return t == su || t == uu || t == lu || t == cu;
}
var du = xe["__core-js_shared__"];
const wn = du;
var io = function() {
  var e = /[^.]+$/.exec(wn && wn.keys && wn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function fu(e) {
  return !!io && io in e;
}
var pu = Function.prototype, hu = pu.toString;
function Ye(e) {
  if (e != null) {
    try {
      return hu.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var vu = /[\\^$.*+?()[\]{}|]/g, mu = /^\[object .+?Constructor\]$/, gu = Function.prototype, bu = Object.prototype, yu = gu.toString, wu = bu.hasOwnProperty, Su = RegExp(
  "^" + yu.call(wu).replace(vu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Eu(e) {
  if (!ye(e) || fu(e))
    return !1;
  var t = cr(e) ? Su : mu;
  return t.test(Ye(e));
}
function Ou(e, t) {
  return e == null ? void 0 : e[t];
}
function Qe(e, t) {
  var n = Ou(e, t);
  return Eu(n) ? n : void 0;
}
var xu = Qe(xe, "WeakMap");
const Ln = xu;
var lo = Object.create, Tu = function() {
  function e() {
  }
  return function(t) {
    if (!ye(t))
      return {};
    if (lo)
      return lo(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Au = Tu;
function Cu(e, t, n) {
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
function $a(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Pu = 800, Ru = 16, _u = Date.now;
function Iu(e) {
  var t = 0, n = 0;
  return function() {
    var r = _u(), o = Ru - (r - n);
    if (n = r, o > 0) {
      if (++t >= Pu)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Fu(e) {
  return function() {
    return e;
  };
}
var $u = function() {
  try {
    var e = Qe(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Jt = $u;
var Du = Jt ? function(e, t) {
  return Jt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Fu(t),
    writable: !0
  });
} : Fa;
const Lu = Du;
var ju = Iu(Lu);
const Da = ju;
function Nu(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Mu = 9007199254740991, Bu = /^(?:0|[1-9]\d*)$/;
function dr(e, t) {
  var n = typeof e;
  return t = t == null ? Mu : t, !!t && (n == "number" || n != "symbol" && Bu.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function fr(e, t, n) {
  t == "__proto__" && Jt ? Jt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function _t(e, t) {
  return e === t || e !== e && t !== t;
}
var Uu = Object.prototype, ku = Uu.hasOwnProperty;
function pr(e, t, n) {
  var r = e[t];
  (!(ku.call(e, t) && _t(r, n)) || n === void 0 && !(t in e)) && fr(e, t, n);
}
function st(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var l = t[a], s = r ? r(n[l], e[l], l, n, e) : void 0;
    s === void 0 && (s = e[l]), o ? fr(n, l, s) : pr(n, l, s);
  }
  return n;
}
var so = Math.max;
function La(e, t, n) {
  return t = so(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = so(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(i), Cu(e, this, l);
  };
}
function Hu(e, t) {
  return Da(La(e, t, Fa), e + "");
}
var Vu = 9007199254740991;
function ja(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Vu;
}
function dn(e) {
  return e != null && ja(e.length) && !cr(e);
}
function zu(e, t, n) {
  if (!ye(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? dn(n) && dr(t, n.length) : r == "string" && t in n) ? _t(n[t], e) : !1;
}
function qu(e) {
  return Hu(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, i = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, i && zu(n[0], n[1], i) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var l = n[r];
      l && e(t, l, r, a);
    }
    return t;
  });
}
var Wu = Object.prototype;
function hr(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Wu;
  return e === n;
}
function Ku(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Gu = "[object Arguments]";
function uo(e) {
  return Re(e) && Xe(e) == Gu;
}
var Na = Object.prototype, Ju = Na.hasOwnProperty, Xu = Na.propertyIsEnumerable, Yu = uo(function() {
  return arguments;
}()) ? uo : function(e) {
  return Re(e) && Ju.call(e, "callee") && !Xu.call(e, "callee");
};
const Xt = Yu;
function Qu() {
  return !1;
}
var Ma = typeof exports == "object" && exports && !exports.nodeType && exports, co = Ma && typeof module == "object" && module && !module.nodeType && module, Zu = co && co.exports === Ma, fo = Zu ? xe.Buffer : void 0, ec = fo ? fo.isBuffer : void 0, tc = ec || Qu;
const wt = tc;
var nc = "[object Arguments]", rc = "[object Array]", oc = "[object Boolean]", ac = "[object Date]", ic = "[object Error]", lc = "[object Function]", sc = "[object Map]", uc = "[object Number]", cc = "[object Object]", dc = "[object RegExp]", fc = "[object Set]", pc = "[object String]", hc = "[object WeakMap]", vc = "[object ArrayBuffer]", mc = "[object DataView]", gc = "[object Float32Array]", bc = "[object Float64Array]", yc = "[object Int8Array]", wc = "[object Int16Array]", Sc = "[object Int32Array]", Ec = "[object Uint8Array]", Oc = "[object Uint8ClampedArray]", xc = "[object Uint16Array]", Tc = "[object Uint32Array]", W = {};
W[gc] = W[bc] = W[yc] = W[wc] = W[Sc] = W[Ec] = W[Oc] = W[xc] = W[Tc] = !0;
W[nc] = W[rc] = W[vc] = W[oc] = W[mc] = W[ac] = W[ic] = W[lc] = W[sc] = W[uc] = W[cc] = W[dc] = W[fc] = W[pc] = W[hc] = !1;
function Ac(e) {
  return Re(e) && ja(e.length) && !!W[Xe(e)];
}
function vr(e) {
  return function(t) {
    return e(t);
  };
}
var Ba = typeof exports == "object" && exports && !exports.nodeType && exports, gt = Ba && typeof module == "object" && module && !module.nodeType && module, Cc = gt && gt.exports === Ba, Sn = Cc && Pa.process, Pc = function() {
  try {
    var e = gt && gt.require && gt.require("util").types;
    return e || Sn && Sn.binding && Sn.binding("util");
  } catch {
  }
}();
const at = Pc;
var po = at && at.isTypedArray, Rc = po ? vr(po) : Ac;
const mr = Rc;
var _c = Object.prototype, Ic = _c.hasOwnProperty;
function Ua(e, t) {
  var n = Ee(e), r = !n && Xt(e), o = !n && !r && wt(e), a = !n && !r && !o && mr(e), i = n || r || o || a, l = i ? Ku(e.length, String) : [], s = l.length;
  for (var c in e)
    (t || Ic.call(e, c)) && !(i && (c == "length" || o && (c == "offset" || c == "parent") || a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || dr(c, s))) && l.push(c);
  return l;
}
function ka(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Fc = ka(Object.keys, Object);
const $c = Fc;
var Dc = Object.prototype, Lc = Dc.hasOwnProperty;
function jc(e) {
  if (!hr(e))
    return $c(e);
  var t = [];
  for (var n in Object(e))
    Lc.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function gr(e) {
  return dn(e) ? Ua(e) : jc(e);
}
function Nc(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Mc = Object.prototype, Bc = Mc.hasOwnProperty;
function Uc(e) {
  if (!ye(e))
    return Nc(e);
  var t = hr(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Bc.call(e, r)) || n.push(r);
  return n;
}
function It(e) {
  return dn(e) ? Ua(e, !0) : Uc(e);
}
var kc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Hc = /^\w*$/;
function Vc(e, t) {
  if (Ee(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || cn(e) ? !0 : Hc.test(e) || !kc.test(e) || t != null && e in Object(t);
}
var zc = Qe(Object, "create");
const St = zc;
function qc() {
  this.__data__ = St ? St(null) : {}, this.size = 0;
}
function Wc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Kc = "__lodash_hash_undefined__", Gc = Object.prototype, Jc = Gc.hasOwnProperty;
function Xc(e) {
  var t = this.__data__;
  if (St) {
    var n = t[e];
    return n === Kc ? void 0 : n;
  }
  return Jc.call(t, e) ? t[e] : void 0;
}
var Yc = Object.prototype, Qc = Yc.hasOwnProperty;
function Zc(e) {
  var t = this.__data__;
  return St ? t[e] !== void 0 : Qc.call(t, e);
}
var ed = "__lodash_hash_undefined__";
function td(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = St && t === void 0 ? ed : t, this;
}
function Je(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Je.prototype.clear = qc;
Je.prototype.delete = Wc;
Je.prototype.get = Xc;
Je.prototype.has = Zc;
Je.prototype.set = td;
function nd() {
  this.__data__ = [], this.size = 0;
}
function fn(e, t) {
  for (var n = e.length; n--; )
    if (_t(e[n][0], t))
      return n;
  return -1;
}
var rd = Array.prototype, od = rd.splice;
function ad(e) {
  var t = this.__data__, n = fn(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : od.call(t, n, 1), --this.size, !0;
}
function id(e) {
  var t = this.__data__, n = fn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ld(e) {
  return fn(this.__data__, e) > -1;
}
function sd(e, t) {
  var n = this.__data__, r = fn(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Ne(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ne.prototype.clear = nd;
Ne.prototype.delete = ad;
Ne.prototype.get = id;
Ne.prototype.has = ld;
Ne.prototype.set = sd;
var ud = Qe(xe, "Map");
const Et = ud;
function cd() {
  this.size = 0, this.__data__ = {
    hash: new Je(),
    map: new (Et || Ne)(),
    string: new Je()
  };
}
function dd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function pn(e, t) {
  var n = e.__data__;
  return dd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function fd(e) {
  var t = pn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function pd(e) {
  return pn(this, e).get(e);
}
function hd(e) {
  return pn(this, e).has(e);
}
function vd(e, t) {
  var n = pn(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Me(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Me.prototype.clear = cd;
Me.prototype.delete = fd;
Me.prototype.get = pd;
Me.prototype.has = hd;
Me.prototype.set = vd;
var md = "Expected a function";
function br(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(md);
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
var gd = 500;
function bd(e) {
  var t = br(e, function(r) {
    return n.size === gd && n.clear(), r;
  }), n = t.cache;
  return t;
}
var yd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wd = /\\(\\)?/g, Sd = bd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(yd, function(n, r, o, a) {
    t.push(o ? a.replace(wd, "$1") : r || n);
  }), t;
});
const Ed = Sd;
function Od(e) {
  return e == null ? "" : Ia(e);
}
function hn(e, t) {
  return Ee(e) ? e : Vc(e, t) ? [e] : Ed(Od(e));
}
var xd = 1 / 0;
function yr(e) {
  if (typeof e == "string" || cn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -xd ? "-0" : t;
}
function Ha(e, t) {
  t = hn(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[yr(t[n++])];
  return n && n == r ? e : void 0;
}
function Yt(e, t, n) {
  var r = e == null ? void 0 : Ha(e, t);
  return r === void 0 ? n : r;
}
function wr(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var ho = we ? we.isConcatSpreadable : void 0;
function Td(e) {
  return Ee(e) || Xt(e) || !!(ho && e && e[ho]);
}
function Va(e, t, n, r, o) {
  var a = -1, i = e.length;
  for (n || (n = Td), o || (o = []); ++a < i; ) {
    var l = e[a];
    t > 0 && n(l) ? t > 1 ? Va(l, t - 1, n, r, o) : wr(o, l) : r || (o[o.length] = l);
  }
  return o;
}
function Ad(e) {
  var t = e == null ? 0 : e.length;
  return t ? Va(e, 1) : [];
}
function Cd(e) {
  return Da(La(e, void 0, Ad), e + "");
}
var Pd = ka(Object.getPrototypeOf, Object);
const Sr = Pd;
var Rd = "[object Object]", _d = Function.prototype, Id = Object.prototype, za = _d.toString, Fd = Id.hasOwnProperty, $d = za.call(Object);
function qa(e) {
  if (!Re(e) || Xe(e) != Rd)
    return !1;
  var t = Sr(e);
  if (t === null)
    return !0;
  var n = Fd.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && za.call(n) == $d;
}
function Dd(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + t];
  return a;
}
function Ld() {
  this.__data__ = new Ne(), this.size = 0;
}
function jd(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Nd(e) {
  return this.__data__.get(e);
}
function Md(e) {
  return this.__data__.has(e);
}
var Bd = 200;
function Ud(e, t) {
  var n = this.__data__;
  if (n instanceof Ne) {
    var r = n.__data__;
    if (!Et || r.length < Bd - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Me(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Pe(e) {
  var t = this.__data__ = new Ne(e);
  this.size = t.size;
}
Pe.prototype.clear = Ld;
Pe.prototype.delete = jd;
Pe.prototype.get = Nd;
Pe.prototype.has = Md;
Pe.prototype.set = Ud;
function kd(e, t) {
  return e && st(t, gr(t), e);
}
function Hd(e, t) {
  return e && st(t, It(t), e);
}
var Wa = typeof exports == "object" && exports && !exports.nodeType && exports, vo = Wa && typeof module == "object" && module && !module.nodeType && module, Vd = vo && vo.exports === Wa, mo = Vd ? xe.Buffer : void 0, go = mo ? mo.allocUnsafe : void 0;
function Ka(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = go ? go(n) : new e.constructor(n);
  return e.copy(r), r;
}
function zd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
function Ga() {
  return [];
}
var qd = Object.prototype, Wd = qd.propertyIsEnumerable, bo = Object.getOwnPropertySymbols, Kd = bo ? function(e) {
  return e == null ? [] : (e = Object(e), zd(bo(e), function(t) {
    return Wd.call(e, t);
  }));
} : Ga;
const Er = Kd;
function Gd(e, t) {
  return st(e, Er(e), t);
}
var Jd = Object.getOwnPropertySymbols, Xd = Jd ? function(e) {
  for (var t = []; e; )
    wr(t, Er(e)), e = Sr(e);
  return t;
} : Ga;
const Ja = Xd;
function Yd(e, t) {
  return st(e, Ja(e), t);
}
function Xa(e, t, n) {
  var r = t(e);
  return Ee(e) ? r : wr(r, n(e));
}
function jn(e) {
  return Xa(e, gr, Er);
}
function Ya(e) {
  return Xa(e, It, Ja);
}
var Qd = Qe(xe, "DataView");
const Nn = Qd;
var Zd = Qe(xe, "Promise");
const Mn = Zd;
var ef = Qe(xe, "Set");
const Bn = ef;
var yo = "[object Map]", tf = "[object Object]", wo = "[object Promise]", So = "[object Set]", Eo = "[object WeakMap]", Oo = "[object DataView]", nf = Ye(Nn), rf = Ye(Et), of = Ye(Mn), af = Ye(Bn), lf = Ye(Ln), qe = Xe;
(Nn && qe(new Nn(new ArrayBuffer(1))) != Oo || Et && qe(new Et()) != yo || Mn && qe(Mn.resolve()) != wo || Bn && qe(new Bn()) != So || Ln && qe(new Ln()) != Eo) && (qe = function(e) {
  var t = Xe(e), n = t == tf ? e.constructor : void 0, r = n ? Ye(n) : "";
  if (r)
    switch (r) {
      case nf:
        return Oo;
      case rf:
        return yo;
      case of:
        return wo;
      case af:
        return So;
      case lf:
        return Eo;
    }
  return t;
});
const Ot = qe;
var sf = Object.prototype, uf = sf.hasOwnProperty;
function cf(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && uf.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var df = xe.Uint8Array;
const Qt = df;
function Or(e) {
  var t = new e.constructor(e.byteLength);
  return new Qt(t).set(new Qt(e)), t;
}
function ff(e, t) {
  var n = t ? Or(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var pf = /\w*$/;
function hf(e) {
  var t = new e.constructor(e.source, pf.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var xo = we ? we.prototype : void 0, To = xo ? xo.valueOf : void 0;
function vf(e) {
  return To ? Object(To.call(e)) : {};
}
function Qa(e, t) {
  var n = t ? Or(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var mf = "[object Boolean]", gf = "[object Date]", bf = "[object Map]", yf = "[object Number]", wf = "[object RegExp]", Sf = "[object Set]", Ef = "[object String]", Of = "[object Symbol]", xf = "[object ArrayBuffer]", Tf = "[object DataView]", Af = "[object Float32Array]", Cf = "[object Float64Array]", Pf = "[object Int8Array]", Rf = "[object Int16Array]", _f = "[object Int32Array]", If = "[object Uint8Array]", Ff = "[object Uint8ClampedArray]", $f = "[object Uint16Array]", Df = "[object Uint32Array]";
function Lf(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case xf:
      return Or(e);
    case mf:
    case gf:
      return new r(+e);
    case Tf:
      return ff(e, n);
    case Af:
    case Cf:
    case Pf:
    case Rf:
    case _f:
    case If:
    case Ff:
    case $f:
    case Df:
      return Qa(e, n);
    case bf:
      return new r();
    case yf:
    case Ef:
      return new r(e);
    case wf:
      return hf(e);
    case Sf:
      return new r();
    case Of:
      return vf(e);
  }
}
function Za(e) {
  return typeof e.constructor == "function" && !hr(e) ? Au(Sr(e)) : {};
}
var jf = "[object Map]";
function Nf(e) {
  return Re(e) && Ot(e) == jf;
}
var Ao = at && at.isMap, Mf = Ao ? vr(Ao) : Nf;
const Bf = Mf;
var Uf = "[object Set]";
function kf(e) {
  return Re(e) && Ot(e) == Uf;
}
var Co = at && at.isSet, Hf = Co ? vr(Co) : kf;
const Vf = Hf;
var zf = 1, qf = 2, Wf = 4, ei = "[object Arguments]", Kf = "[object Array]", Gf = "[object Boolean]", Jf = "[object Date]", Xf = "[object Error]", ti = "[object Function]", Yf = "[object GeneratorFunction]", Qf = "[object Map]", Zf = "[object Number]", ni = "[object Object]", ep = "[object RegExp]", tp = "[object Set]", np = "[object String]", rp = "[object Symbol]", op = "[object WeakMap]", ap = "[object ArrayBuffer]", ip = "[object DataView]", lp = "[object Float32Array]", sp = "[object Float64Array]", up = "[object Int8Array]", cp = "[object Int16Array]", dp = "[object Int32Array]", fp = "[object Uint8Array]", pp = "[object Uint8ClampedArray]", hp = "[object Uint16Array]", vp = "[object Uint32Array]", q = {};
q[ei] = q[Kf] = q[ap] = q[ip] = q[Gf] = q[Jf] = q[lp] = q[sp] = q[up] = q[cp] = q[dp] = q[Qf] = q[Zf] = q[ni] = q[ep] = q[tp] = q[np] = q[rp] = q[fp] = q[pp] = q[hp] = q[vp] = !0;
q[Xf] = q[ti] = q[op] = !1;
function bt(e, t, n, r, o, a) {
  var i, l = t & zf, s = t & qf, c = t & Wf;
  if (n && (i = o ? n(e, r, o, a) : n(e)), i !== void 0)
    return i;
  if (!ye(e))
    return e;
  var u = Ee(e);
  if (u) {
    if (i = cf(e), !l)
      return $a(e, i);
  } else {
    var d = Ot(e), f = d == ti || d == Yf;
    if (wt(e))
      return Ka(e, l);
    if (d == ni || d == ei || f && !o) {
      if (i = s || f ? {} : Za(e), !l)
        return s ? Yd(e, Hd(i, e)) : Gd(e, kd(i, e));
    } else {
      if (!q[d])
        return o ? e : {};
      i = Lf(e, d, l);
    }
  }
  a || (a = new Pe());
  var h = a.get(e);
  if (h)
    return h;
  a.set(e, i), Vf(e) ? e.forEach(function(m) {
    i.add(bt(m, t, n, m, e, a));
  }) : Bf(e) && e.forEach(function(m, S) {
    i.set(S, bt(m, t, n, S, e, a));
  });
  var p = c ? s ? Ya : jn : s ? It : gr, v = u ? void 0 : p(e);
  return Nu(v || e, function(m, S) {
    v && (S = m, m = e[S]), pr(i, S, bt(m, t, n, S, e, a));
  }), i;
}
var mp = 1, gp = 4;
function tt(e) {
  return bt(e, mp | gp);
}
var bp = "__lodash_hash_undefined__";
function yp(e) {
  return this.__data__.set(e, bp), this;
}
function wp(e) {
  return this.__data__.has(e);
}
function Zt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Me(); ++t < n; )
    this.add(e[t]);
}
Zt.prototype.add = Zt.prototype.push = yp;
Zt.prototype.has = wp;
function Sp(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Ep(e, t) {
  return e.has(t);
}
var Op = 1, xp = 2;
function ri(e, t, n, r, o, a) {
  var i = n & Op, l = e.length, s = t.length;
  if (l != s && !(i && s > l))
    return !1;
  var c = a.get(e), u = a.get(t);
  if (c && u)
    return c == t && u == e;
  var d = -1, f = !0, h = n & xp ? new Zt() : void 0;
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
      if (!Sp(t, function(S, E) {
        if (!Ep(h, E) && (p === S || o(p, S, n, r, a)))
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
function Tp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function Ap(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Cp = 1, Pp = 2, Rp = "[object Boolean]", _p = "[object Date]", Ip = "[object Error]", Fp = "[object Map]", $p = "[object Number]", Dp = "[object RegExp]", Lp = "[object Set]", jp = "[object String]", Np = "[object Symbol]", Mp = "[object ArrayBuffer]", Bp = "[object DataView]", Po = we ? we.prototype : void 0, En = Po ? Po.valueOf : void 0;
function Up(e, t, n, r, o, a, i) {
  switch (n) {
    case Bp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Mp:
      return !(e.byteLength != t.byteLength || !a(new Qt(e), new Qt(t)));
    case Rp:
    case _p:
    case $p:
      return _t(+e, +t);
    case Ip:
      return e.name == t.name && e.message == t.message;
    case Dp:
    case jp:
      return e == t + "";
    case Fp:
      var l = Tp;
    case Lp:
      var s = r & Cp;
      if (l || (l = Ap), e.size != t.size && !s)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      r |= Pp, i.set(e, t);
      var u = ri(l(e), l(t), r, o, a, i);
      return i.delete(e), u;
    case Np:
      if (En)
        return En.call(e) == En.call(t);
  }
  return !1;
}
var kp = 1, Hp = Object.prototype, Vp = Hp.hasOwnProperty;
function zp(e, t, n, r, o, a) {
  var i = n & kp, l = jn(e), s = l.length, c = jn(t), u = c.length;
  if (s != u && !i)
    return !1;
  for (var d = s; d--; ) {
    var f = l[d];
    if (!(i ? f in t : Vp.call(t, f)))
      return !1;
  }
  var h = a.get(e), p = a.get(t);
  if (h && p)
    return h == t && p == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var m = i; ++d < s; ) {
    f = l[d];
    var S = e[f], E = t[f];
    if (r)
      var R = i ? r(E, S, f, t, e, a) : r(S, E, f, e, t, a);
    if (!(R === void 0 ? S === E || o(S, E, n, r, a) : R)) {
      v = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (v && !m) {
    var $ = e.constructor, x = t.constructor;
    $ != x && "constructor" in e && "constructor" in t && !(typeof $ == "function" && $ instanceof $ && typeof x == "function" && x instanceof x) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var qp = 1, Ro = "[object Arguments]", _o = "[object Array]", Mt = "[object Object]", Wp = Object.prototype, Io = Wp.hasOwnProperty;
function Kp(e, t, n, r, o, a) {
  var i = Ee(e), l = Ee(t), s = i ? _o : Ot(e), c = l ? _o : Ot(t);
  s = s == Ro ? Mt : s, c = c == Ro ? Mt : c;
  var u = s == Mt, d = c == Mt, f = s == c;
  if (f && wt(e)) {
    if (!wt(t))
      return !1;
    i = !0, u = !1;
  }
  if (f && !u)
    return a || (a = new Pe()), i || mr(e) ? ri(e, t, n, r, o, a) : Up(e, t, s, n, r, o, a);
  if (!(n & qp)) {
    var h = u && Io.call(e, "__wrapped__"), p = d && Io.call(t, "__wrapped__");
    if (h || p) {
      var v = h ? e.value() : e, m = p ? t.value() : t;
      return a || (a = new Pe()), o(v, m, n, r, a);
    }
  }
  return f ? (a || (a = new Pe()), zp(e, t, n, r, o, a)) : !1;
}
function oi(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Re(e) && !Re(t) ? e !== e && t !== t : Kp(e, t, n, r, oi, o);
}
function Gp(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), i = r(t), l = i.length; l--; ) {
      var s = i[e ? l : ++o];
      if (n(a[s], s, a) === !1)
        break;
    }
    return t;
  };
}
var Jp = Gp();
const Xp = Jp;
var Yp = function() {
  return xe.Date.now();
};
const On = Yp;
var Qp = "Expected a function", Zp = Math.max, eh = Math.min;
function th(e, t, n) {
  var r, o, a, i, l, s, c = 0, u = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Qp);
  t = ao(t) || 0, ye(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? Zp(ao(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
  function h(C) {
    var F = r, T = o;
    return r = o = void 0, c = C, i = e.apply(T, F), i;
  }
  function p(C) {
    return c = C, l = setTimeout(S, t), u ? h(C) : i;
  }
  function v(C) {
    var F = C - s, T = C - c, L = t - F;
    return d ? eh(L, a - T) : L;
  }
  function m(C) {
    var F = C - s, T = C - c;
    return s === void 0 || F >= t || F < 0 || d && T >= a;
  }
  function S() {
    var C = On();
    if (m(C))
      return E(C);
    l = setTimeout(S, v(C));
  }
  function E(C) {
    return l = void 0, f && r ? h(C) : (r = o = void 0, i);
  }
  function R() {
    l !== void 0 && clearTimeout(l), c = 0, r = s = o = l = void 0;
  }
  function $() {
    return l === void 0 ? i : E(On());
  }
  function x() {
    var C = On(), F = m(C);
    if (r = arguments, o = this, s = C, F) {
      if (l === void 0)
        return p(s);
      if (d)
        return clearTimeout(l), l = setTimeout(S, t), h(s);
    }
    return l === void 0 && (l = setTimeout(S, t)), i;
  }
  return x.cancel = R, x.flush = $, x;
}
function Un(e, t, n) {
  (n !== void 0 && !_t(e[t], n) || n === void 0 && !(t in e)) && fr(e, t, n);
}
function nh(e) {
  return Re(e) && dn(e);
}
function kn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function rh(e) {
  return st(e, It(e));
}
function oh(e, t, n, r, o, a, i) {
  var l = kn(e, n), s = kn(t, n), c = i.get(s);
  if (c) {
    Un(e, n, c);
    return;
  }
  var u = a ? a(l, s, n + "", e, t, i) : void 0, d = u === void 0;
  if (d) {
    var f = Ee(s), h = !f && wt(s), p = !f && !h && mr(s);
    u = s, f || h || p ? Ee(l) ? u = l : nh(l) ? u = $a(l) : h ? (d = !1, u = Ka(s, !0)) : p ? (d = !1, u = Qa(s, !0)) : u = [] : qa(s) || Xt(s) ? (u = l, Xt(l) ? u = rh(l) : (!ye(l) || cr(l)) && (u = Za(s))) : d = !1;
  }
  d && (i.set(s, u), o(u, s, r, a, i), i.delete(s)), Un(e, n, u);
}
function ai(e, t, n, r, o) {
  e !== t && Xp(t, function(a, i) {
    if (o || (o = new Pe()), ye(a))
      oh(e, t, i, n, ai, r, o);
    else {
      var l = r ? r(kn(e, i), a, i + "", e, t, o) : void 0;
      l === void 0 && (l = a), Un(e, i, l);
    }
  }, It);
}
function ah(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function ih(e, t) {
  return t.length < 2 ? e : Ha(e, Dd(t, 0, -1));
}
function lh(e, t) {
  return oi(e, t);
}
var sh = qu(function(e, t, n) {
  ai(e, t, n);
});
const Hn = sh;
function uh(e, t) {
  return t = hn(t, e), e = ih(e, t), e == null || delete e[yr(ah(t))];
}
function ch(e) {
  return qa(e) ? void 0 : e;
}
var dh = 1, fh = 2, ph = 4, hh = Cd(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = _a(t, function(a) {
    return a = hn(a, e), r || (r = a.length > 1), a;
  }), st(e, Ya(e), n), r && (n = bt(n, dh | fh | ph, ch));
  for (var o = t.length; o--; )
    uh(n, t[o]);
  return n;
});
const Fo = hh;
function vh(e, t, n, r) {
  if (!ye(e))
    return e;
  t = hn(t, e);
  for (var o = -1, a = t.length, i = a - 1, l = e; l != null && ++o < a; ) {
    var s = yr(t[o]), c = n;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (o != i) {
      var u = l[s];
      c = r ? r(u, s, l) : void 0, c === void 0 && (c = ye(u) ? u : dr(t[o + 1]) ? [] : {});
    }
    pr(l, s, c), l = l[s];
  }
  return e;
}
function ii(e, t, n) {
  return e == null ? e : vh(e, t, n);
}
let xt = Ta.create(), li = (e, t) => {
  var n, r;
  return `${e.method}:${(r = (n = e.baseURL) != null ? n : t.defaults.baseURL) != null ? r : ""}${e.url}`;
}, si = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const en = {}, Fe = {
  get: (e, t = {}, n = {}) => ft(dt("get", e, t, n)),
  post: (e, t = {}, n = {}) => ft(dt("post", e, t, n)),
  patch: (e, t = {}, n = {}) => ft(dt("patch", e, t, n)),
  put: (e, t = {}, n = {}) => ft(dt("put", e, t, n)),
  delete: (e, t = {}, n = {}) => ft(dt("delete", e, t, n)),
  use(e) {
    return xt = e, Fe;
  },
  axios() {
    return xt;
  },
  fingerprintRequestsUsing(e) {
    return li = e === null ? () => null : e, Fe;
  },
  determineSuccessUsing(e) {
    return si = e, Fe;
  }
}, dt = (e, t, n, r) => ({
  url: t,
  method: e,
  ...r,
  ...["get", "delete"].includes(e) ? {
    params: Hn({}, n, r == null ? void 0 : r.params)
  } : {
    data: Hn({}, n, r == null ? void 0 : r.data)
  }
}), ft = (e = {}) => {
  var n, r, o;
  const t = [
    mh,
    bh,
    yh
  ].reduce((a, i) => i(a), e);
  return ((n = t.onBefore) != null ? n : () => !0)() === !1 ? Promise.resolve(null) : (((r = t.onStart) != null ? r : () => null)(), xt.request(t).then(async (a) => {
    var c, u, d, f;
    t.precognitive && $o(a);
    const i = a.status;
    let l = a;
    return t.precognitive && t.onPrecognitionSuccess && si(l) && (l = await Promise.resolve((c = t.onPrecognitionSuccess(l)) != null ? c : l)), t.onSuccess && gh(i) && (l = await Promise.resolve((u = t.onSuccess(l)) != null ? u : l)), (f = ((d = Do(t, i)) != null ? d : (h) => h)(l)) != null ? f : l;
  }, (a) => {
    var l;
    return wh(a) ? Promise.reject(a) : (t.precognitive && $o(a.response), ((l = Do(t, a.response.status)) != null ? l : (s, c) => Promise.reject(c))(a.response, a));
  }).finally((o = t.onFinish) != null ? o : () => null));
}, mh = (e) => {
  var n, r, o;
  const t = (n = e.only) != null ? n : e.validate;
  return {
    ...e,
    timeout: (o = (r = e.timeout) != null ? r : xt.defaults.timeout) != null ? o : 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? li(e, xt) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": Sh(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, gh = (e) => e >= 200 && e < 300, bh = (e) => {
  var t;
  return typeof e.fingerprint != "string" || ((t = en[e.fingerprint]) == null || t.abort(), delete en[e.fingerprint]), e;
}, yh = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (en[e.fingerprint] = new AbortController(), {
  ...e,
  signal: en[e.fingerprint].signal
}), $o = (e) => {
  var t;
  if (((t = e.headers) == null ? void 0 : t.precognition) !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, wh = (e) => {
  var t;
  return !Ca(e) || typeof ((t = e.response) == null ? void 0 : t.status) != "number" || Aa(e);
}, Do = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], Sh = (e) => {
  var t, n, r, o, a, i;
  return (i = (a = (r = (t = e.headers) == null ? void 0 : t["Content-Type"]) != null ? r : (n = e.headers) == null ? void 0 : n["Content-type"]) != null ? a : (o = e.headers) == null ? void 0 : o["content-type"]) != null ? i : ui(e.data) ? "multipart/form-data" : "application/json";
}, ui = (e) => xr(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => ui(t)), xr = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, Vn = (e) => typeof e == "string" ? e : e(), zn = (e) => typeof e == "string" ? e.toLowerCase() : e(), Eh = (e, t = {}) => {
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
    const y = [...new Set(b)];
    return i.length !== y.length || !y.every((w) => i.includes(w)) ? (i = y, n.validatedChanged) : [];
  }, s = () => i.filter((b) => typeof d[b] > "u");
  let c = [];
  const u = (b) => {
    const y = [...new Set(b)];
    return c.length !== y.length || !y.every((w) => c.includes(w)) ? (c = y, n.touchedChanged) : [];
  };
  let d = {};
  const f = (b) => {
    const y = Oh(b);
    return lh(d, y) ? [] : (d = y, n.errorsChanged);
  }, h = (b) => {
    const y = { ...d };
    return delete y[Wt(b)], f(y);
  }, p = () => Object.keys(d).length > 0;
  let v = 1500;
  const m = (b) => {
    v = b, C.cancel(), C = x();
  };
  let S = t, E = null, R = [], $ = null;
  const x = () => th((b) => {
    e({
      get: (y, w = {}, _ = {}) => Fe.get(y, L(w), F(_, b, w)),
      post: (y, w = {}, _ = {}) => Fe.post(y, L(w), F(_, b, w)),
      patch: (y, w = {}, _ = {}) => Fe.patch(y, L(w), F(_, b, w)),
      put: (y, w = {}, _ = {}) => Fe.put(y, L(w), F(_, b, w)),
      delete: (y, w = {}, _ = {}) => Fe.delete(y, L(w), F(_, b, w))
    }).catch((y) => {
      var w;
      return Aa(y) || Ca(y) && ((w = y.response) == null ? void 0 : w.status) === 422 ? null : Promise.reject(y);
    });
  }, v, { leading: !0, trailing: !0 });
  let C = x();
  const F = (b, y, w = {}) => {
    var B, J, Z;
    const _ = {
      ...b,
      ...y
    }, D = Array.from((J = (B = _.only) != null ? B : _.validate) != null ? J : c);
    return {
      ...y,
      ...Ns(b, y),
      only: D,
      timeout: (Z = _.timeout) != null ? Z : 5e3,
      onValidationError: (K, ce) => ([
        ...l([...i, ...D]),
        ...f(Hn(Fo({ ...d }, D), K.data.errors))
      ].forEach((U) => U()), _.onValidationError ? _.onValidationError(K, ce) : Promise.reject(ce)),
      onSuccess: (K) => (l([...i, ...D]).forEach((ce) => ce()), _.onSuccess ? _.onSuccess(K) : K),
      onPrecognitionSuccess: (K) => ([
        ...l([...i, ...D]),
        ...f(Fo({ ...d }, D))
      ].forEach((ce) => ce()), _.onPrecognitionSuccess ? _.onPrecognitionSuccess(K) : K),
      onBefore: () => _.onBeforeValidation && _.onBeforeValidation({ data: w, touched: c }, { data: S, touched: R }) === !1 || (_.onBefore || (() => !0))() === !1 ? !1 : ($ = c, E = w, !0),
      onStart: () => {
        var K;
        a(!0).forEach((ce) => ce()), ((K = _.onStart) != null ? K : () => null)();
      },
      onFinish: () => {
        var K;
        a(!1).forEach((ce) => ce()), R = $, S = E, $ = E = null, ((K = _.onFinish) != null ? K : () => null)();
      }
    };
  }, T = (b, y, w) => {
    var _, D;
    if (typeof b > "u") {
      const B = Array.from((D = (_ = w == null ? void 0 : w.only) != null ? _ : w == null ? void 0 : w.validate) != null ? D : []);
      u([...c, ...B]).forEach((J) => J()), C(w != null ? w : {});
      return;
    }
    if (xr(y) && !r) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    b = Wt(b), Yt(S, b) !== y && (u([b, ...c]).forEach((B) => B()), C(w != null ? w : {}));
  }, L = (b) => r === !1 ? qn(b) : b, O = {
    touched: () => c,
    validate(b, y, w) {
      return typeof b == "object" && !("target" in b) && (w = b, b = y = void 0), T(b, y, w), O;
    },
    touch(b) {
      const y = Array.isArray(b) ? b : [Wt(b)];
      return u([...c, ...y]).forEach((w) => w()), O;
    },
    validating: () => o,
    valid: s,
    errors: () => d,
    hasErrors: p,
    setErrors(b) {
      return f(b).forEach((y) => y()), O;
    },
    forgetError(b) {
      return h(b).forEach((y) => y()), O;
    },
    reset(...b) {
      if (b.length === 0)
        u([]).forEach((y) => y());
      else {
        const y = [...c];
        b.forEach((w) => {
          y.includes(w) && y.splice(y.indexOf(w), 1), ii(S, w, Yt(t, w));
        }), u(y).forEach((w) => w());
      }
      return O;
    },
    setTimeout(b) {
      return m(b), O;
    },
    on(b, y) {
      return n[b].push(y), O;
    },
    validateFiles() {
      return r = !0, O;
    }
  };
  return O;
}, ci = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), Oh = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: typeof e[n] == "string" ? [e[n]] : e[n]
}), {}), Wt = (e) => typeof e != "string" ? e.target.name : e, qn = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((n) => {
    const r = t[n];
    if (r !== null) {
      if (xr(r)) {
        delete t[n];
        return;
      }
      if (Array.isArray(r)) {
        t[n] = Object.values(qn({ ...r }));
        return;
      }
      if (typeof r == "object") {
        t[n] = qn(t[n]);
        return;
      }
    }
  }), t;
}, xh = (e, t, n, r = {}) => {
  const o = tt(typeof n == "function" ? n() : n), a = Object.keys(o), i = I([]), l = I([]), s = Eh((d) => d[zn(e)](Vn(t), u.data(), r), o).on("validatingChanged", () => {
    u.validating = s.validating();
  }).on("validatedChanged", () => {
    i.value = s.valid();
  }).on("touchedChanged", () => {
    l.value = s.touched();
  }).on("errorsChanged", () => {
    u.hasErrors = s.hasErrors(), u.errors = ci(s.errors()), i.value = s.valid();
  }), c = (d) => ({
    ...d,
    precognitive: !1,
    onStart: () => {
      var f;
      u.processing = !0, ((f = d.onStart) != null ? f : () => null)();
    },
    onFinish: () => {
      var f;
      u.processing = !1, ((f = d.onFinish) != null ? f : () => null)();
    },
    onValidationError: (f, h) => (s.setErrors(f.data.errors), d.onValidationError ? d.onValidationError(f) : Promise.reject(h))
  });
  let u = {
    ...tt(o),
    data() {
      const d = tt(Ie(u));
      return a.reduce((f, h) => ({
        ...f,
        [h]: d[h]
      }), {});
    },
    setData(d) {
      return Object.keys(d).forEach((f) => {
        u[f] = d[f];
      }), u;
    },
    touched(d) {
      return typeof d == "string" ? l.value.includes(d) : l.value.length > 0;
    },
    touch(d) {
      return s.touch(d), u;
    },
    validate(d, f) {
      return typeof d == "object" && !("target" in d) && (f = d, d = void 0), typeof d > "u" ? s.validate(f) : (d = Wt(d), s.validate(d, Yt(u.data(), d), f)), u;
    },
    validating: !1,
    valid(d) {
      return i.value.includes(d);
    },
    invalid(d) {
      return typeof u.errors[d] < "u";
    },
    errors: {},
    hasErrors: !1,
    setErrors(d) {
      return s.setErrors(d), u;
    },
    forgetError(d) {
      return s.forgetError(d), u;
    },
    reset(...d) {
      const f = tt(typeof n == "function" ? n() : o);
      return d.length === 0 ? a.forEach((h) => u[h] = f[h]) : d.forEach((h) => ii(u, h, Yt(f, h))), s.reset(...d), u;
    },
    setValidationTimeout(d) {
      return s.setTimeout(d), u;
    },
    processing: !1,
    async submit(d = {}) {
      return Fe[zn(e)](Vn(t), u.data(), c(d));
    },
    validateFiles() {
      return s.validateFiles(), u;
    },
    validator() {
      return s;
    }
  };
  return u = nr(u), u;
}, Th = (e, t, n, r = {}) => {
  const o = Zo(n), a = xh(e, t, n, r);
  a.validator().on("errorsChanged", () => {
    s(), c(
      ci(a.validator().errors())
    );
  });
  const i = o.submit.bind(o), l = o.reset.bind(o), s = o.clearErrors.bind(o), c = o.setError.bind(o), u = o.transform.bind(o);
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
      return u(h), d = h, f;
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
      typeof h != "string" && (v = h, p = Vn(t), h = zn(e)), i(h, p, {
        ...v,
        onError: (m) => {
          if (a.validator().setErrors(m), v != null && v.onError)
            return v.onError(m);
        }
      });
    },
    validator: a.validator
  });
  return ne(() => f.validating = a.validating), f;
};
function Ah(e, t) {
  return k(), Q("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    re("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Ch = { name: "Spinner" }, Lo = /* @__PURE__ */ M({
  ...Ch,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (t, n) => (k(), Q("svg", {
      class: nn(["h-5 w-5 animate-spin", t.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, n[0] || (n[0] = [
      re("circle", {
        class: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4"
      }, null, -1),
      re("path", {
        class: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      }, null, -1)
    ]), 2));
  }
}), Ph = ["disabled", "type"], Rh = ["href"], _h = { name: "Button" }, di = /* @__PURE__ */ M({
  ..._h,
  props: {
    as: { default: "a" },
    external: { type: Boolean },
    href: { default: "" },
    loading: { type: Boolean },
    spinnerClass: { default: "text-white" },
    type: {}
  },
  setup(e) {
    const t = e, n = A(() => t.type !== void 0 && t.as !== "button" ? (console.warn(
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
    return (o, a) => n.value === "button" ? (k(), Q("button", Le({
      key: 0,
      class: r,
      disabled: o.loading,
      type: o.type
    }, o.$attrs), [
      pe(o.$slots, "default"),
      _n(rt(Lo, {
        class: "ml-3",
        "text-class": o.spinnerClass
      }, null, 8, ["text-class"]), [
        [Nr, o.loading]
      ])
    ], 16, Ph)) : o.external ? (k(), Q("a", Le({
      key: 2,
      href: o.href,
      class: r
    }, o.$attrs), [
      pe(o.$slots, "default")
    ], 16, Rh)) : (k(), be(oe(Xi), Le({
      key: 1,
      as: o.as,
      href: o.href,
      disabled: o.loading,
      class: r
    }, o.$attrs), {
      default: Ce(() => [
        pe(o.$slots, "default"),
        _n(rt(Lo, {
          class: "ml-3",
          "text-class": o.spinnerClass
        }, null, 8, ["text-class"]), [
          [Nr, o.loading]
        ])
      ]),
      _: 3
    }, 16, ["as", "href", "disabled"]));
  }
}), Ih = { class: "border-l-4 border-yellow-400 bg-yellow-50 p-4" }, Fh = { class: "flex" }, $h = {
  key: 0,
  class: "shrink-0"
}, Dh = { class: "ml-3" }, Lh = { class: "text-sm text-yellow-700" }, jh = { class: "mt-4" }, Nh = { class: "-mx-2 -my-1.5 flex items-center space-x-3" }, Mh = { name: "WarningAlert" }, Bh = /* @__PURE__ */ M({
  ...Mh,
  props: {
    withoutIcon: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => (k(), Q("div", Ih, [
      re("div", Fh, [
        t.withoutIcon ? De("", !0) : (k(), Q("div", $h, [
          rt(oe(Ah), {
            class: "h-5 w-5 text-yellow-400",
            "aria-hidden": "true"
          })
        ])),
        re("div", Dh, [
          re("p", Lh, [
            pe(t.$slots, "default")
          ]),
          re("div", jh, [
            re("div", Nh, [
              pe(t.$slots, "actions")
            ])
          ])
        ])
      ])
    ]));
  }
}), Uh = { name: "WarningAlertButton" }, kh = /* @__PURE__ */ M({
  ...Uh,
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
    return (n, r) => (k(), be(di, Le({
      as: n.as,
      external: n.external,
      href: n.href,
      loading: n.loading,
      type: n.type,
      class: t
    }, n.$attrs), {
      default: Ce(() => [
        pe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "external", "href", "loading", "type"]));
  }
}), Hh = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Vh = { name: "PrimaryButton" }, zh = /* @__PURE__ */ M({
  ...Vh,
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
    return (n, r) => (k(), be(di, Le({
      as: n.as,
      external: n.external,
      href: n.href,
      loading: n.loading,
      type: n.type,
      class: t
    }, n.$attrs), {
      default: Ce(() => [
        pe(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "external", "href", "loading", "type"]));
  }
});
function nt(e, t, n) {
  var r;
  let o = (r = n.initialDeps) != null ? r : [], a;
  function i() {
    var l, s, c, u;
    let d;
    n.key && ((l = n.debug) == null ? void 0 : l.call(n)) && (d = Date.now());
    const f = e();
    if (!(f.length !== o.length || f.some((p, v) => o[v] !== p)))
      return a;
    o = f;
    let h;
    if (n.key && ((s = n.debug) == null ? void 0 : s.call(n)) && (h = Date.now()), a = t(...f), n.key && ((c = n.debug) == null ? void 0 : c.call(n))) {
      const p = Math.round((Date.now() - d) * 100) / 100, v = Math.round((Date.now() - h) * 100) / 100, m = v / 16, S = (E, R) => {
        for (E = String(E); E.length < R; )
          E = " " + E;
        return E;
      };
      console.info(
        `%c\u23F1 ${S(v, 5)} /${S(p, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * m, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return (u = n == null ? void 0 : n.onChange) == null || u.call(n, a), a;
  }
  return i.updateDeps = (l) => {
    o = l;
  }, i;
}
function xn(e, t) {
  if (e === void 0)
    throw new Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
  return e;
}
const qh = (e, t) => Math.abs(e - t) <= 1, Wh = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
}, jo = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Kh = (e) => e, Gh = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, Jh = (e, t) => {
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
  if (o(jo(n)), !r.ResizeObserver)
    return () => {
    };
  const a = new r.ResizeObserver((i) => {
    const l = () => {
      const s = i[0];
      if (s != null && s.borderBoxSize) {
        const c = s.borderBoxSize[0];
        if (c) {
          o({ width: c.inlineSize, height: c.blockSize });
          return;
        }
      }
      o(jo(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, No = {
  passive: !0
}, Mo = typeof window > "u" ? !0 : "onscrollend" in window, Xh = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const a = e.options.useScrollendEvent && Mo ? () => {
  } : Wh(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), i = (u) => () => {
    const { horizontal: d, isRtl: f } = e.options;
    o = d ? n.scrollLeft * (f && -1 || 1) : n.scrollTop, a(), t(o, u);
  }, l = i(!0), s = i(!1);
  s(), n.addEventListener("scroll", l, No);
  const c = e.options.useScrollendEvent && Mo;
  return c && n.addEventListener("scrollend", s, No), () => {
    n.removeEventListener("scroll", l), c && n.removeEventListener("scrollend", s);
  };
}, Yh = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Qh = (e, {
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
class Zh {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((a) => {
          const i = () => {
            this._measureElement(a.target, a);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
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
        getItemKey: Kh,
        rangeExtractor: Gh,
        onChange: () => {
        },
        measureElement: Yh,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...n
      };
    }, this.notify = (n) => {
      var r, o;
      (o = (r = this.options).onChange) == null || o.call(r, this, n);
    }, this.maybeNotify = nt(
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
    }, this.getMeasurementOptions = nt(
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
    ), this.getMeasurements = nt(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: a, enabled: i }, l) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((u) => {
          this.itemSizeCache.set(u.key, u.size);
        }));
        const s = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, s);
        for (let u = s; u < n; u++) {
          const d = a(u), f = this.options.lanes === 1 ? c[u - 1] : this.getFurthestMeasurement(c, u), h = f ? f.end + this.options.gap : r + o, p = l.get(d), v = typeof p == "number" ? p : this.options.estimateSize(u), m = h + v, S = f ? f.lane : u % this.options.lanes;
          c[u] = {
            index: u,
            start: h,
            size: v,
            end: m,
            key: d,
            lane: S
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = nt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, a) => this.range = n.length > 0 && r > 0 ? ev({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: a
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = nt(
      () => {
        let n = null, r = null;
        const o = this.calculateRange();
        return o && (n = o.startIndex, r = o.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      },
      (n, r, o, a, i) => a === null || i === null ? [] : n({
        startIndex: a,
        endIndex: i,
        overscan: r,
        count: o
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
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
    }, this.getVirtualItems = nt(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
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
        return xn(
          r[fi(
            0,
            r.length - 1,
            (o) => xn(r[o]).start,
            n
          )]
        );
    }, this.getOffsetForAlignment = (n, r, o = 0) => {
      const a = this.getSize(), i = this.getScrollOffset();
      r === "auto" && (r = n >= i + a ? "end" : "start"), r === "center" ? n += (o - a) / 2 : r === "end" && (n -= a);
      const l = this.getTotalSize() - a;
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
      return [
        this.getOffsetForAlignment(l, r, o.size),
        r
      ];
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
          const [s] = xn(
            this.getOffsetForIndex(n, l)
          ), c = this.getScrollOffset();
          qh(s, c) || this.scrollToIndex(n, { align: l, behavior: o });
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
      if (o.length === 0)
        a = this.options.paddingStart;
      else if (this.options.lanes === 1)
        a = (n = (r = o[o.length - 1]) == null ? void 0 : r.end) != null ? n : 0;
      else {
        const i = Array(this.options.lanes).fill(null);
        let l = o.length - 1;
        for (; l >= 0 && i.some((s) => s === null); ) {
          const s = o[l];
          i[s.lane] === null && (i[s.lane] = s.end), l--;
        }
        a = Math.max(...i.filter((s) => s !== null));
      }
      return Math.max(
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
const fi = (e, t, n, r) => {
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
function ev({
  measurements: e,
  outerSize: t,
  scrollOffset: n,
  lanes: r
}) {
  const o = e.length - 1, a = (s) => e[s].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: o
    };
  let i = fi(
    0,
    o,
    a,
    n
  ), l = i;
  if (r === 1)
    for (; l < o && e[l].end < n + t; )
      l++;
  else if (r > 1) {
    const s = Array(r).fill(0);
    for (; l < o && s.some((u) => u < n + t); ) {
      const u = e[l];
      s[u.lane] = u.end, l++;
    }
    const c = Array(r).fill(n + t);
    for (; i >= 0 && c.some((u) => u >= n); ) {
      const u = e[i];
      c[u.lane] = u.start, i--;
    }
    i = Math.max(0, i - i % r), l = Math.min(o, l + (r - 1 - l % r));
  }
  return { startIndex: i, endIndex: l };
}
function tv(e) {
  const t = new Zh(oe(e)), n = ta(t), r = t._didMount();
  return ve(
    () => oe(e).getScrollElement(),
    (o) => {
      o && t._willUpdate();
    },
    {
      immediate: !0
    }
  ), ve(
    () => oe(e),
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
  ), tl(r), n;
}
function nv(e) {
  return tv(
    A(() => ({
      observeElementRect: Jh,
      observeElementOffset: Xh,
      scrollToFn: Qh,
      ...oe(e)
    }))
  );
}
function rv(e, t, n) {
  let r = I(n == null ? void 0 : n.value), o = A(() => e.value !== void 0);
  return [A(() => o.value ? e.value : r.value), function(a) {
    return o.value || (r.value = a), t == null ? void 0 : t(a);
  }];
}
function Tr(e) {
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
    return Tr(() => {
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
function ov() {
  let e = He();
  return ge(() => e.dispose()), e;
}
function av() {
  let e = ov();
  return (t) => {
    e.dispose(), e.nextFrame(t);
  };
}
var Bo;
let iv = Symbol("headlessui.useid"), lv = 0;
const fe = (Bo = jr.useId) != null ? Bo : function() {
  return jr.inject(iv, () => `${++lv}`)();
};
function P(e) {
  var t;
  if (e == null || e.value == null)
    return null;
  let n = (t = e.value.$el) != null ? t : e.value;
  return n instanceof Node ? n : null;
}
function ie(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, ie), r;
}
var sv = Object.defineProperty, uv = (e, t, n) => t in e ? sv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Uo = (e, t, n) => (uv(e, typeof t != "symbol" ? t + "" : t, n), n);
class cv {
  constructor() {
    Uo(this, "current", this.detect()), Uo(this, "currentId", 0);
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
let Ft = new cv();
function Be(e) {
  if (Ft.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = P(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let Wn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Ae = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Ae || {}), pi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(pi || {}), dv = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(dv || {});
function hi(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Wn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ar = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ar || {});
function Cr(e, t = 0) {
  var n;
  return e === ((n = Be(e)) == null ? void 0 : n.body) ? !1 : ie(t, { [0]() {
    return e.matches(Wn);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Wn))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
function vi(e) {
  let t = Be(e);
  de(() => {
    t && !Cr(t.activeElement, 0) && ke(e);
  });
}
var fv = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(fv || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function ke(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let pv = ["textarea", "input"].join(",");
function hv(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, pv)) != null ? n : !1;
}
function Pr(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), a = t(r);
    if (o === null || a === null)
      return 0;
    let i = o.compareDocumentPosition(a);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function vv(e, t) {
  return yt(hi(), t, { relativeTo: e });
}
function yt(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  var a;
  let i = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, l = Array.isArray(e) ? n ? Pr(e) : e : hi(e);
  o.length > 0 && l.length > 1 && (l = l.filter((p) => !o.includes(p))), r = r != null ? r : i.activeElement;
  let s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, l.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, l.indexOf(r)) + 1;
    if (t & 8)
      return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, d = 0, f = l.length, h;
  do {
    if (d >= f || d + f <= 0)
      return 0;
    let p = c + d;
    if (t & 16)
      p = (p + f) % f;
    else {
      if (p < 0)
        return 3;
      if (p >= f)
        return 1;
    }
    h = l[p], h == null || h.focus(u), d += s;
  } while (h !== i.activeElement);
  return t & 6 && hv(h) && h.select(), 2;
}
function mi() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function mv() {
  return /Android/gi.test(window.navigator.userAgent);
}
function gi() {
  return mi() || mv();
}
function Bt(e, t, n) {
  Ft.isServer || ne((r) => {
    document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
  });
}
function bi(e, t, n) {
  Ft.isServer || ne((r) => {
    window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
  });
}
function Rr(e, t, n = A(() => !0)) {
  function r(a, i) {
    if (!n.value || a.defaultPrevented)
      return;
    let l = i(a);
    if (l === null || !l.getRootNode().contains(l))
      return;
    let s = function c(u) {
      return typeof u == "function" ? c(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let c of s) {
      if (c === null)
        continue;
      let u = c instanceof HTMLElement ? c : P(c);
      if (u != null && u.contains(l) || a.composed && a.composedPath().includes(u))
        return;
    }
    return !Cr(l, Ar.Loose) && l.tabIndex !== -1 && a.preventDefault(), t(a, l);
  }
  let o = I(null);
  Bt("pointerdown", (a) => {
    var i, l;
    n.value && (o.value = ((l = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : l[0]) || a.target);
  }, !0), Bt("mousedown", (a) => {
    var i, l;
    n.value && (o.value = ((l = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : l[0]) || a.target);
  }, !0), Bt("click", (a) => {
    gi() || o.value && (r(a, () => o.value), o.value = null);
  }, !0), Bt("touchend", (a) => r(a, () => a.target instanceof HTMLElement ? a.target : null), !0), bi("blur", (a) => r(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function ko(e, t) {
  if (e)
    return e;
  let n = t != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function yi(e, t) {
  let n = I(ko(e.value.type, e.value.as));
  return ee(() => {
    n.value = ko(e.value.type, e.value.as);
  }), ne(() => {
    var r;
    n.value || P(t) && P(t) instanceof HTMLButtonElement && !((r = P(t)) != null && r.hasAttribute("type")) && (n.value = "button");
  }), n;
}
function Ho(e) {
  return [e.screenX, e.screenY];
}
function wi() {
  let e = I([-1, -1]);
  return { wasMoved(t) {
    let n = Ho(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = Ho(t);
  } };
}
function Si({ container: e, accept: t, walk: n, enabled: r }) {
  ne(() => {
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
function G({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...o }) {
  var a;
  let i = Oi(r, n), l = Object.assign(o, { props: i });
  if (e || t & 2 && i.static)
    return Tn(l);
  if (t & 1) {
    let s = (a = i.unmount) == null || a ? 0 : 1;
    return ie(s, { [0]() {
      return null;
    }, [1]() {
      return Tn({ ...o, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Tn(l);
}
function Tn({ props: e, attrs: t, slots: n, slot: r, name: o }) {
  var a, i;
  let { as: l, ...s } = $t(e, ["unmount", "static"]), c = (a = n.default) == null ? void 0 : a.call(n, r), u = {};
  if (r) {
    let d = !1, f = [];
    for (let [h, p] of Object.entries(r))
      typeof p == "boolean" && (d = !0), p === !0 && f.push(h);
    d && (u["data-headlessui-state"] = f.join(" "));
  }
  if (l === "template") {
    if (c = Ei(c != null ? c : []), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [d, ...f] = c != null ? c : [];
      if (!bv(d) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).map((v) => v.trim()).filter((v, m, S) => S.indexOf(v) === m).sort((v, m) => v.localeCompare(m)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let h = Oi((i = d.props) != null ? i : {}, s, u), p = ea(d, h, !0);
      for (let v in h)
        v.startsWith("on") && (p.props || (p.props = {}), p.props[v] = h[v]);
      return p;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return X(l, Object.assign({}, s, u), { default: () => c });
}
function Ei(e) {
  return e.flatMap((t) => t.type === Ve ? Ei(t.children) : [t]);
}
function Oi(...e) {
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
function gv(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function $t(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function bv(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Tt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Tt || {});
let tn = M({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    var r;
    let { features: o, ...a } = e, i = { "aria-hidden": (o & 2) === 2 ? !0 : (r = a["aria-hidden"]) != null ? r : void 0, hidden: (o & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return G({ ourProps: i, theirProps: a, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} }), xi = Symbol("Context");
var Y = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Y || {});
function yv() {
  return Dt() !== null;
}
function Dt() {
  return ue(xi, null);
}
function _r(e) {
  me(xi, e);
}
var H = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(H || {}), Ti = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Ti || {});
function wv(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let $e = [];
wv(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && $e[0] !== t.target && ($e.unshift(t.target), $e = $e.filter((n) => n != null && n.isConnected), $e.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Sv(e) {
  throw new Error("Unexpected object: " + e);
}
var V = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(V || {});
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
      Sv(e);
  }
}
function Ai(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e))
    Pi(n, Ci(t, r), o);
  return n;
}
function Ci(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Pi(e, t, n) {
  if (Array.isArray(n))
    for (let [r, o] of n.entries())
      Pi(e, Ci(t, r.toString()), o);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Ai(n, t, e);
}
function Ev(e, t) {
  return e === t;
}
var Ov = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ov || {}), xv = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(xv || {}), Tv = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Tv || {});
let Ri = Symbol("ComboboxContext");
function Ze(e) {
  let t = ue(Ri, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ze), n;
  }
  return t;
}
let _i = Symbol("VirtualContext"), Av = M({ name: "VirtualProvider", setup(e, { slots: t }) {
  let n = Ze("VirtualProvider"), r = A(() => {
    let l = P(n.optionsRef);
    if (!l)
      return { start: 0, end: 0 };
    let s = window.getComputedStyle(l);
    return { start: parseFloat(s.paddingBlockStart || s.paddingTop), end: parseFloat(s.paddingBlockEnd || s.paddingBottom) };
  }), o = nv(A(() => ({ scrollPaddingStart: r.value.start, scrollPaddingEnd: r.value.end, count: n.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return P(n.optionsRef);
  }, overscan: 12 }))), a = A(() => {
    var l;
    return (l = n.virtual.value) == null ? void 0 : l.options;
  }), i = I(0);
  return ve([a], () => {
    i.value += 1;
  }), me(_i, n.virtual.value ? o : null), () => [X("div", { style: { position: "relative", width: "100%", height: `${o.value.getTotalSize()}px` }, ref: (l) => {
    if (l) {
      if (typeof process < "u" && process.env.JEST_WORKER_ID !== void 0 || n.activationTrigger.value === 0)
        return;
      n.activeOptionIndex.value !== null && n.virtual.value.options.length > n.activeOptionIndex.value && o.value.scrollToIndex(n.activeOptionIndex.value);
    }
  } }, o.value.getVirtualItems().map((l) => ea(t.default({ option: n.virtual.value.options[l.index], open: n.comboboxState.value === 0 })[0], { key: `${i.value}-${l.index}`, "data-index": l.index, "aria-setsize": n.virtual.value.options.length, "aria-posinset": l.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${l.start}px)`, overflowAnchor: "none" } })))];
} });
M({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], nullable: !0, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 }, immediate: { type: [Boolean], default: !1 }, virtual: { type: Object, default: null } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: r }) {
  let o = I(1), a = I(null), i = I(null), l = I(null), s = I(null), c = I({ static: !1, hold: !1 }), u = I([]), d = I(null), f = I(2), h = I(!1);
  function p(O = (b) => b) {
    let b = d.value !== null ? u.value[d.value] : null, y = O(u.value.slice()), w = y.length > 0 && y[0].dataRef.order.value !== null ? y.sort((D, B) => D.dataRef.order.value - B.dataRef.order.value) : Pr(y, (D) => P(D.dataRef.domRef)), _ = b ? w.indexOf(b) : null;
    return _ === -1 && (_ = null), { options: w, activeOptionIndex: _ };
  }
  let v = A(() => e.multiple ? 1 : 0), m = A(() => e.nullable), [S, E] = rv(A(() => e.modelValue), (O) => r("update:modelValue", O), A(() => e.defaultValue)), R = A(() => S.value === void 0 ? ie(v.value, { [1]: [], [0]: void 0 }) : S.value), $ = null, x = null;
  function C(O) {
    return ie(v.value, { [0]() {
      return E == null ? void 0 : E(O);
    }, [1]: () => {
      let b = Ie(T.value.value).slice(), y = Ie(O), w = b.findIndex((_) => T.compare(y, Ie(_)));
      return w === -1 ? b.push(y) : b.splice(w, 1), E == null ? void 0 : E(b);
    } });
  }
  let F = A(() => {
  });
  ve([F], ([O], [b]) => {
    if (T.virtual.value && O && b && d.value !== null) {
      let y = O.indexOf(b[d.value]);
      y !== -1 ? d.value = y : d.value = null;
    }
  });
  let T = { comboboxState: o, value: R, mode: v, compare(O, b) {
    if (typeof e.by == "string") {
      let y = e.by;
      return (O == null ? void 0 : O[y]) === (b == null ? void 0 : b[y]);
    }
    return e.by === null ? Ev(O, b) : e.by(O, b);
  }, calculateIndex(O) {
    return T.virtual.value ? e.by === null ? T.virtual.value.options.indexOf(O) : T.virtual.value.options.findIndex((b) => T.compare(b, O)) : u.value.findIndex((b) => T.compare(b.dataRef.value, O));
  }, defaultValue: A(() => e.defaultValue), nullable: m, immediate: A(() => !1), virtual: A(() => null), inputRef: i, labelRef: a, buttonRef: l, optionsRef: s, disabled: A(() => e.disabled), options: u, change(O) {
    E(O);
  }, activeOptionIndex: A(() => {
    if (h.value && d.value === null && (T.virtual.value ? T.virtual.value.options.length > 0 : u.value.length > 0)) {
      if (T.virtual.value) {
        let b = T.virtual.value.options.findIndex((y) => {
          var w;
          return !((w = T.virtual.value) != null && w.disabled(y));
        });
        if (b !== -1)
          return b;
      }
      let O = u.value.findIndex((b) => !b.dataRef.disabled);
      if (O !== -1)
        return O;
    }
    return d.value;
  }), activationTrigger: f, optionsPropsRef: c, closeCombobox() {
    h.value = !1, !e.disabled && o.value !== 1 && (o.value = 1, d.value = null);
  }, openCombobox() {
    if (h.value = !0, !e.disabled && o.value !== 0) {
      if (T.value.value) {
        let O = T.calculateIndex(T.value.value);
        O !== -1 && (d.value = O);
      }
      o.value = 0;
    }
  }, setActivationTrigger(O) {
    f.value = O;
  }, goToOption(O, b, y) {
    h.value = !1, $ !== null && cancelAnimationFrame($), $ = requestAnimationFrame(() => {
      if (e.disabled || s.value && !c.value.static && o.value === 1)
        return;
      if (T.virtual.value) {
        d.value = O === V.Specific ? b : Kn({ focus: O }, { resolveItems: () => T.virtual.value.options, resolveActiveIndex: () => {
          var D, B;
          return (B = (D = T.activeOptionIndex.value) != null ? D : T.virtual.value.options.findIndex((J) => {
            var Z;
            return !((Z = T.virtual.value) != null && Z.disabled(J));
          })) != null ? B : null;
        }, resolveDisabled: (D) => T.virtual.value.disabled(D), resolveId() {
          throw new Error("Function not implemented.");
        } }), f.value = y != null ? y : 2;
        return;
      }
      let w = p();
      if (w.activeOptionIndex === null) {
        let D = w.options.findIndex((B) => !B.dataRef.disabled);
        D !== -1 && (w.activeOptionIndex = D);
      }
      let _ = O === V.Specific ? b : Kn({ focus: O }, { resolveItems: () => w.options, resolveActiveIndex: () => w.activeOptionIndex, resolveId: (D) => D.id, resolveDisabled: (D) => D.dataRef.disabled });
      d.value = _, f.value = y != null ? y : 2, u.value = w.options;
    });
  }, selectOption(O) {
    let b = u.value.find((w) => w.id === O);
    if (!b)
      return;
    let { dataRef: y } = b;
    C(y.value);
  }, selectActiveOption() {
    if (T.activeOptionIndex.value !== null) {
      if (T.virtual.value)
        C(T.virtual.value.options[T.activeOptionIndex.value]);
      else {
        let { dataRef: O } = u.value[T.activeOptionIndex.value];
        C(O.value);
      }
      T.goToOption(V.Specific, T.activeOptionIndex.value);
    }
  }, registerOption(O, b) {
    let y = nr({ id: O, dataRef: b });
    if (T.virtual.value) {
      u.value.push(y);
      return;
    }
    x && cancelAnimationFrame(x);
    let w = p((_) => (_.push(y), _));
    d.value === null && T.isSelected(b.value.value) && (w.activeOptionIndex = w.options.indexOf(y)), u.value = w.options, d.value = w.activeOptionIndex, f.value = 2, w.options.some((_) => !P(_.dataRef.domRef)) && (x = requestAnimationFrame(() => {
      let _ = p();
      u.value = _.options, d.value = _.activeOptionIndex;
    }));
  }, unregisterOption(O, b) {
    if ($ !== null && cancelAnimationFrame($), b && (h.value = !0), T.virtual.value) {
      u.value = u.value.filter((w) => w.id !== O);
      return;
    }
    let y = p((w) => {
      let _ = w.findIndex((D) => D.id === O);
      return _ !== -1 && w.splice(_, 1), w;
    });
    u.value = y.options, d.value = y.activeOptionIndex, f.value = 2;
  }, isSelected(O) {
    return ie(v.value, { [0]: () => T.compare(Ie(T.value.value), Ie(O)), [1]: () => Ie(T.value.value).some((b) => T.compare(Ie(b), Ie(O))) });
  }, isActive(O) {
    return d.value === T.calculateIndex(O);
  } };
  Rr([i, l, s], () => T.closeCombobox(), A(() => o.value === 0)), me(Ri, T), _r(A(() => ie(o.value, { [0]: Y.Open, [1]: Y.Closed })));
  let L = A(() => {
    var O;
    return (O = P(i)) == null ? void 0 : O.closest("form");
  });
  return ee(() => {
    ve([L], () => {
      if (!L.value || e.defaultValue === void 0)
        return;
      function O() {
        T.change(e.defaultValue);
      }
      return L.value.addEventListener("reset", O), () => {
        var b;
        (b = L.value) == null || b.removeEventListener("reset", O);
      };
    }, { immediate: !0 });
  }), () => {
    var O, b, y;
    let { name: w, disabled: _, form: D, ...B } = e, J = { open: o.value === 0, disabled: _, activeIndex: T.activeOptionIndex.value, activeOption: T.activeOptionIndex.value === null ? null : T.virtual.value ? T.virtual.value.options[(O = T.activeOptionIndex.value) != null ? O : 0] : (y = (b = T.options.value[T.activeOptionIndex.value]) == null ? void 0 : b.dataRef.value) != null ? y : null, value: R.value };
    return X(Ve, [...w != null && R.value != null ? Ai({ [w]: R.value }).map(([Z, K]) => X(tn, gv({ features: Tt.Hidden, key: Z, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: D, disabled: _, name: Z, value: K }))) : [], G({ theirProps: { ...n, ...$t(B, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: J, slots: t, attrs: n, name: "Combobox" })]);
  };
} });
M({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let o = (r = e.id) != null ? r : `headlessui-combobox-label-${fe()}`, a = Ze("ComboboxLabel");
  function i() {
    var l;
    (l = P(a.inputRef)) == null || l.focus({ preventScroll: !0 });
  }
  return () => {
    let l = { open: a.comboboxState.value === 0, disabled: a.disabled.value }, { ...s } = e, c = { id: o, ref: a.labelRef, onClick: i };
    return G({ ourProps: c, theirProps: s, slot: l, attrs: t, slots: n, name: "ComboboxLabel" });
  };
} });
M({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-combobox-button-${fe()}`, i = Ze("ComboboxButton");
  r({ el: i.buttonRef, $el: i.buttonRef });
  function l(u) {
    i.disabled.value || (i.comboboxState.value === 0 ? i.closeCombobox() : (u.preventDefault(), i.openCombobox()), de(() => {
      var d;
      return (d = P(i.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function s(u) {
    switch (u.key) {
      case H.ArrowDown:
        u.preventDefault(), u.stopPropagation(), i.comboboxState.value === 1 && i.openCombobox(), de(() => {
          var d;
          return (d = i.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case H.ArrowUp:
        u.preventDefault(), u.stopPropagation(), i.comboboxState.value === 1 && (i.openCombobox(), de(() => {
          i.value.value || i.goToOption(V.Last);
        })), de(() => {
          var d;
          return (d = i.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case H.Escape:
        if (i.comboboxState.value !== 0)
          return;
        u.preventDefault(), i.optionsRef.value && !i.optionsPropsRef.value.static && u.stopPropagation(), i.closeCombobox(), de(() => {
          var d;
          return (d = i.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let c = yi(A(() => ({ as: e.as, type: t.type })), i.buttonRef);
  return () => {
    var u, d;
    let f = { open: i.comboboxState.value === 0, disabled: i.disabled.value, value: i.value.value }, { ...h } = e, p = { ref: i.buttonRef, id: a, type: c.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (u = P(i.optionsRef)) == null ? void 0 : u.id, "aria-expanded": i.comboboxState.value === 0, "aria-labelledby": i.labelRef.value ? [(d = P(i.labelRef)) == null ? void 0 : d.id, a].join(" ") : void 0, disabled: i.disabled.value === !0 ? !0 : void 0, onKeydown: s, onClick: l };
    return G({ ourProps: p, theirProps: h, slot: f, attrs: t, slots: n, name: "ComboboxButton" });
  };
} });
M({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: null } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  var a;
  let i = (a = e.id) != null ? a : `headlessui-combobox-input-${fe()}`, l = Ze("ComboboxInput"), s = A(() => Be(P(l.inputRef))), c = { value: !1 };
  o({ el: l.inputRef, $el: l.inputRef });
  function u() {
    l.change(null);
    let x = P(l.optionsRef);
    x && (x.scrollTop = 0), l.goToOption(V.Nothing);
  }
  let d = A(() => {
    var x;
    let C = l.value.value;
    return P(l.inputRef) ? typeof e.displayValue < "u" && C !== void 0 ? (x = e.displayValue(C)) != null ? x : "" : typeof C == "string" ? C : "" : "";
  });
  ee(() => {
    ve([d, l.comboboxState, s], ([x, C], [F, T]) => {
      if (c.value)
        return;
      let L = P(l.inputRef);
      L && ((T === 0 && C === 1 || x !== F) && (L.value = x), requestAnimationFrame(() => {
        var O;
        if (c.value || !L || ((O = s.value) == null ? void 0 : O.activeElement) !== L)
          return;
        let { selectionStart: b, selectionEnd: y } = L;
        Math.abs((y != null ? y : 0) - (b != null ? b : 0)) === 0 && b === 0 && L.setSelectionRange(L.value.length, L.value.length);
      }));
    }, { immediate: !0 }), ve([l.comboboxState], ([x], [C]) => {
      if (x === 0 && C === 1) {
        if (c.value)
          return;
        let F = P(l.inputRef);
        if (!F)
          return;
        let T = F.value, { selectionStart: L, selectionEnd: O, selectionDirection: b } = F;
        F.value = "", F.value = T, b !== null ? F.setSelectionRange(L, O, b) : F.setSelectionRange(L, O);
      }
    });
  });
  let f = I(!1);
  function h() {
    f.value = !0;
  }
  function p() {
    He().nextFrame(() => {
      f.value = !1;
    });
  }
  let v = av();
  function m(x) {
    switch (c.value = !0, v(() => {
      c.value = !1;
    }), x.key) {
      case H.Enter:
        if (c.value = !1, l.comboboxState.value !== 0 || f.value)
          return;
        if (x.preventDefault(), x.stopPropagation(), l.activeOptionIndex.value === null) {
          l.closeCombobox();
          return;
        }
        l.selectActiveOption(), l.mode.value === 0 && l.closeCombobox();
        break;
      case H.ArrowDown:
        return c.value = !1, x.preventDefault(), x.stopPropagation(), ie(l.comboboxState.value, { [0]: () => l.goToOption(V.Next), [1]: () => l.openCombobox() });
      case H.ArrowUp:
        return c.value = !1, x.preventDefault(), x.stopPropagation(), ie(l.comboboxState.value, { [0]: () => l.goToOption(V.Previous), [1]: () => {
          l.openCombobox(), de(() => {
            l.value.value || l.goToOption(V.Last);
          });
        } });
      case H.Home:
        if (x.shiftKey)
          break;
        return c.value = !1, x.preventDefault(), x.stopPropagation(), l.goToOption(V.First);
      case H.PageUp:
        return c.value = !1, x.preventDefault(), x.stopPropagation(), l.goToOption(V.First);
      case H.End:
        if (x.shiftKey)
          break;
        return c.value = !1, x.preventDefault(), x.stopPropagation(), l.goToOption(V.Last);
      case H.PageDown:
        return c.value = !1, x.preventDefault(), x.stopPropagation(), l.goToOption(V.Last);
      case H.Escape:
        if (c.value = !1, l.comboboxState.value !== 0)
          return;
        x.preventDefault(), l.optionsRef.value && !l.optionsPropsRef.value.static && x.stopPropagation(), l.nullable.value && l.mode.value === 0 && l.value.value === null && u(), l.closeCombobox();
        break;
      case H.Tab:
        if (c.value = !1, l.comboboxState.value !== 0)
          return;
        l.mode.value === 0 && l.activationTrigger.value !== 1 && l.selectActiveOption(), l.closeCombobox();
        break;
    }
  }
  function S(x) {
    t("change", x), l.nullable.value && l.mode.value === 0 && x.target.value === "" && u(), l.openCombobox();
  }
  function E(x) {
    var C, F, T;
    let L = (C = x.relatedTarget) != null ? C : $e.find((O) => O !== x.currentTarget);
    if (c.value = !1, !((F = P(l.optionsRef)) != null && F.contains(L)) && !((T = P(l.buttonRef)) != null && T.contains(L)) && l.comboboxState.value === 0)
      return x.preventDefault(), l.mode.value === 0 && (l.nullable.value && l.value.value === null ? u() : l.activationTrigger.value !== 1 && l.selectActiveOption()), l.closeCombobox();
  }
  function R(x) {
    var C, F, T;
    let L = (C = x.relatedTarget) != null ? C : $e.find((O) => O !== x.currentTarget);
    (F = P(l.buttonRef)) != null && F.contains(L) || (T = P(l.optionsRef)) != null && T.contains(L) || l.disabled.value || l.immediate.value && l.comboboxState.value !== 0 && (l.openCombobox(), He().nextFrame(() => {
      l.setActivationTrigger(1);
    }));
  }
  let $ = A(() => {
    var x, C, F, T;
    return (T = (F = (C = e.defaultValue) != null ? C : l.defaultValue.value !== void 0 ? (x = e.displayValue) == null ? void 0 : x.call(e, l.defaultValue.value) : null) != null ? F : l.defaultValue.value) != null ? T : "";
  });
  return () => {
    var x, C, F, T, L, O, b;
    let y = { open: l.comboboxState.value === 0 }, { displayValue: w, onChange: _, ...D } = e, B = { "aria-controls": (x = l.optionsRef.value) == null ? void 0 : x.id, "aria-expanded": l.comboboxState.value === 0, "aria-activedescendant": l.activeOptionIndex.value === null ? void 0 : l.virtual.value ? (C = l.options.value.find((J) => !l.virtual.value.disabled(J.dataRef.value) && l.compare(J.dataRef.value, l.virtual.value.options[l.activeOptionIndex.value]))) == null ? void 0 : C.id : (F = l.options.value[l.activeOptionIndex.value]) == null ? void 0 : F.id, "aria-labelledby": (O = (T = P(l.labelRef)) == null ? void 0 : T.id) != null ? O : (L = P(l.buttonRef)) == null ? void 0 : L.id, "aria-autocomplete": "list", id: i, onCompositionstart: h, onCompositionend: p, onKeydown: m, onInput: S, onFocus: R, onBlur: E, role: "combobox", type: (b = n.type) != null ? b : "text", tabIndex: 0, ref: l.inputRef, defaultValue: $.value, disabled: l.disabled.value === !0 ? !0 : void 0 };
    return G({ ourProps: B, theirProps: D, slot: y, attrs: n, slots: r, features: _e.RenderStrategy | _e.Static, name: "ComboboxInput" });
  };
} });
M({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = Ze("ComboboxOptions"), a = `headlessui-combobox-options-${fe()}`;
  r({ el: o.optionsRef, $el: o.optionsRef }), ne(() => {
    o.optionsPropsRef.value.static = e.static;
  }), ne(() => {
    o.optionsPropsRef.value.hold = e.hold;
  });
  let i = Dt(), l = A(() => i !== null ? (i.value & Y.Open) === Y.Open : o.comboboxState.value === 0);
  Si({ container: A(() => P(o.optionsRef)), enabled: A(() => o.comboboxState.value === 0), accept(c) {
    return c.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c) {
    c.setAttribute("role", "none");
  } });
  function s(c) {
    c.preventDefault();
  }
  return () => {
    var c, u, d;
    let f = { open: o.comboboxState.value === 0 }, h = { "aria-labelledby": (d = (c = P(o.labelRef)) == null ? void 0 : c.id) != null ? d : (u = P(o.buttonRef)) == null ? void 0 : u.id, id: a, ref: o.optionsRef, role: "listbox", "aria-multiselectable": o.mode.value === 1 ? !0 : void 0, onMousedown: s }, p = $t(e, ["hold"]);
    return G({ ourProps: h, theirProps: p, slot: f, attrs: t, slots: o.virtual.value && o.comboboxState.value === 0 ? { ...n, default: () => [X(Av, {}, n.default)] } : n, features: _e.RenderStrategy | _e.Static, visible: l.value, name: "ComboboxOptions" });
  };
} });
M({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, order: { type: [Number], default: null } }, setup(e, { slots: t, attrs: n, expose: r }) {
  let o = Ze("ComboboxOption"), a = `headlessui-combobox-option-${fe()}`, i = I(null), l = A(() => e.disabled);
  r({ el: i, $el: i });
  let s = A(() => {
    var E;
    return o.virtual.value ? o.activeOptionIndex.value === o.calculateIndex(e.value) : o.activeOptionIndex.value === null ? !1 : ((E = o.options.value[o.activeOptionIndex.value]) == null ? void 0 : E.id) === a;
  }), c = A(() => o.isSelected(e.value)), u = ue(_i, null), d = A(() => ({ disabled: e.disabled, value: e.value, domRef: i, order: A(() => e.order) }));
  ee(() => o.registerOption(a, d)), ge(() => o.unregisterOption(a, s.value)), ne(() => {
    let E = P(i);
    E && (u == null || u.value.measureElement(E));
  }), ne(() => {
    o.comboboxState.value === 0 && s.value && (o.virtual.value || o.activationTrigger.value !== 0 && de(() => {
      var E, R;
      return (R = (E = P(i)) == null ? void 0 : E.scrollIntoView) == null ? void 0 : R.call(E, { block: "nearest" });
    }));
  });
  function f(E) {
    E.preventDefault(), E.button === Ti.Left && (l.value || (o.selectOption(a), gi() || requestAnimationFrame(() => {
      var R;
      return (R = P(o.inputRef)) == null ? void 0 : R.focus({ preventScroll: !0 });
    }), o.mode.value === 0 && o.closeCombobox()));
  }
  function h() {
    var E;
    if (e.disabled || (E = o.virtual.value) != null && E.disabled(e.value))
      return o.goToOption(V.Nothing);
    let R = o.calculateIndex(e.value);
    o.goToOption(V.Specific, R);
  }
  let p = wi();
  function v(E) {
    p.update(E);
  }
  function m(E) {
    var R;
    if (!p.wasMoved(E) || e.disabled || (R = o.virtual.value) != null && R.disabled(e.value) || s.value)
      return;
    let $ = o.calculateIndex(e.value);
    o.goToOption(V.Specific, $, 0);
  }
  function S(E) {
    var R;
    p.wasMoved(E) && (e.disabled || (R = o.virtual.value) != null && R.disabled(e.value) || s.value && (o.optionsPropsRef.value.hold || o.goToOption(V.Nothing)));
  }
  return () => {
    let { disabled: E } = e, R = { active: s.value, selected: c.value, disabled: E }, $ = { id: a, ref: i, role: "option", tabIndex: E === !0 ? void 0 : -1, "aria-disabled": E === !0 ? !0 : void 0, "aria-selected": c.value, disabled: void 0, onMousedown: f, onFocus: h, onPointerenter: v, onMouseenter: v, onPointermove: m, onMousemove: m, onPointerleave: S, onMouseleave: S }, x = $t(e, ["order", "value"]);
    return G({ ourProps: $, theirProps: x, slot: R, attrs: n, slots: t, name: "ComboboxOption" });
  };
} });
function Ii(e, t, n, r) {
  Ft.isServer || ne((o) => {
    e = e != null ? e : window, e.addEventListener(t, n, r), o(() => e.removeEventListener(t, n, r));
  });
}
var vt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(vt || {});
function Cv() {
  let e = I(0);
  return bi("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Fi(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.value) {
    let r = P(n);
    r instanceof HTMLElement && t.add(r);
  }
  return t;
}
var $i = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))($i || {});
let pt = Object.assign(M({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: I(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = I(null);
  r({ el: o, $el: o });
  let a = A(() => Be(o)), i = I(!1);
  ee(() => i.value = !0), ge(() => i.value = !1), Rv({ ownerDocument: a }, A(() => i.value && Boolean(e.features & 16)));
  let l = _v({ ownerDocument: a, container: o, initialFocus: A(() => e.initialFocus) }, A(() => i.value && Boolean(e.features & 2)));
  Iv({ ownerDocument: a, container: o, containers: e.containers, previousActiveElement: l }, A(() => i.value && Boolean(e.features & 8)));
  let s = Cv();
  function c(h) {
    let p = P(o);
    !p || ((v) => v())(() => {
      ie(s.value, { [vt.Forwards]: () => {
        yt(p, Ae.First, { skipElements: [h.relatedTarget] });
      }, [vt.Backwards]: () => {
        yt(p, Ae.Last, { skipElements: [h.relatedTarget] });
      } });
    });
  }
  let u = I(!1);
  function d(h) {
    h.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function f(h) {
    if (!i.value)
      return;
    let p = Fi(e.containers);
    P(o) instanceof HTMLElement && p.add(P(o));
    let v = h.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (Di(p, v) || (u.value ? yt(P(o), ie(s.value, { [vt.Forwards]: () => Ae.Next, [vt.Backwards]: () => Ae.Previous }) | Ae.WrapAround, { relativeTo: h.target }) : h.target instanceof HTMLElement && ke(h.target)));
  }
  return () => {
    let h = {}, p = { ref: o, onKeydown: d, onFocusout: f }, { features: v, initialFocus: m, containers: S, ...E } = e;
    return X(Ve, [Boolean(v & 4) && X(tn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: Tt.Focusable }), G({ ourProps: p, theirProps: { ...t, ...E }, slot: h, attrs: t, slots: n, name: "FocusTrap" }), Boolean(v & 4) && X(tn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: Tt.Focusable })]);
  };
} }), { features: $i });
function Pv(e) {
  let t = I($e.slice());
  return ve([e], ([n], [r]) => {
    r === !0 && n === !1 ? Tr(() => {
      t.value.splice(0);
    }) : r === !1 && n === !0 && (t.value = $e.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((r) => r != null && r.isConnected)) != null ? n : null;
  };
}
function Rv({ ownerDocument: e }, t) {
  let n = Pv(t);
  ee(() => {
    ne(() => {
      var r, o;
      t.value || ((r = e.value) == null ? void 0 : r.activeElement) === ((o = e.value) == null ? void 0 : o.body) && ke(n());
    }, { flush: "post" });
  }), ge(() => {
    t.value && ke(n());
  });
}
function _v({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let o = I(null), a = I(!1);
  return ee(() => a.value = !0), ge(() => a.value = !1), ee(() => {
    ve([t, n, r], (i, l) => {
      if (i.every((c, u) => (l == null ? void 0 : l[u]) === c) || !r.value)
        return;
      let s = P(t);
      s && Tr(() => {
        var c, u;
        if (!a.value)
          return;
        let d = P(n), f = (c = e.value) == null ? void 0 : c.activeElement;
        if (d) {
          if (d === f) {
            o.value = f;
            return;
          }
        } else if (s.contains(f)) {
          o.value = f;
          return;
        }
        d ? ke(d) : yt(s, Ae.First | Ae.NoScroll) === pi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), o;
}
function Iv({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, o) {
  var a;
  Ii((a = e.value) == null ? void 0 : a.defaultView, "focus", (i) => {
    if (!o.value)
      return;
    let l = Fi(n);
    P(t) instanceof HTMLElement && l.add(P(t));
    let s = r.value;
    if (!s)
      return;
    let c = i.target;
    c && c instanceof HTMLElement ? Di(l, c) ? (r.value = c, ke(c)) : (i.preventDefault(), i.stopPropagation(), ke(s)) : ke(r.value);
  }, !0);
}
function Di(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
function Fv(e) {
  let t = ta(e.getSnapshot());
  return ge(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function $v(e, t) {
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
function Dv() {
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
function Lv() {
  return mi() ? { before({ doc: e, d: t, meta: n }) {
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
            let { hash: c } = new URL(s.href), u = e.querySelector(c);
            u && !r(u) && (i = u);
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
function jv() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Nv(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let Ke = $v(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: He(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: Nv(n) }, o = [Lv(), Dv(), jv()];
  o.forEach(({ before: a }) => a == null ? void 0 : a(r)), o.forEach(({ after: a }) => a == null ? void 0 : a(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Ke.subscribe(() => {
  let e = Ke.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && Ke.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Ke.dispatch("TEARDOWN", n);
  }
});
function Mv(e, t, n) {
  let r = Fv(Ke), o = A(() => {
    let a = e.value ? r.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return ve([e, t], ([a, i], [l], s) => {
    if (!a || !i)
      return;
    Ke.dispatch("PUSH", a, n);
    let c = !1;
    s(() => {
      c || (Ke.dispatch("POP", l != null ? l : a, n), c = !0);
    });
  }, { immediate: !0 }), o;
}
let An = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map();
function Vo(e, t = I(!0)) {
  ne((n) => {
    var r;
    if (!t.value)
      return;
    let o = P(e);
    if (!o)
      return;
    n(function() {
      var i;
      if (!o)
        return;
      let l = (i = ht.get(o)) != null ? i : 1;
      if (l === 1 ? ht.delete(o) : ht.set(o, l - 1), l !== 1)
        return;
      let s = An.get(o);
      s && (s["aria-hidden"] === null ? o.removeAttribute("aria-hidden") : o.setAttribute("aria-hidden", s["aria-hidden"]), o.inert = s.inert, An.delete(o));
    });
    let a = (r = ht.get(o)) != null ? r : 0;
    ht.set(o, a + 1), a === 0 && (An.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), o.setAttribute("aria-hidden", "true"), o.inert = !0);
  });
}
function Bv({ defaultContainers: e = [], portals: t, mainTreeNodeRef: n } = {}) {
  let r = I(null), o = Be(r);
  function a() {
    var i, l, s;
    let c = [];
    for (let u of e)
      u !== null && (u instanceof HTMLElement ? c.push(u) : "value" in u && u.value instanceof HTMLElement && c.push(u.value));
    if (t != null && t.value)
      for (let u of t.value)
        c.push(u);
    for (let u of (i = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? i : [])
      u !== document.body && u !== document.head && u instanceof HTMLElement && u.id !== "headlessui-portal-root" && (u.contains(P(r)) || u.contains((s = (l = P(r)) == null ? void 0 : l.getRootNode()) == null ? void 0 : s.host) || c.some((d) => u.contains(d)) || c.push(u));
    return c;
  }
  return { resolveContainers: a, contains(i) {
    return a().some((l) => l.contains(i));
  }, mainTreeNodeRef: r, MainTreeNode() {
    return n != null ? null : X(tn, { features: Tt.Hidden, ref: r });
  } };
}
let Li = Symbol("ForcePortalRootContext");
function Uv() {
  return ue(Li, !1);
}
let Gn = M({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return me(Li, e.force), () => {
    let { force: r, ...o } = e;
    return G({ theirProps: o, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} }), ji = Symbol("StackContext");
var Jn = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Jn || {});
function kv() {
  return ue(ji, () => {
  });
}
function Hv({ type: e, enabled: t, element: n, onUpdate: r }) {
  let o = kv();
  function a(...i) {
    r == null || r(...i), o(...i);
  }
  ee(() => {
    ve(t, (i, l) => {
      i ? a(0, e, n) : l === !0 && a(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), ge(() => {
    t.value && a(1, e, n);
  }), me(ji, a);
}
let Ni = Symbol("DescriptionContext");
function Vv() {
  let e = ue(Ni, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function zv({ slot: e = I({}), name: t = "Description", props: n = {} } = {}) {
  let r = I([]);
  function o(a) {
    return r.value.push(a), () => {
      let i = r.value.indexOf(a);
      i !== -1 && r.value.splice(i, 1);
    };
  }
  return me(Ni, { register: o, slot: e, name: t, props: n }), A(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
M({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let o = (r = e.id) != null ? r : `headlessui-description-${fe()}`, a = Vv();
  return ee(() => ge(a.register(o))), () => {
    let { name: i = "Description", slot: l = I({}), props: s = {} } = a, { ...c } = e, u = { ...Object.entries(s).reduce((d, [f, h]) => Object.assign(d, { [f]: oe(h) }), {}), id: o };
    return G({ ourProps: u, theirProps: c, slot: l.value, attrs: t, slots: n, name: i });
  };
} });
function qv(e) {
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
function Wv(e) {
  var t;
  return (t = Xn.get(e)) != null ? t : 0;
}
function zo(e, t) {
  let n = t(Wv(e));
  return n <= 0 ? Xn.delete(e) : Xn.set(e, n), n;
}
let Mi = M({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let r = I(null), o = A(() => Be(r)), a = Uv(), i = ue(Bi, null), l = I(a === !0 || i == null ? qv(r.value) : i.resolveTarget());
  l.value && zo(l.value, (f) => f + 1);
  let s = I(!1);
  ee(() => {
    s.value = !0;
  }), ne(() => {
    a || i != null && (l.value = i.resolveTarget());
  });
  let c = ue(Yn, null), u = !1, d = Yi();
  return ve(r, () => {
    if (u || !c)
      return;
    let f = P(r);
    f && (ge(c.register(f), d), u = !0);
  }), ge(() => {
    var f, h;
    let p = (f = o.value) == null ? void 0 : f.getElementById("headlessui-portal-root");
    !p || l.value !== p || zo(l.value, (v) => v - 1) || l.value.children.length > 0 || (h = l.value.parentElement) == null || h.removeChild(l.value);
  }), () => {
    if (!s.value || l.value === null)
      return null;
    let f = { ref: r, "data-headlessui-portal": "" };
    return X(Qi, { to: l.value }, G({ ourProps: f, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Yn = Symbol("PortalParentContext");
function Kv() {
  let e = ue(Yn, null), t = I([]);
  function n(a) {
    return t.value.push(a), e && e.register(a), () => r(a);
  }
  function r(a) {
    let i = t.value.indexOf(a);
    i !== -1 && t.value.splice(i, 1), e && e.unregister(a);
  }
  let o = { register: n, unregister: r, portals: t };
  return [t, M({ name: "PortalWrapper", setup(a, { slots: i }) {
    return me(Yn, o), () => {
      var l;
      return (l = i.default) == null ? void 0 : l.call(i);
    };
  } })];
}
let Bi = Symbol("PortalGroupContext"), Gv = M({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let r = nr({ resolveTarget() {
    return e.target;
  } });
  return me(Bi, r), () => {
    let { target: o, ...a } = e;
    return G({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} });
var Jv = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Jv || {});
let Qn = Symbol("DialogContext");
function Lt(e) {
  let t = ue(Qn, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Lt), n;
  }
  return t;
}
let Ut = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
M({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ut }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  var a, i;
  let l = (a = e.id) != null ? a : `headlessui-dialog-${fe()}`, s = I(!1);
  ee(() => {
    s.value = !0;
  });
  let c = !1, u = A(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (c || (c = !0, console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), d = I(0), f = Dt(), h = A(() => e.open === Ut && f !== null ? (f.value & Y.Open) === Y.Open : e.open), p = I(null), v = A(() => Be(p));
  if (o({ el: p, $el: p }), !(e.open !== Ut || f !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof h.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value === Ut ? void 0 : e.open}`);
  let m = A(() => s.value && h.value ? 0 : 1), S = A(() => m.value === 0), E = A(() => d.value > 1), R = ue(Qn, null) !== null, [$, x] = Kv(), { resolveContainers: C, mainTreeNodeRef: F, MainTreeNode: T } = Bv({ portals: $, defaultContainers: [A(() => {
    var U;
    return (U = J.panelRef.value) != null ? U : p.value;
  })] }), L = A(() => E.value ? "parent" : "leaf"), O = A(() => f !== null ? (f.value & Y.Closing) === Y.Closing : !1), b = A(() => R || O.value ? !1 : S.value), y = A(() => {
    var U, z, le;
    return (le = Array.from((z = (U = v.value) == null ? void 0 : U.querySelectorAll("body > *")) != null ? z : []).find((ae) => ae.id === "headlessui-portal-root" ? !1 : ae.contains(P(F)) && ae instanceof HTMLElement)) != null ? le : null;
  });
  Vo(y, b);
  let w = A(() => E.value ? !0 : S.value), _ = A(() => {
    var U, z, le;
    return (le = Array.from((z = (U = v.value) == null ? void 0 : U.querySelectorAll("[data-headlessui-portal]")) != null ? z : []).find((ae) => ae.contains(P(F)) && ae instanceof HTMLElement)) != null ? le : null;
  });
  Vo(_, w), Hv({ type: "Dialog", enabled: A(() => m.value === 0), element: p, onUpdate: (U, z) => {
    if (z === "Dialog")
      return ie(U, { [Jn.Add]: () => d.value += 1, [Jn.Remove]: () => d.value -= 1 });
  } });
  let D = zv({ name: "DialogDescription", slot: A(() => ({ open: h.value })) }), B = I(null), J = { titleId: B, panelRef: I(null), dialogState: m, setTitleId(U) {
    B.value !== U && (B.value = U);
  }, close() {
    t("close", !1);
  } };
  me(Qn, J);
  let Z = A(() => !(!S.value || E.value));
  Rr(C, (U, z) => {
    U.preventDefault(), J.close(), de(() => z == null ? void 0 : z.focus());
  }, Z);
  let K = A(() => !(E.value || m.value !== 0));
  Ii((i = v.value) == null ? void 0 : i.defaultView, "keydown", (U) => {
    K.value && (U.defaultPrevented || U.key === H.Escape && (U.preventDefault(), U.stopPropagation(), J.close()));
  });
  let ce = A(() => !(O.value || m.value !== 0 || R));
  return Mv(v, ce, (U) => {
    var z;
    return { containers: [...(z = U.containers) != null ? z : [], C] };
  }), ne((U) => {
    if (m.value !== 0)
      return;
    let z = P(p);
    if (!z)
      return;
    let le = new ResizeObserver((ae) => {
      for (let et of ae) {
        let jt = et.target.getBoundingClientRect();
        jt.x === 0 && jt.y === 0 && jt.width === 0 && jt.height === 0 && J.close();
      }
    });
    le.observe(z), U(() => le.disconnect());
  }), () => {
    let { open: U, initialFocus: z, ...le } = e, ae = { ...n, ref: p, id: l, role: u.value, "aria-modal": m.value === 0 ? !0 : void 0, "aria-labelledby": B.value, "aria-describedby": D.value }, et = { open: m.value === 0 };
    return X(Gn, { force: !0 }, () => [X(Mi, () => X(Gv, { target: p.value }, () => X(Gn, { force: !1 }, () => X(pt, { initialFocus: z, containers: C, features: S.value ? ie(L.value, { parent: pt.features.RestoreFocus, leaf: pt.features.All & ~pt.features.FocusLock }) : pt.features.None }, () => X(x, {}, () => G({ ourProps: ae, theirProps: { ...le, ...n }, slot: et, attrs: n, slots: r, visible: m.value === 0, features: _e.RenderStrategy | _e.Static, name: "Dialog" })))))), X(T)]);
  };
} });
M({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let o = (r = e.id) != null ? r : `headlessui-dialog-overlay-${fe()}`, a = Lt("DialogOverlay");
  function i(l) {
    l.target === l.currentTarget && (l.preventDefault(), l.stopPropagation(), a.close());
  }
  return () => {
    let { ...l } = e;
    return G({ ourProps: { id: o, "aria-hidden": !0, onClick: i }, theirProps: l, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
M({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-dialog-backdrop-${fe()}`, i = Lt("DialogBackdrop"), l = I(null);
  return r({ el: l, $el: l }), ee(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...s } = e, c = { id: a, ref: l, "aria-hidden": !0 };
    return X(Gn, { force: !0 }, () => X(Mi, () => G({ ourProps: c, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
M({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-dialog-panel-${fe()}`, i = Lt("DialogPanel");
  r({ el: i.panelRef, $el: i.panelRef });
  function l(s) {
    s.stopPropagation();
  }
  return () => {
    let { ...s } = e, c = { id: a, ref: i.panelRef, onClick: l };
    return G({ ourProps: c, theirProps: s, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} });
M({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let o = (r = e.id) != null ? r : `headlessui-dialog-title-${fe()}`, a = Lt("DialogTitle");
  return ee(() => {
    a.setTitleId(o), ge(() => a.setTitleId(null));
  }), () => {
    let { ...i } = e;
    return G({ ourProps: { id: o }, theirProps: i, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
let qo = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Wo(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", o = e.cloneNode(!0);
  if (!(o instanceof HTMLElement))
    return r;
  let a = !1;
  for (let l of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    l.remove(), a = !0;
  let i = a ? (n = o.innerText) != null ? n : "" : r;
  return qo.test(i) && (i = i.replace(qo, "")), i;
}
function Xv(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((o) => {
      let a = document.getElementById(o);
      if (a) {
        let i = a.getAttribute("aria-label");
        return typeof i == "string" ? i.trim() : Wo(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0)
      return r.join(", ");
  }
  return Wo(e).trim();
}
function Yv(e) {
  let t = I(""), n = I("");
  return () => {
    let r = P(e);
    if (!r)
      return "";
    let o = r.innerText;
    if (t.value === o)
      return n.value;
    let a = Xv(r).trim().toLowerCase();
    return t.value = o, n.value = a, a;
  };
}
var Qv = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Qv || {}), Zv = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Zv || {});
function em(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Ui = Symbol("MenuContext");
function vn(e) {
  let t = ue(Ui, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, vn), n;
  }
  return t;
}
M({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let r = I(1), o = I(null), a = I(null), i = I([]), l = I(""), s = I(null), c = I(1);
  function u(f = (h) => h) {
    let h = s.value !== null ? i.value[s.value] : null, p = Pr(f(i.value.slice()), (m) => P(m.dataRef.domRef)), v = h ? p.indexOf(h) : null;
    return v === -1 && (v = null), { items: p, activeItemIndex: v };
  }
  let d = { menuState: r, buttonRef: o, itemsRef: a, items: i, searchQuery: l, activeItemIndex: s, activationTrigger: c, closeMenu: () => {
    r.value = 1, s.value = null;
  }, openMenu: () => r.value = 0, goToItem(f, h, p) {
    let v = u(), m = Kn(f === V.Specific ? { focus: V.Specific, id: h } : { focus: f }, { resolveItems: () => v.items, resolveActiveIndex: () => v.activeItemIndex, resolveId: (S) => S.id, resolveDisabled: (S) => S.dataRef.disabled });
    l.value = "", s.value = m, c.value = p != null ? p : 1, i.value = v.items;
  }, search(f) {
    let h = l.value !== "" ? 0 : 1;
    l.value += f.toLowerCase();
    let p = (s.value !== null ? i.value.slice(s.value + h).concat(i.value.slice(0, s.value + h)) : i.value).find((m) => m.dataRef.textValue.startsWith(l.value) && !m.dataRef.disabled), v = p ? i.value.indexOf(p) : -1;
    v === -1 || v === s.value || (s.value = v, c.value = 1);
  }, clearSearch() {
    l.value = "";
  }, registerItem(f, h) {
    let p = u((v) => [...v, { id: f, dataRef: h }]);
    i.value = p.items, s.value = p.activeItemIndex, c.value = 1;
  }, unregisterItem(f) {
    let h = u((p) => {
      let v = p.findIndex((m) => m.id === f);
      return v !== -1 && p.splice(v, 1), p;
    });
    i.value = h.items, s.value = h.activeItemIndex, c.value = 1;
  } };
  return Rr([o, a], (f, h) => {
    var p;
    d.closeMenu(), Cr(h, Ar.Loose) || (f.preventDefault(), (p = P(o)) == null || p.focus());
  }, A(() => r.value === 0)), me(Ui, d), _r(A(() => ie(r.value, { [0]: Y.Open, [1]: Y.Closed }))), () => {
    let f = { open: r.value === 0, close: d.closeMenu };
    return G({ ourProps: {}, theirProps: e, slot: f, slots: t, attrs: n, name: "Menu" });
  };
} });
M({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-menu-button-${fe()}`, i = vn("MenuButton");
  r({ el: i.buttonRef, $el: i.buttonRef });
  function l(d) {
    switch (d.key) {
      case H.Space:
      case H.Enter:
      case H.ArrowDown:
        d.preventDefault(), d.stopPropagation(), i.openMenu(), de(() => {
          var f;
          (f = P(i.itemsRef)) == null || f.focus({ preventScroll: !0 }), i.goToItem(V.First);
        });
        break;
      case H.ArrowUp:
        d.preventDefault(), d.stopPropagation(), i.openMenu(), de(() => {
          var f;
          (f = P(i.itemsRef)) == null || f.focus({ preventScroll: !0 }), i.goToItem(V.Last);
        });
        break;
    }
  }
  function s(d) {
    switch (d.key) {
      case H.Space:
        d.preventDefault();
        break;
    }
  }
  function c(d) {
    e.disabled || (i.menuState.value === 0 ? (i.closeMenu(), de(() => {
      var f;
      return (f = P(i.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), i.openMenu(), em(() => {
      var f;
      return (f = P(i.itemsRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })));
  }
  let u = yi(A(() => ({ as: e.as, type: t.type })), i.buttonRef);
  return () => {
    var d;
    let f = { open: i.menuState.value === 0 }, { ...h } = e, p = { ref: i.buttonRef, id: a, type: u.value, "aria-haspopup": "menu", "aria-controls": (d = P(i.itemsRef)) == null ? void 0 : d.id, "aria-expanded": i.menuState.value === 0, onKeydown: l, onKeyup: s, onClick: c };
    return G({ ourProps: p, theirProps: h, slot: f, attrs: t, slots: n, name: "MenuButton" });
  };
} });
M({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-menu-items-${fe()}`, i = vn("MenuItems"), l = I(null);
  r({ el: i.itemsRef, $el: i.itemsRef }), Si({ container: A(() => P(i.itemsRef)), enabled: A(() => i.menuState.value === 0), accept(f) {
    return f.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : f.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(f) {
    f.setAttribute("role", "none");
  } });
  function s(f) {
    var h;
    switch (l.value && clearTimeout(l.value), f.key) {
      case H.Space:
        if (i.searchQuery.value !== "")
          return f.preventDefault(), f.stopPropagation(), i.search(f.key);
      case H.Enter:
        if (f.preventDefault(), f.stopPropagation(), i.activeItemIndex.value !== null) {
          let p = i.items.value[i.activeItemIndex.value];
          (h = P(p.dataRef.domRef)) == null || h.click();
        }
        i.closeMenu(), vi(P(i.buttonRef));
        break;
      case H.ArrowDown:
        return f.preventDefault(), f.stopPropagation(), i.goToItem(V.Next);
      case H.ArrowUp:
        return f.preventDefault(), f.stopPropagation(), i.goToItem(V.Previous);
      case H.Home:
      case H.PageUp:
        return f.preventDefault(), f.stopPropagation(), i.goToItem(V.First);
      case H.End:
      case H.PageDown:
        return f.preventDefault(), f.stopPropagation(), i.goToItem(V.Last);
      case H.Escape:
        f.preventDefault(), f.stopPropagation(), i.closeMenu(), de(() => {
          var p;
          return (p = P(i.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case H.Tab:
        f.preventDefault(), f.stopPropagation(), i.closeMenu(), de(() => vv(P(i.buttonRef), f.shiftKey ? Ae.Previous : Ae.Next));
        break;
      default:
        f.key.length === 1 && (i.search(f.key), l.value = setTimeout(() => i.clearSearch(), 350));
        break;
    }
  }
  function c(f) {
    switch (f.key) {
      case H.Space:
        f.preventDefault();
        break;
    }
  }
  let u = Dt(), d = A(() => u !== null ? (u.value & Y.Open) === Y.Open : i.menuState.value === 0);
  return () => {
    var f, h;
    let p = { open: i.menuState.value === 0 }, { ...v } = e, m = { "aria-activedescendant": i.activeItemIndex.value === null || (f = i.items.value[i.activeItemIndex.value]) == null ? void 0 : f.id, "aria-labelledby": (h = P(i.buttonRef)) == null ? void 0 : h.id, id: a, onKeydown: s, onKeyup: c, role: "menu", tabIndex: 0, ref: i.itemsRef };
    return G({ ourProps: m, theirProps: v, slot: p, attrs: t, slots: n, features: _e.RenderStrategy | _e.Static, visible: d.value, name: "MenuItems" });
  };
} });
M({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: t, attrs: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-menu-item-${fe()}`, i = vn("MenuItem"), l = I(null);
  r({ el: l, $el: l });
  let s = A(() => i.activeItemIndex.value !== null ? i.items.value[i.activeItemIndex.value].id === a : !1), c = Yv(l), u = A(() => ({ disabled: e.disabled, get textValue() {
    return c();
  }, domRef: l }));
  ee(() => i.registerItem(a, u)), ge(() => i.unregisterItem(a)), ne(() => {
    i.menuState.value === 0 && s.value && i.activationTrigger.value !== 0 && de(() => {
      var S, E;
      return (E = (S = P(l)) == null ? void 0 : S.scrollIntoView) == null ? void 0 : E.call(S, { block: "nearest" });
    });
  });
  function d(S) {
    if (e.disabled)
      return S.preventDefault();
    i.closeMenu(), vi(P(i.buttonRef));
  }
  function f() {
    if (e.disabled)
      return i.goToItem(V.Nothing);
    i.goToItem(V.Specific, a);
  }
  let h = wi();
  function p(S) {
    h.update(S);
  }
  function v(S) {
    h.wasMoved(S) && (e.disabled || s.value || i.goToItem(V.Specific, a, 0));
  }
  function m(S) {
    h.wasMoved(S) && (e.disabled || s.value && i.goToItem(V.Nothing));
  }
  return () => {
    let { disabled: S, ...E } = e, R = { active: s.value, disabled: S, close: i.closeMenu };
    return G({ ourProps: { id: a, ref: l, role: "menuitem", tabIndex: S === !0 ? void 0 : -1, "aria-disabled": S === !0 ? !0 : void 0, onClick: d, onFocus: f, onPointerenter: p, onMouseenter: p, onPointermove: v, onMousemove: v, onPointerleave: m, onMouseleave: m }, theirProps: { ...n, ...E }, slot: R, attrs: n, slots: t, name: "MenuItem" });
  };
} });
function tm(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Cn(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function kt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Zn = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Zn || {});
function nm(e, t) {
  let n = He();
  if (!e)
    return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e), [a, i] = [r, o].map((l) => {
    let [s = 0] = l.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, u) => u - c);
    return s;
  });
  return a !== 0 ? n.setTimeout(() => t("finished"), a + i) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function Ko(e, t, n, r, o, a) {
  let i = He(), l = a !== void 0 ? tm(a) : () => {
  };
  return kt(e, ...o), Cn(e, ...t, ...n), i.nextFrame(() => {
    kt(e, ...n), Cn(e, ...r), i.add(nm(e, (s) => (kt(e, ...r, ...t), Cn(e, ...o), l(s))));
  }), i.add(() => kt(e, ...t, ...n, ...r, ...o)), i.add(() => l("cancelled")), i.dispose;
}
function ze(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Ir = Symbol("TransitionContext");
var rm = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(rm || {});
function om() {
  return ue(Ir, null) !== null;
}
function am() {
  let e = ue(Ir, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function im() {
  let e = ue(Fr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Fr = Symbol("NestingContext");
function mn(e) {
  return "children" in e ? mn(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function ki(e) {
  let t = I([]), n = I(!1);
  ee(() => n.value = !0), ge(() => n.value = !1);
  function r(a, i = Ue.Hidden) {
    let l = t.value.findIndex(({ id: s }) => s === a);
    l !== -1 && (ie(i, { [Ue.Unmount]() {
      t.value.splice(l, 1);
    }, [Ue.Hidden]() {
      t.value[l].state = "hidden";
    } }), !mn(t) && n.value && (e == null || e()));
  }
  function o(a) {
    let i = t.value.find(({ id: l }) => l === a);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: a, state: "visible" }), () => r(a, Ue.Unmount);
  }
  return { children: t, register: o, unregister: r };
}
let Hi = _e.RenderStrategy, lm = M({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  let a = I(0);
  function i() {
    a.value |= Y.Opening, t("beforeEnter");
  }
  function l() {
    a.value &= ~Y.Opening, t("afterEnter");
  }
  function s() {
    a.value |= Y.Closing, t("beforeLeave");
  }
  function c() {
    a.value &= ~Y.Closing, t("afterLeave");
  }
  if (!om() && yv())
    return () => X(um, { ...e, onBeforeEnter: i, onAfterEnter: l, onBeforeLeave: s, onAfterLeave: c }, r);
  let u = I(null), d = A(() => e.unmount ? Ue.Unmount : Ue.Hidden);
  o({ el: u, $el: u });
  let { show: f, appear: h } = am(), { register: p, unregister: v } = im(), m = I(f.value ? "visible" : "hidden"), S = { value: !0 }, E = fe(), R = { value: !1 }, $ = ki(() => {
    !R.value && m.value !== "hidden" && (m.value = "hidden", v(E), c());
  });
  ee(() => {
    let w = p(E);
    ge(w);
  }), ne(() => {
    if (d.value === Ue.Hidden && E) {
      if (f.value && m.value !== "visible") {
        m.value = "visible";
        return;
      }
      ie(m.value, { hidden: () => v(E), visible: () => p(E) });
    }
  });
  let x = ze(e.enter), C = ze(e.enterFrom), F = ze(e.enterTo), T = ze(e.entered), L = ze(e.leave), O = ze(e.leaveFrom), b = ze(e.leaveTo);
  ee(() => {
    ne(() => {
      if (m.value === "visible") {
        let w = P(u);
        if (w instanceof Comment && w.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function y(w) {
    let _ = S.value && !h.value, D = P(u);
    !D || !(D instanceof HTMLElement) || _ || (R.value = !0, f.value && i(), f.value || s(), w(f.value ? Ko(D, x, C, F, T, (B) => {
      R.value = !1, B === Zn.Finished && l();
    }) : Ko(D, L, O, b, T, (B) => {
      R.value = !1, B === Zn.Finished && (mn($) || (m.value = "hidden", v(E), c()));
    })));
  }
  return ee(() => {
    ve([f], (w, _, D) => {
      y(D), S.value = !1;
    }, { immediate: !0 });
  }), me(Fr, $), _r(A(() => ie(m.value, { visible: Y.Open, hidden: Y.Closed }) | a.value)), () => {
    let { appear: w, show: _, enter: D, enterFrom: B, enterTo: J, entered: Z, leave: K, leaveFrom: ce, leaveTo: U, ...z } = e, le = { ref: u }, ae = { ...z, ...h.value && f.value && Ft.isServer ? { class: nn([n.class, z.class, ...x, ...C]) } : {} };
    return G({ theirProps: ae, ourProps: le, slot: {}, slots: r, attrs: n, features: Hi, visible: m.value === "visible", name: "TransitionChild" });
  };
} }), sm = lm, um = M({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r }) {
  let o = Dt(), a = A(() => e.show === null && o !== null ? (o.value & Y.Open) === Y.Open : e.show);
  ne(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = I(a.value ? "visible" : "hidden"), l = ki(() => {
    i.value = "hidden";
  }), s = I(!0), c = { show: a, appear: A(() => e.appear || !s.value) };
  return ee(() => {
    ne(() => {
      s.value = !1, a.value ? i.value = "visible" : mn(l) || (i.value = "hidden");
    });
  }), me(Fr, l), me(Ir, c), () => {
    let u = $t(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), d = { unmount: e.unmount };
    return G({ ourProps: { ...d, as: "template" }, theirProps: {}, slot: {}, slots: { ...r, default: () => [X(sm, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...d, ...u }, r.default)] }, attrs: {}, features: Hi, visible: i.value === "visible", name: "Transition" });
  };
} });
var Go;
const cm = typeof window < "u";
cm && ((Go = window == null ? void 0 : window.navigator) == null ? void 0 : Go.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function dm(e) {
  return e;
}
const er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tr = "__vueuse_ssr_handlers__";
er[tr] = er[tr] || {};
er[tr];
var Jo;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Jo || (Jo = {}));
var fm = Object.defineProperty, Xo = Object.getOwnPropertySymbols, pm = Object.prototype.hasOwnProperty, hm = Object.prototype.propertyIsEnumerable, Yo = (e, t, n) => t in e ? fm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vm = (e, t) => {
  for (var n in t || (t = {}))
    pm.call(t, n) && Yo(e, n, t[n]);
  if (Xo)
    for (var n of Xo(t))
      hm.call(t, n) && Yo(e, n, t[n]);
  return e;
};
const mm = {
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
vm({
  linear: dm
}, mm);
function gm(e, t) {
  return A({
    get: () => e.modelValue,
    set: (n) => t("update:modelValue", n)
  });
}
const bm = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, ym = { name: "Error" }, Vi = /* @__PURE__ */ M({
  ...ym,
  props: {
    error: {}
  },
  setup(e) {
    return (t, n) => t.error ? (k(), Q("div", bm, [
      pe(t.$slots, "default", {}, () => [
        mt(je(t.error), 1)
      ])
    ])) : De("", !0);
  }
}), wm = { class: "w-full" }, Sm = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, Em = {
  name: "Base",
  inheritAttrs: !1
}, Om = /* @__PURE__ */ M({
  ...Em,
  props: {
    description: {},
    error: {},
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, n) => (k(), Q("div", wm, [
      re("div", {
        class: nn(["mt-1 w-full rounded-md", { "shadow-sm": t.shadow }])
      }, [
        pe(t.$slots, "default")
      ], 2),
      t.description ? (k(), Q("p", Sm, je(t.description), 1)) : De("", !0),
      t.error ? (k(), be(Vi, {
        key: 1,
        error: t.error
      }, null, 8, ["error"])) : De("", !0)
    ]));
  }
}), xm = { name: "Actions" }, Tm = { class: "mt-8 border-t border-gray-200 pt-5" }, Am = { class: "flex justify-end" }, Cm = { class: "inline-flex" };
function Pm(e, t, n, r, o, a) {
  return k(), Q("div", Tm, [
    re("div", Am, [
      re("span", Cm, [
        pe(e.$slots, "default")
      ])
    ])
  ]);
}
const Rm = /* @__PURE__ */ Hh(xm, [["render", Pm]]), _m = { class: "relative flex items-start" }, Im = { class: "flex h-5 items-center" }, Fm = ["id", "value", "disabled", "readonly"], $m = { class: "ml-3" }, Dm = ["for"], Lm = { name: "Checkbox" }, jm = /* @__PURE__ */ M({
  ...Lm,
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
    const n = gm(e, t);
    return (r, o) => (k(), be(Om, Le(r.$props, { shadow: !1 }), {
      default: Ce(() => [
        re("div", _m, [
          re("div", Im, [
            _n(re("input", Le({
              id: r.id,
              "onUpdate:modelValue": o[0] || (o[0] = (a) => Zi(n) ? n.value = a : null),
              value: r.value,
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 accent-primary-600 focus:ring-primary-500",
              disabled: r.disabled,
              readonly: r.readonly
            }, r.$attrs), null, 16, Fm), [
              [el, oe(n)]
            ]),
            re("div", $m, [
              re("label", {
                for: r.id,
                class: "block text-sm font-medium leading-5 text-gray-700"
              }, je(r.label), 9, Dm)
            ])
          ])
        ])
      ]),
      _: 1
    }, 16));
  }
}), Nm = ["for"], Mm = { name: "Label" }, Bm = /* @__PURE__ */ M({
  ...Mm,
  props: {
    for: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (k(), Q("label", {
      for: t.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      pe(n.$slots, "default")
    ], 8, Nm));
  }
});
var zi = {}, qi = {};
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
})(qi);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const t = /* @__PURE__ */ n(qi);
  function n(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const r = t.default;
})(zi);
let Pn = zi;
var Um = (Pn.__esModule ? Pn : { default: Pn }).default, Wi = {}, Ki = {}, $r = { exports: {} }, N = String, Gi = function() {
  return { isColorSupported: !1, reset: N, bold: N, dim: N, italic: N, underline: N, inverse: N, hidden: N, strikethrough: N, black: N, red: N, green: N, yellow: N, blue: N, magenta: N, cyan: N, white: N, gray: N, bgBlack: N, bgRed: N, bgGreen: N, bgYellow: N, bgBlue: N, bgMagenta: N, bgCyan: N, bgWhite: N, blackBright: N, redBright: N, greenBright: N, yellowBright: N, blueBright: N, magentaBright: N, cyanBright: N, whiteBright: N, bgBlackBright: N, bgRedBright: N, bgGreenBright: N, bgYellowBright: N, bgBlueBright: N, bgMagentaBright: N, bgCyanBright: N, bgWhiteBright: N };
};
$r.exports = Gi();
$r.exports.createColors = Gi;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(s, c) {
    for (var u in c)
      Object.defineProperty(s, u, {
        enumerable: !0,
        get: c[u]
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
  const n = /* @__PURE__ */ r($r.exports);
  function r(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  let o = /* @__PURE__ */ new Set();
  function a(s, c, u) {
    typeof process < "u" && process.env.JEST_WORKER_ID || u && o.has(u) || (u && o.add(u), console.warn(""), c.forEach((d) => console.warn(s, "-", d)));
  }
  function i(s) {
    return n.default.dim(s);
  }
  const l = {
    info(s, c) {
      a(n.default.bold(n.default.cyan("info")), ...Array.isArray(s) ? [
        s
      ] : [
        c,
        s
      ]);
    },
    warn(s, c) {
      a(n.default.bold(n.default.yellow("warn")), ...Array.isArray(s) ? [
        s
      ] : [
        c,
        s
      ]);
    },
    risk(s, c) {
      a(n.default.bold(n.default.magenta("risk")), ...Array.isArray(s) ? [
        s
      ] : [
        c,
        s
      ]);
    }
  };
})(Ki);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(Ki);
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
})(Wi);
let Rn = Wi;
var km = (Rn.__esModule ? Rn : { default: Rn }).default;
Um.withOptions(
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
              ...km.indigo,
              ...(t = e == null ? void 0 : e.colors) == null ? void 0 : t.primary
            }
          }
        }
      }
    };
  }
);
const Hm = /* @__PURE__ */ M({
  __name: "CheckboxGroup",
  props: {
    form: {},
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = A({
      get: () => n.modelValue,
      set: (a) => {
        r("update:modelValue", a);
      }
    });
    return (a, i) => (k(!0), Q(Ve, null, At(e.items, (l, s) => {
      var c, u, d;
      return k(), be(oe(jm), {
        id: `${n.form._prefix}-${(c = l.label) != null ? c : l}`,
        key: s,
        modelValue: o.value,
        "onUpdate:modelValue": i[0] || (i[0] = (f) => o.value = f),
        value: (u = l.value) != null ? u : l,
        label: (d = l.label) != null ? d : l
      }, null, 8, ["id", "modelValue", "value", "label"]);
    }), 128));
  }
}), Ji = (e) => Object.keys(e).reduce((t, n) => {
  var r;
  return e[n].schema ? { ...t, ...Ji(e[n].schema) } : (t[n] = (r = e[n].value) != null ? r : null, t);
}, {}), Vm = (e) => {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let n = "";
  for (let r = 0; r < e; r++)
    n += t.charAt(Math.floor(Math.random() * t.length));
  return n;
}, Qo = (e) => Object.keys(e).reduce((t, n) => {
  var o, a, i;
  if (e[n].schema)
    return { ...t, ...Ji(e[n].schema) };
  if (e[n].component === Hm)
    return t[n] = (o = e[n].checked) != null ? o : [], t;
  const r = (a = e[n]) == null ? void 0 : a.fieldset;
  return r ? (Object.entries(r).forEach(([l, s]) => {
    var c;
    s != null && s.model ? t[s.model] = (c = s.value) != null ? c : null : t[l] = s;
  }), t) : (t[n] = (i = e[n].value) != null ? i : null, t);
}, {}), Dr = (e) => Object.entries(e).map(([t, n]) => {
  const r = n.hasOwnProperty("setup") ? { component: n } : n;
  return {
    name: t,
    definition: r
  };
});
function c0(e = {}, t = {}) {
  const n = t != null && t.precognition ? Th(t.method, t.url, Qo(e)) : Zo(Qo(e));
  return n._prefix = Vm(6), {
    elements: Dr(e),
    form: n,
    options: t
  };
}
const zm = { key: 0 }, Lr = /* @__PURE__ */ M({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    const t = e, n = ue("schemaOptions", {}), r = A(() => {
      var p;
      const h = (p = t.element.definition) == null ? void 0 : p.fieldset;
      return h ? Object.entries(h).reduce((v, [m, S]) => (S != null && S.model ? v[S.model] = t.form[S.model] : v[m] = t.form[m], v), {}) : {
        modelValue: t.form[t.element.name]
      };
    }), o = A(() => {
      var v;
      let h = Object.entries({
        id: `${t.form._prefix}-${t.element.name}`,
        ...t.element.definition,
        ...t.element.definition.props,
        ...r.value,
        schema: t.element.definition.schema,
        form: t.form,
        error: (v = i.value[0]) != null ? v : null
      }), p = t.element.definition.component.props;
      return Object.fromEntries(h.filter(([m]) => p.hasOwnProperty(m)));
    }), a = A(() => {
      var S, E, R;
      const h = (S = t.element.definition) == null ? void 0 : S.fieldset, p = (n == null ? void 0 : n.precognition) === !0 && ((E = t.element.definition.precognitive) != null ? E : (n == null ? void 0 : n.optInPrecognition) !== !0), v = (R = t.element.definition.precognitiveEvent) != null ? R : "change", m = ($, x = "modelValue") => ({
        [`update:${x}`]: (C) => {
          t.form[$] = C, p && v === "update" && t.form.validate($);
        },
        ...p && v !== "update" ? { [v]: () => t.form.validate($) } : {}
      });
      return h ? Object.entries(h).reduce(($, [x, C]) => {
        var T;
        const F = (T = C == null ? void 0 : C.model) != null ? T : x;
        return {
          ...$,
          ...m(F, F)
        };
      }, {}) : m(t.element.name);
    }), i = A(() => {
      var p;
      const h = (p = t.element.definition) == null ? void 0 : p.fieldset;
      return h ? Object.keys(h).map((v) => t.form.errors[v]).filter((v) => v) : [t.form.errors[t.element.name]];
    }), l = A(() => {
      var p;
      return ((p = t.element.definition.label) != null ? p : t.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }), s = !!t.element.definition.schema, c = A(() => t.element.definition.showLabel !== void 0 ? t.element.definition.showLabel : t.element.definition.component.name === "Hidden" ? !1 : !s), u = A(() => {
      if (t.element.definition.alert !== void 0) {
        const h = t.element.definition.alert;
        return h.visible = typeof h.visible == "function" ? h.visible : () => !0, h;
      }
      return null;
    }), d = I(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible : () => !0
    ), f = I(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible(t.form) : () => !0
    );
    return ve(t.form, (h) => {
      typeof d.value == "function" && (f.value = d.value(h));
    }), (h, p) => f.value ? (k(), Q("div", zm, [
      c.value ? (k(), be(oe(Bm), {
        key: 0,
        for: o.value.id
      }, {
        default: Ce(() => [
          mt(je(l.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : De("", !0),
      (k(), be(nl(e.element.definition.component), Le({
        key: e.element.name
      }, o.value, rl(a.value)), null, 16)),
      u.value && u.value.visible() ? (k(), be(oe(Bh), {
        key: 1,
        "without-icon": ""
      }, ol({
        default: Ce(() => [
          mt(je(u.value.text) + " ", 1)
        ]),
        _: 2
      }, [
        u.value.actionHref && u.value.actionText ? {
          name: "actions",
          fn: Ce(() => [
            rt(oe(kh), {
              external: u.value.externalAction,
              href: u.value.actionHref
            }, {
              default: Ce(() => [
                mt(je(u.value.actionText), 1)
              ]),
              _: 1
            }, 8, ["external", "href"])
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : De("", !0),
      o.value.hasOwnProperty("error") ? De("", !0) : (k(!0), Q(Ve, { key: 2 }, At(i.value, (v, m) => (k(), be(oe(Vi), {
        key: m,
        error: v
      }, null, 8, ["error"]))), 128))
    ])) : De("", !0);
  }
}), qm = { class: "mx-auto mt-6 max-w-md space-y-6" }, d0 = /* @__PURE__ */ M({
  __name: "FormBuilder",
  props: {
    schema: {},
    submit: { default: "Save" }
  },
  setup(e) {
    return me("schemaOptions", e.schema.options), (n, r) => (k(), Q("div", qm, [
      pe(n.$slots, "default", {}, () => [
        (k(!0), Q(Ve, null, At(e.schema.elements, (o, a) => (k(), be(Lr, {
          key: a,
          element: o,
          form: e.schema.form
        }, null, 8, ["element", "form"]))), 128))
      ]),
      pe(n.$slots, "actions-wrapper", {
        form: e.schema.form
      }, () => [
        rt(oe(Rm), null, {
          default: Ce(() => [
            pe(n.$slots, "actions", {
              form: e.schema.form
            }, () => [
              rt(oe(zh), {
                as: "button",
                type: "submit",
                loading: e.schema.form.processing
              }, {
                default: Ce(() => [
                  mt(je(e.submit), 1)
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
}), f0 = /* @__PURE__ */ M({
  __name: "Grid",
  props: {
    schema: {},
    form: {}
  },
  setup(e) {
    const n = Dr(e.schema);
    return (r, o) => (k(), Q("div", {
      class: nn(["grid gap-x-4 gap-y-6 md:grid-flow-col", "md:grid-cols-" + oe(n).length])
    }, [
      (k(!0), Q(Ve, null, At(oe(n), (a, i) => (k(), be(Lr, Le({
        key: i,
        element: a,
        form: e.form
      }, { ref_for: !0 }, r.$attrs), null, 16, ["element", "form"]))), 128))
    ], 2));
  }
}), Wm = { class: "mt-10" }, Km = {
  key: 0,
  class: "mt-1 whitespace-pre-line text-sm leading-6 text-gray-500"
}, Gm = { class: "mt-4 space-y-6" }, p0 = /* @__PURE__ */ M({
  __name: "Section",
  props: {
    schema: {},
    form: {},
    heading: {},
    description: {}
  },
  setup(e) {
    const n = Dr(e.schema);
    return (r, o) => (k(), Q("div", Wm, [
      re("label", null, je(e.heading), 1),
      e.description ? (k(), Q("p", Km, je(e.description), 1)) : De("", !0),
      re("div", Gm, [
        (k(!0), Q(Ve, null, At(oe(n), (a, i) => (k(), be(Lr, {
          key: i,
          element: a,
          form: e.form
        }, null, 8, ["element", "form"]))), 128))
      ])
    ]));
  }
});
export {
  Hm as CheckboxGroup,
  d0 as FormBuilder,
  f0 as Grid,
  p0 as Section,
  c0 as useSchema
};
