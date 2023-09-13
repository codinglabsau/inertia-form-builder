import { defineComponent as I, ref as y, computed as b, toRaw as _, provide as ee, onMounted as V, watch as de, h as H, Fragment as he, watchEffect as K, onUnmounted as Z, nextTick as q, inject as X, Teleport as cn, reactive as pn, unref as ae, normalizeClass as lt, openBlock as L, createBlock as re, mergeProps as pe, withCtx as xe, renderSlot as se, cloneVNode as vn, createElementBlock as Q, createTextVNode as ot, toDisplayString as Ce, createCommentVNode as we, createElementVNode as le, withDirectives as Qe, isRef as mn, vModelCheckbox as bn, createVNode as je, vShow as vt, shallowRef as gn, resolveDynamicComponent as hn, toHandlers as yn, renderList as Ne } from "vue";
import { Link as wn, useForm as xn } from "@inertiajs/vue3";
const On = /* @__PURE__ */ le("circle", {
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
}, null, -1), En = [
  On,
  Sn
], Pn = { name: "Spinner" }, mt = /* @__PURE__ */ I({
  ...Pn,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (t, l) => (L(), Q("svg", {
      class: lt(["h-5 w-5 animate-spin", t.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, En, 2));
  }
}), Tn = ["disabled", "type"], In = ["href"], Rn = { name: "Button" }, Cn = /* @__PURE__ */ I({
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
    const t = e, l = b(() => t.type !== void 0 && t.as !== "button" ? (console.warn(
      "Warning: The 'as' prop should be set to 'button' when using the 'type' prop. This will be an error in a future release."
    ), "button") : t.as), a = [
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
    return (n, o) => l.value === "button" ? (L(), Q("button", pe({
      key: 0,
      class: a,
      disabled: n.loading,
      type: n.type
    }, n.$attrs), [
      se(n.$slots, "default"),
      Qe(je(mt, { class: "ml-3" }, null, 512), [
        [vt, n.loading]
      ])
    ], 16, Tn)) : n.external ? (L(), Q("a", pe({
      key: 2,
      href: n.href,
      class: a
    }, n.$attrs), [
      se(n.$slots, "default")
    ], 16, In)) : (L(), re(ae(wn), pe({
      key: 1,
      as: n.as,
      href: n.href,
      disabled: n.loading,
      class: a
    }, n.$attrs), {
      default: xe(() => [
        se(n.$slots, "default"),
        Qe(je(mt, {
          class: "ml-3",
          "text-class": n.spinnerClass
        }, null, 8, ["text-class"]), [
          [vt, n.loading]
        ])
      ]),
      _: 3
    }, 16, ["as", "href", "disabled"]));
  }
}), Fn = { name: "PrimaryButton" }, kn = /* @__PURE__ */ I({
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
    return (l, a) => (L(), re(Cn, pe({
      as: l.as,
      external: l.external,
      href: l.href,
      loading: l.loading,
      type: l.type,
      class: t
    }, l.$attrs), {
      default: xe(() => [
        se(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "external", "href", "loading", "type"]));
  }
});
function $(e, t, ...l) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...l) : n;
  }
  let a = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(a, $), a;
}
var ue = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ue || {}), ce = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ce || {});
function j({ visible: e = !0, features: t = 0, ourProps: l, theirProps: a, ...n }) {
  var o;
  let r = Rt(a, l), u = Object.assign(n, { props: r });
  if (e || t & 2 && r.static)
    return Ue(u);
  if (t & 1) {
    let i = (o = r.unmount) == null || o ? 0 : 1;
    return $(i, { [0]() {
      return null;
    }, [1]() {
      return Ue({ ...n, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ue(u);
}
function Ue({ props: e, attrs: t, slots: l, slot: a, name: n }) {
  var o, r;
  let { as: u, ...i } = $e(e, ["unmount", "static"]), s = (o = l.default) == null ? void 0 : o.call(l, a), d = {};
  if (a) {
    let m = !1, f = [];
    for (let [c, v] of Object.entries(a))
      typeof v == "boolean" && (m = !0), v === !0 && f.push(c);
    m && (d["data-headlessui-state"] = f.join(" "));
  }
  if (u === "template") {
    if (s = It(s != null ? s : []), Object.keys(i).length > 0 || Object.keys(t).length > 0) {
      let [m, ...f] = s != null ? s : [];
      if (!Dn(m) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(i).concat(Object.keys(t)).map((p) => p.trim()).filter((p, h, g) => g.indexOf(p) === h).sort((p, h) => p.localeCompare(h)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      let c = Rt((r = m.props) != null ? r : {}, i), v = vn(m, c);
      for (let p in c)
        p.startsWith("on") && (v.props || (v.props = {}), v.props[p] = c[p]);
      return v;
    }
    return Array.isArray(s) && s.length === 1 ? s[0] : s;
  }
  return H(u, Object.assign({}, i, d), { default: () => s });
}
function It(e) {
  return e.flatMap((t) => t.type === he ? It(t.children) : [t]);
}
function Rt(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, l = {};
  for (let a of e)
    for (let n in a)
      n.startsWith("on") && typeof a[n] == "function" ? (l[n] != null || (l[n] = []), l[n].push(a[n])) : t[n] = a[n];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(l).map((a) => [a, void 0])));
  for (let a in l)
    Object.assign(t, { [a](n, ...o) {
      let r = l[a];
      for (let u of r) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        u(n, ...o);
      }
    } });
  return t;
}
function An(e) {
  let t = Object.assign({}, e);
  for (let l in t)
    t[l] === void 0 && delete t[l];
  return t;
}
function $e(e, t = []) {
  let l = Object.assign({}, e);
  for (let a of t)
    a in l && delete l[a];
  return l;
}
function Dn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ln = 0;
function Mn() {
  return ++Ln;
}
function Y() {
  return Mn();
}
var C = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(C || {});
function Bn(e) {
  throw new Error("Unexpected object: " + e);
}
var F = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(F || {});
function Ct(e, t) {
  let l = t.resolveItems();
  if (l.length <= 0)
    return null;
  let a = t.resolveActiveIndex(), n = a != null ? a : -1, o = (() => {
    switch (e.focus) {
      case 0:
        return l.findIndex((r) => !t.resolveDisabled(r));
      case 1: {
        let r = l.slice().reverse().findIndex((u, i, s) => n !== -1 && s.length - i - 1 >= n ? !1 : !t.resolveDisabled(u));
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
        Bn(e);
    }
  })();
  return o === -1 ? a : o;
}
function w(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ft = Symbol("Context");
var N = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(N || {});
function jn() {
  return Fe() !== null;
}
function Fe() {
  return X(Ft, null);
}
function at(e) {
  ee(Ft, e);
}
function bt(e, t) {
  if (e)
    return e;
  let l = t != null ? t : "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function kt(e, t) {
  let l = y(bt(e.value.type, e.value.as));
  return V(() => {
    l.value = bt(e.value.type, e.value.as);
  }), K(() => {
    var a;
    l.value || w(t) && w(t) instanceof HTMLButtonElement && !((a = w(t)) != null && a.hasAttribute("type")) && (l.value = "button");
  }), l;
}
var _n = Object.defineProperty, Nn = (e, t, l) => t in e ? _n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, gt = (e, t, l) => (Nn(e, typeof t != "symbol" ? t + "" : t, l), l);
class $n {
  constructor() {
    gt(this, "current", this.detect()), gt(this, "currentId", 0);
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
let ke = new $n();
function fe(e) {
  if (ke.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = w(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function At({ container: e, accept: t, walk: l, enabled: a }) {
  K(() => {
    let n = e.value;
    if (!n || a !== void 0 && !a.value)
      return;
    let o = fe(e);
    if (!o)
      return;
    let r = Object.assign((i) => t(i), { acceptNode: t }), u = o.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; u.nextNode(); )
      l(u.currentNode);
  });
}
let Ye = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var oe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(oe || {}), Dt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Dt || {}), Vn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Vn || {});
function Lt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ye)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var rt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(rt || {});
function ut(e, t = 0) {
  var l;
  return e === ((l = fe(e)) == null ? void 0 : l.body) ? !1 : $(t, { [0]() {
    return e.matches(Ye);
  }, [1]() {
    let a = e;
    for (; a !== null; ) {
      if (a.matches(Ye))
        return !0;
      a = a.parentElement;
    }
    return !1;
  } });
}
function Mt(e) {
  let t = fe(e);
  q(() => {
    t && !ut(t.activeElement, 0) && ve(e);
  });
}
var Hn = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Hn || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function ve(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Un = ["textarea", "input"].join(",");
function Wn(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Un)) != null ? l : !1;
}
function it(e, t = (l) => l) {
  return e.slice().sort((l, a) => {
    let n = t(l), o = t(a);
    if (n === null || o === null)
      return 0;
    let r = n.compareDocumentPosition(o);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Kn(e, t) {
  return Ie(Lt(), t, { relativeTo: e });
}
function Ie(e, t, { sorted: l = !0, relativeTo: a = null, skipElements: n = [] } = {}) {
  var o;
  let r = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? o : document, u = Array.isArray(e) ? l ? it(e) : e : Lt(e);
  n.length > 0 && u.length > 1 && (u = u.filter((v) => !n.includes(v))), a = a != null ? a : r.activeElement;
  let i = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), s = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, u.indexOf(a)) - 1;
    if (t & 4)
      return Math.max(0, u.indexOf(a)) + 1;
    if (t & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = t & 32 ? { preventScroll: !0 } : {}, m = 0, f = u.length, c;
  do {
    if (m >= f || m + f <= 0)
      return 0;
    let v = s + m;
    if (t & 16)
      v = (v + f) % f;
    else {
      if (v < 0)
        return 3;
      if (v >= f)
        return 1;
    }
    c = u[v], c == null || c.focus(d), m += i;
  } while (c !== r.activeElement);
  return t & 6 && Wn(c) && c.select(), 2;
}
function Le(e, t, l) {
  ke.isServer || K((a) => {
    document.addEventListener(e, t, l), a(() => document.removeEventListener(e, t, l));
  });
}
function Bt(e, t, l) {
  ke.isServer || K((a) => {
    window.addEventListener(e, t, l), a(() => window.removeEventListener(e, t, l));
  });
}
function st(e, t, l = b(() => !0)) {
  function a(o, r) {
    if (!l.value || o.defaultPrevented)
      return;
    let u = r(o);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let i = function s(d) {
      return typeof d == "function" ? s(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let s of i) {
      if (s === null)
        continue;
      let d = s instanceof HTMLElement ? s : w(s);
      if (d != null && d.contains(u) || o.composed && o.composedPath().includes(d))
        return;
    }
    return !ut(u, rt.Loose) && u.tabIndex !== -1 && o.preventDefault(), t(o, u);
  }
  let n = y(null);
  Le("pointerdown", (o) => {
    var r, u;
    l.value && (n.value = ((u = (r = o.composedPath) == null ? void 0 : r.call(o)) == null ? void 0 : u[0]) || o.target);
  }, !0), Le("mousedown", (o) => {
    var r, u;
    l.value && (n.value = ((u = (r = o.composedPath) == null ? void 0 : r.call(o)) == null ? void 0 : u[0]) || o.target);
  }, !0), Le("click", (o) => {
    n.value && (a(o, () => n.value), n.value = null);
  }, !0), Le("touchend", (o) => a(o, () => o.target instanceof HTMLElement ? o.target : null), !0), Bt("blur", (o) => a(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Re = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Re || {});
let _e = I({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: a, ...n } = e, o = { "aria-hidden": (a & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(a & 4) === 4 && (a & 2) !== 2 && { display: "none" } } };
    return j({ ourProps: o, theirProps: n, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function jt(e = {}, t = null, l = []) {
  for (let [a, n] of Object.entries(e))
    Nt(l, _t(t, a), n);
  return l;
}
function _t(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Nt(e, t, l) {
  if (Array.isArray(l))
    for (let [a, n] of l.entries())
      Nt(e, _t(t, a.toString()), n);
  else
    l instanceof Date ? e.push([t, l.toISOString()]) : typeof l == "boolean" ? e.push([t, l ? "1" : "0"]) : typeof l == "string" ? e.push([t, l]) : typeof l == "number" ? e.push([t, `${l}`]) : l == null ? e.push([t, ""]) : jt(l, t, e);
}
function Gn(e, t, l) {
  let a = y(l == null ? void 0 : l.value), n = b(() => e.value !== void 0);
  return [b(() => n.value ? e.value : a.value), function(o) {
    return n.value || (a.value = o), t == null ? void 0 : t(o);
  }];
}
function ht(e) {
  return [e.screenX, e.screenY];
}
function $t() {
  let e = y([-1, -1]);
  return { wasMoved(t) {
    let l = ht(t);
    return e.value[0] === l[0] && e.value[1] === l[1] ? !1 : (e.value = l, !0);
  }, update(t) {
    e.value = ht(t);
  } };
}
function Vt() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function qn() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Qn() {
  return Vt() || qn();
}
function dt(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Oe() {
  let e = [], t = { addEventListener(l, a, n, o) {
    return l.addEventListener(a, n, o), t.add(() => l.removeEventListener(a, n, o));
  }, requestAnimationFrame(...l) {
    let a = requestAnimationFrame(...l);
    t.add(() => cancelAnimationFrame(a));
  }, nextFrame(...l) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...l);
    });
  }, setTimeout(...l) {
    let a = setTimeout(...l);
    t.add(() => clearTimeout(a));
  }, microTask(...l) {
    let a = { current: !0 };
    return dt(() => {
      a.current && l[0]();
    }), t.add(() => {
      a.current = !1;
    });
  }, style(l, a, n) {
    let o = l.style.getPropertyValue(a);
    return Object.assign(l.style, { [a]: n }), this.add(() => {
      Object.assign(l.style, { [a]: o });
    });
  }, group(l) {
    let a = Oe();
    return l(a), this.add(() => a.dispose());
  }, add(l) {
    return e.push(l), () => {
      let a = e.indexOf(l);
      if (a >= 0)
        for (let n of e.splice(a, 1))
          n();
    };
  }, dispose() {
    for (let l of e.splice(0))
      l();
  } };
  return t;
}
function Yn(e, t) {
  return e === t;
}
var zn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(zn || {}), Jn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Jn || {}), Xn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Xn || {});
let Ht = Symbol("ComboboxContext");
function Se(e) {
  let t = X(Ht, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Se), l;
  }
  return t;
}
I({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Yn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: a }) {
  let n = y(1), o = y(null), r = y(null), u = y(null), i = y(null), s = y({ static: !1, hold: !1 }), d = y([]), m = y(null), f = y(1), c = y(!1);
  function v(O = (T) => T) {
    let T = m.value !== null ? d.value[m.value] : null, R = it(O(d.value.slice()), (S) => w(S.dataRef.domRef)), x = T ? R.indexOf(T) : null;
    return x === -1 && (x = null), { options: R, activeOptionIndex: x };
  }
  let p = b(() => e.multiple ? 1 : 0), h = b(() => e.nullable), [g, P] = Gn(b(() => e.modelValue), (O) => a("update:modelValue", O), b(() => e.defaultValue)), k = b(() => g.value === void 0 ? $(p.value, { [1]: [], [0]: void 0 }) : g.value), U = null, B = null, E = { comboboxState: n, value: k, mode: p, compare(O, T) {
    if (typeof e.by == "string") {
      let R = e.by;
      return (O == null ? void 0 : O[R]) === (T == null ? void 0 : T[R]);
    }
    return e.by(O, T);
  }, defaultValue: b(() => e.defaultValue), nullable: h, inputRef: r, labelRef: o, buttonRef: u, optionsRef: i, disabled: b(() => e.disabled), options: d, change(O) {
    P(O);
  }, activeOptionIndex: b(() => {
    if (c.value && m.value === null && d.value.length > 0) {
      let O = d.value.findIndex((T) => !T.dataRef.disabled);
      O !== -1 && (m.value = O);
    }
    return m.value;
  }), activationTrigger: f, optionsPropsRef: s, closeCombobox() {
    c.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, m.value = null);
  }, openCombobox() {
    if (c.value = !0, e.disabled || n.value === 0)
      return;
    let O = d.value.findIndex((T) => {
      let R = _(T.dataRef.value);
      return $(p.value, { [0]: () => E.compare(_(E.value.value), _(R)), [1]: () => _(E.value.value).some((x) => E.compare(_(x), _(R))) });
    });
    O !== -1 && (m.value = O), n.value = 0;
  }, goToOption(O, T, R) {
    c.value = !1, U !== null && cancelAnimationFrame(U), U = requestAnimationFrame(() => {
      if (e.disabled || i.value && !s.value.static && n.value === 1)
        return;
      let x = v();
      if (x.activeOptionIndex === null) {
        let M = x.options.findIndex((G) => !G.dataRef.disabled);
        M !== -1 && (x.activeOptionIndex = M);
      }
      let S = Ct(O === F.Specific ? { focus: F.Specific, id: T } : { focus: O }, { resolveItems: () => x.options, resolveActiveIndex: () => x.activeOptionIndex, resolveId: (M) => M.id, resolveDisabled: (M) => M.dataRef.disabled });
      m.value = S, f.value = R != null ? R : 1, d.value = x.options;
    });
  }, selectOption(O) {
    let T = d.value.find((x) => x.id === O);
    if (!T)
      return;
    let { dataRef: R } = T;
    P($(p.value, { [0]: () => R.value, [1]: () => {
      let x = _(E.value.value).slice(), S = _(R.value), M = x.findIndex((G) => E.compare(S, _(G)));
      return M === -1 ? x.push(S) : x.splice(M, 1), x;
    } }));
  }, selectActiveOption() {
    if (E.activeOptionIndex.value === null)
      return;
    let { dataRef: O, id: T } = d.value[E.activeOptionIndex.value];
    P($(p.value, { [0]: () => O.value, [1]: () => {
      let R = _(E.value.value).slice(), x = _(O.value), S = R.findIndex((M) => E.compare(x, _(M)));
      return S === -1 ? R.push(x) : R.splice(S, 1), R;
    } })), E.goToOption(F.Specific, T);
  }, registerOption(O, T) {
    B && cancelAnimationFrame(B);
    let R = { id: O, dataRef: T }, x = v((S) => (S.push(R), S));
    if (m.value === null) {
      let S = T.value.value;
      $(p.value, { [0]: () => E.compare(_(E.value.value), _(S)), [1]: () => _(E.value.value).some((M) => E.compare(_(M), _(S))) }) && (x.activeOptionIndex = x.options.indexOf(R));
    }
    d.value = x.options, m.value = x.activeOptionIndex, f.value = 1, x.options.some((S) => !w(S.dataRef.domRef)) && (B = requestAnimationFrame(() => {
      let S = v();
      d.value = S.options, m.value = S.activeOptionIndex;
    }));
  }, unregisterOption(O) {
    var T;
    E.activeOptionIndex.value !== null && ((T = E.options.value[E.activeOptionIndex.value]) == null ? void 0 : T.id) === O && (c.value = !0);
    let R = v((x) => {
      let S = x.findIndex((M) => M.id === O);
      return S !== -1 && x.splice(S, 1), x;
    });
    d.value = R.options, m.value = R.activeOptionIndex, f.value = 1;
  } };
  st([r, u, i], () => E.closeCombobox(), b(() => n.value === 0)), ee(Ht, E), at(b(() => $(n.value, { [0]: N.Open, [1]: N.Closed })));
  let z = b(() => E.activeOptionIndex.value === null ? null : d.value[E.activeOptionIndex.value].dataRef.value), J = b(() => {
    var O;
    return (O = w(r)) == null ? void 0 : O.closest("form");
  });
  return V(() => {
    de([J], () => {
      if (!J.value || e.defaultValue === void 0)
        return;
      function O() {
        E.change(e.defaultValue);
      }
      return J.value.addEventListener("reset", O), () => {
        var T;
        (T = J.value) == null || T.removeEventListener("reset", O);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: O, disabled: T, form: R, ...x } = e, S = { open: n.value === 0, disabled: T, activeIndex: E.activeOptionIndex.value, activeOption: z.value, value: k.value };
    return H(he, [...O != null && k.value != null ? jt({ [O]: k.value }).map(([M, G]) => H(_e, An({ features: Re.Hidden, key: M, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: R, name: M, value: G }))) : [], j({ theirProps: { ...l, ...$e(x, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: S, slots: t, attrs: l, name: "Combobox" })]);
  };
} });
I({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Y()}` } }, setup(e, { attrs: t, slots: l }) {
  let a = Se("ComboboxLabel");
  function n() {
    var o;
    (o = w(a.inputRef)) == null || o.focus({ preventScroll: !0 });
  }
  return () => {
    let o = { open: a.comboboxState.value === 0, disabled: a.disabled.value }, { id: r, ...u } = e, i = { id: r, ref: a.labelRef, onClick: n };
    return j({ ourProps: i, theirProps: u, slot: o, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} });
I({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Y()}` } }, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = Se("ComboboxButton");
  a({ el: n.buttonRef, $el: n.buttonRef });
  function o(i) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (i.preventDefault(), n.openCombobox()), q(() => {
      var s;
      return (s = w(n.inputRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    }));
  }
  function r(i) {
    switch (i.key) {
      case C.ArrowDown:
        i.preventDefault(), i.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), q(() => {
          var s;
          return (s = n.inputRef.value) == null ? void 0 : s.focus({ preventScroll: !0 });
        });
        return;
      case C.ArrowUp:
        i.preventDefault(), i.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), q(() => {
          n.value.value || n.goToOption(F.Last);
        })), q(() => {
          var s;
          return (s = n.inputRef.value) == null ? void 0 : s.focus({ preventScroll: !0 });
        });
        return;
      case C.Escape:
        if (n.comboboxState.value !== 0)
          return;
        i.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && i.stopPropagation(), n.closeCombobox(), q(() => {
          var s;
          return (s = n.inputRef.value) == null ? void 0 : s.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = kt(b(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var i, s;
    let d = { open: n.comboboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: m, ...f } = e, c = { ref: n.buttonRef, id: m, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (i = w(n.optionsRef)) == null ? void 0 : i.id, "aria-expanded": n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(s = w(n.labelRef)) == null ? void 0 : s.id, m].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: o };
    return j({ ourProps: c, theirProps: f, slot: d, attrs: t, slots: l, name: "ComboboxButton" });
  };
} });
I({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Y()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: a, expose: n }) {
  let o = Se("ComboboxInput"), r = b(() => fe(w(o.inputRef))), u = { value: !1 };
  n({ el: o.inputRef, $el: o.inputRef });
  function i() {
    o.change(null);
    let g = w(o.optionsRef);
    g && (g.scrollTop = 0), o.goToOption(F.Nothing);
  }
  let s = b(() => {
    var g;
    let P = o.value.value;
    return w(o.inputRef) ? typeof e.displayValue < "u" && P !== void 0 ? (g = e.displayValue(P)) != null ? g : "" : typeof P == "string" ? P : "" : "";
  });
  V(() => {
    de([s, o.comboboxState, r], ([g, P], [k, U]) => {
      if (u.value)
        return;
      let B = w(o.inputRef);
      B && ((U === 0 && P === 1 || g !== k) && (B.value = g), requestAnimationFrame(() => {
        var E;
        if (u.value || !B || ((E = r.value) == null ? void 0 : E.activeElement) !== B)
          return;
        let { selectionStart: z, selectionEnd: J } = B;
        Math.abs((J != null ? J : 0) - (z != null ? z : 0)) === 0 && z === 0 && B.setSelectionRange(B.value.length, B.value.length);
      }));
    }, { immediate: !0 }), de([o.comboboxState], ([g], [P]) => {
      if (g === 0 && P === 1) {
        if (u.value)
          return;
        let k = w(o.inputRef);
        if (!k)
          return;
        let U = k.value, { selectionStart: B, selectionEnd: E, selectionDirection: z } = k;
        k.value = "", k.value = U, z !== null ? k.setSelectionRange(B, E, z) : k.setSelectionRange(B, E);
      }
    });
  });
  let d = y(!1);
  function m() {
    d.value = !0;
  }
  function f() {
    Oe().nextFrame(() => {
      d.value = !1;
    });
  }
  function c(g) {
    switch (u.value = !0, g.key) {
      case C.Enter:
        if (u.value = !1, o.comboboxState.value !== 0 || d.value)
          return;
        if (g.preventDefault(), g.stopPropagation(), o.activeOptionIndex.value === null) {
          o.closeCombobox();
          return;
        }
        o.selectActiveOption(), o.mode.value === 0 && o.closeCombobox();
        break;
      case C.ArrowDown:
        return u.value = !1, g.preventDefault(), g.stopPropagation(), $(o.comboboxState.value, { [0]: () => o.goToOption(F.Next), [1]: () => o.openCombobox() });
      case C.ArrowUp:
        return u.value = !1, g.preventDefault(), g.stopPropagation(), $(o.comboboxState.value, { [0]: () => o.goToOption(F.Previous), [1]: () => {
          o.openCombobox(), q(() => {
            o.value.value || o.goToOption(F.Last);
          });
        } });
      case C.Home:
        if (g.shiftKey)
          break;
        return u.value = !1, g.preventDefault(), g.stopPropagation(), o.goToOption(F.First);
      case C.PageUp:
        return u.value = !1, g.preventDefault(), g.stopPropagation(), o.goToOption(F.First);
      case C.End:
        if (g.shiftKey)
          break;
        return u.value = !1, g.preventDefault(), g.stopPropagation(), o.goToOption(F.Last);
      case C.PageDown:
        return u.value = !1, g.preventDefault(), g.stopPropagation(), o.goToOption(F.Last);
      case C.Escape:
        if (u.value = !1, o.comboboxState.value !== 0)
          return;
        g.preventDefault(), o.optionsRef.value && !o.optionsPropsRef.value.static && g.stopPropagation(), o.nullable.value && o.mode.value === 0 && o.value.value === null && i(), o.closeCombobox();
        break;
      case C.Tab:
        if (u.value = !1, o.comboboxState.value !== 0)
          return;
        o.mode.value === 0 && o.selectActiveOption(), o.closeCombobox();
        break;
    }
  }
  function v(g) {
    t("change", g), o.nullable.value && o.mode.value === 0 && g.target.value === "" && i(), o.openCombobox();
  }
  function p() {
    u.value = !1;
  }
  let h = b(() => {
    var g, P, k, U;
    return (U = (k = (P = e.defaultValue) != null ? P : o.defaultValue.value !== void 0 ? (g = e.displayValue) == null ? void 0 : g.call(e, o.defaultValue.value) : null) != null ? k : o.defaultValue.value) != null ? U : "";
  });
  return () => {
    var g, P, k, U, B, E;
    let z = { open: o.comboboxState.value === 0 }, { id: J, displayValue: O, onChange: T, ...R } = e, x = { "aria-controls": (g = o.optionsRef.value) == null ? void 0 : g.id, "aria-expanded": o.comboboxState.value === 0, "aria-activedescendant": o.activeOptionIndex.value === null || (P = o.options.value[o.activeOptionIndex.value]) == null ? void 0 : P.id, "aria-labelledby": (B = (k = w(o.labelRef)) == null ? void 0 : k.id) != null ? B : (U = w(o.buttonRef)) == null ? void 0 : U.id, "aria-autocomplete": "list", id: J, onCompositionstart: m, onCompositionend: f, onKeydown: c, onInput: v, onBlur: p, role: "combobox", type: (E = l.type) != null ? E : "text", tabIndex: 0, ref: o.inputRef, defaultValue: h.value, disabled: o.disabled.value === !0 ? !0 : void 0 };
    return j({ ourProps: x, theirProps: R, slot: z, attrs: l, slots: a, features: ue.RenderStrategy | ue.Static, name: "ComboboxInput" });
  };
} });
I({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = Se("ComboboxOptions"), o = `headlessui-combobox-options-${Y()}`;
  a({ el: n.optionsRef, $el: n.optionsRef }), K(() => {
    n.optionsPropsRef.value.static = e.static;
  }), K(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let r = Fe(), u = b(() => r !== null ? (r.value & N.Open) === N.Open : n.comboboxState.value === 0);
  return At({ container: b(() => w(n.optionsRef)), enabled: b(() => n.comboboxState.value === 0), accept(i) {
    return i.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : i.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(i) {
    i.setAttribute("role", "none");
  } }), () => {
    var i, s, d;
    let m = { open: n.comboboxState.value === 0 }, f = { "aria-labelledby": (d = (i = w(n.labelRef)) == null ? void 0 : i.id) != null ? d : (s = w(n.buttonRef)) == null ? void 0 : s.id, id: o, ref: n.optionsRef, role: "listbox", "aria-multiselectable": n.mode.value === 1 ? !0 : void 0 }, c = $e(e, ["hold"]);
    return j({ ourProps: f, theirProps: c, slot: m, attrs: t, slots: l, features: ue.RenderStrategy | ue.Static, visible: u.value, name: "ComboboxOptions" });
  };
} });
I({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: a }) {
  let n = Se("ComboboxOption"), o = `headlessui-combobox-option-${Y()}`, r = y(null);
  a({ el: r, $el: r });
  let u = b(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === o : !1), i = b(() => $(n.mode.value, { [0]: () => n.compare(_(n.value.value), _(e.value)), [1]: () => _(n.value.value).some((h) => n.compare(_(h), _(e.value))) })), s = b(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  V(() => n.registerOption(o, s)), Z(() => n.unregisterOption(o)), K(() => {
    n.comboboxState.value === 0 && u.value && n.activationTrigger.value !== 0 && q(() => {
      var h, g;
      return (g = (h = w(r)) == null ? void 0 : h.scrollIntoView) == null ? void 0 : g.call(h, { block: "nearest" });
    });
  });
  function d(h) {
    if (e.disabled)
      return h.preventDefault();
    n.selectOption(o), n.mode.value === 0 && n.closeCombobox(), Qn() || requestAnimationFrame(() => {
      var g;
      return (g = w(n.inputRef)) == null ? void 0 : g.focus();
    });
  }
  function m() {
    if (e.disabled)
      return n.goToOption(F.Nothing);
    n.goToOption(F.Specific, o);
  }
  let f = $t();
  function c(h) {
    f.update(h);
  }
  function v(h) {
    f.wasMoved(h) && (e.disabled || u.value || n.goToOption(F.Specific, o, 0));
  }
  function p(h) {
    f.wasMoved(h) && (e.disabled || u.value && (n.optionsPropsRef.value.hold || n.goToOption(F.Nothing)));
  }
  return () => {
    let { disabled: h } = e, g = { active: u.value, selected: i.value, disabled: h }, P = { id: o, ref: r, role: "option", tabIndex: h === !0 ? void 0 : -1, "aria-disabled": h === !0 ? !0 : void 0, "aria-selected": i.value, disabled: void 0, onClick: d, onFocus: m, onPointerenter: c, onMouseenter: c, onPointermove: v, onMousemove: v, onPointerleave: p, onMouseleave: p };
    return j({ ourProps: P, theirProps: e, slot: g, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
var Te = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Te || {});
function Zn() {
  let e = y(0);
  return Bt("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ut(e, t, l, a) {
  ke.isServer || K((n) => {
    e = e != null ? e : window, e.addEventListener(t, l, a), n(() => e.removeEventListener(t, l, a));
  });
}
function el(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Wt(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let l of e.value) {
    let a = w(l);
    a instanceof HTMLElement && t.add(a);
  }
  return t;
}
var Kt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Kt || {});
let Ee = Object.assign(I({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = y(null);
  a({ el: n, $el: n });
  let o = b(() => fe(n)), r = y(!1);
  V(() => r.value = !0), Z(() => r.value = !1), nl({ ownerDocument: o }, b(() => r.value && Boolean(e.features & 16)));
  let u = ll({ ownerDocument: o, container: n, initialFocus: b(() => e.initialFocus) }, b(() => r.value && Boolean(e.features & 2)));
  ol({ ownerDocument: o, container: n, containers: e.containers, previousActiveElement: u }, b(() => r.value && Boolean(e.features & 8)));
  let i = Zn();
  function s(c) {
    let v = w(n);
    !v || ((p) => p())(() => {
      $(i.value, { [Te.Forwards]: () => {
        Ie(v, oe.First, { skipElements: [c.relatedTarget] });
      }, [Te.Backwards]: () => {
        Ie(v, oe.Last, { skipElements: [c.relatedTarget] });
      } });
    });
  }
  let d = y(!1);
  function m(c) {
    c.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function f(c) {
    if (!r.value)
      return;
    let v = Wt(e.containers);
    w(n) instanceof HTMLElement && v.add(w(n));
    let p = c.relatedTarget;
    p instanceof HTMLElement && p.dataset.headlessuiFocusGuard !== "true" && (Gt(v, p) || (d.value ? Ie(w(n), $(i.value, { [Te.Forwards]: () => oe.Next, [Te.Backwards]: () => oe.Previous }) | oe.WrapAround, { relativeTo: c.target }) : c.target instanceof HTMLElement && ve(c.target)));
  }
  return () => {
    let c = {}, v = { ref: n, onKeydown: m, onFocusout: f }, { features: p, initialFocus: h, containers: g, ...P } = e;
    return H(he, [Boolean(p & 4) && H(_e, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: s, features: Re.Focusable }), j({ ourProps: v, theirProps: { ...t, ...P }, slot: c, attrs: t, slots: l, name: "FocusTrap" }), Boolean(p & 4) && H(_e, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: s, features: Re.Focusable })]);
  };
} }), { features: Kt }), be = [];
el(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && be[0] !== t.target && (be.unshift(t.target), be = be.filter((l) => l != null && l.isConnected), be.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function tl(e) {
  let t = y(be.slice());
  return de([e], ([l], [a]) => {
    a === !0 && l === !1 ? dt(() => {
      t.value.splice(0);
    }) : a === !1 && l === !0 && (t.value = be.slice());
  }, { flush: "post" }), () => {
    var l;
    return (l = t.value.find((a) => a != null && a.isConnected)) != null ? l : null;
  };
}
function nl({ ownerDocument: e }, t) {
  let l = tl(t);
  V(() => {
    K(() => {
      var a, n;
      t.value || ((a = e.value) == null ? void 0 : a.activeElement) === ((n = e.value) == null ? void 0 : n.body) && ve(l());
    }, { flush: "post" });
  }), Z(() => {
    t.value && ve(l());
  });
}
function ll({ ownerDocument: e, container: t, initialFocus: l }, a) {
  let n = y(null), o = y(!1);
  return V(() => o.value = !0), Z(() => o.value = !1), V(() => {
    de([t, l, a], (r, u) => {
      if (r.every((s, d) => (u == null ? void 0 : u[d]) === s) || !a.value)
        return;
      let i = w(t);
      i && dt(() => {
        var s, d;
        if (!o.value)
          return;
        let m = w(l), f = (s = e.value) == null ? void 0 : s.activeElement;
        if (m) {
          if (m === f) {
            n.value = f;
            return;
          }
        } else if (i.contains(f)) {
          n.value = f;
          return;
        }
        m ? ve(m) : Ie(i, oe.First | oe.NoScroll) === Dt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function ol({ ownerDocument: e, container: t, containers: l, previousActiveElement: a }, n) {
  var o;
  Ut((o = e.value) == null ? void 0 : o.defaultView, "focus", (r) => {
    if (!n.value)
      return;
    let u = Wt(l);
    w(t) instanceof HTMLElement && u.add(w(t));
    let i = a.value;
    if (!i)
      return;
    let s = r.target;
    s && s instanceof HTMLElement ? Gt(u, s) ? (a.value = s, ve(s)) : (r.preventDefault(), r.stopPropagation(), ve(i)) : ve(a.value);
  }, !0);
}
function Gt(e, t) {
  for (let l of e)
    if (l.contains(t))
      return !0;
  return !1;
}
let We = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map();
function yt(e, t = y(!0)) {
  K((l) => {
    var a;
    if (!t.value)
      return;
    let n = w(e);
    if (!n)
      return;
    l(function() {
      var r;
      if (!n)
        return;
      let u = (r = Pe.get(n)) != null ? r : 1;
      if (u === 1 ? Pe.delete(n) : Pe.set(n, u - 1), u !== 1)
        return;
      let i = We.get(n);
      i && (i["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", i["aria-hidden"]), n.inert = i.inert, We.delete(n));
    });
    let o = (a = Pe.get(n)) != null ? a : 0;
    Pe.set(n, o + 1), o === 0 && (We.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0);
  });
}
let qt = Symbol("ForcePortalRootContext");
function al() {
  return X(qt, !1);
}
let ze = I({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return ee(qt, e.force), () => {
    let { force: a, ...n } = e;
    return j({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function rl(e) {
  let t = fe(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let l = t.getElementById("headlessui-portal-root");
  if (l)
    return l;
  let a = t.createElement("div");
  return a.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(a);
}
let Qt = I({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let a = y(null), n = b(() => fe(a)), o = al(), r = X(Yt, null), u = y(o === !0 || r == null ? rl(a.value) : r.resolveTarget());
  K(() => {
    o || r != null && (u.value = r.resolveTarget());
  });
  let i = X(Je, null);
  return V(() => {
    let s = w(a);
    s && i && Z(i.register(s));
  }), Z(() => {
    var s, d;
    let m = (s = n.value) == null ? void 0 : s.getElementById("headlessui-portal-root");
    m && u.value === m && u.value.children.length <= 0 && ((d = u.value.parentElement) == null || d.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let s = { ref: a, "data-headlessui-portal": "" };
    return H(cn, { to: u.value }, j({ ourProps: s, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), Je = Symbol("PortalParentContext");
function ul() {
  let e = X(Je, null), t = y([]);
  function l(o) {
    return t.value.push(o), e && e.register(o), () => a(o);
  }
  function a(o) {
    let r = t.value.indexOf(o);
    r !== -1 && t.value.splice(r, 1), e && e.unregister(o);
  }
  let n = { register: l, unregister: a, portals: t };
  return [t, I({ name: "PortalWrapper", setup(o, { slots: r }) {
    return ee(Je, n), () => {
      var u;
      return (u = r.default) == null ? void 0 : u.call(r);
    };
  } })];
}
let Yt = Symbol("PortalGroupContext"), il = I({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let a = pn({ resolveTarget() {
    return e.target;
  } });
  return ee(Yt, a), () => {
    let { target: n, ...o } = e;
    return j({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), zt = Symbol("StackContext");
var Xe = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Xe || {});
function sl() {
  return X(zt, () => {
  });
}
function dl({ type: e, enabled: t, element: l, onUpdate: a }) {
  let n = sl();
  function o(...r) {
    a == null || a(...r), n(...r);
  }
  V(() => {
    de(t, (r, u) => {
      r ? o(0, e, l) : u === !0 && o(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), Z(() => {
    t.value && o(1, e, l);
  }), ee(zt, o);
}
let Jt = Symbol("DescriptionContext");
function fl() {
  let e = X(Jt, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function cl({ slot: e = y({}), name: t = "Description", props: l = {} } = {}) {
  let a = y([]);
  function n(o) {
    return a.value.push(o), () => {
      let r = a.value.indexOf(o);
      r !== -1 && a.value.splice(r, 1);
    };
  }
  return ee(Jt, { register: n, slot: e, name: t, props: l }), b(() => a.value.length > 0 ? a.value.join(" ") : void 0);
}
I({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Y()}` } }, setup(e, { attrs: t, slots: l }) {
  let a = fl();
  return V(() => Z(a.register(e.id))), () => {
    let { name: n = "Description", slot: o = y({}), props: r = {} } = a, { id: u, ...i } = e, s = { ...Object.entries(r).reduce((d, [m, f]) => Object.assign(d, { [m]: ae(f) }), {}), id: u };
    return j({ ourProps: s, theirProps: i, slot: o.value, attrs: t, slots: l, name: n });
  };
} });
function pl(e) {
  let t = gn(e.getSnapshot());
  return Z(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function vl(e, t) {
  let l = e(), a = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return l;
  }, subscribe(n) {
    return a.add(n), () => a.delete(n);
  }, dispatch(n, ...o) {
    let r = t[n].call(l, ...o);
    r && (l = r, a.forEach((u) => u()));
  } };
}
function ml() {
  let e;
  return { before({ doc: t }) {
    var l;
    let a = t.documentElement;
    e = ((l = t.defaultView) != null ? l : window).innerWidth - a.clientWidth;
  }, after({ doc: t, d: l }) {
    let a = t.documentElement, n = a.clientWidth - a.offsetWidth, o = e - n;
    l.style(a, "paddingRight", `${o}px`);
  } };
}
function bl() {
  if (!Vt())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: l, meta: a }) {
    function n(r) {
      return a.containers.flatMap((u) => u()).some((u) => u.contains(r));
    }
    if (window.getComputedStyle(t.documentElement).scrollBehavior !== "auto") {
      let r = Oe();
      r.style(t.documentElement, "scroll-behavior", "auto"), l.add(() => l.microTask(() => r.dispose()));
    }
    l.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let o = null;
    l.addEventListener(t, "click", (r) => {
      if (r.target instanceof HTMLElement)
        try {
          let u = r.target.closest("a");
          if (!u)
            return;
          let { hash: i } = new URL(u.href), s = t.querySelector(i);
          s && !n(s) && (o = s);
        } catch {
        }
    }, !0), l.addEventListener(t, "touchmove", (r) => {
      r.target instanceof HTMLElement && !n(r.target) && r.preventDefault();
    }, { passive: !1 }), l.add(() => {
      window.scrollTo(0, window.pageYOffset + e), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
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
let ge = vl(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var l;
  let a = (l = this.get(e)) != null ? l : { doc: e, count: 0, d: Oe(), meta: /* @__PURE__ */ new Set() };
  return a.count++, a.meta.add(t), this.set(e, a), this;
}, POP(e, t) {
  let l = this.get(e);
  return l && (l.count--, l.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: l }) {
  let a = { doc: e, d: t, meta: hl(l) }, n = [bl(), ml(), gl()];
  n.forEach(({ before: o }) => o == null ? void 0 : o(a)), n.forEach(({ after: o }) => o == null ? void 0 : o(a));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
ge.subscribe(() => {
  let e = ge.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [l] of e)
    t.set(l, l.documentElement.style.overflow);
  for (let l of e.values()) {
    let a = t.get(l.doc) === "hidden", n = l.count !== 0;
    (n && !a || !n && a) && ge.dispatch(l.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", l), l.count === 0 && ge.dispatch("TEARDOWN", l);
  }
});
function yl(e, t, l) {
  let a = pl(ge), n = b(() => {
    let o = e.value ? a.value.get(e.value) : void 0;
    return o ? o.count > 0 : !1;
  });
  return de([e, t], ([o, r], [u], i) => {
    if (!o || !r)
      return;
    ge.dispatch("PUSH", o, l);
    let s = !1;
    i(() => {
      s || (ge.dispatch("POP", u != null ? u : o, l), s = !0);
    });
  }, { immediate: !0 }), n;
}
function wl({ defaultContainers: e = [], portals: t, mainTreeNodeRef: l } = {}) {
  let a = y(null), n = fe(a);
  function o() {
    var r;
    let u = [];
    for (let i of e)
      i !== null && (i instanceof HTMLElement ? u.push(i) : "value" in i && i.value instanceof HTMLElement && u.push(i.value));
    if (t != null && t.value)
      for (let i of t.value)
        u.push(i);
    for (let i of (r = n == null ? void 0 : n.querySelectorAll("html > *, body > *")) != null ? r : [])
      i !== document.body && i !== document.head && i instanceof HTMLElement && i.id !== "headlessui-portal-root" && (i.contains(w(a)) || u.some((s) => i.contains(s)) || u.push(i));
    return u;
  }
  return { resolveContainers: o, contains(r) {
    return o().some((u) => u.contains(r));
  }, mainTreeNodeRef: a, MainTreeNode() {
    return l != null ? null : H(_e, { features: Re.Hidden, ref: a });
  } };
}
var xl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(xl || {});
let Ze = Symbol("DialogContext");
function Ae(e) {
  let t = X(Ze, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Ae), l;
  }
  return t;
}
let Me = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
I({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Me }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Y()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: a, expose: n }) {
  var o;
  let r = y(!1);
  V(() => {
    r.value = !0;
  });
  let u = y(0), i = Fe(), s = b(() => e.open === Me && i !== null ? (i.value & N.Open) === N.Open : e.open), d = y(null), m = b(() => fe(d));
  if (n({ el: d, $el: d }), !(e.open !== Me || i !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof s.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value === Me ? void 0 : e.open}`);
  let f = b(() => r.value && s.value ? 0 : 1), c = b(() => f.value === 0), v = b(() => u.value > 1), p = X(Ze, null) !== null, [h, g] = ul(), { resolveContainers: P, mainTreeNodeRef: k, MainTreeNode: U } = wl({ portals: h, defaultContainers: [b(() => {
    var A;
    return (A = S.panelRef.value) != null ? A : d.value;
  })] }), B = b(() => v.value ? "parent" : "leaf"), E = b(() => i !== null ? (i.value & N.Closing) === N.Closing : !1), z = b(() => p || E.value ? !1 : c.value), J = b(() => {
    var A, W, te;
    return (te = Array.from((W = (A = m.value) == null ? void 0 : A.querySelectorAll("body > *")) != null ? W : []).find((ne) => ne.id === "headlessui-portal-root" ? !1 : ne.contains(w(k)) && ne instanceof HTMLElement)) != null ? te : null;
  });
  yt(J, z);
  let O = b(() => v.value ? !0 : c.value), T = b(() => {
    var A, W, te;
    return (te = Array.from((W = (A = m.value) == null ? void 0 : A.querySelectorAll("[data-headlessui-portal]")) != null ? W : []).find((ne) => ne.contains(w(k)) && ne instanceof HTMLElement)) != null ? te : null;
  });
  yt(T, O), dl({ type: "Dialog", enabled: b(() => f.value === 0), element: d, onUpdate: (A, W) => {
    if (W === "Dialog")
      return $(A, { [Xe.Add]: () => u.value += 1, [Xe.Remove]: () => u.value -= 1 });
  } });
  let R = cl({ name: "DialogDescription", slot: b(() => ({ open: s.value })) }), x = y(null), S = { titleId: x, panelRef: y(null), dialogState: f, setTitleId(A) {
    x.value !== A && (x.value = A);
  }, close() {
    t("close", !1);
  } };
  ee(Ze, S);
  let M = b(() => !(!c.value || v.value));
  st(P, (A, W) => {
    S.close(), q(() => W == null ? void 0 : W.focus());
  }, M);
  let G = b(() => !(v.value || f.value !== 0));
  Ut((o = m.value) == null ? void 0 : o.defaultView, "keydown", (A) => {
    G.value && (A.defaultPrevented || A.key === C.Escape && (A.preventDefault(), A.stopPropagation(), S.close()));
  });
  let ye = b(() => !(E.value || f.value !== 0 || p));
  return yl(m, ye, (A) => {
    var W;
    return { containers: [...(W = A.containers) != null ? W : [], P] };
  }), K((A) => {
    if (f.value !== 0)
      return;
    let W = w(d);
    if (!W)
      return;
    let te = new ResizeObserver((ne) => {
      for (let De of ne) {
        let ie = De.target.getBoundingClientRect();
        ie.x === 0 && ie.y === 0 && ie.width === 0 && ie.height === 0 && S.close();
      }
    });
    te.observe(W), A(() => te.disconnect());
  }), () => {
    let { id: A, open: W, initialFocus: te, ...ne } = e, De = { ...l, ref: d, id: A, role: "dialog", "aria-modal": f.value === 0 ? !0 : void 0, "aria-labelledby": x.value, "aria-describedby": R.value }, ie = { open: f.value === 0 };
    return H(ze, { force: !0 }, () => [H(Qt, () => H(il, { target: d.value }, () => H(ze, { force: !1 }, () => H(Ee, { initialFocus: te, containers: P, features: c.value ? $(B.value, { parent: Ee.features.RestoreFocus, leaf: Ee.features.All & ~Ee.features.FocusLock }) : Ee.features.None }, () => H(g, {}, () => j({ ourProps: De, theirProps: { ...ne, ...l }, slot: ie, attrs: l, slots: a, visible: f.value === 0, features: ue.RenderStrategy | ue.Static, name: "Dialog" })))))), H(U)]);
  };
} });
I({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Y()}` } }, setup(e, { attrs: t, slots: l }) {
  let a = Ae("DialogOverlay");
  function n(o) {
    o.target === o.currentTarget && (o.preventDefault(), o.stopPropagation(), a.close());
  }
  return () => {
    let { id: o, ...r } = e;
    return j({ ourProps: { id: o, "aria-hidden": !0, onClick: n }, theirProps: r, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
I({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Y()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = Ae("DialogBackdrop"), o = y(null);
  return a({ el: o, $el: o }), V(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...u } = e, i = { id: r, ref: o, "aria-hidden": !0 };
    return H(ze, { force: !0 }, () => H(Qt, () => j({ ourProps: i, theirProps: { ...t, ...u }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
I({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Y()}` } }, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = Ae("DialogPanel");
  a({ el: n.panelRef, $el: n.panelRef });
  function o(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...u } = e, i = { id: r, ref: n.panelRef, onClick: o };
    return j({ ourProps: i, theirProps: u, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} });
I({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Y()}` } }, setup(e, { attrs: t, slots: l }) {
  let a = Ae("DialogTitle");
  return V(() => {
    a.setTitleId(e.id), Z(() => a.setTitleId(null));
  }), () => {
    let { id: n, ...o } = e;
    return j({ ourProps: { id: n }, theirProps: o, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
  };
} });
let wt = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function xt(e) {
  var t, l;
  let a = (t = e.innerText) != null ? t : "", n = e.cloneNode(!0);
  if (!(n instanceof HTMLElement))
    return a;
  let o = !1;
  for (let u of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    u.remove(), o = !0;
  let r = o ? (l = n.innerText) != null ? l : "" : a;
  return wt.test(r) && (r = r.replace(wt, "")), r;
}
function Ol(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let l = e.getAttribute("aria-labelledby");
  if (l) {
    let a = l.split(" ").map((n) => {
      let o = document.getElementById(n);
      if (o) {
        let r = o.getAttribute("aria-label");
        return typeof r == "string" ? r.trim() : xt(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (a.length > 0)
      return a.join(", ");
  }
  return xt(e).trim();
}
function Sl(e) {
  let t = y(""), l = y("");
  return () => {
    let a = w(e);
    if (!a)
      return "";
    let n = a.innerText;
    if (t.value === n)
      return l.value;
    let o = Ol(a).trim().toLowerCase();
    return t.value = n, l.value = o, o;
  };
}
var El = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(El || {}), Pl = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Pl || {});
function Tl(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Xt = Symbol("MenuContext");
function Ve(e) {
  let t = X(Xt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Ve), l;
  }
  return t;
}
I({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let a = y(1), n = y(null), o = y(null), r = y([]), u = y(""), i = y(null), s = y(1);
  function d(f = (c) => c) {
    let c = i.value !== null ? r.value[i.value] : null, v = it(f(r.value.slice()), (h) => w(h.dataRef.domRef)), p = c ? v.indexOf(c) : null;
    return p === -1 && (p = null), { items: v, activeItemIndex: p };
  }
  let m = { menuState: a, buttonRef: n, itemsRef: o, items: r, searchQuery: u, activeItemIndex: i, activationTrigger: s, closeMenu: () => {
    a.value = 1, i.value = null;
  }, openMenu: () => a.value = 0, goToItem(f, c, v) {
    let p = d(), h = Ct(f === F.Specific ? { focus: F.Specific, id: c } : { focus: f }, { resolveItems: () => p.items, resolveActiveIndex: () => p.activeItemIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
    u.value = "", i.value = h, s.value = v != null ? v : 1, r.value = p.items;
  }, search(f) {
    let c = u.value !== "" ? 0 : 1;
    u.value += f.toLowerCase();
    let v = (i.value !== null ? r.value.slice(i.value + c).concat(r.value.slice(0, i.value + c)) : r.value).find((h) => h.dataRef.textValue.startsWith(u.value) && !h.dataRef.disabled), p = v ? r.value.indexOf(v) : -1;
    p === -1 || p === i.value || (i.value = p, s.value = 1);
  }, clearSearch() {
    u.value = "";
  }, registerItem(f, c) {
    let v = d((p) => [...p, { id: f, dataRef: c }]);
    r.value = v.items, i.value = v.activeItemIndex, s.value = 1;
  }, unregisterItem(f) {
    let c = d((v) => {
      let p = v.findIndex((h) => h.id === f);
      return p !== -1 && v.splice(p, 1), v;
    });
    r.value = c.items, i.value = c.activeItemIndex, s.value = 1;
  } };
  return st([n, o], (f, c) => {
    var v;
    m.closeMenu(), ut(c, rt.Loose) || (f.preventDefault(), (v = w(n)) == null || v.focus());
  }, b(() => a.value === 0)), ee(Xt, m), at(b(() => $(a.value, { [0]: N.Open, [1]: N.Closed }))), () => {
    let f = { open: a.value === 0, close: m.closeMenu };
    return j({ ourProps: {}, theirProps: e, slot: f, slots: t, attrs: l, name: "Menu" });
  };
} });
I({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${Y()}` } }, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = Ve("MenuButton");
  a({ el: n.buttonRef, $el: n.buttonRef });
  function o(s) {
    switch (s.key) {
      case C.Space:
      case C.Enter:
      case C.ArrowDown:
        s.preventDefault(), s.stopPropagation(), n.openMenu(), q(() => {
          var d;
          (d = w(n.itemsRef)) == null || d.focus({ preventScroll: !0 }), n.goToItem(F.First);
        });
        break;
      case C.ArrowUp:
        s.preventDefault(), s.stopPropagation(), n.openMenu(), q(() => {
          var d;
          (d = w(n.itemsRef)) == null || d.focus({ preventScroll: !0 }), n.goToItem(F.Last);
        });
        break;
    }
  }
  function r(s) {
    switch (s.key) {
      case C.Space:
        s.preventDefault();
        break;
    }
  }
  function u(s) {
    e.disabled || (n.menuState.value === 0 ? (n.closeMenu(), q(() => {
      var d;
      return (d = w(n.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })) : (s.preventDefault(), n.openMenu(), Tl(() => {
      var d;
      return (d = w(n.itemsRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })));
  }
  let i = kt(b(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var s;
    let d = { open: n.menuState.value === 0 }, { id: m, ...f } = e, c = { ref: n.buttonRef, id: m, type: i.value, "aria-haspopup": "menu", "aria-controls": (s = w(n.itemsRef)) == null ? void 0 : s.id, "aria-expanded": n.menuState.value === 0, onKeydown: o, onKeyup: r, onClick: u };
    return j({ ourProps: c, theirProps: f, slot: d, attrs: t, slots: l, name: "MenuButton" });
  };
} });
I({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-menu-items-${Y()}` } }, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = Ve("MenuItems"), o = y(null);
  a({ el: n.itemsRef, $el: n.itemsRef }), At({ container: b(() => w(n.itemsRef)), enabled: b(() => n.menuState.value === 0), accept(d) {
    return d.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } });
  function r(d) {
    var m;
    switch (o.value && clearTimeout(o.value), d.key) {
      case C.Space:
        if (n.searchQuery.value !== "")
          return d.preventDefault(), d.stopPropagation(), n.search(d.key);
      case C.Enter:
        if (d.preventDefault(), d.stopPropagation(), n.activeItemIndex.value !== null) {
          let f = n.items.value[n.activeItemIndex.value];
          (m = w(f.dataRef.domRef)) == null || m.click();
        }
        n.closeMenu(), Mt(w(n.buttonRef));
        break;
      case C.ArrowDown:
        return d.preventDefault(), d.stopPropagation(), n.goToItem(F.Next);
      case C.ArrowUp:
        return d.preventDefault(), d.stopPropagation(), n.goToItem(F.Previous);
      case C.Home:
      case C.PageUp:
        return d.preventDefault(), d.stopPropagation(), n.goToItem(F.First);
      case C.End:
      case C.PageDown:
        return d.preventDefault(), d.stopPropagation(), n.goToItem(F.Last);
      case C.Escape:
        d.preventDefault(), d.stopPropagation(), n.closeMenu(), q(() => {
          var f;
          return (f = w(n.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        break;
      case C.Tab:
        d.preventDefault(), d.stopPropagation(), n.closeMenu(), q(() => Kn(w(n.buttonRef), d.shiftKey ? oe.Previous : oe.Next));
        break;
      default:
        d.key.length === 1 && (n.search(d.key), o.value = setTimeout(() => n.clearSearch(), 350));
        break;
    }
  }
  function u(d) {
    switch (d.key) {
      case C.Space:
        d.preventDefault();
        break;
    }
  }
  let i = Fe(), s = b(() => i !== null ? (i.value & N.Open) === N.Open : n.menuState.value === 0);
  return () => {
    var d, m;
    let f = { open: n.menuState.value === 0 }, { id: c, ...v } = e, p = { "aria-activedescendant": n.activeItemIndex.value === null || (d = n.items.value[n.activeItemIndex.value]) == null ? void 0 : d.id, "aria-labelledby": (m = w(n.buttonRef)) == null ? void 0 : m.id, id: c, onKeydown: r, onKeyup: u, role: "menu", tabIndex: 0, ref: n.itemsRef };
    return j({ ourProps: p, theirProps: v, slot: f, attrs: t, slots: l, features: ue.RenderStrategy | ue.Static, visible: s.value, name: "MenuItems" });
  };
} });
I({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-menu-item-${Y()}` } }, setup(e, { slots: t, attrs: l, expose: a }) {
  let n = Ve("MenuItem"), o = y(null);
  a({ el: o, $el: o });
  let r = b(() => n.activeItemIndex.value !== null ? n.items.value[n.activeItemIndex.value].id === e.id : !1), u = Sl(o), i = b(() => ({ disabled: e.disabled, get textValue() {
    return u();
  }, domRef: o }));
  V(() => n.registerItem(e.id, i)), Z(() => n.unregisterItem(e.id)), K(() => {
    n.menuState.value === 0 && r.value && n.activationTrigger.value !== 0 && q(() => {
      var p, h;
      return (h = (p = w(o)) == null ? void 0 : p.scrollIntoView) == null ? void 0 : h.call(p, { block: "nearest" });
    });
  });
  function s(p) {
    if (e.disabled)
      return p.preventDefault();
    n.closeMenu(), Mt(w(n.buttonRef));
  }
  function d() {
    if (e.disabled)
      return n.goToItem(F.Nothing);
    n.goToItem(F.Specific, e.id);
  }
  let m = $t();
  function f(p) {
    m.update(p);
  }
  function c(p) {
    m.wasMoved(p) && (e.disabled || r.value || n.goToItem(F.Specific, e.id, 0));
  }
  function v(p) {
    m.wasMoved(p) && (e.disabled || r.value && n.goToItem(F.Nothing));
  }
  return () => {
    let { disabled: p } = e, h = { active: r.value, disabled: p, close: n.closeMenu }, { id: g, ...P } = e;
    return j({ ourProps: { id: g, ref: o, role: "menuitem", tabIndex: p === !0 ? void 0 : -1, "aria-disabled": p === !0 ? !0 : void 0, disabled: void 0, onClick: s, onFocus: d, onPointerenter: f, onMouseenter: f, onPointermove: c, onMousemove: c, onPointerleave: v, onMouseleave: v }, theirProps: { ...l, ...P }, slot: h, attrs: l, slots: t, name: "MenuItem" });
  };
} });
function Il(e) {
  let t = { called: !1 };
  return (...l) => {
    if (!t.called)
      return t.called = !0, e(...l);
  };
}
function Ke(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Be(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var et = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(et || {});
function Rl(e, t) {
  let l = Oe();
  if (!e)
    return l.dispose;
  let { transitionDuration: a, transitionDelay: n } = getComputedStyle(e), [o, r] = [a, n].map((u) => {
    let [i = 0] = u.split(",").filter(Boolean).map((s) => s.includes("ms") ? parseFloat(s) : parseFloat(s) * 1e3).sort((s, d) => d - s);
    return i;
  });
  return o !== 0 ? l.setTimeout(() => t("finished"), o + r) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function Ot(e, t, l, a, n, o) {
  let r = Oe(), u = o !== void 0 ? Il(o) : () => {
  };
  return Be(e, ...n), Ke(e, ...t, ...l), r.nextFrame(() => {
    Be(e, ...l), Ke(e, ...a), r.add(Rl(e, (i) => (Be(e, ...a, ...t), Ke(e, ...n), u(i))));
  }), r.add(() => Be(e, ...t, ...l, ...a, ...n)), r.add(() => u("cancelled")), r.dispose;
}
function me(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let ft = Symbol("TransitionContext");
var Cl = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Cl || {});
function Fl() {
  return X(ft, null) !== null;
}
function kl() {
  let e = X(ft, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Al() {
  let e = X(ct, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let ct = Symbol("NestingContext");
function He(e) {
  return "children" in e ? He(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Zt(e) {
  let t = y([]), l = y(!1);
  V(() => l.value = !0), Z(() => l.value = !1);
  function a(o, r = ce.Hidden) {
    let u = t.value.findIndex(({ id: i }) => i === o);
    u !== -1 && ($(r, { [ce.Unmount]() {
      t.value.splice(u, 1);
    }, [ce.Hidden]() {
      t.value[u].state = "hidden";
    } }), !He(t) && l.value && (e == null || e()));
  }
  function n(o) {
    let r = t.value.find(({ id: u }) => u === o);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: o, state: "visible" }), () => a(o, ce.Unmount);
  }
  return { children: t, register: n, unregister: a };
}
let en = ue.RenderStrategy, Dl = I({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: a, expose: n }) {
  let o = y(0);
  function r() {
    o.value |= N.Opening, t("beforeEnter");
  }
  function u() {
    o.value &= ~N.Opening, t("afterEnter");
  }
  function i() {
    o.value |= N.Closing, t("beforeLeave");
  }
  function s() {
    o.value &= ~N.Closing, t("afterLeave");
  }
  if (!Fl() && jn())
    return () => H(Ml, { ...e, onBeforeEnter: r, onAfterEnter: u, onBeforeLeave: i, onAfterLeave: s }, a);
  let d = y(null), m = b(() => e.unmount ? ce.Unmount : ce.Hidden);
  n({ el: d, $el: d });
  let { show: f, appear: c } = kl(), { register: v, unregister: p } = Al(), h = y(f.value ? "visible" : "hidden"), g = { value: !0 }, P = Y(), k = { value: !1 }, U = Zt(() => {
    !k.value && h.value !== "hidden" && (h.value = "hidden", p(P), s());
  });
  V(() => {
    let S = v(P);
    Z(S);
  }), K(() => {
    if (m.value === ce.Hidden && P) {
      if (f.value && h.value !== "visible") {
        h.value = "visible";
        return;
      }
      $(h.value, { hidden: () => p(P), visible: () => v(P) });
    }
  });
  let B = me(e.enter), E = me(e.enterFrom), z = me(e.enterTo), J = me(e.entered), O = me(e.leave), T = me(e.leaveFrom), R = me(e.leaveTo);
  V(() => {
    K(() => {
      if (h.value === "visible") {
        let S = w(d);
        if (S instanceof Comment && S.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function x(S) {
    let M = g.value && !c.value, G = w(d);
    !G || !(G instanceof HTMLElement) || M || (k.value = !0, f.value && r(), f.value || i(), S(f.value ? Ot(G, B, E, z, J, (ye) => {
      k.value = !1, ye === et.Finished && u();
    }) : Ot(G, O, T, R, J, (ye) => {
      k.value = !1, ye === et.Finished && (He(U) || (h.value = "hidden", p(P), s()));
    })));
  }
  return V(() => {
    de([f], (S, M, G) => {
      x(G), g.value = !1;
    }, { immediate: !0 });
  }), ee(ct, U), at(b(() => $(h.value, { visible: N.Open, hidden: N.Closed }) | o.value)), () => {
    let { appear: S, show: M, enter: G, enterFrom: ye, enterTo: A, entered: W, leave: te, leaveFrom: ne, leaveTo: De, ...ie } = e, dn = { ref: d }, fn = { ...ie, ...c.value && f.value && ke.isServer ? { class: lt([l.class, ie.class, ...B, ...E]) } : {} };
    return j({ theirProps: fn, ourProps: dn, slot: {}, slots: a, attrs: l, features: en, visible: h.value === "visible", name: "TransitionChild" });
  };
} }), Ll = Dl, Ml = I({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: a }) {
  let n = Fe(), o = b(() => e.show === null && n !== null ? (n.value & N.Open) === N.Open : e.show);
  K(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = y(o.value ? "visible" : "hidden"), u = Zt(() => {
    r.value = "hidden";
  }), i = y(!0), s = { show: o, appear: b(() => e.appear || !i.value) };
  return V(() => {
    K(() => {
      i.value = !1, o.value ? r.value = "visible" : He(u) || (r.value = "hidden");
    });
  }), ee(ct, u), ee(ft, s), () => {
    let d = $e(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), m = { unmount: e.unmount };
    return j({ ourProps: { ...m, as: "template" }, theirProps: {}, slot: {}, slots: { ...a, default: () => [H(Ll, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...m, ...d }, a.default)] }, attrs: {}, features: en, visible: r.value === "visible", name: "Transition" });
  };
} });
var St;
const Bl = typeof window < "u";
Bl && ((St = window == null ? void 0 : window.navigator) == null ? void 0 : St.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function jl(e) {
  return e;
}
const tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nt = "__vueuse_ssr_handlers__";
tt[nt] = tt[nt] || {};
tt[nt];
var Et;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Et || (Et = {}));
var _l = Object.defineProperty, Pt = Object.getOwnPropertySymbols, Nl = Object.prototype.hasOwnProperty, $l = Object.prototype.propertyIsEnumerable, Tt = (e, t, l) => t in e ? _l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, Vl = (e, t) => {
  for (var l in t || (t = {}))
    Nl.call(t, l) && Tt(e, l, t[l]);
  if (Pt)
    for (var l of Pt(t))
      $l.call(t, l) && Tt(e, l, t[l]);
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
  linear: jl
}, Hl);
function Ul(e, t) {
  return b({
    get: () => e.modelValue,
    set: (l) => t("update:modelValue", l)
  });
}
const Wl = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, Kl = { name: "Error" }, tn = /* @__PURE__ */ I({
  ...Kl,
  props: {
    error: {}
  },
  setup(e) {
    return (t, l) => t.error ? (L(), Q("div", Wl, [
      se(t.$slots, "default", {}, () => [
        ot(Ce(t.error), 1)
      ])
    ])) : we("", !0);
  }
}), Gl = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, ql = {
  name: "Base",
  inheritAttrs: !1
}, Ql = /* @__PURE__ */ I({
  ...ql,
  props: {
    description: {},
    error: {},
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, l) => (L(), Q("div", null, [
      le("div", {
        class: lt(["mt-1 rounded-md", { "shadow-sm": t.shadow }])
      }, [
        se(t.$slots, "default")
      ], 2),
      t.description ? (L(), Q("p", Gl, Ce(t.description), 1)) : we("", !0),
      t.error ? (L(), re(tn, {
        key: 1,
        error: t.error
      }, null, 8, ["error"])) : we("", !0)
    ]));
  }
}), Yl = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [a, n] of t)
    l[a] = n;
  return l;
}, zl = { name: "Actions" }, Jl = { class: "mt-8 border-t border-gray-200 pt-5" }, Xl = { class: "flex justify-end" }, Zl = { class: "inline-flex rounded-md shadow-sm" };
function eo(e, t, l, a, n, o) {
  return L(), Q("div", Jl, [
    le("div", Xl, [
      le("span", Zl, [
        se(e.$slots, "default")
      ])
    ])
  ]);
}
const to = /* @__PURE__ */ Yl(zl, [["render", eo]]), no = { class: "relative flex items-start" }, lo = { class: "flex h-5 items-center" }, oo = ["id", "value", "disabled", "readonly"], ao = { class: "ml-3" }, ro = ["for"], uo = { name: "Checkbox" }, io = /* @__PURE__ */ I({
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
    return (a, n) => (L(), re(Ql, pe(a.$props, { shadow: !1 }), {
      default: xe(() => [
        le("div", no, [
          le("div", lo, [
            Qe(le("input", pe({
              id: a.id,
              "onUpdate:modelValue": n[0] || (n[0] = (o) => mn(l) ? l.value = o : null),
              value: a.value,
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
              disabled: a.disabled,
              readonly: a.readonly
            }, a.$attrs), null, 16, oo), [
              [bn, ae(l)]
            ]),
            le("div", ao, [
              le("label", {
                for: a.id,
                class: "block text-sm font-medium leading-5 text-gray-700"
              }, Ce(a.label), 9, ro)
            ])
          ])
        ])
      ]),
      _: 1
    }, 16));
  }
}), so = ["for"], fo = { name: "Label" }, co = /* @__PURE__ */ I({
  ...fo,
  props: {
    for: {}
  },
  setup(e) {
    const t = e;
    return (l, a) => (L(), Q("label", {
      for: t.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      se(l.$slots, "default")
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
  function t(a, n) {
    return {
      handler: a,
      config: n
    };
  }
  t.withOptions = function(a, n = () => ({})) {
    const o = function(r) {
      return {
        __options: r,
        handler: a(r),
        config: n(r)
      };
    };
    return o.__isOptionsFunction = !0, o.__pluginFunction = a, o.__configFunction = n, o;
  };
  const l = t;
})(ln);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ l(ln);
  function l(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  const a = t.default;
})(nn);
let Ge = nn;
var po = (Ge.__esModule ? Ge : { default: Ge }).default, on = {}, an = {}, pt = { exports: {} }, D = String, rn = function() {
  return { isColorSupported: !1, reset: D, bold: D, dim: D, italic: D, underline: D, inverse: D, hidden: D, strikethrough: D, black: D, red: D, green: D, yellow: D, blue: D, magenta: D, cyan: D, white: D, gray: D, bgBlack: D, bgRed: D, bgGreen: D, bgYellow: D, bgBlue: D, bgMagenta: D, bgCyan: D, bgWhite: D };
};
pt.exports = rn();
pt.exports.createColors = rn;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(i, s) {
    for (var d in s)
      Object.defineProperty(i, d, {
        enumerable: !0,
        get: s[d]
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
  const l = /* @__PURE__ */ a(pt.exports);
  function a(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  let n = /* @__PURE__ */ new Set();
  function o(i, s, d) {
    typeof process < "u" && process.env.JEST_WORKER_ID || d && n.has(d) || (d && n.add(d), console.warn(""), s.forEach((m) => console.warn(i, "-", m)));
  }
  function r(i) {
    return l.default.dim(i);
  }
  const u = {
    info(i, s) {
      o(l.default.bold(l.default.cyan("info")), ...Array.isArray(i) ? [
        i
      ] : [
        s,
        i
      ]);
    },
    warn(i, s) {
      o(l.default.bold(l.default.yellow("warn")), ...Array.isArray(i) ? [
        i
      ] : [
        s,
        i
      ]);
    },
    risk(i, s) {
      o(l.default.bold(l.default.magenta("risk")), ...Array.isArray(i) ? [
        i
      ] : [
        s,
        i
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
  function l(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  function a({ version: o, from: r, to: u }) {
    t.default.warn(`${r}-color-renamed`, [
      `As of Tailwind CSS ${o}, \`${r}\` has been renamed to \`${u}\`.`,
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
      return a({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      }), this.sky;
    },
    get warmGray() {
      return a({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      }), this.stone;
    },
    get trueGray() {
      return a({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      }), this.neutral;
    },
    get coolGray() {
      return a({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      }), this.gray;
    },
    get blueGray() {
      return a({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      }), this.slate;
    }
  };
})(on);
let qe = on;
var vo = (qe.__esModule ? qe : { default: qe }).default;
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
const mo = { key: 0 }, un = /* @__PURE__ */ I({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    var m;
    const t = e, l = b(() => {
      var c;
      const f = (c = t.element.definition) == null ? void 0 : c.fieldset;
      return f ? Object.entries(f).reduce((v, [p, h]) => (h != null && h.model ? v[h.model] = t.form[h.model] : v[p] = t.form[p], v), {}) : {
        modelValue: t.form[t.element.name]
      };
    }), a = b(() => {
      var v;
      let f = Object.entries({
        ...t.element.definition,
        ...t.element.definition.props,
        ...l.value,
        schema: t.element.definition.schema,
        form: t.form,
        id: t.element.name,
        error: (v = o.value[0]) != null ? v : null
      }), c = t.element.definition.component.props;
      return Object.fromEntries(f.filter(([p]) => c.hasOwnProperty(p)));
    }), n = b(() => {
      var c;
      const f = (c = t.element.definition) == null ? void 0 : c.fieldset;
      return f ? Object.entries(f).reduce((v, [p, h]) => (h != null && h.model ? v[`update:${h.model}`] = (g) => t.form[h.model] = g : v[`update:${p}`] = (g) => t.form[p] = g, v), {}) : { "update:modelValue": (v) => t.form[t.element.name] = v };
    }), o = b(() => {
      var c;
      const f = (c = t.element.definition) == null ? void 0 : c.fieldset;
      return f ? Object.keys(f).map((v) => t.form.errors[v]).filter((v) => v) : [t.form.errors[t.element.name]];
    }), r = b(() => {
      var c;
      return ((c = t.element.definition.label) != null ? c : t.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }), u = !!t.element.definition.schema, i = (m = t.element.definition.showLabel) != null ? m : !u, s = y(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible : () => !0
    ), d = y(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible(t.form) : () => !0
    );
    return de(t.form, (f) => {
      typeof s.value == "function" && (d.value = s.value(f));
    }), (f, c) => d.value ? (L(), Q("div", mo, [
      ae(i) ? (L(), re(ae(co), {
        key: 0,
        for: f.element.name
      }, {
        default: xe(() => [
          ot(Ce(r.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : we("", !0),
      (L(), re(hn(f.element.definition.component), pe({
        key: f.element.name
      }, a.value, yn(n.value)), null, 16)),
      a.value.hasOwnProperty("error") ? we("", !0) : (L(!0), Q(he, { key: 1 }, Ne(o.value, (v, p) => (L(), re(ae(tn), {
        key: p,
        error: v
      }, null, 8, ["error"]))), 128))
    ])) : we("", !0);
  }
}), bo = { class: "mx-auto mt-6 max-w-md space-y-6" }, Oo = /* @__PURE__ */ I({
  __name: "FormBuilder",
  props: {
    schema: {},
    submit: { default: "Save" }
  },
  setup(e) {
    return (t, l) => (L(), Q("div", bo, [
      (L(!0), Q(he, null, Ne(t.schema.elements, (a, n) => (L(), re(un, {
        key: n,
        element: a,
        form: t.schema.form
      }, null, 8, ["element", "form"]))), 128)),
      je(ae(to), null, {
        default: xe(() => [
          se(t.$slots, "actions", {
            form: t.schema.form
          }, () => [
            je(ae(kn), {
              as: "button",
              type: "submit",
              loading: t.schema.form.processing
            }, {
              default: xe(() => [
                ot(Ce(t.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 3
      })
    ]));
  }
}), go = /* @__PURE__ */ I({
  __name: "CheckboxGroup",
  props: {
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, a = b({
      get: () => l.modelValue,
      set: (n) => {
        t("update:modelValue", n);
      }
    });
    return (n, o) => (L(!0), Q(he, null, Ne(n.items, (r, u) => {
      var i, s, d;
      return L(), re(ae(io), {
        id: (i = r.label) != null ? i : r,
        key: u,
        modelValue: a.value,
        "onUpdate:modelValue": o[0] || (o[0] = (m) => a.value = m),
        value: (s = r.value) != null ? s : r,
        label: (d = r.label) != null ? d : r
      }, null, 8, ["id", "modelValue", "value", "label"]);
    }), 128));
  }
}), ho = (e) => Object.keys(e).reduce((t, l) => {
  var a;
  return t[l] = (a = e[l].value) != null ? a : null, t;
}, {}), sn = (e) => Object.entries(e).map(([t, l]) => {
  const a = l.hasOwnProperty("setup") ? { component: l } : l;
  return {
    name: t,
    definition: a
  };
});
function So(e) {
  const t = xn(
    Object.keys(e).reduce((l, a) => {
      var o, r, u;
      if (e[a].schema)
        return { ...l, ...ho(e[a].schema) };
      if (e[a].component === go)
        return l[a] = (o = e[a].checked) != null ? o : [], l;
      const n = (r = e[a]) == null ? void 0 : r.fieldset;
      return n ? (Object.entries(n).forEach(([i, s]) => {
        var d;
        s != null && s.model ? l[s.model] = (d = s.value) != null ? d : null : l[i] = s;
      }), l) : (l[a] = (u = e[a].value) != null ? u : null, l);
    }, {})
  );
  return {
    elements: sn(e),
    form: t
  };
}
const yo = { class: "grid grid-flow-col gap-x-4 gap-y-6" }, Eo = /* @__PURE__ */ I({
  __name: "Grid",
  props: {
    schema: {},
    form: {}
  },
  setup(e) {
    const l = sn(e.schema);
    return (a, n) => (L(), Q("div", yo, [
      (L(!0), Q(he, null, Ne(ae(l), (o, r) => (L(), re(un, pe({
        key: r,
        element: o,
        form: a.form
      }, a.$attrs), null, 16, ["element", "form"]))), 128))
    ]));
  }
});
export {
  go as CheckboxGroup,
  Oo as FormBuilder,
  Eo as Grid,
  So as useSchema
};
