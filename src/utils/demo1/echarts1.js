const echarts = require('echarts')
var value = 44;
var sumData = 100;
var width = '50%';
var width1 = "35%"
var width2 = "51%";

function setOption(maxData,data,myDOM){ 
    if (value > sumData) value = sumData;
    console.log(myDOM)
    value = data;
    sumData = maxData;
    var myC = echarts.init(myDOM)
    myC.setOption(getOption());

    return myC
}
function getOption(){
    var option = {
        backgroundColor: '#002130',
        series: [{
            name: '统计',
            type: 'gauge',
            radius: width1, //图表尺寸
            startAngle: 0,
            endAngle: 360,
            center: ['50%', '50%'],
            gird:{},
            axisLine: {
                show: false,
                lineStyle: {
                    width: '20%',
                    shadowBlur: 0,
                    color: [
                        [0, '#00323C'],
                        [1, '#00323C']
                    ],
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 1
                },
                length: '-16%',
                splitNumber: 5
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: false,
    
            },
            detail: {
                show: true,
                offsetCenter: [0, '0%'],
                color: '#fff',
                size: 20,
                formatter: function(params) {
                    return params + '%';
                },
                textStyle: {
                    fontSize: '130%'
                }
            },
            data: [{
                value: (value/sumData).toFixed(2)*100
            }]
        }, {
            name: '底圈',
            type: 'pie',
            startAngle: 234,
            radius: [width, width2],
            center: ['50%', '50%'],
            hoverAnimation: false,
            zlevel: -1,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outside',
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [{
                    value: sumData,
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            borderColor: "#033842",
                        }
                    }
                },
                {
                    value: sumData / 4,
                    name: '',
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0
                        }
                    }
                }
            ]
        }, {
            name: '外圈',
            type: 'pie',
            startAngle: 234,
            radius: [width, width2],
            center: ['50%', '50%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outside',
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [{
                    value: value,
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                offset: 0,
                                color: '#7777eb'
                            }, {
                                offset: 1,
                                color: '#70ffac'
                            }]),
                        }
                    }
                },
                {
                    value: sumData / 4 + sumData - value,
                    name: '',
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0
                        }
                    }
                }
            ]
        }]
    }
    return option;
}

module.exports = {
    setOption
}