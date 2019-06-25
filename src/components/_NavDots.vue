<template>
<v-btn-toggle v-model="toggle" class="fastnav">
	<v-btn icon flat color="grey darken-3" v-for="(dot, index) in dots" :key="index" v-scroll-to="'#'+dot.name">
		<v-icon small v-if="toggle >= index">lens</v-icon>
		<v-icon small v-else>trip_origin</v-icon>
	</v-btn>
</v-btn-toggle>
</template>

<script>
export default {
	name: 'navdots',
	data(){
		return {
			toggle: 0,
			dots: [{
				name: 'top'
			}, {
				name: 'projectType'
			}, {
				name: 'description'
			}, {
				name: 'budget'
			}, {
				name: 'time'
			}, {
				name: 'submit'
			}]
		}
	},
	methods: {
		toggleMenu(){
			this.mobileMenu = !this.mobileMenu;
		},
		gotoItem(menuItem){
			this.$scrollTo('#'+menuItem.name);
			this.mobileMenu = false;
		},
		elemOffset(index){
			return this.dots[index]? this.dots[index].elem.offsetTop : 
				this.dots[index-1].elem.offsetTop + this.dots[index-1].elem.clientHeight;
		},
		handleScroll(e){
			let scrollLocation = window.scrollY + this.$el.clientHeight;

			for(var i=0; i < this.dots.length; i++){
				if(scrollLocation >= this.elemOffset(i) &&
					scrollLocation < this.elemOffset(i+1)){
					this.toggle = i;
				}
			}
		}
	},
	created () {
	  window.addEventListener('scroll', this.handleScroll);
	},
	mounted (){
		this.dots.forEach(function(item){
			item.elem = document.getElementById(item.name);
		});
	},
	destroyed () {
	  window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>

<style>
.fastnav {
	position: fixed;
	top: 0;
    left: 10px;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
	z-index: 300;
	background: none !important;
    box-shadow: none !important;
}
</style>