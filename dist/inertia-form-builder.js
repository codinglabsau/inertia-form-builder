import { defineComponent as P, ref as h, computed as b, toRaw as j, provide as te, onMounted as V, watch as de, h as H, Fragment as me, watchEffect as W, onUnmounted as Z, nextTick as z, inject as J, Teleport as pn, reactive as vn, unref as re, normalizeClass as lt, openBlock as A, createBlock as oe, mergeProps as pe, withCtx as Se, renderSlot as se, cloneVNode as mn, createElementBlock as q, createTextVNode as ot, toDisplayString as xe, createCommentVNode as we, createElementVNode as ee, withDirectives as ze, isRef as bn, vModelCheckbox as gn, createVNode as je, vShow as bt, shallowRef as hn, resolveDynamicComponent as yn, toHandlers as wn, renderList as Fe } from "vue";
import { Link as Sn, useForm as xn } from "@inertiajs/vue3";
const On = /* @__PURE__ */ ee("circle", {
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
  On,
  En
], Tn = { name: "Spinner" }, gt = /* @__PURE__ */ P({
  ...Tn,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (t, l) => (A(), q("svg", {
      class: lt(["h-5 w-5 animate-spin", t.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, Pn, 2));
  }
}), Rn = ["disabled", "type"], In = ["href"], Cn = { name: "Button" }, Fn = /* @__PURE__ */ P({
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
    return (n, o) => l.value === "button" ? (A(), q("button", pe({
      key: 0,
      class: a,
      disabled: n.loading,
      type: n.type
    }, n.$attrs), [
      se(n.$slots, "default"),
      ze(je(gt, { class: "ml-3" }, null, 512), [
        [bt, n.loading]
      ])
    ], 16, Rn)) : n.external ? (A(), q("a", pe({
      key: 2,
      href: n.href,
      class: a
    }, n.$attrs), [
      se(n.$slots, "default")
    ], 16, In)) : (A(), oe(re(Sn), pe({
      key: 1,
      as: n.as,
      href: n.href,
      disabled: n.loading,
      class: a
    }, n.$attrs), {
      default: Se(() => [
        se(n.$slots, "default"),
        ze(je(gt, {
          class: "ml-3",
          "text-class": n.spinnerClass
        }, null, 8, ["text-class"]), [
          [bt, n.loading]
        ])
      ]),
      _: 3
    }, 16, ["as", "href", "disabled"]));
  }
}), Dn = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [a, n] of t)
    l[a] = n;
  return l;
}, An = { name: "PrimaryButton" }, Ln = /* @__PURE__ */ P({
  ...An,
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
    return (l, a) => (A(), oe(Fn, pe({
      as: l.as,
      external: l.external,
      href: l.href,
      loading: l.loading,
      type: l.type,
      class: t
    }, l.$attrs), {
      default: Se(() => [
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
var ue = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ue || {}), fe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(fe || {});
function _({ visible: e = !0, features: t = 0, ourProps: l, theirProps: a, ...n }) {
  var o;
  let r = Ft(a, l), u = Object.assign(n, { props: r });
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
    let f = !1, c = [];
    for (let [p, m] of Object.entries(a))
      typeof m == "boolean" && (f = !0), m === !0 && c.push(p);
    f && (d["data-headlessui-state"] = c.join(" "));
  }
  if (u === "template") {
    if (s = Ct(s != null ? s : []), Object.keys(i).length > 0 || Object.keys(t).length > 0) {
      let [f, ...c] = s != null ? s : [];
      if (!Mn(f) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(i).concat(Object.keys(t)).map((v) => v.trim()).filter((v, w, g) => g.indexOf(v) === w).sort((v, w) => v.localeCompare(w)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let p = Ft((r = f.props) != null ? r : {}, i), m = mn(f, p);
      for (let v in p)
        v.startsWith("on") && (m.props || (m.props = {}), m.props[v] = p[v]);
      return m;
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
function kn(e) {
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
function Mn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Bn = 0;
function _n() {
  return ++Bn;
}
function Q() {
  return _n();
}
var C = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(C || {});
function jn(e) {
  throw new Error("Unexpected object: " + e);
}
var F = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(F || {});
function Dt(e, t) {
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
        jn(e);
    }
  })();
  return o === -1 ? a : o;
}
function y(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let At = Symbol("Context");
var N = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(N || {});
function Nn() {
  return De() !== null;
}
function De() {
  return J(At, null);
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
function Lt(e, t) {
  let l = h(ht(e.value.type, e.value.as));
  return V(() => {
    l.value = ht(e.value.type, e.value.as);
  }), W(() => {
    var a;
    l.value || y(t) && y(t) instanceof HTMLButtonElement && !((a = y(t)) != null && a.hasAttribute("type")) && (l.value = "button");
  }), l;
}
var $n = Object.defineProperty, Vn = (e, t, l) => t in e ? $n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, yt = (e, t, l) => (Vn(e, typeof t != "symbol" ? t + "" : t, l), l);
class Hn {
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
let Ae = new Hn();
function ce(e) {
  if (Ae.isServer)
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
function kt({ container: e, accept: t, walk: l, enabled: a }) {
  W(() => {
    let n = e.value;
    if (!n || a !== void 0 && !a.value)
      return;
    let o = ce(e);
    if (!o)
      return;
    let r = Object.assign((i) => t(i), { acceptNode: t }), u = o.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; u.nextNode(); )
      l(u.currentNode);
  });
}
let Qe = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ae = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ae || {}), Mt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Mt || {}), Un = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Un || {});
function Bt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Qe)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var rt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(rt || {});
function ut(e, t = 0) {
  var l;
  return e === ((l = ce(e)) == null ? void 0 : l.body) ? !1 : $(t, { [0]() {
    return e.matches(Qe);
  }, [1]() {
    let a = e;
    for (; a !== null; ) {
      if (a.matches(Qe))
        return !0;
      a = a.parentElement;
    }
    return !1;
  } });
}
function _t(e) {
  let t = ce(e);
  z(() => {
    t && !ut(t.activeElement, 0) && ve(e);
  });
}
var Gn = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Gn || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function ve(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Wn = ["textarea", "input"].join(",");
function qn(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Wn)) != null ? l : !1;
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
  return Ie(Bt(), t, { relativeTo: e });
}
function Ie(e, t, { sorted: l = !0, relativeTo: a = null, skipElements: n = [] } = {}) {
  var o;
  let r = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? o : document, u = Array.isArray(e) ? l ? it(e) : e : Bt(e);
  n.length > 0 && u.length > 1 && (u = u.filter((m) => !n.includes(m))), a = a != null ? a : r.activeElement;
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
  })(), d = t & 32 ? { preventScroll: !0 } : {}, f = 0, c = u.length, p;
  do {
    if (f >= c || f + c <= 0)
      return 0;
    let m = s + f;
    if (t & 16)
      m = (m + c) % c;
    else {
      if (m < 0)
        return 3;
      if (m >= c)
        return 1;
    }
    p = u[m], p == null || p.focus(d), f += i;
  } while (p !== r.activeElement);
  return t & 6 && qn(p) && p.select(), 2;
}
function Me(e, t, l) {
  Ae.isServer || W((a) => {
    document.addEventListener(e, t, l), a(() => document.removeEventListener(e, t, l));
  });
}
function jt(e, t, l) {
  Ae.isServer || W((a) => {
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
      let d = s instanceof HTMLElement ? s : y(s);
      if (d != null && d.contains(u) || o.composed && o.composedPath().includes(d))
        return;
    }
    return !ut(u, rt.Loose) && u.tabIndex !== -1 && o.preventDefault(), t(o, u);
  }
  let n = h(null);
  Me("pointerdown", (o) => {
    var r, u;
    l.value && (n.value = ((u = (r = o.composedPath) == null ? void 0 : r.call(o)) == null ? void 0 : u[0]) || o.target);
  }, !0), Me("mousedown", (o) => {
    var r, u;
    l.value && (n.value = ((u = (r = o.composedPath) == null ? void 0 : r.call(o)) == null ? void 0 : u[0]) || o.target);
  }, !0), Me("click", (o) => {
    n.value && (a(o, () => n.value), n.value = null);
  }, !0), Me("touchend", (o) => a(o, () => o.target instanceof HTMLElement ? o.target : null), !0), jt("blur", (o) => a(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ce = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ce || {});
let Ne = P({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: a, ...n } = e, o = { "aria-hidden": (a & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(a & 4) === 4 && (a & 2) !== 2 && { display: "none" } } };
    return _({ ourProps: o, theirProps: n, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function Nt(e = {}, t = null, l = []) {
  for (let [a, n] of Object.entries(e))
    Vt(l, $t(t, a), n);
  return l;
}
function $t(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Vt(e, t, l) {
  if (Array.isArray(l))
    for (let [a, n] of l.entries())
      Vt(e, $t(t, a.toString()), n);
  else
    l instanceof Date ? e.push([t, l.toISOString()]) : typeof l == "boolean" ? e.push([t, l ? "1" : "0"]) : typeof l == "string" ? e.push([t, l]) : typeof l == "number" ? e.push([t, `${l}`]) : l == null ? e.push([t, ""]) : Nt(l, t, e);
}
function zn(e, t, l) {
  let a = h(l == null ? void 0 : l.value), n = b(() => e.value !== void 0);
  return [b(() => n.value ? e.value : a.value), function(o) {
    return n.value || (a.value = o), t == null ? void 0 : t(o);
  }];
}
function wt(e) {
  return [e.screenX, e.screenY];
}
function Ht() {
  let e = h([-1, -1]);
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
function Xn(e, t) {
  return e === t;
}
var Jn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Jn || {}), Zn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Zn || {}), el = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(el || {});
let Gt = Symbol("ComboboxContext");
function Ee(e) {
  let t = J(Gt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Ee), l;
  }
  return t;
}
P({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Xn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: a }) {
  let n = h(1), o = h(null), r = h(null), u = h(null), i = h(null), s = h({ static: !1, hold: !1 }), d = h([]), f = h(null), c = h(1), p = h(!1);
  function m(x = (R) => R) {
    let R = f.value !== null ? d.value[f.value] : null, I = it(x(d.value.slice()), (O) => y(O.dataRef.domRef)), S = R ? I.indexOf(R) : null;
    return S === -1 && (S = null), { options: I, activeOptionIndex: S };
  }
  let v = b(() => e.multiple ? 1 : 0), w = b(() => e.nullable), [g, T] = zn(b(() => e.modelValue), (x) => a("update:modelValue", x), b(() => e.defaultValue)), D = b(() => g.value === void 0 ? $(v.value, { [1]: [], [0]: void 0 }) : g.value), U = null, B = null, E = { comboboxState: n, value: D, mode: v, compare(x, R) {
    if (typeof e.by == "string") {
      let I = e.by;
      return (x == null ? void 0 : x[I]) === (R == null ? void 0 : R[I]);
    }
    return e.by(x, R);
  }, defaultValue: b(() => e.defaultValue), nullable: w, inputRef: r, labelRef: o, buttonRef: u, optionsRef: i, disabled: b(() => e.disabled), options: d, change(x) {
    T(x);
  }, activeOptionIndex: b(() => {
    if (p.value && f.value === null && d.value.length > 0) {
      let x = d.value.findIndex((R) => !R.dataRef.disabled);
      x !== -1 && (f.value = x);
    }
    return f.value;
  }), activationTrigger: c, optionsPropsRef: s, closeCombobox() {
    p.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, f.value = null);
  }, openCombobox() {
    if (p.value = !0, e.disabled || n.value === 0)
      return;
    let x = d.value.findIndex((R) => {
      let I = j(R.dataRef.value);
      return $(v.value, { [0]: () => E.compare(j(E.value.value), j(I)), [1]: () => j(E.value.value).some((S) => E.compare(j(S), j(I))) });
    });
    x !== -1 && (f.value = x), n.value = 0;
  }, goToOption(x, R, I) {
    p.value = !1, U !== null && cancelAnimationFrame(U), U = requestAnimationFrame(() => {
      if (e.disabled || i.value && !s.value.static && n.value === 1)
        return;
      let S = m();
      if (S.activeOptionIndex === null) {
        let M = S.options.findIndex((K) => !K.dataRef.disabled);
        M !== -1 && (S.activeOptionIndex = M);
      }
      let O = Dt(x === F.Specific ? { focus: F.Specific, id: R } : { focus: x }, { resolveItems: () => S.options, resolveActiveIndex: () => S.activeOptionIndex, resolveId: (M) => M.id, resolveDisabled: (M) => M.dataRef.disabled });
      f.value = O, c.value = I != null ? I : 1, d.value = S.options;
    });
  }, selectOption(x) {
    let R = d.value.find((S) => S.id === x);
    if (!R)
      return;
    let { dataRef: I } = R;
    T($(v.value, { [0]: () => I.value, [1]: () => {
      let S = j(E.value.value).slice(), O = j(I.value), M = S.findIndex((K) => E.compare(O, j(K)));
      return M === -1 ? S.push(O) : S.splice(M, 1), S;
    } }));
  }, selectActiveOption() {
    if (E.activeOptionIndex.value === null)
      return;
    let { dataRef: x, id: R } = d.value[E.activeOptionIndex.value];
    T($(v.value, { [0]: () => x.value, [1]: () => {
      let I = j(E.value.value).slice(), S = j(x.value), O = I.findIndex((M) => E.compare(S, j(M)));
      return O === -1 ? I.push(S) : I.splice(O, 1), I;
    } })), E.goToOption(F.Specific, R);
  }, registerOption(x, R) {
    B && cancelAnimationFrame(B);
    let I = { id: x, dataRef: R }, S = m((O) => (O.push(I), O));
    if (f.value === null) {
      let O = R.value.value;
      $(v.value, { [0]: () => E.compare(j(E.value.value), j(O)), [1]: () => j(E.value.value).some((M) => E.compare(j(M), j(O))) }) && (S.activeOptionIndex = S.options.indexOf(I));
    }
    d.value = S.options, f.value = S.activeOptionIndex, c.value = 1, S.options.some((O) => !y(O.dataRef.domRef)) && (B = requestAnimationFrame(() => {
      let O = m();
      d.value = O.options, f.value = O.activeOptionIndex;
    }));
  }, unregisterOption(x) {
    var R;
    E.activeOptionIndex.value !== null && ((R = E.options.value[E.activeOptionIndex.value]) == null ? void 0 : R.id) === x && (p.value = !0);
    let I = m((S) => {
      let O = S.findIndex((M) => M.id === x);
      return O !== -1 && S.splice(O, 1), S;
    });
    d.value = I.options, f.value = I.activeOptionIndex, c.value = 1;
  } };
  st([r, u, i], () => E.closeCombobox(), b(() => n.value === 0)), te(Gt, E), at(b(() => $(n.value, { [0]: N.Open, [1]: N.Closed })));
  let Y = b(() => E.activeOptionIndex.value === null ? null : d.value[E.activeOptionIndex.value].dataRef.value), X = b(() => {
    var x;
    return (x = y(r)) == null ? void 0 : x.closest("form");
  });
  return V(() => {
    de([X], () => {
      if (!X.value || e.defaultValue === void 0)
        return;
      function x() {
        E.change(e.defaultValue);
      }
      return X.value.addEventListener("reset", x), () => {
        var R;
        (R = X.value) == null || R.removeEventListener("reset", x);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: x, disabled: R, form: I, ...S } = e, O = { open: n.value === 0, disabled: R, activeIndex: E.activeOptionIndex.value, activeOption: Y.value, value: D.value };
    return H(me, [...x != null && D.value != null ? Nt({ [x]: D.value }).map(([M, K]) => H(Ne, kn({ features: Ce.Hidden, key: M, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: I, name: M, value: K }))) : [], _({ theirProps: { ...l, ...$e(S, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: O, slots: t, attrs: l, name: "Combobox" })]);
  };
} });
P({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Q()}` } }, setup(e, { attrs: t, slots: l }) {
  let a = Ee("ComboboxLabel");
  function n() {
    var o;
    (o = y(a.inputRef)) == null || o.focus({ preventScroll: !0 });
  }
  return () => {
    let o = { open: a.comboboxState.value === 0, disabled: a.disabled.value }, { id: r, ...u } = e, i = { id: r, ref: a.labelRef, onClick: n };
    return _({ ourProps: i, theirProps: u, slot: o, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} });
P({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Q()}` } }, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = Ee("ComboboxButton");
  a({ el: n.buttonRef, $el: n.buttonRef });
  function o(i) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (i.preventDefault(), n.openCombobox()), z(() => {
      var s;
      return (s = y(n.inputRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    }));
  }
  function r(i) {
    switch (i.key) {
      case C.ArrowDown:
        i.preventDefault(), i.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), z(() => {
          var s;
          return (s = n.inputRef.value) == null ? void 0 : s.focus({ preventScroll: !0 });
        });
        return;
      case C.ArrowUp:
        i.preventDefault(), i.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), z(() => {
          n.value.value || n.goToOption(F.Last);
        })), z(() => {
          var s;
          return (s = n.inputRef.value) == null ? void 0 : s.focus({ preventScroll: !0 });
        });
        return;
      case C.Escape:
        if (n.comboboxState.value !== 0)
          return;
        i.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && i.stopPropagation(), n.closeCombobox(), z(() => {
          var s;
          return (s = n.inputRef.value) == null ? void 0 : s.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = Lt(b(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var i, s;
    let d = { open: n.comboboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: f, ...c } = e, p = { ref: n.buttonRef, id: f, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (i = y(n.optionsRef)) == null ? void 0 : i.id, "aria-expanded": n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(s = y(n.labelRef)) == null ? void 0 : s.id, f].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: o };
    return _({ ourProps: p, theirProps: c, slot: d, attrs: t, slots: l, name: "ComboboxButton" });
  };
} });
P({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Q()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: a, expose: n }) {
  let o = Ee("ComboboxInput"), r = b(() => ce(y(o.inputRef))), u = { value: !1 };
  n({ el: o.inputRef, $el: o.inputRef });
  function i() {
    o.change(null);
    let g = y(o.optionsRef);
    g && (g.scrollTop = 0), o.goToOption(F.Nothing);
  }
  let s = b(() => {
    var g;
    let T = o.value.value;
    return y(o.inputRef) ? typeof e.displayValue < "u" && T !== void 0 ? (g = e.displayValue(T)) != null ? g : "" : typeof T == "string" ? T : "" : "";
  });
  V(() => {
    de([s, o.comboboxState, r], ([g, T], [D, U]) => {
      if (u.value)
        return;
      let B = y(o.inputRef);
      B && ((U === 0 && T === 1 || g !== D) && (B.value = g), requestAnimationFrame(() => {
        var E;
        if (u.value || !B || ((E = r.value) == null ? void 0 : E.activeElement) !== B)
          return;
        let { selectionStart: Y, selectionEnd: X } = B;
        Math.abs((X != null ? X : 0) - (Y != null ? Y : 0)) === 0 && Y === 0 && B.setSelectionRange(B.value.length, B.value.length);
      }));
    }, { immediate: !0 }), de([o.comboboxState], ([g], [T]) => {
      if (g === 0 && T === 1) {
        if (u.value)
          return;
        let D = y(o.inputRef);
        if (!D)
          return;
        let U = D.value, { selectionStart: B, selectionEnd: E, selectionDirection: Y } = D;
        D.value = "", D.value = U, Y !== null ? D.setSelectionRange(B, E, Y) : D.setSelectionRange(B, E);
      }
    });
  });
  let d = h(!1);
  function f() {
    d.value = !0;
  }
  function c() {
    Oe().nextFrame(() => {
      d.value = !1;
    });
  }
  function p(g) {
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
          o.openCombobox(), z(() => {
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
  function m(g) {
    t("change", g), o.nullable.value && o.mode.value === 0 && g.target.value === "" && i(), o.openCombobox();
  }
  function v() {
    u.value = !1;
  }
  let w = b(() => {
    var g, T, D, U;
    return (U = (D = (T = e.defaultValue) != null ? T : o.defaultValue.value !== void 0 ? (g = e.displayValue) == null ? void 0 : g.call(e, o.defaultValue.value) : null) != null ? D : o.defaultValue.value) != null ? U : "";
  });
  return () => {
    var g, T, D, U, B, E;
    let Y = { open: o.comboboxState.value === 0 }, { id: X, displayValue: x, onChange: R, ...I } = e, S = { "aria-controls": (g = o.optionsRef.value) == null ? void 0 : g.id, "aria-expanded": o.comboboxState.value === 0, "aria-activedescendant": o.activeOptionIndex.value === null || (T = o.options.value[o.activeOptionIndex.value]) == null ? void 0 : T.id, "aria-labelledby": (B = (D = y(o.labelRef)) == null ? void 0 : D.id) != null ? B : (U = y(o.buttonRef)) == null ? void 0 : U.id, "aria-autocomplete": "list", id: X, onCompositionstart: f, onCompositionend: c, onKeydown: p, onInput: m, onBlur: v, role: "combobox", type: (E = l.type) != null ? E : "text", tabIndex: 0, ref: o.inputRef, defaultValue: w.value, disabled: o.disabled.value === !0 ? !0 : void 0 };
    return _({ ourProps: S, theirProps: I, slot: Y, attrs: l, slots: a, features: ue.RenderStrategy | ue.Static, name: "ComboboxInput" });
  };
} });
P({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = Ee("ComboboxOptions"), o = `headlessui-combobox-options-${Q()}`;
  a({ el: n.optionsRef, $el: n.optionsRef }), W(() => {
    n.optionsPropsRef.value.static = e.static;
  }), W(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let r = De(), u = b(() => r !== null ? (r.value & N.Open) === N.Open : n.comboboxState.value === 0);
  return kt({ container: b(() => y(n.optionsRef)), enabled: b(() => n.comboboxState.value === 0), accept(i) {
    return i.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : i.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(i) {
    i.setAttribute("role", "none");
  } }), () => {
    var i, s, d;
    let f = { open: n.comboboxState.value === 0 }, c = { "aria-labelledby": (d = (i = y(n.labelRef)) == null ? void 0 : i.id) != null ? d : (s = y(n.buttonRef)) == null ? void 0 : s.id, id: o, ref: n.optionsRef, role: "listbox", "aria-multiselectable": n.mode.value === 1 ? !0 : void 0 }, p = $e(e, ["hold"]);
    return _({ ourProps: c, theirProps: p, slot: f, attrs: t, slots: l, features: ue.RenderStrategy | ue.Static, visible: u.value, name: "ComboboxOptions" });
  };
} });
P({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: a }) {
  let n = Ee("ComboboxOption"), o = `headlessui-combobox-option-${Q()}`, r = h(null);
  a({ el: r, $el: r });
  let u = b(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === o : !1), i = b(() => $(n.mode.value, { [0]: () => n.compare(j(n.value.value), j(e.value)), [1]: () => j(n.value.value).some((w) => n.compare(j(w), j(e.value))) })), s = b(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  V(() => n.registerOption(o, s)), Z(() => n.unregisterOption(o)), W(() => {
    n.comboboxState.value === 0 && u.value && n.activationTrigger.value !== 0 && z(() => {
      var w, g;
      return (g = (w = y(r)) == null ? void 0 : w.scrollIntoView) == null ? void 0 : g.call(w, { block: "nearest" });
    });
  });
  function d(w) {
    if (e.disabled)
      return w.preventDefault();
    n.selectOption(o), n.mode.value === 0 && n.closeCombobox(), Yn() || requestAnimationFrame(() => {
      var g;
      return (g = y(n.inputRef)) == null ? void 0 : g.focus();
    });
  }
  function f() {
    if (e.disabled)
      return n.goToOption(F.Nothing);
    n.goToOption(F.Specific, o);
  }
  let c = Ht();
  function p(w) {
    c.update(w);
  }
  function m(w) {
    c.wasMoved(w) && (e.disabled || u.value || n.goToOption(F.Specific, o, 0));
  }
  function v(w) {
    c.wasMoved(w) && (e.disabled || u.value && (n.optionsPropsRef.value.hold || n.goToOption(F.Nothing)));
  }
  return () => {
    let { disabled: w } = e, g = { active: u.value, selected: i.value, disabled: w }, T = { id: o, ref: r, role: "option", tabIndex: w === !0 ? void 0 : -1, "aria-disabled": w === !0 ? !0 : void 0, "aria-selected": i.value, disabled: void 0, onClick: d, onFocus: f, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: v, onMouseleave: v };
    return _({ ourProps: T, theirProps: e, slot: g, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
var Re = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Re || {});
function tl() {
  let e = h(0);
  return jt("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Wt(e, t, l, a) {
  Ae.isServer || W((n) => {
    e = e != null ? e : window, e.addEventListener(t, l, a), n(() => e.removeEventListener(t, l, a));
  });
}
function nl(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function qt(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let l of e.value) {
    let a = y(l);
    a instanceof HTMLElement && t.add(a);
  }
  return t;
}
var Kt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Kt || {});
let Pe = Object.assign(P({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: h(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = h(null);
  a({ el: n, $el: n });
  let o = b(() => ce(n)), r = h(!1);
  V(() => r.value = !0), Z(() => r.value = !1), ol({ ownerDocument: o }, b(() => r.value && Boolean(e.features & 16)));
  let u = al({ ownerDocument: o, container: n, initialFocus: b(() => e.initialFocus) }, b(() => r.value && Boolean(e.features & 2)));
  rl({ ownerDocument: o, container: n, containers: e.containers, previousActiveElement: u }, b(() => r.value && Boolean(e.features & 8)));
  let i = tl();
  function s(p) {
    let m = y(n);
    !m || ((v) => v())(() => {
      $(i.value, { [Re.Forwards]: () => {
        Ie(m, ae.First, { skipElements: [p.relatedTarget] });
      }, [Re.Backwards]: () => {
        Ie(m, ae.Last, { skipElements: [p.relatedTarget] });
      } });
    });
  }
  let d = h(!1);
  function f(p) {
    p.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function c(p) {
    if (!r.value)
      return;
    let m = qt(e.containers);
    y(n) instanceof HTMLElement && m.add(y(n));
    let v = p.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (zt(m, v) || (d.value ? Ie(y(n), $(i.value, { [Re.Forwards]: () => ae.Next, [Re.Backwards]: () => ae.Previous }) | ae.WrapAround, { relativeTo: p.target }) : p.target instanceof HTMLElement && ve(p.target)));
  }
  return () => {
    let p = {}, m = { ref: n, onKeydown: f, onFocusout: c }, { features: v, initialFocus: w, containers: g, ...T } = e;
    return H(me, [Boolean(v & 4) && H(Ne, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: s, features: Ce.Focusable }), _({ ourProps: m, theirProps: { ...t, ...T }, slot: p, attrs: t, slots: l, name: "FocusTrap" }), Boolean(v & 4) && H(Ne, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: s, features: Ce.Focusable })]);
  };
} }), { features: Kt }), ge = [];
nl(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && ge[0] !== t.target && (ge.unshift(t.target), ge = ge.filter((l) => l != null && l.isConnected), ge.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function ll(e) {
  let t = h(ge.slice());
  return de([e], ([l], [a]) => {
    a === !0 && l === !1 ? dt(() => {
      t.value.splice(0);
    }) : a === !1 && l === !0 && (t.value = ge.slice());
  }, { flush: "post" }), () => {
    var l;
    return (l = t.value.find((a) => a != null && a.isConnected)) != null ? l : null;
  };
}
function ol({ ownerDocument: e }, t) {
  let l = ll(t);
  V(() => {
    W(() => {
      var a, n;
      t.value || ((a = e.value) == null ? void 0 : a.activeElement) === ((n = e.value) == null ? void 0 : n.body) && ve(l());
    }, { flush: "post" });
  }), Z(() => {
    t.value && ve(l());
  });
}
function al({ ownerDocument: e, container: t, initialFocus: l }, a) {
  let n = h(null), o = h(!1);
  return V(() => o.value = !0), Z(() => o.value = !1), V(() => {
    de([t, l, a], (r, u) => {
      if (r.every((s, d) => (u == null ? void 0 : u[d]) === s) || !a.value)
        return;
      let i = y(t);
      i && dt(() => {
        var s, d;
        if (!o.value)
          return;
        let f = y(l), c = (s = e.value) == null ? void 0 : s.activeElement;
        if (f) {
          if (f === c) {
            n.value = c;
            return;
          }
        } else if (i.contains(c)) {
          n.value = c;
          return;
        }
        f ? ve(f) : Ie(i, ae.First | ae.NoScroll) === Mt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function rl({ ownerDocument: e, container: t, containers: l, previousActiveElement: a }, n) {
  var o;
  Wt((o = e.value) == null ? void 0 : o.defaultView, "focus", (r) => {
    if (!n.value)
      return;
    let u = qt(l);
    y(t) instanceof HTMLElement && u.add(y(t));
    let i = a.value;
    if (!i)
      return;
    let s = r.target;
    s && s instanceof HTMLElement ? zt(u, s) ? (a.value = s, ve(s)) : (r.preventDefault(), r.stopPropagation(), ve(i)) : ve(a.value);
  }, !0);
}
function zt(e, t) {
  for (let l of e)
    if (l.contains(t))
      return !0;
  return !1;
}
let Ge = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
function St(e, t = h(!0)) {
  W((l) => {
    var a;
    if (!t.value)
      return;
    let n = y(e);
    if (!n)
      return;
    l(function() {
      var r;
      if (!n)
        return;
      let u = (r = Te.get(n)) != null ? r : 1;
      if (u === 1 ? Te.delete(n) : Te.set(n, u - 1), u !== 1)
        return;
      let i = Ge.get(n);
      i && (i["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", i["aria-hidden"]), n.inert = i.inert, Ge.delete(n));
    });
    let o = (a = Te.get(n)) != null ? a : 0;
    Te.set(n, o + 1), o === 0 && (Ge.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0);
  });
}
let Qt = Symbol("ForcePortalRootContext");
function ul() {
  return J(Qt, !1);
}
let Ye = P({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return te(Qt, e.force), () => {
    let { force: a, ...n } = e;
    return _({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function il(e) {
  let t = ce(e);
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
let Yt = P({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let a = h(null), n = b(() => ce(a)), o = ul(), r = J(Xt, null), u = h(o === !0 || r == null ? il(a.value) : r.resolveTarget());
  W(() => {
    o || r != null && (u.value = r.resolveTarget());
  });
  let i = J(Xe, null);
  return V(() => {
    let s = y(a);
    s && i && Z(i.register(s));
  }), Z(() => {
    var s, d;
    let f = (s = n.value) == null ? void 0 : s.getElementById("headlessui-portal-root");
    f && u.value === f && u.value.children.length <= 0 && ((d = u.value.parentElement) == null || d.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let s = { ref: a, "data-headlessui-portal": "" };
    return H(pn, { to: u.value }, _({ ourProps: s, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), Xe = Symbol("PortalParentContext");
function sl() {
  let e = J(Xe, null), t = h([]);
  function l(o) {
    return t.value.push(o), e && e.register(o), () => a(o);
  }
  function a(o) {
    let r = t.value.indexOf(o);
    r !== -1 && t.value.splice(r, 1), e && e.unregister(o);
  }
  let n = { register: l, unregister: a, portals: t };
  return [t, P({ name: "PortalWrapper", setup(o, { slots: r }) {
    return te(Xe, n), () => {
      var u;
      return (u = r.default) == null ? void 0 : u.call(r);
    };
  } })];
}
let Xt = Symbol("PortalGroupContext"), dl = P({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let a = vn({ resolveTarget() {
    return e.target;
  } });
  return te(Xt, a), () => {
    let { target: n, ...o } = e;
    return _({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), Jt = Symbol("StackContext");
var Je = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Je || {});
function cl() {
  return J(Jt, () => {
  });
}
function fl({ type: e, enabled: t, element: l, onUpdate: a }) {
  let n = cl();
  function o(...r) {
    a == null || a(...r), n(...r);
  }
  V(() => {
    de(t, (r, u) => {
      r ? o(0, e, l) : u === !0 && o(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), Z(() => {
    t.value && o(1, e, l);
  }), te(Jt, o);
}
let Zt = Symbol("DescriptionContext");
function pl() {
  let e = J(Zt, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function vl({ slot: e = h({}), name: t = "Description", props: l = {} } = {}) {
  let a = h([]);
  function n(o) {
    return a.value.push(o), () => {
      let r = a.value.indexOf(o);
      r !== -1 && a.value.splice(r, 1);
    };
  }
  return te(Zt, { register: n, slot: e, name: t, props: l }), b(() => a.value.length > 0 ? a.value.join(" ") : void 0);
}
P({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Q()}` } }, setup(e, { attrs: t, slots: l }) {
  let a = pl();
  return V(() => Z(a.register(e.id))), () => {
    let { name: n = "Description", slot: o = h({}), props: r = {} } = a, { id: u, ...i } = e, s = { ...Object.entries(r).reduce((d, [f, c]) => Object.assign(d, { [f]: re(c) }), {}), id: u };
    return _({ ourProps: s, theirProps: i, slot: o.value, attrs: t, slots: l, name: n });
  };
} });
function ml(e) {
  let t = hn(e.getSnapshot());
  return Z(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function bl(e, t) {
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
function gl() {
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
function hl() {
  if (!Ut())
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
function yl() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function wl(e) {
  let t = {};
  for (let l of e)
    Object.assign(t, l(t));
  return t;
}
let he = bl(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var l;
  let a = (l = this.get(e)) != null ? l : { doc: e, count: 0, d: Oe(), meta: /* @__PURE__ */ new Set() };
  return a.count++, a.meta.add(t), this.set(e, a), this;
}, POP(e, t) {
  let l = this.get(e);
  return l && (l.count--, l.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: l }) {
  let a = { doc: e, d: t, meta: wl(l) }, n = [hl(), gl(), yl()];
  n.forEach(({ before: o }) => o == null ? void 0 : o(a)), n.forEach(({ after: o }) => o == null ? void 0 : o(a));
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
    let a = t.get(l.doc) === "hidden", n = l.count !== 0;
    (n && !a || !n && a) && he.dispatch(l.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", l), l.count === 0 && he.dispatch("TEARDOWN", l);
  }
});
function Sl(e, t, l) {
  let a = ml(he), n = b(() => {
    let o = e.value ? a.value.get(e.value) : void 0;
    return o ? o.count > 0 : !1;
  });
  return de([e, t], ([o, r], [u], i) => {
    if (!o || !r)
      return;
    he.dispatch("PUSH", o, l);
    let s = !1;
    i(() => {
      s || (he.dispatch("POP", u != null ? u : o, l), s = !0);
    });
  }, { immediate: !0 }), n;
}
function xl({ defaultContainers: e = [], portals: t, mainTreeNodeRef: l } = {}) {
  let a = h(null), n = ce(a);
  function o() {
    var r;
    let u = [];
    for (let i of e)
      i !== null && (i instanceof HTMLElement ? u.push(i) : "value" in i && i.value instanceof HTMLElement && u.push(i.value));
    if (t != null && t.value)
      for (let i of t.value)
        u.push(i);
    for (let i of (r = n == null ? void 0 : n.querySelectorAll("html > *, body > *")) != null ? r : [])
      i !== document.body && i !== document.head && i instanceof HTMLElement && i.id !== "headlessui-portal-root" && (i.contains(y(a)) || u.some((s) => i.contains(s)) || u.push(i));
    return u;
  }
  return { resolveContainers: o, contains(r) {
    return o().some((u) => u.contains(r));
  }, mainTreeNodeRef: a, MainTreeNode() {
    return l != null ? null : H(Ne, { features: Ce.Hidden, ref: a });
  } };
}
var Ol = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ol || {});
let Ze = Symbol("DialogContext");
function Le(e) {
  let t = J(Ze, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Le), l;
  }
  return t;
}
let Be = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
P({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Be }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Q()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: a, expose: n }) {
  var o;
  let r = h(!1);
  V(() => {
    r.value = !0;
  });
  let u = h(0), i = De(), s = b(() => e.open === Be && i !== null ? (i.value & N.Open) === N.Open : e.open), d = h(null), f = b(() => ce(d));
  if (n({ el: d, $el: d }), !(e.open !== Be || i !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof s.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value === Be ? void 0 : e.open}`);
  let c = b(() => r.value && s.value ? 0 : 1), p = b(() => c.value === 0), m = b(() => u.value > 1), v = J(Ze, null) !== null, [w, g] = sl(), { resolveContainers: T, mainTreeNodeRef: D, MainTreeNode: U } = xl({ portals: w, defaultContainers: [b(() => {
    var L;
    return (L = O.panelRef.value) != null ? L : d.value;
  })] }), B = b(() => m.value ? "parent" : "leaf"), E = b(() => i !== null ? (i.value & N.Closing) === N.Closing : !1), Y = b(() => v || E.value ? !1 : p.value), X = b(() => {
    var L, G, ne;
    return (ne = Array.from((G = (L = f.value) == null ? void 0 : L.querySelectorAll("body > *")) != null ? G : []).find((le) => le.id === "headlessui-portal-root" ? !1 : le.contains(y(D)) && le instanceof HTMLElement)) != null ? ne : null;
  });
  St(X, Y);
  let x = b(() => m.value ? !0 : p.value), R = b(() => {
    var L, G, ne;
    return (ne = Array.from((G = (L = f.value) == null ? void 0 : L.querySelectorAll("[data-headlessui-portal]")) != null ? G : []).find((le) => le.contains(y(D)) && le instanceof HTMLElement)) != null ? ne : null;
  });
  St(R, x), fl({ type: "Dialog", enabled: b(() => c.value === 0), element: d, onUpdate: (L, G) => {
    if (G === "Dialog")
      return $(L, { [Je.Add]: () => u.value += 1, [Je.Remove]: () => u.value -= 1 });
  } });
  let I = vl({ name: "DialogDescription", slot: b(() => ({ open: s.value })) }), S = h(null), O = { titleId: S, panelRef: h(null), dialogState: c, setTitleId(L) {
    S.value !== L && (S.value = L);
  }, close() {
    t("close", !1);
  } };
  te(Ze, O);
  let M = b(() => !(!p.value || m.value));
  st(T, (L, G) => {
    O.close(), z(() => G == null ? void 0 : G.focus());
  }, M);
  let K = b(() => !(m.value || c.value !== 0));
  Wt((o = f.value) == null ? void 0 : o.defaultView, "keydown", (L) => {
    K.value && (L.defaultPrevented || L.key === C.Escape && (L.preventDefault(), L.stopPropagation(), O.close()));
  });
  let ye = b(() => !(E.value || c.value !== 0 || v));
  return Sl(f, ye, (L) => {
    var G;
    return { containers: [...(G = L.containers) != null ? G : [], T] };
  }), W((L) => {
    if (c.value !== 0)
      return;
    let G = y(d);
    if (!G)
      return;
    let ne = new ResizeObserver((le) => {
      for (let ke of le) {
        let ie = ke.target.getBoundingClientRect();
        ie.x === 0 && ie.y === 0 && ie.width === 0 && ie.height === 0 && O.close();
      }
    });
    ne.observe(G), L(() => ne.disconnect());
  }), () => {
    let { id: L, open: G, initialFocus: ne, ...le } = e, ke = { ...l, ref: d, id: L, role: "dialog", "aria-modal": c.value === 0 ? !0 : void 0, "aria-labelledby": S.value, "aria-describedby": I.value }, ie = { open: c.value === 0 };
    return H(Ye, { force: !0 }, () => [H(Yt, () => H(dl, { target: d.value }, () => H(Ye, { force: !1 }, () => H(Pe, { initialFocus: ne, containers: T, features: p.value ? $(B.value, { parent: Pe.features.RestoreFocus, leaf: Pe.features.All & ~Pe.features.FocusLock }) : Pe.features.None }, () => H(g, {}, () => _({ ourProps: ke, theirProps: { ...le, ...l }, slot: ie, attrs: l, slots: a, visible: c.value === 0, features: ue.RenderStrategy | ue.Static, name: "Dialog" })))))), H(U)]);
  };
} });
P({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Q()}` } }, setup(e, { attrs: t, slots: l }) {
  let a = Le("DialogOverlay");
  function n(o) {
    o.target === o.currentTarget && (o.preventDefault(), o.stopPropagation(), a.close());
  }
  return () => {
    let { id: o, ...r } = e;
    return _({ ourProps: { id: o, "aria-hidden": !0, onClick: n }, theirProps: r, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
P({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Q()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = Le("DialogBackdrop"), o = h(null);
  return a({ el: o, $el: o }), V(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...u } = e, i = { id: r, ref: o, "aria-hidden": !0 };
    return H(Ye, { force: !0 }, () => H(Yt, () => _({ ourProps: i, theirProps: { ...t, ...u }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
P({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Q()}` } }, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = Le("DialogPanel");
  a({ el: n.panelRef, $el: n.panelRef });
  function o(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...u } = e, i = { id: r, ref: n.panelRef, onClick: o };
    return _({ ourProps: i, theirProps: u, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} });
P({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Q()}` } }, setup(e, { attrs: t, slots: l }) {
  let a = Le("DialogTitle");
  return V(() => {
    a.setTitleId(e.id), Z(() => a.setTitleId(null));
  }), () => {
    let { id: n, ...o } = e;
    return _({ ourProps: { id: n }, theirProps: o, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
  };
} });
let xt = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Ot(e) {
  var t, l;
  let a = (t = e.innerText) != null ? t : "", n = e.cloneNode(!0);
  if (!(n instanceof HTMLElement))
    return a;
  let o = !1;
  for (let u of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    u.remove(), o = !0;
  let r = o ? (l = n.innerText) != null ? l : "" : a;
  return xt.test(r) && (r = r.replace(xt, "")), r;
}
function El(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let l = e.getAttribute("aria-labelledby");
  if (l) {
    let a = l.split(" ").map((n) => {
      let o = document.getElementById(n);
      if (o) {
        let r = o.getAttribute("aria-label");
        return typeof r == "string" ? r.trim() : Ot(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (a.length > 0)
      return a.join(", ");
  }
  return Ot(e).trim();
}
function Pl(e) {
  let t = h(""), l = h("");
  return () => {
    let a = y(e);
    if (!a)
      return "";
    let n = a.innerText;
    if (t.value === n)
      return l.value;
    let o = El(a).trim().toLowerCase();
    return t.value = n, l.value = o, o;
  };
}
var Tl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Tl || {}), Rl = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Rl || {});
function Il(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let en = Symbol("MenuContext");
function Ve(e) {
  let t = J(en, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Ve), l;
  }
  return t;
}
P({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let a = h(1), n = h(null), o = h(null), r = h([]), u = h(""), i = h(null), s = h(1);
  function d(c = (p) => p) {
    let p = i.value !== null ? r.value[i.value] : null, m = it(c(r.value.slice()), (w) => y(w.dataRef.domRef)), v = p ? m.indexOf(p) : null;
    return v === -1 && (v = null), { items: m, activeItemIndex: v };
  }
  let f = { menuState: a, buttonRef: n, itemsRef: o, items: r, searchQuery: u, activeItemIndex: i, activationTrigger: s, closeMenu: () => {
    a.value = 1, i.value = null;
  }, openMenu: () => a.value = 0, goToItem(c, p, m) {
    let v = d(), w = Dt(c === F.Specific ? { focus: F.Specific, id: p } : { focus: c }, { resolveItems: () => v.items, resolveActiveIndex: () => v.activeItemIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
    u.value = "", i.value = w, s.value = m != null ? m : 1, r.value = v.items;
  }, search(c) {
    let p = u.value !== "" ? 0 : 1;
    u.value += c.toLowerCase();
    let m = (i.value !== null ? r.value.slice(i.value + p).concat(r.value.slice(0, i.value + p)) : r.value).find((w) => w.dataRef.textValue.startsWith(u.value) && !w.dataRef.disabled), v = m ? r.value.indexOf(m) : -1;
    v === -1 || v === i.value || (i.value = v, s.value = 1);
  }, clearSearch() {
    u.value = "";
  }, registerItem(c, p) {
    let m = d((v) => [...v, { id: c, dataRef: p }]);
    r.value = m.items, i.value = m.activeItemIndex, s.value = 1;
  }, unregisterItem(c) {
    let p = d((m) => {
      let v = m.findIndex((w) => w.id === c);
      return v !== -1 && m.splice(v, 1), m;
    });
    r.value = p.items, i.value = p.activeItemIndex, s.value = 1;
  } };
  return st([n, o], (c, p) => {
    var m;
    f.closeMenu(), ut(p, rt.Loose) || (c.preventDefault(), (m = y(n)) == null || m.focus());
  }, b(() => a.value === 0)), te(en, f), at(b(() => $(a.value, { [0]: N.Open, [1]: N.Closed }))), () => {
    let c = { open: a.value === 0, close: f.closeMenu };
    return _({ ourProps: {}, theirProps: e, slot: c, slots: t, attrs: l, name: "Menu" });
  };
} });
P({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${Q()}` } }, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = Ve("MenuButton");
  a({ el: n.buttonRef, $el: n.buttonRef });
  function o(s) {
    switch (s.key) {
      case C.Space:
      case C.Enter:
      case C.ArrowDown:
        s.preventDefault(), s.stopPropagation(), n.openMenu(), z(() => {
          var d;
          (d = y(n.itemsRef)) == null || d.focus({ preventScroll: !0 }), n.goToItem(F.First);
        });
        break;
      case C.ArrowUp:
        s.preventDefault(), s.stopPropagation(), n.openMenu(), z(() => {
          var d;
          (d = y(n.itemsRef)) == null || d.focus({ preventScroll: !0 }), n.goToItem(F.Last);
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
    e.disabled || (n.menuState.value === 0 ? (n.closeMenu(), z(() => {
      var d;
      return (d = y(n.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })) : (s.preventDefault(), n.openMenu(), Il(() => {
      var d;
      return (d = y(n.itemsRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })));
  }
  let i = Lt(b(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var s;
    let d = { open: n.menuState.value === 0 }, { id: f, ...c } = e, p = { ref: n.buttonRef, id: f, type: i.value, "aria-haspopup": "menu", "aria-controls": (s = y(n.itemsRef)) == null ? void 0 : s.id, "aria-expanded": n.menuState.value === 0, onKeydown: o, onKeyup: r, onClick: u };
    return _({ ourProps: p, theirProps: c, slot: d, attrs: t, slots: l, name: "MenuButton" });
  };
} });
P({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-menu-items-${Q()}` } }, setup(e, { attrs: t, slots: l, expose: a }) {
  let n = Ve("MenuItems"), o = h(null);
  a({ el: n.itemsRef, $el: n.itemsRef }), kt({ container: b(() => y(n.itemsRef)), enabled: b(() => n.menuState.value === 0), accept(d) {
    return d.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } });
  function r(d) {
    var f;
    switch (o.value && clearTimeout(o.value), d.key) {
      case C.Space:
        if (n.searchQuery.value !== "")
          return d.preventDefault(), d.stopPropagation(), n.search(d.key);
      case C.Enter:
        if (d.preventDefault(), d.stopPropagation(), n.activeItemIndex.value !== null) {
          let c = n.items.value[n.activeItemIndex.value];
          (f = y(c.dataRef.domRef)) == null || f.click();
        }
        n.closeMenu(), _t(y(n.buttonRef));
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
        d.preventDefault(), d.stopPropagation(), n.closeMenu(), z(() => {
          var c;
          return (c = y(n.buttonRef)) == null ? void 0 : c.focus({ preventScroll: !0 });
        });
        break;
      case C.Tab:
        d.preventDefault(), d.stopPropagation(), n.closeMenu(), z(() => Kn(y(n.buttonRef), d.shiftKey ? ae.Previous : ae.Next));
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
  let i = De(), s = b(() => i !== null ? (i.value & N.Open) === N.Open : n.menuState.value === 0);
  return () => {
    var d, f;
    let c = { open: n.menuState.value === 0 }, { id: p, ...m } = e, v = { "aria-activedescendant": n.activeItemIndex.value === null || (d = n.items.value[n.activeItemIndex.value]) == null ? void 0 : d.id, "aria-labelledby": (f = y(n.buttonRef)) == null ? void 0 : f.id, id: p, onKeydown: r, onKeyup: u, role: "menu", tabIndex: 0, ref: n.itemsRef };
    return _({ ourProps: v, theirProps: m, slot: c, attrs: t, slots: l, features: ue.RenderStrategy | ue.Static, visible: s.value, name: "MenuItems" });
  };
} });
P({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-menu-item-${Q()}` } }, setup(e, { slots: t, attrs: l, expose: a }) {
  let n = Ve("MenuItem"), o = h(null);
  a({ el: o, $el: o });
  let r = b(() => n.activeItemIndex.value !== null ? n.items.value[n.activeItemIndex.value].id === e.id : !1), u = Pl(o), i = b(() => ({ disabled: e.disabled, get textValue() {
    return u();
  }, domRef: o }));
  V(() => n.registerItem(e.id, i)), Z(() => n.unregisterItem(e.id)), W(() => {
    n.menuState.value === 0 && r.value && n.activationTrigger.value !== 0 && z(() => {
      var v, w;
      return (w = (v = y(o)) == null ? void 0 : v.scrollIntoView) == null ? void 0 : w.call(v, { block: "nearest" });
    });
  });
  function s(v) {
    if (e.disabled)
      return v.preventDefault();
    n.closeMenu(), _t(y(n.buttonRef));
  }
  function d() {
    if (e.disabled)
      return n.goToItem(F.Nothing);
    n.goToItem(F.Specific, e.id);
  }
  let f = Ht();
  function c(v) {
    f.update(v);
  }
  function p(v) {
    f.wasMoved(v) && (e.disabled || r.value || n.goToItem(F.Specific, e.id, 0));
  }
  function m(v) {
    f.wasMoved(v) && (e.disabled || r.value && n.goToItem(F.Nothing));
  }
  return () => {
    let { disabled: v } = e, w = { active: r.value, disabled: v, close: n.closeMenu }, { id: g, ...T } = e;
    return _({ ourProps: { id: g, ref: o, role: "menuitem", tabIndex: v === !0 ? void 0 : -1, "aria-disabled": v === !0 ? !0 : void 0, disabled: void 0, onClick: s, onFocus: d, onPointerenter: c, onMouseenter: c, onPointermove: p, onMousemove: p, onPointerleave: m, onMouseleave: m }, theirProps: { ...l, ...T }, slot: w, attrs: l, slots: t, name: "MenuItem" });
  };
} });
function Cl(e) {
  let t = { called: !1 };
  return (...l) => {
    if (!t.called)
      return t.called = !0, e(...l);
  };
}
function We(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function _e(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var et = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(et || {});
function Fl(e, t) {
  let l = Oe();
  if (!e)
    return l.dispose;
  let { transitionDuration: a, transitionDelay: n } = getComputedStyle(e), [o, r] = [a, n].map((u) => {
    let [i = 0] = u.split(",").filter(Boolean).map((s) => s.includes("ms") ? parseFloat(s) : parseFloat(s) * 1e3).sort((s, d) => d - s);
    return i;
  });
  return o !== 0 ? l.setTimeout(() => t("finished"), o + r) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function Et(e, t, l, a, n, o) {
  let r = Oe(), u = o !== void 0 ? Cl(o) : () => {
  };
  return _e(e, ...n), We(e, ...t, ...l), r.nextFrame(() => {
    _e(e, ...l), We(e, ...a), r.add(Fl(e, (i) => (_e(e, ...a, ...t), We(e, ...n), u(i))));
  }), r.add(() => _e(e, ...t, ...l, ...a, ...n)), r.add(() => u("cancelled")), r.dispose;
}
function be(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let ct = Symbol("TransitionContext");
var Dl = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Dl || {});
function Al() {
  return J(ct, null) !== null;
}
function Ll() {
  let e = J(ct, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function kl() {
  let e = J(ft, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let ft = Symbol("NestingContext");
function He(e) {
  return "children" in e ? He(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function tn(e) {
  let t = h([]), l = h(!1);
  V(() => l.value = !0), Z(() => l.value = !1);
  function a(o, r = fe.Hidden) {
    let u = t.value.findIndex(({ id: i }) => i === o);
    u !== -1 && ($(r, { [fe.Unmount]() {
      t.value.splice(u, 1);
    }, [fe.Hidden]() {
      t.value[u].state = "hidden";
    } }), !He(t) && l.value && (e == null || e()));
  }
  function n(o) {
    let r = t.value.find(({ id: u }) => u === o);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: o, state: "visible" }), () => a(o, fe.Unmount);
  }
  return { children: t, register: n, unregister: a };
}
let nn = ue.RenderStrategy, Ml = P({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: a, expose: n }) {
  let o = h(0);
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
  if (!Al() && Nn())
    return () => H(_l, { ...e, onBeforeEnter: r, onAfterEnter: u, onBeforeLeave: i, onAfterLeave: s }, a);
  let d = h(null), f = b(() => e.unmount ? fe.Unmount : fe.Hidden);
  n({ el: d, $el: d });
  let { show: c, appear: p } = Ll(), { register: m, unregister: v } = kl(), w = h(c.value ? "visible" : "hidden"), g = { value: !0 }, T = Q(), D = { value: !1 }, U = tn(() => {
    !D.value && w.value !== "hidden" && (w.value = "hidden", v(T), s());
  });
  V(() => {
    let O = m(T);
    Z(O);
  }), W(() => {
    if (f.value === fe.Hidden && T) {
      if (c.value && w.value !== "visible") {
        w.value = "visible";
        return;
      }
      $(w.value, { hidden: () => v(T), visible: () => m(T) });
    }
  });
  let B = be(e.enter), E = be(e.enterFrom), Y = be(e.enterTo), X = be(e.entered), x = be(e.leave), R = be(e.leaveFrom), I = be(e.leaveTo);
  V(() => {
    W(() => {
      if (w.value === "visible") {
        let O = y(d);
        if (O instanceof Comment && O.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function S(O) {
    let M = g.value && !p.value, K = y(d);
    !K || !(K instanceof HTMLElement) || M || (D.value = !0, c.value && r(), c.value || i(), O(c.value ? Et(K, B, E, Y, X, (ye) => {
      D.value = !1, ye === et.Finished && u();
    }) : Et(K, x, R, I, X, (ye) => {
      D.value = !1, ye === et.Finished && (He(U) || (w.value = "hidden", v(T), s()));
    })));
  }
  return V(() => {
    de([c], (O, M, K) => {
      S(K), g.value = !1;
    }, { immediate: !0 });
  }), te(ft, U), at(b(() => $(w.value, { visible: N.Open, hidden: N.Closed }) | o.value)), () => {
    let { appear: O, show: M, enter: K, enterFrom: ye, enterTo: L, entered: G, leave: ne, leaveFrom: le, leaveTo: ke, ...ie } = e, cn = { ref: d }, fn = { ...ie, ...p.value && c.value && Ae.isServer ? { class: lt([l.class, ie.class, ...B, ...E]) } : {} };
    return _({ theirProps: fn, ourProps: cn, slot: {}, slots: a, attrs: l, features: nn, visible: w.value === "visible", name: "TransitionChild" });
  };
} }), Bl = Ml, _l = P({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: a }) {
  let n = De(), o = b(() => e.show === null && n !== null ? (n.value & N.Open) === N.Open : e.show);
  W(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = h(o.value ? "visible" : "hidden"), u = tn(() => {
    r.value = "hidden";
  }), i = h(!0), s = { show: o, appear: b(() => e.appear || !i.value) };
  return V(() => {
    W(() => {
      i.value = !1, o.value ? r.value = "visible" : He(u) || (r.value = "hidden");
    });
  }), te(ft, u), te(ct, s), () => {
    let d = $e(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return _({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...a, default: () => [H(Bl, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...f, ...d }, a.default)] }, attrs: {}, features: nn, visible: r.value === "visible", name: "Transition" });
  };
} });
var Pt;
const jl = typeof window < "u";
jl && ((Pt = window == null ? void 0 : window.navigator) == null ? void 0 : Pt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Nl(e) {
  return e;
}
const tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nt = "__vueuse_ssr_handlers__";
tt[nt] = tt[nt] || {};
tt[nt];
var Tt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Tt || (Tt = {}));
var $l = Object.defineProperty, Rt = Object.getOwnPropertySymbols, Vl = Object.prototype.hasOwnProperty, Hl = Object.prototype.propertyIsEnumerable, It = (e, t, l) => t in e ? $l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, Ul = (e, t) => {
  for (var l in t || (t = {}))
    Vl.call(t, l) && It(e, l, t[l]);
  if (Rt)
    for (var l of Rt(t))
      Hl.call(t, l) && It(e, l, t[l]);
  return e;
};
const Gl = {
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
Ul({
  linear: Nl
}, Gl);
function Wl(e, t) {
  return b({
    get: () => e.modelValue,
    set: (l) => t("update:modelValue", l)
  });
}
const ql = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, Kl = { name: "Error" }, ln = /* @__PURE__ */ P({
  ...Kl,
  props: {
    error: {}
  },
  setup(e) {
    return (t, l) => t.error ? (A(), q("div", ql, [
      se(t.$slots, "default", {}, () => [
        ot(xe(t.error), 1)
      ])
    ])) : we("", !0);
  }
}), zl = {
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
    return (t, l) => (A(), q("div", null, [
      ee("div", {
        class: lt(["mt-1 rounded-md", { "shadow-sm": t.shadow }])
      }, [
        se(t.$slots, "default")
      ], 2),
      t.description ? (A(), q("p", zl, xe(t.description), 1)) : we("", !0),
      t.error ? (A(), oe(ln, {
        key: 1,
        error: t.error
      }, null, 8, ["error"])) : we("", !0)
    ]));
  }
}), Xl = { name: "Actions" }, Jl = { class: "mt-8 border-t border-gray-200 pt-5" }, Zl = { class: "flex justify-end" }, eo = { class: "inline-flex" };
function to(e, t, l, a, n, o) {
  return A(), q("div", Jl, [
    ee("div", Zl, [
      ee("span", eo, [
        se(e.$slots, "default")
      ])
    ])
  ]);
}
const no = /* @__PURE__ */ Dn(Xl, [["render", to]]), lo = { class: "relative flex items-start" }, oo = { class: "flex h-5 items-center" }, ao = ["id", "value", "disabled", "readonly"], ro = { class: "ml-3" }, uo = ["for"], io = { name: "Checkbox" }, so = /* @__PURE__ */ P({
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
    const l = Wl(e, t);
    return (a, n) => (A(), oe(Yl, pe(a.$props, { shadow: !1 }), {
      default: Se(() => [
        ee("div", lo, [
          ee("div", oo, [
            ze(ee("input", pe({
              id: a.id,
              "onUpdate:modelValue": n[0] || (n[0] = (o) => bn(l) ? l.value = o : null),
              value: a.value,
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 accent-primary-600 focus:ring-primary-500",
              disabled: a.disabled,
              readonly: a.readonly
            }, a.$attrs), null, 16, ao), [
              [gn, re(l)]
            ]),
            ee("div", ro, [
              ee("label", {
                for: a.id,
                class: "block text-sm font-medium leading-5 text-gray-700"
              }, xe(a.label), 9, uo)
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
    return (l, a) => (A(), q("label", {
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
})(an);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ l(an);
  function l(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  const a = t.default;
})(on);
let qe = on;
var vo = (qe.__esModule ? qe : { default: qe }).default, rn = {}, un = {}, pt = { exports: {} }, k = String, sn = function() {
  return { isColorSupported: !1, reset: k, bold: k, dim: k, italic: k, underline: k, inverse: k, hidden: k, strikethrough: k, black: k, red: k, green: k, yellow: k, blue: k, magenta: k, cyan: k, white: k, gray: k, bgBlack: k, bgRed: k, bgGreen: k, bgYellow: k, bgBlue: k, bgMagenta: k, bgCyan: k, bgWhite: k };
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
  const l = /* @__PURE__ */ a(pt.exports);
  function a(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  let n = /* @__PURE__ */ new Set();
  function o(i, s, d) {
    typeof process < "u" && process.env.JEST_WORKER_ID || d && n.has(d) || (d && n.add(d), console.warn(""), s.forEach((f) => console.warn(i, "-", f)));
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
})(rn);
let Ke = rn;
var mo = (Ke.__esModule ? Ke : { default: Ke }).default;
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
    const t = e, l = b(() => {
      var c;
      const f = (c = t.element.definition) == null ? void 0 : c.fieldset;
      return f ? Object.entries(f).reduce((p, [m, v]) => (v != null && v.model ? p[v.model] = t.form[v.model] : p[m] = t.form[m], p), {}) : {
        modelValue: t.form[t.element.name]
      };
    }), a = b(() => {
      var p;
      let f = Object.entries({
        ...t.element.definition,
        ...t.element.definition.props,
        ...l.value,
        schema: t.element.definition.schema,
        form: t.form,
        id: t.element.name,
        error: (p = o.value[0]) != null ? p : null
      }), c = t.element.definition.component.props;
      return Object.fromEntries(f.filter(([m]) => c.hasOwnProperty(m)));
    }), n = b(() => {
      var c;
      const f = (c = t.element.definition) == null ? void 0 : c.fieldset;
      return f ? Object.entries(f).reduce((p, [m, v]) => (v != null && v.model ? p[`update:${v.model}`] = (w) => t.form[v.model] = w : p[`update:${m}`] = (w) => t.form[m] = w, p), {}) : { "update:modelValue": (p) => t.form[t.element.name] = p };
    }), o = b(() => {
      var c;
      const f = (c = t.element.definition) == null ? void 0 : c.fieldset;
      return f ? Object.keys(f).map((p) => t.form.errors[p]).filter((p) => p) : [t.form.errors[t.element.name]];
    }), r = b(() => {
      var c;
      return ((c = t.element.definition.label) != null ? c : t.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }), u = !!t.element.definition.schema, i = b(() => t.element.definition.showLabel ? t.element.definition.showLabel : t.element.definition.component.name === "Hidden" ? !1 : !u), s = h(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible : () => !0
    ), d = h(
      typeof t.element.definition.visible == "function" ? t.element.definition.visible(t.form) : () => !0
    );
    return de(t.form, (f) => {
      typeof s.value == "function" && (d.value = s.value(f));
    }), (f, c) => d.value ? (A(), q("div", bo, [
      i.value ? (A(), oe(re(po), {
        key: 0,
        for: f.element.name
      }, {
        default: Se(() => [
          ot(xe(r.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : we("", !0),
      (A(), oe(yn(f.element.definition.component), pe({
        key: f.element.name
      }, a.value, wn(n.value)), null, 16)),
      a.value.hasOwnProperty("error") ? we("", !0) : (A(!0), q(me, { key: 1 }, Fe(o.value, (p, m) => (A(), oe(re(ln), {
        key: m,
        error: p
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
    return (t, l) => (A(), q("div", go, [
      (A(!0), q(me, null, Fe(t.schema.elements, (a, n) => (A(), oe(vt, {
        key: n,
        element: a,
        form: t.schema.form
      }, null, 8, ["element", "form"]))), 128)),
      je(re(no), null, {
        default: Se(() => [
          se(t.$slots, "actions", {
            form: t.schema.form
          }, () => [
            je(re(Ln), {
              as: "button",
              type: "submit",
              loading: t.schema.form.processing
            }, {
              default: Se(() => [
                ot(xe(t.submit), 1)
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
    const l = e, a = t, n = b({
      get: () => l.modelValue,
      set: (o) => {
        a("update:modelValue", o);
      }
    });
    return (o, r) => (A(!0), q(me, null, Fe(o.items, (u, i) => {
      var s, d, f;
      return A(), oe(re(so), {
        id: (s = u.label) != null ? s : u,
        key: i,
        modelValue: n.value,
        "onUpdate:modelValue": r[0] || (r[0] = (c) => n.value = c),
        value: (d = u.value) != null ? d : u,
        label: (f = u.label) != null ? f : u
      }, null, 8, ["id", "modelValue", "value", "label"]);
    }), 128));
  }
}), dn = (e) => Object.keys(e).reduce((t, l) => {
  var a;
  return e[l].schema ? { ...t, ...dn(e[l].schema) } : (t[l] = (a = e[l].value) != null ? a : null, t);
}, {}), mt = (e) => Object.entries(e).map(([t, l]) => {
  const a = l.hasOwnProperty("setup") ? { component: l } : l;
  return {
    name: t,
    definition: a
  };
});
function Po(e) {
  const t = xn(
    Object.keys(e).reduce((l, a) => {
      var o, r, u;
      if (e[a].schema)
        return { ...l, ...dn(e[a].schema) };
      if (e[a].component === ho)
        return l[a] = (o = e[a].checked) != null ? o : [], l;
      const n = (r = e[a]) == null ? void 0 : r.fieldset;
      return n ? (Object.entries(n).forEach(([i, s]) => {
        var d;
        s != null && s.model ? l[s.model] = (d = s.value) != null ? d : null : l[i] = s;
      }), l) : (l[a] = (u = e[a].value) != null ? u : null, l);
    }, {})
  );
  return {
    elements: mt(e),
    form: t
  };
}
const yo = { class: "grid gap-x-4 gap-y-6 md:grid-flow-col" }, To = /* @__PURE__ */ P({
  __name: "Grid",
  props: {
    schema: {},
    form: {}
  },
  setup(e) {
    const l = mt(e.schema);
    return (a, n) => (A(), q("div", yo, [
      (A(!0), q(me, null, Fe(re(l), (o, r) => (A(), oe(vt, pe({
        key: r,
        element: o,
        form: a.form
      }, a.$attrs), null, 16, ["element", "form"]))), 128))
    ]));
  }
}), wo = { class: "mt-10" }, So = { class: "mt-4 space-y-6" }, Ro = /* @__PURE__ */ P({
  __name: "Section",
  props: {
    schema: {},
    form: {},
    heading: {}
  },
  setup(e) {
    const l = mt(e.schema);
    return (a, n) => (A(), q("div", wo, [
      ee("label", null, xe(a.heading), 1),
      ee("div", So, [
        (A(!0), q(me, null, Fe(re(l), (o, r) => (A(), oe(vt, {
          key: r,
          element: o,
          form: a.form
        }, null, 8, ["element", "form"]))), 128))
      ])
    ]));
  }
});
export {
  ho as CheckboxGroup,
  Eo as FormBuilder,
  To as Grid,
  Ro as Section,
  Po as useSchema
};
