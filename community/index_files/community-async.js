"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function a(r) {
    if (e[r]) return e[r].exports;
    var s = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(s.exports, s, s.exports, a), s.l = !0, s.exports;
  }

  a.m = t, a.c = e, a.d = function (t, e, r) {
    a.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, a.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, a.t = function (t, e) {
    if (1 & e && (t = a(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var r = Object.create(null);
    if (a.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var s in t) {
      a.d(r, s, function (e) {
        return t[e];
      }.bind(null, s));
    }
    return r;
  }, a.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return a.d(e, "a", e), e;
  }, a.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, a.p = "", a(a.s = 217);
}({
  217: function _(t, e, a) {
    "use strict";

    a.r(e);
    var r = {
      results: [{
        html_url: "https://github.com/GavinMendelGleason",
        image: "https://avatars.githubusercontent.com/u/1993386?v=4",
        user_name: "GavinMendelGleason"
      }, {
        html_url: "https://github.com/rrooij",
        image: "https://avatars.githubusercontent.com/u/4800201?v=4",
        user_name: "rrooij"
      }, {
        html_url: "https://github.com/matko",
        image: "https://avatars.githubusercontent.com/u/155603?v=4",
        user_name: "matko"
      }, {
        html_url: "https://github.com/luke-feeney",
        image: "https://avatars.githubusercontent.com/u/53231019?v=4",
        user_name: "luke-feeney"
      }, {
        html_url: "https://github.com/dmytri",
        image: "https://avatars.githubusercontent.com/u/3110118?v=4",
        user_name: "dmytri"
      }, {
        html_url: "https://github.com/kevinchekovfeeney",
        image: "https://avatars.githubusercontent.com/u/14877635?v=4",
        user_name: "kevinchekovfeeney"
      }, {
        html_url: "https://github.com/pmoura",
        image: "https://avatars.githubusercontent.com/u/294478?v=4",
        user_name: "pmoura"
      }, {
        html_url: "https://github.com/KittyJose",
        image: "https://avatars.githubusercontent.com/u/54106287?v=4",
        user_name: "KittyJose"
      }, {
        html_url: "https://github.com/Anniepoo",
        image: "https://avatars.githubusercontent.com/u/146569?v=4",
        user_name: "Anniepoo"
      }, {
        html_url: "https://github.com/Francesca-Bit",
        image: "https://avatars.githubusercontent.com/u/54183981?v=4",
        user_name: "Francesca-Bit"
      }, {
        html_url: "https://github.com/padraic7a",
        image: "https://avatars.githubusercontent.com/u/3010391?v=4",
        user_name: "padraic7a"
      }, {
        html_url: "https://github.com/drkameleon",
        image: "https://avatars.githubusercontent.com/u/1265028?v=4",
        user_name: "drkameleon"
      }, {
        html_url: "https://github.com/Cheukting",
        image: "https://avatars.githubusercontent.com/u/28761465?v=4",
        user_name: "Cheukting"
      }, {
        html_url: "https://github.com/sreyac",
        image: "https://avatars.githubusercontent.com/u/56823558?v=4",
        user_name: "sreyac"
      }, {
        html_url: "https://github.com/djeikyb",
        image: "https://avatars.githubusercontent.com/u/794743?v=4",
        user_name: "djeikyb"
      }, {
        html_url: "https://github.com/pwin",
        image: "https://avatars.githubusercontent.com/u/1072204?v=4",
        user_name: "pwin"
      }, {
        html_url: "https://github.com/niklaslong",
        image: "https://avatars.githubusercontent.com/u/13221615?v=4",
        user_name: "niklaslong"
      }, {
        html_url: "https://github.com/spl",
        image: "https://avatars.githubusercontent.com/u/54900?v=4",
        user_name: "spl"
      }, {
        html_url: "https://github.com/traviscibot",
        image: "https://avatars.githubusercontent.com/u/33116358?v=4",
        user_name: "traviscibot"
      }, {
        html_url: "https://github.com/harmanbains",
        image: "https://avatars.githubusercontent.com/u/15024079?v=4",
        user_name: "harmanbains"
      }, {
        html_url: "https://github.com/michaelgrahamevans",
        image: "https://avatars.githubusercontent.com/u/5932424?v=4",
        user_name: "michaelgrahamevans"
      }, {
        html_url: "https://github.com/Morijarti",
        image: "https://avatars.githubusercontent.com/u/4889922?v=4",
        user_name: "Morijarti"
      }, {
        html_url: "https://github.com/Pradhvan",
        image: "https://avatars.githubusercontent.com/u/13925830?v=4",
        user_name: "Pradhvan"
      }, {
        html_url: "https://github.com/i-karen",
        image: "https://avatars.githubusercontent.com/u/25528551?v=4",
        user_name: "i-karen"
      }, {
        html_url: "https://github.com/laurentS",
        image: "https://avatars.githubusercontent.com/u/1745184?v=4",
        user_name: "laurentS"
      }, {
        html_url: "https://github.com/rayandas",
        image: "https://avatars.githubusercontent.com/u/32811240?v=4",
        user_name: "rayandas"
      }, {
        html_url: "https://github.com/dirkesquire",
        image: "https://avatars.githubusercontent.com/u/605455?v=4",
        user_name: "dirkesquire"
      }, {
        html_url: "https://github.com/mts310",
        image: "https://avatars.githubusercontent.com/u/6631531?v=4",
        user_name: "mts310"
      }, {
        html_url: "https://github.com/gaushikmr",
        image: "https://avatars.githubusercontent.com/u/59677936?v=4",
        user_name: "gaushikmr"
      }, {
        html_url: "https://github.com/Sangarshanan",
        image: "https://avatars.githubusercontent.com/u/21971847?v=4",
        user_name: "Sangarshanan"
      }, {
        html_url: "https://github.com/Darshnadas",
        image: "https://avatars.githubusercontent.com/u/52234378?v=4",
        user_name: "Darshnadas"
      }, {
        html_url: "https://github.com/darrengarvey",
        image: "https://avatars.githubusercontent.com/u/260360?v=4",
        user_name: "darrengarvey"
      }, {
        html_url: "https://github.com/csaranbalaji",
        image: "https://avatars.githubusercontent.com/u/13437452?v=4",
        user_name: "csaranbalaji"
      }, {
        html_url: "https://github.com/dnknth",
        image: "https://avatars.githubusercontent.com/u/41536869?v=4",
        user_name: "dnknth"
      }, {
        html_url: "https://github.com/joewiz",
        image: "https://avatars.githubusercontent.com/u/59118?v=4",
        user_name: "joewiz"
      }, {
        html_url: "https://github.com/deepsourcebot",
        image: "https://avatars.githubusercontent.com/u/60907429?v=4",
        user_name: "deepsourcebot"
      }, {
        html_url: "https://github.com/1oglop1",
        image: "https://avatars.githubusercontent.com/u/7480694?v=4",
        user_name: "1oglop1"
      }, {
        html_url: "https://github.com/sureshdsk",
        image: "https://avatars.githubusercontent.com/u/1523789?v=4",
        user_name: "sureshdsk"
      }, {
        html_url: "https://github.com/panasenco",
        image: "https://avatars.githubusercontent.com/u/5506411?v=4",
        user_name: "panasenco"
      }, {
        html_url: "https://github.com/AnnieAtDataChemist",
        image: "https://avatars.githubusercontent.com/u/57707271?v=4",
        user_name: "AnnieAtDataChemist"
      }, {
        html_url: "https://github.com/prrao87",
        image: "https://avatars.githubusercontent.com/u/35005448?v=4",
        user_name: "prrao87"
      }, {
        html_url: "https://github.com/neuhausler",
        image: "https://avatars.githubusercontent.com/u/156099?v=4",
        user_name: "neuhausler"
      }, {
        html_url: "https://github.com/fanweixiao",
        image: "https://avatars.githubusercontent.com/u/65603?v=4",
        user_name: "fanweixiao"
      }, {
        html_url: "https://github.com/vivek9209",
        image: "https://avatars.githubusercontent.com/u/63395816?v=4",
        user_name: "vivek9209"
      }, {
        html_url: "https://github.com/kooba-development",
        image: "https://avatars.githubusercontent.com/u/62708339?v=4",
        user_name: "kooba-development"
      }, {
        html_url: "https://github.com/elfalem",
        image: "https://avatars.githubusercontent.com/u/11811344?v=4",
        user_name: "elfalem"
      }, {
        html_url: "https://github.com/canbican",
        image: "https://avatars.githubusercontent.com/u/1055978?v=4",
        user_name: "canbican"
      }, {
        html_url: "https://github.com/JanWielemaker",
        image: "https://avatars.githubusercontent.com/u/3071146?v=4",
        user_name: "JanWielemaker"
      }, {
        html_url: "https://github.com/triska",
        image: "https://avatars.githubusercontent.com/u/7482140?v=4",
        user_name: "triska"
      }, {
        html_url: "https://github.com/keriharris",
        image: "https://avatars.githubusercontent.com/u/7459512?v=4",
        user_name: "keriharris"
      }, {
        html_url: "https://github.com/UWN",
        image: "https://avatars.githubusercontent.com/u/12686410?v=4",
        user_name: "UWN"
      }, {
        html_url: "https://github.com/RobertoBagnara",
        image: "https://avatars.githubusercontent.com/u/10044174?v=4",
        user_name: "RobertoBagnara"
      }, {
        html_url: "https://github.com/edisonm",
        image: "https://avatars.githubusercontent.com/u/3890980?v=4",
        user_name: "edisonm"
      }, {
        html_url: "https://github.com/wouterbeek",
        image: "https://avatars.githubusercontent.com/u/1685012?v=4",
        user_name: "wouterbeek"
      }, {
        html_url: "https://github.com/saarland47",
        image: "https://avatars.githubusercontent.com/u/6187477?v=4",
        user_name: "saarland47"
      }, {
        html_url: "https://github.com/anionic",
        image: "https://avatars.githubusercontent.com/u/1248124?v=4",
        user_name: "anionic"
      }, {
        html_url: "https://github.com/sddu",
        image: "https://avatars.githubusercontent.com/u/64944307?v=4",
        user_name: "sddu"
      }, {
        html_url: "https://github.com/johanromme",
        image: "https://avatars.githubusercontent.com/u/13034782?v=4",
        user_name: "johanromme"
      }, {
        html_url: "https://github.com/ridgeworks",
        image: "https://avatars.githubusercontent.com/u/7230657?v=4",
        user_name: "ridgeworks"
      }, {
        html_url: "https://github.com/rla",
        image: "https://avatars.githubusercontent.com/u/1105347?v=4",
        user_name: "rla"
      }, {
        html_url: "https://github.com/github-cygwin",
        image: "https://avatars.githubusercontent.com/u/7604664?v=4",
        user_name: "github-cygwin"
      }, {
        html_url: "https://github.com/fnogatz",
        image: "https://avatars.githubusercontent.com/u/881988?v=4",
        user_name: "fnogatz"
      }, {
        html_url: "https://github.com/borisvassilev",
        image: "https://avatars.githubusercontent.com/u/419678?v=4",
        user_name: "borisvassilev"
      }, {
        html_url: "https://github.com/dtonhofer",
        image: "https://avatars.githubusercontent.com/u/483879?v=4",
        user_name: "dtonhofer"
      }, {
        html_url: "https://github.com/mifigiel",
        image: "https://avatars.githubusercontent.com/u/49308692?v=4",
        user_name: "mifigiel"
      }, {
        html_url: "https://github.com/mndrix",
        image: "https://avatars.githubusercontent.com/u/43997?v=4",
        user_name: "mndrix"
      }, {
        html_url: "https://github.com/TeamSPoon",
        image: "https://avatars.githubusercontent.com/u/466945?v=4",
        user_name: "TeamSPoon"
      }, {
        html_url: "https://github.com/cmsmcq",
        image: "https://avatars.githubusercontent.com/u/4857689?v=4",
        user_name: "cmsmcq"
      }, {
        html_url: "https://github.com/LyzardKing",
        image: "https://avatars.githubusercontent.com/u/7113541?v=4",
        user_name: "LyzardKing"
      }, {
        html_url: "https://github.com/dogsleg",
        image: "https://avatars.githubusercontent.com/u/2309519?v=4",
        user_name: "dogsleg"
      }, {
        html_url: "https://github.com/abramobagnara",
        image: "https://avatars.githubusercontent.com/u/8308588?v=4",
        user_name: "abramobagnara"
      }, {
        html_url: "https://github.com/friguzzi",
        image: "https://avatars.githubusercontent.com/u/9638148?v=4",
        user_name: "friguzzi"
      }, {
        html_url: "https://github.com/jrvosse",
        image: "https://avatars.githubusercontent.com/u/497690?v=4",
        user_name: "jrvosse"
      }, {
        html_url: "https://github.com/larsmans",
        image: "https://avatars.githubusercontent.com/u/335383?v=4",
        user_name: "larsmans"
      }, {
        html_url: "https://github.com/iamleot",
        image: "https://avatars.githubusercontent.com/u/6260382?v=4",
        user_name: "iamleot"
      }, {
        html_url: "https://github.com/wrvhage",
        image: "https://avatars.githubusercontent.com/u/861081?v=4",
        user_name: "wrvhage"
      }],
      numberOfHits: 77
    };

    var s = function s(t) {
      return new DOMParser().parseFromString(t, "text/html").body.childNodes[0];
    };

    var n = function n(t, e) {
      var a = t.html_url,
          r = t.image,
          n = t.user_name,
          i = "<a href=\"".concat(a, "\" class=\"square\" target=\"_blank\">\n            <img src=\"").concat(r, "\" alt=\"").concat(n, "\" class=\"square__image\">\n        </a>");
      e.appendChild(s(i));
    };

    var i = function i(t) {
      return {
        pageSize: 16,
        expandableParent: document.querySelector(".expandable-block"),
        listingContainerElement: t.querySelector(".listing__container"),
        baseUrl: null,
        basePath: null,
        triggerInitialFetch: !1
      };
    };

    var u =
    /*#__PURE__*/
    function () {
      function u() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector(".listing");
        var e = arguments.length > 1 ? arguments[1] : undefined;

        _classCallCheck(this, u);

        switch (this.container = t, this.config = _objectSpread({}, i(this.container), {}, e), this.config.basePath || console.error("Fatal error: 'basePath' not defined for Listing class"), this.expandableParent = this.config.expandableParent, this.resultsContainer = this.config.listingContainerElement, this.search = null, this.filters = [], this.filterGroup = null, this.triggerUpdateOnChange = this.config.triggerUpdateOnChange, this.triggerUpdateOnReset = this.config.triggerUpdateOnReset, this.triggerInitialFetch = this.config.triggerInitialFetch, this.mockedData = null, this.config.basePath) {
          case "site/git-api":
            this.mockedData = r;
            break;

          default:
            this.mockedData = r;
        }

        this.onFormChange = this.onFormChange.bind(this);
      }

      _createClass(u, [{
        key: "renderLoading",
        value: function renderLoading() {
          this.resultsContainer.innerHTML = '\n            <div class="loading-indicator">\n                <div class="loading-indicator__rect loading-indicator__rect--1"></div>\n                <div class="loading-indicator__rect loading-indicator__rect--2"></div>\n                <div class="loading-indicator__rect loading-indicator__rect--3"></div>\n                <div class="loading-indicator__rect loading-indicator__rect--4"></div>\n                <div class="loading-indicator__rect loading-indicator__rect--5"></div>\n            </div>\n        ';
        }
      }, {
        key: "renderResults",
        value: function renderResults(t) {
          var _this = this;

          if (this.resultsContainer.innerHTML = "", t && t.length) return t.forEach(function (t) {
            switch (t.type) {
              case "site/git-api":
              default:
                n(t, _this.resultsContainer);
            }
          }), void this.container.scrollIntoView();
          this.renderNoResults();
        }
      }, {
        key: "renderError",
        value: function renderError(t) {
          console.warn(t), this.resultsContainer.innerHTML = "";
          var e = document.createRange().createContextualFragment('\n            <div class="wrapper">\n                <h3 class="h3 page-strip__title">Error fetching results</h3>\n                <p class="p page-strip__text">There was a problem fetching results.</p>\n                <button class="button button--primary errorTryAgain">\n                    <span class="button__text">\n                        Try again\n                    </span>\n                </button>\n            </div>\n        ');
          this.resultsContainer.appendChild(e);
          var a = document.querySelector(".expandable-block__button");
          this.expandableParent && a && this.expandableParent.removeChild(a), this.resultsContainer.querySelector(".errorTryAgain").addEventListener("click", this.onFormChange);
        }
      }, {
        key: "renderNoResults",
        value: function renderNoResults() {
          this.resultsContainer.innerHTML = "";
          var t = document.createRange().createContextualFragment('\n            <div class="wrapper">\n                <h3 class="h3 page-strip__title">No matching results</h3>\n                <p class="p page-strip__text">No items were found that match your criteria.</p>\n            </div>\n        ');
          this.resultsContainer.appendChild(t);
          var e = document.querySelector(".expandable-block__button");
          this.expandableParent && e && this.expandableParent.removeChild(e);
        }
      }, {
        key: "doMockedFetch",
        value: function doMockedFetch(t) {
          var _this2 = this;

          t && this.renderLoading(), this.totalPages = Math.ceil(this.mockedData.numberOfHits), setTimeout(function () {
            return _this2.renderResults(_this2.mockedData);
          }, 800), console.info(this.buildUrlEndpoint());
        }
      }, {
        key: "doMockedEmptyFetch",
        value: function doMockedEmptyFetch(t) {
          var _this3 = this;

          t && this.renderLoading(), setTimeout(function () {
            return _this3.renderResults(mockedEmptyData);
          }, 800);
        }
      }, {
        key: "doFetch",
        value: function doFetch() {
          var _this4 = this;

          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          t && this.renderLoading(), fetch(this.buildUrlEndpoint()).then(function (t) {
            return t.json();
          }).then(function (t) {
            _this4.totalPages = Math.ceil(t.numberOfHits), _this4.renderResults(t);
          }).catch(function (t) {
            _this4.renderError(t);
          });
        }
      }, {
        key: "buildUrlEndpoint",
        value: function buildUrlEndpoint() {
          var _this$config = this.config,
              t = _this$config.baseUrl,
              e = _this$config.basePath;
          return "".concat(t || "".concat(window.location.protocol, "//").concat(window.location.hostname), "/").concat(e, "/").concat(function (t) {
            if (Object.keys(t).length) {
              return "?".concat(Object.keys(t).map(function (e) {
                return "".concat(e, "=").concat(t[e]);
              }).join("&"));
            }

            return "";
          }(this.getQueryParams()));
        }
      }, {
        key: "getQueryParams",
        value: function getQueryParams() {
          var t = [];
          return this.filters.forEach(function (e) {
            e.value && t.push(e.value);
          }), _objectSpread({}, this.search && this.search.getSearchQuery() ? _defineProperty({}, this.search.queryStringKey, encodeURIComponent(this.search.getSearchQuery())) : null, {}, t.length ? {
            category: encodeURIComponent("".concat(t.join("|")))
          } : null);
        }
      }, {
        key: "onFormChange",
        value: function onFormChange() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          this.currentPage = 1, this.doFetch(t);
        }
      }, {
        key: "init",
        value: function init() {
          this.triggerInitialFetch && this.onFormChange(!0);
        }
      }]);

      return u;
    }();

    window.addEventListener("DOMContentLoaded", function () {
      (function () {
        var t = document.querySelector(".listing");

        if (t) {
          var _e = t.querySelector(".square-list"),
              _a = {};

          if (_e) {
            var _r = {
              pageSize: 76,
              listingContainerElement: _e,
              baseUrl: "//terminusdb.devsitehq.com",
              basePath: t.dataset.endpoint,
              triggerInitialFetch: !0
            };
            new u(t, _r).init(_a);
          }
        }
      })();
    });
  }
});