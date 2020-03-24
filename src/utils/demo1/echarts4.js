const echarts = require('echarts')
var sum = 0;
var data = [];
var data2 = [];
let scaleData = [{
    name: '标签一',
    value: 29,
    itemStyle: {color: "#0273e4"}},
    {name: '标签二',
    value: 9,
    itemStyle: {color: "#0c9cef"}},
    {name: '标签三',
    value: 10,
    itemStyle: { color: "#72c4f3"}},
    {name: '标签四',
    value: 12,
    itemStyle: {color: "#41f6f7"}},
    {name: '标签五',
    value: 13,
    itemStyle: {color: "#36f9c6"}},
    {name: '标签六',
    value: 3,
    itemStyle: {color: "#07f19a"}}];
var objData = array2obj(scaleData, "name");

var rich = {
    a: {
        color: '#82ffff',
        align: 'center',
        fontSize: 25,
        fontWeight: "bold",

    },
    b: {
        color: '#08a0df',
        align: 'center',
        fontSize: 8,
        fontFamily: '方正粗倩_GBK'
    },
};
var placeHolderStyle = {
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
};

function forEachData(){
    data = [];
    data2 = [];
    sum = 0;
    for (var i = 0; i < scaleData.length; i++) {
        sum += scaleData[i].value;
        data.push({
            label: {
                show: false,
            },
            value: scaleData[i].value,
            itemStyle: {
                color: scaleData[i].itemStyle.color,
            },
            name: scaleData[i].name,
        }, {
            value: 2,
            name: '',
            itemStyle: placeHolderStyle
        });
    }
    for (var j = 0; j < scaleData.length; j++) {
        data2.push({
            value: scaleData[j].value,
            itemStyle: {
                normal: {
                    color: '#00323C'
                }
            }
        }, {
                value: 2,
                name: '',
                itemStyle: placeHolderStyle
            });
    }
}
function array2obj(array,key) {
	var resObj = {};
	for(var i=0;i<array.length;i++){
		resObj[array[i][key]] = array[i];
	}
	return resObj;
}

var getOption4 = function () {
    forEachData();
    var seriesObj = [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: ['50%', "52%"],
        center: ['25%', '50%'],
        hoverAnimation: false,
    
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    rich: rich
                },
                labelLine: {
                    show: false
                }
            }
        },
        data: data
    }, {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: ['40%', "48%"],
        center: ['25%', '50%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    color: '#ddd',
                    rich: rich,
                    formatter: function() {
                        return "{a|" + sum + "}" + "\n\n{b|总数}";
                    },
                    position: 'center',
                    show: true,
                },
    
            }
        },
        data: data2
    }];

    var option = {
        backgroundColor: '#002130',
        grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '0',
            width: "90%",
            height: "auto",
            containLabel: true,
         },
        tooltip: {
            show: false
        },
        toolbox: {
            show: false
        },
        legend: [{
            orient: 'vertical',
            right: '30%',
            width:'20%',
            top: 'center',
            itemWidth: 6,
            itemHeight: 6,
            data: [scaleData[0],scaleData[1],scaleData[2]],
            textStyle: {
                color: '#C4E0F5',
                fontSize:'9',
            },
            padding:[10,0],
            formatter: function(name) {
                return  name + "\n" + (objData[name].value)
            },
        }, {
            orient: 'vertical',
            right: '10%',
            width:'20%',
            top: 'center',
            itemWidth: 6,
            itemHeight: 6,
            data:  [scaleData[3],scaleData[4],scaleData[5]],
            textStyle: {
                color: '#C4E0F5',
                fontSize:'9',
            },
            formatter: function(name) {
                return  name + "\n" + (objData[name].value)
            },
        }],
        series: seriesObj
    }

    return option;
}

function setOption4(myDOM){
    
    var myC = echarts.init(myDOM,{width:'100%',height:'100%'})
    myC.setOption(getOption4());
    
    return myC;
}

module.exports = {
    setOption4
}