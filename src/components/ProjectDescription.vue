<template>
<v-container>
	<v-layout>
      <v-flex xs12>
        <v-textarea clearable solo auto-grow :rules="rules" counter="500" placeholder="Describe your project/idea here" @input="$emit('update', description)" v-model="description"></v-textarea>
      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
	data(){
		return {
			description: '',
			rules: [v => v.length <= 500 || 'Please keep your description under 500 characters']
		}
	}
}
</script>

<style lang="scss">

</style>