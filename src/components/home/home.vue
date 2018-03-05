<template>
	<div class="home">
		<myHeader class="homeHeader">
			<input type="text" :placeholder="msg" slot="one" @focus="search">
			<img class="search" src="./images/ic_search_gray.png" slot="two">
			<img class="chat" src="./images/ic_chat_white.png" slot="three">
			<img class="scan" src="./images/ic_scan_gray.png" slot="four">
		</myHeader>
		<HomeBanner></HomeBanner>
    <div class="searchCon" v-show="bool2">
      <div class="top">
        <div class="select" @click="showUl">
          <span class="all">全部</span>
          <img src="../../../static/home-search1.png" alt="" v-show="bool">
          <img src="../../../static/home-search2.png" alt="" v-show="!bool">
          <ul class="options" v-show="bool1">
            <li class="li" v-for='(item,index) in list' @click="getValue(index)">{{item.key}}</li>
          </ul>
        </div>
        <input type="text" placeholder="搜索">
        <a class="cancel" @click="cancel">取消</a>
      </div>
      <div class="bot" id='wrapper' style='touch-action: none;'>
      	<ul style="transform: translate(0px, 0px) translateZ(0px);position: relative;z-index: 2;">
      		<h2 class="remen">热门搜索</h2>
      		<li>这是一条数据</li>
      		<li>这是一条数据</li>
      		<li>这是一条数据</li>
      		<li>这是一条数据</li>
      		<li>这是一条数据</li>
      		<li>这是一条数据</li>
      		<li>这是一条数据</li>
      		<li>这是一条数据</li>
      		<li>这是一条数据</li>
      		<li>这是一条数据</li>
      		<li>这是一条数据</li>
      	</ul>
      	<div class="scroll">
      		<div class="scroll1"></div>
      	</div>
      </div>
    </div>
		<div class="mainTitie">
			<span class="tiao"></span>
			<h2>热点</h2>
		</div>
		<HomeList></HomeList>
	</div>
</template>

<script>
	import myHeader from '../header'
	import HomeBanner from './homeBanner'
	import HomeList from './homeList'
	export default{
		components:{
			myHeader,
			HomeBanner,
			HomeList
		},
		data:function(){
			return {
			  	bool:true,       /*控制图片*/
		        bool1:false,     /*控制菜单*/
		        bool2:false,
				msg:'影视 图书 唱片 小组等',
				list:[
					{key:'图书'},
					{key:'小说'},
					{key:'电影'},
					{key:'图书电影'},
					{key:'图书'},
					{key:'小说'},
					{key:'电影'},
					{key:'图书电影'}
				]
			}
		},
		methods:{
	      search(){
	        this.bool2=!this.bool2;
	      },
	      showUl(){
	        this.bool=!this.bool;
	        this.bool1=!this.bool1;
	      },
	      cancel(){
	        this.bool2=!this.bool2;
	      },
	      getValue(i){
	      	var html=document.getElementsByClassName('li')[i].innerHTML;
	      	document.getElementsByClassName('all')[0].innerHTML=html;      	
	      }
		}
	}
</script>


<style scoped="scoped">
	.home{overflow: hidden;}
	#app .homeHeader{border-bottom: 1px solid #b6b6b6;background-color: #42BF55;}
  .home .mainTitie{padding: 10px 0;}
  .home .mainTitie .tiao{width: 4px;height: 20px;background: #f98049;display: inline-block;float: left;}
  .home .mainTitie h2{color: #f98049;line-height: 20px;padding-left:20px ;font-size: 16px;}
  .home .searchCon {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    height:100%;
  }
  .home .searchCon .top {
    width: 94%;
    height: 48px;
    padding: 0 3% 0;
    background: #2abd63;
  }
  .home .searchCon .top .select {
    position: relative;
    float: left;
    background: #fff;
    height: 30px;
    font: 16px/30px Microsoft YaHei;
    border-radius: 4px 0 0 4px;
    border-right: 1px solid #ccc;
    margin-top: 12px;
  }
  .home .searchCon .top .select .all{
    padding:0 30px 0 10px;
  }
  .home .searchCon .top .select img {
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 20px;
  }
  .home .searchCon .top .select .options {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 5;
    width: 180%;
    border-bottom: 1px solid #ccc;
    border-radius: 6px;
  }
  .home .searchCon .top .select .options li {
    background: #fff;
    border: 1px solid #ccc;
    border-bottom: none;
    padding-left: 15%;
  }
  .home .searchCon .top input {
    float: left;
    background: #fff;
    width: 62%;
    height: 30px;
    font: 16px/30px Microsoft YaHei;
    border: none;
    border-radius: 0 4px 4px 0;
    margin-top: 12px;
    padding-left: 4%;
  }
  .home .searchCon .top a.cancel {
    float: right;
    font: 16px/30px Microsoft YaHei;
    height: 30px;
    margin-top: 12px;
    color: #fff;
  }
.scroll{position: absolute; z-index: 9999; width: 7px; bottom: 2px; top: 2px; right: 1px; overflow: hidden;transform: translateZ(0px); transition-duration: 0ms; opacity: 0;}
.scroll1{box-sizing: border-box; position: absolute; background: rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 3px; width: 100%; transition-duration: 0ms; display: none; height: 8px; transform: translate(0px, -8px) translateZ(0px);}
.remen{padding: 0px 4%;border-bottom: 1px solid #ccc; background: rgb(238, 238, 238); font-style: normal; font-weight: normal; font-size: 16px; line-height: 40px; }
#wrapper li{
	background: rgb(238, 238, 238);
	border-bottom: 1px solid #ccc;
	padding: 8px 0 8px 15px;
}
</style>
