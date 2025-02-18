!(function (t, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(e)
    : "object" == typeof exports
    ? (module.exports = e())
    : (t.returnExports = e());
})(this, function () {
  var t,
    e,
    r = Array,
    n = r.prototype,
    o = Object,
    i = o.prototype,
    c = Function.prototype,
    u = String,
    a = u.prototype,
    s = Number,
    l = s.prototype,
    f = n.slice,
    p = n.splice,
    h = n.push,
    y = n.unshift,
    d = n.concat,
    v = c.call,
    b = Math.max,
    g = Math.min,
    w = i.toString,
    m = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
    _ = Function.prototype.toString;
  t = function (t) {
    if ("function" != typeof t) return !1;
    if (m)
      return (function (t) {
        try {
          return _.call(t), !0;
        } catch (t) {
          return !1;
        }
      })(t);
    var e = w.call(t);
    return "[object Function]" === e || "[object GeneratorFunction]" === e;
  };
  var O,
    j = RegExp.prototype.exec;
  e = function (t) {
    return (
      "object" == typeof t &&
      (m
        ? (function (t) {
            try {
              return j.call(t), !0;
            } catch (t) {
              return !1;
            }
          })(t)
        : "[object RegExp]" === w.call(t))
    );
  };
  var x = String.prototype.valueOf;
  O = function (t) {
    return (
      "string" == typeof t ||
      ("object" == typeof t &&
        (m
          ? (function (t) {
              try {
                return x.call(t), !0;
              } catch (t) {
                return !1;
              }
            })(t)
          : "[object String]" === w.call(t)))
    );
  };
  var S = (function (t) {
      var e,
        r =
          o.defineProperty &&
          (function () {
            try {
              var t = {};
              for (var e in (o.defineProperty(t, "x", {
                enumerable: !1,
                value: t,
              }),
              t))
                return !1;
              return t.x === t;
            } catch (t) {
              return !1;
            }
          })();
      return (
        (e = r
          ? function (t, e, r, n) {
              (!n && e in t) ||
                o.defineProperty(t, e, {
                  configurable: !0,
                  enumerable: !1,
                  writable: !0,
                  value: r,
                });
            }
          : function (t, e, r, n) {
              (!n && e in t) || (t[e] = r);
            }),
        function (r, n, o) {
          for (var i in n) t.call(n, i) && e(r, i, n[i], o);
        }
      );
    })(i.hasOwnProperty),
    E = function (t) {
      var e = typeof t;
      return null === t || ("object" !== e && "function" !== e);
    },
    T = function (t) {
      var e = +t;
      return (
        e != e
          ? (e = 0)
          : 0 !== e &&
            e !== 1 / 0 &&
            e !== -1 / 0 &&
            (e = (e > 0 || -1) * Math.floor(Math.abs(e))),
        e
      );
    },
    P = function (e) {
      var r, n, o;
      if (E(e)) return e;
      if (((n = e.valueOf), t(n) && ((r = n.call(e)), E(r)))) return r;
      if (((o = e.toString), t(o) && ((r = o.call(e)), E(r)))) return r;
      throw new TypeError();
    },
    A = function (t) {
      if (null == t) throw new TypeError("can't convert " + t + " to object");
      return o(t);
    },
    k = function (t) {
      return t >>> 0;
    },
    M = function () {};
  S(c, {
    bind: function (e) {
      var r = this;
      if (!t(r))
        throw new TypeError(
          "Function.prototype.bind called on incompatible " + r
        );
      for (
        var n,
          i = f.call(arguments, 1),
          c = b(0, r.length - i.length),
          u = [],
          a = 0;
        a < c;
        a++
      )
        h.call(u, "$" + a);
      return (
        (n = Function(
          "binder",
          "return function (" +
            u.join(",") +
            "){ return binder.apply(this, arguments); }"
        )(function () {
          if (this instanceof n) {
            var t = r.apply(this, d.call(i, f.call(arguments)));
            return o(t) === t ? t : this;
          }
          return r.apply(e, d.call(i, f.call(arguments)));
        })),
        r.prototype &&
          ((M.prototype = r.prototype),
          (n.prototype = new M()),
          (M.prototype = null)),
        n
      );
    },
  });
  var C = v.bind(i.hasOwnProperty),
    D = v.bind(i.toString),
    I = v.bind(a.slice),
    N = v.bind(a.split),
    F =
      r.isArray ||
      function (t) {
        return "[object Array]" === D(t);
      },
    z = 1 !== [].unshift(0);
  S(
    n,
    {
      unshift: function () {
        return y.apply(this, arguments), this.length;
      },
    },
    z
  ),
    S(r, { isArray: F });
  var R = o("a"),
    $ = "a" !== R[0] || !(0 in R),
    U = function (t) {
      var e = !0,
        r = !0;
      return (
        t &&
          (t.call("foo", function (t, r, n) {
            "object" != typeof n && (e = !1);
          }),
          t.call(
            [1],
            function () {
              "use strict";
              r = "string" == typeof this;
            },
            "x"
          )),
        !!t && e && r
      );
    };
  S(
    n,
    {
      forEach: function (e) {
        var r,
          n = A(this),
          o = $ && O(this) ? N(this, "") : n,
          i = -1,
          c = o.length >>> 0;
        if ((arguments.length > 1 && (r = arguments[1]), !t(e)))
          throw new TypeError(
            "Array.prototype.forEach callback must be a function"
          );
        for (; ++i < c; )
          i in o && (void 0 !== r ? e.call(r, o[i], i, n) : e(o[i], i, n));
      },
    },
    !U(n.forEach)
  ),
    S(
      n,
      {
        map: function (e) {
          var n,
            o = A(this),
            i = $ && O(this) ? N(this, "") : o,
            c = i.length >>> 0,
            u = r(c);
          if ((arguments.length > 1 && (n = arguments[1]), !t(e)))
            throw new TypeError(
              "Array.prototype.map callback must be a function"
            );
          for (var a = 0; a < c; a++)
            a in i &&
              (u[a] = void 0 !== n ? e.call(n, i[a], a, o) : e(i[a], a, o));
          return u;
        },
      },
      !U(n.map)
    ),
    S(
      n,
      {
        filter: function (e) {
          var r,
            n,
            o = A(this),
            i = $ && O(this) ? N(this, "") : o,
            c = i.length >>> 0,
            u = [];
          if ((arguments.length > 1 && (n = arguments[1]), !t(e)))
            throw new TypeError(
              "Array.prototype.filter callback must be a function"
            );
          for (var a = 0; a < c; a++)
            a in i &&
              ((r = i[a]),
              (void 0 === n ? e(r, a, o) : e.call(n, r, a, o)) && h.call(u, r));
          return u;
        },
      },
      !U(n.filter)
    ),
    S(
      n,
      {
        every: function (e) {
          var r,
            n = A(this),
            o = $ && O(this) ? N(this, "") : n,
            i = o.length >>> 0;
          if ((arguments.length > 1 && (r = arguments[1]), !t(e)))
            throw new TypeError(
              "Array.prototype.every callback must be a function"
            );
          for (var c = 0; c < i; c++)
            if (
              c in o &&
              !(void 0 === r ? e(o[c], c, n) : e.call(r, o[c], c, n))
            )
              return !1;
          return !0;
        },
      },
      !U(n.every)
    ),
    S(
      n,
      {
        some: function (e) {
          var r,
            n = A(this),
            o = $ && O(this) ? N(this, "") : n,
            i = o.length >>> 0;
          if ((arguments.length > 1 && (r = arguments[1]), !t(e)))
            throw new TypeError(
              "Array.prototype.some callback must be a function"
            );
          for (var c = 0; c < i; c++)
            if (
              c in o &&
              (void 0 === r ? e(o[c], c, n) : e.call(r, o[c], c, n))
            )
              return !0;
          return !1;
        },
      },
      !U(n.some)
    );
  var Z = !1;
  n.reduce &&
    (Z =
      "object" ==
      typeof n.reduce.call("es5", function (t, e, r, n) {
        return n;
      })),
    S(
      n,
      {
        reduce: function (e) {
          var r = A(this),
            n = $ && O(this) ? N(this, "") : r,
            o = n.length >>> 0;
          if (!t(e))
            throw new TypeError(
              "Array.prototype.reduce callback must be a function"
            );
          if (0 === o && 1 === arguments.length)
            throw new TypeError("reduce of empty array with no initial value");
          var i,
            c = 0;
          if (arguments.length >= 2) i = arguments[1];
          else
            for (;;) {
              if (c in n) {
                i = n[c++];
                break;
              }
              if (++c >= o)
                throw new TypeError(
                  "reduce of empty array with no initial value"
                );
            }
          for (; c < o; c++) c in n && (i = e(i, n[c], c, r));
          return i;
        },
      },
      !Z
    );
  var W = !1;
  n.reduceRight &&
    (W =
      "object" ==
      typeof n.reduceRight.call("es5", function (t, e, r, n) {
        return n;
      })),
    S(
      n,
      {
        reduceRight: function (e) {
          var r,
            n = A(this),
            o = $ && O(this) ? N(this, "") : n,
            i = o.length >>> 0;
          if (!t(e))
            throw new TypeError(
              "Array.prototype.reduceRight callback must be a function"
            );
          if (0 === i && 1 === arguments.length)
            throw new TypeError(
              "reduceRight of empty array with no initial value"
            );
          var c = i - 1;
          if (arguments.length >= 2) r = arguments[1];
          else
            for (;;) {
              if (c in o) {
                r = o[c--];
                break;
              }
              if (--c < 0)
                throw new TypeError(
                  "reduceRight of empty array with no initial value"
                );
            }
          if (c < 0) return r;
          do {
            c in o && (r = e(r, o[c], c, n));
          } while (c--);
          return r;
        },
      },
      !W
    );
  var q = n.indexOf && -1 !== [0, 1].indexOf(1, 2);
  S(
    n,
    {
      indexOf: function (t) {
        var e = $ && O(this) ? N(this, "") : A(this),
          r = e.length >>> 0;
        if (0 === r) return -1;
        var n = 0;
        for (
          arguments.length > 1 && (n = T(arguments[1])),
            n = n >= 0 ? n : b(0, r + n);
          n < r;
          n++
        )
          if (n in e && e[n] === t) return n;
        return -1;
      },
    },
    q
  );
  var J = n.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
  S(
    n,
    {
      lastIndexOf: function (t) {
        var e = $ && O(this) ? N(this, "") : A(this),
          r = e.length >>> 0;
        if (0 === r) return -1;
        var n = r - 1;
        for (
          arguments.length > 1 && (n = g(n, T(arguments[1]))),
            n = n >= 0 ? n : r - Math.abs(n);
          n >= 0;
          n--
        )
          if (n in e && t === e[n]) return n;
        return -1;
      },
    },
    J
  );
  var L = (function () {
    var t = [1, 2],
      e = t.splice();
    return 2 === t.length && F(e) && 0 === e.length;
  })();
  S(
    n,
    {
      splice: function (t, e) {
        return 0 === arguments.length ? [] : p.apply(this, arguments);
      },
    },
    !L
  );
  var B = (function () {
    var t = {};
    return n.splice.call(t, 0, 0, 1), 1 === t.length;
  })();
  S(
    n,
    {
      splice: function (t, e) {
        if (0 === arguments.length) return [];
        var r = arguments;
        return (
          (this.length = b(T(this.length), 0)),
          arguments.length > 0 &&
            "number" != typeof e &&
            ((r = f.call(arguments)).length < 2
              ? h.call(r, this.length - t)
              : (r[1] = T(e))),
          p.apply(this, r)
        );
      },
    },
    !B
  );
  var G = (function () {
      var t = new r(1e5);
      return (t[8] = "x"), t.splice(1, 1), 7 === t.indexOf("x");
    })(),
    Y = (function () {
      var t = [];
      return (t[256] = "a"), t.splice(257, 0, "b"), "a" === t[256];
    })();
  S(
    n,
    {
      splice: function (t, e) {
        for (
          var r,
            n = A(this),
            o = [],
            i = k(n.length),
            c = T(t),
            a = c < 0 ? b(i + c, 0) : g(c, i),
            s = g(b(T(e), 0), i - a),
            l = 0;
          l < s;

        )
          (r = u(a + l)), C(n, r) && (o[l] = n[r]), (l += 1);
        var p,
          h = f.call(arguments, 2),
          y = h.length;
        if (y < s) {
          for (l = a; l < i - s; )
            (r = u(l + s)),
              (p = u(l + y)),
              C(n, r) ? (n[p] = n[r]) : delete n[p],
              (l += 1);
          for (l = i; l > i - s + y; ) delete n[l - 1], (l -= 1);
        } else if (y > s)
          for (l = i - s; l > a; )
            (r = u(l + s - 1)),
              (p = u(l + y - 1)),
              C(n, r) ? (n[p] = n[r]) : delete n[p],
              (l -= 1);
        l = a;
        for (var d = 0; d < h.length; ++d) (n[l] = h[d]), (l += 1);
        return (n.length = i - s + y), o;
      },
    },
    !G || !Y
  );
  var X = !{ toString: null }.propertyIsEnumerable("toString"),
    H = function () {}.propertyIsEnumerable("prototype"),
    K = !C("x", "0"),
    Q = function (t) {
      var e = t.constructor;
      return e && e.prototype === t;
    },
    V = {
      $window: !0,
      $console: !0,
      $parent: !0,
      $self: !0,
      $frames: !0,
      $frameElement: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
    },
    tt = (function () {
      if ("undefined" == typeof window) return !1;
      for (var t in window)
        if (
          !V["$" + t] &&
          C(window, t) &&
          null !== window[t] &&
          "object" == typeof window[t]
        )
          try {
            Q(window[t]);
          } catch (t) {
            return !0;
          }
      return !1;
    })(),
    et = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor",
    ],
    rt = et.length,
    nt = function (e) {
      var r = "[object Arguments]" === D(e);
      return (
        r ||
          (r =
            !F(e) &&
            null !== e &&
            "object" == typeof e &&
            "number" == typeof e.length &&
            e.length >= 0 &&
            t(e.callee)),
        r
      );
    };
  S(o, {
    keys: function (e) {
      var r = t(e),
        n = nt(e),
        o = null !== e && "object" == typeof e,
        i = o && O(e);
      if (!o && !r && !n)
        throw new TypeError("Object.keys called on a non-object");
      var c = [],
        a = H && r;
      if ((i && K) || n) for (var s = 0; s < e.length; ++s) h.call(c, u(s));
      if (!n)
        for (var l in e)
          (a && "prototype" === l) || !C(e, l) || h.call(c, u(l));
      if (X)
        for (
          var f = (function (t) {
              if ("undefined" == typeof window || !tt) return Q(t);
              try {
                return Q(t);
              } catch (t) {
                return !1;
              }
            })(e),
            p = 0;
          p < rt;
          p++
        ) {
          var y = et[p];
          (f && "constructor" === y) || !C(e, y) || h.call(c, y);
        }
      return c;
    },
  });
  var ot =
      o.keys &&
      (function () {
        return 2 === o.keys(arguments).length;
      })(1, 2),
    it = o.keys;
  S(
    o,
    {
      keys: function (t) {
        return nt(t) ? it(f.call(t)) : it(t);
      },
    },
    !ot
  );
  var ct = -621987552e5,
    ut = "-000001",
    at =
      Date.prototype.toISOString &&
      -1 === new Date(ct).toISOString().indexOf(ut),
    st =
      Date.prototype.toISOString &&
      "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString();
  S(
    Date.prototype,
    {
      toISOString: function () {
        var t, e, r, n, o;
        if (!isFinite(this))
          throw new RangeError(
            "Date.prototype.toISOString called on non-finite value."
          );
        for (
          n = this.getUTCFullYear(),
            o = this.getUTCMonth(),
            n += Math.floor(o / 12),
            t = [
              (o = ((o % 12) + 12) % 12) + 1,
              this.getUTCDate(),
              this.getUTCHours(),
              this.getUTCMinutes(),
              this.getUTCSeconds(),
            ],
            n =
              (n < 0 ? "-" : n > 9999 ? "+" : "") +
              I("00000" + Math.abs(n), 0 <= n && n <= 9999 ? -4 : -6),
            e = t.length;
          e--;

        )
          (r = t[e]) < 10 && (t[e] = "0" + r);
        return (
          n +
          "-" +
          f.call(t, 0, 2).join("-") +
          "T" +
          f.call(t, 2).join(":") +
          "." +
          I("000" + this.getUTCMilliseconds(), -3) +
          "Z"
        );
      },
    },
    at || st
  ),
    (function () {
      try {
        return (
          Date.prototype.toJSON &&
          null === new Date(NaN).toJSON() &&
          -1 !== new Date(ct).toJSON().indexOf(ut) &&
          Date.prototype.toJSON.call({
            toISOString: function () {
              return !0;
            },
          })
        );
      } catch (t) {
        return !1;
      }
    })() ||
      (Date.prototype.toJSON = function (e) {
        var r = o(this),
          n = P(r);
        if ("number" == typeof n && !isFinite(n)) return null;
        var i = r.toISOString;
        if (!t(i)) throw new TypeError("toISOString property is not callable");
        return i.call(r);
      });
  var lt = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
    ft =
      !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) ||
      !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) ||
      !isNaN(Date.parse("2012-12-31T23:59:60.000Z")),
    pt = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
  (Date.parse && !pt && !ft && lt) ||
    (Date = (function (t) {
      var e = function (r, n, o, i, c, a, s) {
          var l,
            f = arguments.length;
          return (
            (l =
              this instanceof t
                ? 1 === f && u(r) === r
                  ? new t(e.parse(r))
                  : f >= 7
                  ? new t(r, n, o, i, c, a, s)
                  : f >= 6
                  ? new t(r, n, o, i, c, a)
                  : f >= 5
                  ? new t(r, n, o, i, c)
                  : f >= 4
                  ? new t(r, n, o, i)
                  : f >= 3
                  ? new t(r, n, o)
                  : f >= 2
                  ? new t(r, n)
                  : f >= 1
                  ? new t(r)
                  : new t()
                : t.apply(this, arguments)),
            S(l, { constructor: e }, !0),
            l
          );
        },
        r = new RegExp(
          "^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"
        ),
        n = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
        o = function (t, e) {
          var r = e > 1 ? 1 : 0;
          return (
            n[e] +
            Math.floor((t - 1969 + r) / 4) -
            Math.floor((t - 1901 + r) / 100) +
            Math.floor((t - 1601 + r) / 400) +
            365 * (t - 1970)
          );
        };
      for (var i in t) C(t, i) && (e[i] = t[i]);
      S(e, { now: t.now, UTC: t.UTC }, !0),
        (e.prototype = t.prototype),
        S(e.prototype, { constructor: e }, !0);
      return (
        S(e, {
          parse: function (e) {
            var n = r.exec(e);
            if (n) {
              var i,
                c = s(n[1]),
                u = s(n[2] || 1) - 1,
                a = s(n[3] || 1) - 1,
                l = s(n[4] || 0),
                f = s(n[5] || 0),
                p = s(n[6] || 0),
                h = Math.floor(1e3 * s(n[7] || 0)),
                y = Boolean(n[4] && !n[8]),
                d = "-" === n[9] ? 1 : -1,
                v = s(n[10] || 0),
                b = s(n[11] || 0);
              return l < (f > 0 || p > 0 || h > 0 ? 24 : 25) &&
                f < 60 &&
                p < 60 &&
                h < 1e3 &&
                u > -1 &&
                u < 12 &&
                v < 24 &&
                b < 60 &&
                a > -1 &&
                a < o(c, u + 1) - o(c, u) &&
                ((i =
                  1e3 *
                    (60 *
                      ((i = 60 * (24 * (o(c, u) + a) + l + v * d)) +
                        f +
                        b * d) +
                      p) +
                  h),
                y &&
                  (i = (function (e) {
                    return s(new t(1970, 0, 1, 0, 0, 0, e));
                  })(i)),
                -864e13 <= i && i <= 864e13)
                ? i
                : NaN;
            }
            return t.parse.apply(this, arguments);
          },
        }),
        e
      );
    })(Date)),
    Date.now ||
      (Date.now = function () {
        return new Date().getTime();
      });
  var ht =
      l.toFixed &&
      ("0.000" !== (8e-5).toFixed(3) ||
        "1" !== (0.9).toFixed(0) ||
        "1.25" !== (1.255).toFixed(2) ||
        "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)),
    yt = {
      base: 1e7,
      size: 6,
      data: [0, 0, 0, 0, 0, 0],
      multiply: function (t, e) {
        for (var r = -1, n = e; ++r < yt.size; )
          (n += t * yt.data[r]),
            (yt.data[r] = n % yt.base),
            (n = Math.floor(n / yt.base));
      },
      divide: function (t) {
        for (var e = yt.size, r = 0; --e >= 0; )
          (r += yt.data[e]),
            (yt.data[e] = Math.floor(r / t)),
            (r = (r % t) * yt.base);
      },
      numToString: function () {
        for (var t = yt.size, e = ""; --t >= 0; )
          if ("" !== e || 0 === t || 0 !== yt.data[t]) {
            var r = u(yt.data[t]);
            "" === e ? (e = r) : (e += I("0000000", 0, 7 - r.length) + r);
          }
        return e;
      },
      pow: function t(e, r, n) {
        return 0 === r
          ? n
          : r % 2 == 1
          ? t(e, r - 1, n * e)
          : t(e * e, r / 2, n);
      },
      log: function (t) {
        for (var e = 0, r = t; r >= 4096; ) (e += 12), (r /= 4096);
        for (; r >= 2; ) (e += 1), (r /= 2);
        return e;
      },
    };
  S(
    l,
    {
      toFixed: function (t) {
        var e, r, n, o, i, c, a, l;
        if ((e = (e = s(t)) != e ? 0 : Math.floor(e)) < 0 || e > 20)
          throw new RangeError(
            "Number.toFixed called with invalid number of decimals"
          );
        if ((r = s(this)) != r) return "NaN";
        if (r <= -1e21 || r >= 1e21) return u(r);
        if (((n = ""), r < 0 && ((n = "-"), (r = -r)), (o = "0"), r > 1e-21))
          if (
            ((c =
              (i = yt.log(r * yt.pow(2, 69, 1)) - 69) < 0
                ? r * yt.pow(2, -i, 1)
                : r / yt.pow(2, i, 1)),
            (c *= 4503599627370496),
            (i = 52 - i) > 0)
          ) {
            for (yt.multiply(0, c), a = e; a >= 7; )
              yt.multiply(1e7, 0), (a -= 7);
            for (yt.multiply(yt.pow(10, a, 1), 0), a = i - 1; a >= 23; )
              yt.divide(1 << 23), (a -= 23);
            yt.divide(1 << a),
              yt.multiply(1, 1),
              yt.divide(2),
              (o = yt.numToString());
          } else
            yt.multiply(0, c),
              yt.multiply(1 << -i, 0),
              (o = yt.numToString() + I("0.00000000000000000000", 2, 2 + e));
        return (o =
          e > 0
            ? (l = o.length) <= e
              ? n + I("0.0000000000000000000", 0, e - l + 2) + o
              : n + I(o, 0, l - e) + "." + I(o, l - e)
            : n + o);
      },
    },
    ht
  ),
    2 !== "ab".split(/(?:ab)*/).length ||
    4 !== ".".split(/(.?)(.?)/).length ||
    "t" === "tesst".split(/(s)*/)[1] ||
    4 !== "test".split(/(?:)/, -1).length ||
    "".split(/.?/).length ||
    ".".split(/()()/).length > 1
      ? (function () {
          var t = void 0 === /()??/.exec("")[1];
          a.split = function (r, n) {
            var o = this;
            if (void 0 === r && 0 === n) return [];
            if (!e(r)) return N(this, r, n);
            var i,
              c,
              u,
              a,
              s = [],
              l =
                (r.ignoreCase ? "i" : "") +
                (r.multiline ? "m" : "") +
                (r.unicode ? "u" : "") +
                (r.sticky ? "y" : ""),
              p = 0,
              y = new RegExp(r.source, l + "g");
            (o += ""), t || (i = new RegExp("^" + y.source + "$(?!\\s)", l));
            var d = void 0 === n ? -1 >>> 0 : k(n);
            for (
              c = y.exec(o);
              c &&
              !(
                (u = c.index + c[0].length) > p &&
                (h.call(s, I(o, p, c.index)),
                !t &&
                  c.length > 1 &&
                  c[0].replace(i, function () {
                    for (var t = 1; t < arguments.length - 2; t++)
                      void 0 === arguments[t] && (c[t] = void 0);
                  }),
                c.length > 1 && c.index < o.length && h.apply(s, f.call(c, 1)),
                (a = c[0].length),
                (p = u),
                s.length >= d)
              );

            )
              y.lastIndex === c.index && y.lastIndex++, (c = y.exec(o));
            return (
              p === o.length
                ? (!a && y.test("")) || h.call(s, "")
                : h.call(s, I(o, p)),
              s.length > d ? I(s, 0, d) : s
            );
          };
        })()
      : "0".split(void 0, 0).length &&
        (a.split = function (t, e) {
          return void 0 === t && 0 === e ? [] : N(this, t, e);
        });
  var dt = a.replace,
    vt = (function () {
      var t = [];
      return (
        "x".replace(/x(.)?/g, function (e, r) {
          h.call(t, r);
        }),
        1 === t.length && void 0 === t[0]
      );
    })();
  vt ||
    (a.replace = function (r, n) {
      var o = t(n),
        i = e(r) && /\)[*?]/.test(r.source);
      if (o && i) {
        return dt.call(this, r, function (t) {
          var e = arguments.length,
            o = r.lastIndex;
          r.lastIndex = 0;
          var i = r.exec(t) || [];
          return (
            (r.lastIndex = o),
            h.call(i, arguments[e - 2], arguments[e - 1]),
            n.apply(this, i)
          );
        });
      }
      return dt.call(this, r, n);
    });
  var bt = a.substr,
    gt = "".substr && "b" !== "0b".substr(-1);
  S(
    a,
    {
      substr: function (t, e) {
        var r = t;
        return t < 0 && (r = b(this.length + t, 0)), bt.call(this, r, e);
      },
    },
    gt
  );
  var wt =
      "    \n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff",
    mt = "[" + wt + "]",
    _t = new RegExp("^" + mt + mt + "*"),
    Ot = new RegExp(mt + mt + "*$"),
    jt = a.trim && (wt.trim() || !"â€‹".trim());
  S(
    a,
    {
      trim: function () {
        if (null == this)
          throw new TypeError("can't convert " + this + " to object");
        return u(this).replace(_t, "").replace(Ot, "");
      },
    },
    jt
  ),
    (8 === parseInt(wt + "08") && 22 === parseInt(wt + "0x16")) ||
      (parseInt = (function (t) {
        var e = /^0[xX]/;
        return function (r, n) {
          var o = u(r).trim(),
            i = s(n) || (e.test(o) ? 16 : 10);
          return t(o, i);
        };
      })(parseInt));
}),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(e)
      : "object" == typeof exports
      ? (module.exports = e())
      : (t.returnExports = e());
  })(this, function () {
    var t,
      e,
      r,
      n,
      o = Function.prototype.call,
      i = Object.prototype,
      c = o.bind(i.hasOwnProperty),
      u = o.bind(i.propertyIsEnumerable),
      a = c(i, "__defineGetter__");
    a &&
      ((t = o.bind(i.__defineGetter__)),
      (e = o.bind(i.__defineSetter__)),
      (r = o.bind(i.__lookupGetter__)),
      (n = o.bind(i.__lookupSetter__))),
      Object.getPrototypeOf ||
        (Object.getPrototypeOf = function (t) {
          var e = t.__proto__;
          return e || null === e
            ? e
            : t.constructor
            ? t.constructor.prototype
            : i;
        });
    var s = function (t) {
      try {
        return (
          (t.sentinel = 0),
          0 === Object.getOwnPropertyDescriptor(t, "sentinel").value
        );
      } catch (t) {
        return !1;
      }
    };
    if (Object.defineProperty) {
      var l = s({});
      if (
        !("undefined" == typeof document || s(document.createElement("div"))) ||
        !l
      )
        var f = Object.getOwnPropertyDescriptor;
    }
    if (!Object.getOwnPropertyDescriptor || f) {
      Object.getOwnPropertyDescriptor = function (t, e) {
        if (("object" != typeof t && "function" != typeof t) || null === t)
          throw new TypeError(
            "Object.getOwnPropertyDescriptor called on a non-object: " + t
          );
        if (f)
          try {
            return f.call(Object, t, e);
          } catch (t) {}
        var o;
        if (!c(t, e)) return o;
        if (((o = { enumerable: u(t, e), configurable: !0 }), a)) {
          var s = t.__proto__,
            l = t !== i;
          l && (t.__proto__ = i);
          var p = r(t, e),
            h = n(t, e);
          if ((l && (t.__proto__ = s), p || h))
            return p && (o.get = p), h && (o.set = h), o;
        }
        return (o.value = t[e]), (o.writable = !0), o;
      };
    }
    if (
      (Object.getOwnPropertyNames ||
        (Object.getOwnPropertyNames = function (t) {
          return Object.keys(t);
        }),
      !Object.create)
    ) {
      var p;
      (p =
        !({ __proto__: null } instanceof Object) ||
        "undefined" == typeof document
          ? function () {
              return { __proto__: null };
            }
          : function () {
              var t = (function () {
                if (!document.domain) return !1;
                try {
                  return !!new ActiveXObject("htmlfile");
                } catch (t) {
                  return !1;
                }
              })()
                ? (function () {
                    var t, e;
                    return (
                      (e = new ActiveXObject("htmlfile")).write(
                        "<script></script>"
                      ),
                      e.close(),
                      (t = e.parentWindow.Object.prototype),
                      (e = null),
                      t
                    );
                  })()
                : (function () {
                    var t,
                      e = document.createElement("iframe"),
                      r = document.body || document.documentElement;
                    return (
                      (e.style.display = "none"),
                      r.appendChild(e),
                      (e.src = "javascript:"),
                      (t = e.contentWindow.Object.prototype),
                      r.removeChild(e),
                      (e = null),
                      t
                    );
                  })();
              delete t.constructor,
                delete t.hasOwnProperty,
                delete t.propertyIsEnumerable,
                delete t.isPrototypeOf,
                delete t.toLocaleString,
                delete t.toString,
                delete t.valueOf,
                (t.__proto__ = null);
              var e = function () {};
              return (
                (e.prototype = t),
                (p = function () {
                  return new e();
                }),
                new e()
              );
            }),
        (Object.create = function (t, e) {
          var r,
            n = function () {};
          if (null === t) r = p();
          else {
            if ("object" != typeof t && "function" != typeof t)
              throw new TypeError(
                "Object prototype may only be an Object or null"
              );
            (n.prototype = t), ((r = new n()).__proto__ = t);
          }
          return void 0 !== e && Object.defineProperties(r, e), r;
        });
    }
    var h = function (t) {
      try {
        return Object.defineProperty(t, "sentinel", {}), "sentinel" in t;
      } catch (t) {
        return !1;
      }
    };
    if (Object.defineProperty) {
      var y = h({}),
        d = "undefined" == typeof document || h(document.createElement("div"));
      if (!y || !d)
        var v = Object.defineProperty,
          b = Object.defineProperties;
    }
    if (!Object.defineProperty || v) {
      Object.defineProperty = function (o, c, u) {
        if (("object" != typeof o && "function" != typeof o) || null === o)
          throw new TypeError(
            "Object.defineProperty called on non-object: " + o
          );
        if (("object" != typeof u && "function" != typeof u) || null === u)
          throw new TypeError("Property description must be an object: " + u);
        if (v)
          try {
            return v.call(Object, o, c, u);
          } catch (t) {}
        if ("value" in u)
          if (a && (r(o, c) || n(o, c))) {
            var s = o.__proto__;
            (o.__proto__ = i), delete o[c], (o[c] = u.value), (o.__proto__ = s);
          } else o[c] = u.value;
        else {
          if (!a && ("get" in u || "set" in u))
            throw new TypeError(
              "getters & setters can not be defined on this javascript engine"
            );
          "get" in u && t(o, c, u.get), "set" in u && e(o, c, u.set);
        }
        return o;
      };
    }
    (Object.defineProperties && !b) ||
      (Object.defineProperties = function (t, e) {
        if (b)
          try {
            return b.call(Object, t, e);
          } catch (t) {}
        return (
          Object.keys(e).forEach(function (r) {
            "__proto__" !== r && Object.defineProperty(t, r, e[r]);
          }),
          t
        );
      }),
      Object.seal ||
        (Object.seal = function (t) {
          if (Object(t) !== t)
            throw new TypeError("Object.seal can only be called on Objects.");
          return t;
        }),
      Object.freeze ||
        (Object.freeze = function (t) {
          if (Object(t) !== t)
            throw new TypeError("Object.freeze can only be called on Objects.");
          return t;
        });
    try {
      Object.freeze(function () {});
    } catch (t) {
      Object.freeze = (function (t) {
        return function (e) {
          return "function" == typeof e ? e : t(e);
        };
      })(Object.freeze);
    }
    Object.preventExtensions ||
      (Object.preventExtensions = function (t) {
        if (Object(t) !== t)
          throw new TypeError(
            "Object.preventExtensions can only be called on Objects."
          );
        return t;
      }),
      Object.isSealed ||
        (Object.isSealed = function (t) {
          if (Object(t) !== t)
            throw new TypeError(
              "Object.isSealed can only be called on Objects."
            );
          return !1;
        }),
      Object.isFrozen ||
        (Object.isFrozen = function (t) {
          if (Object(t) !== t)
            throw new TypeError(
              "Object.isFrozen can only be called on Objects."
            );
          return !1;
        }),
      Object.isExtensible ||
        (Object.isExtensible = function (t) {
          if (Object(t) !== t)
            throw new TypeError(
              "Object.isExtensible can only be called on Objects."
            );
          for (var e = ""; c(t, e); ) e += "?";
          t[e] = !0;
          var r = c(t, e);
          return delete t[e], r;
        });
  }),
  (function t(e, r, n) {
    function o(c, u) {
      if (!r[c]) {
        if (!e[c]) {
          var a = "function" == typeof require && require;
          if (!u && a) return a(c, !0);
          if (i) return i(c, !0);
          var s = new Error("Cannot find module '" + c + "'");
          throw ((s.code = "MODULE_NOT_FOUND"), s);
        }
        var l = (r[c] = { exports: {} });
        e[c][0].call(
          l.exports,
          function (t) {
            var r = e[c][1][t];
            return o(r || t);
          },
          l,
          l.exports,
          t,
          e,
          r,
          n
        );
      }
      return r[c].exports;
    }
    for (
      var i = "function" == typeof require && require, c = 0;
      c < n.length;
      c++
    )
      o(n[c]);
    return o;
  })(
    {
      1: [
        function (t, e, r) {
          "use strict";
          t("./index").polyfill();
        },
        { "./index": 2 },
      ],
      2: [
        function (t, e, r) {
          "use strict";
          function n(t, e) {
            if (null == t)
              throw new TypeError("Cannot convert first argument to object");
            for (var r = Object(t), n = 1; n < arguments.length; n++) {
              var o = arguments[n];
              if (null != o)
                for (
                  var i = Object.keys(Object(o)), c = 0, u = i.length;
                  c < u;
                  c++
                ) {
                  var a = i[c],
                    s = Object.getOwnPropertyDescriptor(o, a);
                  void 0 !== s && s.enumerable && (r[a] = o[a]);
                }
            }
            return r;
          }
          e.exports = {
            assign: n,
            polyfill: function () {
              Object.assign ||
                Object.defineProperty(Object, "assign", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: n,
                });
            },
          };
        },
        {},
      ],
    },
    {},
    [1]
  ),
  window.matchMedia ||
    (window.matchMedia = (function () {
      "use strict";
      var t = window.styleMedia || window.media;
      if (!t) {
        var e,
          r = document.createElement("style"),
          n = document.getElementsByTagName("script")[0];
        (r.type = "text/css"),
          (r.id = "matchmediajs-test"),
          n.parentNode.insertBefore(r, n),
          (e =
            ("getComputedStyle" in window &&
              window.getComputedStyle(r, null)) ||
            r.currentStyle),
          (t = {
            matchMedium: function (t) {
              var n = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
              return (
                r.styleSheet ? (r.styleSheet.cssText = n) : (r.textContent = n),
                "1px" === e.width
              );
            },
          });
      }
      return function (e) {
        return { matches: t.matchMedium(e || "all"), media: e || "all" };
      };
    })()),
  (function () {
    try {
      new t("test");
    } catch (e) {
      var t = function (t, e) {
        var r;
        return (
          (e = e || { bubbles: !1, cancelable: !1, detail: void 0 }),
          (r = document.createEvent("CustomEvent")).initCustomEvent(
            t,
            e.bubbles,
            e.cancelable,
            e.detail
          ),
          r
        );
      };
      (t.prototype = window.Event.prototype), (window.CustomEvent = t);
    }
  })(),
  (function () {
    function t(t) {
      this.message = t;
    }
    var e = "undefined" != typeof exports ? exports : this,
      r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    (t.prototype = new Error()),
      (t.prototype.name = "InvalidCharacterError"),
      e.btoa ||
        (e.btoa = function (e) {
          for (
            var n, o, i = String(e), c = 0, u = r, a = "";
            i.charAt(0 | c) || ((u = "="), c % 1);
            a += u.charAt(63 & (n >> (8 - (c % 1) * 8)))
          ) {
            if ((o = i.charCodeAt((c += 0.75))) > 255)
              throw new t(
                "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
              );
            n = (n << 8) | o;
          }
          return a;
        }),
      e.atob ||
        (e.atob = function (e) {
          var n = String(e).replace(/=+$/, "");
          if (n.length % 4 == 1)
            throw new t(
              "'atob' failed: The string to be decoded is not correctly encoded."
            );
          for (
            var o, i, c = 0, u = 0, a = "";
            (i = n.charAt(u++));
            ~i && ((o = c % 4 ? 64 * o + i : i), c++ % 4)
              ? (a += String.fromCharCode(255 & (o >> ((-2 * c) & 6))))
              : 0
          )
            i = r.indexOf(i);
          return a;
        });
  })(),
  (function () {
    "use strict";
    var t = Array.prototype.slice;
    try {
      t.call(document.documentElement);
    } catch (e) {
      Array.prototype.slice = function (e, r) {
        if (
          ((r = void 0 !== r ? r : this.length),
          "[object Array]" === Object.prototype.toString.call(this))
        )
          return t.call(this, e, r);
        var n,
          o,
          i = [],
          c = this.length,
          u = e || 0;
        u = u >= 0 ? u : Math.max(0, c + u);
        var a = "number" == typeof r ? Math.min(r, c) : c;
        if ((r < 0 && (a = c + r), (o = a - u) > 0))
          if (((i = new Array(o)), this.charAt))
            for (n = 0; n < o; n++) i[n] = this.charAt(u + n);
          else for (n = 0; n < o; n++) i[n] = this[u + n];
        return i;
      };
    }
  })(),
  Array.from ||
    (Array.from = function (t) {
      "use strict";
      return [].slice.call(t);
    }),
  (function (t) {
    function e(t, e) {
      function n(t) {
        if (!this || this.constructor !== n) return new n(t);
        (this._keys = []),
          (this._values = []),
          (this._itp = []),
          (this.objectOnly = e),
          t && r.call(this, t);
      }
      return (
        e || v(t, "size", { get: h }), (t.constructor = n), (n.prototype = t), n
      );
    }
    function r(t) {
      this.add
        ? t.forEach(this.add, this)
        : t.forEach(function (t) {
            this.set(t[0], t[1]);
          }, this);
    }
    function n(t) {
      return (
        this.has(t) &&
          (this._keys.splice(d, 1),
          this._values.splice(d, 1),
          this._itp.forEach(function (t) {
            d < t[0] && t[0]--;
          })),
        -1 < d
      );
    }
    function o(t) {
      return this.has(t) ? this._values[d] : void 0;
    }
    function i(t, e) {
      if (this.objectOnly && e !== Object(e))
        throw new TypeError("Invalid value used as weak collection key");
      if (e != e || 0 === e) for (d = t.length; d-- && !b(t[d], e); );
      else d = t.indexOf(e);
      return -1 < d;
    }
    function c(t) {
      return i.call(this, this._values, t);
    }
    function u(t) {
      return i.call(this, this._keys, t);
    }
    function a(t, e) {
      return (
        this.has(t)
          ? (this._values[d] = e)
          : (this._values[this._keys.push(t) - 1] = e),
        this
      );
    }
    function s(t) {
      return this.has(t) || this._values.push(t), this;
    }
    function l() {
      (this._keys || 0).length = this._values.length = 0;
    }
    function f() {
      return p(this._itp, this._values);
    }
    function p(t, e, r) {
      var n = [0],
        o = !1;
      return (
        t.push(n),
        {
          next: function () {
            var i,
              c = n[0];
            return (
              !o && c < e.length
                ? ((i = r ? [e[c], r[c]] : e[c]), n[0]++)
                : ((o = !0), t.splice(t.indexOf(n), 1)),
              { done: o, value: i }
            );
          },
        }
      );
    }
    function h() {
      return this._values.length;
    }
    function y(t, e) {
      for (var r = this.entries(); ; ) {
        var n = r.next();
        if (n.done) break;
        t.call(e, n.value[1], n.value[0], this);
      }
    }
    var d,
      v = Object.defineProperty,
      b = function (t, e) {
        return isNaN(t) ? isNaN(e) : t === e;
      };
    "undefined" == typeof WeakMap &&
      (t.WeakMap = e({ delete: n, clear: l, get: o, has: u, set: a }, !0)),
      ("undefined" != typeof Map &&
        "function" == typeof new Map().values &&
        new Map().values().next) ||
        (t.Map = e({
          delete: n,
          has: u,
          get: o,
          set: a,
          keys: function () {
            return p(this._itp, this._keys);
          },
          values: f,
          entries: function () {
            return p(this._itp, this._keys, this._values);
          },
          forEach: y,
          clear: l,
        })),
      ("undefined" != typeof Set &&
        "function" == typeof new Set().values &&
        new Set().values().next) ||
        (t.Set = e({
          has: c,
          add: s,
          delete: n,
          clear: l,
          keys: f,
          values: f,
          entries: function () {
            return p(this._itp, this._values, this._values);
          },
          forEach: y,
        })),
      "undefined" == typeof WeakSet &&
        (t.WeakSet = e({ delete: n, add: s, clear: l, has: c }, !0));
  })(
    "undefined" != typeof exports && "undefined" != typeof global
      ? global
      : window
  ),
  (function (t) {
    function e(n) {
      if (r[n]) return r[n].exports;
      var o = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    var r = {};
    (e.m = t),
      (e.c = r),
      (e.i = function (t) {
        return t;
      }),
      (e.d = function (t, r, n) {
        e.o(t, r) ||
          Object.defineProperty(t, r, {
            configurable: !1,
            enumerable: !0,
            get: n,
          });
      }),
      (e.n = function (t) {
        var r =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(r, "a", r), r;
      }),
      (e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (e.p = ""),
      e((e.s = 4));
  })([
    function (t, e, r) {
      "use strict";
      var n = r(7)();
      t.exports = function (t) {
        return t !== n && null !== t;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = { object: !0, symbol: !0 };
      t.exports = function () {
        var t;
        if ("function" != typeof Symbol) return !1;
        t = Symbol("test symbol");
        try {
          String(t);
        } catch (t) {
          return !1;
        }
        return (
          !!n[typeof Symbol.iterator] &&
          !!n[typeof Symbol.toPrimitive] &&
          !!n[typeof Symbol.toStringTag]
        );
      };
    },
    function (t, e) {
      t.exports = (function () {
        return this;
      })();
    },
    function (t, e, r) {
      "use strict";
      var n,
        o,
        i,
        c,
        u = r(6),
        a = r(20),
        s = Object.create,
        l = Object.defineProperties,
        f = Object.defineProperty,
        p = Object.prototype,
        h = s(null);
      if ("function" == typeof Symbol) {
        n = Symbol;
        try {
          String(n()), (c = !0);
        } catch (t) {}
      }
      var y = (function () {
        var t = s(null);
        return function (e) {
          for (var r, n, o = 0; t[e + (o || "")]; ) ++o;
          return (
            (t[(e += o || "")] = !0),
            f(
              p,
              (r = "@@" + e),
              u.gs(null, function (t) {
                n || ((n = !0), f(this, r, u(t)), (n = !1));
              })
            ),
            r
          );
        };
      })();
      (i = function (t) {
        if (this instanceof i)
          throw new TypeError("Symbol is not a constructor");
        return o(t);
      }),
        (t.exports = o =
          function t(e) {
            var r;
            if (this instanceof t)
              throw new TypeError("Symbol is not a constructor");
            return c
              ? n(e)
              : ((r = s(i.prototype)),
                (e = void 0 === e ? "" : String(e)),
                l(r, { __description__: u("", e), __name__: u("", y(e)) }));
          }),
        l(o, {
          for: u(function (t) {
            return h[t] ? h[t] : (h[t] = o(String(t)));
          }),
          keyFor: u(function (t) {
            var e;
            for (e in (a(t), h)) if (h[e] === t) return e;
          }),
          hasInstance: u("", (n && n.hasInstance) || o("hasInstance")),
          isConcatSpreadable: u(
            "",
            (n && n.isConcatSpreadable) || o("isConcatSpreadable")
          ),
          iterator: u("", (n && n.iterator) || o("iterator")),
          match: u("", (n && n.match) || o("match")),
          replace: u("", (n && n.replace) || o("replace")),
          search: u("", (n && n.search) || o("search")),
          species: u("", (n && n.species) || o("species")),
          split: u("", (n && n.split) || o("split")),
          toPrimitive: u("", (n && n.toPrimitive) || o("toPrimitive")),
          toStringTag: u("", (n && n.toStringTag) || o("toStringTag")),
          unscopables: u("", (n && n.unscopables) || o("unscopables")),
        }),
        l(i.prototype, {
          constructor: u(o),
          toString: u("", function () {
            return this.__name__;
          }),
        }),
        l(o.prototype, {
          toString: u(function () {
            return "Symbol (" + a(this).__description__ + ")";
          }),
          valueOf: u(function () {
            return a(this);
          }),
        }),
        f(
          o.prototype,
          o.toPrimitive,
          u("", function () {
            var t = a(this);
            return "symbol" == typeof t ? t : t.toString();
          })
        ),
        f(o.prototype, o.toStringTag, u("c", "Symbol")),
        f(i.prototype, o.toStringTag, u("c", o.prototype[o.toStringTag])),
        f(i.prototype, o.toPrimitive, u("c", o.prototype[o.toPrimitive]));
    },
    function (t, e, r) {
      "use strict";
      r(1)() ||
        Object.defineProperty(r(2), "Symbol", {
          value: r(3),
          configurable: !0,
          enumerable: !1,
          writable: !0,
        });
    },
    function (t, e, r) {
      "use strict";
      t.exports = function (t) {
        return (
          !!t &&
          ("symbol" == typeof t ||
            (!!t.constructor &&
              "Symbol" === t.constructor.name &&
              "Symbol" === t[t.constructor.toStringTag]))
        );
      };
    },
    function (t, e, r) {
      "use strict";
      var n,
        o = r(8),
        i = r(15),
        c = r(11),
        u = r(17);
      (n = t.exports =
        function (t, e) {
          var r, n, c, a, s;
          return (
            arguments.length < 2 || "string" != typeof t
              ? ((a = e), (e = t), (t = null))
              : (a = arguments[2]),
            null == t
              ? ((r = c = !0), (n = !1))
              : ((r = u.call(t, "c")),
                (n = u.call(t, "e")),
                (c = u.call(t, "w"))),
            (s = { value: e, configurable: r, enumerable: n, writable: c }),
            a ? o(i(a), s) : s
          );
        }),
        (n.gs = function (t, e, r) {
          var n, a, s, l;
          return (
            "string" != typeof t
              ? ((s = r), (r = e), (e = t), (t = null))
              : (s = arguments[3]),
            null == e
              ? (e = void 0)
              : c(e)
              ? null == r
                ? (r = void 0)
                : c(r) || ((s = r), (r = void 0))
              : ((s = e), (e = r = void 0)),
            null == t
              ? ((n = !0), (a = !1))
              : ((n = u.call(t, "c")), (a = u.call(t, "e"))),
            (l = { get: e, set: r, configurable: n, enumerable: a }),
            s ? o(i(s), l) : l
          );
        });
    },
    function (t, e, r) {
      "use strict";
      t.exports = function () {};
    },
    function (t, e, r) {
      "use strict";
      t.exports = r(9)() ? Object.assign : r(10);
    },
    function (t, e, r) {
      "use strict";
      t.exports = function () {
        var t,
          e = Object.assign;
        return (
          "function" == typeof e &&
          (e((t = { foo: "raz" }), { bar: "dwa" }, { trzy: "trzy" }),
          t.foo + t.bar + t.trzy === "razdwatrzy")
        );
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(12),
        o = r(16),
        i = Math.max;
      t.exports = function (t, e) {
        var r,
          c,
          u,
          a = i(arguments.length, 2);
        for (
          t = Object(o(t)),
            u = function (n) {
              try {
                t[n] = e[n];
              } catch (t) {
                r || (r = t);
              }
            },
            c = 1;
          c < a;
          ++c
        )
          n((e = arguments[c])).forEach(u);
        if (void 0 !== r) throw r;
        return t;
      };
    },
    function (t, e, r) {
      "use strict";
      t.exports = function (t) {
        return "function" == typeof t;
      };
    },
    function (t, e, r) {
      "use strict";
      t.exports = r(13)() ? Object.keys : r(14);
    },
    function (t, e, r) {
      "use strict";
      t.exports = function () {
        try {
          return Object.keys("primitive"), !0;
        } catch (t) {
          return !1;
        }
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        o = Object.keys;
      t.exports = function (t) {
        return o(n(t) ? Object(t) : t);
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        o = Array.prototype.forEach,
        i = Object.create;
      t.exports = function (t) {
        var e = i(null);
        return (
          o.call(arguments, function (t) {
            n(t) &&
              (function (t, e) {
                var r;
                for (r in t) e[r] = t[r];
              })(Object(t), e);
          }),
          e
        );
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0);
      t.exports = function (t) {
        if (!n(t)) throw new TypeError("Cannot use null or undefined");
        return t;
      };
    },
    function (t, e, r) {
      "use strict";
      t.exports = r(18)() ? String.prototype.contains : r(19);
    },
    function (t, e, r) {
      "use strict";
      var n = "razdwatrzy";
      t.exports = function () {
        return (
          "function" == typeof n.contains &&
          !0 === n.contains("dwa") &&
          !1 === n.contains("foo")
        );
      };
    },
    function (t, e, r) {
      "use strict";
      var n = String.prototype.indexOf;
      t.exports = function (t) {
        return n.call(this, t, arguments[1]) > -1;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(5);
      t.exports = function (t) {
        if (!n(t)) throw new TypeError(t + " is not a symbol");
        return t;
      };
    },
  ]),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : (t.ES6Promise = e());
  })(this, function () {
    "use strict";
    function t(t) {
      return "function" == typeof t;
    }
    function e() {
      var t = setTimeout;
      return function () {
        return t(r, 1);
      };
    }
    function r() {
      for (var t = 0; t < g; t += 2) {
        (0, T[t])(T[t + 1]), (T[t] = void 0), (T[t + 1] = void 0);
      }
      g = 0;
    }
    function n(t, e) {
      var r = this,
        n = new this.constructor(i);
      void 0 === n[A] && d(n);
      var o = r._state;
      if (o) {
        var c = arguments[o - 1];
        _(function () {
          return y(o, n, c, r._result);
        });
      } else p(r, n, t, e);
      return n;
    }
    function o(t) {
      if (t && "object" == typeof t && t.constructor === this) return t;
      var e = new this(i);
      return a(e, t), e;
    }
    function i() {}
    function c(t) {
      try {
        return t.then;
      } catch (t) {
        return (D.error = t), D;
      }
    }
    function u(e, r, i) {
      r.constructor === e.constructor && i === n && r.constructor.resolve === o
        ? (function (t, e) {
            e._state === M
              ? l(t, e._result)
              : e._state === C
              ? f(t, e._result)
              : p(
                  e,
                  void 0,
                  function (e) {
                    return a(t, e);
                  },
                  function (e) {
                    return f(t, e);
                  }
                );
          })(e, r)
        : i === D
        ? (f(e, D.error), (D.error = null))
        : void 0 === i
        ? l(e, r)
        : t(i)
        ? (function (t, e, r) {
            _(function (t) {
              var n = !1,
                o = (function (t, e, r, n) {
                  try {
                    t.call(e, r, n);
                  } catch (t) {
                    return t;
                  }
                })(
                  r,
                  e,
                  function (r) {
                    n || ((n = !0), e !== r ? a(t, r) : l(t, r));
                  },
                  function (e) {
                    n || ((n = !0), f(t, e));
                  },
                  t._label
                );
              !n && o && ((n = !0), f(t, o));
            }, t);
          })(e, r, i)
        : l(e, r);
    }
    function a(t, e) {
      t === e
        ? f(t, new TypeError("You cannot resolve a promise with itself"))
        : (function (t) {
            var e = typeof t;
            return null !== t && ("object" === e || "function" === e);
          })(e)
        ? u(t, e, c(e))
        : l(t, e);
    }
    function s(t) {
      t._onerror && t._onerror(t._result), h(t);
    }
    function l(t, e) {
      t._state === k &&
        ((t._result = e),
        (t._state = M),
        0 !== t._subscribers.length && _(h, t));
    }
    function f(t, e) {
      t._state === k && ((t._state = C), (t._result = e), _(s, t));
    }
    function p(t, e, r, n) {
      var o = t._subscribers,
        i = o.length;
      (t._onerror = null),
        (o[i] = e),
        (o[i + M] = r),
        (o[i + C] = n),
        0 === i && t._state && _(h, t);
    }
    function h(t) {
      var e = t._subscribers,
        r = t._state;
      if (0 !== e.length) {
        for (
          var n = void 0, o = void 0, i = t._result, c = 0;
          c < e.length;
          c += 3
        )
          (n = e[c]), (o = e[c + r]), n ? y(r, n, o, i) : o(i);
        t._subscribers.length = 0;
      }
    }
    function y(e, r, n, o) {
      var i = t(n),
        c = void 0,
        u = void 0,
        s = void 0,
        p = void 0;
      if (i) {
        if (
          ((c = (function (t, e) {
            try {
              return t(e);
            } catch (t) {
              return (D.error = t), D;
            }
          })(n, o)),
          c === D ? ((p = !0), (u = c.error), (c.error = null)) : (s = !0),
          r === c)
        )
          return void f(
            r,
            new TypeError(
              "A promises callback cannot return that same promise."
            )
          );
      } else (c = o), (s = !0);
      r._state !== k ||
        (i && s
          ? a(r, c)
          : p
          ? f(r, u)
          : e === M
          ? l(r, c)
          : e === C && f(r, c));
    }
    function d(t) {
      (t[A] = I++),
        (t._state = void 0),
        (t._result = void 0),
        (t._subscribers = []);
    }
    var v;
    v = Array.isArray
      ? Array.isArray
      : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        };
    var b = v,
      g = 0,
      w = void 0,
      m = void 0,
      _ = function (t, e) {
        (T[g] = t), (T[g + 1] = e), 2 === (g += 2) && (m ? m(r) : P());
      },
      O = "undefined" != typeof window ? window : void 0,
      j = O || {},
      x = j.MutationObserver || j.WebKitMutationObserver,
      S =
        "undefined" == typeof self &&
        "undefined" != typeof process &&
        "[object process]" === {}.toString.call(process),
      E =
        "undefined" != typeof Uint8ClampedArray &&
        "undefined" != typeof importScripts &&
        "undefined" != typeof MessageChannel,
      T = new Array(1e3),
      P = void 0;
    P = S
      ? function () {
          return process.nextTick(r);
        }
      : x
      ? (function () {
          var t = 0,
            e = new x(r),
            n = document.createTextNode("");
          return (
            e.observe(n, { characterData: !0 }),
            function () {
              n.data = t = ++t % 2;
            }
          );
        })()
      : E
      ? (function () {
          var t = new MessageChannel();
          return (
            (t.port1.onmessage = r),
            function () {
              return t.port2.postMessage(0);
            }
          );
        })()
      : void 0 === O && "function" == typeof require
      ? (function () {
          try {
            var t = Function("return this")().require("vertx");
            return void 0 !== (w = t.runOnLoop || t.runOnContext)
              ? function () {
                  w(r);
                }
              : e();
          } catch (t) {
            return e();
          }
        })()
      : e();
    var A = Math.random().toString(36).substring(2),
      k = void 0,
      M = 1,
      C = 2,
      D = { error: null },
      I = 0,
      N = (function () {
        function t(t, e) {
          (this._instanceConstructor = t),
            (this.promise = new t(i)),
            this.promise[A] || d(this.promise),
            b(e)
              ? ((this.length = e.length),
                (this._remaining = e.length),
                (this._result = new Array(this.length)),
                0 === this.length
                  ? l(this.promise, this._result)
                  : ((this.length = this.length || 0),
                    this._enumerate(e),
                    0 === this._remaining && l(this.promise, this._result)))
              : f(
                  this.promise,
                  new Error("Array Methods must be provided an Array")
                );
        }
        return (
          (t.prototype._enumerate = function (t) {
            for (var e = 0; this._state === k && e < t.length; e++)
              this._eachEntry(t[e], e);
          }),
          (t.prototype._eachEntry = function (t, e) {
            var r = this._instanceConstructor,
              a = r.resolve;
            if (a === o) {
              var s = c(t);
              if (s === n && t._state !== k)
                this._settledAt(t._state, e, t._result);
              else if ("function" != typeof s)
                this._remaining--, (this._result[e] = t);
              else if (r === F) {
                var l = new r(i);
                u(l, t, s), this._willSettleAt(l, e);
              } else
                this._willSettleAt(
                  new r(function (e) {
                    return e(t);
                  }),
                  e
                );
            } else this._willSettleAt(a(t), e);
          }),
          (t.prototype._settledAt = function (t, e, r) {
            var n = this.promise;
            n._state === k &&
              (this._remaining--, t === C ? f(n, r) : (this._result[e] = r)),
              0 === this._remaining && l(n, this._result);
          }),
          (t.prototype._willSettleAt = function (t, e) {
            var r = this;
            p(
              t,
              void 0,
              function (t) {
                return r._settledAt(M, e, t);
              },
              function (t) {
                return r._settledAt(C, e, t);
              }
            );
          }),
          t
        );
      })(),
      F = (function () {
        function e(t) {
          (this[A] = I++),
            (this._result = this._state = void 0),
            (this._subscribers = []),
            i !== t &&
              ("function" != typeof t &&
                (function () {
                  throw new TypeError(
                    "You must pass a resolver function as the first argument to the promise constructor"
                  );
                })(),
              this instanceof e
                ? (function (t, e) {
                    try {
                      e(
                        function (e) {
                          a(t, e);
                        },
                        function (e) {
                          f(t, e);
                        }
                      );
                    } catch (e) {
                      f(t, e);
                    }
                  })(this, t)
                : (function () {
                    throw new TypeError(
                      "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                    );
                  })());
        }
        return (
          (e.prototype.catch = function (t) {
            return this.then(null, t);
          }),
          (e.prototype.finally = function (e) {
            var r = this,
              n = r.constructor;
            return t(e)
              ? r.then(
                  function (t) {
                    return n.resolve(e()).then(function () {
                      return t;
                    });
                  },
                  function (t) {
                    return n.resolve(e()).then(function () {
                      throw t;
                    });
                  }
                )
              : r.then(e, e);
          }),
          e
        );
      })();
    return (
      (F.prototype.then = n),
      (F.all = function (t) {
        return new N(this, t).promise;
      }),
      (F.race = function (t) {
        var e = this;
        return new e(
          b(t)
            ? function (r, n) {
                for (var o = t.length, i = 0; i < o; i++)
                  e.resolve(t[i]).then(r, n);
              }
            : function (t, e) {
                return e(new TypeError("You must pass an array to race."));
              }
        );
      }),
      (F.resolve = o),
      (F.reject = function (t) {
        var e = new this(i);
        return f(e, t), e;
      }),
      (F._setScheduler = function (t) {
        m = t;
      }),
      (F._setAsap = function (t) {
        _ = t;
      }),
      (F._asap = _),
      (F.polyfill = function () {
        var t = void 0;
        if ("undefined" != typeof global) t = global;
        else if ("undefined" != typeof self) t = self;
        else
          try {
            t = Function("return this")();
          } catch (t) {
            throw new Error(
              "polyfill failed because global object is unavailable in this environment"
            );
          }
        var e = t.Promise;
        if (e) {
          var r = null;
          try {
            r = Object.prototype.toString.call(e.resolve());
          } catch (t) {}
          if ("[object Promise]" === r && !e.cast) return;
        }
        t.Promise = F;
      }),
      (F.Promise = F),
      F.polyfill(),
      F
    );
  });

  "function" == typeof define && define.amd
    ? define(e)
    : "object" == typeof exports
    ? (module.exports = e())
    : (t.returnExports = e());
})(this, function () {
  var t,
    e,
    r = Array,
    n = r.prototype,
    o = Object,
    i = o.prototype,
    c = Function.prototype,
    u = String,
    a = u.prototype,
    s = Number,
    l = s.prototype,
    f = n.slice,
    p = n.splice,
    h = n.push,
    y = n.unshift,
    d = n.concat,
    v = c.call,
    b = Math.max,
    g = Math.min,
    w = i.toString,
    m = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
    _ = Function.prototype.toString;
  t = function (t) {
    if ("function" != typeof t) return !1;
    if (m)
      return (function (t) {
        try {
          return _.call(t), !0;
        } catch (t) {
          return !1;
        }
      })(t);
    var e = w.call(t);
    return "[object Function]" === e || "[object GeneratorFunction]" === e;
  };
  var O,
    j = RegExp.prototype.exec;
  e = function (t) {
    return (
      "object" == typeof t &&
      (m
        ? (function (t) {
            try {
              return j.call(t), !0;
            } catch (t) {
              return !1;
            }
          })(t)
        : "[object RegExp]" === w.call(t))
    );
  };
  var x = String.prototype.valueOf;
  O = function (t) {
    return (
      "string" == typeof t ||
      ("object" == typeof t &&
        (m
          ? (function (t) {
              try {
                return x.call(t), !0;
              } catch (t) {
                return !1;
              }
            })(t)
          : "[object String]" === w.call(t)))
    );
  };
  var S = (function (t) {
      var e,
        r =
          o.defineProperty &&
          (function () {
            try {
              var t = {};
              for (var e in (o.defineProperty(t, "x", {
                enumerable: !1,
                value: t,
              }),
              t))
                return !1;
              return t.x === t;
            } catch (t) {
              return !1;
            }
          })();
      return (
        (e = r
          ? function (t, e, r, n) {
              (!n && e in t) ||
                o.defineProperty(t, e, {
                  configurable: !0,
                  enumerable: !1,
                  writable: !0,
                  value: r,
                });
            }
          : function (t, e, r, n) {
              (!n && e in t) || (t[e] = r);
            }),
        function (r, n, o) {
          for (var i in n) t.call(n, i) && e(r, i, n[i], o);
        }
      );
    })(i.hasOwnProperty),
    E = function (t) {
      var e = typeof t;
      return null === t || ("object" !== e && "function" !== e);
    },
    T = function (t) {
      var e = +t;
      return (
        e != e
          ? (e = 0)
          : 0 !== e &&
            e !== 1 / 0 &&
            e !== -1 / 0 &&
            (e = (e > 0 || -1) * Math.floor(Math.abs(e))),
        e
      );
    },
    P = function (e) {
      var r, n, o;
      if (E(e)) return e;
      if (((n = e.valueOf), t(n) && ((r = n.call(e)), E(r)))) return r;
      if (((o = e.toString), t(o) && ((r = o.call(e)), E(r)))) return r;
      throw new TypeError();
    },
    A = function (t) {
      if (null == t) throw new TypeError("can't convert " + t + " to object");
      return o(t);
    },
    k = function (t) {
      return t >>> 0;
    },
    M = function () {};
  S(c, {
    bind: function (e) {
      var r = this;
      if (!t(r))
        throw new TypeError(
          "Function.prototype.bind called on incompatible " + r
        );
      for (
        var n,
          i = f.call(arguments, 1),
          c = b(0, r.length - i.length),
          u = [],
          a = 0;
        a < c;
        a++
      )
        h.call(u, "$" + a);
      return (
        (n = Function(
          "binder",
          "return function (" +
            u.join(",") +
            "){ return binder.apply(this, arguments); }"
        )(function () {
          if (this instanceof n) {
            var t = r.apply(this, d.call(i, f.call(arguments)));
            return o(t) === t ? t : this;
          }
          return r.apply(e, d.call(i, f.call(arguments)));
        })),
        r.prototype &&
          ((M.prototype = r.prototype),
          (n.prototype = new M()),
          (M.prototype = null)),
        n
      );
    },
  });
  var C = v.bind(i.hasOwnProperty),
    D = v.bind(i.toString),
    I = v.bind(a.slice),
    N = v.bind(a.split),
    F =
      r.isArray ||
      function (t) {
        return "[object Array]" === D(t);
      },
    z = 1 !== [].unshift(0);
  S(
    n,
    {
      unshift: function () {
        return y.apply(this, arguments), this.length;
      },
    },
    z
  ),
    S(r, { isArray: F });
  var R = o("a"),
    $ = "a" !== R[0] || !(0 in R),
    U = function (t) {
      var e = !0,
        r = !0;
      return (
        t &&
          (t.call("foo", function (t, r, n) {
            "object" != typeof n && (e = !1);
          }),
          t.call(
            [1],
            function () {
              "use strict";
              r = "string" == typeof this;
            },
            "x"
          )),
        !!t && e && r
      );
    };
  S(
    n,
    {
      forEach: function (e) {
        var r,
          n = A(this),
          o = $ && O(this) ? N(this, "") : n,
          i = -1,
          c = o.length >>> 0;
        if ((arguments.length > 1 && (r = arguments[1]), !t(e)))
          throw new TypeError(
            "Array.prototype.forEach callback must be a function"
          );
        for (; ++i < c; )
          i in o && (void 0 !== r ? e.call(r, o[i], i, n) : e(o[i], i, n));
      },
    },
    !U(n.forEach)
  ),
    S(
      n,
      {
        map: function (e) {
          var n,
            o = A(this),
            i = $ && O(this) ? N(this, "") : o,
            c = i.length >>> 0,
            u = r(c);
          if ((arguments.length > 1 && (n = arguments[1]), !t(e)))
            throw new TypeError(
              "Array.prototype.map callback must be a function"
            );
          for (var a = 0; a < c; a++)
            a in i &&
              (u[a] = void 0 !== n ? e.call(n, i[a], a, o) : e(i[a], a, o));
          return u;
        },
      },
      !U(n.map)
    ),
    S(
      n,
      {
        filter: function (e) {
          var r,
            n,
            o = A(this),
            i = $ && O(this) ? N(this, "") : o,
            c = i.length >>> 0,
            u = [];
          if ((arguments.length > 1 && (n = arguments[1]), !t(e)))
            throw new TypeError(
              "Array.prototype.filter callback must be a function"
            );
          for (var a = 0; a < c; a++)
            a in i &&
              ((r = i[a]),
              (void 0 === n ? e(r, a, o) : e.call(n, r, a, o)) && h.call(u, r));
          return u;
        },
      },
      !U(n.filter)
    ),
    S(
      n,
      {
        every: function (e) {
          var r,
            n = A(this),
            o = $ && O(this) ? N(this, "") : n,
            i = o.length >>> 0;
          if ((arguments.length > 1 && (r = arguments[1]), !t(e)))
            throw new TypeError(
              "Array.prototype.every callback must be a function"
            );
          for (var c = 0; c < i; c++)
            if (
              c in o &&
              !(void 0 === r ? e(o[c], c, n) : e.call(r, o[c], c, n))
            )
              return !1;
          return !0;
        },
      },
      !U(n.every)
    ),
    S(
      n,
      {
        some: function (e) {
          var r,
            n = A(this),
            o = $ && O(this) ? N(this, "") : n,
            i = o.length >>> 0;
          if ((arguments.length > 1 && (r = arguments[1]), !t(e)))
            throw new TypeError(
              "Array.prototype.some callback must be a function"
            );
          for (var c = 0; c < i; c++)
            if (
              c in o &&
              (void 0 === r ? e(o[c], c, n) : e.call(r, o[c], c, n))
            )
              return !0;
          return !1;
        },
      },
      !U(n.some)
    );
  var Z = !1;
  n.reduce &&
    (Z =
      "object" ==
      typeof n.reduce.call("es5", function (t, e, r, n) {
        return n;
      })),
    S(
      n,
      {
        reduce: function (e) {
          var r = A(this),
            n = $ && O(this) ? N(this, "") : r,
            o = n.length >>> 0;
          if (!t(e))
            throw new TypeError(
              "Array.prototype.reduce callback must be a function"
            );
          if (0 === o && 1 === arguments.length)
            throw new TypeError("reduce of empty array with no initial value");
          var i,
            c = 0;
          if (arguments.length >= 2) i = arguments[1];
          else
            for (;;) {
              if (c in n) {
                i = n[c++];
                break;
              }
              if (++c >= o)
                throw new TypeError(
                  "reduce of empty array with no initial value"
                );
            }
          for (; c < o; c++) c in n && (i = e(i, n[c], c, r));
          return i;
        },
      },
      !Z
    );
  var W = !1;
  n.reduceRight &&
    (W =
      "object" ==
      typeof n.reduceRight.call("es5", function (t, e, r, n) {
        return n;
      })),
    S(
      n,
      {
        reduceRight: function (e) {
          var r,
            n = A(this),
            o = $ && O(this) ? N(this, "") : n,
            i = o.length >>> 0;
          if (!t(e))
            throw new TypeError(
              "Array.prototype.reduceRight callback must be a function"
            );
          if (0 === i && 1 === arguments.length)
            throw new TypeError(
              "reduceRight of empty array with no initial value"
            );
          var c = i - 1;
          if (arguments.length >= 2) r = arguments[1];
          else
            for (;;) {
              if (c in o) {
                r = o[c--];
                break;
              }
              if (--c < 0)
                throw new TypeError(
                  "reduceRight of empty array with no initial value"
                );
            }
          if (c < 0) return r;
          do {
            c in o && (r = e(r, o[c], c, n));
          } while (c--);
          return r;
        },
      },
      !W
    );
  var q = n.indexOf && -1 !== [0, 1].indexOf(1, 2);
  S(
    n,
    {
      indexOf: function (t) {
        var e = $ && O(this) ? N(this, "") : A(this),
          r = e.length >>> 0;
        if (0 === r) return -1;
        var n = 0;
        for (
          arguments.length > 1 && (n = T(arguments[1])),
            n = n >= 0 ? n : b(0, r + n);
          n < r;
          n++
        )
          if (n in e && e[n] === t) return n;
        return -1;
      },
    },
    q
  );
  var J = n.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
  S(
    n,
    {
      lastIndexOf: function (t) {
        var e = $ && O(this) ? N(this, "") : A(this),
          r = e.length >>> 0;
        if (0 === r) return -1;
        var n = r - 1;
        for (
          arguments.length > 1 && (n = g(n, T(arguments[1]))),
            n = n >= 0 ? n : r - Math.abs(n);
          n >= 0;
          n--
        )
          if (n in e && t === e[n]) return n;
        return -1;
      },
    },
    J
  );
  var L = (function () {
    var t = [1, 2],
      e = t.splice();
    return 2 === t.length && F(e) && 0 === e.length;
  })();
  S(
    n,
    {
      splice: function (t, e) {
        return 0 === arguments.length ? [] : p.apply(this, arguments);
      },
    },
    !L
  );
  var B = (function () {
    var t = {};
    return n.splice.call(t, 0, 0, 1), 1 === t.length;
  })();
  S(
    n,
    {
      splice: function (t, e) {
        if (0 === arguments.length) return [];
        var r = arguments;
        return (
          (this.length = b(T(this.length), 0)),
          arguments.length > 0 &&
            "number" != typeof e &&
            ((r = f.call(arguments)).length < 2
              ? h.call(r, this.length - t)
              : (r[1] = T(e))),
          p.apply(this, r)
        );
      },
    },
    !B
  );
  var G = (function () {
      var t = new r(1e5);
      return (t[8] = "x"), t.splice(1, 1), 7 === t.indexOf("x");
    })(),
    Y = (function () {
      var t = [];
      return (t[256] = "a"), t.splice(257, 0, "b"), "a" === t[256];
    })();
  S(
    n,
    {
      splice: function (t, e) {
        for (
          var r,
            n = A(this),
            o = [],
            i = k(n.length),
            c = T(t),
            a = c < 0 ? b(i + c, 0) : g(c, i),
            s = g(b(T(e), 0), i - a),
            l = 0;
          l < s;

        )
          (r = u(a + l)), C(n, r) && (o[l] = n[r]), (l += 1);
        var p,
          h = f.call(arguments, 2),
          y = h.length;
        if (y < s) {
          for (l = a; l < i - s; )
            (r = u(l + s)),
              (p = u(l + y)),
              C(n, r) ? (n[p] = n[r]) : delete n[p],
              (l += 1);
          for (l = i; l > i - s + y; ) delete n[l - 1], (l -= 1);
        } else if (y > s)
          for (l = i - s; l > a; )
            (r = u(l + s - 1)),
              (p = u(l + y - 1)),
              C(n, r) ? (n[p] = n[r]) : delete n[p],
              (l -= 1);
        l = a;
        for (var d = 0; d < h.length; ++d) (n[l] = h[d]), (l += 1);
        return (n.length = i - s + y), o;
      },
    },
    !G || !Y
  );
  var X = !{ toString: null }.propertyIsEnumerable("toString"),
    H = function () {}.propertyIsEnumerable("prototype"),
    K = !C("x", "0"),
    Q = function (t) {
      var e = t.constructor;
      return e && e.prototype === t;
    },
    V = {
      $window: !0,
      $console: !0,
      $parent: !0,
      $self: !0,
      $frames: !0,
      $frameElement: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
    },
    tt = (function () {
      if ("undefined" == typeof window) return !1;
      for (var t in window)
        if (
          !V["$" + t] &&
          C(window, t) &&
          null !== window[t] &&
          "object" == typeof window[t]
        )
          try {
            Q(window[t]);
          } catch (t) {
            return !0;
          }
      return !1;
    })(),
    et = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor",
    ],
    rt = et.length,
    nt = function (e) {
      var r = "[object Arguments]" === D(e);
      return (
        r ||
          (r =
            !F(e) &&
            null !== e &&
            "object" == typeof e &&
            "number" == typeof e.length &&
            e.length >= 0 &&
            t(e.callee)),
        r
      );
    };
  S(o, {
    keys: function (e) {
      var r = t(e),
        n = nt(e),
        o = null !== e && "object" == typeof e,
        i = o && O(e);
      if (!o && !r && !n)
        throw new TypeError("Object.keys called on a non-object");
      var c = [],
        a = H && r;
      if ((i && K) || n) for (var s = 0; s < e.length; ++s) h.call(c, u(s));
      if (!n)
        for (var l in e)
          (a && "prototype" === l) || !C(e, l) || h.call(c, u(l));
      if (X)
        for (
          var f = (function (t) {
              if ("undefined" == typeof window || !tt) return Q(t);
              try {
                return Q(t);
              } catch (t) {
                return !1;
              }
            })(e),
            p = 0;
          p < rt;
          p++
        ) {
          var y = et[p];
          (f && "constructor" === y) || !C(e, y) || h.call(c, y);
        }
      return c;
    },
  });
  var ot =
      o.keys &&
      (function () {
        return 2 === o.keys(arguments).length;
      })(1, 2),
    it = o.keys;
  S(
    o,
    {
      keys: function (t) {
        return nt(t) ? it(f.call(t)) : it(t);
      },
    },
    !ot
  );
  var ct = -621987552e5,
    ut = "-000001",
    at =
      Date.prototype.toISOString &&
      -1 === new Date(ct).toISOString().indexOf(ut),
    st =
      Date.prototype.toISOString &&
      "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString();
  S(
    Date.prototype,
    {
      toISOString: function () {
        var t, e, r, n, o;
        if (!isFinite(this))
          throw new RangeError(
            "Date.prototype.toISOString called on non-finite value."
          );
        for (
          n = this.getUTCFullYear(),
            o = this.getUTCMonth(),
            n += Math.floor(o / 12),
            t = [
              (o = ((o % 12) + 12) % 12) + 1,
              this.getUTCDate(),
              this.getUTCHours(),
              this.getUTCMinutes(),
              this.getUTCSeconds(),
            ],
            n =
              (n < 0 ? "-" : n > 9999 ? "+" : "") +
              I("00000" + Math.abs(n), 0 <= n && n <= 9999 ? -4 : -6),
            e = t.length;
          e--;

        )
          (r = t[e]) < 10 && (t[e] = "0" + r);
        return (
          n +
          "-" +
          f.call(t, 0, 2).join("-") +
          "T" +
          f.call(t, 2).join(":") +
          "." +
          I("000" + this.getUTCMilliseconds(), -3) +
          "Z"
        );
      },
    },
    at || st
  ),
    (function () {
      try {
        return (
          Date.prototype.toJSON &&
          null === new Date(NaN).toJSON() &&
          -1 !== new Date(ct).toJSON().indexOf(ut) &&
          Date.prototype.toJSON.call({
            toISOString: function () {
              return !0;
            },
          })
        );
      } catch (t) {
        return !1;
      }
    })() ||
      (Date.prototype.toJSON = function (e) {
        var r = o(this),
          n = P(r);
        if ("number" == typeof n && !isFinite(n)) return null;
        var i = r.toISOString;
        if (!t(i)) throw new TypeError("toISOString property is not callable");
        return i.call(r);
      });
  var lt = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
    ft =
      !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) ||
      !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) ||
      !isNaN(Date.parse("2012-12-31T23:59:60.000Z")),
    pt = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
  (Date.parse && !pt && !ft && lt) ||
    (Date = (function (t) {
      var e = function (r, n, o, i, c, a, s) {
          var l,
            f = arguments.length;
          return (
            (l =
              this instanceof t
                ? 1 === f && u(r) === r
                  ? new t(e.parse(r))
                  : f >= 7
                  ? new t(r, n, o, i, c, a, s)
                  : f >= 6
                  ? new t(r, n, o, i, c, a)
                  : f >= 5
                  ? new t(r, n, o, i, c)
                  : f >= 4
                  ? new t(r, n, o, i)
                  : f >= 3
                  ? new t(r, n, o)
                  : f >= 2
                  ? new t(r, n)
                  : f >= 1
                  ? new t(r)
                  : new t()
                : t.apply(this, arguments)),
            S(l, { constructor: e }, !0),
            l
          );
        },
        r = new RegExp(
          "^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"
        ),
        n = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
        o = function (t, e) {
          var r = e > 1 ? 1 : 0;
          return (
            n[e] +
            Math.floor((t - 1969 + r) / 4) -
            Math.floor((t - 1901 + r) / 100) +
            Math.floor((t - 1601 + r) / 400) +
            365 * (t - 1970)
          );
        };
      for (var i in t) C(t, i) && (e[i] = t[i]);
      S(e, { now: t.now, UTC: t.UTC }, !0),
        (e.prototype = t.prototype),
        S(e.prototype, { constructor: e }, !0);
      return (
        S(e, {
          parse: function (e) {
            var n = r.exec(e);
            if (n) {
              var i,
                c = s(n[1]),
                u = s(n[2] || 1) - 1,
                a = s(n[3] || 1) - 1,
                l = s(n[4] || 0),
                f = s(n[5] || 0),
                p = s(n[6] || 0),
                h = Math.floor(1e3 * s(n[7] || 0)),
                y = Boolean(n[4] && !n[8]),
                d = "-" === n[9] ? 1 : -1,
                v = s(n[10] || 0),
                b = s(n[11] || 0);
              return l < (f > 0 || p > 0 || h > 0 ? 24 : 25) &&
                f < 60 &&
                p < 60 &&
                h < 1e3 &&
                u > -1 &&
                u < 12 &&
                v < 24 &&
                b < 60 &&
                a > -1 &&
                a < o(c, u + 1) - o(c, u) &&
                ((i =
                  1e3 *
                    (60 *
                      ((i = 60 * (24 * (o(c, u) + a) + l + v * d)) +
                        f +
                        b * d) +
                      p) +
                  h),
                y &&
                  (i = (function (e) {
                    return s(new t(1970, 0, 1, 0, 0, 0, e));
                  })(i)),
                -864e13 <= i && i <= 864e13)
                ? i
                : NaN;
            }
            return t.parse.apply(this, arguments);
          },
        }),
        e
      );
    })(Date)),
    Date.now ||
      (Date.now = function () {
        return new Date().getTime();
      });
  var ht =
      l.toFixed &&
      ("0.000" !== (8e-5).toFixed(3) ||
        "1" !== (0.9).toFixed(0) ||
        "1.25" !== (1.255).toFixed(2) ||
        "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)),
    yt = {
      base: 1e7,
      size: 6,
      data: [0, 0, 0, 0, 0, 0],
      multiply: function (t, e) {
        for (var r = -1, n = e; ++r < yt.size; )
          (n += t * yt.data[r]),
            (yt.data[r] = n % yt.base),
            (n = Math.floor(n / yt.base));
      },
      divide: function (t) {
        for (var e = yt.size, r = 0; --e >= 0; )
          (r += yt.data[e]),
            (yt.data[e] = Math.floor(r / t)),
            (r = (r % t) * yt.base);
      },
      numToString: function () {
        for (var t = yt.size, e = ""; --t >= 0; )
          if ("" !== e || 0 === t || 0 !== yt.data[t]) {
            var r = u(yt.data[t]);
            "" === e ? (e = r) : (e += I("0000000", 0, 7 - r.length) + r);
          }
        return e;
      },
      pow: function t(e, r, n) {
        return 0 === r
          ? n
          : r % 2 == 1
          ? t(e, r - 1, n * e)
          : t(e * e, r / 2, n);
      },
      log: function (t) {
        for (var e = 0, r = t; r >= 4096; ) (e += 12), (r /= 4096);
        for (; r >= 2; ) (e += 1), (r /= 2);
        return e;
      },
    };
  S(
    l,
    {
      toFixed: function (t) {
        var e, r, n, o, i, c, a, l;
        if ((e = (e = s(t)) != e ? 0 : Math.floor(e)) < 0 || e > 20)
          throw new RangeError(
            "Number.toFixed called with invalid number of decimals"
          );
        if ((r = s(this)) != r) return "NaN";
        if (r <= -1e21 || r >= 1e21) return u(r);
        if (((n = ""), r < 0 && ((n = "-"), (r = -r)), (o = "0"), r > 1e-21))
          if (
            ((c =
              (i = yt.log(r * yt.pow(2, 69, 1)) - 69) < 0
                ? r * yt.pow(2, -i, 1)
                : r / yt.pow(2, i, 1)),
            (c *= 4503599627370496),
            (i = 52 - i) > 0)
          ) {
            for (yt.multiply(0, c), a = e; a >= 7; )
              yt.multiply(1e7, 0), (a -= 7);
            for (yt.multiply(yt.pow(10, a, 1), 0), a = i - 1; a >= 23; )
              yt.divide(1 << 23), (a -= 23);
            yt.divide(1 << a),
              yt.multiply(1, 1),
              yt.divide(2),
              (o = yt.numToString());
          } else
            yt.multiply(0, c),
              yt.multiply(1 << -i, 0),
              (o = yt.numToString() + I("0.00000000000000000000", 2, 2 + e));
        return (o =
          e > 0
            ? (l = o.length) <= e
              ? n + I("0.0000000000000000000", 0, e - l + 2) + o
              : n + I(o, 0, l - e) + "." + I(o, l - e)
            : n + o);
      },
    },
    ht
  ),
    2 !== "ab".split(/(?:ab)*/).length ||
    4 !== ".".split(/(.?)(.?)/).length ||
    "t" === "tesst".split(/(s)*/)[1] ||
    4 !== "test".split(/(?:)/, -1).length ||
    "".split(/.?/).length ||
    ".".split(/()()/).length > 1
      ? (function () {
          var t = void 0 === /()??/.exec("")[1];
          a.split = function (r, n) {
            var o = this;
            if (void 0 === r && 0 === n) return [];
            if (!e(r)) return N(this, r, n);
            var i,
              c,
              u,
              a,
              s = [],
              l =
                (r.ignoreCase ? "i" : "") +
                (r.multiline ? "m" : "") +
                (r.unicode ? "u" : "") +
                (r.sticky ? "y" : ""),
              p = 0,
              y = new RegExp(r.source, l + "g");
            (o += ""), t || (i = new RegExp("^" + y.source + "$(?!\\s)", l));
            var d = void 0 === n ? -1 >>> 0 : k(n);
            for (
              c = y.exec(o);
              c &&
              !(
                (u = c.index + c[0].length) > p &&
                (h.call(s, I(o, p, c.index)),
                !t &&
                  c.length > 1 &&
                  c[0].replace(i, function () {
                    for (var t = 1; t < arguments.length - 2; t++)
                      void 0 === arguments[t] && (c[t] = void 0);
                  }),
                c.length > 1 && c.index < o.length && h.apply(s, f.call(c, 1)),
                (a = c[0].length),
                (p = u),
                s.length >= d)
              );

            )
              y.lastIndex === c.index && y.lastIndex++, (c = y.exec(o));
            return (
              p === o.length
                ? (!a && y.test("")) || h.call(s, "")
                : h.call(s, I(o, p)),
              s.length > d ? I(s, 0, d) : s
            );
          };
        })()
      : "0".split(void 0, 0).length &&
        (a.split = function (t, e) {
          return void 0 === t && 0 === e ? [] : N(this, t, e);
        });
  var dt = a.replace,
    vt = (function () {
      var t = [];
      return (
        "x".replace(/x(.)?/g, function (e, r) {
          h.call(t, r);
        }),
        1 === t.length && void 0 === t[0]
      );
    })();
  vt ||
    (a.replace = function (r, n) {
      var o = t(n),
        i = e(r) && /\)[*?]/.test(r.source);
      if (o && i) {
        return dt.call(this, r, function (t) {
          var e = arguments.length,
            o = r.lastIndex;
          r.lastIndex = 0;
          var i = r.exec(t) || [];
          return (
            (r.lastIndex = o),
            h.call(i, arguments[e - 2], arguments[e - 1]),
            n.apply(this, i)
          );
        });
      }
      return dt.call(this, r, n);
    });
  var bt = a.substr,
    gt = "".substr && "b" !== "0b".substr(-1);
  S(
    a,
    {
      substr: function (t, e) {
        var r = t;
        return t < 0 && (r = b(this.length + t, 0)), bt.call(this, r, e);
      },
    },
    gt
  );
  var wt =
      "    \n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff",
    mt = "[" + wt + "]",
    _t = new RegExp("^" + mt + mt + "*"),
    Ot = new RegExp(mt + mt + "*$"),
    jt = a.trim && (wt.trim() || !"â€‹".trim());
  S(
    a,
    {
      trim: function () {
        if (null == this)
          throw new TypeError("can't convert " + this + " to object");
        return u(this).replace(_t, "").replace(Ot, "");
      },
    },
    jt
  ),
    (8 === parseInt(wt + "08") && 22 === parseInt(wt + "0x16")) ||
      (parseInt = (function (t) {
        var e = /^0[xX]/;
        return function (r, n) {
          var o = u(r).trim(),
            i = s(n) || (e.test(o) ? 16 : 10);
          return t(o, i);
        };
      })(parseInt));
}),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(e)
      : "object" == typeof exports
      ? (module.exports = e())
      : (t.returnExports = e());
  })(this, function () {
    var t,
      e,
      r,
      n,
      o = Function.prototype.call,
      i = Object.prototype,
      c = o.bind(i.hasOwnProperty),
      u = o.bind(i.propertyIsEnumerable),
      a = c(i, "__defineGetter__");
    a &&
      ((t = o.bind(i.__defineGetter__)),
      (e = o.bind(i.__defineSetter__)),
      (r = o.bind(i.__lookupGetter__)),
      (n = o.bind(i.__lookupSetter__))),
      Object.getPrototypeOf ||
        (Object.getPrototypeOf = function (t) {
          var e = t.__proto__;
          return e || null === e
            ? e
            : t.constructor
            ? t.constructor.prototype
            : i;
        });
    var s = function (t) {
      try {
        return (
          (t.sentinel = 0),
          0 === Object.getOwnPropertyDescriptor(t, "sentinel").value
        );
      } catch (t) {
        return !1;
      }
    };
    if (Object.defineProperty) {
      var l = s({});
      if (
        !("undefined" == typeof document || s(document.createElement("div"))) ||
        !l
      )
        var f = Object.getOwnPropertyDescriptor;
    }
    if (!Object.getOwnPropertyDescriptor || f) {
      Object.getOwnPropertyDescriptor = function (t, e) {
        if (("object" != typeof t && "function" != typeof t) || null === t)
          throw new TypeError(
            "Object.getOwnPropertyDescriptor called on a non-object: " + t
          );
        if (f)
          try {
            return f.call(Object, t, e);
          } catch (t) {}
        var o;
        if (!c(t, e)) return o;
        if (((o = { enumerable: u(t, e), configurable: !0 }), a)) {
          var s = t.__proto__,
            l = t !== i;
          l && (t.__proto__ = i);
          var p = r(t, e),
            h = n(t, e);
          if ((l && (t.__proto__ = s), p || h))
            return p && (o.get = p), h && (o.set = h), o;
        }
        return (o.value = t[e]), (o.writable = !0), o;
      };
    }
    if (
      (Object.getOwnPropertyNames ||
        (Object.getOwnPropertyNames = function (t) {
          return Object.keys(t);
        }),
      !Object.create)
    ) {
      var p;
      (p =
        !({ __proto__: null } instanceof Object) ||
        "undefined" == typeof document
          ? function () {
              return { __proto__: null };
            }
          : function () {
              var t = (function () {
                if (!document.domain) return !1;
                try {
                  return !!new ActiveXObject("htmlfile");
                } catch (t) {
                  return !1;
                }
              })()
                ? (function () {
                    var t, e;
                    return (
                      (e = new ActiveXObject("htmlfile")).write(
                        "<script></script>"
                      ),
                      e.close(),
                      (t = e.parentWindow.Object.prototype),
                      (e = null),
                      t
                    );
                  })()
                : (function () {
                    var t,
                      e = document.createElement("iframe"),
                      r = document.body || document.documentElement;
                    return (
                      (e.style.display = "none"),
                      r.appendChild(e),
                      (e.src = "javascript:"),
                      (t = e.contentWindow.Object.prototype),
                      r.removeChild(e),
                      (e = null),
                      t
                    );
                  })();
              delete t.constructor,
                delete t.hasOwnProperty,
                delete t.propertyIsEnumerable,
                delete t.isPrototypeOf,
                delete t.toLocaleString,
                delete t.toString,
                delete t.valueOf,
                (t.__proto__ = null);
              var e = function () {};
              return (
                (e.prototype = t),
                (p = function () {
                  return new e();
                }),
                new e()
              );
            }),
        (Object.create = function (t, e) {
          var r,
            n = function () {};
          if (null === t) r = p();
          else {
            if ("object" != typeof t && "function" != typeof t)
              throw new TypeError(
                "Object prototype may only be an Object or null"
              );
            (n.prototype = t), ((r = new n()).__proto__ = t);
          }
          return void 0 !== e && Object.defineProperties(r, e), r;
        });
    }
    var h = function (t) {
      try {
        return Object.defineProperty(t, "sentinel", {}), "sentinel" in t;
      } catch (t) {
        return !1;
      }
    };
    if (Object.defineProperty) {
      var y = h({}),
        d = "undefined" == typeof document || h(document.createElement("div"));
      if (!y || !d)
        var v = Object.defineProperty,
          b = Object.defineProperties;
    }
    if (!Object.defineProperty || v) {
      Object.defineProperty = function (o, c, u) {
        if (("object" != typeof o && "function" != typeof o) || null === o)
          throw new TypeError(
            "Object.defineProperty called on non-object: " + o
          );
        if (("object" != typeof u && "function" != typeof u) || null === u)
          throw new TypeError("Property description must be an object: " + u);
        if (v)
          try {
            return v.call(Object, o, c, u);
          } catch (t) {}
        if ("value" in u)
          if (a && (r(o, c) || n(o, c))) {
            var s = o.__proto__;
            (o.__proto__ = i), delete o[c], (o[c] = u.value), (o.__proto__ = s);
          } else o[c] = u.value;
        else {
          if (!a && ("get" in u || "set" in u))
            throw new TypeError(
              "getters & setters can not be defined on this javascript engine"
            );
          "get" in u && t(o, c, u.get), "set" in u && e(o, c, u.set);
        }
        return o;
      };
    }
    (Object.defineProperties && !b) ||
      (Object.defineProperties = function (t, e) {
        if (b)
          try {
            return b.call(Object, t, e);
          } catch (t) {}
        return (
          Object.keys(e).forEach(function (r) {
            "__proto__" !== r && Object.defineProperty(t, r, e[r]);
          }),
          t
        );
      }),
      Object.seal ||
        (Object.seal = function (t) {
          if (Object(t) !== t)
            throw new TypeError("Object.seal can only be called on Objects.");
          return t;
        }),
      Object.freeze ||
        (Object.freeze = function (t) {
          if (Object(t) !== t)
            throw new TypeError("Object.freeze can only be called on Objects.");
          return t;
        });
    try {
      Object.freeze(function () {});
    } catch (t) {
      Object.freeze = (function (t) {
        return function (e) {
          return "function" == typeof e ? e : t(e);
        };
      })(Object.freeze);
    }
    Object.preventExtensions ||
      (Object.preventExtensions = function (t) {
        if (Object(t) !== t)
          throw new TypeError(
            "Object.preventExtensions can only be called on Objects."
          );
        return t;
      }),
      Object.isSealed ||
        (Object.isSealed = function (t) {
          if (Object(t) !== t)
            throw new TypeError(
              "Object.isSealed can only be called on Objects."
            );
          return !1;
        }),
      Object.isFrozen ||
        (Object.isFrozen = function (t) {
          if (Object(t) !== t)
            throw new TypeError(
              "Object.isFrozen can only be called on Objects."
            );
          return !1;
        }),
      Object.isExtensible ||
        (Object.isExtensible = function (t) {
          if (Object(t) !== t)
            throw new TypeError(
              "Object.isExtensible can only be called on Objects."
            );
          for (var e = ""; c(t, e); ) e += "?";
          t[e] = !0;
          var r = c(t, e);
          return delete t[e], r;
        });
  }),
  (function t(e, r, n) {
    function o(c, u) {
      if (!r[c]) {
        if (!e[c]) {
          var a = "function" == typeof require && require;
          if (!u && a) return a(c, !0);
          if (i) return i(c, !0);
          var s = new Error("Cannot find module '" + c + "'");
          throw ((s.code = "MODULE_NOT_FOUND"), s);
        }
        var l = (r[c] = { exports: {} });
        e[c][0].call(
          l.exports,
          function (t) {
            var r = e[c][1][t];
            return o(r || t);
          },
          l,
          l.exports,
          t,
          e,
          r,
          n
        );
      }
      return r[c].exports;
    }
    for (
      var i = "function" == typeof require && require, c = 0;
      c < n.length;
      c++
    )
      o(n[c]);
    return o;
  })(
    {
      1: [
        function (t, e, r) {
          "use strict";
          t("./index").polyfill();
        },
        { "./index": 2 },
      ],
      2: [
        function (t, e, r) {
          "use strict";
          function n(t, e) {
            if (null == t)
              throw new TypeError("Cannot convert first argument to object");
            for (var r = Object(t), n = 1; n < arguments.length; n++) {
              var o = arguments[n];
              if (null != o)
                for (
                  var i = Object.keys(Object(o)), c = 0, u = i.length;
                  c < u;
                  c++
                ) {
                  var a = i[c],
                    s = Object.getOwnPropertyDescriptor(o, a);
                  void 0 !== s && s.enumerable && (r[a] = o[a]);
                }
            }
            return r;
          }
          e.exports = {
            assign: n,
            polyfill: function () {
              Object.assign ||
                Object.defineProperty(Object, "assign", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: n,
                });
            },
          };
        },
        {},
      ],
    },
    {},
    [1]
  ),
  window.matchMedia ||
    (window.matchMedia = (function () {
      "use strict";
      var t = window.styleMedia || window.media;
      if (!t) {
        var e,
          r = document.createElement("style"),
          n = document.getElementsByTagName("script")[0];
        (r.type = "text/css"),
          (r.id = "matchmediajs-test"),
          n.parentNode.insertBefore(r, n),
          (e =
            ("getComputedStyle" in window &&
              window.getComputedStyle(r, null)) ||
            r.currentStyle),
          (t = {
            matchMedium: function (t) {
              var n = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
              return (
                r.styleSheet ? (r.styleSheet.cssText = n) : (r.textContent = n),
                "1px" === e.width
              );
            },
          });
      }
      return function (e) {
        return { matches: t.matchMedium(e || "all"), media: e || "all" };
      };
    })()),
  (function () {
    try {
      new t("test");
    } catch (e) {
      var t = function (t, e) {
        var r;
        return (
          (e = e || { bubbles: !1, cancelable: !1, detail: void 0 }),
          (r = document.createEvent("CustomEvent")).initCustomEvent(
            t,
            e.bubbles,
            e.cancelable,
            e.detail
          ),
          r
        );
      };
      (t.prototype = window.Event.prototype), (window.CustomEvent = t);
    }
  })(),
  (function () {
    function t(t) {
      this.message = t;
    }
    var e = "undefined" != typeof exports ? exports : this,
      r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    (t.prototype = new Error()),
      (t.prototype.name = "InvalidCharacterError"),
      e.btoa ||
        (e.btoa = function (e) {
          for (
            var n, o, i = String(e), c = 0, u = r, a = "";
            i.charAt(0 | c) || ((u = "="), c % 1);
            a += u.charAt(63 & (n >> (8 - (c % 1) * 8)))
          ) {
            if ((o = i.charCodeAt((c += 0.75))) > 255)
              throw new t(
                "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
              );
            n = (n << 8) | o;
          }
          return a;
        }),
      e.atob ||
        (e.atob = function (e) {
          var n = String(e).replace(/=+$/, "");
          if (n.length % 4 == 1)
            throw new t(
              "'atob' failed: The string to be decoded is not correctly encoded."
            );
          for (
            var o, i, c = 0, u = 0, a = "";
            (i = n.charAt(u++));
            ~i && ((o = c % 4 ? 64 * o + i : i), c++ % 4)
              ? (a += String.fromCharCode(255 & (o >> ((-2 * c) & 6))))
              : 0
          )
            i = r.indexOf(i);
          return a;
        });
  })(),
  (function () {
    "use strict";
    var t = Array.prototype.slice;
    try {
      t.call(document.documentElement);
    } catch (e) {
      Array.prototype.slice = function (e, r) {
        if (
          ((r = void 0 !== r ? r : this.length),
          "[object Array]" === Object.prototype.toString.call(this))
        )
          return t.call(this, e, r);
        var n,
          o,
          i = [],
          c = this.length,
          u = e || 0;
        u = u >= 0 ? u : Math.max(0, c + u);
        var a = "number" == typeof r ? Math.min(r, c) : c;
        if ((r < 0 && (a = c + r), (o = a - u) > 0))
          if (((i = new Array(o)), this.charAt))
            for (n = 0; n < o; n++) i[n] = this.charAt(u + n);
          else for (n = 0; n < o; n++) i[n] = this[u + n];
        return i;
      };
    }
  })(),
  Array.from ||
    (Array.from = function (t) {
      "use strict";
      return [].slice.call(t);
    }),
  (function (t) {
    function e(t, e) {
      function n(t) {
        if (!this || this.constructor !== n) return new n(t);
        (this._keys = []),
          (this._values = []),
          (this._itp = []),
          (this.objectOnly = e),
          t && r.call(this, t);
      }
      return (
        e || v(t, "size", { get: h }), (t.constructor = n), (n.prototype = t), n
      );
    }
    function r(t) {
      this.add
        ? t.forEach(this.add, this)
        : t.forEach(function (t) {
            this.set(t[0], t[1]);
          }, this);
    }
    function n(t) {
      return (
        this.has(t) &&
          (this._keys.splice(d, 1),
          this._values.splice(d, 1),
          this._itp.forEach(function (t) {
            d < t[0] && t[0]--;
          })),
        -1 < d
      );
    }
    function o(t) {
      return this.has(t) ? this._values[d] : void 0;
    }
    function i(t, e) {
      if (this.objectOnly && e !== Object(e))
        throw new TypeError("Invalid value used as weak collection key");
      if (e != e || 0 === e) for (d = t.length; d-- && !b(t[d], e); );
      else d = t.indexOf(e);
      return -1 < d;
    }
    function c(t) {
      return i.call(this, this._values, t);
    }
    function u(t) {
      return i.call(this, this._keys, t);
    }
    function a(t, e) {
      return (
        this.has(t)
          ? (this._values[d] = e)
          : (this._values[this._keys.push(t) - 1] = e),
        this
      );
    }
    function s(t) {
      return this.has(t) || this._values.push(t), this;
    }
    function l() {
      (this._keys || 0).length = this._values.length = 0;
    }
    function f() {
      return p(this._itp, this._values);
    }
    function p(t, e, r) {
      var n = [0],
        o = !1;
      return (
        t.push(n),
        {
          next: function () {
            var i,
              c = n[0];
            return (
              !o && c < e.length
                ? ((i = r ? [e[c], r[c]] : e[c]), n[0]++)
                : ((o = !0), t.splice(t.indexOf(n), 1)),
              { done: o, value: i }
            );
          },
        }
      );
    }
    function h() {
      return this._values.length;
    }
    function y(t, e) {
      for (var r = this.entries(); ; ) {
        var n = r.next();
        if (n.done) break;
        t.call(e, n.value[1], n.value[0], this);
      }
    }
    var d,
      v = Object.defineProperty,
      b = function (t, e) {
        return isNaN(t) ? isNaN(e) : t === e;
      };
    "undefined" == typeof WeakMap &&
      (t.WeakMap = e({ delete: n, clear: l, get: o, has: u, set: a }, !0)),
      ("undefined" != typeof Map &&
        "function" == typeof new Map().values &&
        new Map().values().next) ||
        (t.Map = e({
          delete: n,
          has: u,
          get: o,
          set: a,
          keys: function () {
            return p(this._itp, this._keys);
          },
          values: f,
          entries: function () {
            return p(this._itp, this._keys, this._values);
          },
          forEach: y,
          clear: l,
        })),
      ("undefined" != typeof Set &&
        "function" == typeof new Set().values &&
        new Set().values().next) ||
        (t.Set = e({
          has: c,
          add: s,
          delete: n,
          clear: l,
          keys: f,
          values: f,
          entries: function () {
            return p(this._itp, this._values, this._values);
          },
          forEach: y,
        })),
      "undefined" == typeof WeakSet &&
        (t.WeakSet = e({ delete: n, add: s, clear: l, has: c }, !0));
  })(
    "undefined" != typeof exports && "undefined" != typeof global
      ? global
      : window
  ),
  (function (t) {
    function e(n) {
      if (r[n]) return r[n].exports;
      var o = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    var r = {};
    (e.m = t),
      (e.c = r),
      (e.i = function (t) {
        return t;
      }),
      (e.d = function (t, r, n) {
        e.o(t, r) ||
          Object.defineProperty(t, r, {
            configurable: !1,
            enumerable: !0,
            get: n,
          });
      }),
      (e.n = function (t) {
        var r =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(r, "a", r), r;
      }),
      (e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (e.p = ""),
      e((e.s = 4));
  })([
    function (t, e, r) {
      "use strict";
      var n = r(7)();
      t.exports = function (t) {
        return t !== n && null !== t;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = { object: !0, symbol: !0 };
      t.exports = function () {
        var t;
        if ("function" != typeof Symbol) return !1;
        t = Symbol("test symbol");
        try {
          String(t);
        } catch (t) {
          return !1;
        }
        return (
          !!n[typeof Symbol.iterator] &&
          !!n[typeof Symbol.toPrimitive] &&
          !!n[typeof Symbol.toStringTag]
        );
      };
    },
    function (t, e) {
      t.exports = (function () {
        return this;
      })();
    },
    function (t, e, r) {
      "use strict";
      var n,
        o,
        i,
        c,
        u = r(6),
        a = r(20),
        s = Object.create,
        l = Object.defineProperties,
        f = Object.defineProperty,
        p = Object.prototype,
        h = s(null);
      if ("function" == typeof Symbol) {
        n = Symbol;
        try {
          String(n()), (c = !0);
        } catch (t) {}
      }
      var y = (function () {
        var t = s(null);
        return function (e) {
          for (var r, n, o = 0; t[e + (o || "")]; ) ++o;
          return (
            (t[(e += o || "")] = !0),
            f(
              p,
              (r = "@@" + e),
              u.gs(null, function (t) {
                n || ((n = !0), f(this, r, u(t)), (n = !1));
              })
            ),
            r
          );
        };
      })();
      (i = function (t) {
        if (this instanceof i)
          throw new TypeError("Symbol is not a constructor");
        return o(t);
      }),
        (t.exports = o =
          function t(e) {
            var r;
            if (this instanceof t)
              throw new TypeError("Symbol is not a constructor");
            return c
              ? n(e)
              : ((r = s(i.prototype)),
                (e = void 0 === e ? "" : String(e)),
                l(r, { __description__: u("", e), __name__: u("", y(e)) }));
          }),
        l(o, {
          for: u(function (t) {
            return h[t] ? h[t] : (h[t] = o(String(t)));
          }),
          keyFor: u(function (t) {
            var e;
            for (e in (a(t), h)) if (h[e] === t) return e;
          }),
          hasInstance: u("", (n && n.hasInstance) || o("hasInstance")),
          isConcatSpreadable: u(
            "",
            (n && n.isConcatSpreadable) || o("isConcatSpreadable")
          ),
          iterator: u("", (n && n.iterator) || o("iterator")),
          match: u("", (n && n.match) || o("match")),
          replace: u("", (n && n.replace) || o("replace")),
          search: u("", (n && n.search) || o("search")),
          species: u("", (n && n.species) || o("species")),
          split: u("", (n && n.split) || o("split")),
          toPrimitive: u("", (n && n.toPrimitive) || o("toPrimitive")),
          toStringTag: u("", (n && n.toStringTag) || o("toStringTag")),
          unscopables: u("", (n && n.unscopables) || o("unscopables")),
        }),
        l(i.prototype, {
          constructor: u(o),
          toString: u("", function () {
            return this.__name__;
          }),
        }),
        l(o.prototype, {
          toString: u(function () {
            return "Symbol (" + a(this).__description__ + ")";
          }),
          valueOf: u(function () {
            return a(this);
          }),
        }),
        f(
          o.prototype,
          o.toPrimitive,
          u("", function () {
            var t = a(this);
            return "symbol" == typeof t ? t : t.toString();
          })
        ),
        f(o.prototype, o.toStringTag, u("c", "Symbol")),
        f(i.prototype, o.toStringTag, u("c", o.prototype[o.toStringTag])),
        f(i.prototype, o.toPrimitive, u("c", o.prototype[o.toPrimitive]));
    },
    function (t, e, r) {
      "use strict";
      r(1)() ||
        Object.defineProperty(r(2), "Symbol", {
          value: r(3),
          configurable: !0,
          enumerable: !1,
          writable: !0,
        });
    },
    function (t, e, r) {
      "use strict";
      t.exports = function (t) {
        return (
          !!t &&
          ("symbol" == typeof t ||
            (!!t.constructor &&
              "Symbol" === t.constructor.name &&
              "Symbol" === t[t.constructor.toStringTag]))
        );
      };
    },
    function (t, e, r) {
      "use strict";
      var n,
        o = r(8),
        i = r(15),
        c = r(11),
        u = r(17);
      (n = t.exports =
        function (t, e) {
          var r, n, c, a, s;
          return (
            arguments.length < 2 || "string" != typeof t
              ? ((a = e), (e = t), (t = null))
              : (a = arguments[2]),
            null == t
              ? ((r = c = !0), (n = !1))
              : ((r = u.call(t, "c")),
                (n = u.call(t, "e")),
                (c = u.call(t, "w"))),
            (s = { value: e, configurable: r, enumerable: n, writable: c }),
            a ? o(i(a), s) : s
          );
        }),
        (n.gs = function (t, e, r) {
          var n, a, s, l;
          return (
            "string" != typeof t
              ? ((s = r), (r = e), (e = t), (t = null))
              : (s = arguments[3]),
            null == e
              ? (e = void 0)
              : c(e)
              ? null == r
                ? (r = void 0)
                : c(r) || ((s = r), (r = void 0))
              : ((s = e), (e = r = void 0)),
            null == t
              ? ((n = !0), (a = !1))
              : ((n = u.call(t, "c")), (a = u.call(t, "e"))),
            (l = { get: e, set: r, configurable: n, enumerable: a }),
            s ? o(i(s), l) : l
          );
        });
    },
    function (t, e, r) {
      "use strict";
      t.exports = function () {};
    },
    function (t, e, r) {
      "use strict";
      t.exports = r(9)() ? Object.assign : r(10);
    },
    function (t, e, r) {
      "use strict";
      t.exports = function () {
        var t,
          e = Object.assign;
        return (
          "function" == typeof e &&
          (e((t = { foo: "raz" }), { bar: "dwa" }, { trzy: "trzy" }),
          t.foo + t.bar + t.trzy === "razdwatrzy")
        );
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(12),
        o = r(16),
        i = Math.max;
      t.exports = function (t, e) {
        var r,
          c,
          u,
          a = i(arguments.length, 2);
        for (
          t = Object(o(t)),
            u = function (n) {
              try {
                t[n] = e[n];
              } catch (t) {
                r || (r = t);
              }
            },
            c = 1;
          c < a;
          ++c
        )
          n((e = arguments[c])).forEach(u);
        if (void 0 !== r) throw r;
        return t;
      };
    },
    function (t, e, r) {
      "use strict";
      t.exports = function (t) {
        return "function" == typeof t;
      };
    },
    function (t, e, r) {
      "use strict";
      t.exports = r(13)() ? Object.keys : r(14);
    },
    function (t, e, r) {
      "use strict";
      t.exports = function () {
        try {
          return Object.keys("primitive"), !0;
        } catch (t) {
          return !1;
        }
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        o = Object.keys;
      t.exports = function (t) {
        return o(n(t) ? Object(t) : t);
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0),
        o = Array.prototype.forEach,
        i = Object.create;
      t.exports = function (t) {
        var e = i(null);
        return (
          o.call(arguments, function (t) {
            n(t) &&
              (function (t, e) {
                var r;
                for (r in t) e[r] = t[r];
              })(Object(t), e);
          }),
          e
        );
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(0);
      t.exports = function (t) {
        if (!n(t)) throw new TypeError("Cannot use null or undefined");
        return t;
      };
    },
    function (t, e, r) {
      "use strict";
      t.exports = r(18)() ? String.prototype.contains : r(19);
    },
    function (t, e, r) {
      "use strict";
      var n = "razdwatrzy";
      t.exports = function () {
        return (
          "function" == typeof n.contains &&
          !0 === n.contains("dwa") &&
          !1 === n.contains("foo")
        );
      };
    },
    function (t, e, r) {
      "use strict";
      var n = String.prototype.indexOf;
      t.exports = function (t) {
        return n.call(this, t, arguments[1]) > -1;
      };
    },
    function (t, e, r) {
      "use strict";
      var n = r(5);
      t.exports = function (t) {
        if (!n(t)) throw new TypeError(t + " is not a symbol");
        return t;
      };
    },
  ]),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : (t.ES6Promise = e());
  })(this, function () {
    "use strict";
    function t(t) {
      return "function" == typeof t;
    }
    function e() {
      var t = setTimeout;
      return function () {
        return t(r, 1);
      };
    }
    function r() {
      for (var t = 0; t < g; t += 2) {
        (0, T[t])(T[t + 1]), (T[t] = void 0), (T[t + 1] = void 0);
      }
      g = 0;
    }
    function n(t, e) {
      var r = this,
        n = new this.constructor(i);
      void 0 === n[A] && d(n);
      var o = r._state;
      if (o) {
        var c = arguments[o - 1];
        _(function () {
          return y(o, n, c, r._result);
        });
      } else p(r, n, t, e);
      return n;
    }
    function o(t) {
      if (t && "object" == typeof t && t.constructor === this) return t;
      var e = new this(i);
      return a(e, t), e;
    }
    function i() {}
    function c(t) {
      try {
        return t.then;
      } catch (t) {
        return (D.error = t), D;
      }
    }
    function u(e, r, i) {
      r.constructor === e.constructor && i === n && r.constructor.resolve === o
        ? (function (t, e) {
            e._state === M
              ? l(t, e._result)
              : e._state === C
              ? f(t, e._result)
              : p(
                  e,
                  void 0,
                  function (e) {
                    return a(t, e);
                  },
                  function (e) {
                    return f(t, e);
                  }
                );
          })(e, r)
        : i === D
        ? (f(e, D.error), (D.error = null))
        : void 0 === i
        ? l(e, r)
        : t(i)
        ? (function (t, e, r) {
            _(function (t) {
              var n = !1,
                o = (function (t, e, r, n) {
                  try {
                    t.call(e, r, n);
                  } catch (t) {
                    return t;
                  }
                })(
                  r,
                  e,
                  function (r) {
                    n || ((n = !0), e !== r ? a(t, r) : l(t, r));
                  },
                  function (e) {
                    n || ((n = !0), f(t, e));
                  },
                  t._label
                );
              !n && o && ((n = !0), f(t, o));
            }, t);
          })(e, r, i)
        : l(e, r);
    }
    function a(t, e) {
      t === e
        ? f(t, new TypeError("You cannot resolve a promise with itself"))
        : (function (t) {
            var e = typeof t;
            return null !== t && ("object" === e || "function" === e);
          })(e)
        ? u(t, e, c(e))
        : l(t, e);
    }
    function s(t) {
      t._onerror && t._onerror(t._result), h(t);
    }
    function l(t, e) {
      t._state === k &&
        ((t._result = e),
        (t._state = M),
        0 !== t._subscribers.length && _(h, t));
    }
    function f(t, e) {
      t._state === k && ((t._state = C), (t._result = e), _(s, t));
    }
    function p(t, e, r, n) {
      var o = t._subscribers,
        i = o.length;
      (t._onerror = null),
        (o[i] = e),
        (o[i + M] = r),
        (o[i + C] = n),
        0 === i && t._state && _(h, t);
    }
    function h(t) {
      var e = t._subscribers,
        r = t._state;
      if (0 !== e.length) {
        for (
          var n = void 0, o = void 0, i = t._result, c = 0;
          c < e.length;
          c += 3
        )
          (n = e[c]), (o = e[c + r]), n ? y(r, n, o, i) : o(i);
        t._subscribers.length = 0;
      }
    }
    function y(e, r, n, o) {
      var i = t(n),
        c = void 0,
        u = void 0,
        s = void 0,
        p = void 0;
      if (i) {
        if (
          ((c = (function (t, e) {
            try {
              return t(e);
            } catch (t) {
              return (D.error = t), D;
            }
          })(n, o)),
          c === D ? ((p = !0), (u = c.error), (c.error = null)) : (s = !0),
          r === c)
        )
          return void f(
            r,
            new TypeError(
              "A promises callback cannot return that same promise."
            )
          );
      } else (c = o), (s = !0);
      r._state !== k ||
        (i && s
          ? a(r, c)
          : p
          ? f(r, u)
          : e === M
          ? l(r, c)
          : e === C && f(r, c));
    }
    function d(t) {
      (t[A] = I++),
        (t._state = void 0),
        (t._result = void 0),
        (t._subscribers = []);
    }
    var v;
    v = Array.isArray
      ? Array.isArray
      : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        };
    var b = v,
      g = 0,
      w = void 0,
      m = void 0,
      _ = function (t, e) {
        (T[g] = t), (T[g + 1] = e), 2 === (g += 2) && (m ? m(r) : P());
      },
      O = "undefined" != typeof window ? window : void 0,
      j = O || {},
      x = j.MutationObserver || j.WebKitMutationObserver,
      S =
        "undefined" == typeof self &&
        "undefined" != typeof process &&
        "[object process]" === {}.toString.call(process),
      E =
        "undefined" != typeof Uint8ClampedArray &&
        "undefined" != typeof importScripts &&
        "undefined" != typeof MessageChannel,
      T = new Array(1e3),
      P = void 0;
    P = S
      ? function () {
          return process.nextTick(r);
        }
      : x
      ? (function () {
          var t = 0,
            e = new x(r),
            n = document.createTextNode("");
          return (
            e.observe(n, { characterData: !0 }),
            function () {
              n.data = t = ++t % 2;
            }
          );
        })()
      : E
      ? (function () {
          var t = new MessageChannel();
          return (
            (t.port1.onmessage = r),
            function () {
              return t.port2.postMessage(0);
            }
          );
        })()
      : void 0 === O && "function" == typeof require
      ? (function () {
          try {
            var t = Function("return this")().require("vertx");
            return void 0 !== (w = t.runOnLoop || t.runOnContext)
              ? function () {
                  w(r);
                }
              : e();
          } catch (t) {
            return e();
          }
        })()
      : e();
    var A = Math.random().toString(36).substring(2),
      k = void 0,
      M = 1,
      C = 2,
      D = { error: null },
      I = 0,
      N = (function () {
        function t(t, e) {
          (this._instanceConstructor = t),
            (this.promise = new t(i)),
            this.promise[A] || d(this.promise),
            b(e)
              ? ((this.length = e.length),
                (this._remaining = e.length),
                (this._result = new Array(this.length)),
                0 === this.length
                  ? l(this.promise, this._result)
                  : ((this.length = this.length || 0),
                    this._enumerate(e),
                    0 === this._remaining && l(this.promise, this._result)))
              : f(
                  this.promise,
                  new Error("Array Methods must be provided an Array")
                );
        }
        return (
          (t.prototype._enumerate = function (t) {
            for (var e = 0; this._state === k && e < t.length; e++)
              this._eachEntry(t[e], e);
          }),
          (t.prototype._eachEntry = function (t, e) {
            var r = this._instanceConstructor,
              a = r.resolve;
            if (a === o) {
              var s = c(t);
              if (s === n && t._state !== k)
                this._settledAt(t._state, e, t._result);
              else if ("function" != typeof s)
                this._remaining--, (this._result[e] = t);
              else if (r === F) {
                var l = new r(i);
                u(l, t, s), this._willSettleAt(l, e);
              } else
                this._willSettleAt(
                  new r(function (e) {
                    return e(t);
                  }),
                  e
                );
            } else this._willSettleAt(a(t), e);
          }),
          (t.prototype._settledAt = function (t, e, r) {
            var n = this.promise;
            n._state === k &&
              (this._remaining--, t === C ? f(n, r) : (this._result[e] = r)),
              0 === this._remaining && l(n, this._result);
          }),
          (t.prototype._willSettleAt = function (t, e) {
            var r = this;
            p(
              t,
              void 0,
              function (t) {
                return r._settledAt(M, e, t);
              },
              function (t) {
                return r._settledAt(C, e, t);
              }
            );
          }),
          t
        );
      })(),
      F = (function () {
        function e(t) {
          (this[A] = I++),
            (this._result = this._state = void 0),
            (this._subscribers = []),
            i !== t &&
              ("function" != typeof t &&
                (function () {
                  throw new TypeError(
                    "You must pass a resolver function as the first argument to the promise constructor"
                  );
                })(),
              this instanceof e
                ? (function (t, e) {
                    try {
                      e(
                        function (e) {
                          a(t, e);
                        },
                        function (e) {
                          f(t, e);
                        }
                      );
                    } catch (e) {
                      f(t, e);
                    }
                  })(this, t)
                : (function () {
                    throw new TypeError(
                      "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                    );
                  })());
        }
        return (
          (e.prototype.catch = function (t) {
            return this.then(null, t);
          }),
          (e.prototype.finally = function (e) {
            var r = this,
              n = r.constructor;
            return t(e)
              ? r.then(
                  function (t) {
                    return n.resolve(e()).then(function () {
                      return t;
                    });
                  },
                  function (t) {
                    return n.resolve(e()).then(function () {
                      throw t;
                    });
                  }
                )
              : r.then(e, e);
          }),
          e
        );
      })();
    return (
      (F.prototype.then = n),
      (F.all = function (t) {
        return new N(this, t).promise;
      }),
      (F.race = function (t) {
        var e = this;
        return new e(
          b(t)
            ? function (r, n) {
                for (var o = t.length, i = 0; i < o; i++)
                  e.resolve(t[i]).then(r, n);
              }
            : function (t, e) {
                return e(new TypeError("You must pass an array to race."));
              }
        );
      }),
      (F.resolve = o),
      (F.reject = function (t) {
        var e = new this(i);
        return f(e, t), e;
      }),
      (F._setScheduler = function (t) {
        m = t;
      }),
      (F._setAsap = function (t) {
        _ = t;
      }),
      (F._asap = _),
      (F.polyfill = function () {
        var t = void 0;
        if ("undefined" != typeof global) t = global;
        else if ("undefined" != typeof self) t = self;
        else
          try {
            t = Function("return this")();
          } catch (t) {
            throw new Error(
              "polyfill failed because global object is unavailable in this environment"
            );
          }
        var e = t.Promise;
        if (e) {
          var r = null;
          try {
            r = Object.prototype.toString.call(e.resolve());
          } catch (t) {}
          if ("[object Promise]" === r && !e.cast) return;
        }
        t.Promise = F;
      }),
      (F.Promise = F),
      F.polyfill(),
      F
    );
  });
