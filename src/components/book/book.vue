<template>
	<div class="book">
		<myHeader class="headerWrap">
			<span class="text" slot="one">书影音</span>
			<img src="./images/ic_actionbar_search_icon.png" class="search1" slot="two"/>
			<img src="./images/ic_create_group_chat_blue.png" class="chat1" slot="three"/>
		</myHeader>
		<div class="bookBanner">
			<ul>
				<li :class="{ac:nowIndex==1}" @click="nowIndex=1"><router-link to="/book/video">电影</router-link></li>
				<li :class="{ac:nowIndex==2}" @click="nowIndex=2"><router-link to="/book/read">读书</router-link></li>
				<li :class="{ac:nowIndex==3}" @click="nowIndex=3"><router-link to="/book/tv11">电视</router-link></li>
				<li :class="{ac:nowIndex==4}" @click="nowIndex=4"><router-link to="/book/city/66/hmj">同城</router-link></li>
				<li :class="{ac:nowIndex==5}" @click="nowIndex=5"><router-link to="/book/music">音乐</router-link></li>
			</ul>
      <transition name="bounce" mode="out-in">
        <router-view></router-view>
      </transition>
		</div>
	</div>
</template>

<script>
  import myHeader from '../header'
  import BookVideo from './bookVideo'

	export default{
		components:{
			myHeader,
      BookVideo
		},
		data:function(){
			return {
				nowIndex:1
			}
		},
		methods:{

		}
	}
</script>

<style scoped="scoped">
	.bookBanner{padding-top: 50px;  background: #f6f6f6;}
	.bookBanner ul{border-bottom: 1px solid #ccc;overflow: hidden;text-align: center;  background: #fff;}
	.bookBanner li{float: left;line-height: 46px;font-size: 16px;width: 20%;}
	.bookBanner li a{color: #919191;}
	.bookBanner .ac{color: #64c780;border-bottom: 3px solid #64c780;}
	.bookBanner .ac a{color: #64c780;}
  .bounce-enter-active {  animation: bounce-in .5s;}
  .bounce-leave-active {  animation: bounce-out .5s;}
  @keyframes bounce-in {
    0% {    transform: scale(0);  }
    50% {    transform: scale(1.5);  }
    100% {    transform: scale(1);  }
  }
  @keyframes bounce-out {
    0% {    transform: scale(1);  }
    50% {    transform: scale(1.5);  }
    100% {    transform: scale(0);  }
  }
</style>
