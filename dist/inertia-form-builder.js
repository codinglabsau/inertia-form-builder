import { defineComponent as P, ref as y, computed as b, toRaw as _, provide as te, onMounted as V, watch as de, h as H, Fragment as me, watchEffect as W, onUnmounted as Z, nextTick as Q, inject as X, Teleport as pn, reactive as vn, unref as oe, normalizeClass as lt, openBlock as A, createBlock as ae, mergeProps as pe, withCtx as xe, renderSlot as se, cloneVNode as mn, createElementBlock as G, createTextVNode as ot, toDisplayString as Oe, createCommentVNode as we, createElementVNode as ee, withDirectives as Qe, isRef as bn, vModelCheckbox as gn, createVNode as _e, vShow as bt, shallowRef as hn, resolveDynamicComponent as yn, toHandlers as wn, renderList as Fe } from "vue";
import { Link as xn, useForm as On } from "@inertiajs/vue3";
const Sn = /* @__PURE__ */ ee("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), En = /* @__PURE__ */ ee("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Pn = [
  Sn,
  En
], Tn = { name: "Spinner" }, gt = /* @__PURE__ */ P({
  ...Tn,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (t, l) => (A(), G("svg", {
      class: lt(["h-5 w-5 animate-spin", t.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, Pn, 2));
  }
}), In = ["disabled", "type"], Rn = ["href"], Cn = { name: "Button" }, Fn = /* @__PURE__ */ P({
  ...Cn,
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
    return (n, a) => l.value === "button" ? (A(), G("button", pe({
      key: 0,
      class: o,
      disabled: n.loading,
      type: n.type
    }, n.$attrs), [
      se(n.$slots, "default"),
      Qe(_e(gt, { class: "ml-3" }, null, 512), [
        [bt, n.loading]
      ])
    ], 16, In)) : n.external ? (A(), G("a", pe({
      key: 2,
      href: n.href,
      class: o
    }, n.$attrs), [
      se(n.$slots, "default")
    ], 16, Rn)) : (A(), ae(oe(xn), pe({
      key: 1,
      as: n.as,
      href: n.href,
      disabled: n.loading,
      class: o
    }, n.$attrs), {
      default: xe(() => [
        se(n.$slots, "default"),
        Qe(_e(gt, {
          class: "ml-3",
          "text-class": n.spinnerClass
        }, null, 8, ["text-class"]), [
          [bt, n.loading]
        ])
      ]),
      _: 3
    }, 16, ["as", "href", "disabled"]));
  }
}), kn = { name: "PrimaryButton" }, An = /* @__PURE__ */ P({
  ...kn,
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
    return (l, o) => (A(), ae(Fn, pe({
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
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, $), o;
}
var ue = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ue || {}), fe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(fe || {});
function j({ visible: e = !0, features: t = 0, ourProps: l, theirProps: o, ...n }) {
  var a;
  let r = Ft(o, l), u = Object.assign(n, { props: r });
  if (e || t & 2 && r.static)
    return Ue(u);
  if (t & 1) {
    let i = (a = r.unmount) == null || a ? 0 : 1;
    return $(i, { [0]() {
      return null;
    }, [1]() {
      return Ue({ ...n, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ue(u);
}
function Ue({ props: e, attrs: t, slots: l, slot: o, name: n }) {
  var a, r;
  let { as: u, ...i } = $e(e, ["unmount", "static"]), s = (a = l.default) == null ? void 0 : a.call(l, o), d = {};
  if (o) {
    let m = !1, c = [];
    for (let [f, v] of Object.entries(o))
      typeof v == "boolean" && (m = !0), v === !0 && c.push(f);
    m && (d["data-headlessui-state"] = c.join(" "));
  }
  if (u === "template") {
    if (s = Ct(s != null ? s : []), Object.keys(i).length > 0 || Object.keys(t).length > 0) {
      let [m, ...c] = s != null ? s : [];
      if (!Ln(m) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(i).concat(Object.keys(t)).map((p) => p.trim()).filter((p, h, g) => g.indexOf(p) === h).sort((p, h) => p.localeCompare(h)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      let f = Ft((r = m.props) != null ? r : {}, i), v = mn(m, f);
      for (let p in f)
        p.startsWith("on") && (v.props || (v.props = {}), v.props[p] = f[p]);
      return v;
    }
    return Array.isArray(s) && s.length === 1 ? s[0] : s;
  }
  return H(u, Object.assign({}, i, d), { default: () => s });
}
function Ct(e) {
  return e.flatMap((t) => t.type === me ? Ct(t.children) : [t]);
}
function Ft(...e) {
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
function Dn(e) {
  let t = Object.assign({}, e);
  for (let l in t)
    t[l] === void 0 && delete t[l];
  return t;
}
function $e(e, t = []) {
  let l = Object.assign({}, e);
  for (let o of t)
    o in l && delete l[o];
  return l;
}
function Ln(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Mn = 0;
function Bn() {
  return ++Mn;
}
function Y() {
  return Bn();
}
var C = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(C || {});
function jn(e) {
  throw new Error("Unexpected object: " + e);
}
var F = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(F || {});
function kt(e, t) {
  let l = t.resolveItems();
  if (l.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), n = o != null ? o : -1, a = (() => {
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
        jn(e);
    }
  })();
  return a === -1 ? o : a;
}
function w(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let At = Symbol("Context");
var N = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(N || {});
function _n() {
  return ke() !== null;
}
function ke() {
  return X(At, null);
}
function at(e) {
  te(At, e);
}
function ht(e, t) {
  if (e)
    return e;
  let l = t != null ? t : "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function Dt(e, t) {
  let l = y(ht(e.value.type, e.value.as));
  return V(() => {
    l.value = ht(e.value.type, e.value.as);
  }), W(() => {
    var o;
    l.value || w(t) && w(t) instanceof HTMLButtonElement && !((o = w(t)) != null && o.hasAttribute("type")) && (l.value = "button");
  }), l;
}
var Nn = Object.defineProperty, $n = (e, t, l) => t in e ? Nn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, yt = (e, t, l) => ($n(e, typeof t != "symbol" ? t + "" : t, l), l);
class Vn {
  constructor() {
    yt(this, "current", this.detect()), yt(this, "currentId", 0);
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
let Ae = new Vn();
function ce(e) {
  if (Ae.isServer)
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
function Lt({ container: e, accept: t, walk: l, enabled: o }) {
  W(() => {
    let n = e.value;
    if (!n || o !== void 0 && !o.value)
      return;
    let a = ce(e);
    if (!a)
      return;
    let r = Object.assign((i) => t(i), { acceptNode: t }), u = a.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; u.nextNode(); )
      l(u.currentNode);
  });
}
let Ye = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var re = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(re || {}), Mt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Mt || {}), Hn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Hn || {});
function Bt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ye)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var rt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(rt || {});
function ut(e, t = 0) {
  var l;
  return e === ((l = ce(e)) == null ? void 0 : l.body) ? !1 : $(t, { [0]() {
    return e.matches(Ye);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(Ye))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
function jt(e) {
  let t = ce(e);
  Q(() => {
    t && !ut(t.activeElement, 0) && ve(e);
  });
}
var Un = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Un || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function ve(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Kn = ["textarea", "input"].join(",");
function Wn(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Kn)) != null ? l : !1;
}
function it(e, t = (l) => l) {
  return e.slice().sort((l, o) => {
    let n = t(l), a = t(o);
    if (n === null || a === null)
      return 0;
    let r = n.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Gn(e, t) {
  return Re(Bt(), t, { relativeTo: e });
}
function Re(e, t, { sorted: l = !0, relativeTo: o = null, skipElements: n = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, u = Array.isArray(e) ? l ? it(e) : e : Bt(e);
  n.length > 0 && u.length > 1 && (u = u.filter((v) => !n.includes(v))), o = o != null ? o : r.activeElement;
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
      return Math.max(0, u.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, u.indexOf(o)) + 1;
    if (t & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = t & 32 ? { preventScroll: !0 } : {}, m = 0, c = u.length, f;
  do {
    if (m >= c || m + c <= 0)
      return 0;
    let v = s + m;
    if (t & 16)
      v = (v + c) % c;
    else {
      if (v < 0)
        return 3;
      if (v >= c)
        return 1;
    }
    f = u[v], f == null || f.focus(d), m += i;
  } while (f !== r.activeElement);
  return t & 6 && Wn(f) && f.select(), 2;
}
function Me(e, t, l) {
  Ae.isServer || W((o) => {
    document.addEventListener(e, t, l), o(() => document.removeEventListener(e, t, l));
  });
}
function _t(e, t, l) {
  Ae.isServer || W((o) => {
    window.addEventListener(e, t, l), o(() => window.removeEventListener(e, t, l));
  });
}
function st(e, t, l = b(() => !0)) {
  function o(a, r) {
    if (!l.value || a.defaultPrevented)
      return;
    let u = r(a);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let i = function s(d) {
      return typeof d == "function" ? s(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let s of i) {
      if (s === null)
        continue;
      let d = s instanceof HTMLElement ? s : w(s);
      if (d != null && d.contains(u) || a.composed && a.composedPath().includes(d))
        return;
    }
    return !ut(u, rt.Loose) && u.tabIndex !== -1 && a.preventDefault(), t(a, u);
  }
  let n = y(null);
  Me("pointerdown", (a) => {
    var r, u;
    l.value && (n.value = ((u = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : u[0]) || a.target);
  }, !0), Me("mousedown", (a) => {
    var r, u;
    l.value && (n.value = ((u = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : u[0]) || a.target);
  }, !0), Me("click", (a) => {
    n.value && (o(a, () => n.value), n.value = null);
  }, !0), Me("touchend", (a) => o(a, () => a.target instanceof HTMLElement ? a.target : null), !0), _t("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ce = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ce || {});
let Ne = P({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: o, ...n } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return j({ ourProps: a, theirProps: n, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function Nt(e = {}, t = null, l = []) {
  for (let [o, n] of Object.entries(e))
    Vt(l, $t(t, o), n);
  return l;
}
function $t(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Vt(e, t, l) {
  if (Array.isArray(l))
    for (let [o, n] of l.entries())
      Vt(e, $t(t, o.toString()), n);
  else
    l instanceof Date ? e.push([t, l.toISOString()]) : typeof l == "boolean" ? e.push([t, l ? "1" : "0"]) : typeof l == "string" ? e.push([t, l]) : typeof l == "number" ? e.push([t, `${l}`]) : l == null ? e.push([t, ""]) : Nt(l, t, e);
}
function qn(e, t, l) {
  let o = y(l == null ? void 0 : l.value), n = b(() => e.value !== void 0);
  return [b(() => n.value ? e.value : o.value), function(a) {
    return n.value || (o.value = a), t == null ? void 0 : t(a);
  }];
}
function wt(e) {
  return [e.screenX, e.screenY];
}
function Ht() {
  let e = y([-1, -1]);
  return { wasMoved(t) {
    let l = wt(t);
    return e.value[0] === l[0] && e.value[1] === l[1] ? !1 : (e.value = l, !0);
  }, update(t) {
    e.value = wt(t);
  } };
}
function Ut() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Qn() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Yn() {
  return Ut() || Qn();
}
function dt(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Se() {
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
  }, microTask(...l) {
    let o = { current: !0 };
    return dt(() => {
      o.current && l[0]();
    }), t.add(() => {
      o.current = !1;
    });
  }, style(l, o, n) {
    let a = l.style.getPropertyValue(o);
    return Object.assign(l.style, { [o]: n }), this.add(() => {
      Object.assign(l.style, { [o]: a });
    });
  }, group(l) {
    let o = Se();
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
var Jn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Jn || {}), Xn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Xn || {}), Zn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Zn || {});
let Kt = Symbol("ComboboxContext");
function Ee(e) {
  let t = X(Kt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Ee), l;
  }
  return t;
}
P({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => zn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: o }) {
  let n = y(1), a = y(null), r = y(null), u = y(null), i = y(null), s = y({ static: !1, hold: !1 }), d = y([]), m = y(null), c = y(1), f = y(!1);
  function v(O = (I) => I) {
    let I = m.value !== null ? d.value[m.value] : null, R = it(O(d.value.slice()), (S) => w(S.dataRef.domRef)), x = I ? R.indexOf(I) : null;
    return x === -1 && (x = null), { options: R, activeOptionIndex: x };
  }
  let p = b(() => e.multiple ? 1 : 0), h = b(() => e.nullable), [g, T] = qn(b(() => e.modelValue), (O) => o("update:modelValue", O), b(() => e.defaultValue)), k = b(() => g.value === void 0 ? $(p.value, { [1]: [], [0]: void 0 }) : g.value), U = null, B = null, E = { comboboxState: n, value: k, mode: p, compare(O, I) {
    if (typeof e.by == "string") {
      let R = e.by;
      return (O == null ? void 0 : O[R]) === (I == null ? void 0 : I[R]);
    }
    return e.by(O, I);
  }, defaultValue: b(() => e.defaultValue), nullable: h, inputRef: r, labelRef: a, buttonRef: u, optionsRef: i, disabled: b(() => e.disabled), options: d, change(O) {
    T(O);
  }, activeOptionIndex: b(() => {
    if (f.value && m.value === null && d.value.length > 0) {
      let O = d.value.findIndex((I) => !I.dataRef.disabled);
      O !== -1 && (m.value = O);
    }
    return m.value;
  }), activationTrigger: c, optionsPropsRef: s, closeCombobox() {
    f.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, m.value = null);
  }, openCombobox() {
    if (f.value = !0, e.disabled || n.value === 0)
      return;
    let O = d.value.findIndex((I) => {
      let R = _(I.dataRef.value);
      return $(p.value, { [0]: () => E.compare(_(E.value.value), _(R)), [1]: () => _(E.value.value).some((x) => E.compare(_(x), _(R))) });
    });
    O !== -1 && (m.value = O), n.value = 0;
  }, goToOption(O, I, R) {
    f.value = !1, U !== null && cancelAnimationFrame(U), U = requestAnimationFrame(() => {
      if (e.disabled || i.value && !s.value.static && n.value === 1)
        return;
      let x = v();
      if (x.activeOptionIndex === null) {
        let M = x.options.findIndex((q) => !q.dataRef.disabled);
        M !== -1 && (x.activeOptionIndex = M);
      }
      let S = kt(O === F.Specific ? { focus: F.Specific, id: I } : { focus: O }, { resolveItems: () => x.options, resolveActiveIndex: () => x.activeOptionIndex, resolveId: (M) => M.id, resolveDisabled: (M) => M.dataRef.disabled });
      m.value = S, c.value = R != null ? R : 1, d.value = x.options;
    });
  }, selectOption(O) {
    let I = d.value.find((x) => x.id === O);
    if (!I)
      return;
    let { dataRef: R } = I;
    T($(p.value, { [0]: () => R.value, [1]: () => {
      let x = _(E.value.value).slice(), S = _(R.value), M = x.findIndex((q) => E.compare(S, _(q)));
      return M === -1 ? x.push(S) : x.splice(M, 1), x;
    } }));
  }, selectActiveOption() {
    if (E.activeOptionIndex.value === null)
      return;
    let { dataRef: O, id: I } = d.value[E.activeOptionIndex.value];
    T($(p.value, { [0]: () => O.value, [1]: () => {
      let R = _(E.value.value).slice(), x = _(O.value), S = R.findIndex((M) => E.compare(x, _(M)));
      return S === -1 ? R.push(x) : R.splice(S, 1), R;
    } })), E.goToOption(F.Specific, I);
  }, registerOption(O, I) {
    B && cancelAnimationFrame(B);
    let R = { id: O, dataRef: I }, x = v((S) => (S.push(R), S));
    if (m.value === null) {
      let S = I.value.value;
      $(p.value, { [0]: () => E.compare(_(E.value.value), _(S)), [1]: () => _(E.value.value).some((M) => E.compare(_(M), _(S))) }) && (x.activeOptionIndex = x.options.indexOf(R));
    }
    d.value = x.options, m.value = x.activeOptionIndex, c.value = 1, x.options.some((S) => !w(S.dataRef.domRef)) && (B = requestAnimationFrame(() => {
      let S = v();
      d.value = S.options, m.value = S.activeOptionIndex;
    }));
  }, unregisterOption(O) {
    var I;
    E.activeOptionIndex.value !== null && ((I = E.options.value[E.activeOptionIndex.value]) == null ? void 0 : I.id) === O && (f.value = !0);
    let R = v((x) => {
      let S = x.findIndex((M) => M.id === O);
      return S !== -1 && x.splice(S, 1), x;
    });
    d.value = R.options, m.value = R.activeOptionIndex, c.value = 1;
  } };
  st([r, u, i], () => E.closeCombobox(), b(() => n.value === 0)), te(Kt, E), at(b(() => $(n.value, { [0]: N.Open, [1]: N.Closed })));
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
        var I;
        (I = J.value) == null || I.removeEventListener("reset", O);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: O, disabled: I, form: R, ...x } = e, S = { open: n.value === 0, disabled: I, activeIndex: E.activeOptionIndex.value, activeOption: z.value, value: k.value };
    return H(me, [...O != null && k.value != null ? Nt({ [O]: k.value }).map(([M, q]) => H(Ne, Dn({ features: Ce.Hidden, key: M, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: R, name: M, value: q }))) : [], j({ theirProps: { ...l, ...$e(x, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: S, slots: t, attrs: l, name: "Combobox" })]);
  };
} });
P({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Y()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Ee("ComboboxLabel");
  function n() {
    var a;
    (a = w(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: r, ...u } = e, i = { id: r, ref: o.labelRef, onClick: n };
    return j({ ourProps: i, theirProps: u, slot: a, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} });
P({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Y()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Ee("ComboboxButton");
  o({ el: n.buttonRef, $el: n.buttonRef });
  function a(i) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (i.preventDefault(), n.openCombobox()), Q(() => {
      var s;
      return (s = w(n.inputRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    }));
  }
  function r(i) {
    switch (i.key) {
      case C.ArrowDown:
        i.preventDefault(), i.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), Q(() => {
          var s;
          return (s = n.inputRef.value) == null ? void 0 : s.focus({ preventScroll: !0 });
        });
        return;
      case C.ArrowUp:
        i.preventDefault(), i.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), Q(() => {
          n.value.value || n.goToOption(F.Last);
        })), Q(() => {
          var s;
          return (s = n.inputRef.value) == null ? void 0 : s.focus({ preventScroll: !0 });
        });
        return;
      case C.Escape:
        if (n.comboboxState.value !== 0)
          return;
        i.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && i.stopPropagation(), n.closeCombobox(), Q(() => {
          var s;
          return (s = n.inputRef.value) == null ? void 0 : s.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = Dt(b(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var i, s;
    let d = { open: n.comboboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: m, ...c } = e, f = { ref: n.buttonRef, id: m, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (i = w(n.optionsRef)) == null ? void 0 : i.id, "aria-expanded": n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(s = w(n.labelRef)) == null ? void 0 : s.id, m].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return j({ ourProps: f, theirProps: c, slot: d, attrs: t, slots: l, name: "ComboboxButton" });
  };
} });
P({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Y()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = Ee("ComboboxInput"), r = b(() => ce(w(a.inputRef))), u = { value: !1 };
  n({ el: a.inputRef, $el: a.inputRef });
  function i() {
    a.change(null);
    let g = w(a.optionsRef);
    g && (g.scrollTop = 0), a.goToOption(F.Nothing);
  }
  let s = b(() => {
    var g;
    let T = a.value.value;
    return w(a.inputRef) ? typeof e.displayValue < "u" && T !== void 0 ? (g = e.displayValue(T)) != null ? g : "" : typeof T == "string" ? T : "" : "";
  });
  V(() => {
    de([s, a.comboboxState, r], ([g, T], [k, U]) => {
      if (u.value)
        return;
      let B = w(a.inputRef);
      B && ((U === 0 && T === 1 || g !== k) && (B.value = g), requestAnimationFrame(() => {
        var E;
        if (u.value || !B || ((E = r.value) == null ? void 0 : E.activeElement) !== B)
          return;
        let { selectionStart: z, selectionEnd: J } = B;
        Math.abs((J != null ? J : 0) - (z != null ? z : 0)) === 0 && z === 0 && B.setSelectionRange(B.value.length, B.value.length);
      }));
    }, { immediate: !0 }), de([a.comboboxState], ([g], [T]) => {
      if (g === 0 && T === 1) {
        if (u.value)
          return;
        let k = w(a.inputRef);
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
  function c() {
    Se().nextFrame(() => {
      d.value = !1;
    });
  }
  function f(g) {
    switch (u.value = !0, g.key) {
      case C.Enter:
        if (u.value = !1, a.comboboxState.value !== 0 || d.value)
          return;
        if (g.preventDefault(), g.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case C.ArrowDown:
        return u.value = !1, g.preventDefault(), g.stopPropagation(), $(a.comboboxState.value, { [0]: () => a.goToOption(F.Next), [1]: () => a.openCombobox() });
      case C.ArrowUp:
        return u.value = !1, g.preventDefault(), g.stopPropagation(), $(a.comboboxState.value, { [0]: () => a.goToOption(F.Previous), [1]: () => {
          a.openCombobox(), Q(() => {
            a.value.value || a.goToOption(F.Last);
          });
        } });
      case C.Home:
        if (g.shiftKey)
          break;
        return u.value = !1, g.preventDefault(), g.stopPropagation(), a.goToOption(F.First);
      case C.PageUp:
        return u.value = !1, g.preventDefault(), g.stopPropagation(), a.goToOption(F.First);
      case C.End:
        if (g.shiftKey)
          break;
        return u.value = !1, g.preventDefault(), g.stopPropagation(), a.goToOption(F.Last);
      case C.PageDown:
        return u.value = !1, g.preventDefault(), g.stopPropagation(), a.goToOption(F.Last);
      case C.Escape:
        if (u.value = !1, a.comboboxState.value !== 0)
          return;
        g.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && g.stopPropagation(), a.nullable.value && a.mode.value === 0 && a.value.value === null && i(), a.closeCombobox();
        break;
      case C.Tab:
        if (u.value = !1, a.comboboxState.value !== 0)
          return;
        a.mode.value === 0 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function v(g) {
    t("change", g), a.nullable.value && a.mode.value === 0 && g.target.value === "" && i(), a.openCombobox();
  }
  function p() {
    u.value = !1;
  }
  let h = b(() => {
    var g, T, k, U;
    return (U = (k = (T = e.defaultValue) != null ? T : a.defaultValue.value !== void 0 ? (g = e.displayValue) == null ? void 0 : g.call(e, a.defaultValue.value) : null) != null ? k : a.defaultValue.value) != null ? U : "";
  });
  return () => {
    var g, T, k, U, B, E;
    let z = { open: a.comboboxState.value === 0 }, { id: J, displayValue: O, onChange: I, ...R } = e, x = { "aria-controls": (g = a.optionsRef.value) == null ? void 0 : g.id, "aria-expanded": a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (T = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : T.id, "aria-labelledby": (B = (k = w(a.labelRef)) == null ? void 0 : k.id) != null ? B : (U = w(a.buttonRef)) == null ? void 0 : U.id, "aria-autocomplete": "list", id: J, onCompositionstart: m, onCompositionend: c, onKeydown: f, onInput: v, onBlur: p, role: "combobox", type: (E = l.type) != null ? E : "text", tabIndex: 0, ref: a.inputRef, defaultValue: h.value, disabled: a.disabled.value === !0 ? !0 : void 0 };
    return j({ ourProps: x, theirProps: R, slot: z, attrs: l, slots: o, features: ue.RenderStrategy | ue.Static, name: "ComboboxInput" });
  };
} });
P({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Ee("ComboboxOptions"), a = `headlessui-combobox-options-${Y()}`;
  o({ el: n.optionsRef, $el: n.optionsRef }), W(() => {
    n.optionsPropsRef.value.static = e.static;
  }), W(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let r = ke(), u = b(() => r !== null ? (r.value & N.Open) === N.Open : n.comboboxState.value === 0);
  return Lt({ container: b(() => w(n.optionsRef)), enabled: b(() => n.comboboxState.value === 0), accept(i) {
    return i.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : i.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(i) {
    i.setAttribute("role", "none");
  } }), () => {
    var i, s, d;
    let m = { open: n.comboboxState.value === 0 }, c = { "aria-labelledby": (d = (i = w(n.labelRef)) == null ? void 0 : i.id) != null ? d : (s = w(n.buttonRef)) == null ? void 0 : s.id, id: a, ref: n.optionsRef, role: "listbox", "aria-multiselectable": n.mode.value === 1 ? !0 : void 0 }, f = $e(e, ["hold"]);
    return j({ ourProps: c, theirProps: f, slot: m, attrs: t, slots: l, features: ue.RenderStrategy | ue.Static, visible: u.value, name: "ComboboxOptions" });
  };
} });
P({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: o }) {
  let n = Ee("ComboboxOption"), a = `headlessui-combobox-option-${Y()}`, r = y(null);
  o({ el: r, $el: r });
  let u = b(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === a : !1), i = b(() => $(n.mode.value, { [0]: () => n.compare(_(n.value.value), _(e.value)), [1]: () => _(n.value.value).some((h) => n.compare(_(h), _(e.value))) })), s = b(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  V(() => n.registerOption(a, s)), Z(() => n.unregisterOption(a)), W(() => {
    n.comboboxState.value === 0 && u.value && n.activationTrigger.value !== 0 && Q(() => {
      var h, g;
      return (g = (h = w(r)) == null ? void 0 : h.scrollIntoView) == null ? void 0 : g.call(h, { block: "nearest" });
    });
  });
  function d(h) {
    if (e.disabled)
      return h.preventDefault();
    n.selectOption(a), n.mode.value === 0 && n.closeCombobox(), Yn() || requestAnimationFrame(() => {
      var g;
      return (g = w(n.inputRef)) == null ? void 0 : g.focus();
    });
  }
  function m() {
    if (e.disabled)
      return n.goToOption(F.Nothing);
    n.goToOption(F.Specific, a);
  }
  let c = Ht();
  function f(h) {
    c.update(h);
  }
  function v(h) {
    c.wasMoved(h) && (e.disabled || u.value || n.goToOption(F.Specific, a, 0));
  }
  function p(h) {
    c.wasMoved(h) && (e.disabled || u.value && (n.optionsPropsRef.value.hold || n.goToOption(F.Nothing)));
  }
  return () => {
    let { disabled: h } = e, g = { active: u.value, selected: i.value, disabled: h }, T = { id: a, ref: r, role: "option", tabIndex: h === !0 ? void 0 : -1, "aria-disabled": h === !0 ? !0 : void 0, "aria-selected": i.value, disabled: void 0, onClick: d, onFocus: m, onPointerenter: f, onMouseenter: f, onPointermove: v, onMousemove: v, onPointerleave: p, onMouseleave: p };
    return j({ ourProps: T, theirProps: e, slot: g, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
var Ie = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Ie || {});
function el() {
  let e = y(0);
  return _t("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Wt(e, t, l, o) {
  Ae.isServer || W((n) => {
    e = e != null ? e : window, e.addEventListener(t, l, o), n(() => e.removeEventListener(t, l, o));
  });
}
function tl(e) {
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
    let o = w(l);
    o instanceof HTMLElement && t.add(o);
  }
  return t;
}
var qt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(qt || {});
let Pe = Object.assign(P({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = y(null);
  o({ el: n, $el: n });
  let a = b(() => ce(n)), r = y(!1);
  V(() => r.value = !0), Z(() => r.value = !1), ll({ ownerDocument: a }, b(() => r.value && Boolean(e.features & 16)));
  let u = ol({ ownerDocument: a, container: n, initialFocus: b(() => e.initialFocus) }, b(() => r.value && Boolean(e.features & 2)));
  al({ ownerDocument: a, container: n, containers: e.containers, previousActiveElement: u }, b(() => r.value && Boolean(e.features & 8)));
  let i = el();
  function s(f) {
    let v = w(n);
    !v || ((p) => p())(() => {
      $(i.value, { [Ie.Forwards]: () => {
        Re(v, re.First, { skipElements: [f.relatedTarget] });
      }, [Ie.Backwards]: () => {
        Re(v, re.Last, { skipElements: [f.relatedTarget] });
      } });
    });
  }
  let d = y(!1);
  function m(f) {
    f.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function c(f) {
    if (!r.value)
      return;
    let v = Gt(e.containers);
    w(n) instanceof HTMLElement && v.add(w(n));
    let p = f.relatedTarget;
    p instanceof HTMLElement && p.dataset.headlessuiFocusGuard !== "true" && (Qt(v, p) || (d.value ? Re(w(n), $(i.value, { [Ie.Forwards]: () => re.Next, [Ie.Backwards]: () => re.Previous }) | re.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && ve(f.target)));
  }
  return () => {
    let f = {}, v = { ref: n, onKeydown: m, onFocusout: c }, { features: p, initialFocus: h, containers: g, ...T } = e;
    return H(me, [Boolean(p & 4) && H(Ne, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: s, features: Ce.Focusable }), j({ ourProps: v, theirProps: { ...t, ...T }, slot: f, attrs: t, slots: l, name: "FocusTrap" }), Boolean(p & 4) && H(Ne, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: s, features: Ce.Focusable })]);
  };
} }), { features: qt }), ge = [];
tl(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && ge[0] !== t.target && (ge.unshift(t.target), ge = ge.filter((l) => l != null && l.isConnected), ge.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function nl(e) {
  let t = y(ge.slice());
  return de([e], ([l], [o]) => {
    o === !0 && l === !1 ? dt(() => {
      t.value.splice(0);
    }) : o === !1 && l === !0 && (t.value = ge.slice());
  }, { flush: "post" }), () => {
    var l;
    return (l = t.value.find((o) => o != null && o.isConnected)) != null ? l : null;
  };
}
function ll({ ownerDocument: e }, t) {
  let l = nl(t);
  V(() => {
    W(() => {
      var o, n;
      t.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((n = e.value) == null ? void 0 : n.body) && ve(l());
    }, { flush: "post" });
  }), Z(() => {
    t.value && ve(l());
  });
}
function ol({ ownerDocument: e, container: t, initialFocus: l }, o) {
  let n = y(null), a = y(!1);
  return V(() => a.value = !0), Z(() => a.value = !1), V(() => {
    de([t, l, o], (r, u) => {
      if (r.every((s, d) => (u == null ? void 0 : u[d]) === s) || !o.value)
        return;
      let i = w(t);
      i && dt(() => {
        var s, d;
        if (!a.value)
          return;
        let m = w(l), c = (s = e.value) == null ? void 0 : s.activeElement;
        if (m) {
          if (m === c) {
            n.value = c;
            return;
          }
        } else if (i.contains(c)) {
          n.value = c;
          return;
        }
        m ? ve(m) : Re(i, re.First | re.NoScroll) === Mt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function al({ ownerDocument: e, container: t, containers: l, previousActiveElement: o }, n) {
  var a;
  Wt((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!n.value)
      return;
    let u = Gt(l);
    w(t) instanceof HTMLElement && u.add(w(t));
    let i = o.value;
    if (!i)
      return;
    let s = r.target;
    s && s instanceof HTMLElement ? Qt(u, s) ? (o.value = s, ve(s)) : (r.preventDefault(), r.stopPropagation(), ve(i)) : ve(o.value);
  }, !0);
}
function Qt(e, t) {
  for (let l of e)
    if (l.contains(t))
      return !0;
  return !1;
}
let Ke = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
function xt(e, t = y(!0)) {
  W((l) => {
    var o;
    if (!t.value)
      return;
    let n = w(e);
    if (!n)
      return;
    l(function() {
      var r;
      if (!n)
        return;
      let u = (r = Te.get(n)) != null ? r : 1;
      if (u === 1 ? Te.delete(n) : Te.set(n, u - 1), u !== 1)
        return;
      let i = Ke.get(n);
      i && (i["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", i["aria-hidden"]), n.inert = i.inert, Ke.delete(n));
    });
    let a = (o = Te.get(n)) != null ? o : 0;
    Te.set(n, a + 1), a === 0 && (Ke.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0);
  });
}
let Yt = Symbol("ForcePortalRootContext");
function rl() {
  return X(Yt, !1);
}
let ze = P({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return te(Yt, e.force), () => {
    let { force: o, ...n } = e;
    return j({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function ul(e) {
  let t = ce(e);
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
let zt = P({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let o = y(null), n = b(() => ce(o)), a = rl(), r = X(Jt, null), u = y(a === !0 || r == null ? ul(o.value) : r.resolveTarget());
  W(() => {
    a || r != null && (u.value = r.resolveTarget());
  });
  let i = X(Je, null);
  return V(() => {
    let s = w(o);
    s && i && Z(i.register(s));
  }), Z(() => {
    var s, d;
    let m = (s = n.value) == null ? void 0 : s.getElementById("headlessui-portal-root");
    m && u.value === m && u.value.children.length <= 0 && ((d = u.value.parentElement) == null || d.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let s = { ref: o, "data-headlessui-portal": "" };
    return H(pn, { to: u.value }, j({ ourProps: s, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), Je = Symbol("PortalParentContext");
function il() {
  let e = X(Je, null), t = y([]);
  function l(a) {
    return t.value.push(a), e && e.register(a), () => o(a);
  }
  function o(a) {
    let r = t.value.indexOf(a);
    r !== -1 && t.value.splice(r, 1), e && e.unregister(a);
  }
  let n = { register: l, unregister: o, portals: t };
  return [t, P({ name: "PortalWrapper", setup(a, { slots: r }) {
    return te(Je, n), () => {
      var u;
      return (u = r.default) == null ? void 0 : u.call(r);
    };
  } })];
}
let Jt = Symbol("PortalGroupContext"), sl = P({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let o = vn({ resolveTarget() {
    return e.target;
  } });
  return te(Jt, o), () => {
    let { target: n, ...a } = e;
    return j({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), Xt = Symbol("StackContext");
var Xe = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Xe || {});
function dl() {
  return X(Xt, () => {
  });
}
function cl({ type: e, enabled: t, element: l, onUpdate: o }) {
  let n = dl();
  function a(...r) {
    o == null || o(...r), n(...r);
  }
  V(() => {
    de(t, (r, u) => {
      r ? a(0, e, l) : u === !0 && a(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), Z(() => {
    t.value && a(1, e, l);
  }), te(Xt, a);
}
let Zt = Symbol("DescriptionContext");
function fl() {
  let e = X(Zt, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function pl({ slot: e = y({}), name: t = "Description", props: l = {} } = {}) {
  let o = y([]);
  function n(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return te(Zt, { register: n, slot: e, name: t, props: l }), b(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
P({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Y()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = fl();
  return V(() => Z(o.register(e.id))), () => {
    let { name: n = "Description", slot: a = y({}), props: r = {} } = o, { id: u, ...i } = e, s = { ...Object.entries(r).reduce((d, [m, c]) => Object.assign(d, { [m]: oe(c) }), {}), id: u };
    return j({ ourProps: s, theirProps: i, slot: a.value, attrs: t, slots: l, name: n });
  };
} });
function vl(e) {
  let t = hn(e.getSnapshot());
  return Z(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function ml(e, t) {
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
function bl() {
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
function gl() {
  if (!Ut())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: l, meta: o }) {
    function n(r) {
      return o.containers.flatMap((u) => u()).some((u) => u.contains(r));
    }
    if (window.getComputedStyle(t.documentElement).scrollBehavior !== "auto") {
      let r = Se();
      r.style(t.documentElement, "scroll-behavior", "auto"), l.add(() => l.microTask(() => r.dispose()));
    }
    l.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    l.addEventListener(t, "click", (r) => {
      if (r.target instanceof HTMLElement)
        try {
          let u = r.target.closest("a");
          if (!u)
            return;
          let { hash: i } = new URL(u.href), s = t.querySelector(i);
          s && !n(s) && (a = s);
        } catch {
        }
    }, !0), l.addEventListener(t, "touchmove", (r) => {
      r.target instanceof HTMLElement && !n(r.target) && r.preventDefault();
    }, { passive: !1 }), l.add(() => {
      window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
    });
  } };
}
function hl() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function yl(e) {
  let t = {};
  for (let l of e)
    Object.assign(t, l(t));
  return t;
}
let he = ml(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var l;
  let o = (l = this.get(e)) != null ? l : { doc: e, count: 0, d: Se(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(t), this.set(e, o), this;
}, POP(e, t) {
  let l = this.get(e);
  return l && (l.count--, l.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: l }) {
  let o = { doc: e, d: t, meta: yl(l) }, n = [gl(), bl(), hl()];
  n.forEach(({ before: a }) => a == null ? void 0 : a(o)), n.forEach(({ after: a }) => a == null ? void 0 : a(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
he.subscribe(() => {
  let e = he.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [l] of e)
    t.set(l, l.documentElement.style.overflow);
  for (let l of e.values()) {
    let o = t.get(l.doc) === "hidden", n = l.count !== 0;
    (n && !o || !n && o) && he.dispatch(l.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", l), l.count === 0 && he.dispatch("TEARDOWN", l);
  }
});
function wl(e, t, l) {
  let o = vl(he), n = b(() => {
    let a = e.value ? o.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return de([e, t], ([a, r], [u], i) => {
    if (!a || !r)
      return;
    he.dispatch("PUSH", a, l);
    let s = !1;
    i(() => {
      s || (he.dispatch("POP", u != null ? u : a, l), s = !0);
    });
  }, { immediate: !0 }), n;
}
function xl({ defaultContainers: e = [], portals: t, mainTreeNodeRef: l } = {}) {
  let o = y(null), n = ce(o);
  function a() {
    var r;
    let u = [];
    for (let i of e)
      i !== null && (i instanceof HTMLElement ? u.push(i) : "value" in i && i.value instanceof HTMLElement && u.push(i.value));
    if (t != null && t.value)
      for (let i of t.value)
        u.push(i);
    for (let i of (r = n == null ? void 0 : n.querySelectorAll("html > *, body > *")) != null ? r : [])
      i !== document.body && i !== document.head && i instanceof HTMLElement && i.id !== "headlessui-portal-root" && (i.contains(w(o)) || u.some((s) => i.contains(s)) || u.push(i));
    return u;
  }
  return { resolveContainers: a, contains(r) {
    return a().some((u) => u.contains(r));
  }, mainTreeNodeRef: o, MainTreeNode() {
    return l != null ? null : H(Ne, { features: Ce.Hidden, ref: o });
  } };
}
var Ol = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ol || {});
let Ze = Symbol("DialogContext");
function De(e) {
  let t = X(Ze, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, De), l;
  }
  return t;
}
let Be = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
P({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Be }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Y()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  var a;
  let r = y(!1);
  V(() => {
    r.value = !0;
  });
  let u = y(0), i = ke(), s = b(() => e.open === Be && i !== null ? (i.value & N.Open) === N.Open : e.open), d = y(null), m = b(() => ce(d));
  if (n({ el: d, $el: d }), !(e.open !== Be || i !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof s.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value === Be ? void 0 : e.open}`);
  let c = b(() => r.value && s.value ? 0 : 1), f = b(() => c.value === 0), v = b(() => u.value > 1), p = X(Ze, null) !== null, [h, g] = il(), { resolveContainers: T, mainTreeNodeRef: k, MainTreeNode: U } = xl({ portals: h, defaultContainers: [b(() => {
    var D;
    return (D = S.panelRef.value) != null ? D : d.value;
  })] }), B = b(() => v.value ? "parent" : "leaf"), E = b(() => i !== null ? (i.value & N.Closing) === N.Closing : !1), z = b(() => p || E.value ? !1 : f.value), J = b(() => {
    var D, K, ne;
    return (ne = Array.from((K = (D = m.value) == null ? void 0 : D.querySelectorAll("body > *")) != null ? K : []).find((le) => le.id === "headlessui-portal-root" ? !1 : le.contains(w(k)) && le instanceof HTMLElement)) != null ? ne : null;
  });
  xt(J, z);
  let O = b(() => v.value ? !0 : f.value), I = b(() => {
    var D, K, ne;
    return (ne = Array.from((K = (D = m.value) == null ? void 0 : D.querySelectorAll("[data-headlessui-portal]")) != null ? K : []).find((le) => le.contains(w(k)) && le instanceof HTMLElement)) != null ? ne : null;
  });
  xt(I, O), cl({ type: "Dialog", enabled: b(() => c.value === 0), element: d, onUpdate: (D, K) => {
    if (K === "Dialog")
      return $(D, { [Xe.Add]: () => u.value += 1, [Xe.Remove]: () => u.value -= 1 });
  } });
  let R = pl({ name: "DialogDescription", slot: b(() => ({ open: s.value })) }), x = y(null), S = { titleId: x, panelRef: y(null), dialogState: c, setTitleId(D) {
    x.value !== D && (x.value = D);
  }, close() {
    t("close", !1);
  } };
  te(Ze, S);
  let M = b(() => !(!f.value || v.value));
  st(T, (D, K) => {
    S.close(), Q(() => K == null ? void 0 : K.focus());
  }, M);
  let q = b(() => !(v.value || c.value !== 0));
  Wt((a = m.value) == null ? void 0 : a.defaultView, "keydown", (D) => {
    q.value && (D.defaultPrevented || D.key === C.Escape && (D.preventDefault(), D.stopPropagation(), S.close()));
  });
  let ye = b(() => !(E.value || c.value !== 0 || p));
  return wl(m, ye, (D) => {
    var K;
    return { containers: [...(K = D.containers) != null ? K : [], T] };
  }), W((D) => {
    if (c.value !== 0)
      return;
    let K = w(d);
    if (!K)
      return;
    let ne = new ResizeObserver((le) => {
      for (let Le of le) {
        let ie = Le.target.getBoundingClientRect();
        ie.x === 0 && ie.y === 0 && ie.width === 0 && ie.height === 0 && S.close();
      }
    });
    ne.observe(K), D(() => ne.disconnect());
  }), () => {
    let { id: D, open: K, initialFocus: ne, ...le } = e, Le = { ...l, ref: d, id: D, role: "dialog", "aria-modal": c.value === 0 ? !0 : void 0, "aria-labelledby": x.value, "aria-describedby": R.value }, ie = { open: c.value === 0 };
    return H(ze, { force: !0 }, () => [H(zt, () => H(sl, { target: d.value }, () => H(ze, { force: !1 }, () => H(Pe, { initialFocus: ne, containers: T, features: f.value ? $(B.value, { parent: Pe.features.RestoreFocus, leaf: Pe.features.All & ~Pe.features.FocusLock }) : Pe.features.None }, () => H(g, {}, () => j({ ourProps: Le, theirProps: { ...le, ...l }, slot: ie, attrs: l, slots: o, visible: c.value === 0, features: ue.RenderStrategy | ue.Static, name: "Dialog" })))))), H(U)]);
  };
} });
P({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Y()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = De("DialogOverlay");
  function n(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return j({ ourProps: { id: a, "aria-hidden": !0, onClick: n }, theirProps: r, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
P({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Y()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = De("DialogBackdrop"), a = y(null);
  return o({ el: a, $el: a }), V(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...u } = e, i = { id: r, ref: a, "aria-hidden": !0 };
    return H(ze, { force: !0 }, () => H(zt, () => j({ ourProps: i, theirProps: { ...t, ...u }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
P({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Y()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = De("DialogPanel");
  o({ el: n.panelRef, $el: n.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...u } = e, i = { id: r, ref: n.panelRef, onClick: a };
    return j({ ourProps: i, theirProps: u, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} });
P({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Y()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = De("DialogTitle");
  return V(() => {
    o.setTitleId(e.id), Z(() => o.setTitleId(null));
  }), () => {
    let { id: n, ...a } = e;
    return j({ ourProps: { id: n }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
  };
} });
let Ot = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function St(e) {
  var t, l;
  let o = (t = e.innerText) != null ? t : "", n = e.cloneNode(!0);
  if (!(n instanceof HTMLElement))
    return o;
  let a = !1;
  for (let u of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    u.remove(), a = !0;
  let r = a ? (l = n.innerText) != null ? l : "" : o;
  return Ot.test(r) && (r = r.replace(Ot, "")), r;
}
function Sl(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let l = e.getAttribute("aria-labelledby");
  if (l) {
    let o = l.split(" ").map((n) => {
      let a = document.getElementById(n);
      if (a) {
        let r = a.getAttribute("aria-label");
        return typeof r == "string" ? r.trim() : St(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (o.length > 0)
      return o.join(", ");
  }
  return St(e).trim();
}
function El(e) {
  let t = y(""), l = y("");
  return () => {
    let o = w(e);
    if (!o)
      return "";
    let n = o.innerText;
    if (t.value === n)
      return l.value;
    let a = Sl(o).trim().toLowerCase();
    return t.value = n, l.value = a, a;
  };
}
var Pl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Pl || {}), Tl = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Tl || {});
function Il(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let en = Symbol("MenuContext");
function Ve(e) {
  let t = X(en, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Ve), l;
  }
  return t;
}
P({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let o = y(1), n = y(null), a = y(null), r = y([]), u = y(""), i = y(null), s = y(1);
  function d(c = (f) => f) {
    let f = i.value !== null ? r.value[i.value] : null, v = it(c(r.value.slice()), (h) => w(h.dataRef.domRef)), p = f ? v.indexOf(f) : null;
    return p === -1 && (p = null), { items: v, activeItemIndex: p };
  }
  let m = { menuState: o, buttonRef: n, itemsRef: a, items: r, searchQuery: u, activeItemIndex: i, activationTrigger: s, closeMenu: () => {
    o.value = 1, i.value = null;
  }, openMenu: () => o.value = 0, goToItem(c, f, v) {
    let p = d(), h = kt(c === F.Specific ? { focus: F.Specific, id: f } : { focus: c }, { resolveItems: () => p.items, resolveActiveIndex: () => p.activeItemIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
    u.value = "", i.value = h, s.value = v != null ? v : 1, r.value = p.items;
  }, search(c) {
    let f = u.value !== "" ? 0 : 1;
    u.value += c.toLowerCase();
    let v = (i.value !== null ? r.value.slice(i.value + f).concat(r.value.slice(0, i.value + f)) : r.value).find((h) => h.dataRef.textValue.startsWith(u.value) && !h.dataRef.disabled), p = v ? r.value.indexOf(v) : -1;
    p === -1 || p === i.value || (i.value = p, s.value = 1);
  }, clearSearch() {
    u.value = "";
  }, registerItem(c, f) {
    let v = d((p) => [...p, { id: c, dataRef: f }]);
    r.value = v.items, i.value = v.activeItemIndex, s.value = 1;
  }, unregisterItem(c) {
    let f = d((v) => {
      let p = v.findIndex((h) => h.id === c);
      return p !== -1 && v.splice(p, 1), v;
    });
    r.value = f.items, i.value = f.activeItemIndex, s.value = 1;
  } };
  return st([n, a], (c, f) => {
    var v;
    m.closeMenu(), ut(f, rt.Loose) || (c.preventDefault(), (v = w(n)) == null || v.focus());
  }, b(() => o.value === 0)), te(en, m), at(b(() => $(o.value, { [0]: N.Open, [1]: N.Closed }))), () => {
    let c = { open: o.value === 0, close: m.closeMenu };
    return j({ ourProps: {}, theirProps: e, slot: c, slots: t, attrs: l, name: "Menu" });
  };
} });
P({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${Y()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Ve("MenuButton");
  o({ el: n.buttonRef, $el: n.buttonRef });
  function a(s) {
    switch (s.key) {
      case C.Space:
      case C.Enter:
      case C.ArrowDown:
        s.preventDefault(), s.stopPropagation(), n.openMenu(), Q(() => {
          var d;
          (d = w(n.itemsRef)) == null || d.focus({ preventScroll: !0 }), n.goToItem(F.First);
        });
        break;
      case C.ArrowUp:
        s.preventDefault(), s.stopPropagation(), n.openMenu(), Q(() => {
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
    e.disabled || (n.menuState.value === 0 ? (n.closeMenu(), Q(() => {
      var d;
      return (d = w(n.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })) : (s.preventDefault(), n.openMenu(), Il(() => {
      var d;
      return (d = w(n.itemsRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })));
  }
  let i = Dt(b(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var s;
    let d = { open: n.menuState.value === 0 }, { id: m, ...c } = e, f = { ref: n.buttonRef, id: m, type: i.value, "aria-haspopup": "menu", "aria-controls": (s = w(n.itemsRef)) == null ? void 0 : s.id, "aria-expanded": n.menuState.value === 0, onKeydown: a, onKeyup: r, onClick: u };
    return j({ ourProps: f, theirProps: c, slot: d, attrs: t, slots: l, name: "MenuButton" });
  };
} });
P({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-menu-items-${Y()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Ve("MenuItems"), a = y(null);
  o({ el: n.itemsRef, $el: n.itemsRef }), Lt({ container: b(() => w(n.itemsRef)), enabled: b(() => n.menuState.value === 0), accept(d) {
    return d.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } });
  function r(d) {
    var m;
    switch (a.value && clearTimeout(a.value), d.key) {
      case C.Space:
        if (n.searchQuery.value !== "")
          return d.preventDefault(), d.stopPropagation(), n.search(d.key);
      case C.Enter:
        if (d.preventDefault(), d.stopPropagation(), n.activeItemIndex.value !== null) {
          let c = n.items.value[n.activeItemIndex.value];
          (m = w(c.dataRef.domRef)) == null || m.click();
        }
        n.closeMenu(), jt(w(n.buttonRef));
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
        d.preventDefault(), d.stopPropagation(), n.closeMenu(), Q(() => {
          var c;
          return (c = w(n.buttonRef)) == null ? void 0 : c.focus({ preventScroll: !0 });
        });
        break;
      case C.Tab:
        d.preventDefault(), d.stopPropagation(), n.closeMenu(), Q(() => Gn(w(n.buttonRef), d.shiftKey ? re.Previous : re.Next));
        break;
      default:
        d.key.length === 1 && (n.search(d.key), a.value = setTimeout(() => n.clearSearch(), 350));
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
  let i = ke(), s = b(() => i !== null ? (i.value & N.Open) === N.Open : n.menuState.value === 0);
  return () => {
    var d, m;
    let c = { open: n.menuState.value === 0 }, { id: f, ...v } = e, p = { "aria-activedescendant": n.activeItemIndex.value === null || (d = n.items.value[n.activeItemIndex.value]) == null ? void 0 : d.id, "aria-labelledby": (m = w(n.buttonRef)) == null ? void 0 : m.id, id: f, onKeydown: r, onKeyup: u, role: "menu", tabIndex: 0, ref: n.itemsRef };
    return j({ ourProps: p, theirProps: v, slot: c, attrs: t, slots: l, features: ue.RenderStrategy | ue.Static, visible: s.value, name: "MenuItems" });
  };
} });
P({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-menu-item-${Y()}` } }, setup(e, { slots: t, attrs: l, expose: o }) {
  let n = Ve("MenuItem"), a = y(null);
  o({ el: a, $el: a });
  let r = b(() => n.activeItemIndex.value !== null ? n.items.value[n.activeItemIndex.value].id === e.id : !1), u = El(a), i = b(() => ({ disabled: e.disabled, get textValue() {
    return u();
  }, domRef: a }));
  V(() => n.registerItem(e.id, i)), Z(() => n.unregisterItem(e.id)), W(() => {
    n.menuState.value === 0 && r.value && n.activationTrigger.value !== 0 && Q(() => {
      var p, h;
      return (h = (p = w(a)) == null ? void 0 : p.scrollIntoView) == null ? void 0 : h.call(p, { block: "nearest" });
    });
  });
  function s(p) {
    if (e.disabled)
      return p.preventDefault();
    n.closeMenu(), jt(w(n.buttonRef));
  }
  function d() {
    if (e.disabled)
      return n.goToItem(F.Nothing);
    n.goToItem(F.Specific, e.id);
  }
  let m = Ht();
  function c(p) {
    m.update(p);
  }
  function f(p) {
    m.wasMoved(p) && (e.disabled || r.value || n.goToItem(F.Specific, e.id, 0));
  }
  function v(p) {
    m.wasMoved(p) && (e.disabled || r.value && n.goToItem(F.Nothing));
  }
  return () => {
    let { disabled: p } = e, h = { active: r.value, disabled: p, close: n.closeMenu }, { id: g, ...T } = e;
    return j({ ourProps: { id: g, ref: a, role: "menuitem", tabIndex: p === !0 ? void 0 : -1, "aria-disabled": p === !0 ? !0 : void 0, disabled: void 0, onClick: s, onFocus: d, onPointerenter: c, onMouseenter: c, onPointermove: f, onMousemove: f, onPointerleave: v, onMouseleave: v }, theirProps: { ...l, ...T }, slot: h, attrs: l, slots: t, name: "MenuItem" });
  };
} });
function Rl(e) {
  let t = { called: !1 };
  return (...l) => {
    if (!t.called)
      return t.called = !0, e(...l);
  };
}
function We(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function je(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var et = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(et || {});
function Cl(e, t) {
  let l = Se();
  if (!e)
    return l.dispose;
  let { transitionDuration: o, transitionDelay: n } = getComputedStyle(e), [a, r] = [o, n].map((u) => {
    let [i = 0] = u.split(",").filter(Boolean).map((s) => s.includes("ms") ? parseFloat(s) : parseFloat(s) * 1e3).sort((s, d) => d - s);
    return i;
  });
  return a !== 0 ? l.setTimeout(() => t("finished"), a + r) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function Et(e, t, l, o, n, a) {
  let r = Se(), u = a !== void 0 ? Rl(a) : () => {
  };
  return je(e, ...n), We(e, ...t, ...l), r.nextFrame(() => {
    je(e, ...l), We(e, ...o), r.add(Cl(e, (i) => (je(e, ...o, ...t), We(e, ...n), u(i))));
  }), r.add(() => je(e, ...t, ...l, ...o, ...n)), r.add(() => u("cancelled")), r.dispose;
}
function be(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let ct = Symbol("TransitionContext");
var Fl = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Fl || {});
function kl() {
  return X(ct, null) !== null;
}
function Al() {
  let e = X(ct, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Dl() {
  let e = X(ft, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let ft = Symbol("NestingContext");
function He(e) {
  return "children" in e ? He(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function tn(e) {
  let t = y([]), l = y(!1);
  V(() => l.value = !0), Z(() => l.value = !1);
  function o(a, r = fe.Hidden) {
    let u = t.value.findIndex(({ id: i }) => i === a);
    u !== -1 && ($(r, { [fe.Unmount]() {
      t.value.splice(u, 1);
    }, [fe.Hidden]() {
      t.value[u].state = "hidden";
    } }), !He(t) && l.value && (e == null || e()));
  }
  function n(a) {
    let r = t.value.find(({ id: u }) => u === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => o(a, fe.Unmount);
  }
  return { children: t, register: n, unregister: o };
}
let nn = ue.RenderStrategy, Ll = P({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = y(0);
  function r() {
    a.value |= N.Opening, t("beforeEnter");
  }
  function u() {
    a.value &= ~N.Opening, t("afterEnter");
  }
  function i() {
    a.value |= N.Closing, t("beforeLeave");
  }
  function s() {
    a.value &= ~N.Closing, t("afterLeave");
  }
  if (!kl() && _n())
    return () => H(Bl, { ...e, onBeforeEnter: r, onAfterEnter: u, onBeforeLeave: i, onAfterLeave: s }, o);
  let d = y(null), m = b(() => e.unmount ? fe.Unmount : fe.Hidden);
  n({ el: d, $el: d });
  let { show: c, appear: f } = Al(), { register: v, unregister: p } = Dl(), h = y(c.value ? "visible" : "hidden"), g = { value: !0 }, T = Y(), k = { value: !1 }, U = tn(() => {
    !k.value && h.value !== "hidden" && (h.value = "hidden", p(T), s());
  });
  V(() => {
    let S = v(T);
    Z(S);
  }), W(() => {
    if (m.value === fe.Hidden && T) {
      if (c.value && h.value !== "visible") {
        h.value = "visible";
        return;
      }
      $(h.value, { hidden: () => p(T), visible: () => v(T) });
    }
  });
  let B = be(e.enter), E = be(e.enterFrom), z = be(e.enterTo), J = be(e.entered), O = be(e.leave), I = be(e.leaveFrom), R = be(e.leaveTo);
  V(() => {
    W(() => {
      if (h.value === "visible") {
        let S = w(d);
        if (S instanceof Comment && S.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function x(S) {
    let M = g.value && !f.value, q = w(d);
    !q || !(q instanceof HTMLElement) || M || (k.value = !0, c.value && r(), c.value || i(), S(c.value ? Et(q, B, E, z, J, (ye) => {
      k.value = !1, ye === et.Finished && u();
    }) : Et(q, O, I, R, J, (ye) => {
      k.value = !1, ye === et.Finished && (He(U) || (h.value = "hidden", p(T), s()));
    })));
  }
  return V(() => {
    de([c], (S, M, q) => {
      x(q), g.value = !1;
    }, { immediate: !0 });
  }), te(ft, U), at(b(() => $(h.value, { visible: N.Open, hidden: N.Closed }) | a.value)), () => {
    let { appear: S, show: M, enter: q, enterFrom: ye, enterTo: D, entered: K, leave: ne, leaveFrom: le, leaveTo: Le, ...ie } = e, cn = { ref: d }, fn = { ...ie, ...f.value && c.value && Ae.isServer ? { class: lt([l.class, ie.class, ...B, ...E]) } : {} };
    return j({ theirProps: fn, ourProps: cn, slot: {}, slots: o, attrs: l, features: nn, visible: h.value === "visible", name: "TransitionChild" });
  };
} }), Ml = Ll, Bl = P({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o }) {
  let n = ke(), a = b(() => e.show === null && n !== null ? (n.value & N.Open) === N.Open : e.show);
  W(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = y(a.value ? "visible" : "hidden"), u = tn(() => {
    r.value = "hidden";
  }), i = y(!0), s = { show: a, appear: b(() => e.appear || !i.value) };
  return V(() => {
    W(() => {
      i.value = !1, a.value ? r.value = "visible" : He(u) || (r.value = "hidden");
    });
  }), te(ft, u), te(ct, s), () => {
    let d = $e(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), m = { unmount: e.unmount };
    return j({ ourProps: { ...m, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [H(Ml, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...m, ...d }, o.default)] }, attrs: {}, features: nn, visible: r.value === "visible", name: "Transition" });
  };
} });
var Pt;
const jl = typeof window < "u";
jl && ((Pt = window == null ? void 0 : window.navigator) == null ? void 0 : Pt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function _l(e) {
  return e;
}
const tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nt = "__vueuse_ssr_handlers__";
tt[nt] = tt[nt] || {};
tt[nt];
var Tt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Tt || (Tt = {}));
var Nl = Object.defineProperty, It = Object.getOwnPropertySymbols, $l = Object.prototype.hasOwnProperty, Vl = Object.prototype.propertyIsEnumerable, Rt = (e, t, l) => t in e ? Nl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, Hl = (e, t) => {
  for (var l in t || (t = {}))
    $l.call(t, l) && Rt(e, l, t[l]);
  if (It)
    for (var l of It(t))
      Vl.call(t, l) && Rt(e, l, t[l]);
  return e;
};
const Ul = {
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
Hl({
  linear: _l
}, Ul);
function Kl(e, t) {
  return b({
    get: () => e.modelValue,
    set: (l) => t("update:modelValue", l)
  });
}
const Wl = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, Gl = { name: "Error" }, ln = /* @__PURE__ */ P({
  ...Gl,
  props: {
    error: {}
  },
  setup(e) {
    return (t, l) => t.error ? (A(), G("div", Wl, [
      se(t.$slots, "default", {}, () => [
        ot(Oe(t.error), 1)
      ])
    ])) : we("", !0);
  }
}), ql = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, Ql = {
  name: "Base",
  inheritAttrs: !1
}, Yl = /* @__PURE__ */ P({
  ...Ql,
  props: {
    description: {},
    error: {},
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, l) => (A(), G("div", null, [
      ee("div", {
        class: lt(["mt-1 rounded-md", { "shadow-sm": t.shadow }])
      }, [
        se(t.$slots, "default")
      ], 2),
      t.description ? (A(), G("p", ql, Oe(t.description), 1)) : we("", !0),
      t.error ? (A(), ae(ln, {
        key: 1,
        error: t.error
      }, null, 8, ["error"])) : we("", !0)
    ]));
  }
}), zl = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, n] of t)
    l[o] = n;
  return l;
}, Jl = { name: "Actions" }, Xl = { class: "mt-8 border-t border-gray-200 pt-5" }, Zl = { class: "flex justify-end" }, eo = { class: "inline-flex rounded-md shadow-sm" };
function to(e, t, l, o, n, a) {
  return A(), G("div", Xl, [
    ee("div", Zl, [
      ee("span", eo, [
        se(e.$slots, "default")
      ])
    ])
  ]);
}
const no = /* @__PURE__ */ zl(Jl, [["render", to]]), lo = { class: "relative flex items-start" }, oo = { class: "flex h-5 items-center" }, ao = ["id", "value", "disabled", "readonly"], ro = { class: "ml-3" }, uo = ["for"], io = { name: "Checkbox" }, so = /* @__PURE__ */ P({
  ...io,
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
    const l = Kl(e, t);
    return (o, n) => (A(), ae(Yl, pe(o.$props, { shadow: !1 }), {
      default: xe(() => [
        ee("div", lo, [
          ee("div", oo, [
            Qe(ee("input", pe({
              id: o.id,
              "onUpdate:modelValue": n[0] || (n[0] = (a) => bn(l) ? l.value = a : null),
              value: o.value,
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 accent-primary-600 focus:ring-primary-500",
              disabled: o.disabled,
              readonly: o.readonly
            }, o.$attrs), null, 16, ao), [
              [gn, oe(l)]
            ]),
            ee("div", ro, [
              ee("label", {
                for: o.id,
                class: "block text-sm font-medium leading-5 text-gray-700"
              }, Oe(o.label), 9, uo)
            ])
          ])
        ])
      ]),
      _: 1
    }, 16));
  }
}), co = ["for"], fo = { name: "Label" }, po = /* @__PURE__ */ P({
  ...fo,
  props: {
    for: {}
  },
  setup(e) {
    const t = e;
    return (l, o) => (A(), G("label", {
      for: t.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      se(l.$slots, "default")
    ], 8, co));
  }
});
var on = {}, an = {};
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
})(an);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ l(an);
  function l(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  const o = t.default;
})(on);
let Ge = on;
var vo = (Ge.__esModule ? Ge : { default: Ge }).default, rn = {}, un = {}, pt = { exports: {} }, L = String, sn = function() {
  return { isColorSupported: !1, reset: L, bold: L, dim: L, italic: L, underline: L, inverse: L, hidden: L, strikethrough: L, black: L, red: L, green: L, yellow: L, blue: L, magenta: L, cyan: L, white: L, gray: L, bgBlack: L, bgRed: L, bgGreen: L, bgYellow: L, bgBlue: L, bgMagenta: L, bgCyan: L, bgWhite: L };
};
pt.exports = sn();
pt.exports.createColors = sn;
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
  const l = /* @__PURE__ */ o(pt.exports);
  function o(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  let n = /* @__PURE__ */ new Set();
  function a(i, s, d) {
    typeof process < "u" && process.env.JEST_WORKER_ID || d && n.has(d) || (d && n.add(d), console.warn(""), s.forEach((m) => console.warn(i, "-", m)));
  }
  function r(i) {
    return l.default.dim(i);
  }
  const u = {
    info(i, s) {
      a(l.default.bold(l.default.cyan("info")), ...Array.isArray(i) ? [
        i
      ] : [
        s,
        i
      ]);
    },
    warn(i, s) {
      a(l.default.bold(l.default.yellow("warn")), ...Array.isArray(i) ? [
        i
      ] : [
        s,
        i
      ]);
    },
    risk(i, s) {
      a(l.default.bold(l.default.magenta("risk")), ...Array.isArray(i) ? [
        i
      ] : [
        s,
        i
      ]);
    }
  };
})(un);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ l(un);
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
})(rn);
let qe = rn;
var mo = (qe.__esModule ? qe : { default: qe }).default;
vo.withOptions(
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
              ...mo.indigo,
              ...(t = e == null ? void 0 : e.colors) == null ? void 0 : t.primary
            }
          }
        }
      }
    };
  }
);
const bo = { key: 0 }, vt = /* @__PURE__ */ P({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    var m;
    const t = e, l = b(() => {
      var f;
      const c = (f = t.element.definition) == null ? void 0 : f.fieldset;
      return c ? Object.entries(c).reduce((v, [p, h]) => (h != null && h.model ? v[h.model] = t.form[h.model] : v[p] = t.form[p], v), {}) : {
        modelValue: t.form[t.element.name]
      };
    }), o = b(() => {
      var v;
      let c = Object.entries({
        ...t.element.definition,
        ...t.element.definition.props,
        ...l.value,
        schema: t.element.definition.schema,
        form: t.form,
        id: t.element.name,
        error: (v = a.value[0]) != null ? v : null
      }), f = t.element.definition.component.props;
      return Object.fromEntries(c.filter(([p]) => f.hasOwnProperty(p)));
    }), n = b(() => {
      var f;
      const c = (f = t.element.definition) == null ? void 0 : f.fieldset;
      return c ? Object.entries(c).reduce((v, [p, h]) => (h != null && h.model ? v[`update:${h.model}`] = (g) => t.form[h.model] = g : v[`update:${p}`] = (g) => t.form[p] = g, v), {}) : { "update:modelValue": (v) => t.form[t.element.name] = v };
    }), a = b(() => {
      var f;
      const c = (f = t.element.definition) == null ? void 0 : f.fieldset;
      return c ? Object.keys(c).map((v) => t.form.errors[v]).filter((v) => v) : [t.form.errors[t.element.name]];
    }), r = b(() => {
      var f;
      return ((f = t.element.definition.label) != null ? f : t.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }), u = !!t.element.definition.schema, i = (m = t.element.definition.showLabel) != null ? m : !u, s = y(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible : () => !0
    ), d = y(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible(t.form) : () => !0
    );
    return de(t.form, (c) => {
      typeof s.value == "function" && (d.value = s.value(c));
    }), (c, f) => d.value ? (A(), G("div", bo, [
      oe(i) ? (A(), ae(oe(po), {
        key: 0,
        for: c.element.name
      }, {
        default: xe(() => [
          ot(Oe(r.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : we("", !0),
      (A(), ae(yn(c.element.definition.component), pe({
        key: c.element.name
      }, o.value, wn(n.value)), null, 16)),
      o.value.hasOwnProperty("error") ? we("", !0) : (A(!0), G(me, { key: 1 }, Fe(a.value, (v, p) => (A(), ae(oe(ln), {
        key: p,
        error: v
      }, null, 8, ["error"]))), 128))
    ])) : we("", !0);
  }
}), go = { class: "mx-auto mt-6 max-w-md space-y-6" }, Eo = /* @__PURE__ */ P({
  __name: "FormBuilder",
  props: {
    schema: {},
    submit: { default: "Save" }
  },
  setup(e) {
    return (t, l) => (A(), G("div", go, [
      (A(!0), G(me, null, Fe(t.schema.elements, (o, n) => (A(), ae(vt, {
        key: n,
        element: o,
        form: t.schema.form
      }, null, 8, ["element", "form"]))), 128)),
      _e(oe(no), null, {
        default: xe(() => [
          se(t.$slots, "actions", {
            form: t.schema.form
          }, () => [
            _e(oe(An), {
              as: "button",
              type: "submit",
              loading: t.schema.form.processing
            }, {
              default: xe(() => [
                ot(Oe(t.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 3
      })
    ]));
  }
}), ho = /* @__PURE__ */ P({
  __name: "CheckboxGroup",
  props: {
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, o = b({
      get: () => l.modelValue,
      set: (n) => {
        t("update:modelValue", n);
      }
    });
    return (n, a) => (A(!0), G(me, null, Fe(n.items, (r, u) => {
      var i, s, d;
      return A(), ae(oe(so), {
        id: (i = r.label) != null ? i : r,
        key: u,
        modelValue: o.value,
        "onUpdate:modelValue": a[0] || (a[0] = (m) => o.value = m),
        value: (s = r.value) != null ? s : r,
        label: (d = r.label) != null ? d : r
      }, null, 8, ["id", "modelValue", "value", "label"]);
    }), 128));
  }
}), dn = (e) => Object.keys(e).reduce((t, l) => {
  var o;
  return e[l].schema ? { ...t, ...dn(e[l].schema) } : (t[l] = (o = e[l].value) != null ? o : null, t);
}, {}), mt = (e) => Object.entries(e).map(([t, l]) => {
  const o = l.hasOwnProperty("setup") ? { component: l } : l;
  return {
    name: t,
    definition: o
  };
});
function Po(e) {
  const t = On(
    Object.keys(e).reduce((l, o) => {
      var a, r, u;
      if (e[o].schema)
        return { ...l, ...dn(e[o].schema) };
      if (e[o].component === ho)
        return l[o] = (a = e[o].checked) != null ? a : [], l;
      const n = (r = e[o]) == null ? void 0 : r.fieldset;
      return n ? (Object.entries(n).forEach(([i, s]) => {
        var d;
        s != null && s.model ? l[s.model] = (d = s.value) != null ? d : null : l[i] = s;
      }), l) : (l[o] = (u = e[o].value) != null ? u : null, l);
    }, {})
  );
  return {
    elements: mt(e),
    form: t
  };
}
const yo = { class: "grid grid-flow-col gap-x-4 gap-y-6" }, To = /* @__PURE__ */ P({
  __name: "Grid",
  props: {
    schema: {},
    form: {}
  },
  setup(e) {
    const l = mt(e.schema);
    return (o, n) => (A(), G("div", yo, [
      (A(!0), G(me, null, Fe(oe(l), (a, r) => (A(), ae(vt, pe({
        key: r,
        element: a,
        form: o.form
      }, o.$attrs), null, 16, ["element", "form"]))), 128))
    ]));
  }
}), wo = { class: "mt-10" }, xo = { class: "mt-4 space-y-6" }, Io = /* @__PURE__ */ P({
  __name: "Section",
  props: {
    schema: {},
    form: {},
    heading: {}
  },
  setup(e) {
    const l = mt(e.schema);
    return (o, n) => (A(), G("div", wo, [
      ee("label", null, Oe(o.heading), 1),
      ee("div", xo, [
        (A(!0), G(me, null, Fe(oe(l), (a, r) => (A(), ae(vt, {
          key: r,
          element: a,
          form: o.form
        }, null, 8, ["element", "form"]))), 128))
      ])
    ]));
  }
});
export {
  ho as CheckboxGroup,
  Eo as FormBuilder,
  To as Grid,
  Io as Section,
  Po as useSchema
};
