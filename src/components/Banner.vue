<template>
<section class="splash">
	<div class="content">
		<h1 class="display-3 font-weight-light">Let's turn your idea into reality.</h1>
		<h2 class="headline font-weight-thin font-italic">Story Consultation to help you begin, keep going, and finish that nagging project.</h2>
	</div>
	<v-img class="bgimg" src="src/assets/lightbulb.jpg" gradient="to top right, rgba(200,200,200,.33), rgba(0,0,0,.7)"></v-img>
</section>
</template>

<script>
export default {
	name: 'main-banner'
}
</script>

<style lang="scss" scoped>
.splash {
	height: 100%;
	overflow: hidden;
	color: white;
	padding-bottom: 0;

	.content {
		position: absolute;
	    position: absolute;
	    top: 100px;
	    left: 50%;
	    right: 50px;
	    z-index: 100;
	    color: white;
		background: rgba(20,20,20, 0.5);
    	padding: 30px;

		h2 {
			padding: 20px;
		}
	}

	.bgimg {
		position: absolute;
	    top: 0;
		  left: 0;
		  bottom: 0;
		  right: 0;
	    width: 100%;
	    height: 100%;
	    z-index: 50;
	    opacity: 0.9;
	    overflow: hidden;
	}
}
</style>