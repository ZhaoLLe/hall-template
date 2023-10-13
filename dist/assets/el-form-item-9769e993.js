import {
  i as pt,
  g as Jn,
  f as jt,
  h as Kt,
  j as cr,
  k as ia,
  l as sa,
  m as ua,
  n as zl,
  p as Bl,
  q as Ot,
  s as An,
  u as Ao,
  v as ot,
  S as Zt,
  L as Hl,
  M as Gn,
  x as da,
  y as sn,
  z as ca,
  A as Dl,
  B as fa,
  C as Ke,
  D as pa,
  F as Lo,
  G as Fo,
  H as Mo,
  I as un,
  J as x,
  K as Ro,
  N as Pe,
  O as P,
  P as Xt,
  Q as se,
  R as cl,
  T as Qe,
  U as Et,
  V as Dt,
  W as rt,
  X as Jt,
  Y as fl,
  d as ae,
  Z as Pt,
  $ as ce,
  a0 as qt,
  a1 as _t,
  r as dn,
  a2 as Ut,
  a3 as ql,
  o as A,
  c as H,
  a4 as Te,
  a5 as M,
  a6 as v,
  a7 as Re,
  a8 as St,
  a9 as xe,
  aa as pl,
  ab as va,
  ac as it,
  ad as el,
  ae as ha,
  af as en,
  b as Oe,
  ag as _e,
  ah as ve,
  ai as tl,
  aj as Io,
  ak as No,
  al as fr,
  am as Hn,
  w as te,
  an as ne,
  ao as lt,
  ap as Fe,
  a as Ln,
  t as he,
  aq as U,
  e as le,
  ar as ko,
  as as Gt,
  at as cn,
  au as Ge,
  av as nl,
  aw as At,
  ax as Vl,
  ay as Wo,
  az as Fn,
  aA as jl,
  aB as ga,
  aC as ma,
  aD as zo,
  aE as Bo,
  aF as Ho,
  aG as Do,
  aH as Ue,
  aI as tn,
  aJ as Ye,
  aK as al,
  aL as ba,
  aM as qe,
  aN as qo,
  aO as Vt,
  aP as ya,
  aQ as Sn,
  aR as nn,
  aS as En,
  aT as Yn,
  aU as pr,
  aV as vl,
  aW as Je,
  aX as Vo,
  aY as gn,
  aZ as ol,
  a_ as vr,
  a$ as Kl,
  b0 as Ca,
  b1 as jo,
  b2 as wa,
  b3 as Ko,
  b4 as _o,
  b5 as Le,
  b6 as _l,
  b7 as Ht,
  b8 as Ze,
  b9 as Uo,
  ba as Go,
  bb as Qt,
  bc as Yo,
  bd as hr,
  be as Xo,
  bf as G,
  bg as Qo,
  bh as Ul,
  bi as On,
  bj as Zo,
  bk as Jo,
  bl as ei,
  bm as Sa,
  bn as Gl,
  bo as Ea,
  bp as Dn,
  bq as hl,
  br as ti,
  bs as ni,
  bt as li,
} from './index-a373cf8a.js';
import { t as ri, d as ln, s as ai } from './scroll-f1a266d3.js';
const oi = () => pt && /firefox/i.test(window.navigator.userAgent);
var gr = 1 / 0,
  ii = 17976931348623157e292;
function si(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = ri(e)), e === gr || e === -gr)) {
    var t = e < 0 ? -1 : 1;
    return t * ii;
  }
  return e === e ? e : 0;
}
function ui(e) {
  var t = si(e),
    n = t % 1;
  return t === t ? (n ? t - n : t) : 0;
}
function Yl(e) {
  return e;
}
var di = Jn(jt, 'WeakMap');
const gl = di;
var mr = Object.create,
  ci = (function () {
    function e() {}
    return function (t) {
      if (!Kt(t)) return {};
      if (mr) return mr(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })();
const fi = ci;
function pi(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function Oa(e, t) {
  var n = -1,
    l = e.length;
  for (t || (t = Array(l)); ++n < l; ) t[n] = e[n];
  return t;
}
var vi = 800,
  hi = 16,
  gi = Date.now;
function mi(e) {
  var t = 0,
    n = 0;
  return function () {
    var l = gi(),
      r = hi - (l - n);
    if (((n = l), r > 0)) {
      if (++t >= vi) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
function bi(e) {
  return function () {
    return e;
  };
}
var yi = cr
  ? function (e, t) {
      return cr(e, 'toString', {
        configurable: !0,
        enumerable: !1,
        value: bi(t),
        writable: !0,
      });
    }
  : Yl;
const Ci = yi;
var wi = mi(Ci);
const xa = wi;
function Si(e, t) {
  for (
    var n = -1, l = e == null ? 0 : e.length;
    ++n < l && t(e[n], n, e) !== !1;

  );
  return e;
}
function Ei(e, t, n, l) {
  for (var r = e.length, a = n + (l ? 1 : -1); l ? a-- : ++a < r; )
    if (t(e[a], a, e)) return a;
  return -1;
}
function Mn(e, t, n, l) {
  var r = !n;
  n || (n = {});
  for (var a = -1, o = t.length; ++a < o; ) {
    var i = t[a],
      s = l ? l(n[i], e[i], i, n, e) : void 0;
    s === void 0 && (s = e[i]), r ? ia(n, i, s) : sa(n, i, s);
  }
  return n;
}
var br = Math.max;
function $a(e, t, n) {
  return (
    (t = br(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var l = arguments, r = -1, a = br(l.length - t, 0), o = Array(a);
        ++r < a;

      )
        o[r] = l[t + r];
      r = -1;
      for (var i = Array(t + 1); ++r < t; ) i[r] = l[r];
      return (i[t] = n(o)), pi(e, this, i);
    }
  );
}
function Oi(e, t) {
  return xa($a(e, t, Yl), e + '');
}
var xi = 9007199254740991;
function Xl(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= xi;
}
function fn(e) {
  return e != null && Xl(e.length) && !ua(e);
}
function $i(e, t, n) {
  if (!Kt(n)) return !1;
  var l = typeof t;
  return (l == 'number' ? fn(n) && zl(t, n.length) : l == 'string' && t in n)
    ? Bl(n[t], e)
    : !1;
}
function Ti(e) {
  return Oi(function (t, n) {
    var l = -1,
      r = n.length,
      a = r > 1 ? n[r - 1] : void 0,
      o = r > 2 ? n[2] : void 0;
    for (
      a = e.length > 3 && typeof a == 'function' ? (r--, a) : void 0,
        o && $i(n[0], n[1], o) && ((a = r < 3 ? void 0 : a), (r = 1)),
        t = Object(t);
      ++l < r;

    ) {
      var i = n[l];
      i && e(t, i, l, a);
    }
    return t;
  });
}
var Pi = Object.prototype;
function Ql(e) {
  var t = e && e.constructor,
    n = (typeof t == 'function' && t.prototype) || Pi;
  return e === n;
}
function Ai(e, t) {
  for (var n = -1, l = Array(e); ++n < e; ) l[n] = t(n);
  return l;
}
var Li = '[object Arguments]';
function yr(e) {
  return Ot(e) && An(e) == Li;
}
var Ta = Object.prototype,
  Fi = Ta.hasOwnProperty,
  Mi = Ta.propertyIsEnumerable,
  Ri = yr(
    (function () {
      return arguments;
    })(),
  )
    ? yr
    : function (e) {
        return Ot(e) && Fi.call(e, 'callee') && !Mi.call(e, 'callee');
      };
const xn = Ri;
function Ii() {
  return !1;
}
var Pa = typeof exports == 'object' && exports && !exports.nodeType && exports,
  Cr = Pa && typeof module == 'object' && module && !module.nodeType && module,
  Ni = Cr && Cr.exports === Pa,
  wr = Ni ? jt.Buffer : void 0,
  ki = wr ? wr.isBuffer : void 0,
  Wi = ki || Ii;
const $n = Wi;
var zi = '[object Arguments]',
  Bi = '[object Array]',
  Hi = '[object Boolean]',
  Di = '[object Date]',
  qi = '[object Error]',
  Vi = '[object Function]',
  ji = '[object Map]',
  Ki = '[object Number]',
  _i = '[object Object]',
  Ui = '[object RegExp]',
  Gi = '[object Set]',
  Yi = '[object String]',
  Xi = '[object WeakMap]',
  Qi = '[object ArrayBuffer]',
  Zi = '[object DataView]',
  Ji = '[object Float32Array]',
  es = '[object Float64Array]',
  ts = '[object Int8Array]',
  ns = '[object Int16Array]',
  ls = '[object Int32Array]',
  rs = '[object Uint8Array]',
  as = '[object Uint8ClampedArray]',
  os = '[object Uint16Array]',
  is = '[object Uint32Array]',
  Ee = {};
Ee[Ji] =
  Ee[es] =
  Ee[ts] =
  Ee[ns] =
  Ee[ls] =
  Ee[rs] =
  Ee[as] =
  Ee[os] =
  Ee[is] =
    !0;
Ee[zi] =
  Ee[Bi] =
  Ee[Qi] =
  Ee[Hi] =
  Ee[Zi] =
  Ee[Di] =
  Ee[qi] =
  Ee[Vi] =
  Ee[ji] =
  Ee[Ki] =
  Ee[_i] =
  Ee[Ui] =
  Ee[Gi] =
  Ee[Yi] =
  Ee[Xi] =
    !1;
function ss(e) {
  return Ot(e) && Xl(e.length) && !!Ee[An(e)];
}
function Zl(e) {
  return function (t) {
    return e(t);
  };
}
var Aa = typeof exports == 'object' && exports && !exports.nodeType && exports,
  bn = Aa && typeof module == 'object' && module && !module.nodeType && module,
  us = bn && bn.exports === Aa,
  il = us && Ao.process,
  ds = (function () {
    try {
      var e = bn && bn.require && bn.require('util').types;
      return e || (il && il.binding && il.binding('util'));
    } catch {}
  })();
const rn = ds;
var Sr = rn && rn.isTypedArray,
  cs = Sr ? Zl(Sr) : ss;
const Jl = cs;
var fs = Object.prototype,
  ps = fs.hasOwnProperty;
function La(e, t) {
  var n = ot(e),
    l = !n && xn(e),
    r = !n && !l && $n(e),
    a = !n && !l && !r && Jl(e),
    o = n || l || r || a,
    i = o ? Ai(e.length, String) : [],
    s = i.length;
  for (var u in e)
    (t || ps.call(e, u)) &&
      !(
        o &&
        (u == 'length' ||
          (r && (u == 'offset' || u == 'parent')) ||
          (a && (u == 'buffer' || u == 'byteLength' || u == 'byteOffset')) ||
          zl(u, s))
      ) &&
      i.push(u);
  return i;
}
function Fa(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var vs = Fa(Object.keys, Object);
const hs = vs;
var gs = Object.prototype,
  ms = gs.hasOwnProperty;
function bs(e) {
  if (!Ql(e)) return hs(e);
  var t = [];
  for (var n in Object(e)) ms.call(e, n) && n != 'constructor' && t.push(n);
  return t;
}
function Rn(e) {
  return fn(e) ? La(e) : bs(e);
}
function ys(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var Cs = Object.prototype,
  ws = Cs.hasOwnProperty;
function Ss(e) {
  if (!Kt(e)) return ys(e);
  var t = Ql(e),
    n = [];
  for (var l in e) (l == 'constructor' && (t || !ws.call(e, l))) || n.push(l);
  return n;
}
function In(e) {
  return fn(e) ? La(e, !0) : Ss(e);
}
function er(e, t) {
  for (var n = -1, l = t.length, r = e.length; ++n < l; ) e[r + n] = t[n];
  return e;
}
var Er = Zt ? Zt.isConcatSpreadable : void 0;
function Es(e) {
  return ot(e) || xn(e) || !!(Er && e && e[Er]);
}
function tr(e, t, n, l, r) {
  var a = -1,
    o = e.length;
  for (n || (n = Es), r || (r = []); ++a < o; ) {
    var i = e[a];
    t > 0 && n(i)
      ? t > 1
        ? tr(i, t - 1, n, l, r)
        : er(r, i)
      : l || (r[r.length] = i);
  }
  return r;
}
function Os(e) {
  var t = e == null ? 0 : e.length;
  return t ? tr(e, 1) : [];
}
function xs(e) {
  return xa($a(e, void 0, Os), e + '');
}
var $s = Fa(Object.getPrototypeOf, Object);
const nr = $s;
var Ts = '[object Object]',
  Ps = Function.prototype,
  As = Object.prototype,
  Ma = Ps.toString,
  Ls = As.hasOwnProperty,
  Fs = Ma.call(Object);
function Ms(e) {
  if (!Ot(e) || An(e) != Ts) return !1;
  var t = nr(e);
  if (t === null) return !0;
  var n = Ls.call(t, 'constructor') && t.constructor;
  return typeof n == 'function' && n instanceof n && Ma.call(n) == Fs;
}
function Rs() {
  (this.__data__ = new Hl()), (this.size = 0);
}
function Is(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
function Ns(e) {
  return this.__data__.get(e);
}
function ks(e) {
  return this.__data__.has(e);
}
var Ws = 200;
function zs(e, t) {
  var n = this.__data__;
  if (n instanceof Hl) {
    var l = n.__data__;
    if (!Gn || l.length < Ws - 1)
      return l.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new da(l);
  }
  return n.set(e, t), (this.size = n.size), this;
}
function at(e) {
  var t = (this.__data__ = new Hl(e));
  this.size = t.size;
}
at.prototype.clear = Rs;
at.prototype.delete = Is;
at.prototype.get = Ns;
at.prototype.has = ks;
at.prototype.set = zs;
function Bs(e, t) {
  return e && Mn(t, Rn(t), e);
}
function Hs(e, t) {
  return e && Mn(t, In(t), e);
}
var Ra = typeof exports == 'object' && exports && !exports.nodeType && exports,
  Or = Ra && typeof module == 'object' && module && !module.nodeType && module,
  Ds = Or && Or.exports === Ra,
  xr = Ds ? jt.Buffer : void 0,
  $r = xr ? xr.allocUnsafe : void 0;
function Ia(e, t) {
  if (t) return e.slice();
  var n = e.length,
    l = $r ? $r(n) : new e.constructor(n);
  return e.copy(l), l;
}
function qs(e, t) {
  for (var n = -1, l = e == null ? 0 : e.length, r = 0, a = []; ++n < l; ) {
    var o = e[n];
    t(o, n, e) && (a[r++] = o);
  }
  return a;
}
function Na() {
  return [];
}
var Vs = Object.prototype,
  js = Vs.propertyIsEnumerable,
  Tr = Object.getOwnPropertySymbols,
  Ks = Tr
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            qs(Tr(e), function (t) {
              return js.call(e, t);
            }));
      }
    : Na;
const lr = Ks;
function _s(e, t) {
  return Mn(e, lr(e), t);
}
var Us = Object.getOwnPropertySymbols,
  Gs = Us
    ? function (e) {
        for (var t = []; e; ) er(t, lr(e)), (e = nr(e));
        return t;
      }
    : Na;
const ka = Gs;
function Ys(e, t) {
  return Mn(e, ka(e), t);
}
function Wa(e, t, n) {
  var l = t(e);
  return ot(e) ? l : er(l, n(e));
}
function ml(e) {
  return Wa(e, Rn, lr);
}
function Xs(e) {
  return Wa(e, In, ka);
}
var Qs = Jn(jt, 'DataView');
const bl = Qs;
var Zs = Jn(jt, 'Promise');
const yl = Zs;
var Js = Jn(jt, 'Set');
const Cl = Js;
var Pr = '[object Map]',
  eu = '[object Object]',
  Ar = '[object Promise]',
  Lr = '[object Set]',
  Fr = '[object WeakMap]',
  Mr = '[object DataView]',
  tu = sn(bl),
  nu = sn(Gn),
  lu = sn(yl),
  ru = sn(Cl),
  au = sn(gl),
  kt = An;
((bl && kt(new bl(new ArrayBuffer(1))) != Mr) ||
  (Gn && kt(new Gn()) != Pr) ||
  (yl && kt(yl.resolve()) != Ar) ||
  (Cl && kt(new Cl()) != Lr) ||
  (gl && kt(new gl()) != Fr)) &&
  (kt = function (e) {
    var t = An(e),
      n = t == eu ? e.constructor : void 0,
      l = n ? sn(n) : '';
    if (l)
      switch (l) {
        case tu:
          return Mr;
        case nu:
          return Pr;
        case lu:
          return Ar;
        case ru:
          return Lr;
        case au:
          return Fr;
      }
    return t;
  });
const Tn = kt;
var ou = Object.prototype,
  iu = ou.hasOwnProperty;
function su(e) {
  var t = e.length,
    n = new e.constructor(t);
  return (
    t &&
      typeof e[0] == 'string' &&
      iu.call(e, 'index') &&
      ((n.index = e.index), (n.input = e.input)),
    n
  );
}
var uu = jt.Uint8Array;
const Xn = uu;
function rr(e) {
  var t = new e.constructor(e.byteLength);
  return new Xn(t).set(new Xn(e)), t;
}
function du(e, t) {
  var n = t ? rr(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var cu = /\w*$/;
function fu(e) {
  var t = new e.constructor(e.source, cu.exec(e));
  return (t.lastIndex = e.lastIndex), t;
}
var Rr = Zt ? Zt.prototype : void 0,
  Ir = Rr ? Rr.valueOf : void 0;
function pu(e) {
  return Ir ? Object(Ir.call(e)) : {};
}
function za(e, t) {
  var n = t ? rr(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var vu = '[object Boolean]',
  hu = '[object Date]',
  gu = '[object Map]',
  mu = '[object Number]',
  bu = '[object RegExp]',
  yu = '[object Set]',
  Cu = '[object String]',
  wu = '[object Symbol]',
  Su = '[object ArrayBuffer]',
  Eu = '[object DataView]',
  Ou = '[object Float32Array]',
  xu = '[object Float64Array]',
  $u = '[object Int8Array]',
  Tu = '[object Int16Array]',
  Pu = '[object Int32Array]',
  Au = '[object Uint8Array]',
  Lu = '[object Uint8ClampedArray]',
  Fu = '[object Uint16Array]',
  Mu = '[object Uint32Array]';
function Ru(e, t, n) {
  var l = e.constructor;
  switch (t) {
    case Su:
      return rr(e);
    case vu:
    case hu:
      return new l(+e);
    case Eu:
      return du(e, n);
    case Ou:
    case xu:
    case $u:
    case Tu:
    case Pu:
    case Au:
    case Lu:
    case Fu:
    case Mu:
      return za(e, n);
    case gu:
      return new l();
    case mu:
    case Cu:
      return new l(e);
    case bu:
      return fu(e);
    case yu:
      return new l();
    case wu:
      return pu(e);
  }
}
function Ba(e) {
  return typeof e.constructor == 'function' && !Ql(e) ? fi(nr(e)) : {};
}
var Iu = '[object Map]';
function Nu(e) {
  return Ot(e) && Tn(e) == Iu;
}
var Nr = rn && rn.isMap,
  ku = Nr ? Zl(Nr) : Nu;
const Wu = ku;
var zu = '[object Set]';
function Bu(e) {
  return Ot(e) && Tn(e) == zu;
}
var kr = rn && rn.isSet,
  Hu = kr ? Zl(kr) : Bu;
const Du = Hu;
var qu = 1,
  Vu = 2,
  ju = 4,
  Ha = '[object Arguments]',
  Ku = '[object Array]',
  _u = '[object Boolean]',
  Uu = '[object Date]',
  Gu = '[object Error]',
  Da = '[object Function]',
  Yu = '[object GeneratorFunction]',
  Xu = '[object Map]',
  Qu = '[object Number]',
  qa = '[object Object]',
  Zu = '[object RegExp]',
  Ju = '[object Set]',
  ed = '[object String]',
  td = '[object Symbol]',
  nd = '[object WeakMap]',
  ld = '[object ArrayBuffer]',
  rd = '[object DataView]',
  ad = '[object Float32Array]',
  od = '[object Float64Array]',
  id = '[object Int8Array]',
  sd = '[object Int16Array]',
  ud = '[object Int32Array]',
  dd = '[object Uint8Array]',
  cd = '[object Uint8ClampedArray]',
  fd = '[object Uint16Array]',
  pd = '[object Uint32Array]',
  be = {};
be[Ha] =
  be[Ku] =
  be[ld] =
  be[rd] =
  be[_u] =
  be[Uu] =
  be[ad] =
  be[od] =
  be[id] =
  be[sd] =
  be[ud] =
  be[Xu] =
  be[Qu] =
  be[qa] =
  be[Zu] =
  be[Ju] =
  be[ed] =
  be[td] =
  be[dd] =
  be[cd] =
  be[fd] =
  be[pd] =
    !0;
be[Gu] = be[Da] = be[nd] = !1;
function qn(e, t, n, l, r, a) {
  var o,
    i = t & qu,
    s = t & Vu,
    u = t & ju;
  if ((n && (o = r ? n(e, l, r, a) : n(e)), o !== void 0)) return o;
  if (!Kt(e)) return e;
  var d = ot(e);
  if (d) {
    if (((o = su(e)), !i)) return Oa(e, o);
  } else {
    var f = Tn(e),
      m = f == Da || f == Yu;
    if ($n(e)) return Ia(e, i);
    if (f == qa || f == Ha || (m && !r)) {
      if (((o = s || m ? {} : Ba(e)), !i))
        return s ? Ys(e, Hs(o, e)) : _s(e, Bs(o, e));
    } else {
      if (!be[f]) return r ? e : {};
      o = Ru(e, f, i);
    }
  }
  a || (a = new at());
  var C = a.get(e);
  if (C) return C;
  a.set(e, o),
    Du(e)
      ? e.forEach(function (g) {
          o.add(qn(g, t, n, g, e, a));
        })
      : Wu(e) &&
        e.forEach(function (g, b) {
          o.set(b, qn(g, t, n, b, e, a));
        });
  var h = u ? (s ? Xs : ml) : s ? In : Rn,
    c = d ? void 0 : h(e);
  return (
    Si(c || e, function (g, b) {
      c && ((b = g), (g = e[b])), sa(o, b, qn(g, t, n, b, e, a));
    }),
    o
  );
}
var vd = 4;
function Wr(e) {
  return qn(e, vd);
}
var hd = '__lodash_hash_undefined__';
function gd(e) {
  return this.__data__.set(e, hd), this;
}
function md(e) {
  return this.__data__.has(e);
}
function Qn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new da(); ++t < n; ) this.add(e[t]);
}
Qn.prototype.add = Qn.prototype.push = gd;
Qn.prototype.has = md;
function bd(e, t) {
  for (var n = -1, l = e == null ? 0 : e.length; ++n < l; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
function yd(e, t) {
  return e.has(t);
}
var Cd = 1,
  wd = 2;
function Va(e, t, n, l, r, a) {
  var o = n & Cd,
    i = e.length,
    s = t.length;
  if (i != s && !(o && s > i)) return !1;
  var u = a.get(e),
    d = a.get(t);
  if (u && d) return u == t && d == e;
  var f = -1,
    m = !0,
    C = n & wd ? new Qn() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < i; ) {
    var h = e[f],
      c = t[f];
    if (l) var g = o ? l(c, h, f, t, e, a) : l(h, c, f, e, t, a);
    if (g !== void 0) {
      if (g) continue;
      m = !1;
      break;
    }
    if (C) {
      if (
        !bd(t, function (b, y) {
          if (!yd(C, y) && (h === b || r(h, b, n, l, a))) return C.push(y);
        })
      ) {
        m = !1;
        break;
      }
    } else if (!(h === c || r(h, c, n, l, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
function Sd(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (l, r) {
      n[++t] = [r, l];
    }),
    n
  );
}
function Ed(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (l) {
      n[++t] = l;
    }),
    n
  );
}
var Od = 1,
  xd = 2,
  $d = '[object Boolean]',
  Td = '[object Date]',
  Pd = '[object Error]',
  Ad = '[object Map]',
  Ld = '[object Number]',
  Fd = '[object RegExp]',
  Md = '[object Set]',
  Rd = '[object String]',
  Id = '[object Symbol]',
  Nd = '[object ArrayBuffer]',
  kd = '[object DataView]',
  zr = Zt ? Zt.prototype : void 0,
  sl = zr ? zr.valueOf : void 0;
function Wd(e, t, n, l, r, a, o) {
  switch (n) {
    case kd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case Nd:
      return !(e.byteLength != t.byteLength || !a(new Xn(e), new Xn(t)));
    case $d:
    case Td:
    case Ld:
      return Bl(+e, +t);
    case Pd:
      return e.name == t.name && e.message == t.message;
    case Fd:
    case Rd:
      return e == t + '';
    case Ad:
      var i = Sd;
    case Md:
      var s = l & Od;
      if ((i || (i = Ed), e.size != t.size && !s)) return !1;
      var u = o.get(e);
      if (u) return u == t;
      (l |= xd), o.set(e, t);
      var d = Va(i(e), i(t), l, r, a, o);
      return o.delete(e), d;
    case Id:
      if (sl) return sl.call(e) == sl.call(t);
  }
  return !1;
}
var zd = 1,
  Bd = Object.prototype,
  Hd = Bd.hasOwnProperty;
function Dd(e, t, n, l, r, a) {
  var o = n & zd,
    i = ml(e),
    s = i.length,
    u = ml(t),
    d = u.length;
  if (s != d && !o) return !1;
  for (var f = s; f--; ) {
    var m = i[f];
    if (!(o ? m in t : Hd.call(t, m))) return !1;
  }
  var C = a.get(e),
    h = a.get(t);
  if (C && h) return C == t && h == e;
  var c = !0;
  a.set(e, t), a.set(t, e);
  for (var g = o; ++f < s; ) {
    m = i[f];
    var b = e[m],
      y = t[m];
    if (l) var w = o ? l(y, b, m, t, e, a) : l(b, y, m, e, t, a);
    if (!(w === void 0 ? b === y || r(b, y, n, l, a) : w)) {
      c = !1;
      break;
    }
    g || (g = m == 'constructor');
  }
  if (c && !g) {
    var p = e.constructor,
      S = t.constructor;
    p != S &&
      'constructor' in e &&
      'constructor' in t &&
      !(
        typeof p == 'function' &&
        p instanceof p &&
        typeof S == 'function' &&
        S instanceof S
      ) &&
      (c = !1);
  }
  return a.delete(e), a.delete(t), c;
}
var qd = 1,
  Br = '[object Arguments]',
  Hr = '[object Array]',
  kn = '[object Object]',
  Vd = Object.prototype,
  Dr = Vd.hasOwnProperty;
function jd(e, t, n, l, r, a) {
  var o = ot(e),
    i = ot(t),
    s = o ? Hr : Tn(e),
    u = i ? Hr : Tn(t);
  (s = s == Br ? kn : s), (u = u == Br ? kn : u);
  var d = s == kn,
    f = u == kn,
    m = s == u;
  if (m && $n(e)) {
    if (!$n(t)) return !1;
    (o = !0), (d = !1);
  }
  if (m && !d)
    return (
      a || (a = new at()),
      o || Jl(e) ? Va(e, t, n, l, r, a) : Wd(e, t, s, n, l, r, a)
    );
  if (!(n & qd)) {
    var C = d && Dr.call(e, '__wrapped__'),
      h = f && Dr.call(t, '__wrapped__');
    if (C || h) {
      var c = C ? e.value() : e,
        g = h ? t.value() : t;
      return a || (a = new at()), r(c, g, n, l, a);
    }
  }
  return m ? (a || (a = new at()), Dd(e, t, n, l, r, a)) : !1;
}
function ll(e, t, n, l, r) {
  return e === t
    ? !0
    : e == null || t == null || (!Ot(e) && !Ot(t))
    ? e !== e && t !== t
    : jd(e, t, n, l, ll, r);
}
var Kd = 1,
  _d = 2;
function Ud(e, t, n, l) {
  var r = n.length,
    a = r,
    o = !l;
  if (e == null) return !a;
  for (e = Object(e); r--; ) {
    var i = n[r];
    if (o && i[2] ? i[1] !== e[i[0]] : !(i[0] in e)) return !1;
  }
  for (; ++r < a; ) {
    i = n[r];
    var s = i[0],
      u = e[s],
      d = i[1];
    if (o && i[2]) {
      if (u === void 0 && !(s in e)) return !1;
    } else {
      var f = new at();
      if (l) var m = l(u, d, s, e, t, f);
      if (!(m === void 0 ? ll(d, u, Kd | _d, l, f) : m)) return !1;
    }
  }
  return !0;
}
function ja(e) {
  return e === e && !Kt(e);
}
function Gd(e) {
  for (var t = Rn(e), n = t.length; n--; ) {
    var l = t[n],
      r = e[l];
    t[n] = [l, r, ja(r)];
  }
  return t;
}
function Ka(e, t) {
  return function (n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Yd(e) {
  var t = Gd(e);
  return t.length == 1 && t[0][2]
    ? Ka(t[0][0], t[0][1])
    : function (n) {
        return n === e || Ud(n, e, t);
      };
}
function Xd(e, t) {
  return e != null && t in Object(e);
}
function Qd(e, t, n) {
  t = ca(t, e);
  for (var l = -1, r = t.length, a = !1; ++l < r; ) {
    var o = Dl(t[l]);
    if (!(a = e != null && n(e, o))) break;
    e = e[o];
  }
  return a || ++l != r
    ? a
    : ((r = e == null ? 0 : e.length),
      !!r && Xl(r) && zl(o, r) && (ot(e) || xn(e)));
}
function _a(e, t) {
  return e != null && Qd(e, t, Xd);
}
var Zd = 1,
  Jd = 2;
function ec(e, t) {
  return fa(e) && ja(t)
    ? Ka(Dl(e), t)
    : function (n) {
        var l = Ke(n, e);
        return l === void 0 && l === t ? _a(n, e) : ll(t, l, Zd | Jd);
      };
}
function tc(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
function nc(e) {
  return function (t) {
    return pa(t, e);
  };
}
function lc(e) {
  return fa(e) ? tc(Dl(e)) : nc(e);
}
function Ua(e) {
  return typeof e == 'function'
    ? e
    : e == null
    ? Yl
    : typeof e == 'object'
    ? ot(e)
      ? ec(e[0], e[1])
      : Yd(e)
    : lc(e);
}
function rc(e) {
  return function (t, n, l) {
    for (var r = -1, a = Object(t), o = l(t), i = o.length; i--; ) {
      var s = o[e ? i : ++r];
      if (n(a[s], s, a) === !1) break;
    }
    return t;
  };
}
var ac = rc();
const Ga = ac;
function oc(e, t) {
  return e && Ga(e, t, Rn);
}
function ic(e, t) {
  return function (n, l) {
    if (n == null) return n;
    if (!fn(n)) return e(n, l);
    for (
      var r = n.length, a = t ? r : -1, o = Object(n);
      (t ? a-- : ++a < r) && l(o[a], a, o) !== !1;

    );
    return n;
  };
}
var sc = ic(oc);
const uc = sc;
function wl(e, t, n) {
  ((n !== void 0 && !Bl(e[t], n)) || (n === void 0 && !(t in e))) &&
    ia(e, t, n);
}
function dc(e) {
  return Ot(e) && fn(e);
}
function Sl(e, t) {
  if (!(t === 'constructor' && typeof e[t] == 'function') && t != '__proto__')
    return e[t];
}
function cc(e) {
  return Mn(e, In(e));
}
function fc(e, t, n, l, r, a, o) {
  var i = Sl(e, n),
    s = Sl(t, n),
    u = o.get(s);
  if (u) {
    wl(e, n, u);
    return;
  }
  var d = a ? a(i, s, n + '', e, t, o) : void 0,
    f = d === void 0;
  if (f) {
    var m = ot(s),
      C = !m && $n(s),
      h = !m && !C && Jl(s);
    (d = s),
      m || C || h
        ? ot(i)
          ? (d = i)
          : dc(i)
          ? (d = Oa(i))
          : C
          ? ((f = !1), (d = Ia(s, !0)))
          : h
          ? ((f = !1), (d = za(s, !0)))
          : (d = [])
        : Ms(s) || xn(s)
        ? ((d = i), xn(i) ? (d = cc(i)) : (!Kt(i) || ua(i)) && (d = Ba(s)))
        : (f = !1);
  }
  f && (o.set(s, d), r(d, s, l, a, o), o.delete(s)), wl(e, n, d);
}
function Ya(e, t, n, l, r) {
  e !== t &&
    Ga(
      t,
      function (a, o) {
        if ((r || (r = new at()), Kt(a))) fc(e, t, o, n, Ya, l, r);
        else {
          var i = l ? l(Sl(e, o), a, o + '', e, t, r) : void 0;
          i === void 0 && (i = a), wl(e, o, i);
        }
      },
      In,
    );
}
var pc = Math.max,
  vc = Math.min;
function hc(e, t, n) {
  var l = e == null ? 0 : e.length;
  if (!l) return -1;
  var r = l - 1;
  return (
    n !== void 0 && ((r = ui(n)), (r = n < 0 ? pc(l + r, 0) : vc(r, l - 1))),
    Ei(e, Ua(t), r, !0)
  );
}
function gc(e, t) {
  var n = -1,
    l = fn(e) ? Array(e.length) : [];
  return (
    uc(e, function (r, a, o) {
      l[++n] = t(r, a, o);
    }),
    l
  );
}
function mc(e, t) {
  var n = ot(e) ? Lo : gc;
  return n(e, Ua(t));
}
function bc(e, t) {
  return tr(mc(e, t), 1);
}
function Zn(e, t) {
  return ll(e, t);
}
var yc = Ti(function (e, t, n) {
  Ya(e, t, n);
});
const Xa = yc;
function Cc(e, t, n) {
  for (var l = -1, r = t.length, a = {}; ++l < r; ) {
    var o = t[l],
      i = pa(e, o);
    n(i, o) && Fo(a, ca(o, e), i);
  }
  return a;
}
function wc(e, t) {
  return Cc(e, t, function (n, l) {
    return _a(e, l);
  });
}
var Sc = xs(function (e, t) {
  return e == null ? {} : wc(e, t);
});
const Ec = Sc,
  Oc = (e = '') =>
    e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d'),
  Ve = 'update:modelValue',
  Qa = 'change',
  xc = (e) => Mo[e || 'default'],
  $c = (e) => ['', ...un].includes(e),
  Za = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),
  Tc = (e) => (pt ? window.requestAnimationFrame(e) : setTimeout(e, 16)),
  Pc = ['class', 'style'],
  Ac = /^on[A-Z]/,
  Lc = (e = {}) => {
    const { excludeListeners: t = !1, excludeKeys: n } = e,
      l = x(() => ((n == null ? void 0 : n.value) || []).concat(Pc)),
      r = Pe();
    return r
      ? x(() => {
          var a;
          return Ro(
            Object.entries((a = r.proxy) == null ? void 0 : a.$attrs).filter(
              ([o]) => !l.value.includes(o) && !(t && Ac.test(o)),
            ),
          );
        })
      : x(() => ({}));
  };
function Fc(e) {
  const t = P();
  function n() {
    if (e.value == null) return;
    const { selectionStart: r, selectionEnd: a, value: o } = e.value;
    if (r == null || a == null) return;
    const i = o.slice(0, Math.max(0, r)),
      s = o.slice(Math.max(0, a));
    t.value = {
      selectionStart: r,
      selectionEnd: a,
      value: o,
      beforeTxt: i,
      afterTxt: s,
    };
  }
  function l() {
    if (e.value == null || t.value == null) return;
    const { value: r } = e.value,
      { beforeTxt: a, afterTxt: o, selectionStart: i } = t.value;
    if (a == null || o == null || i == null) return;
    let s = r.length;
    if (r.endsWith(o)) s = r.length - o.length;
    else if (r.startsWith(a)) s = a.length;
    else {
      const u = a[i - 1],
        d = r.indexOf(u, i - 1);
      d !== -1 && (s = d + 1);
    }
    e.value.setSelectionRange(s, s);
  }
  return [n, l];
}
function Mc(e, { afterFocus: t, afterBlur: n } = {}) {
  const l = Pe(),
    { emit: r } = l,
    a = Xt(),
    o = P(!1),
    i = (d) => {
      o.value || ((o.value = !0), r('focus', d), t == null || t());
    },
    s = (d) => {
      var f;
      (d.relatedTarget &&
        (f = a.value) != null &&
        f.contains(d.relatedTarget)) ||
        ((o.value = !1), r('blur', d), n == null || n());
    },
    u = () => {
      var d;
      (d = e.value) == null || d.focus();
    };
  return (
    se(a, (d) => {
      d && d.setAttribute('tabindex', '-1');
    }),
    cl(a, 'click', u),
    { wrapperRef: a, isFocused: o, handleFocus: i, handleBlur: s }
  );
}
const Rc = Qe({ size: { type: String, values: un }, disabled: Boolean }),
  Ic = Qe({
    ...Rc,
    model: Object,
    rules: { type: Et(Object) },
    labelPosition: {
      type: String,
      values: ['left', 'right', 'top'],
      default: 'right',
    },
    requireAsteriskPosition: {
      type: String,
      values: ['left', 'right'],
      default: 'left',
    },
    labelWidth: { type: [String, Number], default: '' },
    labelSuffix: { type: String, default: '' },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: { type: Boolean, default: !0 },
    validateOnRuleChange: { type: Boolean, default: !0 },
    hideRequiredAsterisk: Boolean,
    scrollToError: Boolean,
    scrollIntoViewOptions: { type: [Object, Boolean] },
  }),
  Nc = { validate: (e, t, n) => (Dt(e) || rt(e)) && Jt(t) && rt(n) };
function kc() {
  const e = P([]),
    t = x(() => {
      if (!e.value.length) return '0';
      const a = Math.max(...e.value);
      return a ? `${a}px` : '';
    });
  function n(a) {
    const o = e.value.indexOf(a);
    return o === -1 && t.value, o;
  }
  function l(a, o) {
    if (a && o) {
      const i = n(o);
      e.value.splice(i, 1, a);
    } else a && e.value.push(a);
  }
  function r(a) {
    const o = n(a);
    o > -1 && e.value.splice(o, 1);
  }
  return { autoLabelWidth: t, registerLabelWidth: l, deregisterLabelWidth: r };
}
const Wn = (e, t) => {
    const n = fl(t);
    return n.length > 0 ? e.filter((l) => l.prop && n.includes(l.prop)) : e;
  },
  Wc = 'ElForm',
  zc = ae({ name: Wc }),
  Bc = ae({
    ...zc,
    props: Ic,
    emits: Nc,
    setup(e, { expose: t, emit: n }) {
      const l = e,
        r = [],
        a = Pt(),
        o = ce('form'),
        i = x(() => {
          const { labelPosition: y, inline: w } = l;
          return [
            o.b(),
            o.m(a.value || 'default'),
            { [o.m(`label-${y}`)]: y, [o.m('inline')]: w },
          ];
        }),
        s = (y) => {
          r.push(y);
        },
        u = (y) => {
          y.prop && r.splice(r.indexOf(y), 1);
        },
        d = (y = []) => {
          l.model && Wn(r, y).forEach((w) => w.resetField());
        },
        f = (y = []) => {
          Wn(r, y).forEach((w) => w.clearValidate());
        },
        m = x(() => !!l.model),
        C = (y) => {
          if (r.length === 0) return [];
          const w = Wn(r, y);
          return w.length ? w : [];
        },
        h = async (y) => g(void 0, y),
        c = async (y = []) => {
          if (!m.value) return !1;
          const w = C(y);
          if (w.length === 0) return !0;
          let p = {};
          for (const S of w)
            try {
              await S.validate('');
            } catch (O) {
              p = { ...p, ...O };
            }
          return Object.keys(p).length === 0 ? !0 : Promise.reject(p);
        },
        g = async (y = [], w) => {
          const p = !St(w);
          try {
            const S = await c(y);
            return S === !0 && (w == null || w(S)), S;
          } catch (S) {
            if (S instanceof Error) throw S;
            const O = S;
            return (
              l.scrollToError && b(Object.keys(O)[0]),
              w == null || w(!1, O),
              p && Promise.reject(O)
            );
          }
        },
        b = (y) => {
          var w;
          const p = Wn(r, y)[0];
          p &&
            ((w = p.$el) == null || w.scrollIntoView(l.scrollIntoViewOptions));
        };
      return (
        se(
          () => l.rules,
          () => {
            l.validateOnRuleChange && h().catch((y) => qt());
          },
          { deep: !0 },
        ),
        _t(
          ql,
          dn({
            ...Ut(l),
            emit: n,
            resetFields: d,
            clearValidate: f,
            validateField: g,
            addField: s,
            removeField: u,
            ...kc(),
          }),
        ),
        t({
          validate: h,
          validateField: g,
          resetFields: d,
          clearValidate: f,
          scrollToField: b,
        }),
        (y, w) => (
          A(), H('form', { class: M(v(i)) }, [Te(y.$slots, 'default')], 2)
        )
      );
    },
  });
var Hc = Re(Bc, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue',
  ],
]);
function zt() {
  return (
    (zt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
          }
          return e;
        }),
    zt.apply(this, arguments)
  );
}
function Dc(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Pn(e, t);
}
function El(e) {
  return (
    (El = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    El(e)
  );
}
function Pn(e, t) {
  return (
    (Pn = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (l, r) {
          return (l.__proto__ = r), l;
        }),
    Pn(e, t)
  );
}
function qc() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Vn(e, t, n) {
  return (
    qc()
      ? (Vn = Reflect.construct.bind())
      : (Vn = function (r, a, o) {
          var i = [null];
          i.push.apply(i, a);
          var s = Function.bind.apply(r, i),
            u = new s();
          return o && Pn(u, o.prototype), u;
        }),
    Vn.apply(null, arguments)
  );
}
function Vc(e) {
  return Function.toString.call(e).indexOf('[native code]') !== -1;
}
function Ol(e) {
  var t = typeof Map == 'function' ? new Map() : void 0;
  return (
    (Ol = function (l) {
      if (l === null || !Vc(l)) return l;
      if (typeof l != 'function')
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      if (typeof t < 'u') {
        if (t.has(l)) return t.get(l);
        t.set(l, r);
      }
      function r() {
        return Vn(l, arguments, El(this).constructor);
      }
      return (
        (r.prototype = Object.create(l.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Pn(r, l)
      );
    }),
    Ol(e)
  );
}
var jc = /%[sdj%]/g,
  Kc = function () {};
typeof process < 'u' && process.env;
function xl(e) {
  if (!e || !e.length) return null;
  var t = {};
  return (
    e.forEach(function (n) {
      var l = n.field;
      (t[l] = t[l] || []), t[l].push(n);
    }),
    t
  );
}
function Xe(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1;
    l < t;
    l++
  )
    n[l - 1] = arguments[l];
  var r = 0,
    a = n.length;
  if (typeof e == 'function') return e.apply(null, n);
  if (typeof e == 'string') {
    var o = e.replace(jc, function (i) {
      if (i === '%%') return '%';
      if (r >= a) return i;
      switch (i) {
        case '%s':
          return String(n[r++]);
        case '%d':
          return Number(n[r++]);
        case '%j':
          try {
            return JSON.stringify(n[r++]);
          } catch {
            return '[Circular]';
          }
          break;
        default:
          return i;
      }
    });
    return o;
  }
  return e;
}
function _c(e) {
  return (
    e === 'string' ||
    e === 'url' ||
    e === 'hex' ||
    e === 'email' ||
    e === 'date' ||
    e === 'pattern'
  );
}
function Me(e, t) {
  return !!(
    e == null ||
    (t === 'array' && Array.isArray(e) && !e.length) ||
    (_c(t) && typeof e == 'string' && !e)
  );
}
function Uc(e, t, n) {
  var l = [],
    r = 0,
    a = e.length;
  function o(i) {
    l.push.apply(l, i || []), r++, r === a && n(l);
  }
  e.forEach(function (i) {
    t(i, o);
  });
}
function qr(e, t, n) {
  var l = 0,
    r = e.length;
  function a(o) {
    if (o && o.length) {
      n(o);
      return;
    }
    var i = l;
    (l = l + 1), i < r ? t(e[i], a) : n([]);
  }
  a([]);
}
function Gc(e) {
  var t = [];
  return (
    Object.keys(e).forEach(function (n) {
      t.push.apply(t, e[n] || []);
    }),
    t
  );
}
var Vr = (function (e) {
  Dc(t, e);
  function t(n, l) {
    var r;
    return (
      (r = e.call(this, 'Async Validation Error') || this),
      (r.errors = n),
      (r.fields = l),
      r
    );
  }
  return t;
})(Ol(Error));
function Yc(e, t, n, l, r) {
  if (t.first) {
    var a = new Promise(function (m, C) {
      var h = function (b) {
          return l(b), b.length ? C(new Vr(b, xl(b))) : m(r);
        },
        c = Gc(e);
      qr(c, n, h);
    });
    return (
      a.catch(function (m) {
        return m;
      }),
      a
    );
  }
  var o = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
    i = Object.keys(e),
    s = i.length,
    u = 0,
    d = [],
    f = new Promise(function (m, C) {
      var h = function (g) {
        if ((d.push.apply(d, g), u++, u === s))
          return l(d), d.length ? C(new Vr(d, xl(d))) : m(r);
      };
      i.length || (l(d), m(r)),
        i.forEach(function (c) {
          var g = e[c];
          o.indexOf(c) !== -1 ? qr(g, n, h) : Uc(g, n, h);
        });
    });
  return (
    f.catch(function (m) {
      return m;
    }),
    f
  );
}
function Xc(e) {
  return !!(e && e.message !== void 0);
}
function Qc(e, t) {
  for (var n = e, l = 0; l < t.length; l++) {
    if (n == null) return n;
    n = n[t[l]];
  }
  return n;
}
function jr(e, t) {
  return function (n) {
    var l;
    return (
      e.fullFields
        ? (l = Qc(t, e.fullFields))
        : (l = t[n.field || e.fullField]),
      Xc(n)
        ? ((n.field = n.field || e.fullField), (n.fieldValue = l), n)
        : {
            message: typeof n == 'function' ? n() : n,
            fieldValue: l,
            field: n.field || e.fullField,
          }
    );
  };
}
function Kr(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var l = t[n];
        typeof l == 'object' && typeof e[n] == 'object'
          ? (e[n] = zt({}, e[n], l))
          : (e[n] = l);
      }
  }
  return e;
}
var Ja = function (t, n, l, r, a, o) {
    t.required &&
      (!l.hasOwnProperty(t.field) || Me(n, o || t.type)) &&
      r.push(Xe(a.messages.required, t.fullField));
  },
  Zc = function (t, n, l, r, a) {
    (/^\s+$/.test(n) || n === '') &&
      r.push(Xe(a.messages.whitespace, t.fullField));
  },
  zn,
  Jc = function () {
    if (zn) return zn;
    var e = '[a-fA-F\\d:]',
      t = function (p) {
        return p && p.includeBoundaries
          ? '(?:(?<=\\s|^)(?=' + e + ')|(?<=' + e + ')(?=\\s|$))'
          : '';
      },
      n =
        '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
      l = '[a-fA-F\\d]{1,4}',
      r = (
        `
(?:
(?:` +
        l +
        ':){7}(?:' +
        l +
        `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` +
        l +
        ':){6}(?:' +
        n +
        '|:' +
        l +
        `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` +
        l +
        ':){5}(?::' +
        n +
        '|(?::' +
        l +
        `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` +
        l +
        ':){4}(?:(?::' +
        l +
        '){0,1}:' +
        n +
        '|(?::' +
        l +
        `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` +
        l +
        ':){3}(?:(?::' +
        l +
        '){0,2}:' +
        n +
        '|(?::' +
        l +
        `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` +
        l +
        ':){2}(?:(?::' +
        l +
        '){0,3}:' +
        n +
        '|(?::' +
        l +
        `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` +
        l +
        ':){1}(?:(?::' +
        l +
        '){0,4}:' +
        n +
        '|(?::' +
        l +
        `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` +
        l +
        '){0,5}:' +
        n +
        '|(?::' +
        l +
        `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
      )
        .replace(/\s*\/\/.*$/gm, '')
        .replace(/\n/g, '')
        .trim(),
      a = new RegExp('(?:^' + n + '$)|(?:^' + r + '$)'),
      o = new RegExp('^' + n + '$'),
      i = new RegExp('^' + r + '$'),
      s = function (p) {
        return p && p.exact
          ? a
          : new RegExp(
              '(?:' + t(p) + n + t(p) + ')|(?:' + t(p) + r + t(p) + ')',
              'g',
            );
      };
    (s.v4 = function (w) {
      return w && w.exact ? o : new RegExp('' + t(w) + n + t(w), 'g');
    }),
      (s.v6 = function (w) {
        return w && w.exact ? i : new RegExp('' + t(w) + r + t(w), 'g');
      });
    var u = '(?:(?:[a-z]+:)?//)',
      d = '(?:\\S+(?::\\S*)?@)?',
      f = s.v4().source,
      m = s.v6().source,
      C = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
      h = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
      c = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
      g = '(?::\\d{2,5})?',
      b = '(?:[/?#][^\\s"]*)?',
      y =
        '(?:' +
        u +
        '|www\\.)' +
        d +
        '(?:localhost|' +
        f +
        '|' +
        m +
        '|' +
        C +
        h +
        c +
        ')' +
        g +
        b;
    return (zn = new RegExp('(?:^' + y + '$)', 'i')), zn;
  },
  _r = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  },
  mn = {
    integer: function (t) {
      return mn.number(t) && parseInt(t, 10) === t;
    },
    float: function (t) {
      return mn.number(t) && !mn.integer(t);
    },
    array: function (t) {
      return Array.isArray(t);
    },
    regexp: function (t) {
      if (t instanceof RegExp) return !0;
      try {
        return !!new RegExp(t);
      } catch {
        return !1;
      }
    },
    date: function (t) {
      return (
        typeof t.getTime == 'function' &&
        typeof t.getMonth == 'function' &&
        typeof t.getYear == 'function' &&
        !isNaN(t.getTime())
      );
    },
    number: function (t) {
      return isNaN(t) ? !1 : typeof t == 'number';
    },
    object: function (t) {
      return typeof t == 'object' && !mn.array(t);
    },
    method: function (t) {
      return typeof t == 'function';
    },
    email: function (t) {
      return typeof t == 'string' && t.length <= 320 && !!t.match(_r.email);
    },
    url: function (t) {
      return typeof t == 'string' && t.length <= 2048 && !!t.match(Jc());
    },
    hex: function (t) {
      return typeof t == 'string' && !!t.match(_r.hex);
    },
  },
  ef = function (t, n, l, r, a) {
    if (t.required && n === void 0) {
      Ja(t, n, l, r, a);
      return;
    }
    var o = [
        'integer',
        'float',
        'array',
        'regexp',
        'object',
        'method',
        'email',
        'number',
        'date',
        'url',
        'hex',
      ],
      i = t.type;
    o.indexOf(i) > -1
      ? mn[i](n) || r.push(Xe(a.messages.types[i], t.fullField, t.type))
      : i &&
        typeof n !== t.type &&
        r.push(Xe(a.messages.types[i], t.fullField, t.type));
  },
  tf = function (t, n, l, r, a) {
    var o = typeof t.len == 'number',
      i = typeof t.min == 'number',
      s = typeof t.max == 'number',
      u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      d = n,
      f = null,
      m = typeof n == 'number',
      C = typeof n == 'string',
      h = Array.isArray(n);
    if ((m ? (f = 'number') : C ? (f = 'string') : h && (f = 'array'), !f))
      return !1;
    h && (d = n.length),
      C && (d = n.replace(u, '_').length),
      o
        ? d !== t.len && r.push(Xe(a.messages[f].len, t.fullField, t.len))
        : i && !s && d < t.min
        ? r.push(Xe(a.messages[f].min, t.fullField, t.min))
        : s && !i && d > t.max
        ? r.push(Xe(a.messages[f].max, t.fullField, t.max))
        : i &&
          s &&
          (d < t.min || d > t.max) &&
          r.push(Xe(a.messages[f].range, t.fullField, t.min, t.max));
  },
  Yt = 'enum',
  nf = function (t, n, l, r, a) {
    (t[Yt] = Array.isArray(t[Yt]) ? t[Yt] : []),
      t[Yt].indexOf(n) === -1 &&
        r.push(Xe(a.messages[Yt], t.fullField, t[Yt].join(', ')));
  },
  lf = function (t, n, l, r, a) {
    if (t.pattern) {
      if (t.pattern instanceof RegExp)
        (t.pattern.lastIndex = 0),
          t.pattern.test(n) ||
            r.push(Xe(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
      else if (typeof t.pattern == 'string') {
        var o = new RegExp(t.pattern);
        o.test(n) ||
          r.push(Xe(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
      }
    }
  },
  oe = {
    required: Ja,
    whitespace: Zc,
    type: ef,
    range: tf,
    enum: nf,
    pattern: lf,
  },
  rf = function (t, n, l, r, a) {
    var o = [],
      i = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (i) {
      if (Me(n, 'string') && !t.required) return l();
      oe.required(t, n, r, o, a, 'string'),
        Me(n, 'string') ||
          (oe.type(t, n, r, o, a),
          oe.range(t, n, r, o, a),
          oe.pattern(t, n, r, o, a),
          t.whitespace === !0 && oe.whitespace(t, n, r, o, a));
    }
    l(o);
  },
  af = function (t, n, l, r, a) {
    var o = [],
      i = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (i) {
      if (Me(n) && !t.required) return l();
      oe.required(t, n, r, o, a), n !== void 0 && oe.type(t, n, r, o, a);
    }
    l(o);
  },
  of = function (t, n, l, r, a) {
    var o = [],
      i = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (i) {
      if ((n === '' && (n = void 0), Me(n) && !t.required)) return l();
      oe.required(t, n, r, o, a),
        n !== void 0 && (oe.type(t, n, r, o, a), oe.range(t, n, r, o, a));
    }
    l(o);
  },
  sf = function (t, n, l, r, a) {
    var o = [],
      i = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (i) {
      if (Me(n) && !t.required) return l();
      oe.required(t, n, r, o, a), n !== void 0 && oe.type(t, n, r, o, a);
    }
    l(o);
  },
  uf = function (t, n, l, r, a) {
    var o = [],
      i = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (i) {
      if (Me(n) && !t.required) return l();
      oe.required(t, n, r, o, a), Me(n) || oe.type(t, n, r, o, a);
    }
    l(o);
  },
  df = function (t, n, l, r, a) {
    var o = [],
      i = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (i) {
      if (Me(n) && !t.required) return l();
      oe.required(t, n, r, o, a),
        n !== void 0 && (oe.type(t, n, r, o, a), oe.range(t, n, r, o, a));
    }
    l(o);
  },
  cf = function (t, n, l, r, a) {
    var o = [],
      i = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (i) {
      if (Me(n) && !t.required) return l();
      oe.required(t, n, r, o, a),
        n !== void 0 && (oe.type(t, n, r, o, a), oe.range(t, n, r, o, a));
    }
    l(o);
  },
  ff = function (t, n, l, r, a) {
    var o = [],
      i = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (i) {
      if (n == null && !t.required) return l();
      oe.required(t, n, r, o, a, 'array'),
        n != null && (oe.type(t, n, r, o, a), oe.range(t, n, r, o, a));
    }
    l(o);
  },
  pf = function (t, n, l, r, a) {
    var o = [],
      i = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (i) {
      if (Me(n) && !t.required) return l();
      oe.required(t, n, r, o, a), n !== void 0 && oe.type(t, n, r, o, a);
    }
    l(o);
  },
  vf = 'enum',
  hf = function (t, n, l, r, a) {
    var o = [],
      i = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (i) {
      if (Me(n) && !t.required) return l();
      oe.required(t, n, r, o, a), n !== void 0 && oe[vf](t, n, r, o, a);
    }
    l(o);
  },
  gf = function (t, n, l, r, a) {
    var o = [],
      i = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (i) {
      if (Me(n, 'string') && !t.required) return l();
      oe.required(t, n, r, o, a), Me(n, 'string') || oe.pattern(t, n, r, o, a);
    }
    l(o);
  },
  mf = function (t, n, l, r, a) {
    var o = [],
      i = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (i) {
      if (Me(n, 'date') && !t.required) return l();
      if ((oe.required(t, n, r, o, a), !Me(n, 'date'))) {
        var s;
        n instanceof Date ? (s = n) : (s = new Date(n)),
          oe.type(t, s, r, o, a),
          s && oe.range(t, s.getTime(), r, o, a);
      }
    }
    l(o);
  },
  bf = function (t, n, l, r, a) {
    var o = [],
      i = Array.isArray(n) ? 'array' : typeof n;
    oe.required(t, n, r, o, a, i), l(o);
  },
  ul = function (t, n, l, r, a) {
    var o = t.type,
      i = [],
      s = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (s) {
      if (Me(n, o) && !t.required) return l();
      oe.required(t, n, r, i, a, o), Me(n, o) || oe.type(t, n, r, i, a);
    }
    l(i);
  },
  yf = function (t, n, l, r, a) {
    var o = [],
      i = t.required || (!t.required && r.hasOwnProperty(t.field));
    if (i) {
      if (Me(n) && !t.required) return l();
      oe.required(t, n, r, o, a);
    }
    l(o);
  },
  yn = {
    string: rf,
    method: af,
    number: of,
    boolean: sf,
    regexp: uf,
    integer: df,
    float: cf,
    array: ff,
    object: pf,
    enum: hf,
    pattern: gf,
    date: mf,
    url: ul,
    hex: ul,
    email: ul,
    required: bf,
    any: yf,
  };
function $l() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid',
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s',
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters',
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s',
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length',
    },
    pattern: { mismatch: '%s value %s does not match pattern %s' },
    clone: function () {
      var t = JSON.parse(JSON.stringify(this));
      return (t.clone = this.clone), t;
    },
  };
}
var Tl = $l(),
  Nn = (function () {
    function e(n) {
      (this.rules = null), (this._messages = Tl), this.define(n);
    }
    var t = e.prototype;
    return (
      (t.define = function (l) {
        var r = this;
        if (!l) throw new Error('Cannot configure a schema with no rules');
        if (typeof l != 'object' || Array.isArray(l))
          throw new Error('Rules must be an object');
        (this.rules = {}),
          Object.keys(l).forEach(function (a) {
            var o = l[a];
            r.rules[a] = Array.isArray(o) ? o : [o];
          });
      }),
      (t.messages = function (l) {
        return l && (this._messages = Kr($l(), l)), this._messages;
      }),
      (t.validate = function (l, r, a) {
        var o = this;
        r === void 0 && (r = {}), a === void 0 && (a = function () {});
        var i = l,
          s = r,
          u = a;
        if (
          (typeof s == 'function' && ((u = s), (s = {})),
          !this.rules || Object.keys(this.rules).length === 0)
        )
          return u && u(null, i), Promise.resolve(i);
        function d(c) {
          var g = [],
            b = {};
          function y(p) {
            if (Array.isArray(p)) {
              var S;
              g = (S = g).concat.apply(S, p);
            } else g.push(p);
          }
          for (var w = 0; w < c.length; w++) y(c[w]);
          g.length ? ((b = xl(g)), u(g, b)) : u(null, i);
        }
        if (s.messages) {
          var f = this.messages();
          f === Tl && (f = $l()), Kr(f, s.messages), (s.messages = f);
        } else s.messages = this.messages();
        var m = {},
          C = s.keys || Object.keys(this.rules);
        C.forEach(function (c) {
          var g = o.rules[c],
            b = i[c];
          g.forEach(function (y) {
            var w = y;
            typeof w.transform == 'function' &&
              (i === l && (i = zt({}, i)), (b = i[c] = w.transform(b))),
              typeof w == 'function' ? (w = { validator: w }) : (w = zt({}, w)),
              (w.validator = o.getValidationMethod(w)),
              w.validator &&
                ((w.field = c),
                (w.fullField = w.fullField || c),
                (w.type = o.getType(w)),
                (m[c] = m[c] || []),
                m[c].push({ rule: w, value: b, source: i, field: c }));
          });
        });
        var h = {};
        return Yc(
          m,
          s,
          function (c, g) {
            var b = c.rule,
              y =
                (b.type === 'object' || b.type === 'array') &&
                (typeof b.fields == 'object' ||
                  typeof b.defaultField == 'object');
            (y = y && (b.required || (!b.required && c.value))),
              (b.field = c.field);
            function w(O, $) {
              return zt({}, $, {
                fullField: b.fullField + '.' + O,
                fullFields: b.fullFields ? [].concat(b.fullFields, [O]) : [O],
              });
            }
            function p(O) {
              O === void 0 && (O = []);
              var $ = Array.isArray(O) ? O : [O];
              !s.suppressWarning &&
                $.length &&
                e.warning('async-validator:', $),
                $.length && b.message !== void 0 && ($ = [].concat(b.message));
              var F = $.map(jr(b, i));
              if (s.first && F.length) return (h[b.field] = 1), g(F);
              if (!y) g(F);
              else {
                if (b.required && !c.value)
                  return (
                    b.message !== void 0
                      ? (F = [].concat(b.message).map(jr(b, i)))
                      : s.error &&
                        (F = [s.error(b, Xe(s.messages.required, b.field))]),
                    g(F)
                  );
                var k = {};
                b.defaultField &&
                  Object.keys(c.value).map(function (I) {
                    k[I] = b.defaultField;
                  }),
                  (k = zt({}, k, c.rule.fields));
                var V = {};
                Object.keys(k).forEach(function (I) {
                  var K = k[I],
                    re = Array.isArray(K) ? K : [K];
                  V[I] = re.map(w.bind(null, I));
                });
                var z = new e(V);
                z.messages(s.messages),
                  c.rule.options &&
                    ((c.rule.options.messages = s.messages),
                    (c.rule.options.error = s.error)),
                  z.validate(c.value, c.rule.options || s, function (I) {
                    var K = [];
                    F && F.length && K.push.apply(K, F),
                      I && I.length && K.push.apply(K, I),
                      g(K.length ? K : null);
                  });
              }
            }
            var S;
            if (b.asyncValidator)
              S = b.asyncValidator(b, c.value, p, c.source, s);
            else if (b.validator) {
              try {
                S = b.validator(b, c.value, p, c.source, s);
              } catch (O) {
                console.error == null || console.error(O),
                  s.suppressValidatorError ||
                    setTimeout(function () {
                      throw O;
                    }, 0),
                  p(O.message);
              }
              S === !0
                ? p()
                : S === !1
                ? p(
                    typeof b.message == 'function'
                      ? b.message(b.fullField || b.field)
                      : b.message || (b.fullField || b.field) + ' fails',
                  )
                : S instanceof Array
                ? p(S)
                : S instanceof Error && p(S.message);
            }
            S &&
              S.then &&
              S.then(
                function () {
                  return p();
                },
                function (O) {
                  return p(O);
                },
              );
          },
          function (c) {
            d(c);
          },
          i,
        );
      }),
      (t.getType = function (l) {
        if (
          (l.type === void 0 &&
            l.pattern instanceof RegExp &&
            (l.type = 'pattern'),
          typeof l.validator != 'function' &&
            l.type &&
            !yn.hasOwnProperty(l.type))
        )
          throw new Error(Xe('Unknown rule type %s', l.type));
        return l.type || 'string';
      }),
      (t.getValidationMethod = function (l) {
        if (typeof l.validator == 'function') return l.validator;
        var r = Object.keys(l),
          a = r.indexOf('message');
        return (
          a !== -1 && r.splice(a, 1),
          r.length === 1 && r[0] === 'required'
            ? yn.required
            : yn[this.getType(l)] || void 0
        );
      }),
      e
    );
  })();
Nn.register = function (t, n) {
  if (typeof n != 'function')
    throw new Error(
      'Cannot register a validator by type, validator is not a function',
    );
  yn[t] = n;
};
Nn.warning = Kc;
Nn.messages = Tl;
Nn.validators = yn;
const Cf = ['', 'error', 'validating', 'success'],
  wf = Qe({
    label: String,
    labelWidth: { type: [String, Number], default: '' },
    prop: { type: Et([String, Array]) },
    required: { type: Boolean, default: void 0 },
    rules: { type: Et([Object, Array]) },
    error: String,
    validateStatus: { type: String, values: Cf },
    for: String,
    inlineMessage: { type: [String, Boolean], default: '' },
    showMessage: { type: Boolean, default: !0 },
    size: { type: String, values: un },
  }),
  Ur = 'ElLabelWrap';
var Sf = ae({
  name: Ur,
  props: { isAutoWidth: Boolean, updateAll: Boolean },
  setup(e, { slots: t }) {
    const n = xe(ql, void 0),
      l = xe(pl);
    l || va(Ur, 'usage: <el-form-item><label-wrap /></el-form-item>');
    const r = ce('form'),
      a = P(),
      o = P(0),
      i = () => {
        var d;
        if ((d = a.value) != null && d.firstElementChild) {
          const f = window.getComputedStyle(a.value.firstElementChild).width;
          return Math.ceil(Number.parseFloat(f));
        } else return 0;
      },
      s = (d = 'update') => {
        ve(() => {
          t.default &&
            e.isAutoWidth &&
            (d === 'update'
              ? (o.value = i())
              : d === 'remove' &&
                (n == null || n.deregisterLabelWidth(o.value)));
        });
      },
      u = () => s('update');
    return (
      it(() => {
        u();
      }),
      el(() => {
        s('remove');
      }),
      ha(() => u()),
      se(o, (d, f) => {
        e.updateAll && (n == null || n.registerLabelWidth(d, f));
      }),
      en(
        x(() => {
          var d, f;
          return (f = (d = a.value) == null ? void 0 : d.firstElementChild) !=
            null
            ? f
            : null;
        }),
        u,
      ),
      () => {
        var d, f;
        if (!t) return null;
        const { isAutoWidth: m } = e;
        if (m) {
          const C = n == null ? void 0 : n.autoLabelWidth,
            h = l == null ? void 0 : l.hasLabel,
            c = {};
          if (h && C && C !== 'auto') {
            const g = Math.max(0, Number.parseInt(C, 10) - o.value),
              b = n.labelPosition === 'left' ? 'marginRight' : 'marginLeft';
            g && (c[b] = `${g}px`);
          }
          return Oe(
            'div',
            { ref: a, class: [r.be('item', 'label-wrap')], style: c },
            [(d = t.default) == null ? void 0 : d.call(t)],
          );
        } else
          return Oe(_e, { ref: a }, [
            (f = t.default) == null ? void 0 : f.call(t),
          ]);
      }
    );
  },
});
const Ef = ['role', 'aria-labelledby'],
  Of = ae({ name: 'ElFormItem' }),
  xf = ae({
    ...Of,
    props: wf,
    setup(e, { expose: t }) {
      const n = e,
        l = tl(),
        r = xe(ql, void 0),
        a = xe(pl, void 0),
        o = Pt(void 0, { formItem: !1 }),
        i = ce('form-item'),
        s = Io().value,
        u = P([]),
        d = P(''),
        f = No(d, 100),
        m = P(''),
        C = P();
      let h,
        c = !1;
      const g = x(() => {
          if ((r == null ? void 0 : r.labelPosition) === 'top') return {};
          const B = fr(
            n.labelWidth || (r == null ? void 0 : r.labelWidth) || '',
          );
          return B ? { width: B } : {};
        }),
        b = x(() => {
          if (
            (r == null ? void 0 : r.labelPosition) === 'top' ||
            (r != null && r.inline)
          )
            return {};
          if (!n.label && !n.labelWidth && k) return {};
          const B = fr(
            n.labelWidth || (r == null ? void 0 : r.labelWidth) || '',
          );
          return !n.label && !l.label ? { marginLeft: B } : {};
        }),
        y = x(() => [
          i.b(),
          i.m(o.value),
          i.is('error', d.value === 'error'),
          i.is('validating', d.value === 'validating'),
          i.is('success', d.value === 'success'),
          i.is('required', re.value || n.required),
          i.is('no-asterisk', r == null ? void 0 : r.hideRequiredAsterisk),
          (r == null ? void 0 : r.requireAsteriskPosition) === 'right'
            ? 'asterisk-right'
            : 'asterisk-left',
          { [i.m('feedback')]: r == null ? void 0 : r.statusIcon },
        ]),
        w = x(() =>
          Jt(n.inlineMessage)
            ? n.inlineMessage
            : (r == null ? void 0 : r.inlineMessage) || !1,
        ),
        p = x(() => [i.e('error'), { [i.em('error', 'inline')]: w.value }]),
        S = x(() => (n.prop ? (rt(n.prop) ? n.prop : n.prop.join('.')) : '')),
        O = x(() => !!(n.label || l.label)),
        $ = x(() => (n.for || u.value.length === 1 ? u.value[0] : void 0)),
        F = x(() => !$.value && O.value),
        k = !!a,
        V = x(() => {
          const B = r == null ? void 0 : r.model;
          if (!(!B || !n.prop)) return Hn(B, n.prop).value;
        }),
        z = x(() => {
          const { required: B } = n,
            q = [];
          n.rules && q.push(...fl(n.rules));
          const ie = r == null ? void 0 : r.rules;
          if (ie && n.prop) {
            const J = Hn(ie, n.prop).value;
            J && q.push(...fl(J));
          }
          if (B !== void 0) {
            const J = q
              .map((we, Ne) => [we, Ne])
              .filter(([we]) => Object.keys(we).includes('required'));
            if (J.length > 0)
              for (const [we, Ne] of J)
                we.required !== B && (q[Ne] = { ...we, required: B });
            else q.push({ required: B });
          }
          return q;
        }),
        I = x(() => z.value.length > 0),
        K = (B) =>
          z.value
            .filter((ie) =>
              !ie.trigger || !B
                ? !0
                : Array.isArray(ie.trigger)
                ? ie.trigger.includes(B)
                : ie.trigger === B,
            )
            .map(({ trigger: ie, ...J }) => J),
        re = x(() => z.value.some((B) => B.required)),
        fe = x(() => {
          var B;
          return (
            f.value === 'error' &&
            n.showMessage &&
            ((B = r == null ? void 0 : r.showMessage) != null ? B : !0)
          );
        }),
        ge = x(
          () => `${n.label || ''}${(r == null ? void 0 : r.labelSuffix) || ''}`,
        ),
        ye = (B) => {
          d.value = B;
        },
        ue = (B) => {
          var q, ie;
          const { errors: J, fields: we } = B;
          (!J || !we) && console.error(B),
            ye('error'),
            (m.value = J
              ? (ie =
                  (q = J == null ? void 0 : J[0]) == null
                    ? void 0
                    : q.message) != null
                ? ie
                : `${n.prop} is required`
              : ''),
            r == null || r.emit('validate', n.prop, !1, m.value);
        },
        T = () => {
          ye('success'), r == null || r.emit('validate', n.prop, !0, '');
        },
        W = async (B) => {
          const q = S.value;
          return new Nn({ [q]: B })
            .validate({ [q]: V.value }, { firstFields: !0 })
            .then(() => (T(), !0))
            .catch((J) => (ue(J), Promise.reject(J)));
        },
        Y = async (B, q) => {
          if (c || !n.prop) return !1;
          const ie = St(q);
          if (!I.value) return q == null || q(!1), !1;
          const J = K(B);
          return J.length === 0
            ? (q == null || q(!0), !0)
            : (ye('validating'),
              W(J)
                .then(() => (q == null || q(!0), !0))
                .catch((we) => {
                  const { fields: Ne } = we;
                  return q == null || q(!1, Ne), ie ? !1 : Promise.reject(Ne);
                }));
        },
        Z = () => {
          ye(''), (m.value = ''), (c = !1);
        },
        pe = async () => {
          const B = r == null ? void 0 : r.model;
          if (!B || !n.prop) return;
          const q = Hn(B, n.prop);
          (c = !0), (q.value = Wr(h)), await ve(), Z(), (c = !1);
        },
        me = (B) => {
          u.value.includes(B) || u.value.push(B);
        },
        Ae = (B) => {
          u.value = u.value.filter((q) => q !== B);
        };
      se(
        () => n.error,
        (B) => {
          (m.value = B || ''), ye(B ? 'error' : '');
        },
        { immediate: !0 },
      ),
        se(
          () => n.validateStatus,
          (B) => ye(B || ''),
        );
      const Ce = dn({
        ...Ut(n),
        $el: C,
        size: o,
        validateState: d,
        labelId: s,
        inputIds: u,
        isGroup: F,
        hasLabel: O,
        addInputId: me,
        removeInputId: Ae,
        resetField: pe,
        clearValidate: Z,
        validate: Y,
      });
      return (
        _t(pl, Ce),
        it(() => {
          n.prop && (r == null || r.addField(Ce), (h = Wr(V.value)));
        }),
        el(() => {
          r == null || r.removeField(Ce);
        }),
        t({
          size: o,
          validateMessage: m,
          validateState: d,
          validate: Y,
          clearValidate: Z,
          resetField: pe,
        }),
        (B, q) => {
          var ie;
          return (
            A(),
            H(
              'div',
              {
                ref_key: 'formItemRef',
                ref: C,
                class: M(v(y)),
                role: v(F) ? 'group' : void 0,
                'aria-labelledby': v(F) ? v(s) : void 0,
              },
              [
                Oe(
                  v(Sf),
                  {
                    'is-auto-width': v(g).width === 'auto',
                    'update-all':
                      ((ie = v(r)) == null ? void 0 : ie.labelWidth) === 'auto',
                  },
                  {
                    default: te(() => [
                      v(O)
                        ? (A(),
                          ne(
                            lt(v($) ? 'label' : 'div'),
                            {
                              key: 0,
                              id: v(s),
                              for: v($),
                              class: M(v(i).e('label')),
                              style: Fe(v(g)),
                            },
                            {
                              default: te(() => [
                                Te(B.$slots, 'label', { label: v(ge) }, () => [
                                  Ln(he(v(ge)), 1),
                                ]),
                              ]),
                              _: 3,
                            },
                            8,
                            ['id', 'for', 'class', 'style'],
                          ))
                        : U('v-if', !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['is-auto-width', 'update-all'],
                ),
                le(
                  'div',
                  { class: M(v(i).e('content')), style: Fe(v(b)) },
                  [
                    Te(B.$slots, 'default'),
                    Oe(
                      ko,
                      { name: `${v(i).namespace.value}-zoom-in-top` },
                      {
                        default: te(() => [
                          v(fe)
                            ? Te(
                                B.$slots,
                                'error',
                                { key: 0, error: m.value },
                                () => [
                                  le('div', { class: M(v(p)) }, he(m.value), 3),
                                ],
                              )
                            : U('v-if', !0),
                        ]),
                        _: 3,
                      },
                      8,
                      ['name'],
                    ),
                  ],
                  6,
                ),
              ],
              10,
              Ef,
            )
          );
        }
      );
    },
  });
var eo = Re(xf, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue',
  ],
]);
const Ah = Gt(Hc, { FormItem: eo }),
  Lh = cn(eo);
let nt;
const $f = `
  height:0 !important;
  visibility:hidden !important;
  ${oi() ? '' : 'overflow:hidden !important;'}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,
  Tf = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
  ];
function Pf(e) {
  const t = window.getComputedStyle(e),
    n = t.getPropertyValue('box-sizing'),
    l =
      Number.parseFloat(t.getPropertyValue('padding-bottom')) +
      Number.parseFloat(t.getPropertyValue('padding-top')),
    r =
      Number.parseFloat(t.getPropertyValue('border-bottom-width')) +
      Number.parseFloat(t.getPropertyValue('border-top-width'));
  return {
    contextStyle: Tf.map((o) => `${o}:${t.getPropertyValue(o)}`).join(';'),
    paddingSize: l,
    borderSize: r,
    boxSizing: n,
  };
}
function Gr(e, t = 1, n) {
  var l;
  nt ||
    ((nt = document.createElement('textarea')), document.body.appendChild(nt));
  const {
    paddingSize: r,
    borderSize: a,
    boxSizing: o,
    contextStyle: i,
  } = Pf(e);
  nt.setAttribute('style', `${i};${$f}`),
    (nt.value = e.value || e.placeholder || '');
  let s = nt.scrollHeight;
  const u = {};
  o === 'border-box' ? (s = s + a) : o === 'content-box' && (s = s - r),
    (nt.value = '');
  const d = nt.scrollHeight - r;
  if (Ge(t)) {
    let f = d * t;
    o === 'border-box' && (f = f + r + a),
      (s = Math.max(f, s)),
      (u.minHeight = `${f}px`);
  }
  if (Ge(n)) {
    let f = d * n;
    o === 'border-box' && (f = f + r + a), (s = Math.min(f, s));
  }
  return (
    (u.height = `${s}px`),
    (l = nt.parentNode) == null || l.removeChild(nt),
    (nt = void 0),
    u
  );
}
const Af = Qe({
    id: { type: String, default: void 0 },
    size: nl,
    disabled: Boolean,
    modelValue: { type: Et([String, Number, Object]), default: '' },
    type: { type: String, default: 'text' },
    resize: {
      type: String,
      values: ['none', 'both', 'horizontal', 'vertical'],
    },
    autosize: { type: Et([Boolean, Object]), default: !1 },
    autocomplete: { type: String, default: 'off' },
    formatter: { type: Function },
    parser: { type: Function },
    placeholder: { type: String },
    form: { type: String },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    showWordLimit: { type: Boolean, default: !1 },
    suffixIcon: { type: At },
    prefixIcon: { type: At },
    containerRole: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    tabindex: { type: [String, Number], default: 0 },
    validateEvent: { type: Boolean, default: !0 },
    inputStyle: { type: Et([Object, Array, String]), default: () => Vl({}) },
    autofocus: { type: Boolean, default: !1 },
  }),
  Lf = {
    [Ve]: (e) => rt(e),
    input: (e) => rt(e),
    change: (e) => rt(e),
    focus: (e) => e instanceof FocusEvent,
    blur: (e) => e instanceof FocusEvent,
    clear: () => !0,
    mouseleave: (e) => e instanceof MouseEvent,
    mouseenter: (e) => e instanceof MouseEvent,
    keydown: (e) => e instanceof Event,
    compositionstart: (e) => e instanceof CompositionEvent,
    compositionupdate: (e) => e instanceof CompositionEvent,
    compositionend: (e) => e instanceof CompositionEvent,
  },
  Ff = ['role'],
  Mf = [
    'id',
    'type',
    'disabled',
    'formatter',
    'parser',
    'readonly',
    'autocomplete',
    'tabindex',
    'aria-label',
    'placeholder',
    'form',
    'autofocus',
  ],
  Rf = [
    'id',
    'tabindex',
    'disabled',
    'readonly',
    'autocomplete',
    'aria-label',
    'placeholder',
    'form',
    'autofocus',
  ],
  If = ae({ name: 'ElInput', inheritAttrs: !1 }),
  Nf = ae({
    ...If,
    props: Af,
    emits: Lf,
    setup(e, { expose: t, emit: n }) {
      const l = e,
        r = Wo(),
        a = tl(),
        o = x(() => {
          const R = {};
          return (
            l.containerRole === 'combobox' &&
              ((R['aria-haspopup'] = r['aria-haspopup']),
              (R['aria-owns'] = r['aria-owns']),
              (R['aria-expanded'] = r['aria-expanded'])),
            R
          );
        }),
        i = x(() => [
          l.type === 'textarea' ? g.b() : c.b(),
          c.m(C.value),
          c.is('disabled', h.value),
          c.is('exceed', me.value),
          {
            [c.b('group')]: a.prepend || a.append,
            [c.bm('group', 'append')]: a.append,
            [c.bm('group', 'prepend')]: a.prepend,
            [c.m('prefix')]: a.prefix || l.prefixIcon,
            [c.m('suffix')]:
              a.suffix || l.suffixIcon || l.clearable || l.showPassword,
            [c.bm('suffix', 'password-clear')]: W.value && Y.value,
          },
          r.class,
        ]),
        s = x(() => [c.e('wrapper'), c.is('focus', V.value)]),
        u = Lc({ excludeKeys: x(() => Object.keys(o.value)) }),
        { form: d, formItem: f } = Fn(),
        { inputId: m } = jl(l, { formItemContext: f }),
        C = Pt(),
        h = ga(),
        c = ce('input'),
        g = ce('textarea'),
        b = Xt(),
        y = Xt(),
        w = P(!1),
        p = P(!1),
        S = P(!1),
        O = P(),
        $ = Xt(l.inputStyle),
        F = x(() => b.value || y.value),
        {
          wrapperRef: k,
          isFocused: V,
          handleFocus: z,
          handleBlur: I,
        } = Mc(F, {
          afterBlur() {
            var R;
            l.validateEvent &&
              ((R = f == null ? void 0 : f.validate) == null ||
                R.call(f, 'blur').catch((j) => qt()));
          },
        }),
        K = x(() => {
          var R;
          return (R = d == null ? void 0 : d.statusIcon) != null ? R : !1;
        }),
        re = x(() => (f == null ? void 0 : f.validateState) || ''),
        fe = x(() => re.value && ma[re.value]),
        ge = x(() => (S.value ? zo : Bo)),
        ye = x(() => [r.style, l.inputStyle]),
        ue = x(() => [l.inputStyle, $.value, { resize: l.resize }]),
        T = x(() => (Ho(l.modelValue) ? '' : String(l.modelValue))),
        W = x(
          () =>
            l.clearable &&
            !h.value &&
            !l.readonly &&
            !!T.value &&
            (V.value || w.value),
        ),
        Y = x(
          () =>
            l.showPassword &&
            !h.value &&
            !l.readonly &&
            !!T.value &&
            (!!T.value || V.value),
        ),
        Z = x(
          () =>
            l.showWordLimit &&
            !!u.value.maxlength &&
            (l.type === 'text' || l.type === 'textarea') &&
            !h.value &&
            !l.readonly &&
            !l.showPassword,
        ),
        pe = x(() => T.value.length),
        me = x(() => !!Z.value && pe.value > Number(u.value.maxlength)),
        Ae = x(
          () =>
            !!a.suffix ||
            !!l.suffixIcon ||
            W.value ||
            l.showPassword ||
            Z.value ||
            (!!re.value && K.value),
        ),
        [Ce, B] = Fc(b);
      en(y, (R) => {
        if ((J(), !Z.value || l.resize !== 'both')) return;
        const j = R[0],
          { width: Se } = j.contentRect;
        O.value = { right: `calc(100% - ${Se + 15 + 6}px)` };
      });
      const q = () => {
          const { type: R, autosize: j } = l;
          if (!(!pt || R !== 'textarea' || !y.value))
            if (j) {
              const Se = Vt(j) ? j.minRows : void 0,
                ct = Vt(j) ? j.maxRows : void 0,
                bt = Gr(y.value, Se, ct);
              ($.value = { overflowY: 'hidden', ...bt }),
                ve(() => {
                  y.value.offsetHeight, ($.value = bt);
                });
            } else $.value = { minHeight: Gr(y.value).minHeight };
        },
        J = ((R) => {
          let j = !1;
          return () => {
            var Se;
            if (j || !l.autosize) return;
            ((Se = y.value) == null ? void 0 : Se.offsetParent) === null ||
              (R(), (j = !0));
          };
        })(q),
        we = () => {
          const R = F.value,
            j = l.formatter ? l.formatter(T.value) : T.value;
          !R || R.value === j || (R.value = j);
        },
        Ne = async (R) => {
          Ce();
          let { value: j } = R.target;
          if ((l.formatter && (j = l.parser ? l.parser(j) : j), !p.value)) {
            if (j === T.value) {
              we();
              return;
            }
            n(Ve, j), n('input', j), await ve(), we(), B();
          }
        },
        ht = (R) => {
          n('change', R.target.value);
        },
        st = (R) => {
          n('compositionstart', R), (p.value = !0);
        },
        ut = (R) => {
          var j;
          n('compositionupdate', R);
          const Se = (j = R.target) == null ? void 0 : j.value,
            ct = Se[Se.length - 1] || '';
          p.value = !Za(ct);
        },
        gt = (R) => {
          n('compositionend', R), p.value && ((p.value = !1), Ne(R));
        },
        mt = () => {
          (S.value = !S.value), et();
        },
        et = async () => {
          var R;
          await ve(), (R = F.value) == null || R.focus();
        },
        Lt = () => {
          var R;
          return (R = F.value) == null ? void 0 : R.blur();
        },
        Ft = (R) => {
          (w.value = !1), n('mouseleave', R);
        },
        Mt = (R) => {
          (w.value = !0), n('mouseenter', R);
        },
        dt = (R) => {
          n('keydown', R);
        },
        Rt = () => {
          var R;
          (R = F.value) == null || R.select();
        },
        xt = () => {
          n(Ve, ''), n('change', ''), n('clear'), n('input', '');
        };
      return (
        se(
          () => l.modelValue,
          () => {
            var R;
            ve(() => q()),
              l.validateEvent &&
                ((R = f == null ? void 0 : f.validate) == null ||
                  R.call(f, 'change').catch((j) => qt()));
          },
        ),
        se(T, () => we()),
        se(
          () => l.type,
          async () => {
            await ve(), we(), q();
          },
        ),
        it(() => {
          !l.formatter && l.parser, we(), ve(q);
        }),
        t({
          input: b,
          textarea: y,
          ref: F,
          textareaStyle: ue,
          autosize: Do(l, 'autosize'),
          focus: et,
          blur: Lt,
          select: Rt,
          clear: xt,
          resizeTextarea: q,
        }),
        (R, j) =>
          Ue(
            (A(),
            H(
              'div',
              al(v(o), {
                class: v(i),
                style: v(ye),
                role: R.containerRole,
                onMouseenter: Mt,
                onMouseleave: Ft,
              }),
              [
                U(' input '),
                R.type !== 'textarea'
                  ? (A(),
                    H(
                      _e,
                      { key: 0 },
                      [
                        U(' prepend slot '),
                        R.$slots.prepend
                          ? (A(),
                            H(
                              'div',
                              { key: 0, class: M(v(c).be('group', 'prepend')) },
                              [Te(R.$slots, 'prepend')],
                              2,
                            ))
                          : U('v-if', !0),
                        le(
                          'div',
                          { ref_key: 'wrapperRef', ref: k, class: M(v(s)) },
                          [
                            U(' prefix slot '),
                            R.$slots.prefix || R.prefixIcon
                              ? (A(),
                                H(
                                  'span',
                                  { key: 0, class: M(v(c).e('prefix')) },
                                  [
                                    le(
                                      'span',
                                      { class: M(v(c).e('prefix-inner')) },
                                      [
                                        Te(R.$slots, 'prefix'),
                                        R.prefixIcon
                                          ? (A(),
                                            ne(
                                              v(Ye),
                                              {
                                                key: 0,
                                                class: M(v(c).e('icon')),
                                              },
                                              {
                                                default: te(() => [
                                                  (A(), ne(lt(R.prefixIcon))),
                                                ]),
                                                _: 1,
                                              },
                                              8,
                                              ['class'],
                                            ))
                                          : U('v-if', !0),
                                      ],
                                      2,
                                    ),
                                  ],
                                  2,
                                ))
                              : U('v-if', !0),
                            le(
                              'input',
                              al(
                                {
                                  id: v(m),
                                  ref_key: 'input',
                                  ref: b,
                                  class: v(c).e('inner'),
                                },
                                v(u),
                                {
                                  type: R.showPassword
                                    ? S.value
                                      ? 'text'
                                      : 'password'
                                    : R.type,
                                  disabled: v(h),
                                  formatter: R.formatter,
                                  parser: R.parser,
                                  readonly: R.readonly,
                                  autocomplete: R.autocomplete,
                                  tabindex: R.tabindex,
                                  'aria-label': R.label,
                                  placeholder: R.placeholder,
                                  style: R.inputStyle,
                                  form: l.form,
                                  autofocus: l.autofocus,
                                  onCompositionstart: st,
                                  onCompositionupdate: ut,
                                  onCompositionend: gt,
                                  onInput: Ne,
                                  onFocus:
                                    j[0] ||
                                    (j[0] = (...Se) => v(z) && v(z)(...Se)),
                                  onBlur:
                                    j[1] ||
                                    (j[1] = (...Se) => v(I) && v(I)(...Se)),
                                  onChange: ht,
                                  onKeydown: dt,
                                },
                              ),
                              null,
                              16,
                              Mf,
                            ),
                            U(' suffix slot '),
                            v(Ae)
                              ? (A(),
                                H(
                                  'span',
                                  { key: 1, class: M(v(c).e('suffix')) },
                                  [
                                    le(
                                      'span',
                                      { class: M(v(c).e('suffix-inner')) },
                                      [
                                        !v(W) || !v(Y) || !v(Z)
                                          ? (A(),
                                            H(
                                              _e,
                                              { key: 0 },
                                              [
                                                Te(R.$slots, 'suffix'),
                                                R.suffixIcon
                                                  ? (A(),
                                                    ne(
                                                      v(Ye),
                                                      {
                                                        key: 0,
                                                        class: M(
                                                          v(c).e('icon'),
                                                        ),
                                                      },
                                                      {
                                                        default: te(() => [
                                                          (A(),
                                                          ne(lt(R.suffixIcon))),
                                                        ]),
                                                        _: 1,
                                                      },
                                                      8,
                                                      ['class'],
                                                    ))
                                                  : U('v-if', !0),
                                              ],
                                              64,
                                            ))
                                          : U('v-if', !0),
                                        v(W)
                                          ? (A(),
                                            ne(
                                              v(Ye),
                                              {
                                                key: 1,
                                                class: M([
                                                  v(c).e('icon'),
                                                  v(c).e('clear'),
                                                ]),
                                                onMousedown: qe(v(qo), [
                                                  'prevent',
                                                ]),
                                                onClick: xt,
                                              },
                                              {
                                                default: te(() => [Oe(v(ba))]),
                                                _: 1,
                                              },
                                              8,
                                              ['class', 'onMousedown'],
                                            ))
                                          : U('v-if', !0),
                                        v(Y)
                                          ? (A(),
                                            ne(
                                              v(Ye),
                                              {
                                                key: 2,
                                                class: M([
                                                  v(c).e('icon'),
                                                  v(c).e('password'),
                                                ]),
                                                onClick: mt,
                                              },
                                              {
                                                default: te(() => [
                                                  (A(), ne(lt(v(ge)))),
                                                ]),
                                                _: 1,
                                              },
                                              8,
                                              ['class'],
                                            ))
                                          : U('v-if', !0),
                                        v(Z)
                                          ? (A(),
                                            H(
                                              'span',
                                              {
                                                key: 3,
                                                class: M(v(c).e('count')),
                                              },
                                              [
                                                le(
                                                  'span',
                                                  {
                                                    class: M(
                                                      v(c).e('count-inner'),
                                                    ),
                                                  },
                                                  he(v(pe)) +
                                                    ' / ' +
                                                    he(v(u).maxlength),
                                                  3,
                                                ),
                                              ],
                                              2,
                                            ))
                                          : U('v-if', !0),
                                        v(re) && v(fe) && v(K)
                                          ? (A(),
                                            ne(
                                              v(Ye),
                                              {
                                                key: 4,
                                                class: M([
                                                  v(c).e('icon'),
                                                  v(c).e('validateIcon'),
                                                  v(c).is(
                                                    'loading',
                                                    v(re) === 'validating',
                                                  ),
                                                ]),
                                              },
                                              {
                                                default: te(() => [
                                                  (A(), ne(lt(v(fe)))),
                                                ]),
                                                _: 1,
                                              },
                                              8,
                                              ['class'],
                                            ))
                                          : U('v-if', !0),
                                      ],
                                      2,
                                    ),
                                  ],
                                  2,
                                ))
                              : U('v-if', !0),
                          ],
                          2,
                        ),
                        U(' append slot '),
                        R.$slots.append
                          ? (A(),
                            H(
                              'div',
                              { key: 1, class: M(v(c).be('group', 'append')) },
                              [Te(R.$slots, 'append')],
                              2,
                            ))
                          : U('v-if', !0),
                      ],
                      64,
                    ))
                  : (A(),
                    H(
                      _e,
                      { key: 1 },
                      [
                        U(' textarea '),
                        le(
                          'textarea',
                          al(
                            {
                              id: v(m),
                              ref_key: 'textarea',
                              ref: y,
                              class: v(g).e('inner'),
                            },
                            v(u),
                            {
                              tabindex: R.tabindex,
                              disabled: v(h),
                              readonly: R.readonly,
                              autocomplete: R.autocomplete,
                              style: v(ue),
                              'aria-label': R.label,
                              placeholder: R.placeholder,
                              form: l.form,
                              autofocus: l.autofocus,
                              onCompositionstart: st,
                              onCompositionupdate: ut,
                              onCompositionend: gt,
                              onInput: Ne,
                              onFocus:
                                j[2] || (j[2] = (...Se) => v(z) && v(z)(...Se)),
                              onBlur:
                                j[3] || (j[3] = (...Se) => v(I) && v(I)(...Se)),
                              onChange: ht,
                              onKeydown: dt,
                            },
                          ),
                          null,
                          16,
                          Rf,
                        ),
                        v(Z)
                          ? (A(),
                            H(
                              'span',
                              {
                                key: 0,
                                style: Fe(O.value),
                                class: M(v(c).e('count')),
                              },
                              he(v(pe)) + ' / ' + he(v(u).maxlength),
                              7,
                            ))
                          : U('v-if', !0),
                      ],
                      64,
                    )),
              ],
              16,
              Ff,
            )),
            [[tn, R.type !== 'hidden']],
          )
      );
    },
  });
var kf = Re(Nf, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue',
  ],
]);
const to = Gt(kf);
function Wf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
const Tt = new Map();
let Yr;
pt &&
  (document.addEventListener('mousedown', (e) => (Yr = e)),
  document.addEventListener('mouseup', (e) => {
    for (const t of Tt.values())
      for (const { documentHandler: n } of t) n(e, Yr);
  }));
function Xr(e, t) {
  let n = [];
  return (
    Array.isArray(t.arg) ? (n = t.arg) : ya(t.arg) && n.push(t.arg),
    function (l, r) {
      const a = t.instance.popperRef,
        o = l.target,
        i = r == null ? void 0 : r.target,
        s = !t || !t.instance,
        u = !o || !i,
        d = e.contains(o) || e.contains(i),
        f = e === o,
        m =
          (n.length && n.some((h) => (h == null ? void 0 : h.contains(o)))) ||
          (n.length && n.includes(i)),
        C = a && (a.contains(o) || a.contains(i));
      s || u || d || f || m || C || t.value(l, r);
    }
  );
}
const no = {
  beforeMount(e, t) {
    Tt.has(e) || Tt.set(e, []),
      Tt.get(e).push({ documentHandler: Xr(e, t), bindingFn: t.value });
  },
  updated(e, t) {
    Tt.has(e) || Tt.set(e, []);
    const n = Tt.get(e),
      l = n.findIndex((a) => a.bindingFn === t.oldValue),
      r = { documentHandler: Xr(e, t), bindingFn: t.value };
    l >= 0 ? n.splice(l, 1, r) : n.push(r);
  },
  unmounted(e) {
    Tt.delete(e);
  },
};
var Qr = !1,
  Wt,
  Pl,
  Al,
  jn,
  Kn,
  lo,
  _n,
  Ll,
  Fl,
  Ml,
  ro,
  Rl,
  Il,
  ao,
  oo;
function je() {
  if (!Qr) {
    Qr = !0;
    var e = navigator.userAgent,
      t =
        /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
          e,
        ),
      n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (
      ((Rl = /\b(iPhone|iP[ao]d)/.exec(e)),
      (Il = /\b(iP[ao]d)/.exec(e)),
      (Ml = /Android/i.exec(e)),
      (ao = /FBAN\/\w+;/i.exec(e)),
      (oo = /Mobile/i.exec(e)),
      (ro = !!/Win64/.exec(e)),
      t)
    ) {
      (Wt = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN),
        Wt && document && document.documentMode && (Wt = document.documentMode);
      var l = /(?:Trident\/(\d+.\d+))/.exec(e);
      (lo = l ? parseFloat(l[1]) + 4 : Wt),
        (Pl = t[2] ? parseFloat(t[2]) : NaN),
        (Al = t[3] ? parseFloat(t[3]) : NaN),
        (jn = t[4] ? parseFloat(t[4]) : NaN),
        jn
          ? ((t = /(?:Chrome\/(\d+\.\d+))/.exec(e)),
            (Kn = t && t[1] ? parseFloat(t[1]) : NaN))
          : (Kn = NaN);
    } else Wt = Pl = Al = Kn = jn = NaN;
    if (n) {
      if (n[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        _n = r ? parseFloat(r[1].replace('_', '.')) : !0;
      } else _n = !1;
      (Ll = !!n[2]), (Fl = !!n[3]);
    } else _n = Ll = Fl = !1;
  }
}
var Nl = {
    ie: function () {
      return je() || Wt;
    },
    ieCompatibilityMode: function () {
      return je() || lo > Wt;
    },
    ie64: function () {
      return Nl.ie() && ro;
    },
    firefox: function () {
      return je() || Pl;
    },
    opera: function () {
      return je() || Al;
    },
    webkit: function () {
      return je() || jn;
    },
    safari: function () {
      return Nl.webkit();
    },
    chrome: function () {
      return je() || Kn;
    },
    windows: function () {
      return je() || Ll;
    },
    osx: function () {
      return je() || _n;
    },
    linux: function () {
      return je() || Fl;
    },
    iphone: function () {
      return je() || Rl;
    },
    mobile: function () {
      return je() || Rl || Il || Ml || oo;
    },
    nativeApp: function () {
      return je() || ao;
    },
    android: function () {
      return je() || Ml;
    },
    ipad: function () {
      return je() || Il;
    },
  },
  zf = Nl,
  Bn = !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  ),
  Bf = {
    canUseDOM: Bn,
    canUseWorkers: typeof Worker < 'u',
    canUseEventListeners:
      Bn && !!(window.addEventListener || window.attachEvent),
    canUseViewport: Bn && !!window.screen,
    isInWorker: !Bn,
  },
  io = Bf,
  so;
io.canUseDOM &&
  (so =
    document.implementation &&
    document.implementation.hasFeature &&
    document.implementation.hasFeature('', '') !== !0);
function Hf(e, t) {
  if (!io.canUseDOM || (t && !('addEventListener' in document))) return !1;
  var n = 'on' + e,
    l = n in document;
  if (!l) {
    var r = document.createElement('div');
    r.setAttribute(n, 'return;'), (l = typeof r[n] == 'function');
  }
  return (
    !l &&
      so &&
      e === 'wheel' &&
      (l = document.implementation.hasFeature('Events.wheel', '3.0')),
    l
  );
}
var Df = Hf,
  Zr = 10,
  Jr = 40,
  ea = 800;
function uo(e) {
  var t = 0,
    n = 0,
    l = 0,
    r = 0;
  return (
    'detail' in e && (n = e.detail),
    'wheelDelta' in e && (n = -e.wheelDelta / 120),
    'wheelDeltaY' in e && (n = -e.wheelDeltaY / 120),
    'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
    'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = n), (n = 0)),
    (l = t * Zr),
    (r = n * Zr),
    'deltaY' in e && (r = e.deltaY),
    'deltaX' in e && (l = e.deltaX),
    (l || r) &&
      e.deltaMode &&
      (e.deltaMode == 1 ? ((l *= Jr), (r *= Jr)) : ((l *= ea), (r *= ea))),
    l && !t && (t = l < 1 ? -1 : 1),
    r && !n && (n = r < 1 ? -1 : 1),
    { spinX: t, spinY: n, pixelX: l, pixelY: r }
  );
}
uo.getEventType = function () {
  return zf.firefox() ? 'DOMMouseScroll' : Df('wheel') ? 'wheel' : 'mousewheel';
};
var qf = uo;
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ const Vf = function (e, t) {
    if (e && e.addEventListener) {
      const n = function (l) {
        const r = qf(l);
        t && Reflect.apply(t, this, [l, r]);
      };
      e.addEventListener('wheel', n, { passive: !0 });
    }
  },
  jf = {
    beforeMount(e, t) {
      Vf(e, t.value);
    },
  },
  co = {
    modelValue: { type: [Number, String, Boolean], default: void 0 },
    label: { type: [String, Boolean, Number, Object] },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: { type: String, default: void 0 },
    trueLabel: { type: [String, Number], default: void 0 },
    falseLabel: { type: [String, Number], default: void 0 },
    id: { type: String, default: void 0 },
    controls: { type: String, default: void 0 },
    border: Boolean,
    size: nl,
    tabindex: [String, Number],
    validateEvent: { type: Boolean, default: !0 },
  },
  fo = {
    [Ve]: (e) => rt(e) || Ge(e) || Jt(e),
    change: (e) => rt(e) || Ge(e) || Jt(e),
  },
  pn = Symbol('checkboxGroupContextKey'),
  Kf = ({ model: e, isChecked: t }) => {
    const n = xe(pn, void 0),
      l = x(() => {
        var a, o;
        const i = (a = n == null ? void 0 : n.max) == null ? void 0 : a.value,
          s = (o = n == null ? void 0 : n.min) == null ? void 0 : o.value;
        return (
          (!Sn(i) && e.value.length >= i && !t.value) ||
          (!Sn(s) && e.value.length <= s && t.value)
        );
      });
    return {
      isDisabled: ga(
        x(() => (n == null ? void 0 : n.disabled.value) || l.value),
      ),
      isLimitDisabled: l,
    };
  },
  _f = (
    e,
    {
      model: t,
      isLimitExceeded: n,
      hasOwnLabel: l,
      isDisabled: r,
      isLabeledByFormItem: a,
    },
  ) => {
    const o = xe(pn, void 0),
      { formItem: i } = Fn(),
      { emit: s } = Pe();
    function u(h) {
      var c, g;
      return h === e.trueLabel || h === !0
        ? (c = e.trueLabel) != null
          ? c
          : !0
        : (g = e.falseLabel) != null
        ? g
        : !1;
    }
    function d(h, c) {
      s('change', u(h), c);
    }
    function f(h) {
      if (n.value) return;
      const c = h.target;
      s('change', u(c.checked), h);
    }
    async function m(h) {
      n.value ||
        (!l.value &&
          !r.value &&
          a.value &&
          (h.composedPath().some((b) => b.tagName === 'LABEL') ||
            ((t.value = u([!1, e.falseLabel].includes(t.value))),
            await ve(),
            d(t.value, h))));
    }
    const C = x(
      () => (o == null ? void 0 : o.validateEvent) || e.validateEvent,
    );
    return (
      se(
        () => e.modelValue,
        () => {
          C.value && (i == null || i.validate('change').catch((h) => qt()));
        },
      ),
      { handleChange: f, onClickRoot: m }
    );
  },
  Uf = (e) => {
    const t = P(!1),
      { emit: n } = Pe(),
      l = xe(pn, void 0),
      r = x(() => Sn(l) === !1),
      a = P(!1);
    return {
      model: x({
        get() {
          var i, s;
          return r.value
            ? (i = l == null ? void 0 : l.modelValue) == null
              ? void 0
              : i.value
            : (s = e.modelValue) != null
            ? s
            : t.value;
        },
        set(i) {
          var s, u;
          r.value && Dt(i)
            ? ((a.value =
                ((s = l == null ? void 0 : l.max) == null
                  ? void 0
                  : s.value) !== void 0 &&
                i.length > (l == null ? void 0 : l.max.value)),
              a.value === !1 &&
                ((u = l == null ? void 0 : l.changeEvent) == null ||
                  u.call(l, i)))
            : (n(Ve, i), (t.value = i));
        },
      }),
      isGroup: r,
      isLimitExceeded: a,
    };
  },
  Gf = (e, t, { model: n }) => {
    const l = xe(pn, void 0),
      r = P(!1),
      a = x(() => {
        const u = n.value;
        return Jt(u)
          ? u
          : Dt(u)
          ? Vt(e.label)
            ? u.map(nn).some((d) => Zn(d, e.label))
            : u.map(nn).includes(e.label)
          : u != null
          ? u === e.trueLabel
          : !!u;
      }),
      o = Pt(
        x(() => {
          var u;
          return (u = l == null ? void 0 : l.size) == null ? void 0 : u.value;
        }),
        { prop: !0 },
      ),
      i = Pt(
        x(() => {
          var u;
          return (u = l == null ? void 0 : l.size) == null ? void 0 : u.value;
        }),
      ),
      s = x(() => !!(t.default || e.label));
    return {
      checkboxButtonSize: o,
      isChecked: a,
      isFocused: r,
      checkboxSize: i,
      hasOwnLabel: s,
    };
  },
  Yf = (e, { model: t }) => {
    function n() {
      Dt(t.value) && !t.value.includes(e.label)
        ? t.value.push(e.label)
        : (t.value = e.trueLabel || !0);
    }
    e.checked && n();
  },
  po = (e, t) => {
    const { formItem: n } = Fn(),
      { model: l, isGroup: r, isLimitExceeded: a } = Uf(e),
      {
        isFocused: o,
        isChecked: i,
        checkboxButtonSize: s,
        checkboxSize: u,
        hasOwnLabel: d,
      } = Gf(e, t, { model: l }),
      { isDisabled: f } = Kf({ model: l, isChecked: i }),
      { inputId: m, isLabeledByFormItem: C } = jl(e, {
        formItemContext: n,
        disableIdGeneration: d,
        disableIdManagement: r,
      }),
      { handleChange: h, onClickRoot: c } = _f(e, {
        model: l,
        isLimitExceeded: a,
        hasOwnLabel: d,
        isDisabled: f,
        isLabeledByFormItem: C,
      });
    return (
      Yf(e, { model: l }),
      {
        inputId: m,
        isLabeledByFormItem: C,
        isChecked: i,
        isDisabled: f,
        isFocused: o,
        checkboxButtonSize: s,
        checkboxSize: u,
        hasOwnLabel: d,
        model: l,
        handleChange: h,
        onClickRoot: c,
      }
    );
  },
  Xf = ['tabindex', 'role', 'aria-checked'],
  Qf = [
    'id',
    'aria-hidden',
    'name',
    'tabindex',
    'disabled',
    'true-value',
    'false-value',
  ],
  Zf = ['id', 'aria-hidden', 'disabled', 'value', 'name', 'tabindex'],
  Jf = ae({ name: 'ElCheckbox' }),
  ep = ae({
    ...Jf,
    props: co,
    emits: fo,
    setup(e) {
      const t = e,
        n = tl(),
        {
          inputId: l,
          isLabeledByFormItem: r,
          isChecked: a,
          isDisabled: o,
          isFocused: i,
          checkboxSize: s,
          hasOwnLabel: u,
          model: d,
          handleChange: f,
          onClickRoot: m,
        } = po(t, n),
        C = ce('checkbox'),
        h = x(() => [
          C.b(),
          C.m(s.value),
          C.is('disabled', o.value),
          C.is('bordered', t.border),
          C.is('checked', a.value),
        ]),
        c = x(() => [
          C.e('input'),
          C.is('disabled', o.value),
          C.is('checked', a.value),
          C.is('indeterminate', t.indeterminate),
          C.is('focus', i.value),
        ]);
      return (g, b) => (
        A(),
        ne(
          lt(!v(u) && v(r) ? 'span' : 'label'),
          {
            class: M(v(h)),
            'aria-controls': g.indeterminate ? g.controls : null,
            onClick: v(m),
          },
          {
            default: te(() => [
              le(
                'span',
                {
                  class: M(v(c)),
                  tabindex: g.indeterminate ? 0 : void 0,
                  role: g.indeterminate ? 'checkbox' : void 0,
                  'aria-checked': g.indeterminate ? 'mixed' : void 0,
                },
                [
                  g.trueLabel || g.falseLabel
                    ? Ue(
                        (A(),
                        H(
                          'input',
                          {
                            key: 0,
                            id: v(l),
                            'onUpdate:modelValue':
                              b[0] ||
                              (b[0] = (y) => (En(d) ? (d.value = y) : null)),
                            class: M(v(C).e('original')),
                            type: 'checkbox',
                            'aria-hidden': g.indeterminate ? 'true' : 'false',
                            name: g.name,
                            tabindex: g.tabindex,
                            disabled: v(o),
                            'true-value': g.trueLabel,
                            'false-value': g.falseLabel,
                            onChange:
                              b[1] || (b[1] = (...y) => v(f) && v(f)(...y)),
                            onFocus: b[2] || (b[2] = (y) => (i.value = !0)),
                            onBlur: b[3] || (b[3] = (y) => (i.value = !1)),
                            onClick: b[4] || (b[4] = qe(() => {}, ['stop'])),
                          },
                          null,
                          42,
                          Qf,
                        )),
                        [[Yn, v(d)]],
                      )
                    : Ue(
                        (A(),
                        H(
                          'input',
                          {
                            key: 1,
                            id: v(l),
                            'onUpdate:modelValue':
                              b[5] ||
                              (b[5] = (y) => (En(d) ? (d.value = y) : null)),
                            class: M(v(C).e('original')),
                            type: 'checkbox',
                            'aria-hidden': g.indeterminate ? 'true' : 'false',
                            disabled: v(o),
                            value: g.label,
                            name: g.name,
                            tabindex: g.tabindex,
                            onChange:
                              b[6] || (b[6] = (...y) => v(f) && v(f)(...y)),
                            onFocus: b[7] || (b[7] = (y) => (i.value = !0)),
                            onBlur: b[8] || (b[8] = (y) => (i.value = !1)),
                            onClick: b[9] || (b[9] = qe(() => {}, ['stop'])),
                          },
                          null,
                          42,
                          Zf,
                        )),
                        [[Yn, v(d)]],
                      ),
                  le('span', { class: M(v(C).e('inner')) }, null, 2),
                ],
                10,
                Xf,
              ),
              v(u)
                ? (A(),
                  H(
                    'span',
                    { key: 0, class: M(v(C).e('label')) },
                    [
                      Te(g.$slots, 'default'),
                      g.$slots.default
                        ? U('v-if', !0)
                        : (A(), H(_e, { key: 0 }, [Ln(he(g.label), 1)], 64)),
                    ],
                    2,
                  ))
                : U('v-if', !0),
            ]),
            _: 3,
          },
          8,
          ['class', 'aria-controls', 'onClick'],
        )
      );
    },
  });
var tp = Re(ep, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue',
  ],
]);
const np = ['name', 'tabindex', 'disabled', 'true-value', 'false-value'],
  lp = ['name', 'tabindex', 'disabled', 'value'],
  rp = ae({ name: 'ElCheckboxButton' }),
  ap = ae({
    ...rp,
    props: co,
    emits: fo,
    setup(e) {
      const t = e,
        n = tl(),
        {
          isFocused: l,
          isChecked: r,
          isDisabled: a,
          checkboxButtonSize: o,
          model: i,
          handleChange: s,
        } = po(t, n),
        u = xe(pn, void 0),
        d = ce('checkbox'),
        f = x(() => {
          var C, h, c, g;
          const b =
            (h =
              (C = u == null ? void 0 : u.fill) == null ? void 0 : C.value) !=
            null
              ? h
              : '';
          return {
            backgroundColor: b,
            borderColor: b,
            color:
              (g =
                (c = u == null ? void 0 : u.textColor) == null
                  ? void 0
                  : c.value) != null
                ? g
                : '',
            boxShadow: b ? `-1px 0 0 0 ${b}` : void 0,
          };
        }),
        m = x(() => [
          d.b('button'),
          d.bm('button', o.value),
          d.is('disabled', a.value),
          d.is('checked', r.value),
          d.is('focus', l.value),
        ]);
      return (C, h) => (
        A(),
        H(
          'label',
          { class: M(v(m)) },
          [
            C.trueLabel || C.falseLabel
              ? Ue(
                  (A(),
                  H(
                    'input',
                    {
                      key: 0,
                      'onUpdate:modelValue':
                        h[0] || (h[0] = (c) => (En(i) ? (i.value = c) : null)),
                      class: M(v(d).be('button', 'original')),
                      type: 'checkbox',
                      name: C.name,
                      tabindex: C.tabindex,
                      disabled: v(a),
                      'true-value': C.trueLabel,
                      'false-value': C.falseLabel,
                      onChange: h[1] || (h[1] = (...c) => v(s) && v(s)(...c)),
                      onFocus: h[2] || (h[2] = (c) => (l.value = !0)),
                      onBlur: h[3] || (h[3] = (c) => (l.value = !1)),
                      onClick: h[4] || (h[4] = qe(() => {}, ['stop'])),
                    },
                    null,
                    42,
                    np,
                  )),
                  [[Yn, v(i)]],
                )
              : Ue(
                  (A(),
                  H(
                    'input',
                    {
                      key: 1,
                      'onUpdate:modelValue':
                        h[5] || (h[5] = (c) => (En(i) ? (i.value = c) : null)),
                      class: M(v(d).be('button', 'original')),
                      type: 'checkbox',
                      name: C.name,
                      tabindex: C.tabindex,
                      disabled: v(a),
                      value: C.label,
                      onChange: h[6] || (h[6] = (...c) => v(s) && v(s)(...c)),
                      onFocus: h[7] || (h[7] = (c) => (l.value = !0)),
                      onBlur: h[8] || (h[8] = (c) => (l.value = !1)),
                      onClick: h[9] || (h[9] = qe(() => {}, ['stop'])),
                    },
                    null,
                    42,
                    lp,
                  )),
                  [[Yn, v(i)]],
                ),
            C.$slots.default || C.label
              ? (A(),
                H(
                  'span',
                  {
                    key: 2,
                    class: M(v(d).be('button', 'inner')),
                    style: Fe(v(r) ? v(f) : void 0),
                  },
                  [Te(C.$slots, 'default', {}, () => [Ln(he(C.label), 1)])],
                  6,
                ))
              : U('v-if', !0),
          ],
          2,
        )
      );
    },
  });
var vo = Re(ap, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue',
  ],
]);
const op = Qe({
    modelValue: { type: Et(Array), default: () => [] },
    disabled: Boolean,
    min: Number,
    max: Number,
    size: nl,
    label: String,
    fill: String,
    textColor: String,
    tag: { type: String, default: 'div' },
    validateEvent: { type: Boolean, default: !0 },
  }),
  ip = { [Ve]: (e) => Dt(e), change: (e) => Dt(e) },
  sp = ae({ name: 'ElCheckboxGroup' }),
  up = ae({
    ...sp,
    props: op,
    emits: ip,
    setup(e, { emit: t }) {
      const n = e,
        l = ce('checkbox'),
        { formItem: r } = Fn(),
        { inputId: a, isLabeledByFormItem: o } = jl(n, { formItemContext: r }),
        i = async (u) => {
          t(Ve, u), await ve(), t('change', u);
        },
        s = x({
          get() {
            return n.modelValue;
          },
          set(u) {
            i(u);
          },
        });
      return (
        _t(pn, {
          ...Ec(Ut(n), [
            'size',
            'min',
            'max',
            'disabled',
            'validateEvent',
            'fill',
            'textColor',
          ]),
          modelValue: s,
          changeEvent: i,
        }),
        se(
          () => n.modelValue,
          () => {
            n.validateEvent &&
              (r == null || r.validate('change').catch((u) => qt()));
          },
        ),
        (u, d) => {
          var f;
          return (
            A(),
            ne(
              lt(u.tag),
              {
                id: v(a),
                class: M(v(l).b('group')),
                role: 'group',
                'aria-label': v(o) ? void 0 : u.label || 'checkbox-group',
                'aria-labelledby': v(o)
                  ? (f = v(r)) == null
                    ? void 0
                    : f.labelId
                  : void 0,
              },
              { default: te(() => [Te(u.$slots, 'default')]), _: 3 },
              8,
              ['id', 'class', 'aria-label', 'aria-labelledby'],
            )
          );
        }
      );
    },
  });
var ho = Re(up, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue',
  ],
]);
const an = Gt(tp, { CheckboxButton: vo, CheckboxGroup: ho });
cn(vo);
cn(ho);
const go = Qe({
    type: {
      type: String,
      values: ['success', 'info', 'warning', 'danger', ''],
      default: '',
    },
    closable: Boolean,
    disableTransitions: Boolean,
    hit: Boolean,
    color: { type: String, default: '' },
    size: { type: String, values: un, default: '' },
    effect: {
      type: String,
      values: ['dark', 'light', 'plain'],
      default: 'light',
    },
    round: Boolean,
  }),
  dp = {
    close: (e) => e instanceof MouseEvent,
    click: (e) => e instanceof MouseEvent,
  },
  cp = ae({ name: 'ElTag' }),
  fp = ae({
    ...cp,
    props: go,
    emits: dp,
    setup(e, { emit: t }) {
      const n = e,
        l = Pt(),
        r = ce('tag'),
        a = x(() => {
          const { type: s, hit: u, effect: d, closable: f, round: m } = n;
          return [
            r.b(),
            r.is('closable', f),
            r.m(s),
            r.m(l.value),
            r.m(d),
            r.is('hit', u),
            r.is('round', m),
          ];
        }),
        o = (s) => {
          t('close', s);
        },
        i = (s) => {
          t('click', s);
        };
      return (s, u) =>
        s.disableTransitions
          ? (A(),
            H(
              'span',
              {
                key: 0,
                class: M(v(a)),
                style: Fe({ backgroundColor: s.color }),
                onClick: i,
              },
              [
                le(
                  'span',
                  { class: M(v(r).e('content')) },
                  [Te(s.$slots, 'default')],
                  2,
                ),
                s.closable
                  ? (A(),
                    ne(
                      v(Ye),
                      {
                        key: 0,
                        class: M(v(r).e('close')),
                        onClick: qe(o, ['stop']),
                      },
                      { default: te(() => [Oe(v(pr))]), _: 1 },
                      8,
                      ['class', 'onClick'],
                    ))
                  : U('v-if', !0),
              ],
              6,
            ))
          : (A(),
            ne(
              vl,
              {
                key: 1,
                name: `${v(r).namespace.value}-zoom-in-center`,
                appear: '',
              },
              {
                default: te(() => [
                  le(
                    'span',
                    {
                      class: M(v(a)),
                      style: Fe({ backgroundColor: s.color }),
                      onClick: i,
                    },
                    [
                      le(
                        'span',
                        { class: M(v(r).e('content')) },
                        [Te(s.$slots, 'default')],
                        2,
                      ),
                      s.closable
                        ? (A(),
                          ne(
                            v(Ye),
                            {
                              key: 0,
                              class: M(v(r).e('close')),
                              onClick: qe(o, ['stop']),
                            },
                            { default: te(() => [Oe(v(pr))]), _: 1 },
                            8,
                            ['class', 'onClick'],
                          ))
                        : U('v-if', !0),
                    ],
                    6,
                  ),
                ]),
                _: 3,
              },
              8,
              ['name'],
            ));
    },
  });
var pp = Re(fp, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue',
  ],
]);
const vp = Gt(pp),
  mo = Symbol('elPaginationKey'),
  hp = Qe({
    disabled: Boolean,
    currentPage: { type: Number, default: 1 },
    prevText: { type: String },
    prevIcon: { type: At },
  }),
  gp = { click: (e) => e instanceof MouseEvent },
  mp = ['disabled', 'aria-label', 'aria-disabled'],
  bp = { key: 0 },
  yp = ae({ name: 'ElPaginationPrev' }),
  Cp = ae({
    ...yp,
    props: hp,
    emits: gp,
    setup(e) {
      const t = e,
        { t: n } = Je(),
        l = x(() => t.disabled || t.currentPage <= 1);
      return (r, a) => (
        A(),
        H(
          'button',
          {
            type: 'button',
            class: 'btn-prev',
            disabled: v(l),
            'aria-label': r.prevText || v(n)('el.pagination.prev'),
            'aria-disabled': v(l),
            onClick: a[0] || (a[0] = (o) => r.$emit('click', o)),
          },
          [
            r.prevText
              ? (A(), H('span', bp, he(r.prevText), 1))
              : (A(),
                ne(
                  v(Ye),
                  { key: 1 },
                  { default: te(() => [(A(), ne(lt(r.prevIcon)))]), _: 1 },
                )),
          ],
          8,
          mp,
        )
      );
    },
  });
var wp = Re(Cp, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue',
  ],
]);
const Sp = Qe({
    disabled: Boolean,
    currentPage: { type: Number, default: 1 },
    pageCount: { type: Number, default: 50 },
    nextText: { type: String },
    nextIcon: { type: At },
  }),
  Ep = ['disabled', 'aria-label', 'aria-disabled'],
  Op = { key: 0 },
  xp = ae({ name: 'ElPaginationNext' }),
  $p = ae({
    ...xp,
    props: Sp,
    emits: ['click'],
    setup(e) {
      const t = e,
        { t: n } = Je(),
        l = x(
          () =>
            t.disabled || t.currentPage === t.pageCount || t.pageCount === 0,
        );
      return (r, a) => (
        A(),
        H(
          'button',
          {
            type: 'button',
            class: 'btn-next',
            disabled: v(l),
            'aria-label': r.nextText || v(n)('el.pagination.next'),
            'aria-disabled': v(l),
            onClick: a[0] || (a[0] = (o) => r.$emit('click', o)),
          },
          [
            r.nextText
              ? (A(), H('span', Op, he(r.nextText), 1))
              : (A(),
                ne(
                  v(Ye),
                  { key: 1 },
                  { default: te(() => [(A(), ne(lt(r.nextIcon)))]), _: 1 },
                )),
          ],
          8,
          Ep,
        )
      );
    },
  });
var Tp = Re($p, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue',
  ],
]);
const bo = Symbol('ElSelectGroup'),
  rl = Symbol('ElSelect');
function Pp(e, t) {
  const n = xe(rl),
    l = xe(bo, { disabled: !1 }),
    r = x(
      () =>
        Object.prototype.toString.call(e.value).toLowerCase() ===
        '[object object]',
    ),
    a = x(() =>
      n.props.multiple
        ? f(n.props.modelValue, e.value)
        : m(e.value, n.props.modelValue),
    ),
    o = x(() => {
      if (n.props.multiple) {
        const c = n.props.modelValue || [];
        return (
          !a.value &&
          c.length >= n.props.multipleLimit &&
          n.props.multipleLimit > 0
        );
      } else return !1;
    }),
    i = x(() => e.label || (r.value ? '' : e.value)),
    s = x(() => e.value || e.label || ''),
    u = x(() => e.disabled || t.groupDisabled || o.value),
    d = Pe(),
    f = (c = [], g) => {
      if (r.value) {
        const b = n.props.valueKey;
        return c && c.some((y) => nn(Ke(y, b)) === Ke(g, b));
      } else return c && c.includes(g);
    },
    m = (c, g) => {
      if (r.value) {
        const { valueKey: b } = n.props;
        return Ke(c, b) === Ke(g, b);
      } else return c === g;
    },
    C = () => {
      !e.disabled &&
        !l.disabled &&
        (n.hoverIndex = n.optionsArray.indexOf(d.proxy));
    };
  se(
    () => i.value,
    () => {
      !e.created && !n.props.remote && n.setSelected();
    },
  ),
    se(
      () => e.value,
      (c, g) => {
        const { remote: b, valueKey: y } = n.props;
        if (
          (Object.is(c, g) ||
            (n.onOptionDestroy(g, d.proxy), n.onOptionCreate(d.proxy)),
          !e.created && !b)
        ) {
          if (
            y &&
            typeof c == 'object' &&
            typeof g == 'object' &&
            c[y] === g[y]
          )
            return;
          n.setSelected();
        }
      },
    ),
    se(
      () => l.disabled,
      () => {
        t.groupDisabled = l.disabled;
      },
      { immediate: !0 },
    );
  const { queryChange: h } = nn(n);
  return (
    se(
      h,
      (c) => {
        const { query: g } = v(c),
          b = new RegExp(Oc(g), 'i');
        (t.visible = b.test(i.value) || e.created),
          t.visible || n.filteredOptionsCount--;
      },
      { immediate: !0 },
    ),
    {
      select: n,
      currentLabel: i,
      currentValue: s,
      itemSelected: a,
      isDisabled: u,
      hoverItem: C,
    }
  );
}
const Ap = ae({
  name: 'ElOption',
  componentName: 'ElOption',
  props: {
    value: { required: !0, type: [String, Number, Boolean, Object] },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean,
  },
  setup(e) {
    const t = ce('select'),
      n = x(() => [
        t.be('dropdown', 'item'),
        t.is('disabled', v(o)),
        { selected: v(a), hover: v(d) },
      ]),
      l = dn({
        index: -1,
        groupDisabled: !1,
        visible: !0,
        hitState: !1,
        hover: !1,
      }),
      {
        currentLabel: r,
        itemSelected: a,
        isDisabled: o,
        select: i,
        hoverItem: s,
      } = Pp(e, l),
      { visible: u, hover: d } = Ut(l),
      f = Pe().proxy;
    i.onOptionCreate(f),
      el(() => {
        const C = f.value,
          { selected: h } = i,
          g = (i.props.multiple ? h : [h]).some((b) => b.value === f.value);
        ve(() => {
          i.cachedOptions.get(C) === f && !g && i.cachedOptions.delete(C);
        }),
          i.onOptionDestroy(C, f);
      });
    function m() {
      e.disabled !== !0 && l.groupDisabled !== !0 && i.handleOptionSelect(f);
    }
    return {
      ns: t,
      containerKls: n,
      currentLabel: r,
      itemSelected: a,
      isDisabled: o,
      select: i,
      hoverItem: s,
      visible: u,
      hover: d,
      selectOptionClick: m,
      states: l,
    };
  },
});
function Lp(e, t, n, l, r, a) {
  return Ue(
    (A(),
    H(
      'li',
      {
        class: M(e.containerKls),
        onMouseenter:
          t[0] || (t[0] = (...o) => e.hoverItem && e.hoverItem(...o)),
        onClick:
          t[1] ||
          (t[1] = qe(
            (...o) => e.selectOptionClick && e.selectOptionClick(...o),
            ['stop'],
          )),
      },
      [
        Te(e.$slots, 'default', {}, () => [
          le('span', null, he(e.currentLabel), 1),
        ]),
      ],
      34,
    )),
    [[tn, e.visible]],
  );
}
var ar = Re(Ap, [
  ['render', Lp],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue',
  ],
]);
const Fp = ae({
  name: 'ElSelectDropdown',
  componentName: 'ElSelectDropdown',
  setup() {
    const e = xe(rl),
      t = ce('select'),
      n = x(() => e.props.popperClass),
      l = x(() => e.props.multiple),
      r = x(() => e.props.fitInputWidth),
      a = P('');
    function o() {
      var i;
      a.value = `${(i = e.selectWrapper) == null ? void 0 : i.offsetWidth}px`;
    }
    return (
      it(() => {
        o(), en(e.selectWrapper, o);
      }),
      { ns: t, minWidth: a, popperClass: n, isMultiple: l, isFitInputWidth: r }
    );
  },
});
function Mp(e, t, n, l, r, a) {
  return (
    A(),
    H(
      'div',
      {
        class: M([
          e.ns.b('dropdown'),
          e.ns.is('multiple', e.isMultiple),
          e.popperClass,
        ]),
        style: Fe({ [e.isFitInputWidth ? 'width' : 'minWidth']: e.minWidth }),
      },
      [Te(e.$slots, 'default')],
      6,
    )
  );
}
var Rp = Re(Fp, [
  ['render', Mp],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue',
  ],
]);
function Ip(e) {
  const { t } = Je();
  return dn({
    options: new Map(),
    cachedOptions: new Map(),
    disabledOptions: new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    selectedLabel: '',
    hoverIndex: -1,
    query: '',
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: '',
    currentPlaceholder: t('el.select.placeholder'),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    prefixWidth: 11,
    mouseEnter: !1,
    focused: !1,
  });
}
const Np = (e, t, n) => {
  const { t: l } = Je(),
    r = ce('select');
  Vo(
    {
      from: 'suffixTransition',
      replacement: 'override style scheme',
      version: '2.3.0',
      scope: 'props',
      ref: 'https://element-plus.org/en-US/component/select.html#select-attributes',
    },
    x(() => e.suffixTransition === !1),
  );
  const a = P(null),
    o = P(null),
    i = P(null),
    s = P(null),
    u = P(null),
    d = P(null),
    f = P(null),
    m = P(null),
    C = P(-1),
    h = Xt({ query: '' }),
    c = Xt(''),
    g = P([]);
  let b = 0;
  const { form: y, formItem: w } = Fn(),
    p = x(() => !e.filterable || e.multiple || !t.visible),
    S = x(() => e.disabled || (y == null ? void 0 : y.disabled)),
    O = x(() => {
      const E = e.multiple
        ? Array.isArray(e.modelValue) && e.modelValue.length > 0
        : e.modelValue !== void 0 &&
          e.modelValue !== null &&
          e.modelValue !== '';
      return e.clearable && !S.value && t.inputHovering && E;
    }),
    $ = x(() =>
      e.remote && e.filterable && !e.remoteShowSuffix ? '' : e.suffixIcon,
    ),
    F = x(() => r.is('reverse', $.value && t.visible && e.suffixTransition)),
    k = x(
      () =>
        (y == null ? void 0 : y.statusIcon) &&
        (w == null ? void 0 : w.validateState) &&
        ma[w == null ? void 0 : w.validateState],
    ),
    V = x(() => (e.remote ? 300 : 0)),
    z = x(() =>
      e.loading
        ? e.loadingText || l('el.select.loading')
        : e.remote && t.query === '' && t.options.size === 0
        ? !1
        : e.filterable &&
          t.query &&
          t.options.size > 0 &&
          t.filteredOptionsCount === 0
        ? e.noMatchText || l('el.select.noMatch')
        : t.options.size === 0
        ? e.noDataText || l('el.select.noData')
        : null,
    ),
    I = x(() => {
      const E = Array.from(t.options.values()),
        L = [];
      return (
        g.value.forEach((N) => {
          const X = E.findIndex((We) => We.currentLabel === N);
          X > -1 && L.push(E[X]);
        }),
        L.length >= E.length ? L : E
      );
    }),
    K = x(() => Array.from(t.cachedOptions.values())),
    re = x(() => {
      const E = I.value
        .filter((L) => !L.created)
        .some((L) => L.currentLabel === t.query);
      return e.filterable && e.allowCreate && t.query !== '' && !E;
    }),
    fe = Pt(),
    ge = x(() => (['small'].includes(fe.value) ? 'small' : 'default')),
    ye = x({
      get() {
        return t.visible && z.value !== !1;
      },
      set(E) {
        t.visible = E;
      },
    });
  se(
    [() => S.value, () => fe.value, () => (y == null ? void 0 : y.size)],
    () => {
      ve(() => {
        ue();
      });
    },
  ),
    se(
      () => e.placeholder,
      (E) => {
        (t.cachedPlaceHolder = t.currentPlaceholder = E),
          e.multiple &&
            Array.isArray(e.modelValue) &&
            e.modelValue.length > 0 &&
            (t.currentPlaceholder = '');
      },
    ),
    se(
      () => e.modelValue,
      (E, L) => {
        e.multiple &&
          (ue(),
          (E && E.length > 0) || (o.value && t.query !== '')
            ? (t.currentPlaceholder = '')
            : (t.currentPlaceholder = t.cachedPlaceHolder),
          e.filterable && !e.reserveKeyword && ((t.query = ''), T(t.query))),
          Z(),
          e.filterable && !e.multiple && (t.inputLength = 20),
          !Zn(E, L) &&
            e.validateEvent &&
            (w == null || w.validate('change').catch((N) => qt()));
      },
      { flush: 'post', deep: !0 },
    ),
    se(
      () => t.visible,
      (E) => {
        var L, N, X, We, He;
        E
          ? ((N = (L = s.value) == null ? void 0 : L.updatePopper) == null ||
              N.call(L),
            e.filterable &&
              ((t.filteredOptionsCount = t.optionsCount),
              (t.query = e.remote ? '' : t.selectedLabel),
              (We = (X = i.value) == null ? void 0 : X.focus) == null ||
                We.call(X),
              e.multiple
                ? (He = o.value) == null || He.focus()
                : t.selectedLabel &&
                  ((t.currentPlaceholder = `${t.selectedLabel}`),
                  (t.selectedLabel = '')),
              T(t.query),
              !e.multiple && !e.remote && ((h.value.query = ''), gn(h), gn(c))))
          : (e.filterable &&
              (St(e.filterMethod) && e.filterMethod(''),
              St(e.remoteMethod) && e.remoteMethod('')),
            (t.query = ''),
            (t.previousQuery = null),
            (t.selectedLabel = ''),
            (t.inputLength = 20),
            (t.menuVisibleOnFocus = !1),
            me(),
            ve(() => {
              o.value &&
                o.value.value === '' &&
                t.selected.length === 0 &&
                (t.currentPlaceholder = t.cachedPlaceHolder);
            }),
            e.multiple ||
              (t.selected &&
                (e.filterable &&
                e.allowCreate &&
                t.createdSelected &&
                t.createdLabel
                  ? (t.selectedLabel = t.createdLabel)
                  : (t.selectedLabel = t.selected.currentLabel),
                e.filterable && (t.query = t.selectedLabel)),
              e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))),
          n.emit('visible-change', E);
      },
    ),
    se(
      () => t.options.entries(),
      () => {
        var E, L, N;
        if (!pt) return;
        (L = (E = s.value) == null ? void 0 : E.updatePopper) == null ||
          L.call(E),
          e.multiple && ue();
        const X =
          ((N = f.value) == null ? void 0 : N.querySelectorAll('input')) || [];
        ((!e.filterable && !e.defaultFirstOption && !Sn(e.modelValue)) ||
          !Array.from(X).includes(document.activeElement)) &&
          Z(),
          e.defaultFirstOption &&
            (e.filterable || e.remote) &&
            t.filteredOptionsCount &&
            Y();
      },
      { flush: 'post' },
    ),
    se(
      () => t.hoverIndex,
      (E) => {
        Ge(E) && E > -1 ? (C.value = I.value[E] || {}) : (C.value = {}),
          I.value.forEach((L) => {
            L.hover = C.value === L;
          });
      },
    );
  const ue = () => {
      ve(() => {
        var E, L;
        if (!a.value) return;
        const N = a.value.$el.querySelector('input');
        b = b || (N.clientHeight > 0 ? N.clientHeight + 2 : 0);
        const X = d.value,
          We = xc(fe.value || (y == null ? void 0 : y.size)),
          He = fe.value || We === b || b <= 0 ? We : b;
        !(N.offsetParent === null) &&
          (N.style.height = `${
            (t.selected.length === 0
              ? He
              : Math.max(
                  X ? X.clientHeight + (X.clientHeight > He ? 6 : 0) : 0,
                  He,
                )) - 2
          }px`),
          t.visible &&
            z.value !== !1 &&
            ((L = (E = s.value) == null ? void 0 : E.updatePopper) == null ||
              L.call(E));
      });
    },
    T = async (E) => {
      if (!(t.previousQuery === E || t.isOnComposition)) {
        if (
          t.previousQuery === null &&
          (St(e.filterMethod) || St(e.remoteMethod))
        ) {
          t.previousQuery = E;
          return;
        }
        (t.previousQuery = E),
          ve(() => {
            var L, N;
            t.visible &&
              ((N = (L = s.value) == null ? void 0 : L.updatePopper) == null ||
                N.call(L));
          }),
          (t.hoverIndex = -1),
          e.multiple &&
            e.filterable &&
            ve(() => {
              if (!S.value) {
                const L = o.value.value.length * 15 + 20;
                (t.inputLength = e.collapseTags ? Math.min(50, L) : L), W();
              }
              ue();
            }),
          e.remote && St(e.remoteMethod)
            ? ((t.hoverIndex = -1), e.remoteMethod(E))
            : St(e.filterMethod)
            ? (e.filterMethod(E), gn(c))
            : ((t.filteredOptionsCount = t.optionsCount),
              (h.value.query = E),
              gn(h),
              gn(c)),
          e.defaultFirstOption &&
            (e.filterable || e.remote) &&
            t.filteredOptionsCount &&
            (await ve(), Y());
      }
    },
    W = () => {
      t.currentPlaceholder !== '' &&
        (t.currentPlaceholder = o.value.value ? '' : t.cachedPlaceHolder);
    },
    Y = () => {
      const E = I.value.filter(
          (X) => X.visible && !X.disabled && !X.states.groupDisabled,
        ),
        L = E.find((X) => X.created),
        N = E[0];
      t.hoverIndex = gt(I.value, L || N);
    },
    Z = () => {
      var E;
      if (e.multiple) t.selectedLabel = '';
      else {
        const N = pe(e.modelValue);
        (E = N.props) != null && E.created
          ? ((t.createdLabel = N.props.value), (t.createdSelected = !0))
          : (t.createdSelected = !1),
          (t.selectedLabel = N.currentLabel),
          (t.selected = N),
          e.filterable && (t.query = t.selectedLabel);
        return;
      }
      const L = [];
      Array.isArray(e.modelValue) &&
        e.modelValue.forEach((N) => {
          L.push(pe(N));
        }),
        (t.selected = L),
        ve(() => {
          ue();
        });
    },
    pe = (E) => {
      let L;
      const N = ol(E).toLowerCase() === 'object',
        X = ol(E).toLowerCase() === 'null',
        We = ol(E).toLowerCase() === 'undefined';
      for (let Ct = t.cachedOptions.size - 1; Ct >= 0; Ct--) {
        const tt = K.value[Ct];
        if (
          N ? Ke(tt.value, e.valueKey) === Ke(E, e.valueKey) : tt.value === E
        ) {
          L = {
            value: E,
            currentLabel: tt.currentLabel,
            isDisabled: tt.isDisabled,
          };
          break;
        }
      }
      if (L) return L;
      const He = N ? E.label : !X && !We ? E : '',
        yt = { value: E, currentLabel: He };
      return e.multiple && (yt.hitState = !1), yt;
    },
    me = () => {
      setTimeout(() => {
        const E = e.valueKey;
        e.multiple
          ? t.selected.length > 0
            ? (t.hoverIndex = Math.min.apply(
                null,
                t.selected.map((L) =>
                  I.value.findIndex((N) => Ke(N, E) === Ke(L, E)),
                ),
              ))
            : (t.hoverIndex = -1)
          : (t.hoverIndex = I.value.findIndex((L) => de(L) === de(t.selected)));
      }, 300);
    },
    Ae = () => {
      var E, L;
      Ce(),
        (L = (E = s.value) == null ? void 0 : E.updatePopper) == null ||
          L.call(E),
        e.multiple && ue();
    },
    Ce = () => {
      var E;
      t.inputWidth = (E = a.value) == null ? void 0 : E.$el.offsetWidth;
    },
    B = () => {
      e.filterable &&
        t.query !== t.selectedLabel &&
        ((t.query = t.selectedLabel), T(t.query));
    },
    q = ln(() => {
      B();
    }, V.value),
    ie = ln((E) => {
      T(E.target.value);
    }, V.value),
    J = (E) => {
      Zn(e.modelValue, E) || n.emit(Qa, E);
    },
    we = (E) => hc(E, (L) => !t.disabledOptions.has(L)),
    Ne = (E) => {
      if (E.code !== vr.delete) {
        if (E.target.value.length <= 0 && !dt()) {
          const L = e.modelValue.slice(),
            N = we(L);
          if (N < 0) return;
          L.splice(N, 1), n.emit(Ve, L), J(L);
        }
        E.target.value.length === 1 &&
          e.modelValue.length === 0 &&
          (t.currentPlaceholder = t.cachedPlaceHolder);
      }
    },
    ht = (E, L) => {
      const N = t.selected.indexOf(L);
      if (N > -1 && !S.value) {
        const X = e.modelValue.slice();
        X.splice(N, 1), n.emit(Ve, X), J(X), n.emit('remove-tag', L.value);
      }
      E.stopPropagation(), j();
    },
    st = (E) => {
      E.stopPropagation();
      const L = e.multiple ? [] : '';
      if (!rt(L)) for (const N of t.selected) N.isDisabled && L.push(N.value);
      n.emit(Ve, L),
        J(L),
        (t.hoverIndex = -1),
        (t.visible = !1),
        n.emit('clear'),
        j();
    },
    ut = (E) => {
      var L;
      if (e.multiple) {
        const N = (e.modelValue || []).slice(),
          X = gt(N, E.value);
        X > -1
          ? N.splice(X, 1)
          : (e.multipleLimit <= 0 || N.length < e.multipleLimit) &&
            N.push(E.value),
          n.emit(Ve, N),
          J(N),
          E.created && ((t.query = ''), T(''), (t.inputLength = 20)),
          e.filterable && ((L = o.value) == null || L.focus());
      } else n.emit(Ve, E.value), J(E.value), (t.visible = !1);
      mt(),
        !t.visible &&
          ve(() => {
            et(E);
          });
    },
    gt = (E = [], L) => {
      if (!Vt(L)) return E.indexOf(L);
      const N = e.valueKey;
      let X = -1;
      return (
        E.some((We, He) => (nn(Ke(We, N)) === Ke(L, N) ? ((X = He), !0) : !1)),
        X
      );
    },
    mt = () => {
      const E = o.value || a.value;
      E && (E == null || E.focus());
    },
    et = (E) => {
      var L, N, X, We, He;
      const yt = Array.isArray(E) ? E[0] : E;
      let Ct = null;
      if (yt != null && yt.value) {
        const tt = I.value.filter((ze) => ze.value === yt.value);
        tt.length > 0 && (Ct = tt[0].$el);
      }
      if (s.value && Ct) {
        const tt =
          (We =
            (X =
              (N = (L = s.value) == null ? void 0 : L.popperRef) == null
                ? void 0
                : N.contentRef) == null
              ? void 0
              : X.querySelector) == null
            ? void 0
            : We.call(X, `.${r.be('dropdown', 'wrap')}`);
        tt && ai(tt, Ct);
      }
      (He = m.value) == null || He.handleScroll();
    },
    Lt = (E) => {
      t.optionsCount++,
        t.filteredOptionsCount++,
        t.options.set(E.value, E),
        t.cachedOptions.set(E.value, E),
        E.disabled && t.disabledOptions.set(E.value, E);
    },
    Ft = (E, L) => {
      t.options.get(E) === L &&
        (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(E));
    },
    Mt = (E) => {
      E.code !== vr.backspace && dt(!1),
        (t.inputLength = o.value.value.length * 15 + 20),
        ue();
    },
    dt = (E) => {
      if (!Array.isArray(t.selected)) return;
      const L = we(t.selected.map((X) => X.value)),
        N = t.selected[L];
      if (N)
        return E === !0 || E === !1
          ? ((N.hitState = E), E)
          : ((N.hitState = !N.hitState), N.hitState);
    },
    Rt = (E) => {
      const L = E.target.value;
      if (E.type === 'compositionend') (t.isOnComposition = !1), ve(() => T(L));
      else {
        const N = L[L.length - 1] || '';
        t.isOnComposition = !Za(N);
      }
    },
    xt = () => {
      ve(() => et(t.selected));
    },
    R = (E) => {
      t.focused ||
        ((e.automaticDropdown || e.filterable) &&
          (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0),
          (t.visible = !0)),
        (t.focused = !0),
        n.emit('focus', E));
    },
    j = () => {
      var E, L;
      t.visible
        ? (E = o.value || a.value) == null || E.focus()
        : (L = a.value) == null || L.focus();
    },
    Se = () => {
      var E, L, N;
      (t.visible = !1),
        (E = a.value) == null || E.blur(),
        (N = (L = i.value) == null ? void 0 : L.blur) == null || N.call(L);
    },
    ct = (E) => {
      var L, N, X;
      ((L = s.value) != null && L.isFocusInsideContent(E)) ||
        ((N = u.value) != null && N.isFocusInsideContent(E)) ||
        ((X = f.value) != null && X.contains(E.relatedTarget)) ||
        (t.visible && D(), (t.focused = !1), n.emit('blur', E));
    },
    bt = (E) => {
      st(E);
    },
    D = () => {
      t.visible = !1;
    },
    _ = (E) => {
      t.visible && (E.preventDefault(), E.stopPropagation(), (t.visible = !1));
    },
    ee = (E) => {
      (E && !t.mouseEnter) ||
        S.value ||
        (t.menuVisibleOnFocus
          ? (t.menuVisibleOnFocus = !1)
          : (!s.value || !s.value.isFocusInsideContent()) &&
            (t.visible = !t.visible),
        j());
    },
    Q = () => {
      t.visible ? I.value[t.hoverIndex] && ut(I.value[t.hoverIndex]) : ee();
    },
    de = (E) => (Vt(E.value) ? Ke(E.value, e.valueKey) : E.value),
    $e = x(() => I.value.filter((E) => E.visible).every((E) => E.disabled)),
    ke = x(() => (e.multiple ? t.selected.slice(0, e.maxCollapseTags) : [])),
    ft = x(() => (e.multiple ? t.selected.slice(e.maxCollapseTags) : [])),
    Be = (E) => {
      if (!t.visible) {
        t.visible = !0;
        return;
      }
      if (
        !(t.options.size === 0 || t.filteredOptionsCount === 0) &&
        !t.isOnComposition &&
        !$e.value
      ) {
        E === 'next'
          ? (t.hoverIndex++,
            t.hoverIndex === t.options.size && (t.hoverIndex = 0))
          : E === 'prev' &&
            (t.hoverIndex--,
            t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
        const L = I.value[t.hoverIndex];
        (L.disabled === !0 || L.states.groupDisabled === !0 || !L.visible) &&
          Be(E),
          ve(() => et(C.value));
      }
    },
    vn = () => {
      t.mouseEnter = !0;
    },
    hn = () => {
      t.mouseEnter = !1;
    },
    $t = (E, L) => {
      var N, X;
      ht(E, L),
        (X = (N = u.value) == null ? void 0 : N.updatePopper) == null ||
          X.call(N);
    },
    It = x(() => ({
      maxWidth: `${v(t.inputWidth) - 32 - (k.value ? 22 : 0)}px`,
      width: '100%',
    }));
  return {
    optionList: g,
    optionsArray: I,
    selectSize: fe,
    handleResize: Ae,
    debouncedOnInputChange: q,
    debouncedQueryChange: ie,
    deletePrevTag: Ne,
    deleteTag: ht,
    deleteSelected: st,
    handleOptionSelect: ut,
    scrollToOption: et,
    readonly: p,
    resetInputHeight: ue,
    showClose: O,
    iconComponent: $,
    iconReverse: F,
    showNewOption: re,
    collapseTagSize: ge,
    setSelected: Z,
    managePlaceholder: W,
    selectDisabled: S,
    emptyText: z,
    toggleLastOptionHitState: dt,
    resetInputState: Mt,
    handleComposition: Rt,
    onOptionCreate: Lt,
    onOptionDestroy: Ft,
    handleMenuEnter: xt,
    handleFocus: R,
    focus: j,
    blur: Se,
    handleBlur: ct,
    handleClearClick: bt,
    handleClose: D,
    handleKeydownEscape: _,
    toggleMenu: ee,
    selectOption: Q,
    getValueKey: de,
    navigateOptions: Be,
    handleDeleteTooltipTag: $t,
    dropMenuVisible: ye,
    queryChange: h,
    groupQueryChange: c,
    showTagList: ke,
    collapseTagList: ft,
    selectTagsStyle: It,
    reference: a,
    input: o,
    iOSInput: i,
    tooltipRef: s,
    tagTooltipRef: u,
    tags: d,
    selectWrapper: f,
    scrollbar: m,
    handleMouseEnter: vn,
    handleMouseLeave: hn,
  };
};
var kp = ae({
  name: 'ElOptions',
  emits: ['update-options'],
  setup(e, { slots: t, emit: n }) {
    let l = [];
    function r(a, o) {
      if (a.length !== o.length) return !1;
      for (const [i] of a.entries()) if (a[i] != o[i]) return !1;
      return !0;
    }
    return () => {
      var a, o;
      const i = (a = t.default) == null ? void 0 : a.call(t),
        s = [];
      function u(d) {
        Array.isArray(d) &&
          d.forEach((f) => {
            var m, C, h, c;
            const g =
              (m = (f == null ? void 0 : f.type) || {}) == null
                ? void 0
                : m.name;
            g === 'ElOptionGroup'
              ? u(
                  !rt(f.children) &&
                    !Array.isArray(f.children) &&
                    St((C = f.children) == null ? void 0 : C.default)
                    ? (h = f.children) == null
                      ? void 0
                      : h.default()
                    : f.children,
                )
              : g === 'ElOption'
              ? s.push((c = f.props) == null ? void 0 : c.label)
              : Array.isArray(f.children) && u(f.children);
          });
      }
      return (
        i.length && u((o = i[0]) == null ? void 0 : o.children),
        r(s, l) || ((l = s), n('update-options', s)),
        i
      );
    };
  },
});
const ta = 'ElSelect',
  Wp = ae({
    name: ta,
    componentName: ta,
    components: {
      ElInput: to,
      ElSelectMenu: Rp,
      ElOption: ar,
      ElOptions: kp,
      ElTag: vp,
      ElScrollbar: Kl,
      ElTooltip: Ca,
      ElIcon: Ye,
    },
    directives: { ClickOutside: no },
    props: {
      name: String,
      id: String,
      modelValue: {
        type: [Array, String, Number, Boolean, Object],
        default: void 0,
      },
      autocomplete: { type: String, default: 'off' },
      automaticDropdown: Boolean,
      size: { type: String, validator: $c },
      effect: { type: String, default: 'light' },
      disabled: Boolean,
      clearable: Boolean,
      filterable: Boolean,
      allowCreate: Boolean,
      loading: Boolean,
      popperClass: { type: String, default: '' },
      popperOptions: { type: Object, default: () => ({}) },
      remote: Boolean,
      loadingText: String,
      noMatchText: String,
      noDataText: String,
      remoteMethod: Function,
      filterMethod: Function,
      multiple: Boolean,
      multipleLimit: { type: Number, default: 0 },
      placeholder: { type: String },
      defaultFirstOption: Boolean,
      reserveKeyword: { type: Boolean, default: !0 },
      valueKey: { type: String, default: 'value' },
      collapseTags: Boolean,
      collapseTagsTooltip: Boolean,
      maxCollapseTags: { type: Number, default: 1 },
      teleported: jo.teleported,
      persistent: { type: Boolean, default: !0 },
      clearIcon: { type: At, default: ba },
      fitInputWidth: Boolean,
      suffixIcon: { type: At, default: wa },
      tagType: { ...go.type, default: 'info' },
      validateEvent: { type: Boolean, default: !0 },
      remoteShowSuffix: Boolean,
      suffixTransition: { type: Boolean, default: !0 },
      placement: { type: String, values: Ko, default: 'bottom-start' },
      ariaLabel: { type: String, default: void 0 },
    },
    emits: [Ve, Qa, 'remove-tag', 'clear', 'visible-change', 'focus', 'blur'],
    setup(e, t) {
      const n = ce('select'),
        l = ce('input'),
        { t: r } = Je(),
        a = Ip(e),
        {
          optionList: o,
          optionsArray: i,
          selectSize: s,
          readonly: u,
          handleResize: d,
          collapseTagSize: f,
          debouncedOnInputChange: m,
          debouncedQueryChange: C,
          deletePrevTag: h,
          deleteTag: c,
          deleteSelected: g,
          handleOptionSelect: b,
          scrollToOption: y,
          setSelected: w,
          resetInputHeight: p,
          managePlaceholder: S,
          showClose: O,
          selectDisabled: $,
          iconComponent: F,
          iconReverse: k,
          showNewOption: V,
          emptyText: z,
          toggleLastOptionHitState: I,
          resetInputState: K,
          handleComposition: re,
          onOptionCreate: fe,
          onOptionDestroy: ge,
          handleMenuEnter: ye,
          handleFocus: ue,
          focus: T,
          blur: W,
          handleBlur: Y,
          handleClearClick: Z,
          handleClose: pe,
          handleKeydownEscape: me,
          toggleMenu: Ae,
          selectOption: Ce,
          getValueKey: B,
          navigateOptions: q,
          handleDeleteTooltipTag: ie,
          dropMenuVisible: J,
          reference: we,
          input: Ne,
          iOSInput: ht,
          tooltipRef: st,
          tagTooltipRef: ut,
          tags: gt,
          selectWrapper: mt,
          scrollbar: et,
          queryChange: Lt,
          groupQueryChange: Ft,
          handleMouseEnter: Mt,
          handleMouseLeave: dt,
          showTagList: Rt,
          collapseTagList: xt,
          selectTagsStyle: R,
        } = Np(e, a, t),
        {
          inputWidth: j,
          selected: Se,
          inputLength: ct,
          filteredOptionsCount: bt,
          visible: D,
          selectedLabel: _,
          hoverIndex: ee,
          query: Q,
          inputHovering: de,
          currentPlaceholder: $e,
          menuVisibleOnFocus: ke,
          isOnComposition: ft,
          options: Be,
          cachedOptions: vn,
          optionsCount: hn,
          prefixWidth: $t,
        } = Ut(a),
        It = x(() => {
          const ze = [n.b()],
            Nt = v(s);
          return (
            Nt && ze.push(n.m(Nt)), e.disabled && ze.push(n.m('disabled')), ze
          );
        }),
        E = x(() => [n.e('tags'), n.is('disabled', v($))]),
        L = x(() => [
          n.b('tags-wrapper'),
          { 'has-prefix': v($t) && v(Se).length },
        ]),
        N = x(() => [n.e('input'), n.is(v(s)), n.is('disabled', v($))]),
        X = x(() => [n.e('input'), n.is(v(s)), n.em('input', 'iOS')]),
        We = x(() => [n.is('empty', !e.allowCreate && !!v(Q) && v(bt) === 0)]),
        He = x(() => ({
          maxWidth: `${v(j) > 123 ? v(j) - 123 : v(j) - 75}px`,
        })),
        yt = x(() => ({
          marginLeft: `${v($t)}px`,
          flexGrow: 1,
          width: `${v(ct) / (v(j) - 32)}%`,
          maxWidth: `${v(j) - 42}px`,
        }));
      _t(
        rl,
        dn({
          props: e,
          options: Be,
          optionsArray: i,
          cachedOptions: vn,
          optionsCount: hn,
          filteredOptionsCount: bt,
          hoverIndex: ee,
          handleOptionSelect: b,
          onOptionCreate: fe,
          onOptionDestroy: ge,
          selectWrapper: mt,
          selected: Se,
          setSelected: w,
          queryChange: Lt,
          groupQueryChange: Ft,
        }),
      ),
        it(() => {
          (a.cachedPlaceHolder = $e.value =
            e.placeholder || (() => r('el.select.placeholder'))),
            e.multiple &&
              Array.isArray(e.modelValue) &&
              e.modelValue.length > 0 &&
              ($e.value = ''),
            en(mt, d),
            e.remote && e.multiple && p(),
            ve(() => {
              const ze = we.value && we.value.$el;
              if (
                ze &&
                ((j.value = ze.getBoundingClientRect().width), t.slots.prefix)
              ) {
                const Nt = ze.querySelector(`.${l.e('prefix')}`);
                $t.value = Math.max(Nt.getBoundingClientRect().width + 11, 30);
              }
            }),
            w();
        }),
        e.multiple && !Array.isArray(e.modelValue) && t.emit(Ve, []),
        !e.multiple && Array.isArray(e.modelValue) && t.emit(Ve, '');
      const Ct = x(() => {
        var ze, Nt;
        return (Nt = (ze = st.value) == null ? void 0 : ze.popperRef) == null
          ? void 0
          : Nt.contentRef;
      });
      return {
        isIOS: _o,
        onOptionsRendered: (ze) => {
          o.value = ze;
        },
        prefixWidth: $t,
        selectSize: s,
        readonly: u,
        handleResize: d,
        collapseTagSize: f,
        debouncedOnInputChange: m,
        debouncedQueryChange: C,
        deletePrevTag: h,
        deleteTag: c,
        handleDeleteTooltipTag: ie,
        deleteSelected: g,
        handleOptionSelect: b,
        scrollToOption: y,
        inputWidth: j,
        selected: Se,
        inputLength: ct,
        filteredOptionsCount: bt,
        visible: D,
        selectedLabel: _,
        hoverIndex: ee,
        query: Q,
        inputHovering: de,
        currentPlaceholder: $e,
        menuVisibleOnFocus: ke,
        isOnComposition: ft,
        options: Be,
        resetInputHeight: p,
        managePlaceholder: S,
        showClose: O,
        selectDisabled: $,
        iconComponent: F,
        iconReverse: k,
        showNewOption: V,
        emptyText: z,
        toggleLastOptionHitState: I,
        resetInputState: K,
        handleComposition: re,
        handleMenuEnter: ye,
        handleFocus: ue,
        focus: T,
        blur: W,
        handleBlur: Y,
        handleClearClick: Z,
        handleClose: pe,
        handleKeydownEscape: me,
        toggleMenu: Ae,
        selectOption: Ce,
        getValueKey: B,
        navigateOptions: q,
        dropMenuVisible: J,
        reference: we,
        input: Ne,
        iOSInput: ht,
        tooltipRef: st,
        popperPaneRef: Ct,
        tags: gt,
        selectWrapper: mt,
        scrollbar: et,
        wrapperKls: It,
        tagsKls: E,
        tagWrapperKls: L,
        inputKls: N,
        iOSInputKls: X,
        scrollbarKls: We,
        selectTagsStyle: R,
        nsSelect: n,
        tagTextStyle: He,
        inputStyle: yt,
        handleMouseEnter: Mt,
        handleMouseLeave: dt,
        showTagList: Rt,
        collapseTagList: xt,
        tagTooltipRef: ut,
      };
    },
  }),
  zp = ['disabled', 'autocomplete', 'aria-label'],
  Bp = ['disabled'],
  Hp = {
    style: {
      height: '100%',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    },
  };
function Dp(e, t, n, l, r, a) {
  const o = Le('el-tag'),
    i = Le('el-tooltip'),
    s = Le('el-icon'),
    u = Le('el-input'),
    d = Le('el-option'),
    f = Le('el-options'),
    m = Le('el-scrollbar'),
    C = Le('el-select-menu'),
    h = _l('click-outside');
  return Ue(
    (A(),
    H(
      'div',
      {
        ref: 'selectWrapper',
        class: M(e.wrapperKls),
        onMouseenter:
          t[22] ||
          (t[22] = (...c) => e.handleMouseEnter && e.handleMouseEnter(...c)),
        onMouseleave:
          t[23] ||
          (t[23] = (...c) => e.handleMouseLeave && e.handleMouseLeave(...c)),
        onClick:
          t[24] ||
          (t[24] = qe((...c) => e.toggleMenu && e.toggleMenu(...c), ['stop'])),
      },
      [
        Oe(
          i,
          {
            ref: 'tooltipRef',
            visible: e.dropMenuVisible,
            placement: e.placement,
            teleported: e.teleported,
            'popper-class': [e.nsSelect.e('popper'), e.popperClass],
            'popper-options': e.popperOptions,
            'fallback-placements': [
              'bottom-start',
              'top-start',
              'right',
              'left',
            ],
            effect: e.effect,
            pure: '',
            trigger: 'click',
            transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
            'stop-popper-mouse-event': !1,
            'gpu-acceleration': !1,
            persistent: e.persistent,
            onShow: e.handleMenuEnter,
          },
          {
            default: te(() => [
              le(
                'div',
                {
                  class: 'select-trigger',
                  onMouseenter:
                    t[20] || (t[20] = (c) => (e.inputHovering = !0)),
                  onMouseleave:
                    t[21] || (t[21] = (c) => (e.inputHovering = !1)),
                },
                [
                  e.multiple
                    ? (A(),
                      H(
                        'div',
                        {
                          key: 0,
                          ref: 'tags',
                          tabindex: '-1',
                          class: M(e.tagsKls),
                          style: Fe(e.selectTagsStyle),
                          onClick:
                            t[15] ||
                            (t[15] = (...c) => e.focus && e.focus(...c)),
                        },
                        [
                          e.collapseTags && e.selected.length
                            ? (A(),
                              ne(
                                vl,
                                { key: 0, onAfterLeave: e.resetInputHeight },
                                {
                                  default: te(() => [
                                    le(
                                      'span',
                                      { class: M(e.tagWrapperKls) },
                                      [
                                        (A(!0),
                                        H(
                                          _e,
                                          null,
                                          Ht(
                                            e.showTagList,
                                            (c) => (
                                              A(),
                                              ne(
                                                o,
                                                {
                                                  key: e.getValueKey(c),
                                                  closable:
                                                    !e.selectDisabled &&
                                                    !c.isDisabled,
                                                  size: e.collapseTagSize,
                                                  hit: c.hitState,
                                                  type: e.tagType,
                                                  'disable-transitions': '',
                                                  onClose: (g) =>
                                                    e.deleteTag(g, c),
                                                },
                                                {
                                                  default: te(() => [
                                                    le(
                                                      'span',
                                                      {
                                                        class: M(
                                                          e.nsSelect.e(
                                                            'tags-text',
                                                          ),
                                                        ),
                                                        style: Fe(
                                                          e.tagTextStyle,
                                                        ),
                                                      },
                                                      he(c.currentLabel),
                                                      7,
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                [
                                                  'closable',
                                                  'size',
                                                  'hit',
                                                  'type',
                                                  'onClose',
                                                ],
                                              )
                                            ),
                                          ),
                                          128,
                                        )),
                                        e.selected.length > e.maxCollapseTags
                                          ? (A(),
                                            ne(
                                              o,
                                              {
                                                key: 0,
                                                closable: !1,
                                                size: e.collapseTagSize,
                                                type: e.tagType,
                                                'disable-transitions': '',
                                              },
                                              {
                                                default: te(() => [
                                                  e.collapseTagsTooltip
                                                    ? (A(),
                                                      ne(
                                                        i,
                                                        {
                                                          key: 0,
                                                          ref: 'tagTooltipRef',
                                                          disabled:
                                                            e.dropMenuVisible,
                                                          'fallback-placements':
                                                            [
                                                              'bottom',
                                                              'top',
                                                              'right',
                                                              'left',
                                                            ],
                                                          effect: e.effect,
                                                          placement: 'bottom',
                                                          teleported:
                                                            e.teleported,
                                                        },
                                                        {
                                                          default: te(() => [
                                                            le(
                                                              'span',
                                                              {
                                                                class: M(
                                                                  e.nsSelect.e(
                                                                    'tags-text',
                                                                  ),
                                                                ),
                                                              },
                                                              '+ ' +
                                                                he(
                                                                  e.selected
                                                                    .length -
                                                                    e.maxCollapseTags,
                                                                ),
                                                              3,
                                                            ),
                                                          ]),
                                                          content: te(() => [
                                                            le(
                                                              'div',
                                                              {
                                                                class: M(
                                                                  e.nsSelect.e(
                                                                    'collapse-tags',
                                                                  ),
                                                                ),
                                                              },
                                                              [
                                                                (A(!0),
                                                                H(
                                                                  _e,
                                                                  null,
                                                                  Ht(
                                                                    e.collapseTagList,
                                                                    (c) => (
                                                                      A(),
                                                                      H(
                                                                        'div',
                                                                        {
                                                                          key: e.getValueKey(
                                                                            c,
                                                                          ),
                                                                          class:
                                                                            M(
                                                                              e.nsSelect.e(
                                                                                'collapse-tag',
                                                                              ),
                                                                            ),
                                                                        },
                                                                        [
                                                                          Oe(
                                                                            o,
                                                                            {
                                                                              class:
                                                                                'in-tooltip',
                                                                              closable:
                                                                                !e.selectDisabled &&
                                                                                !c.isDisabled,
                                                                              size: e.collapseTagSize,
                                                                              hit: c.hitState,
                                                                              type: e.tagType,
                                                                              'disable-transitions':
                                                                                '',
                                                                              style:
                                                                                {
                                                                                  margin:
                                                                                    '2px',
                                                                                },
                                                                              onClose:
                                                                                (
                                                                                  g,
                                                                                ) =>
                                                                                  e.handleDeleteTooltipTag(
                                                                                    g,
                                                                                    c,
                                                                                  ),
                                                                            },
                                                                            {
                                                                              default:
                                                                                te(
                                                                                  () => [
                                                                                    le(
                                                                                      'span',
                                                                                      {
                                                                                        class:
                                                                                          M(
                                                                                            e.nsSelect.e(
                                                                                              'tags-text',
                                                                                            ),
                                                                                          ),
                                                                                        style:
                                                                                          Fe(
                                                                                            {
                                                                                              maxWidth:
                                                                                                e.inputWidth -
                                                                                                75 +
                                                                                                'px',
                                                                                            },
                                                                                          ),
                                                                                      },
                                                                                      he(
                                                                                        c.currentLabel,
                                                                                      ),
                                                                                      7,
                                                                                    ),
                                                                                  ],
                                                                                ),
                                                                              _: 2,
                                                                            },
                                                                            1032,
                                                                            [
                                                                              'closable',
                                                                              'size',
                                                                              'hit',
                                                                              'type',
                                                                              'onClose',
                                                                            ],
                                                                          ),
                                                                        ],
                                                                        2,
                                                                      )
                                                                    ),
                                                                  ),
                                                                  128,
                                                                )),
                                                              ],
                                                              2,
                                                            ),
                                                          ]),
                                                          _: 1,
                                                        },
                                                        8,
                                                        [
                                                          'disabled',
                                                          'effect',
                                                          'teleported',
                                                        ],
                                                      ))
                                                    : (A(),
                                                      H(
                                                        'span',
                                                        {
                                                          key: 1,
                                                          class: M(
                                                            e.nsSelect.e(
                                                              'tags-text',
                                                            ),
                                                          ),
                                                        },
                                                        '+ ' +
                                                          he(
                                                            e.selected.length -
                                                              e.maxCollapseTags,
                                                          ),
                                                        3,
                                                      )),
                                                ]),
                                                _: 1,
                                              },
                                              8,
                                              ['size', 'type'],
                                            ))
                                          : U('v-if', !0),
                                      ],
                                      2,
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ['onAfterLeave'],
                              ))
                            : U('v-if', !0),
                          e.collapseTags
                            ? U('v-if', !0)
                            : (A(),
                              ne(
                                vl,
                                { key: 1, onAfterLeave: e.resetInputHeight },
                                {
                                  default: te(() => [
                                    le(
                                      'span',
                                      {
                                        class: M(e.tagWrapperKls),
                                        style: Fe(
                                          e.prefixWidth && e.selected.length
                                            ? {
                                                marginLeft: `${e.prefixWidth}px`,
                                              }
                                            : '',
                                        ),
                                      },
                                      [
                                        (A(!0),
                                        H(
                                          _e,
                                          null,
                                          Ht(
                                            e.selected,
                                            (c) => (
                                              A(),
                                              ne(
                                                o,
                                                {
                                                  key: e.getValueKey(c),
                                                  closable:
                                                    !e.selectDisabled &&
                                                    !c.isDisabled,
                                                  size: e.collapseTagSize,
                                                  hit: c.hitState,
                                                  type: e.tagType,
                                                  'disable-transitions': '',
                                                  onClose: (g) =>
                                                    e.deleteTag(g, c),
                                                },
                                                {
                                                  default: te(() => [
                                                    le(
                                                      'span',
                                                      {
                                                        class: M(
                                                          e.nsSelect.e(
                                                            'tags-text',
                                                          ),
                                                        ),
                                                        style: Fe({
                                                          maxWidth:
                                                            e.inputWidth -
                                                            75 +
                                                            'px',
                                                        }),
                                                      },
                                                      he(c.currentLabel),
                                                      7,
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                [
                                                  'closable',
                                                  'size',
                                                  'hit',
                                                  'type',
                                                  'onClose',
                                                ],
                                              )
                                            ),
                                          ),
                                          128,
                                        )),
                                      ],
                                      6,
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ['onAfterLeave'],
                              )),
                          e.filterable && !e.selectDisabled
                            ? Ue(
                                (A(),
                                H(
                                  'input',
                                  {
                                    key: 2,
                                    ref: 'input',
                                    'onUpdate:modelValue':
                                      t[0] || (t[0] = (c) => (e.query = c)),
                                    type: 'text',
                                    class: M(e.inputKls),
                                    disabled: e.selectDisabled,
                                    autocomplete: e.autocomplete,
                                    style: Fe(e.inputStyle),
                                    'aria-label': e.ariaLabel,
                                    onFocus:
                                      t[1] ||
                                      (t[1] = (...c) =>
                                        e.handleFocus && e.handleFocus(...c)),
                                    onBlur:
                                      t[2] ||
                                      (t[2] = (...c) =>
                                        e.handleBlur && e.handleBlur(...c)),
                                    onKeyup:
                                      t[3] ||
                                      (t[3] = (...c) =>
                                        e.managePlaceholder &&
                                        e.managePlaceholder(...c)),
                                    onKeydown: [
                                      t[4] ||
                                        (t[4] = (...c) =>
                                          e.resetInputState &&
                                          e.resetInputState(...c)),
                                      t[5] ||
                                        (t[5] = Ze(
                                          qe(
                                            (c) => e.navigateOptions('next'),
                                            ['prevent'],
                                          ),
                                          ['down'],
                                        )),
                                      t[6] ||
                                        (t[6] = Ze(
                                          qe(
                                            (c) => e.navigateOptions('prev'),
                                            ['prevent'],
                                          ),
                                          ['up'],
                                        )),
                                      t[7] ||
                                        (t[7] = Ze(
                                          (...c) =>
                                            e.handleKeydownEscape &&
                                            e.handleKeydownEscape(...c),
                                          ['esc'],
                                        )),
                                      t[8] ||
                                        (t[8] = Ze(
                                          qe(
                                            (...c) =>
                                              e.selectOption &&
                                              e.selectOption(...c),
                                            ['stop', 'prevent'],
                                          ),
                                          ['enter'],
                                        )),
                                      t[9] ||
                                        (t[9] = Ze(
                                          (...c) =>
                                            e.deletePrevTag &&
                                            e.deletePrevTag(...c),
                                          ['delete'],
                                        )),
                                      t[10] ||
                                        (t[10] = Ze(
                                          (c) => (e.visible = !1),
                                          ['tab'],
                                        )),
                                    ],
                                    onCompositionstart:
                                      t[11] ||
                                      (t[11] = (...c) =>
                                        e.handleComposition &&
                                        e.handleComposition(...c)),
                                    onCompositionupdate:
                                      t[12] ||
                                      (t[12] = (...c) =>
                                        e.handleComposition &&
                                        e.handleComposition(...c)),
                                    onCompositionend:
                                      t[13] ||
                                      (t[13] = (...c) =>
                                        e.handleComposition &&
                                        e.handleComposition(...c)),
                                    onInput:
                                      t[14] ||
                                      (t[14] = (...c) =>
                                        e.debouncedQueryChange &&
                                        e.debouncedQueryChange(...c)),
                                  },
                                  null,
                                  46,
                                  zp,
                                )),
                                [[Uo, e.query]],
                              )
                            : U('v-if', !0),
                        ],
                        6,
                      ))
                    : U('v-if', !0),
                  U(
                    ' fix: https://github.com/element-plus/element-plus/issues/11415 ',
                  ),
                  e.isIOS && !e.multiple && e.filterable && e.readonly
                    ? (A(),
                      H(
                        'input',
                        {
                          key: 1,
                          ref: 'iOSInput',
                          class: M(e.iOSInputKls),
                          disabled: e.selectDisabled,
                          type: 'text',
                        },
                        null,
                        10,
                        Bp,
                      ))
                    : U('v-if', !0),
                  Oe(
                    u,
                    {
                      id: e.id,
                      ref: 'reference',
                      modelValue: e.selectedLabel,
                      'onUpdate:modelValue':
                        t[16] || (t[16] = (c) => (e.selectedLabel = c)),
                      type: 'text',
                      placeholder:
                        typeof e.currentPlaceholder == 'function'
                          ? e.currentPlaceholder()
                          : e.currentPlaceholder,
                      name: e.name,
                      autocomplete: e.autocomplete,
                      size: e.selectSize,
                      disabled: e.selectDisabled,
                      readonly: e.readonly,
                      'validate-event': !1,
                      class: M([e.nsSelect.is('focus', e.visible)]),
                      tabindex: e.multiple && e.filterable ? -1 : void 0,
                      label: e.ariaLabel,
                      onFocus: e.handleFocus,
                      onBlur: e.handleBlur,
                      onInput: e.debouncedOnInputChange,
                      onPaste: e.debouncedOnInputChange,
                      onCompositionstart: e.handleComposition,
                      onCompositionupdate: e.handleComposition,
                      onCompositionend: e.handleComposition,
                      onKeydown: [
                        t[17] ||
                          (t[17] = Ze(
                            qe(
                              (c) => e.navigateOptions('next'),
                              ['stop', 'prevent'],
                            ),
                            ['down'],
                          )),
                        t[18] ||
                          (t[18] = Ze(
                            qe(
                              (c) => e.navigateOptions('prev'),
                              ['stop', 'prevent'],
                            ),
                            ['up'],
                          )),
                        Ze(qe(e.selectOption, ['stop', 'prevent']), ['enter']),
                        Ze(e.handleKeydownEscape, ['esc']),
                        t[19] || (t[19] = Ze((c) => (e.visible = !1), ['tab'])),
                      ],
                    },
                    Go(
                      {
                        suffix: te(() => [
                          e.iconComponent && !e.showClose
                            ? (A(),
                              ne(
                                s,
                                {
                                  key: 0,
                                  class: M([
                                    e.nsSelect.e('caret'),
                                    e.nsSelect.e('icon'),
                                    e.iconReverse,
                                  ]),
                                },
                                {
                                  default: te(() => [
                                    (A(), ne(lt(e.iconComponent))),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ['class'],
                              ))
                            : U('v-if', !0),
                          e.showClose && e.clearIcon
                            ? (A(),
                              ne(
                                s,
                                {
                                  key: 1,
                                  class: M([
                                    e.nsSelect.e('caret'),
                                    e.nsSelect.e('icon'),
                                  ]),
                                  onClick: e.handleClearClick,
                                },
                                {
                                  default: te(() => [
                                    (A(), ne(lt(e.clearIcon))),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ['class', 'onClick'],
                              ))
                            : U('v-if', !0),
                        ]),
                        _: 2,
                      },
                      [
                        e.$slots.prefix
                          ? {
                              name: 'prefix',
                              fn: te(() => [
                                le('div', Hp, [Te(e.$slots, 'prefix')]),
                              ]),
                            }
                          : void 0,
                      ],
                    ),
                    1032,
                    [
                      'id',
                      'modelValue',
                      'placeholder',
                      'name',
                      'autocomplete',
                      'size',
                      'disabled',
                      'readonly',
                      'class',
                      'tabindex',
                      'label',
                      'onFocus',
                      'onBlur',
                      'onInput',
                      'onPaste',
                      'onCompositionstart',
                      'onCompositionupdate',
                      'onCompositionend',
                      'onKeydown',
                    ],
                  ),
                ],
                32,
              ),
            ]),
            content: te(() => [
              Oe(C, null, {
                default: te(() => [
                  Ue(
                    Oe(
                      m,
                      {
                        ref: 'scrollbar',
                        tag: 'ul',
                        'wrap-class': e.nsSelect.be('dropdown', 'wrap'),
                        'view-class': e.nsSelect.be('dropdown', 'list'),
                        class: M(e.scrollbarKls),
                      },
                      {
                        default: te(() => [
                          e.showNewOption
                            ? (A(),
                              ne(
                                d,
                                { key: 0, value: e.query, created: !0 },
                                null,
                                8,
                                ['value'],
                              ))
                            : U('v-if', !0),
                          Oe(
                            f,
                            { onUpdateOptions: e.onOptionsRendered },
                            {
                              default: te(() => [Te(e.$slots, 'default')]),
                              _: 3,
                            },
                            8,
                            ['onUpdateOptions'],
                          ),
                        ]),
                        _: 3,
                      },
                      8,
                      ['wrap-class', 'view-class', 'class'],
                    ),
                    [[tn, e.options.size > 0 && !e.loading]],
                  ),
                  e.emptyText &&
                  (!e.allowCreate ||
                    e.loading ||
                    (e.allowCreate && e.options.size === 0))
                    ? (A(),
                      H(
                        _e,
                        { key: 0 },
                        [
                          e.$slots.empty
                            ? Te(e.$slots, 'empty', { key: 0 })
                            : (A(),
                              H(
                                'p',
                                {
                                  key: 1,
                                  class: M(e.nsSelect.be('dropdown', 'empty')),
                                },
                                he(e.emptyText),
                                3,
                              )),
                        ],
                        64,
                      ))
                    : U('v-if', !0),
                ]),
                _: 3,
              }),
            ]),
            _: 3,
          },
          8,
          [
            'visible',
            'placement',
            'teleported',
            'popper-class',
            'popper-options',
            'effect',
            'transition',
            'persistent',
            'onShow',
          ],
        ),
      ],
      34,
    )),
    [[h, e.handleClose, e.popperPaneRef]],
  );
}
var qp = Re(Wp, [
  ['render', Dp],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue',
  ],
]);
const Vp = ae({
  name: 'ElOptionGroup',
  componentName: 'ElOptionGroup',
  props: { label: String, disabled: Boolean },
  setup(e) {
    const t = ce('select'),
      n = P(!0),
      l = Pe(),
      r = P([]);
    _t(bo, dn({ ...Ut(e) }));
    const a = xe(rl);
    it(() => {
      r.value = o(l.subTree);
    });
    const o = (s) => {
        const u = [];
        return (
          Array.isArray(s.children) &&
            s.children.forEach((d) => {
              var f;
              d.type &&
              d.type.name === 'ElOption' &&
              d.component &&
              d.component.proxy
                ? u.push(d.component.proxy)
                : (f = d.children) != null && f.length && u.push(...o(d));
            }),
          u
        );
      },
      { groupQueryChange: i } = nn(a);
    return (
      se(
        i,
        () => {
          n.value = r.value.some((s) => s.visible === !0);
        },
        { flush: 'post' },
      ),
      { visible: n, ns: t }
    );
  },
});
function jp(e, t, n, l, r, a) {
  return Ue(
    (A(),
    H(
      'ul',
      { class: M(e.ns.be('group', 'wrap')) },
      [
        le('li', { class: M(e.ns.be('group', 'title')) }, he(e.label), 3),
        le('li', null, [
          le('ul', { class: M(e.ns.b('group')) }, [Te(e.$slots, 'default')], 2),
        ]),
      ],
      2,
    )),
    [[tn, e.visible]],
  );
}
var yo = Re(Vp, [
  ['render', jp],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue',
  ],
]);
const Kp = Gt(qp, { Option: ar, OptionGroup: yo }),
  _p = cn(ar);
cn(yo);
const or = () => xe(mo, {}),
  Up = Qe({
    pageSize: { type: Number, required: !0 },
    pageSizes: {
      type: Et(Array),
      default: () => Vl([10, 20, 30, 40, 50, 100]),
    },
    popperClass: { type: String },
    disabled: Boolean,
    teleported: Boolean,
    size: { type: String, values: un },
  }),
  Gp = ae({ name: 'ElPaginationSizes' }),
  Yp = ae({
    ...Gp,
    props: Up,
    emits: ['page-size-change'],
    setup(e, { emit: t }) {
      const n = e,
        { t: l } = Je(),
        r = ce('pagination'),
        a = or(),
        o = P(n.pageSize);
      se(
        () => n.pageSizes,
        (u, d) => {
          if (!Zn(u, d) && Array.isArray(u)) {
            const f = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
            t('page-size-change', f);
          }
        },
      ),
        se(
          () => n.pageSize,
          (u) => {
            o.value = u;
          },
        );
      const i = x(() => n.pageSizes);
      function s(u) {
        var d;
        u !== o.value &&
          ((o.value = u),
          (d = a.handleSizeChange) == null || d.call(a, Number(u)));
      }
      return (u, d) => (
        A(),
        H(
          'span',
          { class: M(v(r).e('sizes')) },
          [
            Oe(
              v(Kp),
              {
                'model-value': o.value,
                disabled: u.disabled,
                'popper-class': u.popperClass,
                size: u.size,
                teleported: u.teleported,
                'validate-event': !1,
                onChange: s,
              },
              {
                default: te(() => [
                  (A(!0),
                  H(
                    _e,
                    null,
                    Ht(
                      v(i),
                      (f) => (
                        A(),
                        ne(
                          v(_p),
                          {
                            key: f,
                            value: f,
                            label: f + v(l)('el.pagination.pagesize'),
                          },
                          null,
                          8,
                          ['value', 'label'],
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                _: 1,
              },
              8,
              ['model-value', 'disabled', 'popper-class', 'size', 'teleported'],
            ),
          ],
          2,
        )
      );
    },
  });
var Xp = Re(Yp, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue',
  ],
]);
const Qp = Qe({ size: { type: String, values: un } }),
  Zp = ['disabled'],
  Jp = ae({ name: 'ElPaginationJumper' }),
  ev = ae({
    ...Jp,
    props: Qp,
    setup(e) {
      const { t } = Je(),
        n = ce('pagination'),
        { pageCount: l, disabled: r, currentPage: a, changeEvent: o } = or(),
        i = P(),
        s = x(() => {
          var f;
          return (f = i.value) != null ? f : a == null ? void 0 : a.value;
        });
      function u(f) {
        i.value = f ? +f : '';
      }
      function d(f) {
        (f = Math.trunc(+f)), o == null || o(f), (i.value = void 0);
      }
      return (f, m) => (
        A(),
        H(
          'span',
          { class: M(v(n).e('jump')), disabled: v(r) },
          [
            le(
              'span',
              { class: M([v(n).e('goto')]) },
              he(v(t)('el.pagination.goto')),
              3,
            ),
            Oe(
              v(to),
              {
                size: f.size,
                class: M([v(n).e('editor'), v(n).is('in-pagination')]),
                min: 1,
                max: v(l),
                disabled: v(r),
                'model-value': v(s),
                'validate-event': !1,
                label: v(t)('el.pagination.page'),
                type: 'number',
                'onUpdate:modelValue': u,
                onChange: d,
              },
              null,
              8,
              ['size', 'class', 'max', 'disabled', 'model-value', 'label'],
            ),
            le(
              'span',
              { class: M([v(n).e('classifier')]) },
              he(v(t)('el.pagination.pageClassifier')),
              3,
            ),
          ],
          10,
          Zp,
        )
      );
    },
  });
var tv = Re(ev, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue',
  ],
]);
const nv = Qe({ total: { type: Number, default: 1e3 } }),
  lv = ['disabled'],
  rv = ae({ name: 'ElPaginationTotal' }),
  av = ae({
    ...rv,
    props: nv,
    setup(e) {
      const { t } = Je(),
        n = ce('pagination'),
        { disabled: l } = or();
      return (r, a) => (
        A(),
        H(
          'span',
          { class: M(v(n).e('total')), disabled: v(l) },
          he(v(t)('el.pagination.total', { total: r.total })),
          11,
          lv,
        )
      );
    },
  });
var ov = Re(av, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue',
  ],
]);
const iv = Qe({
    currentPage: { type: Number, default: 1 },
    pageCount: { type: Number, required: !0 },
    pagerCount: { type: Number, default: 7 },
    disabled: Boolean,
  }),
  sv = ['onKeyup'],
  uv = ['aria-current', 'aria-label', 'tabindex'],
  dv = ['tabindex', 'aria-label'],
  cv = ['aria-current', 'aria-label', 'tabindex'],
  fv = ['tabindex', 'aria-label'],
  pv = ['aria-current', 'aria-label', 'tabindex'],
  vv = ae({ name: 'ElPaginationPager' }),
  hv = ae({
    ...vv,
    props: iv,
    emits: ['change'],
    setup(e, { emit: t }) {
      const n = e,
        l = ce('pager'),
        r = ce('icon'),
        { t: a } = Je(),
        o = P(!1),
        i = P(!1),
        s = P(!1),
        u = P(!1),
        d = P(!1),
        f = P(!1),
        m = x(() => {
          const p = n.pagerCount,
            S = (p - 1) / 2,
            O = Number(n.currentPage),
            $ = Number(n.pageCount);
          let F = !1,
            k = !1;
          $ > p && (O > p - S && (F = !0), O < $ - S && (k = !0));
          const V = [];
          if (F && !k) {
            const z = $ - (p - 2);
            for (let I = z; I < $; I++) V.push(I);
          } else if (!F && k) for (let z = 2; z < p; z++) V.push(z);
          else if (F && k) {
            const z = Math.floor(p / 2) - 1;
            for (let I = O - z; I <= O + z; I++) V.push(I);
          } else for (let z = 2; z < $; z++) V.push(z);
          return V;
        }),
        C = x(() => [
          'more',
          'btn-quickprev',
          r.b(),
          l.is('disabled', n.disabled),
        ]),
        h = x(() => [
          'more',
          'btn-quicknext',
          r.b(),
          l.is('disabled', n.disabled),
        ]),
        c = x(() => (n.disabled ? -1 : 0));
      Qt(() => {
        const p = (n.pagerCount - 1) / 2;
        (o.value = !1),
          (i.value = !1),
          n.pageCount > n.pagerCount &&
            (n.currentPage > n.pagerCount - p && (o.value = !0),
            n.currentPage < n.pageCount - p && (i.value = !0));
      });
      function g(p = !1) {
        n.disabled || (p ? (s.value = !0) : (u.value = !0));
      }
      function b(p = !1) {
        p ? (d.value = !0) : (f.value = !0);
      }
      function y(p) {
        const S = p.target;
        if (
          S.tagName.toLowerCase() === 'li' &&
          Array.from(S.classList).includes('number')
        ) {
          const O = Number(S.textContent);
          O !== n.currentPage && t('change', O);
        } else
          S.tagName.toLowerCase() === 'li' &&
            Array.from(S.classList).includes('more') &&
            w(p);
      }
      function w(p) {
        const S = p.target;
        if (S.tagName.toLowerCase() === 'ul' || n.disabled) return;
        let O = Number(S.textContent);
        const $ = n.pageCount,
          F = n.currentPage,
          k = n.pagerCount - 2;
        S.className.includes('more') &&
          (S.className.includes('quickprev')
            ? (O = F - k)
            : S.className.includes('quicknext') && (O = F + k)),
          Number.isNaN(+O) || (O < 1 && (O = 1), O > $ && (O = $)),
          O !== F && t('change', O);
      }
      return (p, S) => (
        A(),
        H(
          'ul',
          { class: M(v(l).b()), onClick: w, onKeyup: Ze(y, ['enter']) },
          [
            p.pageCount > 0
              ? (A(),
                H(
                  'li',
                  {
                    key: 0,
                    class: M([
                      [
                        v(l).is('active', p.currentPage === 1),
                        v(l).is('disabled', p.disabled),
                      ],
                      'number',
                    ]),
                    'aria-current': p.currentPage === 1,
                    'aria-label': v(a)('el.pagination.currentPage', {
                      pager: 1,
                    }),
                    tabindex: v(c),
                  },
                  ' 1 ',
                  10,
                  uv,
                ))
              : U('v-if', !0),
            o.value
              ? (A(),
                H(
                  'li',
                  {
                    key: 1,
                    class: M(v(C)),
                    tabindex: v(c),
                    'aria-label': v(a)('el.pagination.prevPages', {
                      pager: p.pagerCount - 2,
                    }),
                    onMouseenter: S[0] || (S[0] = (O) => g(!0)),
                    onMouseleave: S[1] || (S[1] = (O) => (s.value = !1)),
                    onFocus: S[2] || (S[2] = (O) => b(!0)),
                    onBlur: S[3] || (S[3] = (O) => (d.value = !1)),
                  },
                  [
                    (s.value || d.value) && !p.disabled
                      ? (A(), ne(v(Yo), { key: 0 }))
                      : (A(), ne(v(hr), { key: 1 })),
                  ],
                  42,
                  dv,
                ))
              : U('v-if', !0),
            (A(!0),
            H(
              _e,
              null,
              Ht(
                v(m),
                (O) => (
                  A(),
                  H(
                    'li',
                    {
                      key: O,
                      class: M([
                        [
                          v(l).is('active', p.currentPage === O),
                          v(l).is('disabled', p.disabled),
                        ],
                        'number',
                      ]),
                      'aria-current': p.currentPage === O,
                      'aria-label': v(a)('el.pagination.currentPage', {
                        pager: O,
                      }),
                      tabindex: v(c),
                    },
                    he(O),
                    11,
                    cv,
                  )
                ),
              ),
              128,
            )),
            i.value
              ? (A(),
                H(
                  'li',
                  {
                    key: 2,
                    class: M(v(h)),
                    tabindex: v(c),
                    'aria-label': v(a)('el.pagination.nextPages', {
                      pager: p.pagerCount - 2,
                    }),
                    onMouseenter: S[4] || (S[4] = (O) => g()),
                    onMouseleave: S[5] || (S[5] = (O) => (u.value = !1)),
                    onFocus: S[6] || (S[6] = (O) => b()),
                    onBlur: S[7] || (S[7] = (O) => (f.value = !1)),
                  },
                  [
                    (u.value || f.value) && !p.disabled
                      ? (A(), ne(v(Xo), { key: 0 }))
                      : (A(), ne(v(hr), { key: 1 })),
                  ],
                  42,
                  fv,
                ))
              : U('v-if', !0),
            p.pageCount > 1
              ? (A(),
                H(
                  'li',
                  {
                    key: 3,
                    class: M([
                      [
                        v(l).is('active', p.currentPage === p.pageCount),
                        v(l).is('disabled', p.disabled),
                      ],
                      'number',
                    ]),
                    'aria-current': p.currentPage === p.pageCount,
                    'aria-label': v(a)('el.pagination.currentPage', {
                      pager: p.pageCount,
                    }),
                    tabindex: v(c),
                  },
                  he(p.pageCount),
                  11,
                  pv,
                ))
              : U('v-if', !0),
          ],
          42,
          sv,
        )
      );
    },
  });
var gv = Re(hv, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue',
  ],
]);
const De = (e) => typeof e != 'number',
  mv = Qe({
    pageSize: Number,
    defaultPageSize: Number,
    total: Number,
    pageCount: Number,
    pagerCount: {
      type: Number,
      validator: (e) =>
        Ge(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
      default: 7,
    },
    currentPage: Number,
    defaultCurrentPage: Number,
    layout: {
      type: String,
      default: ['prev', 'pager', 'next', 'jumper', '->', 'total'].join(', '),
    },
    pageSizes: {
      type: Et(Array),
      default: () => Vl([10, 20, 30, 40, 50, 100]),
    },
    popperClass: { type: String, default: '' },
    prevText: { type: String, default: '' },
    prevIcon: { type: At, default: () => Qo },
    nextText: { type: String, default: '' },
    nextIcon: { type: At, default: () => Ul },
    teleported: { type: Boolean, default: !0 },
    small: Boolean,
    background: Boolean,
    disabled: Boolean,
    hideOnSinglePage: Boolean,
  }),
  bv = {
    'update:current-page': (e) => Ge(e),
    'update:page-size': (e) => Ge(e),
    'size-change': (e) => Ge(e),
    'current-change': (e) => Ge(e),
    'prev-click': (e) => Ge(e),
    'next-click': (e) => Ge(e),
  },
  na = 'ElPagination';
var yv = ae({
  name: na,
  props: mv,
  emits: bv,
  setup(e, { emit: t, slots: n }) {
    const { t: l } = Je(),
      r = ce('pagination'),
      a = Pe().vnode.props || {},
      o =
        'onUpdate:currentPage' in a ||
        'onUpdate:current-page' in a ||
        'onCurrentChange' in a,
      i =
        'onUpdate:pageSize' in a ||
        'onUpdate:page-size' in a ||
        'onSizeChange' in a,
      s = x(() => {
        if ((De(e.total) && De(e.pageCount)) || (!De(e.currentPage) && !o))
          return !1;
        if (e.layout.includes('sizes')) {
          if (De(e.pageCount)) {
            if (!De(e.total) && !De(e.pageSize) && !i) return !1;
          } else if (!i) return !1;
        }
        return !0;
      }),
      u = P(De(e.defaultPageSize) ? 10 : e.defaultPageSize),
      d = P(De(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage),
      f = x({
        get() {
          return De(e.pageSize) ? u.value : e.pageSize;
        },
        set(w) {
          De(e.pageSize) && (u.value = w),
            i && (t('update:page-size', w), t('size-change', w));
        },
      }),
      m = x(() => {
        let w = 0;
        return (
          De(e.pageCount)
            ? De(e.total) || (w = Math.max(1, Math.ceil(e.total / f.value)))
            : (w = e.pageCount),
          w
        );
      }),
      C = x({
        get() {
          return De(e.currentPage) ? d.value : e.currentPage;
        },
        set(w) {
          let p = w;
          w < 1 ? (p = 1) : w > m.value && (p = m.value),
            De(e.currentPage) && (d.value = p),
            o && (t('update:current-page', p), t('current-change', p));
        },
      });
    se(m, (w) => {
      C.value > w && (C.value = w);
    });
    function h(w) {
      C.value = w;
    }
    function c(w) {
      f.value = w;
      const p = m.value;
      C.value > p && (C.value = p);
    }
    function g() {
      e.disabled || ((C.value -= 1), t('prev-click', C.value));
    }
    function b() {
      e.disabled || ((C.value += 1), t('next-click', C.value));
    }
    function y(w, p) {
      w &&
        (w.props || (w.props = {}),
        (w.props.class = [w.props.class, p].join(' ')));
    }
    return (
      _t(mo, {
        pageCount: m,
        disabled: x(() => e.disabled),
        currentPage: C,
        changeEvent: h,
        handleSizeChange: c,
      }),
      () => {
        var w, p;
        if (!s.value)
          return qt(na, l('el.pagination.deprecationWarning')), null;
        if (!e.layout || (e.hideOnSinglePage && m.value <= 1)) return null;
        const S = [],
          O = [],
          $ = G('div', { class: r.e('rightwrapper') }, O),
          F = {
            prev: G(wp, {
              disabled: e.disabled,
              currentPage: C.value,
              prevText: e.prevText,
              prevIcon: e.prevIcon,
              onClick: g,
            }),
            jumper: G(tv, { size: e.small ? 'small' : 'default' }),
            pager: G(gv, {
              currentPage: C.value,
              pageCount: m.value,
              pagerCount: e.pagerCount,
              onChange: h,
              disabled: e.disabled,
            }),
            next: G(Tp, {
              disabled: e.disabled,
              currentPage: C.value,
              pageCount: m.value,
              nextText: e.nextText,
              nextIcon: e.nextIcon,
              onClick: b,
            }),
            sizes: G(Xp, {
              pageSize: f.value,
              pageSizes: e.pageSizes,
              popperClass: e.popperClass,
              disabled: e.disabled,
              teleported: e.teleported,
              size: e.small ? 'small' : 'default',
            }),
            slot:
              (p =
                (w = n == null ? void 0 : n.default) == null
                  ? void 0
                  : w.call(n)) != null
                ? p
                : null,
            total: G(ov, { total: De(e.total) ? 0 : e.total }),
          },
          k = e.layout.split(',').map((z) => z.trim());
        let V = !1;
        return (
          k.forEach((z) => {
            if (z === '->') {
              V = !0;
              return;
            }
            V ? O.push(F[z]) : S.push(F[z]);
          }),
          y(S[0], r.is('first')),
          y(S[S.length - 1], r.is('last')),
          V &&
            O.length > 0 &&
            (y(O[0], r.is('first')),
            y(O[O.length - 1], r.is('last')),
            S.push($)),
          G(
            'div',
            {
              class: [
                r.b(),
                r.is('background', e.background),
                { [r.m('small')]: e.small },
              ],
            },
            S,
          )
        );
      }
    );
  },
});
const Fh = Gt(yv);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */ var Cv = /["'&<>]/,
  wv = Sv;
function Sv(e) {
  var t = '' + e,
    n = Cv.exec(t);
  if (!n) return t;
  var l,
    r = '',
    a = 0,
    o = 0;
  for (a = n.index; a < t.length; a++) {
    switch (t.charCodeAt(a)) {
      case 34:
        l = '&quot;';
        break;
      case 38:
        l = '&amp;';
        break;
      case 39:
        l = '&#39;';
        break;
      case 60:
        l = '&lt;';
        break;
      case 62:
        l = '&gt;';
        break;
      default:
        continue;
    }
    o !== a && (r += t.substring(o, a)), (o = a + 1), (r += l);
  }
  return o !== a ? r + t.substring(o, a) : r;
}
const Ev = Wf(wv),
  dl = function (e) {
    var t;
    return (t = e.target) == null ? void 0 : t.closest('td');
  },
  Ov = function (e, t, n, l, r) {
    if (!t && !l && (!r || (Array.isArray(r) && !r.length))) return e;
    typeof n == 'string'
      ? (n = n === 'descending' ? -1 : 1)
      : (n = n && n < 0 ? -1 : 1);
    const a = l
        ? null
        : function (i, s) {
            return r
              ? (Array.isArray(r) || (r = [r]),
                r.map((u) => (typeof u == 'string' ? Ke(i, u) : u(i, s, e))))
              : (t !== '$key' && Vt(i) && '$value' in i && (i = i.$value),
                [Vt(i) ? Ke(i, t) : i]);
          },
      o = function (i, s) {
        if (l) return l(i.value, s.value);
        for (let u = 0, d = i.key.length; u < d; u++) {
          if (i.key[u] < s.key[u]) return -1;
          if (i.key[u] > s.key[u]) return 1;
        }
        return 0;
      };
    return e
      .map((i, s) => ({ value: i, index: s, key: a ? a(i, s) : null }))
      .sort((i, s) => {
        let u = o(i, s);
        return u || (u = i.index - s.index), u * +n;
      })
      .map((i) => i.value);
  },
  Co = function (e, t) {
    let n = null;
    return (
      e.columns.forEach((l) => {
        l.id === t && (n = l);
      }),
      n
    );
  },
  xv = function (e, t) {
    let n = null;
    for (let l = 0; l < e.columns.length; l++) {
      const r = e.columns[l];
      if (r.columnKey === t) {
        n = r;
        break;
      }
    }
    return n || va('ElTable', `No column matching with column-key: ${t}`), n;
  },
  la = function (e, t, n) {
    const l = (t.className || '').match(new RegExp(`${n}-table_[^\\s]+`, 'gm'));
    return l ? Co(e, l[0]) : null;
  },
  Ie = (e, t) => {
    if (!e) throw new Error('Row is required when get row identity');
    if (typeof t == 'string') {
      if (!t.includes('.')) return `${e[t]}`;
      const n = t.split('.');
      let l = e;
      for (const r of n) l = l[r];
      return `${l}`;
    } else if (typeof t == 'function') return t.call(null, e);
  },
  Bt = function (e, t) {
    const n = {};
    return (
      (e || []).forEach((l, r) => {
        n[Ie(l, t)] = { row: l, index: r };
      }),
      n
    );
  };
function $v(e, t) {
  const n = {};
  let l;
  for (l in e) n[l] = e[l];
  for (l in t)
    if (On(t, l)) {
      const r = t[l];
      typeof r < 'u' && (n[l] = r);
    }
  return n;
}
function ir(e) {
  return (
    e === '' ||
      (e !== void 0 &&
        ((e = Number.parseInt(e, 10)), Number.isNaN(e) && (e = ''))),
    e
  );
}
function wo(e) {
  return (
    e === '' || (e !== void 0 && ((e = ir(e)), Number.isNaN(e) && (e = 80))), e
  );
}
function Tv(e) {
  return typeof e == 'number'
    ? e
    : typeof e == 'string'
    ? /^\d+(?:px)?$/.test(e)
      ? Number.parseInt(e, 10)
      : e
    : null;
}
function Pv(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...l) =>
            t(n(...l)),
      );
}
function Cn(e, t, n) {
  let l = !1;
  const r = e.indexOf(t),
    a = r !== -1,
    o = (i) => {
      i === 'add' ? e.push(t) : e.splice(r, 1),
        (l = !0),
        Dt(t.children) &&
          t.children.forEach((s) => {
            Cn(e, s, n ?? !a);
          });
    };
  return (
    Jt(n)
      ? n && !a
        ? o('add')
        : !n && a && o('remove')
      : o(a ? 'remove' : 'add'),
    l
  );
}
function Av(e, t, n = 'children', l = 'hasChildren') {
  const r = (o) => !(Array.isArray(o) && o.length);
  function a(o, i, s) {
    t(o, i, s),
      i.forEach((u) => {
        if (u[l]) {
          t(u, null, s + 1);
          return;
        }
        const d = u[n];
        r(d) || a(u, d, s + 1);
      });
  }
  e.forEach((o) => {
    if (o[l]) {
      t(o, null, 0);
      return;
    }
    const i = o[n];
    r(i) || a(o, i, 0);
  });
}
let wt;
function Lv(e, t, n, l, r) {
  r = Xa({ enterable: !0, showArrow: !0 }, r);
  const a = e == null ? void 0 : e.dataset.prefix,
    o = e == null ? void 0 : e.querySelector(`.${a}-scrollbar__wrap`);
  function i() {
    const g = r.effect === 'light',
      b = document.createElement('div');
    return (
      (b.className = [
        `${a}-popper`,
        g ? 'is-light' : 'is-dark',
        r.popperClass || '',
      ].join(' ')),
      (n = Ev(n)),
      (b.innerHTML = n),
      (b.style.zIndex = String(l())),
      e == null || e.appendChild(b),
      b
    );
  }
  function s() {
    const g = document.createElement('div');
    return (g.className = `${a}-popper__arrow`), g;
  }
  function u() {
    d && d.update();
  }
  wt == null || wt(),
    (wt = () => {
      try {
        d && d.destroy(),
          C && (e == null || e.removeChild(C)),
          t.removeEventListener('mouseenter', f),
          t.removeEventListener('mouseleave', m),
          o == null || o.removeEventListener('scroll', wt),
          (wt = void 0);
      } catch {}
    });
  let d = null,
    f = u,
    m = wt;
  r.enterable &&
    ({ onOpen: f, onClose: m } = Zo({
      showAfter: r.showAfter,
      hideAfter: r.hideAfter,
      open: u,
      close: wt,
    }));
  const C = i();
  (C.onmouseenter = f), (C.onmouseleave = m);
  const h = [];
  if (
    (r.offset && h.push({ name: 'offset', options: { offset: [0, r.offset] } }),
    r.showArrow)
  ) {
    const g = C.appendChild(s());
    h.push({ name: 'arrow', options: { element: g, padding: 10 } });
  }
  const c = r.popperOptions || {};
  return (
    (d = Jo(t, C, {
      placement: r.placement || 'top',
      strategy: 'fixed',
      ...c,
      modifiers: c.modifiers ? h.concat(c.modifiers) : h,
    })),
    t.addEventListener('mouseenter', f),
    t.addEventListener('mouseleave', m),
    o == null || o.addEventListener('scroll', wt),
    d
  );
}
function So(e) {
  return e.children ? bc(e.children, So) : [e];
}
function ra(e, t) {
  return e + t.colSpan;
}
const Eo = (e, t, n, l) => {
    let r = 0,
      a = e;
    const o = n.states.columns.value;
    if (l) {
      const s = So(l[e]);
      (r = o.slice(0, o.indexOf(s[0])).reduce(ra, 0)),
        (a = r + s.reduce(ra, 0) - 1);
    } else r = e;
    let i;
    switch (t) {
      case 'left':
        a < n.states.fixedLeafColumnsLength.value && (i = 'left');
        break;
      case 'right':
        r >= o.length - n.states.rightFixedLeafColumnsLength.value &&
          (i = 'right');
        break;
      default:
        a < n.states.fixedLeafColumnsLength.value
          ? (i = 'left')
          : r >= o.length - n.states.rightFixedLeafColumnsLength.value &&
            (i = 'right');
    }
    return i ? { direction: i, start: r, after: a } : {};
  },
  sr = (e, t, n, l, r, a = 0) => {
    const o = [],
      { direction: i, start: s, after: u } = Eo(t, n, l, r);
    if (i) {
      const d = i === 'left';
      o.push(`${e}-fixed-column--${i}`),
        d && u + a === l.states.fixedLeafColumnsLength.value - 1
          ? o.push('is-last-column')
          : !d &&
            s - a ===
              l.states.columns.value.length -
                l.states.rightFixedLeafColumnsLength.value &&
            o.push('is-first-column');
    }
    return o;
  };
function aa(e, t) {
  return (
    e +
    (t.realWidth === null || Number.isNaN(t.realWidth)
      ? Number(t.width)
      : t.realWidth)
  );
}
const ur = (e, t, n, l) => {
    const { direction: r, start: a = 0, after: o = 0 } = Eo(e, t, n, l);
    if (!r) return;
    const i = {},
      s = r === 'left',
      u = n.states.columns.value;
    return (
      s
        ? (i.left = u.slice(0, a).reduce(aa, 0))
        : (i.right = u
            .slice(o + 1)
            .reverse()
            .reduce(aa, 0)),
      i
    );
  },
  on = (e, t) => {
    e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
  };
function Fv(e) {
  const t = Pe(),
    n = P(!1),
    l = P([]);
  return {
    updateExpandRows: () => {
      const s = e.data.value || [],
        u = e.rowKey.value;
      if (n.value) l.value = s.slice();
      else if (u) {
        const d = Bt(l.value, u);
        l.value = s.reduce((f, m) => {
          const C = Ie(m, u);
          return d[C] && f.push(m), f;
        }, []);
      } else l.value = [];
    },
    toggleRowExpansion: (s, u) => {
      Cn(l.value, s, u) && t.emit('expand-change', s, l.value.slice());
    },
    setExpandRowKeys: (s) => {
      t.store.assertRowKey();
      const u = e.data.value || [],
        d = e.rowKey.value,
        f = Bt(u, d);
      l.value = s.reduce((m, C) => {
        const h = f[C];
        return h && m.push(h.row), m;
      }, []);
    },
    isRowExpanded: (s) => {
      const u = e.rowKey.value;
      return u ? !!Bt(l.value, u)[Ie(s, u)] : l.value.includes(s);
    },
    states: { expandRows: l, defaultExpandAll: n },
  };
}
function Mv(e) {
  const t = Pe(),
    n = P(null),
    l = P(null),
    r = (u) => {
      t.store.assertRowKey(), (n.value = u), o(u);
    },
    a = () => {
      n.value = null;
    },
    o = (u) => {
      const { data: d, rowKey: f } = e;
      let m = null;
      f.value && (m = (v(d) || []).find((C) => Ie(C, f.value) === u)),
        (l.value = m),
        t.emit('current-change', l.value, null);
    };
  return {
    setCurrentRowKey: r,
    restoreCurrentRowKey: a,
    setCurrentRowByKey: o,
    updateCurrentRow: (u) => {
      const d = l.value;
      if (u && u !== d) {
        (l.value = u), t.emit('current-change', l.value, d);
        return;
      }
      !u && d && ((l.value = null), t.emit('current-change', null, d));
    },
    updateCurrentRowData: () => {
      const u = e.rowKey.value,
        d = e.data.value || [],
        f = l.value;
      if (!d.includes(f) && f) {
        if (u) {
          const m = Ie(f, u);
          o(m);
        } else l.value = null;
        l.value === null && t.emit('current-change', null, f);
      } else n.value && (o(n.value), a());
    },
    states: { _currentRowKey: n, currentRow: l },
  };
}
function Rv(e) {
  const t = P([]),
    n = P({}),
    l = P(16),
    r = P(!1),
    a = P({}),
    o = P('hasChildren'),
    i = P('children'),
    s = Pe(),
    u = x(() => {
      if (!e.rowKey.value) return {};
      const b = e.data.value || [];
      return f(b);
    }),
    d = x(() => {
      const b = e.rowKey.value,
        y = Object.keys(a.value),
        w = {};
      return (
        y.length &&
          y.forEach((p) => {
            if (a.value[p].length) {
              const S = { children: [] };
              a.value[p].forEach((O) => {
                const $ = Ie(O, b);
                S.children.push($),
                  O[o.value] && !w[$] && (w[$] = { children: [] });
              }),
                (w[p] = S);
            }
          }),
        w
      );
    }),
    f = (b) => {
      const y = e.rowKey.value,
        w = {};
      return (
        Av(
          b,
          (p, S, O) => {
            const $ = Ie(p, y);
            Array.isArray(S)
              ? (w[$] = { children: S.map((F) => Ie(F, y)), level: O })
              : r.value && (w[$] = { children: [], lazy: !0, level: O });
          },
          i.value,
          o.value,
        ),
        w
      );
    },
    m = (
      b = !1,
      y = ((w) =>
        (w = s.store) == null ? void 0 : w.states.defaultExpandAll.value)(),
    ) => {
      var w;
      const p = u.value,
        S = d.value,
        O = Object.keys(p),
        $ = {};
      if (O.length) {
        const F = v(n),
          k = [],
          V = (I, K) => {
            if (b)
              return t.value
                ? y || t.value.includes(K)
                : !!(y || (I != null && I.expanded));
            {
              const re = y || (t.value && t.value.includes(K));
              return !!((I != null && I.expanded) || re);
            }
          };
        O.forEach((I) => {
          const K = F[I],
            re = { ...p[I] };
          if (((re.expanded = V(K, I)), re.lazy)) {
            const { loaded: fe = !1, loading: ge = !1 } = K || {};
            (re.loaded = !!fe), (re.loading = !!ge), k.push(I);
          }
          $[I] = re;
        });
        const z = Object.keys(S);
        r.value &&
          z.length &&
          k.length &&
          z.forEach((I) => {
            const K = F[I],
              re = S[I].children;
            if (k.includes(I)) {
              if ($[I].children.length !== 0)
                throw new Error('[ElTable]children must be an empty array.');
              $[I].children = re;
            } else {
              const { loaded: fe = !1, loading: ge = !1 } = K || {};
              $[I] = {
                lazy: !0,
                loaded: !!fe,
                loading: !!ge,
                expanded: V(K, I),
                children: re,
                level: '',
              };
            }
          });
      }
      (n.value = $), (w = s.store) == null || w.updateTableScrollY();
    };
  se(
    () => t.value,
    () => {
      m(!0);
    },
  ),
    se(
      () => u.value,
      () => {
        m();
      },
    ),
    se(
      () => d.value,
      () => {
        m();
      },
    );
  const C = (b) => {
      (t.value = b), m();
    },
    h = (b, y) => {
      s.store.assertRowKey();
      const w = e.rowKey.value,
        p = Ie(b, w),
        S = p && n.value[p];
      if (p && S && 'expanded' in S) {
        const O = S.expanded;
        (y = typeof y > 'u' ? !S.expanded : y),
          (n.value[p].expanded = y),
          O !== y && s.emit('expand-change', b, y),
          s.store.updateTableScrollY();
      }
    },
    c = (b) => {
      s.store.assertRowKey();
      const y = e.rowKey.value,
        w = Ie(b, y),
        p = n.value[w];
      r.value && p && 'loaded' in p && !p.loaded ? g(b, w, p) : h(b, void 0);
    },
    g = (b, y, w) => {
      const { load: p } = s.props;
      p &&
        !n.value[y].loaded &&
        ((n.value[y].loading = !0),
        p(b, w, (S) => {
          if (!Array.isArray(S))
            throw new TypeError('[ElTable] data must be an array');
          (n.value[y].loading = !1),
            (n.value[y].loaded = !0),
            (n.value[y].expanded = !0),
            S.length && (a.value[y] = S),
            s.emit('expand-change', b, !0);
        }));
    };
  return {
    loadData: g,
    loadOrToggle: c,
    toggleTreeExpansion: h,
    updateTreeExpandKeys: C,
    updateTreeData: m,
    normalize: f,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: l,
      lazy: r,
      lazyTreeNodeMap: a,
      lazyColumnIdentifier: o,
      childrenColumnName: i,
    },
  };
}
const Iv = (e, t) => {
    const n = t.sortingColumn;
    return !n || typeof n.sortable == 'string'
      ? e
      : Ov(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
  },
  Un = (e) => {
    const t = [];
    return (
      e.forEach((n) => {
        n.children && n.children.length > 0
          ? t.push.apply(t, Un(n.children))
          : t.push(n);
      }),
      t
    );
  };
function Nv() {
  var e;
  const t = Pe(),
    { size: n } = Ut((e = t.proxy) == null ? void 0 : e.$props),
    l = P(null),
    r = P([]),
    a = P([]),
    o = P(!1),
    i = P([]),
    s = P([]),
    u = P([]),
    d = P([]),
    f = P([]),
    m = P([]),
    C = P([]),
    h = P([]),
    c = [],
    g = P(0),
    b = P(0),
    y = P(0),
    w = P(!1),
    p = P([]),
    S = P(!1),
    O = P(!1),
    $ = P(null),
    F = P({}),
    k = P(null),
    V = P(null),
    z = P(null),
    I = P(null),
    K = P(null);
  se(r, () => t.state && ye(!1), { deep: !0 });
  const re = () => {
      if (!l.value) throw new Error('[ElTable] prop row-key is required');
    },
    fe = (D) => {
      var _;
      (_ = D.children) == null ||
        _.forEach((ee) => {
          (ee.fixed = D.fixed), fe(ee);
        });
    },
    ge = () => {
      i.value.forEach((de) => {
        fe(de);
      }),
        (d.value = i.value.filter(
          (de) => de.fixed === !0 || de.fixed === 'left',
        )),
        (f.value = i.value.filter((de) => de.fixed === 'right')),
        d.value.length > 0 &&
          i.value[0] &&
          i.value[0].type === 'selection' &&
          !i.value[0].fixed &&
          ((i.value[0].fixed = !0), d.value.unshift(i.value[0]));
      const D = i.value.filter((de) => !de.fixed);
      s.value = [].concat(d.value).concat(D).concat(f.value);
      const _ = Un(D),
        ee = Un(d.value),
        Q = Un(f.value);
      (g.value = _.length),
        (b.value = ee.length),
        (y.value = Q.length),
        (u.value = [].concat(ee).concat(_).concat(Q)),
        (o.value = d.value.length > 0 || f.value.length > 0);
    },
    ye = (D, _ = !1) => {
      D && ge(), _ ? t.state.doLayout() : t.state.debouncedUpdateLayout();
    },
    ue = (D) => p.value.includes(D),
    T = () => {
      (w.value = !1),
        p.value.length && ((p.value = []), t.emit('selection-change', []));
    },
    W = () => {
      let D;
      if (l.value) {
        D = [];
        const _ = Bt(p.value, l.value),
          ee = Bt(r.value, l.value);
        for (const Q in _) On(_, Q) && !ee[Q] && D.push(_[Q].row);
      } else D = p.value.filter((_) => !r.value.includes(_));
      if (D.length) {
        const _ = p.value.filter((ee) => !D.includes(ee));
        (p.value = _), t.emit('selection-change', _.slice());
      }
    },
    Y = () => (p.value || []).slice(),
    Z = (D, _ = void 0, ee = !0) => {
      if (Cn(p.value, D, _)) {
        const de = (p.value || []).slice();
        ee && t.emit('select', de, D), t.emit('selection-change', de);
      }
    },
    pe = () => {
      var D, _;
      const ee = O.value ? !w.value : !(w.value || p.value.length);
      w.value = ee;
      let Q = !1,
        de = 0;
      const $e =
        (_ = (D = t == null ? void 0 : t.store) == null ? void 0 : D.states) ==
        null
          ? void 0
          : _.rowKey.value;
      r.value.forEach((ke, ft) => {
        const Be = ft + de;
        $.value
          ? $.value.call(null, ke, Be) && Cn(p.value, ke, ee) && (Q = !0)
          : Cn(p.value, ke, ee) && (Q = !0),
          (de += Ce(Ie(ke, $e)));
      }),
        Q && t.emit('selection-change', p.value ? p.value.slice() : []),
        t.emit('select-all', p.value);
    },
    me = () => {
      const D = Bt(p.value, l.value);
      r.value.forEach((_) => {
        const ee = Ie(_, l.value),
          Q = D[ee];
        Q && (p.value[Q.index] = _);
      });
    },
    Ae = () => {
      var D, _, ee;
      if (((D = r.value) == null ? void 0 : D.length) === 0) {
        w.value = !1;
        return;
      }
      let Q;
      l.value && (Q = Bt(p.value, l.value));
      const de = function (Be) {
        return Q ? !!Q[Ie(Be, l.value)] : p.value.includes(Be);
      };
      let $e = !0,
        ke = 0,
        ft = 0;
      for (let Be = 0, vn = (r.value || []).length; Be < vn; Be++) {
        const hn =
            (ee =
              (_ = t == null ? void 0 : t.store) == null ? void 0 : _.states) ==
            null
              ? void 0
              : ee.rowKey.value,
          $t = Be + ft,
          It = r.value[Be],
          E = $.value && $.value.call(null, It, $t);
        if (de(It)) ke++;
        else if (!$.value || E) {
          $e = !1;
          break;
        }
        ft += Ce(Ie(It, hn));
      }
      ke === 0 && ($e = !1), (w.value = $e);
    },
    Ce = (D) => {
      var _;
      if (!t || !t.store) return 0;
      const { treeData: ee } = t.store.states;
      let Q = 0;
      const de = (_ = ee.value[D]) == null ? void 0 : _.children;
      return (
        de &&
          ((Q += de.length),
          de.forEach(($e) => {
            Q += Ce($e);
          })),
        Q
      );
    },
    B = (D, _) => {
      Array.isArray(D) || (D = [D]);
      const ee = {};
      return (
        D.forEach((Q) => {
          (F.value[Q.id] = _), (ee[Q.columnKey || Q.id] = _);
        }),
        ee
      );
    },
    q = (D, _, ee) => {
      V.value && V.value !== D && (V.value.order = null),
        (V.value = D),
        (z.value = _),
        (I.value = ee);
    },
    ie = () => {
      let D = v(a);
      Object.keys(F.value).forEach((_) => {
        const ee = F.value[_];
        if (!ee || ee.length === 0) return;
        const Q = Co({ columns: u.value }, _);
        Q &&
          Q.filterMethod &&
          (D = D.filter((de) =>
            ee.some(($e) => Q.filterMethod.call(null, $e, de, Q)),
          ));
      }),
        (k.value = D);
    },
    J = () => {
      r.value = Iv(k.value, {
        sortingColumn: V.value,
        sortProp: z.value,
        sortOrder: I.value,
      });
    },
    we = (D = void 0) => {
      (D && D.filter) || ie(), J();
    },
    Ne = (D) => {
      const { tableHeaderRef: _ } = t.refs;
      if (!_) return;
      const ee = Object.assign({}, _.filterPanels),
        Q = Object.keys(ee);
      if (Q.length)
        if ((typeof D == 'string' && (D = [D]), Array.isArray(D))) {
          const de = D.map(($e) => xv({ columns: u.value }, $e));
          Q.forEach(($e) => {
            const ke = de.find((ft) => ft.id === $e);
            ke && (ke.filteredValue = []);
          }),
            t.store.commit('filterChange', {
              column: de,
              values: [],
              silent: !0,
              multi: !0,
            });
        } else
          Q.forEach((de) => {
            const $e = u.value.find((ke) => ke.id === de);
            $e && ($e.filteredValue = []);
          }),
            (F.value = {}),
            t.store.commit('filterChange', {
              column: {},
              values: [],
              silent: !0,
            });
    },
    ht = () => {
      V.value &&
        (q(null, null, null),
        t.store.commit('changeSortCondition', { silent: !0 }));
    },
    {
      setExpandRowKeys: st,
      toggleRowExpansion: ut,
      updateExpandRows: gt,
      states: mt,
      isRowExpanded: et,
    } = Fv({ data: r, rowKey: l }),
    {
      updateTreeExpandKeys: Lt,
      toggleTreeExpansion: Ft,
      updateTreeData: Mt,
      loadOrToggle: dt,
      states: Rt,
    } = Rv({ data: r, rowKey: l }),
    {
      updateCurrentRowData: xt,
      updateCurrentRow: R,
      setCurrentRowKey: j,
      states: Se,
    } = Mv({ data: r, rowKey: l });
  return {
    assertRowKey: re,
    updateColumns: ge,
    scheduleLayout: ye,
    isSelected: ue,
    clearSelection: T,
    cleanSelection: W,
    getSelectionRows: Y,
    toggleRowSelection: Z,
    _toggleAllSelection: pe,
    toggleAllSelection: null,
    updateSelectionByRowKey: me,
    updateAllSelected: Ae,
    updateFilters: B,
    updateCurrentRow: R,
    updateSort: q,
    execFilter: ie,
    execSort: J,
    execQuery: we,
    clearFilter: Ne,
    clearSort: ht,
    toggleRowExpansion: ut,
    setExpandRowKeysAdapter: (D) => {
      st(D), Lt(D);
    },
    setCurrentRowKey: j,
    toggleRowExpansionAdapter: (D, _) => {
      u.value.some(({ type: Q }) => Q === 'expand') ? ut(D, _) : Ft(D, _);
    },
    isRowExpanded: et,
    updateExpandRows: gt,
    updateCurrentRowData: xt,
    loadOrToggle: dt,
    updateTreeData: Mt,
    states: {
      tableSize: n,
      rowKey: l,
      data: r,
      _data: a,
      isComplex: o,
      _columns: i,
      originColumns: s,
      columns: u,
      fixedColumns: d,
      rightFixedColumns: f,
      leafColumns: m,
      fixedLeafColumns: C,
      rightFixedLeafColumns: h,
      updateOrderFns: c,
      leafColumnsLength: g,
      fixedLeafColumnsLength: b,
      rightFixedLeafColumnsLength: y,
      isAllSelected: w,
      selection: p,
      reserveSelection: S,
      selectOnIndeterminate: O,
      selectable: $,
      filters: F,
      filteredData: k,
      sortingColumn: V,
      sortProp: z,
      sortOrder: I,
      hoverRow: K,
      ...mt,
      ...Rt,
      ...Se,
    },
  };
}
function kl(e, t) {
  return e.map((n) => {
    var l;
    return n.id === t.id
      ? t
      : ((l = n.children) != null &&
          l.length &&
          (n.children = kl(n.children, t)),
        n);
  });
}
function Wl(e) {
  e.forEach((t) => {
    var n, l;
    (t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t)),
      (l = t.children) != null && l.length && Wl(t.children);
  }),
    e.sort((t, n) => t.no - n.no);
}
function kv() {
  const e = Pe(),
    t = Nv();
  return {
    ns: ce('table'),
    ...t,
    mutations: {
      setData(o, i) {
        const s = v(o._data) !== i;
        (o.data.value = i),
          (o._data.value = i),
          e.store.execQuery(),
          e.store.updateCurrentRowData(),
          e.store.updateExpandRows(),
          e.store.updateTreeData(e.store.states.defaultExpandAll.value),
          v(o.reserveSelection)
            ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey())
            : s
            ? e.store.clearSelection()
            : e.store.cleanSelection(),
          e.store.updateAllSelected(),
          e.$ready && e.store.scheduleLayout();
      },
      insertColumn(o, i, s, u) {
        const d = v(o._columns);
        let f = [];
        s
          ? (s && !s.children && (s.children = []),
            s.children.push(i),
            (f = kl(d, s)))
          : (d.push(i), (f = d)),
          Wl(f),
          (o._columns.value = f),
          o.updateOrderFns.push(u),
          i.type === 'selection' &&
            ((o.selectable.value = i.selectable),
            (o.reserveSelection.value = i.reserveSelection)),
          e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(o, i) {
        var s;
        ((s = i.getColumnIndex) == null ? void 0 : s.call(i)) !== i.no &&
          (Wl(o._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(o, i, s, u) {
        const d = v(o._columns) || [];
        if (s)
          s.children.splice(
            s.children.findIndex((m) => m.id === i.id),
            1,
          ),
            ve(() => {
              var m;
              ((m = s.children) == null ? void 0 : m.length) === 0 &&
                delete s.children;
            }),
            (o._columns.value = kl(d, s));
        else {
          const m = d.indexOf(i);
          m > -1 && (d.splice(m, 1), (o._columns.value = d));
        }
        const f = o.updateOrderFns.indexOf(u);
        f > -1 && o.updateOrderFns.splice(f, 1),
          e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      sort(o, i) {
        const { prop: s, order: u, init: d } = i;
        if (s) {
          const f = v(o.columns).find((m) => m.property === s);
          f &&
            ((f.order = u),
            e.store.updateSort(f, s, u),
            e.store.commit('changeSortCondition', { init: d }));
        }
      },
      changeSortCondition(o, i) {
        const { sortingColumn: s, sortProp: u, sortOrder: d } = o,
          f = v(s),
          m = v(u),
          C = v(d);
        C === null &&
          ((o.sortingColumn.value = null), (o.sortProp.value = null));
        const h = { filter: !0 };
        e.store.execQuery(h),
          (!i || !(i.silent || i.init)) &&
            e.emit('sort-change', { column: f, prop: m, order: C }),
          e.store.updateTableScrollY();
      },
      filterChange(o, i) {
        const { column: s, values: u, silent: d } = i,
          f = e.store.updateFilters(s, u);
        e.store.execQuery(),
          d || e.emit('filter-change', f),
          e.store.updateTableScrollY();
      },
      toggleAllSelection() {
        e.store.toggleAllSelection();
      },
      rowSelectedChanged(o, i) {
        e.store.toggleRowSelection(i), e.store.updateAllSelected();
      },
      setHoverRow(o, i) {
        o.hoverRow.value = i;
      },
      setCurrentRow(o, i) {
        e.store.updateCurrentRow(i);
      },
    },
    commit: function (o, ...i) {
      const s = e.store.mutations;
      if (s[o]) s[o].apply(e, [e.store.states].concat(i));
      else throw new Error(`Action not found: ${o}`);
    },
    updateTableScrollY: function () {
      ve(() => e.layout.updateScrollY.apply(e.layout));
    },
  };
}
const wn = {
  rowKey: 'rowKey',
  defaultExpandAll: 'defaultExpandAll',
  selectOnIndeterminate: 'selectOnIndeterminate',
  indent: 'indent',
  lazy: 'lazy',
  data: 'data',
  'treeProps.hasChildren': {
    key: 'lazyColumnIdentifier',
    default: 'hasChildren',
  },
  'treeProps.children': { key: 'childrenColumnName', default: 'children' },
};
function Wv(e, t) {
  if (!e) throw new Error('Table is required.');
  const n = kv();
  return (
    (n.toggleAllSelection = ln(n._toggleAllSelection, 10)),
    Object.keys(wn).forEach((l) => {
      Oo(xo(t, l), l, n);
    }),
    zv(n, t),
    n
  );
}
function zv(e, t) {
  Object.keys(wn).forEach((n) => {
    se(
      () => xo(t, n),
      (l) => {
        Oo(l, n, e);
      },
    );
  });
}
function Oo(e, t, n) {
  let l = e,
    r = wn[t];
  typeof wn[t] == 'object' && ((r = r.key), (l = l || wn[t].default)),
    (n.states[r].value = l);
}
function xo(e, t) {
  if (t.includes('.')) {
    const n = t.split('.');
    let l = e;
    return (
      n.forEach((r) => {
        l = l[r];
      }),
      l
    );
  } else return e[t];
}
class Bv {
  constructor(t) {
    (this.observers = []),
      (this.table = null),
      (this.store = null),
      (this.columns = []),
      (this.fit = !0),
      (this.showHeader = !0),
      (this.height = P(null)),
      (this.scrollX = P(!1)),
      (this.scrollY = P(!1)),
      (this.bodyWidth = P(null)),
      (this.fixedWidth = P(null)),
      (this.rightFixedWidth = P(null)),
      (this.gutterWidth = 0);
    for (const n in t)
      On(t, n) && (En(this[n]) ? (this[n].value = t[n]) : (this[n] = t[n]));
    if (!this.table) throw new Error('Table is required for Table Layout');
    if (!this.store) throw new Error('Store is required for Table Layout');
  }
  updateScrollY() {
    if (this.height.value === null) return !1;
    const n = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && n != null && n.wrapRef) {
      let l = !0;
      const r = this.scrollY.value;
      return (
        (l = n.wrapRef.scrollHeight > n.wrapRef.clientHeight),
        (this.scrollY.value = l),
        r !== l
      );
    }
    return !1;
  }
  setHeight(t, n = 'height') {
    if (!pt) return;
    const l = this.table.vnode.el;
    if (((t = Tv(t)), (this.height.value = Number(t)), !l && (t || t === 0)))
      return ve(() => this.setHeight(t, n));
    typeof t == 'number'
      ? ((l.style[n] = `${t}px`), this.updateElsHeight())
      : typeof t == 'string' && ((l.style[n] = t), this.updateElsHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, 'max-height');
  }
  getFlattenColumns() {
    const t = [];
    return (
      this.table.store.states.columns.value.forEach((l) => {
        l.isColumnGroup ? t.push.apply(t, l.columns) : t.push(l);
      }),
      t
    );
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers('scrollable');
  }
  headerDisplayNone(t) {
    if (!t) return !0;
    let n = t;
    for (; n.tagName !== 'DIV'; ) {
      if (getComputedStyle(n).display === 'none') return !0;
      n = n.parentElement;
    }
    return !1;
  }
  updateColumnsWidth() {
    if (!pt) return;
    const t = this.fit,
      n = this.table.vnode.el.clientWidth;
    let l = 0;
    const r = this.getFlattenColumns(),
      a = r.filter((s) => typeof s.width != 'number');
    if (
      (r.forEach((s) => {
        typeof s.width == 'number' && s.realWidth && (s.realWidth = null);
      }),
      a.length > 0 && t)
    ) {
      if (
        (r.forEach((s) => {
          l += Number(s.width || s.minWidth || 80);
        }),
        l <= n)
      ) {
        this.scrollX.value = !1;
        const s = n - l;
        if (a.length === 1) a[0].realWidth = Number(a[0].minWidth || 80) + s;
        else {
          const u = a.reduce((m, C) => m + Number(C.minWidth || 80), 0),
            d = s / u;
          let f = 0;
          a.forEach((m, C) => {
            if (C === 0) return;
            const h = Math.floor(Number(m.minWidth || 80) * d);
            (f += h), (m.realWidth = Number(m.minWidth || 80) + h);
          }),
            (a[0].realWidth = Number(a[0].minWidth || 80) + s - f);
        }
      } else
        (this.scrollX.value = !0),
          a.forEach((s) => {
            s.realWidth = Number(s.minWidth);
          });
      (this.bodyWidth.value = Math.max(l, n)),
        (this.table.state.resizeState.value.width = this.bodyWidth.value);
    } else
      r.forEach((s) => {
        !s.width && !s.minWidth
          ? (s.realWidth = 80)
          : (s.realWidth = Number(s.width || s.minWidth)),
          (l += s.realWidth);
      }),
        (this.scrollX.value = l > n),
        (this.bodyWidth.value = l);
    const o = this.store.states.fixedColumns.value;
    if (o.length > 0) {
      let s = 0;
      o.forEach((u) => {
        s += Number(u.realWidth || u.width);
      }),
        (this.fixedWidth.value = s);
    }
    const i = this.store.states.rightFixedColumns.value;
    if (i.length > 0) {
      let s = 0;
      i.forEach((u) => {
        s += Number(u.realWidth || u.width);
      }),
        (this.rightFixedWidth.value = s);
    }
    this.notifyObservers('columns');
  }
  addObserver(t) {
    this.observers.push(t);
  }
  removeObserver(t) {
    const n = this.observers.indexOf(t);
    n !== -1 && this.observers.splice(n, 1);
  }
  notifyObservers(t) {
    this.observers.forEach((l) => {
      var r, a;
      switch (t) {
        case 'columns':
          (r = l.state) == null || r.onColumnsChange(this);
          break;
        case 'scrollable':
          (a = l.state) == null || a.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
}
const { CheckboxGroup: Hv } = an,
  Dv = ae({
    name: 'ElTableFilterPanel',
    components: {
      ElCheckbox: an,
      ElCheckboxGroup: Hv,
      ElScrollbar: Kl,
      ElTooltip: Ca,
      ElIcon: Ye,
      ArrowDown: wa,
      ArrowUp: ei,
    },
    directives: { ClickOutside: no },
    props: {
      placement: { type: String, default: 'bottom-start' },
      store: { type: Object },
      column: { type: Object },
      upDataColumn: { type: Function },
    },
    setup(e) {
      const t = Pe(),
        { t: n } = Je(),
        l = ce('table-filter'),
        r = t == null ? void 0 : t.parent;
      r.filterPanels.value[e.column.id] ||
        (r.filterPanels.value[e.column.id] = t);
      const a = P(!1),
        o = P(null),
        i = x(() => e.column && e.column.filters),
        s = x({
          get: () => {
            var p;
            return (((p = e.column) == null ? void 0 : p.filteredValue) ||
              [])[0];
          },
          set: (p) => {
            u.value &&
              (typeof p < 'u' && p !== null
                ? u.value.splice(0, 1, p)
                : u.value.splice(0, 1));
          },
        }),
        u = x({
          get() {
            return e.column ? e.column.filteredValue || [] : [];
          },
          set(p) {
            e.column && e.upDataColumn('filteredValue', p);
          },
        }),
        d = x(() => (e.column ? e.column.filterMultiple : !0)),
        f = (p) => p.value === s.value,
        m = () => {
          a.value = !1;
        },
        C = (p) => {
          p.stopPropagation(), (a.value = !a.value);
        },
        h = () => {
          a.value = !1;
        },
        c = () => {
          y(u.value), m();
        },
        g = () => {
          (u.value = []), y(u.value), m();
        },
        b = (p) => {
          (s.value = p), y(typeof p < 'u' && p !== null ? u.value : []), m();
        },
        y = (p) => {
          e.store.commit('filterChange', { column: e.column, values: p }),
            e.store.updateAllSelected();
        };
      se(
        a,
        (p) => {
          e.column && e.upDataColumn('filterOpened', p);
        },
        { immediate: !0 },
      );
      const w = x(() => {
        var p, S;
        return (S = (p = o.value) == null ? void 0 : p.popperRef) == null
          ? void 0
          : S.contentRef;
      });
      return {
        tooltipVisible: a,
        multiple: d,
        filteredValue: u,
        filterValue: s,
        filters: i,
        handleConfirm: c,
        handleReset: g,
        handleSelect: b,
        isActive: f,
        t: n,
        ns: l,
        showFilterPanel: C,
        hideFilterPanel: h,
        popperPaneRef: w,
        tooltip: o,
      };
    },
  }),
  qv = { key: 0 },
  Vv = ['disabled'],
  jv = ['label', 'onClick'];
function Kv(e, t, n, l, r, a) {
  const o = Le('el-checkbox'),
    i = Le('el-checkbox-group'),
    s = Le('el-scrollbar'),
    u = Le('arrow-up'),
    d = Le('arrow-down'),
    f = Le('el-icon'),
    m = Le('el-tooltip'),
    C = _l('click-outside');
  return (
    A(),
    ne(
      m,
      {
        ref: 'tooltip',
        visible: e.tooltipVisible,
        offset: 0,
        placement: e.placement,
        'show-arrow': !1,
        'stop-popper-mouse-event': !1,
        teleported: '',
        effect: 'light',
        pure: '',
        'popper-class': e.ns.b(),
        persistent: '',
      },
      {
        content: te(() => [
          e.multiple
            ? (A(),
              H('div', qv, [
                le(
                  'div',
                  { class: M(e.ns.e('content')) },
                  [
                    Oe(
                      s,
                      { 'wrap-class': e.ns.e('wrap') },
                      {
                        default: te(() => [
                          Oe(
                            i,
                            {
                              modelValue: e.filteredValue,
                              'onUpdate:modelValue':
                                t[0] || (t[0] = (h) => (e.filteredValue = h)),
                              class: M(e.ns.e('checkbox-group')),
                            },
                            {
                              default: te(() => [
                                (A(!0),
                                H(
                                  _e,
                                  null,
                                  Ht(
                                    e.filters,
                                    (h) => (
                                      A(),
                                      ne(
                                        o,
                                        { key: h.value, label: h.value },
                                        {
                                          default: te(() => [
                                            Ln(he(h.text), 1),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ['label'],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 1,
                            },
                            8,
                            ['modelValue', 'class'],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ['wrap-class'],
                    ),
                  ],
                  2,
                ),
                le(
                  'div',
                  { class: M(e.ns.e('bottom')) },
                  [
                    le(
                      'button',
                      {
                        class: M({
                          [e.ns.is('disabled')]: e.filteredValue.length === 0,
                        }),
                        disabled: e.filteredValue.length === 0,
                        type: 'button',
                        onClick:
                          t[1] ||
                          (t[1] = (...h) =>
                            e.handleConfirm && e.handleConfirm(...h)),
                      },
                      he(e.t('el.table.confirmFilter')),
                      11,
                      Vv,
                    ),
                    le(
                      'button',
                      {
                        type: 'button',
                        onClick:
                          t[2] ||
                          (t[2] = (...h) =>
                            e.handleReset && e.handleReset(...h)),
                      },
                      he(e.t('el.table.resetFilter')),
                      1,
                    ),
                  ],
                  2,
                ),
              ]))
            : (A(),
              H(
                'ul',
                { key: 1, class: M(e.ns.e('list')) },
                [
                  le(
                    'li',
                    {
                      class: M([
                        e.ns.e('list-item'),
                        {
                          [e.ns.is('active')]:
                            e.filterValue === void 0 || e.filterValue === null,
                        },
                      ]),
                      onClick: t[3] || (t[3] = (h) => e.handleSelect(null)),
                    },
                    he(e.t('el.table.clearFilter')),
                    3,
                  ),
                  (A(!0),
                  H(
                    _e,
                    null,
                    Ht(
                      e.filters,
                      (h) => (
                        A(),
                        H(
                          'li',
                          {
                            key: h.value,
                            class: M([
                              e.ns.e('list-item'),
                              e.ns.is('active', e.isActive(h)),
                            ]),
                            label: h.value,
                            onClick: (c) => e.handleSelect(h.value),
                          },
                          he(h.text),
                          11,
                          jv,
                        )
                      ),
                    ),
                    128,
                  )),
                ],
                2,
              )),
        ]),
        default: te(() => [
          Ue(
            (A(),
            H(
              'span',
              {
                class: M([
                  `${e.ns.namespace.value}-table__column-filter-trigger`,
                  `${e.ns.namespace.value}-none-outline`,
                ]),
                onClick:
                  t[4] ||
                  (t[4] = (...h) =>
                    e.showFilterPanel && e.showFilterPanel(...h)),
              },
              [
                Oe(f, null, {
                  default: te(() => [
                    e.column.filterOpened
                      ? (A(), ne(u, { key: 0 }))
                      : (A(), ne(d, { key: 1 })),
                  ]),
                  _: 1,
                }),
              ],
              2,
            )),
            [[C, e.hideFilterPanel, e.popperPaneRef]],
          ),
        ]),
        _: 1,
      },
      8,
      ['visible', 'placement', 'popper-class'],
    )
  );
}
var _v = Re(Dv, [
  ['render', Kv],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue',
  ],
]);
function $o(e) {
  const t = Pe();
  Sa(() => {
    n.value.addObserver(t);
  }),
    it(() => {
      l(n.value), r(n.value);
    }),
    ha(() => {
      l(n.value), r(n.value);
    }),
    Gl(() => {
      n.value.removeObserver(t);
    });
  const n = x(() => {
      const a = e.layout;
      if (!a) throw new Error('Can not find table layout.');
      return a;
    }),
    l = (a) => {
      var o;
      const i =
        ((o = e.vnode.el) == null
          ? void 0
          : o.querySelectorAll('colgroup > col')) || [];
      if (!i.length) return;
      const s = a.getFlattenColumns(),
        u = {};
      s.forEach((d) => {
        u[d.id] = d;
      });
      for (let d = 0, f = i.length; d < f; d++) {
        const m = i[d],
          C = m.getAttribute('name'),
          h = u[C];
        h && m.setAttribute('width', h.realWidth || h.width);
      }
    },
    r = (a) => {
      var o, i;
      const s =
        ((o = e.vnode.el) == null
          ? void 0
          : o.querySelectorAll('colgroup > col[name=gutter]')) || [];
      for (let d = 0, f = s.length; d < f; d++)
        s[d].setAttribute('width', a.scrollY.value ? a.gutterWidth : '0');
      const u =
        ((i = e.vnode.el) == null ? void 0 : i.querySelectorAll('th.gutter')) ||
        [];
      for (let d = 0, f = u.length; d < f; d++) {
        const m = u[d];
        (m.style.width = a.scrollY.value ? `${a.gutterWidth}px` : '0'),
          (m.style.display = a.scrollY.value ? '' : 'none');
      }
    };
  return { tableLayout: n.value, onColumnsChange: l, onScrollableChange: r };
}
const vt = Symbol('ElTable');
function Uv(e, t) {
  const n = Pe(),
    l = xe(vt),
    r = (c) => {
      c.stopPropagation();
    },
    a = (c, g) => {
      !g.filters && g.sortable
        ? h(c, g, !1)
        : g.filterable && !g.sortable && r(c),
        l == null || l.emit('header-click', g, c);
    },
    o = (c, g) => {
      l == null || l.emit('header-contextmenu', g, c);
    },
    i = P(null),
    s = P(!1),
    u = P({}),
    d = (c, g) => {
      if (pt && !(g.children && g.children.length > 0) && i.value && e.border) {
        s.value = !0;
        const b = l;
        t('set-drag-visible', !0);
        const w = (b == null ? void 0 : b.vnode.el).getBoundingClientRect()
            .left,
          p = n.vnode.el.querySelector(`th.${g.id}`),
          S = p.getBoundingClientRect(),
          O = S.left - w + 30;
        Ea(p, 'noclick'),
          (u.value = {
            startMouseLeft: c.clientX,
            startLeft: S.right - w,
            startColumnLeft: S.left - w,
            tableLeft: w,
          });
        const $ = b == null ? void 0 : b.refs.resizeProxy;
        ($.style.left = `${u.value.startLeft}px`),
          (document.onselectstart = function () {
            return !1;
          }),
          (document.ondragstart = function () {
            return !1;
          });
        const F = (V) => {
            const z = V.clientX - u.value.startMouseLeft,
              I = u.value.startLeft + z;
            $.style.left = `${Math.max(O, I)}px`;
          },
          k = () => {
            if (s.value) {
              const { startColumnLeft: V, startLeft: z } = u.value,
                K = Number.parseInt($.style.left, 10) - V;
              (g.width = g.realWidth = K),
                b == null || b.emit('header-dragend', g.width, z - V, g, c),
                requestAnimationFrame(() => {
                  e.store.scheduleLayout(!1, !0);
                }),
                (document.body.style.cursor = ''),
                (s.value = !1),
                (i.value = null),
                (u.value = {}),
                t('set-drag-visible', !1);
            }
            document.removeEventListener('mousemove', F),
              document.removeEventListener('mouseup', k),
              (document.onselectstart = null),
              (document.ondragstart = null),
              setTimeout(() => {
                hl(p, 'noclick');
              }, 0);
          };
        document.addEventListener('mousemove', F),
          document.addEventListener('mouseup', k);
      }
    },
    f = (c, g) => {
      if (g.children && g.children.length > 0) return;
      const b = c.target;
      if (!ya(b)) return;
      const y = b == null ? void 0 : b.closest('th');
      if (!(!g || !g.resizable) && !s.value && e.border) {
        const w = y.getBoundingClientRect(),
          p = document.body.style;
        w.width > 12 && w.right - c.pageX < 8
          ? ((p.cursor = 'col-resize'),
            Dn(y, 'is-sortable') && (y.style.cursor = 'col-resize'),
            (i.value = g))
          : s.value ||
            ((p.cursor = ''),
            Dn(y, 'is-sortable') && (y.style.cursor = 'pointer'),
            (i.value = null));
      }
    },
    m = () => {
      pt && (document.body.style.cursor = '');
    },
    C = ({ order: c, sortOrders: g }) => {
      if (c === '') return g[0];
      const b = g.indexOf(c || null);
      return g[b > g.length - 2 ? 0 : b + 1];
    },
    h = (c, g, b) => {
      var y;
      c.stopPropagation();
      const w = g.order === b ? null : b || C(g),
        p = (y = c.target) == null ? void 0 : y.closest('th');
      if (p && Dn(p, 'noclick')) {
        hl(p, 'noclick');
        return;
      }
      if (!g.sortable) return;
      const S = e.store.states;
      let O = S.sortProp.value,
        $;
      const F = S.sortingColumn.value;
      (F !== g || (F === g && F.order === null)) &&
        (F && (F.order = null), (S.sortingColumn.value = g), (O = g.property)),
        w ? ($ = g.order = w) : ($ = g.order = null),
        (S.sortProp.value = O),
        (S.sortOrder.value = $),
        l == null || l.store.commit('changeSortCondition');
    };
  return {
    handleHeaderClick: a,
    handleHeaderContextMenu: o,
    handleMouseDown: d,
    handleMouseMove: f,
    handleMouseOut: m,
    handleSortClick: h,
    handleFilterClick: r,
  };
}
function Gv(e) {
  const t = xe(vt),
    n = ce('table');
  return {
    getHeaderRowStyle: (i) => {
      const s = t == null ? void 0 : t.props.headerRowStyle;
      return typeof s == 'function' ? s.call(null, { rowIndex: i }) : s;
    },
    getHeaderRowClass: (i) => {
      const s = [],
        u = t == null ? void 0 : t.props.headerRowClassName;
      return (
        typeof u == 'string'
          ? s.push(u)
          : typeof u == 'function' && s.push(u.call(null, { rowIndex: i })),
        s.join(' ')
      );
    },
    getHeaderCellStyle: (i, s, u, d) => {
      var f;
      let m =
        (f = t == null ? void 0 : t.props.headerCellStyle) != null ? f : {};
      typeof m == 'function' &&
        (m = m.call(null, { rowIndex: i, columnIndex: s, row: u, column: d }));
      const C = ur(s, d.fixed, e.store, u);
      return on(C, 'left'), on(C, 'right'), Object.assign({}, m, C);
    },
    getHeaderCellClass: (i, s, u, d) => {
      const f = sr(n.b(), s, d.fixed, e.store, u),
        m = [d.id, d.order, d.headerAlign, d.className, d.labelClassName, ...f];
      d.children || m.push('is-leaf'), d.sortable && m.push('is-sortable');
      const C = t == null ? void 0 : t.props.headerCellClassName;
      return (
        typeof C == 'string'
          ? m.push(C)
          : typeof C == 'function' &&
            m.push(
              C.call(null, { rowIndex: i, columnIndex: s, row: u, column: d }),
            ),
        m.push(n.e('cell')),
        m.filter((h) => !!h).join(' ')
      );
    },
  };
}
const To = (e) => {
    const t = [];
    return (
      e.forEach((n) => {
        n.children ? (t.push(n), t.push.apply(t, To(n.children))) : t.push(n);
      }),
      t
    );
  },
  Yv = (e) => {
    let t = 1;
    const n = (a, o) => {
      if (
        (o && ((a.level = o.level + 1), t < a.level && (t = a.level)),
        a.children)
      ) {
        let i = 0;
        a.children.forEach((s) => {
          n(s, a), (i += s.colSpan);
        }),
          (a.colSpan = i);
      } else a.colSpan = 1;
    };
    e.forEach((a) => {
      (a.level = 1), n(a, void 0);
    });
    const l = [];
    for (let a = 0; a < t; a++) l.push([]);
    return (
      To(e).forEach((a) => {
        a.children
          ? ((a.rowSpan = 1), a.children.forEach((o) => (o.isSubColumn = !0)))
          : (a.rowSpan = t - a.level + 1),
          l[a.level - 1].push(a);
      }),
      l
    );
  };
function Xv(e) {
  const t = xe(vt),
    n = x(() => Yv(e.store.states.originColumns.value));
  return {
    isGroup: x(() => {
      const a = n.value.length > 1;
      return a && t && (t.state.isGroup.value = !0), a;
    }),
    toggleAllSelection: (a) => {
      a.stopPropagation(), t == null || t.store.commit('toggleAllSelection');
    },
    columnRows: n,
  };
}
var Qv = ae({
  name: 'ElTableHeader',
  components: { ElCheckbox: an },
  props: {
    fixed: { type: String, default: '' },
    store: { required: !0, type: Object },
    border: Boolean,
    defaultSort: { type: Object, default: () => ({ prop: '', order: '' }) },
  },
  setup(e, { emit: t }) {
    const n = Pe(),
      l = xe(vt),
      r = ce('table'),
      a = P({}),
      { onColumnsChange: o, onScrollableChange: i } = $o(l);
    it(async () => {
      await ve(), await ve();
      const { prop: O, order: $ } = e.defaultSort;
      l == null || l.store.commit('sort', { prop: O, order: $, init: !0 });
    });
    const {
        handleHeaderClick: s,
        handleHeaderContextMenu: u,
        handleMouseDown: d,
        handleMouseMove: f,
        handleMouseOut: m,
        handleSortClick: C,
        handleFilterClick: h,
      } = Uv(e, t),
      {
        getHeaderRowStyle: c,
        getHeaderRowClass: g,
        getHeaderCellStyle: b,
        getHeaderCellClass: y,
      } = Gv(e),
      { isGroup: w, toggleAllSelection: p, columnRows: S } = Xv(e);
    return (
      (n.state = { onColumnsChange: o, onScrollableChange: i }),
      (n.filterPanels = a),
      {
        ns: r,
        filterPanels: a,
        onColumnsChange: o,
        onScrollableChange: i,
        columnRows: S,
        getHeaderRowClass: g,
        getHeaderRowStyle: c,
        getHeaderCellClass: y,
        getHeaderCellStyle: b,
        handleHeaderClick: s,
        handleHeaderContextMenu: u,
        handleMouseDown: d,
        handleMouseMove: f,
        handleMouseOut: m,
        handleSortClick: C,
        handleFilterClick: h,
        isGroup: w,
        toggleAllSelection: p,
      }
    );
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: n,
      getHeaderCellStyle: l,
      getHeaderCellClass: r,
      getHeaderRowClass: a,
      getHeaderRowStyle: o,
      handleHeaderClick: i,
      handleHeaderContextMenu: s,
      handleMouseDown: u,
      handleMouseMove: d,
      handleSortClick: f,
      handleMouseOut: m,
      store: C,
      $parent: h,
    } = this;
    let c = 1;
    return G(
      'thead',
      { class: { [e.is('group')]: t } },
      n.map((g, b) =>
        G(
          'tr',
          { class: a(b), key: b, style: o(b) },
          g.map(
            (y, w) => (
              y.rowSpan > c && (c = y.rowSpan),
              G(
                'th',
                {
                  class: r(b, w, g, y),
                  colspan: y.colSpan,
                  key: `${y.id}-thead`,
                  rowspan: y.rowSpan,
                  style: l(b, w, g, y),
                  onClick: (p) => i(p, y),
                  onContextmenu: (p) => s(p, y),
                  onMousedown: (p) => u(p, y),
                  onMousemove: (p) => d(p, y),
                  onMouseout: m,
                },
                [
                  G(
                    'div',
                    {
                      class: [
                        'cell',
                        y.filteredValue && y.filteredValue.length > 0
                          ? 'highlight'
                          : '',
                      ],
                    },
                    [
                      y.renderHeader
                        ? y.renderHeader({
                            column: y,
                            $index: w,
                            store: C,
                            _self: h,
                          })
                        : y.label,
                      y.sortable &&
                        G(
                          'span',
                          { onClick: (p) => f(p, y), class: 'caret-wrapper' },
                          [
                            G('i', {
                              onClick: (p) => f(p, y, 'ascending'),
                              class: 'sort-caret ascending',
                            }),
                            G('i', {
                              onClick: (p) => f(p, y, 'descending'),
                              class: 'sort-caret descending',
                            }),
                          ],
                        ),
                      y.filterable &&
                        G(_v, {
                          store: C,
                          placement: y.filterPlacement || 'bottom-start',
                          column: y,
                          upDataColumn: (p, S) => {
                            y[p] = S;
                          },
                        }),
                    ],
                  ),
                ],
              )
            ),
          ),
        ),
      ),
    );
  },
});
function Zv(e) {
  const t = xe(vt),
    n = P(''),
    l = P(G('div')),
    { nextZIndex: r } = ti(),
    a = (h, c, g) => {
      var b;
      const y = t,
        w = dl(h);
      let p;
      const S =
        (b = y == null ? void 0 : y.vnode.el) == null
          ? void 0
          : b.dataset.prefix;
      w &&
        ((p = la({ columns: e.store.states.columns.value }, w, S)),
        p && (y == null || y.emit(`cell-${g}`, c, p, w, h))),
        y == null || y.emit(`row-${g}`, c, p, h);
    },
    o = (h, c) => {
      a(h, c, 'dblclick');
    },
    i = (h, c) => {
      e.store.commit('setCurrentRow', c), a(h, c, 'click');
    },
    s = (h, c) => {
      a(h, c, 'contextmenu');
    },
    u = ln((h) => {
      e.store.commit('setHoverRow', h);
    }, 30),
    d = ln(() => {
      e.store.commit('setHoverRow', null);
    }, 30),
    f = (h) => {
      const c = window.getComputedStyle(h, null),
        g = Number.parseInt(c.paddingLeft, 10) || 0,
        b = Number.parseInt(c.paddingRight, 10) || 0,
        y = Number.parseInt(c.paddingTop, 10) || 0,
        w = Number.parseInt(c.paddingBottom, 10) || 0;
      return { left: g, right: b, top: y, bottom: w };
    };
  return {
    handleDoubleClick: o,
    handleClick: i,
    handleContextMenu: s,
    handleMouseEnter: u,
    handleMouseLeave: d,
    handleCellMouseEnter: (h, c, g) => {
      var b;
      const y = t,
        w = dl(h),
        p =
          (b = y == null ? void 0 : y.vnode.el) == null
            ? void 0
            : b.dataset.prefix;
      if (w) {
        const ye = la({ columns: e.store.states.columns.value }, w, p),
          ue = (y.hoverState = { cell: w, column: ye, row: c });
        y == null || y.emit('cell-mouse-enter', ue.row, ue.column, ue.cell, h);
      }
      if (!g) return;
      const S = h.target.querySelector('.cell');
      if (!(Dn(S, `${p}-tooltip`) && S.childNodes.length)) return;
      const O = document.createRange();
      O.setStart(S, 0), O.setEnd(S, S.childNodes.length);
      let $ = O.getBoundingClientRect().width,
        F = O.getBoundingClientRect().height;
      $ - Math.floor($) < 0.001 && ($ = Math.floor($)),
        F - Math.floor(F) < 0.001 && (F = Math.floor(F));
      const { top: z, left: I, right: K, bottom: re } = f(S),
        fe = I + K,
        ge = z + re;
      ($ + fe > S.offsetWidth ||
        F + ge > S.offsetHeight ||
        S.scrollWidth > S.offsetWidth) &&
        Lv(
          t == null ? void 0 : t.refs.tableWrapper,
          w,
          w.innerText || w.textContent,
          r,
          g,
        );
    },
    handleCellMouseLeave: (h) => {
      if (!dl(h)) return;
      const g = t == null ? void 0 : t.hoverState;
      t == null ||
        t.emit(
          'cell-mouse-leave',
          g == null ? void 0 : g.row,
          g == null ? void 0 : g.column,
          g == null ? void 0 : g.cell,
          h,
        );
    },
    tooltipContent: n,
    tooltipTrigger: l,
  };
}
function Jv(e) {
  const t = xe(vt),
    n = ce('table');
  return {
    getRowStyle: (u, d) => {
      const f = t == null ? void 0 : t.props.rowStyle;
      return typeof f == 'function'
        ? f.call(null, { row: u, rowIndex: d })
        : f || null;
    },
    getRowClass: (u, d) => {
      const f = [n.e('row')];
      t != null &&
        t.props.highlightCurrentRow &&
        u === e.store.states.currentRow.value &&
        f.push('current-row'),
        e.stripe && d % 2 === 1 && f.push(n.em('row', 'striped'));
      const m = t == null ? void 0 : t.props.rowClassName;
      return (
        typeof m == 'string'
          ? f.push(m)
          : typeof m == 'function' &&
            f.push(m.call(null, { row: u, rowIndex: d })),
        f
      );
    },
    getCellStyle: (u, d, f, m) => {
      const C = t == null ? void 0 : t.props.cellStyle;
      let h = C ?? {};
      typeof C == 'function' &&
        (h = C.call(null, { rowIndex: u, columnIndex: d, row: f, column: m }));
      const c = ur(d, e == null ? void 0 : e.fixed, e.store);
      return on(c, 'left'), on(c, 'right'), Object.assign({}, h, c);
    },
    getCellClass: (u, d, f, m, C) => {
      const h = sr(n.b(), d, e == null ? void 0 : e.fixed, e.store, void 0, C),
        c = [m.id, m.align, m.className, ...h],
        g = t == null ? void 0 : t.props.cellClassName;
      return (
        typeof g == 'string'
          ? c.push(g)
          : typeof g == 'function' &&
            c.push(
              g.call(null, { rowIndex: u, columnIndex: d, row: f, column: m }),
            ),
        c.push(n.e('cell')),
        c.filter((b) => !!b).join(' ')
      );
    },
    getSpan: (u, d, f, m) => {
      let C = 1,
        h = 1;
      const c = t == null ? void 0 : t.props.spanMethod;
      if (typeof c == 'function') {
        const g = c({ row: u, column: d, rowIndex: f, columnIndex: m });
        Array.isArray(g)
          ? ((C = g[0]), (h = g[1]))
          : typeof g == 'object' && ((C = g.rowspan), (h = g.colspan));
      }
      return { rowspan: C, colspan: h };
    },
    getColspanRealWidth: (u, d, f) => {
      if (d < 1) return u[f].realWidth;
      const m = u.map(({ realWidth: C, width: h }) => C || h).slice(f, f + d);
      return Number(m.reduce((C, h) => Number(C) + Number(h), -1));
    },
  };
}
function eh(e) {
  const t = xe(vt),
    n = ce('table'),
    {
      handleDoubleClick: l,
      handleClick: r,
      handleContextMenu: a,
      handleMouseEnter: o,
      handleMouseLeave: i,
      handleCellMouseEnter: s,
      handleCellMouseLeave: u,
      tooltipContent: d,
      tooltipTrigger: f,
    } = Zv(e),
    {
      getRowStyle: m,
      getRowClass: C,
      getCellStyle: h,
      getCellClass: c,
      getSpan: g,
      getColspanRealWidth: b,
    } = Jv(e),
    y = x(() =>
      e.store.states.columns.value.findIndex(({ type: $ }) => $ === 'default'),
    ),
    w = ($, F) => {
      const k = t.props.rowKey;
      return k ? Ie($, k) : F;
    },
    p = ($, F, k, V = !1) => {
      const { tooltipEffect: z, tooltipOptions: I, store: K } = e,
        { indent: re, columns: fe } = K.states,
        ge = C($, F);
      let ye = !0;
      return (
        k && (ge.push(n.em('row', `level-${k.level}`)), (ye = k.display)),
        G(
          'tr',
          {
            style: [ye ? null : { display: 'none' }, m($, F)],
            class: ge,
            key: w($, F),
            onDblclick: (T) => l(T, $),
            onClick: (T) => r(T, $),
            onContextmenu: (T) => a(T, $),
            onMouseenter: () => o(F),
            onMouseleave: i,
          },
          fe.value.map((T, W) => {
            const { rowspan: Y, colspan: Z } = g($, T, F, W);
            if (!Y || !Z) return null;
            const pe = Object.assign({}, T);
            pe.realWidth = b(fe.value, Z, W);
            const me = {
              store: e.store,
              _self: e.context || t,
              column: pe,
              row: $,
              $index: F,
              cellIndex: W,
              expanded: V,
            };
            W === y.value &&
              k &&
              ((me.treeNode = { indent: k.level * re.value, level: k.level }),
              typeof k.expanded == 'boolean' &&
                ((me.treeNode.expanded = k.expanded),
                'loading' in k && (me.treeNode.loading = k.loading),
                'noLazyChildren' in k &&
                  (me.treeNode.noLazyChildren = k.noLazyChildren)));
            const Ae = `${F},${W}`,
              Ce = pe.columnKey || pe.rawColumnKey || '',
              B = S(W, T, me),
              q =
                T.showOverflowTooltip &&
                Xa({ effect: z }, I, T.showOverflowTooltip);
            return G(
              'td',
              {
                style: h(F, W, $, T),
                class: c(F, W, $, T, Z - 1),
                key: `${Ce}${Ae}`,
                rowspan: Y,
                colspan: Z,
                onMouseenter: (ie) => s(ie, $, q),
                onMouseleave: u,
              },
              [B],
            );
          }),
        )
      );
    },
    S = ($, F, k) => F.renderCell(k);
  return {
    wrappedRowRender: ($, F) => {
      const k = e.store,
        { isRowExpanded: V, assertRowKey: z } = k,
        {
          treeData: I,
          lazyTreeNodeMap: K,
          childrenColumnName: re,
          rowKey: fe,
        } = k.states,
        ge = k.states.columns.value;
      if (ge.some(({ type: ue }) => ue === 'expand')) {
        const ue = V($),
          T = p($, F, void 0, ue),
          W = t.renderExpanded;
        return ue
          ? W
            ? [
                [
                  T,
                  G('tr', { key: `expanded-row__${T.key}` }, [
                    G(
                      'td',
                      {
                        colspan: ge.length,
                        class: `${n.e('cell')} ${n.e('expanded-cell')}`,
                      },
                      [W({ row: $, $index: F, store: k, expanded: ue })],
                    ),
                  ]),
                ],
              ]
            : (console.error('[Element Error]renderExpanded is required.'), T)
          : [[T]];
      } else if (Object.keys(I.value).length) {
        z();
        const ue = Ie($, fe.value);
        let T = I.value[ue],
          W = null;
        T &&
          ((W = { expanded: T.expanded, level: T.level, display: !0 }),
          typeof T.lazy == 'boolean' &&
            (typeof T.loaded == 'boolean' &&
              T.loaded &&
              (W.noLazyChildren = !(T.children && T.children.length)),
            (W.loading = T.loading)));
        const Y = [p($, F, W)];
        if (T) {
          let Z = 0;
          const pe = (Ae, Ce) => {
            Ae &&
              Ae.length &&
              Ce &&
              Ae.forEach((B) => {
                const q = {
                    display: Ce.display && Ce.expanded,
                    level: Ce.level + 1,
                    expanded: !1,
                    noLazyChildren: !1,
                    loading: !1,
                  },
                  ie = Ie(B, fe.value);
                if (ie == null)
                  throw new Error('For nested data item, row-key is required.');
                if (
                  ((T = { ...I.value[ie] }),
                  T &&
                    ((q.expanded = T.expanded),
                    (T.level = T.level || q.level),
                    (T.display = !!(T.expanded && q.display)),
                    typeof T.lazy == 'boolean' &&
                      (typeof T.loaded == 'boolean' &&
                        T.loaded &&
                        (q.noLazyChildren = !(T.children && T.children.length)),
                      (q.loading = T.loading))),
                  Z++,
                  Y.push(p(B, F + Z, q)),
                  T)
                ) {
                  const J = K.value[ie] || B[re.value];
                  pe(J, T);
                }
              });
          };
          T.display = !0;
          const me = K.value[ue] || $[re.value];
          pe(me, T);
        }
        return Y;
      } else return p($, F, void 0);
    },
    tooltipContent: d,
    tooltipTrigger: f,
  };
}
const th = {
  store: { required: !0, type: Object },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: { type: Object },
  context: { default: () => ({}), type: Object },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: { type: String, default: '' },
  highlight: Boolean,
};
var nh = ae({
  name: 'ElTableBody',
  props: th,
  setup(e) {
    const t = Pe(),
      n = xe(vt),
      l = ce('table'),
      { wrappedRowRender: r, tooltipContent: a, tooltipTrigger: o } = eh(e),
      { onColumnsChange: i, onScrollableChange: s } = $o(n);
    return (
      se(e.store.states.hoverRow, (u, d) => {
        !e.store.states.isComplex.value ||
          !pt ||
          Tc(() => {
            const f = t == null ? void 0 : t.vnode.el,
              m = Array.from((f == null ? void 0 : f.children) || []).filter(
                (c) =>
                  c == null ? void 0 : c.classList.contains(`${l.e('row')}`),
              ),
              C = m[d],
              h = m[u];
            C && hl(C, 'hover-row'), h && Ea(h, 'hover-row');
          });
      }),
      Gl(() => {
        var u;
        (u = wt) == null || u();
      }),
      {
        ns: l,
        onColumnsChange: i,
        onScrollableChange: s,
        wrappedRowRender: r,
        tooltipContent: a,
        tooltipTrigger: o,
      }
    );
  },
  render() {
    const { wrappedRowRender: e, store: t } = this,
      n = t.states.data.value || [];
    return G('tbody', { tabIndex: -1 }, [
      n.reduce((l, r) => l.concat(e(r, l.length)), []),
    ]);
  },
});
function dr(e) {
  const t = e.tableLayout === 'auto';
  let n = e.columns || [];
  t && n.every((r) => r.width === void 0) && (n = []);
  const l = (r) => {
    const a = { key: `${e.tableLayout}_${r.id}`, style: {}, name: void 0 };
    return t ? (a.style = { width: `${r.width}px` }) : (a.name = r.id), a;
  };
  return G(
    'colgroup',
    {},
    n.map((r) => G('col', l(r))),
  );
}
dr.props = ['columns', 'tableLayout'];
function lh() {
  const e = xe(vt),
    t = e == null ? void 0 : e.store,
    n = x(() => t.states.fixedLeafColumnsLength.value),
    l = x(() => t.states.rightFixedColumns.value.length),
    r = x(() => t.states.columns.value.length),
    a = x(() => t.states.fixedColumns.value.length),
    o = x(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: l,
    columnsCount: r,
    leftFixedCount: a,
    rightFixedCount: o,
    columns: t.states.columns,
  };
}
function rh(e) {
  const { columns: t } = lh(),
    n = ce('table');
  return {
    getCellClasses: (a, o) => {
      const i = a[o],
        s = [
          n.e('cell'),
          i.id,
          i.align,
          i.labelClassName,
          ...sr(n.b(), o, i.fixed, e.store),
        ];
      return (
        i.className && s.push(i.className),
        i.children || s.push(n.is('leaf')),
        s
      );
    },
    getCellStyles: (a, o) => {
      const i = ur(o, a.fixed, e.store);
      return on(i, 'left'), on(i, 'right'), i;
    },
    columns: t,
  };
}
var ah = ae({
  name: 'ElTableFooter',
  props: {
    fixed: { type: String, default: '' },
    store: { required: !0, type: Object },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: { type: Object, default: () => ({ prop: '', order: '' }) },
  },
  setup(e) {
    const { getCellClasses: t, getCellStyles: n, columns: l } = rh(e);
    return { ns: ce('table'), getCellClasses: t, getCellStyles: n, columns: l };
  },
  render() {
    const {
        columns: e,
        getCellStyles: t,
        getCellClasses: n,
        summaryMethod: l,
        sumText: r,
        ns: a,
      } = this,
      o = this.store.states.data.value;
    let i = [];
    return (
      l
        ? (i = l({ columns: e, data: o }))
        : e.forEach((s, u) => {
            if (u === 0) {
              i[u] = r;
              return;
            }
            const d = o.map((h) => Number(h[s.property])),
              f = [];
            let m = !0;
            d.forEach((h) => {
              if (!Number.isNaN(+h)) {
                m = !1;
                const c = `${h}`.split('.')[1];
                f.push(c ? c.length : 0);
              }
            });
            const C = Math.max.apply(null, f);
            m
              ? (i[u] = '')
              : (i[u] = d.reduce((h, c) => {
                  const g = Number(c);
                  return Number.isNaN(+g)
                    ? h
                    : Number.parseFloat((h + c).toFixed(Math.min(C, 20)));
                }, 0));
          }),
      G(
        'table',
        {
          class: a.e('footer'),
          cellspacing: '0',
          cellpadding: '0',
          border: '0',
        },
        [
          dr({ columns: e }),
          G('tbody', [
            G('tr', {}, [
              ...e.map((s, u) =>
                G(
                  'td',
                  {
                    key: u,
                    colspan: s.colSpan,
                    rowspan: s.rowSpan,
                    class: n(e, u),
                    style: t(s, u),
                  },
                  [G('div', { class: ['cell', s.labelClassName] }, [i[u]])],
                ),
              ),
            ]),
          ]),
        ],
      )
    );
  },
});
function oh(e) {
  return {
    setCurrentRow: (d) => {
      e.commit('setCurrentRow', d);
    },
    getSelectionRows: () => e.getSelectionRows(),
    toggleRowSelection: (d, f) => {
      e.toggleRowSelection(d, f, !1), e.updateAllSelected();
    },
    clearSelection: () => {
      e.clearSelection();
    },
    clearFilter: (d) => {
      e.clearFilter(d);
    },
    toggleAllSelection: () => {
      e.commit('toggleAllSelection');
    },
    toggleRowExpansion: (d, f) => {
      e.toggleRowExpansionAdapter(d, f);
    },
    clearSort: () => {
      e.clearSort();
    },
    sort: (d, f) => {
      e.commit('sort', { prop: d, order: f });
    },
  };
}
function ih(e, t, n, l) {
  const r = P(!1),
    a = P(null),
    o = P(!1),
    i = (T) => {
      o.value = T;
    },
    s = P({ width: null, height: null, headerHeight: null }),
    u = P(!1),
    d = { display: 'inline-block', verticalAlign: 'middle' },
    f = P(),
    m = P(0),
    C = P(0),
    h = P(0),
    c = P(0),
    g = P(0);
  Qt(() => {
    t.setHeight(e.height);
  }),
    Qt(() => {
      t.setMaxHeight(e.maxHeight);
    }),
    se(
      () => [e.currentRowKey, n.states.rowKey],
      ([T, W]) => {
        !v(W) || !v(T) || n.setCurrentRowKey(`${T}`);
      },
      { immediate: !0 },
    ),
    se(
      () => e.data,
      (T) => {
        l.store.commit('setData', T);
      },
      { immediate: !0, deep: !0 },
    ),
    Qt(() => {
      e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
    });
  const b = () => {
      l.store.commit('setHoverRow', null),
        l.hoverState && (l.hoverState = null);
    },
    y = (T, W) => {
      const { pixelX: Y, pixelY: Z } = W;
      Math.abs(Y) >= Math.abs(Z) &&
        (l.refs.bodyWrapper.scrollLeft += W.pixelX / 5);
    },
    w = x(
      () =>
        e.height ||
        e.maxHeight ||
        n.states.fixedColumns.value.length > 0 ||
        n.states.rightFixedColumns.value.length > 0,
    ),
    p = x(() => ({ width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : '' })),
    S = () => {
      w.value && t.updateElsHeight(),
        t.updateColumnsWidth(),
        requestAnimationFrame(k);
    };
  it(async () => {
    await ve(), n.updateColumns(), V(), requestAnimationFrame(S);
    const T = l.vnode.el,
      W = l.refs.headerWrapper;
    e.flexible &&
      T &&
      T.parentElement &&
      (T.parentElement.style.minWidth = '0'),
      (s.value = {
        width: (f.value = T.offsetWidth),
        height: T.offsetHeight,
        headerHeight: e.showHeader && W ? W.offsetHeight : null,
      }),
      n.states.columns.value.forEach((Y) => {
        Y.filteredValue &&
          Y.filteredValue.length &&
          l.store.commit('filterChange', {
            column: Y,
            values: Y.filteredValue,
            silent: !0,
          });
      }),
      (l.$ready = !0);
  });
  const O = (T, W) => {
      if (!T) return;
      const Y = Array.from(T.classList).filter(
        (Z) => !Z.startsWith('is-scrolling-'),
      );
      Y.push(t.scrollX.value ? W : 'is-scrolling-none'),
        (T.className = Y.join(' '));
    },
    $ = (T) => {
      const { tableWrapper: W } = l.refs;
      O(W, T);
    },
    F = (T) => {
      const { tableWrapper: W } = l.refs;
      return !!(W && W.classList.contains(T));
    },
    k = function () {
      if (!l.refs.scrollBarRef) return;
      if (!t.scrollX.value) {
        const Ce = 'is-scrolling-none';
        F(Ce) || $(Ce);
        return;
      }
      const T = l.refs.scrollBarRef.wrapRef;
      if (!T) return;
      const { scrollLeft: W, offsetWidth: Y, scrollWidth: Z } = T,
        { headerWrapper: pe, footerWrapper: me } = l.refs;
      pe && (pe.scrollLeft = W), me && (me.scrollLeft = W);
      const Ae = Z - Y - 1;
      W >= Ae
        ? $('is-scrolling-right')
        : $(W === 0 ? 'is-scrolling-left' : 'is-scrolling-middle');
    },
    V = () => {
      l.refs.scrollBarRef &&
        (l.refs.scrollBarRef.wrapRef &&
          cl(l.refs.scrollBarRef.wrapRef, 'scroll', k, { passive: !0 }),
        e.fit ? en(l.vnode.el, z) : cl(window, 'resize', z),
        en(l.refs.bodyWrapper, () => {
          var T, W;
          z(),
            (W = (T = l.refs) == null ? void 0 : T.scrollBarRef) == null ||
              W.update();
        }));
    },
    z = () => {
      var T, W, Y, Z;
      const pe = l.vnode.el;
      if (!l.$ready || !pe) return;
      let me = !1;
      const { width: Ae, height: Ce, headerHeight: B } = s.value,
        q = (f.value = pe.offsetWidth);
      Ae !== q && (me = !0);
      const ie = pe.offsetHeight;
      (e.height || w.value) && Ce !== ie && (me = !0);
      const J =
        e.tableLayout === 'fixed'
          ? l.refs.headerWrapper
          : (T = l.refs.tableHeaderRef) == null
          ? void 0
          : T.$el;
      e.showHeader && (J == null ? void 0 : J.offsetHeight) !== B && (me = !0),
        (m.value =
          ((W = l.refs.tableWrapper) == null ? void 0 : W.scrollHeight) || 0),
        (h.value = (J == null ? void 0 : J.scrollHeight) || 0),
        (c.value =
          ((Y = l.refs.footerWrapper) == null ? void 0 : Y.offsetHeight) || 0),
        (g.value =
          ((Z = l.refs.appendWrapper) == null ? void 0 : Z.offsetHeight) || 0),
        (C.value = m.value - h.value - c.value - g.value),
        me &&
          ((s.value = {
            width: q,
            height: ie,
            headerHeight:
              (e.showHeader && (J == null ? void 0 : J.offsetHeight)) || 0,
          }),
          S());
    },
    I = Pt(),
    K = x(() => {
      const { bodyWidth: T, scrollY: W, gutterWidth: Y } = t;
      return T.value ? `${T.value - (W.value ? Y : 0)}px` : '';
    }),
    re = x(() => (e.maxHeight ? 'fixed' : e.tableLayout)),
    fe = x(() => {
      if (e.data && e.data.length) return null;
      let T = '100%';
      e.height && C.value && (T = `${C.value}px`);
      const W = f.value;
      return { width: W ? `${W}px` : '', height: T };
    }),
    ge = x(() =>
      e.height
        ? {
            height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`,
          }
        : e.maxHeight
        ? {
            maxHeight: Number.isNaN(Number(e.maxHeight))
              ? e.maxHeight
              : `${e.maxHeight}px`,
          }
        : {},
    ),
    ye = x(() =>
      e.height
        ? { height: '100%' }
        : e.maxHeight
        ? Number.isNaN(Number(e.maxHeight))
          ? { maxHeight: `calc(${e.maxHeight} - ${h.value + c.value}px)` }
          : { maxHeight: `${e.maxHeight - h.value - c.value}px` }
        : {},
    );
  return {
    isHidden: r,
    renderExpanded: a,
    setDragVisible: i,
    isGroup: u,
    handleMouseLeave: b,
    handleHeaderFooterMousewheel: y,
    tableSize: I,
    emptyBlockStyle: fe,
    handleFixedMousewheel: (T, W) => {
      const Y = l.refs.bodyWrapper;
      if (Math.abs(W.spinY) > 0) {
        const Z = Y.scrollTop;
        W.pixelY < 0 && Z !== 0 && T.preventDefault(),
          W.pixelY > 0 &&
            Y.scrollHeight - Y.clientHeight > Z &&
            T.preventDefault(),
          (Y.scrollTop += Math.ceil(W.pixelY / 5));
      } else Y.scrollLeft += Math.ceil(W.pixelX / 5);
    },
    resizeProxyVisible: o,
    bodyWidth: K,
    resizeState: s,
    doLayout: S,
    tableBodyStyles: p,
    tableLayout: re,
    scrollbarViewStyle: d,
    tableInnerStyle: ge,
    scrollbarStyle: ye,
  };
}
function sh(e) {
  const t = P(),
    n = () => {
      const r = e.vnode.el.querySelector('.hidden-columns'),
        a = { childList: !0, subtree: !0 },
        o = e.store.states.updateOrderFns;
      (t.value = new MutationObserver(() => {
        o.forEach((i) => i());
      })),
        t.value.observe(r, a);
    };
  it(() => {
    n();
  }),
    Gl(() => {
      var l;
      (l = t.value) == null || l.disconnect();
    });
}
var uh = {
  data: { type: Array, default: () => [] },
  size: nl,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: { type: Boolean, default: !0 },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: { type: Boolean, default: !0 },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: { type: Boolean, default: !0 },
  indent: { type: Number, default: 16 },
  treeProps: {
    type: Object,
    default: () => ({ hasChildren: 'hasChildren', children: 'children' }),
  },
  lazy: Boolean,
  load: Function,
  style: { type: Object, default: () => ({}) },
  className: { type: String, default: '' },
  tableLayout: { type: String, default: 'fixed' },
  scrollbarAlwaysOn: { type: Boolean, default: !1 },
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object],
};
const dh = () => {
  const e = P(),
    t = (a, o) => {
      const i = e.value;
      i && i.scrollTo(a, o);
    },
    n = (a, o) => {
      const i = e.value;
      i && Ge(o) && ['Top', 'Left'].includes(a) && i[`setScroll${a}`](o);
    };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (a) => n('Top', a),
    setScrollLeft: (a) => n('Left', a),
  };
};
let ch = 1;
const fh = ae({
    name: 'ElTable',
    directives: { Mousewheel: jf },
    components: {
      TableHeader: Qv,
      TableBody: nh,
      TableFooter: ah,
      ElScrollbar: Kl,
      hColgroup: dr,
    },
    props: uh,
    emits: [
      'select',
      'select-all',
      'selection-change',
      'cell-mouse-enter',
      'cell-mouse-leave',
      'cell-contextmenu',
      'cell-click',
      'cell-dblclick',
      'row-click',
      'row-contextmenu',
      'row-dblclick',
      'header-click',
      'header-contextmenu',
      'sort-change',
      'filter-change',
      'current-change',
      'header-dragend',
      'expand-change',
    ],
    setup(e) {
      const { t } = Je(),
        n = ce('table'),
        l = Pe();
      _t(vt, l);
      const r = Wv(l, e);
      l.store = r;
      const a = new Bv({
        store: l.store,
        table: l,
        fit: e.fit,
        showHeader: e.showHeader,
      });
      l.layout = a;
      const o = x(() => (r.states.data.value || []).length === 0),
        {
          setCurrentRow: i,
          getSelectionRows: s,
          toggleRowSelection: u,
          clearSelection: d,
          clearFilter: f,
          toggleAllSelection: m,
          toggleRowExpansion: C,
          clearSort: h,
          sort: c,
        } = oh(r),
        {
          isHidden: g,
          renderExpanded: b,
          setDragVisible: y,
          isGroup: w,
          handleMouseLeave: p,
          handleHeaderFooterMousewheel: S,
          tableSize: O,
          emptyBlockStyle: $,
          handleFixedMousewheel: F,
          resizeProxyVisible: k,
          bodyWidth: V,
          resizeState: z,
          doLayout: I,
          tableBodyStyles: K,
          tableLayout: re,
          scrollbarViewStyle: fe,
          tableInnerStyle: ge,
          scrollbarStyle: ye,
        } = ih(e, a, r, l),
        {
          scrollBarRef: ue,
          scrollTo: T,
          setScrollLeft: W,
          setScrollTop: Y,
        } = dh(),
        Z = ln(I, 50),
        pe = `${n.namespace.value}-table_${ch++}`;
      (l.tableId = pe),
        (l.state = {
          isGroup: w,
          resizeState: z,
          doLayout: I,
          debouncedUpdateLayout: Z,
        });
      const me = x(() => e.sumText || t('el.table.sumText')),
        Ae = x(() => e.emptyText || t('el.table.emptyText'));
      return (
        sh(l),
        {
          ns: n,
          layout: a,
          store: r,
          handleHeaderFooterMousewheel: S,
          handleMouseLeave: p,
          tableId: pe,
          tableSize: O,
          isHidden: g,
          isEmpty: o,
          renderExpanded: b,
          resizeProxyVisible: k,
          resizeState: z,
          isGroup: w,
          bodyWidth: V,
          tableBodyStyles: K,
          emptyBlockStyle: $,
          debouncedUpdateLayout: Z,
          handleFixedMousewheel: F,
          setCurrentRow: i,
          getSelectionRows: s,
          toggleRowSelection: u,
          clearSelection: d,
          clearFilter: f,
          toggleAllSelection: m,
          toggleRowExpansion: C,
          clearSort: h,
          doLayout: I,
          sort: c,
          t,
          setDragVisible: y,
          context: l,
          computedSumText: me,
          computedEmptyText: Ae,
          tableLayout: re,
          scrollbarViewStyle: fe,
          tableInnerStyle: ge,
          scrollbarStyle: ye,
          scrollBarRef: ue,
          scrollTo: T,
          setScrollLeft: W,
          setScrollTop: Y,
        }
      );
    },
  }),
  ph = ['data-prefix'],
  vh = { ref: 'hiddenColumns', class: 'hidden-columns' };
function hh(e, t, n, l, r, a) {
  const o = Le('hColgroup'),
    i = Le('table-header'),
    s = Le('table-body'),
    u = Le('el-scrollbar'),
    d = Le('table-footer'),
    f = _l('mousewheel');
  return (
    A(),
    H(
      'div',
      {
        ref: 'tableWrapper',
        class: M([
          {
            [e.ns.m('fit')]: e.fit,
            [e.ns.m('striped')]: e.stripe,
            [e.ns.m('border')]: e.border || e.isGroup,
            [e.ns.m('hidden')]: e.isHidden,
            [e.ns.m('group')]: e.isGroup,
            [e.ns.m('fluid-height')]: e.maxHeight,
            [e.ns.m('scrollable-x')]: e.layout.scrollX.value,
            [e.ns.m('scrollable-y')]: e.layout.scrollY.value,
            [e.ns.m('enable-row-hover')]: !e.store.states.isComplex.value,
            [e.ns.m('enable-row-transition')]:
              (e.store.states.data.value || []).length !== 0 &&
              (e.store.states.data.value || []).length < 100,
            'has-footer': e.showSummary,
          },
          e.ns.m(e.tableSize),
          e.className,
          e.ns.b(),
          e.ns.m(`layout-${e.tableLayout}`),
        ]),
        style: Fe(e.style),
        'data-prefix': e.ns.namespace.value,
        onMouseleave:
          t[0] ||
          (t[0] = (...m) => e.handleMouseLeave && e.handleMouseLeave(...m)),
      },
      [
        le(
          'div',
          { class: M(e.ns.e('inner-wrapper')), style: Fe(e.tableInnerStyle) },
          [
            le('div', vh, [Te(e.$slots, 'default')], 512),
            e.showHeader && e.tableLayout === 'fixed'
              ? Ue(
                  (A(),
                  H(
                    'div',
                    {
                      key: 0,
                      ref: 'headerWrapper',
                      class: M(e.ns.e('header-wrapper')),
                    },
                    [
                      le(
                        'table',
                        {
                          ref: 'tableHeader',
                          class: M(e.ns.e('header')),
                          style: Fe(e.tableBodyStyles),
                          border: '0',
                          cellpadding: '0',
                          cellspacing: '0',
                        },
                        [
                          Oe(
                            o,
                            {
                              columns: e.store.states.columns.value,
                              'table-layout': e.tableLayout,
                            },
                            null,
                            8,
                            ['columns', 'table-layout'],
                          ),
                          Oe(
                            i,
                            {
                              ref: 'tableHeaderRef',
                              border: e.border,
                              'default-sort': e.defaultSort,
                              store: e.store,
                              onSetDragVisible: e.setDragVisible,
                            },
                            null,
                            8,
                            [
                              'border',
                              'default-sort',
                              'store',
                              'onSetDragVisible',
                            ],
                          ),
                        ],
                        6,
                      ),
                    ],
                    2,
                  )),
                  [[f, e.handleHeaderFooterMousewheel]],
                )
              : U('v-if', !0),
            le(
              'div',
              { ref: 'bodyWrapper', class: M(e.ns.e('body-wrapper')) },
              [
                Oe(
                  u,
                  {
                    ref: 'scrollBarRef',
                    'view-style': e.scrollbarViewStyle,
                    'wrap-style': e.scrollbarStyle,
                    always: e.scrollbarAlwaysOn,
                  },
                  {
                    default: te(() => [
                      le(
                        'table',
                        {
                          ref: 'tableBody',
                          class: M(e.ns.e('body')),
                          cellspacing: '0',
                          cellpadding: '0',
                          border: '0',
                          style: Fe({
                            width: e.bodyWidth,
                            tableLayout: e.tableLayout,
                          }),
                        },
                        [
                          Oe(
                            o,
                            {
                              columns: e.store.states.columns.value,
                              'table-layout': e.tableLayout,
                            },
                            null,
                            8,
                            ['columns', 'table-layout'],
                          ),
                          e.showHeader && e.tableLayout === 'auto'
                            ? (A(),
                              ne(
                                i,
                                {
                                  key: 0,
                                  ref: 'tableHeaderRef',
                                  border: e.border,
                                  'default-sort': e.defaultSort,
                                  store: e.store,
                                  onSetDragVisible: e.setDragVisible,
                                },
                                null,
                                8,
                                [
                                  'border',
                                  'default-sort',
                                  'store',
                                  'onSetDragVisible',
                                ],
                              ))
                            : U('v-if', !0),
                          Oe(
                            s,
                            {
                              context: e.context,
                              highlight: e.highlightCurrentRow,
                              'row-class-name': e.rowClassName,
                              'tooltip-effect': e.tooltipEffect,
                              'tooltip-options': e.tooltipOptions,
                              'row-style': e.rowStyle,
                              store: e.store,
                              stripe: e.stripe,
                            },
                            null,
                            8,
                            [
                              'context',
                              'highlight',
                              'row-class-name',
                              'tooltip-effect',
                              'tooltip-options',
                              'row-style',
                              'store',
                              'stripe',
                            ],
                          ),
                        ],
                        6,
                      ),
                      e.isEmpty
                        ? (A(),
                          H(
                            'div',
                            {
                              key: 0,
                              ref: 'emptyBlock',
                              style: Fe(e.emptyBlockStyle),
                              class: M(e.ns.e('empty-block')),
                            },
                            [
                              le(
                                'span',
                                { class: M(e.ns.e('empty-text')) },
                                [
                                  Te(e.$slots, 'empty', {}, () => [
                                    Ln(he(e.computedEmptyText), 1),
                                  ]),
                                ],
                                2,
                              ),
                            ],
                            6,
                          ))
                        : U('v-if', !0),
                      e.$slots.append
                        ? (A(),
                          H(
                            'div',
                            {
                              key: 1,
                              ref: 'appendWrapper',
                              class: M(e.ns.e('append-wrapper')),
                            },
                            [Te(e.$slots, 'append')],
                            2,
                          ))
                        : U('v-if', !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['view-style', 'wrap-style', 'always'],
                ),
              ],
              2,
            ),
            e.showSummary
              ? Ue(
                  (A(),
                  H(
                    'div',
                    {
                      key: 1,
                      ref: 'footerWrapper',
                      class: M(e.ns.e('footer-wrapper')),
                    },
                    [
                      Oe(
                        d,
                        {
                          border: e.border,
                          'default-sort': e.defaultSort,
                          store: e.store,
                          style: Fe(e.tableBodyStyles),
                          'sum-text': e.computedSumText,
                          'summary-method': e.summaryMethod,
                        },
                        null,
                        8,
                        [
                          'border',
                          'default-sort',
                          'store',
                          'style',
                          'sum-text',
                          'summary-method',
                        ],
                      ),
                    ],
                    2,
                  )),
                  [
                    [tn, !e.isEmpty],
                    [f, e.handleHeaderFooterMousewheel],
                  ],
                )
              : U('v-if', !0),
            e.border || e.isGroup
              ? (A(),
                H(
                  'div',
                  { key: 2, class: M(e.ns.e('border-left-patch')) },
                  null,
                  2,
                ))
              : U('v-if', !0),
          ],
          6,
        ),
        Ue(
          le(
            'div',
            { ref: 'resizeProxy', class: M(e.ns.e('column-resize-proxy')) },
            null,
            2,
          ),
          [[tn, e.resizeProxyVisible]],
        ),
      ],
      46,
      ph,
    )
  );
}
var gh = Re(fh, [
  ['render', hh],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue',
  ],
]);
const mh = {
    selection: 'table-column--selection',
    expand: 'table__expand-column',
  },
  bh = {
    default: { order: '' },
    selection: { width: 48, minWidth: 48, realWidth: 48, order: '' },
    expand: { width: 48, minWidth: 48, realWidth: 48, order: '' },
    index: { width: 48, minWidth: 48, realWidth: 48, order: '' },
  },
  yh = (e) => mh[e] || '',
  Ch = {
    selection: {
      renderHeader({ store: e, column: t }) {
        function n() {
          return e.states.data.value && e.states.data.value.length === 0;
        }
        return G(an, {
          disabled: n(),
          size: e.states.tableSize.value,
          indeterminate:
            e.states.selection.value.length > 0 &&
            !e.states.isAllSelected.value,
          'onUpdate:modelValue': e.toggleAllSelection,
          modelValue: e.states.isAllSelected.value,
          ariaLabel: t.label,
        });
      },
      renderCell({ row: e, column: t, store: n, $index: l }) {
        return G(an, {
          disabled: t.selectable ? !t.selectable.call(null, e, l) : !1,
          size: n.states.tableSize.value,
          onChange: () => {
            n.commit('rowSelectedChanged', e);
          },
          onClick: (r) => r.stopPropagation(),
          modelValue: n.isSelected(e),
          ariaLabel: t.label,
        });
      },
      sortable: !1,
      resizable: !1,
    },
    index: {
      renderHeader({ column: e }) {
        return e.label || '#';
      },
      renderCell({ column: e, $index: t }) {
        let n = t + 1;
        const l = e.index;
        return (
          typeof l == 'number'
            ? (n = t + l)
            : typeof l == 'function' && (n = l(t)),
          G('div', {}, [n])
        );
      },
      sortable: !1,
    },
    expand: {
      renderHeader({ column: e }) {
        return e.label || '';
      },
      renderCell({ row: e, store: t, expanded: n }) {
        const { ns: l } = t,
          r = [l.e('expand-icon')];
        return (
          n && r.push(l.em('expand-icon', 'expanded')),
          G(
            'div',
            {
              class: r,
              onClick: function (o) {
                o.stopPropagation(), t.toggleRowExpansion(e);
              },
            },
            { default: () => [G(Ye, null, { default: () => [G(Ul)] })] },
          )
        );
      },
      sortable: !1,
      resizable: !1,
    },
  };
function wh({ row: e, column: t, $index: n }) {
  var l;
  const r = t.property,
    a = r && Hn(e, r).value;
  return t && t.formatter
    ? t.formatter(e, t, a, n)
    : ((l = a == null ? void 0 : a.toString) == null ? void 0 : l.call(a)) ||
        '';
}
function Sh({ row: e, treeNode: t, store: n }, l = !1) {
  const { ns: r } = n;
  if (!t) return l ? [G('span', { class: r.e('placeholder') })] : null;
  const a = [],
    o = function (i) {
      i.stopPropagation(), !t.loading && n.loadOrToggle(e);
    };
  if (
    (t.indent &&
      a.push(
        G('span', {
          class: r.e('indent'),
          style: { 'padding-left': `${t.indent}px` },
        }),
      ),
    typeof t.expanded == 'boolean' && !t.noLazyChildren)
  ) {
    const i = [
      r.e('expand-icon'),
      t.expanded ? r.em('expand-icon', 'expanded') : '',
    ];
    let s = Ul;
    t.loading && (s = ni),
      a.push(
        G(
          'div',
          { class: i, onClick: o },
          {
            default: () => [
              G(
                Ye,
                { class: { [r.is('loading')]: t.loading } },
                { default: () => [G(s)] },
              ),
            ],
          },
        ),
      );
  } else a.push(G('span', { class: r.e('placeholder') }));
  return a;
}
function oa(e, t) {
  return e.reduce((n, l) => ((n[l] = l), n), t);
}
function Eh(e, t) {
  const n = Pe();
  return {
    registerComplexWatchers: () => {
      const a = ['fixed'],
        o = { realWidth: 'width', realMinWidth: 'minWidth' },
        i = oa(a, o);
      Object.keys(i).forEach((s) => {
        const u = o[s];
        On(t, u) &&
          se(
            () => t[u],
            (d) => {
              let f = d;
              u === 'width' && s === 'realWidth' && (f = ir(d)),
                u === 'minWidth' && s === 'realMinWidth' && (f = wo(d)),
                (n.columnConfig.value[u] = f),
                (n.columnConfig.value[s] = f);
              const m = u === 'fixed';
              e.value.store.scheduleLayout(m);
            },
          );
      });
    },
    registerNormalWatchers: () => {
      const a = [
          'label',
          'filters',
          'filterMultiple',
          'filteredValue',
          'sortable',
          'index',
          'formatter',
          'className',
          'labelClassName',
          'showOverflowTooltip',
        ],
        o = {
          property: 'prop',
          align: 'realAlign',
          headerAlign: 'realHeaderAlign',
        },
        i = oa(a, o);
      Object.keys(i).forEach((s) => {
        const u = o[s];
        On(t, u) &&
          se(
            () => t[u],
            (d) => {
              n.columnConfig.value[s] = d;
            },
          );
      });
    },
  };
}
function Oh(e, t, n) {
  const l = Pe(),
    r = P(''),
    a = P(!1),
    o = P(),
    i = P(),
    s = ce('table');
  Qt(() => {
    (o.value = e.align ? `is-${e.align}` : null), o.value;
  }),
    Qt(() => {
      (i.value = e.headerAlign ? `is-${e.headerAlign}` : o.value), i.value;
    });
  const u = x(() => {
      let p = l.vnode.vParent || l.parent;
      for (; p && !p.tableId && !p.columnId; ) p = p.vnode.vParent || p.parent;
      return p;
    }),
    d = x(() => {
      const { store: p } = l.parent;
      if (!p) return !1;
      const { treeData: S } = p.states,
        O = S.value;
      return O && Object.keys(O).length > 0;
    }),
    f = P(ir(e.width)),
    m = P(wo(e.minWidth)),
    C = (p) => (
      f.value && (p.width = f.value),
      m.value && (p.minWidth = m.value),
      !f.value && m.value && (p.width = void 0),
      p.minWidth || (p.minWidth = 80),
      (p.realWidth = Number(p.width === void 0 ? p.minWidth : p.width)),
      p
    ),
    h = (p) => {
      const S = p.type,
        O = Ch[S] || {};
      Object.keys(O).forEach((F) => {
        const k = O[F];
        F !== 'className' && k !== void 0 && (p[F] = k);
      });
      const $ = yh(S);
      if ($) {
        const F = `${v(s.namespace)}-${$}`;
        p.className = p.className ? `${p.className} ${F}` : F;
      }
      return p;
    },
    c = (p) => {
      Array.isArray(p) ? p.forEach((O) => S(O)) : S(p);
      function S(O) {
        var $;
        (($ = O == null ? void 0 : O.type) == null ? void 0 : $.name) ===
          'ElTableColumn' && (O.vParent = l);
      }
    };
  return {
    columnId: r,
    realAlign: o,
    isSubColumn: a,
    realHeaderAlign: i,
    columnOrTableParent: u,
    setColumnWidth: C,
    setColumnForcedProps: h,
    setColumnRenders: (p) => {
      e.renderHeader ||
        (p.type !== 'selection' &&
          (p.renderHeader = (O) => {
            l.columnConfig.value.label;
            const $ = t.header;
            return $ ? $(O) : p.label;
          }));
      let S = p.renderCell;
      return (
        p.type === 'expand'
          ? ((p.renderCell = (O) => G('div', { class: 'cell' }, [S(O)])),
            (n.value.renderExpanded = (O) =>
              t.default ? t.default(O) : t.default))
          : ((S = S || wh),
            (p.renderCell = (O) => {
              let $ = null;
              if (t.default) {
                const K = t.default(O);
                $ = K.some((re) => re.type !== li) ? K : S(O);
              } else $ = S(O);
              const { columns: F } = n.value.store.states,
                k = F.value.findIndex((K) => K.type === 'default'),
                V = d.value && O.cellIndex === k,
                z = Sh(O, V),
                I = { class: 'cell', style: {} };
              return (
                p.showOverflowTooltip &&
                  ((I.class = `${I.class} ${v(s.namespace)}-tooltip`),
                  (I.style = {
                    width: `${
                      (O.column.realWidth || Number(O.column.width)) - 1
                    }px`,
                  })),
                c($),
                G('div', I, [z, $])
              );
            })),
        p
      );
    },
    getPropsData: (...p) =>
      p.reduce(
        (S, O) => (
          Array.isArray(O) &&
            O.forEach(($) => {
              S[$] = e[$];
            }),
          S
        ),
        {},
      ),
    getColumnElIndex: (p, S) => Array.prototype.indexOf.call(p, S),
    updateColumnOrder: () => {
      n.value.store.commit('updateColumnOrder', l.columnConfig.value);
    },
  };
}
var xh = {
  type: { type: String, default: 'default' },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: { type: [String, Number], default: '' },
  minWidth: { type: [String, Number], default: '' },
  renderHeader: Function,
  sortable: { type: [Boolean, String], default: !1 },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: { type: Boolean, default: !0 },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: { type: [Boolean, Object], default: void 0 },
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: { type: Boolean, default: !0 },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ['ascending', 'descending', null],
    validator: (e) =>
      e.every((t) => ['ascending', 'descending', null].includes(t)),
  },
};
let $h = 1;
var Po = ae({
  name: 'ElTableColumn',
  components: { ElCheckbox: an },
  props: xh,
  setup(e, { slots: t }) {
    const n = Pe(),
      l = P({}),
      r = x(() => {
        let w = n.parent;
        for (; w && !w.tableId; ) w = w.parent;
        return w;
      }),
      { registerNormalWatchers: a, registerComplexWatchers: o } = Eh(r, e),
      {
        columnId: i,
        isSubColumn: s,
        realHeaderAlign: u,
        columnOrTableParent: d,
        setColumnWidth: f,
        setColumnForcedProps: m,
        setColumnRenders: C,
        getPropsData: h,
        getColumnElIndex: c,
        realAlign: g,
        updateColumnOrder: b,
      } = Oh(e, t, r),
      y = d.value;
    (i.value = `${y.tableId || y.columnId}_column_${$h++}`),
      Sa(() => {
        s.value = r.value !== y;
        const w = e.type || 'default',
          p = e.sortable === '' ? !0 : e.sortable,
          S = Sn(e.showOverflowTooltip)
            ? y.props.showOverflowTooltip
            : e.showOverflowTooltip,
          O = {
            ...bh[w],
            id: i.value,
            type: w,
            property: e.prop || e.property,
            align: g,
            headerAlign: u,
            showOverflowTooltip: S,
            filterable: e.filters || e.filterMethod,
            filteredValue: [],
            filterPlacement: '',
            isColumnGroup: !1,
            isSubColumn: !1,
            filterOpened: !1,
            sortable: p,
            index: e.index,
            rawColumnKey: n.vnode.key,
          };
        let z = h(
          [
            'columnKey',
            'label',
            'className',
            'labelClassName',
            'type',
            'renderHeader',
            'formatter',
            'fixed',
            'resizable',
          ],
          ['sortMethod', 'sortBy', 'sortOrders'],
          ['selectable', 'reserveSelection'],
          [
            'filterMethod',
            'filters',
            'filterMultiple',
            'filterOpened',
            'filteredValue',
            'filterPlacement',
          ],
        );
        (z = $v(O, z)), (z = Pv(C, f, m)(z)), (l.value = z), a(), o();
      }),
      it(() => {
        var w;
        const p = d.value,
          S = s.value
            ? p.vnode.el.children
            : (w = p.refs.hiddenColumns) == null
            ? void 0
            : w.children,
          O = () => c(S || [], n.vnode.el);
        (l.value.getColumnIndex = O),
          O() > -1 &&
            r.value.store.commit(
              'insertColumn',
              l.value,
              s.value ? p.columnConfig.value : null,
              b,
            );
      }),
      el(() => {
        r.value.store.commit(
          'removeColumn',
          l.value,
          s.value ? y.columnConfig.value : null,
          b,
        );
      }),
      (n.columnId = i.value),
      (n.columnConfig = l);
  },
  render() {
    var e, t, n;
    try {
      const l =
          (t = (e = this.$slots).default) == null
            ? void 0
            : t.call(e, { row: {}, column: {}, $index: -1 }),
        r = [];
      if (Array.isArray(l))
        for (const o of l)
          ((n = o.type) == null ? void 0 : n.name) === 'ElTableColumn' ||
          o.shapeFlag & 2
            ? r.push(o)
            : o.type === _e &&
              Array.isArray(o.children) &&
              o.children.forEach((i) => {
                (i == null ? void 0 : i.patchFlag) !== 1024 &&
                  !rt(i == null ? void 0 : i.children) &&
                  r.push(i);
              });
      return G('div', r);
    } catch {
      return G('div', []);
    }
  },
});
const Mh = Gt(gh, { TableColumn: Po }),
  Rh = cn(Po);
export {
  Ah as E,
  Mh as a,
  to as b,
  Lh as c,
  _p as d,
  Kp as e,
  Rh as f,
  Fh as g,
};
