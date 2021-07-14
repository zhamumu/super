<template>
	<tab-bar class="tab">
		<tab-bar-item path='/home' activeColor='pink'>
			<img slot='item-icon' src="../../../assets/img/tabbar/首页1.svg">
			<img slot='item-icon-active' src="../../../assets/img/tabbar/首页-选中.svg">
			<div slot="item-text">首页</div>
		</tab-bar-item>
		<tab-bar-item path="/category">
			<img slot='item-icon' src="../../../assets/img/tabbar/分类1.svg">
			<img slot='item-icon-active' src="../../../assets/img/tabbar/分类选中.svg">
			<div slot="item-text">分类</div>
		</tab-bar-item>
		<tab-bar-item path="/cot">
			<img slot='item-icon' src="../../../assets/img/tabbar/购物车1.svg">
			<img slot='item-icon-active' src="../../../assets/img/tabbar/购物车选中.svg">
			<div slot="item-text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path='/profile'>
			<img slot='item-icon' src="../../../assets/img/tabbar/我的1.svg">
			<img slot='item-icon-active' src="../../../assets/img/tabbar/我的选中.svg">
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from '../../common/tabbar/TabBar.vue'
	import TabBarItem from '../../common/tabbar/TabBarItem.vue'
	export default {
		name: 'Tab',
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
