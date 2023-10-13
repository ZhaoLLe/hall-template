import {
  d as _,
  r as E,
  c as h,
  e as x,
  t as A,
  b as e,
  w as o,
  o as V,
  a as N,
  E as S,
  _ as T,
} from './index-a373cf8a.js';
import {
  E as w,
  a as L,
  b as k,
  c as B,
  d as C,
  e as G,
  f as I,
  g as z,
} from './el-form-item-9769e993.js';
import './scroll-f1a266d3.js';
const D = { class: 'personnel_list' },
  F = _({ name: 'PersonnelList' }),
  m = _({
    ...F,
    setup(P) {
      const p = [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ],
        t = E({ user: '', region: '', date: '' }),
        c = () => {};
      return (i, a) => {
        const u = k,
          n = B,
          r = C,
          b = G,
          f = S,
          g = w,
          l = I,
          v = L,
          y = z;
        return (
          V(),
          h('div', D, [
            x('h3', null, A(i.$t('menu.personnelmanagement')), 1),
            e(
              g,
              { inline: !0, model: t, class: 'demo-form-inline' },
              {
                default: o(() => [
                  e(
                    n,
                    { label: 'Approved by' },
                    {
                      default: o(() => [
                        e(
                          u,
                          {
                            modelValue: t.user,
                            'onUpdate:modelValue':
                              a[0] || (a[0] = (s) => (t.user = s)),
                            placeholder: 'Approved by',
                            clearable: '',
                          },
                          null,
                          8,
                          ['modelValue'],
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  e(
                    n,
                    { label: 'Activity zone' },
                    {
                      default: o(() => [
                        e(
                          b,
                          {
                            modelValue: t.region,
                            'onUpdate:modelValue':
                              a[1] || (a[1] = (s) => (t.region = s)),
                            placeholder: 'Activity zone',
                            clearable: '',
                          },
                          {
                            default: o(() => [
                              e(r, { label: 'Zone one', value: 'shanghai' }),
                              e(r, { label: 'Zone two', value: 'beijing' }),
                            ]),
                            _: 1,
                          },
                          8,
                          ['modelValue'],
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  e(n, null, {
                    default: o(() => [
                      e(
                        f,
                        { type: 'primary', onClick: c },
                        { default: o(() => [N('Query')]), _: 1 },
                      ),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ['model'],
            ),
            e(
              v,
              { data: p, style: { width: '100%', height: '450px' } },
              {
                default: o(() => [
                  e(l, { prop: 'date', label: 'Date', width: '180' }),
                  e(l, { prop: 'name', label: 'Name', width: '180' }),
                  e(l, { prop: 'address', label: 'Address' }),
                ]),
                _: 1,
              },
            ),
            e(y, {
              class: 'float-right',
              'page-size': 20,
              'pager-count': 11,
              layout: 'prev, pager, next',
              total: 1e3,
            }),
          ])
        );
      };
    },
  });
const d = {};
typeof d == 'function' && d(m);
const O = T(m, [['__scopeId', 'data-v-e87eab4a']]);
export { O as default };
