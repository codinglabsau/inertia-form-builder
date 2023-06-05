import { defineComponent as I, ref as y, computed as g, toRaw as B, provide as X, onMounted as $, watch as de, h as U, Fragment as ge, watchEffect as W, onUnmounted as Y, nextTick as G, inject as J, Teleport as an, reactive as rn, unref as ne, normalizeClass as Xe, openBlock as F, createBlock as re, mergeProps as ie, withCtx as be, renderSlot as ae, cloneVNode as un, createElementBlock as q, createTextVNode as Ze, toDisplayString as Pe, createCommentVNode as De, createElementVNode as ee, withDirectives as We, isRef as sn, vModelCheckbox as dn, createVNode as Oe, vShow as dt, shallowRef as cn, resolveDynamicComponent as fn, toHandlers as pn, renderList as et } from "vue";
import { Link as vn, useForm as mn } from "@inertiajs/vue3";
const bn = /* @__PURE__ */ ee("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), gn = /* @__PURE__ */ ee("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), hn = [
  bn,
  gn
], yn = { name: "Spinner" }, ct = /* @__PURE__ */ I({
  ...yn,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (t, l) => (F(), q("svg", {
      class: Xe(["h-5 w-5 animate-spin", t.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, hn, 2));
  }
}), wn = ["disabled", "type"], xn = ["href"], Sn = { name: "Button" }, On = /* @__PURE__ */ I({
  ...Sn,
  props: {
    as: { default: "a" },
    external: { type: Boolean },
    href: { default: "" },
    loading: { type: Boolean },
    spinnerClass: { default: "text-white" },
    type: {}
  },
  setup(e) {
    const t = e, l = g(() => t.type !== void 0 && t.as !== "button" ? (console.warn(
      "Warning: The 'as' prop should be set to 'button' when using the 'type' prop. This will be an error in a future release."
    ), "button") : t.as), o = [
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
      "focus:outline-none"
    ];
    return (n, a) => l.value === "button" ? (F(), q("button", ie({
      key: 0,
      class: o,
      disabled: n.loading,
      type: n.type
    }, n.$attrs), [
      ae(n.$slots, "default"),
      We(Oe(ct, { class: "ml-3" }, null, 512), [
        [dt, n.loading]
      ])
    ], 16, wn)) : n.external ? (F(), q("a", ie({
      key: 2,
      href: n.href,
      class: o
    }, n.$attrs), [
      ae(n.$slots, "default")
    ], 16, xn)) : (F(), re(ne(vn), ie({
      key: 1,
      as: n.as,
      href: n.href,
      disabled: n.loading,
      class: o
    }, n.$attrs), {
      default: be(() => [
        ae(n.$slots, "default"),
        We(Oe(ct, {
          class: "ml-3",
          "text-class": n.spinnerClass
        }, null, 8, ["text-class"]), [
          [dt, n.loading]
        ])
      ]),
      _: 3
    }, 16, ["as", "href", "disabled"]));
  }
}), En = { name: "PrimaryButton" }, Pn = /* @__PURE__ */ I({
  ...En,
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
    return (l, o) => (F(), re(On, ie({
      as: l.as,
      external: l.external,
      href: l.href,
      loading: l.loading,
      type: l.type,
      class: t
    }, l.$attrs), {
      default: be(() => [
        ae(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "external", "href", "loading", "type"]));
  }
});
function N(e, t, ...l) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...l) : n;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, N), o;
}
var le = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(le || {}), ue = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ue || {});
function M({ visible: e = !0, features: t = 0, ourProps: l, theirProps: o, ...n }) {
  var a;
  let r = St(o, l), d = Object.assign(n, { props: r });
  if (e || t & 2 && r.static)
    return _e(d);
  if (t & 1) {
    let s = (a = r.unmount) == null || a ? 0 : 1;
    return N(s, { [0]() {
      return null;
    }, [1]() {
      return _e({ ...n, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return _e(d);
}
function _e({ props: e, attrs: t, slots: l, slot: o, name: n }) {
  var a, r;
  let { as: d, ...s } = Fe(e, ["unmount", "static"]), i = (a = l.default) == null ? void 0 : a.call(l, o), u = {};
  if (o) {
    let v = !1, m = [];
    for (let [f, p] of Object.entries(o))
      typeof p == "boolean" && (v = !0), p === !0 && m.push(f);
    v && (u["data-headlessui-state"] = m.join(" "));
  }
  if (d === "template") {
    if (i = xt(i != null ? i : []), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [v, ...m] = i != null ? i : [];
      if (!Tn(v) || m.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).map((c) => c.trim()).filter((c, b, w) => w.indexOf(c) === b).sort((c, b) => c.localeCompare(b)).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
      let f = St((r = v.props) != null ? r : {}, s), p = un(v, f);
      for (let c in f)
        c.startsWith("on") && (p.props || (p.props = {}), p.props[c] = f[c]);
      return p;
    }
    return Array.isArray(i) && i.length === 1 ? i[0] : i;
  }
  return U(d, Object.assign({}, s, u), { default: () => i });
}
function xt(e) {
  return e.flatMap((t) => t.type === ge ? xt(t.children) : [t]);
}
function St(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, l = {};
  for (let o of e)
    for (let n in o)
      n.startsWith("on") && typeof o[n] == "function" ? (l[n] != null || (l[n] = []), l[n].push(o[n])) : t[n] = o[n];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(l).map((o) => [o, void 0])));
  for (let o in l)
    Object.assign(t, { [o](n, ...a) {
      let r = l[o];
      for (let d of r) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        d(n, ...a);
      }
    } });
  return t;
}
function In(e) {
  let t = Object.assign({}, e);
  for (let l in t)
    t[l] === void 0 && delete t[l];
  return t;
}
function Fe(e, t = []) {
  let l = Object.assign({}, e);
  for (let o of t)
    o in l && delete l[o];
  return l;
}
function Tn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Rn = 0;
function Cn() {
  return ++Rn;
}
function K() {
  return Cn();
}
var T = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(T || {});
function kn(e) {
  throw new Error("Unexpected object: " + e);
}
var C = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(C || {});
function Ot(e, t) {
  let l = t.resolveItems();
  if (l.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), n = o != null ? o : -1, a = (() => {
    switch (e.focus) {
      case 0:
        return l.findIndex((r) => !t.resolveDisabled(r));
      case 1: {
        let r = l.slice().reverse().findIndex((d, s, i) => n !== -1 && i.length - s - 1 >= n ? !1 : !t.resolveDisabled(d));
        return r === -1 ? r : l.length - 1 - r;
      }
      case 2:
        return l.findIndex((r, d) => d <= n ? !1 : !t.resolveDisabled(r));
      case 3: {
        let r = l.slice().reverse().findIndex((d) => !t.resolveDisabled(d));
        return r === -1 ? r : l.length - 1 - r;
      }
      case 4:
        return l.findIndex((r) => t.resolveId(r) === e.id);
      case 5:
        return null;
      default:
        kn(e);
    }
  })();
  return a === -1 ? o : a;
}
function h(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Et = Symbol("Context");
var _ = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(_ || {});
function Ln() {
  return Ie() !== null;
}
function Ie() {
  return J(Et, null);
}
function tt(e) {
  X(Et, e);
}
function ft(e, t) {
  if (e)
    return e;
  let l = t != null ? t : "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function Pt(e, t) {
  let l = y(ft(e.value.type, e.value.as));
  return $(() => {
    l.value = ft(e.value.type, e.value.as);
  }), W(() => {
    var o;
    l.value || h(t) && h(t) instanceof HTMLButtonElement && !((o = h(t)) != null && o.hasAttribute("type")) && (l.value = "button");
  }), l;
}
var Dn = Object.defineProperty, An = (e, t, l) => t in e ? Dn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, pt = (e, t, l) => (An(e, typeof t != "symbol" ? t + "" : t, l), l);
class Fn {
  constructor() {
    pt(this, "current", this.detect()), pt(this, "currentId", 0);
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
let Te = new Fn();
function me(e) {
  if (Te.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = h(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function It({ container: e, accept: t, walk: l, enabled: o }) {
  W(() => {
    let n = e.value;
    if (!n || o !== void 0 && !o.value)
      return;
    let a = me(e);
    if (!a)
      return;
    let r = Object.assign((s) => t(s), { acceptNode: t }), d = a.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; d.nextNode(); )
      l(d.currentNode);
  });
}
let Ge = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var te = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(te || {}), Tt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Tt || {}), Mn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Mn || {});
function Rt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ge)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var nt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(nt || {});
function lt(e, t = 0) {
  var l;
  return e === ((l = me(e)) == null ? void 0 : l.body) ? !1 : N(t, { [0]() {
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
function Ct(e) {
  let t = me(e);
  G(() => {
    t && !lt(t.activeElement, 0) && se(e);
  });
}
var jn = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(jn || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function se(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Bn = ["textarea", "input"].join(",");
function _n(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Bn)) != null ? l : !1;
}
function ot(e, t = (l) => l) {
  return e.slice().sort((l, o) => {
    let n = t(l), a = t(o);
    if (n === null || a === null)
      return 0;
    let r = n.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Nn(e, t) {
  return Se(Rt(), t, { relativeTo: e });
}
function Se(e, t, { sorted: l = !0, relativeTo: o = null, skipElements: n = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, d = Array.isArray(e) ? l ? ot(e) : e : Rt(e);
  n.length > 0 && d.length > 1 && (d = d.filter((p) => !n.includes(p))), o = o != null ? o : r.activeElement;
  let s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), i = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, d.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, d.indexOf(o)) + 1;
    if (t & 8)
      return d.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, v = 0, m = d.length, f;
  do {
    if (v >= m || v + m <= 0)
      return 0;
    let p = i + v;
    if (t & 16)
      p = (p + m) % m;
    else {
      if (p < 0)
        return 3;
      if (p >= m)
        return 1;
    }
    f = d[p], f == null || f.focus(u), v += s;
  } while (f !== r.activeElement);
  return t & 6 && _n(f) && f.select(), 2;
}
function Ne(e, t, l) {
  Te.isServer || W((o) => {
    document.addEventListener(e, t, l), o(() => document.removeEventListener(e, t, l));
  });
}
function at(e, t, l = g(() => !0)) {
  function o(a, r) {
    if (!l.value || a.defaultPrevented)
      return;
    let d = r(a);
    if (d === null || !d.getRootNode().contains(d))
      return;
    let s = function i(u) {
      return typeof u == "function" ? i(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let i of s) {
      if (i === null)
        continue;
      let u = i instanceof HTMLElement ? i : h(i);
      if (u != null && u.contains(d) || a.composed && a.composedPath().includes(u))
        return;
    }
    return !lt(d, nt.Loose) && d.tabIndex !== -1 && a.preventDefault(), t(a, d);
  }
  let n = y(null);
  Ne("mousedown", (a) => {
    var r, d;
    l.value && (n.value = ((d = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : d[0]) || a.target);
  }, !0), Ne("click", (a) => {
    n.value && (o(a, () => n.value), n.value = null);
  }, !0), Ne("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ee = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ee || {});
let Ae = I({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: o, ...n } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return M({ ourProps: a, theirProps: n, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function kt(e = {}, t = null, l = []) {
  for (let [o, n] of Object.entries(e))
    Dt(l, Lt(t, o), n);
  return l;
}
function Lt(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Dt(e, t, l) {
  if (Array.isArray(l))
    for (let [o, n] of l.entries())
      Dt(e, Lt(t, o.toString()), n);
  else
    l instanceof Date ? e.push([t, l.toISOString()]) : typeof l == "boolean" ? e.push([t, l ? "1" : "0"]) : typeof l == "string" ? e.push([t, l]) : typeof l == "number" ? e.push([t, `${l}`]) : l == null ? e.push([t, ""]) : kt(l, t, e);
}
function $n(e, t, l) {
  let o = y(l == null ? void 0 : l.value), n = g(() => e.value !== void 0);
  return [g(() => n.value ? e.value : o.value), function(a) {
    return n.value || (o.value = a), t == null ? void 0 : t(a);
  }];
}
function vt(e) {
  return [e.screenX, e.screenY];
}
function At() {
  let e = y([-1, -1]);
  return { wasMoved(t) {
    let l = vt(t);
    return e.value[0] === l[0] && e.value[1] === l[1] ? !1 : (e.value = l, !0);
  }, update(t) {
    e.value = vt(t);
  } };
}
function Ft() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Vn() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Hn() {
  return Ft() || Vn();
}
function Un(e, t) {
  return e === t;
}
var Wn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Wn || {}), Gn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Gn || {}), Kn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Kn || {});
let Mt = Symbol("ComboboxContext");
function he(e) {
  let t = J(Mt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, he), l;
  }
  return t;
}
I({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Un }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: o }) {
  let n = y(1), a = y(null), r = y(null), d = y(null), s = y(null), i = y({ static: !1, hold: !1 }), u = y([]), v = y(null), m = y(1), f = y(!1);
  function p(S = (P) => P) {
    let P = v.value !== null ? u.value[v.value] : null, E = ot(S(u.value.slice()), (D) => h(D.dataRef.domRef)), x = P ? E.indexOf(P) : null;
    return x === -1 && (x = null), { options: E, activeOptionIndex: x };
  }
  let c = g(() => e.multiple ? 1 : 0), b = g(() => e.nullable), [w, L] = $n(g(() => e.modelValue === void 0 ? N(c.value, { [1]: [], [0]: void 0 }) : e.modelValue), (S) => o("update:modelValue", S), g(() => e.defaultValue)), O = { comboboxState: n, value: w, mode: c, compare(S, P) {
    if (typeof e.by == "string") {
      let E = e.by;
      return (S == null ? void 0 : S[E]) === (P == null ? void 0 : P[E]);
    }
    return e.by(S, P);
  }, defaultValue: g(() => e.defaultValue), nullable: b, inputRef: r, labelRef: a, buttonRef: d, optionsRef: s, disabled: g(() => e.disabled), options: u, change(S) {
    L(S);
  }, activeOptionIndex: g(() => {
    if (f.value && v.value === null && u.value.length > 0) {
      let S = u.value.findIndex((P) => !P.dataRef.disabled);
      if (S !== -1)
        return S;
    }
    return v.value;
  }), activationTrigger: m, optionsPropsRef: i, closeCombobox() {
    f.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, v.value = null);
  }, openCombobox() {
    if (f.value = !0, e.disabled || n.value === 0)
      return;
    let S = u.value.findIndex((P) => {
      let E = B(P.dataRef.value);
      return N(c.value, { [0]: () => O.compare(B(O.value.value), B(E)), [1]: () => B(O.value.value).some((x) => O.compare(B(x), B(E))) });
    });
    S !== -1 && (v.value = S), n.value = 0;
  }, goToOption(S, P, E) {
    if (f.value = !1, e.disabled || s.value && !i.value.static && n.value === 1)
      return;
    let x = p();
    if (x.activeOptionIndex === null) {
      let j = x.options.findIndex((oe) => !oe.dataRef.disabled);
      j !== -1 && (x.activeOptionIndex = j);
    }
    let D = Ot(S === C.Specific ? { focus: C.Specific, id: P } : { focus: S }, { resolveItems: () => x.options, resolveActiveIndex: () => x.activeOptionIndex, resolveId: (j) => j.id, resolveDisabled: (j) => j.dataRef.disabled });
    v.value = D, m.value = E != null ? E : 1, u.value = x.options;
  }, selectOption(S) {
    let P = u.value.find((x) => x.id === S);
    if (!P)
      return;
    let { dataRef: E } = P;
    L(N(c.value, { [0]: () => E.value, [1]: () => {
      let x = B(O.value.value).slice(), D = B(E.value), j = x.findIndex((oe) => O.compare(D, B(oe)));
      return j === -1 ? x.push(D) : x.splice(j, 1), x;
    } }));
  }, selectActiveOption() {
    if (O.activeOptionIndex.value === null)
      return;
    let { dataRef: S, id: P } = u.value[O.activeOptionIndex.value];
    L(N(c.value, { [0]: () => S.value, [1]: () => {
      let E = B(O.value.value).slice(), x = B(S.value), D = E.findIndex((j) => O.compare(x, B(j)));
      return D === -1 ? E.push(x) : E.splice(D, 1), E;
    } })), O.goToOption(C.Specific, P);
  }, registerOption(S, P) {
    let E = { id: S, dataRef: P }, x = p((D) => [...D, E]);
    if (v.value === null) {
      let D = P.value.value;
      N(c.value, { [0]: () => O.compare(B(O.value.value), B(D)), [1]: () => B(O.value.value).some((j) => O.compare(B(j), B(D))) }) && (x.activeOptionIndex = x.options.indexOf(E));
    }
    u.value = x.options, v.value = x.activeOptionIndex, m.value = 1;
  }, unregisterOption(S) {
    var P;
    O.activeOptionIndex.value !== null && ((P = O.options.value[O.activeOptionIndex.value]) == null ? void 0 : P.id) === S && (f.value = !0);
    let E = p((x) => {
      let D = x.findIndex((j) => j.id === S);
      return D !== -1 && x.splice(D, 1), x;
    });
    u.value = E.options, v.value = E.activeOptionIndex, m.value = 1;
  } };
  at([r, d, s], () => O.closeCombobox(), g(() => n.value === 0)), X(Mt, O), tt(g(() => N(n.value, { [0]: _.Open, [1]: _.Closed })));
  let Q = g(() => O.activeOptionIndex.value === null ? null : u.value[O.activeOptionIndex.value].dataRef.value), z = g(() => {
    var S;
    return (S = h(r)) == null ? void 0 : S.closest("form");
  });
  return $(() => {
    de([z], () => {
      if (!z.value || e.defaultValue === void 0)
        return;
      function S() {
        O.change(e.defaultValue);
      }
      return z.value.addEventListener("reset", S), () => {
        var P;
        (P = z.value) == null || P.removeEventListener("reset", S);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: S, disabled: P, form: E, ...x } = e, D = { open: n.value === 0, disabled: P, activeIndex: O.activeOptionIndex.value, activeOption: Q.value, value: w.value };
    return U(ge, [...S != null && w.value != null ? kt({ [S]: w.value }).map(([j, oe]) => U(Ae, In({ features: Ee.Hidden, key: j, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: E, name: j, value: oe }))) : [], M({ theirProps: { ...l, ...Fe(x, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: D, slots: t, attrs: l, name: "Combobox" })]);
  };
} });
I({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${K()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = he("ComboboxLabel");
  function n() {
    var a;
    (a = h(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: r, ...d } = e, s = { id: r, ref: o.labelRef, onClick: n };
    return M({ ourProps: s, theirProps: d, slot: a, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} });
I({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${K()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = he("ComboboxButton");
  o({ el: n.buttonRef, $el: n.buttonRef });
  function a(s) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (s.preventDefault(), n.openCombobox()), G(() => {
      var i;
      return (i = h(n.inputRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
    }));
  }
  function r(s) {
    switch (s.key) {
      case T.ArrowDown:
        s.preventDefault(), s.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), G(() => {
          var i;
          return (i = n.inputRef.value) == null ? void 0 : i.focus({ preventScroll: !0 });
        });
        return;
      case T.ArrowUp:
        s.preventDefault(), s.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), G(() => {
          n.value.value || n.goToOption(C.Last);
        })), G(() => {
          var i;
          return (i = n.inputRef.value) == null ? void 0 : i.focus({ preventScroll: !0 });
        });
        return;
      case T.Escape:
        if (n.comboboxState.value !== 0)
          return;
        s.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && s.stopPropagation(), n.closeCombobox(), G(() => {
          var i;
          return (i = n.inputRef.value) == null ? void 0 : i.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let d = Pt(g(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var s, i;
    let u = { open: n.comboboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: v, ...m } = e, f = { ref: n.buttonRef, id: v, type: d.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (s = h(n.optionsRef)) == null ? void 0 : s.id, "aria-expanded": n.disabled.value ? void 0 : n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(i = h(n.labelRef)) == null ? void 0 : i.id, v].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return M({ ourProps: f, theirProps: m, slot: u, attrs: t, slots: l, name: "ComboboxButton" });
  };
} });
I({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${K()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = he("ComboboxInput"), r = { value: !1 };
  n({ el: a.inputRef, $el: a.inputRef });
  let d = g(() => {
    var c;
    let b = a.value.value;
    return h(a.inputRef) ? typeof e.displayValue < "u" && b !== void 0 ? (c = e.displayValue(b)) != null ? c : "" : typeof b == "string" ? b : "" : "";
  });
  $(() => {
    de([d, a.comboboxState], ([c, b], [w, L]) => {
      if (r.value)
        return;
      let O = h(a.inputRef);
      O && (L === 0 && b === 1 || c !== w) && (O.value = c);
    }, { immediate: !0 }), de([a.comboboxState], ([c], [b]) => {
      if (c === 0 && b === 1) {
        let w = h(a.inputRef);
        if (!w)
          return;
        let L = w.value, { selectionStart: O, selectionEnd: Q, selectionDirection: z } = w;
        w.value = "", w.value = L, z !== null ? w.setSelectionRange(O, Q, z) : w.setSelectionRange(O, Q);
      }
    });
  });
  let s = y(!1);
  function i() {
    s.value = !0;
  }
  function u() {
    setTimeout(() => {
      s.value = !1;
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
            let w = h(a.optionsRef);
            w && (w.scrollTop = 0), a.goToOption(C.Nothing);
          }
        });
        break;
      case T.Enter:
        if (r.value = !1, a.comboboxState.value !== 0 || s.value)
          return;
        if (c.preventDefault(), c.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case T.ArrowDown:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), N(a.comboboxState.value, { [0]: () => a.goToOption(C.Next), [1]: () => a.openCombobox() });
      case T.ArrowUp:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), N(a.comboboxState.value, { [0]: () => a.goToOption(C.Previous), [1]: () => {
          a.openCombobox(), G(() => {
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
  function f() {
    r.value = !1;
  }
  let p = g(() => {
    var c, b, w, L;
    return (L = (w = (b = e.defaultValue) != null ? b : a.defaultValue.value !== void 0 ? (c = e.displayValue) == null ? void 0 : c.call(e, a.defaultValue.value) : null) != null ? w : a.defaultValue.value) != null ? L : "";
  });
  return () => {
    var c, b, w, L, O, Q;
    let z = { open: a.comboboxState.value === 0 }, { id: S, displayValue: P, onChange: E, ...x } = e, D = { "aria-controls": (c = a.optionsRef.value) == null ? void 0 : c.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (b = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : b.id, "aria-labelledby": (O = (w = h(a.labelRef)) == null ? void 0 : w.id) != null ? O : (L = h(a.buttonRef)) == null ? void 0 : L.id, "aria-autocomplete": "list", id: S, onCompositionstart: i, onCompositionend: u, onKeydown: v, onInput: m, onBlur: f, role: "combobox", type: (Q = l.type) != null ? Q : "text", tabIndex: 0, ref: a.inputRef, defaultValue: p.value, disabled: a.disabled.value === !0 ? !0 : void 0 };
    return M({ ourProps: D, theirProps: x, slot: z, attrs: l, slots: o, features: le.RenderStrategy | le.Static, name: "ComboboxInput" });
  };
} });
I({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = he("ComboboxOptions"), a = `headlessui-combobox-options-${K()}`;
  o({ el: n.optionsRef, $el: n.optionsRef }), W(() => {
    n.optionsPropsRef.value.static = e.static;
  }), W(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let r = Ie(), d = g(() => r !== null ? (r.value & _.Open) === _.Open : n.comboboxState.value === 0);
  return It({ container: g(() => h(n.optionsRef)), enabled: g(() => n.comboboxState.value === 0), accept(s) {
    return s.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : s.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s) {
    s.setAttribute("role", "none");
  } }), () => {
    var s, i, u;
    let v = { open: n.comboboxState.value === 0 }, m = { "aria-labelledby": (u = (s = h(n.labelRef)) == null ? void 0 : s.id) != null ? u : (i = h(n.buttonRef)) == null ? void 0 : i.id, id: a, ref: n.optionsRef, role: "listbox", "aria-multiselectable": n.mode.value === 1 ? !0 : void 0 }, f = Fe(e, ["hold"]);
    return M({ ourProps: m, theirProps: f, slot: v, attrs: t, slots: l, features: le.RenderStrategy | le.Static, visible: d.value, name: "ComboboxOptions" });
  };
} });
I({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: o }) {
  let n = he("ComboboxOption"), a = `headlessui-combobox-option-${K()}`, r = y(null);
  o({ el: r, $el: r });
  let d = g(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === a : !1), s = g(() => N(n.mode.value, { [0]: () => n.compare(B(n.value.value), B(e.value)), [1]: () => B(n.value.value).some((b) => n.compare(B(b), B(e.value))) })), i = g(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  $(() => n.registerOption(a, i)), Y(() => n.unregisterOption(a)), W(() => {
    n.comboboxState.value === 0 && d.value && n.activationTrigger.value !== 0 && G(() => {
      var b, w;
      return (w = (b = h(r)) == null ? void 0 : b.scrollIntoView) == null ? void 0 : w.call(b, { block: "nearest" });
    });
  });
  function u(b) {
    if (e.disabled)
      return b.preventDefault();
    n.selectOption(a), n.mode.value === 0 && n.closeCombobox(), Hn() || requestAnimationFrame(() => {
      var w;
      return (w = h(n.inputRef)) == null ? void 0 : w.focus();
    });
  }
  function v() {
    if (e.disabled)
      return n.goToOption(C.Nothing);
    n.goToOption(C.Specific, a);
  }
  let m = At();
  function f(b) {
    m.update(b);
  }
  function p(b) {
    m.wasMoved(b) && (e.disabled || d.value || n.goToOption(C.Specific, a, 0));
  }
  function c(b) {
    m.wasMoved(b) && (e.disabled || d.value && (n.optionsPropsRef.value.hold || n.goToOption(C.Nothing)));
  }
  return () => {
    let { disabled: b } = e, w = { active: d.value, selected: s.value, disabled: b }, L = { id: a, ref: r, role: "option", tabIndex: b === !0 ? void 0 : -1, "aria-disabled": b === !0 ? !0 : void 0, "aria-selected": s.value, disabled: void 0, onClick: u, onFocus: v, onPointerenter: f, onMouseenter: f, onPointermove: p, onMousemove: p, onPointerleave: c, onMouseleave: c };
    return M({ ourProps: L, theirProps: e, slot: w, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
function zn(e, t, l) {
  Te.isServer || W((o) => {
    window.addEventListener(e, t, l), o(() => window.removeEventListener(e, t, l));
  });
}
var xe = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(xe || {});
function qn() {
  let e = y(0);
  return zn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function jt(e, t, l, o) {
  Te.isServer || W((n) => {
    e = e != null ? e : window, e.addEventListener(t, l, o), n(() => e.removeEventListener(t, l, o));
  });
}
function Bt(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Qn(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function _t(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let l of e.value) {
    let o = h(l);
    o instanceof HTMLElement && t.add(o);
  }
  return t;
}
var Nt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Nt || {});
let ye = Object.assign(I({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = y(null);
  o({ el: n, $el: n });
  let a = g(() => me(n)), r = y(!1);
  $(() => r.value = !0), Y(() => r.value = !1), Jn({ ownerDocument: a }, g(() => r.value && Boolean(e.features & 16)));
  let d = Xn({ ownerDocument: a, container: n, initialFocus: g(() => e.initialFocus) }, g(() => r.value && Boolean(e.features & 2)));
  Zn({ ownerDocument: a, container: n, containers: e.containers, previousActiveElement: d }, g(() => r.value && Boolean(e.features & 8)));
  let s = qn();
  function i(f) {
    let p = h(n);
    !p || ((c) => c())(() => {
      N(s.value, { [xe.Forwards]: () => {
        Se(p, te.First, { skipElements: [f.relatedTarget] });
      }, [xe.Backwards]: () => {
        Se(p, te.Last, { skipElements: [f.relatedTarget] });
      } });
    });
  }
  let u = y(!1);
  function v(f) {
    f.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function m(f) {
    if (!r.value)
      return;
    let p = _t(e.containers);
    h(n) instanceof HTMLElement && p.add(h(n));
    let c = f.relatedTarget;
    c instanceof HTMLElement && c.dataset.headlessuiFocusGuard !== "true" && ($t(p, c) || (u.value ? Se(h(n), N(s.value, { [xe.Forwards]: () => te.Next, [xe.Backwards]: () => te.Previous }) | te.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && se(f.target)));
  }
  return () => {
    let f = {}, p = { ref: n, onKeydown: v, onFocusout: m }, { features: c, initialFocus: b, containers: w, ...L } = e;
    return U(ge, [Boolean(c & 4) && U(Ae, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: i, features: Ee.Focusable }), M({ ourProps: p, theirProps: { ...t, ...L }, slot: f, attrs: t, slots: l, name: "FocusTrap" }), Boolean(c & 4) && U(Ae, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: i, features: Ee.Focusable })]);
  };
} }), { features: Nt }), pe = [];
Qn(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && pe[0] !== t.target && (pe.unshift(t.target), pe = pe.filter((l) => l != null && l.isConnected), pe.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Yn(e) {
  let t = y(pe.slice());
  return de([e], ([l], [o]) => {
    o === !0 && l === !1 ? Bt(() => {
      t.value.splice(0);
    }) : o === !1 && l === !0 && (t.value = pe.slice());
  }, { flush: "post" }), () => {
    var l;
    return (l = t.value.find((o) => o != null && o.isConnected)) != null ? l : null;
  };
}
function Jn({ ownerDocument: e }, t) {
  let l = Yn(t);
  $(() => {
    W(() => {
      var o, n;
      t.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((n = e.value) == null ? void 0 : n.body) && se(l());
    }, { flush: "post" });
  }), Y(() => {
    se(l());
  });
}
function Xn({ ownerDocument: e, container: t, initialFocus: l }, o) {
  let n = y(null), a = y(!1);
  return $(() => a.value = !0), Y(() => a.value = !1), $(() => {
    de([t, l, o], (r, d) => {
      if (r.every((i, u) => (d == null ? void 0 : d[u]) === i) || !o.value)
        return;
      let s = h(t);
      s && Bt(() => {
        var i, u;
        if (!a.value)
          return;
        let v = h(l), m = (i = e.value) == null ? void 0 : i.activeElement;
        if (v) {
          if (v === m) {
            n.value = m;
            return;
          }
        } else if (s.contains(m)) {
          n.value = m;
          return;
        }
        v ? se(v) : Se(s, te.First | te.NoScroll) === Tt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function Zn({ ownerDocument: e, container: t, containers: l, previousActiveElement: o }, n) {
  var a;
  jt((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!n.value)
      return;
    let d = _t(l);
    h(t) instanceof HTMLElement && d.add(h(t));
    let s = o.value;
    if (!s)
      return;
    let i = r.target;
    i && i instanceof HTMLElement ? $t(d, i) ? (o.value = i, se(i)) : (r.preventDefault(), r.stopPropagation(), se(s)) : se(o.value);
  }, !0);
}
function $t(e, t) {
  for (let l of e)
    if (l.contains(t))
      return !0;
  return !1;
}
let $e = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map();
function mt(e, t = y(!0)) {
  W((l) => {
    var o;
    if (!t.value)
      return;
    let n = h(e);
    if (!n)
      return;
    l(function() {
      var r;
      if (!n)
        return;
      let d = (r = we.get(n)) != null ? r : 1;
      if (d === 1 ? we.delete(n) : we.set(n, d - 1), d !== 1)
        return;
      let s = $e.get(n);
      s && (s["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", s["aria-hidden"]), n.inert = s.inert, $e.delete(n));
    });
    let a = (o = we.get(n)) != null ? o : 0;
    we.set(n, a + 1), a === 0 && ($e.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0);
  });
}
let Vt = Symbol("ForcePortalRootContext");
function el() {
  return J(Vt, !1);
}
let Ke = I({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return X(Vt, e.force), () => {
    let { force: o, ...n } = e;
    return M({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function tl(e) {
  let t = me(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let l = t.getElementById("headlessui-portal-root");
  if (l)
    return l;
  let o = t.createElement("div");
  return o.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(o);
}
let Ht = I({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let o = y(null), n = g(() => me(o)), a = el(), r = J(Ut, null), d = y(a === !0 || r == null ? tl(o.value) : r.resolveTarget());
  return W(() => {
    a || r != null && (d.value = r.resolveTarget());
  }), Y(() => {
    var s, i;
    let u = (s = n.value) == null ? void 0 : s.getElementById("headlessui-portal-root");
    u && d.value === u && d.value.children.length <= 0 && ((i = d.value.parentElement) == null || i.removeChild(d.value));
  }), () => {
    if (d.value === null)
      return null;
    let s = { ref: o, "data-headlessui-portal": "" };
    return U(an, { to: d.value }, M({ ourProps: s, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), Ut = Symbol("PortalGroupContext"), nl = I({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let o = rn({ resolveTarget() {
    return e.target;
  } });
  return X(Ut, o), () => {
    let { target: n, ...a } = e;
    return M({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), Wt = Symbol("StackContext");
var ze = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ze || {});
function ll() {
  return J(Wt, () => {
  });
}
function ol({ type: e, enabled: t, element: l, onUpdate: o }) {
  let n = ll();
  function a(...r) {
    o == null || o(...r), n(...r);
  }
  $(() => {
    de(t, (r, d) => {
      r ? a(0, e, l) : d === !0 && a(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), Y(() => {
    t.value && a(1, e, l);
  }), X(Wt, a);
}
let Gt = Symbol("DescriptionContext");
function al() {
  let e = J(Gt, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function rl({ slot: e = y({}), name: t = "Description", props: l = {} } = {}) {
  let o = y([]);
  function n(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return X(Gt, { register: n, slot: e, name: t, props: l }), g(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
I({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${K()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = al();
  return $(() => Y(o.register(e.id))), () => {
    let { name: n = "Description", slot: a = y({}), props: r = {} } = o, { id: d, ...s } = e, i = { ...Object.entries(r).reduce((u, [v, m]) => Object.assign(u, { [v]: ne(m) }), {}), id: d };
    return M({ ourProps: i, theirProps: s, slot: a.value, attrs: t, slots: l, name: n });
  };
} });
function ul(e) {
  let t = cn(e.getSnapshot());
  return Y(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Me() {
  let e = [], t = { addEventListener(l, o, n, a) {
    return l.addEventListener(o, n, a), t.add(() => l.removeEventListener(o, n, a));
  }, requestAnimationFrame(...l) {
    let o = requestAnimationFrame(...l);
    t.add(() => cancelAnimationFrame(o));
  }, nextFrame(...l) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...l);
    });
  }, setTimeout(...l) {
    let o = setTimeout(...l);
    t.add(() => clearTimeout(o));
  }, style(l, o, n) {
    let a = l.style.getPropertyValue(o);
    return Object.assign(l.style, { [o]: n }), this.add(() => {
      Object.assign(l.style, { [o]: a });
    });
  }, group(l) {
    let o = Me();
    return l(o), this.add(() => o.dispose());
  }, add(l) {
    return e.push(l), () => {
      let o = e.indexOf(l);
      if (o >= 0)
        for (let n of e.splice(o, 1))
          n();
    };
  }, dispose() {
    for (let l of e.splice(0))
      l();
  } };
  return t;
}
function il(e, t) {
  let l = e(), o = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return l;
  }, subscribe(n) {
    return o.add(n), () => o.delete(n);
  }, dispatch(n, ...a) {
    let r = t[n].call(l, ...a);
    r && (l = r, o.forEach((d) => d()));
  } };
}
function sl() {
  let e;
  return { before({ doc: t }) {
    var l;
    let o = t.documentElement;
    e = ((l = t.defaultView) != null ? l : window).innerWidth - o.clientWidth;
  }, after({ doc: t, d: l }) {
    let o = t.documentElement, n = o.clientWidth - o.offsetWidth, a = e - n;
    l.style(o, "paddingRight", `${a}px`);
  } };
}
function dl() {
  if (!Ft())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: l, meta: o }) {
    function n(r) {
      return o.containers.flatMap((d) => d()).some((d) => d.contains(r));
    }
    l.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    l.addEventListener(t, "click", (r) => {
      if (r.target instanceof HTMLElement)
        try {
          let d = r.target.closest("a");
          if (!d)
            return;
          let { hash: s } = new URL(d.href), i = t.querySelector(s);
          i && !n(i) && (a = i);
        } catch {
        }
    }, !0), l.addEventListener(t, "touchmove", (r) => {
      r.target instanceof HTMLElement && !n(r.target) && r.preventDefault();
    }, { passive: !1 }), l.add(() => {
      window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
    });
  } };
}
function cl() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function fl(e) {
  let t = {};
  for (let l of e)
    Object.assign(t, l(t));
  return t;
}
let ve = il(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var l;
  let o = (l = this.get(e)) != null ? l : { doc: e, count: 0, d: Me(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(t), this.set(e, o), this;
}, POP(e, t) {
  let l = this.get(e);
  return l && (l.count--, l.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: l }) {
  let o = { doc: e, d: t, meta: fl(l) }, n = [dl(), sl(), cl()];
  n.forEach(({ before: a }) => a == null ? void 0 : a(o)), n.forEach(({ after: a }) => a == null ? void 0 : a(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
ve.subscribe(() => {
  let e = ve.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [l] of e)
    t.set(l, l.documentElement.style.overflow);
  for (let l of e.values()) {
    let o = t.get(l.doc) === "hidden", n = l.count !== 0;
    (n && !o || !n && o) && ve.dispatch(l.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", l), l.count === 0 && ve.dispatch("TEARDOWN", l);
  }
});
function pl(e, t, l) {
  let o = ul(ve), n = g(() => {
    let a = e.value ? o.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return de([e, t], ([a, r], [d], s) => {
    if (!a || !r)
      return;
    ve.dispatch("PUSH", a, l);
    let i = !1;
    s(() => {
      i || (ve.dispatch("POP", d != null ? d : a, l), i = !0);
    });
  }, { immediate: !0 }), n;
}
var vl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(vl || {});
let qe = Symbol("DialogContext");
function Re(e) {
  let t = J(qe, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Re), l;
  }
  return t;
}
let ke = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
I({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: ke }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${K()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  var a;
  let r = y(!1);
  $(() => {
    r.value = !0;
  });
  let d = y(0), s = Ie(), i = g(() => e.open === ke && s !== null ? (s.value & _.Open) === _.Open : e.open), u = y(null), v = y(null), m = g(() => me(u));
  if (n({ el: u, $el: u }), !(e.open !== ke || s !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof i.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i.value === ke ? void 0 : e.open}`);
  let f = g(() => r.value && i.value ? 0 : 1), p = g(() => f.value === 0), c = g(() => d.value > 1), b = J(qe, null) !== null, w = g(() => c.value ? "parent" : "leaf"), L = g(() => s !== null ? (s.value & _.Closing) === _.Closing : !1), O = g(() => b || L.value ? !1 : p.value), Q = g(() => {
    var R, k, V;
    return (V = Array.from((k = (R = m.value) == null ? void 0 : R.querySelectorAll("body > *")) != null ? k : []).find((H) => H.id === "headlessui-portal-root" ? !1 : H.contains(h(v)) && H instanceof HTMLElement)) != null ? V : null;
  });
  mt(Q, O);
  let z = g(() => c.value ? !0 : p.value), S = g(() => {
    var R, k, V;
    return (V = Array.from((k = (R = m.value) == null ? void 0 : R.querySelectorAll("[data-headlessui-portal]")) != null ? k : []).find((H) => H.contains(h(v)) && H instanceof HTMLElement)) != null ? V : null;
  });
  mt(S, z), ol({ type: "Dialog", enabled: g(() => f.value === 0), element: u, onUpdate: (R, k) => {
    if (k === "Dialog")
      return N(R, { [ze.Add]: () => d.value += 1, [ze.Remove]: () => d.value -= 1 });
  } });
  let P = rl({ name: "DialogDescription", slot: g(() => ({ open: i.value })) }), E = y(null), x = { titleId: E, panelRef: y(null), dialogState: f, setTitleId(R) {
    E.value !== R && (E.value = R);
  }, close() {
    t("close", !1);
  } };
  X(qe, x);
  function D() {
    var R, k, V;
    return [...Array.from((k = (R = m.value) == null ? void 0 : R.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? k : []).filter((H) => !(H === document.body || H === document.head || !(H instanceof HTMLElement) || H.contains(h(v)) || x.panelRef.value && H.contains(x.panelRef.value))), (V = x.panelRef.value) != null ? V : u.value];
  }
  let j = g(() => !(!p.value || c.value));
  at(() => D(), (R, k) => {
    x.close(), G(() => k == null ? void 0 : k.focus());
  }, j);
  let oe = g(() => !(c.value || f.value !== 0));
  jt((a = m.value) == null ? void 0 : a.defaultView, "keydown", (R) => {
    oe.value && (R.defaultPrevented || R.key === T.Escape && (R.preventDefault(), R.stopPropagation(), x.close()));
  });
  let Z = g(() => !(L.value || f.value !== 0 || b));
  return pl(m, Z, (R) => {
    var k;
    return { containers: [...(k = R.containers) != null ? k : [], D] };
  }), W((R) => {
    if (f.value !== 0)
      return;
    let k = h(u);
    if (!k)
      return;
    let V = new ResizeObserver((H) => {
      for (let Ce of H) {
        let ce = Ce.target.getBoundingClientRect();
        ce.x === 0 && ce.y === 0 && ce.width === 0 && ce.height === 0 && x.close();
      }
    });
    V.observe(k), R(() => V.disconnect());
  }), () => {
    let { id: R, open: k, initialFocus: V, ...H } = e, Ce = { ...l, ref: u, id: R, role: "dialog", "aria-modal": f.value === 0 ? !0 : void 0, "aria-labelledby": E.value, "aria-describedby": P.value }, ce = { open: f.value === 0 };
    return U(Ke, { force: !0 }, () => [U(Ht, () => U(nl, { target: u.value }, () => U(Ke, { force: !1 }, () => U(ye, { initialFocus: V, containers: D, features: p.value ? N(w.value, { parent: ye.features.RestoreFocus, leaf: ye.features.All & ~ye.features.FocusLock }) : ye.features.None }, () => M({ ourProps: Ce, theirProps: H, slot: ce, attrs: l, slots: o, visible: f.value === 0, features: le.RenderStrategy | le.Static, name: "Dialog" }))))), U(Ae, { features: Ee.Hidden, ref: v })]);
  };
} });
I({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${K()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Re("DialogOverlay");
  function n(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return M({ ourProps: { id: a, "aria-hidden": !0, onClick: n }, theirProps: r, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
I({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${K()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Re("DialogBackdrop"), a = y(null);
  return o({ el: a, $el: a }), $(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...d } = e, s = { id: r, ref: a, "aria-hidden": !0 };
    return U(Ke, { force: !0 }, () => U(Ht, () => M({ ourProps: s, theirProps: { ...t, ...d }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
I({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${K()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Re("DialogPanel");
  o({ el: n.panelRef, $el: n.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...d } = e, s = { id: r, ref: n.panelRef, onClick: a };
    return M({ ourProps: s, theirProps: d, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} });
I({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${K()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Re("DialogTitle");
  return $(() => {
    o.setTitleId(e.id), Y(() => o.setTitleId(null));
  }), () => {
    let { id: n, ...a } = e;
    return M({ ourProps: { id: n }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
  };
} });
var ml = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ml || {}), bl = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(bl || {});
function gl(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Kt = Symbol("MenuContext");
function je(e) {
  let t = J(Kt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, je), l;
  }
  return t;
}
I({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let o = y(1), n = y(null), a = y(null), r = y([]), d = y(""), s = y(null), i = y(1);
  function u(m = (f) => f) {
    let f = s.value !== null ? r.value[s.value] : null, p = ot(m(r.value.slice()), (b) => h(b.dataRef.domRef)), c = f ? p.indexOf(f) : null;
    return c === -1 && (c = null), { items: p, activeItemIndex: c };
  }
  let v = { menuState: o, buttonRef: n, itemsRef: a, items: r, searchQuery: d, activeItemIndex: s, activationTrigger: i, closeMenu: () => {
    o.value = 1, s.value = null;
  }, openMenu: () => o.value = 0, goToItem(m, f, p) {
    let c = u(), b = Ot(m === C.Specific ? { focus: C.Specific, id: f } : { focus: m }, { resolveItems: () => c.items, resolveActiveIndex: () => c.activeItemIndex, resolveId: (w) => w.id, resolveDisabled: (w) => w.dataRef.disabled });
    d.value = "", s.value = b, i.value = p != null ? p : 1, r.value = c.items;
  }, search(m) {
    let f = d.value !== "" ? 0 : 1;
    d.value += m.toLowerCase();
    let p = (s.value !== null ? r.value.slice(s.value + f).concat(r.value.slice(0, s.value + f)) : r.value).find((b) => b.dataRef.textValue.startsWith(d.value) && !b.dataRef.disabled), c = p ? r.value.indexOf(p) : -1;
    c === -1 || c === s.value || (s.value = c, i.value = 1);
  }, clearSearch() {
    d.value = "";
  }, registerItem(m, f) {
    let p = u((c) => [...c, { id: m, dataRef: f }]);
    r.value = p.items, s.value = p.activeItemIndex, i.value = 1;
  }, unregisterItem(m) {
    let f = u((p) => {
      let c = p.findIndex((b) => b.id === m);
      return c !== -1 && p.splice(c, 1), p;
    });
    r.value = f.items, s.value = f.activeItemIndex, i.value = 1;
  } };
  return at([n, a], (m, f) => {
    var p;
    v.closeMenu(), lt(f, nt.Loose) || (m.preventDefault(), (p = h(n)) == null || p.focus());
  }, g(() => o.value === 0)), X(Kt, v), tt(g(() => N(o.value, { [0]: _.Open, [1]: _.Closed }))), () => {
    let m = { open: o.value === 0, close: v.closeMenu };
    return M({ ourProps: {}, theirProps: e, slot: m, slots: t, attrs: l, name: "Menu" });
  };
} });
I({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${K()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = je("MenuButton");
  o({ el: n.buttonRef, $el: n.buttonRef });
  function a(i) {
    switch (i.key) {
      case T.Space:
      case T.Enter:
      case T.ArrowDown:
        i.preventDefault(), i.stopPropagation(), n.openMenu(), G(() => {
          var u;
          (u = h(n.itemsRef)) == null || u.focus({ preventScroll: !0 }), n.goToItem(C.First);
        });
        break;
      case T.ArrowUp:
        i.preventDefault(), i.stopPropagation(), n.openMenu(), G(() => {
          var u;
          (u = h(n.itemsRef)) == null || u.focus({ preventScroll: !0 }), n.goToItem(C.Last);
        });
        break;
    }
  }
  function r(i) {
    switch (i.key) {
      case T.Space:
        i.preventDefault();
        break;
    }
  }
  function d(i) {
    e.disabled || (n.menuState.value === 0 ? (n.closeMenu(), G(() => {
      var u;
      return (u = h(n.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (i.preventDefault(), n.openMenu(), gl(() => {
      var u;
      return (u = h(n.itemsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let s = Pt(g(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var i;
    let u = { open: n.menuState.value === 0 }, { id: v, ...m } = e, f = { ref: n.buttonRef, id: v, type: s.value, "aria-haspopup": "menu", "aria-controls": (i = h(n.itemsRef)) == null ? void 0 : i.id, "aria-expanded": e.disabled ? void 0 : n.menuState.value === 0, onKeydown: a, onKeyup: r, onClick: d };
    return M({ ourProps: f, theirProps: m, slot: u, attrs: t, slots: l, name: "MenuButton" });
  };
} });
I({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-menu-items-${K()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = je("MenuItems"), a = y(null);
  o({ el: n.itemsRef, $el: n.itemsRef }), It({ container: g(() => h(n.itemsRef)), enabled: g(() => n.menuState.value === 0), accept(u) {
    return u.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function r(u) {
    var v;
    switch (a.value && clearTimeout(a.value), u.key) {
      case T.Space:
        if (n.searchQuery.value !== "")
          return u.preventDefault(), u.stopPropagation(), n.search(u.key);
      case T.Enter:
        if (u.preventDefault(), u.stopPropagation(), n.activeItemIndex.value !== null) {
          let m = n.items.value[n.activeItemIndex.value];
          (v = h(m.dataRef.domRef)) == null || v.click();
        }
        n.closeMenu(), Ct(h(n.buttonRef));
        break;
      case T.ArrowDown:
        return u.preventDefault(), u.stopPropagation(), n.goToItem(C.Next);
      case T.ArrowUp:
        return u.preventDefault(), u.stopPropagation(), n.goToItem(C.Previous);
      case T.Home:
      case T.PageUp:
        return u.preventDefault(), u.stopPropagation(), n.goToItem(C.First);
      case T.End:
      case T.PageDown:
        return u.preventDefault(), u.stopPropagation(), n.goToItem(C.Last);
      case T.Escape:
        u.preventDefault(), u.stopPropagation(), n.closeMenu(), G(() => {
          var m;
          return (m = h(n.buttonRef)) == null ? void 0 : m.focus({ preventScroll: !0 });
        });
        break;
      case T.Tab:
        u.preventDefault(), u.stopPropagation(), n.closeMenu(), G(() => Nn(h(n.buttonRef), u.shiftKey ? te.Previous : te.Next));
        break;
      default:
        u.key.length === 1 && (n.search(u.key), a.value = setTimeout(() => n.clearSearch(), 350));
        break;
    }
  }
  function d(u) {
    switch (u.key) {
      case T.Space:
        u.preventDefault();
        break;
    }
  }
  let s = Ie(), i = g(() => s !== null ? (s.value & _.Open) === _.Open : n.menuState.value === 0);
  return () => {
    var u, v;
    let m = { open: n.menuState.value === 0 }, { id: f, ...p } = e, c = { "aria-activedescendant": n.activeItemIndex.value === null || (u = n.items.value[n.activeItemIndex.value]) == null ? void 0 : u.id, "aria-labelledby": (v = h(n.buttonRef)) == null ? void 0 : v.id, id: f, onKeydown: r, onKeyup: d, role: "menu", tabIndex: 0, ref: n.itemsRef };
    return M({ ourProps: c, theirProps: p, slot: m, attrs: t, slots: l, features: le.RenderStrategy | le.Static, visible: i.value, name: "MenuItems" });
  };
} });
I({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-menu-item-${K()}` } }, setup(e, { slots: t, attrs: l, expose: o }) {
  let n = je("MenuItem"), a = y(null);
  o({ el: a, $el: a });
  let r = g(() => n.activeItemIndex.value !== null ? n.items.value[n.activeItemIndex.value].id === e.id : !1), d = g(() => ({ disabled: e.disabled, textValue: "", domRef: a }));
  $(() => {
    var p, c;
    let b = (c = (p = h(a)) == null ? void 0 : p.textContent) == null ? void 0 : c.toLowerCase().trim();
    b !== void 0 && (d.value.textValue = b);
  }), $(() => n.registerItem(e.id, d)), Y(() => n.unregisterItem(e.id)), W(() => {
    n.menuState.value === 0 && r.value && n.activationTrigger.value !== 0 && G(() => {
      var p, c;
      return (c = (p = h(a)) == null ? void 0 : p.scrollIntoView) == null ? void 0 : c.call(p, { block: "nearest" });
    });
  });
  function s(p) {
    if (e.disabled)
      return p.preventDefault();
    n.closeMenu(), Ct(h(n.buttonRef));
  }
  function i() {
    if (e.disabled)
      return n.goToItem(C.Nothing);
    n.goToItem(C.Specific, e.id);
  }
  let u = At();
  function v(p) {
    u.update(p);
  }
  function m(p) {
    u.wasMoved(p) && (e.disabled || r.value || n.goToItem(C.Specific, e.id, 0));
  }
  function f(p) {
    u.wasMoved(p) && (e.disabled || r.value && n.goToItem(C.Nothing));
  }
  return () => {
    let { disabled: p } = e, c = { active: r.value, disabled: p, close: n.closeMenu }, { id: b, ...w } = e;
    return M({ ourProps: { id: b, ref: a, role: "menuitem", tabIndex: p === !0 ? void 0 : -1, "aria-disabled": p === !0 ? !0 : void 0, disabled: void 0, onClick: s, onFocus: i, onPointerenter: v, onMouseenter: v, onPointermove: m, onMousemove: m, onPointerleave: f, onMouseleave: f }, theirProps: { ...l, ...w }, slot: c, attrs: l, slots: t, name: "MenuItem" });
  };
} });
function hl(e) {
  let t = { called: !1 };
  return (...l) => {
    if (!t.called)
      return t.called = !0, e(...l);
  };
}
function Ve(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Le(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Qe = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Qe || {});
function yl(e, t) {
  let l = Me();
  if (!e)
    return l.dispose;
  let { transitionDuration: o, transitionDelay: n } = getComputedStyle(e), [a, r] = [o, n].map((d) => {
    let [s = 0] = d.split(",").filter(Boolean).map((i) => i.includes("ms") ? parseFloat(i) : parseFloat(i) * 1e3).sort((i, u) => u - i);
    return s;
  });
  return a !== 0 ? l.setTimeout(() => t("finished"), a + r) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function bt(e, t, l, o, n, a) {
  let r = Me(), d = a !== void 0 ? hl(a) : () => {
  };
  return Le(e, ...n), Ve(e, ...t, ...l), r.nextFrame(() => {
    Le(e, ...l), Ve(e, ...o), r.add(yl(e, (s) => (Le(e, ...o, ...t), Ve(e, ...n), d(s))));
  }), r.add(() => Le(e, ...t, ...l, ...o, ...n)), r.add(() => d("cancelled")), r.dispose;
}
function fe(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let rt = Symbol("TransitionContext");
var wl = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(wl || {});
function xl() {
  return J(rt, null) !== null;
}
function Sl() {
  let e = J(rt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Ol() {
  let e = J(ut, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let ut = Symbol("NestingContext");
function Be(e) {
  return "children" in e ? Be(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function zt(e) {
  let t = y([]), l = y(!1);
  $(() => l.value = !0), Y(() => l.value = !1);
  function o(a, r = ue.Hidden) {
    let d = t.value.findIndex(({ id: s }) => s === a);
    d !== -1 && (N(r, { [ue.Unmount]() {
      t.value.splice(d, 1);
    }, [ue.Hidden]() {
      t.value[d].state = "hidden";
    } }), !Be(t) && l.value && (e == null || e()));
  }
  function n(a) {
    let r = t.value.find(({ id: d }) => d === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => o(a, ue.Unmount);
  }
  return { children: t, register: n, unregister: o };
}
let qt = le.RenderStrategy, El = I({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = y(0);
  function r() {
    a.value |= _.Opening, t("beforeEnter");
  }
  function d() {
    a.value &= ~_.Opening, t("afterEnter");
  }
  function s() {
    a.value |= _.Closing, t("beforeLeave");
  }
  function i() {
    a.value &= ~_.Closing, t("afterLeave");
  }
  if (!xl() && Ln())
    return () => U(Il, { ...e, onBeforeEnter: r, onAfterEnter: d, onBeforeLeave: s, onAfterLeave: i }, o);
  let u = y(null), v = g(() => e.unmount ? ue.Unmount : ue.Hidden);
  n({ el: u, $el: u });
  let { show: m, appear: f } = Sl(), { register: p, unregister: c } = Ol(), b = y(m.value ? "visible" : "hidden"), w = { value: !0 }, L = K(), O = { value: !1 }, Q = zt(() => {
    !O.value && b.value !== "hidden" && (b.value = "hidden", c(L), i());
  });
  $(() => {
    let Z = p(L);
    Y(Z);
  }), W(() => {
    if (v.value === ue.Hidden && L) {
      if (m.value && b.value !== "visible") {
        b.value = "visible";
        return;
      }
      N(b.value, { hidden: () => c(L), visible: () => p(L) });
    }
  });
  let z = fe(e.enter), S = fe(e.enterFrom), P = fe(e.enterTo), E = fe(e.entered), x = fe(e.leave), D = fe(e.leaveFrom), j = fe(e.leaveTo);
  $(() => {
    W(() => {
      if (b.value === "visible") {
        let Z = h(u);
        if (Z instanceof Comment && Z.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function oe(Z) {
    let R = w.value && !f.value, k = h(u);
    !k || !(k instanceof HTMLElement) || R || (O.value = !0, m.value && r(), m.value || s(), Z(m.value ? bt(k, z, S, P, E, (V) => {
      O.value = !1, V === Qe.Finished && d();
    }) : bt(k, x, D, j, E, (V) => {
      O.value = !1, V === Qe.Finished && (Be(Q) || (b.value = "hidden", c(L), i()));
    })));
  }
  return $(() => {
    de([m], (Z, R, k) => {
      oe(k), w.value = !1;
    }, { immediate: !0 });
  }), X(ut, Q), tt(g(() => N(b.value, { visible: _.Open, hidden: _.Closed }) | a.value)), () => {
    let { appear: Z, show: R, enter: k, enterFrom: V, enterTo: H, entered: Ce, leave: ce, leaveFrom: so, leaveTo: co, ...st } = e, ln = { ref: u }, on = { ...st, ...f.value && m.value && Te.isServer ? { class: Xe([l.class, st.class, ...z, ...S]) } : {} };
    return M({ theirProps: on, ourProps: ln, slot: {}, slots: o, attrs: l, features: qt, visible: b.value === "visible", name: "TransitionChild" });
  };
} }), Pl = El, Il = I({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o }) {
  let n = Ie(), a = g(() => e.show === null && n !== null ? (n.value & _.Open) === _.Open : e.show);
  W(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = y(a.value ? "visible" : "hidden"), d = zt(() => {
    r.value = "hidden";
  }), s = y(!0), i = { show: a, appear: g(() => e.appear || !s.value) };
  return $(() => {
    W(() => {
      s.value = !1, a.value ? r.value = "visible" : Be(d) || (r.value = "hidden");
    });
  }), X(ut, d), X(rt, i), () => {
    let u = Fe(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), v = { unmount: e.unmount };
    return M({ ourProps: { ...v, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [U(Pl, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...v, ...u }, o.default)] }, attrs: {}, features: qt, visible: r.value === "visible", name: "Transition" });
  };
} });
var gt;
const Tl = typeof window < "u";
Tl && ((gt = window == null ? void 0 : window.navigator) == null ? void 0 : gt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Rl(e) {
  return e;
}
const Ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Je = "__vueuse_ssr_handlers__";
Ye[Je] = Ye[Je] || {};
Ye[Je];
var ht;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ht || (ht = {}));
var Cl = Object.defineProperty, yt = Object.getOwnPropertySymbols, kl = Object.prototype.hasOwnProperty, Ll = Object.prototype.propertyIsEnumerable, wt = (e, t, l) => t in e ? Cl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, Dl = (e, t) => {
  for (var l in t || (t = {}))
    kl.call(t, l) && wt(e, l, t[l]);
  if (yt)
    for (var l of yt(t))
      Ll.call(t, l) && wt(e, l, t[l]);
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
Dl({
  linear: Rl
}, Al);
function Fl(e, t) {
  return g({
    get: () => e.modelValue,
    set: (l) => t("update:modelValue", l)
  });
}
const Ml = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, jl = { name: "Error" }, Qt = /* @__PURE__ */ I({
  ...jl,
  props: {
    error: {}
  },
  setup(e) {
    return (t, l) => t.error ? (F(), q("div", Ml, [
      ae(t.$slots, "default", {}, () => [
        Ze(Pe(t.error), 1)
      ])
    ])) : De("", !0);
  }
}), Bl = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, _l = {
  name: "Base",
  inheritAttrs: !1
}, Nl = /* @__PURE__ */ I({
  ..._l,
  props: {
    description: {},
    error: {},
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, l) => (F(), q("div", null, [
      ee("div", {
        class: Xe(["mt-1 rounded-md", { "shadow-sm": t.shadow }])
      }, [
        ae(t.$slots, "default")
      ], 2),
      t.description ? (F(), q("p", Bl, Pe(t.description), 1)) : De("", !0),
      t.error ? (F(), re(Qt, {
        key: 1,
        error: t.error
      }, null, 8, ["error"])) : De("", !0)
    ]));
  }
}), $l = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, n] of t)
    l[o] = n;
  return l;
}, Vl = { name: "Actions" }, Hl = { class: "mt-8 border-t border-gray-200 pt-5" }, Ul = { class: "flex justify-end" }, Wl = { class: "inline-flex rounded-md shadow-sm" };
function Gl(e, t, l, o, n, a) {
  return F(), q("div", Hl, [
    ee("div", Ul, [
      ee("span", Wl, [
        ae(e.$slots, "default")
      ])
    ])
  ]);
}
const Kl = /* @__PURE__ */ $l(Vl, [["render", Gl]]), zl = { class: "relative flex items-start" }, ql = { class: "flex h-5 items-center" }, Ql = ["id", "value", "disabled", "readonly"], Yl = { class: "ml-3" }, Jl = ["for"], Xl = { name: "Checkbox" }, Zl = /* @__PURE__ */ I({
  ...Xl,
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
    const l = Fl(e, t);
    return (o, n) => (F(), re(Nl, ie(o.$props, { shadow: !1 }), {
      default: be(() => [
        ee("div", zl, [
          ee("div", ql, [
            We(ee("input", ie({
              id: o.id,
              "onUpdate:modelValue": n[0] || (n[0] = (a) => sn(l) ? l.value = a : null),
              value: o.value,
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
              disabled: o.disabled,
              readonly: o.readonly
            }, o.$attrs), null, 16, Ql), [
              [dn, ne(l)]
            ]),
            ee("div", Yl, [
              ee("label", {
                for: o.id,
                class: "block text-sm font-medium leading-5 text-gray-700"
              }, Pe(o.label), 9, Jl)
            ])
          ])
        ])
      ]),
      _: 1
    }, 16));
  }
}), eo = ["for"], to = { name: "Label" }, no = /* @__PURE__ */ I({
  ...to,
  props: {
    for: {}
  },
  setup(e) {
    const t = e;
    return (l, o) => (F(), q("label", {
      for: t.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      ae(l.$slots, "default")
    ], 8, eo));
  }
});
var Yt = {}, Jt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return l;
    }
  });
  function t(o, n) {
    return {
      handler: o,
      config: n
    };
  }
  t.withOptions = function(o, n = () => ({})) {
    const a = function(r) {
      return {
        __options: r,
        handler: o(r),
        config: n(r)
      };
    };
    return a.__isOptionsFunction = !0, a.__pluginFunction = o, a.__configFunction = n, a;
  };
  const l = t;
})(Jt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ l(Jt);
  function l(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  const o = t.default;
})(Yt);
let He = Yt;
var lo = (He.__esModule ? He : { default: He }).default, Xt = {}, Zt = {}, it = { exports: {} }, A = String, en = function() {
  return { isColorSupported: !1, reset: A, bold: A, dim: A, italic: A, underline: A, inverse: A, hidden: A, strikethrough: A, black: A, red: A, green: A, yellow: A, blue: A, magenta: A, cyan: A, white: A, gray: A, bgBlack: A, bgRed: A, bgGreen: A, bgYellow: A, bgBlue: A, bgMagenta: A, bgCyan: A, bgWhite: A };
};
it.exports = en();
it.exports.createColors = en;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(s, i) {
    for (var u in i)
      Object.defineProperty(s, u, {
        enumerable: !0,
        get: i[u]
      });
  }
  t(e, {
    dim: function() {
      return r;
    },
    default: function() {
      return d;
    }
  });
  const l = /* @__PURE__ */ o(it.exports);
  function o(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  let n = /* @__PURE__ */ new Set();
  function a(s, i, u) {
    typeof process < "u" && process.env.JEST_WORKER_ID || u && n.has(u) || (u && n.add(u), console.warn(""), i.forEach((v) => console.warn(s, "-", v)));
  }
  function r(s) {
    return l.default.dim(s);
  }
  const d = {
    info(s, i) {
      a(l.default.bold(l.default.cyan("info")), ...Array.isArray(s) ? [
        s
      ] : [
        i,
        s
      ]);
    },
    warn(s, i) {
      a(l.default.bold(l.default.yellow("warn")), ...Array.isArray(s) ? [
        s
      ] : [
        i,
        s
      ]);
    },
    risk(s, i) {
      a(l.default.bold(l.default.magenta("risk")), ...Array.isArray(s) ? [
        s
      ] : [
        i,
        s
      ]);
    }
  };
})(Zt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ l(Zt);
  function l(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function o({ version: a, from: r, to: d }) {
    t.default.warn(`${r}-color-renamed`, [
      `As of Tailwind CSS ${a}, \`${r}\` has been renamed to \`${d}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const n = {
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
      return o({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      }), this.sky;
    },
    get warmGray() {
      return o({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      }), this.stone;
    },
    get trueGray() {
      return o({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      }), this.neutral;
    },
    get coolGray() {
      return o({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      }), this.gray;
    },
    get blueGray() {
      return o({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      }), this.slate;
    }
  };
})(Xt);
let Ue = Xt;
var oo = (Ue.__esModule ? Ue : { default: Ue }).default;
lo.withOptions(
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
              ...oo.indigo,
              ...(t = e == null ? void 0 : e.colors) == null ? void 0 : t.primary
            }
          }
        }
      }
    };
  }
);
const tn = /* @__PURE__ */ I({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    var s;
    const t = e, l = g(() => {
      var u;
      const i = (u = t.element.definition) == null ? void 0 : u.fieldset;
      return i ? Object.entries(i).reduce((v, [m, f]) => (f != null && f.model ? v[f.model] = t.form[f.model] : v[m] = t.form[m], v), {}) : {
        modelValue: t.form[t.element.name]
      };
    }), o = g(() => {
      var u;
      const i = (u = t.element.definition) == null ? void 0 : u.fieldset;
      return i ? Object.entries(i).reduce((v, [m, f]) => (f != null && f.model ? v[`update:${f.model}`] = (p) => t.form[f.model] = p : v[`update:${m}`] = (p) => t.form[m] = p, v), {}) : { "update:model-value": (v) => t.form[t.element.name] = v };
    }), n = () => {
      let i = Object.entries({
        ...t.element.definition,
        ...t.element.definition.props,
        ...l.value,
        schema: t.element.definition.schema,
        form: t.form,
        id: t.element.name
      }), u = t.element.definition.component.props;
      return Object.fromEntries(i.filter(([v]) => u.hasOwnProperty(v)));
    }, a = () => {
      var u;
      return ((u = t.element.definition.label) != null ? u : t.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }, r = !!t.element.definition.schema, d = (s = t.element.definition.showLabel) != null ? s : !r;
    return (i, u) => (F(), q("div", null, [
      ne(d) ? (F(), re(ne(no), {
        key: 0,
        for: i.element.name
      }, {
        default: be(() => [
          Ze(Pe(a()), 1)
        ]),
        _: 1
      }, 8, ["for"])) : De("", !0),
      (F(), re(fn(i.element.definition.component), ie({
        key: i.element.name
      }, n(), pn(o.value)), null, 16)),
      Oe(ne(Qt), {
        error: i.form.errors[i.element.name]
      }, null, 8, ["error"])
    ]));
  }
}), ao = { class: "mx-auto mt-6 max-w-md space-y-6" }, vo = /* @__PURE__ */ I({
  __name: "FormBuilder",
  props: {
    schema: {},
    submit: { default: "Save" }
  },
  setup(e) {
    return (t, l) => (F(), q("div", ao, [
      (F(!0), q(ge, null, et(t.schema.elements, (o, n) => (F(), re(tn, {
        key: n,
        element: o,
        form: t.schema.form
      }, null, 8, ["element", "form"]))), 128)),
      Oe(ne(Kl), null, {
        default: be(() => [
          ae(t.$slots, "actions", {
            form: t.schema.form
          }, () => [
            Oe(ne(Pn), {
              loading: t.schema.form.processing,
              type: "submit"
            }, {
              default: be(() => [
                Ze(Pe(t.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 3
      })
    ]));
  }
}), ro = /* @__PURE__ */ I({
  __name: "CheckboxGroup",
  props: {
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, o = g({
      get: () => l.modelValue,
      set: (n) => {
        t("update:modelValue", n);
      }
    });
    return (n, a) => (F(!0), q(ge, null, et(n.items, (r, d) => {
      var s, i, u;
      return F(), re(ne(Zl), {
        id: (s = r.label) != null ? s : r,
        key: d,
        modelValue: o.value,
        "onUpdate:modelValue": a[0] || (a[0] = (v) => o.value = v),
        value: (i = r.value) != null ? i : r,
        label: (u = r.label) != null ? u : r
      }, null, 8, ["id", "modelValue", "value", "label"]);
    }), 128));
  }
}), uo = (e) => Object.keys(e).reduce((t, l) => {
  var o;
  return t[l] = (o = e[l].value) != null ? o : null, t;
}, {}), nn = (e) => Object.entries(e).map(([t, l]) => {
  const o = l.hasOwnProperty("setup") ? { component: l } : l;
  return {
    name: t,
    definition: o
  };
});
function mo(e) {
  const t = mn(
    Object.keys(e).reduce((l, o) => {
      var a, r, d;
      if (e[o].schema)
        return { ...l, ...uo(e[o].schema) };
      if (e[o].component === ro)
        return l[o] = (a = e[o].checked) != null ? a : [], l;
      const n = (r = e[o]) == null ? void 0 : r.fieldset;
      return n ? (Object.entries(n).forEach(([s, i]) => {
        var u;
        i != null && i.model ? l[i.model] = (u = i.value) != null ? u : null : l[s] = i;
      }), l) : (l[o] = (d = e[o].value) != null ? d : null, l);
    }, {})
  );
  return {
    elements: nn(e),
    form: t
  };
}
const io = { class: "grid grid-flow-col gap-x-4 gap-y-6" }, bo = /* @__PURE__ */ I({
  __name: "Grid",
  props: {
    schema: {},
    form: {}
  },
  setup(e) {
    const l = nn(e.schema);
    return (o, n) => (F(), q("div", io, [
      (F(!0), q(ge, null, et(ne(l), (a, r) => (F(), re(tn, ie({
        key: r,
        element: a,
        form: o.form
      }, o.$attrs), null, 16, ["element", "form"]))), 128))
    ]));
  }
});
export {
  ro as CheckboxGroup,
  vo as FormBuilder,
  bo as Grid,
  mo as useSchema
};
