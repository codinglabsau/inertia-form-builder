import { defineComponent as T, ref as y, computed as g, toRaw as k, provide as J, onMounted as B, watch as ae, h as _, Fragment as re, watchEffect as U, onUnmounted as Y, nextTick as W, inject as X, Teleport as Xt, reactive as Jt, unref as q, normalizeClass as bt, useAttrs as Zt, openBlock as V, createElementBlock as K, createCommentVNode as xe, createBlock as ve, mergeProps as we, withCtx as Fe, renderSlot as fe, withDirectives as He, createVNode as Se, vShow as at, cloneVNode as el, createTextVNode as Qe, toDisplayString as Ae, createElementVNode as le, isRef as gt, vModelCheckbox as tl, shallowRef as ll, resolveDynamicComponent as nl, renderList as Ye } from "vue";
import { Link as ol, useForm as al } from "@inertiajs/vue3";
const rl = /* @__PURE__ */ le("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ul = /* @__PURE__ */ le("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), il = [
  rl,
  ul
], sl = { name: "Spinner" }, rt = /* @__PURE__ */ T({
  ...sl,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (t, n) => (V(), K("svg", {
      class: bt(["h-5 w-5 animate-spin", e.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, il, 2));
  }
}), dl = ["disabled", "type"], cl = { name: "PrimaryButton" }, vl = /* @__PURE__ */ T({
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
    return (l, a) => (V(), K(re, null, [
      q(n) ? xe("", !0) : (V(), ve(q(ol), we({
        key: 0,
        class: o,
        disabled: e.loading
      }, q(t)), {
        default: Fe(() => [
          fe(l.$slots, "default"),
          He(Se(rt, { class: "ml-3" }, null, 512), [
            [at, e.loading]
          ])
        ]),
        _: 3
      }, 16, ["disabled"])),
      q(n) ? (V(), K("button", we({
        key: 1,
        class: o,
        disabled: e.loading,
        type: e.type
      }, q(t)), [
        fe(l.$slots, "default"),
        He(Se(rt, { class: "ml-3" }, null, 512), [
          [at, e.loading]
        ])
      ], 16, dl)) : xe("", !0)
    ], 64));
  }
});
function N(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, N), o;
}
var te = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(te || {}), ne = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ne || {});
function L({ visible: e = !0, features: t = 0, ourProps: n, theirProps: o, ...l }) {
  var a;
  let r = yt(o, n), u = Object.assign(l, { props: r });
  if (e || t & 2 && r.static)
    return Ne(u);
  if (t & 1) {
    let s = (a = r.unmount) == null || a ? 0 : 1;
    return N(s, { [0]() {
      return null;
    }, [1]() {
      return Ne({ ...l, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ne(u);
}
function Ne({ props: e, attrs: t, slots: n, slot: o, name: l }) {
  var a, r;
  let { as: u, ...s } = Le(e, ["unmount", "static"]), d = (a = n.default) == null ? void 0 : a.call(n, o), i = {};
  if (o) {
    let f = !1, m = [];
    for (let [v, p] of Object.entries(o))
      typeof p == "boolean" && (f = !0), p === !0 && m.push(v);
    f && (i["data-headlessui-state"] = m.join(" "));
  }
  if (u === "template") {
    if (d = ht(d != null ? d : []), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [f, ...m] = d != null ? d : [];
      if (!fl(f) || m.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).map((c) => c.trim()).filter((c, b, x) => x.indexOf(c) === b).sort((c, b) => c.localeCompare(b)).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
      let v = yt((r = f.props) != null ? r : {}, s), p = el(f, v);
      for (let c in v)
        c.startsWith("on") && (p.props || (p.props = {}), p.props[c] = v[c]);
      return p;
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return _(u, Object.assign({}, s, i), { default: () => d });
}
function ht(e) {
  return e.flatMap((t) => t.type === re ? ht(t.children) : [t]);
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
function pl(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function Le(e, t = []) {
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
function z() {
  return bl();
}
var I = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(I || {});
function gl(e) {
  throw new Error("Unexpected object: " + e);
}
var C = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(C || {});
function xt(e, t) {
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
let wt = Symbol("Context");
var M = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(M || {});
function hl() {
  return Ee() !== null;
}
function Ee() {
  return X(wt, null);
}
function Xe(e) {
  J(wt, e);
}
function ut(e, t) {
  if (e)
    return e;
  let n = t != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function St(e, t) {
  let n = y(ut(e.value.type, e.value.as));
  return B(() => {
    n.value = ut(e.value.type, e.value.as);
  }), U(() => {
    var o;
    n.value || h(t) && h(t) instanceof HTMLButtonElement && !((o = h(t)) != null && o.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var yl = Object.defineProperty, xl = (e, t, n) => t in e ? yl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, it = (e, t, n) => (xl(e, typeof t != "symbol" ? t + "" : t, n), n);
class wl {
  constructor() {
    it(this, "current", this.detect()), it(this, "currentId", 0);
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
let Pe = new wl();
function pe(e) {
  if (Pe.isServer)
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
    let a = pe(e);
    if (!a)
      return;
    let r = Object.assign((s) => t(s), { acceptNode: t }), u = a.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; u.nextNode(); )
      n(u.currentNode);
  });
}
let _e = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ee = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ee || {}), Et = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Et || {}), Sl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Sl || {});
function Pt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(_e)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Je = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Je || {});
function Ze(e, t = 0) {
  var n;
  return e === ((n = pe(e)) == null ? void 0 : n.body) ? !1 : N(t, { [0]() {
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
  let t = pe(e);
  W(() => {
    t && !Ze(t.activeElement, 0) && oe(e);
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
function et(e, t = (n) => n) {
  return e.slice().sort((n, o) => {
    let l = t(n), a = t(o);
    if (l === null || a === null)
      return 0;
    let r = l.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Pl(e, t) {
  return ye(Pt(), t, { relativeTo: e });
}
function ye(e, t, { sorted: n = !0, relativeTo: o = null, skipElements: l = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, u = Array.isArray(e) ? n ? et(e) : e : Pt(e);
  l.length > 0 && u.length > 1 && (u = u.filter((p) => !l.includes(p))), o = o != null ? o : r.activeElement;
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
  })(), i = t & 32 ? { preventScroll: !0 } : {}, f = 0, m = u.length, v;
  do {
    if (f >= m || f + m <= 0)
      return 0;
    let p = d + f;
    if (t & 16)
      p = (p + m) % m;
    else {
      if (p < 0)
        return 3;
      if (p >= m)
        return 1;
    }
    v = u[p], v == null || v.focus(i), f += s;
  } while (v !== r.activeElement);
  return t & 6 && El(v) && v.select(), v.hasAttribute("tabindex") || v.setAttribute("tabindex", "0"), 2;
}
function Be(e, t, n) {
  Pe.isServer || U((o) => {
    document.addEventListener(e, t, n), o(() => document.removeEventListener(e, t, n));
  });
}
function tt(e, t, n = g(() => !0)) {
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
    return !Ze(u, Je.Loose) && u.tabIndex !== -1 && a.preventDefault(), t(a, u);
  }
  let l = y(null);
  Be("mousedown", (a) => {
    var r, u;
    n.value && (l.value = ((u = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : u[0]) || a.target);
  }, !0), Be("click", (a) => {
    l.value && (o(a, () => l.value), l.value = null);
  }, !0), Be("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Oe = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Oe || {});
let De = T({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: o, ...l } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return L({ ourProps: a, theirProps: l, slot: {}, attrs: n, slots: t, name: "Hidden" });
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
function st(e) {
  return [e.screenX, e.screenY];
}
function Ft() {
  let e = y([-1, -1]);
  return { wasMoved(t) {
    let n = st(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = st(t);
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
var Fl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Fl || {}), Dl = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Dl || {}), Al = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Al || {});
let At = Symbol("ComboboxContext");
function me(e) {
  let t = X(At, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, me), n;
  }
  return t;
}
T({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Cl }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: o }) {
  let l = y(1), a = y(null), r = y(null), u = y(null), s = y(null), d = y({ static: !1, hold: !1 }), i = y([]), f = y(null), m = y(1), v = y(!1);
  function p(S = (P) => P) {
    let P = f.value !== null ? i.value[f.value] : null, E = et(S(i.value.slice()), (F) => h(F.dataRef.domRef)), w = P ? E.indexOf(P) : null;
    return w === -1 && (w = null), { options: E, activeOptionIndex: w };
  }
  let c = g(() => e.multiple ? 1 : 0), b = g(() => e.nullable), [x, A] = Il(g(() => e.modelValue === void 0 ? N(c.value, { [1]: [], [0]: void 0 }) : e.modelValue), (S) => o("update:modelValue", S), g(() => e.defaultValue)), O = { comboboxState: l, value: x, mode: c, compare(S, P) {
    if (typeof e.by == "string") {
      let E = e.by;
      return (S == null ? void 0 : S[E]) === (P == null ? void 0 : P[E]);
    }
    return e.by(S, P);
  }, defaultValue: g(() => e.defaultValue), nullable: b, inputRef: r, labelRef: a, buttonRef: u, optionsRef: s, disabled: g(() => e.disabled), options: i, change(S) {
    A(S);
  }, activeOptionIndex: g(() => {
    if (v.value && f.value === null && i.value.length > 0) {
      let S = i.value.findIndex((P) => !P.dataRef.disabled);
      if (S !== -1)
        return S;
    }
    return f.value;
  }), activationTrigger: m, optionsPropsRef: d, closeCombobox() {
    v.value = !1, !e.disabled && l.value !== 1 && (l.value = 1, f.value = null);
  }, openCombobox() {
    if (v.value = !0, e.disabled || l.value === 0)
      return;
    let S = i.value.findIndex((P) => {
      let E = k(P.dataRef.value);
      return N(c.value, { [0]: () => O.compare(k(O.value.value), k(E)), [1]: () => k(O.value.value).some((w) => O.compare(k(w), k(E))) });
    });
    S !== -1 && (f.value = S), l.value = 0;
  }, goToOption(S, P, E) {
    if (v.value = !1, e.disabled || s.value && !d.value.static && l.value === 1)
      return;
    let w = p();
    if (w.activeOptionIndex === null) {
      let j = w.options.findIndex((ue) => !ue.dataRef.disabled);
      j !== -1 && (w.activeOptionIndex = j);
    }
    let F = xt(S === C.Specific ? { focus: C.Specific, id: P } : { focus: S }, { resolveItems: () => w.options, resolveActiveIndex: () => w.activeOptionIndex, resolveId: (j) => j.id, resolveDisabled: (j) => j.dataRef.disabled });
    f.value = F, m.value = E != null ? E : 1, i.value = w.options;
  }, selectOption(S) {
    let P = i.value.find((w) => w.id === S);
    if (!P)
      return;
    let { dataRef: E } = P;
    A(N(c.value, { [0]: () => E.value, [1]: () => {
      let w = k(O.value.value).slice(), F = k(E.value), j = w.findIndex((ue) => O.compare(F, k(ue)));
      return j === -1 ? w.push(F) : w.splice(j, 1), w;
    } }));
  }, selectActiveOption() {
    if (O.activeOptionIndex.value === null)
      return;
    let { dataRef: S, id: P } = i.value[O.activeOptionIndex.value];
    A(N(c.value, { [0]: () => S.value, [1]: () => {
      let E = k(O.value.value).slice(), w = k(S.value), F = E.findIndex((j) => O.compare(w, k(j)));
      return F === -1 ? E.push(w) : E.splice(F, 1), E;
    } })), O.goToOption(C.Specific, P);
  }, registerOption(S, P) {
    let E = { id: S, dataRef: P }, w = p((F) => [...F, E]);
    if (f.value === null) {
      let F = P.value.value;
      N(c.value, { [0]: () => O.compare(k(O.value.value), k(F)), [1]: () => k(O.value.value).some((j) => O.compare(k(j), k(F))) }) && (w.activeOptionIndex = w.options.indexOf(E));
    }
    i.value = w.options, f.value = w.activeOptionIndex, m.value = 1;
  }, unregisterOption(S) {
    var P;
    O.activeOptionIndex.value !== null && ((P = O.options.value[O.activeOptionIndex.value]) == null ? void 0 : P.id) === S && (v.value = !0);
    let E = p((w) => {
      let F = w.findIndex((j) => j.id === S);
      return F !== -1 && w.splice(F, 1), w;
    });
    i.value = E.options, f.value = E.activeOptionIndex, m.value = 1;
  } };
  tt([r, u, s], () => O.closeCombobox(), g(() => l.value === 0)), J(At, O), Xe(g(() => N(l.value, { [0]: M.Open, [1]: M.Closed })));
  let Q = g(() => O.activeOptionIndex.value === null ? null : i.value[O.activeOptionIndex.value].dataRef.value), G = g(() => {
    var S;
    return (S = h(r)) == null ? void 0 : S.closest("form");
  });
  return B(() => {
    ae([G], () => {
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
    let { name: S, disabled: P, ...E } = e, w = { open: l.value === 0, disabled: P, activeIndex: O.activeOptionIndex.value, activeOption: Q.value, value: x.value };
    return _(re, [...S != null && x.value != null ? Tt({ [S]: x.value }).map(([F, j]) => _(De, pl({ features: Oe.Hidden, key: F, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: F, value: j }))) : [], L({ theirProps: { ...n, ...Le(E, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: w, slots: t, attrs: n, name: "Combobox" })]);
  };
} });
T({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${z()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = me("ComboboxLabel");
  function l() {
    var a;
    (a = h(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: r, ...u } = e, s = { id: r, ref: o.labelRef, onClick: l };
    return L({ ourProps: s, theirProps: u, slot: a, attrs: t, slots: n, name: "ComboboxLabel" });
  };
} });
T({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${z()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = me("ComboboxButton");
  o({ el: l.buttonRef, $el: l.buttonRef });
  function a(s) {
    l.disabled.value || (l.comboboxState.value === 0 ? l.closeCombobox() : (s.preventDefault(), l.openCombobox()), W(() => {
      var d;
      return (d = h(l.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function r(s) {
    switch (s.key) {
      case I.ArrowDown:
        s.preventDefault(), s.stopPropagation(), l.comboboxState.value === 1 && l.openCombobox(), W(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case I.ArrowUp:
        s.preventDefault(), s.stopPropagation(), l.comboboxState.value === 1 && (l.openCombobox(), W(() => {
          l.value.value || l.goToOption(C.Last);
        })), W(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case I.Escape:
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
    let i = { open: l.comboboxState.value === 0, disabled: l.disabled.value, value: l.value.value }, { id: f, ...m } = e, v = { ref: l.buttonRef, id: f, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (s = h(l.optionsRef)) == null ? void 0 : s.id, "aria-expanded": l.disabled.value ? void 0 : l.comboboxState.value === 0, "aria-labelledby": l.labelRef.value ? [(d = h(l.labelRef)) == null ? void 0 : d.id, f].join(" ") : void 0, disabled: l.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return L({ ourProps: v, theirProps: m, slot: i, attrs: t, slots: n, name: "ComboboxButton" });
  };
} });
T({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${z()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  let a = me("ComboboxInput"), r = { value: !1 };
  l({ el: a.inputRef, $el: a.inputRef });
  let u = g(() => {
    var c;
    let b = a.value.value;
    return h(a.inputRef) ? typeof e.displayValue < "u" && b !== void 0 ? (c = e.displayValue(b)) != null ? c : "" : typeof b == "string" ? b : "" : "";
  });
  B(() => {
    ae([u, a.comboboxState], ([c, b], [x, A]) => {
      if (r.value)
        return;
      let O = h(a.inputRef);
      O && (A === 0 && b === 1 || c !== x) && (O.value = c);
    }, { immediate: !0 }), ae([a.comboboxState], ([c], [b]) => {
      if (c === 0 && b === 1) {
        let x = h(a.inputRef);
        if (!x)
          return;
        let A = x.value, { selectionStart: O, selectionEnd: Q, selectionDirection: G } = x;
        x.value = "", x.value = A, G !== null ? x.setSelectionRange(O, Q, G) : x.setSelectionRange(O, Q);
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
      case I.Backspace:
      case I.Delete:
        if (a.mode.value !== 0 || !a.nullable.value)
          return;
        let b = c.currentTarget;
        requestAnimationFrame(() => {
          if (b.value === "") {
            a.change(null);
            let x = h(a.optionsRef);
            x && (x.scrollTop = 0), a.goToOption(C.Nothing);
          }
        });
        break;
      case I.Enter:
        if (r.value = !1, a.comboboxState.value !== 0 || s.value)
          return;
        if (c.preventDefault(), c.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case I.ArrowDown:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), N(a.comboboxState.value, { [0]: () => a.goToOption(C.Next), [1]: () => a.openCombobox() });
      case I.ArrowUp:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), N(a.comboboxState.value, { [0]: () => a.goToOption(C.Previous), [1]: () => {
          a.openCombobox(), W(() => {
            a.value.value || a.goToOption(C.Last);
          });
        } });
      case I.Home:
        if (c.shiftKey)
          break;
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(C.First);
      case I.PageUp:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(C.First);
      case I.End:
        if (c.shiftKey)
          break;
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(C.Last);
      case I.PageDown:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(C.Last);
      case I.Escape:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        c.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && c.stopPropagation(), a.closeCombobox();
        break;
      case I.Tab:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        a.mode.value === 0 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function m(c) {
    a.openCombobox(), t("change", c);
  }
  function v() {
    r.value = !1;
  }
  let p = g(() => {
    var c, b, x, A;
    return (A = (x = (b = e.defaultValue) != null ? b : a.defaultValue.value !== void 0 ? (c = e.displayValue) == null ? void 0 : c.call(e, a.defaultValue.value) : null) != null ? x : a.defaultValue.value) != null ? A : "";
  });
  return () => {
    var c, b, x, A, O, Q;
    let G = { open: a.comboboxState.value === 0 }, { id: S, displayValue: P, onChange: E, ...w } = e, F = { "aria-controls": (c = a.optionsRef.value) == null ? void 0 : c.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (b = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : b.id, "aria-labelledby": (O = (x = h(a.labelRef)) == null ? void 0 : x.id) != null ? O : (A = h(a.buttonRef)) == null ? void 0 : A.id, "aria-autocomplete": "list", id: S, onCompositionstart: d, onCompositionend: i, onKeydown: f, onInput: m, onBlur: v, role: "combobox", type: (Q = n.type) != null ? Q : "text", tabIndex: 0, ref: a.inputRef, defaultValue: p.value };
    return L({ ourProps: F, theirProps: w, slot: G, attrs: n, slots: o, features: te.RenderStrategy | te.Static, name: "ComboboxInput" });
  };
} });
T({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = me("ComboboxOptions"), a = `headlessui-combobox-options-${z()}`;
  o({ el: l.optionsRef, $el: l.optionsRef }), U(() => {
    l.optionsPropsRef.value.static = e.static;
  }), U(() => {
    l.optionsPropsRef.value.hold = e.hold;
  });
  let r = Ee(), u = g(() => r !== null ? (r.value & M.Open) === M.Open : l.comboboxState.value === 0);
  return Ot({ container: g(() => h(l.optionsRef)), enabled: g(() => l.comboboxState.value === 0), accept(s) {
    return s.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : s.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s) {
    s.setAttribute("role", "none");
  } }), () => {
    var s, d, i;
    let f = { open: l.comboboxState.value === 0 }, m = { "aria-labelledby": (i = (s = h(l.labelRef)) == null ? void 0 : s.id) != null ? i : (d = h(l.buttonRef)) == null ? void 0 : d.id, id: a, ref: l.optionsRef, role: "listbox", "aria-multiselectable": l.mode.value === 1 ? !0 : void 0 }, v = Le(e, ["hold"]);
    return L({ ourProps: m, theirProps: v, slot: f, attrs: t, slots: n, features: te.RenderStrategy | te.Static, visible: u.value, name: "ComboboxOptions" });
  };
} });
T({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n, expose: o }) {
  let l = me("ComboboxOption"), a = `headlessui-combobox-option-${z()}`, r = y(null);
  o({ el: r, $el: r });
  let u = g(() => l.activeOptionIndex.value !== null ? l.options.value[l.activeOptionIndex.value].id === a : !1), s = g(() => N(l.mode.value, { [0]: () => l.compare(k(l.value.value), k(e.value)), [1]: () => k(l.value.value).some((b) => l.compare(k(b), k(e.value))) })), d = g(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  B(() => l.registerOption(a, d)), Y(() => l.unregisterOption(a)), U(() => {
    l.comboboxState.value === 0 && u.value && l.activationTrigger.value !== 0 && W(() => {
      var b, x;
      return (x = (b = h(r)) == null ? void 0 : b.scrollIntoView) == null ? void 0 : x.call(b, { block: "nearest" });
    });
  });
  function i(b) {
    if (e.disabled)
      return b.preventDefault();
    l.selectOption(a), l.mode.value === 0 && l.closeCombobox(), Rl() || requestAnimationFrame(() => {
      var x;
      return (x = h(l.inputRef)) == null ? void 0 : x.focus();
    });
  }
  function f() {
    if (e.disabled)
      return l.goToOption(C.Nothing);
    l.goToOption(C.Specific, a);
  }
  let m = Ft();
  function v(b) {
    m.update(b);
  }
  function p(b) {
    m.wasMoved(b) && (e.disabled || u.value || l.goToOption(C.Specific, a, 0));
  }
  function c(b) {
    m.wasMoved(b) && (e.disabled || u.value && (l.optionsPropsRef.value.hold || l.goToOption(C.Nothing)));
  }
  return () => {
    let { disabled: b } = e, x = { active: u.value, selected: s.value, disabled: b }, A = { id: a, ref: r, role: "option", tabIndex: b === !0 ? void 0 : -1, "aria-disabled": b === !0 ? !0 : void 0, "aria-selected": s.value, disabled: void 0, onClick: i, onFocus: f, onPointerenter: v, onMouseenter: v, onPointermove: p, onMousemove: p, onPointerleave: c, onMouseleave: c };
    return L({ ourProps: A, theirProps: e, slot: x, attrs: n, slots: t, name: "ComboboxOption" });
  };
} });
function Ll(e, t, n) {
  Pe.isServer || U((o) => {
    window.addEventListener(e, t, n), o(() => window.removeEventListener(e, t, n));
  });
}
var he = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(he || {});
function kl() {
  let e = y(0);
  return Ll("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Lt(e, t, n, o) {
  Pe.isServer || U((l) => {
    e = e != null ? e : window, e.addEventListener(t, n, o), l(() => e.removeEventListener(t, n, o));
  });
}
function kt(e) {
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
var Mt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Mt || {});
let be = Object.assign(T({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = y(null);
  o({ el: l, $el: l });
  let a = g(() => pe(l)), r = y(!1);
  B(() => r.value = !0), Y(() => r.value = !1), Ml({ ownerDocument: a }, g(() => r.value && Boolean(e.features & 16)));
  let u = Nl({ ownerDocument: a, container: l, initialFocus: g(() => e.initialFocus) }, g(() => r.value && Boolean(e.features & 2)));
  Bl({ ownerDocument: a, container: l, containers: e.containers, previousActiveElement: u }, g(() => r.value && Boolean(e.features & 8)));
  let s = kl();
  function d(v) {
    let p = h(l);
    !p || ((c) => c())(() => {
      N(s.value, { [he.Forwards]: () => {
        ye(p, ee.First, { skipElements: [v.relatedTarget] });
      }, [he.Backwards]: () => {
        ye(p, ee.Last, { skipElements: [v.relatedTarget] });
      } });
    });
  }
  let i = y(!1);
  function f(v) {
    v.key === "Tab" && (i.value = !0, requestAnimationFrame(() => {
      i.value = !1;
    }));
  }
  function m(v) {
    if (!r.value)
      return;
    let p = jt(e.containers);
    h(l) instanceof HTMLElement && p.add(h(l));
    let c = v.relatedTarget;
    c instanceof HTMLElement && c.dataset.headlessuiFocusGuard !== "true" && (Nt(p, c) || (i.value ? ye(h(l), N(s.value, { [he.Forwards]: () => ee.Next, [he.Backwards]: () => ee.Previous }) | ee.WrapAround, { relativeTo: v.target }) : v.target instanceof HTMLElement && oe(v.target)));
  }
  return () => {
    let v = {}, p = { ref: l, onKeydown: f, onFocusout: m }, { features: c, initialFocus: b, containers: x, ...A } = e;
    return _(re, [Boolean(c & 4) && _(De, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Oe.Focusable }), L({ ourProps: p, theirProps: { ...t, ...A }, slot: v, attrs: t, slots: n, name: "FocusTrap" }), Boolean(c & 4) && _(De, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Oe.Focusable })]);
  };
} }), { features: Mt }), de = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && de[0] !== t.target && (de.unshift(t.target), de = de.filter((n) => n != null && n.isConnected), de.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function jl(e) {
  let t = y(de.slice());
  return ae([e], ([n], [o]) => {
    o === !0 && n === !1 ? kt(() => {
      t.value.splice(0);
    }) : o === !1 && n === !0 && (t.value = de.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((o) => o != null && o.isConnected)) != null ? n : null;
  };
}
function Ml({ ownerDocument: e }, t) {
  let n = jl(t);
  B(() => {
    U(() => {
      var o, l;
      t.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((l = e.value) == null ? void 0 : l.body) && oe(n());
    }, { flush: "post" });
  }), Y(() => {
    oe(n());
  });
}
function Nl({ ownerDocument: e, container: t, initialFocus: n }, o) {
  let l = y(null), a = y(!1);
  return B(() => a.value = !0), Y(() => a.value = !1), B(() => {
    ae([t, n, o], (r, u) => {
      if (r.every((d, i) => (u == null ? void 0 : u[i]) === d) || !o.value)
        return;
      let s = h(t);
      s && kt(() => {
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
        f ? oe(f) : ye(s, ee.First | ee.NoScroll) === Et.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (i = e.value) == null ? void 0 : i.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function Bl({ ownerDocument: e, container: t, containers: n, previousActiveElement: o }, l) {
  var a;
  Lt((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!l.value)
      return;
    let u = jt(n);
    h(t) instanceof HTMLElement && u.add(h(t));
    let s = o.value;
    if (!s)
      return;
    let d = r.target;
    d && d instanceof HTMLElement ? Nt(u, d) ? (o.value = d, oe(d)) : (r.preventDefault(), r.stopPropagation(), oe(s)) : oe(o.value);
  }, !0);
}
function Nt(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let Ve = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map();
function dt(e, t = y(!0)) {
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
      let u = (r = ge.get(l)) != null ? r : 1;
      if (u === 1 ? ge.delete(l) : ge.set(l, u - 1), u !== 1)
        return;
      let s = Ve.get(l);
      s && (s["aria-hidden"] === null ? l.removeAttribute("aria-hidden") : l.setAttribute("aria-hidden", s["aria-hidden"]), l.inert = s.inert, Ve.delete(l));
    });
    let a = (o = ge.get(l)) != null ? o : 0;
    ge.set(l, a + 1), a === 0 && (Ve.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }), l.setAttribute("aria-hidden", "true"), l.inert = !0);
  });
}
let Bt = Symbol("ForcePortalRootContext");
function Vl() {
  return X(Bt, !1);
}
let Ue = T({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return J(Bt, e.force), () => {
    let { force: o, ...l } = e;
    return L({ theirProps: l, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function $l(e) {
  let t = pe(e);
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
let Vt = T({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let o = y(null), l = g(() => pe(o)), a = Vl(), r = X($t, null), u = y(a === !0 || r == null ? $l(o.value) : r.resolveTarget());
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
    return _(Xt, { to: u.value }, L({ ourProps: s, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), $t = Symbol("PortalGroupContext"), Hl = T({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let o = Jt({ resolveTarget() {
    return e.target;
  } });
  return J($t, o), () => {
    let { target: l, ...a } = e;
    return L({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
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
  B(() => {
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
T({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${z()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Wl();
  return B(() => Y(o.register(e.id))), () => {
    let { name: l = "Description", slot: a = y({}), props: r = {} } = o, { id: u, ...s } = e, d = { ...Object.entries(r).reduce((i, [f, m]) => Object.assign(i, { [f]: q(m) }), {}), id: u };
    return L({ ourProps: d, theirProps: s, slot: a.value, attrs: t, slots: n, name: l });
  };
} });
function zl(e) {
  let t = ll(e.getSnapshot());
  return Y(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function ke() {
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
    let o = ke();
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
function Gl(e, t) {
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
let ce = Gl(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let o = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: ke(), meta: /* @__PURE__ */ new Set() };
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
  let o = zl(ce), l = g(() => {
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
function Ie(e) {
  let t = X(qe, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ie), n;
  }
  return t;
}
let Re = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
T({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Re }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${z()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  var a;
  let r = y(!1);
  B(() => {
    r.value = !0;
  });
  let u = y(0), s = Ee(), d = g(() => e.open === Re && s !== null ? (s.value & M.Open) === M.Open : e.open), i = y(null), f = y(null), m = g(() => pe(i));
  if (l({ el: i, $el: i }), !(e.open !== Re || s !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === Re ? void 0 : e.open}`);
  let v = g(() => r.value && d.value ? 0 : 1), p = g(() => v.value === 0), c = g(() => u.value > 1), b = X(qe, null) !== null, x = g(() => c.value ? "parent" : "leaf"), A = g(() => s !== null ? (s.value & M.Closing) === M.Closing : !1), O = g(() => b || A.value ? !1 : p.value), Q = g(() => {
    var R, D, $;
    return ($ = Array.from((D = (R = m.value) == null ? void 0 : R.querySelectorAll("body > *")) != null ? D : []).find((H) => H.id === "headlessui-portal-root" ? !1 : H.contains(h(f)) && H instanceof HTMLElement)) != null ? $ : null;
  });
  dt(Q, O);
  let G = g(() => c.value ? !0 : p.value), S = g(() => {
    var R, D, $;
    return ($ = Array.from((D = (R = m.value) == null ? void 0 : R.querySelectorAll("[data-headlessui-portal]")) != null ? D : []).find((H) => H.contains(h(f)) && H instanceof HTMLElement)) != null ? $ : null;
  });
  dt(S, G), Ul({ type: "Dialog", enabled: g(() => v.value === 0), element: i, onUpdate: (R, D) => {
    if (D === "Dialog")
      return N(R, { [We.Add]: () => u.value += 1, [We.Remove]: () => u.value -= 1 });
  } });
  let P = ql({ name: "DialogDescription", slot: g(() => ({ open: d.value })) }), E = y(null), w = { titleId: E, panelRef: y(null), dialogState: v, setTitleId(R) {
    E.value !== R && (E.value = R);
  }, close() {
    t("close", !1);
  } };
  J(qe, w);
  function F() {
    var R, D, $;
    return [...Array.from((D = (R = m.value) == null ? void 0 : R.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? D : []).filter((H) => !(H === document.body || H === document.head || !(H instanceof HTMLElement) || H.contains(h(f)) || w.panelRef.value && H.contains(w.panelRef.value))), ($ = w.panelRef.value) != null ? $ : i.value];
  }
  let j = g(() => !(!p.value || c.value));
  tt(() => F(), (R, D) => {
    w.close(), W(() => D == null ? void 0 : D.focus());
  }, j);
  let ue = g(() => !(c.value || v.value !== 0));
  Lt((a = m.value) == null ? void 0 : a.defaultView, "keydown", (R) => {
    ue.value && (R.defaultPrevented || R.key === I.Escape && (R.preventDefault(), R.stopPropagation(), w.close()));
  });
  let Z = g(() => !(A.value || v.value !== 0 || b));
  return Jl(m, Z, (R) => {
    var D;
    return { containers: [...(D = R.containers) != null ? D : [], F] };
  }), U((R) => {
    if (v.value !== 0)
      return;
    let D = h(i);
    if (!D)
      return;
    let $ = new ResizeObserver((H) => {
      for (let Te of H) {
        let ie = Te.target.getBoundingClientRect();
        ie.x === 0 && ie.y === 0 && ie.width === 0 && ie.height === 0 && w.close();
      }
    });
    $.observe(D), R(() => $.disconnect());
  }), () => {
    let { id: R, open: D, initialFocus: $, ...H } = e, Te = { ...n, ref: i, id: R, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": E.value, "aria-describedby": P.value }, ie = { open: v.value === 0 };
    return _(Ue, { force: !0 }, () => [_(Vt, () => _(Hl, { target: i.value }, () => _(Ue, { force: !1 }, () => _(be, { initialFocus: $, containers: F, features: p.value ? N(x.value, { parent: be.features.RestoreFocus, leaf: be.features.All & ~be.features.FocusLock }) : be.features.None }, () => L({ ourProps: Te, theirProps: H, slot: ie, attrs: n, slots: o, visible: v.value === 0, features: te.RenderStrategy | te.Static, name: "Dialog" }))))), _(De, { features: Oe.Hidden, ref: f })]);
  };
} });
T({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${z()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Ie("DialogOverlay");
  function l(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return L({ ourProps: { id: a, "aria-hidden": !0, onClick: l }, theirProps: r, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
T({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${z()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Ie("DialogBackdrop"), a = y(null);
  return o({ el: a, $el: a }), B(() => {
    if (l.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...u } = e, s = { id: r, ref: a, "aria-hidden": !0 };
    return _(Ue, { force: !0 }, () => _(Vt, () => L({ ourProps: s, theirProps: { ...t, ...u }, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
T({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${z()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Ie("DialogPanel");
  o({ el: l.panelRef, $el: l.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...u } = e, s = { id: r, ref: l.panelRef, onClick: a };
    return L({ ourProps: s, theirProps: u, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} });
T({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${z()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Ie("DialogTitle");
  return B(() => {
    o.setTitleId(e.id), Y(() => o.setTitleId(null));
  }), () => {
    let { id: l, ...a } = e;
    return L({ ourProps: { id: l }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
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
T({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let o = y(1), l = y(null), a = y(null), r = y([]), u = y(""), s = y(null), d = y(1);
  function i(m = (v) => v) {
    let v = s.value !== null ? r.value[s.value] : null, p = et(m(r.value.slice()), (b) => h(b.dataRef.domRef)), c = v ? p.indexOf(v) : null;
    return c === -1 && (c = null), { items: p, activeItemIndex: c };
  }
  let f = { menuState: o, buttonRef: l, itemsRef: a, items: r, searchQuery: u, activeItemIndex: s, activationTrigger: d, closeMenu: () => {
    o.value = 1, s.value = null;
  }, openMenu: () => o.value = 0, goToItem(m, v, p) {
    let c = i(), b = xt(m === C.Specific ? { focus: C.Specific, id: v } : { focus: m }, { resolveItems: () => c.items, resolveActiveIndex: () => c.activeItemIndex, resolveId: (x) => x.id, resolveDisabled: (x) => x.dataRef.disabled });
    u.value = "", s.value = b, d.value = p != null ? p : 1, r.value = c.items;
  }, search(m) {
    let v = u.value !== "" ? 0 : 1;
    u.value += m.toLowerCase();
    let p = (s.value !== null ? r.value.slice(s.value + v).concat(r.value.slice(0, s.value + v)) : r.value).find((b) => b.dataRef.textValue.startsWith(u.value) && !b.dataRef.disabled), c = p ? r.value.indexOf(p) : -1;
    c === -1 || c === s.value || (s.value = c, d.value = 1);
  }, clearSearch() {
    u.value = "";
  }, registerItem(m, v) {
    let p = i((c) => [...c, { id: m, dataRef: v }]);
    r.value = p.items, s.value = p.activeItemIndex, d.value = 1;
  }, unregisterItem(m) {
    let v = i((p) => {
      let c = p.findIndex((b) => b.id === m);
      return c !== -1 && p.splice(c, 1), p;
    });
    r.value = v.items, s.value = v.activeItemIndex, d.value = 1;
  } };
  return tt([l, a], (m, v) => {
    var p;
    f.closeMenu(), Ze(v, Je.Loose) || (m.preventDefault(), (p = h(l)) == null || p.focus());
  }, g(() => o.value === 0)), J(Ut, f), Xe(g(() => N(o.value, { [0]: M.Open, [1]: M.Closed }))), () => {
    let m = { open: o.value === 0, close: f.closeMenu };
    return L({ ourProps: {}, theirProps: e, slot: m, slots: t, attrs: n, name: "Menu" });
  };
} });
T({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${z()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = je("MenuButton");
  o({ el: l.buttonRef, $el: l.buttonRef });
  function a(d) {
    switch (d.key) {
      case I.Space:
      case I.Enter:
      case I.ArrowDown:
        d.preventDefault(), d.stopPropagation(), l.openMenu(), W(() => {
          var i;
          (i = h(l.itemsRef)) == null || i.focus({ preventScroll: !0 }), l.goToItem(C.First);
        });
        break;
      case I.ArrowUp:
        d.preventDefault(), d.stopPropagation(), l.openMenu(), W(() => {
          var i;
          (i = h(l.itemsRef)) == null || i.focus({ preventScroll: !0 }), l.goToItem(C.Last);
        });
        break;
    }
  }
  function r(d) {
    switch (d.key) {
      case I.Space:
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
    let i = { open: l.menuState.value === 0 }, { id: f, ...m } = e, v = { ref: l.buttonRef, id: f, type: s.value, "aria-haspopup": "menu", "aria-controls": (d = h(l.itemsRef)) == null ? void 0 : d.id, "aria-expanded": e.disabled ? void 0 : l.menuState.value === 0, onKeydown: a, onKeyup: r, onClick: u };
    return L({ ourProps: v, theirProps: m, slot: i, attrs: t, slots: n, name: "MenuButton" });
  };
} });
T({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-menu-items-${z()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = je("MenuItems"), a = y(null);
  o({ el: l.itemsRef, $el: l.itemsRef }), Ot({ container: g(() => h(l.itemsRef)), enabled: g(() => l.menuState.value === 0), accept(i) {
    return i.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : i.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(i) {
    i.setAttribute("role", "none");
  } });
  function r(i) {
    var f;
    switch (a.value && clearTimeout(a.value), i.key) {
      case I.Space:
        if (l.searchQuery.value !== "")
          return i.preventDefault(), i.stopPropagation(), l.search(i.key);
      case I.Enter:
        if (i.preventDefault(), i.stopPropagation(), l.activeItemIndex.value !== null) {
          let m = l.items.value[l.activeItemIndex.value];
          (f = h(m.dataRef.domRef)) == null || f.click();
        }
        l.closeMenu(), It(h(l.buttonRef));
        break;
      case I.ArrowDown:
        return i.preventDefault(), i.stopPropagation(), l.goToItem(C.Next);
      case I.ArrowUp:
        return i.preventDefault(), i.stopPropagation(), l.goToItem(C.Previous);
      case I.Home:
      case I.PageUp:
        return i.preventDefault(), i.stopPropagation(), l.goToItem(C.First);
      case I.End:
      case I.PageDown:
        return i.preventDefault(), i.stopPropagation(), l.goToItem(C.Last);
      case I.Escape:
        i.preventDefault(), i.stopPropagation(), l.closeMenu(), W(() => {
          var m;
          return (m = h(l.buttonRef)) == null ? void 0 : m.focus({ preventScroll: !0 });
        });
        break;
      case I.Tab:
        i.preventDefault(), i.stopPropagation(), l.closeMenu(), W(() => Pl(h(l.buttonRef), i.shiftKey ? ee.Previous : ee.Next));
        break;
      default:
        i.key.length === 1 && (l.search(i.key), a.value = setTimeout(() => l.clearSearch(), 350));
        break;
    }
  }
  function u(i) {
    switch (i.key) {
      case I.Space:
        i.preventDefault();
        break;
    }
  }
  let s = Ee(), d = g(() => s !== null ? (s.value & M.Open) === M.Open : l.menuState.value === 0);
  return () => {
    var i, f;
    let m = { open: l.menuState.value === 0 }, { id: v, ...p } = e, c = { "aria-activedescendant": l.activeItemIndex.value === null || (i = l.items.value[l.activeItemIndex.value]) == null ? void 0 : i.id, "aria-labelledby": (f = h(l.buttonRef)) == null ? void 0 : f.id, id: v, onKeydown: r, onKeyup: u, role: "menu", tabIndex: 0, ref: l.itemsRef };
    return L({ ourProps: c, theirProps: p, slot: m, attrs: t, slots: n, features: te.RenderStrategy | te.Static, visible: d.value, name: "MenuItems" });
  };
} });
T({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-menu-item-${z()}` } }, setup(e, { slots: t, attrs: n, expose: o }) {
  let l = je("MenuItem"), a = y(null);
  o({ el: a, $el: a });
  let r = g(() => l.activeItemIndex.value !== null ? l.items.value[l.activeItemIndex.value].id === e.id : !1), u = g(() => ({ disabled: e.disabled, textValue: "", domRef: a }));
  B(() => {
    var p, c;
    let b = (c = (p = h(a)) == null ? void 0 : p.textContent) == null ? void 0 : c.toLowerCase().trim();
    b !== void 0 && (u.value.textValue = b);
  }), B(() => l.registerItem(e.id, u)), Y(() => l.unregisterItem(e.id)), U(() => {
    l.menuState.value === 0 && r.value && l.activationTrigger.value !== 0 && W(() => {
      var p, c;
      return (c = (p = h(a)) == null ? void 0 : p.scrollIntoView) == null ? void 0 : c.call(p, { block: "nearest" });
    });
  });
  function s(p) {
    if (e.disabled)
      return p.preventDefault();
    l.closeMenu(), It(h(l.buttonRef));
  }
  function d() {
    if (e.disabled)
      return l.goToItem(C.Nothing);
    l.goToItem(C.Specific, e.id);
  }
  let i = Ft();
  function f(p) {
    i.update(p);
  }
  function m(p) {
    i.wasMoved(p) && (e.disabled || r.value || l.goToItem(C.Specific, e.id, 0));
  }
  function v(p) {
    i.wasMoved(p) && (e.disabled || r.value && l.goToItem(C.Nothing));
  }
  return () => {
    let { disabled: p } = e, c = { active: r.value, disabled: p, close: l.closeMenu }, { id: b, ...x } = e;
    return L({ ourProps: { id: b, ref: a, role: "menuitem", tabIndex: p === !0 ? void 0 : -1, "aria-disabled": p === !0 ? !0 : void 0, disabled: void 0, onClick: s, onFocus: d, onPointerenter: f, onMouseenter: f, onPointermove: m, onMousemove: m, onPointerleave: v, onMouseleave: v }, theirProps: { ...n, ...x }, slot: c, attrs: n, slots: t, name: "MenuItem" });
  };
} });
function nn(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function $e(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ce(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var ze = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(ze || {});
function on(e, t) {
  let n = ke();
  if (!e)
    return n.dispose;
  let { transitionDuration: o, transitionDelay: l } = getComputedStyle(e), [a, r] = [o, l].map((u) => {
    let [s = 0] = u.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, i) => i - d);
    return s;
  });
  return a !== 0 ? n.setTimeout(() => t("finished"), a + r) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function ct(e, t, n, o, l, a) {
  let r = ke(), u = a !== void 0 ? nn(a) : () => {
  };
  return Ce(e, ...l), $e(e, ...t, ...n), r.nextFrame(() => {
    Ce(e, ...n), $e(e, ...o), r.add(on(e, (s) => (Ce(e, ...o, ...t), $e(e, ...l), u(s))));
  }), r.add(() => Ce(e, ...t, ...n, ...o, ...l)), r.add(() => u("cancelled")), r.dispose;
}
function se(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let lt = Symbol("TransitionContext");
var an = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(an || {});
function rn() {
  return X(lt, null) !== null;
}
function un() {
  let e = X(lt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function sn() {
  let e = X(nt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let nt = Symbol("NestingContext");
function Me(e) {
  return "children" in e ? Me(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Wt(e) {
  let t = y([]), n = y(!1);
  B(() => n.value = !0), Y(() => n.value = !1);
  function o(a, r = ne.Hidden) {
    let u = t.value.findIndex(({ id: s }) => s === a);
    u !== -1 && (N(r, { [ne.Unmount]() {
      t.value.splice(u, 1);
    }, [ne.Hidden]() {
      t.value[u].state = "hidden";
    } }), !Me(t) && n.value && (e == null || e()));
  }
  function l(a) {
    let r = t.value.find(({ id: u }) => u === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => o(a, ne.Unmount);
  }
  return { children: t, register: l, unregister: o };
}
let qt = te.RenderStrategy, dn = T({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
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
    return () => _(vn, { ...e, onBeforeEnter: r, onAfterEnter: u, onBeforeLeave: s, onAfterLeave: d }, o);
  let i = y(null), f = y("visible"), m = g(() => e.unmount ? ne.Unmount : ne.Hidden);
  l({ el: i, $el: i });
  let { show: v, appear: p } = un(), { register: c, unregister: b } = sn(), x = { value: !0 }, A = z(), O = { value: !1 }, Q = Wt(() => {
    !O.value && f.value !== "hidden" && (f.value = "hidden", b(A), d());
  });
  B(() => {
    let Z = c(A);
    Y(Z);
  }), U(() => {
    if (m.value === ne.Hidden && A) {
      if (v && f.value !== "visible") {
        f.value = "visible";
        return;
      }
      N(f.value, { hidden: () => b(A), visible: () => c(A) });
    }
  });
  let G = se(e.enter), S = se(e.enterFrom), P = se(e.enterTo), E = se(e.entered), w = se(e.leave), F = se(e.leaveFrom), j = se(e.leaveTo);
  B(() => {
    U(() => {
      if (f.value === "visible") {
        let Z = h(i);
        if (Z instanceof Comment && Z.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function ue(Z) {
    let R = x.value && !p.value, D = h(i);
    !D || !(D instanceof HTMLElement) || R || (O.value = !0, v.value && r(), v.value || s(), Z(v.value ? ct(D, G, S, P, E, ($) => {
      O.value = !1, $ === ze.Finished && u();
    }) : ct(D, w, F, j, E, ($) => {
      O.value = !1, $ === ze.Finished && (Me(Q) || (f.value = "hidden", b(A), d()));
    })));
  }
  return B(() => {
    ae([v], (Z, R, D) => {
      ue(D), x.value = !1;
    }, { immediate: !0 });
  }), J(nt, Q), Xe(g(() => N(f.value, { visible: M.Open, hidden: M.Closed }) | a.value)), () => {
    let { appear: Z, show: R, enter: D, enterFrom: $, enterTo: H, entered: Te, leave: ie, leaveFrom: Wn, leaveTo: qn, ...ot } = e, Qt = { ref: i }, Yt = { ...ot, ...p && v && Pe.isServer ? { class: bt([n.class, ot.class, ...G, ...S]) } : {} };
    return L({ theirProps: Yt, ourProps: Qt, slot: {}, slots: o, attrs: n, features: qt, visible: f.value === "visible", name: "TransitionChild" });
  };
} }), cn = dn, vn = T({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o }) {
  let l = Ee(), a = g(() => e.show === null && l !== null ? (l.value & M.Open) === M.Open : e.show);
  U(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = y(a.value ? "visible" : "hidden"), u = Wt(() => {
    r.value = "hidden";
  }), s = y(!0), d = { show: a, appear: g(() => e.appear || !s.value) };
  return B(() => {
    U(() => {
      s.value = !1, a.value ? r.value = "visible" : Me(u) || (r.value = "hidden");
    });
  }), J(nt, u), J(lt, d), () => {
    let i = Le(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return L({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [_(cn, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...f, ...i }, o.default)] }, attrs: {}, features: qt, visible: r.value === "visible", name: "Transition" });
  };
} });
var vt;
const pn = typeof window < "u";
pn && ((vt = window == null ? void 0 : window.navigator) == null ? void 0 : vt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function fn(e) {
  return e;
}
const Ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ke = "__vueuse_ssr_handlers__";
Ge[Ke] = Ge[Ke] || {};
Ge[Ke];
var pt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(pt || (pt = {}));
var mn = Object.defineProperty, ft = Object.getOwnPropertySymbols, bn = Object.prototype.hasOwnProperty, gn = Object.prototype.propertyIsEnumerable, mt = (e, t, n) => t in e ? mn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, hn = (e, t) => {
  for (var n in t || (t = {}))
    bn.call(t, n) && mt(e, n, t[n]);
  if (ft)
    for (var n of ft(t))
      gn.call(t, n) && mt(e, n, t[n]);
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
const xn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
function wn(e, t) {
  return g({
    get: () => e.modelValue,
    set: (n) => t("update:modelValue", n)
  });
}
const Sn = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, On = { name: "Error" }, zt = /* @__PURE__ */ T({
  ...On,
  props: {
    error: null
  },
  setup(e) {
    return (t, n) => e.error ? (V(), K("div", Sn, [
      fe(t.$slots, "default", {}, () => [
        Qe(Ae(e.error), 1)
      ])
    ])) : xe("", !0);
  }
}), En = { name: "Actions" }, Pn = { class: "mt-8 border-t border-gray-200 pt-5" }, In = { class: "flex justify-end" }, Tn = { class: "inline-flex rounded-md shadow-sm" };
function Rn(e, t, n, o, l, a) {
  return V(), K("div", Pn, [
    le("div", In, [
      le("span", Tn, [
        fe(e.$slots, "default")
      ])
    ])
  ]);
}
const Cn = /* @__PURE__ */ xn(En, [["render", Rn]]), Fn = { class: "relative flex items-start" }, Dn = { class: "flex h-5 items-center" }, An = ["id", "value"], Ln = { class: "ml-3" }, kn = ["for"], jn = { name: "Checkbox" }, Mn = /* @__PURE__ */ T({
  ...jn,
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
    const n = wn(e, t);
    return (o, l) => (V(), K(re, null, [
      le("div", Fn, [
        le("div", Dn, [
          He(le("input", we({
            id: e.id,
            "onUpdate:modelValue": l[0] || (l[0] = (a) => gt(n) ? n.value = a : null),
            value: e.value,
            type: "checkbox",
            class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          }, o.$attrs), null, 16, An), [
            [tl, q(n)]
          ]),
          le("div", Ln, [
            le("label", {
              for: e.id,
              class: "block text-sm font-medium capitalize leading-5 text-gray-700"
            }, Ae(e.label), 9, kn)
          ])
        ])
      ]),
      e.error ? (V(), ve(zt, {
        key: 0,
        error: e.error
      }, null, 8, ["error"])) : xe("", !0)
    ], 64));
  }
}), Nn = ["for"], Bn = { name: "Label" }, Vn = /* @__PURE__ */ T({
  ...Bn,
  props: {
    for: null
  },
  setup(e) {
    const t = e;
    return (n, o) => (V(), K("label", {
      for: t.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      fe(n.$slots, "default")
    ], 8, Nn));
  }
}), Gt = /* @__PURE__ */ T({
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
    return (u, s) => (V(), K("div", null, [
      q(a) ? (V(), ve(q(Vn), {
        key: 0,
        for: e.element.name
      }, {
        default: Fe(() => [
          Qe(Ae(o()), 1)
        ]),
        _: 1
      }, 8, ["for"])) : xe("", !0),
      (V(), ve(nl(e.element.definition.component), we({
        key: e.element.name,
        modelValue: e.form[e.element.name],
        "onUpdate:modelValue": s[0] || (s[0] = (d) => e.form[e.element.name] = d)
      }, n()), null, 16, ["modelValue"])),
      Se(q(zt), {
        error: e.form.errors[e.element.name]
      }, null, 8, ["error"])
    ]));
  }
}), $n = { class: "mx-auto mt-6 max-w-md space-y-6" }, Kn = /* @__PURE__ */ T({
  __name: "FormBuilder",
  props: {
    schema: null,
    submit: { default: "Save" }
  },
  setup(e) {
    return (t, n) => (V(), K("div", $n, [
      (V(!0), K(re, null, Ye(e.schema.elements, (o, l) => (V(), ve(Gt, {
        key: l,
        element: o,
        form: e.schema.form
      }, null, 8, ["element", "form"]))), 128)),
      Se(q(Cn), null, {
        default: Fe(() => [
          fe(t.$slots, "actions", {
            form: e.schema.form
          }, () => [
            Se(q(vl), {
              loading: e.schema.form.processing,
              type: "submit"
            }, {
              default: Fe(() => [
                Qe(Ae(e.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 3
      })
    ]));
  }
}), Hn = /* @__PURE__ */ T({
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
    return (l, a) => (V(!0), K(re, null, Ye(e.items, (r, u) => {
      var s, d, i;
      return V(), ve(q(Mn), {
        id: (s = r.label) != null ? s : r,
        key: u,
        modelValue: q(o),
        "onUpdate:modelValue": a[0] || (a[0] = (f) => gt(o) ? o.value = f : null),
        value: (d = r.value) != null ? d : r,
        label: (i = r.label) != null ? i : r
      }, null, 8, ["id", "modelValue", "value", "label"]);
    }), 128));
  }
}), _n = (e) => Object.keys(e).reduce((t, n) => {
  var o;
  return t[n] = (o = e[n].value) != null ? o : null, t;
}, {}), Kt = (e) => Object.entries(e).map(([t, n]) => {
  const o = n.hasOwnProperty("setup") ? { component: n } : n;
  return {
    name: t,
    definition: o
  };
});
function Qn(e) {
  const t = al(
    Object.keys(e).reduce((n, o) => {
      var l, a;
      return e[o].schema ? { ...n, ..._n(e[o].schema) } : e[o].component === Hn ? (n[o] = (l = e[o].checked) != null ? l : [], n) : (n[o] = (a = e[o].value) != null ? a : null, n);
    }, {})
  );
  return {
    elements: Kt(e),
    form: t
  };
}
const Un = { class: "grid grid-flow-col gap-x-4 gap-y-6" }, Yn = /* @__PURE__ */ T({
  __name: "Grid",
  props: {
    schema: null,
    form: null
  },
  setup(e) {
    const n = Kt(e.schema);
    return (o, l) => (V(), K("div", Un, [
      (V(!0), K(re, null, Ye(q(n), (a, r) => (V(), ve(Gt, we({
        key: r,
        element: a,
        form: e.form
      }, o.$attrs), null, 16, ["element", "form"]))), 128))
    ]));
  }
});
export {
  Hn as CheckboxGroup,
  Kn as FormBuilder,
  Yn as Grid,
  Qn as useSchema
};
