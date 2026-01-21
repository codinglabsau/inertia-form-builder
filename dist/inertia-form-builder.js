import { useForm as an } from "@inertiajs/vue3";
import { ref as Ze, reactive as vo, toRaw as To, watchEffect as So, defineComponent as Le, createElementBlock as H, openBlock as N, Fragment as De, renderList as Ue, createVNode as Ye, unref as J, withCtx as be, createTextVNode as $e, toDisplayString as ue, inject as Oo, computed as se, watch as _o, createCommentVNode as ye, createBlock as ie, resolveDynamicComponent as Ao, mergeProps as un, toHandlers as Ro, provide as $o, renderSlot as yt, createElementVNode as _t, normalizeClass as xo } from "vue";
import { Checkbox as Po, Label as cn, Alert as Co, AlertDescription as jo, Button as ln, FieldError as Fo } from "@codinglabsau/gooey";
function fn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: No } = Object.prototype, { getPrototypeOf: Bt } = Object, { iterator: st, toStringTag: dn } = Symbol, at = /* @__PURE__ */ ((e) => (t) => {
  const r = No.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), K = (e) => (e = e.toLowerCase(), (t) => at(t) === e), ut = (e) => (t) => typeof t === e, { isArray: ve } = Array, we = ut("undefined");
function Ie(e) {
  return e !== null && !we(e) && e.constructor !== null && !we(e.constructor) && D(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const pn = K("ArrayBuffer");
function Lo(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && pn(e.buffer), t;
}
const Do = ut("string"), D = ut("function"), hn = ut("number"), Be = (e) => e !== null && typeof e == "object", Uo = (e) => e === !0 || e === !1, We = (e) => {
  if (at(e) !== "object")
    return !1;
  const t = Bt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(dn in e) && !(st in e);
}, Io = (e) => {
  if (!Be(e) || Ie(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Bo = K("Date"), Mo = K("File"), Ho = K("Blob"), qo = K("FileList"), zo = (e) => Be(e) && D(e.pipe), Vo = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || D(e.append) && ((t = at(e)) === "formdata" || // detect form-data instance
  t === "object" && D(e.toString) && e.toString() === "[object FormData]"));
}, Go = K("URLSearchParams"), [Jo, Wo, Ko, ko] = ["ReadableStream", "Request", "Response", "Headers"].map(K), Xo = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Me(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), ve(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    if (Ie(e))
      return;
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (n = 0; n < s; n++)
      a = i[n], t.call(null, e[a], a, e);
  }
}
function mn(e, t) {
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
const ae = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, gn = (e) => !we(e) && e !== ae;
function At() {
  const { caseless: e, skipUndefined: t } = gn(this) && this || {}, r = {}, n = (o, i) => {
    const s = e && mn(r, i) || i;
    We(r[s]) && We(o) ? r[s] = At(r[s], o) : We(o) ? r[s] = At({}, o) : ve(o) ? r[s] = o.slice() : (!t || !we(o)) && (r[s] = o);
  };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && Me(arguments[o], n);
  return r;
}
const Zo = (e, t, r, { allOwnKeys: n } = {}) => (Me(t, (o, i) => {
  r && D(o) ? e[i] = fn(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), Yo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Qo = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, ei = (e, t, r, n) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!n || n(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = r !== !1 && Bt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, ti = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, ri = (e) => {
  if (!e) return null;
  if (ve(e)) return e;
  let t = e.length;
  if (!hn(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, ni = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Bt(Uint8Array)), oi = (e, t) => {
  const n = (e && e[st]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, ii = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, si = K("HTMLFormElement"), ai = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), ur = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), ui = K("RegExp"), yn = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Me(r, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (n[i] = s || o);
  }), Object.defineProperties(e, n);
}, ci = (e) => {
  yn(e, (t, r) => {
    if (D(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (D(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, li = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return ve(e) ? n(e) : n(String(e).split(t)), r;
}, fi = () => {
}, di = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function pi(e) {
  return !!(e && D(e.append) && e[dn] === "FormData" && e[st]);
}
const hi = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (Be(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (Ie(n))
        return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = ve(n) ? [] : {};
        return Me(n, (s, a) => {
          const c = r(s, o + 1);
          !we(c) && (i[a] = c);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, mi = K("AsyncFunction"), gi = (e) => e && (Be(e) || D(e)) && D(e.then) && D(e.catch), bn = ((e, t) => e ? setImmediate : t ? ((r, n) => (ae.addEventListener("message", ({ source: o, data: i }) => {
  o === ae && i === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), ae.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  D(ae.postMessage)
), yi = typeof queueMicrotask < "u" ? queueMicrotask.bind(ae) : typeof process < "u" && process.nextTick || bn, bi = (e) => e != null && D(e[st]), d = {
  isArray: ve,
  isArrayBuffer: pn,
  isBuffer: Ie,
  isFormData: Vo,
  isArrayBufferView: Lo,
  isString: Do,
  isNumber: hn,
  isBoolean: Uo,
  isObject: Be,
  isPlainObject: We,
  isEmptyObject: Io,
  isReadableStream: Jo,
  isRequest: Wo,
  isResponse: Ko,
  isHeaders: ko,
  isUndefined: we,
  isDate: Bo,
  isFile: Mo,
  isBlob: Ho,
  isRegExp: ui,
  isFunction: D,
  isStream: zo,
  isURLSearchParams: Go,
  isTypedArray: ni,
  isFileList: qo,
  forEach: Me,
  merge: At,
  extend: Zo,
  trim: Xo,
  stripBOM: Yo,
  inherits: Qo,
  toFlatObject: ei,
  kindOf: at,
  kindOfTest: K,
  endsWith: ti,
  toArray: ri,
  forEachEntry: oi,
  matchAll: ii,
  isHTMLForm: si,
  hasOwnProperty: ur,
  hasOwnProp: ur,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: yn,
  freezeMethods: ci,
  toObjectSet: li,
  toCamelCase: ai,
  noop: fi,
  toFiniteNumber: di,
  findKey: mn,
  global: ae,
  isContextDefined: gn,
  isSpecCompliantForm: pi,
  toJSONObject: hi,
  isAsyncFn: mi,
  isThenable: gi,
  setImmediate: bn,
  asap: yi,
  isIterable: bi
};
function T(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
d.inherits(T, Error, {
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
const wn = T.prototype, En = {};
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
  En[e] = { value: e };
});
Object.defineProperties(T, En);
Object.defineProperty(wn, "isAxiosError", { value: !0 });
T.from = (e, t, r, n, o, i) => {
  const s = Object.create(wn);
  d.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", c = t == null && e ? e.code : t;
  return T.call(s, a, c, r, n, o), e && s.cause == null && Object.defineProperty(s, "cause", { value: e, configurable: !0 }), s.name = e && e.name || "Error", i && Object.assign(s, i), s;
};
const wi = null;
function Rt(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function vn(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function cr(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = vn(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function Ei(e) {
  return d.isArray(e) && !e.some(Rt);
}
const vi = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ct(e, t, r) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = d.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, m) {
    return !d.isUndefined(m[y]);
  });
  const n = r.metaTokens, o = r.visitor || u, i = r.dots, s = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(p) {
    if (p === null) return "";
    if (d.isDate(p))
      return p.toISOString();
    if (d.isBoolean(p))
      return p.toString();
    if (!c && d.isBlob(p))
      throw new T("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(p) || d.isTypedArray(p) ? c && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, y, m) {
    let E = p;
    if (p && !m && typeof p == "object") {
      if (d.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (d.isArray(p) && Ei(p) || (d.isFileList(p) || d.endsWith(y, "[]")) && (E = d.toArray(p)))
        return y = vn(y), E.forEach(function(A, R) {
          !(d.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? cr([y], R, i) : s === null ? y : y + "[]",
            l(A)
          );
        }), !1;
    }
    return Rt(p) ? !0 : (t.append(cr(m, y, i), l(p)), !1);
  }
  const f = [], g = Object.assign(vi, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Rt
  });
  function h(p, y) {
    if (!d.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(p), d.forEach(p, function(E, _) {
        (!(d.isUndefined(E) || E === null) && o.call(
          t,
          E,
          d.isString(_) ? _.trim() : _,
          y,
          g
        )) === !0 && h(E, y ? y.concat(_) : [_]);
      }), f.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function lr(e) {
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
function Mt(e, t) {
  this._pairs = [], e && ct(e, this, t);
}
const Tn = Mt.prototype;
Tn.append = function(t, r) {
  this._pairs.push([t, r]);
};
Tn.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, lr);
  } : lr;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Ti(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Sn(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Ti;
  d.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = d.isURLSearchParams(t) ? t.toString() : new Mt(t, r).toString(n), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class fr {
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
const On = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Si = typeof URLSearchParams < "u" ? URLSearchParams : Mt, Oi = typeof FormData < "u" ? FormData : null, _i = typeof Blob < "u" ? Blob : null, Ai = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Si,
    FormData: Oi,
    Blob: _i
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ht = typeof window < "u" && typeof document < "u", $t = typeof navigator == "object" && navigator || void 0, Ri = Ht && (!$t || ["ReactNative", "NativeScript", "NS"].indexOf($t.product) < 0), $i = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", xi = Ht && window.location.href || "http://localhost", Pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ht,
  hasStandardBrowserEnv: Ri,
  hasStandardBrowserWebWorkerEnv: $i,
  navigator: $t,
  origin: xi
}, Symbol.toStringTag, { value: "Module" })), L = {
  ...Pi,
  ...Ai
};
function Ci(e, t) {
  return ct(e, new L.classes.URLSearchParams(), {
    visitor: function(r, n, o, i) {
      return L.isNode && d.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function ji(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Fi(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function _n(e) {
  function t(r, n, o, i) {
    let s = r[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= r.length;
    return s = !s && d.isArray(o) ? o.length : s, c ? (d.hasOwnProp(o, s) ? o[s] = [o[s], n] : o[s] = n, !a) : ((!o[s] || !d.isObject(o[s])) && (o[s] = []), t(r, n, o[s], i) && d.isArray(o[s]) && (o[s] = Fi(o[s])), !a);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const r = {};
    return d.forEachEntry(e, (n, o) => {
      t(ji(n), o, r, 0);
    }), r;
  }
  return null;
}
function Ni(e, t, r) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const He = {
  transitional: On,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = d.isObject(t);
    if (i && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
      return o ? JSON.stringify(_n(t)) : t;
    if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t) || d.isReadableStream(t))
      return t;
    if (d.isArrayBufferView(t))
      return t.buffer;
    if (d.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ci(t, this.formSerializer).toString();
      if ((a = d.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ct(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), Ni(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || He.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (d.isResponse(t) || d.isReadableStream(t))
      return t;
    if (t && d.isString(t) && (n && !this.responseType || o)) {
      const s = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (s)
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
  He.headers[e] = {};
});
const Li = d.toObjectSet([
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
]), Di = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), r = s.substring(0, o).trim().toLowerCase(), n = s.substring(o + 1).trim(), !(!r || t[r] && Li[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, dr = /* @__PURE__ */ Symbol("internals");
function Oe(e) {
  return e && String(e).trim().toLowerCase();
}
function Ke(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(Ke) : String(e);
}
function Ui(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Ii = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function bt(e, t, r, n, o) {
  if (d.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!d.isString(t)) {
    if (d.isString(n))
      return t.indexOf(n) !== -1;
    if (d.isRegExp(n))
      return n.test(t);
  }
}
function Bi(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Mi(e, t) {
  const r = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, i, s) {
        return this[n].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
let U = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(a, c, l) {
      const u = Oe(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = d.findKey(o, u);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = Ke(a));
    }
    const s = (a, c) => d.forEach(a, (l, u) => i(l, u, c));
    if (d.isPlainObject(t) || t instanceof this.constructor)
      s(t, r);
    else if (d.isString(t) && (t = t.trim()) && !Ii(t))
      s(Di(t), r);
    else if (d.isObject(t) && d.isIterable(t)) {
      let a = {}, c, l;
      for (const u of t) {
        if (!d.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? d.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(a, r);
    } else
      t != null && i(r, t, n);
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
          return Ui(o);
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
      return !!(n && this[n] !== void 0 && (!r || bt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(s) {
      if (s = Oe(s), s) {
        const a = d.findKey(n, s);
        a && (!r || bt(n, n[a], a, r)) && (delete n[a], o = !0);
      }
    }
    return d.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || bt(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return d.forEach(this, (o, i) => {
      const s = d.findKey(n, i);
      if (s) {
        r[s] = Ke(o), delete r[i];
        return;
      }
      const a = t ? Bi(i) : String(i).trim();
      a !== i && delete r[i], r[a] = Ke(o), n[a] = !0;
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
    const n = (this[dr] = this[dr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = Oe(s);
      n[a] || (Mi(o, s), n[a] = !0);
    }
    return d.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
U.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(U.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
d.freezeMethods(U);
function wt(e, t) {
  const r = this || He, n = t || r, o = U.from(n.headers);
  let i = n.data;
  return d.forEach(e, function(a) {
    i = a.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function An(e) {
  return !!(e && e.__CANCEL__);
}
function Te(e, t, r) {
  T.call(this, e ?? "canceled", T.ERR_CANCELED, t, r), this.name = "CanceledError";
}
d.inherits(Te, T, {
  __CANCEL__: !0
});
function Rn(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new T(
    "Request failed with status code " + r.status,
    [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Hi(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function qi(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = n[i];
    s || (s = l), r[o] = c, n[o] = l;
    let f = i, g = 0;
    for (; f !== o; )
      g += r[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - s < t)
      return;
    const h = u && l - u;
    return h ? Math.round(g * 1e3 / h) : void 0;
  };
}
function zi(e, t) {
  let r = 0, n = 1e3 / t, o, i;
  const s = (l, u = Date.now()) => {
    r = u, o = null, i && (clearTimeout(i), i = null), e(...l);
  };
  return [(...l) => {
    const u = Date.now(), f = u - r;
    f >= n ? s(l, u) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, n - f)));
  }, () => o && s(o)];
}
const Qe = (e, t, r = 3) => {
  let n = 0;
  const o = qi(50, 250);
  return zi((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - n, l = o(c), u = s <= a;
    n = s;
    const f = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && u ? (a - s) / l : void 0,
      event: i,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, r);
}, pr = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, hr = (e) => (...t) => d.asap(() => e(...t)), Vi = L.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, L.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(L.origin),
  L.navigator && /(msie|trident)/i.test(L.navigator.userAgent)
) : () => !0, Gi = L.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, i, s) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      d.isNumber(r) && a.push(`expires=${new Date(r).toUTCString()}`), d.isString(n) && a.push(`path=${n}`), d.isString(o) && a.push(`domain=${o}`), i === !0 && a.push("secure"), d.isString(s) && a.push(`SameSite=${s}`), document.cookie = a.join("; ");
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
function Ji(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Wi(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function $n(e, t, r) {
  let n = !Ji(t);
  return e && (n || r == !1) ? Wi(e, t) : t;
}
const mr = (e) => e instanceof U ? { ...e } : e;
function le(e, t) {
  t = t || {};
  const r = {};
  function n(l, u, f, g) {
    return d.isPlainObject(l) && d.isPlainObject(u) ? d.merge.call({ caseless: g }, l, u) : d.isPlainObject(u) ? d.merge({}, u) : d.isArray(u) ? u.slice() : u;
  }
  function o(l, u, f, g) {
    if (d.isUndefined(u)) {
      if (!d.isUndefined(l))
        return n(void 0, l, f, g);
    } else return n(l, u, f, g);
  }
  function i(l, u) {
    if (!d.isUndefined(u))
      return n(void 0, u);
  }
  function s(l, u) {
    if (d.isUndefined(u)) {
      if (!d.isUndefined(l))
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
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (l, u, f) => o(mr(l), mr(u), f, !0)
  };
  return d.forEach(Object.keys({ ...e, ...t }), function(u) {
    const f = c[u] || o, g = f(e[u], t[u], u);
    d.isUndefined(g) && f !== a || (r[u] = g);
  }), r;
}
const xn = (e) => {
  const t = le({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t;
  if (t.headers = s = U.from(s), t.url = Sn($n(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), d.isFormData(r)) {
    if (L.hasStandardBrowserEnv || L.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (d.isFunction(r.getHeaders)) {
      const c = r.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(c).forEach(([u, f]) => {
        l.includes(u.toLowerCase()) && s.set(u, f);
      });
    }
  }
  if (L.hasStandardBrowserEnv && (n && d.isFunction(n) && (n = n(t)), n || n !== !1 && Vi(t.url))) {
    const c = o && i && Gi.read(i);
    c && s.set(o, c);
  }
  return t;
}, Ki = typeof XMLHttpRequest < "u", ki = Ki && function(e) {
  return new Promise(function(r, n) {
    const o = xn(e);
    let i = o.data;
    const s = U.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, f, g, h, p;
    function y() {
      h && h(), p && p(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(o.method.toUpperCase(), o.url, !0), m.timeout = o.timeout;
    function E() {
      if (!m)
        return;
      const A = U.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), j = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: A,
        config: e,
        request: m
      };
      Rn(function($) {
        r($), y();
      }, function($) {
        n($), y();
      }, j), m = null;
    }
    "onloadend" in m ? m.onloadend = E : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, m.onabort = function() {
      m && (n(new T("Request aborted", T.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function(R) {
      const j = R && R.message ? R.message : "Network Error", O = new T(j, T.ERR_NETWORK, e, m);
      O.event = R || null, n(O), m = null;
    }, m.ontimeout = function() {
      let R = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const j = o.transitional || On;
      o.timeoutErrorMessage && (R = o.timeoutErrorMessage), n(new T(
        R,
        j.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
        e,
        m
      )), m = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in m && d.forEach(s.toJSON(), function(R, j) {
      m.setRequestHeader(j, R);
    }), d.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), a && a !== "json" && (m.responseType = o.responseType), l && ([g, p] = Qe(l, !0), m.addEventListener("progress", g)), c && m.upload && ([f, h] = Qe(c), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (u = (A) => {
      m && (n(!A || A.type ? new Te(null, e, m) : A), m.abort(), m = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const _ = Hi(o.url);
    if (_ && L.protocols.indexOf(_) === -1) {
      n(new T("Unsupported protocol " + _ + ":", T.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(i || null);
  });
}, Xi = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        n.abort(u instanceof T ? u : new Te(u instanceof Error ? u.message : u));
      }
    };
    let s = t && setTimeout(() => {
      s = null, i(new T(`timeout ${t} of ms exceeded`, T.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = n;
    return c.unsubscribe = () => d.asap(a), c;
  }
}, Zi = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, Yi = async function* (e, t) {
  for await (const r of Qi(e))
    yield* Zi(r, t);
}, Qi = async function* (e) {
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
}, gr = (e, t, r, n) => {
  const o = Yi(e, t);
  let i = 0, s, a = (c) => {
    s || (s = !0, n && n(c));
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
          let g = i += f;
          r(g);
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
}, yr = 64 * 1024, { isFunction: Ge } = d, es = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(d.global), {
  ReadableStream: br,
  TextEncoder: wr
} = d.global, Er = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ts = (e) => {
  e = d.merge.call({
    skipUndefined: !0
  }, es, e);
  const { fetch: t, Request: r, Response: n } = e, o = t ? Ge(t) : typeof fetch == "function", i = Ge(r), s = Ge(n);
  if (!o)
    return !1;
  const a = o && Ge(br), c = o && (typeof wr == "function" ? /* @__PURE__ */ ((p) => (y) => p.encode(y))(new wr()) : async (p) => new Uint8Array(await new r(p).arrayBuffer())), l = i && a && Er(() => {
    let p = !1;
    const y = new r(L.origin, {
      body: new br(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return p && !y;
  }), u = s && a && Er(() => d.isReadableStream(new n("").body)), f = {
    stream: u && ((p) => p.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !f[p] && (f[p] = (y, m) => {
      let E = y && y[p];
      if (E)
        return E.call(y);
      throw new T(`Response type '${p}' is not supported`, T.ERR_NOT_SUPPORT, m);
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
      return (await c(p)).byteLength;
  }, h = async (p, y) => {
    const m = d.toFiniteNumber(p.getContentLength());
    return m ?? g(y);
  };
  return async (p) => {
    let {
      url: y,
      method: m,
      data: E,
      signal: _,
      cancelToken: A,
      timeout: R,
      onDownloadProgress: j,
      onUploadProgress: O,
      responseType: $,
      headers: z,
      withCredentials: I = "same-origin",
      fetchOptions: M
    } = xn(p), w = t || fetch;
    $ = $ ? ($ + "").toLowerCase() : "text";
    let b = Xi([_, A && A.toAbortSignal()], R), v = null;
    const S = b && b.unsubscribe && (() => {
      b.unsubscribe();
    });
    let V;
    try {
      if (O && l && m !== "get" && m !== "head" && (V = await h(z, E)) !== 0) {
        let oe = new r(y, {
          method: "POST",
          body: E,
          duplex: "half"
        }), me;
        if (d.isFormData(E) && (me = oe.headers.get("content-type")) && z.setContentType(me), oe.body) {
          const [gt, Ve] = pr(
            V,
            Qe(hr(O))
          );
          E = gr(oe.body, yr, gt, Ve);
        }
      }
      d.isString(I) || (I = I ? "include" : "omit");
      const C = i && "credentials" in r.prototype, ee = {
        ...M,
        signal: b,
        method: m.toUpperCase(),
        headers: z.normalize().toJSON(),
        body: E,
        duplex: "half",
        credentials: C ? I : void 0
      };
      v = i && new r(y, ee);
      let X = await (i ? w(v, M) : w(y, ee));
      const sr = u && ($ === "stream" || $ === "response");
      if (u && (j || sr && S)) {
        const oe = {};
        ["status", "statusText", "headers"].forEach((ar) => {
          oe[ar] = X[ar];
        });
        const me = d.toFiniteNumber(X.headers.get("content-length")), [gt, Ve] = j && pr(
          me,
          Qe(hr(j), !0)
        ) || [];
        X = new n(
          gr(X.body, yr, gt, () => {
            Ve && Ve(), S && S();
          }),
          oe
        );
      }
      $ = $ || "text";
      let Eo = await f[d.findKey(f, $) || "text"](X, p);
      return !sr && S && S(), await new Promise((oe, me) => {
        Rn(oe, me, {
          data: Eo,
          headers: U.from(X.headers),
          status: X.status,
          statusText: X.statusText,
          config: p,
          request: v
        });
      });
    } catch (C) {
      throw S && S(), C && C.name === "TypeError" && /Load failed|fetch/i.test(C.message) ? Object.assign(
        new T("Network Error", T.ERR_NETWORK, p, v),
        {
          cause: C.cause || C
        }
      ) : T.from(C, C && C.code, p, v);
    }
  };
}, rs = /* @__PURE__ */ new Map(), Pn = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: o } = t, i = [
    n,
    o,
    r
  ];
  let s = i.length, a = s, c, l, u = rs;
  for (; a--; )
    c = i[a], l = u.get(c), l === void 0 && u.set(c, l = a ? /* @__PURE__ */ new Map() : ts(t)), u = l;
  return l;
};
Pn();
const qt = {
  http: wi,
  xhr: ki,
  fetch: {
    get: Pn
  }
};
d.forEach(qt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const vr = (e) => `- ${e}`, ns = (e) => d.isFunction(e) || e === null || e === !1;
function os(e, t) {
  e = d.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, o;
  const i = {};
  for (let s = 0; s < r; s++) {
    n = e[s];
    let a;
    if (o = n, !ns(n) && (o = qt[(a = String(n)).toLowerCase()], o === void 0))
      throw new T(`Unknown adapter '${a}'`);
    if (o && (d.isFunction(o) || (o = o.get(t))))
      break;
    i[a || "#" + s] = o;
  }
  if (!o) {
    const s = Object.entries(i).map(
      ([c, l]) => `adapter ${c} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = r ? s.length > 1 ? `since :
` + s.map(vr).join(`
`) : " " + vr(s[0]) : "as no adapter specified";
    throw new T(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Cn = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: os,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: qt
};
function Et(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Te(null, e);
}
function Tr(e) {
  return Et(e), e.headers = U.from(e.headers), e.data = wt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Cn.getAdapter(e.adapter || He.adapter, e)(e).then(function(n) {
    return Et(e), n.data = wt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = U.from(n.headers), n;
  }, function(n) {
    return An(n) || (Et(e), n && n.response && (n.response.data = wt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = U.from(n.response.headers))), Promise.reject(n);
  });
}
const jn = "1.13.2", lt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  lt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Sr = {};
lt.transitional = function(t, r, n) {
  function o(i, s) {
    return "[Axios v" + jn + "] Transitional option '" + i + "'" + s + (n ? ". " + n : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new T(
        o(s, " has been removed" + (r ? " in " + r : "")),
        T.ERR_DEPRECATED
      );
    return r && !Sr[s] && (Sr[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
lt.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function is(e, t, r) {
  if (typeof e != "object")
    throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], s = t[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new T("option " + i + " must be " + c, T.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new T("Unknown option " + i, T.ERR_BAD_OPTION);
  }
}
const ke = {
  assertOptions: is,
  validators: lt
}, Z = ke.validators;
let ce = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new fr(),
      response: new fr()
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
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = le(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && ke.assertOptions(n, {
      silentJSONParsing: Z.transitional(Z.boolean),
      forcedJSONParsing: Z.transitional(Z.boolean),
      clarifyTimeoutError: Z.transitional(Z.boolean)
    }, !1), o != null && (d.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : ke.assertOptions(o, {
      encode: Z.function,
      serialize: Z.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ke.assertOptions(r, {
      baseUrl: Z.spelling("baseURL"),
      withXsrfToken: Z.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s = i && d.merge(
      i.common,
      i[r.method]
    );
    i && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), r.headers = U.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (c = c && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(y) {
      l.push(y.fulfilled, y.rejected);
    });
    let u, f = 0, g;
    if (!c) {
      const p = [Tr.bind(this), void 0];
      for (p.unshift(...a), p.push(...l), g = p.length, u = Promise.resolve(r); f < g; )
        u = u.then(p[f++], p[f++]);
      return u;
    }
    g = a.length;
    let h = r;
    for (; f < g; ) {
      const p = a[f++], y = a[f++];
      try {
        h = p(h);
      } catch (m) {
        y.call(this, m);
        break;
      }
    }
    try {
      u = Tr.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, g = l.length; f < g; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = le(this.defaults, t);
    const r = $n(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Sn(r, t.params, t.paramsSerializer);
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
    return function(i, s, a) {
      return this.request(le(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  ce.prototype[t] = r(), ce.prototype[t + "Form"] = r(!0);
});
let ss = class Fn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((a) => {
        n.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        n.unsubscribe(i);
      }, s;
    }, t(function(i, s, a) {
      n.reason || (n.reason = new Te(i, s, a), r(n.reason));
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
      token: new Fn(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function as(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function us(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const xt = {
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
Object.entries(xt).forEach(([e, t]) => {
  xt[t] = e;
});
function Nn(e) {
  const t = new ce(e), r = fn(ce.prototype.request, t);
  return d.extend(r, ce.prototype, t, { allOwnKeys: !0 }), d.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Nn(le(e, o));
  }, r;
}
const F = Nn(He);
F.Axios = ce;
F.CanceledError = Te;
F.CancelToken = ss;
F.isCancel = An;
F.VERSION = jn;
F.toFormData = ct;
F.AxiosError = T;
F.Cancel = F.CanceledError;
F.all = function(t) {
  return Promise.all(t);
};
F.spread = as;
F.isAxiosError = us;
F.mergeConfig = le;
F.AxiosHeaders = U;
F.formToJSON = (e) => _n(d.isHTMLForm(e) ? new FormData(e) : e);
F.getAdapter = Cn.getAdapter;
F.HttpStatusCode = xt;
F.default = F;
const {
  Axios: Mf,
  AxiosError: Hf,
  CanceledError: qf,
  isCancel: Ln,
  CancelToken: zf,
  VERSION: Vf,
  all: Gf,
  Cancel: Jf,
  isAxiosError: Dn,
  spread: Wf,
  toFormData: Kf,
  AxiosHeaders: kf,
  HttpStatusCode: Xf,
  formToJSON: Zf,
  getAdapter: Yf,
  mergeConfig: cs
} = F;
var Un = typeof global == "object" && global && global.Object === Object && global, ls = typeof self == "object" && self && self.Object === Object && self, k = Un || ls || Function("return this")(), q = k.Symbol, In = Object.prototype, fs = In.hasOwnProperty, ds = In.toString, _e = q ? q.toStringTag : void 0;
function ps(e) {
  var t = fs.call(e, _e), r = e[_e];
  try {
    e[_e] = void 0;
    var n = !0;
  } catch {
  }
  var o = ds.call(e);
  return n && (t ? e[_e] = r : delete e[_e]), o;
}
var hs = Object.prototype, ms = hs.toString;
function gs(e) {
  return ms.call(e);
}
var ys = "[object Null]", bs = "[object Undefined]", Or = q ? q.toStringTag : void 0;
function de(e) {
  return e == null ? e === void 0 ? bs : ys : Or && Or in Object(e) ? ps(e) : gs(e);
}
function Q(e) {
  return e != null && typeof e == "object";
}
var ws = "[object Symbol]";
function ft(e) {
  return typeof e == "symbol" || Q(e) && de(e) == ws;
}
function Bn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var W = Array.isArray, _r = q ? q.prototype : void 0, Ar = _r ? _r.toString : void 0;
function Mn(e) {
  if (typeof e == "string")
    return e;
  if (W(e))
    return Bn(e, Mn) + "";
  if (ft(e))
    return Ar ? Ar.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Es = /\s/;
function vs(e) {
  for (var t = e.length; t-- && Es.test(e.charAt(t)); )
    ;
  return t;
}
var Ts = /^\s+/;
function Ss(e) {
  return e && e.slice(0, vs(e) + 1).replace(Ts, "");
}
function B(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Rr = NaN, Os = /^[-+]0x[0-9a-f]+$/i, _s = /^0b[01]+$/i, As = /^0o[0-7]+$/i, Rs = parseInt;
function $r(e) {
  if (typeof e == "number")
    return e;
  if (ft(e))
    return Rr;
  if (B(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = B(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ss(e);
  var r = _s.test(e);
  return r || As.test(e) ? Rs(e.slice(2), r ? 2 : 8) : Os.test(e) ? Rr : +e;
}
function Hn(e) {
  return e;
}
var $s = "[object AsyncFunction]", xs = "[object Function]", Ps = "[object GeneratorFunction]", Cs = "[object Proxy]";
function zt(e) {
  if (!B(e))
    return !1;
  var t = de(e);
  return t == xs || t == Ps || t == $s || t == Cs;
}
var vt = k["__core-js_shared__"], xr = (function() {
  var e = /[^.]+$/.exec(vt && vt.keys && vt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function js(e) {
  return !!xr && xr in e;
}
var Fs = Function.prototype, Ns = Fs.toString;
function pe(e) {
  if (e != null) {
    try {
      return Ns.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ls = /[\\^$.*+?()[\]{}|]/g, Ds = /^\[object .+?Constructor\]$/, Us = Function.prototype, Is = Object.prototype, Bs = Us.toString, Ms = Is.hasOwnProperty, Hs = RegExp(
  "^" + Bs.call(Ms).replace(Ls, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qs(e) {
  if (!B(e) || js(e))
    return !1;
  var t = zt(e) ? Hs : Ds;
  return t.test(pe(e));
}
function zs(e, t) {
  return e?.[t];
}
function he(e, t) {
  var r = zs(e, t);
  return qs(r) ? r : void 0;
}
var Pt = he(k, "WeakMap"), Pr = Object.create, Vs = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!B(t))
      return {};
    if (Pr)
      return Pr(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
})();
function Gs(e, t, r) {
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
function qn(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Js = 800, Ws = 16, Ks = Date.now;
function ks(e) {
  var t = 0, r = 0;
  return function() {
    var n = Ks(), o = Ws - (n - r);
    if (r = n, o > 0) {
      if (++t >= Js)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Xs(e) {
  return function() {
    return e;
  };
}
var et = (function() {
  try {
    var e = he(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), Zs = et ? function(e, t) {
  return et(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Xs(t),
    writable: !0
  });
} : Hn, zn = ks(Zs);
function Ys(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Qs = 9007199254740991, ea = /^(?:0|[1-9]\d*)$/;
function Vt(e, t) {
  var r = typeof e;
  return t = t ?? Qs, !!t && (r == "number" || r != "symbol" && ea.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Gt(e, t, r) {
  t == "__proto__" && et ? et(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function qe(e, t) {
  return e === t || e !== e && t !== t;
}
var ta = Object.prototype, ra = ta.hasOwnProperty;
function Jt(e, t, r) {
  var n = e[t];
  (!(ra.call(e, t) && qe(n, r)) || r === void 0 && !(t in e)) && Gt(e, t, r);
}
function Se(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var i = -1, s = t.length; ++i < s; ) {
    var a = t[i], c = void 0;
    c === void 0 && (c = e[a]), o ? Gt(r, a, c) : Jt(r, a, c);
  }
  return r;
}
var Cr = Math.max;
function Vn(e, t, r) {
  return t = Cr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, i = Cr(n.length - t, 0), s = Array(i); ++o < i; )
      s[o] = n[t + o];
    o = -1;
    for (var a = Array(t + 1); ++o < t; )
      a[o] = n[o];
    return a[t] = r(s), Gs(e, this, a);
  };
}
function na(e, t) {
  return zn(Vn(e, t, Hn), e + "");
}
var oa = 9007199254740991;
function Gn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= oa;
}
function dt(e) {
  return e != null && Gn(e.length) && !zt(e);
}
function ia(e, t, r) {
  if (!B(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? dt(r) && Vt(t, r.length) : n == "string" && t in r) ? qe(r[t], e) : !1;
}
function sa(e) {
  return na(function(t, r) {
    var n = -1, o = r.length, i = o > 1 ? r[o - 1] : void 0, s = o > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, s && ia(r[0], r[1], s) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++n < o; ) {
      var a = r[n];
      a && e(t, a, n, i);
    }
    return t;
  });
}
var aa = Object.prototype;
function Wt(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || aa;
  return e === r;
}
function ua(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var ca = "[object Arguments]";
function jr(e) {
  return Q(e) && de(e) == ca;
}
var Jn = Object.prototype, la = Jn.hasOwnProperty, fa = Jn.propertyIsEnumerable, tt = jr(/* @__PURE__ */ (function() {
  return arguments;
})()) ? jr : function(e) {
  return Q(e) && la.call(e, "callee") && !fa.call(e, "callee");
};
function da() {
  return !1;
}
var Wn = typeof exports == "object" && exports && !exports.nodeType && exports, Fr = Wn && typeof module == "object" && module && !module.nodeType && module, pa = Fr && Fr.exports === Wn, Nr = pa ? k.Buffer : void 0, ha = Nr ? Nr.isBuffer : void 0, Ce = ha || da, ma = "[object Arguments]", ga = "[object Array]", ya = "[object Boolean]", ba = "[object Date]", wa = "[object Error]", Ea = "[object Function]", va = "[object Map]", Ta = "[object Number]", Sa = "[object Object]", Oa = "[object RegExp]", _a = "[object Set]", Aa = "[object String]", Ra = "[object WeakMap]", $a = "[object ArrayBuffer]", xa = "[object DataView]", Pa = "[object Float32Array]", Ca = "[object Float64Array]", ja = "[object Int8Array]", Fa = "[object Int16Array]", Na = "[object Int32Array]", La = "[object Uint8Array]", Da = "[object Uint8ClampedArray]", Ua = "[object Uint16Array]", Ia = "[object Uint32Array]", P = {};
P[Pa] = P[Ca] = P[ja] = P[Fa] = P[Na] = P[La] = P[Da] = P[Ua] = P[Ia] = !0;
P[ma] = P[ga] = P[$a] = P[ya] = P[xa] = P[ba] = P[wa] = P[Ea] = P[va] = P[Ta] = P[Sa] = P[Oa] = P[_a] = P[Aa] = P[Ra] = !1;
function Ba(e) {
  return Q(e) && Gn(e.length) && !!P[de(e)];
}
function Kt(e) {
  return function(t) {
    return e(t);
  };
}
var Kn = typeof exports == "object" && exports && !exports.nodeType && exports, xe = Kn && typeof module == "object" && module && !module.nodeType && module, Ma = xe && xe.exports === Kn, Tt = Ma && Un.process, Ee = (function() {
  try {
    var e = xe && xe.require && xe.require("util").types;
    return e || Tt && Tt.binding && Tt.binding("util");
  } catch {
  }
})(), Lr = Ee && Ee.isTypedArray, kt = Lr ? Kt(Lr) : Ba, Ha = Object.prototype, qa = Ha.hasOwnProperty;
function kn(e, t) {
  var r = W(e), n = !r && tt(e), o = !r && !n && Ce(e), i = !r && !n && !o && kt(e), s = r || n || o || i, a = s ? ua(e.length, String) : [], c = a.length;
  for (var l in e)
    (t || qa.call(e, l)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Vt(l, c))) && a.push(l);
  return a;
}
function Xn(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var za = Xn(Object.keys, Object), Va = Object.prototype, Ga = Va.hasOwnProperty;
function Ja(e) {
  if (!Wt(e))
    return za(e);
  var t = [];
  for (var r in Object(e))
    Ga.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Xt(e) {
  return dt(e) ? kn(e) : Ja(e);
}
function Wa(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Ka = Object.prototype, ka = Ka.hasOwnProperty;
function Xa(e) {
  if (!B(e))
    return Wa(e);
  var t = Wt(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !ka.call(e, n)) || r.push(n);
  return r;
}
function ze(e) {
  return dt(e) ? kn(e, !0) : Xa(e);
}
var Za = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ya = /^\w*$/;
function Qa(e, t) {
  if (W(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || ft(e) ? !0 : Ya.test(e) || !Za.test(e) || t != null && e in Object(t);
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
function iu(e) {
  var t = this.__data__;
  if (je) {
    var r = t[e];
    return r === ru ? void 0 : r;
  }
  return ou.call(t, e) ? t[e] : void 0;
}
var su = Object.prototype, au = su.hasOwnProperty;
function uu(e) {
  var t = this.__data__;
  return je ? t[e] !== void 0 : au.call(t, e);
}
var cu = "__lodash_hash_undefined__";
function lu(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = je && t === void 0 ? cu : t, this;
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
fe.prototype.get = iu;
fe.prototype.has = uu;
fe.prototype.set = lu;
function fu() {
  this.__data__ = [], this.size = 0;
}
function pt(e, t) {
  for (var r = e.length; r--; )
    if (qe(e[r][0], t))
      return r;
  return -1;
}
var du = Array.prototype, pu = du.splice;
function hu(e) {
  var t = this.__data__, r = pt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : pu.call(t, r, 1), --this.size, !0;
}
function mu(e) {
  var t = this.__data__, r = pt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function gu(e) {
  return pt(this.__data__, e) > -1;
}
function yu(e, t) {
  var r = this.__data__, n = pt(r, e);
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
var Fe = he(k, "Map");
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
function ht(e, t) {
  var r = e.__data__;
  return wu(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Eu(e) {
  var t = ht(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function vu(e) {
  return ht(this, e).get(e);
}
function Tu(e) {
  return ht(this, e).has(e);
}
function Su(e, t) {
  var r = ht(this, e), n = r.size;
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
ne.prototype.delete = Eu;
ne.prototype.get = vu;
ne.prototype.has = Tu;
ne.prototype.set = Su;
var Ou = "Expected a function";
function Zt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ou);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(o))
      return i.get(o);
    var s = e.apply(this, n);
    return r.cache = i.set(o, s) || i, s;
  };
  return r.cache = new (Zt.Cache || ne)(), r;
}
Zt.Cache = ne;
var _u = 500;
function Au(e) {
  var t = Zt(e, function(n) {
    return r.size === _u && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Ru = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $u = /\\(\\)?/g, xu = Au(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ru, function(r, n, o, i) {
    t.push(o ? i.replace($u, "$1") : n || r);
  }), t;
});
function Pu(e) {
  return e == null ? "" : Mn(e);
}
function mt(e, t) {
  return W(e) ? e : Qa(e, t) ? [e] : xu(Pu(e));
}
function Yt(e) {
  if (typeof e == "string" || ft(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Zn(e, t) {
  t = mt(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Yt(t[r++])];
  return r && r == n ? e : void 0;
}
function rt(e, t, r) {
  var n = e == null ? void 0 : Zn(e, t);
  return n === void 0 ? r : n;
}
function Qt(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Dr = q ? q.isConcatSpreadable : void 0;
function Cu(e) {
  return W(e) || tt(e) || !!(Dr && e && e[Dr]);
}
function ju(e, t, r, n, o) {
  var i = -1, s = e.length;
  for (r || (r = Cu), o || (o = []); ++i < s; ) {
    var a = e[i];
    r(a) ? Qt(o, a) : o[o.length] = a;
  }
  return o;
}
function Fu(e) {
  var t = e == null ? 0 : e.length;
  return t ? ju(e) : [];
}
function Nu(e) {
  return zn(Vn(e, void 0, Fu), e + "");
}
var er = Xn(Object.getPrototypeOf, Object), Lu = "[object Object]", Du = Function.prototype, Uu = Object.prototype, Yn = Du.toString, Iu = Uu.hasOwnProperty, Bu = Yn.call(Object);
function Qn(e) {
  if (!Q(e) || de(e) != Lu)
    return !1;
  var t = er(e);
  if (t === null)
    return !0;
  var r = Iu.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Yn.call(r) == Bu;
}
function Mu(e, t, r) {
  var n = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), r = r > o ? o : r, r < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++n < o; )
    i[n] = e[n + t];
  return i;
}
function Hu() {
  this.__data__ = new re(), this.size = 0;
}
function qu(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function zu(e) {
  return this.__data__.get(e);
}
function Vu(e) {
  return this.__data__.has(e);
}
var Gu = 200;
function Ju(e, t) {
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
Y.prototype.get = zu;
Y.prototype.has = Vu;
Y.prototype.set = Ju;
function Wu(e, t) {
  return e && Se(t, Xt(t), e);
}
function Ku(e, t) {
  return e && Se(t, ze(t), e);
}
var eo = typeof exports == "object" && exports && !exports.nodeType && exports, Ur = eo && typeof module == "object" && module && !module.nodeType && module, ku = Ur && Ur.exports === eo, Ir = ku ? k.Buffer : void 0, Br = Ir ? Ir.allocUnsafe : void 0;
function to(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Br ? Br(r) : new e.constructor(r);
  return e.copy(n), n;
}
function Xu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (i[o++] = s);
  }
  return i;
}
function ro() {
  return [];
}
var Zu = Object.prototype, Yu = Zu.propertyIsEnumerable, Mr = Object.getOwnPropertySymbols, tr = Mr ? function(e) {
  return e == null ? [] : (e = Object(e), Xu(Mr(e), function(t) {
    return Yu.call(e, t);
  }));
} : ro;
function Qu(e, t) {
  return Se(e, tr(e), t);
}
var ec = Object.getOwnPropertySymbols, no = ec ? function(e) {
  for (var t = []; e; )
    Qt(t, tr(e)), e = er(e);
  return t;
} : ro;
function tc(e, t) {
  return Se(e, no(e), t);
}
function oo(e, t, r) {
  var n = t(e);
  return W(e) ? n : Qt(n, r(e));
}
function Ct(e) {
  return oo(e, Xt, tr);
}
function io(e) {
  return oo(e, ze, no);
}
var jt = he(k, "DataView"), Ft = he(k, "Promise"), Nt = he(k, "Set"), Hr = "[object Map]", rc = "[object Object]", qr = "[object Promise]", zr = "[object Set]", Vr = "[object WeakMap]", Gr = "[object DataView]", nc = pe(jt), oc = pe(Fe), ic = pe(Ft), sc = pe(Nt), ac = pe(Pt), G = de;
(jt && G(new jt(new ArrayBuffer(1))) != Gr || Fe && G(new Fe()) != Hr || Ft && G(Ft.resolve()) != qr || Nt && G(new Nt()) != zr || Pt && G(new Pt()) != Vr) && (G = function(e) {
  var t = de(e), r = t == rc ? e.constructor : void 0, n = r ? pe(r) : "";
  if (n)
    switch (n) {
      case nc:
        return Gr;
      case oc:
        return Hr;
      case ic:
        return qr;
      case sc:
        return zr;
      case ac:
        return Vr;
    }
  return t;
});
var uc = Object.prototype, cc = uc.hasOwnProperty;
function lc(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && cc.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var nt = k.Uint8Array;
function rr(e) {
  var t = new e.constructor(e.byteLength);
  return new nt(t).set(new nt(e)), t;
}
function fc(e, t) {
  var r = t ? rr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var dc = /\w*$/;
function pc(e) {
  var t = new e.constructor(e.source, dc.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Jr = q ? q.prototype : void 0, Wr = Jr ? Jr.valueOf : void 0;
function hc(e) {
  return Wr ? Object(Wr.call(e)) : {};
}
function so(e, t) {
  var r = t ? rr(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var mc = "[object Boolean]", gc = "[object Date]", yc = "[object Map]", bc = "[object Number]", wc = "[object RegExp]", Ec = "[object Set]", vc = "[object String]", Tc = "[object Symbol]", Sc = "[object ArrayBuffer]", Oc = "[object DataView]", _c = "[object Float32Array]", Ac = "[object Float64Array]", Rc = "[object Int8Array]", $c = "[object Int16Array]", xc = "[object Int32Array]", Pc = "[object Uint8Array]", Cc = "[object Uint8ClampedArray]", jc = "[object Uint16Array]", Fc = "[object Uint32Array]";
function Nc(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Sc:
      return rr(e);
    case mc:
    case gc:
      return new n(+e);
    case Oc:
      return fc(e, r);
    case _c:
    case Ac:
    case Rc:
    case $c:
    case xc:
    case Pc:
    case Cc:
    case jc:
    case Fc:
      return so(e, r);
    case yc:
      return new n();
    case bc:
    case vc:
      return new n(e);
    case wc:
      return pc(e);
    case Ec:
      return new n();
    case Tc:
      return hc(e);
  }
}
function ao(e) {
  return typeof e.constructor == "function" && !Wt(e) ? Vs(er(e)) : {};
}
var Lc = "[object Map]";
function Dc(e) {
  return Q(e) && G(e) == Lc;
}
var Kr = Ee && Ee.isMap, Uc = Kr ? Kt(Kr) : Dc, Ic = "[object Set]";
function Bc(e) {
  return Q(e) && G(e) == Ic;
}
var kr = Ee && Ee.isSet, Mc = kr ? Kt(kr) : Bc, Hc = 1, qc = 2, zc = 4, uo = "[object Arguments]", Vc = "[object Array]", Gc = "[object Boolean]", Jc = "[object Date]", Wc = "[object Error]", co = "[object Function]", Kc = "[object GeneratorFunction]", kc = "[object Map]", Xc = "[object Number]", lo = "[object Object]", Zc = "[object RegExp]", Yc = "[object Set]", Qc = "[object String]", el = "[object Symbol]", tl = "[object WeakMap]", rl = "[object ArrayBuffer]", nl = "[object DataView]", ol = "[object Float32Array]", il = "[object Float64Array]", sl = "[object Int8Array]", al = "[object Int16Array]", ul = "[object Int32Array]", cl = "[object Uint8Array]", ll = "[object Uint8ClampedArray]", fl = "[object Uint16Array]", dl = "[object Uint32Array]", x = {};
x[uo] = x[Vc] = x[rl] = x[nl] = x[Gc] = x[Jc] = x[ol] = x[il] = x[sl] = x[al] = x[ul] = x[kc] = x[Xc] = x[lo] = x[Zc] = x[Yc] = x[Qc] = x[el] = x[cl] = x[ll] = x[fl] = x[dl] = !0;
x[Wc] = x[co] = x[tl] = !1;
function Pe(e, t, r, n, o, i) {
  var s, a = t & Hc, c = t & qc, l = t & zc;
  if (r && (s = o ? r(e, n, o, i) : r(e)), s !== void 0)
    return s;
  if (!B(e))
    return e;
  var u = W(e);
  if (u) {
    if (s = lc(e), !a)
      return qn(e, s);
  } else {
    var f = G(e), g = f == co || f == Kc;
    if (Ce(e))
      return to(e, a);
    if (f == lo || f == uo || g && !o) {
      if (s = c || g ? {} : ao(e), !a)
        return c ? tc(e, Ku(s, e)) : Qu(e, Wu(s, e));
    } else {
      if (!x[f])
        return o ? e : {};
      s = Nc(e, f, a);
    }
  }
  i || (i = new Y());
  var h = i.get(e);
  if (h)
    return h;
  i.set(e, s), Mc(e) ? e.forEach(function(m) {
    s.add(Pe(m, t, r, m, e, i));
  }) : Uc(e) && e.forEach(function(m, E) {
    s.set(E, Pe(m, t, r, E, e, i));
  });
  var p = l ? c ? io : Ct : c ? ze : Xt, y = u ? void 0 : p(e);
  return Ys(y || e, function(m, E) {
    y && (E = m, m = e[E]), Jt(s, E, Pe(m, t, r, E, e, i));
  }), s;
}
var pl = 1, hl = 4;
function ge(e) {
  return Pe(e, pl | hl);
}
var ml = "__lodash_hash_undefined__";
function gl(e) {
  return this.__data__.set(e, ml), this;
}
function yl(e) {
  return this.__data__.has(e);
}
function ot(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ne(); ++t < r; )
    this.add(e[t]);
}
ot.prototype.add = ot.prototype.push = gl;
ot.prototype.has = yl;
function bl(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function wl(e, t) {
  return e.has(t);
}
var El = 1, vl = 2;
function fo(e, t, r, n, o, i) {
  var s = r & El, a = e.length, c = t.length;
  if (a != c && !(s && c > a))
    return !1;
  var l = i.get(e), u = i.get(t);
  if (l && u)
    return l == t && u == e;
  var f = -1, g = !0, h = r & vl ? new ot() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < a; ) {
    var p = e[f], y = t[f];
    if (n)
      var m = s ? n(y, p, f, t, e, i) : n(p, y, f, e, t, i);
    if (m !== void 0) {
      if (m)
        continue;
      g = !1;
      break;
    }
    if (h) {
      if (!bl(t, function(E, _) {
        if (!wl(h, _) && (p === E || o(p, E, r, n, i)))
          return h.push(_);
      })) {
        g = !1;
        break;
      }
    } else if (!(p === y || o(p, y, r, n, i))) {
      g = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), g;
}
function Tl(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, o) {
    r[++t] = [o, n];
  }), r;
}
function Sl(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Ol = 1, _l = 2, Al = "[object Boolean]", Rl = "[object Date]", $l = "[object Error]", xl = "[object Map]", Pl = "[object Number]", Cl = "[object RegExp]", jl = "[object Set]", Fl = "[object String]", Nl = "[object Symbol]", Ll = "[object ArrayBuffer]", Dl = "[object DataView]", Xr = q ? q.prototype : void 0, St = Xr ? Xr.valueOf : void 0;
function Ul(e, t, r, n, o, i, s) {
  switch (r) {
    case Dl:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ll:
      return !(e.byteLength != t.byteLength || !i(new nt(e), new nt(t)));
    case Al:
    case Rl:
    case Pl:
      return qe(+e, +t);
    case $l:
      return e.name == t.name && e.message == t.message;
    case Cl:
    case Fl:
      return e == t + "";
    case xl:
      var a = Tl;
    case jl:
      var c = n & Ol;
      if (a || (a = Sl), e.size != t.size && !c)
        return !1;
      var l = s.get(e);
      if (l)
        return l == t;
      n |= _l, s.set(e, t);
      var u = fo(a(e), a(t), n, o, i, s);
      return s.delete(e), u;
    case Nl:
      if (St)
        return St.call(e) == St.call(t);
  }
  return !1;
}
var Il = 1, Bl = Object.prototype, Ml = Bl.hasOwnProperty;
function Hl(e, t, r, n, o, i) {
  var s = r & Il, a = Ct(e), c = a.length, l = Ct(t), u = l.length;
  if (c != u && !s)
    return !1;
  for (var f = c; f--; ) {
    var g = a[f];
    if (!(s ? g in t : Ml.call(t, g)))
      return !1;
  }
  var h = i.get(e), p = i.get(t);
  if (h && p)
    return h == t && p == e;
  var y = !0;
  i.set(e, t), i.set(t, e);
  for (var m = s; ++f < c; ) {
    g = a[f];
    var E = e[g], _ = t[g];
    if (n)
      var A = s ? n(_, E, g, t, e, i) : n(E, _, g, e, t, i);
    if (!(A === void 0 ? E === _ || o(E, _, r, n, i) : A)) {
      y = !1;
      break;
    }
    m || (m = g == "constructor");
  }
  if (y && !m) {
    var R = e.constructor, j = t.constructor;
    R != j && "constructor" in e && "constructor" in t && !(typeof R == "function" && R instanceof R && typeof j == "function" && j instanceof j) && (y = !1);
  }
  return i.delete(e), i.delete(t), y;
}
var ql = 1, Zr = "[object Arguments]", Yr = "[object Array]", Je = "[object Object]", zl = Object.prototype, Qr = zl.hasOwnProperty;
function Vl(e, t, r, n, o, i) {
  var s = W(e), a = W(t), c = s ? Yr : G(e), l = a ? Yr : G(t);
  c = c == Zr ? Je : c, l = l == Zr ? Je : l;
  var u = c == Je, f = l == Je, g = c == l;
  if (g && Ce(e)) {
    if (!Ce(t))
      return !1;
    s = !0, u = !1;
  }
  if (g && !u)
    return i || (i = new Y()), s || kt(e) ? fo(e, t, r, n, o, i) : Ul(e, t, c, r, n, o, i);
  if (!(r & ql)) {
    var h = u && Qr.call(e, "__wrapped__"), p = f && Qr.call(t, "__wrapped__");
    if (h || p) {
      var y = h ? e.value() : e, m = p ? t.value() : t;
      return i || (i = new Y()), o(y, m, r, n, i);
    }
  }
  return g ? (i || (i = new Y()), Hl(e, t, r, n, o, i)) : !1;
}
function po(e, t, r, n, o) {
  return e === t ? !0 : e == null || t == null || !Q(e) && !Q(t) ? e !== e && t !== t : Vl(e, t, r, n, po, o);
}
function Gl(e) {
  return function(t, r, n) {
    for (var o = -1, i = Object(t), s = n(t), a = s.length; a--; ) {
      var c = s[++o];
      if (r(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var Jl = Gl(), Ot = function() {
  return k.Date.now();
}, Wl = "Expected a function", Kl = Math.max, kl = Math.min;
function Xl(e, t, r) {
  var n, o, i, s, a, c, l = 0, u = !1, f = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Wl);
  t = $r(t) || 0, B(r) && (u = !0, f = "maxWait" in r, i = f ? Kl($r(r.maxWait) || 0, t) : i, g = "trailing" in r ? !0 : g);
  function h(O) {
    var $ = n, z = o;
    return n = o = void 0, l = O, s = e.apply(z, $), s;
  }
  function p(O) {
    return l = O, a = setTimeout(E, t), u ? h(O) : s;
  }
  function y(O) {
    var $ = O - c, z = O - l, I = t - $;
    return f ? kl(I, i - z) : I;
  }
  function m(O) {
    var $ = O - c, z = O - l;
    return c === void 0 || $ >= t || $ < 0 || f && z >= i;
  }
  function E() {
    var O = Ot();
    if (m(O))
      return _(O);
    a = setTimeout(E, y(O));
  }
  function _(O) {
    return a = void 0, g && n ? h(O) : (n = o = void 0, s);
  }
  function A() {
    a !== void 0 && clearTimeout(a), l = 0, n = c = o = a = void 0;
  }
  function R() {
    return a === void 0 ? s : _(Ot());
  }
  function j() {
    var O = Ot(), $ = m(O);
    if (n = arguments, o = this, c = O, $) {
      if (a === void 0)
        return p(c);
      if (f)
        return clearTimeout(a), a = setTimeout(E, t), h(c);
    }
    return a === void 0 && (a = setTimeout(E, t)), s;
  }
  return j.cancel = A, j.flush = R, j;
}
function Lt(e, t, r) {
  (r !== void 0 && !qe(e[t], r) || r === void 0 && !(t in e)) && Gt(e, t, r);
}
function Zl(e) {
  return Q(e) && dt(e);
}
function Dt(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Yl(e) {
  return Se(e, ze(e));
}
function Ql(e, t, r, n, o, i, s) {
  var a = Dt(e, r), c = Dt(t, r), l = s.get(c);
  if (l) {
    Lt(e, r, l);
    return;
  }
  var u = i ? i(a, c, r + "", e, t, s) : void 0, f = u === void 0;
  if (f) {
    var g = W(c), h = !g && Ce(c), p = !g && !h && kt(c);
    u = c, g || h || p ? W(a) ? u = a : Zl(a) ? u = qn(a) : h ? (f = !1, u = to(c, !0)) : p ? (f = !1, u = so(c, !0)) : u = [] : Qn(c) || tt(c) ? (u = a, tt(a) ? u = Yl(a) : (!B(a) || zt(a)) && (u = ao(c))) : f = !1;
  }
  f && (s.set(c, u), o(u, c, n, i, s), s.delete(c)), Lt(e, r, u);
}
function ho(e, t, r, n, o) {
  e !== t && Jl(t, function(i, s) {
    if (o || (o = new Y()), B(i))
      Ql(e, t, s, r, ho, n, o);
    else {
      var a = n ? n(Dt(e, s), i, s + "", e, t, o) : void 0;
      a === void 0 && (a = i), Lt(e, s, a);
    }
  }, ze);
}
function ef(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function tf(e, t) {
  return t.length < 2 ? e : Zn(e, Mu(t, 0, -1));
}
function rf(e, t) {
  return po(e, t);
}
var Ut = sa(function(e, t, r) {
  ho(e, t, r);
}), nf = Object.prototype, of = nf.hasOwnProperty;
function sf(e, t) {
  t = mt(t, e);
  var r = -1, n = t.length;
  if (!n)
    return !0;
  for (var o = e == null || typeof e != "object" && typeof e != "function"; ++r < n; ) {
    var i = t[r];
    if (typeof i == "string") {
      if (i === "__proto__" && !of.call(e, "__proto__"))
        return !1;
      if (i === "constructor" && r + 1 < n && typeof t[r + 1] == "string" && t[r + 1] === "prototype") {
        if (o && r === 0)
          continue;
        return !1;
      }
    }
  }
  var s = tf(e, t);
  return s == null || delete s[Yt(ef(t))];
}
function af(e) {
  return Qn(e) ? void 0 : e;
}
var uf = 1, cf = 2, lf = 4, en = Nu(function(e, t) {
  var r = {};
  if (e == null)
    return r;
  var n = !1;
  t = Bn(t, function(i) {
    return i = mt(i, e), n || (n = i.length > 1), i;
  }), Se(e, io(e), r), n && (r = Pe(r, uf | cf | lf, af));
  for (var o = t.length; o--; )
    sf(r, t[o]);
  return r;
});
function ff(e, t, r, n) {
  if (!B(e))
    return e;
  t = mt(t, e);
  for (var o = -1, i = t.length, s = i - 1, a = e; a != null && ++o < i; ) {
    var c = Yt(t[o]), l = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (o != s) {
      var u = a[c];
      l = void 0, l === void 0 && (l = B(u) ? u : Vt(t[o + 1]) ? [] : {});
    }
    Jt(a, c, l), a = a[c];
  }
  return e;
}
function mo(e, t, r) {
  return e == null ? e : ff(e, t, r);
}
F.create();
const df = (e) => typeof e == "string" ? e : e(), pf = (e) => typeof e == "string" ? e.toLowerCase() : e(), hf = (e) => Object.keys(e).reduce((t, r) => ({
  ...t,
  [r]: Array.isArray(e[r]) ? e[r][0] : e[r]
}), {});
let Ne = F.create(), go = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, yo = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const it = {}, te = {
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
    return go = e === null ? () => null : e, te;
  },
  determineSuccessUsing(e) {
    return yo = e, te;
  }
}, Ae = (e, t, r, n) => ({
  url: t,
  method: e,
  ...n,
  ...["get", "delete"].includes(e) ? {
    params: Ut({}, r, n?.params)
  } : {
    data: Ut({}, r, n?.data)
  }
}), Re = (e = {}) => {
  const t = [
    mf,
    yf,
    bf
  ].reduce((r, n) => n(r), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), Ne.request(t).then(async (r) => {
    t.precognitive && tn(r);
    const n = r.status;
    let o = r;
    return t.precognitive && t.onPrecognitionSuccess && yo(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && gf(n) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (rn(t, n) ?? ((s) => s))(o) ?? o;
  }, (r) => wf(r) ? Promise.reject(r) : (t.precognitive && tn(r.response), (rn(t, r.response.status) ?? ((o, i) => Promise.reject(i)))(r.response, r))).finally(t.onFinish ?? (() => null)));
}, mf = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? Ne.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? go(e, Ne) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": Ef(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, gf = (e) => e >= 200 && e < 300, yf = (e) => (typeof e.fingerprint != "string" || (it[e.fingerprint]?.abort(), delete it[e.fingerprint]), e), bf = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (it[e.fingerprint] = new AbortController(), {
  ...e,
  signal: it[e.fingerprint].signal
}), tn = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, wf = (e) => !Dn(e) || typeof e.response?.status != "number" || Ln(e), rn = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], Ef = (e) => e.headers?.["Content-Type"] ?? e.headers?.["Content-type"] ?? e.headers?.["content-type"] ?? (bo(e.data) ? "multipart/form-data" : "application/json"), bo = (e) => nr(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => bo(t)), nr = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, nn = (e) => typeof e == "string" ? e : e(), on = (e) => typeof e == "string" ? e.toLowerCase() : e(), vf = (e, t = {}) => {
  const r = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let n = !1, o = !1;
  const i = (w) => w !== o ? (o = w, r.validatingChanged) : [];
  let s = [];
  const a = (w) => {
    const b = [...new Set(w)];
    return s.length !== b.length || !b.every((v) => s.includes(v)) ? (s = b, r.validatedChanged) : [];
  }, c = () => s.filter((w) => typeof f[w] > "u");
  let l = [];
  const u = (w) => {
    const b = [...new Set(w)];
    return l.length !== b.length || !b.every((v) => l.includes(v)) ? (l = b, r.touchedChanged) : [];
  };
  let f = {};
  const g = (w) => {
    const b = Sf(w);
    return rf(f, b) ? [] : (f = b, r.errorsChanged);
  }, h = (w) => {
    const b = { ...f };
    return delete b[Xe(w)], g(b);
  }, p = () => Object.keys(f).length > 0;
  let y = 1500;
  const m = (w) => {
    y = w, O.cancel(), O = j();
  };
  let E = t, _ = null, A = [], R = null;
  const j = () => Xl((w) => {
    e({
      get: (b, v = {}, S = {}) => te.get(b, I(v), $(S, w, v)),
      post: (b, v = {}, S = {}) => te.post(b, I(v), $(S, w, v)),
      patch: (b, v = {}, S = {}) => te.patch(b, I(v), $(S, w, v)),
      put: (b, v = {}, S = {}) => te.put(b, I(v), $(S, w, v)),
      delete: (b, v = {}, S = {}) => te.delete(b, I(v), $(S, w, v))
    }).catch((b) => Ln(b) || Dn(b) && b.response?.status === 422 ? null : Promise.reject(b));
  }, y, { leading: !0, trailing: !0 });
  let O = j();
  const $ = (w, b, v = {}) => {
    const S = {
      ...w,
      ...b
    }, V = Array.from(S.only ?? S.validate ?? l);
    return {
      ...b,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...cs(w, b),
      only: V,
      timeout: S.timeout ?? 5e3,
      onValidationError: (C, ee) => ([
        ...a([...s, ...V]),
        ...g(Ut(en({ ...f }, V), C.data.errors))
      ].forEach((X) => X()), S.onValidationError ? S.onValidationError(C, ee) : Promise.reject(ee)),
      onSuccess: (C) => (a([...s, ...V]).forEach((ee) => ee()), S.onSuccess ? S.onSuccess(C) : C),
      onPrecognitionSuccess: (C) => ([
        ...a([...s, ...V]),
        ...g(en({ ...f }, V))
      ].forEach((ee) => ee()), S.onPrecognitionSuccess ? S.onPrecognitionSuccess(C) : C),
      onBefore: () => S.onBeforeValidation && S.onBeforeValidation({ data: v, touched: l }, { data: E, touched: A }) === !1 || (S.onBefore || (() => !0))() === !1 ? !1 : (R = l, _ = v, !0),
      onStart: () => {
        i(!0).forEach((C) => C()), (S.onStart ?? (() => null))();
      },
      onFinish: () => {
        i(!1).forEach((C) => C()), A = R, E = _, R = _ = null, (S.onFinish ?? (() => null))();
      }
    };
  }, z = (w, b, v) => {
    if (typeof w > "u") {
      const S = Array.from(v?.only ?? v?.validate ?? []);
      u([...l, ...S]).forEach((V) => V()), O(v ?? {});
      return;
    }
    if (nr(b) && !n) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    w = Xe(w), rt(E, w) !== b && (u([w, ...l]).forEach((S) => S()), O(v ?? {}));
  }, I = (w) => n === !1 ? It(w) : w, M = {
    touched: () => l,
    validate(w, b, v) {
      return typeof w == "object" && !("target" in w) && (v = w, w = b = void 0), z(w, b, v), M;
    },
    touch(w) {
      const b = Array.isArray(w) ? w : [Xe(w)];
      return u([...l, ...b]).forEach((v) => v()), M;
    },
    validating: () => o,
    valid: c,
    errors: () => f,
    hasErrors: p,
    setErrors(w) {
      return g(w).forEach((b) => b()), M;
    },
    forgetError(w) {
      return h(w).forEach((b) => b()), M;
    },
    reset(...w) {
      if (w.length === 0)
        u([]).forEach((b) => b());
      else {
        const b = [...l];
        w.forEach((v) => {
          b.includes(v) && b.splice(b.indexOf(v), 1), mo(E, v, rt(t, v));
        }), u(b).forEach((v) => v());
      }
      return M;
    },
    setTimeout(w) {
      return m(w), M;
    },
    on(w, b) {
      return r[w].push(b), M;
    },
    validateFiles() {
      return n = !0, M;
    }
  };
  return M;
}, Tf = (e) => Object.keys(e).reduce((t, r) => ({
  ...t,
  [r]: Array.isArray(e[r]) ? e[r][0] : e[r]
}), {}), Sf = (e) => Object.keys(e).reduce((t, r) => ({
  ...t,
  [r]: typeof e[r] == "string" ? [e[r]] : e[r]
}), {}), Xe = (e) => typeof e != "string" ? e.target.name : e, It = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((r) => {
    const n = t[r];
    if (n !== null) {
      if (nr(n)) {
        delete t[r];
        return;
      }
      if (Array.isArray(n)) {
        t[r] = Object.values(It({ ...n }));
        return;
      }
      if (typeof n == "object") {
        t[r] = It(t[r]);
        return;
      }
    }
  }), t;
}, Of = (e, t, r, n = {}) => {
  const o = ge(typeof r == "function" ? r() : r), i = Object.keys(o), s = Ze([]), a = Ze([]), c = vf((f) => f[on(e)](nn(t), u.data(), n), o).on("validatingChanged", () => {
    u.validating = c.validating();
  }).on("validatedChanged", () => {
    s.value = c.valid();
  }).on("touchedChanged", () => {
    a.value = c.touched();
  }).on("errorsChanged", () => {
    u.hasErrors = c.hasErrors(), u.errors = Tf(c.errors()), s.value = c.valid();
  }), l = (f) => ({
    ...f,
    precognitive: !1,
    onStart: () => {
      u.processing = !0, (f.onStart ?? (() => null))();
    },
    onFinish: () => {
      u.processing = !1, (f.onFinish ?? (() => null))();
    },
    onValidationError: (g, h) => (c.setErrors(g.data.errors), f.onValidationError ? f.onValidationError(g) : Promise.reject(h))
  });
  let u = {
    ...ge(o),
    data() {
      const f = ge(To(u));
      return i.reduce((g, h) => ({
        ...g,
        [h]: f[h]
      }), {});
    },
    setData(f) {
      return Object.keys(f).forEach((g) => {
        u[g] = f[g];
      }), u;
    },
    touched(f) {
      return typeof f == "string" ? a.value.includes(f) : a.value.length > 0;
    },
    touch(f) {
      return c.touch(f), u;
    },
    validate(f, g) {
      return typeof f == "object" && !("target" in f) && (g = f, f = void 0), typeof f > "u" ? c.validate(g) : (f = Xe(f), c.validate(f, rt(u.data(), f), g)), u;
    },
    validating: !1,
    valid(f) {
      return s.value.includes(f);
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
      const g = ge(typeof r == "function" ? r() : o);
      return f.length === 0 ? i.forEach((h) => u[h] = g[h]) : f.forEach((h) => mo(u, h, rt(g, h))), c.reset(...f), u;
    },
    setValidationTimeout(f) {
      return c.setTimeout(f), u;
    },
    processing: !1,
    async submit(f = {}) {
      return te[on(e)](nn(t), u.data(), l(f));
    },
    validateFiles() {
      return c.validateFiles(), u;
    },
    validator() {
      return c;
    }
  };
  return u = vo(u), u;
}, _f = (e, t, r, n = {}) => {
  const o = an(r), i = Of(e, t, r, n);
  i.validator().on("errorsChanged", () => {
    c(), l(
      // @ts-expect-error
      hf(i.validator().errors())
    );
  });
  const s = o.submit.bind(o), a = o.reset.bind(o), c = o.clearErrors.bind(o), l = o.setError.bind(o), u = o.transform.bind(o);
  let f = (h) => h;
  const g = Object.assign(o, {
    validating: i.validating,
    touched: i.touched,
    touch(h) {
      return i.touch(h), g;
    },
    valid: i.valid,
    invalid: i.invalid,
    setData(h) {
      return Object.keys(h).forEach((p) => {
        g[p] = h[p];
      }), g;
    },
    clearErrors(...h) {
      return c(...h), h.length === 0 ? i.setErrors({}) : h.forEach(i.forgetError), g;
    },
    reset(...h) {
      a(...h), i.reset(...h);
    },
    setErrors(h) {
      return i.setErrors(h), g;
    },
    forgetError(h) {
      return i.forgetError(h), g;
    },
    setError(h, p) {
      let y;
      if (typeof h != "object") {
        if (typeof p > "u")
          throw new Error("The `value` is required.");
        y = { [h]: p };
      } else
        y = h;
      return g.setErrors({
        ...o.errors,
        ...y
      }), g;
    },
    transform(h) {
      return u(h), f = h, g;
    },
    validate(h, p) {
      return i.setData(f(o.data())), typeof h == "object" && !("target" in h) && (p = h, h = void 0), typeof p == "object" && (p.onValidationError = p.onValidationError ?? p?.onError), typeof h > "u" ? i.validate(p) : i.validate(h, p), g;
    },
    setValidationTimeout(h) {
      return i.setValidationTimeout(h), g;
    },
    validateFiles() {
      return i.validateFiles(), g;
    },
    submit(h = {}, p, y) {
      typeof h != "string" && (y = h, p = df(t), h = pf(e)), s(h, p, {
        ...y,
        onError: (m) => {
          if (i.validator().setErrors(m), y?.onError)
            return y.onError(m);
        }
      });
    },
    validator: i.validator
  });
  return So(() => g.validating = i.validating), g;
};
F.create();
const Af = { class: "space-y-2" }, Rf = /* @__PURE__ */ Le({
  __name: "CheckboxGroup",
  props: {
    form: {},
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, o = (s) => r.modelValue.includes(s), i = (s, a) => {
      const c = a ? [...r.modelValue, s] : r.modelValue.filter((l) => l !== s);
      n("update:modelValue", c);
    };
    return (s, a) => (N(), H("div", Af, [
      (N(!0), H(De, null, Ue(e.items, (c, l) => (N(), H("div", {
        key: l,
        class: "flex items-center gap-2"
      }, [
        Ye(J(Po), {
          id: `${r.form._prefix}-${c.label ?? c}`,
          checked: o(c.value ?? c),
          "onUpdate:checked": (u) => i(c.value ?? c, u)
        }, null, 8, ["id", "checked", "onUpdate:checked"]),
        Ye(J(cn), {
          for: `${r.form._prefix}-${c.label ?? c}`,
          class: "cursor-pointer"
        }, {
          default: be(() => [
            $e(ue(c.label ?? c), 1)
          ]),
          _: 2
        }, 1032, ["for"])
      ]))), 128))
    ]));
  }
}), wo = (e) => Object.keys(e).reduce((t, r) => e[r].schema ? { ...t, ...wo(e[r].schema) } : (t[r] = e[r].value ?? null, t), {}), $f = (e) => {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let r = "";
  for (let n = 0; n < e; n++)
    r += t.charAt(Math.floor(Math.random() * t.length));
  return r;
}, sn = (e) => Object.keys(e).reduce((t, r) => {
  if (e[r].schema)
    return { ...t, ...wo(e[r].schema) };
  if (e[r].component === Rf)
    return t[r] = e[r].checked ?? [], t;
  const n = e[r]?.fieldset;
  return n ? (Object.entries(n).forEach(([o, i]) => {
    i?.model ? t[i.model] = i.value ?? null : t[o] = i;
  }), t) : (t[r] = e[r].value ?? null, t);
}, {}), or = (e) => Object.entries(e).map(([t, r]) => {
  const n = r.hasOwnProperty("setup") ? { component: r } : r;
  return {
    name: t,
    definition: n
  };
});
function Qf(e = {}, t = {}) {
  const r = t?.precognition ? _f(t.method, t.url, sn(e)) : an(sn(e));
  return r._prefix = $f(6), {
    elements: or(e),
    form: r,
    options: t
  };
}
const xf = { key: 0 }, ir = /* @__PURE__ */ Le({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    const t = e, r = Oo("schemaOptions", {}), n = se(() => {
      const h = t.element.definition?.fieldset;
      return h ? Object.entries(h).reduce((p, [y, m]) => (m?.model ? p[m.model] = t.form[m.model] : p[y] = t.form[y], p), {}) : {
        modelValue: t.form[t.element.name]
      };
    }), o = se(() => {
      let h = Object.entries({
        id: `${t.form._prefix}-${t.element.name}`,
        ...t.element.definition,
        ...t.element.definition.props,
        ...n.value,
        schema: t.element.definition.schema,
        form: t.form,
        error: s.value[0] ?? null
      }), p = t.element.definition.component.props;
      return Object.fromEntries(h.filter(([y]) => p.hasOwnProperty(y)));
    }), i = se(() => {
      const h = t.element.definition?.fieldset, p = r?.precognition === !0 && (t.element.definition.precognitive ?? r?.optInPrecognition !== !0), y = t.element.definition.precognitiveEvent ?? "change", m = (E, _ = "modelValue") => ({
        [`update:${_}`]: (A) => {
          t.form[E] = A, p && y === "update" && t.form.validate(E);
        },
        ...p && y !== "update" ? { [y]: () => t.form.validate(E) } : {}
      });
      return h ? Object.entries(h).reduce((E, [_, A]) => {
        const R = A?.model ?? _;
        return {
          ...E,
          ...m(R, R)
        };
      }, {}) : m(t.element.name);
    }), s = se(() => {
      const h = t.element.definition?.fieldset;
      return h ? Object.keys(h).map((p) => t.form.errors[p]).filter((p) => p) : [t.form.errors[t.element.name]];
    }), a = se(() => (t.element.definition.label ?? t.element.name).replaceAll("_id", "").replaceAll("_", " ")), c = !!t.element.definition.schema, l = se(() => t.element.definition.showLabel !== void 0 ? t.element.definition.showLabel : t.element.definition.props?.type === "hidden" ? !1 : !c), u = se(() => {
      if (t.element.definition.alert !== void 0) {
        const h = t.element.definition.alert;
        return h.visible = typeof h.visible == "function" ? h.visible : () => !0, h;
      }
      return null;
    }), f = Ze(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible : () => !0
    ), g = Ze(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible(t.form) : () => !0
    );
    return _o(t.form, (h) => {
      typeof f.value == "function" && (g.value = f.value(h));
    }), (h, p) => g.value ? (N(), H("div", xf, [
      l.value ? (N(), ie(J(cn), {
        key: 0,
        for: o.value.id,
        class: "mb-1 block capitalize"
      }, {
        default: be(() => [
          $e(ue(a.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : ye("", !0),
      (N(), ie(Ao(e.element.definition.component), un({
        key: e.element.name
      }, o.value, Ro(i.value)), null, 16)),
      u.value && u.value.visible() ? (N(), ie(J(Co), {
        key: 1,
        variant: "warning",
        class: "mt-2"
      }, {
        default: be(() => [
          Ye(J(jo), { class: "flex items-center justify-between" }, {
            default: be(() => [
              $e(ue(u.value.text) + " ", 1),
              u.value.actionHref && u.value.actionText ? (N(), ie(J(ln), {
                key: 0,
                as: "a",
                href: u.value.actionHref,
                target: u.value.externalAction ? "_blank" : void 0,
                variant: "outline",
                size: "sm"
              }, {
                default: be(() => [
                  $e(ue(u.value.actionText), 1)
                ]),
                _: 1
              }, 8, ["href", "target"])) : ye("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : ye("", !0),
      o.value.hasOwnProperty("error") ? ye("", !0) : (N(!0), H(De, { key: 2 }, Ue(s.value, (y, m) => (N(), ie(J(Fo), {
        key: m,
        error: y
      }, null, 8, ["error"]))), 128))
    ])) : ye("", !0);
  }
}), Pf = { class: "mx-auto mt-6 max-w-md space-y-6" }, Cf = { class: "flex justify-end gap-2" }, ed = /* @__PURE__ */ Le({
  __name: "FormBuilder",
  props: {
    schema: {},
    submit: { default: "Save" }
  },
  setup(e) {
    return $o("schemaOptions", e.schema.options), (r, n) => (N(), H("div", Pf, [
      yt(r.$slots, "default", {}, () => [
        (N(!0), H(De, null, Ue(e.schema.elements, (o, i) => (N(), ie(ir, {
          key: i,
          element: o,
          form: e.schema.form
        }, null, 8, ["element", "form"]))), 128))
      ]),
      yt(r.$slots, "actions-wrapper", {
        form: e.schema.form
      }, () => [
        _t("div", Cf, [
          yt(r.$slots, "actions", {
            form: e.schema.form
          }, () => [
            Ye(J(ln), {
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
    const r = or(e.schema);
    return (n, o) => (N(), H("div", {
      class: xo(["grid gap-x-4 gap-y-6 md:grid-flow-col", "md:grid-cols-" + J(r).length])
    }, [
      (N(!0), H(De, null, Ue(J(r), (i, s) => (N(), ie(ir, un({
        key: s,
        element: i,
        form: e.form
      }, { ref_for: !0 }, n.$attrs), null, 16, ["element", "form"]))), 128))
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
    const r = or(e.schema);
    return (n, o) => (N(), H("div", jf, [
      _t("label", null, ue(e.heading), 1),
      e.description ? (N(), H("p", Ff, ue(e.description), 1)) : ye("", !0),
      _t("div", Nf, [
        (N(!0), H(De, null, Ue(J(r), (i, s) => (N(), ie(ir, {
          key: s,
          element: i,
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
