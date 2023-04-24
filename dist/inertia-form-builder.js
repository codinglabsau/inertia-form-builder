import { defineComponent as I, ref as y, computed as g, toRaw as j, provide as Z, onMounted as V, watch as ue, h as U, Fragment as ve, watchEffect as W, onUnmounted as J, nextTick as G, inject as X, Teleport as rn, reactive as un, unref as K, normalizeClass as Xe, useAttrs as sn, openBlock as B, createElementBlock as Q, createCommentVNode as be, createBlock as ie, mergeProps as ge, withCtx as Oe, renderSlot as pe, withDirectives as We, createVNode as Ee, vShow as dt, cloneVNode as dn, createTextVNode as Ze, toDisplayString as Ie, createElementVNode as te, isRef as xt, vModelCheckbox as cn, shallowRef as fn, resolveDynamicComponent as pn, renderList as et } from "vue";
import { Link as vn, useForm as mn } from "@inertiajs/vue3";
const bn = /* @__PURE__ */ te("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), gn = /* @__PURE__ */ te("path", {
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
    return (t, l) => (B(), Q("svg", {
      class: Xe(["h-5 w-5 animate-spin", e.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, hn, 2));
  }
}), wn = ["disabled", "type"], xn = { name: "PrimaryButton" }, Sn = /* @__PURE__ */ I({
  ...xn,
  props: {
    loading: { type: Boolean },
    type: null
  },
  setup(e) {
    const t = sn(), l = g(() => !t.href), o = [
      "focus:ring-primary",
      "relative",
      "inline-flex",
      "items-center",
      "rounded-md",
      "border",
      "border-transparent",
      "bg-primary-600",
      "px-4",
      "py-2",
      "text-sm",
      "font-medium",
      "leading-5",
      "text-white",
      "hover:bg-primary-500",
      "focus:border-primary-700",
      "focus:outline-none",
      "active:bg-primary-700"
    ];
    return (n, a) => (B(), Q(ve, null, [
      K(l) ? be("", !0) : (B(), ie(K(vn), ge({
        key: 0,
        class: o,
        disabled: e.loading
      }, K(t)), {
        default: Oe(() => [
          pe(n.$slots, "default"),
          We(Ee(ct, { class: "ml-3" }, null, 512), [
            [dt, e.loading]
          ])
        ]),
        _: 3
      }, 16, ["disabled"])),
      K(l) ? (B(), Q("button", ge({
        key: 1,
        class: o,
        disabled: e.loading,
        type: e.type
      }, K(t)), [
        pe(n.$slots, "default"),
        We(Ee(ct, { class: "ml-3" }, null, 512), [
          [dt, e.loading]
        ])
      ], 16, wn)) : be("", !0)
    ], 64));
  }
});
function $(e, t, ...l) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...l) : n;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, $), o;
}
var le = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(le || {}), oe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(oe || {});
function F({ visible: e = !0, features: t = 0, ourProps: l, theirProps: o, ...n }) {
  var a;
  let r = Ot(o, l), i = Object.assign(n, { props: r });
  if (e || t & 2 && r.static)
    return Ne(i);
  if (t & 1) {
    let u = (a = r.unmount) == null || a ? 0 : 1;
    return $(u, { [0]() {
      return null;
    }, [1]() {
      return Ne({ ...n, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ne(i);
}
function Ne({ props: e, attrs: t, slots: l, slot: o, name: n }) {
  var a, r;
  let { as: i, ...u } = Fe(e, ["unmount", "static"]), d = (a = l.default) == null ? void 0 : a.call(l, o), s = {};
  if (o) {
    let m = !1, v = [];
    for (let [p, f] of Object.entries(o))
      typeof f == "boolean" && (m = !0), f === !0 && v.push(p);
    m && (s["data-headlessui-state"] = v.join(" "));
  }
  if (i === "template") {
    if (d = St(d != null ? d : []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [m, ...v] = d != null ? d : [];
      if (!En(m) || v.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).map((c) => c.trim()).filter((c, b, w) => w.indexOf(c) === b).sort((c, b) => c.localeCompare(b)).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
      let p = Ot((r = m.props) != null ? r : {}, u), f = dn(m, p);
      for (let c in p)
        c.startsWith("on") && (f.props || (f.props = {}), f.props[c] = p[c]);
      return f;
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return U(i, Object.assign({}, u, s), { default: () => d });
}
function St(e) {
  return e.flatMap((t) => t.type === ve ? St(t.children) : [t]);
}
function Ot(...e) {
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
      for (let i of r) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        i(n, ...a);
      }
    } });
  return t;
}
function On(e) {
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
function En(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Pn = 0;
function In() {
  return ++Pn;
}
function q() {
  return In();
}
var R = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(R || {});
function Rn(e) {
  throw new Error("Unexpected object: " + e);
}
var C = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(C || {});
function Et(e, t) {
  let l = t.resolveItems();
  if (l.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), n = o != null ? o : -1, a = (() => {
    switch (e.focus) {
      case 0:
        return l.findIndex((r) => !t.resolveDisabled(r));
      case 1: {
        let r = l.slice().reverse().findIndex((i, u, d) => n !== -1 && d.length - u - 1 >= n ? !1 : !t.resolveDisabled(i));
        return r === -1 ? r : l.length - 1 - r;
      }
      case 2:
        return l.findIndex((r, i) => i <= n ? !1 : !t.resolveDisabled(r));
      case 3: {
        let r = l.slice().reverse().findIndex((i) => !t.resolveDisabled(i));
        return r === -1 ? r : l.length - 1 - r;
      }
      case 4:
        return l.findIndex((r) => t.resolveId(r) === e.id);
      case 5:
        return null;
      default:
        Rn(e);
    }
  })();
  return a === -1 ? o : a;
}
function h(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Pt = Symbol("Context");
var N = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(N || {});
function Tn() {
  return Re() !== null;
}
function Re() {
  return X(Pt, null);
}
function tt(e) {
  Z(Pt, e);
}
function ft(e, t) {
  if (e)
    return e;
  let l = t != null ? t : "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function It(e, t) {
  let l = y(ft(e.value.type, e.value.as));
  return V(() => {
    l.value = ft(e.value.type, e.value.as);
  }), W(() => {
    var o;
    l.value || h(t) && h(t) instanceof HTMLButtonElement && !((o = h(t)) != null && o.hasAttribute("type")) && (l.value = "button");
  }), l;
}
var Cn = Object.defineProperty, kn = (e, t, l) => t in e ? Cn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, pt = (e, t, l) => (kn(e, typeof t != "symbol" ? t + "" : t, l), l);
class An {
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
let Te = new An();
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
function Rt({ container: e, accept: t, walk: l, enabled: o }) {
  W(() => {
    let n = e.value;
    if (!n || o !== void 0 && !o.value)
      return;
    let a = me(e);
    if (!a)
      return;
    let r = Object.assign((u) => t(u), { acceptNode: t }), i = a.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; i.nextNode(); )
      l(i.currentNode);
  });
}
let Ge = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ne = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ne || {}), Tt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Tt || {}), Dn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Dn || {});
function Ct(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ge)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var nt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(nt || {});
function lt(e, t = 0) {
  var l;
  return e === ((l = me(e)) == null ? void 0 : l.body) ? !1 : $(t, { [0]() {
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
function kt(e) {
  let t = me(e);
  G(() => {
    t && !lt(t.activeElement, 0) && re(e);
  });
}
var Ln = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Ln || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function re(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Fn = ["textarea", "input"].join(",");
function Mn(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Fn)) != null ? l : !1;
}
function at(e, t = (l) => l) {
  return e.slice().sort((l, o) => {
    let n = t(l), a = t(o);
    if (n === null || a === null)
      return 0;
    let r = n.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function jn(e, t) {
  return Se(Ct(), t, { relativeTo: e });
}
function Se(e, t, { sorted: l = !0, relativeTo: o = null, skipElements: n = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, i = Array.isArray(e) ? l ? at(e) : e : Ct(e);
  n.length > 0 && i.length > 1 && (i = i.filter((f) => !n.includes(f))), o = o != null ? o : r.activeElement;
  let u = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, i.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, i.indexOf(o)) + 1;
    if (t & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), s = t & 32 ? { preventScroll: !0 } : {}, m = 0, v = i.length, p;
  do {
    if (m >= v || m + v <= 0)
      return 0;
    let f = d + m;
    if (t & 16)
      f = (f + v) % v;
    else {
      if (f < 0)
        return 3;
      if (f >= v)
        return 1;
    }
    p = i[f], p == null || p.focus(s), m += u;
  } while (p !== r.activeElement);
  return t & 6 && Mn(p) && p.select(), 2;
}
function $e(e, t, l) {
  Te.isServer || W((o) => {
    document.addEventListener(e, t, l), o(() => document.removeEventListener(e, t, l));
  });
}
function ot(e, t, l = g(() => !0)) {
  function o(a, r) {
    if (!l.value || a.defaultPrevented)
      return;
    let i = r(a);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let u = function d(s) {
      return typeof s == "function" ? d(s()) : Array.isArray(s) || s instanceof Set ? s : [s];
    }(e);
    for (let d of u) {
      if (d === null)
        continue;
      let s = d instanceof HTMLElement ? d : h(d);
      if (s != null && s.contains(i) || a.composed && a.composedPath().includes(s))
        return;
    }
    return !lt(i, nt.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  let n = y(null);
  $e("mousedown", (a) => {
    var r, i;
    l.value && (n.value = ((i = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : i[0]) || a.target);
  }, !0), $e("click", (a) => {
    n.value && (o(a, () => n.value), n.value = null);
  }, !0), $e("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Pe = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Pe || {});
let Le = I({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: o, ...n } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return F({ ourProps: a, theirProps: n, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function At(e = {}, t = null, l = []) {
  for (let [o, n] of Object.entries(e))
    Lt(l, Dt(t, o), n);
  return l;
}
function Dt(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Lt(e, t, l) {
  if (Array.isArray(l))
    for (let [o, n] of l.entries())
      Lt(e, Dt(t, o.toString()), n);
  else
    l instanceof Date ? e.push([t, l.toISOString()]) : typeof l == "boolean" ? e.push([t, l ? "1" : "0"]) : typeof l == "string" ? e.push([t, l]) : typeof l == "number" ? e.push([t, `${l}`]) : l == null ? e.push([t, ""]) : At(l, t, e);
}
function Bn(e, t, l) {
  let o = y(l == null ? void 0 : l.value), n = g(() => e.value !== void 0);
  return [g(() => n.value ? e.value : o.value), function(a) {
    return n.value || (o.value = a), t == null ? void 0 : t(a);
  }];
}
function vt(e) {
  return [e.screenX, e.screenY];
}
function Ft() {
  let e = y([-1, -1]);
  return { wasMoved(t) {
    let l = vt(t);
    return e.value[0] === l[0] && e.value[1] === l[1] ? !1 : (e.value = l, !0);
  }, update(t) {
    e.value = vt(t);
  } };
}
function Mt() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Nn() {
  return /Android/gi.test(window.navigator.userAgent);
}
function $n() {
  return Mt() || Nn();
}
function Vn(e, t) {
  return e === t;
}
var _n = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(_n || {}), Hn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Hn || {}), Un = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Un || {});
let jt = Symbol("ComboboxContext");
function he(e) {
  let t = X(jt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, he), l;
  }
  return t;
}
I({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Vn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: o }) {
  let n = y(1), a = y(null), r = y(null), i = y(null), u = y(null), d = y({ static: !1, hold: !1 }), s = y([]), m = y(null), v = y(1), p = y(!1);
  function f(S = (P) => P) {
    let P = m.value !== null ? s.value[m.value] : null, E = at(S(s.value.slice()), (D) => h(D.dataRef.domRef)), x = P ? E.indexOf(P) : null;
    return x === -1 && (x = null), { options: E, activeOptionIndex: x };
  }
  let c = g(() => e.multiple ? 1 : 0), b = g(() => e.nullable), [w, A] = Bn(g(() => e.modelValue === void 0 ? $(c.value, { [1]: [], [0]: void 0 }) : e.modelValue), (S) => o("update:modelValue", S), g(() => e.defaultValue)), O = { comboboxState: n, value: w, mode: c, compare(S, P) {
    if (typeof e.by == "string") {
      let E = e.by;
      return (S == null ? void 0 : S[E]) === (P == null ? void 0 : P[E]);
    }
    return e.by(S, P);
  }, defaultValue: g(() => e.defaultValue), nullable: b, inputRef: r, labelRef: a, buttonRef: i, optionsRef: u, disabled: g(() => e.disabled), options: s, change(S) {
    A(S);
  }, activeOptionIndex: g(() => {
    if (p.value && m.value === null && s.value.length > 0) {
      let S = s.value.findIndex((P) => !P.dataRef.disabled);
      if (S !== -1)
        return S;
    }
    return m.value;
  }), activationTrigger: v, optionsPropsRef: d, closeCombobox() {
    p.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, m.value = null);
  }, openCombobox() {
    if (p.value = !0, e.disabled || n.value === 0)
      return;
    let S = s.value.findIndex((P) => {
      let E = j(P.dataRef.value);
      return $(c.value, { [0]: () => O.compare(j(O.value.value), j(E)), [1]: () => j(O.value.value).some((x) => O.compare(j(x), j(E))) });
    });
    S !== -1 && (m.value = S), n.value = 0;
  }, goToOption(S, P, E) {
    if (p.value = !1, e.disabled || u.value && !d.value.static && n.value === 1)
      return;
    let x = f();
    if (x.activeOptionIndex === null) {
      let M = x.options.findIndex((ae) => !ae.dataRef.disabled);
      M !== -1 && (x.activeOptionIndex = M);
    }
    let D = Et(S === C.Specific ? { focus: C.Specific, id: P } : { focus: S }, { resolveItems: () => x.options, resolveActiveIndex: () => x.activeOptionIndex, resolveId: (M) => M.id, resolveDisabled: (M) => M.dataRef.disabled });
    m.value = D, v.value = E != null ? E : 1, s.value = x.options;
  }, selectOption(S) {
    let P = s.value.find((x) => x.id === S);
    if (!P)
      return;
    let { dataRef: E } = P;
    A($(c.value, { [0]: () => E.value, [1]: () => {
      let x = j(O.value.value).slice(), D = j(E.value), M = x.findIndex((ae) => O.compare(D, j(ae)));
      return M === -1 ? x.push(D) : x.splice(M, 1), x;
    } }));
  }, selectActiveOption() {
    if (O.activeOptionIndex.value === null)
      return;
    let { dataRef: S, id: P } = s.value[O.activeOptionIndex.value];
    A($(c.value, { [0]: () => S.value, [1]: () => {
      let E = j(O.value.value).slice(), x = j(S.value), D = E.findIndex((M) => O.compare(x, j(M)));
      return D === -1 ? E.push(x) : E.splice(D, 1), E;
    } })), O.goToOption(C.Specific, P);
  }, registerOption(S, P) {
    let E = { id: S, dataRef: P }, x = f((D) => [...D, E]);
    if (m.value === null) {
      let D = P.value.value;
      $(c.value, { [0]: () => O.compare(j(O.value.value), j(D)), [1]: () => j(O.value.value).some((M) => O.compare(j(M), j(D))) }) && (x.activeOptionIndex = x.options.indexOf(E));
    }
    s.value = x.options, m.value = x.activeOptionIndex, v.value = 1;
  }, unregisterOption(S) {
    var P;
    O.activeOptionIndex.value !== null && ((P = O.options.value[O.activeOptionIndex.value]) == null ? void 0 : P.id) === S && (p.value = !0);
    let E = f((x) => {
      let D = x.findIndex((M) => M.id === S);
      return D !== -1 && x.splice(D, 1), x;
    });
    s.value = E.options, m.value = E.activeOptionIndex, v.value = 1;
  } };
  ot([r, i, u], () => O.closeCombobox(), g(() => n.value === 0)), Z(jt, O), tt(g(() => $(n.value, { [0]: N.Open, [1]: N.Closed })));
  let Y = g(() => O.activeOptionIndex.value === null ? null : s.value[O.activeOptionIndex.value].dataRef.value), z = g(() => {
    var S;
    return (S = h(r)) == null ? void 0 : S.closest("form");
  });
  return V(() => {
    ue([z], () => {
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
    let { name: S, disabled: P, form: E, ...x } = e, D = { open: n.value === 0, disabled: P, activeIndex: O.activeOptionIndex.value, activeOption: Y.value, value: w.value };
    return U(ve, [...S != null && w.value != null ? At({ [S]: w.value }).map(([M, ae]) => U(Le, On({ features: Pe.Hidden, key: M, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: E, name: M, value: ae }))) : [], F({ theirProps: { ...l, ...Fe(x, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: D, slots: t, attrs: l, name: "Combobox" })]);
  };
} });
I({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${q()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = he("ComboboxLabel");
  function n() {
    var a;
    (a = h(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: r, ...i } = e, u = { id: r, ref: o.labelRef, onClick: n };
    return F({ ourProps: u, theirProps: i, slot: a, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} });
I({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${q()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = he("ComboboxButton");
  o({ el: n.buttonRef, $el: n.buttonRef });
  function a(u) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (u.preventDefault(), n.openCombobox()), G(() => {
      var d;
      return (d = h(n.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function r(u) {
    switch (u.key) {
      case R.ArrowDown:
        u.preventDefault(), u.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), G(() => {
          var d;
          return (d = n.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case R.ArrowUp:
        u.preventDefault(), u.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), G(() => {
          n.value.value || n.goToOption(C.Last);
        })), G(() => {
          var d;
          return (d = n.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case R.Escape:
        if (n.comboboxState.value !== 0)
          return;
        u.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && u.stopPropagation(), n.closeCombobox(), G(() => {
          var d;
          return (d = n.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let i = It(g(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var u, d;
    let s = { open: n.comboboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: m, ...v } = e, p = { ref: n.buttonRef, id: m, type: i.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (u = h(n.optionsRef)) == null ? void 0 : u.id, "aria-expanded": n.disabled.value ? void 0 : n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(d = h(n.labelRef)) == null ? void 0 : d.id, m].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return F({ ourProps: p, theirProps: v, slot: s, attrs: t, slots: l, name: "ComboboxButton" });
  };
} });
I({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${q()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = he("ComboboxInput"), r = { value: !1 };
  n({ el: a.inputRef, $el: a.inputRef });
  let i = g(() => {
    var c;
    let b = a.value.value;
    return h(a.inputRef) ? typeof e.displayValue < "u" && b !== void 0 ? (c = e.displayValue(b)) != null ? c : "" : typeof b == "string" ? b : "" : "";
  });
  V(() => {
    ue([i, a.comboboxState], ([c, b], [w, A]) => {
      if (r.value)
        return;
      let O = h(a.inputRef);
      O && (A === 0 && b === 1 || c !== w) && (O.value = c);
    }, { immediate: !0 }), ue([a.comboboxState], ([c], [b]) => {
      if (c === 0 && b === 1) {
        let w = h(a.inputRef);
        if (!w)
          return;
        let A = w.value, { selectionStart: O, selectionEnd: Y, selectionDirection: z } = w;
        w.value = "", w.value = A, z !== null ? w.setSelectionRange(O, Y, z) : w.setSelectionRange(O, Y);
      }
    });
  });
  let u = y(!1);
  function d() {
    u.value = !0;
  }
  function s() {
    setTimeout(() => {
      u.value = !1;
    });
  }
  function m(c) {
    switch (r.value = !0, c.key) {
      case R.Backspace:
      case R.Delete:
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
      case R.Enter:
        if (r.value = !1, a.comboboxState.value !== 0 || u.value)
          return;
        if (c.preventDefault(), c.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case R.ArrowDown:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), $(a.comboboxState.value, { [0]: () => a.goToOption(C.Next), [1]: () => a.openCombobox() });
      case R.ArrowUp:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), $(a.comboboxState.value, { [0]: () => a.goToOption(C.Previous), [1]: () => {
          a.openCombobox(), G(() => {
            a.value.value || a.goToOption(C.Last);
          });
        } });
      case R.Home:
        if (c.shiftKey)
          break;
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(C.First);
      case R.PageUp:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(C.First);
      case R.End:
        if (c.shiftKey)
          break;
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(C.Last);
      case R.PageDown:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(C.Last);
      case R.Escape:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        c.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && c.stopPropagation(), a.closeCombobox();
        break;
      case R.Tab:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        a.mode.value === 0 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function v(c) {
    a.openCombobox(), t("change", c);
  }
  function p() {
    r.value = !1;
  }
  let f = g(() => {
    var c, b, w, A;
    return (A = (w = (b = e.defaultValue) != null ? b : a.defaultValue.value !== void 0 ? (c = e.displayValue) == null ? void 0 : c.call(e, a.defaultValue.value) : null) != null ? w : a.defaultValue.value) != null ? A : "";
  });
  return () => {
    var c, b, w, A, O, Y;
    let z = { open: a.comboboxState.value === 0 }, { id: S, displayValue: P, onChange: E, ...x } = e, D = { "aria-controls": (c = a.optionsRef.value) == null ? void 0 : c.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (b = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : b.id, "aria-labelledby": (O = (w = h(a.labelRef)) == null ? void 0 : w.id) != null ? O : (A = h(a.buttonRef)) == null ? void 0 : A.id, "aria-autocomplete": "list", id: S, onCompositionstart: d, onCompositionend: s, onKeydown: m, onInput: v, onBlur: p, role: "combobox", type: (Y = l.type) != null ? Y : "text", tabIndex: 0, ref: a.inputRef, defaultValue: f.value, disabled: a.disabled.value === !0 ? !0 : void 0 };
    return F({ ourProps: D, theirProps: x, slot: z, attrs: l, slots: o, features: le.RenderStrategy | le.Static, name: "ComboboxInput" });
  };
} });
I({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = he("ComboboxOptions"), a = `headlessui-combobox-options-${q()}`;
  o({ el: n.optionsRef, $el: n.optionsRef }), W(() => {
    n.optionsPropsRef.value.static = e.static;
  }), W(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let r = Re(), i = g(() => r !== null ? (r.value & N.Open) === N.Open : n.comboboxState.value === 0);
  return Rt({ container: g(() => h(n.optionsRef)), enabled: g(() => n.comboboxState.value === 0), accept(u) {
    return u.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } }), () => {
    var u, d, s;
    let m = { open: n.comboboxState.value === 0 }, v = { "aria-labelledby": (s = (u = h(n.labelRef)) == null ? void 0 : u.id) != null ? s : (d = h(n.buttonRef)) == null ? void 0 : d.id, id: a, ref: n.optionsRef, role: "listbox", "aria-multiselectable": n.mode.value === 1 ? !0 : void 0 }, p = Fe(e, ["hold"]);
    return F({ ourProps: v, theirProps: p, slot: m, attrs: t, slots: l, features: le.RenderStrategy | le.Static, visible: i.value, name: "ComboboxOptions" });
  };
} });
I({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: o }) {
  let n = he("ComboboxOption"), a = `headlessui-combobox-option-${q()}`, r = y(null);
  o({ el: r, $el: r });
  let i = g(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === a : !1), u = g(() => $(n.mode.value, { [0]: () => n.compare(j(n.value.value), j(e.value)), [1]: () => j(n.value.value).some((b) => n.compare(j(b), j(e.value))) })), d = g(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  V(() => n.registerOption(a, d)), J(() => n.unregisterOption(a)), W(() => {
    n.comboboxState.value === 0 && i.value && n.activationTrigger.value !== 0 && G(() => {
      var b, w;
      return (w = (b = h(r)) == null ? void 0 : b.scrollIntoView) == null ? void 0 : w.call(b, { block: "nearest" });
    });
  });
  function s(b) {
    if (e.disabled)
      return b.preventDefault();
    n.selectOption(a), n.mode.value === 0 && n.closeCombobox(), $n() || requestAnimationFrame(() => {
      var w;
      return (w = h(n.inputRef)) == null ? void 0 : w.focus();
    });
  }
  function m() {
    if (e.disabled)
      return n.goToOption(C.Nothing);
    n.goToOption(C.Specific, a);
  }
  let v = Ft();
  function p(b) {
    v.update(b);
  }
  function f(b) {
    v.wasMoved(b) && (e.disabled || i.value || n.goToOption(C.Specific, a, 0));
  }
  function c(b) {
    v.wasMoved(b) && (e.disabled || i.value && (n.optionsPropsRef.value.hold || n.goToOption(C.Nothing)));
  }
  return () => {
    let { disabled: b } = e, w = { active: i.value, selected: u.value, disabled: b }, A = { id: a, ref: r, role: "option", tabIndex: b === !0 ? void 0 : -1, "aria-disabled": b === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onClick: s, onFocus: m, onPointerenter: p, onMouseenter: p, onPointermove: f, onMousemove: f, onPointerleave: c, onMouseleave: c };
    return F({ ourProps: A, theirProps: e, slot: w, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
function Wn(e, t, l) {
  Te.isServer || W((o) => {
    window.addEventListener(e, t, l), o(() => window.removeEventListener(e, t, l));
  });
}
var xe = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(xe || {});
function Gn() {
  let e = y(0);
  return Wn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Bt(e, t, l, o) {
  Te.isServer || W((n) => {
    e = e != null ? e : window, e.addEventListener(t, l, o), n(() => e.removeEventListener(t, l, o));
  });
}
function Nt(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Kn(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function $t(e) {
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
var Vt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Vt || {});
let ye = Object.assign(I({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = y(null);
  o({ el: n, $el: n });
  let a = g(() => me(n)), r = y(!1);
  V(() => r.value = !0), J(() => r.value = !1), zn({ ownerDocument: a }, g(() => r.value && Boolean(e.features & 16)));
  let i = Qn({ ownerDocument: a, container: n, initialFocus: g(() => e.initialFocus) }, g(() => r.value && Boolean(e.features & 2)));
  Yn({ ownerDocument: a, container: n, containers: e.containers, previousActiveElement: i }, g(() => r.value && Boolean(e.features & 8)));
  let u = Gn();
  function d(p) {
    let f = h(n);
    !f || ((c) => c())(() => {
      $(u.value, { [xe.Forwards]: () => {
        Se(f, ne.First, { skipElements: [p.relatedTarget] });
      }, [xe.Backwards]: () => {
        Se(f, ne.Last, { skipElements: [p.relatedTarget] });
      } });
    });
  }
  let s = y(!1);
  function m(p) {
    p.key === "Tab" && (s.value = !0, requestAnimationFrame(() => {
      s.value = !1;
    }));
  }
  function v(p) {
    if (!r.value)
      return;
    let f = $t(e.containers);
    h(n) instanceof HTMLElement && f.add(h(n));
    let c = p.relatedTarget;
    c instanceof HTMLElement && c.dataset.headlessuiFocusGuard !== "true" && (_t(f, c) || (s.value ? Se(h(n), $(u.value, { [xe.Forwards]: () => ne.Next, [xe.Backwards]: () => ne.Previous }) | ne.WrapAround, { relativeTo: p.target }) : p.target instanceof HTMLElement && re(p.target)));
  }
  return () => {
    let p = {}, f = { ref: n, onKeydown: m, onFocusout: v }, { features: c, initialFocus: b, containers: w, ...A } = e;
    return U(ve, [Boolean(c & 4) && U(Le, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Pe.Focusable }), F({ ourProps: f, theirProps: { ...t, ...A }, slot: p, attrs: t, slots: l, name: "FocusTrap" }), Boolean(c & 4) && U(Le, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Pe.Focusable })]);
  };
} }), { features: Vt }), ce = [];
Kn(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && ce[0] !== t.target && (ce.unshift(t.target), ce = ce.filter((l) => l != null && l.isConnected), ce.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function qn(e) {
  let t = y(ce.slice());
  return ue([e], ([l], [o]) => {
    o === !0 && l === !1 ? Nt(() => {
      t.value.splice(0);
    }) : o === !1 && l === !0 && (t.value = ce.slice());
  }, { flush: "post" }), () => {
    var l;
    return (l = t.value.find((o) => o != null && o.isConnected)) != null ? l : null;
  };
}
function zn({ ownerDocument: e }, t) {
  let l = qn(t);
  V(() => {
    W(() => {
      var o, n;
      t.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((n = e.value) == null ? void 0 : n.body) && re(l());
    }, { flush: "post" });
  }), J(() => {
    re(l());
  });
}
function Qn({ ownerDocument: e, container: t, initialFocus: l }, o) {
  let n = y(null), a = y(!1);
  return V(() => a.value = !0), J(() => a.value = !1), V(() => {
    ue([t, l, o], (r, i) => {
      if (r.every((d, s) => (i == null ? void 0 : i[s]) === d) || !o.value)
        return;
      let u = h(t);
      u && Nt(() => {
        var d, s;
        if (!a.value)
          return;
        let m = h(l), v = (d = e.value) == null ? void 0 : d.activeElement;
        if (m) {
          if (m === v) {
            n.value = v;
            return;
          }
        } else if (u.contains(v)) {
          n.value = v;
          return;
        }
        m ? re(m) : Se(u, ne.First | ne.NoScroll) === Tt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (s = e.value) == null ? void 0 : s.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function Yn({ ownerDocument: e, container: t, containers: l, previousActiveElement: o }, n) {
  var a;
  Bt((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!n.value)
      return;
    let i = $t(l);
    h(t) instanceof HTMLElement && i.add(h(t));
    let u = o.value;
    if (!u)
      return;
    let d = r.target;
    d && d instanceof HTMLElement ? _t(i, d) ? (o.value = d, re(d)) : (r.preventDefault(), r.stopPropagation(), re(u)) : re(o.value);
  }, !0);
}
function _t(e, t) {
  for (let l of e)
    if (l.contains(t))
      return !0;
  return !1;
}
let Ve = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map();
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
      let i = (r = we.get(n)) != null ? r : 1;
      if (i === 1 ? we.delete(n) : we.set(n, i - 1), i !== 1)
        return;
      let u = Ve.get(n);
      u && (u["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", u["aria-hidden"]), n.inert = u.inert, Ve.delete(n));
    });
    let a = (o = we.get(n)) != null ? o : 0;
    we.set(n, a + 1), a === 0 && (Ve.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0);
  });
}
let Ht = Symbol("ForcePortalRootContext");
function Jn() {
  return X(Ht, !1);
}
let Ke = I({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return Z(Ht, e.force), () => {
    let { force: o, ...n } = e;
    return F({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function Xn(e) {
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
let Ut = I({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let o = y(null), n = g(() => me(o)), a = Jn(), r = X(Wt, null), i = y(a === !0 || r == null ? Xn(o.value) : r.resolveTarget());
  return W(() => {
    a || r != null && (i.value = r.resolveTarget());
  }), J(() => {
    var u, d;
    let s = (u = n.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    s && i.value === s && i.value.children.length <= 0 && ((d = i.value.parentElement) == null || d.removeChild(i.value));
  }), () => {
    if (i.value === null)
      return null;
    let u = { ref: o, "data-headlessui-portal": "" };
    return U(rn, { to: i.value }, F({ ourProps: u, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), Wt = Symbol("PortalGroupContext"), Zn = I({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let o = un({ resolveTarget() {
    return e.target;
  } });
  return Z(Wt, o), () => {
    let { target: n, ...a } = e;
    return F({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), Gt = Symbol("StackContext");
var qe = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(qe || {});
function el() {
  return X(Gt, () => {
  });
}
function tl({ type: e, enabled: t, element: l, onUpdate: o }) {
  let n = el();
  function a(...r) {
    o == null || o(...r), n(...r);
  }
  V(() => {
    ue(t, (r, i) => {
      r ? a(0, e, l) : i === !0 && a(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), J(() => {
    t.value && a(1, e, l);
  }), Z(Gt, a);
}
let Kt = Symbol("DescriptionContext");
function nl() {
  let e = X(Kt, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function ll({ slot: e = y({}), name: t = "Description", props: l = {} } = {}) {
  let o = y([]);
  function n(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return Z(Kt, { register: n, slot: e, name: t, props: l }), g(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
I({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${q()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = nl();
  return V(() => J(o.register(e.id))), () => {
    let { name: n = "Description", slot: a = y({}), props: r = {} } = o, { id: i, ...u } = e, d = { ...Object.entries(r).reduce((s, [m, v]) => Object.assign(s, { [m]: K(v) }), {}), id: i };
    return F({ ourProps: d, theirProps: u, slot: a.value, attrs: t, slots: l, name: n });
  };
} });
function al(e) {
  let t = fn(e.getSnapshot());
  return J(e.subscribe(() => {
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
function ol(e, t) {
  let l = e(), o = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return l;
  }, subscribe(n) {
    return o.add(n), () => o.delete(n);
  }, dispatch(n, ...a) {
    let r = t[n].call(l, ...a);
    r && (l = r, o.forEach((i) => i()));
  } };
}
function rl() {
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
function ul() {
  if (!Mt())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: l, meta: o }) {
    function n(r) {
      return o.containers.flatMap((i) => i()).some((i) => i.contains(r));
    }
    l.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    l.addEventListener(t, "click", (r) => {
      if (r.target instanceof HTMLElement)
        try {
          let i = r.target.closest("a");
          if (!i)
            return;
          let { hash: u } = new URL(i.href), d = t.querySelector(u);
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
function il() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function sl(e) {
  let t = {};
  for (let l of e)
    Object.assign(t, l(t));
  return t;
}
let fe = ol(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var l;
  let o = (l = this.get(e)) != null ? l : { doc: e, count: 0, d: Me(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(t), this.set(e, o), this;
}, POP(e, t) {
  let l = this.get(e);
  return l && (l.count--, l.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: l }) {
  let o = { doc: e, d: t, meta: sl(l) }, n = [ul(), rl(), il()];
  n.forEach(({ before: a }) => a == null ? void 0 : a(o)), n.forEach(({ after: a }) => a == null ? void 0 : a(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
fe.subscribe(() => {
  let e = fe.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [l] of e)
    t.set(l, l.documentElement.style.overflow);
  for (let l of e.values()) {
    let o = t.get(l.doc) === "hidden", n = l.count !== 0;
    (n && !o || !n && o) && fe.dispatch(l.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", l), l.count === 0 && fe.dispatch("TEARDOWN", l);
  }
});
function dl(e, t, l) {
  let o = al(fe), n = g(() => {
    let a = e.value ? o.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return ue([e, t], ([a, r], [i], u) => {
    if (!a || !r)
      return;
    fe.dispatch("PUSH", a, l);
    let d = !1;
    u(() => {
      d || (fe.dispatch("POP", i != null ? i : a, l), d = !0);
    });
  }, { immediate: !0 }), n;
}
var cl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(cl || {});
let ze = Symbol("DialogContext");
function Ce(e) {
  let t = X(ze, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Ce), l;
  }
  return t;
}
let Ae = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
I({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ae }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${q()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  var a;
  let r = y(!1);
  V(() => {
    r.value = !0;
  });
  let i = y(0), u = Re(), d = g(() => e.open === Ae && u !== null ? (u.value & N.Open) === N.Open : e.open), s = y(null), m = y(null), v = g(() => me(s));
  if (n({ el: s, $el: s }), !(e.open !== Ae || u !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === Ae ? void 0 : e.open}`);
  let p = g(() => r.value && d.value ? 0 : 1), f = g(() => p.value === 0), c = g(() => i.value > 1), b = X(ze, null) !== null, w = g(() => c.value ? "parent" : "leaf"), A = g(() => u !== null ? (u.value & N.Closing) === N.Closing : !1), O = g(() => b || A.value ? !1 : f.value), Y = g(() => {
    var T, k, _;
    return (_ = Array.from((k = (T = v.value) == null ? void 0 : T.querySelectorAll("body > *")) != null ? k : []).find((H) => H.id === "headlessui-portal-root" ? !1 : H.contains(h(m)) && H instanceof HTMLElement)) != null ? _ : null;
  });
  mt(Y, O);
  let z = g(() => c.value ? !0 : f.value), S = g(() => {
    var T, k, _;
    return (_ = Array.from((k = (T = v.value) == null ? void 0 : T.querySelectorAll("[data-headlessui-portal]")) != null ? k : []).find((H) => H.contains(h(m)) && H instanceof HTMLElement)) != null ? _ : null;
  });
  mt(S, z), tl({ type: "Dialog", enabled: g(() => p.value === 0), element: s, onUpdate: (T, k) => {
    if (k === "Dialog")
      return $(T, { [qe.Add]: () => i.value += 1, [qe.Remove]: () => i.value -= 1 });
  } });
  let P = ll({ name: "DialogDescription", slot: g(() => ({ open: d.value })) }), E = y(null), x = { titleId: E, panelRef: y(null), dialogState: p, setTitleId(T) {
    E.value !== T && (E.value = T);
  }, close() {
    t("close", !1);
  } };
  Z(ze, x);
  function D() {
    var T, k, _;
    return [...Array.from((k = (T = v.value) == null ? void 0 : T.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? k : []).filter((H) => !(H === document.body || H === document.head || !(H instanceof HTMLElement) || H.contains(h(m)) || x.panelRef.value && H.contains(x.panelRef.value))), (_ = x.panelRef.value) != null ? _ : s.value];
  }
  let M = g(() => !(!f.value || c.value));
  ot(() => D(), (T, k) => {
    x.close(), G(() => k == null ? void 0 : k.focus());
  }, M);
  let ae = g(() => !(c.value || p.value !== 0));
  Bt((a = v.value) == null ? void 0 : a.defaultView, "keydown", (T) => {
    ae.value && (T.defaultPrevented || T.key === R.Escape && (T.preventDefault(), T.stopPropagation(), x.close()));
  });
  let ee = g(() => !(A.value || p.value !== 0 || b));
  return dl(v, ee, (T) => {
    var k;
    return { containers: [...(k = T.containers) != null ? k : [], D] };
  }), W((T) => {
    if (p.value !== 0)
      return;
    let k = h(s);
    if (!k)
      return;
    let _ = new ResizeObserver((H) => {
      for (let ke of H) {
        let se = ke.target.getBoundingClientRect();
        se.x === 0 && se.y === 0 && se.width === 0 && se.height === 0 && x.close();
      }
    });
    _.observe(k), T(() => _.disconnect());
  }), () => {
    let { id: T, open: k, initialFocus: _, ...H } = e, ke = { ...l, ref: s, id: T, role: "dialog", "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": E.value, "aria-describedby": P.value }, se = { open: p.value === 0 };
    return U(Ke, { force: !0 }, () => [U(Ut, () => U(Zn, { target: s.value }, () => U(Ke, { force: !1 }, () => U(ye, { initialFocus: _, containers: D, features: f.value ? $(w.value, { parent: ye.features.RestoreFocus, leaf: ye.features.All & ~ye.features.FocusLock }) : ye.features.None }, () => F({ ourProps: ke, theirProps: H, slot: se, attrs: l, slots: o, visible: p.value === 0, features: le.RenderStrategy | le.Static, name: "Dialog" }))))), U(Le, { features: Pe.Hidden, ref: m })]);
  };
} });
I({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${q()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Ce("DialogOverlay");
  function n(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return F({ ourProps: { id: a, "aria-hidden": !0, onClick: n }, theirProps: r, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
I({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${q()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Ce("DialogBackdrop"), a = y(null);
  return o({ el: a, $el: a }), V(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...i } = e, u = { id: r, ref: a, "aria-hidden": !0 };
    return U(Ke, { force: !0 }, () => U(Ut, () => F({ ourProps: u, theirProps: { ...t, ...i }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
I({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${q()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Ce("DialogPanel");
  o({ el: n.panelRef, $el: n.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...i } = e, u = { id: r, ref: n.panelRef, onClick: a };
    return F({ ourProps: u, theirProps: i, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} });
I({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${q()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Ce("DialogTitle");
  return V(() => {
    o.setTitleId(e.id), J(() => o.setTitleId(null));
  }), () => {
    let { id: n, ...a } = e;
    return F({ ourProps: { id: n }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
  };
} });
var fl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(fl || {}), pl = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(pl || {});
function vl(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let qt = Symbol("MenuContext");
function je(e) {
  let t = X(qt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, je), l;
  }
  return t;
}
I({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let o = y(1), n = y(null), a = y(null), r = y([]), i = y(""), u = y(null), d = y(1);
  function s(v = (p) => p) {
    let p = u.value !== null ? r.value[u.value] : null, f = at(v(r.value.slice()), (b) => h(b.dataRef.domRef)), c = p ? f.indexOf(p) : null;
    return c === -1 && (c = null), { items: f, activeItemIndex: c };
  }
  let m = { menuState: o, buttonRef: n, itemsRef: a, items: r, searchQuery: i, activeItemIndex: u, activationTrigger: d, closeMenu: () => {
    o.value = 1, u.value = null;
  }, openMenu: () => o.value = 0, goToItem(v, p, f) {
    let c = s(), b = Et(v === C.Specific ? { focus: C.Specific, id: p } : { focus: v }, { resolveItems: () => c.items, resolveActiveIndex: () => c.activeItemIndex, resolveId: (w) => w.id, resolveDisabled: (w) => w.dataRef.disabled });
    i.value = "", u.value = b, d.value = f != null ? f : 1, r.value = c.items;
  }, search(v) {
    let p = i.value !== "" ? 0 : 1;
    i.value += v.toLowerCase();
    let f = (u.value !== null ? r.value.slice(u.value + p).concat(r.value.slice(0, u.value + p)) : r.value).find((b) => b.dataRef.textValue.startsWith(i.value) && !b.dataRef.disabled), c = f ? r.value.indexOf(f) : -1;
    c === -1 || c === u.value || (u.value = c, d.value = 1);
  }, clearSearch() {
    i.value = "";
  }, registerItem(v, p) {
    let f = s((c) => [...c, { id: v, dataRef: p }]);
    r.value = f.items, u.value = f.activeItemIndex, d.value = 1;
  }, unregisterItem(v) {
    let p = s((f) => {
      let c = f.findIndex((b) => b.id === v);
      return c !== -1 && f.splice(c, 1), f;
    });
    r.value = p.items, u.value = p.activeItemIndex, d.value = 1;
  } };
  return ot([n, a], (v, p) => {
    var f;
    m.closeMenu(), lt(p, nt.Loose) || (v.preventDefault(), (f = h(n)) == null || f.focus());
  }, g(() => o.value === 0)), Z(qt, m), tt(g(() => $(o.value, { [0]: N.Open, [1]: N.Closed }))), () => {
    let v = { open: o.value === 0, close: m.closeMenu };
    return F({ ourProps: {}, theirProps: e, slot: v, slots: t, attrs: l, name: "Menu" });
  };
} });
I({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${q()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = je("MenuButton");
  o({ el: n.buttonRef, $el: n.buttonRef });
  function a(d) {
    switch (d.key) {
      case R.Space:
      case R.Enter:
      case R.ArrowDown:
        d.preventDefault(), d.stopPropagation(), n.openMenu(), G(() => {
          var s;
          (s = h(n.itemsRef)) == null || s.focus({ preventScroll: !0 }), n.goToItem(C.First);
        });
        break;
      case R.ArrowUp:
        d.preventDefault(), d.stopPropagation(), n.openMenu(), G(() => {
          var s;
          (s = h(n.itemsRef)) == null || s.focus({ preventScroll: !0 }), n.goToItem(C.Last);
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
  function i(d) {
    e.disabled || (n.menuState.value === 0 ? (n.closeMenu(), G(() => {
      var s;
      return (s = h(n.buttonRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), n.openMenu(), vl(() => {
      var s;
      return (s = h(n.itemsRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    })));
  }
  let u = It(g(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var d;
    let s = { open: n.menuState.value === 0 }, { id: m, ...v } = e, p = { ref: n.buttonRef, id: m, type: u.value, "aria-haspopup": "menu", "aria-controls": (d = h(n.itemsRef)) == null ? void 0 : d.id, "aria-expanded": e.disabled ? void 0 : n.menuState.value === 0, onKeydown: a, onKeyup: r, onClick: i };
    return F({ ourProps: p, theirProps: v, slot: s, attrs: t, slots: l, name: "MenuButton" });
  };
} });
I({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-menu-items-${q()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = je("MenuItems"), a = y(null);
  o({ el: n.itemsRef, $el: n.itemsRef }), Rt({ container: g(() => h(n.itemsRef)), enabled: g(() => n.menuState.value === 0), accept(s) {
    return s.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : s.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s) {
    s.setAttribute("role", "none");
  } });
  function r(s) {
    var m;
    switch (a.value && clearTimeout(a.value), s.key) {
      case R.Space:
        if (n.searchQuery.value !== "")
          return s.preventDefault(), s.stopPropagation(), n.search(s.key);
      case R.Enter:
        if (s.preventDefault(), s.stopPropagation(), n.activeItemIndex.value !== null) {
          let v = n.items.value[n.activeItemIndex.value];
          (m = h(v.dataRef.domRef)) == null || m.click();
        }
        n.closeMenu(), kt(h(n.buttonRef));
        break;
      case R.ArrowDown:
        return s.preventDefault(), s.stopPropagation(), n.goToItem(C.Next);
      case R.ArrowUp:
        return s.preventDefault(), s.stopPropagation(), n.goToItem(C.Previous);
      case R.Home:
      case R.PageUp:
        return s.preventDefault(), s.stopPropagation(), n.goToItem(C.First);
      case R.End:
      case R.PageDown:
        return s.preventDefault(), s.stopPropagation(), n.goToItem(C.Last);
      case R.Escape:
        s.preventDefault(), s.stopPropagation(), n.closeMenu(), G(() => {
          var v;
          return (v = h(n.buttonRef)) == null ? void 0 : v.focus({ preventScroll: !0 });
        });
        break;
      case R.Tab:
        s.preventDefault(), s.stopPropagation(), n.closeMenu(), G(() => jn(h(n.buttonRef), s.shiftKey ? ne.Previous : ne.Next));
        break;
      default:
        s.key.length === 1 && (n.search(s.key), a.value = setTimeout(() => n.clearSearch(), 350));
        break;
    }
  }
  function i(s) {
    switch (s.key) {
      case R.Space:
        s.preventDefault();
        break;
    }
  }
  let u = Re(), d = g(() => u !== null ? (u.value & N.Open) === N.Open : n.menuState.value === 0);
  return () => {
    var s, m;
    let v = { open: n.menuState.value === 0 }, { id: p, ...f } = e, c = { "aria-activedescendant": n.activeItemIndex.value === null || (s = n.items.value[n.activeItemIndex.value]) == null ? void 0 : s.id, "aria-labelledby": (m = h(n.buttonRef)) == null ? void 0 : m.id, id: p, onKeydown: r, onKeyup: i, role: "menu", tabIndex: 0, ref: n.itemsRef };
    return F({ ourProps: c, theirProps: f, slot: v, attrs: t, slots: l, features: le.RenderStrategy | le.Static, visible: d.value, name: "MenuItems" });
  };
} });
I({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-menu-item-${q()}` } }, setup(e, { slots: t, attrs: l, expose: o }) {
  let n = je("MenuItem"), a = y(null);
  o({ el: a, $el: a });
  let r = g(() => n.activeItemIndex.value !== null ? n.items.value[n.activeItemIndex.value].id === e.id : !1), i = g(() => ({ disabled: e.disabled, textValue: "", domRef: a }));
  V(() => {
    var f, c;
    let b = (c = (f = h(a)) == null ? void 0 : f.textContent) == null ? void 0 : c.toLowerCase().trim();
    b !== void 0 && (i.value.textValue = b);
  }), V(() => n.registerItem(e.id, i)), J(() => n.unregisterItem(e.id)), W(() => {
    n.menuState.value === 0 && r.value && n.activationTrigger.value !== 0 && G(() => {
      var f, c;
      return (c = (f = h(a)) == null ? void 0 : f.scrollIntoView) == null ? void 0 : c.call(f, { block: "nearest" });
    });
  });
  function u(f) {
    if (e.disabled)
      return f.preventDefault();
    n.closeMenu(), kt(h(n.buttonRef));
  }
  function d() {
    if (e.disabled)
      return n.goToItem(C.Nothing);
    n.goToItem(C.Specific, e.id);
  }
  let s = Ft();
  function m(f) {
    s.update(f);
  }
  function v(f) {
    s.wasMoved(f) && (e.disabled || r.value || n.goToItem(C.Specific, e.id, 0));
  }
  function p(f) {
    s.wasMoved(f) && (e.disabled || r.value && n.goToItem(C.Nothing));
  }
  return () => {
    let { disabled: f } = e, c = { active: r.value, disabled: f, close: n.closeMenu }, { id: b, ...w } = e;
    return F({ ourProps: { id: b, ref: a, role: "menuitem", tabIndex: f === !0 ? void 0 : -1, "aria-disabled": f === !0 ? !0 : void 0, disabled: void 0, onClick: u, onFocus: d, onPointerenter: m, onMouseenter: m, onPointermove: v, onMousemove: v, onPointerleave: p, onMouseleave: p }, theirProps: { ...l, ...w }, slot: c, attrs: l, slots: t, name: "MenuItem" });
  };
} });
function ml(e) {
  let t = { called: !1 };
  return (...l) => {
    if (!t.called)
      return t.called = !0, e(...l);
  };
}
function _e(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function De(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Qe = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Qe || {});
function bl(e, t) {
  let l = Me();
  if (!e)
    return l.dispose;
  let { transitionDuration: o, transitionDelay: n } = getComputedStyle(e), [a, r] = [o, n].map((i) => {
    let [u = 0] = i.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, s) => s - d);
    return u;
  });
  return a !== 0 ? l.setTimeout(() => t("finished"), a + r) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function bt(e, t, l, o, n, a) {
  let r = Me(), i = a !== void 0 ? ml(a) : () => {
  };
  return De(e, ...n), _e(e, ...t, ...l), r.nextFrame(() => {
    De(e, ...l), _e(e, ...o), r.add(bl(e, (u) => (De(e, ...o, ...t), _e(e, ...n), i(u))));
  }), r.add(() => De(e, ...t, ...l, ...o, ...n)), r.add(() => i("cancelled")), r.dispose;
}
function de(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let rt = Symbol("TransitionContext");
var gl = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(gl || {});
function hl() {
  return X(rt, null) !== null;
}
function yl() {
  let e = X(rt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function wl() {
  let e = X(ut, null);
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
  V(() => l.value = !0), J(() => l.value = !1);
  function o(a, r = oe.Hidden) {
    let i = t.value.findIndex(({ id: u }) => u === a);
    i !== -1 && ($(r, { [oe.Unmount]() {
      t.value.splice(i, 1);
    }, [oe.Hidden]() {
      t.value[i].state = "hidden";
    } }), !Be(t) && l.value && (e == null || e()));
  }
  function n(a) {
    let r = t.value.find(({ id: i }) => i === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => o(a, oe.Unmount);
  }
  return { children: t, register: n, unregister: o };
}
let Qt = le.RenderStrategy, xl = I({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = y(0);
  function r() {
    a.value |= N.Opening, t("beforeEnter");
  }
  function i() {
    a.value &= ~N.Opening, t("afterEnter");
  }
  function u() {
    a.value |= N.Closing, t("beforeLeave");
  }
  function d() {
    a.value &= ~N.Closing, t("afterLeave");
  }
  if (!hl() && Tn())
    return () => U(Ol, { ...e, onBeforeEnter: r, onAfterEnter: i, onBeforeLeave: u, onAfterLeave: d }, o);
  let s = y(null), m = g(() => e.unmount ? oe.Unmount : oe.Hidden);
  n({ el: s, $el: s });
  let { show: v, appear: p } = yl(), { register: f, unregister: c } = wl(), b = y(v.value ? "visible" : "hidden"), w = { value: !0 }, A = q(), O = { value: !1 }, Y = zt(() => {
    !O.value && b.value !== "hidden" && (b.value = "hidden", c(A), d());
  });
  V(() => {
    let ee = f(A);
    J(ee);
  }), W(() => {
    if (m.value === oe.Hidden && A) {
      if (v.value && b.value !== "visible") {
        b.value = "visible";
        return;
      }
      $(b.value, { hidden: () => c(A), visible: () => f(A) });
    }
  });
  let z = de(e.enter), S = de(e.enterFrom), P = de(e.enterTo), E = de(e.entered), x = de(e.leave), D = de(e.leaveFrom), M = de(e.leaveTo);
  V(() => {
    W(() => {
      if (b.value === "visible") {
        let ee = h(s);
        if (ee instanceof Comment && ee.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function ae(ee) {
    let T = w.value && !p.value, k = h(s);
    !k || !(k instanceof HTMLElement) || T || (O.value = !0, v.value && r(), v.value || u(), ee(v.value ? bt(k, z, S, P, E, (_) => {
      O.value = !1, _ === Qe.Finished && i();
    }) : bt(k, x, D, M, E, (_) => {
      O.value = !1, _ === Qe.Finished && (Be(Y) || (b.value = "hidden", c(A), d()));
    })));
  }
  return V(() => {
    ue([v], (ee, T, k) => {
      ae(k), w.value = !1;
    }, { immediate: !0 });
  }), Z(ut, Y), tt(g(() => $(b.value, { visible: N.Open, hidden: N.Closed }) | a.value)), () => {
    let { appear: ee, show: T, enter: k, enterFrom: _, enterTo: H, entered: ke, leave: se, leaveFrom: ra, leaveTo: ua, ...st } = e, an = { ref: s }, on = { ...st, ...p.value && v.value && Te.isServer ? { class: Xe([l.class, st.class, ...z, ...S]) } : {} };
    return F({ theirProps: on, ourProps: an, slot: {}, slots: o, attrs: l, features: Qt, visible: b.value === "visible", name: "TransitionChild" });
  };
} }), Sl = xl, Ol = I({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o }) {
  let n = Re(), a = g(() => e.show === null && n !== null ? (n.value & N.Open) === N.Open : e.show);
  W(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = y(a.value ? "visible" : "hidden"), i = zt(() => {
    r.value = "hidden";
  }), u = y(!0), d = { show: a, appear: g(() => e.appear || !u.value) };
  return V(() => {
    W(() => {
      u.value = !1, a.value ? r.value = "visible" : Be(i) || (r.value = "hidden");
    });
  }), Z(ut, i), Z(rt, d), () => {
    let s = Fe(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), m = { unmount: e.unmount };
    return F({ ourProps: { ...m, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [U(Sl, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...m, ...s }, o.default)] }, attrs: {}, features: Qt, visible: r.value === "visible", name: "Transition" });
  };
} });
var gt;
const El = typeof window < "u";
El && ((gt = window == null ? void 0 : window.navigator) == null ? void 0 : gt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Pl(e) {
  return e;
}
const Ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Je = "__vueuse_ssr_handlers__";
Ye[Je] = Ye[Je] || {};
Ye[Je];
var ht;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ht || (ht = {}));
var Il = Object.defineProperty, yt = Object.getOwnPropertySymbols, Rl = Object.prototype.hasOwnProperty, Tl = Object.prototype.propertyIsEnumerable, wt = (e, t, l) => t in e ? Il(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, Cl = (e, t) => {
  for (var l in t || (t = {}))
    Rl.call(t, l) && wt(e, l, t[l]);
  if (yt)
    for (var l of yt(t))
      Tl.call(t, l) && wt(e, l, t[l]);
  return e;
};
const kl = {
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
Cl({
  linear: Pl
}, kl);
const Al = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, n] of t)
    l[o] = n;
  return l;
};
function Dl(e, t) {
  return g({
    get: () => e.modelValue,
    set: (l) => t("update:modelValue", l)
  });
}
const Ll = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, Fl = { name: "Error" }, Yt = /* @__PURE__ */ I({
  ...Fl,
  props: {
    error: null
  },
  setup(e) {
    return (t, l) => e.error ? (B(), Q("div", Ll, [
      pe(t.$slots, "default", {}, () => [
        Ze(Ie(e.error), 1)
      ])
    ])) : be("", !0);
  }
}), Ml = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, jl = {
  name: "Base",
  inheritAttrs: !1
}, Bl = /* @__PURE__ */ I({
  ...jl,
  props: {
    description: null,
    error: null,
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, l) => (B(), Q("div", null, [
      te("div", {
        class: Xe(["mt-1 rounded-md", { "shadow-sm": e.shadow }])
      }, [
        pe(t.$slots, "default")
      ], 2),
      e.description ? (B(), Q("p", Ml, Ie(e.description), 1)) : be("", !0),
      e.error ? (B(), ie(Yt, {
        key: 1,
        error: e.error
      }, null, 8, ["error"])) : be("", !0)
    ]));
  }
}), Nl = { name: "Actions" }, $l = { class: "mt-8 border-t border-gray-200 pt-5" }, Vl = { class: "flex justify-end" }, _l = { class: "inline-flex rounded-md shadow-sm" };
function Hl(e, t, l, o, n, a) {
  return B(), Q("div", $l, [
    te("div", Vl, [
      te("span", _l, [
        pe(e.$slots, "default")
      ])
    ])
  ]);
}
const Ul = /* @__PURE__ */ Al(Nl, [["render", Hl]]), Wl = { class: "relative flex items-start" }, Gl = { class: "flex h-5 items-center" }, Kl = ["id", "value", "disabled", "readonly"], ql = { class: "ml-3" }, zl = ["for"], Ql = { name: "Checkbox" }, Yl = /* @__PURE__ */ I({
  ...Ql,
  props: {
    modelValue: { type: [Array, Boolean] },
    id: null,
    description: null,
    error: null,
    label: null,
    value: null,
    readonly: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = Dl(e, t);
    return (o, n) => (B(), ie(Bl, ge(o.$props, { shadow: !1 }), {
      default: Oe(() => [
        te("div", Wl, [
          te("div", Gl, [
            We(te("input", ge({
              id: e.id,
              "onUpdate:modelValue": n[0] || (n[0] = (a) => xt(l) ? l.value = a : null),
              value: e.value,
              type: "checkbox",
              class: "text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300",
              disabled: e.disabled,
              readonly: e.readonly
            }, o.$attrs), null, 16, Kl), [
              [cn, K(l)]
            ]),
            te("div", ql, [
              te("label", {
                for: e.id,
                class: "block text-sm font-medium capitalize leading-5 text-gray-700"
              }, Ie(e.label), 9, zl)
            ])
          ])
        ])
      ]),
      _: 1
    }, 16));
  }
}), Jl = ["for"], Xl = { name: "Label" }, Zl = /* @__PURE__ */ I({
  ...Xl,
  props: {
    for: null
  },
  setup(e) {
    const t = e;
    return (l, o) => (B(), Q("label", {
      for: t.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      pe(l.$slots, "default")
    ], 8, Jl));
  }
});
var Jt = {}, Xt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => l
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
})(Xt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => o
  });
  const t = /* @__PURE__ */ l(Xt);
  function l(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  const o = t.default;
})(Jt);
let He = Jt;
var ea = (He.__esModule ? He : { default: He }).default, Zt = {}, en = {}, it = { exports: {} }, L = String, tn = function() {
  return { isColorSupported: !1, reset: L, bold: L, dim: L, italic: L, underline: L, inverse: L, hidden: L, strikethrough: L, black: L, red: L, green: L, yellow: L, blue: L, magenta: L, cyan: L, white: L, gray: L, bgBlack: L, bgRed: L, bgGreen: L, bgYellow: L, bgBlue: L, bgMagenta: L, bgCyan: L, bgWhite: L };
};
it.exports = tn();
it.exports.createColors = tn;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(u, d) {
    for (var s in d)
      Object.defineProperty(u, s, {
        enumerable: !0,
        get: d[s]
      });
  }
  t(e, {
    dim: () => r,
    default: () => i
  });
  const l = /* @__PURE__ */ o(it.exports);
  function o(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  let n = /* @__PURE__ */ new Set();
  function a(u, d, s) {
    typeof process < "u" && process.env.JEST_WORKER_ID || s && n.has(s) || (s && n.add(s), console.warn(""), d.forEach((m) => console.warn(u, "-", m)));
  }
  function r(u) {
    return l.default.dim(u);
  }
  const i = {
    info(u, d) {
      a(l.default.bold(l.default.cyan("info")), ...Array.isArray(u) ? [
        u
      ] : [
        d,
        u
      ]);
    },
    warn(u, d) {
      a(l.default.bold(l.default.yellow("warn")), ...Array.isArray(u) ? [
        u
      ] : [
        d,
        u
      ]);
    },
    risk(u, d) {
      a(l.default.bold(l.default.magenta("risk")), ...Array.isArray(u) ? [
        u
      ] : [
        d,
        u
      ]);
    }
  };
})(en);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: () => n
  });
  const t = /* @__PURE__ */ l(en);
  function l(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function o({ version: a, from: r, to: i }) {
    t.default.warn(`${r}-color-renamed`, [
      `As of Tailwind CSS ${a}, \`${r}\` has been renamed to \`${i}\`.`,
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
})(Zt);
let Ue = Zt;
var ta = (Ue.__esModule ? Ue : { default: Ue }).default;
ea.withOptions(
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
              ...ta.indigo,
              ...(t = e == null ? void 0 : e.colors) == null ? void 0 : t.primary
            }
          }
        }
      }
    };
  }
);
const nn = /* @__PURE__ */ I({
  __name: "Element",
  props: {
    element: null,
    form: null
  },
  setup(e) {
    var r;
    const t = e, l = () => {
      let i = Object.entries({
        ...t.element.definition,
        ...t.element.definition.props,
        schema: t.element.definition.schema,
        form: t.form,
        id: t.element.name
      }), u = t.element.definition.component.props;
      return Object.fromEntries(i.filter(([d]) => u.hasOwnProperty(d)));
    }, o = () => {
      var u;
      return ((u = t.element.definition.label) != null ? u : t.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }, n = !!t.element.definition.schema, a = (r = t.element.definition.showLabel) != null ? r : !n;
    return (i, u) => (B(), Q("div", null, [
      K(a) ? (B(), ie(K(Zl), {
        key: 0,
        for: e.element.name
      }, {
        default: Oe(() => [
          Ze(Ie(o()), 1)
        ]),
        _: 1
      }, 8, ["for"])) : be("", !0),
      (B(), ie(pn(e.element.definition.component), ge({
        key: e.element.name,
        modelValue: e.form[e.element.name],
        "onUpdate:modelValue": u[0] || (u[0] = (d) => e.form[e.element.name] = d)
      }, l()), null, 16, ["modelValue"])),
      Ee(K(Yt), {
        error: e.form.errors[e.element.name]
      }, null, 8, ["error"])
    ]));
  }
}), na = { class: "mx-auto mt-6 max-w-md space-y-6" }, da = /* @__PURE__ */ I({
  __name: "FormBuilder",
  props: {
    schema: null,
    submit: { default: "Save" }
  },
  setup(e) {
    return (t, l) => (B(), Q("div", na, [
      (B(!0), Q(ve, null, et(e.schema.elements, (o, n) => (B(), ie(nn, {
        key: n,
        element: o,
        form: e.schema.form
      }, null, 8, ["element", "form"]))), 128)),
      Ee(K(Ul), null, {
        default: Oe(() => [
          pe(t.$slots, "actions", {
            form: e.schema.form
          }, () => [
            Ee(K(Sn), {
              loading: e.schema.form.processing,
              type: "submit"
            }, {
              default: Oe(() => [
                Ze(Ie(e.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 3
      })
    ]));
  }
}), la = /* @__PURE__ */ I({
  __name: "CheckboxGroup",
  props: {
    modelValue: null,
    items: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, o = g({
      get: () => l.modelValue,
      set: (n) => {
        t("update:modelValue", n);
      }
    });
    return (n, a) => (B(!0), Q(ve, null, et(e.items, (r, i) => {
      var u, d, s;
      return B(), ie(K(Yl), {
        id: (u = r.label) != null ? u : r,
        key: i,
        modelValue: K(o),
        "onUpdate:modelValue": a[0] || (a[0] = (m) => xt(o) ? o.value = m : null),
        value: (d = r.value) != null ? d : r,
        label: (s = r.label) != null ? s : r
      }, null, 8, ["id", "modelValue", "value", "label"]);
    }), 128));
  }
}), aa = (e) => Object.keys(e).reduce((t, l) => {
  var o;
  return t[l] = (o = e[l].value) != null ? o : null, t;
}, {}), ln = (e) => Object.entries(e).map(([t, l]) => {
  const o = l.hasOwnProperty("setup") ? { component: l } : l;
  return {
    name: t,
    definition: o
  };
});
function ca(e) {
  const t = mn(
    Object.keys(e).reduce((l, o) => {
      var n, a;
      return e[o].schema ? { ...l, ...aa(e[o].schema) } : e[o].component === la ? (l[o] = (n = e[o].checked) != null ? n : [], l) : (l[o] = (a = e[o].value) != null ? a : null, l);
    }, {})
  );
  return {
    elements: ln(e),
    form: t
  };
}
const oa = { class: "grid grid-flow-col gap-x-4 gap-y-6" }, fa = /* @__PURE__ */ I({
  __name: "Grid",
  props: {
    schema: null,
    form: null
  },
  setup(e) {
    const l = ln(e.schema);
    return (o, n) => (B(), Q("div", oa, [
      (B(!0), Q(ve, null, et(K(l), (a, r) => (B(), ie(nn, ge({
        key: r,
        element: a,
        form: e.form
      }, o.$attrs), null, 16, ["element", "form"]))), 128))
    ]));
  }
});
export {
  la as CheckboxGroup,
  da as FormBuilder,
  fa as Grid,
  ca as useSchema
};
