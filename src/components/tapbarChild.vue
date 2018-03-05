<template id="tal">
	<div @click="change" class="tapbarChild">
		<!--方法 2  标签式路由派送-->
		<router-link :to="'/'+mark">
			<span v-show="!bool"><slot name="normal"></slot></span>
			<span v-show="bool"><slot name="active"></slot></span><br>
			<span class="text-tapbar" :class="{green:bool}">{{title}}</span>
		</router-link>-->
	</div>
</template>

<script type="text/javascript">
	export default{
		name:"tapbarChild",
		props:['title','mark','sel'],
		methods:{
			change:function(){
				/* $emit 触发事件  option 触发事件的名称  this.mark是传的参数   */
				this.$emit('option',this.mark)

				// 方法 1  编程式路由路径派送
				//this.$router.push('/'+this.mark)
			}
		},
		computed:{
			bool:function(){
				if(this.mark==this.sel){
					return true;
				}else{
					return false;
				}
			}
		}
	}
</script>

<style>
	.tapbarChild{width: 20%;height: 100%;float: left;text-align: center;font-size: 0;position: relative; /*解决图片下三像素留白问题,在父级上加上这个*/}
  .tapbarChild .text-tapbar{font-size: 14px;color: #cdcdcd;}
  .tapbarChild .green{color: #42bf55;}
</style>
