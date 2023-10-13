import {
  o as n,
  c,
  e,
  d as u,
  bA as p,
  O as h,
  t as v,
  b as l,
  w as f,
  a4 as x,
  a6 as z,
  a5 as V,
  aJ as g,
  _ as M,
} from './index-8bc00137.js';
const C = { viewBox: '0 0 1024 1024', width: '1.2em', height: '1.2em' },
  S = e(
    'path',
    {
      fill: 'currentColor',
      d: 'm160 96.064l192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872l-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z',
    },
    null,
    -1,
  ),
  b = [S];
function w(t, o) {
  return n(), c('svg', C, b);
}
const y = { name: 'ep-full-screen', render: w },
  B = { class: 'home_card_header' },
  k = { class: 'home_card_content' },
  E = u({
    __name: 'card',
    props: { title: { type: String, default: '' } },
    setup(t) {
      const o = t,
        a = p(),
        s = h(!1),
        _ = () => {
          (s.value = !s.value), a.setMaximize(!a.maximize);
        },
        i = () => {
          (s.value = !1), a.setMaximize(!1);
        };
      return (r, I) => {
        const d = y,
          m = g;
        return (
          n(),
          c(
            'div',
            { class: V(['home_card', { 'is-maximize': s.value }]) },
            [
              e('div', B, [
                e('h5', null, v(o.title), 1),
                e('div', null, [
                  l(m, { onClick: _ }, { default: f(() => [l(d)]), _: 1 }),
                ]),
              ]),
              e('div', k, [
                x(
                  r.$slots,
                  'default',
                  { isMaximize: z(a).maximize, closeMax: i },
                  void 0,
                  !0,
                ),
              ]),
            ],
            2,
          )
        );
      };
    },
  });
const N = M(E, [['__scopeId', 'data-v-4988ef3e']]);
export { N as default };
