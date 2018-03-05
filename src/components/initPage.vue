<template>
  <transition name="fade">
    <div v-show="show" class="initPage">
      <a href="#" class="close" @click="hidden">跳过广告　{{time}}</a>
      <img style="width: 100%;" src="/static/initPage1.jpg" alt="">
      <div class="bot">
        <img src="../../static/initPage2.png" alt="">
        <p>
          <span class="title">我们的精神部落</span> <br>
          <span class="description" style="color: rgb(170, 170, 170);">豆瓣</span>
        </p>
      </div>
    </div>
  </transition>
</template>


<script>
  export default{
    data:function(){
      return {
        time:5,
        show:true
      }
    },
    methods:{
      hidden () {
        this.show=false;
      }
    },
    created (){
      let _this=this;
      var timer = setInterval(function(){
//        _this.change();
        if(_this.time<=1){          /* if里面的this的指向是window */
          _this.hidden();
          clearInterval(timer)
        }
        _this.time--;
      },1000)
    }
  }

</script>

<style scoped="scoped">
  .initPage{ position: fixed;  top: 0;  left: 0;  width: 100%;  height: 100%;  background: #fff;  z-index: 20;}
  .initPage a { background: rgba(255,0,0,.5); position: absolute;  top: 20px; right: 10px;  font-size: 10px; padding: 0 7px 0 15px ; width: 20%;  height: 20px;  line-height: 20px;  color: hsla(0,0%,100%,.7);  border: 1px solid hsla(0,0%,100%,.7);  border-radius: 12px;  }
  .initPage .bot {  width: 100%;  height: 90px;  padding-top: 30px;  text-align: center;  font-size: 0;  }
  .initPage .bot img {  width: 13%;  margin-right: 2%;  vertical-align: top;  }
  .initPage .bot p {  display: inline-block;  text-align: left;  }
  .initPage .bot span {  vertical-align: top;  font: 16px/24px Microsoft YaHei;  }
  .fade-enter{  opacity: 0;  }
  .fade-enter-active{  transition: all .3s ease;  }
  .fade-leave-active{  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);  opacity: 0;  }
  .fade-leave{  transition: opacity 0.5s;  }
</style>
