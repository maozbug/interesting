<template>
	<div id="home">
		<!-- <div id="login">
			login
		</div> -->
		<Login></Login>
		<div id="cover"  @click="cover()" v-if="show" v-bind:style="{'min-height':H+'px'}"></div>
		<div id="home_page">
			<div id="header">
				<span @click="login()">
					<icon name="more" :scale="4"></icon>	
				</span>
				<div>趣闻解密</div>
				<span @click="add('/add')">
					<icon class="add" name="add" :scale="4" ></icon>
				</span>
			</div>
		</div>
	</div>	
</template>
<script>
import Login from '@/components/Login/login'
export default{
	data(){
		return{
			show:false,
			H:''
		}
	},
	methods:{
		add(url){
			document.getElementById('home').style.transform="translateX(-100%)";
			document.getElementById('home').style.opacity="0";
			this.$router.push(url);
			//this.$store.dispatch('select_Index',url);
		},
		login(){
			document.getElementById('home_page').style.transform="translateX(66%)";
			document.getElementById('login').style.transform="translateX(0)";
			this.show=true;
			this.H=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		},
		cover(){
			document.getElementById('home_page').style.transform="translateX(0)";
			document.getElementById('login').style.transform="translateX(-100%)";
			this.show=false;
			this.H=0;
		}
	},
	components:{Login},
}
</script>
<style lang="scss">
	#home{
		display:flex;
		width:100%;
		overflow:hidden;
		#cover{
			opacity:0;
			background:white;
			position:fixed;
			top:0;
			right:0;
			height:100px;
			width:34%;
			z-index:2;
		}
		#home_page{
			position:absolute;
			width:100%;
			transition: all linear .5s;
			#header{
				display:flex;
				height:45px;
				line-height:45px;
				background:#FA5656;
				div{
					flex:6;
					text-align:center;
					font-size:24px;
					font-family:'楷体';
					color:white;
					border-left:1px solid #F7BF69;
					border-right:1px solid #F7BF69;
				}
				span{
					flex:1;
					padding:5px 8px;
					.add{
						float:right;
					}
				}
			}	
		}
		#login{
			position:absolute;
			width:66%;
			transform:translateX(-100%);
			transition: all linear .5s;
		}
	}
	
</style>