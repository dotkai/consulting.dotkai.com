<template>
<v-container>
	<v-layout>
		<v-flex xs6>
			<v-layout row wrap align-center>
				<v-flex xs6>
					<v-select
					  v-model="hourCount"
					  :items="hourList"
					  :disabled="plan === 'bulk'"
					  single-line
					></v-select>
				</v-flex>
				<v-flex xs6>
					<v-subheader class="title">Hour/s</v-subheader>
				</v-flex>
			</v-layout>
			<v-layout row wrap align-center>
				<v-flex xs6>
					<v-select
					  v-model="minuteCount"
					  :items="minuteList"
					  :disabled="hourCount === '4'"
					  single-line
					></v-select>
				</v-flex>
				<v-flex xs6>
					<v-subheader class="title">Minutes</v-subheader>
				</v-flex>
			</v-layout>
		</v-flex>
		<v-flex xs6>
			<h3>Est. Total</h3>
			<h2 class="headline green--text darken-2 pa-3">{{ total }}</h2>
			<span class="body-1 font-italic">(Not due until consultation has been confirmed and scheduled.)</span>
		</v-flex>
	</v-layout>
</v-container>
</template>

<script>
const HOURMIN = 60;
export default {
	name: 'hourset',
	props: {
		plan: String
	},
	data(){
		return {
			hourCount: '0',
			hourList: ['0','1','2','3','4'],
			minuteCount: '0',
			minuteList: ['0', '10', '20', '30', '40', '50']
		}
	},
	watch: {
		hourCount(val){
			if(val === '4') this.minuteCount = '0';
		}
	},
	computed: {
		total(){
			const vm = this;
			const mapping = {
				bulk(){
					vm.hourCount = '4';
					vm.minuteCount = '0';
					return 200;
				},
				first(totalMinutes){
					// First 60 minutes = $30/hour, after that $60/hour
					return (totalMinutes > HOURMIN? 30 + (totalMinutes - HOURMIN) : totalMinutes * 0.5);
				},
				standard(totalMinutes){
					return totalMinutes;
				},
				student(totalMinutes){
					return (totalMinutes/60)*35;
				}
			}

			let totalCalc = this.plan? '$' + mapping[this.plan](this.toMinutes()) : false;

			this.$emit('update', { timeReserve: `${this.hourCount} hr ${this.minuteCount} min`, totalCost: totalCalc });
			return totalCalc || '(No budget selected)';
		}
	},
	methods: {
		toMinutes(){
			return parseInt(this.hourCount)*HOURMIN + parseInt(this.minuteCount);
		}
	}
}
</script>

<style>

</style>