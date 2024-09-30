import { Link as Dn, useForm as Fn } from "@inertiajs/vue3";
import * as Et from "vue";
import { defineComponent as R, computed as m, ref as w, watch as te, provide as ae, h as z, cloneVNode as zt, reactive as Ht, onMounted as K, Fragment as Se, watchEffect as Q, inject as Z, onUnmounted as ne, nextTick as X, unref as q, getCurrentInstance as kn, Teleport as An, normalizeClass as Ue, openBlock as M, createElementBlock as W, createElementVNode as G, createCommentVNode as ve, createVNode as Ce, renderSlot as re, createBlock as oe, mergeProps as pe, withCtx as de, toRaw as ge, createTextVNode as De, toDisplayString as me, withDirectives as tt, isRef as Ln, vModelCheckbox as Bn, vShow as It, shallowRef as Wt, triggerRef as Tt, onScopeDispose as Nn, renderList as Ae, resolveDynamicComponent as _n, toHandlers as jn, createSlots as $n } from "vue";
function Vn(e, n) {
  return M(), W("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    G("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const zn = { name: "Spinner" }, Ct = /* @__PURE__ */ R({
  ...zn,
  props: {
    textClass: { default: "text-white" }
  },
  setup(e) {
    return (n, t) => (M(), W("svg", {
      class: Ue(["h-5 w-5 animate-spin", n.textClass]),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, t[0] || (t[0] = [
      G("circle", {
        class: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4"
      }, null, -1),
      G("path", {
        class: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      }, null, -1)
    ]), 2));
  }
}), Hn = ["disabled", "type"], Wn = ["href"], Un = { name: "Button" }, Ut = /* @__PURE__ */ R({
  ...Un,
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
    return (l, r) => t.value === "button" ? (M(), W("button", pe({
      key: 0,
      class: o,
      disabled: l.loading,
      type: l.type
    }, l.$attrs), [
      re(l.$slots, "default"),
      tt(Ce(Ct, {
        class: "ml-3",
        "text-class": l.spinnerClass
      }, null, 8, ["text-class"]), [
        [It, l.loading]
      ])
    ], 16, Hn)) : l.external ? (M(), W("a", pe({
      key: 2,
      href: l.href,
      class: o
    }, l.$attrs), [
      re(l.$slots, "default")
    ], 16, Wn)) : (M(), oe(q(Dn), pe({
      key: 1,
      as: l.as,
      href: l.href,
      disabled: l.loading,
      class: o
    }, l.$attrs), {
      default: de(() => [
        re(l.$slots, "default"),
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
}), Kn = { class: "border-l-4 border-yellow-400 bg-yellow-50 p-4" }, Gn = { class: "flex" }, qn = {
  key: 0,
  class: "shrink-0"
}, Qn = { class: "ml-3" }, Yn = { class: "text-sm text-yellow-700" }, Jn = { class: "mt-4" }, Xn = { class: "-mx-2 -my-1.5 flex items-center space-x-3" }, Zn = { name: "WarningAlert" }, el = /* @__PURE__ */ R({
  ...Zn,
  props: {
    withoutIcon: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (n, t) => (M(), W("div", Kn, [
      G("div", Gn, [
        n.withoutIcon ? ve("", !0) : (M(), W("div", qn, [
          Ce(q(Vn), {
            class: "h-5 w-5 text-yellow-400",
            "aria-hidden": "true"
          })
        ])),
        G("div", Qn, [
          G("p", Yn, [
            re(n.$slots, "default")
          ]),
          G("div", Jn, [
            G("div", Xn, [
              re(n.$slots, "actions")
            ])
          ])
        ])
      ])
    ]));
  }
}), tl = { name: "WarningAlertButton" }, nl = /* @__PURE__ */ R({
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
    return (t, o) => (M(), oe(Ut, pe({
      as: t.as,
      external: t.external,
      href: t.href,
      loading: t.loading,
      type: t.type,
      class: n
    }, t.$attrs), {
      default: de(() => [
        re(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "external", "href", "loading", "type"]));
  }
}), ll = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, l] of n)
    t[o] = l;
  return t;
}, ol = { name: "PrimaryButton" }, rl = /* @__PURE__ */ R({
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
    return (t, o) => (M(), oe(Ut, pe({
      as: t.as,
      external: t.external,
      href: t.href,
      loading: t.loading,
      type: t.type,
      class: n
    }, t.$attrs), {
      default: de(() => [
        re(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "external", "href", "loading", "type"]));
  }
});
function Te(e, n, t) {
  var o;
  let l = (o = t.initialDeps) != null ? o : [], r;
  return () => {
    var a, i, u, c;
    let d;
    t.key && ((a = t.debug) == null ? void 0 : a.call(t)) && (d = Date.now());
    const f = e();
    if (!(f.length !== l.length || f.some((p, v) => l[v] !== p)))
      return r;
    l = f;
    let s;
    if (t.key && ((i = t.debug) == null ? void 0 : i.call(t)) && (s = Date.now()), r = n(...f), t.key && ((u = t.debug) == null ? void 0 : u.call(t))) {
      const p = Math.round((Date.now() - d) * 100) / 100, v = Math.round((Date.now() - s) * 100) / 100, h = v / 16, x = (I, E) => {
        for (I = String(I); I.length < E; )
          I = " " + I;
        return I;
      };
      console.info(
        `%c\u23F1 ${x(v, 5)} /${x(p, 5)} ms`,
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
    return (c = t == null ? void 0 : t.onChange) == null || c.call(t, r), r;
  };
}
function Qe(e, n) {
  if (e === void 0)
    throw new Error(`Unexpected undefined${n ? `: ${n}` : ""}`);
  return e;
}
const al = (e, n) => Math.abs(e - n) < 1, il = (e, n, t) => {
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
  const l = (a) => {
    const { width: i, height: u } = a;
    n({ width: Math.round(i), height: Math.round(u) });
  };
  if (l(t.getBoundingClientRect()), !o.ResizeObserver)
    return () => {
    };
  const r = new o.ResizeObserver((a) => {
    const i = a[0];
    if (i != null && i.borderBoxSize) {
      const u = i.borderBoxSize[0];
      if (u) {
        l({ width: u.inlineSize, height: u.blockSize });
        return;
      }
    }
    l(t.getBoundingClientRect());
  });
  return r.observe(t, { box: "border-box" }), () => {
    r.unobserve(t);
  };
}, Pt = {
  passive: !0
}, cl = typeof window > "u" ? !0 : "onscrollend" in window, fl = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const o = e.targetWindow;
  if (!o)
    return;
  let l = 0;
  const r = cl ? () => {
  } : il(
    o,
    () => {
      n(l, !1);
    },
    e.options.isScrollingResetDelay
  ), a = (c) => () => {
    const { horizontal: d, isRtl: f } = e.options;
    l = d ? t.scrollLeft * (f && -1 || 1) : t.scrollTop, r(), n(l, c);
  }, i = a(!0), u = a(!1);
  return u(), t.addEventListener("scroll", i, Pt), t.addEventListener("scrollend", u, Pt), () => {
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
  var l, r;
  const a = e + n;
  (r = (l = o.scrollElement) == null ? void 0 : l.scrollTo) == null || r.call(l, {
    [o.options.horizontal ? "left" : "top"]: a,
    behavior: t
  });
};
class ml {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const o = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((r) => {
          this._measureElement(r.target, r);
        });
      }));
      return {
        disconnect: () => {
          var l;
          (l = o()) == null || l.disconnect(), t = null;
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
        this.scrollElement = l, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = (t = (o = this.scrollElement) == null ? void 0 : o.window) != null ? t : null, this.elementsCache.forEach((r) => {
          this.observer.observe(r);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (r) => {
            this.scrollRect = r, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (r, a) => {
            this.scrollAdjustments = 0, this.scrollDirection = a ? this.getScrollOffset() < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = a, this.maybeNotify();
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
    }, this.getMeasurementOptions = Te(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, o, l, r, a) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: o,
        scrollMargin: l,
        getItemKey: r,
        enabled: a
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Te(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: o, scrollMargin: l, getItemKey: r, enabled: a }, i) => {
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((d) => {
          this.itemSizeCache.set(d.key, d.size);
        }));
        const u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, u);
        for (let d = u; d < t; d++) {
          const f = r(d), s = this.options.lanes === 1 ? c[d - 1] : this.getFurthestMeasurement(c, d), p = s ? s.end + this.options.gap : o + l, v = i.get(f), h = typeof v == "number" ? v : this.options.estimateSize(d), x = p + h, I = s ? s.lane : d % this.options.lanes;
          c[d] = {
            index: d,
            start: p,
            size: h,
            end: x,
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
      const l = this.indexFromElement(t), r = this.measurementsCache[l];
      if (!r)
        return;
      const a = r.key, i = this.elementsCache.get(a);
      i !== t && (i && this.observer.unobserve(i), this.observer.observe(t), this.elementsCache.set(a, t)), t.isConnected && this.resizeItem(l, this.options.measureElement(t, o, this));
    }, this.resizeItem = (t, o) => {
      var l;
      const r = this.measurementsCache[t];
      if (!r)
        return;
      const a = (l = this.itemSizeCache.get(r.key)) != null ? l : r.size, i = o - a;
      i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(r, i, this) : r.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", i), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += i,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(r.index), this.itemSizeCache = new Map(this.itemSizeCache.set(r.key, o)), this.notify(!1));
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
        for (let r = 0, a = t.length; r < a; r++) {
          const i = t[r], u = o[i];
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
          o[Kt(
            0,
            o.length - 1,
            (l) => Qe(o[l]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, o) => {
      const l = this.getSize(), r = this.getScrollOffset();
      o === "auto" && (t <= r ? o = "start" : t >= r + l ? o = "end" : o = "start"), o === "start" ? t = t : o === "end" ? t = t - l : o === "center" && (t = t - l / 2);
      const a = this.options.horizontal ? "scrollWidth" : "scrollHeight", i = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[a] : this.scrollElement[a] : 0) - l;
      return Math.max(Math.min(i, t), 0);
    }, this.getOffsetForIndex = (t, o = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = this.measurementsCache[t];
      if (!l)
        return;
      const r = this.getSize(), a = this.getScrollOffset();
      if (o === "auto")
        if (l.end >= a + r - this.options.scrollPaddingEnd)
          o = "end";
        else if (l.start <= a + this.options.scrollPaddingStart)
          o = "start";
        else
          return [a, o];
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
      const r = this.getOffsetForIndex(t, o);
      if (!r)
        return;
      const [a, i] = r;
      this._scrollToOffset(a, { adjustments: void 0, behavior: l }), l !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(t)
        )) {
          const [u] = Qe(
            this.getOffsetForIndex(t, i)
          );
          al(u, this.getScrollOffset()) || this.scrollToIndex(t, { align: i, behavior: l });
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
      let r;
      return l.length === 0 ? r = this.options.paddingStart : r = this.options.lanes === 1 ? (t = (o = l[l.length - 1]) == null ? void 0 : o.end) != null ? t : 0 : Math.max(
        ...l.slice(-this.options.lanes).map((a) => a.end)
      ), Math.max(
        r - this.options.scrollMargin + this.options.paddingEnd,
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
const Kt = (e, n, t, o) => {
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
function hl({
  measurements: e,
  outerSize: n,
  scrollOffset: t
}) {
  const o = e.length - 1, l = Kt(0, o, (a) => e[a].start, t);
  let r = l;
  for (; r < o && e[r].end < t + n; )
    r++;
  return { startIndex: l, endIndex: r };
}
function bl(e) {
  const n = new ml(q(e)), t = Wt(n), o = n._didMount();
  return te(
    () => q(e).getScrollElement(),
    (l) => {
      l && n._willUpdate();
    },
    {
      immediate: !0
    }
  ), te(
    () => q(e),
    (l) => {
      n.setOptions({
        ...l,
        onChange: (r, a) => {
          var i;
          Tt(t), (i = l.onChange) == null || i.call(l, r, a);
        }
      }), n._willUpdate(), Tt(t);
    },
    {
      immediate: !0
    }
  ), Nn(o), t;
}
function gl(e) {
  return bl(
    m(() => ({
      observeElementRect: dl,
      observeElementOffset: fl,
      scrollToFn: pl,
      ...q(e)
    }))
  );
}
function yl(e, n, t) {
  let o = w(t == null ? void 0 : t.value), l = m(() => e.value !== void 0);
  return [m(() => l.value ? e.value : o.value), function(r) {
    return l.value || (o.value = r), n == null ? void 0 : n(r);
  }];
}
function ft(e) {
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
    return ft(() => {
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
function xl() {
  let e = we();
  return ne(() => e.dispose()), e;
}
function wl() {
  let e = xl();
  return (n) => {
    e.dispose(), e.nextFrame(n);
  };
}
var Rt;
let Sl = Symbol("headlessui.useid"), Ol = 0;
const ee = (Rt = Et.useId) != null ? Rt : function() {
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
let Le = new Tl();
function he(e) {
  if (Le.isServer)
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
var se = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(se || {}), Gt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Gt || {}), Cl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Cl || {});
function qt(e = document.body) {
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
    n && !pt(n.activeElement, 0) && xe(e);
  });
}
var Pl = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Pl || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function xe(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Rl = ["textarea", "input"].join(",");
function Ml(e) {
  var n, t;
  return (t = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, Rl)) != null ? t : !1;
}
function mt(e, n = (t) => t) {
  return e.slice().sort((t, o) => {
    let l = n(t), r = n(o);
    if (l === null || r === null)
      return 0;
    let a = l.compareDocumentPosition(r);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Dl(e, n) {
  return Fe(qt(), n, { relativeTo: e });
}
function Fe(e, n, { sorted: t = !0, relativeTo: o = null, skipElements: l = [] } = {}) {
  var r;
  let a = (r = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? r : document, i = Array.isArray(e) ? t ? mt(e) : e : qt(e);
  l.length > 0 && i.length > 1 && (i = i.filter((v) => !l.includes(v))), o = o != null ? o : a.activeElement;
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
  } while (p !== a.activeElement);
  return n & 6 && Ml(p) && p.select(), 2;
}
function Yt() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Fl() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Jt() {
  return Yt() || Fl();
}
function Ve(e, n, t) {
  Le.isServer || Q((o) => {
    document.addEventListener(e, n, t), o(() => document.removeEventListener(e, n, t));
  });
}
function Xt(e, n, t) {
  Le.isServer || Q((o) => {
    window.addEventListener(e, n, t), o(() => window.removeEventListener(e, n, t));
  });
}
function ht(e, n, t = m(() => !0)) {
  function o(r, a) {
    if (!t.value || r.defaultPrevented)
      return;
    let i = a(r);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let u = function c(d) {
      return typeof d == "function" ? c(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let c of u) {
      if (c === null)
        continue;
      let d = c instanceof HTMLElement ? c : y(c);
      if (d != null && d.contains(i) || r.composed && r.composedPath().includes(d))
        return;
    }
    return !pt(i, vt.Loose) && i.tabIndex !== -1 && r.preventDefault(), n(r, i);
  }
  let l = w(null);
  Ve("pointerdown", (r) => {
    var a, i;
    t.value && (l.value = ((i = (a = r.composedPath) == null ? void 0 : a.call(r)) == null ? void 0 : i[0]) || r.target);
  }, !0), Ve("mousedown", (r) => {
    var a, i;
    t.value && (l.value = ((i = (a = r.composedPath) == null ? void 0 : a.call(r)) == null ? void 0 : i[0]) || r.target);
  }, !0), Ve("click", (r) => {
    Jt() || l.value && (o(r, () => l.value), l.value = null);
  }, !0), Ve("touchend", (r) => o(r, () => r.target instanceof HTMLElement ? r.target : null), !0), Xt("blur", (r) => o(r, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Dt(e, n) {
  if (e)
    return e;
  let t = n != null ? n : "button";
  if (typeof t == "string" && t.toLowerCase() === "button")
    return "button";
}
function Zt(e, n) {
  let t = w(Dt(e.value.type, e.value.as));
  return K(() => {
    t.value = Dt(e.value.type, e.value.as);
  }), Q(() => {
    var o;
    t.value || y(n) && y(n) instanceof HTMLButtonElement && !((o = y(n)) != null && o.hasAttribute("type")) && (t.value = "button");
  }), t;
}
function Ft(e) {
  return [e.screenX, e.screenY];
}
function en() {
  let e = w([-1, -1]);
  return { wasMoved(n) {
    let t = Ft(n);
    return e.value[0] === t[0] && e.value[1] === t[1] ? !1 : (e.value = t, !0);
  }, update(n) {
    e.value = Ft(n);
  } };
}
function tn({ container: e, accept: n, walk: t, enabled: o }) {
  Q(() => {
    let l = e.value;
    if (!l || o !== void 0 && !o.value)
      return;
    let r = he(e);
    if (!r)
      return;
    let a = Object.assign((u) => n(u), { acceptNode: n }), i = r.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, a, !1);
    for (; i.nextNode(); )
      t(i.currentNode);
  });
}
var ce = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ce || {}), ye = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ye || {});
function $({ visible: e = !0, features: n = 0, ourProps: t, theirProps: o, ...l }) {
  var r;
  let a = ln(o, t), i = Object.assign(l, { props: a });
  if (e || n & 2 && a.static)
    return Ye(i);
  if (n & 1) {
    let u = (r = a.unmount) == null || r ? 0 : 1;
    return Y(u, { [0]() {
      return null;
    }, [1]() {
      return Ye({ ...l, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ye(i);
}
function Ye({ props: e, attrs: n, slots: t, slot: o, name: l }) {
  var r, a;
  let { as: i, ...u } = Be(e, ["unmount", "static"]), c = (r = t.default) == null ? void 0 : r.call(t, o), d = {};
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
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(n)).map((h) => h.trim()).filter((h, x, I) => I.indexOf(h) === x).sort((h, x) => h.localeCompare(x)).map((h) => `  - ${h}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((h) => `  - ${h}`).join(`
`)].join(`
`));
      let p = ln((a = f.props) != null ? a : {}, u, d), v = zt(f, p, !0);
      for (let h in p)
        h.startsWith("on") && (v.props || (v.props = {}), v.props[h] = p[h]);
      return v;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return z(i, Object.assign({}, u, d), { default: () => c });
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
function kl(e) {
  let n = Object.assign({}, e);
  for (let t in n)
    n[t] === void 0 && delete n[t];
  return n;
}
function Be(e, n = []) {
  let t = Object.assign({}, e);
  for (let o of n)
    o in t && delete t[o];
  return t;
}
function Al(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var ke = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(ke || {});
let We = R({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: t }) {
  return () => {
    var o;
    let { features: l, ...r } = e, a = { "aria-hidden": (l & 2) === 2 ? !0 : (o = r["aria-hidden"]) != null ? o : void 0, hidden: (l & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return $({ ourProps: a, theirProps: r, slot: {}, attrs: t, slots: n, name: "Hidden" });
  };
} }), on = Symbol("Context");
var H = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(H || {});
function Ll() {
  return Ne() !== null;
}
function Ne() {
  return Z(on, null);
}
function bt(e) {
  ae(on, e);
}
var A = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(A || {}), rn = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(rn || {});
function Bl(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let fe = [];
Bl(() => {
  function e(n) {
    n.target instanceof HTMLElement && n.target !== document.body && fe[0] !== n.target && (fe.unshift(n.target), fe = fe.filter((t) => t != null && t.isConnected), fe.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Nl(e) {
  throw new Error("Unexpected object: " + e);
}
var B = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(B || {});
function lt(e, n) {
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
      Nl(e);
  }
}
function an(e = {}, n = null, t = []) {
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
    t instanceof Date ? e.push([n, t.toISOString()]) : typeof t == "boolean" ? e.push([n, t ? "1" : "0"]) : typeof t == "string" ? e.push([n, t]) : typeof t == "number" ? e.push([n, `${t}`]) : t == null ? e.push([n, ""]) : an(t, n, e);
}
function _l(e, n) {
  return e === n;
}
var jl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(jl || {}), $l = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))($l || {}), Vl = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Vl || {});
let dn = Symbol("ComboboxContext");
function Ie(e) {
  let n = Z(dn, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ie), t;
  }
  return n;
}
let cn = Symbol("VirtualContext"), zl = R({ name: "VirtualProvider", setup(e, { slots: n }) {
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
  }, overscan: 12 }))), r = m(() => {
    var i;
    return (i = t.virtual.value) == null ? void 0 : i.options;
  }), a = w(0);
  return te([r], () => {
    a.value += 1;
  }), ae(cn, t.virtual.value ? l : null), () => [z("div", { style: { position: "relative", width: "100%", height: `${l.value.getTotalSize()}px` }, ref: (i) => {
    if (i) {
      if (typeof process < "u" && process.env.JEST_WORKER_ID !== void 0 || t.activationTrigger.value === 0)
        return;
      t.activeOptionIndex.value !== null && t.virtual.value.options.length > t.activeOptionIndex.value && l.value.scrollToIndex(t.activeOptionIndex.value);
    }
  } }, l.value.getVirtualItems().map((i) => zt(n.default({ option: t.virtual.value.options[i.index], open: t.comboboxState.value === 0 })[0], { key: `${a.value}-${i.index}`, "data-index": i.index, "aria-setsize": t.virtual.value.options.length, "aria-posinset": i.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${i.start}px)`, overflowAnchor: "none" } })))];
} });
R({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], nullable: !0, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 }, immediate: { type: [Boolean], default: !1 }, virtual: { type: Object, default: null } }, inheritAttrs: !1, setup(e, { slots: n, attrs: t, emit: o }) {
  let l = w(1), r = w(null), a = w(null), i = w(null), u = w(null), c = w({ static: !1, hold: !1 }), d = w([]), f = w(null), s = w(2), p = w(!1);
  function v(b = (S) => S) {
    let S = f.value !== null ? d.value[f.value] : null, C = b(d.value.slice()), T = C.length > 0 && C[0].dataRef.order.value !== null ? C.sort((k, U) => k.dataRef.order.value - U.dataRef.order.value) : mt(C, (k) => y(k.dataRef.domRef)), _ = S ? T.indexOf(S) : null;
    return _ === -1 && (_ = null), { options: T, activeOptionIndex: _ };
  }
  let h = m(() => e.multiple ? 1 : 0), x = m(() => e.nullable), [I, E] = yl(m(() => e.modelValue), (b) => o("update:modelValue", b), m(() => e.defaultValue)), D = m(() => I.value === void 0 ? Y(h.value, { [1]: [], [0]: void 0 }) : I.value), J = null, O = null;
  function F(b) {
    return Y(h.value, { [0]() {
      return E == null ? void 0 : E(b);
    }, [1]: () => {
      let S = ge(g.value.value).slice(), C = ge(b), T = S.findIndex((_) => g.compare(C, ge(_)));
      return T === -1 ? S.push(C) : S.splice(T, 1), E == null ? void 0 : E(S);
    } });
  }
  let N = m(() => {
  });
  te([N], ([b], [S]) => {
    if (g.virtual.value && b && S && f.value !== null) {
      let C = b.indexOf(S[f.value]);
      C !== -1 ? f.value = C : f.value = null;
    }
  });
  let g = { comboboxState: l, value: D, mode: h, compare(b, S) {
    if (typeof e.by == "string") {
      let C = e.by;
      return (b == null ? void 0 : b[C]) === (S == null ? void 0 : S[C]);
    }
    return e.by === null ? _l(b, S) : e.by(b, S);
  }, calculateIndex(b) {
    return g.virtual.value ? e.by === null ? g.virtual.value.options.indexOf(b) : g.virtual.value.options.findIndex((S) => g.compare(S, b)) : d.value.findIndex((S) => g.compare(S.dataRef.value, b));
  }, defaultValue: m(() => e.defaultValue), nullable: x, immediate: m(() => !1), virtual: m(() => null), inputRef: a, labelRef: r, buttonRef: i, optionsRef: u, disabled: m(() => e.disabled), options: d, change(b) {
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
    p.value = !1, J !== null && cancelAnimationFrame(J), J = requestAnimationFrame(() => {
      if (e.disabled || u.value && !c.value.static && l.value === 1)
        return;
      if (g.virtual.value) {
        f.value = b === B.Specific ? S : lt({ focus: b }, { resolveItems: () => g.virtual.value.options, resolveActiveIndex: () => {
          var k, U;
          return (U = (k = g.activeOptionIndex.value) != null ? k : g.virtual.value.options.findIndex((le) => {
            var be;
            return !((be = g.virtual.value) != null && be.disabled(le));
          })) != null ? U : null;
        }, resolveDisabled: (k) => g.virtual.value.disabled(k), resolveId() {
          throw new Error("Function not implemented.");
        } }), s.value = C != null ? C : 2;
        return;
      }
      let T = v();
      if (T.activeOptionIndex === null) {
        let k = T.options.findIndex((U) => !U.dataRef.disabled);
        k !== -1 && (T.activeOptionIndex = k);
      }
      let _ = b === B.Specific ? S : lt({ focus: b }, { resolveItems: () => T.options, resolveActiveIndex: () => T.activeOptionIndex, resolveId: (k) => k.id, resolveDisabled: (k) => k.dataRef.disabled });
      f.value = _, s.value = C != null ? C : 2, d.value = T.options;
    });
  }, selectOption(b) {
    let S = d.value.find((T) => T.id === b);
    if (!S)
      return;
    let { dataRef: C } = S;
    F(C.value);
  }, selectActiveOption() {
    if (g.activeOptionIndex.value !== null) {
      if (g.virtual.value)
        F(g.virtual.value.options[g.activeOptionIndex.value]);
      else {
        let { dataRef: b } = d.value[g.activeOptionIndex.value];
        F(b.value);
      }
      g.goToOption(B.Specific, g.activeOptionIndex.value);
    }
  }, registerOption(b, S) {
    let C = Ht({ id: b, dataRef: S });
    if (g.virtual.value) {
      d.value.push(C);
      return;
    }
    O && cancelAnimationFrame(O);
    let T = v((_) => (_.push(C), _));
    f.value === null && g.isSelected(S.value.value) && (T.activeOptionIndex = T.options.indexOf(C)), d.value = T.options, f.value = T.activeOptionIndex, s.value = 2, T.options.some((_) => !y(_.dataRef.domRef)) && (O = requestAnimationFrame(() => {
      let _ = v();
      d.value = _.options, f.value = _.activeOptionIndex;
    }));
  }, unregisterOption(b, S) {
    if (J !== null && cancelAnimationFrame(J), S && (p.value = !0), g.virtual.value) {
      d.value = d.value.filter((T) => T.id !== b);
      return;
    }
    let C = v((T) => {
      let _ = T.findIndex((k) => k.id === b);
      return _ !== -1 && T.splice(_, 1), T;
    });
    d.value = C.options, f.value = C.activeOptionIndex, s.value = 2;
  }, isSelected(b) {
    return Y(h.value, { [0]: () => g.compare(ge(g.value.value), ge(b)), [1]: () => ge(g.value.value).some((S) => g.compare(ge(S), ge(b))) });
  }, isActive(b) {
    return f.value === g.calculateIndex(b);
  } };
  ht([a, i, u], () => g.closeCombobox(), m(() => l.value === 0)), ae(dn, g), bt(m(() => Y(l.value, { [0]: H.Open, [1]: H.Closed })));
  let L = m(() => {
    var b;
    return (b = y(a)) == null ? void 0 : b.closest("form");
  });
  return K(() => {
    te([L], () => {
      if (!L.value || e.defaultValue === void 0)
        return;
      function b() {
        g.change(e.defaultValue);
      }
      return L.value.addEventListener("reset", b), () => {
        var S;
        (S = L.value) == null || S.removeEventListener("reset", b);
      };
    }, { immediate: !0 });
  }), () => {
    var b, S, C;
    let { name: T, disabled: _, form: k, ...U } = e, le = { open: l.value === 0, disabled: _, activeIndex: g.activeOptionIndex.value, activeOption: g.activeOptionIndex.value === null ? null : g.virtual.value ? g.virtual.value.options[(b = g.activeOptionIndex.value) != null ? b : 0] : (C = (S = g.options.value[g.activeOptionIndex.value]) == null ? void 0 : S.dataRef.value) != null ? C : null, value: D.value };
    return z(Se, [...T != null && D.value != null ? an({ [T]: D.value }).map(([be, je]) => z(We, kl({ features: ke.Hidden, key: be, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: k, disabled: _, name: be, value: je }))) : [], $({ theirProps: { ...t, ...Be(U, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: le, slots: n, attrs: t, name: "Combobox" })]);
  };
} });
R({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t }) {
  var o;
  let l = (o = e.id) != null ? o : `headlessui-combobox-label-${ee()}`, r = Ie("ComboboxLabel");
  function a() {
    var i;
    (i = y(r.inputRef)) == null || i.focus({ preventScroll: !0 });
  }
  return () => {
    let i = { open: r.comboboxState.value === 0, disabled: r.disabled.value }, { ...u } = e, c = { id: l, ref: r.labelRef, onClick: a };
    return $({ ourProps: c, theirProps: u, slot: i, attrs: n, slots: t, name: "ComboboxLabel" });
  };
} });
R({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let r = (l = e.id) != null ? l : `headlessui-combobox-button-${ee()}`, a = Ie("ComboboxButton");
  o({ el: a.buttonRef, $el: a.buttonRef });
  function i(d) {
    a.disabled.value || (a.comboboxState.value === 0 ? a.closeCombobox() : (d.preventDefault(), a.openCombobox()), X(() => {
      var f;
      return (f = y(a.inputRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    }));
  }
  function u(d) {
    switch (d.key) {
      case A.ArrowDown:
        d.preventDefault(), d.stopPropagation(), a.comboboxState.value === 1 && a.openCombobox(), X(() => {
          var f;
          return (f = a.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case A.ArrowUp:
        d.preventDefault(), d.stopPropagation(), a.comboboxState.value === 1 && (a.openCombobox(), X(() => {
          a.value.value || a.goToOption(B.Last);
        })), X(() => {
          var f;
          return (f = a.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case A.Escape:
        if (a.comboboxState.value !== 0)
          return;
        d.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && d.stopPropagation(), a.closeCombobox(), X(() => {
          var f;
          return (f = a.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let c = Zt(m(() => ({ as: e.as, type: n.type })), a.buttonRef);
  return () => {
    var d, f;
    let s = { open: a.comboboxState.value === 0, disabled: a.disabled.value, value: a.value.value }, { ...p } = e, v = { ref: a.buttonRef, id: r, type: c.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (d = y(a.optionsRef)) == null ? void 0 : d.id, "aria-expanded": a.comboboxState.value === 0, "aria-labelledby": a.labelRef.value ? [(f = y(a.labelRef)) == null ? void 0 : f.id, r].join(" ") : void 0, disabled: a.disabled.value === !0 ? !0 : void 0, onKeydown: u, onClick: i };
    return $({ ourProps: v, theirProps: p, slot: s, attrs: n, slots: t, name: "ComboboxButton" });
  };
} });
R({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: null } }, emits: { change: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: l }) {
  var r;
  let a = (r = e.id) != null ? r : `headlessui-combobox-input-${ee()}`, i = Ie("ComboboxInput"), u = m(() => he(y(i.inputRef))), c = { value: !1 };
  l({ el: i.inputRef, $el: i.inputRef });
  function d() {
    i.change(null);
    let O = y(i.optionsRef);
    O && (O.scrollTop = 0), i.goToOption(B.Nothing);
  }
  let f = m(() => {
    var O;
    let F = i.value.value;
    return y(i.inputRef) ? typeof e.displayValue < "u" && F !== void 0 ? (O = e.displayValue(F)) != null ? O : "" : typeof F == "string" ? F : "" : "";
  });
  K(() => {
    te([f, i.comboboxState, u], ([O, F], [N, g]) => {
      if (c.value)
        return;
      let L = y(i.inputRef);
      L && ((g === 0 && F === 1 || O !== N) && (L.value = O), requestAnimationFrame(() => {
        var b;
        if (c.value || !L || ((b = u.value) == null ? void 0 : b.activeElement) !== L)
          return;
        let { selectionStart: S, selectionEnd: C } = L;
        Math.abs((C != null ? C : 0) - (S != null ? S : 0)) === 0 && S === 0 && L.setSelectionRange(L.value.length, L.value.length);
      }));
    }, { immediate: !0 }), te([i.comboboxState], ([O], [F]) => {
      if (O === 0 && F === 1) {
        if (c.value)
          return;
        let N = y(i.inputRef);
        if (!N)
          return;
        let g = N.value, { selectionStart: L, selectionEnd: b, selectionDirection: S } = N;
        N.value = "", N.value = g, S !== null ? N.setSelectionRange(L, b, S) : N.setSelectionRange(L, b);
      }
    });
  });
  let s = w(!1);
  function p() {
    s.value = !0;
  }
  function v() {
    we().nextFrame(() => {
      s.value = !1;
    });
  }
  let h = wl();
  function x(O) {
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
        return c.value = !1, O.preventDefault(), O.stopPropagation(), Y(i.comboboxState.value, { [0]: () => i.goToOption(B.Next), [1]: () => i.openCombobox() });
      case A.ArrowUp:
        return c.value = !1, O.preventDefault(), O.stopPropagation(), Y(i.comboboxState.value, { [0]: () => i.goToOption(B.Previous), [1]: () => {
          i.openCombobox(), X(() => {
            i.value.value || i.goToOption(B.Last);
          });
        } });
      case A.Home:
        if (O.shiftKey)
          break;
        return c.value = !1, O.preventDefault(), O.stopPropagation(), i.goToOption(B.First);
      case A.PageUp:
        return c.value = !1, O.preventDefault(), O.stopPropagation(), i.goToOption(B.First);
      case A.End:
        if (O.shiftKey)
          break;
        return c.value = !1, O.preventDefault(), O.stopPropagation(), i.goToOption(B.Last);
      case A.PageDown:
        return c.value = !1, O.preventDefault(), O.stopPropagation(), i.goToOption(B.Last);
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
    var F, N, g;
    let L = (F = O.relatedTarget) != null ? F : fe.find((b) => b !== O.currentTarget);
    if (c.value = !1, !((N = y(i.optionsRef)) != null && N.contains(L)) && !((g = y(i.buttonRef)) != null && g.contains(L)) && i.comboboxState.value === 0)
      return O.preventDefault(), i.mode.value === 0 && (i.nullable.value && i.value.value === null ? d() : i.activationTrigger.value !== 1 && i.selectActiveOption()), i.closeCombobox();
  }
  function D(O) {
    var F, N, g;
    let L = (F = O.relatedTarget) != null ? F : fe.find((b) => b !== O.currentTarget);
    (N = y(i.buttonRef)) != null && N.contains(L) || (g = y(i.optionsRef)) != null && g.contains(L) || i.disabled.value || i.immediate.value && i.comboboxState.value !== 0 && (i.openCombobox(), we().nextFrame(() => {
      i.setActivationTrigger(1);
    }));
  }
  let J = m(() => {
    var O, F, N, g;
    return (g = (N = (F = e.defaultValue) != null ? F : i.defaultValue.value !== void 0 ? (O = e.displayValue) == null ? void 0 : O.call(e, i.defaultValue.value) : null) != null ? N : i.defaultValue.value) != null ? g : "";
  });
  return () => {
    var O, F, N, g, L, b, S;
    let C = { open: i.comboboxState.value === 0 }, { displayValue: T, onChange: _, ...k } = e, U = { "aria-controls": (O = i.optionsRef.value) == null ? void 0 : O.id, "aria-expanded": i.comboboxState.value === 0, "aria-activedescendant": i.activeOptionIndex.value === null ? void 0 : i.virtual.value ? (F = i.options.value.find((le) => !i.virtual.value.disabled(le.dataRef.value) && i.compare(le.dataRef.value, i.virtual.value.options[i.activeOptionIndex.value]))) == null ? void 0 : F.id : (N = i.options.value[i.activeOptionIndex.value]) == null ? void 0 : N.id, "aria-labelledby": (b = (g = y(i.labelRef)) == null ? void 0 : g.id) != null ? b : (L = y(i.buttonRef)) == null ? void 0 : L.id, "aria-autocomplete": "list", id: a, onCompositionstart: p, onCompositionend: v, onKeydown: x, onInput: I, onFocus: D, onBlur: E, role: "combobox", type: (S = t.type) != null ? S : "text", tabIndex: 0, ref: i.inputRef, defaultValue: J.value, disabled: i.disabled.value === !0 ? !0 : void 0 };
    return $({ ourProps: U, theirProps: k, slot: C, attrs: t, slots: o, features: ce.RenderStrategy | ce.Static, name: "ComboboxInput" });
  };
} });
R({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let l = Ie("ComboboxOptions"), r = `headlessui-combobox-options-${ee()}`;
  o({ el: l.optionsRef, $el: l.optionsRef }), Q(() => {
    l.optionsPropsRef.value.static = e.static;
  }), Q(() => {
    l.optionsPropsRef.value.hold = e.hold;
  });
  let a = Ne(), i = m(() => a !== null ? (a.value & H.Open) === H.Open : l.comboboxState.value === 0);
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
    let s = { open: l.comboboxState.value === 0 }, p = { "aria-labelledby": (f = (c = y(l.labelRef)) == null ? void 0 : c.id) != null ? f : (d = y(l.buttonRef)) == null ? void 0 : d.id, id: r, ref: l.optionsRef, role: "listbox", "aria-multiselectable": l.mode.value === 1 ? !0 : void 0, onMousedown: u }, v = Be(e, ["hold"]);
    return $({ ourProps: p, theirProps: v, slot: s, attrs: n, slots: l.virtual.value && l.comboboxState.value === 0 ? { ...t, default: () => [z(zl, {}, t.default)] } : t, features: ce.RenderStrategy | ce.Static, visible: i.value, name: "ComboboxOptions" });
  };
} });
R({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, order: { type: [Number], default: null } }, setup(e, { slots: n, attrs: t, expose: o }) {
  let l = Ie("ComboboxOption"), r = `headlessui-combobox-option-${ee()}`, a = w(null), i = m(() => e.disabled);
  o({ el: a, $el: a });
  let u = m(() => {
    var E;
    return l.virtual.value ? l.activeOptionIndex.value === l.calculateIndex(e.value) : l.activeOptionIndex.value === null ? !1 : ((E = l.options.value[l.activeOptionIndex.value]) == null ? void 0 : E.id) === r;
  }), c = m(() => l.isSelected(e.value)), d = Z(cn, null), f = m(() => ({ disabled: e.disabled, value: e.value, domRef: a, order: m(() => e.order) }));
  K(() => l.registerOption(r, f)), ne(() => l.unregisterOption(r, u.value)), Q(() => {
    let E = y(a);
    E && (d == null || d.value.measureElement(E));
  }), Q(() => {
    l.comboboxState.value === 0 && u.value && (l.virtual.value || l.activationTrigger.value !== 0 && X(() => {
      var E, D;
      return (D = (E = y(a)) == null ? void 0 : E.scrollIntoView) == null ? void 0 : D.call(E, { block: "nearest" });
    }));
  });
  function s(E) {
    E.preventDefault(), E.button === rn.Left && (i.value || (l.selectOption(r), Jt() || requestAnimationFrame(() => {
      var D;
      return (D = y(l.inputRef)) == null ? void 0 : D.focus({ preventScroll: !0 });
    }), l.mode.value === 0 && l.closeCombobox()));
  }
  function p() {
    var E;
    if (e.disabled || (E = l.virtual.value) != null && E.disabled(e.value))
      return l.goToOption(B.Nothing);
    let D = l.calculateIndex(e.value);
    l.goToOption(B.Specific, D);
  }
  let v = en();
  function h(E) {
    v.update(E);
  }
  function x(E) {
    var D;
    if (!v.wasMoved(E) || e.disabled || (D = l.virtual.value) != null && D.disabled(e.value) || u.value)
      return;
    let J = l.calculateIndex(e.value);
    l.goToOption(B.Specific, J, 0);
  }
  function I(E) {
    var D;
    v.wasMoved(E) && (e.disabled || (D = l.virtual.value) != null && D.disabled(e.value) || u.value && (l.optionsPropsRef.value.hold || l.goToOption(B.Nothing)));
  }
  return () => {
    let { disabled: E } = e, D = { active: u.value, selected: c.value, disabled: E }, J = { id: r, ref: a, role: "option", tabIndex: E === !0 ? void 0 : -1, "aria-disabled": E === !0 ? !0 : void 0, "aria-selected": c.value, disabled: void 0, onMousedown: s, onFocus: p, onPointerenter: h, onMouseenter: h, onPointermove: x, onMousemove: x, onPointerleave: I, onMouseleave: I }, O = Be(e, ["order", "value"]);
    return $({ ourProps: J, theirProps: O, slot: D, attrs: t, slots: n, name: "ComboboxOption" });
  };
} });
function fn(e, n, t, o) {
  Le.isServer || Q((l) => {
    e = e != null ? e : window, e.addEventListener(n, t, o), l(() => e.removeEventListener(n, t, o));
  });
}
var Me = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Me || {});
function Hl() {
  let e = w(0);
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
let Pe = Object.assign(R({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: w(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let l = w(null);
  o({ el: l, $el: l });
  let r = m(() => he(l)), a = w(!1);
  K(() => a.value = !0), ne(() => a.value = !1), Ul({ ownerDocument: r }, m(() => a.value && Boolean(e.features & 16)));
  let i = Kl({ ownerDocument: r, container: l, initialFocus: m(() => e.initialFocus) }, m(() => a.value && Boolean(e.features & 2)));
  Gl({ ownerDocument: r, container: l, containers: e.containers, previousActiveElement: i }, m(() => a.value && Boolean(e.features & 8)));
  let u = Hl();
  function c(p) {
    let v = y(l);
    !v || ((h) => h())(() => {
      Y(u.value, { [Me.Forwards]: () => {
        Fe(v, se.First, { skipElements: [p.relatedTarget] });
      }, [Me.Backwards]: () => {
        Fe(v, se.Last, { skipElements: [p.relatedTarget] });
      } });
    });
  }
  let d = w(!1);
  function f(p) {
    p.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function s(p) {
    if (!a.value)
      return;
    let v = vn(e.containers);
    y(l) instanceof HTMLElement && v.add(y(l));
    let h = p.relatedTarget;
    h instanceof HTMLElement && h.dataset.headlessuiFocusGuard !== "true" && (mn(v, h) || (d.value ? Fe(y(l), Y(u.value, { [Me.Forwards]: () => se.Next, [Me.Backwards]: () => se.Previous }) | se.WrapAround, { relativeTo: p.target }) : p.target instanceof HTMLElement && xe(p.target)));
  }
  return () => {
    let p = {}, v = { ref: l, onKeydown: f, onFocusout: s }, { features: h, initialFocus: x, containers: I, ...E } = e;
    return z(Se, [Boolean(h & 4) && z(We, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: ke.Focusable }), $({ ourProps: v, theirProps: { ...n, ...E }, slot: p, attrs: n, slots: t, name: "FocusTrap" }), Boolean(h & 4) && z(We, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: ke.Focusable })]);
  };
} }), { features: pn });
function Wl(e) {
  let n = w(fe.slice());
  return te([e], ([t], [o]) => {
    o === !0 && t === !1 ? ft(() => {
      n.value.splice(0);
    }) : o === !1 && t === !0 && (n.value = fe.slice());
  }, { flush: "post" }), () => {
    var t;
    return (t = n.value.find((o) => o != null && o.isConnected)) != null ? t : null;
  };
}
function Ul({ ownerDocument: e }, n) {
  let t = Wl(n);
  K(() => {
    Q(() => {
      var o, l;
      n.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((l = e.value) == null ? void 0 : l.body) && xe(t());
    }, { flush: "post" });
  }), ne(() => {
    n.value && xe(t());
  });
}
function Kl({ ownerDocument: e, container: n, initialFocus: t }, o) {
  let l = w(null), r = w(!1);
  return K(() => r.value = !0), ne(() => r.value = !1), K(() => {
    te([n, t, o], (a, i) => {
      if (a.every((c, d) => (i == null ? void 0 : i[d]) === c) || !o.value)
        return;
      let u = y(n);
      u && ft(() => {
        var c, d;
        if (!r.value)
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
        f ? xe(f) : Fe(u, se.First | se.NoScroll) === Gt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function Gl({ ownerDocument: e, container: n, containers: t, previousActiveElement: o }, l) {
  var r;
  fn((r = e.value) == null ? void 0 : r.defaultView, "focus", (a) => {
    if (!l.value)
      return;
    let i = vn(t);
    y(n) instanceof HTMLElement && i.add(y(n));
    let u = o.value;
    if (!u)
      return;
    let c = a.target;
    c && c instanceof HTMLElement ? mn(i, c) ? (o.value = c, xe(c)) : (a.preventDefault(), a.stopPropagation(), xe(u)) : xe(o.value);
  }, !0);
}
function mn(e, n) {
  for (let t of e)
    if (t.contains(n))
      return !0;
  return !1;
}
function ql(e) {
  let n = Wt(e.getSnapshot());
  return ne(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function Ql(e, n) {
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
function Yl() {
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
function Jl() {
  return Yt() ? { before({ doc: e, d: n, meta: t }) {
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
            let { hash: c } = new URL(u.href), d = e.querySelector(c);
            d && !o(d) && (a = d);
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
        r !== u && window.scrollTo(0, r), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
      });
    });
  } } : {};
}
function Xl() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function Zl(e) {
  let n = {};
  for (let t of e)
    Object.assign(n, t(n));
  return n;
}
let Ee = Ql(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var t;
  let o = (t = this.get(e)) != null ? t : { doc: e, count: 0, d: we(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(n), this.set(e, o), this;
}, POP(e, n) {
  let t = this.get(e);
  return t && (t.count--, t.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: t }) {
  let o = { doc: e, d: n, meta: Zl(t) }, l = [Jl(), Yl(), Xl()];
  l.forEach(({ before: r }) => r == null ? void 0 : r(o)), l.forEach(({ after: r }) => r == null ? void 0 : r(o));
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
  let o = ql(Ee), l = m(() => {
    let r = e.value ? o.value.get(e.value) : void 0;
    return r ? r.count > 0 : !1;
  });
  return te([e, n], ([r, a], [i], u) => {
    if (!r || !a)
      return;
    Ee.dispatch("PUSH", r, t);
    let c = !1;
    u(() => {
      c || (Ee.dispatch("POP", i != null ? i : r, t), c = !0);
    });
  }, { immediate: !0 }), l;
}
let Je = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map();
function kt(e, n = w(!0)) {
  Q((t) => {
    var o;
    if (!n.value)
      return;
    let l = y(e);
    if (!l)
      return;
    t(function() {
      var a;
      if (!l)
        return;
      let i = (a = Re.get(l)) != null ? a : 1;
      if (i === 1 ? Re.delete(l) : Re.set(l, i - 1), i !== 1)
        return;
      let u = Je.get(l);
      u && (u["aria-hidden"] === null ? l.removeAttribute("aria-hidden") : l.setAttribute("aria-hidden", u["aria-hidden"]), l.inert = u.inert, Je.delete(l));
    });
    let r = (o = Re.get(l)) != null ? o : 0;
    Re.set(l, r + 1), r === 0 && (Je.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }), l.setAttribute("aria-hidden", "true"), l.inert = !0);
  });
}
function to({ defaultContainers: e = [], portals: n, mainTreeNodeRef: t } = {}) {
  let o = w(null), l = he(o);
  function r() {
    var a, i, u;
    let c = [];
    for (let d of e)
      d !== null && (d instanceof HTMLElement ? c.push(d) : "value" in d && d.value instanceof HTMLElement && c.push(d.value));
    if (n != null && n.value)
      for (let d of n.value)
        c.push(d);
    for (let d of (a = l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? a : [])
      d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(y(o)) || d.contains((u = (i = y(o)) == null ? void 0 : i.getRootNode()) == null ? void 0 : u.host) || c.some((f) => d.contains(f)) || c.push(d));
    return c;
  }
  return { resolveContainers: r, contains(a) {
    return r().some((i) => i.contains(a));
  }, mainTreeNodeRef: o, MainTreeNode() {
    return t != null ? null : z(We, { features: ke.Hidden, ref: o });
  } };
}
let hn = Symbol("ForcePortalRootContext");
function no() {
  return Z(hn, !1);
}
let ot = R({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: t }) {
  return ae(hn, e.force), () => {
    let { force: o, ...l } = e;
    return $({ theirProps: l, ourProps: {}, slot: {}, slots: n, attrs: t, name: "ForcePortalRoot" });
  };
} }), bn = Symbol("StackContext");
var rt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(rt || {});
function lo() {
  return Z(bn, () => {
  });
}
function oo({ type: e, enabled: n, element: t, onUpdate: o }) {
  let l = lo();
  function r(...a) {
    o == null || o(...a), l(...a);
  }
  K(() => {
    te(n, (a, i) => {
      a ? r(0, e, t) : i === !0 && r(1, e, t);
    }, { immediate: !0, flush: "sync" });
  }), ne(() => {
    n.value && r(1, e, t);
  }), ae(bn, r);
}
let gn = Symbol("DescriptionContext");
function ro() {
  let e = Z(gn, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function ao({ slot: e = w({}), name: n = "Description", props: t = {} } = {}) {
  let o = w([]);
  function l(r) {
    return o.value.push(r), () => {
      let a = o.value.indexOf(r);
      a !== -1 && o.value.splice(a, 1);
    };
  }
  return ae(gn, { register: l, slot: e, name: n, props: t }), m(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
R({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t }) {
  var o;
  let l = (o = e.id) != null ? o : `headlessui-description-${ee()}`, r = ro();
  return K(() => ne(r.register(l))), () => {
    let { name: a = "Description", slot: i = w({}), props: u = {} } = r, { ...c } = e, d = { ...Object.entries(u).reduce((f, [s, p]) => Object.assign(f, { [s]: q(p) }), {}), id: l };
    return $({ ourProps: d, theirProps: c, slot: i.value, attrs: n, slots: t, name: a });
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
const at = /* @__PURE__ */ new WeakMap();
function uo(e) {
  var n;
  return (n = at.get(e)) != null ? n : 0;
}
function At(e, n) {
  let t = n(uo(e));
  return t <= 0 ? at.delete(e) : at.set(e, t), t;
}
let yn = R({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t }) {
  let o = w(null), l = m(() => he(o)), r = no(), a = Z(xn, null), i = w(r === !0 || a == null ? io(o.value) : a.resolveTarget());
  i.value && At(i.value, (s) => s + 1);
  let u = w(!1);
  K(() => {
    u.value = !0;
  }), Q(() => {
    r || a != null && (i.value = a.resolveTarget());
  });
  let c = Z(it, null), d = !1, f = kn();
  return te(o, () => {
    if (d || !c)
      return;
    let s = y(o);
    s && (ne(c.register(s), f), d = !0);
  }), ne(() => {
    var s, p;
    let v = (s = l.value) == null ? void 0 : s.getElementById("headlessui-portal-root");
    !v || i.value !== v || At(i.value, (h) => h - 1) || i.value.children.length > 0 || (p = i.value.parentElement) == null || p.removeChild(i.value);
  }), () => {
    if (!u.value || i.value === null)
      return null;
    let s = { ref: o, "data-headlessui-portal": "" };
    return z(An, { to: i.value }, $({ ourProps: s, theirProps: e, slot: {}, attrs: t, slots: n, name: "Portal" }));
  };
} }), it = Symbol("PortalParentContext");
function so() {
  let e = Z(it, null), n = w([]);
  function t(r) {
    return n.value.push(r), e && e.register(r), () => o(r);
  }
  function o(r) {
    let a = n.value.indexOf(r);
    a !== -1 && n.value.splice(a, 1), e && e.unregister(r);
  }
  let l = { register: t, unregister: o, portals: n };
  return [n, R({ name: "PortalWrapper", setup(r, { slots: a }) {
    return ae(it, l), () => {
      var i;
      return (i = a.default) == null ? void 0 : i.call(a);
    };
  } })];
}
let xn = Symbol("PortalGroupContext"), co = R({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: t }) {
  let o = Ht({ resolveTarget() {
    return e.target;
  } });
  return ae(xn, o), () => {
    let { target: l, ...r } = e;
    return $({ theirProps: r, ourProps: {}, slot: {}, attrs: n, slots: t, name: "PortalGroup" });
  };
} });
var fo = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(fo || {});
let ut = Symbol("DialogContext");
function _e(e) {
  let n = Z(ut, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, _e), t;
  }
  return n;
}
let ze = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
R({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: ze }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: l }) {
  var r, a;
  let i = (r = e.id) != null ? r : `headlessui-dialog-${ee()}`, u = w(!1);
  K(() => {
    u.value = !0;
  });
  let c = !1, d = m(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (c || (c = !0, console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), f = w(0), s = Ne(), p = m(() => e.open === ze && s !== null ? (s.value & H.Open) === H.Open : e.open), v = w(null), h = m(() => he(v));
  if (l({ el: v, $el: v }), !(e.open !== ze || s !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof p.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${p.value === ze ? void 0 : e.open}`);
  let x = m(() => u.value && p.value ? 0 : 1), I = m(() => x.value === 0), E = m(() => f.value > 1), D = Z(ut, null) !== null, [J, O] = so(), { resolveContainers: F, mainTreeNodeRef: N, MainTreeNode: g } = to({ portals: J, defaultContainers: [m(() => {
    var j;
    return (j = le.panelRef.value) != null ? j : v.value;
  })] }), L = m(() => E.value ? "parent" : "leaf"), b = m(() => s !== null ? (s.value & H.Closing) === H.Closing : !1), S = m(() => D || b.value ? !1 : I.value), C = m(() => {
    var j, V, ie;
    return (ie = Array.from((V = (j = h.value) == null ? void 0 : j.querySelectorAll("body > *")) != null ? V : []).find((ue) => ue.id === "headlessui-portal-root" ? !1 : ue.contains(y(N)) && ue instanceof HTMLElement)) != null ? ie : null;
  });
  kt(C, S);
  let T = m(() => E.value ? !0 : I.value), _ = m(() => {
    var j, V, ie;
    return (ie = Array.from((V = (j = h.value) == null ? void 0 : j.querySelectorAll("[data-headlessui-portal]")) != null ? V : []).find((ue) => ue.contains(y(N)) && ue instanceof HTMLElement)) != null ? ie : null;
  });
  kt(_, T), oo({ type: "Dialog", enabled: m(() => x.value === 0), element: v, onUpdate: (j, V) => {
    if (V === "Dialog")
      return Y(j, { [rt.Add]: () => f.value += 1, [rt.Remove]: () => f.value -= 1 });
  } });
  let k = ao({ name: "DialogDescription", slot: m(() => ({ open: p.value })) }), U = w(null), le = { titleId: U, panelRef: w(null), dialogState: x, setTitleId(j) {
    U.value !== j && (U.value = j);
  }, close() {
    n("close", !1);
  } };
  ae(ut, le);
  let be = m(() => !(!I.value || E.value));
  ht(F, (j, V) => {
    j.preventDefault(), le.close(), X(() => V == null ? void 0 : V.focus());
  }, be);
  let je = m(() => !(E.value || x.value !== 0));
  fn((a = h.value) == null ? void 0 : a.defaultView, "keydown", (j) => {
    je.value && (j.defaultPrevented || j.key === A.Escape && (j.preventDefault(), j.stopPropagation(), le.close()));
  });
  let Ot = m(() => !(b.value || x.value !== 0 || D));
  return eo(h, Ot, (j) => {
    var V;
    return { containers: [...(V = j.containers) != null ? V : [], F] };
  }), Q((j) => {
    if (x.value !== 0)
      return;
    let V = y(v);
    if (!V)
      return;
    let ie = new ResizeObserver((ue) => {
      for (let qe of ue) {
        let $e = qe.target.getBoundingClientRect();
        $e.x === 0 && $e.y === 0 && $e.width === 0 && $e.height === 0 && le.close();
      }
    });
    ie.observe(V), j(() => ie.disconnect());
  }), () => {
    let { open: j, initialFocus: V, ...ie } = e, ue = { ...t, ref: v, id: i, role: d.value, "aria-modal": x.value === 0 ? !0 : void 0, "aria-labelledby": U.value, "aria-describedby": k.value }, qe = { open: x.value === 0 };
    return z(ot, { force: !0 }, () => [z(yn, () => z(co, { target: v.value }, () => z(ot, { force: !1 }, () => z(Pe, { initialFocus: V, containers: F, features: I.value ? Y(L.value, { parent: Pe.features.RestoreFocus, leaf: Pe.features.All & ~Pe.features.FocusLock }) : Pe.features.None }, () => z(O, {}, () => $({ ourProps: ue, theirProps: { ...ie, ...t }, slot: qe, attrs: t, slots: o, visible: x.value === 0, features: ce.RenderStrategy | ce.Static, name: "Dialog" })))))), z(g)]);
  };
} });
R({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t }) {
  var o;
  let l = (o = e.id) != null ? o : `headlessui-dialog-overlay-${ee()}`, r = _e("DialogOverlay");
  function a(i) {
    i.target === i.currentTarget && (i.preventDefault(), i.stopPropagation(), r.close());
  }
  return () => {
    let { ...i } = e;
    return $({ ourProps: { id: l, "aria-hidden": !0, onClick: a }, theirProps: i, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogOverlay" });
  };
} });
R({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let r = (l = e.id) != null ? l : `headlessui-dialog-backdrop-${ee()}`, a = _e("DialogBackdrop"), i = w(null);
  return o({ el: i, $el: i }), K(() => {
    if (a.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...u } = e, c = { id: r, ref: i, "aria-hidden": !0 };
    return z(ot, { force: !0 }, () => z(yn, () => $({ ourProps: c, theirProps: { ...n, ...u }, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogBackdrop" })));
  };
} });
R({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let r = (l = e.id) != null ? l : `headlessui-dialog-panel-${ee()}`, a = _e("DialogPanel");
  o({ el: a.panelRef, $el: a.panelRef });
  function i(u) {
    u.stopPropagation();
  }
  return () => {
    let { ...u } = e, c = { id: r, ref: a.panelRef, onClick: i };
    return $({ ourProps: c, theirProps: u, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogPanel" });
  };
} });
R({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t }) {
  var o;
  let l = (o = e.id) != null ? o : `headlessui-dialog-title-${ee()}`, r = _e("DialogTitle");
  return K(() => {
    r.setTitleId(l), ne(() => r.setTitleId(null));
  }), () => {
    let { ...a } = e;
    return $({ ourProps: { id: l }, theirProps: a, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogTitle" });
  };
} });
let Lt = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Bt(e) {
  var n, t;
  let o = (n = e.innerText) != null ? n : "", l = e.cloneNode(!0);
  if (!(l instanceof HTMLElement))
    return o;
  let r = !1;
  for (let i of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    i.remove(), r = !0;
  let a = r ? (t = l.innerText) != null ? t : "" : o;
  return Lt.test(a) && (a = a.replace(Lt, "")), a;
}
function vo(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string")
    return n.trim();
  let t = e.getAttribute("aria-labelledby");
  if (t) {
    let o = t.split(" ").map((l) => {
      let r = document.getElementById(l);
      if (r) {
        let a = r.getAttribute("aria-label");
        return typeof a == "string" ? a.trim() : Bt(r).trim();
      }
      return null;
    }).filter(Boolean);
    if (o.length > 0)
      return o.join(", ");
  }
  return Bt(e).trim();
}
function po(e) {
  let n = w(""), t = w("");
  return () => {
    let o = y(e);
    if (!o)
      return "";
    let l = o.innerText;
    if (n.value === l)
      return t.value;
    let r = vo(o).trim().toLowerCase();
    return n.value = l, t.value = r, r;
  };
}
var mo = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(mo || {}), ho = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(ho || {});
function bo(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let wn = Symbol("MenuContext");
function Ke(e) {
  let n = Z(wn, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ke), t;
  }
  return n;
}
R({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: t }) {
  let o = w(1), l = w(null), r = w(null), a = w([]), i = w(""), u = w(null), c = w(1);
  function d(s = (p) => p) {
    let p = u.value !== null ? a.value[u.value] : null, v = mt(s(a.value.slice()), (x) => y(x.dataRef.domRef)), h = p ? v.indexOf(p) : null;
    return h === -1 && (h = null), { items: v, activeItemIndex: h };
  }
  let f = { menuState: o, buttonRef: l, itemsRef: r, items: a, searchQuery: i, activeItemIndex: u, activationTrigger: c, closeMenu: () => {
    o.value = 1, u.value = null;
  }, openMenu: () => o.value = 0, goToItem(s, p, v) {
    let h = d(), x = lt(s === B.Specific ? { focus: B.Specific, id: p } : { focus: s }, { resolveItems: () => h.items, resolveActiveIndex: () => h.activeItemIndex, resolveId: (I) => I.id, resolveDisabled: (I) => I.dataRef.disabled });
    i.value = "", u.value = x, c.value = v != null ? v : 1, a.value = h.items;
  }, search(s) {
    let p = i.value !== "" ? 0 : 1;
    i.value += s.toLowerCase();
    let v = (u.value !== null ? a.value.slice(u.value + p).concat(a.value.slice(0, u.value + p)) : a.value).find((x) => x.dataRef.textValue.startsWith(i.value) && !x.dataRef.disabled), h = v ? a.value.indexOf(v) : -1;
    h === -1 || h === u.value || (u.value = h, c.value = 1);
  }, clearSearch() {
    i.value = "";
  }, registerItem(s, p) {
    let v = d((h) => [...h, { id: s, dataRef: p }]);
    a.value = v.items, u.value = v.activeItemIndex, c.value = 1;
  }, unregisterItem(s) {
    let p = d((v) => {
      let h = v.findIndex((x) => x.id === s);
      return h !== -1 && v.splice(h, 1), v;
    });
    a.value = p.items, u.value = p.activeItemIndex, c.value = 1;
  } };
  return ht([l, r], (s, p) => {
    var v;
    f.closeMenu(), pt(p, vt.Loose) || (s.preventDefault(), (v = y(l)) == null || v.focus());
  }, m(() => o.value === 0)), ae(wn, f), bt(m(() => Y(o.value, { [0]: H.Open, [1]: H.Closed }))), () => {
    let s = { open: o.value === 0, close: f.closeMenu };
    return $({ ourProps: {}, theirProps: e, slot: s, slots: n, attrs: t, name: "Menu" });
  };
} });
R({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let r = (l = e.id) != null ? l : `headlessui-menu-button-${ee()}`, a = Ke("MenuButton");
  o({ el: a.buttonRef, $el: a.buttonRef });
  function i(f) {
    switch (f.key) {
      case A.Space:
      case A.Enter:
      case A.ArrowDown:
        f.preventDefault(), f.stopPropagation(), a.openMenu(), X(() => {
          var s;
          (s = y(a.itemsRef)) == null || s.focus({ preventScroll: !0 }), a.goToItem(B.First);
        });
        break;
      case A.ArrowUp:
        f.preventDefault(), f.stopPropagation(), a.openMenu(), X(() => {
          var s;
          (s = y(a.itemsRef)) == null || s.focus({ preventScroll: !0 }), a.goToItem(B.Last);
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
    e.disabled || (a.menuState.value === 0 ? (a.closeMenu(), X(() => {
      var s;
      return (s = y(a.buttonRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    })) : (f.preventDefault(), a.openMenu(), bo(() => {
      var s;
      return (s = y(a.itemsRef)) == null ? void 0 : s.focus({ preventScroll: !0 });
    })));
  }
  let d = Zt(m(() => ({ as: e.as, type: n.type })), a.buttonRef);
  return () => {
    var f;
    let s = { open: a.menuState.value === 0 }, { ...p } = e, v = { ref: a.buttonRef, id: r, type: d.value, "aria-haspopup": "menu", "aria-controls": (f = y(a.itemsRef)) == null ? void 0 : f.id, "aria-expanded": a.menuState.value === 0, onKeydown: i, onKeyup: u, onClick: c };
    return $({ ourProps: v, theirProps: p, slot: s, attrs: n, slots: t, name: "MenuButton" });
  };
} });
R({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: t, expose: o }) {
  var l;
  let r = (l = e.id) != null ? l : `headlessui-menu-items-${ee()}`, a = Ke("MenuItems"), i = w(null);
  o({ el: a.itemsRef, $el: a.itemsRef }), tn({ container: m(() => y(a.itemsRef)), enabled: m(() => a.menuState.value === 0), accept(s) {
    return s.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : s.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(s) {
    s.setAttribute("role", "none");
  } });
  function u(s) {
    var p;
    switch (i.value && clearTimeout(i.value), s.key) {
      case A.Space:
        if (a.searchQuery.value !== "")
          return s.preventDefault(), s.stopPropagation(), a.search(s.key);
      case A.Enter:
        if (s.preventDefault(), s.stopPropagation(), a.activeItemIndex.value !== null) {
          let v = a.items.value[a.activeItemIndex.value];
          (p = y(v.dataRef.domRef)) == null || p.click();
        }
        a.closeMenu(), Qt(y(a.buttonRef));
        break;
      case A.ArrowDown:
        return s.preventDefault(), s.stopPropagation(), a.goToItem(B.Next);
      case A.ArrowUp:
        return s.preventDefault(), s.stopPropagation(), a.goToItem(B.Previous);
      case A.Home:
      case A.PageUp:
        return s.preventDefault(), s.stopPropagation(), a.goToItem(B.First);
      case A.End:
      case A.PageDown:
        return s.preventDefault(), s.stopPropagation(), a.goToItem(B.Last);
      case A.Escape:
        s.preventDefault(), s.stopPropagation(), a.closeMenu(), X(() => {
          var v;
          return (v = y(a.buttonRef)) == null ? void 0 : v.focus({ preventScroll: !0 });
        });
        break;
      case A.Tab:
        s.preventDefault(), s.stopPropagation(), a.closeMenu(), X(() => Dl(y(a.buttonRef), s.shiftKey ? se.Previous : se.Next));
        break;
      default:
        s.key.length === 1 && (a.search(s.key), i.value = setTimeout(() => a.clearSearch(), 350));
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
  let d = Ne(), f = m(() => d !== null ? (d.value & H.Open) === H.Open : a.menuState.value === 0);
  return () => {
    var s, p;
    let v = { open: a.menuState.value === 0 }, { ...h } = e, x = { "aria-activedescendant": a.activeItemIndex.value === null || (s = a.items.value[a.activeItemIndex.value]) == null ? void 0 : s.id, "aria-labelledby": (p = y(a.buttonRef)) == null ? void 0 : p.id, id: r, onKeydown: u, onKeyup: c, role: "menu", tabIndex: 0, ref: a.itemsRef };
    return $({ ourProps: x, theirProps: h, slot: v, attrs: n, slots: t, features: ce.RenderStrategy | ce.Static, visible: f.value, name: "MenuItems" });
  };
} });
R({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: t, expose: o }) {
  var l;
  let r = (l = e.id) != null ? l : `headlessui-menu-item-${ee()}`, a = Ke("MenuItem"), i = w(null);
  o({ el: i, $el: i });
  let u = m(() => a.activeItemIndex.value !== null ? a.items.value[a.activeItemIndex.value].id === r : !1), c = po(i), d = m(() => ({ disabled: e.disabled, get textValue() {
    return c();
  }, domRef: i }));
  K(() => a.registerItem(r, d)), ne(() => a.unregisterItem(r)), Q(() => {
    a.menuState.value === 0 && u.value && a.activationTrigger.value !== 0 && X(() => {
      var I, E;
      return (E = (I = y(i)) == null ? void 0 : I.scrollIntoView) == null ? void 0 : E.call(I, { block: "nearest" });
    });
  });
  function f(I) {
    if (e.disabled)
      return I.preventDefault();
    a.closeMenu(), Qt(y(a.buttonRef));
  }
  function s() {
    if (e.disabled)
      return a.goToItem(B.Nothing);
    a.goToItem(B.Specific, r);
  }
  let p = en();
  function v(I) {
    p.update(I);
  }
  function h(I) {
    p.wasMoved(I) && (e.disabled || u.value || a.goToItem(B.Specific, r, 0));
  }
  function x(I) {
    p.wasMoved(I) && (e.disabled || u.value && a.goToItem(B.Nothing));
  }
  return () => {
    let { disabled: I, ...E } = e, D = { active: u.value, disabled: I, close: a.closeMenu };
    return $({ ourProps: { id: r, ref: i, role: "menuitem", tabIndex: I === !0 ? void 0 : -1, "aria-disabled": I === !0 ? !0 : void 0, onClick: f, onFocus: s, onPointerenter: v, onMouseenter: v, onPointermove: h, onMousemove: h, onPointerleave: x, onMouseleave: x }, theirProps: { ...t, ...E }, slot: D, attrs: t, slots: n, name: "MenuItem" });
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
  let t = we();
  if (!e)
    return t.dispose;
  let { transitionDuration: o, transitionDelay: l } = getComputedStyle(e), [r, a] = [o, l].map((i) => {
    let [u = 0] = i.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, d) => d - c);
    return u;
  });
  return r !== 0 ? t.setTimeout(() => n("finished"), r + a) : n("finished"), t.add(() => n("cancelled")), t.dispose;
}
function Nt(e, n, t, o, l, r) {
  let a = we(), i = r !== void 0 ? go(r) : () => {
  };
  return He(e, ...l), Xe(e, ...n, ...t), a.nextFrame(() => {
    He(e, ...t), Xe(e, ...o), a.add(yo(e, (u) => (He(e, ...o, ...n), Xe(e, ...l), i(u))));
  }), a.add(() => He(e, ...n, ...t, ...o, ...l)), a.add(() => i("cancelled")), a.dispose;
}
function Oe(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let gt = Symbol("TransitionContext");
var xo = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(xo || {});
function wo() {
  return Z(gt, null) !== null;
}
function So() {
  let e = Z(gt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Oo() {
  let e = Z(yt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let yt = Symbol("NestingContext");
function Ge(e) {
  return "children" in e ? Ge(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function Sn(e) {
  let n = w([]), t = w(!1);
  K(() => t.value = !0), ne(() => t.value = !1);
  function o(r, a = ye.Hidden) {
    let i = n.value.findIndex(({ id: u }) => u === r);
    i !== -1 && (Y(a, { [ye.Unmount]() {
      n.value.splice(i, 1);
    }, [ye.Hidden]() {
      n.value[i].state = "hidden";
    } }), !Ge(n) && t.value && (e == null || e()));
  }
  function l(r) {
    let a = n.value.find(({ id: i }) => i === r);
    return a ? a.state !== "visible" && (a.state = "visible") : n.value.push({ id: r, state: "visible" }), () => o(r, ye.Unmount);
  }
  return { children: n, register: l, unregister: o };
}
let On = ce.RenderStrategy, Eo = R({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: l }) {
  let r = w(0);
  function a() {
    r.value |= H.Opening, n("beforeEnter");
  }
  function i() {
    r.value &= ~H.Opening, n("afterEnter");
  }
  function u() {
    r.value |= H.Closing, n("beforeLeave");
  }
  function c() {
    r.value &= ~H.Closing, n("afterLeave");
  }
  if (!wo() && Ll())
    return () => z(To, { ...e, onBeforeEnter: a, onAfterEnter: i, onBeforeLeave: u, onAfterLeave: c }, o);
  let d = w(null), f = m(() => e.unmount ? ye.Unmount : ye.Hidden);
  l({ el: d, $el: d });
  let { show: s, appear: p } = So(), { register: v, unregister: h } = Oo(), x = w(s.value ? "visible" : "hidden"), I = { value: !0 }, E = ee(), D = { value: !1 }, J = Sn(() => {
    !D.value && x.value !== "hidden" && (x.value = "hidden", h(E), c());
  });
  K(() => {
    let T = v(E);
    ne(T);
  }), Q(() => {
    if (f.value === ye.Hidden && E) {
      if (s.value && x.value !== "visible") {
        x.value = "visible";
        return;
      }
      Y(x.value, { hidden: () => h(E), visible: () => v(E) });
    }
  });
  let O = Oe(e.enter), F = Oe(e.enterFrom), N = Oe(e.enterTo), g = Oe(e.entered), L = Oe(e.leave), b = Oe(e.leaveFrom), S = Oe(e.leaveTo);
  K(() => {
    Q(() => {
      if (x.value === "visible") {
        let T = y(d);
        if (T instanceof Comment && T.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function C(T) {
    let _ = I.value && !p.value, k = y(d);
    !k || !(k instanceof HTMLElement) || _ || (D.value = !0, s.value && a(), s.value || u(), T(s.value ? Nt(k, O, F, N, g, (U) => {
      D.value = !1, U === st.Finished && i();
    }) : Nt(k, L, b, S, g, (U) => {
      D.value = !1, U === st.Finished && (Ge(J) || (x.value = "hidden", h(E), c()));
    })));
  }
  return K(() => {
    te([s], (T, _, k) => {
      C(k), I.value = !1;
    }, { immediate: !0 });
  }), ae(yt, J), bt(m(() => Y(x.value, { visible: H.Open, hidden: H.Closed }) | r.value)), () => {
    let { appear: T, show: _, enter: k, enterFrom: U, enterTo: le, entered: be, leave: je, leaveFrom: Ot, leaveTo: j, ...V } = e, ie = { ref: d }, ue = { ...V, ...p.value && s.value && Le.isServer ? { class: Ue([t.class, V.class, ...O, ...F]) } : {} };
    return $({ theirProps: ue, ourProps: ie, slot: {}, slots: o, attrs: t, features: On, visible: x.value === "visible", name: "TransitionChild" });
  };
} }), Io = Eo, To = R({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o }) {
  let l = Ne(), r = m(() => e.show === null && l !== null ? (l.value & H.Open) === H.Open : e.show);
  Q(() => {
    if (![!0, !1].includes(r.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = w(r.value ? "visible" : "hidden"), i = Sn(() => {
    a.value = "hidden";
  }), u = w(!0), c = { show: r, appear: m(() => e.appear || !u.value) };
  return K(() => {
    Q(() => {
      u.value = !1, r.value ? a.value = "visible" : Ge(i) || (a.value = "hidden");
    });
  }), ae(yt, i), ae(gt, c), () => {
    let d = Be(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return $({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [z(Io, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...t, ...f, ...d }, o.default)] }, attrs: {}, features: On, visible: a.value === "visible", name: "Transition" });
  };
} });
var _t;
const Co = typeof window < "u";
Co && ((_t = window == null ? void 0 : window.navigator) == null ? void 0 : _t.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Po(e) {
  return e;
}
const dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ct = "__vueuse_ssr_handlers__";
dt[ct] = dt[ct] || {};
dt[ct];
var jt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(jt || (jt = {}));
var Ro = Object.defineProperty, $t = Object.getOwnPropertySymbols, Mo = Object.prototype.hasOwnProperty, Do = Object.prototype.propertyIsEnumerable, Vt = (e, n, t) => n in e ? Ro(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Fo = (e, n) => {
  for (var t in n || (n = {}))
    Mo.call(n, t) && Vt(e, t, n[t]);
  if ($t)
    for (var t of $t(n))
      Do.call(n, t) && Vt(e, t, n[t]);
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
Fo({
  linear: Po
}, ko);
function Ao(e, n) {
  return m({
    get: () => e.modelValue,
    set: (t) => n("update:modelValue", t)
  });
}
const Lo = {
  key: 0,
  class: "mt-1 text-sm text-red-400"
}, Bo = { name: "Error" }, En = /* @__PURE__ */ R({
  ...Bo,
  props: {
    error: {}
  },
  setup(e) {
    return (n, t) => n.error ? (M(), W("div", Lo, [
      re(n.$slots, "default", {}, () => [
        De(me(n.error), 1)
      ])
    ])) : ve("", !0);
  }
}), No = { class: "w-full" }, _o = {
  key: 0,
  class: "mt-2 text-xs text-gray-500"
}, jo = {
  name: "Base",
  inheritAttrs: !1
}, $o = /* @__PURE__ */ R({
  ...jo,
  props: {
    description: {},
    error: {},
    shadow: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (n, t) => (M(), W("div", No, [
      G("div", {
        class: Ue(["mt-1 w-full rounded-md", { "shadow-sm": n.shadow }])
      }, [
        re(n.$slots, "default")
      ], 2),
      n.description ? (M(), W("p", _o, me(n.description), 1)) : ve("", !0),
      n.error ? (M(), oe(En, {
        key: 1,
        error: n.error
      }, null, 8, ["error"])) : ve("", !0)
    ]));
  }
}), Vo = { name: "Actions" }, zo = { class: "mt-8 border-t border-gray-200 pt-5" }, Ho = { class: "flex justify-end" }, Wo = { class: "inline-flex" };
function Uo(e, n, t, o, l, r) {
  return M(), W("div", zo, [
    G("div", Ho, [
      G("span", Wo, [
        re(e.$slots, "default")
      ])
    ])
  ]);
}
const Ko = /* @__PURE__ */ ll(Vo, [["render", Uo]]), Go = { class: "relative flex items-start" }, qo = { class: "flex h-5 items-center" }, Qo = ["id", "value", "disabled", "readonly"], Yo = { class: "ml-3" }, Jo = ["for"], Xo = { name: "Checkbox" }, Zo = /* @__PURE__ */ R({
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
    return (o, l) => (M(), oe($o, pe(o.$props, { shadow: !1 }), {
      default: de(() => [
        G("div", Go, [
          G("div", qo, [
            tt(G("input", pe({
              id: o.id,
              "onUpdate:modelValue": l[0] || (l[0] = (r) => Ln(t) ? t.value = r : null),
              value: o.value,
              type: "checkbox",
              class: "h-4 w-4 rounded border-gray-300 text-primary-600 accent-primary-600 focus:ring-primary-500",
              disabled: o.disabled,
              readonly: o.readonly
            }, o.$attrs), null, 16, Qo), [
              [Bn, q(t)]
            ]),
            G("div", Yo, [
              G("label", {
                for: o.id,
                class: "block text-sm font-medium leading-5 text-gray-700"
              }, me(o.label), 9, Jo)
            ])
          ])
        ])
      ]),
      _: 1
    }, 16));
  }
}), er = ["for"], tr = { name: "Label" }, nr = /* @__PURE__ */ R({
  ...tr,
  props: {
    for: {}
  },
  setup(e) {
    const n = e;
    return (t, o) => (M(), W("label", {
      for: n.for,
      class: "block text-sm font-medium capitalize leading-5 text-gray-700"
    }, [
      re(t.$slots, "default")
    ], 8, er));
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
let Ze = In;
var lr = (Ze.__esModule ? Ze : { default: Ze }).default, Cn = {}, Pn = {}, xt = { exports: {} }, P = String, Rn = function() {
  return { isColorSupported: !1, reset: P, bold: P, dim: P, italic: P, underline: P, inverse: P, hidden: P, strikethrough: P, black: P, red: P, green: P, yellow: P, blue: P, magenta: P, cyan: P, white: P, gray: P, bgBlack: P, bgRed: P, bgGreen: P, bgYellow: P, bgBlue: P, bgMagenta: P, bgCyan: P, bgWhite: P, blackBright: P, redBright: P, greenBright: P, yellowBright: P, blueBright: P, magentaBright: P, cyanBright: P, whiteBright: P, bgBlackBright: P, bgRedBright: P, bgGreenBright: P, bgYellowBright: P, bgBlueBright: P, bgMagentaBright: P, bgCyanBright: P, bgWhiteBright: P };
};
xt.exports = Rn();
xt.exports.createColors = Rn;
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
      return a;
    },
    default: function() {
      return i;
    }
  });
  const t = /* @__PURE__ */ o(xt.exports);
  function o(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  let l = /* @__PURE__ */ new Set();
  function r(u, c, d) {
    typeof process < "u" && process.env.JEST_WORKER_ID || d && l.has(d) || (d && l.add(d), console.warn(""), c.forEach((f) => console.warn(u, "-", f)));
  }
  function a(u) {
    return t.default.dim(u);
  }
  const i = {
    info(u, c) {
      r(t.default.bold(t.default.cyan("info")), ...Array.isArray(u) ? [
        u
      ] : [
        c,
        u
      ]);
    },
    warn(u, c) {
      r(t.default.bold(t.default.yellow("warn")), ...Array.isArray(u) ? [
        u
      ] : [
        c,
        u
      ]);
    },
    risk(u, c) {
      r(t.default.bold(t.default.magenta("risk")), ...Array.isArray(u) ? [
        u
      ] : [
        c,
        u
      ]);
    }
  };
})(Pn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return l;
    }
  });
  const n = /* @__PURE__ */ t(Pn);
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
})(Cn);
let et = Cn;
var or = (et.__esModule ? et : { default: et }).default;
lr.withOptions(
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
              ...or.indigo,
              ...(n = e == null ? void 0 : e.colors) == null ? void 0 : n.primary
            }
          }
        }
      }
    };
  }
);
const rr = /* @__PURE__ */ R({
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
      set: (r) => {
        o("update:modelValue", r);
      }
    });
    return (r, a) => (M(!0), W(Se, null, Ae(r.items, (i, u) => {
      var c, d, f;
      return M(), oe(q(Zo), {
        id: `${t.form._prefix}-${(c = i.label) != null ? c : i}`,
        key: u,
        modelValue: l.value,
        "onUpdate:modelValue": a[0] || (a[0] = (s) => l.value = s),
        value: (d = i.value) != null ? d : i,
        label: (f = i.label) != null ? f : i
      }, null, 8, ["id", "modelValue", "value", "label"]);
    }), 128));
  }
}), Mn = (e) => Object.keys(e).reduce((n, t) => {
  var o;
  return e[t].schema ? { ...n, ...Mn(e[t].schema) } : (n[t] = (o = e[t].value) != null ? o : null, n);
}, {}), ar = (e) => {
  const n = "abcdefghijklmnopqrstuvwxyz";
  let t = "";
  for (let o = 0; o < e; o++)
    t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}, wt = (e) => Object.entries(e).map(([n, t]) => {
  const o = t.hasOwnProperty("setup") ? { component: t } : t;
  return {
    name: n,
    definition: o
  };
});
function pr(e) {
  const n = ar(6), t = Fn(
    Object.keys(e).reduce((o, l) => {
      var a, i, u;
      if (e[l].schema)
        return { ...o, ...Mn(e[l].schema) };
      if (e[l].component === rr)
        return o[l] = (a = e[l].checked) != null ? a : [], o;
      const r = (i = e[l]) == null ? void 0 : i.fieldset;
      return r ? (Object.entries(r).forEach(([c, d]) => {
        var f;
        d != null && d.model ? o[d.model] = (f = d.value) != null ? f : null : o[c] = d;
      }), o) : (o[l] = (u = e[l].value) != null ? u : null, o);
    }, {})
  );
  return t._prefix = n, {
    elements: wt(e),
    form: t
  };
}
const ir = { key: 0 }, St = /* @__PURE__ */ R({
  __name: "Element",
  props: {
    element: {},
    form: {}
  },
  setup(e) {
    const n = e, t = m(() => {
      var p;
      const s = (p = n.element.definition) == null ? void 0 : p.fieldset;
      return s ? Object.entries(s).reduce((v, [h, x]) => (x != null && x.model ? v[x.model] = n.form[x.model] : v[h] = n.form[h], v), {}) : {
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
        error: (v = r.value[0]) != null ? v : null
      }), p = n.element.definition.component.props;
      return Object.fromEntries(s.filter(([h]) => p.hasOwnProperty(h)));
    }), l = m(() => {
      var p;
      const s = (p = n.element.definition) == null ? void 0 : p.fieldset;
      return s ? Object.entries(s).reduce((v, [h, x]) => (x != null && x.model ? v[`update:${x.model}`] = (I) => n.form[x.model] = I : v[`update:${h}`] = (I) => n.form[h] = I, v), {}) : { "update:modelValue": (v) => n.form[n.element.name] = v };
    }), r = m(() => {
      var p;
      const s = (p = n.element.definition) == null ? void 0 : p.fieldset;
      return s ? Object.keys(s).map((v) => n.form.errors[v]).filter((v) => v) : [n.form.errors[n.element.name]];
    }), a = m(() => {
      var p;
      return ((p = n.element.definition.label) != null ? p : n.element.name).replaceAll("_id", "").replaceAll("_", " ");
    }), i = !!n.element.definition.schema, u = m(() => n.element.definition.showLabel !== void 0 ? n.element.definition.showLabel : n.element.definition.component.name === "Hidden" ? !1 : !i), c = m(() => {
      if (n.element.definition.alert !== void 0) {
        const s = n.element.definition.alert;
        return s.visible = typeof s.visible == "function" ? s.visible : () => !0, s;
      }
      return null;
    }), d = w(
      typeof n.element.definition.visible == "function" ? n.element.definition.visible : () => !0
    ), f = w(
      typeof n.element.definition.visible == "function" ? n.element.definition.visible(n.form) : () => !0
    );
    return te(n.form, (s) => {
      typeof d.value == "function" && (f.value = d.value(s));
    }), (s, p) => f.value ? (M(), W("div", ir, [
      u.value ? (M(), oe(q(nr), {
        key: 0,
        for: o.value.id
      }, {
        default: de(() => [
          De(me(a.value), 1)
        ]),
        _: 1
      }, 8, ["for"])) : ve("", !0),
      (M(), oe(_n(s.element.definition.component), pe({
        key: s.element.name
      }, o.value, jn(l.value)), null, 16)),
      c.value && c.value.visible() ? (M(), oe(q(el), {
        key: 1,
        "without-icon": ""
      }, $n({
        default: de(() => [
          De(me(c.value.text) + " ", 1)
        ]),
        _: 2
      }, [
        c.value.actionHref && c.value.actionText ? {
          name: "actions",
          fn: de(() => [
            Ce(q(nl), {
              external: c.value.externalAction,
              href: c.value.actionHref
            }, {
              default: de(() => [
                De(me(c.value.actionText), 1)
              ]),
              _: 1
            }, 8, ["external", "href"])
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : ve("", !0),
      o.value.hasOwnProperty("error") ? ve("", !0) : (M(!0), W(Se, { key: 2 }, Ae(r.value, (v, h) => (M(), oe(q(En), {
        key: h,
        error: v
      }, null, 8, ["error"]))), 128))
    ])) : ve("", !0);
  }
}), ur = { class: "mx-auto mt-6 max-w-md space-y-6" }, mr = /* @__PURE__ */ R({
  __name: "FormBuilder",
  props: {
    schema: {},
    submit: { default: "Save" }
  },
  setup(e) {
    return (n, t) => (M(), W("div", ur, [
      (M(!0), W(Se, null, Ae(n.schema.elements, (o, l) => (M(), oe(St, {
        key: l,
        element: o,
        form: n.schema.form
      }, null, 8, ["element", "form"]))), 128)),
      re(n.$slots, "actions-wrapper", {
        form: n.schema.form
      }, () => [
        Ce(q(Ko), null, {
          default: de(() => [
            re(n.$slots, "actions", {
              form: n.schema.form
            }, () => [
              Ce(q(rl), {
                as: "button",
                type: "submit",
                loading: n.schema.form.processing
              }, {
                default: de(() => [
                  De(me(n.submit), 1)
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
}), hr = /* @__PURE__ */ R({
  __name: "Grid",
  props: {
    schema: {},
    form: {}
  },
  setup(e) {
    const t = wt(e.schema);
    return (o, l) => (M(), W("div", {
      class: Ue(["grid gap-x-4 gap-y-6 md:grid-flow-col", "md:grid-cols-" + q(t).length])
    }, [
      (M(!0), W(Se, null, Ae(q(t), (r, a) => (M(), oe(St, pe({
        key: a,
        element: r,
        form: o.form,
        ref_for: !0
      }, o.$attrs), null, 16, ["element", "form"]))), 128))
    ], 2));
  }
}), sr = { class: "mt-10" }, dr = {
  key: 0,
  class: "mt-1 whitespace-pre-line text-sm leading-6 text-gray-500"
}, cr = { class: "mt-4 space-y-6" }, br = /* @__PURE__ */ R({
  __name: "Section",
  props: {
    schema: {},
    form: {},
    heading: {},
    description: {}
  },
  setup(e) {
    const t = wt(e.schema);
    return (o, l) => (M(), W("div", sr, [
      G("label", null, me(o.heading), 1),
      o.description ? (M(), W("p", dr, me(o.description), 1)) : ve("", !0),
      G("div", cr, [
        (M(!0), W(Se, null, Ae(q(t), (r, a) => (M(), oe(St, {
          key: a,
          element: r,
          form: o.form
        }, null, 8, ["element", "form"]))), 128))
      ])
    ]));
  }
});
export {
  rr as CheckboxGroup,
  mr as FormBuilder,
  hr as Grid,
  br as Section,
  pr as useSchema
};
