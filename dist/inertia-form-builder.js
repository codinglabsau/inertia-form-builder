import { useForm as Yo, Link as Ji } from "@inertiajs/vue3";
import * as Nr from "vue";
import { ref as _, toRaw as Ie, reactive as or, watchEffect as ee, defineComponent as M, computed as A, watch as de, provide as fe, h as K, cloneVNode as Qo, onMounted as Q, Fragment as Ve, inject as ie, onUnmounted as pe, nextTick as le, unref as re, getCurrentInstance as Xi, Teleport as Yi, normalizeClass as Zt, openBlock as B, createElementBlock as X, createElementVNode as ne, createCommentVNode as De, createVNode as nt, renderSlot as ue, createBlock as ve, mergeProps as Le, withCtx as Ce, createTextVNode as ht, toDisplayString as je, withDirectives as _n, isRef as Qi, vModelCheckbox as Zi, vShow as Mr, shallowRef as Zo, triggerRef as Br, onScopeDispose as el, renderList as Tt, resolveDynamicComponent as tl, toHandlers as nl, createSlots as rl } from "vue";
function ea(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ol } = Object.prototype, { getPrototypeOf: ar } = Object, { iterator: en, toStringTag: ta } = Symbol, tn = ((e) => (t) => {
  const n = ol.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Oe = (e) => (e = e.toLowerCase(), (t) => tn(t) === e), nn = (e) => (t) => typeof t === e, { isArray: ot } = Array, bt = nn("undefined");
function al(e) {
  return e !== null && !bt(e) && e.constructor !== null && !bt(e.constructor) && ce(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const na = Oe("ArrayBuffer");
function il(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && na(e.buffer), t;
}
const ll = nn("string"), ce = nn("function"), ra = nn("number"), rn = (e) => e !== null && typeof e == "object", sl = (e) => e === !0 || e === !1, Mt = (e) => {
  if (tn(e) !== "object")
    return !1;
  const t = ar(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ta in e) && !(en in e);
}, ul = Oe("Date"), cl = Oe("File"), dl = Oe("Blob"), fl = Oe("FileList"), pl = (e) => rn(e) && ce(e.pipe), hl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ce(e.append) && ((t = tn(e)) === "formdata" || t === "object" && ce(e.toString) && e.toString() === "[object FormData]"));
}, vl = Oe("URLSearchParams"), [ml, gl, bl, yl] = ["ReadableStream", "Request", "Response", "Headers"].map(Oe), wl = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function At(e, t, { allOwnKeys: n = !1 } = {}) {
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
function oa(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const We = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), aa = (e) => !bt(e) && e !== We;
function In() {
  const { caseless: e } = aa(this) && this || {}, t = {}, n = (r, o) => {
    const a = e && oa(t, o) || o;
    Mt(t[a]) && Mt(r) ? t[a] = In(t[a], r) : Mt(r) ? t[a] = In({}, r) : ot(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && At(arguments[r], n);
  return t;
}
const Sl = (e, t, n, { allOwnKeys: r } = {}) => (At(t, (o, a) => {
  n && ce(o) ? e[a] = ea(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), El = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ol = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, xl = (e, t, n, r) => {
  let o, a, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      i = o[a], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && ar(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Tl = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Al = (e) => {
  if (!e)
    return null;
  if (ot(e))
    return e;
  let t = e.length;
  if (!ra(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Cl = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ar(Uint8Array)), Rl = (e, t) => {
  const r = (e && e[en]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, Pl = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, _l = Oe("HTMLFormElement"), Il = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Ur = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Fl = Oe("RegExp"), ia = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  At(n, (o, a) => {
    let i;
    (i = t(o, a, e)) !== !1 && (r[a] = i || o);
  }), Object.defineProperties(e, r);
}, $l = (e) => {
  ia(e, (t, n) => {
    if (ce(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (!!ce(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Dl = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return ot(e) ? r(e) : r(String(e).split(t)), n;
}, Ll = () => {
}, jl = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Nl(e) {
  return !!(e && ce(e.append) && e[ta] === "FormData" && e[en]);
}
const Ml = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (rn(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = ot(r) ? [] : {};
        return At(r, (i, l) => {
          const s = n(i, o + 1);
          !bt(s) && (a[l] = s);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, Bl = Oe("AsyncFunction"), Ul = (e) => e && (rn(e) || ce(e)) && ce(e.then) && ce(e.catch), la = ((e, t) => e ? setImmediate : t ? ((n, r) => (We.addEventListener("message", ({ source: o, data: a }) => {
  o === We && a === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), We.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  ce(We.postMessage)
), kl = typeof queueMicrotask < "u" ? queueMicrotask.bind(We) : typeof process < "u" && process.nextTick || la, Hl = (e) => e != null && ce(e[en]), g = {
  isArray: ot,
  isArrayBuffer: na,
  isBuffer: al,
  isFormData: hl,
  isArrayBufferView: il,
  isString: ll,
  isNumber: ra,
  isBoolean: sl,
  isObject: rn,
  isPlainObject: Mt,
  isReadableStream: ml,
  isRequest: gl,
  isResponse: bl,
  isHeaders: yl,
  isUndefined: bt,
  isDate: ul,
  isFile: cl,
  isBlob: dl,
  isRegExp: Fl,
  isFunction: ce,
  isStream: pl,
  isURLSearchParams: vl,
  isTypedArray: Cl,
  isFileList: fl,
  forEach: At,
  merge: In,
  extend: Sl,
  trim: wl,
  stripBOM: El,
  inherits: Ol,
  toFlatObject: xl,
  kindOf: tn,
  kindOfTest: Oe,
  endsWith: Tl,
  toArray: Al,
  forEachEntry: Rl,
  matchAll: Pl,
  isHTMLForm: _l,
  hasOwnProperty: Ur,
  hasOwnProp: Ur,
  reduceDescriptors: ia,
  freezeMethods: $l,
  toObjectSet: Dl,
  toCamelCase: Il,
  noop: Ll,
  toFiniteNumber: jl,
  findKey: oa,
  global: We,
  isContextDefined: aa,
  isSpecCompliantForm: Nl,
  toJSONObject: Ml,
  isAsyncFn: Bl,
  isThenable: Ul,
  setImmediate: la,
  asap: kl,
  isIterable: Hl
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
const sa = D.prototype, ua = {};
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
  ua[e] = { value: e };
});
Object.defineProperties(D, ua);
Object.defineProperty(sa, "isAxiosError", { value: !0 });
D.from = (e, t, n, r, o, a) => {
  const i = Object.create(sa);
  return g.toFlatObject(e, i, function(s) {
    return s !== Error.prototype;
  }, (l) => l !== "isAxiosError"), D.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, a && Object.assign(i, a), i;
};
const Vl = null;
function Fn(e) {
  return g.isPlainObject(e) || g.isArray(e);
}
function ca(e) {
  return g.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function kr(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = ca(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function zl(e) {
  return g.isArray(e) && !e.some(Fn);
}
const ql = g.toFlatObject(g, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function on(e, t, n) {
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
  function c(h) {
    if (h === null)
      return "";
    if (g.isDate(h))
      return h.toISOString();
    if (!s && g.isBlob(h))
      throw new D("Blob is not supported. Use a Buffer instead.");
    return g.isArrayBuffer(h) || g.isTypedArray(h) ? s && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, v, m) {
    let y = h;
    if (h && !m && typeof h == "object") {
      if (g.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), h = JSON.stringify(h);
      else if (g.isArray(h) && zl(h) || (g.isFileList(h) || g.endsWith(v, "[]")) && (y = g.toArray(h)))
        return v = ca(v), y.forEach(function(P, $) {
          !(g.isUndefined(P) || P === null) && t.append(
            i === !0 ? kr([v], $, a) : i === null ? v : v + "[]",
            c(P)
          );
        }), !1;
    }
    return Fn(h) ? !0 : (t.append(kr(m, v, a), c(h)), !1);
  }
  const d = [], f = Object.assign(ql, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Fn
  });
  function p(h, v) {
    if (!g.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(h), g.forEach(h, function(y, w) {
        (!(g.isUndefined(y) || y === null) && o.call(
          t,
          y,
          g.isString(w) ? w.trim() : w,
          v,
          f
        )) === !0 && p(y, v ? v.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!g.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Hr(e) {
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
function ir(e, t) {
  this._pairs = [], e && on(e, this, t);
}
const da = ir.prototype;
da.append = function(t, n) {
  this._pairs.push([t, n]);
};
da.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Hr);
  } : Hr;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Wl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function fa(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Wl;
  g.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = g.isURLSearchParams(t) ? t.toString() : new ir(t, n).toString(r), a) {
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
const Vr = Gl, pa = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Kl = typeof URLSearchParams < "u" ? URLSearchParams : ir, Jl = typeof FormData < "u" ? FormData : null, Xl = typeof Blob < "u" ? Blob : null, Yl = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Kl,
    FormData: Jl,
    Blob: Xl
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, lr = typeof window < "u" && typeof document < "u", $n = typeof navigator == "object" && navigator || void 0, Ql = lr && (!$n || ["ReactNative", "NativeScript", "NS"].indexOf($n.product) < 0), Zl = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), es = lr && window.location.href || "http://localhost", ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: lr,
  hasStandardBrowserWebWorkerEnv: Zl,
  hasStandardBrowserEnv: Ql,
  navigator: $n,
  origin: es
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ...ts,
  ...Yl
};
function ns(e, t) {
  return on(e, new ae.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return ae.isNode && g.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function rs(e) {
  return g.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function os(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function ha(e) {
  function t(n, r, o, a) {
    let i = n[a++];
    if (i === "__proto__")
      return !0;
    const l = Number.isFinite(+i), s = a >= n.length;
    return i = !i && g.isArray(o) ? o.length : i, s ? (g.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !l) : ((!o[i] || !g.isObject(o[i])) && (o[i] = []), t(n, r, o[i], a) && g.isArray(o[i]) && (o[i] = os(o[i])), !l);
  }
  if (g.isFormData(e) && g.isFunction(e.entries)) {
    const n = {};
    return g.forEachEntry(e, (r, o) => {
      t(rs(r), o, n, 0);
    }), n;
  }
  return null;
}
function as(e, t, n) {
  if (g.isString(e))
    try {
      return (t || JSON.parse)(e), g.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const sr = {
  transitional: pa,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = g.isObject(t);
    if (a && g.isHTMLForm(t) && (t = new FormData(t)), g.isFormData(t))
      return o ? JSON.stringify(ha(t)) : t;
    if (g.isArrayBuffer(t) || g.isBuffer(t) || g.isStream(t) || g.isFile(t) || g.isBlob(t) || g.isReadableStream(t))
      return t;
    if (g.isArrayBufferView(t))
      return t.buffer;
    if (g.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ns(t, this.formSerializer).toString();
      if ((l = g.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const s = this.env && this.env.FormData;
        return on(
          l ? { "files[]": t } : t,
          s && new s(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), as(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || sr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
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
  sr.headers[e] = {};
});
const ur = sr, is = g.toObjectSet([
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
]), ls = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && is[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, zr = Symbol("internals");
function lt(e) {
  return e && String(e).trim().toLowerCase();
}
function Bt(e) {
  return e === !1 || e == null ? e : g.isArray(e) ? e.map(Bt) : String(e);
}
function ss(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const us = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function cs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ds(e, t) {
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
class an {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(l, s, c) {
      const u = lt(s);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = g.findKey(o, u);
      (!d || o[d] === void 0 || c === !0 || c === void 0 && o[d] !== !1) && (o[d || s] = Bt(l));
    }
    const i = (l, s) => g.forEach(l, (c, u) => a(c, u, s));
    if (g.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (g.isString(t) && (t = t.trim()) && !us(t))
      i(ls(t), n);
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
    if (t = lt(t), t) {
      const r = g.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return ss(o);
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
      return !!(r && this[r] !== void 0 && (!n || gn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(i) {
      if (i = lt(i), i) {
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
        n[i] = Bt(o), delete n[a];
        return;
      }
      const l = t ? cs(a) : String(a).trim();
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
    const r = (this[zr] = this[zr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const l = lt(i);
      r[l] || (ds(o, i), r[l] = !0);
    }
    return g.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
an.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
g.reduceDescriptors(an.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
g.freezeMethods(an);
const Se = an;
function bn(e, t) {
  const n = this || ur, r = t || n, o = Se.from(r.headers);
  let a = r.data;
  return g.forEach(e, function(l) {
    a = l.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function va(e) {
  return !!(e && e.__CANCEL__);
}
function at(e, t, n) {
  D.call(this, e == null ? "canceled" : e, D.ERR_CANCELED, t, n), this.name = "CanceledError";
}
g.inherits(at, D, {
  __CANCEL__: !0
});
function ma(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new D(
    "Request failed with status code " + n.status,
    [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function fs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ps(e, t) {
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
    const p = u && c - u;
    return p ? Math.round(f * 1e3 / p) : void 0;
  };
}
function hs(e, t) {
  let n = 0, r = 1e3 / t, o, a;
  const i = (c, u = Date.now()) => {
    n = u, o = null, a && (clearTimeout(a), a = null), e.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), d = u - n;
    d >= r ? i(c, u) : (o = c, a || (a = setTimeout(() => {
      a = null, i(o);
    }, r - d)));
  }, () => o && i(o)];
}
const Vt = (e, t, n = 3) => {
  let r = 0;
  const o = ps(50, 250);
  return hs((a) => {
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
}, qr = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Wr = (e) => (...t) => g.asap(() => e(...t)), vs = ae.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, ae.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ae.origin),
  ae.navigator && /(msie|trident)/i.test(ae.navigator.userAgent)
) : () => !0, ms = ae.hasStandardBrowserEnv ? {
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
function gs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function bs(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ga(e, t, n) {
  let r = !gs(t);
  return e && (r || n == !1) ? bs(e, t) : t;
}
const Gr = (e) => e instanceof Se ? { ...e } : e;
function Ke(e, t) {
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
    headers: (c, u, d) => o(Gr(c), Gr(u), d, !0)
  };
  return g.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = s[u] || o, f = d(e[u], t[u], u);
    g.isUndefined(f) && d !== l || (n[u] = f);
  }), n;
}
const ba = (e) => {
  const t = Ke({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: i, auth: l } = t;
  t.headers = i = Se.from(i), t.url = fa(ga(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let s;
  if (g.isFormData(n)) {
    if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((s = i.getContentType()) !== !1) {
      const [c, ...u] = s ? s.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (ae.hasStandardBrowserEnv && (r && g.isFunction(r) && (r = r(t)), r || r !== !1 && vs(t.url))) {
    const c = o && a && ms.read(a);
    c && i.set(o, c);
  }
  return t;
}, ys = typeof XMLHttpRequest < "u", ws = ys && function(e) {
  return new Promise(function(n, r) {
    const o = ba(e);
    let a = o.data;
    const i = Se.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: s, onDownloadProgress: c } = o, u, d, f, p, h;
    function v() {
      p && p(), h && h(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
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
      ma(function(F) {
        n(F), v();
      }, function(F) {
        r(F), v();
      }, O), m = null;
    }
    "onloadend" in m ? m.onloadend = y : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, m.onabort = function() {
      !m || (r(new D("Request aborted", D.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      r(new D("Network Error", D.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let $ = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const O = o.transitional || pa;
      o.timeoutErrorMessage && ($ = o.timeoutErrorMessage), r(new D(
        $,
        O.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
        e,
        m
      )), m = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in m && g.forEach(i.toJSON(), function($, O) {
      m.setRequestHeader(O, $);
    }), g.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), l && l !== "json" && (m.responseType = o.responseType), c && ([f, h] = Vt(c, !0), m.addEventListener("progress", f)), s && m.upload && ([d, p] = Vt(s), m.upload.addEventListener("progress", d), m.upload.addEventListener("loadend", p)), (o.cancelToken || o.signal) && (u = (P) => {
      !m || (r(!P || P.type ? new at(null, e, m) : P), m.abort(), m = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const w = fs(o.url);
    if (w && ae.protocols.indexOf(w) === -1) {
      r(new D("Unsupported protocol " + w + ":", D.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(a || null);
  });
}, Ss = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(c) {
      if (!o) {
        o = !0, l();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof D ? u : new at(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, a(new D(`timeout ${t} of ms exceeded`, D.ETIMEDOUT));
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
}, Es = Ss, Os = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, xs = async function* (e, t) {
  for await (const n of Ts(e))
    yield* Os(n, t);
}, Ts = async function* (e) {
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
  const o = xs(e, t);
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
}, ln = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ya = ln && typeof ReadableStream == "function", As = ln && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), wa = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Cs = ya && wa(() => {
  let e = !1;
  const t = new Request(ae.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Jr = 64 * 1024, Dn = ya && wa(() => g.isReadableStream(new Response("").body)), zt = {
  stream: Dn && ((e) => e.body)
};
ln && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !zt[t] && (zt[t] = g.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new D(`Response type '${t}' is not supported`, D.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Rs = async (e) => {
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
    return (await As(e)).byteLength;
}, Ps = async (e, t) => {
  const n = g.toFiniteNumber(e.getContentLength());
  return n == null ? Rs(t) : n;
}, _s = ln && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: a,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: s,
    responseType: c,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: f
  } = ba(e);
  c = c ? (c + "").toLowerCase() : "text";
  let p = Es([o, a && a.toAbortSignal()], i), h;
  const v = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let m;
  try {
    if (s && Cs && n !== "get" && n !== "head" && (m = await Ps(u, r)) !== 0) {
      let O = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), C;
      if (g.isFormData(r) && (C = O.headers.get("content-type")) && u.setContentType(C), O.body) {
        const [F, x] = qr(
          m,
          Vt(Wr(s))
        );
        r = Kr(O.body, Jr, F, x);
      }
    }
    g.isString(d) || (d = d ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    h = new Request(t, {
      ...f,
      signal: p,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: y ? d : void 0
    });
    let w = await fetch(h);
    const P = Dn && (c === "stream" || c === "response");
    if (Dn && (l || P && v)) {
      const O = {};
      ["status", "statusText", "headers"].forEach((L) => {
        O[L] = w[L];
      });
      const C = g.toFiniteNumber(w.headers.get("content-length")), [F, x] = l && qr(
        C,
        Vt(Wr(l), !0)
      ) || [];
      w = new Response(
        Kr(w.body, Jr, F, () => {
          x && x(), v && v();
        }),
        O
      );
    }
    c = c || "text";
    let $ = await zt[g.findKey(zt, c) || "text"](w, e);
    return !P && v && v(), await new Promise((O, C) => {
      ma(O, C, {
        data: $,
        headers: Se.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: h
      });
    });
  } catch (y) {
    throw v && v(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new D("Network Error", D.ERR_NETWORK, e, h),
      {
        cause: y.cause || y
      }
    ) : D.from(y, y && y.code, e, h);
  }
}), Ln = {
  http: Vl,
  xhr: ws,
  fetch: _s
};
g.forEach(Ln, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Xr = (e) => `- ${e}`, Is = (e) => g.isFunction(e) || e === null || e === !1, Sa = {
  getAdapter: (e) => {
    e = g.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let i;
      if (r = n, !Is(n) && (r = Ln[(i = String(n)).toLowerCase()], r === void 0))
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
` + a.map(Xr).join(`
`) : " " + Xr(a[0]) : "as no adapter specified";
      throw new D(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ln
};
function yn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new at(null, e);
}
function Yr(e) {
  return yn(e), e.headers = Se.from(e.headers), e.data = bn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Sa.getAdapter(e.adapter || ur.adapter)(e).then(function(r) {
    return yn(e), r.data = bn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Se.from(r.headers), r;
  }, function(r) {
    return va(r) || (yn(e), r && r.response && (r.response.data = bn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Se.from(r.response.headers))), Promise.reject(r);
  });
}
const Ea = "1.9.0", sn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  sn[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Qr = {};
sn.transitional = function(t, n, r) {
  function o(a, i) {
    return "[Axios v" + Ea + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return (a, i, l) => {
    if (t === !1)
      throw new D(
        o(i, " has been removed" + (n ? " in " + n : "")),
        D.ERR_DEPRECATED
      );
    return n && !Qr[i] && (Qr[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, i, l) : !0;
  };
};
sn.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Fs(e, t, n) {
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
  assertOptions: Fs,
  validators: sn
}, Te = Ut.validators;
class qt {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Vr(),
      response: new Vr()
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
      silentJSONParsing: Te.transitional(Te.boolean),
      forcedJSONParsing: Te.transitional(Te.boolean),
      clarifyTimeoutError: Te.transitional(Te.boolean)
    }, !1), o != null && (g.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Ut.assertOptions(o, {
      encode: Te.function,
      serialize: Te.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ut.assertOptions(n, {
      baseUrl: Te.spelling("baseURL"),
      withXsrfToken: Te.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = a && g.merge(
      a.common,
      a[n.method]
    );
    a && g.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete a[h];
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
      const h = [Yr.bind(this), void 0];
      for (h.unshift.apply(h, l), h.push.apply(h, c), f = h.length, u = Promise.resolve(n); d < f; )
        u = u.then(h[d++], h[d++]);
      return u;
    }
    f = l.length;
    let p = n;
    for (d = 0; d < f; ) {
      const h = l[d++], v = l[d++];
      try {
        p = h(p);
      } catch (m) {
        v.call(this, m);
        break;
      }
    }
    try {
      u = Yr.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Ke(this.defaults, t);
    const n = ga(t.baseURL, t.url, t.allowAbsoluteUrls);
    return fa(n, t.params, t.paramsSerializer);
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
class cr {
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
      token: new cr(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const $s = cr;
function Ds(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ls(e) {
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
const js = jn;
function Oa(e) {
  const t = new kt(e), n = ea(kt.prototype.request, t);
  return g.extend(n, kt.prototype, t, { allOwnKeys: !0 }), g.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Oa(Ke(e, o));
  }, n;
}
const Z = Oa(ur);
Z.Axios = kt;
Z.CanceledError = at;
Z.CancelToken = $s;
Z.isCancel = va;
Z.VERSION = Ea;
Z.toFormData = on;
Z.AxiosError = D;
Z.Cancel = Z.CanceledError;
Z.all = function(t) {
  return Promise.all(t);
};
Z.spread = Ds;
Z.isAxiosError = Ls;
Z.mergeConfig = Ke;
Z.AxiosHeaders = Se;
Z.formToJSON = (e) => ha(g.isHTMLForm(e) ? new FormData(e) : e);
Z.getAdapter = Sa.getAdapter;
Z.HttpStatusCode = js;
Z.default = Z;
const xa = Z, {
  Axios: Ym,
  AxiosError: Qm,
  CanceledError: Zm,
  isCancel: Ta,
  CancelToken: e0,
  VERSION: t0,
  all: n0,
  Cancel: r0,
  isAxiosError: Aa,
  spread: o0,
  toFormData: a0,
  AxiosHeaders: i0,
  HttpStatusCode: l0,
  formToJSON: s0,
  getAdapter: u0,
  mergeConfig: Ns
} = xa;
var Ms = typeof global == "object" && global && global.Object === Object && global;
const Ca = Ms;
var Bs = typeof self == "object" && self && self.Object === Object && self, Us = Ca || Bs || Function("return this")();
const xe = Us;
var ks = xe.Symbol;
const ye = ks;
var Ra = Object.prototype, Hs = Ra.hasOwnProperty, Vs = Ra.toString, st = ye ? ye.toStringTag : void 0;
function zs(e) {
  var t = Hs.call(e, st), n = e[st];
  try {
    e[st] = void 0;
    var r = !0;
  } catch {
  }
  var o = Vs.call(e);
  return r && (t ? e[st] = n : delete e[st]), o;
}
var qs = Object.prototype, Ws = qs.toString;
function Gs(e) {
  return Ws.call(e);
}
var Ks = "[object Null]", Js = "[object Undefined]", Zr = ye ? ye.toStringTag : void 0;
function Xe(e) {
  return e == null ? e === void 0 ? Js : Ks : Zr && Zr in Object(e) ? zs(e) : Gs(e);
}
function Pe(e) {
  return e != null && typeof e == "object";
}
var Xs = "[object Symbol]";
function un(e) {
  return typeof e == "symbol" || Pe(e) && Xe(e) == Xs;
}
function Pa(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ys = Array.isArray;
const Ee = Ys;
var Qs = 1 / 0, eo = ye ? ye.prototype : void 0, to = eo ? eo.toString : void 0;
function _a(e) {
  if (typeof e == "string")
    return e;
  if (Ee(e))
    return Pa(e, _a) + "";
  if (un(e))
    return to ? to.call(e) : "";
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
function me(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var no = 0 / 0, ru = /^[-+]0x[0-9a-f]+$/i, ou = /^0b[01]+$/i, au = /^0o[0-7]+$/i, iu = parseInt;
function ro(e) {
  if (typeof e == "number")
    return e;
  if (un(e))
    return no;
  if (me(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = me(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = nu(e);
  var n = ou.test(e);
  return n || au.test(e) ? iu(e.slice(2), n ? 2 : 8) : ru.test(e) ? no : +e;
}
function Ia(e) {
  return e;
}
var lu = "[object AsyncFunction]", su = "[object Function]", uu = "[object GeneratorFunction]", cu = "[object Proxy]";
function dr(e) {
  if (!me(e))
    return !1;
  var t = Xe(e);
  return t == su || t == uu || t == lu || t == cu;
}
var du = xe["__core-js_shared__"];
const wn = du;
var oo = function() {
  var e = /[^.]+$/.exec(wn && wn.keys && wn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function fu(e) {
  return !!oo && oo in e;
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
  if (!me(e) || fu(e))
    return !1;
  var t = dr(e) ? Su : mu;
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
const Nn = xu;
var ao = Object.create, Tu = function() {
  function e() {
  }
  return function(t) {
    if (!me(t))
      return {};
    if (ao)
      return ao(t);
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
function Fa(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Ru = 800, Pu = 16, _u = Date.now;
function Iu(e) {
  var t = 0, n = 0;
  return function() {
    var r = _u(), o = Pu - (r - n);
    if (n = r, o > 0) {
      if (++t >= Ru)
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
const Wt = $u;
var Du = Wt ? function(e, t) {
  return Wt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Fu(t),
    writable: !0
  });
} : Ia;
const Lu = Du;
var ju = Iu(Lu);
const $a = ju;
function Nu(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Mu = 9007199254740991, Bu = /^(?:0|[1-9]\d*)$/;
function fr(e, t) {
  var n = typeof e;
  return t = t == null ? Mu : t, !!t && (n == "number" || n != "symbol" && Bu.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function pr(e, t, n) {
  t == "__proto__" && Wt ? Wt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Ct(e, t) {
  return e === t || e !== e && t !== t;
}
var Uu = Object.prototype, ku = Uu.hasOwnProperty;
function hr(e, t, n) {
  var r = e[t];
  (!(ku.call(e, t) && Ct(r, n)) || n === void 0 && !(t in e)) && pr(e, t, n);
}
function it(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var l = t[a], s = r ? r(n[l], e[l], l, n, e) : void 0;
    s === void 0 && (s = e[l]), o ? pr(n, l, s) : hr(n, l, s);
  }
  return n;
}
var io = Math.max;
function Da(e, t, n) {
  return t = io(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = io(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(i), Cu(e, this, l);
  };
}
function Hu(e, t) {
  return $a(Da(e, t, Ia), e + "");
}
var Vu = 9007199254740991;
function La(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Vu;
}
function cn(e) {
  return e != null && La(e.length) && !dr(e);
}
function zu(e, t, n) {
  if (!me(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? cn(n) && fr(t, n.length) : r == "string" && t in n) ? Ct(n[t], e) : !1;
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
function vr(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Wu;
  return e === n;
}
function Gu(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Ku = "[object Arguments]";
function lo(e) {
  return Pe(e) && Xe(e) == Ku;
}
var ja = Object.prototype, Ju = ja.hasOwnProperty, Xu = ja.propertyIsEnumerable, Yu = lo(function() {
  return arguments;
}()) ? lo : function(e) {
  return Pe(e) && Ju.call(e, "callee") && !Xu.call(e, "callee");
};
const Gt = Yu;
function Qu() {
  return !1;
}
var Na = typeof exports == "object" && exports && !exports.nodeType && exports, so = Na && typeof module == "object" && module && !module.nodeType && module, Zu = so && so.exports === Na, uo = Zu ? xe.Buffer : void 0, ec = uo ? uo.isBuffer : void 0, tc = ec || Qu;
const yt = tc;
var nc = "[object Arguments]", rc = "[object Array]", oc = "[object Boolean]", ac = "[object Date]", ic = "[object Error]", lc = "[object Function]", sc = "[object Map]", uc = "[object Number]", cc = "[object Object]", dc = "[object RegExp]", fc = "[object Set]", pc = "[object String]", hc = "[object WeakMap]", vc = "[object ArrayBuffer]", mc = "[object DataView]", gc = "[object Float32Array]", bc = "[object Float64Array]", yc = "[object Int8Array]", wc = "[object Int16Array]", Sc = "[object Int32Array]", Ec = "[object Uint8Array]", Oc = "[object Uint8ClampedArray]", xc = "[object Uint16Array]", Tc = "[object Uint32Array]", q = {};
q[gc] = q[bc] = q[yc] = q[wc] = q[Sc] = q[Ec] = q[Oc] = q[xc] = q[Tc] = !0;
q[nc] = q[rc] = q[vc] = q[oc] = q[mc] = q[ac] = q[ic] = q[lc] = q[sc] = q[uc] = q[cc] = q[dc] = q[fc] = q[pc] = q[hc] = !1;
function Ac(e) {
  return Pe(e) && La(e.length) && !!q[Xe(e)];
}
function mr(e) {
  return function(t) {
    return e(t);
  };
}
var Ma = typeof exports == "object" && exports && !exports.nodeType && exports, vt = Ma && typeof module == "object" && module && !module.nodeType && module, Cc = vt && vt.exports === Ma, Sn = Cc && Ca.process, Rc = function() {
  try {
    var e = vt && vt.require && vt.require("util").types;
    return e || Sn && Sn.binding && Sn.binding("util");
  } catch {
  }
}();
const rt = Rc;
var co = rt && rt.isTypedArray, Pc = co ? mr(co) : Ac;
const gr = Pc;
var _c = Object.prototype, Ic = _c.hasOwnProperty;
function Ba(e, t) {
  var n = Ee(e), r = !n && Gt(e), o = !n && !r && yt(e), a = !n && !r && !o && gr(e), i = n || r || o || a, l = i ? Gu(e.length, String) : [], s = l.length;
  for (var c in e)
    (t || Ic.call(e, c)) && !(i && (c == "length" || o && (c == "offset" || c == "parent") || a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || fr(c, s))) && l.push(c);
  return l;
}
function Ua(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Fc = Ua(Object.keys, Object);
const $c = Fc;
var Dc = Object.prototype, Lc = Dc.hasOwnProperty;
function jc(e) {
  if (!vr(e))
    return $c(e);
  var t = [];
  for (var n in Object(e))
    Lc.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function br(e) {
  return cn(e) ? Ba(e) : jc(e);
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
  if (!me(e))
    return Nc(e);
  var t = vr(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Bc.call(e, r)) || n.push(r);
  return n;
}
function Rt(e) {
  return cn(e) ? Ba(e, !0) : Uc(e);
}
var kc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Hc = /^\w*$/;
function Vc(e, t) {
  if (Ee(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || un(e) ? !0 : Hc.test(e) || !kc.test(e) || t != null && e in Object(t);
}
var zc = Qe(Object, "create");
const wt = zc;
function qc() {
  this.__data__ = wt ? wt(null) : {}, this.size = 0;
}
function Wc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Gc = "__lodash_hash_undefined__", Kc = Object.prototype, Jc = Kc.hasOwnProperty;
function Xc(e) {
  var t = this.__data__;
  if (wt) {
    var n = t[e];
    return n === Gc ? void 0 : n;
  }
  return Jc.call(t, e) ? t[e] : void 0;
}
var Yc = Object.prototype, Qc = Yc.hasOwnProperty;
function Zc(e) {
  var t = this.__data__;
  return wt ? t[e] !== void 0 : Qc.call(t, e);
}
var ed = "__lodash_hash_undefined__";
function td(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = wt && t === void 0 ? ed : t, this;
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
function dn(e, t) {
  for (var n = e.length; n--; )
    if (Ct(e[n][0], t))
      return n;
  return -1;
}
var rd = Array.prototype, od = rd.splice;
function ad(e) {
  var t = this.__data__, n = dn(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : od.call(t, n, 1), --this.size, !0;
}
function id(e) {
  var t = this.__data__, n = dn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ld(e) {
  return dn(this.__data__, e) > -1;
}
function sd(e, t) {
  var n = this.__data__, r = dn(n, e);
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
const St = ud;
function cd() {
  this.size = 0, this.__data__ = {
    hash: new Je(),
    map: new (St || Ne)(),
    string: new Je()
  };
}
function dd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function fn(e, t) {
  var n = e.__data__;
  return dd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function fd(e) {
  var t = fn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function pd(e) {
  return fn(this, e).get(e);
}
function hd(e) {
  return fn(this, e).has(e);
}
function vd(e, t) {
  var n = fn(this, e), r = n.size;
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
function yr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(md);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (yr.Cache || Me)(), n;
}
yr.Cache = Me;
var gd = 500;
function bd(e) {
  var t = yr(e, function(r) {
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
  return e == null ? "" : _a(e);
}
function pn(e, t) {
  return Ee(e) ? e : Vc(e, t) ? [e] : Ed(Od(e));
}
var xd = 1 / 0;
function wr(e) {
  if (typeof e == "string" || un(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -xd ? "-0" : t;
}
function ka(e, t) {
  t = pn(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[wr(t[n++])];
  return n && n == r ? e : void 0;
}
function Kt(e, t, n) {
  var r = e == null ? void 0 : ka(e, t);
  return r === void 0 ? n : r;
}
function Sr(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var fo = ye ? ye.isConcatSpreadable : void 0;
function Td(e) {
  return Ee(e) || Gt(e) || !!(fo && e && e[fo]);
}
function Ha(e, t, n, r, o) {
  var a = -1, i = e.length;
  for (n || (n = Td), o || (o = []); ++a < i; ) {
    var l = e[a];
    t > 0 && n(l) ? t > 1 ? Ha(l, t - 1, n, r, o) : Sr(o, l) : r || (o[o.length] = l);
  }
  return o;
}
function Ad(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ha(e, 1) : [];
}
function Cd(e) {
  return $a(Da(e, void 0, Ad), e + "");
}
var Rd = Ua(Object.getPrototypeOf, Object);
const Er = Rd;
var Pd = "[object Object]", _d = Function.prototype, Id = Object.prototype, Va = _d.toString, Fd = Id.hasOwnProperty, $d = Va.call(Object);
function za(e) {
  if (!Pe(e) || Xe(e) != Pd)
    return !1;
  var t = Er(e);
  if (t === null)
    return !0;
  var n = Fd.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Va.call(n) == $d;
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
    if (!St || r.length < Bd - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Me(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Re(e) {
  var t = this.__data__ = new Ne(e);
  this.size = t.size;
}
Re.prototype.clear = Ld;
Re.prototype.delete = jd;
Re.prototype.get = Nd;
Re.prototype.has = Md;
Re.prototype.set = Ud;
function kd(e, t) {
  return e && it(t, br(t), e);
}
function Hd(e, t) {
  return e && it(t, Rt(t), e);
}
var qa = typeof exports == "object" && exports && !exports.nodeType && exports, po = qa && typeof module == "object" && module && !module.nodeType && module, Vd = po && po.exports === qa, ho = Vd ? xe.Buffer : void 0, vo = ho ? ho.allocUnsafe : void 0;
function Wa(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = vo ? vo(n) : new e.constructor(n);
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
var qd = Object.prototype, Wd = qd.propertyIsEnumerable, mo = Object.getOwnPropertySymbols, Gd = mo ? function(e) {
  return e == null ? [] : (e = Object(e), zd(mo(e), function(t) {
    return Wd.call(e, t);
  }));
} : Ga;
const Or = Gd;
function Kd(e, t) {
  return it(e, Or(e), t);
}
var Jd = Object.getOwnPropertySymbols, Xd = Jd ? function(e) {
  for (var t = []; e; )
    Sr(t, Or(e)), e = Er(e);
  return t;
} : Ga;
const Ka = Xd;
function Yd(e, t) {
  return it(e, Ka(e), t);
}
function Ja(e, t, n) {
  var r = t(e);
  return Ee(e) ? r : Sr(r, n(e));
}
function Mn(e) {
  return Ja(e, br, Or);
}
function Xa(e) {
  return Ja(e, Rt, Ka);
}
var Qd = Qe(xe, "DataView");
const Bn = Qd;
var Zd = Qe(xe, "Promise");
const Un = Zd;
var ef = Qe(xe, "Set");
const kn = ef;
var go = "[object Map]", tf = "[object Object]", bo = "[object Promise]", yo = "[object Set]", wo = "[object WeakMap]", So = "[object DataView]", nf = Ye(Bn), rf = Ye(St), of = Ye(Un), af = Ye(kn), lf = Ye(Nn), qe = Xe;
(Bn && qe(new Bn(new ArrayBuffer(1))) != So || St && qe(new St()) != go || Un && qe(Un.resolve()) != bo || kn && qe(new kn()) != yo || Nn && qe(new Nn()) != wo) && (qe = function(e) {
  var t = Xe(e), n = t == tf ? e.constructor : void 0, r = n ? Ye(n) : "";
  if (r)
    switch (r) {
      case nf:
        return So;
      case rf:
        return go;
      case of:
        return bo;
      case af:
        return yo;
      case lf:
        return wo;
    }
  return t;
});
const Et = qe;
var sf = Object.prototype, uf = sf.hasOwnProperty;
function cf(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && uf.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var df = xe.Uint8Array;
const Jt = df;
function xr(e) {
  var t = new e.constructor(e.byteLength);
  return new Jt(t).set(new Jt(e)), t;
}
function ff(e, t) {
  var n = t ? xr(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var pf = /\w*$/;
function hf(e) {
  var t = new e.constructor(e.source, pf.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Eo = ye ? ye.prototype : void 0, Oo = Eo ? Eo.valueOf : void 0;
function vf(e) {
  return Oo ? Object(Oo.call(e)) : {};
}
function Ya(e, t) {
  var n = t ? xr(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var mf = "[object Boolean]", gf = "[object Date]", bf = "[object Map]", yf = "[object Number]", wf = "[object RegExp]", Sf = "[object Set]", Ef = "[object String]", Of = "[object Symbol]", xf = "[object ArrayBuffer]", Tf = "[object DataView]", Af = "[object Float32Array]", Cf = "[object Float64Array]", Rf = "[object Int8Array]", Pf = "[object Int16Array]", _f = "[object Int32Array]", If = "[object Uint8Array]", Ff = "[object Uint8ClampedArray]", $f = "[object Uint16Array]", Df = "[object Uint32Array]";
function Lf(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case xf:
      return xr(e);
    case mf:
    case gf:
      return new r(+e);
    case Tf:
      return ff(e, n);
    case Af:
    case Cf:
    case Rf:
    case Pf:
    case _f:
    case If:
    case Ff:
    case $f:
    case Df:
      return Ya(e, n);
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
function Qa(e) {
  return typeof e.constructor == "function" && !vr(e) ? Au(Er(e)) : {};
}
var jf = "[object Map]";
function Nf(e) {
  return Pe(e) && Et(e) == jf;
}
var xo = rt && rt.isMap, Mf = xo ? mr(xo) : Nf;
const Bf = Mf;
var Uf = "[object Set]";
function kf(e) {
  return Pe(e) && Et(e) == Uf;
}
var To = rt && rt.isSet, Hf = To ? mr(To) : kf;
const Vf = Hf;
var zf = 1, qf = 2, Wf = 4, Za = "[object Arguments]", Gf = "[object Array]", Kf = "[object Boolean]", Jf = "[object Date]", Xf = "[object Error]", ei = "[object Function]", Yf = "[object GeneratorFunction]", Qf = "[object Map]", Zf = "[object Number]", ti = "[object Object]", ep = "[object RegExp]", tp = "[object Set]", np = "[object String]", rp = "[object Symbol]", op = "[object WeakMap]", ap = "[object ArrayBuffer]", ip = "[object DataView]", lp = "[object Float32Array]", sp = "[object Float64Array]", up = "[object Int8Array]", cp = "[object Int16Array]", dp = "[object Int32Array]", fp = "[object Uint8Array]", pp = "[object Uint8ClampedArray]", hp = "[object Uint16Array]", vp = "[object Uint32Array]", z = {};
z[Za] = z[Gf] = z[ap] = z[ip] = z[Kf] = z[Jf] = z[lp] = z[sp] = z[up] = z[cp] = z[dp] = z[Qf] = z[Zf] = z[ti] = z[ep] = z[tp] = z[np] = z[rp] = z[fp] = z[pp] = z[hp] = z[vp] = !0;
z[Xf] = z[ei] = z[op] = !1;
function mt(e, t, n, r, o, a) {
  var i, l = t & zf, s = t & qf, c = t & Wf;
  if (n && (i = o ? n(e, r, o, a) : n(e)), i !== void 0)
    return i;
  if (!me(e))
    return e;
  var u = Ee(e);
  if (u) {
    if (i = cf(e), !l)
      return Fa(e, i);
  } else {
    var d = Et(e), f = d == ei || d == Yf;
    if (yt(e))
      return Wa(e, l);
    if (d == ti || d == Za || f && !o) {
      if (i = s || f ? {} : Qa(e), !l)
        return s ? Yd(e, Hd(i, e)) : Kd(e, kd(i, e));
    } else {
      if (!z[d])
        return o ? e : {};
      i = Lf(e, d, l);
    }
  }
  a || (a = new Re());
  var p = a.get(e);
  if (p)
    return p;
  a.set(e, i), Vf(e) ? e.forEach(function(m) {
    i.add(mt(m, t, n, m, e, a));
  }) : Bf(e) && e.forEach(function(m, y) {
    i.set(y, mt(m, t, n, y, e, a));
  });
  var h = c ? s ? Xa : Mn : s ? Rt : br, v = u ? void 0 : h(e);
  return Nu(v || e, function(m, y) {
    v && (y = m, m = e[y]), hr(i, y, mt(m, t, n, y, e, a));
  }), i;
}
var mp = 1, gp = 4;
function et(e) {
  return mt(e, mp | gp);
}
var bp = "__lodash_hash_undefined__";
function yp(e) {
  return this.__data__.set(e, bp), this;
}
function wp(e) {
  return this.__data__.has(e);
}
function Xt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Me(); ++t < n; )
    this.add(e[t]);
}
Xt.prototype.add = Xt.prototype.push = yp;
Xt.prototype.has = wp;
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
function ni(e, t, n, r, o, a) {
  var i = n & Op, l = e.length, s = t.length;
  if (l != s && !(i && s > l))
    return !1;
  var c = a.get(e), u = a.get(t);
  if (c && u)
    return c == t && u == e;
  var d = -1, f = !0, p = n & xp ? new Xt() : void 0;
  for (a.set(e, t), a.set(t, e); ++d < l; ) {
    var h = e[d], v = t[d];
    if (r)
      var m = i ? r(v, h, d, t, e, a) : r(h, v, d, e, t, a);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Sp(t, function(y, w) {
        if (!Ep(p, w) && (h === y || o(h, y, n, r, a)))
          return p.push(w);
      })) {
        f = !1;
        break;
      }
    } else if (!(h === v || o(h, v, n, r, a))) {
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
var Cp = 1, Rp = 2, Pp = "[object Boolean]", _p = "[object Date]", Ip = "[object Error]", Fp = "[object Map]", $p = "[object Number]", Dp = "[object RegExp]", Lp = "[object Set]", jp = "[object String]", Np = "[object Symbol]", Mp = "[object ArrayBuffer]", Bp = "[object DataView]", Ao = ye ? ye.prototype : void 0, En = Ao ? Ao.valueOf : void 0;
function Up(e, t, n, r, o, a, i) {
  switch (n) {
    case Bp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Mp:
      return !(e.byteLength != t.byteLength || !a(new Jt(e), new Jt(t)));
    case Pp:
    case _p:
    case $p:
      return Ct(+e, +t);
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
      r |= Rp, i.set(e, t);
      var u = ni(l(e), l(t), r, o, a, i);
      return i.delete(e), u;
    case Np:
      if (En)
        return En.call(e) == En.call(t);
  }
  return !1;
}
var kp = 1, Hp = Object.prototype, Vp = Hp.hasOwnProperty;
function zp(e, t, n, r, o, a) {
  var i = n & kp, l = Mn(e), s = l.length, c = Mn(t), u = c.length;
  if (s != u && !i)
    return !1;
  for (var d = s; d--; ) {
    var f = l[d];
    if (!(i ? f in t : Vp.call(t, f)))
      return !1;
  }
  var p = a.get(e), h = a.get(t);
  if (p && h)
    return p == t && h == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var m = i; ++d < s; ) {
    f = l[d];
    var y = e[f], w = t[f];
    if (r)
      var P = i ? r(w, y, f, t, e, a) : r(y, w, f, e, t, a);
    if (!(P === void 0 ? y === w || o(y, w, n, r, a) : P)) {
      v = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (v && !m) {
    var $ = e.constructor, O = t.constructor;
    $ != O && "constructor" in e && "constructor" in t && !(typeof $ == "function" && $ instanceof $ && typeof O == "function" && O instanceof O) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var qp = 1, Co = "[object Arguments]", Ro = "[object Array]", Dt = "[object Object]", Wp = Object.prototype, Po = Wp.hasOwnProperty;
function Gp(e, t, n, r, o, a) {
  var i = Ee(e), l = Ee(t), s = i ? Ro : Et(e), c = l ? Ro : Et(t);
  s = s == Co ? Dt : s, c = c == Co ? Dt : c;
  var u = s == Dt, d = c == Dt, f = s == c;
  if (f && yt(e)) {
    if (!yt(t))
      return !1;
    i = !0, u = !1;
  }
  if (f && !u)
    return a || (a = new Re()), i || gr(e) ? ni(e, t, n, r, o, a) : Up(e, t, s, n, r, o, a);
  if (!(n & qp)) {
    var p = u && Po.call(e, "__wrapped__"), h = d && Po.call(t, "__wrapped__");
    if (p || h) {
      var v = p ? e.value() : e, m = h ? t.value() : t;
      return a || (a = new Re()), o(v, m, n, r, a);
    }
  }
  return f ? (a || (a = new Re()), zp(e, t, n, r, o, a)) : !1;
}
function ri(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Pe(e) && !Pe(t) ? e !== e && t !== t : Gp(e, t, n, r, ri, o);
}
function Kp(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), i = r(t), l = i.length; l--; ) {
      var s = i[e ? l : ++o];
      if (n(a[s], s, a) === !1)
        break;
    }
    return t;
  };
}
var Jp = Kp();
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
  t = ro(t) || 0, me(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? Zp(ro(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
  function p(C) {
    var F = r, x = o;
    return r = o = void 0, c = C, i = e.apply(x, F), i;
  }
  function h(C) {
    return c = C, l = setTimeout(y, t), u ? p(C) : i;
  }
  function v(C) {
    var F = C - s, x = C - c, L = t - F;
    return d ? eh(L, a - x) : L;
  }
  function m(C) {
    var F = C - s, x = C - c;
    return s === void 0 || F >= t || F < 0 || d && x >= a;
  }
  function y() {
    var C = On();
    if (m(C))
      return w(C);
    l = setTimeout(y, v(C));
  }
  function w(C) {
    return l = void 0, f && r ? p(C) : (r = o = void 0, i);
  }
  function P() {
    l !== void 0 && clearTimeout(l), c = 0, r = s = o = l = void 0;
  }
  function $() {
    return l === void 0 ? i : w(On());
  }
  function O() {
    var C = On(), F = m(C);
    if (r = arguments, o = this, s = C, F) {
      if (l === void 0)
        return h(s);
      if (d)
        return clearTimeout(l), l = setTimeout(y, t), p(s);
    }
    return l === void 0 && (l = setTimeout(y, t)), i;
  }
  return O.cancel = P, O.flush = $, O;
}
function Hn(e, t, n) {
  (n !== void 0 && !Ct(e[t], n) || n === void 0 && !(t in e)) && pr(e, t, n);
}
function nh(e) {
  return Pe(e) && cn(e);
}
function Vn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function rh(e) {
  return it(e, Rt(e));
}
function oh(e, t, n, r, o, a, i) {
  var l = Vn(e, n), s = Vn(t, n), c = i.get(s);
  if (c) {
    Hn(e, n, c);
    return;
  }
  var u = a ? a(l, s, n + "", e, t, i) : void 0, d = u === void 0;
  if (d) {
    var f = Ee(s), p = !f && yt(s), h = !f && !p && gr(s);
    u = s, f || p || h ? Ee(l) ? u = l : nh(l) ? u = Fa(l) : p ? (d = !1, u = Wa(s, !0)) : h ? (d = !1, u = Ya(s, !0)) : u = [] : za(s) || Gt(s) ? (u = l, Gt(l) ? u = rh(l) : (!me(l) || dr(l)) && (u = Qa(s))) : d = !1;
  }
  d && (i.set(s, u), o(u, s, r, a, i), i.delete(s)), Hn(e, n, u);
}
function oi(e, t, n, r, o) {
  e !== t && Xp(t, function(a, i) {
    if (o || (o = new Re()), me(a))
      oh(e, t, i, n, oi, r, o);
    else {
      var l = r ? r(Vn(e, i), a, i + "", e, t, o) : void 0;
      l === void 0 && (l = a), Hn(e, i, l);
    }
  }, Rt);
}
function ah(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function ih(e, t) {
  return t.length < 2 ? e : ka(e, Dd(t, 0, -1));
}
function lh(e, t) {
  return ri(e, t);
}
var sh = qu(function(e, t, n) {
  oi(e, t, n);
});
const zn = sh;
function uh(e, t) {
  return t = pn(t, e), e = ih(e, t), e == null || delete e[wr(ah(t))];
}
function ch(e) {
  return za(e) ? void 0 : e;
}
var dh = 1, fh = 2, ph = 4, hh = Cd(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = Pa(t, function(a) {
    return a = pn(a, e), r || (r = a.length > 1), a;
  }), it(e, Xa(e), n), r && (n = mt(n, dh | fh | ph, ch));
  for (var o = t.length; o--; )
    uh(n, t[o]);
  return n;
});
const _o = hh;
function vh(e, t, n, r) {
  if (!me(e))
    return e;
  t = pn(t, e);
  for (var o = -1, a = t.length, i = a - 1, l = e; l != null && ++o < a; ) {
    var s = wr(t[o]), c = n;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (o != i) {
      var u = l[s];
      c = r ? r(u, s, l) : void 0, c === void 0 && (c = me(u) ? u : fr(t[o + 1]) ? [] : {});
    }
    hr(l, s, c), l = l[s];
  }
  return e;
}
function ai(e, t, n) {
  return e == null ? e : vh(e, t, n);
}
let Ot = xa.create(), ii = (e, t) => {
  var n, r;
  return `${e.method}:${(r = (n = e.baseURL) != null ? n : t.defaults.baseURL) != null ? r : ""}${e.url}`;
}, li = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const Yt = {}, Fe = {
  get: (e, t = {}, n = {}) => ct(ut("get", e, t, n)),
  post: (e, t = {}, n = {}) => ct(ut("post", e, t, n)),
  patch: (e, t = {}, n = {}) => ct(ut("patch", e, t, n)),
  put: (e, t = {}, n = {}) => ct(ut("put", e, t, n)),
  delete: (e, t = {}, n = {}) => ct(ut("delete", e, t, n)),
  use(e) {
    return Ot = e, Fe;
  },
  axios() {
    return Ot;
  },
  fingerprintRequestsUsing(e) {
    return ii = e === null ? () => null : e, Fe;
  },
  determineSuccessUsing(e) {
    return li = e, Fe;
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
    mh,
    bh,
    yh
  ].reduce((a, i) => i(a), e);
  return ((n = t.onBefore) != null ? n : () => !0)() === !1 ? Promise.resolve(null) : (((r = t.onStart) != null ? r : () => null)(), Ot.request(t).then(async (a) => {
    var c, u, d, f;
    t.precognitive && Io(a);
    const i = a.status;
    let l = a;
    return t.precognitive && t.onPrecognitionSuccess && li(l) && (l = await Promise.resolve((c = t.onPrecognitionSuccess(l)) != null ? c : l)), t.onSuccess && gh(i) && (l = await Promise.resolve((u = t.onSuccess(l)) != null ? u : l)), (f = ((d = Fo(t, i)) != null ? d : (p) => p)(l)) != null ? f : l;
  }, (a) => {
    var l;
    return wh(a) ? Promise.reject(a) : (t.precognitive && Io(a.response), ((l = Fo(t, a.response.status)) != null ? l : (s, c) => Promise.reject(c))(a.response, a));
  }).finally((o = t.onFinish) != null ? o : () => null));
}, mh = (e) => {
  var n, r, o;
  const t = (n = e.only) != null ? n : e.validate;
  return {
    ...e,
    timeout: (o = (r = e.timeout) != null ? r : Ot.defaults.timeout) != null ? o : 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? ii(e, Ot) : e.fingerprint,
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
  return typeof e.fingerprint != "string" || ((t = Yt[e.fingerprint]) == null || t.abort(), delete Yt[e.fingerprint]), e;
}, yh = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (Yt[e.fingerprint] = new AbortController(), {
  ...e,
  signal: Yt[e.fingerprint].signal
}), Io = (e) => {
  var t;
  if (((t = e.headers) == null ? void 0 : t.precognition) !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, wh = (e) => {
  var t;
  return !Aa(e) || typeof ((t = e.response) == null ? void 0 : t.status) != "number" || Ta(e);
}, Fo = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], Sh = (e) => {
  var t, n, r, o, a, i;
  return (i = (a = (r = (t = e.headers) == null ? void 0 : t["Content-Type"]) != null ? r : (n = e.headers) == null ? void 0 : n["Content-type"]) != null ? a : (o = e.headers) == null ? void 0 : o["content-type"]) != null ? i : si(e.data) ? "multipart/form-data" : "application/json";
}, si = (e) => Tr(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => si(t)), Tr = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, qn = (e) => typeof e == "string" ? e : e(), Wn = (e) => typeof e == "string" ? e.toLowerCase() : e(), Eh = (e, t = {}) => {
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
    const S = [...new Set(b)];
    return i.length !== S.length || !S.every((E) => i.includes(E)) ? (i = S, n.validatedChanged) : [];
  }, s = () => i.filter((b) => typeof d[b] > "u");
  let c = [];
  const u = (b) => {
    const S = [...new Set(b)];
    return c.length !== S.length || !S.every((E) => c.includes(E)) ? (c = S, n.touchedChanged) : [];
  };
  let d = {};
  const f = (b) => {
    const S = Oh(b);
    return lh(d, S) ? [] : (d = S, n.errorsChanged);
  }, p = (b) => {
    const S = { ...d };
    return delete S[Ht(b)], f(S);
  }, h = () => Object.keys(d).length > 0;
  let v = 1500;
  const m = (b) => {
    v = b, C.cancel(), C = O();
  };
  let y = t, w = null, P = [], $ = null;
  const O = () => th((b) => {
    e({
      get: (S, E = {}, I = {}) => Fe.get(S, L(E), F(I, b, E)),
      post: (S, E = {}, I = {}) => Fe.post(S, L(E), F(I, b, E)),
      patch: (S, E = {}, I = {}) => Fe.patch(S, L(E), F(I, b, E)),
      put: (S, E = {}, I = {}) => Fe.put(S, L(E), F(I, b, E)),
      delete: (S, E = {}, I = {}) => Fe.delete(S, L(E), F(I, b, E))
    }).catch((S) => {
      var E;
      return Ta(S) || Aa(S) && ((E = S.response) == null ? void 0 : E.status) === 422 ? null : Promise.reject(S);
    });
  }, v, { leading: !0, trailing: !0 });
  let C = O();
  const F = (b, S, E = {}) => {
    var V, te, we;
    const I = {
      ...b,
      ...S
    }, j = Array.from((te = (V = I.only) != null ? V : I.validate) != null ? te : c);
    return {
      ...S,
      ...Ns(b, S),
      only: j,
      timeout: (we = I.timeout) != null ? we : 5e3,
      onValidationError: (Y, he) => ([
        ...l([...i, ...j]),
        ...f(zn(_o({ ...d }, j), Y.data.errors))
      ].forEach((H) => H()), I.onValidationError ? I.onValidationError(Y, he) : Promise.reject(he)),
      onSuccess: (Y) => (l([...i, ...j]).forEach((he) => he()), I.onSuccess ? I.onSuccess(Y) : Y),
      onPrecognitionSuccess: (Y) => ([
        ...l([...i, ...j]),
        ...f(_o({ ...d }, j))
      ].forEach((he) => he()), I.onPrecognitionSuccess ? I.onPrecognitionSuccess(Y) : Y),
      onBefore: () => I.onBeforeValidation && I.onBeforeValidation({ data: E, touched: c }, { data: y, touched: P }) === !1 || (I.onBefore || (() => !0))() === !1 ? !1 : ($ = c, w = E, !0),
      onStart: () => {
        var Y;
        a(!0).forEach((he) => he()), ((Y = I.onStart) != null ? Y : () => null)();
      },
      onFinish: () => {
        var Y;
        a(!1).forEach((he) => he()), P = $, y = w, $ = w = null, ((Y = I.onFinish) != null ? Y : () => null)();
      }
    };
  }, x = (b, S, E) => {
    var I, j;
    if (typeof b > "u") {
      const V = Array.from((j = (I = E == null ? void 0 : E.only) != null ? I : E == null ? void 0 : E.validate) != null ? j : []);
      u([...c, ...V]).forEach((te) => te()), C(E != null ? E : {});
      return;
    }
    if (Tr(S) && !r) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    b = Ht(b), Kt(y, b) !== S && (u([b, ...c]).forEach((V) => V()), C(E != null ? E : {}));
  }, L = (b) => r === !1 ? Gn(b) : b, T = {
    touched: () => c,
    validate(b, S, E) {
      return typeof b == "object" && !("target" in b) && (E = b, b = S = void 0), x(b, S, E), T;
    },
    touch(b) {
      const S = Array.isArray(b) ? b : [Ht(b)];
      return u([...c, ...S]).forEach((E) => E()), T;
    },
    validating: () => o,
    valid: s,
    errors: () => d,
    hasErrors: h,
    setErrors(b) {
      return f(b).forEach((S) => S()), T;
    },
    forgetError(b) {
      return p(b).forEach((S) => S()), T;
    },
    reset(...b) {
      if (b.length === 0)
        u([]).forEach((S) => S());
      else {
        const S = [...c];
        b.forEach((E) => {
          S.includes(E) && S.splice(S.indexOf(E), 1), ai(y, E, Kt(t, E));
        }), u(S).forEach((E) => E());
      }
      return T;
    },
    setTimeout(b) {
      return m(b), T;
    },
    on(b, S) {
      return n[b].push(S), T;
    },
    validateFiles() {
      return r = !0, T;
    }
  };
  return T;
}, ui = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), Oh = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: typeof e[n] == "string" ? [e[n]] : e[n]
}), {}), Ht = (e) => typeof e != "string" ? e.target.name : e, Gn = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((n) => {
    const r = t[n];
    if (r !== null) {
      if (Tr(r)) {
        delete t[n];
        return;
      }
      if (Array.isArray(r)) {
        t[n] = Object.values(Gn({ ...r }));
        return;
      }
      if (typeof r == "object") {
        t[n] = Gn(t[n]);
        return;
      }
    }
  }), t;
}, xh = (e, t, n, r = {}) => {
  const o = et(typeof n == "function" ? n() : n), a = Object.keys(o), i = _([]), l = _([]), s = Eh((d) => d[Wn(e)](qn(t), u.data(), r), o).on("validatingChanged", () => {
    u.validating = s.validating();
  }).on("validatedChanged", () => {
    i.value = s.valid();
  }).on("touchedChanged", () => {
    l.value = s.touched();
  }).on("errorsChanged", () => {
    u.hasErrors = s.hasErrors(), u.errors = ui(s.errors()), i.value = s.valid();
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
    onValidationError: (f, p) => (s.setErrors(f.data.errors), d.onValidationError ? d.onValidationError(f) : Promise.reject(p))
  });
  let u = {
    ...et(o),
    data() {
      const d = et(Ie(u));
      return a.reduce((f, p) => ({
        ...f,
        [p]: d[p]
      }), {});
    },
    setData(d) {
      return Object.keys(d).forEach((f) => {
        u[f] = d[f];
      }), u;
    },
    touched(d) {
      return l.value.includes(d);
    },
    touch(d) {
      return s.touch(d), u;
    },
    validate(d, f) {
      return typeof d == "object" && !("target" in d) && (f = d, d = void 0), typeof d > "u" ? s.validate(f) : (d = Ht(d), s.validate(d, Kt(u.data(), d), f)), u;
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
      const f = et(typeof n == "function" ? n() : o);
      return d.length === 0 ? a.forEach((p) => u[p] = f[p]) : d.forEach((p) => ai(u, p, Kt(f, p))), s.reset(...d), u;
    },
    setValidationTimeout(d) {
      return s.setTimeout(d), u;
    },
    processing: !1,
    async submit(d = {}) {
      return Fe[Wn(e)](qn(t), u.data(), c(d));
    },
    validateFiles() {
      return s.validateFiles(), u;
    },
    validator() {
      return s;
    }
  };
  return u = or(u), u;
}, Th = (e, t, n, r = {}) => {
  const o = Yo(n), a = xh(e, t, n, r);
  a.validator().on("errorsChanged", () => {
    s(), c(
      ui(a.validator().errors())
    );
  });
  const i = o.submit.bind(o), l = o.reset.bind(o), s = o.clearErrors.bind(o), c = o.setError.bind(o), u = o.transform.bind(o);
  let d = (p) => p;
  const f = Object.assign(o, {
    validating: a.validating,
    touched: a.touched,
    touch(p) {
      return a.touch(p), f;
    },
    valid: a.valid,
    invalid: a.invalid,
    setData(p) {
      return Object.keys(p).forEach((h) => {
        f[h] = p[h];
      }), f;
    },
    clearErrors(...p) {
      return s(...p), p.length === 0 ? a.setErrors({}) : p.forEach(a.forgetError), f;
    },
    reset(...p) {
      l(...p), a.reset(...p);
    },
    setErrors(p) {
      return a.setErrors(p), f;
    },
    forgetError(p) {
      return a.forgetError(p), f;
    },
    setError(p, h) {
      let v;
      if (typeof p != "object") {
        if (typeof h > "u")
          throw new Error("The `value` is required.");
        v = { [p]: h };
      } else
        v = p;
      return f.setErrors({
        ...o.errors,
        ...v
      }), f;
    },
    transform(p) {
      return u(p), d = p, f;
    },
    validate(p, h) {
      var v;
      return a.setData(d(o.data())), typeof p == "object" && !("target" in p) && (h = p, p = void 0), typeof h == "object" && (h.onValidationError = (v = h.onValidationError) != null ? v : h == null ? void 0 : h.onError), typeof p > "u" ? a.validate(h) : a.validate(p, h), f;
    },
    setValidationTimeout(p) {
      return a.setValidationTimeout(p), f;
    },
    validateFiles() {
      return a.validateFiles(), f;
    },
    submit(p = {}, h, v) {
      typeof p != "string" && (v = p, h = qn(t), p = Wn(e)), i(p, h, {
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
function Ah(e, t) {
  return B(), X("svg", {
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
const Ch = { name: "Spinner" }, $o = /* @__PURE__ */ M({
  ...Ch,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (t, n) => (B(), X("svg", {
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
}), Rh = ["disabled", "type"], Ph = ["href"], _h = { name: "Button" }, ci = /* @__PURE__ */ M({
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
    return (o, a) => n.value === "button" ? (B(), X("button", Le({
      key: 0,
      class: r,
      disabled: o.loading,
      type: o.type
    }, o.$attrs), [
      ue(o.$slots, "default"),
      _n(nt($o, {
        class: "ml-3",
        "text-class": o.spinnerClass
      }, null, 8, ["text-class"]), [
        [Mr, o.loading]
      ])
    ], 16, Rh)) : o.external ? (B(), X("a", Le({
      key: 2,
      href: o.href,
      class: r
    }, o.$attrs), [
      ue(o.$slots, "default")
    ], 16, Ph)) : (B(), ve(re(Ji), Le({
      key: 1,
      as: o.as,
      href: o.href,
      disabled: o.loading,
      class: r
    }, o.$attrs), {
      default: Ce(() => [
        ue(o.$slots, "default"),
        _n(nt($o, {
          class: "ml-3",
          "text-class": o.spinnerClass
        }, null, 8, ["text-class"]), [
          [Mr, o.loading]
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
    return (t, n) => (B(), X("div", Ih, [
      ne("div", Fh, [
        t.withoutIcon ? De("", !0) : (B(), X("div", $h, [
          nt(re(Ah), {
            class: "h-5 w-5 text-yellow-400",
            "aria-hidden": "true"
          })
        ])),
        ne("div", Dh, [
          ne("p", Lh, [
            ue(t.$slots, "default")
          ]),
          ne("div", jh, [
            ne("div", Nh, [
              ue(t.$slots, "actions")
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
    return (n, r) => (B(), ve(ci, Le({
      as: n.as,
      external: n.external,
      href: n.href,
      loading: n.loading,
      type: n.type,
      class: t
    }, n.$attrs), {
      default: Ce(() => [
        ue(n.$slots, "default")
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
    return (n, r) => (B(), ve(ci, Le({
      as: n.as,
      external: n.external,
      href: n.href,
      loading: n.loading,
      type: n.type,
      class: t
    }, n.$attrs), {
      default: Ce(() => [
        ue(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "external", "href", "loading", "type"]));
  }
});
function tt(e, t, n) {
  var r;
  let o = (r = n.initialDeps) != null ? r : [], a;
  function i() {
    var l, s, c, u;
    let d;
    n.key && ((l = n.debug) == null ? void 0 : l.call(n)) && (d = Date.now());
    const f = e();
    if (!(f.length !== o.length || f.some((h, v) => o[v] !== h)))
      return a;
    o = f;
    let p;
    if (n.key && ((s = n.debug) == null ? void 0 : s.call(n)) && (p = Date.now()), a = t(...f), n.key && ((c = n.debug) == null ? void 0 : c.call(n))) {
      const h = Math.round((Date.now() - d) * 100) / 100, v = Math.round((Date.now() - p) * 100) / 100, m = v / 16, y = (w, P) => {
        for (w = String(w); w.length < P; )
          w = " " + w;
        return w;
      };
      console.info(
        `%c\u23F1 ${y(v, 5)} /${y(h, 5)} ms`,
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
}, Do = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Gh = (e) => e, Kh = (e) => {
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
  if (o(Do(n)), !r.ResizeObserver)
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
      o(Do(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Lo = {
  passive: !0
}, jo = typeof window > "u" ? !0 : "onscrollend" in window, Xh = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const a = e.options.useScrollendEvent && jo ? () => {
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
  s(), n.addEventListener("scroll", l, Lo);
  const c = e.options.useScrollendEvent && jo;
  return c && n.addEventListener("scrollend", s, Lo), () => {
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
        getItemKey: Gh,
        rangeExtractor: Kh,
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
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((u) => {
          this.itemSizeCache.set(u.key, u.size);
        }));
        const s = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, s);
        for (let u = s; u < n; u++) {
          const d = a(u), f = this.options.lanes === 1 ? c[u - 1] : this.getFurthestMeasurement(c, u), p = f ? f.end + this.options.gap : r + o, h = l.get(d), v = typeof h == "number" ? h : this.options.estimateSize(u), m = p + v, y = f ? f.lane : u % this.options.lanes;
          c[u] = {
            index: u,
            start: p,
            size: v,
            end: m,
            key: d,
            lane: y
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = tt(
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
    ), this.getVirtualIndexes = tt(
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
    }, this.getVirtualItems = tt(
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
          r[di(
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
const di = (e, t, n, r) => {
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
  let i = di(
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
  const t = new Zh(re(e)), n = Zo(t), r = t._didMount();
  return de(
    () => re(e).getScrollElement(),
    (o) => {
      o && t._willUpdate();
    },
    {
      immediate: !0
    }
  ), de(
    () => re(e),
    (o) => {
      t.setOptions({
        ...o,
        onChange: (a, i) => {
          var l;
          Br(n), (l = o.onChange) == null || l.call(o, a, i);
        }
      }), t._willUpdate(), Br(n);
    },
    {
      immediate: !0
    }
  ), el(r), n;
}
function nv(e) {
  return tv(
    A(() => ({
      observeElementRect: Jh,
      observeElementOffset: Xh,
      scrollToFn: Qh,
      ...re(e)
    }))
  );
}
function rv(e, t, n) {
  let r = _(n == null ? void 0 : n.value), o = A(() => e.value !== void 0);
  return [A(() => o.value ? e.value : r.value), function(a) {
    return o.value || (r.value = a), t == null ? void 0 : t(a);
  }];
}
function Ar(e) {
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
    return Ar(() => {
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
  return pe(() => e.dispose()), e;
}
function av() {
  let e = ov();
  return (t) => {
    e.dispose(), e.nextFrame(t);
  };
}
var No;
let iv = Symbol("headlessui.useid"), lv = 0;
const se = (No = Nr.useId) != null ? No : function() {
  return Nr.inject(iv, () => `${++lv}`)();
};
function R(e) {
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
var sv = Object.defineProperty, uv = (e, t, n) => t in e ? sv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Mo = (e, t, n) => (uv(e, typeof t != "symbol" ? t + "" : t, n), n);
class cv {
  constructor() {
    Mo(this, "current", this.detect()), Mo(this, "currentId", 0);
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
let Pt = new cv();
function Be(e) {
  if (Pt.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = R(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let Kn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Ae = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Ae || {}), fi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(fi || {}), dv = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(dv || {});
function pi(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Kn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Cr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Cr || {});
function Rr(e, t = 0) {
  var n;
  return e === ((n = Be(e)) == null ? void 0 : n.body) ? !1 : oe(t, { [0]() {
    return e.matches(Kn);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Kn))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
function hi(e) {
  let t = Be(e);
  le(() => {
    t && !Rr(t.activeElement, 0) && ke(e);
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
  return gt(pi(), t, { relativeTo: e });
}
function gt(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  var a;
  let i = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, l = Array.isArray(e) ? n ? Pr(e) : e : pi(e);
  o.length > 0 && l.length > 1 && (l = l.filter((h) => !o.includes(h))), r = r != null ? r : i.activeElement;
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
  })(), u = t & 32 ? { preventScroll: !0 } : {}, d = 0, f = l.length, p;
  do {
    if (d >= f || d + f <= 0)
      return 0;
    let h = c + d;
    if (t & 16)
      h = (h + f) % f;
    else {
      if (h < 0)
        return 3;
      if (h >= f)
        return 1;
    }
    p = l[h], p == null || p.focus(u), d += s;
  } while (p !== i.activeElement);
  return t & 6 && hv(p) && p.select(), 2;
}
function vi() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function mv() {
  return /Android/gi.test(window.navigator.userAgent);
}
function mi() {
  return vi() || mv();
}
function Lt(e, t, n) {
  Pt.isServer || ee((r) => {
    document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
  });
}
function gi(e, t, n) {
  Pt.isServer || ee((r) => {
    window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
  });
}
function _r(e, t, n = A(() => !0)) {
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
      let u = c instanceof HTMLElement ? c : R(c);
      if (u != null && u.contains(l) || a.composed && a.composedPath().includes(u))
        return;
    }
    return !Rr(l, Cr.Loose) && l.tabIndex !== -1 && a.preventDefault(), t(a, l);
  }
  let o = _(null);
  Lt("pointerdown", (a) => {
    var i, l;
    n.value && (o.value = ((l = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : l[0]) || a.target);
  }, !0), Lt("mousedown", (a) => {
    var i, l;
    n.value && (o.value = ((l = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : l[0]) || a.target);
  }, !0), Lt("click", (a) => {
    mi() || o.value && (r(a, () => o.value), o.value = null);
  }, !0), Lt("touchend", (a) => r(a, () => a.target instanceof HTMLElement ? a.target : null), !0), gi("blur", (a) => r(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Bo(e, t) {
  if (e)
    return e;
  let n = t != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function bi(e, t) {
  let n = _(Bo(e.value.type, e.value.as));
  return Q(() => {
    n.value = Bo(e.value.type, e.value.as);
  }), ee(() => {
    var r;
    n.value || R(t) && R(t) instanceof HTMLButtonElement && !((r = R(t)) != null && r.hasAttribute("type")) && (n.value = "button");
  }), n;
}
function Uo(e) {
  return [e.screenX, e.screenY];
}
function yi() {
  let e = _([-1, -1]);
  return { wasMoved(t) {
    let n = Uo(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = Uo(t);
  } };
}
function wi({ container: e, accept: t, walk: n, enabled: r }) {
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
  let i = Ei(r, n), l = Object.assign(o, { props: i });
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
  let { as: l, ...s } = _t(e, ["unmount", "static"]), c = (a = n.default) == null ? void 0 : a.call(n, r), u = {};
  if (r) {
    let d = !1, f = [];
    for (let [p, h] of Object.entries(r))
      typeof h == "boolean" && (d = !0), h === !0 && f.push(p);
    d && (u["data-headlessui-state"] = f.join(" "));
  }
  if (l === "template") {
    if (c = Si(c != null ? c : []), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [d, ...f] = c != null ? c : [];
      if (!bv(d) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).map((v) => v.trim()).filter((v, m, y) => y.indexOf(v) === m).sort((v, m) => v.localeCompare(m)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let p = Ei((i = d.props) != null ? i : {}, s, u), h = Qo(d, p, !0);
      for (let v in p)
        v.startsWith("on") && (h.props || (h.props = {}), h.props[v] = p[v]);
      return h;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return K(l, Object.assign({}, s, u), { default: () => c });
}
function Si(e) {
  return e.flatMap((t) => t.type === Ve ? Si(t.children) : [t]);
}
function Ei(...e) {
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
function _t(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function bv(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var xt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(xt || {});
let Qt = M({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    var r;
    let { features: o, ...a } = e, i = { "aria-hidden": (o & 2) === 2 ? !0 : (r = a["aria-hidden"]) != null ? r : void 0, hidden: (o & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return W({ ourProps: i, theirProps: a, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} }), Oi = Symbol("Context");
var J = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(J || {});
function yv() {
  return It() !== null;
}
function It() {
  return ie(Oi, null);
}
function Ir(e) {
  fe(Oi, e);
}
var U = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(U || {}), xi = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(xi || {});
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
var k = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(k || {});
function Jn(e, t) {
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
function Ti(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e))
    Ci(n, Ai(t, r), o);
  return n;
}
function Ai(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ci(e, t, n) {
  if (Array.isArray(n))
    for (let [r, o] of n.entries())
      Ci(e, Ai(t, r.toString()), o);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Ti(n, t, e);
}
function Ev(e, t) {
  return e === t;
}
var Ov = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ov || {}), xv = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(xv || {}), Tv = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Tv || {});
let Ri = Symbol("ComboboxContext");
function Ze(e) {
  let t = ie(Ri, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ze), n;
  }
  return t;
}
let Pi = Symbol("VirtualContext"), Av = M({ name: "VirtualProvider", setup(e, { slots: t }) {
  let n = Ze("VirtualProvider"), r = A(() => {
    let l = R(n.optionsRef);
    if (!l)
      return { start: 0, end: 0 };
    let s = window.getComputedStyle(l);
    return { start: parseFloat(s.paddingBlockStart || s.paddingTop), end: parseFloat(s.paddingBlockEnd || s.paddingBottom) };
  }), o = nv(A(() => ({ scrollPaddingStart: r.value.start, scrollPaddingEnd: r.value.end, count: n.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return R(n.optionsRef);
  }, overscan: 12 }))), a = A(() => {
    var l;
    return (l = n.virtual.value) == null ? void 0 : l.options;
  }), i = _(0);
  return de([a], () => {
    i.value += 1;
  }), fe(Pi, n.virtual.value ? o : null), () => [K("div", { style: { position: "relative", width: "100%", height: `${o.value.getTotalSize()}px` }, ref: (l) => {
    if (l) {
      if (typeof process < "u" && process.env.JEST_WORKER_ID !== void 0 || n.activationTrigger.value === 0)
        return;
      n.activeOptionIndex.value !== null && n.virtual.value.options.length > n.activeOptionIndex.value && o.value.scrollToIndex(n.activeOptionIndex.value);
    }
  } }, o.value.getVirtualItems().map((l) => Qo(t.default({ option: n.virtual.value.options[l.index], open: n.comboboxState.value === 0 })[0], { key: `${i.value}-${l.index}`, "data-index": l.index, "aria-setsize": n.virtual.value.options.length, "aria-posinset": l.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${l.start}px)`, overflowAnchor: "none" } })))];
} });
M({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], nullable: !0, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 }, immediate: { type: [Boolean], default: !1 }, virtual: { type: Object, default: null } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: r }) {
  let o = _(1), a = _(null), i = _(null), l = _(null), s = _(null), c = _({ static: !1, hold: !1 }), u = _([]), d = _(null), f = _(2), p = _(!1);
  function h(T = (b) => b) {
    let b = d.value !== null ? u.value[d.value] : null, S = T(u.value.slice()), E = S.length > 0 && S[0].dataRef.order.value !== null ? S.sort((j, V) => j.dataRef.order.value - V.dataRef.order.value) : Pr(S, (j) => R(j.dataRef.domRef)), I = b ? E.indexOf(b) : null;
    return I === -1 && (I = null), { options: E, activeOptionIndex: I };
  }
  let v = A(() => e.multiple ? 1 : 0), m = A(() => e.nullable), [y, w] = rv(A(() => e.modelValue), (T) => r("update:modelValue", T), A(() => e.defaultValue)), P = A(() => y.value === void 0 ? oe(v.value, { [1]: [], [0]: void 0 }) : y.value), $ = null, O = null;
  function C(T) {
    return oe(v.value, { [0]() {
      return w == null ? void 0 : w(T);
    }, [1]: () => {
      let b = Ie(x.value.value).slice(), S = Ie(T), E = b.findIndex((I) => x.compare(S, Ie(I)));
      return E === -1 ? b.push(S) : b.splice(E, 1), w == null ? void 0 : w(b);
    } });
  }
  let F = A(() => {
  });
  de([F], ([T], [b]) => {
    if (x.virtual.value && T && b && d.value !== null) {
      let S = T.indexOf(b[d.value]);
      S !== -1 ? d.value = S : d.value = null;
    }
  });
  let x = { comboboxState: o, value: P, mode: v, compare(T, b) {
    if (typeof e.by == "string") {
      let S = e.by;
      return (T == null ? void 0 : T[S]) === (b == null ? void 0 : b[S]);
    }
    return e.by === null ? Ev(T, b) : e.by(T, b);
  }, calculateIndex(T) {
    return x.virtual.value ? e.by === null ? x.virtual.value.options.indexOf(T) : x.virtual.value.options.findIndex((b) => x.compare(b, T)) : u.value.findIndex((b) => x.compare(b.dataRef.value, T));
  }, defaultValue: A(() => e.defaultValue), nullable: m, immediate: A(() => !1), virtual: A(() => null), inputRef: i, labelRef: a, buttonRef: l, optionsRef: s, disabled: A(() => e.disabled), options: u, change(T) {
    w(T);
  }, activeOptionIndex: A(() => {
    if (p.value && d.value === null && (x.virtual.value ? x.virtual.value.options.length > 0 : u.value.length > 0)) {
      if (x.virtual.value) {
        let b = x.virtual.value.options.findIndex((S) => {
          var E;
          return !((E = x.virtual.value) != null && E.disabled(S));
        });
        if (b !== -1)
          return b;
      }
      let T = u.value.findIndex((b) => !b.dataRef.disabled);
      if (T !== -1)
        return T;
    }
    return d.value;
  }), activationTrigger: f, optionsPropsRef: c, closeCombobox() {
    p.value = !1, !e.disabled && o.value !== 1 && (o.value = 1, d.value = null);
  }, openCombobox() {
    if (p.value = !0, !e.disabled && o.value !== 0) {
      if (x.value.value) {
        let T = x.calculateIndex(x.value.value);
        T !== -1 && (d.value = T);
      }
      o.value = 0;
    }
  }, setActivationTrigger(T) {
    f.value = T;
  }, goToOption(T, b, S) {
    p.value = !1, $ !== null && cancelAnimationFrame($), $ = requestAnimationFrame(() => {
      if (e.disabled || s.value && !c.value.static && o.value === 1)
        return;
      if (x.virtual.value) {
        d.value = T === k.Specific ? b : Jn({ focus: T }, { resolveItems: () => x.virtual.value.options, resolveActiveIndex: () => {
          var j, V;
          return (V = (j = x.activeOptionIndex.value) != null ? j : x.virtual.value.options.findIndex((te) => {
            var we;
            return !((we = x.virtual.value) != null && we.disabled(te));
          })) != null ? V : null;
        }, resolveDisabled: (j) => x.virtual.value.disabled(j), resolveId() {
          throw new Error("Function not implemented.");
        } }), f.value = S != null ? S : 2;
        return;
      }
      let E = h();
      if (E.activeOptionIndex === null) {
        let j = E.options.findIndex((V) => !V.dataRef.disabled);
        j !== -1 && (E.activeOptionIndex = j);
      }
      let I = T === k.Specific ? b : Jn({ focus: T }, { resolveItems: () => E.options, resolveActiveIndex: () => E.activeOptionIndex, resolveId: (j) => j.id, resolveDisabled: (j) => j.dataRef.disabled });
      d.value = I, f.value = S != null ? S : 2, u.value = E.options;
    });
  }, selectOption(T) {
    let b = u.value.find((E) => E.id === T);
    if (!b)
      return;
    let { dataRef: S } = b;
    C(S.value);
  }, selectActiveOption() {
    if (x.activeOptionIndex.value !== null) {
      if (x.virtual.value)
        C(x.virtual.value.options[x.activeOptionIndex.value]);
      else {
        let { dataRef: T } = u.value[x.activeOptionIndex.value];
        C(T.value);
      }
      x.goToOption(k.Specific, x.activeOptionIndex.value);
    }
  }, registerOption(T, b) {
    let S = or({ id: T, dataRef: b });
    if (x.virtual.value) {
      u.value.push(S);
      return;
    }
    O && cancelAnimationFrame(O);
    let E = h((I) => (I.push(S), I));
    d.value === null && x.isSelected(b.value.value) && (E.activeOptionIndex = E.options.indexOf(S)), u.value = E.options, d.value = E.activeOptionIndex, f.value = 2, E.options.some((I) => !R(I.dataRef.domRef)) && (O = requestAnimationFrame(() => {
      let I = h();
      u.value = I.options, d.value = I.activeOptionIndex;
    }));
  }, unregisterOption(T, b) {
    if ($ !== null && cancelAnimationFrame($), b && (p.value = !0), x.virtual.value) {
      u.value = u.value.filter((E) => E.id !== T);
      return;
    }
    let S = h((E) => {
      let I = E.findIndex((j) => j.id === T);
      return I !== -1 && E.splice(I, 1), E;
    });
    u.value = S.options, d.value = S.activeOptionIndex, f.value = 2;
  }, isSelected(T) {
    return oe(v.value, { [0]: () => x.compare(Ie(x.value.value), Ie(T)), [1]: () => Ie(x.value.value).some((b) => x.compare(Ie(b), Ie(T))) });
  }, isActive(T) {
    return d.value === x.calculateIndex(T);
  } };
  _r([i, l, s], () => x.closeCombobox(), A(() => o.value === 0)), fe(Ri, x), Ir(A(() => oe(o.value, { [0]: J.Open, [1]: J.Closed })));
  let L = A(() => {
    var T;
    return (T = R(i)) == null ? void 0 : T.closest("form");
  });
  return Q(() => {
    de([L], () => {
      if (!L.value || e.defaultValue === void 0)
        return;
      function T() {
        x.change(e.defaultValue);
      }
      return L.value.addEventListener("reset", T), () => {
        var b;
        (b = L.value) == null || b.removeEventListener("reset", T);
      };
    }, { immediate: !0 });
  }), () => {
    var T, b, S;
    let { name: E, disabled: I, form: j, ...V } = e, te = { open: o.value === 0, disabled: I, activeIndex: x.activeOptionIndex.value, activeOption: x.activeOptionIndex.value === null ? null : x.virtual.value ? x.virtual.value.options[(T = x.activeOptionIndex.value) != null ? T : 0] : (S = (b = x.options.value[x.activeOptionIndex.value]) == null ? void 0 : b.dataRef.value) != null ? S : null, value: P.value };
    return K(Ve, [...E != null && P.value != null ? Ti({ [E]: P.value }).map(([we, Y]) => K(Qt, gv({ features: xt.Hidden, key: we, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: j, disabled: I, name: we, value: Y }))) : [], W({ theirProps: { ...n, ..._t(V, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: te, slots: t, attrs: n, name: "Combobox" })]);
  };
} });
M({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let o = (r = e.id) != null ? r : `headlessui-combobox-label-${se()}`, a = Ze("ComboboxLabel");
  function i() {
    var l;
    (l = R(a.inputRef)) == null || l.focus({ preventScroll: !0 });
  }
  return () => {
    let l = { open: a.comboboxState.value === 0, disabled: a.disabled.value }, { ...s } = e, c = { id: o, ref: a.labelRef, onClick: i };
    return W({ ourProps: c, theirProps: s, slot: l, attrs: t, slots: n, name: "ComboboxLabel" });
  };
} });
M({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-combobox-button-${se()}`, i = Ze("ComboboxButton");
  r({ el: i.buttonRef, $el: i.buttonRef });
  function l(u) {
    i.disabled.value || (i.comboboxState.value === 0 ? i.closeCombobox() : (u.preventDefault(), i.openCombobox()), le(() => {
      var d;
      return (d = R(i.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function s(u) {
    switch (u.key) {
      case U.ArrowDown:
        u.preventDefault(), u.stopPropagation(), i.comboboxState.value === 1 && i.openCombobox(), le(() => {
          var d;
          return (d = i.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case U.ArrowUp:
        u.preventDefault(), u.stopPropagation(), i.comboboxState.value === 1 && (i.openCombobox(), le(() => {
          i.value.value || i.goToOption(k.Last);
        })), le(() => {
          var d;
          return (d = i.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case U.Escape:
        if (i.comboboxState.value !== 0)
          return;
        u.preventDefault(), i.optionsRef.value && !i.optionsPropsRef.value.static && u.stopPropagation(), i.closeCombobox(), le(() => {
          var d;
          return (d = i.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let c = bi(A(() => ({ as: e.as, type: t.type })), i.buttonRef);
  return () => {
    var u, d;
    let f = { open: i.comboboxState.value === 0, disabled: i.disabled.value, value: i.value.value }, { ...p } = e, h = { ref: i.buttonRef, id: a, type: c.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (u = R(i.optionsRef)) == null ? void 0 : u.id, "aria-expanded": i.comboboxState.value === 0, "aria-labelledby": i.labelRef.value ? [(d = R(i.labelRef)) == null ? void 0 : d.id, a].join(" ") : void 0, disabled: i.disabled.value === !0 ? !0 : void 0, onKeydown: s, onClick: l };
    return W({ ourProps: h, theirProps: p, slot: f, attrs: t, slots: n, name: "ComboboxButton" });
  };
} });
M({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: null } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  var a;
  let i = (a = e.id) != null ? a : `headlessui-combobox-input-${se()}`, l = Ze("ComboboxInput"), s = A(() => Be(R(l.inputRef))), c = { value: !1 };
  o({ el: l.inputRef, $el: l.inputRef });
  function u() {
    l.change(null);
    let O = R(l.optionsRef);
    O && (O.scrollTop = 0), l.goToOption(k.Nothing);
  }
  let d = A(() => {
    var O;
    let C = l.value.value;
    return R(l.inputRef) ? typeof e.displayValue < "u" && C !== void 0 ? (O = e.displayValue(C)) != null ? O : "" : typeof C == "string" ? C : "" : "";
  });
  Q(() => {
    de([d, l.comboboxState, s], ([O, C], [F, x]) => {
      if (c.value)
        return;
      let L = R(l.inputRef);
      L && ((x === 0 && C === 1 || O !== F) && (L.value = O), requestAnimationFrame(() => {
        var T;
        if (c.value || !L || ((T = s.value) == null ? void 0 : T.activeElement) !== L)
          return;
        let { selectionStart: b, selectionEnd: S } = L;
        Math.abs((S != null ? S : 0) - (b != null ? b : 0)) === 0 && b === 0 && L.setSelectionRange(L.value.length, L.value.length);
      }));
    }, { immediate: !0 }), de([l.comboboxState], ([O], [C]) => {
      if (O === 0 && C === 1) {
        if (c.value)
          return;
        let F = R(l.inputRef);
        if (!F)
          return;
        let x = F.value, { selectionStart: L, selectionEnd: T, selectionDirection: b } = F;
        F.value = "", F.value = x, b !== null ? F.setSelectionRange(L, T, b) : F.setSelectionRange(L, T);
      }
    });
  });
  let f = _(!1);
  function p() {
    f.value = !0;
  }
  function h() {
    He().nextFrame(() => {
      f.value = !1;
    });
  }
  let v = av();
  function m(O) {
    switch (c.value = !0, v(() => {
      c.value = !1;
    }), O.key) {
      case U.Enter:
        if (c.value = !1, l.comboboxState.value !== 0 || f.value)
          return;
        if (O.preventDefault(), O.stopPropagation(), l.activeOptionIndex.value === null) {
          l.closeCombobox();
          return;
        }
        l.selectActiveOption(), l.mode.value === 0 && l.closeCombobox();
        break;
      case U.ArrowDown:
        return c.value = !1, O.preventDefault(), O.stopPropagation(), oe(l.comboboxState.value, { [0]: () => l.goToOption(k.Next), [1]: () => l.openCombobox() });
      case U.ArrowUp:
        return c.value = !1, O.preventDefault(), O.stopPropagation(), oe(l.comboboxState.value, { [0]: () => l.goToOption(k.Previous), [1]: () => {
          l.openCombobox(), le(() => {
            l.value.value || l.goToOption(k.Last);
          });
        } });
      case U.Home:
        if (O.shiftKey)
          break;
        return c.value = !1, O.preventDefault(), O.stopPropagation(), l.goToOption(k.First);
      case U.PageUp:
        return c.value = !1, O.preventDefault(), O.stopPropagation(), l.goToOption(k.First);
      case U.End:
        if (O.shiftKey)
          break;
        return c.value = !1, O.preventDefault(), O.stopPropagation(), l.goToOption(k.Last);
      case U.PageDown:
        return c.value = !1, O.preventDefault(), O.stopPropagation(), l.goToOption(k.Last);
      case U.Escape:
        if (c.value = !1, l.comboboxState.value !== 0)
          return;
        O.preventDefault(), l.optionsRef.value && !l.optionsPropsRef.value.static && O.stopPropagation(), l.nullable.value && l.mode.value === 0 && l.value.value === null && u(), l.closeCombobox();
        break;
      case U.Tab:
        if (c.value = !1, l.comboboxState.value !== 0)
          return;
        l.mode.value === 0 && l.activationTrigger.value !== 1 && l.selectActiveOption(), l.closeCombobox();
        break;
    }
  }
  function y(O) {
    t("change", O), l.nullable.value && l.mode.value === 0 && O.target.value === "" && u(), l.openCombobox();
  }
  function w(O) {
    var C, F, x;
    let L = (C = O.relatedTarget) != null ? C : $e.find((T) => T !== O.currentTarget);
    if (c.value = !1, !((F = R(l.optionsRef)) != null && F.contains(L)) && !((x = R(l.buttonRef)) != null && x.contains(L)) && l.comboboxState.value === 0)
      return O.preventDefault(), l.mode.value === 0 && (l.nullable.value && l.value.value === null ? u() : l.activationTrigger.value !== 1 && l.selectActiveOption()), l.closeCombobox();
  }
  function P(O) {
    var C, F, x;
    let L = (C = O.relatedTarget) != null ? C : $e.find((T) => T !== O.currentTarget);
    (F = R(l.buttonRef)) != null && F.contains(L) || (x = R(l.optionsRef)) != null && x.contains(L) || l.disabled.value || l.immediate.value && l.comboboxState.value !== 0 && (l.openCombobox(), He().nextFrame(() => {
      l.setActivationTrigger(1);
    }));
  }
  let $ = A(() => {
    var O, C, F, x;
    return (x = (F = (C = e.defaultValue) != null ? C : l.defaultValue.value !== void 0 ? (O = e.displayValue) == null ? void 0 : O.call(e, l.defaultValue.value) : null) != null ? F : l.defaultValue.value) != null ? x : "";
  });
  return () => {
    var O, C, F, x, L, T, b;
    let S = { open: l.comboboxState.value === 0 }, { displayValue: E, onChange: I, ...j } = e, V = { "aria-controls": (O = l.optionsRef.value) == null ? void 0 : O.id, "aria-expanded": l.comboboxState.value === 0, "aria-activedescendant": l.activeOptionIndex.value === null ? void 0 : l.virtual.value ? (C = l.options.value.find((te) => !l.virtual.value.disabled(te.dataRef.value) && l.compare(te.dataRef.value, l.virtual.value.options[l.activeOptionIndex.value]))) == null ? void 0 : C.id : (F = l.options.value[l.activeOptionIndex.value]) == null ? void 0 : F.id, "aria-labelledby": (T = (x = R(l.labelRef)) == null ? void 0 : x.id) != null ? T : (L = R(l.buttonRef)) == null ? void 0 : L.id, "aria-autocomplete": "list", id: i, onCompositionstart: p, onCompositionend: h, onKeydown: m, onInput: y, onFocus: P, onBlur: w, role: "combobox", type: (b = n.type) != null ? b : "text", tabIndex: 0, ref: l.inputRef, defaultValue: $.value, disabled: l.disabled.value === !0 ? !0 : void 0 };
    return W({ ourProps: V, theirProps: j, slot: S, attrs: n, slots: r, features: _e.RenderStrategy | _e.Static, name: "ComboboxInput" });
  };
} });
M({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = Ze("ComboboxOptions"), a = `headlessui-combobox-options-${se()}`;
  r({ el: o.optionsRef, $el: o.optionsRef }), ee(() => {
    o.optionsPropsRef.value.static = e.static;
  }), ee(() => {
    o.optionsPropsRef.value.hold = e.hold;
  });
  let i = It(), l = A(() => i !== null ? (i.value & J.Open) === J.Open : o.comboboxState.value === 0);
  wi({ container: A(() => R(o.optionsRef)), enabled: A(() => o.comboboxState.value === 0), accept(c) {
    return c.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c) {
    c.setAttribute("role", "none");
  } });
  function s(c) {
    c.preventDefault();
  }
  return () => {
    var c, u, d;
    let f = { open: o.comboboxState.value === 0 }, p = { "aria-labelledby": (d = (c = R(o.labelRef)) == null ? void 0 : c.id) != null ? d : (u = R(o.buttonRef)) == null ? void 0 : u.id, id: a, ref: o.optionsRef, role: "listbox", "aria-multiselectable": o.mode.value === 1 ? !0 : void 0, onMousedown: s }, h = _t(e, ["hold"]);
    return W({ ourProps: p, theirProps: h, slot: f, attrs: t, slots: o.virtual.value && o.comboboxState.value === 0 ? { ...n, default: () => [K(Av, {}, n.default)] } : n, features: _e.RenderStrategy | _e.Static, visible: l.value, name: "ComboboxOptions" });
  };
} });
M({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, order: { type: [Number], default: null } }, setup(e, { slots: t, attrs: n, expose: r }) {
  let o = Ze("ComboboxOption"), a = `headlessui-combobox-option-${se()}`, i = _(null), l = A(() => e.disabled);
  r({ el: i, $el: i });
  let s = A(() => {
    var w;
    return o.virtual.value ? o.activeOptionIndex.value === o.calculateIndex(e.value) : o.activeOptionIndex.value === null ? !1 : ((w = o.options.value[o.activeOptionIndex.value]) == null ? void 0 : w.id) === a;
  }), c = A(() => o.isSelected(e.value)), u = ie(Pi, null), d = A(() => ({ disabled: e.disabled, value: e.value, domRef: i, order: A(() => e.order) }));
  Q(() => o.registerOption(a, d)), pe(() => o.unregisterOption(a, s.value)), ee(() => {
    let w = R(i);
    w && (u == null || u.value.measureElement(w));
  }), ee(() => {
    o.comboboxState.value === 0 && s.value && (o.virtual.value || o.activationTrigger.value !== 0 && le(() => {
      var w, P;
      return (P = (w = R(i)) == null ? void 0 : w.scrollIntoView) == null ? void 0 : P.call(w, { block: "nearest" });
    }));
  });
  function f(w) {
    w.preventDefault(), w.button === xi.Left && (l.value || (o.selectOption(a), mi() || requestAnimationFrame(() => {
      var P;
      return (P = R(o.inputRef)) == null ? void 0 : P.focus({ preventScroll: !0 });
    }), o.mode.value === 0 && o.closeCombobox()));
  }
  function p() {
    var w;
    if (e.disabled || (w = o.virtual.value) != null && w.disabled(e.value))
      return o.goToOption(k.Nothing);
    let P = o.calculateIndex(e.value);
    o.goToOption(k.Specific, P);
  }
  let h = yi();
  function v(w) {
    h.update(w);
  }
  function m(w) {
    var P;
    if (!h.wasMoved(w) || e.disabled || (P = o.virtual.value) != null && P.disabled(e.value) || s.value)
      return;
    let $ = o.calculateIndex(e.value);
    o.goToOption(k.Specific, $, 0);
  }
  function y(w) {
    var P;
    h.wasMoved(w) && (e.disabled || (P = o.virtual.value) != null && P.disabled(e.value) || s.value && (o.optionsPropsRef.value.hold || o.goToOption(k.Nothing)));
  }
  return () => {
    let { disabled: w } = e, P = { active: s.value, selected: c.value, disabled: w }, $ = { id: a, ref: i, role: "option", tabIndex: w === !0 ? void 0 : -1, "aria-disabled": w === !0 ? !0 : void 0, "aria-selected": c.value, disabled: void 0, onMousedown: f, onFocus: p, onPointerenter: v, onMouseenter: v, onPointermove: m, onMousemove: m, onPointerleave: y, onMouseleave: y }, O = _t(e, ["order", "value"]);
    return W({ ourProps: $, theirProps: O, slot: P, attrs: n, slots: t, name: "ComboboxOption" });
  };
} });
function _i(e, t, n, r) {
  Pt.isServer || ee((o) => {
    e = e != null ? e : window, e.addEventListener(t, n, r), o(() => e.removeEventListener(t, n, r));
  });
}
var pt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(pt || {});
function Cv() {
  let e = _(0);
  return gi("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ii(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.value) {
    let r = R(n);
    r instanceof HTMLElement && t.add(r);
  }
  return t;
}
var Fi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Fi || {});
let dt = Object.assign(M({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: _(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = _(null);
  r({ el: o, $el: o });
  let a = A(() => Be(o)), i = _(!1);
  Q(() => i.value = !0), pe(() => i.value = !1), Pv({ ownerDocument: a }, A(() => i.value && Boolean(e.features & 16)));
  let l = _v({ ownerDocument: a, container: o, initialFocus: A(() => e.initialFocus) }, A(() => i.value && Boolean(e.features & 2)));
  Iv({ ownerDocument: a, container: o, containers: e.containers, previousActiveElement: l }, A(() => i.value && Boolean(e.features & 8)));
  let s = Cv();
  function c(p) {
    let h = R(o);
    !h || ((v) => v())(() => {
      oe(s.value, { [pt.Forwards]: () => {
        gt(h, Ae.First, { skipElements: [p.relatedTarget] });
      }, [pt.Backwards]: () => {
        gt(h, Ae.Last, { skipElements: [p.relatedTarget] });
      } });
    });
  }
  let u = _(!1);
  function d(p) {
    p.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function f(p) {
    if (!i.value)
      return;
    let h = Ii(e.containers);
    R(o) instanceof HTMLElement && h.add(R(o));
    let v = p.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && ($i(h, v) || (u.value ? gt(R(o), oe(s.value, { [pt.Forwards]: () => Ae.Next, [pt.Backwards]: () => Ae.Previous }) | Ae.WrapAround, { relativeTo: p.target }) : p.target instanceof HTMLElement && ke(p.target)));
  }
  return () => {
    let p = {}, h = { ref: o, onKeydown: d, onFocusout: f }, { features: v, initialFocus: m, containers: y, ...w } = e;
    return K(Ve, [Boolean(v & 4) && K(Qt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: xt.Focusable }), W({ ourProps: h, theirProps: { ...t, ...w }, slot: p, attrs: t, slots: n, name: "FocusTrap" }), Boolean(v & 4) && K(Qt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: xt.Focusable })]);
  };
} }), { features: Fi });
function Rv(e) {
  let t = _($e.slice());
  return de([e], ([n], [r]) => {
    r === !0 && n === !1 ? Ar(() => {
      t.value.splice(0);
    }) : r === !1 && n === !0 && (t.value = $e.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((r) => r != null && r.isConnected)) != null ? n : null;
  };
}
function Pv({ ownerDocument: e }, t) {
  let n = Rv(t);
  Q(() => {
    ee(() => {
      var r, o;
      t.value || ((r = e.value) == null ? void 0 : r.activeElement) === ((o = e.value) == null ? void 0 : o.body) && ke(n());
    }, { flush: "post" });
  }), pe(() => {
    t.value && ke(n());
  });
}
function _v({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let o = _(null), a = _(!1);
  return Q(() => a.value = !0), pe(() => a.value = !1), Q(() => {
    de([t, n, r], (i, l) => {
      if (i.every((c, u) => (l == null ? void 0 : l[u]) === c) || !r.value)
        return;
      let s = R(t);
      s && Ar(() => {
        var c, u;
        if (!a.value)
          return;
        let d = R(n), f = (c = e.value) == null ? void 0 : c.activeElement;
        if (d) {
          if (d === f) {
            o.value = f;
            return;
          }
        } else if (s.contains(f)) {
          o.value = f;
          return;
        }
        d ? ke(d) : gt(s, Ae.First | Ae.NoScroll) === fi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), o;
}
function Iv({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, o) {
  var a;
  _i((a = e.value) == null ? void 0 : a.defaultView, "focus", (i) => {
    if (!o.value)
      return;
    let l = Ii(n);
    R(t) instanceof HTMLElement && l.add(R(t));
    let s = r.value;
    if (!s)
      return;
    let c = i.target;
    c && c instanceof HTMLElement ? $i(l, c) ? (r.value = c, ke(c)) : (i.preventDefault(), i.stopPropagation(), ke(s)) : ke(r.value);
  }, !0);
}
function $i(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
function Fv(e) {
  let t = Zo(e.getSnapshot());
  return pe(e.subscribe(() => {
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
  return vi() ? { before({ doc: e, d: t, meta: n }) {
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
let Ge = $v(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
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
Ge.subscribe(() => {
  let e = Ge.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && Ge.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Ge.dispatch("TEARDOWN", n);
  }
});
function Mv(e, t, n) {
  let r = Fv(Ge), o = A(() => {
    let a = e.value ? r.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return de([e, t], ([a, i], [l], s) => {
    if (!a || !i)
      return;
    Ge.dispatch("PUSH", a, n);
    let c = !1;
    s(() => {
      c || (Ge.dispatch("POP", l != null ? l : a, n), c = !0);
    });
  }, { immediate: !0 }), o;
}
let An = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map();
function ko(e, t = _(!0)) {
  ee((n) => {
    var r;
    if (!t.value)
      return;
    let o = R(e);
    if (!o)
      return;
    n(function() {
      var i;
      if (!o)
        return;
      let l = (i = ft.get(o)) != null ? i : 1;
      if (l === 1 ? ft.delete(o) : ft.set(o, l - 1), l !== 1)
        return;
      let s = An.get(o);
      s && (s["aria-hidden"] === null ? o.removeAttribute("aria-hidden") : o.setAttribute("aria-hidden", s["aria-hidden"]), o.inert = s.inert, An.delete(o));
    });
    let a = (r = ft.get(o)) != null ? r : 0;
    ft.set(o, a + 1), a === 0 && (An.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), o.setAttribute("aria-hidden", "true"), o.inert = !0);
  });
}
function Bv({ defaultContainers: e = [], portals: t, mainTreeNodeRef: n } = {}) {
  let r = _(null), o = Be(r);
  function a() {
    var i, l, s;
    let c = [];
    for (let u of e)
      u !== null && (u instanceof HTMLElement ? c.push(u) : "value" in u && u.value instanceof HTMLElement && c.push(u.value));
    if (t != null && t.value)
      for (let u of t.value)
        c.push(u);
    for (let u of (i = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? i : [])
      u !== document.body && u !== document.head && u instanceof HTMLElement && u.id !== "headlessui-portal-root" && (u.contains(R(r)) || u.contains((s = (l = R(r)) == null ? void 0 : l.getRootNode()) == null ? void 0 : s.host) || c.some((d) => u.contains(d)) || c.push(u));
    return c;
  }
  return { resolveContainers: a, contains(i) {
    return a().some((l) => l.contains(i));
  }, mainTreeNodeRef: r, MainTreeNode() {
    return n != null ? null : K(Qt, { features: xt.Hidden, ref: r });
  } };
}
let Di = Symbol("ForcePortalRootContext");
function Uv() {
  return ie(Di, !1);
}
let Xn = M({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return fe(Di, e.force), () => {
    let { force: r, ...o } = e;
    return W({ theirProps: o, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} }), Li = Symbol("StackContext");
var Yn = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Yn || {});
function kv() {
  return ie(Li, () => {
  });
}
function Hv({ type: e, enabled: t, element: n, onUpdate: r }) {
  let o = kv();
  function a(...i) {
    r == null || r(...i), o(...i);
  }
  Q(() => {
    de(t, (i, l) => {
      i ? a(0, e, n) : l === !0 && a(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), pe(() => {
    t.value && a(1, e, n);
  }), fe(Li, a);
}
let ji = Symbol("DescriptionContext");
function Vv() {
  let e = ie(ji, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function zv({ slot: e = _({}), name: t = "Description", props: n = {} } = {}) {
  let r = _([]);
  function o(a) {
    return r.value.push(a), () => {
      let i = r.value.indexOf(a);
      i !== -1 && r.value.splice(i, 1);
    };
  }
  return fe(ji, { register: o, slot: e, name: t, props: n }), A(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
M({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let o = (r = e.id) != null ? r : `headlessui-description-${se()}`, a = Vv();
  return Q(() => pe(a.register(o))), () => {
    let { name: i = "Description", slot: l = _({}), props: s = {} } = a, { ...c } = e, u = { ...Object.entries(s).reduce((d, [f, p]) => Object.assign(d, { [f]: re(p) }), {}), id: o };
    return W({ ourProps: u, theirProps: c, slot: l.value, attrs: t, slots: n, name: i });
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
const Qn = /* @__PURE__ */ new WeakMap();
function Wv(e) {
  var t;
  return (t = Qn.get(e)) != null ? t : 0;
}
function Ho(e, t) {
  let n = t(Wv(e));
  return n <= 0 ? Qn.delete(e) : Qn.set(e, n), n;
}
let Ni = M({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let r = _(null), o = A(() => Be(r)), a = Uv(), i = ie(Mi, null), l = _(a === !0 || i == null ? qv(r.value) : i.resolveTarget());
  l.value && Ho(l.value, (f) => f + 1);
  let s = _(!1);
  Q(() => {
    s.value = !0;
  }), ee(() => {
    a || i != null && (l.value = i.resolveTarget());
  });
  let c = ie(Zn, null), u = !1, d = Xi();
  return de(r, () => {
    if (u || !c)
      return;
    let f = R(r);
    f && (pe(c.register(f), d), u = !0);
  }), pe(() => {
    var f, p;
    let h = (f = o.value) == null ? void 0 : f.getElementById("headlessui-portal-root");
    !h || l.value !== h || Ho(l.value, (v) => v - 1) || l.value.children.length > 0 || (p = l.value.parentElement) == null || p.removeChild(l.value);
  }), () => {
    if (!s.value || l.value === null)
      return null;
    let f = { ref: r, "data-headlessui-portal": "" };
    return K(Yi, { to: l.value }, W({ ourProps: f, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Zn = Symbol("PortalParentContext");
function Gv() {
  let e = ie(Zn, null), t = _([]);
  function n(a) {
    return t.value.push(a), e && e.register(a), () => r(a);
  }
  function r(a) {
    let i = t.value.indexOf(a);
    i !== -1 && t.value.splice(i, 1), e && e.unregister(a);
  }
  let o = { register: n, unregister: r, portals: t };
  return [t, M({ name: "PortalWrapper", setup(a, { slots: i }) {
    return fe(Zn, o), () => {
      var l;
      return (l = i.default) == null ? void 0 : l.call(i);
    };
  } })];
}
let Mi = Symbol("PortalGroupContext"), Kv = M({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let r = or({ resolveTarget() {
    return e.target;
  } });
  return fe(Mi, r), () => {
    let { target: o, ...a } = e;
    return W({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} });
var Jv = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Jv || {});
let er = Symbol("DialogContext");
function Ft(e) {
  let t = ie(er, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ft), n;
  }
  return t;
}
let jt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
M({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: jt }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  var a, i;
  let l = (a = e.id) != null ? a : `headlessui-dialog-${se()}`, s = _(!1);
  Q(() => {
    s.value = !0;
  });
  let c = !1, u = A(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (c || (c = !0, console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), d = _(0), f = It(), p = A(() => e.open === jt && f !== null ? (f.value & J.Open) === J.Open : e.open), h = _(null), v = A(() => Be(h));
  if (o({ el: h, $el: h }), !(e.open !== jt || f !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof p.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${p.value === jt ? void 0 : e.open}`);
  let m = A(() => s.value && p.value ? 0 : 1), y = A(() => m.value === 0), w = A(() => d.value > 1), P = ie(er, null) !== null, [$, O] = Gv(), { resolveContainers: C, mainTreeNodeRef: F, MainTreeNode: x } = Bv({ portals: $, defaultContainers: [A(() => {
    var H;
    return (H = te.panelRef.value) != null ? H : h.value;
  })] }), L = A(() => w.value ? "parent" : "leaf"), T = A(() => f !== null ? (f.value & J.Closing) === J.Closing : !1), b = A(() => P || T.value ? !1 : y.value), S = A(() => {
    var H, G, ge;
    return (ge = Array.from((G = (H = v.value) == null ? void 0 : H.querySelectorAll("body > *")) != null ? G : []).find((be) => be.id === "headlessui-portal-root" ? !1 : be.contains(R(F)) && be instanceof HTMLElement)) != null ? ge : null;
  });
  ko(S, b);
  let E = A(() => w.value ? !0 : y.value), I = A(() => {
    var H, G, ge;
    return (ge = Array.from((G = (H = v.value) == null ? void 0 : H.querySelectorAll("[data-headlessui-portal]")) != null ? G : []).find((be) => be.contains(R(F)) && be instanceof HTMLElement)) != null ? ge : null;
  });
  ko(I, E), Hv({ type: "Dialog", enabled: A(() => m.value === 0), element: h, onUpdate: (H, G) => {
    if (G === "Dialog")
      return oe(H, { [Yn.Add]: () => d.value += 1, [Yn.Remove]: () => d.value -= 1 });
  } });
  let j = zv({ name: "DialogDescription", slot: A(() => ({ open: p.value })) }), V = _(null), te = { titleId: V, panelRef: _(null), dialogState: m, setTitleId(H) {
    V.value !== H && (V.value = H);
  }, close() {
    t("close", !1);
  } };
  fe(er, te);
  let we = A(() => !(!y.value || w.value));
  _r(C, (H, G) => {
    H.preventDefault(), te.close(), le(() => G == null ? void 0 : G.focus());
  }, we);
  let Y = A(() => !(w.value || m.value !== 0));
  _i((i = v.value) == null ? void 0 : i.defaultView, "keydown", (H) => {
    Y.value && (H.defaultPrevented || H.key === U.Escape && (H.preventDefault(), H.stopPropagation(), te.close()));
  });
  let he = A(() => !(T.value || m.value !== 0 || P));
  return Mv(v, he, (H) => {
    var G;
    return { containers: [...(G = H.containers) != null ? G : [], C] };
  }), ee((H) => {
    if (m.value !== 0)
      return;
    let G = R(h);
    if (!G)
      return;
    let ge = new ResizeObserver((be) => {
      for (let mn of be) {
        let $t = mn.target.getBoundingClientRect();
        $t.x === 0 && $t.y === 0 && $t.width === 0 && $t.height === 0 && te.close();
      }
    });
    ge.observe(G), H(() => ge.disconnect());
  }), () => {
    let { open: H, initialFocus: G, ...ge } = e, be = { ...n, ref: h, id: l, role: u.value, "aria-modal": m.value === 0 ? !0 : void 0, "aria-labelledby": V.value, "aria-describedby": j.value }, mn = { open: m.value === 0 };
    return K(Xn, { force: !0 }, () => [K(Ni, () => K(Kv, { target: h.value }, () => K(Xn, { force: !1 }, () => K(dt, { initialFocus: G, containers: C, features: y.value ? oe(L.value, { parent: dt.features.RestoreFocus, leaf: dt.features.All & ~dt.features.FocusLock }) : dt.features.None }, () => K(O, {}, () => W({ ourProps: be, theirProps: { ...ge, ...n }, slot: mn, attrs: n, slots: r, visible: m.value === 0, features: _e.RenderStrategy | _e.Static, name: "Dialog" })))))), K(x)]);
  };
} });
M({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let o = (r = e.id) != null ? r : `headlessui-dialog-overlay-${se()}`, a = Ft("DialogOverlay");
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
  let a = (o = e.id) != null ? o : `headlessui-dialog-backdrop-${se()}`, i = Ft("DialogBackdrop"), l = _(null);
  return r({ el: l, $el: l }), Q(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...s } = e, c = { id: a, ref: l, "aria-hidden": !0 };
    return K(Xn, { force: !0 }, () => K(Ni, () => W({ ourProps: c, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
M({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-dialog-panel-${se()}`, i = Ft("DialogPanel");
  r({ el: i.panelRef, $el: i.panelRef });
  function l(s) {
    s.stopPropagation();
  }
  return () => {
    let { ...s } = e, c = { id: a, ref: i.panelRef, onClick: l };
    return W({ ourProps: c, theirProps: s, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} });
M({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let o = (r = e.id) != null ? r : `headlessui-dialog-title-${se()}`, a = Ft("DialogTitle");
  return Q(() => {
    a.setTitleId(o), pe(() => a.setTitleId(null));
  }), () => {
    let { ...i } = e;
    return W({ ourProps: { id: o }, theirProps: i, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
let Vo = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function zo(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", o = e.cloneNode(!0);
  if (!(o instanceof HTMLElement))
    return r;
  let a = !1;
  for (let l of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    l.remove(), a = !0;
  let i = a ? (n = o.innerText) != null ? n : "" : r;
  return Vo.test(i) && (i = i.replace(Vo, "")), i;
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
        return typeof i == "string" ? i.trim() : zo(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0)
      return r.join(", ");
  }
  return zo(e).trim();
}
function Yv(e) {
  let t = _(""), n = _("");
  return () => {
    let r = R(e);
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
let Bi = Symbol("MenuContext");
function hn(e) {
  let t = ie(Bi, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, hn), n;
  }
  return t;
}
M({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let r = _(1), o = _(null), a = _(null), i = _([]), l = _(""), s = _(null), c = _(1);
  function u(f = (p) => p) {
    let p = s.value !== null ? i.value[s.value] : null, h = Pr(f(i.value.slice()), (m) => R(m.dataRef.domRef)), v = p ? h.indexOf(p) : null;
    return v === -1 && (v = null), { items: h, activeItemIndex: v };
  }
  let d = { menuState: r, buttonRef: o, itemsRef: a, items: i, searchQuery: l, activeItemIndex: s, activationTrigger: c, closeMenu: () => {
    r.value = 1, s.value = null;
  }, openMenu: () => r.value = 0, goToItem(f, p, h) {
    let v = u(), m = Jn(f === k.Specific ? { focus: k.Specific, id: p } : { focus: f }, { resolveItems: () => v.items, resolveActiveIndex: () => v.activeItemIndex, resolveId: (y) => y.id, resolveDisabled: (y) => y.dataRef.disabled });
    l.value = "", s.value = m, c.value = h != null ? h : 1, i.value = v.items;
  }, search(f) {
    let p = l.value !== "" ? 0 : 1;
    l.value += f.toLowerCase();
    let h = (s.value !== null ? i.value.slice(s.value + p).concat(i.value.slice(0, s.value + p)) : i.value).find((m) => m.dataRef.textValue.startsWith(l.value) && !m.dataRef.disabled), v = h ? i.value.indexOf(h) : -1;
    v === -1 || v === s.value || (s.value = v, c.value = 1);
  }, clearSearch() {
    l.value = "";
  }, registerItem(f, p) {
    let h = u((v) => [...v, { id: f, dataRef: p }]);
    i.value = h.items, s.value = h.activeItemIndex, c.value = 1;
  }, unregisterItem(f) {
    let p = u((h) => {
      let v = h.findIndex((m) => m.id === f);
      return v !== -1 && h.splice(v, 1), h;
    });
    i.value = p.items, s.value = p.activeItemIndex, c.value = 1;
  } };
  return _r([o, a], (f, p) => {
    var h;
    d.closeMenu(), Rr(p, Cr.Loose) || (f.preventDefault(), (h = R(o)) == null || h.focus());
  }, A(() => r.value === 0)), fe(Bi, d), Ir(A(() => oe(r.value, { [0]: J.Open, [1]: J.Closed }))), () => {
    let f = { open: r.value === 0, close: d.closeMenu };
    return W({ ourProps: {}, theirProps: e, slot: f, slots: t, attrs: n, name: "Menu" });
  };
} });
M({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-menu-button-${se()}`, i = hn("MenuButton");
  r({ el: i.buttonRef, $el: i.buttonRef });
  function l(d) {
    switch (d.key) {
      case U.Space:
      case U.Enter:
      case U.ArrowDown:
        d.preventDefault(), d.stopPropagation(), i.openMenu(), le(() => {
          var f;
          (f = R(i.itemsRef)) == null || f.focus({ preventScroll: !0 }), i.goToItem(k.First);
        });
        break;
      case U.ArrowUp:
        d.preventDefault(), d.stopPropagation(), i.openMenu(), le(() => {
          var f;
          (f = R(i.itemsRef)) == null || f.focus({ preventScroll: !0 }), i.goToItem(k.Last);
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
  function c(d) {
    e.disabled || (i.menuState.value === 0 ? (i.closeMenu(), le(() => {
      var f;
      return (f = R(i.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), i.openMenu(), em(() => {
      var f;
      return (f = R(i.itemsRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })));
  }
  let u = bi(A(() => ({ as: e.as, type: t.type })), i.buttonRef);
  return () => {
    var d;
    let f = { open: i.menuState.value === 0 }, { ...p } = e, h = { ref: i.buttonRef, id: a, type: u.value, "aria-haspopup": "menu", "aria-controls": (d = R(i.itemsRef)) == null ? void 0 : d.id, "aria-expanded": i.menuState.value === 0, onKeydown: l, onKeyup: s, onClick: c };
    return W({ ourProps: h, theirProps: p, slot: f, attrs: t, slots: n, name: "MenuButton" });
  };
} });
M({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-menu-items-${se()}`, i = hn("MenuItems"), l = _(null);
  r({ el: i.itemsRef, $el: i.itemsRef }), wi({ container: A(() => R(i.itemsRef)), enabled: A(() => i.menuState.value === 0), accept(f) {
    return f.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : f.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(f) {
    f.setAttribute("role", "none");
  } });
  function s(f) {
    var p;
    switch (l.value && clearTimeout(l.value), f.key) {
      case U.Space:
        if (i.searchQuery.value !== "")
          return f.preventDefault(), f.stopPropagation(), i.search(f.key);
      case U.Enter:
        if (f.preventDefault(), f.stopPropagation(), i.activeItemIndex.value !== null) {
          let h = i.items.value[i.activeItemIndex.value];
          (p = R(h.dataRef.domRef)) == null || p.click();
        }
        i.closeMenu(), hi(R(i.buttonRef));
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
        f.preventDefault(), f.stopPropagation(), i.closeMenu(), le(() => {
          var h;
          return (h = R(i.buttonRef)) == null ? void 0 : h.focus({ preventScroll: !0 });
        });
        break;
      case U.Tab:
        f.preventDefault(), f.stopPropagation(), i.closeMenu(), le(() => vv(R(i.buttonRef), f.shiftKey ? Ae.Previous : Ae.Next));
        break;
      default:
        f.key.length === 1 && (i.search(f.key), l.value = setTimeout(() => i.clearSearch(), 350));
        break;
    }
  }
  function c(f) {
    switch (f.key) {
      case U.Space:
        f.preventDefault();
        break;
    }
  }
  let u = It(), d = A(() => u !== null ? (u.value & J.Open) === J.Open : i.menuState.value === 0);
  return () => {
    var f, p;
    let h = { open: i.menuState.value === 0 }, { ...v } = e, m = { "aria-activedescendant": i.activeItemIndex.value === null || (f = i.items.value[i.activeItemIndex.value]) == null ? void 0 : f.id, "aria-labelledby": (p = R(i.buttonRef)) == null ? void 0 : p.id, id: a, onKeydown: s, onKeyup: c, role: "menu", tabIndex: 0, ref: i.itemsRef };
    return W({ ourProps: m, theirProps: v, slot: h, attrs: t, slots: n, features: _e.RenderStrategy | _e.Static, visible: d.value, name: "MenuItems" });
  };
} });
M({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: t, attrs: n, expose: r }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-menu-item-${se()}`, i = hn("MenuItem"), l = _(null);
  r({ el: l, $el: l });
  let s = A(() => i.activeItemIndex.value !== null ? i.items.value[i.activeItemIndex.value].id === a : !1), c = Yv(l), u = A(() => ({ disabled: e.disabled, get textValue() {
    return c();
  }, domRef: l }));
  Q(() => i.registerItem(a, u)), pe(() => i.unregisterItem(a)), ee(() => {
    i.menuState.value === 0 && s.value && i.activationTrigger.value !== 0 && le(() => {
      var y, w;
      return (w = (y = R(l)) == null ? void 0 : y.scrollIntoView) == null ? void 0 : w.call(y, { block: "nearest" });
    });
  });
  function d(y) {
    if (e.disabled)
      return y.preventDefault();
    i.closeMenu(), hi(R(i.buttonRef));
  }
  function f() {
    if (e.disabled)
      return i.goToItem(k.Nothing);
    i.goToItem(k.Specific, a);
  }
  let p = yi();
  function h(y) {
    p.update(y);
  }
  function v(y) {
    p.wasMoved(y) && (e.disabled || s.value || i.goToItem(k.Specific, a, 0));
  }
  function m(y) {
    p.wasMoved(y) && (e.disabled || s.value && i.goToItem(k.Nothing));
  }
  return () => {
    let { disabled: y, ...w } = e, P = { active: s.value, disabled: y, close: i.closeMenu };
    return W({ ourProps: { id: a, ref: l, role: "menuitem", tabIndex: y === !0 ? void 0 : -1, "aria-disabled": y === !0 ? !0 : void 0, onClick: d, onFocus: f, onPointerenter: h, onMouseenter: h, onPointermove: v, onMousemove: v, onPointerleave: m, onMouseleave: m }, theirProps: { ...n, ...w }, slot: P, attrs: n, slots: t, name: "MenuItem" });
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
function Nt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var tr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(tr || {});
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
function qo(e, t, n, r, o, a) {
  let i = He(), l = a !== void 0 ? tm(a) : () => {
  };
  return Nt(e, ...o), Cn(e, ...t, ...n), i.nextFrame(() => {
    Nt(e, ...n), Cn(e, ...r), i.add(nm(e, (s) => (Nt(e, ...r, ...t), Cn(e, ...o), l(s))));
  }), i.add(() => Nt(e, ...t, ...n, ...r, ...o)), i.add(() => l("cancelled")), i.dispose;
}
function ze(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Fr = Symbol("TransitionContext");
var rm = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(rm || {});
function om() {
  return ie(Fr, null) !== null;
}
function am() {
  let e = ie(Fr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function im() {
  let e = ie($r, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let $r = Symbol("NestingContext");
function vn(e) {
  return "children" in e ? vn(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ui(e) {
  let t = _([]), n = _(!1);
  Q(() => n.value = !0), pe(() => n.value = !1);
  function r(a, i = Ue.Hidden) {
    let l = t.value.findIndex(({ id: s }) => s === a);
    l !== -1 && (oe(i, { [Ue.Unmount]() {
      t.value.splice(l, 1);
    }, [Ue.Hidden]() {
      t.value[l].state = "hidden";
    } }), !vn(t) && n.value && (e == null || e()));
  }
  function o(a) {
    let i = t.value.find(({ id: l }) => l === a);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: a, state: "visible" }), () => r(a, Ue.Unmount);
  }
  return { children: t, register: o, unregister: r };
}
let ki = _e.RenderStrategy, lm = M({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
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
  function c() {
    a.value &= ~J.Closing, t("afterLeave");
  }
  if (!om() && yv())
    return () => K(um, { ...e, onBeforeEnter: i, onAfterEnter: l, onBeforeLeave: s, onAfterLeave: c }, r);
  let u = _(null), d = A(() => e.unmount ? Ue.Unmount : Ue.Hidden);
  o({ el: u, $el: u });
  let { show: f, appear: p } = am(), { register: h, unregister: v } = im(), m = _(f.value ? "visible" : "hidden"), y = { value: !0 }, w = se(), P = { value: !1 }, $ = Ui(() => {
    !P.value && m.value !== "hidden" && (m.value = "hidden", v(w), c());
  });
  Q(() => {
    let E = h(w);
    pe(E);
  }), ee(() => {
    if (d.value === Ue.Hidden && w) {
      if (f.value && m.value !== "visible") {
        m.value = "visible";
        return;
      }
      oe(m.value, { hidden: () => v(w), visible: () => h(w) });
    }
  });
  let O = ze(e.enter), C = ze(e.enterFrom), F = ze(e.enterTo), x = ze(e.entered), L = ze(e.leave), T = ze(e.leaveFrom), b = ze(e.leaveTo);
  Q(() => {
    ee(() => {
      if (m.value === "visible") {
        let E = R(u);
        if (E instanceof Comment && E.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function S(E) {
    let I = y.value && !p.value, j = R(u);
    !j || !(j instanceof HTMLElement) || I || (P.value = !0, f.value && i(), f.value || s(), E(f.value ? qo(j, O, C, F, x, (V) => {
      P.value = !1, V === tr.Finished && l();
    }) : qo(j, L, T, b, x, (V) => {
      P.value = !1, V === tr.Finished && (vn($) || (m.value = "hidden", v(w), c()));
    })));
  }
  return Q(() => {
    de([f], (E, I, j) => {
      S(j), y.value = !1;
    }, { immediate: !0 });
  }), fe($r, $), Ir(A(() => oe(m.value, { visible: J.Open, hidden: J.Closed }) | a.value)), () => {
    let { appear: E, show: I, enter: j, enterFrom: V, enterTo: te, entered: we, leave: Y, leaveFrom: he, leaveTo: H, ...G } = e, ge = { ref: u }, be = { ...G, ...p.value && f.value && Pt.isServer ? { class: Zt([n.class, G.class, ...O, ...C]) } : {} };
    return W({ theirProps: be, ourProps: ge, slot: {}, slots: r, attrs: n, features: ki, visible: m.value === "visible", name: "TransitionChild" });
  };
} }), sm = lm, um = M({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r }) {
  let o = It(), a = A(() => e.show === null && o !== null ? (o.value & J.Open) === J.Open : e.show);
  ee(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = _(a.value ? "visible" : "hidden"), l = Ui(() => {
    i.value = "hidden";
  }), s = _(!0), c = { show: a, appear: A(() => e.appear || !s.value) };
  return Q(() => {
    ee(() => {
      s.value = !1, a.value ? i.value = "visible" : vn(l) || (i.value = "hidden");
    });
  }), fe($r, l), fe(Fr, c), () => {
    let u = _t(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), d = { unmount: e.unmount };
    return W({ ourProps: { ...d, as: "template" }, theirProps: {}, slot: {}, slots: { ...r, default: () => [K(sm, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...d, ...u }, r.default)] }, attrs: {}, features: ki, visible: i.value === "visible", name: "Transition" });
  };
} });
var Wo;
const cm = typeof window < "u";
cm && ((Wo = window == null ? void 0 : window.navigator) == null ? void 0 : Wo.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function dm(e) {
  return e;
}
const nr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, rr = "__vueuse_ssr_handlers__";
nr[rr] = nr[rr] || {};
nr[rr];
var Go;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Go || (Go = {}));
var fm = Object.defineProperty, Ko = Object.getOwnPropertySymbols, pm = Object.prototype.hasOwnProperty, hm = Object.prototype.propertyIsEnumerable, Jo = (e, t, n) => t in e ? fm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vm = (e, t) => {
  for (var n in t || (t = {}))
    pm.call(t, n) && Jo(e, n, t[n]);
  if (Ko)
    for (var n of Ko(t))
      hm.call(t, n) && Jo(e, n, t[n]);
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
}, ym = { name: "Error" }, Hi = /* @__PURE__ */ M({
  ...ym,
  props: {
    error: {}
  },
  setup(e) {
    return (t, n) => t.error ? (B(), X("div", bm, [
      ue(t.$slots, "default", {}, () => [
        ht(je(t.error), 1)
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
    return (t, n) => (B(), X("div", wm, [
      ne("div", {
        class: Zt(["mt-1 w-full rounded-md", { "shadow-sm": t.shadow }])
      }, [
        ue(t.$slots, "default")
      ], 2),
      t.description ? (B(), X("p", Sm, je(t.description), 1)) : De("", !0),
      t.error ? (B(), ve(Hi, {
        key: 1,
        error: t.error
      }, null, 8, ["error"])) : De("", !0)
    ]));
  }
}), xm = { name: "Actions" }, Tm = { class: "mt-8 border-t border-gray-200 pt-5" }, Am = { class: "flex justify-end" }, Cm = { class: "inline-flex" };
function Rm(e, t, n, r, o, a) {
  return B(), X("div", Tm, [
    ne("div", Am, [
      ne("span", Cm, [
        ue(e.$slots, "default")
      ])
    ])
  ]);
}
const Pm = /* @__PURE__ */ Hh(xm, [["render", Rm]]), _m = { class: "relative flex items-start" }, Im = { class: "flex h-5 items-center" }, Fm = ["id", "value", "disabled", "readonly"], $m = { class: "ml-3" }, Dm = ["for"], Lm = { name: "Checkbox" }, jm = /* @__PURE__ */ M({
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
    return (r, o) => (B(), ve(Om, Le(r.$props, { shadow: !1 }), {
      default: Ce(() => [
        ne("div", _m, [
          ne("div", Im, [
            _n(ne("input", Le({
              id: r.id,
              "onUpdate:modelValue": o[0] || (o[0] = (a) => Qi(n) ? n.value = a : null),
              value: r.value,
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 accent-primary-600 focus:ring-primary-500",
              disabled: r.disabled,
              readonly: r.readonly
            }, r.$attrs), null, 16, Fm), [
              [Zi, re(n)]
            ]),
            ne("div", $m, [
              ne("label", {
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
    return (n, r) => (B(), X("label", {
      for: t.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      ue(n.$slots, "default")
    ], 8, Nm));
  }
});
var Vi = {}, zi = {};
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
})(zi);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const t = /* @__PURE__ */ n(zi);
  function n(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const r = t.default;
})(Vi);
let Rn = Vi;
var Um = (Rn.__esModule ? Rn : { default: Rn }).default, qi = {}, Wi = {}, Dr = { exports: {} }, N = String, Gi = function() {
  return { isColorSupported: !1, reset: N, bold: N, dim: N, italic: N, underline: N, inverse: N, hidden: N, strikethrough: N, black: N, red: N, green: N, yellow: N, blue: N, magenta: N, cyan: N, white: N, gray: N, bgBlack: N, bgRed: N, bgGreen: N, bgYellow: N, bgBlue: N, bgMagenta: N, bgCyan: N, bgWhite: N, blackBright: N, redBright: N, greenBright: N, yellowBright: N, blueBright: N, magentaBright: N, cyanBright: N, whiteBright: N, bgBlackBright: N, bgRedBright: N, bgGreenBright: N, bgYellowBright: N, bgBlueBright: N, bgMagentaBright: N, bgCyanBright: N, bgWhiteBright: N };
};
Dr.exports = Gi();
Dr.exports.createColors = Gi;
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
  const n = /* @__PURE__ */ r(Dr.exports);
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
})(Wi);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(Wi);
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
})(qi);
let Pn = qi;
var km = (Pn.__esModule ? Pn : { default: Pn }).default;
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
    return (a, i) => (B(!0), X(Ve, null, Tt(a.items, (l, s) => {
      var c, u, d;
      return B(), ve(re(jm), {
        id: `${n.form._prefix}-${(c = l.label) != null ? c : l}`,
        key: s,
        modelValue: o.value,
        "onUpdate:modelValue": i[0] || (i[0] = (f) => o.value = f),
        value: (u = l.value) != null ? u : l,
        label: (d = l.label) != null ? d : l
      }, null, 8, ["id", "modelValue", "value", "label"]);
    }), 128));
  }
}), Ki = (e) => Object.keys(e).reduce((t, n) => {
  var r;
  return e[n].schema ? { ...t, ...Ki(e[n].schema) } : (t[n] = (r = e[n].value) != null ? r : null, t);
}, {}), Vm = (e) => {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let n = "";
  for (let r = 0; r < e; r++)
    n += t.charAt(Math.floor(Math.random() * t.length));
  return n;
}, Xo = (e) => Object.keys(e).reduce((t, n) => {
  var o, a, i;
  if (e[n].schema)
    return { ...t, ...Ki(e[n].schema) };
  if (e[n].component === Hm)
    return t[n] = (o = e[n].checked) != null ? o : [], t;
  const r = (a = e[n]) == null ? void 0 : a.fieldset;
  return r ? (Object.entries(r).forEach(([l, s]) => {
    var c;
    s != null && s.model ? t[s.model] = (c = s.value) != null ? c : null : t[l] = s;
  }), t) : (t[n] = (i = e[n].value) != null ? i : null, t);
}, {}), Lr = (e) => Object.entries(e).map(([t, n]) => {
  const r = n.hasOwnProperty("setup") ? { component: n } : n;
  return {
    name: t,
    definition: r
  };
});
function c0(e = {}, t = {}) {
  const n = t != null && t.precognition ? Th(t.method, t.url, Xo(e)) : Yo(Xo(e));
  return n._prefix = Vm(6), {
    elements: Lr(e),
    form: n,
    options: t
  };
}
const zm = { key: 0 }, jr = /* @__PURE__ */ M({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    const t = e, n = ie("schemaOptions", {}), r = A(() => {
      var h;
      const p = (h = t.element.definition) == null ? void 0 : h.fieldset;
      return p ? Object.entries(p).reduce((v, [m, y]) => (y != null && y.model ? v[y.model] = t.form[y.model] : v[m] = t.form[m], v), {}) : {
        modelValue: t.form[t.element.name]
      };
    }), o = A(() => {
      var v;
      let p = Object.entries({
        id: `${t.form._prefix}-${t.element.name}`,
        ...t.element.definition,
        ...t.element.definition.props,
        ...r.value,
        schema: t.element.definition.schema,
        form: t.form,
        error: (v = i.value[0]) != null ? v : null
      }), h = t.element.definition.component.props;
      return Object.fromEntries(p.filter(([m]) => h.hasOwnProperty(m)));
    }), a = A(() => {
      var y, w, P;
      const p = (y = t.element.definition) == null ? void 0 : y.fieldset, h = (w = t.element.definition.precognitive) != null ? w : (n == null ? void 0 : n.optInPrecognition) !== !0, v = (P = t.element.definition.precognitiveEvent) != null ? P : "change", m = ($, O = "modelValue") => ({
        [`update:${O}`]: (C) => {
          t.form[$] = C, h && v === "update" && t.form.validate($);
        },
        ...h && v !== "update" ? { [v]: () => t.form.validate($) } : {}
      });
      return p ? Object.entries(p).reduce(($, [O, C]) => {
        var x;
        const F = (x = C == null ? void 0 : C.model) != null ? x : O;
        return {
          ...$,
          ...m(F, F)
        };
      }, {}) : m(t.element.name);
    }), i = A(() => {
      var h;
      const p = (h = t.element.definition) == null ? void 0 : h.fieldset;
      return p ? Object.keys(p).map((v) => t.form.errors[v]).filter((v) => v) : [t.form.errors[t.element.name]];
    }), l = A(() => {
      var h;
      return ((h = t.element.definition.label) != null ? h : t.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }), s = !!t.element.definition.schema, c = A(() => t.element.definition.showLabel !== void 0 ? t.element.definition.showLabel : t.element.definition.component.name === "Hidden" ? !1 : !s), u = A(() => {
      if (t.element.definition.alert !== void 0) {
        const p = t.element.definition.alert;
        return p.visible = typeof p.visible == "function" ? p.visible : () => !0, p;
      }
      return null;
    }), d = _(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible : () => !0
    ), f = _(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible(t.form) : () => !0
    );
    return de(t.form, (p) => {
      typeof d.value == "function" && (f.value = d.value(p));
    }), (p, h) => f.value ? (B(), X("div", zm, [
      c.value ? (B(), ve(re(Bm), {
        key: 0,
        for: o.value.id
      }, {
        default: Ce(() => [
          ht(je(l.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : De("", !0),
      (B(), ve(tl(p.element.definition.component), Le({
        key: p.element.name
      }, o.value, nl(a.value)), null, 16)),
      u.value && u.value.visible() ? (B(), ve(re(Bh), {
        key: 1,
        "without-icon": ""
      }, rl({
        default: Ce(() => [
          ht(je(u.value.text) + " ", 1)
        ]),
        _: 2
      }, [
        u.value.actionHref && u.value.actionText ? {
          name: "actions",
          fn: Ce(() => [
            nt(re(kh), {
              external: u.value.externalAction,
              href: u.value.actionHref
            }, {
              default: Ce(() => [
                ht(je(u.value.actionText), 1)
              ]),
              _: 1
            }, 8, ["external", "href"])
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : De("", !0),
      o.value.hasOwnProperty("error") ? De("", !0) : (B(!0), X(Ve, { key: 2 }, Tt(i.value, (v, m) => (B(), ve(re(Hi), {
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
    return fe("schemaOptions", e.schema.options), (n, r) => (B(), X("div", qm, [
      ue(n.$slots, "default", {}, () => [
        (B(!0), X(Ve, null, Tt(n.schema.elements, (o, a) => (B(), ve(jr, {
          key: a,
          element: o,
          form: n.schema.form
        }, null, 8, ["element", "form"]))), 128))
      ]),
      ue(n.$slots, "actions-wrapper", {
        form: n.schema.form
      }, () => [
        nt(re(Pm), null, {
          default: Ce(() => [
            ue(n.$slots, "actions", {
              form: n.schema.form
            }, () => [
              nt(re(zh), {
                as: "button",
                type: "submit",
                loading: n.schema.form.processing
              }, {
                default: Ce(() => [
                  ht(je(n.submit), 1)
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
    const n = Lr(e.schema);
    return (r, o) => (B(), X("div", {
      class: Zt(["grid gap-x-4 gap-y-6 md:grid-flow-col", "md:grid-cols-" + re(n).length])
    }, [
      (B(!0), X(Ve, null, Tt(re(n), (a, i) => (B(), ve(jr, Le({
        key: i,
        element: a,
        form: r.form
      }, { ref_for: !0 }, r.$attrs), null, 16, ["element", "form"]))), 128))
    ], 2));
  }
}), Wm = { class: "mt-10" }, Gm = {
  key: 0,
  class: "mt-1 whitespace-pre-line text-sm leading-6 text-gray-500"
}, Km = { class: "mt-4 space-y-6" }, p0 = /* @__PURE__ */ M({
  __name: "Section",
  props: {
    schema: {},
    form: {},
    heading: {},
    description: {}
  },
  setup(e) {
    const n = Lr(e.schema);
    return (r, o) => (B(), X("div", Wm, [
      ne("label", null, je(r.heading), 1),
      r.description ? (B(), X("p", Gm, je(r.description), 1)) : De("", !0),
      ne("div", Km, [
        (B(!0), X(Ve, null, Tt(re(n), (a, i) => (B(), ve(jr, {
          key: i,
          element: a,
          form: r.form
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
