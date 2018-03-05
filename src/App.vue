<template>
  <div id="app">
  	<tapbar></tapbar>
    <InitPage></InitPage>
    <router-view/>
  </div>
</template>

<script>

import Tapbar from './components/tapbar'
import InitPage from './components/initPage'

export default {
	name:'app',
	components:{
		 Tapbar,
     InitPage
	},
	created(){
		this.$router.push('/home')
	}
}

</script>

<style>
*{margin: 0;padding: 0;}
body{height: 100%;}
a,a:hover{text-decoration: none;}
ul{list-style: none;}
i{font-style: normal }
button, input, select, textarea {
  font-size: 100%;
  outline: none;
}
#app {

}
</style>
