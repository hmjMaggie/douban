<template>
	<div class="homeListWrap">
		<div class="homeList" v-for="(item,index) in lists">
      		<router-link :to="'/Details/'+index">
		        <div class="ListText">
		          <h2>{{item.title}}</h2>
		          <p class="des">{{item.target.desc}}</p>
		          <hr>
		          <p class="author">作者：{{item.target.author.name}}</p>
		        </div>
		        <div class="pic"><img :src="item.target.cover_url" @error="error(index)"></div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import vueAxios from 'vue-axios'
	Vue.use(vueAxios,axios)
	export default{
		data:function(){
			return {lists:''}
		},
		methods:{
			error:function(i){
				this.lists[i].target.cover_url=require("./images/超辣的薯条.jpg")
			}
		},
		created:function(){
			/*this.axios.get('/static/homeData.json').then(res=>{   /!*es6新语法，箭头函数  这里的this指的是window *!/
				//console.log(res.data.recommend_feeds);
				this.lists = res.data.recommend_feeds;
			})*/
			var _this=this;
		    this.axios.get('/static/homeData.json').then(
		      function(res){
		      //console.log(res.data.recommend_feeds);
		        _this.lists = res.data.recommend_feeds;
		    })
		}
	}
</script>

<style>
	.homeListWrap{overflow: hidden;padding-bottom: 100px;}
	.homeList{position: relative;width: 100%;overflow: hidden;padding: 15px 15px;border-bottom: 1px solid #ccc;}
	.ListText{width: 60%;float: left;}
	.homeList h2{font-size: 18px;color: #3e3e3e}
	.homeList .des{font-size: 14px;color: #9e9e9e;padding: 10px 0;}
	.homeList hr{width: 20px;color: #9e9e9e;margin-bottom: 10px;}
	.homeList .author{font-size: 14px;color: #9e9e9e;}
	.homeList .pic{width: 80px;position: absolute;top: 10px;right: 47px;}
	.homeList .pic img{width: 100%;}
</style>
