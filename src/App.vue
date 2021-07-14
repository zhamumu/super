<template>
	<div id="app">
		<tab></tab>
		<router-view></router-view>
	</div>
</template>

<script>
	import Tab from './components/common/Tab'
	export default {
		name: 'App',
		components:{
			Tab
		}
	}
</script>

<style>
	@import url("./assets/css/base.css");
</style>
