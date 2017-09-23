<template>
	<div id="adds">
		add
	</div>
</template>
<script>
export default{
	data(){
		return{
			
		}
	},
	mounted(){
		//console.log(this.adds);
		setTimeout(function(){
			//console.log(document.getElementById('adds'));
			document.getElementById('adds').style.right="0";
			document.getElementById('adds').style.opacity="1";
		},0)	
		//console.log(this.$store.getters.GET_SELECTED_INDEX);
	}
}
</script>
<style lang="scss">
	#adds{
		position:absolute;
		right:-100%;
		width:100%;
		background:#CAF2F1;
		transition: all linear .5s;
		opacity:0;
	}
</style>