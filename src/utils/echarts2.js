const echarts = require('echarts');

var dataList = [];
var sumData = 100;
var width = '20%'
var width1 = '20.5%'
var width2 = '15%'
var width3 = '15.5%'



var itemStyle = {
normal: {
    label: {
        show: true,
        position: 'outside',
    },
    labelLine: {
        show: false
    }
}
};
var titleList = []
var seriesList = [];



function getOption2(){
    var index = 0;
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 4; j++) {
        if (dataList[index].value > sumData) dataList[index].value = sumData;
        seriesList.push({
                name: '底圈',
                type: 'pie',
                startAngle: 0,
                endAngle: 0,
                radius: [width, width1],
                center: [25 * j + 12.5 + '%', 40 * i + 30 + '%'],
                hoverAnimation: false,
                itemStyle: itemStyle,
                data: [{
                    value: sumData,
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: "#00323C",
                        }
                    }
                }]
    
            }, {
                name: '色圈',
                type: 'pie',
                startAngle: 90,
                clockWise: false,
                radius: [width2, width3],
                center: [25 * j + 12.5 + '%', 40 * i + 30 + '%'],
                hoverAnimation: false,
                itemStyle: itemStyle,
                data: [{
                        value: dataList[index].value,
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
                        },
                        label: {
                            normal: {
                                formatter: function(params) {
                                    return (params.value / sumData * 100).toFixed(1) + '%';
                                },
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '70%',
                                    fontWeight: 'bold',
                                    color: '#fff',
                                }
                            }
                        },
                    },
                    {
                        value: sumData - dataList[index].value,
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
            });
            titleList.push({
                text: dataList[index].name,
                left: 25 * j + 12.5 + '%',
                top: 40 * i + 45 + '%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '70%',
                    color: '#fff',
                    textAlign: 'center',
                },
            })
            index++;
    }
    }
    var option = {
        backgroundColor: '#002130',
        series: seriesList,
        title: titleList,
    };
    return option;
}

function setOption2(maxData,list,myDOM){
    sumData = maxData;
    dataList= list;
    var myC = echarts.init(myDOM,)
    myC.setOption(getOption2());
    return myC
}

module.exports = {
    setOption2
}