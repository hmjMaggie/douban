<template>
  <div class="broadcast">
    <myHeader class="headerWrap">
      <span class="text" slot="one">广播</span>
      <img src="./images/ic_status_search_user.png" class="search1" slot="two"/>
      <img src="./images/ic_create_group_chat_blue.png" class="chat1" slot="three"/>
    </myHeader>
    <broadcastBanner></broadcastBanner>
  </div>
</template>

<script>
	import myHeader from '../header'
	import broadcastBanner from './broadcastBanner'

	export default{
		components:{
			myHeader,
      broadcastBanner
		},
		data:function(){
			return {

			}
		},
		methods:{

		}
	}
</script>

<style>
  .broadcast{background: #f6f6f6;}
</style>
