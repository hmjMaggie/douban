<template>
	<div class="detailsVideo">
		<div class="titleVideo">
			<img @click="goBack" src="./images/ic_group_folder_up.png"/>
			<h3>电影</h3>
		</div>
		<div>
			<video src="./video/video.mp4" controls="controls"></video>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			goBack:function(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.detailsVideo{text-align: center;}
	.titleVideo{height: 30px;}
	.titleVideo img{float: left;width: 18px;padding: 7px 0 0 12px;}
	.titleVideo h3{line-height: 30px;font-size: 16px;}	
	.detailsVideo video{width: 100%;}
</style>