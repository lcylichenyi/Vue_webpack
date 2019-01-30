
<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item></mt-swipe-item>
		  <mt-swipe-item></mt-swipe-item>
		  <mt-swipe-item></mt-swipe-item>
		</mt-swipe>
	</div>
</template>


<script>
export default {
	data(){
		return {}
	},
	created(){
	},
	methods: {

	}
}
</script>

<style scoped lang="less">
.mint-swipe{
	height: 600px;

	.mint-swipe-item{
		&:nth-child(1){
			background-image: url("./images/p1.jpg");
			background-size: cover;
		}

		&:nth-child(2){
			background-image: url("./images/p2.jpg");
			background-size: cover;
		}

		&:nth-child(3){
			background-image: url("./images/p3.jpg");
			background-size: cover;
		}
	}
}
</style>
