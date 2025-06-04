import { Link as Fn, useForm as Dn } from "@inertiajs/vue3";
import * as Et from "vue";
import { defineComponent as P, computed as m, ref as x, watch as ne, provide as re, h as V, cloneVNode as Vt, reactive as Ht, onMounted as G, Fragment as Se, watchEffect as Q, inject as J, onUnmounted as le, nextTick as X, unref as K, getCurrentInstance as kn, Teleport as An, normalizeClass as We, openBlock as M, createElementBlock as U, createElementVNode as q, createCommentVNode as ve, createVNode as Ce, renderSlot as te, createBlock as ae, mergeProps as pe, withCtx as de, toRaw as ge, createTextVNode as Fe, toDisplayString as me, withDirectives as tt, isRef as Bn, vModelCheckbox as Ln, vShow as It, shallowRef as Ut, triggerRef as Tt, onScopeDispose as jn, renderList as Ae, resolveDynamicComponent as Nn, toHandlers as _n, createSlots as $n } from "vue";
function zn(e, n) {
  return M(), U("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    q("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Vn = { name: "Spinner" }, Ct = /* @__PURE__ */ P({
  ...Vn,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (n, t) => (M(), U("svg", {
      class: We(["h-5 w-5 animate-spin", n.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, t[0] || (t[0] = [
      q("circle", {
        class: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4"
      }, null, -1),
      q("path", {
        class: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      }, null, -1)
    ]), 2));
  }
}), Hn = ["disabled", "type"], Un = ["href"], Wn = { name: "Button" }, Wt = /* @__PURE__ */ P({
  ...Wn,
  props: {
    as: { default: "a" },
    external: { type: Boolean },
    href: { default: "" },
    loading: { type: Boolean },
    spinnerClass: { default: "text-white" },
    type: {}
  },
  setup(e) {
    const n = e, t = m(() => n.type !== void 0 && n.as !== "button" ? (console.warn(
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
    return (l, a) => t.value === "button" ? (M(), U("button", pe({
      key: 0,
      class: o,
      disabled: l.loading,
      type: l.type
    }, l.$attrs), [
      te(l.$slots, "default"),
      tt(Ce(Ct, {
        class: "ml-3",
        "text-class": l.spinnerClass
      }, null, 8, ["text-class"]), [
        [It, l.loading]
      ])
    ], 16, Hn)) : l.external ? (M(), U("a", pe({
      key: 2,
      href: l.href,
      class: o
    }, l.$attrs), [
      te(l.$slots, "default")
    ], 16, Un)) : (M(), ae(K(Fn), pe({
      key: 1,
      as: l.as,
      href: l.href,
      disabled: l.loading,
      class: o
    }, l.$attrs), {
      default: de(() => [
        te(l.$slots, "default"),
        tt(Ce(Ct, {
          class: "ml-3",
          "text-class": l.spinnerClass
        }, null, 8, ["text-class"]), [
          [It, l.loading]
        ])
      ]),
      _: 3
    }, 16, ["as", "href", "disabled"]));
  }
}), Gn = { class: "border-l-4 border-yellow-400 bg-yellow-50 p-4" }, qn = { class: "flex" }, Kn = {
  key: 0,
  class: "shrink-0"
}, Qn = { class: "ml-3" }, Yn = { class: "text-sm text-yellow-700" }, Zn = { class: "mt-4" }, Xn = { class: "-mx-2 -my-1.5 flex items-center space-x-3" }, Jn = { name: "WarningAlert" }, el = /* @__PURE__ */ P({
  ...Jn,
  props: {
    withoutIcon: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (n, t) => (M(), U("div", Gn, [
      q("div", qn, [
        n.withoutIcon ? ve("", !0) : (M(), U("div", Kn, [
          Ce(K(zn), {
            class: "h-5 w-5 text-yellow-400",
            "aria-hidden": "true"
          })
        ])),
        q("div", Qn, [
          q("p", Yn, [
            te(n.$slots, "default")
          ]),
          q("div", Zn, [
            q("div", Xn, [
              te(n.$slots, "actions")
            ])
          ])
        ])
      ])
    ]));
  }
}), tl = { name: "WarningAlertButton" }, nl = /* @__PURE__ */ P({
  ...tl,
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
      "bg-yellow-50",
      "text-yellow-800",
      "hover:bg-yellow-100",
      "focus:border-yellow-600",
      "active:bg-yellow-600",
      "!px-2"
    ];
    return (t, o) => (M(), ae(Wt, pe({
      as: t.as,
      external: t.external,
      href: t.href,
      loading: t.loading,
      type: t.type,
      class: n
    }, t.$attrs), {
      default: de(() => [
        te(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "external", "href", "loading", "type"]));
  }
}), ll = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, l] of n)
    t[o] = l;
  return t;
}, ol = { name: "PrimaryButton" }, al = /* @__PURE__ */ P({
  ...ol,
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
    return (t, o) => (M(), ae(Wt, pe({
      as: t.as,
      external: t.external,
      href: t.href,
      loading: t.loading,
      type: t.type,
      class: n
    }, t.$attrs), {
      default: de(() => [
        te(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "external", "href", "loading", "type"]));
  }
});
function Te(e, n, t) {
  var o;
  let l = (o = t.initialDeps) != null ? o : [], a;
  return () => {
    var r, i, u, c;
    let d;
    t.key && ((r = t.debug) == null ? void 0 : r.call(t)) && (d = Date.now());
    const f = e();
    if (!(f.length !== l.length || f.some((p, v) => l[v] !== p)))
      return a;
    l = f;
    let s;
    if (t.key && ((i = t.debug) == null ? void 0 : i.call(t)) && (s = Date.now()), a = n(...f), t.key && ((u = t.debug) == null ? void 0 : u.call(t))) {
      const p = Math.round((Date.now() - d) * 100) / 100, v = Math.round((Date.now() - s) * 100) / 100, h = v / 16, w = (I, E) => {
        for (I = String(I); I.length < E; )
          I = " " + I;
        return I;
      };
      console.info(
        `%c\u23F1 ${w(v, 5)} /${w(p, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * h, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return (c = t == null ? void 0 : t.onChange) == null || c.call(t, a), a;
  };
}
function Qe(e, n) {
  if (e === void 0)
    throw new Error(`Unexpected undefined${n ? `: ${n}` : ""}`);
  return e;
}
const rl = (e, n) => Math.abs(e - n) < 1, il = (e, n, t) => {
  let o;
  return function(...l) {
    e.clearTimeout(o), o = e.setTimeout(() => n.apply(this, l), t);
  };
}, ul = (e) => e, sl = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
  for (let l = n; l <= t; l++)
    o.push(l);
  return o;
}, dl = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const o = e.targetWindow;
  if (!o)
    return;
  const l = (r) => {
    const { width: i, height: u } = r;
    n({ width: Math.round(i), height: Math.round(u) });
  };
  if (l(t.getBoundingClientRect()), !o.ResizeObserver)
    return () => {
    };
  const a = new o.ResizeObserver((r) => {
    const i = r[0];
    if (i != null && i.borderBoxSize) {
      const u = i.borderBoxSize[0];
      if (u) {
        l({ width: u.inlineSize, height: u.blockSize });
        return;
      }
    }
    l(t.getBoundingClientRect());
  });
  return a.observe(t, { box: "border-box" }), () => {
    a.unobserve(t);
  };
}, Rt = {
  passive: !0
}, cl = typeof window > "u" ? !0 : "onscrollend" in window, fl = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const o = e.targetWindow;
  if (!o)
    return;
  let l = 0;
  const a = cl ? () => {
  } : il(
    o,
    () => {
      n(l, !1);
    },
    e.options.isScrollingResetDelay
  ), r = (c) => () => {
    const { horizontal: d, isRtl: f } = e.options;
    l = d ? t.scrollLeft * (f && -1 || 1) : t.scrollTop, a(), n(l, c);
  }, i = r(!0), u = r(!1);
  return u(), t.addEventListener("scroll", i, Rt), t.addEventListener("scrollend", u, Rt), () => {
    t.removeEventListener("scroll", i), t.removeEventListener("scrollend", u);
  };
}, vl = (e, n, t) => {
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
}, pl = (e, {
  adjustments: n = 0,
  behavior: t
}, o) => {
  var l, a;
  const r = e + n;
  (a = (l = o.scrollElement) == null ? void 0 : l.scrollTo) == null || a.call(l, {
    [o.options.horizontal ? "left" : "top"]: r,
    behavior: t
  });
};
class ml {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const o = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((a) => {
          this._measureElement(a.target, a);
        });
      }));
      return {
        disconnect: () => {
          var l;
          (l = o()) == null || l.disconnect(), t = null;
        },
        observe: (l) => {
          var a;
          return (a = o()) == null ? void 0 : a.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var a;
          return (a = o()) == null ? void 0 : a.unobserve(l);
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
        getItemKey: ul,
        rangeExtractor: sl,
        onChange: () => {
        },
        measureElement: vl,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        ...t
      };
    }, this.notify = (t) => {
      var o, l;
      (l = (o = this.options).onChange) == null || l.call(o, this, t);
    }, this.maybeNotify = Te(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (t) => {
        this.notify(t);
      },
      {
        key: process.env.NODE_ENV !== "production" && "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var t, o;
      const l = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== l) {
        if (this.cleanup(), !l) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = l, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = (t = (o = this.scrollElement) == null ? void 0 : o.window) != null ? t : null, this.elementsCache.forEach((a) => {
          this.observer.observe(a);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (a) => {
            this.scrollRect = a, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (a, r) => {
            this.scrollAdjustments = 0, this.scrollDirection = r ? this.getScrollOffset() < a ? "forward" : "backward" : null, this.scrollOffset = a, this.isScrolling = r, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => {
      var t;
      return this.options.enabled ? (this.scrollRect = (t = this.scrollRect) != null ? t : this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0);
    }, this.getScrollOffset = () => {
      var t;
      return this.options.enabled ? (this.scrollOffset = (t = this.scrollOffset) != null ? t : typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset, this.scrollOffset) : (this.scrollOffset = null, 0);
    }, this.getFurthestMeasurement = (t, o) => {
      const l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      for (let r = o - 1; r >= 0; r--) {
        const i = t[r];
        if (l.has(i.lane))
          continue;
        const u = a.get(
          i.lane
        );
        if (u == null || i.end > u.end ? a.set(i.lane, i) : i.end < u.end && l.set(i.lane, !0), l.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((r, i) => r.end === i.end ? r.index - i.index : r.end - i.end)[0] : void 0;
    }, this.getMeasurementOptions = Te(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, o, l, a, r) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: o,
        scrollMargin: l,
        getItemKey: a,
        enabled: r
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Te(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: o, scrollMargin: l, getItemKey: a, enabled: r }, i) => {
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((d) => {
          this.itemSizeCache.set(d.key, d.size);
        }));
        const u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, u);
        for (let d = u; d < t; d++) {
          const f = a(d), s = this.options.lanes === 1 ? c[d - 1] : this.getFurthestMeasurement(c, d), p = s ? s.end + this.options.gap : o + l, v = i.get(f), h = typeof v == "number" ? v : this.options.estimateSize(d), w = p + h, I = s ? s.lane : d % this.options.lanes;
          c[d] = {
            index: d,
            start: p,
            size: h,
            end: w,
            key: f,
            lane: I
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Te(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (t, o, l) => this.range = t.length > 0 && o > 0 ? hl({
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
      (t, o, l, a) => o === null ? [] : t({
        startIndex: o.startIndex,
        endIndex: o.endIndex,
        overscan: l,
        count: a
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
      const l = this.indexFromElement(t), a = this.measurementsCache[l];
      if (!a)
        return;
      const r = a.key, i = this.elementsCache.get(r);
      i !== t && (i && this.observer.unobserve(i), this.observer.observe(t), this.elementsCache.set(r, t)), t.isConnected && this.resizeItem(l, this.options.measureElement(t, o, this));
    }, this.resizeItem = (t, o) => {
      var l;
      const a = this.measurementsCache[t];
      if (!a)
        return;
      const r = (l = this.itemSizeCache.get(a.key)) != null ? l : a.size, i = o - r;
      i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(a, i, this) : a.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", i), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += i,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(a.index), this.itemSizeCache = new Map(this.itemSizeCache.set(a.key, o)), this.notify(!1));
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((o, l) => {
          o.isConnected || (this.observer.unobserve(o), this.elementsCache.delete(l));
        });
        return;
      }
      this._measureElement(t, void 0);
    }, this.getVirtualItems = Te(
      () => [this.getIndexes(), this.getMeasurements()],
      (t, o) => {
        const l = [];
        for (let a = 0, r = t.length; a < r; a++) {
          const i = t[a], u = o[i];
          l.push(u);
        }
        return l;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const o = this.getMeasurements();
      if (o.length !== 0)
        return Qe(
          o[Gt(
            0,
            o.length - 1,
            (l) => Qe(o[l]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, o) => {
      const l = this.getSize(), a = this.getScrollOffset();
      o === "auto" && (t <= a ? o = "start" : t >= a + l ? o = "end" : o = "start"), o === "start" ? t = t : o === "end" ? t = t - l : o === "center" && (t = t - l / 2);
      const r = this.options.horizontal ? "scrollWidth" : "scrollHeight", i = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[r] : this.scrollElement[r] : 0) - l;
      return Math.max(Math.min(i, t), 0);
    }, this.getOffsetForIndex = (t, o = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = this.measurementsCache[t];
      if (!l)
        return;
      const a = this.getSize(), r = this.getScrollOffset();
      if (o === "auto")
        if (l.end >= r + a - this.options.scrollPaddingEnd)
          o = "end";
        else if (l.start <= r + this.options.scrollPaddingStart)
          o = "start";
        else
          return [r, o];
      const i = o === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(i, o), o];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
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
      const a = this.getOffsetForIndex(t, o);
      if (!a)
        return;
      const [r, i] = a;
      this._scrollToOffset(r, { adjustments: void 0, behavior: l }), l !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(t)
        )) {
          const [u] = Qe(
            this.getOffsetForIndex(t, i)
          );
          rl(u, this.getScrollOffset()) || this.scrollToIndex(t, { align: i, behavior: l });
        } else
          this.scrollToIndex(t, { align: i, behavior: l });
      }));
    }, this.scrollBy = (t, { behavior: o } = {}) => {
      this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + t, {
        adjustments: void 0,
        behavior: o
      });
    }, this.getTotalSize = () => {
      var t, o;
      const l = this.getMeasurements();
      let a;
      return l.length === 0 ? a = this.options.paddingStart : a = this.options.lanes === 1 ? (t = (o = l[l.length - 1]) == null ? void 0 : o.end) != null ? t : 0 : Math.max(
        ...l.slice(-this.options.lanes).map((r) => r.end)
      ), Math.max(
        a - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (t, {
      adjustments: o,
      behavior: l
    }) => {
      this.options.scrollToFn(t, { behavior: l, adjustments: o }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(n);
  }
}
const Gt = (e, n, t, o) => {
  for (; e <= n; ) {
    const l = (e + n) / 2 | 0, a = t(l);
    if (a < o)
      e = l + 1;
    else if (a > o)
      n = l - 1;
    else
      return l;
  }
  return e > 0 ? e - 1 : 0;
};
function hl({
  measurements: e,
  outerSize: n,
  scrollOffset: t
}) {
  const o = e.length - 1, l = Gt(0, o, (r) => e[r].start, t);
  let a = l;
  for (; a < o && e[a].end < t + n; )
    a++;
  return { startIndex: l, endIndex: a };
}
function bl(e) {
  const n = new ml(K(e)), t = Ut(n), o = n._didMount();
  return ne(
    () => K(e).getScrollElement(),
    (l) => {
      l && n._willUpdate();
    },
    {
      immediate: !0
    }
  ), ne(
    () => K(e),
    (l) => {
      n.setOptions({
        ...l,
        onChange: (a, r) => {
          var i;
          Tt(t), (i = l.onChange) == null || i.call(l, a, r);
        }
      }), n._willUpdate(), Tt(t);
    },
    {
      immediate: !0
    }
  ), jn(o), t;
}
function gl(e) {
  return bl(
    m(() => ({
      observeElementRect: dl,
      observeElementOffset: fl,
      scrollToFn: pl,
      ...K(e)
    }))
  );
}
function yl(e, n, t) {
  let o = x(t == null ? void 0 : t.value), l = m(() => e.value !== void 0);
  return [m(() => l.value ? e.value : o.value), function(a) {
    return l.value || (o.value = a), n == null ? void 0 : n(a);
  }];
}
function ft(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((n) => setTimeout(() => {
    throw n;
  }));
}
function xe() {
  let e = [], n = { addEventListener(t, o, l, a) {
    return t.addEventListener(o, l, a), n.add(() => t.removeEventListener(o, l, a));
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
    return ft(() => {
      o.current && t[0]();
    }), n.add(() => {
      o.current = !1;
    });
  }, style(t, o, l) {
    let a = t.style.getPropertyValue(o);
    return Object.assign(t.style, { [o]: l }), this.add(() => {
      Object.assign(t.style, { [o]: a });
    });
  }, group(t) {
    let o = xe();
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
function wl() {
  let e = xe();
  return le(() => e.dispose()), e;
}
function xl() {
  let e = wl();
  return (n) => {
    e.dispose(), e.nextFrame(n);
  };
}
var Pt;
let Sl = Symbol("headlessui.useid"), Ol = 0;
const ee = (Pt = Et.useId) != null ? Pt : function() {
  return Et.inject(Sl, () => `${++Ol}`)();
};
function y(e) {
  var n;
  if (e == null || e.value == null)
    return null;
  let t = (n = e.value.$el) != null ? n : e.value;
  return t instanceof Node ? t : null;
}
function Y(e, n, ...t) {
  if (e in n) {
    let l = n[e];
    return typeof l == "function" ? l(...t) : l;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, Y), o;
}
var El = Object.defineProperty, Il = (e, n, t) => n in e ? El(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Mt = (e, n, t) => (Il(e, typeof n != "symbol" ? n + "" : n, t), t);
class Tl {
  constructor() {
    Mt(this, "current", this.detect()), Mt(this, "currentId", 0);
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
let Be = new Tl();
function he(e) {
  if (Be.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let n = y(e);
    if (n)
      return n.ownerDocument;
  }
  return document;
}
let nt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var se = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(se || {}), qt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(qt || {}), Cl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Cl || {});
function Kt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(nt)).sort((n, t) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var vt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(vt || {});
function pt(e, n = 0) {
  var t;
  return e === ((t = he(e)) == null ? void 0 : t.body) ? !1 : Y(n, { [0]() {
    return e.matches(nt);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(nt))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
function Qt(e) {
  let n = he(e);
  X(() => {
    n && !pt(n.activeElement, 0) && we(e);
  });
}
var Rl = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Rl || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function we(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Pl = ["textarea", "input"].join(",");
function Ml(e) {
  var n, t;
  return (t = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, Pl)) != null ? t : !1;
}
function mt(e, n = (t) => t) {
  return e.slice().sort((t, o) => {
    let l = n(t), a = n(o);
    if (l === null || a === null)
      return 0;
    let r = l.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Fl(e, n) {
  return De(Kt(), n, { relativeTo: e });
}
function De(e, n, { sorted: t = !0, relativeTo: o = null, skipElements: l = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, i = Array.isArray(e) ? t ? mt(e) : e : Kt(e);
  l.length > 0 && i.length > 1 && (i = i.filter((v) => !l.includes(v))), o = o != null ? o : r.activeElement;
  let u = (() => {
    if (n & 5)
      return 1;
    if (n & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (n & 1)
      return 0;
    if (n & 2)
      return Math.max(0, i.indexOf(o)) - 1;
    if (n & 4)
      return Math.max(0, i.indexOf(o)) + 1;
    if (n & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = n & 32 ? { preventScroll: !0 } : {}, f = 0, s = i.length, p;
  do {
    if (f >= s || f + s <= 0)
      return 0;
    let v = c + f;
    if (n & 16)
      v = (v + s) % s;
    else {
      if (v < 0)
        return 3;
      if (v >= s)
        return 1;
    }
    p = i[v], p == null || p.focus(d), f += u;
  } while (p !== r.activeElement);
  return n & 6 && Ml(p) && p.select(), 2;
}
function Yt() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Dl() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Zt() {
  return Yt() || Dl();
}
function ze(e, n, t) {
  Be.isServer || Q((o) => {
    document.addEventListener(e, n, t), o(() => document.removeEventListener(e, n, t));
  });
}
function Xt(e, n, t) {
  Be.isServer || Q((o) => {
    window.addEventListener(e, n, t), o(() => window.removeEventListener(e, n, t));
  });
}
function ht(e, n, t = m(() => !0)) {
  function o(a, r) {
    if (!t.value || a.defaultPrevented)
      return;
    let i = r(a);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let u = function c(d) {
      return typeof d == "function" ? c(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let c of u) {
      if (c === null)
        continue;
      let d = c instanceof HTMLElement ? c : y(c);
      if (d != null && d.contains(i) || a.composed && a.composedPath().includes(d))
        return;
    }
    return !pt(i, vt.Loose) && i.tabIndex !== -1 && a.preventDefault(), n(a, i);
  }
  let l = x(null);
  ze("pointerdown", (a) => {
    var r, i;
    t.value && (l.value = ((i = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : i[0]) || a.target);
  }, !0), ze("mousedown", (a) => {
    var r, i;
    t.value && (l.value = ((i = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : i[0]) || a.target);
  }, !0), ze("click", (a) => {
    Zt() || l.value && (o(a, () => l.value), l.value = null);
  }, !0), ze("touchend", (a) => o(a, () => a.target instanceof HTMLElement ? a.target : null), !0), Xt("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Ft(e, n) {
  if (e)
    return e;
  let t = n != null ? n : "button";
  if (typeof t == "string" && t.toLowerCase() === "button")
    return "button";
}
function Jt(e, n) {
  let t = x(Ft(e.value.type, e.value.as));
  return G(() => {
    t.value = Ft(e.value.type, e.value.as);
  }), Q(() => {
    var o;
    t.value || y(n) && y(n) instanceof HTMLButtonElement && !((o = y(n)) != null && o.hasAttribute("type")) && (t.value = "button");
  }), t;
}
function Dt(e) {
  return [e.screenX, e.screenY];
}
function en() {
  let e = x([-1, -1]);
  return { wasMoved(n) {
    let t = Dt(n);
    return e.value[0] === t[0] && e.value[1] === t[1] ? !1 : (e.value = t, !0);
  }, update(n) {
    e.value = Dt(n);
  } };
}
function tn({ container: e, accept: n, walk: t, enabled: o }) {
  Q(() => {
    let l = e.value;
    if (!l || o !== void 0 && !o.value)
      return;
    let a = he(e);
    if (!a)
      return;
    let r = Object.assign((u) => n(u), { acceptNode: n }), i = a.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; i.nextNode(); )
      t(i.currentNode);
  });
}
var ce = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ce || {}), ye = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ye || {});
function $({ visible: e = !0, features: n = 0, ourProps: t, theirProps: o, ...l }) {
  var a;
  let r = ln(o, t), i = Object.assign(l, { props: r });
  if (e || n & 2 && r.static)
    return Ye(i);
  if (n & 1) {
    let u = (a = r.unmount) == null || a ? 0 : 1;
    return Y(u, { [0]() {
      return null;
    }, [1]() {
      return Ye({ ...l, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ye(i);
}
function Ye({ props: e, attrs: n, slots: t, slot: o, name: l }) {
  var a, r;
  let { as: i, ...u } = Le(e, ["unmount", "static"]), c = (a = t.default) == null ? void 0 : a.call(t, o), d = {};
  if (o) {
    let f = !1, s = [];
    for (let [p, v] of Object.entries(o))
      typeof v == "boolean" && (f = !0), v === !0 && s.push(p);
    f && (d["data-headlessui-state"] = s.join(" "));
  }
  if (i === "template") {
    if (c = nn(c != null ? c : []), Object.keys(u).length > 0 || Object.keys(n).length > 0) {
      let [f, ...s] = c != null ? c : [];
      if (!Al(f) || s.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(n)).map((h) => h.trim()).filter((h, w, I) => I.indexOf(h) === w).sort((h, w) => h.localeCompare(w)).map((h) => `  - ${h}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((h) => `  - ${h}`).join(`
`)].join(`
`));
      let p = ln((r = f.props) != null ? r : {}, u, d), v = Vt(f, p, !0);
      for (let h in p)
        h.startsWith("on") && (v.props || (v.props = {}), v.props[h] = p[h]);
      return v;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return V(i, Object.assign({}, u, d), { default: () => c });
}
function nn(e) {
  return e.flatMap((n) => n.type === Se ? nn(n.children) : [n]);
}
function ln(...e) {
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
    Object.assign(n, { [o](l, ...a) {
      let r = t[o];
      for (let i of r) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        i(l, ...a);
      }
    } });
  return n;
}
function kl(e) {
  let n = Object.assign({}, e);
  for (let t in n)
    n[t] === void 0 && delete n[t];
  return n;
}
function Le(e, n = []) {
  let t = Object.assign({}, e);
  for (let o of n)
    o in t && delete t[o];
  return t;
}
function Al(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var ke = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(ke || {});
let Ue = P({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: t }) {
  return () => {
    var o;
    let { features: l, ...a } = e, r = { "aria-hidden": (l & 2) === 2 ? !0 : (o = a["aria-hidden"]) != null ? o : void 0, hidden: (l & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return $({ ourProps: r, theirProps: a, slot: {}, attrs: t, slots: n, name: "Hidden" });
  };
} }), on = Symbol("Context");
var H = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(H || {});
function Bl() {
  return je() !== null;
}
function je() {
  return J(on, null);
}
function bt(e) {
  re(on, e);
}
var A = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(A || {}), an = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(an || {});
function Ll(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let fe = [];
Ll(() => {
  function e(n) {
    n.target instanceof HTMLElement && n.target !== document.body && fe[0] !== n.target && (fe.unshift(n.target), fe = fe.filter((t) => t != null && t.isConnected), fe.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function jl(e) {
  throw new Error("Unexpected object: " + e);
}
var L = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(L || {});
function lt(e, n) {
  let t = n.resolveItems();
  if (t.length <= 0)
    return null;
  let o = n.resolveActiveIndex(), l = o != null ? o : -1;
  switch (e.focus) {
    case 0: {
      for (let a = 0; a < t.length; ++a)
        if (!n.resolveDisabled(t[a], a, t))
          return a;
      return o;
    }
    case 1: {
      l === -1 && (l = t.length);
      for (let a = l - 1; a >= 0; --a)
        if (!n.resolveDisabled(t[a], a, t))
          return a;
      return o;
    }
    case 2: {
      for (let a = l + 1; a < t.length; ++a)
        if (!n.resolveDisabled(t[a], a, t))
          return a;
      return o;
    }
    case 3: {
      for (let a = t.length - 1; a >= 0; --a)
        if (!n.resolveDisabled(t[a], a, t))
          return a;
      return o;
    }
    case 4: {
      for (let a = 0; a < t.length; ++a)
        if (n.resolveId(t[a], a, t) === e.id)
          return a;
      return o;
    }
    case 5:
      return null;
    default:
      jl(e);
  }
}
function rn(e = {}, n = null, t = []) {
  for (let [o, l] of Object.entries(e))
    sn(t, un(n, o), l);
  return t;
}
function un(e, n) {
  return e ? e + "[" + n + "]" : n;
}
function sn(e, n, t) {
  if (Array.isArray(t))
    for (let [o, l] of t.entries())
      sn(e, un(n, o.toString()), l);
  else
    t instanceof Date ? e.push([n, t.toISOString()]) : typeof t == "boolean" ? e.push([n, t ? "1" : "0"]) : typeof t == "string" ? e.push([n, t]) : typeof t == "number" ? e.push([n, `${t}`]) : t == null ? e.push([n, ""]) : rn(t, n, e);
}
function Nl(e, n) {
  return e === n;
}
var _l = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(_l || {}), $l = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))($l || {}), zl = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(zl || {});
let dn = Symbol("ComboboxContext");
function Ie(e) {
  let n = J(dn, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ie), t;
  }
  return n;
}
let cn = Symbol("VirtualContext"), Vl = P({ name: "VirtualProvider", setup(e, { slots: n }) {
  let t = Ie("VirtualProvider"), o = m(() => {
    let i = y(t.optionsRef);
    if (!i)
      return { start: 0, end: 0 };
    let u = window.getComputedStyle(i);
    return { start: parseFloat(u.paddingBlockStart || u.paddingTop), end: parseFloat(u.paddingBlockEnd || u.paddingBottom) };
  }), l = gl(m(() => ({ scrollPaddingStart: o.value.start, scrollPaddingEnd: o.value.end, count: t.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return y(t.optionsRef);
  }, overscan: 12 }))), a = m(() => {
    var i;
    return (i = t.virtual.value) == null ? void 0 : i.options;
  }), r = x(0);
  return ne([a], () => {
    r.value += 1;
  }), re(cn, t.virtual.value ? l : null), () => [V("div", { style: { position: "relative", width: "100%", height: `${l.value.getTotalSize()}px` }, ref: (i) => {
    if (i) {
      if (typeof process < "u" && process.env.JEST_WORKER_ID !== void 0 || t.activationTrigger.value === 0)
        return;
      t.activeOptionIndex.value !== null && t.virtual.value.options.length > t.activeOptionIndex.value && l.value.scrollToIndex(t.activeOptionIndex.value);
    }
  } }, l.value.getVirtualItems().map((i) => Vt(n.default({ option: t.virtual.value.options[i.index], open: t.comboboxState.value === 0 })[0], { key: `${r.value}-${i.index}`, "data-index": i.index, "aria-setsize": t.virtual.value.options.length, "aria-posinset": i.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${i.start}px)`, overflowAnchor: "none" } })))];
} });
P({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], nullable: !0, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 }, immediate: { type: [Boolean], default: !1 }, virtual: { type: Object, default: null } }, inheritAttrs: !1, setup(e, { slots: n, attrs: t, emit: o }) {
  let l = x(1), a = x(null), r = x(null), i = x(null), u = x(null), c = x({ static: !1, hold: !1 }), d = x([]), f = x(null), s = x(2), p = x(!1);
  function v(b = (S) => S) {
    let S = f.value !== null ? d.value[f.value] : null, C = b(d.value.slice()), T = C.length > 0 && C[0].dataRef.order.value !== null ? C.sort((k, W) => k.dataRef.order.value - W.dataRef.order.value) : mt(C, (k) => y(k.dataRef.domRef)), N = S ? T.indexOf(S) : null;
    return N === -1 && (N = null), { options: T, activeOptionIndex: N };
  }
  let h = m(() => e.multiple ? 1 : 0), w = m(() => e.nullable), [I, E] = yl(m(() => e.modelValue), (b) => o("update:modelValue", b), m(() => e.defaultValue)), F = m(() => I.value === void 0 ? Y(h.value, { [1]: [], [0]: void 0 }) : I.value), Z = null, O = null;
  function D(b) {
    return Y(h.value, { [0]() {
      return E == null ? void 0 : E(b);
    }, [1]: () => {
      let S = ge(g.value.value).slice(), C = ge(b), T = S.findIndex((N) => g.compare(C, ge(N)));
      return T === -1 ? S.push(C) : S.splice(T, 1), E == null ? void 0 : E(S);
    } });
  }
  let j = m(() => {
  });
  ne([j], ([b], [S]) => {
    if (g.virtual.value && b && S && f.value !== null) {
      let C = b.indexOf(S[f.value]);
      C !== -1 ? f.value = C : f.value = null;
    }
  });
  let g = { comboboxState: l, value: F, mode: h, compare(b, S) {
    if (typeof e.by == "string") {
      let C = e.by;
      return (b == null ? void 0 : b[C]) === (S == null ? void 0 : S[C]);
    }
    return e.by === null ? Nl(b, S) : e.by(b, S);
  }, calculateIndex(b) {
    return g.virtual.value ? e.by === null ? g.virtual.value.options.indexOf(b) : g.virtual.value.options.findIndex((S) => g.compare(S, b)) : d.value.findIndex((S) => g.compare(S.dataRef.value, b));
  }, defaultValue: m(() => e.defaultValue), nullable: w, immediate: m(() => !1), virtual: m(() => null), inputRef: r, labelRef: a, buttonRef: i, optionsRef: u, disabled: m(() => e.disabled), options: d, change(b) {
    E(b);
  }, activeOptionIndex: m(() => {
    if (p.value && f.value === null && (g.virtual.value ? g.virtual.value.options.length > 0 : d.value.length > 0)) {
      if (g.virtual.value) {
        let S = g.virtual.value.options.findIndex((C) => {
          var T;
          return !((T = g.virtual.value) != null && T.disabled(C));
        });
        if (S !== -1)
          return S;
      }
      let b = d.value.findIndex((S) => !S.dataRef.disabled);
      if (b !== -1)
        return b;
    }
    return f.value;
  }), activationTrigger: s, optionsPropsRef: c, closeCombobox() {
    p.value = !1, !e.disabled && l.value !== 1 && (l.value = 1, f.value = null);
  }, openCombobox() {
    if (p.value = !0, !e.disabled && l.value !== 0) {
      if (g.value.value) {
        let b = g.calculateIndex(g.value.value);
        b !== -1 && (f.value = b);
      }
      l.value = 0;
    }
  }, setActivationTrigger(b) {
    s.value = b;
  }, goToOption(b, S, C) {
    p.value = !1, Z !== null && cancelAnimationFrame(Z), Z = requestAnimationFrame(() => {
      if (e.disabled || u.value && !c.value.static && l.value === 1)
        return;
      if (g.virtual.value) {
        f.value = b === L.Specific ? S : lt({ focus: b }, { resolveItems: () => g.virtual.value.options, resolveActiveIndex: () => {
          var k, W;
          return (W = (k = g.activeOptionIndex.value) != null ? k : g.virtual.value.options.findIndex((oe) => {
            var be;
            return !((be = g.virtual.value) != null && be.disabled(oe));
          })) != null ? W : null;
        }, resolveDisabled: (k) => g.virtual.value.disabled(k), resolveId() {
          throw new Error("Function not implemented.");
        } }), s.value = C != null ? C : 2;
        return;
      }
      let T = v();
      if (T.activeOptionIndex === null) {
        let k = T.options.findIndex((W) => !W.dataRef.disabled);
        k !== -1 && (T.activeOptionIndex = k);
      }
      let N = b === L.Specific ? S : lt({ focus: b }, { resolveItems: () => T.options, resolveActiveIndex: () => T.activeOptionIndex, resolveId: (k) => k.id, resolveDisabled: (k) => k.dataRef.disabled });
      f.value = N, s.value = C != null ? C : 2, d.value = T.options;
    });
  }, selectOption(b) {
    let S = d.value.find((T) => T.id === b);
    if (!S)
      return;
    let { dataRef: C } = S;
    D(C.value);
  }, selectActiveOption() {
    if (g.activeOptionIndex.value !== null) {
      if (g.virtual.value)
        D(g.virtual.value.options[g.activeOptionIndex.value]);
      else {
        let { dataRef: b } = d.value[g.activeOptionIndex.value];
        D(b.value);
      }
      g.goToOption(L.Specific, g.activeOptionIndex.value);
    }
  }, registerOption(b, S) {
    let C = Ht({ id: b, dataRef: S });
    if (g.virtual.value) {
      d.value.push(C);
      return;
    }
    O && cancelAnimationFrame(O);
    let T = v((N) => (N.push(C), N));
    f.value === null && g.isSelected(S.value.value) && (T.activeOptionIndex = T.options.indexOf(C)), d.value = T.options, f.value = T.activeOptionIndex, s.value = 2, T.options.some((N) => !y(N.dataRef.domRef)) && (O = requestAnimationFrame(() => {
      let N = v();
      d.value = N.options, f.value = N.activeOptionIndex;
    }));
  }, unregisterOption(b, S) {
    if (Z !== null && cancelAnimationFrame(Z), S && (p.value = !0), g.virtual.value) {
      d.value = d.value.filter((T) => T.id !== b);
      return;
    }
    let C = v((T) => {
      let N = T.findIndex((k) => k.id === b);
      return N !== -1 && T.splice(N, 1), T;
    });
    d.value = C.options, f.value = C.activeOptionIndex, s.value = 2;
  }, isSelected(b) {
    return Y(h.value, { [0]: () => g.compare(ge(g.value.value), ge(b)), [1]: () => ge(g.value.value).some((S) => g.compare(ge(S), ge(b))) });
  }, isActive(b) {
    return f.value === g.calculateIndex(b);
  } };
  ht([r, i, u], () => g.closeCombobox(), m(() => l.value === 0)), re(dn, g), bt(m(() => Y(l.value, { [0]: H.Open, [1]: H.Closed })));
  let B = m(() => {
    var b;
    return (b = y(r)) == null ? void 0 : b.closest("form");
  });
  return G(() => {
    ne([B], () => {
      if (!B.value || e.defaultValue === void 0)
        return;
      function b() {
        g.change(e.defaultValue);
      }
      return B.value.addEventListener("reset", b), () => {
        var S;
        (S = B.value) == null || S.removeEventListener("reset", b);
      };
    }, { immediate: !0 });
  }), () => {
    var b, S, C;
    let { name: T, disabled: N, form: k, ...W } = e, oe = { open: l.value === 0, disabled: N, activeIndex: g.activeOptionIndex.value, activeOption: g.activeOptionIndex.value === null ? null : g.virtual.value ? g.virtual.value.options[(b = g.activeOptionIndex.value) != null ? b : 0] : (C = (S = g.options.value[g.activeOptionIndex.value]) == null ? void 0 : S.dataRef.value) != null ? C : null, value: F.value };
    return V(Se, [...T != null && F.value != null ? rn({ [T]: F.value }).map(([be, _e]) => V(Ue, kl({ features: ke.Hidden, key: be, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: k, disabled: N, name: be, value: _e }))) : [], $({ theirProps: { ...t, ...Le(W, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: oe, slots: n, attrs: t, name: "Combobox" })]);
  };
} });
P({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t }) {
  var o;
  let l = (o = e.id) != null ? o : `headlessui-combobox-label-${ee()}`, a = Ie("ComboboxLabel");
  function r() {
    var i;
    (i = y(a.inputRef)) == null || i.focus({ preventScroll: !0 });
  }
  return () => {
    let i = { open: a.comboboxState.value === 0, disabled: a.disabled.value }, { ...u } = e, c = { id: l, ref: a.labelRef, onClick: r };
    return $({ ourProps: c, theirProps: u, slot: i, attrs: n, slots: t, name: "ComboboxLabel" });
  };
} });
P({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let a = (l = e.id) != null ? l : `headlessui-combobox-button-${ee()}`, r = Ie("ComboboxButton");
  o({ el: r.buttonRef, $el: r.buttonRef });
  function i(d) {
    r.disabled.value || (r.comboboxState.value === 0 ? r.closeCombobox() : (d.preventDefault(), r.openCombobox()), X(() => {
      var f;
      return (f = y(r.inputRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    }));
  }
  function u(d) {
    switch (d.key) {
      case A.ArrowDown:
        d.preventDefault(), d.stopPropagation(), r.comboboxState.value === 1 && r.openCombobox(), X(() => {
          var f;
          return (f = r.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case A.ArrowUp:
        d.preventDefault(), d.stopPropagation(), r.comboboxState.value === 1 && (r.openCombobox(), X(() => {
          r.value.value || r.goToOption(L.Last);
        })), X(() => {
          var f;
          return (f = r.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case A.Escape:
        if (r.comboboxState.value !== 0)
          return;
        d.preventDefault(), r.optionsRef.value && !r.optionsPropsRef.value.static && d.stopPropagation(), r.closeCombobox(), X(() => {
          var f;
          return (f = r.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let c = Jt(m(() => ({ as: e.as, type: n.type })), r.buttonRef);
  return () => {
    var d, f;
    let s = { open: r.comboboxState.value === 0, disabled: r.disabled.value, value: r.value.value }, { ...p } = e, v = { ref: r.buttonRef, id: a, type: c.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (d = y(r.optionsRef)) == null ? void 0 : d.id, "aria-expanded": r.comboboxState.value === 0, "aria-labelledby": r.labelRef.value ? [(f = y(r.labelRef)) == null ? void 0 : f.id, a].join(" ") : void 0, disabled: r.disabled.value === !0 ? !0 : void 0, onKeydown: u, onClick: i };
    return $({ ourProps: v, theirProps: p, slot: s, attrs: n, slots: t, name: "ComboboxButton" });
  };
} });
P({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: null } }, emits: { change: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: l }) {
  var a;
  let r = (a = e.id) != null ? a : `headlessui-combobox-input-${ee()}`, i = Ie("ComboboxInput"), u = m(() => he(y(i.inputRef))), c = { value: !1 };
  l({ el: i.inputRef, $el: i.inputRef });
  function d() {
    i.change(null);
    let O = y(i.optionsRef);
    O && (O.scrollTop = 0), i.goToOption(L.Nothing);
  }
  let f = m(() => {
    var O;
    let D = i.value.value;
    return y(i.inputRef) ? typeof e.displayValue < "u" && D !== void 0 ? (O = e.displayValue(D)) != null ? O : "" : typeof D == "string" ? D : "" : "";
  });
  G(() => {
    ne([f, i.comboboxState, u], ([O, D], [j, g]) => {
      if (c.value)
        return;
      let B = y(i.inputRef);
      B && ((g === 0 && D === 1 || O !== j) && (B.value = O), requestAnimationFrame(() => {
        var b;
        if (c.value || !B || ((b = u.value) == null ? void 0 : b.activeElement) !== B)
          return;
        let { selectionStart: S, selectionEnd: C } = B;
        Math.abs((C != null ? C : 0) - (S != null ? S : 0)) === 0 && S === 0 && B.setSelectionRange(B.value.length, B.value.length);
      }));
    }, { immediate: !0 }), ne([i.comboboxState], ([O], [D]) => {
      if (O === 0 && D === 1) {
        if (c.value)
          return;
        let j = y(i.inputRef);
        if (!j)
          return;
        let g = j.value, { selectionStart: B, selectionEnd: b, selectionDirection: S } = j;
        j.value = "", j.value = g, S !== null ? j.setSelectionRange(B, b, S) : j.setSelectionRange(B, b);
      }
    });
  });
  let s = x(!1);
  function p() {
    s.value = !0;
  }
  function v() {
    xe().nextFrame(() => {
      s.value = !1;
    });
  }
  let h = xl();
  function w(O) {
    switch (c.value = !0, h(() => {
      c.value = !1;
    }), O.key) {
      case A.Enter:
        if (c.value = !1, i.comboboxState.value !== 0 || s.value)
          return;
        if (O.preventDefault(), O.stopPropagation(), i.activeOptionIndex.value === null) {
          i.closeCombobox();
          return;
        }
        i.selectActiveOption(), i.mode.value === 0 && i.closeCombobox();
        break;
      case A.ArrowDown:
        return c.value = !1, O.preventDefault(), O.stopPropagation(), Y(i.comboboxState.value, { [0]: () => i.goToOption(L.Next), [1]: () => i.openCombobox() });
      case A.ArrowUp:
        return c.value = !1, O.preventDefault(), O.stopPropagation(), Y(i.comboboxState.value, { [0]: () => i.goToOption(L.Previous), [1]: () => {
          i.openCombobox(), X(() => {
            i.value.value || i.goToOption(L.Last);
          });
        } });
      case A.Home:
        if (O.shiftKey)
          break;
        return c.value = !1, O.preventDefault(), O.stopPropagation(), i.goToOption(L.First);
      case A.PageUp:
        return c.value = !1, O.preventDefault(), O.stopPropagation(), i.goToOption(L.First);
      case A.End:
        if (O.shiftKey)
          break;
        return c.value = !1, O.preventDefault(), O.stopPropagation(), i.goToOption(L.Last);
      case A.PageDown:
        return c.value = !1, O.preventDefault(), O.stopPropagation(), i.goToOption(L.Last);
      case A.Escape:
        if (c.value = !1, i.comboboxState.value !== 0)
          return;
        O.preventDefault(), i.optionsRef.value && !i.optionsPropsRef.value.static && O.stopPropagation(), i.nullable.value && i.mode.value === 0 && i.value.value === null && d(), i.closeCombobox();
        break;
      case A.Tab:
        if (c.value = !1, i.comboboxState.value !== 0)
          return;
        i.mode.value === 0 && i.activationTrigger.value !== 1 && i.selectActiveOption(), i.closeCombobox();
        break;
    }
  }
  function I(O) {
    n("change", O), i.nullable.value && i.mode.value === 0 && O.target.value === "" && d(), i.openCombobox();
  }
  function E(O) {
    var D, j, g;
    let B = (D = O.relatedTarget) != null ? D : fe.find((b) => b !== O.currentTarget);
    if (c.value = !1, !((j = y(i.optionsRef)) != null && j.contains(B)) && !((g = y(i.buttonRef)) != null && g.contains(B)) && i.comboboxState.value === 0)
      return O.preventDefault(), i.mode.value === 0 && (i.nullable.value && i.value.value === null ? d() : i.activationTrigger.value !== 1 && i.selectActiveOption()), i.closeCombobox();
  }
  function F(O) {
    var D, j, g;
    let B = (D = O.relatedTarget) != null ? D : fe.find((b) => b !== O.currentTarget);
    (j = y(i.buttonRef)) != null && j.contains(B) || (g = y(i.optionsRef)) != null && g.contains(B) || i.disabled.value || i.immediate.value && i.comboboxState.value !== 0 && (i.openCombobox(), xe().nextFrame(() => {
      i.setActivationTrigger(1);
    }));
  }
  let Z = m(() => {
    var O, D, j, g;
    return (g = (j = (D = e.defaultValue) != null ? D : i.defaultValue.value !== void 0 ? (O = e.displayValue) == null ? void 0 : O.call(e, i.defaultValue.value) : null) != null ? j : i.defaultValue.value) != null ? g : "";
  });
  return () => {
    var O, D, j, g, B, b, S;
    let C = { open: i.comboboxState.value === 0 }, { displayValue: T, onChange: N, ...k } = e, W = { "aria-controls": (O = i.optionsRef.value) == null ? void 0 : O.id, "aria-expanded": i.comboboxState.value === 0, "aria-activedescendant": i.activeOptionIndex.value === null ? void 0 : i.virtual.value ? (D = i.options.value.find((oe) => !i.virtual.value.disabled(oe.dataRef.value) && i.compare(oe.dataRef.value, i.virtual.value.options[i.activeOptionIndex.value]))) == null ? void 0 : D.id : (j = i.options.value[i.activeOptionIndex.value]) == null ? void 0 : j.id, "aria-labelledby": (b = (g = y(i.labelRef)) == null ? void 0 : g.id) != null ? b : (B = y(i.buttonRef)) == null ? void 0 : B.id, "aria-autocomplete": "list", id: r, onCompositionstart: p, onCompositionend: v, onKeydown: w, onInput: I, onFocus: F, onBlur: E, role: "combobox", type: (S = t.type) != null ? S : "text", tabIndex: 0, ref: i.inputRef, defaultValue: Z.value, disabled: i.disabled.value === !0 ? !0 : void 0 };
    return $({ ourProps: W, theirProps: k, slot: C, attrs: t, slots: o, features: ce.RenderStrategy | ce.Static, name: "ComboboxInput" });
  };
} });
P({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let l = Ie("ComboboxOptions"), a = `headlessui-combobox-options-${ee()}`;
  o({ el: l.optionsRef, $el: l.optionsRef }), Q(() => {
    l.optionsPropsRef.value.static = e.static;
  }), Q(() => {
    l.optionsPropsRef.value.hold = e.hold;
  });
  let r = je(), i = m(() => r !== null ? (r.value & H.Open) === H.Open : l.comboboxState.value === 0);
  tn({ container: m(() => y(l.optionsRef)), enabled: m(() => l.comboboxState.value === 0), accept(c) {
    return c.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c) {
    c.setAttribute("role", "none");
  } });
  function u(c) {
    c.preventDefault();
  }
  return () => {
    var c, d, f;
    let s = { open: l.comboboxState.value === 0 }, p = { "aria-labelledby": (f = (c = y(l.labelRef)) == null ? void 0 : c.id) != null ? f : (d = y(l.buttonRef)) == null ? void 0 : d.id, id: a, ref: l.optionsRef, role: "listbox", "aria-multiselectable": l.mode.value === 1 ? !0 : void 0, onMousedown: u }, v = Le(e, ["hold"]);
    return $({ ourProps: p, theirProps: v, slot: s, attrs: n, slots: l.virtual.value && l.comboboxState.value === 0 ? { ...t, default: () => [V(Vl, {}, t.default)] } : t, features: ce.RenderStrategy | ce.Static, visible: i.value, name: "ComboboxOptions" });
  };
} });
P({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, order: { type: [Number], default: null } }, setup(e, { slots: n, attrs: t, expose: o }) {
  let l = Ie("ComboboxOption"), a = `headlessui-combobox-option-${ee()}`, r = x(null), i = m(() => e.disabled);
  o({ el: r, $el: r });
  let u = m(() => {
    var E;
    return l.virtual.value ? l.activeOptionIndex.value === l.calculateIndex(e.value) : l.activeOptionIndex.value === null ? !1 : ((E = l.options.value[l.activeOptionIndex.value]) == null ? void 0 : E.id) === a;
  }), c = m(() => l.isSelected(e.value)), d = J(cn, null), f = m(() => ({ disabled: e.disabled, value: e.value, domRef: r, order: m(() => e.order) }));
  G(() => l.registerOption(a, f)), le(() => l.unregisterOption(a, u.value)), Q(() => {
    let E = y(r);
    E && (d == null || d.value.measureElement(E));
  }), Q(() => {
    l.comboboxState.value === 0 && u.value && (l.virtual.value || l.activationTrigger.value !== 0 && X(() => {
      var E, F;
      return (F = (E = y(r)) == null ? void 0 : E.scrollIntoView) == null ? void 0 : F.call(E, { block: "nearest" });
    }));
  });
  function s(E) {
    E.preventDefault(), E.button === an.Left && (i.value || (l.selectOption(a), Zt() || requestAnimationFrame(() => {
      var F;
      return (F = y(l.inputRef)) == null ? void 0 : F.focus({ preventScroll: !0 });
    }), l.mode.value === 0 && l.closeCombobox()));
  }
  function p() {
    var E;
    if (e.disabled || (E = l.virtual.value) != null && E.disabled(e.value))
      return l.goToOption(L.Nothing);
    let F = l.calculateIndex(e.value);
    l.goToOption(L.Specific, F);
  }
  let v = en();
  function h(E) {
    v.update(E);
  }
  function w(E) {
    var F;
    if (!v.wasMoved(E) || e.disabled || (F = l.virtual.value) != null && F.disabled(e.value) || u.value)
      return;
    let Z = l.calculateIndex(e.value);
    l.goToOption(L.Specific, Z, 0);
  }
  function I(E) {
    var F;
    v.wasMoved(E) && (e.disabled || (F = l.virtual.value) != null && F.disabled(e.value) || u.value && (l.optionsPropsRef.value.hold || l.goToOption(L.Nothing)));
  }
  return () => {
    let { disabled: E } = e, F = { active: u.value, selected: c.value, disabled: E }, Z = { id: a, ref: r, role: "option", tabIndex: E === !0 ? void 0 : -1, "aria-disabled": E === !0 ? !0 : void 0, "aria-selected": c.value, disabled: void 0, onMousedown: s, onFocus: p, onPointerenter: h, onMouseenter: h, onPointermove: w, onMousemove: w, onPointerleave: I, onMouseleave: I }, O = Le(e, ["order", "value"]);
    return $({ ourProps: Z, theirProps: O, slot: F, attrs: t, slots: n, name: "ComboboxOption" });
  };
} });
function fn(e, n, t, o) {
  Be.isServer || Q((l) => {
    e = e != null ? e : window, e.addEventListener(n, t, o), l(() => e.removeEventListener(n, t, o));
  });
}
var Me = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Me || {});
function Hl() {
  let e = x(0);
  return Xt("keydown", (n) => {
    n.key === "Tab" && (e.value = n.shiftKey ? 1 : 0);
  }), e;
}
function vn(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let t of e.value) {
    let o = y(t);
    o instanceof HTMLElement && n.add(o);
  }
  return n;
}
var pn = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(pn || {});
let Re = Object.assign(P({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: x(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let l = x(null);
  o({ el: l, $el: l });
  let a = m(() => he(l)), r = x(!1);
  G(() => r.value = !0), le(() => r.value = !1), Wl({ ownerDocument: a }, m(() => r.value && Boolean(e.features & 16)));
  let i = Gl({ ownerDocument: a, container: l, initialFocus: m(() => e.initialFocus) }, m(() => r.value && Boolean(e.features & 2)));
  ql({ ownerDocument: a, container: l, containers: e.containers, previousActiveElement: i }, m(() => r.value && Boolean(e.features & 8)));
  let u = Hl();
  function c(p) {
    let v = y(l);
    !v || ((h) => h())(() => {
      Y(u.value, { [Me.Forwards]: () => {
        De(v, se.First, { skipElements: [p.relatedTarget] });
      }, [Me.Backwards]: () => {
        De(v, se.Last, { skipElements: [p.relatedTarget] });
      } });
    });
  }
  let d = x(!1);
  function f(p) {
    p.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function s(p) {
    if (!r.value)
      return;
    let v = vn(e.containers);
    y(l) instanceof HTMLElement && v.add(y(l));
    let h = p.relatedTarget;
    h instanceof HTMLElement && h.dataset.headlessuiFocusGuard !== "true" && (mn(v, h) || (d.value ? De(y(l), Y(u.value, { [Me.Forwards]: () => se.Next, [Me.Backwards]: () => se.Previous }) | se.WrapAround, { relativeTo: p.target }) : p.target instanceof HTMLElement && we(p.target)));
  }
  return () => {
    let p = {}, v = { ref: l, onKeydown: f, onFocusout: s }, { features: h, initialFocus: w, containers: I, ...E } = e;
    return V(Se, [Boolean(h & 4) && V(Ue, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: ke.Focusable }), $({ ourProps: v, theirProps: { ...n, ...E }, slot: p, attrs: n, slots: t, name: "FocusTrap" }), Boolean(h & 4) && V(Ue, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: ke.Focusable })]);
  };
} }), { features: pn });
function Ul(e) {
  let n = x(fe.slice());
  return ne([e], ([t], [o]) => {
    o === !0 && t === !1 ? ft(() => {
      n.value.splice(0);
    }) : o === !1 && t === !0 && (n.value = fe.slice());
  }, { flush: "post" }), () => {
    var t;
    return (t = n.value.find((o) => o != null && o.isConnected)) != null ? t : null;
  };
}
function Wl({ ownerDocument: e }, n) {
  let t = Ul(n);
  G(() => {
    Q(() => {
      var o, l;
      n.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((l = e.value) == null ? void 0 : l.body) && we(t());
    }, { flush: "post" });
  }), le(() => {
    n.value && we(t());
  });
}
function Gl({ ownerDocument: e, container: n, initialFocus: t }, o) {
  let l = x(null), a = x(!1);
  return G(() => a.value = !0), le(() => a.value = !1), G(() => {
    ne([n, t, o], (r, i) => {
      if (r.every((c, d) => (i == null ? void 0 : i[d]) === c) || !o.value)
        return;
      let u = y(n);
      u && ft(() => {
        var c, d;
        if (!a.value)
          return;
        let f = y(t), s = (c = e.value) == null ? void 0 : c.activeElement;
        if (f) {
          if (f === s) {
            l.value = s;
            return;
          }
        } else if (u.contains(s)) {
          l.value = s;
          return;
        }
        f ? we(f) : De(u, se.First | se.NoScroll) === qt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function ql({ ownerDocument: e, container: n, containers: t, previousActiveElement: o }, l) {
  var a;
  fn((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!l.value)
      return;
    let i = vn(t);
    y(n) instanceof HTMLElement && i.add(y(n));
    let u = o.value;
    if (!u)
      return;
    let c = r.target;
    c && c instanceof HTMLElement ? mn(i, c) ? (o.value = c, we(c)) : (r.preventDefault(), r.stopPropagation(), we(u)) : we(o.value);
  }, !0);
}
function mn(e, n) {
  for (let t of e)
    if (t.contains(n))
      return !0;
  return !1;
}
function Kl(e) {
  let n = Ut(e.getSnapshot());
  return le(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function Ql(e, n) {
  let t = e(), o = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t;
  }, subscribe(l) {
    return o.add(l), () => o.delete(l);
  }, dispatch(l, ...a) {
    let r = n[l].call(t, ...a);
    r && (t = r, o.forEach((i) => i()));
  } };
}
function Yl() {
  let e;
  return { before({ doc: n }) {
    var t;
    let o = n.documentElement;
    e = ((t = n.defaultView) != null ? t : window).innerWidth - o.clientWidth;
  }, after({ doc: n, d: t }) {
    let o = n.documentElement, l = o.clientWidth - o.offsetWidth, a = e - l;
    t.style(o, "paddingRight", `${a}px`);
  } };
}
function Zl() {
  return Yt() ? { before({ doc: e, d: n, meta: t }) {
    function o(l) {
      return t.containers.flatMap((a) => a()).some((a) => a.contains(l));
    }
    n.microTask(() => {
      var l;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let i = xe();
        i.style(e.documentElement, "scrollBehavior", "auto"), n.add(() => n.microTask(() => i.dispose()));
      }
      let a = (l = window.scrollY) != null ? l : window.pageYOffset, r = null;
      n.addEventListener(e, "click", (i) => {
        if (i.target instanceof HTMLElement)
          try {
            let u = i.target.closest("a");
            if (!u)
              return;
            let { hash: c } = new URL(u.href), d = e.querySelector(c);
            d && !o(d) && (r = d);
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
        if (i.target instanceof HTMLElement) {
          if (i.target.tagName === "INPUT")
            return;
          if (o(i.target)) {
            let u = i.target;
            for (; u.parentElement && u.dataset.headlessuiPortal !== "" && !(u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth); )
              u = u.parentElement;
            u.dataset.headlessuiPortal === "" && i.preventDefault();
          } else
            i.preventDefault();
        }
      }, { passive: !1 }), n.add(() => {
        var i;
        let u = (i = window.scrollY) != null ? i : window.pageYOffset;
        a !== u && window.scrollTo(0, a), r && r.isConnected && (r.scrollIntoView({ block: "nearest" }), r = null);
      });
    });
  } } : {};
}
function Xl() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function Jl(e) {
  let n = {};
  for (let t of e)
    Object.assign(n, t(n));
  return n;
}
let Ee = Ql(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var t;
  let o = (t = this.get(e)) != null ? t : { doc: e, count: 0, d: xe(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(n), this.set(e, o), this;
}, POP(e, n) {
  let t = this.get(e);
  return t && (t.count--, t.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: t }) {
  let o = { doc: e, d: n, meta: Jl(t) }, l = [Zl(), Yl(), Xl()];
  l.forEach(({ before: a }) => a == null ? void 0 : a(o)), l.forEach(({ after: a }) => a == null ? void 0 : a(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Ee.subscribe(() => {
  let e = Ee.getSnapshot(), n = /* @__PURE__ */ new Map();
  for (let [t] of e)
    n.set(t, t.documentElement.style.overflow);
  for (let t of e.values()) {
    let o = n.get(t.doc) === "hidden", l = t.count !== 0;
    (l && !o || !l && o) && Ee.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && Ee.dispatch("TEARDOWN", t);
  }
});
function eo(e, n, t) {
  let o = Kl(Ee), l = m(() => {
    let a = e.value ? o.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return ne([e, n], ([a, r], [i], u) => {
    if (!a || !r)
      return;
    Ee.dispatch("PUSH", a, t);
    let c = !1;
    u(() => {
      c || (Ee.dispatch("POP", i != null ? i : a, t), c = !0);
    });
  }, { immediate: !0 }), l;
}
let Ze = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map();
function kt(e, n = x(!0)) {
  Q((t) => {
    var o;
    if (!n.value)
      return;
    let l = y(e);
    if (!l)
      return;
    t(function() {
      var r;
      if (!l)
        return;
      let i = (r = Pe.get(l)) != null ? r : 1;
      if (i === 1 ? Pe.delete(l) : Pe.set(l, i - 1), i !== 1)
        return;
      let u = Ze.get(l);
      u && (u["aria-hidden"] === null ? l.removeAttribute("aria-hidden") : l.setAttribute("aria-hidden", u["aria-hidden"]), l.inert = u.inert, Ze.delete(l));
    });
    let a = (o = Pe.get(l)) != null ? o : 0;
    Pe.set(l, a + 1), a === 0 && (Ze.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }), l.setAttribute("aria-hidden", "true"), l.inert = !0);
  });
}
function to({ defaultContainers: e = [], portals: n, mainTreeNodeRef: t } = {}) {
  let o = x(null), l = he(o);
  function a() {
    var r, i, u;
    let c = [];
    for (let d of e)
      d !== null && (d instanceof HTMLElement ? c.push(d) : "value" in d && d.value instanceof HTMLElement && c.push(d.value));
    if (n != null && n.value)
      for (let d of n.value)
        c.push(d);
    for (let d of (r = l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? r : [])
      d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(y(o)) || d.contains((u = (i = y(o)) == null ? void 0 : i.getRootNode()) == null ? void 0 : u.host) || c.some((f) => d.contains(f)) || c.push(d));
    return c;
  }
  return { resolveContainers: a, contains(r) {
    return a().some((i) => i.contains(r));
  }, mainTreeNodeRef: o, MainTreeNode() {
    return t != null ? null : V(Ue, { features: ke.Hidden, ref: o });
  } };
}
let hn = Symbol("ForcePortalRootContext");
function no() {
  return J(hn, !1);
}
let ot = P({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: t }) {
  return re(hn, e.force), () => {
    let { force: o, ...l } = e;
    return $({ theirProps: l, ourProps: {}, slot: {}, slots: n, attrs: t, name: "ForcePortalRoot" });
  };
} }), bn = Symbol("StackContext");
var at = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(at || {});
function lo() {
  return J(bn, () => {
  });
}
function oo({ type: e, enabled: n, element: t, onUpdate: o }) {
  let l = lo();
  function a(...r) {
    o == null || o(...r), l(...r);
  }
  G(() => {
    ne(n, (r, i) => {
      r ? a(0, e, t) : i === !0 && a(1, e, t);
    }, { immediate: !0, flush: "sync" });
  }), le(() => {
    n.value && a(1, e, t);
  }), re(bn, a);
}
let gn = Symbol("DescriptionContext");
function ao() {
  let e = J(gn, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function ro({ slot: e = x({}), name: n = "Description", props: t = {} } = {}) {
  let o = x([]);
  function l(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return re(gn, { register: l, slot: e, name: n, props: t }), m(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
P({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t }) {
  var o;
  let l = (o = e.id) != null ? o : `headlessui-description-${ee()}`, a = ao();
  return G(() => le(a.register(l))), () => {
    let { name: r = "Description", slot: i = x({}), props: u = {} } = a, { ...c } = e, d = { ...Object.entries(u).reduce((f, [s, p]) => Object.assign(f, { [s]: K(p) }), {}), id: l };
    return $({ ourProps: d, theirProps: c, slot: i.value, attrs: n, slots: t, name: r });
  };
} });
function io(e) {
  let n = he(e);
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
const rt = /* @__PURE__ */ new WeakMap();
function uo(e) {
  var n;
  return (n = rt.get(e)) != null ? n : 0;
}
function At(e, n) {
  let t = n(uo(e));
  return t <= 0 ? rt.delete(e) : rt.set(e, t), t;
}
let yn = P({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t }) {
  let o = x(null), l = m(() => he(o)), a = no(), r = J(wn, null), i = x(a === !0 || r == null ? io(o.value) : r.resolveTarget());
  i.value && At(i.value, (s) => s + 1);
  let u = x(!1);
  G(() => {
    u.value = !0;
  }), Q(() => {
    a || r != null && (i.value = r.resolveTarget());
  });
  let c = J(it, null), d = !1, f = kn();
  return ne(o, () => {
    if (d || !c)
      return;
    let s = y(o);
    s && (le(c.register(s), f), d = !0);
  }), le(() => {
    var s, p;
    let v = (s = l.value) == null ? void 0 : s.getElementById("headlessui-portal-root");
    !v || i.value !== v || At(i.value, (h) => h - 1) || i.value.children.length > 0 || (p = i.value.parentElement) == null || p.removeChild(i.value);
  }), () => {
    if (!u.value || i.value === null)
      return null;
    let s = { ref: o, "data-headlessui-portal": "" };
    return V(An, { to: i.value }, $({ ourProps: s, theirProps: e, slot: {}, attrs: t, slots: n, name: "Portal" }));
  };
} }), it = Symbol("PortalParentContext");
function so() {
  let e = J(it, null), n = x([]);
  function t(a) {
    return n.value.push(a), e && e.register(a), () => o(a);
  }
  function o(a) {
    let r = n.value.indexOf(a);
    r !== -1 && n.value.splice(r, 1), e && e.unregister(a);
  }
  let l = { register: t, unregister: o, portals: n };
  return [n, P({ name: "PortalWrapper", setup(a, { slots: r }) {
    return re(it, l), () => {
      var i;
      return (i = r.default) == null ? void 0 : i.call(r);
    };
  } })];
}
let wn = Symbol("PortalGroupContext"), co = P({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: t }) {
  let o = Ht({ resolveTarget() {
    return e.target;
  } });
  return re(wn, o), () => {
    let { target: l, ...a } = e;
    return $({ theirProps: a, ourProps: {}, slot: {}, attrs: n, slots: t, name: "PortalGroup" });
  };
} });
var fo = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(fo || {});
let ut = Symbol("DialogContext");
function Ne(e) {
  let n = J(ut, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ne), t;
  }
  return n;
}
let Ve = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
P({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ve }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: l }) {
  var a, r;
  let i = (a = e.id) != null ? a : `headlessui-dialog-${ee()}`, u = x(!1);
  G(() => {
    u.value = !0;
  });
  let c = !1, d = m(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (c || (c = !0, console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), f = x(0), s = je(), p = m(() => e.open === Ve && s !== null ? (s.value & H.Open) === H.Open : e.open), v = x(null), h = m(() => he(v));
  if (l({ el: v, $el: v }), !(e.open !== Ve || s !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof p.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${p.value === Ve ? void 0 : e.open}`);
  let w = m(() => u.value && p.value ? 0 : 1), I = m(() => w.value === 0), E = m(() => f.value > 1), F = J(ut, null) !== null, [Z, O] = so(), { resolveContainers: D, mainTreeNodeRef: j, MainTreeNode: g } = to({ portals: Z, defaultContainers: [m(() => {
    var _;
    return (_ = oe.panelRef.value) != null ? _ : v.value;
  })] }), B = m(() => E.value ? "parent" : "leaf"), b = m(() => s !== null ? (s.value & H.Closing) === H.Closing : !1), S = m(() => F || b.value ? !1 : I.value), C = m(() => {
    var _, z, ie;
    return (ie = Array.from((z = (_ = h.value) == null ? void 0 : _.querySelectorAll("body > *")) != null ? z : []).find((ue) => ue.id === "headlessui-portal-root" ? !1 : ue.contains(y(j)) && ue instanceof HTMLElement)) != null ? ie : null;
  });
  kt(C, S);
  let T = m(() => E.value ? !0 : I.value), N = m(() => {
    var _, z, ie;
    return (ie = Array.from((z = (_ = h.value) == null ? void 0 : _.querySelectorAll("[data-headlessui-portal]")) != null ? z : []).find((ue) => ue.contains(y(j)) && ue instanceof HTMLElement)) != null ? ie : null;
  });
  kt(N, T), oo({ type: "Dialog", enabled: m(() => w.value === 0), element: v, onUpdate: (_, z) => {
    if (z === "Dialog")
      return Y(_, { [at.Add]: () => f.value += 1, [at.Remove]: () => f.value -= 1 });
  } });
  let k = ro({ name: "DialogDescription", slot: m(() => ({ open: p.value })) }), W = x(null), oe = { titleId: W, panelRef: x(null), dialogState: w, setTitleId(_) {
    W.value !== _ && (W.value = _);
  }, close() {
    n("close", !1);
  } };
  re(ut, oe);
  let be = m(() => !(!I.value || E.value));
  ht(D, (_, z) => {
    _.preventDefault(), oe.close(), X(() => z == null ? void 0 : z.focus());
  }, be);
  let _e = m(() => !(E.value || w.value !== 0));
  fn((r = h.value) == null ? void 0 : r.defaultView, "keydown", (_) => {
    _e.value && (_.defaultPrevented || _.key === A.Escape && (_.preventDefault(), _.stopPropagation(), oe.close()));
  });
  let Ot = m(() => !(b.value || w.value !== 0 || F));
  return eo(h, Ot, (_) => {
    var z;
    return { containers: [...(z = _.containers) != null ? z : [], D] };
  }), Q((_) => {
    if (w.value !== 0)
      return;
    let z = y(v);
    if (!z)
      return;
    let ie = new ResizeObserver((ue) => {
      for (let Ke of ue) {
        let $e = Ke.target.getBoundingClientRect();
        $e.x === 0 && $e.y === 0 && $e.width === 0 && $e.height === 0 && oe.close();
      }
    });
    ie.observe(z), _(() => ie.disconnect());
  }), () => {
    let { open: _, initialFocus: z, ...ie } = e, ue = { ...t, ref: v, id: i, role: d.value, "aria-modal": w.value === 0 ? !0 : void 0, "aria-labelledby": W.value, "aria-describedby": k.value }, Ke = { open: w.value === 0 };
    return V(ot, { force: !0 }, () => [V(yn, () => V(co, { target: v.value }, () => V(ot, { force: !1 }, () => V(Re, { initialFocus: z, containers: D, features: I.value ? Y(B.value, { parent: Re.features.RestoreFocus, leaf: Re.features.All & ~Re.features.FocusLock }) : Re.features.None }, () => V(O, {}, () => $({ ourProps: ue, theirProps: { ...ie, ...t }, slot: Ke, attrs: t, slots: o, visible: w.value === 0, features: ce.RenderStrategy | ce.Static, name: "Dialog" })))))), V(g)]);
  };
} });
P({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t }) {
  var o;
  let l = (o = e.id) != null ? o : `headlessui-dialog-overlay-${ee()}`, a = Ne("DialogOverlay");
  function r(i) {
    i.target === i.currentTarget && (i.preventDefault(), i.stopPropagation(), a.close());
  }
  return () => {
    let { ...i } = e;
    return $({ ourProps: { id: l, "aria-hidden": !0, onClick: r }, theirProps: i, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogOverlay" });
  };
} });
P({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let a = (l = e.id) != null ? l : `headlessui-dialog-backdrop-${ee()}`, r = Ne("DialogBackdrop"), i = x(null);
  return o({ el: i, $el: i }), G(() => {
    if (r.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...u } = e, c = { id: a, ref: i, "aria-hidden": !0 };
    return V(ot, { force: !0 }, () => V(yn, () => $({ ourProps: c, theirProps: { ...n, ...u }, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogBackdrop" })));
  };
} });
P({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let a = (l = e.id) != null ? l : `headlessui-dialog-panel-${ee()}`, r = Ne("DialogPanel");
  o({ el: r.panelRef, $el: r.panelRef });
  function i(u) {
    u.stopPropagation();
  }
  return () => {
    let { ...u } = e, c = { id: a, ref: r.panelRef, onClick: i };
    return $({ ourProps: c, theirProps: u, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogPanel" });
  };
} });
P({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t }) {
  var o;
  let l = (o = e.id) != null ? o : `headlessui-dialog-title-${ee()}`, a = Ne("DialogTitle");
  return G(() => {
    a.setTitleId(l), le(() => a.setTitleId(null));
  }), () => {
    let { ...r } = e;
    return $({ ourProps: { id: l }, theirProps: r, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogTitle" });
  };
} });
let Bt = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Lt(e) {
  var n, t;
  let o = (n = e.innerText) != null ? n : "", l = e.cloneNode(!0);
  if (!(l instanceof HTMLElement))
    return o;
  let a = !1;
  for (let i of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    i.remove(), a = !0;
  let r = a ? (t = l.innerText) != null ? t : "" : o;
  return Bt.test(r) && (r = r.replace(Bt, "")), r;
}
function vo(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string")
    return n.trim();
  let t = e.getAttribute("aria-labelledby");
  if (t) {
    let o = t.split(" ").map((l) => {
      let a = document.getElementById(l);
      if (a) {
        let r = a.getAttribute("aria-label");
        return typeof r == "string" ? r.trim() : Lt(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (o.length > 0)
      return o.join(", ");
  }
  return Lt(e).trim();
}
function po(e) {
  let n = x(""), t = x("");
  return () => {
    let o = y(e);
    if (!o)
      return "";
    let l = o.innerText;
    if (n.value === l)
      return t.value;
    let a = vo(o).trim().toLowerCase();
    return n.value = l, t.value = a, a;
  };
}
var mo = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(mo || {}), ho = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(ho || {});
function bo(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let xn = Symbol("MenuContext");
function Ge(e) {
  let n = J(xn, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ge), t;
  }
  return n;
}
P({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: t }) {
  let o = x(1), l = x(null), a = x(null), r = x([]), i = x(""), u = x(null), c = x(1);
  function d(s = (p) => p) {
    let p = u.value !== null ? r.value[u.value] : null, v = mt(s(r.value.slice()), (w) => y(w.dataRef.domRef)), h = p ? v.indexOf(p) : null;
    return h === -1 && (h = null), { items: v, activeItemIndex: h };
  }
  let f = { menuState: o, buttonRef: l, itemsRef: a, items: r, searchQuery: i, activeItemIndex: u, activationTrigger: c, closeMenu: () => {
    o.value = 1, u.value = null;
  }, openMenu: () => o.value = 0, goToItem(s, p, v) {
    let h = d(), w = lt(s === L.Specific ? { focus: L.Specific, id: p } : { focus: s }, { resolveItems: () => h.items, resolveActiveIndex: () => h.activeItemIndex, resolveId: (I) => I.id, resolveDisabled: (I) => I.dataRef.disabled });
    i.value = "", u.value = w, c.value = v != null ? v : 1, r.value = h.items;
  }, search(s) {
    let p = i.value !== "" ? 0 : 1;
    i.value += s.toLowerCase();
    let v = (u.value !== null ? r.value.slice(u.value + p).concat(r.value.slice(0, u.value + p)) : r.value).find((w) => w.dataRef.textValue.startsWith(i.value) && !w.dataRef.disabled), h = v ? r.value.indexOf(v) : -1;
    h === -1 || h === u.value || (u.value = h, c.value = 1);
  }, clearSearch() {
    i.value = "";
  }, registerItem(s, p) {
    let v = d((h) => [...h, { id: s, dataRef: p }]);
    r.value = v.items, u.value = v.activeItemIndex, c.value = 1;
  }, unregisterItem(s) {
    let p = d((v) => {
      let h = v.findIndex((w) => w.id === s);
      return h !== -1 && v.splice(h, 1), v;
    });
    r.value = p.items, u.value = p.activeItemIndex, c.value = 1;
  } };
  return ht([l, a], (s, p) => {
    var v;
    f.closeMenu(), pt(p, vt.Loose) || (s.preventDefault(), (v = y(l)) == null || v.focus());
  }, m(() => o.value === 0)), re(xn, f), bt(m(() => Y(o.value, { [0]: H.Open, [1]: H.Closed }))), () => {
    let s = { open: o.value === 0, close: f.closeMenu };
    return $({ ourProps: {}, theirProps: e, slot: s, slots: n, attrs: t, name: "Menu" });
  };
} });
P({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let a = (l = e.id) != null ? l : `headlessui-menu-button-${ee()}`, r = Ge("MenuButton");
  o({ el: r.buttonRef, $el: r.buttonRef });
  function i(f) {
    switch (f.key) {
      case A.Space:
      case A.Enter:
      case A.ArrowDown:
        f.preventDefault(), f.stopPropagation(), r.openMenu(), X(() => {
          var s;
          (s = y(r.itemsRef)) == null || s.focus({ preventScroll: !0 }), r.goToItem(L.First);
        });
        break;
      case A.ArrowUp:
        f.preventDefault(), f.stopPropagation(), r.openMenu(), X(() => {
          var s;
          (s = y(r.itemsRef)) == null || s.focus({ preventScroll: !0 }), r.goToItem(L.Last);
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
  function c(f) {
    e.disabled || (r.menuState.value === 0 ? (r.closeMenu(), X(() => {
      var s;
      return (s = y(r.buttonRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    })) : (f.preventDefault(), r.openMenu(), bo(() => {
      var s;
      return (s = y(r.itemsRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    })));
  }
  let d = Jt(m(() => ({ as: e.as, type: n.type })), r.buttonRef);
  return () => {
    var f;
    let s = { open: r.menuState.value === 0 }, { ...p } = e, v = { ref: r.buttonRef, id: a, type: d.value, "aria-haspopup": "menu", "aria-controls": (f = y(r.itemsRef)) == null ? void 0 : f.id, "aria-expanded": r.menuState.value === 0, onKeydown: i, onKeyup: u, onClick: c };
    return $({ ourProps: v, theirProps: p, slot: s, attrs: n, slots: t, name: "MenuButton" });
  };
} });
P({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let a = (l = e.id) != null ? l : `headlessui-menu-items-${ee()}`, r = Ge("MenuItems"), i = x(null);
  o({ el: r.itemsRef, $el: r.itemsRef }), tn({ container: m(() => y(r.itemsRef)), enabled: m(() => r.menuState.value === 0), accept(s) {
    return s.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : s.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s) {
    s.setAttribute("role", "none");
  } });
  function u(s) {
    var p;
    switch (i.value && clearTimeout(i.value), s.key) {
      case A.Space:
        if (r.searchQuery.value !== "")
          return s.preventDefault(), s.stopPropagation(), r.search(s.key);
      case A.Enter:
        if (s.preventDefault(), s.stopPropagation(), r.activeItemIndex.value !== null) {
          let v = r.items.value[r.activeItemIndex.value];
          (p = y(v.dataRef.domRef)) == null || p.click();
        }
        r.closeMenu(), Qt(y(r.buttonRef));
        break;
      case A.ArrowDown:
        return s.preventDefault(), s.stopPropagation(), r.goToItem(L.Next);
      case A.ArrowUp:
        return s.preventDefault(), s.stopPropagation(), r.goToItem(L.Previous);
      case A.Home:
      case A.PageUp:
        return s.preventDefault(), s.stopPropagation(), r.goToItem(L.First);
      case A.End:
      case A.PageDown:
        return s.preventDefault(), s.stopPropagation(), r.goToItem(L.Last);
      case A.Escape:
        s.preventDefault(), s.stopPropagation(), r.closeMenu(), X(() => {
          var v;
          return (v = y(r.buttonRef)) == null ? void 0 : v.focus({ preventScroll: !0 });
        });
        break;
      case A.Tab:
        s.preventDefault(), s.stopPropagation(), r.closeMenu(), X(() => Fl(y(r.buttonRef), s.shiftKey ? se.Previous : se.Next));
        break;
      default:
        s.key.length === 1 && (r.search(s.key), i.value = setTimeout(() => r.clearSearch(), 350));
        break;
    }
  }
  function c(s) {
    switch (s.key) {
      case A.Space:
        s.preventDefault();
        break;
    }
  }
  let d = je(), f = m(() => d !== null ? (d.value & H.Open) === H.Open : r.menuState.value === 0);
  return () => {
    var s, p;
    let v = { open: r.menuState.value === 0 }, { ...h } = e, w = { "aria-activedescendant": r.activeItemIndex.value === null || (s = r.items.value[r.activeItemIndex.value]) == null ? void 0 : s.id, "aria-labelledby": (p = y(r.buttonRef)) == null ? void 0 : p.id, id: a, onKeydown: u, onKeyup: c, role: "menu", tabIndex: 0, ref: r.itemsRef };
    return $({ ourProps: w, theirProps: h, slot: v, attrs: n, slots: t, features: ce.RenderStrategy | ce.Static, visible: f.value, name: "MenuItems" });
  };
} });
P({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: t, expose: o }) {
  var l;
  let a = (l = e.id) != null ? l : `headlessui-menu-item-${ee()}`, r = Ge("MenuItem"), i = x(null);
  o({ el: i, $el: i });
  let u = m(() => r.activeItemIndex.value !== null ? r.items.value[r.activeItemIndex.value].id === a : !1), c = po(i), d = m(() => ({ disabled: e.disabled, get textValue() {
    return c();
  }, domRef: i }));
  G(() => r.registerItem(a, d)), le(() => r.unregisterItem(a)), Q(() => {
    r.menuState.value === 0 && u.value && r.activationTrigger.value !== 0 && X(() => {
      var I, E;
      return (E = (I = y(i)) == null ? void 0 : I.scrollIntoView) == null ? void 0 : E.call(I, { block: "nearest" });
    });
  });
  function f(I) {
    if (e.disabled)
      return I.preventDefault();
    r.closeMenu(), Qt(y(r.buttonRef));
  }
  function s() {
    if (e.disabled)
      return r.goToItem(L.Nothing);
    r.goToItem(L.Specific, a);
  }
  let p = en();
  function v(I) {
    p.update(I);
  }
  function h(I) {
    p.wasMoved(I) && (e.disabled || u.value || r.goToItem(L.Specific, a, 0));
  }
  function w(I) {
    p.wasMoved(I) && (e.disabled || u.value && r.goToItem(L.Nothing));
  }
  return () => {
    let { disabled: I, ...E } = e, F = { active: u.value, disabled: I, close: r.closeMenu };
    return $({ ourProps: { id: a, ref: i, role: "menuitem", tabIndex: I === !0 ? void 0 : -1, "aria-disabled": I === !0 ? !0 : void 0, onClick: f, onFocus: s, onPointerenter: v, onMouseenter: v, onPointermove: h, onMousemove: h, onPointerleave: w, onMouseleave: w }, theirProps: { ...t, ...E }, slot: F, attrs: t, slots: n, name: "MenuItem" });
  };
} });
function go(e) {
  let n = { called: !1 };
  return (...t) => {
    if (!n.called)
      return n.called = !0, e(...t);
  };
}
function Xe(e, ...n) {
  e && n.length > 0 && e.classList.add(...n);
}
function He(e, ...n) {
  e && n.length > 0 && e.classList.remove(...n);
}
var st = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(st || {});
function yo(e, n) {
  let t = xe();
  if (!e)
    return t.dispose;
  let { transitionDuration: o, transitionDelay: l } = getComputedStyle(e), [a, r] = [o, l].map((i) => {
    let [u = 0] = i.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, d) => d - c);
    return u;
  });
  return a !== 0 ? t.setTimeout(() => n("finished"), a + r) : n("finished"), t.add(() => n("cancelled")), t.dispose;
}
function jt(e, n, t, o, l, a) {
  let r = xe(), i = a !== void 0 ? go(a) : () => {
  };
  return He(e, ...l), Xe(e, ...n, ...t), r.nextFrame(() => {
    He(e, ...t), Xe(e, ...o), r.add(yo(e, (u) => (He(e, ...o, ...n), Xe(e, ...l), i(u))));
  }), r.add(() => He(e, ...n, ...t, ...o, ...l)), r.add(() => i("cancelled")), r.dispose;
}
function Oe(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let gt = Symbol("TransitionContext");
var wo = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(wo || {});
function xo() {
  return J(gt, null) !== null;
}
function So() {
  let e = J(gt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Oo() {
  let e = J(yt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let yt = Symbol("NestingContext");
function qe(e) {
  return "children" in e ? qe(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function Sn(e) {
  let n = x([]), t = x(!1);
  G(() => t.value = !0), le(() => t.value = !1);
  function o(a, r = ye.Hidden) {
    let i = n.value.findIndex(({ id: u }) => u === a);
    i !== -1 && (Y(r, { [ye.Unmount]() {
      n.value.splice(i, 1);
    }, [ye.Hidden]() {
      n.value[i].state = "hidden";
    } }), !qe(n) && t.value && (e == null || e()));
  }
  function l(a) {
    let r = n.value.find(({ id: i }) => i === a);
    return r ? r.state !== "visible" && (r.state = "visible") : n.value.push({ id: a, state: "visible" }), () => o(a, ye.Unmount);
  }
  return { children: n, register: l, unregister: o };
}
let On = ce.RenderStrategy, Eo = P({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: l }) {
  let a = x(0);
  function r() {
    a.value |= H.Opening, n("beforeEnter");
  }
  function i() {
    a.value &= ~H.Opening, n("afterEnter");
  }
  function u() {
    a.value |= H.Closing, n("beforeLeave");
  }
  function c() {
    a.value &= ~H.Closing, n("afterLeave");
  }
  if (!xo() && Bl())
    return () => V(To, { ...e, onBeforeEnter: r, onAfterEnter: i, onBeforeLeave: u, onAfterLeave: c }, o);
  let d = x(null), f = m(() => e.unmount ? ye.Unmount : ye.Hidden);
  l({ el: d, $el: d });
  let { show: s, appear: p } = So(), { register: v, unregister: h } = Oo(), w = x(s.value ? "visible" : "hidden"), I = { value: !0 }, E = ee(), F = { value: !1 }, Z = Sn(() => {
    !F.value && w.value !== "hidden" && (w.value = "hidden", h(E), c());
  });
  G(() => {
    let T = v(E);
    le(T);
  }), Q(() => {
    if (f.value === ye.Hidden && E) {
      if (s.value && w.value !== "visible") {
        w.value = "visible";
        return;
      }
      Y(w.value, { hidden: () => h(E), visible: () => v(E) });
    }
  });
  let O = Oe(e.enter), D = Oe(e.enterFrom), j = Oe(e.enterTo), g = Oe(e.entered), B = Oe(e.leave), b = Oe(e.leaveFrom), S = Oe(e.leaveTo);
  G(() => {
    Q(() => {
      if (w.value === "visible") {
        let T = y(d);
        if (T instanceof Comment && T.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function C(T) {
    let N = I.value && !p.value, k = y(d);
    !k || !(k instanceof HTMLElement) || N || (F.value = !0, s.value && r(), s.value || u(), T(s.value ? jt(k, O, D, j, g, (W) => {
      F.value = !1, W === st.Finished && i();
    }) : jt(k, B, b, S, g, (W) => {
      F.value = !1, W === st.Finished && (qe(Z) || (w.value = "hidden", h(E), c()));
    })));
  }
  return G(() => {
    ne([s], (T, N, k) => {
      C(k), I.value = !1;
    }, { immediate: !0 });
  }), re(yt, Z), bt(m(() => Y(w.value, { visible: H.Open, hidden: H.Closed }) | a.value)), () => {
    let { appear: T, show: N, enter: k, enterFrom: W, enterTo: oe, entered: be, leave: _e, leaveFrom: Ot, leaveTo: _, ...z } = e, ie = { ref: d }, ue = { ...z, ...p.value && s.value && Be.isServer ? { class: We([t.class, z.class, ...O, ...D]) } : {} };
    return $({ theirProps: ue, ourProps: ie, slot: {}, slots: o, attrs: t, features: On, visible: w.value === "visible", name: "TransitionChild" });
  };
} }), Io = Eo, To = P({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o }) {
  let l = je(), a = m(() => e.show === null && l !== null ? (l.value & H.Open) === H.Open : e.show);
  Q(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = x(a.value ? "visible" : "hidden"), i = Sn(() => {
    r.value = "hidden";
  }), u = x(!0), c = { show: a, appear: m(() => e.appear || !u.value) };
  return G(() => {
    Q(() => {
      u.value = !1, a.value ? r.value = "visible" : qe(i) || (r.value = "hidden");
    });
  }), re(yt, i), re(gt, c), () => {
    let d = Le(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return $({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [V(Io, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...t, ...f, ...d }, o.default)] }, attrs: {}, features: On, visible: r.value === "visible", name: "Transition" });
  };
} });
var Nt;
const Co = typeof window < "u";
Co && ((Nt = window == null ? void 0 : window.navigator) == null ? void 0 : Nt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ro(e) {
  return e;
}
const dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ct = "__vueuse_ssr_handlers__";
dt[ct] = dt[ct] || {};
dt[ct];
var _t;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(_t || (_t = {}));
var Po = Object.defineProperty, $t = Object.getOwnPropertySymbols, Mo = Object.prototype.hasOwnProperty, Fo = Object.prototype.propertyIsEnumerable, zt = (e, n, t) => n in e ? Po(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Do = (e, n) => {
  for (var t in n || (n = {}))
    Mo.call(n, t) && zt(e, t, n[t]);
  if ($t)
    for (var t of $t(n))
      Fo.call(n, t) && zt(e, t, n[t]);
  return e;
};
const ko = {
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
Do({
  linear: Ro
}, ko);
function Ao(e, n) {
  return m({
    get: () => e.modelValue,
    set: (t) => n("update:modelValue", t)
  });
}
const Bo = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, Lo = { name: "Error" }, En = /* @__PURE__ */ P({
  ...Lo,
  props: {
    error: {}
  },
  setup(e) {
    return (n, t) => n.error ? (M(), U("div", Bo, [
      te(n.$slots, "default", {}, () => [
        Fe(me(n.error), 1)
      ])
    ])) : ve("", !0);
  }
}), jo = { class: "w-full" }, No = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, _o = {
  name: "Base",
  inheritAttrs: !1
}, $o = /* @__PURE__ */ P({
  ..._o,
  props: {
    description: {},
    error: {},
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (n, t) => (M(), U("div", jo, [
      q("div", {
        class: We(["mt-1 w-full rounded-md", { "shadow-sm": n.shadow }])
      }, [
        te(n.$slots, "default")
      ], 2),
      n.description ? (M(), U("p", No, me(n.description), 1)) : ve("", !0),
      n.error ? (M(), ae(En, {
        key: 1,
        error: n.error
      }, null, 8, ["error"])) : ve("", !0)
    ]));
  }
}), zo = { name: "Actions" }, Vo = { class: "mt-8 border-t border-gray-200 pt-5" }, Ho = { class: "flex justify-end" }, Uo = { class: "inline-flex" };
function Wo(e, n, t, o, l, a) {
  return M(), U("div", Vo, [
    q("div", Ho, [
      q("span", Uo, [
        te(e.$slots, "default")
      ])
    ])
  ]);
}
const Go = /* @__PURE__ */ ll(zo, [["render", Wo]]), qo = { class: "relative flex items-start" }, Ko = { class: "flex h-5 items-center" }, Qo = ["id", "value", "disabled", "readonly"], Yo = { class: "ml-3" }, Zo = ["for"], Xo = { name: "Checkbox" }, Jo = /* @__PURE__ */ P({
  ...Xo,
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
    const t = Ao(e, n);
    return (o, l) => (M(), ae($o, pe(o.$props, { shadow: !1 }), {
      default: de(() => [
        q("div", qo, [
          q("div", Ko, [
            tt(q("input", pe({
              id: o.id,
              "onUpdate:modelValue": l[0] || (l[0] = (a) => Bn(t) ? t.value = a : null),
              value: o.value,
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 accent-primary-600 focus:ring-primary-500",
              disabled: o.disabled,
              readonly: o.readonly
            }, o.$attrs), null, 16, Qo), [
              [Ln, K(t)]
            ]),
            q("div", Yo, [
              q("label", {
                for: o.id,
                class: "block text-sm font-medium leading-5 text-gray-700"
              }, me(o.label), 9, Zo)
            ])
          ])
        ])
      ]),
      _: 1
    }, 16));
  }
}), ea = ["for"], ta = { name: "Label" }, na = /* @__PURE__ */ P({
  ...ta,
  props: {
    for: {}
  },
  setup(e) {
    const n = e;
    return (t, o) => (M(), U("label", {
      for: n.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      te(t.$slots, "default")
    ], 8, ea));
  }
});
var In = {}, Tn = {};
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
    const a = function(r) {
      return {
        __options: r,
        handler: o(r),
        config: l(r)
      };
    };
    return a.__isOptionsFunction = !0, a.__pluginFunction = o, a.__configFunction = l, a;
  };
  const t = n;
})(Tn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const n = /* @__PURE__ */ t(Tn);
  function t(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  const o = n.default;
})(In);
let Je = In;
var la = (Je.__esModule ? Je : { default: Je }).default, Cn = {}, Rn = {}, wt = { exports: {} }, R = String, Pn = function() {
  return { isColorSupported: !1, reset: R, bold: R, dim: R, italic: R, underline: R, inverse: R, hidden: R, strikethrough: R, black: R, red: R, green: R, yellow: R, blue: R, magenta: R, cyan: R, white: R, gray: R, bgBlack: R, bgRed: R, bgGreen: R, bgYellow: R, bgBlue: R, bgMagenta: R, bgCyan: R, bgWhite: R, blackBright: R, redBright: R, greenBright: R, yellowBright: R, blueBright: R, magentaBright: R, cyanBright: R, whiteBright: R, bgBlackBright: R, bgRedBright: R, bgGreenBright: R, bgYellowBright: R, bgBlueBright: R, bgMagentaBright: R, bgCyanBright: R, bgWhiteBright: R };
};
wt.exports = Pn();
wt.exports.createColors = Pn;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function n(u, c) {
    for (var d in c)
      Object.defineProperty(u, d, {
        enumerable: !0,
        get: c[d]
      });
  }
  n(e, {
    dim: function() {
      return r;
    },
    default: function() {
      return i;
    }
  });
  const t = /* @__PURE__ */ o(wt.exports);
  function o(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  let l = /* @__PURE__ */ new Set();
  function a(u, c, d) {
    typeof process < "u" && process.env.JEST_WORKER_ID || d && l.has(d) || (d && l.add(d), console.warn(""), c.forEach((f) => console.warn(u, "-", f)));
  }
  function r(u) {
    return t.default.dim(u);
  }
  const i = {
    info(u, c) {
      a(t.default.bold(t.default.cyan("info")), ...Array.isArray(u) ? [
        u
      ] : [
        c,
        u
      ]);
    },
    warn(u, c) {
      a(t.default.bold(t.default.yellow("warn")), ...Array.isArray(u) ? [
        u
      ] : [
        c,
        u
      ]);
    },
    risk(u, c) {
      a(t.default.bold(t.default.magenta("risk")), ...Array.isArray(u) ? [
        u
      ] : [
        c,
        u
      ]);
    }
  };
})(Rn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return l;
    }
  });
  const n = /* @__PURE__ */ t(Rn);
  function t(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function o({ version: a, from: r, to: i }) {
    n.default.warn(`${r}-color-renamed`, [
      `As of Tailwind CSS ${a}, \`${r}\` has been renamed to \`${i}\`.`,
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
})(Cn);
let et = Cn;
var oa = (et.__esModule ? et : { default: et }).default;
la.withOptions(
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
              ...oa.indigo,
              ...(n = e == null ? void 0 : e.colors) == null ? void 0 : n.primary
            }
          }
        }
      }
    };
  }
);
const aa = /* @__PURE__ */ P({
  __name: "CheckboxGroup",
  props: {
    form: {},
    modelValue: {},
    items: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = n, l = m({
      get: () => t.modelValue,
      set: (a) => {
        o("update:modelValue", a);
      }
    });
    return (a, r) => (M(!0), U(Se, null, Ae(a.items, (i, u) => {
      var c, d, f;
      return M(), ae(K(Jo), {
        id: `${t.form._prefix}-${(c = i.label) != null ? c : i}`,
        key: u,
        modelValue: l.value,
        "onUpdate:modelValue": r[0] || (r[0] = (s) => l.value = s),
        value: (d = i.value) != null ? d : i,
        label: (f = i.label) != null ? f : i
      }, null, 8, ["id", "modelValue", "value", "label"]);
    }), 128));
  }
}), Mn = (e) => Object.keys(e).reduce((n, t) => {
  var o;
  return e[t].schema ? { ...n, ...Mn(e[t].schema) } : (n[t] = (o = e[t].value) != null ? o : null, n);
}, {}), ra = (e) => {
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
function pa(e = {}) {
  const n = ra(6), t = Dn(
    Object.keys(e).reduce((o, l) => {
      var r, i, u;
      if (e[l].schema)
        return { ...o, ...Mn(e[l].schema) };
      if (e[l].component === aa)
        return o[l] = (r = e[l].checked) != null ? r : [], o;
      const a = (i = e[l]) == null ? void 0 : i.fieldset;
      return a ? (Object.entries(a).forEach(([c, d]) => {
        var f;
        d != null && d.model ? o[d.model] = (f = d.value) != null ? f : null : o[c] = d;
      }), o) : (o[l] = (u = e[l].value) != null ? u : null, o);
    }, {})
  );
  return t._prefix = n, {
    elements: xt(e),
    form: t
  };
}
const ia = { key: 0 }, St = /* @__PURE__ */ P({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    const n = e, t = m(() => {
      var p;
      const s = (p = n.element.definition) == null ? void 0 : p.fieldset;
      return s ? Object.entries(s).reduce((v, [h, w]) => (w != null && w.model ? v[w.model] = n.form[w.model] : v[h] = n.form[h], v), {}) : {
        modelValue: n.form[n.element.name]
      };
    }), o = m(() => {
      var v;
      let s = Object.entries({
        id: `${n.form._prefix}-${n.element.name}`,
        ...n.element.definition,
        ...n.element.definition.props,
        ...t.value,
        schema: n.element.definition.schema,
        form: n.form,
        error: (v = a.value[0]) != null ? v : null
      }), p = n.element.definition.component.props;
      return Object.fromEntries(s.filter(([h]) => p.hasOwnProperty(h)));
    }), l = m(() => {
      var p;
      const s = (p = n.element.definition) == null ? void 0 : p.fieldset;
      return s ? Object.entries(s).reduce((v, [h, w]) => (w != null && w.model ? v[`update:${w.model}`] = (I) => n.form[w.model] = I : v[`update:${h}`] = (I) => n.form[h] = I, v), {}) : { "update:modelValue": (v) => n.form[n.element.name] = v };
    }), a = m(() => {
      var p;
      const s = (p = n.element.definition) == null ? void 0 : p.fieldset;
      return s ? Object.keys(s).map((v) => n.form.errors[v]).filter((v) => v) : [n.form.errors[n.element.name]];
    }), r = m(() => {
      var p;
      return ((p = n.element.definition.label) != null ? p : n.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }), i = !!n.element.definition.schema, u = m(() => n.element.definition.showLabel !== void 0 ? n.element.definition.showLabel : n.element.definition.component.name === "Hidden" ? !1 : !i), c = m(() => {
      if (n.element.definition.alert !== void 0) {
        const s = n.element.definition.alert;
        return s.visible = typeof s.visible == "function" ? s.visible : () => !0, s;
      }
      return null;
    }), d = x(
      typeof n.element.definition.visible == "function" ? n.element.definition.visible : () => !0
    ), f = x(
      typeof n.element.definition.visible == "function" ? n.element.definition.visible(n.form) : () => !0
    );
    return ne(n.form, (s) => {
      typeof d.value == "function" && (f.value = d.value(s));
    }), (s, p) => f.value ? (M(), U("div", ia, [
      u.value ? (M(), ae(K(na), {
        key: 0,
        for: o.value.id
      }, {
        default: de(() => [
          Fe(me(r.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : ve("", !0),
      (M(), ae(Nn(s.element.definition.component), pe({
        key: s.element.name
      }, o.value, _n(l.value)), null, 16)),
      c.value && c.value.visible() ? (M(), ae(K(el), {
        key: 1,
        "without-icon": ""
      }, $n({
        default: de(() => [
          Fe(me(c.value.text) + " ", 1)
        ]),
        _: 2
      }, [
        c.value.actionHref && c.value.actionText ? {
          name: "actions",
          fn: de(() => [
            Ce(K(nl), {
              external: c.value.externalAction,
              href: c.value.actionHref
            }, {
              default: de(() => [
                Fe(me(c.value.actionText), 1)
              ]),
              _: 1
            }, 8, ["external", "href"])
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : ve("", !0),
      o.value.hasOwnProperty("error") ? ve("", !0) : (M(!0), U(Se, { key: 2 }, Ae(a.value, (v, h) => (M(), ae(K(En), {
        key: h,
        error: v
      }, null, 8, ["error"]))), 128))
    ])) : ve("", !0);
  }
}), ua = { class: "mx-auto mt-6 max-w-md space-y-6" }, ma = /* @__PURE__ */ P({
  __name: "FormBuilder",
  props: {
    schema: {},
    submit: { default: "Save" }
  },
  setup(e) {
    return (n, t) => (M(), U("div", ua, [
      te(n.$slots, "default", {}, () => [
        (M(!0), U(Se, null, Ae(n.schema.elements, (o, l) => (M(), ae(St, {
          key: l,
          element: o,
          form: n.schema.form
        }, null, 8, ["element", "form"]))), 128))
      ]),
      te(n.$slots, "actions-wrapper", {
        form: n.schema.form
      }, () => [
        Ce(K(Go), null, {
          default: de(() => [
            te(n.$slots, "actions", {
              form: n.schema.form
            }, () => [
              Ce(K(al), {
                as: "button",
                type: "submit",
                loading: n.schema.form.processing
              }, {
                default: de(() => [
                  Fe(me(n.submit), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ])
          ]),
          _: 3
        })
      ])
    ]));
  }
}), ha = /* @__PURE__ */ P({
  __name: "Grid",
  props: {
    schema: {},
    form: {}
  },
  setup(e) {
    const t = xt(e.schema);
    return (o, l) => (M(), U("div", {
      class: We(["grid gap-x-4 gap-y-6 md:grid-flow-col", "md:grid-cols-" + K(t).length])
    }, [
      (M(!0), U(Se, null, Ae(K(t), (a, r) => (M(), ae(St, pe({
        key: r,
        element: a,
        form: o.form,
        ref_for: !0
      }, o.$attrs), null, 16, ["element", "form"]))), 128))
    ], 2));
  }
}), sa = { class: "mt-10" }, da = {
  key: 0,
  class: "mt-1 whitespace-pre-line text-sm leading-6 text-gray-500"
}, ca = { class: "mt-4 space-y-6" }, ba = /* @__PURE__ */ P({
  __name: "Section",
  props: {
    schema: {},
    form: {},
    heading: {},
    description: {}
  },
  setup(e) {
    const t = xt(e.schema);
    return (o, l) => (M(), U("div", sa, [
      q("label", null, me(o.heading), 1),
      o.description ? (M(), U("p", da, me(o.description), 1)) : ve("", !0),
      q("div", ca, [
        (M(!0), U(Se, null, Ae(K(t), (a, r) => (M(), ae(St, {
          key: r,
          element: a,
          form: o.form
        }, null, 8, ["element", "form"]))), 128))
      ])
    ]));
  }
});
export {
  aa as CheckboxGroup,
  ma as FormBuilder,
  ha as Grid,
  ba as Section,
  pa as useSchema
};
