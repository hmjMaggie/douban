<template>
  <div class="home">
    <myHeader class="homeHeader">
      <span class="text" slot="one">我的</span>
      <img src="../../../static/--icon-12.png" class="chat1" slot="three"/>
    </myHeader>
    <div class="login">
      <div class="pic"><img src="../../../static/--icon-13.png" alt=""></div>
      <a><span @click="login">登录 / 注册</span></a>
    </div>
    <div class="remind">
      <div class="remindTop">
        <img class="left" src="../../../static/--icon-14.png" alt="">提醒
        <img class="right" src="../../../static/--icon-15.png" alt="">
      </div>
      <div class="remindBot">
        <p>暂无新提醒</p>
      </div>
    </div>
    <div class="myInfo">
      <div class="infoList" v-for="item in lists">
        <img :src="item.src" alt=""> <br>
        <span>{{item.title}}</span>
      </div>
    </div>
    <transition name="bounce">
    	<div class="loginBox" v-show='bool'>
    		<a href="#" class="close" @click="goPersonal"><img src='../../../static/loginBox1.png' alt=""></a>
		    <h1>欢迎来到豆瓣</h1>
		    <form action="">
		      <input type="text" class="admin" placeholder="手机号 / 邮箱"> <br>
		      <input type="text" class="password" placeholder="密码">
		      <button type="button">登录</button>
		    </form>
		    <p class="newUser">
		      <span style="color: rgb(42, 189, 99);">注册豆瓣</span>
		      <i>|</i>
		      <span>忘记密码</span>
		    </p>
		    <p class="enter">
		      <span><img src="../../../static/loginBox2.png" alt="">微博登录</span>
		      <i>|</i>
		      <span><img src="../../../static/loginBox3.png" alt="">微信登录</span>
		    </p>  
    	</div>
 		</transition>	
  </div>
</template>

<script>
  import myHeader from '../header'

  export default{
    components:{
      myHeader
    },
    data:function(){
      return {
      	bool:false,
        lists:[
          {title:'喜欢',src:'../../../static/--icon-01.png'},
          {title:'日记',src:'../../../static/--icon-02.png'},
          {title:'相册',src:'../../../static/--icon-03.png'},
          {title:'我的广播',src:'../../../static/--icon-04.png'},
          {title:'电影·电视',src:'../../../static/--icon-05.png'},
          {title:'读书',src:'../../../static/--icon-06.png'},
          {title:'音乐',src:'../../../static/--icon-07.png'},
          {title:'同城活动',src:'../../../static/--icon-08.png'},
          {title:'豆列',src:'../../../static/--icon-09.png'},
          {title:'订单',src:'../../../static/--icon-10.png'},
          {title:'钱包',src:'../../../static/--icon-11.png'},
          {title:'设置',src:'../../../static/--icon-12.png'}
        ]
      }
    },
    methods:{
      login:function () {
        this.bool=!this.bool
        
      },
      goPersonal:function () {
        this.bool=!this.bool
      }
    }
  }
</script>

<style scoped="scoped">
  button{  margin-top: 200px ;}
  .home{background-color :#f6f6f6}
  .home .login {
    background: #6ccb7e;
    height: 125px;
    position: relative;
    top:50px;
  }
  .home .login .pic {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;
    left: 8%;
  }
  .home .login .pic,.home .login .pic img {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .home .login .pic img {
    left: 0;
    right: 0;
  }
  .home .login a {
    position: absolute;
    right: 10%;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 48%;
    height: 38px;
    text-align: center;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    font: 14px/38px Microsoft YaHei;
  }
  .home .remind {
    margin: 65px 0 15px 0;
    background: #fff;
  }
  .home .remind .remindTop {
    height: 50px;
    border-bottom: 1px solid #ccc;
    font: 700 16px/50px Microsoft YaHei;
    color: #666;
  }
  .home .remind .remindTop .left {
    width: 32px;
    height: 32px;
    float: left;
    margin-left: 8%;
    margin-right: 2%;
    margin-top: 10px;
  }
  .home .remind .remindTop .right {
    width: 10px;
    float: right;
    margin-right: 8%;
    margin-top: 15px;
  }
  .home .remind .remindBot p {
    height: 45px;
    font: 12px/45px Microsoft YaHei;
    color: #ccc;
    text-align: center;
  }
  .home .myInfo {
    width: 100%;
    padding-bottom: 65px;
    overflow: hidden;
  }
  .home .infoList {
    width: 25%;
    height: 100px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    background: #fff;
    float: left;
  }
  .home .infoList img {
    width: 28px;
    height: 28px;
    display: inline-block;
    margin-top: 24px;
    margin-bottom: 10px;
  }
  .home .infoList span {
    font: 700 14px/14px Microsoft YaHei;
    color: #666;
  }
  
  .loginBox{    
  	padding: 130px 5%;
    width: 90%;
    height:100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    background: #fff;
  }
  .loginBox .close{    position: absolute;
    top: 35px;
    left: 15px;
    width: 20px;
    height: 20px;}
  .loginBox .close img{  width:100%;}
  .loginBox h1 {
    color: #2abd63;
    text-align: center;
    font: 40px/40px Microsoft YaHei;
    margin-bottom: 40px;
  }
  .loginBox input {
    width: 91%;
    padding: 4%;
    font: 16px/16px Microsoft YaHei;
    border: 1px solid #ccc;
  }
  .loginBox input.admin {
    border-bottom: none;
    border-radius: 6px 6px 0 0;
  }
  .loginBox input.password {
    border-radius: 0 0 6px 6px;
  }
  .loginBox button {
    width: 100%;
    height: 50px;
    background: #2abd63;
    color: #fff;
    font: 20px/50px Microsoft YaHei;
    border: none;
    border-radius: 6px;
    margin: 15px 0 25px;
  }
  .loginBox .newUser{text-align: center; margin-bottom: 210px;}
  .loginBox p span {
    font: 16px/20px Microsoft YaHei;color: rgb(170, 170, 170);
  }
  .loginBox i {
    margin: 0 5%;
    font-size: 14px;
    line-height: 20px;
    color: #aaa;
    font-style: normal;
  }
  .enter{text-align: center}
  .loginBox p span img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    vertical-align: top;
  }
  .bounce-enter-active {  animation: bounce-in .6s;}
  .bounce-leave-active {  animation: bounce-out .6s;}
  @keyframes bounce-in 
  {  
  	0% {    transform: translateY(100%);  }
    100% {    transform: translateY(0);  }  
  }
    
  @keyframes bounce-out { 
   	0% {   transform: translateY(0);  }  
    100% {   transform: translateY(100%);  }
  }

</style>
