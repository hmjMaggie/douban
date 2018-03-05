<template>
  <div class="homeListWrap">
    <div class="homeList">
        <div class="ListText">
          <h2>{{msg.title}}</h2>
          <p class="des">{{msg.target.desc}}</p>
          <hr>
          <p class="author">作者：{{msg.target.author.name}}</p>
        </div>
        <div class="pic"><img :src="msg.target.cover_url"></div>
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
      return {
      	msg:{
	            "source_cn": "",
	            "layout": 1,
	            "target": {
	                "read_count": 1883,
	                "photos_count": 0,
	                "author": {
	                    "avatar": "https://img3.doubanio.com/icon/u77564270-3.jpg",
	                    "name": "大象公会"
	                },
	                "uri": "https://m.douban.com/note/610125234/",
	                "more_pic_urls": [],
	                "monitor_urls": [],
	                "cover_url": "https://qnmob2.doubanio.com/img/files/file-1489047494.jpg ",
	                "desc": "我们这一代人的成长年代，真正的诗歌课从来都是缺席的。",
	                "impression_url": "",
	                "monitor_url": ""
	            },
	            "title": "个人意见：为什么中国没有鲍勃·迪伦这样的民谣歌手",
	            "source": "editor",
	            "theme": null,
	            "id": "127231",
	            "card": null
	        }
      }
    },
    methods:{
     
    },
    created:function(){
      this.axios.get('/static/homeData.json').then(res=>{   /*es6新语法，箭头函数*/
        this.msg=res.data.recommend_feeds[this.$route.params.id];
        console.log(this.$route)
      })
    }
  }
</script>

<style>
  .homeListWrap{overflow: hidden;padding-bottom: 100px;}
  .homeList{position: relative;width: 100%;overflow: hidden;padding: 15px 15px;border-bottom: 1px solid #ccc;}
  .ListText{width: 60%;float: left;}
  .homeList h2{font-size: 16px;color: #3e3e3e}
  .homeList .des{font-size: 14px;color: #9e9e9e;padding: 10px 0;}
  .homeList hr{width: 20px;color: #9e9e9e;margin-bottom: 10px;}
  .homeList .author{font-size: 14px;color: #9e9e9e;}
  .homeList .pic{width: 80px;position: absolute;top: 10px;right: 47px;}
  .homeList .pic img{width: 100%;}
</style>
