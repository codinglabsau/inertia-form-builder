import { defineComponent as T, ref as y, computed as g, toRaw as M, provide as Z, onMounted as V, watch as ue, h as U, Fragment as te, watchEffect as W, onUnmounted as X, nextTick as z, inject as J, Teleport as Zt, reactive as _t, unref as Q, normalizeClass as ht, useAttrs as el, openBlock as k, createElementBlock as q, createCommentVNode as Se, createBlock as le, mergeProps as fe, withCtx as Oe, renderSlot as me, withDirectives as qe, createVNode as be, vShow as rt, cloneVNode as tl, createTextVNode as Le, toDisplayString as Pe, createElementVNode as oe, isRef as ll, vModelCheckbox as nl, shallowRef as ol, resolveDynamicComponent as ut, renderList as De } from "vue";
import { Link as al, useForm as rl } from "@inertiajs/vue3";
const ul = /* @__PURE__ */ oe("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), il = /* @__PURE__ */ oe("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), sl = [
  ul,
  il
], dl = { name: "Spinner" }, it = /* @__PURE__ */ T({
  ...dl,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (t, n) => (k(), q("svg", {
      class: ht(["h-5 w-5 animate-spin", e.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, sl, 2));
  }
}), cl = ["disabled", "type"], vl = { name: "PrimaryButton" }, fl = /* @__PURE__ */ T({
  ...vl,
  props: {
    loading: { type: Boolean },
    type: null
  },
  setup(e) {
    const t = el(), n = g(() => !t.href), o = [
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
    return (l, a) => (k(), q(te, null, [
      Q(n) ? Se("", !0) : (k(), le(Q(al), fe({
        key: 0,
        class: o,
        disabled: e.loading
      }, Q(t)), {
        default: Oe(() => [
          me(l.$slots, "default"),
          qe(be(it, { class: "ml-3" }, null, 512), [
            [rt, e.loading]
          ])
        ]),
        _: 3
      }, 16, ["disabled"])),
      Q(n) ? (k(), q("button", fe({
        key: 1,
        class: o,
        disabled: e.loading,
        type: e.type
      }, Q(t)), [
        me(l.$slots, "default"),
        qe(be(it, { class: "ml-3" }, null, 512), [
          [rt, e.loading]
        ])
      ], 16, cl)) : Se("", !0)
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
var ne = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ne || {}), ae = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ae || {});
function L({ visible: e = !0, features: t = 0, ourProps: n, theirProps: o, ...l }) {
  var a;
  let r = xt(o, n), u = Object.assign(l, { props: r });
  if (e || t & 2 && r.static)
    return Ve(u);
  if (t & 1) {
    let s = (a = r.unmount) == null || a ? 0 : 1;
    return B(s, { [0]() {
      return null;
    }, [1]() {
      return Ve({ ...l, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ve(u);
}
function Ve({ props: e, attrs: t, slots: n, slot: o, name: l }) {
  var a, r;
  let { as: u, ...s } = Me(e, ["unmount", "static"]), d = (a = n.default) == null ? void 0 : a.call(n, o), i = {};
  if (o) {
    let p = !1, m = [];
    for (let [v, f] of Object.entries(o))
      typeof f == "boolean" && (p = !0), f === !0 && m.push(v);
    p && (i["data-headlessui-state"] = m.join(" "));
  }
  if (u === "template") {
    if (d = yt(d != null ? d : []), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [p, ...m] = d != null ? d : [];
      if (!ml(p) || m.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).map((c) => c.trim()).filter((c, b, x) => x.indexOf(c) === b).sort((c, b) => c.localeCompare(b)).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
      let v = xt((r = p.props) != null ? r : {}, s), f = tl(p, v);
      for (let c in v)
        c.startsWith("on") && (f.props || (f.props = {}), f.props[c] = v[c]);
      return f;
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return U(u, Object.assign({}, s, i), { default: () => d });
}
function yt(e) {
  return e.flatMap((t) => t.type === te ? yt(t.children) : [t]);
}
function xt(...e) {
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
function Me(e, t = []) {
  let n = Object.assign({}, e);
  for (let o of t)
    o in n && delete n[o];
  return n;
}
function ml(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let bl = 0;
function gl() {
  return ++bl;
}
function G() {
  return gl();
}
var I = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(I || {});
function hl(e) {
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
        hl(e);
    }
  })();
  return a === -1 ? o : a;
}
function h(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let St = Symbol("Context");
var N = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(N || {});
function yl() {
  return Ie() !== null;
}
function Ie() {
  return J(St, null);
}
function Ze(e) {
  Z(St, e);
}
function st(e, t) {
  if (e)
    return e;
  let n = t != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function Ot(e, t) {
  let n = y(st(e.value.type, e.value.as));
  return V(() => {
    n.value = st(e.value.type, e.value.as);
  }), W(() => {
    var o;
    n.value || h(t) && h(t) instanceof HTMLButtonElement && !((o = h(t)) != null && o.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var xl = Object.defineProperty, wl = (e, t, n) => t in e ? xl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, dt = (e, t, n) => (wl(e, typeof t != "symbol" ? t + "" : t, n), n);
class Sl {
  constructor() {
    dt(this, "current", this.detect()), dt(this, "currentId", 0);
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
let Te = new Sl();
function pe(e) {
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
function Et({ container: e, accept: t, walk: n, enabled: o }) {
  W(() => {
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
let ze = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ee = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ee || {}), Pt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Pt || {}), Ol = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ol || {});
function It(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ze)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var _e = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(_e || {});
function et(e, t = 0) {
  var n;
  return e === ((n = pe(e)) == null ? void 0 : n.body) ? !1 : B(t, { [0]() {
    return e.matches(ze);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(ze))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
function Tt(e) {
  let t = pe(e);
  z(() => {
    t && !et(t.activeElement, 0) && re(e);
  });
}
function re(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let El = ["textarea", "input"].join(",");
function Pl(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, El)) != null ? n : !1;
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
function Il(e, t) {
  return we(It(), t, { relativeTo: e });
}
function we(e, t, { sorted: n = !0, relativeTo: o = null, skipElements: l = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, u = Array.isArray(e) ? n ? tt(e) : e : It(e);
  l.length > 0 && u.length > 1 && (u = u.filter((f) => !l.includes(f))), o = o != null ? o : r.activeElement;
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
  })(), i = t & 32 ? { preventScroll: !0 } : {}, p = 0, m = u.length, v;
  do {
    if (p >= m || p + m <= 0)
      return 0;
    let f = d + p;
    if (t & 16)
      f = (f + m) % m;
    else {
      if (f < 0)
        return 3;
      if (f >= m)
        return 1;
    }
    v = u[f], v == null || v.focus(i), p += s;
  } while (v !== r.activeElement);
  return t & 6 && Pl(v) && v.select(), v.hasAttribute("tabindex") || v.setAttribute("tabindex", "0"), 2;
}
function $e(e, t, n) {
  Te.isServer || W((o) => {
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
    return !et(u, _e.Loose) && u.tabIndex !== -1 && a.preventDefault(), t(a, u);
  }
  let l = y(null);
  $e("mousedown", (a) => {
    var r, u;
    n.value && (l.value = ((u = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : u[0]) || a.target);
  }, !0), $e("click", (a) => {
    l.value && (o(a, () => l.value), l.value = null);
  }, !0), $e("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ee = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ee || {});
let ke = T({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: o, ...l } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return L({ ourProps: a, theirProps: l, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function Rt(e = {}, t = null, n = []) {
  for (let [o, l] of Object.entries(e))
    Ft(n, Ct(t, o), l);
  return n;
}
function Ct(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ft(e, t, n) {
  if (Array.isArray(n))
    for (let [o, l] of n.entries())
      Ft(e, Ct(t, o.toString()), l);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Rt(n, t, e);
}
function Tl(e, t, n) {
  let o = y(n == null ? void 0 : n.value), l = g(() => e.value !== void 0);
  return [g(() => l.value ? e.value : o.value), function(a) {
    return l.value || (o.value = a), t == null ? void 0 : t(a);
  }];
}
function ct(e) {
  return [e.screenX, e.screenY];
}
function At() {
  let e = y([-1, -1]);
  return { wasMoved(t) {
    let n = ct(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = ct(t);
  } };
}
function Dt() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Rl() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Cl() {
  return Dt() || Rl();
}
function Fl(e, t) {
  return e === t;
}
var Al = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Al || {}), Dl = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Dl || {}), kl = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(kl || {});
let kt = Symbol("ComboboxContext");
function ge(e) {
  let t = J(kt, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, ge), n;
  }
  return t;
}
T({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Fl }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: o }) {
  let l = y(1), a = y(null), r = y(null), u = y(null), s = y(null), d = y({ static: !1, hold: !1 }), i = y([]), p = y(null), m = y(1), v = y(!1);
  function f(S = (P) => P) {
    let P = p.value !== null ? i.value[p.value] : null, E = tt(S(i.value.slice()), (F) => h(F.dataRef.domRef)), w = P ? E.indexOf(P) : null;
    return w === -1 && (w = null), { options: E, activeOptionIndex: w };
  }
  let c = g(() => e.multiple ? 1 : 0), b = g(() => e.nullable), [x, D] = Tl(g(() => e.modelValue === void 0 ? B(c.value, { [1]: [], [0]: void 0 }) : e.modelValue), (S) => o("update:modelValue", S), g(() => e.defaultValue)), O = { comboboxState: l, value: x, mode: c, compare(S, P) {
    if (typeof e.by == "string") {
      let E = e.by;
      return (S == null ? void 0 : S[E]) === (P == null ? void 0 : P[E]);
    }
    return e.by(S, P);
  }, defaultValue: g(() => e.defaultValue), nullable: b, inputRef: r, labelRef: a, buttonRef: u, optionsRef: s, disabled: g(() => e.disabled), options: i, change(S) {
    D(S);
  }, activeOptionIndex: g(() => {
    if (v.value && p.value === null && i.value.length > 0) {
      let S = i.value.findIndex((P) => !P.dataRef.disabled);
      if (S !== -1)
        return S;
    }
    return p.value;
  }), activationTrigger: m, optionsPropsRef: d, closeCombobox() {
    v.value = !1, !e.disabled && l.value !== 1 && (l.value = 1, p.value = null);
  }, openCombobox() {
    if (v.value = !0, e.disabled || l.value === 0)
      return;
    let S = i.value.findIndex((P) => {
      let E = M(P.dataRef.value);
      return B(c.value, { [0]: () => O.compare(M(O.value.value), M(E)), [1]: () => M(O.value.value).some((w) => O.compare(M(w), M(E))) });
    });
    S !== -1 && (p.value = S), l.value = 0;
  }, goToOption(S, P, E) {
    if (v.value = !1, e.disabled || s.value && !d.value.static && l.value === 1)
      return;
    let w = f();
    if (w.activeOptionIndex === null) {
      let j = w.options.findIndex((ie) => !ie.dataRef.disabled);
      j !== -1 && (w.activeOptionIndex = j);
    }
    let F = wt(S === C.Specific ? { focus: C.Specific, id: P } : { focus: S }, { resolveItems: () => w.options, resolveActiveIndex: () => w.activeOptionIndex, resolveId: (j) => j.id, resolveDisabled: (j) => j.dataRef.disabled });
    p.value = F, m.value = E != null ? E : 1, i.value = w.options;
  }, selectOption(S) {
    let P = i.value.find((w) => w.id === S);
    if (!P)
      return;
    let { dataRef: E } = P;
    D(B(c.value, { [0]: () => E.value, [1]: () => {
      let w = M(O.value.value).slice(), F = M(E.value), j = w.findIndex((ie) => O.compare(F, M(ie)));
      return j === -1 ? w.push(F) : w.splice(j, 1), w;
    } }));
  }, selectActiveOption() {
    if (O.activeOptionIndex.value === null)
      return;
    let { dataRef: S, id: P } = i.value[O.activeOptionIndex.value];
    D(B(c.value, { [0]: () => S.value, [1]: () => {
      let E = M(O.value.value).slice(), w = M(S.value), F = E.findIndex((j) => O.compare(w, M(j)));
      return F === -1 ? E.push(w) : E.splice(F, 1), E;
    } })), O.goToOption(C.Specific, P);
  }, registerOption(S, P) {
    let E = { id: S, dataRef: P }, w = f((F) => [...F, E]);
    if (p.value === null) {
      let F = P.value.value;
      B(c.value, { [0]: () => O.compare(M(O.value.value), M(F)), [1]: () => M(O.value.value).some((j) => O.compare(M(j), M(F))) }) && (w.activeOptionIndex = w.options.indexOf(E));
    }
    i.value = w.options, p.value = w.activeOptionIndex, m.value = 1;
  }, unregisterOption(S) {
    var P;
    O.activeOptionIndex.value !== null && ((P = O.options.value[O.activeOptionIndex.value]) == null ? void 0 : P.id) === S && (v.value = !0);
    let E = f((w) => {
      let F = w.findIndex((j) => j.id === S);
      return F !== -1 && w.splice(F, 1), w;
    });
    i.value = E.options, p.value = E.activeOptionIndex, m.value = 1;
  } };
  lt([r, u, s], () => O.closeCombobox(), g(() => l.value === 0)), Z(kt, O), Ze(g(() => B(l.value, { [0]: N.Open, [1]: N.Closed })));
  let Y = g(() => O.activeOptionIndex.value === null ? null : i.value[O.activeOptionIndex.value].dataRef.value), K = g(() => {
    var S;
    return (S = h(r)) == null ? void 0 : S.closest("form");
  });
  return V(() => {
    ue([K], () => {
      if (!K.value || e.defaultValue === void 0)
        return;
      function S() {
        O.change(e.defaultValue);
      }
      return K.value.addEventListener("reset", S), () => {
        var P;
        (P = K.value) == null || P.removeEventListener("reset", S);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: S, disabled: P, ...E } = e, w = { open: l.value === 0, disabled: P, activeIndex: O.activeOptionIndex.value, activeOption: Y.value, value: x.value };
    return U(te, [...S != null && x.value != null ? Rt({ [S]: x.value }).map(([F, j]) => U(ke, pl({ features: Ee.Hidden, key: F, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: F, value: j }))) : [], L({ theirProps: { ...n, ...Me(E, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: w, slots: t, attrs: n, name: "Combobox" })]);
  };
} });
T({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${G()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = ge("ComboboxLabel");
  function l() {
    var a;
    (a = h(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: r, ...u } = e, s = { id: r, ref: o.labelRef, onClick: l };
    return L({ ourProps: s, theirProps: u, slot: a, attrs: t, slots: n, name: "ComboboxLabel" });
  };
} });
T({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${G()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = ge("ComboboxButton");
  o({ el: l.buttonRef, $el: l.buttonRef });
  function a(s) {
    l.disabled.value || (l.comboboxState.value === 0 ? l.closeCombobox() : (s.preventDefault(), l.openCombobox()), z(() => {
      var d;
      return (d = h(l.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function r(s) {
    switch (s.key) {
      case I.ArrowDown:
        s.preventDefault(), s.stopPropagation(), l.comboboxState.value === 1 && l.openCombobox(), z(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case I.ArrowUp:
        s.preventDefault(), s.stopPropagation(), l.comboboxState.value === 1 && (l.openCombobox(), z(() => {
          l.value.value || l.goToOption(C.Last);
        })), z(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case I.Escape:
        if (l.comboboxState.value !== 0)
          return;
        s.preventDefault(), l.optionsRef.value && !l.optionsPropsRef.value.static && s.stopPropagation(), l.closeCombobox(), z(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = Ot(g(() => ({ as: e.as, type: t.type })), l.buttonRef);
  return () => {
    var s, d;
    let i = { open: l.comboboxState.value === 0, disabled: l.disabled.value, value: l.value.value }, { id: p, ...m } = e, v = { ref: l.buttonRef, id: p, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (s = h(l.optionsRef)) == null ? void 0 : s.id, "aria-expanded": l.disabled.value ? void 0 : l.comboboxState.value === 0, "aria-labelledby": l.labelRef.value ? [(d = h(l.labelRef)) == null ? void 0 : d.id, p].join(" ") : void 0, disabled: l.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return L({ ourProps: v, theirProps: m, slot: i, attrs: t, slots: n, name: "ComboboxButton" });
  };
} });
T({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${G()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  let a = ge("ComboboxInput"), r = { value: !1 };
  l({ el: a.inputRef, $el: a.inputRef });
  let u = g(() => {
    var c;
    let b = a.value.value;
    return h(a.inputRef) ? typeof e.displayValue < "u" && b !== void 0 ? (c = e.displayValue(b)) != null ? c : "" : typeof b == "string" ? b : "" : "";
  });
  V(() => {
    ue([u, a.comboboxState], ([c, b], [x, D]) => {
      if (r.value)
        return;
      let O = h(a.inputRef);
      O && (D === 0 && b === 1 || c !== x) && (O.value = c);
    }, { immediate: !0 }), ue([a.comboboxState], ([c], [b]) => {
      if (c === 0 && b === 1) {
        let x = h(a.inputRef);
        if (!x)
          return;
        let D = x.value, { selectionStart: O, selectionEnd: Y, selectionDirection: K } = x;
        x.value = "", x.value = D, K !== null ? x.setSelectionRange(O, Y, K) : x.setSelectionRange(O, Y);
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
  function p(c) {
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
        return r.value = !1, c.preventDefault(), c.stopPropagation(), B(a.comboboxState.value, { [0]: () => a.goToOption(C.Next), [1]: () => a.openCombobox() });
      case I.ArrowUp:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), B(a.comboboxState.value, { [0]: () => a.goToOption(C.Previous), [1]: () => {
          a.openCombobox(), z(() => {
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
  let f = g(() => {
    var c, b, x, D;
    return (D = (x = (b = e.defaultValue) != null ? b : a.defaultValue.value !== void 0 ? (c = e.displayValue) == null ? void 0 : c.call(e, a.defaultValue.value) : null) != null ? x : a.defaultValue.value) != null ? D : "";
  });
  return () => {
    var c, b, x, D, O, Y;
    let K = { open: a.comboboxState.value === 0 }, { id: S, displayValue: P, onChange: E, ...w } = e, F = { "aria-controls": (c = a.optionsRef.value) == null ? void 0 : c.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (b = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : b.id, "aria-labelledby": (O = (x = h(a.labelRef)) == null ? void 0 : x.id) != null ? O : (D = h(a.buttonRef)) == null ? void 0 : D.id, "aria-autocomplete": "list", id: S, onCompositionstart: d, onCompositionend: i, onKeydown: p, onInput: m, onBlur: v, role: "combobox", type: (Y = n.type) != null ? Y : "text", tabIndex: 0, ref: a.inputRef, defaultValue: f.value };
    return L({ ourProps: F, theirProps: w, slot: K, attrs: n, slots: o, features: ne.RenderStrategy | ne.Static, name: "ComboboxInput" });
  };
} });
T({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = ge("ComboboxOptions"), a = `headlessui-combobox-options-${G()}`;
  o({ el: l.optionsRef, $el: l.optionsRef }), W(() => {
    l.optionsPropsRef.value.static = e.static;
  }), W(() => {
    l.optionsPropsRef.value.hold = e.hold;
  });
  let r = Ie(), u = g(() => r !== null ? (r.value & N.Open) === N.Open : l.comboboxState.value === 0);
  return Et({ container: g(() => h(l.optionsRef)), enabled: g(() => l.comboboxState.value === 0), accept(s) {
    return s.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : s.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s) {
    s.setAttribute("role", "none");
  } }), () => {
    var s, d, i;
    let p = { open: l.comboboxState.value === 0 }, m = { "aria-labelledby": (i = (s = h(l.labelRef)) == null ? void 0 : s.id) != null ? i : (d = h(l.buttonRef)) == null ? void 0 : d.id, id: a, ref: l.optionsRef, role: "listbox", "aria-multiselectable": l.mode.value === 1 ? !0 : void 0 }, v = Me(e, ["hold"]);
    return L({ ourProps: m, theirProps: v, slot: p, attrs: t, slots: n, features: ne.RenderStrategy | ne.Static, visible: u.value, name: "ComboboxOptions" });
  };
} });
T({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n, expose: o }) {
  let l = ge("ComboboxOption"), a = `headlessui-combobox-option-${G()}`, r = y(null);
  o({ el: r, $el: r });
  let u = g(() => l.activeOptionIndex.value !== null ? l.options.value[l.activeOptionIndex.value].id === a : !1), s = g(() => B(l.mode.value, { [0]: () => l.compare(M(l.value.value), M(e.value)), [1]: () => M(l.value.value).some((b) => l.compare(M(b), M(e.value))) })), d = g(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  V(() => l.registerOption(a, d)), X(() => l.unregisterOption(a)), W(() => {
    l.comboboxState.value === 0 && u.value && l.activationTrigger.value !== 0 && z(() => {
      var b, x;
      return (x = (b = h(r)) == null ? void 0 : b.scrollIntoView) == null ? void 0 : x.call(b, { block: "nearest" });
    });
  });
  function i(b) {
    if (e.disabled)
      return b.preventDefault();
    l.selectOption(a), l.mode.value === 0 && l.closeCombobox(), Cl() || requestAnimationFrame(() => {
      var x;
      return (x = h(l.inputRef)) == null ? void 0 : x.focus();
    });
  }
  function p() {
    if (e.disabled)
      return l.goToOption(C.Nothing);
    l.goToOption(C.Specific, a);
  }
  let m = At();
  function v(b) {
    m.update(b);
  }
  function f(b) {
    m.wasMoved(b) && (e.disabled || u.value || l.goToOption(C.Specific, a, 0));
  }
  function c(b) {
    m.wasMoved(b) && (e.disabled || u.value && (l.optionsPropsRef.value.hold || l.goToOption(C.Nothing)));
  }
  return () => {
    let { disabled: b } = e, x = { active: u.value, selected: s.value, disabled: b }, D = { id: a, ref: r, role: "option", tabIndex: b === !0 ? void 0 : -1, "aria-disabled": b === !0 ? !0 : void 0, "aria-selected": s.value, disabled: void 0, onClick: i, onFocus: p, onPointerenter: v, onMouseenter: v, onPointermove: f, onMousemove: f, onPointerleave: c, onMouseleave: c };
    return L({ ourProps: D, theirProps: e, slot: x, attrs: n, slots: t, name: "ComboboxOption" });
  };
} });
function Ll(e, t, n) {
  Te.isServer || W((o) => {
    window.addEventListener(e, t, n), o(() => window.removeEventListener(e, t, n));
  });
}
var xe = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(xe || {});
function Ml() {
  let e = y(0);
  return Ll("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Lt(e, t, n, o) {
  Te.isServer || W((l) => {
    e = e != null ? e : window, e.addEventListener(t, n, o), l(() => e.removeEventListener(t, n, o));
  });
}
function Mt(e) {
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
let he = Object.assign(T({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = y(null);
  o({ el: l, $el: l });
  let a = g(() => pe(l)), r = y(!1);
  V(() => r.value = !0), X(() => r.value = !1), Nl({ ownerDocument: a }, g(() => r.value && Boolean(e.features & 16)));
  let u = Bl({ ownerDocument: a, container: l, initialFocus: g(() => e.initialFocus) }, g(() => r.value && Boolean(e.features & 2)));
  Vl({ ownerDocument: a, container: l, containers: e.containers, previousActiveElement: u }, g(() => r.value && Boolean(e.features & 8)));
  let s = Ml();
  function d(v) {
    let f = h(l);
    !f || ((c) => c())(() => {
      B(s.value, { [xe.Forwards]: () => {
        we(f, ee.First, { skipElements: [v.relatedTarget] });
      }, [xe.Backwards]: () => {
        we(f, ee.Last, { skipElements: [v.relatedTarget] });
      } });
    });
  }
  let i = y(!1);
  function p(v) {
    v.key === "Tab" && (i.value = !0, requestAnimationFrame(() => {
      i.value = !1;
    }));
  }
  function m(v) {
    if (!r.value)
      return;
    let f = jt(e.containers);
    h(l) instanceof HTMLElement && f.add(h(l));
    let c = v.relatedTarget;
    c instanceof HTMLElement && c.dataset.headlessuiFocusGuard !== "true" && (Bt(f, c) || (i.value ? we(h(l), B(s.value, { [xe.Forwards]: () => ee.Next, [xe.Backwards]: () => ee.Previous }) | ee.WrapAround, { relativeTo: v.target }) : v.target instanceof HTMLElement && re(v.target)));
  }
  return () => {
    let v = {}, f = { ref: l, onKeydown: p, onFocusout: m }, { features: c, initialFocus: b, containers: x, ...D } = e;
    return U(te, [Boolean(c & 4) && U(ke, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Ee.Focusable }), L({ ourProps: f, theirProps: { ...t, ...D }, slot: v, attrs: t, slots: n, name: "FocusTrap" }), Boolean(c & 4) && U(ke, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Ee.Focusable })]);
  };
} }), { features: Nt }), ce = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && ce[0] !== t.target && (ce.unshift(t.target), ce = ce.filter((n) => n != null && n.isConnected), ce.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function jl(e) {
  let t = y(ce.slice());
  return ue([e], ([n], [o]) => {
    o === !0 && n === !1 ? Mt(() => {
      t.value.splice(0);
    }) : o === !1 && n === !0 && (t.value = ce.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((o) => o != null && o.isConnected)) != null ? n : null;
  };
}
function Nl({ ownerDocument: e }, t) {
  let n = jl(t);
  V(() => {
    W(() => {
      var o, l;
      t.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((l = e.value) == null ? void 0 : l.body) && re(n());
    }, { flush: "post" });
  }), X(() => {
    re(n());
  });
}
function Bl({ ownerDocument: e, container: t, initialFocus: n }, o) {
  let l = y(null), a = y(!1);
  return V(() => a.value = !0), X(() => a.value = !1), V(() => {
    ue([t, n, o], (r, u) => {
      if (r.every((d, i) => (u == null ? void 0 : u[i]) === d) || !o.value)
        return;
      let s = h(t);
      s && Mt(() => {
        var d, i;
        if (!a.value)
          return;
        let p = h(n), m = (d = e.value) == null ? void 0 : d.activeElement;
        if (p) {
          if (p === m) {
            l.value = m;
            return;
          }
        } else if (s.contains(m)) {
          l.value = m;
          return;
        }
        p ? re(p) : we(s, ee.First | ee.NoScroll) === Pt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (i = e.value) == null ? void 0 : i.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function Vl({ ownerDocument: e, container: t, containers: n, previousActiveElement: o }, l) {
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
    d && d instanceof HTMLElement ? Bt(u, d) ? (o.value = d, re(d)) : (r.preventDefault(), r.stopPropagation(), re(s)) : re(o.value);
  }, !0);
}
function Bt(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let He = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map();
function vt(e, t = y(!0)) {
  W((n) => {
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
      let s = He.get(l);
      s && (s["aria-hidden"] === null ? l.removeAttribute("aria-hidden") : l.setAttribute("aria-hidden", s["aria-hidden"]), l.inert = s.inert, He.delete(l));
    });
    let a = (o = ye.get(l)) != null ? o : 0;
    ye.set(l, a + 1), a === 0 && (He.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }), l.setAttribute("aria-hidden", "true"), l.inert = !0);
  });
}
let Vt = Symbol("ForcePortalRootContext");
function $l() {
  return J(Vt, !1);
}
let Ge = T({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return Z(Vt, e.force), () => {
    let { force: o, ...l } = e;
    return L({ theirProps: l, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function Hl(e) {
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
let $t = T({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let o = y(null), l = g(() => pe(o)), a = $l(), r = J(Ht, null), u = y(a === !0 || r == null ? Hl(o.value) : r.resolveTarget());
  return W(() => {
    a || r != null && (u.value = r.resolveTarget());
  }), X(() => {
    var s, d;
    let i = (s = l.value) == null ? void 0 : s.getElementById("headlessui-portal-root");
    i && u.value === i && u.value.children.length <= 0 && ((d = u.value.parentElement) == null || d.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let s = { ref: o, "data-headlessui-portal": "" };
    return U(Zt, { to: u.value }, L({ ourProps: s, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Ht = Symbol("PortalGroupContext"), Ul = T({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let o = _t({ resolveTarget() {
    return e.target;
  } });
  return Z(Ht, o), () => {
    let { target: l, ...a } = e;
    return L({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), Ut = Symbol("StackContext");
var Ke = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ke || {});
function Wl() {
  return J(Ut, () => {
  });
}
function ql({ type: e, enabled: t, element: n, onUpdate: o }) {
  let l = Wl();
  function a(...r) {
    o == null || o(...r), l(...r);
  }
  V(() => {
    ue(t, (r, u) => {
      r ? a(0, e, n) : u === !0 && a(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), X(() => {
    t.value && a(1, e, n);
  }), Z(Ut, a);
}
let Wt = Symbol("DescriptionContext");
function zl() {
  let e = J(Wt, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Gl({ slot: e = y({}), name: t = "Description", props: n = {} } = {}) {
  let o = y([]);
  function l(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return Z(Wt, { register: l, slot: e, name: t, props: n }), g(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
T({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${G()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = zl();
  return V(() => X(o.register(e.id))), () => {
    let { name: l = "Description", slot: a = y({}), props: r = {} } = o, { id: u, ...s } = e, d = { ...Object.entries(r).reduce((i, [p, m]) => Object.assign(i, { [p]: Q(m) }), {}), id: u };
    return L({ ourProps: d, theirProps: s, slot: a.value, attrs: t, slots: n, name: l });
  };
} });
function Kl(e) {
  let t = ol(e.getSnapshot());
  return X(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function je() {
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
    let o = je();
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
function Ql(e, t) {
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
function Yl() {
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
function Xl() {
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
function Jl() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Zl(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let ve = Ql(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let o = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: je(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(t), this.set(e, o), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let o = { doc: e, d: t, meta: Zl(n) }, l = [Xl(), Yl(), Jl()];
  l.forEach(({ before: a }) => a == null ? void 0 : a(o)), l.forEach(({ after: a }) => a == null ? void 0 : a(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
ve.subscribe(() => {
  let e = ve.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let o = t.get(n.doc) === "hidden", l = n.count !== 0;
    (l && !o || !l && o) && ve.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && ve.dispatch("TEARDOWN", n);
  }
});
function _l(e, t, n) {
  let o = Kl(ve), l = g(() => {
    let a = e.value ? o.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return ue([e, t], ([a, r], [u], s) => {
    if (!a || !r)
      return;
    ve.dispatch("PUSH", a, n);
    let d = !1;
    s(() => {
      d || (ve.dispatch("POP", u != null ? u : a, n), d = !0);
    });
  }, { immediate: !0 }), l;
}
var en = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(en || {});
let Qe = Symbol("DialogContext");
function Re(e) {
  let t = J(Qe, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Re), n;
  }
  return t;
}
let Fe = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
T({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Fe }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${G()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  var a;
  let r = y(!1);
  V(() => {
    r.value = !0;
  });
  let u = y(0), s = Ie(), d = g(() => e.open === Fe && s !== null ? (s.value & N.Open) === N.Open : e.open), i = y(null), p = y(null), m = g(() => pe(i));
  if (l({ el: i, $el: i }), !(e.open !== Fe || s !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === Fe ? void 0 : e.open}`);
  let v = g(() => r.value && d.value ? 0 : 1), f = g(() => v.value === 0), c = g(() => u.value > 1), b = J(Qe, null) !== null, x = g(() => c.value ? "parent" : "leaf"), D = g(() => s !== null ? (s.value & N.Closing) === N.Closing : !1), O = g(() => b || D.value ? !1 : f.value), Y = g(() => {
    var R, A, $;
    return ($ = Array.from((A = (R = m.value) == null ? void 0 : R.querySelectorAll("body > *")) != null ? A : []).find((H) => H.id === "headlessui-portal-root" ? !1 : H.contains(h(p)) && H instanceof HTMLElement)) != null ? $ : null;
  });
  vt(Y, O);
  let K = g(() => c.value ? !0 : f.value), S = g(() => {
    var R, A, $;
    return ($ = Array.from((A = (R = m.value) == null ? void 0 : R.querySelectorAll("[data-headlessui-portal]")) != null ? A : []).find((H) => H.contains(h(p)) && H instanceof HTMLElement)) != null ? $ : null;
  });
  vt(S, K), ql({ type: "Dialog", enabled: g(() => v.value === 0), element: i, onUpdate: (R, A) => {
    if (A === "Dialog")
      return B(R, { [Ke.Add]: () => u.value += 1, [Ke.Remove]: () => u.value -= 1 });
  } });
  let P = Gl({ name: "DialogDescription", slot: g(() => ({ open: d.value })) }), E = y(null), w = { titleId: E, panelRef: y(null), dialogState: v, setTitleId(R) {
    E.value !== R && (E.value = R);
  }, close() {
    t("close", !1);
  } };
  Z(Qe, w);
  function F() {
    var R, A, $;
    return [...Array.from((A = (R = m.value) == null ? void 0 : R.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? A : []).filter((H) => !(H === document.body || H === document.head || !(H instanceof HTMLElement) || H.contains(h(p)) || w.panelRef.value && H.contains(w.panelRef.value))), ($ = w.panelRef.value) != null ? $ : i.value];
  }
  let j = g(() => !(!f.value || c.value));
  lt(() => F(), (R, A) => {
    w.close(), z(() => A == null ? void 0 : A.focus());
  }, j);
  let ie = g(() => !(c.value || v.value !== 0));
  Lt((a = m.value) == null ? void 0 : a.defaultView, "keydown", (R) => {
    ie.value && (R.defaultPrevented || R.key === I.Escape && (R.preventDefault(), R.stopPropagation(), w.close()));
  });
  let _ = g(() => !(D.value || v.value !== 0 || b));
  return _l(m, _, (R) => {
    var A;
    return { containers: [...(A = R.containers) != null ? A : [], F] };
  }), W((R) => {
    if (v.value !== 0)
      return;
    let A = h(i);
    if (!A)
      return;
    let $ = new ResizeObserver((H) => {
      for (let Ce of H) {
        let se = Ce.target.getBoundingClientRect();
        se.x === 0 && se.y === 0 && se.width === 0 && se.height === 0 && w.close();
      }
    });
    $.observe(A), R(() => $.disconnect());
  }), () => {
    let { id: R, open: A, initialFocus: $, ...H } = e, Ce = { ...n, ref: i, id: R, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": E.value, "aria-describedby": P.value }, se = { open: v.value === 0 };
    return U(Ge, { force: !0 }, () => [U($t, () => U(Ul, { target: i.value }, () => U(Ge, { force: !1 }, () => U(he, { initialFocus: $, containers: F, features: f.value ? B(x.value, { parent: he.features.RestoreFocus, leaf: he.features.All & ~he.features.FocusLock }) : he.features.None }, () => L({ ourProps: Ce, theirProps: H, slot: se, attrs: n, slots: o, visible: v.value === 0, features: ne.RenderStrategy | ne.Static, name: "Dialog" }))))), U(ke, { features: Ee.Hidden, ref: p })]);
  };
} });
T({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${G()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Re("DialogOverlay");
  function l(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return L({ ourProps: { id: a, "aria-hidden": !0, onClick: l }, theirProps: r, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
T({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${G()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Re("DialogBackdrop"), a = y(null);
  return o({ el: a, $el: a }), V(() => {
    if (l.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...u } = e, s = { id: r, ref: a, "aria-hidden": !0 };
    return U(Ge, { force: !0 }, () => U($t, () => L({ ourProps: s, theirProps: { ...t, ...u }, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
T({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${G()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Re("DialogPanel");
  o({ el: l.panelRef, $el: l.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...u } = e, s = { id: r, ref: l.panelRef, onClick: a };
    return L({ ourProps: s, theirProps: u, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} });
T({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${G()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Re("DialogTitle");
  return V(() => {
    o.setTitleId(e.id), X(() => o.setTitleId(null));
  }), () => {
    let { id: l, ...a } = e;
    return L({ ourProps: { id: l }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
var tn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(tn || {}), ln = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(ln || {});
function nn(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let qt = Symbol("MenuContext");
function Ne(e) {
  let t = J(qt, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ne), n;
  }
  return t;
}
T({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let o = y(1), l = y(null), a = y(null), r = y([]), u = y(""), s = y(null), d = y(1);
  function i(m = (v) => v) {
    let v = s.value !== null ? r.value[s.value] : null, f = tt(m(r.value.slice()), (b) => h(b.dataRef.domRef)), c = v ? f.indexOf(v) : null;
    return c === -1 && (c = null), { items: f, activeItemIndex: c };
  }
  let p = { menuState: o, buttonRef: l, itemsRef: a, items: r, searchQuery: u, activeItemIndex: s, activationTrigger: d, closeMenu: () => {
    o.value = 1, s.value = null;
  }, openMenu: () => o.value = 0, goToItem(m, v, f) {
    let c = i(), b = wt(m === C.Specific ? { focus: C.Specific, id: v } : { focus: m }, { resolveItems: () => c.items, resolveActiveIndex: () => c.activeItemIndex, resolveId: (x) => x.id, resolveDisabled: (x) => x.dataRef.disabled });
    u.value = "", s.value = b, d.value = f != null ? f : 1, r.value = c.items;
  }, search(m) {
    let v = u.value !== "" ? 0 : 1;
    u.value += m.toLowerCase();
    let f = (s.value !== null ? r.value.slice(s.value + v).concat(r.value.slice(0, s.value + v)) : r.value).find((b) => b.dataRef.textValue.startsWith(u.value) && !b.dataRef.disabled), c = f ? r.value.indexOf(f) : -1;
    c === -1 || c === s.value || (s.value = c, d.value = 1);
  }, clearSearch() {
    u.value = "";
  }, registerItem(m, v) {
    let f = i((c) => [...c, { id: m, dataRef: v }]);
    r.value = f.items, s.value = f.activeItemIndex, d.value = 1;
  }, unregisterItem(m) {
    let v = i((f) => {
      let c = f.findIndex((b) => b.id === m);
      return c !== -1 && f.splice(c, 1), f;
    });
    r.value = v.items, s.value = v.activeItemIndex, d.value = 1;
  } };
  return lt([l, a], (m, v) => {
    var f;
    p.closeMenu(), et(v, _e.Loose) || (m.preventDefault(), (f = h(l)) == null || f.focus());
  }, g(() => o.value === 0)), Z(qt, p), Ze(g(() => B(o.value, { [0]: N.Open, [1]: N.Closed }))), () => {
    let m = { open: o.value === 0, close: p.closeMenu };
    return L({ ourProps: {}, theirProps: e, slot: m, slots: t, attrs: n, name: "Menu" });
  };
} });
T({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${G()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Ne("MenuButton");
  o({ el: l.buttonRef, $el: l.buttonRef });
  function a(d) {
    switch (d.key) {
      case I.Space:
      case I.Enter:
      case I.ArrowDown:
        d.preventDefault(), d.stopPropagation(), l.openMenu(), z(() => {
          var i;
          (i = h(l.itemsRef)) == null || i.focus({ preventScroll: !0 }), l.goToItem(C.First);
        });
        break;
      case I.ArrowUp:
        d.preventDefault(), d.stopPropagation(), l.openMenu(), z(() => {
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
    e.disabled || (l.menuState.value === 0 ? (l.closeMenu(), z(() => {
      var i;
      return (i = h(l.buttonRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
    })) : (d.preventDefault(), l.openMenu(), nn(() => {
      var i;
      return (i = h(l.itemsRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
    })));
  }
  let s = Ot(g(() => ({ as: e.as, type: t.type })), l.buttonRef);
  return () => {
    var d;
    let i = { open: l.menuState.value === 0 }, { id: p, ...m } = e, v = { ref: l.buttonRef, id: p, type: s.value, "aria-haspopup": "menu", "aria-controls": (d = h(l.itemsRef)) == null ? void 0 : d.id, "aria-expanded": e.disabled ? void 0 : l.menuState.value === 0, onKeydown: a, onKeyup: r, onClick: u };
    return L({ ourProps: v, theirProps: m, slot: i, attrs: t, slots: n, name: "MenuButton" });
  };
} });
T({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-menu-items-${G()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Ne("MenuItems"), a = y(null);
  o({ el: l.itemsRef, $el: l.itemsRef }), Et({ container: g(() => h(l.itemsRef)), enabled: g(() => l.menuState.value === 0), accept(i) {
    return i.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : i.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(i) {
    i.setAttribute("role", "none");
  } });
  function r(i) {
    var p;
    switch (a.value && clearTimeout(a.value), i.key) {
      case I.Space:
        if (l.searchQuery.value !== "")
          return i.preventDefault(), i.stopPropagation(), l.search(i.key);
      case I.Enter:
        if (i.preventDefault(), i.stopPropagation(), l.activeItemIndex.value !== null) {
          let m = l.items.value[l.activeItemIndex.value];
          (p = h(m.dataRef.domRef)) == null || p.click();
        }
        l.closeMenu(), Tt(h(l.buttonRef));
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
        i.preventDefault(), i.stopPropagation(), l.closeMenu(), z(() => {
          var m;
          return (m = h(l.buttonRef)) == null ? void 0 : m.focus({ preventScroll: !0 });
        });
        break;
      case I.Tab:
        i.preventDefault(), i.stopPropagation(), l.closeMenu(), z(() => Il(h(l.buttonRef), i.shiftKey ? ee.Previous : ee.Next));
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
  let s = Ie(), d = g(() => s !== null ? (s.value & N.Open) === N.Open : l.menuState.value === 0);
  return () => {
    var i, p;
    let m = { open: l.menuState.value === 0 }, { id: v, ...f } = e, c = { "aria-activedescendant": l.activeItemIndex.value === null || (i = l.items.value[l.activeItemIndex.value]) == null ? void 0 : i.id, "aria-labelledby": (p = h(l.buttonRef)) == null ? void 0 : p.id, id: v, onKeydown: r, onKeyup: u, role: "menu", tabIndex: 0, ref: l.itemsRef };
    return L({ ourProps: c, theirProps: f, slot: m, attrs: t, slots: n, features: ne.RenderStrategy | ne.Static, visible: d.value, name: "MenuItems" });
  };
} });
T({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-menu-item-${G()}` } }, setup(e, { slots: t, attrs: n, expose: o }) {
  let l = Ne("MenuItem"), a = y(null);
  o({ el: a, $el: a });
  let r = g(() => l.activeItemIndex.value !== null ? l.items.value[l.activeItemIndex.value].id === e.id : !1), u = g(() => ({ disabled: e.disabled, textValue: "", domRef: a }));
  V(() => {
    var f, c;
    let b = (c = (f = h(a)) == null ? void 0 : f.textContent) == null ? void 0 : c.toLowerCase().trim();
    b !== void 0 && (u.value.textValue = b);
  }), V(() => l.registerItem(e.id, u)), X(() => l.unregisterItem(e.id)), W(() => {
    l.menuState.value === 0 && r.value && l.activationTrigger.value !== 0 && z(() => {
      var f, c;
      return (c = (f = h(a)) == null ? void 0 : f.scrollIntoView) == null ? void 0 : c.call(f, { block: "nearest" });
    });
  });
  function s(f) {
    if (e.disabled)
      return f.preventDefault();
    l.closeMenu(), Tt(h(l.buttonRef));
  }
  function d() {
    if (e.disabled)
      return l.goToItem(C.Nothing);
    l.goToItem(C.Specific, e.id);
  }
  let i = At();
  function p(f) {
    i.update(f);
  }
  function m(f) {
    i.wasMoved(f) && (e.disabled || r.value || l.goToItem(C.Specific, e.id, 0));
  }
  function v(f) {
    i.wasMoved(f) && (e.disabled || r.value && l.goToItem(C.Nothing));
  }
  return () => {
    let { disabled: f } = e, c = { active: r.value, disabled: f, close: l.closeMenu }, { id: b, ...x } = e;
    return L({ ourProps: { id: b, ref: a, role: "menuitem", tabIndex: f === !0 ? void 0 : -1, "aria-disabled": f === !0 ? !0 : void 0, disabled: void 0, onClick: s, onFocus: d, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: v, onMouseleave: v }, theirProps: { ...n, ...x }, slot: c, attrs: n, slots: t, name: "MenuItem" });
  };
} });
function on(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Ue(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ae(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Ye = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Ye || {});
function an(e, t) {
  let n = je();
  if (!e)
    return n.dispose;
  let { transitionDuration: o, transitionDelay: l } = getComputedStyle(e), [a, r] = [o, l].map((u) => {
    let [s = 0] = u.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, i) => i - d);
    return s;
  });
  return a !== 0 ? n.setTimeout(() => t("finished"), a + r) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function ft(e, t, n, o, l, a) {
  let r = je(), u = a !== void 0 ? on(a) : () => {
  };
  return Ae(e, ...l), Ue(e, ...t, ...n), r.nextFrame(() => {
    Ae(e, ...n), Ue(e, ...o), r.add(an(e, (s) => (Ae(e, ...o, ...t), Ue(e, ...l), u(s))));
  }), r.add(() => Ae(e, ...t, ...n, ...o, ...l)), r.add(() => u("cancelled")), r.dispose;
}
function de(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let nt = Symbol("TransitionContext");
var rn = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(rn || {});
function un() {
  return J(nt, null) !== null;
}
function sn() {
  let e = J(nt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function dn() {
  let e = J(ot, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let ot = Symbol("NestingContext");
function Be(e) {
  return "children" in e ? Be(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function zt(e) {
  let t = y([]), n = y(!1);
  V(() => n.value = !0), X(() => n.value = !1);
  function o(a, r = ae.Hidden) {
    let u = t.value.findIndex(({ id: s }) => s === a);
    u !== -1 && (B(r, { [ae.Unmount]() {
      t.value.splice(u, 1);
    }, [ae.Hidden]() {
      t.value[u].state = "hidden";
    } }), !Be(t) && n.value && (e == null || e()));
  }
  function l(a) {
    let r = t.value.find(({ id: u }) => u === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => o(a, ae.Unmount);
  }
  return { children: t, register: l, unregister: o };
}
let Gt = ne.RenderStrategy, cn = T({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  let a = y(0);
  function r() {
    a.value |= N.Opening, t("beforeEnter");
  }
  function u() {
    a.value &= ~N.Opening, t("afterEnter");
  }
  function s() {
    a.value |= N.Closing, t("beforeLeave");
  }
  function d() {
    a.value &= ~N.Closing, t("afterLeave");
  }
  if (!un() && yl())
    return () => U(fn, { ...e, onBeforeEnter: r, onAfterEnter: u, onBeforeLeave: s, onAfterLeave: d }, o);
  let i = y(null), p = y("visible"), m = g(() => e.unmount ? ae.Unmount : ae.Hidden);
  l({ el: i, $el: i });
  let { show: v, appear: f } = sn(), { register: c, unregister: b } = dn(), x = { value: !0 }, D = G(), O = { value: !1 }, Y = zt(() => {
    !O.value && p.value !== "hidden" && (p.value = "hidden", b(D), d());
  });
  V(() => {
    let _ = c(D);
    X(_);
  }), W(() => {
    if (m.value === ae.Hidden && D) {
      if (v && p.value !== "visible") {
        p.value = "visible";
        return;
      }
      B(p.value, { hidden: () => b(D), visible: () => c(D) });
    }
  });
  let K = de(e.enter), S = de(e.enterFrom), P = de(e.enterTo), E = de(e.entered), w = de(e.leave), F = de(e.leaveFrom), j = de(e.leaveTo);
  V(() => {
    W(() => {
      if (p.value === "visible") {
        let _ = h(i);
        if (_ instanceof Comment && _.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function ie(_) {
    let R = x.value && !f.value, A = h(i);
    !A || !(A instanceof HTMLElement) || R || (O.value = !0, v.value && r(), v.value || s(), _(v.value ? ft(A, K, S, P, E, ($) => {
      O.value = !1, $ === Ye.Finished && u();
    }) : ft(A, w, F, j, E, ($) => {
      O.value = !1, $ === Ye.Finished && (Be(Y) || (p.value = "hidden", b(D), d()));
    })));
  }
  return V(() => {
    ue([v], (_, R, A) => {
      ie(A), x.value = !1;
    }, { immediate: !0 });
  }), Z(ot, Y), Ze(g(() => B(p.value, { visible: N.Open, hidden: N.Closed }) | a.value)), () => {
    let { appear: _, show: R, enter: A, enterFrom: $, enterTo: H, entered: Ce, leave: se, leaveFrom: qn, leaveTo: zn, ...at } = e, Xt = { ref: i }, Jt = { ...at, ...f && v && Te.isServer ? { class: ht([n.class, at.class, ...K, ...S]) } : {} };
    return L({ theirProps: Jt, ourProps: Xt, slot: {}, slots: o, attrs: n, features: Gt, visible: p.value === "visible", name: "TransitionChild" });
  };
} }), vn = cn, fn = T({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o }) {
  let l = Ie(), a = g(() => e.show === null && l !== null ? (l.value & N.Open) === N.Open : e.show);
  W(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = y(a.value ? "visible" : "hidden"), u = zt(() => {
    r.value = "hidden";
  }), s = y(!0), d = { show: a, appear: g(() => e.appear || !s.value) };
  return V(() => {
    W(() => {
      s.value = !1, a.value ? r.value = "visible" : Be(u) || (r.value = "hidden");
    });
  }), Z(ot, u), Z(nt, d), () => {
    let i = Me(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p = { unmount: e.unmount };
    return L({ ourProps: { ...p, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [U(vn, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...p, ...i }, o.default)] }, attrs: {}, features: Gt, visible: r.value === "visible", name: "Transition" });
  };
} });
var pt;
const pn = typeof window < "u";
pn && ((pt = window == null ? void 0 : window.navigator) == null ? void 0 : pt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function mn(e) {
  return e;
}
const Xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Je = "__vueuse_ssr_handlers__";
Xe[Je] = Xe[Je] || {};
Xe[Je];
var mt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(mt || (mt = {}));
var bn = Object.defineProperty, bt = Object.getOwnPropertySymbols, gn = Object.prototype.hasOwnProperty, hn = Object.prototype.propertyIsEnumerable, gt = (e, t, n) => t in e ? bn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, yn = (e, t) => {
  for (var n in t || (t = {}))
    gn.call(t, n) && gt(e, n, t[n]);
  if (bt)
    for (var n of bt(t))
      hn.call(t, n) && gt(e, n, t[n]);
  return e;
};
const xn = {
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
yn({
  linear: mn
}, xn);
const wn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
function Sn(e, t) {
  return g({
    get: () => e.modelValue,
    set: (n) => t("update:modelValue", n)
  });
}
const On = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, En = { name: "Error" }, Kt = /* @__PURE__ */ T({
  ...En,
  props: {
    error: null
  },
  setup(e) {
    return (t, n) => e.error ? (k(), q("div", On, [
      me(t.$slots, "default", {}, () => [
        Le(Pe(e.error), 1)
      ])
    ])) : Se("", !0);
  }
}), Pn = { name: "Actions" }, In = { class: "mt-8 border-t border-gray-200 pt-5" }, Tn = { class: "flex justify-end" }, Rn = { class: "inline-flex rounded-md shadow-sm" };
function Cn(e, t, n, o, l, a) {
  return k(), q("div", In, [
    oe("div", Tn, [
      oe("span", Rn, [
        me(e.$slots, "default")
      ])
    ])
  ]);
}
const Fn = /* @__PURE__ */ wn(Pn, [["render", Cn]]), An = { class: "relative flex items-start" }, Dn = { class: "flex h-5 items-center" }, kn = ["id", "value"], Ln = { class: "ml-3" }, Mn = ["for"], jn = { name: "Checkbox" }, Nn = /* @__PURE__ */ T({
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
    const n = Sn(e, t);
    return (o, l) => (k(), q(te, null, [
      oe("div", An, [
        oe("div", Dn, [
          qe(oe("input", fe({
            id: e.id,
            "onUpdate:modelValue": l[0] || (l[0] = (a) => ll(n) ? n.value = a : null),
            value: e.value,
            type: "checkbox",
            class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          }, o.$attrs), null, 16, kn), [
            [nl, Q(n)]
          ]),
          oe("div", Ln, [
            oe("label", {
              for: e.id,
              class: "block text-sm font-medium capitalize leading-5 text-gray-700"
            }, Pe(e.label), 9, Mn)
          ])
        ])
      ]),
      e.error ? (k(), le(Kt, {
        key: 0,
        error: e.error
      }, null, 8, ["error"])) : Se("", !0)
    ], 64));
  }
}), Bn = ["for"], Vn = { name: "Label" }, Qt = /* @__PURE__ */ T({
  ...Vn,
  props: {
    for: null
  },
  setup(e) {
    const t = e;
    return (n, o) => (k(), q("label", {
      for: t.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      me(n.$slots, "default")
    ], 8, Bn));
  }
}), We = /* @__PURE__ */ T({
  __name: "ElementGroup",
  props: {
    id: null,
    element: null,
    form: null,
    showLabel: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, n) => {
      var o;
      return k(), q("div", null, [
        e.showLabel ? (k(), le(Q(Qt), {
          key: 0,
          for: e.id
        }, {
          default: Oe(() => [
            Le(Pe(e.id.replaceAll("_id", "").replaceAll("_", " ")), 1)
          ]),
          _: 1
        }, 8, ["for"])) : Se("", !0),
        e.element.type ? (k(), le(ut(e.element.type), fe({
          key: e.id,
          id: e.id,
          modelValue: e.form[e.id],
          "onUpdate:modelValue": n[0] || (n[0] = (l) => e.form[e.id] = l)
        }, (o = e.element.props) != null ? o : null), null, 16, ["id", "modelValue"])) : (k(), le(ut(e.element), fe({
          key: e.id,
          id: e.id,
          modelValue: e.form[e.id],
          "onUpdate:modelValue": n[1] || (n[1] = (l) => e.form[e.id] = l)
        }, t.$attrs), null, 16, ["id", "modelValue"])),
        be(Q(Kt), {
          error: e.form.errors[e.id]
        }, null, 8, ["error"])
      ]);
    };
  }
}), $n = { key: 0 }, Hn = {
  key: 1,
  class: "grid grid-flow-col gap-x-4 gap-y-6"
}, Yt = /* @__PURE__ */ T({
  __name: "Schema",
  props: {
    element: null,
    schema: null,
    label: null
  },
  setup(e) {
    return (t, n) => Array.isArray(e.element) ? (k(), q("div", $n, [
      (k(!0), q(te, null, De(e.element, (o, l) => (k(), le(Yt, {
        element: o,
        label: l.toString(),
        schema: e.schema
      }, null, 8, ["element", "label", "schema"]))), 256))
    ])) : e.element.type === "grid" ? (k(), q("div", Hn, [
      (k(!0), q(te, null, De(e.element.schema, (o, l) => (k(), le(We, fe({
        key: l,
        id: l,
        element: o,
        form: e.schema.form
      }, o), null, 16, ["id", "element", "form"]))), 128))
    ])) : e.element.type === "checkboxes" ? (k(), q(te, { key: 2 }, [
      be(Q(Qt), null, {
        default: Oe(() => {
          var o;
          return [
            Le(Pe(((o = e.element.label) != null ? o : e.label).replaceAll("_id", "").replaceAll("_", " ")), 1)
          ];
        }),
        _: 1
      }),
      (k(!0), q(te, null, De(e.element.items, (o) => {
        var l, a, r;
        return k(), le(We, {
          id: (l = o.label) != null ? l : o,
          element: Q(Nn),
          modelValue: e.schema.form[e.label],
          "onUpdate:modelValue": n[0] || (n[0] = (u) => e.schema.form[e.label] = u),
          form: e.schema.form,
          label: (a = o.label) != null ? a : o,
          value: (r = o.value) != null ? r : o,
          "show-label": !1
        }, null, 8, ["id", "element", "modelValue", "form", "label", "value"]);
      }), 256))
    ], 64)) : (k(), le(We, fe({
      key: e.label,
      id: e.label,
      element: e.element,
      form: e.schema.form
    }, e.element), null, 16, ["id", "element", "form"]));
  }
}), Un = { class: "mx-auto mt-6 max-w-md space-y-6" }, Qn = /* @__PURE__ */ T({
  __name: "FormBuilder",
  props: {
    schema: null,
    submit: { default: "Save" }
  },
  setup(e) {
    return (t, n) => (k(), q("div", Un, [
      (k(!0), q(te, null, De(e.schema.schema, (o, l) => (k(), le(Yt, {
        element: o,
        label: l,
        schema: e.schema
      }, null, 8, ["element", "label", "schema"]))), 256)),
      be(Q(Fn), null, {
        default: Oe(() => [
          me(t.$slots, "actions", {
            form: e.schema.form
          }, () => [
            be(Q(fl), {
              loading: e.schema.form.processing,
              type: "submit"
            }, {
              default: Oe(() => [
                Le(Pe(e.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 3
      })
    ]));
  }
}), Wn = (e) => Object.keys(e).reduce((t, n) => {
  var o;
  return t[n] = (o = e[n].value) != null ? o : null, t;
}, {});
function Yn(e) {
  const t = rl(
    Object.keys(e).reduce((n, o) => {
      var l, a;
      return e[o].schema ? { ...n, ...Wn(e[o].schema) } : e[o].type === "checkboxes" ? (n[o] = (l = e[o].checked) != null ? l : [], n) : (n[o] = (a = e[o].value) != null ? a : null, n);
    }, {})
  );
  return {
    schema: e,
    form: t
  };
}
export {
  We as ElementGroup,
  Qn as FormBuilder,
  Yn as useSchema
};
