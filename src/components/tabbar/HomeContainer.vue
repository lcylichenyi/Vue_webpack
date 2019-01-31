
<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item>
		  		<img src="./images/p1.jpg" alt="">
		  </mt-swipe-item>
		  <mt-swipe-item>
		  		<img src="./images/p2.jpg" alt="">
		  </mt-swipe-item>
		  <mt-swipe-item>
		  		<img src="./images/p3.jpg" alt="">
		  </mt-swipe-item>
		</mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div></a></li>

        </ul> 
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
	height: 500px;

	.mint-swipe-item{
		&:nth-child(1) img{
			width: 100%;
		}		
		&:nth-child(2) img{
			width: 100%;
		}
		&:nth-child(3) img{
			width: 100%;
		}
	}
}


.mui-grid-view.mui-grid-9 {
	background-color: #fff;
	border: none;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border: none;
}


</style>
