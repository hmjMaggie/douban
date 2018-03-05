<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper homeBanner">
	        <div class="swiper-slide"><img src="./images/01.jpg"/></div>
	        <div class="swiper-slide"><img src="./images/02.jpg"/></div>
	        <div class="swiper-slide"><img src="./images/03.jpg"/></div>
	    </div>
	    <div class="swiper-pagination"></div>
	</div>
</template>

<script>
  import '../../assets/swiper'
	export default{
		mounted:function(){
			var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    autoplay:1000,

			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			})
		}
	}
</script>

<style>
  @import '../../assets/swiper.css';
  .homeBanner{padding-top: 50px;}
	.swiper-wrapper{width: 100%;}
	.swiper-wrapper img{width: 100%;}
</style>
