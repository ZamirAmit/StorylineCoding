"use strict";

function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    }, _typeof(obj)
}

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable
        })), keys.push.apply(keys, symbols)
    }
    return keys
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
        })
    }
    return target
}

function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        })
    } else {
        obj[key] = value
    }
    return obj
}

function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key)
}

function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (hint === "string" ? String : Number)(input)
}
$(function() {
    var isDarkDefault = localStorage.getItem("theme-variant") == "dark";
    var themeVariantDefault = isDarkDefault ? "dark" : "light";
    var colors = {
        white: "#fff",
        black: "#424242"
    };
    var themeOptions = {
        light: {
            theme: {
                mode: "light",
                palette: "palette1"
            }
        },
        dark: {
            theme: {
                mode: "dark",
                palette: "palette1"
            }
        }
    };
    var chart1 = new ApexCharts(document.querySelector("#apexchart-1"), _objectSpread(_objectSpread({}, themeOptions[themeVariantDefault]), {}, {
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        chart: {
            height: 350,
            background: "transparent",
            type: "line",
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: "straight"
        },
        markers: {
            strokeColors: isDarkDefault ? colors.black : colors.white
        },
        title: {
            text: "Product Trends by Month",
            align: "left"
        },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"],
                opacity: .5
            }
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
        }
    }));
    var chart2 = new ApexCharts(document.querySelector("#apexchart-2"), _objectSpread(_objectSpread({}, themeOptions[themeVariantDefault]), {}, {
        series: [{
            name: "series1",
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: "series2",
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        chart: {
            height: 350,
            type: "area",
            background: "transparent"
        },
        fill: {
            type: "gradient"
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: "smooth"
        },
        markers: {
            strokeColors: isDarkDefault ? colors.black : colors.white
        },
        xaxis: {
            type: "datetime",
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm"
            }
        }
    }));
    var chart3 = new ApexCharts(document.querySelector("#apexchart-3"), _objectSpread(_objectSpread({}, themeOptions[themeVariantDefault]), {}, {
        series: [{
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        chart: {
            type: "bar",
            height: 350,
            background: "transparent"
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
        },
        xaxis: {
            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
        },
        yaxis: {
            title: {
                text: "$ (thousands)"
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function formatter(val) {
                    return "$ ".concat(val, " thousands")
                }
            }
        }
    }));
    var chart4 = new ApexCharts(document.querySelector("#apexchart-4"), _objectSpread(_objectSpread({}, themeOptions[themeVariantDefault]), {}, {
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        chart: {
            type: "bar",
            height: 350,
            background: "transparent"
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]
        }
    }));
    var chart5 = new ApexCharts(document.querySelector("#apexchart-5"), _objectSpread(_objectSpread({}, themeOptions[themeVariantDefault]), {}, {
        series: [{
            name: "Website Blog",
            type: "column",
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: "Social Media",
            type: "line",
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        chart: {
            height: 350,
            type: "line",
            background: "transparent"
        },
        stroke: {
            width: [0, 4]
        },
        markers: {
            strokeColors: isDarkDefault ? colors.black : colors.white
        },
        title: {
            text: "Traffic Sources"
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
        },
        labels: ["01 Jan 2001", "02 Jan 2001", "03 Jan 2001", "04 Jan 2001", "05 Jan 2001", "06 Jan 2001", "07 Jan 2001", "08 Jan 2001", "09 Jan 2001", "10 Jan 2001", "11 Jan 2001", "12 Jan 2001"],
        xaxis: {
            type: "datetime"
        },
        yaxis: [{
            title: {
                text: "Website Blog"
            }
        }, {
            opposite: true,
            title: {
                text: "Social Media"
            }
        }]
    }));
    var chart6 = new ApexCharts(document.querySelector("#apexchart-6"), _objectSpread(_objectSpread({}, themeOptions[themeVariantDefault]), {}, {
        series: [{
            data: [{
                x: "Code",
                y: [new Date("2019-03-02").getTime(), new Date("2019-03-04").getTime()]
            }, {
                x: "Test",
                y: [new Date("2019-03-04").getTime(), new Date("2019-03-08").getTime()]
            }, {
                x: "Validation",
                y: [new Date("2019-03-08").getTime(), new Date("2019-03-12").getTime()]
            }, {
                x: "Deployment",
                y: [new Date("2019-03-12").getTime(), new Date("2019-03-18").getTime()]
            }]
        }],
        chart: {
            height: 350,
            type: "rangeBar",
            background: "transparent"
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        xaxis: {
            type: "datetime"
        }
    }));
    var chart7 = new ApexCharts(document.querySelector("#apexchart-7"), _objectSpread(_objectSpread({}, themeOptions[themeVariantDefault]), {}, {
        series: [{
            data: [{
                x: new Date(15387786e5),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
            }, {
                x: new Date(15387804e5),
                y: [6632.01, 6643.59, 6620, 6630.11]
            }, {
                x: new Date(15387822e5),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
            }, {
                x: new Date(1538784e6),
                y: [6635.65, 6651, 6629.67, 6638.24]
            }, {
                x: new Date(15387858e5),
                y: [6638.24, 6640, 6620, 6624.47]
            }, {
                x: new Date(15387876e5),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
            }, {
                x: new Date(15387894e5),
                y: [6624.61, 6632.2, 6617, 6626.02]
            }, {
                x: new Date(15387912e5),
                y: [6627, 6627.62, 6584.22, 6603.02]
            }, {
                x: new Date(1538793e6),
                y: [6605, 6608.03, 6598.95, 6604.01]
            }, {
                x: new Date(15387948e5),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
            }, {
                x: new Date(15387966e5),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
            }, {
                x: new Date(15387984e5),
                y: [6608.91, 6618.99, 6608.01, 6612]
            }, {
                x: new Date(15388002e5),
                y: [6612, 6615.13, 6605.09, 6612]
            }, {
                x: new Date(1538802e6),
                y: [6612, 6624.12, 6608.43, 6622.95]
            }, {
                x: new Date(15388038e5),
                y: [6623.91, 6623.91, 6615, 6615.67]
            }, {
                x: new Date(15388056e5),
                y: [6618.69, 6618.74, 6610, 6610.4]
            }, {
                x: new Date(15388074e5),
                y: [6611, 6622.78, 6610.4, 6614.9]
            }, {
                x: new Date(15388092e5),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
            }, {
                x: new Date(1538811e6),
                y: [6623.48, 6627, 6618.38, 6620.35]
            }, {
                x: new Date(15388128e5),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
            }, {
                x: new Date(15388146e5),
                y: [6615.53, 6617.93, 6610, 6615.19]
            }, {
                x: new Date(15388164e5),
                y: [6615.19, 6621.6, 6608.2, 6620]
            }, {
                x: new Date(15388182e5),
                y: [6619.54, 6625.17, 6614.15, 6620]
            }, {
                x: new Date(153882e7),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
            }, {
                x: new Date(15388218e5),
                y: [6625.95, 6626, 6611.66, 6617.58]
            }, {
                x: new Date(15388236e5),
                y: [6619, 6625.97, 6595.27, 6598.86]
            }, {
                x: new Date(15388254e5),
                y: [6598.86, 6598.88, 6570, 6587.16]
            }, {
                x: new Date(15388272e5),
                y: [6588.86, 6600, 6580, 6593.4]
            }, {
                x: new Date(1538829e6),
                y: [6593.99, 6598.89, 6585, 6587.81]
            }, {
                x: new Date(15388308e5),
                y: [6587.81, 6592.73, 6567.14, 6578]
            }, {
                x: new Date(15388326e5),
                y: [6578.35, 6581.72, 6567.39, 6579]
            }, {
                x: new Date(15388344e5),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
            }, {
                x: new Date(15388362e5),
                y: [6575.96, 6589, 6571.77, 6588.92]
            }, {
                x: new Date(1538838e6),
                y: [6588.92, 6594, 6577.55, 6589.22]
            }, {
                x: new Date(15388398e5),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
            }, {
                x: new Date(15388416e5),
                y: [6597.5, 6600, 6588.39, 6596.25]
            }, {
                x: new Date(15388434e5),
                y: [6598.03, 6600, 6588.73, 6595.97]
            }, {
                x: new Date(15388452e5),
                y: [6595.97, 6602.01, 6588.17, 6602]
            }, {
                x: new Date(1538847e6),
                y: [6602, 6607, 6596.51, 6599.95]
            }, {
                x: new Date(15388488e5),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
            }, {
                x: new Date(15388506e5),
                y: [6591.02, 6603.08, 6591, 6591]
            }, {
                x: new Date(15388524e5),
                y: [6591, 6601.32, 6585, 6592]
            }, {
                x: new Date(15388542e5),
                y: [6593.13, 6596.01, 6590, 6593.34]
            }, {
                x: new Date(1538856e6),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
            }, {
                x: new Date(15388578e5),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
            }, {
                x: new Date(15388596e5),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
            }, {
                x: new Date(15388614e5),
                y: [6596.25, 6604.2, 6590, 6602.99]
            }, {
                x: new Date(15388632e5),
                y: [6602.99, 6606, 6584.99, 6587.81]
            }, {
                x: new Date(1538865e6),
                y: [6587.81, 6595, 6583.27, 6591.96]
            }, {
                x: new Date(15388668e5),
                y: [6591.97, 6596.07, 6585, 6588.39]
            }, {
                x: new Date(15388686e5),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
            }, {
                x: new Date(15388704e5),
                y: [6596.44, 6601, 6590, 6596.55]
            }, {
                x: new Date(15388722e5),
                y: [6598.91, 6605, 6596.61, 6600.02]
            }, {
                x: new Date(1538874e6),
                y: [6600.55, 6605, 6589.14, 6593.01]
            }, {
                x: new Date(15388758e5),
                y: [6593.15, 6605, 6592, 6603.06]
            }, {
                x: new Date(15388776e5),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
            }, {
                x: new Date(15388794e5),
                y: [6604.44, 6604.44, 6600, 6603.5]
            }, {
                x: new Date(15388812e5),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
            }, {
                x: new Date(1538883e6),
                y: [6603.85, 6605, 6600, 6604.07]
            }, {
                x: new Date(15388848e5),
                y: [6604.98, 6606, 6604.07, 6606]
            }]
        }],
        chart: {
            type: "candlestick",
            height: 350,
            background: "transparent"
        },
        title: {
            text: "CandleStick Chart",
            align: "left"
        },
        xaxis: {
            type: "datetime"
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    }));
    var chart8 = new ApexCharts(document.querySelector("#apexchart-8"),
        _objectSpread(_objectSpread({},
            themeOptions[themeVariantDefault]), {}, {
            series: [
                44,
                55
            ],
            chart: {
                width: 380,
                type: "pie",
                background: "transparent"
            },
            stroke: {
                colors: ["transparent"]
            },
            labels: [
                "Team A",
                "Team B"
            ],
            tooltip: {
                fillSeriesColor: false
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            }]
        }));
    chart8.render();
    chart8.updateOptions(themeOptions[themeVariant]);

    var chart9 = new ApexCharts(document.querySelector("#apexchart-9"), _objectSpread(_objectSpread({}, themeOptions[themeVariantDefault]), {}, {
        series: [{
            name: "SAMPLE A",
            data: [
                [16.4, 5.4],
                [21.7, 2],
                [25.4, 3],
                [19, 2],
                [10.9, 1],
                [13.6, 3.2],
                [10.9, 7.4],
                [10.9, 0],
                [10.9, 8.2],
                [16.4, 0],
                [16.4, 1.8],
                [13.6, .3],
                [13.6, 0],
                [29.9, 0],
                [27.1, 2.3],
                [16.4, 0],
                [13.6, 3.7],
                [10.9, 5.2],
                [16.4, 6.5],
                [10.9, 0],
                [24.5, 7.1],
                [10.9, 0],
                [8.1, 4.7],
                [19, 0],
                [21.7, 1.8],
                [27.1, 0],
                [24.5, 0],
                [27.1, 0],
                [29.9, 1.5],
                [27.1, .8],
                [22.1, 2]
            ]
        }, {
            name: "SAMPLE B",
            data: [
                [36.4, 13.4],
                [1.7, 11],
                [5.4, 8],
                [9, 17],
                [1.9, 4],
                [3.6, 12.2],
                [1.9, 14.4],
                [1.9, 9],
                [1.9, 13.2],
                [1.4, 7],
                [6.4, 8.8],
                [3.6, 4.3],
                [1.6, 10],
                [9.9, 2],
                [7.1, 15],
                [1.4, 0],
                [3.6, 13.7],
                [1.9, 15.2],
                [6.4, 16.5],
                [.9, 10],
                [4.5, 17.1],
                [10.9, 10],
                [.1, 14.7],
                [9, 10],
                [12.7, 11.8],
                [2.1, 10],
                [2.5, 10],
                [27.1, 10],
                [2.9, 11.5],
                [7.1, 10.8],
                [2.1, 12]
            ]
        }, {
            name: "SAMPLE C",
            data: [
                [21.7, 3],
                [23.6, 3.5],
                [24.6, 3],
                [29.9, 3],
                [21.7, 20],
                [23, 2],
                [10.9, 3],
                [28, 4],
                [27.1, .3],
                [16.4, 4],
                [13.6, 0],
                [19, 5],
                [22.4, 3],
                [24.5, 3],
                [32.6, 3],
                [27.1, 4],
                [29.6, 6],
                [31.6, 8],
                [21.6, 5],
                [20.9, 4],
                [22.4, 0],
                [32.6, 10.3],
                [29.7, 20.8],
                [24.5, .8],
                [21.4, 0],
                [21.7, 6.9],
                [28.6, 7.7],
                [15.4, 0],
                [18.1, 0],
                [33.4, 0],
                [16.4, 0]
            ]
        }],
        chart: {
            height: 350,
            type: "scatter",
            background: "transparent",
            zoom: {
                enabled: true,
                type: "xy"
            }
        },
        stroke: {
            show: false,
            colors: ["transparent"]
        },
        markers: {
            strokeColors: isDarkDefault ? colors.black : colors.white
        },
        xaxis: {
            tickAmount: 10,
            labels: {
                formatter: function formatter(val) {
                    return parseFloat(val).toFixed(1)
                }
            }
        },
        yaxis: {
            tickAmount: 7
        }
    }));
    var chart10 = new ApexCharts(document.querySelector("#apexchart-10"),
        _objectSpread(_objectSpread({},
            themeOptions[themeVariantDefault]), {}, {
            series: [{
                name: "Series 1",
                data: [80, 50, 30, 40, 100, 20]
            }],
            chart: {
                height: 350,
                type: "radar",
                background: "transparent"
            },
            markers: {
                strokeColors: isDarkDefault ? colors.black : colors.white
            },
            title: {
                text: "Basic Radar Chart"
            },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June"]
            }
        }));
    chart1.render();
    chart2.render();
    chart3.render();
    chart4.render();
    chart5.render();
    chart6.render();
    chart7.render();
    chart9.render();
    chart10.render();
    $("#theme-toggle").on("click", function() {
        var isDark = $("html").attr("data-theme") == "dark";
        var themeVariant = isDark ? "dark" : "light";
        chart1.updateOptions(_objectSpread(_objectSpread({}, themeOptions[themeVariant]), {}, {
            markers: {
                strokeColors: isDark ? colors.black : colors.white
            }
        }));
        chart2.updateOptions(_objectSpread(_objectSpread({}, themeOptions[themeVariant]), {}, {
            markers: {
                strokeColors: isDark ? colors.black : colors.white
            }
        }));
        chart3.updateOptions(themeOptions[themeVariant]);
        chart4.updateOptions(themeOptions[themeVariant]);
        chart5.updateOptions(_objectSpread(_objectSpread({}, themeOptions[themeVariant]), {}, {
            markers: {
                strokeColors: isDark ? colors.black : colors.white
            }
        }));
        chart6.updateOptions(themeOptions[themeVariant]);
        chart7.updateOptions(themeOptions[themeVariant]);
        chart9.updateOptions(_objectSpread(_objectSpread({}, themeOptions[themeVariant]), {}, {
            markers: {
                strokeColors: isDark ? colors.black : colors.white
            }
        }));
        chart10.updateOptions(_objectSpread(_objectSpread({}, themeOptions[themeVariant]), {}, {
            markers: {
                strokeColors: isDark ? colors.black : colors.white
            }
        }));

        function loadPieChart(data) {
            var chart8 = new ApexCharts(document.querySelector("#apexchart-8"),
                _objectSpread(_objectSpread({},
                    themeOptions[themeVariantDefault]), {}, {
                    series: [
                        data.passAmount,
                        data.failAmount
                    ],
                    chart: {
                        width: 380,
                        type: "pie",
                        background: "transparent"
                    },
                    stroke: {
                        colors: ["transparent"]
                    },
                    labels: [
                        "עברות את המבחן",
                        "נכשלו במבחן"
                    ],
                    tooltip: {
                        fillSeriesColor: false
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: "bottom"
                            }
                        }
                    }]
                }));
            chart8.render();
            chart8.updateOptions(themeOptions[themeVariant]);

        }



    })
});