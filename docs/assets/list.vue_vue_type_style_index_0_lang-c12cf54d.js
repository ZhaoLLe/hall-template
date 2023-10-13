import {
  h as I,
  a8 as k,
  ab as D,
  ah as h,
  d as x,
  O as E,
  J as T,
  c as f,
  aH as A,
  ag as F,
  b7 as B,
  aq as y,
  o as v,
  t as R,
} from './index-a373cf8a.js';
import { d as V, g as M } from './scroll-f1a266d3.js';
const S = (e) => {
    let n = 0,
      t = e;
    for (; t; ) (n += t.offsetTop), (t = t.offsetParent);
    return n;
  },
  U = (e, n) => Math.abs(S(e) - S(n));
var j = 'Expected a function';
function w(e, n, t) {
  var o = !0,
    s = !0;
  if (typeof e != 'function') throw new TypeError(j);
  return (
    I(t) &&
      ((o = 'leading' in t ? !!t.leading : o),
      (s = 'trailing' in t ? !!t.trailing : s)),
    V(e, n, { leading: o, maxWait: n, trailing: s })
  );
}
const r = 'ElInfiniteScroll',
  P = 50,
  q = 200,
  J = 0,
  K = {
    delay: { type: Number, default: q },
    distance: { type: Number, default: J },
    disabled: { type: Boolean, default: !1 },
    immediate: { type: Boolean, default: !0 },
  },
  m = (e, n) =>
    Object.entries(K).reduce((t, [o, s]) => {
      var u, i;
      const { type: d, default: a } = s,
        l = e.getAttribute(`infinite-scroll-${o}`);
      let c = (i = (u = n[l]) != null ? u : l) != null ? i : a;
      return (
        (c = c === 'false' ? !1 : c),
        (c = d(c)),
        (t[o] = Number.isNaN(c) ? a : c),
        t
      );
    }, {}),
  N = (e) => {
    const { observer: n } = e[r];
    n && (n.disconnect(), delete e[r].observer);
  },
  W = (e, n) => {
    const {
        container: t,
        containerEl: o,
        instance: s,
        observer: u,
        lastScrollTop: i,
      } = e[r],
      { disabled: d, distance: a } = m(e, s),
      { clientHeight: l, scrollHeight: c, scrollTop: _ } = o,
      O = _ - i;
    if (((e[r].lastScrollTop = _), u || d || O < 0)) return;
    let b = !1;
    if (t === e) b = c - (l + _) <= a;
    else {
      const { clientTop: H, scrollHeight: L } = e,
        C = U(e, o);
      b = _ + l >= C + H + L - a;
    }
    b && n.call(s);
  };
function p(e, n) {
  const { containerEl: t, instance: o } = e[r],
    { disabled: s } = m(e, o);
  s ||
    t.clientHeight === 0 ||
    (t.scrollHeight <= t.clientHeight ? n.call(o) : N(e));
}
const X = {
    async mounted(e, n) {
      const { instance: t, value: o } = n;
      k(o) || D(r, "'v-infinite-scroll' binding value must be a function"),
        await h();
      const { delay: s, immediate: u } = m(e, t),
        i = M(e, !0),
        d = i === window ? document.documentElement : i,
        a = w(W.bind(null, e, o), s);
      if (i) {
        if (
          ((e[r] = {
            instance: t,
            container: i,
            containerEl: d,
            delay: s,
            cb: o,
            onScroll: a,
            lastScrollTop: d.scrollTop,
          }),
          u)
        ) {
          const l = new MutationObserver(w(p.bind(null, e, o), P));
          (e[r].observer = l),
            l.observe(e, { childList: !0, subtree: !0 }),
            p(e, o);
        }
        i.addEventListener('scroll', a);
      }
    },
    unmounted(e) {
      const { container: n, onScroll: t } = e[r];
      n == null || n.removeEventListener('scroll', t), N(e);
    },
    async updated(e) {
      if (!e[r]) await h();
      else {
        const { containerEl: n, cb: t, observer: o } = e[r];
        n.clientHeight && o && p(e, t);
      }
    },
  },
  g = X;
g.install = (e) => {
  e.directive('InfiniteScroll', g);
};
const Y = g;
const $ = { class: 'infinite-list-wrapper', style: { overflow: 'auto' } },
  z = ['infinite-scroll-disabled'],
  G = { key: 0 },
  Q = { key: 1 },
  te = x({
    __name: 'list',
    setup(e) {
      const n = E(10),
        t = E(!1),
        o = T(() => n.value >= 20),
        s = T(() => t.value || o.value),
        u = () => {
          (t.value = !0),
            setTimeout(() => {
              (n.value += 2), (t.value = !1);
            }, 2e3);
        };
      return (i, d) => {
        const a = Y;
        return (
          v(),
          f('div', $, [
            A(
              (v(),
              f(
                'ul',
                { class: 'list', 'infinite-scroll-disabled': s.value },
                [
                  (v(!0),
                  f(
                    F,
                    null,
                    B(
                      n.value,
                      (l) => (
                        v(), f('li', { key: l, class: 'list-item' }, R(l), 1)
                      ),
                    ),
                    128,
                  )),
                ],
                8,
                z,
              )),
              [[a, u]],
            ),
            t.value ? (v(), f('p', G, 'Loading...')) : y('', !0),
            o.value ? (v(), f('p', Q, 'No more')) : y('', !0),
          ])
        );
      };
    },
  });
export { te as _ };
