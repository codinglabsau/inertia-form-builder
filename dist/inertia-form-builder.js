import { defineComponent as I, ref as y, computed as g, toRaw as F, provide as J, onMounted as $, watch as ae, h as _, Fragment as ve, watchEffect as U, onUnmounted as Y, nextTick as W, inject as X, Teleport as Xt, reactive as Jt, unref as q, normalizeClass as Qe, useAttrs as Zt, openBlock as j, createElementBlock as K, createCommentVNode as me, createBlock as re, mergeProps as be, withCtx as Se, renderSlot as pe, withDirectives as He, createVNode as Oe, vShow as rt, cloneVNode as el, createTextVNode as Ye, toDisplayString as Pe, createElementVNode as ee, isRef as gt, vModelCheckbox as tl, shallowRef as ll, resolveDynamicComponent as nl, renderList as Xe } from "vue";
import { Link as ol, useForm as al } from "@inertiajs/vue3";
const rl = /* @__PURE__ */ ee("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ul = /* @__PURE__ */ ee("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), il = [
  rl,
  ul
], sl = { name: "Spinner" }, ut = /* @__PURE__ */ I({
  ...sl,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (t, n) => (j(), K("svg", {
      class: Qe(["h-5 w-5 animate-spin", e.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, il, 2));
  }
}), dl = ["disabled", "type"], cl = { name: "PrimaryButton" }, pl = /* @__PURE__ */ I({
  ...cl,
  props: {
    loading: { type: Boolean },
    type: null
  },
  setup(e) {
    const t = Zt(), n = g(() => !t.href), o = [
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
    return (l, a) => (j(), K(ve, null, [
      q(n) ? me("", !0) : (j(), re(q(ol), be({
        key: 0,
        class: o,
        disabled: e.loading
      }, q(t)), {
        default: Se(() => [
          pe(l.$slots, "default"),
          He(Oe(ut, { class: "ml-3" }, null, 512), [
            [rt, e.loading]
          ])
        ]),
        _: 3
      }, 16, ["disabled"])),
      q(n) ? (j(), K("button", be({
        key: 1,
        class: o,
        disabled: e.loading,
        type: e.type
      }, q(t)), [
        pe(l.$slots, "default"),
        He(Oe(ut, { class: "ml-3" }, null, 512), [
          [rt, e.loading]
        ])
      ], 16, dl)) : me("", !0)
    ], 64));
  }
});
function B(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, B), o;
}
var le = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(le || {}), ne = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ne || {});
function k({ visible: e = !0, features: t = 0, ourProps: n, theirProps: o, ...l }) {
  var a;
  let r = yt(o, n), u = Object.assign(l, { props: r });
  if (e || t & 2 && r.static)
    return Me(u);
  if (t & 1) {
    let s = (a = r.unmount) == null || a ? 0 : 1;
    return B(s, { [0]() {
      return null;
    }, [1]() {
      return Me({ ...l, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Me(u);
}
function Me({ props: e, attrs: t, slots: n, slot: o, name: l }) {
  var a, r;
  let { as: u, ...s } = ke(e, ["unmount", "static"]), d = (a = n.default) == null ? void 0 : a.call(n, o), i = {};
  if (o) {
    let f = !1, m = [];
    for (let [p, v] of Object.entries(o))
      typeof v == "boolean" && (f = !0), v === !0 && m.push(p);
    f && (i["data-headlessui-state"] = m.join(" "));
  }
  if (u === "template") {
    if (d = ht(d != null ? d : []), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [f, ...m] = d != null ? d : [];
      if (!fl(f) || m.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).map((c) => c.trim()).filter((c, b, w) => w.indexOf(c) === b).sort((c, b) => c.localeCompare(b)).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
      let p = yt((r = f.props) != null ? r : {}, s), v = el(f, p);
      for (let c in p)
        c.startsWith("on") && (v.props || (v.props = {}), v.props[c] = p[c]);
      return v;
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return _(u, Object.assign({}, s, i), { default: () => d });
}
function ht(e) {
  return e.flatMap((t) => t.type === ve ? ht(t.children) : [t]);
}
function yt(...e) {
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
function vl(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function ke(e, t = []) {
  let n = Object.assign({}, e);
  for (let o of t)
    o in n && delete n[o];
  return n;
}
function fl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let ml = 0;
function bl() {
  return ++ml;
}
function G() {
  return bl();
}
var T = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(T || {});
function gl(e) {
  throw new Error("Unexpected object: " + e);
}
var C = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(C || {});
function wt(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), l = o != null ? o : -1, a = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((r) => !t.resolveDisabled(r));
      case 1: {
        let r = n.slice().reverse().findIndex((u, s, d) => l !== -1 && d.length - s - 1 >= l ? !1 : !t.resolveDisabled(u));
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
        gl(e);
    }
  })();
  return a === -1 ? o : a;
}
function h(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let xt = Symbol("Context");
var M = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(M || {});
function hl() {
  return Ie() !== null;
}
function Ie() {
  return X(xt, null);
}
function Je(e) {
  J(xt, e);
}
function it(e, t) {
  if (e)
    return e;
  let n = t != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function St(e, t) {
  let n = y(it(e.value.type, e.value.as));
  return $(() => {
    n.value = it(e.value.type, e.value.as);
  }), U(() => {
    var o;
    n.value || h(t) && h(t) instanceof HTMLButtonElement && !((o = h(t)) != null && o.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var yl = Object.defineProperty, wl = (e, t, n) => t in e ? yl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, st = (e, t, n) => (wl(e, typeof t != "symbol" ? t + "" : t, n), n);
class xl {
  constructor() {
    st(this, "current", this.detect()), st(this, "currentId", 0);
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
let Te = new xl();
function fe(e) {
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
function Ot({ container: e, accept: t, walk: n, enabled: o }) {
  U(() => {
    let l = e.value;
    if (!l || o !== void 0 && !o.value)
      return;
    let a = fe(e);
    if (!a)
      return;
    let r = Object.assign((s) => t(s), { acceptNode: t }), u = a.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; u.nextNode(); )
      n(u.currentNode);
  });
}
let _e = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var te = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(te || {}), Et = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Et || {}), Sl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Sl || {});
function Pt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(_e)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ze = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ze || {});
function et(e, t = 0) {
  var n;
  return e === ((n = fe(e)) == null ? void 0 : n.body) ? !1 : B(t, { [0]() {
    return e.matches(_e);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(_e))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
function It(e) {
  let t = fe(e);
  W(() => {
    t && !et(t.activeElement, 0) && oe(e);
  });
}
function oe(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Ol = ["textarea", "input"].join(",");
function El(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Ol)) != null ? n : !1;
}
function tt(e, t = (n) => n) {
  return e.slice().sort((n, o) => {
    let l = t(n), a = t(o);
    if (l === null || a === null)
      return 0;
    let r = l.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Pl(e, t) {
  return xe(Pt(), t, { relativeTo: e });
}
function xe(e, t, { sorted: n = !0, relativeTo: o = null, skipElements: l = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, u = Array.isArray(e) ? n ? tt(e) : e : Pt(e);
  l.length > 0 && u.length > 1 && (u = u.filter((v) => !l.includes(v))), o = o != null ? o : r.activeElement;
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
  })(), i = t & 32 ? { preventScroll: !0 } : {}, f = 0, m = u.length, p;
  do {
    if (f >= m || f + m <= 0)
      return 0;
    let v = d + f;
    if (t & 16)
      v = (v + m) % m;
    else {
      if (v < 0)
        return 3;
      if (v >= m)
        return 1;
    }
    p = u[v], p == null || p.focus(i), f += s;
  } while (p !== r.activeElement);
  return t & 6 && El(p) && p.select(), p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), 2;
}
function Be(e, t, n) {
  Te.isServer || U((o) => {
    document.addEventListener(e, t, n), o(() => document.removeEventListener(e, t, n));
  });
}
function lt(e, t, n = g(() => !0)) {
  function o(a, r) {
    if (!n.value || a.defaultPrevented)
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
      let i = d instanceof HTMLElement ? d : h(d);
      if (i != null && i.contains(u) || a.composed && a.composedPath().includes(i))
        return;
    }
    return !et(u, Ze.Loose) && u.tabIndex !== -1 && a.preventDefault(), t(a, u);
  }
  let l = y(null);
  Be("mousedown", (a) => {
    var r, u;
    n.value && (l.value = ((u = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : u[0]) || a.target);
  }, !0), Be("click", (a) => {
    l.value && (o(a, () => l.value), l.value = null);
  }, !0), Be("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ee = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ee || {});
let Le = I({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: o, ...l } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return k({ ourProps: a, theirProps: l, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function Tt(e = {}, t = null, n = []) {
  for (let [o, l] of Object.entries(e))
    Ct(n, Rt(t, o), l);
  return n;
}
function Rt(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ct(e, t, n) {
  if (Array.isArray(n))
    for (let [o, l] of n.entries())
      Ct(e, Rt(t, o.toString()), l);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Tt(n, t, e);
}
function Il(e, t, n) {
  let o = y(n == null ? void 0 : n.value), l = g(() => e.value !== void 0);
  return [g(() => l.value ? e.value : o.value), function(a) {
    return l.value || (o.value = a), t == null ? void 0 : t(a);
  }];
}
function dt(e) {
  return [e.screenX, e.screenY];
}
function At() {
  let e = y([-1, -1]);
  return { wasMoved(t) {
    let n = dt(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = dt(t);
  } };
}
function Dt() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Tl() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Rl() {
  return Dt() || Tl();
}
function Cl(e, t) {
  return e === t;
}
var Al = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Al || {}), Dl = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Dl || {}), Ll = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Ll || {});
let Lt = Symbol("ComboboxContext");
function ge(e) {
  let t = X(Lt, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, ge), n;
  }
  return t;
}
I({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Cl }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: o }) {
  let l = y(1), a = y(null), r = y(null), u = y(null), s = y(null), d = y({ static: !1, hold: !1 }), i = y([]), f = y(null), m = y(1), p = y(!1);
  function v(S = (P) => P) {
    let P = f.value !== null ? i.value[f.value] : null, E = tt(S(i.value.slice()), (A) => h(A.dataRef.domRef)), x = P ? E.indexOf(P) : null;
    return x === -1 && (x = null), { options: E, activeOptionIndex: x };
  }
  let c = g(() => e.multiple ? 1 : 0), b = g(() => e.nullable), [w, L] = Il(g(() => e.modelValue === void 0 ? B(c.value, { [1]: [], [0]: void 0 }) : e.modelValue), (S) => o("update:modelValue", S), g(() => e.defaultValue)), O = { comboboxState: l, value: w, mode: c, compare(S, P) {
    if (typeof e.by == "string") {
      let E = e.by;
      return (S == null ? void 0 : S[E]) === (P == null ? void 0 : P[E]);
    }
    return e.by(S, P);
  }, defaultValue: g(() => e.defaultValue), nullable: b, inputRef: r, labelRef: a, buttonRef: u, optionsRef: s, disabled: g(() => e.disabled), options: i, change(S) {
    L(S);
  }, activeOptionIndex: g(() => {
    if (p.value && f.value === null && i.value.length > 0) {
      let S = i.value.findIndex((P) => !P.dataRef.disabled);
      if (S !== -1)
        return S;
    }
    return f.value;
  }), activationTrigger: m, optionsPropsRef: d, closeCombobox() {
    p.value = !1, !e.disabled && l.value !== 1 && (l.value = 1, f.value = null);
  }, openCombobox() {
    if (p.value = !0, e.disabled || l.value === 0)
      return;
    let S = i.value.findIndex((P) => {
      let E = F(P.dataRef.value);
      return B(c.value, { [0]: () => O.compare(F(O.value.value), F(E)), [1]: () => F(O.value.value).some((x) => O.compare(F(x), F(E))) });
    });
    S !== -1 && (f.value = S), l.value = 0;
  }, goToOption(S, P, E) {
    if (p.value = !1, e.disabled || s.value && !d.value.static && l.value === 1)
      return;
    let x = v();
    if (x.activeOptionIndex === null) {
      let N = x.options.findIndex((ue) => !ue.dataRef.disabled);
      N !== -1 && (x.activeOptionIndex = N);
    }
    let A = wt(S === C.Specific ? { focus: C.Specific, id: P } : { focus: S }, { resolveItems: () => x.options, resolveActiveIndex: () => x.activeOptionIndex, resolveId: (N) => N.id, resolveDisabled: (N) => N.dataRef.disabled });
    f.value = A, m.value = E != null ? E : 1, i.value = x.options;
  }, selectOption(S) {
    let P = i.value.find((x) => x.id === S);
    if (!P)
      return;
    let { dataRef: E } = P;
    L(B(c.value, { [0]: () => E.value, [1]: () => {
      let x = F(O.value.value).slice(), A = F(E.value), N = x.findIndex((ue) => O.compare(A, F(ue)));
      return N === -1 ? x.push(A) : x.splice(N, 1), x;
    } }));
  }, selectActiveOption() {
    if (O.activeOptionIndex.value === null)
      return;
    let { dataRef: S, id: P } = i.value[O.activeOptionIndex.value];
    L(B(c.value, { [0]: () => S.value, [1]: () => {
      let E = F(O.value.value).slice(), x = F(S.value), A = E.findIndex((N) => O.compare(x, F(N)));
      return A === -1 ? E.push(x) : E.splice(A, 1), E;
    } })), O.goToOption(C.Specific, P);
  }, registerOption(S, P) {
    let E = { id: S, dataRef: P }, x = v((A) => [...A, E]);
    if (f.value === null) {
      let A = P.value.value;
      B(c.value, { [0]: () => O.compare(F(O.value.value), F(A)), [1]: () => F(O.value.value).some((N) => O.compare(F(N), F(A))) }) && (x.activeOptionIndex = x.options.indexOf(E));
    }
    i.value = x.options, f.value = x.activeOptionIndex, m.value = 1;
  }, unregisterOption(S) {
    var P;
    O.activeOptionIndex.value !== null && ((P = O.options.value[O.activeOptionIndex.value]) == null ? void 0 : P.id) === S && (p.value = !0);
    let E = v((x) => {
      let A = x.findIndex((N) => N.id === S);
      return A !== -1 && x.splice(A, 1), x;
    });
    i.value = E.options, f.value = E.activeOptionIndex, m.value = 1;
  } };
  lt([r, u, s], () => O.closeCombobox(), g(() => l.value === 0)), J(Lt, O), Je(g(() => B(l.value, { [0]: M.Open, [1]: M.Closed })));
  let Q = g(() => O.activeOptionIndex.value === null ? null : i.value[O.activeOptionIndex.value].dataRef.value), z = g(() => {
    var S;
    return (S = h(r)) == null ? void 0 : S.closest("form");
  });
  return $(() => {
    ae([z], () => {
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
    let { name: S, disabled: P, ...E } = e, x = { open: l.value === 0, disabled: P, activeIndex: O.activeOptionIndex.value, activeOption: Q.value, value: w.value };
    return _(ve, [...S != null && w.value != null ? Tt({ [S]: w.value }).map(([A, N]) => _(Le, vl({ features: Ee.Hidden, key: A, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: A, value: N }))) : [], k({ theirProps: { ...n, ...ke(E, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: x, slots: t, attrs: n, name: "Combobox" })]);
  };
} });
I({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${G()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = ge("ComboboxLabel");
  function l() {
    var a;
    (a = h(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: r, ...u } = e, s = { id: r, ref: o.labelRef, onClick: l };
    return k({ ourProps: s, theirProps: u, slot: a, attrs: t, slots: n, name: "ComboboxLabel" });
  };
} });
I({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${G()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = ge("ComboboxButton");
  o({ el: l.buttonRef, $el: l.buttonRef });
  function a(s) {
    l.disabled.value || (l.comboboxState.value === 0 ? l.closeCombobox() : (s.preventDefault(), l.openCombobox()), W(() => {
      var d;
      return (d = h(l.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function r(s) {
    switch (s.key) {
      case T.ArrowDown:
        s.preventDefault(), s.stopPropagation(), l.comboboxState.value === 1 && l.openCombobox(), W(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case T.ArrowUp:
        s.preventDefault(), s.stopPropagation(), l.comboboxState.value === 1 && (l.openCombobox(), W(() => {
          l.value.value || l.goToOption(C.Last);
        })), W(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case T.Escape:
        if (l.comboboxState.value !== 0)
          return;
        s.preventDefault(), l.optionsRef.value && !l.optionsPropsRef.value.static && s.stopPropagation(), l.closeCombobox(), W(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = St(g(() => ({ as: e.as, type: t.type })), l.buttonRef);
  return () => {
    var s, d;
    let i = { open: l.comboboxState.value === 0, disabled: l.disabled.value, value: l.value.value }, { id: f, ...m } = e, p = { ref: l.buttonRef, id: f, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (s = h(l.optionsRef)) == null ? void 0 : s.id, "aria-expanded": l.disabled.value ? void 0 : l.comboboxState.value === 0, "aria-labelledby": l.labelRef.value ? [(d = h(l.labelRef)) == null ? void 0 : d.id, f].join(" ") : void 0, disabled: l.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return k({ ourProps: p, theirProps: m, slot: i, attrs: t, slots: n, name: "ComboboxButton" });
  };
} });
I({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${G()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  let a = ge("ComboboxInput"), r = { value: !1 };
  l({ el: a.inputRef, $el: a.inputRef });
  let u = g(() => {
    var c;
    let b = a.value.value;
    return h(a.inputRef) ? typeof e.displayValue < "u" && b !== void 0 ? (c = e.displayValue(b)) != null ? c : "" : typeof b == "string" ? b : "" : "";
  });
  $(() => {
    ae([u, a.comboboxState], ([c, b], [w, L]) => {
      if (r.value)
        return;
      let O = h(a.inputRef);
      O && (L === 0 && b === 1 || c !== w) && (O.value = c);
    }, { immediate: !0 }), ae([a.comboboxState], ([c], [b]) => {
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
  function d() {
    s.value = !0;
  }
  function i() {
    setTimeout(() => {
      s.value = !1;
    });
  }
  function f(c) {
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
        return r.value = !1, c.preventDefault(), c.stopPropagation(), B(a.comboboxState.value, { [0]: () => a.goToOption(C.Next), [1]: () => a.openCombobox() });
      case T.ArrowUp:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), B(a.comboboxState.value, { [0]: () => a.goToOption(C.Previous), [1]: () => {
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
  let v = g(() => {
    var c, b, w, L;
    return (L = (w = (b = e.defaultValue) != null ? b : a.defaultValue.value !== void 0 ? (c = e.displayValue) == null ? void 0 : c.call(e, a.defaultValue.value) : null) != null ? w : a.defaultValue.value) != null ? L : "";
  });
  return () => {
    var c, b, w, L, O, Q;
    let z = { open: a.comboboxState.value === 0 }, { id: S, displayValue: P, onChange: E, ...x } = e, A = { "aria-controls": (c = a.optionsRef.value) == null ? void 0 : c.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (b = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : b.id, "aria-labelledby": (O = (w = h(a.labelRef)) == null ? void 0 : w.id) != null ? O : (L = h(a.buttonRef)) == null ? void 0 : L.id, "aria-autocomplete": "list", id: S, onCompositionstart: d, onCompositionend: i, onKeydown: f, onInput: m, onBlur: p, role: "combobox", type: (Q = n.type) != null ? Q : "text", tabIndex: 0, ref: a.inputRef, defaultValue: v.value };
    return k({ ourProps: A, theirProps: x, slot: z, attrs: n, slots: o, features: le.RenderStrategy | le.Static, name: "ComboboxInput" });
  };
} });
I({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = ge("ComboboxOptions"), a = `headlessui-combobox-options-${G()}`;
  o({ el: l.optionsRef, $el: l.optionsRef }), U(() => {
    l.optionsPropsRef.value.static = e.static;
  }), U(() => {
    l.optionsPropsRef.value.hold = e.hold;
  });
  let r = Ie(), u = g(() => r !== null ? (r.value & M.Open) === M.Open : l.comboboxState.value === 0);
  return Ot({ container: g(() => h(l.optionsRef)), enabled: g(() => l.comboboxState.value === 0), accept(s) {
    return s.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : s.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s) {
    s.setAttribute("role", "none");
  } }), () => {
    var s, d, i;
    let f = { open: l.comboboxState.value === 0 }, m = { "aria-labelledby": (i = (s = h(l.labelRef)) == null ? void 0 : s.id) != null ? i : (d = h(l.buttonRef)) == null ? void 0 : d.id, id: a, ref: l.optionsRef, role: "listbox", "aria-multiselectable": l.mode.value === 1 ? !0 : void 0 }, p = ke(e, ["hold"]);
    return k({ ourProps: m, theirProps: p, slot: f, attrs: t, slots: n, features: le.RenderStrategy | le.Static, visible: u.value, name: "ComboboxOptions" });
  };
} });
I({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n, expose: o }) {
  let l = ge("ComboboxOption"), a = `headlessui-combobox-option-${G()}`, r = y(null);
  o({ el: r, $el: r });
  let u = g(() => l.activeOptionIndex.value !== null ? l.options.value[l.activeOptionIndex.value].id === a : !1), s = g(() => B(l.mode.value, { [0]: () => l.compare(F(l.value.value), F(e.value)), [1]: () => F(l.value.value).some((b) => l.compare(F(b), F(e.value))) })), d = g(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  $(() => l.registerOption(a, d)), Y(() => l.unregisterOption(a)), U(() => {
    l.comboboxState.value === 0 && u.value && l.activationTrigger.value !== 0 && W(() => {
      var b, w;
      return (w = (b = h(r)) == null ? void 0 : b.scrollIntoView) == null ? void 0 : w.call(b, { block: "nearest" });
    });
  });
  function i(b) {
    if (e.disabled)
      return b.preventDefault();
    l.selectOption(a), l.mode.value === 0 && l.closeCombobox(), Rl() || requestAnimationFrame(() => {
      var w;
      return (w = h(l.inputRef)) == null ? void 0 : w.focus();
    });
  }
  function f() {
    if (e.disabled)
      return l.goToOption(C.Nothing);
    l.goToOption(C.Specific, a);
  }
  let m = At();
  function p(b) {
    m.update(b);
  }
  function v(b) {
    m.wasMoved(b) && (e.disabled || u.value || l.goToOption(C.Specific, a, 0));
  }
  function c(b) {
    m.wasMoved(b) && (e.disabled || u.value && (l.optionsPropsRef.value.hold || l.goToOption(C.Nothing)));
  }
  return () => {
    let { disabled: b } = e, w = { active: u.value, selected: s.value, disabled: b }, L = { id: a, ref: r, role: "option", tabIndex: b === !0 ? void 0 : -1, "aria-disabled": b === !0 ? !0 : void 0, "aria-selected": s.value, disabled: void 0, onClick: i, onFocus: f, onPointerenter: p, onMouseenter: p, onPointermove: v, onMousemove: v, onPointerleave: c, onMouseleave: c };
    return k({ ourProps: L, theirProps: e, slot: w, attrs: n, slots: t, name: "ComboboxOption" });
  };
} });
function kl(e, t, n) {
  Te.isServer || U((o) => {
    window.addEventListener(e, t, n), o(() => window.removeEventListener(e, t, n));
  });
}
var we = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(we || {});
function Fl() {
  let e = y(0);
  return kl("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function kt(e, t, n, o) {
  Te.isServer || U((l) => {
    e = e != null ? e : window, e.addEventListener(t, n, o), l(() => e.removeEventListener(t, n, o));
  });
}
function Ft(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function jt(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.value) {
    let o = h(n);
    o instanceof HTMLElement && t.add(o);
  }
  return t;
}
var Nt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Nt || {});
let he = Object.assign(I({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = y(null);
  o({ el: l, $el: l });
  let a = g(() => fe(l)), r = y(!1);
  $(() => r.value = !0), Y(() => r.value = !1), Nl({ ownerDocument: a }, g(() => r.value && Boolean(e.features & 16)));
  let u = Ml({ ownerDocument: a, container: l, initialFocus: g(() => e.initialFocus) }, g(() => r.value && Boolean(e.features & 2)));
  Bl({ ownerDocument: a, container: l, containers: e.containers, previousActiveElement: u }, g(() => r.value && Boolean(e.features & 8)));
  let s = Fl();
  function d(p) {
    let v = h(l);
    !v || ((c) => c())(() => {
      B(s.value, { [we.Forwards]: () => {
        xe(v, te.First, { skipElements: [p.relatedTarget] });
      }, [we.Backwards]: () => {
        xe(v, te.Last, { skipElements: [p.relatedTarget] });
      } });
    });
  }
  let i = y(!1);
  function f(p) {
    p.key === "Tab" && (i.value = !0, requestAnimationFrame(() => {
      i.value = !1;
    }));
  }
  function m(p) {
    if (!r.value)
      return;
    let v = jt(e.containers);
    h(l) instanceof HTMLElement && v.add(h(l));
    let c = p.relatedTarget;
    c instanceof HTMLElement && c.dataset.headlessuiFocusGuard !== "true" && (Mt(v, c) || (i.value ? xe(h(l), B(s.value, { [we.Forwards]: () => te.Next, [we.Backwards]: () => te.Previous }) | te.WrapAround, { relativeTo: p.target }) : p.target instanceof HTMLElement && oe(p.target)));
  }
  return () => {
    let p = {}, v = { ref: l, onKeydown: f, onFocusout: m }, { features: c, initialFocus: b, containers: w, ...L } = e;
    return _(ve, [Boolean(c & 4) && _(Le, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Ee.Focusable }), k({ ourProps: v, theirProps: { ...t, ...L }, slot: p, attrs: t, slots: n, name: "FocusTrap" }), Boolean(c & 4) && _(Le, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Ee.Focusable })]);
  };
} }), { features: Nt }), de = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && de[0] !== t.target && (de.unshift(t.target), de = de.filter((n) => n != null && n.isConnected), de.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function jl(e) {
  let t = y(de.slice());
  return ae([e], ([n], [o]) => {
    o === !0 && n === !1 ? Ft(() => {
      t.value.splice(0);
    }) : o === !1 && n === !0 && (t.value = de.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((o) => o != null && o.isConnected)) != null ? n : null;
  };
}
function Nl({ ownerDocument: e }, t) {
  let n = jl(t);
  $(() => {
    U(() => {
      var o, l;
      t.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((l = e.value) == null ? void 0 : l.body) && oe(n());
    }, { flush: "post" });
  }), Y(() => {
    oe(n());
  });
}
function Ml({ ownerDocument: e, container: t, initialFocus: n }, o) {
  let l = y(null), a = y(!1);
  return $(() => a.value = !0), Y(() => a.value = !1), $(() => {
    ae([t, n, o], (r, u) => {
      if (r.every((d, i) => (u == null ? void 0 : u[i]) === d) || !o.value)
        return;
      let s = h(t);
      s && Ft(() => {
        var d, i;
        if (!a.value)
          return;
        let f = h(n), m = (d = e.value) == null ? void 0 : d.activeElement;
        if (f) {
          if (f === m) {
            l.value = m;
            return;
          }
        } else if (s.contains(m)) {
          l.value = m;
          return;
        }
        f ? oe(f) : xe(s, te.First | te.NoScroll) === Et.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (i = e.value) == null ? void 0 : i.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function Bl({ ownerDocument: e, container: t, containers: n, previousActiveElement: o }, l) {
  var a;
  kt((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!l.value)
      return;
    let u = jt(n);
    h(t) instanceof HTMLElement && u.add(h(t));
    let s = o.value;
    if (!s)
      return;
    let d = r.target;
    d && d instanceof HTMLElement ? Mt(u, d) ? (o.value = d, oe(d)) : (r.preventDefault(), r.stopPropagation(), oe(s)) : oe(o.value);
  }, !0);
}
function Mt(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let $e = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map();
function ct(e, t = y(!0)) {
  U((n) => {
    var o;
    if (!t.value)
      return;
    let l = h(e);
    if (!l)
      return;
    n(function() {
      var r;
      if (!l)
        return;
      let u = (r = ye.get(l)) != null ? r : 1;
      if (u === 1 ? ye.delete(l) : ye.set(l, u - 1), u !== 1)
        return;
      let s = $e.get(l);
      s && (s["aria-hidden"] === null ? l.removeAttribute("aria-hidden") : l.setAttribute("aria-hidden", s["aria-hidden"]), l.inert = s.inert, $e.delete(l));
    });
    let a = (o = ye.get(l)) != null ? o : 0;
    ye.set(l, a + 1), a === 0 && ($e.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }), l.setAttribute("aria-hidden", "true"), l.inert = !0);
  });
}
let Bt = Symbol("ForcePortalRootContext");
function $l() {
  return X(Bt, !1);
}
let Ue = I({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return J(Bt, e.force), () => {
    let { force: o, ...l } = e;
    return k({ theirProps: l, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function Vl(e) {
  let t = fe(e);
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
let $t = I({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let o = y(null), l = g(() => fe(o)), a = $l(), r = X(Vt, null), u = y(a === !0 || r == null ? Vl(o.value) : r.resolveTarget());
  return U(() => {
    a || r != null && (u.value = r.resolveTarget());
  }), Y(() => {
    var s, d;
    let i = (s = l.value) == null ? void 0 : s.getElementById("headlessui-portal-root");
    i && u.value === i && u.value.children.length <= 0 && ((d = u.value.parentElement) == null || d.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let s = { ref: o, "data-headlessui-portal": "" };
    return _(Xt, { to: u.value }, k({ ourProps: s, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Vt = Symbol("PortalGroupContext"), Hl = I({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let o = Jt({ resolveTarget() {
    return e.target;
  } });
  return J(Vt, o), () => {
    let { target: l, ...a } = e;
    return k({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), Ht = Symbol("StackContext");
var We = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(We || {});
function _l() {
  return X(Ht, () => {
  });
}
function Ul({ type: e, enabled: t, element: n, onUpdate: o }) {
  let l = _l();
  function a(...r) {
    o == null || o(...r), l(...r);
  }
  $(() => {
    ae(t, (r, u) => {
      r ? a(0, e, n) : u === !0 && a(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), Y(() => {
    t.value && a(1, e, n);
  }), J(Ht, a);
}
let _t = Symbol("DescriptionContext");
function Wl() {
  let e = X(_t, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function ql({ slot: e = y({}), name: t = "Description", props: n = {} } = {}) {
  let o = y([]);
  function l(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return J(_t, { register: l, slot: e, name: t, props: n }), g(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
I({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${G()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Wl();
  return $(() => Y(o.register(e.id))), () => {
    let { name: l = "Description", slot: a = y({}), props: r = {} } = o, { id: u, ...s } = e, d = { ...Object.entries(r).reduce((i, [f, m]) => Object.assign(i, { [f]: q(m) }), {}), id: u };
    return k({ ourProps: d, theirProps: s, slot: a.value, attrs: t, slots: n, name: l });
  };
} });
function Gl(e) {
  let t = ll(e.getSnapshot());
  return Y(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Fe() {
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
    let o = Fe();
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
function zl(e, t) {
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
function Kl() {
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
function Ql() {
  if (!Dt())
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
          let { hash: s } = new URL(u.href), d = t.querySelector(s);
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
function Yl() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Xl(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let ce = zl(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let o = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Fe(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(t), this.set(e, o), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let o = { doc: e, d: t, meta: Xl(n) }, l = [Ql(), Kl(), Yl()];
  l.forEach(({ before: a }) => a == null ? void 0 : a(o)), l.forEach(({ after: a }) => a == null ? void 0 : a(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
ce.subscribe(() => {
  let e = ce.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let o = t.get(n.doc) === "hidden", l = n.count !== 0;
    (l && !o || !l && o) && ce.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && ce.dispatch("TEARDOWN", n);
  }
});
function Jl(e, t, n) {
  let o = Gl(ce), l = g(() => {
    let a = e.value ? o.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return ae([e, t], ([a, r], [u], s) => {
    if (!a || !r)
      return;
    ce.dispatch("PUSH", a, n);
    let d = !1;
    s(() => {
      d || (ce.dispatch("POP", u != null ? u : a, n), d = !0);
    });
  }, { immediate: !0 }), l;
}
var Zl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Zl || {});
let qe = Symbol("DialogContext");
function Re(e) {
  let t = X(qe, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Re), n;
  }
  return t;
}
let Ae = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
I({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ae }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${G()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  var a;
  let r = y(!1);
  $(() => {
    r.value = !0;
  });
  let u = y(0), s = Ie(), d = g(() => e.open === Ae && s !== null ? (s.value & M.Open) === M.Open : e.open), i = y(null), f = y(null), m = g(() => fe(i));
  if (l({ el: i, $el: i }), !(e.open !== Ae || s !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === Ae ? void 0 : e.open}`);
  let p = g(() => r.value && d.value ? 0 : 1), v = g(() => p.value === 0), c = g(() => u.value > 1), b = X(qe, null) !== null, w = g(() => c.value ? "parent" : "leaf"), L = g(() => s !== null ? (s.value & M.Closing) === M.Closing : !1), O = g(() => b || L.value ? !1 : v.value), Q = g(() => {
    var R, D, V;
    return (V = Array.from((D = (R = m.value) == null ? void 0 : R.querySelectorAll("body > *")) != null ? D : []).find((H) => H.id === "headlessui-portal-root" ? !1 : H.contains(h(f)) && H instanceof HTMLElement)) != null ? V : null;
  });
  ct(Q, O);
  let z = g(() => c.value ? !0 : v.value), S = g(() => {
    var R, D, V;
    return (V = Array.from((D = (R = m.value) == null ? void 0 : R.querySelectorAll("[data-headlessui-portal]")) != null ? D : []).find((H) => H.contains(h(f)) && H instanceof HTMLElement)) != null ? V : null;
  });
  ct(S, z), Ul({ type: "Dialog", enabled: g(() => p.value === 0), element: i, onUpdate: (R, D) => {
    if (D === "Dialog")
      return B(R, { [We.Add]: () => u.value += 1, [We.Remove]: () => u.value -= 1 });
  } });
  let P = ql({ name: "DialogDescription", slot: g(() => ({ open: d.value })) }), E = y(null), x = { titleId: E, panelRef: y(null), dialogState: p, setTitleId(R) {
    E.value !== R && (E.value = R);
  }, close() {
    t("close", !1);
  } };
  J(qe, x);
  function A() {
    var R, D, V;
    return [...Array.from((D = (R = m.value) == null ? void 0 : R.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? D : []).filter((H) => !(H === document.body || H === document.head || !(H instanceof HTMLElement) || H.contains(h(f)) || x.panelRef.value && H.contains(x.panelRef.value))), (V = x.panelRef.value) != null ? V : i.value];
  }
  let N = g(() => !(!v.value || c.value));
  lt(() => A(), (R, D) => {
    x.close(), W(() => D == null ? void 0 : D.focus());
  }, N);
  let ue = g(() => !(c.value || p.value !== 0));
  kt((a = m.value) == null ? void 0 : a.defaultView, "keydown", (R) => {
    ue.value && (R.defaultPrevented || R.key === T.Escape && (R.preventDefault(), R.stopPropagation(), x.close()));
  });
  let Z = g(() => !(L.value || p.value !== 0 || b));
  return Jl(m, Z, (R) => {
    var D;
    return { containers: [...(D = R.containers) != null ? D : [], A] };
  }), U((R) => {
    if (p.value !== 0)
      return;
    let D = h(i);
    if (!D)
      return;
    let V = new ResizeObserver((H) => {
      for (let Ce of H) {
        let ie = Ce.target.getBoundingClientRect();
        ie.x === 0 && ie.y === 0 && ie.width === 0 && ie.height === 0 && x.close();
      }
    });
    V.observe(D), R(() => V.disconnect());
  }), () => {
    let { id: R, open: D, initialFocus: V, ...H } = e, Ce = { ...n, ref: i, id: R, role: "dialog", "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": E.value, "aria-describedby": P.value }, ie = { open: p.value === 0 };
    return _(Ue, { force: !0 }, () => [_($t, () => _(Hl, { target: i.value }, () => _(Ue, { force: !1 }, () => _(he, { initialFocus: V, containers: A, features: v.value ? B(w.value, { parent: he.features.RestoreFocus, leaf: he.features.All & ~he.features.FocusLock }) : he.features.None }, () => k({ ourProps: Ce, theirProps: H, slot: ie, attrs: n, slots: o, visible: p.value === 0, features: le.RenderStrategy | le.Static, name: "Dialog" }))))), _(Le, { features: Ee.Hidden, ref: f })]);
  };
} });
I({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${G()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Re("DialogOverlay");
  function l(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return k({ ourProps: { id: a, "aria-hidden": !0, onClick: l }, theirProps: r, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
I({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${G()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Re("DialogBackdrop"), a = y(null);
  return o({ el: a, $el: a }), $(() => {
    if (l.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...u } = e, s = { id: r, ref: a, "aria-hidden": !0 };
    return _(Ue, { force: !0 }, () => _($t, () => k({ ourProps: s, theirProps: { ...t, ...u }, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
I({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${G()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Re("DialogPanel");
  o({ el: l.panelRef, $el: l.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...u } = e, s = { id: r, ref: l.panelRef, onClick: a };
    return k({ ourProps: s, theirProps: u, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} });
I({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${G()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Re("DialogTitle");
  return $(() => {
    o.setTitleId(e.id), Y(() => o.setTitleId(null));
  }), () => {
    let { id: l, ...a } = e;
    return k({ ourProps: { id: l }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
var en = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(en || {}), tn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(tn || {});
function ln(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Ut = Symbol("MenuContext");
function je(e) {
  let t = X(Ut, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, je), n;
  }
  return t;
}
I({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let o = y(1), l = y(null), a = y(null), r = y([]), u = y(""), s = y(null), d = y(1);
  function i(m = (p) => p) {
    let p = s.value !== null ? r.value[s.value] : null, v = tt(m(r.value.slice()), (b) => h(b.dataRef.domRef)), c = p ? v.indexOf(p) : null;
    return c === -1 && (c = null), { items: v, activeItemIndex: c };
  }
  let f = { menuState: o, buttonRef: l, itemsRef: a, items: r, searchQuery: u, activeItemIndex: s, activationTrigger: d, closeMenu: () => {
    o.value = 1, s.value = null;
  }, openMenu: () => o.value = 0, goToItem(m, p, v) {
    let c = i(), b = wt(m === C.Specific ? { focus: C.Specific, id: p } : { focus: m }, { resolveItems: () => c.items, resolveActiveIndex: () => c.activeItemIndex, resolveId: (w) => w.id, resolveDisabled: (w) => w.dataRef.disabled });
    u.value = "", s.value = b, d.value = v != null ? v : 1, r.value = c.items;
  }, search(m) {
    let p = u.value !== "" ? 0 : 1;
    u.value += m.toLowerCase();
    let v = (s.value !== null ? r.value.slice(s.value + p).concat(r.value.slice(0, s.value + p)) : r.value).find((b) => b.dataRef.textValue.startsWith(u.value) && !b.dataRef.disabled), c = v ? r.value.indexOf(v) : -1;
    c === -1 || c === s.value || (s.value = c, d.value = 1);
  }, clearSearch() {
    u.value = "";
  }, registerItem(m, p) {
    let v = i((c) => [...c, { id: m, dataRef: p }]);
    r.value = v.items, s.value = v.activeItemIndex, d.value = 1;
  }, unregisterItem(m) {
    let p = i((v) => {
      let c = v.findIndex((b) => b.id === m);
      return c !== -1 && v.splice(c, 1), v;
    });
    r.value = p.items, s.value = p.activeItemIndex, d.value = 1;
  } };
  return lt([l, a], (m, p) => {
    var v;
    f.closeMenu(), et(p, Ze.Loose) || (m.preventDefault(), (v = h(l)) == null || v.focus());
  }, g(() => o.value === 0)), J(Ut, f), Je(g(() => B(o.value, { [0]: M.Open, [1]: M.Closed }))), () => {
    let m = { open: o.value === 0, close: f.closeMenu };
    return k({ ourProps: {}, theirProps: e, slot: m, slots: t, attrs: n, name: "Menu" });
  };
} });
I({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${G()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = je("MenuButton");
  o({ el: l.buttonRef, $el: l.buttonRef });
  function a(d) {
    switch (d.key) {
      case T.Space:
      case T.Enter:
      case T.ArrowDown:
        d.preventDefault(), d.stopPropagation(), l.openMenu(), W(() => {
          var i;
          (i = h(l.itemsRef)) == null || i.focus({ preventScroll: !0 }), l.goToItem(C.First);
        });
        break;
      case T.ArrowUp:
        d.preventDefault(), d.stopPropagation(), l.openMenu(), W(() => {
          var i;
          (i = h(l.itemsRef)) == null || i.focus({ preventScroll: !0 }), l.goToItem(C.Last);
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
      var i;
      return (i = h(l.buttonRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), l.openMenu(), ln(() => {
      var i;
      return (i = h(l.itemsRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
    })));
  }
  let s = St(g(() => ({ as: e.as, type: t.type })), l.buttonRef);
  return () => {
    var d;
    let i = { open: l.menuState.value === 0 }, { id: f, ...m } = e, p = { ref: l.buttonRef, id: f, type: s.value, "aria-haspopup": "menu", "aria-controls": (d = h(l.itemsRef)) == null ? void 0 : d.id, "aria-expanded": e.disabled ? void 0 : l.menuState.value === 0, onKeydown: a, onKeyup: r, onClick: u };
    return k({ ourProps: p, theirProps: m, slot: i, attrs: t, slots: n, name: "MenuButton" });
  };
} });
I({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-menu-items-${G()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = je("MenuItems"), a = y(null);
  o({ el: l.itemsRef, $el: l.itemsRef }), Ot({ container: g(() => h(l.itemsRef)), enabled: g(() => l.menuState.value === 0), accept(i) {
    return i.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : i.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(i) {
    i.setAttribute("role", "none");
  } });
  function r(i) {
    var f;
    switch (a.value && clearTimeout(a.value), i.key) {
      case T.Space:
        if (l.searchQuery.value !== "")
          return i.preventDefault(), i.stopPropagation(), l.search(i.key);
      case T.Enter:
        if (i.preventDefault(), i.stopPropagation(), l.activeItemIndex.value !== null) {
          let m = l.items.value[l.activeItemIndex.value];
          (f = h(m.dataRef.domRef)) == null || f.click();
        }
        l.closeMenu(), It(h(l.buttonRef));
        break;
      case T.ArrowDown:
        return i.preventDefault(), i.stopPropagation(), l.goToItem(C.Next);
      case T.ArrowUp:
        return i.preventDefault(), i.stopPropagation(), l.goToItem(C.Previous);
      case T.Home:
      case T.PageUp:
        return i.preventDefault(), i.stopPropagation(), l.goToItem(C.First);
      case T.End:
      case T.PageDown:
        return i.preventDefault(), i.stopPropagation(), l.goToItem(C.Last);
      case T.Escape:
        i.preventDefault(), i.stopPropagation(), l.closeMenu(), W(() => {
          var m;
          return (m = h(l.buttonRef)) == null ? void 0 : m.focus({ preventScroll: !0 });
        });
        break;
      case T.Tab:
        i.preventDefault(), i.stopPropagation(), l.closeMenu(), W(() => Pl(h(l.buttonRef), i.shiftKey ? te.Previous : te.Next));
        break;
      default:
        i.key.length === 1 && (l.search(i.key), a.value = setTimeout(() => l.clearSearch(), 350));
        break;
    }
  }
  function u(i) {
    switch (i.key) {
      case T.Space:
        i.preventDefault();
        break;
    }
  }
  let s = Ie(), d = g(() => s !== null ? (s.value & M.Open) === M.Open : l.menuState.value === 0);
  return () => {
    var i, f;
    let m = { open: l.menuState.value === 0 }, { id: p, ...v } = e, c = { "aria-activedescendant": l.activeItemIndex.value === null || (i = l.items.value[l.activeItemIndex.value]) == null ? void 0 : i.id, "aria-labelledby": (f = h(l.buttonRef)) == null ? void 0 : f.id, id: p, onKeydown: r, onKeyup: u, role: "menu", tabIndex: 0, ref: l.itemsRef };
    return k({ ourProps: c, theirProps: v, slot: m, attrs: t, slots: n, features: le.RenderStrategy | le.Static, visible: d.value, name: "MenuItems" });
  };
} });
I({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-menu-item-${G()}` } }, setup(e, { slots: t, attrs: n, expose: o }) {
  let l = je("MenuItem"), a = y(null);
  o({ el: a, $el: a });
  let r = g(() => l.activeItemIndex.value !== null ? l.items.value[l.activeItemIndex.value].id === e.id : !1), u = g(() => ({ disabled: e.disabled, textValue: "", domRef: a }));
  $(() => {
    var v, c;
    let b = (c = (v = h(a)) == null ? void 0 : v.textContent) == null ? void 0 : c.toLowerCase().trim();
    b !== void 0 && (u.value.textValue = b);
  }), $(() => l.registerItem(e.id, u)), Y(() => l.unregisterItem(e.id)), U(() => {
    l.menuState.value === 0 && r.value && l.activationTrigger.value !== 0 && W(() => {
      var v, c;
      return (c = (v = h(a)) == null ? void 0 : v.scrollIntoView) == null ? void 0 : c.call(v, { block: "nearest" });
    });
  });
  function s(v) {
    if (e.disabled)
      return v.preventDefault();
    l.closeMenu(), It(h(l.buttonRef));
  }
  function d() {
    if (e.disabled)
      return l.goToItem(C.Nothing);
    l.goToItem(C.Specific, e.id);
  }
  let i = At();
  function f(v) {
    i.update(v);
  }
  function m(v) {
    i.wasMoved(v) && (e.disabled || r.value || l.goToItem(C.Specific, e.id, 0));
  }
  function p(v) {
    i.wasMoved(v) && (e.disabled || r.value && l.goToItem(C.Nothing));
  }
  return () => {
    let { disabled: v } = e, c = { active: r.value, disabled: v, close: l.closeMenu }, { id: b, ...w } = e;
    return k({ ourProps: { id: b, ref: a, role: "menuitem", tabIndex: v === !0 ? void 0 : -1, "aria-disabled": v === !0 ? !0 : void 0, disabled: void 0, onClick: s, onFocus: d, onPointerenter: f, onMouseenter: f, onPointermove: m, onMousemove: m, onPointerleave: p, onMouseleave: p }, theirProps: { ...n, ...w }, slot: c, attrs: n, slots: t, name: "MenuItem" });
  };
} });
function nn(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Ve(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function De(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Ge = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Ge || {});
function on(e, t) {
  let n = Fe();
  if (!e)
    return n.dispose;
  let { transitionDuration: o, transitionDelay: l } = getComputedStyle(e), [a, r] = [o, l].map((u) => {
    let [s = 0] = u.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, i) => i - d);
    return s;
  });
  return a !== 0 ? n.setTimeout(() => t("finished"), a + r) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function pt(e, t, n, o, l, a) {
  let r = Fe(), u = a !== void 0 ? nn(a) : () => {
  };
  return De(e, ...l), Ve(e, ...t, ...n), r.nextFrame(() => {
    De(e, ...n), Ve(e, ...o), r.add(on(e, (s) => (De(e, ...o, ...t), Ve(e, ...l), u(s))));
  }), r.add(() => De(e, ...t, ...n, ...o, ...l)), r.add(() => u("cancelled")), r.dispose;
}
function se(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let nt = Symbol("TransitionContext");
var an = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(an || {});
function rn() {
  return X(nt, null) !== null;
}
function un() {
  let e = X(nt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function sn() {
  let e = X(ot, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let ot = Symbol("NestingContext");
function Ne(e) {
  return "children" in e ? Ne(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Wt(e) {
  let t = y([]), n = y(!1);
  $(() => n.value = !0), Y(() => n.value = !1);
  function o(a, r = ne.Hidden) {
    let u = t.value.findIndex(({ id: s }) => s === a);
    u !== -1 && (B(r, { [ne.Unmount]() {
      t.value.splice(u, 1);
    }, [ne.Hidden]() {
      t.value[u].state = "hidden";
    } }), !Ne(t) && n.value && (e == null || e()));
  }
  function l(a) {
    let r = t.value.find(({ id: u }) => u === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => o(a, ne.Unmount);
  }
  return { children: t, register: l, unregister: o };
}
let qt = le.RenderStrategy, dn = I({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  let a = y(0);
  function r() {
    a.value |= M.Opening, t("beforeEnter");
  }
  function u() {
    a.value &= ~M.Opening, t("afterEnter");
  }
  function s() {
    a.value |= M.Closing, t("beforeLeave");
  }
  function d() {
    a.value &= ~M.Closing, t("afterLeave");
  }
  if (!rn() && hl())
    return () => _(pn, { ...e, onBeforeEnter: r, onAfterEnter: u, onBeforeLeave: s, onAfterLeave: d }, o);
  let i = y(null), f = y("visible"), m = g(() => e.unmount ? ne.Unmount : ne.Hidden);
  l({ el: i, $el: i });
  let { show: p, appear: v } = un(), { register: c, unregister: b } = sn(), w = { value: !0 }, L = G(), O = { value: !1 }, Q = Wt(() => {
    !O.value && f.value !== "hidden" && (f.value = "hidden", b(L), d());
  });
  $(() => {
    let Z = c(L);
    Y(Z);
  }), U(() => {
    if (m.value === ne.Hidden && L) {
      if (p && f.value !== "visible") {
        f.value = "visible";
        return;
      }
      B(f.value, { hidden: () => b(L), visible: () => c(L) });
    }
  });
  let z = se(e.enter), S = se(e.enterFrom), P = se(e.enterTo), E = se(e.entered), x = se(e.leave), A = se(e.leaveFrom), N = se(e.leaveTo);
  $(() => {
    U(() => {
      if (f.value === "visible") {
        let Z = h(i);
        if (Z instanceof Comment && Z.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function ue(Z) {
    let R = w.value && !v.value, D = h(i);
    !D || !(D instanceof HTMLElement) || R || (O.value = !0, p.value && r(), p.value || s(), Z(p.value ? pt(D, z, S, P, E, (V) => {
      O.value = !1, V === Ge.Finished && u();
    }) : pt(D, x, A, N, E, (V) => {
      O.value = !1, V === Ge.Finished && (Ne(Q) || (f.value = "hidden", b(L), d()));
    })));
  }
  return $(() => {
    ae([p], (Z, R, D) => {
      ue(D), w.value = !1;
    }, { immediate: !0 });
  }), J(ot, Q), Je(g(() => B(f.value, { visible: M.Open, hidden: M.Closed }) | a.value)), () => {
    let { appear: Z, show: R, enter: D, enterFrom: V, enterTo: H, entered: Ce, leave: ie, leaveFrom: zn, leaveTo: Kn, ...at } = e, Qt = { ref: i }, Yt = { ...at, ...v && p && Te.isServer ? { class: Qe([n.class, at.class, ...z, ...S]) } : {} };
    return k({ theirProps: Yt, ourProps: Qt, slot: {}, slots: o, attrs: n, features: qt, visible: f.value === "visible", name: "TransitionChild" });
  };
} }), cn = dn, pn = I({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o }) {
  let l = Ie(), a = g(() => e.show === null && l !== null ? (l.value & M.Open) === M.Open : e.show);
  U(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = y(a.value ? "visible" : "hidden"), u = Wt(() => {
    r.value = "hidden";
  }), s = y(!0), d = { show: a, appear: g(() => e.appear || !s.value) };
  return $(() => {
    U(() => {
      s.value = !1, a.value ? r.value = "visible" : Ne(u) || (r.value = "hidden");
    });
  }), J(ot, u), J(nt, d), () => {
    let i = ke(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return k({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [_(cn, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...f, ...i }, o.default)] }, attrs: {}, features: qt, visible: r.value === "visible", name: "Transition" });
  };
} });
var vt;
const vn = typeof window < "u";
vn && ((vt = window == null ? void 0 : window.navigator) == null ? void 0 : vt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function fn(e) {
  return e;
}
const ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ke = "__vueuse_ssr_handlers__";
ze[Ke] = ze[Ke] || {};
ze[Ke];
var ft;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ft || (ft = {}));
var mn = Object.defineProperty, mt = Object.getOwnPropertySymbols, bn = Object.prototype.hasOwnProperty, gn = Object.prototype.propertyIsEnumerable, bt = (e, t, n) => t in e ? mn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, hn = (e, t) => {
  for (var n in t || (t = {}))
    bn.call(t, n) && bt(e, n, t[n]);
  if (mt)
    for (var n of mt(t))
      gn.call(t, n) && bt(e, n, t[n]);
  return e;
};
const yn = {
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
hn({
  linear: fn
}, yn);
const wn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
function xn(e, t) {
  return g({
    get: () => e.modelValue,
    set: (n) => t("update:modelValue", n)
  });
}
const Sn = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, On = { name: "Error" }, Gt = /* @__PURE__ */ I({
  ...On,
  props: {
    error: null
  },
  setup(e) {
    return (t, n) => e.error ? (j(), K("div", Sn, [
      pe(t.$slots, "default", {}, () => [
        Ye(Pe(e.error), 1)
      ])
    ])) : me("", !0);
  }
}), En = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, Pn = {
  name: "Base",
  inheritAttrs: !1
}, In = /* @__PURE__ */ I({
  ...Pn,
  props: {
    description: null,
    error: null,
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, n) => (j(), K("div", null, [
      ee("div", {
        class: Qe(["mt-1 rounded-md", { "shadow-sm": e.shadow }])
      }, [
        pe(t.$slots, "default")
      ], 2),
      e.description ? (j(), K("p", En, Pe(e.description), 1)) : me("", !0),
      e.error ? (j(), re(Gt, {
        key: 1,
        error: e.error
      }, null, 8, ["error"])) : me("", !0)
    ]));
  }
}), Tn = { name: "Actions" }, Rn = { class: "mt-8 border-t border-gray-200 pt-5" }, Cn = { class: "flex justify-end" }, An = { class: "inline-flex rounded-md shadow-sm" };
function Dn(e, t, n, o, l, a) {
  return j(), K("div", Rn, [
    ee("div", Cn, [
      ee("span", An, [
        pe(e.$slots, "default")
      ])
    ])
  ]);
}
const Ln = /* @__PURE__ */ wn(Tn, [["render", Dn]]), kn = { class: "relative flex items-start" }, Fn = { class: "flex h-5 items-center" }, jn = ["id", "value"], Nn = { class: "ml-3" }, Mn = ["for"], Bn = { name: "Checkbox" }, $n = /* @__PURE__ */ I({
  ...Bn,
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
    const n = xn(e, t);
    return (o, l) => (j(), re(In, be(o.$props, { shadow: !1 }), {
      default: Se(() => [
        ee("div", kn, [
          ee("div", Fn, [
            He(ee("input", be({
              id: e.id,
              "onUpdate:modelValue": l[0] || (l[0] = (a) => gt(n) ? n.value = a : null),
              value: e.value,
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            }, o.$attrs), null, 16, jn), [
              [tl, q(n)]
            ]),
            ee("div", Nn, [
              ee("label", {
                for: e.id,
                class: "block text-sm font-medium capitalize leading-5 text-gray-700"
              }, Pe(e.label), 9, Mn)
            ])
          ])
        ])
      ]),
      _: 1
    }, 16));
  }
}), Vn = ["for"], Hn = { name: "Label" }, _n = /* @__PURE__ */ I({
  ...Hn,
  props: {
    for: null
  },
  setup(e) {
    const t = e;
    return (n, o) => (j(), K("label", {
      for: t.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      pe(n.$slots, "default")
    ], 8, Vn));
  }
}), zt = /* @__PURE__ */ I({
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
      }), s = t.element.definition.component.props;
      return Object.fromEntries(u.filter(([d]) => s.hasOwnProperty(d)));
    }, o = () => {
      var s;
      return ((s = t.element.definition.label) != null ? s : t.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }, l = !!t.element.definition.schema, a = (r = t.element.definition.showLabel) != null ? r : !l;
    return (u, s) => (j(), K("div", null, [
      q(a) ? (j(), re(q(_n), {
        key: 0,
        for: e.element.name
      }, {
        default: Se(() => [
          Ye(Pe(o()), 1)
        ]),
        _: 1
      }, 8, ["for"])) : me("", !0),
      (j(), re(nl(e.element.definition.component), be({
        key: e.element.name,
        modelValue: e.form[e.element.name],
        "onUpdate:modelValue": s[0] || (s[0] = (d) => e.form[e.element.name] = d)
      }, n()), null, 16, ["modelValue"])),
      Oe(q(Gt), {
        error: e.form.errors[e.element.name]
      }, null, 8, ["error"])
    ]));
  }
}), Un = { class: "mx-auto mt-6 max-w-md space-y-6" }, Xn = /* @__PURE__ */ I({
  __name: "FormBuilder",
  props: {
    schema: null,
    submit: { default: "Save" }
  },
  setup(e) {
    return (t, n) => (j(), K("div", Un, [
      (j(!0), K(ve, null, Xe(e.schema.elements, (o, l) => (j(), re(zt, {
        key: l,
        element: o,
        form: e.schema.form
      }, null, 8, ["element", "form"]))), 128)),
      Oe(q(Ln), null, {
        default: Se(() => [
          pe(t.$slots, "actions", {
            form: e.schema.form
          }, () => [
            Oe(q(pl), {
              loading: e.schema.form.processing,
              type: "submit"
            }, {
              default: Se(() => [
                Ye(Pe(e.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 3
      })
    ]));
  }
}), Wn = /* @__PURE__ */ I({
  __name: "CheckboxGroup",
  props: {
    modelValue: null,
    items: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = g({
      get: () => n.modelValue,
      set: (l) => {
        t("update:modelValue", l);
      }
    });
    return (l, a) => (j(!0), K(ve, null, Xe(e.items, (r, u) => {
      var s, d, i;
      return j(), re(q($n), {
        id: (s = r.label) != null ? s : r,
        key: u,
        modelValue: q(o),
        "onUpdate:modelValue": a[0] || (a[0] = (f) => gt(o) ? o.value = f : null),
        value: (d = r.value) != null ? d : r,
        label: (i = r.label) != null ? i : r
      }, null, 8, ["id", "modelValue", "value", "label"]);
    }), 128));
  }
}), qn = (e) => Object.keys(e).reduce((t, n) => {
  var o;
  return t[n] = (o = e[n].value) != null ? o : null, t;
}, {}), Kt = (e) => Object.entries(e).map(([t, n]) => {
  const o = n.hasOwnProperty("setup") ? { component: n } : n;
  return {
    name: t,
    definition: o
  };
});
function Jn(e) {
  const t = al(
    Object.keys(e).reduce((n, o) => {
      var l, a;
      return e[o].schema ? { ...n, ...qn(e[o].schema) } : e[o].component === Wn ? (n[o] = (l = e[o].checked) != null ? l : [], n) : (n[o] = (a = e[o].value) != null ? a : null, n);
    }, {})
  );
  return {
    elements: Kt(e),
    form: t
  };
}
const Gn = { class: "grid grid-flow-col gap-x-4 gap-y-6" }, Zn = /* @__PURE__ */ I({
  __name: "Grid",
  props: {
    schema: null,
    form: null
  },
  setup(e) {
    const n = Kt(e.schema);
    return (o, l) => (j(), K("div", Gn, [
      (j(!0), K(ve, null, Xe(q(n), (a, r) => (j(), re(zt, be({
        key: r,
        element: a,
        form: e.form
      }, o.$attrs), null, 16, ["element", "form"]))), 128))
    ]));
  }
});
export {
  Wn as CheckboxGroup,
  Xn as FormBuilder,
  Zn as Grid,
  Jn as useSchema
};
