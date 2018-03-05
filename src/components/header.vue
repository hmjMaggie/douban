<template>
	<div class="headerWrapper">
		<slot name="one"></slot>
		<slot name="two"></slot>
		<slot name="three"></slot>
		<slot name="four"></slot>
	</div>
</template>


<script>
	export default{
		data:function(){
			return {}
		},
		methods:{

		}
	}

</script>

<style>
	.headerWrapper{height: 50px;width: 100%;text-align: center;border-bottom: 1px solid #b6b6b6;background-color: #f6f6f6;position: relative;position: fixed;z-index: 10;}
  .headerWrapper input{position: absolute;top: 10px;left: 10px;width: 85%;box-sizing: border-box;text-indent:2em;height: 30px;border:none;border-radius: 5px;}
  .headerWrapper input::-webkit-input-placeholder{color: #cdcdcd;font-size: 14px;}
  .headerWrapper .search{width: 20px;position: absolute;top: 15px;left: 15px;}
  .headerWrapper .chat{width: 30px;position: absolute;top: 10px;right: 8px;}
  .headerWrapper .scan{width: 20px;position: absolute;top: 15px;right: 55px;}

  .headerWrapper .text{color: #393939;font-size: 16px;font-weight: bold;line-height: 50px;}
  .headerWrapper .search1{width: 20px;position: absolute;top: 15px;right: 70px;}
  .headerWrapper .chat1{width: 20px;position: absolute;top: 15px;right: 20px;}

</style>
