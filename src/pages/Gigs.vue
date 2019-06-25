<template>
<div id="gigs">
	<NavDots></NavDots>
	<Banner id="top"></Banner>
	<section id="projectType">
		<h1 class="display-2 font-weight-light ma-5">What do you need help with?</h1>
		<!-- <h5 class="subheading font-italic">Don't know? Pick General Story/Narrative Consulting. Things can be changed, this just helps me know what to expect. :)</h5> -->
		<CardPicker :cards="CARD_DATA_CONTENT.types" :center-flex="true" @select="val => consultingType = val"></CardPicker>
	</section>
	<section id="description">
		<h1 class="display-2 font-weight-light ma-5">Brief Description</h1>
		<ProjectDescription @update="val => description = val"></ProjectDescription>
	</section>
	<section id="budget">
		<h1 class="display-2 font-weight-light ma-5">What's your budget?</h1>
		<CardPicker :cards="CARD_DATA_CONTENT.deals" @select="val => dealType = val"></CardPicker>
	</section>
	<section id="time">
		<h1 class="display-2 font-weight-light ma-5">How much time would you like to reserve?</h1>
		<HourSet :plan="dealType" @update="val => { timeReserve = val.timeReserve; totalCost = val.totalCost || '0' }"></HourSet>
		<h3 class="font-italic pa-5 yellow lighten-5">You don't need to use it all in one meeting (ie. session). You can request 1 hour and spread it over 4 sessions (15 minutes each). You can request 2 hours and use it all up in 1 session. We'll work with your schedule. I'm flexible. :D</h3>
	</section>
	<section id="submit">
		<h1 class="display-2 font-weight-light ma-5">Review your inquiry!</h1>
		<SubmitForm :consulting="consultingType" :project="description" :plan="dealType" :time="timeReserve" :cost="totalCost"></SubmitForm>
	</section>
</div>
</template>

<script>
	import NavDots from '../components/_NavDots'
	import Banner from '../components/Banner'
	import CardPicker from '../components/CardPicker'
	import ProjectDescription from '../components/ProjectDescription'
	import HourSet from '../components/HourSet'
	import SubmitForm from '../components/SubmitForm'
	import cardData from '../assets/cardData'

export default {
	components: {
		NavDots,
		Banner,
		CardPicker,
		ProjectDescription,
		HourSet,
		SubmitForm
	},
	data(){
		return {
			CARD_DATA_CONTENT: cardData,
			consultingType: undefined,
			description: '',
			dealType: undefined,
			timeReserve: '',
			totalCost: ''
		}
	},
	methods:{
		
	}
}
</script>

<style lang="scss">
#gigs {
	/*display: flex;
    flex-direction: column;*/
	height: 100vh;
}
</style>