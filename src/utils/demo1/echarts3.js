const echarts = require('echarts')

var valdata = '100';

function setOption3(maxData,myDOM){ 
    valdata = maxData;
    var myC = echarts.init(myDOM)
    window.onresize = myC.resize();
    myC.setOption(getOption());
    return myC;
}

function getOption(){
    var data = [95, 90, 83, 80, 22]
    var titlename = ['标签一', '标签二', '标签三', '标签四', '标签五'];
    var option = {
        backgroundColor: '#002130',
        grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '0',
            width: "90%",
            height:'90%',
            containLabel: true,
         },
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                formatter: function(value) {
                    return [
                        '{title|' + value + '} '
                    ].join('\n')
                },
                rich: {}
            },
    
        }, {
            show: true,
            inverse: true,
            data: data,
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
    
        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth:  '3%',
            itemStyle: {
                normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  offset: 0,
                  color: '#7777eb' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#70ffac' // 100% 处的颜色
                }], false),
                barBorderRadius: 10
              }
            },
        },{
            type: "bar",
            barWidth: '3%',
            xAxisIndex: 0,
            barGap: "-100%",
            data: [valdata, valdata,valdata,valdata,valdata],
            itemStyle: {
              normal: {
                color: "#444a58",
                barBorderRadius: 10
              }
            },
            zlevel: -1
        },{
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [10, 10],
            "symbolOffset": [10,0],
            "symbolPosition": "end",
            "z": 12,
            data: data,
            itemStyle:{
                color:'#7777eb',
            }
        }]
    };
    return option;
}

module.exports = {
    setOption3
}