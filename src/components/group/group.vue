<template>
	<div>
		<myHeader class="headerWrap">
			<span class="text" slot="one">小组</span>
			<img src="./images/ic_actionbar_search_icon.png" class="search1" slot="two"/>
			<img src="./images/ic_create_group_chat_blue.png" class="chat1" slot="three"/>
		</myHeader>
		<group-banner></group-banner>
		<div class="group-banner-wrap">
			<group-list></group-list>
		</div>
	</div>
</template>

<script>
	import myHeader from '../header'
	import groupBanner from './groupBanner'
	import groupList from './groupList'
	export default{
		components:{
			myHeader,
			groupBanner,
			groupList
		},
		data:function(){
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.group-banner-wrap{margin-bottom: 110px;}
  
</style>
