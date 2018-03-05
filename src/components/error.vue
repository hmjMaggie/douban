<template>
  <div class="err">
    <h1>404</h1>
    <div class="pic"><img src="../../static/404timg.gif" alt=""></div>
    <h2>你访问的页面暂时没找着哦！</h2>
  </div>
</template>


<script>
  export default{
    data:function(){
      return {

      }
    },
  }

</script>

<style>
  .err{  position: fixed;  top:0;  left:0;  background: #fff;  display: ; width:100%;  height:100%;  z-index:10; text-align: center;  padding:140px 0 0 0; }
  .err .pic{
    width:200px;
    height:150px;
    display: inline-block;box-shadow:5px 5px 10px #ccc}
  .err h1{ font-size:40px;  color: #2abd63;
    padding:30px;}
  .err h2{ font-size:25px;  color: #2abd63;
    padding:30px; }
  .err img{  width:100%;  border:none;  }
</style>
