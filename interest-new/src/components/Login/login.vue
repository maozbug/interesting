<template>
	<div id="login"  v-bind:style="{'min-height':H+'px'}">
		<div class="top">
			<div class="denglu">
				<icon class="img" name="login" :scale="7"></icon>
				<span>立即登录</span>
			</div>
		</div>
		<div class="center"> 
			<p>——使用第三方账号登陆——</p>
			<ul class="media">
				<li v-for="item in mediaList">
					<icon class="img" :name='item.icon' :scale="4"></icon>
					<span>{{item.title}}</span>
				</li>
			</ul>
			<ul class="tab">
				<li v-for="item in tablist">
					<icon class="img" :name='item.icon' :scale="3"></icon>
					<span>{{item.title}}</span>
				</li>
			</ul>
		</div>
		<div class="footer">
			<ul>
				<li>
					<div>
						<icon class="img" name="设置" :scale="3"></icon>
						<span>设置</span>
					</div>
				</li>
				<li>
					<div>
						<icon class="img" name="夜间" :scale="3"></icon>
						<span>夜间</span>
					</div>
					<!-- <div>
						<icon class="img" name="" :scale="3"></icon>
						<span>日间</span>
					</div> -->
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			H:'',
			mediaList:[
				{
					title:'新浪微博',
					icon:'xinlang',
				},
				{
					title:'腾讯QQ',
					icon:'QQ',
				},
				{
					title:'腾讯微博',
					icon:'tenxun',
				}
			],
			tablist:[
				{
					title:'我的消息',
					icon:'mymsg'
				},
				{
					title:'我的收藏',
					icon:'clection'
				},
				{
					title:'清除缓存',
					icon:'delete'
				}
			]
		}
	},
	created(){
		this.H=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	}
}
</script>
<style lang="scss">
	#login{
		width:66%;
		background:#656669;
		.top{
			width:100%;
			background:#41C3C8;
			.denglu{
				display:flex;
				flex-direction:column;
				text-align:center;
				padding:60px 25% 25px 25%;;
				.img{
					margin:5px 26%;
				}
				span{
					color:white;
				}
			}
		}
		.center{
			padding:10% 10px;
			p{
				font-size:14px;
				text-align:center;
				color:#C0BABA;
			}
			ul.media{
				display:flex;
				padding-bottom:10%;
				border-bottom:1px solid #C0BABA;
				li{
					flex:1;
					display:flex;
					flex-direction:column;
					text-align:center;
					.img{
						flex:2;
						margin:5px 28%;
					}
					span{
						flex:1;
						font-size:14px;
						color:#C0BABA;
					}
				}
			}
			ul.tab{
				padding:10px 5%;
				border-bottom:1px solid #C0BABA;
				li{
					display:flex;
					margin:0 auto;
					width:80%;
					padding:10px;
					justify-content:center;
					align-items:center;
					.img{
						flex:1;
					}
					span{
						flex:2;
						color:#C0BABA;
					}
				}
			}
		}
		.footer{
			position:absolute;
			bottom:0;
			width:100%;
			padding:5%;
			ul{
				display:flex;
				width:100%;
				li:first-child{
					div{
						border-right:1px solid #C0BABA;
					}
				}
				li{
					flex:1;
					div{
						width:80%;
						margin:0 auto;
						display:flex;
						justify-content:center;
						align-items:center;
						.img{
							flex:1;
						}
						span{
							flex:2;
							padding:8px;
							font-size:14px;
							color:#C0BABA;
						}
					}
				}
			}
		}
	}
</style>