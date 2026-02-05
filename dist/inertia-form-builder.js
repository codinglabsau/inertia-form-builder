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
), ys = typeof queueMicrotask < "u" ? queueMicrotask.bind(ae) : typeof process < "u" && process.nextTick || vn, bs = (e) => e != null && U(e[st]), p = {
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
function T(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
p.inherits(T, Error, {
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
const En = T.prototype, Tn = {};
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
Object.defineProperties(T, Tn);
Object.defineProperty(En, "isAxiosError", { value: !0 });
T.from = (e, t, r, n, o, s) => {
  const i = Object.create(En);
  p.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (d) => d !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", u = t == null && e ? e.code : t;
  return T.call(i, a, u, r, n, o), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", s && Object.assign(i, s), i;
};
const ws = null;
function $t(e) {
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
function vs(e) {
  return p.isArray(e) && !e.some($t);
}
const Es = p.toFlatObject(p, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ut(e, t, r) {
  if (!p.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = p.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, m) {
    return !p.isUndefined(m[y]);
  });
  const n = r.metaTokens, o = r.visitor || l, s = r.dots, i = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && p.isSpecCompliantForm(t);
  if (!p.isFunction(o))
    throw new TypeError("visitor must be a function");
  function d(f) {
    if (f === null) return "";
    if (p.isDate(f))
      return f.toISOString();
    if (p.isBoolean(f))
      return f.toString();
    if (!u && p.isBlob(f))
      throw new T("Blob is not supported. Use a Buffer instead.");
    return p.isArrayBuffer(f) || p.isTypedArray(f) ? u && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, y, m) {
    let b = f;
    if (f && !m && typeof f == "object") {
      if (p.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), f = JSON.stringify(f);
      else if (p.isArray(f) && vs(f) || (p.isFileList(f) || p.endsWith(y, "[]")) && (b = p.toArray(f)))
        return y = Sn(y), b.forEach(function(A, R) {
          !(p.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? fr([y], R, s) : i === null ? y : y + "[]",
            d(A)
          );
        }), !1;
    }
    return $t(f) ? !0 : (t.append(fr(m, y, s), d(f)), !1);
  }
  const c = [], g = Object.assign(Es, {
    defaultVisitor: l,
    convertValue: d,
    isVisitable: $t
  });
  function h(f, y) {
    if (!p.isUndefined(f)) {
      if (c.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      c.push(f), p.forEach(f, function(b, S) {
        (!(p.isUndefined(b) || b === null) && o.call(
          t,
          b,
          p.isString(S) ? S.trim() : S,
          y,
          g
        )) === !0 && h(b, y ? y.concat(S) : [S]);
      }), c.pop();
    }
  }
  if (!p.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
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
  p.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = p.isURLSearchParams(t) ? t.toString() : new Ht(t, r).toString(n), s) {
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
      return D.isNode && p.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function js(e) {
  return p.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
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
    return i = !i && p.isArray(o) ? o.length : i, u ? (p.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !a) : ((!o[i] || !p.isObject(o[i])) && (o[i] = []), t(r, n, o[i], s) && p.isArray(o[i]) && (o[i] = Fs(o[i])), !a);
  }
  if (p.isFormData(e) && p.isFunction(e.entries)) {
    const r = {};
    return p.forEachEntry(e, (n, o) => {
      t(js(n), o, r, 0);
    }), r;
  }
  return null;
}
function Ns(e, t, r) {
  if (p.isString(e))
    try {
      return (t || JSON.parse)(e), p.trim(e);
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
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = p.isObject(t);
    if (s && p.isHTMLForm(t) && (t = new FormData(t)), p.isFormData(t))
      return o ? JSON.stringify(Rn(t)) : t;
    if (p.isArrayBuffer(t) || p.isBuffer(t) || p.isStream(t) || p.isFile(t) || p.isBlob(t) || p.isReadableStream(t))
      return t;
    if (p.isArrayBufferView(t))
      return t.buffer;
    if (p.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Cs(t, this.formSerializer).toString();
      if ((a = p.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
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
    if (p.isResponse(t) || p.isReadableStream(t))
      return t;
    if (t && p.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? T.from(a, T.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
p.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Be.headers[e] = {};
});
const Ls = p.toObjectSet([
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
  return e === !1 || e == null ? e : p.isArray(e) ? e.map(ke) : String(e);
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
  if (p.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!p.isString(t)) {
    if (p.isString(n))
      return t.indexOf(n) !== -1;
    if (p.isRegExp(n))
      return n.test(t);
  }
}
function Bs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Ms(e, t) {
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
    function s(a, u, d) {
      const l = Oe(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const c = p.findKey(o, l);
      (!c || o[c] === void 0 || d === !0 || d === void 0 && o[c] !== !1) && (o[c || u] = ke(a));
    }
    const i = (a, u) => p.forEach(a, (d, l) => s(d, l, u));
    if (p.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (p.isString(t) && (t = t.trim()) && !Is(t))
      i(Ds(t), r);
    else if (p.isObject(t) && p.isIterable(t)) {
      let a = {}, u, d;
      for (const l of t) {
        if (!p.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        a[d = l[0]] = (u = a[d]) ? p.isArray(u) ? [...u, l[1]] : [u, l[1]] : l[1];
      }
      i(a, r);
    } else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Oe(t), t) {
      const n = p.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Us(o);
        if (p.isFunction(r))
          return r.call(this, o, n);
        if (p.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Oe(t), t) {
      const n = p.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || yt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = Oe(i), i) {
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
      const a = Oe(i);
      n[a] || (Ms(o, i), n[a] = !0);
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
  const r = this || Be, n = t || r, o = I.from(n.headers);
  let s = n.data;
  return p.forEach(e, function(a) {
    s = a.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function $n(e) {
  return !!(e && e.__CANCEL__);
}
function Te(e, t, r) {
  T.call(this, e ?? "canceled", T.ERR_CANCELED, t, r), this.name = "CanceledError";
}
p.inherits(Te, T, {
  __CANCEL__: !0
});
function xn(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new T(
    "Request failed with status code " + r.status,
    [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
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
    const d = Date.now(), l = n[s];
    i || (i = d), r[o] = u, n[o] = d;
    let c = s, g = 0;
    for (; c !== o; )
      g += r[c++], c = c % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), d - i < t)
      return;
    const h = l && d - l;
    return h ? Math.round(g * 1e3 / h) : void 0;
  };
}
function Vs(e, t) {
  let r = 0, n = 1e3 / t, o, s;
  const i = (d, l = Date.now()) => {
    r = l, o = null, s && (clearTimeout(s), s = null), e(...d);
  };
  return [(...d) => {
    const l = Date.now(), c = l - r;
    c >= n ? i(d, l) : (o = d, s || (s = setTimeout(() => {
      s = null, i(o);
    }, n - c)));
  }, () => o && i(o)];
}
const Xe = (e, t, r = 3) => {
  let n = 0;
  const o = qs(50, 250);
  return Vs((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, u = i - n, d = o(u), l = i <= a;
    n = i;
    const c = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: u,
      rate: d || void 0,
      estimated: d && a && l ? (a - i) / d : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(c);
  }, r);
}, mr = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, gr = (e) => (...t) => p.asap(() => e(...t)), zs = D.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, D.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(D.origin),
  D.navigator && /(msie|trident)/i.test(D.navigator.userAgent)
) : () => !0, Gs = D.hasStandardBrowserEnv ? (
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
  function n(d, l, c, g) {
    return p.isPlainObject(d) && p.isPlainObject(l) ? p.merge.call({ caseless: g }, d, l) : p.isPlainObject(l) ? p.merge({}, l) : p.isArray(l) ? l.slice() : l;
  }
  function o(d, l, c, g) {
    if (p.isUndefined(l)) {
      if (!p.isUndefined(d))
        return n(void 0, d, c, g);
    } else return n(d, l, c, g);
  }
  function s(d, l) {
    if (!p.isUndefined(l))
      return n(void 0, l);
  }
  function i(d, l) {
    if (p.isUndefined(l)) {
      if (!p.isUndefined(d))
        return n(void 0, d);
    } else return n(void 0, l);
  }
  function a(d, l, c) {
    if (c in t)
      return n(d, l);
    if (c in e)
      return n(void 0, d);
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
    headers: (d, l, c) => o(yr(d), yr(l), c, !0)
  };
  return p.forEach(Object.keys({ ...e, ...t }), function(l) {
    const c = u[l] || o, g = c(e[l], t[l], l);
    p.isUndefined(g) && c !== a || (r[l] = g);
  }), r;
}
const Cn = (e) => {
  const t = ce({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = t;
  if (t.headers = i = I.from(i), t.url = _n(Pn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), p.isFormData(r)) {
    if (D.hasStandardBrowserEnv || D.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (p.isFunction(r.getHeaders)) {
      const u = r.getHeaders(), d = ["content-type", "content-length"];
      Object.entries(u).forEach(([l, c]) => {
        d.includes(l.toLowerCase()) && i.set(l, c);
      });
    }
  }
  if (D.hasStandardBrowserEnv && (n && p.isFunction(n) && (n = n(t)), n || n !== !1 && zs(t.url))) {
    const u = o && s && Gs.read(s);
    u && i.set(o, u);
  }
  return t;
}, Js = typeof XMLHttpRequest < "u", Ws = Js && function(e) {
  return new Promise(function(r, n) {
    const o = Cn(e);
    let s = o.data;
    const i = I.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: u, onDownloadProgress: d } = o, l, c, g, h, f;
    function y() {
      h && h(), f && f(), o.cancelToken && o.cancelToken.unsubscribe(l), o.signal && o.signal.removeEventListener("abort", l);
    }
    let m = new XMLHttpRequest();
    m.open(o.method.toUpperCase(), o.url, !0), m.timeout = o.timeout;
    function b() {
      if (!m)
        return;
      const A = I.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), j = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: A,
        config: e,
        request: m
      };
      xn(function($) {
        r($), y();
      }, function($) {
        n($), y();
      }, j), m = null;
    }
    "onloadend" in m ? m.onloadend = b : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, m.onabort = function() {
      m && (n(new T("Request aborted", T.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function(R) {
      const j = R && R.message ? R.message : "Network Error", _ = new T(j, T.ERR_NETWORK, e, m);
      _.event = R || null, n(_), m = null;
    }, m.ontimeout = function() {
      let R = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const j = o.transitional || An;
      o.timeoutErrorMessage && (R = o.timeoutErrorMessage), n(new T(
        R,
        j.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
        e,
        m
      )), m = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in m && p.forEach(i.toJSON(), function(R, j) {
      m.setRequestHeader(j, R);
    }), p.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), a && a !== "json" && (m.responseType = o.responseType), d && ([g, f] = Xe(d, !0), m.addEventListener("progress", g)), u && m.upload && ([c, h] = Xe(u), m.upload.addEventListener("progress", c), m.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (l = (A) => {
      m && (n(!A || A.type ? new Te(null, e, m) : A), m.abort(), m = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const S = Hs(o.url);
    if (S && D.protocols.indexOf(S) === -1) {
      n(new T("Unsupported protocol " + S + ":", T.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(s || null);
  });
}, Xs = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const s = function(d) {
      if (!o) {
        o = !0, a();
        const l = d instanceof Error ? d : this.reason;
        n.abort(l instanceof T ? l : new Te(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new T(`timeout ${t} of ms exceeded`, T.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(s) : d.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", s));
    const { signal: u } = n;
    return u.unsubscribe = () => p.asap(a), u;
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
        const { done: d, value: l } = await o.next();
        if (d) {
          a(), u.close();
          return;
        }
        let c = l.byteLength;
        if (r) {
          let g = s += c;
          r(g);
        }
        u.enqueue(new Uint8Array(l));
      } catch (d) {
        throw a(d), d;
      }
    },
    cancel(u) {
      return a(u), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, wr = 64 * 1024, { isFunction: Ve } = p, ei = (({ Request: e, Response: t }) => ({
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
}, ti = (e) => {
  e = p.merge.call({
    skipUndefined: !0
  }, ei, e);
  const { fetch: t, Request: r, Response: n } = e, o = t ? Ve(t) : typeof fetch == "function", s = Ve(r), i = Ve(n);
  if (!o)
    return !1;
  const a = o && Ve(vr), u = o && (typeof Er == "function" ? /* @__PURE__ */ ((f) => (y) => f.encode(y))(new Er()) : async (f) => new Uint8Array(await new r(f).arrayBuffer())), d = s && a && Tr(() => {
    let f = !1;
    const y = new r(D.origin, {
      body: new vr(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !y;
  }), l = i && a && Tr(() => p.isReadableStream(new n("").body)), c = {
    stream: l && ((f) => f.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !c[f] && (c[f] = (y, m) => {
      let b = y && y[f];
      if (b)
        return b.call(y);
      throw new T(`Response type '${f}' is not supported`, T.ERR_NOT_SUPPORT, m);
    });
  });
  const g = async (f) => {
    if (f == null)
      return 0;
    if (p.isBlob(f))
      return f.size;
    if (p.isSpecCompliantForm(f))
      return (await new r(D.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (p.isArrayBufferView(f) || p.isArrayBuffer(f))
      return f.byteLength;
    if (p.isURLSearchParams(f) && (f = f + ""), p.isString(f))
      return (await u(f)).byteLength;
  }, h = async (f, y) => {
    const m = p.toFiniteNumber(f.getContentLength());
    return m ?? g(y);
  };
  return async (f) => {
    let {
      url: y,
      method: m,
      data: b,
      signal: S,
      cancelToken: A,
      timeout: R,
      onDownloadProgress: j,
      onUploadProgress: _,
      responseType: $,
      headers: V,
      withCredentials: B = "same-origin",
      fetchOptions: H
    } = Cn(f), v = t || fetch;
    $ = $ ? ($ + "").toLowerCase() : "text";
    let w = Xs([S, A && A.toAbortSignal()], R), E = null;
    const O = w && w.unsubscribe && (() => {
      w.unsubscribe();
    });
    let z;
    try {
      if (_ && d && m !== "get" && m !== "head" && (z = await h(V, b)) !== 0) {
        let oe = new r(y, {
          method: "POST",
          body: b,
          duplex: "half"
        }), me;
        if (p.isFormData(b) && (me = oe.headers.get("content-type")) && V.setContentType(me), oe.body) {
          const [mt, qe] = mr(
            z,
            Xe(gr(_))
          );
          b = br(oe.body, wr, mt, qe);
        }
      }
      p.isString(B) || (B = B ? "include" : "omit");
      const C = s && "credentials" in r.prototype, ee = {
        ...H,
        signal: w,
        method: m.toUpperCase(),
        headers: V.normalize().toJSON(),
        body: b,
        duplex: "half",
        credentials: C ? B : void 0
      };
      E = s && new r(y, ee);
      let X = await (s ? v(E, H) : v(y, ee));
      const ar = l && ($ === "stream" || $ === "response");
      if (l && (j || ar && O)) {
        const oe = {};
        ["status", "statusText", "headers"].forEach((ur) => {
          oe[ur] = X[ur];
        });
        const me = p.toFiniteNumber(X.headers.get("content-length")), [mt, qe] = j && mr(
          me,
          Xe(gr(j), !0)
        ) || [];
        X = new n(
          br(X.body, wr, mt, () => {
            qe && qe(), O && O();
          }),
          oe
        );
      }
      $ = $ || "text";
      let To = await c[p.findKey(c, $) || "text"](X, f);
      return !ar && O && O(), await new Promise((oe, me) => {
        xn(oe, me, {
          data: To,
          headers: I.from(X.headers),
          status: X.status,
          statusText: X.statusText,
          config: f,
          request: E
        });
      });
    } catch (C) {
      throw O && O(), C && C.name === "TypeError" && /Load failed|fetch/i.test(C.message) ? Object.assign(
        new T("Network Error", T.ERR_NETWORK, f, E),
        {
          cause: C.cause || C
        }
      ) : T.from(C, C && C.code, f, E);
    }
  };
}, ri = /* @__PURE__ */ new Map(), jn = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: o } = t, s = [
    n,
    o,
    r
  ];
  let i = s.length, a = i, u, d, l = ri;
  for (; a--; )
    u = s[a], d = l.get(u), d === void 0 && l.set(u, d = a ? /* @__PURE__ */ new Map() : ti(t)), l = d;
  return d;
};
jn();
const Vt = {
  http: ws,
  xhr: Ws,
  fetch: {
    get: jn
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
const Sr = (e) => `- ${e}`, ni = (e) => p.isFunction(e) || e === null || e === !1;
function oi(e, t) {
  e = p.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, o;
  const s = {};
  for (let i = 0; i < r; i++) {
    n = e[i];
    let a;
    if (o = n, !ni(n) && (o = Vt[(a = String(n)).toLowerCase()], o === void 0))
      throw new T(`Unknown adapter '${a}'`);
    if (o && (p.isFunction(o) || (o = o.get(t))))
      break;
    s[a || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(s).map(
      ([u, d]) => `adapter ${u} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = r ? i.length > 1 ? `since :
` + i.map(Sr).join(`
`) : " " + Sr(i[0]) : "as no adapter specified";
    throw new T(
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
      throw new T(
        o(i, " has been removed" + (r ? " in " + r : "")),
        T.ERR_DEPRECATED
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
    throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = t[s];
    if (i) {
      const a = e[s], u = a === void 0 || i(a, s, e);
      if (u !== !0)
        throw new T("option " + s + " must be " + u, T.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new T("Unknown option " + s, T.ERR_BAD_OPTION);
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
    }, !1), o != null && (p.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Ke.assertOptions(o, {
      encode: Z.function,
      serialize: Z.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Ke.assertOptions(r, {
      baseUrl: Z.spelling("baseURL"),
      withXsrfToken: Z.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = s && p.merge(
      s.common,
      s[r.method]
    );
    s && p.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete s[f];
      }
    ), r.headers = I.concat(i, s);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (u = u && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(y) {
      d.push(y.fulfilled, y.rejected);
    });
    let l, c = 0, g;
    if (!u) {
      const f = [Or.bind(this), void 0];
      for (f.unshift(...a), f.push(...d), g = f.length, l = Promise.resolve(r); c < g; )
        l = l.then(f[c++], f[c++]);
      return l;
    }
    g = a.length;
    let h = r;
    for (; c < g; ) {
      const f = a[c++], y = a[c++];
      try {
        h = f(h);
      } catch (m) {
        y.call(this, m);
        break;
      }
    }
    try {
      l = Or.call(this, h);
    } catch (f) {
      return Promise.reject(f);
    }
    for (c = 0, g = d.length; c < g; )
      l = l.then(d[c++], d[c++]);
    return l;
  }
  getUri(t) {
    t = ce(this.defaults, t);
    const r = Pn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return _n(r, t.params, t.paramsSerializer);
  }
};
p.forEach(["delete", "get", "head", "options"], function(t) {
  le.prototype[t] = function(r, n) {
    return this.request(ce(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
p.forEach(["post", "put", "patch"], function(t) {
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
  return p.isObject(e) && e.isAxiosError === !0;
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
  return p.extend(r, le.prototype, t, { allOwnKeys: !0 }), p.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
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
F.AxiosError = T;
F.Cancel = F.CanceledError;
F.all = function(t) {
  return Promise.all(t);
};
F.spread = ai;
F.isAxiosError = ui;
F.mergeConfig = ce;
F.AxiosHeaders = I;
F.formToJSON = (e) => Rn(p.isHTMLForm(e) ? new FormData(e) : e);
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
var Wn = typeof exports == "object" && exports && !exports.nodeType && exports, Lr = Wn && typeof module == "object" && module && !module.nodeType && module, pa = Lr && Lr.exports === Wn, Dr = pa ? W.Buffer : void 0, ha = Dr ? Dr.isBuffer : void 0, Ce = ha || da, ma = "[object Arguments]", ga = "[object Array]", ya = "[object Boolean]", ba = "[object Date]", wa = "[object Error]", va = "[object Function]", Ea = "[object Map]", Ta = "[object Number]", Sa = "[object Object]", Oa = "[object RegExp]", _a = "[object Set]", Aa = "[object String]", Ra = "[object WeakMap]", $a = "[object ArrayBuffer]", xa = "[object DataView]", Pa = "[object Float32Array]", Ca = "[object Float64Array]", ja = "[object Int8Array]", Fa = "[object Int16Array]", Na = "[object Int32Array]", La = "[object Uint8Array]", Da = "[object Uint8ClampedArray]", Ua = "[object Uint16Array]", Ia = "[object Uint32Array]", P = {};
P[Pa] = P[Ca] = P[ja] = P[Fa] = P[Na] = P[La] = P[Da] = P[Ua] = P[Ia] = !0;
P[ma] = P[ga] = P[$a] = P[ya] = P[xa] = P[ba] = P[wa] = P[va] = P[Ea] = P[Ta] = P[Sa] = P[Oa] = P[_a] = P[Aa] = P[Ra] = !1;
function Ba(e) {
  return Q(e) && Kn(e.length) && !!P[de(e)];
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
  for (var d in e)
    (t || qa.call(e, d)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Gt(d, u))) && a.push(d);
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
var Zr = ve && ve.isSet, Ml = Zr ? Wt(Zr) : Bl, Hl = 1, ql = 2, Vl = 4, co = "[object Arguments]", zl = "[object Array]", Gl = "[object Boolean]", kl = "[object Date]", Kl = "[object Error]", fo = "[object Function]", Jl = "[object GeneratorFunction]", Wl = "[object Map]", Xl = "[object Number]", po = "[object Object]", Zl = "[object RegExp]", Yl = "[object Set]", Ql = "[object String]", ec = "[object Symbol]", tc = "[object WeakMap]", rc = "[object ArrayBuffer]", nc = "[object DataView]", oc = "[object Float32Array]", sc = "[object Float64Array]", ic = "[object Int8Array]", ac = "[object Int16Array]", uc = "[object Int32Array]", lc = "[object Uint8Array]", cc = "[object Uint8ClampedArray]", fc = "[object Uint16Array]", dc = "[object Uint32Array]", x = {};
x[co] = x[zl] = x[rc] = x[nc] = x[Gl] = x[kl] = x[oc] = x[sc] = x[ic] = x[ac] = x[uc] = x[Wl] = x[Xl] = x[po] = x[Zl] = x[Yl] = x[Ql] = x[ec] = x[lc] = x[cc] = x[fc] = x[dc] = !0;
x[Kl] = x[fo] = x[tc] = !1;
function Pe(e, t, r, n, o, s) {
  var i, a = t & Hl, u = t & ql, d = t & Vl;
  if (r && (i = o ? r(e, n, o, s) : r(e)), i !== void 0)
    return i;
  if (!M(e))
    return e;
  var l = K(e);
  if (l) {
    if (i = cl(e), !a)
      return zn(e, i);
  } else {
    var c = G(e), g = c == fo || c == Jl;
    if (Ce(e))
      return no(e, a);
    if (c == po || c == co || g && !o) {
      if (i = u || g ? {} : lo(e), !a)
        return u ? tl(e, Ju(i, e)) : Qu(e, Ku(i, e));
    } else {
      if (!x[c])
        return o ? e : {};
      i = Nl(e, c, a);
    }
  }
  s || (s = new Y());
  var h = s.get(e);
  if (h)
    return h;
  s.set(e, i), Ml(e) ? e.forEach(function(m) {
    i.add(Pe(m, t, r, m, e, s));
  }) : Ul(e) && e.forEach(function(m, b) {
    i.set(b, Pe(m, t, r, b, e, s));
  });
  var f = d ? u ? ao : jt : u ? He : Zt, y = l ? void 0 : f(e);
  return Yi(y || e, function(m, b) {
    y && (b = m, m = e[b]), Kt(i, b, Pe(m, t, r, b, e, s));
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
  var d = s.get(e), l = s.get(t);
  if (d && l)
    return d == t && l == e;
  var c = -1, g = !0, h = r & Ec ? new tt() : void 0;
  for (s.set(e, t), s.set(t, e); ++c < a; ) {
    var f = e[c], y = t[c];
    if (n)
      var m = i ? n(y, f, c, t, e, s) : n(f, y, c, e, t, s);
    if (m !== void 0) {
      if (m)
        continue;
      g = !1;
      break;
    }
    if (h) {
      if (!bc(t, function(b, S) {
        if (!wc(h, S) && (f === b || o(f, b, r, n, s)))
          return h.push(S);
      })) {
        g = !1;
        break;
      }
    } else if (!(f === y || o(f, y, r, n, s))) {
      g = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), g;
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
      var d = i.get(e);
      if (d)
        return d == t;
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
  var i = r & Ic, a = jt(e), u = a.length, d = jt(t), l = d.length;
  if (u != l && !i)
    return !1;
  for (var c = u; c--; ) {
    var g = a[c];
    if (!(i ? g in t : Mc.call(t, g)))
      return !1;
  }
  var h = s.get(e), f = s.get(t);
  if (h && f)
    return h == t && f == e;
  var y = !0;
  s.set(e, t), s.set(t, e);
  for (var m = i; ++c < u; ) {
    g = a[c];
    var b = e[g], S = t[g];
    if (n)
      var A = i ? n(S, b, g, t, e, s) : n(b, S, g, e, t, s);
    if (!(A === void 0 ? b === S || o(b, S, r, n, s) : A)) {
      y = !1;
      break;
    }
    m || (m = g == "constructor");
  }
  if (y && !m) {
    var R = e.constructor, j = t.constructor;
    R != j && "constructor" in e && "constructor" in t && !(typeof R == "function" && R instanceof R && typeof j == "function" && j instanceof j) && (y = !1);
  }
  return s.delete(e), s.delete(t), y;
}
var qc = 1, Qr = "[object Arguments]", en = "[object Array]", ze = "[object Object]", Vc = Object.prototype, tn = Vc.hasOwnProperty;
function zc(e, t, r, n, o, s) {
  var i = K(e), a = K(t), u = i ? en : G(e), d = a ? en : G(t);
  u = u == Qr ? ze : u, d = d == Qr ? ze : d;
  var l = u == ze, c = d == ze, g = u == d;
  if (g && Ce(e)) {
    if (!Ce(t))
      return !1;
    i = !0, l = !1;
  }
  if (g && !l)
    return s || (s = new Y()), i || Xt(e) ? ho(e, t, r, n, o, s) : Uc(e, t, u, r, n, o, s);
  if (!(r & qc)) {
    var h = l && tn.call(e, "__wrapped__"), f = c && tn.call(t, "__wrapped__");
    if (h || f) {
      var y = h ? e.value() : e, m = f ? t.value() : t;
      return s || (s = new Y()), o(y, m, r, n, s);
    }
  }
  return g ? (s || (s = new Y()), Hc(e, t, r, n, o, s)) : !1;
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
  var n, o, s, i, a, u, d = 0, l = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Kc);
  t = Pr(t) || 0, M(r) && (l = !0, c = "maxWait" in r, s = c ? Jc(Pr(r.maxWait) || 0, t) : s, g = "trailing" in r ? !0 : g);
  function h(_) {
    var $ = n, V = o;
    return n = o = void 0, d = _, i = e.apply(V, $), i;
  }
  function f(_) {
    return d = _, a = setTimeout(b, t), l ? h(_) : i;
  }
  function y(_) {
    var $ = _ - u, V = _ - d, B = t - $;
    return c ? Wc(B, s - V) : B;
  }
  function m(_) {
    var $ = _ - u, V = _ - d;
    return u === void 0 || $ >= t || $ < 0 || c && V >= s;
  }
  function b() {
    var _ = St();
    if (m(_))
      return S(_);
    a = setTimeout(b, y(_));
  }
  function S(_) {
    return a = void 0, g && n ? h(_) : (n = o = void 0, i);
  }
  function A() {
    a !== void 0 && clearTimeout(a), d = 0, n = u = o = a = void 0;
  }
  function R() {
    return a === void 0 ? i : S(St());
  }
  function j() {
    var _ = St(), $ = m(_);
    if (n = arguments, o = this, u = _, $) {
      if (a === void 0)
        return f(u);
      if (c)
        return clearTimeout(a), a = setTimeout(b, t), h(u);
    }
    return a === void 0 && (a = setTimeout(b, t)), i;
  }
  return j.cancel = A, j.flush = R, j;
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
  var a = Ut(e, r), u = Ut(t, r), d = i.get(u);
  if (d) {
    Dt(e, r, d);
    return;
  }
  var l = s ? s(a, u, r + "", e, t, i) : void 0, c = l === void 0;
  if (c) {
    var g = K(u), h = !g && Ce(u), f = !g && !h && Xt(u);
    l = u, g || h || f ? K(a) ? l = a : Zc(a) ? l = zn(a) : h ? (c = !1, l = no(u, !0)) : f ? (c = !1, l = uo(u, !0)) : l = [] : to(u) || Ye(u) ? (l = a, Ye(a) ? l = Yc(a) : (!M(a) || zt(a)) && (l = lo(u))) : c = !1;
  }
  c && (i.set(u, l), o(l, u, n, s, i), i.delete(u)), Dt(e, r, l);
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
    var u = Qt(t[o]), d = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (o != i) {
      var l = a[u];
      d = void 0, d === void 0 && (d = M(l) ? l : Gt(t[o + 1]) ? [] : {});
    }
    Kt(a, u, d), a = a[u];
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
  const s = (v) => v !== o ? (o = v, r.validatingChanged) : [];
  let i = [];
  const a = (v) => {
    const w = [...new Set(v)];
    return i.length !== w.length || !w.every((E) => i.includes(E)) ? (i = w, r.validatedChanged) : [];
  }, u = () => i.filter((v) => typeof c[v] > "u");
  let d = [];
  const l = (v) => {
    const w = [...new Set(v)];
    return d.length !== w.length || !w.every((E) => d.includes(E)) ? (d = w, r.touchedChanged) : [];
  };
  let c = {};
  const g = (v) => {
    const w = Sf(v);
    return rf(c, w) ? [] : (c = w, r.errorsChanged);
  }, h = (v) => {
    const w = { ...c };
    return delete w[Je(v)], g(w);
  }, f = () => Object.keys(c).length > 0;
  let y = 1500;
  const m = (v) => {
    y = v, _.cancel(), _ = j();
  };
  let b = t, S = null, A = [], R = null;
  const j = () => Xc((v) => {
    e({
      get: (w, E = {}, O = {}) => te.get(w, B(E), $(O, v, E)),
      post: (w, E = {}, O = {}) => te.post(w, B(E), $(O, v, E)),
      patch: (w, E = {}, O = {}) => te.patch(w, B(E), $(O, v, E)),
      put: (w, E = {}, O = {}) => te.put(w, B(E), $(O, v, E)),
      delete: (w, E = {}, O = {}) => te.delete(w, B(E), $(O, v, E))
    }).catch((w) => Un(w) || In(w) && w.response?.status === 422 ? null : Promise.reject(w));
  }, y, { leading: !0, trailing: !0 });
  let _ = j();
  const $ = (v, w, E = {}) => {
    const O = {
      ...v,
      ...w
    }, z = Array.from(O.only ?? O.validate ?? d);
    return {
      ...w,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...li(v, w),
      only: z,
      timeout: O.timeout ?? 5e3,
      onValidationError: (C, ee) => ([
        ...a([...i, ...z]),
        ...g(It(rn({ ...c }, z), C.data.errors))
      ].forEach((X) => X()), O.onValidationError ? O.onValidationError(C, ee) : Promise.reject(ee)),
      onSuccess: (C) => (a([...i, ...z]).forEach((ee) => ee()), O.onSuccess ? O.onSuccess(C) : C),
      onPrecognitionSuccess: (C) => ([
        ...a([...i, ...z]),
        ...g(rn({ ...c }, z))
      ].forEach((ee) => ee()), O.onPrecognitionSuccess ? O.onPrecognitionSuccess(C) : C),
      onBefore: () => O.onBeforeValidation && O.onBeforeValidation({ data: E, touched: d }, { data: b, touched: A }) === !1 || (O.onBefore || (() => !0))() === !1 ? !1 : (R = d, S = E, !0),
      onStart: () => {
        s(!0).forEach((C) => C()), (O.onStart ?? (() => null))();
      },
      onFinish: () => {
        s(!1).forEach((C) => C()), A = R, b = S, R = S = null, (O.onFinish ?? (() => null))();
      }
    };
  }, V = (v, w, E) => {
    if (typeof v > "u") {
      const O = Array.from(E?.only ?? E?.validate ?? []);
      l([...d, ...O]).forEach((z) => z()), _(E ?? {});
      return;
    }
    if (or(w) && !n) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    v = Je(v), Qe(b, v) !== w && (l([v, ...d]).forEach((O) => O()), _(E ?? {}));
  }, B = (v) => n === !1 ? Bt(v) : v, H = {
    touched: () => d,
    validate(v, w, E) {
      return typeof v == "object" && !("target" in v) && (E = v, v = w = void 0), V(v, w, E), H;
    },
    touch(v) {
      const w = Array.isArray(v) ? v : [Je(v)];
      return l([...d, ...w]).forEach((E) => E()), H;
    },
    validating: () => o,
    valid: u,
    errors: () => c,
    hasErrors: f,
    setErrors(v) {
      return g(v).forEach((w) => w()), H;
    },
    forgetError(v) {
      return h(v).forEach((w) => w()), H;
    },
    reset(...v) {
      if (v.length === 0)
        l([]).forEach((w) => w());
      else {
        const w = [...d];
        v.forEach((E) => {
          w.includes(E) && w.splice(w.indexOf(E), 1), yo(b, E, Qe(t, E));
        }), l(w).forEach((E) => E());
      }
      return H;
    },
    setTimeout(v) {
      return m(v), H;
    },
    on(v, w) {
      return r[v].push(w), H;
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
  const o = ge(typeof r == "function" ? r() : r), s = Object.keys(o), i = lr([]), a = lr([]), u = Ef((c) => c[an(e)](sn(t), l.data(), n), o).on("validatingChanged", () => {
    l.validating = u.validating();
  }).on("validatedChanged", () => {
    i.value = u.valid();
  }).on("touchedChanged", () => {
    a.value = u.touched();
  }).on("errorsChanged", () => {
    l.hasErrors = u.hasErrors(), l.errors = Tf(u.errors()), i.value = u.valid();
  }), d = (c) => ({
    ...c,
    precognitive: !1,
    onStart: () => {
      l.processing = !0, (c.onStart ?? (() => null))();
    },
    onFinish: () => {
      l.processing = !1, (c.onFinish ?? (() => null))();
    },
    onValidationError: (g, h) => (u.setErrors(g.data.errors), c.onValidationError ? c.onValidationError(g) : Promise.reject(h))
  });
  let l = {
    ...ge(o),
    data() {
      const c = ge(Oo(l));
      return s.reduce((g, h) => ({
        ...g,
        [h]: c[h]
      }), {});
    },
    setData(c) {
      return Object.keys(c).forEach((g) => {
        l[g] = c[g];
      }), l;
    },
    touched(c) {
      return typeof c == "string" ? a.value.includes(c) : a.value.length > 0;
    },
    touch(c) {
      return u.touch(c), l;
    },
    validate(c, g) {
      return typeof c == "object" && !("target" in c) && (g = c, c = void 0), typeof c > "u" ? u.validate(g) : (c = Je(c), u.validate(c, Qe(l.data(), c), g)), l;
    },
    validating: !1,
    valid(c) {
      return i.value.includes(c);
    },
    invalid(c) {
      return typeof l.errors[c] < "u";
    },
    errors: {},
    hasErrors: !1,
    setErrors(c) {
      return u.setErrors(c), l;
    },
    forgetError(c) {
      return u.forgetError(c), l;
    },
    reset(...c) {
      const g = ge(typeof r == "function" ? r() : o);
      return c.length === 0 ? s.forEach((h) => l[h] = g[h]) : c.forEach((h) => yo(l, h, Qe(g, h))), u.reset(...c), l;
    },
    setValidationTimeout(c) {
      return u.setTimeout(c), l;
    },
    processing: !1,
    async submit(c = {}) {
      return te[an(e)](sn(t), l.data(), d(c));
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
    u(), d(
      // @ts-expect-error
      hf(s.validator().errors())
    );
  });
  const i = o.submit.bind(o), a = o.reset.bind(o), u = o.clearErrors.bind(o), d = o.setError.bind(o), l = o.transform.bind(o);
  let c = (h) => h;
  const g = Object.assign(o, {
    validating: s.validating,
    touched: s.touched,
    touch(h) {
      return s.touch(h), g;
    },
    valid: s.valid,
    invalid: s.invalid,
    setData(h) {
      return Object.keys(h).forEach((f) => {
        g[f] = h[f];
      }), g;
    },
    clearErrors(...h) {
      return u(...h), h.length === 0 ? s.setErrors({}) : h.forEach(s.forgetError), g;
    },
    reset(...h) {
      a(...h), s.reset(...h);
    },
    setErrors(h) {
      return s.setErrors(h), g;
    },
    forgetError(h) {
      return s.forgetError(h), g;
    },
    setError(h, f) {
      let y;
      if (typeof h != "object") {
        if (typeof f > "u")
          throw new Error("The `value` is required.");
        y = { [h]: f };
      } else
        y = h;
      return g.setErrors({
        ...o.errors,
        ...y
      }), g;
    },
    transform(h) {
      return l(h), c = h, g;
    },
    validate(h, f) {
      return s.setData(c(o.data())), typeof h == "object" && !("target" in h) && (f = h, h = void 0), typeof f == "object" && (f.onValidationError = f.onValidationError ?? f?.onError), typeof h > "u" ? s.validate(f) : s.validate(h, f), g;
    },
    setValidationTimeout(h) {
      return s.setValidationTimeout(h), g;
    },
    validateFiles() {
      return s.validateFiles(), g;
    },
    submit(h = {}, f, y) {
      typeof h != "string" && (y = h, f = df(t), h = pf(e)), i(h, f, {
        ...y,
        onError: (m) => {
          if (s.validator().setErrors(m), y?.onError)
            return y.onError(m);
        }
      });
    },
    validator: s.validator
  });
  return _o(() => g.validating = s.validating), g;
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
      const u = a ? [...r.modelValue, i] : r.modelValue.filter((d) => d !== i);
      n("update:modelValue", u);
    };
    return (i, a) => (N(), k("div", Af, [
      (N(!0), k(nt, null, ot(e.items, (u, d) => (N(), k("div", {
        key: d,
        class: "flex items-center gap-2"
      }, [
        We(se(Po), {
          id: `${r.form._prefix}-${u.label ?? u}`,
          "model-value": o(u.value ?? u),
          "onUpdate:modelValue": (l) => s(u.value ?? u, l)
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
  const d = L(() => sr(_t(o)));
  return (typeof o == "function" || ln(o)) && Ao(
    d,
    (c) => {
      const g = Ot(_t(o));
      for (const f of Object.keys(g))
        f in u || (u[f] = g[f]);
      const h = u.data();
      for (const f of Object.keys(h))
        f !== "_prefix" && !(f in g) && delete u[f];
    },
    { deep: !0 }
  ), {
    elements: d,
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
    const t = e, r = L(() => {
      const h = t.element.definition?.fieldset;
      if (!h) return null;
      const f = [];
      for (const [y, m] of Object.entries(h)) {
        const b = m && typeof m == "object" && m.model ? m.model : y;
        f.push({ key: y, formKey: b });
      }
      return f;
    }), n = L(() => {
      const h = r.value;
      if (h) {
        const f = {};
        for (const { key: y, formKey: m } of h)
          f[m] = t.form[m];
        return f;
      }
      return { modelValue: t.form[t.element.name] };
    }), o = L(() => {
      const h = t.element.definition, f = h.component?.props, y = {}, m = (b, S) => {
        f?.hasOwnProperty(b) && (y[b] = S);
      };
      if (y.id = `${t.form._prefix}-${t.element.name}`, m("form", t.form), m("schema", h.schema), m("error", i.value[0] ?? null), h.props)
        for (const [b, S] of Object.entries(h.props))
          y[b] = S;
      for (const b of Object.keys(h))
        if (b !== "component" && b !== "props" && b !== "visible" && b !== "alert" && b !== "fieldset" && b !== "schema" && b !== "events") {
          const S = h[b];
          if (b === "label" && (S === !1 || S === null || S === "")) continue;
          m(b, S);
        }
      for (const [b, S] of Object.entries(n.value))
        y[b] = S;
      return y;
    }), s = L(() => {
      const h = r.value, f = t.element.definition.events, y = (m, b = "modelValue") => {
        const S = {
          [`update:${b}`]: (A) => {
            t.form[m] = A, f?.update && f.update(t.form, m);
          }
        };
        if (f)
          for (const [A, R] of Object.entries(f))
            A !== "update" && (S[A] = () => R(t.form, m));
        return S;
      };
      if (h) {
        const m = {};
        for (const { formKey: b } of h)
          Object.assign(m, y(b, b));
        return m;
      }
      return y(t.element.name);
    }), i = L(() => {
      const h = r.value;
      return h ? h.map(({ formKey: f }) => t.form.errors[f]).filter((f) => f) : [t.form.errors[t.element.name]];
    }), a = L(() => i.value.filter(Boolean).map((h) => ({ message: h }))), u = L(() => (t.element.definition.label || t.element.name).replaceAll("_id", "").replaceAll("_", " ")), d = L(() => !!t.element.definition.schema), l = L(() => {
      const h = t.element.definition.label;
      return h === !1 || h === null || h === "" || t.element.definition.props?.type === "hidden" ? !1 : !d.value;
    }), c = L(() => {
      if (t.element.definition.alert !== void 0) {
        const h = t.element.definition.alert;
        return {
          ...h,
          visible: typeof h.visible == "function" ? h.visible : () => !0
        };
      }
      return null;
    }), g = L(() => {
      const h = t.element.definition.visible;
      return typeof h == "function" ? h(t.form) : !0;
    });
    return (h, f) => g.value ? (N(), k("div", xf, [
      l.value ? (N(), ie(se(fn), {
        key: 0,
        for: o.value.id,
        class: "mb-1 block capitalize"
      }, {
        default: be(() => [
          $e(ue(u.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : ye("", !0),
      (N(), ie(Ro(e.element.definition.component), cn({
        key: e.element.name
      }, o.value, $o(s.value)), null, 16)),
      c.value && c.value.visible() ? (N(), ie(se(Co), {
        key: 1,
        variant: "warning",
        class: "mt-2"
      }, {
        default: be(() => [
          We(se(jo), { class: "flex items-center justify-between" }, {
            default: be(() => [
              $e(ue(c.value.text) + " ", 1),
              c.value.actionHref && c.value.actionText ? (N(), ie(se(dn), {
                key: 0,
                as: "a",
                href: c.value.actionHref,
                target: c.value.externalAction ? "_blank" : void 0,
                variant: "outline",
                size: "sm"
              }, {
                default: be(() => [
                  $e(ue(c.value.actionText), 1)
                ]),
                _: 1
              }, 8, ["href", "target"])) : ye("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : ye("", !0),
      !o.value.hasOwnProperty("error") && a.value.length > 0 ? (N(), ie(se(Fo), {
        key: 2,
        errors: a.value
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
