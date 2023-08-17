window.onload = function(){
    /* 모든 차트에 대해서 동일한 옵션 적용을 위해서 setOptions를 사용한다. */
    Highcharts.setOptions({
        chart: {
            backgroundColor: {
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(200, 200, 2000)']
                ],
                color: '#000',

            },
        }
    });


    function lineChart() {
        /* char1, char2 로 개별적으로 차트를 줄수 있다. */
        /* chart type은 chart, series안에서도 각각 줄수가 있다. */
        let basicLine = function drawChart() {
            let basicL = new Highcharts.Chart({
            chart: {
                renderTo: 'basicL',
                type: 'line'

            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },

            series: [{
                name: 'Installation & Developers',
                data: [43934, 48656, 65165, 81827, 112143, 142383,
                    171533, 165174, 155157, 161454, 154610]
            }, {
                name: 'Manufacturing',
                data: [24916, 37941, 29742, 29851, 32490, 30282,
                    38121, 36885, 33726, 34243, 31050]
            }, {
                name: 'Sales & Distribution',
                data: [11744, 30000, 16005, 19771, 20185, 24377,
                    32147, 30912, 29243, 29213, 25663]
            }, {
                name: 'Operations & Maintenance',
                data: [null, null, null, null, null, null, null,
                    null, 11164, 11218, 10077]
            }, {
                name: 'Other',
                data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
                    17300, 13053, 11906, 10073]
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

            })
        }
        basicLine();  //default

        /* 인스턴스가 형성될때, 하나의 아이디에 2개의 인스턴스가 들어가면 마지막 인스턴스가 적용된다. */
        let dataLine = function drawChart02() {
            let basicL = new Highcharts.Chart({
                chart: {
                    renderTo: 'dataL',
                    type: 'line'

                },

                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true,
                            color: '#000'
                        },
                        enableMouseTracking: false
                    }
                },
                series: [{
                    name: 'Reggane',
                    data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
                        22.0, 17.8]
                }, {
                    name: 'Tallinn',
                    data: [-2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
                        2.0, -0.9]
                }]
            });
        };


        document.querySelector('.basicLine').addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector('.chartContainerLine').id = 'basicL'
            basicLine();
        })

        document.querySelector('.dataLine').addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector('.chartContainerLine').id = 'dataL'
            dataLine();
        })
    } lineChart();




    function areaChart() {

        let basicArea = function drawChart() {
            let basicA = new Highcharts.Chart({
                chart: {
                    renderTo: 'basicA',
                    type: 'area'

                },
                title: {
                    text: 'US and USSR nuclear stockpiles'
                },
                subtitle: {
                    text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
                        'target="_blank">FAS</a>'
                },
                xAxis: {
                    allowDecimals: false,
                    accessibility: {
                        rangeDescription: 'Range: 1940 to 2017.'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Nuclear weapon states'
                    }
                },
                tooltip: {
                    pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
                },
                plotOptions: {
                    area: {
                        pointStart: 1940,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: 'USA',
                    data: [
                        null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
                        1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
                        28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
                        26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
                        23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
                        21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
                        10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
                        5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
                        3750, 3708, 3708
                    ]
                }, {
                    name: 'USSR/Russia',
                    data: [null, null, null, null, null, null, null, null, null,
                        1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
                        3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
                        14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
                        32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
                        32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
                        13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
                        5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
                        4310, 4495, 4477
                    ]
                }]
            })
        }
        basicArea();  //default

        let percentageArea = function drawChart02() {
            let percentageA = new Highcharts.Chart({
                chart: {
                    renderTo: 'percentageA',
                    type: 'area'
                },
                title: {
                    useHTML: true,
                    text: 'Countries/regions with highest Gt CO<sub>2</sub>-emissions',
                    align: 'left'
                },
                subtitle: {
                    text: 'Source: ' +
                        '<a href="https://energiogklima.no/klimavakten/land-med-hoyest-utslipp/"' +
                        'target="_blank">Energi og Klima</a>',
                    align: 'left'
                },
                accessibility: {
                    point: {
                        valueDescriptionFormat: '{index}. {point.category}, {point.y:,.1f} billions, {point.percentage:.1f}%.'
                    }
                },
                yAxis: {
                    labels: {
                        format: '{value}%'
                    },
                    title: {
                        enabled: false
                    }
                },
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.1f} billion Gt)<br/>',
                    split: true
                },
                plotOptions: {
                    series: {
                        pointStart: 1990
                    },
                    area: {
                        stacking: 'percent',
                        marker: {
                            enabled: false
                        }
                    }
                },
                series: [{
                    name: 'China',
                    data: [2.5, 2.6, 2.7, 2.9, 3.1, 3.4, 3.5, 3.5, 3.4, 3.4, 3.4,
                        3.5, 3.9, 4.5, 5.2, 5.9, 6.5, 7, 7.5, 7.9, 8.6, 9.5, 9.8,
                        10, 10, 9.8, 9.7, 9.9, 10.3, 10.5, 10.7, 10.9
                    ]
                }, {
                    name: 'USA',
                    data: [5.1, 5.1, 5.2, 5.3, 5.4, 5.4, 5.6, 5.7, 5.7, 5.8, 6, 5.9,
                        5.9, 6, 6.1, 6.1, 6.1, 6.1, 5.9, 5.5, 5.7, 5.5, 5.3, 5.5,
                        5.5, 5.4, 5.2, 5.2, 5.4, 5.3, 4.7, 5
                    ]
                }, {
                    name: 'EU',
                    data: [3.9, 3.8, 3.7, 3.6, 3.6, 3.6, 3.7, 3.7, 3.6, 3.6, 3.6, 3.7,
                        3.7, 3.7, 3.8, 3.7, 3.7, 3.7, 3.6, 3.3, 3.4, 3.3, 3.3, 3.2, 3,
                        3.1, 3.1, 3.1, 3, 2.9, 2.6, 2.7]
                }, {
                    name: 'India',
                    data: [0.6, 0.6, 0.7, 0.7, 0.7, 0.8, 0.8, 0.9, 0.9, 1, 1, 1,
                        1, 1.1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 2, 2,
                        2.2, 2.3, 2.4, 2.4, 2.6, 2.6, 2.4, 2.7]
                }]
            })
        };


        document.querySelector('.basicArea').addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector('.chartContainerArea').id = 'basicA'
            basicArea();
        })

        document.querySelector('.percentageArea').addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector('.chartContainerArea').id = 'percentageA'
            percentageArea();
        })
    } areaChart();


    function barChart() {
        let basicBar = function drawChart() {
            let basicB = new Highcharts.Chart({
                chart: {
                    renderTo: 'basicB',
                    type: 'bar'
                },
                title: {
                    text: 'Historic World Population by Region',
                    align: 'left'
                },
                subtitle: {
                    text: 'Source: <a ' +
                        'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
                        'target="_blank">Wikipedia.org</a>',
                    align: 'left'
                },
                xAxis: {
                    categories: ['Africa', 'America', 'Asia', 'Europe'],
                    title: {
                        text: null
                    },
                    gridLineWidth: 1,
                    lineWidth: 0
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Population (millions)',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    },
                    gridLineWidth: 0
                },
                tooltip: {
                    valueSuffix: ' millions'
                },
                plotOptions: {
                    bar: {
                        borderRadius: '50%',
                        dataLabels: {
                            color: '#000',
                            enabled: true
                        },
                        groupPadding: 0.1
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor:
                        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Year 1990',
                    data: [631, 727, 3202, 721]
                }, {
                    name: 'Year 2000',
                    data: [814, 841, 3714, 726]
                }, {
                    name: 'Year 2018',
                    data: [1276, 1007, 4561, 746]
                }]
            })
        }
        basicBar();  //default

        let columnBar = function drawChart02() {
            let columnB = new Highcharts.Chart({
                chart: {
                    renderTo: 'columnB',
                    type: 'column'
                },
                title: {
                    text: 'Corn vs wheat estimated production for 2020',
                    align: 'left'
                },
                subtitle: {
                    text:
                        'Source: <a target="_blank" ' +
                        'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
                    align: 'left'
                },
                xAxis: {
                    categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
                    crosshair: true,
                    accessibility: {
                        description: 'Countries'
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '1000 metric tons (MT)'
                    }
                },
                tooltip: {
                    valueSuffix: ' (1000 MT)'
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [
                    {
                        name: 'Corn',
                        data: [406292, 260000, 107000, 68300, 27500, 14500]
                    },
                    {
                        name: 'Wheat',
                        data: [51086, 136000, 5500, 141000, 107180, 77000]
                    }
                ]
            })
        };

        let groupedBar = function drawChart02() {
            let columnB = new Highcharts.Chart({
                chart: {
                    renderTo: 'groupedB',
                    type: 'column'
                },
                title: {
                    text: 'Olympic Games all-time medal table, grouped by continent',
                    align: 'left'
                },
            
                xAxis: {
                    categories: ['Gold', 'Silver', 'Bronze']
                },
            
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    title: {
                        text: 'Count medals'
                    }
                },
            
                tooltip: {
                    format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
                        'Total: {point.stackTotal}'
                },
            
                plotOptions: {
                    column: {
                        stacking: 'normal'
                    }
                },
            
                series: [{
                    name: 'Norway',
                    data: [148, 133, 124],
                    stack: 'Europe'
                }, {
                    name: 'Germany',
                    data: [102, 98, 65],
                    stack: 'Europe'
                }, {
                    name: 'United States',
                    data: [113, 122, 95],
                    stack: 'North America'
                }, {
                    name: 'Canada',
                    data: [77, 72, 80],
                    stack: 'North America'
                }]
            })
        };


        document.querySelector('.basicBar').addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector('.chartContainerBar').id = 'basicB'
            basicBar();
        })

        document.querySelector('.columnBar').addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector('.chartContainerBar').id = 'columnB'
            columnBar();
        })

        document.querySelector('.groupedBar').addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector('.chartContainerBar').id = 'groupedB'
            groupedBar();
        })

    } barChart();




    function pieChart() {
        let basicPie = function drawChart() {
            let basicP = new Highcharts.Chart({
                chart: {
                    renderTo: 'basicP',
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Browser market shares in May, 2020',
                    align: 'left'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                        name: 'Chrome',
                        y: 70.67,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Edge',
                        y: 14.77
                    },  {
                        name: 'Firefox',
                        y: 4.86
                    }, {
                        name: 'Safari',
                        y: 2.63
                    }, {
                        name: 'Internet Explorer',
                        y: 1.53
                    },  {
                        name: 'Opera',
                        y: 1.40
                    }, {
                        name: 'Sogou Explorer',
                        y: 0.84
                    }, {
                        name: 'QQ',
                        y: 0.51
                    }, {
                        name: 'Other',
                        y: 2.6
                    }]
                }]
            })
        }
        basicPie();  //default

        let semiPie = function drawChart() {
            let semiP = new Highcharts.Chart({
                chart: {
                    renderTo: 'semiP',
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                title: {
                    text: 'Browser<br>shares<br>January<br>2022',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 60
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                            distance: -50,
                            style: {
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        },
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%'],
                        size: '110%'
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share',
                    innerSize: '50%',
                    data: [
                        ['Chrome', 73.86],
                        ['Edge', 11.97],
                        ['Firefox', 5.52],
                        ['Safari', 2.98],
                        ['Internet Explorer', 1.90],
                        {
                            name: 'Other',
                            y: 3.77,
                            dataLabels: {
                                enabled: false
                            }
                        }
                    ]
                }]
            })
        }   

        document.querySelector('.basicPie').addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector('.chartContainerPie').id = 'basicP'
            basicPie();
        })
        document.querySelector('.semiPie').addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector('.chartContainerPie').id = 'semiP'
            semiPie();
        })
    

    } pieChart();
    
    function gaugechart () {
        function renderIcons() {
            // Move icon
            if (!this.series[0].icon) {
                this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
                    .attr({
                        stroke: '#303030',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': 2,
                        zIndex: 10
                    })
                    .add(this.series[2].group);
            }
            this.series[0].icon.translate(
                this.chartWidth / 2 - 10,
                this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
                    (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
            );
        
            // Exercise icon
            if (!this.series[1].icon) {
                this.series[1].icon = this.renderer.path(
                    ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
                        'M', 8, -8, 'L', 16, 0, 8, 8]
                )
                    .attr({
                        stroke: '#ffffff',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': 2,
                        zIndex: 10
                    })
                    .add(this.series[2].group);
            }
            this.series[1].icon.translate(
                this.chartWidth / 2 - 10,
                this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
                    (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
            );
        
            // Stand icon
            if (!this.series[2].icon) {
                this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
                    .attr({
                        stroke: '#303030',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': 2,
                        zIndex: 10
                    })
                    .add(this.series[2].group);
            }
        
            this.series[2].icon.translate(
                this.chartWidth / 2 - 10,
                this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
                    (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
            );
        }

        let chartGauge = function drawChart() {
            let chartG = new Highcharts.Chart({
                    chart: {
                        renderTo: 'basicG',
                        type: 'solidgauge',
                        height: '110%',
                        events: {
                            render: renderIcons
                        }
                    },
                
                    title: {
                        text: 'Activity',
                        style: {
                            fontSize: '24px'
                        }
                    },
                
                    tooltip: {
                        borderWidth: 0,
                        backgroundColor: 'none',
                        shadow: false,
                        style: {
                            fontSize: '16px'
                        },
                        valueSuffix: '%',
                        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
                        positioner: function (labelWidth) {
                            return {
                                x: (this.chart.chartWidth - labelWidth) / 2,
                                y: (this.chart.plotHeight / 2) + 15
                            };
                        }
                    },
                
                    pane: {
                        startAngle: 0,
                        endAngle: 360,
                        background: [{ // Track for Move
                            outerRadius: '112%',
                            innerRadius: '88%',
                            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
                                .setOpacity(0.3)
                                .get(),
                            borderWidth: 0
                        }, { // Track for Exercise
                            outerRadius: '87%',
                            innerRadius: '63%',
                            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[1])
                                .setOpacity(0.3)
                                .get(),
                            borderWidth: 0
                        }, { // Track for Stand
                            outerRadius: '62%',
                            innerRadius: '38%',
                            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[2])
                                .setOpacity(0.3)
                                .get(),
                            borderWidth: 0
                        }]
                    },
                
                    yAxis: {
                        min: 0,
                        max: 100,
                        lineWidth: 0,
                        tickPositions: []
                    },
                
                    plotOptions: {
                        solidgauge: {
                            dataLabels: {
                                enabled: false
                            },
                            linecap: 'round',
                            stickyTracking: false,
                            rounded: true
                        }
                    },
                
                    series: [{
                        name: 'Move',
                        data: [{
                            color: Highcharts.getOptions().colors[0],
                            radius: '112%',
                            innerRadius: '88%',
                            y: 80
                        }]
                    }, {
                        name: 'Exercise',
                        data: [{
                            color: Highcharts.getOptions().colors[1],
                            radius: '87%',
                            innerRadius: '63%',
                            y: 65
                        }]
                    }, {
                        name: 'Stand',
                        data: [{
                            color: Highcharts.getOptions().colors[2],
                            radius: '62%',
                            innerRadius: '38%',
                            y: 50
                        }]
                    }]
            
            })
        }
        chartGauge();  //default
    } gaugechart();
    
}