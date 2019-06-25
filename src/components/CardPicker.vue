<template>
<div>
	<div class="card-row">
		<div v-for="card in cards.gigs" class="card pa-3 ma-3" :class="{ 'selected-card': selected === card.code, 'center-flex': centerFlex }" @click="passUp(card)">
			<h2 class="display-1 font-weight-light">{{ card.title }}</h2>
			<h3 v-if="card.name" class="title pa-3">{{ card.name }}</h3>
			<p v-if="card.promo">{{ card.promo }}</p>
			<ul v-if="card.conditions">
				<li v-for="item in card.conditions">- {{ item }}</li>
			</ul>
		</div>
	</div>
	<!-- <div v-if="cards.notes">{{ cards.notes }}</div> -->
</div>
</template>

<script>
export default {
	name: 'card-picker',
	props: {
		centerFlex: Boolean,
		cards: Object
	},
	data(){
		return {
			selected: false
		}
	},
	methods: {
		passUp(selectedCard){
			this.selected = selectedCard.code;
			this.$emit('select', selectedCard.code);
		}
	}
}
</script>

<style lang="scss">
.card-row {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	.card {
		display: flex;
		flex-direction: column;
	    align-items: center;

		width: 250px;
		min-height: 200px;
		margin: 6px;
		box-shadow: 1px 1px 5px #aaa;

		&.center-flex {
	    	justify-content: center;
		}

		&:hover {
			cursor: pointer;
			background: lightgrey;
		}
	}

	.selected-card {
		background: lightgreen;
		border: 2px solid green;

		&:hover {
			background: lightgreen;
		}
	}

	li {
		padding: 5px;
		font-style: italic;
	}
}
</style>