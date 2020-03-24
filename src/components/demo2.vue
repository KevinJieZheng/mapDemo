<template>
  <div id="demo2">
      <aside>
          <div ref="option1" class="option1"></div>
      </aside>
      <aside class="aside2"></aside>
      <!-- <img src="../assets/1.png"> -->
  </div>
</template>

<script>

import {default as setData} from '../utils/demo2/e1';

export default {
  name: 'demo2',
  mounted(){
      var myO1,myO2,myO3,myO4,myO5,myO6;
      myO1 = setData(this.$refs.option1);
      window.addEventListener("resize", function() {                
        myO1.resize();   
        // myO2.resize();      
        // myO3.resize();      
        // myO4.resize();      
        // myO5.resize();              
      });
  }
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
.option1{
  height: 25vh;
  width: 15vw;
  padding: 2vh 2vw;
}
</style>
