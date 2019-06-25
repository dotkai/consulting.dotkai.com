<template>
<form id="contactForm" method="POST" action="https://formspree.io/dotkaimail@gmail.com">
  <v-container>
    <v-layout>
      <v-flex xs4>
        <v-subheader class="title">Your Name</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
        v-model="name"
        name="name"
        append-icon="face"
        required
      ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs4>
        <v-subheader class="title">Contact Email</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
        v-model="email"
        name="_replyto"
        :rules="emailErrors"
        append-icon="mail"
        required
      ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs4>
        <v-subheader class="title">Consultation Type</v-subheader>
      </v-flex>
      <v-flex xs8 class="text-xs-right">
        <v-text-field
          v-model="consultingType"
          name="consultingType"
          disabled
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs4>
        <v-subheader class="title">Project Description</v-subheader>
      </v-flex>
      <v-flex xs8 class="text-xs-right">
        <v-textarea auto-grow placeholder="(Nothing Added)" v-model="project" name="project" disabled></v-textarea>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs4>
        <v-subheader class="title">Total Time Request</v-subheader>
      </v-flex>
      <v-flex xs8 class="text-xs-right">
        <v-text-field
          v-model="time"
          name="time"
          disabled
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs4>
        <v-subheader class="title">Est. Total</v-subheader>
      </v-flex>
      <v-flex xs8 class="text-xs-right">
        <v-text-field
          v-model="estTotal"
          name="estTotal"
          disabled
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout justify-end>
        <v-spacer></v-spacer>
      	<v-checkbox
            v-model="checkbox"
            :rules="checkboxErrors"
            name="agree"
            label="I understand this is only an inquiry and not a contract. No payments or services are due at this time."
            required
          ></v-checkbox>
    </v-layout>

    <v-btn type="submit" color="info" :disabled="!isValid()">Submit Inquiry</v-btn>
  </v-container>
</form>
</template>

<script>
  import axios from 'axios'
  import CARD_DATA from '../assets/cardData'

export default {
	name: 'submit-form',
  props: {
    consulting: String,
    project: String,
    plan: String,
    time: String,
    cost: String
  },
  data(){
    return {
      valid: false,
      name: '',
      email: '',
      emailErrors: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      checkbox: false,
      checkboxErrors: [
        v => !!v || 'You must agree to submit an inquiry'
      ]
    }
  },
  computed: {
    consultingType(){
      return this.consulting? CARD_DATA.types.gigs[this.consulting].title : '(None selected)';
    },
    planName(){
      return this.plan? CARD_DATA.deals.gigs[this.plan].name : 'None selected';
    },
    estTotal(){
      return `${this.cost === '0'? '$0' : this.cost } (${ this.planName || 'None Selected' })`
    }
  },
  methods:{
    isValid(){
      return !!(this.consulting && this.project && this.plan && this.time && this.cost && this.checkbox);
    }
  }
}
</script>

<style>

</style>