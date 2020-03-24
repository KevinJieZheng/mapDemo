const echarts = require('echarts')

var mydata = [
    [40, 54, 50], [50, 81, 23],[55, 31, 73]
];

function setOption5(myDOM){ 
    var myC = echarts.init(myDOM,{width:'80%',height:'70%'})
    window.onresize = myC.resize();
    myC.setOption(getOption());
    myC.resize()
    return myC;
}
function getOption(){
    var option = {
        backgroundColor: '#002130',
        legend: {
            data: ['接入率', '在线率', '完好率'],
            align: 'right',
            right: 10,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 35
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top:'10%',
            width:'90%',
            height:'85%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['标签一',
                '标签二',
                '标签三',
            ],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#fff",
                    width: 2,
                    type: "solid"
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#00c7ff",
                }
            },
        }],
        yAxis: [{
            type: 'value',
            max : 100,
            min : 0,
            splitNumber : 2,
            axisLabel: {
                formatter: '{value} '
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#fff",
                    width: 1,
                },
            },
            splitLine: {
                lineStyle: {
                    normal: {
                        color: "#fff",
                        opacity: 0.5,
                        
                    },
                    type: 'dotted'
                }
            }
        }],
        series: [{
            name: '',
            type: 'bar',
            data: mydata[0],
            barWidth: 10, //柱子宽度
            barGap: 0.5, //柱子之间间距
            itemStyle: {
                normal: {
                    color: "#1077e1",
                    opacity: 1,
                }
            }
        }, {
            name: '',
            type: 'bar',
            data: mydata[1],
            barWidth: 10,
            barGap: 0.5,
            itemStyle: {
                normal: {
                    color: '#e8ebf4',
                    opacity: 1,
                }
            }
        }, {
            name: '',
            type: 'bar',
            data: mydata[2],
            barWidth: 10,
            barGap: 0.5,
            itemStyle: {
                normal: {
                    color: '#38edce',
                    opacity: 1,
                }
            }
        }]
    };

    return option;
}

module.exports = {
    setOption5
}