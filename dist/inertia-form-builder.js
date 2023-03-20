import { defineComponent as I, ref as y, computed as h, toRaw as L, provide as Z, onMounted as V, watch as re, h as H, Fragment as ie, watchEffect as U, onUnmounted as X, nextTick as W, inject as J, Teleport as pn, reactive as fn, unref as z, normalizeClass as It, useAttrs as vn, openBlock as B, createElementBlock as Q, createCommentVNode as Oe, createBlock as ve, mergeProps as Ee, withCtx as Le, renderSlot as be, withDirectives as qe, createVNode as Pe, vShow as ct, cloneVNode as mn, createTextVNode as tt, toDisplayString as je, createElementVNode as le, isRef as Rt, vModelCheckbox as bn, shallowRef as hn, resolveDynamicComponent as gn, renderList as nt } from "vue";
import { Link as yn, useForm as wn } from "@inertiajs/vue3";
const xn = /* @__PURE__ */ le("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Sn = /* @__PURE__ */ le("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), On = [
  xn,
  Sn
], En = { name: "Spinner" }, pt = /* @__PURE__ */ I({
  ...En,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (t, n) => (B(), Q("svg", {
      class: It(["h-5 w-5 animate-spin", e.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, On, 2));
  }
}), Pn = ["disabled", "type"], Tn = { name: "PrimaryButton" }, In = /* @__PURE__ */ I({
  ...Tn,
  props: {
    loading: { type: Boolean },
    type: null
  },
  setup(e) {
    const t = vn(), n = h(() => !t.href), o = [
      "focus:ring-indigo",
      "relative",
      "inline-flex",
      "items-center",
      "rounded-md",
      "border",
      "border-transparent",
      "bg-indigo-600",
      "px-4",
      "py-2",
      "text-sm",
      "font-medium",
      "leading-5",
      "text-white",
      "hover:bg-indigo-500",
      "focus:border-indigo-700",
      "focus:outline-none",
      "active:bg-indigo-700"
    ];
    return (l, a) => (B(), Q(ie, null, [
      z(n) ? Oe("", !0) : (B(), ve(z(yn), Ee({
        key: 0,
        class: o,
        disabled: e.loading
      }, z(t)), {
        default: Le(() => [
          be(l.$slots, "default"),
          qe(Pe(pt, { class: "ml-3" }, null, 512), [
            [ct, e.loading]
          ])
        ]),
        _: 3
      }, 16, ["disabled"])),
      z(n) ? (B(), Q("button", Ee({
        key: 1,
        class: o,
        disabled: e.loading,
        type: e.type
      }, z(t)), [
        be(l.$slots, "default"),
        qe(Pe(pt, { class: "ml-3" }, null, 512), [
          [ct, e.loading]
        ])
      ], 16, Pn)) : Oe("", !0)
    ], 64));
  }
});
function M(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, M), o;
}
var ne = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ne || {}), oe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(oe || {});
function A({ visible: e = !0, features: t = 0, ourProps: n, theirProps: o, ...l }) {
  var a;
  let r = Dt(o, n), u = Object.assign(l, { props: r });
  if (e || t & 2 && r.static)
    return He(u);
  if (t & 1) {
    let i = (a = r.unmount) == null || a ? 0 : 1;
    return M(i, { [0]() {
      return null;
    }, [1]() {
      return He({ ...l, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return He(u);
}
function He({ props: e, attrs: t, slots: n, slot: o, name: l }) {
  var a, r;
  let { as: u, ...i } = Me(e, ["unmount", "static"]), d = (a = n.default) == null ? void 0 : a.call(n, o), s = {};
  if (o) {
    let v = !1, m = [];
    for (let [p, f] of Object.entries(o))
      typeof f == "boolean" && (v = !0), f === !0 && m.push(p);
    v && (s["data-headlessui-state"] = m.join(" "));
  }
  if (u === "template") {
    if (d = Ct(d != null ? d : []), Object.keys(i).length > 0 || Object.keys(t).length > 0) {
      let [v, ...m] = d != null ? d : [];
      if (!Cn(v) || m.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(i).concat(Object.keys(t)).map((c) => c.trim()).filter((c, b, w) => w.indexOf(c) === b).sort((c, b) => c.localeCompare(b)).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
      let p = Dt((r = v.props) != null ? r : {}, i), f = mn(v, p);
      for (let c in p)
        c.startsWith("on") && (f.props || (f.props = {}), f.props[c] = p[c]);
      return f;
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return H(u, Object.assign({}, i, s), { default: () => d });
}
function Ct(e) {
  return e.flatMap((t) => t.type === ie ? Ct(t.children) : [t]);
}
function Dt(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let o of e)
    for (let l in o)
      l.startsWith("on") && typeof o[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(o[l])) : t[l] = o[l];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((o) => [o, void 0])));
  for (let o in n)
    Object.assign(t, { [o](l, ...a) {
      let r = n[o];
      for (let u of r) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        u(l, ...a);
      }
    } });
  return t;
}
function Rn(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function Me(e, t = []) {
  let n = Object.assign({}, e);
  for (let o of t)
    o in n && delete n[o];
  return n;
}
function Cn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Dn = 0;
function kn() {
  return ++Dn;
}
function q() {
  return kn();
}
var T = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(T || {});
function Fn(e) {
  throw new Error("Unexpected object: " + e);
}
var C = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(C || {});
function kt(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), l = o != null ? o : -1, a = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((r) => !t.resolveDisabled(r));
      case 1: {
        let r = n.slice().reverse().findIndex((u, i, d) => l !== -1 && d.length - i - 1 >= l ? !1 : !t.resolveDisabled(u));
        return r === -1 ? r : n.length - 1 - r;
      }
      case 2:
        return n.findIndex((r, u) => u <= l ? !1 : !t.resolveDisabled(r));
      case 3: {
        let r = n.slice().reverse().findIndex((u) => !t.resolveDisabled(u));
        return r === -1 ? r : n.length - 1 - r;
      }
      case 4:
        return n.findIndex((r) => t.resolveId(r) === e.id);
      case 5:
        return null;
      default:
        Fn(e);
    }
  })();
  return a === -1 ? o : a;
}
function g(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ft = Symbol("Context");
var j = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(j || {});
function An() {
  return Ie() !== null;
}
function Ie() {
  return J(Ft, null);
}
function lt(e) {
  Z(Ft, e);
}
function ft(e, t) {
  if (e)
    return e;
  let n = t != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function At(e, t) {
  let n = y(ft(e.value.type, e.value.as));
  return V(() => {
    n.value = ft(e.value.type, e.value.as);
  }), U(() => {
    var o;
    n.value || g(t) && g(t) instanceof HTMLButtonElement && !((o = g(t)) != null && o.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var Ln = Object.defineProperty, Nn = (e, t, n) => t in e ? Ln(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vt = (e, t, n) => (Nn(e, typeof t != "symbol" ? t + "" : t, n), n);
class jn {
  constructor() {
    vt(this, "current", this.detect()), vt(this, "currentId", 0);
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
let Re = new jn();
function me(e) {
  if (Re.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = g(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function Lt({ container: e, accept: t, walk: n, enabled: o }) {
  U(() => {
    let l = e.value;
    if (!l || o !== void 0 && !o.value)
      return;
    let a = me(e);
    if (!a)
      return;
    let r = Object.assign((i) => t(i), { acceptNode: t }), u = a.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; u.nextNode(); )
      n(u.currentNode);
  });
}
let Ge = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var te = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(te || {}), Nt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Nt || {}), Mn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Mn || {});
function jt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ge)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ot = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ot || {});
function at(e, t = 0) {
  var n;
  return e === ((n = me(e)) == null ? void 0 : n.body) ? !1 : M(t, { [0]() {
    return e.matches(Ge);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(Ge))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
function Mt(e) {
  let t = me(e);
  W(() => {
    t && !at(t.activeElement, 0) && ae(e);
  });
}
function ae(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Vn = ["textarea", "input"].join(",");
function Bn(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Vn)) != null ? n : !1;
}
function rt(e, t = (n) => n) {
  return e.slice().sort((n, o) => {
    let l = t(n), a = t(o);
    if (l === null || a === null)
      return 0;
    let r = l.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _n(e, t) {
  return Se(jt(), t, { relativeTo: e });
}
function Se(e, t, { sorted: n = !0, relativeTo: o = null, skipElements: l = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, u = Array.isArray(e) ? n ? rt(e) : e : jt(e);
  l.length > 0 && u.length > 1 && (u = u.filter((f) => !l.includes(f))), o = o != null ? o : r.activeElement;
  let i = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, u.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, u.indexOf(o)) + 1;
    if (t & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), s = t & 32 ? { preventScroll: !0 } : {}, v = 0, m = u.length, p;
  do {
    if (v >= m || v + m <= 0)
      return 0;
    let f = d + v;
    if (t & 16)
      f = (f + m) % m;
    else {
      if (f < 0)
        return 3;
      if (f >= m)
        return 1;
    }
    p = u[f], p == null || p.focus(s), v += i;
  } while (p !== r.activeElement);
  return t & 6 && Bn(p) && p.select(), p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), 2;
}
function Ue(e, t, n) {
  Re.isServer || U((o) => {
    document.addEventListener(e, t, n), o(() => document.removeEventListener(e, t, n));
  });
}
function ut(e, t, n = h(() => !0)) {
  function o(a, r) {
    if (!n.value || a.defaultPrevented)
      return;
    let u = r(a);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let i = function d(s) {
      return typeof s == "function" ? d(s()) : Array.isArray(s) || s instanceof Set ? s : [s];
    }(e);
    for (let d of i) {
      if (d === null)
        continue;
      let s = d instanceof HTMLElement ? d : g(d);
      if (s != null && s.contains(u) || a.composed && a.composedPath().includes(s))
        return;
    }
    return !at(u, ot.Loose) && u.tabIndex !== -1 && a.preventDefault(), t(a, u);
  }
  let l = y(null);
  Ue("mousedown", (a) => {
    var r, u;
    n.value && (l.value = ((u = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : u[0]) || a.target);
  }, !0), Ue("click", (a) => {
    l.value && (o(a, () => l.value), l.value = null);
  }, !0), Ue("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Te = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Te || {});
let Ne = I({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: o, ...l } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return A({ ourProps: a, theirProps: l, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function Vt(e = {}, t = null, n = []) {
  for (let [o, l] of Object.entries(e))
    _t(n, Bt(t, o), l);
  return n;
}
function Bt(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function _t(e, t, n) {
  if (Array.isArray(n))
    for (let [o, l] of n.entries())
      _t(e, Bt(t, o.toString()), l);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Vt(n, t, e);
}
function $n(e, t, n) {
  let o = y(n == null ? void 0 : n.value), l = h(() => e.value !== void 0);
  return [h(() => l.value ? e.value : o.value), function(a) {
    return l.value || (o.value = a), t == null ? void 0 : t(a);
  }];
}
function mt(e) {
  return [e.screenX, e.screenY];
}
function $t() {
  let e = y([-1, -1]);
  return { wasMoved(t) {
    let n = mt(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = mt(t);
  } };
}
function Ht() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Hn() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Un() {
  return Ht() || Hn();
}
function Wn(e, t) {
  return e === t;
}
var zn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(zn || {}), qn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(qn || {}), Gn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Gn || {});
let Ut = Symbol("ComboboxContext");
function he(e) {
  let t = J(Ut, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, he), n;
  }
  return t;
}
I({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Wn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: o }) {
  let l = y(1), a = y(null), r = y(null), u = y(null), i = y(null), d = y({ static: !1, hold: !1 }), s = y([]), v = y(null), m = y(1), p = y(!1);
  function f(S = (P) => P) {
    let P = v.value !== null ? s.value[v.value] : null, E = rt(S(s.value.slice()), (D) => g(D.dataRef.domRef)), x = P ? E.indexOf(P) : null;
    return x === -1 && (x = null), { options: E, activeOptionIndex: x };
  }
  let c = h(() => e.multiple ? 1 : 0), b = h(() => e.nullable), [w, F] = $n(h(() => e.modelValue === void 0 ? M(c.value, { [1]: [], [0]: void 0 }) : e.modelValue), (S) => o("update:modelValue", S), h(() => e.defaultValue)), O = { comboboxState: l, value: w, mode: c, compare(S, P) {
    if (typeof e.by == "string") {
      let E = e.by;
      return (S == null ? void 0 : S[E]) === (P == null ? void 0 : P[E]);
    }
    return e.by(S, P);
  }, defaultValue: h(() => e.defaultValue), nullable: b, inputRef: r, labelRef: a, buttonRef: u, optionsRef: i, disabled: h(() => e.disabled), options: s, change(S) {
    F(S);
  }, activeOptionIndex: h(() => {
    if (p.value && v.value === null && s.value.length > 0) {
      let S = s.value.findIndex((P) => !P.dataRef.disabled);
      if (S !== -1)
        return S;
    }
    return v.value;
  }), activationTrigger: m, optionsPropsRef: d, closeCombobox() {
    p.value = !1, !e.disabled && l.value !== 1 && (l.value = 1, v.value = null);
  }, openCombobox() {
    if (p.value = !0, e.disabled || l.value === 0)
      return;
    let S = s.value.findIndex((P) => {
      let E = L(P.dataRef.value);
      return M(c.value, { [0]: () => O.compare(L(O.value.value), L(E)), [1]: () => L(O.value.value).some((x) => O.compare(L(x), L(E))) });
    });
    S !== -1 && (v.value = S), l.value = 0;
  }, goToOption(S, P, E) {
    if (p.value = !1, e.disabled || i.value && !d.value.static && l.value === 1)
      return;
    let x = f();
    if (x.activeOptionIndex === null) {
      let N = x.options.findIndex((se) => !se.dataRef.disabled);
      N !== -1 && (x.activeOptionIndex = N);
    }
    let D = kt(S === C.Specific ? { focus: C.Specific, id: P } : { focus: S }, { resolveItems: () => x.options, resolveActiveIndex: () => x.activeOptionIndex, resolveId: (N) => N.id, resolveDisabled: (N) => N.dataRef.disabled });
    v.value = D, m.value = E != null ? E : 1, s.value = x.options;
  }, selectOption(S) {
    let P = s.value.find((x) => x.id === S);
    if (!P)
      return;
    let { dataRef: E } = P;
    F(M(c.value, { [0]: () => E.value, [1]: () => {
      let x = L(O.value.value).slice(), D = L(E.value), N = x.findIndex((se) => O.compare(D, L(se)));
      return N === -1 ? x.push(D) : x.splice(N, 1), x;
    } }));
  }, selectActiveOption() {
    if (O.activeOptionIndex.value === null)
      return;
    let { dataRef: S, id: P } = s.value[O.activeOptionIndex.value];
    F(M(c.value, { [0]: () => S.value, [1]: () => {
      let E = L(O.value.value).slice(), x = L(S.value), D = E.findIndex((N) => O.compare(x, L(N)));
      return D === -1 ? E.push(x) : E.splice(D, 1), E;
    } })), O.goToOption(C.Specific, P);
  }, registerOption(S, P) {
    let E = { id: S, dataRef: P }, x = f((D) => [...D, E]);
    if (v.value === null) {
      let D = P.value.value;
      M(c.value, { [0]: () => O.compare(L(O.value.value), L(D)), [1]: () => L(O.value.value).some((N) => O.compare(L(N), L(D))) }) && (x.activeOptionIndex = x.options.indexOf(E));
    }
    s.value = x.options, v.value = x.activeOptionIndex, m.value = 1;
  }, unregisterOption(S) {
    var P;
    O.activeOptionIndex.value !== null && ((P = O.options.value[O.activeOptionIndex.value]) == null ? void 0 : P.id) === S && (p.value = !0);
    let E = f((x) => {
      let D = x.findIndex((N) => N.id === S);
      return D !== -1 && x.splice(D, 1), x;
    });
    s.value = E.options, v.value = E.activeOptionIndex, m.value = 1;
  } };
  ut([r, u, i], () => O.closeCombobox(), h(() => l.value === 0)), Z(Ut, O), lt(h(() => M(l.value, { [0]: j.Open, [1]: j.Closed })));
  let Y = h(() => O.activeOptionIndex.value === null ? null : s.value[O.activeOptionIndex.value].dataRef.value), G = h(() => {
    var S;
    return (S = g(r)) == null ? void 0 : S.closest("form");
  });
  return V(() => {
    re([G], () => {
      if (!G.value || e.defaultValue === void 0)
        return;
      function S() {
        O.change(e.defaultValue);
      }
      return G.value.addEventListener("reset", S), () => {
        var P;
        (P = G.value) == null || P.removeEventListener("reset", S);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: S, disabled: P, ...E } = e, x = { open: l.value === 0, disabled: P, activeIndex: O.activeOptionIndex.value, activeOption: Y.value, value: w.value };
    return H(ie, [...S != null && w.value != null ? Vt({ [S]: w.value }).map(([D, N]) => H(Ne, Rn({ features: Te.Hidden, key: D, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: D, value: N }))) : [], A({ theirProps: { ...n, ...Me(E, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: x, slots: t, attrs: n, name: "Combobox" })]);
  };
} });
I({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${q()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = he("ComboboxLabel");
  function l() {
    var a;
    (a = g(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: r, ...u } = e, i = { id: r, ref: o.labelRef, onClick: l };
    return A({ ourProps: i, theirProps: u, slot: a, attrs: t, slots: n, name: "ComboboxLabel" });
  };
} });
I({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${q()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = he("ComboboxButton");
  o({ el: l.buttonRef, $el: l.buttonRef });
  function a(i) {
    l.disabled.value || (l.comboboxState.value === 0 ? l.closeCombobox() : (i.preventDefault(), l.openCombobox()), W(() => {
      var d;
      return (d = g(l.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function r(i) {
    switch (i.key) {
      case T.ArrowDown:
        i.preventDefault(), i.stopPropagation(), l.comboboxState.value === 1 && l.openCombobox(), W(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case T.ArrowUp:
        i.preventDefault(), i.stopPropagation(), l.comboboxState.value === 1 && (l.openCombobox(), W(() => {
          l.value.value || l.goToOption(C.Last);
        })), W(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case T.Escape:
        if (l.comboboxState.value !== 0)
          return;
        i.preventDefault(), l.optionsRef.value && !l.optionsPropsRef.value.static && i.stopPropagation(), l.closeCombobox(), W(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = At(h(() => ({ as: e.as, type: t.type })), l.buttonRef);
  return () => {
    var i, d;
    let s = { open: l.comboboxState.value === 0, disabled: l.disabled.value, value: l.value.value }, { id: v, ...m } = e, p = { ref: l.buttonRef, id: v, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (i = g(l.optionsRef)) == null ? void 0 : i.id, "aria-expanded": l.disabled.value ? void 0 : l.comboboxState.value === 0, "aria-labelledby": l.labelRef.value ? [(d = g(l.labelRef)) == null ? void 0 : d.id, v].join(" ") : void 0, disabled: l.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return A({ ourProps: p, theirProps: m, slot: s, attrs: t, slots: n, name: "ComboboxButton" });
  };
} });
I({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${q()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  let a = he("ComboboxInput"), r = { value: !1 };
  l({ el: a.inputRef, $el: a.inputRef });
  let u = h(() => {
    var c;
    let b = a.value.value;
    return g(a.inputRef) ? typeof e.displayValue < "u" && b !== void 0 ? (c = e.displayValue(b)) != null ? c : "" : typeof b == "string" ? b : "" : "";
  });
  V(() => {
    re([u, a.comboboxState], ([c, b], [w, F]) => {
      if (r.value)
        return;
      let O = g(a.inputRef);
      O && (F === 0 && b === 1 || c !== w) && (O.value = c);
    }, { immediate: !0 }), re([a.comboboxState], ([c], [b]) => {
      if (c === 0 && b === 1) {
        let w = g(a.inputRef);
        if (!w)
          return;
        let F = w.value, { selectionStart: O, selectionEnd: Y, selectionDirection: G } = w;
        w.value = "", w.value = F, G !== null ? w.setSelectionRange(O, Y, G) : w.setSelectionRange(O, Y);
      }
    });
  });
  let i = y(!1);
  function d() {
    i.value = !0;
  }
  function s() {
    setTimeout(() => {
      i.value = !1;
    });
  }
  function v(c) {
    switch (r.value = !0, c.key) {
      case T.Backspace:
      case T.Delete:
        if (a.mode.value !== 0 || !a.nullable.value)
          return;
        let b = c.currentTarget;
        requestAnimationFrame(() => {
          if (b.value === "") {
            a.change(null);
            let w = g(a.optionsRef);
            w && (w.scrollTop = 0), a.goToOption(C.Nothing);
          }
        });
        break;
      case T.Enter:
        if (r.value = !1, a.comboboxState.value !== 0 || i.value)
          return;
        if (c.preventDefault(), c.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case T.ArrowDown:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), M(a.comboboxState.value, { [0]: () => a.goToOption(C.Next), [1]: () => a.openCombobox() });
      case T.ArrowUp:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), M(a.comboboxState.value, { [0]: () => a.goToOption(C.Previous), [1]: () => {
          a.openCombobox(), W(() => {
            a.value.value || a.goToOption(C.Last);
          });
        } });
      case T.Home:
        if (c.shiftKey)
          break;
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(C.First);
      case T.PageUp:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(C.First);
      case T.End:
        if (c.shiftKey)
          break;
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(C.Last);
      case T.PageDown:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(C.Last);
      case T.Escape:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        c.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && c.stopPropagation(), a.closeCombobox();
        break;
      case T.Tab:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        a.mode.value === 0 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function m(c) {
    a.openCombobox(), t("change", c);
  }
  function p() {
    r.value = !1;
  }
  let f = h(() => {
    var c, b, w, F;
    return (F = (w = (b = e.defaultValue) != null ? b : a.defaultValue.value !== void 0 ? (c = e.displayValue) == null ? void 0 : c.call(e, a.defaultValue.value) : null) != null ? w : a.defaultValue.value) != null ? F : "";
  });
  return () => {
    var c, b, w, F, O, Y;
    let G = { open: a.comboboxState.value === 0 }, { id: S, displayValue: P, onChange: E, ...x } = e, D = { "aria-controls": (c = a.optionsRef.value) == null ? void 0 : c.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (b = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : b.id, "aria-labelledby": (O = (w = g(a.labelRef)) == null ? void 0 : w.id) != null ? O : (F = g(a.buttonRef)) == null ? void 0 : F.id, "aria-autocomplete": "list", id: S, onCompositionstart: d, onCompositionend: s, onKeydown: v, onInput: m, onBlur: p, role: "combobox", type: (Y = n.type) != null ? Y : "text", tabIndex: 0, ref: a.inputRef, defaultValue: f.value };
    return A({ ourProps: D, theirProps: x, slot: G, attrs: n, slots: o, features: ne.RenderStrategy | ne.Static, name: "ComboboxInput" });
  };
} });
I({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = he("ComboboxOptions"), a = `headlessui-combobox-options-${q()}`;
  o({ el: l.optionsRef, $el: l.optionsRef }), U(() => {
    l.optionsPropsRef.value.static = e.static;
  }), U(() => {
    l.optionsPropsRef.value.hold = e.hold;
  });
  let r = Ie(), u = h(() => r !== null ? (r.value & j.Open) === j.Open : l.comboboxState.value === 0);
  return Lt({ container: h(() => g(l.optionsRef)), enabled: h(() => l.comboboxState.value === 0), accept(i) {
    return i.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : i.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(i) {
    i.setAttribute("role", "none");
  } }), () => {
    var i, d, s;
    let v = { open: l.comboboxState.value === 0 }, m = { "aria-labelledby": (s = (i = g(l.labelRef)) == null ? void 0 : i.id) != null ? s : (d = g(l.buttonRef)) == null ? void 0 : d.id, id: a, ref: l.optionsRef, role: "listbox", "aria-multiselectable": l.mode.value === 1 ? !0 : void 0 }, p = Me(e, ["hold"]);
    return A({ ourProps: m, theirProps: p, slot: v, attrs: t, slots: n, features: ne.RenderStrategy | ne.Static, visible: u.value, name: "ComboboxOptions" });
  };
} });
I({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n, expose: o }) {
  let l = he("ComboboxOption"), a = `headlessui-combobox-option-${q()}`, r = y(null);
  o({ el: r, $el: r });
  let u = h(() => l.activeOptionIndex.value !== null ? l.options.value[l.activeOptionIndex.value].id === a : !1), i = h(() => M(l.mode.value, { [0]: () => l.compare(L(l.value.value), L(e.value)), [1]: () => L(l.value.value).some((b) => l.compare(L(b), L(e.value))) })), d = h(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  V(() => l.registerOption(a, d)), X(() => l.unregisterOption(a)), U(() => {
    l.comboboxState.value === 0 && u.value && l.activationTrigger.value !== 0 && W(() => {
      var b, w;
      return (w = (b = g(r)) == null ? void 0 : b.scrollIntoView) == null ? void 0 : w.call(b, { block: "nearest" });
    });
  });
  function s(b) {
    if (e.disabled)
      return b.preventDefault();
    l.selectOption(a), l.mode.value === 0 && l.closeCombobox(), Un() || requestAnimationFrame(() => {
      var w;
      return (w = g(l.inputRef)) == null ? void 0 : w.focus();
    });
  }
  function v() {
    if (e.disabled)
      return l.goToOption(C.Nothing);
    l.goToOption(C.Specific, a);
  }
  let m = $t();
  function p(b) {
    m.update(b);
  }
  function f(b) {
    m.wasMoved(b) && (e.disabled || u.value || l.goToOption(C.Specific, a, 0));
  }
  function c(b) {
    m.wasMoved(b) && (e.disabled || u.value && (l.optionsPropsRef.value.hold || l.goToOption(C.Nothing)));
  }
  return () => {
    let { disabled: b } = e, w = { active: u.value, selected: i.value, disabled: b }, F = { id: a, ref: r, role: "option", tabIndex: b === !0 ? void 0 : -1, "aria-disabled": b === !0 ? !0 : void 0, "aria-selected": i.value, disabled: void 0, onClick: s, onFocus: v, onPointerenter: p, onMouseenter: p, onPointermove: f, onMousemove: f, onPointerleave: c, onMouseleave: c };
    return A({ ourProps: F, theirProps: e, slot: w, attrs: n, slots: t, name: "ComboboxOption" });
  };
} });
function Kn(e, t, n) {
  Re.isServer || U((o) => {
    window.addEventListener(e, t, n), o(() => window.removeEventListener(e, t, n));
  });
}
var we = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(we || {});
function Qn() {
  let e = y(0);
  return Kn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Wt(e, t, n, o) {
  Re.isServer || U((l) => {
    e = e != null ? e : window, e.addEventListener(t, n, o), l(() => e.removeEventListener(t, n, o));
  });
}
function zt(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function qt(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.value) {
    let o = g(n);
    o instanceof HTMLElement && t.add(o);
  }
  return t;
}
var Gt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Gt || {});
let ge = Object.assign(I({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = y(null);
  o({ el: l, $el: l });
  let a = h(() => me(l)), r = y(!1);
  V(() => r.value = !0), X(() => r.value = !1), Xn({ ownerDocument: a }, h(() => r.value && Boolean(e.features & 16)));
  let u = Jn({ ownerDocument: a, container: l, initialFocus: h(() => e.initialFocus) }, h(() => r.value && Boolean(e.features & 2)));
  Zn({ ownerDocument: a, container: l, containers: e.containers, previousActiveElement: u }, h(() => r.value && Boolean(e.features & 8)));
  let i = Qn();
  function d(p) {
    let f = g(l);
    !f || ((c) => c())(() => {
      M(i.value, { [we.Forwards]: () => {
        Se(f, te.First, { skipElements: [p.relatedTarget] });
      }, [we.Backwards]: () => {
        Se(f, te.Last, { skipElements: [p.relatedTarget] });
      } });
    });
  }
  let s = y(!1);
  function v(p) {
    p.key === "Tab" && (s.value = !0, requestAnimationFrame(() => {
      s.value = !1;
    }));
  }
  function m(p) {
    if (!r.value)
      return;
    let f = qt(e.containers);
    g(l) instanceof HTMLElement && f.add(g(l));
    let c = p.relatedTarget;
    c instanceof HTMLElement && c.dataset.headlessuiFocusGuard !== "true" && (Kt(f, c) || (s.value ? Se(g(l), M(i.value, { [we.Forwards]: () => te.Next, [we.Backwards]: () => te.Previous }) | te.WrapAround, { relativeTo: p.target }) : p.target instanceof HTMLElement && ae(p.target)));
  }
  return () => {
    let p = {}, f = { ref: l, onKeydown: v, onFocusout: m }, { features: c, initialFocus: b, containers: w, ...F } = e;
    return H(ie, [Boolean(c & 4) && H(Ne, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Te.Focusable }), A({ ourProps: f, theirProps: { ...t, ...F }, slot: p, attrs: t, slots: n, name: "FocusTrap" }), Boolean(c & 4) && H(Ne, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Te.Focusable })]);
  };
} }), { features: Gt }), pe = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && pe[0] !== t.target && (pe.unshift(t.target), pe = pe.filter((n) => n != null && n.isConnected), pe.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function Yn(e) {
  let t = y(pe.slice());
  return re([e], ([n], [o]) => {
    o === !0 && n === !1 ? zt(() => {
      t.value.splice(0);
    }) : o === !1 && n === !0 && (t.value = pe.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((o) => o != null && o.isConnected)) != null ? n : null;
  };
}
function Xn({ ownerDocument: e }, t) {
  let n = Yn(t);
  V(() => {
    U(() => {
      var o, l;
      t.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((l = e.value) == null ? void 0 : l.body) && ae(n());
    }, { flush: "post" });
  }), X(() => {
    ae(n());
  });
}
function Jn({ ownerDocument: e, container: t, initialFocus: n }, o) {
  let l = y(null), a = y(!1);
  return V(() => a.value = !0), X(() => a.value = !1), V(() => {
    re([t, n, o], (r, u) => {
      if (r.every((d, s) => (u == null ? void 0 : u[s]) === d) || !o.value)
        return;
      let i = g(t);
      i && zt(() => {
        var d, s;
        if (!a.value)
          return;
        let v = g(n), m = (d = e.value) == null ? void 0 : d.activeElement;
        if (v) {
          if (v === m) {
            l.value = m;
            return;
          }
        } else if (i.contains(m)) {
          l.value = m;
          return;
        }
        v ? ae(v) : Se(i, te.First | te.NoScroll) === Nt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (s = e.value) == null ? void 0 : s.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function Zn({ ownerDocument: e, container: t, containers: n, previousActiveElement: o }, l) {
  var a;
  Wt((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!l.value)
      return;
    let u = qt(n);
    g(t) instanceof HTMLElement && u.add(g(t));
    let i = o.value;
    if (!i)
      return;
    let d = r.target;
    d && d instanceof HTMLElement ? Kt(u, d) ? (o.value = d, ae(d)) : (r.preventDefault(), r.stopPropagation(), ae(i)) : ae(o.value);
  }, !0);
}
function Kt(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let We = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map();
function bt(e, t = y(!0)) {
  U((n) => {
    var o;
    if (!t.value)
      return;
    let l = g(e);
    if (!l)
      return;
    n(function() {
      var r;
      if (!l)
        return;
      let u = (r = ye.get(l)) != null ? r : 1;
      if (u === 1 ? ye.delete(l) : ye.set(l, u - 1), u !== 1)
        return;
      let i = We.get(l);
      i && (i["aria-hidden"] === null ? l.removeAttribute("aria-hidden") : l.setAttribute("aria-hidden", i["aria-hidden"]), l.inert = i.inert, We.delete(l));
    });
    let a = (o = ye.get(l)) != null ? o : 0;
    ye.set(l, a + 1), a === 0 && (We.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }), l.setAttribute("aria-hidden", "true"), l.inert = !0);
  });
}
let Qt = Symbol("ForcePortalRootContext");
function el() {
  return J(Qt, !1);
}
let Ke = I({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return Z(Qt, e.force), () => {
    let { force: o, ...l } = e;
    return A({ theirProps: l, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function tl(e) {
  let t = me(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n)
    return n;
  let o = t.createElement("div");
  return o.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(o);
}
let Yt = I({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let o = y(null), l = h(() => me(o)), a = el(), r = J(Xt, null), u = y(a === !0 || r == null ? tl(o.value) : r.resolveTarget());
  return U(() => {
    a || r != null && (u.value = r.resolveTarget());
  }), X(() => {
    var i, d;
    let s = (i = l.value) == null ? void 0 : i.getElementById("headlessui-portal-root");
    s && u.value === s && u.value.children.length <= 0 && ((d = u.value.parentElement) == null || d.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let i = { ref: o, "data-headlessui-portal": "" };
    return H(pn, { to: u.value }, A({ ourProps: i, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Xt = Symbol("PortalGroupContext"), nl = I({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let o = fn({ resolveTarget() {
    return e.target;
  } });
  return Z(Xt, o), () => {
    let { target: l, ...a } = e;
    return A({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), Jt = Symbol("StackContext");
var Qe = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Qe || {});
function ll() {
  return J(Jt, () => {
  });
}
function ol({ type: e, enabled: t, element: n, onUpdate: o }) {
  let l = ll();
  function a(...r) {
    o == null || o(...r), l(...r);
  }
  V(() => {
    re(t, (r, u) => {
      r ? a(0, e, n) : u === !0 && a(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), X(() => {
    t.value && a(1, e, n);
  }), Z(Jt, a);
}
let Zt = Symbol("DescriptionContext");
function al() {
  let e = J(Zt, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function rl({ slot: e = y({}), name: t = "Description", props: n = {} } = {}) {
  let o = y([]);
  function l(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return Z(Zt, { register: l, slot: e, name: t, props: n }), h(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
I({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${q()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = al();
  return V(() => X(o.register(e.id))), () => {
    let { name: l = "Description", slot: a = y({}), props: r = {} } = o, { id: u, ...i } = e, d = { ...Object.entries(r).reduce((s, [v, m]) => Object.assign(s, { [v]: z(m) }), {}), id: u };
    return A({ ourProps: d, theirProps: i, slot: a.value, attrs: t, slots: n, name: l });
  };
} });
function ul(e) {
  let t = hn(e.getSnapshot());
  return X(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Ve() {
  let e = [], t = { addEventListener(n, o, l, a) {
    return n.addEventListener(o, l, a), t.add(() => n.removeEventListener(o, l, a));
  }, requestAnimationFrame(...n) {
    let o = requestAnimationFrame(...n);
    t.add(() => cancelAnimationFrame(o));
  }, nextFrame(...n) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let o = setTimeout(...n);
    t.add(() => clearTimeout(o));
  }, style(n, o, l) {
    let a = n.style.getPropertyValue(o);
    return Object.assign(n.style, { [o]: l }), this.add(() => {
      Object.assign(n.style, { [o]: a });
    });
  }, group(n) {
    let o = Ve();
    return n(o), this.add(() => o.dispose());
  }, add(n) {
    return e.push(n), () => {
      let o = e.indexOf(n);
      if (o >= 0)
        for (let l of e.splice(o, 1))
          l();
    };
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return t;
}
function il(e, t) {
  let n = e(), o = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(l) {
    return o.add(l), () => o.delete(l);
  }, dispatch(l, ...a) {
    let r = t[l].call(n, ...a);
    r && (n = r, o.forEach((u) => u()));
  } };
}
function sl() {
  let e;
  return { before({ doc: t }) {
    var n;
    let o = t.documentElement;
    e = ((n = t.defaultView) != null ? n : window).innerWidth - o.clientWidth;
  }, after({ doc: t, d: n }) {
    let o = t.documentElement, l = o.clientWidth - o.offsetWidth, a = e - l;
    n.style(o, "paddingRight", `${a}px`);
  } };
}
function dl() {
  if (!Ht())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: n, meta: o }) {
    function l(r) {
      return o.containers.flatMap((u) => u()).some((u) => u.contains(r));
    }
    n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    n.addEventListener(t, "click", (r) => {
      if (r.target instanceof HTMLElement)
        try {
          let u = r.target.closest("a");
          if (!u)
            return;
          let { hash: i } = new URL(u.href), d = t.querySelector(i);
          d && !l(d) && (a = d);
        } catch {
        }
    }, !0), n.addEventListener(t, "touchmove", (r) => {
      r.target instanceof HTMLElement && !l(r.target) && r.preventDefault();
    }, { passive: !1 }), n.add(() => {
      window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
    });
  } };
}
function cl() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function pl(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let fe = il(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let o = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Ve(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(t), this.set(e, o), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let o = { doc: e, d: t, meta: pl(n) }, l = [dl(), sl(), cl()];
  l.forEach(({ before: a }) => a == null ? void 0 : a(o)), l.forEach(({ after: a }) => a == null ? void 0 : a(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
fe.subscribe(() => {
  let e = fe.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let o = t.get(n.doc) === "hidden", l = n.count !== 0;
    (l && !o || !l && o) && fe.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && fe.dispatch("TEARDOWN", n);
  }
});
function fl(e, t, n) {
  let o = ul(fe), l = h(() => {
    let a = e.value ? o.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return re([e, t], ([a, r], [u], i) => {
    if (!a || !r)
      return;
    fe.dispatch("PUSH", a, n);
    let d = !1;
    i(() => {
      d || (fe.dispatch("POP", u != null ? u : a, n), d = !0);
    });
  }, { immediate: !0 }), l;
}
var vl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(vl || {});
let Ye = Symbol("DialogContext");
function Ce(e) {
  let t = J(Ye, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ce), n;
  }
  return t;
}
let ke = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
I({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: ke }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${q()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  var a;
  let r = y(!1);
  V(() => {
    r.value = !0;
  });
  let u = y(0), i = Ie(), d = h(() => e.open === ke && i !== null ? (i.value & j.Open) === j.Open : e.open), s = y(null), v = y(null), m = h(() => me(s));
  if (l({ el: s, $el: s }), !(e.open !== ke || i !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === ke ? void 0 : e.open}`);
  let p = h(() => r.value && d.value ? 0 : 1), f = h(() => p.value === 0), c = h(() => u.value > 1), b = J(Ye, null) !== null, w = h(() => c.value ? "parent" : "leaf"), F = h(() => i !== null ? (i.value & j.Closing) === j.Closing : !1), O = h(() => b || F.value ? !1 : f.value), Y = h(() => {
    var R, k, _;
    return (_ = Array.from((k = (R = m.value) == null ? void 0 : R.querySelectorAll("body > *")) != null ? k : []).find(($) => $.id === "headlessui-portal-root" ? !1 : $.contains(g(v)) && $ instanceof HTMLElement)) != null ? _ : null;
  });
  bt(Y, O);
  let G = h(() => c.value ? !0 : f.value), S = h(() => {
    var R, k, _;
    return (_ = Array.from((k = (R = m.value) == null ? void 0 : R.querySelectorAll("[data-headlessui-portal]")) != null ? k : []).find(($) => $.contains(g(v)) && $ instanceof HTMLElement)) != null ? _ : null;
  });
  bt(S, G), ol({ type: "Dialog", enabled: h(() => p.value === 0), element: s, onUpdate: (R, k) => {
    if (k === "Dialog")
      return M(R, { [Qe.Add]: () => u.value += 1, [Qe.Remove]: () => u.value -= 1 });
  } });
  let P = rl({ name: "DialogDescription", slot: h(() => ({ open: d.value })) }), E = y(null), x = { titleId: E, panelRef: y(null), dialogState: p, setTitleId(R) {
    E.value !== R && (E.value = R);
  }, close() {
    t("close", !1);
  } };
  Z(Ye, x);
  function D() {
    var R, k, _;
    return [...Array.from((k = (R = m.value) == null ? void 0 : R.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? k : []).filter(($) => !($ === document.body || $ === document.head || !($ instanceof HTMLElement) || $.contains(g(v)) || x.panelRef.value && $.contains(x.panelRef.value))), (_ = x.panelRef.value) != null ? _ : s.value];
  }
  let N = h(() => !(!f.value || c.value));
  ut(() => D(), (R, k) => {
    x.close(), W(() => k == null ? void 0 : k.focus());
  }, N);
  let se = h(() => !(c.value || p.value !== 0));
  Wt((a = m.value) == null ? void 0 : a.defaultView, "keydown", (R) => {
    se.value && (R.defaultPrevented || R.key === T.Escape && (R.preventDefault(), R.stopPropagation(), x.close()));
  });
  let ee = h(() => !(F.value || p.value !== 0 || b));
  return fl(m, ee, (R) => {
    var k;
    return { containers: [...(k = R.containers) != null ? k : [], D] };
  }), U((R) => {
    if (p.value !== 0)
      return;
    let k = g(s);
    if (!k)
      return;
    let _ = new ResizeObserver(($) => {
      for (let De of $) {
        let de = De.target.getBoundingClientRect();
        de.x === 0 && de.y === 0 && de.width === 0 && de.height === 0 && x.close();
      }
    });
    _.observe(k), R(() => _.disconnect());
  }), () => {
    let { id: R, open: k, initialFocus: _, ...$ } = e, De = { ...n, ref: s, id: R, role: "dialog", "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": E.value, "aria-describedby": P.value }, de = { open: p.value === 0 };
    return H(Ke, { force: !0 }, () => [H(Yt, () => H(nl, { target: s.value }, () => H(Ke, { force: !1 }, () => H(ge, { initialFocus: _, containers: D, features: f.value ? M(w.value, { parent: ge.features.RestoreFocus, leaf: ge.features.All & ~ge.features.FocusLock }) : ge.features.None }, () => A({ ourProps: De, theirProps: $, slot: de, attrs: n, slots: o, visible: p.value === 0, features: ne.RenderStrategy | ne.Static, name: "Dialog" }))))), H(Ne, { features: Te.Hidden, ref: v })]);
  };
} });
I({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${q()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Ce("DialogOverlay");
  function l(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return A({ ourProps: { id: a, "aria-hidden": !0, onClick: l }, theirProps: r, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
I({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${q()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Ce("DialogBackdrop"), a = y(null);
  return o({ el: a, $el: a }), V(() => {
    if (l.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...u } = e, i = { id: r, ref: a, "aria-hidden": !0 };
    return H(Ke, { force: !0 }, () => H(Yt, () => A({ ourProps: i, theirProps: { ...t, ...u }, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
I({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${q()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Ce("DialogPanel");
  o({ el: l.panelRef, $el: l.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...u } = e, i = { id: r, ref: l.panelRef, onClick: a };
    return A({ ourProps: i, theirProps: u, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} });
I({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${q()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Ce("DialogTitle");
  return V(() => {
    o.setTitleId(e.id), X(() => o.setTitleId(null));
  }), () => {
    let { id: l, ...a } = e;
    return A({ ourProps: { id: l }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
var ml = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ml || {}), bl = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(bl || {});
function hl(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let en = Symbol("MenuContext");
function Be(e) {
  let t = J(en, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Be), n;
  }
  return t;
}
I({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let o = y(1), l = y(null), a = y(null), r = y([]), u = y(""), i = y(null), d = y(1);
  function s(m = (p) => p) {
    let p = i.value !== null ? r.value[i.value] : null, f = rt(m(r.value.slice()), (b) => g(b.dataRef.domRef)), c = p ? f.indexOf(p) : null;
    return c === -1 && (c = null), { items: f, activeItemIndex: c };
  }
  let v = { menuState: o, buttonRef: l, itemsRef: a, items: r, searchQuery: u, activeItemIndex: i, activationTrigger: d, closeMenu: () => {
    o.value = 1, i.value = null;
  }, openMenu: () => o.value = 0, goToItem(m, p, f) {
    let c = s(), b = kt(m === C.Specific ? { focus: C.Specific, id: p } : { focus: m }, { resolveItems: () => c.items, resolveActiveIndex: () => c.activeItemIndex, resolveId: (w) => w.id, resolveDisabled: (w) => w.dataRef.disabled });
    u.value = "", i.value = b, d.value = f != null ? f : 1, r.value = c.items;
  }, search(m) {
    let p = u.value !== "" ? 0 : 1;
    u.value += m.toLowerCase();
    let f = (i.value !== null ? r.value.slice(i.value + p).concat(r.value.slice(0, i.value + p)) : r.value).find((b) => b.dataRef.textValue.startsWith(u.value) && !b.dataRef.disabled), c = f ? r.value.indexOf(f) : -1;
    c === -1 || c === i.value || (i.value = c, d.value = 1);
  }, clearSearch() {
    u.value = "";
  }, registerItem(m, p) {
    let f = s((c) => [...c, { id: m, dataRef: p }]);
    r.value = f.items, i.value = f.activeItemIndex, d.value = 1;
  }, unregisterItem(m) {
    let p = s((f) => {
      let c = f.findIndex((b) => b.id === m);
      return c !== -1 && f.splice(c, 1), f;
    });
    r.value = p.items, i.value = p.activeItemIndex, d.value = 1;
  } };
  return ut([l, a], (m, p) => {
    var f;
    v.closeMenu(), at(p, ot.Loose) || (m.preventDefault(), (f = g(l)) == null || f.focus());
  }, h(() => o.value === 0)), Z(en, v), lt(h(() => M(o.value, { [0]: j.Open, [1]: j.Closed }))), () => {
    let m = { open: o.value === 0, close: v.closeMenu };
    return A({ ourProps: {}, theirProps: e, slot: m, slots: t, attrs: n, name: "Menu" });
  };
} });
I({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${q()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Be("MenuButton");
  o({ el: l.buttonRef, $el: l.buttonRef });
  function a(d) {
    switch (d.key) {
      case T.Space:
      case T.Enter:
      case T.ArrowDown:
        d.preventDefault(), d.stopPropagation(), l.openMenu(), W(() => {
          var s;
          (s = g(l.itemsRef)) == null || s.focus({ preventScroll: !0 }), l.goToItem(C.First);
        });
        break;
      case T.ArrowUp:
        d.preventDefault(), d.stopPropagation(), l.openMenu(), W(() => {
          var s;
          (s = g(l.itemsRef)) == null || s.focus({ preventScroll: !0 }), l.goToItem(C.Last);
        });
        break;
    }
  }
  function r(d) {
    switch (d.key) {
      case T.Space:
        d.preventDefault();
        break;
    }
  }
  function u(d) {
    e.disabled || (l.menuState.value === 0 ? (l.closeMenu(), W(() => {
      var s;
      return (s = g(l.buttonRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), l.openMenu(), hl(() => {
      var s;
      return (s = g(l.itemsRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    })));
  }
  let i = At(h(() => ({ as: e.as, type: t.type })), l.buttonRef);
  return () => {
    var d;
    let s = { open: l.menuState.value === 0 }, { id: v, ...m } = e, p = { ref: l.buttonRef, id: v, type: i.value, "aria-haspopup": "menu", "aria-controls": (d = g(l.itemsRef)) == null ? void 0 : d.id, "aria-expanded": e.disabled ? void 0 : l.menuState.value === 0, onKeydown: a, onKeyup: r, onClick: u };
    return A({ ourProps: p, theirProps: m, slot: s, attrs: t, slots: n, name: "MenuButton" });
  };
} });
I({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-menu-items-${q()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Be("MenuItems"), a = y(null);
  o({ el: l.itemsRef, $el: l.itemsRef }), Lt({ container: h(() => g(l.itemsRef)), enabled: h(() => l.menuState.value === 0), accept(s) {
    return s.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : s.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s) {
    s.setAttribute("role", "none");
  } });
  function r(s) {
    var v;
    switch (a.value && clearTimeout(a.value), s.key) {
      case T.Space:
        if (l.searchQuery.value !== "")
          return s.preventDefault(), s.stopPropagation(), l.search(s.key);
      case T.Enter:
        if (s.preventDefault(), s.stopPropagation(), l.activeItemIndex.value !== null) {
          let m = l.items.value[l.activeItemIndex.value];
          (v = g(m.dataRef.domRef)) == null || v.click();
        }
        l.closeMenu(), Mt(g(l.buttonRef));
        break;
      case T.ArrowDown:
        return s.preventDefault(), s.stopPropagation(), l.goToItem(C.Next);
      case T.ArrowUp:
        return s.preventDefault(), s.stopPropagation(), l.goToItem(C.Previous);
      case T.Home:
      case T.PageUp:
        return s.preventDefault(), s.stopPropagation(), l.goToItem(C.First);
      case T.End:
      case T.PageDown:
        return s.preventDefault(), s.stopPropagation(), l.goToItem(C.Last);
      case T.Escape:
        s.preventDefault(), s.stopPropagation(), l.closeMenu(), W(() => {
          var m;
          return (m = g(l.buttonRef)) == null ? void 0 : m.focus({ preventScroll: !0 });
        });
        break;
      case T.Tab:
        s.preventDefault(), s.stopPropagation(), l.closeMenu(), W(() => _n(g(l.buttonRef), s.shiftKey ? te.Previous : te.Next));
        break;
      default:
        s.key.length === 1 && (l.search(s.key), a.value = setTimeout(() => l.clearSearch(), 350));
        break;
    }
  }
  function u(s) {
    switch (s.key) {
      case T.Space:
        s.preventDefault();
        break;
    }
  }
  let i = Ie(), d = h(() => i !== null ? (i.value & j.Open) === j.Open : l.menuState.value === 0);
  return () => {
    var s, v;
    let m = { open: l.menuState.value === 0 }, { id: p, ...f } = e, c = { "aria-activedescendant": l.activeItemIndex.value === null || (s = l.items.value[l.activeItemIndex.value]) == null ? void 0 : s.id, "aria-labelledby": (v = g(l.buttonRef)) == null ? void 0 : v.id, id: p, onKeydown: r, onKeyup: u, role: "menu", tabIndex: 0, ref: l.itemsRef };
    return A({ ourProps: c, theirProps: f, slot: m, attrs: t, slots: n, features: ne.RenderStrategy | ne.Static, visible: d.value, name: "MenuItems" });
  };
} });
I({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-menu-item-${q()}` } }, setup(e, { slots: t, attrs: n, expose: o }) {
  let l = Be("MenuItem"), a = y(null);
  o({ el: a, $el: a });
  let r = h(() => l.activeItemIndex.value !== null ? l.items.value[l.activeItemIndex.value].id === e.id : !1), u = h(() => ({ disabled: e.disabled, textValue: "", domRef: a }));
  V(() => {
    var f, c;
    let b = (c = (f = g(a)) == null ? void 0 : f.textContent) == null ? void 0 : c.toLowerCase().trim();
    b !== void 0 && (u.value.textValue = b);
  }), V(() => l.registerItem(e.id, u)), X(() => l.unregisterItem(e.id)), U(() => {
    l.menuState.value === 0 && r.value && l.activationTrigger.value !== 0 && W(() => {
      var f, c;
      return (c = (f = g(a)) == null ? void 0 : f.scrollIntoView) == null ? void 0 : c.call(f, { block: "nearest" });
    });
  });
  function i(f) {
    if (e.disabled)
      return f.preventDefault();
    l.closeMenu(), Mt(g(l.buttonRef));
  }
  function d() {
    if (e.disabled)
      return l.goToItem(C.Nothing);
    l.goToItem(C.Specific, e.id);
  }
  let s = $t();
  function v(f) {
    s.update(f);
  }
  function m(f) {
    s.wasMoved(f) && (e.disabled || r.value || l.goToItem(C.Specific, e.id, 0));
  }
  function p(f) {
    s.wasMoved(f) && (e.disabled || r.value && l.goToItem(C.Nothing));
  }
  return () => {
    let { disabled: f } = e, c = { active: r.value, disabled: f, close: l.closeMenu }, { id: b, ...w } = e;
    return A({ ourProps: { id: b, ref: a, role: "menuitem", tabIndex: f === !0 ? void 0 : -1, "aria-disabled": f === !0 ? !0 : void 0, disabled: void 0, onClick: i, onFocus: d, onPointerenter: v, onMouseenter: v, onPointermove: m, onMousemove: m, onPointerleave: p, onMouseleave: p }, theirProps: { ...n, ...w }, slot: c, attrs: n, slots: t, name: "MenuItem" });
  };
} });
function gl(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function ze(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Fe(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Xe = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Xe || {});
function yl(e, t) {
  let n = Ve();
  if (!e)
    return n.dispose;
  let { transitionDuration: o, transitionDelay: l } = getComputedStyle(e), [a, r] = [o, l].map((u) => {
    let [i = 0] = u.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, s) => s - d);
    return i;
  });
  return a !== 0 ? n.setTimeout(() => t("finished"), a + r) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function ht(e, t, n, o, l, a) {
  let r = Ve(), u = a !== void 0 ? gl(a) : () => {
  };
  return Fe(e, ...l), ze(e, ...t, ...n), r.nextFrame(() => {
    Fe(e, ...n), ze(e, ...o), r.add(yl(e, (i) => (Fe(e, ...o, ...t), ze(e, ...l), u(i))));
  }), r.add(() => Fe(e, ...t, ...n, ...o, ...l)), r.add(() => u("cancelled")), r.dispose;
}
function ce(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let it = Symbol("TransitionContext");
var wl = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(wl || {});
function xl() {
  return J(it, null) !== null;
}
function Sl() {
  let e = J(it, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Ol() {
  let e = J(st, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let st = Symbol("NestingContext");
function _e(e) {
  return "children" in e ? _e(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function tn(e) {
  let t = y([]), n = y(!1);
  V(() => n.value = !0), X(() => n.value = !1);
  function o(a, r = oe.Hidden) {
    let u = t.value.findIndex(({ id: i }) => i === a);
    u !== -1 && (M(r, { [oe.Unmount]() {
      t.value.splice(u, 1);
    }, [oe.Hidden]() {
      t.value[u].state = "hidden";
    } }), !_e(t) && n.value && (e == null || e()));
  }
  function l(a) {
    let r = t.value.find(({ id: u }) => u === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => o(a, oe.Unmount);
  }
  return { children: t, register: l, unregister: o };
}
let nn = ne.RenderStrategy, El = I({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  let a = y(0);
  function r() {
    a.value |= j.Opening, t("beforeEnter");
  }
  function u() {
    a.value &= ~j.Opening, t("afterEnter");
  }
  function i() {
    a.value |= j.Closing, t("beforeLeave");
  }
  function d() {
    a.value &= ~j.Closing, t("afterLeave");
  }
  if (!xl() && An())
    return () => H(Tl, { ...e, onBeforeEnter: r, onAfterEnter: u, onBeforeLeave: i, onAfterLeave: d }, o);
  let s = y(null), v = y("visible"), m = h(() => e.unmount ? oe.Unmount : oe.Hidden);
  l({ el: s, $el: s });
  let { show: p, appear: f } = Sl(), { register: c, unregister: b } = Ol(), w = { value: !0 }, F = q(), O = { value: !1 }, Y = tn(() => {
    !O.value && v.value !== "hidden" && (v.value = "hidden", b(F), d());
  });
  V(() => {
    let ee = c(F);
    X(ee);
  }), U(() => {
    if (m.value === oe.Hidden && F) {
      if (p && v.value !== "visible") {
        v.value = "visible";
        return;
      }
      M(v.value, { hidden: () => b(F), visible: () => c(F) });
    }
  });
  let G = ce(e.enter), S = ce(e.enterFrom), P = ce(e.enterTo), E = ce(e.entered), x = ce(e.leave), D = ce(e.leaveFrom), N = ce(e.leaveTo);
  V(() => {
    U(() => {
      if (v.value === "visible") {
        let ee = g(s);
        if (ee instanceof Comment && ee.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function se(ee) {
    let R = w.value && !f.value, k = g(s);
    !k || !(k instanceof HTMLElement) || R || (O.value = !0, p.value && r(), p.value || i(), ee(p.value ? ht(k, G, S, P, E, (_) => {
      O.value = !1, _ === Xe.Finished && u();
    }) : ht(k, x, D, N, E, (_) => {
      O.value = !1, _ === Xe.Finished && (_e(Y) || (v.value = "hidden", b(F), d()));
    })));
  }
  return V(() => {
    re([p], (ee, R, k) => {
      se(k), w.value = !1;
    }, { immediate: !0 });
  }), Z(st, Y), lt(h(() => M(v.value, { visible: j.Open, hidden: j.Closed }) | a.value)), () => {
    let { appear: ee, show: R, enter: k, enterFrom: _, enterTo: $, entered: De, leave: de, leaveFrom: yo, leaveTo: wo, ...dt } = e, dn = { ref: s }, cn = { ...dt, ...f && p && Re.isServer ? { class: It([n.class, dt.class, ...G, ...S]) } : {} };
    return A({ theirProps: cn, ourProps: dn, slot: {}, slots: o, attrs: n, features: nn, visible: v.value === "visible", name: "TransitionChild" });
  };
} }), Pl = El, Tl = I({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o }) {
  let l = Ie(), a = h(() => e.show === null && l !== null ? (l.value & j.Open) === j.Open : e.show);
  U(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = y(a.value ? "visible" : "hidden"), u = tn(() => {
    r.value = "hidden";
  }), i = y(!0), d = { show: a, appear: h(() => e.appear || !i.value) };
  return V(() => {
    U(() => {
      i.value = !1, a.value ? r.value = "visible" : _e(u) || (r.value = "hidden");
    });
  }), Z(st, u), Z(it, d), () => {
    let s = Me(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), v = { unmount: e.unmount };
    return A({ ourProps: { ...v, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [H(Pl, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...v, ...s }, o.default)] }, attrs: {}, features: nn, visible: r.value === "visible", name: "Transition" });
  };
} });
var gt;
const Il = typeof window < "u";
Il && ((gt = window == null ? void 0 : window.navigator) == null ? void 0 : gt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Rl(e) {
  return e;
}
const Je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ze = "__vueuse_ssr_handlers__";
Je[Ze] = Je[Ze] || {};
Je[Ze];
var yt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(yt || (yt = {}));
var Cl = Object.defineProperty, wt = Object.getOwnPropertySymbols, Dl = Object.prototype.hasOwnProperty, kl = Object.prototype.propertyIsEnumerable, xt = (e, t, n) => t in e ? Cl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Fl = (e, t) => {
  for (var n in t || (t = {}))
    Dl.call(t, n) && xt(e, n, t[n]);
  if (wt)
    for (var n of wt(t))
      kl.call(t, n) && xt(e, n, t[n]);
  return e;
};
const Al = {
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
Fl({
  linear: Rl
}, Al);
const Ll = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
function Nl(e, t) {
  return h({
    get: () => e.modelValue,
    set: (n) => t("update:modelValue", n)
  });
}
const jl = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, Ml = { name: "Error" }, ln = /* @__PURE__ */ I({
  ...Ml,
  props: {
    error: null
  },
  setup(e) {
    return (t, n) => e.error ? (B(), Q("div", jl, [
      be(t.$slots, "default", {}, () => [
        tt(je(e.error), 1)
      ])
    ])) : Oe("", !0);
  }
}), Vl = { name: "Actions" }, Bl = { class: "mt-8 border-t border-gray-200 pt-5" }, _l = { class: "flex justify-end" }, $l = { class: "inline-flex rounded-md shadow-sm" };
function Hl(e, t, n, o, l, a) {
  return B(), Q("div", Bl, [
    le("div", _l, [
      le("span", $l, [
        be(e.$slots, "default")
      ])
    ])
  ]);
}
const Ul = /* @__PURE__ */ Ll(Vl, [["render", Hl]]), Wl = { class: "relative flex items-start" }, zl = { class: "flex h-5 items-center" }, ql = ["id", "value"], Gl = { class: "ml-3" }, Kl = ["for"], Ql = { name: "Checkbox" }, Yl = /* @__PURE__ */ I({
  ...Ql,
  props: {
    modelValue: { type: [Array, Boolean] },
    id: null,
    placeholder: null,
    description: null,
    error: null,
    label: null,
    value: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = Nl(e, t);
    return (o, l) => (B(), Q(ie, null, [
      le("div", Wl, [
        le("div", zl, [
          qe(le("input", Ee({
            id: e.id,
            "onUpdate:modelValue": l[0] || (l[0] = (a) => Rt(n) ? n.value = a : null),
            value: e.value,
            type: "checkbox",
            class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          }, o.$attrs), null, 16, ql), [
            [bn, z(n)]
          ]),
          le("div", Gl, [
            le("label", {
              for: e.id,
              class: "block text-sm font-medium capitalize leading-5 text-gray-700"
            }, je(e.label), 9, Kl)
          ])
        ])
      ]),
      e.error ? (B(), ve(ln, {
        key: 0,
        error: e.error
      }, null, 8, ["error"])) : Oe("", !0)
    ], 64));
  }
}), Xl = ["for"], Jl = { name: "Label" }, Zl = /* @__PURE__ */ I({
  ...Jl,
  props: {
    for: null
  },
  setup(e) {
    const t = e;
    return (n, o) => (B(), Q("label", {
      for: t.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      be(n.$slots, "default")
    ], 8, Xl));
  }
}), on = /* @__PURE__ */ I({
  __name: "Element",
  props: {
    element: null,
    form: null
  },
  setup(e) {
    var r;
    const t = e, n = () => {
      let u = Object.entries({
        ...t.element.definition,
        ...t.element.definition.props,
        schema: t.element.definition.schema,
        form: t.form,
        id: t.element.name
      }), i = t.element.definition.component.props;
      return Object.fromEntries(u.filter(([d]) => i.hasOwnProperty(d)));
    }, o = () => {
      var i;
      return ((i = t.element.definition.label) != null ? i : t.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }, l = !!t.element.definition.schema, a = (r = t.element.definition.showLabel) != null ? r : !l;
    return (u, i) => (B(), Q("div", null, [
      z(a) ? (B(), ve(z(Zl), {
        key: 0,
        for: e.element.name
      }, {
        default: Le(() => [
          tt(je(o()), 1)
        ]),
        _: 1
      }, 8, ["for"])) : Oe("", !0),
      (B(), ve(gn(e.element.definition.component), Ee({
        key: e.element.name,
        modelValue: e.form[e.element.name],
        "onUpdate:modelValue": i[0] || (i[0] = (d) => e.form[e.element.name] = d)
      }, n()), null, 16, ["modelValue"])),
      Pe(z(ln), {
        error: e.form.errors[e.element.name]
      }, null, 8, ["error"])
    ]));
  }
}), eo = { class: "mx-auto mt-6 max-w-md space-y-6" }, Oo = /* @__PURE__ */ I({
  __name: "FormBuilder",
  props: {
    schema: null,
    submit: { default: "Save" }
  },
  setup(e) {
    return (t, n) => (B(), Q("div", eo, [
      (B(!0), Q(ie, null, nt(e.schema.elements, (o) => (B(), ve(on, {
        element: o,
        form: e.schema.form
      }, null, 8, ["element", "form"]))), 256)),
      Pe(z(Ul), null, {
        default: Le(() => [
          be(t.$slots, "actions", {
            form: e.schema.form
          }, () => [
            Pe(z(In), {
              loading: e.schema.form.processing,
              type: "submit"
            }, {
              default: Le(() => [
                tt(je(e.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 3
      })
    ]));
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const to = () => {
}, no = Object.assign, lo = Array.isArray, oo = (e) => typeof e == "function", ao = (e) => typeof e == "symbol";
let ro;
function uo(e, t = ro) {
  t && t.active && t.effects.push(e);
}
const St = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, an = (e) => (e.w & ue) > 0, rn = (e) => (e.n & ue) > 0, io = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ue;
}, so = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const l = t[o];
      an(l) && !rn(l) ? l.delete(e) : t[n++] = l, l.w &= ~ue, l.n &= ~ue;
    }
    t.length = n;
  }
};
let xe = 0, ue = 1;
const et = 30;
let K;
Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class co {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, uo(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = K, n = Ae;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = K, K = this, Ae = !0, ue = 1 << ++xe, xe <= et ? io(this) : Ot(this), this.fn();
    } finally {
      xe <= et && so(this), ue = 1 << --xe, K = this.parent, Ae = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    K === this ? this.deferStop = !0 : this.active && (Ot(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ot(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ae = !0;
function Et(e, t) {
  let n = !1;
  xe <= et ? rn(e) || (e.n |= ue, n = !an(e)) : n = !e.has(K), n && (e.add(K), K.deps.push(e), process.env.NODE_ENV !== "production" && K.onTrack && K.onTrack(Object.assign({ effect: K }, t)));
}
function Pt(e, t) {
  const n = lo(e) ? e : [...e];
  for (const o of n)
    o.computed && Tt(o, t);
  for (const o of n)
    o.computed || Tt(o, t);
}
function Tt(e, t) {
  (e !== K || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(no({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ao)
);
function $e(e) {
  const t = e && e.__v_raw;
  return t ? $e(t) : e;
}
function po(e) {
  Ae && K && (e = $e(e), process.env.NODE_ENV !== "production" ? Et(e.dep || (e.dep = St()), {
    target: e,
    type: "get",
    key: "value"
  }) : Et(e.dep || (e.dep = St())));
}
function fo(e, t) {
  e = $e(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? Pt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Pt(n));
}
var un;
class vo {
  constructor(t, n, o, l) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[un] = !1, this._dirty = !0, this.effect = new co(t, () => {
      this._dirty || (this._dirty = !0, fo(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !l, this.__v_isReadonly = o;
  }
  get value() {
    const t = $e(this);
    return po(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
un = "__v_isReadonly";
function mo(e, t, n = !1) {
  let o, l;
  const a = oo(e);
  a ? (o = e, l = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : to) : (o = e.get, l = e.set);
  const r = new vo(o, l, a || !l, n);
  return process.env.NODE_ENV !== "production" && t && !n && (r.effect.onTrack = t.onTrack, r.effect.onTrigger = t.onTrigger), r;
}
const bo = /* @__PURE__ */ I({
  __name: "CheckboxGroup",
  props: {
    modelValue: null,
    items: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = mo({
      get: () => n.modelValue,
      set: (l) => {
        t("update:modelValue", l);
      }
    });
    return (l, a) => (B(!0), Q(ie, null, nt(e.items, (r) => {
      var u, i, d;
      return B(), ve(z(Yl), {
        value: (u = r.value) != null ? u : r,
        label: (i = r.label) != null ? i : r,
        id: (d = r.label) != null ? d : r,
        modelValue: z(o),
        "onUpdate:modelValue": a[0] || (a[0] = (s) => Rt(o) ? o.value = s : null)
      }, null, 8, ["value", "label", "id", "modelValue"]);
    }), 256));
  }
}), ho = (e) => Object.keys(e).reduce((t, n) => {
  var o;
  return t[n] = (o = e[n].value) != null ? o : null, t;
}, {}), sn = (e) => Object.entries(e).map(([t, n]) => {
  const o = n.hasOwnProperty("setup") ? { component: n } : n;
  return {
    name: t,
    definition: o
  };
});
function Eo(e) {
  const t = wn(
    Object.keys(e).reduce((n, o) => {
      var l, a;
      return e[o].schema ? { ...n, ...ho(e[o].schema) } : e[o].component === bo ? (n[o] = (l = e[o].checked) != null ? l : [], n) : (n[o] = (a = e[o].value) != null ? a : null, n);
    }, {})
  );
  return {
    elements: sn(e),
    form: t
  };
}
const go = { class: "grid grid-flow-col gap-x-4 gap-y-6" }, Po = /* @__PURE__ */ I({
  __name: "Grid",
  props: {
    schema: null,
    form: null
  },
  setup(e) {
    const n = sn(e.schema);
    return (o, l) => (B(), Q("div", go, [
      (B(!0), Q(ie, null, nt(z(n), (a) => (B(), ve(on, Ee({
        element: a,
        form: e.form
      }, o.$attrs), null, 16, ["element", "form"]))), 256))
    ]));
  }
});
export {
  bo as CheckboxGroup,
  Oo as FormBuilder,
  Po as Grid,
  Eo as useSchema
};
