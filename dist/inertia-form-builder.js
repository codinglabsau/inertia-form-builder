import { defineComponent as T, ref as h, computed as g, toRaw as _, provide as X, onMounted as N, watch as fe, h as $, Fragment as ge, watchEffect as H, onUnmounted as Y, nextTick as W, inject as z, Teleport as fn, reactive as pn, unref as le, normalizeClass as nt, openBlock as D, createBlock as oe, mergeProps as de, withCtx as ye, renderSlot as ie, cloneVNode as vn, createElementBlock as K, createTextVNode as lt, toDisplayString as Re, createCommentVNode as Te, createElementVNode as te, withDirectives as qe, isRef as mn, vModelCheckbox as bn, createVNode as _e, vShow as ft, shallowRef as gn, resolveDynamicComponent as hn, toHandlers as yn, renderList as je } from "vue";
import { Link as wn, useForm as xn } from "@inertiajs/vue3";
const On = /* @__PURE__ */ te("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Sn = /* @__PURE__ */ te("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), En = [
  On,
  Sn
], Pn = { name: "Spinner" }, pt = /* @__PURE__ */ T({
  ...Pn,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (t, l) => (D(), K("svg", {
      class: nt(["h-5 w-5 animate-spin", t.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, En, 2));
  }
}), Tn = ["disabled", "type"], In = ["href"], Rn = { name: "Button" }, Cn = /* @__PURE__ */ T({
  ...Rn,
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
    return (n, a) => l.value === "button" ? (D(), K("button", de({
      key: 0,
      class: o,
      disabled: n.loading,
      type: n.type
    }, n.$attrs), [
      ie(n.$slots, "default"),
      qe(_e(pt, { class: "ml-3" }, null, 512), [
        [ft, n.loading]
      ])
    ], 16, Tn)) : n.external ? (D(), K("a", de({
      key: 2,
      href: n.href,
      class: o
    }, n.$attrs), [
      ie(n.$slots, "default")
    ], 16, In)) : (D(), oe(le(wn), de({
      key: 1,
      as: n.as,
      href: n.href,
      disabled: n.loading,
      class: o
    }, n.$attrs), {
      default: ye(() => [
        ie(n.$slots, "default"),
        qe(_e(pt, {
          class: "ml-3",
          "text-class": n.spinnerClass
        }, null, 8, ["text-class"]), [
          [ft, n.loading]
        ])
      ]),
      _: 3
    }, 16, ["as", "href", "disabled"]));
  }
}), Fn = { name: "PrimaryButton" }, kn = /* @__PURE__ */ T({
  ...Fn,
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
    return (l, o) => (D(), oe(Cn, de({
      as: l.as,
      external: l.external,
      href: l.href,
      loading: l.loading,
      type: l.type,
      class: t
    }, l.$attrs), {
      default: ye(() => [
        ie(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "external", "href", "loading", "type"]));
  }
});
function j(e, t, ...l) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...l) : n;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, j), o;
}
var ae = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ae || {}), se = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(se || {});
function M({ visible: e = !0, features: t = 0, ourProps: l, theirProps: o, ...n }) {
  var a;
  let r = It(o, l), u = Object.assign(n, { props: r });
  if (e || t & 2 && r.static)
    return He(u);
  if (t & 1) {
    let s = (a = r.unmount) == null || a ? 0 : 1;
    return j(s, { [0]() {
      return null;
    }, [1]() {
      return He({ ...n, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return He(u);
}
function He({ props: e, attrs: t, slots: l, slot: o, name: n }) {
  var a, r;
  let { as: u, ...s } = Ne(e, ["unmount", "static"]), d = (a = l.default) == null ? void 0 : a.call(l, o), i = {};
  if (o) {
    let f = !1, c = [];
    for (let [v, b] of Object.entries(o))
      typeof b == "boolean" && (f = !0), b === !0 && c.push(v);
    f && (i["data-headlessui-state"] = c.join(" "));
  }
  if (u === "template") {
    if (d = Tt(d != null ? d : []), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [f, ...c] = d != null ? d : [];
      if (!Dn(f) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).map((m) => m.trim()).filter((m, p, x) => x.indexOf(m) === p).sort((m, p) => m.localeCompare(p)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let v = It((r = f.props) != null ? r : {}, s), b = vn(f, v);
      for (let m in v)
        m.startsWith("on") && (b.props || (b.props = {}), b.props[m] = v[m]);
      return b;
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return $(u, Object.assign({}, s, i), { default: () => d });
}
function Tt(e) {
  return e.flatMap((t) => t.type === ge ? Tt(t.children) : [t]);
}
function It(...e) {
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
      for (let u of r) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        u(n, ...a);
      }
    } });
  return t;
}
function Ln(e) {
  let t = Object.assign({}, e);
  for (let l in t)
    t[l] === void 0 && delete t[l];
  return t;
}
function Ne(e, t = []) {
  let l = Object.assign({}, e);
  for (let o of t)
    o in l && delete l[o];
  return l;
}
function Dn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let An = 0;
function Mn() {
  return ++An;
}
function q() {
  return Mn();
}
var R = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(R || {});
function _n(e) {
  throw new Error("Unexpected object: " + e);
}
var F = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(F || {});
function Rt(e, t) {
  let l = t.resolveItems();
  if (l.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), n = o != null ? o : -1, a = (() => {
    switch (e.focus) {
      case 0:
        return l.findIndex((r) => !t.resolveDisabled(r));
      case 1: {
        let r = l.slice().reverse().findIndex((u, s, d) => n !== -1 && d.length - s - 1 >= n ? !1 : !t.resolveDisabled(u));
        return r === -1 ? r : l.length - 1 - r;
      }
      case 2:
        return l.findIndex((r, u) => u <= n ? !1 : !t.resolveDisabled(r));
      case 3: {
        let r = l.slice().reverse().findIndex((u) => !t.resolveDisabled(u));
        return r === -1 ? r : l.length - 1 - r;
      }
      case 4:
        return l.findIndex((r) => t.resolveId(r) === e.id);
      case 5:
        return null;
      default:
        _n(e);
    }
  })();
  return a === -1 ? o : a;
}
function y(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ct = Symbol("Context");
var B = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(B || {});
function Bn() {
  return Ce() !== null;
}
function Ce() {
  return z(Ct, null);
}
function ot(e) {
  X(Ct, e);
}
function vt(e, t) {
  if (e)
    return e;
  let l = t != null ? t : "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function Ft(e, t) {
  let l = h(vt(e.value.type, e.value.as));
  return N(() => {
    l.value = vt(e.value.type, e.value.as);
  }), H(() => {
    var o;
    l.value || y(t) && y(t) instanceof HTMLButtonElement && !((o = y(t)) != null && o.hasAttribute("type")) && (l.value = "button");
  }), l;
}
var jn = Object.defineProperty, Nn = (e, t, l) => t in e ? jn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, mt = (e, t, l) => (Nn(e, typeof t != "symbol" ? t + "" : t, l), l);
class $n {
  constructor() {
    mt(this, "current", this.detect()), mt(this, "currentId", 0);
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
let Fe = new $n();
function pe(e) {
  if (Fe.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = y(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function kt({ container: e, accept: t, walk: l, enabled: o }) {
  H(() => {
    let n = e.value;
    if (!n || o !== void 0 && !o.value)
      return;
    let a = pe(e);
    if (!a)
      return;
    let r = Object.assign((s) => t(s), { acceptNode: t }), u = a.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; u.nextNode(); )
      l(u.currentNode);
  });
}
let Qe = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ne = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ne || {}), Lt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Lt || {}), Vn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Vn || {});
function Dt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Qe)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var at = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(at || {});
function rt(e, t = 0) {
  var l;
  return e === ((l = pe(e)) == null ? void 0 : l.body) ? !1 : j(t, { [0]() {
    return e.matches(Qe);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(Qe))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
function At(e) {
  let t = pe(e);
  W(() => {
    t && !rt(t.activeElement, 0) && ce(e);
  });
}
var Hn = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Hn || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function ce(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Un = ["textarea", "input"].join(",");
function Gn(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Un)) != null ? l : !1;
}
function ut(e, t = (l) => l) {
  return e.slice().sort((l, o) => {
    let n = t(l), a = t(o);
    if (n === null || a === null)
      return 0;
    let r = n.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Wn(e, t) {
  return Pe(Dt(), t, { relativeTo: e });
}
function Pe(e, t, { sorted: l = !0, relativeTo: o = null, skipElements: n = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, u = Array.isArray(e) ? l ? ut(e) : e : Dt(e);
  n.length > 0 && u.length > 1 && (u = u.filter((b) => !n.includes(b))), o = o != null ? o : r.activeElement;
  let s = (() => {
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
  })(), i = t & 32 ? { preventScroll: !0 } : {}, f = 0, c = u.length, v;
  do {
    if (f >= c || f + c <= 0)
      return 0;
    let b = d + f;
    if (t & 16)
      b = (b + c) % c;
    else {
      if (b < 0)
        return 3;
      if (b >= c)
        return 1;
    }
    v = u[b], v == null || v.focus(i), f += s;
  } while (v !== r.activeElement);
  return t & 6 && Gn(v) && v.select(), 2;
}
function bt(e, t, l) {
  Fe.isServer || H((o) => {
    document.addEventListener(e, t, l), o(() => document.removeEventListener(e, t, l));
  });
}
function Mt(e, t, l) {
  Fe.isServer || H((o) => {
    window.addEventListener(e, t, l), o(() => window.removeEventListener(e, t, l));
  });
}
function it(e, t, l = g(() => !0)) {
  function o(a, r) {
    if (!l.value || a.defaultPrevented)
      return;
    let u = r(a);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let s = function d(i) {
      return typeof i == "function" ? d(i()) : Array.isArray(i) || i instanceof Set ? i : [i];
    }(e);
    for (let d of s) {
      if (d === null)
        continue;
      let i = d instanceof HTMLElement ? d : y(d);
      if (i != null && i.contains(u) || a.composed && a.composedPath().includes(i))
        return;
    }
    return !rt(u, at.Loose) && u.tabIndex !== -1 && a.preventDefault(), t(a, u);
  }
  let n = h(null);
  bt("mousedown", (a) => {
    var r, u;
    l.value && (n.value = ((u = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : u[0]) || a.target);
  }, !0), bt("click", (a) => {
    n.value && (o(a, () => n.value), n.value = null);
  }, !0), Mt("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ie = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ie || {});
let Be = T({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: o, ...n } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return M({ ourProps: a, theirProps: n, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function _t(e = {}, t = null, l = []) {
  for (let [o, n] of Object.entries(e))
    jt(l, Bt(t, o), n);
  return l;
}
function Bt(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function jt(e, t, l) {
  if (Array.isArray(l))
    for (let [o, n] of l.entries())
      jt(e, Bt(t, o.toString()), n);
  else
    l instanceof Date ? e.push([t, l.toISOString()]) : typeof l == "boolean" ? e.push([t, l ? "1" : "0"]) : typeof l == "string" ? e.push([t, l]) : typeof l == "number" ? e.push([t, `${l}`]) : l == null ? e.push([t, ""]) : _t(l, t, e);
}
function Kn(e, t, l) {
  let o = h(l == null ? void 0 : l.value), n = g(() => e.value !== void 0);
  return [g(() => n.value ? e.value : o.value), function(a) {
    return n.value || (o.value = a), t == null ? void 0 : t(a);
  }];
}
function gt(e) {
  return [e.screenX, e.screenY];
}
function Nt() {
  let e = h([-1, -1]);
  return { wasMoved(t) {
    let l = gt(t);
    return e.value[0] === l[0] && e.value[1] === l[1] ? !1 : (e.value = l, !0);
  }, update(t) {
    e.value = gt(t);
  } };
}
function $t() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function qn() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Qn() {
  return $t() || qn();
}
function ke() {
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
    let o = ke();
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
function zn(e, t) {
  return e === t;
}
var Yn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Yn || {}), Jn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Jn || {}), Xn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Xn || {});
let Vt = Symbol("ComboboxContext");
function we(e) {
  let t = z(Vt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, we), l;
  }
  return t;
}
T({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => zn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: o }) {
  let n = h(1), a = h(null), r = h(null), u = h(null), s = h(null), d = h({ static: !1, hold: !1 }), i = h([]), f = h(null), c = h(1), v = h(!1);
  function b(w = (P) => P) {
    let P = f.value !== null ? i.value[f.value] : null, I = ut(w(i.value.slice()), (C) => y(C.dataRef.domRef)), E = P ? I.indexOf(P) : null;
    return E === -1 && (E = null), { options: I, activeOptionIndex: E };
  }
  let m = g(() => e.multiple ? 1 : 0), p = g(() => e.nullable), [x, S] = Kn(g(() => e.modelValue === void 0 ? j(m.value, { [1]: [], [0]: void 0 }) : e.modelValue), (w) => o("update:modelValue", w), g(() => e.defaultValue)), O = { comboboxState: n, value: x, mode: m, compare(w, P) {
    if (typeof e.by == "string") {
      let I = e.by;
      return (w == null ? void 0 : w[I]) === (P == null ? void 0 : P[I]);
    }
    return e.by(w, P);
  }, defaultValue: g(() => e.defaultValue), nullable: p, inputRef: r, labelRef: a, buttonRef: u, optionsRef: s, disabled: g(() => e.disabled), options: i, change(w) {
    S(w);
  }, activeOptionIndex: g(() => {
    if (v.value && f.value === null && i.value.length > 0) {
      let w = i.value.findIndex((P) => !P.dataRef.disabled);
      w !== -1 && (f.value = w);
    }
    return f.value;
  }), activationTrigger: c, optionsPropsRef: d, closeCombobox() {
    v.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, f.value = null);
  }, openCombobox() {
    if (v.value = !0, e.disabled || n.value === 0)
      return;
    let w = i.value.findIndex((P) => {
      let I = _(P.dataRef.value);
      return j(m.value, { [0]: () => O.compare(_(O.value.value), _(I)), [1]: () => _(O.value.value).some((E) => O.compare(_(E), _(I))) });
    });
    w !== -1 && (f.value = w), n.value = 0;
  }, goToOption(w, P, I) {
    if (v.value = !1, e.disabled || s.value && !d.value.static && n.value === 1)
      return;
    let E = b();
    if (E.activeOptionIndex === null) {
      let A = E.options.findIndex((J) => !J.dataRef.disabled);
      A !== -1 && (E.activeOptionIndex = A);
    }
    let C = Rt(w === F.Specific ? { focus: F.Specific, id: P } : { focus: w }, { resolveItems: () => E.options, resolveActiveIndex: () => E.activeOptionIndex, resolveId: (A) => A.id, resolveDisabled: (A) => A.dataRef.disabled });
    f.value = C, c.value = I != null ? I : 1, i.value = E.options;
  }, selectOption(w) {
    let P = i.value.find((E) => E.id === w);
    if (!P)
      return;
    let { dataRef: I } = P;
    S(j(m.value, { [0]: () => I.value, [1]: () => {
      let E = _(O.value.value).slice(), C = _(I.value), A = E.findIndex((J) => O.compare(C, _(J)));
      return A === -1 ? E.push(C) : E.splice(A, 1), E;
    } }));
  }, selectActiveOption() {
    if (O.activeOptionIndex.value === null)
      return;
    let { dataRef: w, id: P } = i.value[O.activeOptionIndex.value];
    S(j(m.value, { [0]: () => w.value, [1]: () => {
      let I = _(O.value.value).slice(), E = _(w.value), C = I.findIndex((A) => O.compare(E, _(A)));
      return C === -1 ? I.push(E) : I.splice(C, 1), I;
    } })), O.goToOption(F.Specific, P);
  }, registerOption(w, P) {
    let I = { id: w, dataRef: P }, E = b((C) => [...C, I]);
    if (f.value === null) {
      let C = P.value.value;
      j(m.value, { [0]: () => O.compare(_(O.value.value), _(C)), [1]: () => _(O.value.value).some((A) => O.compare(_(A), _(C))) }) && (E.activeOptionIndex = E.options.indexOf(I));
    }
    i.value = E.options, f.value = E.activeOptionIndex, c.value = 1, E.options.some((C) => !y(C.dataRef.domRef)) && requestAnimationFrame(() => {
      let C = b();
      i.value = C.options, f.value = C.activeOptionIndex;
    });
  }, unregisterOption(w) {
    var P;
    O.activeOptionIndex.value !== null && ((P = O.options.value[O.activeOptionIndex.value]) == null ? void 0 : P.id) === w && (v.value = !0);
    let I = b((E) => {
      let C = E.findIndex((A) => A.id === w);
      return C !== -1 && E.splice(C, 1), E;
    });
    i.value = I.options, f.value = I.activeOptionIndex, c.value = 1;
  } };
  it([r, u, s], () => O.closeCombobox(), g(() => n.value === 0)), X(Vt, O), ot(g(() => j(n.value, { [0]: B.Open, [1]: B.Closed })));
  let U = g(() => O.activeOptionIndex.value === null ? null : i.value[O.activeOptionIndex.value].dataRef.value), G = g(() => {
    var w;
    return (w = y(r)) == null ? void 0 : w.closest("form");
  });
  return N(() => {
    fe([G], () => {
      if (!G.value || e.defaultValue === void 0)
        return;
      function w() {
        O.change(e.defaultValue);
      }
      return G.value.addEventListener("reset", w), () => {
        var P;
        (P = G.value) == null || P.removeEventListener("reset", w);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: w, disabled: P, form: I, ...E } = e, C = { open: n.value === 0, disabled: P, activeIndex: O.activeOptionIndex.value, activeOption: U.value, value: x.value };
    return $(ge, [...w != null && x.value != null ? _t({ [w]: x.value }).map(([A, J]) => $(Be, Ln({ features: Ie.Hidden, key: A, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: I, name: A, value: J }))) : [], M({ theirProps: { ...l, ...Ne(E, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: C, slots: t, attrs: l, name: "Combobox" })]);
  };
} });
T({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${q()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = we("ComboboxLabel");
  function n() {
    var a;
    (a = y(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: r, ...u } = e, s = { id: r, ref: o.labelRef, onClick: n };
    return M({ ourProps: s, theirProps: u, slot: a, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} });
T({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${q()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = we("ComboboxButton");
  o({ el: n.buttonRef, $el: n.buttonRef });
  function a(s) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (s.preventDefault(), n.openCombobox()), W(() => {
      var d;
      return (d = y(n.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function r(s) {
    switch (s.key) {
      case R.ArrowDown:
        s.preventDefault(), s.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), W(() => {
          var d;
          return (d = n.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case R.ArrowUp:
        s.preventDefault(), s.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), W(() => {
          n.value.value || n.goToOption(F.Last);
        })), W(() => {
          var d;
          return (d = n.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case R.Escape:
        if (n.comboboxState.value !== 0)
          return;
        s.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && s.stopPropagation(), n.closeCombobox(), W(() => {
          var d;
          return (d = n.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = Ft(g(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var s, d;
    let i = { open: n.comboboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: f, ...c } = e, v = { ref: n.buttonRef, id: f, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (s = y(n.optionsRef)) == null ? void 0 : s.id, "aria-expanded": n.disabled.value ? void 0 : n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(d = y(n.labelRef)) == null ? void 0 : d.id, f].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return M({ ourProps: v, theirProps: c, slot: i, attrs: t, slots: l, name: "ComboboxButton" });
  };
} });
T({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${q()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = we("ComboboxInput"), r = { value: !1 };
  n({ el: a.inputRef, $el: a.inputRef });
  let u = g(() => {
    var p;
    let x = a.value.value;
    return y(a.inputRef) ? typeof e.displayValue < "u" && x !== void 0 ? (p = e.displayValue(x)) != null ? p : "" : typeof x == "string" ? x : "" : "";
  });
  N(() => {
    fe([u, a.comboboxState], ([p, x], [S, O]) => {
      if (r.value)
        return;
      let U = y(a.inputRef);
      U && (O === 0 && x === 1 || p !== S) && (U.value = p);
    }, { immediate: !0 }), fe([a.comboboxState], ([p], [x]) => {
      if (p === 0 && x === 1) {
        let S = y(a.inputRef);
        if (!S)
          return;
        let O = S.value, { selectionStart: U, selectionEnd: G, selectionDirection: w } = S;
        S.value = "", S.value = O, w !== null ? S.setSelectionRange(U, G, w) : S.setSelectionRange(U, G);
      }
    });
  });
  let s = h(!1), d = h(null);
  function i() {
    s.value = !0;
  }
  function f() {
    ke().nextFrame(() => {
      s.value = !1, d.value && (a.openCombobox(), t("change", d.value), d.value = null);
    });
  }
  function c(p) {
    switch (r.value = !0, p.key) {
      case R.Backspace:
      case R.Delete:
        if (a.mode.value !== 0 || !a.nullable.value)
          return;
        let x = p.currentTarget;
        requestAnimationFrame(() => {
          if (x.value === "") {
            a.change(null);
            let S = y(a.optionsRef);
            S && (S.scrollTop = 0), a.goToOption(F.Nothing);
          }
        });
        break;
      case R.Enter:
        if (r.value = !1, a.comboboxState.value !== 0 || s.value)
          return;
        if (p.preventDefault(), p.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case R.ArrowDown:
        return r.value = !1, p.preventDefault(), p.stopPropagation(), j(a.comboboxState.value, { [0]: () => a.goToOption(F.Next), [1]: () => a.openCombobox() });
      case R.ArrowUp:
        return r.value = !1, p.preventDefault(), p.stopPropagation(), j(a.comboboxState.value, { [0]: () => a.goToOption(F.Previous), [1]: () => {
          a.openCombobox(), W(() => {
            a.value.value || a.goToOption(F.Last);
          });
        } });
      case R.Home:
        if (p.shiftKey)
          break;
        return r.value = !1, p.preventDefault(), p.stopPropagation(), a.goToOption(F.First);
      case R.PageUp:
        return r.value = !1, p.preventDefault(), p.stopPropagation(), a.goToOption(F.First);
      case R.End:
        if (p.shiftKey)
          break;
        return r.value = !1, p.preventDefault(), p.stopPropagation(), a.goToOption(F.Last);
      case R.PageDown:
        return r.value = !1, p.preventDefault(), p.stopPropagation(), a.goToOption(F.Last);
      case R.Escape:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        p.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && p.stopPropagation(), a.closeCombobox();
        break;
      case R.Tab:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        a.mode.value === 0 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function v(p) {
    if (s.value) {
      d.value = p;
      return;
    }
    a.openCombobox(), t("change", p);
  }
  function b() {
    r.value = !1;
  }
  let m = g(() => {
    var p, x, S, O;
    return (O = (S = (x = e.defaultValue) != null ? x : a.defaultValue.value !== void 0 ? (p = e.displayValue) == null ? void 0 : p.call(e, a.defaultValue.value) : null) != null ? S : a.defaultValue.value) != null ? O : "";
  });
  return () => {
    var p, x, S, O, U, G;
    let w = { open: a.comboboxState.value === 0 }, { id: P, displayValue: I, onChange: E, ...C } = e, A = { "aria-controls": (p = a.optionsRef.value) == null ? void 0 : p.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (x = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : x.id, "aria-labelledby": (U = (S = y(a.labelRef)) == null ? void 0 : S.id) != null ? U : (O = y(a.buttonRef)) == null ? void 0 : O.id, "aria-autocomplete": "list", id: P, onCompositionstart: i, onCompositionend: f, onKeydown: c, onInput: v, onBlur: b, role: "combobox", type: (G = l.type) != null ? G : "text", tabIndex: 0, ref: a.inputRef, defaultValue: m.value, disabled: a.disabled.value === !0 ? !0 : void 0 };
    return M({ ourProps: A, theirProps: C, slot: w, attrs: l, slots: o, features: ae.RenderStrategy | ae.Static, name: "ComboboxInput" });
  };
} });
T({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = we("ComboboxOptions"), a = `headlessui-combobox-options-${q()}`;
  o({ el: n.optionsRef, $el: n.optionsRef }), H(() => {
    n.optionsPropsRef.value.static = e.static;
  }), H(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let r = Ce(), u = g(() => r !== null ? (r.value & B.Open) === B.Open : n.comboboxState.value === 0);
  return kt({ container: g(() => y(n.optionsRef)), enabled: g(() => n.comboboxState.value === 0), accept(s) {
    return s.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : s.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s) {
    s.setAttribute("role", "none");
  } }), () => {
    var s, d, i;
    let f = { open: n.comboboxState.value === 0 }, c = { "aria-labelledby": (i = (s = y(n.labelRef)) == null ? void 0 : s.id) != null ? i : (d = y(n.buttonRef)) == null ? void 0 : d.id, id: a, ref: n.optionsRef, role: "listbox", "aria-multiselectable": n.mode.value === 1 ? !0 : void 0 }, v = Ne(e, ["hold"]);
    return M({ ourProps: c, theirProps: v, slot: f, attrs: t, slots: l, features: ae.RenderStrategy | ae.Static, visible: u.value, name: "ComboboxOptions" });
  };
} });
T({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: o }) {
  let n = we("ComboboxOption"), a = `headlessui-combobox-option-${q()}`, r = h(null);
  o({ el: r, $el: r });
  let u = g(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === a : !1), s = g(() => j(n.mode.value, { [0]: () => n.compare(_(n.value.value), _(e.value)), [1]: () => _(n.value.value).some((p) => n.compare(_(p), _(e.value))) })), d = g(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  N(() => n.registerOption(a, d)), Y(() => n.unregisterOption(a)), H(() => {
    n.comboboxState.value === 0 && u.value && n.activationTrigger.value !== 0 && W(() => {
      var p, x;
      return (x = (p = y(r)) == null ? void 0 : p.scrollIntoView) == null ? void 0 : x.call(p, { block: "nearest" });
    });
  });
  function i(p) {
    if (e.disabled)
      return p.preventDefault();
    n.selectOption(a), n.mode.value === 0 && n.closeCombobox(), Qn() || requestAnimationFrame(() => {
      var x;
      return (x = y(n.inputRef)) == null ? void 0 : x.focus();
    });
  }
  function f() {
    if (e.disabled)
      return n.goToOption(F.Nothing);
    n.goToOption(F.Specific, a);
  }
  let c = Nt();
  function v(p) {
    c.update(p);
  }
  function b(p) {
    c.wasMoved(p) && (e.disabled || u.value || n.goToOption(F.Specific, a, 0));
  }
  function m(p) {
    c.wasMoved(p) && (e.disabled || u.value && (n.optionsPropsRef.value.hold || n.goToOption(F.Nothing)));
  }
  return () => {
    let { disabled: p } = e, x = { active: u.value, selected: s.value, disabled: p }, S = { id: a, ref: r, role: "option", tabIndex: p === !0 ? void 0 : -1, "aria-disabled": p === !0 ? !0 : void 0, "aria-selected": s.value, disabled: void 0, onClick: i, onFocus: f, onPointerenter: v, onMouseenter: v, onPointermove: b, onMousemove: b, onPointerleave: m, onMouseleave: m };
    return M({ ourProps: S, theirProps: e, slot: x, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
var Ee = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Ee || {});
function Zn() {
  let e = h(0);
  return Mt("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ht(e, t, l, o) {
  Fe.isServer || H((n) => {
    e = e != null ? e : window, e.addEventListener(t, l, o), n(() => e.removeEventListener(t, l, o));
  });
}
function Ut(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function el(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Gt(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let l of e.value) {
    let o = y(l);
    o instanceof HTMLElement && t.add(o);
  }
  return t;
}
var Wt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Wt || {});
let Oe = Object.assign(T({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: h(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = h(null);
  o({ el: n, $el: n });
  let a = g(() => pe(n)), r = h(!1);
  N(() => r.value = !0), Y(() => r.value = !1), nl({ ownerDocument: a }, g(() => r.value && Boolean(e.features & 16)));
  let u = ll({ ownerDocument: a, container: n, initialFocus: g(() => e.initialFocus) }, g(() => r.value && Boolean(e.features & 2)));
  ol({ ownerDocument: a, container: n, containers: e.containers, previousActiveElement: u }, g(() => r.value && Boolean(e.features & 8)));
  let s = Zn();
  function d(v) {
    let b = y(n);
    !b || ((m) => m())(() => {
      j(s.value, { [Ee.Forwards]: () => {
        Pe(b, ne.First, { skipElements: [v.relatedTarget] });
      }, [Ee.Backwards]: () => {
        Pe(b, ne.Last, { skipElements: [v.relatedTarget] });
      } });
    });
  }
  let i = h(!1);
  function f(v) {
    v.key === "Tab" && (i.value = !0, requestAnimationFrame(() => {
      i.value = !1;
    }));
  }
  function c(v) {
    if (!r.value)
      return;
    let b = Gt(e.containers);
    y(n) instanceof HTMLElement && b.add(y(n));
    let m = v.relatedTarget;
    m instanceof HTMLElement && m.dataset.headlessuiFocusGuard !== "true" && (Kt(b, m) || (i.value ? Pe(y(n), j(s.value, { [Ee.Forwards]: () => ne.Next, [Ee.Backwards]: () => ne.Previous }) | ne.WrapAround, { relativeTo: v.target }) : v.target instanceof HTMLElement && ce(v.target)));
  }
  return () => {
    let v = {}, b = { ref: n, onKeydown: f, onFocusout: c }, { features: m, initialFocus: p, containers: x, ...S } = e;
    return $(ge, [Boolean(m & 4) && $(Be, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Ie.Focusable }), M({ ourProps: b, theirProps: { ...t, ...S }, slot: v, attrs: t, slots: l, name: "FocusTrap" }), Boolean(m & 4) && $(Be, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Ie.Focusable })]);
  };
} }), { features: Wt }), me = [];
el(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && me[0] !== t.target && (me.unshift(t.target), me = me.filter((l) => l != null && l.isConnected), me.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function tl(e) {
  let t = h(me.slice());
  return fe([e], ([l], [o]) => {
    o === !0 && l === !1 ? Ut(() => {
      t.value.splice(0);
    }) : o === !1 && l === !0 && (t.value = me.slice());
  }, { flush: "post" }), () => {
    var l;
    return (l = t.value.find((o) => o != null && o.isConnected)) != null ? l : null;
  };
}
function nl({ ownerDocument: e }, t) {
  let l = tl(t);
  N(() => {
    H(() => {
      var o, n;
      t.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((n = e.value) == null ? void 0 : n.body) && ce(l());
    }, { flush: "post" });
  }), Y(() => {
    t.value && ce(l());
  });
}
function ll({ ownerDocument: e, container: t, initialFocus: l }, o) {
  let n = h(null), a = h(!1);
  return N(() => a.value = !0), Y(() => a.value = !1), N(() => {
    fe([t, l, o], (r, u) => {
      if (r.every((d, i) => (u == null ? void 0 : u[i]) === d) || !o.value)
        return;
      let s = y(t);
      s && Ut(() => {
        var d, i;
        if (!a.value)
          return;
        let f = y(l), c = (d = e.value) == null ? void 0 : d.activeElement;
        if (f) {
          if (f === c) {
            n.value = c;
            return;
          }
        } else if (s.contains(c)) {
          n.value = c;
          return;
        }
        f ? ce(f) : Pe(s, ne.First | ne.NoScroll) === Lt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (i = e.value) == null ? void 0 : i.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function ol({ ownerDocument: e, container: t, containers: l, previousActiveElement: o }, n) {
  var a;
  Ht((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!n.value)
      return;
    let u = Gt(l);
    y(t) instanceof HTMLElement && u.add(y(t));
    let s = o.value;
    if (!s)
      return;
    let d = r.target;
    d && d instanceof HTMLElement ? Kt(u, d) ? (o.value = d, ce(d)) : (r.preventDefault(), r.stopPropagation(), ce(s)) : ce(o.value);
  }, !0);
}
function Kt(e, t) {
  for (let l of e)
    if (l.contains(t))
      return !0;
  return !1;
}
let Ue = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map();
function ht(e, t = h(!0)) {
  H((l) => {
    var o;
    if (!t.value)
      return;
    let n = y(e);
    if (!n)
      return;
    l(function() {
      var r;
      if (!n)
        return;
      let u = (r = Se.get(n)) != null ? r : 1;
      if (u === 1 ? Se.delete(n) : Se.set(n, u - 1), u !== 1)
        return;
      let s = Ue.get(n);
      s && (s["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", s["aria-hidden"]), n.inert = s.inert, Ue.delete(n));
    });
    let a = (o = Se.get(n)) != null ? o : 0;
    Se.set(n, a + 1), a === 0 && (Ue.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0);
  });
}
let qt = Symbol("ForcePortalRootContext");
function al() {
  return z(qt, !1);
}
let ze = T({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return X(qt, e.force), () => {
    let { force: o, ...n } = e;
    return M({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function rl(e) {
  let t = pe(e);
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
let Qt = T({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let o = h(null), n = g(() => pe(o)), a = al(), r = z(zt, null), u = h(a === !0 || r == null ? rl(o.value) : r.resolveTarget());
  H(() => {
    a || r != null && (u.value = r.resolveTarget());
  });
  let s = z(Ye, null);
  return N(() => {
    let d = y(o);
    d && s && Y(s.register(d));
  }), Y(() => {
    var d, i;
    let f = (d = n.value) == null ? void 0 : d.getElementById("headlessui-portal-root");
    f && u.value === f && u.value.children.length <= 0 && ((i = u.value.parentElement) == null || i.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let d = { ref: o, "data-headlessui-portal": "" };
    return $(fn, { to: u.value }, M({ ourProps: d, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), Ye = Symbol("PortalParentContext");
function ul() {
  let e = z(Ye, null), t = h([]);
  function l(a) {
    return t.value.push(a), e && e.register(a), () => o(a);
  }
  function o(a) {
    let r = t.value.indexOf(a);
    r !== -1 && t.value.splice(r, 1), e && e.unregister(a);
  }
  let n = { register: l, unregister: o, portals: t };
  return [t, T({ name: "PortalWrapper", setup(a, { slots: r }) {
    return X(Ye, n), () => {
      var u;
      return (u = r.default) == null ? void 0 : u.call(r);
    };
  } })];
}
let zt = Symbol("PortalGroupContext"), il = T({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let o = pn({ resolveTarget() {
    return e.target;
  } });
  return X(zt, o), () => {
    let { target: n, ...a } = e;
    return M({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), Yt = Symbol("StackContext");
var Je = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Je || {});
function sl() {
  return z(Yt, () => {
  });
}
function dl({ type: e, enabled: t, element: l, onUpdate: o }) {
  let n = sl();
  function a(...r) {
    o == null || o(...r), n(...r);
  }
  N(() => {
    fe(t, (r, u) => {
      r ? a(0, e, l) : u === !0 && a(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), Y(() => {
    t.value && a(1, e, l);
  }), X(Yt, a);
}
let Jt = Symbol("DescriptionContext");
function cl() {
  let e = z(Jt, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function fl({ slot: e = h({}), name: t = "Description", props: l = {} } = {}) {
  let o = h([]);
  function n(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return X(Jt, { register: n, slot: e, name: t, props: l }), g(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
T({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${q()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = cl();
  return N(() => Y(o.register(e.id))), () => {
    let { name: n = "Description", slot: a = h({}), props: r = {} } = o, { id: u, ...s } = e, d = { ...Object.entries(r).reduce((i, [f, c]) => Object.assign(i, { [f]: le(c) }), {}), id: u };
    return M({ ourProps: d, theirProps: s, slot: a.value, attrs: t, slots: l, name: n });
  };
} });
function pl(e) {
  let t = gn(e.getSnapshot());
  return Y(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function vl(e, t) {
  let l = e(), o = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return l;
  }, subscribe(n) {
    return o.add(n), () => o.delete(n);
  }, dispatch(n, ...a) {
    let r = t[n].call(l, ...a);
    r && (l = r, o.forEach((u) => u()));
  } };
}
function ml() {
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
function bl() {
  if (!$t())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: l, meta: o }) {
    function n(r) {
      return o.containers.flatMap((u) => u()).some((u) => u.contains(r));
    }
    l.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    l.addEventListener(t, "click", (r) => {
      if (r.target instanceof HTMLElement)
        try {
          let u = r.target.closest("a");
          if (!u)
            return;
          let { hash: s } = new URL(u.href), d = t.querySelector(s);
          d && !n(d) && (a = d);
        } catch {
        }
    }, !0), l.addEventListener(t, "touchmove", (r) => {
      r.target instanceof HTMLElement && !n(r.target) && r.preventDefault();
    }, { passive: !1 }), l.add(() => {
      window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
    });
  } };
}
function gl() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function hl(e) {
  let t = {};
  for (let l of e)
    Object.assign(t, l(t));
  return t;
}
let be = vl(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var l;
  let o = (l = this.get(e)) != null ? l : { doc: e, count: 0, d: ke(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(t), this.set(e, o), this;
}, POP(e, t) {
  let l = this.get(e);
  return l && (l.count--, l.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: l }) {
  let o = { doc: e, d: t, meta: hl(l) }, n = [bl(), ml(), gl()];
  n.forEach(({ before: a }) => a == null ? void 0 : a(o)), n.forEach(({ after: a }) => a == null ? void 0 : a(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
be.subscribe(() => {
  let e = be.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [l] of e)
    t.set(l, l.documentElement.style.overflow);
  for (let l of e.values()) {
    let o = t.get(l.doc) === "hidden", n = l.count !== 0;
    (n && !o || !n && o) && be.dispatch(l.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", l), l.count === 0 && be.dispatch("TEARDOWN", l);
  }
});
function yl(e, t, l) {
  let o = pl(be), n = g(() => {
    let a = e.value ? o.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return fe([e, t], ([a, r], [u], s) => {
    if (!a || !r)
      return;
    be.dispatch("PUSH", a, l);
    let d = !1;
    s(() => {
      d || (be.dispatch("POP", u != null ? u : a, l), d = !0);
    });
  }, { immediate: !0 }), n;
}
function wl({ defaultContainers: e = [], portals: t } = {}) {
  let l = h(null), o = pe(l);
  function n() {
    var a;
    let r = [];
    for (let u of e)
      u !== null && (u instanceof HTMLElement ? r.push(u) : "value" in u && u.value instanceof HTMLElement && r.push(u.value));
    if (t != null && t.value)
      for (let u of t.value)
        r.push(u);
    for (let u of (a = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? a : [])
      u !== document.body && u !== document.head && u instanceof HTMLElement && u.id !== "headlessui-portal-root" && (u.contains(y(l)) || r.some((s) => u.contains(s)) || r.push(u));
    return r;
  }
  return { resolveContainers: n, contains(a) {
    return n().some((r) => r.contains(a));
  }, mainTreeNodeRef: l, MainTreeNode() {
    return $(Be, { features: Ie.Hidden, ref: l });
  } };
}
var xl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(xl || {});
let Xe = Symbol("DialogContext");
function Le(e) {
  let t = z(Xe, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Le), l;
  }
  return t;
}
let Ae = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
T({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ae }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${q()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  var a;
  let r = h(!1);
  N(() => {
    r.value = !0;
  });
  let u = h(0), s = Ce(), d = g(() => e.open === Ae && s !== null ? (s.value & B.Open) === B.Open : e.open), i = h(null), f = g(() => pe(i));
  if (n({ el: i, $el: i }), !(e.open !== Ae || s !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === Ae ? void 0 : e.open}`);
  let c = g(() => r.value && d.value ? 0 : 1), v = g(() => c.value === 0), b = g(() => u.value > 1), m = z(Xe, null) !== null, [p, x] = ul(), { resolveContainers: S, mainTreeNodeRef: O, MainTreeNode: U } = wl({ portals: p, defaultContainers: [g(() => {
    var k;
    return (k = Q.panelRef.value) != null ? k : i.value;
  })] }), G = g(() => b.value ? "parent" : "leaf"), w = g(() => s !== null ? (s.value & B.Closing) === B.Closing : !1), P = g(() => m || w.value ? !1 : v.value), I = g(() => {
    var k, V, Z;
    return (Z = Array.from((V = (k = f.value) == null ? void 0 : k.querySelectorAll("body > *")) != null ? V : []).find((ee) => ee.id === "headlessui-portal-root" ? !1 : ee.contains(y(O)) && ee instanceof HTMLElement)) != null ? Z : null;
  });
  ht(I, P);
  let E = g(() => b.value ? !0 : v.value), C = g(() => {
    var k, V, Z;
    return (Z = Array.from((V = (k = f.value) == null ? void 0 : k.querySelectorAll("[data-headlessui-portal]")) != null ? V : []).find((ee) => ee.contains(y(O)) && ee instanceof HTMLElement)) != null ? Z : null;
  });
  ht(C, E), dl({ type: "Dialog", enabled: g(() => c.value === 0), element: i, onUpdate: (k, V) => {
    if (V === "Dialog")
      return j(k, { [Je.Add]: () => u.value += 1, [Je.Remove]: () => u.value -= 1 });
  } });
  let A = fl({ name: "DialogDescription", slot: g(() => ({ open: d.value })) }), J = h(null), Q = { titleId: J, panelRef: h(null), dialogState: c, setTitleId(k) {
    J.value !== k && (J.value = k);
  }, close() {
    t("close", !1);
  } };
  X(Xe, Q);
  let xe = g(() => !(!v.value || b.value));
  it(S, (k, V) => {
    Q.close(), W(() => V == null ? void 0 : V.focus());
  }, xe);
  let re = g(() => !(b.value || c.value !== 0));
  Ht((a = f.value) == null ? void 0 : a.defaultView, "keydown", (k) => {
    re.value && (k.defaultPrevented || k.key === R.Escape && (k.preventDefault(), k.stopPropagation(), Q.close()));
  });
  let he = g(() => !(w.value || c.value !== 0 || m));
  return yl(f, he, (k) => {
    var V;
    return { containers: [...(V = k.containers) != null ? V : [], S] };
  }), H((k) => {
    if (c.value !== 0)
      return;
    let V = y(i);
    if (!V)
      return;
    let Z = new ResizeObserver((ee) => {
      for (let De of ee) {
        let ue = De.target.getBoundingClientRect();
        ue.x === 0 && ue.y === 0 && ue.width === 0 && ue.height === 0 && Q.close();
      }
    });
    Z.observe(V), k(() => Z.disconnect());
  }), () => {
    let { id: k, open: V, initialFocus: Z, ...ee } = e, De = { ...l, ref: i, id: k, role: "dialog", "aria-modal": c.value === 0 ? !0 : void 0, "aria-labelledby": J.value, "aria-describedby": A.value }, ue = { open: c.value === 0 };
    return $(ze, { force: !0 }, () => [$(Qt, () => $(il, { target: i.value }, () => $(ze, { force: !1 }, () => $(Oe, { initialFocus: Z, containers: S, features: v.value ? j(G.value, { parent: Oe.features.RestoreFocus, leaf: Oe.features.All & ~Oe.features.FocusLock }) : Oe.features.None }, () => $(x, {}, () => M({ ourProps: De, theirProps: { ...ee, ...l }, slot: ue, attrs: l, slots: o, visible: c.value === 0, features: ae.RenderStrategy | ae.Static, name: "Dialog" })))))), $(U)]);
  };
} });
T({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${q()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Le("DialogOverlay");
  function n(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return M({ ourProps: { id: a, "aria-hidden": !0, onClick: n }, theirProps: r, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
T({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${q()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Le("DialogBackdrop"), a = h(null);
  return o({ el: a, $el: a }), N(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...u } = e, s = { id: r, ref: a, "aria-hidden": !0 };
    return $(ze, { force: !0 }, () => $(Qt, () => M({ ourProps: s, theirProps: { ...t, ...u }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
T({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${q()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Le("DialogPanel");
  o({ el: n.panelRef, $el: n.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...u } = e, s = { id: r, ref: n.panelRef, onClick: a };
    return M({ ourProps: s, theirProps: u, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} });
T({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${q()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Le("DialogTitle");
  return N(() => {
    o.setTitleId(e.id), Y(() => o.setTitleId(null));
  }), () => {
    let { id: n, ...a } = e;
    return M({ ourProps: { id: n }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
  };
} });
let yt = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function wt(e) {
  var t, l;
  let o = (t = e.innerText) != null ? t : "", n = e.cloneNode(!0);
  if (!(n instanceof HTMLElement))
    return o;
  let a = !1;
  for (let u of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    u.remove(), a = !0;
  let r = a ? (l = n.innerText) != null ? l : "" : o;
  return yt.test(r) && (r = r.replace(yt, "")), r;
}
function Ol(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let l = e.getAttribute("aria-labelledby");
  if (l) {
    let o = l.split(" ").map((n) => {
      let a = document.getElementById(n);
      if (a) {
        let r = a.getAttribute("aria-label");
        return typeof r == "string" ? r.trim() : wt(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (o.length > 0)
      return o.join(", ");
  }
  return wt(e).trim();
}
function Sl(e) {
  let t = h(""), l = h("");
  return () => {
    let o = y(e);
    if (!o)
      return "";
    let n = o.innerText;
    if (t.value === n)
      return l.value;
    let a = Ol(o).trim().toLowerCase();
    return t.value = n, l.value = a, a;
  };
}
var El = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(El || {}), Pl = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Pl || {});
function Tl(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Xt = Symbol("MenuContext");
function $e(e) {
  let t = z(Xt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, $e), l;
  }
  return t;
}
T({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let o = h(1), n = h(null), a = h(null), r = h([]), u = h(""), s = h(null), d = h(1);
  function i(c = (v) => v) {
    let v = s.value !== null ? r.value[s.value] : null, b = ut(c(r.value.slice()), (p) => y(p.dataRef.domRef)), m = v ? b.indexOf(v) : null;
    return m === -1 && (m = null), { items: b, activeItemIndex: m };
  }
  let f = { menuState: o, buttonRef: n, itemsRef: a, items: r, searchQuery: u, activeItemIndex: s, activationTrigger: d, closeMenu: () => {
    o.value = 1, s.value = null;
  }, openMenu: () => o.value = 0, goToItem(c, v, b) {
    let m = i(), p = Rt(c === F.Specific ? { focus: F.Specific, id: v } : { focus: c }, { resolveItems: () => m.items, resolveActiveIndex: () => m.activeItemIndex, resolveId: (x) => x.id, resolveDisabled: (x) => x.dataRef.disabled });
    u.value = "", s.value = p, d.value = b != null ? b : 1, r.value = m.items;
  }, search(c) {
    let v = u.value !== "" ? 0 : 1;
    u.value += c.toLowerCase();
    let b = (s.value !== null ? r.value.slice(s.value + v).concat(r.value.slice(0, s.value + v)) : r.value).find((p) => p.dataRef.textValue.startsWith(u.value) && !p.dataRef.disabled), m = b ? r.value.indexOf(b) : -1;
    m === -1 || m === s.value || (s.value = m, d.value = 1);
  }, clearSearch() {
    u.value = "";
  }, registerItem(c, v) {
    let b = i((m) => [...m, { id: c, dataRef: v }]);
    r.value = b.items, s.value = b.activeItemIndex, d.value = 1;
  }, unregisterItem(c) {
    let v = i((b) => {
      let m = b.findIndex((p) => p.id === c);
      return m !== -1 && b.splice(m, 1), b;
    });
    r.value = v.items, s.value = v.activeItemIndex, d.value = 1;
  } };
  return it([n, a], (c, v) => {
    var b;
    f.closeMenu(), rt(v, at.Loose) || (c.preventDefault(), (b = y(n)) == null || b.focus());
  }, g(() => o.value === 0)), X(Xt, f), ot(g(() => j(o.value, { [0]: B.Open, [1]: B.Closed }))), () => {
    let c = { open: o.value === 0, close: f.closeMenu };
    return M({ ourProps: {}, theirProps: e, slot: c, slots: t, attrs: l, name: "Menu" });
  };
} });
T({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${q()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = $e("MenuButton");
  o({ el: n.buttonRef, $el: n.buttonRef });
  function a(d) {
    switch (d.key) {
      case R.Space:
      case R.Enter:
      case R.ArrowDown:
        d.preventDefault(), d.stopPropagation(), n.openMenu(), W(() => {
          var i;
          (i = y(n.itemsRef)) == null || i.focus({ preventScroll: !0 }), n.goToItem(F.First);
        });
        break;
      case R.ArrowUp:
        d.preventDefault(), d.stopPropagation(), n.openMenu(), W(() => {
          var i;
          (i = y(n.itemsRef)) == null || i.focus({ preventScroll: !0 }), n.goToItem(F.Last);
        });
        break;
    }
  }
  function r(d) {
    switch (d.key) {
      case R.Space:
        d.preventDefault();
        break;
    }
  }
  function u(d) {
    e.disabled || (n.menuState.value === 0 ? (n.closeMenu(), W(() => {
      var i;
      return (i = y(n.buttonRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), n.openMenu(), Tl(() => {
      var i;
      return (i = y(n.itemsRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
    })));
  }
  let s = Ft(g(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var d;
    let i = { open: n.menuState.value === 0 }, { id: f, ...c } = e, v = { ref: n.buttonRef, id: f, type: s.value, "aria-haspopup": "menu", "aria-controls": (d = y(n.itemsRef)) == null ? void 0 : d.id, "aria-expanded": e.disabled ? void 0 : n.menuState.value === 0, onKeydown: a, onKeyup: r, onClick: u };
    return M({ ourProps: v, theirProps: c, slot: i, attrs: t, slots: l, name: "MenuButton" });
  };
} });
T({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-menu-items-${q()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = $e("MenuItems"), a = h(null);
  o({ el: n.itemsRef, $el: n.itemsRef }), kt({ container: g(() => y(n.itemsRef)), enabled: g(() => n.menuState.value === 0), accept(i) {
    return i.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : i.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(i) {
    i.setAttribute("role", "none");
  } });
  function r(i) {
    var f;
    switch (a.value && clearTimeout(a.value), i.key) {
      case R.Space:
        if (n.searchQuery.value !== "")
          return i.preventDefault(), i.stopPropagation(), n.search(i.key);
      case R.Enter:
        if (i.preventDefault(), i.stopPropagation(), n.activeItemIndex.value !== null) {
          let c = n.items.value[n.activeItemIndex.value];
          (f = y(c.dataRef.domRef)) == null || f.click();
        }
        n.closeMenu(), At(y(n.buttonRef));
        break;
      case R.ArrowDown:
        return i.preventDefault(), i.stopPropagation(), n.goToItem(F.Next);
      case R.ArrowUp:
        return i.preventDefault(), i.stopPropagation(), n.goToItem(F.Previous);
      case R.Home:
      case R.PageUp:
        return i.preventDefault(), i.stopPropagation(), n.goToItem(F.First);
      case R.End:
      case R.PageDown:
        return i.preventDefault(), i.stopPropagation(), n.goToItem(F.Last);
      case R.Escape:
        i.preventDefault(), i.stopPropagation(), n.closeMenu(), W(() => {
          var c;
          return (c = y(n.buttonRef)) == null ? void 0 : c.focus({ preventScroll: !0 });
        });
        break;
      case R.Tab:
        i.preventDefault(), i.stopPropagation(), n.closeMenu(), W(() => Wn(y(n.buttonRef), i.shiftKey ? ne.Previous : ne.Next));
        break;
      default:
        i.key.length === 1 && (n.search(i.key), a.value = setTimeout(() => n.clearSearch(), 350));
        break;
    }
  }
  function u(i) {
    switch (i.key) {
      case R.Space:
        i.preventDefault();
        break;
    }
  }
  let s = Ce(), d = g(() => s !== null ? (s.value & B.Open) === B.Open : n.menuState.value === 0);
  return () => {
    var i, f;
    let c = { open: n.menuState.value === 0 }, { id: v, ...b } = e, m = { "aria-activedescendant": n.activeItemIndex.value === null || (i = n.items.value[n.activeItemIndex.value]) == null ? void 0 : i.id, "aria-labelledby": (f = y(n.buttonRef)) == null ? void 0 : f.id, id: v, onKeydown: r, onKeyup: u, role: "menu", tabIndex: 0, ref: n.itemsRef };
    return M({ ourProps: m, theirProps: b, slot: c, attrs: t, slots: l, features: ae.RenderStrategy | ae.Static, visible: d.value, name: "MenuItems" });
  };
} });
T({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-menu-item-${q()}` } }, setup(e, { slots: t, attrs: l, expose: o }) {
  let n = $e("MenuItem"), a = h(null);
  o({ el: a, $el: a });
  let r = g(() => n.activeItemIndex.value !== null ? n.items.value[n.activeItemIndex.value].id === e.id : !1), u = Sl(a), s = g(() => ({ disabled: e.disabled, get textValue() {
    return u();
  }, domRef: a }));
  N(() => n.registerItem(e.id, s)), Y(() => n.unregisterItem(e.id)), H(() => {
    n.menuState.value === 0 && r.value && n.activationTrigger.value !== 0 && W(() => {
      var m, p;
      return (p = (m = y(a)) == null ? void 0 : m.scrollIntoView) == null ? void 0 : p.call(m, { block: "nearest" });
    });
  });
  function d(m) {
    if (e.disabled)
      return m.preventDefault();
    n.closeMenu(), At(y(n.buttonRef));
  }
  function i() {
    if (e.disabled)
      return n.goToItem(F.Nothing);
    n.goToItem(F.Specific, e.id);
  }
  let f = Nt();
  function c(m) {
    f.update(m);
  }
  function v(m) {
    f.wasMoved(m) && (e.disabled || r.value || n.goToItem(F.Specific, e.id, 0));
  }
  function b(m) {
    f.wasMoved(m) && (e.disabled || r.value && n.goToItem(F.Nothing));
  }
  return () => {
    let { disabled: m } = e, p = { active: r.value, disabled: m, close: n.closeMenu }, { id: x, ...S } = e;
    return M({ ourProps: { id: x, ref: a, role: "menuitem", tabIndex: m === !0 ? void 0 : -1, "aria-disabled": m === !0 ? !0 : void 0, disabled: void 0, onClick: d, onFocus: i, onPointerenter: c, onMouseenter: c, onPointermove: v, onMousemove: v, onPointerleave: b, onMouseleave: b }, theirProps: { ...l, ...S }, slot: p, attrs: l, slots: t, name: "MenuItem" });
  };
} });
function Il(e) {
  let t = { called: !1 };
  return (...l) => {
    if (!t.called)
      return t.called = !0, e(...l);
  };
}
function Ge(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Me(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Ze = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Ze || {});
function Rl(e, t) {
  let l = ke();
  if (!e)
    return l.dispose;
  let { transitionDuration: o, transitionDelay: n } = getComputedStyle(e), [a, r] = [o, n].map((u) => {
    let [s = 0] = u.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, i) => i - d);
    return s;
  });
  return a !== 0 ? l.setTimeout(() => t("finished"), a + r) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function xt(e, t, l, o, n, a) {
  let r = ke(), u = a !== void 0 ? Il(a) : () => {
  };
  return Me(e, ...n), Ge(e, ...t, ...l), r.nextFrame(() => {
    Me(e, ...l), Ge(e, ...o), r.add(Rl(e, (s) => (Me(e, ...o, ...t), Ge(e, ...n), u(s))));
  }), r.add(() => Me(e, ...t, ...l, ...o, ...n)), r.add(() => u("cancelled")), r.dispose;
}
function ve(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let st = Symbol("TransitionContext");
var Cl = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Cl || {});
function Fl() {
  return z(st, null) !== null;
}
function kl() {
  let e = z(st, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Ll() {
  let e = z(dt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let dt = Symbol("NestingContext");
function Ve(e) {
  return "children" in e ? Ve(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Zt(e) {
  let t = h([]), l = h(!1);
  N(() => l.value = !0), Y(() => l.value = !1);
  function o(a, r = se.Hidden) {
    let u = t.value.findIndex(({ id: s }) => s === a);
    u !== -1 && (j(r, { [se.Unmount]() {
      t.value.splice(u, 1);
    }, [se.Hidden]() {
      t.value[u].state = "hidden";
    } }), !Ve(t) && l.value && (e == null || e()));
  }
  function n(a) {
    let r = t.value.find(({ id: u }) => u === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => o(a, se.Unmount);
  }
  return { children: t, register: n, unregister: o };
}
let en = ae.RenderStrategy, Dl = T({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = h(0);
  function r() {
    a.value |= B.Opening, t("beforeEnter");
  }
  function u() {
    a.value &= ~B.Opening, t("afterEnter");
  }
  function s() {
    a.value |= B.Closing, t("beforeLeave");
  }
  function d() {
    a.value &= ~B.Closing, t("afterLeave");
  }
  if (!Fl() && Bn())
    return () => $(Ml, { ...e, onBeforeEnter: r, onAfterEnter: u, onBeforeLeave: s, onAfterLeave: d }, o);
  let i = h(null), f = g(() => e.unmount ? se.Unmount : se.Hidden);
  n({ el: i, $el: i });
  let { show: c, appear: v } = kl(), { register: b, unregister: m } = Ll(), p = h(c.value ? "visible" : "hidden"), x = { value: !0 }, S = q(), O = { value: !1 }, U = Zt(() => {
    !O.value && p.value !== "hidden" && (p.value = "hidden", m(S), d());
  });
  N(() => {
    let Q = b(S);
    Y(Q);
  }), H(() => {
    if (f.value === se.Hidden && S) {
      if (c.value && p.value !== "visible") {
        p.value = "visible";
        return;
      }
      j(p.value, { hidden: () => m(S), visible: () => b(S) });
    }
  });
  let G = ve(e.enter), w = ve(e.enterFrom), P = ve(e.enterTo), I = ve(e.entered), E = ve(e.leave), C = ve(e.leaveFrom), A = ve(e.leaveTo);
  N(() => {
    H(() => {
      if (p.value === "visible") {
        let Q = y(i);
        if (Q instanceof Comment && Q.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function J(Q) {
    let xe = x.value && !v.value, re = y(i);
    !re || !(re instanceof HTMLElement) || xe || (O.value = !0, c.value && r(), c.value || s(), Q(c.value ? xt(re, G, w, P, I, (he) => {
      O.value = !1, he === Ze.Finished && u();
    }) : xt(re, E, C, A, I, (he) => {
      O.value = !1, he === Ze.Finished && (Ve(U) || (p.value = "hidden", m(S), d()));
    })));
  }
  return N(() => {
    fe([c], (Q, xe, re) => {
      J(re), x.value = !1;
    }, { immediate: !0 });
  }), X(dt, U), ot(g(() => j(p.value, { visible: B.Open, hidden: B.Closed }) | a.value)), () => {
    let { appear: Q, show: xe, enter: re, enterFrom: he, enterTo: k, entered: V, leave: Z, leaveFrom: ee, leaveTo: De, ...ue } = e, dn = { ref: i }, cn = { ...ue, ...v.value && c.value && Fe.isServer ? { class: nt([l.class, ue.class, ...G, ...w]) } : {} };
    return M({ theirProps: cn, ourProps: dn, slot: {}, slots: o, attrs: l, features: en, visible: p.value === "visible", name: "TransitionChild" });
  };
} }), Al = Dl, Ml = T({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o }) {
  let n = Ce(), a = g(() => e.show === null && n !== null ? (n.value & B.Open) === B.Open : e.show);
  H(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = h(a.value ? "visible" : "hidden"), u = Zt(() => {
    r.value = "hidden";
  }), s = h(!0), d = { show: a, appear: g(() => e.appear || !s.value) };
  return N(() => {
    H(() => {
      s.value = !1, a.value ? r.value = "visible" : Ve(u) || (r.value = "hidden");
    });
  }), X(dt, u), X(st, d), () => {
    let i = Ne(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return M({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [$(Al, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...f, ...i }, o.default)] }, attrs: {}, features: en, visible: r.value === "visible", name: "Transition" });
  };
} });
var Ot;
const _l = typeof window < "u";
_l && ((Ot = window == null ? void 0 : window.navigator) == null ? void 0 : Ot.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Bl(e) {
  return e;
}
const et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tt = "__vueuse_ssr_handlers__";
et[tt] = et[tt] || {};
et[tt];
var St;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(St || (St = {}));
var jl = Object.defineProperty, Et = Object.getOwnPropertySymbols, Nl = Object.prototype.hasOwnProperty, $l = Object.prototype.propertyIsEnumerable, Pt = (e, t, l) => t in e ? jl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, Vl = (e, t) => {
  for (var l in t || (t = {}))
    Nl.call(t, l) && Pt(e, l, t[l]);
  if (Et)
    for (var l of Et(t))
      $l.call(t, l) && Pt(e, l, t[l]);
  return e;
};
const Hl = {
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
Vl({
  linear: Bl
}, Hl);
function Ul(e, t) {
  return g({
    get: () => e.modelValue,
    set: (l) => t("update:modelValue", l)
  });
}
const Gl = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, Wl = { name: "Error" }, tn = /* @__PURE__ */ T({
  ...Wl,
  props: {
    error: {}
  },
  setup(e) {
    return (t, l) => t.error ? (D(), K("div", Gl, [
      ie(t.$slots, "default", {}, () => [
        lt(Re(t.error), 1)
      ])
    ])) : Te("", !0);
  }
}), Kl = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, ql = {
  name: "Base",
  inheritAttrs: !1
}, Ql = /* @__PURE__ */ T({
  ...ql,
  props: {
    description: {},
    error: {},
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, l) => (D(), K("div", null, [
      te("div", {
        class: nt(["mt-1 rounded-md", { "shadow-sm": t.shadow }])
      }, [
        ie(t.$slots, "default")
      ], 2),
      t.description ? (D(), K("p", Kl, Re(t.description), 1)) : Te("", !0),
      t.error ? (D(), oe(tn, {
        key: 1,
        error: t.error
      }, null, 8, ["error"])) : Te("", !0)
    ]));
  }
}), zl = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, n] of t)
    l[o] = n;
  return l;
}, Yl = { name: "Actions" }, Jl = { class: "mt-8 border-t border-gray-200 pt-5" }, Xl = { class: "flex justify-end" }, Zl = { class: "inline-flex rounded-md shadow-sm" };
function eo(e, t, l, o, n, a) {
  return D(), K("div", Jl, [
    te("div", Xl, [
      te("span", Zl, [
        ie(e.$slots, "default")
      ])
    ])
  ]);
}
const to = /* @__PURE__ */ zl(Yl, [["render", eo]]), no = { class: "relative flex items-start" }, lo = { class: "flex h-5 items-center" }, oo = ["id", "value", "disabled", "readonly"], ao = { class: "ml-3" }, ro = ["for"], uo = { name: "Checkbox" }, io = /* @__PURE__ */ T({
  ...uo,
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
    const l = Ul(e, t);
    return (o, n) => (D(), oe(Ql, de(o.$props, { shadow: !1 }), {
      default: ye(() => [
        te("div", no, [
          te("div", lo, [
            qe(te("input", de({
              id: o.id,
              "onUpdate:modelValue": n[0] || (n[0] = (a) => mn(l) ? l.value = a : null),
              value: o.value,
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
              disabled: o.disabled,
              readonly: o.readonly
            }, o.$attrs), null, 16, oo), [
              [bn, le(l)]
            ]),
            te("div", ao, [
              te("label", {
                for: o.id,
                class: "block text-sm font-medium leading-5 text-gray-700"
              }, Re(o.label), 9, ro)
            ])
          ])
        ])
      ]),
      _: 1
    }, 16));
  }
}), so = ["for"], co = { name: "Label" }, fo = /* @__PURE__ */ T({
  ...co,
  props: {
    for: {}
  },
  setup(e) {
    const t = e;
    return (l, o) => (D(), K("label", {
      for: t.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      ie(l.$slots, "default")
    ], 8, so));
  }
});
var nn = {}, ln = {};
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
})(ln);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ l(ln);
  function l(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  const o = t.default;
})(nn);
let We = nn;
var po = (We.__esModule ? We : { default: We }).default, on = {}, an = {}, ct = { exports: {} }, L = String, rn = function() {
  return { isColorSupported: !1, reset: L, bold: L, dim: L, italic: L, underline: L, inverse: L, hidden: L, strikethrough: L, black: L, red: L, green: L, yellow: L, blue: L, magenta: L, cyan: L, white: L, gray: L, bgBlack: L, bgRed: L, bgGreen: L, bgYellow: L, bgBlue: L, bgMagenta: L, bgCyan: L, bgWhite: L };
};
ct.exports = rn();
ct.exports.createColors = rn;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(s, d) {
    for (var i in d)
      Object.defineProperty(s, i, {
        enumerable: !0,
        get: d[i]
      });
  }
  t(e, {
    dim: function() {
      return r;
    },
    default: function() {
      return u;
    }
  });
  const l = /* @__PURE__ */ o(ct.exports);
  function o(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  let n = /* @__PURE__ */ new Set();
  function a(s, d, i) {
    typeof process < "u" && process.env.JEST_WORKER_ID || i && n.has(i) || (i && n.add(i), console.warn(""), d.forEach((f) => console.warn(s, "-", f)));
  }
  function r(s) {
    return l.default.dim(s);
  }
  const u = {
    info(s, d) {
      a(l.default.bold(l.default.cyan("info")), ...Array.isArray(s) ? [
        s
      ] : [
        d,
        s
      ]);
    },
    warn(s, d) {
      a(l.default.bold(l.default.yellow("warn")), ...Array.isArray(s) ? [
        s
      ] : [
        d,
        s
      ]);
    },
    risk(s, d) {
      a(l.default.bold(l.default.magenta("risk")), ...Array.isArray(s) ? [
        s
      ] : [
        d,
        s
      ]);
    }
  };
})(an);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ l(an);
  function l(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function o({ version: a, from: r, to: u }) {
    t.default.warn(`${r}-color-renamed`, [
      `As of Tailwind CSS ${a}, \`${r}\` has been renamed to \`${u}\`.`,
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
})(on);
let Ke = on;
var vo = (Ke.__esModule ? Ke : { default: Ke }).default;
po.withOptions(
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
              ...vo.indigo,
              ...(t = e == null ? void 0 : e.colors) == null ? void 0 : t.primary
            }
          }
        }
      }
    };
  }
);
const un = /* @__PURE__ */ T({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    var d;
    const t = e, l = g(() => {
      var f;
      const i = (f = t.element.definition) == null ? void 0 : f.fieldset;
      return i ? Object.entries(i).reduce((c, [v, b]) => (b != null && b.model ? c[b.model] = t.form[b.model] : c[v] = t.form[v], c), {}) : {
        modelValue: t.form[t.element.name]
      };
    }), o = g(() => {
      var c;
      let i = Object.entries({
        ...t.element.definition,
        ...t.element.definition.props,
        ...l.value,
        schema: t.element.definition.schema,
        form: t.form,
        id: t.element.name,
        error: (c = a.value[0]) != null ? c : null
      }), f = t.element.definition.component.props;
      return Object.fromEntries(i.filter(([v]) => f.hasOwnProperty(v)));
    }), n = g(() => {
      var f;
      const i = (f = t.element.definition) == null ? void 0 : f.fieldset;
      return i ? Object.entries(i).reduce((c, [v, b]) => (b != null && b.model ? c[`update:${b.model}`] = (m) => t.form[b.model] = m : c[`update:${v}`] = (m) => t.form[v] = m, c), {}) : { "update:modelValue": (c) => t.form[t.element.name] = c };
    }), a = g(() => {
      var f;
      const i = (f = t.element.definition) == null ? void 0 : f.fieldset;
      return i ? Object.keys(i).map((c) => t.form.errors[c]).filter((c) => c) : [t.form.errors[t.element.name]];
    }), r = g(() => {
      var f;
      return ((f = t.element.definition.label) != null ? f : t.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }), u = !!t.element.definition.schema, s = (d = t.element.definition.showLabel) != null ? d : !u;
    return (i, f) => (D(), K("div", null, [
      le(s) ? (D(), oe(le(fo), {
        key: 0,
        for: i.element.name
      }, {
        default: ye(() => [
          lt(Re(r.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : Te("", !0),
      (D(), oe(hn(i.element.definition.component), de({
        key: i.element.name
      }, o.value, yn(n.value)), null, 16)),
      o.value.hasOwnProperty("error") ? Te("", !0) : (D(!0), K(ge, { key: 1 }, je(a.value, (c, v) => (D(), oe(le(tn), {
        key: v,
        error: c
      }, null, 8, ["error"]))), 128))
    ]));
  }
}), mo = { class: "mx-auto mt-6 max-w-md space-y-6" }, xo = /* @__PURE__ */ T({
  __name: "FormBuilder",
  props: {
    schema: {},
    submit: { default: "Save" }
  },
  setup(e) {
    return (t, l) => (D(), K("div", mo, [
      (D(!0), K(ge, null, je(t.schema.elements, (o, n) => (D(), oe(un, {
        key: n,
        element: o,
        form: t.schema.form
      }, null, 8, ["element", "form"]))), 128)),
      _e(le(to), null, {
        default: ye(() => [
          ie(t.$slots, "actions", {
            form: t.schema.form
          }, () => [
            _e(le(kn), {
              as: "button",
              type: "submit",
              loading: t.schema.form.processing
            }, {
              default: ye(() => [
                lt(Re(t.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 3
      })
    ]));
  }
}), bo = /* @__PURE__ */ T({
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
    return (n, a) => (D(!0), K(ge, null, je(n.items, (r, u) => {
      var s, d, i;
      return D(), oe(le(io), {
        id: (s = r.label) != null ? s : r,
        key: u,
        modelValue: o.value,
        "onUpdate:modelValue": a[0] || (a[0] = (f) => o.value = f),
        value: (d = r.value) != null ? d : r,
        label: (i = r.label) != null ? i : r
      }, null, 8, ["id", "modelValue", "value", "label"]);
    }), 128));
  }
}), go = (e) => Object.keys(e).reduce((t, l) => {
  var o;
  return t[l] = (o = e[l].value) != null ? o : null, t;
}, {}), sn = (e) => Object.entries(e).map(([t, l]) => {
  const o = l.hasOwnProperty("setup") ? { component: l } : l;
  return {
    name: t,
    definition: o
  };
});
function Oo(e) {
  const t = xn(
    Object.keys(e).reduce((l, o) => {
      var a, r, u;
      if (e[o].schema)
        return { ...l, ...go(e[o].schema) };
      if (e[o].component === bo)
        return l[o] = (a = e[o].checked) != null ? a : [], l;
      const n = (r = e[o]) == null ? void 0 : r.fieldset;
      return n ? (Object.entries(n).forEach(([s, d]) => {
        var i;
        d != null && d.model ? l[d.model] = (i = d.value) != null ? i : null : l[s] = d;
      }), l) : (l[o] = (u = e[o].value) != null ? u : null, l);
    }, {})
  );
  return {
    elements: sn(e),
    form: t
  };
}
const ho = { class: "grid grid-flow-col gap-x-4 gap-y-6" }, So = /* @__PURE__ */ T({
  __name: "Grid",
  props: {
    schema: {},
    form: {}
  },
  setup(e) {
    const l = sn(e.schema);
    return (o, n) => (D(), K("div", ho, [
      (D(!0), K(ge, null, je(le(l), (a, r) => (D(), oe(un, de({
        key: r,
        element: a,
        form: o.form
      }, o.$attrs), null, 16, ["element", "form"]))), 128))
    ]));
  }
});
export {
  bo as CheckboxGroup,
  xo as FormBuilder,
  So as Grid,
  Oo as useSchema
};
