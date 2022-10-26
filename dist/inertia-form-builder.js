import { defineComponent as ce, ref as H, computed as D, toRaw as G, watch as Xr, provide as sr, h as Xt, Fragment as oe, watchEffect as ke, onMounted as mt, onUnmounted as Kn, nextTick as re, cloneVNode as Zo, inject as cr, openBlock as S, createElementBlock as F, createVNode as Y, unref as V, isRef as ze, withCtx as ne, createElementVNode as B, normalizeClass as Pe, createBlock as q, renderList as Ve, toDisplayString as te, createCommentVNode as Q, withDirectives as he, mergeProps as ae, vModelCheckbox as ea, normalizeProps as pr, guardReactiveProps as fr, vModelDynamic as ta, vModelText as Xn, renderSlot as me, vModelSelect as ra, vShow as yt, createTextVNode as tt, resolveDynamicComponent as Yr } from "vue";
import { Link as Yn, useForm as na } from "@inertiajs/inertia-vue3";
const oa = /* @__PURE__ */ B("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), aa = /* @__PURE__ */ B("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), ia = [
  oa,
  aa
], la = { name: "Spinner" }, vt = /* @__PURE__ */ Object.assign(la, {
  props: {
    textClass: {
      type: String,
      default: "text-white"
    }
  },
  setup(e) {
    return (t, r) => (S(), F("svg", {
      class: Pe(["h-5 w-5 animate-spin", e.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, ia, 2));
  }
}), ua = ["disabled", "type"], sa = { name: "PrimaryButton" }, ca = /* @__PURE__ */ Object.assign(sa, {
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
  setup(e, { emit: t }) {
    const r = e, o = D(() => ["button", "submit"].includes(r.type)), n = [
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
    return (a, i) => (S(), F(oe, null, [
      V(o) ? Q("", !0) : (S(), q(V(Yn), ae({
        key: 0,
        onClick: i[0] || (i[0] = (u) => t("click")),
        class: n,
        disabled: e.loading
      }, a.$attrs), {
        default: ne(() => [
          me(a.$slots, "default"),
          he(Y(vt, { class: "ml-3" }, null, 512), [
            [yt, e.loading]
          ])
        ]),
        _: 3
      }, 16, ["disabled"])),
      V(o) ? (S(), F("button", ae({
        key: 1,
        onClick: i[1] || (i[1] = (u) => t("click")),
        class: n,
        disabled: e.loading,
        type: e.type
      }, a.$attrs), [
        me(a.$slots, "default"),
        he(Y(vt, { class: "ml-3" }, null, 512), [
          [yt, e.loading]
        ])
      ], 16, ua)) : Q("", !0)
    ], 64));
  }
}), pa = ["disabled", "type"], fa = { name: "SecondaryButton" }, da = /* @__PURE__ */ Object.assign(fa, {
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
  setup(e, { emit: t }) {
    const r = e, o = D(() => ["button", "submit"].includes(r.type)), n = [
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
    return (a, i) => (S(), F(oe, null, [
      V(o) ? Q("", !0) : (S(), q(V(Yn), ae({
        key: 0,
        onClick: i[0] || (i[0] = (u) => t("click")),
        class: n,
        disabled: e.loading
      }, a.$attrs), {
        default: ne(() => [
          me(a.$slots, "default"),
          he(Y(vt, {
            class: "ml-3",
            "text-class": "text-gray-400"
          }, null, 512), [
            [yt, e.loading]
          ])
        ]),
        _: 3
      }, 16, ["disabled"])),
      V(o) ? (S(), F("button", ae({
        key: 1,
        onClick: i[1] || (i[1] = (u) => t("click")),
        class: n,
        disabled: e.loading,
        type: e.type
      }, a.$attrs), [
        me(a.$slots, "default"),
        he(Y(vt, {
          class: "ml-3",
          "text-class": "text-gray-400"
        }, null, 512), [
          [yt, e.loading]
        ])
      ], 16, pa)) : Q("", !0)
    ], 64));
  }
});
function ma(e, t) {
  return S(), q("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Y("path", {
      "fill-rule": "evenodd",
      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ya(e, t) {
  return S(), q("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Y("path", {
      "fill-rule": "evenodd",
      d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ]);
}
function le(e, t, ...r) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...r) : n;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, le), o;
}
var Ie = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ie || {}), va = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(va || {});
function pe({ visible: e = !0, features: t = 0, ourProps: r, theirProps: o, ...n }) {
  var a;
  let i = ha(o, r), u = Object.assign(n, { props: i });
  if (e || t & 2 && i.static)
    return kt(u);
  if (t & 1) {
    let l = (a = i.unmount) == null || a ? 0 : 1;
    return le(l, { [0]() {
      return null;
    }, [1]() {
      return kt({ ...n, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return kt(u);
}
function kt({ props: e, attrs: t, slots: r, slot: o, name: n }) {
  var a;
  let { as: i, ...u } = St(e, ["unmount", "static"]), l = (a = r.default) == null ? void 0 : a.call(r, o), y = {};
  if (i === "template") {
    if (l = Zn(l), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [f, ...c] = l != null ? l : [];
      if (!ga(f) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).sort((h, g) => h.localeCompare(g)).map((h) => `  - ${h}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((h) => `  - ${h}`).join(`
`)].join(`
`));
      return Zo(f, Object.assign({}, u, y));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return Xt(i, Object.assign({}, u, y), l);
}
function Zn(e) {
  return e.flatMap((t) => t.type === oe ? Zn(t.children) : [t]);
}
function ha(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let o of e)
    for (let n in o)
      n.startsWith("on") && typeof o[n] == "function" ? (r[n] != null || (r[n] = []), r[n].push(o[n])) : t[n] = o[n];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((o) => [o, void 0])));
  for (let o in r)
    Object.assign(t, { [o](n, ...a) {
      let i = r[o];
      for (let u of i) {
        if (n != null && n.defaultPrevented)
          return;
        u(n, ...a);
      }
    } });
  return t;
}
function ba(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function St(e, t = []) {
  let r = Object.assign({}, e);
  for (let o of t)
    o in r && delete r[o];
  return r;
}
function ga(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let wa = 0;
function Sa() {
  return ++wa;
}
function xe() {
  return Sa();
}
var M = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(M || {});
function xa(e) {
  throw new Error("Unexpected object: " + e);
}
var U = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(U || {});
function eo(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), n = o != null ? o : -1, a = (() => {
    switch (e.focus) {
      case 0:
        return r.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = r.slice().reverse().findIndex((u, l, y) => n !== -1 && y.length - l - 1 >= n ? !1 : !t.resolveDisabled(u));
        return i === -1 ? i : r.length - 1 - i;
      }
      case 2:
        return r.findIndex((i, u) => u <= n ? !1 : !t.resolveDisabled(i));
      case 3: {
        let i = r.slice().reverse().findIndex((u) => !t.resolveDisabled(u));
        return i === -1 ? i : r.length - 1 - i;
      }
      case 4:
        return r.findIndex((i) => t.resolveId(i) === e.id);
      case 5:
        return null;
      default:
        xa(e);
    }
  })();
  return a === -1 ? o : a;
}
function C(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let to = Symbol("Context");
var Re = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Re || {});
function ro() {
  return cr(to, null);
}
function no(e) {
  sr(to, e);
}
function Zr(e, t) {
  if (e)
    return e;
  let r = t != null ? t : "button";
  if (typeof r == "string" && r.toLowerCase() === "button")
    return "button";
}
function oo(e, t) {
  let r = H(Zr(e.value.type, e.value.as));
  return mt(() => {
    r.value = Zr(e.value.type, e.value.as);
  }), ke(() => {
    var o;
    r.value || !C(t) || C(t) instanceof HTMLButtonElement && !((o = C(t)) != null && o.hasAttribute("type")) && (r.value = "button");
  }), r;
}
function ao(e) {
  if (typeof window > "u")
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = C(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function io({ container: e, accept: t, walk: r, enabled: o }) {
  ke(() => {
    let n = e.value;
    if (!n || o !== void 0 && !o.value)
      return;
    let a = ao(e);
    if (!a)
      return;
    let i = Object.assign((l) => t(l), { acceptNode: t }), u = a.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, i, !1);
    for (; u.nextNode(); )
      r(u.currentNode);
  });
}
let en = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Oa = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Oa || {}), ja = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(ja || {}), Pa = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Pa || {}), dr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(dr || {});
function lo(e, t = 0) {
  var r;
  return e === ((r = ao(e)) == null ? void 0 : r.body) ? !1 : le(t, { [0]() {
    return e.matches(en);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(en))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
function uo(e, t = (r) => r) {
  return e.slice().sort((r, o) => {
    let n = t(r), a = t(o);
    if (n === null || a === null)
      return 0;
    let i = n.compareDocumentPosition(a);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function tn(e, t, r) {
  typeof window < "u" && ke((o) => {
    window.addEventListener(e, t, r), o(() => window.removeEventListener(e, t, r));
  });
}
function so(e, t, r = D(() => !0)) {
  function o(n, a) {
    if (!r.value || n.defaultPrevented)
      return;
    let i = a(n);
    if (i === null || !i.ownerDocument.documentElement.contains(i))
      return;
    let u = function l(y) {
      return typeof y == "function" ? l(y()) : Array.isArray(y) || y instanceof Set ? y : [y];
    }(e);
    for (let l of u) {
      if (l === null)
        continue;
      let y = l instanceof HTMLElement ? l : C(l);
      if (y != null && y.contains(i))
        return;
    }
    return !lo(i, dr.Loose) && i.tabIndex !== -1 && n.preventDefault(), t(n, i);
  }
  tn("click", (n) => o(n, (a) => a.target), !0), tn("blur", (n) => o(n, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var co = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(co || {});
let Ea = ce({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: o, ...n } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return pe({ ourProps: a, theirProps: n, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function po(e = {}, t = null, r = []) {
  for (let [o, n] of Object.entries(e))
    mo(r, fo(t, o), n);
  return r;
}
function fo(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function mo(e, t, r) {
  if (Array.isArray(r))
    for (let [o, n] of r.entries())
      mo(e, fo(t, o.toString()), n);
  else
    r instanceof Date ? e.push([t, r.toISOString()]) : typeof r == "boolean" ? e.push([t, r ? "1" : "0"]) : typeof r == "string" ? e.push([t, r]) : typeof r == "number" ? e.push([t, `${r}`]) : r == null ? e.push([t, ""]) : po(r, t, e);
}
var Aa = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Aa || {}), ka = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(ka || {}), Ia = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Ia || {});
let yo = Symbol("ComboboxContext");
function Ge(e) {
  let t = cr(yo, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ge), r;
  }
  return t;
}
let Ra = ce({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean] }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: r, emit: o }) {
  let n = H(1), a = H(null), i = H(null), u = H(null), l = H(null), y = H({ static: !1, hold: !1 }), f = H([]), c = H(null), h = H(1), g = H(!1);
  function m(j = (A) => A) {
    let A = c.value !== null ? f.value[c.value] : null, v = uo(j(f.value.slice()), (s) => C(s.dataRef.domRef)), d = A ? v.indexOf(A) : null;
    return d === -1 && (d = null), { options: v, activeOptionIndex: d };
  }
  let x = D(() => e.modelValue), T = D(() => e.multiple ? 1 : 0), E = D(() => e.nullable), O = { comboboxState: n, value: x, mode: T, compare(j, A) {
    return j === A;
  }, nullable: E, inputRef: i, labelRef: a, buttonRef: u, optionsRef: l, disabled: D(() => e.disabled), options: f, change(j) {
    o("update:modelValue", j);
  }, activeOptionIndex: D(() => {
    if (g.value && c.value === null && f.value.length > 0) {
      let j = f.value.findIndex((A) => !A.dataRef.disabled);
      if (j !== -1)
        return j;
    }
    return c.value;
  }), activationTrigger: h, inputPropsRef: H({ displayValue: void 0 }), optionsPropsRef: y, closeCombobox() {
    g.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, c.value = null);
  }, openCombobox() {
    if (g.value = !0, e.disabled || n.value === 0)
      return;
    let j = f.value.findIndex((A) => {
      let v = G(A.dataRef.value);
      return le(T.value, { [0]: () => O.compare(G(O.value.value), G(v)), [1]: () => G(O.value.value).some((d) => O.compare(G(d), G(v))) });
    });
    j !== -1 && (c.value = j), n.value = 0;
  }, goToOption(j, A, v) {
    if (g.value = !1, e.disabled || l.value && !y.value.static && n.value === 1)
      return;
    let d = m();
    if (d.activeOptionIndex === null) {
      let p = d.options.findIndex((b) => !b.dataRef.disabled);
      p !== -1 && (d.activeOptionIndex = p);
    }
    let s = eo(j === U.Specific ? { focus: U.Specific, id: A } : { focus: j }, { resolveItems: () => d.options, resolveActiveIndex: () => d.activeOptionIndex, resolveId: (p) => p.id, resolveDisabled: (p) => p.dataRef.disabled });
    c.value = s, h.value = v != null ? v : 1, f.value = d.options;
  }, syncInputValue() {
    var j;
    let A = O.value.value;
    if (!C(O.inputRef))
      return;
    let v = O.inputPropsRef.value.displayValue;
    typeof v == "function" ? O.inputRef.value.value = (j = v(A)) != null ? j : "" : typeof A == "string" ? O.inputRef.value.value = A : O.inputRef.value.value = "";
  }, selectOption(j) {
    let A = f.value.find((d) => d.id === j);
    if (!A)
      return;
    let { dataRef: v } = A;
    o("update:modelValue", le(T.value, { [0]: () => v.value, [1]: () => {
      let d = G(O.value.value).slice(), s = G(v.value), p = d.indexOf(s);
      return p === -1 ? d.push(s) : d.splice(p, 1), d;
    } })), O.syncInputValue();
  }, selectActiveOption() {
    if (O.activeOptionIndex.value === null)
      return;
    let { dataRef: j, id: A } = f.value[O.activeOptionIndex.value];
    o("update:modelValue", le(T.value, { [0]: () => j.value, [1]: () => {
      let v = G(O.value.value).slice(), d = G(j.value), s = v.indexOf(d);
      return s === -1 ? v.push(d) : v.splice(s, 1), v;
    } })), O.syncInputValue(), O.goToOption(U.Specific, A);
  }, registerOption(j, A) {
    let v = { id: j, dataRef: A }, d = m((s) => [...s, v]);
    if (c.value === null) {
      let s = A.value.value;
      le(T.value, { [0]: () => O.compare(G(O.value.value), G(s)), [1]: () => G(O.value.value).some((p) => O.compare(G(p), G(s))) }) && (d.activeOptionIndex = d.options.indexOf(v));
    }
    f.value = d.options, c.value = d.activeOptionIndex, h.value = 1;
  }, unregisterOption(j) {
    let A = m((v) => {
      let d = v.findIndex((s) => s.id === j);
      return d !== -1 && v.splice(d, 1), v;
    });
    f.value = A.options, c.value = A.activeOptionIndex, h.value = 1;
  } };
  so([i, u, l], () => O.closeCombobox(), D(() => n.value === 0)), Xr([O.value, O.inputRef], () => O.syncInputValue(), { immediate: !0 }), Xr(O.comboboxState, (j) => {
    j === 1 && O.syncInputValue();
  }, { immediate: !0 }), sr(yo, O), no(D(() => le(n.value, { [0]: Re.Open, [1]: Re.Closed })));
  let ee = D(() => O.activeOptionIndex.value === null ? null : f.value[O.activeOptionIndex.value].dataRef.value);
  return () => {
    let { name: j, modelValue: A, disabled: v, ...d } = e, s = { open: n.value === 0, disabled: v, activeIndex: O.activeOptionIndex.value, activeOption: ee.value };
    return Xt(oe, [...j != null && A != null ? po({ [j]: A }).map(([p, b]) => Xt(Ea, ba({ features: co.Hidden, key: p, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: p, value: b }))) : [], pe({ theirProps: { ...r, ...St(d, ["nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: s, slots: t, attrs: r, name: "Combobox" })]);
  };
} });
ce({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" } }, setup(e, { attrs: t, slots: r }) {
  let o = Ge("ComboboxLabel"), n = `headlessui-combobox-label-${xe()}`;
  function a() {
    var i;
    (i = C(o.inputRef)) == null || i.focus({ preventScroll: !0 });
  }
  return () => {
    let i = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, u = { id: n, ref: o.labelRef, onClick: a };
    return pe({ ourProps: u, theirProps: e, slot: i, attrs: t, slots: r, name: "ComboboxLabel" });
  };
} });
let Ca = ce({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" } }, setup(e, { attrs: t, slots: r, expose: o }) {
  let n = Ge("ComboboxButton"), a = `headlessui-combobox-button-${xe()}`;
  o({ el: n.buttonRef, $el: n.buttonRef });
  function i(y) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (y.preventDefault(), n.openCombobox()), re(() => {
      var f;
      return (f = C(n.inputRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    }));
  }
  function u(y) {
    switch (y.key) {
      case M.ArrowDown:
        y.preventDefault(), y.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), re(() => {
          var f;
          return (f = n.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case M.ArrowUp:
        y.preventDefault(), y.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), re(() => {
          n.value.value || n.goToOption(U.Last);
        })), re(() => {
          var f;
          return (f = n.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case M.Escape:
        if (n.comboboxState.value !== 0)
          return;
        y.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && y.stopPropagation(), n.closeCombobox(), re(() => {
          var f;
          return (f = n.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let l = oo(D(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var y, f;
    let c = { open: n.comboboxState.value === 0, disabled: n.disabled.value }, h = { ref: n.buttonRef, id: a, type: l.value, tabindex: "-1", "aria-haspopup": !0, "aria-controls": (y = C(n.optionsRef)) == null ? void 0 : y.id, "aria-expanded": n.disabled.value ? void 0 : n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(f = C(n.labelRef)) == null ? void 0 : f.id, a].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: u, onClick: i };
    return pe({ ourProps: h, theirProps: e, slot: c, attrs: t, slots: r, name: "ComboboxButton" });
  };
} }), Ta = ce({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: o, expose: n }) {
  let a = Ge("ComboboxInput"), i = `headlessui-combobox-input-${xe()}`;
  a.inputPropsRef = D(() => e), n({ el: a.inputRef, $el: a.inputRef });
  function u(f) {
    switch (f.key) {
      case M.Backspace:
      case M.Delete:
        if (a.mode.value !== 0 || !a.nullable.value)
          return;
        let c = f.currentTarget;
        requestAnimationFrame(() => {
          if (c.value === "") {
            a.change(null);
            let h = C(a.optionsRef);
            h && (h.scrollTop = 0), a.goToOption(U.Nothing);
          }
        });
        break;
      case M.Enter:
        if (a.comboboxState.value !== 0)
          return;
        if (f.preventDefault(), f.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case M.ArrowDown:
        return f.preventDefault(), f.stopPropagation(), le(a.comboboxState.value, { [0]: () => a.goToOption(U.Next), [1]: () => a.openCombobox() });
      case M.ArrowUp:
        return f.preventDefault(), f.stopPropagation(), le(a.comboboxState.value, { [0]: () => a.goToOption(U.Previous), [1]: () => {
          a.openCombobox(), re(() => {
            a.value.value || a.goToOption(U.Last);
          });
        } });
      case M.Home:
      case M.PageUp:
        return f.preventDefault(), f.stopPropagation(), a.goToOption(U.First);
      case M.End:
      case M.PageDown:
        return f.preventDefault(), f.stopPropagation(), a.goToOption(U.Last);
      case M.Escape:
        if (a.comboboxState.value !== 0)
          return;
        f.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && f.stopPropagation(), a.closeCombobox();
        break;
      case M.Tab:
        if (a.comboboxState.value !== 0)
          return;
        a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function l(f) {
    t("change", f);
  }
  function y(f) {
    a.openCombobox(), t("change", f);
  }
  return () => {
    var f, c, h, g, m, x;
    let T = { open: a.comboboxState.value === 0 }, E = { "aria-controls": (f = a.optionsRef.value) == null ? void 0 : f.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (c = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : c.id, "aria-multiselectable": a.mode.value === 1 ? !0 : void 0, "aria-labelledby": (m = (h = C(a.labelRef)) == null ? void 0 : h.id) != null ? m : (g = C(a.buttonRef)) == null ? void 0 : g.id, id: i, onKeydown: u, onChange: l, onInput: y, role: "combobox", type: (x = r.type) != null ? x : "text", tabIndex: 0, ref: a.inputRef }, O = St(e, ["displayValue"]);
    return pe({ ourProps: E, theirProps: O, slot: T, attrs: r, slots: o, features: Ie.RenderStrategy | Ie.Static, name: "ComboboxInput" });
  };
} }), Na = ce({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: r, expose: o }) {
  let n = Ge("ComboboxOptions"), a = `headlessui-combobox-options-${xe()}`;
  o({ el: n.optionsRef, $el: n.optionsRef }), ke(() => {
    n.optionsPropsRef.value.static = e.static;
  }), ke(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let i = ro(), u = D(() => i !== null ? i.value === Re.Open : n.comboboxState.value === 0);
  return io({ container: D(() => C(n.optionsRef)), enabled: D(() => n.comboboxState.value === 0), accept(l) {
    return l.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : l.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(l) {
    l.setAttribute("role", "none");
  } }), () => {
    var l, y, f, c;
    let h = { open: n.comboboxState.value === 0 }, g = { "aria-activedescendant": n.activeOptionIndex.value === null || (l = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : l.id, "aria-labelledby": (c = (y = C(n.labelRef)) == null ? void 0 : y.id) != null ? c : (f = C(n.buttonRef)) == null ? void 0 : f.id, id: a, ref: n.optionsRef, role: "listbox" }, m = St(e, ["hold"]);
    return pe({ ourProps: g, theirProps: m, slot: h, attrs: t, slots: r, features: Ie.RenderStrategy | Ie.Static, visible: u.value, name: "ComboboxOptions" });
  };
} }), Da = ce({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r, expose: o }) {
  let n = Ge("ComboboxOption"), a = `headlessui-combobox-option-${xe()}`, i = H(null);
  o({ el: i, $el: i });
  let u = D(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === a : !1), l = D(() => le(n.mode.value, { [0]: () => n.compare(G(n.value.value), G(e.value)), [1]: () => G(n.value.value).some((m) => n.compare(G(m), G(e.value))) })), y = D(() => ({ disabled: e.disabled, value: e.value, domRef: i }));
  mt(() => n.registerOption(a, y)), Kn(() => n.unregisterOption(a)), ke(() => {
    n.comboboxState.value === 0 && (!u.value || n.activationTrigger.value !== 0 && re(() => {
      var m, x;
      return (x = (m = C(i)) == null ? void 0 : m.scrollIntoView) == null ? void 0 : x.call(m, { block: "nearest" });
    }));
  });
  function f(m) {
    var x;
    if (e.disabled)
      return m.preventDefault();
    n.selectOption(a), n.mode.value === 0 && (n.closeCombobox(), (x = C(n.inputRef)) == null || x.focus({ preventScroll: !0 }));
  }
  function c() {
    if (e.disabled)
      return n.goToOption(U.Nothing);
    n.goToOption(U.Specific, a);
  }
  function h() {
    e.disabled || u.value || n.goToOption(U.Specific, a, 0);
  }
  function g() {
    e.disabled || !u.value || n.optionsPropsRef.value.hold || n.goToOption(U.Nothing);
  }
  return () => {
    let { disabled: m } = e, x = { active: u.value, selected: l.value, disabled: m }, T = { id: a, ref: i, role: "option", tabIndex: m === !0 ? void 0 : -1, "aria-disabled": m === !0 ? !0 : void 0, "aria-selected": l.value === !0 ? l.value : void 0, disabled: void 0, onClick: f, onFocus: c, onPointermove: h, onMousemove: h, onPointerleave: g, onMouseleave: g };
    return pe({ ourProps: T, theirProps: e, slot: x, attrs: r, slots: t, name: "ComboboxOption" });
  };
} });
var La = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(La || {}), Fa = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Fa || {});
function Ma(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let vo = Symbol("MenuContext");
function xt(e) {
  let t = cr(vo, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, xt), r;
  }
  return t;
}
ce({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: r }) {
  let o = H(1), n = H(null), a = H(null), i = H([]), u = H(""), l = H(null), y = H(1);
  function f(h = (g) => g) {
    let g = l.value !== null ? i.value[l.value] : null, m = uo(h(i.value.slice()), (T) => C(T.dataRef.domRef)), x = g ? m.indexOf(g) : null;
    return x === -1 && (x = null), { items: m, activeItemIndex: x };
  }
  let c = { menuState: o, buttonRef: n, itemsRef: a, items: i, searchQuery: u, activeItemIndex: l, activationTrigger: y, closeMenu: () => {
    o.value = 1, l.value = null;
  }, openMenu: () => o.value = 0, goToItem(h, g, m) {
    let x = f(), T = eo(h === U.Specific ? { focus: U.Specific, id: g } : { focus: h }, { resolveItems: () => x.items, resolveActiveIndex: () => x.activeItemIndex, resolveId: (E) => E.id, resolveDisabled: (E) => E.dataRef.disabled });
    u.value = "", l.value = T, y.value = m != null ? m : 1, i.value = x.items;
  }, search(h) {
    let g = u.value !== "" ? 0 : 1;
    u.value += h.toLowerCase();
    let m = (l.value !== null ? i.value.slice(l.value + g).concat(i.value.slice(0, l.value + g)) : i.value).find((T) => T.dataRef.textValue.startsWith(u.value) && !T.dataRef.disabled), x = m ? i.value.indexOf(m) : -1;
    x === -1 || x === l.value || (l.value = x, y.value = 1);
  }, clearSearch() {
    u.value = "";
  }, registerItem(h, g) {
    let m = f((x) => [...x, { id: h, dataRef: g }]);
    i.value = m.items, l.value = m.activeItemIndex, y.value = 1;
  }, unregisterItem(h) {
    let g = f((m) => {
      let x = m.findIndex((T) => T.id === h);
      return x !== -1 && m.splice(x, 1), m;
    });
    i.value = g.items, l.value = g.activeItemIndex, y.value = 1;
  } };
  return so([n, a], (h, g) => {
    var m;
    c.closeMenu(), lo(g, dr.Loose) || (h.preventDefault(), (m = C(n)) == null || m.focus());
  }, D(() => o.value === 0)), sr(vo, c), no(D(() => le(o.value, { [0]: Re.Open, [1]: Re.Closed }))), () => {
    let h = { open: o.value === 0 };
    return pe({ ourProps: {}, theirProps: e, slot: h, slots: t, attrs: r, name: "Menu" });
  };
} });
ce({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" } }, setup(e, { attrs: t, slots: r, expose: o }) {
  let n = xt("MenuButton"), a = `headlessui-menu-button-${xe()}`;
  o({ el: n.buttonRef, $el: n.buttonRef });
  function i(f) {
    switch (f.key) {
      case M.Space:
      case M.Enter:
      case M.ArrowDown:
        f.preventDefault(), f.stopPropagation(), n.openMenu(), re(() => {
          var c;
          (c = C(n.itemsRef)) == null || c.focus({ preventScroll: !0 }), n.goToItem(U.First);
        });
        break;
      case M.ArrowUp:
        f.preventDefault(), f.stopPropagation(), n.openMenu(), re(() => {
          var c;
          (c = C(n.itemsRef)) == null || c.focus({ preventScroll: !0 }), n.goToItem(U.Last);
        });
        break;
    }
  }
  function u(f) {
    switch (f.key) {
      case M.Space:
        f.preventDefault();
        break;
    }
  }
  function l(f) {
    e.disabled || (n.menuState.value === 0 ? (n.closeMenu(), re(() => {
      var c;
      return (c = C(n.buttonRef)) == null ? void 0 : c.focus({ preventScroll: !0 });
    })) : (f.preventDefault(), n.openMenu(), Ma(() => {
      var c;
      return (c = C(n.itemsRef)) == null ? void 0 : c.focus({ preventScroll: !0 });
    })));
  }
  let y = oo(D(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var f;
    let c = { open: n.menuState.value === 0 }, h = { ref: n.buttonRef, id: a, type: y.value, "aria-haspopup": !0, "aria-controls": (f = C(n.itemsRef)) == null ? void 0 : f.id, "aria-expanded": e.disabled ? void 0 : n.menuState.value === 0, onKeydown: i, onKeyup: u, onClick: l };
    return pe({ ourProps: h, theirProps: e, slot: c, attrs: t, slots: r, name: "MenuButton" });
  };
} });
ce({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: r, expose: o }) {
  let n = xt("MenuItems"), a = `headlessui-menu-items-${xe()}`, i = H(null);
  o({ el: n.itemsRef, $el: n.itemsRef }), io({ container: D(() => C(n.itemsRef)), enabled: D(() => n.menuState.value === 0), accept(c) {
    return c.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c) {
    c.setAttribute("role", "none");
  } });
  function u(c) {
    var h;
    switch (i.value && clearTimeout(i.value), c.key) {
      case M.Space:
        if (n.searchQuery.value !== "")
          return c.preventDefault(), c.stopPropagation(), n.search(c.key);
      case M.Enter:
        if (c.preventDefault(), c.stopPropagation(), n.activeItemIndex.value !== null) {
          let g = n.items.value[n.activeItemIndex.value];
          (h = C(g.dataRef.domRef)) == null || h.click();
        }
        n.closeMenu(), re(() => {
          var g;
          return (g = C(n.buttonRef)) == null ? void 0 : g.focus({ preventScroll: !0 });
        });
        break;
      case M.ArrowDown:
        return c.preventDefault(), c.stopPropagation(), n.goToItem(U.Next);
      case M.ArrowUp:
        return c.preventDefault(), c.stopPropagation(), n.goToItem(U.Previous);
      case M.Home:
      case M.PageUp:
        return c.preventDefault(), c.stopPropagation(), n.goToItem(U.First);
      case M.End:
      case M.PageDown:
        return c.preventDefault(), c.stopPropagation(), n.goToItem(U.Last);
      case M.Escape:
        c.preventDefault(), c.stopPropagation(), n.closeMenu(), re(() => {
          var g;
          return (g = C(n.buttonRef)) == null ? void 0 : g.focus({ preventScroll: !0 });
        });
        break;
      case M.Tab:
        c.preventDefault(), c.stopPropagation();
        break;
      default:
        c.key.length === 1 && (n.search(c.key), i.value = setTimeout(() => n.clearSearch(), 350));
        break;
    }
  }
  function l(c) {
    switch (c.key) {
      case M.Space:
        c.preventDefault();
        break;
    }
  }
  let y = ro(), f = D(() => y !== null ? y.value === Re.Open : n.menuState.value === 0);
  return () => {
    var c, h;
    let g = { open: n.menuState.value === 0 }, m = { "aria-activedescendant": n.activeItemIndex.value === null || (c = n.items.value[n.activeItemIndex.value]) == null ? void 0 : c.id, "aria-labelledby": (h = C(n.buttonRef)) == null ? void 0 : h.id, id: a, onKeydown: u, onKeyup: l, role: "menu", tabIndex: 0, ref: n.itemsRef };
    return pe({ ourProps: m, theirProps: e, slot: g, attrs: t, slots: r, features: Ie.RenderStrategy | Ie.Static, visible: f.value, name: "MenuItems" });
  };
} });
ce({ name: "MenuItem", props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r, expose: o }) {
  let n = xt("MenuItem"), a = `headlessui-menu-item-${xe()}`, i = H(null);
  o({ el: i, $el: i });
  let u = D(() => n.activeItemIndex.value !== null ? n.items.value[n.activeItemIndex.value].id === a : !1), l = D(() => ({ disabled: e.disabled, textValue: "", domRef: i }));
  mt(() => {
    var g, m;
    let x = (m = (g = C(i)) == null ? void 0 : g.textContent) == null ? void 0 : m.toLowerCase().trim();
    x !== void 0 && (l.value.textValue = x);
  }), mt(() => n.registerItem(a, l)), Kn(() => n.unregisterItem(a)), ke(() => {
    n.menuState.value === 0 && (!u.value || n.activationTrigger.value !== 0 && re(() => {
      var g, m;
      return (m = (g = C(i)) == null ? void 0 : g.scrollIntoView) == null ? void 0 : m.call(g, { block: "nearest" });
    }));
  });
  function y(g) {
    if (e.disabled)
      return g.preventDefault();
    n.closeMenu(), re(() => {
      var m;
      return (m = C(n.buttonRef)) == null ? void 0 : m.focus({ preventScroll: !0 });
    });
  }
  function f() {
    if (e.disabled)
      return n.goToItem(U.Nothing);
    n.goToItem(U.Specific, a);
  }
  function c() {
    e.disabled || u.value || n.goToItem(U.Specific, a, 0);
  }
  function h() {
    e.disabled || !u.value || n.goToItem(U.Nothing);
  }
  return () => {
    let { disabled: g } = e, m = { active: u.value, disabled: g };
    return pe({ ourProps: { id: a, ref: i, role: "menuitem", tabIndex: g === !0 ? void 0 : -1, "aria-disabled": g === !0 ? !0 : void 0, onClick: y, onFocus: f, onPointermove: c, onMousemove: c, onPointerleave: h, onMouseleave: h }, theirProps: e, slot: m, attrs: r, slots: t, name: "MenuItem" });
  };
} });
var rn;
const Va = typeof window < "u";
Va && ((rn = window == null ? void 0 : window.navigator) == null ? void 0 : rn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ba(e) {
  return e;
}
const Yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Zt = "__vueuse_ssr_handlers__";
Yt[Zt] = Yt[Zt] || {};
Yt[Zt];
var nn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(nn || (nn = {}));
var Ua = Object.defineProperty, on = Object.getOwnPropertySymbols, $a = Object.prototype.hasOwnProperty, Ha = Object.prototype.propertyIsEnumerable, an = (e, t, r) => t in e ? Ua(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, qa = (e, t) => {
  for (var r in t || (t = {}))
    $a.call(t, r) && an(e, r, t[r]);
  if (on)
    for (var r of on(t))
      Ha.call(t, r) && an(e, r, t[r]);
  return e;
};
const Wa = {
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
qa({
  linear: Ba
}, Wa);
function za(e) {
  var t = e.default;
  if (typeof t == "function") {
    var r = function() {
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var n = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(r, o, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), r;
}
var Ga = {}, ho = { exports: {} }, mr = { exports: {} }, bo = function(e, t) {
  return function() {
    for (var r = new Array(arguments.length), o = 0; o < r.length; o++)
      r[o] = arguments[o];
    return e.apply(t, r);
  };
}, Qa = bo, Ce = Object.prototype.toString;
function yr(e) {
  return Ce.call(e) === "[object Array]";
}
function er(e) {
  return typeof e > "u";
}
function Ja(e) {
  return e !== null && !er(e) && e.constructor !== null && !er(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function _a(e) {
  return Ce.call(e) === "[object ArrayBuffer]";
}
function Ka(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function Xa(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && e.buffer instanceof ArrayBuffer, t;
}
function Ya(e) {
  return typeof e == "string";
}
function Za(e) {
  return typeof e == "number";
}
function go(e) {
  return e !== null && typeof e == "object";
}
function ft(e) {
  if (Ce.call(e) !== "[object Object]")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function ei(e) {
  return Ce.call(e) === "[object Date]";
}
function ti(e) {
  return Ce.call(e) === "[object File]";
}
function ri(e) {
  return Ce.call(e) === "[object Blob]";
}
function wo(e) {
  return Ce.call(e) === "[object Function]";
}
function ni(e) {
  return go(e) && wo(e.pipe);
}
function oi(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function ai(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function ii() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function vr(e, t) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), yr(e))
      for (var r = 0, o = e.length; r < o; r++)
        t.call(null, e[r], r, e);
    else
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e);
}
function tr() {
  var e = {};
  function t(n, a) {
    ft(e[a]) && ft(n) ? e[a] = tr(e[a], n) : ft(n) ? e[a] = tr({}, n) : yr(n) ? e[a] = n.slice() : e[a] = n;
  }
  for (var r = 0, o = arguments.length; r < o; r++)
    vr(arguments[r], t);
  return e;
}
function li(e, t, r) {
  return vr(t, function(o, n) {
    r && typeof o == "function" ? e[n] = Qa(o, r) : e[n] = o;
  }), e;
}
function ui(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
var ie = {
  isArray: yr,
  isArrayBuffer: _a,
  isBuffer: Ja,
  isFormData: Ka,
  isArrayBufferView: Xa,
  isString: Ya,
  isNumber: Za,
  isObject: go,
  isPlainObject: ft,
  isUndefined: er,
  isDate: ei,
  isFile: ti,
  isBlob: ri,
  isFunction: wo,
  isStream: ni,
  isURLSearchParams: oi,
  isStandardBrowserEnv: ii,
  forEach: vr,
  merge: tr,
  extend: li,
  trim: ai,
  stripBOM: ui
}, De = ie;
function ln(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var So = function(e, t, r) {
  if (!t)
    return e;
  var o;
  if (r)
    o = r(t);
  else if (De.isURLSearchParams(t))
    o = t.toString();
  else {
    var n = [];
    De.forEach(t, function(i, u) {
      i === null || typeof i > "u" || (De.isArray(i) ? u = u + "[]" : i = [i], De.forEach(i, function(l) {
        De.isDate(l) ? l = l.toISOString() : De.isObject(l) && (l = JSON.stringify(l)), n.push(ln(u) + "=" + ln(l));
      }));
    }), o = n.join("&");
  }
  if (o) {
    var a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}, si = ie;
function Ot() {
  this.handlers = [];
}
Ot.prototype.use = function(e, t, r) {
  return this.handlers.push({
    fulfilled: e,
    rejected: t,
    synchronous: r ? r.synchronous : !1,
    runWhen: r ? r.runWhen : null
  }), this.handlers.length - 1;
};
Ot.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null);
};
Ot.prototype.forEach = function(e) {
  si.forEach(this.handlers, function(t) {
    t !== null && e(t);
  });
};
var ci = Ot, pi = ie, fi = function(e, t) {
  pi.forEach(e, function(r, o) {
    o !== t && o.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[o]);
  });
}, xo = function(e, t, r, o, n) {
  return e.config = t, r && (e.code = r), e.request = o, e.response = n, e.isAxiosError = !0, e.toJSON = function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code
    };
  }, e;
}, It, un;
function Oo() {
  if (un)
    return It;
  un = 1;
  var e = xo;
  return It = function(t, r, o, n, a) {
    var i = new Error(t);
    return e(i, r, o, n, a);
  }, It;
}
var Rt, sn;
function di() {
  if (sn)
    return Rt;
  sn = 1;
  var e = Oo();
  return Rt = function(t, r, o) {
    var n = o.config.validateStatus;
    !o.status || !n || n(o.status) ? t(o) : r(e(
      "Request failed with status code " + o.status,
      o.config,
      null,
      o.request,
      o
    ));
  }, Rt;
}
var Ct, cn;
function mi() {
  if (cn)
    return Ct;
  cn = 1;
  var e = ie;
  return Ct = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(t, r, o, n, a, i) {
        var u = [];
        u.push(t + "=" + encodeURIComponent(r)), e.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), e.isString(n) && u.push("path=" + n), e.isString(a) && u.push("domain=" + a), i === !0 && u.push("secure"), document.cookie = u.join("; ");
      },
      read: function(t) {
        var r = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(t) {
        this.write(t, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), Ct;
}
var pn, fn;
function yi() {
  return fn || (fn = 1, pn = function(e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
  }), pn;
}
var dn, mn;
function vi() {
  return mn || (mn = 1, dn = function(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
  }), dn;
}
var Tt, yn;
function hi() {
  if (yn)
    return Tt;
  yn = 1;
  var e = yi(), t = vi();
  return Tt = function(r, o) {
    return r && !e(o) ? t(r, o) : o;
  }, Tt;
}
var Nt, vn;
function bi() {
  if (vn)
    return Nt;
  vn = 1;
  var e = ie, t = [
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
  ];
  return Nt = function(r) {
    var o = {}, n, a, i;
    return r && e.forEach(r.split(`
`), function(u) {
      if (i = u.indexOf(":"), n = e.trim(u.substr(0, i)).toLowerCase(), a = e.trim(u.substr(i + 1)), n) {
        if (o[n] && t.indexOf(n) >= 0)
          return;
        n === "set-cookie" ? o[n] = (o[n] ? o[n] : []).concat([a]) : o[n] = o[n] ? o[n] + ", " + a : a;
      }
    }), o;
  }, Nt;
}
var Dt, hn;
function gi() {
  if (hn)
    return Dt;
  hn = 1;
  var e = ie;
  return Dt = e.isStandardBrowserEnv() ? function() {
    var t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a"), o;
    function n(a) {
      var i = a;
      return t && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return o = n(window.location.href), function(a) {
      var i = e.isString(a) ? n(a) : a;
      return i.protocol === o.protocol && i.host === o.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Dt;
}
var Lt, bn;
function wi() {
  if (bn)
    return Lt;
  bn = 1;
  var e = ie, t = di(), r = mi(), o = So, n = hi(), a = bi(), i = gi(), u = Oo();
  return Lt = function(l) {
    return new Promise(function(y, f) {
      var c = l.data, h = l.headers, g = l.responseType;
      e.isFormData(c) && delete h["Content-Type"];
      var m = new XMLHttpRequest();
      if (l.auth) {
        var x = l.auth.username || "", T = l.auth.password ? unescape(encodeURIComponent(l.auth.password)) : "";
        h.Authorization = "Basic " + btoa(x + ":" + T);
      }
      var E = n(l.baseURL, l.url);
      m.open(l.method.toUpperCase(), o(E, l.params, l.paramsSerializer), !0), m.timeout = l.timeout;
      function O() {
        if (m) {
          var j = "getAllResponseHeaders" in m ? a(m.getAllResponseHeaders()) : null, A = !g || g === "text" || g === "json" ? m.responseText : m.response, v = {
            data: A,
            status: m.status,
            statusText: m.statusText,
            headers: j,
            config: l,
            request: m
          };
          t(y, f, v), m = null;
        }
      }
      if ("onloadend" in m ? m.onloadend = O : m.onreadystatechange = function() {
        !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(O);
      }, m.onabort = function() {
        !m || (f(u("Request aborted", l, "ECONNABORTED", m)), m = null);
      }, m.onerror = function() {
        f(u("Network Error", l, null, m)), m = null;
      }, m.ontimeout = function() {
        var j = "timeout of " + l.timeout + "ms exceeded";
        l.timeoutErrorMessage && (j = l.timeoutErrorMessage), f(u(
          j,
          l,
          l.transitional && l.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
          m
        )), m = null;
      }, e.isStandardBrowserEnv()) {
        var ee = (l.withCredentials || i(E)) && l.xsrfCookieName ? r.read(l.xsrfCookieName) : void 0;
        ee && (h[l.xsrfHeaderName] = ee);
      }
      "setRequestHeader" in m && e.forEach(h, function(j, A) {
        typeof c > "u" && A.toLowerCase() === "content-type" ? delete h[A] : m.setRequestHeader(A, j);
      }), e.isUndefined(l.withCredentials) || (m.withCredentials = !!l.withCredentials), g && g !== "json" && (m.responseType = l.responseType), typeof l.onDownloadProgress == "function" && m.addEventListener("progress", l.onDownloadProgress), typeof l.onUploadProgress == "function" && m.upload && m.upload.addEventListener("progress", l.onUploadProgress), l.cancelToken && l.cancelToken.promise.then(function(j) {
        !m || (m.abort(), f(j), m = null);
      }), c || (c = null), m.send(c);
    });
  }, Lt;
}
var K = ie, gn = fi, Si = xo, xi = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function wn(e, t) {
  !K.isUndefined(e) && K.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function Oi() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = wi()), e;
}
function ji(e, t, r) {
  if (K.isString(e))
    try {
      return (t || JSON.parse)(e), K.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
var jt = {
  transitional: {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  adapter: Oi(),
  transformRequest: [function(e, t) {
    return gn(t, "Accept"), gn(t, "Content-Type"), K.isFormData(e) || K.isArrayBuffer(e) || K.isBuffer(e) || K.isStream(e) || K.isFile(e) || K.isBlob(e) ? e : K.isArrayBufferView(e) ? e.buffer : K.isURLSearchParams(e) ? (wn(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : K.isObject(e) || t && t["Content-Type"] === "application/json" ? (wn(t, "application/json"), ji(e)) : e;
  }],
  transformResponse: [function(e) {
    var t = this.transitional, r = t && t.silentJSONParsing, o = t && t.forcedJSONParsing, n = !r && this.responseType === "json";
    if (n || o && K.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (a) {
        if (n)
          throw a.name === "SyntaxError" ? Si(a, this, "E_JSON_PARSE") : a;
      }
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  }
};
jt.headers = {
  common: {
    Accept: "application/json, text/plain, */*"
  }
};
K.forEach(["delete", "get", "head"], function(e) {
  jt.headers[e] = {};
});
K.forEach(["post", "put", "patch"], function(e) {
  jt.headers[e] = K.merge(xi);
});
var hr = jt, Pi = ie, Ei = hr, Ai = function(e, t, r) {
  var o = this || Ei;
  return Pi.forEach(r, function(n) {
    e = n.call(o, e, t);
  }), e;
}, Sn, xn;
function jo() {
  return xn || (xn = 1, Sn = function(e) {
    return !!(e && e.__CANCEL__);
  }), Sn;
}
var On = ie, Ft = Ai, ki = jo(), Ii = hr;
function Mt(e) {
  e.cancelToken && e.cancelToken.throwIfRequested();
}
var Ri = function(e) {
  Mt(e), e.headers = e.headers || {}, e.data = Ft.call(
    e,
    e.data,
    e.headers,
    e.transformRequest
  ), e.headers = On.merge(
    e.headers.common || {},
    e.headers[e.method] || {},
    e.headers
  ), On.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(r) {
      delete e.headers[r];
    }
  );
  var t = e.adapter || Ii.adapter;
  return t(e).then(function(r) {
    return Mt(e), r.data = Ft.call(
      e,
      r.data,
      r.headers,
      e.transformResponse
    ), r;
  }, function(r) {
    return ki(r) || (Mt(e), r && r.response && (r.response.data = Ft.call(
      e,
      r.response.data,
      r.response.headers,
      e.transformResponse
    ))), Promise.reject(r);
  });
}, X = ie, Po = function(e, t) {
  t = t || {};
  var r = {}, o = ["url", "method", "data"], n = ["headers", "auth", "proxy", "params"], a = [
    "baseURL",
    "transformRequest",
    "transformResponse",
    "paramsSerializer",
    "timeout",
    "timeoutMessage",
    "withCredentials",
    "adapter",
    "responseType",
    "xsrfCookieName",
    "xsrfHeaderName",
    "onUploadProgress",
    "onDownloadProgress",
    "decompress",
    "maxContentLength",
    "maxBodyLength",
    "maxRedirects",
    "transport",
    "httpAgent",
    "httpsAgent",
    "cancelToken",
    "socketPath",
    "responseEncoding"
  ], i = ["validateStatus"];
  function u(c, h) {
    return X.isPlainObject(c) && X.isPlainObject(h) ? X.merge(c, h) : X.isPlainObject(h) ? X.merge({}, h) : X.isArray(h) ? h.slice() : h;
  }
  function l(c) {
    X.isUndefined(t[c]) ? X.isUndefined(e[c]) || (r[c] = u(void 0, e[c])) : r[c] = u(e[c], t[c]);
  }
  X.forEach(o, function(c) {
    X.isUndefined(t[c]) || (r[c] = u(void 0, t[c]));
  }), X.forEach(n, l), X.forEach(a, function(c) {
    X.isUndefined(t[c]) ? X.isUndefined(e[c]) || (r[c] = u(void 0, e[c])) : r[c] = u(void 0, t[c]);
  }), X.forEach(i, function(c) {
    c in t ? r[c] = u(e[c], t[c]) : c in e && (r[c] = u(void 0, e[c]));
  });
  var y = o.concat(n).concat(a).concat(i), f = Object.keys(e).concat(Object.keys(t)).filter(function(c) {
    return y.indexOf(c) === -1;
  });
  return X.forEach(f, l), r;
};
const Ci = "axios", Ti = "0.21.4", Ni = "Promise based HTTP client for the browser and node.js", Di = "index.js", Li = {
  test: "grunt test",
  start: "node ./sandbox/server.js",
  build: "NODE_ENV=production grunt build",
  preversion: "npm test",
  version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
  postversion: "git push && git push --tags",
  examples: "node ./examples/server.js",
  coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
  fix: "eslint --fix lib/**/*.js"
}, Fi = {
  type: "git",
  url: "https://github.com/axios/axios.git"
}, Mi = [
  "xhr",
  "http",
  "ajax",
  "promise",
  "node"
], Vi = "Matt Zabriskie", Bi = "MIT", Ui = {
  url: "https://github.com/axios/axios/issues"
}, $i = "https://axios-http.com", Hi = {
  coveralls: "^3.0.0",
  "es6-promise": "^4.2.4",
  grunt: "^1.3.0",
  "grunt-banner": "^0.6.0",
  "grunt-cli": "^1.2.0",
  "grunt-contrib-clean": "^1.1.0",
  "grunt-contrib-watch": "^1.0.0",
  "grunt-eslint": "^23.0.0",
  "grunt-karma": "^4.0.0",
  "grunt-mocha-test": "^0.13.3",
  "grunt-ts": "^6.0.0-beta.19",
  "grunt-webpack": "^4.0.2",
  "istanbul-instrumenter-loader": "^1.0.0",
  "jasmine-core": "^2.4.1",
  karma: "^6.3.2",
  "karma-chrome-launcher": "^3.1.0",
  "karma-firefox-launcher": "^2.1.0",
  "karma-jasmine": "^1.1.1",
  "karma-jasmine-ajax": "^0.1.13",
  "karma-safari-launcher": "^1.0.0",
  "karma-sauce-launcher": "^4.3.6",
  "karma-sinon": "^1.0.5",
  "karma-sourcemap-loader": "^0.3.8",
  "karma-webpack": "^4.0.2",
  "load-grunt-tasks": "^3.5.2",
  minimist: "^1.2.0",
  mocha: "^8.2.1",
  sinon: "^4.5.0",
  "terser-webpack-plugin": "^4.2.3",
  typescript: "^4.0.5",
  "url-search-params": "^0.10.0",
  webpack: "^4.44.2",
  "webpack-dev-server": "^3.11.0"
}, qi = {
  "./lib/adapters/http.js": "./lib/adapters/xhr.js"
}, Wi = "dist/axios.min.js", zi = "dist/axios.min.js", Gi = "./index.d.ts", Qi = {
  "follow-redirects": "^1.14.0"
}, Ji = [
  {
    path: "./dist/axios.min.js",
    threshold: "5kB"
  }
], _i = {
  name: Ci,
  version: Ti,
  description: Ni,
  main: Di,
  scripts: Li,
  repository: Fi,
  keywords: Mi,
  author: Vi,
  license: Bi,
  bugs: Ui,
  homepage: $i,
  devDependencies: Hi,
  browser: qi,
  jsdelivr: Wi,
  unpkg: zi,
  typings: Gi,
  dependencies: Qi,
  bundlesize: Ji
};
var Eo = _i, br = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  br[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var jn = {}, Ki = Eo.version.split(".");
function Ao(e, t) {
  for (var r = t ? t.split(".") : Ki, o = e.split("."), n = 0; n < 3; n++) {
    if (r[n] > o[n])
      return !0;
    if (r[n] < o[n])
      return !1;
  }
  return !1;
}
br.transitional = function(e, t, r) {
  var o = t && Ao(t);
  function n(a, i) {
    return "[Axios v" + Eo.version + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return function(a, i, u) {
    if (e === !1)
      throw new Error(n(i, " has been removed in " + t));
    return o && !jn[i] && (jn[i] = !0, console.warn(
      n(
        i,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(a, i, u) : !0;
  };
};
function Xi(e, t, r) {
  if (typeof e != "object")
    throw new TypeError("options must be an object");
  for (var o = Object.keys(e), n = o.length; n-- > 0; ) {
    var a = o[n], i = t[a];
    if (i) {
      var u = e[a], l = u === void 0 || i(u, a, e);
      if (l !== !0)
        throw new TypeError("option " + a + " must be " + l);
      continue;
    }
    if (r !== !0)
      throw Error("Unknown option " + a);
  }
}
var Yi = {
  isOlderVersion: Ao,
  assertOptions: Xi,
  validators: br
}, ko = ie, Zi = So, Pn = ci, En = Ri, Pt = Po, Io = Yi, Le = Io.validators;
function rt(e) {
  this.defaults = e, this.interceptors = {
    request: new Pn(),
    response: new Pn()
  };
}
rt.prototype.request = function(e) {
  typeof e == "string" ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, e = Pt(this.defaults, e), e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
  var t = e.transitional;
  t !== void 0 && Io.assertOptions(t, {
    silentJSONParsing: Le.transitional(Le.boolean, "1.0.0"),
    forcedJSONParsing: Le.transitional(Le.boolean, "1.0.0"),
    clarifyTimeoutError: Le.transitional(Le.boolean, "1.0.0")
  }, !1);
  var r = [], o = !0;
  this.interceptors.request.forEach(function(f) {
    typeof f.runWhen == "function" && f.runWhen(e) === !1 || (o = o && f.synchronous, r.unshift(f.fulfilled, f.rejected));
  });
  var n = [];
  this.interceptors.response.forEach(function(f) {
    n.push(f.fulfilled, f.rejected);
  });
  var a;
  if (!o) {
    var i = [En, void 0];
    for (Array.prototype.unshift.apply(i, r), i = i.concat(n), a = Promise.resolve(e); i.length; )
      a = a.then(i.shift(), i.shift());
    return a;
  }
  for (var u = e; r.length; ) {
    var l = r.shift(), y = r.shift();
    try {
      u = l(u);
    } catch (f) {
      y(f);
      break;
    }
  }
  try {
    a = En(u);
  } catch (f) {
    return Promise.reject(f);
  }
  for (; n.length; )
    a = a.then(n.shift(), n.shift());
  return a;
};
rt.prototype.getUri = function(e) {
  return e = Pt(this.defaults, e), Zi(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
};
ko.forEach(["delete", "get", "head", "options"], function(e) {
  rt.prototype[e] = function(t, r) {
    return this.request(Pt(r || {}, {
      method: e,
      url: t,
      data: (r || {}).data
    }));
  };
});
ko.forEach(["post", "put", "patch"], function(e) {
  rt.prototype[e] = function(t, r, o) {
    return this.request(Pt(o || {}, {
      method: e,
      url: t,
      data: r
    }));
  };
});
var el = rt, Vt, An;
function Ro() {
  if (An)
    return Vt;
  An = 1;
  function e(t) {
    this.message = t;
  }
  return e.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, e.prototype.__CANCEL__ = !0, Vt = e, Vt;
}
var Bt, kn;
function tl() {
  if (kn)
    return Bt;
  kn = 1;
  var e = Ro();
  function t(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var o;
    this.promise = new Promise(function(a) {
      o = a;
    });
    var n = this;
    r(function(a) {
      n.reason || (n.reason = new e(a), o(n.reason));
    });
  }
  return t.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, t.source = function() {
    var r, o = new t(function(n) {
      r = n;
    });
    return {
      token: o,
      cancel: r
    };
  }, Bt = t, Bt;
}
var In, Rn;
function rl() {
  return Rn || (Rn = 1, In = function(e) {
    return function(t) {
      return e.apply(null, t);
    };
  }), In;
}
var Cn, Tn;
function nl() {
  return Tn || (Tn = 1, Cn = function(e) {
    return typeof e == "object" && e.isAxiosError === !0;
  }), Cn;
}
var Nn = ie, ol = bo, dt = el, al = Po, il = hr;
function Co(e) {
  var t = new dt(e), r = ol(dt.prototype.request, t);
  return Nn.extend(r, dt.prototype, t), Nn.extend(r, t), r;
}
var se = Co(il);
se.Axios = dt;
se.create = function(e) {
  return Co(al(se.defaults, e));
};
se.Cancel = Ro();
se.CancelToken = tl();
se.isCancel = jo();
se.all = function(e) {
  return Promise.all(e);
};
se.spread = rl();
se.isAxiosError = nl();
mr.exports = se;
mr.exports.default = se;
(function(e) {
  e.exports = mr.exports;
})(ho);
var ll = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, t = Symbol("test"), r = Object(t);
  if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var o = 42;
  e[t] = o;
  for (t in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var n = Object.getOwnPropertySymbols(e);
  if (n.length !== 1 || n[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var a = Object.getOwnPropertyDescriptor(e, t);
    if (a.value !== o || a.enumerable !== !0)
      return !1;
  }
  return !0;
}, Dn = typeof Symbol < "u" && Symbol, ul = ll, sl = function() {
  return typeof Dn != "function" || typeof Symbol != "function" || typeof Dn("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : ul();
}, cl = "Function.prototype.bind called on incompatible ", Ut = Array.prototype.slice, pl = Object.prototype.toString, fl = "[object Function]", dl = function(e) {
  var t = this;
  if (typeof t != "function" || pl.call(t) !== fl)
    throw new TypeError(cl + t);
  for (var r = Ut.call(arguments, 1), o, n = function() {
    if (this instanceof o) {
      var y = t.apply(
        this,
        r.concat(Ut.call(arguments))
      );
      return Object(y) === y ? y : this;
    } else
      return t.apply(
        e,
        r.concat(Ut.call(arguments))
      );
  }, a = Math.max(0, t.length - r.length), i = [], u = 0; u < a; u++)
    i.push("$" + u);
  if (o = Function("binder", "return function (" + i.join(",") + "){ return binder.apply(this,arguments); }")(n), t.prototype) {
    var l = function() {
    };
    l.prototype = t.prototype, o.prototype = new l(), l.prototype = null;
  }
  return o;
}, ml = dl, gr = Function.prototype.bind || ml, yl = gr, vl = yl.call(Function.call, Object.prototype.hasOwnProperty), N, $e = SyntaxError, To = Function, Be = TypeError, $t = function(e) {
  try {
    return To('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Ae = Object.getOwnPropertyDescriptor;
if (Ae)
  try {
    Ae({}, "");
  } catch {
    Ae = null;
  }
var Ht = function() {
  throw new Be();
}, hl = Ae ? function() {
  try {
    return arguments.callee, Ht;
  } catch {
    try {
      return Ae(arguments, "callee").get;
    } catch {
      return Ht;
    }
  }
}() : Ht, Fe = sl(), ge = Object.getPrototypeOf || function(e) {
  return e.__proto__;
}, Me = {}, bl = typeof Uint8Array > "u" ? N : ge(Uint8Array), Ue = {
  "%AggregateError%": typeof AggregateError > "u" ? N : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? N : ArrayBuffer,
  "%ArrayIteratorPrototype%": Fe ? ge([][Symbol.iterator]()) : N,
  "%AsyncFromSyncIteratorPrototype%": N,
  "%AsyncFunction%": Me,
  "%AsyncGenerator%": Me,
  "%AsyncGeneratorFunction%": Me,
  "%AsyncIteratorPrototype%": Me,
  "%Atomics%": typeof Atomics > "u" ? N : Atomics,
  "%BigInt%": typeof BigInt > "u" ? N : BigInt,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? N : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? N : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? N : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? N : FinalizationRegistry,
  "%Function%": To,
  "%GeneratorFunction%": Me,
  "%Int8Array%": typeof Int8Array > "u" ? N : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? N : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? N : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Fe ? ge(ge([][Symbol.iterator]())) : N,
  "%JSON%": typeof JSON == "object" ? JSON : N,
  "%Map%": typeof Map > "u" ? N : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Fe ? N : ge((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? N : Promise,
  "%Proxy%": typeof Proxy > "u" ? N : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? N : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? N : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Fe ? N : ge((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? N : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Fe ? ge(""[Symbol.iterator]()) : N,
  "%Symbol%": Fe ? Symbol : N,
  "%SyntaxError%": $e,
  "%ThrowTypeError%": hl,
  "%TypedArray%": bl,
  "%TypeError%": Be,
  "%Uint8Array%": typeof Uint8Array > "u" ? N : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? N : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? N : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? N : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? N : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? N : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? N : WeakSet
}, gl = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = $t("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = $t("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = $t("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var o = e("%AsyncGeneratorFunction%");
    o && (r = o.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var n = e("%AsyncGenerator%");
    n && (r = ge(n.prototype));
  }
  return Ue[t] = r, r;
}, Ln = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, nt = gr, ht = vl, wl = nt.call(Function.call, Array.prototype.concat), Sl = nt.call(Function.apply, Array.prototype.splice), Fn = nt.call(Function.call, String.prototype.replace), bt = nt.call(Function.call, String.prototype.slice), xl = nt.call(Function.call, RegExp.prototype.exec), Ol = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, jl = /\\(\\)?/g, Pl = function(e) {
  var t = bt(e, 0, 1), r = bt(e, -1);
  if (t === "%" && r !== "%")
    throw new $e("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && t !== "%")
    throw new $e("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return Fn(e, Ol, function(n, a, i, u) {
    o[o.length] = i ? Fn(u, jl, "$1") : a || n;
  }), o;
}, El = function(e, t) {
  var r = e, o;
  if (ht(Ln, r) && (o = Ln[r], r = "%" + o[0] + "%"), ht(Ue, r)) {
    var n = Ue[r];
    if (n === Me && (n = gl(r)), typeof n > "u" && !t)
      throw new Be("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: r,
      value: n
    };
  }
  throw new $e("intrinsic " + e + " does not exist!");
}, wr = function(e, t) {
  if (typeof e != "string" || e.length === 0)
    throw new Be("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new Be('"allowMissing" argument must be a boolean');
  if (xl(/^%?[^%]*%?$/g, e) === null)
    throw new $e("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = Pl(e), o = r.length > 0 ? r[0] : "", n = El("%" + o + "%", t), a = n.name, i = n.value, u = !1, l = n.alias;
  l && (o = l[0], Sl(r, wl([0, 1], l)));
  for (var y = 1, f = !0; y < r.length; y += 1) {
    var c = r[y], h = bt(c, 0, 1), g = bt(c, -1);
    if ((h === '"' || h === "'" || h === "`" || g === '"' || g === "'" || g === "`") && h !== g)
      throw new $e("property names with quotes must have matching quotes");
    if ((c === "constructor" || !f) && (u = !0), o += "." + c, a = "%" + o + "%", ht(Ue, a))
      i = Ue[a];
    else if (i != null) {
      if (!(c in i)) {
        if (!t)
          throw new Be("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Ae && y + 1 >= r.length) {
        var m = Ae(i, c);
        f = !!m, f && "get" in m && !("originalValue" in m.get) ? i = m.get : i = i[c];
      } else
        f = ht(i, c), i = i[c];
      f && !u && (Ue[a] = i);
    }
  }
  return i;
}, No = { exports: {} };
(function(e) {
  var t = gr, r = wr, o = r("%Function.prototype.apply%"), n = r("%Function.prototype.call%"), a = r("%Reflect.apply%", !0) || t.call(n, o), i = r("%Object.getOwnPropertyDescriptor%", !0), u = r("%Object.defineProperty%", !0), l = r("%Math.max%");
  if (u)
    try {
      u({}, "a", { value: 1 });
    } catch {
      u = null;
    }
  e.exports = function(f) {
    var c = a(t, n, arguments);
    if (i && u) {
      var h = i(c, "length");
      h.configurable && u(
        c,
        "length",
        { value: 1 + l(0, f.length - (arguments.length - 1)) }
      );
    }
    return c;
  };
  var y = function() {
    return a(t, o, arguments);
  };
  u ? u(e.exports, "apply", { value: y }) : e.exports.apply = y;
})(No);
var Do = wr, Lo = No.exports, Al = Lo(Do("String.prototype.indexOf")), kl = function(e, t) {
  var r = Do(e, !!t);
  return typeof r == "function" && Al(e, ".prototype.") > -1 ? Lo(r) : r;
};
const Il = {}, Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Il
}, Symbol.toStringTag, { value: "Module" })), Cl = /* @__PURE__ */ za(Rl);
var Sr = typeof Map == "function" && Map.prototype, qt = Object.getOwnPropertyDescriptor && Sr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, gt = Sr && qt && typeof qt.get == "function" ? qt.get : null, Tl = Sr && Map.prototype.forEach, xr = typeof Set == "function" && Set.prototype, Wt = Object.getOwnPropertyDescriptor && xr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, wt = xr && Wt && typeof Wt.get == "function" ? Wt.get : null, Nl = xr && Set.prototype.forEach, Dl = typeof WeakMap == "function" && WeakMap.prototype, Xe = Dl ? WeakMap.prototype.has : null, Ll = typeof WeakSet == "function" && WeakSet.prototype, Ye = Ll ? WeakSet.prototype.has : null, Fl = typeof WeakRef == "function" && WeakRef.prototype, Mn = Fl ? WeakRef.prototype.deref : null, Ml = Boolean.prototype.valueOf, Vl = Object.prototype.toString, Bl = Function.prototype.toString, Ul = String.prototype.match, Or = String.prototype.slice, Se = String.prototype.replace, $l = String.prototype.toUpperCase, Vn = String.prototype.toLowerCase, Fo = RegExp.prototype.test, Bn = Array.prototype.concat, de = Array.prototype.join, Hl = Array.prototype.slice, Un = Math.floor, rr = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, zt = Object.getOwnPropertySymbols, nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, He = typeof Symbol == "function" && typeof Symbol.iterator == "object", Z = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === He ? "object" : "symbol") ? Symbol.toStringTag : null, Mo = Object.prototype.propertyIsEnumerable, $n = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Hn(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Fo.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var o = e < 0 ? -Un(-e) : Un(e);
    if (o !== e) {
      var n = String(o), a = Or.call(t, n.length + 1);
      return Se.call(n, r, "$&_") + "." + Se.call(Se.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Se.call(t, r, "$&_");
}
var or = Cl, qn = or.custom, Wn = Bo(qn) ? qn : null, ql = function e(t, r, o, n) {
  var a = r || {};
  if (we(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (we(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = we(a, "customInspect") ? a.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (we(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (we(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var u = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return $o(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var l = String(t);
    return u ? Hn(t, l) : l;
  }
  if (typeof t == "bigint") {
    var y = String(t) + "n";
    return u ? Hn(t, y) : y;
  }
  var f = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof o > "u" && (o = 0), o >= f && f > 0 && typeof t == "object")
    return ar(t) ? "[Array]" : "[Object]";
  var c = lu(a, o);
  if (typeof n > "u")
    n = [];
  else if (Uo(n, t) >= 0)
    return "[Circular]";
  function h(I, k, P) {
    if (k && (n = Hl.call(n), n.push(k)), P) {
      var W = {
        depth: a.depth
      };
      return we(a, "quoteStyle") && (W.quoteStyle = a.quoteStyle), e(I, W, o + 1, n);
    }
    return e(I, a, o + 1, n);
  }
  if (typeof t == "function" && !zn(t)) {
    var g = Yl(t), m = st(t, h);
    return "[Function" + (g ? ": " + g : " (anonymous)") + "]" + (m.length > 0 ? " { " + de.call(m, ", ") + " }" : "");
  }
  if (Bo(t)) {
    var x = He ? Se.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : nr.call(t);
    return typeof t == "object" && !He ? Ke(x) : x;
  }
  if (ou(t)) {
    for (var T = "<" + Vn.call(String(t.nodeName)), E = t.attributes || [], O = 0; O < E.length; O++)
      T += " " + E[O].name + "=" + Vo(Wl(E[O].value), "double", a);
    return T += ">", t.childNodes && t.childNodes.length && (T += "..."), T += "</" + Vn.call(String(t.nodeName)) + ">", T;
  }
  if (ar(t)) {
    if (t.length === 0)
      return "[]";
    var ee = st(t, h);
    return c && !iu(ee) ? "[" + ir(ee, c) + "]" : "[ " + de.call(ee, ", ") + " ]";
  }
  if (Gl(t)) {
    var j = st(t, h);
    return !("cause" in Error.prototype) && "cause" in t && !Mo.call(t, "cause") ? "{ [" + String(t) + "] " + de.call(Bn.call("[cause]: " + h(t.cause), j), ", ") + " }" : j.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + de.call(j, ", ") + " }";
  }
  if (typeof t == "object" && i) {
    if (Wn && typeof t[Wn] == "function" && or)
      return or(t, { depth: f - o });
    if (i !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (Zl(t)) {
    var A = [];
    return Tl.call(t, function(I, k) {
      A.push(h(k, t, !0) + " => " + h(I, t));
    }), Gn("Map", gt.call(t), A, c);
  }
  if (ru(t)) {
    var v = [];
    return Nl.call(t, function(I) {
      v.push(h(I, t));
    }), Gn("Set", wt.call(t), v, c);
  }
  if (eu(t))
    return Gt("WeakMap");
  if (nu(t))
    return Gt("WeakSet");
  if (tu(t))
    return Gt("WeakRef");
  if (Jl(t))
    return Ke(h(Number(t)));
  if (Kl(t))
    return Ke(h(rr.call(t)));
  if (_l(t))
    return Ke(Ml.call(t));
  if (Ql(t))
    return Ke(h(String(t)));
  if (!zl(t) && !zn(t)) {
    var d = st(t, h), s = $n ? $n(t) === Object.prototype : t instanceof Object || t.constructor === Object, p = t instanceof Object ? "" : "null prototype", b = !s && Z && Object(t) === t && Z in t ? Or.call(Oe(t), 8, -1) : p ? "Object" : "", w = s || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", L = w + (b || p ? "[" + de.call(Bn.call([], b || [], p || []), ": ") + "] " : "");
    return d.length === 0 ? L + "{}" : c ? L + "{" + ir(d, c) + "}" : L + "{ " + de.call(d, ", ") + " }";
  }
  return String(t);
};
function Vo(e, t, r) {
  var o = (r.quoteStyle || t) === "double" ? '"' : "'";
  return o + e + o;
}
function Wl(e) {
  return Se.call(String(e), /"/g, "&quot;");
}
function ar(e) {
  return Oe(e) === "[object Array]" && (!Z || !(typeof e == "object" && Z in e));
}
function zl(e) {
  return Oe(e) === "[object Date]" && (!Z || !(typeof e == "object" && Z in e));
}
function zn(e) {
  return Oe(e) === "[object RegExp]" && (!Z || !(typeof e == "object" && Z in e));
}
function Gl(e) {
  return Oe(e) === "[object Error]" && (!Z || !(typeof e == "object" && Z in e));
}
function Ql(e) {
  return Oe(e) === "[object String]" && (!Z || !(typeof e == "object" && Z in e));
}
function Jl(e) {
  return Oe(e) === "[object Number]" && (!Z || !(typeof e == "object" && Z in e));
}
function _l(e) {
  return Oe(e) === "[object Boolean]" && (!Z || !(typeof e == "object" && Z in e));
}
function Bo(e) {
  if (He)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !nr)
    return !1;
  try {
    return nr.call(e), !0;
  } catch {
  }
  return !1;
}
function Kl(e) {
  if (!e || typeof e != "object" || !rr)
    return !1;
  try {
    return rr.call(e), !0;
  } catch {
  }
  return !1;
}
var Xl = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function we(e, t) {
  return Xl.call(e, t);
}
function Oe(e) {
  return Vl.call(e);
}
function Yl(e) {
  if (e.name)
    return e.name;
  var t = Ul.call(Bl.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Uo(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, o = e.length; r < o; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function Zl(e) {
  if (!gt || !e || typeof e != "object")
    return !1;
  try {
    gt.call(e);
    try {
      wt.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function eu(e) {
  if (!Xe || !e || typeof e != "object")
    return !1;
  try {
    Xe.call(e, Xe);
    try {
      Ye.call(e, Ye);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function tu(e) {
  if (!Mn || !e || typeof e != "object")
    return !1;
  try {
    return Mn.call(e), !0;
  } catch {
  }
  return !1;
}
function ru(e) {
  if (!wt || !e || typeof e != "object")
    return !1;
  try {
    wt.call(e);
    try {
      gt.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function nu(e) {
  if (!Ye || !e || typeof e != "object")
    return !1;
  try {
    Ye.call(e, Ye);
    try {
      Xe.call(e, Xe);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function ou(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function $o(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, o = "... " + r + " more character" + (r > 1 ? "s" : "");
    return $o(Or.call(e, 0, t.maxStringLength), t) + o;
  }
  var n = Se.call(Se.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, au);
  return Vo(n, "single", t);
}
function au(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + $l.call(t.toString(16));
}
function Ke(e) {
  return "Object(" + e + ")";
}
function Gt(e) {
  return e + " { ? }";
}
function Gn(e, t, r, o) {
  var n = o ? ir(r, o) : de.call(r, ", ");
  return e + " (" + t + ") {" + n + "}";
}
function iu(e) {
  for (var t = 0; t < e.length; t++)
    if (Uo(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function lu(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = de.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: de.call(Array(t + 1), r)
  };
}
function ir(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + de.call(e, "," + r) + `
` + t.prev;
}
function st(e, t) {
  var r = ar(e), o = [];
  if (r) {
    o.length = e.length;
    for (var n = 0; n < e.length; n++)
      o[n] = we(e, n) ? t(e[n], e) : "";
  }
  var a = typeof zt == "function" ? zt(e) : [], i;
  if (He) {
    i = {};
    for (var u = 0; u < a.length; u++)
      i["$" + a[u]] = a[u];
  }
  for (var l in e)
    !we(e, l) || r && String(Number(l)) === l && l < e.length || He && i["$" + l] instanceof Symbol || (Fo.call(/[^\w$]/, l) ? o.push(t(l, e) + ": " + t(e[l], e)) : o.push(l + ": " + t(e[l], e)));
  if (typeof zt == "function")
    for (var y = 0; y < a.length; y++)
      Mo.call(e, a[y]) && o.push("[" + t(a[y]) + "]: " + t(e[a[y]], e));
  return o;
}
var jr = wr, Qe = kl, uu = ql, su = jr("%TypeError%"), ct = jr("%WeakMap%", !0), pt = jr("%Map%", !0), cu = Qe("WeakMap.prototype.get", !0), pu = Qe("WeakMap.prototype.set", !0), fu = Qe("WeakMap.prototype.has", !0), du = Qe("Map.prototype.get", !0), mu = Qe("Map.prototype.set", !0), yu = Qe("Map.prototype.has", !0), Pr = function(e, t) {
  for (var r = e, o; (o = r.next) !== null; r = o)
    if (o.key === t)
      return r.next = o.next, o.next = e.next, e.next = o, o;
}, vu = function(e, t) {
  var r = Pr(e, t);
  return r && r.value;
}, hu = function(e, t, r) {
  var o = Pr(e, t);
  o ? o.value = r : e.next = {
    key: t,
    next: e.next,
    value: r
  };
}, bu = function(e, t) {
  return !!Pr(e, t);
}, gu = function() {
  var e, t, r, o = {
    assert: function(n) {
      if (!o.has(n))
        throw new su("Side channel does not contain " + uu(n));
    },
    get: function(n) {
      if (ct && n && (typeof n == "object" || typeof n == "function")) {
        if (e)
          return cu(e, n);
      } else if (pt) {
        if (t)
          return du(t, n);
      } else if (r)
        return vu(r, n);
    },
    has: function(n) {
      if (ct && n && (typeof n == "object" || typeof n == "function")) {
        if (e)
          return fu(e, n);
      } else if (pt) {
        if (t)
          return yu(t, n);
      } else if (r)
        return bu(r, n);
      return !1;
    },
    set: function(n, a) {
      ct && n && (typeof n == "object" || typeof n == "function") ? (e || (e = new ct()), pu(e, n, a)) : pt ? (t || (t = new pt()), mu(t, n, a)) : (r || (r = { key: {}, next: null }), hu(r, n, a));
    }
  };
  return o;
}, wu = String.prototype.replace, Su = /%20/g, Qt = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Er = {
  default: Qt.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return wu.call(e, Su, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Qt.RFC1738,
  RFC3986: Qt.RFC3986
}, xu = Er, Jt = Object.prototype.hasOwnProperty, Ee = Array.isArray, fe = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), Ou = function(e) {
  for (; e.length > 1; ) {
    var t = e.pop(), r = t.obj[t.prop];
    if (Ee(r)) {
      for (var o = [], n = 0; n < r.length; ++n)
        typeof r[n] < "u" && o.push(r[n]);
      t.obj[t.prop] = o;
    }
  }
}, Ho = function(e, t) {
  for (var r = t && t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < e.length; ++o)
    typeof e[o] < "u" && (r[o] = e[o]);
  return r;
}, ju = function e(t, r, o) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (Ee(t))
      t.push(r);
    else if (t && typeof t == "object")
      (o && (o.plainObjects || o.allowPrototypes) || !Jt.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var n = t;
  return Ee(t) && !Ee(r) && (n = Ho(t, o)), Ee(t) && Ee(r) ? (r.forEach(function(a, i) {
    if (Jt.call(t, i)) {
      var u = t[i];
      u && typeof u == "object" && a && typeof a == "object" ? t[i] = e(u, a, o) : t.push(a);
    } else
      t[i] = a;
  }), t) : Object.keys(r).reduce(function(a, i) {
    var u = r[i];
    return Jt.call(a, i) ? a[i] = e(a[i], u, o) : a[i] = u, a;
  }, n);
}, Pu = function(e, t) {
  return Object.keys(t).reduce(function(r, o) {
    return r[o] = t[o], r;
  }, e);
}, Eu = function(e, t, r) {
  var o = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return o.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(o);
  } catch {
    return o;
  }
}, Au = function(e, t, r, o, n) {
  if (e.length === 0)
    return e;
  var a = e;
  if (typeof e == "symbol" ? a = Symbol.prototype.toString.call(e) : typeof e != "string" && (a = String(e)), r === "iso-8859-1")
    return escape(a).replace(/%u[0-9a-f]{4}/gi, function(y) {
      return "%26%23" + parseInt(y.slice(2), 16) + "%3B";
    });
  for (var i = "", u = 0; u < a.length; ++u) {
    var l = a.charCodeAt(u);
    if (l === 45 || l === 46 || l === 95 || l === 126 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || n === xu.RFC1738 && (l === 40 || l === 41)) {
      i += a.charAt(u);
      continue;
    }
    if (l < 128) {
      i = i + fe[l];
      continue;
    }
    if (l < 2048) {
      i = i + (fe[192 | l >> 6] + fe[128 | l & 63]);
      continue;
    }
    if (l < 55296 || l >= 57344) {
      i = i + (fe[224 | l >> 12] + fe[128 | l >> 6 & 63] + fe[128 | l & 63]);
      continue;
    }
    u += 1, l = 65536 + ((l & 1023) << 10 | a.charCodeAt(u) & 1023), i += fe[240 | l >> 18] + fe[128 | l >> 12 & 63] + fe[128 | l >> 6 & 63] + fe[128 | l & 63];
  }
  return i;
}, ku = function(e) {
  for (var t = [{ obj: { o: e }, prop: "o" }], r = [], o = 0; o < t.length; ++o)
    for (var n = t[o], a = n.obj[n.prop], i = Object.keys(a), u = 0; u < i.length; ++u) {
      var l = i[u], y = a[l];
      typeof y == "object" && y !== null && r.indexOf(y) === -1 && (t.push({ obj: a, prop: l }), r.push(y));
    }
  return Ou(t), e;
}, Iu = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, Ru = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, Cu = function(e, t) {
  return [].concat(e, t);
}, Tu = function(e, t) {
  if (Ee(e)) {
    for (var r = [], o = 0; o < e.length; o += 1)
      r.push(t(e[o]));
    return r;
  }
  return t(e);
}, qo = {
  arrayToObject: Ho,
  assign: Pu,
  combine: Cu,
  compact: ku,
  decode: Eu,
  encode: Au,
  isBuffer: Ru,
  isRegExp: Iu,
  maybeMap: Tu,
  merge: ju
}, Wo = gu, lr = qo, Ze = Er, Nu = Object.prototype.hasOwnProperty, Qn = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, t) {
    return e + "[" + t + "]";
  },
  repeat: function(e) {
    return e;
  }
}, ve = Array.isArray, Du = String.prototype.split, Lu = Array.prototype.push, zo = function(e, t) {
  Lu.apply(e, ve(t) ? t : [t]);
}, Fu = Date.prototype.toISOString, Jn = Ze.default, _ = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: lr.encode,
  encodeValuesOnly: !1,
  format: Jn,
  formatter: Ze.formatters[Jn],
  indices: !1,
  serializeDate: function(e) {
    return Fu.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Mu = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, _t = {}, Vu = function e(t, r, o, n, a, i, u, l, y, f, c, h, g, m, x, T) {
  for (var E = t, O = T, ee = 0, j = !1; (O = O.get(_t)) !== void 0 && !j; ) {
    var A = O.get(t);
    if (ee += 1, typeof A < "u") {
      if (A === ee)
        throw new RangeError("Cyclic object value");
      j = !0;
    }
    typeof O.get(_t) > "u" && (ee = 0);
  }
  if (typeof l == "function" ? E = l(r, E) : E instanceof Date ? E = c(E) : o === "comma" && ve(E) && (E = lr.maybeMap(E, function(ue) {
    return ue instanceof Date ? c(ue) : ue;
  })), E === null) {
    if (a)
      return u && !m ? u(r, _.encoder, x, "key", h) : r;
    E = "";
  }
  if (Mu(E) || lr.isBuffer(E)) {
    if (u) {
      var v = m ? r : u(r, _.encoder, x, "key", h);
      if (o === "comma" && m) {
        for (var d = Du.call(String(E), ","), s = "", p = 0; p < d.length; ++p)
          s += (p === 0 ? "" : ",") + g(u(d[p], _.encoder, x, "value", h));
        return [g(v) + (n && ve(E) && d.length === 1 ? "[]" : "") + "=" + s];
      }
      return [g(v) + "=" + g(u(E, _.encoder, x, "value", h))];
    }
    return [g(r) + "=" + g(String(E))];
  }
  var b = [];
  if (typeof E > "u")
    return b;
  var w;
  if (o === "comma" && ve(E))
    w = [{ value: E.length > 0 ? E.join(",") || null : void 0 }];
  else if (ve(l))
    w = l;
  else {
    var L = Object.keys(E);
    w = y ? L.sort(y) : L;
  }
  for (var I = n && ve(E) && E.length === 1 ? r + "[]" : r, k = 0; k < w.length; ++k) {
    var P = w[k], W = typeof P == "object" && typeof P.value < "u" ? P.value : E[P];
    if (!(i && W === null)) {
      var ye = ve(E) ? typeof o == "function" ? o(I, P) : I : I + (f ? "." + P : "[" + P + "]");
      T.set(t, ee);
      var be = Wo();
      be.set(_t, T), zo(b, e(
        W,
        ye,
        o,
        n,
        a,
        i,
        u,
        l,
        y,
        f,
        c,
        h,
        g,
        m,
        x,
        be
      ));
    }
  }
  return b;
}, Bu = function(e) {
  if (!e)
    return _;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var t = e.charset || _.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = Ze.default;
  if (typeof e.format < "u") {
    if (!Nu.call(Ze.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    r = e.format;
  }
  var o = Ze.formatters[r], n = _.filter;
  return (typeof e.filter == "function" || ve(e.filter)) && (n = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : _.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? _.allowDots : !!e.allowDots,
    charset: t,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : _.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? _.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : _.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : _.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : _.encodeValuesOnly,
    filter: n,
    format: r,
    formatter: o,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : _.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : _.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : _.strictNullHandling
  };
}, Uu = function(e, t) {
  var r = e, o = Bu(t), n, a;
  typeof o.filter == "function" ? (a = o.filter, r = a("", r)) : ve(o.filter) && (a = o.filter, n = a);
  var i = [];
  if (typeof r != "object" || r === null)
    return "";
  var u;
  t && t.arrayFormat in Qn ? u = t.arrayFormat : t && "indices" in t ? u = t.indices ? "indices" : "repeat" : u = "indices";
  var l = Qn[u];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var y = l === "comma" && t && t.commaRoundTrip;
  n || (n = Object.keys(r)), o.sort && n.sort(o.sort);
  for (var f = Wo(), c = 0; c < n.length; ++c) {
    var h = n[c];
    o.skipNulls && r[h] === null || zo(i, Vu(
      r[h],
      h,
      l,
      y,
      o.strictNullHandling,
      o.skipNulls,
      o.encode ? o.encoder : null,
      o.filter,
      o.sort,
      o.allowDots,
      o.serializeDate,
      o.format,
      o.formatter,
      o.encodeValuesOnly,
      o.charset,
      f
    ));
  }
  var g = i.join(o.delimiter), m = o.addQueryPrefix === !0 ? "?" : "";
  return o.charsetSentinel && (o.charset === "iso-8859-1" ? m += "utf8=%26%2310003%3B&" : m += "utf8=%E2%9C%93&"), g.length > 0 ? m + g : "";
}, qe = qo, ur = Object.prototype.hasOwnProperty, $u = Array.isArray, J = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: qe.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Hu = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Go = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, qu = "utf8=%26%2310003%3B", Wu = "utf8=%E2%9C%93", zu = function(e, t) {
  var r = {}, o = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, n = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, a = o.split(t.delimiter, n), i = -1, u, l = t.charset;
  if (t.charsetSentinel)
    for (u = 0; u < a.length; ++u)
      a[u].indexOf("utf8=") === 0 && (a[u] === Wu ? l = "utf-8" : a[u] === qu && (l = "iso-8859-1"), i = u, u = a.length);
  for (u = 0; u < a.length; ++u)
    if (u !== i) {
      var y = a[u], f = y.indexOf("]="), c = f === -1 ? y.indexOf("=") : f + 1, h, g;
      c === -1 ? (h = t.decoder(y, J.decoder, l, "key"), g = t.strictNullHandling ? null : "") : (h = t.decoder(y.slice(0, c), J.decoder, l, "key"), g = qe.maybeMap(
        Go(y.slice(c + 1), t),
        function(m) {
          return t.decoder(m, J.decoder, l, "value");
        }
      )), g && t.interpretNumericEntities && l === "iso-8859-1" && (g = Hu(g)), y.indexOf("[]=") > -1 && (g = $u(g) ? [g] : g), ur.call(r, h) ? r[h] = qe.combine(r[h], g) : r[h] = g;
    }
  return r;
}, Gu = function(e, t, r, o) {
  for (var n = o ? t : Go(t, r), a = e.length - 1; a >= 0; --a) {
    var i, u = e[a];
    if (u === "[]" && r.parseArrays)
      i = [].concat(n);
    else {
      i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var l = u.charAt(0) === "[" && u.charAt(u.length - 1) === "]" ? u.slice(1, -1) : u, y = parseInt(l, 10);
      !r.parseArrays && l === "" ? i = { 0: n } : !isNaN(y) && u !== l && String(y) === l && y >= 0 && r.parseArrays && y <= r.arrayLimit ? (i = [], i[y] = n) : l !== "__proto__" && (i[l] = n);
    }
    n = i;
  }
  return n;
}, Qu = function(e, t, r, o) {
  if (e) {
    var n = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, a = /(\[[^[\]]*])/, i = /(\[[^[\]]*])/g, u = r.depth > 0 && a.exec(n), l = u ? n.slice(0, u.index) : n, y = [];
    if (l) {
      if (!r.plainObjects && ur.call(Object.prototype, l) && !r.allowPrototypes)
        return;
      y.push(l);
    }
    for (var f = 0; r.depth > 0 && (u = i.exec(n)) !== null && f < r.depth; ) {
      if (f += 1, !r.plainObjects && ur.call(Object.prototype, u[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      y.push(u[1]);
    }
    return u && y.push("[" + n.slice(u.index) + "]"), Gu(y, t, r, o);
  }
}, Ju = function(e) {
  if (!e)
    return J;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var t = typeof e.charset > "u" ? J.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? J.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : J.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : J.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : J.arrayLimit,
    charset: t,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : J.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : J.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : J.decoder,
    delimiter: typeof e.delimiter == "string" || qe.isRegExp(e.delimiter) ? e.delimiter : J.delimiter,
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : J.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : J.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : J.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : J.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : J.strictNullHandling
  };
}, _u = function(e, t) {
  var r = Ju(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var o = typeof e == "string" ? zu(e, r) : e, n = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(o), i = 0; i < a.length; ++i) {
    var u = a[i], l = Qu(u, o[u], r, typeof e == "string");
    n = qe.merge(n, l, r);
  }
  return r.allowSparse === !0 ? n : qe.compact(n);
}, Ku = Uu, Xu = _u, Yu = Er, Zu = {
  formats: Yu,
  parse: Xu,
  stringify: Ku
}, es = function(e) {
  return ts(e) && !rs(e);
};
function ts(e) {
  return !!e && typeof e == "object";
}
function rs(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || as(e);
}
var ns = typeof Symbol == "function" && Symbol.for, os = ns ? Symbol.for("react.element") : 60103;
function as(e) {
  return e.$$typeof === os;
}
function is(e) {
  return Array.isArray(e) ? [] : {};
}
function et(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? We(is(e), e, t) : e;
}
function ls(e, t, r) {
  return e.concat(t).map(function(o) {
    return et(o, r);
  });
}
function us(e, t) {
  if (!t.customMerge)
    return We;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : We;
}
function ss(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return e.propertyIsEnumerable(t);
  }) : [];
}
function _n(e) {
  return Object.keys(e).concat(ss(e));
}
function Qo(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function cs(e, t) {
  return Qo(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function ps(e, t, r) {
  var o = {};
  return r.isMergeableObject(e) && _n(e).forEach(function(n) {
    o[n] = et(e[n], r);
  }), _n(t).forEach(function(n) {
    cs(e, n) || (Qo(e, n) && r.isMergeableObject(t[n]) ? o[n] = us(n, r)(e[n], t[n], r) : o[n] = et(t[n], r));
  }), o;
}
function We(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || ls, r.isMergeableObject = r.isMergeableObject || es, r.cloneUnlessOtherwiseSpecified = et;
  var o = Array.isArray(t), n = Array.isArray(e), a = o === n;
  return a ? o ? r.arrayMerge(e, t, r) : ps(e, t, r) : et(t, r);
}
We.all = function(e, t) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, o) {
    return We(r, o, t);
  }, {});
};
var fs = We, ds = fs;
(function(e) {
  function t(v) {
    return v && typeof v == "object" && "default" in v ? v.default : v;
  }
  var r = t(ho.exports), o = Zu, n = t(ds);
  function a() {
    return (a = Object.assign || function(v) {
      for (var d = 1; d < arguments.length; d++) {
        var s = arguments[d];
        for (var p in s)
          Object.prototype.hasOwnProperty.call(s, p) && (v[p] = s[p]);
      }
      return v;
    }).apply(this, arguments);
  }
  var i, u = { modal: null, listener: null, show: function(v) {
    var d = this;
    typeof v == "object" && (v = "All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>" + JSON.stringify(v));
    var s = document.createElement("html");
    s.innerHTML = v, s.querySelectorAll("a").forEach(function(b) {
      return b.setAttribute("target", "_top");
    }), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", function() {
      return d.hide();
    });
    var p = document.createElement("iframe");
    if (p.style.backgroundColor = "white", p.style.borderRadius = "5px", p.style.width = "100%", p.style.height = "100%", this.modal.appendChild(p), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !p.contentWindow)
      throw new Error("iframe not yet ready.");
    p.contentWindow.document.open(), p.contentWindow.document.write(s.outerHTML), p.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
  }, hide: function() {
    this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
  }, hideOnEscape: function(v) {
    v.keyCode === 27 && this.hide();
  } };
  function l(v, d) {
    var s;
    return function() {
      var p = arguments, b = this;
      clearTimeout(s), s = setTimeout(function() {
        return v.apply(b, [].slice.call(p));
      }, d);
    };
  }
  function y(v, d, s) {
    for (var p in d === void 0 && (d = new FormData()), s === void 0 && (s = null), v = v || {})
      Object.prototype.hasOwnProperty.call(v, p) && c(d, f(s, p), v[p]);
    return d;
  }
  function f(v, d) {
    return v ? v + "[" + d + "]" : d;
  }
  function c(v, d, s) {
    return Array.isArray(s) ? Array.from(s.keys()).forEach(function(p) {
      return c(v, f(d, p.toString()), s[p]);
    }) : s instanceof Date ? v.append(d, s.toISOString()) : s instanceof File ? v.append(d, s, s.name) : s instanceof Blob ? v.append(d, s) : typeof s == "boolean" ? v.append(d, s ? "1" : "0") : typeof s == "string" ? v.append(d, s) : typeof s == "number" ? v.append(d, "" + s) : s == null ? v.append(d, "") : void y(s, v, d);
  }
  function h(v) {
    return new URL(v.toString(), window.location.toString());
  }
  function g(v, d, s, p) {
    p === void 0 && (p = "brackets");
    var b = /^https?:\/\//.test(d.toString()), w = b || d.toString().startsWith("/"), L = !w && !d.toString().startsWith("#") && !d.toString().startsWith("?"), I = d.toString().includes("?") || v === e.Method.GET && Object.keys(s).length, k = d.toString().includes("#"), P = new URL(d.toString(), "http://localhost");
    return v === e.Method.GET && Object.keys(s).length && (P.search = o.stringify(n(o.parse(P.search, { ignoreQueryPrefix: !0 }), s), { encodeValuesOnly: !0, arrayFormat: p }), s = {}), [[b ? P.protocol + "//" + P.host : "", w ? P.pathname : "", L ? P.pathname.substring(1) : "", I ? P.search : "", k ? P.hash : ""].join(""), s];
  }
  function m(v) {
    return (v = new URL(v.href)).hash = "", v;
  }
  function x(v, d) {
    return document.dispatchEvent(new CustomEvent("inertia:" + v, d));
  }
  (i = e.Method || (e.Method = {})).GET = "get", i.POST = "post", i.PUT = "put", i.PATCH = "patch", i.DELETE = "delete";
  var T = function(v) {
    return x("finish", { detail: { visit: v } });
  }, E = function(v) {
    return x("navigate", { detail: { page: v } });
  }, O = typeof window > "u", ee = function() {
    function v() {
      this.visitId = null;
    }
    var d = v.prototype;
    return d.init = function(s) {
      var p = s.resolveComponent, b = s.swapComponent;
      this.page = s.initialPage, this.resolveComponent = p, this.swapComponent = b, this.isBackForwardVisit() ? this.handleBackForwardVisit(this.page) : this.isLocationVisit() ? this.handleLocationVisit(this.page) : this.handleInitialPageVisit(this.page), this.setupEventListeners();
    }, d.handleInitialPageVisit = function(s) {
      this.page.url += window.location.hash, this.setPage(s, { preserveState: !0 }).then(function() {
        return E(s);
      });
    }, d.setupEventListeners = function() {
      window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", l(this.handleScrollEvent.bind(this), 100), !0);
    }, d.scrollRegions = function() {
      return document.querySelectorAll("[scroll-region]");
    }, d.handleScrollEvent = function(s) {
      typeof s.target.hasAttribute == "function" && s.target.hasAttribute("scroll-region") && this.saveScrollPositions();
    }, d.saveScrollPositions = function() {
      this.replaceState(a({}, this.page, { scrollRegions: Array.from(this.scrollRegions()).map(function(s) {
        return { top: s.scrollTop, left: s.scrollLeft };
      }) }));
    }, d.resetScrollPositions = function() {
      var s;
      document.documentElement.scrollTop = 0, document.documentElement.scrollLeft = 0, this.scrollRegions().forEach(function(p) {
        p.scrollTop = 0, p.scrollLeft = 0;
      }), this.saveScrollPositions(), window.location.hash && ((s = document.getElementById(window.location.hash.slice(1))) == null || s.scrollIntoView());
    }, d.restoreScrollPositions = function() {
      var s = this;
      this.page.scrollRegions && this.scrollRegions().forEach(function(p, b) {
        var w = s.page.scrollRegions[b];
        w && (p.scrollTop = w.top, p.scrollLeft = w.left);
      });
    }, d.isBackForwardVisit = function() {
      return window.history.state && window.performance && window.performance.getEntriesByType("navigation").length > 0 && window.performance.getEntriesByType("navigation")[0].type === "back_forward";
    }, d.handleBackForwardVisit = function(s) {
      var p = this;
      window.history.state.version = s.version, this.setPage(window.history.state, { preserveScroll: !0, preserveState: !0 }).then(function() {
        p.restoreScrollPositions(), E(s);
      });
    }, d.locationVisit = function(s, p) {
      try {
        window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify({ preserveScroll: p })), window.location.href = s.href, m(window.location).href === m(s).href && window.location.reload();
      } catch {
        return !1;
      }
    }, d.isLocationVisit = function() {
      try {
        return window.sessionStorage.getItem("inertiaLocationVisit") !== null;
      } catch {
        return !1;
      }
    }, d.handleLocationVisit = function(s) {
      var p, b, w, L, I = this, k = JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit") || "");
      window.sessionStorage.removeItem("inertiaLocationVisit"), s.url += window.location.hash, s.rememberedState = (p = (b = window.history.state) == null ? void 0 : b.rememberedState) != null ? p : {}, s.scrollRegions = (w = (L = window.history.state) == null ? void 0 : L.scrollRegions) != null ? w : [], this.setPage(s, { preserveScroll: k.preserveScroll, preserveState: !0 }).then(function() {
        k.preserveScroll && I.restoreScrollPositions(), E(s);
      });
    }, d.isLocationVisitResponse = function(s) {
      return s && s.status === 409 && s.headers["x-inertia-location"];
    }, d.isInertiaResponse = function(s) {
      return s == null ? void 0 : s.headers["x-inertia"];
    }, d.createVisitId = function() {
      return this.visitId = {}, this.visitId;
    }, d.cancelVisit = function(s, p) {
      var b = p.cancelled, w = b !== void 0 && b, L = p.interrupted, I = L !== void 0 && L;
      !s || s.completed || s.cancelled || s.interrupted || (s.cancelToken.cancel(), s.onCancel(), s.completed = !1, s.cancelled = w, s.interrupted = I, T(s), s.onFinish(s));
    }, d.finishVisit = function(s) {
      s.cancelled || s.interrupted || (s.completed = !0, s.cancelled = !1, s.interrupted = !1, T(s), s.onFinish(s));
    }, d.resolvePreserveOption = function(s, p) {
      return typeof s == "function" ? s(p) : s === "errors" ? Object.keys(p.props.errors || {}).length > 0 : s;
    }, d.visit = function(s, p) {
      var b = this, w = p === void 0 ? {} : p, L = w.method, I = L === void 0 ? e.Method.GET : L, k = w.data, P = k === void 0 ? {} : k, W = w.replace, ye = W !== void 0 && W, be = w.preserveScroll, ue = be !== void 0 && be, at = w.preserveState, it = at !== void 0 && at, kr = w.only, lt = kr === void 0 ? [] : kr, Ir = w.headers, Rr = Ir === void 0 ? {} : Ir, Cr = w.errorBag, je = Cr === void 0 ? "" : Cr, Tr = w.forceFormData, Nr = Tr !== void 0 && Tr, Dr = w.onCancelToken, Lr = Dr === void 0 ? function() {
      } : Dr, Fr = w.onBefore, Mr = Fr === void 0 ? function() {
      } : Fr, Vr = w.onStart, Br = Vr === void 0 ? function() {
      } : Vr, Ur = w.onProgress, $r = Ur === void 0 ? function() {
      } : Ur, Hr = w.onFinish, Ko = Hr === void 0 ? function() {
      } : Hr, qr = w.onCancel, Xo = qr === void 0 ? function() {
      } : qr, Wr = w.onSuccess, zr = Wr === void 0 ? function() {
      } : Wr, Gr = w.onError, Qr = Gr === void 0 ? function() {
      } : Gr, Jr = w.queryStringArrayFormat, Et = Jr === void 0 ? "brackets" : Jr, Ne = typeof s == "string" ? h(s) : s;
      if (!function R($) {
        return $ instanceof File || $ instanceof Blob || $ instanceof FileList && $.length > 0 || $ instanceof FormData && Array.from($.values()).some(function(z) {
          return R(z);
        }) || typeof $ == "object" && $ !== null && Object.values($).some(function(z) {
          return R(z);
        });
      }(P) && !Nr || P instanceof FormData || (P = y(P)), !(P instanceof FormData)) {
        var _r = g(I, Ne, P, Et), Yo = _r[1];
        Ne = h(_r[0]), P = Yo;
      }
      var _e = { url: Ne, method: I, data: P, replace: ye, preserveScroll: ue, preserveState: it, only: lt, headers: Rr, errorBag: je, forceFormData: Nr, queryStringArrayFormat: Et, cancelled: !1, completed: !1, interrupted: !1 };
      if (Mr(_e) !== !1 && function(R) {
        return x("before", { cancelable: !0, detail: { visit: R } });
      }(_e)) {
        this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: !0 }), this.saveScrollPositions();
        var Kr = this.createVisitId();
        this.activeVisit = a({}, _e, { onCancelToken: Lr, onBefore: Mr, onStart: Br, onProgress: $r, onFinish: Ko, onCancel: Xo, onSuccess: zr, onError: Qr, queryStringArrayFormat: Et, cancelToken: r.CancelToken.source() }), Lr({ cancel: function() {
          b.activeVisit && b.cancelVisit(b.activeVisit, { cancelled: !0 });
        } }), function(R) {
          x("start", { detail: { visit: R } });
        }(_e), Br(_e), r({ method: I, url: m(Ne).href, data: I === e.Method.GET ? {} : P, params: I === e.Method.GET ? P : {}, cancelToken: this.activeVisit.cancelToken.token, headers: a({}, Rr, { Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0 }, lt.length ? { "X-Inertia-Partial-Component": this.page.component, "X-Inertia-Partial-Data": lt.join(",") } : {}, je && je.length ? { "X-Inertia-Error-Bag": je } : {}, this.page.version ? { "X-Inertia-Version": this.page.version } : {}), onUploadProgress: function(R) {
          P instanceof FormData && (R.percentage = Math.round(R.loaded / R.total * 100), function($) {
            x("progress", { detail: { progress: $ } });
          }(R), $r(R));
        } }).then(function(R) {
          var $;
          if (!b.isInertiaResponse(R))
            return Promise.reject({ response: R });
          var z = R.data;
          lt.length && z.component === b.page.component && (z.props = a({}, b.page.props, z.props)), ue = b.resolvePreserveOption(ue, z), (it = b.resolvePreserveOption(it, z)) && ($ = window.history.state) != null && $.rememberedState && z.component === b.page.component && (z.rememberedState = window.history.state.rememberedState);
          var At = Ne, ut = h(z.url);
          return At.hash && !ut.hash && m(At).href === ut.href && (ut.hash = At.hash, z.url = ut.href), b.setPage(z, { visitId: Kr, replace: ye, preserveScroll: ue, preserveState: it });
        }).then(function() {
          var R = b.page.props.errors || {};
          if (Object.keys(R).length > 0) {
            var $ = je ? R[je] ? R[je] : {} : R;
            return function(z) {
              x("error", { detail: { errors: z } });
            }($), Qr($);
          }
          return x("success", { detail: { page: b.page } }), zr(b.page);
        }).catch(function(R) {
          if (b.isInertiaResponse(R.response))
            return b.setPage(R.response.data, { visitId: Kr });
          if (b.isLocationVisitResponse(R.response)) {
            var $ = h(R.response.headers["x-inertia-location"]), z = Ne;
            z.hash && !$.hash && m(z).href === $.href && ($.hash = z.hash), b.locationVisit($, ue === !0);
          } else {
            if (!R.response)
              return Promise.reject(R);
            x("invalid", { cancelable: !0, detail: { response: R.response } }) && u.show(R.response.data);
          }
        }).then(function() {
          b.activeVisit && b.finishVisit(b.activeVisit);
        }).catch(function(R) {
          if (!r.isCancel(R)) {
            var $ = x("exception", { cancelable: !0, detail: { exception: R } });
            if (b.activeVisit && b.finishVisit(b.activeVisit), $)
              return Promise.reject(R);
          }
        });
      }
    }, d.setPage = function(s, p) {
      var b = this, w = p === void 0 ? {} : p, L = w.visitId, I = L === void 0 ? this.createVisitId() : L, k = w.replace, P = k !== void 0 && k, W = w.preserveScroll, ye = W !== void 0 && W, be = w.preserveState, ue = be !== void 0 && be;
      return Promise.resolve(this.resolveComponent(s.component)).then(function(at) {
        I === b.visitId && (s.scrollRegions = s.scrollRegions || [], s.rememberedState = s.rememberedState || {}, (P = P || h(s.url).href === window.location.href) ? b.replaceState(s) : b.pushState(s), b.swapComponent({ component: at, page: s, preserveState: ue }).then(function() {
          ye || b.resetScrollPositions(), P || E(s);
        }));
      });
    }, d.pushState = function(s) {
      this.page = s, window.history.pushState(s, "", s.url);
    }, d.replaceState = function(s) {
      this.page = s, window.history.replaceState(s, "", s.url);
    }, d.handlePopstateEvent = function(s) {
      var p = this;
      if (s.state !== null) {
        var b = s.state, w = this.createVisitId();
        Promise.resolve(this.resolveComponent(b.component)).then(function(I) {
          w === p.visitId && (p.page = b, p.swapComponent({ component: I, page: b, preserveState: !1 }).then(function() {
            p.restoreScrollPositions(), E(b);
          }));
        });
      } else {
        var L = h(this.page.url);
        L.hash = window.location.hash, this.replaceState(a({}, this.page, { url: L.href })), this.resetScrollPositions();
      }
    }, d.get = function(s, p, b) {
      return p === void 0 && (p = {}), b === void 0 && (b = {}), this.visit(s, a({}, b, { method: e.Method.GET, data: p }));
    }, d.reload = function(s) {
      return s === void 0 && (s = {}), this.visit(window.location.href, a({}, s, { preserveScroll: !0, preserveState: !0 }));
    }, d.replace = function(s, p) {
      var b;
      return p === void 0 && (p = {}), console.warn("Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia." + ((b = p.method) != null ? b : "get") + "() instead."), this.visit(s, a({ preserveState: !0 }, p, { replace: !0 }));
    }, d.post = function(s, p, b) {
      return p === void 0 && (p = {}), b === void 0 && (b = {}), this.visit(s, a({ preserveState: !0 }, b, { method: e.Method.POST, data: p }));
    }, d.put = function(s, p, b) {
      return p === void 0 && (p = {}), b === void 0 && (b = {}), this.visit(s, a({ preserveState: !0 }, b, { method: e.Method.PUT, data: p }));
    }, d.patch = function(s, p, b) {
      return p === void 0 && (p = {}), b === void 0 && (b = {}), this.visit(s, a({ preserveState: !0 }, b, { method: e.Method.PATCH, data: p }));
    }, d.delete = function(s, p) {
      return p === void 0 && (p = {}), this.visit(s, a({ preserveState: !0 }, p, { method: e.Method.DELETE }));
    }, d.remember = function(s, p) {
      var b, w;
      p === void 0 && (p = "default"), O || this.replaceState(a({}, this.page, { rememberedState: a({}, (b = this.page) == null ? void 0 : b.rememberedState, (w = {}, w[p] = s, w)) }));
    }, d.restore = function(s) {
      var p, b;
      if (s === void 0 && (s = "default"), !O)
        return (p = window.history.state) == null || (b = p.rememberedState) == null ? void 0 : b[s];
    }, d.on = function(s, p) {
      var b = function(w) {
        var L = p(w);
        w.cancelable && !w.defaultPrevented && L === !1 && w.preventDefault();
      };
      return document.addEventListener("inertia:" + s, b), function() {
        return document.removeEventListener("inertia:" + s, b);
      };
    }, v;
  }(), j = { buildDOMElement: function(v) {
    var d = document.createElement("template");
    d.innerHTML = v;
    var s = d.content.firstChild;
    if (!v.startsWith("<script "))
      return s;
    var p = document.createElement("script");
    return p.innerHTML = s.innerHTML, s.getAttributeNames().forEach(function(b) {
      p.setAttribute(b, s.getAttribute(b) || "");
    }), p;
  }, isInertiaManagedElement: function(v) {
    return v.nodeType === Node.ELEMENT_NODE && v.getAttribute("inertia") !== null;
  }, findMatchingElementIndex: function(v, d) {
    var s = v.getAttribute("inertia");
    return s !== null ? d.findIndex(function(p) {
      return p.getAttribute("inertia") === s;
    }) : -1;
  }, update: l(function(v) {
    var d = this, s = v.map(function(p) {
      return d.buildDOMElement(p);
    });
    Array.from(document.head.childNodes).filter(function(p) {
      return d.isInertiaManagedElement(p);
    }).forEach(function(p) {
      var b = d.findMatchingElementIndex(p, s);
      if (b !== -1) {
        var w, L = s.splice(b, 1)[0];
        L && !p.isEqualNode(L) && (p == null || (w = p.parentNode) == null || w.replaceChild(L, p));
      } else {
        var I;
        p == null || (I = p.parentNode) == null || I.removeChild(p);
      }
    }), s.forEach(function(p) {
      return document.head.appendChild(p);
    });
  }, 1) }, A = new ee();
  e.Inertia = A, e.createHeadManager = function(v, d, s) {
    var p = {}, b = 0;
    function w() {
      var I = Object.values(p).reduce(function(k, P) {
        return k.concat(P);
      }, []).reduce(function(k, P) {
        if (P.indexOf("<") === -1)
          return k;
        if (P.indexOf("<title ") === 0) {
          var W = P.match(/(<title [^>]+>)(.*?)(<\/title>)/);
          return k.title = W ? "" + W[1] + d(W[2]) + W[3] : P, k;
        }
        var ye = P.match(/ inertia="[^"]+"/);
        return ye ? k[ye[0]] = P : k[Object.keys(k).length] = P, k;
      }, {});
      return Object.values(I);
    }
    function L() {
      v ? s(w()) : j.update(w());
    }
    return { createProvider: function() {
      var I = function() {
        var k = b += 1;
        return p[k] = [], k.toString();
      }();
      return { update: function(k) {
        return function(P, W) {
          W === void 0 && (W = []), P !== null && Object.keys(p).indexOf(P) > -1 && (p[P] = W), L();
        }(I, k);
      }, disconnect: function() {
        return function(k) {
          k !== null && Object.keys(p).indexOf(k) !== -1 && (delete p[k], L());
        }(I);
      } };
    } };
  }, e.hrefToUrl = h, e.mergeDataIntoQueryString = g, e.shouldIntercept = function(v) {
    var d = v.currentTarget.tagName.toLowerCase() === "a";
    return !(v.target && v != null && v.target.isContentEditable || v.defaultPrevented || d && v.which > 1 || d && v.altKey || d && v.ctrlKey || d && v.metaKey || d && v.shiftKey);
  }, e.urlWithoutHash = m;
})(Ga);
const ms = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, ys = { name: "Actions" }, vs = { class: "mt-8 border-t border-gray-200 pt-5" }, hs = { class: "flex justify-end" }, bs = { class: "inline-flex rounded-md shadow-sm" };
function gs(e, t, r, o, n, a) {
  return S(), F("div", vs, [
    B("div", hs, [
      B("span", bs, [
        me(e.$slots, "default")
      ])
    ])
  ]);
}
const ws = /* @__PURE__ */ ms(ys, [["render", gs]]), Te = {
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
}, Ss = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, xs = { name: "Error" }, Je = /* @__PURE__ */ Object.assign(xs, {
  props: ["error"],
  setup(e) {
    return (t, r) => e.error ? (S(), F("div", Ss, [
      me(t.$slots, "default", {}, () => [
        tt(te(e.error), 1)
      ])
    ])) : Q("", !0);
  }
}), Os = { class: "relative mt-1" }, js = { class: "flex items-center" }, Ps = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
};
({
  ...Te
});
function ot(e, t) {
  return D({
    get: () => e.modelValue,
    set: (r) => t("update:modelValue", r)
  });
}
const Es = { class: "relative flex items-start" }, As = { class: "flex h-5 items-center" }, ks = ["id", "value"], Is = { class: "ml-3" }, Rs = ["for"], Cs = { name: "Checkbox" }, Ts = /* @__PURE__ */ Object.assign(Cs, {
  props: {
    ...Te,
    label: {
      type: String,
      required: !0
    },
    value: {
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = ot(e, t);
    return (o, n) => (S(), F(oe, null, [
      B("div", Es, [
        B("div", As, [
          he(B("input", ae({
            id: o.id,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => ze(r) ? r.value = a : null),
            value: e.value,
            type: "checkbox",
            class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          }, o.$attrs), null, 16, ks), [
            [ea, V(r)]
          ]),
          B("div", Is, [
            B("label", {
              for: o.id,
              class: "block text-sm font-medium capitalize leading-5 text-gray-700"
            }, te(e.label), 9, Rs)
          ])
        ])
      ]),
      o.error ? (S(), q(Je, {
        key: 0,
        error: o.error
      }, null, 8, ["error"])) : Q("", !0)
    ], 64));
  }
}), Ns = { class: "mt-1 rounded-md shadow-sm" }, Ds = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, Ls = {
  name: "Base",
  inheritAttrs: !1
}, Ar = /* @__PURE__ */ Object.assign(Ls, {
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
    return (t, r) => (S(), F("div", null, [
      B("div", Ns, [
        me(t.$slots, "default")
      ]),
      e.description ? (S(), F("p", Ds, te(e.description), 1)) : Q("", !0),
      e.error ? (S(), q(Je, {
        key: 1,
        error: e.error
      }, null, 8, ["error"])) : Q("", !0)
    ]));
  }
}), Fs = ["type", "id", "placeholder"], Ms = { name: "Text" };
({
  ...Te
});
const Vs = { class: "flex items-center space-x-2" }, Bs = ["src", "alt"], Us = /* @__PURE__ */ tt(" Change "), $s = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, Hs = { name: "Image" };
({
  ...Te
});
const qs = ["for"], Ws = { name: "Label" }, Jo = /* @__PURE__ */ Object.assign(Ws, {
  props: {
    for: String
  },
  setup(e) {
    const t = e, r = D(() => t.for);
    return (o, n) => (S(), F("label", {
      for: V(r),
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      me(o.$slots, "default")
    ], 8, qs));
  }
}), zs = { class: "relative mt-1 rounded-md shadow-sm" }, Gs = ["id", "placeholder", "step"], Qs = {
  key: 0,
  class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
}, Js = { class: "text-gray-500 sm:text-sm sm:leading-5" }, _s = { name: "Number" };
({
  ...Te
});
const Ks = { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" }, Xs = { class: "text-gray-500 sm:text-sm sm:leading-5" }, Ys = ["id", "placeholder"], Zs = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3" }, ec = { class: "text-gray-500 sm:text-sm sm:leading-5" }, tc = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, rc = { name: "Price" };
({
  ...Te
});
const nc = ["id"], oc = {
  key: 0,
  value: null
}, ac = ["value"], ic = { name: "Select" };
({
  ...Te
});
const Kt = {
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
    return (t, r) => {
      var o;
      return S(), F("div", null, [
        e.showLabel ? (S(), q(V(Jo), {
          key: 0,
          for: e.id
        }, {
          default: ne(() => [
            tt(te(e.id.replaceAll("_id", "").replaceAll("_", " ")), 1)
          ]),
          _: 1
        }, 8, ["for"])) : Q("", !0),
        e.element.type ? (S(), q(Yr(e.element.type), ae({
          key: 1,
          key: e.id,
          id: e.id,
          modelValue: e.form[e.id],
          "onUpdate:modelValue": r[0] || (r[0] = (n) => e.form[e.id] = n)
        }, (o = e.element.props) != null ? o : null), null, 16, ["id", "modelValue"])) : (S(), q(Yr(e.element), ae({
          key: 2,
          key: e.id,
          id: e.id,
          modelValue: e.form[e.id],
          "onUpdate:modelValue": r[1] || (r[1] = (n) => e.form[e.id] = n)
        }, t.$attrs), null, 16, ["id", "modelValue"])),
        Y(V(Je), {
          error: e.form.errors[e.id]
        }, null, 8, ["error"])
      ]);
    };
  }
}, lc = { key: 0 }, uc = {
  key: 1,
  class: "grid grid-flow-col gap-x-4 gap-y-6"
}, _o = {
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
    return (t, r) => Array.isArray(e.element) ? (S(), F("div", lc, [
      (S(!0), F(oe, null, Ve(e.element, (o, n) => (S(), q(_o, {
        element: o,
        label: n,
        schema: e.schema
      }, null, 8, ["element", "label", "schema"]))), 256))
    ])) : e.element.type === "grid" ? (S(), F("div", uc, [
      (S(!0), F(oe, null, Ve(e.element.schema, (o, n) => (S(), q(Kt, ae({
        key: n,
        id: n,
        element: o,
        form: e.schema.form
      }, o), null, 16, ["id", "element", "form"]))), 128))
    ])) : e.element.type === "checkboxes" ? (S(), F(oe, { key: 2 }, [
      Y(V(Jo), null, {
        default: ne(() => {
          var o;
          return [
            tt(te(((o = e.element.label) != null ? o : e.label).replaceAll("_id", "").replaceAll("_", " ")), 1)
          ];
        }),
        _: 1
      }),
      (S(!0), F(oe, null, Ve(e.element.items, (o) => {
        var n, a, i;
        return S(), q(Kt, {
          id: (n = o.label) != null ? n : o,
          element: V(Ts),
          modelValue: e.schema.form[e.label],
          "onUpdate:modelValue": r[0] || (r[0] = (u) => e.schema.form[e.label] = u),
          form: e.schema.form,
          label: (a = o.label) != null ? a : o,
          value: (i = o.value) != null ? i : o,
          "show-label": !1
        }, null, 8, ["id", "element", "modelValue", "form", "label", "value"]);
      }), 256))
    ], 64)) : (S(), q(Kt, ae({
      key: 3,
      key: e.label,
      id: e.label,
      element: e.element,
      form: e.schema.form
    }, e.element), null, 16, ["id", "element", "form"]));
  }
}, sc = { class: "mx-auto mt-6 max-w-md space-y-6" }, dc = {
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
    return (t, r) => (S(), F("div", sc, [
      (S(!0), F(oe, null, Ve(e.schema.schema, (o, n) => (S(), q(_o, {
        element: o,
        label: n,
        schema: e.schema
      }, null, 8, ["element", "label", "schema"]))), 256)),
      Y(V(ws), null, {
        default: ne(() => [
          me(t.$slots, "actions", {
            form: e.schema.form
          }, () => [
            Y(V(ca), {
              loading: e.schema.form.processing,
              type: "submit"
            }, {
              default: ne(() => [
                tt(te(e.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 3
      })
    ]));
  }
}, cc = (e) => Object.keys(e).reduce((t, r) => {
  var o;
  return t[r] = (o = e[r].value) != null ? o : null, t;
}, {});
function mc(...e) {
  const t = e[0], r = na(
    Object.keys(t).reduce((o, n) => {
      var a, i;
      return t[n].schema ? { ...o, ...cc(t[n].schema) } : t[n].type === "checkboxes" ? (o[n] = (a = t[n].checked) != null ? a : [], o) : (o[n] = (i = t[n].value) != null ? i : null, o);
    }, {})
  );
  return {
    schema: t,
    form: r
  };
}
export {
  Kt as ElementGroup,
  dc as FormBuilder,
  mc as useSchema
};
