<template>
  <div id="demo1">
    <header>
      <img class="headerImg" src="../assets/bottom.png">
      <div class="headerInfo">
        <p>湛江机场</p>
        <p title="time">{{hearTime}}</p>
      </div>
    </header>
    <main>
      <!-- 侧边1start -->
    <div class='aside'>
        <p class="aside_title">应急物资统计</p>

        <div class="option1">
          <div ref="option1" class="option1_left"></div>
          <div class="option1_right">
            <p class="option1_right_title">此处为标题填写处</p>
            <table>
              <tr>
                <th>输入值</th>
                <td>{{number}}</td>
              </tr>
              <tr>
                <th>总数</th>
                <td>{{maxNumber}}</td>
              </tr>
            </table>
          </div>
        </div>   

        <p class="aside_title">物资仓库统计</p>
        <div ref="option2" class="option2"></div>
        <p class="aside_title">小地图</p>
        <div class="aside_minimap">
          <img src="../assets/airport2.png" alt="小地图">
        </div>
    </div>
    <!-- 主体1end -->

    <!-- 主内容start -->
    <article>
      <div class="article_map">
        <img src="../assets/airport1.png" alt="地图" @click="toDemo2()">
      </div>
      <p class="article_title">突发事件类型：航空器冲偏出跑道</p>
      <div class="articleInfo">
        <ul>
         <li><p>B777</p><p>航空器型号</p></li>
         <li><p>CA1234</p><p>航班号</p></li>
         <li><p>35</p><p>旅客人数</p></li>
         <li><p>4</p><p>机组人数</p></li>
         <li><p>1</p><p>轻伤人数</p></li>
         <li><p>2</p><p>重伤人数</p></li>
         <li><p>12</p><p>风速</p></li>
         <li><p>180</p><p>风向</p></li>
         <li><p>10000</p><p>能见度</p></li>
         <li style="border-right:0px;"><p>台风</p><p>灾害气象</p></li>
        </ul>
      </div>
    </article>
    <!-- 主内容end -->

    <!-- 侧边2start -->
    <div class='aside'>
        <p class="aside_title">应急人员统计</p>
        <div ref="option3" class="option3"></div>
        <p class="aside_title">应急专家统计</p>
        <div ref="option4" class="option4"></div>
        <p class="aside_title">救援队伍统计</p>
        <div ref="option5" class="option5"></div>
    </div>
    <!-- 侧边2end -->
    </main>
    
    <footer>
      <img class="headerImg footerImg" src="../assets/bottom.png">
      <div class="footerInfo">
        <ul>
         <li><a href="javascript:void(0)">任务流程</a></li>
         <li><a href="javascript:void(0)">任务信息</a></li>
         <li><a href="javascript:void(0)">监控列表</a></li>
         <li><a href="javascript:void(0)">应急资源</a></li>
         <li><a href="javascript:void(0)">地图工具</a></li>
        </ul>
      </div>
    </footer>

  </div>
</template>
<script>
import {setOption}  from '../utils/demo1/echarts1.js'
import {setOption2}  from '../utils/demo1/echarts2.js'
import {setOption3}  from '../utils/demo1/echarts3.js'
import {setOption4}  from '../utils/demo1/echarts4.js'
import {setOption5}  from '../utils/demo1/echarts5.js'

 export default {
  name: 'demo1',
  data(){
    return{
      hearTime:"2020/02/29 18:00",
      number:100,
      maxNumber:500,
      dataList:[{
        'name': '标签一',
        'value': 40 },{
        'name': '标签二',
        'value': 20},{
        'name': '标签三',
        'value': 60},{
        'name': '标签四',
        'value': 11},{
        'name': '标签五',
        'value': 12},{
        'name': '标签六',
        'value': 4},{
        'name': '标签七',
        'value': 23.2},{
        'name': '标签八',
        'value': 104}]
    }
  },
  mounted(){
    var myO1,myO2,myO3,myO4,myO5;
    // var i = 0;
    // setInterval(() => {
        myO1 = setOption(this.maxNumber,this.number,this.$refs.option1);
        myO2 = setOption2(this.number,this.dataList,this.$refs.option2);
        myO3 =setOption3(this.number,this.$refs.option3);
        myO4 =setOption4(this.$refs.option4);
        myO5 = setOption5(this.$refs.option5);
      //   console.log(++i)
      // }, 1000);
      
      //myO1+myO2+myO3+myO4+myO5
      window.addEventListener("resize", function() {                
        myO1.resize();   
        myO2.resize();      
        myO3.resize();      
        myO4.resize();      
        myO5.resize();              
      });
      
  },
  methods:{
    toDemo2(){
      this.$router.push({'path':'/demo2'})
    }
  }
      
}
</script>

<style>


#demo1{
  height: 100vh;
  background: #000; 
}
a{
  text-decoration: none;
}
ul{
  list-style: none;
}
header,footer{ 
  position: fixed;
  height:10vh;
  width:100%;
  z-index: 5;
}
.headerImg{
  background-repeat: no-repeat;
  width: 100%;
  height: 6vh;
  position: fixed;
  transform: rotate(180deg);
}
.headerInfo{
  width: 30%;
  height: 5vw;
  position: absolute; 
  top: 1vh;
  left: 50%;
  transform: translate(-50%,0%);
  min-width: 290px;
}
.headerInfo p{
  font-size: 1vw;
  color: #fff;
  text-align: center;
  line-height: 1.2vm;
}
p[title=time]{
  font-size: 0.5vw;
  color: rgb(0, 160, 160)
}
.footerImg{
  bottom: 0;
  transform: rotate(0deg);
  position: fixed;
  height: 6vh;
}

.footerInfo{
  font-size: 0.8vw;
  width: 25vw;
  height: 5vh;
  position: fixed; 
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  min-width: 250px;
  text-align: center;
  bottom: 0px;
}
.footerInfo ul li{
  margin: 0 3%;
  display: inline;
} 
.footerInfo ul li a{
  color: rgb(0, 160, 160)
}

main{
  padding: 8vh 0.5vw;
  display: flex;
}
article{
  width: 55vw;
}
.article_map img{
  width: 55vw;
  height: 67vh;
  margin: 1.2vh 0;
}
.article_title,.aside_title{
  background-color: #002f39;
  height: 4vh;
  width: 100%;
  text-align: center;
  line-height: 4vh;
  color: #fff;
  font-size: 1.2vh;
}
.articleInfo{
  width: 100%;
  text-align: center;
} 
.articleInfo ul{
  height: 8vh;
  display: flex;
  background-color: #002f39;  
  margin-top: 0.5vh;
  font-size: 1.2vh; 
}
.articleInfo ul li{
  width: 10%;
  margin:2vh 0;
  color: #15c1ce;
  border-right: solid #15c1ce 1px;
}
.option1_right .option1_right_title{
 text-align: center;
 width: 6vw;
 border-bottom: #033842 solid 1px;
}
.option1_right_title{
  padding-bottom: 1vh;
  font-size: 1.7vh
}
.option1_right table{
  padding-top: 1vh;
  width: 6vw;
  font-size: 0.8vh;
  color: #fff;
}
.option1_right table th{
  text-align:  left;
  font-weight: normal;
  width: 5vw;
  font-size: 10px;
  color: rgba(21 , 193, 206, 1);
}
.option1_right table td{
  text-align:  right;
   width: 5vw;
}
.aside_title{
  width: 20vw;
  margin:0.5vh 0; 
}
.aside{
  width: 20vw;
  height:85vh;
  padding: 0 1%;
  margin-top: -1.5%
}
.option1{
  width: 20vw;
  height: 20%;
  background-color: #002130;
  display:flex;
}
.option1_left{
  width: 40%;
  height: 100%;
}
.option1_right{
  text-align: center;
  color: #fff;
  margin: 0 auto;
  position: relative;
  height: 50%;
  top: 50%;
  transform: translateY(-50%);
}
.option2{
  width: 100%;
  height: 40%;
}
.aside_minimap{
  width: 20vw;
}
.aside_minimap img{
  width: 100%;
}
.option3,.option4{
  width: 100%;
  height: 25%;
}
.option5{
  width: 100%;
  height: 35%;
}
</style>
