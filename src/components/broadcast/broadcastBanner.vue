<template>
  <div class="broadList">
    <div class="broadcastBanner">
      <img src="../../../static/ic_status_anonymous_header.f7d7aea.png" alt="">
      <h3>发现有趣的人</h3>
      <p>关注他们，发现更大的世界</p>
    </div>
    <ul class="broadcastList">
      <div class="statusInfo" v-for="(item,index) in list">
        <div class="head">
        <span>
          <img class="head er" :src="item.src1" alt="">
          <img class="vip" :src="item.src2" alt="">
        </span>
        </div>
        <div class="info">
          <a class="follow" @click="showComfirm">关注</a>
          <h3 class="name">{{item.auth}}</h3>
          <p class="num">{{item.num}}人关注</p>
          <div class="con">
            <p class="txt">{{item.title}}</p>
            <div class="img">
              <img src="../../../static/touxiang.jpg" alt="">
            </div>
          </div>
          <span><img src="../../../static/broad2.png" alt="">{{item.dian}}</span>
          <span><img src="../../../static/broad3.png" alt="">{{item.comment}}</span>
        </div>
        <a class="close" @click="remove(index)">×</a>
      </div>
    </ul>
    <div class="confirm" v-show="bool">
    	<h2>关注成功<br>可至我的订阅查看</h2>
    	<span @click="guanbi">点我关闭</span>
    </div>
  </div>
</template>

<script>
	export default{
    data:function(){
      return {
      	bool:false,
        list:[
          {src1:'../../../static/touxiang.jpg',src2:'../../../static/broad1.png','auth':'胡桑',num:45926,title:'白茶清欢无别事。',dian:28,comment:36},
          {src1:'../../../static/touxiang.jpg',src2:'../../../static/broad1.png','auth':'刘萍',num:22903,title:'我在等风也等你。',dian:19,comment:11},
          {src1:'../../../static/touxiang.jpg',src2:'../../../static/broad1.png','auth':'小美',num:4568,title:'爱指向处于虚弱中的他人。',dian:19,comment:11},
          {src1:'../../../static/touxiang.jpg',src2:'../../../static/broad1.png','auth':'胡桑',num:9267,title:'白茶清欢无别事。',dian:19,comment:11},
          {src1:'../../../static/touxiang.jpg',src2:'../../../static/broad1.png','auth':'刘萍',num:465287,title:'我在等风也等你。',dian:19,comment:11}
        ]
      }
    },
    methods:{
      remove:function (i) {
        this.list.splice(i,1)
      },
      showComfirm(){
      	this.bool=true
      },
      guanbi(){
      	this.bool=false
      }
    }
	}
</script>

<style scoped="scoped">
  .broadcastBanner{padding-top: 50px;
    height:115px;
    position: relative;}
  .broadcastBanner img{
    width:100px;
    position: absolute;
    bottom:13px;
    left:48px;}
  .broadcastBanner h3{  font-size: 17px;
    position: absolute;
    bottom:60px;;
    left:166px;}
  .broadcastBanner p{
    font-size: 14px;
    color: #aaa;
    position: absolute;
    bottom:34px;;
    left:166px;}
  .broadList .statusInfo {
    width: 93%;
    padding: 5% 0;
    margin: 12px auto 0;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    position: relative;
    overflow: hidden;
  }
  .broadList .statusInfo div.head {
    float: left;
    margin-left: 4%;
    width: 15.4%;
    position: relative;
  }
  .broadList .statusInfo .er{
    width:50px;
    border-radius: 50%;
  }
  .broadList .statusInfo div.head img.vip {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .broadList .statusInfo .info {
    width: 72%;
    float: left;
    position: relative;
    margin-left: 10px;
  }
  .statusInfo .info a.follow {
    position: absolute;
    width: 30%;
    height: 28px;
    top: 12px;
    right: 0;
    text-align: center;
    font: 12px/28px Microsoft YaHei;
    color: #fff;
    background: #2abd63;
    border-radius: 5px;
  }
  .statusInfo .info h3.name {
    font: 700 16px/32px Microsoft YaHei;
  }
  .statusInfo .info p.num {
    font: 12px/12px Microsoft YaHei;
    color: #aaa;
  }
  .statusInfo .info div.con {
    margin: 12px 0;
    width: 100%;
  }
  .statusInfo .info div.con p.txt {
    font: 14px/20px Microsoft YaHei;
    margin-bottom: 12px;
  }
  .statusInfo .info div.con div.img {
    height: 140px;
    overflow: hidden;
  }
  .statusInfo .info div.con img {
    float: left;
  }
  .statusInfo .info span {
    color: #ccc;
    font-size: 12px;
  }
  .statusInfo .info span img {
    height: 16px;
    margin-right: 5px;
    vertical-align: bottom;
  }
  .statusInfo a.close {
    position: absolute;
    top: 4px;
    right: 6%;
    color: #666;
    font-size: 18px;
  }
  .broadcastList{padding-bottom:100px;}
  .confirm{
  	width: 200px;
  	height: 200px;
  	text-align: center;
  	background: rgba(238, 238, 238,0.9);
  	border-radius: 22px;
  	position: fixed;
  	top: 30%;
  	left: 30%;
  }
  h2{
  	font-size: 18px;
  	color: fff;
  	padding-top: 70px;
  	margin-bottom: 30px;
  }
</style>
