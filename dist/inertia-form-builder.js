import { useForm as un } from "@inertiajs/vue3";
import { ref as lr, reactive as So, toRaw as Oo, watchEffect as _o, defineComponent as Le, createElementBlock as k, openBlock as N, Fragment as nt, renderList as ot, createVNode as We, unref as se, withCtx as be, createTextVNode as $e, toDisplayString as ue, computed as L, isRef as ln, watch as Ao, createCommentVNode as ye, createBlock as ie, resolveDynamicComponent as Ro, mergeProps as cn, toHandlers as $o, renderSlot as gt, createElementVNode as At, normalizeClass as xo } from "vue";
import { Checkbox as Po, Label as fn, Alert as Co, AlertDescription as jo, Button as dn, FieldError as Fo } from "@codinglabsau/gooey";
function pn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: No } = Object.prototype, { getPrototypeOf: Mt } = Object, { iterator: st, toStringTag: hn } = Symbol, it = /* @__PURE__ */ ((e) => (t) => {
  const r = No.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), J = (e) => (e = e.toLowerCase(), (t) => it(t) === e), at = (e) => (t) => typeof t === e, { isArray: Ee } = Array, we = at("undefined");
function De(e) {
  return e !== null && !we(e) && e.constructor !== null && !we(e.constructor) && U(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const mn = J("ArrayBuffer");
function Lo(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && mn(e.buffer), t;
}
const Do = at("string"), U = at("function"), gn = at("number"), Ue = (e) => e !== null && typeof e == "object", Uo = (e) => e === !0 || e === !1, Ge = (e) => {
  if (it(e) !== "object")
    return !1;
  const t = Mt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(hn in e) && !(st in e);
}, Io = (e) => {
  if (!Ue(e) || De(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Bo = J("Date"), Mo = J("File"), Ho = J("Blob"), qo = J("FileList"), Vo = (e) => Ue(e) && U(e.pipe), zo = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || U(e.append) && ((t = it(e)) === "formdata" || // detect form-data instance
  t === "object" && U(e.toString) && e.toString() === "[object FormData]"));
}, Go = J("URLSearchParams"), [ko, Ko, Jo, Wo] = ["ReadableStream", "Request", "Response", "Headers"].map(J), Xo = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ie(e, t, { allOwnKeys: r = !1 } = {}) {
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
function yn(e, t) {
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
const ae = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, bn = (e) => !we(e) && e !== ae;
function Rt() {
  const { caseless: e, skipUndefined: t } = bn(this) && this || {}, r = {}, n = (o, s) => {
    const i = e && yn(r, s) || s;
    Ge(r[i]) && Ge(o) ? r[i] = Rt(r[i], o) : Ge(o) ? r[i] = Rt({}, o) : Ee(o) ? r[i] = o.slice() : (!t || !we(o)) && (r[i] = o);
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && Ie(arguments[o], n);
  return r;
}
const Zo = (e, t, r, { allOwnKeys: n } = {}) => (Ie(t, (o, s) => {
  r && U(o) ? e[s] = pn(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), Yo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Qo = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, es = (e, t, r, n) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!n || n(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = r !== !1 && Mt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, ts = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, rs = (e) => {
  if (!e) return null;
  if (Ee(e)) return e;
  let t = e.length;
  if (!gn(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, ns = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Mt(Uint8Array)), os = (e, t) => {
  const n = (e && e[st]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, ss = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, is = J("HTMLFormElement"), as = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), cr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), us = J("RegExp"), wn = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Ie(r, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (n[s] = i || o);
  }), Object.defineProperties(e, n);
}, ls = (e) => {
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
}, cs = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return Ee(e) ? n(e) : n(String(e).split(t)), r;
}, fs = () => {
}, ds = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function ps(e) {
  return !!(e && U(e.append) && e[hn] === "FormData" && e[st]);
}
const hs = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (Ue(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (De(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = Ee(n) ? [] : {};
        return Ie(n, (i, a) => {
          const u = r(i, o + 1);
          !we(u) && (s[a] = u);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, ms = J("AsyncFunction"), gs = (e) => e && (Ue(e) || U(e)) && U(e.then) && U(e.catch), vn = ((e, t) => e ? setImmediate : t ? ((r, n) => (ae.addEventListener("message", ({ source: o, data: s }) => {
  o === ae && s === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), ae.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  U(ae.postMessage)
), ys = typeof queueMicrotask < "u" ? queueMicrotask.bind(ae) : typeof process < "u" && process.nextTick || vn, bs = (e) => e != null && U(e[st]), d = {
  isArray: Ee,
  isArrayBuffer: mn,
  isBuffer: De,
  isFormData: zo,
  isArrayBufferView: Lo,
  isString: Do,
  isNumber: gn,
  isBoolean: Uo,
  isObject: Ue,
  isPlainObject: Ge,
  isEmptyObject: Io,
  isReadableStream: ko,
  isRequest: Ko,
  isResponse: Jo,
  isHeaders: Wo,
  isUndefined: we,
  isDate: Bo,
  isFile: Mo,
  isBlob: Ho,
  isRegExp: us,
  isFunction: U,
  isStream: Vo,
  isURLSearchParams: Go,
  isTypedArray: ns,
  isFileList: qo,
  forEach: Ie,
  merge: Rt,
  extend: Zo,
  trim: Xo,
  stripBOM: Yo,
  inherits: Qo,
  toFlatObject: es,
  kindOf: it,
  kindOfTest: J,
  endsWith: ts,
  toArray: rs,
  forEachEntry: os,
  matchAll: ss,
  isHTMLForm: is,
  hasOwnProperty: cr,
  hasOwnProp: cr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wn,
  freezeMethods: ls,
  toObjectSet: cs,
  toCamelCase: as,
  noop: fs,
  toFiniteNumber: ds,
  findKey: yn,
  global: ae,
  isContextDefined: bn,
  isSpecCompliantForm: ps,
  toJSONObject: hs,
  isAsyncFn: ms,
  isThenable: gs,
  setImmediate: vn,
  asap: ys,
  isIterable: bs
};
function O(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
d.inherits(O, Error, {
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
const En = O.prototype, Tn = {};
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
  Tn[e] = { value: e };
});
Object.defineProperties(O, Tn);
Object.defineProperty(En, "isAxiosError", { value: !0 });
O.from = (e, t, r, n, o, s) => {
  const i = Object.create(En);
  d.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (c) => c !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", u = t == null && e ? e.code : t;
  return O.call(i, a, u, r, n, o), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", s && Object.assign(i, s), i;
};
const ws = null;
function $t(e) {
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
function vs(e) {
  return d.isArray(e) && !e.some($t);
}
const Es = d.toFlatObject(d, {}, null, function(t) {
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
  const n = r.metaTokens, o = r.visitor || l, s = r.dots, i = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (d.isDate(p))
      return p.toISOString();
    if (d.isBoolean(p))
      return p.toString();
    if (!u && d.isBlob(p))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(p) || d.isTypedArray(p) ? u && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, h, m) {
    let b = p;
    if (p && !m && typeof p == "object") {
      if (d.endsWith(h, "{}"))
        h = n ? h : h.slice(0, -2), p = JSON.stringify(p);
      else if (d.isArray(p) && vs(p) || (d.isFileList(p) || d.endsWith(h, "[]")) && (b = d.toArray(p)))
        return h = Sn(h), b.forEach(function(v, _) {
          !(d.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? fr([h], _, s) : i === null ? h : h + "[]",
            c(v)
          );
        }), !1;
    }
    return $t(p) ? !0 : (t.append(fr(m, h, s), c(p)), !1);
  }
  const f = [], y = Object.assign(Es, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: $t
  });
  function g(p, h) {
    if (!d.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      f.push(p), d.forEach(p, function(b, T) {
        (!(d.isUndefined(b) || b === null) && o.call(
          t,
          b,
          d.isString(T) ? T.trim() : T,
          h,
          y
        )) === !0 && g(b, h ? h.concat(T) : [T]);
      }), f.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
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
function Ht(e, t) {
  this._pairs = [], e && ut(e, this, t);
}
const On = Ht.prototype;
On.append = function(t, r) {
  this._pairs.push([t, r]);
};
On.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, dr);
  } : dr;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Ts(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function _n(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Ts;
  d.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = d.isURLSearchParams(t) ? t.toString() : new Ht(t, r).toString(n), s) {
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
const An = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ss = typeof URLSearchParams < "u" ? URLSearchParams : Ht, Os = typeof FormData < "u" ? FormData : null, _s = typeof Blob < "u" ? Blob : null, As = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ss,
    FormData: Os,
    Blob: _s
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, qt = typeof window < "u" && typeof document < "u", xt = typeof navigator == "object" && navigator || void 0, Rs = qt && (!xt || ["ReactNative", "NativeScript", "NS"].indexOf(xt.product) < 0), $s = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", xs = qt && window.location.href || "http://localhost", Ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: qt,
  hasStandardBrowserEnv: Rs,
  hasStandardBrowserWebWorkerEnv: $s,
  navigator: xt,
  origin: xs
}, Symbol.toStringTag, { value: "Module" })), D = {
  ...Ps,
  ...As
};
function Cs(e, t) {
  return ut(e, new D.classes.URLSearchParams(), {
    visitor: function(r, n, o, s) {
      return D.isNode && d.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function js(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Fs(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function Rn(e) {
  function t(r, n, o, s) {
    let i = r[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), u = s >= r.length;
    return i = !i && d.isArray(o) ? o.length : i, u ? (d.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !a) : ((!o[i] || !d.isObject(o[i])) && (o[i] = []), t(r, n, o[i], s) && d.isArray(o[i]) && (o[i] = Fs(o[i])), !a);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const r = {};
    return d.forEachEntry(e, (n, o) => {
      t(js(n), o, r, 0);
    }), r;
  }
  return null;
}
function Ns(e, t, r) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Be = {
  transitional: An,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = d.isObject(t);
    if (s && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
      return o ? JSON.stringify(Rn(t)) : t;
    if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t) || d.isReadableStream(t))
      return t;
    if (d.isArrayBufferView(t))
      return t.buffer;
    if (d.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Cs(t, this.formSerializer).toString();
      if ((a = d.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return ut(
          a ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), Ns(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Be.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (d.isResponse(t) || d.isReadableStream(t))
      return t;
    if (t && d.isString(t) && (n && !this.responseType || o)) {
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
    FormData: D.classes.FormData,
    Blob: D.classes.Blob
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
  Be.headers[e] = {};
});
const Ls = d.toObjectSet([
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
]), Ds = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || t[r] && Ls[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, hr = /* @__PURE__ */ Symbol("internals");
function Oe(e) {
  return e && String(e).trim().toLowerCase();
}
function ke(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(ke) : String(e);
}
function Us(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Is = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function Bs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Ms(e, t) {
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
let I = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(a, u, c) {
      const l = Oe(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = d.findKey(o, l);
      (!f || o[f] === void 0 || c === !0 || c === void 0 && o[f] !== !1) && (o[f || u] = ke(a));
    }
    const i = (a, u) => d.forEach(a, (c, l) => s(c, l, u));
    if (d.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (d.isString(t) && (t = t.trim()) && !Is(t))
      i(Ds(t), r);
    else if (d.isObject(t) && d.isIterable(t)) {
      let a = {}, u, c;
      for (const l of t) {
        if (!d.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        a[c = l[0]] = (u = a[c]) ? d.isArray(u) ? [...u, l[1]] : [u, l[1]] : l[1];
      }
      i(a, r);
    } else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Oe(t), t) {
      const n = d.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Us(o);
        if (d.isFunction(r))
          return r.call(this, o, n);
        if (d.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Oe(t), t) {
      const n = d.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || yt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = Oe(i), i) {
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
      const a = t ? Bs(s) : String(s).trim();
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
      const a = Oe(i);
      n[a] || (Ms(o, i), n[a] = !0);
    }
    return d.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
I.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(I.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
d.freezeMethods(I);
function bt(e, t) {
  const r = this || Be, n = t || r, o = I.from(n.headers);
  let s = n.data;
  return d.forEach(e, function(a) {
    s = a.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function $n(e) {
  return !!(e && e.__CANCEL__);
}
function Te(e, t, r) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, r), this.name = "CanceledError";
}
d.inherits(Te, O, {
  __CANCEL__: !0
});
function xn(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new O(
    "Request failed with status code " + r.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Hs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function qs(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), l = n[s];
    i || (i = c), r[o] = u, n[o] = c;
    let f = s, y = 0;
    for (; f !== o; )
      y += r[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), c - i < t)
      return;
    const g = l && c - l;
    return g ? Math.round(y * 1e3 / g) : void 0;
  };
}
function Vs(e, t) {
  let r = 0, n = 1e3 / t, o, s;
  const i = (c, l = Date.now()) => {
    r = l, o = null, s && (clearTimeout(s), s = null), e(...c);
  };
  return [(...c) => {
    const l = Date.now(), f = l - r;
    f >= n ? i(c, l) : (o = c, s || (s = setTimeout(() => {
      s = null, i(o);
    }, n - f)));
  }, () => o && i(o)];
}
const Xe = (e, t, r = 3) => {
  let n = 0;
  const o = qs(50, 250);
  return Vs((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, u = i - n, c = o(u), l = i <= a;
    n = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && a && l ? (a - i) / c : void 0,
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
}, gr = (e) => (...t) => d.asap(() => e(...t)), zs = D.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, D.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(D.origin),
  D.navigator && /(msie|trident)/i.test(D.navigator.userAgent)
) : () => !0, Gs = D.hasStandardBrowserEnv ? (
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
function ks(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ks(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Pn(e, t, r) {
  let n = !ks(t);
  return e && (n || r == !1) ? Ks(e, t) : t;
}
const yr = (e) => e instanceof I ? { ...e } : e;
function ce(e, t) {
  t = t || {};
  const r = {};
  function n(c, l, f, y) {
    return d.isPlainObject(c) && d.isPlainObject(l) ? d.merge.call({ caseless: y }, c, l) : d.isPlainObject(l) ? d.merge({}, l) : d.isArray(l) ? l.slice() : l;
  }
  function o(c, l, f, y) {
    if (d.isUndefined(l)) {
      if (!d.isUndefined(c))
        return n(void 0, c, f, y);
    } else return n(c, l, f, y);
  }
  function s(c, l) {
    if (!d.isUndefined(l))
      return n(void 0, l);
  }
  function i(c, l) {
    if (d.isUndefined(l)) {
      if (!d.isUndefined(c))
        return n(void 0, c);
    } else return n(void 0, l);
  }
  function a(c, l, f) {
    if (f in t)
      return n(c, l);
    if (f in e)
      return n(void 0, c);
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
    headers: (c, l, f) => o(yr(c), yr(l), f, !0)
  };
  return d.forEach(Object.keys({ ...e, ...t }), function(l) {
    const f = u[l] || o, y = f(e[l], t[l], l);
    d.isUndefined(y) && f !== a || (r[l] = y);
  }), r;
}
const Cn = (e) => {
  const t = ce({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = t;
  if (t.headers = i = I.from(i), t.url = _n(Pn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), d.isFormData(r)) {
    if (D.hasStandardBrowserEnv || D.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (d.isFunction(r.getHeaders)) {
      const u = r.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(u).forEach(([l, f]) => {
        c.includes(l.toLowerCase()) && i.set(l, f);
      });
    }
  }
  if (D.hasStandardBrowserEnv && (n && d.isFunction(n) && (n = n(t)), n || n !== !1 && zs(t.url))) {
    const u = o && s && Gs.read(s);
    u && i.set(o, u);
  }
  return t;
}, Js = typeof XMLHttpRequest < "u", Ws = Js && function(e) {
  return new Promise(function(r, n) {
    const o = Cn(e);
    let s = o.data;
    const i = I.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: u, onDownloadProgress: c } = o, l, f, y, g, p;
    function h() {
      g && g(), p && p(), o.cancelToken && o.cancelToken.unsubscribe(l), o.signal && o.signal.removeEventListener("abort", l);
    }
    let m = new XMLHttpRequest();
    m.open(o.method.toUpperCase(), o.url, !0), m.timeout = o.timeout;
    function b() {
      if (!m)
        return;
      const v = I.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), $ = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: v,
        config: e,
        request: m
      };
      xn(function(x) {
        r(x), h();
      }, function(x) {
        n(x), h();
      }, $), m = null;
    }
    "onloadend" in m ? m.onloadend = b : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, m.onabort = function() {
      m && (n(new O("Request aborted", O.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function(_) {
      const $ = _ && _.message ? _.message : "Network Error", R = new O($, O.ERR_NETWORK, e, m);
      R.event = _ || null, n(R), m = null;
    }, m.ontimeout = function() {
      let _ = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const $ = o.transitional || An;
      o.timeoutErrorMessage && (_ = o.timeoutErrorMessage), n(new O(
        _,
        $.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        e,
        m
      )), m = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in m && d.forEach(i.toJSON(), function(_, $) {
      m.setRequestHeader($, _);
    }), d.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), a && a !== "json" && (m.responseType = o.responseType), c && ([y, p] = Xe(c, !0), m.addEventListener("progress", y)), u && m.upload && ([f, g] = Xe(u), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", g)), (o.cancelToken || o.signal) && (l = (v) => {
      m && (n(!v || v.type ? new Te(null, e, m) : v), m.abort(), m = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const T = Hs(o.url);
    if (T && D.protocols.indexOf(T) === -1) {
      n(new O("Unsupported protocol " + T + ":", O.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(s || null);
  });
}, Xs = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const s = function(c) {
      if (!o) {
        o = !0, a();
        const l = c instanceof Error ? c : this.reason;
        n.abort(l instanceof O ? l : new Te(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new O(`timeout ${t} of ms exceeded`, O.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(s) : c.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", s));
    const { signal: u } = n;
    return u.unsubscribe = () => d.asap(a), u;
  }
}, Zs = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, Ys = async function* (e, t) {
  for await (const r of Qs(e))
    yield* Zs(r, t);
}, Qs = async function* (e) {
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
  const o = Ys(e, t);
  let s = 0, i, a = (u) => {
    i || (i = !0, n && n(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: c, value: l } = await o.next();
        if (c) {
          a(), u.close();
          return;
        }
        let f = l.byteLength;
        if (r) {
          let y = s += f;
          r(y);
        }
        u.enqueue(new Uint8Array(l));
      } catch (c) {
        throw a(c), c;
      }
    },
    cancel(u) {
      return a(u), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, wr = 64 * 1024, { isFunction: Ve } = d, ei = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(d.global), {
  ReadableStream: vr,
  TextEncoder: Er
} = d.global, Tr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ti = (e) => {
  e = d.merge.call({
    skipUndefined: !0
  }, ei, e);
  const { fetch: t, Request: r, Response: n } = e, o = t ? Ve(t) : typeof fetch == "function", s = Ve(r), i = Ve(n);
  if (!o)
    return !1;
  const a = o && Ve(vr), u = o && (typeof Er == "function" ? /* @__PURE__ */ ((p) => (h) => p.encode(h))(new Er()) : async (p) => new Uint8Array(await new r(p).arrayBuffer())), c = s && a && Tr(() => {
    let p = !1;
    const h = new r(D.origin, {
      body: new vr(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return p && !h;
  }), l = i && a && Tr(() => d.isReadableStream(new n("").body)), f = {
    stream: l && ((p) => p.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !f[p] && (f[p] = (h, m) => {
      let b = h && h[p];
      if (b)
        return b.call(h);
      throw new O(`Response type '${p}' is not supported`, O.ERR_NOT_SUPPORT, m);
    });
  });
  const y = async (p) => {
    if (p == null)
      return 0;
    if (d.isBlob(p))
      return p.size;
    if (d.isSpecCompliantForm(p))
      return (await new r(D.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (d.isArrayBufferView(p) || d.isArrayBuffer(p))
      return p.byteLength;
    if (d.isURLSearchParams(p) && (p = p + ""), d.isString(p))
      return (await u(p)).byteLength;
  }, g = async (p, h) => {
    const m = d.toFiniteNumber(p.getContentLength());
    return m ?? y(h);
  };
  return async (p) => {
    let {
      url: h,
      method: m,
      data: b,
      signal: T,
      cancelToken: v,
      timeout: _,
      onDownloadProgress: $,
      onUploadProgress: R,
      responseType: x,
      headers: V,
      withCredentials: B = "same-origin",
      fetchOptions: H
    } = Cn(p), E = t || fetch;
    x = x ? (x + "").toLowerCase() : "text";
    let w = Xs([T, v && v.toAbortSignal()], _), S = null;
    const A = w && w.unsubscribe && (() => {
      w.unsubscribe();
    });
    let z;
    try {
      if (R && c && m !== "get" && m !== "head" && (z = await g(V, b)) !== 0) {
        let oe = new r(h, {
          method: "POST",
          body: b,
          duplex: "half"
        }), me;
        if (d.isFormData(b) && (me = oe.headers.get("content-type")) && V.setContentType(me), oe.body) {
          const [mt, qe] = mr(
            z,
            Xe(gr(R))
          );
          b = br(oe.body, wr, mt, qe);
        }
      }
      d.isString(B) || (B = B ? "include" : "omit");
      const j = s && "credentials" in r.prototype, ee = {
        ...H,
        signal: w,
        method: m.toUpperCase(),
        headers: V.normalize().toJSON(),
        body: b,
        duplex: "half",
        credentials: j ? B : void 0
      };
      S = s && new r(h, ee);
      let X = await (s ? E(S, H) : E(h, ee));
      const ar = l && (x === "stream" || x === "response");
      if (l && ($ || ar && A)) {
        const oe = {};
        ["status", "statusText", "headers"].forEach((ur) => {
          oe[ur] = X[ur];
        });
        const me = d.toFiniteNumber(X.headers.get("content-length")), [mt, qe] = $ && mr(
          me,
          Xe(gr($), !0)
        ) || [];
        X = new n(
          br(X.body, wr, mt, () => {
            qe && qe(), A && A();
          }),
          oe
        );
      }
      x = x || "text";
      let To = await f[d.findKey(f, x) || "text"](X, p);
      return !ar && A && A(), await new Promise((oe, me) => {
        xn(oe, me, {
          data: To,
          headers: I.from(X.headers),
          status: X.status,
          statusText: X.statusText,
          config: p,
          request: S
        });
      });
    } catch (j) {
      throw A && A(), j && j.name === "TypeError" && /Load failed|fetch/i.test(j.message) ? Object.assign(
        new O("Network Error", O.ERR_NETWORK, p, S),
        {
          cause: j.cause || j
        }
      ) : O.from(j, j && j.code, p, S);
    }
  };
}, ri = /* @__PURE__ */ new Map(), jn = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: o } = t, s = [
    n,
    o,
    r
  ];
  let i = s.length, a = i, u, c, l = ri;
  for (; a--; )
    u = s[a], c = l.get(u), c === void 0 && l.set(u, c = a ? /* @__PURE__ */ new Map() : ti(t)), l = c;
  return c;
};
jn();
const Vt = {
  http: ws,
  xhr: Ws,
  fetch: {
    get: jn
  }
};
d.forEach(Vt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Sr = (e) => `- ${e}`, ni = (e) => d.isFunction(e) || e === null || e === !1;
function oi(e, t) {
  e = d.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, o;
  const s = {};
  for (let i = 0; i < r; i++) {
    n = e[i];
    let a;
    if (o = n, !ni(n) && (o = Vt[(a = String(n)).toLowerCase()], o === void 0))
      throw new O(`Unknown adapter '${a}'`);
    if (o && (d.isFunction(o) || (o = o.get(t))))
      break;
    s[a || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(s).map(
      ([u, c]) => `adapter ${u} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = r ? i.length > 1 ? `since :
` + i.map(Sr).join(`
`) : " " + Sr(i[0]) : "as no adapter specified";
    throw new O(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Fn = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: oi,
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
function Or(e) {
  return wt(e), e.headers = I.from(e.headers), e.data = bt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Fn.getAdapter(e.adapter || Be.adapter, e)(e).then(function(n) {
    return wt(e), n.data = bt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = I.from(n.headers), n;
  }, function(n) {
    return $n(n) || (wt(e), n && n.response && (n.response.data = bt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = I.from(n.response.headers))), Promise.reject(n);
  });
}
const Nn = "1.13.2", lt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  lt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const _r = {};
lt.transitional = function(t, r, n) {
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
lt.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function si(e, t, r) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = t[s];
    if (i) {
      const a = e[s], u = a === void 0 || i(a, s, e);
      if (u !== !0)
        throw new O("option " + s + " must be " + u, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new O("Unknown option " + s, O.ERR_BAD_OPTION);
  }
}
const Ke = {
  assertOptions: si,
  validators: lt
}, Z = Ke.validators;
let le = class {
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ce(this.defaults, r);
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
    ), r.headers = I.concat(i, s);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(r) === !1 || (u = u && h.synchronous, a.unshift(h.fulfilled, h.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(h) {
      c.push(h.fulfilled, h.rejected);
    });
    let l, f = 0, y;
    if (!u) {
      const p = [Or.bind(this), void 0];
      for (p.unshift(...a), p.push(...c), y = p.length, l = Promise.resolve(r); f < y; )
        l = l.then(p[f++], p[f++]);
      return l;
    }
    y = a.length;
    let g = r;
    for (; f < y; ) {
      const p = a[f++], h = a[f++];
      try {
        g = p(g);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      l = Or.call(this, g);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, y = c.length; f < y; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = ce(this.defaults, t);
    const r = Pn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return _n(r, t.params, t.paramsSerializer);
  }
};
d.forEach(["delete", "get", "head", "options"], function(t) {
  le.prototype[t] = function(r, n) {
    return this.request(ce(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, i, a) {
      return this.request(ce(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  le.prototype[t] = r(), le.prototype[t + "Form"] = r(!0);
});
let ii = class Ln {
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
      token: new Ln(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function ai(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function ui(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const Pt = {
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
Object.entries(Pt).forEach(([e, t]) => {
  Pt[t] = e;
});
function Dn(e) {
  const t = new le(e), r = pn(le.prototype.request, t);
  return d.extend(r, le.prototype, t, { allOwnKeys: !0 }), d.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Dn(ce(e, o));
  }, r;
}
const F = Dn(Be);
F.Axios = le;
F.CanceledError = Te;
F.CancelToken = ii;
F.isCancel = $n;
F.VERSION = Nn;
F.toFormData = ut;
F.AxiosError = O;
F.Cancel = F.CanceledError;
F.all = function(t) {
  return Promise.all(t);
};
F.spread = ai;
F.isAxiosError = ui;
F.mergeConfig = ce;
F.AxiosHeaders = I;
F.formToJSON = (e) => Rn(d.isHTMLForm(e) ? new FormData(e) : e);
F.getAdapter = Fn.getAdapter;
F.HttpStatusCode = Pt;
F.default = F;
const {
  Axios: Mf,
  AxiosError: Hf,
  CanceledError: qf,
  isCancel: Un,
  CancelToken: Vf,
  VERSION: zf,
  all: Gf,
  Cancel: kf,
  isAxiosError: In,
  spread: Kf,
  toFormData: Jf,
  AxiosHeaders: Wf,
  HttpStatusCode: Xf,
  formToJSON: Zf,
  getAdapter: Yf,
  mergeConfig: li
} = F;
var Bn = typeof global == "object" && global && global.Object === Object && global, ci = typeof self == "object" && self && self.Object === Object && self, W = Bn || ci || Function("return this")(), q = W.Symbol, Mn = Object.prototype, fi = Mn.hasOwnProperty, di = Mn.toString, _e = q ? q.toStringTag : void 0;
function pi(e) {
  var t = fi.call(e, _e), r = e[_e];
  try {
    e[_e] = void 0;
    var n = !0;
  } catch {
  }
  var o = di.call(e);
  return n && (t ? e[_e] = r : delete e[_e]), o;
}
var hi = Object.prototype, mi = hi.toString;
function gi(e) {
  return mi.call(e);
}
var yi = "[object Null]", bi = "[object Undefined]", Ar = q ? q.toStringTag : void 0;
function de(e) {
  return e == null ? e === void 0 ? bi : yi : Ar && Ar in Object(e) ? pi(e) : gi(e);
}
function Q(e) {
  return e != null && typeof e == "object";
}
var wi = "[object Symbol]";
function ct(e) {
  return typeof e == "symbol" || Q(e) && de(e) == wi;
}
function Hn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var K = Array.isArray, Rr = q ? q.prototype : void 0, $r = Rr ? Rr.toString : void 0;
function qn(e) {
  if (typeof e == "string")
    return e;
  if (K(e))
    return Hn(e, qn) + "";
  if (ct(e))
    return $r ? $r.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var vi = /\s/;
function Ei(e) {
  for (var t = e.length; t-- && vi.test(e.charAt(t)); )
    ;
  return t;
}
var Ti = /^\s+/;
function Si(e) {
  return e && e.slice(0, Ei(e) + 1).replace(Ti, "");
}
function M(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var xr = NaN, Oi = /^[-+]0x[0-9a-f]+$/i, _i = /^0b[01]+$/i, Ai = /^0o[0-7]+$/i, Ri = parseInt;
function Pr(e) {
  if (typeof e == "number")
    return e;
  if (ct(e))
    return xr;
  if (M(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = M(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Si(e);
  var r = _i.test(e);
  return r || Ai.test(e) ? Ri(e.slice(2), r ? 2 : 8) : Oi.test(e) ? xr : +e;
}
function Vn(e) {
  return e;
}
var $i = "[object AsyncFunction]", xi = "[object Function]", Pi = "[object GeneratorFunction]", Ci = "[object Proxy]";
function zt(e) {
  if (!M(e))
    return !1;
  var t = de(e);
  return t == xi || t == Pi || t == $i || t == Ci;
}
var vt = W["__core-js_shared__"], Cr = (function() {
  var e = /[^.]+$/.exec(vt && vt.keys && vt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function ji(e) {
  return !!Cr && Cr in e;
}
var Fi = Function.prototype, Ni = Fi.toString;
function pe(e) {
  if (e != null) {
    try {
      return Ni.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Li = /[\\^$.*+?()[\]{}|]/g, Di = /^\[object .+?Constructor\]$/, Ui = Function.prototype, Ii = Object.prototype, Bi = Ui.toString, Mi = Ii.hasOwnProperty, Hi = RegExp(
  "^" + Bi.call(Mi).replace(Li, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qi(e) {
  if (!M(e) || ji(e))
    return !1;
  var t = zt(e) ? Hi : Di;
  return t.test(pe(e));
}
function Vi(e, t) {
  return e?.[t];
}
function he(e, t) {
  var r = Vi(e, t);
  return qi(r) ? r : void 0;
}
var Ct = he(W, "WeakMap"), jr = Object.create, zi = /* @__PURE__ */ (function() {
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
function Gi(e, t, r) {
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
function zn(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var ki = 800, Ki = 16, Ji = Date.now;
function Wi(e) {
  var t = 0, r = 0;
  return function() {
    var n = Ji(), o = Ki - (n - r);
    if (r = n, o > 0) {
      if (++t >= ki)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Xi(e) {
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
})(), Zi = Ze ? function(e, t) {
  return Ze(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Xi(t),
    writable: !0
  });
} : Vn, Gn = Wi(Zi);
function Yi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Qi = 9007199254740991, ea = /^(?:0|[1-9]\d*)$/;
function Gt(e, t) {
  var r = typeof e;
  return t = t ?? Qi, !!t && (r == "number" || r != "symbol" && ea.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function kt(e, t, r) {
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
var ta = Object.prototype, ra = ta.hasOwnProperty;
function Kt(e, t, r) {
  var n = e[t];
  (!(ra.call(e, t) && Me(n, r)) || r === void 0 && !(t in e)) && kt(e, t, r);
}
function Se(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var a = t[s], u = void 0;
    u === void 0 && (u = e[a]), o ? kt(r, a, u) : Kt(r, a, u);
  }
  return r;
}
var Fr = Math.max;
function kn(e, t, r) {
  return t = Fr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, s = Fr(n.length - t, 0), i = Array(s); ++o < s; )
      i[o] = n[t + o];
    o = -1;
    for (var a = Array(t + 1); ++o < t; )
      a[o] = n[o];
    return a[t] = r(i), Gi(e, this, a);
  };
}
function na(e, t) {
  return Gn(kn(e, t, Vn), e + "");
}
var oa = 9007199254740991;
function Kn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= oa;
}
function ft(e) {
  return e != null && Kn(e.length) && !zt(e);
}
function sa(e, t, r) {
  if (!M(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? ft(r) && Gt(t, r.length) : n == "string" && t in r) ? Me(r[t], e) : !1;
}
function ia(e) {
  return na(function(t, r) {
    var n = -1, o = r.length, s = o > 1 ? r[o - 1] : void 0, i = o > 2 ? r[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (o--, s) : void 0, i && sa(r[0], r[1], i) && (s = o < 3 ? void 0 : s, o = 1), t = Object(t); ++n < o; ) {
      var a = r[n];
      a && e(t, a, n, s);
    }
    return t;
  });
}
var aa = Object.prototype;
function Jt(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || aa;
  return e === r;
}
function ua(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var la = "[object Arguments]";
function Nr(e) {
  return Q(e) && de(e) == la;
}
var Jn = Object.prototype, ca = Jn.hasOwnProperty, fa = Jn.propertyIsEnumerable, Ye = Nr(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Nr : function(e) {
  return Q(e) && ca.call(e, "callee") && !fa.call(e, "callee");
};
function da() {
  return !1;
}
var Wn = typeof exports == "object" && exports && !exports.nodeType && exports, Lr = Wn && typeof module == "object" && module && !module.nodeType && module, pa = Lr && Lr.exports === Wn, Dr = pa ? W.Buffer : void 0, ha = Dr ? Dr.isBuffer : void 0, Ce = ha || da, ma = "[object Arguments]", ga = "[object Array]", ya = "[object Boolean]", ba = "[object Date]", wa = "[object Error]", va = "[object Function]", Ea = "[object Map]", Ta = "[object Number]", Sa = "[object Object]", Oa = "[object RegExp]", _a = "[object Set]", Aa = "[object String]", Ra = "[object WeakMap]", $a = "[object ArrayBuffer]", xa = "[object DataView]", Pa = "[object Float32Array]", Ca = "[object Float64Array]", ja = "[object Int8Array]", Fa = "[object Int16Array]", Na = "[object Int32Array]", La = "[object Uint8Array]", Da = "[object Uint8ClampedArray]", Ua = "[object Uint16Array]", Ia = "[object Uint32Array]", C = {};
C[Pa] = C[Ca] = C[ja] = C[Fa] = C[Na] = C[La] = C[Da] = C[Ua] = C[Ia] = !0;
C[ma] = C[ga] = C[$a] = C[ya] = C[xa] = C[ba] = C[wa] = C[va] = C[Ea] = C[Ta] = C[Sa] = C[Oa] = C[_a] = C[Aa] = C[Ra] = !1;
function Ba(e) {
  return Q(e) && Kn(e.length) && !!C[de(e)];
}
function Wt(e) {
  return function(t) {
    return e(t);
  };
}
var Xn = typeof exports == "object" && exports && !exports.nodeType && exports, xe = Xn && typeof module == "object" && module && !module.nodeType && module, Ma = xe && xe.exports === Xn, Et = Ma && Bn.process, ve = (function() {
  try {
    var e = xe && xe.require && xe.require("util").types;
    return e || Et && Et.binding && Et.binding("util");
  } catch {
  }
})(), Ur = ve && ve.isTypedArray, Xt = Ur ? Wt(Ur) : Ba, Ha = Object.prototype, qa = Ha.hasOwnProperty;
function Zn(e, t) {
  var r = K(e), n = !r && Ye(e), o = !r && !n && Ce(e), s = !r && !n && !o && Xt(e), i = r || n || o || s, a = i ? ua(e.length, String) : [], u = a.length;
  for (var c in e)
    (t || qa.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Gt(c, u))) && a.push(c);
  return a;
}
function Yn(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Va = Yn(Object.keys, Object), za = Object.prototype, Ga = za.hasOwnProperty;
function ka(e) {
  if (!Jt(e))
    return Va(e);
  var t = [];
  for (var r in Object(e))
    Ga.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Zt(e) {
  return ft(e) ? Zn(e) : ka(e);
}
function Ka(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Ja = Object.prototype, Wa = Ja.hasOwnProperty;
function Xa(e) {
  if (!M(e))
    return Ka(e);
  var t = Jt(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Wa.call(e, n)) || r.push(n);
  return r;
}
function He(e) {
  return ft(e) ? Zn(e, !0) : Xa(e);
}
var Za = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ya = /^\w*$/;
function Qa(e, t) {
  if (K(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || ct(e) ? !0 : Ya.test(e) || !Za.test(e) || t != null && e in Object(t);
}
var je = he(Object, "create");
function eu() {
  this.__data__ = je ? je(null) : {}, this.size = 0;
}
function tu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ru = "__lodash_hash_undefined__", nu = Object.prototype, ou = nu.hasOwnProperty;
function su(e) {
  var t = this.__data__;
  if (je) {
    var r = t[e];
    return r === ru ? void 0 : r;
  }
  return ou.call(t, e) ? t[e] : void 0;
}
var iu = Object.prototype, au = iu.hasOwnProperty;
function uu(e) {
  var t = this.__data__;
  return je ? t[e] !== void 0 : au.call(t, e);
}
var lu = "__lodash_hash_undefined__";
function cu(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = je && t === void 0 ? lu : t, this;
}
function fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fe.prototype.clear = eu;
fe.prototype.delete = tu;
fe.prototype.get = su;
fe.prototype.has = uu;
fe.prototype.set = cu;
function fu() {
  this.__data__ = [], this.size = 0;
}
function dt(e, t) {
  for (var r = e.length; r--; )
    if (Me(e[r][0], t))
      return r;
  return -1;
}
var du = Array.prototype, pu = du.splice;
function hu(e) {
  var t = this.__data__, r = dt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : pu.call(t, r, 1), --this.size, !0;
}
function mu(e) {
  var t = this.__data__, r = dt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function gu(e) {
  return dt(this.__data__, e) > -1;
}
function yu(e, t) {
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
re.prototype.clear = fu;
re.prototype.delete = hu;
re.prototype.get = mu;
re.prototype.has = gu;
re.prototype.set = yu;
var Fe = he(W, "Map");
function bu() {
  this.size = 0, this.__data__ = {
    hash: new fe(),
    map: new (Fe || re)(),
    string: new fe()
  };
}
function wu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function pt(e, t) {
  var r = e.__data__;
  return wu(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function vu(e) {
  var t = pt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Eu(e) {
  return pt(this, e).get(e);
}
function Tu(e) {
  return pt(this, e).has(e);
}
function Su(e, t) {
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
ne.prototype.clear = bu;
ne.prototype.delete = vu;
ne.prototype.get = Eu;
ne.prototype.has = Tu;
ne.prototype.set = Su;
var Ou = "Expected a function";
function Yt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ou);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(o))
      return s.get(o);
    var i = e.apply(this, n);
    return r.cache = s.set(o, i) || s, i;
  };
  return r.cache = new (Yt.Cache || ne)(), r;
}
Yt.Cache = ne;
var _u = 500;
function Au(e) {
  var t = Yt(e, function(n) {
    return r.size === _u && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Ru = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $u = /\\(\\)?/g, xu = Au(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ru, function(r, n, o, s) {
    t.push(o ? s.replace($u, "$1") : n || r);
  }), t;
});
function Pu(e) {
  return e == null ? "" : qn(e);
}
function ht(e, t) {
  return K(e) ? e : Qa(e, t) ? [e] : xu(Pu(e));
}
function Qt(e) {
  if (typeof e == "string" || ct(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Qn(e, t) {
  t = ht(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Qt(t[r++])];
  return r && r == n ? e : void 0;
}
function Qe(e, t, r) {
  var n = e == null ? void 0 : Qn(e, t);
  return n === void 0 ? r : n;
}
function er(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Ir = q ? q.isConcatSpreadable : void 0;
function Cu(e) {
  return K(e) || Ye(e) || !!(Ir && e && e[Ir]);
}
function ju(e, t, r, n, o) {
  var s = -1, i = e.length;
  for (r || (r = Cu), o || (o = []); ++s < i; ) {
    var a = e[s];
    r(a) ? er(o, a) : o[o.length] = a;
  }
  return o;
}
function Fu(e) {
  var t = e == null ? 0 : e.length;
  return t ? ju(e) : [];
}
function Nu(e) {
  return Gn(kn(e, void 0, Fu), e + "");
}
var tr = Yn(Object.getPrototypeOf, Object), Lu = "[object Object]", Du = Function.prototype, Uu = Object.prototype, eo = Du.toString, Iu = Uu.hasOwnProperty, Bu = eo.call(Object);
function to(e) {
  if (!Q(e) || de(e) != Lu)
    return !1;
  var t = tr(e);
  if (t === null)
    return !0;
  var r = Iu.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && eo.call(r) == Bu;
}
function Mu(e, t, r) {
  var n = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), r = r > o ? o : r, r < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(o); ++n < o; )
    s[n] = e[n + t];
  return s;
}
function Hu() {
  this.__data__ = new re(), this.size = 0;
}
function qu(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Vu(e) {
  return this.__data__.get(e);
}
function zu(e) {
  return this.__data__.has(e);
}
var Gu = 200;
function ku(e, t) {
  var r = this.__data__;
  if (r instanceof re) {
    var n = r.__data__;
    if (!Fe || n.length < Gu - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ne(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Y(e) {
  var t = this.__data__ = new re(e);
  this.size = t.size;
}
Y.prototype.clear = Hu;
Y.prototype.delete = qu;
Y.prototype.get = Vu;
Y.prototype.has = zu;
Y.prototype.set = ku;
function Ku(e, t) {
  return e && Se(t, Zt(t), e);
}
function Ju(e, t) {
  return e && Se(t, He(t), e);
}
var ro = typeof exports == "object" && exports && !exports.nodeType && exports, Br = ro && typeof module == "object" && module && !module.nodeType && module, Wu = Br && Br.exports === ro, Mr = Wu ? W.Buffer : void 0, Hr = Mr ? Mr.allocUnsafe : void 0;
function no(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Hr ? Hr(r) : new e.constructor(r);
  return e.copy(n), n;
}
function Xu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[o++] = i);
  }
  return s;
}
function oo() {
  return [];
}
var Zu = Object.prototype, Yu = Zu.propertyIsEnumerable, qr = Object.getOwnPropertySymbols, rr = qr ? function(e) {
  return e == null ? [] : (e = Object(e), Xu(qr(e), function(t) {
    return Yu.call(e, t);
  }));
} : oo;
function Qu(e, t) {
  return Se(e, rr(e), t);
}
var el = Object.getOwnPropertySymbols, so = el ? function(e) {
  for (var t = []; e; )
    er(t, rr(e)), e = tr(e);
  return t;
} : oo;
function tl(e, t) {
  return Se(e, so(e), t);
}
function io(e, t, r) {
  var n = t(e);
  return K(e) ? n : er(n, r(e));
}
function jt(e) {
  return io(e, Zt, rr);
}
function ao(e) {
  return io(e, He, so);
}
var Ft = he(W, "DataView"), Nt = he(W, "Promise"), Lt = he(W, "Set"), Vr = "[object Map]", rl = "[object Object]", zr = "[object Promise]", Gr = "[object Set]", kr = "[object WeakMap]", Kr = "[object DataView]", nl = pe(Ft), ol = pe(Fe), sl = pe(Nt), il = pe(Lt), al = pe(Ct), G = de;
(Ft && G(new Ft(new ArrayBuffer(1))) != Kr || Fe && G(new Fe()) != Vr || Nt && G(Nt.resolve()) != zr || Lt && G(new Lt()) != Gr || Ct && G(new Ct()) != kr) && (G = function(e) {
  var t = de(e), r = t == rl ? e.constructor : void 0, n = r ? pe(r) : "";
  if (n)
    switch (n) {
      case nl:
        return Kr;
      case ol:
        return Vr;
      case sl:
        return zr;
      case il:
        return Gr;
      case al:
        return kr;
    }
  return t;
});
var ul = Object.prototype, ll = ul.hasOwnProperty;
function cl(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && ll.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var et = W.Uint8Array;
function nr(e) {
  var t = new e.constructor(e.byteLength);
  return new et(t).set(new et(e)), t;
}
function fl(e, t) {
  var r = t ? nr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var dl = /\w*$/;
function pl(e) {
  var t = new e.constructor(e.source, dl.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Jr = q ? q.prototype : void 0, Wr = Jr ? Jr.valueOf : void 0;
function hl(e) {
  return Wr ? Object(Wr.call(e)) : {};
}
function uo(e, t) {
  var r = t ? nr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var ml = "[object Boolean]", gl = "[object Date]", yl = "[object Map]", bl = "[object Number]", wl = "[object RegExp]", vl = "[object Set]", El = "[object String]", Tl = "[object Symbol]", Sl = "[object ArrayBuffer]", Ol = "[object DataView]", _l = "[object Float32Array]", Al = "[object Float64Array]", Rl = "[object Int8Array]", $l = "[object Int16Array]", xl = "[object Int32Array]", Pl = "[object Uint8Array]", Cl = "[object Uint8ClampedArray]", jl = "[object Uint16Array]", Fl = "[object Uint32Array]";
function Nl(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Sl:
      return nr(e);
    case ml:
    case gl:
      return new n(+e);
    case Ol:
      return fl(e, r);
    case _l:
    case Al:
    case Rl:
    case $l:
    case xl:
    case Pl:
    case Cl:
    case jl:
    case Fl:
      return uo(e, r);
    case yl:
      return new n();
    case bl:
    case El:
      return new n(e);
    case wl:
      return pl(e);
    case vl:
      return new n();
    case Tl:
      return hl(e);
  }
}
function lo(e) {
  return typeof e.constructor == "function" && !Jt(e) ? zi(tr(e)) : {};
}
var Ll = "[object Map]";
function Dl(e) {
  return Q(e) && G(e) == Ll;
}
var Xr = ve && ve.isMap, Ul = Xr ? Wt(Xr) : Dl, Il = "[object Set]";
function Bl(e) {
  return Q(e) && G(e) == Il;
}
var Zr = ve && ve.isSet, Ml = Zr ? Wt(Zr) : Bl, Hl = 1, ql = 2, Vl = 4, co = "[object Arguments]", zl = "[object Array]", Gl = "[object Boolean]", kl = "[object Date]", Kl = "[object Error]", fo = "[object Function]", Jl = "[object GeneratorFunction]", Wl = "[object Map]", Xl = "[object Number]", po = "[object Object]", Zl = "[object RegExp]", Yl = "[object Set]", Ql = "[object String]", ec = "[object Symbol]", tc = "[object WeakMap]", rc = "[object ArrayBuffer]", nc = "[object DataView]", oc = "[object Float32Array]", sc = "[object Float64Array]", ic = "[object Int8Array]", ac = "[object Int16Array]", uc = "[object Int32Array]", lc = "[object Uint8Array]", cc = "[object Uint8ClampedArray]", fc = "[object Uint16Array]", dc = "[object Uint32Array]", P = {};
P[co] = P[zl] = P[rc] = P[nc] = P[Gl] = P[kl] = P[oc] = P[sc] = P[ic] = P[ac] = P[uc] = P[Wl] = P[Xl] = P[po] = P[Zl] = P[Yl] = P[Ql] = P[ec] = P[lc] = P[cc] = P[fc] = P[dc] = !0;
P[Kl] = P[fo] = P[tc] = !1;
function Pe(e, t, r, n, o, s) {
  var i, a = t & Hl, u = t & ql, c = t & Vl;
  if (r && (i = o ? r(e, n, o, s) : r(e)), i !== void 0)
    return i;
  if (!M(e))
    return e;
  var l = K(e);
  if (l) {
    if (i = cl(e), !a)
      return zn(e, i);
  } else {
    var f = G(e), y = f == fo || f == Jl;
    if (Ce(e))
      return no(e, a);
    if (f == po || f == co || y && !o) {
      if (i = u || y ? {} : lo(e), !a)
        return u ? tl(e, Ju(i, e)) : Qu(e, Ku(i, e));
    } else {
      if (!P[f])
        return o ? e : {};
      i = Nl(e, f, a);
    }
  }
  s || (s = new Y());
  var g = s.get(e);
  if (g)
    return g;
  s.set(e, i), Ml(e) ? e.forEach(function(m) {
    i.add(Pe(m, t, r, m, e, s));
  }) : Ul(e) && e.forEach(function(m, b) {
    i.set(b, Pe(m, t, r, b, e, s));
  });
  var p = c ? u ? ao : jt : u ? He : Zt, h = l ? void 0 : p(e);
  return Yi(h || e, function(m, b) {
    h && (b = m, m = e[b]), Kt(i, b, Pe(m, t, r, b, e, s));
  }), i;
}
var pc = 1, hc = 4;
function ge(e) {
  return Pe(e, pc | hc);
}
var mc = "__lodash_hash_undefined__";
function gc(e) {
  return this.__data__.set(e, mc), this;
}
function yc(e) {
  return this.__data__.has(e);
}
function tt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ne(); ++t < r; )
    this.add(e[t]);
}
tt.prototype.add = tt.prototype.push = gc;
tt.prototype.has = yc;
function bc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function wc(e, t) {
  return e.has(t);
}
var vc = 1, Ec = 2;
function ho(e, t, r, n, o, s) {
  var i = r & vc, a = e.length, u = t.length;
  if (a != u && !(i && u > a))
    return !1;
  var c = s.get(e), l = s.get(t);
  if (c && l)
    return c == t && l == e;
  var f = -1, y = !0, g = r & Ec ? new tt() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < a; ) {
    var p = e[f], h = t[f];
    if (n)
      var m = i ? n(h, p, f, t, e, s) : n(p, h, f, e, t, s);
    if (m !== void 0) {
      if (m)
        continue;
      y = !1;
      break;
    }
    if (g) {
      if (!bc(t, function(b, T) {
        if (!wc(g, T) && (p === b || o(p, b, r, n, s)))
          return g.push(T);
      })) {
        y = !1;
        break;
      }
    } else if (!(p === h || o(p, h, r, n, s))) {
      y = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), y;
}
function Tc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, o) {
    r[++t] = [o, n];
  }), r;
}
function Sc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Oc = 1, _c = 2, Ac = "[object Boolean]", Rc = "[object Date]", $c = "[object Error]", xc = "[object Map]", Pc = "[object Number]", Cc = "[object RegExp]", jc = "[object Set]", Fc = "[object String]", Nc = "[object Symbol]", Lc = "[object ArrayBuffer]", Dc = "[object DataView]", Yr = q ? q.prototype : void 0, Tt = Yr ? Yr.valueOf : void 0;
function Uc(e, t, r, n, o, s, i) {
  switch (r) {
    case Dc:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Lc:
      return !(e.byteLength != t.byteLength || !s(new et(e), new et(t)));
    case Ac:
    case Rc:
    case Pc:
      return Me(+e, +t);
    case $c:
      return e.name == t.name && e.message == t.message;
    case Cc:
    case Fc:
      return e == t + "";
    case xc:
      var a = Tc;
    case jc:
      var u = n & Oc;
      if (a || (a = Sc), e.size != t.size && !u)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      n |= _c, i.set(e, t);
      var l = ho(a(e), a(t), n, o, s, i);
      return i.delete(e), l;
    case Nc:
      if (Tt)
        return Tt.call(e) == Tt.call(t);
  }
  return !1;
}
var Ic = 1, Bc = Object.prototype, Mc = Bc.hasOwnProperty;
function Hc(e, t, r, n, o, s) {
  var i = r & Ic, a = jt(e), u = a.length, c = jt(t), l = c.length;
  if (u != l && !i)
    return !1;
  for (var f = u; f--; ) {
    var y = a[f];
    if (!(i ? y in t : Mc.call(t, y)))
      return !1;
  }
  var g = s.get(e), p = s.get(t);
  if (g && p)
    return g == t && p == e;
  var h = !0;
  s.set(e, t), s.set(t, e);
  for (var m = i; ++f < u; ) {
    y = a[f];
    var b = e[y], T = t[y];
    if (n)
      var v = i ? n(T, b, y, t, e, s) : n(b, T, y, e, t, s);
    if (!(v === void 0 ? b === T || o(b, T, r, n, s) : v)) {
      h = !1;
      break;
    }
    m || (m = y == "constructor");
  }
  if (h && !m) {
    var _ = e.constructor, $ = t.constructor;
    _ != $ && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof $ == "function" && $ instanceof $) && (h = !1);
  }
  return s.delete(e), s.delete(t), h;
}
var qc = 1, Qr = "[object Arguments]", en = "[object Array]", ze = "[object Object]", Vc = Object.prototype, tn = Vc.hasOwnProperty;
function zc(e, t, r, n, o, s) {
  var i = K(e), a = K(t), u = i ? en : G(e), c = a ? en : G(t);
  u = u == Qr ? ze : u, c = c == Qr ? ze : c;
  var l = u == ze, f = c == ze, y = u == c;
  if (y && Ce(e)) {
    if (!Ce(t))
      return !1;
    i = !0, l = !1;
  }
  if (y && !l)
    return s || (s = new Y()), i || Xt(e) ? ho(e, t, r, n, o, s) : Uc(e, t, u, r, n, o, s);
  if (!(r & qc)) {
    var g = l && tn.call(e, "__wrapped__"), p = f && tn.call(t, "__wrapped__");
    if (g || p) {
      var h = g ? e.value() : e, m = p ? t.value() : t;
      return s || (s = new Y()), o(h, m, r, n, s);
    }
  }
  return y ? (s || (s = new Y()), Hc(e, t, r, n, o, s)) : !1;
}
function mo(e, t, r, n, o) {
  return e === t ? !0 : e == null || t == null || !Q(e) && !Q(t) ? e !== e && t !== t : zc(e, t, r, n, mo, o);
}
function Gc(e) {
  return function(t, r, n) {
    for (var o = -1, s = Object(t), i = n(t), a = i.length; a--; ) {
      var u = i[++o];
      if (r(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var kc = Gc(), St = function() {
  return W.Date.now();
}, Kc = "Expected a function", Jc = Math.max, Wc = Math.min;
function Xc(e, t, r) {
  var n, o, s, i, a, u, c = 0, l = !1, f = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(Kc);
  t = Pr(t) || 0, M(r) && (l = !0, f = "maxWait" in r, s = f ? Jc(Pr(r.maxWait) || 0, t) : s, y = "trailing" in r ? !0 : y);
  function g(R) {
    var x = n, V = o;
    return n = o = void 0, c = R, i = e.apply(V, x), i;
  }
  function p(R) {
    return c = R, a = setTimeout(b, t), l ? g(R) : i;
  }
  function h(R) {
    var x = R - u, V = R - c, B = t - x;
    return f ? Wc(B, s - V) : B;
  }
  function m(R) {
    var x = R - u, V = R - c;
    return u === void 0 || x >= t || x < 0 || f && V >= s;
  }
  function b() {
    var R = St();
    if (m(R))
      return T(R);
    a = setTimeout(b, h(R));
  }
  function T(R) {
    return a = void 0, y && n ? g(R) : (n = o = void 0, i);
  }
  function v() {
    a !== void 0 && clearTimeout(a), c = 0, n = u = o = a = void 0;
  }
  function _() {
    return a === void 0 ? i : T(St());
  }
  function $() {
    var R = St(), x = m(R);
    if (n = arguments, o = this, u = R, x) {
      if (a === void 0)
        return p(u);
      if (f)
        return clearTimeout(a), a = setTimeout(b, t), g(u);
    }
    return a === void 0 && (a = setTimeout(b, t)), i;
  }
  return $.cancel = v, $.flush = _, $;
}
function Dt(e, t, r) {
  (r !== void 0 && !Me(e[t], r) || r === void 0 && !(t in e)) && kt(e, t, r);
}
function Zc(e) {
  return Q(e) && ft(e);
}
function Ut(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Yc(e) {
  return Se(e, He(e));
}
function Qc(e, t, r, n, o, s, i) {
  var a = Ut(e, r), u = Ut(t, r), c = i.get(u);
  if (c) {
    Dt(e, r, c);
    return;
  }
  var l = s ? s(a, u, r + "", e, t, i) : void 0, f = l === void 0;
  if (f) {
    var y = K(u), g = !y && Ce(u), p = !y && !g && Xt(u);
    l = u, y || g || p ? K(a) ? l = a : Zc(a) ? l = zn(a) : g ? (f = !1, l = no(u, !0)) : p ? (f = !1, l = uo(u, !0)) : l = [] : to(u) || Ye(u) ? (l = a, Ye(a) ? l = Yc(a) : (!M(a) || zt(a)) && (l = lo(u))) : f = !1;
  }
  f && (i.set(u, l), o(l, u, n, s, i), i.delete(u)), Dt(e, r, l);
}
function go(e, t, r, n, o) {
  e !== t && kc(t, function(s, i) {
    if (o || (o = new Y()), M(s))
      Qc(e, t, i, r, go, n, o);
    else {
      var a = n ? n(Ut(e, i), s, i + "", e, t, o) : void 0;
      a === void 0 && (a = s), Dt(e, i, a);
    }
  }, He);
}
function ef(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function tf(e, t) {
  return t.length < 2 ? e : Qn(e, Mu(t, 0, -1));
}
function rf(e, t) {
  return mo(e, t);
}
var It = ia(function(e, t, r) {
  go(e, t, r);
}), nf = Object.prototype, of = nf.hasOwnProperty;
function sf(e, t) {
  t = ht(t, e);
  var r = -1, n = t.length;
  if (!n)
    return !0;
  for (var o = e == null || typeof e != "object" && typeof e != "function"; ++r < n; ) {
    var s = t[r];
    if (typeof s == "string") {
      if (s === "__proto__" && !of.call(e, "__proto__"))
        return !1;
      if (s === "constructor" && r + 1 < n && typeof t[r + 1] == "string" && t[r + 1] === "prototype") {
        if (o && r === 0)
          continue;
        return !1;
      }
    }
  }
  var i = tf(e, t);
  return i == null || delete i[Qt(ef(t))];
}
function af(e) {
  return to(e) ? void 0 : e;
}
var uf = 1, lf = 2, cf = 4, rn = Nu(function(e, t) {
  var r = {};
  if (e == null)
    return r;
  var n = !1;
  t = Hn(t, function(s) {
    return s = ht(s, e), n || (n = s.length > 1), s;
  }), Se(e, ao(e), r), n && (r = Pe(r, uf | lf | cf, af));
  for (var o = t.length; o--; )
    sf(r, t[o]);
  return r;
});
function ff(e, t, r, n) {
  if (!M(e))
    return e;
  t = ht(t, e);
  for (var o = -1, s = t.length, i = s - 1, a = e; a != null && ++o < s; ) {
    var u = Qt(t[o]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (o != i) {
      var l = a[u];
      c = void 0, c === void 0 && (c = M(l) ? l : Gt(t[o + 1]) ? [] : {});
    }
    Kt(a, u, c), a = a[u];
  }
  return e;
}
function yo(e, t, r) {
  return e == null ? e : ff(e, t, r);
}
F.create();
const df = (e) => typeof e == "string" ? e : e(), pf = (e) => typeof e == "string" ? e.toLowerCase() : e(), hf = (e) => Object.keys(e).reduce((t, r) => ({
  ...t,
  [r]: Array.isArray(e[r]) ? e[r][0] : e[r]
}), {});
let Ne = F.create(), bo = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, wo = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
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
    return bo = e === null ? () => null : e, te;
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
    mf,
    yf,
    bf
  ].reduce((r, n) => n(r), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), Ne.request(t).then(async (r) => {
    t.precognitive && nn(r);
    const n = r.status;
    let o = r;
    return t.precognitive && t.onPrecognitionSuccess && wo(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && gf(n) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (on(t, n) ?? ((i) => i))(o) ?? o;
  }, (r) => wf(r) ? Promise.reject(r) : (t.precognitive && nn(r.response), (on(t, r.response.status) ?? ((o, s) => Promise.reject(s)))(r.response, r))).finally(t.onFinish ?? (() => null)));
}, mf = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? Ne.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? bo(e, Ne) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": vf(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, gf = (e) => e >= 200 && e < 300, yf = (e) => (typeof e.fingerprint != "string" || (rt[e.fingerprint]?.abort(), delete rt[e.fingerprint]), e), bf = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (rt[e.fingerprint] = new AbortController(), {
  ...e,
  signal: rt[e.fingerprint].signal
}), nn = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, wf = (e) => !In(e) || typeof e.response?.status != "number" || Un(e), on = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], vf = (e) => e.headers?.["Content-Type"] ?? e.headers?.["Content-type"] ?? e.headers?.["content-type"] ?? (vo(e.data) ? "multipart/form-data" : "application/json"), vo = (e) => or(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => vo(t)), or = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, sn = (e) => typeof e == "string" ? e : e(), an = (e) => typeof e == "string" ? e.toLowerCase() : e(), Ef = (e, t = {}) => {
  const r = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let n = !1, o = !1;
  const s = (E) => E !== o ? (o = E, r.validatingChanged) : [];
  let i = [];
  const a = (E) => {
    const w = [...new Set(E)];
    return i.length !== w.length || !w.every((S) => i.includes(S)) ? (i = w, r.validatedChanged) : [];
  }, u = () => i.filter((E) => typeof f[E] > "u");
  let c = [];
  const l = (E) => {
    const w = [...new Set(E)];
    return c.length !== w.length || !w.every((S) => c.includes(S)) ? (c = w, r.touchedChanged) : [];
  };
  let f = {};
  const y = (E) => {
    const w = Sf(E);
    return rf(f, w) ? [] : (f = w, r.errorsChanged);
  }, g = (E) => {
    const w = { ...f };
    return delete w[Je(E)], y(w);
  }, p = () => Object.keys(f).length > 0;
  let h = 1500;
  const m = (E) => {
    h = E, R.cancel(), R = $();
  };
  let b = t, T = null, v = [], _ = null;
  const $ = () => Xc((E) => {
    e({
      get: (w, S = {}, A = {}) => te.get(w, B(S), x(A, E, S)),
      post: (w, S = {}, A = {}) => te.post(w, B(S), x(A, E, S)),
      patch: (w, S = {}, A = {}) => te.patch(w, B(S), x(A, E, S)),
      put: (w, S = {}, A = {}) => te.put(w, B(S), x(A, E, S)),
      delete: (w, S = {}, A = {}) => te.delete(w, B(S), x(A, E, S))
    }).catch((w) => Un(w) || In(w) && w.response?.status === 422 ? null : Promise.reject(w));
  }, h, { leading: !0, trailing: !0 });
  let R = $();
  const x = (E, w, S = {}) => {
    const A = {
      ...E,
      ...w
    }, z = Array.from(A.only ?? A.validate ?? c);
    return {
      ...w,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...li(E, w),
      only: z,
      timeout: A.timeout ?? 5e3,
      onValidationError: (j, ee) => ([
        ...a([...i, ...z]),
        ...y(It(rn({ ...f }, z), j.data.errors))
      ].forEach((X) => X()), A.onValidationError ? A.onValidationError(j, ee) : Promise.reject(ee)),
      onSuccess: (j) => (a([...i, ...z]).forEach((ee) => ee()), A.onSuccess ? A.onSuccess(j) : j),
      onPrecognitionSuccess: (j) => ([
        ...a([...i, ...z]),
        ...y(rn({ ...f }, z))
      ].forEach((ee) => ee()), A.onPrecognitionSuccess ? A.onPrecognitionSuccess(j) : j),
      onBefore: () => A.onBeforeValidation && A.onBeforeValidation({ data: S, touched: c }, { data: b, touched: v }) === !1 || (A.onBefore || (() => !0))() === !1 ? !1 : (_ = c, T = S, !0),
      onStart: () => {
        s(!0).forEach((j) => j()), (A.onStart ?? (() => null))();
      },
      onFinish: () => {
        s(!1).forEach((j) => j()), v = _, b = T, _ = T = null, (A.onFinish ?? (() => null))();
      }
    };
  }, V = (E, w, S) => {
    if (typeof E > "u") {
      const A = Array.from(S?.only ?? S?.validate ?? []);
      l([...c, ...A]).forEach((z) => z()), R(S ?? {});
      return;
    }
    if (or(w) && !n) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    E = Je(E), Qe(b, E) !== w && (l([E, ...c]).forEach((A) => A()), R(S ?? {}));
  }, B = (E) => n === !1 ? Bt(E) : E, H = {
    touched: () => c,
    validate(E, w, S) {
      return typeof E == "object" && !("target" in E) && (S = E, E = w = void 0), V(E, w, S), H;
    },
    touch(E) {
      const w = Array.isArray(E) ? E : [Je(E)];
      return l([...c, ...w]).forEach((S) => S()), H;
    },
    validating: () => o,
    valid: u,
    errors: () => f,
    hasErrors: p,
    setErrors(E) {
      return y(E).forEach((w) => w()), H;
    },
    forgetError(E) {
      return g(E).forEach((w) => w()), H;
    },
    reset(...E) {
      if (E.length === 0)
        l([]).forEach((w) => w());
      else {
        const w = [...c];
        E.forEach((S) => {
          w.includes(S) && w.splice(w.indexOf(S), 1), yo(b, S, Qe(t, S));
        }), l(w).forEach((S) => S());
      }
      return H;
    },
    setTimeout(E) {
      return m(E), H;
    },
    on(E, w) {
      return r[E].push(w), H;
    },
    validateFiles() {
      return n = !0, H;
    }
  };
  return H;
}, Tf = (e) => Object.keys(e).reduce((t, r) => ({
  ...t,
  [r]: Array.isArray(e[r]) ? e[r][0] : e[r]
}), {}), Sf = (e) => Object.keys(e).reduce((t, r) => ({
  ...t,
  [r]: typeof e[r] == "string" ? [e[r]] : e[r]
}), {}), Je = (e) => typeof e != "string" ? e.target.name : e, Bt = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((r) => {
    const n = t[r];
    if (n !== null) {
      if (or(n)) {
        delete t[r];
        return;
      }
      if (Array.isArray(n)) {
        t[r] = Object.values(Bt({ ...n }));
        return;
      }
      if (typeof n == "object") {
        t[r] = Bt(t[r]);
        return;
      }
    }
  }), t;
}, Of = (e, t, r, n = {}) => {
  const o = ge(typeof r == "function" ? r() : r), s = Object.keys(o), i = lr([]), a = lr([]), u = Ef((f) => f[an(e)](sn(t), l.data(), n), o).on("validatingChanged", () => {
    l.validating = u.validating();
  }).on("validatedChanged", () => {
    i.value = u.valid();
  }).on("touchedChanged", () => {
    a.value = u.touched();
  }).on("errorsChanged", () => {
    l.hasErrors = u.hasErrors(), l.errors = Tf(u.errors()), i.value = u.valid();
  }), c = (f) => ({
    ...f,
    precognitive: !1,
    onStart: () => {
      l.processing = !0, (f.onStart ?? (() => null))();
    },
    onFinish: () => {
      l.processing = !1, (f.onFinish ?? (() => null))();
    },
    onValidationError: (y, g) => (u.setErrors(y.data.errors), f.onValidationError ? f.onValidationError(y) : Promise.reject(g))
  });
  let l = {
    ...ge(o),
    data() {
      const f = ge(Oo(l));
      return s.reduce((y, g) => ({
        ...y,
        [g]: f[g]
      }), {});
    },
    setData(f) {
      return Object.keys(f).forEach((y) => {
        l[y] = f[y];
      }), l;
    },
    touched(f) {
      return typeof f == "string" ? a.value.includes(f) : a.value.length > 0;
    },
    touch(f) {
      return u.touch(f), l;
    },
    validate(f, y) {
      return typeof f == "object" && !("target" in f) && (y = f, f = void 0), typeof f > "u" ? u.validate(y) : (f = Je(f), u.validate(f, Qe(l.data(), f), y)), l;
    },
    validating: !1,
    valid(f) {
      return i.value.includes(f);
    },
    invalid(f) {
      return typeof l.errors[f] < "u";
    },
    errors: {},
    hasErrors: !1,
    setErrors(f) {
      return u.setErrors(f), l;
    },
    forgetError(f) {
      return u.forgetError(f), l;
    },
    reset(...f) {
      const y = ge(typeof r == "function" ? r() : o);
      return f.length === 0 ? s.forEach((g) => l[g] = y[g]) : f.forEach((g) => yo(l, g, Qe(y, g))), u.reset(...f), l;
    },
    setValidationTimeout(f) {
      return u.setTimeout(f), l;
    },
    processing: !1,
    async submit(f = {}) {
      return te[an(e)](sn(t), l.data(), c(f));
    },
    validateFiles() {
      return u.validateFiles(), l;
    },
    validator() {
      return u;
    }
  };
  return l = So(l), l;
}, _f = (e, t, r, n = {}) => {
  const o = un(r), s = Of(e, t, r, n);
  s.validator().on("errorsChanged", () => {
    u(), c(
      // @ts-expect-error
      hf(s.validator().errors())
    );
  });
  const i = o.submit.bind(o), a = o.reset.bind(o), u = o.clearErrors.bind(o), c = o.setError.bind(o), l = o.transform.bind(o);
  let f = (g) => g;
  const y = Object.assign(o, {
    validating: s.validating,
    touched: s.touched,
    touch(g) {
      return s.touch(g), y;
    },
    valid: s.valid,
    invalid: s.invalid,
    setData(g) {
      return Object.keys(g).forEach((p) => {
        y[p] = g[p];
      }), y;
    },
    clearErrors(...g) {
      return u(...g), g.length === 0 ? s.setErrors({}) : g.forEach(s.forgetError), y;
    },
    reset(...g) {
      a(...g), s.reset(...g);
    },
    setErrors(g) {
      return s.setErrors(g), y;
    },
    forgetError(g) {
      return s.forgetError(g), y;
    },
    setError(g, p) {
      let h;
      if (typeof g != "object") {
        if (typeof p > "u")
          throw new Error("The `value` is required.");
        h = { [g]: p };
      } else
        h = g;
      return y.setErrors({
        ...o.errors,
        ...h
      }), y;
    },
    transform(g) {
      return l(g), f = g, y;
    },
    validate(g, p) {
      return s.setData(f(o.data())), typeof g == "object" && !("target" in g) && (p = g, g = void 0), typeof p == "object" && (p.onValidationError = p.onValidationError ?? p?.onError), typeof g > "u" ? s.validate(p) : s.validate(g, p), y;
    },
    setValidationTimeout(g) {
      return s.setValidationTimeout(g), y;
    },
    validateFiles() {
      return s.validateFiles(), y;
    },
    submit(g = {}, p, h) {
      typeof g != "string" && (h = g, p = df(t), g = pf(e)), i(g, p, {
        ...h,
        onError: (m) => {
          if (s.validator().setErrors(m), h?.onError)
            return h.onError(m);
        }
      });
    },
    validator: s.validator
  });
  return _o(() => y.validating = s.validating), y;
}, Af = { class: "space-y-2" }, Rf = /* @__PURE__ */ Le({
  __name: "CheckboxGroup",
  props: {
    form: {},
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, o = (i) => r.modelValue.includes(i), s = (i, a) => {
      const u = a ? [...r.modelValue, i] : r.modelValue.filter((c) => c !== i);
      n("update:modelValue", u);
    };
    return (i, a) => (N(), k("div", Af, [
      (N(!0), k(nt, null, ot(e.items, (u, c) => (N(), k("div", {
        key: c,
        class: "flex items-center gap-2"
      }, [
        We(se(Po), {
          id: `${r.form._prefix}-${u.label ?? u}`,
          "model-value": o(u.value ?? u),
          "onUpdate:modelValue": (l) => s(u.value ?? u, l === !0)
        }, null, 8, ["id", "model-value", "onUpdate:modelValue"]),
        We(se(fn), {
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
}), Eo = (e, t = {}) => {
  for (const r of Object.keys(e)) {
    const n = e[r];
    n.schema ? Eo(n.schema, t) : t[r] = n.value ?? null;
  }
  return t;
}, $f = (e) => {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let r = "";
  for (let n = 0; n < e; n++)
    r += t.charAt(Math.floor(Math.random() * t.length));
  return r;
}, Ot = (e) => {
  const t = {};
  for (const r of Object.keys(e)) {
    const n = e[r];
    if (n.schema) {
      Eo(n.schema, t);
      continue;
    }
    if (n.component === Rf) {
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
}, sr = (e) => Object.entries(e).map(([t, r]) => {
  const n = r.hasOwnProperty("setup") ? { component: r } : r;
  return {
    name: t,
    definition: n
  };
}), _t = (e) => typeof e == "function" ? e() : ln(e) ? e.value : e;
function Qf(e = {}, t, r) {
  const n = typeof e == "string", o = n ? r ?? {} : e, s = n ? e : void 0, i = n ? t : void 0, a = _t(o), u = n ? _f(s, i, Ot(a)) : un(Ot(a));
  u._prefix = $f(6);
  const c = L(() => sr(_t(o)));
  return (typeof o == "function" || ln(o)) && Ao(
    c,
    (f) => {
      const y = Ot(_t(o));
      for (const p of Object.keys(y))
        p in u || (u[p] = y[p]);
      const g = u.data();
      for (const p of Object.keys(g))
        p !== "_prefix" && !(p in y) && delete u[p];
    },
    { deep: !0 }
  ), {
    elements: c,
    form: u
  };
}
const xf = { key: 0 }, ir = /* @__PURE__ */ Le({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set([
      "component",
      "value",
      "label",
      "schema",
      "fieldset",
      "visible",
      "alert",
      "props",
      "events",
      "checked",
      "items"
    ]), o = L(() => {
      const h = t.element.definition?.fieldset;
      if (!h) return null;
      const m = [];
      for (const [b, T] of Object.entries(h)) {
        const v = T && typeof T == "object" && T.model ? T.model : b;
        m.push({ key: b, formKey: v });
      }
      return m;
    }), s = L(() => {
      const h = o.value;
      if (h) {
        const m = {};
        for (const { key: b, formKey: T } of h)
          m[T] = t.form[T];
        return m;
      }
      return { modelValue: t.form[t.element.name] };
    }), i = L(() => {
      const h = t.element.definition, m = h.component?.props, b = {}, T = (v, _) => {
        m?.hasOwnProperty(v) && (b[v] = _);
      };
      if (b.id = `${t.form._prefix}-${t.element.name}`, T("form", t.form), T("schema", h.schema), T("error", u.value[0] ?? null), h.props)
        for (const [v, _] of Object.entries(h.props))
          b[v] = _;
      for (const v of Object.keys(h))
        if (v !== "component" && v !== "props" && v !== "visible" && v !== "alert" && v !== "fieldset" && v !== "schema" && v !== "events") {
          const _ = h[v];
          if (v === "label" && (_ === !1 || _ === null || _ === "")) continue;
          process.env.NODE_ENV !== "production" && !n.has(v) && !m?.hasOwnProperty(v) && !r.has(v) && (r.add(v), console.warn(
            `[inertia-form-builder] "${v}" on element "${t.element.name}" was dropped — the component doesn't declare it as a prop. Put native HTML attributes under \`props: { ${v}: '...' }\` so they fall through to the element.`
          )), T(v, _);
        }
      for (const [v, _] of Object.entries(s.value))
        b[v] = _;
      return b;
    }), a = L(() => {
      const h = o.value, m = t.element.definition.events, b = (T, v = "modelValue") => {
        const _ = {
          [`update:${v}`]: ($) => {
            t.form[T] = $, m?.update && m.update(t.form, T);
          }
        };
        if (m)
          for (const [$, R] of Object.entries(m))
            $ !== "update" && (_[$] = () => R(t.form, T));
        return _;
      };
      if (h) {
        const T = {};
        for (const { formKey: v } of h)
          Object.assign(T, b(v, v));
        return T;
      }
      return b(t.element.name);
    }), u = L(() => {
      const h = o.value;
      return h ? h.map(({ formKey: m }) => t.form.errors[m]).filter((m) => m) : [t.form.errors[t.element.name]];
    }), c = L(() => u.value.filter(Boolean).map((h) => ({ message: h }))), l = L(() => (t.element.definition.label || t.element.name).replaceAll("_id", "").replaceAll("_", " ")), f = L(() => !!t.element.definition.schema), y = L(() => {
      const h = t.element.definition.label;
      return h === !1 || h === null || h === "" || t.element.definition.props?.type === "hidden" ? !1 : !f.value;
    }), g = L(() => {
      if (t.element.definition.alert !== void 0) {
        const h = t.element.definition.alert;
        return {
          ...h,
          visible: typeof h.visible == "function" ? h.visible : () => !0
        };
      }
      return null;
    }), p = L(() => {
      const h = t.element.definition.visible;
      return typeof h == "function" ? h(t.form) : !0;
    });
    return (h, m) => p.value ? (N(), k("div", xf, [
      y.value ? (N(), ie(se(fn), {
        key: 0,
        for: i.value.id,
        class: "mb-1 block capitalize"
      }, {
        default: be(() => [
          $e(ue(l.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : ye("", !0),
      (N(), ie(Ro(e.element.definition.component), cn({
        key: e.element.name
      }, i.value, $o(a.value)), null, 16)),
      g.value && g.value.visible() ? (N(), ie(se(Co), {
        key: 1,
        variant: "default",
        class: "mt-2 border-warning/50 text-warning dark:border-warning [&>svg]:text-warning"
      }, {
        default: be(() => [
          We(se(jo), { class: "flex items-center justify-between" }, {
            default: be(() => [
              $e(ue(g.value.text) + " ", 1),
              g.value.actionHref && g.value.actionText ? (N(), ie(se(dn), {
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
      !i.value.hasOwnProperty("error") && c.value.length > 0 ? (N(), ie(se(Fo), {
        key: 2,
        errors: c.value
      }, null, 8, ["errors"])) : ye("", !0)
    ])) : ye("", !0);
  }
}), Pf = { class: "mx-auto mt-6 max-w-md space-y-6" }, Cf = { class: "flex justify-end gap-2" }, ed = /* @__PURE__ */ Le({
  __name: "FormBuilder",
  props: {
    schema: {},
    submit: { default: "Save" }
  },
  setup(e) {
    const t = e, r = L(() => {
      const n = t.schema.elements;
      return "value" in n ? n.value : n;
    });
    return (n, o) => (N(), k("div", Pf, [
      gt(n.$slots, "default", {}, () => [
        (N(!0), k(nt, null, ot(r.value, (s) => (N(), ie(ir, {
          key: s.name,
          element: s,
          form: e.schema.form
        }, null, 8, ["element", "form"]))), 128))
      ]),
      gt(n.$slots, "actions-wrapper", {
        form: e.schema.form
      }, () => [
        At("div", Cf, [
          gt(n.$slots, "actions", {
            form: e.schema.form
          }, () => [
            We(se(dn), {
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
}), td = /* @__PURE__ */ Le({
  __name: "Grid",
  props: {
    schema: {},
    form: {}
  },
  setup(e) {
    const t = e, r = L(() => sr(t.schema)), n = L(() => {
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
      class: xo(["grid gap-x-4 gap-y-6 md:grid-flow-col", n.value])
    }, [
      (N(!0), k(nt, null, ot(r.value, (i) => (N(), ie(ir, cn({
        key: i.name,
        element: i,
        form: e.form
      }, { ref_for: !0 }, o.$attrs), null, 16, ["element", "form"]))), 128))
    ], 2));
  }
}), jf = { class: "mt-10" }, Ff = {
  key: 0,
  class: "mt-1 whitespace-pre-line text-sm leading-6 text-gray-500"
}, Nf = { class: "mt-4 space-y-6" }, rd = /* @__PURE__ */ Le({
  __name: "Section",
  props: {
    schema: {},
    form: {},
    heading: {},
    description: {}
  },
  setup(e) {
    const t = e, r = L(() => sr(t.schema));
    return (n, o) => (N(), k("div", jf, [
      At("label", null, ue(e.heading), 1),
      e.description ? (N(), k("p", Ff, ue(e.description), 1)) : ye("", !0),
      At("div", Nf, [
        (N(!0), k(nt, null, ot(r.value, (s) => (N(), ie(ir, {
          key: s.name,
          element: s,
          form: e.form
        }, null, 8, ["element", "form"]))), 128))
      ])
    ]));
  }
});
export {
  Rf as CheckboxGroup,
  ed as FormBuilder,
  td as Grid,
  rd as Section,
  Qf as useSchema
};
