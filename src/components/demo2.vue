<template>
  <div id="demo2">
      <aside class="aside1" id='aside1'>
          <div ref="option1" class="option1"></div>
          <div class="option2">
            <p>区域发展历程</p>
            <div class="o2_border">
              <li>
                <div class="o2_radius"></div>
                <p>2016</p>
              </li>
              <li class="l1">
                <p>2017</p>
                <div class="o2_radius"></div> 
              </li>
              <li>
                <div class="o2_radius"></div>
                <p>2018</p>
              </li>
              <li class="l1">
                <p>2019</p>
                <div class="o2_radius"></div>
              </li>
            </div>
            <table>
              <tr>
                <th>2017</th>
                <td>东城西城区规划完成</td>
              </tr>
              <tr>
                <th>2018</th>
                <td>大兴区规划完成</td>
              </tr>
              <tr>
                <th>2019</th>
                <td>朝阳区正在规划</td>
              </tr>
            </table>
          </div>
          <div ref="option3" class="option3"></div>
          <div ref="option4" class="option4"></div>
      </aside>
      <aside class="aside2" id='aside2'>
        <div class="option5">      
            <img src='../assets/local.png'>
            <div class="O5_info">
              <p class="p1">区域用地定位</p>
              <p class="p2"><span>867</span>亩</p>
            </div>
        </div>
        <div ref="option6" class="option6"></div>
        <div ref="option7" class="option7"></div>
      </aside>
      <div class="main_btn">
        <img src="../assets/left.png" @click="clickImgL"> 
        <img src="../assets/home.png" @click="clickImg">
        <img src="../assets/left.png" style="transform: rotate(180deg);" @click="clickImgR">
      </div>
      <!-- <img src="../assets/1.png"> -->
  </div>
</template>

<script>

import {default as setData} from '../utils/demo2/e1';
import {default as setData2} from '../utils/demo2/e2';

export default {
  name: 'demo2',
  data() {
    return {
      left:true,
      right:true,
      O2_data:[{
          "name": "社会资源",
          "value": 48
      }, {
          "name": "经济资源",
          "value": 23
      }, {
          "name": "自然资源",
          "value": 29
      }],
      O3_data:[{
         "name": "商业用地",
         "value": 25
     }, {
         "name": "住宅用地",
         "value": 12
     }, {
         "name": "公共用地",
         "value": 63
     }],
     O6_data:[{
         "name": "商业用地",
         "value": 17.7
     }, {
          "name": "社会资源",
          "value": 30.2
      }, {
          "name": "经济资源",
          "value": 20.8
      }, {
          "name": "自然资源",
          "value": 31.2
      }],
      O7_data:[{
         "name": "商业用地",
         "value": 22
     }, {
         "name": "住宅用地",
         "value": 28
     }, {
         "name": "公共用地",
         "value": 50
     }],
    }
  },
  mounted(){
      this.getOption1();
      this.getOption2();
  },
  methods: {
    getOption1(){
      var myO1,myO2,myO3;
      myO1 = setData(this.$refs.option1);
      myO2 = setData2("区域资源分析",this.$refs.option3,this.O2_data)
      myO3 = setData2("用地类型增长趋势",this.$refs.option4,this.O3_data,225,true,"40%"),
      window.addEventListener("resize", function() {                
        myO1.resize();   
        myO2.resize();      
        myO3.resize();                    
      });
    },
    getOption2(){
      var myO4,myO5;
      myO4 = setData2("用地类型增长趋势",this.$refs.option6,this.O6_data,30,true),
      myO5 = setData2("用地类型增长趋势",this.$refs.option7,this.O7_data,170,true),     
      window.addEventListener("resize", function() {                    
        myO4.resize();      
        myO5.resize();              
      });
    },
    setAside(left,opacity,id){
        document.getElementById(id).style.left = left;
        document.getElementById(id).style.opacity =opacity;
    },
    clickImg(){
      this.clickImgL();
      this.clickImgR();
    },
    clickImgL(){
      if(this.left == true){
        this.setAside('-25vw','0','aside1')
      }else{
        this.setAside('0vw','1','aside1');
        this.getOption1()
      } 
      this.left = !this.left
    },
    clickImgR(){
      if(this.right == true){
        this.setAside('25vw','0','aside2')
      }else{
        this.setAside('0vw','1','aside2')
        this.getOption2()
      } 
      this.right = !this.right
    },
  },
}
</script>
<style>

#demo2{
    height: 100vh;
    width: 100vw;
    /* background: #000; */
    background: url('../assets/airport1.png');
    background-size: 100% 100%;
}
aside{
    float: left;
    height: 100vh;
    width: 25vw;
    background: -webkit-linear-gradient(right,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
}
.aside2{
    float: right;
    background: -webkit-linear-gradient(left,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
}
.option1,.option2,.option3,.option4,.option6,.option7{
  height: 22vh;
  width: 16vw;
  padding: 2vh 2vw;
}
.option2{
  position: absolute;
  color: #fff;
  font-size: 11px;
  font-weight:bold
}
.o2_border,table{
  width: 12vw;
  margin: 3vh 0px 0px 2vw ;
}
.o2_border{
  border: #50c07e solid 1px;
}
li{
  float: left;
  width: 3vw;
  height: 2vh;
}
li p{
  font-size: 0.7rem;
  height: 2vh;
  text-align: center;
}
.o2_radius{
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin-top: -3px;
  background-color: #60e09e;
  margin-left: 1.4vw;
}
.l1{
  margin-top: -1.99vh;
}
.option2 table{
  line-height: 3vh;
}
.option2 table tr td{
  width: 8vw;
  font-weight:normal
}
.option3{
  margin-top: 20vh;
}
.option5{
  height: 8vh;
  width: 16vw;
  padding: 2vh 0;
  margin: 12vh 0 0 10vw;
  display: flex;
}
.option5 img{
  height: 5vh;
  margin-right: 1vw;
}
.option5 .O5_info .p1{
  font-weight: normal;
  color:rgba(255,255,255,0.5);
  font-size: 0.8vw;
  line-height: 3vh;
}
.option5 .O5_info .p2{
  font-weight: normal;
  color:#fff;
  font-size: 1vw;
}
.option5 .O5_info .p2 span{
  font-weight: bold;
  font-size: 1.2vw;
}
.option6,.option7{
  margin: 0 0 0 auto;
}
aside{
   position:relative;
   left:0px;
   opacity:1;
   transition-property:left opacity;
   transition:1s;
  -webkit-transition:1s;
}
.main_btn{
  position: fixed;
  left: 50vw;
  top: 80vh;
  height: 4vh;
  background-color:rgba(0,0,0,0.6);
  border-radius: 2vh;
  transform:translateX(-50%);
  z-index: 3;
}
.main_btn img{
  position: relative;
  height: 2vh;
  margin: 1vh 3vw;
}
</style>
