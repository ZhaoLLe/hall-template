import m from './card-9f56ac66.js';
import { _ } from './list.vue_vue_type_style_index_0_lang-28e29085.js';
import {
  d as v,
  bu as g,
  bv as b,
  a9 as k,
  c as h,
  e as t,
  t as p,
  a6 as n,
  b as s,
  w as o,
  bw as w,
  bx as C,
  o as r,
  ag as S,
  b7 as B,
  ap as I,
  _ as z,
} from './index-8bc00137.js';
import './scroll-026b2cf5.js';
const E = (a) => (w('data-v-41bce334'), (a = a()), C(), a),
  M = { class: 'home' },
  N = { class: 'home_welcome' },
  R = { class: 'home_modules' },
  V = { class: 'home_modules_left' },
  $ = { class: 'entry' },
  j = ['onClick'],
  q = E(() => t('div', { class: 'h-20px' }, null, -1)),
  A = { class: 'home_modules_right' },
  D = v({
    __name: 'index',
    setup(a) {
      const u = g();
      b({});
      const e = k('_t'),
        x = [
          { path: '/settlement/detail', name: e('menu.detailsettlement') },
          { path: '/settlement/batch', name: e('menu.batchsettlement') },
          { path: '/settlement/detail', name: e('menu.detailsettlement') },
          { path: '/settlement/detail', name: e('menu.detailsettlement') },
          { path: '/settlement/detail', name: e('menu.detailsettlement') },
          { path: '/settlement/detail', name: e('menu.detailsettlement') },
          { path: '/settlement/detail', name: e('menu.detailsettlement') },
          { path: '/settlement/detail', name: e('menu.detailsettlement') },
          { path: '/settlement/detail', name: e('menu.detailsettlement') },
          { path: '/settlement/detail', name: e('menu.detailsettlement') },
        ],
        y = ({ i: d, scoped: c }) => {
          u.push(d.path), c.closeMax();
        };
      return (d, c) => (
        r(),
        h('div', M, [
          t('div', N, p(n(e)('home.welcome')), 1),
          t('div', R, [
            t('div', V, [
              s(
                m,
                { title: n(e)('home.quickEntry'), style: { height: '180px' } },
                {
                  default: o((l) => [
                    t('div', $, [
                      (r(),
                      h(
                        S,
                        null,
                        B(x, (i, f) =>
                          t(
                            'div',
                            {
                              key: i.path,
                              class: 'entry_item',
                              style: I({
                                marginRight:
                                  f != 1 || l.isMaximize ? '12px' : '0',
                                marginBottom: l.isMaximize ? '12px' : '0',
                              }),
                              onClick: (F) => y({ i, scoped: l }),
                            },
                            p(i.name),
                            13,
                            j,
                          ),
                        ),
                        64,
                      )),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ['title'],
              ),
              q,
              s(
                m,
                { title: n(e)('home.pendingPaym'), style: { height: '600px' } },
                { default: o(() => [s(_)]), _: 1 },
                8,
                ['title'],
              ),
            ]),
            t('div', A, [
              s(
                m,
                {
                  title: n(e)('home.collectionAccount'),
                  style: { height: '100%' },
                },
                { default: o(() => [s(_)]), _: 1 },
                8,
                ['title'],
              ),
            ]),
          ]),
        ])
      );
    },
  });
const J = z(D, [['__scopeId', 'data-v-41bce334']]);
export { J as default };
