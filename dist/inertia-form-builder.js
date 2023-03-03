import { defineComponent as $, ref as h, computed as b, toRaw as V, provide as oe, onMounted as W, watch as ce, h as G, Fragment as ee, watchEffect as Q, onUnmounted as re, nextTick as Y, inject as ae, Teleport as nl, reactive as al, unref as A, normalizeClass as ve, cloneVNode as ol, openBlock as y, createBlock as H, normalizeProps as at, guardReactiveProps as ot, withCtx as te, withDirectives as pe, createElementVNode as F, mergeProps as le, isRef as Oe, createElementBlock as T, toDisplayString as J, createCommentVNode as q, renderSlot as se, renderList as Se, vModelSelect as rl, createVNode as _, vModelCheckbox as ul, vModelDynamic as il, createTextVNode as Fe, vModelText as Et, vShow as Be, shallowRef as sl, resolveDynamicComponent as bt } from "vue";
import { Link as Tt, useForm as dl } from "@inertiajs/vue3";
const cl = /* @__PURE__ */ F("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), pl = /* @__PURE__ */ F("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), vl = [
  cl,
  pl
], fl = { name: "Spinner" }, Ue = /* @__PURE__ */ Object.assign(fl, {
  props: {
    textClass: {
      type: String,
      default: "text-white"
    }
  },
  setup(e) {
    return (l, n) => (y(), T("svg", {
      class: ve(["h-5 w-5 animate-spin", e.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, vl, 2));
  }
}), ml = ["disabled", "type"], bl = { name: "PrimaryButton" }, gl = /* @__PURE__ */ Object.assign(bl, {
  props: {
    loading: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const l = e, n = b(() => ["button", "submit"].includes(l.type)), a = [
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
    return (t, o) => (y(), T(ee, null, [
      A(n) ? q("", !0) : (y(), H(A(Tt), le({
        key: 0,
        class: a,
        disabled: e.loading
      }, t.$attrs), {
        default: te(() => [
          se(t.$slots, "default"),
          pe(_(Ue, { class: "ml-3" }, null, 512), [
            [Be, e.loading]
          ])
        ]),
        _: 3
      }, 16, ["disabled"])),
      A(n) ? (y(), T("button", le({
        key: 1,
        class: a,
        disabled: e.loading,
        type: e.type
      }, t.$attrs), [
        se(t.$slots, "default"),
        pe(_(Ue, { class: "ml-3" }, null, 512), [
          [Be, e.loading]
        ])
      ], 16, ml)) : q("", !0)
    ], 64));
  }
}), hl = ["disabled", "type"], yl = { name: "SecondaryButton" }, xl = /* @__PURE__ */ Object.assign(yl, {
  props: {
    loading: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: null
    }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const n = e, a = b(() => ["button", "submit"].includes(n.type)), t = [
      "relative",
      "inline-flex",
      "items-center",
      "rounded-md",
      "border",
      "border-gray-300",
      "bg-white",
      "px-4",
      "py-2",
      "text-sm",
      "font-medium",
      "leading-5",
      "text-gray-700",
      "hover:bg-gray-50",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-indigo-500",
      "focus:ring-offset-2"
    ];
    return (o, r) => (y(), T(ee, null, [
      A(a) ? q("", !0) : (y(), H(A(Tt), le({
        key: 0,
        class: t,
        disabled: e.loading
      }, o.$attrs), {
        default: te(() => [
          se(o.$slots, "default"),
          pe(_(Ue, {
            class: "ml-3",
            "text-class": "text-gray-400"
          }, null, 512), [
            [Be, e.loading]
          ])
        ]),
        _: 3
      }, 16, ["disabled"])),
      A(a) ? (y(), T("button", le({
        key: 1,
        onClick: r[0] || (r[0] = (u) => l("click")),
        class: t,
        disabled: e.loading,
        type: e.type
      }, o.$attrs), [
        se(o.$slots, "default"),
        pe(_(Ue, {
          class: "ml-3",
          "text-class": "text-gray-400"
        }, null, 512), [
          [Be, e.loading]
        ])
      ], 16, hl)) : q("", !0)
    ], 64));
  }
});
function wl(e, l) {
  return y(), T("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    F("path", {
      "fill-rule": "evenodd",
      d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Sl(e, l) {
  return y(), T("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    F("path", {
      "fill-rule": "evenodd",
      d: "M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z",
      "clip-rule": "evenodd"
    })
  ]);
}
function U(e, l, ...n) {
  if (e in l) {
    let t = l[e];
    return typeof t == "function" ? t(...n) : t;
  }
  let a = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(l).map((t) => `"${t}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(a, U), a;
}
var de = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(de || {}), fe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(fe || {});
function N({ visible: e = !0, features: l = 0, ourProps: n, theirProps: a, ...t }) {
  var o;
  let r = kt(a, n), u = Object.assign(t, { props: r });
  if (e || l & 2 && r.static)
    return Ke(u);
  if (l & 1) {
    let i = (o = r.unmount) == null || o ? 0 : 1;
    return U(i, { [0]() {
      return null;
    }, [1]() {
      return Ke({ ...t, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ke(u);
}
function Ke({ props: e, attrs: l, slots: n, slot: a, name: t }) {
  var o, r;
  let { as: u, ...i } = qe(e, ["unmount", "static"]), d = (o = n.default) == null ? void 0 : o.call(n, a), s = {};
  if (a) {
    let f = !1, v = [];
    for (let [m, p] of Object.entries(a))
      typeof p == "boolean" && (f = !0), p === !0 && v.push(m);
    f && (s["data-headlessui-state"] = v.join(" "));
  }
  if (u === "template") {
    if (d = It(d != null ? d : []), Object.keys(i).length > 0 || Object.keys(l).length > 0) {
      let [f, ...v] = d != null ? d : [];
      if (!Pl(f) || v.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${t} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(i).concat(Object.keys(l)).map((c) => c.trim()).filter((c, g, w) => w.indexOf(c) === g).sort((c, g) => c.localeCompare(g)).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
      let m = kt((r = f.props) != null ? r : {}, i), p = ol(f, m);
      for (let c in m)
        c.startsWith("on") && (p.props || (p.props = {}), p.props[c] = m[c]);
      return p;
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return G(u, Object.assign({}, i, s), { default: () => d });
}
function It(e) {
  return e.flatMap((l) => l.type === ee ? It(l.children) : [l]);
}
function kt(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let l = {}, n = {};
  for (let a of e)
    for (let t in a)
      t.startsWith("on") && typeof a[t] == "function" ? (n[t] != null || (n[t] = []), n[t].push(a[t])) : l[t] = a[t];
  if (l.disabled || l["aria-disabled"])
    return Object.assign(l, Object.fromEntries(Object.keys(n).map((a) => [a, void 0])));
  for (let a in n)
    Object.assign(l, { [a](t, ...o) {
      let r = n[a];
      for (let u of r) {
        if (t instanceof Event && t.defaultPrevented)
          return;
        u(t, ...o);
      }
    } });
  return l;
}
function Ol(e) {
  let l = Object.assign({}, e);
  for (let n in l)
    l[n] === void 0 && delete l[n];
  return l;
}
function qe(e, l = []) {
  let n = Object.assign({}, e);
  for (let a of l)
    a in n && delete n[a];
  return n;
}
function Pl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let El = 0;
function Tl() {
  return ++El;
}
function X() {
  return Tl();
}
var C = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(C || {});
function Il(e) {
  throw new Error("Unexpected object: " + e);
}
var D = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(D || {});
function Rt(e, l) {
  let n = l.resolveItems();
  if (n.length <= 0)
    return null;
  let a = l.resolveActiveIndex(), t = a != null ? a : -1, o = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((r) => !l.resolveDisabled(r));
      case 1: {
        let r = n.slice().reverse().findIndex((u, i, d) => t !== -1 && d.length - i - 1 >= t ? !1 : !l.resolveDisabled(u));
        return r === -1 ? r : n.length - 1 - r;
      }
      case 2:
        return n.findIndex((r, u) => u <= t ? !1 : !l.resolveDisabled(r));
      case 3: {
        let r = n.slice().reverse().findIndex((u) => !l.resolveDisabled(u));
        return r === -1 ? r : n.length - 1 - r;
      }
      case 4:
        return n.findIndex((r) => l.resolveId(r) === e.id);
      case 5:
        return null;
      default:
        Il(e);
    }
  })();
  return o === -1 ? a : o;
}
function x(e) {
  var l;
  return e == null || e.value == null ? null : (l = e.value.$el) != null ? l : e.value;
}
let Ct = Symbol("Context");
var B = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(B || {});
function kl() {
  return De() !== null;
}
function De() {
  return ae(Ct, null);
}
function rt(e) {
  oe(Ct, e);
}
function gt(e, l) {
  if (e)
    return e;
  let n = l != null ? l : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function At(e, l) {
  let n = h(gt(e.value.type, e.value.as));
  return W(() => {
    n.value = gt(e.value.type, e.value.as);
  }), Q(() => {
    var a;
    n.value || x(l) && x(l) instanceof HTMLButtonElement && !((a = x(l)) != null && a.hasAttribute("type")) && (n.value = "button");
  }), n;
}
class Rl {
  constructor() {
    this.current = this.detect(), this.currentId = 0;
  }
  set(l) {
    this.current !== l && (this.currentId = 0, this.current = l);
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
let Le = new Rl();
function xe(e) {
  if (Le.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let l = x(e);
    if (l)
      return l.ownerDocument;
  }
  return document;
}
function Ft({ container: e, accept: l, walk: n, enabled: a }) {
  Q(() => {
    let t = e.value;
    if (!t || a !== void 0 && !a.value)
      return;
    let o = xe(e);
    if (!o)
      return;
    let r = Object.assign((i) => l(i), { acceptNode: l }), u = o.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; u.nextNode(); )
      n(u.currentNode);
  });
}
let Xe = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ie = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ie || {}), Dt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Dt || {}), Cl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Cl || {});
function Lt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Xe)).sort((l, n) => Math.sign((l.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ut = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ut || {});
function it(e, l = 0) {
  var n;
  return e === ((n = xe(e)) == null ? void 0 : n.body) ? !1 : U(l, { [0]() {
    return e.matches(Xe);
  }, [1]() {
    let a = e;
    for (; a !== null; ) {
      if (a.matches(Xe))
        return !0;
      a = a.parentElement;
    }
    return !1;
  } });
}
function jt(e) {
  let l = xe(e);
  Y(() => {
    l && !it(l.activeElement, 0) && ye(e);
  });
}
function ye(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Al = ["textarea", "input"].join(",");
function Fl(e) {
  var l, n;
  return (n = (l = e == null ? void 0 : e.matches) == null ? void 0 : l.call(e, Al)) != null ? n : !1;
}
function st(e, l = (n) => n) {
  return e.slice().sort((n, a) => {
    let t = l(n), o = l(a);
    if (t === null || o === null)
      return 0;
    let r = t.compareDocumentPosition(o);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Dl(e, l) {
  return Ce(Lt(), l, { relativeTo: e });
}
function Ce(e, l, { sorted: n = !0, relativeTo: a = null, skipElements: t = [] } = {}) {
  var o;
  let r = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? o : document, u = Array.isArray(e) ? n ? st(e) : e : Lt(e);
  t.length > 0 && u.length > 1 && (u = u.filter((p) => !t.includes(p))), a = a != null ? a : r.activeElement;
  let i = (() => {
    if (l & 5)
      return 1;
    if (l & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = (() => {
    if (l & 1)
      return 0;
    if (l & 2)
      return Math.max(0, u.indexOf(a)) - 1;
    if (l & 4)
      return Math.max(0, u.indexOf(a)) + 1;
    if (l & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), s = l & 32 ? { preventScroll: !0 } : {}, f = 0, v = u.length, m;
  do {
    if (f >= v || f + v <= 0)
      return 0;
    let p = d + f;
    if (l & 16)
      p = (p + v) % v;
    else {
      if (p < 0)
        return 3;
      if (p >= v)
        return 1;
    }
    m = u[p], m == null || m.focus(s), f += i;
  } while (m !== r.activeElement);
  return l & 6 && Fl(m) && m.select(), m.hasAttribute("tabindex") || m.setAttribute("tabindex", "0"), 2;
}
function Ge(e, l, n) {
  Le.isServer || Q((a) => {
    document.addEventListener(e, l, n), a(() => document.removeEventListener(e, l, n));
  });
}
function dt(e, l, n = b(() => !0)) {
  function a(o, r) {
    if (!n.value || o.defaultPrevented)
      return;
    let u = r(o);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let i = function d(s) {
      return typeof s == "function" ? d(s()) : Array.isArray(s) || s instanceof Set ? s : [s];
    }(e);
    for (let d of i) {
      if (d === null)
        continue;
      let s = d instanceof HTMLElement ? d : x(d);
      if (s != null && s.contains(u) || o.composed && o.composedPath().includes(s))
        return;
    }
    return !it(u, ut.Loose) && u.tabIndex !== -1 && o.preventDefault(), l(o, u);
  }
  let t = h(null);
  Ge("mousedown", (o) => {
    var r, u;
    n.value && (t.value = ((u = (r = o.composedPath) == null ? void 0 : r.call(o)) == null ? void 0 : u[0]) || o.target);
  }, !0), Ge("click", (o) => {
    t.value && (a(o, () => t.value), t.value = null);
  }, !0), Ge("blur", (o) => a(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ae = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ae || {});
let He = $({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: l, attrs: n }) {
  return () => {
    let { features: a, ...t } = e, o = { "aria-hidden": (a & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(a & 4) === 4 && (a & 2) !== 2 && { display: "none" } } };
    return N({ ourProps: o, theirProps: t, slot: {}, attrs: n, slots: l, name: "Hidden" });
  };
} });
function $t(e = {}, l = null, n = []) {
  for (let [a, t] of Object.entries(e))
    Mt(n, Nt(l, a), t);
  return n;
}
function Nt(e, l) {
  return e ? e + "[" + l + "]" : l;
}
function Mt(e, l, n) {
  if (Array.isArray(n))
    for (let [a, t] of n.entries())
      Mt(e, Nt(l, a.toString()), t);
  else
    n instanceof Date ? e.push([l, n.toISOString()]) : typeof n == "boolean" ? e.push([l, n ? "1" : "0"]) : typeof n == "string" ? e.push([l, n]) : typeof n == "number" ? e.push([l, `${n}`]) : n == null ? e.push([l, ""]) : $t(n, l, e);
}
function Ll(e, l, n) {
  let a = h(n == null ? void 0 : n.value), t = b(() => e.value !== void 0);
  return [b(() => t.value ? e.value : a.value), function(o) {
    return t.value || (a.value = o), l == null ? void 0 : l(o);
  }];
}
function ht(e) {
  return [e.screenX, e.screenY];
}
function Vt() {
  let e = h([-1, -1]);
  return { wasMoved(l) {
    let n = ht(l);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(l) {
    e.value = ht(l);
  } };
}
function Bt() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function jl() {
  return /Android/gi.test(window.navigator.userAgent);
}
function $l() {
  return Bt() || jl();
}
function Nl(e, l) {
  return e === l;
}
var Ml = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ml || {}), Vl = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Vl || {}), Bl = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Bl || {});
let Ut = Symbol("ComboboxContext");
function Pe(e) {
  let l = ae(Ut, null);
  if (l === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Pe), n;
  }
  return l;
}
let Ul = $({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Nl }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: l, attrs: n, emit: a }) {
  let t = h(1), o = h(null), r = h(null), u = h(null), i = h(null), d = h({ static: !1, hold: !1 }), s = h([]), f = h(null), v = h(1), m = h(!1);
  function p(S = (E) => E) {
    let E = f.value !== null ? s.value[f.value] : null, I = st(S(s.value.slice()), (R) => x(R.dataRef.domRef)), O = E ? I.indexOf(E) : null;
    return O === -1 && (O = null), { options: I, activeOptionIndex: O };
  }
  let c = b(() => e.multiple ? 1 : 0), g = b(() => e.nullable), [w, j] = Ll(b(() => e.modelValue === void 0 ? U(c.value, { [1]: [], [0]: void 0 }) : e.modelValue), (S) => a("update:modelValue", S), b(() => e.defaultValue)), P = { comboboxState: t, value: w, mode: c, compare(S, E) {
    if (typeof e.by == "string") {
      let I = e.by;
      return (S == null ? void 0 : S[I]) === (E == null ? void 0 : E[I]);
    }
    return e.by(S, E);
  }, defaultValue: b(() => e.defaultValue), nullable: g, inputRef: r, labelRef: o, buttonRef: u, optionsRef: i, disabled: b(() => e.disabled), options: s, change(S) {
    j(S);
  }, activeOptionIndex: b(() => {
    if (m.value && f.value === null && s.value.length > 0) {
      let S = s.value.findIndex((E) => !E.dataRef.disabled);
      if (S !== -1)
        return S;
    }
    return f.value;
  }), activationTrigger: v, optionsPropsRef: d, closeCombobox() {
    m.value = !1, !e.disabled && t.value !== 1 && (t.value = 1, f.value = null);
  }, openCombobox() {
    if (m.value = !0, e.disabled || t.value === 0)
      return;
    let S = s.value.findIndex((E) => {
      let I = V(E.dataRef.value);
      return U(c.value, { [0]: () => P.compare(V(P.value.value), V(I)), [1]: () => V(P.value.value).some((O) => P.compare(V(O), V(I))) });
    });
    S !== -1 && (f.value = S), t.value = 0;
  }, goToOption(S, E, I) {
    if (m.value = !1, e.disabled || i.value && !d.value.static && t.value === 1)
      return;
    let O = p();
    if (O.activeOptionIndex === null) {
      let M = O.options.findIndex((me) => !me.dataRef.disabled);
      M !== -1 && (O.activeOptionIndex = M);
    }
    let R = Rt(S === D.Specific ? { focus: D.Specific, id: E } : { focus: S }, { resolveItems: () => O.options, resolveActiveIndex: () => O.activeOptionIndex, resolveId: (M) => M.id, resolveDisabled: (M) => M.dataRef.disabled });
    f.value = R, v.value = I != null ? I : 1, s.value = O.options;
  }, selectOption(S) {
    let E = s.value.find((O) => O.id === S);
    if (!E)
      return;
    let { dataRef: I } = E;
    j(U(c.value, { [0]: () => I.value, [1]: () => {
      let O = V(P.value.value).slice(), R = V(I.value), M = O.findIndex((me) => P.compare(R, V(me)));
      return M === -1 ? O.push(R) : O.splice(M, 1), O;
    } }));
  }, selectActiveOption() {
    if (P.activeOptionIndex.value === null)
      return;
    let { dataRef: S, id: E } = s.value[P.activeOptionIndex.value];
    j(U(c.value, { [0]: () => S.value, [1]: () => {
      let I = V(P.value.value).slice(), O = V(S.value), R = I.findIndex((M) => P.compare(O, V(M)));
      return R === -1 ? I.push(O) : I.splice(R, 1), I;
    } })), P.goToOption(D.Specific, E);
  }, registerOption(S, E) {
    let I = { id: S, dataRef: E }, O = p((R) => [...R, I]);
    if (f.value === null) {
      let R = E.value.value;
      U(c.value, { [0]: () => P.compare(V(P.value.value), V(R)), [1]: () => V(P.value.value).some((M) => P.compare(V(M), V(R))) }) && (O.activeOptionIndex = O.options.indexOf(I));
    }
    s.value = O.options, f.value = O.activeOptionIndex, v.value = 1;
  }, unregisterOption(S) {
    var E;
    P.activeOptionIndex.value !== null && ((E = P.options.value[P.activeOptionIndex.value]) == null ? void 0 : E.id) === S && (m.value = !0);
    let I = p((O) => {
      let R = O.findIndex((M) => M.id === S);
      return R !== -1 && O.splice(R, 1), O;
    });
    s.value = I.options, f.value = I.activeOptionIndex, v.value = 1;
  } };
  dt([r, u, i], () => P.closeCombobox(), b(() => t.value === 0)), oe(Ut, P), rt(b(() => U(t.value, { [0]: B.Open, [1]: B.Closed })));
  let ne = b(() => P.activeOptionIndex.value === null ? null : s.value[P.activeOptionIndex.value].dataRef.value), Z = b(() => {
    var S;
    return (S = x(r)) == null ? void 0 : S.closest("form");
  });
  return W(() => {
    ce([Z], () => {
      if (!Z.value || e.defaultValue === void 0)
        return;
      function S() {
        P.change(e.defaultValue);
      }
      return Z.value.addEventListener("reset", S), () => {
        var E;
        (E = Z.value) == null || E.removeEventListener("reset", S);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: S, disabled: E, ...I } = e, O = { open: t.value === 0, disabled: E, activeIndex: P.activeOptionIndex.value, activeOption: ne.value, value: w.value };
    return G(ee, [...S != null && w.value != null ? $t({ [S]: w.value }).map(([R, M]) => G(He, Ol({ features: Ae.Hidden, key: R, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: R, value: M }))) : [], N({ theirProps: { ...n, ...qe(I, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: O, slots: l, attrs: n, name: "Combobox" })]);
  };
} });
$({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${X()}` } }, setup(e, { attrs: l, slots: n }) {
  let a = Pe("ComboboxLabel");
  function t() {
    var o;
    (o = x(a.inputRef)) == null || o.focus({ preventScroll: !0 });
  }
  return () => {
    let o = { open: a.comboboxState.value === 0, disabled: a.disabled.value }, { id: r, ...u } = e, i = { id: r, ref: a.labelRef, onClick: t };
    return N({ ourProps: i, theirProps: u, slot: o, attrs: l, slots: n, name: "ComboboxLabel" });
  };
} });
let Hl = $({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${X()}` } }, setup(e, { attrs: l, slots: n, expose: a }) {
  let t = Pe("ComboboxButton");
  a({ el: t.buttonRef, $el: t.buttonRef });
  function o(i) {
    t.disabled.value || (t.comboboxState.value === 0 ? t.closeCombobox() : (i.preventDefault(), t.openCombobox()), Y(() => {
      var d;
      return (d = x(t.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function r(i) {
    switch (i.key) {
      case C.ArrowDown:
        i.preventDefault(), i.stopPropagation(), t.comboboxState.value === 1 && t.openCombobox(), Y(() => {
          var d;
          return (d = t.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case C.ArrowUp:
        i.preventDefault(), i.stopPropagation(), t.comboboxState.value === 1 && (t.openCombobox(), Y(() => {
          t.value.value || t.goToOption(D.Last);
        })), Y(() => {
          var d;
          return (d = t.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case C.Escape:
        if (t.comboboxState.value !== 0)
          return;
        i.preventDefault(), t.optionsRef.value && !t.optionsPropsRef.value.static && i.stopPropagation(), t.closeCombobox(), Y(() => {
          var d;
          return (d = t.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = At(b(() => ({ as: e.as, type: l.type })), t.buttonRef);
  return () => {
    var i, d;
    let s = { open: t.comboboxState.value === 0, disabled: t.disabled.value, value: t.value.value }, { id: f, ...v } = e, m = { ref: t.buttonRef, id: f, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (i = x(t.optionsRef)) == null ? void 0 : i.id, "aria-expanded": t.disabled.value ? void 0 : t.comboboxState.value === 0, "aria-labelledby": t.labelRef.value ? [(d = x(t.labelRef)) == null ? void 0 : d.id, f].join(" ") : void 0, disabled: t.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: o };
    return N({ ourProps: m, theirProps: v, slot: s, attrs: l, slots: n, name: "ComboboxButton" });
  };
} }), ql = $({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${X()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: l, attrs: n, slots: a, expose: t }) {
  let o = Pe("ComboboxInput"), r = { value: !1 };
  t({ el: o.inputRef, $el: o.inputRef });
  let u = b(() => {
    var c;
    let g = o.value.value;
    return x(o.inputRef) ? typeof e.displayValue < "u" && g !== void 0 ? (c = e.displayValue(g)) != null ? c : "" : typeof g == "string" ? g : "" : "";
  });
  W(() => {
    ce([u, o.comboboxState], ([c, g], [w, j]) => {
      if (r.value)
        return;
      let P = x(o.inputRef);
      P && (j === 0 && g === 1 || c !== w) && (P.value = c);
    }, { immediate: !0 }), ce([o.comboboxState], ([c], [g]) => {
      if (c === 0 && g === 1) {
        let w = x(o.inputRef);
        if (!w)
          return;
        let j = w.value, { selectionStart: P, selectionEnd: ne, selectionDirection: Z } = w;
        w.value = "", w.value = j, Z !== null ? w.setSelectionRange(P, ne, Z) : w.setSelectionRange(P, ne);
      }
    });
  });
  let i = h(!1);
  function d() {
    i.value = !0;
  }
  function s() {
    setTimeout(() => {
      i.value = !1;
    });
  }
  function f(c) {
    switch (r.value = !0, c.key) {
      case C.Backspace:
      case C.Delete:
        if (o.mode.value !== 0 || !o.nullable.value)
          return;
        let g = c.currentTarget;
        requestAnimationFrame(() => {
          if (g.value === "") {
            o.change(null);
            let w = x(o.optionsRef);
            w && (w.scrollTop = 0), o.goToOption(D.Nothing);
          }
        });
        break;
      case C.Enter:
        if (r.value = !1, o.comboboxState.value !== 0 || i.value)
          return;
        if (c.preventDefault(), c.stopPropagation(), o.activeOptionIndex.value === null) {
          o.closeCombobox();
          return;
        }
        o.selectActiveOption(), o.mode.value === 0 && o.closeCombobox();
        break;
      case C.ArrowDown:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), U(o.comboboxState.value, { [0]: () => o.goToOption(D.Next), [1]: () => o.openCombobox() });
      case C.ArrowUp:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), U(o.comboboxState.value, { [0]: () => o.goToOption(D.Previous), [1]: () => {
          o.openCombobox(), Y(() => {
            o.value.value || o.goToOption(D.Last);
          });
        } });
      case C.Home:
        if (c.shiftKey)
          break;
        return r.value = !1, c.preventDefault(), c.stopPropagation(), o.goToOption(D.First);
      case C.PageUp:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), o.goToOption(D.First);
      case C.End:
        if (c.shiftKey)
          break;
        return r.value = !1, c.preventDefault(), c.stopPropagation(), o.goToOption(D.Last);
      case C.PageDown:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), o.goToOption(D.Last);
      case C.Escape:
        if (r.value = !1, o.comboboxState.value !== 0)
          return;
        c.preventDefault(), o.optionsRef.value && !o.optionsPropsRef.value.static && c.stopPropagation(), o.closeCombobox();
        break;
      case C.Tab:
        if (r.value = !1, o.comboboxState.value !== 0)
          return;
        o.mode.value === 0 && o.selectActiveOption(), o.closeCombobox();
        break;
    }
  }
  function v(c) {
    o.openCombobox(), l("change", c);
  }
  function m() {
    r.value = !1;
  }
  let p = b(() => {
    var c, g, w, j;
    return (j = (w = (g = e.defaultValue) != null ? g : o.defaultValue.value !== void 0 ? (c = e.displayValue) == null ? void 0 : c.call(e, o.defaultValue.value) : null) != null ? w : o.defaultValue.value) != null ? j : "";
  });
  return () => {
    var c, g, w, j, P, ne;
    let Z = { open: o.comboboxState.value === 0 }, { id: S, displayValue: E, onChange: I, ...O } = e, R = { "aria-controls": (c = o.optionsRef.value) == null ? void 0 : c.id, "aria-expanded": o.disabled.value ? void 0 : o.comboboxState.value === 0, "aria-activedescendant": o.activeOptionIndex.value === null || (g = o.options.value[o.activeOptionIndex.value]) == null ? void 0 : g.id, "aria-labelledby": (P = (w = x(o.labelRef)) == null ? void 0 : w.id) != null ? P : (j = x(o.buttonRef)) == null ? void 0 : j.id, "aria-autocomplete": "list", id: S, onCompositionstart: d, onCompositionend: s, onKeydown: f, onInput: v, onBlur: m, role: "combobox", type: (ne = n.type) != null ? ne : "text", tabIndex: 0, ref: o.inputRef, defaultValue: p.value };
    return N({ ourProps: R, theirProps: O, slot: Z, attrs: n, slots: a, features: de.RenderStrategy | de.Static, name: "ComboboxInput" });
  };
} }), Wl = $({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: l, slots: n, expose: a }) {
  let t = Pe("ComboboxOptions"), o = `headlessui-combobox-options-${X()}`;
  a({ el: t.optionsRef, $el: t.optionsRef }), Q(() => {
    t.optionsPropsRef.value.static = e.static;
  }), Q(() => {
    t.optionsPropsRef.value.hold = e.hold;
  });
  let r = De(), u = b(() => r !== null ? (r.value & B.Open) === B.Open : t.comboboxState.value === 0);
  return Ft({ container: b(() => x(t.optionsRef)), enabled: b(() => t.comboboxState.value === 0), accept(i) {
    return i.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : i.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(i) {
    i.setAttribute("role", "none");
  } }), () => {
    var i, d, s;
    let f = { open: t.comboboxState.value === 0 }, v = { "aria-labelledby": (s = (i = x(t.labelRef)) == null ? void 0 : i.id) != null ? s : (d = x(t.buttonRef)) == null ? void 0 : d.id, id: o, ref: t.optionsRef, role: "listbox", "aria-multiselectable": t.mode.value === 1 ? !0 : void 0 }, m = qe(e, ["hold"]);
    return N({ ourProps: v, theirProps: m, slot: f, attrs: l, slots: n, features: de.RenderStrategy | de.Static, visible: u.value, name: "ComboboxOptions" });
  };
} }), zl = $({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: l, attrs: n, expose: a }) {
  let t = Pe("ComboboxOption"), o = `headlessui-combobox-option-${X()}`, r = h(null);
  a({ el: r, $el: r });
  let u = b(() => t.activeOptionIndex.value !== null ? t.options.value[t.activeOptionIndex.value].id === o : !1), i = b(() => U(t.mode.value, { [0]: () => t.compare(V(t.value.value), V(e.value)), [1]: () => V(t.value.value).some((g) => t.compare(V(g), V(e.value))) })), d = b(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  W(() => t.registerOption(o, d)), re(() => t.unregisterOption(o)), Q(() => {
    t.comboboxState.value === 0 && u.value && t.activationTrigger.value !== 0 && Y(() => {
      var g, w;
      return (w = (g = x(r)) == null ? void 0 : g.scrollIntoView) == null ? void 0 : w.call(g, { block: "nearest" });
    });
  });
  function s(g) {
    if (e.disabled)
      return g.preventDefault();
    t.selectOption(o), t.mode.value === 0 && t.closeCombobox(), $l() || requestAnimationFrame(() => {
      var w;
      return (w = x(t.inputRef)) == null ? void 0 : w.focus();
    });
  }
  function f() {
    if (e.disabled)
      return t.goToOption(D.Nothing);
    t.goToOption(D.Specific, o);
  }
  let v = Vt();
  function m(g) {
    v.update(g);
  }
  function p(g) {
    v.wasMoved(g) && (e.disabled || u.value || t.goToOption(D.Specific, o, 0));
  }
  function c(g) {
    v.wasMoved(g) && (e.disabled || u.value && (t.optionsPropsRef.value.hold || t.goToOption(D.Nothing)));
  }
  return () => {
    let { disabled: g } = e, w = { active: u.value, selected: i.value, disabled: g }, j = { id: o, ref: r, role: "option", tabIndex: g === !0 ? void 0 : -1, "aria-disabled": g === !0 ? !0 : void 0, "aria-selected": i.value, disabled: void 0, onClick: s, onFocus: f, onPointerenter: m, onMouseenter: m, onPointermove: p, onMousemove: p, onPointerleave: c, onMouseleave: c };
    return N({ ourProps: j, theirProps: e, slot: w, attrs: n, slots: l, name: "ComboboxOption" });
  };
} });
function Kl(e, l, n) {
  Le.isServer || Q((a) => {
    window.addEventListener(e, l, n), a(() => window.removeEventListener(e, l, n));
  });
}
var Re = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Re || {});
function Gl() {
  let e = h(0);
  return Kl("keydown", (l) => {
    l.key === "Tab" && (e.value = l.shiftKey ? 1 : 0);
  }), e;
}
function Ht(e, l, n, a) {
  Le.isServer || Q((t) => {
    e = e != null ? e : window, e.addEventListener(l, n, a), t(() => e.removeEventListener(l, n, a));
  });
}
function Ql(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((l) => setTimeout(() => {
    throw l;
  }));
}
var qt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(qt || {});
let Ie = Object.assign($({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: h(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: l, slots: n, expose: a }) {
  let t = h(null);
  a({ el: t, $el: t });
  let o = b(() => xe(t));
  Yl({ ownerDocument: o }, b(() => Boolean(e.features & 16)));
  let r = Jl({ ownerDocument: o, container: t, initialFocus: b(() => e.initialFocus) }, b(() => Boolean(e.features & 2)));
  Xl({ ownerDocument: o, container: t, containers: e.containers, previousActiveElement: r }, b(() => Boolean(e.features & 8)));
  let u = Gl();
  function i(v) {
    let m = x(t);
    !m || ((p) => p())(() => {
      U(u.value, { [Re.Forwards]: () => {
        Ce(m, ie.First, { skipElements: [v.relatedTarget] });
      }, [Re.Backwards]: () => {
        Ce(m, ie.Last, { skipElements: [v.relatedTarget] });
      } });
    });
  }
  let d = h(!1);
  function s(v) {
    v.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function f(v) {
    var m;
    let p = new Set((m = e.containers) == null ? void 0 : m.value);
    p.add(t);
    let c = v.relatedTarget;
    c instanceof HTMLElement && c.dataset.headlessuiFocusGuard !== "true" && (Wt(p, c) || (d.value ? Ce(x(t), U(u.value, { [Re.Forwards]: () => ie.Next, [Re.Backwards]: () => ie.Previous }) | ie.WrapAround, { relativeTo: v.target }) : v.target instanceof HTMLElement && ye(v.target)));
  }
  return () => {
    let v = {}, m = { ref: t, onKeydown: s, onFocusout: f }, { features: p, initialFocus: c, containers: g, ...w } = e;
    return G(ee, [Boolean(p & 4) && G(He, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: i, features: Ae.Focusable }), N({ ourProps: m, theirProps: { ...l, ...w }, slot: v, attrs: l, slots: n, name: "FocusTrap" }), Boolean(p & 4) && G(He, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: i, features: Ae.Focusable })]);
  };
} }), { features: qt });
function Yl({ ownerDocument: e }, l) {
  let n = h(null);
  function a() {
    var o;
    n.value || (n.value = (o = e.value) == null ? void 0 : o.activeElement);
  }
  function t() {
    n.value && (ye(n.value), n.value = null);
  }
  W(() => {
    ce(l, (o, r) => {
      o !== r && (o ? a() : t());
    }, { immediate: !0 });
  }), re(t);
}
function Jl({ ownerDocument: e, container: l, initialFocus: n }, a) {
  let t = h(null), o = h(!1);
  return W(() => o.value = !0), re(() => o.value = !1), W(() => {
    ce([l, n, a], (r, u) => {
      if (r.every((d, s) => (u == null ? void 0 : u[s]) === d) || !a.value)
        return;
      let i = x(l);
      i && Ql(() => {
        var d, s;
        if (!o.value)
          return;
        let f = x(n), v = (d = e.value) == null ? void 0 : d.activeElement;
        if (f) {
          if (f === v) {
            t.value = v;
            return;
          }
        } else if (i.contains(v)) {
          t.value = v;
          return;
        }
        f ? ye(f) : Ce(i, ie.First | ie.NoScroll) === Dt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), t.value = (s = e.value) == null ? void 0 : s.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), t;
}
function Xl({ ownerDocument: e, container: l, containers: n, previousActiveElement: a }, t) {
  var o;
  Ht((o = e.value) == null ? void 0 : o.defaultView, "focus", (r) => {
    if (!t.value)
      return;
    let u = new Set(n == null ? void 0 : n.value);
    u.add(l);
    let i = a.value;
    if (!i)
      return;
    let d = r.target;
    d && d instanceof HTMLElement ? Wt(u, d) ? (a.value = d, ye(d)) : (r.preventDefault(), r.stopPropagation(), ye(i)) : ye(a.value);
  }, !0);
}
function Wt(e, l) {
  var n;
  for (let a of e)
    if ((n = a.value) != null && n.contains(l))
      return !0;
  return !1;
}
let Qe = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map();
function yt(e, l = h(!0)) {
  Q((n) => {
    var a;
    if (!l.value)
      return;
    let t = x(e);
    if (!t)
      return;
    n(function() {
      var r;
      if (!t)
        return;
      let u = (r = ke.get(t)) != null ? r : 1;
      if (u === 1 ? ke.delete(t) : ke.set(t, u - 1), u !== 1)
        return;
      let i = Qe.get(t);
      i && (i["aria-hidden"] === null ? t.removeAttribute("aria-hidden") : t.setAttribute("aria-hidden", i["aria-hidden"]), t.inert = i.inert, Qe.delete(t));
    });
    let o = (a = ke.get(t)) != null ? a : 0;
    ke.set(t, o + 1), o === 0 && (Qe.set(t, { "aria-hidden": t.getAttribute("aria-hidden"), inert: t.inert }), t.setAttribute("aria-hidden", "true"), t.inert = !0);
  });
}
let zt = Symbol("ForcePortalRootContext");
function Zl() {
  return ae(zt, !1);
}
let Ze = $({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: l, attrs: n }) {
  return oe(zt, e.force), () => {
    let { force: a, ...t } = e;
    return N({ theirProps: t, ourProps: {}, slot: {}, slots: l, attrs: n, name: "ForcePortalRoot" });
  };
} });
function _l(e) {
  let l = xe(e);
  if (!l) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = l.getElementById("headlessui-portal-root");
  if (n)
    return n;
  let a = l.createElement("div");
  return a.setAttribute("id", "headlessui-portal-root"), l.body.appendChild(a);
}
let Kt = $({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: l, attrs: n }) {
  let a = h(null), t = b(() => xe(a)), o = Zl(), r = ae(Gt, null), u = h(o === !0 || r == null ? _l(a.value) : r.resolveTarget());
  return Q(() => {
    o || r != null && (u.value = r.resolveTarget());
  }), re(() => {
    var i, d;
    let s = (i = t.value) == null ? void 0 : i.getElementById("headlessui-portal-root");
    s && u.value === s && u.value.children.length <= 0 && ((d = u.value.parentElement) == null || d.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let i = { ref: a, "data-headlessui-portal": "" };
    return G(nl, { to: u.value }, N({ ourProps: i, theirProps: e, slot: {}, attrs: n, slots: l, name: "Portal" }));
  };
} }), Gt = Symbol("PortalGroupContext"), en = $({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: l, slots: n }) {
  let a = al({ resolveTarget() {
    return e.target;
  } });
  return oe(Gt, a), () => {
    let { target: t, ...o } = e;
    return N({ theirProps: o, ourProps: {}, slot: {}, attrs: l, slots: n, name: "PortalGroup" });
  };
} }), Qt = Symbol("StackContext");
var _e = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(_e || {});
function tn() {
  return ae(Qt, () => {
  });
}
function ln({ type: e, enabled: l, element: n, onUpdate: a }) {
  let t = tn();
  function o(...r) {
    a == null || a(...r), t(...r);
  }
  W(() => {
    ce(l, (r, u) => {
      r ? o(0, e, n) : u === !0 && o(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), re(() => {
    l.value && o(1, e, n);
  }), oe(Qt, o);
}
let Yt = Symbol("DescriptionContext");
function nn() {
  let e = ae(Yt, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function an({ slot: e = h({}), name: l = "Description", props: n = {} } = {}) {
  let a = h([]);
  function t(o) {
    return a.value.push(o), () => {
      let r = a.value.indexOf(o);
      r !== -1 && a.value.splice(r, 1);
    };
  }
  return oe(Yt, { register: t, slot: e, name: l, props: n }), b(() => a.value.length > 0 ? a.value.join(" ") : void 0);
}
$({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${X()}` } }, setup(e, { attrs: l, slots: n }) {
  let a = nn();
  return W(() => re(a.register(e.id))), () => {
    let { name: t = "Description", slot: o = h({}), props: r = {} } = a, { id: u, ...i } = e, d = { ...Object.entries(r).reduce((s, [f, v]) => Object.assign(s, { [f]: A(v) }), {}), id: u };
    return N({ ourProps: d, theirProps: i, slot: o.value, attrs: l, slots: n, name: t });
  };
} });
function on(e) {
  let l = sl(e.getSnapshot());
  return re(e.subscribe(() => {
    l.value = e.getSnapshot();
  })), l;
}
function ct() {
  let e = [], l = { addEventListener(n, a, t, o) {
    return n.addEventListener(a, t, o), l.add(() => n.removeEventListener(a, t, o));
  }, requestAnimationFrame(...n) {
    let a = requestAnimationFrame(...n);
    l.add(() => cancelAnimationFrame(a));
  }, nextFrame(...n) {
    l.requestAnimationFrame(() => {
      l.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let a = setTimeout(...n);
    l.add(() => clearTimeout(a));
  }, add(n) {
    e.push(n);
  }, style(n, a, t) {
    let o = n.style.getPropertyValue(a);
    return Object.assign(n.style, { [a]: t }), this.add(() => {
      Object.assign(n.style, { [a]: o });
    });
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return l;
}
function rn(e, l) {
  let n = e(), a = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(t) {
    return a.add(t), () => a.delete(t);
  }, dispatch(t, ...o) {
    let r = l[t].call(n, ...o);
    r && (n = r, a.forEach((u) => u()));
  } };
}
function un() {
  let e;
  return { before({ doc: l }) {
    var n;
    let a = l.documentElement;
    e = ((n = l.defaultView) != null ? n : window).innerWidth - a.clientWidth;
  }, after({ doc: l, d: n }) {
    let a = l.documentElement, t = a.clientWidth - a.offsetWidth, o = e - t;
    n.style(a, "paddingRight", `${o}px`);
  } };
}
function sn() {
  if (!Bt())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: l, d: n, meta: a }) {
    function t(r) {
      return a.containers.flatMap((u) => u()).some((u) => u.contains(r));
    }
    n.style(l.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let o = null;
    n.addEventListener(l, "click", (r) => {
      if (r.target instanceof HTMLElement)
        try {
          let u = r.target.closest("a");
          if (!u)
            return;
          let { hash: i } = new URL(u.href), d = l.querySelector(i);
          d && !t(d) && (o = d);
        } catch {
        }
    }, !0), n.addEventListener(l, "touchmove", (r) => {
      r.target instanceof HTMLElement && !t(r.target) && r.preventDefault();
    }, { passive: !1 }), n.add(() => {
      window.scrollTo(0, window.pageYOffset + e), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
    });
  } };
}
function dn() {
  return { before({ doc: e, d: l }) {
    l.style(e.documentElement, "overflow", "hidden");
  } };
}
function cn(e) {
  let l = {};
  for (let n of e)
    Object.assign(l, n(l));
  return l;
}
let he = rn(() => /* @__PURE__ */ new Map(), { PUSH(e, l) {
  var n;
  let a = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: ct(), meta: /* @__PURE__ */ new Set() };
  return a.count++, a.meta.add(l), this.set(e, a), this;
}, POP(e, l) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(l)), this;
}, SCROLL_PREVENT({ doc: e, d: l, meta: n }) {
  let a = { doc: e, d: l, meta: cn(n) }, t = [sn(), un(), dn()];
  t.forEach(({ before: o }) => o == null ? void 0 : o(a)), t.forEach(({ after: o }) => o == null ? void 0 : o(a));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
he.subscribe(() => {
  let e = he.getSnapshot(), l = /* @__PURE__ */ new Map();
  for (let [n] of e)
    l.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let a = l.get(n.doc) === "hidden", t = n.count !== 0;
    (t && !a || !t && a) && he.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && he.dispatch("TEARDOWN", n);
  }
});
function pn(e, l, n) {
  let a = on(he), t = b(() => {
    let o = e.value ? a.value.get(e.value) : void 0;
    return o ? o.count > 0 : !1;
  });
  return ce([e, l], ([o, r], [u], i) => {
    if (!o || !r)
      return;
    he.dispatch("PUSH", o, n);
    let d = !1;
    i(() => {
      d || (he.dispatch("POP", u != null ? u : o, n), d = !0);
    });
  }, { immediate: !0 }), t;
}
var vn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(vn || {});
let et = Symbol("DialogContext");
function je(e) {
  let l = ae(et, null);
  if (l === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, je), n;
  }
  return l;
}
let Me = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
$({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Me }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${X()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: l, attrs: n, slots: a, expose: t }) {
  var o;
  let r = h(!1);
  W(() => {
    r.value = !0;
  });
  let u = h(0), i = De(), d = b(() => e.open === Me && i !== null ? (i.value & B.Open) === B.Open : e.open), s = h(/* @__PURE__ */ new Set()), f = h(null), v = h(null), m = b(() => xe(f));
  if (t({ el: f, $el: f }), !(e.open !== Me || i !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === Me ? void 0 : e.open}`);
  let p = b(() => r.value && d.value ? 0 : 1), c = b(() => p.value === 0), g = b(() => u.value > 1), w = ae(et, null) !== null, j = b(() => g.value ? "parent" : "leaf"), P = b(() => i !== null ? (i.value & B.Closing) === B.Closing : !1), ne = b(() => w || P.value ? !1 : c.value), Z = b(() => {
    var k, L, z;
    return (z = Array.from((L = (k = m.value) == null ? void 0 : k.querySelectorAll("body > *")) != null ? L : []).find((K) => K.id === "headlessui-portal-root" ? !1 : K.contains(x(v)) && K instanceof HTMLElement)) != null ? z : null;
  });
  yt(Z, ne);
  let S = b(() => g.value ? !0 : c.value), E = b(() => {
    var k, L, z;
    return (z = Array.from((L = (k = m.value) == null ? void 0 : k.querySelectorAll("[data-headlessui-portal]")) != null ? L : []).find((K) => K.contains(x(v)) && K instanceof HTMLElement)) != null ? z : null;
  });
  yt(E, S), ln({ type: "Dialog", enabled: b(() => p.value === 0), element: f, onUpdate: (k, L, z) => {
    if (L === "Dialog")
      return U(k, { [_e.Add]() {
        s.value.add(z), u.value += 1;
      }, [_e.Remove]() {
        s.value.delete(z), u.value -= 1;
      } });
  } });
  let I = an({ name: "DialogDescription", slot: b(() => ({ open: d.value })) }), O = h(null), R = { titleId: O, panelRef: h(null), dialogState: p, setTitleId(k) {
    O.value !== k && (O.value = k);
  }, close() {
    l("close", !1);
  } };
  oe(et, R);
  function M() {
    var k, L, z;
    return [...Array.from((L = (k = m.value) == null ? void 0 : k.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? L : []).filter((K) => !(K === document.body || K === document.head || !(K instanceof HTMLElement) || K.contains(x(v)) || R.panelRef.value && K.contains(R.panelRef.value))), (z = R.panelRef.value) != null ? z : f.value];
  }
  let me = b(() => !(!c.value || g.value));
  dt(() => M(), (k, L) => {
    R.close(), Y(() => L == null ? void 0 : L.focus());
  }, me);
  let ue = b(() => !(g.value || p.value !== 0));
  Ht((o = m.value) == null ? void 0 : o.defaultView, "keydown", (k) => {
    ue.value && (k.defaultPrevented || k.key === C.Escape && (k.preventDefault(), k.stopPropagation(), R.close()));
  });
  let Te = b(() => !(P.value || p.value !== 0 || w));
  return pn(m, Te, (k) => {
    var L;
    return { containers: [...(L = k.containers) != null ? L : [], M] };
  }), Q((k) => {
    if (p.value !== 0)
      return;
    let L = x(f);
    if (!L)
      return;
    let z = new ResizeObserver((K) => {
      for (let Ne of K) {
        let be = Ne.target.getBoundingClientRect();
        be.x === 0 && be.y === 0 && be.width === 0 && be.height === 0 && R.close();
      }
    });
    z.observe(L), k(() => z.disconnect());
  }), () => {
    let { id: k, open: L, initialFocus: z, ...K } = e, Ne = { ...n, ref: f, id: k, role: "dialog", "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": O.value, "aria-describedby": I.value }, be = { open: p.value === 0 };
    return G(Ze, { force: !0 }, () => [G(Kt, () => G(en, { target: f.value }, () => G(Ze, { force: !1 }, () => G(Ie, { initialFocus: z, containers: s, features: c.value ? U(j.value, { parent: Ie.features.RestoreFocus, leaf: Ie.features.All & ~Ie.features.FocusLock }) : Ie.features.None }, () => N({ ourProps: Ne, theirProps: K, slot: be, attrs: n, slots: a, visible: p.value === 0, features: de.RenderStrategy | de.Static, name: "Dialog" }))))), G(He, { features: Ae.Hidden, ref: v })]);
  };
} });
$({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${X()}` } }, setup(e, { attrs: l, slots: n }) {
  let a = je("DialogOverlay");
  function t(o) {
    o.target === o.currentTarget && (o.preventDefault(), o.stopPropagation(), a.close());
  }
  return () => {
    let { id: o, ...r } = e;
    return N({ ourProps: { id: o, "aria-hidden": !0, onClick: t }, theirProps: r, slot: { open: a.dialogState.value === 0 }, attrs: l, slots: n, name: "DialogOverlay" });
  };
} });
$({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${X()}` } }, inheritAttrs: !1, setup(e, { attrs: l, slots: n, expose: a }) {
  let t = je("DialogBackdrop"), o = h(null);
  return a({ el: o, $el: o }), W(() => {
    if (t.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...u } = e, i = { id: r, ref: o, "aria-hidden": !0 };
    return G(Ze, { force: !0 }, () => G(Kt, () => N({ ourProps: i, theirProps: { ...l, ...u }, slot: { open: t.dialogState.value === 0 }, attrs: l, slots: n, name: "DialogBackdrop" })));
  };
} });
$({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${X()}` } }, setup(e, { attrs: l, slots: n, expose: a }) {
  let t = je("DialogPanel");
  a({ el: t.panelRef, $el: t.panelRef });
  function o(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...u } = e, i = { id: r, ref: t.panelRef, onClick: o };
    return N({ ourProps: i, theirProps: u, slot: { open: t.dialogState.value === 0 }, attrs: l, slots: n, name: "DialogPanel" });
  };
} });
$({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${X()}` } }, setup(e, { attrs: l, slots: n }) {
  let a = je("DialogTitle");
  return W(() => {
    a.setTitleId(e.id), re(() => a.setTitleId(null));
  }), () => {
    let { id: t, ...o } = e;
    return N({ ourProps: { id: t }, theirProps: o, slot: { open: a.dialogState.value === 0 }, attrs: l, slots: n, name: "DialogTitle" });
  };
} });
var fn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(fn || {}), mn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(mn || {});
function bn(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Jt = Symbol("MenuContext");
function We(e) {
  let l = ae(Jt, null);
  if (l === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, We), n;
  }
  return l;
}
$({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: l, attrs: n }) {
  let a = h(1), t = h(null), o = h(null), r = h([]), u = h(""), i = h(null), d = h(1);
  function s(v = (m) => m) {
    let m = i.value !== null ? r.value[i.value] : null, p = st(v(r.value.slice()), (g) => x(g.dataRef.domRef)), c = m ? p.indexOf(m) : null;
    return c === -1 && (c = null), { items: p, activeItemIndex: c };
  }
  let f = { menuState: a, buttonRef: t, itemsRef: o, items: r, searchQuery: u, activeItemIndex: i, activationTrigger: d, closeMenu: () => {
    a.value = 1, i.value = null;
  }, openMenu: () => a.value = 0, goToItem(v, m, p) {
    let c = s(), g = Rt(v === D.Specific ? { focus: D.Specific, id: m } : { focus: v }, { resolveItems: () => c.items, resolveActiveIndex: () => c.activeItemIndex, resolveId: (w) => w.id, resolveDisabled: (w) => w.dataRef.disabled });
    u.value = "", i.value = g, d.value = p != null ? p : 1, r.value = c.items;
  }, search(v) {
    let m = u.value !== "" ? 0 : 1;
    u.value += v.toLowerCase();
    let p = (i.value !== null ? r.value.slice(i.value + m).concat(r.value.slice(0, i.value + m)) : r.value).find((g) => g.dataRef.textValue.startsWith(u.value) && !g.dataRef.disabled), c = p ? r.value.indexOf(p) : -1;
    c === -1 || c === i.value || (i.value = c, d.value = 1);
  }, clearSearch() {
    u.value = "";
  }, registerItem(v, m) {
    let p = s((c) => [...c, { id: v, dataRef: m }]);
    r.value = p.items, i.value = p.activeItemIndex, d.value = 1;
  }, unregisterItem(v) {
    let m = s((p) => {
      let c = p.findIndex((g) => g.id === v);
      return c !== -1 && p.splice(c, 1), p;
    });
    r.value = m.items, i.value = m.activeItemIndex, d.value = 1;
  } };
  return dt([t, o], (v, m) => {
    var p;
    f.closeMenu(), it(m, ut.Loose) || (v.preventDefault(), (p = x(t)) == null || p.focus());
  }, b(() => a.value === 0)), oe(Jt, f), rt(b(() => U(a.value, { [0]: B.Open, [1]: B.Closed }))), () => {
    let v = { open: a.value === 0, close: f.closeMenu };
    return N({ ourProps: {}, theirProps: e, slot: v, slots: l, attrs: n, name: "Menu" });
  };
} });
$({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${X()}` } }, setup(e, { attrs: l, slots: n, expose: a }) {
  let t = We("MenuButton");
  a({ el: t.buttonRef, $el: t.buttonRef });
  function o(d) {
    switch (d.key) {
      case C.Space:
      case C.Enter:
      case C.ArrowDown:
        d.preventDefault(), d.stopPropagation(), t.openMenu(), Y(() => {
          var s;
          (s = x(t.itemsRef)) == null || s.focus({ preventScroll: !0 }), t.goToItem(D.First);
        });
        break;
      case C.ArrowUp:
        d.preventDefault(), d.stopPropagation(), t.openMenu(), Y(() => {
          var s;
          (s = x(t.itemsRef)) == null || s.focus({ preventScroll: !0 }), t.goToItem(D.Last);
        });
        break;
    }
  }
  function r(d) {
    switch (d.key) {
      case C.Space:
        d.preventDefault();
        break;
    }
  }
  function u(d) {
    e.disabled || (t.menuState.value === 0 ? (t.closeMenu(), Y(() => {
      var s;
      return (s = x(t.buttonRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), t.openMenu(), bn(() => {
      var s;
      return (s = x(t.itemsRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    })));
  }
  let i = At(b(() => ({ as: e.as, type: l.type })), t.buttonRef);
  return () => {
    var d;
    let s = { open: t.menuState.value === 0 }, { id: f, ...v } = e, m = { ref: t.buttonRef, id: f, type: i.value, "aria-haspopup": "menu", "aria-controls": (d = x(t.itemsRef)) == null ? void 0 : d.id, "aria-expanded": e.disabled ? void 0 : t.menuState.value === 0, onKeydown: o, onKeyup: r, onClick: u };
    return N({ ourProps: m, theirProps: v, slot: s, attrs: l, slots: n, name: "MenuButton" });
  };
} });
$({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-menu-items-${X()}` } }, setup(e, { attrs: l, slots: n, expose: a }) {
  let t = We("MenuItems"), o = h(null);
  a({ el: t.itemsRef, $el: t.itemsRef }), Ft({ container: b(() => x(t.itemsRef)), enabled: b(() => t.menuState.value === 0), accept(s) {
    return s.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : s.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s) {
    s.setAttribute("role", "none");
  } });
  function r(s) {
    var f;
    switch (o.value && clearTimeout(o.value), s.key) {
      case C.Space:
        if (t.searchQuery.value !== "")
          return s.preventDefault(), s.stopPropagation(), t.search(s.key);
      case C.Enter:
        if (s.preventDefault(), s.stopPropagation(), t.activeItemIndex.value !== null) {
          let v = t.items.value[t.activeItemIndex.value];
          (f = x(v.dataRef.domRef)) == null || f.click();
        }
        t.closeMenu(), jt(x(t.buttonRef));
        break;
      case C.ArrowDown:
        return s.preventDefault(), s.stopPropagation(), t.goToItem(D.Next);
      case C.ArrowUp:
        return s.preventDefault(), s.stopPropagation(), t.goToItem(D.Previous);
      case C.Home:
      case C.PageUp:
        return s.preventDefault(), s.stopPropagation(), t.goToItem(D.First);
      case C.End:
      case C.PageDown:
        return s.preventDefault(), s.stopPropagation(), t.goToItem(D.Last);
      case C.Escape:
        s.preventDefault(), s.stopPropagation(), t.closeMenu(), Y(() => {
          var v;
          return (v = x(t.buttonRef)) == null ? void 0 : v.focus({ preventScroll: !0 });
        });
        break;
      case C.Tab:
        s.preventDefault(), s.stopPropagation(), t.closeMenu(), Y(() => Dl(x(t.buttonRef), s.shiftKey ? ie.Previous : ie.Next));
        break;
      default:
        s.key.length === 1 && (t.search(s.key), o.value = setTimeout(() => t.clearSearch(), 350));
        break;
    }
  }
  function u(s) {
    switch (s.key) {
      case C.Space:
        s.preventDefault();
        break;
    }
  }
  let i = De(), d = b(() => i !== null ? (i.value & B.Open) === B.Open : t.menuState.value === 0);
  return () => {
    var s, f;
    let v = { open: t.menuState.value === 0 }, { id: m, ...p } = e, c = { "aria-activedescendant": t.activeItemIndex.value === null || (s = t.items.value[t.activeItemIndex.value]) == null ? void 0 : s.id, "aria-labelledby": (f = x(t.buttonRef)) == null ? void 0 : f.id, id: m, onKeydown: r, onKeyup: u, role: "menu", tabIndex: 0, ref: t.itemsRef };
    return N({ ourProps: c, theirProps: p, slot: v, attrs: l, slots: n, features: de.RenderStrategy | de.Static, visible: d.value, name: "MenuItems" });
  };
} });
$({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-menu-item-${X()}` } }, setup(e, { slots: l, attrs: n, expose: a }) {
  let t = We("MenuItem"), o = h(null);
  a({ el: o, $el: o });
  let r = b(() => t.activeItemIndex.value !== null ? t.items.value[t.activeItemIndex.value].id === e.id : !1), u = b(() => ({ disabled: e.disabled, textValue: "", domRef: o }));
  W(() => {
    var p, c;
    let g = (c = (p = x(o)) == null ? void 0 : p.textContent) == null ? void 0 : c.toLowerCase().trim();
    g !== void 0 && (u.value.textValue = g);
  }), W(() => t.registerItem(e.id, u)), re(() => t.unregisterItem(e.id)), Q(() => {
    t.menuState.value === 0 && r.value && t.activationTrigger.value !== 0 && Y(() => {
      var p, c;
      return (c = (p = x(o)) == null ? void 0 : p.scrollIntoView) == null ? void 0 : c.call(p, { block: "nearest" });
    });
  });
  function i(p) {
    if (e.disabled)
      return p.preventDefault();
    t.closeMenu(), jt(x(t.buttonRef));
  }
  function d() {
    if (e.disabled)
      return t.goToItem(D.Nothing);
    t.goToItem(D.Specific, e.id);
  }
  let s = Vt();
  function f(p) {
    s.update(p);
  }
  function v(p) {
    s.wasMoved(p) && (e.disabled || r.value || t.goToItem(D.Specific, e.id, 0));
  }
  function m(p) {
    s.wasMoved(p) && (e.disabled || r.value && t.goToItem(D.Nothing));
  }
  return () => {
    let { disabled: p } = e, c = { active: r.value, disabled: p, close: t.closeMenu }, { id: g, ...w } = e;
    return N({ ourProps: { id: g, ref: o, role: "menuitem", tabIndex: p === !0 ? void 0 : -1, "aria-disabled": p === !0 ? !0 : void 0, disabled: void 0, onClick: i, onFocus: d, onPointerenter: f, onMouseenter: f, onPointermove: v, onMousemove: v, onPointerleave: m, onMouseleave: m }, theirProps: { ...n, ...w }, slot: c, attrs: n, slots: l, name: "MenuItem" });
  };
} });
function gn(e) {
  let l = { called: !1 };
  return (...n) => {
    if (!l.called)
      return l.called = !0, e(...n);
  };
}
function Ye(e, ...l) {
  e && l.length > 0 && e.classList.add(...l);
}
function Ve(e, ...l) {
  e && l.length > 0 && e.classList.remove(...l);
}
var tt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(tt || {});
function hn(e, l) {
  let n = ct();
  if (!e)
    return n.dispose;
  let { transitionDuration: a, transitionDelay: t } = getComputedStyle(e), [o, r] = [a, t].map((u) => {
    let [i = 0] = u.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, s) => s - d);
    return i;
  });
  return o !== 0 ? n.setTimeout(() => l("finished"), o + r) : l("finished"), n.add(() => l("cancelled")), n.dispose;
}
function xt(e, l, n, a, t, o) {
  let r = ct(), u = o !== void 0 ? gn(o) : () => {
  };
  return Ve(e, ...t), Ye(e, ...l, ...n), r.nextFrame(() => {
    Ve(e, ...n), Ye(e, ...a), r.add(hn(e, (i) => (Ve(e, ...a, ...l), Ye(e, ...t), u(i))));
  }), r.add(() => Ve(e, ...l, ...n, ...a, ...t)), r.add(() => u("cancelled")), r.dispose;
}
function ge(e = "") {
  return e.split(" ").filter((l) => l.trim().length > 1);
}
let pt = Symbol("TransitionContext");
var yn = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(yn || {});
function xn() {
  return ae(pt, null) !== null;
}
function wn() {
  let e = ae(pt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Sn() {
  let e = ae(vt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let vt = Symbol("NestingContext");
function ze(e) {
  return "children" in e ? ze(e.children) : e.value.filter(({ state: l }) => l === "visible").length > 0;
}
function Xt(e) {
  let l = h([]), n = h(!1);
  W(() => n.value = !0), re(() => n.value = !1);
  function a(o, r = fe.Hidden) {
    let u = l.value.findIndex(({ id: i }) => i === o);
    u !== -1 && (U(r, { [fe.Unmount]() {
      l.value.splice(u, 1);
    }, [fe.Hidden]() {
      l.value[u].state = "hidden";
    } }), !ze(l) && n.value && (e == null || e()));
  }
  function t(o) {
    let r = l.value.find(({ id: u }) => u === o);
    return r ? r.state !== "visible" && (r.state = "visible") : l.value.push({ id: o, state: "visible" }), () => a(o, fe.Unmount);
  }
  return { children: l, register: t, unregister: a };
}
let Zt = de.RenderStrategy, On = $({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: l, attrs: n, slots: a, expose: t }) {
  let o = h(0);
  function r() {
    o.value |= B.Opening, l("beforeEnter");
  }
  function u() {
    o.value &= ~B.Opening, l("afterEnter");
  }
  function i() {
    o.value |= B.Closing, l("beforeLeave");
  }
  function d() {
    o.value &= ~B.Closing, l("afterLeave");
  }
  if (!xn() && kl())
    return () => G(En, { ...e, onBeforeEnter: r, onAfterEnter: u, onBeforeLeave: i, onAfterLeave: d }, a);
  let s = h(null), f = h("visible"), v = b(() => e.unmount ? fe.Unmount : fe.Hidden);
  t({ el: s, $el: s });
  let { show: m, appear: p } = wn(), { register: c, unregister: g } = Sn(), w = { value: !0 }, j = X(), P = { value: !1 }, ne = Xt(() => {
    !P.value && f.value !== "hidden" && (f.value = "hidden", g(j), d());
  });
  W(() => {
    let ue = c(j);
    re(ue);
  }), Q(() => {
    if (v.value === fe.Hidden && j) {
      if (m && f.value !== "visible") {
        f.value = "visible";
        return;
      }
      U(f.value, { hidden: () => g(j), visible: () => c(j) });
    }
  });
  let Z = ge(e.enter), S = ge(e.enterFrom), E = ge(e.enterTo), I = ge(e.entered), O = ge(e.leave), R = ge(e.leaveFrom), M = ge(e.leaveTo);
  W(() => {
    Q(() => {
      if (f.value === "visible") {
        let ue = x(s);
        if (ue instanceof Comment && ue.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function me(ue) {
    let Te = w.value && !p.value, k = x(s);
    !k || !(k instanceof HTMLElement) || Te || (P.value = !0, m.value && r(), m.value || i(), ue(m.value ? xt(k, Z, S, E, I, (L) => {
      P.value = !1, L === tt.Finished && u();
    }) : xt(k, O, R, M, I, (L) => {
      P.value = !1, L === tt.Finished && (ze(ne) || (f.value = "hidden", g(j), d()));
    })));
  }
  return W(() => {
    ce([m], (ue, Te, k) => {
      me(k), w.value = !1;
    }, { immediate: !0 });
  }), oe(vt, ne), rt(b(() => U(f.value, { visible: B.Open, hidden: B.Closed }) | o.value)), () => {
    let { appear: ue, show: Te, enter: k, enterFrom: L, enterTo: z, entered: K, leave: Ne, leaveFrom: be, leaveTo: Ra, ...mt } = e, tl = { ref: s }, ll = { ...mt, ...p && m && Le.isServer ? { class: ve([mt.class, ...Z, ...S]) } : {} };
    return N({ theirProps: ll, ourProps: tl, slot: {}, slots: a, attrs: n, features: Zt, visible: f.value === "visible", name: "TransitionChild" });
  };
} }), Pn = On, En = $({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: l, attrs: n, slots: a }) {
  let t = De(), o = b(() => e.show === null && t !== null ? (t.value & B.Open) === B.Open : e.show);
  Q(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = h(o.value ? "visible" : "hidden"), u = Xt(() => {
    r.value = "hidden";
  }), i = h(!0), d = { show: o, appear: b(() => e.appear || !i.value) };
  return W(() => {
    Q(() => {
      i.value = !1, o.value ? r.value = "visible" : ze(u) || (r.value = "hidden");
    });
  }), oe(vt, u), oe(pt, d), () => {
    let s = qe(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return N({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...a, default: () => [G(Pn, { onBeforeEnter: () => l("beforeEnter"), onAfterEnter: () => l("afterEnter"), onBeforeLeave: () => l("beforeLeave"), onAfterLeave: () => l("afterLeave"), ...n, ...f, ...s }, a.default)] }, attrs: {}, features: Zt, visible: r.value === "visible", name: "Transition" });
  };
} });
var wt;
const Tn = typeof window < "u";
Tn && ((wt = window == null ? void 0 : window.navigator) == null ? void 0 : wt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function In(e) {
  return e;
}
const lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nt = "__vueuse_ssr_handlers__";
lt[nt] = lt[nt] || {};
lt[nt];
var St;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(St || (St = {}));
var kn = Object.defineProperty, Ot = Object.getOwnPropertySymbols, Rn = Object.prototype.hasOwnProperty, Cn = Object.prototype.propertyIsEnumerable, Pt = (e, l, n) => l in e ? kn(e, l, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[l] = n, An = (e, l) => {
  for (var n in l || (l = {}))
    Rn.call(l, n) && Pt(e, n, l[n]);
  if (Ot)
    for (var n of Ot(l))
      Cn.call(l, n) && Pt(e, n, l[n]);
  return e;
};
const Fn = {
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
An({
  linear: In
}, Fn);
const Dn = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [a, t] of l)
    n[a] = t;
  return n;
}, we = {
  id: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: ""
  },
  modelValue: {
    default: null
  },
  description: {
    default: null
  },
  error: {
    type: String,
    default: null
  }
};
function $e(e, l) {
  return b({
    get: () => e.modelValue,
    set: (n) => l("update:modelValue", n)
  });
}
const Ln = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, jn = { name: "Error" }, Ee = /* @__PURE__ */ Object.assign(jn, {
  props: ["error"],
  setup(e) {
    return (l, n) => e.error ? (y(), T("div", Ln, [
      se(l.$slots, "default", {}, () => [
        Fe(J(e.error), 1)
      ])
    ])) : q("", !0);
  }
}), $n = { class: "mt-1 rounded-md shadow-sm" }, Nn = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, Mn = {
  name: "Base",
  inheritAttrs: !1
}, ft = /* @__PURE__ */ Object.assign(Mn, {
  props: {
    description: {
      default: null
    },
    error: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (l, n) => (y(), T("div", null, [
      F("div", $n, [
        se(l.$slots, "default")
      ]),
      e.description ? (y(), T("p", Nn, J(e.description), 1)) : q("", !0),
      e.error ? (y(), H(Ee, {
        key: 1,
        error: e.error
      }, null, 8, ["error"])) : q("", !0)
    ]));
  }
}), Vn = ["id"], Bn = {
  key: 0,
  value: null
}, Un = ["value"], Hn = { name: "Select" };
({
  ...we
});
const qn = { name: "Actions" }, Wn = { class: "mt-8 border-t border-gray-200 pt-5" }, zn = { class: "flex justify-end" }, Kn = { class: "inline-flex rounded-md shadow-sm" };
function Gn(e, l, n, a, t, o) {
  return y(), T("div", Wn, [
    F("div", zn, [
      F("span", Kn, [
        se(e.$slots, "default")
      ])
    ])
  ]);
}
const Qn = /* @__PURE__ */ Dn(qn, [["render", Gn]]), Yn = { class: "relative mt-1" }, Jn = { class: "flex items-center" }, Xn = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
};
({
  ...we
});
const Zn = { class: "relative flex items-start" }, _n = { class: "flex h-5 items-center" }, ea = ["id", "value"], ta = { class: "ml-3" }, la = ["for"], na = { name: "Checkbox" }, aa = /* @__PURE__ */ Object.assign(na, {
  props: {
    ...we,
    label: {
      type: String,
      required: !0
    },
    value: {
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = $e(e, l);
    return (a, t) => (y(), T(ee, null, [
      F("div", Zn, [
        F("div", _n, [
          pe(F("input", le({
            id: a.id,
            "onUpdate:modelValue": t[0] || (t[0] = (o) => Oe(n) ? n.value = o : null),
            value: e.value,
            type: "checkbox",
            class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          }, a.$attrs), null, 16, ea), [
            [ul, A(n)]
          ]),
          F("div", ta, [
            F("label", {
              for: a.id,
              class: "block text-sm font-medium capitalize leading-5 text-gray-700"
            }, J(e.label), 9, la)
          ])
        ])
      ]),
      a.error ? (y(), H(Ee, {
        key: 0,
        error: a.error
      }, null, 8, ["error"])) : q("", !0)
    ], 64));
  }
}), oa = ["type", "id", "placeholder"], ra = { name: "Text" };
({
  ...we
});
const ua = { class: "flex items-center space-x-2" }, ia = ["src", "alt"], sa = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, da = { name: "Image" };
({
  ...we
});
const ca = ["for"], pa = { name: "Label" }, _t = /* @__PURE__ */ Object.assign(pa, {
  props: {
    for: String
  },
  setup(e) {
    const l = e, n = b(() => l.for);
    return (a, t) => (y(), T("label", {
      for: A(n),
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      se(a.$slots, "default")
    ], 8, ca));
  }
}), va = { class: "relative mt-1 rounded-md shadow-sm" }, fa = ["id", "placeholder", "step"], ma = {
  key: 0,
  class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
}, ba = { class: "text-gray-500 sm:text-sm sm:leading-5" }, ga = { name: "Number" };
({
  ...we
});
const ha = { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" }, ya = { class: "text-gray-500 sm:text-sm sm:leading-5" }, xa = ["id", "placeholder"], wa = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3" }, Sa = { class: "text-gray-500 sm:text-sm sm:leading-5" }, Oa = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, Pa = { name: "Price" };
({
  ...we
});
const Je = {
  __name: "ElementGroup",
  props: {
    id: {
      type: String,
      required: !0
    },
    element: {
      required: !0
    },
    form: {
      required: !0
    },
    showLabel: {
      default: !0
    }
  },
  setup(e) {
    return (l, n) => {
      var a;
      return y(), T("div", null, [
        e.showLabel ? (y(), H(A(_t), {
          key: 0,
          for: e.id
        }, {
          default: te(() => [
            Fe(J(e.id.replaceAll("_id", "").replaceAll("_", " ")), 1)
          ]),
          _: 1
        }, 8, ["for"])) : q("", !0),
        e.element.type ? (y(), H(bt(e.element.type), le({
          key: e.id,
          id: e.id,
          modelValue: e.form[e.id],
          "onUpdate:modelValue": n[0] || (n[0] = (t) => e.form[e.id] = t)
        }, (a = e.element.props) != null ? a : null), null, 16, ["id", "modelValue"])) : (y(), H(bt(e.element), le({
          key: e.id,
          id: e.id,
          modelValue: e.form[e.id],
          "onUpdate:modelValue": n[1] || (n[1] = (t) => e.form[e.id] = t)
        }, l.$attrs), null, 16, ["id", "modelValue"])),
        _(A(Ee), {
          error: e.form.errors[e.id]
        }, null, 8, ["error"])
      ]);
    };
  }
}, Ea = { key: 0 }, Ta = {
  key: 1,
  class: "grid grid-flow-col gap-x-4 gap-y-6"
}, el = {
  __name: "Schema",
  props: {
    element: {
      type: Object,
      required: !0
    },
    schema: {
      type: Object,
      required: !0
    },
    label: {
      required: !0
    }
  },
  setup(e) {
    return (l, n) => Array.isArray(e.element) ? (y(), T("div", Ea, [
      (y(!0), T(ee, null, Se(e.element, (a, t) => (y(), H(el, {
        element: a,
        label: t,
        schema: e.schema
      }, null, 8, ["element", "label", "schema"]))), 256))
    ])) : e.element.type === "grid" ? (y(), T("div", Ta, [
      (y(!0), T(ee, null, Se(e.element.schema, (a, t) => (y(), H(Je, le({
        key: t,
        id: t,
        element: a,
        form: e.schema.form
      }, a), null, 16, ["id", "element", "form"]))), 128))
    ])) : e.element.type === "checkboxes" ? (y(), T(ee, { key: 2 }, [
      _(A(_t), null, {
        default: te(() => {
          var a;
          return [
            Fe(J(((a = e.element.label) != null ? a : e.label).replaceAll("_id", "").replaceAll("_", " ")), 1)
          ];
        }),
        _: 1
      }),
      (y(!0), T(ee, null, Se(e.element.items, (a) => {
        var t, o, r;
        return y(), H(Je, {
          id: (t = a.label) != null ? t : a,
          element: A(aa),
          modelValue: e.schema.form[e.label],
          "onUpdate:modelValue": n[0] || (n[0] = (u) => e.schema.form[e.label] = u),
          form: e.schema.form,
          label: (o = a.label) != null ? o : a,
          value: (r = a.value) != null ? r : a,
          "show-label": !1
        }, null, 8, ["id", "element", "modelValue", "form", "label", "value"]);
      }), 256))
    ], 64)) : (y(), H(Je, le({
      key: e.label,
      id: e.label,
      element: e.element,
      form: e.schema.form
    }, e.element), null, 16, ["id", "element", "form"]));
  }
}, Ia = { class: "mx-auto mt-6 max-w-md space-y-6" }, Fa = {
  __name: "FormBuilder",
  props: {
    schema: {
      type: Object,
      required: !0
    },
    submit: {
      type: String,
      default: "Save"
    }
  },
  setup(e) {
    return (l, n) => (y(), T("div", Ia, [
      (y(!0), T(ee, null, Se(e.schema.schema, (a, t) => (y(), H(el, {
        element: a,
        label: t,
        schema: e.schema
      }, null, 8, ["element", "label", "schema"]))), 256)),
      _(A(Qn), null, {
        default: te(() => [
          se(l.$slots, "actions", {
            form: e.schema.form
          }, () => [
            _(A(gl), {
              loading: e.schema.form.processing,
              type: "submit"
            }, {
              default: te(() => [
                Fe(J(e.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 3
      })
    ]));
  }
}, ka = (e) => Object.keys(e).reduce((l, n) => {
  var a;
  return l[n] = (a = e[n].value) != null ? a : null, l;
}, {});
function Da(...e) {
  const l = e[0], n = dl(
    Object.keys(l).reduce((a, t) => {
      var o, r;
      return l[t].schema ? { ...a, ...ka(l[t].schema) } : l[t].type === "checkboxes" ? (a[t] = (o = l[t].checked) != null ? o : [], a) : (a[t] = (r = l[t].value) != null ? r : null, a);
    }, {})
  );
  return {
    schema: l,
    form: n
  };
}
export {
  Je as ElementGroup,
  Fa as FormBuilder,
  Da as useSchema
};
