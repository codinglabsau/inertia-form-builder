import { Link as In, useForm as Tn } from "@inertiajs/vue3";
import { defineComponent as P, computed as h, ref as w, watch as ee, provide as te, h as U, cloneVNode as Bt, reactive as $t, onMounted as W, Fragment as ge, watchEffect as K, inject as Q, onUnmounted as ne, nextTick as J, unref as X, getCurrentInstance as Cn, Teleport as Pn, normalizeClass as st, openBlock as L, createBlock as ae, mergeProps as he, withCtx as Ee, renderSlot as ce, toRaw as pe, createElementBlock as Y, createTextVNode as dt, toDisplayString as Ie, createCommentVNode as Oe, createElementVNode as re, withDirectives as Xe, isRef as Rn, vModelCheckbox as Fn, createVNode as ze, vShow as Ot, shallowRef as Nt, triggerRef as Et, onScopeDispose as An, renderList as De, resolveDynamicComponent as Dn, toHandlers as Mn } from "vue";
const kn = /* @__PURE__ */ re("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Ln = /* @__PURE__ */ re("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), jn = [
  kn,
  Ln
], _n = { name: "Spinner" }, It = /* @__PURE__ */ P({
  ..._n,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (n, t) => (L(), Y("svg", {
      class: st(["h-5 w-5 animate-spin", n.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, jn, 2));
  }
}), Bn = ["disabled", "type"], $n = ["href"], Nn = { name: "Button" }, Vn = /* @__PURE__ */ P({
  ...Nn,
  props: {
    as: { default: "a" },
    external: { type: Boolean },
    href: { default: "" },
    loading: { type: Boolean },
    spinnerClass: { default: "text-white" },
    type: {}
  },
  setup(e) {
    const n = e, t = h(() => n.type !== void 0 && n.as !== "button" ? (console.warn(
      "Warning: The 'as' prop should be set to 'button' when using the 'type' prop. This will be an error in a future release."
    ), "button") : n.as), o = [
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
      "focus:outline-none",
      "focus-visible:outline-none"
    ];
    return (l, r) => t.value === "button" ? (L(), Y("button", he({
      key: 0,
      class: o,
      disabled: l.loading,
      type: l.type
    }, l.$attrs), [
      ce(l.$slots, "default"),
      Xe(ze(It, {
        class: "ml-3",
        "text-class": l.spinnerClass
      }, null, 8, ["text-class"]), [
        [Ot, l.loading]
      ])
    ], 16, Bn)) : l.external ? (L(), Y("a", he({
      key: 2,
      href: l.href,
      class: o
    }, l.$attrs), [
      ce(l.$slots, "default")
    ], 16, $n)) : (L(), ae(X(In), he({
      key: 1,
      as: l.as,
      href: l.href,
      disabled: l.loading,
      class: o
    }, l.$attrs), {
      default: Ee(() => [
        ce(l.$slots, "default"),
        Xe(ze(It, {
          class: "ml-3",
          "text-class": l.spinnerClass
        }, null, 8, ["text-class"]), [
          [Ot, l.loading]
        ])
      ]),
      _: 3
    }, 16, ["as", "href", "disabled"]));
  }
}), zn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, l] of n)
    t[o] = l;
  return t;
}, Hn = { name: "PrimaryButton" }, Un = /* @__PURE__ */ P({
  ...Hn,
  props: {
    as: {},
    external: { type: Boolean, default: !1 },
    href: {},
    loading: { type: Boolean },
    type: {}
  },
  setup(e) {
    const n = [
      "border-transparent",
      "bg-primary-600",
      "text-white",
      "hover:bg-primary-500",
      "focus:border-primary-700",
      "active:bg-primary-700"
    ];
    return (t, o) => (L(), ae(Vn, he({
      as: t.as,
      external: t.external,
      href: t.href,
      loading: t.loading,
      type: t.type,
      class: n
    }, t.$attrs), {
      default: Ee(() => [
        ce(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "external", "href", "loading", "type"]));
  }
});
function Te(e, n, t) {
  var o;
  let l = (o = t.initialDeps) != null ? o : [], r;
  return () => {
    var a, i, u, s;
    let c;
    t.key && ((a = t.debug) == null ? void 0 : a.call(t)) && (c = Date.now());
    const f = e();
    if (!(f.length !== l.length || f.some((v, p) => l[p] !== v)))
      return r;
    l = f;
    let d;
    if (t.key && ((i = t.debug) == null ? void 0 : i.call(t)) && (d = Date.now()), r = n(...f), t.key && ((u = t.debug) == null ? void 0 : u.call(t))) {
      const v = Math.round((Date.now() - c) * 100) / 100, p = Math.round((Date.now() - d) * 100) / 100, m = p / 16, O = (y, I) => {
        for (y = String(y); y.length < I; )
          y = " " + y;
        return y;
      };
      console.info(
        `%c\u23F1 ${O(p, 5)} /${O(v, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * m, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return (s = t == null ? void 0 : t.onChange) == null || s.call(t, r), r;
  };
}
function Ke(e, n) {
  if (e === void 0)
    throw new Error(`Unexpected undefined${n ? `: ${n}` : ""}`);
  return e;
}
const Gn = (e, n) => Math.abs(e - n) < 1, Wn = (e, n) => {
  let t;
  return function(...o) {
    clearTimeout(t), t = setTimeout(() => e.apply(this, o), n);
  };
}, Kn = (e) => e, qn = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
  for (let l = n; l <= t; l++)
    o.push(l);
  return o;
}, Yn = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const o = (r) => {
    const { width: a, height: i } = r;
    n({ width: Math.round(a), height: Math.round(i) });
  };
  if (o(t.getBoundingClientRect()), typeof ResizeObserver > "u")
    return () => {
    };
  const l = new ResizeObserver((r) => {
    const a = r[0];
    if (a != null && a.borderBoxSize) {
      const i = a.borderBoxSize[0];
      if (i) {
        o({ width: i.inlineSize, height: i.blockSize });
        return;
      }
    }
    o(t.getBoundingClientRect());
  });
  return l.observe(t, { box: "border-box" }), () => {
    l.unobserve(t);
  };
}, Tt = {
  passive: !0
}, Qn = typeof window > "u" ? !0 : "onscrollend" in window, Jn = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  let o = 0;
  const l = Qn ? () => {
  } : Wn(() => {
    n(o, !1);
  }, 150), r = (u) => () => {
    o = t[e.options.horizontal ? "scrollLeft" : "scrollTop"], l(), n(o, u);
  }, a = r(!0), i = r(!1);
  return i(), t.addEventListener("scroll", a, Tt), t.addEventListener("scrollend", i, Tt), () => {
    t.removeEventListener("scroll", a), t.removeEventListener("scrollend", i);
  };
}, Zn = (e, n, t) => {
  if (n != null && n.borderBoxSize) {
    const o = n.borderBoxSize[0];
    if (o)
      return Math.round(
        o[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    e.getBoundingClientRect()[t.options.horizontal ? "width" : "height"]
  );
}, Xn = (e, {
  adjustments: n = 0,
  behavior: t
}, o) => {
  var l, r;
  const a = e + n;
  (r = (l = o.scrollElement) == null ? void 0 : l.scrollTo) == null || r.call(l, {
    [o.options.horizontal ? "left" : "top"]: a,
    behavior: t
  });
};
class el {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollDirection = null, this.scrollAdjustments = 0, this.measureElementCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const o = () => t || (typeof ResizeObserver < "u" ? t = new ResizeObserver((l) => {
        l.forEach((r) => {
          this._measureElement(r.target, r);
        });
      }) : null);
      return {
        disconnect: () => {
          var l;
          return (l = o()) == null ? void 0 : l.disconnect();
        },
        observe: (l) => {
          var r;
          return (r = o()) == null ? void 0 : r.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var r;
          return (r = o()) == null ? void 0 : r.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      Object.entries(t).forEach(([o, l]) => {
        typeof l > "u" && delete t[o];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Kn,
        rangeExtractor: qn,
        onChange: () => {
        },
        measureElement: Zn,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        ...t
      };
    }, this.notify = (t, o) => {
      var l, r, a;
      const { startIndex: i, endIndex: u } = (l = this.range) != null ? l : {
        startIndex: void 0,
        endIndex: void 0
      }, s = this.calculateRange();
      (t || i !== (s == null ? void 0 : s.startIndex) || u !== (s == null ? void 0 : s.endIndex)) && ((a = (r = this.options).onChange) == null || a.call(r, this, o));
    }, this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.scrollElement = null;
    }, this._didMount = () => (this.measureElementCache.forEach(this.observer.observe), () => {
      this.observer.disconnect(), this.cleanup();
    }), this._willUpdate = () => {
      const t = this.options.getScrollElement();
      this.scrollElement !== t && (this.cleanup(), this.scrollElement = t, this._scrollToOffset(this.scrollOffset, {
        adjustments: void 0,
        behavior: void 0
      }), this.unsubs.push(
        this.options.observeElementRect(this, (o) => {
          this.scrollRect = o, this.notify(!1, !1);
        })
      ), this.unsubs.push(
        this.options.observeElementOffset(this, (o, l) => {
          this.scrollAdjustments = 0, this.scrollDirection = l ? this.scrollOffset < o ? "forward" : "backward" : null, this.scrollOffset = o;
          const r = this.isScrolling;
          this.isScrolling = l, this.notify(r !== l, l);
        })
      ));
    }, this.getSize = () => this.scrollRect[this.options.horizontal ? "width" : "height"], this.getMeasurementOptions = Te(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey
      ],
      (t, o, l, r) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: o,
        scrollMargin: l,
        getItemKey: r
      }),
      {
        key: !1
      }
    ), this.getFurthestMeasurement = (t, o) => {
      const l = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (let a = o - 1; a >= 0; a--) {
        const i = t[a];
        if (l.has(i.lane))
          continue;
        const u = r.get(
          i.lane
        );
        if (u == null || i.end > u.end ? r.set(i.lane, i) : i.end < u.end && l.set(i.lane, !0), l.size === this.options.lanes)
          break;
      }
      return r.size === this.options.lanes ? Array.from(r.values()).sort((a, i) => a.end === i.end ? a.index - i.index : a.end - i.end)[0] : void 0;
    }, this.getMeasurements = Te(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: o, scrollMargin: l, getItemKey: r }, a) => {
        const i = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, i);
        for (let s = i; s < t; s++) {
          const c = r(s), f = this.options.lanes === 1 ? u[s - 1] : this.getFurthestMeasurement(u, s), d = f ? f.end + this.options.gap : o + l, v = a.get(c), p = typeof v == "number" ? v : this.options.estimateSize(s), m = d + p, O = f ? f.lane : s % this.options.lanes;
          u[s] = {
            index: s,
            start: d,
            size: p,
            end: m,
            key: c,
            lane: O
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Te(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (t, o, l) => this.range = t.length > 0 && o > 0 ? tl({
        measurements: t,
        outerSize: o,
        scrollOffset: l
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getIndexes = Te(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (t, o, l, r) => o === null ? [] : t({
        startIndex: o.startIndex,
        endIndex: o.endIndex,
        overscan: l,
        count: r
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const o = this.options.indexAttribute, l = t.getAttribute(o);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${o}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (t, o) => {
      const l = this.measurementsCache[this.indexFromElement(t)];
      if (!l || !t.isConnected) {
        this.measureElementCache.forEach((i, u) => {
          i === t && (this.observer.unobserve(t), this.measureElementCache.delete(u));
        });
        return;
      }
      const r = this.measureElementCache.get(l.key);
      r !== t && (r && this.observer.unobserve(r), this.observer.observe(t), this.measureElementCache.set(l.key, t));
      const a = this.options.measureElement(t, o, this);
      this.resizeItem(l, a);
    }, this.resizeItem = (t, o) => {
      var l;
      const r = (l = this.itemSizeCache.get(t.key)) != null ? l : t.size, a = o - r;
      a !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(t, a, this) : t.start < this.scrollOffset + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", a), this._scrollToOffset(this.scrollOffset, {
        adjustments: this.scrollAdjustments += a,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(t.index), this.itemSizeCache = new Map(this.itemSizeCache.set(t.key, o)), this.notify(!0, !1));
    }, this.measureElement = (t) => {
      !t || this._measureElement(t, void 0);
    }, this.getVirtualItems = Te(
      () => [this.getIndexes(), this.getMeasurements()],
      (t, o) => {
        const l = [];
        for (let r = 0, a = t.length; r < a; r++) {
          const i = t[r], u = o[i];
          l.push(u);
        }
        return l;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getIndexes",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const o = this.getMeasurements();
      return Ke(
        o[Vt(
          0,
          o.length - 1,
          (l) => Ke(o[l]).start,
          t
        )]
      );
    }, this.getOffsetForAlignment = (t, o) => {
      const l = this.getSize();
      o === "auto" && (t <= this.scrollOffset ? o = "start" : t >= this.scrollOffset + l ? o = "end" : o = "start"), o === "start" ? t = t : o === "end" ? t = t - l : o === "center" && (t = t - l / 2);
      const r = this.options.horizontal ? "scrollWidth" : "scrollHeight", a = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[r] : this.scrollElement[r] : 0) - this.getSize();
      return Math.max(Math.min(a, t), 0);
    }, this.getOffsetForIndex = (t, o = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = Ke(this.getMeasurements()[t]);
      if (o === "auto")
        if (l.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd)
          o = "end";
        else if (l.start <= this.scrollOffset + this.options.scrollPaddingStart)
          o = "start";
        else
          return [this.scrollOffset, o];
      const r = o === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(r, o), o];
    }, this.isDynamicMode = () => this.measureElementCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && (clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (t, { align: o = "start", behavior: l } = {}) => {
      this.cancelScrollToIndex(), l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(t, o), {
        adjustments: void 0,
        behavior: l
      });
    }, this.scrollToIndex = (t, { align: o = "auto", behavior: l } = {}) => {
      t = Math.max(0, Math.min(t, this.options.count - 1)), this.cancelScrollToIndex(), l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const [r, a] = this.getOffsetForIndex(t, o);
      this._scrollToOffset(r, { adjustments: void 0, behavior: l }), l !== "smooth" && this.isDynamicMode() && (this.scrollToIndexTimeoutId = setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.measureElementCache.has(
          this.options.getItemKey(t)
        )) {
          const [i] = this.getOffsetForIndex(t, a);
          Gn(i, this.scrollOffset) || this.scrollToIndex(t, { align: a, behavior: l });
        } else
          this.scrollToIndex(t, { align: a, behavior: l });
      }));
    }, this.scrollBy = (t, { behavior: o } = {}) => {
      this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.scrollOffset + t, {
        adjustments: void 0,
        behavior: o
      });
    }, this.getTotalSize = () => {
      var t, o;
      const l = this.getMeasurements();
      let r;
      return l.length === 0 ? r = this.options.paddingStart : r = this.options.lanes === 1 ? (t = (o = l[l.length - 1]) == null ? void 0 : o.end) != null ? t : 0 : Math.max(
        ...l.slice(-this.options.lanes).map((a) => a.end)
      ), r - this.options.scrollMargin + this.options.paddingEnd;
    }, this._scrollToOffset = (t, {
      adjustments: o,
      behavior: l
    }) => {
      this.options.scrollToFn(t, { behavior: l, adjustments: o }, this);
    }, this.measure = () => {
      var t, o;
      this.itemSizeCache = /* @__PURE__ */ new Map(), (o = (t = this.options).onChange) == null || o.call(t, this, !1);
    }, this.setOptions(n), this.scrollRect = this.options.initialRect, this.scrollOffset = typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset, this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((t) => {
      this.itemSizeCache.set(t.key, t.size);
    }), this.notify(!1, !1);
  }
}
const Vt = (e, n, t, o) => {
  for (; e <= n; ) {
    const l = (e + n) / 2 | 0, r = t(l);
    if (r < o)
      e = l + 1;
    else if (r > o)
      n = l - 1;
    else
      return l;
  }
  return e > 0 ? e - 1 : 0;
};
function tl({
  measurements: e,
  outerSize: n,
  scrollOffset: t
}) {
  const o = e.length - 1, l = Vt(0, o, (a) => e[a].start, t);
  let r = l;
  for (; r < o && e[r].end < t + n; )
    r++;
  return { startIndex: l, endIndex: r };
}
function nl(e) {
  const n = new el(X(e)), t = Nt(n), o = n._didMount();
  return ee(
    () => X(e).getScrollElement(),
    (l) => {
      l && n._willUpdate();
    },
    {
      immediate: !0
    }
  ), ee(
    () => X(e),
    (l) => {
      n.setOptions({
        ...l,
        onChange: (r, a) => {
          var i;
          Et(t), (i = l.onChange) == null || i.call(l, r, a);
        }
      }), n._willUpdate(), Et(t);
    },
    {
      immediate: !0
    }
  ), An(o), t;
}
function ll(e) {
  return nl(
    h(() => ({
      observeElementRect: Yn,
      observeElementOffset: Jn,
      scrollToFn: Xn,
      ...X(e)
    }))
  );
}
function ol(e, n, t) {
  let o = w(t == null ? void 0 : t.value), l = h(() => e.value !== void 0);
  return [h(() => l.value ? e.value : o.value), function(r) {
    return l.value || (o.value = r), n == null ? void 0 : n(r);
  }];
}
let rl = Symbol("headlessui.useid"), al = 0;
function Z() {
  return Q(rl, () => `${++al}`)();
}
function x(e) {
  var n;
  if (e == null || e.value == null)
    return null;
  let t = (n = e.value.$el) != null ? n : e.value;
  return t instanceof Node ? t : null;
}
function q(e, n, ...t) {
  if (e in n) {
    let l = n[e];
    return typeof l == "function" ? l(...t) : l;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, q), o;
}
var il = Object.defineProperty, ul = (e, n, t) => n in e ? il(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ct = (e, n, t) => (ul(e, typeof n != "symbol" ? n + "" : n, t), t);
class sl {
  constructor() {
    Ct(this, "current", this.detect()), Ct(this, "currentId", 0);
  }
  set(n) {
    this.current !== n && (this.currentId = 0, this.current = n);
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
let Me = new sl();
function fe(e) {
  if (Me.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let n = x(e);
    if (n)
      return n.ownerDocument;
  }
  return document;
}
let et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ue = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ue || {}), zt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(zt || {}), dl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(dl || {});
function Ht(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(et)).sort((n, t) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ct = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ct || {});
function ft(e, n = 0) {
  var t;
  return e === ((t = fe(e)) == null ? void 0 : t.body) ? !1 : q(n, { [0]() {
    return e.matches(et);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(et))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
function Ut(e) {
  let n = fe(e);
  J(() => {
    n && !ft(n.activeElement, 0) && be(e);
  });
}
var cl = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(cl || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function be(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let fl = ["textarea", "input"].join(",");
function vl(e) {
  var n, t;
  return (t = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, fl)) != null ? t : !1;
}
function vt(e, n = (t) => t) {
  return e.slice().sort((t, o) => {
    let l = n(t), r = n(o);
    if (l === null || r === null)
      return 0;
    let a = l.compareDocumentPosition(r);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function pl(e, n) {
  return Fe(Ht(), n, { relativeTo: e });
}
function Fe(e, n, { sorted: t = !0, relativeTo: o = null, skipElements: l = [] } = {}) {
  var r;
  let a = (r = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? r : document, i = Array.isArray(e) ? t ? vt(e) : e : Ht(e);
  l.length > 0 && i.length > 1 && (i = i.filter((p) => !l.includes(p))), o = o != null ? o : a.activeElement;
  let u = (() => {
    if (n & 5)
      return 1;
    if (n & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), s = (() => {
    if (n & 1)
      return 0;
    if (n & 2)
      return Math.max(0, i.indexOf(o)) - 1;
    if (n & 4)
      return Math.max(0, i.indexOf(o)) + 1;
    if (n & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = n & 32 ? { preventScroll: !0 } : {}, f = 0, d = i.length, v;
  do {
    if (f >= d || f + d <= 0)
      return 0;
    let p = s + f;
    if (n & 16)
      p = (p + d) % d;
    else {
      if (p < 0)
        return 3;
      if (p >= d)
        return 1;
    }
    v = i[p], v == null || v.focus(c), f += u;
  } while (v !== a.activeElement);
  return n & 6 && vl(v) && v.select(), 2;
}
function Gt() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function ml() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Wt() {
  return Gt() || ml();
}
function $e(e, n, t) {
  Me.isServer || K((o) => {
    document.addEventListener(e, n, t), o(() => document.removeEventListener(e, n, t));
  });
}
function Kt(e, n, t) {
  Me.isServer || K((o) => {
    window.addEventListener(e, n, t), o(() => window.removeEventListener(e, n, t));
  });
}
function pt(e, n, t = h(() => !0)) {
  function o(r, a) {
    if (!t.value || r.defaultPrevented)
      return;
    let i = a(r);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let u = function s(c) {
      return typeof c == "function" ? s(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let s of u) {
      if (s === null)
        continue;
      let c = s instanceof HTMLElement ? s : x(s);
      if (c != null && c.contains(i) || r.composed && r.composedPath().includes(c))
        return;
    }
    return !ft(i, ct.Loose) && i.tabIndex !== -1 && r.preventDefault(), n(r, i);
  }
  let l = w(null);
  $e("pointerdown", (r) => {
    var a, i;
    t.value && (l.value = ((i = (a = r.composedPath) == null ? void 0 : a.call(r)) == null ? void 0 : i[0]) || r.target);
  }, !0), $e("mousedown", (r) => {
    var a, i;
    t.value && (l.value = ((i = (a = r.composedPath) == null ? void 0 : a.call(r)) == null ? void 0 : i[0]) || r.target);
  }, !0), $e("click", (r) => {
    Wt() || l.value && (o(r, () => l.value), l.value = null);
  }, !0), $e("touchend", (r) => o(r, () => r.target instanceof HTMLElement ? r.target : null), !0), Kt("blur", (r) => o(r, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Pt(e, n) {
  if (e)
    return e;
  let t = n != null ? n : "button";
  if (typeof t == "string" && t.toLowerCase() === "button")
    return "button";
}
function qt(e, n) {
  let t = w(Pt(e.value.type, e.value.as));
  return W(() => {
    t.value = Pt(e.value.type, e.value.as);
  }), K(() => {
    var o;
    t.value || x(n) && x(n) instanceof HTMLButtonElement && !((o = x(n)) != null && o.hasAttribute("type")) && (t.value = "button");
  }), t;
}
function Rt(e) {
  return [e.screenX, e.screenY];
}
function Yt() {
  let e = w([-1, -1]);
  return { wasMoved(n) {
    let t = Rt(n);
    return e.value[0] === t[0] && e.value[1] === t[1] ? !1 : (e.value = t, !0);
  }, update(n) {
    e.value = Rt(n);
  } };
}
function Qt({ container: e, accept: n, walk: t, enabled: o }) {
  K(() => {
    let l = e.value;
    if (!l || o !== void 0 && !o.value)
      return;
    let r = fe(e);
    if (!r)
      return;
    let a = Object.assign((u) => n(u), { acceptNode: n }), i = r.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, a, !1);
    for (; i.nextNode(); )
      t(i.currentNode);
  });
}
var se = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(se || {}), me = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(me || {});
function $({ visible: e = !0, features: n = 0, ourProps: t, theirProps: o, ...l }) {
  var r;
  let a = Zt(o, t), i = Object.assign(l, { props: a });
  if (e || n & 2 && a.static)
    return qe(i);
  if (n & 1) {
    let u = (r = a.unmount) == null || r ? 0 : 1;
    return q(u, { [0]() {
      return null;
    }, [1]() {
      return qe({ ...l, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return qe(i);
}
function qe({ props: e, attrs: n, slots: t, slot: o, name: l }) {
  var r, a;
  let { as: i, ...u } = ke(e, ["unmount", "static"]), s = (r = t.default) == null ? void 0 : r.call(t, o), c = {};
  if (o) {
    let f = !1, d = [];
    for (let [v, p] of Object.entries(o))
      typeof p == "boolean" && (f = !0), p === !0 && d.push(v);
    f && (c["data-headlessui-state"] = d.join(" "));
  }
  if (i === "template") {
    if (s = Jt(s != null ? s : []), Object.keys(u).length > 0 || Object.keys(n).length > 0) {
      let [f, ...d] = s != null ? s : [];
      if (!bl(f) || d.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(n)).map((m) => m.trim()).filter((m, O, y) => y.indexOf(m) === O).sort((m, O) => m.localeCompare(O)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let v = Zt((a = f.props) != null ? a : {}, u, c), p = Bt(f, v, !0);
      for (let m in v)
        m.startsWith("on") && (p.props || (p.props = {}), p.props[m] = v[m]);
      return p;
    }
    return Array.isArray(s) && s.length === 1 ? s[0] : s;
  }
  return U(i, Object.assign({}, u, c), { default: () => s });
}
function Jt(e) {
  return e.flatMap((n) => n.type === ge ? Jt(n.children) : [n]);
}
function Zt(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let n = {}, t = {};
  for (let o of e)
    for (let l in o)
      l.startsWith("on") && typeof o[l] == "function" ? (t[l] != null || (t[l] = []), t[l].push(o[l])) : n[l] = o[l];
  if (n.disabled || n["aria-disabled"])
    return Object.assign(n, Object.fromEntries(Object.keys(t).map((o) => [o, void 0])));
  for (let o in t)
    Object.assign(n, { [o](l, ...r) {
      let a = t[o];
      for (let i of a) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        i(l, ...r);
      }
    } });
  return n;
}
function hl(e) {
  let n = Object.assign({}, e);
  for (let t in n)
    n[t] === void 0 && delete n[t];
  return n;
}
function ke(e, n = []) {
  let t = Object.assign({}, e);
  for (let o of n)
    o in t && delete t[o];
  return t;
}
function bl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Ae = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ae || {});
let He = P({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: t }) {
  return () => {
    var o;
    let { features: l, ...r } = e, a = { "aria-hidden": (l & 2) === 2 ? !0 : (o = r["aria-hidden"]) != null ? o : void 0, hidden: (l & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return $({ ourProps: a, theirProps: r, slot: {}, attrs: t, slots: n, name: "Hidden" });
  };
} }), Xt = Symbol("Context");
var G = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(G || {});
function gl() {
  return Le() !== null;
}
function Le() {
  return Q(Xt, null);
}
function mt(e) {
  te(Xt, e);
}
var A = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(A || {});
function yl(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let de = [];
yl(() => {
  function e(n) {
    n.target instanceof HTMLElement && n.target !== document.body && de[0] !== n.target && (de.unshift(n.target), de = de.filter((t) => t != null && t.isConnected), de.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function xl(e) {
  throw new Error("Unexpected object: " + e);
}
var k = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(k || {});
function tt(e, n) {
  let t = n.resolveItems();
  if (t.length <= 0)
    return null;
  let o = n.resolveActiveIndex(), l = o != null ? o : -1;
  switch (e.focus) {
    case 0: {
      for (let r = 0; r < t.length; ++r)
        if (!n.resolveDisabled(t[r], r, t))
          return r;
      return o;
    }
    case 1: {
      l === -1 && (l = t.length);
      for (let r = l - 1; r >= 0; --r)
        if (!n.resolveDisabled(t[r], r, t))
          return r;
      return o;
    }
    case 2: {
      for (let r = l + 1; r < t.length; ++r)
        if (!n.resolveDisabled(t[r], r, t))
          return r;
      return o;
    }
    case 3: {
      for (let r = t.length - 1; r >= 0; --r)
        if (!n.resolveDisabled(t[r], r, t))
          return r;
      return o;
    }
    case 4: {
      for (let r = 0; r < t.length; ++r)
        if (n.resolveId(t[r], r, t) === e.id)
          return r;
      return o;
    }
    case 5:
      return null;
    default:
      xl(e);
  }
}
function ht(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((n) => setTimeout(() => {
    throw n;
  }));
}
function we() {
  let e = [], n = { addEventListener(t, o, l, r) {
    return t.addEventListener(o, l, r), n.add(() => t.removeEventListener(o, l, r));
  }, requestAnimationFrame(...t) {
    let o = requestAnimationFrame(...t);
    n.add(() => cancelAnimationFrame(o));
  }, nextFrame(...t) {
    n.requestAnimationFrame(() => {
      n.requestAnimationFrame(...t);
    });
  }, setTimeout(...t) {
    let o = setTimeout(...t);
    n.add(() => clearTimeout(o));
  }, microTask(...t) {
    let o = { current: !0 };
    return ht(() => {
      o.current && t[0]();
    }), n.add(() => {
      o.current = !1;
    });
  }, style(t, o, l) {
    let r = t.style.getPropertyValue(o);
    return Object.assign(t.style, { [o]: l }), this.add(() => {
      Object.assign(t.style, { [o]: r });
    });
  }, group(t) {
    let o = we();
    return t(o), this.add(() => o.dispose());
  }, add(t) {
    return e.push(t), () => {
      let o = e.indexOf(t);
      if (o >= 0)
        for (let l of e.splice(o, 1))
          l();
    };
  }, dispose() {
    for (let t of e.splice(0))
      t();
  } };
  return n;
}
function en(e = {}, n = null, t = []) {
  for (let [o, l] of Object.entries(e))
    nn(t, tn(n, o), l);
  return t;
}
function tn(e, n) {
  return e ? e + "[" + n + "]" : n;
}
function nn(e, n, t) {
  if (Array.isArray(t))
    for (let [o, l] of t.entries())
      nn(e, tn(n, o.toString()), l);
  else
    t instanceof Date ? e.push([n, t.toISOString()]) : typeof t == "boolean" ? e.push([n, t ? "1" : "0"]) : typeof t == "string" ? e.push([n, t]) : typeof t == "number" ? e.push([n, `${t}`]) : t == null ? e.push([n, ""]) : en(t, n, e);
}
function wl(e, n) {
  return e === n;
}
var Sl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Sl || {}), Ol = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Ol || {}), El = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(El || {});
let ln = Symbol("ComboboxContext");
function Se(e) {
  let n = Q(ln, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Se), t;
  }
  return n;
}
let on = Symbol("VirtualContext"), Il = P({ name: "VirtualProvider", setup(e, { slots: n }) {
  let t = Se("VirtualProvider"), o = h(() => {
    let i = x(t.optionsRef);
    if (!i)
      return { start: 0, end: 0 };
    let u = window.getComputedStyle(i);
    return { start: parseFloat(u.paddingBlockStart || u.paddingTop), end: parseFloat(u.paddingBlockEnd || u.paddingBottom) };
  }), l = ll(h(() => ({ scrollPaddingStart: o.value.start, scrollPaddingEnd: o.value.end, count: t.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return x(t.optionsRef);
  }, overscan: 12 }))), r = h(() => {
    var i;
    return (i = t.virtual.value) == null ? void 0 : i.options;
  }), a = w(0);
  return ee([r], () => {
    a.value += 1;
  }), te(on, t.virtual.value ? l : null), () => [U("div", { style: { position: "relative", width: "100%", height: `${l.value.getTotalSize()}px` }, ref: (i) => {
    if (i) {
      if (typeof process < "u" && process.env.JEST_WORKER_ID !== void 0 || t.activationTrigger.value === 0)
        return;
      t.activeOptionIndex.value !== null && t.virtual.value.options.length > t.activeOptionIndex.value && l.value.scrollToIndex(t.activeOptionIndex.value);
    }
  } }, l.value.getVirtualItems().map((i) => Bt(n.default({ option: t.virtual.value.options[i.index], open: t.comboboxState.value === 0 })[0], { key: `${a.value}-${i.index}`, "data-index": i.index, "aria-setsize": t.virtual.value.options.length, "aria-posinset": i.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${i.start}px)`, overflowAnchor: "none" } })))];
} });
P({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], nullable: !0, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 }, immediate: { type: [Boolean], default: !1 }, virtual: { type: Object, default: null } }, inheritAttrs: !1, setup(e, { slots: n, attrs: t, emit: o }) {
  let l = w(1), r = w(null), a = w(null), i = w(null), u = w(null), s = w({ static: !1, hold: !1 }), c = w([]), f = w(null), d = w(2), v = w(!1);
  function p(g = (E) => E) {
    let E = f.value !== null ? c.value[f.value] : null, C = g(c.value.slice()), T = C.length > 0 && C[0].dataRef.order.value !== null ? C.sort((F, z) => F.dataRef.order.value - z.dataRef.order.value) : vt(C, (F) => x(F.dataRef.domRef)), M = E ? T.indexOf(E) : null;
    return M === -1 && (M = null), { options: T, activeOptionIndex: M };
  }
  let m = h(() => e.multiple ? 1 : 0), O = h(() => e.nullable), [y, I] = ol(h(() => e.modelValue), (g) => o("update:modelValue", g), h(() => e.defaultValue)), B = h(() => y.value === void 0 ? q(m.value, { [1]: [], [0]: void 0 }) : y.value), S = null, D = null;
  function R(g) {
    return q(m.value, { [0]() {
      return I == null ? void 0 : I(g);
    }, [1]: () => {
      let E = pe(b.value.value).slice(), C = pe(g), T = E.findIndex((M) => b.compare(C, pe(M)));
      return T === -1 ? E.push(C) : E.splice(T, 1), I == null ? void 0 : I(E);
    } });
  }
  let N = h(() => {
  });
  ee([N], ([g], [E]) => {
    if (b.virtual.value && g && E && f.value !== null) {
      let C = g.indexOf(E[f.value]);
      C !== -1 ? f.value = C : f.value = null;
    }
  });
  let b = { comboboxState: l, value: B, mode: m, compare(g, E) {
    if (typeof e.by == "string") {
      let C = e.by;
      return (g == null ? void 0 : g[C]) === (E == null ? void 0 : E[C]);
    }
    return e.by === null ? wl(g, E) : e.by(g, E);
  }, calculateIndex(g) {
    return b.virtual.value ? e.by === null ? b.virtual.value.options.indexOf(g) : b.virtual.value.options.findIndex((E) => b.compare(E, g)) : c.value.findIndex((E) => b.compare(E.dataRef.value, g));
  }, defaultValue: h(() => e.defaultValue), nullable: O, immediate: h(() => !1), virtual: h(() => null), inputRef: a, labelRef: r, buttonRef: i, optionsRef: u, disabled: h(() => e.disabled), options: c, change(g) {
    I(g);
  }, activeOptionIndex: h(() => {
    if (v.value && f.value === null && (b.virtual.value ? b.virtual.value.options.length > 0 : c.value.length > 0)) {
      if (b.virtual.value) {
        let E = b.virtual.value.options.findIndex((C) => {
          var T;
          return !((T = b.virtual.value) != null && T.disabled(C));
        });
        if (E !== -1)
          return E;
      }
      let g = c.value.findIndex((E) => !E.dataRef.disabled);
      if (g !== -1)
        return g;
    }
    return f.value;
  }), activationTrigger: d, optionsPropsRef: s, closeCombobox() {
    v.value = !1, !e.disabled && l.value !== 1 && (l.value = 1, f.value = null);
  }, openCombobox() {
    if (v.value = !0, !e.disabled && l.value !== 0) {
      if (b.value.value) {
        let g = b.calculateIndex(b.value.value);
        g !== -1 && (f.value = g);
      }
      l.value = 0;
    }
  }, setActivationTrigger(g) {
    d.value = g;
  }, goToOption(g, E, C) {
    v.value = !1, S !== null && cancelAnimationFrame(S), S = requestAnimationFrame(() => {
      if (e.disabled || u.value && !s.value.static && l.value === 1)
        return;
      if (b.virtual.value) {
        f.value = g === k.Specific ? E : tt({ focus: g }, { resolveItems: () => b.virtual.value.options, resolveActiveIndex: () => {
          var F, z;
          return (z = (F = b.activeOptionIndex.value) != null ? F : b.virtual.value.options.findIndex((ie) => {
            var ve;
            return !((ve = b.virtual.value) != null && ve.disabled(ie));
          })) != null ? z : null;
        }, resolveDisabled: (F) => b.virtual.value.disabled(F), resolveId() {
          throw new Error("Function not implemented.");
        } }), d.value = C != null ? C : 2;
        return;
      }
      let T = p();
      if (T.activeOptionIndex === null) {
        let F = T.options.findIndex((z) => !z.dataRef.disabled);
        F !== -1 && (T.activeOptionIndex = F);
      }
      let M = g === k.Specific ? E : tt({ focus: g }, { resolveItems: () => T.options, resolveActiveIndex: () => T.activeOptionIndex, resolveId: (F) => F.id, resolveDisabled: (F) => F.dataRef.disabled });
      f.value = M, d.value = C != null ? C : 2, c.value = T.options;
    });
  }, selectOption(g) {
    let E = c.value.find((T) => T.id === g);
    if (!E)
      return;
    let { dataRef: C } = E;
    R(C.value);
  }, selectActiveOption() {
    if (b.activeOptionIndex.value !== null) {
      if (b.virtual.value)
        R(b.virtual.value.options[b.activeOptionIndex.value]);
      else {
        let { dataRef: g } = c.value[b.activeOptionIndex.value];
        R(g.value);
      }
      b.goToOption(k.Specific, b.activeOptionIndex.value);
    }
  }, registerOption(g, E) {
    let C = $t({ id: g, dataRef: E });
    if (b.virtual.value) {
      c.value.push(C);
      return;
    }
    D && cancelAnimationFrame(D);
    let T = p((M) => (M.push(C), M));
    f.value === null && b.isSelected(E.value.value) && (T.activeOptionIndex = T.options.indexOf(C)), c.value = T.options, f.value = T.activeOptionIndex, d.value = 2, T.options.some((M) => !x(M.dataRef.domRef)) && (D = requestAnimationFrame(() => {
      let M = p();
      c.value = M.options, f.value = M.activeOptionIndex;
    }));
  }, unregisterOption(g, E) {
    if (S !== null && cancelAnimationFrame(S), E && (v.value = !0), b.virtual.value) {
      c.value = c.value.filter((T) => T.id !== g);
      return;
    }
    let C = p((T) => {
      let M = T.findIndex((F) => F.id === g);
      return M !== -1 && T.splice(M, 1), T;
    });
    c.value = C.options, f.value = C.activeOptionIndex, d.value = 2;
  }, isSelected(g) {
    return q(m.value, { [0]: () => b.compare(pe(b.value.value), pe(g)), [1]: () => pe(b.value.value).some((E) => b.compare(pe(E), pe(g))) });
  }, isActive(g) {
    return f.value === b.calculateIndex(g);
  } };
  pt([a, i, u], () => b.closeCombobox(), h(() => l.value === 0)), te(ln, b), mt(h(() => q(l.value, { [0]: G.Open, [1]: G.Closed })));
  let V = h(() => {
    var g;
    return (g = x(a)) == null ? void 0 : g.closest("form");
  });
  return W(() => {
    ee([V], () => {
      if (!V.value || e.defaultValue === void 0)
        return;
      function g() {
        b.change(e.defaultValue);
      }
      return V.value.addEventListener("reset", g), () => {
        var E;
        (E = V.value) == null || E.removeEventListener("reset", g);
      };
    }, { immediate: !0 });
  }), () => {
    var g, E, C;
    let { name: T, disabled: M, form: F, ...z } = e, ie = { open: l.value === 0, disabled: M, activeIndex: b.activeOptionIndex.value, activeOption: b.activeOptionIndex.value === null ? null : b.virtual.value ? b.virtual.value.options[(g = b.activeOptionIndex.value) != null ? g : 0] : (C = (E = b.options.value[b.activeOptionIndex.value]) == null ? void 0 : E.dataRef.value) != null ? C : null, value: B.value };
    return U(ge, [...T != null && B.value != null ? en({ [T]: B.value }).map(([ve, _e]) => U(He, hl({ features: Ae.Hidden, key: ve, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: F, disabled: M, name: ve, value: _e }))) : [], $({ theirProps: { ...t, ...ke(z, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: ie, slots: n, attrs: t, name: "Combobox" })]);
  };
} });
P({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t }) {
  var o;
  let l = (o = e.id) != null ? o : `headlessui-combobox-label-${Z()}`, r = Se("ComboboxLabel");
  function a() {
    var i;
    (i = x(r.inputRef)) == null || i.focus({ preventScroll: !0 });
  }
  return () => {
    let i = { open: r.comboboxState.value === 0, disabled: r.disabled.value }, { ...u } = e, s = { id: l, ref: r.labelRef, onClick: a };
    return $({ ourProps: s, theirProps: u, slot: i, attrs: n, slots: t, name: "ComboboxLabel" });
  };
} });
P({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let r = (l = e.id) != null ? l : `headlessui-combobox-button-${Z()}`, a = Se("ComboboxButton");
  o({ el: a.buttonRef, $el: a.buttonRef });
  function i(c) {
    a.disabled.value || (a.comboboxState.value === 0 ? a.closeCombobox() : (c.preventDefault(), a.openCombobox()), J(() => {
      var f;
      return (f = x(a.inputRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    }));
  }
  function u(c) {
    switch (c.key) {
      case A.ArrowDown:
        c.preventDefault(), c.stopPropagation(), a.comboboxState.value === 1 && a.openCombobox(), J(() => {
          var f;
          return (f = a.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case A.ArrowUp:
        c.preventDefault(), c.stopPropagation(), a.comboboxState.value === 1 && (a.openCombobox(), J(() => {
          a.value.value || a.goToOption(k.Last);
        })), J(() => {
          var f;
          return (f = a.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case A.Escape:
        if (a.comboboxState.value !== 0)
          return;
        c.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && c.stopPropagation(), a.closeCombobox(), J(() => {
          var f;
          return (f = a.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let s = qt(h(() => ({ as: e.as, type: n.type })), a.buttonRef);
  return () => {
    var c, f;
    let d = { open: a.comboboxState.value === 0, disabled: a.disabled.value, value: a.value.value }, { ...v } = e, p = { ref: a.buttonRef, id: r, type: s.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (c = x(a.optionsRef)) == null ? void 0 : c.id, "aria-expanded": a.comboboxState.value === 0, "aria-labelledby": a.labelRef.value ? [(f = x(a.labelRef)) == null ? void 0 : f.id, r].join(" ") : void 0, disabled: a.disabled.value === !0 ? !0 : void 0, onKeydown: u, onClick: i };
    return $({ ourProps: p, theirProps: v, slot: d, attrs: n, slots: t, name: "ComboboxButton" });
  };
} });
P({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: null } }, emits: { change: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: l }) {
  var r;
  let a = (r = e.id) != null ? r : `headlessui-combobox-input-${Z()}`, i = Se("ComboboxInput"), u = h(() => fe(x(i.inputRef))), s = { value: !1 };
  l({ el: i.inputRef, $el: i.inputRef });
  function c() {
    i.change(null);
    let S = x(i.optionsRef);
    S && (S.scrollTop = 0), i.goToOption(k.Nothing);
  }
  let f = h(() => {
    var S;
    let D = i.value.value;
    return x(i.inputRef) ? typeof e.displayValue < "u" && D !== void 0 ? (S = e.displayValue(D)) != null ? S : "" : typeof D == "string" ? D : "" : "";
  });
  W(() => {
    ee([f, i.comboboxState, u], ([S, D], [R, N]) => {
      if (s.value)
        return;
      let b = x(i.inputRef);
      b && ((N === 0 && D === 1 || S !== R) && (b.value = S), requestAnimationFrame(() => {
        var V;
        if (s.value || !b || ((V = u.value) == null ? void 0 : V.activeElement) !== b)
          return;
        let { selectionStart: g, selectionEnd: E } = b;
        Math.abs((E != null ? E : 0) - (g != null ? g : 0)) === 0 && g === 0 && b.setSelectionRange(b.value.length, b.value.length);
      }));
    }, { immediate: !0 }), ee([i.comboboxState], ([S], [D]) => {
      if (S === 0 && D === 1) {
        if (s.value)
          return;
        let R = x(i.inputRef);
        if (!R)
          return;
        let N = R.value, { selectionStart: b, selectionEnd: V, selectionDirection: g } = R;
        R.value = "", R.value = N, g !== null ? R.setSelectionRange(b, V, g) : R.setSelectionRange(b, V);
      }
    });
  });
  let d = w(!1);
  function v() {
    d.value = !0;
  }
  function p() {
    we().nextFrame(() => {
      d.value = !1;
    });
  }
  function m(S) {
    switch (s.value = !0, S.key) {
      case A.Enter:
        if (s.value = !1, i.comboboxState.value !== 0 || d.value)
          return;
        if (S.preventDefault(), S.stopPropagation(), i.activeOptionIndex.value === null) {
          i.closeCombobox();
          return;
        }
        i.selectActiveOption(), i.mode.value === 0 && i.closeCombobox();
        break;
      case A.ArrowDown:
        return s.value = !1, S.preventDefault(), S.stopPropagation(), q(i.comboboxState.value, { [0]: () => i.goToOption(k.Next), [1]: () => i.openCombobox() });
      case A.ArrowUp:
        return s.value = !1, S.preventDefault(), S.stopPropagation(), q(i.comboboxState.value, { [0]: () => i.goToOption(k.Previous), [1]: () => {
          i.openCombobox(), J(() => {
            i.value.value || i.goToOption(k.Last);
          });
        } });
      case A.Home:
        if (S.shiftKey)
          break;
        return s.value = !1, S.preventDefault(), S.stopPropagation(), i.goToOption(k.First);
      case A.PageUp:
        return s.value = !1, S.preventDefault(), S.stopPropagation(), i.goToOption(k.First);
      case A.End:
        if (S.shiftKey)
          break;
        return s.value = !1, S.preventDefault(), S.stopPropagation(), i.goToOption(k.Last);
      case A.PageDown:
        return s.value = !1, S.preventDefault(), S.stopPropagation(), i.goToOption(k.Last);
      case A.Escape:
        if (s.value = !1, i.comboboxState.value !== 0)
          return;
        S.preventDefault(), i.optionsRef.value && !i.optionsPropsRef.value.static && S.stopPropagation(), i.nullable.value && i.mode.value === 0 && i.value.value === null && c(), i.closeCombobox();
        break;
      case A.Tab:
        if (s.value = !1, i.comboboxState.value !== 0)
          return;
        i.mode.value === 0 && i.activationTrigger.value !== 1 && i.selectActiveOption(), i.closeCombobox();
        break;
    }
  }
  function O(S) {
    n("change", S), i.nullable.value && i.mode.value === 0 && S.target.value === "" && c(), i.openCombobox();
  }
  function y(S) {
    var D, R, N;
    let b = (D = S.relatedTarget) != null ? D : de.find((V) => V !== S.currentTarget);
    if (s.value = !1, !((R = x(i.optionsRef)) != null && R.contains(b)) && !((N = x(i.buttonRef)) != null && N.contains(b)) && i.comboboxState.value === 0)
      return S.preventDefault(), i.mode.value === 0 && (i.nullable.value && i.value.value === null ? c() : i.activationTrigger.value !== 1 && i.selectActiveOption()), i.closeCombobox();
  }
  function I(S) {
    var D, R, N;
    let b = (D = S.relatedTarget) != null ? D : de.find((V) => V !== S.currentTarget);
    (R = x(i.buttonRef)) != null && R.contains(b) || (N = x(i.optionsRef)) != null && N.contains(b) || i.disabled.value || i.immediate.value && i.comboboxState.value !== 0 && (i.openCombobox(), we().nextFrame(() => {
      i.setActivationTrigger(1);
    }));
  }
  let B = h(() => {
    var S, D, R, N;
    return (N = (R = (D = e.defaultValue) != null ? D : i.defaultValue.value !== void 0 ? (S = e.displayValue) == null ? void 0 : S.call(e, i.defaultValue.value) : null) != null ? R : i.defaultValue.value) != null ? N : "";
  });
  return () => {
    var S, D, R, N, b, V, g;
    let E = { open: i.comboboxState.value === 0 }, { displayValue: C, onChange: T, ...M } = e, F = { "aria-controls": (S = i.optionsRef.value) == null ? void 0 : S.id, "aria-expanded": i.comboboxState.value === 0, "aria-activedescendant": i.activeOptionIndex.value === null ? void 0 : i.virtual.value ? (D = i.options.value.find((z) => !i.virtual.value.disabled(z.dataRef.value) && i.compare(z.dataRef.value, i.virtual.value.options[i.activeOptionIndex.value]))) == null ? void 0 : D.id : (R = i.options.value[i.activeOptionIndex.value]) == null ? void 0 : R.id, "aria-labelledby": (V = (N = x(i.labelRef)) == null ? void 0 : N.id) != null ? V : (b = x(i.buttonRef)) == null ? void 0 : b.id, "aria-autocomplete": "list", id: a, onCompositionstart: v, onCompositionend: p, onKeydown: m, onInput: O, onFocus: I, onBlur: y, role: "combobox", type: (g = t.type) != null ? g : "text", tabIndex: 0, ref: i.inputRef, defaultValue: B.value, disabled: i.disabled.value === !0 ? !0 : void 0 };
    return $({ ourProps: F, theirProps: M, slot: E, attrs: t, slots: o, features: se.RenderStrategy | se.Static, name: "ComboboxInput" });
  };
} });
P({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let l = Se("ComboboxOptions"), r = `headlessui-combobox-options-${Z()}`;
  o({ el: l.optionsRef, $el: l.optionsRef }), K(() => {
    l.optionsPropsRef.value.static = e.static;
  }), K(() => {
    l.optionsPropsRef.value.hold = e.hold;
  });
  let a = Le(), i = h(() => a !== null ? (a.value & G.Open) === G.Open : l.comboboxState.value === 0);
  return Qt({ container: h(() => x(l.optionsRef)), enabled: h(() => l.comboboxState.value === 0), accept(u) {
    return u.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } }), () => {
    var u, s, c;
    let f = { open: l.comboboxState.value === 0 }, d = { "aria-labelledby": (c = (u = x(l.labelRef)) == null ? void 0 : u.id) != null ? c : (s = x(l.buttonRef)) == null ? void 0 : s.id, id: r, ref: l.optionsRef, role: "listbox", "aria-multiselectable": l.mode.value === 1 ? !0 : void 0 }, v = ke(e, ["hold"]);
    return $({ ourProps: d, theirProps: v, slot: f, attrs: n, slots: l.virtual.value && l.comboboxState.value === 0 ? { ...t, default: () => [U(Il, {}, t.default)] } : t, features: se.RenderStrategy | se.Static, visible: i.value, name: "ComboboxOptions" });
  };
} });
P({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, order: { type: [Number], default: null } }, setup(e, { slots: n, attrs: t, expose: o }) {
  let l = Se("ComboboxOption"), r = `headlessui-combobox-option-${Z()}`, a = w(null);
  o({ el: a, $el: a });
  let i = h(() => {
    var y;
    return l.virtual.value ? l.activeOptionIndex.value === l.calculateIndex(e.value) : l.activeOptionIndex.value === null ? !1 : ((y = l.options.value[l.activeOptionIndex.value]) == null ? void 0 : y.id) === r;
  }), u = h(() => l.isSelected(e.value)), s = Q(on, null), c = h(() => ({ disabled: e.disabled, value: e.value, domRef: a, order: h(() => e.order) }));
  W(() => l.registerOption(r, c)), ne(() => l.unregisterOption(r, i.value)), K(() => {
    let y = x(a);
    y && (s == null || s.value.measureElement(y));
  }), K(() => {
    l.comboboxState.value === 0 && i.value && (l.virtual.value || l.activationTrigger.value !== 0 && J(() => {
      var y, I;
      return (I = (y = x(a)) == null ? void 0 : y.scrollIntoView) == null ? void 0 : I.call(y, { block: "nearest" });
    }));
  });
  function f(y) {
    var I;
    if (e.disabled || (I = l.virtual.value) != null && I.disabled(e.value))
      return y.preventDefault();
    l.selectOption(r), Wt() || requestAnimationFrame(() => {
      var B;
      return (B = x(l.inputRef)) == null ? void 0 : B.focus({ preventScroll: !0 });
    }), l.mode.value === 0 && requestAnimationFrame(() => l.closeCombobox());
  }
  function d() {
    var y;
    if (e.disabled || (y = l.virtual.value) != null && y.disabled(e.value))
      return l.goToOption(k.Nothing);
    let I = l.calculateIndex(e.value);
    l.goToOption(k.Specific, I);
  }
  let v = Yt();
  function p(y) {
    v.update(y);
  }
  function m(y) {
    var I;
    if (!v.wasMoved(y) || e.disabled || (I = l.virtual.value) != null && I.disabled(e.value) || i.value)
      return;
    let B = l.calculateIndex(e.value);
    l.goToOption(k.Specific, B, 0);
  }
  function O(y) {
    var I;
    v.wasMoved(y) && (e.disabled || (I = l.virtual.value) != null && I.disabled(e.value) || i.value && (l.optionsPropsRef.value.hold || l.goToOption(k.Nothing)));
  }
  return () => {
    let { disabled: y } = e, I = { active: i.value, selected: u.value, disabled: y }, B = { id: r, ref: a, role: "option", tabIndex: y === !0 ? void 0 : -1, "aria-disabled": y === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onClick: f, onFocus: d, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: O, onMouseleave: O }, S = ke(e, ["order", "value"]);
    return $({ ourProps: B, theirProps: S, slot: I, attrs: t, slots: n, name: "ComboboxOption" });
  };
} });
function rn(e, n, t, o) {
  Me.isServer || K((l) => {
    e = e != null ? e : window, e.addEventListener(n, t, o), l(() => e.removeEventListener(n, t, o));
  });
}
var Re = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Re || {});
function Tl() {
  let e = w(0);
  return Kt("keydown", (n) => {
    n.key === "Tab" && (e.value = n.shiftKey ? 1 : 0);
  }), e;
}
function an(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let t of e.value) {
    let o = x(t);
    o instanceof HTMLElement && n.add(o);
  }
  return n;
}
var un = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(un || {});
let Ce = Object.assign(P({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: w(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let l = w(null);
  o({ el: l, $el: l });
  let r = h(() => fe(l)), a = w(!1);
  W(() => a.value = !0), ne(() => a.value = !1), Pl({ ownerDocument: r }, h(() => a.value && Boolean(e.features & 16)));
  let i = Rl({ ownerDocument: r, container: l, initialFocus: h(() => e.initialFocus) }, h(() => a.value && Boolean(e.features & 2)));
  Fl({ ownerDocument: r, container: l, containers: e.containers, previousActiveElement: i }, h(() => a.value && Boolean(e.features & 8)));
  let u = Tl();
  function s(v) {
    let p = x(l);
    !p || ((m) => m())(() => {
      q(u.value, { [Re.Forwards]: () => {
        Fe(p, ue.First, { skipElements: [v.relatedTarget] });
      }, [Re.Backwards]: () => {
        Fe(p, ue.Last, { skipElements: [v.relatedTarget] });
      } });
    });
  }
  let c = w(!1);
  function f(v) {
    v.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function d(v) {
    if (!a.value)
      return;
    let p = an(e.containers);
    x(l) instanceof HTMLElement && p.add(x(l));
    let m = v.relatedTarget;
    m instanceof HTMLElement && m.dataset.headlessuiFocusGuard !== "true" && (sn(p, m) || (c.value ? Fe(x(l), q(u.value, { [Re.Forwards]: () => ue.Next, [Re.Backwards]: () => ue.Previous }) | ue.WrapAround, { relativeTo: v.target }) : v.target instanceof HTMLElement && be(v.target)));
  }
  return () => {
    let v = {}, p = { ref: l, onKeydown: f, onFocusout: d }, { features: m, initialFocus: O, containers: y, ...I } = e;
    return U(ge, [Boolean(m & 4) && U(He, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: s, features: Ae.Focusable }), $({ ourProps: p, theirProps: { ...n, ...I }, slot: v, attrs: n, slots: t, name: "FocusTrap" }), Boolean(m & 4) && U(He, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: s, features: Ae.Focusable })]);
  };
} }), { features: un });
function Cl(e) {
  let n = w(de.slice());
  return ee([e], ([t], [o]) => {
    o === !0 && t === !1 ? ht(() => {
      n.value.splice(0);
    }) : o === !1 && t === !0 && (n.value = de.slice());
  }, { flush: "post" }), () => {
    var t;
    return (t = n.value.find((o) => o != null && o.isConnected)) != null ? t : null;
  };
}
function Pl({ ownerDocument: e }, n) {
  let t = Cl(n);
  W(() => {
    K(() => {
      var o, l;
      n.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((l = e.value) == null ? void 0 : l.body) && be(t());
    }, { flush: "post" });
  }), ne(() => {
    n.value && be(t());
  });
}
function Rl({ ownerDocument: e, container: n, initialFocus: t }, o) {
  let l = w(null), r = w(!1);
  return W(() => r.value = !0), ne(() => r.value = !1), W(() => {
    ee([n, t, o], (a, i) => {
      if (a.every((s, c) => (i == null ? void 0 : i[c]) === s) || !o.value)
        return;
      let u = x(n);
      u && ht(() => {
        var s, c;
        if (!r.value)
          return;
        let f = x(t), d = (s = e.value) == null ? void 0 : s.activeElement;
        if (f) {
          if (f === d) {
            l.value = d;
            return;
          }
        } else if (u.contains(d)) {
          l.value = d;
          return;
        }
        f ? be(f) : Fe(u, ue.First | ue.NoScroll) === zt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function Fl({ ownerDocument: e, container: n, containers: t, previousActiveElement: o }, l) {
  var r;
  rn((r = e.value) == null ? void 0 : r.defaultView, "focus", (a) => {
    if (!l.value)
      return;
    let i = an(t);
    x(n) instanceof HTMLElement && i.add(x(n));
    let u = o.value;
    if (!u)
      return;
    let s = a.target;
    s && s instanceof HTMLElement ? sn(i, s) ? (o.value = s, be(s)) : (a.preventDefault(), a.stopPropagation(), be(u)) : be(o.value);
  }, !0);
}
function sn(e, n) {
  for (let t of e)
    if (t.contains(n))
      return !0;
  return !1;
}
function Al(e) {
  let n = Nt(e.getSnapshot());
  return ne(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function Dl(e, n) {
  let t = e(), o = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t;
  }, subscribe(l) {
    return o.add(l), () => o.delete(l);
  }, dispatch(l, ...r) {
    let a = n[l].call(t, ...r);
    a && (t = a, o.forEach((i) => i()));
  } };
}
function Ml() {
  let e;
  return { before({ doc: n }) {
    var t;
    let o = n.documentElement;
    e = ((t = n.defaultView) != null ? t : window).innerWidth - o.clientWidth;
  }, after({ doc: n, d: t }) {
    let o = n.documentElement, l = o.clientWidth - o.offsetWidth, r = e - l;
    t.style(o, "paddingRight", `${r}px`);
  } };
}
function kl() {
  return Gt() ? { before({ doc: e, d: n, meta: t }) {
    function o(l) {
      return t.containers.flatMap((r) => r()).some((r) => r.contains(l));
    }
    n.microTask(() => {
      var l;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let i = we();
        i.style(e.documentElement, "scrollBehavior", "auto"), n.add(() => n.microTask(() => i.dispose()));
      }
      let r = (l = window.scrollY) != null ? l : window.pageYOffset, a = null;
      n.addEventListener(e, "click", (i) => {
        if (i.target instanceof HTMLElement)
          try {
            let u = i.target.closest("a");
            if (!u)
              return;
            let { hash: s } = new URL(u.href), c = e.querySelector(s);
            c && !o(c) && (a = c);
          } catch {
          }
      }, !0), n.addEventListener(e, "touchstart", (i) => {
        if (i.target instanceof HTMLElement)
          if (o(i.target)) {
            let u = i.target;
            for (; u.parentElement && o(u.parentElement); )
              u = u.parentElement;
            n.style(u, "overscrollBehavior", "contain");
          } else
            n.style(i.target, "touchAction", "none");
      }), n.addEventListener(e, "touchmove", (i) => {
        if (i.target instanceof HTMLElement)
          if (o(i.target)) {
            let u = i.target;
            for (; u.parentElement && u.dataset.headlessuiPortal !== "" && !(u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth); )
              u = u.parentElement;
            u.dataset.headlessuiPortal === "" && i.preventDefault();
          } else
            i.preventDefault();
      }, { passive: !1 }), n.add(() => {
        var i;
        let u = (i = window.scrollY) != null ? i : window.pageYOffset;
        r !== u && window.scrollTo(0, r), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
      });
    });
  } } : {};
}
function Ll() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function jl(e) {
  let n = {};
  for (let t of e)
    Object.assign(n, t(n));
  return n;
}
let xe = Dl(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var t;
  let o = (t = this.get(e)) != null ? t : { doc: e, count: 0, d: we(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(n), this.set(e, o), this;
}, POP(e, n) {
  let t = this.get(e);
  return t && (t.count--, t.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: t }) {
  let o = { doc: e, d: n, meta: jl(t) }, l = [kl(), Ml(), Ll()];
  l.forEach(({ before: r }) => r == null ? void 0 : r(o)), l.forEach(({ after: r }) => r == null ? void 0 : r(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
xe.subscribe(() => {
  let e = xe.getSnapshot(), n = /* @__PURE__ */ new Map();
  for (let [t] of e)
    n.set(t, t.documentElement.style.overflow);
  for (let t of e.values()) {
    let o = n.get(t.doc) === "hidden", l = t.count !== 0;
    (l && !o || !l && o) && xe.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && xe.dispatch("TEARDOWN", t);
  }
});
function _l(e, n, t) {
  let o = Al(xe), l = h(() => {
    let r = e.value ? o.value.get(e.value) : void 0;
    return r ? r.count > 0 : !1;
  });
  return ee([e, n], ([r, a], [i], u) => {
    if (!r || !a)
      return;
    xe.dispatch("PUSH", r, t);
    let s = !1;
    u(() => {
      s || (xe.dispatch("POP", i != null ? i : r, t), s = !0);
    });
  }, { immediate: !0 }), l;
}
let Ye = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map();
function Ft(e, n = w(!0)) {
  K((t) => {
    var o;
    if (!n.value)
      return;
    let l = x(e);
    if (!l)
      return;
    t(function() {
      var a;
      if (!l)
        return;
      let i = (a = Pe.get(l)) != null ? a : 1;
      if (i === 1 ? Pe.delete(l) : Pe.set(l, i - 1), i !== 1)
        return;
      let u = Ye.get(l);
      u && (u["aria-hidden"] === null ? l.removeAttribute("aria-hidden") : l.setAttribute("aria-hidden", u["aria-hidden"]), l.inert = u.inert, Ye.delete(l));
    });
    let r = (o = Pe.get(l)) != null ? o : 0;
    Pe.set(l, r + 1), r === 0 && (Ye.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }), l.setAttribute("aria-hidden", "true"), l.inert = !0);
  });
}
function Bl({ defaultContainers: e = [], portals: n, mainTreeNodeRef: t } = {}) {
  let o = w(null), l = fe(o);
  function r() {
    var a, i, u;
    let s = [];
    for (let c of e)
      c !== null && (c instanceof HTMLElement ? s.push(c) : "value" in c && c.value instanceof HTMLElement && s.push(c.value));
    if (n != null && n.value)
      for (let c of n.value)
        s.push(c);
    for (let c of (a = l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? a : [])
      c !== document.body && c !== document.head && c instanceof HTMLElement && c.id !== "headlessui-portal-root" && (c.contains(x(o)) || c.contains((u = (i = x(o)) == null ? void 0 : i.getRootNode()) == null ? void 0 : u.host) || s.some((f) => c.contains(f)) || s.push(c));
    return s;
  }
  return { resolveContainers: r, contains(a) {
    return r().some((i) => i.contains(a));
  }, mainTreeNodeRef: o, MainTreeNode() {
    return t != null ? null : U(He, { features: Ae.Hidden, ref: o });
  } };
}
let dn = Symbol("ForcePortalRootContext");
function $l() {
  return Q(dn, !1);
}
let nt = P({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: t }) {
  return te(dn, e.force), () => {
    let { force: o, ...l } = e;
    return $({ theirProps: l, ourProps: {}, slot: {}, slots: n, attrs: t, name: "ForcePortalRoot" });
  };
} }), cn = Symbol("StackContext");
var lt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(lt || {});
function Nl() {
  return Q(cn, () => {
  });
}
function Vl({ type: e, enabled: n, element: t, onUpdate: o }) {
  let l = Nl();
  function r(...a) {
    o == null || o(...a), l(...a);
  }
  W(() => {
    ee(n, (a, i) => {
      a ? r(0, e, t) : i === !0 && r(1, e, t);
    }, { immediate: !0, flush: "sync" });
  }), ne(() => {
    n.value && r(1, e, t);
  }), te(cn, r);
}
let fn = Symbol("DescriptionContext");
function zl() {
  let e = Q(fn, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Hl({ slot: e = w({}), name: n = "Description", props: t = {} } = {}) {
  let o = w([]);
  function l(r) {
    return o.value.push(r), () => {
      let a = o.value.indexOf(r);
      a !== -1 && o.value.splice(a, 1);
    };
  }
  return te(fn, { register: l, slot: e, name: n, props: t }), h(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
P({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t }) {
  var o;
  let l = (o = e.id) != null ? o : `headlessui-description-${Z()}`, r = zl();
  return W(() => ne(r.register(l))), () => {
    let { name: a = "Description", slot: i = w({}), props: u = {} } = r, { ...s } = e, c = { ...Object.entries(u).reduce((f, [d, v]) => Object.assign(f, { [d]: X(v) }), {}), id: l };
    return $({ ourProps: c, theirProps: s, slot: i.value, attrs: n, slots: t, name: a });
  };
} });
function Ul(e) {
  let n = fe(e);
  if (!n) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let t = n.getElementById("headlessui-portal-root");
  if (t)
    return t;
  let o = n.createElement("div");
  return o.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(o);
}
let vn = P({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t }) {
  let o = w(null), l = h(() => fe(o)), r = $l(), a = Q(pn, null), i = w(r === !0 || a == null ? Ul(o.value) : a.resolveTarget()), u = w(!1);
  W(() => {
    u.value = !0;
  }), K(() => {
    r || a != null && (i.value = a.resolveTarget());
  });
  let s = Q(ot, null), c = !1, f = Cn();
  return ee(o, () => {
    if (c || !s)
      return;
    let d = x(o);
    d && (ne(s.register(d), f), c = !0);
  }), ne(() => {
    var d, v;
    let p = (d = l.value) == null ? void 0 : d.getElementById("headlessui-portal-root");
    p && i.value === p && i.value.children.length <= 0 && ((v = i.value.parentElement) == null || v.removeChild(i.value));
  }), () => {
    if (!u.value || i.value === null)
      return null;
    let d = { ref: o, "data-headlessui-portal": "" };
    return U(Pn, { to: i.value }, $({ ourProps: d, theirProps: e, slot: {}, attrs: t, slots: n, name: "Portal" }));
  };
} }), ot = Symbol("PortalParentContext");
function Gl() {
  let e = Q(ot, null), n = w([]);
  function t(r) {
    return n.value.push(r), e && e.register(r), () => o(r);
  }
  function o(r) {
    let a = n.value.indexOf(r);
    a !== -1 && n.value.splice(a, 1), e && e.unregister(r);
  }
  let l = { register: t, unregister: o, portals: n };
  return [n, P({ name: "PortalWrapper", setup(r, { slots: a }) {
    return te(ot, l), () => {
      var i;
      return (i = a.default) == null ? void 0 : i.call(a);
    };
  } })];
}
let pn = Symbol("PortalGroupContext"), Wl = P({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: t }) {
  let o = $t({ resolveTarget() {
    return e.target;
  } });
  return te(pn, o), () => {
    let { target: l, ...r } = e;
    return $({ theirProps: r, ourProps: {}, slot: {}, attrs: n, slots: t, name: "PortalGroup" });
  };
} });
var Kl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Kl || {});
let rt = Symbol("DialogContext");
function je(e) {
  let n = Q(rt, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, je), t;
  }
  return n;
}
let Ne = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
P({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ne }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: l }) {
  var r, a;
  let i = (r = e.id) != null ? r : `headlessui-dialog-${Z()}`, u = w(!1);
  W(() => {
    u.value = !0;
  });
  let s = !1, c = h(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (s || (s = !0, console.warn(`Invalid role [${c}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), f = w(0), d = Le(), v = h(() => e.open === Ne && d !== null ? (d.value & G.Open) === G.Open : e.open), p = w(null), m = h(() => fe(p));
  if (l({ el: p, $el: p }), !(e.open !== Ne || d !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof v.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${v.value === Ne ? void 0 : e.open}`);
  let O = h(() => u.value && v.value ? 0 : 1), y = h(() => O.value === 0), I = h(() => f.value > 1), B = Q(rt, null) !== null, [S, D] = Gl(), { resolveContainers: R, mainTreeNodeRef: N, MainTreeNode: b } = Bl({ portals: S, defaultContainers: [h(() => {
    var j;
    return (j = ie.panelRef.value) != null ? j : p.value;
  })] }), V = h(() => I.value ? "parent" : "leaf"), g = h(() => d !== null ? (d.value & G.Closing) === G.Closing : !1), E = h(() => B || g.value ? !1 : y.value), C = h(() => {
    var j, H, le;
    return (le = Array.from((H = (j = m.value) == null ? void 0 : j.querySelectorAll("body > *")) != null ? H : []).find((oe) => oe.id === "headlessui-portal-root" ? !1 : oe.contains(x(N)) && oe instanceof HTMLElement)) != null ? le : null;
  });
  Ft(C, E);
  let T = h(() => I.value ? !0 : y.value), M = h(() => {
    var j, H, le;
    return (le = Array.from((H = (j = m.value) == null ? void 0 : j.querySelectorAll("[data-headlessui-portal]")) != null ? H : []).find((oe) => oe.contains(x(N)) && oe instanceof HTMLElement)) != null ? le : null;
  });
  Ft(M, T), Vl({ type: "Dialog", enabled: h(() => O.value === 0), element: p, onUpdate: (j, H) => {
    if (H === "Dialog")
      return q(j, { [lt.Add]: () => f.value += 1, [lt.Remove]: () => f.value -= 1 });
  } });
  let F = Hl({ name: "DialogDescription", slot: h(() => ({ open: v.value })) }), z = w(null), ie = { titleId: z, panelRef: w(null), dialogState: O, setTitleId(j) {
    z.value !== j && (z.value = j);
  }, close() {
    n("close", !1);
  } };
  te(rt, ie);
  let ve = h(() => !(!y.value || I.value));
  pt(R, (j, H) => {
    j.preventDefault(), ie.close(), J(() => H == null ? void 0 : H.focus());
  }, ve);
  let _e = h(() => !(I.value || O.value !== 0));
  rn((a = m.value) == null ? void 0 : a.defaultView, "keydown", (j) => {
    _e.value && (j.defaultPrevented || j.key === A.Escape && (j.preventDefault(), j.stopPropagation(), ie.close()));
  });
  let St = h(() => !(g.value || O.value !== 0 || B));
  return _l(m, St, (j) => {
    var H;
    return { containers: [...(H = j.containers) != null ? H : [], R] };
  }), K((j) => {
    if (O.value !== 0)
      return;
    let H = x(p);
    if (!H)
      return;
    let le = new ResizeObserver((oe) => {
      for (let We of oe) {
        let Be = We.target.getBoundingClientRect();
        Be.x === 0 && Be.y === 0 && Be.width === 0 && Be.height === 0 && ie.close();
      }
    });
    le.observe(H), j(() => le.disconnect());
  }), () => {
    let { open: j, initialFocus: H, ...le } = e, oe = { ...t, ref: p, id: i, role: c.value, "aria-modal": O.value === 0 ? !0 : void 0, "aria-labelledby": z.value, "aria-describedby": F.value }, We = { open: O.value === 0 };
    return U(nt, { force: !0 }, () => [U(vn, () => U(Wl, { target: p.value }, () => U(nt, { force: !1 }, () => U(Ce, { initialFocus: H, containers: R, features: y.value ? q(V.value, { parent: Ce.features.RestoreFocus, leaf: Ce.features.All & ~Ce.features.FocusLock }) : Ce.features.None }, () => U(D, {}, () => $({ ourProps: oe, theirProps: { ...le, ...t }, slot: We, attrs: t, slots: o, visible: O.value === 0, features: se.RenderStrategy | se.Static, name: "Dialog" })))))), U(b)]);
  };
} });
P({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t }) {
  var o;
  let l = (o = e.id) != null ? o : `headlessui-dialog-overlay-${Z()}`, r = je("DialogOverlay");
  function a(i) {
    i.target === i.currentTarget && (i.preventDefault(), i.stopPropagation(), r.close());
  }
  return () => {
    let { ...i } = e;
    return $({ ourProps: { id: l, "aria-hidden": !0, onClick: a }, theirProps: i, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogOverlay" });
  };
} });
P({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let r = (l = e.id) != null ? l : `headlessui-dialog-backdrop-${Z()}`, a = je("DialogBackdrop"), i = w(null);
  return o({ el: i, $el: i }), W(() => {
    if (a.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...u } = e, s = { id: r, ref: i, "aria-hidden": !0 };
    return U(nt, { force: !0 }, () => U(vn, () => $({ ourProps: s, theirProps: { ...n, ...u }, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogBackdrop" })));
  };
} });
P({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let r = (l = e.id) != null ? l : `headlessui-dialog-panel-${Z()}`, a = je("DialogPanel");
  o({ el: a.panelRef, $el: a.panelRef });
  function i(u) {
    u.stopPropagation();
  }
  return () => {
    let { ...u } = e, s = { id: r, ref: a.panelRef, onClick: i };
    return $({ ourProps: s, theirProps: u, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogPanel" });
  };
} });
P({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t }) {
  var o;
  let l = (o = e.id) != null ? o : `headlessui-dialog-title-${Z()}`, r = je("DialogTitle");
  return W(() => {
    r.setTitleId(l), ne(() => r.setTitleId(null));
  }), () => {
    let { ...a } = e;
    return $({ ourProps: { id: l }, theirProps: a, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogTitle" });
  };
} });
let At = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Dt(e) {
  var n, t;
  let o = (n = e.innerText) != null ? n : "", l = e.cloneNode(!0);
  if (!(l instanceof HTMLElement))
    return o;
  let r = !1;
  for (let i of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    i.remove(), r = !0;
  let a = r ? (t = l.innerText) != null ? t : "" : o;
  return At.test(a) && (a = a.replace(At, "")), a;
}
function ql(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string")
    return n.trim();
  let t = e.getAttribute("aria-labelledby");
  if (t) {
    let o = t.split(" ").map((l) => {
      let r = document.getElementById(l);
      if (r) {
        let a = r.getAttribute("aria-label");
        return typeof a == "string" ? a.trim() : Dt(r).trim();
      }
      return null;
    }).filter(Boolean);
    if (o.length > 0)
      return o.join(", ");
  }
  return Dt(e).trim();
}
function Yl(e) {
  let n = w(""), t = w("");
  return () => {
    let o = x(e);
    if (!o)
      return "";
    let l = o.innerText;
    if (n.value === l)
      return t.value;
    let r = ql(o).trim().toLowerCase();
    return n.value = l, t.value = r, r;
  };
}
var Ql = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ql || {}), Jl = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Jl || {});
function Zl(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let mn = Symbol("MenuContext");
function Ue(e) {
  let n = Q(mn, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ue), t;
  }
  return n;
}
P({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: t }) {
  let o = w(1), l = w(null), r = w(null), a = w([]), i = w(""), u = w(null), s = w(1);
  function c(d = (v) => v) {
    let v = u.value !== null ? a.value[u.value] : null, p = vt(d(a.value.slice()), (O) => x(O.dataRef.domRef)), m = v ? p.indexOf(v) : null;
    return m === -1 && (m = null), { items: p, activeItemIndex: m };
  }
  let f = { menuState: o, buttonRef: l, itemsRef: r, items: a, searchQuery: i, activeItemIndex: u, activationTrigger: s, closeMenu: () => {
    o.value = 1, u.value = null;
  }, openMenu: () => o.value = 0, goToItem(d, v, p) {
    let m = c(), O = tt(d === k.Specific ? { focus: k.Specific, id: v } : { focus: d }, { resolveItems: () => m.items, resolveActiveIndex: () => m.activeItemIndex, resolveId: (y) => y.id, resolveDisabled: (y) => y.dataRef.disabled });
    i.value = "", u.value = O, s.value = p != null ? p : 1, a.value = m.items;
  }, search(d) {
    let v = i.value !== "" ? 0 : 1;
    i.value += d.toLowerCase();
    let p = (u.value !== null ? a.value.slice(u.value + v).concat(a.value.slice(0, u.value + v)) : a.value).find((O) => O.dataRef.textValue.startsWith(i.value) && !O.dataRef.disabled), m = p ? a.value.indexOf(p) : -1;
    m === -1 || m === u.value || (u.value = m, s.value = 1);
  }, clearSearch() {
    i.value = "";
  }, registerItem(d, v) {
    let p = c((m) => [...m, { id: d, dataRef: v }]);
    a.value = p.items, u.value = p.activeItemIndex, s.value = 1;
  }, unregisterItem(d) {
    let v = c((p) => {
      let m = p.findIndex((O) => O.id === d);
      return m !== -1 && p.splice(m, 1), p;
    });
    a.value = v.items, u.value = v.activeItemIndex, s.value = 1;
  } };
  return pt([l, r], (d, v) => {
    var p;
    f.closeMenu(), ft(v, ct.Loose) || (d.preventDefault(), (p = x(l)) == null || p.focus());
  }, h(() => o.value === 0)), te(mn, f), mt(h(() => q(o.value, { [0]: G.Open, [1]: G.Closed }))), () => {
    let d = { open: o.value === 0, close: f.closeMenu };
    return $({ ourProps: {}, theirProps: e, slot: d, slots: n, attrs: t, name: "Menu" });
  };
} });
P({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let r = (l = e.id) != null ? l : `headlessui-menu-button-${Z()}`, a = Ue("MenuButton");
  o({ el: a.buttonRef, $el: a.buttonRef });
  function i(f) {
    switch (f.key) {
      case A.Space:
      case A.Enter:
      case A.ArrowDown:
        f.preventDefault(), f.stopPropagation(), a.openMenu(), J(() => {
          var d;
          (d = x(a.itemsRef)) == null || d.focus({ preventScroll: !0 }), a.goToItem(k.First);
        });
        break;
      case A.ArrowUp:
        f.preventDefault(), f.stopPropagation(), a.openMenu(), J(() => {
          var d;
          (d = x(a.itemsRef)) == null || d.focus({ preventScroll: !0 }), a.goToItem(k.Last);
        });
        break;
    }
  }
  function u(f) {
    switch (f.key) {
      case A.Space:
        f.preventDefault();
        break;
    }
  }
  function s(f) {
    e.disabled || (a.menuState.value === 0 ? (a.closeMenu(), J(() => {
      var d;
      return (d = x(a.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })) : (f.preventDefault(), a.openMenu(), Zl(() => {
      var d;
      return (d = x(a.itemsRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })));
  }
  let c = qt(h(() => ({ as: e.as, type: n.type })), a.buttonRef);
  return () => {
    var f;
    let d = { open: a.menuState.value === 0 }, { ...v } = e, p = { ref: a.buttonRef, id: r, type: c.value, "aria-haspopup": "menu", "aria-controls": (f = x(a.itemsRef)) == null ? void 0 : f.id, "aria-expanded": a.menuState.value === 0, onKeydown: i, onKeyup: u, onClick: s };
    return $({ ourProps: p, theirProps: v, slot: d, attrs: n, slots: t, name: "MenuButton" });
  };
} });
P({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let r = (l = e.id) != null ? l : `headlessui-menu-items-${Z()}`, a = Ue("MenuItems"), i = w(null);
  o({ el: a.itemsRef, $el: a.itemsRef }), Qt({ container: h(() => x(a.itemsRef)), enabled: h(() => a.menuState.value === 0), accept(d) {
    return d.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } });
  function u(d) {
    var v;
    switch (i.value && clearTimeout(i.value), d.key) {
      case A.Space:
        if (a.searchQuery.value !== "")
          return d.preventDefault(), d.stopPropagation(), a.search(d.key);
      case A.Enter:
        if (d.preventDefault(), d.stopPropagation(), a.activeItemIndex.value !== null) {
          let p = a.items.value[a.activeItemIndex.value];
          (v = x(p.dataRef.domRef)) == null || v.click();
        }
        a.closeMenu(), Ut(x(a.buttonRef));
        break;
      case A.ArrowDown:
        return d.preventDefault(), d.stopPropagation(), a.goToItem(k.Next);
      case A.ArrowUp:
        return d.preventDefault(), d.stopPropagation(), a.goToItem(k.Previous);
      case A.Home:
      case A.PageUp:
        return d.preventDefault(), d.stopPropagation(), a.goToItem(k.First);
      case A.End:
      case A.PageDown:
        return d.preventDefault(), d.stopPropagation(), a.goToItem(k.Last);
      case A.Escape:
        d.preventDefault(), d.stopPropagation(), a.closeMenu(), J(() => {
          var p;
          return (p = x(a.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case A.Tab:
        d.preventDefault(), d.stopPropagation(), a.closeMenu(), J(() => pl(x(a.buttonRef), d.shiftKey ? ue.Previous : ue.Next));
        break;
      default:
        d.key.length === 1 && (a.search(d.key), i.value = setTimeout(() => a.clearSearch(), 350));
        break;
    }
  }
  function s(d) {
    switch (d.key) {
      case A.Space:
        d.preventDefault();
        break;
    }
  }
  let c = Le(), f = h(() => c !== null ? (c.value & G.Open) === G.Open : a.menuState.value === 0);
  return () => {
    var d, v;
    let p = { open: a.menuState.value === 0 }, { ...m } = e, O = { "aria-activedescendant": a.activeItemIndex.value === null || (d = a.items.value[a.activeItemIndex.value]) == null ? void 0 : d.id, "aria-labelledby": (v = x(a.buttonRef)) == null ? void 0 : v.id, id: r, onKeydown: u, onKeyup: s, role: "menu", tabIndex: 0, ref: a.itemsRef };
    return $({ ourProps: O, theirProps: m, slot: p, attrs: n, slots: t, features: se.RenderStrategy | se.Static, visible: f.value, name: "MenuItems" });
  };
} });
P({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: t, expose: o }) {
  var l;
  let r = (l = e.id) != null ? l : `headlessui-menu-item-${Z()}`, a = Ue("MenuItem"), i = w(null);
  o({ el: i, $el: i });
  let u = h(() => a.activeItemIndex.value !== null ? a.items.value[a.activeItemIndex.value].id === r : !1), s = Yl(i), c = h(() => ({ disabled: e.disabled, get textValue() {
    return s();
  }, domRef: i }));
  W(() => a.registerItem(r, c)), ne(() => a.unregisterItem(r)), K(() => {
    a.menuState.value === 0 && u.value && a.activationTrigger.value !== 0 && J(() => {
      var y, I;
      return (I = (y = x(i)) == null ? void 0 : y.scrollIntoView) == null ? void 0 : I.call(y, { block: "nearest" });
    });
  });
  function f(y) {
    if (e.disabled)
      return y.preventDefault();
    a.closeMenu(), Ut(x(a.buttonRef));
  }
  function d() {
    if (e.disabled)
      return a.goToItem(k.Nothing);
    a.goToItem(k.Specific, r);
  }
  let v = Yt();
  function p(y) {
    v.update(y);
  }
  function m(y) {
    v.wasMoved(y) && (e.disabled || u.value || a.goToItem(k.Specific, r, 0));
  }
  function O(y) {
    v.wasMoved(y) && (e.disabled || u.value && a.goToItem(k.Nothing));
  }
  return () => {
    let { disabled: y, ...I } = e, B = { active: u.value, disabled: y, close: a.closeMenu };
    return $({ ourProps: { id: r, ref: i, role: "menuitem", tabIndex: y === !0 ? void 0 : -1, "aria-disabled": y === !0 ? !0 : void 0, onClick: f, onFocus: d, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: O, onMouseleave: O }, theirProps: { ...t, ...I }, slot: B, attrs: t, slots: n, name: "MenuItem" });
  };
} });
function Xl(e) {
  let n = { called: !1 };
  return (...t) => {
    if (!n.called)
      return n.called = !0, e(...t);
  };
}
function Qe(e, ...n) {
  e && n.length > 0 && e.classList.add(...n);
}
function Ve(e, ...n) {
  e && n.length > 0 && e.classList.remove(...n);
}
var at = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(at || {});
function eo(e, n) {
  let t = we();
  if (!e)
    return t.dispose;
  let { transitionDuration: o, transitionDelay: l } = getComputedStyle(e), [r, a] = [o, l].map((i) => {
    let [u = 0] = i.split(",").filter(Boolean).map((s) => s.includes("ms") ? parseFloat(s) : parseFloat(s) * 1e3).sort((s, c) => c - s);
    return u;
  });
  return r !== 0 ? t.setTimeout(() => n("finished"), r + a) : n("finished"), t.add(() => n("cancelled")), t.dispose;
}
function Mt(e, n, t, o, l, r) {
  let a = we(), i = r !== void 0 ? Xl(r) : () => {
  };
  return Ve(e, ...l), Qe(e, ...n, ...t), a.nextFrame(() => {
    Ve(e, ...t), Qe(e, ...o), a.add(eo(e, (u) => (Ve(e, ...o, ...n), Qe(e, ...l), i(u))));
  }), a.add(() => Ve(e, ...n, ...t, ...o, ...l)), a.add(() => i("cancelled")), a.dispose;
}
function ye(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let bt = Symbol("TransitionContext");
var to = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(to || {});
function no() {
  return Q(bt, null) !== null;
}
function lo() {
  let e = Q(bt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function oo() {
  let e = Q(gt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let gt = Symbol("NestingContext");
function Ge(e) {
  return "children" in e ? Ge(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function hn(e) {
  let n = w([]), t = w(!1);
  W(() => t.value = !0), ne(() => t.value = !1);
  function o(r, a = me.Hidden) {
    let i = n.value.findIndex(({ id: u }) => u === r);
    i !== -1 && (q(a, { [me.Unmount]() {
      n.value.splice(i, 1);
    }, [me.Hidden]() {
      n.value[i].state = "hidden";
    } }), !Ge(n) && t.value && (e == null || e()));
  }
  function l(r) {
    let a = n.value.find(({ id: i }) => i === r);
    return a ? a.state !== "visible" && (a.state = "visible") : n.value.push({ id: r, state: "visible" }), () => o(r, me.Unmount);
  }
  return { children: n, register: l, unregister: o };
}
let bn = se.RenderStrategy, ro = P({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: l }) {
  let r = w(0);
  function a() {
    r.value |= G.Opening, n("beforeEnter");
  }
  function i() {
    r.value &= ~G.Opening, n("afterEnter");
  }
  function u() {
    r.value |= G.Closing, n("beforeLeave");
  }
  function s() {
    r.value &= ~G.Closing, n("afterLeave");
  }
  if (!no() && gl())
    return () => U(io, { ...e, onBeforeEnter: a, onAfterEnter: i, onBeforeLeave: u, onAfterLeave: s }, o);
  let c = w(null), f = h(() => e.unmount ? me.Unmount : me.Hidden);
  l({ el: c, $el: c });
  let { show: d, appear: v } = lo(), { register: p, unregister: m } = oo(), O = w(d.value ? "visible" : "hidden"), y = { value: !0 }, I = Z(), B = { value: !1 }, S = hn(() => {
    !B.value && O.value !== "hidden" && (O.value = "hidden", m(I), s());
  });
  W(() => {
    let T = p(I);
    ne(T);
  }), K(() => {
    if (f.value === me.Hidden && I) {
      if (d.value && O.value !== "visible") {
        O.value = "visible";
        return;
      }
      q(O.value, { hidden: () => m(I), visible: () => p(I) });
    }
  });
  let D = ye(e.enter), R = ye(e.enterFrom), N = ye(e.enterTo), b = ye(e.entered), V = ye(e.leave), g = ye(e.leaveFrom), E = ye(e.leaveTo);
  W(() => {
    K(() => {
      if (O.value === "visible") {
        let T = x(c);
        if (T instanceof Comment && T.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function C(T) {
    let M = y.value && !v.value, F = x(c);
    !F || !(F instanceof HTMLElement) || M || (B.value = !0, d.value && a(), d.value || u(), T(d.value ? Mt(F, D, R, N, b, (z) => {
      B.value = !1, z === at.Finished && i();
    }) : Mt(F, V, g, E, b, (z) => {
      B.value = !1, z === at.Finished && (Ge(S) || (O.value = "hidden", m(I), s()));
    })));
  }
  return W(() => {
    ee([d], (T, M, F) => {
      C(F), y.value = !1;
    }, { immediate: !0 });
  }), te(gt, S), mt(h(() => q(O.value, { visible: G.Open, hidden: G.Closed }) | r.value)), () => {
    let { appear: T, show: M, enter: F, enterFrom: z, enterTo: ie, entered: ve, leave: _e, leaveFrom: St, leaveTo: j, ...H } = e, le = { ref: c }, oe = { ...H, ...v.value && d.value && Me.isServer ? { class: st([t.class, H.class, ...D, ...R]) } : {} };
    return $({ theirProps: oe, ourProps: le, slot: {}, slots: o, attrs: t, features: bn, visible: O.value === "visible", name: "TransitionChild" });
  };
} }), ao = ro, io = P({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o }) {
  let l = Le(), r = h(() => e.show === null && l !== null ? (l.value & G.Open) === G.Open : e.show);
  K(() => {
    if (![!0, !1].includes(r.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = w(r.value ? "visible" : "hidden"), i = hn(() => {
    a.value = "hidden";
  }), u = w(!0), s = { show: r, appear: h(() => e.appear || !u.value) };
  return W(() => {
    K(() => {
      u.value = !1, r.value ? a.value = "visible" : Ge(i) || (a.value = "hidden");
    });
  }), te(gt, i), te(bt, s), () => {
    let c = ke(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return $({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [U(ao, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...t, ...f, ...c }, o.default)] }, attrs: {}, features: bn, visible: a.value === "visible", name: "Transition" });
  };
} });
var kt;
const uo = typeof window < "u";
uo && ((kt = window == null ? void 0 : window.navigator) == null ? void 0 : kt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function so(e) {
  return e;
}
const it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ut = "__vueuse_ssr_handlers__";
it[ut] = it[ut] || {};
it[ut];
var Lt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Lt || (Lt = {}));
var co = Object.defineProperty, jt = Object.getOwnPropertySymbols, fo = Object.prototype.hasOwnProperty, vo = Object.prototype.propertyIsEnumerable, _t = (e, n, t) => n in e ? co(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, po = (e, n) => {
  for (var t in n || (n = {}))
    fo.call(n, t) && _t(e, t, n[t]);
  if (jt)
    for (var t of jt(n))
      vo.call(n, t) && _t(e, t, n[t]);
  return e;
};
const mo = {
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
po({
  linear: so
}, mo);
function ho(e, n) {
  return h({
    get: () => e.modelValue,
    set: (t) => n("update:modelValue", t)
  });
}
const bo = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, go = { name: "Error" }, gn = /* @__PURE__ */ P({
  ...go,
  props: {
    error: {}
  },
  setup(e) {
    return (n, t) => n.error ? (L(), Y("div", bo, [
      ce(n.$slots, "default", {}, () => [
        dt(Ie(n.error), 1)
      ])
    ])) : Oe("", !0);
  }
}), yo = { class: "w-full" }, xo = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, wo = {
  name: "Base",
  inheritAttrs: !1
}, So = /* @__PURE__ */ P({
  ...wo,
  props: {
    description: {},
    error: {},
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (n, t) => (L(), Y("div", yo, [
      re("div", {
        class: st(["mt-1 w-full rounded-md", { "shadow-sm": n.shadow }])
      }, [
        ce(n.$slots, "default")
      ], 2),
      n.description ? (L(), Y("p", xo, Ie(n.description), 1)) : Oe("", !0),
      n.error ? (L(), ae(gn, {
        key: 1,
        error: n.error
      }, null, 8, ["error"])) : Oe("", !0)
    ]));
  }
}), Oo = { name: "Actions" }, Eo = { class: "mt-8 border-t border-gray-200 pt-5" }, Io = { class: "flex justify-end" }, To = { class: "inline-flex" };
function Co(e, n, t, o, l, r) {
  return L(), Y("div", Eo, [
    re("div", Io, [
      re("span", To, [
        ce(e.$slots, "default")
      ])
    ])
  ]);
}
const Po = /* @__PURE__ */ zn(Oo, [["render", Co]]), Ro = { class: "relative flex items-start" }, Fo = { class: "flex h-5 items-center" }, Ao = ["id", "value", "disabled", "readonly"], Do = { class: "ml-3" }, Mo = ["for"], ko = { name: "Checkbox" }, Lo = /* @__PURE__ */ P({
  ...ko,
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
  setup(e, { emit: n }) {
    const t = ho(e, n);
    return (o, l) => (L(), ae(So, he(o.$props, { shadow: !1 }), {
      default: Ee(() => [
        re("div", Ro, [
          re("div", Fo, [
            Xe(re("input", he({
              id: o.id,
              "onUpdate:modelValue": l[0] || (l[0] = (r) => Rn(t) ? t.value = r : null),
              value: o.value,
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 accent-primary-600 focus:ring-primary-500",
              disabled: o.disabled,
              readonly: o.readonly
            }, o.$attrs), null, 16, Ao), [
              [Fn, X(t)]
            ]),
            re("div", Do, [
              re("label", {
                for: o.id,
                class: "block text-sm font-medium leading-5 text-gray-700"
              }, Ie(o.label), 9, Mo)
            ])
          ])
        ])
      ]),
      _: 1
    }, 16));
  }
}), jo = ["for"], _o = { name: "Label" }, Bo = /* @__PURE__ */ P({
  ..._o,
  props: {
    for: {}
  },
  setup(e) {
    const n = e;
    return (t, o) => (L(), Y("label", {
      for: n.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      ce(t.$slots, "default")
    ], 8, jo));
  }
});
var yn = {}, xn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function n(o, l) {
    return {
      handler: o,
      config: l
    };
  }
  n.withOptions = function(o, l = () => ({})) {
    const r = function(a) {
      return {
        __options: a,
        handler: o(a),
        config: l(a)
      };
    };
    return r.__isOptionsFunction = !0, r.__pluginFunction = o, r.__configFunction = l, r;
  };
  const t = n;
})(xn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const n = /* @__PURE__ */ t(xn);
  function t(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  const o = n.default;
})(yn);
let Je = yn;
var $o = (Je.__esModule ? Je : { default: Je }).default, wn = {}, Sn = {}, yt = { exports: {} }, _ = String, On = function() {
  return { isColorSupported: !1, reset: _, bold: _, dim: _, italic: _, underline: _, inverse: _, hidden: _, strikethrough: _, black: _, red: _, green: _, yellow: _, blue: _, magenta: _, cyan: _, white: _, gray: _, bgBlack: _, bgRed: _, bgGreen: _, bgYellow: _, bgBlue: _, bgMagenta: _, bgCyan: _, bgWhite: _ };
};
yt.exports = On();
yt.exports.createColors = On;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function n(u, s) {
    for (var c in s)
      Object.defineProperty(u, c, {
        enumerable: !0,
        get: s[c]
      });
  }
  n(e, {
    dim: function() {
      return a;
    },
    default: function() {
      return i;
    }
  });
  const t = /* @__PURE__ */ o(yt.exports);
  function o(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  let l = /* @__PURE__ */ new Set();
  function r(u, s, c) {
    typeof process < "u" && process.env.JEST_WORKER_ID || c && l.has(c) || (c && l.add(c), console.warn(""), s.forEach((f) => console.warn(u, "-", f)));
  }
  function a(u) {
    return t.default.dim(u);
  }
  const i = {
    info(u, s) {
      r(t.default.bold(t.default.cyan("info")), ...Array.isArray(u) ? [
        u
      ] : [
        s,
        u
      ]);
    },
    warn(u, s) {
      r(t.default.bold(t.default.yellow("warn")), ...Array.isArray(u) ? [
        u
      ] : [
        s,
        u
      ]);
    },
    risk(u, s) {
      r(t.default.bold(t.default.magenta("risk")), ...Array.isArray(u) ? [
        u
      ] : [
        s,
        u
      ]);
    }
  };
})(Sn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return l;
    }
  });
  const n = /* @__PURE__ */ t(Sn);
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  function o({ version: r, from: a, to: i }) {
    n.default.warn(`${a}-color-renamed`, [
      `As of Tailwind CSS ${r}, \`${a}\` has been renamed to \`${i}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const l = {
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
})(wn);
let Ze = wn;
var No = (Ze.__esModule ? Ze : { default: Ze }).default;
$o.withOptions(
  function() {
    return function() {
    };
  },
  function(e = {}) {
    var n;
    return {
      theme: {
        extend: {
          colors: {
            primary: {
              ...No.indigo,
              ...(n = e == null ? void 0 : e.colors) == null ? void 0 : n.primary
            }
          }
        }
      }
    };
  }
);
const Vo = /* @__PURE__ */ P({
  __name: "CheckboxGroup",
  props: {
    form: {},
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = n, l = h({
      get: () => t.modelValue,
      set: (r) => {
        o("update:modelValue", r);
      }
    });
    return (r, a) => (L(!0), Y(ge, null, De(r.items, (i, u) => {
      var s, c, f;
      return L(), ae(X(Lo), {
        id: `${t.form._prefix}-${(s = i.label) != null ? s : i}`,
        key: u,
        modelValue: l.value,
        "onUpdate:modelValue": a[0] || (a[0] = (d) => l.value = d),
        value: (c = i.value) != null ? c : i,
        label: (f = i.label) != null ? f : i
      }, null, 8, ["id", "modelValue", "value", "label"]);
    }), 128));
  }
}), En = (e) => Object.keys(e).reduce((n, t) => {
  var o;
  return e[t].schema ? { ...n, ...En(e[t].schema) } : (n[t] = (o = e[t].value) != null ? o : null, n);
}, {}), zo = (e) => {
  const n = "abcdefghijklmnopqrstuvwxyz";
  let t = "";
  for (let o = 0; o < e; o++)
    t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}, xt = (e) => Object.entries(e).map(([n, t]) => {
  const o = t.hasOwnProperty("setup") ? { component: t } : t;
  return {
    name: n,
    definition: o
  };
});
function Qo(e) {
  const n = zo(6), t = Tn(
    Object.keys(e).reduce((o, l) => {
      var a, i, u;
      if (e[l].schema)
        return { ...o, ...En(e[l].schema) };
      if (e[l].component === Vo)
        return o[l] = (a = e[l].checked) != null ? a : [], o;
      const r = (i = e[l]) == null ? void 0 : i.fieldset;
      return r ? (Object.entries(r).forEach(([s, c]) => {
        var f;
        c != null && c.model ? o[c.model] = (f = c.value) != null ? f : null : o[s] = c;
      }), o) : (o[l] = (u = e[l].value) != null ? u : null, o);
    }, {})
  );
  return t._prefix = n, {
    elements: xt(e),
    form: t
  };
}
const Ho = { key: 0 }, wt = /* @__PURE__ */ P({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    const n = e, t = h(() => {
      var d;
      const f = (d = n.element.definition) == null ? void 0 : d.fieldset;
      return f ? Object.entries(f).reduce((v, [p, m]) => (m != null && m.model ? v[m.model] = n.form[m.model] : v[p] = n.form[p], v), {}) : {
        modelValue: n.form[n.element.name]
      };
    }), o = h(() => {
      var v;
      let f = Object.entries({
        id: `${n.form._prefix}-${n.element.name}`,
        ...n.element.definition,
        ...n.element.definition.props,
        ...t.value,
        schema: n.element.definition.schema,
        form: n.form,
        error: (v = r.value[0]) != null ? v : null
      }), d = n.element.definition.component.props;
      return Object.fromEntries(f.filter(([p]) => d.hasOwnProperty(p)));
    }), l = h(() => {
      var d;
      const f = (d = n.element.definition) == null ? void 0 : d.fieldset;
      return f ? Object.entries(f).reduce((v, [p, m]) => (m != null && m.model ? v[`update:${m.model}`] = (O) => n.form[m.model] = O : v[`update:${p}`] = (O) => n.form[p] = O, v), {}) : { "update:modelValue": (v) => n.form[n.element.name] = v };
    }), r = h(() => {
      var d;
      const f = (d = n.element.definition) == null ? void 0 : d.fieldset;
      return f ? Object.keys(f).map((v) => n.form.errors[v]).filter((v) => v) : [n.form.errors[n.element.name]];
    }), a = h(() => {
      var d;
      return ((d = n.element.definition.label) != null ? d : n.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }), i = !!n.element.definition.schema, u = h(() => n.element.definition.showLabel ? n.element.definition.showLabel : n.element.definition.component.name === "Hidden" ? !1 : !i), s = w(
      typeof n.element.definition.visible == "function" ? n.element.definition.visible : () => !0
    ), c = w(
      typeof n.element.definition.visible == "function" ? n.element.definition.visible(n.form) : () => !0
    );
    return ee(n.form, (f) => {
      typeof s.value == "function" && (c.value = s.value(f));
    }), (f, d) => c.value ? (L(), Y("div", Ho, [
      u.value ? (L(), ae(X(Bo), {
        key: 0,
        for: o.value.id
      }, {
        default: Ee(() => [
          dt(Ie(a.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : Oe("", !0),
      (L(), ae(Dn(f.element.definition.component), he({
        key: f.element.name
      }, o.value, Mn(l.value)), null, 16)),
      o.value.hasOwnProperty("error") ? Oe("", !0) : (L(!0), Y(ge, { key: 1 }, De(r.value, (v, p) => (L(), ae(X(gn), {
        key: p,
        error: v
      }, null, 8, ["error"]))), 128))
    ])) : Oe("", !0);
  }
}), Uo = { class: "mx-auto mt-6 max-w-md space-y-6" }, Jo = /* @__PURE__ */ P({
  __name: "FormBuilder",
  props: {
    schema: {},
    submit: { default: "Save" }
  },
  setup(e) {
    return (n, t) => (L(), Y("div", Uo, [
      (L(!0), Y(ge, null, De(n.schema.elements, (o, l) => (L(), ae(wt, {
        key: l,
        element: o,
        form: n.schema.form
      }, null, 8, ["element", "form"]))), 128)),
      ze(X(Po), null, {
        default: Ee(() => [
          ce(n.$slots, "actions", {
            form: n.schema.form
          }, () => [
            ze(X(Un), {
              as: "button",
              type: "submit",
              loading: n.schema.form.processing
            }, {
              default: Ee(() => [
                dt(Ie(n.submit), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 3
      })
    ]));
  }
}), Go = { class: "grid gap-x-4 gap-y-6 md:grid-flow-col" }, Zo = /* @__PURE__ */ P({
  __name: "Grid",
  props: {
    schema: {},
    form: {}
  },
  setup(e) {
    const t = xt(e.schema);
    return (o, l) => (L(), Y("div", Go, [
      (L(!0), Y(ge, null, De(X(t), (r, a) => (L(), ae(wt, he({
        key: a,
        element: r,
        form: o.form,
        ref_for: !0
      }, o.$attrs), null, 16, ["element", "form"]))), 128))
    ]));
  }
}), Wo = { class: "mt-10" }, Ko = { class: "mt-4 space-y-6" }, Xo = /* @__PURE__ */ P({
  __name: "Section",
  props: {
    schema: {},
    form: {},
    heading: {}
  },
  setup(e) {
    const t = xt(e.schema);
    return (o, l) => (L(), Y("div", Wo, [
      re("label", null, Ie(o.heading), 1),
      re("div", Ko, [
        (L(!0), Y(ge, null, De(X(t), (r, a) => (L(), ae(wt, {
          key: a,
          element: r,
          form: o.form
        }, null, 8, ["element", "form"]))), 128))
      ])
    ]));
  }
});
export {
  Vo as CheckboxGroup,
  Jo as FormBuilder,
  Zo as Grid,
  Xo as Section,
  Qo as useSchema
};
