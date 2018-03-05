<template>
	<div>
		<div class="group-list" v-for="(item,index) in lists">
	      <div class="line">
	        <hr>
	        <h2>影视</h2>
	      </div>
	      <ul>
	        <li v-for="(item,index) in lists">
	            <div class="pic"><img src="./images/media.jpg"/></div>
	            <h3>{{item.topic}}</h3>
	            <span class="des">{{item.describe}}</span>
	            <span class="cot">{{item.count}}人</span>
	            <span @click="changeImg(index)">
		          <img class="status" v-show="item.bool" src="./images/ic_group_check_anonymous.png"/>
		          <img class="status" v-show="!item.bool" src="./images/ic_group_checked_anonymous.png"/>
		        </span>
	        </li>
	      </ul>
	    </div>
	    <div class="total">
	      <a>
	        <img src="../../../static/group1.png" alt="">换一批
	      </a>
	      <button :class="{checked:num>0}" type="button">选好了，去玩小组</button>
	    </div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				bool:false,          
				lists:[
					{
					  bool:true,
					  title:'影视',
					  topic:'佳片期待',
					  describe:'加入豆瓣人数最多的影视组织，推荐和交流自认为好的电影，剧集',
					  imgSrc1:'',
					  imgSrc2:'',
					  count:612802
					},
					{
					  bool:true,
					  title:'图书',
					  topic:'佳片期待',
					  describe:'加入豆瓣人数最多的影视组织，推荐和交流自认为好的电影，剧集',
					  imgSrc1:'',
					  imgSrc2:'',
					  count:612802
					},
					{
					  bool:true,
					  title:'小说',
					  topic:'佳片期待',
					  describe:'加入豆瓣人数最多的影视组织，推荐和交流自认为好的电影，剧集',
					  imgSrc1:'',
					  imgSrc2:'',
					  count:612802
					},
					{
					  bool:true,
					  title:'小说',
					  topic:'佳片期待',
					  describe:'加入豆瓣人数最多的影视组织，推荐和交流自认为好的电影，剧集',
					  imgSrc1:'',
					  imgSrc2:'',
					  count:612802
					},
					{
					  bool:true,
					  title:'小说',
					  topic:'佳片期待',
					  describe:'加入豆瓣人数最多的影视组织，推荐和交流自认为好的电影，剧集',
					  imgSrc1:'',
					  imgSrc2:'',
					  count:612802
					}
				],				
				num:0
			}
		},
		methods:{
			changeImg:function(i){
				this.lists[i].bool=!this.lists[i].bool;
				this.lists[i].bool?this.num--:this.num++
				console.log(this.num)
			}
		}
    }
		
</script>

<style scoped>
	  .group-list{position: relative;}
	  .group-list hr{width: 90%;margin:17px 0 23px 17px;}
	  .group-list .line h2{font-size: 16px;padding: 0 15px;background: #fff;position: absolute;top: -10px;left: 148px;}
	  .group-list ul{width: 90%;margin-left: 17px;}
	  .group-list li{padding-bottom: 15px;position: relative;}
	  .group-list .pic{float: left;width: 50px;height: 50px;border:1px solid #ccc;border-radius: 10px;overflow: hidden;margin-right: 7px;}
	  .group-list .pic img{width: 100%;}
	  .group-list h3{font-size: 16px;color: #505050;}
	  .group-list .des{font-size: 12px;color: #a5a5a5;width: 190px;height: 50px;display: inline-block;}
	  .group-list .cot{font-size: 13px;color: #d0d0d0;position: absolute;top: 20px;right: 28px;}
	  .group-list .status{position: absolute;top: 20px;right: 0;width: 20px;}
		.total {
	    background: hsla(0,0%,100%,.97);
	    height: 50px;
	    box-shadow: 0 -1px 5px 0 rgba(0,0,0,.3);
	    position: fixed;
	    bottom: 60px;
	    left: 0;
	    right: 0;
	    margin: auto;
	  }
	  .total a {
	    height: 26px;
	    position: absolute;
	    left: 4%;
	    top: 0;
	    bottom: 0;
	    margin: auto;
	    color: #2abd63;
	    font: 14px/26px Microsoft YaHei;
	  }
	  .total a img {
	    height: 90%;
	    vertical-align: middle;
	    margin-right: 8px;
	  }
	  button {
	    width: 34%;
	    height: 26px;
	    background: none;
	    background: #e2e2e2;
	    color: #fff;
	    border: none;
	    border-radius: 5px;
	    text-align: center;
	    font: 14px/26px Microsoft YaHei;
	    position: absolute;
	    right: 4%;
	    top: 0;
	    bottom: 0;
	    margin: auto;
	  }
	  button.checked {
	    background: #2abd63;
	  }
</style>
