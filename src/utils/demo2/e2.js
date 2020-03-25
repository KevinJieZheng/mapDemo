const echarts = require('echarts');

var startA,CW,Radius,title;
var data =[];

function init(){
    var sum = 0;
    for (var i =0;i<data.length;i++){
        sum += data[i].value;
    }
    var option = {
        color: ['#B3a130','#39d689', '#40568f','#90e030'],
        title: {
            text:title,
            textStyle:{
                color:'#fff',
            },
            top: '5%',
           left:'5%', 
        },
        animationDelay:500,
        grid: {
            bottom: 150,
            left: 100,
            right: '10%'
        },
        legend: {
            orient: 'vertical',
            top: "middle",
            right: "5%",
            textStyle: {
                color: '#fff',
                fontSize: 8,
            },
            itemWidth: 8,
            itemHeight: 6,
            icon: 'circle',
            data: data,
        },
        series: [
            // 主要展示层的
            {
                // radius: ['30%', '42%'],
                radius: Radius,
                center: ['40%', '50%'],
                type: 'pie',
                clockWise: CW,
                startAngle:startA,
                label: {
                    normal: {
                        show: true,
                       //  formatter: "{c}%",
                       formatter:function(params){
                           return (params.value/sum*100).toFixed(1)+'%';
                       },
                        textStyle: {
                            fontSize: 10,
                            color:'#fff',
                        },
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 15,
                        length2: 5
                    },
                    emphasis: {
                        show: true
                    }
                },
                name: "区域资源分析",
                data: data,
            },  
        ]
    };
    return option;
}

function setData2(t,myDOM,d,sA=190,cw=false,r=['30%','42%']){
    title = t
    data = d;
    Radius= r;
    startA = sA;
    CW = cw;
    var myC = echarts.init(myDOM);
    myC.clear();
    myC.setOption(init(),true);
    return myC;
}

export default setData2;