(function (t)
{
  var e, n, r = "0.3.4",
    i = "hasOwnProperty",
    a = /[\.\/]/,
    o = "*",
    u = function () {}, s = function (t, e)
    {
      return t - e
    }, l = {
      n:
      {}
    }, c = function (t, r)
    {
      var i, a = n,
        o = Array.prototype.slice.call(arguments, 2),
        u = c.listeners(t),
        l = 0,
        f = [],
        h = {}, p = [],
        d = e;
      e = t, n = 0;
      for (var g = 0, m = u.length; m > g; g++) "zIndex" in u[g] && (f.push(u[g].zIndex), 0 > u[g].zIndex && (h[u[g].zIndex] = u[g]));
      for (f.sort(s); 0 > f[l];)
        if (i = h[f[l++]], p.push(i.apply(r, o)), n) return n = a, p;
      for (g = 0; m > g; g++)
        if (i = u[g], "zIndex" in i)
          if (i.zIndex == f[l])
          {
            if (p.push(i.apply(r, o)), n) break;
            do
              if (l++, i = h[f[l]], i && p.push(i.apply(r, o)), n) break; while (i)
          }
          else h[i.zIndex] = i;
          else if (p.push(i.apply(r, o)), n) break;
      return n = a, e = d, p.length ? p : null
    };
  c.listeners = function (t)
  {
    var e, n, r, i, u, s, c, f, h = t.split(a),
      p = l,
      d = [p],
      g = [];
    for (i = 0, u = h.length; u > i; i++)
    {
      for (f = [], s = 0, c = d.length; c > s; s++)
        for (p = d[s].n, n = [p[h[i]], p[o]], r = 2; r--;) e = n[r], e && (f.push(e), g = g.concat(e.f || []));
      d = f
    }
    return g
  }, c.on = function (t, e)
  {
    for (var n = t.split(a), r = l, i = 0, o = n.length; o > i; i++) r = r.n, !r[n[i]] && (r[n[i]] = {
      n:
      {}
    }), r = r[n[i]];
    for (r.f = r.f || [], i = 0, o = r.f.length; o > i; i++)
      if (r.f[i] == e) return u;
    return r.f.push(e),
    function (t)
    {
      +t == +t && (e.zIndex = +t)
    }
  }, c.stop = function ()
  {
    n = 1
  }, c.nt = function (t)
  {
    return t ? RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
  }, c.off = c.unbind = function (t, e)
  {
    var n, r, u, s, c, f, h, p = t.split(a),
      d = [l];
    for (s = 0, c = p.length; c > s; s++)
      for (f = 0; d.length > f; f += u.length - 2)
      {
        if (u = [f, 1], n = d[f].n, p[s] != o) n[p[s]] && u.push(n[p[s]]);
        else
          for (r in n) n[i](r) && u.push(n[r]);
        d.splice.apply(d, u)
      }
    for (s = 0, c = d.length; c > s; s++)
      for (n = d[s]; n.n;)
      {
        if (e)
        {
          if (n.f)
          {
            for (f = 0, h = n.f.length; h > f; f++)
              if (n.f[f] == e)
              {
                n.f.splice(f, 1);
                break
              }!n.f.length && delete n.f
          }
          for (r in n.n)
            if (n.n[i](r) && n.n[r].f)
            {
              var g = n.n[r].f;
              for (f = 0, h = g.length; h > f; f++)
                if (g[f] == e)
                {
                  g.splice(f, 1);
                  break
                }!g.length && delete n.n[r].f
            }
        }
        else
        {
          delete n.f;
          for (r in n.n) n.n[i](r) && n.n[r].f && delete n.n[r].f
        }
        n = n.n
      }
  }, c.once = function (t, e)
  {
    var n = function ()
    {
      var r = e.apply(this, arguments);
      return c.unbind(t, n), r
    };
    return c.on(t, n)
  }, c.version = r, c.toString = function ()
  {
    return "You are running Eve " + r
  }, "undefined" != typeof module && module.exports ? module.exports = c : "undefined" != typeof define ? define("eve", [], function ()
  {
    return c
  }) : t.eve = c
})(this),
function ()
{
  function t(e)
  {
    if (t.is(e, "function")) return y ? e() : eve.on("raphael.DOMload", e);
    if (t.is(e, Y)) return t._engine.create[A](t, e.splice(0, 3 + t.is(e[0], U))).add(e);
    var n = Array.prototype.slice.call(arguments, 0);
    if (t.is(n[n.length - 1], "function"))
    {
      var r = n.pop();
      return y ? r.call(t._engine.create[A](t, n)) : eve.on("raphael.DOMload", function ()
      {
        r.call(t._engine.create[A](t, n))
      })
    }
    return t._engine.create[A](t, arguments)
  }

  function e(t)
  {
    if (Object(t) !== t) return t;
    var n = new t.constructor;
    for (var r in t) t[M](r) && (n[r] = e(t[r]));
    return n
  }

  function n(t, e)
  {
    for (var n = 0, r = t.length; r > n; n++)
      if (t[n] === e) return t.push(t.splice(n, 1)[0])
  }

  function r(t, e, r)
  {
    function i()
    {
      var a = Array.prototype.slice.call(arguments, 0),
        o = a.join("␀"),
        u = i.cache = i.cache ||
        {}, s = i.count = i.count || [];
      return u[M](o) ? (n(s, o), r ? r(u[o]) : u[o]) : (s.length >= 1e3 && delete u[s.shift()], s.push(o), u[o] = t[A](e, a), r ? r(u[o]) : u[o])
    }
    return i
  }

  function i()
  {
    return this.hex
  }

  function a(t, e)
  {
    for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2)
    {
      var a = [
      {
        x: +t[r - 2],
        y: +t[r - 1]
      },
      {
        x: +t[r],
        y: +t[r + 1]
      },
      {
        x: +t[r + 2],
        y: +t[r + 3]
      },
      {
        x: +t[r + 4],
        y: +t[r + 5]
      }];
      e ? r ? i - 4 == r ? a[3] = {
        x: +t[0],
        y: +t[1]
      } : i - 2 == r && (a[2] = {
        x: +t[0],
        y: +t[1]
      }, a[3] = {
        x: +t[2],
        y: +t[3]
      }) : a[0] = {
        x: +t[i - 2],
        y: +t[i - 1]
      } : i - 4 == r ? a[3] = a[2] : r || (a[0] = {
        x: +t[r],
        y: +t[r + 1]
      }), n.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
    }
    return n
  }

  function o(t, e, n, r, i)
  {
    var a = -3 * e + 9 * n - 9 * r + 3 * i,
      o = t * a + 6 * e - 12 * n + 6 * r;
    return t * o - 3 * e + 3 * n
  }

  function u(t, e, n, r, i, a, u, s, l)
  {
    null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
    for (var c = l / 2, f = 12, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, g = 0; f > g; g++)
    {
      var m = c * h[g] + c,
        v = o(m, t, n, i, u),
        y = o(m, e, r, a, s),
        x = v * v + y * y;
      d += p[g] * F.sqrt(x)
    }
    return c * d
  }

  function s(t, e, n, r, i, a, o, s, l)
  {
    if (!(0 > l || l > u(t, e, n, r, i, a, o, s)))
    {
      var c, f = 1,
        h = f / 2,
        p = f - h,
        d = .01;
      for (c = u(t, e, n, r, i, a, o, s, p); O(c - l) > d;) h /= 2, p += (l > c ? 1 : -1) * h, c = u(t, e, n, r, i, a, o, s, p);
      return p
    }
  }

  function l(t, e, n, r, i, a, o, u)
  {
    if (!(q(t, n) < R(i, o) || R(t, n) > q(i, o) || q(e, r) < R(a, u) || R(e, r) > q(a, u)))
    {
      var s = (t * r - e * n) * (i - o) - (t - n) * (i * u - a * o),
        l = (t * r - e * n) * (a - u) - (e - r) * (i * u - a * o),
        c = (t - n) * (a - u) - (e - r) * (i - o);
      if (c)
      {
        var f = s / c,
          h = l / c,
          p = +f.toFixed(2),
          d = +h.toFixed(2);
        if (!(+R(t, n).toFixed(2) > p || p > +q(t, n).toFixed(2) || +R(i, o).toFixed(2) > p || p > +q(i, o).toFixed(2) || +R(e, r).toFixed(2) > d || d > +q(e, r).toFixed(2) || +R(a, u).toFixed(2) > d || d > +q(a, u).toFixed(2))) return {
          x: f,
          y: h
        }
      }
    }
  }

  function c(e, n, r)
  {
    var i = t.bezierBBox(e),
      a = t.bezierBBox(n);
    if (!t.isBBoxIntersect(i, a)) return r ? 0 : [];
    for (var o = u.apply(0, e), s = u.apply(0, n), c = ~~ (o / 5), f = ~~ (s / 5), h = [], p = [], d = {}, g = r ? 0 : [], m = 0; c + 1 > m; m++)
    {
      var v = t.findDotsAtSegment.apply(t, e.concat(m / c));
      h.push(
      {
        x: v.x,
        y: v.y,
        t: m / c
      })
    }
    for (m = 0; f + 1 > m; m++) v = t.findDotsAtSegment.apply(t, n.concat(m / f)), p.push(
    {
      x: v.x,
      y: v.y,
      t: m / f
    });
    for (m = 0; c > m; m++)
      for (var y = 0; f > y; y++)
      {
        var x = h[m],
          b = h[m + 1],
          _ = p[y],
          w = p[y + 1],
          M = .001 > O(b.x - x.x) ? "y" : "x",
          k = .001 > O(w.x - _.x) ? "y" : "x",
          S = l(x.x, x.y, b.x, b.y, _.x, _.y, w.x, w.y);
        if (S)
        {
          if (d[S.x.toFixed(4)] == S.y.toFixed(4)) continue;
          d[S.x.toFixed(4)] = S.y.toFixed(4);
          var N = x.t + O((S[M] - x[M]) / (b[M] - x[M])) * (b.t - x.t),
            A = _.t + O((S[k] - _[k]) / (w[k] - _[k])) * (w.t - _.t);
          N >= 0 && 1 >= N && A >= 0 && 1 >= A && (r ? g++ : g.push(
          {
            x: S.x,
            y: S.y,
            t1: N,
            t2: A
          }))
        }
      }
    return g
  }

  function f(e, n, r)
  {
    e = t._path2curve(e), n = t._path2curve(n);
    for (var i, a, o, u, s, l, f, h, p, d, g = r ? 0 : [], m = 0, v = e.length; v > m; m++)
    {
      var y = e[m];
      if ("M" == y[0]) i = s = y[1], a = l = y[2];
      else
      {
        "C" == y[0] ? (p = [i, a].concat(y.slice(1)), i = p[6], a = p[7]) : (p = [i, a, i, a, s, l, s, l], i = s, a = l);
        for (var x = 0, b = n.length; b > x; x++)
        {
          var _ = n[x];
          if ("M" == _[0]) o = f = _[1], u = h = _[2];
          else
          {
            "C" == _[0] ? (d = [o, u].concat(_.slice(1)), o = d[6], u = d[7]) : (d = [o, u, o, u, f, h, f, h], o = f, u = h);
            var w = c(p, d, r);
            if (r) g += w;
            else
            {
              for (var M = 0, k = w.length; k > M; M++) w[M].segment1 = m, w[M].segment2 = x, w[M].bez1 = p, w[M].bez2 = d;
              g = g.concat(w)
            }
          }
        }
      }
    }
    return g
  }

  function h(t, e, n, r, i, a)
  {
    null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
  }

  function p()
  {
    return this.x + B + this.y + B + this.width + " × " + this.height
  }

  function d(t, e, n, r, i, a)
  {
    function o(t)
    {
      return ((f * t + c) * t + l) * t
    }

    function u(t, e)
    {
      var n = s(t, e);
      return ((d * n + p) * n + h) * n
    }

    function s(t, e)
    {
      var n, r, i, a, u, s;
      for (i = t, s = 0; 8 > s; s++)
      {
        if (a = o(i) - t, e > O(a)) return i;
        if (u = (3 * f * i + 2 * c) * i + l, 1e-6 > O(u)) break;
        i -= a / u
      }
      if (n = 0, r = 1, i = t, n > i) return n;
      if (i > r) return r;
      for (; r > n;)
      {
        if (a = o(i), e > O(a - t)) return i;
        t > a ? n = i : r = i, i = (r - n) / 2 + n
      }
      return i
    }
    var l = 3 * e,
      c = 3 * (r - e) - l,
      f = 1 - l - c,
      h = 3 * n,
      p = 3 * (i - n) - h,
      d = 1 - h - p;
    return u(t, 1 / (200 * a))
  }

  function g(t, e)
  {
    var n = [],
      r = {};
    if (this.ms = e, this.times = 1, t)
    {
      for (var i in t) t[M](i) && (r[J(i)] = t[i], n.push(J(i)));
      n.sort(le)
    }
    this.anim = r, this.top = n[n.length - 1], this.percents = n
  }

  function m(e, n, r, i, a, o)
  {
    r = J(r);
    var u, s, l, c, f, p, g = e.ms,
      m = {}, v = {}, y = {};
    if (i)
      for (_ = 0, w = on.length; w > _; _++)
      {
        var x = on[_];
        if (x.el.id == n.id && x.anim == e)
        {
          x.percent != r ? (on.splice(_, 1), l = 1) : s = x, n.attr(x.totalOrigin);
          break
        }
      }
    else i = +v;
    for (var _ = 0, w = e.percents.length; w > _; _++)
    {
      if (e.percents[_] == r || e.percents[_] > i * e.top)
      {
        r = e.percents[_], f = e.percents[_ - 1] || 0, g = g / e.top * (r - f), c = e.percents[_ + 1], u = e.anim[r];
        break
      }
      i && n.attr(e.anim[e.percents[_]])
    }
    if (u)
    {
      if (s) s.initstatus = i, s.start = new Date - s.ms * i;
      else
      {
        for (var k in u)
          if (u[M](k) && (ee[M](k) || n.paper.customAttributes[M](k))) switch (m[k] = n.attr(k), null == m[k] && (m[k] = te[k]), v[k] = u[k], ee[k])
          {
          case U:
            y[k] = (v[k] - m[k]) / g;
            break;
          case "colour":
            m[k] = t.getRGB(m[k]);
            var S = t.getRGB(v[k]);
            y[k] = {
              r: (S.r - m[k].r) / g,
              g: (S.g - m[k].g) / g,
              b: (S.b - m[k].b) / g
            };
            break;
          case "path":
            var N = Pe(m[k], v[k]),
              A = N[1];
            for (m[k] = N[0], y[k] = [], _ = 0, w = m[k].length; w > _; _++)
            {
              y[k][_] = [0];
              for (var E = 1, T = m[k][_].length; T > E; E++) y[k][_][E] = (A[_][E] - m[k][_][E]) / g
            }
            break;
          case "transform":
            var B = n._,
              P = Re(B[k], v[k]);
            if (P)
              for (m[k] = P.from, v[k] = P.to, y[k] = [], y[k].real = !0, _ = 0, w = m[k].length; w > _; _++)
                for (y[k][_] = [m[k][_][0]], E = 1, T = m[k][_].length; T > E; E++) y[k][_][E] = (v[k][_][E] - m[k][_][E]) / g;
            else
            {
              var j = n.matrix || new h,
                D = {
                  _:
                  {
                    transform: B.transform
                  },
                  getBBox: function ()
                  {
                    return n.getBBox(1)
                  }
                };
              m[k] = [j.a, j.b, j.c, j.d, j.e, j.f], Fe(D, v[k]), v[k] = D._.transform, y[k] = [(D.matrix.a - j.a) / g, (D.matrix.b - j.b) / g, (D.matrix.c - j.c) / g, (D.matrix.d - j.d) / g, (D.matrix.e - j.e) / g, (D.matrix.f - j.f) / g]
            }
            break;
          case "csv":
            var F = L(u[k])[z](b),
              q = L(m[k])[z](b);
            if ("clip-rect" == k)
              for (m[k] = q, y[k] = [], _ = q.length; _--;) y[k][_] = (F[_] - m[k][_]) / g;
            v[k] = F;
            break;
          default:
            for (F = [][C](u[k]), q = [][C](m[k]), y[k] = [], _ = n.paper.customAttributes[k].length; _--;) y[k][_] = ((F[_] || 0) - (q[_] || 0)) / g
          }
          var R = u.easing, O = t.easing_formulas[R];
        if (!O)
          if (O = L(R).match(Z), O && 5 == O.length)
          {
            var I = O;
            O = function (t)
            {
              return d(t, +I[1], +I[2], +I[3], +I[4], g)
            }
          }
          else O = fe;
        if (p = u.start || e.start || +new Date, x = {
          anim: e,
          percent: r,
          timestamp: p,
          start: p + (e.del || 0),
          status: 0,
          initstatus: i || 0,
          stop: !1,
          ms: g,
          easing: O,
          from: m,
          diff: y,
          to: v,
          el: n,
          callback: u.callback,
          prev: f,
          next: c,
          repeat: o || e.times,
          origin: n.attr(),
          totalOrigin: a
        }, on.push(x), i && !s && !l && (x.stop = !0, x.start = new Date - g * i, 1 == on.length)) return sn();
        l && (x.start = new Date - x.ms * i), 1 == on.length && un(sn)
      }
      eve("raphael.anim.start." + n.id, n, e)
    }
  }

  function v(t)
  {
    for (var e = 0; on.length > e; e++) on[e].el.paper == t && on.splice(e--, 1)
  }
  t.version = "2.1.0", t.eve = eve;
  var y, x, b = /[, ]+/,
    _ = {
      circle: 1,
      rect: 1,
      path: 1,
      ellipse: 1,
      text: 1,
      image: 1
    }, w = /\{(\d+)\}/g,
    M = "hasOwnProperty",
    k = {
      doc: document,
      win: window
    }, S = {
      was: Object.prototype[M].call(k.win, "Raphael"),
      is: k.win.Raphael
    }, N = function ()
    {
      this.ca = this.customAttributes = {}
    }, A = "apply",
    C = "concat",
    E = "createTouch" in k.doc,
    T = "",
    B = " ",
    L = String,
    z = "split",
    P = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [z](B),
    j = {
      mousedown: "touchstart",
      mousemove: "touchmove",
      mouseup: "touchend"
    }, D = L.prototype.toLowerCase,
    F = Math,
    q = F.max,
    R = F.min,
    O = F.abs,
    I = F.pow,
    H = F.PI,
    U = "number",
    V = "string",
    Y = "array",
    G = Object.prototype.toString,
    X = (t._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
    $ = {
      NaN: 1,
      Infinity: 1,
      "-Infinity": 1
    }, Z = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
    W = F.round,
    J = parseFloat,
    K = parseInt,
    Q = L.prototype.toUpperCase,
    te = t._availableAttrs = {
      "arrow-end": "none",
      "arrow-start": "none",
      blur: 0,
      "clip-rect": "0 0 1e9 1e9",
      cursor: "default",
      cx: 0,
      cy: 0,
      fill: "#fff",
      "fill-opacity": 1,
      font: '10px "Arial"',
      "font-family": '"Arial"',
      "font-size": "10",
      "font-style": "normal",
      "font-weight": 400,
      gradient: 0,
      height: 0,
      href: "http://raphaeljs.com/",
      "letter-spacing": 0,
      opacity: 1,
      path: "M0,0",
      r: 0,
      rx: 0,
      ry: 0,
      src: "",
      stroke: "#000",
      "stroke-dasharray": "",
      "stroke-linecap": "butt",
      "stroke-linejoin": "butt",
      "stroke-miterlimit": 0,
      "stroke-opacity": 1,
      "stroke-width": 1,
      target: "_blank",
      "text-anchor": "middle",
      title: "Raphael",
      transform: "",
      width: 0,
      x: 0,
      y: 0
    }, ee = t._availableAnimAttrs = {
      blur: U,
      "clip-rect": "csv",
      cx: U,
      cy: U,
      fill: "colour",
      "fill-opacity": U,
      "font-size": U,
      height: U,
      opacity: U,
      path: "path",
      r: U,
      rx: U,
      ry: U,
      stroke: "colour",
      "stroke-opacity": U,
      "stroke-width": U,
      transform: "transform",
      width: U,
      x: U,
      y: U
    }, ne = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
    re = {
      hs: 1,
      rg: 1
    }, ie = /,?([achlmqrstvxz]),?/gi,
    ae = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
    oe = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
    ue = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
    se = (t._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
    {}),
    le = function (t, e)
    {
      return J(t) - J(e)
    }, ce = function () {}, fe = function (t)
    {
      return t
    }, he = t._rectPath = function (t, e, n, r, i)
    {
      return i ? [
        ["M", t + i, e],
        ["l", n - 2 * i, 0],
        ["a", i, i, 0, 0, 1, i, i],
        ["l", 0, r - 2 * i],
        ["a", i, i, 0, 0, 1, -i, i],
        ["l", 2 * i - n, 0],
        ["a", i, i, 0, 0, 1, -i, -i],
        ["l", 0, 2 * i - r],
        ["a", i, i, 0, 0, 1, i, -i],
        ["z"]
      ] : [
        ["M", t, e],
        ["l", n, 0],
        ["l", 0, r],
        ["l", -n, 0],
        ["z"]
      ]
    }, pe = function (t, e, n, r)
    {
      return null == r && (r = n), [
        ["M", t, e],
        ["m", 0, -r],
        ["a", n, r, 0, 1, 1, 0, 2 * r],
        ["a", n, r, 0, 1, 1, 0, -2 * r],
        ["z"]
      ]
    }, de = t._getPath = {
      path: function (t)
      {
        return t.attr("path")
      },
      circle: function (t)
      {
        var e = t.attrs;
        return pe(e.cx, e.cy, e.r)
      },
      ellipse: function (t)
      {
        var e = t.attrs;
        return pe(e.cx, e.cy, e.rx, e.ry)
      },
      rect: function (t)
      {
        var e = t.attrs;
        return he(e.x, e.y, e.width, e.height, e.r)
      },
      image: function (t)
      {
        var e = t.attrs;
        return he(e.x, e.y, e.width, e.height)
      },
      text: function (t)
      {
        var e = t._getBBox();
        return he(e.x, e.y, e.width, e.height)
      }
    }, ge = t.mapPath = function (t, e)
    {
      if (!e) return t;
      var n, r, i, a, o, u, s;
      for (t = Pe(t), i = 0, o = t.length; o > i; i++)
        for (s = t[i], a = 1, u = s.length; u > a; a += 2) n = e.x(s[a], s[a + 1]), r = e.y(s[a], s[a + 1]), s[a] = n, s[a + 1] = r;
      return t
    };
  if (t._g = k, t.type = k.win.SVGAngle || k.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == t.type)
  {
    var me, ve = k.doc.createElement("div");
    if (ve.innerHTML = '<v:shape adj="1"/>', me = ve.firstChild, me.style.behavior = "url(#default#VML)", !me || "object" != typeof me.adj) return t.type = T;
    ve = null
  }
  t.svg = !(t.vml = "VML" == t.type), t._Paper = N, t.fn = x = N.prototype = t.prototype, t._id = 0, t._oid = 0, t.is = function (t, e)
  {
    return e = D.call(e), "finite" == e ? !$[M](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || G.call(t).slice(8, -1).toLowerCase() == e
  }, t.angle = function (e, n, r, i, a, o)
  {
    if (null == a)
    {
      var u = e - r,
        s = n - i;
      return u || s ? (180 + 180 * F.atan2(-s, -u) / H + 360) % 360 : 0
    }
    return t.angle(e, n, a, o) - t.angle(r, i, a, o)
  }, t.rad = function (t)
  {
    return t % 360 * H / 180
  }, t.deg = function (t)
  {
    return 180 * t / H % 360
  }, t.snapTo = function (e, n, r)
  {
    if (r = t.is(r, "finite") ? r : 10, t.is(e, Y))
    {
      for (var i = e.length; i--;)
        if (r >= O(e[i] - n)) return e[i]
    }
    else
    {
      e = +e;
      var a = n % e;
      if (r > a) return n - a;
      if (a > e - r) return n - a + e
    }
    return n
  }, t.createUUID = function (t, e)
  {
    return function ()
    {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
    }
  }(/[xy]/g, function (t)
  {
    var e = 0 | 16 * F.random(),
      n = "x" == t ? e : 8 | 3 & e;
    return n.toString(16)
  }), t.setWindow = function (e)
  {
    eve("raphael.setWindow", t, k.win, e), k.win = e, k.doc = k.win.document, t._engine.initWin && t._engine.initWin(k.win)
  };
  var ye = function (e)
  {
    if (t.vml)
    {
      var n, i = /^\s+|\s+$/g;
      try
      {
        var a = new ActiveXObject("htmlfile");
        a.write("<body>"), a.close(), n = a.body
      }
      catch (o)
      {
        n = createPopup().document.body
      }
      var u = n.createTextRange();
      ye = r(function (t)
      {
        try
        {
          n.style.color = L(t).replace(i, T);
          var e = u.queryCommandValue("ForeColor");
          return e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16, "#" + ("000000" + e.toString(16)).slice(-6)
        }
        catch (r)
        {
          return "none"
        }
      })
    }
    else
    {
      var s = k.doc.createElement("i");
      s.title = "Raphaël Colour Picker", s.style.display = "none", k.doc.body.appendChild(s), ye = r(function (t)
      {
        return s.style.color = t, k.doc.defaultView.getComputedStyle(s, T).getPropertyValue("color")
      })
    }
    return ye(e)
  }, xe = function ()
    {
      return "hsb(" + [this.h, this.s, this.b] + ")"
    }, be = function ()
    {
      return "hsl(" + [this.h, this.s, this.l] + ")"
    }, _e = function ()
    {
      return this.hex
    }, we = function (e, n, r)
    {
      if (null == n && t.is(e, "object") && "r" in e && "g" in e && "b" in e && (r = e.b, n = e.g, e = e.r), null == n && t.is(e, V))
      {
        var i = t.getRGB(e);
        e = i.r, n = i.g, r = i.b
      }
      return (e > 1 || n > 1 || r > 1) && (e /= 255, n /= 255, r /= 255), [e, n, r]
    }, Me = function (e, n, r, i)
    {
      e *= 255, n *= 255, r *= 255;
      var a = {
        r: e,
        g: n,
        b: r,
        hex: t.rgb(e, n, r),
        toString: _e
      };
      return t.is(i, "finite") && (a.opacity = i), a
    };
  t.color = function (e)
  {
    var n;
    return t.is(e, "object") && "h" in e && "s" in e && "b" in e ? (n = t.hsb2rgb(e), e.r = n.r, e.g = n.g, e.b = n.b, e.hex = n.hex) : t.is(e, "object") && "h" in e && "s" in e && "l" in e ? (n = t.hsl2rgb(e), e.r = n.r, e.g = n.g, e.b = n.b, e.hex = n.hex) : (t.is(e, "string") && (e = t.getRGB(e)), t.is(e, "object") && "r" in e && "g" in e && "b" in e ? (n = t.rgb2hsl(e), e.h = n.h, e.s = n.s, e.l = n.l, n = t.rgb2hsb(e), e.v = n.b) : (e = {
      hex: "none"
    }, e.r = e.g = e.b = e.h = e.s = e.v = e.l = -1)), e.toString = _e, e
  }, t.hsb2rgb = function (t, e, n, r)
  {
    this.is(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, t = t.h, r = t.o), t *= 360;
    var i, a, o, u, s;
    return t = t % 360 / 60, s = n * e, u = s * (1 - O(t % 2 - 1)), i = a = o = n - s, t = ~~t, i += [s, u, 0, 0, u, s][t], a += [u, s, s, u, 0, 0][t], o += [0, 0, u, s, s, u][t], Me(i, a, o, r)
  }, t.hsl2rgb = function (t, e, n, r)
  {
    this.is(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
    var i, a, o, u, s;
    return t = t % 360 / 60, s = 2 * e * (.5 > n ? n : 1 - n), u = s * (1 - O(t % 2 - 1)), i = a = o = n - s / 2, t = ~~t, i += [s, u, 0, 0, u, s][t], a += [u, s, s, u, 0, 0][t], o += [0, 0, u, s, s, u][t], Me(i, a, o, r)
  }, t.rgb2hsb = function (t, e, n)
  {
    n = we(t, e, n), t = n[0], e = n[1], n = n[2];
    var r, i, a, o;
    return a = q(t, e, n), o = a - R(t, e, n), r = 0 == o ? null : a == t ? (e - n) / o : a == e ? (n - t) / o + 2 : (t - e) / o + 4, r = 60 * ((r + 360) % 6) / 360, i = 0 == o ? 0 : o / a,
    {
      h: r,
      s: i,
      b: a,
      toString: xe
    }
  }, t.rgb2hsl = function (t, e, n)
  {
    n = we(t, e, n), t = n[0], e = n[1], n = n[2];
    var r, i, a, o, u, s;
    return o = q(t, e, n), u = R(t, e, n), s = o - u, r = 0 == s ? null : o == t ? (e - n) / s : o == e ? (n - t) / s + 2 : (t - e) / s + 4, r = 60 * ((r + 360) % 6) / 360, a = (o + u) / 2, i = 0 == s ? 0 : .5 > a ? s / (2 * a) : s / (2 - 2 * a),
    {
      h: r,
      s: i,
      l: a,
      toString: be
    }
  }, t._path2string = function ()
  {
    return this.join(",").replace(ie, "$1")
  }, t._preload = function (t, e)
  {
    var n = k.doc.createElement("img");
    n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function ()
    {
      e.call(this), this.onload = null, k.doc.body.removeChild(this)
    }, n.onerror = function ()
    {
      k.doc.body.removeChild(this)
    }, k.doc.body.appendChild(n), n.src = t
  }, t.getRGB = r(function (e)
  {
    if (!e || (e = L(e)).indexOf("-") + 1) return {
      r: -1,
      g: -1,
      b: -1,
      hex: "none",
      error: 1,
      toString: i
    };
    if ("none" == e) return {
      r: -1,
      g: -1,
      b: -1,
      hex: "none",
      toString: i
    };
    !(re[M](e.toLowerCase().substring(0, 2)) || "#" == e.charAt()) && (e = ye(e));
    var n, r, a, o, u, s, l = e.match(X);
    return l ? (l[2] && (a = K(l[2].substring(5), 16), r = K(l[2].substring(3, 5), 16), n = K(l[2].substring(1, 3), 16)), l[3] && (a = K((u = l[3].charAt(3)) + u, 16), r = K((u = l[3].charAt(2)) + u, 16), n = K((u = l[3].charAt(1)) + u, 16)), l[4] && (s = l[4][z](ne), n = J(s[0]), "%" == s[0].slice(-1) && (n *= 2.55), r = J(s[1]), "%" == s[1].slice(-1) && (r *= 2.55), a = J(s[2]), "%" == s[2].slice(-1) && (a *= 2.55), "rgba" == l[1].toLowerCase().slice(0, 4) && (o = J(s[3])), s[3] && "%" == s[3].slice(-1) && (o /= 100)), l[5] ? (s = l[5][z](ne), n = J(s[0]), "%" == s[0].slice(-1) && (n *= 2.55), r = J(s[1]), "%" == s[1].slice(-1) && (r *= 2.55), a = J(s[2]), "%" == s[2].slice(-1) && (a *= 2.55), ("deg" == s[0].slice(-3) || "°" == s[0].slice(-1)) && (n /= 360), "hsba" == l[1].toLowerCase().slice(0, 4) && (o = J(s[3])), s[3] && "%" == s[3].slice(-1) && (o /= 100), t.hsb2rgb(n, r, a, o)) : l[6] ? (s = l[6][z](ne), n = J(s[0]), "%" == s[0].slice(-1) && (n *= 2.55), r = J(s[1]), "%" == s[1].slice(-1) && (r *= 2.55), a = J(s[2]), "%" == s[2].slice(-1) && (a *= 2.55), ("deg" == s[0].slice(-3) || "°" == s[0].slice(-1)) && (n /= 360), "hsla" == l[1].toLowerCase().slice(0, 4) && (o = J(s[3])), s[3] && "%" == s[3].slice(-1) && (o /= 100), t.hsl2rgb(n, r, a, o)) : (l = {
      r: n,
      g: r,
      b: a,
      toString: i
    }, l.hex = "#" + (16777216 | a | r << 8 | n << 16).toString(16).slice(1), t.is(o, "finite") && (l.opacity = o), l)) :
    {
      r: -1,
      g: -1,
      b: -1,
      hex: "none",
      error: 1,
      toString: i
    }
  }, t), t.hsb = r(function (e, n, r)
  {
    return t.hsb2rgb(e, n, r).hex
  }), t.hsl = r(function (e, n, r)
  {
    return t.hsl2rgb(e, n, r).hex
  }), t.rgb = r(function (t, e, n)
  {
    return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
  }), t.getColor = function (t)
  {
    var e = this.getColor.start = this.getColor.start ||
    {
      h: 0,
      s: 1,
      b: t || .75
    }, n = this.hsb2rgb(e.h, e.s, e.b);
    return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, 0 >= e.s && (this.getColor.start = {
      h: 0,
      s: 1,
      b: e.b
    })), n.hex
  }, t.getColor.reset = function ()
  {
    delete this.start
  }, t.parsePathString = function (e)
  {
    if (!e) return null;
    var n = ke(e);
    if (n.arr) return Ne(n.arr);
    var r = {
      a: 7,
      c: 6,
      h: 1,
      l: 2,
      m: 2,
      r: 4,
      q: 4,
      s: 4,
      t: 2,
      v: 1,
      z: 0
    }, i = [];
    return t.is(e, Y) && t.is(e[0], Y) && (i = Ne(e)), i.length || L(e).replace(ae, function (t, e, n)
    {
      var a = [],
        o = e.toLowerCase();
      if (n.replace(ue, function (t, e)
      {
        e && a.push(+e)
      }), "m" == o && a.length > 2 && (i.push([e][C](a.splice(0, 2))), o = "l", e = "m" == e ? "l" : "L"), "r" == o) i.push([e][C](a));
      else
        for (; a.length >= r[o] && (i.push([e][C](a.splice(0, r[o]))), r[o]););
    }), i.toString = t._path2string, n.arr = Ne(i), i
  }, t.parseTransformString = r(function (e)
  {
    if (!e) return null;
    var n = [];
    return t.is(e, Y) && t.is(e[0], Y) && (n = Ne(e)), n.length || L(e).replace(oe, function (t, e, r)
    {
      var i = [];
      D.call(e), r.replace(ue, function (t, e)
      {
        e && i.push(+e)
      }), n.push([e][C](i))
    }), n.toString = t._path2string, n
  });
  var ke = function (t)
  {
    var e = ke.ps = ke.ps ||
    {};
    return e[t] ? e[t].sleep = 100 : e[t] = {
      sleep: 100
    }, setTimeout(function ()
    {
      for (var n in e) e[M](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
    }), e[t]
  };
  t.findDotsAtSegment = function (t, e, n, r, i, a, o, u, s)
  {
    var l = 1 - s,
      c = I(l, 3),
      f = I(l, 2),
      h = s * s,
      p = h * s,
      d = c * t + 3 * f * s * n + 3 * l * s * s * i + p * o,
      g = c * e + 3 * f * s * r + 3 * l * s * s * a + p * u,
      m = t + 2 * s * (n - t) + h * (i - 2 * n + t),
      v = e + 2 * s * (r - e) + h * (a - 2 * r + e),
      y = n + 2 * s * (i - n) + h * (o - 2 * i + n),
      x = r + 2 * s * (a - r) + h * (u - 2 * a + r),
      b = l * t + s * n,
      _ = l * e + s * r,
      w = l * i + s * o,
      M = l * a + s * u,
      k = 90 - 180 * F.atan2(m - y, v - x) / H;
    return (m > y || x > v) && (k += 180),
    {
      x: d,
      y: g,
      m:
      {
        x: m,
        y: v
      },
      n:
      {
        x: y,
        y: x
      },
      start:
      {
        x: b,
        y: _
      },
      end:
      {
        x: w,
        y: M
      },
      alpha: k
    }
  }, t.bezierBBox = function (e, n, r, i, a, o, u, s)
  {
    t.is(e, "array") || (e = [e, n, r, i, a, o, u, s]);
    var l = ze.apply(null, e);
    return {
      x: l.min.x,
      y: l.min.y,
      x2: l.max.x,
      y2: l.max.y,
      width: l.max.x - l.min.x,
      height: l.max.y - l.min.y
    }
  }, t.isPointInsideBBox = function (t, e, n)
  {
    return e >= t.x && t.x2 >= e && n >= t.y && t.y2 >= n
  }, t.isBBoxIntersect = function (e, n)
  {
    var r = t.isPointInsideBBox;
    return r(n, e.x, e.y) || r(n, e.x2, e.y) || r(n, e.x, e.y2) || r(n, e.x2, e.y2) || r(e, n.x, n.y) || r(e, n.x2, n.y) || r(e, n.x, n.y2) || r(e, n.x2, n.y2) || (e.x < n.x2 && e.x > n.x || n.x < e.x2 && n.x > e.x) && (e.y < n.y2 && e.y > n.y || n.y < e.y2 && n.y > e.y)
  }, t.pathIntersection = function (t, e)
  {
    return f(t, e)
  }, t.pathIntersectionNumber = function (t, e)
  {
    return f(t, e, 1)
  }, t.isPointInsidePath = function (e, n, r)
  {
    var i = t.pathBBox(e);
    return t.isPointInsideBBox(i, n, r) && 1 == f(e, [
      ["M", n, r],
      ["H", i.x2 + 10]
    ], 1) % 2
  }, t._removedFactory = function (t)
  {
    return function ()
    {
      eve("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t)
    }
  };
  var Se = t.pathBBox = function (t)
  {
    var n = ke(t);
    if (n.bbox) return n.bbox;
    if (!t) return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      x2: 0,
      y2: 0
    };
    t = Pe(t);
    for (var r, i = 0, a = 0, o = [], u = [], s = 0, l = t.length; l > s; s++)
      if (r = t[s], "M" == r[0]) i = r[1], a = r[2], o.push(i), u.push(a);
      else
      {
        var c = ze(i, a, r[1], r[2], r[3], r[4], r[5], r[6]);
        o = o[C](c.min.x, c.max.x), u = u[C](c.min.y, c.max.y), i = r[5], a = r[6]
      }
    var f = R[A](0, o),
      h = R[A](0, u),
      p = q[A](0, o),
      d = q[A](0, u),
      g = {
        x: f,
        y: h,
        x2: p,
        y2: d,
        width: p - f,
        height: d - h
      };
    return n.bbox = e(g), g
  }, Ne = function (n)
    {
      var r = e(n);
      return r.toString = t._path2string, r
    }, Ae = t._pathToRelative = function (e)
    {
      var n = ke(e);
      if (n.rel) return Ne(n.rel);
      t.is(e, Y) && t.is(e && e[0], Y) || (e = t.parsePathString(e));
      var r = [],
        i = 0,
        a = 0,
        o = 0,
        u = 0,
        s = 0;
      "M" == e[0][0] && (i = e[0][1], a = e[0][2], o = i, u = a, s++, r.push(["M", i, a]));
      for (var l = s, c = e.length; c > l; l++)
      {
        var f = r[l] = [],
          h = e[l];
        if (h[0] != D.call(h[0])) switch (f[0] = D.call(h[0]), f[0])
        {
        case "a":
          f[1] = h[1], f[2] = h[2], f[3] = h[3], f[4] = h[4], f[5] = h[5], f[6] = +(h[6] - i).toFixed(3), f[7] = +(h[7] - a).toFixed(3);
          break;
        case "v":
          f[1] = +(h[1] - a).toFixed(3);
          break;
        case "m":
          o = h[1], u = h[2];
        default:
          for (var p = 1, d = h.length; d > p; p++) f[p] = +(h[p] - (p % 2 ? i : a)).toFixed(3)
        }
        else
        {
          f = r[l] = [], "m" == h[0] && (o = h[1] + i, u = h[2] + a);
          for (var g = 0, m = h.length; m > g; g++) r[l][g] = h[g]
        }
        var v = r[l].length;
        switch (r[l][0])
        {
        case "z":
          i = o, a = u;
          break;
        case "h":
          i += +r[l][v - 1];
          break;
        case "v":
          a += +r[l][v - 1];
          break;
        default:
          i += +r[l][v - 2], a += +r[l][v - 1]
        }
      }
      return r.toString = t._path2string, n.rel = Ne(r), r
    }, Ce = t._pathToAbsolute = function (e)
    {
      var n = ke(e);
      if (n.abs) return Ne(n.abs);
      if (t.is(e, Y) && t.is(e && e[0], Y) || (e = t.parsePathString(e)), !e || !e.length) return [["M", 0, 0]];
      var r = [],
        i = 0,
        o = 0,
        u = 0,
        s = 0,
        l = 0;
      "M" == e[0][0] && (i = +e[0][1], o = +e[0][2], u = i, s = o, l++, r[0] = ["M", i, o]);
      for (var c, f, h = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), p = l, d = e.length; d > p; p++)
      {
        if (r.push(c = []), f = e[p], f[0] != Q.call(f[0])) switch (c[0] = Q.call(f[0]), c[0])
        {
        case "A":
          c[1] = f[1], c[2] = f[2], c[3] = f[3], c[4] = f[4], c[5] = f[5], c[6] = +(f[6] + i), c[7] = +(f[7] + o);
          break;
        case "V":
          c[1] = +f[1] + o;
          break;
        case "H":
          c[1] = +f[1] + i;
          break;
        case "R":
          for (var g = [i, o][C](f.slice(1)), m = 2, v = g.length; v > m; m++) g[m] = +g[m] + i, g[++m] = +g[m] + o;
          r.pop(), r = r[C](a(g, h));
          break;
        case "M":
          u = +f[1] + i, s = +f[2] + o;
        default:
          for (m = 1, v = f.length; v > m; m++) c[m] = +f[m] + (m % 2 ? i : o)
        }
        else if ("R" == f[0]) g = [i, o][C](f.slice(1)), r.pop(), r = r[C](a(g, h)), c = ["R"][C](f.slice(-2));
        else
          for (var y = 0, x = f.length; x > y; y++) c[y] = f[y];
        switch (c[0])
        {
        case "Z":
          i = u, o = s;
          break;
        case "H":
          i = c[1];
          break;
        case "V":
          o = c[1];
          break;
        case "M":
          u = c[c.length - 2], s = c[c.length - 1];
        default:
          i = c[c.length - 2], o = c[c.length - 1]
        }
      }
      return r.toString = t._path2string, n.abs = Ne(r), r
    }, Ee = function (t, e, n, r)
    {
      return [t, e, n, r, n, r]
    }, Te = function (t, e, n, r, i, a)
    {
      var o = 1 / 3,
        u = 2 / 3;
      return [o * t + u * n, o * e + u * r, o * i + u * n, o * a + u * r, i, a]
    }, Be = function (t, e, n, i, a, o, u, s, l, c)
    {
      var f, h = 120 * H / 180,
        p = H / 180 * (+a || 0),
        d = [],
        g = r(function (t, e, n)
        {
          var r = t * F.cos(n) - e * F.sin(n),
            i = t * F.sin(n) + e * F.cos(n);
          return {
            x: r,
            y: i
          }
        });
      if (c) k = c[0], S = c[1], w = c[2], M = c[3];
      else
      {
        f = g(t, e, -p), t = f.x, e = f.y, f = g(s, l, -p), s = f.x, l = f.y;
        var m = (F.cos(H / 180 * a), F.sin(H / 180 * a), (t - s) / 2),
          v = (e - l) / 2,
          y = m * m / (n * n) + v * v / (i * i);
        y > 1 && (y = F.sqrt(y), n = y * n, i = y * i);
        var x = n * n,
          b = i * i,
          _ = (o == u ? -1 : 1) * F.sqrt(O((x * b - x * v * v - b * m * m) / (x * v * v + b * m * m))),
          w = _ * n * v / i + (t + s) / 2,
          M = _ * -i * m / n + (e + l) / 2,
          k = F.asin(((e - M) / i).toFixed(9)),
          S = F.asin(((l - M) / i).toFixed(9));
        k = w > t ? H - k : k, S = w > s ? H - S : S, 0 > k && (k = 2 * H + k), 0 > S && (S = 2 * H + S), u && k > S && (k -= 2 * H), !u && S > k && (S -= 2 * H)
      }
      var N = S - k;
      if (O(N) > h)
      {
        var A = S,
          E = s,
          T = l;
        S = k + h * (u && S > k ? 1 : -1), s = w + n * F.cos(S), l = M + i * F.sin(S), d = Be(s, l, n, i, a, 0, u, E, T, [S, A, w, M])
      }
      N = S - k;
      var B = F.cos(k),
        L = F.sin(k),
        P = F.cos(S),
        j = F.sin(S),
        D = F.tan(N / 4),
        q = 4 / 3 * n * D,
        R = 4 / 3 * i * D,
        I = [t, e],
        U = [t + q * L, e - R * B],
        V = [s + q * j, l - R * P],
        Y = [s, l];
      if (U[0] = 2 * I[0] - U[0], U[1] = 2 * I[1] - U[1], c) return [U, V, Y][C](d);
      d = [U, V, Y][C](d).join()[z](",");
      for (var G = [], X = 0, $ = d.length; $ > X; X++) G[X] = X % 2 ? g(d[X - 1], d[X], p).y : g(d[X], d[X + 1], p).x;
      return G
    }, Le = function (t, e, n, r, i, a, o, u, s)
    {
      var l = 1 - s;
      return {
        x: I(l, 3) * t + 3 * I(l, 2) * s * n + 3 * l * s * s * i + I(s, 3) * o,
        y: I(l, 3) * e + 3 * I(l, 2) * s * r + 3 * l * s * s * a + I(s, 3) * u
      }
    }, ze = r(function (t, e, n, r, i, a, o, u)
    {
      var s, l = i - 2 * n + t - (o - 2 * i + n),
        c = 2 * (n - t) - 2 * (i - n),
        f = t - n,
        h = (-c + F.sqrt(c * c - 4 * l * f)) / 2 / l,
        p = (-c - F.sqrt(c * c - 4 * l * f)) / 2 / l,
        d = [e, u],
        g = [t, o];
      return O(h) > "1e12" && (h = .5), O(p) > "1e12" && (p = .5), h > 0 && 1 > h && (s = Le(t, e, n, r, i, a, o, u, h), g.push(s.x), d.push(s.y)), p > 0 && 1 > p && (s = Le(t, e, n, r, i, a, o, u, p), g.push(s.x), d.push(s.y)), l = a - 2 * r + e - (u - 2 * a + r), c = 2 * (r - e) - 2 * (a - r), f = e - r, h = (-c + F.sqrt(c * c - 4 * l * f)) / 2 / l, p = (-c - F.sqrt(c * c - 4 * l * f)) / 2 / l, O(h) > "1e12" && (h = .5), O(p) > "1e12" && (p = .5), h > 0 && 1 > h && (s = Le(t, e, n, r, i, a, o, u, h), g.push(s.x), d.push(s.y)), p > 0 && 1 > p && (s = Le(t, e, n, r, i, a, o, u, p), g.push(s.x), d.push(s.y)),
      {
        min:
        {
          x: R[A](0, g),
          y: R[A](0, d)
        },
        max:
        {
          x: q[A](0, g),
          y: q[A](0, d)
        }
      }
    }),
    Pe = t._path2curve = r(function (t, e)
    {
      var n = !e && ke(t);
      if (!e && n.curve) return Ne(n.curve);
      for (var r = Ce(t), i = e && Ce(e), a = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, o = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, u = (function (t, e)
        {
          var n, r;
          if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
          switch (!(t[0] in
          {
            T: 1,
            Q: 1
          }) && (e.qx = e.qy = null), t[0])
          {
          case "M":
            e.X = t[1], e.Y = t[2];
            break;
          case "A":
            t = ["C"][C](Be[A](0, [e.x, e.y][C](t.slice(1))));
            break;
          case "S":
            n = e.x + (e.x - (e.bx || e.x)), r = e.y + (e.y - (e.by || e.y)), t = ["C", n, r][C](t.slice(1));
            break;
          case "T":
            e.qx = e.x + (e.x - (e.qx || e.x)), e.qy = e.y + (e.y - (e.qy || e.y)), t = ["C"][C](Te(e.x, e.y, e.qx, e.qy, t[1], t[2]));
            break;
          case "Q":
            e.qx = t[1], e.qy = t[2], t = ["C"][C](Te(e.x, e.y, t[1], t[2], t[3], t[4]));
            break;
          case "L":
            t = ["C"][C](Ee(e.x, e.y, t[1], t[2]));
            break;
          case "H":
            t = ["C"][C](Ee(e.x, e.y, t[1], e.y));
            break;
          case "V":
            t = ["C"][C](Ee(e.x, e.y, e.x, t[1]));
            break;
          case "Z":
            t = ["C"][C](Ee(e.x, e.y, e.X, e.Y))
          }
          return t
        }), s = function (t, e)
        {
          if (t[e].length > 7)
          {
            t[e].shift();
            for (var n = t[e]; n.length;) t.splice(e++, 0, ["C"][C](n.splice(0, 6)));
            t.splice(e, 1), f = q(r.length, i && i.length || 0)
          }
        }, l = function (t, e, n, a, o)
        {
          t && e && "M" == t[o][0] && "M" != e[o][0] && (e.splice(o, 0, ["M", a.x, a.y]), n.bx = 0, n.by = 0, n.x = t[o][1], n.y = t[o][2], f = q(r.length, i && i.length || 0))
        }, c = 0, f = q(r.length, i && i.length || 0); f > c; c++)
      {
        r[c] = u(r[c], a), s(r, c), i && (i[c] = u(i[c], o)), i && s(i, c), l(r, i, a, o, c), l(i, r, o, a, c);
        var h = r[c],
          p = i && i[c],
          d = h.length,
          g = i && p.length;
        a.x = h[d - 2], a.y = h[d - 1], a.bx = J(h[d - 4]) || a.x, a.by = J(h[d - 3]) || a.y, o.bx = i && (J(p[g - 4]) || o.x), o.by = i && (J(p[g - 3]) || o.y), o.x = i && p[g - 2], o.y = i && p[g - 1]
      }
      return i || (n.curve = Ne(r)), i ? [r, i] : r
    }, null, Ne),
    je = (t._parseDots = r(function (e)
    {
      for (var n = [], r = 0, i = e.length; i > r; r++)
      {
        var a = {}, o = e[r].match(/^([^:]*):?([\d\.]*)/);
        if (a.color = t.getRGB(o[1]), a.color.error) return null;
        a.color = a.color.hex, o[2] && (a.offset = o[2] + "%"), n.push(a)
      }
      for (r = 1, i = n.length - 1; i > r; r++)
        if (!n[r].offset)
        {
          for (var u = J(n[r - 1].offset || 0), s = 0, l = r + 1; i > l; l++)
            if (n[l].offset)
            {
              s = n[l].offset;
              break
            }
          s || (s = 100, l = i), s = J(s);
          for (var c = (s - u) / (l - r + 1); l > r; r++) u += c, n[r].offset = u + "%"
        }
      return n
    }), t._tear = function (t, e)
    {
      t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
    }),
    De = (t._tofront = function (t, e)
    {
      e.top !== t && (je(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
    }, t._toback = function (t, e)
    {
      e.bottom !== t && (je(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
    }, t._insertafter = function (t, e, n)
    {
      je(t, n), e == n.top && (n.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
    }, t._insertbefore = function (t, e, n)
    {
      je(t, n), e == n.bottom && (n.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
    }, t.toMatrix = function (t, e)
    {
      var n = Se(t),
        r = {
          _:
          {
            transform: T
          },
          getBBox: function ()
          {
            return n
          }
        };
      return Fe(r, e), r.matrix
    }),
    Fe = (t.transformPath = function (t, e)
    {
      return ge(t, De(t, e))
    }, t._extractTransform = function (e, n)
    {
      if (null == n) return e._.transform;
      n = L(n).replace(/\.{3}|\u2026/g, e._.transform || T);
      var r = t.parseTransformString(n),
        i = 0,
        a = 0,
        o = 0,
        u = 1,
        s = 1,
        l = e._,
        c = new h;
      if (l.transform = r || [], r)
        for (var f = 0, p = r.length; p > f; f++)
        {
          var d, g, m, v, y, x = r[f],
            b = x.length,
            _ = L(x[0]).toLowerCase(),
            w = x[0] != _,
            M = w ? c.invert() : 0;
          "t" == _ && 3 == b ? w ? (d = M.x(0, 0), g = M.y(0, 0), m = M.x(x[1], x[2]), v = M.y(x[1], x[2]), c.translate(m - d, v - g)) : c.translate(x[1], x[2]) : "r" == _ ? 2 == b ? (y = y || e.getBBox(1), c.rotate(x[1], y.x + y.width / 2, y.y + y.height / 2), i += x[1]) : 4 == b && (w ? (m = M.x(x[2], x[3]), v = M.y(x[2], x[3]), c.rotate(x[1], m, v)) : c.rotate(x[1], x[2], x[3]), i += x[1]) : "s" == _ ? 2 == b || 3 == b ? (y = y || e.getBBox(1), c.scale(x[1], x[b - 1], y.x + y.width / 2, y.y + y.height / 2), u *= x[1], s *= x[b - 1]) : 5 == b && (w ? (m = M.x(x[3], x[4]), v = M.y(x[3], x[4]), c.scale(x[1], x[2], m, v)) : c.scale(x[1], x[2], x[3], x[4]), u *= x[1], s *= x[2]) : "m" == _ && 7 == b && c.add(x[1], x[2], x[3], x[4], x[5], x[6]), l.dirtyT = 1, e.matrix = c
        }
      e.matrix = c, l.sx = u, l.sy = s, l.deg = i, l.dx = a = c.e, l.dy = o = c.f, 1 == u && 1 == s && !i && l.bbox ? (l.bbox.x += +a, l.bbox.y += +o) : l.dirtyT = 1
    }),
    qe = function (t)
    {
      var e = t[0];
      switch (e.toLowerCase())
      {
      case "t":
        return [e, 0, 0];
      case "m":
        return [e, 1, 0, 0, 1, 0, 0];
      case "r":
        return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
      case "s":
        return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
      }
    }, Re = t._equaliseTransform = function (e, n)
    {
      n = L(n).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], n = t.parseTransformString(n) || [];
      for (var r, i, a, o, u = q(e.length, n.length), s = [], l = [], c = 0; u > c; c++)
      {
        if (a = e[c] || qe(n[c]), o = n[c] || qe(a), a[0] != o[0] || "r" == a[0].toLowerCase() && (a[2] != o[2] || a[3] != o[3]) || "s" == a[0].toLowerCase() && (a[3] != o[3] || a[4] != o[4])) return;
        for (s[c] = [], l[c] = [], r = 0, i = q(a.length, o.length); i > r; r++) r in a && (s[c][r] = a[r]), r in o && (l[c][r] = o[r])
      }
      return {
        from: s,
        to: l
      }
    };
  t._getContainer = function (e, n, r, i)
  {
    var a;
    return a = null != i || t.is(e, "object") ? e : k.doc.getElementById(e), null != a ? a.tagName ? null == n ?
    {
      container: a,
      width: a.style.pixelWidth || a.offsetWidth,
      height: a.style.pixelHeight || a.offsetHeight
    } :
    {
      container: a,
      width: n,
      height: r
    } :
    {
      container: 1,
      x: e,
      y: n,
      width: r,
      height: i
    } : void 0
  }, t.pathToRelative = Ae, t._engine = {}, t.path2curve = Pe, t.matrix = function (t, e, n, r, i, a)
  {
    return new h(t, e, n, r, i, a)
  },
  function (e)
  {
    function n(t)
    {
      return t[0] * t[0] + t[1] * t[1]
    }

    function r(t)
    {
      var e = F.sqrt(n(t));
      t[0] && (t[0] /= e), t[1] && (t[1] /= e)
    }
    e.add = function (t, e, n, r, i, a)
    {
      var o, u, s, l, c = [
          [],
          [],
          []
        ],
        f = [
          [this.a, this.c, this.e],
          [this.b, this.d, this.f],
          [0, 0, 1]
        ],
        p = [
          [t, n, i],
          [e, r, a],
          [0, 0, 1]
        ];
      for (t && t instanceof h && (p = [
        [t.a, t.c, t.e],
        [t.b, t.d, t.f],
        [0, 0, 1]
      ]), o = 0; 3 > o; o++)
        for (u = 0; 3 > u; u++)
        {
          for (l = 0, s = 0; 3 > s; s++) l += f[o][s] * p[s][u];
          c[o][u] = l
        }
      this.a = c[0][0], this.b = c[1][0], this.c = c[0][1], this.d = c[1][1], this.e = c[0][2], this.f = c[1][2]
    }, e.invert = function ()
    {
      var t = this,
        e = t.a * t.d - t.b * t.c;
      return new h(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
    }, e.clone = function ()
    {
      return new h(this.a, this.b, this.c, this.d, this.e, this.f)
    }, e.translate = function (t, e)
    {
      this.add(1, 0, 0, 1, t, e)
    }, e.scale = function (t, e, n, r)
    {
      null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r)
    }, e.rotate = function (e, n, r)
    {
      e = t.rad(e), n = n || 0, r = r || 0;
      var i = +F.cos(e).toFixed(9),
        a = +F.sin(e).toFixed(9);
      this.add(i, a, -a, i, n, r), this.add(1, 0, 0, 1, -n, -r)
    }, e.x = function (t, e)
    {
      return t * this.a + e * this.c + this.e
    }, e.y = function (t, e)
    {
      return t * this.b + e * this.d + this.f
    }, e.get = function (t)
    {
      return +this[L.fromCharCode(97 + t)].toFixed(4)
    }, e.toString = function ()
    {
      return t.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
    }, e.toFilter = function ()
    {
      return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
    }, e.offset = function ()
    {
      return [this.e.toFixed(4), this.f.toFixed(4)]
    }, e.split = function ()
    {
      var e = {};
      e.dx = this.e, e.dy = this.f;
      var i = [
        [this.a, this.c],
        [this.b, this.d]
      ];
      e.scalex = F.sqrt(n(i[0])), r(i[0]), e.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1], i[1] = [i[1][0] - i[0][0] * e.shear, i[1][1] - i[0][1] * e.shear], e.scaley = F.sqrt(n(i[1])), r(i[1]), e.shear /= e.scaley;
      var a = -i[0][1],
        o = i[1][1];
      return 0 > o ? (e.rotate = t.deg(F.acos(o)), 0 > a && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(F.asin(a)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
    }, e.toTransformString = function (t)
    {
      var e = t || this[z]();
      return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : T) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : T) + (e.rotate ? "r" + [e.rotate, 0, 0] : T)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
    }
  }(h.prototype);
  var Oe = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
  x.safari = "Apple Computer, Inc." == navigator.vendor && (Oe && 4 > Oe[1] || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Oe && 8 > Oe[1] ? function ()
  {
    var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr(
    {
      stroke: "none"
    });
    setTimeout(function ()
    {
      t.remove()
    })
  } : ce;
  for (var Ie = function ()
  {
    this.returnValue = !1
  }, He = function ()
    {
      return this.originalEvent.preventDefault()
    }, Ue = function ()
    {
      this.cancelBubble = !0
    }, Ve = function ()
    {
      return this.originalEvent.stopPropagation()
    }, Ye = function ()
    {
      return k.doc.addEventListener ? function (t, e, n, r)
      {
        var i = E && j[e] ? j[e] : e,
          a = function (i)
          {
            var a = k.doc.documentElement.scrollTop || k.doc.body.scrollTop,
              o = k.doc.documentElement.scrollLeft || k.doc.body.scrollLeft,
              u = i.clientX + o,
              s = i.clientY + a;
            if (E && j[M](e))
              for (var l = 0, c = i.targetTouches && i.targetTouches.length; c > l; l++)
                if (i.targetTouches[l].target == t)
                {
                  var f = i;
                  i = i.targetTouches[l], i.originalEvent = f, i.preventDefault = He, i.stopPropagation = Ve;
                  break
                }
            return n.call(r, i, u, s)
          };
        return t.addEventListener(i, a, !1),
        function ()
        {
          return t.removeEventListener(i, a, !1), !0
        }
      } : k.doc.attachEvent ? function (t, e, n, r)
      {
        var i = function (t)
        {
          t = t || k.win.event;
          var e = k.doc.documentElement.scrollTop || k.doc.body.scrollTop,
            i = k.doc.documentElement.scrollLeft || k.doc.body.scrollLeft,
            a = t.clientX + i,
            o = t.clientY + e;
          return t.preventDefault = t.preventDefault || Ie, t.stopPropagation = t.stopPropagation || Ue, n.call(r, t, a, o)
        };
        t.attachEvent("on" + e, i);
        var a = function ()
        {
          return t.detachEvent("on" + e, i), !0
        };
        return a
      } : void 0
    }(), Ge = [], Xe = function (t)
    {
      for (var e, n = t.clientX, r = t.clientY, i = k.doc.documentElement.scrollTop || k.doc.body.scrollTop, a = k.doc.documentElement.scrollLeft || k.doc.body.scrollLeft, o = Ge.length; o--;)
      {
        if (e = Ge[o], E)
        {
          for (var u, s = t.touches.length; s--;)
            if (u = t.touches[s], u.identifier == e.el._drag.id)
            {
              n = u.clientX, r = u.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
              break
            }
        }
        else t.preventDefault();
        var l, c = e.el.node,
          f = c.nextSibling,
          h = c.parentNode,
          p = c.style.display;
        k.win.opera && h.removeChild(c), c.style.display = "none", l = e.el.paper.getElementByPoint(n, r), c.style.display = p, k.win.opera && (f ? h.insertBefore(c, f) : h.appendChild(c)), l && eve("raphael.drag.over." + e.el.id, e.el, l), n += a, r += i, eve("raphael.drag.move." + e.el.id, e.move_scope || e.el, n - e.el._drag.x, r - e.el._drag.y, n, r, t)
      }
    }, $e = function (e)
    {
      t.unmousemove(Xe).unmouseup($e);
      for (var n, r = Ge.length; r--;) n = Ge[r], n.el._drag = {}, eve("raphael.drag.end." + n.el.id, n.end_scope || n.start_scope || n.move_scope || n.el, e);
      Ge = []
    }, Ze = t.el = {}, We = P.length; We--;)(function (e)
  {
    t[e] = Ze[e] = function (n, r)
    {
      return t.is(n, "function") && (this.events = this.events || [], this.events.push(
      {
        name: e,
        f: n,
        unbind: Ye(this.shape || this.node || k.doc, e, n, r || this)
      })), this
    }, t["un" + e] = Ze["un" + e] = function (t)
    {
      for (var n = this.events || [], r = n.length; r--;)
        if (n[r].name == e && n[r].f == t) return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
      return this
    }
  })(P[We]);
  Ze.data = function (e, n)
  {
    var r = se[this.id] = se[this.id] ||
    {};
    if (1 == arguments.length)
    {
      if (t.is(e, "object"))
      {
        for (var i in e) e[M](i) && this.data(i, e[i]);
        return this
      }
      return eve("raphael.data.get." + this.id, this, r[e], e), r[e]
    }
    return r[e] = n, eve("raphael.data.set." + this.id, this, n, e), this
  }, Ze.removeData = function (t)
  {
    return null == t ? se[this.id] = {} : se[this.id] && delete se[this.id][t], this
  }, Ze.hover = function (t, e, n, r)
  {
    return this.mouseover(t, n).mouseout(e, r || n)
  }, Ze.unhover = function (t, e)
  {
    return this.unmouseover(t).unmouseout(e)
  };
  var Je = [];
  Ze.drag = function (e, n, r, i, a, o)
  {
    function u(u)
    {
      (u.originalEvent || u).preventDefault();
      var s = k.doc.documentElement.scrollTop || k.doc.body.scrollTop,
        l = k.doc.documentElement.scrollLeft || k.doc.body.scrollLeft;
      this._drag.x = u.clientX + l, this._drag.y = u.clientY + s, this._drag.id = u.identifier, !Ge.length && t.mousemove(Xe).mouseup($e), Ge.push(
      {
        el: this,
        move_scope: i,
        start_scope: a,
        end_scope: o
      }), n && eve.on("raphael.drag.start." + this.id, n), e && eve.on("raphael.drag.move." + this.id, e), r && eve.on("raphael.drag.end." + this.id, r), eve("raphael.drag.start." + this.id, a || i || this, u.clientX + l, u.clientY + s, u)
    }
    return this._drag = {}, Je.push(
    {
      el: this,
      start: u
    }), this.mousedown(u), this
  }, Ze.onDragOver = function (t)
  {
    t ? eve.on("raphael.drag.over." + this.id, t) : eve.unbind("raphael.drag.over." + this.id)
  }, Ze.undrag = function ()
  {
    for (var e = Je.length; e--;) Je[e].el == this && (this.unmousedown(Je[e].start), Je.splice(e, 1), eve.unbind("raphael.drag.*." + this.id));
    !Je.length && t.unmousemove(Xe).unmouseup($e)
  }, x.circle = function (e, n, r)
  {
    var i = t._engine.circle(this, e || 0, n || 0, r || 0);
    return this.__set__ && this.__set__.push(i), i
  }, x.rect = function (e, n, r, i, a)
  {
    var o = t._engine.rect(this, e || 0, n || 0, r || 0, i || 0, a || 0);
    return this.__set__ && this.__set__.push(o), o
  }, x.ellipse = function (e, n, r, i)
  {
    var a = t._engine.ellipse(this, e || 0, n || 0, r || 0, i || 0);
    return this.__set__ && this.__set__.push(a), a
  }, x.path = function (e)
  {
    e && !t.is(e, V) && !t.is(e[0], Y) && (e += T);
    var n = t._engine.path(t.format[A](t, arguments), this);
    return this.__set__ && this.__set__.push(n), n
  }, x.image = function (e, n, r, i, a)
  {
    var o = t._engine.image(this, e || "about:blank", n || 0, r || 0, i || 0, a || 0);
    return this.__set__ && this.__set__.push(o), o
  }, x.text = function (e, n, r)
  {
    var i = t._engine.text(this, e || 0, n || 0, L(r));
    return this.__set__ && this.__set__.push(i), i
  }, x.set = function (e)
  {
    !t.is(e, "array") && (e = Array.prototype.splice.call(arguments, 0, arguments.length));
    var n = new cn(e);
    return this.__set__ && this.__set__.push(n), n
  }, x.setStart = function (t)
  {
    this.__set__ = t || this.set()
  }, x.setFinish = function ()
  {
    var t = this.__set__;
    return delete this.__set__, t
  }, x.setSize = function (e, n)
  {
    return t._engine.setSize.call(this, e, n)
  }, x.setViewBox = function (e, n, r, i, a)
  {
    return t._engine.setViewBox.call(this, e, n, r, i, a)
  }, x.top = x.bottom = null, x.raphael = t;
  var Ke = function (t)
  {
    var e = t.getBoundingClientRect(),
      n = t.ownerDocument,
      r = n.body,
      i = n.documentElement,
      a = i.clientTop || r.clientTop || 0,
      o = i.clientLeft || r.clientLeft || 0,
      u = e.top + (k.win.pageYOffset || i.scrollTop || r.scrollTop) - a,
      s = e.left + (k.win.pageXOffset || i.scrollLeft || r.scrollLeft) - o;
    return {
      y: u,
      x: s
    }
  };
  x.getElementByPoint = function (t, e)
  {
    var n = this,
      r = n.canvas,
      i = k.doc.elementFromPoint(t, e);
    if (k.win.opera && "svg" == i.tagName)
    {
      var a = Ke(r),
        o = r.createSVGRect();
      o.x = t - a.x, o.y = e - a.y, o.width = o.height = 1;
      var u = r.getIntersectionList(o, null);
      u.length && (i = u[u.length - 1])
    }
    if (!i) return null;
    for (; i.parentNode && i != r.parentNode && !i.raphael;) i = i.parentNode;
    return i == n.canvas.parentNode && (i = r), i = i && i.raphael ? n.getById(i.raphaelid) : null
  }, x.getById = function (t)
  {
    for (var e = this.bottom; e;)
    {
      if (e.id == t) return e;
      e = e.next
    }
    return null
  }, x.forEach = function (t, e)
  {
    for (var n = this.bottom; n;)
    {
      if (t.call(e, n) === !1) return this;
      n = n.next
    }
    return this
  }, x.getElementsByPoint = function (t, e)
  {
    var n = this.set();
    return this.forEach(function (r)
    {
      r.isPointInside(t, e) && n.push(r)
    }), n
  }, Ze.isPointInside = function (e, n)
  {
    var r = this.realPath = this.realPath || de[this.type](this);
    return t.isPointInsidePath(r, e, n)
  }, Ze.getBBox = function (t)
  {
    if (this.removed) return {};
    var e = this._;
    return t ? ((e.dirty || !e.bboxwt) && (this.realPath = de[this.type](this), e.bboxwt = Se(this.realPath), e.bboxwt.toString = p, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && ((e.dirty || !this.realPath) && (e.bboxwt = 0, this.realPath = de[this.type](this)), e.bbox = Se(ge(this.realPath, this.matrix)), e.bbox.toString = p, e.dirty = e.dirtyT = 0), e.bbox)
  }, Ze.clone = function ()
  {
    if (this.removed) return null;
    var t = this.paper[this.type]().attr(this.attr());
    return this.__set__ && this.__set__.push(t), t
  }, Ze.glow = function (t)
  {
    if ("text" == this.type) return null;
    t = t ||
    {};
    var e = {
      width: (t.width || 10) + (+this.attr("stroke-width") || 1),
      fill: t.fill || !1,
      opacity: t.opacity || .5,
      offsetx: t.offsetx || 0,
      offsety: t.offsety || 0,
      color: t.color || "#000"
    }, n = e.width / 2,
      r = this.paper,
      i = r.set(),
      a = this.realPath || de[this.type](this);
    a = this.matrix ? ge(a, this.matrix) : a;
    for (var o = 1; n + 1 > o; o++) i.push(r.path(a).attr(
    {
      stroke: e.color,
      fill: e.fill ? e.color : "none",
      "stroke-linejoin": "round",
      "stroke-linecap": "round",
      "stroke-width": +(e.width / n * o).toFixed(3),
      opacity: +(e.opacity / n).toFixed(3)
    }));
    return i.insertBefore(this).translate(e.offsetx, e.offsety)
  };
  var Qe = function (e, n, r, i, a, o, l, c, f)
  {
    return null == f ? u(e, n, r, i, a, o, l, c) : t.findDotsAtSegment(e, n, r, i, a, o, l, c, s(e, n, r, i, a, o, l, c, f))
  }, tn = function (e, n)
    {
      return function (r, i, a)
      {
        r = Pe(r);
        for (var o, u, s, l, c, f = "", h = {}, p = 0, d = 0, g = r.length; g > d; d++)
        {
          if (s = r[d], "M" == s[0]) o = +s[1], u = +s[2];
          else
          {
            if (l = Qe(o, u, s[1], s[2], s[3], s[4], s[5], s[6]), p + l > i)
            {
              if (n && !h.start)
              {
                if (c = Qe(o, u, s[1], s[2], s[3], s[4], s[5], s[6], i - p), f += ["C" + c.start.x, c.start.y, c.m.x, c.m.y, c.x, c.y], a) return f;
                h.start = f, f = ["M" + c.x, c.y + "C" + c.n.x, c.n.y, c.end.x, c.end.y, s[5], s[6]].join(), p += l, o = +s[5], u = +s[6];
                continue
              }
              if (!e && !n) return c = Qe(o, u, s[1], s[2], s[3], s[4], s[5], s[6], i - p),
              {
                x: c.x,
                y: c.y,
                alpha: c.alpha
              }
            }
            p += l, o = +s[5], u = +s[6]
          }
          f += s.shift() + s
        }
        return h.end = f, c = e ? p : n ? h : t.findDotsAtSegment(o, u, s[0], s[1], s[2], s[3], s[4], s[5], 1), c.alpha && (c = {
          x: c.x,
          y: c.y,
          alpha: c.alpha
        }), c
      }
    }, en = tn(1),
    nn = tn(),
    rn = tn(0, 1);
  t.getTotalLength = en, t.getPointAtLength = nn, t.getSubpath = function (t, e, n)
  {
    if (1e-6 > this.getTotalLength(t) - n) return rn(t, e).end;
    var r = rn(t, n, 1);
    return e ? rn(r, e).end : r
  }, Ze.getTotalLength = function ()
  {
    return "path" == this.type ? this.node.getTotalLength ? this.node.getTotalLength() : en(this.attrs.path) : void 0
  }, Ze.getPointAtLength = function (t)
  {
    return "path" == this.type ? nn(this.attrs.path, t) : void 0
  }, Ze.getSubpath = function (e, n)
  {
    return "path" == this.type ? t.getSubpath(this.attrs.path, e, n) : void 0
  };
  var an = t.easing_formulas = {
    linear: function (t)
    {
      return t
    },
    "<": function (t)
    {
      return I(t, 1.7)
    },
    ">": function (t)
    {
      return I(t, .48)
    },
    "<>": function (t)
    {
      var e = .48 - t / 1.04,
        n = F.sqrt(.1734 + e * e),
        r = n - e,
        i = I(O(r), 1 / 3) * (0 > r ? -1 : 1),
        a = -n - e,
        o = I(O(a), 1 / 3) * (0 > a ? -1 : 1),
        u = i + o + .5;
      return 3 * (1 - u) * u * u + u * u * u
    },
    backIn: function (t)
    {
      var e = 1.70158;
      return t * t * ((e + 1) * t - e)
    },
    backOut: function (t)
    {
      t -= 1;
      var e = 1.70158;
      return t * t * ((e + 1) * t + e) + 1
    },
    elastic: function (t)
    {
      return t == !! t ? t : I(2, -10 * t) * F.sin(2 * (t - .075) * H / .3) + 1
    },
    bounce: function (t)
    {
      var e, n = 7.5625,
        r = 2.75;
      return 1 / r > t ? e = n * t * t : 2 / r > t ? (t -= 1.5 / r, e = n * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r, e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e
    }
  };
  an.easeIn = an["ease-in"] = an["<"], an.easeOut = an["ease-out"] = an[">"], an.easeInOut = an["ease-in-out"] = an["<>"], an["back-in"] = an.backIn, an["back-out"] = an.backOut;
  var on = [],
    un = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t)
    {
      setTimeout(t, 16)
    }, sn = function ()
    {
      for (var e = +new Date, n = 0; on.length > n; n++)
      {
        var r = on[n];
        if (!r.el.removed && !r.paused)
        {
          var i, a, o = e - r.start,
            u = r.ms,
            s = r.easing,
            l = r.from,
            c = r.diff,
            f = r.to,
            h = (r.t, r.el),
            p = {}, d = {};
          if (r.initstatus ? (o = (r.initstatus * r.anim.top - r.prev) / (r.percent - r.prev) * u, r.status = r.initstatus, delete r.initstatus, r.stop && on.splice(n--, 1)) : r.status = (r.prev + (r.percent - r.prev) * (o / u)) / r.anim.top, !(0 > o))
            if (u > o)
            {
              var g = s(o / u);
              for (var v in l)
                if (l[M](v))
                {
                  switch (ee[v])
                  {
                  case U:
                    i = +l[v] + g * u * c[v];
                    break;
                  case "colour":
                    i = "rgb(" + [ln(W(l[v].r + g * u * c[v].r)), ln(W(l[v].g + g * u * c[v].g)), ln(W(l[v].b + g * u * c[v].b))].join(",") + ")";
                    break;
                  case "path":
                    i = [];
                    for (var y = 0, x = l[v].length; x > y; y++)
                    {
                      i[y] = [l[v][y][0]];
                      for (var b = 1, _ = l[v][y].length; _ > b; b++) i[y][b] = +l[v][y][b] + g * u * c[v][y][b];
                      i[y] = i[y].join(B)
                    }
                    i = i.join(B);
                    break;
                  case "transform":
                    if (c[v].real)
                      for (i = [], y = 0, x = l[v].length; x > y; y++)
                        for (i[y] = [l[v][y][0]], b = 1, _ = l[v][y].length; _ > b; b++) i[y][b] = l[v][y][b] + g * u * c[v][y][b];
                    else
                    {
                      var w = function (t)
                      {
                        return +l[v][t] + g * u * c[v][t]
                      };
                      i = [
                        ["m", w(0), w(1), w(2), w(3), w(4), w(5)]
                      ]
                    }
                    break;
                  case "csv":
                    if ("clip-rect" == v)
                      for (i = [], y = 4; y--;) i[y] = +l[v][y] + g * u * c[v][y];
                    break;
                  default:
                    var k = [][C](l[v]);
                    for (i = [], y = h.paper.customAttributes[v].length; y--;) i[y] = +k[y] + g * u * c[v][y]
                  }
                  p[v] = i
                }
              h.attr(p),
              function (t, e, n)
              {
                setTimeout(function ()
                {
                  eve("raphael.anim.frame." + t, e, n)
                })
              }(h.id, h, r.anim)
            }
            else
            {
              if (function (e, n, r)
              {
                setTimeout(function ()
                {
                  eve("raphael.anim.frame." + n.id, n, r), eve("raphael.anim.finish." + n.id, n, r), t.is(e, "function") && e.call(n)
                })
              }(r.callback, h, r.anim), h.attr(f), on.splice(n--, 1), r.repeat > 1 && !r.next)
              {
                for (a in f) f[M](a) && (d[a] = r.totalOrigin[a]);
                r.el.attr(d), m(r.anim, r.el, r.anim.percents[0], null, r.totalOrigin, r.repeat - 1)
              }
              r.next && !r.stop && m(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat)
            }
        }
      }
      t.svg && h && h.paper && h.paper.safari(), on.length && un(sn)
    }, ln = function (t)
    {
      return t > 255 ? 255 : 0 > t ? 0 : t
    };
  Ze.animateWith = function (e, n, r, i, a, o)
  {
    var u = this;
    if (u.removed) return o && o.call(u), u;
    var s = r instanceof g ? r : t.animation(r, i, a, o);
    m(s, u, s.percents[0], null, u.attr());
    for (var l = 0, c = on.length; c > l; l++)
      if (on[l].anim == n && on[l].el == e)
      {
        on[c - 1].start = on[l].start;
        break
      }
    return u
  }, Ze.onAnimation = function (t)
  {
    return t ? eve.on("raphael.anim.frame." + this.id, t) : eve.unbind("raphael.anim.frame." + this.id), this
  }, g.prototype.delay = function (t)
  {
    var e = new g(this.anim, this.ms);
    return e.times = this.times, e.del = +t || 0, e
  }, g.prototype.repeat = function (t)
  {
    var e = new g(this.anim, this.ms);
    return e.del = this.del, e.times = F.floor(q(t, 0)) || 1, e
  }, t.animation = function (e, n, r, i)
  {
    if (e instanceof g) return e;
    (t.is(r, "function") || !r) && (i = i || r || null, r = null), e = Object(e), n = +n || 0;
    var a, o, u = {};
    for (o in e) e[M](o) && J(o) != o && J(o) + "%" != o && (a = !0, u[o] = e[o]);
    return a ? (r && (u.easing = r), i && (u.callback = i), new g(
    {
      100: u
    }, n)) : new g(e, n)
  }, Ze.animate = function (e, n, r, i)
  {
    var a = this;
    if (a.removed) return i && i.call(a), a;
    var o = e instanceof g ? e : t.animation(e, n, r, i);
    return m(o, a, o.percents[0], null, a.attr()), a
  }, Ze.setTime = function (t, e)
  {
    return t && null != e && this.status(t, R(e, t.ms) / t.ms), this
  }, Ze.status = function (t, e)
  {
    var n, r, i = [],
      a = 0;
    if (null != e) return m(t, this, -1, R(e, 1)), this;
    for (n = on.length; n > a; a++)
      if (r = on[a], r.el.id == this.id && (!t || r.anim == t))
      {
        if (t) return r.status;
        i.push(
        {
          anim: r.anim,
          status: r.status
        })
      }
    return t ? 0 : i
  }, Ze.pause = function (t)
  {
    for (var e = 0; on.length > e; e++) on[e].el.id != this.id || t && on[e].anim != t || eve("raphael.anim.pause." + this.id, this, on[e].anim) !== !1 && (on[e].paused = !0);
    return this
  }, Ze.resume = function (t)
  {
    for (var e = 0; on.length > e; e++)
      if (on[e].el.id == this.id && (!t || on[e].anim == t))
      {
        var n = on[e];
        eve("raphael.anim.resume." + this.id, this, n.anim) !== !1 && (delete n.paused, this.status(n.anim, n.status))
      }
    return this
  }, Ze.stop = function (t)
  {
    for (var e = 0; on.length > e; e++) on[e].el.id != this.id || t && on[e].anim != t || eve("raphael.anim.stop." + this.id, this, on[e].anim) !== !1 && on.splice(e--, 1);
    return this
  }, eve.on("raphael.remove", v), eve.on("raphael.clear", v), Ze.toString = function ()
  {
    return "Raphaël’s object"
  };
  var cn = function (t)
  {
    if (this.items = [], this.length = 0, this.type = "set", t)
      for (var e = 0, n = t.length; n > e; e++)!t[e] || t[e].constructor != Ze.constructor && t[e].constructor != cn || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
  }, fn = cn.prototype;
  fn.push = function ()
  {
    for (var t, e, n = 0, r = arguments.length; r > n; n++) t = arguments[n], !t || t.constructor != Ze.constructor && t.constructor != cn || (e = this.items.length, this[e] = this.items[e] = t, this.length++);
    return this
  }, fn.pop = function ()
  {
    return this.length && delete this[this.length--], this.items.pop()
  }, fn.forEach = function (t, e)
  {
    for (var n = 0, r = this.items.length; r > n; n++)
      if (t.call(e, this.items[n], n) === !1) return this;
    return this
  };
  for (var hn in Ze) Ze[M](hn) && (fn[hn] = function (t)
  {
    return function ()
    {
      var e = arguments;
      return this.forEach(function (n)
      {
        n[t][A](n, e)
      })
    }
  }(hn));
  fn.attr = function (e, n)
  {
    if (e && t.is(e, Y) && t.is(e[0], "object"))
      for (var r = 0, i = e.length; i > r; r++) this.items[r].attr(e[r]);
    else
      for (var a = 0, o = this.items.length; o > a; a++) this.items[a].attr(e, n);
    return this
  }, fn.clear = function ()
  {
    for (; this.length;) this.pop()
  }, fn.splice = function (t, e)
  {
    t = 0 > t ? q(this.length + t, 0) : t, e = q(0, R(this.length - t, e));
    var n, r = [],
      i = [],
      a = [];
    for (n = 2; arguments.length > n; n++) a.push(arguments[n]);
    for (n = 0; e > n; n++) i.push(this[t + n]);
    for (; this.length - t > n; n++) r.push(this[t + n]);
    var o = a.length;
    for (n = 0; o + r.length > n; n++) this.items[t + n] = this[t + n] = o > n ? a[n] : r[n - o];
    for (n = this.items.length = this.length -= e - o; this[n];) delete this[n++];
    return new cn(i)
  }, fn.exclude = function (t)
  {
    for (var e = 0, n = this.length; n > e; e++)
      if (this[e] == t) return this.splice(e, 1), !0
  }, fn.animate = function (e, n, r, i)
  {
    (t.is(r, "function") || !r) && (i = r || null);
    var a, o, u = this.items.length,
      s = u,
      l = this;
    if (!u) return this;
    i && (o = function ()
    {
      !--u && i.call(l)
    }), r = t.is(r, V) ? r : o;
    var c = t.animation(e, n, r, o);
    for (a = this.items[--s].animate(c); s--;) this.items[s] && !this.items[s].removed && this.items[s].animateWith(a, c, c);
    return this
  }, fn.insertAfter = function (t)
  {
    for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
    return this
  }, fn.getBBox = function ()
  {
    for (var t = [], e = [], n = [], r = [], i = this.items.length; i--;)
      if (!this.items[i].removed)
      {
        var a = this.items[i].getBBox();
        t.push(a.x), e.push(a.y), n.push(a.x + a.width), r.push(a.y + a.height)
      }
    return t = R[A](0, t), e = R[A](0, e), n = q[A](0, n), r = q[A](0, r),
    {
      x: t,
      y: e,
      x2: n,
      y2: r,
      width: n - t,
      height: r - e
    }
  }, fn.clone = function (t)
  {
    t = new cn;
    for (var e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].clone());
    return t
  }, fn.toString = function ()
  {
    return "Raphaël‘s set"
  }, t.registerFont = function (t)
  {
    if (!t.face) return t;
    this.fonts = this.fonts ||
    {};
    var e = {
      w: t.w,
      face:
      {},
      glyphs:
      {}
    }, n = t.face["font-family"];
    for (var r in t.face) t.face[M](r) && (e.face[r] = t.face[r]);
    if (this.fonts[n] ? this.fonts[n].push(e) : this.fonts[n] = [e], !t.svg)
    {
      e.face["units-per-em"] = K(t.face["units-per-em"], 10);
      for (var i in t.glyphs)
        if (t.glyphs[M](i))
        {
          var a = t.glyphs[i];
          if (e.glyphs[i] = {
            w: a.w,
            k:
            {},
            d: a.d && "M" + a.d.replace(/[mlcxtrv]/g, function (t)
            {
              return {
                l: "L",
                c: "C",
                x: "z",
                t: "m",
                r: "l",
                v: "c"
              }[t] || "M"
            }) + "z"
          }, a.k)
            for (var o in a.k) a[M](o) && (e.glyphs[i].k[o] = a.k[o])
        }
    }
    return t
  }, x.getFont = function (e, n, r, i)
  {
    if (i = i || "normal", r = r || "normal", n = +n ||
    {
      normal: 400,
      bold: 700,
      lighter: 300,
      bolder: 800
    }[n] || 400, t.fonts)
    {
      var a = t.fonts[e];
      if (!a)
      {
        var o = RegExp("(^|\\s)" + e.replace(/[^\w\d\s+!~.:_-]/g, T) + "(\\s|$)", "i");
        for (var u in t.fonts)
          if (t.fonts[M](u) && o.test(u))
          {
            a = t.fonts[u];
            break
          }
      }
      var s;
      if (a)
        for (var l = 0, c = a.length; c > l && (s = a[l], s.face["font-weight"] != n || s.face["font-style"] != r && s.face["font-style"] || s.face["font-stretch"] != i); l++);
      return s
    }
  }, x.print = function (e, n, r, i, a, o, u)
  {
    o = o || "middle", u = q(R(u || 0, 1), -1);
    var s, l = L(r)[z](T),
      c = 0,
      f = 0,
      h = T;
    if (t.is(i, r) && (i = this.getFont(i)), i)
    {
      s = (a || 16) / i.face["units-per-em"];
      for (var p = i.face.bbox[z](b), d = +p[0], g = p[3] - p[1], m = 0, v = +p[1] + ("baseline" == o ? g + +i.face.descent : g / 2), y = 0, x = l.length; x > y; y++)
      {
        if ("\n" == l[y]) c = 0, w = 0, f = 0, m += g;
        else
        {
          var _ = f && i.glyphs[l[y - 1]] ||
          {}, w = i.glyphs[l[y]];
          c += f ? (_.w || i.w) + (_.k && _.k[l[y]] || 0) + i.w * u : 0, f = 1
        }
        w && w.d && (h += t.transformPath(w.d, ["t", c * s, m * s, "s", s, s, d, v, "t", (e - d) / s, (n - v) / s]))
      }
    }
    return this.path(h).attr(
    {
      fill: "#000",
      stroke: "none"
    })
  }, x.add = function (e)
  {
    if (t.is(e, "array"))
      for (var n, r = this.set(), i = 0, a = e.length; a > i; i++) n = e[i] ||
      {}, _[M](n.type) && r.push(this[n.type]().attr(n));
    return r
  }, t.format = function (e, n)
  {
    var r = t.is(n, Y) ? [0][C](n) : arguments;
    return e && t.is(e, V) && r.length - 1 && (e = e.replace(w, function (t, e)
    {
      return null == r[++e] ? T : r[e]
    })), e || T
  }, t.fullfill = function ()
  {
    var t = /\{([^\}]+)\}/g,
      e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
      n = function (t, n, r)
      {
        var i = r;
        return n.replace(e, function (t, e, n, r, a)
        {
          e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && a && (i = i()))
        }), i = (null == i || i == r ? t : i) + ""
      };
    return function (e, r)
    {
      return (e + "").replace(t, function (t, e)
      {
        return n(t, e, r)
      })
    }
  }(), t.ninja = function ()
  {
    return S.was ? k.win.Raphael = S.is : delete Raphael, t
  }, t.st = fn,
  function (e, n, r)
  {
    function i()
    {
      /in/.test(e.readyState) ? setTimeout(i, 9) : t.eve("raphael.DOMload")
    }
    null == e.readyState && e.addEventListener && (e.addEventListener(n, r = function ()
    {
      e.removeEventListener(n, r, !1), e.readyState = "complete"
    }, !1), e.readyState = "loading"), i()
  }(document, "DOMContentLoaded"), S.was ? k.win.Raphael = t : Raphael = t, eve.on("raphael.DOMload", function ()
  {
    y = !0
  })
}(), window.Raphael.svg && function (t)
{
  var e = "hasOwnProperty",
    n = String,
    r = parseFloat,
    i = parseInt,
    a = Math,
    o = a.max,
    u = a.abs,
    s = a.pow,
    l = /[, ]+/,
    c = t.eve,
    f = "",
    h = " ",
    p = "http://www.w3.org/1999/xlink",
    d = {
      block: "M5,0 0,2.5 5,5z",
      classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
      diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
      open: "M6,1 1,3.5 6,6",
      oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
    }, g = {};
  t.toString = function ()
  {
    return "Your browser supports SVG.\nYou are running Raphaël " + this.version
  };
  var m = function (r, i)
  {
    if (i)
    {
      "string" == typeof r && (r = m(r));
      for (var a in i) i[e](a) && ("xlink:" == a.substring(0, 6) ? r.setAttributeNS(p, a.substring(6), n(i[a])) : r.setAttribute(a, n(i[a])))
    }
    else r = t._g.doc.createElementNS("http://www.w3.org/2000/svg", r), r.style && (r.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
    return r
  }, v = function (e, i)
    {
      var l = "linear",
        c = e.id + i,
        h = .5,
        p = .5,
        d = e.node,
        g = e.paper,
        v = d.style,
        y = t._g.doc.getElementById(c);
      if (!y)
      {
        if (i = n(i).replace(t._radial_gradient, function (t, e, n)
        {
          if (l = "radial", e && n)
          {
            h = r(e), p = r(n);
            var i = 2 * (p > .5) - 1;
            s(h - .5, 2) + s(p - .5, 2) > .25 && (p = a.sqrt(.25 - s(h - .5, 2)) * i + .5) && .5 != p && (p = p.toFixed(5) - 1e-5 * i)
          }
          return f
        }), i = i.split(/\s*\-\s*/), "linear" == l)
        {
          var x = i.shift();
          if (x = -r(x), isNaN(x)) return null;
          var b = [0, 0, a.cos(t.rad(x)), a.sin(t.rad(x))],
            _ = 1 / (o(u(b[2]), u(b[3])) || 1);
          b[2] *= _, b[3] *= _, 0 > b[2] && (b[0] = -b[2], b[2] = 0), 0 > b[3] && (b[1] = -b[3], b[3] = 0)
        }
        var w = t._parseDots(i);
        if (!w) return null;
        if (c = c.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && c != e.gradient.id && (g.defs.removeChild(e.gradient), delete e.gradient), !e.gradient)
        {
          y = m(l + "Gradient",
          {
            id: c
          }), e.gradient = y, m(y, "radial" == l ?
          {
            fx: h,
            fy: p
          } :
          {
            x1: b[0],
            y1: b[1],
            x2: b[2],
            y2: b[3],
            gradientTransform: e.matrix.invert()
          }), g.defs.appendChild(y);
          for (var M = 0, k = w.length; k > M; M++) y.appendChild(m("stop",
          {
            offset: w[M].offset ? w[M].offset : M ? "100%" : "0%",
            "stop-color": w[M].color || "#fff"
          }))
        }
      }
      return m(d,
      {
        fill: "url(#" + c + ")",
        opacity: 1,
        "fill-opacity": 1
      }), v.fill = f, v.opacity = 1, v.fillOpacity = 1, 1
    }, y = function (t)
    {
      var e = t.getBBox(1);
      m(t.pattern,
      {
        patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
      })
    }, x = function (r, i, a)
    {
      if ("path" == r.type)
      {
        for (var o, u, s, l, c, h = n(i).toLowerCase().split("-"), p = r.paper, v = a ? "end" : "start", y = r.node, x = r.attrs, b = x["stroke-width"], _ = h.length, w = "classic", M = 3, k = 3, S = 5; _--;) switch (h[_])
        {
        case "block":
        case "classic":
        case "oval":
        case "diamond":
        case "open":
        case "none":
          w = h[_];
          break;
        case "wide":
          k = 5;
          break;
        case "narrow":
          k = 2;
          break;
        case "long":
          M = 5;
          break;
        case "short":
          M = 2
        }
        if ("open" == w ? (M += 2, k += 2, S += 2, s = 1, l = a ? 4 : 1, c = {
          fill: "none",
          stroke: x.stroke
        }) : (l = s = M / 2, c = {
          fill: x.stroke,
          stroke: "none"
        }), r._.arrows ? a ? (r._.arrows.endPath && g[r._.arrows.endPath]--, r._.arrows.endMarker && g[r._.arrows.endMarker]--) : (r._.arrows.startPath && g[r._.arrows.startPath]--, r._.arrows.startMarker && g[r._.arrows.startMarker]--) : r._.arrows = {}, "none" != w)
        {
          var N = "raphael-marker-" + w,
            A = "raphael-marker-" + v + w + M + k;
          t._g.doc.getElementById(N) ? g[N]++ : (p.defs.appendChild(m(m("path"),
          {
            "stroke-linecap": "round",
            d: d[w],
            id: N
          })), g[N] = 1);
          var C, E = t._g.doc.getElementById(A);
          E ? (g[A]++, C = E.getElementsByTagName("use")[0]) : (E = m(m("marker"),
          {
            id: A,
            markerHeight: k,
            markerWidth: M,
            orient: "auto",
            refX: l,
            refY: k / 2
          }), C = m(m("use"),
          {
            "xlink:href": "#" + N,
            transform: (a ? "rotate(180 " + M / 2 + " " + k / 2 + ") " : f) + "scale(" + M / S + "," + k / S + ")",
            "stroke-width": (1 / ((M / S + k / S) / 2)).toFixed(4)
          }), E.appendChild(C), p.defs.appendChild(E), g[A] = 1), m(C, c);
          var T = s * ("diamond" != w && "oval" != w);
          a ? (o = r._.arrows.startdx * b || 0, u = t.getTotalLength(x.path) - T * b) : (o = T * b, u = t.getTotalLength(x.path) - (r._.arrows.enddx * b || 0)), c = {}, c["marker-" + v] = "url(#" + A + ")", (u || o) && (c.d = Raphael.getSubpath(x.path, o, u)), m(y, c), r._.arrows[v + "Path"] = N, r._.arrows[v + "Marker"] = A, r._.arrows[v + "dx"] = T, r._.arrows[v + "Type"] = w, r._.arrows[v + "String"] = i
        }
        else a ? (o = r._.arrows.startdx * b || 0, u = t.getTotalLength(x.path) - o) : (o = 0, u = t.getTotalLength(x.path) - (r._.arrows.enddx * b || 0)), r._.arrows[v + "Path"] && m(y,
        {
          d: Raphael.getSubpath(x.path, o, u)
        }), delete r._.arrows[v + "Path"], delete r._.arrows[v + "Marker"], delete r._.arrows[v + "dx"], delete r._.arrows[v + "Type"], delete r._.arrows[v + "String"];
        for (c in g)
          if (g[e](c) && !g[c])
          {
            var B = t._g.doc.getElementById(c);
            B && B.parentNode.removeChild(B)
          }
      }
    }, b = {
      "": [0],
      none: [0],
      "-": [3, 1],
      ".": [1, 1],
      "-.": [3, 1, 1, 1],
      "-..": [3, 1, 1, 1, 1, 1],
      ". ": [1, 3],
      "- ": [4, 3],
      "--": [8, 3],
      "- .": [4, 3, 1, 3],
      "--.": [8, 3, 1, 3],
      "--..": [8, 3, 1, 3, 1, 3]
    }, _ = function (t, e, r)
    {
      if (e = b[n(e).toLowerCase()])
      {
        for (var i = t.attrs["stroke-width"] || "1", a = {
            round: i,
            square: i,
            butt: 0
          }[t.attrs["stroke-linecap"] || r["stroke-linecap"]] || 0, o = [], u = e.length; u--;) o[u] = e[u] * i + (u % 2 ? 1 : -1) * a;
        m(t.node,
        {
          "stroke-dasharray": o.join(",")
        })
      }
    }, w = function (r, a)
    {
      var s = r.node,
        c = r.attrs,
        h = s.style.visibility;
      s.style.visibility = "hidden";
      for (var d in a)
        if (a[e](d))
        {
          if (!t._availableAttrs[e](d)) continue;
          var g = a[d];
          switch (c[d] = g, d)
          {
          case "blur":
            r.blur(g);
            break;
          case "href":
          case "title":
          case "target":
            var b = s.parentNode;
            if ("a" != b.tagName.toLowerCase())
            {
              var w = m("a");
              b.insertBefore(w, s), w.appendChild(s), b = w
            }
            "target" == d ? b.setAttributeNS(p, "show", "blank" == g ? "new" : g) : b.setAttributeNS(p, d, g);
            break;
          case "cursor":
            s.style.cursor = g;
            break;
          case "transform":
            r.transform(g);
            break;
          case "arrow-start":
            x(r, g);
            break;
          case "arrow-end":
            x(r, g, 1);
            break;
          case "clip-rect":
            var M = n(g).split(l);
            if (4 == M.length)
            {
              r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);
              var S = m("clipPath"),
                N = m("rect");
              S.id = t.createUUID(), m(N,
              {
                x: M[0],
                y: M[1],
                width: M[2],
                height: M[3]
              }), S.appendChild(N), r.paper.defs.appendChild(S), m(s,
              {
                "clip-path": "url(#" + S.id + ")"
              }), r.clip = N
            }
            if (!g)
            {
              var A = s.getAttribute("clip-path");
              if (A)
              {
                var C = t._g.doc.getElementById(A.replace(/(^url\(#|\)$)/g, f));
                C && C.parentNode.removeChild(C), m(s,
                {
                  "clip-path": f
                }), delete r.clip
              }
            }
            break;
          case "path":
            "path" == r.type && (m(s,
            {
              d: g ? c.path = t._pathToAbsolute(g) : "M0,0"
            }), r._.dirty = 1, r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1)));
            break;
          case "width":
            if (s.setAttribute(d, g), r._.dirty = 1, !c.fx) break;
            d = "x", g = c.x;
          case "x":
            c.fx && (g = -c.x - (c.width || 0));
          case "rx":
            if ("rx" == d && "rect" == r.type) break;
          case "cx":
            s.setAttribute(d, g), r.pattern && y(r), r._.dirty = 1;
            break;
          case "height":
            if (s.setAttribute(d, g), r._.dirty = 1, !c.fy) break;
            d = "y", g = c.y;
          case "y":
            c.fy && (g = -c.y - (c.height || 0));
          case "ry":
            if ("ry" == d && "rect" == r.type) break;
          case "cy":
            s.setAttribute(d, g), r.pattern && y(r), r._.dirty = 1;
            break;
          case "r":
            "rect" == r.type ? m(s,
            {
              rx: g,
              ry: g
            }) : s.setAttribute(d, g), r._.dirty = 1;
            break;
          case "src":
            "image" == r.type && s.setAttributeNS(p, "href", g);
            break;
          case "stroke-width":
            (1 != r._.sx || 1 != r._.sy) && (g /= o(u(r._.sx), u(r._.sy)) || 1), r.paper._vbSize && (g *= r.paper._vbSize), s.setAttribute(d, g), c["stroke-dasharray"] && _(r, c["stroke-dasharray"], a), r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1));
            break;
          case "stroke-dasharray":
            _(r, g, a);
            break;
          case "fill":
            var E = n(g).match(t._ISURL);
            if (E)
            {
              S = m("pattern");
              var T = m("image");
              S.id = t.createUUID(), m(S,
              {
                x: 0,
                y: 0,
                patternUnits: "userSpaceOnUse",
                height: 1,
                width: 1
              }), m(T,
              {
                x: 0,
                y: 0,
                "xlink:href": E[1]
              }), S.appendChild(T),
              function (e)
              {
                t._preload(E[1], function ()
                {
                  var t = this.offsetWidth,
                    n = this.offsetHeight;
                  m(e,
                  {
                    width: t,
                    height: n
                  }), m(T,
                  {
                    width: t,
                    height: n
                  }), r.paper.safari()
                })
              }(S), r.paper.defs.appendChild(S), m(s,
              {
                fill: "url(#" + S.id + ")"
              }), r.pattern = S, r.pattern && y(r);
              break
            }
            var B = t.getRGB(g);
            if (B.error)
            {
              if (("circle" == r.type || "ellipse" == r.type || "r" != n(g).charAt()) && v(r, g))
              {
                if ("opacity" in c || "fill-opacity" in c)
                {
                  var L = t._g.doc.getElementById(s.getAttribute("fill").replace(/^url\(#|\)$/g, f));
                  if (L)
                  {
                    var z = L.getElementsByTagName("stop");
                    m(z[z.length - 1],
                    {
                      "stop-opacity": ("opacity" in c ? c.opacity : 1) * ("fill-opacity" in c ? c["fill-opacity"] : 1)
                    })
                  }
                }
                c.gradient = g, c.fill = "none";
                break
              }
            }
            else delete a.gradient, delete c.gradient, !t.is(c.opacity, "undefined") && t.is(a.opacity, "undefined") && m(s,
            {
              opacity: c.opacity
            }), !t.is(c["fill-opacity"], "undefined") && t.is(a["fill-opacity"], "undefined") && m(s,
            {
              "fill-opacity": c["fill-opacity"]
            });
            B[e]("opacity") && m(s,
            {
              "fill-opacity": B.opacity > 1 ? B.opacity / 100 : B.opacity
            });
          case "stroke":
            B = t.getRGB(g), s.setAttribute(d, B.hex), "stroke" == d && B[e]("opacity") && m(s,
            {
              "stroke-opacity": B.opacity > 1 ? B.opacity / 100 : B.opacity
            }), "stroke" == d && r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1));
            break;
          case "gradient":
            ("circle" == r.type || "ellipse" == r.type || "r" != n(g).charAt()) && v(r, g);
            break;
          case "opacity":
            c.gradient && !c[e]("stroke-opacity") && m(s,
            {
              "stroke-opacity": g > 1 ? g / 100 : g
            });
          case "fill-opacity":
            if (c.gradient)
            {
              L = t._g.doc.getElementById(s.getAttribute("fill").replace(/^url\(#|\)$/g, f)), L && (z = L.getElementsByTagName("stop"), m(z[z.length - 1],
              {
                "stop-opacity": g
              }));
              break
            }
          default:
            "font-size" == d && (g = i(g, 10) + "px");
            var P = d.replace(/(\-.)/g, function (t)
            {
              return t.substring(1).toUpperCase()
            });
            s.style[P] = g, r._.dirty = 1, s.setAttribute(d, g)
          }
        }
      k(r, a), s.style.visibility = h
    }, M = 1.2,
    k = function (r, a)
    {
      if ("text" == r.type && (a[e]("text") || a[e]("font") || a[e]("font-size") || a[e]("x") || a[e]("y")))
      {
        var o = r.attrs,
          u = r.node,
          s = u.firstChild ? i(t._g.doc.defaultView.getComputedStyle(u.firstChild, f).getPropertyValue("font-size"), 10) : 10;
        if (a[e]("text"))
        {
          for (o.text = a.text; u.firstChild;) u.removeChild(u.firstChild);
          for (var l, c = n(a.text).split("\n"), h = [], p = 0, d = c.length; d > p; p++) l = m("tspan"), p && m(l,
          {
            dy: s * M,
            x: o.x
          }), l.appendChild(t._g.doc.createTextNode(c[p])), u.appendChild(l), h[p] = l
        }
        else
          for (h = u.getElementsByTagName("tspan"), p = 0, d = h.length; d > p; p++) p ? m(h[p],
          {
            dy: s * M,
            x: o.x
          }) : m(h[0],
          {
            dy: 0
          });
        m(u,
        {
          x: o.x,
          y: o.y
        }), r._.dirty = 1;
        var g = r._getBBox(),
          v = o.y - (g.y + g.height / 2);
        v && t.is(v, "finite") && m(h[0],
        {
          dy: v
        })
      }
    }, S = function (e, n)
    {
      this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.matrix = t.matrix(), this.realPath = null, this.paper = n, this.attrs = this.attrs ||
      {}, this._ = {
        transform: [],
        sx: 1,
        sy: 1,
        deg: 0,
        dx: 0,
        dy: 0,
        dirty: 1
      }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null
    }, N = t.el;
  S.prototype = N, N.constructor = S, t._engine.path = function (t, e)
  {
    var n = m("path");
    e.canvas && e.canvas.appendChild(n);
    var r = new S(n, e);
    return r.type = "path", w(r,
    {
      fill: "none",
      stroke: "#000",
      path: t
    }), r
  }, N.rotate = function (t, e, i)
  {
    if (this.removed) return this;
    if (t = n(t).split(l), t.length - 1 && (e = r(t[1]), i = r(t[2])), t = r(t[0]), null == i && (e = i), null == e || null == i)
    {
      var a = this.getBBox(1);
      e = a.x + a.width / 2, i = a.y + a.height / 2
    }
    return this.transform(this._.transform.concat([
      ["r", t, e, i]
    ])), this
  }, N.scale = function (t, e, i, a)
  {
    if (this.removed) return this;
    if (t = n(t).split(l), t.length - 1 && (e = r(t[1]), i = r(t[2]), a = r(t[3])), t = r(t[0]), null == e && (e = t), null == a && (i = a), null == i || null == a) var o = this.getBBox(1);
    return i = null == i ? o.x + o.width / 2 : i, a = null == a ? o.y + o.height / 2 : a, this.transform(this._.transform.concat([
      ["s", t, e, i, a]
    ])), this
  }, N.translate = function (t, e)
  {
    return this.removed ? this : (t = n(t).split(l), t.length - 1 && (e = r(t[1])), t = r(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([
      ["t", t, e]
    ])), this)
  }, N.transform = function (n)
  {
    var r = this._;
    if (null == n) return r.transform;
    if (t._extractTransform(this, n), this.clip && m(this.clip,
    {
      transform: this.matrix.invert()
    }), this.pattern && y(this), this.node && m(this.node,
    {
      transform: this.matrix
    }), 1 != r.sx || 1 != r.sy)
    {
      var i = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
      this.attr(
      {
        "stroke-width": i
      })
    }
    return this
  }, N.hide = function ()
  {
    return !this.removed && this.paper.safari(this.node.style.display = "none"), this
  }, N.show = function ()
  {
    return !this.removed && this.paper.safari(this.node.style.display = ""), this
  }, N.remove = function ()
  {
    if (!this.removed && this.node.parentNode)
    {
      var e = this.paper;
      e.__set__ && e.__set__.exclude(this), c.unbind("raphael.*.*." + this.id), this.gradient && e.defs.removeChild(this.gradient), t._tear(this, e), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
      for (var n in this) this[n] = "function" == typeof this[n] ? t._removedFactory(n) : null;
      this.removed = !0
    }
  }, N._getBBox = function ()
  {
    if ("none" == this.node.style.display)
    {
      this.show();
      var t = !0
    }
    var e = {};
    try
    {
      e = this.node.getBBox()
    }
    catch (n)
    {}
    finally
    {
      e = e ||
      {}
    }
    return t && this.hide(), e
  }, N.attr = function (n, r)
  {
    if (this.removed) return this;
    if (null == n)
    {
      var i = {};
      for (var a in this.attrs) this.attrs[e](a) && (i[a] = this.attrs[a]);
      return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
    }
    if (null == r && t.is(n, "string"))
    {
      if ("fill" == n && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
      if ("transform" == n) return this._.transform;
      for (var o = n.split(l), u = {}, s = 0, f = o.length; f > s; s++) n = o[s], u[n] = n in this.attrs ? this.attrs[n] : t.is(this.paper.customAttributes[n], "function") ? this.paper.customAttributes[n].def : t._availableAttrs[n];
      return f - 1 ? u : u[o[0]]
    }
    if (null == r && t.is(n, "array"))
    {
      for (u = {}, s = 0, f = n.length; f > s; s++) u[n[s]] = this.attr(n[s]);
      return u
    }
    if (null != r)
    {
      var h = {};
      h[n] = r
    }
    else null != n && t.is(n, "object") && (h = n);
    for (var p in h) c("raphael.attr." + p + "." + this.id, this, h[p]);
    for (p in this.paper.customAttributes)
      if (this.paper.customAttributes[e](p) && h[e](p) && t.is(this.paper.customAttributes[p], "function"))
      {
        var d = this.paper.customAttributes[p].apply(this, [].concat(h[p]));
        this.attrs[p] = h[p];
        for (var g in d) d[e](g) && (h[g] = d[g])
      }
    return w(this, h), this
  }, N.toFront = function ()
  {
    if (this.removed) return this;
    "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
    var e = this.paper;
    return e.top != this && t._tofront(this, e), this
  }, N.toBack = function ()
  {
    if (this.removed) return this;
    var e = this.node.parentNode;
    return "a" == e.tagName.toLowerCase() ? e.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : e.firstChild != this.node && e.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper), this.paper, this
  }, N.insertAfter = function (e)
  {
    if (this.removed) return this;
    var n = e.node || e[e.length - 1].node;
    return n.nextSibling ? n.parentNode.insertBefore(this.node, n.nextSibling) : n.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this
  }, N.insertBefore = function (e)
  {
    if (this.removed) return this;
    var n = e.node || e[0].node;
    return n.parentNode.insertBefore(this.node, n), t._insertbefore(this, e, this.paper), this
  }, N.blur = function (e)
  {
    var n = this;
    if (0 !== +e)
    {
      var r = m("filter"),
        i = m("feGaussianBlur");
      n.attrs.blur = e, r.id = t.createUUID(), m(i,
      {
        stdDeviation: +e || 1.5
      }), r.appendChild(i), n.paper.defs.appendChild(r), n._blur = r, m(n.node,
      {
        filter: "url(#" + r.id + ")"
      })
    }
    else n._blur && (n._blur.parentNode.removeChild(n._blur), delete n._blur, delete n.attrs.blur), n.node.removeAttribute("filter")
  }, t._engine.circle = function (t, e, n, r)
  {
    var i = m("circle");
    t.canvas && t.canvas.appendChild(i);
    var a = new S(i, t);
    return a.attrs = {
      cx: e,
      cy: n,
      r: r,
      fill: "none",
      stroke: "#000"
    }, a.type = "circle", m(i, a.attrs), a
  }, t._engine.rect = function (t, e, n, r, i, a)
  {
    var o = m("rect");
    t.canvas && t.canvas.appendChild(o);
    var u = new S(o, t);
    return u.attrs = {
      x: e,
      y: n,
      width: r,
      height: i,
      r: a || 0,
      rx: a || 0,
      ry: a || 0,
      fill: "none",
      stroke: "#000"
    }, u.type = "rect", m(o, u.attrs), u
  }, t._engine.ellipse = function (t, e, n, r, i)
  {
    var a = m("ellipse");
    t.canvas && t.canvas.appendChild(a);
    var o = new S(a, t);
    return o.attrs = {
      cx: e,
      cy: n,
      rx: r,
      ry: i,
      fill: "none",
      stroke: "#000"
    }, o.type = "ellipse", m(a, o.attrs), o
  }, t._engine.image = function (t, e, n, r, i, a)
  {
    var o = m("image");
    m(o,
    {
      x: n,
      y: r,
      width: i,
      height: a,
      preserveAspectRatio: "none"
    }), o.setAttributeNS(p, "href", e), t.canvas && t.canvas.appendChild(o);
    var u = new S(o, t);
    return u.attrs = {
      x: n,
      y: r,
      width: i,
      height: a,
      src: e
    }, u.type = "image", u
  }, t._engine.text = function (e, n, r, i)
  {
    var a = m("text");
    e.canvas && e.canvas.appendChild(a);
    var o = new S(a, e);
    return o.attrs = {
      x: n,
      y: r,
      "text-anchor": "middle",
      text: i,
      font: t._availableAttrs.font,
      stroke: "none",
      fill: "#000"
    }, o.type = "text", w(o, o.attrs), o
  }, t._engine.setSize = function (t, e)
  {
    return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
  }, t._engine.create = function ()
  {
    var e = t._getContainer.apply(0, arguments),
      n = e && e.container,
      r = e.x,
      i = e.y,
      a = e.width,
      o = e.height;
    if (!n) throw Error("SVG container not found.");
    var u, s = m("svg"),
      l = "overflow:hidden;";
    return r = r || 0, i = i || 0, a = a || 512, o = o || 342, m(s,
    {
      height: o,
      version: 1.1,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), 1 == n ? (s.style.cssText = l + "position:absolute;left:" + r + "px;top:" + i + "px", t._g.doc.body.appendChild(s), u = 1) : (s.style.cssText = l + "position:relative", n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s)), n = new t._Paper, n.width = a, n.height = o, n.canvas = s, n.clear(), n._left = n._top = 0, u && (n.renderfix = function () {}), n.renderfix(), n
  }, t._engine.setViewBox = function (t, e, n, r, i)
  {
    c("raphael.setViewBox", this, this._viewBox, [t, e, n, r, i]);
    var a, u, s = o(n / this.width, r / this.height),
      l = this.top,
      f = i ? "meet" : "xMinYMin";
    for (null == t ? (this._vbSize && (s = 1), delete this._vbSize, a = "0 0 " + this.width + h + this.height) : (this._vbSize = s, a = t + h + e + h + n + h + r), m(this.canvas,
    {
      viewBox: a,
      preserveAspectRatio: f
    }); s && l;) u = "stroke-width" in l.attrs ? l.attrs["stroke-width"] : 1, l.attr(
    {
      "stroke-width": u
    }), l._.dirty = 1, l._.dirtyT = 1, l = l.prev;
    return this._viewBox = [t, e, n, r, !! i], this
  }, t.prototype.renderfix = function ()
  {
    var t, e = this.canvas,
      n = e.style;
    try
    {
      t = e.getScreenCTM() || e.createSVGMatrix()
    }
    catch (r)
    {
      t = e.createSVGMatrix()
    }
    var i = -t.e % 1,
      a = -t.f % 1;
    (i || a) && (i && (this._left = (this._left + i) % 1, n.left = this._left + "px"), a && (this._top = (this._top + a) % 1, n.top = this._top + "px"))
  }, t.prototype.clear = function ()
  {
    t.eve("raphael.clear", this);
    for (var e = this.canvas; e.firstChild;) e.removeChild(e.firstChild);
    this.bottom = this.top = null, (this.desc = m("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël " + t.version)), e.appendChild(this.desc), e.appendChild(this.defs = m("defs"))
  }, t.prototype.remove = function ()
  {
    c("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
    for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null
  };
  var A = t.st;
  for (var C in N) N[e](C) && !A[e](C) && (A[C] = function (t)
  {
    return function ()
    {
      var e = arguments;
      return this.forEach(function (n)
      {
        n[t].apply(n, e)
      })
    }
  }(C))
}(window.Raphael), window.Raphael.vml && function (t)
{
  var e = "hasOwnProperty",
    n = String,
    r = parseFloat,
    i = Math,
    a = i.round,
    o = i.max,
    u = i.min,
    s = i.abs,
    l = "fill",
    c = /[, ]+/,
    f = t.eve,
    h = " progid:DXImageTransform.Microsoft",
    p = " ",
    d = "",
    g = {
      M: "m",
      L: "l",
      C: "c",
      Z: "x",
      m: "t",
      l: "r",
      c: "v",
      z: "x"
    }, m = /([clmz]),?([^clmz]*)/gi,
    v = / progid:\S+Blur\([^\)]+\)/g,
    y = /-?[^,\s-]+/g,
    x = "position:absolute;left:0;top:0;width:1px;height:1px",
    b = 21600,
    _ = {
      path: 1,
      rect: 1,
      image: 1
    }, w = {
      circle: 1,
      ellipse: 1
    }, M = function (e)
    {
      var r = /[ahqstv]/gi,
        i = t._pathToAbsolute;
      if (n(e).match(r) && (i = t._path2curve), r = /[clmz]/g, i == t._pathToAbsolute && !n(e).match(r))
      {
        var o = n(e).replace(m, function (t, e, n)
        {
          var r = [],
            i = "m" == e.toLowerCase(),
            o = g[e];
          return n.replace(y, function (t)
          {
            i && 2 == r.length && (o += r + g["m" == e ? "l" : "L"], r = []), r.push(a(t * b))
          }), o + r
        });
        return o
      }
      var u, s, l = i(e);
      o = [];
      for (var c = 0, f = l.length; f > c; c++)
      {
        u = l[c], s = l[c][0].toLowerCase(), "z" == s && (s = "x");
        for (var h = 1, v = u.length; v > h; h++) s += a(u[h] * b) + (h != v - 1 ? "," : d);
        o.push(s)
      }
      return o.join(p)
    }, k = function (e, n, r)
    {
      var i = t.matrix();
      return i.rotate(-e, .5, .5),
      {
        dx: i.x(n, r),
        dy: i.y(n, r)
      }
    }, S = function (t, e, n, r, i, a)
    {
      var o = t._,
        u = t.matrix,
        c = o.fillpos,
        f = t.node,
        h = f.style,
        d = 1,
        g = "",
        m = b / e,
        v = b / n;
      if (h.visibility = "hidden", e && n)
      {
        if (f.coordsize = s(m) + p + s(v), h.rotation = a * (0 > e * n ? -1 : 1), a)
        {
          var y = k(a, r, i);
          r = y.dx, i = y.dy
        }
        if (0 > e && (g += "x"), 0 > n && (g += " y") && (d = -1), h.flip = g, f.coordorigin = r * -m + p + i * -v, c || o.fillsize)
        {
          var x = f.getElementsByTagName(l);
          x = x && x[0], f.removeChild(x), c && (y = k(a, u.x(c[0], c[1]), u.y(c[0], c[1])), x.position = y.dx * d + p + y.dy * d), o.fillsize && (x.size = o.fillsize[0] * s(e) + p + o.fillsize[1] * s(n)), f.appendChild(x)
        }
        h.visibility = "visible"
      }
    };
  t.toString = function ()
  {
    return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
  };
  var N = function (t, e, r)
  {
    for (var i = n(e).toLowerCase().split("-"), a = r ? "end" : "start", o = i.length, u = "classic", s = "medium", l = "medium"; o--;) switch (i[o])
    {
    case "block":
    case "classic":
    case "oval":
    case "diamond":
    case "open":
    case "none":
      u = i[o];
      break;
    case "wide":
    case "narrow":
      l = i[o];
      break;
    case "long":
    case "short":
      s = i[o]
    }
    var c = t.node.getElementsByTagName("stroke")[0];
    c[a + "arrow"] = u, c[a + "arrowlength"] = s, c[a + "arrowwidth"] = l
  }, A = function (i, s)
    {
      i.attrs = i.attrs ||
      {};
      var f = i.node,
        h = i.attrs,
        g = f.style,
        m = _[i.type] && (s.x != h.x || s.y != h.y || s.width != h.width || s.height != h.height || s.cx != h.cx || s.cy != h.cy || s.rx != h.rx || s.ry != h.ry || s.r != h.r),
        v = w[i.type] && (h.cx != s.cx || h.cy != s.cy || h.r != s.r || h.rx != s.rx || h.ry != s.ry),
        y = i;
      for (var x in s) s[e](x) && (h[x] = s[x]);
      if (m && (h.path = t._getPath[i.type](i), i._.dirty = 1), s.href && (f.href = s.href), s.title && (f.title = s.title), s.target && (f.target = s.target), s.cursor && (g.cursor = s.cursor), "blur" in s && i.blur(s.blur), (s.path && "path" == i.type || m) && (f.path = M(~n(h.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(h.path) : h.path), "image" == i.type && (i._.fillpos = [h.x, h.y], i._.fillsize = [h.width, h.height], S(i, 1, 1, 0, 0, 0))), "transform" in s && i.transform(s.transform), v)
      {
        var k = +h.cx,
          A = +h.cy,
          E = +h.rx || +h.r || 0,
          T = +h.ry || +h.r || 0;
        f.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", a((k - E) * b), a((A - T) * b), a((k + E) * b), a((A + T) * b), a(k * b))
      }
      if ("clip-rect" in s)
      {
        var L = n(s["clip-rect"]).split(c);
        if (4 == L.length)
        {
          L[2] = +L[2] + +L[0], L[3] = +L[3] + +L[1];
          var z = f.clipRect || t._g.doc.createElement("div"),
            P = z.style;
          P.clip = t.format("rect({1}px {2}px {3}px {0}px)", L), f.clipRect || (P.position = "absolute", P.top = 0, P.left = 0, P.width = i.paper.width + "px", P.height = i.paper.height + "px", f.parentNode.insertBefore(z, f), z.appendChild(f), f.clipRect = z)
        }
        s["clip-rect"] || f.clipRect && (f.clipRect.style.clip = "auto")
      }
      if (i.textpath)
      {
        var j = i.textpath.style;
        s.font && (j.font = s.font), s["font-family"] && (j.fontFamily = '"' + s["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, d) + '"'), s["font-size"] && (j.fontSize = s["font-size"]), s["font-weight"] && (j.fontWeight = s["font-weight"]), s["font-style"] && (j.fontStyle = s["font-style"])
      }
      if ("arrow-start" in s && N(y, s["arrow-start"]), "arrow-end" in s && N(y, s["arrow-end"], 1), null != s.opacity || null != s["stroke-width"] || null != s.fill || null != s.src || null != s.stroke || null != s["stroke-width"] || null != s["stroke-opacity"] || null != s["fill-opacity"] || null != s["stroke-dasharray"] || null != s["stroke-miterlimit"] || null != s["stroke-linejoin"] || null != s["stroke-linecap"])
      {
        var D = f.getElementsByTagName(l),
          F = !1;
        if (D = D && D[0], !D && (F = D = B(l)), "image" == i.type && s.src && (D.src = s.src), s.fill && (D.on = !0), (null == D.on || "none" == s.fill || null === s.fill) && (D.on = !1), D.on && s.fill)
        {
          var q = n(s.fill).match(t._ISURL);
          if (q)
          {
            D.parentNode == f && f.removeChild(D), D.rotate = !0, D.src = q[1], D.type = "tile";
            var R = i.getBBox(1);
            D.position = R.x + p + R.y, i._.fillpos = [R.x, R.y], t._preload(q[1], function ()
            {
              i._.fillsize = [this.offsetWidth, this.offsetHeight]
            })
          }
          else D.color = t.getRGB(s.fill).hex, D.src = d, D.type = "solid", t.getRGB(s.fill).error && (y.type in
          {
            circle: 1,
            ellipse: 1
          } || "r" != n(s.fill).charAt()) && C(y, s.fill, D) && (h.fill = "none", h.gradient = s.fill, D.rotate = !1)
        }
        if ("fill-opacity" in s || "opacity" in s)
        {
          var O = ((+h["fill-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+t.getRGB(s.fill).o + 1 || 2) - 1);
          O = u(o(O, 0), 1), D.opacity = O, D.src && (D.color = "none")
        }
        f.appendChild(D);
        var I = f.getElementsByTagName("stroke") && f.getElementsByTagName("stroke")[0],
          H = !1;
        !I && (H = I = B("stroke")), (s.stroke && "none" != s.stroke || s["stroke-width"] || null != s["stroke-opacity"] || s["stroke-dasharray"] || s["stroke-miterlimit"] || s["stroke-linejoin"] || s["stroke-linecap"]) && (I.on = !0), ("none" == s.stroke || null === s.stroke || null == I.on || 0 == s.stroke || 0 == s["stroke-width"]) && (I.on = !1);
        var U = t.getRGB(s.stroke);
        I.on && s.stroke && (I.color = U.hex), O = ((+h["stroke-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+U.o + 1 || 2) - 1);
        var V = .75 * (r(s["stroke-width"]) || 1);
        if (O = u(o(O, 0), 1), null == s["stroke-width"] && (V = h["stroke-width"]), s["stroke-width"] && (I.weight = V), V && 1 > V && (O *= V) && (I.weight = 1), I.opacity = O, s["stroke-linejoin"] && (I.joinstyle = s["stroke-linejoin"] || "miter"), I.miterlimit = s["stroke-miterlimit"] || 8, s["stroke-linecap"] && (I.endcap = "butt" == s["stroke-linecap"] ? "flat" : "square" == s["stroke-linecap"] ? "square" : "round"), s["stroke-dasharray"])
        {
          var Y = {
            "-": "shortdash",
            ".": "shortdot",
            "-.": "shortdashdot",
            "-..": "shortdashdotdot",
            ". ": "dot",
            "- ": "dash",
            "--": "longdash",
            "- .": "dashdot",
            "--.": "longdashdot",
            "--..": "longdashdotdot"
          };
          I.dashstyle = Y[e](s["stroke-dasharray"]) ? Y[s["stroke-dasharray"]] : d
        }
        H && f.appendChild(I)
      }
      if ("text" == y.type)
      {
        y.paper.canvas.style.display = d;
        var G = y.paper.span,
          X = 100,
          $ = h.font && h.font.match(/\d+(?:\.\d*)?(?=px)/);
        g = G.style, h.font && (g.font = h.font), h["font-family"] && (g.fontFamily = h["font-family"]), h["font-weight"] && (g.fontWeight = h["font-weight"]), h["font-style"] && (g.fontStyle = h["font-style"]), $ = r(h["font-size"] || $ && $[0]) || 10, g.fontSize = $ * X + "px", y.textpath.string && (G.innerHTML = n(y.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
        var Z = G.getBoundingClientRect();
        y.W = h.w = (Z.right - Z.left) / X, y.H = h.h = (Z.bottom - Z.top) / X, y.X = h.x, y.Y = h.y + y.H / 2, ("x" in s || "y" in s) && (y.path.v = t.format("m{0},{1}l{2},{1}", a(h.x * b), a(h.y * b), a(h.x * b) + 1));
        for (var W = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], J = 0, K = W.length; K > J; J++)
          if (W[J] in s)
          {
            y._.dirty = 1;
            break
          }
        switch (h["text-anchor"])
        {
        case "start":
          y.textpath.style["v-text-align"] = "left", y.bbx = y.W / 2;
          break;
        case "end":
          y.textpath.style["v-text-align"] = "right", y.bbx = -y.W / 2;
          break;
        default:
          y.textpath.style["v-text-align"] = "center", y.bbx = 0
        }
        y.textpath.style["v-text-kern"] = !0
      }
    }, C = function (e, a, o)
    {
      e.attrs = e.attrs ||
      {};
      var u = (e.attrs, Math.pow),
        s = "linear",
        l = ".5 .5";
      if (e.attrs.gradient = a, a = n(a).replace(t._radial_gradient, function (t, e, n)
      {
        return s = "radial", e && n && (e = r(e), n = r(n), u(e - .5, 2) + u(n - .5, 2) > .25 && (n = i.sqrt(.25 - u(e - .5, 2)) * (2 * (n > .5) - 1) + .5), l = e + p + n), d
      }), a = a.split(/\s*\-\s*/), "linear" == s)
      {
        var c = a.shift();
        if (c = -r(c), isNaN(c)) return null
      }
      var f = t._parseDots(a);
      if (!f) return null;
      if (e = e.shape || e.node, f.length)
      {
        e.removeChild(o), o.on = !0, o.method = "none", o.color = f[0].color, o.color2 = f[f.length - 1].color;
        for (var h = [], g = 0, m = f.length; m > g; g++) f[g].offset && h.push(f[g].offset + p + f[g].color);
        o.colors = h.length ? h.join() : "0% " + o.color, "radial" == s ? (o.type = "gradientTitle", o.focus = "100%", o.focussize = "0 0", o.focusposition = l, o.angle = 0) : (o.type = "gradient", o.angle = (270 - c) % 360), e.appendChild(o)
      }
      return 1
    }, E = function (e, n)
    {
      this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = n, this.matrix = t.matrix(), this._ = {
        transform: [],
        sx: 1,
        sy: 1,
        dx: 0,
        dy: 0,
        deg: 0,
        dirty: 1,
        dirtyT: 1
      }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null
    }, T = t.el;
  E.prototype = T, T.constructor = E, T.transform = function (e)
  {
    if (null == e) return this._.transform;
    var r, i = this.paper._viewBoxShift,
      a = i ? "s" + [i.scale, i.scale] + "-1-1t" + [i.dx, i.dy] : d;
    i && (r = e = n(e).replace(/\.{3}|\u2026/g, this._.transform || d)), t._extractTransform(this, a + e);
    var o, u = this.matrix.clone(),
      s = this.skew,
      l = this.node,
      c = ~n(this.attrs.fill).indexOf("-"),
      f = !n(this.attrs.fill).indexOf("url(");
    if (u.translate(-.5, -.5), f || c || "image" == this.type)
      if (s.matrix = "1 0 0 1", s.offset = "0 0", o = u.split(), c && o.noRotation || !o.isSimple)
      {
        l.style.filter = u.toFilter();
        var h = this.getBBox(),
          g = this.getBBox(1),
          m = h.x - g.x,
          v = h.y - g.y;
        l.coordorigin = m * -b + p + v * -b, S(this, 1, 1, m, v, 0)
      }
      else l.style.filter = d, S(this, o.scalex, o.scaley, o.dx, o.dy, o.rotate);
      else l.style.filter = d, s.matrix = n(u), s.offset = u.offset();
    return r && (this._.transform = r), this
  }, T.rotate = function (t, e, i)
  {
    if (this.removed) return this;
    if (null != t)
    {
      if (t = n(t).split(c), t.length - 1 && (e = r(t[1]), i = r(t[2])), t = r(t[0]), null == i && (e = i), null == e || null == i)
      {
        var a = this.getBBox(1);
        e = a.x + a.width / 2, i = a.y + a.height / 2
      }
      return this._.dirtyT = 1, this.transform(this._.transform.concat([
        ["r", t, e, i]
      ])), this
    }
  }, T.translate = function (t, e)
  {
    return this.removed ? this : (t = n(t).split(c), t.length - 1 && (e = r(t[1])), t = r(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([
      ["t", t, e]
    ])), this)
  }, T.scale = function (t, e, i, a)
  {
    if (this.removed) return this;
    if (t = n(t).split(c), t.length - 1 && (e = r(t[1]), i = r(t[2]), a = r(t[3]), isNaN(i) && (i = null), isNaN(a) && (a = null)), t = r(t[0]), null == e && (e = t), null == a && (i = a), null == i || null == a) var o = this.getBBox(1);
    return i = null == i ? o.x + o.width / 2 : i, a = null == a ? o.y + o.height / 2 : a, this.transform(this._.transform.concat([
      ["s", t, e, i, a]
    ])), this._.dirtyT = 1, this
  }, T.hide = function ()
  {
    return !this.removed && (this.node.style.display = "none"), this
  }, T.show = function ()
  {
    return !this.removed && (this.node.style.display = d), this
  }, T._getBBox = function ()
  {
    return this.removed ?
    {} :
    {
      x: this.X + (this.bbx || 0) - this.W / 2,
      y: this.Y - this.H,
      width: this.W,
      height: this.H
    }
  }, T.remove = function ()
  {
    if (!this.removed && this.node.parentNode)
    {
      this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
      for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
      this.removed = !0
    }
  }, T.attr = function (n, r)
  {
    if (this.removed) return this;
    if (null == n)
    {
      var i = {};
      for (var a in this.attrs) this.attrs[e](a) && (i[a] = this.attrs[a]);
      return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
    }
    if (null == r && t.is(n, "string"))
    {
      if (n == l && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
      for (var o = n.split(c), u = {}, s = 0, h = o.length; h > s; s++) n = o[s], u[n] = n in this.attrs ? this.attrs[n] : t.is(this.paper.customAttributes[n], "function") ? this.paper.customAttributes[n].def : t._availableAttrs[n];
      return h - 1 ? u : u[o[0]]
    }
    if (this.attrs && null == r && t.is(n, "array"))
    {
      for (u = {}, s = 0, h = n.length; h > s; s++) u[n[s]] = this.attr(n[s]);
      return u
    }
    var p;
    null != r && (p = {}, p[n] = r), null == r && t.is(n, "object") && (p = n);
    for (var d in p) f("raphael.attr." + d + "." + this.id, this, p[d]);
    if (p)
    {
      for (d in this.paper.customAttributes)
        if (this.paper.customAttributes[e](d) && p[e](d) && t.is(this.paper.customAttributes[d], "function"))
        {
          var g = this.paper.customAttributes[d].apply(this, [].concat(p[d]));
          this.attrs[d] = p[d];
          for (var m in g) g[e](m) && (p[m] = g[m])
        }
      p.text && "text" == this.type && (this.textpath.string = p.text), A(this, p)
    }
    return this
  }, T.toFront = function ()
  {
    return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), this
  }, T.toBack = function ()
  {
    return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper)), this)
  }, T.insertAfter = function (e)
  {
    return this.removed ? this : (e.constructor == t.st.constructor && (e = e[e.length - 1]), e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this)
  }, T.insertBefore = function (e)
  {
    return this.removed ? this : (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), t._insertbefore(this, e, this.paper), this)
  }, T.blur = function (e)
  {
    var n = this.node.runtimeStyle,
      r = n.filter;
    r = r.replace(v, d), 0 !== +e ? (this.attrs.blur = e, n.filter = r + p + h + ".Blur(pixelradius=" + (+e || 1.5) + ")", n.margin = t.format("-{0}px 0 0 -{0}px", a(+e || 1.5))) : (n.filter = r, n.margin = 0, delete this.attrs.blur)
  }, t._engine.path = function (t, e)
  {
    var n = B("shape");
    n.style.cssText = x, n.coordsize = b + p + b, n.coordorigin = e.coordorigin;
    var r = new E(n, e),
      i = {
        fill: "none",
        stroke: "#000"
      };
    t && (i.path = t), r.type = "path", r.path = [], r.Path = d, A(r, i), e.canvas.appendChild(n);
    var a = B("skew");
    return a.on = !0, n.appendChild(a), r.skew = a, r.transform(d), r
  }, t._engine.rect = function (e, n, r, i, a, o)
  {
    var u = t._rectPath(n, r, i, a, o),
      s = e.path(u),
      l = s.attrs;
    return s.X = l.x = n, s.Y = l.y = r, s.W = l.width = i, s.H = l.height = a, l.r = o, l.path = u, s.type = "rect", s
  }, t._engine.ellipse = function (t, e, n, r, i)
  {
    var a = t.path();
    return a.attrs, a.X = e - r, a.Y = n - i, a.W = 2 * r, a.H = 2 * i, a.type = "ellipse", A(a,
    {
      cx: e,
      cy: n,
      rx: r,
      ry: i
    }), a
  }, t._engine.circle = function (t, e, n, r)
  {
    var i = t.path();
    return i.attrs, i.X = e - r, i.Y = n - r, i.W = i.H = 2 * r, i.type = "circle", A(i,
    {
      cx: e,
      cy: n,
      r: r
    }), i
  }, t._engine.image = function (e, n, r, i, a, o)
  {
    var u = t._rectPath(r, i, a, o),
      s = e.path(u).attr(
      {
        stroke: "none"
      }),
      c = s.attrs,
      f = s.node,
      h = f.getElementsByTagName(l)[0];
    return c.src = n, s.X = c.x = r, s.Y = c.y = i, s.W = c.width = a, s.H = c.height = o, c.path = u, s.type = "image", h.parentNode == f && f.removeChild(h), h.rotate = !0, h.src = n, h.type = "tile", s._.fillpos = [r, i], s._.fillsize = [a, o], f.appendChild(h), S(s, 1, 1, 0, 0, 0), s
  }, t._engine.text = function (e, r, i, o)
  {
    var u = B("shape"),
      s = B("path"),
      l = B("textpath");
    r = r || 0, i = i || 0, o = o || "", s.v = t.format("m{0},{1}l{2},{1}", a(r * b), a(i * b), a(r * b) + 1), s.textpathok = !0, l.string = n(o), l.on = !0, u.style.cssText = x, u.coordsize = b + p + b, u.coordorigin = "0 0";
    var c = new E(u, e),
      f = {
        fill: "#000",
        stroke: "none",
        font: t._availableAttrs.font,
        text: o
      };
    c.shape = u, c.path = s, c.textpath = l, c.type = "text", c.attrs.text = n(o), c.attrs.x = r, c.attrs.y = i, c.attrs.w = 1, c.attrs.h = 1, A(c, f), u.appendChild(l), u.appendChild(s), e.canvas.appendChild(u);
    var h = B("skew");
    return h.on = !0, u.appendChild(h), c.skew = h, c.transform(d), c
  }, t._engine.setSize = function (e, n)
  {
    var r = this.canvas.style;
    return this.width = e, this.height = n, e == +e && (e += "px"), n == +n && (n += "px"), r.width = e, r.height = n, r.clip = "rect(0 " + e + " " + n + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), this
  }, t._engine.setViewBox = function (e, n, r, i, a)
  {
    t.eve("raphael.setViewBox", this, this._viewBox, [e, n, r, i, a]);
    var u, s, l = this.width,
      c = this.height,
      f = 1 / o(r / l, i / c);
    return a && (u = c / i, s = l / r, l > r * u && (e -= (l - r * u) / 2 / u), c > i * s && (n -= (c - i * s) / 2 / s)), this._viewBox = [e, n, r, i, !! a], this._viewBoxShift = {
      dx: -e,
      dy: -n,
      scale: f
    }, this.forEach(function (t)
    {
      t.transform("...")
    }), this
  };
  var B;
  t._engine.initWin = function (t)
  {
    var e = t.document;
    e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
    try
    {
      !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), B = function (t)
      {
        return e.createElement("<rvml:" + t + ' class="rvml">')
      }
    }
    catch (n)
    {
      B = function (t)
      {
        return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
      }
    }
  }, t._engine.initWin(t._g.win), t._engine.create = function ()
  {
    var e = t._getContainer.apply(0, arguments),
      n = e.container,
      r = e.height,
      i = e.width,
      a = e.x,
      o = e.y;
    if (!n) throw Error("VML container not found.");
    var u = new t._Paper,
      s = u.canvas = t._g.doc.createElement("div"),
      l = s.style;
    return a = a || 0, o = o || 0, i = i || 512, r = r || 342, u.width = i, u.height = r, i == +i && (i += "px"), r == +r && (r += "px"), u.coordsize = 1e3 * b + p + 1e3 * b, u.coordorigin = "0 0", u.span = t._g.doc.createElement("span"), u.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", s.appendChild(u.span), l.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", i, r), 1 == n ? (t._g.doc.body.appendChild(s), l.left = a + "px", l.top = o + "px", l.position = "absolute") : n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s), u.renderfix = function () {}, u
  }, t.prototype.clear = function ()
  {
    t.eve("raphael.clear", this), this.canvas.innerHTML = d, this.span = t._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
  }, t.prototype.remove = function ()
  {
    t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
    for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
    return !0
  };
  var L = t.st;
  for (var z in T) T[e](z) && !L[e](z) && (L[z] = function (t)
  {
    return function ()
    {
      var e = arguments;
      return this.forEach(function (n)
      {
        n[t].apply(n, e)
      })
    }
  }(z))
}(window.Raphael),
function (t, e)
{
  function n(t, e, n, r)
  {
    n = n || [], e = e || C;
    var i, a, o, u, s = e.nodeType;
    if (1 !== s && 9 !== s) return [];
    if (!t || "string" != typeof t) return n;
    if (o = b(e), !o && !r && (i = Z.exec(t)))
      if (u = i[1])
      {
        if (9 === s)
        {
          if (a = e.getElementById(u), !a || !a.parentNode) return n;
          if (a.id === u) return n.push(a), n
        }
        else if (e.ownerDocument && (a = e.ownerDocument.getElementById(u)) && _(e, a) && a.id === u) return n.push(a), n
      }
      else
      {
        if (i[2]) return L.apply(n, B.call(e.getElementsByTagName(t), 0)), n;
        if ((u = i[3]) && oe && e.getElementsByClassName) return L.apply(n, B.call(e.getElementsByClassName(u), 0)), n
      }
    return d(t, e, n, r, o)
  }

  function r(t)
  {
    return function (e)
    {
      var n = e.nodeName.toLowerCase();
      return "input" === n && e.type === t
    }
  }

  function i(t)
  {
    return function (e)
    {
      var n = e.nodeName.toLowerCase();
      return ("input" === n || "button" === n) && e.type === t
    }
  }

  function a(t, e, n)
  {
    if (t === e) return n;
    for (var r = t.nextSibling; r;)
    {
      if (r === e) return -1;
      r = r.nextSibling
    }
    return 1
  }

  function o(t, e, r, i)
  {
    var a, o, u, s, l, c, f, h, p, d, g = !r && e !== C,
      m = (g ? "<s>" : "") + t.replace(Y, "$1<s>"),
      v = D[A][m];
    if (v) return i ? 0 : B.call(v, 0);
    for (l = t, c = [], h = 0, p = y.preFilter, d = y.filter; l;)
    {
      (!a || (o = G.exec(l))) && (o && (l = l.slice(o[0].length), u.selector = f), c.push(u = []), f = "", g && (l = " " + l)), a = !1, (o = X.exec(l)) && (f += o[0], l = l.slice(o[0].length), a = u.push(
      {
        part: o.pop().replace(Y, " "),
        string: o[0],
        captures: o
      }));
      for (s in d)!(o = ee[s].exec(l)) || p[s] && !(o = p[s](o, e, r)) || (f += o[0], l = l.slice(o[0].length), a = u.push(
      {
        part: s,
        string: o.shift(),
        captures: o
      }));
      if (!a) break
    }
    return f && (u.selector = f), i ? l.length : l ? n.error(t) : B.call(D(m, c), 0)
  }

  function u(t, e, n, r)
  {
    var i = e.dir,
      a = T++;
    return t || (t = function (t)
    {
      return t === n
    }), e.first ? function (e)
    {
      for (; e = e[i];)
        if (1 === e.nodeType) return t(e) && e
    } : r ? function (e)
    {
      for (; e = e[i];)
        if (1 === e.nodeType && t(e)) return e
    } : function (e)
    {
      for (var n, r = a + "." + g, o = r + "." + m; e = e[i];)
        if (1 === e.nodeType)
        {
          if ((n = e[A]) === o) return e.sizset;
          if ("string" == typeof n && 0 === n.indexOf(r))
          {
            if (e.sizset) return e
          }
          else
          {
            if (e[A] = o, t(e)) return e.sizset = !0, e;
            e.sizset = !1
          }
        }
    }
  }

  function s(t, e)
  {
    return t ? function (n)
    {
      var r = e(n);
      return r && t(r === !0 ? n : r)
    } : e
  }

  function l(t, e, n)
  {
    for (var r, i, a = 0; r = t[a]; a++) i = y.relative[r.part] ? u(i, y.relative[r.part], e, n) : s(i, y.filter[r.part].apply(null, r.captures.concat(e, n)));
    return i
  }

  function c(t)
  {
    return function (e)
    {
      for (var n, r = 0; n = t[r]; r++)
        if (n(e)) return !0;
      return !1
    }
  }

  function f(t, e, r, i)
  {
    for (var a = 0, o = e.length; o > a; a++) n(t, e[a], r, i)
  }

  function h(t, e, r, i, a, o)
  {
    var u, s = y.setFilters[e.toLowerCase()];
    return s || n.error(e), (t || !(u = a)) && f(t || "*", i, u = [], a), u.length > 0 ? s(u, r, o) : []
  }

  function p(t, r, i, a)
  {
    for (var o, u, s, l, c, p, d, g, m, v, y, x, b, _ = 0, w = t.length, M = ee.POS, k = RegExp("^" + M.source + "(?!" + q + ")", "i"), S = function ()
      {
        for (var t = 1, n = arguments.length - 2; n > t; t++) arguments[t] === e && (m[t] = e)
      }; w > _; _++)
    {
      for (o = t[_], u = "", g = a, s = 0, l = o.length; l > s; s++)
      {
        if (c = o[s], p = c.string, "PSEUDO" === c.part)
          for (M.exec(""), d = 0; m = M.exec(p);) v = !0, y = M.lastIndex = m.index + m[0].length, y > d && (u += p.slice(d, m.index), d = y, x = [r], X.test(u) && (g && (x = g), g = a), (b = J.test(u)) && (u = u.slice(0, -5).replace(X, "$&*"), d++), m.length > 1 && m[0].replace(k, S), g = h(u, m[1], m[2], x, g, b)), u = "";
        v || (u += p), v = !1
      }
      u ? X.test(u) ? f(u, g || [r], i, a) : n(u, r, i, a ? a.concat(g) : g) : L.apply(i, g)
    }
    return 1 === w ? i : n.uniqueSort(i)
  }

  function d(t, e, n, r, i)
  {
    t = t.replace(Y, "$1");
    var a, u, s, l, c, f, h, d, v, x = o(t, e, i),
      b = e.nodeType;
    if (ee.POS.test(t)) return p(x, e, n, r);
    if (r) a = B.call(r, 0);
    else if (1 === x.length)
    {
      if ((c = B.call(x[0], 0)).length > 2 && "ID" === (f = c[0]).part && 9 === b && !i && y.relative[c[1].part])
      {
        if (e = y.find.ID(f.captures[0].replace(te, ""), e, i)[0], !e) return n;
        t = t.slice(c.shift().string.length)
      }
      for (d = (x = W.exec(c[0].string)) && !x.index && e.parentNode || e, h = "", l = c.length - 1; l >= 0 && (f = c[l], v = f.part, h = f.string + h, !y.relative[v]); l--)
        if (y.order.test(v))
        {
          if (a = y.find[v](f.captures[0].replace(te, ""), d, i), null == a) continue;
          t = t.slice(0, t.length - h.length) + h.replace(ee[v], ""), t || L.apply(n, B.call(a, 0));
          break
        }
    }
    if (t)
      for (u = w(t, e, i), g = u.dirruns++, null == a && (a = y.find.TAG("*", W.test(t) && e.parentNode || e)), l = 0; s = a[l]; l++) m = u.runs++, u(s) && n.push(s);
    return n
  }
  var g, m, v, y, x, b, _, w, M, k, S = !0,
    N = "undefined",
    A = ("sizcache" + Math.random()).replace(".", ""),
    C = t.document,
    E = C.documentElement,
    T = 0,
    B = [].slice,
    L = [].push,
    z = function (t, e)
    {
      return t[A] = e || !0, t
    }, P = function ()
    {
      var t = {}, e = [];
      return z(function (n, r)
      {
        return e.push(n) > y.cacheLength && delete t[e.shift()], t[n] = r
      }, t)
    }, j = P(),
    D = P(),
    F = P(),
    q = "[\\x20\\t\\r\\n\\f]",
    R = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
    O = R.replace("w", "w#"),
    I = "([*^$|!~]?=)",
    H = "\\[" + q + "*(" + R + ")" + q + "*(?:" + I + q + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + q + "*\\]",
    U = ":(" + R + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + H + ")|[^:]|\\\\.)*|.*))\\)|)",
    V = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",
    Y = RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
    G = RegExp("^" + q + "*," + q + "*"),
    X = RegExp("^" + q + "*([\\x20\\t\\r\\n\\f>+~])" + q + "*"),
    $ = RegExp(U),
    Z = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
    W = /[\x20\t\r\n\f]*[+~]/,
    J = /:not\($/,
    K = /h\d/i,
    Q = /input|select|textarea|button/i,
    te = /\\(?!\\)/g,
    ee = {
      ID: RegExp("^#(" + R + ")"),
      CLASS: RegExp("^\\.(" + R + ")"),
      NAME: RegExp("^\\[name=['\"]?(" + R + ")['\"]?\\]"),
      TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
      ATTR: RegExp("^" + H),
      PSEUDO: RegExp("^" + U),
      CHILD: RegExp("^:(only|nth|last|first)-child(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
      POS: RegExp(V, "ig"),
      needsContext: RegExp("^" + q + "*[>+~]|" + V, "i")
    }, ne = function (t)
    {
      var e = C.createElement("div");
      try
      {
        return t(e)
      }
      catch (n)
      {
        return !1
      }
      finally
      {
        e = null
      }
    }, re = ne(function (t)
    {
      return t.appendChild(C.createComment("")), !t.getElementsByTagName("*").length
    }),
    ie = ne(function (t)
    {
      return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== N && "#" === t.firstChild.getAttribute("href")
    }),
    ae = ne(function (t)
    {
      t.innerHTML = "<select></select>";
      var e = typeof t.lastChild.getAttribute("multiple");
      return "boolean" !== e && "string" !== e
    }),
    oe = ne(function (t)
    {
      return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", t.getElementsByClassName && t.getElementsByClassName("e").length ? (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length) : !1
    }),
    ue = ne(function (t)
    {
      t.id = A + 0, t.innerHTML = "<a name='" + A + "'></a><div name='" + A + "'></div>", E.insertBefore(t, E.firstChild);
      var e = C.getElementsByName && C.getElementsByName(A).length === 2 + C.getElementsByName(A + 0).length;
      return v = !C.getElementById(A), E.removeChild(t), e
    });
  try
  {
    B.call(E.childNodes, 0)[0].nodeType
  }
  catch (se)
  {
    B = function (t)
    {
      for (var e, n = []; e = this[t]; t++) n.push(e);
      return n
    }
  }
  n.matches = function (t, e)
  {
    return n(t, null, null, e)
  }, n.matchesSelector = function (t, e)
  {
    return n(e, null, null, [t]).length > 0
  }, x = n.getText = function (t)
  {
    var e, n = "",
      r = 0,
      i = t.nodeType;
    if (i)
    {
      if (1 === i || 9 === i || 11 === i)
      {
        if ("string" == typeof t.textContent) return t.textContent;
        for (t = t.firstChild; t; t = t.nextSibling) n += x(t)
      }
      else if (3 === i || 4 === i) return t.nodeValue
    }
    else
      for (; e = t[r]; r++) n += x(e);
    return n
  }, b = n.isXML = function b(t)
  {
    var e = t && (t.ownerDocument || t).documentElement;
    return e ? "HTML" !== e.nodeName : !1
  }, _ = n.contains = E.contains ? function (t, e)
  {
    var n = 9 === t.nodeType ? t.documentElement : t,
      r = e && e.parentNode;
    return t === r || !! (r && 1 === r.nodeType && n.contains && n.contains(r))
  } : E.compareDocumentPosition ? function (t, e)
  {
    return e && !! (16 & t.compareDocumentPosition(e))
  } : function (t, e)
  {
    for (; e = e.parentNode;)
      if (e === t) return !0;
    return !1
  }, n.attr = function (t, e)
  {
    var n, r = b(t);
    return r || (e = e.toLowerCase()), y.attrHandle[e] ? y.attrHandle[e](t) : ae || r ? t.getAttribute(e) : (n = t.getAttributeNode(e), n ? "boolean" == typeof t[e] ? t[e] ? e : null : n.specified ? n.value : null : null)
  }, y = n.selectors = {
    cacheLength: 50,
    createPseudo: z,
    match: ee,
    order: RegExp("ID|TAG" + (ue ? "|NAME" : "") + (oe ? "|CLASS" : "")),
    attrHandle: ie ?
    {} :
    {
      href: function (t)
      {
        return t.getAttribute("href", 2)
      },
      type: function (t)
      {
        return t.getAttribute("type")
      }
    },
    find:
    {
      ID: v ? function (t, e, n)
      {
        if (typeof e.getElementById !== N && !n)
        {
          var r = e.getElementById(t);
          return r && r.parentNode ? [r] : []
        }
      } : function (t, n, r)
      {
        if (typeof n.getElementById !== N && !r)
        {
          var i = n.getElementById(t);
          return i ? i.id === t || typeof i.getAttributeNode !== N && i.getAttributeNode("id").value === t ? [i] : e : []
        }
      },
      TAG: re ? function (t, n)
      {
        return typeof n.getElementsByTagName !== N ? n.getElementsByTagName(t) : e
      } : function (t, e)
      {
        var n = e.getElementsByTagName(t);
        if ("*" === t)
        {
          for (var r, i = [], a = 0; r = n[a]; a++) 1 === r.nodeType && i.push(r);
          return i
        }
        return n
      },
      NAME: function (t, n)
      {
        return typeof n.getElementsByName !== N ? n.getElementsByName(name) : e
      },
      CLASS: function (t, n, r)
      {
        return typeof n.getElementsByClassName === N || r ? e : n.getElementsByClassName(t)
      }
    },
    relative:
    {
      ">":
      {
        dir: "parentNode",
        first: !0
      },
      " ":
      {
        dir: "parentNode"
      },
      "+":
      {
        dir: "previousSibling",
        first: !0
      },
      "~":
      {
        dir: "previousSibling"
      }
    },
    preFilter:
    {
      ATTR: function (t)
      {
        return t[1] = t[1].replace(te, ""), t[3] = (t[4] || t[5] || "").replace(te, ""), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
      },
      CHILD: function (t)
      {
        return t[1] = t[1].toLowerCase(), "nth" === t[1] ? (t[2] || n.error(t[0]), t[3] = +(t[3] ? t[4] + (t[5] || 1) : 2 * ("even" === t[2] || "odd" === t[2])), t[4] = +(t[6] + t[7] || "odd" === t[2])) : t[2] && n.error(t[0]), t
      },
      PSEUDO: function (t, e, n)
      {
        var r, i;
        return ee.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[3] : (r = t[4]) && ($.test(r) && (i = o(r, e, n, !0)) && (i = r.indexOf(")", r.length - i) - r.length) && (r = r.slice(0, i), t[0] = t[0].slice(0, i)), t[2] = r), t.slice(0, 3))
      }
    },
    filter:
    {
      ID: v ? function (t)
      {
        return t = t.replace(te, ""),
        function (e)
        {
          return e.getAttribute("id") === t
        }
      } : function (t)
      {
        return t = t.replace(te, ""),
        function (e)
        {
          var n = typeof e.getAttributeNode !== N && e.getAttributeNode("id");
          return n && n.value === t
        }
      },
      TAG: function (t)
      {
        return "*" === t ? function ()
        {
          return !0
        } : (t = t.replace(te, "").toLowerCase(), function (e)
        {
          return e.nodeName && e.nodeName.toLowerCase() === t
        })
      },
      CLASS: function (t)
      {
        var e = j[A][t];
        return e || (e = j(t, RegExp("(^|" + q + ")" + t + "(" + q + "|$)"))),
        function (t)
        {
          return e.test(t.className || typeof t.getAttribute !== N && t.getAttribute("class") || "")
        }
      },
      ATTR: function (t, e, r)
      {
        return e ? function (i)
        {
          var a = n.attr(i, t),
            o = a + "";
          if (null == a) return "!=" === e;
          switch (e)
          {
          case "=":
            return o === r;
          case "!=":
            return o !== r;
          case "^=":
            return r && 0 === o.indexOf(r);
          case "*=":
            return r && o.indexOf(r) > -1;
          case "$=":
            return r && o.substr(o.length - r.length) === r;
          case "~=":
            return (" " + o + " ").indexOf(r) > -1;
          case "|=":
            return o === r || o.substr(0, r.length + 1) === r + "-"
          }
        } : function (e)
        {
          return null != n.attr(e, t)
        }
      },
      CHILD: function (t, e, n, r)
      {
        if ("nth" === t)
        {
          var i = T++;
          return function (t)
          {
            var e, a, o = 0,
              u = t;
            if (1 === n && 0 === r) return !0;
            if (e = t.parentNode, e && (e[A] !== i || !t.sizset))
            {
              for (u = e.firstChild; u && (1 !== u.nodeType || (u.sizset = ++o, u !== t)); u = u.nextSibling);
              e[A] = i
            }
            return a = t.sizset - r, 0 === n ? 0 === a : 0 === a % n && a / n >= 0
          }
        }
        return function (e)
        {
          var n = e;
          switch (t)
          {
          case "only":
          case "first":
            for (; n = n.previousSibling;)
              if (1 === n.nodeType) return !1;
            if ("first" === t) return !0;
            n = e;
          case "last":
            for (; n = n.nextSibling;)
              if (1 === n.nodeType) return !1;
            return !0
          }
        }
      },
      PSEUDO: function (t, e, r, i)
      {
        var a, o = y.pseudos[t] || y.pseudos[t.toLowerCase()];
        return o || n.error("unsupported pseudo: " + t), o[A] ? o(e, r, i) : o.length > 1 ? (a = [t, t, "", e], function (t)
        {
          return o(t, 0, a)
        }) : o
      }
    },
    pseudos:
    {
      not: z(function (t, e, n)
      {
        var r = w(t.replace(Y, "$1"), e, n);
        return function (t)
        {
          return !r(t)
        }
      }),
      enabled: function (t)
      {
        return t.disabled === !1
      },
      disabled: function (t)
      {
        return t.disabled === !0
      },
      checked: function (t)
      {
        var e = t.nodeName.toLowerCase();
        return "input" === e && !! t.checked || "option" === e && !! t.selected
      },
      selected: function (t)
      {
        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
      },
      parent: function (t)
      {
        return !y.pseudos.empty(t)
      },
      empty: function (t)
      {
        var e;
        for (t = t.firstChild; t;)
        {
          if (t.nodeName > "@" || 3 === (e = t.nodeType) || 4 === e) return !1;
          t = t.nextSibling
        }
        return !0
      },
      contains: z(function (t)
      {
        return function (e)
        {
          return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
        }
      }),
      has: z(function (t)
      {
        return function (e)
        {
          return n(t, e).length > 0
        }
      }),
      header: function (t)
      {
        return K.test(t.nodeName)
      },
      text: function (t)
      {
        var e, n;
        return "input" === t.nodeName.toLowerCase() && "text" === (e = t.type) && (null == (n = t.getAttribute("type")) || n.toLowerCase() === e)
      },
      radio: r("radio"),
      checkbox: r("checkbox"),
      file: r("file"),
      password: r("password"),
      image: r("image"),
      submit: i("submit"),
      reset: i("reset"),
      button: function (t)
      {
        var e = t.nodeName.toLowerCase();
        return "input" === e && "button" === t.type || "button" === e
      },
      input: function (t)
      {
        return Q.test(t.nodeName)
      },
      focus: function (t)
      {
        var e = t.ownerDocument;
        return !(t !== e.activeElement || e.hasFocus && !e.hasFocus() || !t.type && !t.href)
      },
      active: function (t)
      {
        return t === t.ownerDocument.activeElement
      }
    },
    setFilters:
    {
      first: function (t, e, n)
      {
        return n ? t.slice(1) : [t[0]]
      },
      last: function (t, e, n)
      {
        var r = t.pop();
        return n ? t : [r]
      },
      even: function (t, e, n)
      {
        for (var r = [], i = n ? 1 : 0, a = t.length; a > i; i += 2) r.push(t[i]);
        return r
      },
      odd: function (t, e, n)
      {
        for (var r = [], i = n ? 0 : 1, a = t.length; a > i; i += 2) r.push(t[i]);
        return r
      },
      lt: function (t, e, n)
      {
        return n ? t.slice(+e) : t.slice(0, +e)
      },
      gt: function (t, e, n)
      {
        return n ? t.slice(0, +e + 1) : t.slice(+e + 1)
      },
      eq: function (t, e, n)
      {
        var r = t.splice(+e, 1);
        return n ? t : r
      }
    }
  }, M = E.compareDocumentPosition ? function (t, e)
  {
    return t === e ? (k = !0, 0) : (t.compareDocumentPosition && e.compareDocumentPosition ? 4 & t.compareDocumentPosition(e) : t.compareDocumentPosition) ? -1 : 1
  } : function (t, e)
  {
    if (t === e) return k = !0, 0;
    if (t.sourceIndex && e.sourceIndex) return t.sourceIndex - e.sourceIndex;
    var n, r, i = [],
      o = [],
      u = t.parentNode,
      s = e.parentNode,
      l = u;
    if (u === s) return a(t, e);
    if (!u) return -1;
    if (!s) return 1;
    for (; l;) i.unshift(l), l = l.parentNode;
    for (l = s; l;) o.unshift(l), l = l.parentNode;
    n = i.length, r = o.length;
    for (var c = 0; n > c && r > c; c++)
      if (i[c] !== o[c]) return a(i[c], o[c]);
    return c === n ? a(t, o[c], -1) : a(i[c], e, 1)
  }, [0, 0].sort(M), S = !k, n.uniqueSort = function (t)
  {
    var e, n = 1;
    if (k = S, t.sort(M), k)
      for (; e = t[n]; n++) e === t[n - 1] && t.splice(n--, 1);
    return t
  }, n.error = function (t)
  {
    throw Error("Syntax error, unrecognized expression: " + t)
  }, w = n.compile = function (t, e, n)
  {
    var r, i, a, u = F[A][t];
    if (u && u.context === e) return u;
    for (r = o(t, e, n), i = 0, a = r.length; a > i; i++) r[i] = l(r[i], e, n);
    return u = F(t, c(r)), u.context = e, u.runs = u.dirruns = 0, u
  }, C.querySelectorAll && function ()
  {
    var t, e = d,
      r = /'|\\/g,
      i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
      a = [":focus"],
      u = [":active", ":focus"],
      s = E.matchesSelector || E.mozMatchesSelector || E.webkitMatchesSelector || E.oMatchesSelector || E.msMatchesSelector;
    ne(function (t)
    {
      t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || a.push("\\[" + q + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || a.push(":checked")
    }), ne(function (t)
    {
      t.innerHTML = "<p test=''></p>", t.querySelectorAll("[test^='']").length && a.push("[*^$]=" + q + "*(?:\"\"|'')"), t.innerHTML = "<input type='hidden'/>", t.querySelectorAll(":enabled").length || a.push(":enabled", ":disabled")
    }), a = RegExp(a.join("|")), d = function (t, n, i, u, s)
    {
      if (!(u || s || a && a.test(t)))
        if (9 === n.nodeType) try
        {
          return L.apply(i, B.call(n.querySelectorAll(t), 0)), i
        }
        catch (l)
        {}
        else if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase())
      {
        var c, f, h, p = n.getAttribute("id"),
          d = p || A,
          g = W.test(t) && n.parentNode || n;
        for (p ? d = d.replace(r, "\\$&") : n.setAttribute("id", d), c = o(t, n, s), d = "[id='" + d + "']", f = 0, h = c.length; h > f; f++) c[f] = d + c[f].selector;
        try
        {
          return L.apply(i, B.call(g.querySelectorAll(c.join(",")), 0)), i
        }
        catch (l)
        {}
        finally
        {
          p || n.removeAttribute("id")
        }
      }
      return e(t, n, i, u, s)
    }, s && (ne(function (e)
    {
      t = s.call(e, "div");
      try
      {
        s.call(e, "[test!='']:sizzle"), u.push(ee.PSEUDO.source, ee.POS.source, "!=")
      }
      catch (n)
      {}
    }), u = RegExp(u.join("|")), n.matchesSelector = function (e, r)
    {
      if (r = r.replace(i, "='$1']"), !(b(e) || u.test(r) || a && a.test(r))) try
      {
        var o = s.call(e, r);
        if (o || t || e.document && 11 !== e.document.nodeType) return o
      }
      catch (l)
      {}
      return n(r, null, null, [e]).length > 0
    })
  }(), y.setFilters.nth = y.setFilters.eq, y.filters = y.pseudos, "function" == typeof define && define.amd ? define(function ()
  {
    return n
  }) : t.Sizzle = n
}(window), Array.prototype.map || (Array.prototype.map = function (t, e)
{
  var n, r, i;
  if (null == this) throw new TypeError(" this is null or not defined");
  var a = Object(this),
    o = a.length >>> 0;
  if ("[object Function]" !=
  {}.toString.call(t)) throw new TypeError(t + " is not a function");
  for (e && (n = e), r = Array(o), i = 0; o > i;)
  {
    var u, s;
    i in a && (u = a[i], s = t.call(n, u, i, a), r[i] = s), i++
  }
  return r
}), Array.prototype.forEach || (Array.prototype.forEach = function (t, e)
{
  var n, r;
  if (null == this) throw new TypeError(" this is null or not defined");
  var i = Object(this),
    a = i.length >>> 0;
  if ("[object Function]" !=
  {}.toString.call(t)) throw new TypeError(t + " is not a function");
  for (e && (n = e), r = 0; a > r;)
  {
    var o;
    r in i && (o = i[r], t.call(n, o, r, i)), r++
  }
}), Array.prototype.indexOf || (Array.prototype.indexOf = function (t)
{
  "use strict";
  if (null == this) throw new TypeError;
  var e = Object(this),
    n = e.length >>> 0;
  if (0 === n) return -1;
  var r = 0;
  if (arguments.length > 0 && (r = Number(arguments[1]), r != r ? r = 0 : 0 != r && 1 / 0 != r && r != -1 / 0 && (r = (r > 0 || -1) * Math.floor(Math.abs(r)))), r >= n) return -1;
  for (var i = r >= 0 ? r : Math.max(n - Math.abs(r), 0); n > i; i++)
    if (i in e && e[i] === t) return i;
  return -1
}), Array.prototype.filter || (Array.prototype.filter = function (t)
{
  "use strict";
  if (null == this) throw new TypeError;
  var e = Object(this),
    n = e.length >>> 0;
  if ("function" != typeof t) throw new TypeError;
  for (var r = [], i = arguments[1], a = 0; n > a; a++)
    if (a in e)
    {
      var o = e[a];
      t.call(i, o, a, e) && r.push(o)
    }
  return r
}), Array.prototype.reduce || (Array.prototype.reduce = function (t)
{
  if (null === this || void 0 === this) throw new TypeError("Object is null or undefined");
  var e, n = 0,
    r = this.length >> 0;
  if ("function" != typeof t) throw new TypeError("First argument is not callable");
  if (2 > arguments.length)
  {
    if (0 === r) throw new TypeError("Array length is 0 and no second argument");
    e = this[0], n = 1
  }
  else e = arguments[1];
  for (; r > n;) n in this && (e = t.call(void 0, e, this[n], n, this)), ++n;
  return e
}), String.prototype.trim || (String.prototype.trim = function ()
{
  return this.replace(/^\s+|\s+$/g, "")
}), document.createElementNS || (document.createElementNS = function (t, e)
{
  return document.createElement(e)
}), Object.create || (Object.create = function (t)
{
  function e()
  {}
  if (arguments.length > 1) throw Error("Object.create implementation only accepts the first parameter.");
  return e.prototype = t, new e
}),
function ()
{
  function t(t)
  {
    var e, n, u, l = "json" == t;
    if (l || "json-stringify" == t || "json-parse" == t)
    {
      if ("json-stringify" == t || l)
      {
        if (e = "function" == typeof s.stringify && S)
        {
          (u = function ()
          {
            return 1
          }).toJSON = u;
          try
          {
            e = "0" === s.stringify(0) && "0" === s.stringify(new Number) && '""' == s.stringify(new String) && s.stringify(o) === r && s.stringify(r) === r && s.stringify() === r && "1" === s.stringify(u) && "[1]" == s.stringify([u]) && "[null]" == s.stringify([r]) && "null" == s.stringify(a) && "[null,null,null]" == s.stringify([r, o, a]) && '{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == s.stringify(
            {
              A: [u, i, !1, a, "\0\b\n\f\r  "]
            }) && "1" === s.stringify(a, u) && "[\n 1,\n 2\n]" == s.stringify([1, 2], a, 1) && '"-271821-04-20T00:00:00.000Z"' == s.stringify(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == s.stringify(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == s.stringify(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == s.stringify(new Date(-1))
          }
          catch (c)
          {
            e = !1
          }
        }
        if (!l) return e
      }
      if ("json-parse" == t || l)
      {
        if ("function" == typeof s.parse) try
        {
          if (0 === s.parse("0") && !s.parse(!1) && (u = s.parse('{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'), n = 5 == u.a.length && 1 == u.a[0]))
          {
            try
            {
              n = !s.parse('" "')
            }
            catch (f)
            {}
            if (n) try
            {
              n = 1 != s.parse("01")
            }
            catch (h)
            {}
          }
        }
        catch (p)
        {
          n = !1
        }
        if (!l) return n
      }
      return e && n
    }
  }
  var e, n, r = void 0,
    i = !0,
    a = null,
    o = {}.toString,
    u = "function" == typeof define && define.c,
    s = !u && "object" == typeof exports && exports;
  s || u ? "object" == typeof JSON && JSON ? u ? s = JSON : (s.stringify = JSON.stringify, s.parse = JSON.parse) : u && (s = this.JSON = {}) : s = this.JSON || (this.JSON = {});
  var l, c, f, h, p, d, g, m, v, y, x, b, _, w, M, k, S = new Date(-0xc782b5b800cec);
  try
  {
    S = -109252 == S.getUTCFullYear() && 0 === S.getUTCMonth() && 1 == S.getUTCDate() && 10 == S.getUTCHours() && 37 == S.getUTCMinutes() && 6 == S.getUTCSeconds() && 708 == S.getUTCMilliseconds()
  }
  catch (N)
  {}
  t("json") || (S || (w = Math.floor, M = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], k = function (t, e)
  {
    return M[e] + 365 * (t - 1970) + w((t - 1969 + (e = +(e > 1))) / 4) - w((t - 1901 + e) / 100) + w((t - 1601 + e) / 400)
  }), (e = {}.hasOwnProperty) || (e = function (t)
  {
    var n, r = {};
    return (r.__proto__ = a, r.__proto__ = {
      toString: 1
    }, r).toString != o ? e = function (t)
    {
      var e = this.__proto__,
        t = (this.__proto__ = a, t in this);
      return this.__proto__ = e, t
    } : (n = r.constructor, e = function (t)
    {
      var e = (this.constructor || n).prototype;
      return t in this && !(t in e && this[t] === e[t])
    }), r = a, e.call(this, t)
  }), n = function (t, n)
  {
    var r, i, u, s = 0;
    (r = function ()
    {
      this.valueOf = 0
    }).prototype.valueOf = 0, i = new r;
    for (u in i) e.call(i, u) && s++;
    r = i = a, s ? s = 2 == s ? function (t, n)
    {
      var r, i = {}, a = "[object Function]" == o.call(t);
      for (r in t)!(a && "prototype" == r) && !e.call(i, r) && (i[r] = 1) && e.call(t, r) && n(r)
    } : function (t, n)
    {
      var r, i, a = "[object Function]" == o.call(t);
      for (r in t)!(a && "prototype" == r) && e.call(t, r) && !(i = "constructor" === r) && n(r);
      (i || e.call(t, r = "constructor")) && n(r)
    } : (i = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], s = function (t, n)
    {
      var r, a = "[object Function]" == o.call(t);
      for (r in t)!(a && "prototype" == r) && e.call(t, r) && n(r);
      for (a = i.length; r = i[--a]; e.call(t, r) && n(r));
    }), s(t, n)
  }, t("json-stringify") || (l = {
    "\\": "\\\\",
    '"': '\\"',
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    " ": "\\t"
  }, c = function (t, e)
  {
    return ("000000" + (e || 0)).slice(-t)
  }, f = function (t)
  {
    for (var e, n = '"', r = 0; e = t.charAt(r); r++) n += '\\"\b\f\n\r '.indexOf(e) > -1 ? l[e] : l[e] = " " > e ? "\\u00" + c(2, e.charCodeAt(0).toString(16)) : e;
    return n + '"'
  }, h = function (t, u, s, l, p, d, g)
  {
    var m, v, y, x, b, _, M, S, N, A = u[t];
    if ("object" == typeof A && A)
      if (m = o.call(A), "[object Date]" != m || e.call(A, "toJSON")) "function" == typeof A.toJSON && ("[object Number]" != m && "[object String]" != m && "[object Array]" != m || e.call(A, "toJSON")) && (A = A.toJSON(t));
      else if (A > -1 / 0 && 1 / 0 > A)
    {
      if (k)
      {
        for (y = w(A / 864e5), m = w(y / 365.2425) + 1970 - 1; y >= k(m + 1, 0); m++);
        for (v = w((y - k(m, 0)) / 30.42); y >= k(m, v + 1); v++);
        y = 1 + y - k(m, v), x = (A % 864e5 + 864e5) % 864e5, b = w(x / 36e5) % 24, _ = w(x / 6e4) % 60, M = w(x / 1e3) % 60, x %= 1e3
      }
      else m = A.getUTCFullYear(), v = A.getUTCMonth(), y = A.getUTCDate(), b = A.getUTCHours(), _ = A.getUTCMinutes(), M = A.getUTCSeconds(), x = A.getUTCMilliseconds();
      A = (0 >= m || m >= 1e4 ? (0 > m ? "-" : "+") + c(6, 0 > m ? -m : m) : c(4, m)) + "-" + c(2, v + 1) + "-" + c(2, y) + "T" + c(2, b) + ":" + c(2, _) + ":" + c(2, M) + "." + c(3, x) + "Z"
    }
    else A = a; if (s && (A = s.call(u, t, A)), A === a) return "null";
    if (m = o.call(A), "[object Boolean]" == m) return "" + A;
    if ("[object Number]" == m) return A > -1 / 0 && 1 / 0 > A ? "" + A : "null";
    if ("[object String]" == m) return f(A);
    if ("object" == typeof A)
    {
      for (t = g.length; t--;)
        if (g[t] === A) throw TypeError();
      if (g.push(A), S = [], u = d, d += p, "[object Array]" == m)
      {
        for (v = 0, t = A.length; t > v; N || (N = i), v++) m = h(v, A, s, l, p, d, g), S.push(m === r ? "null" : m);
        t = N ? p ? "[\n" + d + S.join(",\n" + d) + "\n" + u + "]" : "[" + S.join(",") + "]" : "[]"
      }
      else n(l || A, function (t)
      {
        var e = h(t, A, s, l, p, d, g);
        e !== r && S.push(f(t) + ":" + (p ? " " : "") + e), N || (N = i)
      }), t = N ? p ? "{\n" + d + S.join(",\n" + d) + "\n" + u + "}" : "{" + S.join(",") + "}" : "{}";
      return g.pop(), t
    }
  }, s.stringify = function (t, e, n)
  {
    var r, i, a, u, s, l;
    if ("function" == typeof e || "object" == typeof e && e)
      if ("[object Function]" == o.call(e)) i = e;
      else if ("[object Array]" == o.call(e))
      for (a = {}, u = 0, s = e.length; s > u; l = e[u++], ("[object String]" == o.call(l) || "[object Number]" == o.call(l)) && (a[l] = 1));
    if (n)
      if ("[object Number]" == o.call(n))
      {
        if ((n -= n % 1) > 0)
          for (r = "", n > 10 && (n = 10); n > r.length; r += " ");
      }
      else "[object String]" == o.call(n) && (r = 10 >= n.length ? n : n.slice(0, 10));
    return h("", (l = {}, l[""] = t, l), i, a, r, "", [])
  }), t("json-parse") || (p = String.fromCharCode, d = {
    "\\": "\\",
    '"': '"',
    "/": "/",
    b: "\b",
    t: "  ",
    n: "\n",
    f: "\f",
    r: "\r"
  }, g = function ()
  {
    throw b = _ = a, SyntaxError()
  }, m = function ()
  {
    for (var t, e, n, r, o, u = _, s = u.length; s > b;)
      if (t = u.charAt(b), " \r\n ".indexOf(t) > -1) b++;
      else
      {
        if ("{}[]:,".indexOf(t) > -1) return b++, t;
        if ('"' == t)
        {
          for (e = "@", b++; s > b;)
            if (t = u.charAt(b), " " > t) g();
            else if ("\\" == t)
            if (t = u.charAt(++b), '\\"/btnfr'.indexOf(t) > -1) e += d[t], b++;
            else if ("u" == t)
          {
            for (n = ++b, r = b + 4; r > b; b++) t = u.charAt(b), t >= "0" && "9" >= t || t >= "a" && "f" >= t || t >= "A" && "F" >= t || g();
            e += p("0x" + u.slice(n, b))
          }
          else g();
          else
          {
            if ('"' == t) break;
            e += t, b++
          } if ('"' == u.charAt(b)) return b++, e
        }
        else
        {
          if (n = b, "-" == t && (o = i, t = u.charAt(++b)), t >= "0" && "9" >= t)
          {
            for ("0" == t && (t = u.charAt(b + 1), t >= "0" && "9" >= t) && g(); s > b && (t = u.charAt(b), t >= "0" && "9" >= t); b++);
            if ("." == u.charAt(b))
            {
              for (r = ++b; s > r && (t = u.charAt(r), t >= "0" && "9" >= t); r++);
              r == b && g(), b = r
            }
            if (t = u.charAt(b), "e" == t || "E" == t)
            {
              for (t = u.charAt(++b), ("+" == t || "-" == t) && b++, r = b; s > r && (t = u.charAt(r), t >= "0" && "9" >= t); r++);
              r == b && g(), b = r
            }
            return +u.slice(n, b)
          }
          if (o && g(), "true" == u.slice(b, b + 4)) return b += 4, i;
          if ("false" == u.slice(b, b + 5)) return b += 5, !1;
          if ("null" == u.slice(b, b + 4)) return b += 4, a
        }
        g()
      }
    return "$"
  }, v = function (t)
  {
    var e, n;
    if ("$" == t && g(), "string" == typeof t)
    {
      if ("@" == t.charAt(0)) return t.slice(1);
      if ("[" == t)
      {
        for (e = []; t = m(), "]" != t; n || (n = i)) n && ("," == t ? (t = m(), "]" == t && g()) : g()), "," == t && g(), e.push(v(t));
        return e
      }
      if ("{" == t)
      {
        for (e = {}; t = m(), "}" != t; n || (n = i)) n && ("," == t ? (t = m(), "}" == t && g()) : g()), ("," == t || "string" != typeof t || "@" != t.charAt(0) || ":" != m()) && g(), e[t.slice(1)] = v(m());
        return e
      }
      g()
    }
    return t
  }, x = function (t, e, n)
  {
    n = y(t, e, n), n === r ? delete t[e] : t[e] = n
  }, y = function (t, e, r)
  {
    var i, a = t[e];
    if ("object" == typeof a && a)
      if ("[object Array]" == o.call(a))
        for (i = a.length; i--;) x(a, i, r);
      else n(a, function (t)
      {
        x(a, t, r)
      });
    return r.call(t, e, a)
  }, s.parse = function (t, e)
  {
    var n, r;
    return b = 0, _ = t, n = v(m()), "$" != m() && g(), b = _ = a, e && "[object Function]" == o.call(e) ? y((r = {}, r[""] = n, r), "", e) : n
  })), u && define(function ()
  {
    return s
  })
}(), d3 = function ()
{
  function t(t)
  {
    return t.target
  }

  function e(t)
  {
    return t.source
  }

  function n(t, e)
  {
    try
    {
      for (var n in e) Object.defineProperty(t.prototype, n,
      {
        value: e[n],
        enumerable: !1
      })
    }
    catch (r)
    {
      t.prototype = e
    }
  }

  function r(t)
  {
    for (var e = -1, n = t.length, r = []; n > ++e;) r.push(t[e]);
    return r
  }

  function i(t)
  {
    return Array.prototype.slice.call(t)
  }

  function a()
  {}

  function o(t)
  {
    return t
  }

  function u()
  {
    return !0
  }

  function s(t)
  {
    return "function" == typeof t ? t : function ()
    {
      return t
    }
  }

  function l(t, e, n)
  {
    return function ()
    {
      var r = n.apply(e, arguments);
      return r === e ? t : r
    }
  }

  function c(t)
  {
    return null != t && !isNaN(t)
  }

  function f(t)
  {
    return t.length
  }

  function h(t)
  {
    return t.trim().replace(/\s+/g, " ")
  }

  function p(t)
  {
    for (var e = 1; t * e % 1;) e *= 10;
    return e
  }

  function d(t)
  {
    return 1 === t.length ? function (e, n)
    {
      t(null == e ? n : null)
    } : t
  }

  function g(t, e, n, r)
  {
    if (replaceDuplicates = !0, t.indexOf("#") > 0)
    {
      var i = t.indexOf("#");
      urlhash = t.substring(t.indexOf("#"), t.length)
    }
    else urlhash = "", i = t.length;
    sourceUrl = t.substring(0, i);
    var a = sourceUrl.split("?"),
      o = "";
    if (a.length > 1)
      for (var u = a[1].split("&"), s = 0; u.length > s; s++)
      {
        var l = u[s].split("=");
        replaceDuplicates && l[0] == e || ("" == o ? o = "?" : o += "&", o += l[0] + "=" + (l[1] ? l[1] : ""))
      }
    return "" == o && (o = "?"), r ? o = "?" + e + "=" + n + (o.length > 1 ? "&" + o.substring(1) : "") : ("" !== o && "?" != o && (o += "&"), o += e + "=" + (n ? n : "")), a[0] + o + urlhash
  }

  function m(t)
  {
    return t.responseText
  }

  function v(t)
  {
    return JSON.parse(t.responseText)
  }

  function y(t)
  {
    var e = qa.createRange();
    return e.selectNode(qa.body), e.createContextualFragment(t.responseText)
  }

  function x(t)
  {
    return t.responseXML
  }

  function b()
  {}

  function _(t)
  {
    function e()
    {
      for (var e, r = n, i = -1, a = r.length; a > ++i;)(e = r[i].on) && e.apply(this, arguments);
      return t
    }
    var n = [],
      r = new a;
    return e.on = function (e, i)
    {
      var a, o = r.get(e);
      return 2 > arguments.length ? o && o.on : (o && (o.on = null, n = n.slice(0, a = n.indexOf(o)).concat(n.slice(a + 1)), r.remove(e)), i && n.push(r.set(e,
      {
        on: i
      })), t)
    }, e
  }

  function w(t, e)
  {
    return e - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
  }

  function M(t)
  {
    return t + ""
  }

  function k(t, e)
  {
    var n = Math.pow(10, 3 * Math.abs(8 - e));
    return {
      scale: e > 8 ? function (t)
      {
        return t / n
      } : function (t)
      {
        return t * n
      },
      symbol: t
    }
  }

  function S(t)
  {
    return function (e)
    {
      return 0 >= e ? 0 : e >= 1 ? 1 : t(e)
    }
  }

  function N(t)
  {
    return function (e)
    {
      return 1 - t(1 - e)
    }
  }

  function A(t)
  {
    return function (e)
    {
      return .5 * (.5 > e ? t(2 * e) : 2 - t(2 - 2 * e))
    }
  }

  function C(t)
  {
    return t * t
  }

  function E(t)
  {
    return t * t * t
  }

  function T(t)
  {
    if (0 >= t) return 0;
    if (t >= 1) return 1;
    var e = t * t,
      n = e * t;
    return 4 * (.5 > t ? n : 3 * (t - e) + n - .75)
  }

  function B(t)
  {
    return function (e)
    {
      return Math.pow(e, t)
    }
  }

  function L(t)
  {
    return 1 - Math.cos(t * za / 2)
  }

  function z(t)
  {
    return Math.pow(2, 10 * (t - 1))
  }

  function P(t)
  {
    return 1 - Math.sqrt(1 - t * t)
  }

  function j(t, e)
  {
    var n;
    return 2 > arguments.length && (e = .45), arguments.length ? n = e / (2 * za) * Math.asin(1 / t) : (t = 1, n = e / 4),
    function (r)
    {
      return 1 + t * Math.pow(2, 10 * -r) * Math.sin(2 * (r - n) * za / e)
    }
  }

  function D(t)
  {
    return t || (t = 1.70158),
    function (e)
    {
      return e * e * ((t + 1) * e - t)
    }
  }

  function F(t)
  {
    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
  }

  function q()
  {
    ja.event.stopPropagation(), ja.event.preventDefault()
  }

  function R()
  {
    for (var t, e = ja.event; t = e.sourceEvent;) e = t;
    return e
  }

  function O(t)
  {
    for (var e = new b, n = 0, r = arguments.length; r > ++n;) e[arguments[n]] = _(e);
    return e.of = function (n, r)
    {
      return function (i)
      {
        try
        {
          var a = i.sourceEvent = ja.event;
          i.target = t, ja.event = i, e[i.type].apply(n, r)
        }
        finally
        {
          ja.event = a
        }
      }
    }, e
  }

  function I(t)
  {
    var e = [t.a, t.b],
      n = [t.c, t.d],
      r = U(e),
      i = H(e, n),
      a = U(V(n, e, -i)) || 0;
    e[0] * n[1] < n[0] * e[1] && (e[0] *= -1, e[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(e[1], e[0]) : Math.atan2(-n[0], n[1])) * ao, this.translate = [t.e, t.f], this.scale = [r, a], this.skew = a ? Math.atan2(i, a) * ao : 0
  }

  function H(t, e)
  {
    return t[0] * e[0] + t[1] * e[1]
  }

  function U(t)
  {
    var e = Math.sqrt(H(t, t));
    return e && (t[0] /= e, t[1] /= e), e
  }

  function V(t, e, n)
  {
    return t[0] += n * e[0], t[1] += n * e[1], t
  }

  function Y(t)
  {
    return "transform" == t ? ja.interpolateTransform : ja.interpolate
  }

  function G(t, e)
  {
    return e = e - (t = +t) ? 1 / (e - t) : 0,
    function (n)
    {
      return (n - t) * e
    }
  }

  function X(t, e)
  {
    return e = e - (t = +t) ? 1 / (e - t) : 0,
    function (n)
    {
      return Math.max(0, Math.min(1, (n - t) * e))
    }
  }

  function $()
  {}

  function Z(t, e, n)
  {
    return new W(t, e, n)
  }

  function W(t, e, n)
  {
    this.r = t, this.g = e, this.b = n
  }

  function J(t)
  {
    return 16 > t ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
  }

  function K(t, e, n)
  {
    var r, i, a, o = 0,
      u = 0,
      s = 0;
    if (r = /([a-z]+)\((.*)\)/i.exec(t)) switch (i = r[2].split(","), r[1])
    {
    case "hsl":
      return n(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
    case "rgb":
      return e(ne(i[0]), ne(i[1]), ne(i[2]))
    }
    return (a = lo.get(t)) ? e(a.r, a.g, a.b) : (null != t && "#" === t.charAt(0) && (4 === t.length ? (o = t.charAt(1), o += o, u = t.charAt(2), u += u, s = t.charAt(3), s += s) : 7 === t.length && (o = t.substring(1, 3), u = t.substring(3, 5), s = t.substring(5, 7)), o = parseInt(o, 16), u = parseInt(u, 16), s = parseInt(s, 16)), e(o, u, s))
  }

  function Q(t, e, n)
  {
    var r, i, a = Math.min(t /= 255, e /= 255, n /= 255),
      o = Math.max(t, e, n),
      u = o - a,
      s = (o + a) / 2;
    return u ? (i = .5 > s ? u / (o + a) : u / (2 - o - a), r = t == o ? (e - n) / u + (n > e ? 6 : 0) : e == o ? (n - t) / u + 2 : (t - e) / u + 4, r *= 60) : i = r = 0, re(r, i, s)
  }

  function te(t, e, n)
  {
    t = ee(t), e = ee(e), n = ee(n);
    var r = de((.4124564 * t + .3575761 * e + .1804375 * n) / po),
      i = de((.2126729 * t + .7151522 * e + .072175 * n) / go),
      a = de((.0193339 * t + .119192 * e + .9503041 * n) / mo);
    return le(116 * i - 16, 500 * (r - i), 200 * (i - a))
  }

  function ee(t)
  {
    return .04045 >= (t /= 255) ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
  }

  function ne(t)
  {
    var e = parseFloat(t);
    return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * e) : e
  }

  function re(t, e, n)
  {
    return new ie(t, e, n)
  }

  function ie(t, e, n)
  {
    this.h = t, this.s = e, this.l = n
  }

  function ae(t, e, n)
  {
    function r(t)
    {
      return t > 360 ? t -= 360 : 0 > t && (t += 360), 60 > t ? a + (o - a) * t / 60 : 180 > t ? o : 240 > t ? a + (o - a) * (240 - t) / 60 : a
    }

    function i(t)
    {
      return Math.round(255 * r(t))
    }
    var a, o;
    return t %= 360, 0 > t && (t += 360), e = 0 > e ? 0 : e > 1 ? 1 : e, n = 0 > n ? 0 : n > 1 ? 1 : n, o = .5 >= n ? n * (1 + e) : n + e - n * e, a = 2 * n - o, Z(i(t + 120), i(t), i(t - 120))
  }

  function oe(t, e, n)
  {
    return new ue(t, e, n)
  }

  function ue(t, e, n)
  {
    this.h = t, this.c = e, this.l = n
  }

  function se(t, e, n)
  {
    return le(n, Math.cos(t *= Da) * e, Math.sin(t) * e)
  }

  function le(t, e, n)
  {
    return new ce(t, e, n)
  }

  function ce(t, e, n)
  {
    this.l = t, this.a = e, this.b = n
  }

  function fe(t, e, n)
  {
    var r = (t + 16) / 116,
      i = r + e / 500,
      a = r - n / 200;
    return i = pe(i) * po, r = pe(r) * go, a = pe(a) * mo, Z(ge(3.2404542 * i - 1.5371385 * r - .4985314 * a), ge(-.969266 * i + 1.8760108 * r + .041556 * a), ge(.0556434 * i - .2040259 * r + 1.0572252 * a))
  }

  function he(t, e, n)
  {
    return oe(180 * (Math.atan2(n, e) / za), Math.sqrt(e * e + n * n), t)
  }

  function pe(t)
  {
    return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
  }

  function de(t)
  {
    return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
  }

  function ge(t)
  {
    return Math.round(255 * (.00304 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
  }

  function me(t)
  {
    return Ya(t, wo), t
  }

  function ve(t)
  {
    return function ()
    {
      return bo(t, this)
    }
  }

  function ye(t)
  {
    return function ()
    {
      return _o(t, this)
    }
  }

  function xe(t, e)
  {
    function n()
    {
      this.removeAttribute(t)
    }

    function r()
    {
      this.removeAttributeNS(t.space, t.local)
    }

    function i()
    {
      this.setAttribute(t, e)
    }

    function a()
    {
      this.setAttributeNS(t.space, t.local, e)
    }

    function o()
    {
      var n = e.apply(this, arguments);
      null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
    }

    function u()
    {
      var n = e.apply(this, arguments);
      null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
    }
    return t = ja.ns.qualify(t), null == e ? t.local ? r : n : "function" == typeof e ? t.local ? u : o : t.local ? a : i
  }

  function be(t)
  {
    return RegExp("(?:^|\\s+)" + ja.requote(t) + "(?:\\s+|$)", "g")
  }

  function _e(t, e)
  {
    function n()
    {
      for (var n = -1; i > ++n;) t[n](this, e)
    }

    function r()
    {
      for (var n = -1, r = e.apply(this, arguments); i > ++n;) t[n](this, r)
    }
    t = t.trim().split(/\s+/).map(we);
    var i = t.length;
    return "function" == typeof e ? r : n
  }

  function we(t)
  {
    var e = be(t);
    return function (n, r)
    {
      if (i = n.classList) return r ? i.add(t) : i.remove(t);
      var i = n.getAttribute("class") || "",
        a = null != i.baseVal,
        o = a ? i.baseVal : i;
      r ? (e.lastIndex = 0, e.test(o) || (o = h(o + " " + t), a ? i.baseVal = o : n.setAttribute("class", o))) : o && (o = h(o.replace(e, " ")), a ? i.baseVal = o : n.setAttribute("class", o))
    }
  }

  function Me(t, e, n)
  {
    function r()
    {
      this.paper ? this.removeStyleProperty(t) : this.style.removeProperty(t)
    }

    function i()
    {
      this.paper ? this.setStyleProperty(t, e) : this.style.setProperty(t, e, n)
    }

    function a()
    {
      var r = e.apply(this, arguments);
      null == r ? this.paper ? this.removeStyleProperty(t) : this.style.removeProperty(t) : this.paper ? this.setStyleProperty(t, r) : this.style.setProperty(t, r, n)
    }
    return null == e ? r : "function" == typeof e ? a : i
  }

  function ke(t, e)
  {
    function n()
    {
      delete this[t]
    }

    function r()
    {
      this[t] = e
    }

    function i()
    {
      var n = e.apply(this, arguments);
      null == n ? delete this[t] : this[t] = n
    }
    return null == e ? n : "function" == typeof e ? i : r
  }

  function Se(t)
  {
    return {
      __data__: t
    }
  }

  function Ne(t)
  {
    return function ()
    {
      return xo(this, t)
    }
  }

  function Ae(t)
  {
    return arguments.length || (t = ja.ascending),
    function (e, n)
    {
      return !e - !n || t(e.__data__, n.__data__)
    }
  }

  function Ce(t, e, n)
  {
    function r()
    {
      var e = this[a];
      e && (this.removeEventListener ? this.removeEventListener(t, e, e.$) : this.detachEvent("on" + t, e), delete this[a])
    }

    function i()
    {
      function i(t)
      {
        var n = ja.event;
        ja.event = t, u[0] = o.__data__;
        try
        {
          e.apply(o, u)
        }
        finally
        {
          ja.event = n
        }
      }
      var o = this,
        u = Ua(arguments);
      r.call(this), this.addEventListener ? this.addEventListener(t, this[a] = i, i.$ = n) : this.attachEvent("on" + t, this[a] = i), i._ = e
    }
    var a = "__on" + t,
      o = t.indexOf(".");
    return o > 0 && (t = t.substring(0, o)), e ? i : r
  }

  function Ee(t, e)
  {
    for (var n = 0, r = t.length; r > n; n++)
      for (var i, a = t[n], o = 0, u = a.length; u > o; o++)(i = a[o]) && e(i, o, n);
    return t
  }

  function Te(t)
  {
    return Ya(t, So), t
  }

  function Be(t, e)
  {
    return Ya(t, Ao), t.id = e, t
  }

  function Le(t, e, n, r)
  {
    var i = t.__transition__ || (t.__transition__ = {
      active: 0,
      count: 0
    }),
      o = i[n];
    if (!o)
    {
      var u = r.time;
      return o = i[n] = {
        tween: new a,
        event: ja.dispatch("start", "end"),
        time: u,
        ease: r.ease,
        delay: r.delay,
        duration: r.duration
      }, ++i.count, ja.timer(function (r)
      {
        function a(r)
        {
          return i.active > n ? l() : (i.active = n, h.start.call(t, c, e), o.tween.forEach(function (n, r)
          {
            (r = r.call(t, c, e)) && g.push(r)
          }), s(r) || ja.timer(s, 0, u), 1)
        }

        function s(r)
        {
          if (i.active !== n) return l();
          for (var a = (r - p) / d, o = f(a), u = g.length; u > 0;) g[--u].call(t, o);
          return a >= 1 ? (l(), h.end.call(t, c, e), 1) : void 0
        }

        function l()
        {
          return --i.count ? delete i[n] : delete t.__transition__, 1
        }
        var c = t.__data__,
          f = o.ease,
          h = o.event,
          p = o.delay,
          d = o.duration,
          g = [];
        return r >= p ? a(r) : ja.timer(a, p, u), 1
      }, 0, u), o
    }
  }

  function ze(t)
  {
    return null == t && (t = ""),
    function ()
    {
      this.textContent = t
    }
  }

  function Pe(t, e, n, r)
  {
    var i = t.id;
    return Ee(t, "function" == typeof n ? function (t, a, o)
    {
      t.__transition__[i].tween.set(e, r(n.call(t, t.__data__, a, o)))
    } : (n = r(n), function (t)
    {
      t.__transition__[i].tween.set(e, n)
    }))
  }

  function je()
  {
    for (var t, e = Date.now(), n = Po; n;) t = e - n.then, t >= n.delay && (n.flush = n.callback(t)), n = n.next;
    var r = De() - e;
    r > 24 ? (isFinite(r) && (clearTimeout(Bo), Bo = setTimeout(je, r)), To = 0) : (To = 1, jo(je))
  }

  function De()
  {
    for (var t = null, e = Po, n = 1 / 0; e;) e.flush ? (delete zo[e.callback.id], e = t ? t.next = e.next : Po = e.next) : (n = Math.min(n, e.then + e.delay), e = (t = e).next);
    return n
  }

  function Fe(t, e)
  {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint)
    {
      var r = n.createSVGPoint();
      if (0 > Do && (Ra.scrollX || Ra.scrollY))
      {
        n = ja.select(qa.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0);
        var i = n[0][0].getScreenCTM();
        Do = !(i.f || i.e), n.remove()
      }
      return Do ? (r.x = e.pageX, r.y = e.pageY) : (r.x = e.clientX, r.y = e.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
    }
    var a = t.getBoundingClientRect();
    return [e.clientX - a.left - t.clientLeft, e.clientY - a.top - t.clientTop]
  }

  function qe()
  {}

  function Re(t)
  {
    var e = t[0],
      n = t[t.length - 1];
    return n > e ? [e, n] : [n, e]
  }

  function Oe(t)
  {
    return t.rangeExtent ? t.rangeExtent() : Re(t.range())
  }

  function Ie(t, e)
  {
    var n, r = 0,
      i = t.length - 1,
      a = t[r],
      o = t[i];
    return a > o && (n = r, r = i, i = n, n = a, a = o, o = n), (e = e(o - a)) && (t[r] = e.floor(a), t[i] = e.ceil(o)), t
  }

  function He()
  {
    return Math
  }

  function Ue(t, e, n, r)
  {
    function i()
    {
      var i = Math.min(t.length, e.length) > 2 ? We : Ze,
        s = r ? X : G;
      return o = i(t, e, s, n), u = i(e, t, s, ja.interpolate), a
    }

    function a(t)
    {
      return o(t)
    }
    var o, u;
    return a.invert = function (t)
    {
      return u(t)
    }, a.domain = function (e)
    {
      return arguments.length ? (t = e.map(Number), i()) : t
    }, a.range = function (t)
    {
      return arguments.length ? (e = t, i()) : e
    }, a.rangeRound = function (t)
    {
      return a.range(t).interpolate(ja.interpolateRound)
    }, a.clamp = function (t)
    {
      return arguments.length ? (r = t, i()) : r
    }, a.interpolate = function (t)
    {
      return arguments.length ? (n = t, i()) : n
    }, a.ticks = function (e)
    {
      return Xe(t, e)
    }, a.tickFormat = function (e)
    {
      return $e(t, e)
    }, a.nice = function ()
    {
      return Ie(t, Ye), i()
    }, a.copy = function ()
    {
      return Ue(t, e, n, r)
    }, i()
  }

  function Ve(t, e)
  {
    return ja.rebind(t, e, "range", "rangeRound", "interpolate", "clamp")
  }

  function Ye(t)
  {
    return t = Math.pow(10, Math.round(Math.log(t) / Math.LN10) - 1), t &&
    {
      floor: function (e)
      {
        return Math.floor(e / t) * t
      },
      ceil: function (e)
      {
        return Math.ceil(e / t) * t
      }
    }
  }

  function Ge(t, e)
  {
    var n = Re(t),
      r = n[1] - n[0],
      i = Math.pow(10, Math.floor(Math.log(r / e) / Math.LN10)),
      a = e / r * i;
    return .15 >= a ? i *= 10 : .35 >= a ? i *= 5 : .75 >= a && (i *= 2), n[0] = Math.ceil(n[0] / i) * i, n[1] = Math.floor(n[1] / i) * i + .5 * i, n[2] = i, n
  }

  function Xe(t, e)
  {
    return ja.range.apply(ja, Ge(t, e))
  }

  function $e(t, e)
  {
    return ja.format(",." + Math.max(0, -Math.floor(Math.log(Ge(t, e)[2]) / Math.LN10 + .01)) + "f")
  }

  function Ze(t, e, n, r)
  {
    var i = n(t[0], t[1]),
      a = r(e[0], e[1]);
    return function (t)
    {
      return a(i(t))
    }
  }

  function We(t, e, n, r)
  {
    var i = [],
      a = [],
      o = 0,
      u = Math.min(t.length, e.length) - 1;
    for (t[u] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); u >= ++o;) i.push(n(t[o - 1], t[o])), a.push(r(e[o - 1], e[o]));
    return function (e)
    {
      var n = ja.bisect(t, e, 1, u) - 1;
      return a[n](i[n](e))
    }
  }

  function Je(t, e)
  {
    function n(n)
    {
      return t(e(n))
    }
    var r = e.pow;
    return n.invert = function (e)
    {
      return r(t.invert(e))
    }, n.domain = function (i)
    {
      return arguments.length ? (e = 0 > i[0] ? Qe : Ke, r = e.pow, t.domain(i.map(e)), n) : t.domain().map(r)
    }, n.nice = function ()
    {
      return t.domain(Ie(t.domain(), He)), n
    }, n.ticks = function ()
    {
      var n = Re(t.domain()),
        i = [];
      if (n.every(isFinite))
      {
        var a = Math.floor(n[0]),
          o = Math.ceil(n[1]),
          u = r(n[0]),
          s = r(n[1]);
        if (e === Qe)
          for (i.push(r(a)); o > a++;)
            for (var l = 9; l > 0; l--) i.push(r(a) * l);
        else
        {
          for (; o > a; a++)
            for (var l = 1; 10 > l; l++) i.push(r(a) * l);
          i.push(r(a))
        }
        for (a = 0; u > i[a]; a++);
        for (o = i.length; i[o - 1] > s; o--);
        i = i.slice(a, o)
      }
      return i
    }, n.tickFormat = function (t, i)
    {
      if (2 > arguments.length && (i = Fo), !arguments.length) return i;
      var a, o = Math.max(.1, t / n.ticks().length),
        u = e === Qe ? (a = -1e-12, Math.floor) : (a = 1e-12, Math.ceil);
      return function (t)
      {
        return o >= t / r(u(e(t) + a)) ? i(t) : ""
      }
    }, n.copy = function ()
    {
      return Je(t.copy(), e)
    }, Ve(n, t)
  }

  function Ke(t)
  {
    return Math.log(0 > t ? 0 : t) / Math.LN10
  }

  function Qe(t)
  {
    return -Math.log(t > 0 ? 0 : -t) / Math.LN10
  }

  function tn(t, e)
  {
    function n(e)
    {
      return t(r(e))
    }
    var r = en(e),
      i = en(1 / e);
    return n.invert = function (e)
    {
      return i(t.invert(e))
    }, n.domain = function (e)
    {
      return arguments.length ? (t.domain(e.map(r)), n) : t.domain().map(i)
    }, n.ticks = function (t)
    {
      return Xe(n.domain(), t)
    }, n.tickFormat = function (t)
    {
      return $e(n.domain(), t)
    }, n.nice = function ()
    {
      return n.domain(Ie(n.domain(), Ye))
    }, n.exponent = function (t)
    {
      if (!arguments.length) return e;
      var a = n.domain();
      return r = en(e = t), i = en(1 / e), n.domain(a)
    }, n.copy = function ()
    {
      return tn(t.copy(), e)
    }, Ve(n, t)
  }

  function en(t)
  {
    return function (e)
    {
      return 0 > e ? -Math.pow(-e, t) : Math.pow(e, t)
    }
  }

  function nn(t, e)
  {
    function n(e)
    {
      return o[((i.get(e) || i.set(e, t.push(e))) - 1) % o.length]
    }

    function r(e, n)
    {
      return ja.range(t.length).map(function (t)
      {
        return e + n * t
      })
    }
    var i, o, u;
    return n.domain = function (r)
    {
      if (!arguments.length) return t;
      t = [], i = new a;
      for (var o, u = -1, s = r.length; s > ++u;) i.has(o = r[u]) || i.set(o, t.push(o));
      return n[e.t].apply(n, e.a)
    }, n.range = function (t)
    {
      return arguments.length ? (o = t, u = 0, e = {
        t: "range",
        a: arguments
      }, n) : o
    }, n.rangePoints = function (i, a)
    {
      2 > arguments.length && (a = 0);
      var s = i[0],
        l = i[1],
        c = (l - s) / (Math.max(1, t.length - 1) + a);
      return o = r(2 > t.length ? (s + l) / 2 : s + c * a / 2, c), u = 0, e = {
        t: "rangePoints",
        a: arguments
      }, n
    }, n.rangeBands = function (i, a, s)
    {
      2 > arguments.length && (a = 0), 3 > arguments.length && (s = a);
      var l = i[1] < i[0],
        c = i[l - 0],
        f = i[1 - l],
        h = (f - c) / (t.length - a + 2 * s);
      return o = r(c + h * s, h), l && o.reverse(), u = h * (1 - a), e = {
        t: "rangeBands",
        a: arguments
      }, n
    }, n.rangeRoundBands = function (i, a, s)
    {
      2 > arguments.length && (a = 0), 3 > arguments.length && (s = a);
      var l = i[1] < i[0],
        c = i[l - 0],
        f = i[1 - l],
        h = Math.floor((f - c) / (t.length - a + 2 * s)),
        p = f - c - (t.length - a) * h;
      return o = r(c + Math.round(p / 2), h), l && o.reverse(), u = Math.round(h * (1 - a)), e = {
        t: "rangeRoundBands",
        a: arguments
      }, n
    }, n.rangeBand = function ()
    {
      return u
    }, n.rangeExtent = function ()
    {
      return Re(e.a[0])
    }, n.copy = function ()
    {
      return nn(t, e)
    }, n.domain(t)
  }

  function rn(t, e)
  {
    function n()
    {
      var n = 0,
        a = e.length;
      for (i = []; a > ++n;) i[n - 1] = ja.quantile(t, n / a);
      return r
    }

    function r(t)
    {
      return isNaN(t = +t) ? 0 / 0 : e[ja.bisect(i, t)]
    }
    var i;
    return r.domain = function (e)
    {
      return arguments.length ? (t = e.filter(function (t)
      {
        return !isNaN(t)
      }).sort(ja.ascending), n()) : t
    }, r.range = function (t)
    {
      return arguments.length ? (e = t, n()) : e
    }, r.quantiles = function ()
    {
      return i
    }, r.copy = function ()
    {
      return rn(t, e)
    }, n()
  }

  function an(t, e, n)
  {
    function r(e)
    {
      return n[Math.max(0, Math.min(o, Math.floor(a * (e - t))))]
    }

    function i()
    {
      return a = n.length / (e - t), o = n.length - 1, r
    }
    var a, o;
    return r.domain = function (n)
    {
      return arguments.length ? (t = +n[0], e = +n[n.length - 1], i()) : [t, e]
    }, r.range = function (t)
    {
      return arguments.length ? (n = t, i()) : n
    }, r.copy = function ()
    {
      return an(t, e, n)
    }, i()
  }

  function on(t, e)
  {
    function n(n)
    {
      return e[ja.bisect(t, n)]
    }
    return n.domain = function (e)
    {
      return arguments.length ? (t = e, n) : t
    }, n.range = function (t)
    {
      return arguments.length ? (e = t, n) : e
    }, n.copy = function ()
    {
      return on(t, e)
    }, n
  }

  function un(t)
  {
    function e(t)
    {
      return +t
    }
    return e.invert = e, e.domain = e.range = function (n)
    {
      return arguments.length ? (t = n.map(e), e) : t
    }, e.ticks = function (e)
    {
      return Xe(t, e)
    }, e.tickFormat = function (e)
    {
      return $e(t, e)
    }, e.copy = function ()
    {
      return un(t)
    }, e
  }

  function sn(t)
  {
    return t.innerRadius
  }

  function ln(t)
  {
    return t.outerRadius
  }

  function cn(t)
  {
    return t.startAngle
  }

  function fn(t)
  {
    return t.endAngle
  }

  function hn(t)
  {
    function e(e)
    {
      function o()
      {
        c.push("M", a(t(f), l))
      }
      for (var u, c = [], f = [], h = -1, p = e.length, d = s(n), g = s(r); p > ++h;) i.call(this, u = e[h], h) ? f.push([+d.call(this, u, h), +g.call(this, u, h)]) : f.length && (o(), f = []);
      return f.length && o(), c.length ? c.join("") : null
    }
    var n = pn,
      r = dn,
      i = u,
      a = gn,
      o = a.key,
      l = .7;
    return e.x = function (t)
    {
      return arguments.length ? (n = t, e) : n
    }, e.y = function (t)
    {
      return arguments.length ? (r = t, e) : r
    }, e.defined = function (t)
    {
      return arguments.length ? (i = t, e) : i
    }, e.interpolate = function (t)
    {
      return arguments.length ? (o = "function" == typeof t ? a = t : (a = Vo.get(t) || gn).key, e) : o
    }, e.tension = function (t)
    {
      return arguments.length ? (l = t, e) : l
    }, e
  }

  function pn(t)
  {
    return t[0]
  }

  function dn(t)
  {
    return t[1]
  }

  function gn(t)
  {
    return t.join("L")
  }

  function mn(t)
  {
    return gn(t) + "Z"
  }

  function vn(t)
  {
    for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; n > ++e;) i.push("V", (r = t[e])[1], "H", r[0]);
    return i.join("")
  }

  function yn(t)
  {
    for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; n > ++e;) i.push("H", (r = t[e])[0], "V", r[1]);
    return i.join("")
  }

  function xn(t, e)
  {
    return 4 > t.length ? gn(t) : t[1] + wn(t.slice(1, t.length - 1), Mn(t, e))
  }

  function bn(t, e)
  {
    return 3 > t.length ? gn(t) : t[0] + wn((t.push(t[0]), t), Mn([t[t.length - 2]].concat(t, [t[1]]), e))
  }

  function _n(t, e)
  {
    return 3 > t.length ? gn(t) : t[0] + wn(t, Mn(t, e))
  }

  function wn(t, e)
  {
    if (1 > e.length || t.length != e.length && t.length != e.length + 2) return gn(t);
    var n = t.length != e.length,
      r = "",
      i = t[0],
      a = t[1],
      o = e[0],
      u = o,
      s = 1;
    if (n && (r += "Q" + (a[0] - 2 * o[0] / 3) + "," + (a[1] - 2 * o[1] / 3) + "," + a[0] + "," + a[1], i = t[1], s = 2), e.length > 1)
    {
      u = e[1], a = t[s], s++, r += "C" + (i[0] + o[0]) + "," + (i[1] + o[1]) + "," + (a[0] - u[0]) + "," + (a[1] - u[1]) + "," + a[0] + "," + a[1];
      for (var l = 2; e.length > l; l++, s++) a = t[s], u = e[l], r += "S" + (a[0] - u[0]) + "," + (a[1] - u[1]) + "," + a[0] + "," + a[1]
    }
    if (n)
    {
      var c = t[s];
      r += "Q" + (a[0] + 2 * u[0] / 3) + "," + (a[1] + 2 * u[1] / 3) + "," + c[0] + "," + c[1]
    }
    return r
  }

  function Mn(t, e)
  {
    for (var n, r = [], i = (1 - e) / 2, a = t[0], o = t[1], u = 1, s = t.length; s > ++u;) n = a, a = o, o = t[u], r.push([i * (o[0] - n[0]), i * (o[1] - n[1])]);
    return r
  }

  function kn(t)
  {
    if (3 > t.length) return gn(t);
    var e = 1,
      n = t.length,
      r = t[0],
      i = r[0],
      a = r[1],
      o = [i, i, i, (r = t[1])[0]],
      u = [a, a, a, r[1]],
      s = [i, ",", a];
    for (En(s, o, u); n > ++e;) r = t[e], o.shift(), o.push(r[0]), u.shift(), u.push(r[1]), En(s, o, u);
    for (e = -1; 2 > ++e;) o.shift(), o.push(r[0]), u.shift(), u.push(r[1]), En(s, o, u);
    return s.join("")
  }

  function Sn(t)
  {
    if (4 > t.length) return gn(t);
    for (var e, n = [], r = -1, i = t.length, a = [0], o = [0]; 3 > ++r;) e = t[r], a.push(e[0]), o.push(e[1]);
    for (n.push(Cn(Xo, a) + "," + Cn(Xo, o)), --r; i > ++r;) e = t[r], a.shift(), a.push(e[0]), o.shift(), o.push(e[1]), En(n, a, o);
    return n.join("")
  }

  function Nn(t)
  {
    for (var e, n, r = -1, i = t.length, a = i + 4, o = [], u = []; 4 > ++r;) n = t[r % i], o.push(n[0]), u.push(n[1]);
    for (e = [Cn(Xo, o), ",", Cn(Xo, u)], --r; a > ++r;) n = t[r % i], o.shift(), o.push(n[0]), u.shift(), u.push(n[1]), En(e, o, u);
    return e.join("")
  }

  function An(t, e)
  {
    var n = t.length - 1;
    if (n)
      for (var r, i, a = t[0][0], o = t[0][1], u = t[n][0] - a, s = t[n][1] - o, l = -1; n >= ++l;) r = t[l], i = l / n, r[0] = e * r[0] + (1 - e) * (a + i * u), r[1] = e * r[1] + (1 - e) * (o + i * s);
    return kn(t)
  }

  function Cn(t, e)
  {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
  }

  function En(t, e, n)
  {
    t.push("C", Cn(Yo, e), ",", Cn(Yo, n), ",", Cn(Go, e), ",", Cn(Go, n), ",", Cn(Xo, e), ",", Cn(Xo, n))
  }

  function Tn(t, e)
  {
    return (e[1] - t[1]) / (e[0] - t[0])
  }

  function Bn(t)
  {
    for (var e = 0, n = t.length - 1, r = [], i = t[0], a = t[1], o = r[0] = Tn(i, a); n > ++e;) r[e] = (o + (o = Tn(i = a, a = t[e + 1]))) / 2;
    return r[e] = o, r
  }

  function Ln(t)
  {
    for (var e, n, r, i, a = [], o = Bn(t), u = -1, s = t.length - 1; s > ++u;) e = Tn(t[u], t[u + 1]), 1e-6 > Math.abs(e) ? o[u] = o[u + 1] = 0 : (n = o[u] / e, r = o[u + 1] / e, i = n * n + r * r, i > 9 && (i = 3 * e / Math.sqrt(i), o[u] = i * n, o[u + 1] = i * r));
    for (u = -1; s >= ++u;) i = (t[Math.min(s, u + 1)][0] - t[Math.max(0, u - 1)][0]) / (6 * (1 + o[u] * o[u])), a.push([i || 0, o[u] * i || 0]);
    return a
  }

  function zn(t)
  {
    return 3 > t.length ? gn(t) : t[0] + wn(t, Ln(t))
  }

  function Pn(t)
  {
    for (var e, n, r, i = -1, a = t.length; a > ++i;) e = t[i], n = e[0], r = e[1] + Ho, e[0] = n * Math.cos(r), e[1] = n * Math.sin(r);
    return t
  }

  function jn(t)
  {
    function e(e)
    {
      function u()
      {
        m.push("M", l(t(y), p), h, f(t(v.reverse()), p), "Z")
      }
      for (var c, d, g, m = [], v = [], y = [], x = -1, b = e.length, _ = s(n), w = s(i), M = n === r ? function ()
        {
          return d
        } : s(r), k = i === a ? function ()
        {
          return g
        } : s(a); b > ++x;) o.call(this, c = e[x], x) ? (v.push([d = +_.call(this, c, x), g = +w.call(this, c, x)]), y.push([+M.call(this, c, x), +k.call(this, c, x)])) : v.length && (u(), v = [], y = []);
      return v.length && u(), m.length ? m.join("") : null
    }
    var n = pn,
      r = pn,
      i = 0,
      a = dn,
      o = u,
      l = gn,
      c = l.key,
      f = l,
      h = "L",
      p = .7;
    return e.x = function (t)
    {
      return arguments.length ? (n = r = t, e) : r
    }, e.x0 = function (t)
    {
      return arguments.length ? (n = t, e) : n
    }, e.x1 = function (t)
    {
      return arguments.length ? (r = t, e) : r
    }, e.y = function (t)
    {
      return arguments.length ? (i = a = t, e) : a
    }, e.y0 = function (t)
    {
      return arguments.length ? (i = t, e) : i
    }, e.y1 = function (t)
    {
      return arguments.length ? (a = t, e) : a
    }, e.defined = function (t)
    {
      return arguments.length ? (o = t, e) : o
    }, e.interpolate = function (t)
    {
      return arguments.length ? (c = "function" == typeof t ? l = t : (l = Vo.get(t) || gn).key, f = l.reverse || l, h = l.closed ? "M" : "L", e) : c
    }, e.tension = function (t)
    {
      return arguments.length ? (p = t, e) : p
    }, e
  }

  function Dn(t)
  {
    return t.radius
  }

  function Fn(t)
  {
    return [t.x, t.y]
  }

  function qn(t)
  {
    return function ()
    {
      var e = t.apply(this, arguments),
        n = e[0],
        r = e[1] + Ho;
      return [n * Math.cos(r), n * Math.sin(r)]
    }
  }

  function Rn()
  {
    return 64
  }

  function On()
  {
    return "circle"
  }

  function In(t)
  {
    var e = Math.sqrt(t / za);
    return "M0," + e + "A" + e + "," + e + " 0 1,1 0," + -e + "A" + e + "," + e + " 0 1,1 0," + e + "Z"
  }

  function Hn(t, e)
  {
    t.attr("transform", function (t)
    {
      return "translate(" + e(t) + ",0)"
    })
  }

  function Un(t, e)
  {
    t.attr("transform", function (t)
    {
      return "translate(0," + e(t) + ")"
    })
  }

  function Vn(t, e, n)
  {
    if (r = [], n && e.length > 1)
    {
      for (var r, i, a, o = Re(t.domain()), u = -1, s = e.length, l = (e[1] - e[0]) / ++n; s > ++u;)
        for (i = n; --i > 0;)(a = +e[u] - i * l) >= o[0] && r.push(a);
      for (--u, i = 0; n > ++i && (a = +e[u] + i * l) < o[1];) r.push(a)
    }
    return r
  }

  function Yn(t, e)
  {
    switch (this.paper = t, this.domNode = e, this.domNode.r2d3 = this, this.raphaelNode = null, this.parentNode = e.parentNode.r2d3, e.tagName)
    {
    case "path":
      this.raphaelNode = t.path("Z");
      break;
    case "rect":
      this.raphaelNode = t.rect(0, 0, 0, 0);
      break;
    case "circle":
      this.raphaelNode = t.circle(0, 0, 0);
      break;
    case "g":
      this.isGroup = !0;
      break;
    case "line":
      this.raphaelNode = t.path("Z");
      break;
    case "IMG":
      this.raphaelNode = t.image("#", 0, 0, 0, 0);
      break;
    case "text":
      this.isText = !0, this.raphaelNode = t.text(0, 0, "");
      break;
    case "ellipse":
      this.raphaelNode = t.ellipse(0, 0, 0, 0);
      break;
    case "svg":
      this.raphaelNode = null, this.isSVG = !0
    }
    this.updateProperty("transform"), this.updateCurrentStyle()
  }

  function Gn(t)
  {
    return null === t || void 0 === t || "" === t ? "" : (void 0 === eu[t] && (eu[t] = t.replace(/translate\(/gi, "t").replace(/rotate\(/gi, "r").replace(/scale\(/gi, "s").replace(/[)]/g, "")), eu[t])
  }

  function Xn(t)
  {
    var e = Raphael(t, 0, 0),
      n = document.createElement("svg");
    return n.style.display = "none", t.appendChild(n), new Yn(e, n)
  }

  function $n(t)
  {
    for (var e = t.source, n = t.target, r = Wn(e, n), i = [e]; e !== r;) e = e.parent, i.push(e);
    for (var a = i.length; n !== r;) i.splice(a, 0, n), n = n.parent;
    return i
  }

  function Zn(t)
  {
    for (var e = [], n = t.parent; null != n;) e.push(t), t = n, n = n.parent;
    return e.push(t), e
  }

  function Wn(t, e)
  {
    if (t === e) return t;
    for (var n = Zn(t), r = Zn(e), i = n.pop(), a = r.pop(), o = null; i === a;) o = i, i = n.pop(), a = r.pop();
    return o
  }

  function Jn(t)
  {
    t.fixed |= 2
  }

  function Kn(t)
  {
    t.fixed &= -7
  }

  function Qn(t)
  {
    t.fixed |= 4, t.px = t.x, t.py = t.y
  }

  function tr(t)
  {
    t.fixed &= -5
  }

  function er(t, e, n)
  {
    var r = 0,
      i = 0;
    if (t.charge = 0, !t.leaf)
      for (var a, o = t.nodes, u = o.length, s = -1; u > ++s;) a = o[s], null != a && (er(a, e, n), t.charge += a.charge, r += a.charge * a.cx, i += a.charge * a.cy);
    if (t.point)
    {
      t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
      var l = e * n[t.point.index];
      t.charge += t.pointCharge = l, r += l * t.point.x, i += l * t.point.y
    }
    t.cx = r / t.charge, t.cy = i / t.charge
  }

  function nr(t)
  {
    return t.x
  }

  function rr(t)
  {
    return t.y
  }

  function ir(t, e, n)
  {
    t.y0 = e, t.y = n
  }

  function ar(t)
  {
    return ja.range(t.length)
  }

  function or(t)
  {
    for (var e = -1, n = t[0].length, r = []; n > ++e;) r[e] = 0;
    return r
  }

  function ur(t)
  {
    for (var e, n = 1, r = 0, i = t[0][1], a = t.length; a > n; ++n)(e = t[n][1]) > i && (r = n, i = e);
    return r
  }

  function sr(t)
  {
    return t.reduce(lr, 0)
  }

  function lr(t, e)
  {
    return t + e[1]
  }

  function cr(t, e)
  {
    return fr(t, Math.ceil(Math.log(e.length) / Math.LN2 + 1))
  }

  function fr(t, e)
  {
    for (var n = -1, r = +t[0], i = (t[1] - r) / e, a = []; e >= ++n;) a[n] = i * n + r;
    return a
  }

  function hr(t)
  {
    return [ja.min(t), ja.max(t)]
  }

  function pr(t, e)
  {
    return ja.rebind(t, e, "sort", "children", "value"), t.nodes = t, t.links = vr, t
  }

  function dr(t)
  {
    return t.children
  }

  function gr(t)
  {
    return t.value
  }

  function mr(t, e)
  {
    return e.value - t.value
  }

  function vr(t)
  {
    return ja.merge(t.map(function (t)
    {
      return (t.children || []).map(function (e)
      {
        return {
          source: t,
          target: e
        }
      })
    }))
  }

  function yr(t, e)
  {
    return t.value - e.value
  }

  function xr(t, e)
  {
    var n = t._pack_next;
    t._pack_next = e, e._pack_prev = t, e._pack_next = n, n._pack_prev = e
  }

  function br(t, e)
  {
    t._pack_next = e, e._pack_prev = t
  }

  function _r(t, e)
  {
    var n = e.x - t.x,
      r = e.y - t.y,
      i = t.r + e.r;
    return i * i - n * n - r * r > .001
  }

  function wr(t)
  {
    function e(t)
    {
      c = Math.min(t.x - t.r, c), f = Math.max(t.x + t.r, f), h = Math.min(t.y - t.r, h), p = Math.max(t.y + t.r, p)
    }
    if ((n = t.children) && (l = n.length))
    {
      var n, r, i, a, o, u, s, l, c = 1 / 0,
        f = -1 / 0,
        h = 1 / 0,
        p = -1 / 0;
      if (n.forEach(Mr), r = n[0], r.x = -r.r, r.y = 0, e(r), l > 1 && (i = n[1], i.x = i.r, i.y = 0, e(i), l > 2))
        for (a = n[2], Nr(r, i, a), e(a), xr(r, a), r._pack_prev = a, xr(a, i), i = r._pack_next, o = 3; l > o; o++)
        {
          Nr(r, i, a = n[o]);
          var d = 0,
            g = 1,
            m = 1;
          for (u = i._pack_next; u !== i; u = u._pack_next, g++)
            if (_r(u, a))
            {
              d = 1;
              break
            }
          if (1 == d)
            for (s = r._pack_prev; s !== u._pack_prev && !_r(s, a); s = s._pack_prev, m++);
          d ? (m > g || g == m && i.r < r.r ? br(r, i = u) : br(r = s, i), o--) : (xr(r, a), i = a, e(a))
        }
      var v = (c + f) / 2,
        y = (h + p) / 2,
        x = 0;
      for (o = 0; l > o; o++) a = n[o], a.x -= v, a.y -= y, x = Math.max(x, a.r + Math.sqrt(a.x * a.x + a.y * a.y));
      t.r = x, n.forEach(kr)
    }
  }

  function Mr(t)
  {
    t._pack_next = t._pack_prev = t
  }

  function kr(t)
  {
    delete t._pack_next, delete t._pack_prev
  }

  function Sr(t, e, n, r)
  {
    var i = t.children;
    if (t.x = e += r * t.x, t.y = n += r * t.y, t.r *= r, i)
      for (var a = -1, o = i.length; o > ++a;) Sr(i[a], e, n, r)
  }

  function Nr(t, e, n)
  {
    var r = t.r + n.r,
      i = e.x - t.x,
      a = e.y - t.y;
    if (r && (i || a))
    {
      var o = e.r + n.r,
        u = i * i + a * a;
      o *= o, r *= r;
      var s = .5 + (r - o) / (2 * u),
        l = Math.sqrt(Math.max(0, 2 * o * (r + u) - (r -= u) * r - o * o)) / (2 * u);
      n.x = t.x + s * i + l * a, n.y = t.y + s * a - l * i
    }
    else n.x = t.x + r, n.y = t.y
  }

  function Ar(t)
  {
    return 1 + ja.max(t, function (t)
    {
      return t.y
    })
  }

  function Cr(t)
  {
    return t.reduce(function (t, e)
    {
      return t + e.x
    }, 0) / t.length
  }

  function Er(t)
  {
    var e = t.children;
    return e && e.length ? Er(e[0]) : t
  }

  function Tr(t)
  {
    var e, n = t.children;
    return n && (e = n.length) ? Tr(n[e - 1]) : t
  }

  function Br(t, e)
  {
    return t.parent == e.parent ? 1 : 2
  }

  function Lr(t)
  {
    var e = t.children;
    return e && e.length ? e[0] : t._tree.thread
  }

  function zr(t)
  {
    var e, n = t.children;
    return n && (e = n.length) ? n[e - 1] : t._tree.thread
  }

  function Pr(t, e)
  {
    var n = t.children;
    if (n && (i = n.length))
      for (var r, i, a = -1; i > ++a;) e(r = Pr(n[a], e), t) > 0 && (t = r);
    return t
  }

  function jr(t, e)
  {
    return t.x - e.x
  }

  function Dr(t, e)
  {
    return e.x - t.x
  }

  function Fr(t, e)
  {
    return t.depth - e.depth
  }

  function qr(t, e)
  {
    function n(t, r)
    {
      var i = t.children;
      if (i && (o = i.length))
        for (var a, o, u = null, s = -1; o > ++s;) a = i[s], n(a, u), u = a;
      e(t, r)
    }
    n(t, null)
  }

  function Rr(t)
  {
    for (var e, n = 0, r = 0, i = t.children, a = i.length; --a >= 0;) e = i[a]._tree, e.prelim += n, e.mod += n, n += e.shift + (r += e.change)
  }

  function Or(t, e, n)
  {
    t = t._tree, e = e._tree;
    var r = n / (e.number - t.number);
    t.change += r, e.change -= r, e.shift += n, e.prelim += n, e.mod += n
  }

  function Ir(t, e, n)
  {
    return t._tree.ancestor.parent == e.parent ? t._tree.ancestor : n
  }

  function Hr(t)
  {
    return {
      x: t.x,
      y: t.y,
      dx: t.dx,
      dy: t.dy
    }
  }

  function Ur(t, e)
  {
    var n = t.x + e[3],
      r = t.y + e[0],
      i = t.dx - e[1] - e[3],
      a = t.dy - e[0] - e[2];
    return 0 > i && (n += i / 2, i = 0), 0 > a && (r += a / 2, a = 0),
    {
      x: n,
      y: r,
      dx: i,
      dy: a
    }
  }

  function Vr(t, e)
  {
    function n(t, n)
    {
      return ja.xhr(t, e, n).response(r)
    }

    function r(t)
    {
      return n.parse(t.responseText)
    }

    function i(e)
    {
      return e.map(a).join(t)
    }

    function a(t)
    {
      return o.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
    }
    var o = RegExp('["' + t + "\n]"),
      u = t.charCodeAt(0);
    return n.parse = function (t)
    {
      var e;
      return n.parseRows(t, function (t)
      {
        return e ? e(t) : (e = Function("d", "return {" + t.map(function (t, e)
        {
          return JSON.stringify(t) + ": d[" + e + "]"
        }).join(",") + "}"), void 0)
      })
    }, n.parseRows = function (t, e)
    {
      function n()
      {
        if (c >= l) return o;
        if (i) return i = !1, a;
        var e = c;
        if (34 === t.charCodeAt(e))
        {
          for (var n = e; l > n++;)
            if (34 === t.charCodeAt(n))
            {
              if (34 !== t.charCodeAt(n + 1)) break;
              ++n
            }
          c = n + 2;
          var r = t.charCodeAt(n + 1);
          return 13 === r ? (i = !0, 10 === t.charCodeAt(n + 2) && ++c) : 10 === r && (i = !0), t.substring(e + 1, n).replace(/""/g, '"')
        }
        for (; l > c;)
        {
          var r = t.charCodeAt(c++),
            s = 1;
          if (10 === r) i = !0;
          else if (13 === r) i = !0, 10 === t.charCodeAt(c) && (++c, ++s);
          else if (r !== u) continue;
          return t.substring(e, c - s)
        }
        return t.substring(e)
      }
      for (var r, i, a = {}, o = {}, s = [], l = t.length, c = 0, f = 0;
        (r = n()) !== o;)
      {
        for (var h = []; r !== a && r !== o;) h.push(r), r = n();
        (!e || (h = e(h, f++))) && s.push(h)
      }
      return s
    }, n.format = function (t)
    {
      return t.map(i).join("\n")
    }, n
  }

  function Yr(t, e)
  {
    fu.hasOwnProperty(t.type) && fu[t.type](t, e)
  }

  function Gr(t, e, n)
  {
    var r, i = -1,
      a = t.length - n;
    for (e.lineStart(); a > ++i;) r = t[i], e.point(r[0], r[1]);
    e.lineEnd()
  }

  function Xr(t, e)
  {
    var n = -1,
      r = t.length;
    for (e.polygonStart(); r > ++n;) Gr(t[n], e, 1);
    e.polygonEnd()
  }

  function $r(t)
  {
    return [Math.atan2(t[1], t[0]), Math.asin(Math.max(-1, Math.min(1, t[2])))]
  }

  function Zr(t, e)
  {
    return Pa > Math.abs(t[0] - e[0]) && Pa > Math.abs(t[1] - e[1])
  }

  function Wr(t)
  {
    var e = t[0],
      n = t[1],
      r = Math.cos(n);
    return [r * Math.cos(e), r * Math.sin(e), Math.sin(n)]
  }

  function Jr(t, e)
  {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
  }

  function Kr(t, e)
  {
    return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
  }

  function Qr(t, e)
  {
    t[0] += e[0], t[1] += e[1], t[2] += e[2]
  }

  function ti(t, e)
  {
    return [t[0] * e, t[1] * e, t[2] * e]
  }

  function ei(t)
  {
    var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
    t[0] /= e, t[1] /= e, t[2] /= e
  }

  function ni(t)
  {
    function e(e)
    {
      function r(n, r)
      {
        n = t(n, r), e.point(n[0], n[1])
      }

      function a()
      {
        c = 0 / 0, g.point = o, e.lineStart()
      }

      function o(r, a)
      {
        var o = Wr([r, a]),
          u = t(r, a);
        n(c, f, l, h, p, d, c = u[0], f = u[1], l = r, h = o[0], p = o[1], d = o[2], i, e), e.point(c, f)
      }

      function u()
      {
        g.point = r, e.lineEnd()
      }

      function s()
      {
        var t, r, s, m, v, y, x;
        a(), g.point = function (e, n)
        {
          o(t = e, r = n), s = c, m = f, v = h, y = p, x = d, g.point = o
        }, g.lineEnd = function ()
        {
          n(c, f, l, h, p, d, s, m, t, v, y, x, i, e), g.lineEnd = u, u()
        }
      }
      var l, c, f, h, p, d, g = {
          point: r,
          lineStart: a,
          lineEnd: u,
          polygonStart: function ()
          {
            e.polygonStart(), g.lineStart = s
          },
          polygonEnd: function ()
          {
            e.polygonEnd(), g.lineStart = a
          }
        };
      return g
    }

    function n(e, i, a, o, u, s, l, c, f, h, p, d, g, m)
    {
      var v = l - e,
        y = c - i,
        x = v * v + y * y;
      if (x > 4 * r && g--)
      {
        var b = o + h,
          _ = u + p,
          w = s + d,
          M = Math.sqrt(b * b + _ * _ + w * w),
          k = Math.asin(w /= M),
          S = Pa > Math.abs(Math.abs(w) - 1) ? (a + f) / 2 : Math.atan2(_, b),
          N = t(S, k),
          A = N[0],
          C = N[1],
          E = A - e,
          T = C - i,
          B = y * E - v * T;
        (B * B / x > r || Math.abs((v * E + y * T) / x - .5) > .3) && (n(e, i, a, o, u, s, A, C, S, b /= M, _ /= M, w, g, m), m.point(A, C), n(A, C, S, b, _, w, l, c, f, h, p, d, g, m))
      }
    }
    var r = .5,
      i = 16;
    return e.precision = function (t)
    {
      return arguments.length ? (i = (r = t * t) > 0 && 16, e) : Math.sqrt(r)
    }, e
  }

  function ri(t, e)
  {
    function n(t, e)
    {
      var n = Math.sqrt(a - 2 * i * Math.sin(e)) / i;
      return [n * Math.sin(t *= i), o - n * Math.cos(t)]
    }
    var r = Math.sin(t),
      i = (r + Math.sin(e)) / 2,
      a = 1 + r * (2 * i - r),
      o = Math.sqrt(a) / i;
    return n.invert = function (t, e)
    {
      var n = o - e;
      return [Math.atan2(t, n) / i, Math.asin((a - (t * t + n * n) * i * i) / (2 * i))]
    }, n
  }

  function ii(t)
  {
    function e(t, e)
    {
      r > t && (r = t), t > a && (a = t), i > e && (i = e), e > o && (o = e)
    }

    function n()
    {
      u.point = u.lineEnd = qe
    }
    var r, i, a, o, u = {
        point: e,
        lineStart: qe,
        lineEnd: qe,
        polygonStart: function ()
        {
          u.lineEnd = n
        },
        polygonEnd: function ()
        {
          u.point = e
        }
      };
    return function (e)
    {
      return o = a = -(r = i = 1 / 0), ja.geo.stream(e, t(u)), [
        [r, i],
        [a, o]
      ]
    }
  }

  function ai(t, e)
  {
    if (!du)
    {
      ++gu, t *= Da;
      var n = Math.cos(e *= Da);
      mu += (n * Math.cos(t) - mu) / gu, vu += (n * Math.sin(t) - vu) / gu, yu += (Math.sin(e) - yu) / gu
    }
  }

  function oi()
  {
    var t, e;
    du = 1, ui(), du = 2;
    var n = xu.point;
    xu.point = function (r, i)
    {
      n(t = r, e = i)
    }, xu.lineEnd = function ()
    {
      xu.point(t, e), si(), xu.lineEnd = si
    }
  }

  function ui()
  {
    function t(t, i)
    {
      t *= Da;
      var a = Math.cos(i *= Da),
        o = a * Math.cos(t),
        u = a * Math.sin(t),
        s = Math.sin(i),
        l = Math.atan2(Math.sqrt((l = n * s - r * u) * l + (l = r * o - e * s) * l + (l = e * u - n * o) * l), e * o + n * u + r * s);
      gu += l, mu += l * (e + (e = o)), vu += l * (n + (n = u)), yu += l * (r + (r = s))
    }
    var e, n, r;
    du > 1 || (1 > du && (du = 1, gu = mu = vu = yu = 0), xu.point = function (i, a)
    {
      i *= Da;
      var o = Math.cos(a *= Da);
      e = o * Math.cos(i), n = o * Math.sin(i), r = Math.sin(a), xu.point = t
    })
  }

  function si()
  {
    xu.point = ai
  }

  function li(t, e)
  {
    var n = Math.cos(t),
      r = Math.sin(t);
    return function (i, a, o, u)
    {
      null != i ? (i = ci(n, i), a = ci(n, a), (o > 0 ? a > i : i > a) && (i += 2 * o * za)) : (i = t + 2 * o * za, a = t);
      for (var s, l = o * e, c = i; o > 0 ? c > a : a > c; c -= l) u.point((s = $r([n, -r * Math.cos(c), -r * Math.sin(c)]))[0], s[1])
    }
  }

  function ci(t, e)
  {
    var n = Wr(e);
    n[0] -= t, ei(n);
    var r = Math.acos(Math.max(-1, Math.min(1, -n[1])));
    return ((0 > -n[2] ? -r : r) + 2 * Math.PI - Pa) % (2 * Math.PI)
  }

  function fi(t, e, n)
  {
    return function (r)
    {
      function i(e, n)
      {
        t(e, n) && r.point(e, n)
      }

      function a(t, e)
      {
        m.point(t, e)
      }

      function o()
      {
        v.point = a, m.lineStart()
      }

      function u()
      {
        v.point = i, m.lineEnd()
      }

      function s(t, e)
      {
        x.point(t, e), g.push([t, e])
      }

      function l()
      {
        x.lineStart(), g = []
      }

      function c()
      {
        s(g[0][0], g[0][1]), x.lineEnd();
        var t, e = x.clean(),
          n = y.buffer(),
          i = n.length;
        if (!i) return d = !0, p += vi(g, -1), g = null, void 0;
        if (g = null, 1 & e)
        {
          t = n[0], h += vi(t, 1);
          var a, i = t.length - 1,
            o = -1;
          for (r.lineStart(); i > ++o;) r.point((a = t[o])[0], a[1]);
          return r.lineEnd(), void 0
        }
        i > 1 && 2 & e && n.push(n.pop().concat(n.shift())), f.push(n.filter(gi))
      }
      var f, h, p, d, g, m = e(r),
        v = {
          point: i,
          lineStart: o,
          lineEnd: u,
          polygonStart: function ()
          {
            v.point = s, v.lineStart = l, v.lineEnd = c, d = !1, p = h = 0, f = [], r.polygonStart()
          },
          polygonEnd: function ()
          {
            v.point = i, v.lineStart = o, v.lineEnd = u, f = ja.merge(f), f.length ? hi(f, n, r) : (-Pa > h || d && -Pa > p) && (r.lineStart(), n(null, null, 1, r), r.lineEnd()), r.polygonEnd(), f = null
          },
          sphere: function ()
          {
            r.polygonStart(), r.lineStart(), n(null, null, 1, r), r.lineEnd(), r.polygonEnd()
          }
        }, y = mi(),
        x = e(y);
      return v
    }
  }

  function hi(t, e, n)
  {
    var r = [],
      i = [];
    if (t.forEach(function (t)
    {
      if (!(1 >= (e = t.length)))
      {
        var e, a = t[0],
          o = t[e - 1];
        if (Zr(a, o))
        {
          n.lineStart();
          for (var u = 0; e > u; ++u) n.point((a = t[u])[0], a[1]);
          return n.lineEnd(), void 0
        }
        var s = {
          point: a,
          points: t,
          other: null,
          visited: !1,
          entry: !0,
          subject: !0
        }, l = {
            point: a,
            points: [a],
            other: s,
            visited: !1,
            entry: !1,
            subject: !1
          };
        s.other = l, r.push(s), i.push(l), s = {
          point: o,
          points: [o],
          other: null,
          visited: !1,
          entry: !1,
          subject: !0
        }, l = {
          point: o,
          points: [o],
          other: s,
          visited: !1,
          entry: !0,
          subject: !1
        }, s.other = l, r.push(s), i.push(l)
      }
    }), i.sort(di), pi(r), pi(i), r.length)
      for (var a, o, u, s = r[0];;)
      {
        for (a = s; a.visited;)
          if ((a = a.next) === s) return;
        o = a.points, n.lineStart();
        do {
          if (a.visited = a.other.visited = !0, a.entry)
          {
            if (a.subject)
              for (var l = 0; o.length > l; l++) n.point((u = o[l])[0], u[1]);
            else e(a.point, a.next.point, 1, n);
            a = a.next
          }
          else
          {
            if (a.subject)
            {
              o = a.prev.points;
              for (var l = o.length; --l >= 0;) n.point((u = o[l])[0], u[1])
            }
            else e(a.point, a.prev.point, -1, n);
            a = a.prev
          }
          a = a.other, o = a.points
        } while (!a.visited);
        n.lineEnd()
      }
  }

  function pi(t)
  {
    if (e = t.length)
    {
      for (var e, n, r = 0, i = t[0]; e > ++r;) i.next = n = t[r], n.prev = i, i = n;
      i.next = n = t[0], n.prev = i
    }
  }

  function di(t, e)
  {
    return (0 > (t = t.point)[0] ? t[1] - za / 2 - Pa : za / 2 - t[1]) - (0 > (e = e.point)[0] ? e[1] - za / 2 - Pa : za / 2 - e[1])
  }

  function gi(t)
  {
    return t.length > 1
  }

  function mi()
  {
    var t, e = [];
    return {
      lineStart: function ()
      {
        e.push(t = [])
      },
      point: function (e, n)
      {
        t.push([e, n])
      },
      lineEnd: qe,
      buffer: function ()
      {
        var n = e;
        return e = [], t = null, n
      }
    }
  }

  function vi(t, e)
  {
    if (!(n = t.length)) return 0;
    for (var n, r, i, a = 0, o = 0, u = t[0], s = u[0], l = u[1], c = Math.cos(l), f = Math.atan2(e * Math.sin(s) * c, Math.sin(l)), h = 1 - e * Math.cos(s) * c, p = f; n > ++a;) u = t[a], c = Math.cos(l = u[1]), r = Math.atan2(e * Math.sin(s = u[0]) * c, Math.sin(l)), i = 1 - e * Math.cos(s) * c, Pa > Math.abs(h - 2) && Pa > Math.abs(i - 2) || (Pa > Math.abs(i) || Pa > Math.abs(h) || (Pa > Math.abs(Math.abs(r - f) - za) ? i + h > 2 && (o += 4 * (r - f)) : o += Pa > Math.abs(h - 2) ? 4 * (r - p) : ((3 * za + r - f) % (2 * za) - za) * (h + i)), p = f, f = r, h = i);
    return o
  }

  function yi(t)
  {
    var e, n = 0 / 0,
      r = 0 / 0,
      i = 0 / 0;
    return {
      lineStart: function ()
      {
        t.lineStart(), e = 1
      },
      point: function (a, o)
      {
        var u = a > 0 ? za : -za,
          s = Math.abs(a - n);
        Pa > Math.abs(s - za) ? (t.point(n, r = (r + o) / 2 > 0 ? za / 2 : -za / 2), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(a, r), e = 0) : i !== u && s >= za && (Pa > Math.abs(n - i) && (n -= i * Pa), Pa > Math.abs(a - u) && (a -= u * Pa), r = xi(n, r, a, o), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), e = 0), t.point(n = a, r = o), i = u
      },
      lineEnd: function ()
      {
        t.lineEnd(), n = r = 0 / 0
      },
      clean: function ()
      {
        return 2 - e
      }
    }
  }

  function xi(t, e, n, r)
  {
    var i, a, o = Math.sin(t - n);
    return Math.abs(o) > Pa ? Math.atan((Math.sin(e) * (a = Math.cos(r)) * Math.sin(n) - Math.sin(r) * (i = Math.cos(e)) * Math.sin(t)) / (i * a * o)) : (e + r) / 2
  }

  function bi(t, e, n, r)
  {
    var i;
    if (null == t) i = n * za / 2, r.point(-za, i), r.point(0, i), r.point(za, i), r.point(za, 0), r.point(za, -i), r.point(0, -i), r.point(-za, -i), r.point(-za, 0), r.point(-za, i);
    else if (Math.abs(t[0] - e[0]) > Pa)
    {
      var a = (t[0] < e[0] ? 1 : -1) * za;
      i = n * a / 2, r.point(-a, i), r.point(0, i), r.point(a, i)
    }
    else r.point(e[0], e[1])
  }

  function _i(t)
  {
    function e(t, e)
    {
      return Math.cos(t) * Math.cos(e) > a
    }

    function n(t)
    {
      var n, i, a, o;
      return {
        lineStart: function ()
        {
          a = i = !1, o = 1
        },
        point: function (u, s)
        {
          var l, c = [u, s],
            f = e(u, s);
          !n && (a = i = f) && t.lineStart(), f !== i && (l = r(n, c), (Zr(n, l) || Zr(c, l)) && (c[0] += Pa, c[1] += Pa, f = e(c[0], c[1]))), f !== i && (o = 0, (i = f) ? (t.lineStart(), l = r(c, n), t.point(l[0], l[1])) : (l = r(n, c), t.point(l[0], l[1]), t.lineEnd()), n = l), !f || n && Zr(n, c) || t.point(c[0], c[1]), n = c
        },
        lineEnd: function ()
        {
          i && t.lineEnd(), n = null
        },
        clean: function ()
        {
          return o | (a && i) << 1
        }
      }
    }

    function r(t, e)
    {
      var n = Wr(t, 0),
        r = Wr(e, 0),
        i = [1, 0, 0],
        o = Kr(n, r),
        u = Jr(o, o),
        s = o[0],
        l = u - s * s;
      if (!l) return t;
      var c = a * u / l,
        f = -a * s / l,
        h = Kr(i, o),
        p = ti(i, c),
        d = ti(o, f);
      Qr(p, d);
      var g = h,
        m = Jr(p, g),
        v = Jr(g, g),
        y = Math.sqrt(m * m - v * (Jr(p, p) - 1)),
        x = ti(g, (-m - y) / v);
      return Qr(x, p), $r(x)
    }
    var i = t * Da,
      a = Math.cos(i),
      o = li(i, 6 * Da);
    return fi(e, n, o)
  }

  function wi(t, e)
  {
    function n(n, r)
    {
      return n = t(n, r), e(n[0], n[1])
    }
    return t.invert && e.invert && (n.invert = function (n, r)
    {
      return n = e.invert(n, r), n && t.invert(n[0], n[1])
    }), n
  }

  function Mi(t, e)
  {
    return [t, e]
  }

  function ki(t, e, n)
  {
    var r = ja.range(t, e - Pa, n).concat(e);
    return function (t)
    {
      return r.map(function (e)
      {
        return [t, e]
      })
    }
  }

  function Si(t, e, n)
  {
    var r = ja.range(t, e - Pa, n).concat(e);
    return function (t)
    {
      return r.map(function (e)
      {
        return [e, t]
      })
    }
  }

  function Ni(t)
  {
    return (t = Math.sin(t / 2)) * t
  }

  function Ai(t, e, n, r)
  {
    var i = Math.cos(e),
      a = Math.sin(e),
      o = Math.cos(r),
      u = Math.sin(r),
      s = i * Math.cos(t),
      l = i * Math.sin(t),
      c = o * Math.cos(n),
      f = o * Math.sin(n),
      h = 2 * Math.asin(Math.sqrt(Ni(r - e) + i * o * Ni(n - t))),
      p = 1 / Math.sin(h),
      d = h ? function (t)
      {
        var e = Math.sin(t *= h) * p,
          n = Math.sin(h - t) * p,
          r = n * s + e * c,
          i = n * l + e * f,
          o = n * a + e * u;
        return [Math.atan2(i, r) * Fa, Math.atan2(o, Math.sqrt(r * r + i * i)) * Fa]
      } : function ()
      {
        return [t * Fa, e * Fa]
      };
    return d.distance = h, d
  }

  function Ci(t, e)
  {
    return [t / (2 * za), Math.max(-.5, Math.min(.5, Math.log(Math.tan(za / 4 + e / 2)) / (2 * za)))]
  }

  function Ei(t)
  {
    return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
  }

  function Ti(t)
  {
    var e = ni(function (e, n)
    {
      return t([e * Fa, n * Fa])
    });
    return function (t)
    {
      return t = e(t),
      {
        point: function (e, n)
        {
          t.point(e * Da, n * Da)
        },
        sphere: function ()
        {
          t.sphere()
        },
        lineStart: function ()
        {
          t.lineStart()
        },
        lineEnd: function ()
        {
          t.lineEnd()
        },
        polygonStart: function ()
        {
          t.polygonStart()
        },
        polygonEnd: function ()
        {
          t.polygonEnd()
        }
      }
    }
  }

  function Bi()
  {
    function t(t, e)
    {
      o.push("M", t, ",", e, a)
    }

    function e(t, e)
    {
      o.push("M", t, ",", e), u.point = n
    }

    function n(t, e)
    {
      o.push("L", t, ",", e)
    }

    function r()
    {
      u.point = t
    }

    function i()
    {
      o.push("Z")
    }
    var a = Ei(4.5),
      o = [],
      u = {
        point: t,
        lineStart: function ()
        {
          u.point = e
        },
        lineEnd: r,
        polygonStart: function ()
        {
          u.lineEnd = i
        },
        polygonEnd: function ()
        {
          u.lineEnd = r, u.point = t
        },
        pointRadius: function (t)
        {
          return a = Ei(t), u
        },
        result: function ()
        {
          if (o.length)
          {
            var t = o.join("");
            return o = [], t
          }
        }
      };
    return u
  }

  function Li(t)
  {
    function e(e, n)
    {
      t.moveTo(e, n), t.arc(e, n, o, 0, 2 * za)
    }

    function n(e, n)
    {
      t.moveTo(e, n), u.point = r
    }

    function r(e, n)
    {
      t.lineTo(e, n)
    }

    function i()
    {
      u.point = e
    }

    function a()
    {
      t.closePath()
    }
    var o = 4.5,
      u = {
        point: e,
        lineStart: function ()
        {
          u.point = n
        },
        lineEnd: i,
        polygonStart: function ()
        {
          u.lineEnd = a
        },
        polygonEnd: function ()
        {
          u.lineEnd = i, u.point = e
        },
        pointRadius: function (t)
        {
          return o = t, u
        },
        result: qe
      };
    return u
  }

  function zi()
  {
    function t(t, e)
    {
      ku += i * t - r * e, r = t, i = e
    }
    var e, n, r, i;
    Su.point = function (a, o)
    {
      Su.point = t, e = r = a, n = i = o
    }, Su.lineEnd = function ()
    {
      t(e, n)
    }
  }

  function Pi(t, e)
  {
    du || (mu += t, vu += e, ++yu)
  }

  function ji()
  {
    function t(t, r)
    {
      var i = t - e,
        a = r - n,
        o = Math.sqrt(i * i + a * a);
      mu += o * (e + t) / 2, vu += o * (n + r) / 2, yu += o, e = t, n = r
    }
    var e, n;
    if (1 !== du)
    {
      if (!(1 > du)) return;
      du = 1, mu = vu = yu = 0
    }
    Nu.point = function (r, i)
    {
      Nu.point = t, e = r, n = i
    }
  }

  function Di()
  {
    Nu.point = Pi
  }

  function Fi()
  {
    function t(t, e)
    {
      var n = i * t - r * e;
      mu += n * (r + t), vu += n * (i + e), yu += 3 * n, r = t, i = e
    }
    var e, n, r, i;
    2 > du && (du = 2, mu = vu = yu = 0), Nu.point = function (a, o)
    {
      Nu.point = t, e = r = a, n = i = o
    }, Nu.lineEnd = function ()
    {
      t(e, n)
    }
  }

  function qi()
  {
    function t(t, e)
    {
      t *= Da, e = e * Da / 2 + za / 4;
      var n = t - r,
        o = Math.cos(e),
        u = Math.sin(e),
        s = a * u,
        l = Cu,
        c = Eu,
        f = i * o + s * Math.cos(n),
        h = s * Math.sin(n);
      Cu = l * f - c * h, Eu = c * f + l * h, r = t, i = o, a = u
    }
    var e, n, r, i, a;
    Tu.point = function (o, u)
    {
      Tu.point = t, r = (e = o) * Da, i = Math.cos(u = (n = u) * Da / 2 + za / 4), a = Math.sin(u)
    }, Tu.lineEnd = function ()
    {
      t(e, n)
    }
  }

  function Ri(t)
  {
    return Oi(function ()
    {
      return t
    })()
  }

  function Oi(t)
  {
    function e(t)
    {
      return t = o(t[0] * Da, t[1] * Da), [t[0] * c + u, s - t[1] * c]
    }

    function n(t)
    {
      return t = o.invert((t[0] - u) / c, (s - t[1]) / c), t && [t[0] * Fa, t[1] * Fa]
    }

    function r()
    {
      o = wi(a = Hi(g, m, v), i);
      var t = i(p, d);
      return u = f - t[0] * c, s = h + t[1] * c, e
    }
    var i, a, o, u, s, l = ni(function (t, e)
      {
        return t = i(t, e), [t[0] * c + u, s - t[1] * c]
      }),
      c = 150,
      f = 480,
      h = 250,
      p = 0,
      d = 0,
      g = 0,
      m = 0,
      v = 0,
      y = bu,
      x = null;
    return e.stream = function (t)
    {
      return Ii(a, y(l(t)))
    }, e.clipAngle = function (t)
    {
      return arguments.length ? (y = null == t ? (x = t, bu) : _i(x = +t), e) : x
    }, e.scale = function (t)
    {
      return arguments.length ? (c = +t, r()) : c
    }, e.translate = function (t)
    {
      return arguments.length ? (f = +t[0], h = +t[1], r()) : [f, h]
    }, e.center = function (t)
    {
      return arguments.length ? (p = t[0] % 360 * Da, d = t[1] % 360 * Da, r()) : [p * Fa, d * Fa]
    }, e.rotate = function (t)
    {
      return arguments.length ? (g = t[0] % 360 * Da, m = t[1] % 360 * Da, v = t.length > 2 ? t[2] % 360 * Da : 0, r()) : [g * Fa, m * Fa, v * Fa]
    }, ja.rebind(e, l, "precision"),
    function ()
    {
      return i = t.apply(this, arguments), e.invert = i.invert && n, r()
    }
  }

  function Ii(t, e)
  {
    return {
      point: function (n, r)
      {
        r = t(n * Da, r * Da), n = r[0], e.point(n > za ? n - 2 * za : -za > n ? n + 2 * za : n, r[1])
      },
      sphere: function ()
      {
        e.sphere()
      },
      lineStart: function ()
      {
        e.lineStart()
      },
      lineEnd: function ()
      {
        e.lineEnd()
      },
      polygonStart: function ()
      {
        e.polygonStart()
      },
      polygonEnd: function ()
      {
        e.polygonEnd()
      }
    }
  }

  function Hi(t, e, n)
  {
    return t ? e || n ? wi(Vi(t), Yi(e, n)) : Vi(t) : e || n ? Yi(e, n) : Mi
  }

  function Ui(t)
  {
    return function (e, n)
    {
      return e += t, [e > za ? e - 2 * za : -za > e ? e + 2 * za : e, n]
    }
  }

  function Vi(t)
  {
    var e = Ui(t);
    return e.invert = Ui(-t), e
  }

  function Yi(t, e)
  {
    function n(t, e)
    {
      var n = Math.cos(e),
        u = Math.cos(t) * n,
        s = Math.sin(t) * n,
        l = Math.sin(e),
        c = l * r + u * i;
      return [Math.atan2(s * a - c * o, u * r - l * i), Math.asin(Math.max(-1, Math.min(1, c * a + s * o)))]
    }
    var r = Math.cos(t),
      i = Math.sin(t),
      a = Math.cos(e),
      o = Math.sin(e);
    return n.invert = function (t, e)
    {
      var n = Math.cos(e),
        u = Math.cos(t) * n,
        s = Math.sin(t) * n,
        l = Math.sin(e),
        c = l * a - s * o;
      return [Math.atan2(s * a + l * o, u * r + c * i), Math.asin(Math.max(-1, Math.min(1, c * r - u * i)))]
    }, n
  }

  function Gi(t, e)
  {
    function n(e, n)
    {
      var r = Math.cos(e),
        i = Math.cos(n),
        a = t(r * i);
      return [a * i * Math.sin(e), a * Math.sin(n)]
    }
    return n.invert = function (t, n)
    {
      var r = Math.sqrt(t * t + n * n),
        i = e(r),
        a = Math.sin(i),
        o = Math.cos(i);
      return [Math.atan2(t * a, r * o), Math.asin(r && n * a / r)]
    }, n
  }

  function Xi(t, e, n, r)
  {
    var i, a, o, u, s, l, c;
    return i = r[t], a = i[0], o = i[1], i = r[e], u = i[0], s = i[1], i = r[n], l = i[0], c = i[1], (c - o) * (u - a) - (s - o) * (l - a) > 0
  }

  function $i(t, e, n)
  {
    return (n[0] - e[0]) * (t[1] - e[1]) < (n[1] - e[1]) * (t[0] - e[0])
  }

  function Zi(t, e, n, r)
  {
    var i = t[0],
      a = n[0],
      o = e[0] - i,
      u = r[0] - a,
      s = t[1],
      l = n[1],
      c = e[1] - s,
      f = r[1] - l,
      h = (u * (s - l) - f * (i - a)) / (f * o - u * c);
    return [i + h * o, s + h * c]
  }

  function Wi(t, e)
  {
    var n = {
      list: t.map(function (t, e)
      {
        return {
          index: e,
          x: t[0],
          y: t[1]
        }
      }).sort(function (t, e)
      {
        return t.y < e.y ? -1 : t.y > e.y ? 1 : t.x < e.x ? -1 : t.x > e.x ? 1 : 0
      }),
      bottomSite: null
    }, r = {
        list: [],
        leftEnd: null,
        rightEnd: null,
        init: function ()
        {
          r.leftEnd = r.createHalfEdge(null, "l"), r.rightEnd = r.createHalfEdge(null, "l"), r.leftEnd.r = r.rightEnd, r.rightEnd.l = r.leftEnd, r.list.unshift(r.leftEnd, r.rightEnd)
        },
        createHalfEdge: function (t, e)
        {
          return {
            edge: t,
            side: e,
            vertex: null,
            l: null,
            r: null
          }
        },
        insert: function (t, e)
        {
          e.l = t, e.r = t.r, t.r.l = e, t.r = e
        },
        leftBound: function (t)
        {
          var e = r.leftEnd;
          do e = e.r; while (e != r.rightEnd && i.rightOf(e, t));
          return e = e.l
        },
        del: function (t)
        {
          t.l.r = t.r, t.r.l = t.l, t.edge = null
        },
        right: function (t)
        {
          return t.r
        },
        left: function (t)
        {
          return t.l
        },
        leftRegion: function (t)
        {
          return null == t.edge ? n.bottomSite : t.edge.region[t.side]
        },
        rightRegion: function (t)
        {
          return null == t.edge ? n.bottomSite : t.edge.region[Lu[t.side]]
        }
      }, i = {
        bisect: function (t, e)
        {
          var n = {
            region:
            {
              l: t,
              r: e
            },
            ep:
            {
              l: null,
              r: null
            }
          }, r = e.x - t.x,
            i = e.y - t.y,
            a = r > 0 ? r : -r,
            o = i > 0 ? i : -i;
          return n.c = t.x * r + t.y * i + .5 * (r * r + i * i), a > o ? (n.a = 1, n.b = i / r, n.c /= r) : (n.b = 1, n.a = r / i, n.c /= i), n
        },
        intersect: function (t, e)
        {
          var n = t.edge,
            r = e.edge;
          if (!n || !r || n.region.r == r.region.r) return null;
          var i = n.a * r.b - n.b * r.a;
          if (1e-10 > Math.abs(i)) return null;
          var a, o, u = (n.c * r.b - r.c * n.b) / i,
            s = (r.c * n.a - n.c * r.a) / i,
            l = n.region.r,
            c = r.region.r;
          l.y < c.y || l.y == c.y && l.x < c.x ? (a = t, o = n) : (a = e, o = r);
          var f = u >= o.region.r.x;
          return f && "l" === a.side || !f && "r" === a.side ? null :
          {
            x: u,
            y: s
          }
        },
        rightOf: function (t, e)
        {
          var n = t.edge,
            r = n.region.r,
            i = e.x > r.x;
          if (i && "l" === t.side) return 1;
          if (!i && "r" === t.side) return 0;
          if (1 === n.a)
          {
            var a = e.y - r.y,
              o = e.x - r.x,
              u = 0,
              s = 0;
            if (!i && 0 > n.b || i && n.b >= 0 ? s = u = a >= n.b * o : (s = e.x + e.y * n.b > n.c, 0 > n.b && (s = !s), s || (u = 1)), !u)
            {
              var l = r.x - n.region.l.x;
              s = n.b * (o * o - a * a) < l * a * (1 + 2 * o / l + n.b * n.b), 0 > n.b && (s = !s)
            }
          }
          else
          {
            var c = n.c - n.a * e.x,
              f = e.y - c,
              h = e.x - r.x,
              p = c - r.y;
            s = f * f > h * h + p * p
          }
          return "l" === t.side ? s : !s
        },
        endPoint: function (t, n, r)
        {
          t.ep[n] = r, t.ep[Lu[n]] && e(t)
        },
        distance: function (t, e)
        {
          var n = t.x - e.x,
            r = t.y - e.y;
          return Math.sqrt(n * n + r * r)
        }
      }, a = {
        list: [],
        insert: function (t, e, n)
        {
          t.vertex = e, t.ystar = e.y + n;
          for (var r = 0, i = a.list, o = i.length; o > r; r++)
          {
            var u = i[r];
            if (!(t.ystar > u.ystar || t.ystar == u.ystar && e.x > u.vertex.x)) break
          }
          i.splice(r, 0, t)
        },
        del: function (t)
        {
          for (var e = 0, n = a.list, r = n.length; r > e && n[e] != t; ++e);
          n.splice(e, 1)
        },
        empty: function ()
        {
          return 0 === a.list.length
        },
        nextEvent: function (t)
        {
          for (var e = 0, n = a.list, r = n.length; r > e; ++e)
            if (n[e] == t) return n[e + 1];
          return null
        },
        min: function ()
        {
          var t = a.list[0];
          return {
            x: t.vertex.x,
            y: t.ystar
          }
        },
        extractMin: function ()
        {
          return a.list.shift()
        }
      };
    r.init(), n.bottomSite = n.list.shift();
    for (var o, u, s, l, c, f, h, p, d, g, m, v, y, x = n.list.shift();;)
      if (a.empty() || (o = a.min()), x && (a.empty() || x.y < o.y || x.y == o.y && x.x < o.x)) u = r.leftBound(x), s = r.right(u), h = r.rightRegion(u), v = i.bisect(h, x), f = r.createHalfEdge(v, "l"), r.insert(u, f), g = i.intersect(u, f), g && (a.del(u), a.insert(u, g, i.distance(g, x))), u = f, f = r.createHalfEdge(v, "r"), r.insert(u, f), g = i.intersect(f, s), g && a.insert(f, g, i.distance(g, x)), x = n.list.shift();
      else
      {
        if (a.empty()) break;
        u = a.extractMin(), l = r.left(u), s = r.right(u), c = r.right(s), h = r.leftRegion(u), p = r.rightRegion(s), m = u.vertex, i.endPoint(u.edge, u.side, m), i.endPoint(s.edge, s.side, m), r.del(u), a.del(s), r.del(s), y = "l", h.y > p.y && (d = h, h = p, p = d, y = "r"), v = i.bisect(h, p), f = r.createHalfEdge(v, y), r.insert(l, f), i.endPoint(v, Lu[y], m), g = i.intersect(l, f), g && (a.del(l), a.insert(l, g, i.distance(g, h))), g = i.intersect(f, c), g && a.insert(f, g, i.distance(g, h))
      }
    for (u = r.right(r.leftEnd); u != r.rightEnd; u = r.right(u)) e(u.edge)
  }

  function Ji()
  {
    return {
      leaf: !0,
      nodes: [],
      point: null
    }
  }

  function Ki(t, e, n, r, i, a)
  {
    if (!t(e, n, r, i, a))
    {
      var o = .5 * (n + i),
        u = .5 * (r + a),
        s = e.nodes;
      s[0] && Ki(t, s[0], n, r, o, u), s[1] && Ki(t, s[1], o, r, i, u), s[2] && Ki(t, s[2], n, u, o, a), s[3] && Ki(t, s[3], o, u, i, a)
    }
  }

  function Qi()
  {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
  }

  function ta(t, e, n, r)
  {
    for (var i, a, o = 0, u = e.length, s = n.length; u > o;)
    {
      if (r >= s) return -1;
      if (i = e.charCodeAt(o++), 37 === i)
      {
        if (a = Ju[e.charAt(o++)], !a || 0 > (r = a(t, n, r))) return -1
      }
      else if (i != n.charCodeAt(r++)) return -1
    }
    return r
  }

  function ea(t)
  {
    return RegExp("^(?:" + t.map(ja.requote).join("|") + ")", "i")
  }

  function na(t)
  {
    for (var e = new a, n = -1, r = t.length; r > ++n;) e.set(t[n].toLowerCase(), n);
    return e
  }

  function ra(t, e, n)
  {
    t += "";
    var r = t.length;
    return n > r ? Array(n - r + 1).join(e) + t : t
  }

  function ia(t, e, n)
  {
    Vu.lastIndex = 0;
    var r = Vu.exec(e.substring(n));
    return r ? n += r[0].length : -1
  }

  function aa(t, e, n)
  {
    Uu.lastIndex = 0;
    var r = Uu.exec(e.substring(n));
    return r ? n += r[0].length : -1
  }

  function oa(t, e, n)
  {
    Xu.lastIndex = 0;
    var r = Xu.exec(e.substring(n));
    return r ? (t.m = $u.get(r[0].toLowerCase()), n += r[0].length) : -1
  }

  function ua(t, e, n)
  {
    Yu.lastIndex = 0;
    var r = Yu.exec(e.substring(n));
    return r ? (t.m = Gu.get(r[0].toLowerCase()), n += r[0].length) : -1
  }

  function sa(t, e, n)
  {
    return ta(t, "" + Wu.c, e, n)
  }

  function la(t, e, n)
  {
    return ta(t, "" + Wu.x, e, n)
  }

  function ca(t, e, n)
  {
    return ta(t, "" + Wu.X, e, n)
  }

  function fa(t, e, n)
  {
    Ku.lastIndex = 0;
    var r = Ku.exec(e.substring(n, n + 4));
    return r ? (t.y = +r[0], n += r[0].length) : -1
  }

  function ha(t, e, n)
  {
    Ku.lastIndex = 0;
    var r = Ku.exec(e.substring(n, n + 2));
    return r ? (t.y = pa(+r[0]), n += r[0].length) : -1
  }

  function pa(t)
  {
    return t + (t > 68 ? 1900 : 2e3)
  }

  function da(t, e, n)
  {
    Ku.lastIndex = 0;
    var r = Ku.exec(e.substring(n, n + 2));
    return r ? (t.m = r[0] - 1, n += r[0].length) : -1
  }

  function ga(t, e, n)
  {
    Ku.lastIndex = 0;
    var r = Ku.exec(e.substring(n, n + 2));
    return r ? (t.d = +r[0], n += r[0].length) : -1
  }

  function ma(t, e, n)
  {
    Ku.lastIndex = 0;
    var r = Ku.exec(e.substring(n, n + 2));
    return r ? (t.H = +r[0], n += r[0].length) : -1
  }

  function va(t, e, n)
  {
    Ku.lastIndex = 0;
    var r = Ku.exec(e.substring(n, n + 2));
    return r ? (t.M = +r[0], n += r[0].length) : -1
  }

  function ya(t, e, n)
  {
    Ku.lastIndex = 0;
    var r = Ku.exec(e.substring(n, n + 2));
    return r ? (t.S = +r[0], n += r[0].length) : -1
  }

  function xa(t, e, n)
  {
    Ku.lastIndex = 0;
    var r = Ku.exec(e.substring(n, n + 3));
    return r ? (t.L = +r[0], n += r[0].length) : -1
  }

  function ba(t, e, n)
  {
    var r = Qu.get(e.substring(n, n += 2).toLowerCase());
    return null == r ? -1 : (t.p = r, n)
  }

  function _a(t)
  {
    var e = t.getTimezoneOffset(),
      n = e > 0 ? "-" : "+",
      r = ~~ (Math.abs(e) / 60),
      i = Math.abs(e) % 60;
    return n + ra(r, "0", 2) + ra(i, "0", 2)
  }

  function wa(t)
  {
    return t.toISOString()
  }

  function Ma(t, e, n)
  {
    function r(e)
    {
      var n = t(e),
        r = a(n, 1);
      return r - e > e - n ? n : r
    }

    function i(n)
    {
      return e(n = t(new zu(n - 1)), 1), n
    }

    function a(t, n)
    {
      return e(t = new zu(+t), n), t
    }

    function o(t, r, a)
    {
      var o = i(t),
        u = [];
      if (a > 1)
        for (; r > o;) n(o) % a || u.push(new Date(+o)), e(o, 1);
      else
        for (; r > o;) u.push(new Date(+o)), e(o, 1);
      return u
    }

    function u(t, e, n)
    {
      try
      {
        zu = Qi;
        var r = new Qi;
        return r._ = t, o(r, e, n)
      }
      finally
      {
        zu = Date
      }
    }
    t.floor = t, t.round = r, t.ceil = i, t.offset = a, t.range = o;
    var s = t.utc = ka(t);
    return s.floor = s, s.round = ka(r), s.ceil = ka(i), s.offset = ka(a), s.range = u, t
  }

  function ka(t)
  {
    return function (e, n)
    {
      try
      {
        zu = Qi;
        var r = new Qi;
        return r._ = e, t(r, n)._
      }
      finally
      {
        zu = Date
      }
    }
  }

  function Sa(t, e, n)
  {
    function r(e)
    {
      return t(e)
    }
    return r.invert = function (e)
    {
      return Aa(t.invert(e))
    }, r.domain = function (e)
    {
      return arguments.length ? (t.domain(e), r) : t.domain().map(Aa)
    }, r.nice = function (t)
    {
      return r.domain(Ie(r.domain(), function ()
      {
        return t
      }))
    }, r.ticks = function (n, i)
    {
      var a = Na(r.domain());
      if ("function" != typeof n)
      {
        var o = a[1] - a[0],
          u = o / n,
          s = ja.bisect(es, u);
        if (s == es.length) return e.year(a, n);
        if (!s) return t.ticks(n).map(Aa);
        Math.log(u / es[s - 1]) < Math.log(es[s] / u) && --s, n = e[s], i = n[1], n = n[0].range
      }
      return n(a[0], new Date(+a[1] + 1), i)
    }, r.tickFormat = function ()
    {
      return n
    }, r.copy = function ()
    {
      return Sa(t.copy(), e, n)
    }, ja.rebind(r, t, "range", "rangeRound", "interpolate", "clamp")
  }

  function Na(t)
  {
    var e = t[0],
      n = t[t.length - 1];
    return n > e ? [e, n] : [n, e]
  }

  function Aa(t)
  {
    return new Date(t)
  }

  function Ca(t)
  {
    return function (e)
    {
      for (var n = t.length - 1, r = t[n]; !r[1](e);) r = t[--n];
      return r[0](e)
    }
  }

  function Ea(t)
  {
    var e = new Date(t, 0, 1);
    return e.setFullYear(t), e
  }

  function Ta(t)
  {
    var e = t.getFullYear(),
      n = Ea(e),
      r = Ea(e + 1);
    return e + (t - n) / (r - n)
  }

  function Ba(t)
  {
    var e = new Date(Date.UTC(t, 0, 1));
    return e.setUTCFullYear(t), e
  }

  function La(t)
  {
    var e = t.getUTCFullYear(),
      n = Ba(e),
      r = Ba(e + 1);
    return e + (t - n) / (r - n)
  }
  var za = Math.PI,
    Pa = 1e-6,
    ja = {
      version: "3.0.8"
    }, Da = za / 180,
    Fa = 180 / za,
    qa = document,
    Ra = window,
    Oa = ".",
    Ia = ",",
    Ha = [3, 3];
  Date.now || (Date.now = function ()
  {
    return +new Date
  }), window.CSSStyleDeclaration && (window.CSSStyleDeclaration.prototype.getProperty = function (t)
  {
    return this.getAttribute(t)
  }, window.CSSStyleDeclaration.prototype.setProperty = function (t, e)
  {
    return this.setAttribute(t, e)
  }, window.CSSStyleDeclaration.prototype.removeProperty = function (t)
  {
    return this.removeAttribute(t)
  });
  var Ua = i;
  try
  {
    Ua(qa.documentElement.childNodes)[0].nodeType
  }
  catch (Va)
  {
    Ua = r
  }
  var Ya = [].__proto__ ? function (t, e)
    {
      t.__proto__ = e
    } : function (t, e)
    {
      for (var n in e) t[n] = e[n]
    };
  ja.map = function (t)
  {
    var e = new a;
    for (var n in t) e.set(n, t[n]);
    return e
  }, n(a,
  {
    has: function (t)
    {
      return Ga + t in this
    },
    get: function (t)
    {
      return this[Ga + t]
    },
    set: function (t, e)
    {
      return this[Ga + t] = e
    },
    remove: function (t)
    {
      return t = Ga + t, t in this && delete this[t]
    },
    keys: function ()
    {
      var t = [];
      return this.forEach(function (e)
      {
        t.push(e)
      }), t
    },
    values: function ()
    {
      var t = [];
      return this.forEach(function (e, n)
      {
        t.push(n)
      }), t
    },
    entries: function ()
    {
      var t = [];
      return this.forEach(function (e, n)
      {
        t.push(
        {
          key: e,
          value: n
        })
      }), t
    },
    forEach: function (t)
    {
      for (var e in this) e.charCodeAt(0) === Xa && t.call(this, e.substring(1), this[e])
    }
  });
  var Ga = "\0",
    Xa = Ga.charCodeAt(0);
  ja.functor = s, ja.rebind = function (t, e)
  {
    for (var n, r = 1, i = arguments.length; i > ++r;) t[n = arguments[r]] = l(t, e, e[n]);
    return t
  }, ja.ascending = function (t, e)
  {
    return e > t ? -1 : t > e ? 1 : t >= e ? 0 : 0 / 0
  }, ja.descending = function (t, e)
  {
    return t > e ? -1 : e > t ? 1 : e >= t ? 0 : 0 / 0
  }, ja.mean = function (t, e)
  {
    var n, r = t.length,
      i = 0,
      a = -1,
      o = 0;
    if (1 === arguments.length)
      for (; r > ++a;) c(n = t[a]) && (i += (n - i) / ++o);
    else
      for (; r > ++a;) c(n = e.call(t, t[a], a)) && (i += (n - i) / ++o);
    return o ? i : void 0
  }, ja.median = function (t, e)
  {
    return arguments.length > 1 && (t = t.map(e)), t = t.filter(c), t.length ? ja.quantile(t.sort(ja.ascending), .5) : void 0
  }, ja.min = function (t, e)
  {
    var n, r, i = -1,
      a = t.length;
    if (1 === arguments.length)
    {
      for (; a > ++i && (null == (n = t[i]) || n != n);) n = void 0;
      for (; a > ++i;) null != (r = t[i]) && n > r && (n = r)
    }
    else
    {
      for (; a > ++i && (null == (n = e.call(t, t[i], i)) || n != n);) n = void 0;
      for (; a > ++i;) null != (r = e.call(t, t[i], i)) && n > r && (n = r)
    }
    return n
  }, ja.max = function (t, e)
  {
    var n, r, i = -1,
      a = t.length;
    if (1 === arguments.length)
    {
      for (; a > ++i && (null == (n = t[i]) || n != n);) n = void 0;
      for (; a > ++i;) null != (r = t[i]) && r > n && (n = r)
    }
    else
    {
      for (; a > ++i && (null == (n = e.call(t, t[i], i)) || n != n);) n = void 0;
      for (; a > ++i;) null != (r = e.call(t, t[i], i)) && r > n && (n = r)
    }
    return n
  }, ja.extent = function (t, e)
  {
    var n, r, i, a = -1,
      o = t.length;
    if (1 === arguments.length)
    {
      for (; o > ++a && (null == (n = i = t[a]) || n != n);) n = i = void 0;
      for (; o > ++a;) null != (r = t[a]) && (n > r && (n = r), r > i && (i = r))
    }
    else
    {
      for (; o > ++a && (null == (n = i = e.call(t, t[a], a)) || n != n);) n = void 0;
      for (; o > ++a;) null != (r = e.call(t, t[a], a)) && (n > r && (n = r), r > i && (i = r))
    }
    return [n, i]
  }, ja.random = {
    normal: function (t, e)
    {
      var n = arguments.length;
      return 2 > n && (e = 1), 1 > n && (t = 0),
      function ()
      {
        var n, r, i;
        do n = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = n * n + r * r; while (!i || i > 1);
        return t + e * n * Math.sqrt(-2 * Math.log(i) / i)
      }
    },
    logNormal: function ()
    {
      var t = ja.random.normal.apply(ja, arguments);
      return function ()
      {
        return Math.exp(t())
      }
    },
    irwinHall: function (t)
    {
      return function ()
      {
        for (var e = 0, n = 0; t > n; n++) e += Math.random();
        return e / t
      }
    }
  }, ja.sum = function (t, e)
  {
    var n, r = 0,
      i = t.length,
      a = -1;
    if (1 === arguments.length)
      for (; i > ++a;) isNaN(n = +t[a]) || (r += n);
    else
      for (; i > ++a;) isNaN(n = +e.call(t, t[a], a)) || (r += n);
    return r
  }, ja.quantile = function (t, e)
  {
    var n = (t.length - 1) * e + 1,
      r = Math.floor(n),
      i = +t[r - 1],
      a = n - r;
    return a ? i + a * (t[r] - i) : i
  }, ja.shuffle = function (t)
  {
    for (var e, n, r = t.length; r;) n = 0 | Math.random() * r--, e = t[r], t[r] = t[n], t[n] = e;
    return t
  }, ja.transpose = function (t)
  {
    return ja.zip.apply(ja, t)
  }, ja.zip = function ()
  {
    if (!(r = arguments.length)) return [];
    for (var t = -1, e = ja.min(arguments, f), n = Array(e); e > ++t;)
      for (var r, i = -1, a = n[t] = Array(r); r > ++i;) a[i] = arguments[i][t];
    return n
  }, ja.bisector = function (t)
  {
    return {
      left: function (e, n, r, i)
      {
        for (3 > arguments.length && (r = 0), 4 > arguments.length && (i = e.length); i > r;)
        {
          var a = r + i >>> 1;
          n > t.call(e, e[a], a) ? r = a + 1 : i = a
        }
        return r
      },
      right: function (e, n, r, i)
      {
        for (3 > arguments.length && (r = 0), 4 > arguments.length && (i = e.length); i > r;)
        {
          var a = r + i >>> 1;
          t.call(e, e[a], a) > n ? i = a : r = a + 1
        }
        return r
      }
    }
  };
  var $a = ja.bisector(function (t)
  {
    return t
  });
  ja.bisectLeft = $a.left, ja.bisect = ja.bisectRight = $a.right, ja.nest = function ()
  {
    function t(e, u)
    {
      if (u >= o.length) return r ? r.call(i, e) : n ? e.sort(n) : e;
      for (var s, l, c, f = -1, h = e.length, p = o[u++], d = new a, g = {}; h > ++f;)(c = d.get(s = p(l = e[f]))) ? c.push(l) : d.set(s, [l]);
      return d.forEach(function (e, n)
      {
        g[e] = t(n, u)
      }), g
    }

    function e(t, n)
    {
      if (n >= o.length) return t;
      var r, i = [],
        a = u[n++];
      for (r in t) i.push(
      {
        key: r,
        values: e(t[r], n)
      });
      return a && i.sort(function (t, e)
      {
        return a(t.key, e.key)
      }), i
    }
    var n, r, i = {}, o = [],
      u = [];
    return i.map = function (e)
    {
      return t(e, 0)
    }, i.entries = function (n)
    {
      return e(t(n, 0), 0)
    }, i.key = function (t)
    {
      return o.push(t), i
    }, i.sortKeys = function (t)
    {
      return u[o.length - 1] = t, i
    }, i.sortValues = function (t)
    {
      return n = t, i
    }, i.rollup = function (t)
    {
      return r = t, i
    }, i
  }, ja.keys = function (t)
  {
    var e = [];
    for (var n in t) e.push(n);
    return e
  }, ja.values = function (t)
  {
    var e = [];
    for (var n in t) e.push(t[n]);
    return e
  }, ja.entries = function (t)
  {
    var e = [];
    for (var n in t) e.push(
    {
      key: n,
      value: t[n]
    });
    return e
  }, ja.permute = function (t, e)
  {
    for (var n = [], r = -1, i = e.length; i > ++r;) n[r] = t[e[r]];
    return n
  }, ja.merge = function (t)
  {
    return Array.prototype.concat.apply([], t)
  }, ja.range = function (t, e, n)
  {
    if (3 > arguments.length && (n = 1, 2 > arguments.length && (e = t, t = 0)), 1 / 0 === (e - t) / n) throw Error("infinite range");
    var r, i = [],
      a = p(Math.abs(n)),
      o = -1;
    if (t *= a, e *= a, n *= a, 0 > n)
      for (;
        (r = t + n * ++o) > e;) i.push(r / a);
    else
      for (; e > (r = t + n * ++o);) i.push(r / a);
    return i
  }, ja.requote = function (t)
  {
    return t.replace(Za, "\\$&")
  };
  var Za = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  ja.round = function (t, e)
  {
    return e ? Math.round(t * (e = Math.pow(10, e))) / e : Math.round(t)
  }, ja.xhr = function (t, e, n)
  {
    function r()
    {
      var t = i.status;
      !t && i.responseText || t >= 200 && 300 > t || 304 === t ? u.load.call(a, l.call(a, i)) : u.error.call(a, i)
    }
    var i, a = {}, u = ja.dispatch("progress", "load", "error"),
      s = {}, l = o;
    try
    {
      i = new ActiveXObject("Msxml2.XMLHTTP")
    }
    catch (c)
    {
      try
      {
        i = new ActiveXObject("Microsoft.XMLHTTP")
      }
      catch (c)
      {}
    }
    return t = g(t, "_", (new Date).getTime()), "onload" in i ? i.onload = i.onerror = r : i.onreadystatechange = function ()
    {
      i.readyState > 3 && r()
    }, a.header = function (t, e)
    {
      return t = (t + "").toLowerCase(), 2 > arguments.length ? s[t] : (null == e ? delete s[t] : s[t] = e + "", a)
    }, a.mimeType = function (t)
    {
      return arguments.length ? (e = null == t ? null : t + "", a) : e
    }, a.response = function (t)
    {
      return l = t, a
    }, ["get", "post"].forEach(function (t)
    {
      a[t] = function ()
      {
        return a.send.apply(a, [t].concat(Ua(arguments)))
      }
    }), a.send = function (n, r, o)
    {
      2 === arguments.length && "function" == typeof r && (o = r, r = null), i.open(n, t, !0), null == e || "accept" in s || (s.accept = e + ",*/*");
      for (var u in s) i.setRequestHeader(u, s[u]);
      return null != e && i.overrideMimeType && i.overrideMimeType(e), null != o && a.on("error", o).on("load", function (t)
      {
        o(null, t)
      }), i.send(null == r ? null : r), a
    }, a.abort = function ()
    {
      return i.abort(), a
    }, ja.rebind(a, u, "on"), 2 === arguments.length && "function" == typeof e && (n = e, e = null), null == n ? a : a.get(d(n))
  }, ja.text = function ()
  {
    return ja.xhr.apply(ja, arguments).response(m)
  }, ja.json = function (t, e)
  {
    return ja.xhr(t, "application/json", e).response(v)
  }, ja.html = function (t, e)
  {
    return ja.xhr(t, "text/html", e).response(y)
  }, ja.xml = function ()
  {
    return ja.xhr.apply(ja, arguments).response(x)
  };
  var Wa = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  ja.ns = {
    prefix: Wa,
    qualify: function (t)
    {
      var e = t.indexOf(":"),
        n = t;
      return e >= 0 && (n = t.substring(0, e), t = t.substring(e + 1)), Wa.hasOwnProperty(n) ?
      {
        space: Wa[n],
        local: t
      } : t
    }
  }, ja.dispatch = function ()
  {
    for (var t = new b, e = -1, n = arguments.length; n > ++e;) t[arguments[e]] = _(t);
    return t
  }, b.prototype.on = function (t, e)
  {
    var n = t.indexOf("."),
      r = "";
    return n > 0 && (r = t.substring(n + 1), t = t.substring(0, n)), 2 > arguments.length ? this[t].on(r) : this[t].on(r, e)
  }, ja.format = function (t)
  {
    var e = Ja.exec(t),
      n = e[1] || " ",
      r = e[2] || ">",
      i = e[3] || "",
      a = e[4] || "",
      o = e[5],
      u = +e[6],
      s = e[7],
      l = e[8],
      c = e[9],
      f = 1,
      h = "",
      p = !1;
    switch (l && (l = +l.substring(1)), (o || "0" === n && "=" === r) && (o = n = "0", r = "=", s && (u -= Math.floor((u - 1) / 4))), c)
    {
    case "n":
      s = !0, c = "g";
      break;
    case "%":
      f = 100, h = "%", c = "f";
      break;
    case "p":
      f = 100, h = "%", c = "r";
      break;
    case "b":
    case "o":
    case "x":
    case "X":
      a && (a = "0" + c.toLowerCase());
    case "c":
    case "d":
      p = !0, l = 0;
      break;
    case "s":
      f = -1, c = "r"
    }
    "#" === a && (a = ""), "r" != c || l || (c = "g"), c = Ka.get(c) || M;
    var d = o && s;
    return function (t)
    {
      if (p && t % 1) return "";
      var e = 0 > t || 0 === t && 0 > 1 / t ? (t = -t, "-") : i;
      if (0 > f)
      {
        var g = ja.formatPrefix(t, l);
        t = g.scale(t), h = g.symbol
      }
      else t *= f;
      t = c(t, l), !o && s && (t = Qa(t));
      var m = a.length + t.length + (d ? 0 : e.length),
        v = u > m ? Array(m = u - m + 1).join(n) : "";
      return d && (t = Qa(v + t)), Oa && t.replace(".", Oa), e += a, ("<" === r ? e + t + v : ">" === r ? v + e + t : "^" === r ? v.substring(0, m >>= 1) + e + t + v.substring(m) : e + (d ? t : v + t)) + h
    }
  };
  var Ja = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,
    Ka = ja.map(
    {
      b: function (t)
      {
        return t.toString(2)
      },
      c: function (t)
      {
        return String.fromCharCode(t)
      },
      o: function (t)
      {
        return t.toString(8)
      },
      x: function (t)
      {
        return t.toString(16)
      },
      X: function (t)
      {
        return t.toString(16).toUpperCase()
      },
      g: function (t, e)
      {
        return t.toPrecision(e)
      },
      e: function (t, e)
      {
        return t.toExponential(e)
      },
      f: function (t, e)
      {
        return t.toFixed(e)
      },
      r: function (t, e)
      {
        return (t = ja.round(t, w(t, e))).toFixed(Math.max(0, Math.min(20, w(t * (1 + 1e-15), e))))
      }
    }),
    Qa = o;
  if (Ha)
  {
    var to = Ha.length;
    Qa = function (t)
    {
      for (var e = t.lastIndexOf("."), n = e >= 0 ? "." + t.substring(e + 1) : (e = t.length, ""), r = [], i = 0, a = Ha[0]; e > 0 && a > 0;) r.push(t.substring(e -= a, e + a)), a = Ha[i = (i + 1) % to];
      return r.reverse().join(Ia || "") + n
    }
  }
  var eo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(k);
  ja.formatPrefix = function (t, e)
  {
    var n = 0;
    return t && (0 > t && (t *= -1), e && (t = ja.round(t, w(t, e))), n = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), n = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= n ? n + 1 : n - 1) / 3)))), eo[8 + n / 3]
  };
  var no = function ()
  {
    return o
  }, ro = ja.map(
    {
      linear: no,
      poly: B,
      quad: function ()
      {
        return C
      },
      cubic: function ()
      {
        return E
      },
      sin: function ()
      {
        return L
      },
      exp: function ()
      {
        return z
      },
      circle: function ()
      {
        return P
      },
      elastic: j,
      back: D,
      bounce: function ()
      {
        return F
      }
    }),
    io = ja.map(
    {
      "in": o,
      out: N,
      "in-out": A,
      "out-in": function (t)
      {
        return A(N(t))
      }
    });
  ja.ease = function (t)
  {
    var e = t.indexOf("-"),
      n = e >= 0 ? t.substring(0, e) : t,
      r = e >= 0 ? t.substring(e + 1) : "in";
    return n = ro.get(n) || no, r = io.get(r) || o, S(r(n.apply(null, Array.prototype.slice.call(arguments, 1))))
  }, ja.event = null, ja.transform = function (t)
  {
    var e = Raphael(document.body, 0, 0);
    return (ja.transform = function (t)
    {
      var n = e.circle().transform(Gn(t)),
        r = n.matrix;
      return n.remove(), new I(r || oo)
    })(t)
  }, I.prototype.toString = function ()
  {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
  };
  var ao = 180 / Math.PI,
    oo = {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0
    };
  ja.interpolate = function (t, e)
  {
    for (var n, r = ja.interpolators.length; --r >= 0 && !(n = ja.interpolators[r](t, e)););
    return n
  }, ja.interpolateNumber = function (t, e)
  {
    return e -= t,
    function (n)
    {
      return t + e * n
    }
  }, ja.interpolateRound = function (t, e)
  {
    return e -= t,
    function (n)
    {
      return Math.round(t + e * n)
    }
  }, ja.interpolateString = function (t, e)
  {
    var n, r, i, a, o, u = 0,
      s = 0,
      l = [],
      c = [];
    for (uo.lastIndex = 0, r = 0; n = uo.exec(e); ++r) n.index && l.push(e.substring(u, s = n.index)), c.push(
    {
      i: l.length,
      x: n[0]
    }), l.push(null), u = uo.lastIndex;
    for (e.length > u && l.push(e.substring(u)), r = 0, a = c.length;
      (n = uo.exec(t)) && a > r; ++r)
      if (o = c[r], o.x == n[0])
      {
        if (o.i)
          if (null == l[o.i + 1])
            for (l[o.i - 1] += o.x, l.splice(o.i, 1), i = r + 1; a > i; ++i) c[i].i--;
          else
            for (l[o.i - 1] += o.x + l[o.i + 1], l.splice(o.i, 2), i = r + 1; a > i; ++i) c[i].i -= 2;
          else if (null == l[o.i + 1]) l[o.i] = o.x;
        else
          for (l[o.i] = o.x + l[o.i + 1], l.splice(o.i + 1, 1), i = r + 1; a > i; ++i) c[i].i--;
        c.splice(r, 1), a--, r--
      }
      else o.x = ja.interpolateNumber(parseFloat(n[0]), parseFloat(o.x));
    for (; a > r;) o = c.pop(), null == l[o.i + 1] ? l[o.i] = o.x : (l[o.i] = o.x + l[o.i + 1], l.splice(o.i + 1, 1)), a--;
    return 1 === l.length ? null == l[0] ? c[0].x : function ()
    {
      return e
    } : function (t)
    {
      for (r = 0; a > r; ++r) l[(o = c[r]).i] = o.x(t);
      return l.join("")
    }
  }, ja.interpolateTransform = function (t, e)
  {
    var n, r = [],
      i = [],
      a = ja.transform(t),
      o = ja.transform(e),
      u = a.translate,
      s = o.translate,
      l = a.rotate,
      c = o.rotate,
      f = a.skew,
      h = o.skew,
      p = a.scale,
      d = o.scale;
    return u[0] != s[0] || u[1] != s[1] ? (r.push("translate(", null, ",", null, ")"), i.push(
    {
      i: 1,
      x: ja.interpolateNumber(u[0], s[0])
    },
    {
      i: 3,
      x: ja.interpolateNumber(u[1], s[1])
    })) : s[0] || s[1] ? r.push("translate(" + s + ")") : r.push(""), l != c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), i.push(
    {
      i: r.push(r.pop() + "rotate(", null, ")") - 2,
      x: ja.interpolateNumber(l, c)
    })) : c && r.push(r.pop() + "rotate(" + c + ")"), f != h ? i.push(
    {
      i: r.push(r.pop() + "skewX(", null, ")") - 2,
      x: ja.interpolateNumber(f, h)
    }) : h && r.push(r.pop() + "skewX(" + h + ")"), p[0] != d[0] || p[1] != d[1] ? (n = r.push(r.pop() + "scale(", null, ",", null, ")"), i.push(
    {
      i: n - 4,
      x: ja.interpolateNumber(p[0], d[0])
    },
    {
      i: n - 2,
      x: ja.interpolateNumber(p[1], d[1])
    })) : (1 != d[0] || 1 != d[1]) && r.push(r.pop() + "scale(" + d + ")"), n = i.length,
    function (t)
    {
      for (var e, a = -1; n > ++a;) r[(e = i[a]).i] = e.x(t);
      return r.join("")
    }
  }, ja.interpolateRgb = function (t, e)
  {
    t = ja.rgb(t), e = ja.rgb(e);
    var n = t.r,
      r = t.g,
      i = t.b,
      a = e.r - n,
      o = e.g - r,
      u = e.b - i;
    return function (t)
    {
      return "#" + J(Math.round(n + a * t)) + J(Math.round(r + o * t)) + J(Math.round(i + u * t))
    }
  }, ja.interpolateHsl = function (t, e)
  {
    t = ja.hsl(t), e = ja.hsl(e);
    var n = t.h,
      r = t.s,
      i = t.l,
      a = e.h - n,
      o = e.s - r,
      u = e.l - i;
    return a > 180 ? a -= 360 : -180 > a && (a += 360),
    function (t)
    {
      return ae(n + a * t, r + o * t, i + u * t) + ""
    }
  }, ja.interpolateLab = function (t, e)
  {
    t = ja.lab(t), e = ja.lab(e);
    var n = t.l,
      r = t.a,
      i = t.b,
      a = e.l - n,
      o = e.a - r,
      u = e.b - i;
    return function (t)
    {
      return fe(n + a * t, r + o * t, i + u * t) + ""
    }
  }, ja.interpolateHcl = function (t, e)
  {
    t = ja.hcl(t), e = ja.hcl(e);
    var n = t.h,
      r = t.c,
      i = t.l,
      a = e.h - n,
      o = e.c - r,
      u = e.l - i;
    return a > 180 ? a -= 360 : -180 > a && (a += 360),
    function (t)
    {
      return se(n + a * t, r + o * t, i + u * t) + ""
    }
  }, ja.interpolateArray = function (t, e)
  {
    var n, r = [],
      i = [],
      a = t.length,
      o = e.length,
      u = Math.min(t.length, e.length);
    for (n = 0; u > n; ++n) r.push(ja.interpolate(t[n], e[n]));
    for (; a > n; ++n) i[n] = t[n];
    for (; o > n; ++n) i[n] = e[n];
    return function (t)
    {
      for (n = 0; u > n; ++n) i[n] = r[n](t);
      return i
    }
  }, ja.interpolateObject = function (t, e)
  {
    var n, r = {}, i = {};
    for (n in t) n in e ? r[n] = Y(n)(t[n], e[n]) : i[n] = t[n];
    for (n in e) n in t || (i[n] = e[n]);
    return function (t)
    {
      for (n in r) i[n] = r[n](t);
      return i
    }
  };
  var uo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  ja.interpolators = [ja.interpolateObject,
    function (t, e)
    {
      return e instanceof Array && ja.interpolateArray(t, e)
    },
    function (t, e)
    {
      return ("string" == typeof t || "string" == typeof e) && ja.interpolateString(t + "", e + "")
    },
    function (t, e)
    {
      return ("string" == typeof e ? lo.has(e) || /^(#|rgb\(|hsl\()/.test(e) : e instanceof $) && ja.interpolateRgb(t, e)
    },
    function (t, e)
    {
      return !isNaN(t = +t) && !isNaN(e = +e) && ja.interpolateNumber(t, e)
    }
  ], $.prototype.toString = function ()
  {
    return this.rgb() + ""
  }, ja.rgb = function (t, e, n)
  {
    return 1 === arguments.length ? t instanceof W ? Z(t.r, t.g, t.b) : K("" + t, Z, ae) : Z(~~t, ~~e, ~~n)
  };
  var so = W.prototype = new $;
  so.brighter = function (t)
  {
    t = Math.pow(.7, arguments.length ? t : 1);
    var e = this.r,
      n = this.g,
      r = this.b,
      i = 30;
    return e || n || r ? (e && i > e && (e = i), n && i > n && (n = i), r && i > r && (r = i), Z(Math.min(255, Math.floor(e / t)), Math.min(255, Math.floor(n / t)), Math.min(255, Math.floor(r / t)))) : Z(i, i, i)
  }, so.darker = function (t)
  {
    return t = Math.pow(.7, arguments.length ? t : 1), Z(Math.floor(t * this.r), Math.floor(t * this.g), Math.floor(t * this.b))
  }, so.hsl = function ()
  {
    return Q(this.r, this.g, this.b)
  }, so.toString = function ()
  {
    return "#" + J(this.r) + J(this.g) + J(this.b)
  };
  var lo = ja.map(
  {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  });
  lo.forEach(function (t, e)
  {
    lo.set(t, K(e, Z, ae))
  }), ja.hsl = function (t, e, n)
  {
    return 1 === arguments.length ? t instanceof ie ? re(t.h, t.s, t.l) : K("" + t, Q, re) : re(+t, +e, +n)
  };
  var co = ie.prototype = new $;
  co.brighter = function (t)
  {
    return t = Math.pow(.7, arguments.length ? t : 1), re(this.h, this.s, this.l / t)
  }, co.darker = function (t)
  {
    return t = Math.pow(.7, arguments.length ? t : 1), re(this.h, this.s, t * this.l)
  }, co.rgb = function ()
  {
    return ae(this.h, this.s, this.l)
  }, ja.hcl = function (t, e, n)
  {
    return 1 === arguments.length ? t instanceof ue ? oe(t.h, t.c, t.l) : t instanceof ce ? he(t.l, t.a, t.b) : he((t = te((t = ja.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : oe(+t, +e, +n)
  };
  var fo = ue.prototype = new $;
  fo.brighter = function (t)
  {
    return oe(this.h, this.c, Math.min(100, this.l + ho * (arguments.length ? t : 1)))
  }, fo.darker = function (t)
  {
    return oe(this.h, this.c, Math.max(0, this.l - ho * (arguments.length ? t : 1)))
  }, fo.rgb = function ()
  {
    return se(this.h, this.c, this.l).rgb()
  }, ja.lab = function (t, e, n)
  {
    return 1 === arguments.length ? t instanceof ce ? le(t.l, t.a, t.b) : t instanceof ue ? se(t.l, t.c, t.h) : te((t = ja.rgb(t)).r, t.g, t.b) : le(+t, +e, +n)
  };
  var ho = 18,
    po = .95047,
    go = 1,
    mo = 1.08883,
    vo = ce.prototype = new $;
  vo.brighter = function (t)
  {
    return le(Math.min(100, this.l + ho * (arguments.length ? t : 1)), this.a, this.b)
  }, vo.darker = function (t)
  {
    return le(Math.max(0, this.l - ho * (arguments.length ? t : 1)), this.a, this.b)
  }, vo.rgb = function ()
  {
    return fe(this.l, this.a, this.b)
  };
  var yo = document.documentElement,
    xo = (yo.matchesSelector || yo.webkitMatchesSelector || yo.mozMatchesSelector || yo.msMatchesSelector || yo.oMatchesSelector, Sizzle.matchesSelector),
    bo = function (t, e)
    {
      e.domNode && (e = e.domNode);
      var n = Sizzle(t, e)[0] || null;
      return n && (n.r2d3 || n)
    }, _o = function (t, e)
    {
      e.domNode && (e = e.domNode);
      for (var n = Sizzle.uniqueSort(Sizzle(t, e)), r = [], i = 0; n.length > i; i++)
      {
        var a = n[i];
        r.push(a.r2d3 || a)
      }
      return r
    }, wo = [];
  ja.selection = function ()
  {
    return ko
  }, ja.selection.prototype = wo, wo.select = function (t)
  {
    var e, n, r, i, a = [];
    "function" != typeof t && (t = ve(t));
    for (var o = -1, u = this.length; u > ++o;)
    {
      a.push(e = []), e.parentNode = (r = this[o]).parentNode;
      for (var s = -1, l = r.length; l > ++s;)(i = r[s]) ? (e.push(n = t.call(i, i.__data__, s)), n && "__data__" in i && (n.__data__ = i.__data__)) : e.push(null)
    }
    return me(a)
  }, wo.selectAll = function (t)
  {
    var e, n, r = [];
    "function" != typeof t && (t = ye(t));
    for (var i = -1, a = this.length; a > ++i;)
      for (var o = this[i], u = -1, s = o.length; s > ++u;)(n = o[u]) && (r.push(e = Ua(t.call(n, n.__data__, u))), e.parentNode = n);
    return me(r)
  }, wo.attr = function (t, e)
  {
    if (2 > arguments.length)
    {
      if ("string" == typeof t)
      {
        var n = this.node();
        return t = ja.ns.qualify(t), t.local ? n.getAttributeNS(t.space, t.local) : n.getAttribute(t)
      }
      for (e in t) this.each(xe(e, t[e]));
      return this
    }
    return this.each(xe(t, e))
  }, wo.classed = function (t, e)
  {
    if (2 > arguments.length)
    {
      if ("string" == typeof t)
      {
        var n = this.node(),
          r = (t = t.trim().split(/^|\s+/g)).length,
          i = -1;
        if (e = n.classList)
        {
          for (; r > ++i;)
            if (!e.contains(t[i])) return !1
        }
        else
          for (e = n.getAttribute("class") || "", null != e.baseVal && (e = e.baseVal); r > ++i;)
            if (!be(t[i]).test(e)) return !1; return !0
      }
      for (e in t) this.each(_e(e, t[e]));
      return this
    }
    return this.each(_e(t, e))
  }, wo.style = function (t, e, n)
  {
    var r = arguments.length;
    if (3 > r)
    {
      if ("string" != typeof t)
      {
        2 > r && (e = "");
        for (n in t) this.each(Me(n, t[n], e));
        return this
      }
      if (2 > r) return this.node().paper ? this.node().raphaelNode.attr(t) : window.getComputedStyle(this.node(), null).getPropertyValue(t);
      n = ""
    }
    return this.each(Me(t, e, n))
  }, wo.property = function (t, e)
  {
    if (2 > arguments.length)
    {
      if ("string" == typeof t) return this.node()[t];
      for (e in t) this.each(ke(e, t[e]));
      return this
    }
    return this.each(ke(t, e))
  }, wo.text = function (t)
  {
    return this.node().paper ? 1 > arguments.length ? this.node().getAttribute("text") : this.each("function" == typeof t ? function ()
    {
      var e = t.apply(this, arguments);
      this.setAttribute("text", null == e ? "" : e)
    } : null == t ? function ()
    {
      this.setAttribute("text", "")
    } : function ()
    {
      this.setAttribute("text", t)
    }) : 1 > arguments.length ? this.node().textContent : this.each("function" == typeof t ? function ()
    {
      var e = t.apply(this, arguments);
      this.textContent = null == e ? "" : e
    } : null == t ? function ()
    {
      this.textContent = ""
    } : function ()
    {
      this.textContent = t
    })
  }, wo.html = function (t)
  {
    return arguments.length ? this.each("function" == typeof t ? function ()
    {
      var e = t.apply(this, arguments);
      this.innerHTML = null == e ? "" : e
    } : null == t ? function ()
    {
      this.innerHTML = ""
    } : function ()
    {
      this.innerHTML = t
    }) : this.node().innerHTML
  };
  var Mo = function ()
  {
    var t = {}, e = document.createElement("div");
    return e.style.display = "none",
    function (n, r)
    {
      if ("title" === r) return document.createElement(r);
      e.parentNode !== document.body && document.body.appendChild(e), void 0 === t[r] && (t[r] = document.createElement(r)), e.innerHTML = t[r].outerHTML;
      var i = e.firstChild;
      return e.removeChild(i), i
    }
  }();
  wo.append = function (t)
  {
    function e()
    {
      return "svg" === t.local ? Xn(this) : this.appendChild(Mo(this.namespaceURI, t))
    }

    function n()
    {
      return "svg" === t.local ? Xn(this) : this.appendChild(Mo(t.space, t.local))
    }
    return t = ja.ns.qualify(t), this.select(t.local ? n : e)
  }, wo.insert = function (t, e)
  {
    function n()
    {
      return this.insertBefore(qa.createElementNS(this.namespaceURI, t), bo(e, this))
    }

    function r()
    {
      return this.insertBefore(qa.createElementNS(t.space, t.local), bo(e, this))
    }
    return t = ja.ns.qualify(t), this.select(t.local ? r : n)
  }, wo.remove = function ()
  {
    return this.each(function ()
    {
      var t = this.parentNode;
      t && t.removeChild(this)
    })
  }, wo.data = function (t, e)
  {
    function n(t, n)
    {
      var r, i, o, u = t.length,
        f = n.length,
        h = Math.min(u, f),
        p = Array(f),
        d = Array(f),
        g = Array(u);
      if (e)
      {
        var m, v = new a,
          y = new a,
          x = [];
        for (r = -1; u > ++r;) m = e.call(i = t[r], i.__data__, r), v.has(m) ? g[r] = i : v.set(m, i), x.push(m);
        for (r = -1; f > ++r;) m = e.call(n, o = n[r], r), (i = v.get(m)) ? (p[r] = i, i.__data__ = o) : y.has(m) || (d[r] = Se(o)), y.set(m, o), v.remove(m);
        for (r = -1; u > ++r;) v.has(x[r]) && (g[r] = t[r])
      }
      else
      {
        for (r = -1; h > ++r;) i = t[r], o = n[r], i ? (i.__data__ = o, p[r] = i) : d[r] = Se(o);
        for (; f > r; ++r) d[r] = Se(n[r]);
        for (; u > r; ++r) g[r] = t[r]
      }
      d.update = p, d.parentNode = p.parentNode = g.parentNode = t.parentNode, s.push(d), l.push(p), c.push(g)
    }
    var r, i, o = -1,
      u = this.length;
    if (!arguments.length)
    {
      for (t = Array(u = (r = this[0]).length); u > ++o;)(i = r[o]) && (t[o] = i.__data__);
      return t
    }
    var s = Te([]),
      l = me([]),
      c = me([]);
    if ("function" == typeof t)
      for (; u > ++o;) n(r = this[o], t.call(r, r.parentNode.__data__, o));
    else
      for (; u > ++o;) n(r = this[o], t);
    return l.enter = function ()
    {
      return s
    }, l.exit = function ()
    {
      return c
    }, l
  }, wo.datum = function (t)
  {
    return arguments.length ? this.property("__data__", t) : this.property("__data__")
  }, wo.filter = function (t)
  {
    var e, n, r, i = [];
    "function" != typeof t && (t = Ne(t));
    for (var a = 0, o = this.length; o > a; a++)
    {
      i.push(e = []), e.parentNode = (n = this[a]).parentNode;
      for (var u = 0, s = n.length; s > u; u++)(r = n[u]) && t.call(r, r.__data__, u) && e.push(r)
    }
    return me(i)
  }, wo.order = function ()
  {
    for (var t = -1, e = this.length; e > ++t;)
      for (var n, r = this[t], i = r.length - 1, a = r[i]; --i >= 0;)(n = r[i]) && (a && a !== n.nextSibling && a.parentNode.insertBefore(n, a), a = n);
    return this
  }, wo.sort = function (t)
  {
    t = Ae.apply(this, arguments);
    for (var e = -1, n = this.length; n > ++e;) this[e].sort(t);
    return this.order()
  }, wo.on = function (t, e, n)
  {
    var r = arguments.length;
    if (3 > r)
    {
      if ("string" != typeof t)
      {
        2 > r && (e = !1);
        for (n in t) this.each(Ce(n, t[n], e));
        return this
      }
      if (2 > r) return (r = this.node()["__on" + t]) && r._;
      n = !1
    }
    return this.each(Ce(t, e, n))
  }, wo.each = function (t)
  {
    return Ee(this, function (e, n, r)
    {
      t.call(e, e.__data__, n, r)
    })
  }, wo.call = function (t)
  {
    var e = Ua(arguments);
    return t.apply(e[0] = this, e), this
  }, wo.empty = function ()
  {
    return !this.node()
  }, wo.node = function ()
  {
    for (var t = 0, e = this.length; e > t; t++)
      for (var n = this[t], r = 0, i = n.length; i > r; r++)
      {
        var a = n[r];
        if (a) return a
      }
    return null
  }, wo.transition = function ()
  {
    var t, e, n = No || ++Co,
      r = [],
      i = Object.create(Eo);
    i.time = Date.now();
    for (var a = -1, o = this.length; o > ++a;)
    {
      r.push(t = []);
      for (var u = this[a], s = -1, l = u.length; l > ++s;)(e = u[s]) && Le(e, s, n, i), t.push(e)
    }
    return Be(r, n)
  };
  var ko = me([
    [qa]
  ]);
  ko[0].parentNode = yo, ja.select = function (t)
  {
    return "string" == typeof t ? ko.select(t) : me([
      [t]
    ])
  }, ja.selectAll = function (t)
  {
    return "string" == typeof t ? ko.selectAll(t) : me([Ua(t)])
  };
  var So = [];
  ja.selection.enter = Te, ja.selection.enter.prototype = So, So.append = wo.append, So.insert = wo.insert, So.empty = wo.empty, So.node = wo.node, So.select = function (t)
  {
    for (var e, n, r, i, a, o = [], u = -1, s = this.length; s > ++u;)
    {
      r = (i = this[u]).update, o.push(e = []), e.parentNode = i.parentNode;
      for (var l = -1, c = i.length; c > ++l;)(a = i[l]) ? (e.push(r[l] = n = t.call(i.parentNode, a.__data__, l)), n.__data__ = a.__data__) : e.push(null)
    }
    return me(o)
  };
  var No, Ao = [],
    Co = 0,
    Eo = {
      ease: T,
      delay: 0,
      duration: 250
    };
  Ao.call = wo.call, Ao.empty = wo.empty, Ao.node = wo.node, ja.transition = function (t)
  {
    return arguments.length ? No ? t.transition() : t : ko.transition()
  }, ja.transition.prototype = Ao, Ao.select = function (t)
  {
    var e, n, r, i = this.id,
      a = [];
    "function" != typeof t && (t = ve(t));
    for (var o = -1, u = this.length; u > ++o;)
    {
      a.push(e = []);
      for (var s = this[o], l = -1, c = s.length; c > ++l;)(r = s[l]) && (n = t.call(r, r.__data__, l)) ? ("__data__" in r && (n.__data__ = r.__data__), Le(n, l, i, r.__transition__[i]), e.push(n)) : e.push(null)
    }
    return Be(a, i)
  }, Ao.selectAll = function (t)
  {
    var e, n, r, i, a, o = this.id,
      u = [];
    "function" != typeof t && (t = ye(t));
    for (var s = -1, l = this.length; l > ++s;)
      for (var c = this[s], f = -1, h = c.length; h > ++f;)
        if (r = c[f])
        {
          a = r.__transition__[o], n = t.call(r, r.__data__, f), u.push(e = []);
          for (var p = -1, d = n.length; d > ++p;) Le(i = n[p], p, o, a), e.push(i)
        }
    return Be(u, o)
  }, Ao.filter = function (t)
  {
    var e, n, r, i = [];
    "function" != typeof t && (t = Ne(t));
    for (var a = 0, o = this.length; o > a; a++)
    {
      i.push(e = []);
      for (var n = this[a], u = 0, s = n.length; s > u; u++)(r = n[u]) && t.call(r, r.__data__, u) && e.push(r)
    }
    return Be(i, this.id, this.time).ease(this.ease())
  }, Ao.attr = function (t, e)
  {
    function n()
    {
      this.removeAttribute(a)
    }

    function r()
    {
      this.removeAttributeNS(a.space, a.local)
    }
    if (2 > arguments.length)
    {
      for (e in t) this.attr(e, t[e]);
      return this
    }
    var i = Y(t),
      a = ja.ns.qualify(t);
    return Pe(this, "attr." + t, e, function (t)
    {
      function e()
      {
        var e, n = this.getAttribute(a);
        return n !== t && (e = i(n, t), function (t)
        {
          this.setAttribute(a, e(t))
        })
      }

      function o()
      {
        var e, n = this.getAttributeNS(a.space, a.local);
        return n !== t && (e = i(n, t), function (t)
        {
          this.setAttributeNS(a.space, a.local, e(t))
        })
      }
      return null == t ? a.local ? r : n : (t += "", a.local ? o : e)
    })
  }, Ao.attrTween = function (t, e)
  {
    function n(t, n)
    {
      var r = e.call(this, t, n, this.getAttribute(i));
      return r && function (t)
      {
        this.setAttribute(i, r(t))
      }
    }

    function r(t, n)
    {
      var r = e.call(this, t, n, this.getAttributeNS(i.space, i.local));
      return r && function (t)
      {
        this.setAttributeNS(i.space, i.local, r(t))
      }
    }
    var i = ja.ns.qualify(t);
    return this.tween("attr." + t, i.local ? r : n)
  }, Ao.style = function (t, e, n)
  {
    function r()
    {
      this.raphaelNode ? this.removeStyleProperty(t) : this.style.removeProperty(t)
    }
    var i = arguments.length;
    if (3 > i)
    {
      if ("string" != typeof t)
      {
        2 > i && (e = "");
        for (n in t) this.style(n, t[n], e);
        return this
      }
      n = ""
    }
    var a = Y(t);
    return Pe(this, "style." + t, e, function (e)
    {
      function i()
      {
        if (this.raphaelNode)
        {
          var r, i = this.getCurrentStyle()[t];
          return i !== e && (r = a(i, e), function (e)
          {
            this.setStyleProperty(t, r(e), n)
          })
        }
        var r, i = Ra.getComputedStyle(this, null).getPropertyValue(t);
        return i !== e && (r = a(i, e), function (e)
        {
          this.style.setProperty(t, r(e), n)
        })
      }
      return null == e ? r : (e += "", i)
    })
  }, Ao.styleTween = function (t, e, n)
  {
    return 3 > arguments.length && (n = ""), this.raphaelNode ? this.tween("style." + t, function (r, i)
    {
      var a = e.call(this, r, i, this.getCurrentStyle()[t]);
      return a && function (e)
      {
        this.setStyleProperty(t, a(e), n)
      }
    }) : this.tween("style." + t, function (r, i)
    {
      var a = e.call(this, r, i, Ra.getComputedStyle(this, null).getPropertyValue(t));
      return a && function (e)
      {
        this.style.setProperty(t, a(e), n)
      }
    })
  }, Ao.text = function (t)
  {
    return Pe(this, "text", t, ze)
  }, Ao.remove = function ()
  {
    return this.each("end.transition", function ()
    {
      var t;
      !this.__transition__ && (t = this.parentNode) && t.removeChild(this)
    })
  }, Ao.ease = function (t)
  {
    var e = this.id;
    return 1 > arguments.length ? this.node().__transition__[e].ease : ("function" != typeof t && (t = ja.ease.apply(ja, arguments)), Ee(this, function (n)
    {
      n.__transition__[e].ease = t
    }))
  }, Ao.delay = function (t)
  {
    var e = this.id;
    return Ee(this, "function" == typeof t ? function (n, r, i)
    {
      n.__transition__[e].delay = 0 | t.call(n, n.__data__, r, i)
    } : (t |= 0, function (n)
    {
      n.__transition__[e].delay = t
    }))
  }, Ao.duration = function (t)
  {
    var e = this.id;
    return Ee(this, "function" == typeof t ? function (n, r, i)
    {
      n.__transition__[e].duration = Math.max(1, 0 | t.call(n, n.__data__, r, i))
    } : (t = Math.max(1, 0 | t), function (n)
    {
      n.__transition__[e].duration = t
    }))
  }, Ao.each = function (t, e)
  {
    var n = this.id;
    if (2 > arguments.length)
    {
      var r = Eo,
        i = No;
      No = n, Ee(this, function (e, r, i)
      {
        Eo = e.__transition__[n], t.call(e, e.__data__, r, i)
      }), Eo = r, No = i
    }
    else Ee(this, function (r)
    {
      r.__transition__[n].event.on(t, e)
    });
    return this
  }, Ao.transition = function ()
  {
    for (var t, e, n, r, i = this.id, a = ++Co, o = [], u = 0, s = this.length; s > u; u++)
    {
      o.push(t = []);
      for (var e = this[u], l = 0, c = e.length; c > l; l++)(n = e[l]) && (r = Object.create(n.__transition__[i]), r.delay += r.duration, Le(n, l, a, r)), t.push(n)
    }
    return Be(o, a)
  }, Ao.tween = function (t, e)
  {
    var n = this.id;
    return 2 > arguments.length ? this.node().__transition__[n].tween.get(t) : Ee(this, null == e ? function (e)
    {
      e.__transition__[n].tween.remove(t)
    } : function (r)
    {
      r.__transition__[n].tween.set(t, e)
    })
  };
  var To, Bo, Lo = 0,
    zo = {}, Po = null;
  ja.timer = function (t, e, n)
  {
    if (3 > arguments.length)
    {
      if (2 > arguments.length) e = 0;
      else if (!isFinite(e)) return;
      n = Date.now()
    }
    var r = zo[t.id];
    r && r.callback === t ? (r.then = n, r.delay = e) : zo[t.id = ++Lo] = Po = {
      callback: t,
      then: n,
      delay: e,
      next: Po
    }, To || (Bo = clearTimeout(Bo), To = 1, jo(je))
  }, ja.timer.flush = function ()
  {
    for (var t, e = Date.now(), n = Po; n;) t = e - n.then, n.delay || (n.flush = n.callback(t)), n = n.next;
    De()
  };
  var jo = Ra.requestAnimationFrame || Ra.webkitRequestAnimationFrame || Ra.mozRequestAnimationFrame || Ra.oRequestAnimationFrame || Ra.msRequestAnimationFrame || function (t)
    {
      setTimeout(t, 17)
    };
  ja.mouse = function (t)
  {
    return Fe(t, R())
  };
  var Do = /WebKit/.test(Ra.navigator.userAgent) ? -1 : 0;
  ja.touches = function (t, e)
  {
    return 2 > arguments.length && (e = R().touches), e ? Ua(e).map(function (e)
    {
      var n = Fe(t, e);
      return n.identifier = e.identifier, n
    }) : []
  }, ja.scale = {}, ja.scale.linear = function ()
  {
    return Ue([0, 1], [0, 1], ja.interpolate, !1)
  }, ja.scale.log = function ()
  {
    return Je(ja.scale.linear(), Ke)
  };
  var Fo = ja.format(".0e");
  Ke.pow = function (t)
  {
    return Math.pow(10, t)
  }, Qe.pow = function (t)
  {
    return -Math.pow(10, -t)
  }, ja.scale.pow = function ()
  {
    return tn(ja.scale.linear(), 1)
  }, ja.scale.sqrt = function ()
  {
    return ja.scale.pow().exponent(.5)
  }, ja.scale.ordinal = function ()
  {
    return nn([],
    {
      t: "range",
      a: [
        []
      ]
    })
  }, ja.scale.category10 = function ()
  {
    return ja.scale.ordinal().range(qo)
  }, ja.scale.category20 = function ()
  {
    return ja.scale.ordinal().range(Ro)
  }, ja.scale.category20b = function ()
  {
    return ja.scale.ordinal().range(Oo)
  }, ja.scale.category20c = function ()
  {
    return ja.scale.ordinal().range(Io)
  };
  var qo = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
    Ro = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"],
    Oo = ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"],
    Io = ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"];
  ja.scale.quantile = function ()
  {
    return rn([], [])
  }, ja.scale.quantize = function ()
  {
    return an(0, 1, [0, 1])
  }, ja.scale.threshold = function ()
  {
    return on([.5], [0, 1])
  }, ja.scale.identity = function ()
  {
    return un([0, 1])
  }, ja.svg = {}, ja.svg.arc = function ()
  {
    function t()
    {
      var t = e.apply(this, arguments),
        a = n.apply(this, arguments),
        o = r.apply(this, arguments) + Ho,
        u = i.apply(this, arguments) + Ho,
        s = (o > u && (s = o, o = u, u = s), u - o),
        l = za > s ? "0" : "1",
        c = Math.cos(o),
        f = Math.sin(o),
        h = Math.cos(u),
        p = Math.sin(u);
      return s >= Uo ? t ? "M0," + a + "A" + a + "," + a + " 0 1,1 0," + -a + "A" + a + "," + a + " 0 1,1 0," + a + "M0," + t + "A" + t + "," + t + " 0 1,0 0," + -t + "A" + t + "," + t + " 0 1,0 0," + t + "Z" : "M0," + a + "A" + a + "," + a + " 0 1,1 0," + -a + "A" + a + "," + a + " 0 1,1 0," + a + "Z" : t ? "M" + a * c + "," + a * f + "A" + a + "," + a + " 0 " + l + ",1 " + a * h + "," + a * p + "L" + t * h + "," + t * p + "A" + t + "," + t + " 0 " + l + ",0 " + t * c + "," + t * f + "Z" : "M" + a * c + "," + a * f + "A" + a + "," + a + " 0 " + l + ",1 " + a * h + "," + a * p + "L0,0" + "Z"
    }
    var e = sn,
      n = ln,
      r = cn,
      i = fn;
    return t.innerRadius = function (n)
    {
      return arguments.length ? (e = s(n), t) : e
    }, t.outerRadius = function (e)
    {
      return arguments.length ? (n = s(e), t) : n
    }, t.startAngle = function (e)
    {
      return arguments.length ? (r = s(e), t) : r
    }, t.endAngle = function (e)
    {
      return arguments.length ? (i = s(e), t) : i
    }, t.centroid = function ()
    {
      var t = (e.apply(this, arguments) + n.apply(this, arguments)) / 2,
        a = (r.apply(this, arguments) + i.apply(this, arguments)) / 2 + Ho;
      return [Math.cos(a) * t, Math.sin(a) * t]
    }, t
  };
  var Ho = -za / 2,
    Uo = 2 * za - 1e-6;
  ja.svg.line = function ()
  {
    return hn(o)
  };
  var Vo = ja.map(
  {
    linear: gn,
    "linear-closed": mn,
    "step-before": vn,
    "step-after": yn,
    basis: kn,
    "basis-open": Sn,
    "basis-closed": Nn,
    bundle: An,
    cardinal: _n,
    "cardinal-open": xn,
    "cardinal-closed": bn,
    monotone: zn
  });
  Vo.forEach(function (t, e)
  {
    e.key = t, e.closed = /-closed$/.test(t)
  });
  var Yo = [0, 2 / 3, 1 / 3, 0],
    Go = [0, 1 / 3, 2 / 3, 0],
    Xo = [0, 1 / 6, 2 / 3, 1 / 6];
  ja.svg.line.radial = function ()
  {
    var t = hn(Pn);
    return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
  }, vn.reverse = yn, yn.reverse = vn, ja.svg.area = function ()
  {
    return jn(o)
  }, ja.svg.area.radial = function ()
  {
    var t = jn(Pn);
    return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
  }, ja.svg.chord = function ()
  {
    function n(t, e)
    {
      var n = r(this, u, t, e),
        s = r(this, l, t, e);
      return "M" + n.p0 + a(n.r, n.p1, n.a1 - n.a0) + (i(n, s) ? o(n.r, n.p1, n.r, n.p0) : o(n.r, n.p1, s.r, s.p0) + a(s.r, s.p1, s.a1 - s.a0) + o(s.r, s.p1, n.r, n.p0)) + "Z"
    }

    function r(t, e, n, r)
    {
      var i = e.call(t, n, r),
        a = c.call(t, i, r),
        o = f.call(t, i, r) + Ho,
        u = h.call(t, i, r) + Ho;
      return {
        r: a,
        a0: o,
        a1: u,
        p0: [a * Math.cos(o), a * Math.sin(o)],
        p1: [a * Math.cos(u), a * Math.sin(u)]
      }
    }

    function i(t, e)
    {
      return t.a0 == e.a0 && t.a1 == e.a1
    }

    function a(t, e, n)
    {
      return "A" + t + "," + t + " 0 " + +(n > za) + ",1 " + e
    }

    function o(t, e, n, r)
    {
      return "Q 0,0 " + r
    }
    var u = e,
      l = t,
      c = Dn,
      f = cn,
      h = fn;
    return n.radius = function (t)
    {
      return arguments.length ? (c = s(t), n) : c
    }, n.source = function (t)
    {
      return arguments.length ? (u = s(t), n) : u
    }, n.target = function (t)
    {
      return arguments.length ? (l = s(t), n) : l
    }, n.startAngle = function (t)
    {
      return arguments.length ? (f = s(t), n) : f
    }, n.endAngle = function (t)
    {
      return arguments.length ? (h = s(t), n) : h
    }, n
  }, ja.svg.diagonal = function ()
  {
    function n(t, e)
    {
      var n = r.call(this, t, e),
        o = i.call(this, t, e),
        u = (n.y + o.y) / 2,
        s = [n,
          {
            x: n.x,
            y: u
          },
          {
            x: o.x,
            y: u
          },
          o
        ];
      return s = s.map(a), "M" + s[0] + "C" + s[1] + " " + s[2] + " " + s[3]
    }
    var r = e,
      i = t,
      a = Fn;
    return n.source = function (t)
    {
      return arguments.length ? (r = s(t), n) : r
    }, n.target = function (t)
    {
      return arguments.length ? (i = s(t), n) : i
    }, n.projection = function (t)
    {
      return arguments.length ? (a = t, n) : a
    }, n
  }, ja.svg.diagonal.radial = function ()
  {
    var t = ja.svg.diagonal(),
      e = Fn,
      n = t.projection;
    return t.projection = function (t)
    {
      return arguments.length ? n(qn(e = t)) : e
    }, t
  }, ja.svg.symbol = function ()
  {
    function t(t, r)
    {
      return ($o.get(e.call(this, t, r)) || In)(n.call(this, t, r))
    }
    var e = On,
      n = Rn;
    return t.type = function (n)
    {
      return arguments.length ? (e = s(n), t) : e
    }, t.size = function (e)
    {
      return arguments.length ? (n = s(e), t) : n
    }, t
  };
  var $o = ja.map(
  {
    circle: In,
    cross: function (t)
    {
      var e = Math.sqrt(t / 5) / 2;
      return "M" + -3 * e + "," + -e + "H" + -e + "V" + -3 * e + "H" + e + "V" + -e + "H" + 3 * e + "V" + e + "H" + e + "V" + 3 * e + "H" + -e + "V" + e + "H" + -3 * e + "Z"
    },
    diamond: function (t)
    {
      var e = Math.sqrt(t / (2 * Wo)),
        n = e * Wo;
      return "M0," + -e + "L" + n + ",0" + " 0," + e + " " + -n + ",0" + "Z"
    },
    square: function (t)
    {
      var e = Math.sqrt(t) / 2;
      return "M" + -e + "," + -e + "L" + e + "," + -e + " " + e + "," + e + " " + -e + "," + e + "Z"
    },
    "triangle-down": function (t)
    {
      var e = Math.sqrt(t / Zo),
        n = e * Zo / 2;
      return "M0," + n + "L" + e + "," + -n + " " + -e + "," + -n + "Z"
    },
    "triangle-up": function (t)
    {
      var e = Math.sqrt(t / Zo),
        n = e * Zo / 2;
      return "M0," + -n + "L" + e + "," + n + " " + -e + "," + n + "Z"
    }
  });
  ja.svg.symbolTypes = $o.keys();
  var Zo = Math.sqrt(3),
    Wo = Math.tan(30 * Da);
  ja.svg.axis = function ()
  {
    function t(t)
    {
      t.each(function ()
      {
        var t, f = ja.select(this),
          h = null == l ? n.ticks ? n.ticks.apply(n, s) : n.domain() : l,
          p = null == e ? n.tickFormat ? n.tickFormat.apply(n, s) : String : e,
          d = Vn(n, h, c),
          g = f.selectAll(".tick.minor").data(d, String),
          m = g.enter().insert("line", ".tick").attr("class", "tick minor").style("opacity", 1e-6),
          v = ja.transition(g.exit()).style("opacity", 1e-6).remove(),
          y = ja.transition(g).style("opacity", 1),
          x = f.selectAll(".tick.major").data(h, String),
          b = x.enter().insert("g", "path").attr("class", "tick major").style("opacity", 1e-6),
          _ = ja.transition(x.exit()).style("opacity", 1e-6).remove(),
          w = ja.transition(x).style("opacity", 1),
          M = Oe(n),
          k = f.selectAll(".domain").data([0]),
          S = (k.enter().append("path").attr("class", "domain"), ja.transition(k)),
          N = n.copy(),
          A = this.__chart__ || N;
        this.__chart__ = N, b.append("line"), b.append("text");
        var C = b.select("line"),
          E = w.select("line"),
          T = x.select("text").text(p),
          B = b.select("text"),
          L = w.select("text");
        switch (r)
        {
        case "bottom":
          t = Hn, m.attr("y2", a), y.attr("x2", 0).attr("y2", a), C.attr("y2", i), B.attr("y", Math.max(i, 0) + u), E.attr("x2", 0).attr("y2", i), L.attr("x", 0).attr("y", Math.max(i, 0) + u), T.attr("dy", ".71em").style("text-anchor", "middle"), S.attr("d", "M" + M[0] + "," + o + "V0H" + M[1] + "V" + o);
          break;
        case "top":
          t = Hn, m.attr("y2", -a), y.attr("x2", 0).attr("y2", -a), C.attr("y2", -i), B.attr("y", -(Math.max(i, 0) + u)), E.attr("x2", 0).attr("y2", -i), L.attr("x", 0).attr("y", -(Math.max(i, 0) + u)), T.attr("dy", "0em").style("text-anchor", "middle"), S.attr("d", "M" + M[0] + "," + -o + "V0H" + M[1] + "V" + -o);
          break;
        case "left":
          t = Un, m.attr("x2", -a), y.attr("x2", -a).attr("y2", 0), C.attr("x2", -i), B.attr("x", -(Math.max(i, 0) + u)), E.attr("x2", -i).attr("y2", 0), L.attr("x", -(Math.max(i, 0) + u)).attr("y", 0), T.attr("dy", ".32em").style("text-anchor", "end"), S.attr("d", "M" + -o + "," + M[0] + "H0V" + M[1] + "H" + -o);
          break;
        case "right":
          t = Un, m.attr("x2", a), y.attr("x2", a).attr("y2", 0), C.attr("x2", i), B.attr("x", Math.max(i, 0) + u), E.attr("x2", i).attr("y2", 0), L.attr("x", Math.max(i, 0) + u).attr("y", 0), T.attr("dy", ".32em").style("text-anchor", "start"), S.attr("d", "M" + o + "," + M[0] + "H0V" + M[1] + "H" + o)
        }
        if (n.ticks) b.call(t, A), w.call(t, N), _.call(t, N), m.call(t, A), y.call(t, N), v.call(t, N);
        else
        {
          var z = N.rangeBand() / 2,
            P = function (t)
            {
              return N(t) + z
            };
          b.call(t, P), w.call(t, P)
        }
      })
    }
    var e, n = ja.scale.linear(),
      r = Jo,
      i = 6,
      a = 6,
      o = 6,
      u = 3,
      s = [10],
      l = null,
      c = 0;
    return t.scale = function (e)
    {
      return arguments.length ? (n = e, t) : n
    }, t.orient = function (e)
    {
      return arguments.length ? (r = e in Ko ? e + "" : Jo, t) : r
    }, t.ticks = function ()
    {
      return arguments.length ? (s = arguments, t) : s
    }, t.tickValues = function (e)
    {
      return arguments.length ? (l = e, t) : l
    }, t.tickFormat = function (n)
    {
      return arguments.length ? (e = n, t) : e
    }, t.tickSize = function (e, n)
    {
      if (!arguments.length) return i;
      var r = arguments.length - 1;
      return i = +e, a = r > 1 ? +n : i, o = r > 0 ? +arguments[r] : i, t
    }, t.tickPadding = function (e)
    {
      return arguments.length ? (u = +e, t) : u
    }, t.tickSubdivide = function (e)
    {
      return arguments.length ? (c = +e, t) : c
    }, t
  };
  var Jo = "bottom",
    Ko = {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1
    };
  ja.svg.brush = function ()
  {
    function t(a)
    {
      a.each(function ()
      {
        var a, o = ja.select(this),
          c = o.selectAll(".background").data([0]),
          f = o.selectAll(".extent").data([0]),
          h = o.selectAll(".resize").data(l, String);
        o.style("pointer-events", "all").on("mousedown.brush", i).on("touchstart.brush", i), c.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), f.enter().append("rect").attr("class", "extent").style("cursor", "move"), h.enter().append("g").attr("class", function (t)
        {
          return "resize " + t
        }).style("cursor", function (t)
        {
          return Qo[t]
        }).append("rect").attr("x", function (t)
        {
          return /[ew]$/.test(t) ? -3 : null
        }).attr("y", function (t)
        {
          return /^[ns]/.test(t) ? -3 : null
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), h.style("display", t.empty() ? "none" : null), h.exit().remove(), u && (a = Oe(u), c.attr("x", a[0]).attr("width", a[1] - a[0]), n(o)), s && (a = Oe(s), c.attr("y", a[0]).attr("height", a[1] - a[0]), r(o)), e(o)
      })
    }

    function e(t)
    {
      t.selectAll(".resize").attr("transform", function (t)
      {
        return "translate(" + c[+/e$/.test(t)][0] + "," + c[+/^s/.test(t)][1] + ")"
      })
    }

    function n(t)
    {
      t.select(".extent").attr("x", c[0][0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", c[1][0] - c[0][0])
    }

    function r(t)
    {
      t.select(".extent").attr("y", c[0][1]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", c[1][1] - c[0][1])
    }

    function i()
    {
      function i()
      {
        var t = ja.event.changedTouches;
        return t ? ja.touches(v, t)[0] : ja.mouse(v)
      }

      function l()
      {
        32 == ja.event.keyCode && (k || (g = null, S[0] -= c[1][0], S[1] -= c[1][1], k = 2), q())
      }

      function f()
      {
        32 == ja.event.keyCode && 2 == k && (S[0] += c[1][0], S[1] += c[1][1], k = 0, q())
      }

      function h()
      {
        var t = i(),
          a = !1;
        m && (t[0] += m[0], t[1] += m[1]), k || (ja.event.altKey ? (g || (g = [(c[0][0] + c[1][0]) / 2, (c[0][1] + c[1][1]) / 2]), S[0] = c[+(t[0] < g[0])][0], S[1] = c[+(t[1] < g[1])][1]) : g = null), w && p(t, u, 0) && (n(b), a = !0), M && p(t, s, 1) && (r(b), a = !0), a && (e(b), x(
        {
          type: "brush",
          mode: k ? "move" : "resize"
        }))
      }

      function p(t, e, n)
      {
        var r, i, o = Oe(e),
          u = o[0],
          s = o[1],
          l = S[n],
          f = c[1][n] - c[0][n];
        return k && (u -= l, s -= f + l), r = Math.max(u, Math.min(s, t[n])), k ? i = (r += l) + f : (g && (l = Math.max(u, Math.min(s, 2 * g[n] - r))), r > l ? (i = r, r = l) : i = l), c[0][n] !== r || c[1][n] !== i ? (a = null, c[0][n] = r, c[1][n] = i, !0) : void 0
      }

      function d()
      {
        h(), b.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), ja.select("body").style("cursor", null), N.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), x(
        {
          type: "brushend"
        }), q()
      }
      var g, m, v = this,
        y = ja.select(ja.event.target),
        x = o.of(v, arguments),
        b = ja.select(v),
        _ = y.datum(),
        w = !/^(n|s)$/.test(_) && u,
        M = !/^(e|w)$/.test(_) && s,
        k = y.classed("extent"),
        S = i(),
        N = ja.select(Ra).on("mousemove.brush", h).on("mouseup.brush", d).on("touchmove.brush", h).on("touchend.brush", d).on("keydown.brush", l).on("keyup.brush", f);
      if (k) S[0] = c[0][0] - S[0], S[1] = c[0][1] - S[1];
      else if (_)
      {
        var A = +/w$/.test(_),
          C = +/^n/.test(_);
        m = [c[1 - A][0] - S[0], c[1 - C][1] - S[1]], S[0] = c[A][0], S[1] = c[C][1]
      }
      else ja.event.altKey && (g = S.slice());
      b.style("pointer-events", "none").selectAll(".resize").style("display", null), ja.select("body").style("cursor", y.style("cursor")), x(
      {
        type: "brushstart"
      }), h(), q()
    }
    var a, o = O(t, "brushstart", "brush", "brushend"),
      u = null,
      s = null,
      l = tu[0],
      c = [
        [0, 0],
        [0, 0]
      ];
    return t.x = function (e)
    {
      return arguments.length ? (u = e, l = tu[!u << 1 | !s], t) : u
    }, t.y = function (e)
    {
      return arguments.length ? (s = e, l = tu[!u << 1 | !s], t) : s
    }, t.extent = function (e)
    {
      var n, r, i, o, l;
      return arguments.length ? (a = [
        [0, 0],
        [0, 0]
      ], u && (n = e[0], r = e[1], s && (n = n[0], r = r[0]), a[0][0] = n, a[1][0] = r, u.invert && (n = u(n), r = u(r)), n > r && (l = n, n = r, r = l), c[0][0] = 0 | n, c[1][0] = 0 | r), s && (i = e[0], o = e[1], u && (i = i[1], o = o[1]), a[0][1] = i, a[1][1] = o, s.invert && (i = s(i), o = s(o)), i > o && (l = i, i = o, o = l), c[0][1] = 0 | i, c[1][1] = 0 | o), t) : (e = a || c, u && (n = e[0][0], r = e[1][0], a || (n = c[0][0], r = c[1][0], u.invert && (n = u.invert(n), r = u.invert(r)), n > r && (l = n, n = r, r = l))), s && (i = e[0][1], o = e[1][1], a || (i = c[0][1], o = c[1][1], s.invert && (i = s.invert(i), o = s.invert(o)), i > o && (l = i, i = o, o = l))), u && s ? [
        [n, i],
        [r, o]
      ] : u ? [n, r] : s && [i, o])
    }, t.clear = function ()
    {
      return a = null, c[0][0] = c[0][1] = c[1][0] = c[1][1] = 0, t
    }, t.empty = function ()
    {
      return u && c[0][0] === c[1][0] || s && c[0][1] === c[1][1]
    }, ja.rebind(t, o, "on")
  };
  var Qo = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  }, tu = [
      ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
      ["e", "w"],
      ["n", "s"],
      []
    ];
  Yn.prototype._linePath = function ()
  {
    var t = this.domNode.getAttribute("x1") || 0,
      e = this.domNode.getAttribute("x2") || 0,
      n = this.domNode.getAttribute("y1") || 0,
      r = this.domNode.getAttribute("y2") || 0;
    return ["M", t, " ", n, "L", e, " ", r, "Z"].join("")
  }, Yn.prototype.updateProperty = function (t)
  {
    switch (t)
    {
    case "transform":
      var e = this.domNode,
        n = Array(5);
      if (this.isGroup)
      {
        var r = e.childNodes,
          i = r.length,
          a = 0;
        for (a; i > a; a++) r[a].r2d3 && r[a].r2d3.updateProperty("transform")
      }
      else if (this.raphaelNode)
      {
        for (transform = e.getAttribute("transform"), transform && n.push(Gn(transform)); e.parentNode && e.parentNode.r2d3;) e = e.parentNode, transform = e.getAttribute("transform"), transform && n.push(Gn(transform));
        this.raphaelNode.transform(n.reverse().join(""))
      }
      break;
    case "class":
      this.updateCurrentStyle();
      break;
    case "height":
      var o = this.domNode.getAttribute("width") || 0,
        u = this.domNode.getAttribute("height") || 0;
      "svg" === this.domNode.tagName ? this.paper.setSize(o, u) : this.raphaelNode.attr("height", u);
      break;
    case "width":
      var o = this.domNode.getAttribute("width") || 0,
        u = this.domNode.getAttribute("height") || 0;
      "svg" === this.domNode.tagName ? this.paper.setSize(o, u) : this.raphaelNode.attr("width", o);
      break;
    case "href":
      this.raphaelNode.attr("src", this.domNode.getAttribute("href"));
      break;
    case "d":
      this.raphaelNode.attr("path", this.domNode.getAttribute("d"));
      break;
    case "x1":
      this.raphaelNode.attr("path", this._linePath());
      break;
    case "x2":
      this.raphaelNode.attr("path", this._linePath());
      break;
    case "y1":
      this.raphaelNode.attr("path", this._linePath());
      break;
    case "y2":
      this.raphaelNode.attr("path", this._linePath());
      break;
    default:
      if (this.raphaelNode)
      {
        var s = this.domNode.style.getAttribute(t) || this.domNode.currentStyle.getAttribute(t) || this.domNode.getAttribute(t);
        this.raphaelNode.attr(t, s)
      }
    }
  }, Yn.prototype.updateCurrentStyle = function (t)
  {
    function e(t, e, n)
    {
      return t.style.getAttribute(e) || n.getAttribute(e) || t.getAttribute(e)
    }
    var n = this.domNode.currentStyle,
      r = this.domNode;
    if (this.isSVG)
    {
      var i = e(r, "height", n),
        a = e(r, "width", n);
      i = "auto" === i ? r.getAttribute("height") : i, a = "auto" === a ? r.getAttribute("width") : a, this.paper.setSize(a || 0, i || 0)
    }
    if (this.raphaelNode)
    {
      var o = {
        cursor: e(r, "cursor", n),
        fill: e(r, "fill", n) || "black",
        "fill-opacity": e(r, "fill-opacity", n) || 1,
        opacity: e(r, "opacity", n) || 1,
        stroke: e(r, "stroke", n) || "none",
        "stroke-dasharray": e(r, "stroke-dasharray", n),
        "stroke-linecap": e(r, "stroke-linecap", n) || "butt",
        "stroke-linejoin": e(r, "stroke-linejoin", n) || "miter",
        "stroke-miterlimit": e(r, "stroke-miterlimit", n) || 4,
        "stroke-opacity": e(r, "stroke-opacity", n) || 1,
        "stroke-width": e(r, "stroke-width", n) || 1
      };
      this.isText && (o.font = e(r, "font", n), o["font-family"] = e(r, "font-family", n), o["font-size"] = e(r, "font-size", n), o["font-weight"] = e(r, "font-weight", n), o["text-anchor"] = e(r, "text-anchor", n) || "start"), t && void 0 === o[t] && (o[t] = r.getAttribute(t)), this.isImage && delete o.fill, this.raphaelNode.attr(o)
    }
  }, Yn.prototype.setStyleProperty = function (t, e)
  {
    this.domNode.style.setAttribute(t, e), this.updateProperty(t)
  }, Yn.prototype.getStyleProperty = function (t)
  {
    return this.domNode.style.getAttribute(t)
  }, Yn.prototype.removeStyleProperty = function (t)
  {
    this.domNode.style.removeAttribute(t), this.updateProperty(t)
  }, Yn.prototype.getCurrentStyle = function ()
  {
    return this.domNode.currentStyle
  }, Yn.prototype.removeRaphaelNode = function (t)
  {
    if (t === !0)
    {
      var e = this.domNode.children,
        n = e.length,
        r = 0;
      for (r; n > r; r++)
      {
        var i = e[r];
        i.r2d3 && i.r2d3.removeRaphaelNode(t)
      }
    }
    this.domNode.r2d3 = null, this.raphaelNode && this.raphaelNode.remove()
  };
  var eu = {};
  window.transformMap = eu, Yn.prototype.appendChild = function (t)
  {
    return t.r2d3 ? t.r2d3 : (this.domNode.appendChild(t), new Yn(this.paper, t))
  }, Yn.prototype.removeChild = function (t)
  {
    return t.removeRaphaelNode(!0), this.domNode.removeChild(t.domNode), this.domNode || alert("oh shit"), t
  }, Yn.prototype.addEventListener = function (t, e)
  {
    var n = this;
    if (e._callback || (e._callback = function (t)
    {
      e.apply(n, [t])
    }), this.isGroup)
      for (var r = 0; this.domNode.childNodes > r; r++) this.domNode.childNodes[r].r2d3.addEventListener(t, e);
    else this.isSVG ? this.domNode.parentNode.attachEvent("on" + t, e._callback) : this.raphaelNode.node.attachEvent("on" + t, e._callback)
  }, Yn.prototype.removeEventListener = function (t, e)
  {
    if (this.isGroup)
      for (var n = 0; this.domNode.childNodes > n; n++) this.domNode.childNodes[n].r2d3.removeEventListener(t, e);
    else this.isSVG ? this.domNode.parentNode.detachEvent("on" + t, e._callback || e) : this.raphaelNode.node.detachEvent("on" + t, e._callback || e)
  }, Yn.prototype.setAttribute = function (t, e)
  {
    this.domNode.setAttribute(t, e), this.updateProperty(t)
  }, Yn.prototype.insertBefore = function (t, e)
  {
    var n, r, i = e ? e.domNode : e;
    return r = t.paper ? t.domNode : t, this.domNode.insertBefore(r, i), n = r.r2d3 || new Yn(this.paper, r), e && n.raphaelNode.insertBefore(e.raphaelNode), n
  }, Yn.prototype.setAttributeNS = function (t, e, n)
  {
    this.setAttribute(e, n)
  }, Yn.prototype.removeAttribute = function (t)
  {
    this.domNode.removeAttribute(t), this.updateProperty(t)
  }, Yn.prototype.getAttribute = function (t)
  {
    return this.domNode.getAttribute(t)
  }, Yn.prototype.getBBox = function ()
  {
    return this.raphaelNode ? this.raphaelNode.getBBox() :
    {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
  },
  function (t)
  {
    function e(t)
    {
      return t.replace(/-([a-z])/g, function (t)
      {
        return t[1].toUpperCase()
      })
    }
    t.getComputedStylePropertyValue = function (n, r)
    {
      if (n = n.domNode || n, t.getComputedStyle) return t.getComputedStyle(n).getPropertyValue(r);
      if (document.defaultView && document.defaultView.getComputedStyle) return document.defaultView.getComputedStyle.getPropertyValue(r);
      var i = e(r);
      return n.currentStyle ? n.currentStyle(i) : n.style[i]
    }
  }(this),
  function ()
  {
    for (var t = "circle ellipse line polygon polyline rect g svg image path text".split(" "), e = 0; t.length > e; e++) document.createElement(t[e])
  }(), ja.behavior = {}, ja.behavior.drag = function ()
  {
    function t()
    {
      this.on("mousedown.drag", e).on("touchstart.drag", e)
    }

    function e()
    {
      function t()
      {
        var t = u.parentNode;
        return null != c ? ja.touches(t).filter(function (t)
        {
          return t.identifier === c
        })[0] : ja.mouse(t)
      }

      function e()
      {
        if (!u.parentNode) return i();
        var e = t(),
          n = e[0] - f[0],
          r = e[1] - f[1];
        h |= n | r, f = e, q(), s(
        {
          type: "drag",
          x: e[0] + o[0],
          y: e[1] + o[1],
          dx: n,
          dy: r
        })
      }

      function i()
      {
        s(
        {
          type: "dragend"
        }), h && (q(), ja.event.target === l && p.on("click.drag", a, !0)), p.on(null != c ? "touchmove.drag-" + c : "mousemove.drag", null).on(null != c ? "touchend.drag-" + c : "mouseup.drag", null)
      }

      function a()
      {
        q(), p.on("click.drag", null)
      }
      var o, u = this,
        s = n.of(u, arguments),
        l = ja.event.target,
        c = ja.event.touches ? ja.event.changedTouches[0].identifier : null,
        f = t(),
        h = 0,
        p = ja.select(Ra).on(null != c ? "touchmove.drag-" + c : "mousemove.drag", e).on(null != c ? "touchend.drag-" + c : "mouseup.drag", i, !0);
      r ? (o = r.apply(u, arguments), o = [o.x - f[0], o.y - f[1]]) : o = [0, 0], null == c && q(), s(
      {
        type: "dragstart"
      })
    }
    var n = O(t, "drag", "dragstart", "dragend"),
      r = null;
    return t.origin = function (e)
    {
      return arguments.length ? (r = e, t) : r
    }, ja.rebind(t, n, "on")
  }, ja.behavior.zoom = function ()
  {
    function t()
    {
      this.on("mousedown.zoom", u).on("mousemove.zoom", l).on(iu + ".zoom", s).on("dblclick.zoom", c).on("touchstart.zoom", f).on("touchmove.zoom", h).on("touchend.zoom", f)
    }

    function e(t)
    {
      return [(t[0] - b[0]) / _, (t[1] - b[1]) / _]
    }

    function n(t)
    {
      return [t[0] * _ + b[0], t[1] * _ + b[1]]
    }

    function r(t)
    {
      _ = Math.max(w[0], Math.min(w[1], t))
    }

    function i(t, e)
    {
      e = n(e), b[0] += t[0] - e[0], b[1] += t[1] - e[1]
    }

    function a()
    {
      m && m.domain(g.range().map(function (t)
      {
        return (t - b[0]) / _
      }).map(g.invert)), y && y.domain(v.range().map(function (t)
      {
        return (t - b[1]) / _
      }).map(v.invert))
    }

    function o(t)
    {
      a(), ja.event.preventDefault(), t(
      {
        type: "zoom",
        scale: _,
        translate: b
      })
    }

    function u()
    {
      function t()
      {
        l = 1, i(ja.mouse(a), f), o(u)
      }

      function n()
      {
        l && q(), c.on("mousemove.zoom", null).on("mouseup.zoom", null), l && ja.event.target === s && c.on("click.zoom", r, !0)
      }

      function r()
      {
        q(), c.on("click.zoom", null)
      }
      var a = this,
        u = M.of(a, arguments),
        s = ja.event.target,
        l = 0,
        c = ja.select(Ra).on("mousemove.zoom", t).on("mouseup.zoom", n),
        f = e(ja.mouse(a));
      Ra.focus(), q()
    }

    function s()
    {
      p || (p = e(ja.mouse(this))), r(Math.pow(2, .002 * nu()) * _), i(ja.mouse(this), p), o(M.of(this, arguments))
    }

    function l()
    {
      p = null
    }

    function c()
    {
      var t = ja.mouse(this),
        n = e(t),
        a = Math.log(_) / Math.LN2;
      r(Math.pow(2, ja.event.shiftKey ? Math.ceil(a) - 1 : Math.floor(a) + 1)), i(t, n), o(M.of(this, arguments))
    }

    function f()
    {
      var t = ja.touches(this),
        n = Date.now();
      if (d = _, p = {}, t.forEach(function (t)
      {
        p[t.identifier] = e(t)
      }), q(), 1 === t.length)
      {
        if (500 > n - x)
        {
          var a = t[0],
            u = e(t[0]);
          r(2 * _), i(a, u), o(M.of(this, arguments))
        }
        x = n
      }
    }

    function h()
    {
      var t = ja.touches(this),
        e = t[0],
        n = p[e.identifier];
      if (a = t[1])
      {
        var a, u = p[a.identifier];
        e = [(e[0] + a[0]) / 2, (e[1] + a[1]) / 2], n = [(n[0] + u[0]) / 2, (n[1] + u[1]) / 2], r(ja.event.scale * d)
      }
      i(e, n), x = null, o(M.of(this, arguments))
    }
    var p, d, g, m, v, y, x, b = [0, 0],
      _ = 1,
      w = ru,
      M = O(t, "zoom");
    return t.translate = function (e)
    {
      return arguments.length ? (b = e.map(Number), a(), t) : b
    }, t.scale = function (e)
    {
      return arguments.length ? (_ = +e, a(), t) : _
    }, t.scaleExtent = function (e)
    {
      return arguments.length ? (w = null == e ? ru : e.map(Number), t) : w
    }, t.x = function (e)
    {
      return arguments.length ? (m = e, g = e.copy(), b = [0, 0], _ = 1, t) : m
    }, t.y = function (e)
    {
      return arguments.length ? (y = e, v = e.copy(), b = [0, 0], _ = 1, t) : y
    }, ja.rebind(t, M, "on")
  };
  var nu, ru = [0, 1 / 0],
    iu = "onwheel" in document ? (nu = function ()
    {
      return -ja.event.deltaY * (ja.event.deltaMode ? 120 : 1)
    }, "wheel") : "onmousewheel" in document ? (nu = function ()
    {
      return ja.event.wheelDelta
    }, "mousewheel") : (nu = function ()
    {
      return -ja.event.detail
    }, "MozMousePixelScroll");
  ja.layout = {}, ja.layout.bundle = function ()
  {
    return function (t)
    {
      for (var e = [], n = -1, r = t.length; r > ++n;) e.push($n(t[n]));
      return e
    }
  }, ja.layout.chord = function ()
  {
    function t()
    {
      var t, l, f, h, p, d = {}, g = [],
        m = ja.range(a),
        v = [];
      for (n = [], r = [], t = 0, h = -1; a > ++h;)
      {
        for (l = 0, p = -1; a > ++p;) l += i[h][p];
        g.push(l), v.push(ja.range(a)), t += l
      }
      for (o && m.sort(function (t, e)
      {
        return o(g[t], g[e])
      }), u && v.forEach(function (t, e)
      {
        t.sort(function (t, n)
        {
          return u(i[e][t], i[e][n])
        })
      }), t = (2 * za - c * a) / t, l = 0, h = -1; a > ++h;)
      {
        for (f = l, p = -1; a > ++p;)
        {
          var y = m[h],
            x = v[y][p],
            b = i[y][x],
            _ = l,
            w = l += b * t;
          d[y + "-" + x] = {
            index: y,
            subindex: x,
            startAngle: _,
            endAngle: w,
            value: b
          }
        }
        r[y] = {
          index: y,
          startAngle: f,
          endAngle: l,
          value: (l - f) / t
        }, l += c
      }
      for (h = -1; a > ++h;)
        for (p = h - 1; a > ++p;)
        {
          var M = d[h + "-" + p],
            k = d[p + "-" + h];
          (M.value || k.value) && n.push(M.value < k.value ?
            {
              source: k,
              target: M
            } :
            {
              source: M,
              target: k
            })
        }
      s && e()
    }

    function e()
    {
      n.sort(function (t, e)
      {
        return s((t.source.value + t.target.value) / 2, (e.source.value + e.target.value) / 2)
      })
    }
    var n, r, i, a, o, u, s, l = {}, c = 0;
    return l.matrix = function (t)
    {
      return arguments.length ? (a = (i = t) && i.length, n = r = null, l) : i
    }, l.padding = function (t)
    {
      return arguments.length ? (c = t, n = r = null, l) : c
    }, l.sortGroups = function (t)
    {
      return arguments.length ? (o = t, n = r = null, l) : o
    }, l.sortSubgroups = function (t)
    {
      return arguments.length ? (u = t, n = null, l) : u
    }, l.sortChords = function (t)
    {
      return arguments.length ? (s = t, n && e(), l) : s
    }, l.chords = function ()
    {
      return n || t(), n
    }, l.groups = function ()
    {
      return r || t(), r
    }, l
  }, ja.layout.force = function ()
  {
    function t(t)
    {
      return function (e, n, r, i)
      {
        if (e.point !== t)
        {
          var a = e.cx - t.x,
            o = e.cy - t.y,
            u = 1 / Math.sqrt(a * a + o * o);
          if (m > (i - n) * u)
          {
            var s = e.charge * u * u;
            return t.px -= a * s, t.py -= o * s, !0
          }
          if (e.point && isFinite(u))
          {
            var s = e.pointCharge * u * u;
            t.px -= a * s, t.py -= o * s
          }
        }
        return !e.charge
      }
    }

    function e(t)
    {
      t.px = ja.event.x, t.py = ja.event.y, s.resume()
    }
    var n, r, i, a, u, s = {}, l = ja.dispatch("start", "tick", "end"),
      c = [1, 1],
      f = .9,
      h = au,
      p = ou,
      d = -30,
      g = .1,
      m = .8,
      v = [],
      y = [];
    return s.tick = function ()
    {
      if (.005 > (r *= .99)) return l.end(
      {
        type: "end",
        alpha: r = 0
      }), !0;
      var e, n, o, s, h, p, m, x, b, _ = v.length,
        w = y.length;
      for (n = 0; w > n; ++n) o = y[n], s = o.source, h = o.target, x = h.x - s.x, b = h.y - s.y, (p = x * x + b * b) && (p = r * a[n] * ((p = Math.sqrt(p)) - i[n]) / p, x *= p, b *= p, h.x -= x * (m = s.weight / (h.weight + s.weight)), h.y -= b * m, s.x += x * (m = 1 - m), s.y += b * m);
      if ((m = r * g) && (x = c[0] / 2, b = c[1] / 2, n = -1, m))
        for (; _ > ++n;) o = v[n], o.x += (x - o.x) * m, o.y += (b - o.y) * m;
      if (d)
        for (er(e = ja.geom.quadtree(v), r, u), n = -1; _ > ++n;)(o = v[n]).fixed || e.visit(t(o));
      for (n = -1; _ > ++n;) o = v[n], o.fixed ? (o.x = o.px, o.y = o.py) : (o.x -= (o.px - (o.px = o.x)) * f, o.y -= (o.py - (o.py = o.y)) * f);
      l.tick(
      {
        type: "tick",
        alpha: r
      })
    }, s.nodes = function (t)
    {
      return arguments.length ? (v = t, s) : v
    }, s.links = function (t)
    {
      return arguments.length ? (y = t, s) : y
    }, s.size = function (t)
    {
      return arguments.length ? (c = t, s) : c
    }, s.linkDistance = function (t)
    {
      return arguments.length ? (h = "function" == typeof t ? t : +t, s) : h
    }, s.distance = s.linkDistance, s.linkStrength = function (t)
    {
      return arguments.length ? (p = "function" == typeof t ? t : +t, s) : p
    }, s.friction = function (t)
    {
      return arguments.length ? (f = +t, s) : f
    }, s.charge = function (t)
    {
      return arguments.length ? (d = "function" == typeof t ? t : +t, s) : d
    }, s.gravity = function (t)
    {
      return arguments.length ? (g = +t, s) : g
    }, s.theta = function (t)
    {
      return arguments.length ? (m = +t, s) : m
    }, s.alpha = function (t)
    {
      return arguments.length ? (t = +t, r ? r = t > 0 ? t : 0 : t > 0 && (l.start(
      {
        type: "start",
        alpha: r = t
      }), ja.timer(s.tick)), s) : r
    }, s.start = function ()
    {
      function t(t, r)
      {
        for (var i, a = e(n), o = -1, u = a.length; u > ++o;)
          if (!isNaN(i = a[o][t])) return i;
        return Math.random() * r
      }

      function e()
      {
        if (!o)
        {
          for (o = [], r = 0; f > r; ++r) o[r] = [];
          for (r = 0; g > r; ++r)
          {
            var t = y[r];
            o[t.source.index].push(t.target), o[t.target.index].push(t.source)
          }
        }
        return o[n]
      }
      var n, r, o, l, f = v.length,
        g = y.length,
        m = c[0],
        x = c[1];
      for (n = 0; f > n; ++n)(l = v[n]).index = n, l.weight = 0;
      for (n = 0; g > n; ++n) l = y[n], "number" == typeof l.source && (l.source = v[l.source]), "number" == typeof l.target && (l.target = v[l.target]), ++l.source.weight, ++l.target.weight;
      for (n = 0; f > n; ++n) l = v[n], isNaN(l.x) && (l.x = t("x", m)), isNaN(l.y) && (l.y = t("y", x)), isNaN(l.px) && (l.px = l.x), isNaN(l.py) && (l.py = l.y);
      if (i = [], "function" == typeof h)
        for (n = 0; g > n; ++n) i[n] = +h.call(this, y[n], n);
      else
        for (n = 0; g > n; ++n) i[n] = h; if (a = [], "function" == typeof p)
        for (n = 0; g > n; ++n) a[n] = +p.call(this, y[n], n);
      else
        for (n = 0; g > n; ++n) a[n] = p; if (u = [], "function" == typeof d)
        for (n = 0; f > n; ++n) u[n] = +d.call(this, v[n], n);
      else
        for (n = 0; f > n; ++n) u[n] = d;
      return s.resume()
    }, s.resume = function ()
    {
      return s.alpha(.1)
    }, s.stop = function ()
    {
      return s.alpha(0)
    }, s.drag = function ()
    {
      return n || (n = ja.behavior.drag().origin(o).on("dragstart.force", Jn).on("drag.force", e).on("dragend.force", Kn)), arguments.length ? (this.on("mouseover.force", Qn).on("mouseout.force", tr).call(n), void 0) : n
    }, ja.rebind(s, l, "on")
  };
  var au = 20,
    ou = 1;
  ja.layout.partition = function ()
  {
    function t(e, n, r, i)
    {
      var a = e.children;
      if (e.x = n, e.y = e.depth * i, e.dx = r, e.dy = i, a && (o = a.length))
      {
        var o, u, s, l = -1;
        for (r = e.value ? r / e.value : 0; o > ++l;) t(u = a[l], n, s = u.value * r, i), n += s
      }
    }

    function e(t)
    {
      var n = t.children,
        r = 0;
      if (n && (i = n.length))
        for (var i, a = -1; i > ++a;) r = Math.max(r, e(n[a]));
      return 1 + r
    }

    function n(n, a)
    {
      var o = r.call(this, n, a);
      return t(o[0], 0, i[0], i[1] / e(o[0])), o
    }
    var r = ja.layout.hierarchy(),
      i = [1, 1];
    return n.size = function (t)
    {
      return arguments.length ? (i = t, n) : i
    }, pr(n, r)
  }, ja.layout.pie = function ()
  {
    function t(a)
    {
      var o = a.map(function (n, r)
      {
        return +e.call(t, n, r)
      }),
        u = +("function" == typeof r ? r.apply(this, arguments) : r),
        s = (("function" == typeof i ? i.apply(this, arguments) : i) - r) / ja.sum(o),
        l = ja.range(a.length);
      null != n && l.sort(n === uu ? function (t, e)
      {
        return o[e] - o[t]
      } : function (t, e)
      {
        return n(a[t], a[e])
      });
      var c = [];
      return l.forEach(function (t)
      {
        var e;
        c[t] = {
          data: a[t],
          value: e = o[t],
          startAngle: u,
          endAngle: u += e * s
        }
      }), c
    }
    var e = Number,
      n = uu,
      r = 0,
      i = 2 * za;
    return t.value = function (n)
    {
      return arguments.length ? (e = n, t) : e
    }, t.sort = function (e)
    {
      return arguments.length ? (n = e, t) : n
    }, t.startAngle = function (e)
    {
      return arguments.length ? (r = e, t) : r
    }, t.endAngle = function (e)
    {
      return arguments.length ? (i = e, t) : i
    }, t
  };
  var uu = {};
  ja.layout.stack = function ()
  {
    function t(o, s)
    {
      var l = o.map(function (n, r)
      {
        return e.call(t, n, r)
      }),
        c = l.map(function (e)
        {
          return e.map(function (e, n)
          {
            return [a.call(t, e, n), u.call(t, e, n)]
          })
        }),
        f = n.call(t, c, s);
      l = ja.permute(l, f), c = ja.permute(c, f);
      var h, p, d, g = r.call(t, c, s),
        m = l.length,
        v = l[0].length;
      for (p = 0; v > p; ++p)
        for (i.call(t, l[0][p], d = g[p], c[0][p][1]), h = 1; m > h; ++h) i.call(t, l[h][p], d += c[h - 1][p][1], c[h][p][1]);
      return o
    }
    var e = o,
      n = ar,
      r = or,
      i = ir,
      a = nr,
      u = rr;
    return t.values = function (n)
    {
      return arguments.length ? (e = n, t) : e
    }, t.order = function (e)
    {
      return arguments.length ? (n = "function" == typeof e ? e : su.get(e) || ar, t) : n
    }, t.offset = function (e)
    {
      return arguments.length ? (r = "function" == typeof e ? e : lu.get(e) || or, t) : r
    }, t.x = function (e)
    {
      return arguments.length ? (a = e, t) : a
    }, t.y = function (e)
    {
      return arguments.length ? (u = e, t) : u
    }, t.out = function (e)
    {
      return arguments.length ? (i = e, t) : i
    }, t
  };
  var su = ja.map(
  {
    "inside-out": function (t)
    {
      var e, n, r = t.length,
        i = t.map(ur),
        a = t.map(sr),
        o = ja.range(r).sort(function (t, e)
        {
          return i[t] - i[e]
        }),
        u = 0,
        s = 0,
        l = [],
        c = [];
      for (e = 0; r > e; ++e) n = o[e], s > u ? (u += a[n], l.push(n)) : (s += a[n], c.push(n));
      return c.reverse().concat(l)
    },
    reverse: function (t)
    {
      return ja.range(t.length).reverse()
    },
    "default": ar
  }),
    lu = ja.map(
    {
      silhouette: function (t)
      {
        var e, n, r, i = t.length,
          a = t[0].length,
          o = [],
          u = 0,
          s = [];
        for (n = 0; a > n; ++n)
        {
          for (e = 0, r = 0; i > e; e++) r += t[e][n][1];
          r > u && (u = r), o.push(r)
        }
        for (n = 0; a > n; ++n) s[n] = (u - o[n]) / 2;
        return s
      },
      wiggle: function (t)
      {
        var e, n, r, i, a, o, u, s, l, c = t.length,
          f = t[0],
          h = f.length,
          p = [];
        for (p[0] = s = l = 0, n = 1; h > n; ++n)
        {
          for (e = 0, i = 0; c > e; ++e) i += t[e][n][1];
          for (e = 0, a = 0, u = f[n][0] - f[n - 1][0]; c > e; ++e)
          {
            for (r = 0, o = (t[e][n][1] - t[e][n - 1][1]) / (2 * u); e > r; ++r) o += (t[r][n][1] - t[r][n - 1][1]) / u;
            a += o * t[e][n][1]
          }
          p[n] = s -= i ? a / i * u : 0, l > s && (l = s)
        }
        for (n = 0; h > n; ++n) p[n] -= l;
        return p
      },
      expand: function (t)
      {
        var e, n, r, i = t.length,
          a = t[0].length,
          o = 1 / i,
          u = [];
        for (n = 0; a > n; ++n)
        {
          for (e = 0, r = 0; i > e; e++) r += t[e][n][1];
          if (r)
            for (e = 0; i > e; e++) t[e][n][1] /= r;
          else
            for (e = 0; i > e; e++) t[e][n][1] = o
        }
        for (n = 0; a > n; ++n) u[n] = 0;
        return u
      },
      zero: or
    });
  ja.layout.histogram = function ()
  {
    function t(t, a)
    {
      for (var o, u, s = [], l = t.map(n, this), c = r.call(this, l, a), f = i.call(this, c, l, a), a = -1, h = l.length, p = f.length - 1, d = e ? 1 : 1 / h; p > ++a;) o = s[a] = [], o.dx = f[a + 1] - (o.x = f[a]), o.y = 0;
      if (p > 0)
        for (a = -1; h > ++a;) u = l[a], u >= c[0] && c[1] >= u && (o = s[ja.bisect(f, u, 1, p) - 1], o.y += d, o.push(t[a]));
      return s
    }
    var e = !0,
      n = Number,
      r = hr,
      i = cr;
    return t.value = function (e)
    {
      return arguments.length ? (n = e, t) : n
    }, t.range = function (e)
    {
      return arguments.length ? (r = s(e), t) : r
    }, t.bins = function (e)
    {
      return arguments.length ? (i = "number" == typeof e ? function (t)
      {
        return fr(t, e)
      } : s(e), t) : i
    }, t.frequency = function (n)
    {
      return arguments.length ? (e = !! n, t) : e
    }, t
  }, ja.layout.hierarchy = function ()
  {
    function t(e, o, u)
    {
      var s = i.call(n, e, o);
      if (e.depth = o, u.push(e), s && (l = s.length))
      {
        for (var l, c, f = -1, h = e.children = [], p = 0, d = o + 1; l > ++f;) c = t(s[f], d, u), c.parent = e, h.push(c), p += c.value;
        r && h.sort(r), a && (e.value = p)
      }
      else a && (e.value = +a.call(n, e, o) || 0);
      return e
    }

    function e(t, r)
    {
      var i = t.children,
        o = 0;
      if (i && (u = i.length))
        for (var u, s = -1, l = r + 1; u > ++s;) o += e(i[s], l);
      else a && (o = +a.call(n, t, r) || 0);
      return a && (t.value = o), o
    }

    function n(e)
    {
      var n = [];
      return t(e, 0, n), n
    }
    var r = mr,
      i = dr,
      a = gr;
    return n.sort = function (t)
    {
      return arguments.length ? (r = t, n) : r
    }, n.children = function (t)
    {
      return arguments.length ? (i = t, n) : i
    }, n.value = function (t)
    {
      return arguments.length ? (a = t, n) : a
    }, n.revalue = function (t)
    {
      return e(t, 0), t
    }, n
  }, ja.layout.pack = function ()
  {
    function t(t, i)
    {
      var a = e.call(this, t, i),
        o = a[0];
      o.x = 0, o.y = 0, qr(o, function (t)
      {
        t.r = Math.sqrt(t.value)
      }), qr(o, wr);
      var u = r[0],
        s = r[1],
        l = Math.max(2 * o.r / u, 2 * o.r / s);
      if (n > 0)
      {
        var c = n * l / 2;
        qr(o, function (t)
        {
          t.r += c
        }), qr(o, wr), qr(o, function (t)
        {
          t.r -= c
        }), l = Math.max(2 * o.r / u, 2 * o.r / s)
      }
      return Sr(o, u / 2, s / 2, 1 / l), a
    }
    var e = ja.layout.hierarchy().sort(yr),
      n = 0,
      r = [1, 1];
    return t.size = function (e)
    {
      return arguments.length ? (r = e, t) : r
    }, t.padding = function (e)
    {
      return arguments.length ? (n = +e, t) : n
    }, pr(t, e)
  }, ja.layout.cluster = function ()
  {
    function t(t, i)
    {
      var a, o = e.call(this, t, i),
        u = o[0],
        s = 0;
      qr(u, function (t)
      {
        var e = t.children;
        e && e.length ? (t.x = Cr(e), t.y = Ar(e)) : (t.x = a ? s += n(t, a) : 0, t.y = 0, a = t)
      });
      var l = Er(u),
        c = Tr(u),
        f = l.x - n(l, c) / 2,
        h = c.x + n(c, l) / 2;
      return qr(u, function (t)
      {
        t.x = (t.x - f) / (h - f) * r[0], t.y = (1 - (u.y ? t.y / u.y : 1)) * r[1]
      }), o
    }
    var e = ja.layout.hierarchy().sort(null).value(null),
      n = Br,
      r = [1, 1];
    return t.separation = function (e)
    {
      return arguments.length ? (n = e, t) : n
    }, t.size = function (e)
    {
      return arguments.length ? (r = e, t) : r
    }, pr(t, e)
  }, ja.layout.tree = function ()
  {
    function t(t, i)
    {
      function a(t, e)
      {
        var r = t.children,
          i = t._tree;
        if (r && (o = r.length))
        {
          for (var o, s, l, c = r[0], f = c, h = -1; o > ++h;) l = r[h], a(l, s), f = u(l, s, f), s = l;
          Rr(t);
          var p = .5 * (c._tree.prelim + l._tree.prelim);
          e ? (i.prelim = e._tree.prelim + n(t, e), i.mod = i.prelim - p) : i.prelim = p
        }
        else e && (i.prelim = e._tree.prelim + n(t, e))
      }

      function o(t, e)
      {
        t.x = t._tree.prelim + e;
        var n = t.children;
        if (n && (r = n.length))
        {
          var r, i = -1;
          for (e += t._tree.mod; r > ++i;) o(n[i], e)
        }
      }

      function u(t, e, r)
      {
        if (e)
        {
          for (var i, a = t, o = t, u = e, s = t.parent.children[0], l = a._tree.mod, c = o._tree.mod, f = u._tree.mod, h = s._tree.mod; u = zr(u), a = Lr(a), u && a;) s = Lr(s), o = zr(o), o._tree.ancestor = t, i = u._tree.prelim + f - a._tree.prelim - l + n(u, a), i > 0 && (Or(Ir(u, t, r), t, i), l += i, c += i), f += u._tree.mod, l += a._tree.mod, h += s._tree.mod, c += o._tree.mod;
          u && !zr(o) && (o._tree.thread = u, o._tree.mod += f - c), a && !Lr(s) && (s._tree.thread = a, s._tree.mod += l - h, r = t)
        }
        return r
      }
      var s = e.call(this, t, i),
        l = s[0];
      qr(l, function (t, e)
      {
        t._tree = {
          ancestor: t,
          prelim: 0,
          mod: 0,
          change: 0,
          shift: 0,
          number: e ? e._tree.number + 1 : 0
        }
      }), a(l), o(l, -l._tree.prelim);
      var c = Pr(l, Dr),
        f = Pr(l, jr),
        h = Pr(l, Fr),
        p = c.x - n(c, f) / 2,
        d = f.x + n(f, c) / 2,
        g = h.depth || 1;
      return qr(l, function (t)
      {
        t.x = (t.x - p) / (d - p) * r[0], t.y = t.depth / g * r[1], delete t._tree
      }), s
    }
    var e = ja.layout.hierarchy().sort(null).value(null),
      n = Br,
      r = [1, 1];
    return t.separation = function (e)
    {
      return arguments.length ? (n = e, t) : n
    }, t.size = function (e)
    {
      return arguments.length ? (r = e, t) : r
    }, pr(t, e)
  }, ja.layout.treemap = function ()
  {
    function t(t, e)
    {
      for (var n, r, i = -1, a = t.length; a > ++i;) r = (n = t[i]).value * (0 > e ? 0 : e), n.area = isNaN(r) || 0 >= r ? 0 : r
    }

    function e(n)
    {
      var a = n.children;
      if (a && a.length)
      {
        var o, u, s, l = f(n),
          c = [],
          h = a.slice(),
          d = 1 / 0,
          g = "slice" === p ? l.dx : "dice" === p ? l.dy : "slice-dice" === p ? 1 & n.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
        for (t(h, l.dx * l.dy / n.value), c.area = 0;
          (s = h.length) > 0;) c.push(o = h[s - 1]), c.area += o.area, "squarify" !== p || d >= (u = r(c, g)) ? (h.pop(), d = u) : (c.area -= c.pop().area, i(c, g, l, !1), g = Math.min(l.dx, l.dy), c.length = c.area = 0, d = 1 / 0);
        c.length && (i(c, g, l, !0), c.length = c.area = 0), a.forEach(e)
      }
    }

    function n(e)
    {
      var r = e.children;
      if (r && r.length)
      {
        var a, o = f(e),
          u = r.slice(),
          s = [];
        for (t(u, o.dx * o.dy / e.value), s.area = 0; a = u.pop();) s.push(a), s.area += a.area, null != a.z && (i(s, a.z ? o.dx : o.dy, o, !u.length), s.length = s.area = 0);
        r.forEach(n)
      }
    }

    function r(t, e)
    {
      for (var n, r = t.area, i = 0, a = 1 / 0, o = -1, u = t.length; u > ++o;)(n = t[o].area) && (a > n && (a = n), n > i && (i = n));
      return r *= r, e *= e, r ? Math.max(e * i * d / r, r / (e * a * d)) : 1 / 0
    }

    function i(t, e, n, r)
    {
      var i, a = -1,
        o = t.length,
        u = n.x,
        l = n.y,
        c = e ? s(t.area / e) : 0;
      if (e == n.dx)
      {
        for ((r || c > n.dy) && (c = n.dy); o > ++a;) i = t[a], i.x = u, i.y = l, i.dy = c, u += i.dx = Math.min(n.x + n.dx - u, c ? s(i.area / c) : 0);
        i.z = !0, i.dx += n.x + n.dx - u, n.y += c, n.dy -= c
      }
      else
      {
        for ((r || c > n.dx) && (c = n.dx); o > ++a;) i = t[a], i.x = u, i.y = l, i.dx = c, l += i.dy = Math.min(n.y + n.dy - l, c ? s(i.area / c) : 0);
        i.z = !1, i.dy += n.y + n.dy - l, n.x += c, n.dx -= c
      }
    }

    function a(r)
    {
      var i = o || u(r),
        a = i[0];
      return a.x = 0, a.y = 0, a.dx = l[0], a.dy = l[1], o && u.revalue(a), t([a], a.dx * a.dy / a.value), (o ? n : e)(a), h && (o = i), i
    }
    var o, u = ja.layout.hierarchy(),
      s = Math.round,
      l = [1, 1],
      c = null,
      f = Hr,
      h = !1,
      p = "squarify",
      d = .5 * (1 + Math.sqrt(5));
    return a.size = function (t)
    {
      return arguments.length ? (l = t, a) : l
    }, a.padding = function (t)
    {
      function e(e)
      {
        var n = t.call(a, e, e.depth);
        return null == n ? Hr(e) : Ur(e, "number" == typeof n ? [n, n, n, n] : n)
      }

      function n(e)
      {
        return Ur(e, t)
      }
      if (!arguments.length) return c;
      var r;
      return f = null == (c = t) ? Hr : "function" == (r = typeof t) ? e : "number" === r ? (t = [t, t, t, t], n) : n, a
    }, a.round = function (t)
    {
      return arguments.length ? (s = t ? Math.round : Number, a) : s != Number
    }, a.sticky = function (t)
    {
      return arguments.length ? (h = t, o = null, a) : h
    }, a.ratio = function (t)
    {
      return arguments.length ? (d = t, a) : d
    }, a.mode = function (t)
    {
      return arguments.length ? (p = t + "", a) : p
    }, pr(a, u)
  }, ja.csv = Vr(",", "text/csv"), ja.tsv = Vr("  ", "text/tab-separated-values"), ja.geo = {}, ja.geo.stream = function (t, e)
  {
    cu.hasOwnProperty(t.type) ? cu[t.type](t, e) : Yr(t, e)
  };
  var cu = {
    Feature: function (t, e)
    {
      Yr(t.geometry, e)
    },
    FeatureCollection: function (t, e)
    {
      for (var n = t.features, r = -1, i = n.length; i > ++r;) Yr(n[r].geometry, e)
    }
  }, fu = {
      Sphere: function (t, e)
      {
        e.sphere()
      },
      Point: function (t, e)
      {
        var n = t.coordinates;
        e.point(n[0], n[1])
      },
      MultiPoint: function (t, e)
      {
        for (var n, r = t.coordinates, i = -1, a = r.length; a > ++i;) n = r[i], e.point(n[0], n[1])
      },
      LineString: function (t, e)
      {
        Gr(t.coordinates, e, 0)
      },
      MultiLineString: function (t, e)
      {
        for (var n = t.coordinates, r = -1, i = n.length; i > ++r;) Gr(n[r], e, 0)
      },
      Polygon: function (t, e)
      {
        Xr(t.coordinates, e)
      },
      MultiPolygon: function (t, e)
      {
        for (var n = t.coordinates, r = -1, i = n.length; i > ++r;) Xr(n[r], e)
      },
      GeometryCollection: function (t, e)
      {
        for (var n = t.geometries, r = -1, i = n.length; i > ++r;) Yr(n[r], e)
      }
    };
  ja.geo.albersUsa = function ()
  {
    function t(t)
    {
      return e(t)(t)
    }

    function e(t)
    {
      var e = t[0],
        o = t[1];
      return o > 50 ? r : -140 > e ? i : 21 > o ? a : n
    }
    var n = ja.geo.albers(),
      r = ja.geo.albers().rotate([160, 0]).center([0, 60]).parallels([55, 65]),
      i = ja.geo.albers().rotate([160, 0]).center([0, 20]).parallels([8, 18]),
      a = ja.geo.albers().rotate([60, 0]).center([0, 10]).parallels([8, 18]);
    return t.scale = function (e)
    {
      return arguments.length ? (n.scale(e), r.scale(.6 * e), i.scale(e), a.scale(1.5 * e), t.translate(n.translate())) : n.scale()
    }, t.translate = function (e)
    {
      if (!arguments.length) return n.translate();
      var o = n.scale(),
        u = e[0],
        s = e[1];
      return n.translate(e), r.translate([u - .4 * o, s + .17 * o]), i.translate([u - .19 * o, s + .2 * o]), a.translate([u + .58 * o, s + .43 * o]), t
    }, t.scale(n.scale())
  }, (ja.geo.albers = function ()
  {
    var t = 29.5 * Da,
      e = 45.5 * Da,
      n = Oi(ri),
      r = n(t, e);
    return r.parallels = function (r)
    {
      return arguments.length ? n(t = r[0] * Da, e = r[1] * Da) : [t * Fa, e * Fa]
    }, r.rotate([98, 0]).center([0, 38]).scale(1e3)
  }).raw = ri;
  var hu = Gi(function (t)
  {
    return Math.sqrt(2 / (1 + t))
  }, function (t)
  {
    return 2 * Math.asin(t / 2)
  });
  (ja.geo.azimuthalEqualArea = function ()
  {
    return Ri(hu)
  }).raw = hu;
  var pu = Gi(function (t)
  {
    var e = Math.acos(t);
    return e && e / Math.sin(e)
  }, o);
  (ja.geo.azimuthalEquidistant = function ()
  {
    return Ri(pu)
  }).raw = pu, ja.geo.bounds = ii(o), ja.geo.centroid = function (t)
  {
    du = gu = mu = vu = yu = 0, ja.geo.stream(t, xu);
    var e;
    return gu && Math.abs(e = Math.sqrt(mu * mu + vu * vu + yu * yu)) > Pa ? [Math.atan2(vu, mu) * Fa, Math.asin(Math.max(-1, Math.min(1, yu / e))) * Fa] : void 0
  };
  var du, gu, mu, vu, yu, xu = {
      sphere: function ()
      {
        2 > du && (du = 2, gu = mu = vu = yu = 0)
      },
      point: ai,
      lineStart: ui,
      lineEnd: si,
      polygonStart: function ()
      {
        2 > du && (du = 2, gu = mu = vu = yu = 0), xu.lineStart = oi
      },
      polygonEnd: function ()
      {
        xu.lineStart = ui
      }
    };
  ja.geo.circle = function ()
  {
    function t()
    {
      var t = "function" == typeof r ? r.apply(this, arguments) : r,
        e = Hi(-t[0] * Da, -t[1] * Da, 0).invert,
        i = [];
      return n(null, null, 1,
      {
        point: function (t, n)
        {
          i.push(t = e(t, n)), t[0] *= Fa, t[1] *= Fa
        }
      }),
      {
        type: "Polygon",
        coordinates: [i]
      }
    }
    var e, n, r = [0, 0],
      i = 6;
    return t.origin = function (e)
    {
      return arguments.length ? (r = e, t) : r
    }, t.angle = function (r)
    {
      return arguments.length ? (n = li((e = +r) * Da, i * Da), t) : e
    }, t.precision = function (r)
    {
      return arguments.length ? (n = li(e * Da, (i = +r) * Da), t) : i
    }, t.angle(90)
  };
  var bu = fi(u, yi, bi);
  (ja.geo.equirectangular = function ()
  {
    return Ri(Mi).scale(250 / za)
  }).raw = Mi.invert = Mi;
  var _u = Gi(function (t)
  {
    return 1 / t
  }, Math.atan);
  (ja.geo.gnomonic = function ()
  {
    return Ri(_u)
  }).raw = _u, ja.geo.graticule = function ()
  {
    function t()
    {
      return {
        type: "MultiLineString",
        coordinates: e()
      }
    }

    function e()
    {
      return ja.range(Math.ceil(r / s) * s, n, s).map(o).concat(ja.range(Math.ceil(a / l) * l, i, l).map(u))
    }
    var n, r, i, a, o, u, s = 22.5,
      l = s,
      c = 2.5;
    return t.lines = function ()
    {
      return e().map(function (t)
      {
        return {
          type: "LineString",
          coordinates: t
        }
      })
    }, t.outline = function ()
    {
      return {
        type: "Polygon",
        coordinates: [o(r).concat(u(i).slice(1), o(n).reverse().slice(1), u(a).reverse().slice(1))]
      }
    }, t.extent = function (e)
    {
      return arguments.length ? (r = +e[0][0], n = +e[1][0], a = +e[0][1], i = +e[1][1], r > n && (e = r, r = n, n = e), a > i && (e = a, a = i, i = e), t.precision(c)) : [
        [r, a],
        [n, i]
      ]
    }, t.step = function (e)
    {
      return arguments.length ? (s = +e[0], l = +e[1], t) : [s, l]
    }, t.precision = function (e)
    {
      return arguments.length ? (c = +e, o = ki(a, i, c), u = Si(r, n, c), t) : c
    }, t.extent([
      [-180 + Pa, -90 + Pa],
      [180 - Pa, 90 - Pa]
    ])
  }, ja.geo.interpolate = function (t, e)
  {
    return Ai(t[0] * Da, t[1] * Da, e[0] * Da, e[1] * Da)
  }, ja.geo.greatArc = function ()
  {
    function n()
    {
      for (var t = r || o.apply(this, arguments), e = i || u.apply(this, arguments), n = a || ja.geo.interpolate(t, e), l = 0, c = s / n.distance, f = [t]; 1 > (l += c);) f.push(n(l));
      return f.push(e),
      {
        type: "LineString",
        coordinates: f
      }
    }
    var r, i, a, o = e,
      u = t,
      s = 6 * Da;
    return n.distance = function ()
    {
      return (a || ja.geo.interpolate(r || o.apply(this, arguments), i || u.apply(this, arguments))).distance
    }, n.source = function (t)
    {
      return arguments.length ? (o = t, r = "function" == typeof t ? null : t, a = r && i ? ja.geo.interpolate(r, i) : null, n) : o
    }, n.target = function (t)
    {
      return arguments.length ? (u = t, i = "function" == typeof t ? null : t, a = r && i ? ja.geo.interpolate(r, i) : null, n) : u
    }, n.precision = function (t)
    {
      return arguments.length ? (s = t * Da, n) : s / Da
    }, n
  }, Ci.invert = function (t, e)
  {
    return [2 * za * t, 2 * Math.atan(Math.exp(2 * za * e)) - za / 2]
  }, (ja.geo.mercator = function ()
  {
    return Ri(Ci).scale(500)
  }).raw = Ci;
  var wu = Gi(function ()
  {
    return 1
  }, Math.asin);
  (ja.geo.orthographic = function ()
  {
    return Ri(wu)
  }).raw = wu, ja.geo.path = function ()
  {
    function t(t)
    {
      return t && ja.geo.stream(t, r(i.pointRadius("function" == typeof a ? +a.apply(this, arguments) : a))), i.result()
    }
    var e, n, r, i, a = 4.5;
    return t.area = function (t)
    {
      return Mu = 0, ja.geo.stream(t, r(Su)), Mu
    }, t.centroid = function (t)
    {
      return du = mu = vu = yu = 0, ja.geo.stream(t, r(Nu)), yu ? [mu / yu, vu / yu] : void 0
    }, t.bounds = function (t)
    {
      return ii(r)(t)
    }, t.projection = function (n)
    {
      return arguments.length ? (r = (e = n) ? n.stream || Ti(n) : o, t) : e
    }, t.context = function (e)
    {
      return arguments.length ? (i = null == (n = e) ? new Bi : new Li(e), t) : n
    }, t.pointRadius = function (e)
    {
      return arguments.length ? (a = "function" == typeof e ? e : +e, t) : a
    }, t.projection(ja.geo.albersUsa()).context(null)
  };
  var Mu, ku, Su = {
      point: qe,
      lineStart: qe,
      lineEnd: qe,
      polygonStart: function ()
      {
        ku = 0, Su.lineStart = zi
      },
      polygonEnd: function ()
      {
        Su.lineStart = Su.lineEnd = Su.point = qe, Mu += Math.abs(ku / 2)
      }
    }, Nu = {
      point: Pi,
      lineStart: ji,
      lineEnd: Di,
      polygonStart: function ()
      {
        Nu.lineStart = Fi
      },
      polygonEnd: function ()
      {
        Nu.point = Pi, Nu.lineStart = ji, Nu.lineEnd = Di
      }
    };
  ja.geo.area = function (t)
  {
    return Au = 0, ja.geo.stream(t, Tu), Au
  };
  var Au, Cu, Eu, Tu = {
      sphere: function ()
      {
        Au += 4 * za
      },
      point: qe,
      lineStart: qe,
      lineEnd: qe,
      polygonStart: function ()
      {
        Cu = 1, Eu = 0, Tu.lineStart = qi
      },
      polygonEnd: function ()
      {
        var t = 2 * Math.atan2(Eu, Cu);
        Au += 0 > t ? 4 * za + t : t, Tu.lineStart = Tu.lineEnd = Tu.point = qe
      }
    };
  ja.geo.projection = Ri, ja.geo.projectionMutator = Oi;
  var Bu = Gi(function (t)
  {
    return 1 / (1 + t)
  }, function (t)
  {
    return 2 * Math.atan(t)
  });
  (ja.geo.stereographic = function ()
  {
    return Ri(Bu)
  }).raw = Bu, ja.geom = {}, ja.geom.hull = function (t)
  {
    if (3 > t.length) return [];
    var e, n, r, i, a, o, u, s, l, c, f = t.length,
      h = f - 1,
      p = [],
      d = [],
      g = 0;
    for (e = 1; f > e; ++e) t[e][1] < t[g][1] ? g = e : t[e][1] == t[g][1] && (g = t[e][0] < t[g][0] ? e : g);
    for (e = 0; f > e; ++e) e !== g && (i = t[e][1] - t[g][1], r = t[e][0] - t[g][0], p.push(
    {
      angle: Math.atan2(i, r),
      index: e
    }));
    for (p.sort(function (t, e)
    {
      return t.angle - e.angle
    }), l = p[0].angle, s = p[0].index, u = 0, e = 1; h > e; ++e) n = p[e].index, l == p[e].angle ? (r = t[s][0] - t[g][0], i = t[s][1] - t[g][1], a = t[n][0] - t[g][0], o = t[n][1] - t[g][1], r * r + i * i >= a * a + o * o ? p[e].index = -1 : (p[u].index = -1, l = p[e].angle, u = e, s = n)) : (l = p[e].angle, u = e, s = n);
    for (d.push(g), e = 0, n = 0; 2 > e; ++n) - 1 !== p[n].index && (d.push(p[n].index), e++);
    for (c = d.length; h > n; ++n)
      if (-1 !== p[n].index)
      {
        for (; !Xi(d[c - 2], d[c - 1], p[n].index, t);)--c;
        d[c++] = p[n].index
      }
    var m = [];
    for (e = 0; c > e; ++e) m.push(t[d[e]]);
    return m
  }, ja.geom.polygon = function (t)
  {
    return t.area = function ()
    {
      for (var e = 0, n = t.length, r = t[n - 1][1] * t[0][0] - t[n - 1][0] * t[0][1]; n > ++e;) r += t[e - 1][1] * t[e][0] - t[e - 1][0] * t[e][1];
      return .5 * r
    }, t.centroid = function (e)
    {
      var n, r, i = -1,
        a = t.length,
        o = 0,
        u = 0,
        s = t[a - 1];
      for (arguments.length || (e = -1 / (6 * t.area())); a > ++i;) n = s, s = t[i], r = n[0] * s[1] - s[0] * n[1], o += (n[0] + s[0]) * r, u += (n[1] + s[1]) * r;
      return [o * e, u * e]
    }, t.clip = function (e)
    {
      for (var n, r, i, a, o, u, s = -1, l = t.length, c = t[l - 1]; l > ++s;)
      {
        for (n = e.slice(), e.length = 0, a = t[s], o = n[(i = n.length) - 1], r = -1; i > ++r;) u = n[r], $i(u, c, a) ? ($i(o, c, a) || e.push(Zi(o, u, c, a)), e.push(u)) : $i(o, c, a) && e.push(Zi(o, u, c, a)), o = u;
        c = a
      }
      return e
    }, t
  }, ja.geom.voronoi = function (t)
  {
    var e = t.map(function ()
    {
      return []
    }),
      n = 1e6;
    return Wi(t, function (t)
    {
      var r, i, a, o, u, s;
      1 === t.a && t.b >= 0 ? (r = t.ep.r, i = t.ep.l) : (r = t.ep.l, i = t.ep.r), 1 === t.a ? (u = r ? r.y : -n, a = t.c - t.b * u, s = i ? i.y : n, o = t.c - t.b * s) : (a = r ? r.x : -n, u = t.c - t.a * a, o = i ? i.x : n, s = t.c - t.a * o);
      var l = [a, u],
        c = [o, s];
      e[t.region.l.index].push(l, c), e[t.region.r.index].push(l, c)
    }), e = e.map(function (e, n)
    {
      var r = t[n][0],
        i = t[n][1],
        a = e.map(function (t)
        {
          return Math.atan2(t[0] - r, t[1] - i)
        }),
        o = ja.range(e.length).sort(function (t, e)
        {
          return a[t] - a[e]
        });
      return o.filter(function (t, e)
      {
        return !e || a[t] - a[o[e - 1]] > Pa
      }).map(function (t)
      {
        return e[t]
      })
    }), e.forEach(function (e, r)
    {
      var i = e.length;
      if (!i) return e.push([-n, -n], [-n, n], [n, n], [n, -n]);
      if (!(i > 2))
      {
        var a = t[r],
          o = e[0],
          u = e[1],
          s = a[0],
          l = a[1],
          c = o[0],
          f = o[1],
          h = u[0],
          p = u[1],
          d = Math.abs(h - c),
          g = p - f;
        if (Pa > Math.abs(g))
        {
          var m = f > l ? -n : n;
          e.push([-n, m], [n, m])
        }
        else if (Pa > d)
        {
          var v = c > s ? -n : n;
          e.push([v, -n], [v, n])
        }
        else
        {
          var m = (c - s) * (p - f) > (h - c) * (f - l) ? n : -n,
            y = Math.abs(g) - d;
          Pa > Math.abs(y) ? e.push([0 > g ? m : -m, m]) : (y > 0 && (m *= -1), e.push([-n, m], [n, m]))
        }
      }
    }), e
  };
  var Lu = {
    l: "r",
    r: "l"
  };
  ja.geom.delaunay = function (t)
  {
    var e = t.map(function ()
    {
      return []
    }),
      n = [];
    return Wi(t, function (n)
    {
      e[n.region.l.index].push(t[n.region.r.index])
    }), e.forEach(function (e, r)
    {
      var i = t[r],
        a = i[0],
        o = i[1];
      e.forEach(function (t)
      {
        t.angle = Math.atan2(t[0] - a, t[1] - o)
      }), e.sort(function (t, e)
      {
        return t.angle - e.angle
      });
      for (var u = 0, s = e.length - 1; s > u; u++) n.push([i, e[u], e[u + 1]])
    }), n
  }, ja.geom.quadtree = function (t, e, n, r, i)
  {
    function a(t, e, n, r, i, a)
    {
      if (!isNaN(e.x) && !isNaN(e.y))
        if (t.leaf)
        {
          var u = t.point;
          u ? .01 > Math.abs(u.x - e.x) + Math.abs(u.y - e.y) ? o(t, e, n, r, i, a) : (t.point = null, o(t, u, n, r, i, a), o(t, e, n, r, i, a)) : t.point = e
        }
        else o(t, e, n, r, i, a)
    }

    function o(t, e, n, r, i, o)
    {
      var u = .5 * (n + i),
        s = .5 * (r + o),
        l = e.x >= u,
        c = e.y >= s,
        f = (c << 1) + l;
      t.leaf = !1, t = t.nodes[f] || (t.nodes[f] = Ji()), l ? n = u : i = u, c ? r = s : o = s, a(t, e, n, r, i, o)
    }
    var u, s = -1,
      l = t.length;
    if (5 > arguments.length)
      if (3 === arguments.length) i = n, r = e, n = e = 0;
      else
        for (e = n = 1 / 0, r = i = -1 / 0; l > ++s;) u = t[s], e > u.x && (e = u.x), n > u.y && (n = u.y), u.x > r && (r = u.x), u.y > i && (i = u.y);
    var c = r - e,
      f = i - n;
    c > f ? i = n + c : r = e + f;
    var h = Ji();
    return h.add = function (t)
    {
      a(h, t, e, n, r, i)
    }, h.visit = function (t)
    {
      Ki(t, h, e, n, r, i)
    }, t.forEach(h.add), h
  }, ja.time = {};
  var zu = Date,
    Pu = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  Qi.prototype = {
    getDate: function ()
    {
      return this._.getUTCDate()
    },
    getDay: function ()
    {
      return this._.getUTCDay()
    },
    getFullYear: function ()
    {
      return this._.getUTCFullYear()
    },
    getHours: function ()
    {
      return this._.getUTCHours()
    },
    getMilliseconds: function ()
    {
      return this._.getUTCMilliseconds()
    },
    getMinutes: function ()
    {
      return this._.getUTCMinutes()
    },
    getMonth: function ()
    {
      return this._.getUTCMonth()
    },
    getSeconds: function ()
    {
      return this._.getUTCSeconds()
    },
    getTime: function ()
    {
      return this._.getTime()
    },
    getTimezoneOffset: function ()
    {
      return 0
    },
    valueOf: function ()
    {
      return this._.valueOf()
    },
    setDate: function ()
    {
      ju.setUTCDate.apply(this._, arguments)
    },
    setDay: function ()
    {
      ju.setUTCDay.apply(this._, arguments)
    },
    setFullYear: function ()
    {
      ju.setUTCFullYear.apply(this._, arguments)
    },
    setHours: function ()
    {
      ju.setUTCHours.apply(this._, arguments)
    },
    setMilliseconds: function ()
    {
      ju.setUTCMilliseconds.apply(this._, arguments)
    },
    setMinutes: function ()
    {
      ju.setUTCMinutes.apply(this._, arguments)
    },
    setMonth: function ()
    {
      ju.setUTCMonth.apply(this._, arguments)
    },
    setSeconds: function ()
    {
      ju.setUTCSeconds.apply(this._, arguments)
    },
    setTime: function ()
    {
      ju.setTime.apply(this._, arguments)
    }
  };
  var ju = Date.prototype,
    Du = "%a %b %e %X %Y",
    Fu = "%m/%d/%Y",
    qu = "%H:%M:%S",
    Ru = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    Ou = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    Iu = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    Hu = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  ja.time.format = function (t)
  {
    function e(e)
    {
      for (var r, i, a, o = [], u = -1, s = 0; n > ++u;) 37 === t.charCodeAt(u) && (o.push(t.substring(s, u)), null != (i = Zu[r = t.charAt(++u)]) && (r = t.charAt(++u)), (a = Wu[r]) && (r = a(e, null == i ? "e" === r ? " " : "0" : i)), o.push(r), s = u + 1);
      return o.push(t.substring(s, u)), o.join("")
    }
    var n = t.length;
    return e.parse = function (e)
    {
      var n = {
        y: 1900,
        m: 0,
        d: 1,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }, r = ta(n, t, e, 0);
      if (r != e.length) return null;
      "p" in n && (n.H = n.H % 12 + 12 * n.p);
      var i = new zu;
      return i.setFullYear(n.y, n.m, n.d), i.setHours(n.H, n.M, n.S, n.L), i
    }, e.toString = function ()
    {
      return t
    }, e
  };
  var Uu = ea(Ru),
    Vu = ea(Ou),
    Yu = ea(Iu),
    Gu = na(Iu),
    Xu = ea(Hu),
    $u = na(Hu),
    Zu = {
      "-": "",
      _: " ",
      0: "0"
    }, Wu = {
      a: function (t)
      {
        return Ou[t.getDay()]
      },
      A: function (t)
      {
        return Ru[t.getDay()]
      },
      b: function (t)
      {
        return Hu[t.getMonth()]
      },
      B: function (t)
      {
        return Iu[t.getMonth()]
      },
      c: ja.time.format(Du),
      d: function (t, e)
      {
        return ra(t.getDate(), e, 2)
      },
      e: function (t, e)
      {
        return ra(t.getDate(), e, 2)
      },
      H: function (t, e)
      {
        return ra(t.getHours(), e, 2)
      },
      I: function (t, e)
      {
        return ra(t.getHours() % 12 || 12, e, 2)
      },
      j: function (t, e)
      {
        return ra(1 + ja.time.dayOfYear(t), e, 3)
      },
      L: function (t, e)
      {
        return ra(t.getMilliseconds(), e, 3)
      },
      m: function (t, e)
      {
        return ra(t.getMonth() + 1, e, 2)
      },
      M: function (t, e)
      {
        return ra(t.getMinutes(), e, 2)
      },
      p: function (t)
      {
        return t.getHours() >= 12 ? "PM" : "AM"
      },
      S: function (t, e)
      {
        return ra(t.getSeconds(), e, 2)
      },
      U: function (t, e)
      {
        return ra(ja.time.sundayOfYear(t), e, 2)
      },
      w: function (t)
      {
        return t.getDay()
      },
      W: function (t, e)
      {
        return ra(ja.time.mondayOfYear(t), e, 2)
      },
      x: ja.time.format(Fu),
      X: ja.time.format(qu),
      y: function (t, e)
      {
        return ra(t.getFullYear() % 100, e, 2)
      },
      Y: function (t, e)
      {
        return ra(t.getFullYear() % 1e4, e, 4)
      },
      Z: _a,
      "%": function ()
      {
        return "%"
      }
    }, Ju = {
      a: ia,
      A: aa,
      b: oa,
      B: ua,
      c: sa,
      d: ga,
      e: ga,
      H: ma,
      I: ma,
      L: xa,
      m: da,
      M: va,
      p: ba,
      S: ya,
      x: la,
      X: ca,
      y: ha,
      Y: fa
    }, Ku = /^\s*\d+/,
    Qu = ja.map(
    {
      am: 0,
      pm: 1
    });
  ja.time.format.utc = function (t)
  {
    function e(t)
    {
      try
      {
        zu = Qi;
        var e = new zu;
        return e._ = t, n(e)
      }
      finally
      {
        zu = Date
      }
    }
    var n = ja.time.format(t);
    return e.parse = function (t)
    {
      try
      {
        zu = Qi;
        var e = n.parse(t);
        return e && e._
      }
      finally
      {
        zu = Date
      }
    }, e.toString = n.toString, e
  };
  var ts = ja.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
  ja.time.format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? wa : ts, wa.parse = function (t)
  {
    var e = new Date(t);
    return isNaN(e) ? null : e
  }, wa.toString = ts.toString, ja.time.second = Ma(function (t)
  {
    return new zu(1e3 * Math.floor(t / 1e3))
  }, function (t, e)
  {
    t.setTime(t.getTime() + 1e3 * Math.floor(e))
  }, function (t)
  {
    return t.getSeconds()
  }), ja.time.seconds = ja.time.second.range, ja.time.seconds.utc = ja.time.second.utc.range, ja.time.minute = Ma(function (t)
  {
    return new zu(6e4 * Math.floor(t / 6e4))
  }, function (t, e)
  {
    t.setTime(t.getTime() + 6e4 * Math.floor(e))
  }, function (t)
  {
    return t.getMinutes()
  }), ja.time.minutes = ja.time.minute.range, ja.time.minutes.utc = ja.time.minute.utc.range, ja.time.hour = Ma(function (t)
  {
    var e = t.getTimezoneOffset() / 60;
    return new zu(36e5 * (Math.floor(t / 36e5 - e) + e))
  }, function (t, e)
  {
    t.setTime(t.getTime() + 36e5 * Math.floor(e))
  }, function (t)
  {
    return t.getHours()
  }), ja.time.hours = ja.time.hour.range, ja.time.hours.utc = ja.time.hour.utc.range, ja.time.day = Ma(function (t)
  {
    var e = new zu(1970, 0);
    return e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), e
  }, function (t, e)
  {
    t.setDate(t.getDate() + e)
  }, function (t)
  {
    return t.getDate() - 1
  }), ja.time.days = ja.time.day.range, ja.time.days.utc = ja.time.day.utc.range, ja.time.dayOfYear = function (t)
  {
    var e = ja.time.year(t);
    return Math.floor((t - e - 6e4 * (t.getTimezoneOffset() - e.getTimezoneOffset())) / 864e5)
  }, Pu.forEach(function (t, e)
  {
    t = t.toLowerCase(), e = 7 - e;
    var n = ja.time[t] = Ma(function (t)
    {
      return (t = ja.time.day(t)).setDate(t.getDate() - (t.getDay() + e) % 7), t
    }, function (t, e)
    {
      t.setDate(t.getDate() + 7 * Math.floor(e))
    }, function (t)
    {
      var n = ja.time.year(t).getDay();
      return Math.floor((ja.time.dayOfYear(t) + (n + e) % 7) / 7) - (n !== e)
    });
    ja.time[t + "s"] = n.range, ja.time[t + "s"].utc = n.utc.range, ja.time[t + "OfYear"] = function (t)
    {
      var n = ja.time.year(t).getDay();
      return Math.floor((ja.time.dayOfYear(t) + (n + e) % 7) / 7)
    }
  }), ja.time.week = ja.time.sunday, ja.time.weeks = ja.time.sunday.range, ja.time.weeks.utc = ja.time.sunday.utc.range, ja.time.weekOfYear = ja.time.sundayOfYear, ja.time.month = Ma(function (t)
  {
    return t = ja.time.day(t), t.setDate(1), t
  }, function (t, e)
  {
    t.setMonth(t.getMonth() + e)
  }, function (t)
  {
    return t.getMonth()
  }), ja.time.months = ja.time.month.range, ja.time.months.utc = ja.time.month.utc.range, ja.time.year = Ma(function (t)
  {
    return t = ja.time.day(t), t.setMonth(0, 1), t
  }, function (t, e)
  {
    t.setFullYear(t.getFullYear() + e)
  }, function (t)
  {
    return t.getFullYear()
  }), ja.time.years = ja.time.year.range, ja.time.years.utc = ja.time.year.utc.range;
  var es = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
    ns = [
      [ja.time.second, 1],
      [ja.time.second, 5],
      [ja.time.second, 15],
      [ja.time.second, 30],
      [ja.time.minute, 1],
      [ja.time.minute, 5],
      [ja.time.minute, 15],
      [ja.time.minute, 30],
      [ja.time.hour, 1],
      [ja.time.hour, 3],
      [ja.time.hour, 6],
      [ja.time.hour, 12],
      [ja.time.day, 1],
      [ja.time.day, 2],
      [ja.time.week, 1],
      [ja.time.month, 1],
      [ja.time.month, 3],
      [ja.time.year, 1]
    ],
    rs = [
      [ja.time.format("%Y"), u],
      [ja.time.format("%B"),
        function (t)
        {
          return t.getMonth()
        }
      ],
      [ja.time.format("%b %d"),
        function (t)
        {
          return 1 != t.getDate()
        }
      ],
      [ja.time.format("%a %d"),
        function (t)
        {
          return t.getDay() && 1 != t.getDate()
        }
      ],
      [ja.time.format("%I %p"),
        function (t)
        {
          return t.getHours()
        }
      ],
      [ja.time.format("%I:%M"),
        function (t)
        {
          return t.getMinutes()
        }
      ],
      [ja.time.format(":%S"),
        function (t)
        {
          return t.getSeconds()
        }
      ],
      [ja.time.format(".%L"),
        function (t)
        {
          return t.getMilliseconds()
        }
      ]
    ],
    is = ja.scale.linear(),
    as = Ca(rs);
  ns.year = function (t, e)
  {
    return is.domain(t.map(Ta)).ticks(e).map(Ea)
  }, ja.time.scale = function ()
  {
    return Sa(ja.scale.linear(), ns, as)
  };
  var os = ns.map(function (t)
  {
    return [t[0].utc, t[1]]
  }),
    us = [
      [ja.time.format.utc("%Y"), u],
      [ja.time.format.utc("%B"),
        function (t)
        {
          return t.getUTCMonth()
        }
      ],
      [ja.time.format.utc("%b %d"),
        function (t)
        {
          return 1 != t.getUTCDate()
        }
      ],
      [ja.time.format.utc("%a %d"),
        function (t)
        {
          return t.getUTCDay() && 1 != t.getUTCDate()
        }
      ],
      [ja.time.format.utc("%I %p"),
        function (t)
        {
          return t.getUTCHours()
        }
      ],
      [ja.time.format.utc("%I:%M"),
        function (t)
        {
          return t.getUTCMinutes()
        }
      ],
      [ja.time.format.utc(":%S"),
        function (t)
        {
          return t.getUTCSeconds()
        }
      ],
      [ja.time.format.utc(".%L"),
        function (t)
        {
          return t.getUTCMilliseconds()
        }
      ]
    ],
    ss = Ca(us);
  return os.year = function (t, e)
  {
    return is.domain(t.map(La)).ticks(e).map(Ba)
  }, ja.time.scale.utc = function ()
  {
    return Sa(ja.scale.linear(), os, ss)
  }, ja
}();