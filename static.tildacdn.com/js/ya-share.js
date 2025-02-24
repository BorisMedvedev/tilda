!(function () {
  var _ = Array.prototype,
    g = Object.prototype.toString,
    b = {
      indexOf: function (_, g) {
        g = +(g || 0);
        var b = this,
          k = b.length;
        if (k > 0 && k > g)
          for (
            -k > (g = 0 > g ? Math.ceil(g) : Math.floor(g)) && (g = 0),
              0 > g && (g += k);
            k > g;

          ) {
            if (g in b && b[g] === _) return g;
            ++g;
          }
        return -1;
      },
      forEach: function (_, g) {
        for (var b = -1, k = this, w = k.length; ++b < w; )
          b in k && (g ? _.call(g, k[b], b, k) : _(k[b], b, k));
      },
      map: function (_, g) {
        for (var b = -1, k = this, w = k.length, x = new Array(w); ++b < w; )
          b in k && (x[b] = g ? _.call(g, k[b], b, k) : _(k[b], b, k));
        return x;
      },
      filter: function (_, g) {
        for (var b = -1, k = this, w = k.length, x = []; ++b < w; )
          b in k && (g ? _.call(g, k[b], b, k) : _(k[b], b, k)) && x.push(k[b]);
        return x;
      },
      reduce: function (_, g) {
        var b,
          k = -1,
          w = this,
          x = w.length;
        if (arguments.length < 2) {
          for (; ++k < x; )
            if (k in w) {
              b = w[k];
              break;
            }
        } else b = g;
        for (; ++k < x; ) k in w && (b = _(b, w[k], k, w));
        return b;
      },
      some: function (_, g) {
        for (var b = -1, k = this, w = k.length; ++b < w; )
          if (b in k && (g ? _.call(g, k[b], b, k) : _(k[b], b, k))) return !0;
        return !1;
      },
      every: function (_, g) {
        for (var b = -1, k = this, w = k.length; ++b < w; )
          if (b in k && !(g ? _.call(g, k[b], b, k) : _(k[b], b, k))) return !1;
        return !0;
      },
    };
  for (var k in b) _[k] || (_[k] = b[k]);
  Array.isArray ||
    (Array.isArray = function (_) {
      return '[object Array]' === g.call(_);
    });
})(),
  Date.now ||
    (Date.now = function () {
      return new Date().getTime();
    }),
  (function () {
    var _ = Array.prototype.slice;
    Function.prototype.bind ||
      (Function.prototype.bind = function (g) {
        var b = this,
          k = _.call(arguments, 1);
        return function () {
          return b.apply(g, k.concat(_.call(arguments)));
        };
      });
  })(),
  (function (_) {
    if (!window.JSON) {
      var g,
        b = Object.prototype.toString,
        k =
          /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        w = {
          '\b': '\\b',
          '\t': '\\t',
          '\n': '\\n',
          '\f': '\\f',
          '\r': '\\r',
          '"': '\\"',
          '\\': '\\\\',
        };
      window.JSON = {
        stringify: (g = function (x) {
          if (null === x) return 'null';
          if (void 0 === x) return _;
          var C, E, z;
          switch (b.call(x)) {
            case '[object String]':
              return (
                (k.lastIndex = 0),
                '"' +
                  (k.test(x)
                    ? x.replace(k, function (_) {
                        var g = w[_];
                        return 'string' == typeof g
                          ? g
                          : '\\u' +
                              ('0000' + _.charCodeAt(0).toString(16)).slice(-4);
                      })
                    : x) +
                  '"'
              );
            case '[object Number]':
            case '[object Boolean]':
              return '' + x;
            case '[object Array]':
              (C = '['), (E = 0);
              for (var j = x.length; j > E; )
                (z = g(x[E])),
                  (C += (E++ ? ',' : '') + (void 0 === z ? 'null' : z));
              return C + ']';
            case '[object Object]':
              if ('[object Function]' === b.call(x.toJSON))
                return g(x.toJSON());
              for (var M in ((C = '{'), (E = 0), x))
                x.hasOwnProperty(M) &&
                  void 0 !== (z = g(x[M])) &&
                  (C += (E++ ? ',' : '') + '"' + M + '":' + z);
              return C + '}';
            default:
              return _;
          }
        }),
        parse: function (_) {
          return Function('return ' + _)();
        },
      };
    }
  })(),
  Object.keys ||
    (Object.keys = function (_) {
      var g = [];
      for (var b in _) _.hasOwnProperty(b) && g.push(b);
      return g;
    }),
  String.prototype.trim ||
    (String.prototype.trim = function () {
      for (
        var _ = this.replace(/^\s\s*/, ''), g = /\s/, b = _.length;
        g.test(_.charAt(--b));

      );
      return _.slice(0, b + 1);
    }),
  (function (_) {
    function t(b) {
      if (g[b]) return g[b].exports;
      var k = (g[b] = { i: b, l: !1, exports: {} });
      return _[b].call(k.exports, k, k.exports, t), (k.l = !0), k.exports;
    }
    var g = {};
    (t.m = _),
      (t.c = g),
      (t.d = function (_, g, b) {
        t.o(_, g) ||
          Object.defineProperty(_, g, {
            configurable: !1,
            enumerable: !0,
            get: b,
          });
      }),
      (t.n = function (_) {
        var g =
          _ && _.__esModule
            ? function () {
                return _.default;
              }
            : function () {
                return _;
              };
        return t.d(g, 'a', g), g;
      }),
      (t.o = function (_, g) {
        return Object.prototype.hasOwnProperty.call(_, g);
      }),
      (t.p = 'https://yastatic.net/share2/'),
      t((t.s = 14));
  })([
    function (_, g, b) {
      'use strict';
      function o(_) {
        return _.getElementsByTagName('head')[0] || _.body;
      }
      function r(_) {
        var g = document.createElement('script');
        return (g.src = _), (g.defer = !0), document.head.appendChild(g), g;
      }
      function i(_) {
        function t() {
          document.removeEventListener('DOMContentLoaded', t),
            window.removeEventListener('load', t),
            _();
        }
        'complete' === document.readyState ||
        ('loading' !== document.readyState &&
          !document.documentElement.doScroll)
          ? _()
          : (document.addEventListener('DOMContentLoaded', t),
            window.addEventListener('load', t));
      }
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.injectJs = r),
        (g.ready = i);
      var a = function (_) {
        this._document = _;
      };
      (a.prototype.injectCss = function (_, g) {
        var b = g.nonce,
          k = o(this._document),
          w = this._document.createElement('style');
        (w.type = 'text/css'),
          (w.innerHTML = _),
          b && w.setAttribute('nonce', b),
          k.appendChild(w);
      }),
        (g.default = a);
    },
    function (_, g, b) {
      'use strict';
      var k =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (_) {
                return typeof _;
              }
            : function (_) {
                return _ &&
                  'function' == typeof Symbol &&
                  _.constructor === Symbol &&
                  _ !== Symbol.prototype
                  ? 'symbol'
                  : typeof _;
              },
        w = Object.prototype.hasOwnProperty,
        x = Object.prototype.toString,
        a = function (_) {
          return 'function' == typeof Array.isArray
            ? Array.isArray(_)
            : '[object Array]' === x.call(_);
        },
        s = function (_) {
          if (!_ || '[object Object]' !== x.call(_)) return !1;
          var g = w.call(_, 'constructor'),
            b =
              _.constructor &&
              _.constructor.prototype &&
              w.call(_.constructor.prototype, 'isPrototypeOf'),
            k;
          if (_.constructor && !g && !b) return !1;
          for (k in _);
          return void 0 === k || w.call(_, k);
        };
      _.exports = function e() {
        var _,
          g,
          b,
          w,
          x,
          C,
          E = arguments[0],
          z = 1,
          j = arguments.length,
          M = !1;
        for (
          'boolean' == typeof E && ((M = E), (E = arguments[1] || {}), (z = 2)),
            (null == E ||
              ('object' !== (void 0 === E ? 'undefined' : k(E)) &&
                'function' != typeof E)) &&
              (E = {});
          z < j;
          ++z
        )
          if (null != (_ = arguments[z]))
            for (g in _)
              (b = E[g]),
                E !== (w = _[g]) &&
                  (M && w && (s(w) || (x = a(w)))
                    ? (x
                        ? ((x = !1), (C = b && a(b) ? b : []))
                        : (C = b && s(b) ? b : {}),
                      (E[g] = e(M, C, w)))
                    : void 0 !== w && (E[g] = w));
        return E;
      };
    },
    function (_, g, b) {
      'use strict';
      function o(_) {
        return Array.isArray(_) ? _ : Array.from(_);
      }
      function r(_) {
        return _.search
          .substring(1)
          .split('&')
          .reduce(function (_, g) {
            var b,
              k = o(g.split('=')),
              w = k[0],
              x = k.slice(1);
            return (_[w] = decodeURIComponent(x.join('='))), _;
          }, {});
      }
      function i(_, g) {
        return Object.keys(_).reduce(function (b, w) {
          var x = _[w];
          if ('object' === (void 0 === x ? 'undefined' : k(x))) {
            var C = x.options
              .reduce(function (_, b) {
                var k = g[b];
                return k && _.push(encodeURIComponent(k)), _;
              }, [])
              .join(x.separator);
            return (b[w] = C), b;
          }
          var E = g[x];
          return E && (b[w] = encodeURIComponent(E)), b;
        }, {});
      }
      function a(_, g) {
        var b = i(_.params, g),
          k = Object.keys(b)
            .map(function (_) {
              return _ + '=' + b[_];
            })
            .join('&'),
          w = -1 === _.baseUrl.indexOf('?') ? '?' : '&';
        return '' + _.baseUrl + w + k;
      }
      function s(_) {
        return Object.keys(_)
          .map(function (g) {
            return g + '=' + encodeURIComponent(_[g]);
          })
          .join('&');
      }
      Object.defineProperty(g, '__esModule', { value: !0 });
      var k =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (_) {
              return typeof _;
            }
          : function (_) {
              return _ &&
                'function' == typeof Symbol &&
                _.constructor === Symbol &&
                _ !== Symbol.prototype
                ? 'symbol'
                : typeof _;
            };
      (g.getQueryParams = r), (g.buildUrl = a), (g.serializeParams = s);
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 });
      var k = {
        closest: function (_, g) {
          do {
            if (_.classList && _.classList.contains(g)) return _;
          } while ((_ = _.parentNode));
        },
        toArray: function (_) {
          for (var g = [], b = _.length, k = 0; k < b; k += 1) g.push(_[k]);
          return g;
        },
        getTarget: function (_) {
          return _.target || _.srcElement;
        },
        remove: function (_) {
          return _.parentNode.removeChild(_);
        },
        getRectRelativeToDocument: function (_) {
          var g = _.getBoundingClientRect(),
            b =
              void 0 === window.scrollY
                ? document.documentElement.scrollTop
                : window.scrollY,
            k =
              void 0 === window.scrollX
                ? document.documentElement.scrollLeft
                : window.scrollX;
          return {
            top: g.top + b,
            left: g.left + k,
            width: void 0 === g.width ? g.right - g.left : g.width,
            height: void 0 === g.height ? g.bottom - g.top : g.height,
          };
        },
      };
      g.default = k;
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 });
      var k = (g.count = {
        url: {
          baseUrl: 'https://graph.facebook.com/v3.3/?fields=engagement',
          params: {
            id: 'url',
            access_token: 'accessToken',
            callback: 'callback',
          },
        },
        callback: function (_) {
          return _.engagement.share_count;
        },
      });
      g.default = {
        config: {
          shareUrl: {
            default: {
              baseUrl: 'https://www.facebook.com/sharer.php?src=sp',
              params: {
                u: 'url',
                title: 'title',
                description: 'description',
                picture: 'image',
              },
            },
            share: {
              baseUrl: 'https://www.facebook.com/dialog/share?display=popup',
              params: { app_id: 'appId', href: 'url', redirect_uri: 'nextUrl' },
            },
            feed: {
              baseUrl: 'https://www.facebook.com/dialog/feed?display=popup',
              params: {
                app_id: 'appId',
                link: 'url',
                next: 'nextUrl',
                name: 'title',
                description: 'description',
                picture: 'image',
              },
            },
          },
          count: k,
        },
        contentOptions: { accessToken: '', appId: '', nextUrl: '' },
        popupDimensions: [800, 520],
        i18n: {
          az: 'Facebook',
          be: 'Facebook',
          en: 'Facebook',
          hy: 'Facebook',
          ka: 'Facebook',
          kk: 'Facebook',
          ro: 'Facebook',
          ru: 'Facebook',
          tr: 'Facebook',
          tt: 'Facebook',
          uk: 'Facebook',
          uz: 'Facebook',
        },
        color: '#3b5998',
      };
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 });
      var k = (g.count = {
        url: {
          baseUrl: 'https://connect.mail.ru/share_count?callback=1',
          params: { func: 'callback', url_list: 'url' },
        },
        callback: function (_) {
          return _[Object.keys(_)[0]].shares;
        },
      });
      g.default = {
        config: {
          shareUrl: {
            default: {
              baseUrl: 'https://connect.mail.ru/share',
              params: {
                url: 'url',
                title: 'title',
                description: 'description',
              },
            },
          },
          count: k,
        },
        popupDimensions: [560, 400],
        i18n: {
          az: 'Moy Mir',
          be: 'Мой Мир',
          en: 'Moi Mir',
          hy: 'Moi Mir',
          ka: 'Moi Mir',
          kk: 'Мой Мир',
          ro: 'Moi Mir',
          ru: 'Мой Мир',
          tr: 'Moi Mir',
          tt: 'Мой Мир',
          uk: 'Мой Мир',
          uz: 'Moy Mir',
        },
        color: '#168de2',
      };
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 });
      var k = (g.count = {
        url: {
          baseUrl: 'https://connect.ok.ru/dk?st.cmd=extLike&uid=odklocs0',
          params: { ref: 'url' },
        },
        mount: function (_, g) {
          _.ODKL = {
            updateCount: function (_, b) {
              g(b);
            },
          };
        },
      });
      g.default = {
        config: {
          shareUrl: {
            default: {
              baseUrl: 'https://connect.ok.ru/offer',
              params: {
                url: 'url',
                title: 'title',
                description: 'description',
                imageUrl: 'image',
              },
            },
          },
          count: k,
        },
        popupDimensions: [800, 520],
        i18n: {
          az: 'Odnoklassniki',
          be: 'Одноклассники',
          en: 'Odnoklassniki',
          hy: 'Odnoklassniki',
          ka: 'Odnoklasniki',
          kk: 'Одноклассники',
          ro: 'Odnoklassniki',
          ru: 'Одноклассники',
          tr: 'Odnoklasniki',
          tt: 'Одноклассники',
          uk: 'Однокласники',
          uz: 'Odnoklassniki',
        },
        color: '#eb722e',
      };
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 });
      var k = (g.count = {
        url: {
          baseUrl: 'https://api.pinterest.com/v1/urls/count.json',
          params: { callback: 'callback', url: 'url' },
        },
        callback: function (_) {
          return _.count;
        },
      });
      g.default = {
        config: {
          shareUrl: {
            default: {
              baseUrl: 'https://pinterest.com/pin/create/button/',
              params: { url: 'url', media: 'image', description: 'title' },
            },
          },
          count: k,
        },
        popupDimensions: [800, 520],
        i18n: {
          az: 'Pinterest',
          be: 'Pinterest',
          en: 'Pinterest',
          hy: 'Pinterest',
          ka: 'Pinterest',
          kk: 'Pinterest',
          ro: 'Pinterest',
          ru: 'Pinterest',
          tr: 'Pinterest',
          tt: 'Pinterest',
          uk: 'Pinterest',
          uz: 'Pinterest',
        },
        color: '#c20724',
      };
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 });
      var k = (g.count = {
        url: {
          baseUrl: 'https://vk.com/share.php?act=count&index=0',
          params: { url: 'url' },
        },
        mount: function (_, g) {
          _.VK = {
            Share: {
              count: function (_, b) {
                g(b);
              },
            },
          };
        },
      });
      g.default = {
        config: {
          shareUrl: {
            default: {
              baseUrl: 'https://vk.com/share.php',
              params: {
                url: 'url',
                title: 'title',
                description: 'description',
                image: 'image',
              },
            },
          },
          count: k,
        },
        popupDimensions: [550, 420],
        i18n: {
          az: 'ВКонтакте',
          be: 'ВКонтакте',
          en: 'VKontakte',
          hy: 'VKontakte',
          ka: 'VKontakte',
          kk: 'ВКонтакте',
          ro: 'VKontakte',
          ru: 'ВКонтакте',
          tr: 'VKontakte',
          tt: 'ВКонтакте',
          uk: 'ВКонтакті',
          uz: 'VKontakte',
        },
        color: '#0077ff',
      };
    },
    function (_, g, b) {
      'use strict';
      (function (_) {
        function n(_) {
          if (null === _) return {};
          try {
            return JSON.parse(_);
          } catch (_) {
            return {};
          }
        }
        function o(_) {
          return (_.parent !== _ && _.parent) || _.opener || _.top;
        }
        Object.defineProperty(g, '__esModule', { value: !0 });
        var r = function (g, b) {
          (this._window = g),
            (this._opener = o(g)),
            (this._namespace = b),
            (this._subscriptions = new _());
        };
        (r.prototype.subscribe = function (_, g) {
          var b = this,
            r = function (_) {
              var k = n(_.data),
                w = k.namespace,
                x = k.action,
                C = k.payload;
              w === b._namespace && g(x, C);
            },
            k = this._subscriptions.get(_) || [];
          k.push(r),
            this._subscriptions.set(_, k),
            this._window.addEventListener('message', r);
        }),
          (r.prototype.unsubscribe = function (_) {
            var g = this;
            (this._subscriptions.get(_) || []).forEach(function (_) {
              return g._window.removeEventListener('message', _);
            }),
              this._subscriptions.delete(_);
          }),
          (r.prototype.publish = function (_, g, b) {
            (b || this._opener).postMessage(
              JSON.stringify({
                namespace: this._namespace,
                action: _,
                payload: g,
              }),
              '*'
            );
          }),
          (g.default = r);
      }).call(g, b(10));
    },
    function (_, g, b) {
      'use strict';
      function o() {
        var _ = {};
        return function (g) {
          var b = g.valueOf(_);
          return void 0 !== b && b !== g && b.identity === _ ? b : r(g, _);
        };
      }
      function r(_, g) {
        var b = { identity: g },
          k = _.valueOf,
          r = function (w) {
            return w !== g || this !== _ ? k.apply(this, arguments) : b;
          };
        return (_.valueOf = r), b;
      }
      function i(_) {
        if (_ !== Object(_))
          throw new TypeError('value is not a non-null object');
        return _;
      }
      _.exports =
        'WeakMap' in window
          ? window.WeakMap
          : function () {
              var _ = o();
              return {
                get: function (g, b) {
                  var k = _(i(g));
                  return {}.hasOwnProperty.call(k, 'value') ? k.value : b;
                },
                set: function (g, b) {
                  _(i(g)).value = b;
                },
                has: function (g) {
                  return 'value' in _(g);
                },
                delete: function (g) {
                  return delete _(i(g)).value;
                },
              };
            };
    },
    function (_, g, b) {
      'use strict';
      function o() {
        var _ = b(16);
        return _.keys().reduce(function (g, b) {
          var k = b.match(/^\.\/(\w+)\.js/);
          return k && (g[k[1]] = _(b).default), g;
        }, {});
      }
      function r() {
        return b(37);
      }
      function i(_) {
        var g = b(38);
        return (
          b(64) +
          Object.keys(_)
            .map(function (b) {
              return (
                '\n.ya-share2__item_service_' +
                b +
                ' .ya-share2__badge\n{\n    background-color: ' +
                _[b].color +
                ';\n}\n\n.ya-share2__item_service_' +
                b +
                ' .ya-share2__icon\n{\n    background: url(' +
                g('./' + b + '.svg') +
                ');\n}\n'
              );
            })
            .join('')
        );
      }
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.loadPlugins = o),
        (g.getFrameUrl = r),
        (g.getCss = i);
    },
    function (_, g) {
      (function (g) {
        _.exports = g;
      }).call(g, {});
    },
    function (_, g, b) {
      'use strict';
      function o(_) {
        return _ && _.__esModule ? _ : { default: _ };
      }
      Object.defineProperty(g, '__esModule', { value: !0 });
      var k,
        w = o(b(74)),
        x,
        C = o(b(3)),
        E = {
          findInside: function (_, g) {
            return _.querySelectorAll('.' + w.default.stringify(g));
          },
          findOutside: function (_, g) {
            return C.default.closest(_, w.default.stringify(g));
          },
          getMod: function (_, g) {
            for (var b = 0, k = _.classList.length; b < k; b += 1) {
              var x = w.default.parse(_.classList[b]);
              if (x && x.modName === g) return x.modVal;
            }
          },
        };
      g.default = E;
    },
    function (_, g, b) {
      'use strict';
      function o(_) {
        return _ && _.__esModule ? _ : { default: _ };
      }
      var k =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (_) {
                return typeof _;
              }
            : function (_) {
                return _ &&
                  'function' == typeof Symbol &&
                  _.constructor === Symbol &&
                  _ !== Symbol.prototype
                  ? 'symbol'
                  : typeof _;
              },
        w,
        x = o(b(15)),
        C = b(11),
        E,
        z = o(b(65)),
        j,
        M = o(b(66)),
        O = b(0),
        P = (0, C.loadPlugins)(),
        A = (0, C.getFrameUrl)(),
        S = new z.default(x.default.metrika.id),
        L = x.default.defaults,
        F = (0, M.default)({
          defaults: L,
          plugins: P,
          frameUrl: A,
          metrika: S,
        });
      (0, O.ready)(function () {
        S.init(), F('.ya-share2', { reinit: !1 });
      }),
        (window.Ya = window.Ya || {}),
        (window.Ya.share2 = function (_, g) {
          if (
            'object' === (void 0 === _ ? 'undefined' : k(_)) &&
            1 === _.nodeType
          )
            return F(_, g)[0];
          if ('string' == typeof _)
            return (
              0 === _.indexOf('#') &&
                (console.log(
                  'DEPRECATION: use element id instead of query selector for initialization'
                ),
                (_ = _.slice(1))),
              F('#' + _, g)[0]
            );
          throw new TypeError('Neither element nor element id is provided');
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          metrika: { id: 26812653 },
          defaults: {
            hooks: { onready: function () {}, onshare: function () {} },
            theme: {
              bare: !1,
              copy: 'last',
              counter: !1,
              totalCounter: !1,
              lang: 'ru',
              limit: !1,
              nonce: '',
              popupPosition: 'inner',
              popupDirection: 'bottom',
              services: 'collections,vkontakte,facebook,twitter',
              size: 'm',
              useLinks: !1,
              direction: 'horizontal',
            },
            i18n: {
              az: {
                copyLink: 'Əlaqə',
                pressToCopy: 'Press ctrl+C and Enter to copy',
              },
              be: {
                copyLink: 'Cпасылка',
                pressToCopy: 'Press ctrl+C and Enter to copy',
              },
              en: {
                copyLink: 'Copy link',
                pressToCopy: 'Press ctrl+C and Enter to copy',
              },
              hy: {
                copyLink: 'Հղում',
                pressToCopy: 'Press ctrl+C and Enter to copy',
              },
              ka: {
                copyLink: 'ბმული',
                pressToCopy: 'Press ctrl+C and Enter to copy',
              },
              kk: {
                copyLink: 'Сілтеме',
                pressToCopy: 'Press ctrl+C and Enter to copy',
              },
              ro: {
                copyLink: 'Link',
                pressToCopy: 'Press ctrl+C and Enter to copy',
              },
              ru: {
                copyLink: 'Скопировать ссылку',
                pressToCopy: 'Чтобы скопировать, нажмите ctrl+С и enter',
              },
              tr: {
                copyLink: 'Bağlantı',
                pressToCopy: 'Press ctrl+C and Enter to copy',
              },
              tt: {
                copyLink: 'Сылтама',
                pressToCopy: 'Press ctrl+C and Enter to copy',
              },
              uk: {
                copyLink: 'Посилання',
                pressToCopy: 'Press ctrl+C and Enter to copy',
              },
              uz: {
                copyLink: 'Havoladan nusxa olish',
                pressToCopy:
                  'Nusxa olish uchun ctrl+С va enter tugmalarini bosing',
              },
            },
            content: {
              template: 'default',
              description: '',
              image: '',
              title: window.document.title,
              url: window.location.href,
            },
            contentByService: {},
          },
        });
    },
    function (_, g, b) {
      function o(_) {
        return b(r(_));
      }
      function r(_) {
        var g = k[_];
        if (!(g + 1)) throw new Error("Cannot find module '" + _ + "'.");
        return g;
      }
      var k = {
        './blogger.js': 17,
        './collections.js': 18,
        './delicious.js': 19,
        './digg.js': 20,
        './evernote.js': 21,
        './facebook.js': 4,
        './linkedin.js': 22,
        './lj.js': 23,
        './moimir.js': 5,
        './odnoklassniki.js': 6,
        './pinterest.js': 7,
        './pocket.js': 24,
        './qzone.js': 25,
        './reddit.js': 26,
        './renren.js': 27,
        './sinaWeibo.js': 28,
        './skype.js': 29,
        './surfingbird.js': 30,
        './telegram.js': 31,
        './tencentWeibo.js': 32,
        './tumblr.js': 33,
        './twitter.js': 34,
        './viber.js': 35,
        './vkontakte.js': 8,
        './.js': 36,
      };
      (o.keys = function () {
        return Object.keys(k);
      }),
        (o.resolve = r),
        (_.exports = o),
        (o.id = 16);
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://www.blogger.com/blog-this.g',
                params: { t: 'description', u: 'url', n: 'title' },
              },
            },
          },
          popupDimensions: [800, 320],
          i18n: {
            az: 'Blogger',
            be: 'Blogger',
            en: 'Blogger',
            hy: 'Blogger',
            ka: 'Blogger',
            kk: 'Blogger',
            ro: 'Blogger',
            ru: 'Blogger',
            tr: 'Blogger',
            tt: 'Blogger',
            uk: 'Blogger',
            uz: 'Blogger',
          },
          color: '#fb8f3d',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://yandex.ru/collections/share/',
                params: { url: 'url', image: 'image', description: 'title' },
              },
            },
          },
          popupDimensions: [994, 576],
          i18n: {
            az: 'Yandex.Collections',
            be: 'Яндэкс.Калекцыi',
            en: 'Yandex.Collections',
            hy: 'Yandex.Collections',
            ka: 'Yandex.Collections',
            kk: 'Yandex.Collections',
            ro: 'Yandex.Collections',
            ru: 'Яндекс.Коллекции',
            tr: 'Yandex.Collections',
            tt: 'Yandex.Collections',
            uk: 'Yandex.Collections',
            uz: 'Yandex.To‘plam',
          },
          color: '#eb1c00',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://www.delicious.com/save?v=5&noui&jump=close',
                params: { url: 'url', title: 'title' },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: 'Delicious',
            be: 'Delicious',
            en: 'Delicious',
            hy: 'Delicious',
            ka: 'Delicious',
            kk: 'Delicious',
            ro: 'Delicious',
            ru: 'Delicious',
            tr: 'Delicious',
            tt: 'Delicious',
            uk: 'Delicious',
            uz: 'Delicious',
          },
          color: '#31a9ff',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://digg.com/submit',
                params: { url: 'url', title: 'title', bodytext: 'description' },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: 'Digg',
            be: 'Digg',
            en: 'Digg',
            hy: 'Digg',
            ka: 'Digg',
            kk: 'Digg',
            ro: 'Digg',
            ru: 'Digg',
            tr: 'Digg',
            tt: 'Digg',
            uk: 'Digg',
            uz: 'Digg',
          },
          color: '#000',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://www.evernote.com/clip.action',
                params: { title: 'title', body: 'description', url: 'url' },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: 'Evernote',
            be: 'Evernote',
            en: 'Evernote',
            hy: 'Evernote',
            ka: 'Evernote',
            kk: 'Evernote',
            ro: 'Evernote',
            ru: 'Evernote',
            tr: 'Evernote',
            tt: 'Evernote',
            uk: 'Evernote',
            uz: 'Evernote',
          },
          color: '#24d666',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://www.linkedin.com/shareArticle?mini=true',
                params: { url: 'url', title: 'title', summary: 'description' },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: 'LinkedIn',
            be: 'LinkedIn',
            en: 'LinkedIn',
            hy: 'LinkedIn',
            ka: 'LinkedIn',
            kk: 'LinkedIn',
            ro: 'LinkedIn',
            ru: 'LinkedIn',
            tr: 'LinkedIn',
            tt: 'LinkedIn',
            uk: 'LinkedIn',
            uz: 'LinkedIn',
          },
          color: '#0083be',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://www.livejournal.com/update.bml',
                params: {
                  subject: 'title',
                  event: { options: ['url', 'description'], separator: '%0A' },
                },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: 'LiveJournal',
            be: 'LiveJournal',
            en: 'LiveJournal',
            hy: 'LiveJournal',
            ka: 'LiveJournal',
            kk: 'LiveJournal',
            ro: 'LiveJournal',
            ru: 'LiveJournal',
            tr: 'LiveJournal',
            tt: 'LiveJournal',
            uk: 'LiveJournal',
            uz: 'LiveJournal',
          },
          color: '#0d425a',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://getpocket.com/save',
                params: { url: 'url', title: 'title' },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: 'Pocket',
            be: 'Pocket',
            en: 'Pocket',
            hy: 'Pocket',
            ka: 'Pocket',
            kk: 'Pocket',
            ro: 'Pocket',
            ru: 'Pocket',
            tr: 'Pocket',
            tt: 'Pocket',
            uk: 'Pocket',
            uz: 'Pocket',
          },
          color: '#ee4056',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl:
                  'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey',
                params: { url: 'url', title: 'title', pics: 'image' },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: 'Qzone',
            be: 'Qzone',
            en: 'Qzone',
            hy: 'Qzone',
            ka: 'Qzone',
            kk: 'Qzone',
            ro: 'Qzone',
            ru: 'Qzone',
            tr: 'Qzone',
            tt: 'Qzone',
            uk: 'Qzone',
            uz: 'Qzone',
          },
          color: '#f5b53c',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://www.reddit.com/submit',
                params: { url: 'url', title: 'title' },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: 'reddit',
            be: 'reddit',
            en: 'reddit',
            hy: 'reddit',
            ka: 'reddit',
            kk: 'reddit',
            ro: 'reddit',
            ru: 'reddit',
            tr: 'reddit',
            tt: 'reddit',
            uk: 'reddit',
            uz: 'reddit',
          },
          color: '#ff4500',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'http://widget.renren.com/dialog/share',
                params: {
                  resourceUrl: 'url',
                  srcUrl: 'url',
                  title: 'title',
                  pic: 'image',
                  description: 'description',
                },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: 'Renren',
            be: 'Renren',
            en: 'Renren',
            hy: 'Renren',
            ka: 'Renren',
            kk: 'Renren',
            ro: 'Renren',
            ru: 'Renren',
            tr: 'Renren',
            tt: 'Renren',
            uk: 'Renren',
            uz: 'Renren',
          },
          color: '#1760a7',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'http://service.weibo.com/share/share.php?type=3',
                params: { url: 'url', pic: 'image', title: 'title' },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: 'Sina Weibo',
            be: 'Sina Weibo',
            en: 'Sina Weibo',
            hy: 'Sina Weibo',
            ka: 'Sina Weibo',
            kk: 'Sina Weibo',
            ro: 'Sina Weibo',
            ru: 'Sina Weibo',
            tr: 'Sina Weibo',
            tt: 'Sina Weibo',
            uk: 'Sina Weibo',
            uz: 'Sina Weibo',
          },
          color: '#c53220',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://web.skype.com/share',
                params: { url: 'url' },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: 'Skype',
            be: 'Skype',
            en: 'Skype',
            hy: 'Skype',
            ka: 'Skype',
            kk: 'Skype',
            ro: 'Skype',
            ru: 'Skype',
            tr: 'Skype',
            tt: 'Skype',
            uk: 'Skype',
            uz: 'Skype',
          },
          color: '#00aff0',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://surfingbird.ru/share',
                params: { url: 'url', title: 'title', desc: 'description' },
              },
            },
          },
          popupDimensions: [500, 170],
          i18n: {
            az: 'Surfingbird',
            be: 'Surfingbird',
            en: 'Surfingbird',
            hy: 'Surfingbird',
            ka: 'Surfingbird',
            kk: 'Surfingbird',
            ro: 'Surfingbird',
            ru: 'Surfingbird',
            tr: 'Surfingbird',
            tt: 'Surfingbird',
            uk: 'Surfingbird',
            uz: 'Surfingbird',
          },
          color: '#30baff',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://telegram.me/share/url',
                params: { url: 'url', text: 'title' },
              },
            },
          },
          i18n: {
            az: 'Telegram',
            be: 'Telegram',
            en: 'Telegram',
            hy: 'Telegram',
            ka: 'Telegram',
            kk: 'Telegram',
            ro: 'Telegram',
            ru: 'Telegram',
            tr: 'Telegram',
            tt: 'Telegram',
            uk: 'Telegram',
            uz: 'Telegram',
          },
          color: '#64a9dc',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'http://share.v.t.qq.com/index.php?c=share&a=index',
                params: { url: 'url', title: 'title', pic: 'image' },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: 'Tencent Weibo',
            be: 'Tencent Weibo',
            en: 'Tencent Weibo',
            hy: 'Tencent Weibo',
            ka: 'Tencent Weibo',
            kk: 'Tencent Weibo',
            ro: 'Tencent Weibo',
            ru: 'Tencent Weibo',
            tr: 'Tencent Weibo',
            tt: 'Tencent Weibo',
            uk: 'Tencent Weibo',
            uz: 'Tencent Weibo',
          },
          color: '#53a9d7',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://www.tumblr.com/share/link',
                params: { url: 'url', description: 'description' },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: 'Tumblr',
            be: 'Tumblr',
            en: 'Tumblr',
            hy: 'Tumblr',
            ka: 'Tumblr',
            kk: 'Tumblr',
            ro: 'Tumblr',
            ru: 'Tumblr',
            tr: 'Tumblr',
            tt: 'Tumblr',
            uk: 'Tumblr',
            uz: 'Tumblr',
          },
          color: '#547093',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://twitter.com/intent/tweet',
                params: {
                  text: 'title',
                  url: 'url',
                  hashtags: 'hashtags',
                  via: 'via',
                },
              },
            },
          },
          contentOptions: { hashtags: '', via: '' },
          popupDimensions: [550, 420],
          i18n: {
            az: 'Twitter',
            be: 'Twitter',
            en: 'Twitter',
            hy: 'Twitter',
            ka: 'Twitter',
            kk: 'Twitter',
            ro: 'Twitter',
            ru: 'Twitter',
            tr: 'Twitter',
            tt: 'Twitter',
            uk: 'Twitter',
            uz: 'Twitter',
          },
          color: '#000',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'viber://forward',
                params: {
                  text: { options: ['title', 'url'], separator: '%20' },
                },
              },
            },
          },
          i18n: {
            az: 'Viber',
            be: 'Viber',
            en: 'Viber',
            hy: 'Viber',
            ka: 'Viber',
            kk: 'Viber',
            ro: 'Viber',
            ru: 'Viber',
            tr: 'Viber',
            tt: 'Viber',
            uk: 'Viber',
            uz: 'Viber',
          },
          color: '#7b519d',
        });
    },
    function (_, g, b) {
      'use strict';
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.default = {
          config: {
            shareUrl: {
              default: {
                baseUrl: 'https://api..com/send',
                params: {
                  text: { options: ['title', 'url'], separator: '%20' },
                },
              },
            },
          },
          i18n: {
            az: '',
            be: '',
            en: '',
            hy: '',
            ka: '',
            kk: '',
            ro: '',
            ru: '',
            tr: '',
            tt: '',
            uk: '',
            uz: '',
          },
          color: '#65bc54',
        });
    },
    function (_, g, b) {
      _.exports = b.p + 'frame.html';
    },
    function (_, g, b) {
      function o(_) {
        return b(r(_));
      }
      function r(_) {
        var g = k[_];
        if (!(g + 1)) throw new Error("Cannot find module '" + _ + "'.");
        return g;
      }
      var k = {
        './blogger.svg': 39,
        './collections.svg': 40,
        './delicious.svg': 41,
        './digg.svg': 42,
        './evernote.svg': 43,
        './facebook.svg': 44,
        './linkedin.svg': 45,
        './lj.svg': 46,
        './moimir.svg': 47,
        './odnoklassniki.svg': 48,
        './pinterest.svg': 49,
        './pocket.svg': 50,
        './qzone.svg': 51,
        './reddit.svg': 52,
        './renren.svg': 53,
        './sinaWeibo.svg': 54,
        './skype.svg': 55,
        './surfingbird.svg': 56,
        './telegram.svg': 57,
        './tencentWeibo.svg': 58,
        './tumblr.svg': 59,
        './twitter.svg': 60,
        './viber.svg': 61,
        './vkontakte.svg': 62,
        './.svg': 63,
      };
      (o.keys = function () {
        return Object.keys(k);
      }),
        (o.resolve = r),
        (_.exports = o),
        (o.id = 38);
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.896 14.833A5.167 5.167 0 0 1 14.729 20H9.166A5.167 5.167 0 0 1 4 14.833V9.167A5.166 5.166 0 0 1 9.166 4h2.608a5.167 5.167 0 0 1 5.167 5.167l.002.011c.037.536.484.96 1.03.96l.018-.002h.872c.57 0 1.034.463 1.034 1.034l-.001 3.663zM9.038 10.176h2.926a.993.993 0 0 0 0-1.987H9.038a.994.994 0 0 0 0 1.987zm5.867 3.83H9.032a.94.94 0 0 0 0 1.879h5.873a.94.94 0 1 0 0-1.88z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 18l5-2.71L17 18V6H7v12z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 12h8v8H4zm8-8h8v8h-7.984z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.555 10.814V14.1h.96s.18.005.18-.222v-3.287h-.96s-.18-.006-.18.222zm8.032 3.065v-3.287h-.96s-.18-.006-.18.222V14.1h.96s.18.006.18-.222zm-5.306 1.32c0 .227-.18.222-.18.222H4V9.497c0-.227.18-.222.18-.222h2.514V7.222c0-.227.18-.222.18-.222h1.408l-.001 8.199zm2.065 0c0 .227-.18.221-.18.221H8.761V9.496c0-.226.18-.221.18-.221h1.406v5.924zm0-7.103c0 .227-.18.222-.18.222H8.76V7.222c0-.227.18-.222.18-.222h1.408l-.001 1.096zm4.827 9.21c0 .228-.18.223-.18.223h-4.1v-1.096c0-.227.18-.222.18-.222h2.513v-.79h-2.694V9.497c0-.227.18-.222.18-.222l4.102.003v8.029zm4.826 0c0 .228-.18.223-.18.223h-4.1v-1.096c0-.227.18-.222.18-.222h2.514v-.79h-2.695V9.497c0-.227.18-.222.18-.222L20 9.279v8.028zm-1.585-3.427v-3.287h-.96s-.18-.006-.18.222V14.1h.96s.18.006.18-.222z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.277 7.109h1.517c.08 0 .16-.08.16-.16V5.313c0-.28.08-.559.159-.758l.04-.12L5.2 7.348l.16-.08c.239-.12.558-.16.917-.16zm11.654-.28c-.12-.638-.479-.917-.838-1.037-.36-.12-.718-.28-1.676-.4-.759-.08-1.557-.12-2.116-.12-.16-.438-.399-.917-1.317-1.156-.638-.16-1.796-.12-2.155-.08-.559.08-.758.319-.918.479-.16.16-.28.598-.28.878v1.556c0 .48-.318.838-.877.838H6.397c-.32 0-.559.04-.758.12-.16.12-.32.28-.4.4-.2.279-.239.598-.239.957 0 0 0 .28.08.798.04.4.479 3.033.878 3.911.16.36.28.48.599.639.718.32 2.354.639 3.152.758.759.08 1.278.32 1.557-.279 0 0 .04-.16.12-.36a6.3 6.3 0 0 0 .28-1.915c0-.04.079-.04.079 0 0 .36-.08 1.557.838 1.876.36.12 1.118.24 1.876.32.678.079 1.197.358 1.197 2.114 0 1.078-.24 1.238-1.397 1.238-.958 0-1.317.04-1.317-.759 0-.598.599-.558 1.078-.558.2 0 .04-.16.04-.52 0-.398.24-.598 0-.598-1.557-.04-2.475 0-2.475 1.956 0 1.796.679 2.115 2.914 2.115 1.756 0 2.354-.04 3.073-2.275.16-.439.479-1.796.678-4.03.16-1.478-.12-5.788-.319-6.866zm-3.033 4.75c-.2 0-.32 0-.519.04h-.08s-.04 0-.04-.04v-.04c.08-.4.28-.878.878-.878.639.04.799.599.799 1.038v.04c0 .04-.04.04-.04.04-.04 0-.04 0-.04-.04-.28-.08-.599-.12-.958-.16z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.423 20v-7.298h2.464l.369-2.845h-2.832V8.042c0-.824.23-1.385 1.417-1.385h1.515V4.111A20.255 20.255 0 0 0 14.148 4c-2.183 0-3.678 1.326-3.678 3.76v2.097H8v2.845h2.47V20h2.953z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.246 8.954h3.41v10.281h-3.41zm1.725-4.935c-1.167 0-1.929.769-1.929 1.776 0 .987.74 1.777 1.884 1.777h.022c1.19 0 1.93-.79 1.93-1.777-.023-1.007-.74-1.776-1.907-1.776zm10.052 4.715c-1.81 0-2.62.997-3.073 1.698V8.976H9.54c.045.965 0 10.281 0 10.281h3.41v-5.742c0-.307.022-.614.112-.834.246-.613.807-1.25 1.75-1.25 1.233 0 1.727.944 1.727 2.325v5.501h3.41v-5.896c0-3.158-1.683-4.627-3.926-4.627z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M17.815 13.3c.438 2.114.868 4.221 1.306 6.336.037.178-.148.385-.334.311-2.025-.741-4.006-1.49-6.01-2.24a.625.625 0 0 1-.318-.23l-7.39-8.903c-.067-.082-.082-.215-.06-.32.312-1.23.72-2.143 1.752-3.019C7.799 4.36 8.779 4.1 10.047 4.004c.156-.015.223.014.312.133 2.418 2.909 4.837 5.817 7.248 8.725a.888.888 0 0 1 .208.438z' fill='%23FFF'/%3E%3Cpath d='M6.175 8.462c.69-1.795 2.3-3.004 3.835-3.301l-.185-.223a4.242 4.242 0 0 0-3.85 3.272l.2.252z' fill='%230D425A'/%3E%3Cpath d='M10.53 5.792c-1.744.326-3.124 1.513-3.851 3.271l.905 1.091c.787-1.78 2.3-2.997 3.836-3.302l-.89-1.06zm2.76 7.827L9.364 8.9a6.119 6.119 0 0 0-1.269 1.87l4.89 5.89c.289-.385.867-2.359.303-3.041zM9.647 8.633l3.947 4.748c.445.542 2.456.327 3.086-.193l-4.756-5.72c-.793.156-1.587.564-2.277 1.165zm7.308 5.045c-.609.46-1.9.735-2.931.527.074.823-.096 1.892-.616 2.745l1.885.712 1.528.564c.223-.378.542-.608.913-.764l-.35-1.692-.43-2.092z' fill='%230D425A'/%3E%3C/g%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.889 9.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667zm6.222 0a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667zm4.77 6.108l-1.802-3.028a.879.879 0 0 0-1.188-.307.843.843 0 0 0-.313 1.166l.214.36a6.71 6.71 0 0 1-4.795 1.996 6.711 6.711 0 0 1-4.792-1.992l.217-.364a.844.844 0 0 0-.313-1.166.878.878 0 0 0-1.189.307l-1.8 3.028a.844.844 0 0 0 .312 1.166.88.88 0 0 0 1.189-.307l.683-1.147a8.466 8.466 0 0 0 5.694 2.18 8.463 8.463 0 0 0 5.698-2.184l.685 1.151a.873.873 0 0 0 1.189.307.844.844 0 0 0 .312-1.166z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF' fill-rule='evenodd'%3E%3Cpath d='M11.674 6.536a1.69 1.69 0 0 0-1.688 1.688c0 .93.757 1.687 1.688 1.687a1.69 1.69 0 0 0 1.688-1.687 1.69 1.69 0 0 0-1.688-1.688zm0 5.763a4.08 4.08 0 0 1-4.076-4.075 4.08 4.08 0 0 1 4.076-4.077 4.08 4.08 0 0 1 4.077 4.077 4.08 4.08 0 0 1-4.077 4.075zM10.025 15.624a7.633 7.633 0 0 1-2.367-.98 1.194 1.194 0 0 1 1.272-2.022 5.175 5.175 0 0 0 5.489 0 1.194 1.194 0 1 1 1.272 2.022 7.647 7.647 0 0 1-2.367.98l2.279 2.28a1.194 1.194 0 0 1-1.69 1.688l-2.238-2.24-2.24 2.24a1.193 1.193 0 1 1-1.689-1.689l2.279-2.279'/%3E%3C/g%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9.742c0 1.58.599 2.986 1.884 3.51.21.087.4.003.46-.23.043-.16.144-.568.189-.738.06-.23.037-.31-.133-.512-.37-.436-.608-1.001-.608-1.802 0-2.322 1.74-4.402 4.53-4.402 2.471 0 3.829 1.508 3.829 3.522 0 2.65-1.174 4.887-2.917 4.887-.963 0-1.683-.795-1.452-1.77.276-1.165.812-2.421.812-3.262 0-.752-.405-1.38-1.24-1.38-.985 0-1.775 1.017-1.775 2.38 0 .867.293 1.454.293 1.454L8.69 16.406c-.352 1.487-.053 3.309-.028 3.492.015.11.155.136.22.054.09-.119 1.262-1.564 1.66-3.008.113-.409.647-2.526.647-2.526.32.61 1.254 1.145 2.248 1.145 2.957 0 4.964-2.693 4.964-6.298C18.4 6.539 16.089 4 12.576 4 8.204 4 6 7.13 6 9.742z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.9 5c1.159 0 2.1.948 2.1 2.117v5.862c0 .108-.008.215-.024.32.016.156.024.314.024.473 0 3.36-3.582 6.085-8 6.085s-8-2.724-8-6.085c0-.159.008-.317.024-.473a2.148 2.148 0 0 1-.024-.32V7.117C4 5.948 4.94 5 6.1 5h11.8zM8.596 9.392L12 12.795l3.404-3.403a1.063 1.063 0 0 1 1.502 1.502l-4.132 4.131c-.21.21-.486.314-.76.311-.284.01-.571-.094-.788-.31l-4.132-4.132a1.063 1.063 0 0 1 1.502-1.502z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.367 14.463s-.105.148-.457.299l-.553.222.597 3.273c.062.282.25.983-.082 1.062-.17.04-.307-.067-.395-.121l-.769-.445-2.675-1.545c-.204-.122-.78-.546-1.093-.489-.205.038-.336.127-.483.216l-.77.445-2.39 1.386-.883.508c-.123.06-.301.058-.394-.025-.07-.063-.09-.253-.063-.388l.19-1.004.572-3.02c.047-.2.237-.975.166-1.137-.048-.107-.173-.196-.261-.267l-.61-.565-2.13-1.983c-.189-.153-.345-.345-.533-.496l-.235-.216c-.062-.078-.165-.235-.09-.369.142-.248.974-.218 1.335-.28l2.682-.31.82-.09c.146-.024.299-.004.413-.063.239-.123.51-.809.636-1.087l1.31-2.714c.151-.297.286-.603.431-.896.075-.15.133-.308.305-.356.162-.045.257.105.312.178.177.235.325.685.451.973l1.29 2.853c.104.238.363.964.54 1.074.266.166.858.108 1.227.172l2.841.292c.355.062 1.245.01 1.36.267.076.17-.072.314-.152.394l-.864.814-1.983 1.868c-.185.164-.77.637-.833.858-.04.14.02.414.088.722-.096-.001-.39-.007-1.182-.029-.63-.007-2.616-.17-2.713-.178l-.84-.076c-.14-.023-.326.012-.4-.076v-.02c1.727-1.168 3.407-2.416 5.142-3.578l-.006-.044c-.146-.072-.359-.059-.54-.095-.385-.077-.79-.078-1.208-.147-.75-.124-1.59-.114-2.434-.114-1.172 0-2.329.03-3.35.21-.45.079-.894.095-1.309.197-.172.042-.358.03-.49.108l.007.012c.1.027.253.02.381.02l.928.019.808.025.813.032.591.032c.486.075 1.007.036 1.475.114.404.068.804.065 1.182.14.113.022.245.015.33.064v.006c-.039.094-.336.255-.432.318l-1.055.743-2.256 1.62-1.417.992c.003.048.024.035.045.061 1.15.167 2.52.258 3.77.262 1.298.005 2.465-.094 3.118-.193.561-.086 1.082-.147 1.653-.287.325-.08.521-.148.521-.148z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.542 10.63c-1.105-.636-2.494-1.033-4.025-1.118l.808-2.393 2.182.637c0 .963.78 1.742 1.743 1.742.964 0 1.758-.779 1.758-1.742C19.008 6.78 18.214 6 17.25 6c-.609 0-1.148.326-1.459.793l-2.65-.764a.482.482 0 0 0-.61.311l-1.063 3.172c-1.516.085-2.905.482-4.01 1.119a1.987 1.987 0 0 0-1.46-.623A1.995 1.995 0 0 0 4 12.004c0 .75.425 1.403 1.035 1.742-.029.17-.043.34-.043.51 0 2.62 3.146 4.744 7.015 4.744 3.855 0 7-2.124 7-4.744 0-.17-.013-.34-.042-.51A1.974 1.974 0 0 0 20 12.004a1.995 1.995 0 0 0-1.998-1.996c-.581 0-1.091.24-1.46.623zM9.499 12.5a1.01 1.01 0 0 1 1.006 1.006.998.998 0 0 1-1.006.991.986.986 0 0 1-.992-.991c0-.553.439-1.006.992-1.006zm5.002 0a.998.998 0 0 0-.992 1.006c0 .552.44.991.992.991a.998.998 0 0 0 1.006-.991 1.01 1.01 0 0 0-1.006-1.006zm-5.3 3.597a.484.484 0 0 1-.085-.694c.156-.226.482-.255.694-.085.567.44 1.474.68 2.197.68.709 0 1.616-.24 2.197-.68a.484.484 0 0 1 .694.085.496.496 0 0 1-.085.694c-.737.58-1.885.907-2.806.907-.935 0-2.07-.326-2.806-.907zm8.05-7.59c-.411 0-.752-.34-.752-.75 0-.426.34-.752.751-.752s.752.326.752.751c0 .41-.34.75-.752.75z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.019 15.562l-.001-.003-.018.002a.055.055 0 0 0 .019.001zM7.71 12.398l.146-.68c.048-.205.03-.452.03-.692V9.812L7.88 8c-.139 0-.278.043-.393.076-.358.102-.666.201-.962.352-1.158.59-2.022 1.565-2.387 2.944-.343 1.297-.007 2.652.522 3.507.118.19.269.48.44.61.135-.02.272-.15.375-.217a6.06 6.06 0 0 0 .622-.452l.24-.229c.63-.506 1.075-1.346 1.373-2.193zm4.276 3.164h.02a.382.382 0 0 0-.019-.003v.003zm-3.01-.888l-.258-.575-.088-.264H8.62l-.264.498c-.176.288-.358.574-.557.839a6.5 6.5 0 0 1-.85.944l-.517.422.012.024.287.14c.206.091.43.173.657.235.788.217 1.811.177 2.545-.053.178-.055.643-.194.739-.305v-.017c-.177-.092-.324-.254-.47-.381a5.573 5.573 0 0 1-1.225-1.507zm10.884-3.302c-.365-1.379-1.23-2.354-2.387-2.944-.296-.15-.604-.25-.962-.352-.115-.033-.254-.077-.393-.076l-.005 1.812v1.214c0 .24-.019.487.029.692l.147.68c.297.847.741 1.687 1.372 2.193l.24.23c.196.164.402.309.622.45.103.067.24.198.375.218.171-.13.322-.42.44-.61.529-.855.865-2.21.522-3.507zm-3.66 3.8c-.2-.265-.381-.55-.557-.839l-.264-.498h-.011l-.088.264-.258.575a5.576 5.576 0 0 1-1.226 1.507c-.145.127-.292.29-.469.38v.018c.096.111.561.25.739.305.734.23 1.757.27 2.545.053a4.85 4.85 0 0 0 .657-.234l.287-.141a1.31 1.31 0 0 0 .012-.024l-.516-.422a6.5 6.5 0 0 1-.85-.944zm-1.653-2.727c.068-.192.097-.402.146-.61.05-.21.024-.484.024-.727V9.753l-.006-1.741c-.015-.008-.02-.01-.047-.012-.197.047-.326.05-.592.14-.357.102-.685.275-.985.44-.289.16-.53.388-.78.587-.097.077-.199.19-.308.312l.01.01a1.19 1.19 0 0 0-.01.012l.36.47c.232.359.445.763.581 1.213.326 1.079.182 2.411-.235 3.273a4.9 4.9 0 0 1-.445.75l-.258.323a.018.018 0 0 1-.003.007c.004.007.01.016.012.022h.008c.395-.215.686-.574 1.027-.844.189-.15.354-.35.504-.54.404-.514.755-1.046.997-1.73zm-2.55 3.085l-.259-.323a4.903 4.903 0 0 1-.445-.75c-.417-.862-.561-2.194-.235-3.273.136-.45.35-.854.58-1.214L12 9.501l-.01-.011.01-.01a2.791 2.791 0 0 0-.308-.313c-.25-.2-.491-.427-.78-.586-.3-.166-.628-.339-.985-.44-.266-.09-.395-.094-.592-.141-.026.001-.032.004-.047.012l-.006 1.741v1.355c0 .243-.026.517.024.727.049.208.078.418.146.61.242.684.593 1.216.997 1.73.15.19.315.39.505.54.34.27.63.629 1.026.844h.008c.001-.006.008-.015.012-.022a.019.019 0 0 1-.003-.007z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EsinaWeibo%3C/title%3E%3Cpath d='M10.266 14.696c-.103.421.55.447.64.063.037-.191-.103-.332-.282-.332-.167 0-.333.128-.358.269zm-.128.945c.102-.498-.307-.869-.793-.843-.46.038-.843.358-.92.754-.115.511.307.882.793.844.46-.026.843-.345.92-.755zm3.797-3.157c-1.586-.997-3.707-1.01-5.42-.447-.857.28-1.764.818-2.301 1.495-.627.793-.882 1.815-.23 2.8.958 1.431 3.413 2.033 5.675 1.508 1.33-.307 2.749-1.048 3.35-2.326.562-1.177-.052-2.378-1.074-3.03zm-3.17.498c.945.167 1.7.755 1.827 1.739.243 1.854-2.173 3.336-4.026 2.327a1.933 1.933 0 0 1-.742-2.723c.435-.767 1.266-1.266 2.148-1.355a2.75 2.75 0 0 1 .793.012zm6.11-.37c-.268-.18-.538-.281-.856-.383-.308-.103-.359-.154-.243-.46.076-.218.14-.41.166-.666.14-1.15-.793-1.495-1.854-1.406-.498.039-.92.167-1.355.307-.281.09-.806.384-.92.205-.064-.09.013-.23.038-.32.166-.626.23-1.496-.384-1.88-.447-.28-1.227-.204-1.7-.038-2.556.87-6.455 4.552-5.663 7.479.18.664.55 1.163.908 1.521 1.061 1.061 2.71 1.65 4.231 1.866 1.112.154 2.263.14 3.375-.064 1.815-.332 3.554-1.15 4.679-2.607.754-.972.997-2.352 0-3.235a3.334 3.334 0 0 0-.422-.319zm1.623-3.682c.652 1.483-.064 2.148.166 2.66.192.421.767.46 1.023.14.191-.243.294-.959.307-1.278a4.193 4.193 0 0 0-1.125-3.12c-.984-1.073-2.276-1.444-3.694-1.303-.256.025-.46.064-.601.217-.332.358-.166.882.294.959.384.063 1.342-.23 2.416.396.498.307.971.792 1.214 1.33zm-3.45-.562c-.282.345-.078.87.408.856.294-.012.358-.05.677.051.307.103.626.448.64.857.025.268-.282.895.32 1.061a.523.523 0 0 0 .536-.166c.115-.128.166-.371.192-.575.089-.857-.333-1.598-1.01-2.02-.384-.23-1.445-.46-1.764-.064z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.537 13.698c.115-.52.176-1.06.176-1.614 0-4.155-3.415-7.524-7.63-7.524-.444 0-.88.038-1.304.11A4.444 4.444 0 0 0 8.425 4C5.981 4 4 5.954 4 8.364c0 .805.222 1.56.608 2.207a7.428 7.428 0 0 0-.155 1.513c0 4.156 3.416 7.4 7.63 7.4.477 0 .944-.044 1.397-.126.623.33 1.335.642 2.092.642 2.444 0 4.425-1.953 4.425-4.364 0-.695-.166-1.354-.46-1.938zm-3.974 1.457c-.294.418-.725.747-1.293.984-.567.238-1.239.356-2.016.356-.933 0-1.702-.162-2.308-.486a2.986 2.986 0 0 1-1.047-.934c-.268-.39-.403-.768-.403-1.137 0-.213.08-.395.242-.547a.855.855 0 0 1 .615-.229c.202 0 .373.059.512.178.14.119.26.294.358.527.12.278.25.51.39.695.139.185.336.34.589.46.254.12.587.18 1 .18.566 0 1.027-.12 1.382-.364.354-.243.532-.547.532-.91a.919.919 0 0 0-.287-.702 1.88 1.88 0 0 0-.741-.412 13.21 13.21 0 0 0-1.216-.303c-.678-.146-1.247-.318-1.703-.513-.458-.196-.822-.463-1.09-.8-.269-.34-.403-.759-.403-1.26 0-.48.142-.904.426-1.275.283-.372.693-.658 1.23-.858.537-.2 1.17-.299 1.895-.299.58 0 1.082.066 1.505.198.423.133.774.309 1.053.528.28.22.484.45.612.691.13.24.194.477.194.705 0 .21-.08.4-.241.567a.8.8 0 0 1-.603.252c-.22 0-.386-.05-.5-.151-.114-.101-.237-.266-.37-.495a2.27 2.27 0 0 0-.618-.768c-.241-.184-.627-.276-1.16-.276-.494 0-.893.1-1.196.3-.303.199-.455.44-.455.72 0 .173.053.324.155.45.103.128.245.235.426.326.18.091.363.162.547.214.185.052.49.126.916.225a15.47 15.47 0 0 1 1.446.38c.432.138.8.307 1.103.503.302.198.54.45.709.752.17.302.255.673.255 1.111 0 .525-.148.998-.442 1.417z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.315 8.49l-.214 1.987-3.436 3.382h-1.826l-.698 1.826v2.523l-2.47-.698 2.846-5.1L4 8.167l5.638.752L6.899 5l7.463 4.027 2.202-2.47h1.02L20 7.631z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.92 6.089L4.747 11.555c-.967.388-.962.928-.176 1.168l3.534 1.104 1.353 4.146c.164.454.083.634.56.634.368 0 .53-.168.736-.368.13-.127.903-.88 1.767-1.719l3.677 2.717c.676.373 1.165.18 1.333-.628l2.414-11.374c.247-.99-.378-1.44-1.025-1.146zM8.66 13.573l7.967-5.026c.398-.242.763-.112.463.154l-6.822 6.155-.265 2.833-1.343-4.116z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.813 6.01a4.397 4.397 0 0 0-4.326 6.121c.087.199.312.29.511.2a.382.382 0 0 0 .206-.51 3.566 3.566 0 0 1-.286-1.668A3.616 3.616 0 0 1 8.76 6.79a3.615 3.615 0 0 1 3.366 3.84 3.615 3.615 0 0 1-4.65 3.218.39.39 0 0 0-.486.263.394.394 0 0 0 .262.485c.315.093.647.152.977.174a4.397 4.397 0 0 0 4.677-4.087A4.398 4.398 0 0 0 8.813 6.01zm-1.348 5.658a1.67 1.67 0 1 0-.46-.655c-.274.27-.565.59-.854.966-1.022 1.315-2.224 3.694-2.148 7.007.006.204.157.484.355.497l.04.002c.213.015.394-.301.391-.516-.064-2.458.6-4.662 1.955-6.423.242-.316.488-.626.72-.878zm12.388 4.106c-1.307-.48-2.302-1.27-2.95-2.352a4.873 4.873 0 0 1-.354-.71.819.819 0 0 0 .337-.36.829.829 0 0 0-.395-1.098.822.822 0 0 0-1.098.392.822.822 0 0 0 .724 1.177c.091.237.218.516.39.81.483.812 1.431 1.912 3.196 2.558a.226.226 0 0 0 .278-.113c0-.006.005-.01.007-.022a.224.224 0 0 0-.135-.282zm-3.767-1.676a2.04 2.04 0 0 1-1.707-3.042 2.039 2.039 0 0 1 2.784-.787 2.04 2.04 0 0 1 .786 2.783 1.92 1.92 0 0 1-.268.378.223.223 0 0 0 .014.314c.09.082.234.074.313-.016a2.489 2.489 0 1 0-4.017-2.89 2.493 2.493 0 0 0 2.08 3.708.224.224 0 0 0 .015-.448z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.72 7.7h3.699v2.857h-3.7v4.102c0 .928-.01 1.463.087 1.726.098.262.343.534.61.69.355.213.758.32 1.214.32.81 0 1.616-.264 2.417-.79v2.522c-.683.322-1.302.55-1.857.678a7.94 7.94 0 0 1-1.798.195 4.905 4.905 0 0 1-1.724-.276 4.215 4.215 0 0 1-1.438-.79c-.399-.343-.673-.706-.826-1.09-.154-.386-.23-.945-.23-1.676v-5.611H7V8.29c.628-.203 1.357-.496 1.804-.877.45-.382.809-.84 1.08-1.374.272-.534.459-1.214.56-2.039h2.276v3.7z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M12.7368 11.5046L17.5763 6H16.4295L12.2273 10.7796L8.87103 6H5L10.0753 13.2276L5 19H6.14688L10.5845 13.9526L14.129 19H18L12.7368 11.5046ZM11.1659 13.2912L10.6517 12.5715L6.56012 6.8448H8.32166L11.6236 11.4665L12.1379 12.1862L16.43 18.1936H14.6685L11.1659 13.2912Z' fill='white'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF' fill-rule='evenodd'%3E%3Cpath d='M18.434 15.574c-.484-.391-1.002-.743-1.511-1.102-1.016-.718-1.945-.773-2.703.38-.426.648-1.021.677-1.644.392-1.718-.782-3.044-1.989-3.821-3.743-.344-.777-.34-1.473.465-2.022.425-.29.854-.634.82-1.268-.045-.828-2.043-3.593-2.832-3.885a1.429 1.429 0 0 0-.984 0C4.373 4.95 3.606 6.48 4.34 8.292c2.19 5.405 6.043 9.167 11.349 11.463.302.13.638.183.808.23 1.208.012 2.623-1.158 3.032-2.318.393-1.117-.438-1.56-1.096-2.093zM12.485 4.88c3.879.6 5.668 2.454 6.162 6.38.045.363-.09.909.426.919.538.01.408-.528.413-.89.045-3.699-3.163-7.127-6.888-7.253-.281.04-.863-.195-.9.438-.024.427.466.357.787.406z'/%3E%3Cpath d='M13.244 5.957c-.373-.045-.865-.222-.953.299-.09.546.458.49.811.57 2.395.538 3.23 1.414 3.624 3.802.057.349-.057.89.532.8.436-.066.278-.53.315-.802.02-2.293-1.936-4.38-4.329-4.669z'/%3E%3Cpath d='M13.464 7.832c-.249.006-.493.033-.585.3-.137.4.152.496.446.544.983.158 1.5.74 1.598 1.725.027.268.195.484.452.454.356-.043.389-.361.378-.664.017-1.106-1.227-2.385-2.289-2.359z'/%3E%3C/g%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M12.7145 16.9838C7.24792 16.9838 4.12992 13.2361 4 7H6.73829C6.82823 11.5771 8.84691 13.5159 10.4459 13.9157V7H13.0244V10.9475C14.6034 10.7776 16.2622 8.97876 16.8218 7H19.4003C18.9706 9.43848 17.1717 11.2374 15.8925 11.9769C17.1717 12.5765 19.2205 14.1455 20 16.9838H17.1617C16.5521 15.085 15.0332 13.6159 13.0244 13.416V16.9838H12.7145Z' fill='white'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        "\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 11.794c0 4.304-3.517 7.794-7.855 7.794a7.87 7.87 0 0 1-3.796-.97L4 20l1.418-4.182a7.714 7.714 0 0 1-1.127-4.024C4.29 7.489 7.807 4 12.145 4S20 7.49 20 11.794zm-7.855-6.553c-3.641 0-6.603 2.94-6.603 6.553 0 1.434.467 2.762 1.258 3.842l-.825 2.433 2.537-.806a6.6 6.6 0 0 0 3.633 1.084c3.642 0 6.604-2.94 6.604-6.553s-2.962-6.553-6.604-6.553zm3.967 8.348c-.049-.08-.177-.128-.37-.223-.192-.095-1.139-.558-1.315-.621-.177-.064-.305-.096-.434.095a10.92 10.92 0 0 1-.61.749c-.112.128-.224.143-.416.048-.193-.096-.813-.297-1.549-.948a5.76 5.76 0 0 1-1.07-1.323c-.113-.191-.013-.295.084-.39.086-.086.192-.223.289-.334.096-.112.128-.191.192-.319s.032-.239-.016-.335c-.048-.095-.433-1.035-.594-1.418-.16-.382-.32-.318-.433-.318-.112 0-.24-.016-.369-.016a.71.71 0 0 0-.513.239c-.177.19-.674.653-.674 1.593s.69 1.848.786 1.976c.096.127 1.332 2.119 3.289 2.884 1.958.764 1.958.51 2.31.477.353-.031 1.14-.461 1.3-.908.16-.446.16-.829.113-.908z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E\"";
    },
    function (_, g) {
      _.exports =
        '.ya-share2,\n.ya-share2 * {\n  line-height: normal;\n}\n.ya-share2 :link:hover,\n.ya-share2 :visited:hover {\n  color: #000 !important;\n}\n.ya-share2 input {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n  line-height: normal;\n}\n.ya-share2__container_size_m {\n  font-size: 13px;\n}\n.ya-share2__container_size_m .ya-share2__icon {\n  height: 24px;\n  width: 24px;\n  background-size: 24px 24px;\n}\n.ya-share2__container_size_m .ya-share2__title {\n  line-height: 24px;\n}\n.ya-share2__container_size_m .ya-share2__item {\n  margin: 5px 4px 5px 0;\n}\n.ya-share2__container_size_m .ya-share2__item:last-child {\n  margin-right: 0;\n}\n.ya-share2__container_size_m .ya-share2__counter {\n  font-size: 12px;\n  line-height: 24px;\n  padding: 0 8px;\n}\n.ya-share2__container_size_m .ya-share2__counter:before {\n  margin-left: -8px;\n}\n.ya-share2__container_size_m .ya-share2__icon_more:before {\n  font-size: 12px;\n  line-height: 24px;\n}\n.ya-share2__container_size_m .ya-share2__popup {\n  padding: 5px 10px;\n}\n.ya-share2__container_size_m .ya-share2__popup_direction_bottom {\n  top: 28px;\n}\n.ya-share2__container_size_m .ya-share2__popup_direction_top {\n  bottom: 28px;\n}\n.ya-share2__container_size_m .ya-share2__input_copy {\n  width: 140px;\n}\n.ya-share2__container_size_m .ya-share2__badge + .ya-share2__title {\n  margin-left: 10px;\n}\n.ya-share2__container_size_s {\n  font-size: 12px;\n}\n.ya-share2__container_size_s .ya-share2__icon {\n  height: 18px;\n  width: 18px;\n  background-size: 18px 18px;\n}\n.ya-share2__container_size_s .ya-share2__title {\n  line-height: 18px;\n}\n.ya-share2__container_size_s .ya-share2__item {\n  margin: 3px 4px 3px 0;\n}\n.ya-share2__container_size_s .ya-share2__item:last-child {\n  margin-right: 0;\n}\n.ya-share2__container_size_s .ya-share2__counter {\n  font-size: 10px;\n  line-height: 18px;\n  padding: 0 6px;\n}\n.ya-share2__container_size_s .ya-share2__counter:before {\n  margin-left: -6px;\n}\n.ya-share2__container_size_s .ya-share2__icon_more:before {\n  font-size: 10px;\n  line-height: 18px;\n}\n.ya-share2__container_size_s .ya-share2__popup {\n  padding: 3px 6px;\n}\n.ya-share2__container_size_s .ya-share2__popup_direction_bottom {\n  top: 21px;\n}\n.ya-share2__container_size_s .ya-share2__popup_direction_top {\n  bottom: 21px;\n}\n.ya-share2__container_size_s .ya-share2__input_copy {\n  width: 110px;\n}\n.ya-share2__container_size_s .ya-share2__badge + .ya-share2__title {\n  margin-left: 6px;\n}\n.ya-share2__list_direction_horizontal > .ya-share2__item {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ya-share2__list_direction_horizontal > .ya-share2__item > .ya-share2__link > .ya-share2__title {\n  display: none;\n}\n.ya-share2__list_direction_vertical > .ya-share2__item {\n  display: block;\n  margin-right: 0;\n}\n.ya-share2__list_direction_vertical > .ya-share2__item > .ya-share2__link > .ya-share2__badge > .ya-share2__counter {\n  display: none;\n}\n.ya-share2__list {\n  display: inline-block;\n  vertical-align: top;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n.ya-share2__item {\n  font-family: Arial, sans;\n  display: inline-block;\n}\n.ya-share2__item:hover {\n  opacity: 0.9;\n}\n.ya-share2__link {\n  display: inline-block;\n  vertical-align: top;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.ya-share2__badge {\n  display: inline-block;\n  vertical-align: top;\n  border-radius: 2px;\n  color: #fff;\n  overflow: hidden;\n  position: relative;\n}\n.ya-share2__icon {\n  display: inline-block;\n  vertical-align: top;\n}\n.ya-share2__icon:active {\n  box-shadow: inset 0 2px 0 0 rgba(0,0,0,0.1);\n}\n.ya-share2__counter {\n  display: none;\n}\n.ya-share2__counter:before {\n  content: "";\n  position: absolute;\n  width: 1px;\n  top: 2px;\n  bottom: 2px;\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMz/za5cAAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=") 0 0 repeat-y;\n}\n.ya-share2__counter_visible {\n  display: inline-block;\n}\n.ya-share2__counter_total-counter {\n  color: #000;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.ya-share2__item_total-counter.ya-share2__item_total-counter {\n  display: none;\n}\n.ya-share2__item_total-counter.ya-share2__item_total-counter_visible {\n  display: inline-block;\n}\n.ya-share2__title {\n  display: inline-block;\n  color: #000;\n  vertical-align: bottom;\n}\n.ya-share2__title:hover {\n  color: #f00;\n}\n.ya-share2__item_more {\n  position: relative;\n}\n.ya-share2__item_more:hover {\n  opacity: 1;\n}\n.ya-share2__icon_more,\n.ya-share2__icon_total-counter {\n  background-color: #fff;\n  border: 1px solid #cdcdcd;\n  box-sizing: border-box;\n  position: relative;\n}\n.ya-share2__icon_more:before {\n  content: \'•••\';\n  color: #a0a0a0;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  text-align: center;\n}\n.ya-share2__popup {\n  position: absolute;\n  display: none;\n  border: 1px solid #e6e6e6;\n  z-index: 9999;\n  background-color: #fff;\n}\n.ya-share2__popup_direction_bottom {\n  box-shadow: 0 10px 20px -5px rgba(0,0,0,0.4);\n}\n.ya-share2__popup_direction_top {\n  box-shadow: 0 0 20px -5px rgba(0,0,0,0.4);\n}\n.ya-share2__popup_list-direction_horizontal {\n  right: 0;\n}\n.ya-share2__popup_list-direction_vertical {\n  left: 0;\n}\n.ya-share2__popup_visible {\n  display: block;\n}\n.ya-share2__popup_clipboard .ya-share2__input_copy,\n.ya-share2__link_copy {\n  display: none;\n}\n.ya-share2__popup_clipboard .ya-share2__link_copy {\n  display: inline-block;\n}\n';
    },
    function (_, g, b) {
      'use strict';
      function o(_, g) {
        if (!(_ instanceof g))
          throw new TypeError('Cannot call a class as a function');
      }
      function r(_) {
        var g =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function () {},
          b = 'function' == typeof window.jQuery;
        try {
          (window['yaCounter' + _] = new window.Ya.Metrika({
            id: _,
            trackLinks: !0,
            accurateTrackBounce: !0,
            params: {
              jquery: b,
              version: b && window.jQuery().jquery,
              shareVersion: 2,
            },
            triggerEvent: !0,
          })),
            g();
        } catch (_) {}
      }
      function i(_) {
        var g = 'yandex_metrika_callbacks';
        (window[g] = window[g] || []), window[g].push(_);
      }
      Object.defineProperty(g, '__esModule', { value: !0 });
      var k = (function () {
          function e(_, g) {
            for (var b = 0; b < g.length; b++) {
              var k = g[b];
              (k.enumerable = k.enumerable || !1),
                (k.configurable = !0),
                'value' in k && (k.writable = !0),
                Object.defineProperty(_, k.key, k);
            }
          }
          return function (_, g, b) {
            return g && e(_.prototype, g), b && e(_, b), _;
          };
        })(),
        w = b(0),
        x = (function () {
          function e(_) {
            o(this, e), (this._id = _);
          }
          return (
            k(e, [
              {
                key: 'init',
                value: function () {
                  var _ = this;
                  window.Ya && 'Metrika' in window.Ya && r(this._id);
                },
              },
              {
                key: 'getCounter',
                value: function () {
                  return window['yaCounter' + this._id];
                },
              },
            ]),
            e
          );
        })();
      g.default = x;
    },
    function (_, g, b) {
      'use strict';
      function o(_) {
        return _ && _.__esModule ? _ : { default: _ };
      }
      function r(_) {
        return function (g) {
          var b =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (
            'string' == typeof g &&
              (g = z.default.toArray(document.querySelectorAll(g))),
            Array.isArray(g) || (g = [g]),
            !1 === b.reinit &&
              (g = g.filter(function (_) {
                return !A.default.getMod(_, 'inited');
              })),
            g.map(function (g) {
              var k = new C.default(g, (0, w.default)({ options: b }, _));
              return (
                k.isBare() ||
                  L ||
                  (S.injectCss((0, j.getCss)(_.plugins), {
                    nonce: k.getNonce(),
                  }),
                  (L = !0)),
                k
              );
            })
          );
        };
      }
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = r);
      var k,
        w = o(b(1)),
        x,
        C = o(b(67)),
        E,
        z = o(b(3)),
        j = b(11),
        M,
        O = o(b(0)),
        P,
        A = o(b(13)),
        S = new O.default(window.document),
        L = !1;
    },
    function (_, g, b) {
      'use strict';
      function o(_) {
        return _ && _.__esModule ? _ : { default: _ };
      }
      function r(_, g) {
        if (!(_ instanceof g))
          throw new TypeError('Cannot call a class as a function');
      }
      function i(_) {
        return Object.keys(_).reduce(function (g, b) {
          var k = _[b];
          return k.contentOptions && (g[b] = k.contentOptions), g;
        }, {});
      }
      function a() {
        (B = !0),
          I.forEach(function (_) {
            return _();
          }),
          (I = []);
      }
      function s(_) {
        B ? _() : I.push(_);
      }
      Object.defineProperty(g, '__esModule', { value: !0 });
      var k = (function () {
          function e(_, g) {
            for (var b = 0; b < g.length; b++) {
              var k = g[b];
              (k.enumerable = k.enumerable || !1),
                (k.configurable = !0),
                'value' in k && (k.writable = !0),
                Object.defineProperty(_, k.key, k);
            }
          }
          return function (_, g, b) {
            return g && e(_.prototype, g), b && e(_, b), _;
          };
        })(),
        w,
        x = o(b(68)),
        C = b(2),
        E,
        z = o(b(70)),
        j,
        M = (function (_) {
          if (_ && _.__esModule) return _;
          var g = {};
          if (null != _)
            for (var b in _)
              Object.prototype.hasOwnProperty.call(_, b) && (g[b] = _[b]);
          return (g.default = _), g;
        })(b(73)),
        O,
        P = o(b(13)),
        A = b(75),
        S,
        L = o(b(3)),
        F,
        T = o(b(76)),
        D,
        U = o(b(9)),
        B = !1,
        I = [],
        N = (function () {
          function e(_, g) {
            r(this, e);
            var b = g.plugins,
              k = g.defaults,
              w = g.options,
              x = g.frameUrl,
              C = g.metrika,
              E = i(b),
              z = 'ya-share2.' + Math.random(),
              j = new U.default(window, z);
            (this._params = g),
              (this._domNode = _),
              (this._messenger = j),
              (this._namespace = z),
              (this._plugins = b),
              (this._options = (0, T.default)(E, k, _.dataset, w));
            var M = this._options.get('theme.lang');
            (this._i18n = this._options.get('i18n.' + M)),
              this._initLayout(b, x, z),
              this._bindEvents(j, C),
              _.classList.add('ya-share2'),
              _.classList.add('ya-share2_inited'),
              (this._morePopup = P.default.findInside(this._domNode, {
                block: 'ya-share2',
                elem: 'popup',
              })[0]),
              'outer' === this._options.get('theme.popupPosition') &&
                this._moveMorePopupOutside(),
              this._options.get('hooks.onready').call(this);
          }
          return (
            k(e, [
              {
                key: '_isDestroyed',
                value: function () {
                  return null === this._domNode;
                },
              },
              {
                key: '_moveMorePopupOutside',
                value: function () {
                  var _ = P.default.findInside(this._domNode, {
                    block: 'ya-share2',
                    elem: 'container',
                  })[0];
                  (this._morePopupContainer = document.createElement('div')),
                    (this._morePopupContainer.style.position = 'absolute'),
                    (this._morePopupContainer.style['pointer-events'] = 'none'),
                    (this._morePopup.style['pointer-events'] = 'all'),
                    (this._morePopupContainer.className = _.className),
                    this._morePopupContainer.appendChild(this._morePopup),
                    document.body.appendChild(this._morePopupContainer);
                },
              },
              {
                key: 'updateContent',
                value: function (_) {
                  if (this._isDestroyed())
                    throw new Error('Could not operate on destroyed block.');
                  this._options.merge({ content: _ }),
                    this._initLayout(
                      this._params.plugins,
                      this._params.frameUrl,
                      this._namespace
                    );
                },
              },
              {
                key: 'updateContentByService',
                value: function (_) {
                  if (this._isDestroyed())
                    throw new Error('Could not operate on destroyed block.');
                  this._options.merge({ contentByService: _ }),
                    this._initLayout(
                      this._params.plugins,
                      this._params.frameUrl,
                      this._namespace
                    );
                },
              },
              {
                key: 'destroy',
                value: function () {
                  this._domNode.classList.remove('ya-share2_inited'),
                    (this._domNode.innerHTML = ''),
                    (this._domNode = null),
                    this._morePopupContainer &&
                      (L.default.remove(this._morePopupContainer),
                      (this._morePopupContainer = null)),
                    this._messenger.unsubscribe(this),
                    document.body.removeEventListener(
                      'click',
                      this._onBodyClick
                    ),
                    document.body.removeEventListener(
                      'keydown',
                      this._onKeydown
                    );
                },
              },
              {
                key: '_getContentForService',
                value: function (_) {
                  var g = this,
                    n = function (b) {
                      return g._options.get(b, _);
                    },
                    b = {
                      title: n('content.title'),
                      description: n('content.description'),
                      image: n('content.image'),
                      url: n('content.url'),
                    },
                    k = this._plugins[_].contentOptions || {};
                  return (
                    Object.keys(k).forEach(function (_) {
                      b[_] = n('content.' + _);
                    }),
                    b
                  );
                },
              },
              {
                key: '_initLayout',
                value: function (_, g, b) {
                  var k = this;
                  (this._services = this._options
                    .get('theme.services')
                    .split(',')
                    .filter(function (g) {
                      return _[g];
                    })
                    .map(function (g) {
                      var n = function (_) {
                          return k._options.get(_, g);
                        },
                        b = k._getContentForService(g),
                        w = _[g].config.shareUrl,
                        x,
                        E = w[n('content.template')] || w.default,
                        z = (0, C.buildUrl)(E, b);
                      return (
                        (z += '&utm_source=share2'),
                        {
                          name: g,
                          title: _[g].i18n[n('theme.lang')],
                          location: z,
                          hasCounter: Boolean(_[g].config.count),
                          popupDimensions: _[g].popupDimensions,
                        }
                      );
                    })),
                    (0, x.default)(this._i18n).update(
                      this._domNode,
                      'container',
                      [
                        {
                          urls: {
                            content: this._options.get('content.url'),
                            frame: g,
                          },
                          theme: this._options.get('theme'),
                          services: this._services,
                          namespace: b,
                        },
                      ]
                    ),
                    (this._frame =
                      this._domNode.getElementsByTagName('iframe')[0]);
                },
              },
              {
                key: 'getNonce',
                value: function () {
                  return this._options.get('theme.nonce');
                },
              },
              {
                key: '_bindEvents',
                value: function (_, g) {
                  var b = this;
                  (this._onBodyClick = this._onBodyClick.bind(this, g)),
                    (this._onKeydown = this._onKeydown.bind(this)),
                    document.body.addEventListener('click', this._onBodyClick),
                    document.body.addEventListener('keydown', this._onKeydown),
                    document.addEventListener(
                      'yacounter' + g._id + 'inited',
                      this._onMetrikaInited
                    ),
                    s(function () {
                      void 0 !== g.getCounter() &&
                        g.getCounter().params({
                          services: b._services
                            .map(function (_) {
                              return _.name;
                            })
                            .join(','),
                        });
                    }),
                    _.subscribe(this, function (_) {
                      var g =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      if ('init' === _)
                        b._messenger.publish(
                          'counter',
                          {
                            services: b._prepareServicesForFrame(),
                            url: b._options.get('content.url'),
                          },
                          b._frame.contentWindow
                        );
                      else if ('counter' === _) {
                        var k = g.service,
                          w = g.count;
                        b.setCount(k, w);
                      } else if ('total-counter' === _) {
                        var x = g.count;
                        b.setTotalCount(x);
                      }
                    });
                },
              },
              {
                key: '_prepareServicesForFrame',
                value: function () {
                  var _ = this;
                  return this._services.reduce(function (g, b) {
                    var k = b.name,
                      w = _._getContentForService(k);
                    return (
                      (g[k] = Object.keys(w).reduce(function (_, g) {
                        var b = 'url' === g ? z.default : encodeURIComponent;
                        return (_[g] = b(w[g])), _;
                      }, {})),
                      g
                    );
                  }, {});
                },
              },
              {
                key: '_onKeydown',
                value: function (_) {
                  if (27 === (_.which || _.keyCode)) this._closePopup();
                },
              },
              {
                key: '_onBodyClick',
                value: function (_, g) {
                  var b = L.default.getTarget(g),
                    k = P.default.findOutside(b, {
                      block: 'ya-share2',
                      elem: 'container',
                    }),
                    w = P.default.findInside(this._domNode, {
                      block: 'ya-share2',
                      elem: 'container',
                    })[0];
                  if (k && (k === w || k === this._morePopupContainer)) {
                    var x = P.default.findOutside(b, {
                      block: 'ya-share2',
                      elem: 'item',
                    });
                    return x
                      ? P.default.getMod(x, 'more')
                        ? void this._onMoreClick(g)
                        : P.default.getMod(x, 'copy')
                        ? void this._onCopyClick(g)
                        : void this._onServiceClick(g, x, _)
                      : void 0;
                  }
                  this._closePopup();
                },
              },
              {
                key: '_onCopyClick',
                value: function (_) {
                  var g = this;
                  this._morePopup.classList.contains(
                    'ya-share2__popup_clipboard'
                  ) &&
                    (this._closePopup(),
                    (0, A.clip)(this._options.get('content.url'), function (_) {
                      prompt(g._i18n.pressToCopy, _);
                    })),
                    _.preventDefault(),
                    _.stopPropagation();
                },
              },
              {
                key: '_onMoreClick',
                value: function (_) {
                  if (
                    ((0, A.copy)()
                      ? this._morePopup.classList.add(
                          'ya-share2__popup_clipboard'
                        )
                      : this._morePopup.classList.remove(
                          'ya-share2__popup_clipboard'
                        ),
                    this._morePopupContainer)
                  ) {
                    var g = P.default.findInside(this._domNode, {
                        block: 'ya-share2',
                        elem: 'item',
                        modName: 'more',
                      })[0],
                      b = L.default.getRectRelativeToDocument(g),
                      k = b.top,
                      w = b.left,
                      x = b.width,
                      C = b.height;
                    (this._morePopupContainer.style.top = k + 'px'),
                      (this._morePopupContainer.style.left = w + 'px'),
                      (this._morePopupContainer.style.width = x + 'px'),
                      (this._morePopupContainer.style.height = C + 'px');
                  }
                  this._morePopup.classList.toggle('ya-share2__popup_visible'),
                    _.preventDefault(),
                    _.stopPropagation();
                },
              },
              {
                key: '_onServiceClick',
                value: function (_, g, b) {
                  this._closePopup();
                  var k = P.default.getMod(g, 'service');
                  if (k) {
                    var w = this._services.filter(function (_) {
                      return _.name === k;
                    })[0];
                    if (
                      w &&
                      (this._options.get('hooks.onshare').call(this, w.name),
                      !this._isDestroyed())
                    ) {
                      var x = this._options.get('theme.useLinks');
                      if (
                        (this.setCount(w.name),
                        this.setTotalCount(),
                        !x && w.popupDimensions)
                      ) {
                        var C = P.default.findInside(g, {
                          block: 'ya-share2',
                          elem: 'link',
                        })[0];
                        _.preventDefault(),
                          _.stopPropagation(),
                          M.open('ya-share2', C.href, w.popupDimensions);
                      }
                      var E = P.default.findInside(this._domNode, {
                          block: 'ya-share2',
                          elem: 'item',
                        }),
                        z = [].indexOf.call(E, g);
                      void 0 !== b.getCounter() &&
                        b
                          .getCounter()
                          .reachGoal('BUTTON_CLICK', {
                            serviceName: k,
                            buttonIndex: z,
                          });
                    }
                  }
                },
              },
              {
                key: '_onMetrikaInited',
                value: function () {
                  a();
                },
              },
              {
                key: 'setCount',
                value: function (_, g) {
                  if (this._options.get('theme.counter')) {
                    var b = P.default.findInside(this._domNode, {
                      block: 'ya-share2',
                      elem: 'item',
                      modName: 'service',
                      modVal: _,
                    })[0];
                    if (!b) return;
                    var k = P.default.findInside(b, {
                      block: 'ya-share2',
                      elem: 'counter',
                    })[0];
                    if (!k) return;
                    if (void 0 === g) {
                      var w = parseInt(k.textContent || 0, 10);
                      isNaN(w) && (w = 0), (g = w + 1);
                    }
                    (k.textContent = g),
                      g > 0 && k.classList.add('ya-share2__counter_visible');
                  }
                },
              },
              {
                key: 'setTotalCount',
                value: function (_) {
                  if (this._options.get('theme.totalCounter')) {
                    var g = P.default.findInside(this._domNode, {
                      block: 'ya-share2',
                      elem: 'item',
                      modName: 'total-counter',
                      modVal: !0,
                    })[0];
                    if (!g) return;
                    var b = P.default.findInside(g, {
                      block: 'ya-share2',
                      elem: 'counter',
                    })[0];
                    if (!b) return;
                    if (void 0 === _) {
                      var k = parseInt(b.textContent || 0, 10);
                      isNaN(k) && (k = 0), (_ = k + 1);
                    }
                    (b.textContent = _),
                      _ > 0 &&
                        g.classList.add(
                          'ya-share2__item_total-counter_visible'
                        );
                  }
                },
              },
              {
                key: 'isBare',
                value: function () {
                  return Boolean(this._options.get('theme.bare'));
                },
              },
              {
                key: '_closePopup',
                value: function () {
                  this._morePopup &&
                    this._morePopup.classList.remove(
                      'ya-share2__popup_visible'
                    );
                },
              },
            ]),
            e
          );
        })();
      g.default = N;
    },
    function (_, g, b) {
      'use strict';
      function o(_) {
        return _ && _.__esModule ? _ : { default: _ };
      }
      function r(_) {
        if (Array.isArray(_)) {
          for (var g = 0, b = Array(_.length); g < _.length; g++) b[g] = _[g];
          return b;
        }
        return Array.from(_);
      }
      function i(_) {
        var g = ['nofollow'];
        return /^https?:/.test(_) && g.push('noopener'), g.join(' ');
      }
      function a(_) {
        function t(_) {
          for (
            var g = arguments.length, k = Array(g > 1 ? g - 1 : 0), x = 1;
            x < g;
            x++
          )
            k[x - 1] = arguments[x];
          return (0, w.default)(
            { block: 'ya-share2', elem: _ },
            b[_].apply(b, k)
          );
        }
        var g = new C.default(),
          b = {
            container: function (_) {
              var g = _.urls,
                b = _.theme,
                k = _.services,
                w = _.namespace;
              return {
                mods: { size: b.size },
                content: [
                  t(
                    'list',
                    b.direction,
                    k,
                    b.limit,
                    g.content,
                    b.copy,
                    b.popupDirection,
                    b.totalCounter
                  ),
                ].concat(
                  r(
                    [
                      b.nonce && t('iframe-style', b.nonce),
                      t('iframe', g.frame, w, { inlineStyle: !b.nonce }),
                    ].filter(function () {
                      return b.counter || b.totalCounter;
                    })
                  )
                ),
              };
            },
            list: function (_, g) {
              var b =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : g.length,
                k =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : '',
                w = arguments[4],
                x = arguments[5],
                C = arguments[6];
              !1 === b && (b = g.length);
              var E = g.slice(0, b),
                z = g.slice(b);
              return {
                tag: 'ul',
                mods: { direction: _ },
                content: [
                  E.map(function (_) {
                    return t('item', _);
                  }),
                  C && t('item_total-counter'),
                  z.length > 0 && t('item_more', z, k, w, x, _),
                ],
              };
            },
            item: function () {
              var _ =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return {
                tag: 'li',
                mods: { service: _.name },
                content: t('link', _),
              };
            },
            link: function () {
              var _ =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                g = _.location,
                b = _.title,
                k = _.hasCounter;
              return {
                tag: 'a',
                attrs: {
                  href: g || '#',
                  rel: g && i(g),
                  target: g && '_blank',
                  title: b,
                },
                content: [t('badge', k), t('title', b)],
              };
            },
            badge: function (_) {
              return { tag: 'span', content: [t('icon'), _ && t('counter')] };
            },
            icon: function () {
              return { tag: 'span' };
            },
            counter: function () {
              return { tag: 'span' };
            },
            title: function (_) {
              return { tag: 'span', content: _ };
            },
            item_more: function (_, g, b, k, x) {
              return (0, w.default)(t('item'), {
                mods: { more: !0 },
                content: [t('link_more'), t('popup', _, g, b, k, x)],
              });
            },
            link_more: function () {
              return (0, w.default)(t('link'), {
                mods: { more: !0 },
                content: t('badge_more'),
              });
            },
            badge_more: function () {
              return (0, w.default)(t('badge'), {
                mods: { more: !0 },
                content: t('icon_more'),
              });
            },
            icon_more: function () {
              return (0, w.default)(t('icon'), { mods: { more: !0 } });
            },
            item_copy: function (_) {
              return (0, w.default)(t('item'), {
                mods: { copy: !0 },
                content: [t('link_copy'), t('input_copy', _)],
              });
            },
            'item_total-counter': function () {
              return (0, w.default)(t('item'), {
                mods: { 'total-counter': !0 },
                content: (0, w.default)(t('badge'), {
                  content: [
                    (0, w.default)(t('icon'), {
                      mods: { 'total-counter': !0 },
                    }),
                    (0, w.default)(t('counter'), {
                      mods: { 'total-counter': !0, visible: !0 },
                    }),
                  ],
                }),
              });
            },
            link_copy: function () {
              return (0, w.default)(t('link'), {
                mods: { copy: !0 },
                content: t('title', _.copyLink),
              });
            },
            input_copy: function (_) {
              return { tag: 'input', attrs: { value: _ } };
            },
            popup: function (_, g) {
              var b =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 'last',
                k = arguments[3],
                w = arguments[4],
                x = t('list', 'vertical', _);
              return (
                'first' === b
                  ? x.content.unshift(t('item_copy', g))
                  : 'last' === b && x.content.push(t('item_copy', g)),
                {
                  mods: {
                    direction: (k = 'top' === k ? 'top' : 'bottom'),
                    'list-direction': (w =
                      'vertical' === w ? 'vertical' : 'horizontal'),
                  },
                  content: x,
                }
              );
            },
            iframe: function (_, g) {
              var b,
                k = (
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
                ).inlineStyle;
              return {};
            },
            'iframe-style': function (_) {
              return {
                tag: 'style',
                attrs: { nonce: _, scoped: !0 },
                content:
                  '.ya-share2__iframe { border: 0; display: none; position: absolute; left: -9999px; }',
              };
            },
          };
        return {
          update: function (_, b) {
            var k =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [];
            _.innerHTML = g.toHtml(t.apply(void 0, [b].concat(r(k))));
          },
        };
      }
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = a);
      var k,
        w = o(b(1)),
        x,
        C = o(b(69)),
        E,
        z = (function (_) {
          if (_ && _.__esModule) return _;
          var g = {};
          if (null != _)
            for (var b in _)
              Object.prototype.hasOwnProperty.call(_, b) && (g[b] = _[b]);
          return (g.default = _), g;
        })(b(2));
    },
    function (_, g, b) {
      'use strict';
      var k =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (_) {
                return typeof _;
              }
            : function (_) {
                return _ &&
                  'function' == typeof Symbol &&
                  _.constructor === Symbol &&
                  _ !== Symbol.prototype
                  ? 'symbol'
                  : typeof _;
              },
        w = (function () {
          function e() {
            this._shortTags = {};
            for (var g = 0; g < _.length; g++) this._shortTags[_[g]] = 1;
            (this._optJsAttrName = 'onclick'),
              (this._optJsAttrIsJs = !0),
              (this._optJsCls = 'i-bem'),
              (this._optJsElem = !0),
              (this._optEscapeContent = !0),
              (this._optNobaseMods = !1),
              (this._optDelimElem = '__'),
              (this._optDelimMod = '_');
          }
          e.prototype = {
            toHtml: function (_) {
              (this._buf = ''), this._html(_);
              var g = this._buf;
              return delete this._buf, g;
            },
            _html: function (_) {
              var x, C, E;
              if (!1 !== _ && null != _)
                if ('object' !== (void 0 === _ ? 'undefined' : k(_)))
                  this._buf += this._optEscapeContent ? g(_) : _;
                else if (Array.isArray(_))
                  for (x = 0, C = _.length; x < C; x++)
                    !1 !== (E = _[x]) && null != E && this._html(E);
                else {
                  if (_.toHtml) {
                    var z = _.toHtml.call(this, _) || '';
                    return void (this._buf += z);
                  }
                  var j = !1 !== _.bem;
                  if (void 0 !== _.tag && !_.tag)
                    return void (_.html
                      ? (this._buf += _.html)
                      : this._html(_.content));
                  _.mix && !Array.isArray(_.mix) && (_.mix = [_.mix]);
                  var M,
                    O,
                    P,
                    A = '',
                    S = '',
                    L = !1;
                  if ((M = _.attrs))
                    for (x in M)
                      !0 === (O = M[x])
                        ? (S += ' ' + x)
                        : !1 !== O &&
                          null != O &&
                          (S += ' ' + x + '="' + b(O) + '"');
                  if (j) {
                    var F =
                      _.block + (_.elem ? this._optDelimElem + _.elem : '');
                    _.block &&
                      ((A = a(
                        _,
                        F,
                        null,
                        this._optNobaseMods,
                        this._optDelimMod
                      )),
                      _.js && ((P = {})[F] = !0 === _.js ? {} : _.js));
                    var T = this._optJsCls && (this._optJsElem || !_.elem),
                      D = _.mix;
                    if (D && D.length)
                      for (x = 0, C = D.length; x < C; x++) {
                        var U = D[x];
                        if (U && !1 !== U.bem) {
                          var B = U.block || _.block || '',
                            I = U.elem || (U.block ? null : _.block && _.elem),
                            N = B + (I ? this._optDelimElem + I : '');
                          B &&
                            ((A += a(
                              U,
                              N,
                              F,
                              this._optNobaseMods,
                              this._optDelimMod
                            )),
                            U.js &&
                              (((P = P || {})[N] = !0 === U.js ? {} : U.js),
                              (L = !0),
                              T ||
                                (T =
                                  B &&
                                  this._optJsCls &&
                                  (this._optJsElem || !I))));
                        }
                      }
                    if (P) {
                      T && (A += ' ' + this._optJsCls);
                      var V =
                        L || !0 !== _.js
                          ? w(JSON.stringify(P))
                          : '{"' + F + '":{}}';
                      S +=
                        ' ' +
                        (_.jsAttr || this._optJsAttrName) +
                        "='" +
                        (this._optJsAttrIsJs ? 'return ' + V : V) +
                        "'";
                    }
                  }
                  _.cls && (A = (A ? A + ' ' : '') + b(_.cls).trim());
                  var W = _.tag || 'div';
                  (this._buf +=
                    '<' + W + (A ? ' class="' + A + '"' : '') + (S || '')),
                    this._shortTags[W]
                      ? (this._buf += '/>')
                      : ((this._buf += '>'),
                        _.html ? (this._buf += _.html) : this._html(_.content),
                        (this._buf += '</' + W + '>'));
                }
            },
          };
          var _ =
              'area base br col command embed hr img input keygen link menuitem meta param source track wbr'.split(
                ' '
              ),
            g = (e.prototype.xmlEscape = function (_) {
              return (_ + '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
            }),
            b = (e.prototype.attrEscape = function (_) {
              return (_ + '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
            }),
            w = (e.prototype.jsAttrEscape = function (_) {
              return (_ + '').replace(/&/g, '&amp;').replace(/'/g, '&#39;');
            }),
            a = function (_, g, b, k, w) {
              var x,
                C,
                E,
                z = '';
              if (
                (b !== g && (b && (z += ' '), (z += g)),
                (x = (_.elem && _.elemMods) || _.mods))
              )
                for (E in x)
                  ((C = x[E]) || 0 === C) &&
                    (z += ' ' + (k ? w : g + w) + E + (!0 === C ? '' : w + C));
              return z;
            };
          return e;
        })();
      _.exports = w;
    },
    function (_, g, b) {
      'use strict';
      function o(_) {
        var g = document.createElement('a');
        g.href = _;
        var b = g.host;
        return g.href.replace(b, (0, k.toASCII)(b));
      }
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = o);
      var k = b(71);
    },
    function (_, g, b) {
      'use strict';
      (function (_) {
        var k,
          w =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (_) {
                  return typeof _;
                }
              : function (_) {
                  return _ &&
                    'function' == typeof Symbol &&
                    _.constructor === Symbol &&
                    _ !== Symbol.prototype
                    ? 'symbol'
                    : typeof _;
                };
        !(function (x) {
          function a(_) {
            throw new RangeError(V[_]);
          }
          function s(_, g) {
            for (var b = _.length, k = []; b--; ) k[b] = g(_[b]);
            return k;
          }
          function l(_, g) {
            var b = _.split('@'),
              k = '';
            return (
              b.length > 1 && ((k = b[0] + '@'), (_ = b[1])),
              k + s((_ = _.replace(N, '.')).split('.'), g).join('.')
            );
          }
          function u(_) {
            for (var g, b, k = [], w = 0, x = _.length; w < x; )
              (g = _.charCodeAt(w++)) >= 55296 && g <= 56319 && w < x
                ? 56320 == (64512 & (b = _.charCodeAt(w++)))
                  ? k.push(((1023 & g) << 10) + (1023 & b) + 65536)
                  : (k.push(g), w--)
                : k.push(g);
            return k;
          }
          function c(_) {
            return s(_, function (_) {
              var g = '';
              return (
                _ > 65535 &&
                  ((g += H((((_ -= 65536) >>> 10) & 1023) | 55296)),
                  (_ = 56320 | (1023 & _))),
                g + H(_)
              );
            }).join('');
          }
          function p(_) {
            return _ - 48 < 10
              ? _ - 22
              : _ - 65 < 26
              ? _ - 65
              : _ - 97 < 26
              ? _ - 97
              : P;
          }
          function d(_, g) {
            return _ + 22 + 75 * (_ < 26) - ((0 != g) << 5);
          }
          function f(_, g, b) {
            var k = 0;
            for (
              _ = b ? J(_ / F) : _ >> 1, _ += J(_ / g);
              _ > (W * S) >> 1;
              k += P
            )
              _ = J(_ / W);
            return J(k + ((W + 1) * _) / (_ + L));
          }
          function m(_) {
            var g,
              b,
              k,
              w,
              x,
              C,
              E,
              z,
              j,
              M,
              L = [],
              F = _.length,
              B = 0,
              I = D,
              N = T;
            for ((b = _.lastIndexOf(U)) < 0 && (b = 0), k = 0; k < b; ++k)
              _.charCodeAt(k) >= 128 && a('not-basic'), L.push(_.charCodeAt(k));
            for (w = b > 0 ? b + 1 : 0; w < F; ) {
              for (
                x = B, C = 1, E = P;
                w >= F && a('invalid-input'),
                  ((z = p(_.charCodeAt(w++))) >= P || z > J((O - B) / C)) &&
                    a('overflow'),
                  (B += z * C),
                  !(z < (j = E <= N ? A : E >= N + S ? S : E - N));
                E += P
              )
                C > J(O / (M = P - j)) && a('overflow'), (C *= M);
              (N = f(B - x, (g = L.length + 1), 0 == x)),
                J(B / g) > O - I && a('overflow'),
                (I += J(B / g)),
                (B %= g),
                L.splice(B++, 0, I);
            }
            return c(L);
          }
          function h(_) {
            var g,
              b,
              k,
              w,
              x,
              C,
              E,
              z,
              j,
              M,
              L,
              F,
              B,
              I,
              N,
              V = [];
            for (F = (_ = u(_)).length, g = D, b = 0, x = T, C = 0; C < F; ++C)
              (L = _[C]) < 128 && V.push(H(L));
            for (k = w = V.length, w && V.push(U); k < F; ) {
              for (E = O, C = 0; C < F; ++C)
                (L = _[C]) >= g && L < E && (E = L);
              for (
                E - g > J((O - b) / (B = k + 1)) && a('overflow'),
                  b += (E - g) * B,
                  g = E,
                  C = 0;
                C < F;
                ++C
              )
                if (((L = _[C]) < g && ++b > O && a('overflow'), L == g)) {
                  for (
                    z = b, j = P;
                    !(z < (M = j <= x ? A : j >= x + S ? S : j - x));
                    j += P
                  )
                    (N = z - M),
                      (I = P - M),
                      V.push(H(d(M + (N % I), 0))),
                      (z = J(N / I));
                  V.push(H(d(z, 0))), (x = f(b, B, k == w)), (b = 0), ++k;
                }
              ++b, ++g;
            }
            return V.join('');
          }
          function v(_) {
            return l(_, function (_) {
              return B.test(_) ? m(_.slice(4).toLowerCase()) : _;
            });
          }
          function y(_) {
            return l(_, function (_) {
              return I.test(_) ? 'xn--' + h(_) : _;
            });
          }
          var C = 'object' == w(g) && g && !g.nodeType && g,
            E = 'object' == w(_) && _ && !_.nodeType && _,
            z =
              'object' ==
                ('undefined' == typeof global ? 'undefined' : w(global)) &&
              global;
          (z.global !== z && z.window !== z && z.self !== z) || (x = z);
          var j,
            M,
            O = 2147483647,
            P = 36,
            A = 1,
            S = 26,
            L = 38,
            F = 700,
            T = 72,
            D = 128,
            U = '-',
            B = /^xn--/,
            I = /[^\x20-\x7E]/,
            N = /[\x2E\u3002\uFF0E\uFF61]/g,
            V = {
              overflow: 'Overflow: input needs wider integers to process',
              'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
              'invalid-input': 'Invalid input',
            },
            W = P - A,
            J = Math.floor,
            H = String.fromCharCode;
          if (
            ((j = {
              version: '1.4.1',
              ucs2: { decode: u, encode: c },
              decode: m,
              encode: h,
              toASCII: y,
              toUnicode: v,
            }),
            'object' == w(b(12)) && b(12))
          )
            void 0 !==
              (k = function () {
                return j;
              }.call(g, b, g, _)) && (_.exports = k);
          else if (C && E)
            if (_.exports == C) E.exports = j;
            else for (M in j) j.hasOwnProperty(M) && (C[M] = j[M]);
          else x.punycode = j;
        })(void 0);
      }).call(g, b(72)(_));
    },
    function (_, g, b) {
      'use strict';
      _.exports = function (_) {
        return (
          _.webpackPolyfill ||
            ((_.deprecate = function () {}),
            (_.paths = []),
            _.children || (_.children = []),
            Object.defineProperty(_, 'loaded', {
              enumerable: !0,
              get: function () {
                return _.l;
              },
            }),
            Object.defineProperty(_, 'id', {
              enumerable: !0,
              get: function () {
                return _.i;
              },
            }),
            (_.webpackPolyfill = 1)),
          _
        );
      };
    },
    function (_, g, b) {
      'use strict';
      function o(_, g, b) {
        var w = '' + _ + Date.now(),
          x = k(b, 2),
          C = x[0],
          E = x[1],
          z = {
            scrollbars: 1,
            resizable: 1,
            menubar: 0,
            toolbar: 0,
            status: 0,
            left: (screen.width - C) / 2,
            top: (screen.height - E) / 2,
            width: C,
            height: E,
          },
          j = Object.keys(z)
            .map(function (_) {
              return _ + '=' + z[_];
            })
            .join(','),
          M = window.open(g, w, j);
        M && M.focus();
      }
      Object.defineProperty(g, '__esModule', { value: !0 });
      var k = (function () {
        function e(_, g) {
          var b = [],
            k = !0,
            w = !1,
            x = void 0;
          try {
            for (
              var C, E = _[Symbol.iterator]();
              !(k = (C = E.next()).done) &&
              (b.push(C.value), !g || b.length !== g);
              k = !0
            );
          } catch (_) {
            (w = !0), (x = _);
          } finally {
            try {
              !k && E.return && E.return();
            } finally {
              if (w) throw x;
            }
          }
          return b;
        }
        return function (_, g) {
          if (Array.isArray(_)) return _;
          if (Symbol.iterator in Object(_)) return e(_, g);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        };
      })();
      g.open = o;
    },
    function (_, g, b) {
      'use strict';
      var k,
        w =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (_) {
                return typeof _;
              }
            : function (_) {
                return _ &&
                  'function' == typeof Symbol &&
                  _.constructor === Symbol &&
                  _ !== Symbol.prototype
                  ? 'symbol'
                  : typeof _;
              };
      !(function (x) {
        function a(_) {
          function t(_) {
            return w.test(_);
          }
          function n(_) {
            var g = w.exec(_);
            if (g) {
              var b = { block: g[1] || g[4] },
                k = g[5],
                x = g[2] || g[6];
              if ((k && (b.elem = k), x)) {
                var C = g[3] || g[7];
                (b.modName = x), (b.modVal = C || !0);
              }
              return b;
            }
          }
          function o(_) {
            if (_ && _.block) {
              var g = _.block;
              if ((_.elem && (g += k.elem + _.elem), _.modName)) {
                var b = _.modVal;
                (!b && 0 !== b && _.hasOwnProperty('modVal')) ||
                  (g += k.mod.name + _.modName),
                  b && !0 !== b && (g += k.mod.val + b);
              }
              return g;
            }
          }
          function r(_) {
            if (('string' == typeof _ && (_ = n(_)), _ && _.block)) {
              var g = _.modName,
                b = g && (_.modVal || !_.hasOwnProperty('modVal'));
              if (_.elem) {
                if (b) return C.ELEM_MOD;
                if (!g) return C.ELEM;
              }
              return b ? C.BLOCK_MOD : g ? void 0 : C.BLOCK;
            }
          }
          function i(_) {
            return r(_) === C.BLOCK;
          }
          function a(_) {
            return r(_) === C.BLOCK_MOD;
          }
          function c(_) {
            return r(_) === C.ELEM;
          }
          function d(_) {
            return r(_) === C.ELEM_MOD;
          }
          var g = s(_),
            b = JSON.stringify(g);
          if (z[b]) return z[b];
          var k = g.delims,
            w = l(k, g.wordPattern),
            x = {
              validate: t,
              typeOf: r,
              isBlock: i,
              isBlockMod: a,
              isElem: c,
              isElemMod: d,
              parse: n,
              stringify: o,
              elemDelim: k.elem,
              modDelim: k.mod.name,
              modValDelim: k.mod.val,
            };
          return (z[b] = x), x;
        }
        function s(_) {
          if ((_ || (_ = {}), 'string' == typeof _)) {
            var g = E[_];
            if (!g) throw new Error('The `' + _ + '` naming is unknown.');
            return g;
          }
          var b = E.origin,
            k = b.delims,
            w = k.mod,
            x = _.mod || k.mod;
          return {
            delims: {
              elem: _.elem || k.elem,
              mod:
                'string' == typeof x
                  ? { name: x, val: x }
                  : { name: x.name || w.name, val: x.val || x.name || w.val },
            },
            wordPattern: _.wordPattern || b.wordPattern,
          };
        }
        function l(_, g) {
          var b = '(' + g + ')',
            k = '(?:' + _.elem + '(' + g + '))?',
            w,
            x,
            C =
              '(?:' +
              _.mod.name +
              '(' +
              g +
              '))?' +
              ('(?:' + _.mod.val + '(' + g + '))?');
          return new RegExp('^' + b + C + '$|^' + b + k + C + '$');
        }
        var C = {
            BLOCK: 'block',
            BLOCK_MOD: 'blockMod',
            ELEM: 'elem',
            ELEM_MOD: 'elemMod',
          },
          E = {
            origin: {
              delims: { elem: '__', mod: { name: '_', val: '_' } },
              wordPattern: '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*',
            },
            'two-dashes': {
              delims: { elem: '__', mod: { name: '--', val: '_' } },
              wordPattern: '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*',
            },
          },
          z = {},
          j = !0,
          M = [
            'validate',
            'typeOf',
            'isBlock',
            'isBlockMod',
            'isElem',
            'isElemMod',
            'parse',
            'stringify',
            'elemDelim',
            'modDelim',
            'modValDelim',
          ],
          O = a();
        M.forEach(function (_) {
          a[_] = O[_];
        }),
          'object' === w(g) && ((_.exports = a), (j = !1)),
          'object' ===
            ('undefined' == typeof modules ? 'undefined' : w(modules)) &&
            (modules.define('bem-naming', function (_) {
              _(a);
            }),
            (j = !1)),
          void 0 !==
            (k = function (_, g, b) {
              b.exports = a;
            }.call(g, b, g, _)) && (_.exports = k),
          (j = !1) && (x.bemNaming = a);
      })('undefined' != typeof window ? window : global);
    },
    function (_, g, b) {
      'use strict';
      function o(_) {
        var g = document.createElement('input');
        return (
          g.setAttribute('type', 'text'),
          g.setAttribute('value', _),
          (g.style.position = 'absolute'),
          (g.style.left = '-9999px'),
          document.body.appendChild(g),
          g
        );
      }
      function r() {
        try {
          return document.execCommand('copy');
        } catch (_) {
          return !1;
        }
      }
      function i(_, g) {
        var b = o(_);
        b.select();
        var k = r();
        w.default.remove(b), k || g(_);
      }
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.copy = r),
        (g.clip = i);
      var k,
        w = (function (_) {
          return _ && _.__esModule ? _ : { default: _ };
        })(b(3));
    },
    function (_, g, b) {
      'use strict';
      function o(_) {
        return _ && _.__esModule ? _ : { default: _ };
      }
      function r(_, g) {
        if (!(_ instanceof g))
          throw new TypeError('Cannot call a class as a function');
      }
      function i(_, g) {
        var b = (0, E.default)(!0, {}, _, { contentByService: {} });
        return (
          Object.keys(g).forEach(function (_) {
            var k = g[_];
            Object.keys(k).forEach(function (g) {
              var w = 'contentByService.' + _ + '.' + g,
                x = k[g];
              j.default.set(b, w, x);
            });
          }),
          b
        );
      }
      function a(_) {
        var g = {};
        return (
          Object.keys(_).forEach(function (b) {
            var k = b.split(':'),
              x = w(k, 2),
              C = x[0],
              E = x[1],
              z = O[C] || O._defaults,
              M = z.group,
              P,
              A = s(z.type, _[b]),
              S = void 0;
            if (E) {
              if ('content' !== M) return;
              S = 'contentByService.' + E + '.' + C;
            } else S = M + '.' + C;
            j.default.set(g, S, A);
          }),
          g
        );
      }
      function s(_, g) {
        return 'boolean' === _ ? void 0 !== g : g;
      }
      function l(_, g) {
        var b = {};
        return (
          Object.keys(_).forEach(function (w) {
            var x = _[w];
            if ('object' === (void 0 === x ? 'undefined' : k(x)) && null !== x)
              if ('contentByService' === w) {
                var C = x;
                Object.keys(C).forEach(function (_) {
                  var w = C[_];
                  'object' === (void 0 === x ? 'undefined' : k(x)) &&
                    null !== x &&
                    Object.keys(w).forEach(function (k) {
                      var x = w[k],
                        C = 'contentByService.' + _ + '.' + k;
                      (void 0 === j.default.get(g, 'content.' + k) &&
                        void 0 ===
                          j.default.get(
                            g,
                            'contentByService.' + _ + '.' + k
                          )) ||
                        j.default.set(b, C, x);
                    });
                });
              } else {
                var E = x;
                Object.keys(E).forEach(function (_) {
                  var k = E[_],
                    x = w + '.' + _;
                  void 0 !== j.default.get(g, w + '.' + _) &&
                    j.default.set(b, x, k);
                });
              }
          }),
          b
        );
      }
      function u(_, g, b) {
        var k =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          w = i(g, _),
          x,
          C = l(a(b), w),
          E = l(k, w);
        return new M(w, C, E);
      }
      Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.Storage = void 0);
      var k =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (_) {
                return typeof _;
              }
            : function (_) {
                return _ &&
                  'function' == typeof Symbol &&
                  _.constructor === Symbol &&
                  _ !== Symbol.prototype
                  ? 'symbol'
                  : typeof _;
              },
        w = (function () {
          function e(_, g) {
            var b = [],
              k = !0,
              w = !1,
              x = void 0;
            try {
              for (
                var C, E = _[Symbol.iterator]();
                !(k = (C = E.next()).done) &&
                (b.push(C.value), !g || b.length !== g);
                k = !0
              );
            } catch (_) {
              (w = !0), (x = _);
            } finally {
              try {
                !k && E.return && E.return();
              } finally {
                if (w) throw x;
              }
            }
            return b;
          }
          return function (_, g) {
            if (Array.isArray(_)) return _;
            if (Symbol.iterator in Object(_)) return e(_, g);
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          };
        })(),
        x = (function () {
          function e(_, g) {
            for (var b = 0; b < g.length; b++) {
              var k = g[b];
              (k.enumerable = k.enumerable || !1),
                (k.configurable = !0),
                'value' in k && (k.writable = !0),
                Object.defineProperty(_, k.key, k);
            }
          }
          return function (_, g, b) {
            return g && e(_.prototype, g), b && e(_, b), _;
          };
        })();
      (g.createSchema = i),
        (g.fromDataset = a),
        (g.applyWhitelist = l),
        (g.default = u);
      var C,
        E = o(b(1)),
        z,
        j = o(b(77)),
        M = (g.Storage = (function () {
          function e() {
            r(this, e);
            for (var _ = arguments.length, g = Array(_), b = 0; b < _; b++)
              g[b] = arguments[b];
            this._options = E.default.apply(void 0, [!0, {}].concat(g));
          }
          return (
            x(e, [
              {
                key: 'merge',
                value: function (_) {
                  (0, E.default)(!0, this._options, _);
                },
              },
              {
                key: 'get',
                value: function (_, g) {
                  if (g && _.match(/^content\./)) {
                    var b = _.replace(
                        /^content\./,
                        'contentByService.' + g + '.'
                      ),
                      k = j.default.get(this._options, b);
                    if (void 0 !== k) return k;
                  }
                  return j.default.get(this._options, _);
                },
              },
            ]),
            e
          );
        })()),
        O = {
          _defaults: { group: 'content', type: 'string' },
          bare: { group: 'theme', type: 'boolean' },
          copy: { group: 'theme', type: 'string' },
          counter: { group: 'theme', type: 'boolean' },
          lang: { group: 'theme', type: 'string' },
          limit: { group: 'theme', type: 'string' },
          nonce: { group: 'theme', type: 'string' },
          popupPosition: { group: 'theme', type: 'string' },
          popupDirection: { group: 'theme', type: 'string' },
          services: { group: 'theme', type: 'string' },
          size: { group: 'theme', type: 'string' },
          direction: { group: 'theme', type: 'string' },
          useLinks: { group: 'theme', type: 'boolean' },
          totalCounter: { group: 'theme', type: 'boolean' },
        };
    },
    function (_, g, b) {
      'use strict';
      function o(_) {
        for (var g = _.split('.'), b = [], k = 0; k < g.length; k++) {
          for (var w = g[k]; '\\' === w[w.length - 1] && void 0 !== g[k + 1]; )
            (w = w.slice(0, -1) + '.'), (w += g[++k]);
          b.push(w);
        }
        return b;
      }
      var k = b(78);
      _.exports = {
        get: function (_, g, b) {
          if (!k(_) || 'string' != typeof g) return void 0 === b ? _ : b;
          for (var w = o(g), x = 0; x < w.length; x++) {
            if (!Object.prototype.propertyIsEnumerable.call(_, w[x])) return b;
            if (void 0 === (_ = _[w[x]]) || null === _) {
              if (x !== w.length - 1) return b;
              break;
            }
          }
          return _;
        },
        set: function (_, g, b) {
          if (!k(_) || 'string' != typeof g) return _;
          for (var w = _, x = o(g), C = 0; C < x.length; C++) {
            var E = x[C];
            k(_[E]) || (_[E] = {}),
              C === x.length - 1 && (_[E] = b),
              (_ = _[E]);
          }
          return w;
        },
        delete: function (_, g) {
          if (k(_) && 'string' == typeof g)
            for (var b = o(g), w = 0; w < b.length; w++) {
              var x = b[w];
              if (w === b.length - 1) return void delete _[x];
              if (((_ = _[x]), !k(_))) return;
            }
        },
        has: function (_, g) {
          if (!k(_) || 'string' != typeof g) return !1;
          for (var b = o(g), w = 0; w < b.length; w++) {
            if (!k(_)) return !1;
            if (!(b[w] in _)) return !1;
            _ = _[b[w]];
          }
          return !0;
        },
      };
    },
    function (_, g, b) {
      'use strict';
      var k =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (_) {
              return typeof _;
            }
          : function (_) {
              return _ &&
                'function' == typeof Symbol &&
                _.constructor === Symbol &&
                _ !== Symbol.prototype
                ? 'symbol'
                : typeof _;
            };
      _.exports = function (_) {
        var g = void 0 === _ ? 'undefined' : k(_);
        return null !== _ && ('object' === g || 'function' === g);
      };
    },
  ]);
