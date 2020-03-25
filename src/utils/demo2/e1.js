const echarts = require('echarts');


var datacity = ['东城区', '西城区', '朝阳区', '顺义区', '通州区', '怀柔区'];

function init(){
    var data1 = [55, 73, 54, 46, 44, 52];
    var data2 = [38, 20, 30, 30, 34, 30];
    var option = {
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        title:{
            text:'已有区域类型分析',
            textStyle:{
                color:'#fff',
                fontSize:11,
            },
            top: '5%',
            left:'5%', 
        }, 
        color: ['#41ad7e', '#4060a0',],
        tooltip: {
            trigger: 'axis',
        },
        animationDelay:800,
        legend: {
            top: '85%',
            data: ['已规划建设', '正在规划建设'],
            textStyle:{
                color:'#fff',
                fontSize:'0.2vh',
            },
            itemWidth: 10,
            itemHeight: 10,
        },
        grid: { //图表的位置
            top: '25%',
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },
        yAxis: [{ 
            type: 'value',
            minInterval: 1,
            max : 100,
            min : 0,
            minInterval:33.4,
            boundaryGap : [ 0, 0],
            axisLabel: {
                show: true,
                interval: 'auto',
                formatter: function(params){
                    return Math.floor(params)
                },
                textStyle:{
                    color:'#fff',
                }
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            axisTick: {
                show: false
            },
            show: true

        },{
            name:'单位:万平方公里',
            axisLine: {
                show: false,
            },
            nameTextStyle:{
                fontSize:'0.1vh',
                color:'#fff',
            },
            offset:-30,
        }],
        
        xAxis: [{
            type: 'category',
            axisLabel: {
                interval: 0,
                show: true,
                splitNumber: 48,
                textStyle: {
                    fontSize: "10",
                    color: '#fff'
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            axisTick: {
                show: false
            },
            data: datacity,
        }],
        series: [{
                name: '已规划建设',
                type: 'bar',
                stack: 'sum',
                barWidth: '12vw',
                data: data1
            },
            {
                name: '正在规划建设',
                type: 'bar',
                barWidth: '12vw',
                stack: 'sum',
                data: data2,
            }
        ]
    };
    
    return option;
}
 
function setData(myDOM){
    var myC = echarts.init(myDOM);
    myC.clear();
    myC.setOption(init());
    //console.log(myC)
    return myC;
}

export default setData;
