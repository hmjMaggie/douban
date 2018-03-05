<template id="tapbar">
	<div class="tapbarWrapper">
		<item :title="title1" mark="home" :sel="selected" @option="getValue">
			<img class="index" src="./images/ic_tab_home_normal.png" slot="normal">
			<img class="index" src="./images/ic_tab_home_active.png" slot="active">
		</item>
		<item :title="title2" mark="book" :sel="selected" @option="getValue">
			<img class="book" src="./images/ic_tab_subject_normal.png" slot="normal">
			<img class="book" src="./images/ic_tab_subject_active.png" slot="active">
		</item>
		<item :title="title3" mark="broadcast" :sel="selected" @option="getValue">
			<img class="radio" src="./images/ic_tab_status_normal.png" slot="normal">
			<img class="radio" src="./images/ic_tab_status_active.png" slot="active">
		</item>
		<item :title="title4" mark="group" :sel="selected" @option="getValue">
			<img class="group" src="./images/ic_tab_group_normal.png" slot="normal">
			<img class="group" src="./images/ic_tab_group_active.png" slot="active">
		</item>
		<item :title="title5" mark="personal" :sel="selected" @option="getValue">
			<img class="me" src="./images/ic_tab_profile_female_normal.png" slot="normal">
			<img class="me" src="./images/ic_tab_profile_female_active.png" slot="active">
		</item>
	</div>
</template>

<script>
import item from './tapbarChild'
export default {
	components:{
		item
	},
	name:"tapbar",
	data:function(){
		return{
			selected:'home',
			title1:'首页',
			title2:'书影音',
			title3:'广播',
			title4:'小组',
			title5:'我的'
		}
	},
	methods:{
		getValue:function(n){
			this.selected = n;
		}
	}
}
</script>

<style>
	.tapbarWrapper{height: 64px;width: 100%;background-color: #f6f6f6;position: fixed;z-index: 10;bottom: 0;left: 0;border-top: 1px solid #b5b5b5;}
	.tapbarWrapper img{width: 45px;}
</style>
