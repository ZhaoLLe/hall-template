import {
  d as v,
  r as y,
  c as E,
  a as r,
  t as h,
  b as e,
  w as o,
  o as x,
  E as A,
  _ as V,
} from './index-8bc00137.js';
import {
  E as N,
  a as S,
  b as T,
  c as w,
  d as C,
  e as G,
  f as I,
  g as L,
} from './el-form-item-fdbece38.js';
import './scroll-026b2cf5.js';
const k = { class: 'personnel_list' },
  z = v({
    __name: 'index',
    setup(B) {
      const _ = [
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
        t = y({ user: '', region: '', date: '' }),
        m = () => {};
      return (p, a) => {
        const c = T,
          l = w,
          d = C,
          i = G,
          u = A,
          b = N,
          n = I,
          f = S,
          g = L;
        return (
          x(),
          E('div', k, [
            r(h(p.$t('menu.batchsettlement')) + ' ', 1),
            e(
              b,
              { inline: !0, model: t, class: 'demo-form-inline' },
              {
                default: o(() => [
                  e(
                    l,
                    { label: 'Approved by' },
                    {
                      default: o(() => [
                        e(
                          c,
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
                    l,
                    { label: 'Activity zone' },
                    {
                      default: o(() => [
                        e(
                          i,
                          {
                            modelValue: t.region,
                            'onUpdate:modelValue':
                              a[1] || (a[1] = (s) => (t.region = s)),
                            placeholder: 'Activity zone',
                            clearable: '',
                          },
                          {
                            default: o(() => [
                              e(d, { label: 'Zone one', value: 'shanghai' }),
                              e(d, { label: 'Zone two', value: 'beijing' }),
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
                  e(l, null, {
                    default: o(() => [
                      e(
                        u,
                        { type: 'primary', onClick: m },
                        { default: o(() => [r('Query')]), _: 1 },
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
              f,
              { data: _, style: { width: '100%', height: '450px' } },
              {
                default: o(() => [
                  e(n, { prop: 'date', label: 'Date', width: '180' }),
                  e(n, { prop: 'name', label: 'Name', width: '180' }),
                  e(n, { prop: 'address', label: 'Address' }),
                ]),
                _: 1,
              },
            ),
            e(g, {
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
const Z = V(z, [['__scopeId', 'data-v-7fc84696']]);
export { Z as default };
