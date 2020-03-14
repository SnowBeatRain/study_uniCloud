<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>

		<button @tap="registerClcik">点击注册</button>
		<button @tap="getUserlist">获取用户列表</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {
		registerClcik() {
			// promise方式
			uniCloud.callFunction({
			    name: 'regitser',
			    data: { userName: "SnowBeatRain" }
			  })
			  .then(res => {
					console.log(res)
				}).catch(err=>{
					console.log(err)
				});
		},
		getUserlist(){
			uniCloud.callFunction({
			    name: 'getUserlist',
			    data: { pageNo:1,pageSize:10 }
			  })
			  .then(res => {
					console.log(res)
				}).catch(err=>{
					console.log(err)
				});
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
