(function(t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/", i(i.s = 7)
})({
    "0029": function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    "0185": function(t, e, i) {
        var n = i("e5fa");
        t.exports = function(t) {
            return Object(n(t))
        }
    },
    "01f9": function(t, e, i) {
        "use strict";
        var n = i("2d00"),
            r = i("5ca1"),
            o = i("2aba"),
            a = i("32e9"),
            s = i("84f2"),
            l = i("41a0"),
            c = i("7f20"),
            h = i("38fd"),
            u = i("2b4c")("iterator"),
            d = !([].keys && "next" in [].keys()),
            p = "@@iterator",
            f = "keys",
            g = "values",
            m = function() {
                return this
            };
        t.exports = function(t, e, i, v, y, x, b) {
            l(i, e, v);
            var w, _, k, S = function(t) {
                    if (!d && t in T) return T[t];
                    switch (t) {
                        case f:
                            return function() {
                                return new i(this, t)
                            };
                        case g:
                            return function() {
                                return new i(this, t)
                            }
                    }
                    return function() {
                        return new i(this, t)
                    }
                },
                M = e + " Iterator",
                A = y == g,
                C = !1,
                T = t.prototype,
                P = T[u] || T[p] || y && T[y],
                O = P || S(y),
                L = y ? A ? S("entries") : O : void 0,
                E = "Array" == e && T.entries || P;
            if (E && (k = h(E.call(new t)), k !== Object.prototype && k.next && (c(k, M, !0), n || "function" == typeof k[u] || a(k, u, m))), A && P && P.name !== g && (C = !0, O = function() {
                    return P.call(this)
                }), n && !b || !d && !C && T[u] || a(T, u, O), s[e] = O, s[M] = m, y)
                if (w = {
                        values: A ? O : S(g),
                        keys: x ? O : S(f),
                        entries: L
                    }, b)
                    for (_ in w) _ in T || o(T, _, w[_]);
                else r(r.P + r.F * (d || C), e, w);
            return w
        }
    },
    "026a": function(t, e, i) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "cg-container",
                    style: t.containerStyle,
                    attrs: {
                        "data-loading": t.loading
                    }
                }, [t.loading ? i("div", {
                    staticClass: "cg-p-3 cg-base"
                }, [t._v("Loading widget...")]) : t._e(), i("div", {
                    staticClass: "cg-widget cg-relative"
                }, [i("div", {
                    attrs: {
                        id: t.chartId
                    }
                }), i("div", {
                    staticClass: "cg-absolute cg-bold",
                    staticStyle: {
                        bottom: "5px",
                        left: "18px"
                    },
                    domProps: {
                        innerHTML: t._s(t.poweredByCoinGecko)
                    }
                })])])
            },
            r = [],
            o = (i("7f7f"), i("a4bb")),
            a = i.n(o),
            s = (i("5df3"), i("795b")),
            l = i.n(s),
            c = (i("ac6a"), i("28a5"), i("6b54"), i("c5f6"), i("cadf"), i("551c"), i("097d"), i("e8ba")),
            h = i("e591"),
            u = i.n(h),
            d = i("0319"),
            p = i.n(d),
            f = i("c1e2");
        p()(u.a), u.a.theme = {
            chart: {
                backgroundColor: "#000"
            },
            title: {
                style: {
                    color: "#fff",
                    font: "20px sans-serif"
                }
            }
        }, u.a.setOptions(u.a.theme);
        var g = "#4b8800",
            m = 2,
            v = 500,
            y = {
                name: "CoingeckoCoinCompareChartWidget",
                mixins: [Object(f["a"])()],
                props: {
                    coinIds: {
                        type: String,
                        default: "bitcoin,litecoin,tron,neo,monero"
                    },
                    currency: {
                        type: String,
                        default: "usd"
                    },
                    type: {
                        type: String,
                        default: "price"
                    },
                    locale: {
                        type: String,
                        default: "en"
                    },
                    width: {
                        type: Number,
                        default: 0
                    }
                },
                data: function() {
                    return {
                        chartId: "chart-".concat(Math.floor(1e6 * Math.random()).toString()),
                        loading: !0,
                        apiChartData: {},
                        apiCoinData: {},
                        seriesData: []
                    }
                },
                computed: {
                    currencyCode: function() {
                        return this.currency.toLowerCase()
                    },
                    sanitizedCoinIds: function() {
                        var t = this.coinIds.split(",").map(function(t) {
                                return t.trim()
                            }),
                            e = [],
                            i = {};
                        return t.forEach(function(t) {
                            i[t] || e.push(t), i[t] = t
                        }), e
                    },
                    coins: function() {
                        var t = {};
                        return this.apiChartData.forEach(function(e) {
                            t[e.id] = e
                        }), this.sanitizedCoinIds.map(function(e) {
                            return t[e]
                        })
                    },
                    poweredByCoinGecko: function() {
                        return this.polyglot.t("coin_compare_chart_widget.powered_by", {
                            name: "CoinGecko",
                            name_start: '<a class="cg-primary-color-dark cg-no-underline" href="https://www.coingecko.com/en?'.concat(this.utmParams(this.sanitizedCoinIds.join()), '" target="_blank">'),
                            name_end: "</a>"
                        })
                    },
                    containerStyle: function() {
                        var t = "".concat(this.width, "px");
                        return 0 === this.width && (t = "100%"), {
                            width: t
                        }
                    }
                },
                methods: {
                    formatCurrency: function(t) {
                        return Object(c["formatCurrency"])(t, this.currencyCode, this.locale)
                    },
                    fetchCoinChartData: function(t, e) {
                        var i = this;
                        return fetch("https://api.coingecko.com/api/v3/coins/".concat(t, "/market_chart?vs_currency=").concat(this.currencyCode, "&days=").concat(e)).then(function(t) {
                            return t.json()
                        }).then(function(e) {
                            i.apiChartData[t] = e
                        })
                    },
                    fetchCoins: function() {
                        var t = this;
                        fetch("https://api.coingecko.com/api/v3/coins/markets?ids=".concat(this.sanitizedCoinIds, "&vs_currency=").concat(this.currencyCode)).then(function(t) {
                            return t.json()
                        }).then(function(e) {
                            t.apiCoinData = {}, e.forEach(function(e) {
                                t.apiCoinData[e.id] = e
                            })
                        })
                    },
                    fetchData: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            i = e.durationInDays,
                            n = void 0 === i ? "max" : i;
                        this.loading = !0, this.fetchCoins();
                        for (var r = [], o = 0; o < this.sanitizedCoinIds.length; o += m) r.push(this.sanitizedCoinIds.slice(o, o + m));
                        return this._dataPromise = l.a.resolve(), r.forEach(function(e) {
                            t._dataPromise = t._dataPromise.then(function() {
                                return l.a.all(e.map(function(e) {
                                    return t.fetchCoinChartData(e, n)
                                }))
                            }).then(function() {
                                return new l.a(function(t) {
                                    setTimeout(t, v)
                                })
                            })
                        }), this._dataPromise.then(function() {
                            t.seriesData = t.sanitizedCoinIds.map(function(e) {
                                var i = "prices";
                                return "price" === t.type ? i = "prices" : "market_cap" === t.type && (i = "market_caps"), {
                                    name: e,
                                    data: t.apiChartData[e][i]
                                }
                            }), t.loading = !1, t.createChart()
                        })
                    },
                    createChart: function() {
                        var t;
                        switch (this.type) {
                            case "price":
                                t = this.polyglot.t("coin_compare_chart_widget.crypto_price_comparison");
                                break;
                            case "market_cap":
                                t = this.polyglot.t("coin_compare_chart_widget.crypto_market_cap_comparison");
                                break;
                            default:
                                t = "Unknown Comparison";
                                break
                        }
                        var e = this.formatCurrency.bind(this),
                            i = this.apiCoinData;
                        this.chart = u.a.stockChart(this.$el.querySelector("#".concat(this.chartId)), {
                            chart: {
                                spacingBottom: 25,
                                spacingTop: 20,
                                spacingLeft: 20,
                                spacingRight: 20
                            },
                            title: {
                                text: t,
                                style: {
                                    color: g
                                }
                            },
                            subtitle: {
                                text: a()(i).map(function(t) {
                                    return i[t].name
                                }).join(", ")
                            },
                            navigator: {
                                enabled: !1
                            },
                            xAxis: {
                                minRange: 36e5
                            },
                            yAxis: {
                                type: "linear",
                                labels: {
                                    formatter: function() {
                                        return e(this.value)
                                    }
                                },
                                plotLines: [{
                                    value: 0,
                                    width: 2,
                                    color: "silver"
                                }]
                            },
                            plotOptions: {
                                series: {
                                    showInNavigator: !0
                                }
                            },
                            tooltip: {
                                pointFormatter: function() {
                                    return '<span style="color:{series.color}">'.concat(i[this.series.name].name, "</span>: <b>").concat(e(this.y), "</b><br/>")
                                },
                                valueDecimals: 2,
                                split: !0
                            },
                            rangeSelector: {
                                inputEnabled: !1,
                                selected: 5,
                                buttonPosition: {
                                    x: -5
                                },
                                buttonTheme: {
                                    height: 16,
                                    width: 24,
                                    fill: "none",
                                    stroke: "none",
                                    "stroke-width": 0,
                                    r: 2,
                                    style: {
                                        color: g,
                                        fontWeight: "bold"
                                    },
                                    states: {
                                        hover: {},
                                        select: {
                                            fill: g,
                                            style: {
                                                color: "white"
                                            }
                                        }
                                    }
                                },
                                labelStyle: {
                                    display: "none"
                                }
                            },
                            exporting: {
                                buttons: {
                                    logButton: {
                                        text: "Log",
                                        enabled: !0,
                                        className: "cg-log-button",
                                        x: 5,
                                        y: 50,
                                        onclick: function() {
                                            var t = this.exportingGroup.element.querySelector(".cg-linear-button"),
                                                e = this.exportingGroup.element.querySelector(".cg-log-button");
                                            e.classList.add("cg-active-button"), t.classList.remove("cg-active-button"), this.update({
                                                yAxis: {
                                                    type: "logarithmic"
                                                }
                                            })
                                        }
                                    },
                                    linearButton: {
                                        text: "Linear",
                                        width: 50,
                                        className: "cg-linear-button cg-active-button",
                                        x: -30,
                                        y: 50,
                                        onclick: function() {
                                            var t = this.exportingGroup.element.querySelector(".cg-linear-button"),
                                                e = this.exportingGroup.element.querySelector(".cg-log-button");
                                            e.classList.remove("cg-active-button"), t.classList.add("cg-active-button"), this.update({
                                                yAxis: {
                                                    type: "linear"
                                                }
                                            })
                                        }
                                    }
                                }
                            },
                            series: this.seriesData,
                            credits: {
                                position: {
                                    y: -10,
                                    x: -20
                                }
                            }
                        })
                    },
                    utmParams: function(t) {
                        return "utm_source=".concat(window.location.host, "&utm_medium=coin_compare_chart_widget&utm_content=").concat(t)
                    }
                },
                watch: {
                    coinIds: function() {
                        this.fetchData()
                    },
                    currency: function() {
                        this.fetchData()
                    },
                    width: function() {
                        var t = this;
                        setTimeout(function() {
                            t.createChart()
                        }, 100)
                    },
                    type: function() {
                        this.fetchData()
                    }
                },
                created: function() {
                    this.fetchData()
                }
            },
            x = y,
            b = i("2877"),
            w = Object(b["a"])(x, n, r, !1, null, null, null);
        w.options.__file = "CoingeckoCoinCompareChartWidget.vue";
        e["a"] = w.exports
    },
    "02f4": function(t, e, i) {
        var n = i("4588"),
            r = i("be13");
        t.exports = function(t) {
            return function(e, i) {
                var o, a, s = String(r(e)),
                    l = n(i),
                    c = s.length;
                return l < 0 || l >= c ? t ? "" : void 0 : (o = s.charCodeAt(l), o < 55296 || o > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : o : t ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536)
            }
        }
    },
    "0319": function(t, e, i) {
        var n;
        (function(r) {
            t.exports ? t.exports = r : (n = function() {
                return r
            }.call(e, i, e, t), void 0 === n || (t.exports = n))
        })(function(t) {
            (function(t) {
                var e = t.defaultOptions,
                    i = t.doc,
                    n = t.Chart,
                    r = t.addEvent,
                    o = t.removeEvent,
                    a = t.fireEvent,
                    s = t.createElement,
                    l = t.discardElement,
                    c = t.css,
                    h = t.merge,
                    u = t.pick,
                    d = t.each,
                    p = t.objectEach,
                    f = t.extend,
                    g = t.isTouchDevice,
                    m = t.win,
                    v = m.navigator.userAgent,
                    y = t.Renderer.prototype.symbols;
                /Edge\/|Trident\/|MSIE /.test(v), /firefox/i.test(v), f(e.lang, {
                    printChart: "Print chart",
                    downloadPNG: "Download PNG image",
                    downloadJPEG: "Download JPEG image",
                    downloadPDF: "Download PDF document",
                    downloadSVG: "Download SVG vector image",
                    contextButtonTitle: "Chart context menu"
                }), e.navigation = {
                    buttonOptions: {
                        theme: {},
                        symbolSize: 14,
                        symbolX: 12.5,
                        symbolY: 10.5,
                        align: "right",
                        buttonSpacing: 3,
                        height: 22,
                        verticalAlign: "top",
                        width: 24
                    }
                }, h(!0, e.navigation, {
                    menuStyle: {
                        border: "1px solid #999999",
                        background: "#ffffff",
                        padding: "5px 0"
                    },
                    menuItemStyle: {
                        padding: "0.5em 1em",
                        background: "none",
                        color: "#333333",
                        fontSize: g ? "14px" : "11px",
                        transition: "background 250ms, color 250ms"
                    },
                    menuItemHoverStyle: {
                        background: "#335cad",
                        color: "#ffffff"
                    },
                    buttonOptions: {
                        symbolFill: "#666666",
                        symbolStroke: "#666666",
                        symbolStrokeWidth: 3,
                        theme: {
                            fill: "#ffffff",
                            stroke: "none",
                            padding: 5
                        }
                    }
                }), e.exporting = {
                    type: "image/png",
                    url: "https://export.highcharts.com/",
                    printMaxWidth: 780,
                    scale: 2,
                    buttons: {
                        contextButton: {
                            className: "highcharts-contextbutton",
                            menuClassName: "highcharts-contextmenu",
                            symbol: "menu",
                            titleKey: "contextButtonTitle",
                            menuItems: "printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")
                        }
                    },
                    menuItemDefinitions: {
                        printChart: {
                            textKey: "printChart",
                            onclick: function() {
                                this.print()
                            }
                        },
                        separator: {
                            separator: !0
                        },
                        downloadPNG: {
                            textKey: "downloadPNG",
                            onclick: function() {
                                this.exportChart()
                            }
                        },
                        downloadJPEG: {
                            textKey: "downloadJPEG",
                            onclick: function() {
                                this.exportChart({
                                    type: "image/jpeg"
                                })
                            }
                        },
                        downloadPDF: {
                            textKey: "downloadPDF",
                            onclick: function() {
                                this.exportChart({
                                    type: "application/pdf"
                                })
                            }
                        },
                        downloadSVG: {
                            textKey: "downloadSVG",
                            onclick: function() {
                                this.exportChart({
                                    type: "image/svg+xml"
                                })
                            }
                        }
                    }
                }, t.post = function(t, e, n) {
                    var r = s("form", h({
                        method: "post",
                        action: t,
                        enctype: "multipart/form-data"
                    }, n), {
                        display: "none"
                    }, i.body);
                    p(e, function(t, e) {
                        s("input", {
                            type: "hidden",
                            name: e,
                            value: t
                        }, null, r)
                    }), r.submit(), l(r)
                }, f(n.prototype, {
                    sanitizeSVG: function(t, e) {
                        if (e && e.exporting && e.exporting.allowHTML) {
                            var i = t.match(/<\/svg>(.*?$)/);
                            i && i[1] && (i = '<foreignObject x="0" y="0" width="' + e.chart.width + '" height="' + e.chart.height + '"><body xmlns="http://www.w3.org/1999/xhtml">' + i[1] + "</body></foreignObject>", t = t.replace("</svg>", i + "</svg>"))
                        }
                        return t = t.replace(/zIndex="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g, "url($2)").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+\:)href=/g, " xlink:href=").replace(/\n/, " ").replace(/<\/svg>.*?$/, "</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, "Â ").replace(/&shy;/g, "Â­"), this.ieSanitizeSVG && (t = this.ieSanitizeSVG(t)), t
                    },
                    getChartHTML: function() {
                        return this.container.innerHTML
                    },
                    getSVG: function(e) {
                        var n, r, o, c, u, p = h(this.options, e);
                        return r = s("div", null, {
                            position: "absolute",
                            top: "-9999em",
                            width: this.chartWidth + "px",
                            height: this.chartHeight + "px"
                        }, i.body), o = this.renderTo.style.width, u = this.renderTo.style.height, o = p.exporting.sourceWidth || p.chart.width || /px$/.test(o) && parseInt(o, 10) || 600, u = p.exporting.sourceHeight || p.chart.height || /px$/.test(u) && parseInt(u, 10) || 400, f(p.chart, {
                            animation: !1,
                            renderTo: r,
                            forExport: !0,
                            renderer: "SVGRenderer",
                            width: o,
                            height: u
                        }), p.exporting.enabled = !1, delete p.data, p.series = [], d(this.series, function(t) {
                            c = h(t.userOptions, {
                                animation: !1,
                                enableMouseTracking: !1,
                                showCheckbox: !1,
                                visible: t.visible
                            }), c.isInternal || p.series.push(c)
                        }), d(this.axes, function(e) {
                            e.userOptions.internalKey || (e.userOptions.internalKey = t.uniqueKey())
                        }), n = new t.Chart(p, this.callback), e && d(["xAxis", "yAxis", "series"], function(t) {
                            var i = {};
                            e[t] && (i[t] = e[t], n.update(i))
                        }), d(this.axes, function(e) {
                            var i = t.find(n.axes, function(t) {
                                    return t.options.internalKey === e.userOptions.internalKey
                                }),
                                r = e.getExtremes(),
                                o = r.userMin;
                            r = r.userMax;
                            i && (void 0 !== o && o !== i.min || void 0 !== r && r !== i.max) && i.setExtremes(o, r, !0, !1)
                        }), o = n.getChartHTML(), a(this, "getSVG", {
                            chartCopy: n
                        }), o = this.sanitizeSVG(o, p), p = null, n.destroy(), l(r), o
                    },
                    getSVGForExport: function(t, e) {
                        var i = this.options.exporting;
                        return this.getSVG(h({
                            chart: {
                                borderRadius: 0
                            }
                        }, i.chartOptions, e, {
                            exporting: {
                                sourceWidth: t && t.sourceWidth || i.sourceWidth,
                                sourceHeight: t && t.sourceHeight || i.sourceHeight
                            }
                        }))
                    },
                    exportChart: function(e, i) {
                        i = this.getSVGForExport(e, i), e = h(this.options.exporting, e), t.post(e.url, {
                            filename: e.filename || "chart",
                            type: e.type,
                            width: e.width || 0,
                            scale: e.scale,
                            svg: i
                        }, e.formAttributes)
                    },
                    print: function() {
                        var t, e, n = this,
                            r = n.container,
                            o = [],
                            s = r.parentNode,
                            l = i.body,
                            c = l.childNodes,
                            h = n.options.exporting.printMaxWidth;
                        n.isPrinting || (n.isPrinting = !0, n.pointer.reset(null, 0), a(n, "beforePrint"), (e = h && n.chartWidth > h) && (t = [n.options.chart.width, void 0, !1], n.setSize(h, void 0, !1)), d(c, function(t, e) {
                            1 === t.nodeType && (o[e] = t.style.display, t.style.display = "none")
                        }), l.appendChild(r), setTimeout(function() {
                            m.focus(), m.print(), setTimeout(function() {
                                s.appendChild(r), d(c, function(t, e) {
                                    1 === t.nodeType && (t.style.display = o[e])
                                }), n.isPrinting = !1, e && n.setSize.apply(n, t), a(n, "afterPrint")
                            }, 1e3)
                        }, 1))
                    },
                    contextMenu: function(e, n, o, a, l, h, u) {
                        var p, g = this,
                            m = g.options.navigation,
                            v = g.chartWidth,
                            y = g.chartHeight,
                            x = "cache-" + e,
                            b = g[x],
                            w = Math.max(l, h);
                        b || (g.exportContextMenu = g[x] = b = s("div", {
                            className: e
                        }, {
                            position: "absolute",
                            zIndex: 1e3,
                            padding: w + "px",
                            pointerEvents: "auto"
                        }, g.fixedDiv || g.container), p = s("div", {
                            className: "highcharts-menu"
                        }, null, b), c(p, f({
                            MozBoxShadow: "3px 3px 10px #888",
                            WebkitBoxShadow: "3px 3px 10px #888",
                            boxShadow: "3px 3px 10px #888"
                        }, m.menuStyle)), b.hideMenu = function() {
                            c(b, {
                                display: "none"
                            }), u && u.setState(0), g.openMenu = !1, t.clearTimeout(b.hideTimer)
                        }, g.exportEvents.push(r(b, "mouseleave", function() {
                            b.hideTimer = setTimeout(b.hideMenu, 500)
                        }), r(b, "mouseenter", function() {
                            t.clearTimeout(b.hideTimer)
                        }), r(i, "mouseup", function(t) {
                            g.pointer.inClass(t.target, e) || b.hideMenu()
                        }), r(b, "click", function() {
                            g.openMenu && b.hideMenu()
                        })), d(n, function(e) {
                            var i;
                            ("string" === typeof e && (e = g.options.exporting.menuItemDefinitions[e]), t.isObject(e, !0)) && (e.separator ? i = s("hr", null, null, p) : (i = s("div", {
                                className: "highcharts-menu-item",
                                onclick: function(t) {
                                    t && t.stopPropagation(), b.hideMenu(), e.onclick && e.onclick.apply(g, arguments)
                                },
                                innerHTML: e.text || g.options.lang[e.textKey]
                            }, null, p), i.onmouseover = function() {
                                c(this, m.menuItemHoverStyle)
                            }, i.onmouseout = function() {
                                c(this, m.menuItemStyle)
                            }, c(i, f({
                                cursor: "pointer"
                            }, m.menuItemStyle))), g.exportDivElements.push(i))
                        }), g.exportDivElements.push(p, b), g.exportMenuWidth = b.offsetWidth, g.exportMenuHeight = b.offsetHeight), n = {
                            display: "block"
                        }, o + g.exportMenuWidth > v ? n.right = v - o - l - w + "px" : n.left = o - w + "px", a + h + g.exportMenuHeight > y && "top" !== u.alignOptions.verticalAlign ? n.bottom = y - a - w + "px" : n.top = a + h - w + "px", c(b, n), g.openMenu = !0
                    },
                    addButton: function(t) {
                        var e, i, n = this,
                            r = n.renderer,
                            o = h(n.options.navigation.buttonOptions, t),
                            a = o.onclick,
                            s = o.menuItems,
                            l = o.symbolSize || 12;
                        if (n.btnCount || (n.btnCount = 0), n.exportDivElements || (n.exportDivElements = [], n.exportSVGElements = []), !1 !== o.enabled) {
                            var c, d = o.theme,
                                p = d.states,
                                g = p && p.hover;
                            p = p && p.select;
                            delete d.states, a ? c = function(t) {
                                t && t.stopPropagation(), a.call(n, t)
                            } : s && (c = function(t) {
                                t && t.stopPropagation(), n.contextMenu(i.menuClassName, s, i.translateX, i.translateY, i.width, i.height, i), i.setState(2)
                            }), o.text && o.symbol ? d.paddingLeft = u(d.paddingLeft, 25) : o.text || f(d, {
                                width: o.width,
                                height: o.height,
                                padding: 0
                            }), i = r.button(o.text, 0, 0, c, d, g, p).addClass(t.className).attr({
                                "stroke-linecap": "round",
                                title: u(n.options.lang[o._titleKey || o.titleKey], "")
                            }), i.menuClassName = t.menuClassName || "highcharts-menu-" + n.btnCount++, o.symbol && (e = r.symbol(o.symbol, o.symbolX - l / 2, o.symbolY - l / 2, l, l, {
                                width: l,
                                height: l
                            }).addClass("highcharts-button-symbol").attr({
                                zIndex: 1
                            }).add(i), e.attr({
                                stroke: o.symbolStroke,
                                fill: o.symbolFill,
                                "stroke-width": o.symbolStrokeWidth || 1
                            })), i.add(n.exportingGroup).align(f(o, {
                                width: i.width,
                                x: u(o.x, n.buttonOffset)
                            }), !0, "spacingBox"), n.buttonOffset += (i.width + o.buttonSpacing) * ("right" === o.align ? -1 : 1), n.exportSVGElements.push(i, e)
                        }
                    },
                    destroyExport: function(e) {
                        var i = e ? e.target : this;
                        e = i.exportSVGElements;
                        var n, r = i.exportDivElements,
                            a = i.exportEvents;
                        e && (d(e, function(t, e) {
                            t && (t.onclick = t.ontouchstart = null, n = "cache-" + t.menuClassName, i[n] && delete i[n], i.exportSVGElements[e] = t.destroy())
                        }), e.length = 0), i.exportingGroup && (i.exportingGroup.destroy(), delete i.exportingGroup), r && (d(r, function(e, n) {
                            t.clearTimeout(e.hideTimer), o(e, "mouseleave"), i.exportDivElements[n] = e.onmouseout = e.onmouseover = e.ontouchstart = e.onclick = null, l(e)
                        }), r.length = 0), a && (d(a, function(t) {
                            t()
                        }), a.length = 0)
                    }
                }), y.menu = function(t, e, i, n) {
                    return ["M", t, e + 2.5, "L", t + i, e + 2.5, "M", t, e + n / 2 + .5, "L", t + i, e + n / 2 + .5, "M", t, e + n - 1.5, "L", t + i, e + n - 1.5]
                }, n.prototype.renderExporting = function() {
                    var t = this,
                        e = t.options.exporting,
                        i = e.buttons,
                        n = t.isDirtyExporting || !t.exportSVGElements;
                    t.buttonOffset = 0, t.isDirtyExporting && t.destroyExport(), n && !1 !== e.enabled && (t.exportEvents = [], t.exportingGroup = t.exportingGroup || t.renderer.g("exporting-group").attr({
                        zIndex: 3
                    }).add(), p(i, function(e) {
                        t.addButton(e)
                    }), t.isDirtyExporting = !1), r(t, "destroy", t.destroyExport)
                }, r(n, "init", function() {
                    var t = this;
                    d(["exporting", "navigation"], function(e) {
                        t[e] = {
                            update: function(i, n) {
                                t.isDirtyExporting = !0, h(!0, t.options[e], i), u(n, !0) && t.redraw()
                            }
                        }
                    })
                }), n.prototype.callbacks.push(function(t) {
                    t.renderExporting(), r(t, "redraw", t.renderExporting)
                })
            })(t)
        })
    },
    "0390": function(t, e, i) {
        "use strict";
        var n = i("02f4")(!0);
        t.exports = function(t, e, i) {
            return e + (i ? n(t, e).length : 1)
        }
    },
    "03ca": function(t, e, i) {
        "use strict";
        var n = i("f2fe");

        function r(t) {
            var e, i;
            this.promise = new t(function(t, n) {
                if (void 0 !== e || void 0 !== i) throw TypeError("Bad Promise constructor");
                e = t, i = n
            }), this.resolve = n(e), this.reject = n(i)
        }
        t.exports.f = function(t) {
            return new r(t)
        }
    },
    "0423": function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "24Hæœ€é«˜å€¤",
                "24h_low": "24Hæœ€å®‰å€¤",
                view_price_chart: "ä¾¡æ ¼ãƒãƒ£ãƒ¼ãƒˆã‚’è¡¨ç¤º",
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "24Hæœ€é«˜å€¤",
                "24h_low": "24Hæœ€å®‰å€¤",
                view_price_chart: "ä¾¡æ ¼ãƒãƒ£ãƒ¼ãƒˆã‚’è¡¨ç¤º",
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "ä¾¡æ ¼ãƒãƒ£ãƒ¼ãƒˆã‚’è¡¨ç¤º",
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: "ä»®æƒ³é€šè²¨ãƒ‡ãƒ¼ã‚¿ä¸€è¦§",
                subtitle: "(æ™‚ä¾¡ç·é¡ãƒˆãƒƒãƒ—%{top})",
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_daily_price_widget: {
                title: "CoinGeckoä¾¡æ ¼ã‚¢ãƒƒãƒ—ãƒ‡ãƒ¼ãƒˆ",
                total_mcap: "åˆè¨ˆæ™‚ä¾¡ç·é¡",
                "24h_vol": "24h å–å¼•é«˜",
                dom: "ã‚·ã‚§ã‚¢"
            }
        }
    },
    "056c": function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} ç‚ºæ‚¨æä¾›"
            },
            coin_price_chart_widget: {
                "24h_high": "24 å°æ™‚é«˜åƒ¹",
                "24h_low": "24 å°æ™‚ä½Žåƒ¹",
                view_price_chart: "æŸ¥çœ‹åŒ¯çŽ‡èµ°å‹¢åœ–",
                powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} ç‚ºæ‚¨æä¾›"
            },
            coin_price_marquee_widget: {
                powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} ç‚ºæ‚¨æä¾›"
            },
            coin_list_widget: {
                powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} ç‚ºæ‚¨æä¾›"
            },
            beam_widget: {
                powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} ç‚ºæ‚¨æä¾›"
            },
            coin_ticker_widget: {
                "24h_high": "24 å°æ™‚é«˜åƒ¹",
                "24h_low": "24 å°æ™‚ä½Žåƒ¹",
                view_price_chart: "æŸ¥çœ‹åŒ¯çŽ‡èµ°å‹¢åœ–",
                powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} ç‚ºæ‚¨æä¾›"
            },
            coin_converter_widget: {
                view_price_chart: "æŸ¥çœ‹åŒ¯çŽ‡èµ°å‹¢åœ–",
                powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} ç‚ºæ‚¨æä¾›"
            },
            coin_heatmap_widget: {
                title: "åŠ å¯†è²¨å¹£æ¨¹ç‹€åœ–",
                subtitle: "(ç¸½å¸‚å€¼å‰ %{top} å)",
                powered_by: "æ­¤æœå‹™æ˜¯ç”± %{name_start}%{name}%{name_end} ç‚ºæ‚¨æä¾›"
            }
        }
    },
    "0825": function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "Offerto da %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "Massimo in 24 ore",
                "24h_low": "Minimo in 24 ore",
                view_price_chart: "Vedi il grafico dei prezzi",
                powered_by: "Offerto da %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "Offerto da %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "Offerto da %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "Offerto da %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "Massimo in 24 ore",
                "24h_low": "Minimo in 24 ore",
                view_price_chart: "Vedi il grafico dei prezzi",
                powered_by: "Offerto da %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "Vedi il grafico dei prezzi",
                powered_by: "Offerto da %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: "Mappa ad albero delle criptovalute",
                subtitle: "(prime %{top} per capitalizzazione di mercato)",
                powered_by: "Offerto da %{name_start}%{name}%{name_end}"
            }
        }
    },
    "097d": function(t, e, i) {
        "use strict";
        var n = i("5ca1"),
            r = i("8378"),
            o = i("7726"),
            a = i("ebd6"),
            s = i("bcaa");
        n(n.P + n.R, "Promise", {
            finally: function(t) {
                var e = a(this, r.Promise || o.Promise),
                    i = "function" == typeof t;
                return this.then(i ? function(i) {
                    return s(e, t()).then(function() {
                        return i
                    })
                } : t, i ? function(i) {
                    return s(e, t()).then(function() {
                        throw i
                    })
                } : t)
            }
        })
    },
    "0a0a": function(t, e, i) {
        var n = i("da3c"),
            r = i("a7d3"),
            o = i("b457"),
            a = i("fda1"),
            s = i("3adc").f;
        t.exports = function(t) {
            var e = r.Symbol || (r.Symbol = o ? {} : n.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, {
                value: a.f(t)
            })
        }
    },
    "0bfb": function(t, e, i) {
        "use strict";
        var n = i("cb7c");
        t.exports = function() {
            var t = n(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }
    },
    "0d58": function(t, e, i) {
        var n = i("ce10"),
            r = i("e11e");
        t.exports = Object.keys || function(t) {
            return n(t, r)
        }
    },
    "0f01": function(t, e, i) {
        "use strict";
        var n = i("e9ac"),
            r = n("%Object%"),
            o = n("%TypeError%"),
            a = n("%String%"),
            s = i("c46d"),
            l = i("2057"),
            c = i("c612"),
            h = i("5975"),
            u = i("bb53"),
            d = i("21d0"),
            p = i("2f17"),
            f = i("a0d3"),
            g = {
                ToPrimitive: p,
                ToBoolean: function(t) {
                    return !!t
                },
                ToNumber: function(t) {
                    return +t
                },
                ToInteger: function(t) {
                    var e = this.ToNumber(t);
                    return l(e) ? 0 : 0 !== e && c(e) ? h(e) * Math.floor(Math.abs(e)) : e
                },
                ToInt32: function(t) {
                    return this.ToNumber(t) >> 0
                },
                ToUint32: function(t) {
                    return this.ToNumber(t) >>> 0
                },
                ToUint16: function(t) {
                    var e = this.ToNumber(t);
                    if (l(e) || 0 === e || !c(e)) return 0;
                    var i = h(e) * Math.floor(Math.abs(e));
                    return u(i, 65536)
                },
                ToString: function(t) {
                    return a(t)
                },
                ToObject: function(t) {
                    return this.CheckObjectCoercible(t), r(t)
                },
                CheckObjectCoercible: function(t, e) {
                    if (null == t) throw new o(e || "Cannot call method on " + t);
                    return t
                },
                IsCallable: d,
                SameValue: function(t, e) {
                    return t === e ? 0 !== t || 1 / t === 1 / e : l(t) && l(e)
                },
                Type: function(t) {
                    return null === t ? "Null" : "undefined" === typeof t ? "Undefined" : "function" === typeof t || "object" === typeof t ? "Object" : "number" === typeof t ? "Number" : "boolean" === typeof t ? "Boolean" : "string" === typeof t ? "String" : void 0
                },
                IsPropertyDescriptor: function(t) {
                    if ("Object" !== this.Type(t)) return !1;
                    var e = {
                        "[[Configurable]]": !0,
                        "[[Enumerable]]": !0,
                        "[[Get]]": !0,
                        "[[Set]]": !0,
                        "[[Value]]": !0,
                        "[[Writable]]": !0
                    };
                    for (var i in t)
                        if (f(t, i) && !e[i]) return !1;
                    var n = f(t, "[[Value]]"),
                        r = f(t, "[[Get]]") || f(t, "[[Set]]");
                    if (n && r) throw new o("Property Descriptors may not be both accessor and data descriptors");
                    return !0
                },
                IsAccessorDescriptor: function(t) {
                    return "undefined" !== typeof t && (s(this, "Property Descriptor", "Desc", t), !(!f(t, "[[Get]]") && !f(t, "[[Set]]")))
                },
                IsDataDescriptor: function(t) {
                    return "undefined" !== typeof t && (s(this, "Property Descriptor", "Desc", t), !(!f(t, "[[Value]]") && !f(t, "[[Writable]]")))
                },
                IsGenericDescriptor: function(t) {
                    return "undefined" !== typeof t && (s(this, "Property Descriptor", "Desc", t), !this.IsAccessorDescriptor(t) && !this.IsDataDescriptor(t))
                },
                FromPropertyDescriptor: function(t) {
                    if ("undefined" === typeof t) return t;
                    if (s(this, "Property Descriptor", "Desc", t), this.IsDataDescriptor(t)) return {
                        value: t["[[Value]]"],
                        writable: !!t["[[Writable]]"],
                        enumerable: !!t["[[Enumerable]]"],
                        configurable: !!t["[[Configurable]]"]
                    };
                    if (this.IsAccessorDescriptor(t)) return {
                        get: t["[[Get]]"],
                        set: t["[[Set]]"],
                        enumerable: !!t["[[Enumerable]]"],
                        configurable: !!t["[[Configurable]]"]
                    };
                    throw new o("FromPropertyDescriptor must be called with a fully populated Property Descriptor")
                },
                ToPropertyDescriptor: function(t) {
                    if ("Object" !== this.Type(t)) throw new o("ToPropertyDescriptor requires an object");
                    var e = {};
                    if (f(t, "enumerable") && (e["[[Enumerable]]"] = this.ToBoolean(t.enumerable)), f(t, "configurable") && (e["[[Configurable]]"] = this.ToBoolean(t.configurable)), f(t, "value") && (e["[[Value]]"] = t.value), f(t, "writable") && (e["[[Writable]]"] = this.ToBoolean(t.writable)), f(t, "get")) {
                        var i = t.get;
                        if ("undefined" !== typeof i && !this.IsCallable(i)) throw new TypeError("getter must be a function");
                        e["[[Get]]"] = i
                    }
                    if (f(t, "set")) {
                        var n = t.set;
                        if ("undefined" !== typeof n && !this.IsCallable(n)) throw new o("setter must be a function");
                        e["[[Set]]"] = n
                    }
                    if ((f(e, "[[Get]]") || f(e, "[[Set]]")) && (f(e, "[[Value]]") || f(e, "[[Writable]]"))) throw new o("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                    return e
                }
            };
        t.exports = g
    },
    "0f7c": function(t, e, i) {
        "use strict";
        var n = i("688e");
        t.exports = Function.prototype.bind || n
    },
    "0f89": function(t, e, i) {
        var n = i("6f8a");
        t.exports = function(t) {
            if (!n(t)) throw TypeError(t + " is not an object!");
            return t
        }
    },
    "103a": function(t, e, i) {
        var n = i("da3c").document;
        t.exports = n && n.documentElement
    },
    "11e9": function(t, e, i) {
        var n = i("52a7"),
            r = i("4630"),
            o = i("6821"),
            a = i("6a99"),
            s = i("69a8"),
            l = i("c69a"),
            c = Object.getOwnPropertyDescriptor;
        e.f = i("9e1e") ? c : function(t, e) {
            if (t = o(t), e = a(e, !0), l) try {
                return c(t, e)
            } catch (i) {}
            if (s(t, e)) return r(!n.f.call(t, e), t[e])
        }
    },
    "12fd": function(t, e, i) {
        var n = i("6f8a"),
            r = i("da3c").document,
            o = n(r) && n(r.createElement);
        t.exports = function(t) {
            return o ? r.createElement(t) : {}
        }
    },
    "12fd9": function(t, e) {},
    1495: function(t, e, i) {
        var n = i("86cc"),
            r = i("cb7c"),
            o = i("0d58");
        t.exports = i("9e1e") ? Object.defineProperties : function(t, e) {
            r(t);
            var i, a = o(e),
                s = a.length,
                l = 0;
            while (s > l) n.f(t, i = a[l++], e[i]);
            return t
        }
    },
    "196c": function(t, e) {
        t.exports = function(t, e, i) {
            var n = void 0 === i;
            switch (e.length) {
                case 0:
                    return n ? t() : t.call(i);
                case 1:
                    return n ? t(e[0]) : t.call(i, e[0]);
                case 2:
                    return n ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
                case 3:
                    return n ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
                case 4:
                    return n ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3])
            }
            return t.apply(i, e)
        }
    },
    1991: function(t, e, i) {
        var n, r, o, a = i("9b43"),
            s = i("31f4"),
            l = i("fab2"),
            c = i("230e"),
            h = i("7726"),
            u = h.process,
            d = h.setImmediate,
            p = h.clearImmediate,
            f = h.MessageChannel,
            g = h.Dispatch,
            m = 0,
            v = {},
            y = "onreadystatechange",
            x = function() {
                var t = +this;
                if (v.hasOwnProperty(t)) {
                    var e = v[t];
                    delete v[t], e()
                }
            },
            b = function(t) {
                x.call(t.data)
            };
        d && p || (d = function(t) {
            var e = [],
                i = 1;
            while (arguments.length > i) e.push(arguments[i++]);
            return v[++m] = function() {
                s("function" == typeof t ? t : Function(t), e)
            }, n(m), m
        }, p = function(t) {
            delete v[t]
        }, "process" == i("2d95")(u) ? n = function(t) {
            u.nextTick(a(x, t, 1))
        } : g && g.now ? n = function(t) {
            g.now(a(x, t, 1))
        } : f ? (r = new f, o = r.port2, r.port1.onmessage = b, n = a(o.postMessage, o, 1)) : h.addEventListener && "function" == typeof postMessage && !h.importScripts ? (n = function(t) {
            h.postMessage(t + "", "*")
        }, h.addEventListener("message", b, !1)) : n = y in c("script") ? function(t) {
            l.appendChild(c("script"))[y] = function() {
                l.removeChild(this), x.call(t)
            }
        } : function(t) {
            setTimeout(a(x, t, 1), 0)
        }), t.exports = {
            set: d,
            clear: p
        }
    },
    "1b55": function(t, e, i) {
        var n = i("7772")("wks"),
            r = i("7b00"),
            o = i("da3c").Symbol,
            a = "function" == typeof o,
            s = t.exports = function(t) {
                return n[t] || (n[t] = a && o[t] || (a ? o : r)("Symbol." + t))
            };
        s.store = n
    },
    "1b7f": function(t, e, i) {
        "use strict";
        var n = i("562e"),
            r = "â€‹";
        t.exports = function() {
            return String.prototype.trim && r.trim() === r ? String.prototype.trim : n
        }
    },
    "1b8f": function(t, e, i) {
        var n = i("a812"),
            r = Math.max,
            o = Math.min;
        t.exports = function(t, e) {
            return t = n(t), t < 0 ? r(t + e, 0) : o(t, e)
        }
    },
    "1be4": function(t, e, i) {
        "use strict";
        var n = i("da3c"),
            r = i("a7d3"),
            o = i("3adc"),
            a = i("7d95"),
            s = i("1b55")("species");
        t.exports = function(t) {
            var e = "function" == typeof r[t] ? r[t] : n[t];
            a && e && !e[s] && o.f(e, s, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    "1fa8": function(t, e, i) {
        var n = i("cb7c");
        t.exports = function(t, e, i, r) {
            try {
                return r ? e(n(i)[0], i[1]) : e(i)
            } catch (a) {
                var o = t["return"];
                throw void 0 !== o && n(o.call(t)), a
            }
        }
    },
    2057: function(t, e) {
        t.exports = Number.isNaN || function(t) {
            return t !== t
        }
    },
    "210c": function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "24J Tinggi",
                "24h_low": "24J Rendah",
                view_price_chart: "Lihat Grafik Harga",
                powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "24J Tinggi",
                "24h_low": "24J Rendah",
                view_price_chart: "Lihat Grafik Harga",
                powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "Lihat Grafik Harga",
                powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: "Peta Pohon Cryptocurrency",
                subtitle: "(%{top} Besar Berdasarkan Kapitalisasi Pasar)",
                powered_by: "Didukung oleh %{name_start}%{name}%{name_end}"
            }
        }
    },
    "214f": function(t, e, i) {
        "use strict";
        i("b0c5");
        var n = i("2aba"),
            r = i("32e9"),
            o = i("79e5"),
            a = i("be13"),
            s = i("2b4c"),
            l = i("520a"),
            c = s("species"),
            h = !o(function() {
                var t = /./;
                return t.exec = function() {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    }, t
                }, "7" !== "".replace(t, "$<a>")
            }),
            u = function() {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function() {
                    return e.apply(this, arguments)
                };
                var i = "ab".split(t);
                return 2 === i.length && "a" === i[0] && "b" === i[1]
            }();
        t.exports = function(t, e, i) {
            var d = s(t),
                p = !o(function() {
                    var e = {};
                    return e[d] = function() {
                        return 7
                    }, 7 != "" [t](e)
                }),
                f = p ? !o(function() {
                    var e = !1,
                        i = /a/;
                    return i.exec = function() {
                        return e = !0, null
                    }, "split" === t && (i.constructor = {}, i.constructor[c] = function() {
                        return i
                    }), i[d](""), !e
                }) : void 0;
            if (!p || !f || "replace" === t && !h || "split" === t && !u) {
                var g = /./ [d],
                    m = i(a, d, "" [t], function(t, e, i, n, r) {
                        return e.exec === l ? p && !r ? {
                            done: !0,
                            value: g.call(e, i, n)
                        } : {
                            done: !0,
                            value: t.call(i, e, n)
                        } : {
                            done: !1
                        }
                    }),
                    v = m[0],
                    y = m[1];
                n(String.prototype, t, v), r(RegExp.prototype, d, 2 == e ? function(t, e) {
                    return y.call(t, this, e)
                } : function(t) {
                    return y.call(t, this)
                })
            }
        }
    },
    "21d0": function(t, e, i) {
        "use strict";
        var n = Function.prototype.toString,
            r = /^\s*class\b/,
            o = function(t) {
                try {
                    var e = n.call(t);
                    return r.test(e)
                } catch (i) {
                    return !1
                }
            },
            a = function(t) {
                try {
                    return !o(t) && (n.call(t), !0)
                } catch (e) {
                    return !1
                }
            },
            s = Object.prototype.toString,
            l = "[object Function]",
            c = "[object GeneratorFunction]",
            h = "function" === typeof Symbol && "symbol" === typeof Symbol.toStringTag;
        t.exports = function(t) {
            if (!t) return !1;
            if ("function" !== typeof t && "object" !== typeof t) return !1;
            if ("function" === typeof t && !t.prototype) return !0;
            if (h) return a(t);
            if (o(t)) return !1;
            var e = s.call(t);
            return e === l || e === c
        }
    },
    "230e": function(t, e, i) {
        var n = i("d3f4"),
            r = i("7726").document,
            o = n(r) && n(r.createElement);
        t.exports = function(t) {
            return o ? r.createElement(t) : {}
        }
    },
    2312: function(t, e, i) {
        t.exports = i("8ce0")
    },
    2350: function(t, e) {
        function i(t, e) {
            var i = t[1] || "",
                r = t[3];
            if (!r) return i;
            if (e && "function" === typeof btoa) {
                var o = n(r),
                    a = r.sources.map(function(t) {
                        return "/*# sourceURL=" + r.sourceRoot + t + " */"
                    });
                return [i].concat(a).concat([o]).join("\n")
            }
            return [i].join("\n")
        }

        function n(t) {
            var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                i = "sourceMappingURL=data:application/json;charset=utf-8;base64," + e;
            return "/*# " + i + " */"
        }
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map(function(e) {
                    var n = i(e, t);
                    return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                }).join("")
            }, e.i = function(t, i) {
                "string" === typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var n = {}, r = 0; r < this.length; r++) {
                    var o = this[r][0];
                    "number" === typeof o && (n[o] = !0)
                }
                for (r = 0; r < t.length; r++) {
                    var a = t[r];
                    "number" === typeof a[0] && n[a[0]] || (i && !a[2] ? a[2] = i : i && (a[2] = "(" + a[2] + ") and (" + i + ")"), e.push(a))
                }
            }, e
        }
    },
    "23c6": function(t, e, i) {
        var n = i("2d95"),
            r = i("2b4c")("toStringTag"),
            o = "Arguments" == n(function() {
                return arguments
            }()),
            a = function(t, e) {
                try {
                    return t[e]
                } catch (i) {}
            };
        t.exports = function(t) {
            var e, i, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = a(e = Object(t), r)) ? i : o ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s
        }
    },
    2418: function(t, e, i) {
        var n = i("6a9b"),
            r = i("a5ab"),
            o = i("1b8f");
        t.exports = function(t) {
            return function(e, i, a) {
                var s, l = n(e),
                    c = r(l.length),
                    h = o(a, c);
                if (t && i != i) {
                    while (c > h)
                        if (s = l[h++], s != s) return !0
                } else
                    for (; c > h; h++)
                        if ((t || h in l) && l[h] === i) return t || h || 0;
                return !t && -1
            }
        }
    },
    "245b": function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    },
    2695: function(t, e, i) {
        var n = i("43c8"),
            r = i("6a9b"),
            o = i("2418")(!1),
            a = i("5d8f")("IE_PROTO");
        t.exports = function(t, e) {
            var i, s = r(t),
                l = 0,
                c = [];
            for (i in s) i != a && n(s, i) && c.push(i);
            while (e.length > l) n(s, i = e[l++]) && (~o(c, i) || c.push(i));
            return c
        }
    },
    "27ee": function(t, e, i) {
        var n = i("23c6"),
            r = i("2b4c")("iterator"),
            o = i("84f2");
        t.exports = i("8378").getIteratorMethod = function(t) {
            if (void 0 != t) return t[r] || t["@@iterator"] || o[n(t)]
        }
    },
    2877: function(t, e, i) {
        "use strict";

        function n(t, e, i, n, r, o, a, s) {
            var l, c = "function" === typeof t ? t.options : t;
            if (e && (c.render = e, c.staticRenderFns = i, c._compiled = !0), n && (c.functional = !0), o && (c._scopeId = "data-v-" + o), a ? (l = function(t) {
                    t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
                }, c._ssrRegister = l) : r && (l = s ? function() {
                    r.call(this, this.$root.$options.shadowRoot)
                } : r), l)
                if (c.functional) {
                    c._injectStyles = l;
                    var h = c.render;
                    c.render = function(t, e) {
                        return l.call(e), h(t, e)
                    }
                } else {
                    var u = c.beforeCreate;
                    c.beforeCreate = u ? [].concat(u, l) : [l]
                } return {
                exports: t,
                options: c
            }
        }
        i.d(e, "a", function() {
            return n
        })
    },
    "288a": function(t, e, i) {
        "use strict";
        var n = i("d024"),
            r = i("fa4e"),
            o = i("a0d3"),
            a = i("ca9f"),
            s = function(t) {
                r(!1, t)
            },
            l = String.prototype.replace,
            c = String.prototype.split,
            h = "||||",
            u = function(t) {
                var e = t % 10;
                return 11 !== t && 1 === e ? 0 : 2 <= e && e <= 4 && !(t >= 12 && t <= 14) ? 1 : 2
            },
            d = {
                arabic: function(t) {
                    if (t < 3) return t;
                    var e = t % 100;
                    return e >= 3 && e <= 10 ? 3 : e >= 11 ? 4 : 5
                },
                bosnian_serbian: u,
                chinese: function() {
                    return 0
                },
                croatian: u,
                french: function(t) {
                    return t > 1 ? 1 : 0
                },
                german: function(t) {
                    return 1 !== t ? 1 : 0
                },
                russian: u,
                lithuanian: function(t) {
                    return t % 10 === 1 && t % 100 !== 11 ? 0 : t % 10 >= 2 && t % 10 <= 9 && (t % 100 < 11 || t % 100 > 19) ? 1 : 2
                },
                czech: function(t) {
                    return 1 === t ? 0 : t >= 2 && t <= 4 ? 1 : 2
                },
                polish: function(t) {
                    if (1 === t) return 0;
                    var e = t % 10;
                    return 2 <= e && e <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
                },
                icelandic: function(t) {
                    return t % 10 !== 1 || t % 100 === 11 ? 1 : 0
                },
                slovenian: function(t) {
                    var e = t % 100;
                    return 1 === e ? 0 : 2 === e ? 1 : 3 === e || 4 === e ? 2 : 3
                }
            },
            p = {
                arabic: ["ar"],
                bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
                chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
                croatian: ["hr", "hr-HR"],
                german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"],
                french: ["fr", "tl", "pt-br"],
                russian: ["ru", "ru-RU"],
                lithuanian: ["lt"],
                czech: ["cs", "cs-CZ", "sk"],
                polish: ["pl"],
                icelandic: ["is"],
                slovenian: ["sl-SL"]
            };

        function f(t) {
            var e = {};
            return n(t, function(t, i) {
                n(t, function(t) {
                    e[t] = i
                })
            }), e
        }

        function g(t) {
            var e = f(p);
            return e[t] || e[c.call(t, /-/, 1)[0]] || e.en
        }

        function m(t, e) {
            return d[g(t)](e)
        }

        function v(t) {
            return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }

        function y(t) {
            var e = t && t.prefix || "%{",
                i = t && t.suffix || "}";
            if (e === h || i === h) throw new RangeError('"' + h + '" token is reserved for pluralization');
            return new RegExp(v(e) + "(.*?)" + v(i), "g")
        }
        var x = /\$/g,
            b = "$$",
            w = /%\{(.*?)\}/g;

        function _(t, e, i, n) {
            if ("string" !== typeof t) throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
            if (null == e) return t;
            var r = t,
                s = n || w,
                u = "number" === typeof e ? {
                    smart_count: e
                } : e;
            if (null != u.smart_count && r) {
                var d = c.call(r, h);
                r = a(d[m(i || "en", u.smart_count)] || d[0])
            }
            return r = l.call(r, s, function(t, e) {
                return o(u, e) && null != u[e] ? l.call(u[e], x, b) : t
            }), r
        }

        function k(t) {
            var e = t || {};
            this.phrases = {}, this.extend(e.phrases || {}), this.currentLocale = e.locale || "en";
            var i = e.allowMissing ? _ : null;
            this.onMissingKey = "function" === typeof e.onMissingKey ? e.onMissingKey : i, this.warn = e.warn || s, this.tokenRegex = y(e.interpolation)
        }
        k.prototype.locale = function(t) {
            return t && (this.currentLocale = t), this.currentLocale
        }, k.prototype.extend = function(t, e) {
            n(t, function(t, i) {
                var n = e ? e + "." + i : i;
                "object" === typeof t ? this.extend(t, n) : this.phrases[n] = t
            }, this)
        }, k.prototype.unset = function(t, e) {
            "string" === typeof t ? delete this.phrases[t] : n(t, function(t, i) {
                var n = e ? e + "." + i : i;
                "object" === typeof t ? this.unset(t, n) : delete this.phrases[n]
            }, this)
        }, k.prototype.clear = function() {
            this.phrases = {}
        }, k.prototype.replace = function(t) {
            this.clear(), this.extend(t)
        }, k.prototype.t = function(t, e) {
            var i, n, r = null == e ? {} : e;
            if ("string" === typeof this.phrases[t]) i = this.phrases[t];
            else if ("string" === typeof r._) i = r._;
            else if (this.onMissingKey) {
                var o = this.onMissingKey;
                n = o(t, r, this.currentLocale, this.tokenRegex)
            } else this.warn('Missing translation for key: "' + t + '"'), n = t;
            return "string" === typeof i && (n = _(i, r, this.currentLocale, this.tokenRegex)), n
        }, k.prototype.has = function(t) {
            return o(this.phrases, t)
        }, k.transformPhrase = function(t, e, i) {
            return _(t, e, i)
        }, t.exports = k
    },
    "28a5": function(t, e, i) {
        "use strict";
        var n = i("aae3"),
            r = i("cb7c"),
            o = i("ebd6"),
            a = i("0390"),
            s = i("9def"),
            l = i("5f1b"),
            c = i("520a"),
            h = i("79e5"),
            u = Math.min,
            d = [].push,
            p = "split",
            f = "length",
            g = "lastIndex",
            m = 4294967295,
            v = !h(function() {
                RegExp(m, "y")
            });
        i("214f")("split", 2, function(t, e, i, h) {
            var y;
            return y = "c" == "abbc" [p](/(b)*/)[1] || 4 != "test" [p](/(?:)/, -1)[f] || 2 != "ab" [p](/(?:ab)*/)[f] || 4 != "." [p](/(.?)(.?)/)[f] || "." [p](/()()/)[f] > 1 || "" [p](/.?/)[f] ? function(t, e) {
                var r = String(this);
                if (void 0 === t && 0 === e) return [];
                if (!n(t)) return i.call(r, t, e);
                var o, a, s, l = [],
                    h = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                    u = 0,
                    p = void 0 === e ? m : e >>> 0,
                    v = new RegExp(t.source, h + "g");
                while (o = c.call(v, r)) {
                    if (a = v[g], a > u && (l.push(r.slice(u, o.index)), o[f] > 1 && o.index < r[f] && d.apply(l, o.slice(1)), s = o[0][f], u = a, l[f] >= p)) break;
                    v[g] === o.index && v[g]++
                }
                return u === r[f] ? !s && v.test("") || l.push("") : l.push(r.slice(u)), l[f] > p ? l.slice(0, p) : l
            } : "0" [p](void 0, 0)[f] ? function(t, e) {
                return void 0 === t && 0 === e ? [] : i.call(this, t, e)
            } : i, [function(i, n) {
                var r = t(this),
                    o = void 0 == i ? void 0 : i[e];
                return void 0 !== o ? o.call(i, r, n) : y.call(String(r), i, n)
            }, function(t, e) {
                var n = h(y, t, this, e, y !== i);
                if (n.done) return n.value;
                var c = r(t),
                    d = String(this),
                    p = o(c, RegExp),
                    f = c.unicode,
                    g = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (v ? "y" : "g"),
                    x = new p(v ? c : "^(?:" + c.source + ")", g),
                    b = void 0 === e ? m : e >>> 0;
                if (0 === b) return [];
                if (0 === d.length) return null === l(x, d) ? [d] : [];
                var w = 0,
                    _ = 0,
                    k = [];
                while (_ < d.length) {
                    x.lastIndex = v ? _ : 0;
                    var S, M = l(x, v ? d : d.slice(_));
                    if (null === M || (S = u(s(x.lastIndex + (v ? 0 : _)), d.length)) === w) _ = a(d, _, f);
                    else {
                        if (k.push(d.slice(w, _)), k.length === b) return k;
                        for (var A = 1; A <= M.length - 1; A++)
                            if (k.push(M[A]), k.length === b) return k;
                        _ = w = S
                    }
                }
                return k.push(d.slice(w)), k
            }]
        })
    },
    "2a4e": function(t, e, i) {
        var n = i("a812"),
            r = i("e5fa");
        t.exports = function(t) {
            return function(e, i) {
                var o, a, s = String(r(e)),
                    l = n(i),
                    c = s.length;
                return l < 0 || l >= c ? t ? "" : void 0 : (o = s.charCodeAt(l), o < 55296 || o > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : o : t ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536)
            }
        }
    },
    "2aba": function(t, e, i) {
        var n = i("7726"),
            r = i("32e9"),
            o = i("69a8"),
            a = i("ca5a")("src"),
            s = i("fa5b"),
            l = "toString",
            c = ("" + s).split(l);
        i("8378").inspectSource = function(t) {
            return s.call(t)
        }, (t.exports = function(t, e, i, s) {
            var l = "function" == typeof i;
            l && (o(i, "name") || r(i, "name", e)), t[e] !== i && (l && (o(i, a) || r(i, a, t[e] ? "" + t[e] : c.join(String(e)))), t === n ? t[e] = i : s ? t[e] ? t[e] = i : r(t, e, i) : (delete t[e], r(t, e, i)))
        })(Function.prototype, l, function() {
            return "function" == typeof this && this[a] || s.call(this)
        })
    },
    "2aeb": function(t, e, i) {
        var n = i("cb7c"),
            r = i("1495"),
            o = i("e11e"),
            a = i("613b")("IE_PROTO"),
            s = function() {},
            l = "prototype",
            c = function() {
                var t, e = i("230e")("iframe"),
                    n = o.length,
                    r = "<",
                    a = ">";
                e.style.display = "none", i("fab2").appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(r + "script" + a + "document.F=Object" + r + "/script" + a), t.close(), c = t.F;
                while (n--) delete c[l][o[n]];
                return c()
            };
        t.exports = Object.create || function(t, e) {
            var i;
            return null !== t ? (s[l] = n(t), i = new s, s[l] = null, i[a] = t) : i = c(), void 0 === e ? i : r(i, e)
        }
    },
    "2b0e": function(t, e, i) {
        "use strict";
        (function(t) {
            /*!
             * Vue.js v2.5.21
             * (c) 2014-2018 Evan You
             * Released under the MIT License.
             */
            var i = Object.freeze({});

            function n(t) {
                return void 0 === t || null === t
            }

            function r(t) {
                return void 0 !== t && null !== t
            }

            function o(t) {
                return !0 === t
            }

            function a(t) {
                return !1 === t
            }

            function s(t) {
                return "string" === typeof t || "number" === typeof t || "symbol" === typeof t || "boolean" === typeof t
            }

            function l(t) {
                return null !== t && "object" === typeof t
            }
            var c = Object.prototype.toString;

            function h(t) {
                return "[object Object]" === c.call(t)
            }

            function u(t) {
                return "[object RegExp]" === c.call(t)
            }

            function d(t) {
                var e = parseFloat(String(t));
                return e >= 0 && Math.floor(e) === e && isFinite(t)
            }

            function p(t) {
                return null == t ? "" : "object" === typeof t ? JSON.stringify(t, null, 2) : String(t)
            }

            function f(t) {
                var e = parseFloat(t);
                return isNaN(e) ? t : e
            }

            function g(t, e) {
                for (var i = Object.create(null), n = t.split(","), r = 0; r < n.length; r++) i[n[r]] = !0;
                return e ? function(t) {
                    return i[t.toLowerCase()]
                } : function(t) {
                    return i[t]
                }
            }
            g("slot,component", !0);
            var m = g("key,ref,slot,slot-scope,is");

            function v(t, e) {
                if (t.length) {
                    var i = t.indexOf(e);
                    if (i > -1) return t.splice(i, 1)
                }
            }
            var y = Object.prototype.hasOwnProperty;

            function x(t, e) {
                return y.call(t, e)
            }

            function b(t) {
                var e = Object.create(null);
                return function(i) {
                    var n = e[i];
                    return n || (e[i] = t(i))
                }
            }
            var w = /-(\w)/g,
                _ = b(function(t) {
                    return t.replace(w, function(t, e) {
                        return e ? e.toUpperCase() : ""
                    })
                }),
                k = b(function(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }),
                S = /\B([A-Z])/g,
                M = b(function(t) {
                    return t.replace(S, "-$1").toLowerCase()
                });

            function A(t, e) {
                function i(i) {
                    var n = arguments.length;
                    return n ? n > 1 ? t.apply(e, arguments) : t.call(e, i) : t.call(e)
                }
                return i._length = t.length, i
            }

            function C(t, e) {
                return t.bind(e)
            }
            var T = Function.prototype.bind ? C : A;

            function P(t, e) {
                e = e || 0;
                var i = t.length - e,
                    n = new Array(i);
                while (i--) n[i] = t[i + e];
                return n
            }

            function O(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            }

            function L(t) {
                for (var e = {}, i = 0; i < t.length; i++) t[i] && O(e, t[i]);
                return e
            }

            function E(t, e, i) {}
            var D = function(t, e, i) {
                    return !1
                },
                I = function(t) {
                    return t
                };

            function z(t, e) {
                if (t === e) return !0;
                var i = l(t),
                    n = l(e);
                if (!i || !n) return !i && !n && String(t) === String(e);
                try {
                    var r = Array.isArray(t),
                        o = Array.isArray(e);
                    if (r && o) return t.length === e.length && t.every(function(t, i) {
                        return z(t, e[i])
                    });
                    if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
                    if (r || o) return !1;
                    var a = Object.keys(t),
                        s = Object.keys(e);
                    return a.length === s.length && a.every(function(i) {
                        return z(t[i], e[i])
                    })
                } catch (c) {
                    return !1
                }
            }

            function B(t, e) {
                for (var i = 0; i < t.length; i++)
                    if (z(t[i], e)) return i;
                return -1
            }

            function N(t) {
                var e = !1;
                return function() {
                    e || (e = !0, t.apply(this, arguments))
                }
            }
            var R = "data-server-rendered",
                j = ["component", "directive", "filter"],
                F = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
                H = {
                    optionMergeStrategies: Object.create(null),
                    silent: !1,
                    productionTip: !1,
                    devtools: !1,
                    performance: !1,
                    errorHandler: null,
                    warnHandler: null,
                    ignoredElements: [],
                    keyCodes: Object.create(null),
                    isReservedTag: D,
                    isReservedAttr: D,
                    isUnknownElement: D,
                    getTagNamespace: E,
                    parsePlatformTagName: I,
                    mustUseProp: D,
                    async: !0,
                    _lifecycleHooks: F
                };

            function G(t) {
                var e = (t + "").charCodeAt(0);
                return 36 === e || 95 === e
            }

            function W(t, e, i, n) {
                Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !!n,
                    writable: !0,
                    configurable: !0
                })
            }
            var $ = /[^\w.$]/;

            function X(t) {
                if (!$.test(t)) {
                    var e = t.split(".");
                    return function(t) {
                        for (var i = 0; i < e.length; i++) {
                            if (!t) return;
                            t = t[e[i]]
                        }
                        return t
                    }
                }
            }
            var Y, V = "__proto__" in {},
                U = "undefined" !== typeof window,
                K = "undefined" !== typeof WXEnvironment && !!WXEnvironment.platform,
                q = K && WXEnvironment.platform.toLowerCase(),
                Z = U && window.navigator.userAgent.toLowerCase(),
                J = Z && /msie|trident/.test(Z),
                Q = Z && Z.indexOf("msie 9.0") > 0,
                tt = Z && Z.indexOf("edge/") > 0,
                et = (Z && Z.indexOf("android"), Z && /iphone|ipad|ipod|ios/.test(Z) || "ios" === q),
                it = (Z && /chrome\/\d+/.test(Z), {}.watch),
                nt = !1;
            if (U) try {
                var rt = {};
                Object.defineProperty(rt, "passive", {
                    get: function() {
                        nt = !0
                    }
                }), window.addEventListener("test-passive", null, rt)
            } catch (sa) {}
            var ot = function() {
                    return void 0 === Y && (Y = !U && !K && "undefined" !== typeof t && (t["process"] && "server" === t["process"].env.VUE_ENV)), Y
                },
                at = U && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

            function st(t) {
                return "function" === typeof t && /native code/.test(t.toString())
            }
            var lt, ct = "undefined" !== typeof Symbol && st(Symbol) && "undefined" !== typeof Reflect && st(Reflect.ownKeys);
            lt = "undefined" !== typeof Set && st(Set) ? Set : function() {
                function t() {
                    this.set = Object.create(null)
                }
                return t.prototype.has = function(t) {
                    return !0 === this.set[t]
                }, t.prototype.add = function(t) {
                    this.set[t] = !0
                }, t.prototype.clear = function() {
                    this.set = Object.create(null)
                }, t
            }();
            var ht = E,
                ut = 0,
                dt = function() {
                    this.id = ut++, this.subs = []
                };
            dt.prototype.addSub = function(t) {
                this.subs.push(t)
            }, dt.prototype.removeSub = function(t) {
                v(this.subs, t)
            }, dt.prototype.depend = function() {
                dt.target && dt.target.addDep(this)
            }, dt.prototype.notify = function() {
                var t = this.subs.slice();
                for (var e = 0, i = t.length; e < i; e++) t[e].update()
            }, dt.target = null;
            var pt = [];

            function ft(t) {
                pt.push(t), dt.target = t
            }

            function gt() {
                pt.pop(), dt.target = pt[pt.length - 1]
            }
            var mt = function(t, e, i, n, r, o, a, s) {
                    this.tag = t, this.data = e, this.children = i, this.text = n, this.elm = r, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
                },
                vt = {
                    child: {
                        configurable: !0
                    }
                };
            vt.child.get = function() {
                return this.componentInstance
            }, Object.defineProperties(mt.prototype, vt);
            var yt = function(t) {
                void 0 === t && (t = "");
                var e = new mt;
                return e.text = t, e.isComment = !0, e
            };

            function xt(t) {
                return new mt(void 0, void 0, void 0, String(t))
            }

            function bt(t) {
                var e = new mt(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
                return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e
            }
            var wt = Array.prototype,
                _t = Object.create(wt),
                kt = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
            kt.forEach(function(t) {
                var e = wt[t];
                W(_t, t, function() {
                    var i = [],
                        n = arguments.length;
                    while (n--) i[n] = arguments[n];
                    var r, o = e.apply(this, i),
                        a = this.__ob__;
                    switch (t) {
                        case "push":
                        case "unshift":
                            r = i;
                            break;
                        case "splice":
                            r = i.slice(2);
                            break
                    }
                    return r && a.observeArray(r), a.dep.notify(), o
                })
            });
            var St = Object.getOwnPropertyNames(_t),
                Mt = !0;

            function At(t) {
                Mt = t
            }
            var Ct = function(t) {
                this.value = t, this.dep = new dt, this.vmCount = 0, W(t, "__ob__", this), Array.isArray(t) ? (V ? Tt(t, _t) : Pt(t, _t, St), this.observeArray(t)) : this.walk(t)
            };

            function Tt(t, e) {
                t.__proto__ = e
            }

            function Pt(t, e, i) {
                for (var n = 0, r = i.length; n < r; n++) {
                    var o = i[n];
                    W(t, o, e[o])
                }
            }

            function Ot(t, e) {
                var i;
                if (l(t) && !(t instanceof mt)) return x(t, "__ob__") && t.__ob__ instanceof Ct ? i = t.__ob__ : Mt && !ot() && (Array.isArray(t) || h(t)) && Object.isExtensible(t) && !t._isVue && (i = new Ct(t)), e && i && i.vmCount++, i
            }

            function Lt(t, e, i, n, r) {
                var o = new dt,
                    a = Object.getOwnPropertyDescriptor(t, e);
                if (!a || !1 !== a.configurable) {
                    var s = a && a.get,
                        l = a && a.set;
                    s && !l || 2 !== arguments.length || (i = t[e]);
                    var c = !r && Ot(i);
                    Object.defineProperty(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var e = s ? s.call(t) : i;
                            return dt.target && (o.depend(), c && (c.dep.depend(), Array.isArray(e) && It(e))), e
                        },
                        set: function(e) {
                            var n = s ? s.call(t) : i;
                            e === n || e !== e && n !== n || s && !l || (l ? l.call(t, e) : i = e, c = !r && Ot(e), o.notify())
                        }
                    })
                }
            }

            function Et(t, e, i) {
                if (Array.isArray(t) && d(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, i), i;
                if (e in t && !(e in Object.prototype)) return t[e] = i, i;
                var n = t.__ob__;
                return t._isVue || n && n.vmCount ? i : n ? (Lt(n.value, e, i), n.dep.notify(), i) : (t[e] = i, i)
            }

            function Dt(t, e) {
                if (Array.isArray(t) && d(e)) t.splice(e, 1);
                else {
                    var i = t.__ob__;
                    t._isVue || i && i.vmCount || x(t, e) && (delete t[e], i && i.dep.notify())
                }
            }

            function It(t) {
                for (var e = void 0, i = 0, n = t.length; i < n; i++) e = t[i], e && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && It(e)
            }
            Ct.prototype.walk = function(t) {
                for (var e = Object.keys(t), i = 0; i < e.length; i++) Lt(t, e[i])
            }, Ct.prototype.observeArray = function(t) {
                for (var e = 0, i = t.length; e < i; e++) Ot(t[e])
            };
            var zt = H.optionMergeStrategies;

            function Bt(t, e) {
                if (!e) return t;
                for (var i, n, r, o = Object.keys(e), a = 0; a < o.length; a++) i = o[a], n = t[i], r = e[i], x(t, i) ? n !== r && h(n) && h(r) && Bt(n, r) : Et(t, i, r);
                return t
            }

            function Nt(t, e, i) {
                return i ? function() {
                    var n = "function" === typeof e ? e.call(i, i) : e,
                        r = "function" === typeof t ? t.call(i, i) : t;
                    return n ? Bt(n, r) : r
                } : e ? t ? function() {
                    return Bt("function" === typeof e ? e.call(this, this) : e, "function" === typeof t ? t.call(this, this) : t)
                } : e : t
            }

            function Rt(t, e) {
                return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t
            }

            function jt(t, e, i, n) {
                var r = Object.create(t || null);
                return e ? O(r, e) : r
            }
            zt.data = function(t, e, i) {
                return i ? Nt(t, e, i) : e && "function" !== typeof e ? t : Nt(t, e)
            }, F.forEach(function(t) {
                zt[t] = Rt
            }), j.forEach(function(t) {
                zt[t + "s"] = jt
            }), zt.watch = function(t, e, i, n) {
                if (t === it && (t = void 0), e === it && (e = void 0), !e) return Object.create(t || null);
                if (!t) return e;
                var r = {};
                for (var o in O(r, t), e) {
                    var a = r[o],
                        s = e[o];
                    a && !Array.isArray(a) && (a = [a]), r[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
                }
                return r
            }, zt.props = zt.methods = zt.inject = zt.computed = function(t, e, i, n) {
                if (!t) return e;
                var r = Object.create(null);
                return O(r, t), e && O(r, e), r
            }, zt.provide = Nt;
            var Ft = function(t, e) {
                return void 0 === e ? t : e
            };

            function Ht(t, e) {
                var i = t.props;
                if (i) {
                    var n, r, o, a = {};
                    if (Array.isArray(i)) {
                        n = i.length;
                        while (n--) r = i[n], "string" === typeof r && (o = _(r), a[o] = {
                            type: null
                        })
                    } else if (h(i))
                        for (var s in i) r = i[s], o = _(s), a[o] = h(r) ? r : {
                            type: r
                        };
                    else 0;
                    t.props = a
                }
            }

            function Gt(t, e) {
                var i = t.inject;
                if (i) {
                    var n = t.inject = {};
                    if (Array.isArray(i))
                        for (var r = 0; r < i.length; r++) n[i[r]] = {
                            from: i[r]
                        };
                    else if (h(i))
                        for (var o in i) {
                            var a = i[o];
                            n[o] = h(a) ? O({
                                from: o
                            }, a) : {
                                from: a
                            }
                        } else 0
                }
            }

            function Wt(t) {
                var e = t.directives;
                if (e)
                    for (var i in e) {
                        var n = e[i];
                        "function" === typeof n && (e[i] = {
                            bind: n,
                            update: n
                        })
                    }
            }

            function $t(t, e, i) {
                if ("function" === typeof e && (e = e.options), Ht(e, i), Gt(e, i), Wt(e), !e._base && (e.extends && (t = $t(t, e.extends, i)), e.mixins))
                    for (var n = 0, r = e.mixins.length; n < r; n++) t = $t(t, e.mixins[n], i);
                var o, a = {};
                for (o in t) s(o);
                for (o in e) x(t, o) || s(o);

                function s(n) {
                    var r = zt[n] || Ft;
                    a[n] = r(t[n], e[n], i, n)
                }
                return a
            }

            function Xt(t, e, i, n) {
                if ("string" === typeof i) {
                    var r = t[e];
                    if (x(r, i)) return r[i];
                    var o = _(i);
                    if (x(r, o)) return r[o];
                    var a = k(o);
                    if (x(r, a)) return r[a];
                    var s = r[i] || r[o] || r[a];
                    return s
                }
            }

            function Yt(t, e, i, n) {
                var r = e[t],
                    o = !x(i, t),
                    a = i[t],
                    s = qt(Boolean, r.type);
                if (s > -1)
                    if (o && !x(r, "default")) a = !1;
                    else if ("" === a || a === M(t)) {
                    var l = qt(String, r.type);
                    (l < 0 || s < l) && (a = !0)
                }
                if (void 0 === a) {
                    a = Vt(n, r, t);
                    var c = Mt;
                    At(!0), Ot(a), At(c)
                }
                return a
            }

            function Vt(t, e, i) {
                if (x(e, "default")) {
                    var n = e.default;
                    return t && t.$options.propsData && void 0 === t.$options.propsData[i] && void 0 !== t._props[i] ? t._props[i] : "function" === typeof n && "Function" !== Ut(e.type) ? n.call(t) : n
                }
            }

            function Ut(t) {
                var e = t && t.toString().match(/^\s*function (\w+)/);
                return e ? e[1] : ""
            }

            function Kt(t, e) {
                return Ut(t) === Ut(e)
            }

            function qt(t, e) {
                if (!Array.isArray(e)) return Kt(e, t) ? 0 : -1;
                for (var i = 0, n = e.length; i < n; i++)
                    if (Kt(e[i], t)) return i;
                return -1
            }

            function Zt(t, e, i) {
                if (e) {
                    var n = e;
                    while (n = n.$parent) {
                        var r = n.$options.errorCaptured;
                        if (r)
                            for (var o = 0; o < r.length; o++) try {
                                var a = !1 === r[o].call(n, t, e, i);
                                if (a) return
                            } catch (sa) {
                                Jt(sa, n, "errorCaptured hook")
                            }
                    }
                }
                Jt(t, e, i)
            }

            function Jt(t, e, i) {
                if (H.errorHandler) try {
                    return H.errorHandler.call(null, t, e, i)
                } catch (sa) {
                    Qt(sa, null, "config.errorHandler")
                }
                Qt(t, e, i)
            }

            function Qt(t, e, i) {
                if (!U && !K || "undefined" === typeof console) throw t;
                console.error(t)
            }
            var te, ee, ie = [],
                ne = !1;

            function re() {
                ne = !1;
                var t = ie.slice(0);
                ie.length = 0;
                for (var e = 0; e < t.length; e++) t[e]()
            }
            var oe = !1;
            if ("undefined" !== typeof setImmediate && st(setImmediate)) ee = function() {
                setImmediate(re)
            };
            else if ("undefined" === typeof MessageChannel || !st(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) ee = function() {
                setTimeout(re, 0)
            };
            else {
                var ae = new MessageChannel,
                    se = ae.port2;
                ae.port1.onmessage = re, ee = function() {
                    se.postMessage(1)
                }
            }
            if ("undefined" !== typeof Promise && st(Promise)) {
                var le = Promise.resolve();
                te = function() {
                    le.then(re), et && setTimeout(E)
                }
            } else te = ee;

            function ce(t) {
                return t._withTask || (t._withTask = function() {
                    oe = !0;
                    try {
                        return t.apply(null, arguments)
                    } finally {
                        oe = !1
                    }
                })
            }

            function he(t, e) {
                var i;
                if (ie.push(function() {
                        if (t) try {
                            t.call(e)
                        } catch (sa) {
                            Zt(sa, e, "nextTick")
                        } else i && i(e)
                    }), ne || (ne = !0, oe ? ee() : te()), !t && "undefined" !== typeof Promise) return new Promise(function(t) {
                    i = t
                })
            }
            var ue = new lt;

            function de(t) {
                pe(t, ue), ue.clear()
            }

            function pe(t, e) {
                var i, n, r = Array.isArray(t);
                if (!(!r && !l(t) || Object.isFrozen(t) || t instanceof mt)) {
                    if (t.__ob__) {
                        var o = t.__ob__.dep.id;
                        if (e.has(o)) return;
                        e.add(o)
                    }
                    if (r) {
                        i = t.length;
                        while (i--) pe(t[i], e)
                    } else {
                        n = Object.keys(t), i = n.length;
                        while (i--) pe(t[n[i]], e)
                    }
                }
            }
            var fe, ge = b(function(t) {
                var e = "&" === t.charAt(0);
                t = e ? t.slice(1) : t;
                var i = "~" === t.charAt(0);
                t = i ? t.slice(1) : t;
                var n = "!" === t.charAt(0);
                return t = n ? t.slice(1) : t, {
                    name: t,
                    once: i,
                    capture: n,
                    passive: e
                }
            });

            function me(t) {
                function e() {
                    var t = arguments,
                        i = e.fns;
                    if (!Array.isArray(i)) return i.apply(null, arguments);
                    for (var n = i.slice(), r = 0; r < n.length; r++) n[r].apply(null, t)
                }
                return e.fns = t, e
            }

            function ve(t, e, i, r, a, s) {
                var l, c, h, u;
                for (l in t) c = t[l], h = e[l], u = ge(l), n(c) || (n(h) ? (n(c.fns) && (c = t[l] = me(c)), o(u.once) && (c = t[l] = a(u.name, c, u.capture)), i(u.name, c, u.capture, u.passive, u.params)) : c !== h && (h.fns = c, t[l] = h));
                for (l in e) n(t[l]) && (u = ge(l), r(u.name, e[l], u.capture))
            }

            function ye(t, e, i) {
                var a;
                t instanceof mt && (t = t.data.hook || (t.data.hook = {}));
                var s = t[e];

                function l() {
                    i.apply(this, arguments), v(a.fns, l)
                }
                n(s) ? a = me([l]) : r(s.fns) && o(s.merged) ? (a = s, a.fns.push(l)) : a = me([s, l]), a.merged = !0, t[e] = a
            }

            function xe(t, e, i) {
                var o = e.options.props;
                if (!n(o)) {
                    var a = {},
                        s = t.attrs,
                        l = t.props;
                    if (r(s) || r(l))
                        for (var c in o) {
                            var h = M(c);
                            be(a, l, c, h, !0) || be(a, s, c, h, !1)
                        }
                    return a
                }
            }

            function be(t, e, i, n, o) {
                if (r(e)) {
                    if (x(e, i)) return t[i] = e[i], o || delete e[i], !0;
                    if (x(e, n)) return t[i] = e[n], o || delete e[n], !0
                }
                return !1
            }

            function we(t) {
                for (var e = 0; e < t.length; e++)
                    if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                return t
            }

            function _e(t) {
                return s(t) ? [xt(t)] : Array.isArray(t) ? Se(t) : void 0
            }

            function ke(t) {
                return r(t) && r(t.text) && a(t.isComment)
            }

            function Se(t, e) {
                var i, a, l, c, h = [];
                for (i = 0; i < t.length; i++) a = t[i], n(a) || "boolean" === typeof a || (l = h.length - 1, c = h[l], Array.isArray(a) ? a.length > 0 && (a = Se(a, (e || "") + "_" + i), ke(a[0]) && ke(c) && (h[l] = xt(c.text + a[0].text), a.shift()), h.push.apply(h, a)) : s(a) ? ke(c) ? h[l] = xt(c.text + a) : "" !== a && h.push(xt(a)) : ke(a) && ke(c) ? h[l] = xt(c.text + a.text) : (o(t._isVList) && r(a.tag) && n(a.key) && r(e) && (a.key = "__vlist" + e + "_" + i + "__"), h.push(a)));
                return h
            }

            function Me(t, e) {
                return (t.__esModule || ct && "Module" === t[Symbol.toStringTag]) && (t = t.default), l(t) ? e.extend(t) : t
            }

            function Ae(t, e, i, n, r) {
                var o = yt();
                return o.asyncFactory = t, o.asyncMeta = {
                    data: e,
                    context: i,
                    children: n,
                    tag: r
                }, o
            }

            function Ce(t, e, i) {
                if (o(t.error) && r(t.errorComp)) return t.errorComp;
                if (r(t.resolved)) return t.resolved;
                if (o(t.loading) && r(t.loadingComp)) return t.loadingComp;
                if (!r(t.contexts)) {
                    var a = t.contexts = [i],
                        s = !0,
                        c = function(t) {
                            for (var e = 0, i = a.length; e < i; e++) a[e].$forceUpdate();
                            t && (a.length = 0)
                        },
                        h = N(function(i) {
                            t.resolved = Me(i, e), s || c(!0)
                        }),
                        u = N(function(e) {
                            r(t.errorComp) && (t.error = !0, c(!0))
                        }),
                        d = t(h, u);
                    return l(d) && ("function" === typeof d.then ? n(t.resolved) && d.then(h, u) : r(d.component) && "function" === typeof d.component.then && (d.component.then(h, u), r(d.error) && (t.errorComp = Me(d.error, e)), r(d.loading) && (t.loadingComp = Me(d.loading, e), 0 === d.delay ? t.loading = !0 : setTimeout(function() {
                        n(t.resolved) && n(t.error) && (t.loading = !0, c(!1))
                    }, d.delay || 200)), r(d.timeout) && setTimeout(function() {
                        n(t.resolved) && u(null)
                    }, d.timeout))), s = !1, t.loading ? t.loadingComp : t.resolved
                }
                t.contexts.push(i)
            }

            function Te(t) {
                return t.isComment && t.asyncFactory
            }

            function Pe(t) {
                if (Array.isArray(t))
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        if (r(i) && (r(i.componentOptions) || Te(i))) return i
                    }
            }

            function Oe(t) {
                t._events = Object.create(null), t._hasHookEvent = !1;
                var e = t.$options._parentListeners;
                e && Ie(t, e)
            }

            function Le(t, e) {
                fe.$on(t, e)
            }

            function Ee(t, e) {
                fe.$off(t, e)
            }

            function De(t, e) {
                var i = fe;
                return function n() {
                    var r = e.apply(null, arguments);
                    null !== r && i.$off(t, n)
                }
            }

            function Ie(t, e, i) {
                fe = t, ve(e, i || {}, Le, Ee, De, t), fe = void 0
            }

            function ze(t) {
                var e = /^hook:/;
                t.prototype.$on = function(t, i) {
                    var n = this;
                    if (Array.isArray(t))
                        for (var r = 0, o = t.length; r < o; r++) n.$on(t[r], i);
                    else(n._events[t] || (n._events[t] = [])).push(i), e.test(t) && (n._hasHookEvent = !0);
                    return n
                }, t.prototype.$once = function(t, e) {
                    var i = this;

                    function n() {
                        i.$off(t, n), e.apply(i, arguments)
                    }
                    return n.fn = e, i.$on(t, n), i
                }, t.prototype.$off = function(t, e) {
                    var i = this;
                    if (!arguments.length) return i._events = Object.create(null), i;
                    if (Array.isArray(t)) {
                        for (var n = 0, r = t.length; n < r; n++) i.$off(t[n], e);
                        return i
                    }
                    var o = i._events[t];
                    if (!o) return i;
                    if (!e) return i._events[t] = null, i;
                    if (e) {
                        var a, s = o.length;
                        while (s--)
                            if (a = o[s], a === e || a.fn === e) {
                                o.splice(s, 1);
                                break
                            }
                    }
                    return i
                }, t.prototype.$emit = function(t) {
                    var e = this,
                        i = e._events[t];
                    if (i) {
                        i = i.length > 1 ? P(i) : i;
                        for (var n = P(arguments, 1), r = 0, o = i.length; r < o; r++) try {
                            i[r].apply(e, n)
                        } catch (sa) {
                            Zt(sa, e, 'event handler for "' + t + '"')
                        }
                    }
                    return e
                }
            }

            function Be(t, e) {
                var i = {};
                if (!t) return i;
                for (var n = 0, r = t.length; n < r; n++) {
                    var o = t[n],
                        a = o.data;
                    if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== e && o.fnContext !== e || !a || null == a.slot)(i.default || (i.default = [])).push(o);
                    else {
                        var s = a.slot,
                            l = i[s] || (i[s] = []);
                        "template" === o.tag ? l.push.apply(l, o.children || []) : l.push(o)
                    }
                }
                for (var c in i) i[c].every(Ne) && delete i[c];
                return i
            }

            function Ne(t) {
                return t.isComment && !t.asyncFactory || " " === t.text
            }

            function Re(t, e) {
                e = e || {};
                for (var i = 0; i < t.length; i++) Array.isArray(t[i]) ? Re(t[i], e) : e[t[i].key] = t[i].fn;
                return e
            }
            var je = null;

            function Fe(t) {
                var e = je;
                return je = t,
                    function() {
                        je = e
                    }
            }

            function He(t) {
                var e = t.$options,
                    i = e.parent;
                if (i && !e.abstract) {
                    while (i.$options.abstract && i.$parent) i = i.$parent;
                    i.$children.push(t)
                }
                t.$parent = i, t.$root = i ? i.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
            }

            function Ge(t) {
                t.prototype._update = function(t, e) {
                    var i = this,
                        n = i.$el,
                        r = i._vnode,
                        o = Fe(i);
                    i._vnode = t, i.$el = r ? i.__patch__(r, t) : i.__patch__(i.$el, t, e, !1), o(), n && (n.__vue__ = null), i.$el && (i.$el.__vue__ = i), i.$vnode && i.$parent && i.$vnode === i.$parent._vnode && (i.$parent.$el = i.$el)
                }, t.prototype.$forceUpdate = function() {
                    var t = this;
                    t._watcher && t._watcher.update()
                }, t.prototype.$destroy = function() {
                    var t = this;
                    if (!t._isBeingDestroyed) {
                        Ue(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                        var e = t.$parent;
                        !e || e._isBeingDestroyed || t.$options.abstract || v(e.$children, t), t._watcher && t._watcher.teardown();
                        var i = t._watchers.length;
                        while (i--) t._watchers[i].teardown();
                        t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), Ue(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null)
                    }
                }
            }

            function We(t, e, i) {
                var n;
                return t.$el = e, t.$options.render || (t.$options.render = yt), Ue(t, "beforeMount"), n = function() {
                    t._update(t._render(), i)
                }, new li(t, n, E, {
                    before: function() {
                        t._isMounted && !t._isDestroyed && Ue(t, "beforeUpdate")
                    }
                }, !0), i = !1, null == t.$vnode && (t._isMounted = !0, Ue(t, "mounted")), t
            }

            function $e(t, e, n, r, o) {
                var a = !!(o || t.$options._renderChildren || r.data.scopedSlots || t.$scopedSlots !== i);
                if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), t.$options._renderChildren = o, t.$attrs = r.data.attrs || i, t.$listeners = n || i, e && t.$options.props) {
                    At(!1);
                    for (var s = t._props, l = t.$options._propKeys || [], c = 0; c < l.length; c++) {
                        var h = l[c],
                            u = t.$options.props;
                        s[h] = Yt(h, u, e, t)
                    }
                    At(!0), t.$options.propsData = e
                }
                n = n || i;
                var d = t.$options._parentListeners;
                t.$options._parentListeners = n, Ie(t, n, d), a && (t.$slots = Be(o, r.context), t.$forceUpdate())
            }

            function Xe(t) {
                while (t && (t = t.$parent))
                    if (t._inactive) return !0;
                return !1
            }

            function Ye(t, e) {
                if (e) {
                    if (t._directInactive = !1, Xe(t)) return
                } else if (t._directInactive) return;
                if (t._inactive || null === t._inactive) {
                    t._inactive = !1;
                    for (var i = 0; i < t.$children.length; i++) Ye(t.$children[i]);
                    Ue(t, "activated")
                }
            }

            function Ve(t, e) {
                if ((!e || (t._directInactive = !0, !Xe(t))) && !t._inactive) {
                    t._inactive = !0;
                    for (var i = 0; i < t.$children.length; i++) Ve(t.$children[i]);
                    Ue(t, "deactivated")
                }
            }

            function Ue(t, e) {
                ft();
                var i = t.$options[e];
                if (i)
                    for (var n = 0, r = i.length; n < r; n++) try {
                        i[n].call(t)
                    } catch (sa) {
                        Zt(sa, t, e + " hook")
                    }
                t._hasHookEvent && t.$emit("hook:" + e), gt()
            }
            var Ke = [],
                qe = [],
                Ze = {},
                Je = !1,
                Qe = !1,
                ti = 0;

            function ei() {
                ti = Ke.length = qe.length = 0, Ze = {}, Je = Qe = !1
            }

            function ii() {
                var t, e;
                for (Qe = !0, Ke.sort(function(t, e) {
                        return t.id - e.id
                    }), ti = 0; ti < Ke.length; ti++) t = Ke[ti], t.before && t.before(), e = t.id, Ze[e] = null, t.run();
                var i = qe.slice(),
                    n = Ke.slice();
                ei(), oi(i), ni(n), at && H.devtools && at.emit("flush")
            }

            function ni(t) {
                var e = t.length;
                while (e--) {
                    var i = t[e],
                        n = i.vm;
                    n._watcher === i && n._isMounted && !n._isDestroyed && Ue(n, "updated")
                }
            }

            function ri(t) {
                t._inactive = !1, qe.push(t)
            }

            function oi(t) {
                for (var e = 0; e < t.length; e++) t[e]._inactive = !0, Ye(t[e], !0)
            }

            function ai(t) {
                var e = t.id;
                if (null == Ze[e]) {
                    if (Ze[e] = !0, Qe) {
                        var i = Ke.length - 1;
                        while (i > ti && Ke[i].id > t.id) i--;
                        Ke.splice(i + 1, 0, t)
                    } else Ke.push(t);
                    Je || (Je = !0, he(ii))
                }
            }
            var si = 0,
                li = function(t, e, i, n, r) {
                    this.vm = t, r && (t._watcher = this), t._watchers.push(this), n ? (this.deep = !!n.deep, this.user = !!n.user, this.lazy = !!n.lazy, this.sync = !!n.sync, this.before = n.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = i, this.id = ++si, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new lt, this.newDepIds = new lt, this.expression = "", "function" === typeof e ? this.getter = e : (this.getter = X(e), this.getter || (this.getter = E)), this.value = this.lazy ? void 0 : this.get()
                };
            li.prototype.get = function() {
                var t;
                ft(this);
                var e = this.vm;
                try {
                    t = this.getter.call(e, e)
                } catch (sa) {
                    if (!this.user) throw sa;
                    Zt(sa, e, 'getter for watcher "' + this.expression + '"')
                } finally {
                    this.deep && de(t), gt(), this.cleanupDeps()
                }
                return t
            }, li.prototype.addDep = function(t) {
                var e = t.id;
                this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
            }, li.prototype.cleanupDeps = function() {
                var t = this.deps.length;
                while (t--) {
                    var e = this.deps[t];
                    this.newDepIds.has(e.id) || e.removeSub(this)
                }
                var i = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = i, this.newDepIds.clear(), i = this.deps, this.deps = this.newDeps, this.newDeps = i, this.newDeps.length = 0
            }, li.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : ai(this)
            }, li.prototype.run = function() {
                if (this.active) {
                    var t = this.get();
                    if (t !== this.value || l(t) || this.deep) {
                        var e = this.value;
                        if (this.value = t, this.user) try {
                            this.cb.call(this.vm, t, e)
                        } catch (sa) {
                            Zt(sa, this.vm, 'callback for watcher "' + this.expression + '"')
                        } else this.cb.call(this.vm, t, e)
                    }
                }
            }, li.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1
            }, li.prototype.depend = function() {
                var t = this.deps.length;
                while (t--) this.deps[t].depend()
            }, li.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || v(this.vm._watchers, this);
                    var t = this.deps.length;
                    while (t--) this.deps[t].removeSub(this);
                    this.active = !1
                }
            };
            var ci = {
                enumerable: !0,
                configurable: !0,
                get: E,
                set: E
            };

            function hi(t, e, i) {
                ci.get = function() {
                    return this[e][i]
                }, ci.set = function(t) {
                    this[e][i] = t
                }, Object.defineProperty(t, i, ci)
            }

            function ui(t) {
                t._watchers = [];
                var e = t.$options;
                e.props && di(t, e.props), e.methods && bi(t, e.methods), e.data ? pi(t) : Ot(t._data = {}, !0), e.computed && mi(t, e.computed), e.watch && e.watch !== it && wi(t, e.watch)
            }

            function di(t, e) {
                var i = t.$options.propsData || {},
                    n = t._props = {},
                    r = t.$options._propKeys = [],
                    o = !t.$parent;
                o || At(!1);
                var a = function(o) {
                    r.push(o);
                    var a = Yt(o, e, i, t);
                    Lt(n, o, a), o in t || hi(t, "_props", o)
                };
                for (var s in e) a(s);
                At(!0)
            }

            function pi(t) {
                var e = t.$options.data;
                e = t._data = "function" === typeof e ? fi(e, t) : e || {}, h(e) || (e = {});
                var i = Object.keys(e),
                    n = t.$options.props,
                    r = (t.$options.methods, i.length);
                while (r--) {
                    var o = i[r];
                    0, n && x(n, o) || G(o) || hi(t, "_data", o)
                }
                Ot(e, !0)
            }

            function fi(t, e) {
                ft();
                try {
                    return t.call(e, e)
                } catch (sa) {
                    return Zt(sa, e, "data()"), {}
                } finally {
                    gt()
                }
            }
            var gi = {
                lazy: !0
            };

            function mi(t, e) {
                var i = t._computedWatchers = Object.create(null),
                    n = ot();
                for (var r in e) {
                    var o = e[r],
                        a = "function" === typeof o ? o : o.get;
                    0, n || (i[r] = new li(t, a || E, E, gi)), r in t || vi(t, r, o)
                }
            }

            function vi(t, e, i) {
                var n = !ot();
                "function" === typeof i ? (ci.get = n ? yi(e) : xi(i), ci.set = E) : (ci.get = i.get ? n && !1 !== i.cache ? yi(e) : xi(i.get) : E, ci.set = i.set || E), Object.defineProperty(t, e, ci)
            }

            function yi(t) {
                return function() {
                    var e = this._computedWatchers && this._computedWatchers[t];
                    if (e) return e.dirty && e.evaluate(), dt.target && e.depend(), e.value
                }
            }

            function xi(t) {
                return function() {
                    return t.call(this, this)
                }
            }

            function bi(t, e) {
                t.$options.props;
                for (var i in e) t[i] = "function" !== typeof e[i] ? E : T(e[i], t)
            }

            function wi(t, e) {
                for (var i in e) {
                    var n = e[i];
                    if (Array.isArray(n))
                        for (var r = 0; r < n.length; r++) _i(t, i, n[r]);
                    else _i(t, i, n)
                }
            }

            function _i(t, e, i, n) {
                return h(i) && (n = i, i = i.handler), "string" === typeof i && (i = t[i]), t.$watch(e, i, n)
            }

            function ki(t) {
                var e = {
                        get: function() {
                            return this._data
                        }
                    },
                    i = {
                        get: function() {
                            return this._props
                        }
                    };
                Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", i), t.prototype.$set = Et, t.prototype.$delete = Dt, t.prototype.$watch = function(t, e, i) {
                    var n = this;
                    if (h(e)) return _i(n, t, e, i);
                    i = i || {}, i.user = !0;
                    var r = new li(n, t, e, i);
                    if (i.immediate) try {
                        e.call(n, r.value)
                    } catch (o) {
                        Zt(o, n, 'callback for immediate watcher "' + r.expression + '"')
                    }
                    return function() {
                        r.teardown()
                    }
                }
            }

            function Si(t) {
                var e = t.$options.provide;
                e && (t._provided = "function" === typeof e ? e.call(t) : e)
            }

            function Mi(t) {
                var e = Ai(t.$options.inject, t);
                e && (At(!1), Object.keys(e).forEach(function(i) {
                    Lt(t, i, e[i])
                }), At(!0))
            }

            function Ai(t, e) {
                if (t) {
                    for (var i = Object.create(null), n = ct ? Reflect.ownKeys(t).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }) : Object.keys(t), r = 0; r < n.length; r++) {
                        var o = n[r],
                            a = t[o].from,
                            s = e;
                        while (s) {
                            if (s._provided && x(s._provided, a)) {
                                i[o] = s._provided[a];
                                break
                            }
                            s = s.$parent
                        }
                        if (!s)
                            if ("default" in t[o]) {
                                var l = t[o].default;
                                i[o] = "function" === typeof l ? l.call(e) : l
                            } else 0
                    }
                    return i
                }
            }

            function Ci(t, e) {
                var i, n, o, a, s;
                if (Array.isArray(t) || "string" === typeof t)
                    for (i = new Array(t.length), n = 0, o = t.length; n < o; n++) i[n] = e(t[n], n);
                else if ("number" === typeof t)
                    for (i = new Array(t), n = 0; n < t; n++) i[n] = e(n + 1, n);
                else if (l(t))
                    for (a = Object.keys(t), i = new Array(a.length), n = 0, o = a.length; n < o; n++) s = a[n], i[n] = e(t[s], s, n);
                return r(i) || (i = []), i._isVList = !0, i
            }

            function Ti(t, e, i, n) {
                var r, o = this.$scopedSlots[t];
                o ? (i = i || {}, n && (i = O(O({}, n), i)), r = o(i) || e) : r = this.$slots[t] || e;
                var a = i && i.slot;
                return a ? this.$createElement("template", {
                    slot: a
                }, r) : r
            }

            function Pi(t) {
                return Xt(this.$options, "filters", t, !0) || I
            }

            function Oi(t, e) {
                return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
            }

            function Li(t, e, i, n, r) {
                var o = H.keyCodes[e] || i;
                return r && n && !H.keyCodes[e] ? Oi(r, n) : o ? Oi(o, t) : n ? M(n) !== e : void 0
            }

            function Ei(t, e, i, n, r) {
                if (i)
                    if (l(i)) {
                        var o;
                        Array.isArray(i) && (i = L(i));
                        var a = function(a) {
                            if ("class" === a || "style" === a || m(a)) o = t;
                            else {
                                var s = t.attrs && t.attrs.type;
                                o = n || H.mustUseProp(e, s, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                            }
                            var l = _(a);
                            if (!(a in o) && !(l in o) && (o[a] = i[a], r)) {
                                var c = t.on || (t.on = {});
                                c["update:" + l] = function(t) {
                                    i[a] = t
                                }
                            }
                        };
                        for (var s in i) a(s)
                    } else;
                return t
            }

            function Di(t, e) {
                var i = this._staticTrees || (this._staticTrees = []),
                    n = i[t];
                return n && !e ? n : (n = i[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), zi(n, "__static__" + t, !1), n)
            }

            function Ii(t, e, i) {
                return zi(t, "__once__" + e + (i ? "_" + i : ""), !0), t
            }

            function zi(t, e, i) {
                if (Array.isArray(t))
                    for (var n = 0; n < t.length; n++) t[n] && "string" !== typeof t[n] && Bi(t[n], e + "_" + n, i);
                else Bi(t, e, i)
            }

            function Bi(t, e, i) {
                t.isStatic = !0, t.key = e, t.isOnce = i
            }

            function Ni(t, e) {
                if (e)
                    if (h(e)) {
                        var i = t.on = t.on ? O({}, t.on) : {};
                        for (var n in e) {
                            var r = i[n],
                                o = e[n];
                            i[n] = r ? [].concat(r, o) : o
                        }
                    } else;
                return t
            }

            function Ri(t) {
                t._o = Ii, t._n = f, t._s = p, t._l = Ci, t._t = Ti, t._q = z, t._i = B, t._m = Di, t._f = Pi, t._k = Li, t._b = Ei, t._v = xt, t._e = yt, t._u = Re, t._g = Ni
            }

            function ji(t, e, n, r, a) {
                var s, l = a.options;
                x(r, "_uid") ? (s = Object.create(r), s._original = r) : (s = r, r = r._original);
                var c = o(l._compiled),
                    h = !c;
                this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || i, this.injections = Ai(l.inject, r), this.slots = function() {
                    return Be(n, r)
                }, c && (this.$options = l, this.$slots = this.slots(), this.$scopedSlots = t.scopedSlots || i), l._scopeId ? this._c = function(t, e, i, n) {
                    var o = Ji(s, t, e, i, n, h);
                    return o && !Array.isArray(o) && (o.fnScopeId = l._scopeId, o.fnContext = r), o
                } : this._c = function(t, e, i, n) {
                    return Ji(s, t, e, i, n, h)
                }
            }

            function Fi(t, e, n, o, a) {
                var s = t.options,
                    l = {},
                    c = s.props;
                if (r(c))
                    for (var h in c) l[h] = Yt(h, c, e || i);
                else r(n.attrs) && Gi(l, n.attrs), r(n.props) && Gi(l, n.props);
                var u = new ji(n, l, a, o, t),
                    d = s.render.call(null, u._c, u);
                if (d instanceof mt) return Hi(d, n, u.parent, s, u);
                if (Array.isArray(d)) {
                    for (var p = _e(d) || [], f = new Array(p.length), g = 0; g < p.length; g++) f[g] = Hi(p[g], n, u.parent, s, u);
                    return f
                }
            }

            function Hi(t, e, i, n, r) {
                var o = bt(t);
                return o.fnContext = i, o.fnOptions = n, e.slot && ((o.data || (o.data = {})).slot = e.slot), o
            }

            function Gi(t, e) {
                for (var i in e) t[_(i)] = e[i]
            }
            Ri(ji.prototype);
            var Wi = {
                    init: function(t, e) {
                        if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                            var i = t;
                            Wi.prepatch(i, i)
                        } else {
                            var n = t.componentInstance = Yi(t, je);
                            n.$mount(e ? t.elm : void 0, e)
                        }
                    },
                    prepatch: function(t, e) {
                        var i = e.componentOptions,
                            n = e.componentInstance = t.componentInstance;
                        $e(n, i.propsData, i.listeners, e, i.children)
                    },
                    insert: function(t) {
                        var e = t.context,
                            i = t.componentInstance;
                        i._isMounted || (i._isMounted = !0, Ue(i, "mounted")), t.data.keepAlive && (e._isMounted ? ri(i) : Ye(i, !0))
                    },
                    destroy: function(t) {
                        var e = t.componentInstance;
                        e._isDestroyed || (t.data.keepAlive ? Ve(e, !0) : e.$destroy())
                    }
                },
                $i = Object.keys(Wi);

            function Xi(t, e, i, a, s) {
                if (!n(t)) {
                    var c = i.$options._base;
                    if (l(t) && (t = c.extend(t)), "function" === typeof t) {
                        var h;
                        if (n(t.cid) && (h = t, t = Ce(h, c, i), void 0 === t)) return Ae(h, e, i, a, s);
                        e = e || {}, ln(t), r(e.model) && Ki(t.options, e);
                        var u = xe(e, t, s);
                        if (o(t.options.functional)) return Fi(t, u, e, i, a);
                        var d = e.on;
                        if (e.on = e.nativeOn, o(t.options.abstract)) {
                            var p = e.slot;
                            e = {}, p && (e.slot = p)
                        }
                        Vi(e);
                        var f = t.options.name || s,
                            g = new mt("vue-component-" + t.cid + (f ? "-" + f : ""), e, void 0, void 0, void 0, i, {
                                Ctor: t,
                                propsData: u,
                                listeners: d,
                                tag: s,
                                children: a
                            }, h);
                        return g
                    }
                }
            }

            function Yi(t, e) {
                var i = {
                        _isComponent: !0,
                        _parentVnode: t,
                        parent: e
                    },
                    n = t.data.inlineTemplate;
                return r(n) && (i.render = n.render, i.staticRenderFns = n.staticRenderFns), new t.componentOptions.Ctor(i)
            }

            function Vi(t) {
                for (var e = t.hook || (t.hook = {}), i = 0; i < $i.length; i++) {
                    var n = $i[i],
                        r = e[n],
                        o = Wi[n];
                    r === o || r && r._merged || (e[n] = r ? Ui(o, r) : o)
                }
            }

            function Ui(t, e) {
                var i = function(i, n) {
                    t(i, n), e(i, n)
                };
                return i._merged = !0, i
            }

            function Ki(t, e) {
                var i = t.model && t.model.prop || "value",
                    n = t.model && t.model.event || "input";
                (e.props || (e.props = {}))[i] = e.model.value;
                var o = e.on || (e.on = {}),
                    a = o[n],
                    s = e.model.callback;
                r(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (o[n] = [s].concat(a)) : o[n] = s
            }
            var qi = 1,
                Zi = 2;

            function Ji(t, e, i, n, r, a) {
                return (Array.isArray(i) || s(i)) && (r = n, n = i, i = void 0), o(a) && (r = Zi), Qi(t, e, i, n, r)
            }

            function Qi(t, e, i, n, o) {
                if (r(i) && r(i.__ob__)) return yt();
                if (r(i) && r(i.is) && (e = i.is), !e) return yt();
                var a, s, l;
                (Array.isArray(n) && "function" === typeof n[0] && (i = i || {}, i.scopedSlots = {
                    default: n[0]
                }, n.length = 0), o === Zi ? n = _e(n) : o === qi && (n = we(n)), "string" === typeof e) ? (s = t.$vnode && t.$vnode.ns || H.getTagNamespace(e), a = H.isReservedTag(e) ? new mt(H.parsePlatformTagName(e), i, n, void 0, void 0, t) : i && i.pre || !r(l = Xt(t.$options, "components", e)) ? new mt(e, i, n, void 0, void 0, t) : Xi(l, i, t, n, e)) : a = Xi(e, i, t, n);
                return Array.isArray(a) ? a : r(a) ? (r(s) && tn(a, s), r(i) && en(i), a) : yt()
            }

            function tn(t, e, i) {
                if (t.ns = e, "foreignObject" === t.tag && (e = void 0, i = !0), r(t.children))
                    for (var a = 0, s = t.children.length; a < s; a++) {
                        var l = t.children[a];
                        r(l.tag) && (n(l.ns) || o(i) && "svg" !== l.tag) && tn(l, e, i)
                    }
            }

            function en(t) {
                l(t.style) && de(t.style), l(t.class) && de(t.class)
            }

            function nn(t) {
                t._vnode = null, t._staticTrees = null;
                var e = t.$options,
                    n = t.$vnode = e._parentVnode,
                    r = n && n.context;
                t.$slots = Be(e._renderChildren, r), t.$scopedSlots = i, t._c = function(e, i, n, r) {
                    return Ji(t, e, i, n, r, !1)
                }, t.$createElement = function(e, i, n, r) {
                    return Ji(t, e, i, n, r, !0)
                };
                var o = n && n.data;
                Lt(t, "$attrs", o && o.attrs || i, null, !0), Lt(t, "$listeners", e._parentListeners || i, null, !0)
            }

            function rn(t) {
                Ri(t.prototype), t.prototype.$nextTick = function(t) {
                    return he(t, this)
                }, t.prototype._render = function() {
                    var t, e = this,
                        n = e.$options,
                        r = n.render,
                        o = n._parentVnode;
                    o && (e.$scopedSlots = o.data.scopedSlots || i), e.$vnode = o;
                    try {
                        t = r.call(e._renderProxy, e.$createElement)
                    } catch (sa) {
                        Zt(sa, e, "render"), t = e._vnode
                    }
                    return t instanceof mt || (t = yt()), t.parent = o, t
                }
            }
            var on = 0;

            function an(t) {
                t.prototype._init = function(t) {
                    var e = this;
                    e._uid = on++, e._isVue = !0, t && t._isComponent ? sn(e, t) : e.$options = $t(ln(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, He(e), Oe(e), nn(e), Ue(e, "beforeCreate"), Mi(e), ui(e), Si(e), Ue(e, "created"), e.$options.el && e.$mount(e.$options.el)
                }
            }

            function sn(t, e) {
                var i = t.$options = Object.create(t.constructor.options),
                    n = e._parentVnode;
                i.parent = e.parent, i._parentVnode = n;
                var r = n.componentOptions;
                i.propsData = r.propsData, i._parentListeners = r.listeners, i._renderChildren = r.children, i._componentTag = r.tag, e.render && (i.render = e.render, i.staticRenderFns = e.staticRenderFns)
            }

            function ln(t) {
                var e = t.options;
                if (t.super) {
                    var i = ln(t.super),
                        n = t.superOptions;
                    if (i !== n) {
                        t.superOptions = i;
                        var r = cn(t);
                        r && O(t.extendOptions, r), e = t.options = $t(i, t.extendOptions), e.name && (e.components[e.name] = t)
                    }
                }
                return e
            }

            function cn(t) {
                var e, i = t.options,
                    n = t.extendOptions,
                    r = t.sealedOptions;
                for (var o in i) i[o] !== r[o] && (e || (e = {}), e[o] = hn(i[o], n[o], r[o]));
                return e
            }

            function hn(t, e, i) {
                if (Array.isArray(t)) {
                    var n = [];
                    i = Array.isArray(i) ? i : [i], e = Array.isArray(e) ? e : [e];
                    for (var r = 0; r < t.length; r++)(e.indexOf(t[r]) >= 0 || i.indexOf(t[r]) < 0) && n.push(t[r]);
                    return n
                }
                return t
            }

            function un(t) {
                this._init(t)
            }

            function dn(t) {
                t.use = function(t) {
                    var e = this._installedPlugins || (this._installedPlugins = []);
                    if (e.indexOf(t) > -1) return this;
                    var i = P(arguments, 1);
                    return i.unshift(this), "function" === typeof t.install ? t.install.apply(t, i) : "function" === typeof t && t.apply(null, i), e.push(t), this
                }
            }

            function pn(t) {
                t.mixin = function(t) {
                    return this.options = $t(this.options, t), this
                }
            }

            function fn(t) {
                t.cid = 0;
                var e = 1;
                t.extend = function(t) {
                    t = t || {};
                    var i = this,
                        n = i.cid,
                        r = t._Ctor || (t._Ctor = {});
                    if (r[n]) return r[n];
                    var o = t.name || i.options.name;
                    var a = function(t) {
                        this._init(t)
                    };
                    return a.prototype = Object.create(i.prototype), a.prototype.constructor = a, a.cid = e++, a.options = $t(i.options, t), a["super"] = i, a.options.props && gn(a), a.options.computed && mn(a), a.extend = i.extend, a.mixin = i.mixin, a.use = i.use, j.forEach(function(t) {
                        a[t] = i[t]
                    }), o && (a.options.components[o] = a), a.superOptions = i.options, a.extendOptions = t, a.sealedOptions = O({}, a.options), r[n] = a, a
                }
            }

            function gn(t) {
                var e = t.options.props;
                for (var i in e) hi(t.prototype, "_props", i)
            }

            function mn(t) {
                var e = t.options.computed;
                for (var i in e) vi(t.prototype, i, e[i])
            }

            function vn(t) {
                j.forEach(function(e) {
                    t[e] = function(t, i) {
                        return i ? ("component" === e && h(i) && (i.name = i.name || t, i = this.options._base.extend(i)), "directive" === e && "function" === typeof i && (i = {
                            bind: i,
                            update: i
                        }), this.options[e + "s"][t] = i, i) : this.options[e + "s"][t]
                    }
                })
            }

            function yn(t) {
                return t && (t.Ctor.options.name || t.tag)
            }

            function xn(t, e) {
                return Array.isArray(t) ? t.indexOf(e) > -1 : "string" === typeof t ? t.split(",").indexOf(e) > -1 : !!u(t) && t.test(e)
            }

            function bn(t, e) {
                var i = t.cache,
                    n = t.keys,
                    r = t._vnode;
                for (var o in i) {
                    var a = i[o];
                    if (a) {
                        var s = yn(a.componentOptions);
                        s && !e(s) && wn(i, o, n, r)
                    }
                }
            }

            function wn(t, e, i, n) {
                var r = t[e];
                !r || n && r.tag === n.tag || r.componentInstance.$destroy(), t[e] = null, v(i, e)
            }
            an(un), ki(un), ze(un), Ge(un), rn(un);
            var _n = [String, RegExp, Array],
                kn = {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: _n,
                        exclude: _n,
                        max: [String, Number]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = []
                    },
                    destroyed: function() {
                        for (var t in this.cache) wn(this.cache, t, this.keys)
                    },
                    mounted: function() {
                        var t = this;
                        this.$watch("include", function(e) {
                            bn(t, function(t) {
                                return xn(e, t)
                            })
                        }), this.$watch("exclude", function(e) {
                            bn(t, function(t) {
                                return !xn(e, t)
                            })
                        })
                    },
                    render: function() {
                        var t = this.$slots.default,
                            e = Pe(t),
                            i = e && e.componentOptions;
                        if (i) {
                            var n = yn(i),
                                r = this,
                                o = r.include,
                                a = r.exclude;
                            if (o && (!n || !xn(o, n)) || a && n && xn(a, n)) return e;
                            var s = this,
                                l = s.cache,
                                c = s.keys,
                                h = null == e.key ? i.Ctor.cid + (i.tag ? "::" + i.tag : "") : e.key;
                            l[h] ? (e.componentInstance = l[h].componentInstance, v(c, h), c.push(h)) : (l[h] = e, c.push(h), this.max && c.length > parseInt(this.max) && wn(l, c[0], c, this._vnode)), e.data.keepAlive = !0
                        }
                        return e || t && t[0]
                    }
                },
                Sn = {
                    KeepAlive: kn
                };

            function Mn(t) {
                var e = {
                    get: function() {
                        return H
                    }
                };
                Object.defineProperty(t, "config", e), t.util = {
                    warn: ht,
                    extend: O,
                    mergeOptions: $t,
                    defineReactive: Lt
                }, t.set = Et, t.delete = Dt, t.nextTick = he, t.options = Object.create(null), j.forEach(function(e) {
                    t.options[e + "s"] = Object.create(null)
                }), t.options._base = t, O(t.options.components, Sn), dn(t), pn(t), fn(t), vn(t)
            }
            Mn(un), Object.defineProperty(un.prototype, "$isServer", {
                get: ot
            }), Object.defineProperty(un.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext
                }
            }), Object.defineProperty(un, "FunctionalRenderContext", {
                value: ji
            }), un.version = "2.5.21";
            var An = g("style,class"),
                Cn = g("input,textarea,option,select,progress"),
                Tn = function(t, e, i) {
                    return "value" === i && Cn(t) && "button" !== e || "selected" === i && "option" === t || "checked" === i && "input" === t || "muted" === i && "video" === t
                },
                Pn = g("contenteditable,draggable,spellcheck"),
                On = g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                Ln = "http://www.w3.org/1999/xlink",
                En = function(t) {
                    return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
                },
                Dn = function(t) {
                    return En(t) ? t.slice(6, t.length) : ""
                },
                In = function(t) {
                    return null == t || !1 === t
                };

            function zn(t) {
                var e = t.data,
                    i = t,
                    n = t;
                while (r(n.componentInstance)) n = n.componentInstance._vnode, n && n.data && (e = Bn(n.data, e));
                while (r(i = i.parent)) i && i.data && (e = Bn(e, i.data));
                return Nn(e.staticClass, e.class)
            }

            function Bn(t, e) {
                return {
                    staticClass: Rn(t.staticClass, e.staticClass),
                    class: r(t.class) ? [t.class, e.class] : e.class
                }
            }

            function Nn(t, e) {
                return r(t) || r(e) ? Rn(t, jn(e)) : ""
            }

            function Rn(t, e) {
                return t ? e ? t + " " + e : t : e || ""
            }

            function jn(t) {
                return Array.isArray(t) ? Fn(t) : l(t) ? Hn(t) : "string" === typeof t ? t : ""
            }

            function Fn(t) {
                for (var e, i = "", n = 0, o = t.length; n < o; n++) r(e = jn(t[n])) && "" !== e && (i && (i += " "), i += e);
                return i
            }

            function Hn(t) {
                var e = "";
                for (var i in t) t[i] && (e && (e += " "), e += i);
                return e
            }
            var Gn = {
                    svg: "http://www.w3.org/2000/svg",
                    math: "http://www.w3.org/1998/Math/MathML"
                },
                Wn = g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
                $n = g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                Xn = function(t) {
                    return Wn(t) || $n(t)
                };

            function Yn(t) {
                return $n(t) ? "svg" : "math" === t ? "math" : void 0
            }
            var Vn = Object.create(null);

            function Un(t) {
                if (!U) return !0;
                if (Xn(t)) return !1;
                if (t = t.toLowerCase(), null != Vn[t]) return Vn[t];
                var e = document.createElement(t);
                return t.indexOf("-") > -1 ? Vn[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Vn[t] = /HTMLUnknownElement/.test(e.toString())
            }
            var Kn = g("text,number,password,search,email,tel,url");

            function qn(t) {
                if ("string" === typeof t) {
                    var e = document.querySelector(t);
                    return e || document.createElement("div")
                }
                return t
            }

            function Zn(t, e) {
                var i = document.createElement(t);
                return "select" !== t ? i : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && i.setAttribute("multiple", "multiple"), i)
            }

            function Jn(t, e) {
                return document.createElementNS(Gn[t], e)
            }

            function Qn(t) {
                return document.createTextNode(t)
            }

            function tr(t) {
                return document.createComment(t)
            }

            function er(t, e, i) {
                t.insertBefore(e, i)
            }

            function ir(t, e) {
                t.removeChild(e)
            }

            function nr(t, e) {
                t.appendChild(e)
            }

            function rr(t) {
                return t.parentNode
            }

            function or(t) {
                return t.nextSibling
            }

            function ar(t) {
                return t.tagName
            }

            function sr(t, e) {
                t.textContent = e
            }

            function lr(t, e) {
                t.setAttribute(e, "")
            }
            var cr = Object.freeze({
                    createElement: Zn,
                    createElementNS: Jn,
                    createTextNode: Qn,
                    createComment: tr,
                    insertBefore: er,
                    removeChild: ir,
                    appendChild: nr,
                    parentNode: rr,
                    nextSibling: or,
                    tagName: ar,
                    setTextContent: sr,
                    setStyleScope: lr
                }),
                hr = {
                    create: function(t, e) {
                        ur(e)
                    },
                    update: function(t, e) {
                        t.data.ref !== e.data.ref && (ur(t, !0), ur(e))
                    },
                    destroy: function(t) {
                        ur(t, !0)
                    }
                };

            function ur(t, e) {
                var i = t.data.ref;
                if (r(i)) {
                    var n = t.context,
                        o = t.componentInstance || t.elm,
                        a = n.$refs;
                    e ? Array.isArray(a[i]) ? v(a[i], o) : a[i] === o && (a[i] = void 0) : t.data.refInFor ? Array.isArray(a[i]) ? a[i].indexOf(o) < 0 && a[i].push(o) : a[i] = [o] : a[i] = o
                }
            }
            var dr = new mt("", {}, []),
                pr = ["create", "activate", "update", "remove", "destroy"];

            function fr(t, e) {
                return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && r(t.data) === r(e.data) && gr(t, e) || o(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && n(e.asyncFactory.error))
            }

            function gr(t, e) {
                if ("input" !== t.tag) return !0;
                var i, n = r(i = t.data) && r(i = i.attrs) && i.type,
                    o = r(i = e.data) && r(i = i.attrs) && i.type;
                return n === o || Kn(n) && Kn(o)
            }

            function mr(t, e, i) {
                var n, o, a = {};
                for (n = e; n <= i; ++n) o = t[n].key, r(o) && (a[o] = n);
                return a
            }

            function vr(t) {
                var e, i, a = {},
                    l = t.modules,
                    c = t.nodeOps;
                for (e = 0; e < pr.length; ++e)
                    for (a[pr[e]] = [], i = 0; i < l.length; ++i) r(l[i][pr[e]]) && a[pr[e]].push(l[i][pr[e]]);

                function h(t) {
                    return new mt(c.tagName(t).toLowerCase(), {}, [], void 0, t)
                }

                function u(t, e) {
                    function i() {
                        0 === --i.listeners && d(t)
                    }
                    return i.listeners = e, i
                }

                function d(t) {
                    var e = c.parentNode(t);
                    r(e) && c.removeChild(e, t)
                }

                function p(t, e, i, n, a, s, l) {
                    if (r(t.elm) && r(s) && (t = s[l] = bt(t)), t.isRootInsert = !a, !f(t, e, i, n)) {
                        var h = t.data,
                            u = t.children,
                            d = t.tag;
                        r(d) ? (t.elm = t.ns ? c.createElementNS(t.ns, d) : c.createElement(d, t), _(t), x(t, u, e), r(h) && w(t, e), y(i, t.elm, n)) : o(t.isComment) ? (t.elm = c.createComment(t.text), y(i, t.elm, n)) : (t.elm = c.createTextNode(t.text), y(i, t.elm, n))
                    }
                }

                function f(t, e, i, n) {
                    var a = t.data;
                    if (r(a)) {
                        var s = r(t.componentInstance) && a.keepAlive;
                        if (r(a = a.hook) && r(a = a.init) && a(t, !1), r(t.componentInstance)) return m(t, e), y(i, t.elm, n), o(s) && v(t, e, i, n), !0
                    }
                }

                function m(t, e) {
                    r(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, b(t) ? (w(t, e), _(t)) : (ur(t), e.push(t))
                }

                function v(t, e, i, n) {
                    var o, s = t;
                    while (s.componentInstance)
                        if (s = s.componentInstance._vnode, r(o = s.data) && r(o = o.transition)) {
                            for (o = 0; o < a.activate.length; ++o) a.activate[o](dr, s);
                            e.push(s);
                            break
                        } y(i, t.elm, n)
                }

                function y(t, e, i) {
                    r(t) && (r(i) ? c.parentNode(i) === t && c.insertBefore(t, e, i) : c.appendChild(t, e))
                }

                function x(t, e, i) {
                    if (Array.isArray(e)) {
                        0;
                        for (var n = 0; n < e.length; ++n) p(e[n], i, t.elm, null, !0, e, n)
                    } else s(t.text) && c.appendChild(t.elm, c.createTextNode(String(t.text)))
                }

                function b(t) {
                    while (t.componentInstance) t = t.componentInstance._vnode;
                    return r(t.tag)
                }

                function w(t, i) {
                    for (var n = 0; n < a.create.length; ++n) a.create[n](dr, t);
                    e = t.data.hook, r(e) && (r(e.create) && e.create(dr, t), r(e.insert) && i.push(t))
                }

                function _(t) {
                    var e;
                    if (r(e = t.fnScopeId)) c.setStyleScope(t.elm, e);
                    else {
                        var i = t;
                        while (i) r(e = i.context) && r(e = e.$options._scopeId) && c.setStyleScope(t.elm, e), i = i.parent
                    }
                    r(e = je) && e !== t.context && e !== t.fnContext && r(e = e.$options._scopeId) && c.setStyleScope(t.elm, e)
                }

                function k(t, e, i, n, r, o) {
                    for (; n <= r; ++n) p(i[n], o, t, e, !1, i, n)
                }

                function S(t) {
                    var e, i, n = t.data;
                    if (r(n))
                        for (r(e = n.hook) && r(e = e.destroy) && e(t), e = 0; e < a.destroy.length; ++e) a.destroy[e](t);
                    if (r(e = t.children))
                        for (i = 0; i < t.children.length; ++i) S(t.children[i])
                }

                function M(t, e, i, n) {
                    for (; i <= n; ++i) {
                        var o = e[i];
                        r(o) && (r(o.tag) ? (A(o), S(o)) : d(o.elm))
                    }
                }

                function A(t, e) {
                    if (r(e) || r(t.data)) {
                        var i, n = a.remove.length + 1;
                        for (r(e) ? e.listeners += n : e = u(t.elm, n), r(i = t.componentInstance) && r(i = i._vnode) && r(i.data) && A(i, e), i = 0; i < a.remove.length; ++i) a.remove[i](t, e);
                        r(i = t.data.hook) && r(i = i.remove) ? i(t, e) : e()
                    } else d(t.elm)
                }

                function C(t, e, i, o, a) {
                    var s, l, h, u, d = 0,
                        f = 0,
                        g = e.length - 1,
                        m = e[0],
                        v = e[g],
                        y = i.length - 1,
                        x = i[0],
                        b = i[y],
                        w = !a;
                    while (d <= g && f <= y) n(m) ? m = e[++d] : n(v) ? v = e[--g] : fr(m, x) ? (P(m, x, o, i, f), m = e[++d], x = i[++f]) : fr(v, b) ? (P(v, b, o, i, y), v = e[--g], b = i[--y]) : fr(m, b) ? (P(m, b, o, i, y), w && c.insertBefore(t, m.elm, c.nextSibling(v.elm)), m = e[++d], b = i[--y]) : fr(v, x) ? (P(v, x, o, i, f), w && c.insertBefore(t, v.elm, m.elm), v = e[--g], x = i[++f]) : (n(s) && (s = mr(e, d, g)), l = r(x.key) ? s[x.key] : T(x, e, d, g), n(l) ? p(x, o, t, m.elm, !1, i, f) : (h = e[l], fr(h, x) ? (P(h, x, o, i, f), e[l] = void 0, w && c.insertBefore(t, h.elm, m.elm)) : p(x, o, t, m.elm, !1, i, f)), x = i[++f]);
                    d > g ? (u = n(i[y + 1]) ? null : i[y + 1].elm, k(t, u, i, f, y, o)) : f > y && M(t, e, d, g)
                }

                function T(t, e, i, n) {
                    for (var o = i; o < n; o++) {
                        var a = e[o];
                        if (r(a) && fr(t, a)) return o
                    }
                }

                function P(t, e, i, s, l, h) {
                    if (t !== e) {
                        r(e.elm) && r(s) && (e = s[l] = bt(e));
                        var u = e.elm = t.elm;
                        if (o(t.isAsyncPlaceholder)) r(e.asyncFactory.resolved) ? E(t.elm, e, i) : e.isAsyncPlaceholder = !0;
                        else if (o(e.isStatic) && o(t.isStatic) && e.key === t.key && (o(e.isCloned) || o(e.isOnce))) e.componentInstance = t.componentInstance;
                        else {
                            var d, p = e.data;
                            r(p) && r(d = p.hook) && r(d = d.prepatch) && d(t, e);
                            var f = t.children,
                                g = e.children;
                            if (r(p) && b(e)) {
                                for (d = 0; d < a.update.length; ++d) a.update[d](t, e);
                                r(d = p.hook) && r(d = d.update) && d(t, e)
                            }
                            n(e.text) ? r(f) && r(g) ? f !== g && C(u, f, g, i, h) : r(g) ? (r(t.text) && c.setTextContent(u, ""), k(u, null, g, 0, g.length - 1, i)) : r(f) ? M(u, f, 0, f.length - 1) : r(t.text) && c.setTextContent(u, "") : t.text !== e.text && c.setTextContent(u, e.text), r(p) && r(d = p.hook) && r(d = d.postpatch) && d(t, e)
                        }
                    }
                }

                function O(t, e, i) {
                    if (o(i) && r(t.parent)) t.parent.data.pendingInsert = e;
                    else
                        for (var n = 0; n < e.length; ++n) e[n].data.hook.insert(e[n])
                }
                var L = g("attrs,class,staticClass,staticStyle,key");

                function E(t, e, i, n) {
                    var a, s = e.tag,
                        l = e.data,
                        c = e.children;
                    if (n = n || l && l.pre, e.elm = t, o(e.isComment) && r(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
                    if (r(l) && (r(a = l.hook) && r(a = a.init) && a(e, !0), r(a = e.componentInstance))) return m(e, i), !0;
                    if (r(s)) {
                        if (r(c))
                            if (t.hasChildNodes())
                                if (r(a = l) && r(a = a.domProps) && r(a = a.innerHTML)) {
                                    if (a !== t.innerHTML) return !1
                                } else {
                                    for (var h = !0, u = t.firstChild, d = 0; d < c.length; d++) {
                                        if (!u || !E(u, c[d], i, n)) {
                                            h = !1;
                                            break
                                        }
                                        u = u.nextSibling
                                    }
                                    if (!h || u) return !1
                                }
                        else x(e, c, i);
                        if (r(l)) {
                            var p = !1;
                            for (var f in l)
                                if (!L(f)) {
                                    p = !0, w(e, i);
                                    break
                                }! p && l["class"] && de(l["class"])
                        }
                    } else t.data !== e.text && (t.data = e.text);
                    return !0
                }
                return function(t, e, i, s) {
                    if (!n(e)) {
                        var l = !1,
                            u = [];
                        if (n(t)) l = !0, p(e, u);
                        else {
                            var d = r(t.nodeType);
                            if (!d && fr(t, e)) P(t, e, u, null, null, s);
                            else {
                                if (d) {
                                    if (1 === t.nodeType && t.hasAttribute(R) && (t.removeAttribute(R), i = !0), o(i) && E(t, e, u)) return O(e, u, !0), t;
                                    t = h(t)
                                }
                                var f = t.elm,
                                    g = c.parentNode(f);
                                if (p(e, u, f._leaveCb ? null : g, c.nextSibling(f)), r(e.parent)) {
                                    var m = e.parent,
                                        v = b(e);
                                    while (m) {
                                        for (var y = 0; y < a.destroy.length; ++y) a.destroy[y](m);
                                        if (m.elm = e.elm, v) {
                                            for (var x = 0; x < a.create.length; ++x) a.create[x](dr, m);
                                            var w = m.data.hook.insert;
                                            if (w.merged)
                                                for (var _ = 1; _ < w.fns.length; _++) w.fns[_]()
                                        } else ur(m);
                                        m = m.parent
                                    }
                                }
                                r(g) ? M(g, [t], 0, 0) : r(t.tag) && S(t)
                            }
                        }
                        return O(e, u, l), e.elm
                    }
                    r(t) && S(t)
                }
            }
            var yr = {
                create: xr,
                update: xr,
                destroy: function(t) {
                    xr(t, dr)
                }
            };

            function xr(t, e) {
                (t.data.directives || e.data.directives) && br(t, e)
            }

            function br(t, e) {
                var i, n, r, o = t === dr,
                    a = e === dr,
                    s = _r(t.data.directives, t.context),
                    l = _r(e.data.directives, e.context),
                    c = [],
                    h = [];
                for (i in l) n = s[i], r = l[i], n ? (r.oldValue = n.value, Sr(r, "update", e, t), r.def && r.def.componentUpdated && h.push(r)) : (Sr(r, "bind", e, t), r.def && r.def.inserted && c.push(r));
                if (c.length) {
                    var u = function() {
                        for (var i = 0; i < c.length; i++) Sr(c[i], "inserted", e, t)
                    };
                    o ? ye(e, "insert", u) : u()
                }
                if (h.length && ye(e, "postpatch", function() {
                        for (var i = 0; i < h.length; i++) Sr(h[i], "componentUpdated", e, t)
                    }), !o)
                    for (i in s) l[i] || Sr(s[i], "unbind", t, t, a)
            }
            var wr = Object.create(null);

            function _r(t, e) {
                var i, n, r = Object.create(null);
                if (!t) return r;
                for (i = 0; i < t.length; i++) n = t[i], n.modifiers || (n.modifiers = wr), r[kr(n)] = n, n.def = Xt(e.$options, "directives", n.name, !0);
                return r
            }

            function kr(t) {
                return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
            }

            function Sr(t, e, i, n, r) {
                var o = t.def && t.def[e];
                if (o) try {
                    o(i.elm, t, i, n, r)
                } catch (sa) {
                    Zt(sa, i.context, "directive " + t.name + " " + e + " hook")
                }
            }
            var Mr = [hr, yr];

            function Ar(t, e) {
                var i = e.componentOptions;
                if ((!r(i) || !1 !== i.Ctor.options.inheritAttrs) && (!n(t.data.attrs) || !n(e.data.attrs))) {
                    var o, a, s, l = e.elm,
                        c = t.data.attrs || {},
                        h = e.data.attrs || {};
                    for (o in r(h.__ob__) && (h = e.data.attrs = O({}, h)), h) a = h[o], s = c[o], s !== a && Cr(l, o, a);
                    for (o in (J || tt) && h.value !== c.value && Cr(l, "value", h.value), c) n(h[o]) && (En(o) ? l.removeAttributeNS(Ln, Dn(o)) : Pn(o) || l.removeAttribute(o))
                }
            }

            function Cr(t, e, i) {
                t.tagName.indexOf("-") > -1 ? Tr(t, e, i) : On(e) ? In(i) ? t.removeAttribute(e) : (i = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, i)) : Pn(e) ? t.setAttribute(e, In(i) || "false" === i ? "false" : "true") : En(e) ? In(i) ? t.removeAttributeNS(Ln, Dn(e)) : t.setAttributeNS(Ln, e, i) : Tr(t, e, i)
            }

            function Tr(t, e, i) {
                if (In(i)) t.removeAttribute(e);
                else {
                    if (J && !Q && ("TEXTAREA" === t.tagName || "INPUT" === t.tagName) && "placeholder" === e && !t.__ieph) {
                        var n = function(e) {
                            e.stopImmediatePropagation(), t.removeEventListener("input", n)
                        };
                        t.addEventListener("input", n), t.__ieph = !0
                    }
                    t.setAttribute(e, i)
                }
            }
            var Pr = {
                create: Ar,
                update: Ar
            };

            function Or(t, e) {
                var i = e.elm,
                    o = e.data,
                    a = t.data;
                if (!(n(o.staticClass) && n(o.class) && (n(a) || n(a.staticClass) && n(a.class)))) {
                    var s = zn(e),
                        l = i._transitionClasses;
                    r(l) && (s = Rn(s, jn(l))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s)
                }
            }
            var Lr, Er = {
                    create: Or,
                    update: Or
                },
                Dr = "__r",
                Ir = "__c";

            function zr(t) {
                if (r(t[Dr])) {
                    var e = J ? "change" : "input";
                    t[e] = [].concat(t[Dr], t[e] || []), delete t[Dr]
                }
                r(t[Ir]) && (t.change = [].concat(t[Ir], t.change || []), delete t[Ir])
            }

            function Br(t, e, i) {
                var n = Lr;
                return function r() {
                    var o = e.apply(null, arguments);
                    null !== o && Rr(t, r, i, n)
                }
            }

            function Nr(t, e, i, n) {
                e = ce(e), Lr.addEventListener(t, e, nt ? {
                    capture: i,
                    passive: n
                } : i)
            }

            function Rr(t, e, i, n) {
                (n || Lr).removeEventListener(t, e._withTask || e, i)
            }

            function jr(t, e) {
                if (!n(t.data.on) || !n(e.data.on)) {
                    var i = e.data.on || {},
                        r = t.data.on || {};
                    Lr = e.elm, zr(i), ve(i, r, Nr, Rr, Br, e.context), Lr = void 0
                }
            }
            var Fr = {
                create: jr,
                update: jr
            };

            function Hr(t, e) {
                if (!n(t.data.domProps) || !n(e.data.domProps)) {
                    var i, o, a = e.elm,
                        s = t.data.domProps || {},
                        l = e.data.domProps || {};
                    for (i in r(l.__ob__) && (l = e.data.domProps = O({}, l)), s) n(l[i]) && (a[i] = "");
                    for (i in l) {
                        if (o = l[i], "textContent" === i || "innerHTML" === i) {
                            if (e.children && (e.children.length = 0), o === s[i]) continue;
                            1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                        }
                        if ("value" === i) {
                            a._value = o;
                            var c = n(o) ? "" : String(o);
                            Gr(a, c) && (a.value = c)
                        } else a[i] = o
                    }
                }
            }

            function Gr(t, e) {
                return !t.composing && ("OPTION" === t.tagName || Wr(t, e) || $r(t, e))
            }

            function Wr(t, e) {
                var i = !0;
                try {
                    i = document.activeElement !== t
                } catch (sa) {}
                return i && t.value !== e
            }

            function $r(t, e) {
                var i = t.value,
                    n = t._vModifiers;
                if (r(n)) {
                    if (n.lazy) return !1;
                    if (n.number) return f(i) !== f(e);
                    if (n.trim) return i.trim() !== e.trim()
                }
                return i !== e
            }
            var Xr = {
                    create: Hr,
                    update: Hr
                },
                Yr = b(function(t) {
                    var e = {},
                        i = /;(?![^(]*\))/g,
                        n = /:(.+)/;
                    return t.split(i).forEach(function(t) {
                        if (t) {
                            var i = t.split(n);
                            i.length > 1 && (e[i[0].trim()] = i[1].trim())
                        }
                    }), e
                });

            function Vr(t) {
                var e = Ur(t.style);
                return t.staticStyle ? O(t.staticStyle, e) : e
            }

            function Ur(t) {
                return Array.isArray(t) ? L(t) : "string" === typeof t ? Yr(t) : t
            }

            function Kr(t, e) {
                var i, n = {};
                if (e) {
                    var r = t;
                    while (r.componentInstance) r = r.componentInstance._vnode, r && r.data && (i = Vr(r.data)) && O(n, i)
                }(i = Vr(t.data)) && O(n, i);
                var o = t;
                while (o = o.parent) o.data && (i = Vr(o.data)) && O(n, i);
                return n
            }
            var qr, Zr = /^--/,
                Jr = /\s*!important$/,
                Qr = function(t, e, i) {
                    if (Zr.test(e)) t.style.setProperty(e, i);
                    else if (Jr.test(i)) t.style.setProperty(e, i.replace(Jr, ""), "important");
                    else {
                        var n = eo(e);
                        if (Array.isArray(i))
                            for (var r = 0, o = i.length; r < o; r++) t.style[n] = i[r];
                        else t.style[n] = i
                    }
                },
                to = ["Webkit", "Moz", "ms"],
                eo = b(function(t) {
                    if (qr = qr || document.createElement("div").style, t = _(t), "filter" !== t && t in qr) return t;
                    for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < to.length; i++) {
                        var n = to[i] + e;
                        if (n in qr) return n
                    }
                });

            function io(t, e) {
                var i = e.data,
                    o = t.data;
                if (!(n(i.staticStyle) && n(i.style) && n(o.staticStyle) && n(o.style))) {
                    var a, s, l = e.elm,
                        c = o.staticStyle,
                        h = o.normalizedStyle || o.style || {},
                        u = c || h,
                        d = Ur(e.data.style) || {};
                    e.data.normalizedStyle = r(d.__ob__) ? O({}, d) : d;
                    var p = Kr(e, !0);
                    for (s in u) n(p[s]) && Qr(l, s, "");
                    for (s in p) a = p[s], a !== u[s] && Qr(l, s, null == a ? "" : a)
                }
            }
            var no = {
                    create: io,
                    update: io
                },
                ro = /\s+/;

            function oo(t, e) {
                if (e && (e = e.trim()))
                    if (t.classList) e.indexOf(" ") > -1 ? e.split(ro).forEach(function(e) {
                        return t.classList.add(e)
                    }) : t.classList.add(e);
                    else {
                        var i = " " + (t.getAttribute("class") || "") + " ";
                        i.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (i + e).trim())
                    }
            }

            function ao(t, e) {
                if (e && (e = e.trim()))
                    if (t.classList) e.indexOf(" ") > -1 ? e.split(ro).forEach(function(e) {
                        return t.classList.remove(e)
                    }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
                    else {
                        var i = " " + (t.getAttribute("class") || "") + " ",
                            n = " " + e + " ";
                        while (i.indexOf(n) >= 0) i = i.replace(n, " ");
                        i = i.trim(), i ? t.setAttribute("class", i) : t.removeAttribute("class")
                    }
            }

            function so(t) {
                if (t) {
                    if ("object" === typeof t) {
                        var e = {};
                        return !1 !== t.css && O(e, lo(t.name || "v")), O(e, t), e
                    }
                    return "string" === typeof t ? lo(t) : void 0
                }
            }
            var lo = b(function(t) {
                    return {
                        enterClass: t + "-enter",
                        enterToClass: t + "-enter-to",
                        enterActiveClass: t + "-enter-active",
                        leaveClass: t + "-leave",
                        leaveToClass: t + "-leave-to",
                        leaveActiveClass: t + "-leave-active"
                    }
                }),
                co = U && !Q,
                ho = "transition",
                uo = "animation",
                po = "transition",
                fo = "transitionend",
                go = "animation",
                mo = "animationend";
            co && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (po = "WebkitTransition", fo = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (go = "WebkitAnimation", mo = "webkitAnimationEnd"));
            var vo = U ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
                return t()
            };

            function yo(t) {
                vo(function() {
                    vo(t)
                })
            }

            function xo(t, e) {
                var i = t._transitionClasses || (t._transitionClasses = []);
                i.indexOf(e) < 0 && (i.push(e), oo(t, e))
            }

            function bo(t, e) {
                t._transitionClasses && v(t._transitionClasses, e), ao(t, e)
            }

            function wo(t, e, i) {
                var n = ko(t, e),
                    r = n.type,
                    o = n.timeout,
                    a = n.propCount;
                if (!r) return i();
                var s = r === ho ? fo : mo,
                    l = 0,
                    c = function() {
                        t.removeEventListener(s, h), i()
                    },
                    h = function(e) {
                        e.target === t && ++l >= a && c()
                    };
                setTimeout(function() {
                    l < a && c()
                }, o + 1), t.addEventListener(s, h)
            }
            var _o = /\b(transform|all)(,|$)/;

            function ko(t, e) {
                var i, n = window.getComputedStyle(t),
                    r = (n[po + "Delay"] || "").split(", "),
                    o = (n[po + "Duration"] || "").split(", "),
                    a = So(r, o),
                    s = (n[go + "Delay"] || "").split(", "),
                    l = (n[go + "Duration"] || "").split(", "),
                    c = So(s, l),
                    h = 0,
                    u = 0;
                e === ho ? a > 0 && (i = ho, h = a, u = o.length) : e === uo ? c > 0 && (i = uo, h = c, u = l.length) : (h = Math.max(a, c), i = h > 0 ? a > c ? ho : uo : null, u = i ? i === ho ? o.length : l.length : 0);
                var d = i === ho && _o.test(n[po + "Property"]);
                return {
                    type: i,
                    timeout: h,
                    propCount: u,
                    hasTransform: d
                }
            }

            function So(t, e) {
                while (t.length < e.length) t = t.concat(t);
                return Math.max.apply(null, e.map(function(e, i) {
                    return Mo(e) + Mo(t[i])
                }))
            }

            function Mo(t) {
                return 1e3 * Number(t.slice(0, -1).replace(",", "."))
            }

            function Ao(t, e) {
                var i = t.elm;
                r(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());
                var o = so(t.data.transition);
                if (!n(o) && !r(i._enterCb) && 1 === i.nodeType) {
                    var a = o.css,
                        s = o.type,
                        c = o.enterClass,
                        h = o.enterToClass,
                        u = o.enterActiveClass,
                        d = o.appearClass,
                        p = o.appearToClass,
                        g = o.appearActiveClass,
                        m = o.beforeEnter,
                        v = o.enter,
                        y = o.afterEnter,
                        x = o.enterCancelled,
                        b = o.beforeAppear,
                        w = o.appear,
                        _ = o.afterAppear,
                        k = o.appearCancelled,
                        S = o.duration,
                        M = je,
                        A = je.$vnode;
                    while (A && A.parent) A = A.parent, M = A.context;
                    var C = !M._isMounted || !t.isRootInsert;
                    if (!C || w || "" === w) {
                        var T = C && d ? d : c,
                            P = C && g ? g : u,
                            O = C && p ? p : h,
                            L = C && b || m,
                            E = C && "function" === typeof w ? w : v,
                            D = C && _ || y,
                            I = C && k || x,
                            z = f(l(S) ? S.enter : S);
                        0;
                        var B = !1 !== a && !Q,
                            R = Po(E),
                            j = i._enterCb = N(function() {
                                B && (bo(i, O), bo(i, P)), j.cancelled ? (B && bo(i, T), I && I(i)) : D && D(i), i._enterCb = null
                            });
                        t.data.show || ye(t, "insert", function() {
                            var e = i.parentNode,
                                n = e && e._pending && e._pending[t.key];
                            n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(), E && E(i, j)
                        }), L && L(i), B && (xo(i, T), xo(i, P), yo(function() {
                            bo(i, T), j.cancelled || (xo(i, O), R || (To(z) ? setTimeout(j, z) : wo(i, s, j)))
                        })), t.data.show && (e && e(), E && E(i, j)), B || R || j()
                    }
                }
            }

            function Co(t, e) {
                var i = t.elm;
                r(i._enterCb) && (i._enterCb.cancelled = !0, i._enterCb());
                var o = so(t.data.transition);
                if (n(o) || 1 !== i.nodeType) return e();
                if (!r(i._leaveCb)) {
                    var a = o.css,
                        s = o.type,
                        c = o.leaveClass,
                        h = o.leaveToClass,
                        u = o.leaveActiveClass,
                        d = o.beforeLeave,
                        p = o.leave,
                        g = o.afterLeave,
                        m = o.leaveCancelled,
                        v = o.delayLeave,
                        y = o.duration,
                        x = !1 !== a && !Q,
                        b = Po(p),
                        w = f(l(y) ? y.leave : y);
                    0;
                    var _ = i._leaveCb = N(function() {
                        i.parentNode && i.parentNode._pending && (i.parentNode._pending[t.key] = null), x && (bo(i, h), bo(i, u)), _.cancelled ? (x && bo(i, c), m && m(i)) : (e(), g && g(i)), i._leaveCb = null
                    });
                    v ? v(k) : k()
                }

                function k() {
                    _.cancelled || (!t.data.show && i.parentNode && ((i.parentNode._pending || (i.parentNode._pending = {}))[t.key] = t), d && d(i), x && (xo(i, c), xo(i, u), yo(function() {
                        bo(i, c), _.cancelled || (xo(i, h), b || (To(w) ? setTimeout(_, w) : wo(i, s, _)))
                    })), p && p(i, _), x || b || _())
                }
            }

            function To(t) {
                return "number" === typeof t && !isNaN(t)
            }

            function Po(t) {
                if (n(t)) return !1;
                var e = t.fns;
                return r(e) ? Po(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1
            }

            function Oo(t, e) {
                !0 !== e.data.show && Ao(e)
            }
            var Lo = U ? {
                    create: Oo,
                    activate: Oo,
                    remove: function(t, e) {
                        !0 !== t.data.show ? Co(t, e) : e()
                    }
                } : {},
                Eo = [Pr, Er, Fr, Xr, no, Lo],
                Do = Eo.concat(Mr),
                Io = vr({
                    nodeOps: cr,
                    modules: Do
                });
            Q && document.addEventListener("selectionchange", function() {
                var t = document.activeElement;
                t && t.vmodel && Go(t, "input")
            });
            var zo = {
                inserted: function(t, e, i, n) {
                    "select" === i.tag ? (n.elm && !n.elm._vOptions ? ye(i, "postpatch", function() {
                        zo.componentUpdated(t, e, i)
                    }) : Bo(t, e, i.context), t._vOptions = [].map.call(t.options, jo)) : ("textarea" === i.tag || Kn(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", Fo), t.addEventListener("compositionend", Ho), t.addEventListener("change", Ho), Q && (t.vmodel = !0)))
                },
                componentUpdated: function(t, e, i) {
                    if ("select" === i.tag) {
                        Bo(t, e, i.context);
                        var n = t._vOptions,
                            r = t._vOptions = [].map.call(t.options, jo);
                        if (r.some(function(t, e) {
                                return !z(t, n[e])
                            })) {
                            var o = t.multiple ? e.value.some(function(t) {
                                return Ro(t, r)
                            }) : e.value !== e.oldValue && Ro(e.value, r);
                            o && Go(t, "change")
                        }
                    }
                }
            };

            function Bo(t, e, i) {
                No(t, e, i), (J || tt) && setTimeout(function() {
                    No(t, e, i)
                }, 0)
            }

            function No(t, e, i) {
                var n = e.value,
                    r = t.multiple;
                if (!r || Array.isArray(n)) {
                    for (var o, a, s = 0, l = t.options.length; s < l; s++)
                        if (a = t.options[s], r) o = B(n, jo(a)) > -1, a.selected !== o && (a.selected = o);
                        else if (z(jo(a), n)) return void(t.selectedIndex !== s && (t.selectedIndex = s));
                    r || (t.selectedIndex = -1)
                }
            }

            function Ro(t, e) {
                return e.every(function(e) {
                    return !z(e, t)
                })
            }

            function jo(t) {
                return "_value" in t ? t._value : t.value
            }

            function Fo(t) {
                t.target.composing = !0
            }

            function Ho(t) {
                t.target.composing && (t.target.composing = !1, Go(t.target, "input"))
            }

            function Go(t, e) {
                var i = document.createEvent("HTMLEvents");
                i.initEvent(e, !0, !0), t.dispatchEvent(i)
            }

            function Wo(t) {
                return !t.componentInstance || t.data && t.data.transition ? t : Wo(t.componentInstance._vnode)
            }
            var $o = {
                    bind: function(t, e, i) {
                        var n = e.value;
                        i = Wo(i);
                        var r = i.data && i.data.transition,
                            o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                        n && r ? (i.data.show = !0, Ao(i, function() {
                            t.style.display = o
                        })) : t.style.display = n ? o : "none"
                    },
                    update: function(t, e, i) {
                        var n = e.value,
                            r = e.oldValue;
                        if (!n !== !r) {
                            i = Wo(i);
                            var o = i.data && i.data.transition;
                            o ? (i.data.show = !0, n ? Ao(i, function() {
                                t.style.display = t.__vOriginalDisplay
                            }) : Co(i, function() {
                                t.style.display = "none"
                            })) : t.style.display = n ? t.__vOriginalDisplay : "none"
                        }
                    },
                    unbind: function(t, e, i, n, r) {
                        r || (t.style.display = t.__vOriginalDisplay)
                    }
                },
                Xo = {
                    model: zo,
                    show: $o
                },
                Yo = {
                    name: String,
                    appear: Boolean,
                    css: Boolean,
                    mode: String,
                    type: String,
                    enterClass: String,
                    leaveClass: String,
                    enterToClass: String,
                    leaveToClass: String,
                    enterActiveClass: String,
                    leaveActiveClass: String,
                    appearClass: String,
                    appearActiveClass: String,
                    appearToClass: String,
                    duration: [Number, String, Object]
                };

            function Vo(t) {
                var e = t && t.componentOptions;
                return e && e.Ctor.options.abstract ? Vo(Pe(e.children)) : t
            }

            function Uo(t) {
                var e = {},
                    i = t.$options;
                for (var n in i.propsData) e[n] = t[n];
                var r = i._parentListeners;
                for (var o in r) e[_(o)] = r[o];
                return e
            }

            function Ko(t, e) {
                if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
                    props: e.componentOptions.propsData
                })
            }

            function qo(t) {
                while (t = t.parent)
                    if (t.data.transition) return !0
            }

            function Zo(t, e) {
                return e.key === t.key && e.tag === t.tag
            }
            var Jo = function(t) {
                    return t.tag || Te(t)
                },
                Qo = function(t) {
                    return "show" === t.name
                },
                ta = {
                    name: "transition",
                    props: Yo,
                    abstract: !0,
                    render: function(t) {
                        var e = this,
                            i = this.$slots.default;
                        if (i && (i = i.filter(Jo), i.length)) {
                            0;
                            var n = this.mode;
                            0;
                            var r = i[0];
                            if (qo(this.$vnode)) return r;
                            var o = Vo(r);
                            if (!o) return r;
                            if (this._leaving) return Ko(t, r);
                            var a = "__transition-" + this._uid + "-";
                            o.key = null == o.key ? o.isComment ? a + "comment" : a + o.tag : s(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key;
                            var l = (o.data || (o.data = {})).transition = Uo(this),
                                c = this._vnode,
                                h = Vo(c);
                            if (o.data.directives && o.data.directives.some(Qo) && (o.data.show = !0), h && h.data && !Zo(o, h) && !Te(h) && (!h.componentInstance || !h.componentInstance._vnode.isComment)) {
                                var u = h.data.transition = O({}, l);
                                if ("out-in" === n) return this._leaving = !0, ye(u, "afterLeave", function() {
                                    e._leaving = !1, e.$forceUpdate()
                                }), Ko(t, r);
                                if ("in-out" === n) {
                                    if (Te(o)) return c;
                                    var d, p = function() {
                                        d()
                                    };
                                    ye(l, "afterEnter", p), ye(l, "enterCancelled", p), ye(u, "delayLeave", function(t) {
                                        d = t
                                    })
                                }
                            }
                            return r
                        }
                    }
                },
                ea = O({
                    tag: String,
                    moveClass: String
                }, Yo);
            delete ea.mode;
            var ia = {
                props: ea,
                beforeMount: function() {
                    var t = this,
                        e = this._update;
                    this._update = function(i, n) {
                        var r = Fe(t);
                        t.__patch__(t._vnode, t.kept, !1, !0), t._vnode = t.kept, r(), e.call(t, i, n)
                    }
                },
                render: function(t) {
                    for (var e = this.tag || this.$vnode.data.tag || "span", i = Object.create(null), n = this.prevChildren = this.children, r = this.$slots.default || [], o = this.children = [], a = Uo(this), s = 0; s < r.length; s++) {
                        var l = r[s];
                        if (l.tag)
                            if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) o.push(l), i[l.key] = l, (l.data || (l.data = {})).transition = a;
                            else;
                    }
                    if (n) {
                        for (var c = [], h = [], u = 0; u < n.length; u++) {
                            var d = n[u];
                            d.data.transition = a, d.data.pos = d.elm.getBoundingClientRect(), i[d.key] ? c.push(d) : h.push(d)
                        }
                        this.kept = t(e, null, c), this.removed = h
                    }
                    return t(e, null, o)
                },
                updated: function() {
                    var t = this.prevChildren,
                        e = this.moveClass || (this.name || "v") + "-move";
                    t.length && this.hasMove(t[0].elm, e) && (t.forEach(na), t.forEach(ra), t.forEach(oa), this._reflow = document.body.offsetHeight, t.forEach(function(t) {
                        if (t.data.moved) {
                            var i = t.elm,
                                n = i.style;
                            xo(i, e), n.transform = n.WebkitTransform = n.transitionDuration = "", i.addEventListener(fo, i._moveCb = function t(n) {
                                n && n.target !== i || n && !/transform$/.test(n.propertyName) || (i.removeEventListener(fo, t), i._moveCb = null, bo(i, e))
                            })
                        }
                    }))
                },
                methods: {
                    hasMove: function(t, e) {
                        if (!co) return !1;
                        if (this._hasMove) return this._hasMove;
                        var i = t.cloneNode();
                        t._transitionClasses && t._transitionClasses.forEach(function(t) {
                            ao(i, t)
                        }), oo(i, e), i.style.display = "none", this.$el.appendChild(i);
                        var n = ko(i);
                        return this.$el.removeChild(i), this._hasMove = n.hasTransform
                    }
                }
            };

            function na(t) {
                t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
            }

            function ra(t) {
                t.data.newPos = t.elm.getBoundingClientRect()
            }

            function oa(t) {
                var e = t.data.pos,
                    i = t.data.newPos,
                    n = e.left - i.left,
                    r = e.top - i.top;
                if (n || r) {
                    t.data.moved = !0;
                    var o = t.elm.style;
                    o.transform = o.WebkitTransform = "translate(" + n + "px," + r + "px)", o.transitionDuration = "0s"
                }
            }
            var aa = {
                Transition: ta,
                TransitionGroup: ia
            };
            un.config.mustUseProp = Tn, un.config.isReservedTag = Xn, un.config.isReservedAttr = An, un.config.getTagNamespace = Yn, un.config.isUnknownElement = Un, O(un.options.directives, Xo), O(un.options.components, aa), un.prototype.__patch__ = U ? Io : E, un.prototype.$mount = function(t, e) {
                return t = t && U ? qn(t) : void 0, We(this, t, e)
            }, U && setTimeout(function() {
                H.devtools && at && at.emit("init", un)
            }, 0), e["a"] = un
        }).call(this, i("c8ba"))
    },
    "2b4c": function(t, e, i) {
        var n = i("5537")("wks"),
            r = i("ca5a"),
            o = i("7726").Symbol,
            a = "function" == typeof o,
            s = t.exports = function(t) {
                return n[t] || (n[t] = a && o[t] || (a ? o : r)("Symbol." + t))
            };
        s.store = n
    },
    "2d00": function(t, e) {
        t.exports = !1
    },
    "2d95": function(t, e) {
        var i = {}.toString;
        t.exports = function(t) {
            return i.call(t).slice(8, -1)
        }
    },
    "2ea1": function(t, e, i) {
        var n = i("6f8a");
        t.exports = function(t, e) {
            if (!n(t)) return t;
            var i, r;
            if (e && "function" == typeof(i = t.toString) && !n(r = i.call(t))) return r;
            if ("function" == typeof(i = t.valueOf) && !n(r = i.call(t))) return r;
            if (!e && "function" == typeof(i = t.toString) && !n(r = i.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    "2f17": function(t, e, i) {
        "use strict";
        var n = Object.prototype.toString,
            r = i("4de8"),
            o = i("21d0"),
            a = {
                "[[DefaultValue]]": function(t) {
                    var e;
                    if (e = arguments.length > 1 ? arguments[1] : "[object Date]" === n.call(t) ? String : Number, e === String || e === Number) {
                        var i, a, s = e === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                        for (a = 0; a < s.length; ++a)
                            if (o(t[s[a]]) && (i = t[s[a]](), r(i))) return i;
                        throw new TypeError("No default value")
                    }
                    throw new TypeError("invalid [[DefaultValue]] hint supplied")
                }
            };
        t.exports = function(t) {
            return r(t) ? t : arguments.length > 1 ? a["[[DefaultValue]]"](t, arguments[1]) : a["[[DefaultValue]]"](t)
        }
    },
    "302f": function(t, e, i) {
        var n = i("0f89"),
            r = i("f2fe"),
            o = i("1b55")("species");
        t.exports = function(t, e) {
            var i, a = n(t).constructor;
            return void 0 === a || void 0 == (i = n(a)[o]) ? e : r(i)
        }
    },
    "31c2": function(t, e) {
        e.f = Object.getOwnPropertySymbols
    },
    "31f4": function(t, e) {
        t.exports = function(t, e, i) {
            var n = void 0 === i;
            switch (e.length) {
                case 0:
                    return n ? t() : t.call(i);
                case 1:
                    return n ? t(e[0]) : t.call(i, e[0]);
                case 2:
                    return n ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
                case 3:
                    return n ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
                case 4:
                    return n ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3])
            }
            return t.apply(i, e)
        }
    },
    "32e9": function(t, e, i) {
        var n = i("86cc"),
            r = i("4630");
        t.exports = i("9e1e") ? function(t, e, i) {
            return n.f(t, e, r(1, i))
        } : function(t, e, i) {
            return t[e] = i, t
        }
    },
    "33a4": function(t, e, i) {
        var n = i("84f2"),
            r = i("2b4c")("iterator"),
            o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (n.Array === t || o[r] === t)
        }
    },
    3504: function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
            },
            coin_price_chart_widget: {
                "24h_high": "24å°æ—¶é«˜",
                "24h_low": "24å°æ—¶ä½Ž",
                view_price_chart: "æµè§ˆä»·æ ¼èµ°åŠ¿å›¾",
                powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
            },
            coin_price_marquee_widget: {
                powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
            },
            coin_list_widget: {
                powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
            },
            beam_widget: {
                powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
            },
            coin_ticker_widget: {
                "24h_high": "24å°æ—¶é«˜",
                "24h_low": "24å°æ—¶ä½Ž",
                view_price_chart: "æµè§ˆä»·æ ¼èµ°åŠ¿å›¾",
                powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
            },
            coin_converter_widget: {
                view_price_chart: "æµè§ˆä»·æ ¼èµ°åŠ¿å›¾",
                powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
            },
            coin_heatmap_widget: {
                title: "åŠ å¯†è´§å¸æ ‘å›¾",
                subtitle: "ï¼ˆå¸‚å€¼æŽ’åå‰%{top}ï¼‰",
                powered_by: "ç”±%{name_start}%{name}%{name_end}æŽ¨åŠ¨"
            }
        }
    },
    "36dc": function(t, e, i) {
        var n = i("da3c"),
            r = i("df0a").set,
            o = n.MutationObserver || n.WebKitMutationObserver,
            a = n.process,
            s = n.Promise,
            l = "process" == i("6e1f")(a);
        t.exports = function() {
            var t, e, i, c = function() {
                var n, r;
                l && (n = a.domain) && n.exit();
                while (t) {
                    r = t.fn, t = t.next;
                    try {
                        r()
                    } catch (o) {
                        throw t ? i() : e = void 0, o
                    }
                }
                e = void 0, n && n.enter()
            };
            if (l) i = function() {
                a.nextTick(c)
            };
            else if (!o || n.navigator && n.navigator.standalone)
                if (s && s.resolve) {
                    var h = s.resolve(void 0);
                    i = function() {
                        h.then(c)
                    }
                } else i = function() {
                    r.call(n, c)
                };
            else {
                var u = !0,
                    d = document.createTextNode("");
                new o(c).observe(d, {
                    characterData: !0
                }), i = function() {
                    d.data = u = !u
                }
            }
            return function(n) {
                var r = {
                    fn: n,
                    next: void 0
                };
                e && (e.next = r), t || (t = r, i()), e = r
            }
        }
    },
    3846: function(t, e, i) {
        i("9e1e") && "g" != /./g.flags && i("86cc").f(RegExp.prototype, "flags", {
            configurable: !0,
            get: i("0bfb")
        })
    },
    "38fd": function(t, e, i) {
        var n = i("69a8"),
            r = i("4bf8"),
            o = i("613b")("IE_PROTO"),
            a = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = r(t), n(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
        }
    },
    3904: function(t, e, i) {
        var n = i("8ce0");
        t.exports = function(t, e, i) {
            for (var r in e) i && t[r] ? t[r] = e[r] : n(t, r, e[r]);
            return t
        }
    },
    "390b": function(t, e, i) {
        e = t.exports = i("2350")(!1), e.i(i("51e3"), ""), e.push([t.i, ".cg-container {\n  font-family: sans-serif;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n\n  color: #fff;\n  line-height: 1.25;\n  font-size: 12px;\n\n  min-width: 250px;\n  box-sizing: border-box;\n}\n.cg-container[data-loading] .cg-widget {\n  display: none;\n}\n.cg-active-button rect {\n  fill: #4b8800 !important;\n}\n.cg-active-button text {\n  fill: white !important;\n}\n", ""])
    },
    "3adc": function(t, e, i) {
        var n = i("0f89"),
            r = i("a47f"),
            o = i("2ea1"),
            a = Object.defineProperty;
        e.f = i("7d95") ? Object.defineProperty : function(t, e, i) {
            if (n(t), e = o(e, !0), n(i), r) try {
                return a(t, e, i)
            } catch (s) {}
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
            return "value" in i && (t[e] = i.value), t
        }
    },
    "41a0": function(t, e, i) {
        "use strict";
        var n = i("2aeb"),
            r = i("4630"),
            o = i("7f20"),
            a = {};
        i("32e9")(a, i("2b4c")("iterator"), function() {
            return this
        }), t.exports = function(t, e, i) {
            t.prototype = n(a, {
                next: r(1, i)
            }), o(t, e + " Iterator")
        }
    },
    "436c": function(t, e, i) {
        var n = i("1b55")("iterator"),
            r = !1;
        try {
            var o = [7][n]();
            o["return"] = function() {
                r = !0
            }, Array.from(o, function() {
                throw 2
            })
        } catch (a) {}
        t.exports = function(t, e) {
            if (!e && !r) return !1;
            var i = !1;
            try {
                var o = [7],
                    s = o[n]();
                s.next = function() {
                    return {
                        done: i = !0
                    }
                }, o[n] = function() {
                    return s
                }, t(o)
            } catch (a) {}
            return i
        }
    },
    "43c8": function(t, e) {
        var i = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return i.call(t, e)
        }
    },
    4588: function(t, e) {
        var i = Math.ceil,
            n = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
        }
    },
    4630: function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    "4a59": function(t, e, i) {
        var n = i("9b43"),
            r = i("1fa8"),
            o = i("33a4"),
            a = i("cb7c"),
            s = i("9def"),
            l = i("27ee"),
            c = {},
            h = {};
        e = t.exports = function(t, e, i, u, d) {
            var p, f, g, m, v = d ? function() {
                    return t
                } : l(t),
                y = n(i, u, e ? 2 : 1),
                x = 0;
            if ("function" != typeof v) throw TypeError(t + " is not iterable!");
            if (o(v)) {
                for (p = s(t.length); p > x; x++)
                    if (m = e ? y(a(f = t[x])[0], f[1]) : y(t[x]), m === c || m === h) return m
            } else
                for (g = v.call(t); !(f = g.next()).done;)
                    if (m = r(g, y, f.value, e), m === c || m === h) return m
        };
        e.BREAK = c, e.RETURN = h
    },
    "4bf8": function(t, e, i) {
        var n = i("be13");
        t.exports = function(t) {
            return Object(n(t))
        }
    },
    "4de8": function(t, e) {
        t.exports = function(t) {
            return null === t || "function" !== typeof t && "object" !== typeof t
        }
    },
    5176: function(t, e, i) {
        t.exports = i("81ee")
    },
    "51e3": function(t, e, i) {
        e = t.exports = i("2350")(!1), e.push([t.i, ".cg-default {\n  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Helvetica, Arial, sans-serif,\n    apple color emoji, segoe ui emoji, segoe ui symbol;\n}\n.cg-bold {\n  font-weight: 600;\n}\n.cg-center {\n  text-align: center;\n}\n.cg-primary-color {\n  color: #8dc647 !important;\n}\n.cg-primary-color-dark {\n  color: #4b8800 !important;\n}\n.cg-red-color-dark {\n  color: #c2220d !important;\n}\n.cg-red-color {\n  color: #ff614d !important;\n}\n.cg-2xs {\n  font-size: 8.8px; /* 0.55rem; */\n}\n.cg-xs {\n  font-size: 10.4px; /* 0.65rem */\n}\n.cg-sm {\n  font-size: 12.8px; /* 0.8rem */\n}\n.cg-normal {\n  font-size: 13.6px; /* 0.85rem */\n}\n.cg-base {\n  font-size: 16px; /* 16px */\n}\n.cg-medium {\n  font-size: 19.2px; /* 1.2rem */\n}\n.cg-lg {\n  font-size: 24px; /* 1.5rem */\n}\n.cg-xl {\n  font-size: 30.4px; /* 1.9rem */\n}\n.cg-cap {\n  text-transform: capitalize;\n}\n.cg-no-underline {\n  text-decoration: none;\n}\n.cg-nowrap {\n  white-space: nowrap;\n}\n\n.cg-m-0 {\n  margin: 0;\n}\n.cg-m-1 {\n  margin: 4px;\n}\n.cg-m-2 {\n  margin: 8px;\n}\n.cg-mt-1 {\n  margin-top: 4px;\n}\n.cg-mb-1 {\n  margin-bottom: 4px;\n}\n.cg-ml-1 {\n  margin-left: 4px;\n}\n.cg-mr-1 {\n  margin-right: 4px;\n}\n.cg-mt-2 {\n  margin-top: 8px;\n}\n.cg-ml-2 {\n  margin-left: 8px;\n}\n.cg-mr-2 {\n  margin-right: 8px;\n}\n.cg-mb-2 {\n  margin-bottom: 8px;\n}\n.cg-mx-1 {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.cg-my-1 {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n.cg-mx-2 {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n.cg-my-2 {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.cg-my-5 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.cg-p-1 {\n  padding: 4px;\n}\n.cg-p-2 {\n  padding: 8px;\n}\n.cg-p-3 {\n  padding: 12px;\n}\n.cg-p-4 {\n  padding: 16px;\n}\n.cg-p-5 {\n  padding: 20px;\n}\n.cg-pt-1 {\n  padding-top: 4px;\n}\n.cg-pb-1 {\n  padding-bottom: 4px;\n}\n.cg-pt-2 {\n  padding-top: 8px;\n}\n.cg-pb-2 {\n  padding-bottom: 8px;\n}\n.cg-pt-3 {\n  padding-top: 12px;\n}\n.cg-pb-3 {\n  padding-bottom: 12px;\n}\n.cg-py-1 {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.cg-px-1 {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.cg-py-2 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.cg-px-2 {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.cg-py-3 {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.cg-px-3 {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.cg-px-4 {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.cg-py-4 {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.cg-py-5 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.cg-pr-1 {\n  padding-right: 4px;\n}\n.cg-pr-2 {\n  padding-right: 8px;\n}\n\n.cg-flex {\n  display: flex !important;\n}\n.cg-flex-row {\n  flex-direction: row;\n}\n.cg-flex-column {\n  flex-direction: column;\n}\n\n.cg-items-stretch {\n  align-items: flex-stretch;\n}\n.cg-items-start {\n  align-items: flex-start;\n}\n.cg-items-center {\n  align-items: center;\n}\n.cg-items-end {\n  align-items: flex-end;\n}\n.cg-items-baseline {\n  align-items: baseline;\n}\n\n.cg-justify-start {\n  justify-content: flex-start;\n}\n.cg-justify-center {\n  justify-content: center;\n}\n.cg-justify-end {\n  justify-content: flex-end;\n}\n.cg-justify-between {\n  justify-content: space-between;\n}\n.cg-justify-around {\n  justify-content: space-around;\n}\n\n.cg-self-auto {\n  align-self: auto;\n}\n.cg-self-start {\n  align-self: flex-start;\n}\n.cg-self-center {\n  align-self: center;\n}\n.cg-self-end {\n  align-self: flex-end;\n}\n.cg-self-stretch {\n  align-self: stretch;\n}\n\n.cg-relative {\n  position: relative;\n}\n.cg-absolute {\n  position: absolute;\n}\n.cg-block {\n  display: block;\n}\n", ""])
    },
    "520a": function(t, e, i) {
        "use strict";
        var n = i("0bfb"),
            r = RegExp.prototype.exec,
            o = String.prototype.replace,
            a = r,
            s = "lastIndex",
            l = function() {
                var t = /a/,
                    e = /b*/g;
                return r.call(t, "a"), r.call(e, "a"), 0 !== t[s] || 0 !== e[s]
            }(),
            c = void 0 !== /()??/.exec("")[1],
            h = l || c;
        h && (a = function(t) {
            var e, i, a, h, u = this;
            return c && (i = new RegExp("^" + u.source + "$(?!\\s)", n.call(u))), l && (e = u[s]), a = r.call(u, t), l && a && (u[s] = u.global ? a.index + a[0].length : e), c && a && a.length > 1 && o.call(a[0], i, function() {
                for (h = 1; h < arguments.length - 2; h++) void 0 === arguments[h] && (a[h] = void 0)
            }), a
        }), t.exports = a
    },
    "52a7": function(t, e) {
        e.f = {}.propertyIsEnumerable
    },
    5309: function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return n
        });
        var n = {
            customElement: {
                src: "https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.11.1/document-register-element.js",
                integrity: "sha384-zA6V4chYFGgsezh1yAQzus2VNUcyTyGI3NO7L5pEiE8AOXv3EC+OS2C//72VU6Mg"
            },
            fetch: {
                src: "https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.4/fetch.min.js",
                integrity: "sha384-2kkuqwSCFze1y7UcAejUH6wt2MpQ4naa++zWP0SxyUC/jnwq91SAfe14RAruXtnV"
            },
            cssvar: {
                src: "https://cdn.jsdelivr.net/npm/css-vars-ponyfill@1.16.2",
                integrity: "sha384-4sVVstGAX5EEHQzxsff05CedY46UVjXOMcU5elu94vztG5bO2VSAq69D1ZPGPL5E"
            }
        }
    },
    "551c": function(t, e, i) {
        "use strict";
        var n, r, o, a, s = i("2d00"),
            l = i("7726"),
            c = i("9b43"),
            h = i("23c6"),
            u = i("5ca1"),
            d = i("d3f4"),
            p = i("d8e8"),
            f = i("f605"),
            g = i("4a59"),
            m = i("ebd6"),
            v = i("1991").set,
            y = i("8079")(),
            x = i("a5b8"),
            b = i("9c80"),
            w = i("a25f"),
            _ = i("bcaa"),
            k = "Promise",
            S = l.TypeError,
            M = l.process,
            A = M && M.versions,
            C = A && A.v8 || "",
            T = l[k],
            P = "process" == h(M),
            O = function() {},
            L = r = x.f,
            E = !! function() {
                try {
                    var t = T.resolve(1),
                        e = (t.constructor = {})[i("2b4c")("species")] = function(t) {
                            t(O, O)
                        };
                    return (P || "function" == typeof PromiseRejectionEvent) && t.then(O) instanceof e && 0 !== C.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
                } catch (n) {}
            }(),
            D = function(t) {
                var e;
                return !(!d(t) || "function" != typeof(e = t.then)) && e
            },
            I = function(t, e) {
                if (!t._n) {
                    t._n = !0;
                    var i = t._c;
                    y(function() {
                        var n = t._v,
                            r = 1 == t._s,
                            o = 0,
                            a = function(e) {
                                var i, o, a, s = r ? e.ok : e.fail,
                                    l = e.resolve,
                                    c = e.reject,
                                    h = e.domain;
                                try {
                                    s ? (r || (2 == t._h && N(t), t._h = 1), !0 === s ? i = n : (h && h.enter(), i = s(n), h && (h.exit(), a = !0)), i === e.promise ? c(S("Promise-chain cycle")) : (o = D(i)) ? o.call(i, l, c) : l(i)) : c(n)
                                } catch (u) {
                                    h && !a && h.exit(), c(u)
                                }
                            };
                        while (i.length > o) a(i[o++]);
                        t._c = [], t._n = !1, e && !t._h && z(t)
                    })
                }
            },
            z = function(t) {
                v.call(l, function() {
                    var e, i, n, r = t._v,
                        o = B(t);
                    if (o && (e = b(function() {
                            P ? M.emit("unhandledRejection", r, t) : (i = l.onunhandledrejection) ? i({
                                promise: t,
                                reason: r
                            }) : (n = l.console) && n.error && n.error("Unhandled promise rejection", r)
                        }), t._h = P || B(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
                })
            },
            B = function(t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            },
            N = function(t) {
                v.call(l, function() {
                    var e;
                    P ? M.emit("rejectionHandled", t) : (e = l.onrejectionhandled) && e({
                        promise: t,
                        reason: t._v
                    })
                })
            },
            R = function(t) {
                var e = this;
                e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), I(e, !0))
            },
            j = function(t) {
                var e, i = this;
                if (!i._d) {
                    i._d = !0, i = i._w || i;
                    try {
                        if (i === t) throw S("Promise can't be resolved itself");
                        (e = D(t)) ? y(function() {
                            var n = {
                                _w: i,
                                _d: !1
                            };
                            try {
                                e.call(t, c(j, n, 1), c(R, n, 1))
                            } catch (r) {
                                R.call(n, r)
                            }
                        }): (i._v = t, i._s = 1, I(i, !1))
                    } catch (n) {
                        R.call({
                            _w: i,
                            _d: !1
                        }, n)
                    }
                }
            };
        E || (T = function(t) {
            f(this, T, k, "_h"), p(t), n.call(this);
            try {
                t(c(j, this, 1), c(R, this, 1))
            } catch (e) {
                R.call(this, e)
            }
        }, n = function(t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, n.prototype = i("dcbc")(T.prototype, {
            then: function(t, e) {
                var i = L(m(this, T));
                return i.ok = "function" != typeof t || t, i.fail = "function" == typeof e && e, i.domain = P ? M.domain : void 0, this._c.push(i), this._a && this._a.push(i), this._s && I(this, !1), i.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }), o = function() {
            var t = new n;
            this.promise = t, this.resolve = c(j, t, 1), this.reject = c(R, t, 1)
        }, x.f = L = function(t) {
            return t === T || t === a ? new o(t) : r(t)
        }), u(u.G + u.W + u.F * !E, {
            Promise: T
        }), i("7f20")(T, k), i("7a56")(k), a = i("8378")[k], u(u.S + u.F * !E, k, {
            reject: function(t) {
                var e = L(this),
                    i = e.reject;
                return i(t), e.promise
            }
        }), u(u.S + u.F * (s || !E), k, {
            resolve: function(t) {
                return _(s && this === a ? T : this, t)
            }
        }), u(u.S + u.F * !(E && i("5cc5")(function(t) {
            T.all(t)["catch"](O)
        })), k, {
            all: function(t) {
                var e = this,
                    i = L(e),
                    n = i.resolve,
                    r = i.reject,
                    o = b(function() {
                        var i = [],
                            o = 0,
                            a = 1;
                        g(t, !1, function(t) {
                            var s = o++,
                                l = !1;
                            i.push(void 0), a++, e.resolve(t).then(function(t) {
                                l || (l = !0, i[s] = t, --a || n(i))
                            }, r)
                        }), --a || n(i)
                    });
                return o.e && r(o.v), i.promise
            },
            race: function(t) {
                var e = this,
                    i = L(e),
                    n = i.reject,
                    r = b(function() {
                        g(t, !1, function(t) {
                            e.resolve(t).then(i.resolve, n)
                        })
                    });
                return r.e && n(r.v), i.promise
            }
        })
    },
    5537: function(t, e, i) {
        var n = i("8378"),
            r = i("7726"),
            o = "__core-js_shared__",
            a = r[o] || (r[o] = {});
        (t.exports = function(t, e) {
            return a[t] || (a[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: n.version,
            mode: i("2d00") ? "pure" : "global",
            copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    "560b": function(t, e, i) {
        var n = i("bc25"),
            r = i("9c93"),
            o = i("c227"),
            a = i("0f89"),
            s = i("a5ab"),
            l = i("f159"),
            c = {},
            h = {};
        e = t.exports = function(t, e, i, u, d) {
            var p, f, g, m, v = d ? function() {
                    return t
                } : l(t),
                y = n(i, u, e ? 2 : 1),
                x = 0;
            if ("function" != typeof v) throw TypeError(t + " is not iterable!");
            if (o(v)) {
                for (p = s(t.length); p > x; x++)
                    if (m = e ? y(a(f = t[x])[0], f[1]) : y(t[x]), m === c || m === h) return m
            } else
                for (g = v.call(t); !(f = g.next()).done;)
                    if (m = r(g, y, f.value, e), m === c || m === h) return m
        };
        e.BREAK = c, e.RETURN = h
    },
    "562e": function(t, e, i) {
        "use strict";
        var n = i("0f7c"),
            r = i("0f01"),
            o = n.call(Function.call, String.prototype.replace),
            a = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
            s = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
        t.exports = function() {
            var t = r.ToString(r.CheckObjectCoercible(this));
            return o(o(t, a, ""), s, "")
        }
    },
    "565d": function(t, e, i) {
        var n = i("6a9b"),
            r = i("d876").f,
            o = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            s = function(t) {
                try {
                    return r(t)
                } catch (e) {
                    return a.slice()
                }
            };
        t.exports.f = function(t) {
            return a && "[object Window]" == o.call(t) ? s(t) : r(n(t))
        }
    },
    5927: function(t, e, i) {
        i("93c4"), i("b42c"), t.exports = i("fda1").f("iterator")
    },
    5975: function(t, e) {
        t.exports = function(t) {
            return t >= 0 ? 1 : -1
        }
    },
    "5b5f": function(t, e, i) {
        "use strict";
        var n, r, o, a, s = i("b457"),
            l = i("da3c"),
            c = i("bc25"),
            h = i("7d8a"),
            u = i("d13f"),
            d = i("6f8a"),
            p = i("f2fe"),
            f = i("b0bc"),
            g = i("560b"),
            m = i("302f"),
            v = i("df0a").set,
            y = i("36dc")(),
            x = i("03ca"),
            b = i("75c9"),
            w = i("8a12"),
            _ = i("decf"),
            k = "Promise",
            S = l.TypeError,
            M = l.process,
            A = M && M.versions,
            C = A && A.v8 || "",
            T = l[k],
            P = "process" == h(M),
            O = function() {},
            L = r = x.f,
            E = !! function() {
                try {
                    var t = T.resolve(1),
                        e = (t.constructor = {})[i("1b55")("species")] = function(t) {
                            t(O, O)
                        };
                    return (P || "function" == typeof PromiseRejectionEvent) && t.then(O) instanceof e && 0 !== C.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
                } catch (n) {}
            }(),
            D = function(t) {
                var e;
                return !(!d(t) || "function" != typeof(e = t.then)) && e
            },
            I = function(t, e) {
                if (!t._n) {
                    t._n = !0;
                    var i = t._c;
                    y(function() {
                        var n = t._v,
                            r = 1 == t._s,
                            o = 0,
                            a = function(e) {
                                var i, o, a, s = r ? e.ok : e.fail,
                                    l = e.resolve,
                                    c = e.reject,
                                    h = e.domain;
                                try {
                                    s ? (r || (2 == t._h && N(t), t._h = 1), !0 === s ? i = n : (h && h.enter(), i = s(n), h && (h.exit(), a = !0)), i === e.promise ? c(S("Promise-chain cycle")) : (o = D(i)) ? o.call(i, l, c) : l(i)) : c(n)
                                } catch (u) {
                                    h && !a && h.exit(), c(u)
                                }
                            };
                        while (i.length > o) a(i[o++]);
                        t._c = [], t._n = !1, e && !t._h && z(t)
                    })
                }
            },
            z = function(t) {
                v.call(l, function() {
                    var e, i, n, r = t._v,
                        o = B(t);
                    if (o && (e = b(function() {
                            P ? M.emit("unhandledRejection", r, t) : (i = l.onunhandledrejection) ? i({
                                promise: t,
                                reason: r
                            }) : (n = l.console) && n.error && n.error("Unhandled promise rejection", r)
                        }), t._h = P || B(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
                })
            },
            B = function(t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            },
            N = function(t) {
                v.call(l, function() {
                    var e;
                    P ? M.emit("rejectionHandled", t) : (e = l.onrejectionhandled) && e({
                        promise: t,
                        reason: t._v
                    })
                })
            },
            R = function(t) {
                var e = this;
                e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), I(e, !0))
            },
            j = function(t) {
                var e, i = this;
                if (!i._d) {
                    i._d = !0, i = i._w || i;
                    try {
                        if (i === t) throw S("Promise can't be resolved itself");
                        (e = D(t)) ? y(function() {
                            var n = {
                                _w: i,
                                _d: !1
                            };
                            try {
                                e.call(t, c(j, n, 1), c(R, n, 1))
                            } catch (r) {
                                R.call(n, r)
                            }
                        }): (i._v = t, i._s = 1, I(i, !1))
                    } catch (n) {
                        R.call({
                            _w: i,
                            _d: !1
                        }, n)
                    }
                }
            };
        E || (T = function(t) {
            f(this, T, k, "_h"), p(t), n.call(this);
            try {
                t(c(j, this, 1), c(R, this, 1))
            } catch (e) {
                R.call(this, e)
            }
        }, n = function(t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, n.prototype = i("3904")(T.prototype, {
            then: function(t, e) {
                var i = L(m(this, T));
                return i.ok = "function" != typeof t || t, i.fail = "function" == typeof e && e, i.domain = P ? M.domain : void 0, this._c.push(i), this._a && this._a.push(i), this._s && I(this, !1), i.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }), o = function() {
            var t = new n;
            this.promise = t, this.resolve = c(j, t, 1), this.reject = c(R, t, 1)
        }, x.f = L = function(t) {
            return t === T || t === a ? new o(t) : r(t)
        }), u(u.G + u.W + u.F * !E, {
            Promise: T
        }), i("c0d8")(T, k), i("1be4")(k), a = i("a7d3")[k], u(u.S + u.F * !E, k, {
            reject: function(t) {
                var e = L(this),
                    i = e.reject;
                return i(t), e.promise
            }
        }), u(u.S + u.F * (s || !E), k, {
            resolve: function(t) {
                return _(s && this === a ? T : this, t)
            }
        }), u(u.S + u.F * !(E && i("436c")(function(t) {
            T.all(t)["catch"](O)
        })), k, {
            all: function(t) {
                var e = this,
                    i = L(e),
                    n = i.resolve,
                    r = i.reject,
                    o = b(function() {
                        var i = [],
                            o = 0,
                            a = 1;
                        g(t, !1, function(t) {
                            var s = o++,
                                l = !1;
                            i.push(void 0), a++, e.resolve(t).then(function(t) {
                                l || (l = !0, i[s] = t, --a || n(i))
                            }, r)
                        }), --a || n(i)
                    });
                return o.e && r(o.v), i.promise
            },
            race: function(t) {
                var e = this,
                    i = L(e),
                    n = i.reject,
                    r = b(function() {
                        g(t, !1, function(t) {
                            e.resolve(t).then(i.resolve, n)
                        })
                    });
                return r.e && n(r.v), i.promise
            }
        })
    },
    "5be4": function(t, e, i) {
        "use strict";
        i.r(e);
        i("6b54"), i("cadf"), i("551c"), i("097d");
        var n = i("2b0e"),
            r = i("c894"),
            o = i("5309"),
            a = i("af14"),
            s = i("c649"),
            l = i("026a"),
            c = i("390b"),
            h = i.n(c);
        n["a"].use(r["a"]);
        var u = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                shadow: !1
            };
            n["a"].customElement("coingecko-coin-compare-chart-widget", l["a"], {
                shadow: t.shadow,
                shadowCss: h.a.toString(),
                connectedCallback: function() {
                    if (!t.shadow) {
                        var e = document.createElement("style");
                        e.innerHTML = h.a.toString(), document.head.append(e)
                    }
                }
            })
        };
        Object(a["a"])() ? u({
            shadow: !0
        }) : Object(s["c"])([o["a"].customElement, o["a"].fetch, o["a"].cssvar]).then(function() {
            return u({
                shadow: !1
            })
        })
    },
    "5ca1": function(t, e, i) {
        var n = i("7726"),
            r = i("8378"),
            o = i("32e9"),
            a = i("2aba"),
            s = i("9b43"),
            l = "prototype",
            c = function(t, e, i) {
                var h, u, d, p, f = t & c.F,
                    g = t & c.G,
                    m = t & c.S,
                    v = t & c.P,
                    y = t & c.B,
                    x = g ? n : m ? n[e] || (n[e] = {}) : (n[e] || {})[l],
                    b = g ? r : r[e] || (r[e] = {}),
                    w = b[l] || (b[l] = {});
                for (h in g && (i = e), i) u = !f && x && void 0 !== x[h], d = (u ? x : i)[h], p = y && u ? s(d, n) : v && "function" == typeof d ? s(Function.call, d) : d, x && a(x, h, d, t & c.U), b[h] != d && o(b, h, p), v && w[h] != d && (w[h] = d)
            };
        n.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    },
    "5cc5": function(t, e, i) {
        var n = i("2b4c")("iterator"),
            r = !1;
        try {
            var o = [7][n]();
            o["return"] = function() {
                r = !0
            }, Array.from(o, function() {
                throw 2
            })
        } catch (a) {}
        t.exports = function(t, e) {
            if (!e && !r) return !1;
            var i = !1;
            try {
                var o = [7],
                    s = o[n]();
                s.next = function() {
                    return {
                        done: i = !0
                    }
                }, o[n] = function() {
                    return s
                }, t(o)
            } catch (a) {}
            return i
        }
    },
    "5ce7": function(t, e, i) {
        "use strict";
        var n = i("7108"),
            r = i("f845"),
            o = i("c0d8"),
            a = {};
        i("8ce0")(a, i("1b55")("iterator"), function() {
            return this
        }), t.exports = function(t, e, i) {
            t.prototype = n(a, {
                next: r(1, i)
            }), o(t, e + " Iterator")
        }
    },
    "5d58": function(t, e, i) {
        t.exports = i("5927")
    },
    "5d67": function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "Alta de 24h",
                "24h_low": "Baixa de 24h",
                view_price_chart: "Ver tabela de preÃ§os",
                powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "Alta de 24h",
                "24h_low": "Baixa de 24h",
                view_price_chart: "Ver tabela de preÃ§os",
                powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "Ver tabela de preÃ§os",
                powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: "Mapa de Ã¡rvore de criptomoedas",
                subtitle: "(Top %{top} por capitalizaÃ§Ã£o de mercado)",
                powered_by: "Fornecido por %{name_start}%{name}%{name_end}"
            }
        }
    },
    "5d8f": function(t, e, i) {
        var n = i("7772")("keys"),
            r = i("7b00");
        t.exports = function(t) {
            return n[t] || (n[t] = r(t))
        }
    },
    "5dbc": function(t, e, i) {
        var n = i("d3f4"),
            r = i("8b97").set;
        t.exports = function(t, e, i) {
            var o, a = e.constructor;
            return a !== i && "function" == typeof a && (o = a.prototype) !== i.prototype && n(o) && r && r(t, o), t
        }
    },
    "5df3": function(t, e, i) {
        "use strict";
        var n = i("02f4")(!0);
        i("01f9")(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, e = this._t,
                i = this._i;
            return i >= e.length ? {
                value: void 0,
                done: !0
            } : (t = n(e, i), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    },
    "5f1b": function(t, e, i) {
        "use strict";
        var n = i("23c6"),
            r = RegExp.prototype.exec;
        t.exports = function(t, e) {
            var i = t.exec;
            if ("function" === typeof i) {
                var o = i.call(t, e);
                if ("object" !== typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return o
            }
            if ("RegExp" !== n(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return r.call(t, e)
        }
    },
    "613b": function(t, e, i) {
        var n = i("5537")("keys"),
            r = i("ca5a");
        t.exports = function(t) {
            return n[t] || (n[t] = r(t))
        }
    },
    "626a": function(t, e, i) {
        var n = i("2d95");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == n(t) ? t.split("") : Object(t)
        }
    },
    "626e": function(t, e, i) {
        var n = i("d74e"),
            r = i("f845"),
            o = i("6a9b"),
            a = i("2ea1"),
            s = i("43c8"),
            l = i("a47f"),
            c = Object.getOwnPropertyDescriptor;
        e.f = i("7d95") ? c : function(t, e) {
            if (t = o(t), e = a(e, !0), l) try {
                return c(t, e)
            } catch (i) {}
            if (s(t, e)) return r(!n.f.call(t, e), t[e])
        }
    },
    6277: function(t, e, i) {
        var n = i("7b00")("meta"),
            r = i("6f8a"),
            o = i("43c8"),
            a = i("3adc").f,
            s = 0,
            l = Object.isExtensible || function() {
                return !0
            },
            c = !i("d782")(function() {
                return l(Object.preventExtensions({}))
            }),
            h = function(t) {
                a(t, n, {
                    value: {
                        i: "O" + ++s,
                        w: {}
                    }
                })
            },
            u = function(t, e) {
                if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!o(t, n)) {
                    if (!l(t)) return "F";
                    if (!e) return "E";
                    h(t)
                }
                return t[n].i
            },
            d = function(t, e) {
                if (!o(t, n)) {
                    if (!l(t)) return !0;
                    if (!e) return !1;
                    h(t)
                }
                return t[n].w
            },
            p = function(t) {
                return c && f.NEED && l(t) && !o(t, n) && h(t), t
            },
            f = t.exports = {
                KEY: n,
                NEED: !1,
                fastKey: u,
                getWeak: d,
                onFreeze: p
            }
    },
    "67bb": function(t, e, i) {
        t.exports = i("b258")
    },
    6821: function(t, e, i) {
        var n = i("626a"),
            r = i("be13");
        t.exports = function(t) {
            return n(r(t))
        }
    },
    "688e": function(t, e, i) {
        "use strict";
        var n = "Function.prototype.bind called on incompatible ",
            r = Array.prototype.slice,
            o = Object.prototype.toString,
            a = "[object Function]";
        t.exports = function(t) {
            var e = this;
            if ("function" !== typeof e || o.call(e) !== a) throw new TypeError(n + e);
            for (var i, s = r.call(arguments, 1), l = function() {
                    if (this instanceof i) {
                        var n = e.apply(this, s.concat(r.call(arguments)));
                        return Object(n) === n ? n : this
                    }
                    return e.apply(t, s.concat(r.call(arguments)))
                }, c = Math.max(0, e.length - s.length), h = [], u = 0; u < c; u++) h.push("$" + u);
            if (i = Function("binder", "return function (" + h.join(",") + "){ return binder.apply(this,arguments); }")(l), e.prototype) {
                var d = function() {};
                d.prototype = e.prototype, i.prototype = new d, d.prototype = null
            }
            return i
        }
    },
    "69a8": function(t, e) {
        var i = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return i.call(t, e)
        }
    },
    "6a99": function(t, e, i) {
        var n = i("d3f4");
        t.exports = function(t, e) {
            if (!n(t)) return t;
            var i, r;
            if (e && "function" == typeof(i = t.toString) && !n(r = i.call(t))) return r;
            if ("function" == typeof(i = t.valueOf) && !n(r = i.call(t))) return r;
            if (!e && "function" == typeof(i = t.toString) && !n(r = i.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    "6a9b": function(t, e, i) {
        var n = i("8bab"),
            r = i("e5fa");
        t.exports = function(t) {
            return n(r(t))
        }
    },
    "6b54": function(t, e, i) {
        "use strict";
        i("3846");
        var n = i("cb7c"),
            r = i("0bfb"),
            o = i("9e1e"),
            a = "toString",
            s = /./ [a],
            l = function(t) {
                i("2aba")(RegExp.prototype, a, t, !0)
            };
        i("79e5")(function() {
            return "/a/b" != s.call({
                source: "a",
                flags: "b"
            })
        }) ? l(function() {
            var t = n(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? r.call(t) : void 0)
        }) : s.name != a && l(function() {
            return s.call(this)
        })
    },
    "6ce2": function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "24h Hoch",
                "24h_low": "24h Tief",
                view_price_chart: "PreisÃ¼bersicht anzeigen",
                powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "24h Hoch",
                "24h_low": "24h Tief",
                view_price_chart: "PreisÃ¼bersicht anzeigen",
                powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "PreisÃ¼bersicht anzeigen",
                powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: "KryptowÃ¤hrungs-Tree-Map",
                subtitle: "(Top %{top} nach Marktkapitalisierung)",
                powered_by: "PrÃ¤sentiert von %{name_start}%{name}%{name_end}"
            }
        }
    },
    "6e1f": function(t, e) {
        var i = {}.toString;
        t.exports = function(t) {
            return i.call(t).slice(8, -1)
        }
    },
    "6f8a": function(t, e) {
        t.exports = function(t) {
            return "object" === typeof t ? null !== t : "function" === typeof t
        }
    },
    7: function(t, e, i) {
        t.exports = i("5be4")
    },
    7108: function(t, e, i) {
        var n = i("0f89"),
            r = i("f568"),
            o = i("0029"),
            a = i("5d8f")("IE_PROTO"),
            s = function() {},
            l = "prototype",
            c = function() {
                var t, e = i("12fd")("iframe"),
                    n = o.length,
                    r = "<",
                    a = ">";
                e.style.display = "none", i("103a").appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(r + "script" + a + "document.F=Object" + r + "/script" + a), t.close(), c = t.F;
                while (n--) delete c[l][o[n]];
                return c()
            };
        t.exports = Object.create || function(t, e) {
            var i;
            return null !== t ? (s[l] = n(t), i = new s, s[l] = null, i[a] = t) : i = c(), void 0 === e ? i : r(i, e)
        }
    },
    "75c9": function(t, e) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (e) {
                return {
                    e: !0,
                    v: e
                }
            }
        }
    },
    7618: function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return l
        });
        var n = i("5d58"),
            r = i.n(n),
            o = i("67bb"),
            a = i.n(o);

        function s(t) {
            return s = "function" === typeof a.a && "symbol" === typeof r.a ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" === typeof a.a && t.constructor === a.a && t !== a.a.prototype ? "symbol" : typeof t
            }, s(t)
        }

        function l(t) {
            return l = "function" === typeof a.a && "symbol" === s(r.a) ? function(t) {
                return s(t)
            } : function(t) {
                return t && "function" === typeof a.a && t.constructor === a.a && t !== a.a.prototype ? "symbol" : s(t)
            }, l(t)
        }
    },
    7633: function(t, e, i) {
        var n = i("2695"),
            r = i("0029");
        t.exports = Object.keys || function(t) {
            return n(t, r)
        }
    },
    7704: function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "ÐœÐ°ÐºÑ. Ð·Ð° 24Â Ñ‡Ð°ÑÐ°",
                "24h_low": "ÐœÐ¸Ð½. Ð·Ð° 24Â Ñ‡Ð°ÑÐ°",
                view_price_chart: "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ Ð³Ñ€Ð°Ñ„Ð¸Ðº Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ ÐºÑƒÑ€ÑÐ°",
                powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "ÐœÐ°ÐºÑ. Ð·Ð° 24Â Ñ‡Ð°ÑÐ°",
                "24h_low": "ÐœÐ¸Ð½. Ð·Ð° 24Â Ñ‡Ð°ÑÐ°",
                view_price_chart: "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ Ð³Ñ€Ð°Ñ„Ð¸Ðº Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ ÐºÑƒÑ€ÑÐ°",
                powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ Ð³Ñ€Ð°Ñ„Ð¸Ðº Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ ÐºÑƒÑ€ÑÐ°",
                powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: "ÐšÐ°Ñ€Ñ‚Ð° Ð´ÐµÑ€ÐµÐ²Ð° ÐºÑ€Ð¸Ð¿Ñ‚Ð¾Ð²Ð°Ð»ÑŽÑ‚",
                subtitle: "(Ñ‚Ð¾Ð¿ %{top} Ð¿Ð¾ Ñ€Ñ‹Ð½Ð¾Ñ‡Ð½Ð¾Ð¹ ÐºÐ°Ð¿Ð¸Ñ‚Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ð¸)",
                powered_by: "ÐžÑ‚ %{name_start}%{name}%{name_end}"
            }
        }
    },
    7726: function(t, e) {
        var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = i)
    },
    7772: function(t, e, i) {
        var n = i("a7d3"),
            r = i("da3c"),
            o = "__core-js_shared__",
            a = r[o] || (r[o] = {});
        (t.exports = function(t, e) {
            return a[t] || (a[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: n.version,
            mode: i("b457") ? "pure" : "global",
            copyright: "Â© 2018 Denis Pushkarev (zloirock.ru)"
        })
    },
    "77f1": function(t, e, i) {
        var n = i("4588"),
            r = Math.max,
            o = Math.min;
        t.exports = function(t, e) {
            return t = n(t), t < 0 ? r(t + e, 0) : o(t, e)
        }
    },
    "795b": function(t, e, i) {
        t.exports = i("dd04")
    },
    "79e5": function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (e) {
                return !0
            }
        }
    },
    "7a56": function(t, e, i) {
        "use strict";
        var n = i("7726"),
            r = i("86cc"),
            o = i("9e1e"),
            a = i("2b4c")("species");
        t.exports = function(t) {
            var e = n[t];
            o && e && !e[a] && r.f(e, a, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    "7b00": function(t, e) {
        var i = 0,
            n = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
        }
    },
    "7d8a": function(t, e, i) {
        var n = i("6e1f"),
            r = i("1b55")("toStringTag"),
            o = "Arguments" == n(function() {
                return arguments
            }()),
            a = function(t, e) {
                try {
                    return t[e]
                } catch (i) {}
            };
        t.exports = function(t) {
            var e, i, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = a(e = Object(t), r)) ? i : o ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s
        }
    },
    "7d95": function(t, e, i) {
        t.exports = !i("d782")(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    "7f20": function(t, e, i) {
        var n = i("86cc").f,
            r = i("69a8"),
            o = i("2b4c")("toStringTag");
        t.exports = function(t, e, i) {
            t && !r(t = i ? t : t.prototype, o) && n(t, o, {
                configurable: !0,
                value: e
            })
        }
    },
    "7f7f": function(t, e, i) {
        var n = i("86cc").f,
            r = Function.prototype,
            o = /^\s*function ([^ (]*)/,
            a = "name";
        a in r || i("9e1e") && n(r, a, {
            configurable: !0,
            get: function() {
                try {
                    return ("" + this).match(o)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    },
    8079: function(t, e, i) {
        var n = i("7726"),
            r = i("1991").set,
            o = n.MutationObserver || n.WebKitMutationObserver,
            a = n.process,
            s = n.Promise,
            l = "process" == i("2d95")(a);
        t.exports = function() {
            var t, e, i, c = function() {
                var n, r;
                l && (n = a.domain) && n.exit();
                while (t) {
                    r = t.fn, t = t.next;
                    try {
                        r()
                    } catch (o) {
                        throw t ? i() : e = void 0, o
                    }
                }
                e = void 0, n && n.enter()
            };
            if (l) i = function() {
                a.nextTick(c)
            };
            else if (!o || n.navigator && n.navigator.standalone)
                if (s && s.resolve) {
                    var h = s.resolve(void 0);
                    i = function() {
                        h.then(c)
                    }
                } else i = function() {
                    r.call(n, c)
                };
            else {
                var u = !0,
                    d = document.createTextNode("");
                new o(c).observe(d, {
                    characterData: !0
                }), i = function() {
                    d.data = u = !u
                }
            }
            return function(n) {
                var r = {
                    fn: n,
                    next: void 0
                };
                e && (e.next = r), t || (t = r, i()), e = r
            }
        }
    },
    "81ee": function(t, e, i) {
        i("9a51"), t.exports = i("a7d3").Object.assign
    },
    8378: function(t, e) {
        var i = t.exports = {
            version: "2.6.5"
        };
        "number" == typeof __e && (__e = i)
    },
    "84f2": function(t, e) {
        t.exports = {}
    },
    8680: function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "à¸ªà¸¹à¸‡ 24 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                "24h_low": "à¸•à¹ˆà¸³ 24 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                view_price_chart: "à¸”à¸¹à¸à¸£à¸²à¸Ÿà¸£à¸²à¸„à¸²",
                powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "à¸ªà¸¹à¸‡ 24 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                "24h_low": "à¸•à¹ˆà¸³ 24 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                view_price_chart: "à¸”à¸¹à¸à¸£à¸²à¸Ÿà¸£à¸²à¸„à¸²",
                powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "à¸”à¸¹à¸à¸£à¸²à¸Ÿà¸£à¸²à¸„à¸²",
                powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: "à¹à¸œà¸™à¸—à¸µà¹ˆà¸£à¸¹à¸›à¸•à¹‰à¸™à¹„à¸«à¸¡ Cryptocurrency",
                subtitle: "(%{top} à¸£à¸²à¸¢à¸à¸²à¸£à¸ªà¸¹à¸‡à¸ªà¸¸à¸”à¸•à¸²à¸¡à¸¡à¸¹à¸¥à¸„à¹ˆà¸²à¸•à¸²à¸¡à¸£à¸²à¸„à¸²à¸•à¸¥à¸²à¸”)",
                powered_by: "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢ %{name_start}%{name}%{name_end}"
            }
        }
    },
    "86cc": function(t, e, i) {
        var n = i("cb7c"),
            r = i("c69a"),
            o = i("6a99"),
            a = Object.defineProperty;
        e.f = i("9e1e") ? Object.defineProperty : function(t, e, i) {
            if (n(t), e = o(e, !0), n(i), r) try {
                return a(t, e, i)
            } catch (s) {}
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
            return "value" in i && (t[e] = i.value), t
        }
    },
    "89b2": function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "24 godz. â€“ maks.",
                "24h_low": "24 godz. â€“ min.",
                view_price_chart: "WyÅ›wietl wykres ceny",
                powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "24 godz. â€“ maks.",
                "24h_low": "24 godz. â€“ min.",
                view_price_chart: "WyÅ›wietl wykres ceny",
                powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "WyÅ›wietl wykres ceny",
                powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: "Drzewo kryptowalut",
                subtitle: "(Lista %{top} o najwiÄ™kszej kapitalizacji na rynku)",
                powered_by: "TreÅ›Ä‡ dostarczona przez %{name_start}%{name}%{name_end}"
            }
        }
    },
    "8a12": function(t, e, i) {
        var n = i("da3c"),
            r = n.navigator;
        t.exports = r && r.userAgent || ""
    },
    "8b97": function(t, e, i) {
        var n = i("d3f4"),
            r = i("cb7c"),
            o = function(t, e) {
                if (r(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
            };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, n) {
                try {
                    n = i("9b43")(Function.call, i("11e9").f(Object.prototype, "__proto__").set, 2), n(t, []), e = !(t instanceof Array)
                } catch (r) {
                    e = !0
                }
                return function(t, i) {
                    return o(t, i), e ? t.__proto__ = i : n(t, i), t
                }
            }({}, !1) : void 0),
            check: o
        }
    },
    "8bab": function(t, e, i) {
        var n = i("6e1f");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == n(t) ? t.split("") : Object(t)
        }
    },
    "8ce0": function(t, e, i) {
        var n = i("3adc"),
            r = i("f845");
        t.exports = i("7d95") ? function(t, e, i) {
            return n.f(t, e, r(1, i))
        } : function(t, e, i) {
            return t[e] = i, t
        }
    },
    9093: function(t, e, i) {
        var n = i("ce10"),
            r = i("e11e").concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return n(t, r)
        }
    },
    "93c4": function(t, e, i) {
        "use strict";
        var n = i("2a4e")(!0);
        i("e4a9")(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, e = this._t,
                i = this._i;
            return i >= e.length ? {
                value: void 0,
                done: !0
            } : (t = n(e, i), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    },
    "9a51": function(t, e, i) {
        var n = i("d13f");
        n(n.S + n.F, "Object", {
            assign: i("9e44")
        })
    },
    "9b43": function(t, e, i) {
        var n = i("d8e8");
        t.exports = function(t, e, i) {
            if (n(t), void 0 === e) return t;
            switch (i) {
                case 1:
                    return function(i) {
                        return t.call(e, i)
                    };
                case 2:
                    return function(i, n) {
                        return t.call(e, i, n)
                    };
                case 3:
                    return function(i, n, r) {
                        return t.call(e, i, n, r)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    },
    "9c6c": function(t, e, i) {
        var n = i("2b4c")("unscopables"),
            r = Array.prototype;
        void 0 == r[n] && i("32e9")(r, n, {}), t.exports = function(t) {
            r[n][t] = !0
        }
    },
    "9c80": function(t, e) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (e) {
                return {
                    e: !0,
                    v: e
                }
            }
        }
    },
    "9c93": function(t, e, i) {
        var n = i("0f89");
        t.exports = function(t, e, i, r) {
            try {
                return r ? e(n(i)[0], i[1]) : e(i)
            } catch (a) {
                var o = t["return"];
                throw void 0 !== o && n(o.call(t)), a
            }
        }
    },
    "9def": function(t, e, i) {
        var n = i("4588"),
            r = Math.min;
        t.exports = function(t) {
            return t > 0 ? r(n(t), 9007199254740991) : 0
        }
    },
    "9e1e": function(t, e, i) {
        t.exports = !i("79e5")(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    "9e44": function(t, e, i) {
        "use strict";
        var n = i("7633"),
            r = i("31c2"),
            o = i("d74e"),
            a = i("0185"),
            s = i("8bab"),
            l = Object.assign;
        t.exports = !l || i("d782")(function() {
            var t = {},
                e = {},
                i = Symbol(),
                n = "abcdefghijklmnopqrst";
            return t[i] = 7, n.split("").forEach(function(t) {
                e[t] = t
            }), 7 != l({}, t)[i] || Object.keys(l({}, e)).join("") != n
        }) ? function(t, e) {
            var i = a(t),
                l = arguments.length,
                c = 1,
                h = r.f,
                u = o.f;
            while (l > c) {
                var d, p = s(arguments[c++]),
                    f = h ? n(p).concat(h(p)) : n(p),
                    g = f.length,
                    m = 0;
                while (g > m) u.call(p, d = f[m++]) && (i[d] = p[d])
            }
            return i
        } : l
    },
    a0d3: function(t, e, i) {
        "use strict";
        var n = i("0f7c");
        t.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
    },
    a25f: function(t, e, i) {
        var n = i("7726"),
            r = n.navigator;
        t.exports = r && r.userAgent || ""
    },
    a306: function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "MÃ¡ximo en 24 h",
                "24h_low": "MÃ­nimo en 24 h",
                view_price_chart: "Ver tabla de precios",
                powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "MÃ¡ximo en 24 h",
                "24h_low": "MÃ­nimo en 24 h",
                view_price_chart: "Ver tabla de precios",
                powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "Ver tabla de precios",
                powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: "Mapa de Ã¡rbol de criptomonedas",
                subtitle: "(las %{top} principales segÃºn la capitalizaciÃ³n de mercado)",
                powered_by: "Con tecnologÃ­a de %{name_start}%{name}%{name_end}"
            }
        }
    },
    a47f: function(t, e, i) {
        t.exports = !i("7d95") && !i("d782")(function() {
            return 7 != Object.defineProperty(i("12fd")("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    a481: function(t, e, i) {
        "use strict";
        var n = i("cb7c"),
            r = i("4bf8"),
            o = i("9def"),
            a = i("4588"),
            s = i("0390"),
            l = i("5f1b"),
            c = Math.max,
            h = Math.min,
            u = Math.floor,
            d = /\$([$&`']|\d\d?|<[^>]*>)/g,
            p = /\$([$&`']|\d\d?)/g,
            f = function(t) {
                return void 0 === t ? t : String(t)
            };
        i("214f")("replace", 2, function(t, e, i, g) {
            return [function(n, r) {
                var o = t(this),
                    a = void 0 == n ? void 0 : n[e];
                return void 0 !== a ? a.call(n, o, r) : i.call(String(o), n, r)
            }, function(t, e) {
                var r = g(i, t, this, e);
                if (r.done) return r.value;
                var u = n(t),
                    d = String(this),
                    p = "function" === typeof e;
                p || (e = String(e));
                var v = u.global;
                if (v) {
                    var y = u.unicode;
                    u.lastIndex = 0
                }
                var x = [];
                while (1) {
                    var b = l(u, d);
                    if (null === b) break;
                    if (x.push(b), !v) break;
                    var w = String(b[0]);
                    "" === w && (u.lastIndex = s(d, o(u.lastIndex), y))
                }
                for (var _ = "", k = 0, S = 0; S < x.length; S++) {
                    b = x[S];
                    for (var M = String(b[0]), A = c(h(a(b.index), d.length), 0), C = [], T = 1; T < b.length; T++) C.push(f(b[T]));
                    var P = b.groups;
                    if (p) {
                        var O = [M].concat(C, A, d);
                        void 0 !== P && O.push(P);
                        var L = String(e.apply(void 0, O))
                    } else L = m(M, d, A, C, P, e);
                    A >= k && (_ += d.slice(k, A) + L, k = A + M.length)
                }
                return _ + d.slice(k)
            }];

            function m(t, e, n, o, a, s) {
                var l = n + t.length,
                    c = o.length,
                    h = p;
                return void 0 !== a && (a = r(a), h = d), i.call(s, h, function(i, r) {
                    var s;
                    switch (r.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return t;
                        case "`":
                            return e.slice(0, n);
                        case "'":
                            return e.slice(l);
                        case "<":
                            s = a[r.slice(1, -1)];
                            break;
                        default:
                            var h = +r;
                            if (0 === h) return i;
                            if (h > c) {
                                var d = u(h / 10);
                                return 0 === d ? i : d <= c ? void 0 === o[d - 1] ? r.charAt(1) : o[d - 1] + r.charAt(1) : i
                            }
                            s = o[h - 1]
                    }
                    return void 0 === s ? "" : s
                })
            }
        })
    },
    a4bb: function(t, e, i) {
        t.exports = i("fda6")
    },
    a5ab: function(t, e, i) {
        var n = i("a812"),
            r = Math.min;
        t.exports = function(t) {
            return t > 0 ? r(n(t), 9007199254740991) : 0
        }
    },
    a5b8: function(t, e, i) {
        "use strict";
        var n = i("d8e8");

        function r(t) {
            var e, i;
            this.promise = new t(function(t, n) {
                if (void 0 !== e || void 0 !== i) throw TypeError("Bad Promise constructor");
                e = t, i = n
            }), this.resolve = n(e), this.reject = n(i)
        }
        t.exports.f = function(t) {
            return new r(t)
        }
    },
    a7d3: function(t, e) {
        var i = t.exports = {
            version: "2.6.1"
        };
        "number" == typeof __e && (__e = i)
    },
    a812: function(t, e) {
        var i = Math.ceil,
            n = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
        }
    },
    aa77: function(t, e, i) {
        var n = i("5ca1"),
            r = i("be13"),
            o = i("79e5"),
            a = i("fdef"),
            s = "[" + a + "]",
            l = "â€‹Â…",
            c = RegExp("^" + s + s + "*"),
            h = RegExp(s + s + "*$"),
            u = function(t, e, i) {
                var r = {},
                    s = o(function() {
                        return !!a[t]() || l[t]() != l
                    }),
                    c = r[t] = s ? e(d) : a[t];
                i && (r[i] = c), n(n.P + n.F * s, "String", r)
            },
            d = u.trim = function(t, e) {
                return t = String(r(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(h, "")), t
            };
        t.exports = u
    },
    aae3: function(t, e, i) {
        var n = i("d3f4"),
            r = i("2d95"),
            o = i("2b4c")("match");
        t.exports = function(t) {
            var e;
            return n(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == r(t))
        }
    },
    ac6a: function(t, e, i) {
        for (var n = i("cadf"), r = i("0d58"), o = i("2aba"), a = i("7726"), s = i("32e9"), l = i("84f2"), c = i("2b4c"), h = c("iterator"), u = c("toStringTag"), d = l.Array, p = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, f = r(p), g = 0; g < f.length; g++) {
            var m, v = f[g],
                y = p[v],
                x = a[v],
                b = x && x.prototype;
            if (b && (b[h] || s(b, h, d), b[u] || s(b, u, v), l[v] = d, y))
                for (m in n) b[m] || o(b, m, n[m], !0)
        }
    },
    aced: function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "Cao trong 24H",
                "24h_low": "Tháº¥p trong 24H",
                view_price_chart: "Xem biá»ƒu Ä‘á»“ giÃ¡",
                powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "Cao trong 24H",
                "24h_low": "Tháº¥p trong 24H",
                view_price_chart: "Xem biá»ƒu Ä‘á»“ giÃ¡",
                powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "Xem biá»ƒu Ä‘á»“ giÃ¡",
                powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: "SÆ¡ Ä‘á»“ cÃ¢y Tiá»n mÃ£ hÃ³a",
                subtitle: "(Top %{top} theo vá»‘n hÃ³a)",
                powered_by: "ÄÆ°á»£c há»— trá»£ bá»Ÿi %{name_start}%{name}%{name_end}"
            }
        }
    },
    af08: function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "Ø§Ø±ØªÙØ§Ø¹ Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± 24 Ø³Ø§Ø¹Ø©",
                "24h_low": "Ø§Ù†Ø®ÙØ§Ø¶ Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± 24 Ø³Ø§Ø¹Ø©",
                view_price_chart: "Ø¹Ø±Ø¶ Ù…Ø®Ø·Ø· Ø§Ù„Ø³Ø¹Ø±",
                powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "Ø§Ø±ØªÙØ§Ø¹ Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± 24 Ø³Ø§Ø¹Ø©",
                "24h_low": "Ø§Ù†Ø®ÙØ§Ø¶ Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± 24 Ø³Ø§Ø¹Ø©",
                view_price_chart: "Ø¹Ø±Ø¶ Ù…Ø®Ø·Ø· Ø§Ù„Ø³Ø¹Ø±",
                powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "Ø¹Ø±Ø¶ Ù…Ø®Ø·Ø· Ø§Ù„Ø³Ø¹Ø±",
                powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: " Ø®Ø±ÙŠØ·Ø© Ø´Ø¬Ø±Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Øª Ø§Ù„Ù…Ø´ÙØ±Ø©",
                powered_by: "Ø¨Ø±Ø¹Ø§ÙŠØ© %{name_start}%{name}%{name_end}"
            }
        }
    },
    af14: function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return n
        });
        i("7618");

        function n() {
            return null != document.head.attachShadow && null != window.customElements && null != window.fetch
        }
    },
    b0bc: function(t, e) {
        t.exports = function(t, e, i, n) {
            if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(i + ": incorrect invocation!");
            return t
        }
    },
    b0c5: function(t, e, i) {
        "use strict";
        var n = i("520a");
        i("5ca1")({
            target: "RegExp",
            proto: !0,
            forced: n !== /./.exec
        }, {
            exec: n
        })
    },
    b22a: function(t, e) {
        t.exports = {}
    },
    b258: function(t, e, i) {
        i("d256"), i("12fd9"), i("d127"), i("d24f"), t.exports = i("a7d3").Symbol
    },
    b3e7: function(t, e) {
        t.exports = function() {}
    },
    b3fd: function(t, e, i) {
        "use strict";
        var n = i("f367"),
            r = i("1b7f");
        t.exports = function() {
            var t = r();
            return n(String.prototype, {
                trim: t
            }, {
                trim: function() {
                    return String.prototype.trim !== t
                }
            }), t
        }
    },
    b42c: function(t, e, i) {
        i("fa54");
        for (var n = i("da3c"), r = i("8ce0"), o = i("b22a"), a = i("1b55")("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
            var c = s[l],
                h = n[c],
                u = h && h.prototype;
            u && !u[a] && r(u, a, c), o[c] = o.Array
        }
    },
    b457: function(t, e) {
        t.exports = !0
    },
    b5aa: function(t, e, i) {
        var n = i("6e1f");
        t.exports = Array.isArray || function(t) {
            return "Array" == n(t)
        }
    },
    b604: function(t, e, i) {
        "use strict";
        var n = i("d13f"),
            r = i("a7d3"),
            o = i("da3c"),
            a = i("302f"),
            s = i("decf");
        n(n.P + n.R, "Promise", {
            finally: function(t) {
                var e = a(this, r.Promise || o.Promise),
                    i = "function" == typeof t;
                return this.then(i ? function(i) {
                    return s(e, t()).then(function() {
                        return i
                    })
                } : t, i ? function(i) {
                    return s(e, t()).then(function() {
                        throw i
                    })
                } : t)
            }
        })
    },
    bb53: function(t, e) {
        t.exports = function(t, e) {
            var i = t % e;
            return Math.floor(i >= 0 ? i : i + e)
        }
    },
    bc25: function(t, e, i) {
        var n = i("f2fe");
        t.exports = function(t, e, i) {
            if (n(t), void 0 === e) return t;
            switch (i) {
                case 1:
                    return function(i) {
                        return t.call(e, i)
                    };
                case 2:
                    return function(i, n) {
                        return t.call(e, i, n)
                    };
                case 3:
                    return function(i, n, r) {
                        return t.call(e, i, n, r)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    },
    bcaa: function(t, e, i) {
        var n = i("cb7c"),
            r = i("d3f4"),
            o = i("a5b8");
        t.exports = function(t, e) {
            if (n(t), r(e) && e.constructor === t) return e;
            var i = o.f(t),
                a = i.resolve;
            return a(e), i.promise
        }
    },
    be13: function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    },
    c0d8: function(t, e, i) {
        var n = i("3adc").f,
            r = i("43c8"),
            o = i("1b55")("toStringTag");
        t.exports = function(t, e, i) {
            t && !r(t = i ? t : t.prototype, o) && n(t, o, {
                configurable: !0,
                value: e
            })
        }
    },
    c165: function(t, e, i) {
        var n = i("d13f"),
            r = i("a7d3"),
            o = i("d782");
        t.exports = function(t, e) {
            var i = (r.Object || {})[t] || Object[t],
                a = {};
            a[t] = e(i), n(n.S + n.F * o(function() {
                i(1)
            }), "Object", a)
        }
    },
    c1e2: function(t, e, i) {
        "use strict";
        var n = i("2b0e"),
            r = i("288a"),
            o = i.n(r),
            a = i("7618"),
            s = i("5176"),
            l = i.n(s),
            c = i("af08"),
            h = i("6ce2"),
            u = i("edd4"),
            d = i("a306"),
            p = i("f693"),
            f = i("210c"),
            g = i("0825"),
            m = i("0423"),
            v = i("dd11"),
            y = i("89b2"),
            x = i("5d67"),
            b = i("7704"),
            w = i("8680"),
            _ = i("ffeb"),
            k = i("aced"),
            S = i("056c"),
            M = i("3504"),
            A = {
                ar: c,
                de: h,
                en: u,
                es: d,
                fr: p,
                id: f,
                it: g,
                ja: m,
                ko: v,
                pl: y,
                pt: x,
                ru: b,
                th: w,
                tr: _,
                vi: k,
                "zh-tw": S,
                zh: M
            },
            C = A;

        function T(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en";
            return P(A[t], A[e])
        }

        function P(t, e) {
            var i = l()({}, e);
            for (var n in i) {
                var r = t[n],
                    o = i[n];
                if (r && o)
                    if ("object" === Object(a["a"])(r) && "object" === Object(a["a"])(o))
                        for (var s in t[n]) i[n][s] = t[n][s];
                    else i[n] = t[n]
            }
            return i
        }
        var O = function() {
            return n["a"].mixin({
                data: function() {
                    return {
                        polyglot: new o.a({
                            phrases: T("en")
                        })
                    }
                },
                methods: {
                    reloadLocale: function() {
                        if (void 0 !== this.locale) {
                            if (!C[this.locale]) throw new Error("Locale not supported by widget. Contact support@coingecko.com for help.");
                            this.polyglot = new o.a({
                                phrases: T(this.locale, "en")
                            })
                        }
                    }
                },
                watch: {
                    locale: function() {
                        this.reloadLocale()
                    }
                },
                created: function() {
                    this.reloadLocale()
                }
            })
        };
        e["a"] = O
    },
    c227: function(t, e, i) {
        var n = i("b22a"),
            r = i("1b55")("iterator"),
            o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (n.Array === t || o[r] === t)
        }
    },
    c366: function(t, e, i) {
        var n = i("6821"),
            r = i("9def"),
            o = i("77f1");
        t.exports = function(t) {
            return function(e, i, a) {
                var s, l = n(e),
                    c = r(l.length),
                    h = o(a, c);
                if (t && i != i) {
                    while (c > h)
                        if (s = l[h++], s != s) return !0
                } else
                    for (; c > h; h++)
                        if ((t || h in l) && l[h] === i) return t || h || 0;
                return !t && -1
            }
        }
    },
    c46d: function(t, e, i) {
        "use strict";
        var n = i("e9ac"),
            r = n("%TypeError%"),
            o = n("%SyntaxError%"),
            a = i("a0d3"),
            s = {
                "Property Descriptor": function(t, e) {
                    if ("Object" !== t.Type(e)) return !1;
                    var i = {
                        "[[Configurable]]": !0,
                        "[[Enumerable]]": !0,
                        "[[Get]]": !0,
                        "[[Set]]": !0,
                        "[[Value]]": !0,
                        "[[Writable]]": !0
                    };
                    for (var n in e)
                        if (a(e, n) && !i[n]) return !1;
                    var o = a(e, "[[Value]]"),
                        s = a(e, "[[Get]]") || a(e, "[[Set]]");
                    if (o && s) throw new r("Property Descriptors may not be both accessor and data descriptors");
                    return !0
                }
            };
        t.exports = function(t, e, i, n) {
            var a = s[e];
            if ("function" !== typeof a) throw new o("unknown record type: " + e);
            if (!a(t, n)) throw new r(i + " must be a " + e);
            console.log(a(t, n), n)
        }
    },
    c5f6: function(t, e, i) {
        "use strict";
        var n = i("7726"),
            r = i("69a8"),
            o = i("2d95"),
            a = i("5dbc"),
            s = i("6a99"),
            l = i("79e5"),
            c = i("9093").f,
            h = i("11e9").f,
            u = i("86cc").f,
            d = i("aa77").trim,
            p = "Number",
            f = n[p],
            g = f,
            m = f.prototype,
            v = o(i("2aeb")(m)) == p,
            y = "trim" in String.prototype,
            x = function(t) {
                var e = s(t, !1);
                if ("string" == typeof e && e.length > 2) {
                    e = y ? e.trim() : d(e, 3);
                    var i, n, r, o = e.charCodeAt(0);
                    if (43 === o || 45 === o) {
                        if (i = e.charCodeAt(2), 88 === i || 120 === i) return NaN
                    } else if (48 === o) {
                        switch (e.charCodeAt(1)) {
                            case 66:
                            case 98:
                                n = 2, r = 49;
                                break;
                            case 79:
                            case 111:
                                n = 8, r = 55;
                                break;
                            default:
                                return +e
                        }
                        for (var a, l = e.slice(2), c = 0, h = l.length; c < h; c++)
                            if (a = l.charCodeAt(c), a < 48 || a > r) return NaN;
                        return parseInt(l, n)
                    }
                }
                return +e
            };
        if (!f(" 0o1") || !f("0b1") || f("+0x1")) {
            f = function(t) {
                var e = arguments.length < 1 ? 0 : t,
                    i = this;
                return i instanceof f && (v ? l(function() {
                    m.valueOf.call(i)
                }) : o(i) != p) ? a(new g(x(e)), i, f) : x(e)
            };
            for (var b, w = i("9e1e") ? c(g) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), _ = 0; w.length > _; _++) r(g, b = w[_]) && !r(f, b) && u(f, b, h(g, b));
            f.prototype = m, m.constructor = f, i("2aba")(n, p, f)
        }
    },
    c609: function(t, e, i) {
        "use strict";
        var n = i("d13f"),
            r = i("03ca"),
            o = i("75c9");
        n(n.S, "Promise", {
            try: function(t) {
                var e = r.f(this),
                    i = o(t);
                return (i.e ? e.reject : e.resolve)(i.v), e.promise
            }
        })
    },
    c612: function(t, e) {
        var i = Number.isNaN || function(t) {
            return t !== t
        };
        t.exports = Number.isFinite || function(t) {
            return "number" === typeof t && !i(t) && t !== 1 / 0 && t !== -1 / 0
        }
    },
    c649: function(t, e, i) {
        "use strict";
        i.d(e, "c", function() {
            return o
        }), i.d(e, "b", function() {
            return s
        }), i.d(e, "a", function() {
            return l
        });
        i("a481"), i("5df3");
        var n = i("795b"),
            r = i.n(n);
        i("ac6a");

        function o(t) {
            var e = [];
            return t.forEach(function(t) {
                e.push(new r.a(function(e, i) {
                    a(t, e, i)
                }))
            }), r.a.all(e)
        }

        function a(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                n = document.createElement("script");
            n.src = t.src, n.crossOrigin = "anonymous", n.integrity = t.integrity, n.onload = e, n.onerror = function() {
                i(new Error("Failed to load script " + t.src))
            }, document.head.appendChild(n)
        }

        function s(t, e, i) {
            var n;
            return function() {
                var r = this,
                    o = arguments,
                    a = function() {
                        n = null, i || t.apply(r, o)
                    },
                    s = i && !n;
                clearTimeout(n), n = setTimeout(a, e), s && t.apply(r, o)
            }
        }

        function l(t) {
            var e = [].slice,
                i = 1 <= arguments.length ? e.call(arguments, 0) : [],
                n = /(^|[\s\n]|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi;
            return i.length > 0 ? t.replace(n, function(t, e, i) {
                var n = '<a href="' + i + '" class="cg-primary-color-dark cg-no-underline" target="_blank">' + i + "</a>";
                return "" + e + n
            }) : t.replace(n, '$1<a class="cg-primary-color-dark cg-no-underline" target="_blank" href="$2">$2</a>')
        }
    },
    c69a: function(t, e, i) {
        t.exports = !i("9e1e") && !i("79e5")(function() {
            return 7 != Object.defineProperty(i("230e")("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    c894: function(t, e, i) {
        "use strict";

        function n(t, e) {
            return t.__proto__ = e, t
        }
        Object.setPrototypeOf = Object.setPrototypeOf || n;
        n.bind(Object);

        function r() {
            return "undefined" !== typeof Symbol && "undefined" !== typeof Reflect && "undefined" !== typeof Proxy && !Object.isSealed(Proxy)
        }
        var o = r(),
            a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }();

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function l(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" !== typeof e && "function" !== typeof e ? t : e
        }

        function c(t, e) {
            if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function h() {
            return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
        }

        function u(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ("undefined" !== typeof customElements) {
                if (o) {
                    var i = function(t) {
                        function i(t) {
                            var e;
                            s(this, i);
                            var n = l(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this)),
                                o = t ? HTMLElement.call(t) : n;
                            return r.call(o), e = o, l(n, e)
                        }
                        return c(i, t), a(i, null, [{
                            key: "observedAttributes",
                            get: function() {
                                return e.observedAttributes || []
                            }
                        }]), i
                    }(h);
                    return i.prototype.connectedCallback = u, i.prototype.disconnectedCallback = d, i.prototype.attributeChangedCallback = p, f(t, i), i
                }
                var n = function(t) {
                    var e = t ? HTMLElement.call(t) : this;
                    return r.call(e), e
                };
                return n.observedAttributes = e.observedAttributes || [], n.prototype = Object.create(HTMLElement.prototype, {
                    constructor: {
                        configurable: !0,
                        writable: !0,
                        value: n
                    }
                }), n.prototype.connectedCallback = u, n.prototype.disconnectedCallback = d, n.prototype.attributeChangedCallback = p, f(t, n), n
            }

            function r() {
                !0 === e.shadow && HTMLElement.prototype.attachShadow && this.attachShadow({
                    mode: "open"
                }), "function" === typeof e.constructorCallback && e.constructorCallback.call(this)
            }

            function u() {
                "function" === typeof e.connectedCallback && e.connectedCallback.call(this)
            }

            function d() {
                "function" === typeof e.disconnectedCallback && e.disconnectedCallback.call(this)
            }

            function p(t, i, n) {
                "function" === typeof e.attributeChangedCallback && e.attributeChangedCallback.call(this, t, i, n)
            }

            function f(t, e) {
                var i = customElements.get(t);
                return "undefined" !== typeof i ? i : customElements.define(t, e)
            }
        }
        Object.setPrototypeOf(h.prototype, HTMLElement.prototype), Object.setPrototypeOf(h, HTMLElement);
        var d = /-(\w)/g,
            p = function(t) {
                return t.replace(d, function(t, e) {
                    return e ? e.toUpperCase() : ""
                })
            },
            f = /([^-])([A-Z])/g,
            g = function(t) {
                return t.replace(f, "$1-$2").replace(f, "$1-$2").toLowerCase()
            };

        function m(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = t.length - e,
                n = new Array(i);
            while (i--) n[i] = t[i + e];
            return n
        }
        var v = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };

        function y(t, e) {
            var i = t,
                n = ["true", "false"].indexOf(t) > -1,
                r = parseFloat(i, 10),
                o = !isNaN(r) && isFinite(i) && "string" === typeof i && !i.match(/^0+[^.]\d*$/g);
            return e && e !== Boolean && ("undefined" === typeof i ? "undefined" : v(i)) !== e ? i = e(t) : n || e === Boolean ? i = "" === i || "true" === i : o && (i = r), i
        }

        function x(t, e) {
            if (t && t.length) t.forEach(function(t) {
                var i = p(t); - 1 === e.camelCase.indexOf(i) && e.camelCase.push(i)
            });
            else if (t && "object" === ("undefined" === typeof t ? "undefined" : v(t)))
                for (var i in t) {
                    var n = p(i); - 1 === e.camelCase.indexOf(n) && e.camelCase.push(n), t[n] && t[n].type && (e.types[i] = [].concat(t[n].type)[0])
                }
        }

        function b() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = {
                    camelCase: [],
                    hyphenate: [],
                    types: {}
                };
            if (t.mixins && t.mixins.forEach(function(t) {
                    x(t.props, e)
                }), t.extends && t.extends.props) {
                var i = t.extends.props;
                x(i, e)
            }
            return x(t.props, e), e.camelCase.forEach(function(t) {
                e.hyphenate.push(g(t))
            }), e
        }

        function w(t, e) {
            e.camelCase.forEach(function(i, n) {
                Object.defineProperty(t, i, {
                    get: function() {
                        return this.__vue_custom_element__[i]
                    },
                    set: function(t) {
                        if ("object" !== ("undefined" === typeof t ? "undefined" : v(t)) && "function" !== typeof t || !this.__vue_custom_element__) {
                            var i = e.types[e.camelCase[n]];
                            this.setAttribute(e.hyphenate[n], y(t, i))
                        } else {
                            var r = e.camelCase[n];
                            this.__vue_custom_element__[r] = t
                        }
                    }
                })
            })
        }

        function _(t, e, i) {
            var n = e.propsData || {};
            return i.hyphenate.forEach(function(e, r) {
                var o = i.camelCase[r],
                    a = t.attributes[e] || t[o],
                    s = null;
                i.types[o] && (s = i.types[o]), a instanceof Attr ? n[o] = y(a.value, s) : "undefined" !== typeof a && (n[o] = a)
            }), n
        }

        function k(t) {
            var e = {};
            return m(t.attributes).forEach(function(t) {
                e["vue-slot" === t.nodeName ? "slot" : t.nodeName] = t.nodeValue
            }), e
        }

        function S(t) {
            if (t.childNodes.length) return t.childNodes;
            if (t.content && t.content.childNodes && t.content.childNodes.length) return t.content.childNodes;
            var e = document.createElement("div");
            return e.innerHTML = t.innerHTML, e.childNodes
        }

        function M(t, e, i) {
            var n = S(e),
                r = m(n).map(function(e) {
                    return "#text" === e.nodeName ? e.nodeValue : t(e.tagName, {
                        attrs: k(e),
                        domProps: {
                            innerHTML: e.innerHTML
                        }
                    })
                });
            return i.slot = e.id, t("template", i, r)
        }

        function A() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                e = arguments[1],
                i = [];
            return m(t).forEach(function(t) {
                if ("#text" === t.nodeName) t.nodeValue.trim() && i.push(e("span", t.nodeValue));
                else if ("#comment" !== t.nodeName) {
                    var n = k(t),
                        r = {
                            attrs: n,
                            domProps: {
                                innerHTML: "" === t.innerHTML ? t.innerText : t.innerHTML
                            }
                        };
                    n.slot && (r.slot = n.slot, n.slot = void 0);
                    var o = "TEMPLATE" === t.tagName ? M(e, t, r) : e(t.tagName, r);
                    i.push(o)
                }
            }), i
        }

        function C(t, e) {
            var i = {
                    bubbles: !1,
                    cancelable: !1,
                    detail: e
                },
                n = void 0;
            return "function" === typeof window.CustomEvent ? n = new CustomEvent(t, i) : (n = document.createEvent("CustomEvent"), n.initCustomEvent(t, i.bubbles, i.cancelable, i.detail)), n
        }

        function T(t, e) {
            for (var i = arguments.length, n = Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++) n[r - 2] = arguments[r];
            var o = C(e, [].concat(n));
            t.dispatchEvent(o)
        }

        function P(t, e, i, n, r) {
            if (!t.__vue_custom_element__) {
                var o = function() {
                        this.$emit = function() {
                            for (var e, i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                            T.apply(void 0, [t].concat(n)), this.__proto__ && (e = this.__proto__.$emit).call.apply(e, [this].concat(n))
                        }
                    },
                    a = e.util.extend({}, i),
                    s = _(t, a, n),
                    l = e.version && parseInt(e.version.split(".")[0], 10) || 0;
                if (a.beforeCreate = [].concat(a.beforeCreate || [], o), a._compiled) {
                    var c = {};
                    a._Ctor && (c = Object.values(a._Ctor)[0].options), c.beforeCreate = a.beforeCreate
                }
                var h = void 0;
                if (l >= 2) {
                    var u = t.cloneNode(!0).childNodes;
                    h = {
                        propsData: s,
                        props: n.camelCase,
                        computed: {
                            reactiveProps: function() {
                                var t = this,
                                    e = {};
                                return n.camelCase.forEach(function(i) {
                                    "undefined" !== typeof t[i] && (e[i] = t[i])
                                }), e
                            }
                        },
                        render: function(t) {
                            var e = {
                                props: this.reactiveProps
                            };
                            return t(a, e, A(u, t))
                        }
                    }
                } else if (1 === l) h = a, h.propsData = s;
                else {
                    h = a;
                    var d = {};
                    Object.keys(s).forEach(function(t) {
                        d[t] = {
                            default: s[t]
                        }
                    }), h.props = d
                }
                var p = l >= 2 ? "<div></div>" : ("<div>" + t.innerHTML + "</div>").replace(/vue-slot=/g, "slot=");
                if (r.shadow && t.shadowRoot ? (t.shadowRoot.innerHTML = p, h.el = t.shadowRoot.children[0]) : (t.innerHTML = p, h.el = t.children[0]), w(t, n), "function" === typeof r.beforeCreateVueInstance && (h = r.beforeCreateVueInstance(h) || h), t.__vue_custom_element__ = new e(h), t.__vue_custom_element_props__ = n, t.getVueInstance = function() {
                        return t.__vue_custom_element__.$children[0]
                    }, r.shadow && r.shadowCss && t.shadowRoot) {
                    var f = document.createElement("style");
                    f.type = "text/css", f.appendChild(document.createTextNode(r.shadowCss)), t.shadowRoot.appendChild(f)
                }
                t.removeAttribute("vce-cloak"), t.setAttribute("vce-ready", ""), T(t, "vce-ready")
            }
        }

        function O(t) {
            t.customElement = function(e, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = "function" === typeof i,
                    o = r && {
                        props: n.props || []
                    },
                    a = b(r ? o : i),
                    s = u(e, {
                        constructorCallback: function() {
                            "function" === typeof n.constructorCallback && n.constructorCallback.call(this)
                        },
                        connectedCallback: function() {
                            var o = this,
                                s = r && i(),
                                l = s && s.then && "function" === typeof s.then;
                            if ("function" === typeof n.connectedCallback && n.connectedCallback.call(this), r && !l) throw new Error("Async component " + e + " do not returns Promise");
                            this.__detached__ || (l ? s.then(function(e) {
                                var i = b(e);
                                P(o, t, e, i, n), "function" === typeof n.vueInstanceCreatedCallback && n.vueInstanceCreatedCallback.call(o)
                            }) : (P(this, t, i, a, n), "function" === typeof n.vueInstanceCreatedCallback && n.vueInstanceCreatedCallback.call(this))), this.__detached__ = !1
                        },
                        disconnectedCallback: function() {
                            var t = this;
                            this.__detached__ = !0, "function" === typeof n.disconnectedCallback && n.disconnectedCallback.call(this), setTimeout(function() {
                                t.__detached__ && t.__vue_custom_element__ && (t.__vue_custom_element__.$destroy(!0), delete t.__vue_custom_element__, delete t.__vue_custom_element_props__)
                            }, n.destroyTimeout || 3e3)
                        },
                        attributeChangedCallback: function(t, e, i) {
                            if (this.__vue_custom_element__ && "undefined" !== typeof i) {
                                var r = p(t);
                                "function" === typeof n.attributeChangedCallback && n.attributeChangedCallback.call(this, t, e, i);
                                var o = this.__vue_custom_element_props__.types[r];
                                this.__vue_custom_element__[r] = y(i, o)
                            }
                        },
                        observedAttributes: a.hyphenate,
                        shadow: !!n.shadow && !!HTMLElement.prototype.attachShadow
                    });
                return s
            }
        }
        "undefined" !== typeof window && window.Vue && (window.Vue.use(O), O.installed && (O.installed = !1)), e["a"] = O
    },
    c8ba: function(t, e) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (n) {
            "object" === typeof window && (i = window)
        }
        t.exports = i
    },
    ca5a: function(t, e) {
        var i = 0,
            n = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
        }
    },
    ca9f: function(t, e, i) {
        "use strict";
        var n = i("0f7c"),
            r = i("f367"),
            o = i("562e"),
            a = i("1b7f"),
            s = i("b3fd"),
            l = n.call(Function.call, a());
        r(l, {
            getPolyfill: a,
            implementation: o,
            shim: s
        }), t.exports = l
    },
    cadf: function(t, e, i) {
        "use strict";
        var n = i("9c6c"),
            r = i("d53b"),
            o = i("84f2"),
            a = i("6821");
        t.exports = i("01f9")(Array, "Array", function(t, e) {
            this._t = a(t), this._i = 0, this._k = e
        }, function() {
            var t = this._t,
                e = this._k,
                i = this._i++;
            return !t || i >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]])
        }, "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries")
    },
    cb7c: function(t, e, i) {
        var n = i("d3f4");
        t.exports = function(t) {
            if (!n(t)) throw TypeError(t + " is not an object!");
            return t
        }
    },
    ce10: function(t, e, i) {
        var n = i("69a8"),
            r = i("6821"),
            o = i("c366")(!1),
            a = i("613b")("IE_PROTO");
        t.exports = function(t, e) {
            var i, s = r(t),
                l = 0,
                c = [];
            for (i in s) i != a && n(s, i) && c.push(i);
            while (e.length > l) n(s, i = e[l++]) && (~o(c, i) || c.push(i));
            return c
        }
    },
    d024: function(t, e, i) {
        "use strict";
        var n = i("21d0"),
            r = Object.prototype.toString,
            o = Object.prototype.hasOwnProperty,
            a = function(t, e, i) {
                for (var n = 0, r = t.length; n < r; n++) o.call(t, n) && (null == i ? e(t[n], n, t) : e.call(i, t[n], n, t))
            },
            s = function(t, e, i) {
                for (var n = 0, r = t.length; n < r; n++) null == i ? e(t.charAt(n), n, t) : e.call(i, t.charAt(n), n, t)
            },
            l = function(t, e, i) {
                for (var n in t) o.call(t, n) && (null == i ? e(t[n], n, t) : e.call(i, t[n], n, t))
            },
            c = function(t, e, i) {
                if (!n(e)) throw new TypeError("iterator must be a function");
                var o;
                arguments.length >= 3 && (o = i), "[object Array]" === r.call(t) ? a(t, e, o) : "string" === typeof t ? s(t, e, o) : l(t, e, o)
            };
        t.exports = c
    },
    d127: function(t, e, i) {
        i("0a0a")("asyncIterator")
    },
    d13f: function(t, e, i) {
        var n = i("da3c"),
            r = i("a7d3"),
            o = i("bc25"),
            a = i("8ce0"),
            s = i("43c8"),
            l = "prototype",
            c = function(t, e, i) {
                var h, u, d, p = t & c.F,
                    f = t & c.G,
                    g = t & c.S,
                    m = t & c.P,
                    v = t & c.B,
                    y = t & c.W,
                    x = f ? r : r[e] || (r[e] = {}),
                    b = x[l],
                    w = f ? n : g ? n[e] : (n[e] || {})[l];
                for (h in f && (i = e), i) u = !p && w && void 0 !== w[h], u && s(x, h) || (d = u ? w[h] : i[h], x[h] = f && "function" != typeof w[h] ? i[h] : v && u ? o(d, n) : y && w[h] == d ? function(t) {
                    var e = function(e, i, n) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e, i)
                            }
                            return new t(e, i, n)
                        }
                        return t.apply(this, arguments)
                    };
                    return e[l] = t[l], e
                }(d) : m && "function" == typeof d ? o(Function.call, d) : d, m && ((x.virtual || (x.virtual = {}))[h] = d, t & c.R && b && !b[h] && a(b, h, d)))
            };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    },
    d24f: function(t, e, i) {
        i("0a0a")("observable")
    },
    d256: function(t, e, i) {
        "use strict";
        var n = i("da3c"),
            r = i("43c8"),
            o = i("7d95"),
            a = i("d13f"),
            s = i("2312"),
            l = i("6277").KEY,
            c = i("d782"),
            h = i("7772"),
            u = i("c0d8"),
            d = i("7b00"),
            p = i("1b55"),
            f = i("fda1"),
            g = i("0a0a"),
            m = i("d2d6"),
            v = i("b5aa"),
            y = i("0f89"),
            x = i("6f8a"),
            b = i("6a9b"),
            w = i("2ea1"),
            _ = i("f845"),
            k = i("7108"),
            S = i("565d"),
            M = i("626e"),
            A = i("3adc"),
            C = i("7633"),
            T = M.f,
            P = A.f,
            O = S.f,
            L = n.Symbol,
            E = n.JSON,
            D = E && E.stringify,
            I = "prototype",
            z = p("_hidden"),
            B = p("toPrimitive"),
            N = {}.propertyIsEnumerable,
            R = h("symbol-registry"),
            j = h("symbols"),
            F = h("op-symbols"),
            H = Object[I],
            G = "function" == typeof L,
            W = n.QObject,
            $ = !W || !W[I] || !W[I].findChild,
            X = o && c(function() {
                return 7 != k(P({}, "a", {
                    get: function() {
                        return P(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, e, i) {
                var n = T(H, e);
                n && delete H[e], P(t, e, i), n && t !== H && P(H, e, n)
            } : P,
            Y = function(t) {
                var e = j[t] = k(L[I]);
                return e._k = t, e
            },
            V = G && "symbol" == typeof L.iterator ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                return t instanceof L
            },
            U = function(t, e, i) {
                return t === H && U(F, e, i), y(t), e = w(e, !0), y(i), r(j, e) ? (i.enumerable ? (r(t, z) && t[z][e] && (t[z][e] = !1), i = k(i, {
                    enumerable: _(0, !1)
                })) : (r(t, z) || P(t, z, _(1, {})), t[z][e] = !0), X(t, e, i)) : P(t, e, i)
            },
            K = function(t, e) {
                y(t);
                var i, n = m(e = b(e)),
                    r = 0,
                    o = n.length;
                while (o > r) U(t, i = n[r++], e[i]);
                return t
            },
            q = function(t, e) {
                return void 0 === e ? k(t) : K(k(t), e)
            },
            Z = function(t) {
                var e = N.call(this, t = w(t, !0));
                return !(this === H && r(j, t) && !r(F, t)) && (!(e || !r(this, t) || !r(j, t) || r(this, z) && this[z][t]) || e)
            },
            J = function(t, e) {
                if (t = b(t), e = w(e, !0), t !== H || !r(j, e) || r(F, e)) {
                    var i = T(t, e);
                    return !i || !r(j, e) || r(t, z) && t[z][e] || (i.enumerable = !0), i
                }
            },
            Q = function(t) {
                var e, i = O(b(t)),
                    n = [],
                    o = 0;
                while (i.length > o) r(j, e = i[o++]) || e == z || e == l || n.push(e);
                return n
            },
            tt = function(t) {
                var e, i = t === H,
                    n = O(i ? F : b(t)),
                    o = [],
                    a = 0;
                while (n.length > a) !r(j, e = n[a++]) || i && !r(H, e) || o.push(j[e]);
                return o
            };
        G || (L = function() {
            if (this instanceof L) throw TypeError("Symbol is not a constructor!");
            var t = d(arguments.length > 0 ? arguments[0] : void 0),
                e = function(i) {
                    this === H && e.call(F, i), r(this, z) && r(this[z], t) && (this[z][t] = !1), X(this, t, _(1, i))
                };
            return o && $ && X(H, t, {
                configurable: !0,
                set: e
            }), Y(t)
        }, s(L[I], "toString", function() {
            return this._k
        }), M.f = J, A.f = U, i("d876").f = S.f = Q, i("d74e").f = Z, i("31c2").f = tt, o && !i("b457") && s(H, "propertyIsEnumerable", Z, !0), f.f = function(t) {
            return Y(p(t))
        }), a(a.G + a.W + a.F * !G, {
            Symbol: L
        });
        for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), it = 0; et.length > it;) p(et[it++]);
        for (var nt = C(p.store), rt = 0; nt.length > rt;) g(nt[rt++]);
        a(a.S + a.F * !G, "Symbol", {
            for: function(t) {
                return r(R, t += "") ? R[t] : R[t] = L(t)
            },
            keyFor: function(t) {
                if (!V(t)) throw TypeError(t + " is not a symbol!");
                for (var e in R)
                    if (R[e] === t) return e
            },
            useSetter: function() {
                $ = !0
            },
            useSimple: function() {
                $ = !1
            }
        }), a(a.S + a.F * !G, "Object", {
            create: q,
            defineProperty: U,
            defineProperties: K,
            getOwnPropertyDescriptor: J,
            getOwnPropertyNames: Q,
            getOwnPropertySymbols: tt
        }), E && a(a.S + a.F * (!G || c(function() {
            var t = L();
            return "[null]" != D([t]) || "{}" != D({
                a: t
            }) || "{}" != D(Object(t))
        })), "JSON", {
            stringify: function(t) {
                var e, i, n = [t],
                    r = 1;
                while (arguments.length > r) n.push(arguments[r++]);
                if (i = e = n[1], (x(e) || void 0 !== t) && !V(t)) return v(e) || (e = function(t, e) {
                    if ("function" == typeof i && (e = i.call(this, t, e)), !V(e)) return e
                }), n[1] = e, D.apply(E, n)
            }
        }), L[I][B] || i("8ce0")(L[I], B, L[I].valueOf), u(L, "Symbol"), u(Math, "Math", !0), u(n.JSON, "JSON", !0)
    },
    d2d6: function(t, e, i) {
        var n = i("7633"),
            r = i("31c2"),
            o = i("d74e");
        t.exports = function(t) {
            var e = n(t),
                i = r.f;
            if (i) {
                var a, s = i(t),
                    l = o.f,
                    c = 0;
                while (s.length > c) l.call(t, a = s[c++]) && e.push(a)
            }
            return e
        }
    },
    d3f4: function(t, e) {
        t.exports = function(t) {
            return "object" === typeof t ? null !== t : "function" === typeof t
        }
    },
    d4ab: function(t, e, i) {
        "use strict";
        var n = Object.prototype.toString;
        t.exports = function(t) {
            var e = n.call(t),
                i = "[object Arguments]" === e;
            return i || (i = "[object Array]" !== e && null !== t && "object" === typeof t && "number" === typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)), i
        }
    },
    d53b: function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    },
    d6c7: function(t, e, i) {
        "use strict";
        var n = Object.prototype.hasOwnProperty,
            r = Object.prototype.toString,
            o = Array.prototype.slice,
            a = i("d4ab"),
            s = Object.prototype.propertyIsEnumerable,
            l = !s.call({
                toString: null
            }, "toString"),
            c = s.call(function() {}, "prototype"),
            h = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            u = function(t) {
                var e = t.constructor;
                return e && e.prototype === t
            },
            d = {
                $applicationCache: !0,
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
            },
            p = function() {
                if ("undefined" === typeof window) return !1;
                for (var t in window) try {
                    if (!d["$" + t] && n.call(window, t) && null !== window[t] && "object" === typeof window[t]) try {
                        u(window[t])
                    } catch (e) {
                        return !0
                    }
                } catch (e) {
                    return !0
                }
                return !1
            }(),
            f = function(t) {
                if ("undefined" === typeof window || !p) return u(t);
                try {
                    return u(t)
                } catch (e) {
                    return !1
                }
            },
            g = function(t) {
                var e = null !== t && "object" === typeof t,
                    i = "[object Function]" === r.call(t),
                    o = a(t),
                    s = e && "[object String]" === r.call(t),
                    u = [];
                if (!e && !i && !o) throw new TypeError("Object.keys called on a non-object");
                var d = c && i;
                if (s && t.length > 0 && !n.call(t, 0))
                    for (var p = 0; p < t.length; ++p) u.push(String(p));
                if (o && t.length > 0)
                    for (var g = 0; g < t.length; ++g) u.push(String(g));
                else
                    for (var m in t) d && "prototype" === m || !n.call(t, m) || u.push(String(m));
                if (l)
                    for (var v = f(t), y = 0; y < h.length; ++y) v && "constructor" === h[y] || !n.call(t, h[y]) || u.push(h[y]);
                return u
            };
        g.shim = function() {
            if (Object.keys) {
                var t = function() {
                    return 2 === (Object.keys(arguments) || "").length
                }(1, 2);
                if (!t) {
                    var e = Object.keys;
                    Object.keys = function(t) {
                        return a(t) ? e(o.call(t)) : e(t)
                    }
                }
            } else Object.keys = g;
            return Object.keys || g
        }, t.exports = g
    },
    d74e: function(t, e) {
        e.f = {}.propertyIsEnumerable
    },
    d782: function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (e) {
                return !0
            }
        }
    },
    d876: function(t, e, i) {
        var n = i("2695"),
            r = i("0029").concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return n(t, r)
        }
    },
    d8e8: function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    },
    da3c: function(t, e) {
        var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = i)
    },
    dcbc: function(t, e, i) {
        var n = i("2aba");
        t.exports = function(t, e, i) {
            for (var r in e) n(t, r, e[r], i);
            return t
        }
    },
    dd04: function(t, e, i) {
        i("12fd9"), i("93c4"), i("b42c"), i("5b5f"), i("b604"), i("c609"), t.exports = i("a7d3").Promise
    },
    dd11: function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "ê³ ê°€ (24ì‹œê°„)",
                "24h_low": "ì €ê°€ (24ì‹œê°„)",
                view_price_chart: "ì°¨íŠ¸ ë³´ê¸°",
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "ê³ ê°€ (24ì‹œê°„)",
                "24h_low": "ì €ê°€ (24ì‹œê°„)",
                view_price_chart: "ì°¨íŠ¸ ë³´ê¸°",
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "ì°¨íŠ¸ ë³´ê¸°",
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: "ì•”í˜¸í™”í Tree Map",
                subtitle: "(ì‹œê°€ì´ì•¡ ìƒìœ„ %{top})",
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            }
        }
    },
    decf: function(t, e, i) {
        var n = i("0f89"),
            r = i("6f8a"),
            o = i("03ca");
        t.exports = function(t, e) {
            if (n(t), r(e) && e.constructor === t) return e;
            var i = o.f(t),
                a = i.resolve;
            return a(e), i.promise
        }
    },
    df0a: function(t, e, i) {
        var n, r, o, a = i("bc25"),
            s = i("196c"),
            l = i("103a"),
            c = i("12fd"),
            h = i("da3c"),
            u = h.process,
            d = h.setImmediate,
            p = h.clearImmediate,
            f = h.MessageChannel,
            g = h.Dispatch,
            m = 0,
            v = {},
            y = "onreadystatechange",
            x = function() {
                var t = +this;
                if (v.hasOwnProperty(t)) {
                    var e = v[t];
                    delete v[t], e()
                }
            },
            b = function(t) {
                x.call(t.data)
            };
        d && p || (d = function(t) {
            var e = [],
                i = 1;
            while (arguments.length > i) e.push(arguments[i++]);
            return v[++m] = function() {
                s("function" == typeof t ? t : Function(t), e)
            }, n(m), m
        }, p = function(t) {
            delete v[t]
        }, "process" == i("6e1f")(u) ? n = function(t) {
            u.nextTick(a(x, t, 1))
        } : g && g.now ? n = function(t) {
            g.now(a(x, t, 1))
        } : f ? (r = new f, o = r.port2, r.port1.onmessage = b, n = a(o.postMessage, o, 1)) : h.addEventListener && "function" == typeof postMessage && !h.importScripts ? (n = function(t) {
            h.postMessage(t + "", "*")
        }, h.addEventListener("message", b, !1)) : n = y in c("script") ? function(t) {
            l.appendChild(c("script"))[y] = function() {
                l.removeChild(this), x.call(t)
            }
        } : function(t) {
            setTimeout(a(x, t, 1), 0)
        }), t.exports = {
            set: d,
            clear: p
        }
    },
    e11e: function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    e4a9: function(t, e, i) {
        "use strict";
        var n = i("b457"),
            r = i("d13f"),
            o = i("2312"),
            a = i("8ce0"),
            s = i("b22a"),
            l = i("5ce7"),
            c = i("c0d8"),
            h = i("ff0c"),
            u = i("1b55")("iterator"),
            d = !([].keys && "next" in [].keys()),
            p = "@@iterator",
            f = "keys",
            g = "values",
            m = function() {
                return this
            };
        t.exports = function(t, e, i, v, y, x, b) {
            l(i, e, v);
            var w, _, k, S = function(t) {
                    if (!d && t in T) return T[t];
                    switch (t) {
                        case f:
                            return function() {
                                return new i(this, t)
                            };
                        case g:
                            return function() {
                                return new i(this, t)
                            }
                    }
                    return function() {
                        return new i(this, t)
                    }
                },
                M = e + " Iterator",
                A = y == g,
                C = !1,
                T = t.prototype,
                P = T[u] || T[p] || y && T[y],
                O = P || S(y),
                L = y ? A ? S("entries") : O : void 0,
                E = "Array" == e && T.entries || P;
            if (E && (k = h(E.call(new t)), k !== Object.prototype && k.next && (c(k, M, !0), n || "function" == typeof k[u] || a(k, u, m))), A && P && P.name !== g && (C = !0, O = function() {
                    return P.call(this)
                }), n && !b || !d && !C && T[u] || a(T, u, O), s[e] = O, s[M] = m, y)
                if (w = {
                        values: A ? O : S(g),
                        keys: x ? O : S(f),
                        entries: L
                    }, b)
                    for (_ in w) _ in T || o(T, _, w[_]);
                else r(r.P + r.F * (d || C), e, w);
            return w
        }
    },
    e591: function(t, e, i) {
        var n;
        (function(r, o) {
            t.exports ? t.exports = r.document ? o(r) : o : (n = function() {
                return o(r)
            }.call(e, i, e, t), void 0 === n || (t.exports = n))
        })("undefined" !== typeof window ? window : this, function(t) {
            var e = function() {
                var e = "undefined" === typeof t ? window : t,
                    i = e.document,
                    n = e.navigator && e.navigator.userAgent || "",
                    r = i && i.createElementNS && !!i.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                    o = /(edge|msie|trident)/i.test(n) && !e.opera,
                    a = -1 !== n.indexOf("Firefox"),
                    s = -1 !== n.indexOf("Chrome"),
                    l = a && 4 > parseInt(n.split("Firefox/")[1], 10);
                return e.Highcharts ? e.Highcharts.error(16, !0) : {
                    product: "Highstock",
                    version: "6.2.0",
                    deg2rad: 2 * Math.PI / 360,
                    doc: i,
                    hasBidiBug: l,
                    hasTouch: i && void 0 !== i.documentElement.ontouchstart,
                    isMS: o,
                    isWebKit: -1 !== n.indexOf("AppleWebKit"),
                    isFirefox: a,
                    isChrome: s,
                    isSafari: !s && -1 !== n.indexOf("Safari"),
                    isTouchDevice: /(Mobile|Android|Windows Phone)/.test(n),
                    SVG_NS: "http://www.w3.org/2000/svg",
                    chartCount: 0,
                    seriesTypes: {},
                    symbolSizes: {},
                    svg: r,
                    win: e,
                    marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
                    noop: function() {},
                    charts: []
                }
            }();
            (function(t) {
                t.timers = [];
                var e = t.charts,
                    i = t.doc,
                    n = t.win;
                t.error = function(e, i) {
                    if (e = t.isNumber(e) ? "Highcharts error #" + e + ": www.highcharts.com/errors/" + e : e, i) throw Error(e);
                    n.console && console.log(e)
                }, t.Fx = function(t, e, i) {
                    this.options = e, this.elem = t, this.prop = i
                }, t.Fx.prototype = {
                    dSetter: function() {
                        var t, e = this.paths[0],
                            i = this.paths[1],
                            n = [],
                            r = this.now,
                            o = e.length;
                        if (1 === r) n = this.toD;
                        else if (o === i.length && 1 > r)
                            for (; o--;) t = parseFloat(e[o]), n[o] = isNaN(t) ? i[o] : r * parseFloat(i[o] - t) + t;
                        else n = i;
                        this.elem.attr("d", n, null, !0)
                    },
                    update: function() {
                        var t = this.elem,
                            e = this.prop,
                            i = this.now,
                            n = this.options.step;
                        this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, n && n.call(t, i, this)
                    },
                    run: function(e, i, r) {
                        var o = this,
                            a = o.options,
                            s = function(t) {
                                return !s.stopped && o.step(t)
                            },
                            l = n.requestAnimationFrame || function(t) {
                                setTimeout(t, 13)
                            },
                            c = function() {
                                for (var e = 0; e < t.timers.length; e++) t.timers[e]() || t.timers.splice(e--, 1);
                                t.timers.length && l(c)
                            };
                        e !== i || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = e, this.end = i, this.unit = r, this.now = this.start, this.pos = 0, s.elem = this.elem, s.prop = this.prop, s() && 1 === t.timers.push(s) && l(c)) : (delete a.curAnim[this.prop], a.complete && 0 === t.keys(a.curAnim).length && a.complete.call(this.elem))
                    },
                    step: function(e) {
                        var i, n = +new Date,
                            r = this.options,
                            o = this.elem,
                            a = r.complete,
                            s = r.duration,
                            l = r.curAnim;
                        return o.attr && !o.element ? e = !1 : e || n >= s + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), i = l[this.prop] = !0, t.objectEach(l, function(t) {
                            !0 !== t && (i = !1)
                        }), i && a && a.call(o), e = !1) : (this.pos = r.easing((n - this.startTime) / s), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0), e
                    },
                    initPath: function(e, i, n) {
                        function r(t) {
                            var e, i;
                            for (h = t.length; h--;) e = "M" === t[h] || "L" === t[h], i = /[a-zA-Z]/.test(t[h + 3]), e && i && t.splice(h + 1, 0, t[h + 1], t[h + 2], t[h + 1], t[h + 2])
                        }

                        function o(t, e) {
                            for (; t.length < l;) {
                                t[0] = e[l - t.length];
                                var i = t.slice(0, f);
                                [].splice.apply(t, [0, 0].concat(i)), m && (i = t.slice(t.length - f), [].splice.apply(t, [t.length, 0].concat(i)), h--)
                            }
                            t[0] = "M"
                        }

                        function a(t, e) {
                            for (var i = (l - t.length) / f; 0 < i && i--;) c = t.slice().splice(t.length / v - f, f * v), c[0] = e[l - f - i * f], p && (c[f - 6] = c[f - 2], c[f - 5] = c[f - 1]), [].splice.apply(t, [t.length / v, 0].concat(c)), m && i--
                        }
                        i = i || "";
                        var s, l, c, h, u = e.startX,
                            d = e.endX,
                            p = -1 < i.indexOf("C"),
                            f = p ? 7 : 3;
                        i = i.split(" "), n = n.slice();
                        var g, m = e.isArea,
                            v = m ? 2 : 1;
                        if (p && (r(i), r(n)), u && d) {
                            for (h = 0; h < u.length; h++) {
                                if (u[h] === d[0]) {
                                    s = h;
                                    break
                                }
                                if (u[0] === d[d.length - u.length + h]) {
                                    s = h, g = !0;
                                    break
                                }
                            }
                            void 0 === s && (i = [])
                        }
                        return i.length && t.isNumber(s) && (l = n.length + s * v * f, g ? (o(i, n), a(n, i)) : (o(n, i), a(i, n))), [i, n]
                    },
                    fillSetter: function() {
                        t.Fx.prototype.strokeSetter.apply(this, arguments)
                    },
                    strokeSetter: function() {
                        this.elem.attr(this.prop, t.color(this.start).tweenTo(t.color(this.end), this.pos), null, !0)
                    }
                }, t.merge = function() {
                    var e, i, n = arguments,
                        r = {},
                        o = function(e, i) {
                            return "object" !== typeof e && (e = {}), t.objectEach(i, function(n, r) {
                                !t.isObject(n, !0) || t.isClass(n) || t.isDOMElement(n) ? e[r] = i[r] : e[r] = o(e[r] || {}, n)
                            }), e
                        };
                    for (!0 === n[0] && (r = n[1], n = Array.prototype.slice.call(n, 2)), i = n.length, e = 0; e < i; e++) r = o(r, n[e]);
                    return r
                }, t.pInt = function(t, e) {
                    return parseInt(t, e || 10)
                }, t.isString = function(t) {
                    return "string" === typeof t
                }, t.isArray = function(t) {
                    return t = Object.prototype.toString.call(t), "[object Array]" === t || "[object Array Iterator]" === t
                }, t.isObject = function(e, i) {
                    return !!e && "object" === typeof e && (!i || !t.isArray(e))
                }, t.isDOMElement = function(e) {
                    return t.isObject(e) && "number" === typeof e.nodeType
                }, t.isClass = function(e) {
                    var i = e && e.constructor;
                    return !(!t.isObject(e, !0) || t.isDOMElement(e) || !i || !i.name || "Object" === i.name)
                }, t.isNumber = function(t) {
                    return "number" === typeof t && !isNaN(t) && 1 / 0 > t && -1 / 0 < t
                }, t.erase = function(t, e) {
                    for (var i = t.length; i--;)
                        if (t[i] === e) {
                            t.splice(i, 1);
                            break
                        }
                }, t.defined = function(t) {
                    return void 0 !== t && null !== t
                }, t.attr = function(e, i, n) {
                    var r;
                    return t.isString(i) ? t.defined(n) ? e.setAttribute(i, n) : e && e.getAttribute && ((r = e.getAttribute(i)) || "class" !== i || (r = e.getAttribute(i + "Name"))) : t.defined(i) && t.isObject(i) && t.objectEach(i, function(t, i) {
                        e.setAttribute(i, t)
                    }), r
                }, t.splat = function(e) {
                    return t.isArray(e) ? e : [e]
                }, t.syncTimeout = function(t, e, i) {
                    if (e) return setTimeout(t, e, i);
                    t.call(0, i)
                }, t.clearTimeout = function(e) {
                    t.defined(e) && clearTimeout(e)
                }, t.extend = function(t, e) {
                    var i;
                    for (i in t || (t = {}), e) t[i] = e[i];
                    return t
                }, t.pick = function() {
                    var t, e, i = arguments,
                        n = i.length;
                    for (t = 0; t < n; t++)
                        if (e = i[t], void 0 !== e && null !== e) return e
                }, t.css = function(e, i) {
                    t.isMS && !t.svg && i && void 0 !== i.opacity && (i.filter = "alpha(opacity=" + 100 * i.opacity + ")"), t.extend(e.style, i)
                }, t.createElement = function(e, n, r, o, a) {
                    e = i.createElement(e);
                    var s = t.css;
                    return n && t.extend(e, n), a && s(e, {
                        padding: 0,
                        border: "none",
                        margin: 0
                    }), r && s(e, r), o && o.appendChild(e), e
                }, t.extendClass = function(e, i) {
                    var n = function() {};
                    return n.prototype = new e, t.extend(n.prototype, i), n
                }, t.pad = function(t, e, i) {
                    return Array((e || 2) + 1 - String(t).replace("-", "").length).join(i || 0) + t
                }, t.relativeLength = function(t, e, i) {
                    return /%$/.test(t) ? e * parseFloat(t) / 100 + (i || 0) : parseFloat(t)
                }, t.wrap = function(t, e, i) {
                    var n = t[e];
                    t[e] = function() {
                        var t = Array.prototype.slice.call(arguments),
                            e = arguments,
                            r = this;
                        return r.proceed = function() {
                            n.apply(r, arguments.length ? arguments : e)
                        }, t.unshift(n), t = i.apply(this, t), r.proceed = null, t
                    }
                }, t.datePropsToTimestamps = function(e) {
                    t.objectEach(e, function(i, n) {
                        t.isObject(i) && "function" === typeof i.getTime ? e[n] = i.getTime() : (t.isObject(i) || t.isArray(i)) && t.datePropsToTimestamps(i)
                    })
                }, t.formatSingle = function(e, i, n) {
                    var r = /\.([0-9])/,
                        o = t.defaultOptions.lang;
                    return /f$/.test(e) ? (n = (n = e.match(r)) ? n[1] : -1, null !== i && (i = t.numberFormat(i, n, o.decimalPoint, -1 < e.indexOf(",") ? o.thousandsSep : ""))) : i = (n || t.time).dateFormat(e, i), i
                }, t.format = function(e, i, n) {
                    for (var r, o, a, s, l, c = "{", h = !1, u = []; e;) {
                        if (c = e.indexOf(c), -1 === c) break;
                        if (r = e.slice(0, c), h) {
                            for (r = r.split(":"), o = r.shift().split("."), s = o.length, l = i, a = 0; a < s; a++) l && (l = l[o[a]]);
                            r.length && (l = t.formatSingle(r.join(":"), l, n)), u.push(l)
                        } else u.push(r);
                        e = e.slice(c + 1), c = (h = !h) ? "}" : "{"
                    }
                    return u.push(e), u.join("")
                }, t.getMagnitude = function(t) {
                    return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
                }, t.normalizeTickInterval = function(e, i, n, r, o) {
                    var a, s = e;
                    for (n = t.pick(n, 1), a = e / n, i || (i = o ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === r && (1 === n ? i = t.grep(i, function(t) {
                            return 0 === t % 1
                        }) : .1 >= n && (i = [1 / n]))), r = 0; r < i.length && (s = i[r], !(o && s * n >= e || !o && a <= (i[r] + (i[r + 1] || i[r])) / 2)); r++);
                    return t.correctFloat(s * n, -Math.round(Math.log(.001) / Math.LN10))
                }, t.stableSort = function(t, e) {
                    var i, n, r = t.length;
                    for (n = 0; n < r; n++) t[n].safeI = n;
                    for (t.sort(function(t, n) {
                            return i = e(t, n), 0 === i ? t.safeI - n.safeI : i
                        }), n = 0; n < r; n++) delete t[n].safeI
                }, t.arrayMin = function(t) {
                    for (var e = t.length, i = t[0]; e--;) t[e] < i && (i = t[e]);
                    return i
                }, t.arrayMax = function(t) {
                    for (var e = t.length, i = t[0]; e--;) t[e] > i && (i = t[e]);
                    return i
                }, t.destroyObjectProperties = function(e, i) {
                    t.objectEach(e, function(t, n) {
                        t && t !== i && t.destroy && t.destroy(), delete e[n]
                    })
                }, t.discardElement = function(e) {
                    var i = t.garbageBin;
                    i || (i = t.createElement("div")), e && i.appendChild(e), i.innerHTML = ""
                }, t.correctFloat = function(t, e) {
                    return parseFloat(t.toPrecision(e || 14))
                }, t.setAnimation = function(e, i) {
                    i.renderer.globalAnimation = t.pick(e, i.options.chart.animation, !0)
                }, t.animObject = function(e) {
                    return t.isObject(e) ? t.merge(e) : {
                        duration: e ? 500 : 0
                    }
                }, t.timeUnits = {
                    millisecond: 1,
                    second: 1e3,
                    minute: 6e4,
                    hour: 36e5,
                    day: 864e5,
                    week: 6048e5,
                    month: 24192e5,
                    year: 314496e5
                }, t.numberFormat = function(e, i, n, r) {
                    e = +e || 0, i = +i;
                    var o, a, s = t.defaultOptions.lang,
                        l = (e.toString().split(".")[1] || "").split("e")[0].length,
                        c = e.toString().split("e");
                    return -1 === i ? i = Math.min(l, 20) : t.isNumber(i) ? i && c[1] && 0 > c[1] && (o = i + +c[1], 0 <= o ? (c[0] = (+c[0]).toExponential(o).split("e")[0], i = o) : (c[0] = c[0].split(".")[0] || 0, e = 20 > i ? (c[0] * Math.pow(10, c[1])).toFixed(i) : 0, c[1] = 0)) : i = 2, a = (Math.abs(c[1] ? c[0] : e) + Math.pow(10, -Math.max(i, l) - 1)).toFixed(i), l = String(t.pInt(a)), o = 3 < l.length ? l.length % 3 : 0, n = t.pick(n, s.decimalPoint), r = t.pick(r, s.thousandsSep), e = (0 > e ? "-" : "") + (o ? l.substr(0, o) + r : ""), e += l.substr(o).replace(/(\d{3})(?=\d)/g, "$1" + r), i && (e += n + a.slice(-i)), c[1] && 0 !== +e && (e += "e" + c[1]), e
                }, Math.easeInOutSine = function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                }, t.getStyle = function(e, i, r) {
                    return "width" === i ? Math.max(0, Math.min(e.offsetWidth, e.scrollWidth) - t.getStyle(e, "padding-left") - t.getStyle(e, "padding-right")) : "height" === i ? Math.max(0, Math.min(e.offsetHeight, e.scrollHeight) - t.getStyle(e, "padding-top") - t.getStyle(e, "padding-bottom")) : (n.getComputedStyle || t.error(27, !0), (e = n.getComputedStyle(e, void 0)) && (e = e.getPropertyValue(i), t.pick(r, "opacity" !== i) && (e = t.pInt(e))), e)
                }, t.inArray = function(e, i, n) {
                    return (t.indexOfPolyfill || Array.prototype.indexOf).call(i, e, n)
                }, t.grep = function(e, i) {
                    return (t.filterPolyfill || Array.prototype.filter).call(e, i)
                }, t.find = Array.prototype.find ? function(t, e) {
                    return t.find(e)
                } : function(t, e) {
                    var i, n = t.length;
                    for (i = 0; i < n; i++)
                        if (e(t[i], i)) return t[i]
                }, t.some = function(e, i, n) {
                    return (t.somePolyfill || Array.prototype.some).call(e, i, n)
                }, t.map = function(t, e) {
                    for (var i = [], n = 0, r = t.length; n < r; n++) i[n] = e.call(t[n], t[n], n, t);
                    return i
                }, t.keys = function(e) {
                    return (t.keysPolyfill || Object.keys).call(void 0, e)
                }, t.reduce = function(e, i, n) {
                    return (t.reducePolyfill || Array.prototype.reduce).apply(e, 2 < arguments.length ? [i, n] : [i])
                }, t.offset = function(t) {
                    var e = i.documentElement;
                    return t = t.parentElement || t.parentNode ? t.getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    }, {
                        top: t.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: t.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                    }
                }, t.stop = function(e, i) {
                    for (var n = t.timers.length; n--;) t.timers[n].elem !== e || i && i !== t.timers[n].prop || (t.timers[n].stopped = !0)
                }, t.each = function(e, i, n) {
                    return (t.forEachPolyfill || Array.prototype.forEach).call(e, i, n)
                }, t.objectEach = function(t, e, i) {
                    for (var n in t) t.hasOwnProperty(n) && e.call(i || t[n], t[n], n, t)
                }, t.addEvent = function(e, i, n, r) {
                    var o, a = e.addEventListener || t.addEventListenerPolyfill;
                    return o = "function" === typeof e && e.prototype ? e.prototype.protoEvents = e.prototype.protoEvents || {} : e.hcEvents = e.hcEvents || {}, t.Point && e instanceof t.Point && e.series && e.series.chart && (e.series.chart.runTrackerClick = !0), a && a.call(e, i, n, !1), o[i] || (o[i] = []), o[i].push(n), r && t.isNumber(r.order) && (n.order = r.order, o[i].sort(function(t, e) {
                            return t.order - e.order
                        })),
                        function() {
                            t.removeEvent(e, i, n)
                        }
                }, t.removeEvent = function(e, i, n) {
                    function r(i, n) {
                        var r = e.removeEventListener || t.removeEventListenerPolyfill;
                        r && r.call(e, i, n, !1)
                    }

                    function o(n) {
                        var o, a;
                        e.nodeName && (i ? (o = {}, o[i] = !0) : o = n, t.objectEach(o, function(t, e) {
                            if (n[e])
                                for (a = n[e].length; a--;) r(e, n[e][a])
                        }))
                    }
                    var a, s;
                    t.each(["protoEvents", "hcEvents"], function(l) {
                        var c = e[l];
                        c && (i ? (a = c[i] || [], n ? (s = t.inArray(n, a), -1 < s && (a.splice(s, 1), c[i] = a), r(i, n)) : (o(c), c[i] = [])) : (o(c), e[l] = {}))
                    })
                }, t.fireEvent = function(e, n, r, o) {
                    var a, s, l, c, h;
                    r = r || {}, i.createEvent && (e.dispatchEvent || e.fireEvent) ? (a = i.createEvent("Events"), a.initEvent(n, !0, !0), t.extend(a, r), e.dispatchEvent ? e.dispatchEvent(a) : e.fireEvent(n, a)) : t.each(["protoEvents", "hcEvents"], function(i) {
                        if (e[i])
                            for (s = e[i][n] || [], l = s.length, r.target || t.extend(r, {
                                    preventDefault: function() {
                                        r.defaultPrevented = !0
                                    },
                                    target: e,
                                    type: n
                                }), c = 0; c < l; c++)(h = s[c]) && !1 === h.call(e, r) && r.preventDefault()
                    }), o && !r.defaultPrevented && o.call(e, r)
                }, t.animate = function(e, i, n) {
                    var r, o, a, s, l = "";
                    t.isObject(n) || (s = arguments, n = {
                        duration: s[2],
                        easing: s[3],
                        complete: s[4]
                    }), t.isNumber(n.duration) || (n.duration = 400), n.easing = "function" === typeof n.easing ? n.easing : Math[n.easing] || Math.easeInOutSine, n.curAnim = t.merge(i), t.objectEach(i, function(s, c) {
                        t.stop(e, c), a = new t.Fx(e, n, c), o = null, "d" === c ? (a.paths = a.initPath(e, e.d, i.d), a.toD = i.d, r = 0, o = 1) : e.attr ? r = e.attr(c) : (r = parseFloat(t.getStyle(e, c)) || 0, "opacity" !== c && (l = "px")), o || (o = s), o && o.match && o.match("px") && (o = o.replace(/px/g, "")), a.run(r, o, l)
                    })
                }, t.seriesType = function(e, i, n, r, o) {
                    var a = t.getOptions(),
                        s = t.seriesTypes;
                    return a.plotOptions[e] = t.merge(a.plotOptions[i], n), s[e] = t.extendClass(s[i] || function() {}, r), s[e].prototype.type = e, o && (s[e].prototype.pointClass = t.extendClass(t.Point, o)), s[e]
                }, t.uniqueKey = function() {
                    var t = Math.random().toString(36).substring(2, 9),
                        e = 0;
                    return function() {
                        return "highcharts-" + t + "-" + e++
                    }
                }(), n.jQuery && (n.jQuery.fn.highcharts = function() {
                    var i = [].slice.call(arguments);
                    if (this[0]) return i[0] ? (new(t[t.isString(i[0]) ? i.shift() : "Chart"])(this[0], i[0], i[1]), this) : e[t.attr(this[0], "data-highcharts-chart")]
                })
            })(e),
            function(t) {
                var e = t.each,
                    i = t.isNumber,
                    n = t.map,
                    r = t.merge,
                    o = t.pInt;
                t.Color = function(e) {
                    if (!(this instanceof t.Color)) return new t.Color(e);
                    this.init(e)
                }, t.Color.prototype = {
                    parsers: [{
                        regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                        parse: function(t) {
                            return [o(t[1]), o(t[2]), o(t[3]), parseFloat(t[4], 10)]
                        }
                    }, {
                        regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                        parse: function(t) {
                            return [o(t[1]), o(t[2]), o(t[3]), 1]
                        }
                    }],
                    names: {
                        white: "#ffffff",
                        black: "#000000"
                    },
                    init: function(e) {
                        var i, r, o, a;
                        if ((this.input = e = this.names[e && e.toLowerCase ? e.toLowerCase() : ""] || e) && e.stops) this.stops = n(e.stops, function(e) {
                            return new t.Color(e[1])
                        });
                        else if (e && e.charAt && "#" === e.charAt() && (i = e.length, e = parseInt(e.substr(1), 16), 7 === i ? r = [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 1] : 4 === i && (r = [(3840 & e) >> 4 | (3840 & e) >> 8, (240 & e) >> 4 | 240 & e, (15 & e) << 4 | 15 & e, 1])), !r)
                            for (o = this.parsers.length; o-- && !r;) a = this.parsers[o], (i = a.regex.exec(e)) && (r = a.parse(i));
                        this.rgba = r || []
                    },
                    get: function(t) {
                        var n, o = this.input,
                            a = this.rgba;
                        return this.stops ? (n = r(o), n.stops = [].concat(n.stops), e(this.stops, function(e, i) {
                            n.stops[i] = [n.stops[i][0], e.get(t)]
                        })) : n = a && i(a[0]) ? "rgb" === t || !t && 1 === a[3] ? "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")" : "a" === t ? a[3] : "rgba(" + a.join(",") + ")" : o, n
                    },
                    brighten: function(t) {
                        var n, r = this.rgba;
                        if (this.stops) e(this.stops, function(e) {
                            e.brighten(t)
                        });
                        else if (i(t) && 0 !== t)
                            for (n = 0; 3 > n; n++) r[n] += o(255 * t), 0 > r[n] && (r[n] = 0), 255 < r[n] && (r[n] = 255);
                        return this
                    },
                    setOpacity: function(t) {
                        return this.rgba[3] = t, this
                    },
                    tweenTo: function(t, e) {
                        var i = this.rgba,
                            n = t.rgba;
                        return n.length && i && i.length ? (t = 1 !== n[3] || 1 !== i[3], e = (t ? "rgba(" : "rgb(") + Math.round(n[0] + (i[0] - n[0]) * (1 - e)) + "," + Math.round(n[1] + (i[1] - n[1]) * (1 - e)) + "," + Math.round(n[2] + (i[2] - n[2]) * (1 - e)) + (t ? "," + (n[3] + (i[3] - n[3]) * (1 - e)) : "") + ")") : e = t.input || "none", e
                    }
                }, t.color = function(e) {
                    return new t.Color(e)
                }
            }(e),
            function(t) {
                var e, i, n = t.addEvent,
                    r = t.animate,
                    o = t.attr,
                    a = t.charts,
                    s = t.color,
                    l = t.css,
                    c = t.createElement,
                    h = t.defined,
                    u = t.deg2rad,
                    d = t.destroyObjectProperties,
                    p = t.doc,
                    f = t.each,
                    g = t.extend,
                    m = t.erase,
                    v = t.grep,
                    y = t.hasTouch,
                    x = t.inArray,
                    b = t.isArray,
                    w = t.isFirefox,
                    _ = t.isMS,
                    k = t.isObject,
                    S = t.isString,
                    M = t.isWebKit,
                    A = t.merge,
                    C = t.noop,
                    T = t.objectEach,
                    P = t.pick,
                    O = t.pInt,
                    L = t.removeEvent,
                    E = t.stop,
                    D = t.svg,
                    I = t.SVG_NS,
                    z = t.symbolSizes,
                    B = t.win;
                e = t.SVGElement = function() {
                    return this
                }, g(e.prototype, {
                    opacity: 1,
                    SVG_NS: I,
                    textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),
                    init: function(t, e) {
                        this.element = "span" === e ? c(e) : p.createElementNS(this.SVG_NS, e), this.renderer = t
                    },
                    animate: function(e, i, n) {
                        return i = t.animObject(P(i, this.renderer.globalAnimation, !0)), 0 !== i.duration ? (n && (i.complete = n), r(this, e, i)) : (this.attr(e, null, n), i.step && i.step.call(this)), this
                    },
                    complexColor: function(e, i, n) {
                        var r, o, a, s, l, c, u, d, p, g, m, v, y = this.renderer,
                            x = [];
                        t.fireEvent(this.renderer, "complexColor", {
                            args: arguments
                        }, function() {
                            e.radialGradient ? o = "radialGradient" : e.linearGradient && (o = "linearGradient"), o && (a = e[o], l = y.gradients, u = e.stops, g = n.radialReference, b(a) && (e[o] = a = {
                                x1: a[0],
                                y1: a[1],
                                x2: a[2],
                                y2: a[3],
                                gradientUnits: "userSpaceOnUse"
                            }), "radialGradient" === o && g && !h(a.gradientUnits) && (s = a, a = A(a, y.getRadialAttr(g, s), {
                                gradientUnits: "userSpaceOnUse"
                            })), T(a, function(t, e) {
                                "id" !== e && x.push(e, t)
                            }), T(u, function(t) {
                                x.push(t)
                            }), x = x.join(","), l[x] ? m = l[x].attr("id") : (a.id = m = t.uniqueKey(), l[x] = c = y.createElement(o).attr(a).add(y.defs), c.radAttr = s, c.stops = [], f(u, function(e) {
                                0 === e[1].indexOf("rgba") ? (r = t.color(e[1]), d = r.get("rgb"), p = r.get("a")) : (d = e[1], p = 1), e = y.createElement("stop").attr({
                                    offset: e[0],
                                    "stop-color": d,
                                    "stop-opacity": p
                                }).add(c), c.stops.push(e)
                            })), v = "url(" + y.url + "#" + m + ")", n.setAttribute(i, v), n.gradient = x, e.toString = function() {
                                return v
                            })
                        })
                    },
                    applyTextOutline: function(e) {
                        var i, n, r, a, s, l = this.element;
                        if (-1 !== e.indexOf("contrast") && (e = e.replace(/contrast/g, this.renderer.getContrast(l.style.fill))), e = e.split(" "), n = e[e.length - 1], (r = e[0]) && "none" !== r && t.svg) {
                            for (this.fakeTS = !0, e = [].slice.call(l.getElementsByTagName("tspan")), this.ySetter = this.xSetter, r = r.replace(/(^[\d\.]+)(.*?)$/g, function(t, e, i) {
                                    return 2 * e + i
                                }), s = e.length; s--;) i = e[s], "highcharts-text-outline" === i.getAttribute("class") && m(e, l.removeChild(i));
                            a = l.firstChild, f(e, function(t, e) {
                                0 === e && (t.setAttribute("x", l.getAttribute("x")), e = l.getAttribute("y"), t.setAttribute("y", e || 0), null === e && l.setAttribute("y", 0)), t = t.cloneNode(1), o(t, {
                                    class: "highcharts-text-outline",
                                    fill: n,
                                    stroke: n,
                                    "stroke-width": r,
                                    "stroke-linejoin": "round"
                                }), l.insertBefore(t, a)
                            })
                        }
                    },
                    attr: function(t, e, i, n) {
                        var r, o, a, s, l = this.element,
                            c = this;
                        return "string" === typeof t && void 0 !== e && (r = t, t = {}, t[r] = e), "string" === typeof t ? c = (this[t + "Getter"] || this._defaultGetter).call(this, t, l) : (T(t, function(e, i) {
                            a = !1, n || E(this, i), this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(i) && (o || (this.symbolAttr(t), o = !0), a = !0), !this.rotation || "x" !== i && "y" !== i || (this.doTransform = !0), a || (s = this[i + "Setter"] || this._defaultSetter, s.call(this, e, i, l), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(i) && this.updateShadows(i, e, s))
                        }, this), this.afterSetters()), i && i.call(this), c
                    },
                    afterSetters: function() {
                        this.doTransform && (this.updateTransform(), this.doTransform = !1)
                    },
                    updateShadows: function(t, e, i) {
                        for (var n = this.shadows, r = n.length; r--;) i.call(n[r], "height" === t ? Math.max(e - (n[r].cutHeight || 0), 0) : "d" === t ? this.d : e, t, n[r])
                    },
                    addClass: function(t, e) {
                        var i = this.attr("class") || "";
                        return -1 === i.indexOf(t) && (e || (t = (i + (i ? " " : "") + t).replace("  ", " ")), this.attr("class", t)), this
                    },
                    hasClass: function(t) {
                        return -1 !== x(t, (this.attr("class") || "").split(" "))
                    },
                    removeClass: function(t) {
                        return this.attr("class", (this.attr("class") || "").replace(t, ""))
                    },
                    symbolAttr: function(t) {
                        var e = this;
                        f("x y r start end width height innerR anchorX anchorY".split(" "), function(i) {
                            e[i] = P(t[i], e[i])
                        }), e.attr({
                            d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
                        })
                    },
                    clip: function(t) {
                        return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none")
                    },
                    crisp: function(t, e) {
                        var i;
                        return e = e || t.strokeWidth || 0, i = Math.round(e) % 2 / 2, t.x = Math.floor(t.x || this.x || 0) + i, t.y = Math.floor(t.y || this.y || 0) + i, t.width = Math.floor((t.width || this.width || 0) - 2 * i), t.height = Math.floor((t.height || this.height || 0) - 2 * i), h(t.strokeWidth) && (t.strokeWidth = e), t
                    },
                    css: function(t) {
                        var e, i, n = this.styles,
                            r = {},
                            a = this.element,
                            s = "",
                            c = !n,
                            h = ["textOutline", "textOverflow", "width"];
                        return t && t.color && (t.fill = t.color), n && T(t, function(t, e) {
                            t !== n[e] && (r[e] = t, c = !0)
                        }), c && (n && (t = g(n, r)), t && (null === t.width || "auto" === t.width ? delete this.textWidth : "text" === a.nodeName.toLowerCase() && t.width && (e = this.textWidth = O(t.width))), this.styles = t, e && !D && this.renderer.forExport && delete t.width, a.namespaceURI === this.SVG_NS ? (i = function(t, e) {
                            return "-" + e.toLowerCase()
                        }, T(t, function(t, e) {
                            -1 === x(e, h) && (s += e.replace(/([A-Z])/g, i) + ":" + t + ";")
                        }), s && o(a, "style", s)) : l(a, t), this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t && t.textOutline && this.applyTextOutline(t.textOutline))), this
                    },
                    strokeWidth: function() {
                        return this["stroke-width"] || 0
                    },
                    on: function(t, e) {
                        var i = this,
                            n = i.element;
                        return y && "click" === t ? (n.ontouchstart = function(t) {
                            i.touchEventFired = Date.now(), t.preventDefault(), e.call(n, t)
                        }, n.onclick = function(t) {
                            (-1 === B.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (i.touchEventFired || 0)) && e.call(n, t)
                        }) : n["on" + t] = e, this
                    },
                    setRadialReference: function(t) {
                        var e = this.renderer.gradients[this.element.gradient];
                        return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
                    },
                    translate: function(t, e) {
                        return this.attr({
                            translateX: t,
                            translateY: e
                        })
                    },
                    invert: function(t) {
                        return this.inverted = t, this.updateTransform(), this
                    },
                    updateTransform: function() {
                        var t = this.translateX || 0,
                            e = this.translateY || 0,
                            i = this.scaleX,
                            n = this.scaleY,
                            r = this.inverted,
                            o = this.rotation,
                            a = this.matrix,
                            s = this.element;
                        r && (t += this.width, e += this.height), t = ["translate(" + t + "," + e + ")"], h(a) && t.push("matrix(" + a.join(",") + ")"), r ? t.push("rotate(90) scale(-1,1)") : o && t.push("rotate(" + o + " " + P(this.rotationOriginX, s.getAttribute("x"), 0) + " " + P(this.rotationOriginY, s.getAttribute("y") || 0) + ")"), (h(i) || h(n)) && t.push("scale(" + P(i, 1) + " " + P(n, 1) + ")"), t.length && s.setAttribute("transform", t.join(" "))
                    },
                    toFront: function() {
                        var t = this.element;
                        return t.parentNode.appendChild(t), this
                    },
                    align: function(t, e, i) {
                        var n, r, o, a, s, l, c = {};
                        return r = this.renderer, o = r.alignedObjects, t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || S(i)) && (this.alignTo = n = i || "renderer", m(o, this), o.push(this), i = null)) : (t = this.alignOptions, e = this.alignByTranslate, n = this.alignTo), i = P(i, r[n], r), n = t.align, r = t.verticalAlign, o = (i.x || 0) + (t.x || 0), a = (i.y || 0) + (t.y || 0), "right" === n ? s = 1 : "center" === n && (s = 2), s && (o += (i.width - (t.width || 0)) / s), c[e ? "translateX" : "x"] = Math.round(o), "bottom" === r ? l = 1 : "middle" === r && (l = 2), l && (a += (i.height - (t.height || 0)) / l), c[e ? "translateY" : "y"] = Math.round(a), this[this.placed ? "animate" : "attr"](c), this.placed = !0, this.alignAttr = c, this
                    },
                    getBBox: function(t, e) {
                        var i, n, r, o, a, s = this.renderer,
                            l = this.element,
                            c = this.styles,
                            d = this.textStr,
                            p = s.cache,
                            m = s.cacheKeys,
                            v = l.namespaceURI === this.SVG_NS;
                        if (e = P(e, this.rotation), n = e * u, r = c && c.fontSize, h(d) && (a = d.toString(), -1 === a.indexOf("<") && (a = a.replace(/[0-9]/g, "0")), a += ["", e || 0, r, this.textWidth, c && c.textOverflow].join()), a && !t && (i = p[a]), !i) {
                            if (v || s.forExport) {
                                try {
                                    (o = this.fakeTS && function(t) {
                                        f(l.querySelectorAll(".highcharts-text-outline"), function(e) {
                                            e.style.display = t
                                        })
                                    }) && o("none"), i = l.getBBox ? g({}, l.getBBox()) : {
                                        width: l.offsetWidth,
                                        height: l.offsetHeight
                                    }, o && o("")
                                } catch (y) {}(!i || 0 > i.width) && (i = {
                                    width: 0,
                                    height: 0
                                })
                            } else i = this.htmlGetBBox();
                            if (s.isSVG && (t = i.width, s = i.height, v && (i.height = s = {
                                    "11px,17": 14,
                                    "13px,20": 16
                                } [c && c.fontSize + "," + Math.round(s)] || s), e && (i.width = Math.abs(s * Math.sin(n)) + Math.abs(t * Math.cos(n)), i.height = Math.abs(s * Math.cos(n)) + Math.abs(t * Math.sin(n)))), a && 0 < i.height) {
                                for (; 250 < m.length;) delete p[m.shift()];
                                p[a] || m.push(a), p[a] = i
                            }
                        }
                        return i
                    },
                    show: function(t) {
                        return this.attr({
                            visibility: t ? "inherit" : "visible"
                        })
                    },
                    hide: function() {
                        return this.attr({
                            visibility: "hidden"
                        })
                    },
                    fadeOut: function(t) {
                        var e = this;
                        e.animate({
                            opacity: 0
                        }, {
                            duration: t || 150,
                            complete: function() {
                                e.attr({
                                    y: -9999
                                })
                            }
                        })
                    },
                    add: function(t) {
                        var e, i = this.renderer,
                            n = this.element;
                        return t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(n), this.onAdd && this.onAdd(), this
                    },
                    safeRemoveChild: function(t) {
                        var e = t.parentNode;
                        e && e.removeChild(t)
                    },
                    destroy: function() {
                        var t = this,
                            e = t.element || {},
                            i = t.renderer.isSVG && "SPAN" === e.nodeName && t.parentGroup,
                            n = e.ownerSVGElement,
                            r = t.clipPath;
                        if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, E(t), r && n && (f(n.querySelectorAll("[clip-path],[CLIP-PATH]"), function(t) {
                                var e = t.getAttribute("clip-path"),
                                    i = r.element.id;
                                (-1 < e.indexOf("(#" + i + ")") || -1 < e.indexOf('("#' + i + '")')) && t.removeAttribute("clip-path")
                            }), t.clipPath = r.destroy()), t.stops) {
                            for (n = 0; n < t.stops.length; n++) t.stops[n] = t.stops[n].destroy();
                            t.stops = null
                        }
                        for (t.safeRemoveChild(e), t.destroyShadows(); i && i.div && 0 === i.div.childNodes.length;) e = i.parentGroup, t.safeRemoveChild(i.div), delete i.div, i = e;
                        return t.alignTo && m(t.renderer.alignedObjects, t), T(t, function(e, i) {
                            delete t[i]
                        }), null
                    },
                    shadow: function(t, e, i) {
                        var n, r, a, s, l, c, h = [],
                            u = this.element;
                        if (t) {
                            if (!this.shadows) {
                                for (s = P(t.width, 3), l = (t.opacity || .15) / s, c = this.parentInverted ? "(-1,-1)" : "(" + P(t.offsetX, 1) + ", " + P(t.offsetY, 1) + ")", n = 1; n <= s; n++) r = u.cloneNode(0), a = 2 * s + 1 - 2 * n, o(r, {
                                    stroke: t.color || "#000000",
                                    "stroke-opacity": l * n,
                                    "stroke-width": a,
                                    transform: "translate" + c,
                                    fill: "none"
                                }), r.setAttribute("class", (r.getAttribute("class") || "") + " highcharts-shadow"), i && (o(r, "height", Math.max(o(r, "height") - a, 0)), r.cutHeight = a), e ? e.element.appendChild(r) : u.parentNode && u.parentNode.insertBefore(r, u), h.push(r);
                                this.shadows = h
                            }
                        } else this.destroyShadows();
                        return this
                    },
                    destroyShadows: function() {
                        f(this.shadows || [], function(t) {
                            this.safeRemoveChild(t)
                        }, this), this.shadows = void 0
                    },
                    xGetter: function(t) {
                        return "circle" === this.element.nodeName && ("x" === t ? t = "cx" : "y" === t && (t = "cy")), this._defaultGetter(t)
                    },
                    _defaultGetter: function(t) {
                        return t = P(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0), /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)), t
                    },
                    dSetter: function(t, e, i) {
                        t && t.join && (t = t.join(" ")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t)
                    },
                    dashstyleSetter: function(t) {
                        var e, i = this["stroke-width"];
                        if ("inherit" === i && (i = 1), t = t && t.toLowerCase()) {
                            for (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","), e = t.length; e--;) t[e] = O(t[e]) * i;
                            t = t.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
                        }
                    },
                    alignSetter: function(t) {
                        this.alignValue = t, this.element.setAttribute("text-anchor", {
                            left: "start",
                            center: "middle",
                            right: "end"
                        } [t])
                    },
                    opacitySetter: function(t, e, i) {
                        this[e] = t, i.setAttribute(e, t)
                    },
                    titleSetter: function(t) {
                        var e = this.element.getElementsByTagName("title")[0];
                        e || (e = p.createElementNS(this.SVG_NS, "title"), this.element.appendChild(e)), e.firstChild && e.removeChild(e.firstChild), e.appendChild(p.createTextNode(String(P(t), "").replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")))
                    },
                    textSetter: function(t) {
                        t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this))
                    },
                    fillSetter: function(t, e, i) {
                        "string" === typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i)
                    },
                    visibilitySetter: function(t, e, i) {
                        "inherit" === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t
                    },
                    zIndexSetter: function(t, e) {
                        var i, n, r, o, a = this.renderer,
                            s = this.parentGroup,
                            l = (s || a).element || a.box,
                            c = this.element;
                        a = l === a.box;
                        if (i = this.added, h(t) ? (c.setAttribute("data-z-index", t), t = +t, this[e] === t && (i = !1)) : h(this[e]) && c.removeAttribute("data-z-index"), this[e] = t, i) {
                            for ((t = this.zIndex) && s && (s.handleZ = !0), e = l.childNodes, o = e.length - 1; 0 <= o && !n; o--) s = e[o], i = s.getAttribute("data-z-index"), r = !h(i), s !== c && (0 > t && r && !a && !o ? (l.insertBefore(c, e[o]), n = !0) : (O(i) <= t || r && (!h(t) || 0 <= t)) && (l.insertBefore(c, e[o + 1] || null), n = !0));
                            n || (l.insertBefore(c, e[a ? 3 : 0] || null), n = !0)
                        }
                        return n
                    },
                    _defaultSetter: function(t, e, i) {
                        i.setAttribute(e, t)
                    }
                }), e.prototype.yGetter = e.prototype.xGetter, e.prototype.translateXSetter = e.prototype.translateYSetter = e.prototype.rotationSetter = e.prototype.verticalAlignSetter = e.prototype.rotationOriginXSetter = e.prototype.rotationOriginYSetter = e.prototype.scaleXSetter = e.prototype.scaleYSetter = e.prototype.matrixSetter = function(t, e) {
                    this[e] = t, this.doTransform = !0
                }, e.prototype["stroke-widthSetter"] = e.prototype.strokeSetter = function(t, i, n) {
                    this[i] = t, this.stroke && this["stroke-width"] ? (e.prototype.fillSetter.call(this, this.stroke, "stroke", n), n.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === i && 0 === t && this.hasStroke && (n.removeAttribute("stroke"), this.hasStroke = !1)
                }, i = t.SVGRenderer = function() {
                    this.init.apply(this, arguments)
                }, g(i.prototype, {
                    Element: e,
                    SVG_NS: I,
                    init: function(t, e, i, r, a, s) {
                        var c, h;
                        r = this.createElement("svg").attr({
                            version: "1.1",
                            class: "highcharts-root"
                        }).css(this.getStyle(r)), c = r.element, t.appendChild(c), o(t, "dir", "ltr"), -1 === t.innerHTML.indexOf("xmlns") && o(c, "xmlns", this.SVG_NS), this.isSVG = !0, this.box = c, this.boxWrapper = r, this.alignedObjects = [], this.url = (w || M) && p.getElementsByTagName("base").length ? B.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highstock 6.2.0")), this.defs = this.createElement("defs").add(), this.allowHTML = s, this.forExport = a, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(e, i, !1), w && t.getBoundingClientRect && (e = function() {
                            l(t, {
                                left: 0,
                                top: 0
                            }), h = t.getBoundingClientRect(), l(t, {
                                left: Math.ceil(h.left) - h.left + "px",
                                top: Math.ceil(h.top) - h.top + "px"
                            })
                        }, e(), this.unSubPixelFix = n(B, "resize", e))
                    },
                    getStyle: function(t) {
                        return this.style = g({
                            fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                            fontSize: "12px"
                        }, t)
                    },
                    setStyle: function(t) {
                        this.boxWrapper.css(this.getStyle(t))
                    },
                    isHidden: function() {
                        return !this.boxWrapper.getBBox().width
                    },
                    destroy: function() {
                        var t = this.defs;
                        return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), d(this.gradients || {}), this.gradients = null, t && (this.defs = t.destroy()), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null
                    },
                    createElement: function(t) {
                        var e = new this.Element;
                        return e.init(this, t), e
                    },
                    draw: C,
                    getRadialAttr: function(t, e) {
                        return {
                            cx: t[0] - t[2] / 2 + e.cx * t[2],
                            cy: t[1] - t[2] / 2 + e.cy * t[2],
                            r: e.r * t[2]
                        }
                    },
                    truncate: function(t, e, i, n, r, o, a) {
                        var s, l, c, h = this,
                            u = t.rotation,
                            d = n ? 1 : 0,
                            f = (i || n).length,
                            g = f,
                            m = [],
                            v = function(t) {
                                e.firstChild && e.removeChild(e.firstChild), t && e.appendChild(p.createTextNode(t))
                            },
                            y = function(o, s) {
                                if (s = s || o, void 0 === m[s])
                                    if (e.getSubStringLength) try {
                                        m[s] = r + e.getSubStringLength(0, n ? s + 1 : s)
                                    } catch (l) {} else h.getSpanWidth && (v(a(i || n, o)), m[s] = r + h.getSpanWidth(t, e));
                                return m[s]
                            };
                        if (t.rotation = 0, l = y(e.textContent.length), c = r + l > o) {
                            for (; d <= f;) g = Math.ceil((d + f) / 2), n && (s = a(n, g)), l = y(g, s && s.length - 1), d === f ? d = f + 1 : l > o ? f = g - 1 : d = g;
                            0 === f ? v("") : i && f === i.length - 1 || v(s || a(i || n, g))
                        }
                        return n && n.splice(0, g), t.actualWidth = l, t.rotation = u, c
                    },
                    escapes: {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "'": "&#39;",
                        '"': "&quot;"
                    },
                    buildText: function(t) {
                        var e, i, n, r = t.element,
                            a = this,
                            s = a.forExport,
                            c = P(t.textStr, "").toString(),
                            h = -1 !== c.indexOf("<"),
                            u = r.childNodes,
                            d = o(r, "x"),
                            g = t.styles,
                            m = t.textWidth,
                            y = g && g.lineHeight,
                            b = g && g.textOutline,
                            w = g && "ellipsis" === g.textOverflow,
                            _ = g && "nowrap" === g.whiteSpace,
                            k = g && g.fontSize,
                            S = u.length,
                            M = (g = m && !t.added && this.box, function(t) {
                                var e;
                                return e = /(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : k || a.style.fontSize || 12, y ? O(y) : a.fontMetrics(e, t.getAttribute("style") ? t : r).h
                            }),
                            A = function(t, e) {
                                return T(a.escapes, function(i, n) {
                                    e && -1 !== x(i, e) || (t = t.toString().replace(new RegExp(i, "g"), n))
                                }), t
                            },
                            C = function(t, e) {
                                var i;
                                if (i = t.indexOf("<"), t = t.substring(i, t.indexOf(">") - i), i = t.indexOf(e + "="), -1 !== i && (i = i + e.length + 1, e = t.charAt(i), '"' === e || "'" === e)) return t = t.substring(i + 1), t.substring(0, t.indexOf(e))
                            };
                        if (i = [c, w, _, y, b, k, m].join(), i !== t.textCache) {
                            for (t.textCache = i; S--;) r.removeChild(u[S]);
                            h || b || w || m || -1 !== c.indexOf(" ") ? (g && g.appendChild(r), c = h ? c.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [c], c = v(c, function(t) {
                                return "" !== t
                            }), f(c, function(i, c) {
                                var h, u = 0,
                                    g = 0;
                                i = i.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"), h = i.split("|||"), f(h, function(i) {
                                    if ("" !== i || 1 === h.length) {
                                        var f, v, y = {},
                                            x = p.createElementNS(a.SVG_NS, "tspan");
                                        if ((f = C(i, "class")) && o(x, "class", f), (f = C(i, "style")) && (f = f.replace(/(;| |^)color([ :])/, "$1fill$2"), o(x, "style", f)), (v = C(i, "href")) && !s && (o(x, "onclick", 'location.href="' + v + '"'), o(x, "class", "highcharts-anchor"), l(x, {
                                                cursor: "pointer"
                                            })), i = A(i.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " "), " " !== i) {
                                            if (x.appendChild(p.createTextNode(i)), u ? y.dx = 0 : c && null !== d && (y.x = d), o(x, y), r.appendChild(x), !u && n && (!D && s && l(x, {
                                                    display: "block"
                                                }), o(x, "dy", M(x))), m) {
                                                var b = i.replace(/([^\^])-/g, "$1- ").split(" ");
                                                y = !_ && (1 < h.length || c || 1 < b.length);
                                                v = 0;
                                                var S = M(x);
                                                if (w) e = a.truncate(t, x, i, void 0, 0, Math.max(0, m - parseInt(k || 12, 10)), function(t, e) {
                                                    return t.substring(0, e) + "â€¦"
                                                });
                                                else if (y)
                                                    for (; b.length;) b.length && !_ && 0 < v && (x = p.createElementNS(I, "tspan"), o(x, {
                                                        dy: S,
                                                        x: d
                                                    }), f && o(x, "style", f), x.appendChild(p.createTextNode(b.join(" ").replace(/- /g, "-"))), r.appendChild(x)), a.truncate(t, x, null, b, 0 === v ? g : 0, m, function(t, e) {
                                                        return b.slice(0, e).join(" ").replace(/- /g, "-")
                                                    }), g = t.actualWidth, v++
                                            }
                                            u++
                                        }
                                    }
                                }), n = n || r.childNodes.length
                            }), w && e && t.attr("title", A(t.textStr, ["&lt;", "&gt;"])), g && g.removeChild(r), b && t.applyTextOutline && t.applyTextOutline(b)) : r.appendChild(p.createTextNode(A(c)))
                        }
                    },
                    getContrast: function(t) {
                        return t = s(t).rgba, t[0] *= 1, t[1] *= 1.2, t[2] *= .5, 459 < t[0] + t[1] + t[2] ? "#000000" : "#FFFFFF"
                    },
                    button: function(t, e, i, r, o, a, s, l, c) {
                        var h, u, d, p, f = this.label(t, e, i, c, null, null, null, null, "button"),
                            m = 0;
                        return f.attr(A({
                            padding: 8,
                            r: 2
                        }, o)), o = A({
                            fill: "#f7f7f7",
                            stroke: "#cccccc",
                            "stroke-width": 1,
                            style: {
                                color: "#333333",
                                cursor: "pointer",
                                fontWeight: "normal"
                            }
                        }, o), h = o.style, delete o.style, a = A(o, {
                            fill: "#e6e6e6"
                        }, a), u = a.style, delete a.style, s = A(o, {
                            fill: "#e6ebf5",
                            style: {
                                color: "#000000",
                                fontWeight: "bold"
                            }
                        }, s), d = s.style, delete s.style, l = A(o, {
                            style: {
                                color: "#cccccc"
                            }
                        }, l), p = l.style, delete l.style, n(f.element, _ ? "mouseover" : "mouseenter", function() {
                            3 !== m && f.setState(1)
                        }), n(f.element, _ ? "mouseout" : "mouseleave", function() {
                            3 !== m && f.setState(m)
                        }), f.setState = function(t) {
                            1 !== t && (f.state = m = t), f.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t || 0]), f.attr([o, a, s, l][t || 0]).css([h, u, d, p][t || 0])
                        }, f.attr(o).css(g({
                            cursor: "default"
                        }, h)), f.on("click", function(t) {
                            3 !== m && r.call(f, t)
                        })
                    },
                    crispLine: function(t, e) {
                        return t[1] === t[4] && (t[1] = t[4] = Math.round(t[1]) - e % 2 / 2), t[2] === t[5] && (t[2] = t[5] = Math.round(t[2]) + e % 2 / 2), t
                    },
                    path: function(t) {
                        var e = {
                            fill: "none"
                        };
                        return b(t) ? e.d = t : k(t) && g(e, t), this.createElement("path").attr(e)
                    },
                    circle: function(t, e, i) {
                        return t = k(t) ? t : {
                            x: t,
                            y: e,
                            r: i
                        }, e = this.createElement("circle"), e.xSetter = e.ySetter = function(t, e, i) {
                            i.setAttribute("c" + e, t)
                        }, e.attr(t)
                    },
                    arc: function(t, e, i, n, r, o) {
                        return k(t) ? (n = t, e = n.y, i = n.r, t = n.x) : n = {
                            innerR: n,
                            start: r,
                            end: o
                        }, t = this.symbol("arc", t, e, i, i, n), t.r = i, t
                    },
                    rect: function(t, e, i, n, r, a) {
                        r = k(t) ? t.r : r;
                        var s = this.createElement("rect");
                        return t = k(t) ? t : void 0 === t ? {} : {
                            x: t,
                            y: e,
                            width: Math.max(i, 0),
                            height: Math.max(n, 0)
                        }, void 0 !== a && (t.strokeWidth = a, t = s.crisp(t)), t.fill = "none", r && (t.r = r), s.rSetter = function(t, e, i) {
                            o(i, {
                                rx: t,
                                ry: t
                            })
                        }, s.attr(t)
                    },
                    setSize: function(t, e, i) {
                        var n = this.alignedObjects,
                            r = n.length;
                        for (this.width = t, this.height = e, this.boxWrapper.animate({
                                width: t,
                                height: e
                            }, {
                                step: function() {
                                    this.attr({
                                        viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                                    })
                                },
                                duration: P(i, !0) ? void 0 : 0
                            }); r--;) n[r].align()
                    },
                    g: function(t) {
                        var e = this.createElement("g");
                        return t ? e.attr({
                            class: "highcharts-" + t
                        }) : e
                    },
                    image: function(t, e, i, r, o, a) {
                        var s, l = {
                                preserveAspectRatio: "none"
                            },
                            c = function(t, e) {
                                t.setAttributeNS ? t.setAttributeNS("http://www.w3.org/1999/xlink", "href", e) : t.setAttribute("hc-svg-href", e)
                            },
                            h = function(e) {
                                c(s.element, t), a.call(s, e)
                            };
                        return 1 < arguments.length && g(l, {
                            x: e,
                            y: i,
                            width: r,
                            height: o
                        }), s = this.createElement("image").attr(l), a ? (c(s.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), l = new B.Image, n(l, "load", h), l.src = t, l.complete && h({})) : c(s.element, t), s
                    },
                    symbol: function(t, e, i, n, r, o) {
                        var s, u, d, m = this,
                            v = /^url\((.*?)\)$/,
                            y = v.test(t),
                            x = !y && (this.symbols[t] ? t : "circle"),
                            b = x && this.symbols[x],
                            w = h(e) && b && b.call(this.symbols, Math.round(e), Math.round(i), n, r, o);
                        return b ? (s = this.path(w), s.attr("fill", "none"), g(s, {
                            symbolName: x,
                            x: e,
                            y: i,
                            width: n,
                            height: r
                        }), o && g(s, o)) : y && (u = t.match(v)[1], s = this.image(u), s.imgwidth = P(z[u] && z[u].width, o && o.width), s.imgheight = P(z[u] && z[u].height, o && o.height), d = function() {
                            s.attr({
                                width: s.width,
                                height: s.height
                            })
                        }, f(["width", "height"], function(t) {
                            s[t + "Setter"] = function(t, e) {
                                var i = {},
                                    n = this["img" + e],
                                    r = "width" === e ? "translateX" : "translateY";
                                this[e] = t, h(n) && (this.element && this.element.setAttribute(e, n), this.alignByTranslate || (i[r] = ((this[e] || 0) - n) / 2, this.attr(i)))
                            }
                        }), h(e) && s.attr({
                            x: e,
                            y: i
                        }), s.isImg = !0, h(s.imgwidth) && h(s.imgheight) ? d() : (s.attr({
                            width: 0,
                            height: 0
                        }), c("img", {
                            onload: function() {
                                var t = a[m.chartIndex];
                                0 === this.width && (l(this, {
                                    position: "absolute",
                                    top: "-999em"
                                }), p.body.appendChild(this)), z[u] = {
                                    width: this.width,
                                    height: this.height
                                }, s.imgwidth = this.width, s.imgheight = this.height, s.element && d(), this.parentNode && this.parentNode.removeChild(this), m.imgCount--, !m.imgCount && t && t.onload && t.onload()
                            },
                            src: u
                        }), this.imgCount++)), s
                    },
                    symbols: {
                        circle: function(t, e, i, n) {
                            return this.arc(t + i / 2, e + n / 2, i / 2, n / 2, {
                                start: 0,
                                end: 2 * Math.PI,
                                open: !1
                            })
                        },
                        square: function(t, e, i, n) {
                            return ["M", t, e, "L", t + i, e, t + i, e + n, t, e + n, "Z"]
                        },
                        triangle: function(t, e, i, n) {
                            return ["M", t + i / 2, e, "L", t + i, e + n, t, e + n, "Z"]
                        },
                        "triangle-down": function(t, e, i, n) {
                            return ["M", t, e, "L", t + i, e, t + i / 2, e + n, "Z"]
                        },
                        diamond: function(t, e, i, n) {
                            return ["M", t + i / 2, e, "L", t + i, e + n / 2, t + i / 2, e + n, t, e + n / 2, "Z"]
                        },
                        arc: function(t, e, i, n, r) {
                            var o = r.start,
                                a = r.r || i,
                                s = r.r || n || i,
                                l = r.end - .001;
                            i = r.innerR, n = P(r.open, .001 > Math.abs(r.end - r.start - 2 * Math.PI));
                            var c = Math.cos(o),
                                u = Math.sin(o),
                                d = Math.cos(l);
                            l = Math.sin(l);
                            return r = .001 > r.end - o - Math.PI ? 0 : 1, a = ["M", t + a * c, e + s * u, "A", a, s, 0, r, 1, t + a * d, e + s * l], h(i) && a.push(n ? "M" : "L", t + i * d, e + i * l, "A", i, i, 0, r, 0, t + i * c, e + i * u), a.push(n ? "" : "Z"), a
                        },
                        callout: function(t, e, i, n, r) {
                            var o, a = Math.min(r && r.r || 0, i, n),
                                s = a + 6,
                                l = r && r.anchorX;
                            return r = r && r.anchorY, o = ["M", t + a, e, "L", t + i - a, e, "C", t + i, e, t + i, e, t + i, e + a, "L", t + i, e + n - a, "C", t + i, e + n, t + i, e + n, t + i - a, e + n, "L", t + a, e + n, "C", t, e + n, t, e + n, t, e + n - a, "L", t, e + a, "C", t, e, t, e, t + a, e], l && l > i ? r > e + s && r < e + n - s ? o.splice(13, 3, "L", t + i, r - 6, t + i + 6, r, t + i, r + 6, t + i, e + n - a) : o.splice(13, 3, "L", t + i, n / 2, l, r, t + i, n / 2, t + i, e + n - a) : l && 0 > l ? r > e + s && r < e + n - s ? o.splice(33, 3, "L", t, r + 6, t - 6, r, t, r - 6, t, e + a) : o.splice(33, 3, "L", t, n / 2, l, r, t, n / 2, t, e + a) : r && r > n && l > t + s && l < t + i - s ? o.splice(23, 3, "L", l + 6, e + n, l, e + n + 6, l - 6, e + n, t + a, e + n) : r && 0 > r && l > t + s && l < t + i - s && o.splice(3, 3, "L", l - 6, e, l, e - 6, l + 6, e, i - a, e), o
                        }
                    },
                    clipRect: function(e, i, n, r) {
                        var o = t.uniqueKey(),
                            a = this.createElement("clipPath").attr({
                                id: o
                            }).add(this.defs);
                        return e = this.rect(e, i, n, r, 0).add(a), e.id = o, e.clipPath = a, e.count = 0, e
                    },
                    text: function(t, e, i, n) {
                        var r = {};
                        return !n || !this.allowHTML && this.forExport ? (r.x = Math.round(e || 0), i && (r.y = Math.round(i)), h(t) && (r.text = t), t = this.createElement("text").attr(r), n || (t.xSetter = function(t, e, i) {
                            var n, r, o = i.getElementsByTagName("tspan"),
                                a = i.getAttribute(e);
                            for (r = 0; r < o.length; r++) n = o[r], n.getAttribute(e) === a && n.setAttribute(e, t);
                            i.setAttribute(e, t)
                        }), t) : this.html(t, e, i)
                    },
                    fontMetrics: function(t, e) {
                        return t = t || e && e.style && e.style.fontSize || this.style && this.style.fontSize, t = /px/.test(t) ? O(t) : /em/.test(t) ? parseFloat(t) * (e ? this.fontMetrics(null, e.parentNode).f : 16) : 12, e = 24 > t ? t + 3 : Math.round(1.2 * t), {
                            h: e,
                            b: Math.round(.8 * e),
                            f: t
                        }
                    },
                    rotCorr: function(t, e, i) {
                        var n = t;
                        return e && i && (n = Math.max(n * Math.cos(e * u), 4)), {
                            x: -t / 3 * Math.sin(e * u),
                            y: n
                        }
                    },
                    label: function(i, n, r, o, a, s, l, c, u) {
                        var d, p, m, v, y, x, b, w, _, k, S, M, C, T = this,
                            P = T.g("button" !== u && "label"),
                            O = P.text = T.text("", 0, 0, l).attr({
                                zIndex: 1
                            }),
                            E = 0,
                            D = 3,
                            I = 0,
                            z = {},
                            B = /^url\((.*?)\)$/.test(o),
                            N = B;
                        u && P.addClass("highcharts-" + u), N = B, k = function() {
                            return (w || 0) % 2 / 2
                        }, S = function() {
                            var t = O.element.style,
                                e = {};
                            p = (void 0 === m || void 0 === v || b) && h(O.textStr) && O.getBBox(), P.width = (m || p.width || 0) + 2 * D + I, P.height = (v || p.height || 0) + 2 * D, _ = D + T.fontMetrics(t && t.fontSize, O).b, N && (d || (P.box = d = T.symbols[o] || B ? T.symbol(o) : T.rect(), d.addClass(("button" === u ? "" : "highcharts-label-box") + (u ? " highcharts-" + u + "-box" : "")), d.add(P), t = k(), e.x = t, e.y = (c ? -_ : 0) + t), e.width = Math.round(P.width), e.height = Math.round(P.height), d.attr(g(e, z)), z = {})
                        }, M = function() {
                            var t, e = I + D;
                            t = c ? 0 : _, h(m) && p && ("center" === b || "right" === b) && (e += {
                                center: .5,
                                right: 1
                            } [b] * (m - p.width)), e === O.x && t === O.y || (O.attr("x", e), O.hasBoxWidthChanged && (p = O.getBBox(!0), S()), void 0 !== t && O.attr("y", t)), O.x = e, O.y = t
                        }, C = function(t, e) {
                            d ? d.attr(t, e) : z[t] = e
                        }, P.onAdd = function() {
                            O.add(P), P.attr({
                                text: i || 0 === i ? i : "",
                                x: n,
                                y: r
                            }), d && h(a) && P.attr({
                                anchorX: a,
                                anchorY: s
                            })
                        }, P.widthSetter = function(e) {
                            m = t.isNumber(e) ? e : null
                        }, P.heightSetter = function(t) {
                            v = t
                        }, P["text-alignSetter"] = function(t) {
                            b = t
                        }, P.paddingSetter = function(t) {
                            h(t) && t !== D && (D = P.padding = t, M())
                        }, P.paddingLeftSetter = function(t) {
                            h(t) && t !== I && (I = t, M())
                        }, P.alignSetter = function(t) {
                            t = {
                                left: 0,
                                center: .5,
                                right: 1
                            } [t], t !== E && (E = t, p && P.attr({
                                x: y
                            }))
                        }, P.textSetter = function(t) {
                            void 0 !== t && O.textSetter(t), S(), M()
                        }, P["stroke-widthSetter"] = function(t, e) {
                            t && (N = !0), w = this["stroke-width"] = t, C(e, t)
                        }, P.strokeSetter = P.fillSetter = P.rSetter = function(t, e) {
                            "r" !== e && ("fill" === e && t && (N = !0), P[e] = t), C(e, t)
                        }, P.anchorXSetter = function(t, e) {
                            a = P.anchorX = t, C(e, Math.round(t) - k() - y)
                        }, P.anchorYSetter = function(t, e) {
                            s = P.anchorY = t, C(e, t - x)
                        }, P.xSetter = function(t) {
                            P.x = t, E && (t -= E * ((m || p.width) + 2 * D), P["forceAnimate:x"] = !0), y = Math.round(t), P.attr("translateX", y)
                        }, P.ySetter = function(t) {
                            x = P.y = Math.round(t), P.attr("translateY", x)
                        };
                        var R = P.css;
                        return g(P, {
                            css: function(t) {
                                if (t) {
                                    var e = {};
                                    t = A(t), f(P.textProps, function(i) {
                                        void 0 !== t[i] && (e[i] = t[i], delete t[i])
                                    }), O.css(e), "width" in e && S()
                                }
                                return R.call(P, t)
                            },
                            getBBox: function() {
                                return {
                                    width: p.width + 2 * D,
                                    height: p.height + 2 * D,
                                    x: p.x - D,
                                    y: p.y - D
                                }
                            },
                            shadow: function(t) {
                                return t && (S(), d && d.shadow(t)), P
                            },
                            destroy: function() {
                                L(P.element, "mouseenter"), L(P.element, "mouseleave"), O && (O = O.destroy()), d && (d = d.destroy()), e.prototype.destroy.call(P), P = T = S = M = C = null
                            }
                        })
                    }
                }), t.Renderer = i
            }(e),
            function(t) {
                var e = t.attr,
                    i = t.createElement,
                    n = t.css,
                    r = t.defined,
                    o = t.each,
                    a = t.extend,
                    s = t.isFirefox,
                    l = t.isMS,
                    c = t.isWebKit,
                    h = t.pick,
                    u = t.pInt,
                    d = t.SVGRenderer,
                    p = t.win,
                    f = t.wrap;
                a(t.SVGElement.prototype, {
                    htmlCss: function(t) {
                        var e = "SPAN" === this.element.tagName && t && "width" in t,
                            i = h(e && t.width, void 0);
                        return e && (delete t.width, this.textWidth = i, this.htmlUpdateTransform()), t && "ellipsis" === t.textOverflow && (t.whiteSpace = "nowrap", t.overflow = "hidden"), this.styles = a(this.styles, t), n(this.element, t), this
                    },
                    htmlGetBBox: function() {
                        var t = this.element;
                        return {
                            x: t.offsetLeft,
                            y: t.offsetTop,
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        }
                    },
                    htmlUpdateTransform: function() {
                        if (this.added) {
                            var t = this.renderer,
                                e = this.element,
                                i = this.translateX || 0,
                                a = this.translateY || 0,
                                s = this.x || 0,
                                l = this.y || 0,
                                c = this.textAlign || "left",
                                h = {
                                    left: 0,
                                    center: .5,
                                    right: 1
                                } [c],
                                d = this.styles,
                                p = d && d.whiteSpace;
                            if (n(e, {
                                    marginLeft: i,
                                    marginTop: a
                                }), this.shadows && o(this.shadows, function(t) {
                                    n(t, {
                                        marginLeft: i + 1,
                                        marginTop: a + 1
                                    })
                                }), this.inverted && o(e.childNodes, function(i) {
                                    t.invertChild(i, e)
                                }), "SPAN" === e.tagName) {
                                d = this.rotation;
                                var f, g = this.textWidth && u(this.textWidth),
                                    m = [d, c, e.innerHTML, this.textWidth, this.textAlign].join();
                                (f = g !== this.oldTextWidth) && !(f = g > this.oldTextWidth) && ((f = this.textPxLength) || (n(e, {
                                    width: "",
                                    whiteSpace: p || "nowrap"
                                }), f = e.offsetWidth), f = f > g), f && /[ \-]/.test(e.textContent || e.innerText) ? (n(e, {
                                    width: g + "px",
                                    display: "block",
                                    whiteSpace: p || "normal"
                                }), this.oldTextWidth = g, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1, m !== this.cTT && (p = t.fontMetrics(e.style.fontSize).b, !r(d) || d === (this.oldRotation || 0) && c === this.oldAlign || this.setSpanRotation(d, h, p), this.getSpanCorrection(!r(d) && this.textPxLength || e.offsetWidth, p, h, d, c)), n(e, {
                                    left: s + (this.xCorr || 0) + "px",
                                    top: l + (this.yCorr || 0) + "px"
                                }), this.cTT = m, this.oldRotation = d, this.oldAlign = c
                            }
                        } else this.alignOnAdd = !0
                    },
                    setSpanRotation: function(t, e, i) {
                        var r = {},
                            o = this.renderer.getTransformKey();
                        r[o] = r.transform = "rotate(" + t + "deg)", r[o + (s ? "Origin" : "-origin")] = r.transformOrigin = 100 * e + "% " + i + "px", n(this.element, r)
                    },
                    getSpanCorrection: function(t, e, i) {
                        this.xCorr = -t * i, this.yCorr = -e
                    }
                }), a(d.prototype, {
                    getTransformKey: function() {
                        return l && !/Edge/.test(p.navigator.userAgent) ? "-ms-transform" : c ? "-webkit-transform" : s ? "MozTransform" : p.opera ? "-o-transform" : ""
                    },
                    html: function(t, n, r) {
                        var s = this.createElement("span"),
                            l = s.element,
                            c = s.renderer,
                            u = c.isSVG,
                            d = function(t, e) {
                                o(["opacity", "visibility"], function(i) {
                                    f(t, i + "Setter", function(t, i, n, r) {
                                        t.call(this, i, n, r), e[n] = i
                                    })
                                }), t.addedSetters = !0
                            };
                        return s.textSetter = function(t) {
                            t !== l.innerHTML && delete this.bBox, this.textStr = t, l.innerHTML = h(t, ""), s.doTransform = !0
                        }, u && d(s, s.element.style), s.xSetter = s.ySetter = s.alignSetter = s.rotationSetter = function(t, e) {
                            "align" === e && (e = "textAlign"), s[e] = t, s.doTransform = !0
                        }, s.afterSetters = function() {
                            this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1)
                        }, s.attr({
                            text: t,
                            x: Math.round(n),
                            y: Math.round(r)
                        }).css({
                            fontFamily: this.style.fontFamily,
                            fontSize: this.style.fontSize,
                            position: "absolute"
                        }), l.style.whiteSpace = "nowrap", s.css = s.htmlCss, u && (s.add = function(t) {
                            var n, r = c.box.parentNode,
                                h = [];
                            if (this.parentGroup = t) {
                                if (n = t.div, !n) {
                                    for (; t;) h.push(t), t = t.parentGroup;
                                    o(h.reverse(), function(t) {
                                        function o(e, i) {
                                            t[i] = e, "translateX" === i ? l.left = e + "px" : l.top = e + "px", t.doTransform = !0
                                        }
                                        var l, c = e(t.element, "class");
                                        c && (c = {
                                            className: c
                                        }), n = t.div = t.div || i("div", c, {
                                            position: "absolute",
                                            left: (t.translateX || 0) + "px",
                                            top: (t.translateY || 0) + "px",
                                            display: t.display,
                                            opacity: t.opacity,
                                            pointerEvents: t.styles && t.styles.pointerEvents
                                        }, n || r), l = n.style, a(t, {
                                            classSetter: function(t) {
                                                return function(e) {
                                                    this.element.setAttribute("class", e), t.className = e
                                                }
                                            }(n),
                                            on: function() {
                                                return h[0].div && s.on.apply({
                                                    element: h[0].div
                                                }, arguments), t
                                            },
                                            translateXSetter: o,
                                            translateYSetter: o
                                        }), t.addedSetters || d(t, l)
                                    })
                                }
                            } else n = r;
                            return n.appendChild(l), s.added = !0, s.alignOnAdd && s.htmlUpdateTransform(), s
                        }), s
                    }
                })
            }(e),
            function(t) {
                var e = t.defined,
                    i = t.each,
                    n = t.extend,
                    r = t.merge,
                    o = t.pick,
                    a = t.timeUnits,
                    s = t.win;
                t.Time = function(t) {
                    this.update(t, !1)
                }, t.Time.prototype = {
                    defaultOptions: {},
                    update: function(t) {
                        var e = o(t && t.useUTC, !0),
                            i = this;
                        this.options = t = r(!0, this.options || {}, t), this.Date = t.Date || s.Date, this.timezoneOffset = (this.useUTC = e) && t.timezoneOffset, this.getTimezoneOffset = this.timezoneOffsetFunction(), (this.variableTimezone = !(e && !t.getTimezoneOffset && !t.timezone)) || this.timezoneOffset ? (this.get = function(t, e) {
                            var n = e.getTime(),
                                r = n - i.getTimezoneOffset(e);
                            return e.setTime(r), t = e["getUTC" + t](), e.setTime(n), t
                        }, this.set = function(t, e, n) {
                            var r;
                            "Milliseconds" === t || "Seconds" === t || "Minutes" === t && 0 === e.getTimezoneOffset() % 60 ? e["set" + t](n) : (r = i.getTimezoneOffset(e), r = e.getTime() - r, e.setTime(r), e["setUTC" + t](n), t = i.getTimezoneOffset(e), r = e.getTime() + t, e.setTime(r))
                        }) : e ? (this.get = function(t, e) {
                            return e["getUTC" + t]()
                        }, this.set = function(t, e, i) {
                            return e["setUTC" + t](i)
                        }) : (this.get = function(t, e) {
                            return e["get" + t]()
                        }, this.set = function(t, e, i) {
                            return e["set" + t](i)
                        })
                    },
                    makeTime: function(e, i, n, r, a, s) {
                        var l, c, h;
                        return this.useUTC ? (l = this.Date.UTC.apply(0, arguments), c = this.getTimezoneOffset(l), l += c, h = this.getTimezoneOffset(l), c !== h ? l += h - c : c - 36e5 !== this.getTimezoneOffset(l - 36e5) || t.isSafari || (l -= 36e5)) : l = new this.Date(e, i, o(n, 1), o(r, 0), o(a, 0), o(s, 0)).getTime(), l
                    },
                    timezoneOffsetFunction: function() {
                        var e = this,
                            i = this.options,
                            n = s.moment;
                        if (!this.useUTC) return function(t) {
                            return 6e4 * new Date(t).getTimezoneOffset()
                        };
                        if (i.timezone) {
                            if (n) return function(t) {
                                return 6e4 * -n.tz(t, i.timezone).utcOffset()
                            };
                            t.error(25)
                        }
                        return this.useUTC && i.getTimezoneOffset ? function(t) {
                            return 6e4 * i.getTimezoneOffset(t)
                        } : function() {
                            return 6e4 * (e.timezoneOffset || 0)
                        }
                    },
                    dateFormat: function(e, i, n) {
                        if (!t.defined(i) || isNaN(i)) return t.defaultOptions.lang.invalidDate || "";
                        e = t.pick(e, "%Y-%m-%d %H:%M:%S");
                        var r = this,
                            o = new this.Date(i),
                            a = this.get("Hours", o),
                            s = this.get("Day", o),
                            l = this.get("Date", o),
                            c = this.get("Month", o),
                            h = this.get("FullYear", o),
                            u = t.defaultOptions.lang,
                            d = u.weekdays,
                            p = u.shortWeekdays,
                            f = t.pad;
                        o = t.extend({
                            a: p ? p[s] : d[s].substr(0, 3),
                            A: d[s],
                            d: f(l),
                            e: f(l, 2, " "),
                            w: s,
                            b: u.shortMonths[c],
                            B: u.months[c],
                            m: f(c + 1),
                            o: c + 1,
                            y: h.toString().substr(2, 2),
                            Y: h,
                            H: f(a),
                            k: a,
                            I: f(a % 12 || 12),
                            l: a % 12 || 12,
                            M: f(r.get("Minutes", o)),
                            p: 12 > a ? "AM" : "PM",
                            P: 12 > a ? "am" : "pm",
                            S: f(o.getSeconds()),
                            L: f(Math.floor(i % 1e3), 3)
                        }, t.dateFormats);
                        return t.objectEach(o, function(t, n) {
                            for (; - 1 !== e.indexOf("%" + n);) e = e.replace("%" + n, "function" === typeof t ? t.call(r, i) : t)
                        }), n ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
                    },
                    resolveDTLFormat: function(e) {
                        return t.isObject(e, !0) ? e : (e = t.splat(e), {
                            main: e[0],
                            from: e[1],
                            to: e[2]
                        })
                    },
                    getTimeTicks: function(t, r, s, l) {
                        var c, h, u = this,
                            d = [],
                            p = {};
                        c = new u.Date(r);
                        var f, g = t.unitRange,
                            m = t.count || 1;
                        if (l = o(l, 1), e(r)) {
                            u.set("Milliseconds", c, g >= a.second ? 0 : m * Math.floor(u.get("Milliseconds", c) / m)), g >= a.second && u.set("Seconds", c, g >= a.minute ? 0 : m * Math.floor(u.get("Seconds", c) / m)), g >= a.minute && u.set("Minutes", c, g >= a.hour ? 0 : m * Math.floor(u.get("Minutes", c) / m)), g >= a.hour && u.set("Hours", c, g >= a.day ? 0 : m * Math.floor(u.get("Hours", c) / m)), g >= a.day && u.set("Date", c, g >= a.month ? 1 : m * Math.floor(u.get("Date", c) / m)), g >= a.month && (u.set("Month", c, g >= a.year ? 0 : m * Math.floor(u.get("Month", c) / m)), h = u.get("FullYear", c)), g >= a.year && u.set("FullYear", c, h - h % m), g === a.week && (h = u.get("Day", c), u.set("Date", c, u.get("Date", c) - h + l + (h < l ? -7 : 0))), h = u.get("FullYear", c), l = u.get("Month", c);
                            var v = u.get("Date", c),
                                y = u.get("Hours", c);
                            for (r = c.getTime(), u.variableTimezone && (f = s - r > 4 * a.month || u.getTimezoneOffset(r) !== u.getTimezoneOffset(s)), r = c.getTime(), c = 1; r < s;) d.push(r), r = g === a.year ? u.makeTime(h + c * m, 0) : g === a.month ? u.makeTime(h, l + c * m) : !f || g !== a.day && g !== a.week ? f && g === a.hour && 1 < m ? u.makeTime(h, l, v, y + c * m) : r + g * m : u.makeTime(h, l, v + c * m * (g === a.day ? 1 : 7)), c++;
                            d.push(r), g <= a.hour && 1e4 > d.length && i(d, function(t) {
                                0 === t % 18e5 && "000000000" === u.dateFormat("%H%M%S%L", t) && (p[t] = "day")
                            })
                        }
                        return d.info = n(t, {
                            higherRanks: p,
                            totalRange: g * m
                        }), d
                    }
                }
            }(e),
            function(t) {
                var e = t.color,
                    i = t.merge;
                t.defaultOptions = {
                    colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
                    symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
                    lang: {
                        loading: "Loading...",
                        months: "January February March April May June July August September October November December".split(" "),
                        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                        decimalPoint: ".",
                        numericSymbols: "kMGTPE".split(""),
                        resetZoom: "Reset zoom",
                        resetZoomTitle: "Reset zoom level 1:1",
                        thousandsSep: " "
                    },
                    global: {},
                    time: t.Time.prototype.defaultOptions,
                    chart: {
                        borderRadius: 0,
                        defaultSeriesType: "line",
                        ignoreHiddenSeries: !0,
                        spacing: [10, 10, 15, 10],
                        resetZoomButton: {
                            theme: {
                                zIndex: 6
                            },
                            position: {
                                align: "right",
                                x: -10,
                                y: 10
                            }
                        },
                        width: null,
                        height: null,
                        borderColor: "#335cad",
                        backgroundColor: "#ffffff",
                        plotBorderColor: "#cccccc"
                    },
                    title: {
                        text: "Chart title",
                        align: "center",
                        margin: 15,
                        widthAdjust: -44
                    },
                    subtitle: {
                        text: "",
                        align: "center",
                        widthAdjust: -44
                    },
                    plotOptions: {},
                    labels: {
                        style: {
                            position: "absolute",
                            color: "#333333"
                        }
                    },
                    legend: {
                        enabled: !0,
                        align: "center",
                        alignColumns: !0,
                        layout: "horizontal",
                        labelFormatter: function() {
                            return this.name
                        },
                        borderColor: "#999999",
                        borderRadius: 0,
                        navigation: {
                            activeColor: "#003399",
                            inactiveColor: "#cccccc"
                        },
                        itemStyle: {
                            color: "#333333",
                            fontSize: "12px",
                            fontWeight: "bold",
                            textOverflow: "ellipsis"
                        },
                        itemHoverStyle: {
                            color: "#000000"
                        },
                        itemHiddenStyle: {
                            color: "#cccccc"
                        },
                        shadow: !1,
                        itemCheckboxStyle: {
                            position: "absolute",
                            width: "13px",
                            height: "13px"
                        },
                        squareSymbol: !0,
                        symbolPadding: 5,
                        verticalAlign: "bottom",
                        x: 0,
                        y: 0,
                        title: {
                            style: {
                                fontWeight: "bold"
                            }
                        }
                    },
                    loading: {
                        labelStyle: {
                            fontWeight: "bold",
                            position: "relative",
                            top: "45%"
                        },
                        style: {
                            position: "absolute",
                            backgroundColor: "#ffffff",
                            opacity: .5,
                            textAlign: "center"
                        }
                    },
                    tooltip: {
                        enabled: !0,
                        animation: t.svg,
                        borderRadius: 3,
                        dateTimeLabelFormats: {
                            millisecond: "%A, %b %e, %H:%M:%S.%L",
                            second: "%A, %b %e, %H:%M:%S",
                            minute: "%A, %b %e, %H:%M",
                            hour: "%A, %b %e, %H:%M",
                            day: "%A, %b %e, %Y",
                            week: "Week from %A, %b %e, %Y",
                            month: "%B %Y",
                            year: "%Y"
                        },
                        footerFormat: "",
                        padding: 8,
                        snap: t.isTouchDevice ? 25 : 10,
                        backgroundColor: e("#f7f7f7").setOpacity(.85).get(),
                        borderWidth: 1,
                        headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                        pointFormat: '<span style="color:{point.color}">â—</span> {series.name}: <b>{point.y}</b><br/>',
                        shadow: !0,
                        style: {
                            color: "#333333",
                            cursor: "default",
                            fontSize: "12px",
                            pointerEvents: "none",
                            whiteSpace: "nowrap"
                        }
                    },
                    credits: {
                        enabled: !0,
                        href: "https://www.highcharts.com",
                        position: {
                            align: "right",
                            x: -10,
                            verticalAlign: "bottom",
                            y: -5
                        },
                        style: {
                            cursor: "pointer",
                            color: "#999999",
                            fontSize: "9px"
                        },
                        text: "Highcharts.com"
                    }
                }, t.setOptions = function(e) {
                    return t.defaultOptions = i(!0, t.defaultOptions, e), t.time.update(i(t.defaultOptions.global, t.defaultOptions.time), !1), t.defaultOptions
                }, t.getOptions = function() {
                    return t.defaultOptions
                }, t.defaultPlotOptions = t.defaultOptions.plotOptions, t.time = new t.Time(i(t.defaultOptions.global, t.defaultOptions.time)), t.dateFormat = function(e, i, n) {
                    return t.time.dateFormat(e, i, n)
                }
            }(e),
            function(t) {
                var e = t.correctFloat,
                    i = t.defined,
                    n = t.destroyObjectProperties,
                    r = t.fireEvent,
                    o = t.isNumber,
                    a = t.merge,
                    s = t.pick,
                    l = t.deg2rad;
                t.Tick = function(t, e, i, n, r) {
                    this.axis = t, this.pos = e, this.type = i || "", this.isNewLabel = this.isNew = !0, this.parameters = r || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, i || n || this.addLabel()
                }, t.Tick.prototype = {
                    addLabel: function() {
                        var n, r, o, l, c = this,
                            h = c.axis,
                            u = h.options,
                            d = h.chart,
                            p = h.categories,
                            f = h.names,
                            g = c.pos,
                            m = s(c.options && c.options.labels, u.labels),
                            v = h.tickPositions,
                            y = g === v[0],
                            x = g === v[v.length - 1],
                            b = (p = this.parameters.category || (p ? s(p[g], f[g], g) : g), c.label);
                        v = v.info;
                        h.isDatetimeAxis && v && (r = d.time.resolveDTLFormat(u.dateTimeLabelFormats[!u.grid && v.higherRanks[g] || v.unitName]), n = r.main), c.isFirst = y, c.isLast = x, c.formatCtx = {
                            axis: h,
                            chart: d,
                            isFirst: y,
                            isLast: x,
                            dateTimeLabelFormat: n,
                            tickPositionInfo: v,
                            value: h.isLog ? e(h.lin2log(p)) : p,
                            pos: g
                        }, u = h.labelFormatter.call(c.formatCtx, this.formatCtx), (l = r && r.list) && (c.shortenLabel = function() {
                            for (o = 0; o < l.length; o++)
                                if (b.attr({
                                        text: h.labelFormatter.call(t.extend(c.formatCtx, {
                                            dateTimeLabelFormat: l[o]
                                        }))
                                    }), b.getBBox().width < h.getSlotWidth(c) - 2 * s(m.padding, 5)) return;
                            b.attr({
                                text: ""
                            })
                        }), i(b) ? b && b.textStr !== u && (!b.textWidth || m.style && m.style.width || b.styles.width || b.css({
                            width: null
                        }), b.attr({
                            text: u
                        })) : ((c.label = b = i(u) && m.enabled ? d.renderer.text(u, 0, 0, m.useHTML).css(a(m.style)).add(h.labelGroup) : null) && (b.textPxLength = b.getBBox().width), c.rotation = 0)
                    },
                    getLabelSize: function() {
                        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
                    },
                    handleOverflow: function(t) {
                        var e, i = this.axis,
                            n = i.options.labels,
                            r = t.x,
                            o = i.chart.chartWidth,
                            a = i.chart.spacing,
                            c = s(i.labelLeft, Math.min(i.pos, a[3])),
                            h = (a = s(i.labelRight, Math.max(i.isRadial ? 0 : i.pos + i.len, o - a[1])), this.label),
                            u = this.rotation,
                            d = {
                                left: 0,
                                center: .5,
                                right: 1
                            } [i.labelAlign || h.attr("align")],
                            p = h.getBBox().width,
                            f = i.getSlotWidth(this),
                            g = f,
                            m = 1,
                            v = {};
                        u || "justify" !== s(n.overflow, "justify") ? 0 > u && r - d * p < c ? e = Math.round(r / Math.cos(u * l) - c) : 0 < u && r + d * p > a && (e = Math.round((o - r) / Math.cos(u * l))) : (o = r + (1 - d) * p, r - d * p < c ? g = t.x + g * (1 - d) - c : o > a && (g = a - t.x + g * d, m = -1), g = Math.min(f, g), g < f && "center" === i.labelAlign && (t.x += m * (f - g - d * (f - Math.min(p, g)))), (p > g || i.autoRotation && (h.styles || {}).width) && (e = g)), e && (this.shortenLabel ? this.shortenLabel() : (v.width = e, (n.style || {}).textOverflow || (v.textOverflow = "ellipsis"), h.css(v)))
                    },
                    getPosition: function(e, i, n, o) {
                        var a = this.axis,
                            s = a.chart,
                            l = o && s.oldChartHeight || s.chartHeight;
                        return e = {
                            x: e ? t.correctFloat(a.translate(i + n, null, null, o) + a.transB) : a.left + a.offset + (a.opposite ? (o && s.oldChartWidth || s.chartWidth) - a.right - a.left : 0),
                            y: e ? l - a.bottom + a.offset - (a.opposite ? a.height : 0) : t.correctFloat(l - a.translate(i + n, null, null, o) - a.transB)
                        }, r(this, "afterGetPosition", {
                            pos: e
                        }), e
                    },
                    getLabelPosition: function(t, e, n, o, a, s, c, h) {
                        var u = this.axis,
                            d = u.transA,
                            p = u.reversed,
                            f = u.staggerLines,
                            g = u.tickRotCorr || {
                                x: 0,
                                y: 0
                            },
                            m = a.y,
                            v = o || u.reserveSpaceDefault ? 0 : -u.labelOffset * ("center" === u.labelAlign ? .5 : 1),
                            y = {};
                        return i(m) || (m = 0 === u.side ? n.rotation ? -8 : -n.getBBox().height : 2 === u.side ? g.y + 8 : Math.cos(n.rotation * l) * (g.y - n.getBBox(!1, 0).height / 2)), t = t + a.x + v + g.x - (s && o ? s * d * (p ? -1 : 1) : 0), e = e + m - (s && !o ? s * d * (p ? 1 : -1) : 0), f && (n = c / (h || 1) % f, u.opposite && (n = f - n - 1), e += u.labelOffset / f * n), y.x = t, y.y = Math.round(e), r(this, "afterGetLabelPosition", {
                            pos: y
                        }), y
                    },
                    getMarkPath: function(t, e, i, n, r, o) {
                        return o.crispLine(["M", t, e, "L", t + (r ? 0 : -i), e + (r ? i : 0)], n)
                    },
                    renderGridLine: function(t, e, i) {
                        var n = this.axis,
                            r = n.options,
                            o = this.gridLine,
                            a = {},
                            l = this.pos,
                            c = this.type,
                            h = s(this.tickmarkOffset, n.tickmarkOffset),
                            u = n.chart.renderer,
                            d = c ? c + "Grid" : "grid",
                            p = r[d + "LineWidth"],
                            f = r[d + "LineColor"];
                        r = r[d + "LineDashStyle"];
                        o || (a.stroke = f, a["stroke-width"] = p, r && (a.dashstyle = r), c || (a.zIndex = 1), t && (e = 0), this.gridLine = o = u.path().attr(a).addClass("highcharts-" + (c ? c + "-" : "") + "grid-line").add(n.gridGroup)), o && (i = n.getPlotLinePath(l + h, o.strokeWidth() * i, t, "pass")) && o[t || this.isNew ? "attr" : "animate"]({
                            d: i,
                            opacity: e
                        })
                    },
                    renderMark: function(t, e, i) {
                        var n = this.axis,
                            r = n.options,
                            o = n.chart.renderer,
                            a = this.type,
                            l = a ? a + "Tick" : "tick",
                            c = n.tickSize(l),
                            h = this.mark,
                            u = !h,
                            d = t.x;
                        t = t.y;
                        var p = s(r[l + "Width"], !a && n.isXAxis ? 1 : 0);
                        r = r[l + "Color"];
                        c && (n.opposite && (c[0] = -c[0]), u && (this.mark = h = o.path().addClass("highcharts-" + (a ? a + "-" : "") + "tick").add(n.axisGroup), h.attr({
                            stroke: r,
                            "stroke-width": p
                        })), h[u ? "attr" : "animate"]({
                            d: this.getMarkPath(d, t, c[0], h.strokeWidth() * i, n.horiz, o),
                            opacity: e
                        }))
                    },
                    renderLabel: function(t, e, i, n) {
                        var r = this.axis,
                            a = r.horiz,
                            l = r.options,
                            c = this.label,
                            h = l.labels,
                            u = h.step,
                            d = (r = s(this.tickmarkOffset, r.tickmarkOffset), !0),
                            p = t.x;
                        t = t.y, c && o(p) && (c.xy = t = this.getLabelPosition(p, t, c, a, h, r, n, u), this.isFirst && !this.isLast && !s(l.showFirstLabel, 1) || this.isLast && !this.isFirst && !s(l.showLastLabel, 1) ? d = !1 : !a || h.step || h.rotation || e || 0 === i || this.handleOverflow(t), u && n % u && (d = !1), d && o(t.y) ? (t.opacity = i, c[this.isNewLabel ? "attr" : "animate"](t), this.isNewLabel = !1) : (c.attr("y", -9999), this.isNewLabel = !0))
                    },
                    render: function(e, i, n) {
                        var r = this.axis,
                            o = r.horiz,
                            a = this.pos,
                            l = s(this.tickmarkOffset, r.tickmarkOffset),
                            c = (a = this.getPosition(o, a, l, i), l = a.x, a.y);
                        r = o && l === r.pos + r.len || !o && c === r.pos ? -1 : 1;
                        n = s(n, 1), this.isActive = !0, this.renderGridLine(i, n, r), this.renderMark(a, n, r), this.renderLabel(a, i, n, e), this.isNew = !1, t.fireEvent(this, "afterRender")
                    },
                    destroy: function() {
                        n(this, this.axis)
                    }
                }
            }(e);
            var i = function(t) {
                var e = t.addEvent,
                    i = t.animObject,
                    n = t.arrayMax,
                    r = t.arrayMin,
                    o = t.color,
                    a = t.correctFloat,
                    s = t.defaultOptions,
                    l = t.defined,
                    c = t.deg2rad,
                    h = t.destroyObjectProperties,
                    u = t.each,
                    d = t.extend,
                    p = t.fireEvent,
                    f = t.format,
                    g = t.getMagnitude,
                    m = t.grep,
                    v = t.inArray,
                    y = t.isArray,
                    x = t.isNumber,
                    b = t.isString,
                    w = t.merge,
                    _ = t.normalizeTickInterval,
                    k = t.objectEach,
                    S = t.pick,
                    M = t.removeEvent,
                    A = t.splat,
                    C = t.syncTimeout,
                    T = t.Tick,
                    P = function() {
                        this.init.apply(this, arguments)
                    };
                return t.extend(P.prototype, {
                    defaultOptions: {
                        dateTimeLabelFormats: {
                            millisecond: {
                                main: "%H:%M:%S.%L",
                                range: !1
                            },
                            second: {
                                main: "%H:%M:%S",
                                range: !1
                            },
                            minute: {
                                main: "%H:%M",
                                range: !1
                            },
                            hour: {
                                main: "%H:%M",
                                range: !1
                            },
                            day: {
                                main: "%e. %b"
                            },
                            week: {
                                main: "%e. %b"
                            },
                            month: {
                                main: "%b '%y"
                            },
                            year: {
                                main: "%Y"
                            }
                        },
                        endOnTick: !1,
                        labels: {
                            enabled: !0,
                            indentation: 10,
                            x: 0,
                            style: {
                                color: "#666666",
                                cursor: "default",
                                fontSize: "11px"
                            }
                        },
                        maxPadding: .01,
                        minorTickLength: 2,
                        minorTickPosition: "outside",
                        minPadding: .01,
                        startOfWeek: 1,
                        startOnTick: !1,
                        tickLength: 10,
                        tickPixelInterval: 100,
                        tickmarkPlacement: "between",
                        tickPosition: "outside",
                        title: {
                            align: "middle",
                            style: {
                                color: "#666666"
                            }
                        },
                        type: "linear",
                        minorGridLineColor: "#f2f2f2",
                        minorGridLineWidth: 1,
                        minorTickColor: "#999999",
                        lineColor: "#ccd6eb",
                        lineWidth: 1,
                        gridLineColor: "#cccccc22",
                        tickColor: "#ccd6eb"
                    },
                    defaultYAxisOptions: {
                        endOnTick: !0,
                        maxPadding: .05,
                        minPadding: .05,
                        tickPixelInterval: 72,
                        showLastLabel: !0,
                        labels: {
                            x: -8
                        },
                        startOnTick: !0,
                        title: {
                            rotation: 270,
                            text: "Values"
                        },
                        stackLabels: {
                            allowOverlap: !1,
                            enabled: !1,
                            formatter: function() {
                                return t.numberFormat(this.total, -1)
                            },
                            style: {
                                color: "#000000",
                                fontSize: "11px",
                                fontWeight: "bold",
                                textOutline: "1px contrast"
                            }
                        },
                        gridLineWidth: 1,
                        lineWidth: 0
                    },
                    defaultLeftAxisOptions: {
                        labels: {
                            x: -15
                        },
                        title: {
                            rotation: 270
                        }
                    },
                    defaultRightAxisOptions: {
                        labels: {
                            x: 15
                        },
                        title: {
                            rotation: 90
                        }
                    },
                    defaultBottomAxisOptions: {
                        labels: {
                            autoRotation: [-45],
                            x: 0
                        },
                        title: {
                            rotation: 0
                        }
                    },
                    defaultTopAxisOptions: {
                        labels: {
                            autoRotation: [-45],
                            x: 0
                        },
                        title: {
                            rotation: 0
                        }
                    },
                    init: function(t, i) {
                        var n = i.isX,
                            r = this;
                        r.chart = t, r.horiz = t.inverted && !r.isZAxis ? !n : n, r.isXAxis = n, r.coll = r.coll || (n ? "xAxis" : "yAxis"), p(this, "init", {
                            userOptions: i
                        }), r.opposite = i.opposite, r.side = i.side || (r.horiz ? r.opposite ? 0 : 2 : r.opposite ? 1 : 3), r.setOptions(i);
                        var o = this.options,
                            a = o.type;
                        r.labelFormatter = o.labels.formatter || r.defaultLabelFormatter, r.userOptions = i, r.minPixelPadding = 0, r.reversed = o.reversed, r.visible = !1 !== o.visible, r.zoomEnabled = !1 !== o.zoomEnabled, r.hasNames = "category" === a || !0 === o.categories, r.categories = o.categories || r.hasNames, r.names || (r.names = [], r.names.keys = {}), r.plotLinesAndBandsGroups = {}, r.isLog = "logarithmic" === a, r.isDatetimeAxis = "datetime" === a, r.positiveValuesOnly = r.isLog && !r.allowNegativeLog, r.isLinked = l(o.linkedTo), r.ticks = {}, r.labelEdge = [], r.minorTicks = {}, r.plotLinesAndBands = [], r.alternateBands = {}, r.len = 0, r.minRange = r.userMinRange = o.minRange || o.maxZoom, r.range = o.range, r.offset = o.offset || 0, r.stacks = {}, r.oldStacks = {}, r.stacksTouched = 0, r.max = null, r.min = null, r.crosshair = S(o.crosshair, A(t.options.tooltip.crosshairs)[n ? 0 : 1], !1), i = r.options.events, -1 === v(r, t.axes) && (n ? t.axes.splice(t.xAxis.length, 0, r) : t.axes.push(r), t[r.coll].push(r)), r.series = r.series || [], t.inverted && !r.isZAxis && n && void 0 === r.reversed && (r.reversed = !0), k(i, function(t, i) {
                            e(r, i, t)
                        }), r.lin2log = o.linearToLogConverter || r.lin2log, r.isLog && (r.val2lin = r.log2lin, r.lin2val = r.lin2log), p(this, "afterInit")
                    },
                    setOptions: function(t) {
                        this.options = w(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], w(s[this.coll], t)), p(this, "afterSetOptions", {
                            userOptions: t
                        })
                    },
                    defaultLabelFormatter: function() {
                        var e, i = this.axis,
                            n = this.value,
                            r = i.chart.time,
                            o = i.categories,
                            a = this.dateTimeLabelFormat,
                            l = s.lang,
                            c = l.numericSymbols,
                            h = (l = l.numericSymbolMagnitude || 1e3, c && c.length),
                            u = i.options.labels.format;
                        i = i.isLog ? Math.abs(n) : i.tickInterval;
                        if (u) e = f(u, this, r);
                        else if (o) e = n;
                        else if (a) e = r.dateFormat(a, n);
                        else if (h && 1e3 <= i)
                            for (; h-- && void 0 === e;) r = Math.pow(l, h + 1), i >= r && 0 === 10 * n % r && null !== c[h] && 0 !== n && (e = t.numberFormat(n / r, -1) + c[h]);
                        return void 0 === e && (e = 1e4 <= Math.abs(n) ? t.numberFormat(n, -1) : t.numberFormat(n, -1, void 0, "")), e
                    },
                    getSeriesExtremes: function() {
                        var t = this,
                            e = t.chart;
                        p(this, "getSeriesExtremes", null, function() {
                            t.hasVisibleSeries = !1, t.dataMin = t.dataMax = t.threshold = null, t.softThreshold = !t.isXAxis, t.buildStacks && t.buildStacks(), u(t.series, function(i) {
                                if (i.visible || !e.options.chart.ignoreHiddenSeries) {
                                    var o, a = i.options,
                                        s = a.threshold;
                                    t.hasVisibleSeries = !0, t.positiveValuesOnly && 0 >= s && (s = null), t.isXAxis ? (a = i.xData, a.length && (i = r(a), o = n(a), x(i) || i instanceof Date || (a = m(a, x), i = r(a), o = n(a)), a.length && (t.dataMin = Math.min(S(t.dataMin, a[0], i), i), t.dataMax = Math.max(S(t.dataMax, a[0], o), o)))) : (i.getExtremes(), o = i.dataMax, i = i.dataMin, l(i) && l(o) && (t.dataMin = Math.min(S(t.dataMin, i), i), t.dataMax = Math.max(S(t.dataMax, o), o)), l(s) && (t.threshold = s), (!a.softThreshold || t.positiveValuesOnly) && (t.softThreshold = !1))
                                }
                            })
                        }), p(this, "afterGetSeriesExtremes")
                    },
                    translate: function(t, e, i, n, r, o) {
                        var a = this.linkedParent || this,
                            s = 1,
                            l = 0,
                            c = n ? a.oldTransA : a.transA;
                        n = n ? a.oldMin : a.min;
                        var h = a.minPixelPadding;
                        return r = (a.isOrdinal || a.isBroken || a.isLog && r) && a.lin2val, c || (c = a.transA), i && (s *= -1, l = a.len), a.reversed && (s *= -1, l -= s * (a.sector || a.len)), e ? (t = (t * s + l - h) / c + n, r && (t = a.lin2val(t))) : (r && (t = a.val2lin(t)), t = x(n) ? s * (t - n) * c + l + s * h + (x(o) ? c * o : 0) : void 0), t
                    },
                    toPixels: function(t, e) {
                        return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
                    },
                    toValue: function(t, e) {
                        return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
                    },
                    getPlotLinePath: function(t, e, i, n, r) {
                        var o, a, s, l = this.chart,
                            c = this.left,
                            h = this.top,
                            u = i && l.oldChartHeight || l.chartHeight,
                            d = i && l.oldChartWidth || l.chartWidth;
                        o = this.transB;
                        var p = function(t, e, i) {
                            return ("pass" !== n && t < e || t > i) && (n ? t = Math.min(Math.max(e, t), i) : s = !0), t
                        };
                        return r = S(r, this.translate(t, null, null, i)), r = Math.min(Math.max(-1e5, r), 1e5), t = i = Math.round(r + o), o = a = Math.round(u - r - o), x(r) ? this.horiz ? (o = h, a = u - this.bottom, t = i = p(t, c, c + this.width)) : (t = c, i = d - this.right, o = a = p(o, h, h + this.height)) : (s = !0, n = !1), s && !n ? null : l.renderer.crispLine(["M", t, o, "L", i, a], e || 1)
                    },
                    getLinearTickPositions: function(t, e, i) {
                        var n, r = a(Math.floor(e / t) * t);
                        i = a(Math.ceil(i / t) * t);
                        var o, s = [];
                        if (a(r + t) === r && (o = 20), this.single) return [e];
                        for (e = r; e <= i;) {
                            if (s.push(e), e = a(e + t, o), e === n) break;
                            n = e
                        }
                        return s
                    },
                    getMinorTickInterval: function() {
                        var t = this.options;
                        return !0 === t.minorTicks ? S(t.minorTickInterval, "auto") : !1 === t.minorTicks ? null : t.minorTickInterval
                    },
                    getMinorTickPositions: function() {
                        var t = this,
                            e = t.options,
                            i = t.tickPositions,
                            n = t.minorTickInterval,
                            r = [],
                            o = t.pointRangePadding || 0,
                            a = t.min - o,
                            s = (o = t.max + o, o - a);
                        if (s && s / n < t.len / 3)
                            if (t.isLog) u(this.paddedTicks, function(e, i, o) {
                                i && r.push.apply(r, t.getLogTickPositions(n, o[i - 1], o[i], !0))
                            });
                            else if (t.isDatetimeAxis && "auto" === this.getMinorTickInterval()) r = r.concat(t.getTimeTicks(t.normalizeTimeTickInterval(n), a, o, e.startOfWeek));
                        else
                            for (e = a + (i[0] - a) % n; e <= o && e !== r[0]; e += n) r.push(e);
                        return 0 !== r.length && t.trimTicks(r), r
                    },
                    adjustForMinRange: function() {
                        var t, e, i, o, a, s, c, h = this.options,
                            d = this.min,
                            p = this.max;
                        this.isXAxis && void 0 === this.minRange && !this.isLog && (l(h.min) || l(h.max) ? this.minRange = null : (u(this.series, function(t) {
                            for (s = t.xData, o = t.xIncrement ? 1 : s.length - 1; 0 < o; o--) a = s[o] - s[o - 1], (void 0 === i || a < i) && (i = a)
                        }), this.minRange = Math.min(5 * i, this.dataMax - this.dataMin))), p - d < this.minRange && (e = this.dataMax - this.dataMin >= this.minRange, c = this.minRange, t = (c - p + d) / 2, t = [d - t, S(h.min, d - t)], e && (t[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), d = n(t), p = [d + c, S(h.max, d + c)], e && (p[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), p = r(p), p - d < c && (t[0] = p - c, t[1] = S(h.min, p - c), d = n(t))), this.min = d, this.max = p
                    },
                    getClosest: function() {
                        var t;
                        return this.categories ? t = 1 : u(this.series, function(e) {
                            var i = e.closestPointRange,
                                n = e.visible || !e.chart.options.chart.ignoreHiddenSeries;
                            !e.noSharedTooltip && l(i) && n && (t = l(t) ? Math.min(t, i) : i)
                        }), t
                    },
                    nameToX: function(t) {
                        var e, i = y(this.categories),
                            n = i ? this.categories : this.names,
                            r = t.options.x;
                        return t.series.requireSorting = !1, l(r) || (r = !1 === this.options.uniqueNames ? t.series.autoIncrement() : i ? v(t.name, n) : S(n.keys[t.name], -1)), -1 === r ? i || (e = n.length) : e = r, void 0 !== e && (this.names[e] = t.name, this.names.keys[t.name] = e), e
                    },
                    updateNames: function() {
                        var e = this,
                            i = this.names;
                        0 < i.length && (u(t.keys(i.keys), function(t) {
                            delete i.keys[t]
                        }), i.length = 0, this.minRange = this.userMinRange, u(this.series || [], function(t) {
                            t.xIncrement = null, t.points && !t.isDirtyData || (t.processData(), t.generatePoints()), u(t.points, function(i, n) {
                                var r;
                                i.options && (r = e.nameToX(i), void 0 !== r && r !== i.x && (i.x = r, t.xData[n] = r))
                            })
                        }))
                    },
                    setAxisTranslation: function(t) {
                        var e, i = this,
                            n = i.max - i.min,
                            r = i.axisPointRange || 0,
                            o = 0,
                            a = 0,
                            s = i.linkedParent,
                            l = !!i.categories,
                            c = i.transA,
                            h = i.isXAxis;
                        (h || l || r) && (e = i.getClosest(), s ? (o = s.minPointOffset, a = s.pointRangePadding) : u(i.series, function(t) {
                            var n = l ? 1 : h ? S(t.options.pointRange, e, 0) : i.axisPointRange || 0;
                            t = t.options.pointPlacement, r = Math.max(r, n), i.single || (o = Math.max(o, b(t) ? 0 : n / 2), a = Math.max(a, "on" === t ? 0 : n))
                        }), s = i.ordinalSlope && e ? i.ordinalSlope / e : 1, i.minPointOffset = o *= s, i.pointRangePadding = a *= s, i.pointRange = Math.min(r, n), h && (i.closestPointRange = e)), t && (i.oldTransA = c), i.translationSlope = i.transA = c = i.staticScale || i.len / (n + a || 1), i.transB = i.horiz ? i.left : i.bottom, i.minPixelPadding = c * o, p(this, "afterSetAxisTranslation")
                    },
                    minFromRange: function() {
                        return this.max - this.range
                    },
                    setTickInterval: function(e) {
                        var i, n, r, o, s = this,
                            c = s.chart,
                            h = s.options,
                            d = s.isLog,
                            f = s.isDatetimeAxis,
                            m = s.isXAxis,
                            v = s.isLinked,
                            y = h.maxPadding,
                            b = h.minPadding,
                            w = h.tickInterval,
                            k = h.tickPixelInterval,
                            M = s.categories,
                            A = x(s.threshold) ? s.threshold : null,
                            C = s.softThreshold;
                        f || M || v || this.getTickAmount(), r = S(s.userMin, h.min), o = S(s.userMax, h.max), v ? (s.linkedParent = c[s.coll][h.linkedTo], c = s.linkedParent.getExtremes(), s.min = S(c.min, c.dataMin), s.max = S(c.max, c.dataMax), h.type !== s.linkedParent.options.type && t.error(11, 1)) : (!C && l(A) && (s.dataMin >= A ? (i = A, b = 0) : s.dataMax <= A && (n = A, y = 0)), s.min = S(r, i, s.dataMin), s.max = S(o, n, s.dataMax)), d && (s.positiveValuesOnly && !e && 0 >= Math.min(s.min, S(s.dataMin, s.min)) && t.error(10, 1), s.min = a(s.log2lin(s.min), 15), s.max = a(s.log2lin(s.max), 15)), s.range && l(s.max) && (s.userMin = s.min = r = Math.max(s.dataMin, s.minFromRange()), s.userMax = o = s.max, s.range = null), p(s, "foundExtremes"), s.beforePadding && s.beforePadding(), s.adjustForMinRange(), !(M || s.axisPointRange || s.usePercentage || v) && l(s.min) && l(s.max) && (c = s.max - s.min) && (!l(r) && b && (s.min -= c * b), !l(o) && y && (s.max += c * y)), x(h.softMin) && !x(s.userMin) && (s.min = Math.min(s.min, h.softMin)), x(h.softMax) && !x(s.userMax) && (s.max = Math.max(s.max, h.softMax)), x(h.floor) && (s.min = Math.max(s.min, h.floor)), x(h.ceiling) && (s.max = Math.min(s.max, h.ceiling)), C && l(s.dataMin) && (A = A || 0, !l(r) && s.min < A && s.dataMin >= A ? s.min = A : !l(o) && s.max > A && s.dataMax <= A && (s.max = A)), s.tickInterval = s.min === s.max || void 0 === s.min || void 0 === s.max ? 1 : v && !w && k === s.linkedParent.options.tickPixelInterval ? w = s.linkedParent.tickInterval : S(w, this.tickAmount ? (s.max - s.min) / Math.max(this.tickAmount - 1, 1) : void 0, M ? 1 : (s.max - s.min) * k / Math.max(s.len, k)), m && !e && u(s.series, function(t) {
                            t.processData(s.min !== s.oldMin || s.max !== s.oldMax)
                        }), s.setAxisTranslation(!0), s.beforeSetTickPositions && s.beforeSetTickPositions(), s.postProcessTickInterval && (s.tickInterval = s.postProcessTickInterval(s.tickInterval)), s.pointRange && !w && (s.tickInterval = Math.max(s.pointRange, s.tickInterval)), e = S(h.minTickInterval, s.isDatetimeAxis && s.closestPointRange), !w && s.tickInterval < e && (s.tickInterval = e), f || d || w || (s.tickInterval = _(s.tickInterval, null, g(s.tickInterval), S(h.allowDecimals, !(.5 < s.tickInterval && 5 > s.tickInterval && 1e3 < s.max && 9999 > s.max)), !!this.tickAmount)), this.tickAmount || (s.tickInterval = s.unsquish()), this.setTickPositions()
                    },
                    setTickPositions: function() {
                        var e, i = this.options,
                            n = i.tickPositions;
                        e = this.getMinorTickInterval();
                        var r = i.tickPositioner,
                            o = i.startOnTick,
                            a = i.endOnTick;
                        this.tickmarkOffset = this.categories && "between" === i.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === e && this.tickInterval ? this.tickInterval / 5 : e, this.single = this.min === this.max && l(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== i.allowDecimals), this.tickPositions = e = n && n.slice(), !e && (!this.ordinalPositions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200) ? (e = [this.min, this.max], t.error(19)) : e = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, i.units), this.min, this.max, i.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), e.length > this.len && (e = [e[0], e.pop()], e[0] === e[1] && (e.length = 1)), this.tickPositions = e, r && (r = r.apply(this, [this.min, this.max]))) && (this.tickPositions = e = r), this.paddedTicks = e.slice(0), this.trimTicks(e, o, a), this.isLinked || (this.single && 2 > e.length && (this.min -= .5, this.max += .5), n || r || this.adjustTickAmount()), p(this, "afterSetTickPositions")
                    },
                    trimTicks: function(t, e, i) {
                        var n = t[0],
                            r = t[t.length - 1],
                            o = this.minPointOffset || 0;
                        if (!this.isLinked) {
                            if (e && -1 / 0 !== n) this.min = n;
                            else
                                for (; this.min - o > t[0];) t.shift();
                            if (i) this.max = r;
                            else
                                for (; this.max + o < t[t.length - 1];) t.pop();
                            0 === t.length && l(n) && !this.options.tickPositions && t.push((r + n) / 2)
                        }
                    },
                    alignToOthers: function() {
                        var t, e = {},
                            i = this.options;
                        return !1 === this.chart.options.chart.alignTicks || !1 === i.alignTicks || !1 === i.startOnTick || !1 === i.endOnTick || this.isLog || u(this.chart[this.coll], function(i) {
                            var n = i.options;
                            n = [i.horiz ? n.left : n.top, n.width, n.height, n.pane].join();
                            i.series.length && (e[n] ? t = !0 : e[n] = 1)
                        }), t
                    },
                    getTickAmount: function() {
                        var t = this.options,
                            e = t.tickAmount,
                            i = t.tickPixelInterval;
                        !l(t.tickInterval) && this.len < i && !this.isRadial && !this.isLog && t.startOnTick && t.endOnTick && (e = 2), !e && this.alignToOthers() && (e = Math.ceil(this.len / i) + 1), 4 > e && (this.finalTickAmt = e, e = 5), this.tickAmount = e
                    },
                    adjustTickAmount: function() {
                        var t = this.tickInterval,
                            e = this.tickPositions,
                            i = this.tickAmount,
                            n = this.finalTickAmt,
                            r = e && e.length,
                            o = S(this.threshold, this.softThreshold ? 0 : null);
                        if (this.hasData()) {
                            if (r < i) {
                                for (; e.length < i;) e.length % 2 || this.min === o ? e.push(a(e[e.length - 1] + t)) : e.unshift(a(e[0] - t));
                                this.transA *= (r - 1) / (i - 1), this.min = e[0], this.max = e[e.length - 1]
                            } else r > i && (this.tickInterval *= 2, this.setTickPositions());
                            if (l(n)) {
                                for (t = i = e.length; t--;)(3 === n && 1 === t % 2 || 2 >= n && 0 < t && t < i - 1) && e.splice(t, 1);
                                this.finalTickAmt = void 0
                            }
                        }
                    },
                    setScale: function() {
                        var t, e;
                        this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), e = this.len !== this.oldAxisLength, u(this.series, function(e) {
                            (e.isDirtyData || e.isDirty || e.xAxis.isDirty) && (t = !0)
                        }), e || t || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks(), p(this, "afterSetScale")
                    },
                    setExtremes: function(t, e, i, n, r) {
                        var o = this,
                            a = o.chart;
                        i = S(i, !0), u(o.series, function(t) {
                            delete t.kdTree
                        }), r = d(r, {
                            min: t,
                            max: e
                        }), p(o, "setExtremes", r, function() {
                            o.userMin = t, o.userMax = e, o.eventArgs = r, i && a.redraw(n)
                        })
                    },
                    zoom: function(t, e) {
                        var i = this.dataMin,
                            n = this.dataMax,
                            r = this.options,
                            o = Math.min(i, S(r.min, i));
                        r = Math.max(n, S(r.max, n));
                        return t === this.min && e === this.max || (this.allowZoomOutside || (l(i) && (t < o && (t = o), t > r && (t = r)), l(n) && (e < o && (e = o), e > r && (e = r))), this.displayBtn = void 0 !== t || void 0 !== e, this.setExtremes(t, e, !1, void 0, {
                            trigger: "zoom"
                        })), !0
                    },
                    setAxisSize: function() {
                        var e = this.chart,
                            i = this.options,
                            n = i.offsets || [0, 0, 0, 0],
                            r = this.horiz,
                            o = this.width = Math.round(t.relativeLength(S(i.width, e.plotWidth - n[3] + n[1]), e.plotWidth)),
                            a = this.height = Math.round(t.relativeLength(S(i.height, e.plotHeight - n[0] + n[2]), e.plotHeight)),
                            s = this.top = Math.round(t.relativeLength(S(i.top, e.plotTop + n[0]), e.plotHeight, e.plotTop));
                        i = this.left = Math.round(t.relativeLength(S(i.left, e.plotLeft + n[3]), e.plotWidth, e.plotLeft));
                        this.bottom = e.chartHeight - a - s, this.right = e.chartWidth - o - i, this.len = Math.max(r ? o : a, 0), this.pos = r ? i : s
                    },
                    getExtremes: function() {
                        var t = this.isLog;
                        return {
                            min: t ? a(this.lin2log(this.min)) : this.min,
                            max: t ? a(this.lin2log(this.max)) : this.max,
                            dataMin: this.dataMin,
                            dataMax: this.dataMax,
                            userMin: this.userMin,
                            userMax: this.userMax
                        }
                    },
                    getThreshold: function(t) {
                        var e = this.isLog,
                            i = e ? this.lin2log(this.min) : this.min;
                        e = e ? this.lin2log(this.max) : this.max;
                        return null === t || -1 / 0 === t ? t = i : 1 / 0 === t ? t = e : i > t ? t = i : e < t && (t = e), this.translate(t, 0, 1, 0, 1)
                    },
                    autoLabelAlign: function(t) {
                        return t = (S(t, 0) - 90 * this.side + 720) % 360, 15 < t && 165 > t ? "right" : 195 < t && 345 > t ? "left" : "center"
                    },
                    tickSize: function(t) {
                        var e = this.options,
                            i = e[t + "Length"],
                            n = S(e[t + "Width"], "tick" === t && this.isXAxis ? 1 : 0);
                        if (n && i) return "inside" === e[t + "Position"] && (i = -i), [i, n]
                    },
                    labelMetrics: function() {
                        var t = this.tickPositions && this.tickPositions[0] || 0;
                        return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[t] && this.ticks[t].label)
                    },
                    unsquish: function() {
                        var t, e, i, n = this.options.labels,
                            r = this.horiz,
                            o = this.tickInterval,
                            s = o,
                            h = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / o),
                            d = n.rotation,
                            p = this.labelMetrics(),
                            f = Number.MAX_VALUE,
                            g = function(t) {
                                return t /= h || 1, t = 1 < t ? Math.ceil(t) : 1, a(t * o)
                            };
                        return r ? (i = !n.staggerLines && !n.step && (l(d) ? [d] : h < S(n.autoRotationLimit, 80) && n.autoRotation)) && u(i, function(i) {
                            var n;
                            (i === d || i && -90 <= i && 90 >= i) && (e = g(Math.abs(p.h / Math.sin(c * i))), n = e + Math.abs(i / 360), n < f && (f = n, t = i, s = e))
                        }) : n.step || (s = g(p.h)), this.autoRotation = i, this.labelRotation = S(t, d), s
                    },
                    getSlotWidth: function(t) {
                        var e = this.chart,
                            i = this.horiz,
                            n = this.options.labels,
                            r = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                            o = e.margin[3];
                        return t && t.slotWidth || i && 2 > (n.step || 0) && !n.rotation && (this.staggerLines || 1) * this.len / r || !i && (n.style && parseInt(n.style.width, 10) || o && o - e.spacing[3] || .33 * e.chartWidth)
                    },
                    renderUnsquish: function() {
                        var t, e, i, n = this.chart,
                            r = n.renderer,
                            o = this.tickPositions,
                            a = this.ticks,
                            s = this.options.labels,
                            l = s && s.style || {},
                            c = this.horiz,
                            h = this.getSlotWidth(),
                            d = Math.max(1, Math.round(h - 2 * (s.padding || 5))),
                            p = {},
                            f = this.labelMetrics(),
                            g = s.style && s.style.textOverflow,
                            m = 0;
                        if (b(s.rotation) || (p.rotation = s.rotation || 0), u(o, function(t) {
                                (t = a[t]) && t.label && t.label.textPxLength > m && (m = t.label.textPxLength)
                            }), this.maxLabelLength = m, this.autoRotation) m > d && m > f.h ? p.rotation = this.labelRotation : this.labelRotation = 0;
                        else if (h && (t = d, !g))
                            for (e = "clip", d = o.length; !c && d--;) i = o[d], (i = a[i].label) && (i.styles && "ellipsis" === i.styles.textOverflow ? i.css({
                                textOverflow: "clip"
                            }) : i.textPxLength > h && i.css({
                                width: h + "px"
                            }), i.getBBox().height > this.len / o.length - (f.h - f.f) && (i.specificTextOverflow = "ellipsis"));
                        p.rotation && (t = m > .5 * n.chartHeight ? .33 * n.chartHeight : m, g || (e = "ellipsis")), (this.labelAlign = s.align || this.autoLabelAlign(this.labelRotation)) && (p.align = this.labelAlign), u(o, function(i) {
                            var n = (i = a[i]) && i.label,
                                r = l.width,
                                o = {};
                            n && (n.attr(p), i.shortenLabel ? i.shortenLabel() : t && !r && "nowrap" !== l.whiteSpace && (t < n.textPxLength || "SPAN" === n.element.tagName) ? (o.width = t, g || (o.textOverflow = n.specificTextOverflow || e), n.css(o)) : n.styles && n.styles.width && !o.width && !r && n.css({
                                width: null
                            }), delete n.specificTextOverflow, i.rotation = p.rotation)
                        }, this), this.tickRotCorr = r.rotCorr(f.b, this.labelRotation || 0, 0 !== this.side)
                    },
                    hasData: function() {
                        return this.hasVisibleSeries || l(this.min) && l(this.max) && this.tickPositions && 0 < this.tickPositions.length
                    },
                    addTitle: function(t) {
                        var e, i = this.chart.renderer,
                            n = this.horiz,
                            r = this.opposite,
                            o = this.options.title;
                        this.axisTitle || ((e = o.textAlign) || (e = (n ? {
                            low: "left",
                            middle: "center",
                            high: "right"
                        } : {
                            low: r ? "right" : "left",
                            middle: "center",
                            high: r ? "left" : "right"
                        })[o.align]), this.axisTitle = i.text(o.text, 0, 0, o.useHTML).attr({
                            zIndex: 7,
                            rotation: o.rotation || 0,
                            align: e
                        }).addClass("highcharts-axis-title").css(w(o.style)).add(this.axisGroup), this.axisTitle.isNew = !0), o.style.width || this.isRadial || this.axisTitle.css({
                            width: this.len
                        }), this.axisTitle[t ? "show" : "hide"](!0)
                    },
                    generateTick: function(t) {
                        var e = this.ticks;
                        e[t] ? e[t].addLabel() : e[t] = new T(this, t)
                    },
                    getOffset: function() {
                        var t, e, i, n = this,
                            r = n.chart,
                            o = r.renderer,
                            a = n.options,
                            s = n.tickPositions,
                            c = n.ticks,
                            h = n.horiz,
                            d = n.side,
                            f = r.inverted && !n.isZAxis ? [1, 0, 3, 2][d] : d,
                            g = 0,
                            m = 0,
                            v = a.title,
                            y = a.labels,
                            x = 0,
                            b = r.axisOffset,
                            w = (r = r.clipOffset, [-1, 1, 1, -1][d]),
                            _ = a.className,
                            M = n.axisParent;
                        t = n.hasData(), n.showAxis = e = t || S(a.showEmpty, !0), n.staggerLines = n.horiz && y.staggerLines, n.axisGroup || (n.gridGroup = o.g("grid").attr({
                            zIndex: a.gridZIndex || 1
                        }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (_ || "")).add(M), n.axisGroup = o.g("axis").attr({
                            zIndex: a.zIndex || 2
                        }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (_ || "")).add(M), n.labelGroup = o.g("axis-labels").attr({
                            zIndex: y.zIndex || 7
                        }).addClass("highcharts-" + n.coll.toLowerCase() + "-labels " + (_ || "")).add(M)), t || n.isLinked ? (u(s, function(t, e) {
                            n.generateTick(t, e)
                        }), n.renderUnsquish(), n.reserveSpaceDefault = 0 === d || 2 === d || {
                            1: "left",
                            3: "right"
                        } [d] === n.labelAlign, S(y.reserveSpace, "center" === n.labelAlign || null, n.reserveSpaceDefault) && u(s, function(t) {
                            x = Math.max(c[t].getLabelSize(), x)
                        }), n.staggerLines && (x *= n.staggerLines), n.labelOffset = x * (n.opposite ? -1 : 1)) : k(c, function(t, e) {
                            t.destroy(), delete c[e]
                        }), v && v.text && !1 !== v.enabled && (n.addTitle(e), e && !1 !== v.reserveSpace && (n.titleOffset = g = n.axisTitle.getBBox()[h ? "height" : "width"], i = v.offset, m = l(i) ? 0 : S(v.margin, h ? 5 : 10))), n.renderLine(), n.offset = w * S(a.offset, b[d]), n.tickRotCorr = n.tickRotCorr || {
                            x: 0,
                            y: 0
                        }, o = 0 === d ? -n.labelMetrics().h : 2 === d ? n.tickRotCorr.y : 0, m = Math.abs(x) + m, x && (m = m - o + w * (h ? S(y.y, n.tickRotCorr.y + 8 * w) : y.x)), n.axisTitleMargin = S(i, m), n.getMaxLabelDimensions && (n.maxLabelDimensions = n.getMaxLabelDimensions(c, s)), h = this.tickSize("tick"), b[d] = Math.max(b[d], n.axisTitleMargin + g + w * n.offset, m, t && s.length && h ? h[0] + w * n.offset : 0), a = a.offset ? 0 : 2 * Math.floor(n.axisLine.strokeWidth() / 2), r[f] = Math.max(r[f], a), p(this, "afterGetOffset")
                    },
                    getLinePath: function(t) {
                        var e = this.chart,
                            i = this.opposite,
                            n = this.offset,
                            r = this.horiz,
                            o = this.left + (i ? this.width : 0) + n;
                        n = e.chartHeight - this.bottom - (i ? this.height : 0) + n;
                        return i && (t *= -1), e.renderer.crispLine(["M", r ? this.left : o, r ? n : this.top, "L", r ? e.chartWidth - this.right : o, r ? n : e.chartHeight - this.bottom], t)
                    },
                    renderLine: function() {
                        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.axisLine.attr({
                            stroke: this.options.lineColor,
                            "stroke-width": this.options.lineWidth,
                            zIndex: 7
                        }))
                    },
                    getTitlePosition: function() {
                        var t = this.horiz,
                            e = this.left,
                            i = this.top,
                            n = this.len,
                            r = this.options.title,
                            o = t ? e : i,
                            a = this.opposite,
                            s = this.offset,
                            l = r.x || 0,
                            c = r.y || 0,
                            h = this.axisTitle,
                            u = this.chart.renderer.fontMetrics(r.style && r.style.fontSize, h);
                        h = Math.max(h.getBBox(null, 0).height - u.h - 1, 0), n = {
                            low: o + (t ? 0 : n),
                            middle: o + n / 2,
                            high: o + (t ? n : 0)
                        } [r.align], e = (t ? i + this.height : e) + (t ? 1 : -1) * (a ? -1 : 1) * this.axisTitleMargin + [-h, h, u.f, -h][this.side];
                        return {
                            x: t ? n + l : e + (a ? this.width : 0) + s + l,
                            y: t ? e + c - (a ? this.height : 0) + s : n + c
                        }
                    },
                    renderMinorTick: function(t) {
                        var e = this.chart.hasRendered && x(this.oldMin),
                            i = this.minorTicks;
                        i[t] || (i[t] = new T(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1)
                    },
                    renderTick: function(t, e) {
                        var i = this.isLinked,
                            n = this.ticks,
                            r = this.chart.hasRendered && x(this.oldMin);
                        (!i || t >= this.min && t <= this.max) && (n[t] || (n[t] = new T(this, t)), r && n[t].isNew && n[t].render(e, !0, -1), n[t].render(e))
                    },
                    render: function() {
                        var e, n, r = this,
                            o = r.chart,
                            a = r.options,
                            s = r.isLog,
                            l = r.isLinked,
                            c = r.tickPositions,
                            h = r.axisTitle,
                            d = r.ticks,
                            f = r.minorTicks,
                            g = r.alternateBands,
                            m = a.stackLabels,
                            v = a.alternateGridColor,
                            y = r.tickmarkOffset,
                            b = r.axisLine,
                            w = r.showAxis,
                            _ = i(o.renderer.globalAnimation);
                        r.labelEdge.length = 0, r.overlap = !1, u([d, f, g], function(t) {
                            k(t, function(t) {
                                t.isActive = !1
                            })
                        }), (r.hasData() || l) && (r.minorTickInterval && !r.categories && u(r.getMinorTickPositions(), function(t) {
                            r.renderMinorTick(t)
                        }), c.length && (u(c, function(t, e) {
                            r.renderTick(t, e)
                        }), y && (0 === r.min || r.single) && (d[-1] || (d[-1] = new T(r, -1, null, !0)), d[-1].render(-1))), v && u(c, function(i, a) {
                            n = void 0 !== c[a + 1] ? c[a + 1] + y : r.max - y, 0 === a % 2 && i < r.max && n <= r.max + (o.polar ? -y : y) && (g[i] || (g[i] = new t.PlotLineOrBand(r)), e = i + y, g[i].options = {
                                from: s ? r.lin2log(e) : e,
                                to: s ? r.lin2log(n) : n,
                                color: v
                            }, g[i].render(), g[i].isActive = !0)
                        }), r._addedPlotLB || (u((a.plotLines || []).concat(a.plotBands || []), function(t) {
                            r.addPlotBandOrLine(t)
                        }), r._addedPlotLB = !0)), u([d, f, g], function(t) {
                            var e, i = [],
                                n = _.duration;
                            k(t, function(t, e) {
                                t.isActive || (t.render(e, !1, 0), t.isActive = !1, i.push(e))
                            }), C(function() {
                                for (e = i.length; e--;) t[i[e]] && !t[i[e]].isActive && (t[i[e]].destroy(), delete t[i[e]])
                            }, t !== g && o.hasRendered && n ? n : 0)
                        }), b && (b[b.isPlaced ? "animate" : "attr"]({
                            d: this.getLinePath(b.strokeWidth())
                        }), b.isPlaced = !0, b[w ? "show" : "hide"](!0)), h && w && (a = r.getTitlePosition(), x(a.y) ? (h[h.isNew ? "attr" : "animate"](a), h.isNew = !1) : (h.attr("y", -9999), h.isNew = !0)), m && m.enabled && r.renderStackTotals(), r.isDirty = !1, p(this, "afterRender")
                    },
                    redraw: function() {
                        this.visible && (this.render(), u(this.plotLinesAndBands, function(t) {
                            t.render()
                        })), u(this.series, function(t) {
                            t.isDirty = !0
                        })
                    },
                    keepProps: "extKey hcEvents names series userMax userMin".split(" "),
                    destroy: function(t) {
                        var e, i = this,
                            n = i.stacks,
                            r = i.plotLinesAndBands;
                        if (p(this, "destroy", {
                                keepEvents: t
                            }), t || M(i), k(n, function(t, e) {
                                h(t), n[e] = null
                            }), u([i.ticks, i.minorTicks, i.alternateBands], function(t) {
                                h(t)
                            }), r)
                            for (t = r.length; t--;) r[t].destroy();
                        for (e in u("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" "), function(t) {
                                i[t] && (i[t] = i[t].destroy())
                            }), i.plotLinesAndBandsGroups) i.plotLinesAndBandsGroups[e] = i.plotLinesAndBandsGroups[e].destroy();
                        k(i, function(t, e) {
                            -1 === v(e, i.keepProps) && delete i[e]
                        })
                    },
                    drawCrosshair: function(t, e) {
                        var i, n, r = this.crosshair,
                            a = S(r.snap, !0),
                            s = this.cross;
                        if (p(this, "drawCrosshair", {
                                e: t,
                                point: e
                            }), t || (t = this.cross && this.cross.e), this.crosshair && !1 !== (l(e) || !a)) {
                            if (a ? l(e) && (n = S(e.crosshairPos, this.isXAxis ? e.plotX : this.len - e.plotY)) : n = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), l(n) && (i = this.getPlotLinePath(e && (this.isXAxis ? e.x : S(e.stackY, e.y)), null, null, null, n) || null), !l(i)) return void this.hideCrosshair();
                            a = this.categories && !this.isRadial, s || (this.cross = s = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (a ? "category " : "thin ") + r.className).attr({
                                zIndex: S(r.zIndex, 2)
                            }).add(), s.attr({
                                stroke: r.color || (a ? o("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
                                "stroke-width": S(r.width, 1)
                            }).css({
                                "pointer-events": "none"
                            }), r.dashStyle && s.attr({
                                dashstyle: r.dashStyle
                            })), s.show().attr({
                                d: i
                            }), a && !r.width && s.attr({
                                "stroke-width": this.transA
                            }), this.cross.e = t
                        } else this.hideCrosshair();
                        p(this, "afterDrawCrosshair", {
                            e: t,
                            point: e
                        })
                    },
                    hideCrosshair: function() {
                        this.cross && this.cross.hide()
                    }
                }), t.Axis = P
            }(e);
            return function(t) {
                    var e = t.Axis,
                        i = t.getMagnitude,
                        n = t.normalizeTickInterval,
                        r = t.timeUnits;
                    e.prototype.getTimeTicks = function() {
                        return this.chart.time.getTimeTicks.apply(this.chart.time, arguments)
                    }, e.prototype.normalizeTimeTickInterval = function(t, e) {
                        var o = e || [
                            ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                            ["second", [1, 2, 5, 10, 15, 30]],
                            ["minute", [1, 2, 5, 10, 15, 30]],
                            ["hour", [1, 2, 3, 4, 6, 8, 12]],
                            ["day", [1, 2]],
                            ["week", [1, 2]],
                            ["month", [1, 2, 3, 4, 6]],
                            ["year", null]
                        ];
                        e = o[o.length - 1];
                        var a, s = r[e[0]],
                            l = e[1];
                        for (a = 0; a < o.length && (e = o[a], s = r[e[0]], l = e[1], !(o[a + 1] && t <= (s * l[l.length - 1] + r[o[a + 1][0]]) / 2)); a++);
                        return s === r.year && t < 5 * s && (l = [1, 2, 5]), t = n(t / s, l, "year" === e[0] ? Math.max(i(t / s), 1) : 1), {
                            unitRange: s,
                            count: t,
                            unitName: e[0]
                        }
                    }
                }(e),
                function(t) {
                    var e = t.Axis,
                        i = t.getMagnitude,
                        n = t.map,
                        r = t.normalizeTickInterval,
                        o = t.pick;
                    e.prototype.getLogTickPositions = function(t, e, a, s) {
                        var l = this.options,
                            c = this.len,
                            h = [];
                        if (s || (this._minorAutoInterval = null), .5 <= t) t = Math.round(t), h = this.getLinearTickPositions(t, e, a);
                        else if (.08 <= t) {
                            var u, d, p, f, g;
                            for (c = Math.floor(e), l = .3 < t ? [1, 2, 4] : .15 < t ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; c < a + 1 && !g; c++)
                                for (d = l.length, u = 0; u < d && !g; u++) p = this.log2lin(this.lin2log(c) * l[u]), p > e && (!s || f <= a) && void 0 !== f && h.push(f), f > a && (g = !0), f = p
                        } else e = this.lin2log(e), a = this.lin2log(a), t = s ? this.getMinorTickInterval() : l.tickInterval, t = o("auto" === t ? null : t, this._minorAutoInterval, l.tickPixelInterval / (s ? 5 : 1) * (a - e) / ((s ? c / this.tickPositions.length : c) || 1)), t = r(t, null, i(t)), h = n(this.getLinearTickPositions(t, e, a), this.log2lin), s || (this._minorAutoInterval = t / 5);
                        return s || (this.tickInterval = t), h
                    }, e.prototype.log2lin = function(t) {
                        return Math.log(t) / Math.LN10
                    }, e.prototype.lin2log = function(t) {
                        return Math.pow(10, t)
                    }
                }(e),
                function(t, e) {
                    var i = t.arrayMax,
                        n = t.arrayMin,
                        r = t.defined,
                        o = t.destroyObjectProperties,
                        a = t.each,
                        s = t.erase,
                        l = t.merge,
                        c = t.pick;
                    t.PlotLineOrBand = function(t, e) {
                        this.axis = t, e && (this.options = e, this.id = e.id)
                    }, t.PlotLineOrBand.prototype = {
                        render: function() {
                            t.fireEvent(this, "render");
                            var e = this,
                                i = e.axis,
                                n = i.horiz,
                                o = e.options,
                                a = o.label,
                                s = e.label,
                                h = o.to,
                                u = o.from,
                                d = o.value,
                                p = r(u) && r(h),
                                f = r(d),
                                g = e.svgElem,
                                m = !g,
                                v = [],
                                y = o.color,
                                x = c(o.zIndex, 0),
                                b = o.events,
                                w = (v = {
                                    class: "highcharts-plot-" + (p ? "band " : "line ") + (o.className || "")
                                }, {}),
                                _ = i.chart.renderer,
                                k = p ? "bands" : "lines";
                            if (i.isLog && (u = i.log2lin(u), h = i.log2lin(h), d = i.log2lin(d)), f ? (v.stroke = y, v["stroke-width"] = o.width, o.dashStyle && (v.dashstyle = o.dashStyle)) : p && (y && (v.fill = y), o.borderWidth && (v.stroke = o.borderColor, v["stroke-width"] = o.borderWidth)), w.zIndex = x, k += "-" + x, (y = i.plotLinesAndBandsGroups[k]) || (i.plotLinesAndBandsGroups[k] = y = _.g("plot-" + k).attr(w).add()), m && (e.svgElem = g = _.path().attr(v).add(y)), f) v = i.getPlotLinePath(d, g.strokeWidth());
                            else {
                                if (!p) return;
                                v = i.getPlotBandPath(u, h, o)
                            }
                            return m && v && v.length ? (g.attr({
                                d: v
                            }), b && t.objectEach(b, function(t, i) {
                                g.on(i, function(t) {
                                    b[i].apply(e, [t])
                                })
                            })) : g && (v ? (g.show(), g.animate({
                                d: v
                            })) : (g.hide(), s && (e.label = s = s.destroy()))), a && r(a.text) && v && v.length && 0 < i.width && 0 < i.height && !v.isFlat ? (a = l({
                                align: n && p && "center",
                                x: n ? !p && 4 : 10,
                                verticalAlign: !n && p && "middle",
                                y: n ? p ? 16 : 10 : p ? 6 : -4,
                                rotation: n && !p && 90
                            }, a), this.renderLabel(a, v, p, x)) : s && s.hide(), e
                        },
                        renderLabel: function(t, e, r, o) {
                            var a = this.label,
                                s = this.axis.chart.renderer;
                            a || (a = {
                                align: t.textAlign || t.align,
                                rotation: t.rotation,
                                class: "highcharts-plot-" + (r ? "band" : "line") + "-label " + (t.className || "")
                            }, a.zIndex = o, this.label = a = s.text(t.text, 0, 0, t.useHTML).attr(a).add(), a.css(t.style)), o = e.xBounds || [e[1], e[4], r ? e[6] : e[1]], e = e.yBounds || [e[2], e[5], r ? e[7] : e[2]], r = n(o), s = n(e), a.align(t, !1, {
                                x: r,
                                y: s,
                                width: i(o) - r,
                                height: i(e) - s
                            }), a.show()
                        },
                        destroy: function() {
                            s(this.axis.plotLinesAndBands, this), delete this.axis, o(this)
                        }
                    }, t.extend(e.prototype, {
                        getPlotBandPath: function(t, e) {
                            var i, n = this.getPlotLinePath(e, null, null, !0),
                                r = this.getPlotLinePath(t, null, null, !0),
                                o = [],
                                a = this.horiz,
                                s = 1;
                            if (t = t < this.min && e < this.min || t > this.max && e > this.max, r && n)
                                for (t && (i = r.toString() === n.toString(), s = 0), t = 0; t < r.length; t += 6) a && n[t + 1] === r[t + 1] ? (n[t + 1] += s, n[t + 4] += s) : a || n[t + 2] !== r[t + 2] || (n[t + 2] += s, n[t + 5] += s), o.push("M", r[t + 1], r[t + 2], "L", r[t + 4], r[t + 5], n[t + 4], n[t + 5], n[t + 1], n[t + 2], "z"), o.isFlat = i;
                            return o
                        },
                        addPlotBand: function(t) {
                            return this.addPlotBandOrLine(t, "plotBands")
                        },
                        addPlotLine: function(t) {
                            return this.addPlotBandOrLine(t, "plotLines")
                        },
                        addPlotBandOrLine: function(e, i) {
                            var n = new t.PlotLineOrBand(this, e).render(),
                                r = this.userOptions;
                            return n && (i && (r[i] = r[i] || [], r[i].push(e)), this.plotLinesAndBands.push(n)), n
                        },
                        removePlotBandOrLine: function(t) {
                            for (var e = this.plotLinesAndBands, i = this.options, n = this.userOptions, r = e.length; r--;) e[r].id === t && e[r].destroy();
                            a([i.plotLines || [], n.plotLines || [], i.plotBands || [], n.plotBands || []], function(e) {
                                for (r = e.length; r--;) e[r].id === t && s(e, e[r])
                            })
                        },
                        removePlotBand: function(t) {
                            this.removePlotBandOrLine(t)
                        },
                        removePlotLine: function(t) {
                            this.removePlotBandOrLine(t)
                        }
                    })
                }(e, i),
                function(t) {
                    var e = t.doc,
                        i = t.each,
                        n = t.extend,
                        r = t.format,
                        o = t.isNumber,
                        a = t.map,
                        s = t.merge,
                        l = t.pick,
                        c = t.splat,
                        h = t.syncTimeout,
                        u = t.timeUnits;
                    t.Tooltip = function() {
                        this.init.apply(this, arguments)
                    }, t.Tooltip.prototype = {
                        init: function(t, e) {
                            this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                                x: 0,
                                y: 0
                            }, this.isHidden = !0, this.split = e.split && !t.inverted, this.shared = e.shared || this.split, this.outside = e.outside && !this.split
                        },
                        cleanSplit: function(t) {
                            i(this.chart.series, function(e) {
                                var i = e && e.tt;
                                i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1)
                            })
                        },
                        getLabel: function() {
                            var e, i = this.chart.renderer,
                                n = this.options;
                            return this.label || (this.outside && (this.container = e = t.doc.createElement("div"), e.className = "highcharts-tooltip-container", t.css(e, {
                                position: "absolute",
                                top: "1px",
                                pointerEvents: n.style && n.style.pointerEvents
                            }), t.doc.body.appendChild(e), this.renderer = i = new t.Renderer(e, 0, 0)), this.split ? this.label = i.g("tooltip") : (this.label = i.label("", 0, 0, n.shape || "callout", null, null, n.useHTML, null, "tooltip").attr({
                                padding: n.padding,
                                r: n.borderRadius
                            }), this.label.attr({
                                fill: n.backgroundColor,
                                "stroke-width": n.borderWidth
                            }).css(n.style).shadow(n.shadow)), this.outside && (this.label.attr({
                                x: this.distance,
                                y: this.distance
                            }), this.label.xSetter = function(t) {
                                e.style.left = t + "px"
                            }, this.label.ySetter = function(t) {
                                e.style.top = t + "px"
                            }), this.label.attr({
                                zIndex: 8
                            }).add()), this.label
                        },
                        update: function(t) {
                            this.destroy(), s(!0, this.chart.options.tooltip.userOptions, t), this.init(this.chart, s(!0, this.options, t))
                        },
                        destroy: function() {
                            this.label && (this.label = this.label.destroy()), this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()), this.renderer && (this.renderer = this.renderer.destroy(), t.discardElement(this.container)), t.clearTimeout(this.hideTimer), t.clearTimeout(this.tooltipTimeout)
                        },
                        move: function(e, i, r, o) {
                            var a = this,
                                s = a.now,
                                l = !1 !== a.options.animation && !a.isHidden && (1 < Math.abs(e - s.x) || 1 < Math.abs(i - s.y)),
                                c = a.followPointer || 1 < a.len;
                            n(s, {
                                x: l ? (2 * s.x + e) / 3 : e,
                                y: l ? (s.y + i) / 2 : i,
                                anchorX: c ? void 0 : l ? (2 * s.anchorX + r) / 3 : r,
                                anchorY: c ? void 0 : l ? (s.anchorY + o) / 2 : o
                            }), a.getLabel().attr(s), l && (t.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                                a && a.move(e, i, r, o)
                            }, 32))
                        },
                        hide: function(e) {
                            var i = this;
                            t.clearTimeout(this.hideTimer), e = l(e, this.options.hideDelay, 500), this.isHidden || (this.hideTimer = h(function() {
                                i.getLabel()[e ? "fadeOut" : "hide"](), i.isHidden = !0
                            }, e))
                        },
                        getAnchor: function(t, e) {
                            var n, r, o = this.chart,
                                s = o.pointer,
                                l = o.inverted,
                                h = o.plotTop,
                                u = o.plotLeft,
                                d = 0,
                                p = 0;
                            return t = c(t), this.followPointer && e ? (void 0 === e.chartX && (e = s.normalize(e)), t = [e.chartX - o.plotLeft, e.chartY - h]) : t[0].tooltipPos ? t = t[0].tooltipPos : (i(t, function(t) {
                                n = t.series.yAxis, r = t.series.xAxis, d += t.plotX + (!l && r ? r.left - u : 0), p += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!l && n ? n.top - h : 0)
                            }), d /= t.length, p /= t.length, t = [l ? o.plotWidth - p : d, this.shared && !l && 1 < t.length && e ? e.chartY - h : l ? o.plotHeight - d : p]), a(t, Math.round)
                        },
                        getPosition: function(t, i, n) {
                            var r, o = this.chart,
                                a = this.distance,
                                s = {},
                                c = o.inverted && n.h || 0,
                                h = this.outside,
                                u = h ? e.documentElement.clientWidth - 2 * a : o.chartWidth,
                                d = h ? Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.documentElement.clientHeight) : o.chartHeight,
                                p = o.pointer.chartPosition,
                                f = ["y", d, i, (h ? p.top - a : 0) + n.plotY + o.plotTop, h ? 0 : o.plotTop, h ? d : o.plotTop + o.plotHeight],
                                g = ["x", u, t, (h ? p.left - a : 0) + n.plotX + o.plotLeft, h ? 0 : o.plotLeft, h ? u : o.plotLeft + o.plotWidth],
                                m = !this.followPointer && l(n.ttBelow, !o.inverted === !!n.negative),
                                v = function(t, e, i, n, r, o) {
                                    var l = i < n - a,
                                        h = n + a + i < e,
                                        u = n - a - i;
                                    if (n += a, m && h) s[t] = n;
                                    else if (!m && l) s[t] = u;
                                    else if (l) s[t] = Math.min(o - i, 0 > u - c ? u : u - c);
                                    else {
                                        if (!h) return !1;
                                        s[t] = Math.max(r, n + c + i > e ? n : n + c)
                                    }
                                },
                                y = function(t, e, i, n) {
                                    var r;
                                    return n < a || n > e - a ? r = !1 : s[t] = n < i / 2 ? 1 : n > e - i / 2 ? e - i - 2 : n - i / 2, r
                                },
                                x = function(t) {
                                    var e = f;
                                    f = g, g = e, r = t
                                },
                                b = function() {
                                    !1 !== v.apply(0, f) ? !1 !== y.apply(0, g) || r || (x(!0), b()) : r ? s.x = s.y = 0 : (x(!0), b())
                                };
                            return (o.inverted || 1 < this.len) && x(), b(), s
                        },
                        defaultFormatter: function(t) {
                            var e, i = this.points || c(this);
                            return e = [t.tooltipFooterHeaderFormatter(i[0])], e = e.concat(t.bodyFormatter(i)), e.push(t.tooltipFooterHeaderFormatter(i[0], !0)), e
                        },
                        refresh: function(e, n) {
                            var r, o, a, s = this.options,
                                h = e,
                                u = {},
                                d = [];
                            r = s.formatter || this.defaultFormatter;
                            var p;
                            u = this.shared;
                            s.enabled && (t.clearTimeout(this.hideTimer), this.followPointer = c(h)[0].series.tooltipOptions.followPointer, a = this.getAnchor(h, n), n = a[0], o = a[1], !u || h.series && h.series.noSharedTooltip ? u = h.getLabelConfig() : (i(h, function(t) {
                                t.setState("hover"), d.push(t.getLabelConfig())
                            }), u = {
                                x: h[0].category,
                                y: h[0].y
                            }, u.points = d, h = h[0]), this.len = d.length, u = r.call(u, this), p = h.series, this.distance = l(p.tooltipOptions.distance, 16), !1 === u ? this.hide() : (r = this.getLabel(), this.isHidden && r.attr({
                                opacity: 1
                            }).show(), this.split ? this.renderSplit(u, c(e)) : (s.style.width || r.css({
                                width: this.chart.spacingBox.width
                            }), r.attr({
                                text: u && u.join ? u.join("") : u
                            }), r.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + l(h.colorIndex, p.colorIndex)), r.attr({
                                stroke: s.borderColor || h.color || p.color || "#666666"
                            }), this.updatePosition({
                                plotX: n,
                                plotY: o,
                                negative: h.negative,
                                ttBelow: h.ttBelow,
                                h: a[2] || 0
                            })), this.isHidden = !1))
                        },
                        renderSplit: function(e, n) {
                            var r, o = this,
                                a = [],
                                s = this.chart,
                                c = s.renderer,
                                h = !0,
                                u = this.options,
                                d = 0,
                                p = this.getLabel(),
                                f = s.plotTop;
                            t.isString(e) && (e = [!1, e]), i(e.slice(0, n.length + 1), function(t, e) {
                                if (!1 !== t) {
                                    e = n[e - 1] || {
                                        isHeader: !0,
                                        plotX: n[0].plotX
                                    };
                                    var i = e.series || o,
                                        g = i.tt,
                                        m = e.series || {},
                                        v = "highcharts-color-" + l(e.colorIndex, m.colorIndex, "none");
                                    g || (i.tt = g = c.label(null, null, null, "callout", null, null, u.useHTML).addClass("highcharts-tooltip-box " + v + (e.isHeader ? " highcharts-tooltip-header" : "")).attr({
                                        padding: u.padding,
                                        r: u.borderRadius,
                                        fill: u.backgroundColor,
                                        stroke: u.borderColor || e.color || m.color || "#333333",
                                        "stroke-width": u.borderWidth
                                    }).add(p)), g.isActive = !0, g.attr({
                                        text: t
                                    }), g.css(u.style).shadow(u.shadow), t = g.getBBox(), m = t.width + g.strokeWidth(), e.isHeader ? (d = t.height, s.xAxis[0].opposite && (r = !0, f -= d), m = Math.max(0, Math.min(e.plotX + s.plotLeft - m / 2, s.chartWidth + (s.scrollablePixels ? s.scrollablePixels - s.marginRight : 0) - m))) : m = e.plotX + s.plotLeft - l(u.distance, 16) - m, 0 > m && (h = !1), t = (e.series && e.series.yAxis && e.series.yAxis.pos) + (e.plotY || 0), t -= f, e.isHeader && (t = r ? -d : s.plotHeight + d), a.push({
                                        target: t,
                                        rank: e.isHeader ? 1 : 0,
                                        size: i.tt.getBBox().height + 1,
                                        point: e,
                                        x: m,
                                        tt: g
                                    })
                                }
                            }), this.cleanSplit(), t.distribute(a, s.plotHeight + d), i(a, function(t) {
                                var e = t.point,
                                    i = e.series;
                                t.tt.attr({
                                    visibility: void 0 === t.pos ? "hidden" : "inherit",
                                    x: h || e.isHeader ? t.x : e.plotX + s.plotLeft + l(u.distance, 16),
                                    y: t.pos + f,
                                    anchorX: e.isHeader ? e.plotX + s.plotLeft : e.plotX + i.xAxis.pos,
                                    anchorY: e.isHeader ? s.plotTop + s.plotHeight / 2 : e.plotY + i.yAxis.pos
                                })
                            })
                        },
                        updatePosition: function(t) {
                            var e, i = this.chart,
                                n = this.getLabel(),
                                r = (this.options.positioner || this.getPosition).call(this, n.width, n.height, t),
                                o = t.plotX + i.plotLeft;
                            t = t.plotY + i.plotTop, this.outside && (e = (this.options.borderWidth || 0) + 2 * this.distance, this.renderer.setSize(n.width + e, n.height + e, !1), o += i.pointer.chartPosition.left - r.x, t += i.pointer.chartPosition.top - r.y), this.move(Math.round(r.x), Math.round(r.y || 0), o, t)
                        },
                        getDateFormat: function(t, e, i, n) {
                            var r, o, a = this.chart.time,
                                s = a.dateFormat("%m-%d %H:%M:%S.%L", e),
                                l = {
                                    millisecond: 15,
                                    second: 12,
                                    minute: 9,
                                    hour: 6,
                                    day: 3
                                },
                                c = "millisecond";
                            for (o in u) {
                                if (t === u.week && +a.dateFormat("%w", e) === i && "00:00:00.000" === s.substr(6)) {
                                    o = "week";
                                    break
                                }
                                if (u[o] > t) {
                                    o = c;
                                    break
                                }
                                if (l[o] && s.substr(l[o]) !== "01-01 00:00:00.000".substr(l[o])) break;
                                "week" !== o && (c = o)
                            }
                            return o && (r = a.resolveDTLFormat(n[o]).main), r
                        },
                        getXDateFormat: function(t, e, i) {
                            e = e.dateTimeLabelFormats;
                            var n = i && i.closestPointRange;
                            return (n ? this.getDateFormat(n, t.x, i.options.startOfWeek, e) : e.day) || e.year
                        },
                        tooltipFooterHeaderFormatter: function(t, e) {
                            e = e ? "footer" : "header";
                            var n = t.series,
                                a = n.tooltipOptions,
                                s = a.xDateFormat,
                                l = n.xAxis,
                                c = l && "datetime" === l.options.type && o(t.key),
                                h = a[e + "Format"];
                            return c && !s && (s = this.getXDateFormat(t, a, l)), c && s && i(t.point && t.point.tooltipDateKeys || ["key"], function(t) {
                                h = h.replace("{point." + t + "}", "{point." + t + ":" + s + "}")
                            }), r(h, {
                                point: t,
                                series: n
                            }, this.chart.time)
                        },
                        bodyFormatter: function(t) {
                            return a(t, function(t) {
                                var e = t.series.tooltipOptions;
                                return (e[(t.point.formatPrefix || "point") + "Formatter"] || t.point.tooltipFormatter).call(t.point, e[(t.point.formatPrefix || "point") + "Format"])
                            })
                        }
                    }
                }(e),
                function(t) {
                    var e = t.addEvent,
                        i = t.attr,
                        n = t.charts,
                        r = t.color,
                        o = t.css,
                        a = t.defined,
                        s = t.each,
                        l = t.extend,
                        c = t.find,
                        h = t.fireEvent,
                        u = t.isNumber,
                        d = t.isObject,
                        p = t.offset,
                        f = t.pick,
                        g = t.splat,
                        m = t.Tooltip;
                    t.Pointer = function(t, e) {
                        this.init(t, e)
                    }, t.Pointer.prototype = {
                        init: function(t, e) {
                            this.options = e, this.chart = t, this.runChartClick = e.chart.events && !!e.chart.events.click, this.pinchDown = [], this.lastValidTouch = {}, m && (t.tooltip = new m(t, e.tooltip), this.followTouchMove = f(e.tooltip.followTouchMove, !0)), this.setDOMEvents()
                        },
                        zoomOption: function(t) {
                            var e = this.chart,
                                i = e.options.chart,
                                n = i.zoomType || "";
                            e = e.inverted;
                            /touch/.test(t.type) && (n = f(i.pinchType, n)), this.zoomX = t = /x/.test(n), this.zoomY = n = /y/.test(n), this.zoomHor = t && !e || n && e, this.zoomVert = n && !e || t && e, this.hasZoom = t || n
                        },
                        normalize: function(t, e) {
                            var i;
                            return i = t.touches ? t.touches.length ? t.touches.item(0) : t.changedTouches[0] : t, e || (this.chartPosition = e = p(this.chart.container)), l(t, {
                                chartX: Math.round(i.pageX - e.left),
                                chartY: Math.round(i.pageY - e.top)
                            })
                        },
                        getCoordinates: function(t) {
                            var e = {
                                xAxis: [],
                                yAxis: []
                            };
                            return s(this.chart.axes, function(i) {
                                e[i.isXAxis ? "xAxis" : "yAxis"].push({
                                    axis: i,
                                    value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                                })
                            }), e
                        },
                        findNearestKDPoint: function(t, e, i) {
                            var n;
                            return s(t, function(t) {
                                var r = !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf("y");
                                if (t = t.searchPoint(i, r), (r = d(t, !0)) && !(r = !d(n, !0))) {
                                    r = n.distX - t.distX;
                                    var o = n.dist - t.dist,
                                        a = (t.series.group && t.series.group.zIndex) - (n.series.group && n.series.group.zIndex);
                                    r = 0 < (0 !== r && e ? r : 0 !== o ? o : 0 !== a ? a : n.series.index > t.series.index ? -1 : 1)
                                }
                                r && (n = t)
                            }), n
                        },
                        getPointFromEvent: function(t) {
                            t = t.target;
                            for (var e; t && !e;) e = t.point, t = t.parentNode;
                            return e
                        },
                        getChartCoordinatesFromPoint: function(t, e) {
                            var i = t.series,
                                n = i.xAxis,
                                r = (i = i.yAxis, f(t.clientX, t.plotX)),
                                o = t.shapeArgs;
                            return n && i ? e ? {
                                chartX: n.len + n.pos - r,
                                chartY: i.len + i.pos - t.plotY
                            } : {
                                chartX: r + n.pos,
                                chartY: t.plotY + i.pos
                            } : o && o.x && o.y ? {
                                chartX: o.x,
                                chartY: o.y
                            } : void 0
                        },
                        getHoverData: function(e, i, n, r, o, a, l) {
                            var h, u = [],
                                p = l && l.isBoosting;
                            return r = !(!r || !e), l = i && !i.stickyTracking ? [i] : t.grep(n, function(t) {
                                return t.visible && !(!o && t.directTouch) && f(t.options.enableMouseTracking, !0) && t.stickyTracking
                            }), i = (h = r ? e : this.findNearestKDPoint(l, o, a)) && h.series, h && (o && !i.noSharedTooltip ? (l = t.grep(n, function(t) {
                                return t.visible && !(!o && t.directTouch) && f(t.options.enableMouseTracking, !0) && !t.noSharedTooltip
                            }), s(l, function(t) {
                                var e = c(t.points, function(t) {
                                    return t.x === h.x && !t.isNull
                                });
                                d(e) && (p && (e = t.getPoint(e)), u.push(e))
                            })) : u.push(h)), {
                                hoverPoint: h,
                                hoverSeries: i,
                                hoverPoints: u
                            }
                        },
                        runPointActions: function(i, r) {
                            var o, a = this.chart,
                                l = a.tooltip && a.tooltip.options.enabled ? a.tooltip : void 0,
                                c = !!l && l.shared,
                                h = r || a.hoverPoint,
                                u = h && h.series || a.hoverSeries;
                            u = this.getHoverData(h, u, a.series, "touchmove" !== i.type && (!!r || u && u.directTouch && this.isDirectTouch), c, i, {
                                isBoosting: a.isBoosting
                            }), h = u.hoverPoint;
                            if (o = u.hoverPoints, r = (u = u.hoverSeries) && u.tooltipOptions.followPointer, c = c && u && !u.noSharedTooltip, h && (h !== a.hoverPoint || l && l.isHidden)) {
                                if (s(a.hoverPoints || [], function(e) {
                                        -1 === t.inArray(e, o) && e.setState()
                                    }), s(o || [], function(t) {
                                        t.setState("hover")
                                    }), a.hoverSeries !== u && u.onMouseOver(), a.hoverPoint && a.hoverPoint.firePointEvent("mouseOut"), !h.series) return;
                                h.firePointEvent("mouseOver"), a.hoverPoints = o, a.hoverPoint = h, l && l.refresh(c ? o : h, i)
                            } else r && l && !l.isHidden && (h = l.getAnchor([{}], i), l.updatePosition({
                                plotX: h[0],
                                plotY: h[1]
                            }));
                            this.unDocMouseMove || (this.unDocMouseMove = e(a.container.ownerDocument, "mousemove", function(e) {
                                var i = n[t.hoverChartIndex];
                                i && i.pointer.onDocumentMouseMove(e)
                            })), s(a.axes, function(e) {
                                var n = f(e.crosshair.snap, !0),
                                    r = n ? t.find(o, function(t) {
                                        return t.series[e.coll] === e
                                    }) : void 0;
                                r || !n ? e.drawCrosshair(i, r) : e.hideCrosshair()
                            })
                        },
                        reset: function(t, e) {
                            var i = this.chart,
                                n = i.hoverSeries,
                                r = i.hoverPoint,
                                o = i.hoverPoints,
                                a = i.tooltip,
                                l = a && a.shared ? o : r;
                            t && l && s(g(l), function(e) {
                                e.series.isCartesian && void 0 === e.plotX && (t = !1)
                            }), t ? a && l && (a.refresh(l), a.shared && o ? s(o, function(t) {
                                t.setState(t.state, !0), t.series.isCartesian && (t.series.xAxis.crosshair && t.series.xAxis.drawCrosshair(null, t), t.series.yAxis.crosshair && t.series.yAxis.drawCrosshair(null, t))
                            }) : r && (r.setState(r.state, !0), s(i.axes, function(t) {
                                t.crosshair && t.drawCrosshair(null, r)
                            }))) : (r && r.onMouseOut(), o && s(o, function(t) {
                                t.setState()
                            }), n && n.onMouseOut(), a && a.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), s(i.axes, function(t) {
                                t.hideCrosshair()
                            }), this.hoverX = i.hoverPoints = i.hoverPoint = null)
                        },
                        scaleGroups: function(t, e) {
                            var i, n = this.chart;
                            s(n.series, function(r) {
                                i = t || r.getPlotBox(), r.xAxis && r.xAxis.zoomEnabled && r.group && (r.group.attr(i), r.markerGroup && (r.markerGroup.attr(i), r.markerGroup.clip(e ? n.clipRect : null)), r.dataLabelsGroup && r.dataLabelsGroup.attr(i))
                            }), n.clipRect.attr(e || n.clipBox)
                        },
                        dragStart: function(t) {
                            var e = this.chart;
                            e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
                        },
                        drag: function(t) {
                            var e, i = this.chart,
                                n = i.options.chart,
                                o = t.chartX,
                                a = t.chartY,
                                s = this.zoomHor,
                                l = this.zoomVert,
                                c = i.plotLeft,
                                h = i.plotTop,
                                u = i.plotWidth,
                                d = i.plotHeight,
                                p = this.selectionMarker,
                                f = this.mouseDownX,
                                g = this.mouseDownY,
                                m = n.panKey && t[n.panKey + "Key"];
                            p && p.touch || (o < c ? o = c : o > c + u && (o = c + u), a < h ? a = h : a > h + d && (a = h + d), this.hasDragged = Math.sqrt(Math.pow(f - o, 2) + Math.pow(g - a, 2)), 10 < this.hasDragged && (e = i.isInsidePlot(f - c, g - h), i.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !m && !p && (this.selectionMarker = p = i.renderer.rect(c, h, s ? 1 : u, l ? 1 : d, 0).attr({
                                fill: n.selectionMarkerFill || r("#335cad").setOpacity(.25).get(),
                                class: "highcharts-selection-marker",
                                zIndex: 7
                            }).add()), p && s && (o -= f, p.attr({
                                width: Math.abs(o),
                                x: (0 < o ? 0 : o) + f
                            })), p && l && (o = a - g, p.attr({
                                height: Math.abs(o),
                                y: (0 < o ? 0 : o) + g
                            })), e && !p && n.panning && i.pan(t, n.panning)))
                        },
                        drop: function(t) {
                            var e = this,
                                i = this.chart,
                                n = this.hasPinched;
                            if (this.selectionMarker) {
                                var r, c = {
                                        originalEvent: t,
                                        xAxis: [],
                                        yAxis: []
                                    },
                                    d = this.selectionMarker,
                                    p = d.attr ? d.attr("x") : d.x,
                                    f = d.attr ? d.attr("y") : d.y,
                                    g = d.attr ? d.attr("width") : d.width,
                                    m = d.attr ? d.attr("height") : d.height;
                                (this.hasDragged || n) && (s(i.axes, function(i) {
                                    if (i.zoomEnabled && a(i.min) && (n || e[{
                                            xAxis: "zoomX",
                                            yAxis: "zoomY"
                                        } [i.coll]])) {
                                        var o = i.horiz,
                                            s = "touchend" === t.type ? i.minPixelPadding : 0,
                                            l = i.toValue((o ? p : f) + s);
                                        o = i.toValue((o ? p + g : f + m) - s);
                                        c[i.coll].push({
                                            axis: i,
                                            min: Math.min(l, o),
                                            max: Math.max(l, o)
                                        }), r = !0
                                    }
                                }), r && h(i, "selection", c, function(t) {
                                    i.zoom(l(t, n ? {
                                        animation: !1
                                    } : null))
                                })), u(i.index) && (this.selectionMarker = this.selectionMarker.destroy()), n && this.scaleGroups()
                            }
                            i && u(i.index) && (o(i.container, {
                                cursor: i._cursor
                            }), i.cancelClick = 10 < this.hasDragged, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
                        },
                        onContainerMouseDown: function(t) {
                            t = this.normalize(t), 2 !== t.button && (this.zoomOption(t), t.preventDefault && t.preventDefault(), this.dragStart(t))
                        },
                        onDocumentMouseUp: function(e) {
                            n[t.hoverChartIndex] && n[t.hoverChartIndex].pointer.drop(e)
                        },
                        onDocumentMouseMove: function(t) {
                            var e = this.chart,
                                i = this.chartPosition;
                            t = this.normalize(t, i), !i || this.inClass(t.target, "highcharts-tracker") || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || this.reset()
                        },
                        onContainerMouseLeave: function(e) {
                            var i = n[t.hoverChartIndex];
                            i && (e.relatedTarget || e.toElement) && (i.pointer.reset(), i.pointer.chartPosition = null)
                        },
                        onContainerMouseMove: function(e) {
                            var i = this.chart;
                            a(t.hoverChartIndex) && n[t.hoverChartIndex] && n[t.hoverChartIndex].mouseIsDown || (t.hoverChartIndex = i.index), e = this.normalize(e), e.returnValue = !1, "mousedown" === i.mouseIsDown && this.drag(e), !this.inClass(e.target, "highcharts-tracker") && !i.isInsidePlot(e.chartX - i.plotLeft, e.chartY - i.plotTop) || i.openMenu || this.runPointActions(e)
                        },
                        inClass: function(t, e) {
                            for (var n; t;) {
                                if (n = i(t, "class")) {
                                    if (-1 !== n.indexOf(e)) return !0;
                                    if (-1 !== n.indexOf("highcharts-container")) return !1
                                }
                                t = t.parentNode
                            }
                        },
                        onTrackerMouseOut: function(t) {
                            var e = this.chart.hoverSeries;
                            t = t.relatedTarget || t.toElement, this.isDirectTouch = !1, !e || !t || e.stickyTracking || this.inClass(t, "highcharts-tooltip") || this.inClass(t, "highcharts-series-" + e.index) && this.inClass(t, "highcharts-tracker") || e.onMouseOut()
                        },
                        onContainerClick: function(t) {
                            var e = this.chart,
                                i = e.hoverPoint,
                                n = e.plotLeft,
                                r = e.plotTop;
                            t = this.normalize(t), e.cancelClick || (i && this.inClass(t.target, "highcharts-tracker") ? (h(i.series, "click", l(t, {
                                point: i
                            })), e.hoverPoint && i.firePointEvent("click", t)) : (l(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - n, t.chartY - r) && h(e, "click", t)))
                        },
                        setDOMEvents: function() {
                            var i = this,
                                n = i.chart.container,
                                r = n.ownerDocument;
                            n.onmousedown = function(t) {
                                i.onContainerMouseDown(t)
                            }, n.onmousemove = function(t) {
                                i.onContainerMouseMove(t)
                            }, n.onclick = function(t) {
                                i.onContainerClick(t)
                            }, this.unbindContainerMouseLeave = e(n, "mouseleave", i.onContainerMouseLeave), t.unbindDocumentMouseUp || (t.unbindDocumentMouseUp = e(r, "mouseup", i.onDocumentMouseUp)), t.hasTouch && (n.ontouchstart = function(t) {
                                i.onContainerTouchStart(t)
                            }, n.ontouchmove = function(t) {
                                i.onContainerTouchMove(t)
                            }, t.unbindDocumentTouchEnd || (t.unbindDocumentTouchEnd = e(r, "touchend", i.onDocumentTouchEnd)))
                        },
                        destroy: function() {
                            var e = this;
                            e.unDocMouseMove && e.unDocMouseMove(), this.unbindContainerMouseLeave(), t.chartCount || (t.unbindDocumentMouseUp && (t.unbindDocumentMouseUp = t.unbindDocumentMouseUp()), t.unbindDocumentTouchEnd && (t.unbindDocumentTouchEnd = t.unbindDocumentTouchEnd())), clearInterval(e.tooltipTimeout), t.objectEach(e, function(t, i) {
                                e[i] = null
                            })
                        }
                    }
                }(e),
                function(t) {
                    var e = t.charts,
                        i = t.each,
                        n = t.extend,
                        r = t.map,
                        o = t.noop,
                        a = t.pick;
                    n(t.Pointer.prototype, {
                        pinchTranslate: function(t, e, i, n, r, o) {
                            this.zoomHor && this.pinchTranslateDirection(!0, t, e, i, n, r, o), this.zoomVert && this.pinchTranslateDirection(!1, t, e, i, n, r, o)
                        },
                        pinchTranslateDirection: function(t, e, i, n, r, o, a, s) {
                            var l, c, h, u = this.chart,
                                d = t ? "x" : "y",
                                p = t ? "X" : "Y",
                                f = "chart" + p,
                                g = t ? "width" : "height",
                                m = u["plot" + (t ? "Left" : "Top")],
                                v = s || 1,
                                y = u.inverted,
                                x = u.bounds[t ? "h" : "v"],
                                b = 1 === e.length,
                                w = e[0][f],
                                _ = i[0][f],
                                k = !b && e[1][f],
                                S = !b && i[1][f];
                            i = function() {
                                !b && 20 < Math.abs(w - k) && (v = s || Math.abs(_ - S) / Math.abs(w - k)), c = (m - _) / v + w, l = u["plot" + (t ? "Width" : "Height")] / v
                            }, i(), e = c, e < x.min ? (e = x.min, h = !0) : e + l > x.max && (e = x.max - l, h = !0), h ? (_ -= .8 * (_ - a[d][0]), b || (S -= .8 * (S - a[d][1])), i()) : a[d] = [_, S], y || (o[d] = c - m, o[g] = l), o = y ? 1 / v : v, r[g] = l, r[d] = e, n[y ? t ? "scaleY" : "scaleX" : "scale" + p] = v, n["translate" + p] = o * m + (_ - o * w)
                        },
                        pinch: function(t) {
                            var e = this,
                                s = e.chart,
                                l = e.pinchDown,
                                c = t.touches,
                                h = c.length,
                                u = e.lastValidTouch,
                                d = e.hasZoom,
                                p = e.selectionMarker,
                                f = {},
                                g = 1 === h && (e.inClass(t.target, "highcharts-tracker") && s.runTrackerClick || e.runChartClick),
                                m = {};
                            1 < h && (e.initiated = !0), d && e.initiated && !g && t.preventDefault(), r(c, function(t) {
                                return e.normalize(t)
                            }), "touchstart" === t.type ? (i(c, function(t, e) {
                                l[e] = {
                                    chartX: t.chartX,
                                    chartY: t.chartY
                                }
                            }), u.x = [l[0].chartX, l[1] && l[1].chartX], u.y = [l[0].chartY, l[1] && l[1].chartY], i(s.axes, function(t) {
                                if (t.zoomEnabled) {
                                    var e = s.bounds[t.horiz ? "h" : "v"],
                                        i = t.minPixelPadding,
                                        n = t.toPixels(a(t.options.min, t.dataMin)),
                                        r = t.toPixels(a(t.options.max, t.dataMax)),
                                        o = Math.max(n, r);
                                    e.min = Math.min(t.pos, Math.min(n, r) - i), e.max = Math.max(t.pos + t.len, o + i)
                                }
                            }), e.res = !0) : e.followTouchMove && 1 === h ? this.runPointActions(e.normalize(t)) : l.length && (p || (e.selectionMarker = p = n({
                                destroy: o,
                                touch: !0
                            }, s.plotBox)), e.pinchTranslate(l, c, f, p, m, u), e.hasPinched = d, e.scaleGroups(f, m), e.res && (e.res = !1, this.reset(!1, 0)))
                        },
                        touch: function(e, i) {
                            var n, r = this.chart;
                            r.index !== t.hoverChartIndex && this.onContainerMouseLeave({
                                relatedTarget: !0
                            }), t.hoverChartIndex = r.index, 1 === e.touches.length ? (e = this.normalize(e), r.isInsidePlot(e.chartX - r.plotLeft, e.chartY - r.plotTop) && !r.openMenu ? (i && this.runPointActions(e), "touchmove" === e.type && (i = this.pinchDown, n = !!i[0] && 4 <= Math.sqrt(Math.pow(i[0].chartX - e.chartX, 2) + Math.pow(i[0].chartY - e.chartY, 2))), a(n, !0) && this.pinch(e)) : i && this.reset()) : 2 === e.touches.length && this.pinch(e)
                        },
                        onContainerTouchStart: function(t) {
                            this.zoomOption(t), this.touch(t, !0)
                        },
                        onContainerTouchMove: function(t) {
                            this.touch(t)
                        },
                        onDocumentTouchEnd: function(i) {
                            e[t.hoverChartIndex] && e[t.hoverChartIndex].pointer.drop(i)
                        }
                    })
                }(e),
                function(t) {
                    var e = t.addEvent,
                        i = t.charts,
                        n = t.css,
                        r = t.doc,
                        o = t.extend,
                        a = t.noop,
                        s = t.Pointer,
                        l = t.removeEvent,
                        c = t.win,
                        h = t.wrap;
                    if (!t.hasTouch && (c.PointerEvent || c.MSPointerEvent)) {
                        var u = {},
                            d = !!c.PointerEvent,
                            p = function() {
                                var e = [];
                                return e.item = function(t) {
                                    return this[t]
                                }, t.objectEach(u, function(t) {
                                    e.push({
                                        pageX: t.pageX,
                                        pageY: t.pageY,
                                        target: t.target
                                    })
                                }), e
                            },
                            f = function(e, n, r, o) {
                                "touch" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_TOUCH || !i[t.hoverChartIndex] || (o(e), o = i[t.hoverChartIndex].pointer, o[n]({
                                    type: r,
                                    target: e.currentTarget,
                                    preventDefault: a,
                                    touches: p()
                                }))
                            };
                        o(s.prototype, {
                            onContainerPointerDown: function(t) {
                                f(t, "onContainerTouchStart", "touchstart", function(t) {
                                    u[t.pointerId] = {
                                        pageX: t.pageX,
                                        pageY: t.pageY,
                                        target: t.currentTarget
                                    }
                                })
                            },
                            onContainerPointerMove: function(t) {
                                f(t, "onContainerTouchMove", "touchmove", function(t) {
                                    u[t.pointerId] = {
                                        pageX: t.pageX,
                                        pageY: t.pageY
                                    }, u[t.pointerId].target || (u[t.pointerId].target = t.currentTarget)
                                })
                            },
                            onDocumentPointerUp: function(t) {
                                f(t, "onDocumentTouchEnd", "touchend", function(t) {
                                    delete u[t.pointerId]
                                })
                            },
                            batchMSEvents: function(t) {
                                t(this.chart.container, d ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown), t(this.chart.container, d ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), t(r, d ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                            }
                        }), h(s.prototype, "init", function(t, e, i) {
                            t.call(this, e, i), this.hasZoom && n(e.container, {
                                "-ms-touch-action": "none",
                                "touch-action": "none"
                            })
                        }), h(s.prototype, "setDOMEvents", function(t) {
                            t.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(e)
                        }), h(s.prototype, "destroy", function(t) {
                            this.batchMSEvents(l), t.call(this)
                        })
                    }
                }(e),
                function(t) {
                    var e = t.addEvent,
                        i = t.css,
                        n = t.discardElement,
                        r = t.defined,
                        o = t.each,
                        a = t.fireEvent,
                        s = t.isFirefox,
                        l = t.marginNames,
                        c = t.merge,
                        h = t.pick,
                        u = t.setAnimation,
                        d = t.stableSort,
                        p = t.win,
                        f = t.wrap;
                    t.Legend = function(t, e) {
                        this.init(t, e)
                    }, t.Legend.prototype = {
                        init: function(t, i) {
                            this.chart = t, this.setOptions(i), i.enabled && (this.render(), e(this.chart, "endResize", function() {
                                this.legend.positionCheckboxes()
                            }), this.proximate ? this.unchartrender = e(this.chart, "render", function() {
                                this.legend.proximatePositions(), this.legend.positionItems()
                            }) : this.unchartrender && this.unchartrender())
                        },
                        setOptions: function(t) {
                            var e = h(t.padding, 8);
                            this.options = t, this.itemStyle = t.itemStyle, this.itemHiddenStyle = c(this.itemStyle, t.itemHiddenStyle), this.itemMarginTop = t.itemMarginTop || 0, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = h(t.symbolWidth, 16), this.pages = [], this.proximate = "proximate" === t.layout && !this.chart.inverted
                        },
                        update: function(t, e) {
                            var i = this.chart;
                            this.setOptions(c(!0, this.options, t)), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, h(e, !0) && i.redraw(), a(this, "afterUpdate")
                        },
                        colorizeItem: function(t, e) {
                            t.legendGroup[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
                            var i = this.options,
                                n = t.legendItem,
                                r = t.legendLine,
                                o = t.legendSymbol,
                                s = this.itemHiddenStyle.color,
                                l = (i = e ? i.itemStyle.color : s, e && t.color || s),
                                c = t.options && t.options.marker,
                                h = {
                                    fill: l
                                };
                            n && n.css({
                                fill: i,
                                color: i
                            }), r && r.attr({
                                stroke: l
                            }), o && (c && o.isMarker && (h = t.pointAttribs(), e || (h.stroke = h.fill = s)), o.attr(h)), a(this, "afterColorizeItem", {
                                item: t,
                                visible: e
                            })
                        },
                        positionItems: function() {
                            o(this.allItems, this.positionItem, this), this.chart.isResizing || this.positionCheckboxes()
                        },
                        positionItem: function(t) {
                            var e = this.options,
                                i = e.symbolPadding,
                                n = (e = !e.rtl, t._legendItemPos),
                                o = n[0],
                                a = (n = n[1], t.checkbox);
                            (t = t.legendGroup) && t.element && t[r(t.translateY) ? "animate" : "attr"]({
                                translateX: e ? o : this.legendWidth - o - 2 * i - 4,
                                translateY: n
                            }), a && (a.x = o, a.y = n)
                        },
                        destroyItem: function(t) {
                            var e = t.checkbox;
                            o(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(e) {
                                t[e] && (t[e] = t[e].destroy())
                            }), e && n(t.checkbox)
                        },
                        destroy: function() {
                            function t(t) {
                                this[t] && (this[t] = this[t].destroy())
                            }
                            o(this.getAllItems(), function(e) {
                                o(["legendItem", "legendGroup"], t, e)
                            }), o("clipRect up down pager nav box title group".split(" "), t, this), this.display = null
                        },
                        positionCheckboxes: function() {
                            var t, e = this.group && this.group.alignAttr,
                                n = this.clipHeight || this.legendHeight,
                                r = this.titleHeight;
                            e && (t = e.translateY, o(this.allItems, function(o) {
                                var a, s = o.checkbox;
                                s && (a = t + r + s.y + (this.scrollOffset || 0) + 3, i(s, {
                                    left: e.translateX + o.checkboxOffset + s.x - 20 + "px",
                                    top: a + "px",
                                    display: this.proximate || a > t - 6 && a < t + n - 6 ? "" : "none"
                                }))
                            }, this))
                        },
                        renderTitle: function() {
                            var t = this.options,
                                e = this.padding,
                                i = t.title,
                                n = 0;
                            i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, null, null, null, t.useHTML, null, "legend-title").attr({
                                zIndex: 1
                            }).css(i.style).add(this.group)), t = this.title.getBBox(), n = t.height, this.offsetWidth = t.width, this.contentGroup.attr({
                                translateY: n
                            })), this.titleHeight = n
                        },
                        setText: function(e) {
                            var i = this.options;
                            e.legendItem.attr({
                                text: i.labelFormat ? t.format(i.labelFormat, e, this.chart.time) : i.labelFormatter.call(e)
                            })
                        },
                        renderItem: function(t) {
                            var e = this.chart,
                                i = e.renderer,
                                n = this.options,
                                r = this.symbolWidth,
                                o = n.symbolPadding,
                                a = this.itemStyle,
                                s = this.itemHiddenStyle,
                                l = "horizontal" === n.layout ? h(n.itemDistance, 20) : 0,
                                u = !n.rtl,
                                d = t.legendItem,
                                p = !t.series,
                                f = !p && t.series.drawLegendSymbol ? t.series : t,
                                g = f.options,
                                m = (g = this.createCheckboxForItem && g && g.showCheckbox, l = r + o + l + (g ? 20 : 0), n.useHTML),
                                v = t.options.className;
                            d || (t.legendGroup = i.g("legend-item").addClass("highcharts-" + f.type + "-series highcharts-color-" + t.colorIndex + (v ? " " + v : "") + (p ? " highcharts-series-" + t.index : "")).attr({
                                zIndex: 1
                            }).add(this.scrollGroup), t.legendItem = d = i.text("", u ? r + o : -o, this.baseline || 0, m).css(c(t.visible ? a : s)).attr({
                                align: u ? "left" : "right",
                                zIndex: 2
                            }).add(t.legendGroup), this.baseline || (r = a.fontSize, this.fontMetrics = i.fontMetrics(r, d), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, d.attr("y", this.baseline)), this.symbolHeight = n.symbolHeight || this.fontMetrics.f, f.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, d, m), g && this.createCheckboxForItem(t)), this.colorizeItem(t, t.visible), a.width || d.css({
                                width: (n.itemWidth || n.width || e.spacingBox.width) - l
                            }), this.setText(t), e = d.getBBox(), t.itemWidth = t.checkboxOffset = n.itemWidth || t.legendItemWidth || e.width + l, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(t.legendItemHeight || e.height || this.symbolHeight)
                        },
                        layoutItem: function(t) {
                            var e = this.options,
                                i = this.padding,
                                n = "horizontal" === e.layout,
                                r = t.itemHeight,
                                o = e.itemMarginBottom || 0,
                                a = this.itemMarginTop,
                                s = n ? h(e.itemDistance, 20) : 0,
                                l = e.width,
                                c = l || this.chart.spacingBox.width - 2 * i - e.x;
                            e = e.alignColumns && this.totalItemWidth > c ? this.maxItemWidth : t.itemWidth;
                            n && this.itemX - i + e > c && (this.itemX = i, this.itemY += a + this.lastLineHeight + o, this.lastLineHeight = 0), this.lastItemY = a + this.itemY + o, this.lastLineHeight = Math.max(r, this.lastLineHeight), t._legendItemPos = [this.itemX, this.itemY], n ? this.itemX += e : (this.itemY += a + r + o, this.lastLineHeight = r), this.offsetWidth = l || Math.max((n ? this.itemX - i - (t.checkbox ? 0 : s) : e) + i, this.offsetWidth)
                        },
                        getAllItems: function() {
                            var t = [];
                            return o(this.chart.series, function(e) {
                                var i = e && e.options;
                                e && h(i.showInLegend, !r(i.linkedTo) && void 0, !0) && (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data : e)))
                            }), a(this, "afterGetAllItems", {
                                allItems: t
                            }), t
                        },
                        getAlignment: function() {
                            var t = this.options;
                            return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0)
                        },
                        adjustMargins: function(t, e) {
                            var i = this.chart,
                                n = this.options,
                                a = this.getAlignment();
                            a && o([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(o, s) {
                                o.test(a) && !r(t[s]) && (i[l[s]] = Math.max(i[l[s]], i.legend[(s + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][s] * n[s % 2 ? "x" : "y"] + h(n.margin, 12) + e[s] + (0 === s && void 0 !== i.options.title.margin ? i.titleOffset + i.options.title.margin : 0)))
                            })
                        },
                        proximatePositions: function() {
                            var e = this.chart,
                                i = [],
                                n = "left" === this.options.align;
                            o(this.allItems, function(r) {
                                var o, a;
                                o = n, r.xAxis && r.points && (r.xAxis.options.reversed && (o = !o), o = t.find(o ? r.points : r.points.slice(0).reverse(), function(e) {
                                    return t.isNumber(e.plotY)
                                }), a = r.legendGroup.getBBox().height, i.push({
                                    target: r.visible ? (o ? o.plotY : r.xAxis.height) - .3 * a : e.plotHeight,
                                    size: a,
                                    item: r
                                }))
                            }, this), t.distribute(i, e.plotHeight), o(i, function(t) {
                                t.item._legendItemPos[1] = e.plotTop - e.spacing[0] + t.pos
                            })
                        },
                        render: function() {
                            var t, e, i, n = this.chart,
                                r = n.renderer,
                                a = this.group,
                                s = this.box,
                                l = this.options,
                                h = this.padding;
                            this.itemX = h, this.itemY = this.initialItemY, this.lastItemY = this.offsetWidth = 0, a || (this.group = a = r.g("legend").attr({
                                zIndex: 7
                            }).add(), this.contentGroup = r.g().attr({
                                zIndex: 1
                            }).add(a), this.scrollGroup = r.g().add(this.contentGroup)), this.renderTitle(), t = this.getAllItems(), d(t, function(t, e) {
                                return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
                            }), l.reversed && t.reverse(), this.allItems = t, this.display = e = !!t.length, this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0, o(t, this.renderItem, this), o(t, this.layoutItem, this), t = (l.width || this.offsetWidth) + h, i = this.lastItemY + this.lastLineHeight + this.titleHeight, i = this.handleOverflow(i), i += h, s || (this.box = s = r.rect().addClass("highcharts-legend-box").attr({
                                r: l.borderRadius
                            }).add(a), s.isNew = !0), s.attr({
                                stroke: l.borderColor,
                                "stroke-width": l.borderWidth || 0,
                                fill: l.backgroundColor || "none"
                            }).shadow(l.shadow), 0 < t && 0 < i && (s[s.isNew ? "attr" : "animate"](s.crisp.call({}, {
                                x: 0,
                                y: 0,
                                width: t,
                                height: i
                            }, s.strokeWidth())), s.isNew = !1), s[e ? "show" : "hide"](), this.legendWidth = t, this.legendHeight = i, e && (r = n.spacingBox, /(lth|ct|rth)/.test(this.getAlignment()) && (r = c(r, {
                                y: r.y + n.titleOffset + n.options.title.margin
                            })), a.align(c(l, {
                                width: t,
                                height: i,
                                verticalAlign: this.proximate ? "top" : l.verticalAlign
                            }), !0, r)), this.proximate || this.positionItems()
                        },
                        handleOverflow: function(t) {
                            var e, i, n = this,
                                r = this.chart,
                                a = r.renderer,
                                s = this.options,
                                l = s.y,
                                c = this.padding,
                                u = (r = r.spacingBox.height + ("top" === s.verticalAlign ? -l : l) - c, l = s.maxHeight, this.clipRect),
                                d = s.navigation,
                                p = h(d.animation, !0),
                                f = d.arrowSize || 12,
                                g = this.nav,
                                m = this.pages,
                                v = this.allItems,
                                y = function(t) {
                                    "number" === typeof t ? u.attr({
                                        height: t
                                    }) : u && (n.clipRect = u.destroy(), n.contentGroup.clip()), n.contentGroup.div && (n.contentGroup.div.style.clip = t ? "rect(" + c + "px,9999px," + (c + t) + "px,0)" : "auto")
                                };
                            return "horizontal" !== s.layout || "middle" === s.verticalAlign || s.floating || (r /= 2), l && (r = Math.min(r, l)), m.length = 0, t > r && !1 !== d.enabled ? (this.clipHeight = e = Math.max(r - 20 - this.titleHeight - c, 0), this.currentPage = h(this.currentPage, 1), this.fullHeight = t, o(v, function(t, n) {
                                var r = t._legendItemPos[1],
                                    o = Math.round(t.legendItem.getBBox().height),
                                    a = m.length;
                                (!a || r - m[a - 1] > e && (i || r) !== m[a - 1]) && (m.push(i || r), a++), t.pageIx = a - 1, i && (v[n - 1].pageIx = a - 1), n === v.length - 1 && r + o - m[a - 1] > e && (m.push(r), t.pageIx = a), r !== i && (i = r)
                            }), u || (u = n.clipRect = a.clipRect(0, c, 9999, 0), n.contentGroup.clip(u)), y(e), g || (this.nav = g = a.g().attr({
                                zIndex: 1
                            }).add(this.group), this.up = a.symbol("triangle", 0, 0, f, f).on("click", function() {
                                n.scroll(-1, p)
                            }).add(g), this.pager = a.text("", 15, 10).addClass("highcharts-legend-navigation").css(d.style).add(g), this.down = a.symbol("triangle-down", 0, 0, f, f).on("click", function() {
                                n.scroll(1, p)
                            }).add(g)), n.scroll(0), t = r) : g && (y(), this.nav = g.destroy(), this.scrollGroup.attr({
                                translateY: 1
                            }), this.clipHeight = 0), t
                        },
                        scroll: function(t, e) {
                            var i = this.pages,
                                n = i.length;
                            t = this.currentPage + t;
                            var r = this.clipHeight,
                                o = this.options.navigation,
                                a = this.pager,
                                s = this.padding;
                            t > n && (t = n), 0 < t && (void 0 !== e && u(e, this.chart), this.nav.attr({
                                translateX: s,
                                translateY: r + this.padding + 7 + this.titleHeight,
                                visibility: "visible"
                            }), this.up.attr({
                                class: 1 === t ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                            }), a.attr({
                                text: t + "/" + n
                            }), this.down.attr({
                                x: 18 + this.pager.getBBox().width,
                                class: t === n ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                            }), this.up.attr({
                                fill: 1 === t ? o.inactiveColor : o.activeColor
                            }).css({
                                cursor: 1 === t ? "default" : "pointer"
                            }), this.down.attr({
                                fill: t === n ? o.inactiveColor : o.activeColor
                            }).css({
                                cursor: t === n ? "default" : "pointer"
                            }), this.scrollOffset = -i[t - 1] + this.initialItemY, this.scrollGroup.animate({
                                translateY: this.scrollOffset
                            }), this.currentPage = t, this.positionCheckboxes())
                        }
                    }, t.LegendSymbolMixin = {
                        drawRectangle: function(t, e) {
                            var i = t.symbolHeight,
                                n = t.options.squareSymbol;
                            e.legendSymbol = this.chart.renderer.rect(n ? (t.symbolWidth - i) / 2 : 0, t.baseline - i + 1, n ? i : t.symbolWidth, i, h(t.options.symbolRadius, i / 2)).addClass("highcharts-point").attr({
                                zIndex: 3
                            }).add(e.legendGroup)
                        },
                        drawLineMarker: function(t) {
                            var e, i = this.options,
                                n = i.marker,
                                r = t.symbolWidth,
                                o = t.symbolHeight,
                                a = o / 2,
                                s = this.chart.renderer,
                                l = this.legendGroup;
                            t = t.baseline - Math.round(.3 * t.fontMetrics.b), e = {
                                "stroke-width": i.lineWidth || 0
                            }, i.dashStyle && (e.dashstyle = i.dashStyle), this.legendLine = s.path(["M", 0, t, "L", r, t]).addClass("highcharts-graph").attr(e).add(l), n && !1 !== n.enabled && r && (i = Math.min(h(n.radius, a), a), 0 === this.symbol.indexOf("url") && (n = c(n, {
                                width: o,
                                height: o
                            }), i = 0), this.legendSymbol = n = s.symbol(this.symbol, r / 2 - i, t - i, 2 * i, 2 * i, n).addClass("highcharts-point").add(l), n.isMarker = !0)
                        }
                    }, (/Trident\/7\.0/.test(p.navigator.userAgent) || s) && f(t.Legend.prototype, "positionItem", function(t, e) {
                        var i = this,
                            n = function() {
                                e._legendItemPos && t.call(i, e)
                            };
                        n(), setTimeout(n)
                    })
                }(e),
                function(t) {
                    var e = t.addEvent,
                        i = t.animate,
                        n = t.animObject,
                        r = t.attr,
                        o = t.doc,
                        a = t.Axis,
                        s = t.createElement,
                        l = t.defaultOptions,
                        c = t.discardElement,
                        h = t.charts,
                        u = t.css,
                        d = t.defined,
                        p = t.each,
                        f = t.extend,
                        g = t.find,
                        m = t.fireEvent,
                        v = t.grep,
                        y = t.isNumber,
                        x = t.isObject,
                        b = t.isString,
                        w = t.Legend,
                        _ = t.marginNames,
                        k = t.merge,
                        S = t.objectEach,
                        M = t.Pointer,
                        A = t.pick,
                        C = t.pInt,
                        T = t.removeEvent,
                        P = t.seriesTypes,
                        O = t.splat,
                        L = t.syncTimeout,
                        E = t.win,
                        D = t.Chart = function() {
                            this.getArgs.apply(this, arguments)
                        };
                    t.chart = function(t, e, i) {
                        return new D(t, e, i)
                    }, f(D.prototype, {
                        callbacks: [],
                        getArgs: function() {
                            var t = [].slice.call(arguments);
                            (b(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()), this.init(t[0], t[1])
                        },
                        init: function(i, n) {
                            var r, o, a = i.series,
                                s = i.plotOptions || {};
                            m(this, "init", {
                                args: arguments
                            }, function() {
                                for (o in i.series = null, r = k(l, i), r.plotOptions) r.plotOptions[o].tooltip = s[o] && k(s[o].tooltip) || void 0;
                                r.tooltip.userOptions = i.chart && i.chart.forExport && i.tooltip.userOptions || i.tooltip, r.series = i.series = a, this.userOptions = i;
                                var c = r.chart,
                                    u = c.events;
                                this.margin = [], this.spacing = [], this.bounds = {
                                    h: {},
                                    v: {}
                                }, this.labelCollectors = [], this.callback = n, this.isResizing = 0, this.options = r, this.axes = [], this.series = [], this.time = i.time && t.keys(i.time).length ? new t.Time(i.time) : t.time, this.hasCartesianSeries = c.showAxes;
                                var d = this;
                                d.index = h.length, h.push(d), t.chartCount++, u && S(u, function(t, i) {
                                    e(d, i, t)
                                }), d.xAxis = [], d.yAxis = [], d.pointCount = d.colorCounter = d.symbolCounter = 0, m(d, "afterInit"), d.firstRender()
                            })
                        },
                        initSeries: function(e) {
                            var i = this.options.chart;
                            return (i = P[e.type || i.type || i.defaultSeriesType]) || t.error(17, !0), i = new i, i.init(this, e), i
                        },
                        orderSeries: function(t) {
                            var e = this.series;
                            for (t = t || 0; t < e.length; t++) e[t] && (e[t].index = t, e[t].name = e[t].getName())
                        },
                        isInsidePlot: function(t, e, i) {
                            var n = i ? e : t;
                            return t = i ? t : e, 0 <= n && n <= this.plotWidth && 0 <= t && t <= this.plotHeight
                        },
                        redraw: function(e) {
                            m(this, "beforeRedraw");
                            var i, n, r, o = this.axes,
                                a = this.series,
                                s = this.pointer,
                                l = this.legend,
                                c = this.userOptions.legend,
                                h = this.isDirtyLegend,
                                u = this.hasCartesianSeries,
                                d = this.isDirtyBox,
                                g = this.renderer,
                                v = g.isHidden(),
                                y = [];
                            for (this.setResponsive && this.setResponsive(!1), t.setAnimation(e, this), v && this.temporaryDisplay(), this.layOutTitles(), e = a.length; e--;)
                                if (r = a[e], r.options.stacking && (i = !0, r.isDirty)) {
                                    n = !0;
                                    break
                                } if (n)
                                for (e = a.length; e--;) r = a[e], r.options.stacking && (r.isDirty = !0);
                            p(a, function(t) {
                                t.isDirty && ("point" === t.options.legendType ? (t.updateTotals && t.updateTotals(), h = !0) : c && (c.labelFormatter || c.labelFormat) && (h = !0)), t.isDirtyData && m(t, "updatedData")
                            }), h && l && l.options.enabled && (l.render(), this.isDirtyLegend = !1), i && this.getStacks(), u && p(o, function(t) {
                                t.updateNames(), t.updateYNames && t.updateYNames(), t.setScale()
                            }), this.getMargins(), u && (p(o, function(t) {
                                t.isDirty && (d = !0)
                            }), p(o, function(t) {
                                var e = t.min + "," + t.max;
                                t.extKey !== e && (t.extKey = e, y.push(function() {
                                    m(t, "afterSetExtremes", f(t.eventArgs, t.getExtremes())), delete t.eventArgs
                                })), (d || i) && t.redraw()
                            })), d && this.drawChartBox(), m(this, "predraw"), p(a, function(t) {
                                (d || t.isDirty) && t.visible && t.redraw(), t.isDirtyData = !1
                            }), s && s.reset(!0), g.draw(), m(this, "redraw"), m(this, "render"), v && this.temporaryDisplay(!0), p(y, function(t) {
                                t.call()
                            })
                        },
                        get: function(t) {
                            function e(e) {
                                return e.id === t || e.options && e.options.id === t
                            }
                            var i, n, r = this.series;
                            for (i = g(this.axes, e) || g(this.series, e), n = 0; !i && n < r.length; n++) i = g(r[n].points || [], e);
                            return i
                        },
                        getAxes: function() {
                            var t = this,
                                e = this.options,
                                i = e.xAxis = O(e.xAxis || {});
                            e = e.yAxis = O(e.yAxis || {});
                            m(this, "getAxes"), p(i, function(t, e) {
                                t.index = e, t.isX = !0
                            }), p(e, function(t, e) {
                                t.index = e
                            }), i = i.concat(e), p(i, function(e) {
                                new a(t, e)
                            }), m(this, "afterGetAxes")
                        },
                        getSelectedPoints: function() {
                            var t = [];
                            return p(this.series, function(e) {
                                t = t.concat(v(e.data || [], function(t) {
                                    return t.selected
                                }))
                            }), t
                        },
                        getSelectedSeries: function() {
                            return v(this.series, function(t) {
                                return t.selected
                            })
                        },
                        setTitle: function(t, e, i) {
                            var n, r = this,
                                o = r.options;
                            n = o.title = k({
                                style: {
                                    color: "#333333",
                                    fontSize: o.isStock ? "16px" : "18px"
                                }
                            }, o.title, t), o = o.subtitle = k({
                                style: {
                                    color: "#ffffff"
                                }
                            }, o.subtitle, e), p([
                                ["title", t, n],
                                ["subtitle", e, o]
                            ], function(t, e) {
                                var i = t[0],
                                    n = r[i],
                                    o = t[1];
                                t = t[2], n && o && (r[i] = n = n.destroy()), t && !n && (r[i] = r.renderer.text(t.text, 0, 0, t.useHTML).attr({
                                    align: t.align,
                                    class: "highcharts-" + i,
                                    zIndex: t.zIndex || 4
                                }).add(), r[i].update = function(t) {
                                    r.setTitle(!e && t, e && t)
                                }, r[i].css(t.style))
                            }), r.layOutTitles(i)
                        },
                        layOutTitles: function(t) {
                            var e, i = 0,
                                n = this.renderer,
                                r = this.spacingBox;
                            p(["title", "subtitle"], function(t) {
                                var e, o = this[t],
                                    a = this.options[t];
                                t = "title" === t ? -3 : a.verticalAlign ? 0 : i + 2, o && (e = a.style.fontSize, e = n.fontMetrics(e, o).b, o.css({
                                    width: (a.width || r.width + a.widthAdjust) + "px"
                                }).align(f({
                                    y: t + e
                                }, a), !1, "spacingBox"), a.floating || a.verticalAlign || (i = Math.ceil(i + o.getBBox(a.useHTML).height)))
                            }, this), e = this.titleOffset !== i, this.titleOffset = i, !this.isDirtyBox && e && (this.isDirtyBox = this.isDirtyLegend = e, this.hasRendered && A(t, !0) && this.isDirtyBox && this.redraw())
                        },
                        getChartSize: function() {
                            var e = this.options.chart,
                                i = e.width,
                                n = (e = e.height, this.renderTo);
                            d(i) || (this.containerWidth = t.getStyle(n, "width")), d(e) || (this.containerHeight = t.getStyle(n, "height")), this.chartWidth = Math.max(0, i || this.containerWidth || 600), this.chartHeight = Math.max(0, t.relativeLength(e, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
                        },
                        temporaryDisplay: function(e) {
                            var i = this.renderTo;
                            if (e)
                                for (; i && i.style;) i.hcOrigStyle && (t.css(i, i.hcOrigStyle), delete i.hcOrigStyle), i.hcOrigDetached && (o.body.removeChild(i), i.hcOrigDetached = !1), i = i.parentNode;
                            else
                                for (; i && i.style;)
                                    if (o.body.contains(i) || i.parentNode || (i.hcOrigDetached = !0, o.body.appendChild(i)), ("none" === t.getStyle(i, "display", !1) || i.hcOricDetached) && (i.hcOrigStyle = {
                                            display: i.style.display,
                                            height: i.style.height,
                                            overflow: i.style.overflow
                                        }, e = {
                                            display: "block",
                                            overflow: "hidden"
                                        }, i !== this.renderTo && (e.height = 0), t.css(i, e), i.offsetWidth || i.style.setProperty("display", "block", "important")), i = i.parentNode, i === o.body) break
                        },
                        setClassName: function(t) {
                            this.container.className = "highcharts-container " + (t || "")
                        },
                        getContainer: function() {
                            var e, i, n, a = this.options,
                                l = a.chart;
                            e = this.renderTo;
                            var c, u = t.uniqueKey();
                            e || (this.renderTo = e = l.renderTo), b(e) && (this.renderTo = e = o.getElementById(e)), e || t.error(13, !0), i = C(r(e, "data-highcharts-chart")), y(i) && h[i] && h[i].hasRendered && h[i].destroy(), r(e, "data-highcharts-chart", this.index), e.innerHTML = "", l.skipClone || e.offsetWidth || this.temporaryDisplay(), this.getChartSize(), i = this.chartWidth, n = this.chartHeight, c = f({
                                position: "relative",
                                overflow: "hidden",
                                width: i + "px",
                                height: n + "px",
                                textAlign: "left",
                                lineHeight: "normal",
                                zIndex: 0,
                                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                            }, l.style), this.container = e = s("div", {
                                id: u
                            }, c, e), this._cursor = e.style.cursor, this.renderer = new(t[l.renderer] || t.Renderer)(e, i, n, null, l.forExport, a.exporting && a.exporting.allowHTML), this.setClassName(l.className), this.renderer.setStyle(l.style), this.renderer.chartIndex = this.index, m(this, "afterGetContainer")
                        },
                        getMargins: function(t) {
                            var e = this.spacing,
                                i = this.margin,
                                n = this.titleOffset;
                            this.resetMargins(), n && !d(i[0]) && (this.plotTop = Math.max(this.plotTop, n + this.options.title.margin + e[0])), this.legend && this.legend.display && this.legend.adjustMargins(i, e), m(this, "getMargins"), t || this.getAxisMargins()
                        },
                        getAxisMargins: function() {
                            var t = this,
                                e = t.axisOffset = [0, 0, 0, 0],
                                i = t.margin;
                            t.hasCartesianSeries && p(t.axes, function(t) {
                                t.visible && t.getOffset()
                            }), p(_, function(n, r) {
                                d(i[r]) || (t[n] += e[r])
                            }), t.setChartSize()
                        },
                        reflow: function(e) {
                            var i = this,
                                n = i.options.chart,
                                r = i.renderTo,
                                a = d(n.width) && d(n.height),
                                s = n.width || t.getStyle(r, "width");
                            n = n.height || t.getStyle(r, "height"), r = e ? e.target : E;
                            a || i.isPrinting || !s || !n || r !== E && r !== o || (s === i.containerWidth && n === i.containerHeight || (t.clearTimeout(i.reflowTimeout), i.reflowTimeout = L(function() {
                                i.container && i.setSize(void 0, void 0, !1)
                            }, e ? 100 : 0)), i.containerWidth = s, i.containerHeight = n)
                        },
                        setReflow: function(t) {
                            var i = this;
                            !1 === t || this.unbindReflow ? !1 === t && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = e(E, "resize", function(t) {
                                i.reflow(t)
                            }), e(this, "destroy", this.unbindReflow))
                        },
                        setSize: function(e, r, o) {
                            var a = this,
                                s = a.renderer;
                            a.isResizing += 1, t.setAnimation(o, a), a.oldChartHeight = a.chartHeight, a.oldChartWidth = a.chartWidth, void 0 !== e && (a.options.chart.width = e), void 0 !== r && (a.options.chart.height = r), a.getChartSize(), e = s.globalAnimation, (e ? i : u)(a.container, {
                                width: a.chartWidth + "px",
                                height: a.chartHeight + "px"
                            }, e), a.setChartSize(!0), s.setSize(a.chartWidth, a.chartHeight, o), p(a.axes, function(t) {
                                t.isDirty = !0, t.setScale()
                            }), a.isDirtyLegend = !0, a.isDirtyBox = !0, a.layOutTitles(), a.getMargins(), a.redraw(o), a.oldChartHeight = null, m(a, "resize"), L(function() {
                                a && m(a, "endResize", null, function() {
                                    --a.isResizing
                                })
                            }, n(e).duration)
                        },
                        setChartSize: function(t) {
                            var e, i, n, r, o = this.inverted,
                                a = this.renderer,
                                s = this.chartWidth,
                                l = this.chartHeight,
                                c = this.options.chart,
                                h = this.spacing,
                                u = this.clipOffset;
                            this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = n = Math.max(0, Math.round(s - e - this.marginRight)), this.plotHeight = r = Math.max(0, Math.round(l - i - this.marginBottom)), this.plotSizeX = o ? r : n, this.plotSizeY = o ? n : r, this.plotBorderWidth = c.plotBorderWidth || 0, this.spacingBox = a.spacingBox = {
                                x: h[3],
                                y: h[0],
                                width: s - h[3] - h[1],
                                height: l - h[0] - h[2]
                            }, this.plotBox = a.plotBox = {
                                x: e,
                                y: i,
                                width: n,
                                height: r
                            }, s = 2 * Math.floor(this.plotBorderWidth / 2), o = Math.ceil(Math.max(s, u[3]) / 2), a = Math.ceil(Math.max(s, u[0]) / 2), this.clipBox = {
                                x: o,
                                y: a,
                                width: Math.floor(this.plotSizeX - Math.max(s, u[1]) / 2 - o),
                                height: Math.max(0, Math.floor(this.plotSizeY - Math.max(s, u[2]) / 2 - a))
                            }, t || p(this.axes, function(t) {
                                t.setAxisSize(), t.setAxisTranslation()
                            }), m(this, "afterSetChartSize", {
                                skipAxes: t
                            })
                        },
                        resetMargins: function() {
                            var t = this,
                                e = t.options.chart;
                            p(["margin", "spacing"], function(i) {
                                var n = e[i],
                                    r = x(n) ? n : [n, n, n, n];
                                p(["Top", "Right", "Bottom", "Left"], function(n, o) {
                                    t[i][o] = A(e[i + n], r[o])
                                })
                            }), p(_, function(e, i) {
                                t[e] = A(t.margin[i], t.spacing[i])
                            }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [0, 0, 0, 0]
                        },
                        drawChartBox: function() {
                            var t, e, i = this.options.chart,
                                n = this.renderer,
                                r = this.chartWidth,
                                o = this.chartHeight,
                                a = this.chartBackground,
                                s = this.plotBackground,
                                l = this.plotBorder,
                                c = this.plotBGImage,
                                h = i.backgroundColor,
                                u = i.plotBackgroundColor,
                                d = i.plotBackgroundImage,
                                p = this.plotLeft,
                                f = this.plotTop,
                                g = this.plotWidth,
                                v = this.plotHeight,
                                y = this.plotBox,
                                x = this.clipRect,
                                b = this.clipBox,
                                w = "animate";
                            a || (this.chartBackground = a = n.rect().addClass("highcharts-background").add(), w = "attr"), t = i.borderWidth || 0, e = t + (i.shadow ? 8 : 0), h = {
                                fill: h || "none"
                            }, (t || a["stroke-width"]) && (h.stroke = i.borderColor, h["stroke-width"] = t), a.attr(h).shadow(i.shadow), a[w]({
                                x: e / 2,
                                y: e / 2,
                                width: r - e - t % 2,
                                height: o - e - t % 2,
                                r: i.borderRadius
                            }), w = "animate", s || (w = "attr", this.plotBackground = s = n.rect().addClass("highcharts-plot-background").add()), s[w](y), s.attr({
                                fill: u || "none"
                            }).shadow(i.plotShadow), d && (c ? c.animate(y) : this.plotBGImage = n.image(d, p, f, g, v).add()), x ? x.animate({
                                width: b.width,
                                height: b.height
                            }) : this.clipRect = n.clipRect(b), w = "animate", l || (w = "attr", this.plotBorder = l = n.rect().addClass("highcharts-plot-border").attr({
                                zIndex: 1
                            }).add()), l.attr({
                                stroke: i.plotBorderColor,
                                "stroke-width": i.plotBorderWidth || 0,
                                fill: "none"
                            }), l[w](l.crisp({
                                x: p,
                                y: f,
                                width: g,
                                height: v
                            }, -l.strokeWidth())), this.isDirtyBox = !1, m(this, "afterDrawChartBox")
                        },
                        propFromSeries: function() {
                            var t, e, i, n = this,
                                r = n.options.chart,
                                o = n.options.series;
                            p(["inverted", "angular", "polar"], function(a) {
                                for (t = P[r.type || r.defaultSeriesType], i = r[a] || t && t.prototype[a], e = o && o.length; !i && e--;)(t = P[o[e].type]) && t.prototype[a] && (i = !0);
                                n[a] = i
                            })
                        },
                        linkSeries: function() {
                            var t = this,
                                e = t.series;
                            p(e, function(t) {
                                t.linkedSeries.length = 0
                            }), p(e, function(e) {
                                var i = e.options.linkedTo;
                                b(i) && (i = ":previous" === i ? t.series[e.index - 1] : t.get(i)) && i.linkedParent !== e && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = A(e.options.visible, i.options.visible, e.visible))
                            }), m(this, "afterLinkSeries")
                        },
                        renderSeries: function() {
                            p(this.series, function(t) {
                                t.translate(), t.render()
                            })
                        },
                        renderLabels: function() {
                            var t = this,
                                e = t.options.labels;
                            e.items && p(e.items, function(i) {
                                var n = f(e.style, i.style),
                                    r = C(n.left) + t.plotLeft,
                                    o = C(n.top) + t.plotTop + 12;
                                delete n.left, delete n.top, t.renderer.text(i.html, r, o).attr({
                                    zIndex: 2
                                }).css(n).add()
                            })
                        },
                        render: function() {
                            var t, e, i, n = this.axes,
                                r = this.renderer,
                                o = this.options;
                            this.setTitle(), this.legend = new w(this, o.legend), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize(), o = this.plotWidth, t = this.plotHeight = Math.max(this.plotHeight - 21, 0), p(n, function(t) {
                                t.setScale()
                            }), this.getAxisMargins(), e = 1.1 < o / this.plotWidth, i = 1.05 < t / this.plotHeight, (e || i) && (p(n, function(t) {
                                (t.horiz && e || !t.horiz && i) && t.setTickInterval(!0)
                            }), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries && p(n, function(t) {
                                t.visible && t.render()
                            }), this.seriesGroup || (this.seriesGroup = r.g("series-group").attr({
                                zIndex: 3
                            }).add()), this.renderSeries(), this.renderLabels(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0
                        },
                        addCredits: function(t) {
                            var e = this;
                            t = k(!0, this.options.credits, t), t.enabled && !this.credits && (this.credits = this.renderer.text(t.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
                                t.href && (E.location.href = t.href)
                            }).attr({
                                align: t.position.align,
                                zIndex: 8
                            }).css(t.style).add().align(t.position), this.credits.update = function(t) {
                                e.credits = e.credits.destroy(), e.addCredits(t)
                            })
                        },
                        destroy: function() {
                            var e, i = this,
                                n = i.axes,
                                r = i.series,
                                o = i.container,
                                a = o && o.parentNode;
                            for (m(i, "destroy"), i.renderer.forExport ? t.erase(h, i) : h[i.index] = void 0, t.chartCount--, i.renderTo.removeAttribute("data-highcharts-chart"), T(i), e = n.length; e--;) n[e] = n[e].destroy();
                            for (this.scroller && this.scroller.destroy && this.scroller.destroy(), e = r.length; e--;) r[e] = r[e].destroy();
                            p("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "), function(t) {
                                var e = i[t];
                                e && e.destroy && (i[t] = e.destroy())
                            }), o && (o.innerHTML = "", T(o), a && c(o)), S(i, function(t, e) {
                                delete i[e]
                            })
                        },
                        firstRender: function() {
                            var t = this,
                                e = t.options;
                            t.isReadyToRender && !t.isReadyToRender() || (t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), p(e.series || [], function(e) {
                                t.initSeries(e)
                            }), t.linkSeries(), m(t, "beforeRender"), M && (t.pointer = new M(t, e)), t.render(), !t.renderer.imgCount && t.onload && t.onload(), t.temporaryDisplay(!0))
                        },
                        onload: function() {
                            p([this.callback].concat(this.callbacks), function(t) {
                                t && void 0 !== this.index && t.apply(this, [this])
                            }, this), m(this, "load"), m(this, "render"), d(this.index) && this.setReflow(this.options.chart.reflow), this.onload = null
                        }
                    })
                }(e),
                function(t) {
                    var e = t.addEvent,
                        i = t.Chart,
                        n = t.each;
                    e(i, "afterSetChartSize", function(e) {
                        var i = this.options.chart.scrollablePlotArea;
                        (i = i && i.minWidth) && !this.renderer.forExport && (this.scrollablePixels = i = Math.max(0, i - this.chartWidth)) && (this.plotWidth += i, this.clipBox.width += i, e.skipAxes || n(this.axes, function(e) {
                            1 === e.side ? e.getPlotLinePath = function() {
                                var i, n = this.right;
                                return this.right = n - e.chart.scrollablePixels, i = t.Axis.prototype.getPlotLinePath.apply(this, arguments), this.right = n, i
                            } : (e.setAxisSize(), e.setAxisTranslation())
                        }))
                    }), e(i, "render", function() {
                        this.scrollablePixels ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed()
                    }), i.prototype.setUpScrolling = function() {
                        this.scrollingContainer = t.createElement("div", {
                            className: "highcharts-scrolling"
                        }, {
                            overflowX: "auto",
                            WebkitOverflowScrolling: "touch"
                        }, this.renderTo), this.innerContainer = t.createElement("div", {
                            className: "highcharts-inner-container"
                        }, null, this.scrollingContainer), this.innerContainer.appendChild(this.container), this.setUpScrolling = null
                    }, i.prototype.applyFixed = function() {
                        var e, i, n = this.container,
                            r = !this.fixedDiv;
                        r && (this.fixedDiv = t.createElement("div", {
                            className: "highcharts-fixed"
                        }, {
                            position: "absolute",
                            overflow: "hidden",
                            pointerEvents: "none",
                            zIndex: 2
                        }, null, !0), this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild), this.fixedRenderer = e = new t.Renderer(this.fixedDiv, 0, 0), this.scrollableMask = e.path().attr({
                            fill: t.color(this.options.chart.backgroundColor || "#fff").setOpacity(.85).get(),
                            zIndex: -1
                        }).addClass("highcharts-scrollable-mask").add(), t.each([this.inverted ? ".highcharts-xaxis" : ".highcharts-yaxis", this.inverted ? ".highcharts-xaxis-labels" : ".highcharts-yaxis-labels", ".highcharts-contextbutton", ".highcharts-credits", ".highcharts-legend", ".highcharts-subtitle", ".highcharts-title", ".highcharts-legend-checkbox"], function(i) {
                            t.each(n.querySelectorAll(i), function(t) {
                                (t.namespaceURI === e.SVG_NS ? e.box : e.box.parentNode).appendChild(t), t.style.pointerEvents = "auto"
                            })
                        })), this.fixedRenderer.setSize(this.chartWidth, this.chartHeight), i = this.chartWidth + this.scrollablePixels, t.stop(this.container), this.container.style.width = i + "px", this.renderer.boxWrapper.attr({
                            width: i,
                            height: this.chartHeight,
                            viewBox: [0, 0, i, this.chartHeight].join(" ")
                        }), this.chartBackground.attr({
                            width: i
                        }), r && (i = this.options.chart.scrollablePlotArea, i.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixels * i.scrollPositionX)), r = this.axisOffset, i = this.plotTop - r[0] - 1;
                        r = this.plotTop + this.plotHeight + r[2];
                        var o = this.plotLeft + this.plotWidth - this.scrollablePixels;
                        this.scrollableMask.attr({
                            d: this.scrollablePixels ? ["M", 0, i, "L", this.plotLeft - 1, i, "L", this.plotLeft - 1, r, "L", 0, r, "Z", "M", o, i, "L", this.chartWidth, i, "L", this.chartWidth, r, "L", o, r, "Z"] : ["M", 0, 0]
                        })
                    }
                }(e),
                function(t) {
                    var e, i = t.each,
                        n = t.extend,
                        r = t.erase,
                        o = t.fireEvent,
                        a = t.format,
                        s = t.isArray,
                        l = t.isNumber,
                        c = t.pick,
                        h = t.uniqueKey,
                        u = t.defined,
                        d = t.removeEvent;
                    t.Point = e = function() {}, t.Point.prototype = {
                        init: function(t, e, i) {
                            return this.series = t, this.color = t.color, this.applyOptions(e, i), this.id = u(this.id) ? this.id : h(), t.options.colorByPoint ? (e = t.options.colors || t.chart.options.colors, this.color = this.color || e[t.colorCounter], e = e.length, i = t.colorCounter, t.colorCounter++, t.colorCounter === e && (t.colorCounter = 0)) : i = t.colorIndex, this.colorIndex = c(this.colorIndex, i), t.chart.pointCount++, o(this, "afterInit"), this
                        },
                        applyOptions: function(t, i) {
                            var r = this.series,
                                o = r.options.pointValKey || r.pointValKey;
                            return t = e.prototype.optionsToObject.call(this, t), n(this, t), this.options = this.options ? n(this.options, t) : t, t.group && delete this.group, t.dataLabels && delete this.dataLabels, o && (this.y = this[o]), this.isNull = c(this.isValid && !this.isValid(), null === this.x || !l(this.y, !0)), this.selected && (this.state = "select"), "name" in this && void 0 === i && r.xAxis && r.xAxis.hasNames && (this.x = r.xAxis.nameToX(this)), void 0 === this.x && r && (this.x = void 0 === i ? r.autoIncrement(this) : i), this
                        },
                        setNestedProperty: function(e, i, n) {
                            return n = n.split("."), t.reduce(n, function(e, n, r, o) {
                                return e[n] = o.length - 1 === r ? i : t.isObject(e[n], !0) ? e[n] : {}, e[n]
                            }, e), e
                        },
                        optionsToObject: function(e) {
                            var i = {},
                                n = this.series,
                                r = n.options.keys,
                                o = r || n.pointArrayMap || ["y"],
                                a = o.length,
                                c = 0,
                                h = 0;
                            if (l(e) || null === e) i[o[0]] = e;
                            else if (s(e))
                                for (!r && e.length > a && (n = typeof e[0], "string" === n ? i.name = e[0] : "number" === n && (i.x = e[0]), c++); h < a;) r && void 0 === e[c] || (0 < o[h].indexOf(".") ? t.Point.prototype.setNestedProperty(i, e[c], o[h]) : i[o[h]] = e[c]), c++, h++;
                            else "object" === typeof e && (i = e, e.dataLabels && (n._hasPointLabels = !0), e.marker && (n._hasPointMarkers = !0));
                            return i
                        },
                        getClassName: function() {
                            return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                        },
                        getZone: function() {
                            var t, e = this.series,
                                i = e.zones,
                                n = (e = e.zoneAxis || "y", 0);
                            for (t = i[n]; this[e] >= t.value;) t = i[++n];
                            return this.nonZonedColor || (this.nonZonedColor = this.color), this.color = t && t.color && !this.options.color ? t.color : this.nonZonedColor, t
                        },
                        destroy: function() {
                            var t, e = this.series.chart,
                                i = e.hoverPoints;
                            for (t in e.pointCount--, i && (this.setState(), r(i, this), i.length || (e.hoverPoints = null)), this === e.hoverPoint && this.onMouseOut(), (this.graphic || this.dataLabel || this.dataLabels) && (d(this), this.destroyElements()), this.legendItem && e.legend.destroyItem(this), this) this[t] = null
                        },
                        destroyElements: function() {
                            for (var t, e = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], n = 6; n--;) t = e[n], this[t] && (this[t] = this[t].destroy());
                            this.dataLabels && (i(this.dataLabels, function(t) {
                                t.element && t.destroy()
                            }), delete this.dataLabels), this.connectors && (i(this.connectors, function(t) {
                                t.element && t.destroy()
                            }), delete this.connectors)
                        },
                        getLabelConfig: function() {
                            return {
                                x: this.category,
                                y: this.y,
                                color: this.color,
                                colorIndex: this.colorIndex,
                                key: this.name || this.category,
                                series: this.series,
                                point: this,
                                percentage: this.percentage,
                                total: this.total || this.stackTotal
                            }
                        },
                        tooltipFormatter: function(t) {
                            var e = this.series,
                                n = e.tooltipOptions,
                                r = c(n.valueDecimals, ""),
                                o = n.valuePrefix || "",
                                s = n.valueSuffix || "";
                            return i(e.pointArrayMap || ["y"], function(e) {
                                e = "{point." + e, (o || s) && (t = t.replace(RegExp(e + "}", "g"), o + e + "}" + s)), t = t.replace(RegExp(e + "}", "g"), e + ":,." + r + "f}")
                            }), a(t, {
                                point: this,
                                series: this.series
                            }, e.chart.time)
                        },
                        firePointEvent: function(t, e, i) {
                            var n = this,
                                r = this.series.options;
                            (r.point.events[t] || n.options && n.options.events && n.options.events[t]) && this.importEvents(), "click" === t && r.allowPointSelect && (i = function(t) {
                                n.select && n.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
                            }), o(this, t, e, i)
                        },
                        visible: !0
                    }
                }(e),
                function(t) {
                    var e = t.addEvent,
                        i = t.animObject,
                        n = t.arrayMax,
                        r = t.arrayMin,
                        o = t.correctFloat,
                        a = t.defaultOptions,
                        s = t.defaultPlotOptions,
                        l = t.defined,
                        c = t.each,
                        h = t.erase,
                        u = t.extend,
                        d = t.fireEvent,
                        p = t.grep,
                        f = t.isArray,
                        g = t.isNumber,
                        m = t.isString,
                        v = t.merge,
                        y = t.objectEach,
                        x = t.pick,
                        b = t.removeEvent,
                        w = t.splat,
                        _ = t.SVGElement,
                        k = t.syncTimeout,
                        S = t.win;
                    t.Series = t.seriesType("line", null, {
                        lineWidth: 2,
                        allowPointSelect: !1,
                        showCheckbox: !1,
                        animation: {
                            duration: 1e3
                        },
                        events: {},
                        marker: {
                            lineWidth: 0,
                            lineColor: "#ffffff",
                            enabledThreshold: 2,
                            radius: 4,
                            states: {
                                normal: {
                                    animation: !0
                                },
                                hover: {
                                    animation: {
                                        duration: 50
                                    },
                                    enabled: !0,
                                    radiusPlus: 2,
                                    lineWidthPlus: 1
                                },
                                select: {
                                    fillColor: "#cccccc",
                                    lineColor: "#000000",
                                    lineWidth: 2
                                }
                            }
                        },
                        point: {
                            events: {}
                        },
                        dataLabels: {
                            align: "center",
                            formatter: function() {
                                return null === this.y ? "" : t.numberFormat(this.y, -1)
                            },
                            style: {
                                fontSize: "11px",
                                fontWeight: "bold",
                                color: "contrast",
                                textOutline: "1px contrast"
                            },
                            verticalAlign: "bottom",
                            x: 0,
                            y: 0,
                            padding: 5
                        },
                        cropThreshold: 300,
                        pointRange: 0,
                        softThreshold: !0,
                        states: {
                            normal: {
                                animation: !0
                            },
                            hover: {
                                animation: {
                                    duration: 50
                                },
                                lineWidthPlus: 1,
                                marker: {},
                                halo: {
                                    size: 10,
                                    opacity: .25
                                }
                            },
                            select: {}
                        },
                        stickyTracking: !0,
                        turboThreshold: 1e3,
                        findNearestPointBy: "x"
                    }, {
                        isCartesian: !0,
                        pointClass: t.Point,
                        sorted: !0,
                        requireSorting: !0,
                        directTouch: !1,
                        axisTypes: ["xAxis", "yAxis"],
                        colorCounter: 0,
                        parallelArrays: ["x", "y"],
                        coll: "series",
                        init: function(t, i) {
                            var n, r, o = this,
                                a = t.series;
                            o.chart = t, o.options = i = o.setOptions(i), o.linkedSeries = [], o.bindAxes(), u(o, {
                                name: i.name,
                                state: "",
                                visible: !1 !== i.visible,
                                selected: !0 === i.selected
                            }), n = i.events, y(n, function(t, i) {
                                e(o, i, t)
                            }), (n && n.click || i.point && i.point.events && i.point.events.click || i.allowPointSelect) && (t.runTrackerClick = !0), o.getColor(), o.getSymbol(), c(o.parallelArrays, function(t) {
                                o[t + "Data"] = []
                            }), o.setData(i.data, !1), o.isCartesian && (t.hasCartesianSeries = !0), a.length && (r = a[a.length - 1]), o._i = x(r && r._i, -1) + 1, t.orderSeries(this.insert(a)), d(this, "afterInit")
                        },
                        insert: function(t) {
                            var e, i = this.options.index;
                            if (g(i)) {
                                for (e = t.length; e--;)
                                    if (i >= x(t[e].options.index, t[e]._i)) {
                                        t.splice(e + 1, 0, this);
                                        break
                                    } - 1 === e && t.unshift(this), e += 1
                            } else t.push(this);
                            return x(e, t.length - 1)
                        },
                        bindAxes: function() {
                            var e, i = this,
                                n = i.options,
                                r = i.chart;
                            c(i.axisTypes || [], function(o) {
                                c(r[o], function(t) {
                                    e = t.options, (n[o] === e.index || void 0 !== n[o] && n[o] === e.id || void 0 === n[o] && 0 === e.index) && (i.insert(t.series), i[o] = t, t.isDirty = !0)
                                }), i[o] || i.optionalAxis === o || t.error(18, !0)
                            })
                        },
                        updateParallelArrays: function(t, e) {
                            var i = t.series,
                                n = arguments,
                                r = g(e) ? function(n) {
                                    var r = "y" === n && i.toYData ? i.toYData(t) : t[n];
                                    i[n + "Data"][e] = r
                                } : function(t) {
                                    Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(n, 2))
                                };
                            c(i.parallelArrays, r)
                        },
                        autoIncrement: function() {
                            var t, e = this.options,
                                i = this.xIncrement,
                                n = e.pointIntervalUnit,
                                r = this.chart.time;
                            i = x(i, e.pointStart, 0);
                            return this.pointInterval = t = x(this.pointInterval, e.pointInterval, 1), n && (e = new r.Date(i), "day" === n ? r.set("Date", e, r.get("Date", e) + t) : "month" === n ? r.set("Month", e, r.get("Month", e) + t) : "year" === n && r.set("FullYear", e, r.get("FullYear", e) + t), t = e.getTime() - i), this.xIncrement = i + t, i
                        },
                        setOptions: function(t) {
                            var e = this.chart,
                                i = e.options,
                                n = i.plotOptions,
                                r = (e.userOptions || {}).plotOptions || {},
                                o = n[this.type];
                            return this.userOptions = t, e = v(o, n.series, t), this.tooltipOptions = v(a.tooltip, a.plotOptions.series && a.plotOptions.series.tooltip, a.plotOptions[this.type].tooltip, i.tooltip.userOptions, n.series && n.series.tooltip, n[this.type].tooltip, t.tooltip), this.stickyTracking = x(t.stickyTracking, r[this.type] && r[this.type].stickyTracking, r.series && r.series.stickyTracking, !(!this.tooltipOptions.shared || this.noSharedTooltip) || e.stickyTracking), null === o.marker && delete e.marker, this.zoneAxis = e.zoneAxis, t = this.zones = (e.zones || []).slice(), !e.negativeColor && !e.negativeFillColor || e.zones || t.push({
                                value: e[this.zoneAxis + "Threshold"] || e.threshold || 0,
                                className: "highcharts-negative",
                                color: e.negativeColor,
                                fillColor: e.negativeFillColor
                            }), t.length && l(t[t.length - 1].value) && t.push({
                                color: this.color,
                                fillColor: this.fillColor
                            }), d(this, "afterSetOptions", {
                                options: e
                            }), e
                        },
                        getName: function() {
                            return this.name || "Series " + (this.index + 1)
                        },
                        getCyclic: function(t, e, i) {
                            var n, r = this.chart,
                                o = this.userOptions,
                                a = t + "Index",
                                s = t + "Counter",
                                c = i ? i.length : x(r.options.chart[t + "Count"], r[t + "Count"]);
                            e || (n = x(o[a], o["_" + a]), l(n) || (r.series.length || (r[s] = 0), o["_" + a] = n = r[s] % c, r[s] += 1), i && (e = i[n])), void 0 !== n && (this[a] = n), this[t] = e
                        },
                        getColor: function() {
                            this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || s[this.type].color, this.chart.options.colors)
                        },
                        getSymbol: function() {
                            this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols)
                        },
                        drawLegendSymbol: t.LegendSymbolMixin.drawLineMarker,
                        updateData: function(e) {
                            var i, n, r, o = this.options,
                                a = this.points,
                                s = [],
                                l = this.requireSorting;
                            if (c(e, function(e) {
                                    var n;
                                    n = t.defined(e) && this.pointClass.prototype.optionsToObject.call({
                                        series: this
                                    }, e).x, g(n) && (n = t.inArray(n, this.xData, r), -1 === n || a[n].touched ? s.push(e) : e !== o.data[n] ? (a[n].update(e, !1, null, !1), a[n].touched = !0, l && (r = n + 1)) : a[n] && (a[n].touched = !0), i = !0)
                                }, this), i)
                                for (e = a.length; e--;) n = a[e], n.touched || n.remove(!1), n.touched = !1;
                            else {
                                if (e.length !== a.length) return !1;
                                c(e, function(t, e) {
                                    a[e].update && t !== o.data[e] && a[e].update(t, !1, null, !1)
                                })
                            }
                            return c(s, function(t) {
                                this.addPoint(t, !1)
                            }, this), !0
                        },
                        setData: function(e, i, n, r) {
                            var o, a, s = this,
                                l = s.points,
                                h = l && l.length || 0,
                                u = s.options,
                                d = s.chart,
                                p = null,
                                v = s.xAxis,
                                y = u.turboThreshold,
                                b = this.xData,
                                w = this.yData,
                                _ = (o = s.pointArrayMap) && o.length;
                            if (e = e || [], o = e.length, i = x(i, !0), !1 !== r && o && h && !s.cropped && !s.hasGroupedData && s.visible && !s.isSeriesBoosting && (a = this.updateData(e)), !a) {
                                if (s.xIncrement = null, s.colorCounter = 0, c(this.parallelArrays, function(t) {
                                        s[t + "Data"].length = 0
                                    }), y && o > y) {
                                    for (n = 0; null === p && n < o;) p = e[n], n++;
                                    if (g(p))
                                        for (n = 0; n < o; n++) b[n] = this.autoIncrement(), w[n] = e[n];
                                    else if (f(p))
                                        if (_)
                                            for (n = 0; n < o; n++) p = e[n], b[n] = p[0], w[n] = p.slice(1, _ + 1);
                                        else
                                            for (n = 0; n < o; n++) p = e[n], b[n] = p[0], w[n] = p[1];
                                    else t.error(12)
                                } else
                                    for (n = 0; n < o; n++) void 0 !== e[n] && (p = {
                                        series: s
                                    }, s.pointClass.prototype.applyOptions.apply(p, [e[n]]), s.updateParallelArrays(p, n));
                                for (w && m(w[0]) && t.error(14, !0), s.data = [], s.options.data = s.userOptions.data = e, n = h; n--;) l[n] && l[n].destroy && l[n].destroy();
                                v && (v.minRange = v.userMinRange), s.isDirty = d.isDirtyBox = !0, s.isDirtyData = !!l, n = !1
                            }
                            "point" === u.legendType && (this.processData(), this.generatePoints()), i && d.redraw(n)
                        },
                        processData: function(e) {
                            var i, n = this.xData,
                                r = this.yData,
                                o = n.length;
                            i = 0;
                            var a, s, l, c = this.xAxis,
                                h = this.options;
                            l = h.cropThreshold;
                            var u, d, p = this.getExtremesFromAll || h.getExtremesFromAll,
                                f = this.isCartesian,
                                g = (h = c && c.val2lin, c && c.isLog),
                                m = this.requireSorting;
                            if (f && !this.isDirty && !c.isDirty && !this.yAxis.isDirty && !e) return !1;
                            for (c && (e = c.getExtremes(), u = e.min, d = e.max), f && this.sorted && !p && (!l || o > l || this.forceCrop) && (n[o - 1] < u || n[0] > d ? (n = [], r = []) : this.yData && (n[0] < u || n[o - 1] > d) && (i = this.cropData(this.xData, this.yData, u, d), n = i.xData, r = i.yData, i = i.start, a = !0)), l = n.length || 1; --l;) o = g ? h(n[l]) - h(n[l - 1]) : n[l] - n[l - 1], 0 < o && (void 0 === s || o < s) ? s = o : 0 > o && m && (t.error(15), m = !1);
                            this.cropped = a, this.cropStart = i, this.processedXData = n, this.processedYData = r, this.closestPointRange = s
                        },
                        cropData: function(t, e, i, n, r) {
                            var o, a = t.length,
                                s = 0,
                                l = a;
                            for (r = x(r, this.cropShoulder, 1), o = 0; o < a; o++)
                                if (t[o] >= i) {
                                    s = Math.max(0, o - r);
                                    break
                                } for (i = o; i < a; i++)
                                if (t[i] > n) {
                                    l = i + r;
                                    break
                                } return {
                                xData: t.slice(s, l),
                                yData: e.slice(s, l),
                                start: s,
                                end: l
                            }
                        },
                        generatePoints: function() {
                            var t, e, i, n, r = this.options,
                                o = r.data,
                                a = this.data,
                                s = this.processedXData,
                                l = this.processedYData,
                                c = this.pointClass,
                                h = s.length,
                                d = this.cropStart || 0,
                                p = this.hasGroupedData,
                                f = (r = r.keys, []);
                            for (a || p || (a = [], a.length = o.length, a = this.data = a), r && p && (this.options.keys = !1), n = 0; n < h; n++) e = d + n, p ? (i = (new c).init(this, [s[n]].concat(w(l[n]))), i.dataGroup = this.groupMap[n], i.dataGroup.options && (i.options = i.dataGroup.options, u(i, i.dataGroup.options))) : (i = a[e]) || void 0 === o[e] || (a[e] = i = (new c).init(this, o[e], s[n])), i && (i.index = e, f[n] = i);
                            if (this.options.keys = r, a && (h !== (t = a.length) || p))
                                for (n = 0; n < t; n++) n !== d || p || (n += h), a[n] && (a[n].destroyElements(), a[n].plotX = void 0);
                            this.data = a, this.points = f
                        },
                        getExtremes: function(t) {
                            var e, i = this.yAxis,
                                o = this.processedXData,
                                a = [],
                                s = 0;
                            e = this.xAxis.getExtremes();
                            var l, c, h, u, d = e.min,
                                p = e.max,
                                m = this.requireSorting ? 1 : 0;
                            for (t = t || this.stackedYData || this.processedYData || [], e = t.length, u = 0; u < e; u++)
                                if (c = o[u], h = t[u], l = (g(h, !0) || f(h)) && (!i.positiveValuesOnly || h.length || 0 < h), c = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (o[u + m] || c) >= d && (o[u - m] || c) <= p, l && c)
                                    if (l = h.length)
                                        for (; l--;) "number" === typeof h[l] && (a[s++] = h[l]);
                                    else a[s++] = h;
                            this.dataMin = r(a), this.dataMax = n(a)
                        },
                        translate: function() {
                            this.processedXData || this.processData(), this.generatePoints();
                            var t, e, i, n, r = this.options,
                                a = r.stacking,
                                s = this.xAxis,
                                c = s.categories,
                                h = this.yAxis,
                                u = this.points,
                                p = u.length,
                                f = !!this.modifyValue,
                                m = r.pointPlacement,
                                v = "between" === m || g(m),
                                y = r.threshold,
                                b = r.startFromThreshold ? y : 0,
                                w = Number.MAX_VALUE;
                            for ("between" === m && (m = .5), g(m) && (m *= x(r.pointRange || s.pointRange)), r = 0; r < p; r++) {
                                var _ = u[r],
                                    k = _.x,
                                    S = _.y;
                                e = _.low;
                                var M, A = a && h.stacks[(this.negStacks && S < (b ? 0 : y) ? "-" : "") + this.stackKey];
                                h.positiveValuesOnly && null !== S && 0 >= S && (_.isNull = !0), _.plotX = t = o(Math.min(Math.max(-1e5, s.translate(k, 0, 0, 0, 1, m, "flags" === this.type)), 1e5)), a && this.visible && !_.isNull && A && A[k] && (n = this.getStackIndicator(n, k, this.index), M = A[k], S = M.points[n.key], e = S[0], S = S[1], e === b && n.key === A[k].base && (e = x(g(y) && y, h.min)), h.positiveValuesOnly && 0 >= e && (e = null), _.total = _.stackTotal = M.total, _.percentage = M.total && _.y / M.total * 100, _.stackY = S, M.setOffset(this.pointXOffset || 0, this.barW || 0)), _.yBottom = l(e) ? Math.min(Math.max(-1e5, h.translate(e, 0, 1, 0, 1)), 1e5) : null, f && (S = this.modifyValue(S, _)), _.plotY = e = "number" === typeof S && 1 / 0 !== S ? Math.min(Math.max(-1e5, h.translate(S, 0, 1, 0, 1)), 1e5) : void 0, _.isInside = void 0 !== e && 0 <= e && e <= h.len && 0 <= t && t <= s.len, _.clientX = v ? o(s.translate(k, 0, 0, 0, 1, m)) : t, _.negative = _.y < (y || 0), _.category = c && void 0 !== c[_.x] ? c[_.x] : _.x, _.isNull || (void 0 !== i && (w = Math.min(w, Math.abs(t - i))), i = t), _.zone = this.zones.length && _.getZone()
                            }
                            this.closestPointRangePx = w, d(this, "afterTranslate")
                        },
                        getValidPoints: function(t, e) {
                            var i = this.chart;
                            return p(t || this.points || [], function(t) {
                                return !(e && !i.isInsidePlot(t.plotX, t.plotY, i.inverted)) && !t.isNull
                            })
                        },
                        setClip: function(t) {
                            var e = this.chart,
                                i = this.options,
                                n = e.renderer,
                                r = e.inverted,
                                o = this.clipBox,
                                a = o || e.clipBox,
                                s = this.sharedClipKey || ["_sharedClip", t && t.duration, t && t.easing, a.height, i.xAxis, i.yAxis].join(),
                                l = e[s],
                                c = e[s + "m"];
                            l || (t && (a.width = 0, r && (a.x = e.plotSizeX), e[s + "m"] = c = n.clipRect(r ? e.plotSizeX + 99 : -99, r ? -e.plotLeft : -e.plotTop, 99, r ? e.chartWidth : e.chartHeight)), e[s] = l = n.clipRect(a), l.count = {
                                length: 0
                            }), t && !l.count[this.index] && (l.count[this.index] = !0, l.count.length += 1), !1 !== i.clip && (this.group.clip(t || o ? l : e.clipRect), this.markerGroup.clip(c), this.sharedClipKey = s), t || (l.count[this.index] && (delete l.count[this.index], --l.count.length), 0 === l.count.length && s && e[s] && (o || (e[s] = e[s].destroy()), e[s + "m"] && (e[s + "m"] = e[s + "m"].destroy())))
                        },
                        animate: function(t) {
                            var e, n = this.chart,
                                r = i(this.options.animation);
                            t ? this.setClip(r) : (e = this.sharedClipKey, (t = n[e]) && t.animate({
                                width: n.plotSizeX,
                                x: 0
                            }, r), n[e + "m"] && n[e + "m"].animate({
                                width: n.plotSizeX + 99,
                                x: 0
                            }, r), this.animate = null)
                        },
                        afterAnimate: function() {
                            this.setClip(), d(this, "afterAnimate"), this.finishedAnimating = !0
                        },
                        drawPoints: function() {
                            var t, e, i, n, r, o, a, s, l = this.points,
                                c = this.chart,
                                h = this.options.marker,
                                u = this[this.specialGroup] || this.markerGroup,
                                d = x(h.enabled, !!this.xAxis.isRadial || null, this.closestPointRangePx >= h.enabledThreshold * h.radius);
                            if (!1 !== h.enabled || this._hasPointMarkers)
                                for (t = 0; t < l.length; t++) e = l[t], n = e.graphic, r = e.marker || {}, o = !!e.marker, i = d && void 0 === r.enabled || r.enabled, a = e.isInside, i && !e.isNull ? (i = x(r.symbol, this.symbol), s = this.markerAttribs(e, e.selected && "select"), n ? n[a ? "show" : "hide"](!0).animate(s) : a && (0 < s.width || e.hasImage) && (e.graphic = n = c.renderer.symbol(i, s.x, s.y, s.width, s.height, o ? r : h).add(u)), n && n.attr(this.pointAttribs(e, e.selected && "select")), n && n.addClass(e.getClassName(), !0)) : n && (e.graphic = n.destroy())
                        },
                        markerAttribs: function(t, e) {
                            var i = this.options.marker,
                                n = t.marker || {},
                                r = n.symbol || i.symbol,
                                o = x(n.radius, i.radius);
                            return e && (i = i.states[e], e = n.states && n.states[e], o = x(e && e.radius, i && i.radius, o + (i && i.radiusPlus || 0))), t.hasImage = r && 0 === r.indexOf("url"), t.hasImage && (o = 0), t = {
                                x: Math.floor(t.plotX) - o,
                                y: t.plotY - o
                            }, o && (t.width = t.height = 2 * o), t
                        },
                        pointAttribs: function(t, e) {
                            var i = this.options.marker,
                                n = t && t.options,
                                r = n && n.marker || {},
                                o = this.color,
                                a = n && n.color,
                                s = t && t.color;
                            n = x(r.lineWidth, i.lineWidth);
                            return t = t && t.zone && t.zone.color, o = a || t || s || o, t = r.fillColor || i.fillColor || o, o = r.lineColor || i.lineColor || o, e && (i = i.states[e], e = r.states && r.states[e] || {}, n = x(e.lineWidth, i.lineWidth, n + x(e.lineWidthPlus, i.lineWidthPlus, 0)), t = e.fillColor || i.fillColor || t, o = e.lineColor || i.lineColor || o), {
                                stroke: o,
                                "stroke-width": n,
                                fill: t
                            }
                        },
                        destroy: function() {
                            var e, i, n, r, o = this,
                                a = o.chart,
                                s = /AppleWebKit\/533/.test(S.navigator.userAgent),
                                l = o.data || [];
                            for (d(o, "destroy"), b(o), c(o.axisTypes || [], function(t) {
                                    (r = o[t]) && r.series && (h(r.series, o), r.isDirty = r.forceRedraw = !0)
                                }), o.legendItem && o.chart.legend.destroyItem(o), i = l.length; i--;)(n = l[i]) && n.destroy && n.destroy();
                            o.points = null, t.clearTimeout(o.animationTimeout), y(o, function(t, i) {
                                t instanceof _ && !t.survive && (e = s && "group" === i ? "hide" : "destroy", t[e]())
                            }), a.hoverSeries === o && (a.hoverSeries = null), h(a.series, o), a.orderSeries(), y(o, function(t, e) {
                                delete o[e]
                            })
                        },
                        getGraphPath: function(t, e, i) {
                            var n, r, o = this,
                                a = o.options,
                                s = a.step,
                                h = [],
                                u = [];
                            return t = t || o.points, (n = t.reversed) && t.reverse(), (s = {
                                right: 1,
                                center: 2
                            } [s] || s && 3) && n && (s = 4 - s), !a.connectNulls || e || i || (t = this.getValidPoints(t)), c(t, function(n, c) {
                                var d = n.plotX,
                                    p = n.plotY,
                                    f = t[c - 1];
                                (n.leftCliff || f && f.rightCliff) && !i && (r = !0), n.isNull && !l(e) && 0 < c ? r = !a.connectNulls : n.isNull && !e ? r = !0 : (0 === c || r ? c = ["M", n.plotX, n.plotY] : o.getPointSpline ? c = o.getPointSpline(t, n, c) : s ? (c = 1 === s ? ["L", f.plotX, p] : 2 === s ? ["L", (f.plotX + d) / 2, f.plotY, "L", (f.plotX + d) / 2, p] : ["L", d, f.plotY], c.push("L", d, p)) : c = ["L", d, p], u.push(n.x), s && (u.push(n.x), 2 === s && u.push(n.x)), h.push.apply(h, c), r = !1)
                            }), h.xMap = u, o.graphPath = h
                        },
                        drawGraph: function() {
                            var t = this,
                                e = this.options,
                                i = (this.gappedPath || this.getGraphPath).call(this),
                                n = [
                                    ["graph", "highcharts-graph", e.lineColor || this.color, e.dashStyle]
                                ];
                            n = t.getZonesGraphs(n);
                            c(n, function(n, r) {
                                var o = n[0],
                                    a = t[o];
                                a ? (a.endX = t.preventGraphAnimation ? null : i.xMap, a.animate({
                                    d: i
                                })) : i.length && (t[o] = t.chart.renderer.path(i).addClass(n[1]).attr({
                                    zIndex: 1
                                }).add(t.group), a = {
                                    stroke: n[2],
                                    "stroke-width": e.lineWidth,
                                    fill: t.fillGraph && t.color || "none"
                                }, n[3] ? a.dashstyle = n[3] : "square" !== e.linecap && (a["stroke-linecap"] = a["stroke-linejoin"] = "round"), a = t[o].attr(a).shadow(2 > r && e.shadow)), a && (a.startX = i.xMap, a.isArea = i.isArea)
                            })
                        },
                        getZonesGraphs: function(t) {
                            return c(this.zones, function(e, i) {
                                t.push(["zone-graph-" + i, "highcharts-graph highcharts-zone-graph-" + i + " " + (e.className || ""), e.color || this.color, e.dashStyle || this.options.dashStyle])
                            }, this), t
                        },
                        applyZones: function() {
                            var t, e, i, n, r, o, a, s, l, h = this,
                                u = this.chart,
                                d = u.renderer,
                                p = this.zones,
                                f = this.clips || [],
                                g = this.graph,
                                m = this.area,
                                v = Math.max(u.chartWidth, u.chartHeight),
                                y = this[(this.zoneAxis || "y") + "Axis"],
                                b = u.inverted,
                                w = !1;
                            p.length && (g || m) && y && void 0 !== y.min && (r = y.reversed, o = y.horiz, g && !this.showLine && g.hide(), m && m.hide(), n = y.getExtremes(), c(p, function(c, p) {
                                t = r ? o ? u.plotWidth : 0 : o ? 0 : y.toPixels(n.min), t = Math.min(Math.max(x(e, t), 0), v), e = Math.min(Math.max(Math.round(y.toPixels(x(c.value, n.max), !0)), 0), v), w && (t = e = y.toPixels(n.max)), a = Math.abs(t - e), s = Math.min(t, e), l = Math.max(t, e), y.isXAxis ? (i = {
                                    x: b ? l : s,
                                    y: 0,
                                    width: a,
                                    height: v
                                }, o || (i.x = u.plotHeight - i.x)) : (i = {
                                    x: 0,
                                    y: b ? l : s,
                                    width: v,
                                    height: a
                                }, o && (i.y = u.plotWidth - i.y)), b && d.isVML && (i = y.isXAxis ? {
                                    x: 0,
                                    y: r ? s : l,
                                    height: i.width,
                                    width: u.chartWidth
                                } : {
                                    x: i.y - u.plotLeft - u.spacingBox.x,
                                    y: 0,
                                    width: i.height,
                                    height: u.chartHeight
                                }), f[p] ? f[p].animate(i) : (f[p] = d.clipRect(i), g && h["zone-graph-" + p].clip(f[p]), m && h["zone-area-" + p].clip(f[p])), w = c.value > n.max, h.resetZones && 0 === e && (e = void 0)
                            }), this.clips = f)
                        },
                        invertGroups: function(t) {
                            function i() {
                                c(["group", "markerGroup"], function(e) {
                                    r[e] && (o.renderer.isVML && r[e].attr({
                                        width: r.yAxis.len,
                                        height: r.xAxis.len
                                    }), r[e].width = r.yAxis.len, r[e].height = r.xAxis.len, r[e].invert(t))
                                })
                            }
                            var n, r = this,
                                o = r.chart;
                            r.xAxis && (n = e(o, "resize", i), e(r, "destroy", n), i(t), r.invertGroups = i)
                        },
                        plotGroup: function(t, e, i, n, r) {
                            var o = this[t],
                                a = !o;
                            return a && (this[t] = o = this.chart.renderer.g().attr({
                                zIndex: n || .1
                            }).add(r)), o.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (l(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (o.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), o.attr({
                                visibility: i
                            })[a ? "attr" : "animate"](this.getPlotBox()), o
                        },
                        getPlotBox: function() {
                            var t = this.chart,
                                e = this.xAxis,
                                i = this.yAxis;
                            return t.inverted && (e = i, i = this.xAxis), {
                                translateX: e ? e.left : t.plotLeft,
                                translateY: i ? i.top : t.plotTop,
                                scaleX: 1,
                                scaleY: 1
                            }
                        },
                        render: function() {
                            var t, e = this,
                                n = e.chart,
                                r = e.options,
                                o = !!e.animate && n.renderer.isSVG && i(r.animation).duration,
                                a = e.visible ? "inherit" : "hidden",
                                s = r.zIndex,
                                l = e.hasRendered,
                                c = n.seriesGroup,
                                h = n.inverted;
                            t = e.plotGroup("group", "series", a, s, c), e.markerGroup = e.plotGroup("markerGroup", "markers", a, s, c), o && e.animate(!0), t.inverted = !!e.isCartesian && h, e.drawGraph && (e.drawGraph(), e.applyZones()), e.drawDataLabels && e.drawDataLabels(), e.visible && e.drawPoints(), e.drawTracker && !1 !== e.options.enableMouseTracking && e.drawTracker(), e.invertGroups(h), !1 === r.clip || e.sharedClipKey || l || t.clip(n.clipRect), o && e.animate(), l || (e.animationTimeout = k(function() {
                                e.afterAnimate()
                            }, o)), e.isDirty = !1, e.hasRendered = !0, d(e, "afterRender")
                        },
                        redraw: function() {
                            var t = this.chart,
                                e = this.isDirty || this.isDirtyData,
                                i = this.group,
                                n = this.xAxis,
                                r = this.yAxis;
                            i && (t.inverted && i.attr({
                                width: t.plotWidth,
                                height: t.plotHeight
                            }), i.animate({
                                translateX: x(n && n.left, t.plotLeft),
                                translateY: x(r && r.top, t.plotTop)
                            })), this.translate(), this.render(), e && delete this.kdTree
                        },
                        kdAxisArray: ["clientX", "plotY"],
                        searchPoint: function(t, e) {
                            var i = this.xAxis,
                                n = this.yAxis,
                                r = this.chart.inverted;
                            return this.searchKDTree({
                                clientX: r ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                                plotY: r ? n.len - t.chartX + n.pos : t.chartY - n.pos
                            }, e)
                        },
                        buildKDTree: function() {
                            function t(i, n, r) {
                                var o, a;
                                if (a = i && i.length) return o = e.kdAxisArray[n % r], i.sort(function(t, e) {
                                    return t[o] - e[o]
                                }), a = Math.floor(a / 2), {
                                    point: i[a],
                                    left: t(i.slice(0, a), n + 1, r),
                                    right: t(i.slice(a + 1), n + 1, r)
                                }
                            }
                            this.buildingKdTree = !0;
                            var e = this,
                                i = -1 < e.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                            delete e.kdTree, k(function() {
                                e.kdTree = t(e.getValidPoints(null, !e.directTouch), i, i), e.buildingKdTree = !1
                            }, e.options.kdNow ? 0 : 1)
                        },
                        searchKDTree: function(t, e) {
                            function i(t, e, s, c) {
                                var h, u, d = e.point,
                                    p = n.kdAxisArray[s % c],
                                    f = d;
                                return u = l(t[r]) && l(d[r]) ? Math.pow(t[r] - d[r], 2) : null, h = l(t[o]) && l(d[o]) ? Math.pow(t[o] - d[o], 2) : null, h = (u || 0) + (h || 0), d.dist = l(h) ? Math.sqrt(h) : Number.MAX_VALUE, d.distX = l(u) ? Math.sqrt(u) : Number.MAX_VALUE, p = t[p] - d[p], h = 0 > p ? "left" : "right", u = 0 > p ? "right" : "left", e[h] && (h = i(t, e[h], s + 1, c), f = h[a] < f[a] ? h : d), e[u] && Math.sqrt(p * p) < f[a] && (t = i(t, e[u], s + 1, c), f = t[a] < f[a] ? t : f), f
                            }
                            var n = this,
                                r = this.kdAxisArray[0],
                                o = this.kdAxisArray[1],
                                a = e ? "distX" : "dist";
                            if (e = -1 < n.options.findNearestPointBy.indexOf("y") ? 2 : 1, this.kdTree || this.buildingKdTree || this.buildKDTree(), this.kdTree) return i(t, this.kdTree, e, e)
                        }
                    })
                }(e),
                function(t) {
                    var e = t.Axis,
                        i = t.Chart,
                        n = t.correctFloat,
                        r = t.defined,
                        o = t.destroyObjectProperties,
                        a = t.each,
                        s = t.format,
                        l = t.objectEach,
                        c = t.pick,
                        h = t.Series;
                    t.StackItem = function(t, e, i, n, r) {
                        var o = t.chart.inverted;
                        this.axis = t, this.isNegative = i, this.options = e, this.x = n, this.total = null, this.points = {}, this.stack = r, this.rightCliff = this.leftCliff = 0, this.alignOptions = {
                            align: e.align || (o ? i ? "left" : "right" : "center"),
                            verticalAlign: e.verticalAlign || (o ? "middle" : i ? "bottom" : "top"),
                            y: c(e.y, o ? 4 : i ? 14 : -6),
                            x: c(e.x, o ? i ? -6 : 6 : 0)
                        }, this.textAlign = e.textAlign || (o ? i ? "right" : "left" : "center")
                    }, t.StackItem.prototype = {
                        destroy: function() {
                            o(this, this.axis)
                        },
                        render: function(t) {
                            var e = this.axis.chart,
                                i = this.options,
                                n = i.format;
                            n = n ? s(n, this, e.time) : i.formatter.call(this);
                            this.label ? this.label.attr({
                                text: n,
                                visibility: "hidden"
                            }) : this.label = e.renderer.text(n, null, null, i.useHTML).css(i.style).attr({
                                align: this.textAlign,
                                rotation: i.rotation,
                                visibility: "hidden"
                            }).add(t), this.label.labelrank = e.plotHeight
                        },
                        setOffset: function(t, e) {
                            var i = this.axis,
                                n = i.chart,
                                o = i.translate(i.usePercentage ? 100 : this.total, 0, 0, 0, 1),
                                a = i.translate(0);
                            a = r(o) && Math.abs(o - a);
                            t = n.xAxis[0].translate(this.x) + t, i = r(o) && this.getStackBox(n, this, t, o, e, a, i), (e = this.label) && i && (e.align(this.alignOptions, null, i), i = e.alignAttr, e[!1 === this.options.crop || n.isInsidePlot(i.x, i.y) ? "show" : "hide"](!0))
                        },
                        getStackBox: function(t, e, i, n, r, o, a) {
                            var s = e.axis.reversed,
                                l = t.inverted;
                            return t = a.height + a.pos - (l ? t.plotLeft : t.plotTop), e = e.isNegative && !s || !e.isNegative && s, {
                                x: l ? e ? n : n - o : i,
                                y: l ? t - i - r : e ? t - n - o : t - n,
                                width: l ? o : r,
                                height: l ? r : o
                            }
                        }
                    }, i.prototype.getStacks = function() {
                        var t = this;
                        a(t.yAxis, function(t) {
                            t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
                        }), a(t.series, function(e) {
                            !e.options.stacking || !0 !== e.visible && !1 !== t.options.chart.ignoreHiddenSeries || (e.stackKey = e.type + c(e.options.stack, ""))
                        })
                    }, e.prototype.buildStacks = function() {
                        var t, e = this.series,
                            i = c(this.options.reversedStacks, !0),
                            n = e.length;
                        if (!this.isXAxis) {
                            for (this.usePercentage = !1, t = n; t--;) e[i ? t : n - t - 1].setStackedPoints();
                            for (t = 0; t < n; t++) e[t].modifyStacks()
                        }
                    }, e.prototype.renderStackTotals = function() {
                        var t = this.chart,
                            e = t.renderer,
                            i = this.stacks,
                            n = this.stackTotalGroup;
                        n || (this.stackTotalGroup = n = e.g("stack-labels").attr({
                            visibility: "visible",
                            zIndex: 6
                        }).add()), n.translate(t.plotLeft, t.plotTop), l(i, function(t) {
                            l(t, function(t) {
                                t.render(n)
                            })
                        })
                    }, e.prototype.resetStacks = function() {
                        var t = this,
                            e = t.stacks;
                        t.isXAxis || l(e, function(e) {
                            l(e, function(i, n) {
                                i.touched < t.stacksTouched ? (i.destroy(), delete e[n]) : (i.total = null, i.cumulative = null)
                            })
                        })
                    }, e.prototype.cleanStacks = function() {
                        var t;
                        this.isXAxis || (this.oldStacks && (t = this.stacks = this.oldStacks), l(t, function(t) {
                            l(t, function(t) {
                                t.cumulative = t.total
                            })
                        }))
                    }, h.prototype.setStackedPoints = function() {
                        if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                            var e, i, o, a, s, l, h, u = this.processedXData,
                                d = this.processedYData,
                                p = [],
                                f = d.length,
                                g = this.options,
                                m = g.threshold,
                                v = c(g.startFromThreshold && m, 0),
                                y = g.stack,
                                x = (g = g.stacking, this.stackKey),
                                b = "-" + x,
                                w = this.negStacks,
                                _ = this.yAxis,
                                k = _.stacks,
                                S = _.oldStacks;
                            for (_.stacksTouched += 1, s = 0; s < f; s++) l = u[s], h = d[s], e = this.getStackIndicator(e, l, this.index), a = e.key, o = (i = w && h < (v ? 0 : m)) ? b : x, k[o] || (k[o] = {}), k[o][l] || (S[o] && S[o][l] ? (k[o][l] = S[o][l], k[o][l].total = null) : k[o][l] = new t.StackItem(_, _.options.stackLabels, i, l, y)), o = k[o][l], null !== h ? (o.points[a] = o.points[this.index] = [c(o.cumulative, v)], r(o.cumulative) || (o.base = a), o.touched = _.stacksTouched, 0 < e.index && !1 === this.singleStacks && (o.points[a][0] = o.points[this.index + "," + l + ",0"][0])) : o.points[a] = o.points[this.index] = null, "percent" === g ? (i = i ? x : b, w && k[i] && k[i][l] ? (i = k[i][l], o.total = i.total = Math.max(i.total, o.total) + Math.abs(h) || 0) : o.total = n(o.total + (Math.abs(h) || 0))) : o.total = n(o.total + (h || 0)), o.cumulative = c(o.cumulative, v) + (h || 0), null !== h && (o.points[a].push(o.cumulative), p[s] = o.cumulative);
                            "percent" === g && (_.usePercentage = !0), this.stackedYData = p, _.oldStacks = {}
                        }
                    }, h.prototype.modifyStacks = function() {
                        var t, e = this,
                            i = e.stackKey,
                            n = e.yAxis.stacks,
                            r = e.processedXData,
                            o = e.options.stacking;
                        e[o + "Stacker"] && a([i, "-" + i], function(i) {
                            for (var a, s, l = r.length; l--;) a = r[l], t = e.getStackIndicator(t, a, e.index, i), (s = (a = n[i] && n[i][a]) && a.points[t.key]) && e[o + "Stacker"](s, a, l)
                        })
                    }, h.prototype.percentStacker = function(t, e, i) {
                        e = e.total ? 100 / e.total : 0, t[0] = n(t[0] * e), t[1] = n(t[1] * e), this.stackedYData[i] = t[1]
                    }, h.prototype.getStackIndicator = function(t, e, i, n) {
                        return !r(t) || t.x !== e || n && t.key !== n ? t = {
                            x: e,
                            index: 0,
                            key: n
                        } : t.index++, t.key = [i, e, t.index].join(), t
                    }
                }(e),
                function(t) {
                    var e = t.addEvent,
                        i = t.animate,
                        n = t.Axis,
                        r = t.createElement,
                        o = t.css,
                        a = t.defined,
                        s = t.each,
                        l = t.erase,
                        c = t.extend,
                        h = t.fireEvent,
                        u = t.inArray,
                        d = t.isNumber,
                        p = t.isObject,
                        f = t.isArray,
                        g = t.merge,
                        m = t.objectEach,
                        v = t.pick,
                        y = t.Point,
                        x = t.Series,
                        b = t.seriesTypes,
                        w = t.setAnimation,
                        _ = t.splat;
                    c(t.Chart.prototype, {
                        addSeries: function(t, e, i) {
                            var n, r = this;
                            return t && (e = v(e, !0), h(r, "addSeries", {
                                options: t
                            }, function() {
                                n = r.initSeries(t), r.isDirtyLegend = !0, r.linkSeries(), h(r, "afterAddSeries"), e && r.redraw(i)
                            })), n
                        },
                        addAxis: function(t, e, i, r) {
                            var o = e ? "xAxis" : "yAxis",
                                a = this.options;
                            return t = g(t, {
                                index: this[o].length,
                                isX: e
                            }), e = new n(this, t), a[o] = _(a[o] || {}), a[o].push(t), v(i, !0) && this.redraw(r), e
                        },
                        showLoading: function(t) {
                            var n = this,
                                a = n.options,
                                s = n.loadingDiv,
                                l = a.loading,
                                h = function() {
                                    s && o(s, {
                                        left: n.plotLeft + "px",
                                        top: n.plotTop + "px",
                                        width: n.plotWidth + "px",
                                        height: n.plotHeight + "px"
                                    })
                                };
                            s || (n.loadingDiv = s = r("div", {
                                className: "highcharts-loading highcharts-loading-hidden"
                            }, null, n.container), n.loadingSpan = r("span", {
                                className: "highcharts-loading-inner"
                            }, null, s), e(n, "redraw", h)), s.className = "highcharts-loading", n.loadingSpan.innerHTML = t || a.lang.loading, o(s, c(l.style, {
                                zIndex: 10
                            })), o(n.loadingSpan, l.labelStyle), n.loadingShown || (o(s, {
                                opacity: 0,
                                display: ""
                            }), i(s, {
                                opacity: l.style.opacity || .5
                            }, {
                                duration: l.showDuration || 0
                            })), n.loadingShown = !0, h()
                        },
                        hideLoading: function() {
                            var t = this.options,
                                e = this.loadingDiv;
                            e && (e.className = "highcharts-loading highcharts-loading-hidden", i(e, {
                                opacity: 0
                            }, {
                                duration: t.loading.hideDuration || 100,
                                complete: function() {
                                    o(e, {
                                        display: "none"
                                    })
                                }
                            })), this.loadingShown = !1
                        },
                        propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
                        propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
                        update: function(t, e, i, n) {
                            var r, o, l = this,
                                c = {
                                    credits: "addCredits",
                                    title: "setTitle",
                                    subtitle: "setSubtitle"
                                },
                                p = t.chart,
                                f = [];
                            h(l, "update", {
                                options: t
                            }), p && (g(!0, l.options.chart, p), "className" in p && l.setClassName(p.className), "reflow" in p && l.setReflow(p.reflow), ("inverted" in p || "polar" in p || "type" in p) && (l.propFromSeries(), r = !0), "alignTicks" in p && (r = !0), m(p, function(t, e) {
                                -1 !== u("chart." + e, l.propsRequireUpdateSeries) && (o = !0), -1 !== u(e, l.propsRequireDirtyBox) && (l.isDirtyBox = !0)
                            }), "style" in p && l.renderer.setStyle(p.style)), t.colors && (this.options.colors = t.colors), t.plotOptions && g(!0, this.options.plotOptions, t.plotOptions), m(t, function(t, e) {
                                l[e] && "function" === typeof l[e].update ? l[e].update(t, !1) : "function" === typeof l[c[e]] && l[c[e]](t), "chart" !== e && -1 !== u(e, l.propsRequireUpdateSeries) && (o = !0)
                            }), s("xAxis yAxis zAxis series colorAxis pane".split(" "), function(e) {
                                var n;
                                t[e] && ("series" === e && (n = [], s(l[e], function(t, e) {
                                    t.options.isInternal || n.push(e)
                                })), s(_(t[e]), function(t, r) {
                                    (r = a(t.id) && l.get(t.id) || l[e][n ? n[r] : r]) && r.coll === e && (r.update(t, !1), i && (r.touched = !0)), !r && i && ("series" === e ? l.addSeries(t, !1).touched = !0 : "xAxis" !== e && "yAxis" !== e || (l.addAxis(t, "xAxis" === e, !1).touched = !0))
                                }), i && s(l[e], function(t) {
                                    t.touched || t.options.isInternal ? delete t.touched : f.push(t)
                                }))
                            }), s(f, function(t) {
                                t.remove && t.remove(!1)
                            }), r && s(l.axes, function(t) {
                                t.update({}, !1)
                            }), o && s(l.series, function(t) {
                                t.update({}, !1)
                            }), t.loading && g(!0, l.options.loading, t.loading), r = p && p.width, p = p && p.height, d(r) && r !== l.chartWidth || d(p) && p !== l.chartHeight ? l.setSize(r, p, n) : v(e, !0) && l.redraw(n), h(l, "afterUpdate", {
                                options: t
                            })
                        },
                        setSubtitle: function(t) {
                            this.setTitle(void 0, t)
                        }
                    }), c(y.prototype, {
                        update: function(t, e, i, n) {
                            function r() {
                                a.applyOptions(t), null === a.y && l && (a.graphic = l.destroy()), p(t, !0) && (l && l.element && t && t.marker && void 0 !== t.marker.symbol && (a.graphic = l.destroy()), t && t.dataLabels && a.dataLabel && (a.dataLabel = a.dataLabel.destroy()), a.connector && (a.connector = a.connector.destroy())), o = a.index, s.updateParallelArrays(a, o), h.data[o] = p(h.data[o], !0) || p(t, !0) ? a.options : v(t, h.data[o]), s.isDirty = s.isDirtyData = !0, !s.fixedBox && s.hasCartesianSeries && (c.isDirtyBox = !0), "point" === h.legendType && (c.isDirtyLegend = !0), e && c.redraw(i)
                            }
                            var o, a = this,
                                s = a.series,
                                l = a.graphic,
                                c = s.chart,
                                h = s.options;
                            e = v(e, !0), !1 === n ? r() : a.firePointEvent("update", {
                                options: t
                            }, r)
                        },
                        remove: function(t, e) {
                            this.series.removePoint(u(this, this.series.data), t, e)
                        }
                    }), c(x.prototype, {
                        addPoint: function(t, e, i, n) {
                            var r, o, a, s, l = this.options,
                                c = this.data,
                                h = this.chart,
                                u = this.xAxis,
                                d = (u = u && u.hasNames && u.names, l.data),
                                p = this.xData;
                            if (e = v(e, !0), r = {
                                    series: this
                                }, this.pointClass.prototype.applyOptions.apply(r, [t]), s = r.x, a = p.length, this.requireSorting && s < p[a - 1])
                                for (o = !0; a && p[a - 1] > s;) a--;
                            this.updateParallelArrays(r, "splice", a, 0, 0), this.updateParallelArrays(r, a), u && r.name && (u[s] = r.name), d.splice(a, 0, t), o && (this.data.splice(a, 0, null), this.processData()), "point" === l.legendType && this.generatePoints(), i && (c[0] && c[0].remove ? c[0].remove(!1) : (c.shift(), this.updateParallelArrays(r, "shift"), d.shift())), this.isDirtyData = this.isDirty = !0, e && h.redraw(n)
                        },
                        removePoint: function(t, e, i) {
                            var n = this,
                                r = n.data,
                                o = r[t],
                                a = n.points,
                                s = n.chart,
                                l = function() {
                                    a && a.length === r.length && a.splice(t, 1), r.splice(t, 1), n.options.data.splice(t, 1), n.updateParallelArrays(o || {
                                        series: n
                                    }, "splice", t, 1), o && o.destroy(), n.isDirty = !0, n.isDirtyData = !0, e && s.redraw()
                                };
                            w(i, s), e = v(e, !0), o ? o.firePointEvent("remove", null, l) : l()
                        },
                        remove: function(t, e, i) {
                            function n() {
                                r.destroy(), r.remove = null, o.isDirtyLegend = o.isDirtyBox = !0, o.linkSeries(), v(t, !0) && o.redraw(e)
                            }
                            var r = this,
                                o = r.chart;
                            !1 !== i ? h(r, "remove", null, n) : n()
                        },
                        update: function(e, i) {
                            var n, r = this,
                                o = r.chart,
                                a = r.userOptions,
                                l = r.oldType || r.type,
                                d = e.type || a.type || o.options.chart.type,
                                p = b[l].prototype,
                                f = ["group", "markerGroup", "dataLabelsGroup"],
                                m = ["navigatorSeries", "baseSeries"],
                                y = r.finishedAnimating && {
                                    animation: !1
                                },
                                x = ["data", "name", "turboThreshold"],
                                w = t.keys(e),
                                _ = 0 < w.length;
                            if (s(w, function(t) {
                                    -1 === u(t, x) && (_ = !1)
                                }), _) e.data && this.setData(e.data, !1), e.name && this.setName(e.name, !1);
                            else {
                                for (n in m = f.concat(m), s(m, function(t) {
                                        m[t] = r[t], delete r[t]
                                    }), e = g(a, y, {
                                        index: r.index,
                                        pointStart: v(a.pointStart, r.xData[0])
                                    }, {
                                        data: r.options.data
                                    }, e), r.remove(!1, null, !1), p) r[n] = void 0;
                                b[d || l] ? c(r, b[d || l].prototype) : t.error(17, !0), s(m, function(t) {
                                    r[t] = m[t]
                                }), r.init(o, e), e.zIndex !== a.zIndex && s(f, function(t) {
                                    r[t] && r[t].attr({
                                        zIndex: e.zIndex
                                    })
                                }), r.oldType = l, o.linkSeries()
                            }
                            h(this, "afterUpdate"), v(i, !0) && o.redraw(!!_ && void 0)
                        },
                        setName: function(t) {
                            this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0
                        }
                    }), c(n.prototype, {
                        update: function(t, e) {
                            var i = this.chart,
                                n = t && t.events || {};
                            t = g(this.userOptions, t), i.options[this.coll].indexOf && (i.options[this.coll][i.options[this.coll].indexOf(this.userOptions)] = t), m(i.options[this.coll].events, function(t, e) {
                                "undefined" === typeof n[e] && (n[e] = void 0)
                            }), this.destroy(!0), this.init(i, c(t, {
                                events: n
                            })), i.isDirtyBox = !0, v(e, !0) && i.redraw()
                        },
                        remove: function(t) {
                            for (var e = this.chart, i = this.coll, n = this.series, r = n.length; r--;) n[r] && n[r].remove(!1);
                            l(e.axes, this), l(e[i], this), f(e.options[i]) ? e.options[i].splice(this.options.index, 1) : delete e.options[i], s(e[i], function(t, e) {
                                t.options.index = t.userOptions.index = e
                            }), this.destroy(), e.isDirtyBox = !0, v(t, !0) && e.redraw()
                        },
                        setTitle: function(t, e) {
                            this.update({
                                title: t
                            }, e)
                        },
                        setCategories: function(t, e) {
                            this.update({
                                categories: t
                            }, e)
                        }
                    })
                }(e),
                function(t) {
                    var e = t.color,
                        i = t.each,
                        n = t.map,
                        r = t.pick,
                        o = t.Series,
                        a = t.seriesType;
                    a("area", "line", {
                        softThreshold: !1,
                        threshold: 0
                    }, {
                        singleStacks: !1,
                        getStackPoints: function(e) {
                            var o, a, s = [],
                                l = [],
                                c = this.xAxis,
                                h = this.yAxis,
                                u = h.stacks[this.stackKey],
                                d = {},
                                p = this.index,
                                f = h.series,
                                g = f.length,
                                m = r(h.options.reversedStacks, !0) ? 1 : -1;
                            if (e = e || this.points, this.options.stacking) {
                                for (a = 0; a < e.length; a++) e[a].leftNull = e[a].rightNull = null, d[e[a].x] = e[a];
                                t.objectEach(u, function(t, e) {
                                    null !== t.total && l.push(e)
                                }), l.sort(function(t, e) {
                                    return t - e
                                }), o = n(f, function() {
                                    return this.visible
                                }), i(l, function(t, e) {
                                    var n, r, f = 0;
                                    if (d[t] && !d[t].isNull) s.push(d[t]), i([-1, 1], function(i) {
                                        var s = 1 === i ? "rightNull" : "leftNull",
                                            c = 0,
                                            h = u[l[e + i]];
                                        if (h)
                                            for (a = p; 0 <= a && a < g;) n = h.points[a], n || (a === p ? d[t][s] = !0 : o[a] && (r = u[t].points[a]) && (c -= r[1] - r[0])), a += m;
                                        d[t][1 === i ? "rightCliff" : "leftCliff"] = c
                                    });
                                    else {
                                        for (a = p; 0 <= a && a < g;) {
                                            if (n = u[t].points[a]) {
                                                f = n[1];
                                                break
                                            }
                                            a += m
                                        }
                                        f = h.translate(f, 0, 1, 0, 1), s.push({
                                            isNull: !0,
                                            plotX: c.translate(t, 0, 0, 0, 1),
                                            x: t,
                                            plotY: f,
                                            yBottom: f
                                        })
                                    }
                                })
                            }
                            return s
                        },
                        getGraphPath: function(t) {
                            var e, i, n, a, s = o.prototype.getGraphPath,
                                l = this.options,
                                c = l.stacking,
                                h = this.yAxis,
                                u = [],
                                d = [],
                                p = this.index,
                                f = h.stacks[this.stackKey],
                                g = l.threshold,
                                m = h.getThreshold(l.threshold),
                                v = (l = l.connectNulls || "percent" === c, function(e, i, r) {
                                    var o = t[e];
                                    e = c && f[o.x].points[p];
                                    var a = o[r + "Null"] || 0;
                                    r = o[r + "Cliff"] || 0;
                                    var s, l;
                                    o = !0;
                                    r || a ? (s = (a ? e[0] : e[1]) + r, l = e[0] + r, o = !!a) : !c && t[i] && t[i].isNull && (s = l = g), void 0 !== s && (d.push({
                                        plotX: n,
                                        plotY: null === s ? m : h.getThreshold(s),
                                        isNull: o,
                                        isCliff: !0
                                    }), u.push({
                                        plotX: n,
                                        plotY: null === l ? m : h.getThreshold(l),
                                        doCurve: !1
                                    }))
                                });
                            for (t = t || this.points, c && (t = this.getStackPoints(t)), e = 0; e < t.length; e++) i = t[e].isNull, n = r(t[e].rectPlotX, t[e].plotX), a = r(t[e].yBottom, m), (!i || l) && (l || v(e, e - 1, "left"), i && !c && l || (d.push(t[e]), u.push({
                                x: e,
                                plotX: n,
                                plotY: a
                            })), l || v(e, e + 1, "right"));
                            return e = s.call(this, d, !0, !0), u.reversed = !0, i = s.call(this, u, !0, !0), i.length && (i[0] = "L"), i = e.concat(i), s = s.call(this, d, !1, l), i.xMap = e.xMap, this.areaPath = i, s
                        },
                        drawGraph: function() {
                            this.areaPath = [], o.prototype.drawGraph.apply(this);
                            var t = this,
                                n = this.areaPath,
                                a = this.options,
                                s = [
                                    ["area", "highcharts-area", this.color, a.fillColor]
                                ];
                            i(this.zones, function(e, i) {
                                s.push(["zone-area-" + i, "highcharts-area highcharts-zone-area-" + i + " " + e.className, e.color || t.color, e.fillColor || a.fillColor])
                            }), i(s, function(i) {
                                var o = i[0],
                                    s = t[o];
                                s ? (s.endX = t.preventGraphAnimation ? null : n.xMap, s.animate({
                                    d: n
                                })) : (s = t[o] = t.chart.renderer.path(n).addClass(i[1]).attr({
                                    fill: r(i[3], e(i[2]).setOpacity(r(a.fillOpacity, .75)).get()),
                                    zIndex: 0
                                }).add(t.group), s.isArea = !0), s.startX = n.xMap, s.shiftUnit = a.step ? 2 : 1
                            })
                        },
                        drawLegendSymbol: t.LegendSymbolMixin.drawRectangle
                    })
                }(e),
                function(t) {
                    var e = t.pick;
                    t = t.seriesType, t("spline", "line", {}, {
                        getPointSpline: function(t, i, n) {
                            var r, o, a, s, l = i.plotX,
                                c = i.plotY,
                                h = t[n - 1];
                            if (n = t[n + 1], h && !h.isNull && !1 !== h.doCurve && !i.isCliff && n && !n.isNull && !1 !== n.doCurve && !i.isCliff) {
                                t = h.plotY, a = n.plotX, n = n.plotY;
                                var u = 0;
                                r = (1.5 * l + h.plotX) / 2.5, o = (1.5 * c + t) / 2.5, a = (1.5 * l + a) / 2.5, s = (1.5 * c + n) / 2.5, a !== r && (u = (s - o) * (a - l) / (a - r) + c - s), o += u, s += u, o > t && o > c ? (o = Math.max(t, c), s = 2 * c - o) : o < t && o < c && (o = Math.min(t, c), s = 2 * c - o), s > n && s > c ? (s = Math.max(n, c), o = 2 * c - s) : s < n && s < c && (s = Math.min(n, c), o = 2 * c - s), i.rightContX = a, i.rightContY = s
                            }
                            return i = ["C", e(h.rightContX, h.plotX), e(h.rightContY, h.plotY), e(r, l), e(o, c), l, c], h.rightContX = h.rightContY = null, i
                        }
                    })
                }(e),
                function(t) {
                    var e = t.seriesTypes.area.prototype,
                        i = t.seriesType;
                    i("areaspline", "spline", t.defaultPlotOptions.area, {
                        getStackPoints: e.getStackPoints,
                        getGraphPath: e.getGraphPath,
                        drawGraph: e.drawGraph,
                        drawLegendSymbol: t.LegendSymbolMixin.drawRectangle
                    })
                }(e),
                function(t) {
                    var e = t.animObject,
                        i = t.color,
                        n = t.each,
                        r = t.extend,
                        o = t.defined,
                        a = t.isNumber,
                        s = t.merge,
                        l = t.pick,
                        c = t.Series,
                        h = t.seriesType,
                        u = t.svg;
                    h("column", "line", {
                        borderRadius: 0,
                        crisp: !0,
                        groupPadding: .2,
                        marker: null,
                        pointPadding: .1,
                        minPointLength: 0,
                        cropThreshold: 50,
                        pointRange: null,
                        states: {
                            hover: {
                                halo: !1,
                                brightness: .1
                            },
                            select: {
                                color: "#cccccc",
                                borderColor: "#000000"
                            }
                        },
                        dataLabels: {
                            align: null,
                            verticalAlign: null,
                            y: null
                        },
                        softThreshold: !1,
                        startFromThreshold: !0,
                        stickyTracking: !1,
                        tooltip: {
                            distance: 6
                        },
                        threshold: 0,
                        borderColor: "#ffffff"
                    }, {
                        cropShoulder: 0,
                        directTouch: !0,
                        trackerGroups: ["group", "dataLabelsGroup"],
                        negStacks: !0,
                        init: function() {
                            c.prototype.init.apply(this, arguments);
                            var t = this,
                                e = t.chart;
                            e.hasRendered && n(e.series, function(e) {
                                e.type === t.type && (e.isDirty = !0)
                            })
                        },
                        getColumnMetrics: function() {
                            var t, e = this,
                                i = e.options,
                                r = e.xAxis,
                                o = e.yAxis,
                                a = r.options.reversedStacks,
                                s = (a = r.reversed && !a || !r.reversed && a, {}),
                                c = 0;
                            !1 === i.grouping ? c = 1 : n(e.chart.series, function(i) {
                                var n, r = i.options,
                                    a = i.yAxis;
                                i.type !== e.type || !i.visible && e.chart.options.chart.ignoreHiddenSeries || o.len !== a.len || o.pos !== a.pos || (r.stacking ? (t = i.stackKey, void 0 === s[t] && (s[t] = c++), n = s[t]) : !1 !== r.grouping && (n = c++), i.columnIndex = n)
                            });
                            var h = Math.min(Math.abs(r.transA) * (r.ordinalSlope || i.pointRange || r.closestPointRange || r.tickInterval || 1), r.len),
                                u = h * i.groupPadding,
                                d = (h - 2 * u) / (c || 1);
                            i = Math.min(i.maxPointWidth || r.len, l(i.pointWidth, d * (1 - 2 * i.pointPadding)));
                            return e.columnMetrics = {
                                width: i,
                                offset: (d - i) / 2 + (u + ((e.columnIndex || 0) + (a ? 1 : 0)) * d - h / 2) * (a ? -1 : 1)
                            }, e.columnMetrics
                        },
                        crispCol: function(t, e, i, n) {
                            var r = this.chart,
                                o = this.borderWidth,
                                a = -(o % 2 ? .5 : 0);
                            o = o % 2 ? .5 : 1;
                            return r.inverted && r.renderer.isVML && (o += 1), this.options.crisp && (i = Math.round(t + i) + a, t = Math.round(t) + a, i -= t), n = Math.round(e + n) + o, a = .5 >= Math.abs(e) && .5 < n, e = Math.round(e) + o, n -= e, a && n && (--e, n += 1), {
                                x: t,
                                y: e,
                                width: i,
                                height: n
                            }
                        },
                        translate: function() {
                            var t = this,
                                e = t.chart,
                                i = t.options,
                                r = t.dense = 2 > t.closestPointRange * t.xAxis.transA,
                                a = (r = t.borderWidth = l(i.borderWidth, r ? 0 : 1), t.yAxis),
                                s = i.threshold,
                                h = t.translatedThreshold = a.getThreshold(s),
                                u = l(i.minPointLength, 5),
                                d = t.getColumnMetrics(),
                                p = d.width,
                                f = t.barW = Math.max(p, 1 + 2 * r),
                                g = t.pointXOffset = d.offset;
                            e.inverted && (h -= .5), i.pointPadding && (f = Math.ceil(f)), c.prototype.translate.apply(t), n(t.points, function(i) {
                                var n, r = l(i.yBottom, h),
                                    c = 999 + Math.abs(r),
                                    d = p,
                                    m = (c = Math.min(Math.max(-c, i.plotY), a.len + c), i.plotX + g),
                                    v = f,
                                    y = Math.min(c, r),
                                    x = Math.max(c, r) - y;
                                u && Math.abs(x) < u && (x = u, n = !a.reversed && !i.negative || a.reversed && i.negative, i.y === s && t.dataMax <= s && a.min < s && (n = !n), y = Math.abs(y - h) > u ? r - u : h - (n ? u : 0)), o(i.options.pointWidth) && (d = v = Math.ceil(i.options.pointWidth), m -= Math.round((d - p) / 2)), i.barX = m, i.pointWidth = d, i.tooltipPos = e.inverted ? [a.len + a.pos - e.plotLeft - c, t.xAxis.len - m - v / 2, x] : [m + v / 2, c + a.pos - e.plotTop, x], i.shapeType = "rect", i.shapeArgs = t.crispCol.apply(t, i.isNull ? [m, h, v, 0] : [m, y, v, x])
                            })
                        },
                        getSymbol: t.noop,
                        drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
                        drawGraph: function() {
                            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
                        },
                        pointAttribs: function(t, e) {
                            var n, r = this.options,
                                o = this.pointAttrToOptions || {};
                            n = o.stroke || "borderColor";
                            var a = o["stroke-width"] || "borderWidth",
                                l = t && t.color || this.color,
                                c = t && t[n] || r[n] || this.color || l,
                                h = t && t[a] || r[a] || this[a] || 0;
                            o = r.dashStyle;
                            return t && this.zones.length && (l = t.getZone(), l = t.options.color || l && l.color || this.color), e && (t = s(r.states[e], t.options.states && t.options.states[e] || {}), e = t.brightness, l = t.color || void 0 !== e && i(l).brighten(t.brightness).get() || l, c = t[n] || c, h = t[a] || h, o = t.dashStyle || o), n = {
                                fill: l,
                                stroke: c,
                                "stroke-width": h
                            }, o && (n.dashstyle = o), n
                        },
                        drawPoints: function() {
                            var t, e = this,
                                i = this.chart,
                                r = e.options,
                                o = i.renderer,
                                l = r.animationLimit || 250;
                            n(e.points, function(n) {
                                var c = n.graphic,
                                    h = c && i.pointCount < l ? "animate" : "attr";
                                a(n.plotY) && null !== n.y ? (t = n.shapeArgs, c ? c[h](s(t)) : n.graphic = c = o[n.shapeType](t).add(n.group || e.group), r.borderRadius && c.attr({
                                    r: r.borderRadius
                                }), c[h](e.pointAttribs(n, n.selected && "select")).shadow(r.shadow, null, r.stacking && !r.borderRadius), c.addClass(n.getClassName(), !0)) : c && (n.graphic = c.destroy())
                            })
                        },
                        animate: function(t) {
                            var i, n = this,
                                o = this.yAxis,
                                a = n.options,
                                s = this.chart.inverted,
                                l = {},
                                c = s ? "translateX" : "translateY";
                            u && (t ? (l.scaleY = .001, t = Math.min(o.pos + o.len, Math.max(o.pos, o.toPixels(a.threshold))), s ? l.translateX = t - o.len : l.translateY = t, n.group.attr(l)) : (i = n.group.attr(c), n.group.animate({
                                scaleY: 1
                            }, r(e(n.options.animation), {
                                step: function(t, e) {
                                    l[c] = i + e.pos * (o.pos - i), n.group.attr(l)
                                }
                            })), n.animate = null))
                        },
                        remove: function() {
                            var t = this,
                                e = t.chart;
                            e.hasRendered && n(e.series, function(e) {
                                e.type === t.type && (e.isDirty = !0)
                            }), c.prototype.remove.apply(t, arguments)
                        }
                    })
                }(e),
                function(t) {
                    t = t.seriesType, t("bar", "column", null, {
                        inverted: !0
                    })
                }(e),
                function(t) {
                    var e = t.Series;
                    t = t.seriesType, t("scatter", "line", {
                        lineWidth: 0,
                        findNearestPointBy: "xy",
                        marker: {
                            enabled: !0
                        },
                        tooltip: {
                            headerFormat: '<span style="color:{point.color}">â—</span> <span style="font-size: 0.85em"> {series.name}</span><br/>',
                            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                        }
                    }, {
                        sorted: !1,
                        requireSorting: !1,
                        noSharedTooltip: !0,
                        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
                        takeOrdinalPosition: !1,
                        drawGraph: function() {
                            this.options.lineWidth && e.prototype.drawGraph.call(this)
                        }
                    })
                }(e),
                function(t) {
                    var e = t.deg2rad,
                        i = t.isNumber,
                        n = t.pick,
                        r = t.relativeLength;
                    t.CenteredSeriesMixin = {
                        getCenter: function() {
                            var t, e, i = this.options,
                                o = this.chart,
                                a = 2 * (i.slicedOffset || 0),
                                s = o.plotWidth - 2 * a,
                                l = (o = o.plotHeight - 2 * a, i.center),
                                c = (l = [n(l[0], "50%"), n(l[1], "50%"), i.size || "100%", i.innerSize || 0], Math.min(s, o));
                            for (t = 0; 4 > t; ++t) e = l[t], i = 2 > t || 2 === t && /%$/.test(e), l[t] = r(e, [s, o, c, l[2]][t]) + (i ? a : 0);
                            return l[3] > l[2] && (l[3] = l[2]), l
                        },
                        getStartAndEndRadians: function(t, n) {
                            return t = i(t) ? t : 0, n = i(n) && n > t && 360 > n - t ? n : t + 360, {
                                start: e * (t + -90),
                                end: e * (n + -90)
                            }
                        }
                    }
                }(e),
                function(t) {
                    var e = t.addEvent,
                        i = t.CenteredSeriesMixin,
                        n = t.defined,
                        r = t.each,
                        o = t.extend,
                        a = i.getStartAndEndRadians,
                        s = t.inArray,
                        l = t.noop,
                        c = t.pick,
                        h = t.Point,
                        u = t.Series,
                        d = t.seriesType,
                        p = t.setAnimation;
                    d("pie", "line", {
                        center: [null, null],
                        clip: !1,
                        colorByPoint: !0,
                        dataLabels: {
                            allowOverlap: !0,
                            distance: 30,
                            enabled: !0,
                            formatter: function() {
                                return this.point.isNull ? void 0 : this.point.name
                            },
                            x: 0
                        },
                        ignoreHiddenPoint: !0,
                        legendType: "point",
                        marker: null,
                        size: null,
                        showInLegend: !1,
                        slicedOffset: 10,
                        stickyTracking: !1,
                        tooltip: {
                            followPointer: !0
                        },
                        borderColor: "#ffffff",
                        borderWidth: 1,
                        states: {
                            hover: {
                                brightness: .1
                            }
                        }
                    }, {
                        isCartesian: !1,
                        requireSorting: !1,
                        directTouch: !0,
                        noSharedTooltip: !0,
                        trackerGroups: ["group", "dataLabelsGroup"],
                        axisTypes: [],
                        pointAttribs: t.seriesTypes.column.prototype.pointAttribs,
                        animate: function(t) {
                            var e = this,
                                i = e.points,
                                n = e.startAngleRad;
                            t || (r(i, function(t) {
                                var i = t.graphic,
                                    r = t.shapeArgs;
                                i && (i.attr({
                                    r: t.startR || e.center[3] / 2,
                                    start: n,
                                    end: n
                                }), i.animate({
                                    r: r.r,
                                    start: r.start,
                                    end: r.end
                                }, e.options.animation))
                            }), e.animate = null)
                        },
                        updateTotals: function() {
                            var t, e, i = 0,
                                n = this.points,
                                r = n.length,
                                o = this.options.ignoreHiddenPoint;
                            for (t = 0; t < r; t++) e = n[t], i += o && !e.visible ? 0 : e.isNull ? 0 : e.y;
                            for (this.total = i, t = 0; t < r; t++) e = n[t], e.percentage = 0 < i && (e.visible || !o) ? e.y / i * 100 : 0, e.total = i
                        },
                        generatePoints: function() {
                            u.prototype.generatePoints.call(this), this.updateTotals()
                        },
                        translate: function(t) {
                            this.generatePoints();
                            var e, i, n, r, o, s, l = 0,
                                h = this.options,
                                u = h.slicedOffset,
                                d = u + (h.borderWidth || 0),
                                p = a(h.startAngle, h.endAngle),
                                f = this.startAngleRad = p.start,
                                g = (p = (this.endAngleRad = p.end) - f, this.points),
                                m = h.dataLabels.distance,
                                v = (h = h.ignoreHiddenPoint, g.length);
                            for (t || (this.center = t = this.getCenter()), this.getX = function(e, i, r) {
                                    return n = Math.asin(Math.min((e - t[1]) / (t[2] / 2 + r.labelDistance), 1)), t[0] + (i ? -1 : 1) * Math.cos(n) * (t[2] / 2 + r.labelDistance)
                                }, o = 0; o < v; o++) s = g[o], s.labelDistance = c(s.options.dataLabels && s.options.dataLabels.distance, m), this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, s.labelDistance), e = f + l * p, h && !s.visible || (l += s.percentage / 100), i = f + l * p, s.shapeType = "arc", s.shapeArgs = {
                                x: t[0],
                                y: t[1],
                                r: t[2] / 2,
                                innerR: t[3] / 2,
                                start: Math.round(1e3 * e) / 1e3,
                                end: Math.round(1e3 * i) / 1e3
                            }, n = (i + e) / 2, n > 1.5 * Math.PI ? n -= 2 * Math.PI : n < -Math.PI / 2 && (n += 2 * Math.PI), s.slicedTranslation = {
                                translateX: Math.round(Math.cos(n) * u),
                                translateY: Math.round(Math.sin(n) * u)
                            }, i = Math.cos(n) * t[2] / 2, r = Math.sin(n) * t[2] / 2, s.tooltipPos = [t[0] + .7 * i, t[1] + .7 * r], s.half = n < -Math.PI / 2 || n > Math.PI / 2 ? 1 : 0, s.angle = n, e = Math.min(d, s.labelDistance / 5), s.labelPos = [t[0] + i + Math.cos(n) * s.labelDistance, t[1] + r + Math.sin(n) * s.labelDistance, t[0] + i + Math.cos(n) * e, t[1] + r + Math.sin(n) * e, t[0] + i, t[1] + r, 0 > s.labelDistance ? "center" : s.half ? "right" : "left", n]
                        },
                        drawGraph: null,
                        drawPoints: function() {
                            var t, e, i, n, a = this,
                                s = a.chart.renderer,
                                l = a.options.shadow;
                            l && !a.shadowGroup && (a.shadowGroup = s.g("shadow").add(a.group)), r(a.points, function(r) {
                                if (e = r.graphic, r.isNull) e && (r.graphic = e.destroy());
                                else {
                                    n = r.shapeArgs, t = r.getTranslate();
                                    var c = r.shadowGroup;
                                    l && !c && (c = r.shadowGroup = s.g("shadow").add(a.shadowGroup)), c && c.attr(t), i = a.pointAttribs(r, r.selected && "select"), e ? e.setRadialReference(a.center).attr(i).animate(o(n, t)) : (r.graphic = e = s[r.shapeType](n).setRadialReference(a.center).attr(t).add(a.group), e.attr(i).attr({
                                        "stroke-linejoin": "round"
                                    }).shadow(l, c)), e.attr({
                                        visibility: r.visible ? "inherit" : "hidden"
                                    }), e.addClass(r.getClassName())
                                }
                            })
                        },
                        searchPoint: l,
                        sortByAngle: function(t, e) {
                            t.sort(function(t, i) {
                                return void 0 !== t.angle && (i.angle - t.angle) * e
                            })
                        },
                        drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
                        getCenter: i.getCenter,
                        getSymbol: l
                    }, {
                        init: function() {
                            h.prototype.init.apply(this, arguments);
                            var t, i = this;
                            return i.name = c(i.name, "Slice"), t = function(t) {
                                i.slice("select" === t.type)
                            }, e(i, "select", t), e(i, "unselect", t), i
                        },
                        isValid: function() {
                            return t.isNumber(this.y, !0) && 0 <= this.y
                        },
                        setVisible: function(t, e) {
                            var i = this,
                                n = i.series,
                                o = n.chart,
                                a = n.options.ignoreHiddenPoint;
                            e = c(e, a), t !== i.visible && (i.visible = i.options.visible = t = void 0 === t ? !i.visible : t, n.options.data[s(i, n.data)] = i.options, r(["graphic", "dataLabel", "connector", "shadowGroup"], function(e) {
                                i[e] && i[e][t ? "show" : "hide"](!0)
                            }), i.legendItem && o.legend.colorizeItem(i, t), t || "hover" !== i.state || i.setState(""), a && (n.isDirty = !0), e && o.redraw())
                        },
                        slice: function(t, e, i) {
                            var r = this.series;
                            p(i, r.chart), c(e, !0), this.sliced = this.options.sliced = n(t) ? t : !this.sliced, r.options.data[s(this, r.data)] = this.options, this.graphic.animate(this.getTranslate()), this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
                        },
                        getTranslate: function() {
                            return this.sliced ? this.slicedTranslation : {
                                translateX: 0,
                                translateY: 0
                            }
                        },
                        haloPath: function(t) {
                            var e = this.shapeArgs;
                            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                                innerR: this.shapeArgs.r - 1,
                                start: e.start,
                                end: e.end
                            })
                        }
                    })
                }(e),
                function(t) {
                    var e = t.addEvent,
                        i = t.arrayMax,
                        n = t.defined,
                        r = t.each,
                        o = t.extend,
                        a = t.format,
                        s = t.map,
                        l = t.merge,
                        c = t.noop,
                        h = t.pick,
                        u = t.relativeLength,
                        d = t.Series,
                        p = t.seriesTypes,
                        f = t.some,
                        g = t.stableSort,
                        m = t.isArray,
                        v = t.splat;
                    t.distribute = function(e, i, n) {
                        function o(t, e) {
                            return t.target - e.target
                        }
                        var a, l, c = !0,
                            u = e,
                            d = [];
                        l = 0;
                        var p = u.reducedLen || i;
                        for (a = e.length; a--;) l += e[a].size;
                        if (l > p) {
                            for (g(e, function(t, e) {
                                    return (e.rank || 0) - (t.rank || 0)
                                }), l = a = 0; l <= p;) l += e[a].size, a++;
                            d = e.splice(a - 1, e.length)
                        }
                        for (g(e, o), e = s(e, function(t) {
                                return {
                                    size: t.size,
                                    targets: [t.target],
                                    align: h(t.align, .5)
                                }
                            }); c;) {
                            for (a = e.length; a--;) c = e[a], l = (Math.min.apply(0, c.targets) + Math.max.apply(0, c.targets)) / 2, c.pos = Math.min(Math.max(0, l - c.size * c.align), i - c.size);
                            for (a = e.length, c = !1; a--;) 0 < a && e[a - 1].pos + e[a - 1].size > e[a].pos && (e[a - 1].size += e[a].size, e[a - 1].targets = e[a - 1].targets.concat(e[a].targets), e[a - 1].align = .5, e[a - 1].pos + e[a - 1].size > i && (e[a - 1].pos = i - e[a - 1].size), e.splice(a, 1), c = !0)
                        }
                        u.push.apply(u, d), a = 0, f(e, function(e) {
                            var o = 0;
                            if (f(e.targets, function() {
                                    if (u[a].pos = e.pos + o, Math.abs(u[a].pos - u[a].target) > n) return r(u.slice(0, a + 1), function(t) {
                                        delete t.pos
                                    }), u.reducedLen = (u.reducedLen || i) - .1 * i, u.reducedLen > .1 * i && t.distribute(u, i, n), !0;
                                    o += u[a].size, a++
                                })) return !0
                        }), g(u, o)
                    }, d.prototype.drawDataLabels = function() {
                        function i(t, e) {
                            var i = e.filter;
                            return !i || (e = i.operator, t = t[i.property], i = i.value, ">" === e && t > i || "<" === e && t < i || ">=" === e && t >= i || "<=" === e && t <= i || "==" === e && t == i || "===" === e && t === i)
                        }

                        function o(t, e) {
                            var i, n = [];
                            if (m(t) && !m(e)) n = s(t, function(t) {
                                return l(t, e)
                            });
                            else if (m(e) && !m(t)) n = s(e, function(e) {
                                return l(t, e)
                            });
                            else if (m(t) || m(e))
                                for (i = Math.max(t.length, e.length); i--;) n[i] = l(t[i], e[i]);
                            else n = l(t, e);
                            return n
                        }
                        var c, u, d = this,
                            p = d.chart,
                            f = d.options,
                            g = f.dataLabels,
                            y = d.points,
                            x = d.hasRendered || 0,
                            b = h(g.defer, !!f.animation),
                            w = p.renderer;
                        g = o(o(p.options.plotOptions && p.options.plotOptions.series && p.options.plotOptions.series.dataLabels, p.options.plotOptions && p.options.plotOptions[d.type] && p.options.plotOptions[d.type].dataLabels), g);
                        (m(g) || g.enabled || d._hasPointLabels) && (u = d.plotGroup("dataLabelsGroup", "data-labels", b && !x ? "hidden" : "visible", g.zIndex || 6), b && (u.attr({
                            opacity: +x
                        }), x || e(d, "afterAnimate", function() {
                            d.visible && u.show(!0), u[f.animation ? "animate" : "attr"]({
                                opacity: 1
                            }, {
                                duration: 200
                            })
                        })), r(y, function(e) {
                            c = v(o(g, e.dlOptions || e.options && e.options.dataLabels)), r(c, function(r, o) {
                                var s, l, c, g, m = r.enabled && !e.isNull && i(e, r),
                                    v = e.dataLabels ? e.dataLabels[o] : e.dataLabel,
                                    y = e.connectors ? e.connectors[o] : e.connector,
                                    x = !v;
                                m && (s = e.getLabelConfig(), l = r[e.formatPrefix + "Format"] || r.format, s = n(l) ? a(l, s, p.time) : (r[e.formatPrefix + "Formatter"] || r.formatter).call(s, r), l = r.style, c = r.rotation, l.color = h(r.color, l.color, d.color, "#000000"), "contrast" === l.color && (e.contrastColor = w.getContrast(e.color || d.color), l.color = r.inside || 0 > h(r.distance, e.labelDistance) || f.stacking ? e.contrastColor : "#000000"), f.cursor && (l.cursor = f.cursor), g = {
                                    fill: r.backgroundColor,
                                    stroke: r.borderColor,
                                    "stroke-width": r.borderWidth,
                                    r: r.borderRadius || 0,
                                    rotation: c,
                                    padding: r.padding,
                                    zIndex: 1
                                }, t.objectEach(g, function(t, e) {
                                    void 0 === t && delete g[e]
                                })), !v || m && n(s) ? m && n(s) && (v ? g.text = s : (e.dataLabels = e.dataLabels || [], v = e.dataLabels[o] = c ? w.text(s, 0, -9999).addClass("highcharts-data-label") : w.label(s, 0, -9999, r.shape, null, null, r.useHTML, null, "data-label"), o || (e.dataLabel = v), v.addClass(" highcharts-data-label-color-" + e.colorIndex + " " + (r.className || "") + (r.useHTML ? " highcharts-tracker" : ""))), v.options = r, v.attr(g), v.css(l).shadow(r.shadow), v.added || v.add(u), d.alignDataLabel(e, v, r, null, x)) : (e.dataLabel = e.dataLabel.destroy(), e.dataLabels && (1 === e.dataLabels.length ? delete e.dataLabels : delete e.dataLabels[o]), o || delete e.dataLabel, y && (e.connector = e.connector.destroy(), e.connectors && (1 === e.connectors.length ? delete e.connectors : delete e.connectors[o])))
                            })
                        })), t.fireEvent(this, "afterDrawDataLabels")
                    }, d.prototype.alignDataLabel = function(t, e, i, n, r) {
                        var a, s = this.chart,
                            l = s.inverted,
                            c = h(t.dlBox && t.dlBox.centerX, t.plotX, -9999),
                            u = h(t.plotY, -9999),
                            d = e.getBBox(),
                            p = i.rotation,
                            f = i.align,
                            g = this.visible && (t.series.forceDL || s.isInsidePlot(c, Math.round(u), l) || n && s.isInsidePlot(c, l ? n.x + 1 : n.y + n.height - 1, l)),
                            m = "justify" === h(i.overflow, "justify");
                        g && (a = i.style.fontSize, a = s.renderer.fontMetrics(a, e).b, n = o({
                            x: l ? this.yAxis.len - u : c,
                            y: Math.round(l ? this.xAxis.len - c : u),
                            width: 0,
                            height: 0
                        }, n), o(i, {
                            width: d.width,
                            height: d.height
                        }), p ? (m = !1, c = s.renderer.rotCorr(a, p), c = {
                            x: n.x + i.x + n.width / 2 + c.x,
                            y: n.y + i.y + {
                                top: 0,
                                middle: .5,
                                bottom: 1
                            } [i.verticalAlign] * n.height
                        }, e[r ? "attr" : "animate"](c).attr({
                            align: f
                        }), u = (p + 720) % 360, u = 180 < u && 360 > u, "left" === f ? c.y -= u ? d.height : 0 : "center" === f ? (c.x -= d.width / 2, c.y -= d.height / 2) : "right" === f && (c.x -= d.width, c.y -= u ? 0 : d.height), e.placed = !0, e.alignAttr = c) : (e.align(i, null, n), c = e.alignAttr), m && 0 <= n.height ? t.isLabelJustified = this.justifyDataLabel(e, i, c, d, n, r) : h(i.crop, !0) && (g = s.isInsidePlot(c.x, c.y) && s.isInsidePlot(c.x + d.width, c.y + d.height)), i.shape && !p) && e[r ? "attr" : "animate"]({
                            anchorX: l ? s.plotWidth - t.plotY : t.plotX,
                            anchorY: l ? s.plotHeight - t.plotX : t.plotY
                        }), g || (e.attr({
                            y: -9999
                        }), e.placed = !1)
                    }, d.prototype.justifyDataLabel = function(t, e, i, n, r, o) {
                        var a, s, l = this.chart,
                            c = e.align,
                            h = e.verticalAlign,
                            u = t.box ? 0 : t.padding || 0;
                        return a = i.x + u, 0 > a && ("right" === c ? e.align = "left" : e.x = -a, s = !0), a = i.x + n.width - u, a > l.plotWidth && ("left" === c ? e.align = "right" : e.x = l.plotWidth - a, s = !0), a = i.y + u, 0 > a && ("bottom" === h ? e.verticalAlign = "top" : e.y = -a, s = !0), a = i.y + n.height - u, a > l.plotHeight && ("top" === h ? e.verticalAlign = "bottom" : e.y = l.plotHeight - a, s = !0), s && (t.placed = !o, t.align(e, null, r)), s
                    }, p.pie && (p.pie.prototype.drawDataLabels = function() {
                        var e, o, a, s, l, c, u, p, f, g, m = this,
                            v = m.data,
                            y = m.chart,
                            x = m.options.dataLabels,
                            b = h(x.connectorPadding, 10),
                            w = h(x.connectorWidth, 1),
                            _ = y.plotWidth,
                            k = y.plotHeight,
                            S = Math.round(y.chartWidth / 3),
                            M = m.center,
                            A = M[2] / 2,
                            C = M[1],
                            T = [
                                [],
                                []
                            ],
                            P = [0, 0, 0, 0];
                        m.visible && (x.enabled || m._hasPointLabels) && (r(v, function(t) {
                            t.dataLabel && t.visible && t.dataLabel.shortened && (t.dataLabel.attr({
                                width: "auto"
                            }).css({
                                width: "auto",
                                textOverflow: "clip"
                            }), t.dataLabel.shortened = !1)
                        }), d.prototype.drawDataLabels.apply(m), r(v, function(t) {
                            t.dataLabel && (t.visible ? (T[t.half].push(t), t.dataLabel._pos = null, !n(x.style.width) && !n(t.options.dataLabels && t.options.dataLabels.style && t.options.dataLabels.style.width) && t.dataLabel.getBBox().width > S && (t.dataLabel.css({
                                width: .7 * S
                            }), t.dataLabel.shortened = !0)) : (t.dataLabel = t.dataLabel.destroy(), t.dataLabels && 1 === t.dataLabels.length && delete t.dataLabels))
                        }), r(T, function(i, o) {
                            var d, v, w, S = i.length,
                                T = [];
                            if (S)
                                for (m.sortByAngle(i, o - .5), 0 < m.maxLabelDistance && (d = Math.max(0, C - A - m.maxLabelDistance), v = Math.min(C + A + m.maxLabelDistance, y.plotHeight), r(i, function(t) {
                                        0 < t.labelDistance && t.dataLabel && (t.top = Math.max(0, C - A - t.labelDistance), t.bottom = Math.min(C + A + t.labelDistance, y.plotHeight), w = t.dataLabel.getBBox().height || 21, t.distributeBox = {
                                            target: t.labelPos[1] - t.top + w / 2,
                                            size: w,
                                            rank: t.y
                                        }, T.push(t.distributeBox))
                                    }), d = v + w - d, t.distribute(T, d, d / 5)), g = 0; g < S; g++) e = i[g], l = e.labelPos, a = e.dataLabel, f = !1 === e.visible ? "hidden" : "inherit", p = d = l[1], T && n(e.distributeBox) && (void 0 === e.distributeBox.pos ? f = "hidden" : (c = e.distributeBox.size, p = e.top + e.distributeBox.pos)), delete e.positionIndex, u = x.justify ? M[0] + (o ? -1 : 1) * (A + e.labelDistance) : m.getX(p < e.top + 2 || p > e.bottom - 2 ? d : p, o, e), a._attr = {
                                    visibility: f,
                                    align: l[6]
                                }, a._pos = {
                                    x: u + x.x + ({
                                        left: b,
                                        right: -b
                                    } [l[6]] || 0),
                                    y: p + x.y - 10
                                }, l.x = u, l.y = p, h(x.crop, !0) && (s = a.getBBox().width, d = null, u - s < b && 1 === o ? (d = Math.round(s - u + b), P[3] = Math.max(d, P[3])) : u + s > _ - b && 0 === o && (d = Math.round(u + s - _ + b), P[1] = Math.max(d, P[1])), 0 > p - c / 2 ? P[0] = Math.max(Math.round(c / 2 - p), P[0]) : p + c / 2 > k && (P[2] = Math.max(Math.round(p + c / 2 - k), P[2])), a.sideOverflow = d)
                        }), 0 === i(P) || this.verifyDataLabelOverflow(P)) && (this.placeDataLabels(), w && r(this.points, function(t) {
                            var e;
                            o = t.connector, (a = t.dataLabel) && a._pos && t.visible && 0 < t.labelDistance ? (f = a._attr.visibility, (e = !o) && (t.connector = o = y.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + t.colorIndex + (t.className ? " " + t.className : "")).add(m.dataLabelsGroup), o.attr({
                                "stroke-width": w,
                                stroke: x.connectorColor || t.color || "#666666"
                            })), o[e ? "attr" : "animate"]({
                                d: m.connectorPath(t.labelPos)
                            }), o.attr("visibility", f)) : o && (t.connector = o.destroy())
                        }))
                    }, p.pie.prototype.connectorPath = function(t) {
                        var e = t.x,
                            i = t.y;
                        return h(this.options.dataLabels.softConnector, !0) ? ["M", e + ("left" === t[6] ? 5 : -5), i, "C", e, i, 2 * t[2] - t[4], 2 * t[3] - t[5], t[2], t[3], "L", t[4], t[5]] : ["M", e + ("left" === t[6] ? 5 : -5), i, "L", t[2], t[3], "L", t[4], t[5]]
                    }, p.pie.prototype.placeDataLabels = function() {
                        r(this.points, function(t) {
                            var e = t.dataLabel;
                            e && t.visible && ((t = e._pos) ? (e.sideOverflow && (e._attr.width = e.getBBox().width - e.sideOverflow, e.css({
                                width: e._attr.width + "px",
                                textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
                            }), e.shortened = !0), e.attr(e._attr), e[e.moved ? "animate" : "attr"](t), e.moved = !0) : e && e.attr({
                                y: -9999
                            }))
                        }, this)
                    }, p.pie.prototype.alignDataLabel = c, p.pie.prototype.verifyDataLabelOverflow = function(t) {
                        var e, i = this.center,
                            n = this.options,
                            r = n.center,
                            o = n.minSize || 80,
                            a = null !== n.size;
                        return a || (null !== r[0] ? e = Math.max(i[2] - Math.max(t[1], t[3]), o) : (e = Math.max(i[2] - t[1] - t[3], o), i[0] += (t[3] - t[1]) / 2), null !== r[1] ? e = Math.max(Math.min(e, i[2] - Math.max(t[0], t[2])), o) : (e = Math.max(Math.min(e, i[2] - t[0] - t[2]), o), i[1] += (t[0] - t[2]) / 2), e < i[2] ? (i[2] = e, i[3] = Math.min(u(n.innerSize || 0, e), e), this.translate(i), this.drawDataLabels && this.drawDataLabels()) : a = !0), a
                    }), p.column && (p.column.prototype.alignDataLabel = function(t, e, i, n, r) {
                        var o = this.chart.inverted,
                            a = t.series,
                            s = t.dlBox || t.shapeArgs,
                            c = h(t.below, t.plotY > h(this.translatedThreshold, a.yAxis.len)),
                            u = h(i.inside, !!this.options.stacking);
                        s && (n = l(s), 0 > n.y && (n.height += n.y, n.y = 0), s = n.y + n.height - a.yAxis.len, 0 < s && (n.height -= s), o && (n = {
                            x: a.yAxis.len - n.y - n.height,
                            y: a.xAxis.len - n.x - n.width,
                            width: n.height,
                            height: n.width
                        }), u || (o ? (n.x += c ? 0 : n.width, n.width = 0) : (n.y += c ? n.height : 0, n.height = 0))), i.align = h(i.align, !o || u ? "center" : c ? "right" : "left"), i.verticalAlign = h(i.verticalAlign, o || u ? "middle" : c ? "top" : "bottom"), d.prototype.alignDataLabel.call(this, t, e, i, n, r), t.isLabelJustified && t.contrastColor && e.css({
                            color: t.contrastColor
                        })
                    })
                }(e),
                function(t) {
                    var e = t.Chart,
                        i = t.each,
                        n = t.isArray,
                        r = t.objectEach,
                        o = t.pick;
                    t = t.addEvent, t(e, "render", function() {
                        var t = [];
                        i(this.labelCollectors || [], function(e) {
                            t = t.concat(e())
                        }), i(this.yAxis || [], function(e) {
                            e.options.stackLabels && !e.options.stackLabels.allowOverlap && r(e.stacks, function(e) {
                                r(e, function(e) {
                                    t.push(e.label)
                                })
                            })
                        }), i(this.series || [], function(e) {
                            var r = e.options.dataLabels;
                            e.visible && (!1 !== r.enabled || e._hasPointLabels) && i(e.points, function(e) {
                                if (e.visible) {
                                    var r = n(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : [];
                                    i(r, function(i) {
                                        var n = i.options;
                                        i.labelrank = o(n.labelrank, e.labelrank, e.shapeArgs && e.shapeArgs.height), n.allowOverlap || t.push(i)
                                    })
                                }
                            })
                        }), this.hideOverlappingLabels(t)
                    }), e.prototype.hideOverlappingLabels = function(t) {
                        var e, n, r, o, a, s, l = t.length,
                            c = this.renderer,
                            h = function(t, e, i, n, r, o, a, s) {
                                return !(r > t + i || r + a < t || o > e + n || o + s < e)
                            };
                        for (r = function(t) {
                                var e, i, n, r = t.box ? 0 : t.padding || 0;
                                if (n = 0, t && (!t.alignAttr || t.placed)) return e = t.alignAttr || {
                                    x: t.attr("x"),
                                    y: t.attr("y")
                                }, i = t.parentGroup, t.width || (n = t.getBBox(), t.width = n.width, t.height = n.height, n = c.fontMetrics(null, t.element).h), {
                                    x: e.x + (i.translateX || 0) + r,
                                    y: e.y + (i.translateY || 0) + r - n,
                                    width: t.width - 2 * r,
                                    height: t.height - 2 * r
                                }
                            }, n = 0; n < l; n++)(e = t[n]) && (e.oldOpacity = e.opacity, e.newOpacity = 1, e.absoluteBox = r(e));
                        for (t.sort(function(t, e) {
                                return (e.labelrank || 0) - (t.labelrank || 0)
                            }), n = 0; n < l; n++)
                            for (s = (r = t[n]) && r.absoluteBox, e = n + 1; e < l; ++e) a = (o = t[e]) && o.absoluteBox, s && a && r !== o && 0 !== r.newOpacity && 0 !== o.newOpacity && (a = h(s.x, s.y, s.width, s.height, a.x, a.y, a.width, a.height)) && ((r.labelrank < o.labelrank ? r : o).newOpacity = 0);
                        i(t, function(t) {
                            var e, i;
                            t && (i = t.newOpacity, t.oldOpacity !== i && (t.alignAttr && t.placed ? (i ? t.show(!0) : e = function() {
                                t.hide()
                            }, t.alignAttr.opacity = i, t[t.isOld ? "animate" : "attr"](t.alignAttr, null, e)) : t.attr({
                                opacity: i
                            })), t.isOld = !0)
                        })
                    }
                }(e),
                function(t) {
                    var e, i = t.addEvent,
                        n = t.Chart,
                        r = t.createElement,
                        o = t.css,
                        a = t.defaultOptions,
                        s = t.defaultPlotOptions,
                        l = t.each,
                        c = t.extend,
                        h = t.fireEvent,
                        u = t.hasTouch,
                        d = t.inArray,
                        p = t.isObject,
                        f = t.Legend,
                        g = t.merge,
                        m = t.pick,
                        v = t.Point,
                        y = t.Series,
                        x = t.seriesTypes,
                        b = t.svg;
                    e = t.TrackerMixin = {
                        drawTrackerPoint: function() {
                            var t = this,
                                e = t.chart.pointer,
                                i = function(t) {
                                    var i = e.getPointFromEvent(t);
                                    void 0 !== i && (e.isDirectTouch = !0, i.onMouseOver(t))
                                };
                            l(t.points, function(t) {
                                t.graphic && (t.graphic.element.point = t), t.dataLabel && (t.dataLabel.div ? t.dataLabel.div.point = t : t.dataLabel.element.point = t)
                            }), t._hasTracking || (l(t.trackerGroups, function(n) {
                                t[n] && (t[n].addClass("highcharts-tracker").on("mouseover", i).on("mouseout", function(t) {
                                    e.onTrackerMouseOut(t)
                                }), u && t[n].on("touchstart", i), t.options.cursor && t[n].css(o).css({
                                    cursor: t.options.cursor
                                }))
                            }), t._hasTracking = !0), h(this, "afterDrawTracker")
                        },
                        drawTrackerGraph: function() {
                            var t, e = this,
                                i = e.options,
                                n = i.trackByArea,
                                r = [].concat(n ? e.areaPath : e.graphPath),
                                o = r.length,
                                a = e.chart,
                                s = a.pointer,
                                c = a.renderer,
                                d = a.options.tooltip.snap,
                                p = e.tracker,
                                f = function() {
                                    a.hoverSeries !== e && e.onMouseOver()
                                },
                                g = "rgba(192,192,192," + (b ? 1e-4 : .002) + ")";
                            if (o && !n)
                                for (t = o + 1; t--;) "M" === r[t] && r.splice(t + 1, 0, r[t + 1] - d, r[t + 2], "L"), (t && "M" === r[t] || t === o) && r.splice(t, 0, "L", r[t - 2] + d, r[t - 1]);
                            p ? p.attr({
                                d: r
                            }) : e.graph && (e.tracker = c.path(r).attr({
                                "stroke-linejoin": "round",
                                stroke: g,
                                fill: n ? g : "none",
                                "stroke-width": e.graph.strokeWidth() + (n ? 0 : 2 * d),
                                visibility: e.visible ? "visible" : "hidden",
                                zIndex: 2
                            }).addClass(n ? "highcharts-tracker-area" : "highcharts-tracker-line").add(e.group), l([e.tracker, e.markerGroup], function(t) {
                                t.addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function(t) {
                                    s.onTrackerMouseOut(t)
                                }), i.cursor && t.css({
                                    cursor: i.cursor
                                }), u && t.on("touchstart", f)
                            })), h(this, "afterDrawTracker")
                        }
                    }, x.column && (x.column.prototype.drawTracker = e.drawTrackerPoint), x.pie && (x.pie.prototype.drawTracker = e.drawTrackerPoint), x.scatter && (x.scatter.prototype.drawTracker = e.drawTrackerPoint), a.legend.itemStyle.cursor = "pointer", c(f.prototype, {
                        setItemEvents: function(t, e, i) {
                            var n = this,
                                r = n.chart.renderer.boxWrapper,
                                o = "highcharts-legend-" + (t instanceof v ? "point" : "series") + "-active";
                            (i ? e : t.legendGroup).on("mouseover", function() {
                                t.setState("hover"), r.addClass(o), e.css(n.options.itemHoverStyle)
                            }).on("mouseout", function() {
                                e.css(g(t.visible ? n.itemStyle : n.itemHiddenStyle)), r.removeClass(o), t.setState()
                            }).on("click", function(e) {
                                var i = function() {
                                    t.setVisible && t.setVisible()
                                };
                                r.removeClass(o), e = {
                                    browserEvent: e
                                }, t.firePointEvent ? t.firePointEvent("legendItemClick", e, i) : h(t, "legendItemClick", e, i)
                            })
                        },
                        createCheckboxForItem: function(t) {
                            t.checkbox = r("input", {
                                type: "checkbox",
                                className: "highcharts-legend-checkbox",
                                checked: t.selected,
                                defaultChecked: t.selected
                            }, this.options.itemCheckboxStyle, this.chart.container), i(t.checkbox, "click", function(e) {
                                h(t.series || t, "checkboxClick", {
                                    checked: e.target.checked,
                                    item: t
                                }, function() {
                                    t.select()
                                })
                            })
                        }
                    }), c(n.prototype, {
                        showResetZoom: function() {
                            function t() {
                                e.zoomOut()
                            }
                            var e = this,
                                i = a.lang,
                                n = e.options.chart.resetZoomButton,
                                r = n.theme,
                                o = r.states,
                                s = "chart" === n.relativeTo ? null : "plotBox";
                            h(this, "beforeShowResetZoom", null, function() {
                                e.resetZoomButton = e.renderer.button(i.resetZoom, null, null, t, r, o && o.hover).attr({
                                    align: n.position.align,
                                    title: i.resetZoomTitle
                                }).addClass("highcharts-reset-zoom").add().align(n.position, !1, s)
                            })
                        },
                        zoomOut: function() {
                            h(this, "selection", {
                                resetSelection: !0
                            }, this.zoom)
                        },
                        zoom: function(t) {
                            var e, i, n = this.pointer,
                                r = !1;
                            !t || t.resetSelection ? (l(this.axes, function(t) {
                                e = t.zoom()
                            }), n.initiated = !1) : l(t.xAxis.concat(t.yAxis), function(t) {
                                var i = t.axis;
                                n[i.isXAxis ? "zoomX" : "zoomY"] && (e = i.zoom(t.min, t.max), i.displayBtn && (r = !0))
                            }), i = this.resetZoomButton, r && !i ? this.showResetZoom() : !r && p(i) && (this.resetZoomButton = i.destroy()), e && this.redraw(m(this.options.chart.animation, t && t.animation, 100 > this.pointCount))
                        },
                        pan: function(t, e) {
                            var i, n = this,
                                r = n.hoverPoints;
                            r && l(r, function(t) {
                                t.setState()
                            }), l("xy" === e ? [1, 0] : [1], function(e) {
                                e = n[e ? "xAxis" : "yAxis"][0];
                                var r = e.horiz,
                                    o = t[r ? "chartX" : "chartY"],
                                    a = (r = r ? "mouseDownX" : "mouseDownY", n[r]),
                                    s = (e.pointRange || 0) / 2,
                                    l = e.reversed && !n.inverted || !e.reversed && n.inverted ? -1 : 1,
                                    c = e.getExtremes(),
                                    h = e.toValue(a - o, !0) + s * l,
                                    u = (l = e.toValue(a + e.len - o, !0) - s * l, l < h);
                                a = u ? l : h, h = u ? h : l, l = Math.min(c.dataMin, s ? c.min : e.toValue(e.toPixels(c.min) - e.minPixelPadding)), s = Math.max(c.dataMax, s ? c.max : e.toValue(e.toPixels(c.max) + e.minPixelPadding)), u = l - a;
                                0 < u && (h += u, a = l), u = h - s, 0 < u && (h = s, a -= u), e.series.length && a !== c.min && h !== c.max && (e.setExtremes(a, h, !1, !1, {
                                    trigger: "pan"
                                }), i = !0), n[r] = o
                            }), i && n.redraw(!1), o(n.container, {
                                cursor: "move"
                            })
                        }
                    }), c(v.prototype, {
                        select: function(t, e) {
                            var i = this,
                                n = i.series,
                                r = n.chart;
                            t = m(t, !i.selected), i.firePointEvent(t ? "select" : "unselect", {
                                accumulate: e
                            }, function() {
                                i.selected = i.options.selected = t, n.options.data[d(i, n.data)] = i.options, i.setState(t && "select"), e || l(r.getSelectedPoints(), function(t) {
                                    t.selected && t !== i && (t.selected = t.options.selected = !1, n.options.data[d(t, n.data)] = t.options, t.setState(""), t.firePointEvent("unselect"))
                                })
                            })
                        },
                        onMouseOver: function(t) {
                            var e = this.series.chart,
                                i = e.pointer;
                            t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e.inverted), i.runPointActions(t, this)
                        },
                        onMouseOut: function() {
                            var t = this.series.chart;
                            this.firePointEvent("mouseOut"), l(t.hoverPoints || [], function(t) {
                                t.setState()
                            }), t.hoverPoints = t.hoverPoint = null
                        },
                        importEvents: function() {
                            if (!this.hasImportedEvents) {
                                var e = this,
                                    n = g(e.series.options.point, e.options).events;
                                e.events = n, t.objectEach(n, function(t, n) {
                                    i(e, n, t)
                                }), this.hasImportedEvents = !0
                            }
                        },
                        setState: function(t, e) {
                            var i, n = Math.floor(this.plotX),
                                r = this.plotY,
                                o = this.series,
                                a = o.options.states[t || "normal"] || {},
                                l = s[o.type].marker && o.options.marker,
                                u = l && !1 === l.enabled,
                                d = l && l.states && l.states[t || "normal"] || {},
                                p = !1 === d.enabled,
                                f = o.stateMarkerGraphic,
                                g = this.marker || {},
                                v = o.chart,
                                y = o.halo,
                                x = l && o.markerAttribs;
                            t = t || "", t === this.state && !e || this.selected && "select" !== t || !1 === a.enabled || t && (p || u && !1 === d.enabled) || t && g.states && g.states[t] && !1 === g.states[t].enabled || (x && (i = o.markerAttribs(this, t)), this.graphic ? (this.state && this.graphic.removeClass("highcharts-point-" + this.state), t && this.graphic.addClass("highcharts-point-" + t), this.graphic.animate(o.pointAttribs(this, t), m(v.options.chart.animation, a.animation)), i && this.graphic.animate(i, m(v.options.chart.animation, d.animation, l.animation)), f && f.hide()) : (t && d && (l = g.symbol || o.symbol, f && f.currentSymbol !== l && (f = f.destroy()), f ? f[e ? "animate" : "attr"]({
                                x: i.x,
                                y: i.y
                            }) : l && (o.stateMarkerGraphic = f = v.renderer.symbol(l, i.x, i.y, i.width, i.height).add(o.markerGroup), f.currentSymbol = l), f && f.attr(o.pointAttribs(this, t))), f && (f[t && v.isInsidePlot(n, r, v.inverted) ? "show" : "hide"](), f.element.point = this)), (n = a.halo) && n.size ? (y || (o.halo = y = v.renderer.path().add((this.graphic || f).parentGroup)), y.show()[e ? "animate" : "attr"]({
                                d: this.haloPath(n.size)
                            }), y.attr({
                                class: "highcharts-halo highcharts-color-" + m(this.colorIndex, o.colorIndex) + (this.className ? " " + this.className : ""),
                                zIndex: -1
                            }), y.point = this, y.attr(c({
                                fill: this.color || o.color,
                                "fill-opacity": n.opacity
                            }, n.attributes))) : y && y.point && y.point.haloPath && y.animate({
                                d: y.point.haloPath(0)
                            }, null, y.hide), this.state = t, h(this, "afterSetState"))
                        },
                        haloPath: function(t) {
                            return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - t, this.plotY - t, 2 * t, 2 * t)
                        }
                    }), c(y.prototype, {
                        onMouseOver: function() {
                            var t = this.chart,
                                e = t.hoverSeries;
                            e && e !== this && e.onMouseOut(), this.options.events.mouseOver && h(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
                        },
                        onMouseOut: function() {
                            var t = this.options,
                                e = this.chart,
                                i = e.tooltip,
                                n = e.hoverPoint;
                            e.hoverSeries = null, n && n.onMouseOut(), this && t.events.mouseOut && h(this, "mouseOut"), !i || this.stickyTracking || i.shared && !this.noSharedTooltip || i.hide(), this.setState()
                        },
                        setState: function(t) {
                            var e = this,
                                i = e.options,
                                n = e.graph,
                                r = i.states,
                                o = i.lineWidth;
                            i = 0;
                            if (t = t || "", e.state !== t && (l([e.group, e.markerGroup, e.dataLabelsGroup], function(i) {
                                    i && (e.state && i.removeClass("highcharts-series-" + e.state), t && i.addClass("highcharts-series-" + t))
                                }), e.state = t, !r[t] || !1 !== r[t].enabled) && (t && (o = r[t].lineWidth || o + (r[t].lineWidthPlus || 0)), n && !n.dashstyle))
                                for (o = {
                                        "stroke-width": o
                                    }, n.animate(o, m(r[t || "normal"] && r[t || "normal"].animation, e.chart.options.chart.animation)); e["zone-graph-" + i];) e["zone-graph-" + i].attr(o), i += 1
                        },
                        setVisible: function(t, e) {
                            var i, n = this,
                                r = n.chart,
                                o = n.legendItem,
                                a = r.options.chart.ignoreHiddenSeries,
                                s = n.visible;
                            i = (n.visible = t = n.options.visible = n.userOptions.visible = void 0 === t ? !s : t) ? "show" : "hide", l(["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"], function(t) {
                                n[t] && n[t][i]()
                            }), r.hoverSeries !== n && (r.hoverPoint && r.hoverPoint.series) !== n || n.onMouseOut(), o && r.legend.colorizeItem(n, t), n.isDirty = !0, n.options.stacking && l(r.series, function(t) {
                                t.options.stacking && t.visible && (t.isDirty = !0)
                            }), l(n.linkedSeries, function(e) {
                                e.setVisible(t, !1)
                            }), a && (r.isDirtyBox = !0), h(n, i), !1 !== e && r.redraw()
                        },
                        show: function() {
                            this.setVisible(!0)
                        },
                        hide: function() {
                            this.setVisible(!1)
                        },
                        select: function(t) {
                            this.selected = t = void 0 === t ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), h(this, t ? "select" : "unselect")
                        },
                        drawTracker: e.drawTrackerGraph
                    })
                }(e),
                function(t) {
                    var e = t.Chart,
                        i = t.each,
                        n = t.inArray,
                        r = t.isArray,
                        o = t.isObject,
                        a = t.pick,
                        s = t.splat;
                    e.prototype.setResponsive = function(e) {
                        var n = this.options.responsive,
                            r = [],
                            o = this.currentResponsive;
                        n && n.rules && i(n.rules, function(i) {
                            void 0 === i._id && (i._id = t.uniqueKey()), this.matchResponsiveRule(i, r, e)
                        }, this);
                        var a = t.merge.apply(0, t.map(r, function(e) {
                            return t.find(n.rules, function(t) {
                                return t._id === e
                            }).chartOptions
                        }));
                        r = r.toString() || void 0;
                        r !== (o && o.ruleIds) && (o && this.update(o.undoOptions, e), r ? (this.currentResponsive = {
                            ruleIds: r,
                            mergedOptions: a,
                            undoOptions: this.currentOptions(a)
                        }, this.update(a, e)) : this.currentResponsive = void 0)
                    }, e.prototype.matchResponsiveRule = function(t, e) {
                        var i = t.condition;
                        (i.callback || function() {
                            return this.chartWidth <= a(i.maxWidth, Number.MAX_VALUE) && this.chartHeight <= a(i.maxHeight, Number.MAX_VALUE) && this.chartWidth >= a(i.minWidth, 0) && this.chartHeight >= a(i.minHeight, 0)
                        }).call(this) && e.push(t._id)
                    }, e.prototype.currentOptions = function(e) {
                        function i(e, a, l, c) {
                            var h;
                            t.objectEach(e, function(t, e) {
                                if (!c && -1 < n(e, ["series", "xAxis", "yAxis"]))
                                    for (t = s(t), l[e] = [], h = 0; h < t.length; h++) a[e][h] && (l[e][h] = {}, i(t[h], a[e][h], l[e][h], c + 1));
                                else o(t) ? (l[e] = r(t) ? [] : {}, i(t, a[e] || {}, l[e], c + 1)) : l[e] = a[e] || null
                            })
                        }
                        var a = {};
                        return i(e, this.options, a, 0), a
                    }
                }(e),
                function(t) {
                    var e = t.addEvent,
                        i = t.Axis,
                        n = t.Chart,
                        r = t.css,
                        o = t.defined,
                        a = t.each,
                        s = t.extend,
                        l = t.noop,
                        c = t.pick,
                        h = t.timeUnits,
                        u = t.wrap;
                    u(t.Series.prototype, "init", function(t) {
                        var i;
                        t.apply(this, Array.prototype.slice.call(arguments, 1)), (i = this.xAxis) && i.options.ordinal && e(this, "updatedData", function() {
                            delete i.ordinalIndex
                        })
                    }), u(i.prototype, "getTimeTicks", function(t, e, i, n, r, a, s, l) {
                        var c, u, d, p, f, g = 0,
                            m = {},
                            v = [],
                            y = -Number.MAX_VALUE,
                            x = this.options.tickPixelInterval,
                            b = this.chart.time;
                        if (!this.options.ordinal && !this.options.breaks || !a || 3 > a.length || void 0 === i) return t.call(this, e, i, n, r);
                        for (p = a.length, c = 0; c < p; c++) {
                            if (f = c && a[c - 1] > n, a[c] < i && (g = c), c === p - 1 || a[c + 1] - a[c] > 5 * s || f) {
                                if (a[c] > y) {
                                    for (u = t.call(this, e, a[g], a[c], r); u.length && u[0] <= y;) u.shift();
                                    u.length && (y = u[u.length - 1]), v = v.concat(u)
                                }
                                g = c + 1
                            }
                            if (f) break
                        }
                        if (t = u.info, l && t.unitRange <= h.hour) {
                            for (c = v.length - 1, g = 1; g < c; g++) b.dateFormat("%d", v[g]) !== b.dateFormat("%d", v[g - 1]) && (m[v[g]] = "day", d = !0);
                            d && (m[v[0]] = "day"), t.higherRanks = m
                        }
                        if (v.info = t, l && o(x)) {
                            var w;
                            for (l = b = v.length, c = [], d = []; l--;) g = this.translate(v[l]), w && (d[l] = w - g), c[l] = w = g;
                            for (d.sort(), d = d[Math.floor(d.length / 2)], d < .6 * x && (d = null), l = v[b - 1] > n ? b - 1 : b, w = void 0; l--;) g = c[l], n = Math.abs(w - g), w && n < .8 * x && (null === d || n < .8 * d) ? (m[v[l]] && !m[v[l + 1]] ? (n = l + 1, w = g) : n = l, v.splice(n, 1)) : w = g
                        }
                        return v
                    }), s(i.prototype, {
                        beforeSetTickPositions: function() {
                            var t, e, i, n, r, s = [],
                                l = !1,
                                h = this.getExtremes(),
                                u = h.min,
                                d = h.max,
                                p = this.isXAxis && !!this.options.breaks,
                                f = (h = this.options.ordinal, Number.MAX_VALUE),
                                g = this.chart.options.chart.ignoreHiddenSeries;
                            if (i = "highcharts-navigator-xaxis" === this.options.className, !this.options.overscroll || this.max !== this.dataMax || this.chart.mouseIsDown && !i || this.eventArgs && (!this.eventArgs || "navigator" === this.eventArgs.trigger) || (this.max += this.options.overscroll, !i && o(this.userMin) && (this.min += this.options.overscroll)), h || p) {
                                if (a(this.series, function(i, n) {
                                        if (e = [], !(g && !1 === i.visible || !1 === i.takeOrdinalPosition && !p) && (s = s.concat(i.processedXData), t = s.length, s.sort(function(t, e) {
                                                return t - e
                                            }), f = Math.min(f, c(i.closestPointRange, f)), t)) {
                                            for (n = 0; n < t - 1;) s[n] !== s[n + 1] && e.push(s[n + 1]), n++;
                                            e[0] !== s[0] && e.unshift(s[0]), s = e
                                        }
                                        i.isSeriesBoosting && (r = !0)
                                    }), r && (s.length = 0), t = s.length, 2 < t) {
                                    for (i = s[1] - s[0], n = t - 1; n-- && !l;) s[n + 1] - s[n] !== i && (l = !0);
                                    !this.options.keepOrdinalPadding && (s[0] - u > i || d - s[s.length - 1] > i) && (l = !0)
                                } else this.options.overscroll && (2 === t ? f = s[1] - s[0] : 1 === t ? (f = this.options.overscroll, s = [s[0], s[0] + f]) : f = this.overscrollPointsRange);
                                l ? (this.options.overscroll && (this.overscrollPointsRange = f, s = s.concat(this.getOverscrollPositions())), this.ordinalPositions = s, i = this.ordinal2lin(Math.max(u, s[0]), !0), n = Math.max(this.ordinal2lin(Math.min(d, s[s.length - 1]), !0), 1), this.ordinalSlope = d = (d - u) / (n - i), this.ordinalOffset = u - i * d) : (this.overscrollPointsRange = c(this.closestPointRange, this.overscrollPointsRange), this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = void 0)
                            }
                            this.isOrdinal = h && l, this.groupIntervalFactor = null
                        },
                        val2lin: function(t, e) {
                            var i = this.ordinalPositions;
                            if (i) {
                                var n, r, o = i.length;
                                for (n = o; n--;)
                                    if (i[n] === t) {
                                        r = n;
                                        break
                                    } for (n = o - 1; n--;)
                                    if (t > i[n] || 0 === n) {
                                        t = (t - i[n]) / (i[n + 1] - i[n]), r = n + t;
                                        break
                                    } e = e ? r : this.ordinalSlope * (r || 0) + this.ordinalOffset
                            } else e = t;
                            return e
                        },
                        lin2val: function(t, e) {
                            var i = this.ordinalPositions;
                            if (i) {
                                var n, r = this.ordinalSlope,
                                    o = this.ordinalOffset,
                                    a = i.length - 1;
                                if (e) 0 > t ? t = i[0] : t > a ? t = i[a] : (a = Math.floor(t), n = t - a);
                                else
                                    for (; a--;)
                                        if (e = r * a + o, t >= e) {
                                            r = r * (a + 1) + o, n = (t - e) / (r - e);
                                            break
                                        } return void 0 !== n && void 0 !== i[a] ? i[a] + (n ? n * (i[a + 1] - i[a]) : 0) : t
                            }
                            return t
                        },
                        getExtendedPositions: function() {
                            var t, e, n = this,
                                r = n.chart,
                                o = n.series[0].currentDataGrouping,
                                s = n.ordinalIndex,
                                c = o ? o.count + o.unitName : "raw",
                                h = n.options.overscroll,
                                u = n.getExtremes();
                            return s || (s = n.ordinalIndex = {}), s[c] || (t = {
                                series: [],
                                chart: r,
                                getExtremes: function() {
                                    return {
                                        min: u.dataMin,
                                        max: u.dataMax + h
                                    }
                                },
                                options: {
                                    ordinal: !0
                                },
                                val2lin: i.prototype.val2lin,
                                ordinal2lin: i.prototype.ordinal2lin
                            }, a(n.series, function(i) {
                                e = {
                                    xAxis: t,
                                    xData: i.xData.slice(),
                                    chart: r,
                                    destroyGroupedData: l
                                }, e.xData = e.xData.concat(n.getOverscrollPositions()), e.options = {
                                    dataGrouping: o ? {
                                        enabled: !0,
                                        forced: !0,
                                        approximation: "open",
                                        units: [
                                            [o.unitName, [o.count]]
                                        ]
                                    } : {
                                        enabled: !1
                                    }
                                }, i.processData.apply(e), t.series.push(e)
                            }), n.beforeSetTickPositions.apply(t), s[c] = t.ordinalPositions), s[c]
                        },
                        getOverscrollPositions: function() {
                            var e = this.options.overscroll,
                                i = this.overscrollPointsRange,
                                n = [],
                                r = this.dataMax;
                            if (t.defined(i))
                                for (n.push(r); r <= this.dataMax + e;) r += i, n.push(r);
                            return n
                        },
                        getGroupIntervalFactor: function(t, e, i) {
                            var n;
                            i = i.processedXData;
                            var r = i.length,
                                o = [];
                            if (n = this.groupIntervalFactor, !n) {
                                for (n = 0; n < r - 1; n++) o[n] = i[n + 1] - i[n];
                                o.sort(function(t, e) {
                                    return t - e
                                }), o = o[Math.floor(r / 2)], t = Math.max(t, i[0]), e = Math.min(e, i[r - 1]), this.groupIntervalFactor = n = r * o / (e - t)
                            }
                            return n
                        },
                        postProcessTickInterval: function(t) {
                            var e = this.ordinalSlope;
                            return e ? this.options.breaks ? this.closestPointRange || t : t / (e / this.closestPointRange) : t
                        }
                    }), i.prototype.ordinal2lin = i.prototype.val2lin, u(n.prototype, "pan", function(t, e) {
                        var i = this.xAxis[0],
                            n = i.options.overscroll,
                            o = e.chartX,
                            s = !1;
                        if (i.options.ordinal && i.series.length) {
                            var l, c = this.mouseDownX,
                                h = i.getExtremes(),
                                u = h.dataMax,
                                d = h.min,
                                p = h.max,
                                f = this.hoverPoints,
                                g = i.closestPointRange || i.overscrollPointsRange,
                                m = (c = (c - o) / (i.translationSlope * (i.ordinalSlope || g)), {
                                    ordinalPositions: i.getExtendedPositions()
                                }),
                                v = (g = i.lin2val, i.val2lin);
                            m.ordinalPositions ? 1 < Math.abs(c) && (f && a(f, function(t) {
                                t.setState()
                            }), 0 > c ? (f = m, l = i.ordinalPositions ? i : m) : (f = i.ordinalPositions ? i : m, l = m), m = l.ordinalPositions, u > m[m.length - 1] && m.push(u), this.fixedRange = p - d, c = i.toFixedRange(null, null, g.apply(f, [v.apply(f, [d, !0]) + c, !0]), g.apply(l, [v.apply(l, [p, !0]) + c, !0])), c.min >= Math.min(h.dataMin, d) && c.max <= Math.max(u, p) + n && i.setExtremes(c.min, c.max, !0, !1, {
                                trigger: "pan"
                            }), this.mouseDownX = o, r(this.container, {
                                cursor: "move"
                            })) : s = !0
                        } else s = !0;
                        s && (n && (i.max = i.dataMax + n), t.apply(this, Array.prototype.slice.call(arguments, 1)))
                    })
                }(e),
                function(t) {
                    function e() {
                        return Array.prototype.slice.call(arguments, 1)
                    }

                    function i(t) {
                        t.apply(this), this.drawBreaks(this.xAxis, ["x"]), this.drawBreaks(this.yAxis, r(this.pointArrayMap, ["y"]))
                    }
                    var n = t.addEvent,
                        r = t.pick,
                        o = t.wrap,
                        a = t.each,
                        s = t.extend,
                        l = t.isArray,
                        c = t.fireEvent,
                        h = t.Axis,
                        u = t.Series;
                    s(h.prototype, {
                        isInBreak: function(t, e) {
                            var i = t.repeat || 1 / 0,
                                n = t.from,
                                r = t.to - t.from;
                            return e = e >= n ? (e - n) % i : i - (n - e) % i, t.inclusive ? e <= r : e < r && 0 !== e
                        },
                        isInAnyBreak: function(t, e) {
                            var i, n, o, a = this.options.breaks,
                                s = a && a.length;
                            if (s) {
                                for (; s--;) this.isInBreak(a[s], t) && (i = !0, n || (n = r(a[s].showPoints, !this.isXAxis)));
                                o = i && e ? i && !n : i
                            }
                            return o
                        }
                    }), n(h, "afterInit", function() {
                        "function" === typeof this.setBreaks && this.setBreaks(this.options.breaks, !1)
                    }), n(h, "afterSetTickPositions", function() {
                        if (this.isBroken) {
                            var t, e = this.tickPositions,
                                i = this.tickPositions.info,
                                n = [];
                            for (t = 0; t < e.length; t++) this.isInAnyBreak(e[t]) || n.push(e[t]);
                            this.tickPositions = n, this.tickPositions.info = i
                        }
                    }), n(h, "afterSetOptions", function() {
                        this.isBroken && (this.options.ordinal = !1)
                    }), h.prototype.setBreaks = function(t, e) {
                        function i(t) {
                            var e, i, n = t;
                            for (i = 0; i < o.breakArray.length; i++)
                                if (e = o.breakArray[i], e.to <= t) n -= e.len;
                                else {
                                    if (e.from >= t) break;
                                    if (o.isInBreak(e, t)) {
                                        n -= t - e.from;
                                        break
                                    }
                                } return n
                        }

                        function n(t) {
                            var e, i;
                            for (i = 0; i < o.breakArray.length && (e = o.breakArray[i], !(e.from >= t)); i++) e.to < t ? t += e.len : o.isInBreak(e, t) && (t += e.len);
                            return t
                        }
                        var o = this,
                            s = l(t) && !!t.length;
                        o.isDirty = o.isBroken !== s, o.isBroken = s, o.options.breaks = o.userOptions.breaks = t, o.forceRedraw = !0, s || o.val2lin !== i || (delete o.val2lin, delete o.lin2val), s && (o.userOptions.ordinal = !1, o.val2lin = i, o.lin2val = n, o.setExtremes = function(t, e, i, n, r) {
                            if (this.isBroken) {
                                for (; this.isInAnyBreak(t);) t -= this.closestPointRange;
                                for (; this.isInAnyBreak(e);) e -= this.closestPointRange
                            }
                            h.prototype.setExtremes.call(this, t, e, i, n, r)
                        }, o.setAxisTranslation = function(t) {
                            if (h.prototype.setAxisTranslation.call(this, t), this.unitLength = null, this.isBroken) {
                                t = o.options.breaks;
                                var e, i, n, s, l = [],
                                    u = [],
                                    d = 0,
                                    p = o.userMin || o.min,
                                    f = o.userMax || o.max,
                                    g = r(o.pointRangePadding, 0);
                                a(t, function(t) {
                                    i = t.repeat || 1 / 0, o.isInBreak(t, p) && (p += t.to % i - p % i), o.isInBreak(t, f) && (f -= f % i - t.from % i)
                                }), a(t, function(t) {
                                    for (n = t.from, i = t.repeat || 1 / 0; n - i > p;) n -= i;
                                    for (; n < p;) n += i;
                                    for (s = n; s < f; s += i) l.push({
                                        value: s,
                                        move: "in"
                                    }), l.push({
                                        value: s + (t.to - t.from),
                                        move: "out",
                                        size: t.breakSize
                                    })
                                }), l.sort(function(t, e) {
                                    return t.value === e.value ? ("in" === t.move ? 0 : 1) - ("in" === e.move ? 0 : 1) : t.value - e.value
                                }), e = 0, n = p, a(l, function(t) {
                                    e += "in" === t.move ? 1 : -1, 1 === e && "in" === t.move && (n = t.value), 0 === e && (u.push({
                                        from: n,
                                        to: t.value,
                                        len: t.value - n - (t.size || 0)
                                    }), d += t.value - n - (t.size || 0))
                                }), o.breakArray = u, o.unitLength = f - p - d + g, c(o, "afterBreaks"), o.staticScale ? o.transA = o.staticScale : o.unitLength && (o.transA *= (f - o.min + g) / o.unitLength), g && (o.minPixelPadding = o.transA * o.minPointOffset), o.min = p, o.max = f
                            }
                        }), r(e, !0) && this.chart.redraw()
                    }, o(u.prototype, "generatePoints", function(t) {
                        t.apply(this, e(arguments));
                        var i, n, r = this.xAxis,
                            o = this.yAxis,
                            a = this.points,
                            s = a.length,
                            l = this.options.connectNulls;
                        if (r && o && (r.options.breaks || o.options.breaks))
                            for (; s--;) i = a[s], n = null === i.y && !1 === l, n || !r.isInAnyBreak(i.x, !0) && !o.isInAnyBreak(i.y, !0) || (a.splice(s, 1), this.data[s] && this.data[s].destroyElements())
                    }), t.Series.prototype.drawBreaks = function(t, e) {
                        var i, n, o, s, l = this,
                            h = l.points;
                        t && a(e, function(e) {
                            i = t.breakArray || [], n = t.isXAxis ? t.min : r(l.options.threshold, t.min), a(h, function(l) {
                                s = r(l["stack" + e.toUpperCase()], l[e]), a(i, function(e) {
                                    o = !1, n < e.from && s > e.to || n > e.from && s < e.from ? o = "pointBreak" : (n < e.from && s > e.from && s < e.to || n > e.from && s > e.to && s < e.from) && (o = "pointInBreak"), o && c(t, o, {
                                        point: l,
                                        brk: e
                                    })
                                })
                            })
                        })
                    }, t.Series.prototype.gappedPath = function() {
                        var e = this.currentDataGrouping,
                            i = e && e.totalRange,
                            n = (e = this.options.gapSize, this.points.slice()),
                            r = n.length - 1,
                            o = this.yAxis;
                        if (e && 0 < r)
                            for ("value" !== this.options.gapUnit && (e *= this.closestPointRange), i && i > e && (e = i); r--;) n[r + 1].x - n[r].x > e && (i = (n[r].x + n[r + 1].x) / 2, n.splice(r + 1, 0, {
                                isNull: !0,
                                x: i
                            }), this.options.stacking && (i = o.stacks[this.stackKey][i] = new t.StackItem(o, o.options.stackLabels, !1, i, this.stack), i.total = 0));
                        return this.getGraphPath(n)
                    }, o(t.seriesTypes.column.prototype, "drawPoints", i), o(t.Series.prototype, "drawPoints", i)
                }(e),
                function(t) {
                    var e = t.addEvent,
                        i = t.arrayMax,
                        n = t.arrayMin,
                        r = t.Axis,
                        o = t.defaultPlotOptions,
                        a = t.defined,
                        s = t.each,
                        l = t.extend,
                        c = t.format,
                        h = t.isNumber,
                        u = t.merge,
                        d = t.pick,
                        p = t.Point,
                        f = t.Series,
                        g = t.Tooltip,
                        m = t.wrap,
                        v = f.prototype,
                        y = v.processData,
                        x = v.generatePoints,
                        b = {
                            approximation: "average",
                            groupPixelWidth: 2,
                            dateTimeLabelFormats: {
                                millisecond: ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"],
                                second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"],
                                minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                                hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                                day: ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                                week: ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                                month: ["%B %Y", "%B", "-%B %Y"],
                                year: ["%Y", "%Y", "-%Y"]
                            }
                        },
                        w = {
                            line: {},
                            spline: {},
                            area: {},
                            areaspline: {},
                            column: {
                                approximation: "sum",
                                groupPixelWidth: 10
                            },
                            arearange: {
                                approximation: "range"
                            },
                            areasplinerange: {
                                approximation: "range"
                            },
                            columnrange: {
                                approximation: "range",
                                groupPixelWidth: 10
                            },
                            candlestick: {
                                approximation: "ohlc",
                                groupPixelWidth: 10
                            },
                            ohlc: {
                                approximation: "ohlc",
                                groupPixelWidth: 5
                            }
                        },
                        _ = t.defaultDataGroupingUnits = [
                            ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                            ["second", [1, 2, 5, 10, 15, 30]],
                            ["minute", [1, 2, 5, 10, 15, 30]],
                            ["hour", [1, 2, 3, 4, 6, 8, 12]],
                            ["day", [1]],
                            ["week", [1]],
                            ["month", [1, 3, 6]],
                            ["year", null]
                        ],
                        k = t.approximations = {
                            sum: function(t) {
                                var e, i = t.length;
                                if (!i && t.hasNulls) e = null;
                                else if (i)
                                    for (e = 0; i--;) e += t[i];
                                return e
                            },
                            average: function(t) {
                                var e = t.length;
                                return t = k.sum(t), h(t) && e && (t /= e), t
                            },
                            averages: function() {
                                var t = [];
                                return s(arguments, function(e) {
                                    t.push(k.average(e))
                                }), void 0 === t[0] ? void 0 : t
                            },
                            open: function(t) {
                                return t.length ? t[0] : t.hasNulls ? null : void 0
                            },
                            high: function(t) {
                                return t.length ? i(t) : t.hasNulls ? null : void 0
                            },
                            low: function(t) {
                                return t.length ? n(t) : t.hasNulls ? null : void 0
                            },
                            close: function(t) {
                                return t.length ? t[t.length - 1] : t.hasNulls ? null : void 0
                            },
                            ohlc: function(t, e, i, n) {
                                if (t = k.open(t), e = k.high(e), i = k.low(i), n = k.close(n), h(t) || h(e) || h(i) || h(n)) return [t, e, i, n]
                            },
                            range: function(t, e) {
                                return t = k.low(t), e = k.high(e), h(t) || h(e) ? [t, e] : null === t && null === e ? null : void 0
                            }
                        };
                    v.groupData = function(t, e, i, n) {
                        var r, o, l = this,
                            c = l.data,
                            d = l.options.data,
                            p = [],
                            f = [],
                            g = [],
                            m = t.length,
                            v = !!e,
                            y = [];
                        n = "function" === typeof n ? n : k[n] || w[l.type] && k[w[l.type].approximation] || k[b.approximation];
                        var x, _, S = l.pointArrayMap,
                            M = S && S.length,
                            A = ["x"].concat(S || ["y"]),
                            C = 0,
                            T = 0;
                        for (M ? s(S, function() {
                                y.push([])
                            }) : y.push([]), x = M || 1, _ = 0; _ <= m && !(t[_] >= i[0]); _++);
                        for (_; _ <= m; _++) {
                            for (; void 0 !== i[C + 1] && t[_] >= i[C + 1] || _ === m;) {
                                for (r = i[C], l.dataGroupInfo = {
                                        start: T,
                                        length: y[0].length
                                    }, o = n.apply(l, y), a(l.dataGroupInfo.options) || (l.dataGroupInfo.options = u(l.pointClass.prototype.optionsToObject.call({
                                        series: l
                                    }, l.options.data[T])), s(A, function(t) {
                                        delete l.dataGroupInfo.options[t]
                                    })), void 0 !== o && (p.push(r), f.push(o), g.push(l.dataGroupInfo)), T = _, r = 0; r < x; r++) y[r].length = 0, y[r].hasNulls = !1;
                                if (C += 1, _ === m) break
                            }
                            if (_ === m) break;
                            var P;
                            if (S)
                                for (r = l.cropStart + _, o = c && c[r] || l.pointClass.prototype.applyOptions.apply({
                                        series: l
                                    }, [d[r]]), r = 0; r < M; r++) P = o[S[r]], h(P) ? y[r].push(P) : null === P && (y[r].hasNulls = !0);
                            else r = v ? e[_] : null, h(r) ? y[0].push(r) : null === r && (y[0].hasNulls = !0)
                        }
                        return [p, f, g]
                    }, v.processData = function() {
                        var t, e, i = this.chart,
                            n = this.options.dataGrouping,
                            r = !1 !== this.allowDG && n && d(n.enabled, i.options.isStock),
                            o = this.visible || !i.options.chart.ignoreHiddenSeries,
                            s = this.currentDataGrouping;
                        if (this.forceCrop = r, this.groupPixelWidth = null, this.hasProcessed = !0, !1 !== y.apply(this, arguments) && r) {
                            this.destroyGroupedData();
                            var l, c = n.groupAll ? this.xData : this.processedXData,
                                h = n.groupAll ? this.yData : this.processedYData,
                                u = i.plotSizeX,
                                p = (i = this.xAxis, i.options.ordinal),
                                f = this.groupPixelWidth = i.getGroupPixelWidth && i.getGroupPixelWidth();
                            if (f) {
                                if (this.isDirty = t = !0, this.points = null, r = i.getExtremes(), e = r.min, r = r.max, p = p && i.getGroupIntervalFactor(e, r, this) || 1, f = f * (r - e) / u * p, u = i.getTimeTicks(i.normalizeTimeTickInterval(f, n.units || _), Math.min(e, c[0]), Math.max(r, c[c.length - 1]), i.options.startOfWeek, c, this.closestPointRange), h = v.groupData.apply(this, [c, h, u, n.approximation]), c = h[0], p = h[1], n.smoothed && c.length) {
                                    for (l = c.length - 1, c[l] = Math.min(c[l], r); l-- && 0 < l;) c[l] += f / 2;
                                    c[0] = Math.max(c[0], e)
                                }
                                e = u.info, this.closestPointRange = u.info.totalRange, this.groupMap = h[2], a(c[0]) && c[0] < i.dataMin && o && ((!a(i.options.min) && i.min <= i.dataMin || i.min === i.dataMin) && (i.min = c[0]), i.dataMin = c[0]), n.groupAll && (n = this.cropData(c, p, i.min, i.max, 1), c = n.xData, p = n.yData), this.processedXData = c, this.processedYData = p
                            } else this.groupMap = null;
                            this.hasGroupedData = t, this.currentDataGrouping = e, this.preventGraphAnimation = (s && s.totalRange) !== (e && e.totalRange)
                        }
                    }, v.destroyGroupedData = function() {
                        var t = this.groupedData;
                        s(t || [], function(e, i) {
                            e && (t[i] = e.destroy ? e.destroy() : null)
                        }), this.groupedData = null
                    }, v.generatePoints = function() {
                        x.apply(this), this.destroyGroupedData(), this.groupedData = this.hasGroupedData ? this.points : null
                    }, e(p, "update", function() {
                        if (this.dataGroup) return t.error(24), !1
                    }), m(g.prototype, "tooltipFooterHeaderFormatter", function(t, e, i) {
                        var n, r = this.chart.time,
                            o = e.series,
                            a = o.tooltipOptions,
                            s = o.options.dataGrouping,
                            u = a.xDateFormat,
                            d = o.xAxis;
                        return d && "datetime" === d.options.type && s && h(e.key) ? (t = o.currentDataGrouping, s = s.dateTimeLabelFormats, t ? (d = s[t.unitName], 1 === t.count ? u = d[0] : (u = d[1], n = d[2])) : !u && s && (u = this.getXDateFormat(e, a, d)), u = r.dateFormat(u, e.key), n && (u += r.dateFormat(n, e.key + t.totalRange - 1)), c(a[(i ? "footer" : "header") + "Format"], {
                            point: l(e.point, {
                                key: u
                            }),
                            series: o
                        }, r)) : t.call(this, e, i)
                    }), e(f, "destroy", v.destroyGroupedData), e(f, "afterSetOptions", function(t) {
                        t = t.options;
                        var e = this.type,
                            i = this.chart.options.plotOptions,
                            n = o[e].dataGrouping,
                            r = this.useCommonDataGrouping && b;
                        (w[e] || r) && (n || (n = u(b, w[e])), t.dataGrouping = u(r, n, i.series && i.series.dataGrouping, i[e].dataGrouping, this.userOptions.dataGrouping)), this.chart.options.isStock && (this.requireSorting = !0)
                    }), e(r, "afterSetScale", function() {
                        s(this.series, function(t) {
                            t.hasProcessed = !1
                        })
                    }), r.prototype.getGroupPixelWidth = function() {
                        var t, e, i = this.series,
                            n = i.length,
                            r = 0,
                            o = !1;
                        for (t = n; t--;)(e = i[t].options.dataGrouping) && (r = Math.max(r, e.groupPixelWidth));
                        for (t = n; t--;)(e = i[t].options.dataGrouping) && i[t].hasProcessed && (n = (i[t].processedXData || i[t].data).length, i[t].groupPixelWidth || n > this.chart.plotSizeX / r || n && e.forced) && (o = !0);
                        return o ? r : 0
                    }, r.prototype.setDataGrouping = function(t, e) {
                        var i;
                        if (e = d(e, !0), t || (t = {
                                forced: !1,
                                units: null
                            }), this instanceof r)
                            for (i = this.series.length; i--;) this.series[i].update({
                                dataGrouping: t
                            }, !1);
                        else s(this.chart.options.series, function(e) {
                            e.dataGrouping = t
                        }, !1);
                        this.ordinalSlope = null, e && this.chart.redraw()
                    }
                }(e),
                function(t) {
                    var e = t.each,
                        i = t.Point,
                        n = t.seriesType,
                        r = t.seriesTypes;
                    n("ohlc", "column", {
                        lineWidth: 1,
                        tooltip: {
                            pointFormat: '<span style="color:{point.color}">â—</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'
                        },
                        threshold: null,
                        states: {
                            hover: {
                                lineWidth: 3
                            }
                        },
                        stickyTracking: !0
                    }, {
                        directTouch: !1,
                        pointArrayMap: ["open", "high", "low", "close"],
                        toYData: function(t) {
                            return [t.open, t.high, t.low, t.close]
                        },
                        pointValKey: "close",
                        pointAttrToOptions: {
                            stroke: "color",
                            "stroke-width": "lineWidth"
                        },
                        init: function() {
                            r.column.prototype.init.apply(this, arguments), this.options.stacking = !1
                        },
                        pointAttribs: function(t, e) {
                            e = r.column.prototype.pointAttribs.call(this, t, e);
                            var i = this.options;
                            return delete e.fill, !t.options.color && i.upColor && t.open < t.close && (e.stroke = i.upColor), e
                        },
                        translate: function() {
                            var t = this,
                                i = t.yAxis,
                                n = !!t.modifyValue,
                                o = ["plotOpen", "plotHigh", "plotLow", "plotClose", "yBottom"];
                            r.column.prototype.translate.apply(t), e(t.points, function(r) {
                                e([r.open, r.high, r.low, r.close, r.low], function(e, a) {
                                    null !== e && (n && (e = t.modifyValue(e)), r[o[a]] = i.toPixels(e, !0))
                                }), r.tooltipPos[1] = r.plotHigh + i.pos - t.chart.plotTop
                            })
                        },
                        drawPoints: function() {
                            var t = this,
                                i = t.chart;
                            e(t.points, function(e) {
                                var n, r, o, a, s, l = e.graphic,
                                    c = !l;
                                void 0 !== e.plotY && (l || (e.graphic = l = i.renderer.path().add(t.group)), l.attr(t.pointAttribs(e, e.selected && "select")), r = l.strokeWidth() % 2 / 2, s = Math.round(e.plotX) - r, o = Math.round(e.shapeArgs.width / 2), a = ["M", s, Math.round(e.yBottom), "L", s, Math.round(e.plotHigh)], null !== e.open && (n = Math.round(e.plotOpen) + r, a.push("M", s, n, "L", s - o, n)), null !== e.close && (n = Math.round(e.plotClose) + r, a.push("M", s, n, "L", s + o, n)), l[c ? "attr" : "animate"]({
                                    d: a
                                }).addClass(e.getClassName(), !0))
                            })
                        },
                        animate: null
                    }, {
                        getClassName: function() {
                            return i.prototype.getClassName.call(this) + (this.open < this.close ? " highcharts-point-up" : " highcharts-point-down")
                        }
                    })
                }(e),
                function(t) {
                    var e = t.defaultPlotOptions,
                        i = t.each,
                        n = t.merge,
                        r = t.seriesType,
                        o = t.seriesTypes;
                    r("candlestick", "ohlc", n(e.column, {
                        states: {
                            hover: {
                                lineWidth: 2
                            }
                        },
                        tooltip: e.ohlc.tooltip,
                        threshold: null,
                        lineColor: "#000000",
                        lineWidth: 1,
                        upColor: "#ffffff",
                        stickyTracking: !0
                    }), {
                        pointAttribs: function(t, e) {
                            var i = o.column.prototype.pointAttribs.call(this, t, e),
                                n = this.options,
                                r = t.open < t.close,
                                a = n.lineColor || this.color;
                            return i["stroke-width"] = n.lineWidth, i.fill = t.options.color || r && n.upColor || this.color, i.stroke = t.lineColor || r && n.upLineColor || a, e && (t = n.states[e], i.fill = t.color || i.fill, i.stroke = t.lineColor || i.stroke, i["stroke-width"] = t.lineWidth || i["stroke-width"]), i
                        },
                        drawPoints: function() {
                            var t = this,
                                e = t.chart,
                                n = t.yAxis.reversed;
                            i(t.points, function(i) {
                                var r, o, a, s, l, c, h, u = i.graphic,
                                    d = !u;
                                void 0 !== i.plotY && (u || (i.graphic = u = e.renderer.path().add(t.group)), u.attr(t.pointAttribs(i, i.selected && "select")).shadow(t.options.shadow), l = u.strokeWidth() % 2 / 2, c = Math.round(i.plotX) - l, r = i.plotOpen, o = i.plotClose, a = Math.min(r, o), r = Math.max(r, o), h = Math.round(i.shapeArgs.width / 2), o = n ? r !== i.yBottom : Math.round(a) !== Math.round(i.plotHigh), s = n ? Math.round(a) !== Math.round(i.plotHigh) : r !== i.yBottom, a = Math.round(a) + l, r = Math.round(r) + l, l = [], l.push("M", c - h, r, "L", c - h, a, "L", c + h, a, "L", c + h, r, "Z", "M", c, a, "L", c, o ? Math.round(n ? i.yBottom : i.plotHigh) : a, "M", c, r, "L", c, s ? Math.round(n ? i.plotHigh : i.yBottom) : r), u[d ? "attr" : "animate"]({
                                    d: l
                                }).addClass(i.getClassName(), !0))
                            })
                        }
                    })
                }(e), i = function(t) {
                    var e = t.each,
                        i = t.defined,
                        n = t.seriesTypes,
                        r = t.stableSort;
                    return {
                        getPlotBox: function() {
                            return t.Series.prototype.getPlotBox.call(this.options.onSeries && this.chart.get(this.options.onSeries) || this)
                        },
                        translate: function() {
                            n.column.prototype.translate.apply(this);
                            var t, o, a, s, l, c, h = this.options,
                                u = this.chart,
                                d = this.points,
                                p = d.length - 1,
                                f = h.onSeries,
                                g = (f = f && u.get(f), h = h.onKey || "y", f && f.options.step),
                                m = f && f.points,
                                v = m && m.length,
                                y = u.inverted,
                                x = this.xAxis,
                                b = this.yAxis,
                                w = 0;
                            if (f && f.visible && v)
                                for (w = (f.pointXOffset || 0) + (f.barW || 0) / 2, t = f.currentDataGrouping, s = m[v - 1].x + (t ? t.totalRange : 0), r(d, function(t, e) {
                                        return t.x - e.x
                                    }), h = "plot" + h[0].toUpperCase() + h.substr(1); v-- && d[p] && (a = m[v], t = d[p], t.y = a.y, !(a.x <= t.x && void 0 !== a[h] && (t.x <= s && (t.plotY = a[h], a.x < t.x && !g && (l = m[v + 1]) && void 0 !== l[h] && (c = (t.x - a.x) / (l.x - a.x), t.plotY += c * (l[h] - a[h]), t.y += c * (l.y - a.y))), p--, v++, 0 > p))););
                            e(d, function(t, e) {
                                var n;
                                t.plotX += w, (void 0 === t.plotY || y) && (0 <= t.plotX && t.plotX <= x.len ? y ? (t.plotY = x.translate(t.x, 0, 1, 0, 1), t.plotX = i(t.y) ? b.translate(t.y, 0, 0, 0, 1) : 0) : t.plotY = u.chartHeight - x.bottom - (x.opposite ? x.height : 0) + x.offset - b.top : t.shapeArgs = {}), (o = d[e - 1]) && o.plotX === t.plotX && (void 0 === o.stackIndex && (o.stackIndex = 0), n = o.stackIndex + 1), t.stackIndex = n
                            }), this.onSeries = f
                        }
                    }
                }(e),
                function(t, e) {
                    function i(t) {
                        d[t + "pin"] = function(e, i, n, r, o) {
                            var a = o && o.anchorX;
                            return o = o && o.anchorY, "circle" === t && r > n && (e -= Math.round((r - n) / 2), n = r), e = d[t](e, i, n, r), a && o && (e.push("M", "circle" === t ? e[1] - e[4] : e[1] + e[4] / 2, i > o ? i : i + r, "L", a, o), e = e.concat(d.circle(a - 1, o - 1, 2, 2))), e
                        }
                    }
                    var n = t.addEvent,
                        r = t.each,
                        o = t.merge,
                        a = t.noop,
                        s = t.Renderer,
                        l = t.Series,
                        c = t.seriesType,
                        h = t.TrackerMixin,
                        u = t.VMLRenderer,
                        d = t.SVGRenderer.prototype.symbols;
                    c("flags", "column", {
                        pointRange: 0,
                        allowOverlapX: !1,
                        shape: "flag",
                        stackDistance: 12,
                        textAlign: "center",
                        tooltip: {
                            pointFormat: "{point.text}<br/>"
                        },
                        threshold: null,
                        y: -30,
                        fillColor: "#ffffff",
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineColor: "#000000",
                                fillColor: "#ccd6eb"
                            }
                        },
                        style: {
                            fontSize: "11px",
                            fontWeight: "bold"
                        }
                    }, {
                        sorted: !1,
                        noSharedTooltip: !0,
                        allowDG: !1,
                        takeOrdinalPosition: !1,
                        trackerGroups: ["markerGroup"],
                        forceCrop: !0,
                        init: l.prototype.init,
                        pointAttribs: function(t, e) {
                            var i = this.options,
                                n = t && t.color || this.color,
                                r = i.lineColor,
                                o = t && t.lineWidth;
                            return t = t && t.fillColor || i.fillColor, e && (t = i.states[e].fillColor, r = i.states[e].lineColor, o = i.states[e].lineWidth), {
                                fill: t || n,
                                stroke: r || n,
                                "stroke-width": o || i.lineWidth || 0
                            }
                        },
                        translate: e.translate,
                        getPlotBox: e.getPlotBox,
                        drawPoints: function() {
                            var e, i, n, a, s, l, c, h, u = this.points,
                                d = this.chart,
                                p = d.renderer,
                                f = d.inverted,
                                g = this.options,
                                m = g.y,
                                v = this.yAxis,
                                y = {},
                                x = [];
                            for (a = u.length; a--;) s = u[a], h = (f ? s.plotY : s.plotX) > this.xAxis.len, e = s.plotX, l = s.stackIndex, n = s.options.shape || g.shape, i = s.plotY, void 0 !== i && (i = s.plotY + m - (void 0 !== l && l * g.stackDistance)), s.anchorX = l ? void 0 : s.plotX, c = l ? void 0 : s.plotY, l = s.graphic, void 0 !== i && 0 <= e && !h ? (l || (l = s.graphic = p.label("", null, null, n, null, null, g.useHTML).attr(this.pointAttribs(s)).css(o(g.style, s.style)).attr({
                                align: "flag" === n ? "left" : "center",
                                width: g.width,
                                height: g.height,
                                "text-align": g.textAlign
                            }).addClass("highcharts-point").add(this.markerGroup), s.graphic.div && (s.graphic.div.point = s), l.shadow(g.shadow), l.isNew = !0), 0 < e && (e -= l.strokeWidth() % 2), n = {
                                y: i,
                                anchorY: c
                            }, g.allowOverlapX && (n.x = e, n.anchorX = s.anchorX), l.attr({
                                text: s.options.title || g.title || "A"
                            })[l.isNew ? "attr" : "animate"](n), g.allowOverlapX || (y[s.plotX] ? y[s.plotX].size = Math.max(y[s.plotX].size, l.width) : y[s.plotX] = {
                                align: 0,
                                size: l.width,
                                target: e,
                                anchorX: e
                            }), s.tooltipPos = [e, i + v.pos - d.plotTop]) : l && (s.graphic = l.destroy());
                            g.allowOverlapX || (t.objectEach(y, function(t) {
                                t.plotX = t.anchorX, x.push(t)
                            }), t.distribute(x, f ? v.len : this.xAxis.len, 100), r(u, function(t) {
                                var e = t.graphic && y[t.plotX];
                                e && (t.graphic[t.graphic.isNew ? "attr" : "animate"]({
                                    x: e.pos,
                                    anchorX: t.anchorX
                                }), e.pos ? t.graphic.isNew = !1 : (t.graphic.attr({
                                    x: -9999,
                                    anchorX: -9999
                                }), t.graphic.isNew = !0))
                            })), g.useHTML && t.wrap(this.markerGroup, "on", function(e) {
                                return t.SVGElement.prototype.on.apply(e.apply(this, [].slice.call(arguments, 1)), [].slice.call(arguments, 1))
                            })
                        },
                        drawTracker: function() {
                            var t = this.points;
                            h.drawTrackerPoint.apply(this), r(t, function(e) {
                                var i = e.graphic;
                                i && n(i.element, "mouseover", function() {
                                    0 < e.stackIndex && !e.raised && (e._y = i.y, i.attr({
                                        y: e._y - 8
                                    }), e.raised = !0), r(t, function(t) {
                                        t !== e && t.raised && t.graphic && (t.graphic.attr({
                                            y: t._y
                                        }), t.raised = !1)
                                    })
                                })
                            })
                        },
                        animate: function(t) {
                            t ? this.setClip() : this.animate = null
                        },
                        setClip: function() {
                            l.prototype.setClip.apply(this, arguments), !1 !== this.options.clip && this.sharedClipKey && this.markerGroup.clip(this.chart[this.sharedClipKey])
                        },
                        buildKDTree: a,
                        invertGroups: a
                    }), d.flag = function(t, e, i, n, r) {
                        var o = r && r.anchorX || t;
                        return r = r && r.anchorY || e, d.circle(o - 1, r - 1, 2, 2).concat(["M", o, r, "L", t, e + n, t, e, t + i, e, t + i, e + n, t, e + n, "Z"])
                    }, i("circle"), i("square"), s === u && r(["flag", "circlepin", "squarepin"], function(t) {
                        u.prototype.symbols[t] = d[t]
                    })
                }(e, i),
                function(t) {
                    function e(t, e, i) {
                        this.init(t, e, i)
                    }
                    var i, n = t.addEvent,
                        r = t.Axis,
                        o = t.correctFloat,
                        a = t.defaultOptions,
                        s = t.defined,
                        l = t.destroyObjectProperties,
                        c = t.each,
                        h = t.fireEvent,
                        u = t.hasTouch,
                        d = t.merge,
                        p = t.pick,
                        f = t.removeEvent,
                        g = {
                            height: t.isTouchDevice ? 20 : 14,
                            barBorderRadius: 0,
                            buttonBorderRadius: 0,
                            liveRedraw: void 0,
                            margin: 10,
                            minWidth: 6,
                            step: .2,
                            zIndex: 3,
                            barBackgroundColor: "#cccccc",
                            barBorderWidth: 1,
                            barBorderColor: "#cccccc",
                            buttonArrowColor: "#333333",
                            buttonBackgroundColor: "#e6e6e6",
                            buttonBorderColor: "#cccccc",
                            buttonBorderWidth: 1,
                            rifleColor: "#333333",
                            trackBackgroundColor: "#f2f2f2",
                            trackBorderColor: "#f2f2f2",
                            trackBorderWidth: 1
                        };
                    a.scrollbar = d(!0, g, a.scrollbar), t.swapXY = i = function(t, e) {
                        var i, n = t.length;
                        if (e)
                            for (e = 0; e < n; e += 3) i = t[e + 1], t[e + 1] = t[e + 2], t[e + 2] = i;
                        return t
                    }, e.prototype = {
                        init: function(t, e, i) {
                            this.scrollbarButtons = [], this.renderer = t, this.userOptions = e, this.options = d(g, e), this.chart = i, this.size = p(this.options.size, this.options.height), e.enabled && (this.render(), this.initEvents(), this.addEvents())
                        },
                        render: function() {
                            var t, e = this.renderer,
                                n = this.options,
                                r = this.size;
                            this.group = t = e.g("scrollbar").attr({
                                zIndex: n.zIndex,
                                translateY: -99999
                            }).add(), this.track = e.rect().addClass("highcharts-scrollbar-track").attr({
                                x: 0,
                                r: n.trackBorderRadius || 0,
                                height: r,
                                width: r
                            }).add(t), this.track.attr({
                                fill: n.trackBackgroundColor,
                                stroke: n.trackBorderColor,
                                "stroke-width": n.trackBorderWidth
                            }), this.trackBorderWidth = this.track.strokeWidth(), this.track.attr({
                                y: -this.trackBorderWidth % 2 / 2
                            }), this.scrollbarGroup = e.g().add(t), this.scrollbar = e.rect().addClass("highcharts-scrollbar-thumb").attr({
                                height: r,
                                width: r,
                                r: n.barBorderRadius || 0
                            }).add(this.scrollbarGroup), this.scrollbarRifles = e.path(i(["M", -3, r / 4, "L", -3, 2 * r / 3, "M", 0, r / 4, "L", 0, 2 * r / 3, "M", 3, r / 4, "L", 3, 2 * r / 3], n.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), this.scrollbar.attr({
                                fill: n.barBackgroundColor,
                                stroke: n.barBorderColor,
                                "stroke-width": n.barBorderWidth
                            }), this.scrollbarRifles.attr({
                                stroke: n.rifleColor,
                                "stroke-width": 1
                            }), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-this.scrollbarStrokeWidth % 2 / 2, -this.scrollbarStrokeWidth % 2 / 2), this.drawScrollbarButton(0), this.drawScrollbarButton(1)
                        },
                        position: function(t, e, i, n) {
                            var r = this.options.vertical,
                                o = 0,
                                a = this.rendered ? "animate" : "attr";
                            this.x = t, this.y = e + this.trackBorderWidth, this.width = i, this.xOffset = this.height = n, this.yOffset = o, r ? (this.width = this.yOffset = i = o = this.size, this.xOffset = e = 0, this.barWidth = n - 2 * i, this.x = t += this.options.margin) : (this.height = this.xOffset = n = e = this.size, this.barWidth = i - 2 * n, this.y += this.options.margin), this.group[a]({
                                translateX: t,
                                translateY: this.y
                            }), this.track[a]({
                                width: i,
                                height: n
                            }), this.scrollbarButtons[1][a]({
                                translateX: r ? 0 : i - e,
                                translateY: r ? n - o : 0
                            })
                        },
                        drawScrollbarButton: function(t) {
                            var e, n = this.renderer,
                                r = this.scrollbarButtons,
                                o = this.options,
                                a = this.size;
                            e = n.g().add(this.group), r.push(e), e = n.rect().addClass("highcharts-scrollbar-button").add(e), e.attr({
                                stroke: o.buttonBorderColor,
                                "stroke-width": o.buttonBorderWidth,
                                fill: o.buttonBackgroundColor
                            }), e.attr(e.crisp({
                                x: -.5,
                                y: -.5,
                                width: a + 1,
                                height: a + 1,
                                r: o.buttonBorderRadius
                            }, e.strokeWidth())), e = n.path(i(["M", a / 2 + (t ? -1 : 1), a / 2 - 3, "L", a / 2 + (t ? -1 : 1), a / 2 + 3, "L", a / 2 + (t ? 2 : -2), a / 2], o.vertical)).addClass("highcharts-scrollbar-arrow").add(r[t]), e.attr({
                                fill: o.buttonArrowColor
                            })
                        },
                        setRange: function(t, e) {
                            var i, n, r = this.options,
                                a = r.vertical,
                                l = r.minWidth,
                                c = this.barWidth,
                                h = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
                            s(c) && (t = Math.max(t, 0), i = Math.ceil(c * t), this.calculatedWidth = n = o(c * Math.min(e, 1) - i), n < l && (i = (c - l + n) * t, n = l), l = Math.floor(i + this.xOffset + this.yOffset), c = n / 2 - .5, this.from = t, this.to = e, a ? (this.scrollbarGroup[h]({
                                translateY: l
                            }), this.scrollbar[h]({
                                height: n
                            }), this.scrollbarRifles[h]({
                                translateY: c
                            }), this.scrollbarTop = l, this.scrollbarLeft = 0) : (this.scrollbarGroup[h]({
                                translateX: l
                            }), this.scrollbar[h]({
                                width: n
                            }), this.scrollbarRifles[h]({
                                translateX: c
                            }), this.scrollbarLeft = l, this.scrollbarTop = 0), 12 >= n ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(!0), !1 === r.showFull && (0 >= t && 1 <= e ? this.group.hide() : this.group.show()), this.rendered = !0)
                        },
                        initEvents: function() {
                            var t = this;
                            t.mouseMoveHandler = function(e) {
                                var i = t.chart.pointer.normalize(e),
                                    n = t.options.vertical ? "chartY" : "chartX",
                                    r = t.initPositions;
                                !t.grabbedCenter || e.touches && 0 === e.touches[0][n] || (i = t.cursorToScrollbarPosition(i)[n], n = t[n], n = i - n, t.hasDragged = !0, t.updatePosition(r[0] + n, r[1] + n), t.hasDragged && h(t, "changed", {
                                    from: t.from,
                                    to: t.to,
                                    trigger: "scrollbar",
                                    DOMType: e.type,
                                    DOMEvent: e
                                }))
                            }, t.mouseUpHandler = function(e) {
                                t.hasDragged && h(t, "changed", {
                                    from: t.from,
                                    to: t.to,
                                    trigger: "scrollbar",
                                    DOMType: e.type,
                                    DOMEvent: e
                                }), t.grabbedCenter = t.hasDragged = t.chartX = t.chartY = null
                            }, t.mouseDownHandler = function(e) {
                                e = t.chart.pointer.normalize(e), e = t.cursorToScrollbarPosition(e), t.chartX = e.chartX, t.chartY = e.chartY, t.initPositions = [t.from, t.to], t.grabbedCenter = !0
                            }, t.buttonToMinClick = function(e) {
                                var i = o(t.to - t.from) * t.options.step;
                                t.updatePosition(o(t.from - i), o(t.to - i)), h(t, "changed", {
                                    from: t.from,
                                    to: t.to,
                                    trigger: "scrollbar",
                                    DOMEvent: e
                                })
                            }, t.buttonToMaxClick = function(e) {
                                var i = (t.to - t.from) * t.options.step;
                                t.updatePosition(t.from + i, t.to + i), h(t, "changed", {
                                    from: t.from,
                                    to: t.to,
                                    trigger: "scrollbar",
                                    DOMEvent: e
                                })
                            }, t.trackClick = function(e) {
                                var i = t.chart.pointer.normalize(e),
                                    n = t.to - t.from,
                                    r = t.y + t.scrollbarTop,
                                    o = t.x + t.scrollbarLeft;
                                t.options.vertical && i.chartY > r || !t.options.vertical && i.chartX > o ? t.updatePosition(t.from + n, t.to + n) : t.updatePosition(t.from - n, t.to - n), h(t, "changed", {
                                    from: t.from,
                                    to: t.to,
                                    trigger: "scrollbar",
                                    DOMEvent: e
                                })
                            }
                        },
                        cursorToScrollbarPosition: function(t) {
                            var e = this.options;
                            e = e.minWidth > this.calculatedWidth ? e.minWidth : 0;
                            return {
                                chartX: (t.chartX - this.x - this.xOffset) / (this.barWidth - e),
                                chartY: (t.chartY - this.y - this.yOffset) / (this.barWidth - e)
                            }
                        },
                        updatePosition: function(t, e) {
                            1 < e && (t = o(1 - o(e - t)), e = 1), 0 > t && (e = o(e - t), t = 0), this.from = t, this.to = e
                        },
                        update: function(t) {
                            this.destroy(), this.init(this.chart.renderer, d(!0, this.options, t), this.chart)
                        },
                        addEvents: function() {
                            var t = this.options.inverted ? [1, 0] : [0, 1],
                                e = this.scrollbarButtons,
                                i = this.scrollbarGroup.element,
                                r = this.mouseDownHandler,
                                o = this.mouseMoveHandler,
                                a = this.mouseUpHandler;
                            t = [
                                [e[t[0]].element, "click", this.buttonToMinClick],
                                [e[t[1]].element, "click", this.buttonToMaxClick],
                                [this.track.element, "click", this.trackClick],
                                [i, "mousedown", r],
                                [i.ownerDocument, "mousemove", o],
                                [i.ownerDocument, "mouseup", a]
                            ];
                            u && t.push([i, "touchstart", r], [i.ownerDocument, "touchmove", o], [i.ownerDocument, "touchend", a]), c(t, function(t) {
                                n.apply(null, t)
                            }), this._events = t
                        },
                        removeEvents: function() {
                            c(this._events, function(t) {
                                f.apply(null, t)
                            }), this._events.length = 0
                        },
                        destroy: function() {
                            var t = this.chart.scroller;
                            this.removeEvents(), c(["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"], function(t) {
                                this[t] && this[t].destroy && (this[t] = this[t].destroy())
                            }, this), t && this === t.scrollbar && (t.scrollbar = null, l(t.scrollbarButtons))
                        }
                    }, n(r, "afterInit", function() {
                        var t = this;
                        t.options && t.options.scrollbar && t.options.scrollbar.enabled && (t.options.scrollbar.vertical = !t.horiz, t.options.startOnTick = t.options.endOnTick = !1, t.scrollbar = new e(t.chart.renderer, t.options.scrollbar, t.chart), n(t.scrollbar, "changed", function(e) {
                            var i, n = Math.min(p(t.options.min, t.min), t.min, t.dataMin),
                                r = Math.max(p(t.options.max, t.max), t.max, t.dataMax) - n;
                            t.horiz && !t.reversed || !t.horiz && t.reversed ? (i = n + r * this.to, n += r * this.from) : (i = n + r * (1 - this.from), n += r * (1 - this.to)), t.setExtremes(n, i, !0, !1, e)
                        }))
                    }), n(r, "afterRender", function() {
                        var t = Math.min(p(this.options.min, this.min), this.min, p(this.dataMin, this.min)),
                            e = Math.max(p(this.options.max, this.max), this.max, p(this.dataMax, this.max)),
                            i = this.scrollbar,
                            n = this.titleOffset || 0;
                        i && (this.horiz ? (i.position(this.left, this.top + this.height + 2 + this.chart.scrollbarsOffsets[1] + (this.opposite ? 0 : n + this.axisTitleMargin + this.offset), this.width, this.height), n = 1) : (i.position(this.left + this.width + 2 + this.chart.scrollbarsOffsets[0] + (this.opposite ? n + this.axisTitleMargin + this.offset : 0), this.top, this.width, this.height), n = 0), (!this.opposite && !this.horiz || this.opposite && this.horiz) && (this.chart.scrollbarsOffsets[n] += this.scrollbar.size + this.scrollbar.options.margin), isNaN(t) || isNaN(e) || !s(this.min) || !s(this.max) ? i.setRange(0, 0) : (n = (this.min - t) / (e - t), t = (this.max - t) / (e - t), this.horiz && !this.reversed || !this.horiz && this.reversed ? i.setRange(n, t) : i.setRange(1 - t, 1 - n)))
                    }), n(r, "afterGetOffset", function() {
                        var t = this.horiz ? 2 : 1,
                            e = this.scrollbar;
                        e && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[t] += e.size + e.options.margin)
                    }), t.Scrollbar = e
                }(e),
                function(t) {
                    function e(t) {
                        this.init(t)
                    }
                    var i = t.addEvent,
                        n = t.Axis,
                        r = t.Chart,
                        o = t.color,
                        a = t.defaultOptions,
                        s = t.defined,
                        l = t.destroyObjectProperties,
                        c = t.each,
                        h = t.erase,
                        u = t.error,
                        d = t.extend,
                        p = t.grep,
                        f = t.hasTouch,
                        g = t.isArray,
                        m = t.isNumber,
                        v = t.isObject,
                        y = t.isTouchDevice,
                        x = t.merge,
                        b = t.pick,
                        w = t.removeEvent,
                        _ = t.Scrollbar,
                        k = t.Series,
                        S = t.seriesTypes,
                        M = t.wrap,
                        A = [].concat(t.defaultDataGroupingUnits),
                        C = function(t) {
                            var e = p(arguments, m);
                            if (e.length) return Math[t].apply(0, e)
                        };
                    A[4] = ["day", [1, 2, 3, 4]], A[5] = ["week", [1, 2, 3]], S = void 0 === S.areaspline ? "line" : "areaspline", d(a, {
                        navigator: {
                            height: 40,
                            margin: 25,
                            maskInside: !0,
                            handles: {
                                width: 7,
                                height: 15,
                                symbols: ["navigator-handle", "navigator-handle"],
                                enabled: !0,
                                lineWidth: 1,
                                backgroundColor: "#f2f2f2",
                                borderColor: "#999999"
                            },
                            maskFill: o("#6685c2").setOpacity(.3).get(),
                            outlineColor: "#cccccc",
                            outlineWidth: 1,
                            series: {
                                type: S,
                                fillOpacity: .05,
                                lineWidth: 1,
                                compare: null,
                                dataGrouping: {
                                    approximation: "average",
                                    enabled: !0,
                                    groupPixelWidth: 2,
                                    smoothed: !0,
                                    units: A
                                },
                                dataLabels: {
                                    enabled: !1,
                                    zIndex: 2
                                },
                                id: "highcharts-navigator-series",
                                className: "highcharts-navigator-series",
                                lineColor: null,
                                marker: {
                                    enabled: !1
                                },
                                pointRange: 0,
                                threshold: null
                            },
                            xAxis: {
                                overscroll: 0,
                                className: "highcharts-navigator-xaxis",
                                tickLength: 0,
                                lineWidth: 0,
                                gridLineColor: "#e6e6e6",
                                gridLineWidth: 1,
                                tickPixelInterval: 200,
                                labels: {
                                    align: "left",
                                    style: {
                                        color: "#999999"
                                    },
                                    x: 3,
                                    y: -4
                                },
                                crosshair: !1
                            },
                            yAxis: {
                                className: "highcharts-navigator-yaxis",
                                gridLineWidth: 0,
                                startOnTick: !1,
                                endOnTick: !1,
                                minPadding: .1,
                                maxPadding: .1,
                                labels: {
                                    enabled: !1
                                },
                                crosshair: !1,
                                title: {
                                    text: null
                                },
                                tickLength: 0,
                                tickWidth: 0
                            }
                        }
                    }), t.Renderer.prototype.symbols["navigator-handle"] = function(t, e, i, n, r) {
                        return t = r.width / 2, e = Math.round(t / 3) + .5, r = r.height, ["M", -t - 1, .5, "L", t, .5, "L", t, r + .5, "L", -t - 1, r + .5, "L", -t - 1, .5, "M", -e, 4, "L", -e, r - 3, "M", e - 1, 4, "L", e - 1, r - 3]
                    }, e.prototype = {
                        drawHandle: function(t, e, i, n) {
                            var r = this.navigatorOptions.handles.height;
                            this.handles[e][n](i ? {
                                translateX: Math.round(this.left + this.height / 2),
                                translateY: Math.round(this.top + parseInt(t, 10) + .5 - r)
                            } : {
                                translateX: Math.round(this.left + parseInt(t, 10)),
                                translateY: Math.round(this.top + this.height / 2 - r / 2 - 1)
                            })
                        },
                        drawOutline: function(t, e, i, n) {
                            var r = this.navigatorOptions.maskInside,
                                o = this.outline.strokeWidth(),
                                a = o / 2,
                                s = (o = o % 2 / 2, this.outlineHeight),
                                l = this.scrollbarHeight,
                                c = this.size,
                                h = this.left - l,
                                u = this.top;
                            i ? (h -= a, i = u + e + o, e = u + t + o, t = ["M", h + s, u - l - o, "L", h + s, i, "L", h, i, "L", h, e, "L", h + s, e, "L", h + s, u + c + l].concat(r ? ["M", h + s, i - a, "L", h + s, e + a] : [])) : (t += h + l - o, e += h + l - o, u += a, t = ["M", h, u, "L", t, u, "L", t, u + s, "L", e, u + s, "L", e, u, "L", h + c + 2 * l, u].concat(r ? ["M", t - a, u, "L", e + a, u] : [])), this.outline[n]({
                                d: t
                            })
                        },
                        drawMasks: function(t, e, i, n) {
                            var r, o, a, s, l = this.left,
                                h = this.top,
                                u = this.height;
                            i ? (a = [l, l, l], s = [h, h + t, h + e], o = [u, u, u], r = [t, e - t, this.size - e]) : (a = [l, l + t, l + e], s = [h, h, h], o = [t, e - t, this.size - e], r = [u, u, u]), c(this.shades, function(t, e) {
                                t[n]({
                                    x: a[e],
                                    y: s[e],
                                    width: o[e],
                                    height: r[e]
                                })
                            })
                        },
                        renderElements: function() {
                            var t, e = this,
                                i = e.navigatorOptions,
                                n = i.maskInside,
                                r = e.chart,
                                o = r.inverted,
                                a = r.renderer;
                            e.navigatorGroup = t = a.g("navigator").attr({
                                zIndex: 8,
                                visibility: "hidden"
                            }).add();
                            var s = {
                                cursor: o ? "ns-resize" : "ew-resize"
                            };
                            c([!n, n, !n], function(n, r) {
                                e.shades[r] = a.rect().addClass("highcharts-navigator-mask" + (1 === r ? "-inside" : "-outside")).attr({
                                    fill: n ? i.maskFill : "rgba(0,0,0,0)"
                                }).css(1 === r && s).add(t)
                            }), e.outline = a.path().addClass("highcharts-navigator-outline").attr({
                                "stroke-width": i.outlineWidth,
                                stroke: i.outlineColor
                            }).add(t), i.handles.enabled && c([0, 1], function(n) {
                                i.handles.inverted = r.inverted, e.handles[n] = a.symbol(i.handles.symbols[n], -i.handles.width / 2 - 1, 0, i.handles.width, i.handles.height, i.handles), e.handles[n].attr({
                                    zIndex: 7 - n
                                }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][n]).add(t);
                                var o = i.handles;
                                e.handles[n].attr({
                                    fill: o.backgroundColor,
                                    stroke: o.borderColor,
                                    "stroke-width": o.lineWidth
                                }).css(s)
                            })
                        },
                        update: function(t) {
                            c(this.series || [], function(t) {
                                t.baseSeries && delete t.baseSeries.navigatorSeries
                            }), this.destroy(), x(!0, this.chart.options.navigator, this.options, t), this.init(this.chart)
                        },
                        render: function(e, i, n, r) {
                            var o, a, l, c = this.chart,
                                h = this.scrollbarHeight,
                                u = this.xAxis;
                            o = u.fake ? c.xAxis[0] : u;
                            var d, p = this.navigatorEnabled,
                                f = this.rendered;
                            a = c.inverted;
                            var g, v = c.xAxis[0].minRange,
                                y = c.xAxis[0].options.maxRange;
                            if (!this.hasDragged || s(n)) {
                                if (!m(e) || !m(i)) {
                                    if (!f) return;
                                    n = 0, r = b(u.width, o.width)
                                }
                                this.left = b(u.left, c.plotLeft + h + (a ? c.plotWidth : 0)), this.size = d = l = b(u.len, (a ? c.plotHeight : c.plotWidth) - 2 * h), c = a ? h : l + 2 * h, n = b(n, u.toPixels(e, !0)), r = b(r, u.toPixels(i, !0)), m(n) && 1 / 0 !== Math.abs(n) || (n = 0, r = c), e = u.toValue(n, !0), i = u.toValue(r, !0), g = Math.abs(t.correctFloat(i - e)), g < v ? this.grabbedLeft ? n = u.toPixels(i - v, !0) : this.grabbedRight && (r = u.toPixels(e + v, !0)) : s(y) && g > y && (this.grabbedLeft ? n = u.toPixels(i - y, !0) : this.grabbedRight && (r = u.toPixels(e + y, !0))), this.zoomedMax = Math.min(Math.max(n, r, 0), d), this.zoomedMin = Math.min(Math.max(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(n, r), 0), d), this.range = this.zoomedMax - this.zoomedMin, d = Math.round(this.zoomedMax), n = Math.round(this.zoomedMin), p && (this.navigatorGroup.attr({
                                    visibility: "visible"
                                }), f = f && !this.hasDragged ? "animate" : "attr", this.drawMasks(n, d, a, f), this.drawOutline(n, d, a, f), this.navigatorOptions.handles.enabled && (this.drawHandle(n, 0, a, f), this.drawHandle(d, 1, a, f))), this.scrollbar && (a ? (a = this.top - h, o = this.left - h + (p || !o.opposite ? 0 : (o.titleOffset || 0) + o.axisTitleMargin), h = l + 2 * h) : (a = this.top + (p ? this.height : -h), o = this.left - h), this.scrollbar.position(o, a, c, h), this.scrollbar.setRange(this.zoomedMin / (l || 1), this.zoomedMax / (l || 1))), this.rendered = !0
                            }
                        },
                        addMouseEvents: function() {
                            var t, e, n = this,
                                r = n.chart,
                                o = r.container,
                                a = [];
                            n.mouseMoveHandler = t = function(t) {
                                n.onMouseMove(t)
                            }, n.mouseUpHandler = e = function(t) {
                                n.onMouseUp(t)
                            }, a = n.getPartsEvents("mousedown"), a.push(i(o, "mousemove", t), i(o.ownerDocument, "mouseup", e)), f && (a.push(i(o, "touchmove", t), i(o.ownerDocument, "touchend", e)), a.concat(n.getPartsEvents("touchstart"))), n.eventsToUnbind = a, n.series && n.series[0] && a.push(i(n.series[0].xAxis, "foundExtremes", function() {
                                r.navigator.modifyNavigatorAxisExtremes()
                            }))
                        },
                        getPartsEvents: function(t) {
                            var e = this,
                                n = [];
                            return c(["shades", "handles"], function(r) {
                                c(e[r], function(o, a) {
                                    n.push(i(o.element, t, function(t) {
                                        e[r + "Mousedown"](t, a)
                                    }))
                                })
                            }), n
                        },
                        shadesMousedown: function(t, e) {
                            t = this.chart.pointer.normalize(t);
                            var i, n, r = this.chart,
                                o = this.xAxis,
                                a = this.zoomedMin,
                                l = this.left,
                                c = this.size,
                                h = this.range,
                                u = t.chartX;
                            r.inverted && (u = t.chartY, l = this.top), 1 === e ? (this.grabbedCenter = u, this.fixedWidth = h, this.dragOffset = u - a) : (t = u - l - h / 2, 0 === e ? t = Math.max(0, t) : 2 === e && t + h >= c && (t = c - h, this.reversedExtremes ? (t -= h, n = this.getUnionExtremes().dataMin) : i = this.getUnionExtremes().dataMax), t !== a && (this.fixedWidth = h, e = o.toFixedRange(t, t + h, n, i), s(e.min) && r.xAxis[0].setExtremes(Math.min(e.min, e.max), Math.max(e.min, e.max), !0, null, {
                                trigger: "navigator"
                            })))
                        },
                        handlesMousedown: function(t, e) {
                            this.chart.pointer.normalize(t), t = this.chart;
                            var i = t.xAxis[0],
                                n = this.reversedExtremes;
                            0 === e ? (this.grabbedLeft = !0, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = n ? i.min : i.max) : (this.grabbedRight = !0, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = n ? i.max : i.min), t.fixedRange = null
                        },
                        onMouseMove: function(e) {
                            var i = this,
                                n = i.chart,
                                r = i.left,
                                o = i.navigatorSize,
                                a = i.range,
                                s = i.dragOffset,
                                l = n.inverted;
                            e.touches && 0 === e.touches[0].pageX || (e = n.pointer.normalize(e), n = e.chartX, l && (r = i.top, n = e.chartY), i.grabbedLeft ? (i.hasDragged = !0, i.render(0, 0, n - r, i.otherHandlePos)) : i.grabbedRight ? (i.hasDragged = !0, i.render(0, 0, i.otherHandlePos, n - r)) : i.grabbedCenter && (i.hasDragged = !0, n < s ? n = s : n > o + s - a && (n = o + s - a), i.render(0, 0, n - s, n - s + a)), i.hasDragged && i.scrollbar && b(i.scrollbar.options.liveRedraw, t.svg && !y && !this.chart.isBoosting) && (e.DOMType = e.type, setTimeout(function() {
                                i.onMouseUp(e)
                            }, 0)))
                        },
                        onMouseUp: function(t) {
                            var e, i, n = this.chart,
                                r = this.xAxis,
                                o = this.scrollbar,
                                a = t.DOMEvent || t;
                            (!this.hasDragged || o && o.hasDragged) && "scrollbar" !== t.trigger || (o = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos ? e = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (i = this.fixedExtreme), this.zoomedMax === this.size && (i = this.reversedExtremes ? o.dataMin : o.dataMax), 0 === this.zoomedMin && (e = this.reversedExtremes ? o.dataMax : o.dataMin), r = r.toFixedRange(this.zoomedMin, this.zoomedMax, e, i), s(r.min) && n.xAxis[0].setExtremes(Math.min(r.min, r.max), Math.max(r.min, r.max), !0, !this.hasDragged && null, {
                                trigger: "navigator",
                                triggerOp: "navigator-drag",
                                DOMEvent: a
                            })), "mousemove" !== t.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null)
                        },
                        removeEvents: function() {
                            this.eventsToUnbind && (c(this.eventsToUnbind, function(t) {
                                t()
                            }), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents()
                        },
                        removeBaseSeriesEvents: function() {
                            var t = this.baseSeries || [];
                            this.navigatorEnabled && t[0] && (!1 !== this.navigatorOptions.adaptToUpdatedData && c(t, function(t) {
                                w(t, "updatedData", this.updatedDataHandler)
                            }, this), t[0].xAxis && w(t[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes))
                        },
                        init: function(t) {
                            var e = t.options,
                                r = e.navigator,
                                o = r.enabled,
                                a = e.scrollbar,
                                s = a.enabled,
                                l = (e = o ? r.height : 0, s ? a.height : 0);
                            this.handles = [], this.shades = [], this.chart = t, this.setBaseSeries(), this.height = e, this.scrollbarHeight = l, this.scrollbarEnabled = s, this.navigatorEnabled = o, this.navigatorOptions = r, this.scrollbarOptions = a, this.outlineHeight = e + l, this.opposite = b(r.opposite, !o && t.inverted);
                            var c = this,
                                h = (o = c.baseSeries, a = t.xAxis.length, s = t.yAxis.length, o && o[0] && o[0].xAxis || t.xAxis[0] || {
                                    options: {}
                                });
                            t.isDirtyBox = !0, c.navigatorEnabled ? (c.xAxis = new n(t, x({
                                breaks: h.options.breaks,
                                ordinal: h.options.ordinal
                            }, r.xAxis, {
                                id: "navigator-x-axis",
                                yAxis: "navigator-y-axis",
                                isX: !0,
                                type: "datetime",
                                index: a,
                                isInternal: !0,
                                offset: 0,
                                keepOrdinalPadding: !0,
                                startOnTick: !1,
                                endOnTick: !1,
                                minPadding: 0,
                                maxPadding: 0,
                                zoomEnabled: !1
                            }, t.inverted ? {
                                offsets: [l, 0, -l, 0],
                                width: e
                            } : {
                                offsets: [0, -l, 0, l],
                                height: e
                            })), c.yAxis = new n(t, x(r.yAxis, {
                                id: "navigator-y-axis",
                                alignTicks: !1,
                                offset: 0,
                                index: s,
                                isInternal: !0,
                                zoomEnabled: !1
                            }, t.inverted ? {
                                width: e
                            } : {
                                height: e
                            })), o || r.series.data ? c.updateNavigatorSeries(!1) : 0 === t.series.length && (c.unbindRedraw = i(t, "beforeRedraw", function() {
                                0 < t.series.length && !c.series && (c.setBaseSeries(), c.unbindRedraw())
                            })), c.reversedExtremes = t.inverted && !c.xAxis.reversed || !t.inverted && c.xAxis.reversed, c.renderElements(), c.addMouseEvents()) : c.xAxis = {
                                translate: function(e, i) {
                                    var n = t.xAxis[0],
                                        r = n.getExtremes(),
                                        o = n.len - 2 * l,
                                        a = C("min", n.options.min, r.dataMin);
                                    n = C("max", n.options.max, r.dataMax) - a;
                                    return i ? e * n / o + a : o * (e - a) / n
                                },
                                toPixels: function(t) {
                                    return this.translate(t)
                                },
                                toValue: function(t) {
                                    return this.translate(t, !0)
                                },
                                toFixedRange: n.prototype.toFixedRange,
                                fake: !0
                            }, t.options.scrollbar.enabled && (t.scrollbar = c.scrollbar = new _(t.renderer, x(t.options.scrollbar, {
                                margin: c.navigatorEnabled ? 0 : 10,
                                vertical: t.inverted
                            }), t), i(c.scrollbar, "changed", function(e) {
                                var i = c.size,
                                    n = i * this.to;
                                i *= this.from;
                                c.hasDragged = c.scrollbar.hasDragged, c.render(0, 0, i, n), (t.options.scrollbar.liveRedraw || "mousemove" !== e.DOMType && "touchmove" !== e.DOMType) && setTimeout(function() {
                                    c.onMouseUp(e)
                                })
                            })), c.addBaseSeriesEvents(), c.addChartEvents()
                        },
                        getUnionExtremes: function(t) {
                            var e, i = this.chart.xAxis[0],
                                n = this.xAxis,
                                r = n.options,
                                o = i.options;
                            return t && null === i.dataMin || (e = {
                                dataMin: b(r && r.min, C("min", o.min, i.dataMin, n.dataMin, n.min)),
                                dataMax: b(r && r.max, C("max", o.max, i.dataMax, n.dataMax, n.max))
                            }), e
                        },
                        setBaseSeries: function(t, e) {
                            var i = this.chart,
                                n = this.baseSeries = [];
                            t = t || i.options && i.options.navigator.baseSeries || 0, c(i.series || [], function(e, i) {
                                e.options.isInternal || !e.options.showInNavigator && (i !== t && e.options.id !== t || !1 === e.options.showInNavigator) || n.push(e)
                            }), this.xAxis && !this.xAxis.fake && this.updateNavigatorSeries(!0, e)
                        },
                        updateNavigatorSeries: function(e, i) {
                            var n, r, o, s = this,
                                l = s.chart,
                                h = s.baseSeries,
                                u = s.navigatorOptions.series,
                                p = {
                                    enableMouseTracking: !1,
                                    index: null,
                                    linkedTo: null,
                                    group: "nav",
                                    padXAxis: !1,
                                    xAxis: "navigator-x-axis",
                                    yAxis: "navigator-y-axis",
                                    showInLegend: !1,
                                    stacking: !1,
                                    isInternal: !0
                                },
                                f = s.series = t.grep(s.series || [], function(e) {
                                    var i = e.baseSeries;
                                    return !(0 > t.inArray(i, h)) || (i && (w(i, "updatedData", s.updatedDataHandler), delete i.navigatorSeries), e.chart && e.destroy(), !1)
                                });
                            h && h.length && c(h, function(t) {
                                var e = t.navigatorSeries,
                                    c = d({
                                        color: t.color,
                                        visible: t.visible
                                    }, g(u) ? a.navigator.series : u);
                                e && !1 === s.navigatorOptions.adaptToUpdatedData || (p.name = "Navigator " + h.length, n = t.options || {}, o = n.navigatorOptions || {}, r = x(n, p, c, o), c = o.data || c.data, s.hasNavigatorData = s.hasNavigatorData || !!c, r.data = c || n.data && n.data.slice(0), e && e.options ? e.update(r, i) : (t.navigatorSeries = l.initSeries(r), t.navigatorSeries.baseSeries = t, f.push(t.navigatorSeries)))
                            }), (!u.data || h && h.length) && !g(u) || (s.hasNavigatorData = !1, u = t.splat(u), c(u, function(t, e) {
                                p.name = "Navigator " + (f.length + 1), r = x(a.navigator.series, {
                                    color: l.series[e] && !l.series[e].options.isInternal && l.series[e].color || l.options.colors[e] || l.options.colors[0]
                                }, p, t), r.data = t.data, r.data && (s.hasNavigatorData = !0, f.push(l.initSeries(r)))
                            })), e && this.addBaseSeriesEvents()
                        },
                        addBaseSeriesEvents: function() {
                            var t = this,
                                e = t.baseSeries || [];
                            e[0] && e[0].xAxis && i(e[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes), c(e, function(e) {
                                i(e, "show", function() {
                                    this.navigatorSeries && this.navigatorSeries.setVisible(!0, !1)
                                }), i(e, "hide", function() {
                                    this.navigatorSeries && this.navigatorSeries.setVisible(!1, !1)
                                }), !1 !== this.navigatorOptions.adaptToUpdatedData && e.xAxis && i(e, "updatedData", this.updatedDataHandler), i(e, "remove", function() {
                                    this.navigatorSeries && (h(t.series, this.navigatorSeries), s(this.navigatorSeries.options) && this.navigatorSeries.remove(!1), delete this.navigatorSeries)
                                })
                            }, this)
                        },
                        getBaseSeriesMin: function(e) {
                            return t.reduce(this.baseSeries, function(t, e) {
                                return Math.min(t, e.xData[0])
                            }, e)
                        },
                        modifyNavigatorAxisExtremes: function() {
                            var t, e = this.xAxis;
                            e.getExtremes && (!(t = this.getUnionExtremes(!0)) || t.dataMin === e.min && t.dataMax === e.max || (e.min = t.dataMin, e.max = t.dataMax))
                        },
                        modifyBaseAxisExtremes: function() {
                            var t, e, i = this.chart.navigator,
                                n = this.getExtremes(),
                                r = n.dataMin,
                                o = n.dataMax,
                                a = (n = n.max - n.min, i.stickToMin),
                                s = i.stickToMax,
                                l = b(this.options.overscroll, 0),
                                c = i.series && i.series[0],
                                h = !!this.setExtremes;
                            this.eventArgs && "rangeSelectorButton" === this.eventArgs.trigger || (a && (e = r, t = e + n), s && (t = o + l, a || (e = Math.max(t - n, i.getBaseSeriesMin(c && c.xData ? c.xData[0] : -Number.MAX_VALUE)))), h && (a || s) && m(e) && (this.min = this.userMin = e, this.max = this.userMax = t)), i.stickToMin = i.stickToMax = null
                        },
                        updatedDataHandler: function() {
                            var t = this.chart.navigator,
                                e = this.navigatorSeries,
                                i = t.getBaseSeriesMin(this.xData[0]);
                            t.stickToMax = t.reversedExtremes ? 0 === Math.round(t.zoomedMin) : Math.round(t.zoomedMax) >= Math.round(t.size), t.stickToMin = m(this.xAxis.min) && this.xAxis.min <= i && (!this.chart.fixedRange || !t.stickToMax), e && !t.hasNavigatorData && (e.options.pointStart = this.xData[0], e.setData(this.options.data, !1, null, !1))
                        },
                        addChartEvents: function() {
                            this.eventsToUnbind || (this.eventsToUnbind = []), this.eventsToUnbind.push(i(this.chart, "redraw", function() {
                                var t = this.navigator,
                                    e = t && (t.baseSeries && t.baseSeries[0] && t.baseSeries[0].xAxis || t.scrollbar && this.xAxis[0]);
                                e && t.render(e.min, e.max)
                            }), i(this.chart, "getMargins", function() {
                                var t = this.navigator,
                                    e = t.opposite ? "plotTop" : "marginBottom";
                                this.inverted && (e = t.opposite ? "marginRight" : "plotLeft"), this[e] = (this[e] || 0) + (t.navigatorEnabled || !this.inverted ? t.outlineHeight : 0) + t.navigatorOptions.margin
                            }))
                        },
                        destroy: function() {
                            this.removeEvents(), this.xAxis && (h(this.chart.xAxis, this.xAxis), h(this.chart.axes, this.xAxis)), this.yAxis && (h(this.chart.yAxis, this.yAxis), h(this.chart.axes, this.yAxis)), c(this.series || [], function(t) {
                                t.destroy && t.destroy()
                            }), c("series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" "), function(t) {
                                this[t] && this[t].destroy && this[t].destroy(), this[t] = null
                            }, this), c([this.handles], function(t) {
                                l(t)
                            }, this)
                        }
                    }, t.Navigator = e, M(n.prototype, "zoom", function(t, e, i) {
                        var n, r = this.chart,
                            o = r.options,
                            a = o.chart.zoomType,
                            l = o.chart.pinchType,
                            c = o.navigator;
                        o = o.rangeSelector;
                        return this.isXAxis && (c && c.enabled || o && o.enabled) && (!y && "x" === a || y && "x" === l ? r.resetZoomButton = "blocked" : "y" === a ? n = !1 : (!y && "xy" === a || y && "xy" === l) && this.options.range && (r = this.previousZoom, s(e) ? this.previousZoom = [this.min, this.max] : r && (e = r[0], i = r[1], delete this.previousZoom))), void 0 !== n ? n : t.call(this, e, i)
                    }), i(r, "beforeRender", function() {
                        var t = this.options;
                        (t.navigator.enabled || t.scrollbar.enabled) && (this.scroller = this.navigator = new e(this))
                    }), i(r, "afterSetChartSize", function() {
                        var t, e, i, n, r = this.legend,
                            o = this.navigator;
                        o && (e = r && r.options, i = o.xAxis, n = o.yAxis, t = o.scrollbarHeight, this.inverted ? (o.left = o.opposite ? this.chartWidth - t - o.height : this.spacing[3] + t, o.top = this.plotTop + t) : (o.left = this.plotLeft + t, o.top = o.navigatorOptions.top || this.chartHeight - o.height - t - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (e && "bottom" === e.verticalAlign && e.enabled && !e.floating ? r.legendHeight + b(e.margin, 10) : 0)), i && n && (this.inverted ? i.options.left = n.options.left = o.left : i.options.top = n.options.top = o.top, i.setAxisSize(), n.setAxisSize()))
                    }), i(r, "update", function(t) {
                        var e = t.options.navigator || {},
                            i = t.options.scrollbar || {};
                        this.navigator || this.scroller || !e.enabled && !i.enabled || (x(!0, this.options.navigator, e), x(!0, this.options.scrollbar, i), delete t.options.navigator, delete t.options.scrollbar)
                    }), i(r, "afterUpdate", function() {
                        this.navigator || this.scroller || !this.options.navigator.enabled && !this.options.scrollbar.enabled || (this.scroller = this.navigator = new e(this))
                    }), M(k.prototype, "addPoint", function(t, e, i, n, r) {
                        var o = this.options.turboThreshold;
                        o && this.xData.length > o && v(e, !0) && this.chart.navigator && u(20, !0), t.call(this, e, i, n, r)
                    }), i(r, "afterAddSeries", function() {
                        this.navigator && this.navigator.setBaseSeries(null, !1)
                    }), i(k, "afterUpdate", function() {
                        this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, !1)
                    }), r.prototype.callbacks.push(function(t) {
                        var e = t.navigator;
                        e && t.xAxis[0] && (t = t.xAxis[0].getExtremes(), e.render(t.min, t.max))
                    })
                }(e),
                function(t) {
                    function e(t) {
                        this.init(t)
                    }
                    var i = t.addEvent,
                        n = t.Axis,
                        r = t.Chart,
                        o = t.css,
                        a = t.createElement,
                        s = t.defaultOptions,
                        l = t.defined,
                        c = t.destroyObjectProperties,
                        h = t.discardElement,
                        u = t.each,
                        d = t.extend,
                        p = t.fireEvent,
                        f = t.isNumber,
                        g = t.merge,
                        m = t.pick,
                        v = t.pInt,
                        y = t.splat,
                        x = t.wrap;
                    d(s, {
                        rangeSelector: {
                            verticalAlign: "top",
                            buttonTheme: {
                                "stroke-width": 0,
                                width: 28,
                                height: 18,
                                padding: 2,
                                zIndex: 7
                            },
                            floating: !1,
                            x: 0,
                            y: 0,
                            height: void 0,
                            inputPosition: {
                                align: "right",
                                x: 0,
                                y: 0
                            },
                            buttonPosition: {
                                align: "left",
                                x: 0,
                                y: 0
                            },
                            labelStyle: {
                                color: "#666666"
                            }
                        }
                    }), s.lang = g(s.lang, {
                        rangeSelectorZoom: "Zoom",
                        rangeSelectorFrom: "From",
                        rangeSelectorTo: "To"
                    }), e.prototype = {
                        clickButton: function(t, e) {
                            var r, o, a, s, l, c = this,
                                h = c.chart,
                                d = c.buttonOptions[t],
                                p = h.xAxis[0],
                                g = h.scroller && h.scroller.getUnionExtremes() || p || {},
                                v = g.dataMin,
                                x = g.dataMax,
                                b = p && Math.round(Math.min(p.max, m(x, p.max))),
                                w = d.type,
                                _ = (g = d._range, d.dataGrouping);
                            if (null !== v && null !== x) {
                                if (h.fixedRange = g, _ && (this.forcedDataGrouping = !0, n.prototype.setDataGrouping.call(p || {
                                        chart: this.chart
                                    }, _, !1), this.frozenStates = d.preserveDataGrouping), "month" === w || "year" === w) p ? (w = {
                                    range: d,
                                    max: b,
                                    chart: h,
                                    dataMin: v,
                                    dataMax: x
                                }, r = p.minFromRange.call(w), f(w.newMax) && (b = w.newMax)) : g = d;
                                else if (g) r = Math.max(b - g, v), b = Math.min(r + g, x);
                                else if ("ytd" === w) {
                                    if (!p) return void i(h, "beforeRender", function() {
                                        c.clickButton(t)
                                    });
                                    void 0 === x && (v = Number.MAX_VALUE, x = Number.MIN_VALUE, u(h.series, function(t) {
                                        t = t.xData, v = Math.min(t[0], v), x = Math.max(t[t.length - 1], x)
                                    }), e = !1), b = c.getYTDExtremes(x, v, h.time.useUTC), r = a = b.min, b = b.max
                                } else "all" === w && p && (r = v, b = x);
                                r += d._offsetMin, b += d._offsetMax, c.setSelected(t), p ? p.setExtremes(r, b, m(e, 1), null, {
                                    trigger: "rangeSelectorButton",
                                    rangeSelectorButton: d
                                }) : (o = y(h.options.xAxis)[0], l = o.range, o.range = g, s = o.min, o.min = a, i(h, "load", function() {
                                    o.range = l, o.min = s
                                }))
                            }
                        },
                        setSelected: function(t) {
                            this.selected = this.options.selected = t
                        },
                        defaultButtons: [{
                            type: "month",
                            count: 1,
                            text: "1m"
                        }, {
                            type: "month",
                            count: 3,
                            text: "3m"
                        }, {
                            type: "month",
                            count: 6,
                            text: "6m"
                        }, {
                            type: "ytd",
                            text: "YTD"
                        }, {
                            type: "year",
                            count: 1,
                            text: "1y"
                        }, {
                            type: "all",
                            text: "All"
                        }],
                        init: function(t) {
                            var e = this,
                                n = t.options.rangeSelector,
                                r = n.buttons || [].concat(e.defaultButtons),
                                o = n.selected,
                                a = function() {
                                    var t = e.minInput,
                                        i = e.maxInput;
                                    t && t.blur && p(t, "blur"), i && i.blur && p(i, "blur")
                                };
                            e.chart = t, e.options = n, e.buttons = [], t.extraTopMargin = n.height, e.buttonOptions = r, this.unMouseDown = i(t.container, "mousedown", a), this.unResize = i(t, "resize", a), u(r, e.computeButtonRange), void 0 !== o && r[o] && this.clickButton(o, !1), i(t, "load", function() {
                                t.xAxis && t.xAxis[0] && i(t.xAxis[0], "setExtremes", function(i) {
                                    this.max - this.min !== t.fixedRange && "rangeSelectorButton" !== i.trigger && "updatedData" !== i.trigger && e.forcedDataGrouping && !e.frozenStates && this.setDataGrouping(!1, !1)
                                })
                            })
                        },
                        updateButtonStates: function() {
                            var t = this,
                                e = this.chart,
                                i = e.xAxis[0],
                                n = Math.round(i.max - i.min),
                                r = !i.hasVisibleSeries,
                                o = e.scroller && e.scroller.getUnionExtremes() || i,
                                a = o.dataMin,
                                s = o.dataMax,
                                l = (e = t.getYTDExtremes(s, a, e.time.useUTC), e.min),
                                c = e.max,
                                h = t.selected,
                                d = f(h),
                                p = t.options.allButtonsEnabled,
                                g = t.buttons;
                            u(t.buttonOptions, function(e, o) {
                                var u = e._range,
                                    f = e.type,
                                    m = e.count || 1,
                                    v = g[o],
                                    y = 0;
                                e = e._offsetMax - e._offsetMin, o = o === h;
                                var x = u > s - a,
                                    b = u < i.minRange,
                                    w = !1,
                                    _ = !1;
                                u = u === n;
                                ("month" === f || "year" === f) && n + 36e5 >= 864e5 * {
                                    month: 28,
                                    year: 365
                                } [f] * m - e && n - 36e5 <= 864e5 * {
                                    month: 31,
                                    year: 366
                                } [f] * m + e ? u = !0 : "ytd" === f ? (u = c - l + e === n, w = !o) : "all" === f && (u = i.max - i.min >= s - a, _ = !o && d && u), f = !p && (x || b || _ || r), m = o && u || u && !d && !w || o && t.frozenStates, f ? y = 3 : m && (d = !0, y = 2), v.state !== y && v.setState(y)
                            })
                        },
                        computeButtonRange: function(t) {
                            var e = t.type,
                                i = t.count || 1,
                                n = {
                                    millisecond: 1,
                                    second: 1e3,
                                    minute: 6e4,
                                    hour: 36e5,
                                    day: 864e5,
                                    week: 6048e5
                                };
                            n[e] ? t._range = n[e] * i : "month" !== e && "year" !== e || (t._range = 864e5 * {
                                month: 30,
                                year: 365
                            } [e] * i), t._offsetMin = m(t.offsetMin, 0), t._offsetMax = m(t.offsetMax, 0), t._range += t._offsetMax - t._offsetMin
                        },
                        setInputValue: function(t, e) {
                            var i = this.chart.options.rangeSelector,
                                n = this.chart.time,
                                r = this[t + "Input"];
                            l(e) && (r.previousValue = r.HCTime, r.HCTime = e), r.value = n.dateFormat(i.inputEditDateFormat || "%Y-%m-%d", r.HCTime), this[t + "DateBox"].attr({
                                text: n.dateFormat(i.inputDateFormat || "%b %e, %Y", r.HCTime)
                            })
                        },
                        showInput: function(t) {
                            var e = this.inputGroup,
                                i = this[t + "DateBox"];
                            o(this[t + "Input"], {
                                left: e.translateX + i.x + "px",
                                top: e.translateY + "px",
                                width: i.width - 2 + "px",
                                height: i.height - 2 + "px",
                                border: "2px solid silver"
                            })
                        },
                        hideInput: function(t) {
                            o(this[t + "Input"], {
                                border: 0,
                                width: "1px",
                                height: "1px"
                            }), this.setInputValue(t)
                        },
                        drawInput: function(t) {
                            function e() {
                                var t = i.value,
                                    e = (u.inputDateParser || Date.parse)(t),
                                    n = l.xAxis[0],
                                    o = l.scroller && l.scroller.xAxis ? l.scroller.xAxis : n,
                                    a = o.dataMin;
                                o = o.dataMax;
                                e !== i.previousValue && (i.previousValue = e, f(e) || (e = t.split("-"), e = Date.UTC(v(e[0]), v(e[1]) - 1, v(e[2]))), f(e) && (l.time.useUTC || (e += 6e4 * (new Date).getTimezoneOffset()), m ? e > r.maxInput.HCTime ? e = void 0 : e < a && (e = a) : e < r.minInput.HCTime ? e = void 0 : e > o && (e = o), void 0 !== e && n.setExtremes(m ? e : n.min, m ? n.max : e, void 0, void 0, {
                                    trigger: "rangeSelectorInput"
                                })))
                            }
                            var i, n, r = this,
                                l = r.chart,
                                c = l.renderer.style || {},
                                h = l.renderer,
                                u = l.options.rangeSelector,
                                p = r.div,
                                m = "min" === t,
                                y = this.inputGroup;
                            this[t + "Label"] = n = h.label(s.lang[m ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).addClass("highcharts-range-label").attr({
                                padding: 2
                            }).add(y), y.offset += n.width + 5, this[t + "DateBox"] = h = h.label("", y.offset).addClass("highcharts-range-input").attr({
                                padding: 2,
                                width: u.inputBoxWidth || 90,
                                height: u.inputBoxHeight || 17,
                                "text-align": "center",
                                stroke: u.inputBoxBorderColor || "#cccccc",
                                "stroke-width": 1
                            }).on("click", function() {
                                r.showInput(t), r[t + "Input"].focus()
                            }).add(y), y.offset += h.width + (m ? 10 : 0), this[t + "Input"] = i = a("input", {
                                name: t,
                                className: "highcharts-range-selector",
                                type: "text"
                            }, {
                                top: l.plotTop + "px"
                            }, p), n.css(g(c, u.labelStyle)), h.css(g({
                                color: "#333333"
                            }, c, u.inputStyle)), o(i, d({
                                position: "absolute",
                                border: 0,
                                width: "1px",
                                height: "1px",
                                padding: 0,
                                textAlign: "center",
                                fontSize: c.fontSize,
                                fontFamily: c.fontFamily,
                                top: "-9999em"
                            }, u.inputStyle)), i.onfocus = function() {
                                r.showInput(t)
                            }, i.onblur = function() {
                                r.hideInput(t)
                            }, i.onchange = e, i.onkeypress = function(t) {
                                13 === t.keyCode && e()
                            }
                        },
                        getPosition: function() {
                            var t = this.chart,
                                e = t.options.rangeSelector;
                            t = "top" === e.verticalAlign ? t.plotTop - t.axisOffset[0] : 0;
                            return {
                                buttonTop: t + e.buttonPosition.y,
                                inputTop: t + e.inputPosition.y - 10
                            }
                        },
                        getYTDExtremes: function(t, e, i) {
                            var n = this.chart.time,
                                r = new n.Date(t),
                                o = n.get("FullYear", r);
                            return i = i ? n.Date.UTC(o, 0, 1) : +new n.Date(o, 0, 1), e = Math.max(e || 0, i), r = r.getTime(), {
                                max: Math.min(t || r, r),
                                min: e
                            }
                        },
                        render: function(t, e) {
                            var i, n, r = this,
                                o = r.chart,
                                l = o.renderer,
                                c = o.container,
                                h = o.options,
                                d = h.exporting && !1 !== h.exporting.enabled && h.navigation && h.navigation.buttonOptions,
                                p = s.lang,
                                f = r.div,
                                g = h.rangeSelector,
                                v = m(h.chart.style && h.chart.style.zIndex, 0) + 1,
                                y = (h = g.floating, r.buttons),
                                x = (f = r.inputGroup, g.buttonTheme),
                                b = g.buttonPosition,
                                w = g.inputPosition,
                                _ = g.inputEnabled,
                                k = x && x.states,
                                S = o.plotLeft,
                                M = r.buttonGroup;
                            n = r.rendered;
                            var A, C = r.options.verticalAlign,
                                T = o.legend,
                                P = T && T.options,
                                O = b.y,
                                L = w.y,
                                E = n || !1,
                                D = E ? "animate" : "attr",
                                I = 0,
                                z = 0;
                            !1 !== g.enabled && (n || (r.group = n = l.g("range-selector-group").attr({
                                zIndex: 7
                            }).add(), r.buttonGroup = M = l.g("range-selector-buttons").add(n), r.zoomText = l.text(p.rangeSelectorZoom, 0, 15).css(g.labelStyle).add(M), u(r.buttonOptions, function(t, e) {
                                y[e] = l.button(t.text, 0, 0, function() {
                                    var i, n = t.events && t.events.click;
                                    n && (i = n.call(t)), !1 !== i && r.clickButton(e), r.isActive = !0
                                }, x, k && k.hover, k && k.select, k && k.disabled).attr({
                                    "text-align": "center"
                                }).add(M)
                            }), !1 !== _ && (r.div = f = a("div", null, {
                                position: "relative",
                                height: 0,
                                zIndex: v
                            }), c.parentNode.insertBefore(f, c), r.inputGroup = f = l.g("input-group").add(n), f.offset = 0, r.drawInput("min"), r.drawInput("max"))), r.zoomText[D]({
                                x: m(S + b.x, S)
                            }), i = m(S + b.x, S) + r.zoomText.getBBox().width + 5, u(r.buttonOptions, function(t, e) {
                                y[e][D]({
                                    x: i
                                }), i += y[e].width + m(g.buttonSpacing, 5)
                            }), S = o.plotLeft - o.spacing[3], r.updateButtonStates(), d && this.titleCollision(o) && "top" === C && "right" === b.align && b.y + M.getBBox().height - 12 < (d.y || 0) + d.height && (I = -40), "left" === b.align ? A = b.x - o.spacing[3] : "right" === b.align && (A = b.x + I - o.spacing[1]), M.align({
                                y: b.y,
                                width: M.getBBox().width,
                                align: b.align,
                                x: A
                            }, !0, o.spacingBox), r.group.placed = E, r.buttonGroup.placed = E, !1 !== _ && (I = d && this.titleCollision(o) && "top" === C && "right" === w.align && w.y - f.getBBox().height - 12 < (d.y || 0) + d.height + o.spacing[0] ? -40 : 0, "left" === w.align ? A = S : "right" === w.align && (A = -Math.max(o.axisOffset[1], -I)), f.align({
                                y: w.y,
                                width: f.getBBox().width,
                                align: w.align,
                                x: w.x + A - 2
                            }, !0, o.spacingBox), c = f.alignAttr.translateX + f.alignOptions.x - I + f.getBBox().x + 2, d = f.alignOptions.width, p = M.alignAttr.translateX + M.getBBox().x, A = M.getBBox().width + 20, (w.align === b.align || p + A > c && c + d > p && O < L + f.getBBox().height) && f.attr({
                                translateX: f.alignAttr.translateX + (o.axisOffset[1] >= -I ? 0 : -I),
                                translateY: f.alignAttr.translateY + M.getBBox().height + 10
                            }), r.setInputValue("min", t), r.setInputValue("max", e), r.inputGroup.placed = E), r.group.align({
                                verticalAlign: C
                            }, !0, o.spacingBox), t = r.group.getBBox().height + 20, e = r.group.alignAttr.translateY, "bottom" === C && (T = P && "bottom" === P.verticalAlign && P.enabled && !P.floating ? T.legendHeight + m(P.margin, 10) : 0, t = t + T - 20, z = e - t - (h ? 0 : g.y) - 10), "top" === C ? (h && (z = 0), o.titleOffset && (z = o.titleOffset + o.options.title.margin), z += o.margin[0] - o.spacing[0] || 0) : "middle" === C && (L === O ? z = 0 > L ? e + void 0 : e : (L || O) && (z = 0 > L || 0 > O ? z - Math.min(L, O) : e - t + NaN)), r.group.translate(g.x, g.y + Math.floor(z)), !1 !== _ && (r.minInput.style.marginTop = r.group.translateY + "px", r.maxInput.style.marginTop = r.group.translateY + "px"), r.rendered = !0)
                        },
                        getHeight: function() {
                            var t = this.options,
                                e = this.group,
                                i = t.y,
                                n = t.buttonPosition.y;
                            t = t.inputPosition.y, e = e ? e.getBBox(!0).height + 13 + i : 0, i = Math.min(t, n);
                            return (0 > t && 0 > n || 0 < t && 0 < n) && (e += Math.abs(i)), e
                        },
                        titleCollision: function(t) {
                            return !(t.options.title.text || t.options.subtitle.text)
                        },
                        update: function(t) {
                            var e = this.chart;
                            g(!0, e.options.rangeSelector, t), this.destroy(), this.init(e), e.rangeSelector.render()
                        },
                        destroy: function() {
                            var i = this,
                                n = i.minInput,
                                r = i.maxInput;
                            i.unMouseDown(), i.unResize(), c(i.buttons), n && (n.onfocus = n.onblur = n.onchange = null), r && (r.onfocus = r.onblur = r.onchange = null), t.objectEach(i, function(t, n) {
                                t && "chart" !== n && (t.destroy ? t.destroy() : t.nodeType && h(this[n])), t !== e.prototype[n] && (i[n] = null)
                            }, this)
                        }
                    }, n.prototype.toFixedRange = function(t, e, i, n) {
                        var r = this.chart && this.chart.fixedRange;
                        return t = m(i, this.translate(t, !0, !this.horiz)), e = m(n, this.translate(e, !0, !this.horiz)), i = r && (e - t) / r, .7 < i && 1.3 > i && (n ? t = e - r : e = t + r), f(t) && f(e) || (t = e = void 0), {
                            min: t,
                            max: e
                        }
                    }, n.prototype.minFromRange = function() {
                        var t, e, i, n = this.range,
                            r = {
                                month: "Month",
                                year: "FullYear"
                            } [n.type],
                            o = this.max,
                            a = function(t, e) {
                                var i = new Date(t),
                                    n = i["get" + r]();
                                return i["set" + r](n + e), n === i["get" + r]() && i.setDate(0), i.getTime() - t
                            };
                        return f(n) ? (t = o - n, i = n) : (t = o + a(o, -n.count), this.chart && (this.chart.fixedRange = o - t)), e = m(this.dataMin, Number.MIN_VALUE), f(t) || (t = e), t <= e && (t = e, void 0 === i && (i = a(t, n.count)), this.newMax = Math.min(t + i, this.dataMax)), f(o) || (t = void 0), t
                    }, i(r, "afterGetContainer", function() {
                        this.options.rangeSelector.enabled && (this.rangeSelector = new e(this))
                    }), x(r.prototype, "render", function(t, e, i) {
                        var n = this.axes,
                            r = this.rangeSelector;
                        r && (u(n, function(t) {
                            t.updateNames(), t.setScale()
                        }), this.getAxisMargins(), r.render(), n = r.options.verticalAlign, r.options.floating || ("bottom" === n ? this.extraBottomMargin = !0 : "middle" !== n && (this.extraTopMargin = !0))), t.call(this, e, i)
                    }), i(r, "update", function(t) {
                        var i = t.options.rangeSelector;
                        t = this.rangeSelector;
                        var n = this.extraBottomMargin,
                            r = this.extraTopMargin;
                        i && i.enabled && !l(t) && (this.options.rangeSelector.enabled = !0, this.rangeSelector = new e(this)), this.extraTopMargin = this.extraBottomMargin = !1, t && (t.render(), i = i && i.verticalAlign || t.options && t.options.verticalAlign, t.options.floating || ("bottom" === i ? this.extraBottomMargin = !0 : "middle" !== i && (this.extraTopMargin = !0)), this.extraBottomMargin !== n || this.extraTopMargin !== r) && (this.isDirtyBox = !0)
                    }), x(r.prototype, "redraw", function(t, e, i) {
                        var n = this.rangeSelector;
                        n && !n.options.floating && (n.render(), n = n.options.verticalAlign, "bottom" === n ? this.extraBottomMargin = !0 : "middle" !== n && (this.extraTopMargin = !0)), t.call(this, e, i)
                    }), i(r, "getMargins", function() {
                        var t = this.rangeSelector;
                        t && (t = t.getHeight(), this.extraTopMargin && (this.plotTop += t), this.extraBottomMargin && (this.marginBottom += t))
                    }), r.prototype.callbacks.push(function(t) {
                        function e() {
                            n = t.xAxis[0].getExtremes(), f(n.min) && a.render(n.min, n.max)
                        }
                        var n, r, o, a = t.rangeSelector;
                        a && (o = i(t.xAxis[0], "afterSetExtremes", function(t) {
                            a.render(t.min, t.max)
                        }), r = i(t, "redraw", e), e()), i(t, "destroy", function() {
                            a && (r(), o())
                        })
                    }), t.RangeSelector = e
                }(e),
                function(t) {
                    var e = t.addEvent,
                        i = t.arrayMax,
                        n = t.arrayMin,
                        r = t.Axis,
                        o = t.Chart,
                        a = t.defined,
                        s = t.each,
                        l = t.extend,
                        c = t.format,
                        h = t.grep,
                        u = t.inArray,
                        d = t.isNumber,
                        p = t.isString,
                        f = t.map,
                        g = t.merge,
                        m = t.pick,
                        v = t.Point,
                        y = t.Renderer,
                        x = t.Series,
                        b = t.splat,
                        w = t.SVGRenderer,
                        _ = t.VMLRenderer,
                        k = t.wrap,
                        S = x.prototype,
                        M = S.init,
                        A = S.processData,
                        C = v.prototype.tooltipFormatter;
                    t.StockChart = t.stockChart = function(e, i, n) {
                        var r, a = p(e) || e.nodeName,
                            s = arguments[a ? 1 : 0],
                            l = s.series,
                            c = t.getOptions(),
                            h = m(s.navigator && s.navigator.enabled, c.navigator.enabled, !0),
                            u = h ? {
                                startOnTick: !1,
                                endOnTick: !1
                            } : null,
                            d = {
                                marker: {
                                    enabled: !1,
                                    radius: 2
                                }
                            },
                            v = {
                                shadow: !1,
                                borderWidth: 0
                            };
                        return s.xAxis = f(b(s.xAxis || {}), function(t, e) {
                            return g({
                                minPadding: 0,
                                maxPadding: 0,
                                overscroll: 0,
                                ordinal: !0,
                                title: {
                                    text: null
                                },
                                labels: {
                                    overflow: "justify"
                                },
                                showLastLabel: !0
                            }, c.xAxis, c.xAxis && c.xAxis[e], t, {
                                type: "datetime",
                                categories: null
                            }, u)
                        }), s.yAxis = f(b(s.yAxis || {}), function(t, e) {
                            return r = m(t.opposite, !0), g({
                                labels: {
                                    y: -2
                                },
                                opposite: r,
                                showLastLabel: !(!t.categories && "category" !== t.type),
                                title: {
                                    text: null
                                }
                            }, c.yAxis, c.yAxis && c.yAxis[e], t)
                        }), s.series = null, s = g({
                            chart: {
                                panning: !0,
                                pinchType: "x"
                            },
                            navigator: {
                                enabled: h
                            },
                            scrollbar: {
                                enabled: m(c.scrollbar.enabled, !0)
                            },
                            rangeSelector: {
                                enabled: m(c.rangeSelector.enabled, !0)
                            },
                            title: {
                                text: null
                            },
                            tooltip: {
                                split: m(c.tooltip.split, !0),
                                crosshairs: !0
                            },
                            legend: {
                                enabled: !1
                            },
                            plotOptions: {
                                line: d,
                                spline: d,
                                area: d,
                                areaspline: d,
                                arearange: d,
                                areasplinerange: d,
                                column: v,
                                columnrange: v,
                                candlestick: v,
                                ohlc: v
                            }
                        }, s, {
                            isStock: !0
                        }), s.series = l, a ? new o(e, s, n) : new o(s, i)
                    }, k(r.prototype, "autoLabelAlign", function(t) {
                        var e = this.chart,
                            i = this.options,
                            n = (e = e._labelPanes = e._labelPanes || {}, this.options.labels);
                        return this.chart.options.isStock && "yAxis" === this.coll && (i = i.top + "," + i.height, !e[i] && n.enabled) ? (15 === n.x && (n.x = 0), void 0 === n.align && (n.align = "right"), e[i] = this, "right") : t.apply(this, [].slice.call(arguments, 1))
                    }), e(r, "destroy", function() {
                        var t = this.chart,
                            e = this.options && this.options.top + "," + this.options.height;
                        e && t._labelPanes && t._labelPanes[e] === this && delete t._labelPanes[e]
                    }), k(r.prototype, "getPlotLinePath", function(e, i, n, r, o, l) {
                        var c, h, g, v, y, x, b = this,
                            w = this.isLinked && !this.series ? this.linkedParent.series : this.series,
                            _ = b.chart,
                            k = _.renderer,
                            S = b.left,
                            M = b.top,
                            A = [],
                            C = [];
                        return "xAxis" !== b.coll && "yAxis" !== b.coll ? e.apply(this, [].slice.call(arguments, 1)) : (C = function(t) {
                            var e = "xAxis" === t ? "yAxis" : "xAxis";
                            return t = b.options[e], d(t) ? [_[e][t]] : p(t) ? [_.get(t)] : f(w, function(t) {
                                return t[e]
                            })
                        }(b.coll), s(b.isXAxis ? _.yAxis : _.xAxis, function(t) {
                            if (!a(t.options.id) || -1 === t.options.id.indexOf("navigator")) {
                                var e = t.isXAxis ? "yAxis" : "xAxis";
                                e = a(t.options[e]) ? _[e][t.options[e]] : _[e][0];
                                b === e && C.push(t)
                            }
                        }), y = C.length ? [] : [b.isXAxis ? _.yAxis[0] : _.xAxis[0]], s(C, function(e) {
                            -1 !== u(e, y) || t.find(y, function(t) {
                                return t.pos === e.pos && t.len === e.len
                            }) || y.push(e)
                        }), x = m(l, b.translate(i, null, null, r)), d(x) && (b.horiz ? s(y, function(t) {
                            var e;
                            h = t.pos, v = h + t.len, c = g = Math.round(x + b.transB), "pass" !== o && (c < S || c > S + b.width) && (o ? c = g = Math.min(Math.max(S, c), S + b.width) : e = !0), e || A.push("M", c, h, "L", g, v)
                        }) : s(y, function(t) {
                            var e;
                            c = t.pos, g = c + t.len, h = v = Math.round(M + b.height - x), "pass" !== o && (h < M || h > M + b.height) && (o ? h = v = Math.min(Math.max(M, h), b.top + b.height) : e = !0), e || A.push("M", c, h, "L", g, v)
                        })), 0 < A.length ? k.crispPolyLine(A, n || 1) : null)
                    }), w.prototype.crispPolyLine = function(t, e) {
                        var i;
                        for (i = 0; i < t.length; i += 6) t[i + 1] === t[i + 4] && (t[i + 1] = t[i + 4] = Math.round(t[i + 1]) - e % 2 / 2), t[i + 2] === t[i + 5] && (t[i + 2] = t[i + 5] = Math.round(t[i + 2]) + e % 2 / 2);
                        return t
                    }, y === _ && (_.prototype.crispPolyLine = w.prototype.crispPolyLine), k(r.prototype, "hideCrosshair", function(t, e) {
                        t.call(this, e), this.crossLabel && (this.crossLabel = this.crossLabel.hide())
                    }), e(r, "afterDrawCrosshair", function(t) {
                        var e, i;
                        if (a(this.crosshair.label) && this.crosshair.label.enabled && this.cross) {
                            var n = this.chart,
                                r = this.options.crosshair.label,
                                o = this.horiz;
                            e = this.opposite, i = this.left;
                            var s, h, u = this.top,
                                d = this.crossLabel,
                                p = r.format,
                                f = "",
                                g = "inside" === this.options.tickPosition,
                                v = !1 !== this.crosshair.snap,
                                y = 0,
                                x = t.e || this.cross && this.cross.e,
                                b = t.point;
                            t = this.lin2log, this.isLog ? (s = t(this.min), h = t(this.max)) : (s = this.min, h = this.max), t = o ? "center" : e ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center", d || (d = this.crossLabel = n.renderer.label(null, null, null, r.shape || "callout").addClass("highcharts-crosshair-label" + (this.series[0] && " highcharts-color-" + this.series[0].colorIndex)).attr({
                                align: r.align || t,
                                padding: m(r.padding, 8),
                                r: m(r.borderRadius, 3),
                                zIndex: 2
                            }).add(this.labelGroup), d.attr({
                                fill: r.backgroundColor || this.series[0] && this.series[0].color || "#666666",
                                stroke: r.borderColor || "",
                                "stroke-width": r.borderWidth || 0
                            }).css(l({
                                color: "#ffffff",
                                fontWeight: "normal",
                                fontSize: "11px",
                                textAlign: "center"
                            }, r.style))), o ? (t = v ? b.plotX + i : x.chartX, u += e ? 0 : this.height) : (t = e ? this.width + i : 0, u = v ? b.plotY + u : x.chartY), p || r.formatter || (this.isDatetimeAxis && (f = "%b %d, %Y"), p = "{value" + (f ? ":" + f : "") + "}"), f = v ? b[this.isXAxis ? "x" : "y"] : this.toValue(o ? x.chartX : x.chartY), d.attr({
                                text: p ? c(p, {
                                    value: f
                                }, n.time) : r.formatter.call(this, f),
                                x: t,
                                y: u,
                                visibility: f < s || f > h ? "hidden" : "visible"
                            }), r = d.getBBox(), o ? (g && !e || !g && e) && (u = d.y - r.height) : u = d.y - r.height / 2, o ? (e = i - r.x, i = i + this.width - r.x) : (e = "left" === this.labelAlign ? i : 0, i = "right" === this.labelAlign ? i + this.width : n.chartWidth), d.translateX < e && (y = e - d.translateX), d.translateX + r.width >= i && (y = -(d.translateX + r.width - i)), d.attr({
                                x: t + y,
                                y: u,
                                anchorX: o ? t : this.opposite ? 0 : n.chartWidth,
                                anchorY: o ? this.opposite ? n.chartHeight : 0 : u + r.height / 2
                            })
                        }
                    }), S.init = function() {
                        M.apply(this, arguments), this.setCompare(this.options.compare)
                    }, S.setCompare = function(t) {
                        this.modifyValue = "value" === t || "percent" === t ? function(e, i) {
                            var n = this.compareValue;
                            if (void 0 !== e && void 0 !== n) return e = "value" === t ? e - n : e / n * 100 - (100 === this.options.compareBase ? 0 : 100), i && (i.change = e), e
                        } : null, this.userOptions.compare = t, this.chart.hasRendered && (this.isDirty = !0)
                    }, S.processData = function() {
                        var t, e, i, n, r, o = -1,
                            a = !0 === this.options.compareStart ? 0 : 1;
                        if (A.apply(this, arguments), this.xAxis && this.processedYData)
                            for (e = this.processedXData, i = this.processedYData, n = i.length, this.pointArrayMap && (o = u("close", this.pointArrayMap), -1 === o && (o = u(this.pointValKey || "y", this.pointArrayMap))), t = 0; t < n - a; t++)
                                if (r = i[t] && -1 < o ? i[t][o] : i[t], d(r) && e[t + a] >= this.xAxis.min && 0 !== r) {
                                    this.compareValue = r;
                                    break
                                }
                    }, k(S, "getExtremes", function(t) {
                        var e;
                        t.apply(this, [].slice.call(arguments, 1)), this.modifyValue && (e = [this.modifyValue(this.dataMin), this.modifyValue(this.dataMax)], this.dataMin = n(e), this.dataMax = i(e))
                    }), r.prototype.setCompare = function(t, e) {
                        this.isXAxis || (s(this.series, function(e) {
                            e.setCompare(t)
                        }), m(e, !0) && this.chart.redraw())
                    }, v.prototype.tooltipFormatter = function(e) {
                        return e = e.replace("{point.change}", (0 < this.change ? "+" : "") + t.numberFormat(this.change, m(this.series.tooltipOptions.changeDecimals, 2))), C.apply(this, [e])
                    }, k(x.prototype, "render", function(t) {
                        var e;
                        this.chart.is3d && this.chart.is3d() || this.chart.polar || !this.xAxis || this.xAxis.isRadial || (e = this.yAxis.len - (this.xAxis.axisLine ? Math.floor(this.xAxis.axisLine.strokeWidth() / 2) : 0), !this.clipBox && this.animate ? (this.clipBox = g(this.chart.clipBox), this.clipBox.width = this.xAxis.len, this.clipBox.height = e) : this.chart[this.sharedClipKey] ? this.chart[this.sharedClipKey].attr({
                            width: this.xAxis.len,
                            height: e
                        }) : this.clipBox && (this.clipBox.width = this.xAxis.len, this.clipBox.height = e)), t.call(this)
                    }), k(o.prototype, "getSelectedPoints", function(t) {
                        var e = t.call(this);
                        return s(this.series, function(t) {
                            t.hasGroupedData && (e = e.concat(h(t.points || [], function(t) {
                                return t.selected
                            })))
                        }), e
                    }), e(o, "update", function(t) {
                        t = t.options, "scrollbar" in t && this.navigator && (g(!0, this.options.scrollbar, t.scrollbar), this.navigator.update({}, !1), delete t.scrollbar)
                    })
                }(e), e
        })
    },
    e5fa: function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    },
    e8ba: function(t, e, i) {
        (function(t, i) {
            i(e)
        })(0, function(t) {
            "use strict";
            const e = {
                    BTC: "Éƒ",
                    ETH: "Îž",
                    USD: "$",
                    CAD: "C$",
                    GBP: "Â£",
                    EUR: "â‚¬",
                    CHF: "Fr.",
                    SEK: "kr",
                    JPY: "Â¥",
                    CNY: "Â¥",
                    INR: "â‚¹",
                    RUB: "â‚½",
                    AUD: "A$",
                    HKD: "HK$",
                    SGD: "S$",
                    TWD: "NT$",
                    BRL: "R$",
                    KRW: "â‚©",
                    ZAR: "R",
                    MYR: "RM",
                    IDR: "Rp",
                    NZD: "NZ$",
                    MXN: "MX$",
                    PHP: "â‚±",
                    DKK: "kr.",
                    PLN: "zÅ‚",
                    AED: "DH",
                    ARS: "$",
                    CLP: "CLP",
                    CZK: "KÄ",
                    HUF: "Ft",
                    ILS: "â‚ª",
                    KWD: "KD",
                    LKR: "Rs",
                    NOK: "kr",
                    PKR: "â‚¨",
                    SAR: "SR",
                    THB: "à¸¿",
                    TRY: "â‚º",
                    XAU: "XAU",
                    XAG: "XAG",
                    XDR: "XDR"
                },
                i = {
                    MYR: {
                        location: {
                            start: !0
                        },
                        forLocales: {
                            en: !0
                        }
                    },
                    SGD: {
                        location: {
                            start: !0
                        },
                        forLocales: {
                            en: !0
                        }
                    },
                    PHP: {
                        location: {
                            start: !0
                        },
                        forLocales: {
                            en: !0
                        }
                    },
                    BTC: {
                        location: {
                            start: !0
                        },
                        forLocales: {
                            en: !0
                        }
                    },
                    ETH: {
                        location: {
                            start: !0
                        },
                        forLocales: {
                            en: !0
                        }
                    }
                };

            function n() {
                return !("object" != typeof Intl || !Intl || "function" != typeof Intl.NumberFormat)
            }

            function r(t) {
                return "BTC" === t || "ETH" === t
            }

            function o(t) {
                return r(t) || null == e[t]
            }

            function a(t, n = "en") {
                const r = t.match(/^[A-Z]{3}\s?/);
                if (null != r) {
                    const o = r[0].trim(),
                        a = i[o];
                    return a && a.location.start && a.forLocales[n] ? t.replace(r[0], e[o]) : t
                }
                const o = t.match(/[A-Z]{3}$/);
                if (null != o) {
                    const r = o[0],
                        a = i[r];
                    return a && a.location.end && a.forLocales[n] ? t.replace(r, e[r]) : t
                }
                return t
            }

            function s(t, e, i) {
                let n;
                try {
                    n = new Intl.NumberFormat(e, {
                        style: "currency",
                        currency: t,
                        currencyDisplay: "symbol",
                        minimumFractionDigits: i,
                        maximumFractionDigits: i
                    })
                } catch (r) {
                    return l(t, e, i)
                }
                return n
            }

            function l(t, e, i = 2) {
                return t = t.toUpperCase(), i > 2 ? {
                    format: e => {
                        return o(t) ? `${e.toFixed(i)} ${t}` : `${t} ${e.toFixed(i)}`
                    }
                } : {
                    format: i => {
                        return o(t) ? `${i.toLocaleString(e)} ${t}` : `${t} ${i.toLocaleString(e)}`
                    }
                }
            }

            function c(t, e, i) {
                const a = n(),
                    c = a && (!o(t) || r(t));
                return c ? s(t, e, i) : l(t, e, i)
            }
            let h, u, d, p, f, g, m, v = {};

            function y() {
                v = {}
            }

            function x(t, e) {
                const i = `${t}-${e}`,
                    n = v[i];
                d = n ? n.currencyFormatterNormal : c(t, e), p = n ? n.currencyFormatterNoDecimal : c(t, e, 0), f = n ? n.currencyFormatterMedium : c(t, e, 3), g = n ? n.currencyFormatterSmall : c(t, e, 6), m = n ? n.currencyFormatterVerySmall : c(t, e, 8), null == n && (v[i] = {}, v[i].currencyFormatterNormal = d, v[i].currencyFormatterNoDecimal = p, v[i].currencyFormatterMedium = f, v[i].currencyFormatterSmall = g, v[i].currencyFormatterVerySmall = m)
            }
            const b = 50,
                w = 1e3;

            function _(t, e, i = "en", n = !1) {
                if (e = e.toUpperCase(), h === e && u == i || (h = e, u = i, x(e, i)), o(e)) {
                    let e = parseFloat(t);
                    return n ? 0 === t ? e.toFixed(2) : e.toPrecision(8) : a(0 === t ? d.format(t) : e >= w ? p.format(t) : e >= b && e < w ? f.format(t) : e >= 1 && e < b ? g.format(t) : m.format(t), i)
                }
                return n ? t < .001 ? t.toFixed(8) : t < 1 ? t.toFixed(6) : t.toFixed(2) : a(0 === t ? d.format(t) : t < .05 ? m.format(t) : t < 1 ? g.format(t) : t > 2e4 ? p.format(t) : d.format(t), i)
            }
            t.isCrypto = o, t.clearCache = y, t.formatCurrency = _, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        })
    },
    e9ac: function(t, e, i) {
        "use strict";
        var n, r, o, a, s = Object.getOwnPropertyDescriptor ? function() {
                return Object.getOwnPropertyDescriptor(arguments, "callee").get
            }() : function() {
                throw new TypeError
            },
            l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator,
            c = Object.getPrototypeOf || function(t) {
                return t.__proto__
            },
            h = r ? c(r) : n,
            u = o ? o.constructor : n,
            d = a ? c(a) : n,
            p = a ? a() : n,
            f = "undefined" === typeof Uint8Array ? n : c(Uint8Array),
            g = {
                "$ %Array%": Array,
                "$ %ArrayBuffer%": "undefined" === typeof ArrayBuffer ? n : ArrayBuffer,
                "$ %ArrayBufferPrototype%": "undefined" === typeof ArrayBuffer ? n : ArrayBuffer.prototype,
                "$ %ArrayIteratorPrototype%": l ? c([][Symbol.iterator]()) : n,
                "$ %ArrayPrototype%": Array.prototype,
                "$ %ArrayProto_entries%": Array.prototype.entries,
                "$ %ArrayProto_forEach%": Array.prototype.forEach,
                "$ %ArrayProto_keys%": Array.prototype.keys,
                "$ %ArrayProto_values%": Array.prototype.values,
                "$ %AsyncFromSyncIteratorPrototype%": n,
                "$ %AsyncFunction%": u,
                "$ %AsyncFunctionPrototype%": u ? u.prototype : n,
                "$ %AsyncGenerator%": a ? c(p) : n,
                "$ %AsyncGeneratorFunction%": d,
                "$ %AsyncGeneratorPrototype%": d ? d.prototype : n,
                "$ %AsyncIteratorPrototype%": p && l && Symbol.asyncIterator ? p[Symbol.asyncIterator]() : n,
                "$ %Atomics%": "undefined" === typeof Atomics ? n : Atomics,
                "$ %Boolean%": Boolean,
                "$ %BooleanPrototype%": Boolean.prototype,
                "$ %DataView%": "undefined" === typeof DataView ? n : DataView,
                "$ %DataViewPrototype%": "undefined" === typeof DataView ? n : DataView.prototype,
                "$ %Date%": Date,
                "$ %DatePrototype%": Date.prototype,
                "$ %decodeURI%": decodeURI,
                "$ %decodeURIComponent%": decodeURIComponent,
                "$ %encodeURI%": encodeURI,
                "$ %encodeURIComponent%": encodeURIComponent,
                "$ %Error%": Error,
                "$ %ErrorPrototype%": Error.prototype,
                "$ %eval%": eval,
                "$ %EvalError%": EvalError,
                "$ %EvalErrorPrototype%": EvalError.prototype,
                "$ %Float32Array%": "undefined" === typeof Float32Array ? n : Float32Array,
                "$ %Float32ArrayPrototype%": "undefined" === typeof Float32Array ? n : Float32Array.prototype,
                "$ %Float64Array%": "undefined" === typeof Float64Array ? n : Float64Array,
                "$ %Float64ArrayPrototype%": "undefined" === typeof Float64Array ? n : Float64Array.prototype,
                "$ %Function%": Function,
                "$ %FunctionPrototype%": Function.prototype,
                "$ %Generator%": r ? c(r()) : n,
                "$ %GeneratorFunction%": h,
                "$ %GeneratorPrototype%": h ? h.prototype : n,
                "$ %Int8Array%": "undefined" === typeof Int8Array ? n : Int8Array,
                "$ %Int8ArrayPrototype%": "undefined" === typeof Int8Array ? n : Int8Array.prototype,
                "$ %Int16Array%": "undefined" === typeof Int16Array ? n : Int16Array,
                "$ %Int16ArrayPrototype%": "undefined" === typeof Int16Array ? n : Int8Array.prototype,
                "$ %Int32Array%": "undefined" === typeof Int32Array ? n : Int32Array,
                "$ %Int32ArrayPrototype%": "undefined" === typeof Int32Array ? n : Int32Array.prototype,
                "$ %isFinite%": isFinite,
                "$ %isNaN%": isNaN,
                "$ %IteratorPrototype%": l ? c(c([][Symbol.iterator]())) : n,
                "$ %JSON%": JSON,
                "$ %JSONParse%": JSON.parse,
                "$ %Map%": "undefined" === typeof Map ? n : Map,
                "$ %MapIteratorPrototype%": "undefined" !== typeof Map && l ? c((new Map)[Symbol.iterator]()) : n,
                "$ %MapPrototype%": "undefined" === typeof Map ? n : Map.prototype,
                "$ %Math%": Math,
                "$ %Number%": Number,
                "$ %NumberPrototype%": Number.prototype,
                "$ %Object%": Object,
                "$ %ObjectPrototype%": Object.prototype,
                "$ %ObjProto_toString%": Object.prototype.toString,
                "$ %ObjProto_valueOf%": Object.prototype.valueOf,
                "$ %parseFloat%": parseFloat,
                "$ %parseInt%": parseInt,
                "$ %Promise%": "undefined" === typeof Promise ? n : Promise,
                "$ %PromisePrototype%": "undefined" === typeof Promise ? n : Promise.prototype,
                "$ %PromiseProto_then%": "undefined" === typeof Promise ? n : Promise.prototype.then,
                "$ %Promise_all%": "undefined" === typeof Promise ? n : Promise.all,
                "$ %Promise_reject%": "undefined" === typeof Promise ? n : Promise.reject,
                "$ %Promise_resolve%": "undefined" === typeof Promise ? n : Promise.resolve,
                "$ %Proxy%": "undefined" === typeof Proxy ? n : Proxy,
                "$ %RangeError%": RangeError,
                "$ %RangeErrorPrototype%": RangeError.prototype,
                "$ %ReferenceError%": ReferenceError,
                "$ %ReferenceErrorPrototype%": ReferenceError.prototype,
                "$ %Reflect%": "undefined" === typeof Reflect ? n : Reflect,
                "$ %RegExp%": RegExp,
                "$ %RegExpPrototype%": RegExp.prototype,
                "$ %Set%": "undefined" === typeof Set ? n : Set,
                "$ %SetIteratorPrototype%": "undefined" !== typeof Set && l ? c((new Set)[Symbol.iterator]()) : n,
                "$ %SetPrototype%": "undefined" === typeof Set ? n : Set.prototype,
                "$ %SharedArrayBuffer%": "undefined" === typeof SharedArrayBuffer ? n : SharedArrayBuffer,
                "$ %SharedArrayBufferPrototype%": "undefined" === typeof SharedArrayBuffer ? n : SharedArrayBuffer.prototype,
                "$ %String%": String,
                "$ %StringIteratorPrototype%": l ? c("" [Symbol.iterator]()) : n,
                "$ %StringPrototype%": String.prototype,
                "$ %Symbol%": l ? Symbol : n,
                "$ %SymbolPrototype%": l ? Symbol.prototype : n,
                "$ %SyntaxError%": SyntaxError,
                "$ %SyntaxErrorPrototype%": SyntaxError.prototype,
                "$ %ThrowTypeError%": s,
                "$ %TypedArray%": f,
                "$ %TypedArrayPrototype%": f ? f.prototype : n,
                "$ %TypeError%": TypeError,
                "$ %TypeErrorPrototype%": TypeError.prototype,
                "$ %Uint8Array%": "undefined" === typeof Uint8Array ? n : Uint8Array,
                "$ %Uint8ArrayPrototype%": "undefined" === typeof Uint8Array ? n : Uint8Array.prototype,
                "$ %Uint8ClampedArray%": "undefined" === typeof Uint8ClampedArray ? n : Uint8ClampedArray,
                "$ %Uint8ClampedArrayPrototype%": "undefined" === typeof Uint8ClampedArray ? n : Uint8ClampedArray.prototype,
                "$ %Uint16Array%": "undefined" === typeof Uint16Array ? n : Uint16Array,
                "$ %Uint16ArrayPrototype%": "undefined" === typeof Uint16Array ? n : Uint16Array.prototype,
                "$ %Uint32Array%": "undefined" === typeof Uint32Array ? n : Uint32Array,
                "$ %Uint32ArrayPrototype%": "undefined" === typeof Uint32Array ? n : Uint32Array.prototype,
                "$ %URIError%": URIError,
                "$ %URIErrorPrototype%": URIError.prototype,
                "$ %WeakMap%": "undefined" === typeof WeakMap ? n : WeakMap,
                "$ %WeakMapPrototype%": "undefined" === typeof WeakMap ? n : WeakMap.prototype,
                "$ %WeakSet%": "undefined" === typeof WeakSet ? n : WeakSet,
                "$ %WeakSetPrototype%": "undefined" === typeof WeakSet ? n : WeakSet.prototype
            };
        t.exports = function(t, e) {
            if (arguments.length > 1 && "boolean" !== typeof e) throw new TypeError('"allowMissing" argument must be a boolean');
            var i = "$ " + t;
            if (!(i in g)) throw new SyntaxError("intrinsic " + t + " does not exist!");
            if ("undefined" === typeof g[i] && !e) throw new TypeError("intrinsic " + t + " exists, but is not available. Please file an issue!");
            return g[i]
        }
    },
    ebd6: function(t, e, i) {
        var n = i("cb7c"),
            r = i("d8e8"),
            o = i("2b4c")("species");
        t.exports = function(t, e) {
            var i, a = n(t).constructor;
            return void 0 === a || void 0 == (i = n(a)[o]) ? e : r(i)
        }
    },
    edd4: function(t) {
        t.exports = {
            coin_compare_chart_widget: {
                powered_by: "Powered by %{name_start}%{name}%{name_end}",
                crypto_price_comparison: "Crypto Price Comparison",
                crypto_market_cap_comparison: "Crypto Market Cap Comparison"
            },
            coin_price_static_headline_widget: {
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "24H High",
                "24h_low": "24H Low",
                view_price_chart: "View %{coin} Price Chart",
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "24H High",
                "24h_low": "24H Low",
                view_price_chart: "View %{coin} Price Chart",
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "View %{coin} Price Chart",
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: "Cryptocurrencies Tree Map",
                subtitle: "(Top %{top} by Market Cap)",
                powered_by: "Powered by %{name_start}%{name}%{name_end}"
            },
            random_coin_widget: {
                disclaimer: "Disclaimer: This tools serve as an entertainment and does not constitute financial advice.",
                spin: "Spin"
            },
            coin_daily_price_widget: {
                title: "CoinGecko Price Update",
                total_mcap: "Total M cap",
                "24h_vol": "24h Volume",
                dom: "Dom"
            },
            coin_market_ticker_list_widget: {
                "24h_high": "24H High",
                "24h_low": "24H Low",
                view_price_chart: "View Price Chart",
                powered_by: "Powered by %{name_start}%{name}%{name_end}",
                view_all: "VIEW ALL %{coin} MARKETS"
            }
        }
    },
    f159: function(t, e, i) {
        var n = i("7d8a"),
            r = i("1b55")("iterator"),
            o = i("b22a");
        t.exports = i("a7d3").getIteratorMethod = function(t) {
            if (void 0 != t) return t[r] || t["@@iterator"] || o[n(t)]
        }
    },
    f2fe: function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    },
    f367: function(t, e, i) {
        "use strict";
        var n = i("d6c7"),
            r = "function" === typeof Symbol && "symbol" === typeof Symbol("foo"),
            o = Object.prototype.toString,
            a = Array.prototype.concat,
            s = Object.defineProperty,
            l = function(t) {
                return "function" === typeof t && "[object Function]" === o.call(t)
            },
            c = function() {
                var t = {};
                try {
                    for (var e in s(t, "x", {
                            enumerable: !1,
                            value: t
                        }), t) return !1;
                    return t.x === t
                } catch (i) {
                    return !1
                }
            },
            h = s && c(),
            u = function(t, e, i, n) {
                (!(e in t) || l(n) && n()) && (h ? s(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value: i,
                    writable: !0
                }) : t[e] = i)
            },
            d = function(t, e) {
                var i = arguments.length > 2 ? arguments[2] : {},
                    o = n(e);
                r && (o = a.call(o, Object.getOwnPropertySymbols(e)));
                for (var s = 0; s < o.length; s += 1) u(t, o[s], e[o[s]], i[o[s]])
            };
        d.supportsDescriptors = !!h, t.exports = d
    },
    f3e0: function(t, e, i) {
        var n = i("0185"),
            r = i("7633");
        i("c165")("keys", function() {
            return function(t) {
                return r(n(t))
            }
        })
    },
    f568: function(t, e, i) {
        var n = i("3adc"),
            r = i("0f89"),
            o = i("7633");
        t.exports = i("7d95") ? Object.defineProperties : function(t, e) {
            r(t);
            var i, a = o(e),
                s = a.length,
                l = 0;
            while (s > l) n.f(t, i = a[l++], e[i]);
            return t
        }
    },
    f605: function(t, e) {
        t.exports = function(t, e, i, n) {
            if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(i + ": incorrect invocation!");
            return t
        }
    },
    f693: function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "Fourni par %{name_start}%{name}%{name_end}"
            },
            coin_price_chart_widget: {
                "24h_high": "Max. sur 24Â h",
                "24h_low": "Min. sur 24Â h",
                view_price_chart: "Voir le graphique des cours",
                powered_by: "Fourni par %{name_start}%{name}%{name_end}"
            },
            coin_price_marquee_widget: {
                powered_by: "Fourni par %{name_start}%{name}%{name_end}"
            },
            coin_list_widget: {
                powered_by: "Fourni par %{name_start}%{name}%{name_end}"
            },
            beam_widget: {
                powered_by: "Fourni par %{name_start}%{name}%{name_end}"
            },
            coin_ticker_widget: {
                "24h_high": "Max. sur 24Â h",
                "24h_low": "Min. sur 24Â h",
                view_price_chart: "Voir le graphique des cours",
                powered_by: "Fourni par %{name_start}%{name}%{name_end}"
            },
            coin_converter_widget: {
                view_price_chart: "Voir le graphique des cours",
                powered_by: "Fourni par %{name_start}%{name}%{name_end}"
            },
            coin_heatmap_widget: {
                title: "Arborescence des crypto-monnaies",
                subtitle: "(%{top} principales selon la capitalisation de marchÃ©)",
                powered_by: "Fourni par %{name_start}%{name}%{name_end}"
            }
        }
    },
    f845: function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    fa4e: function(t, e, i) {
        "use strict";
        var n = !1,
            r = function() {};
        if (n) {
            var o = function(t, e) {
                var i = arguments.length;
                e = new Array(i > 2 ? i - 2 : 0);
                for (var n = 2; n < i; n++) e[n - 2] = arguments[n];
                var r = 0,
                    o = "Warning: " + t.replace(/%s/g, function() {
                        return e[r++]
                    });
                "undefined" !== typeof console && console.error(o);
                try {
                    throw new Error(o)
                } catch (a) {}
            };
            r = function(t, e, i) {
                var n = arguments.length;
                i = new Array(n > 2 ? n - 2 : 0);
                for (var r = 2; r < n; r++) i[r - 2] = arguments[r];
                if (void 0 === e) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
                t || o.apply(null, [e].concat(i))
            }
        }
        t.exports = r
    },
    fa54: function(t, e, i) {
        "use strict";
        var n = i("b3e7"),
            r = i("245b"),
            o = i("b22a"),
            a = i("6a9b");
        t.exports = i("e4a9")(Array, "Array", function(t, e) {
            this._t = a(t), this._i = 0, this._k = e
        }, function() {
            var t = this._t,
                e = this._k,
                i = this._i++;
            return !t || i >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]])
        }, "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries")
    },
    fa5b: function(t, e, i) {
        t.exports = i("5537")("native-function-to-string", Function.toString)
    },
    fab2: function(t, e, i) {
        var n = i("7726").document;
        t.exports = n && n.documentElement
    },
    fda1: function(t, e, i) {
        e.f = i("1b55")
    },
    fda6: function(t, e, i) {
        i("f3e0"), t.exports = i("a7d3").Object.keys
    },
    fdef: function(t, e) {
        t.exports = "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff"
    },
    ff0c: function(t, e, i) {
        var n = i("43c8"),
            r = i("0185"),
            o = i("5d8f")("IE_PROTO"),
            a = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = r(t), n(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
        }
    },
    ffeb: function(t) {
        t.exports = {
            coin_price_static_headline_widget: {
                powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
            },
            coin_price_chart_widget: {
                "24h_high": "24S YÃ¼ksek",
                "24h_low": "24S DÃ¼ÅŸÃ¼k",
                view_price_chart: "Fiyat Tablosunu GÃ¶r",
                powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
            },
            coin_price_marquee_widget: {
                powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
            },
            coin_list_widget: {
                powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
            },
            beam_widget: {
                powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
            },
            coin_ticker_widget: {
                "24h_high": "24S YÃ¼ksek",
                "24h_low": "24S DÃ¼ÅŸÃ¼k",
                view_price_chart: "Fiyat Tablosunu GÃ¶r",
                powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
            },
            coin_converter_widget: {
                view_price_chart: "Fiyat Tablosunu GÃ¶r",
                powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
            },
            coin_heatmap_widget: {
                title: "Kripto Para AÄŸacÄ± HaritasÄ±",
                subtitle: "(Piyasa DeÄŸerine GÃ¶re Ä°lk %{top})",
                powered_by: "%{name_start}%{name}%{name_end} tarafÄ±ndan desteklenmektedir"
            }
        }
    }
});