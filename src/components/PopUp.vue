<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
      >Bid</v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
            color="primary"
            dark
        >{{ itemName }}</v-toolbar>
        <v-card-text>
          <h2 class="mt-4">Highest Bid: ${{ currentPrice }}({{ currentBidder }})</h2>
        </v-card-text>
        <v-card-actions>
          <v-form>
<!--            need to add some sort of form validation-->
            <v-text-field
                label="name"
                v-model="name"
                :rules="inputRules"
                required
            ></v-text-field>
            <v-text-field
                type="number"
                label="price (min $1 increment)"
                v-model.number="bidPrice"
                :rules="bidRules"
                required
            ></v-text-field>
            <v-text-field
                label="phone number"
                v-model="phoneNumber"
                :rules="phoneRules"
                required
            ></v-text-field>
          </v-form>
        </v-card-actions>
        <v-card-actions>
          <v-col>
            <v-btn
                @click="dialog.value = false"
            >Close</v-btn>
          </v-col>
          <v-col class="text-right">
            <v-btn
                @click=bid
            >Submit Bid</v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { db } from '@/db';

export default {
  name: "PopUp",
  methods: {
    bid () {
      db.collection("bids").add({
        name: this.name,
        bidPrice: this.bidPrice,
        phoneNumber: this.phoneNumber,
        itemName: this.itemName
      })
      db.collection("items").doc(this.itemName).update({
        currentPrice: this.bidPrice,
        currentBidder: this.name,
      })
    },
  },
  props: {
    documentId: String,
    itemName: String,
    currentPrice: Number,
    currentBidder: String,
  },
  data() {
    return {
      name: '',
      phoneNumber: '',
      bidMin: this.currentPrice + 1,
      bidPrice: this.bidMin,
      inputRules: [
        v => v.length >=3 || 'please enter your full name',
      ],
      bidRules: [
        v => v >= this.bidMin || `minimum bid: $${this.bidMin}`,
      ],
      phoneRules: [
        v => v.length >=9 || 'please enter your phone number',
      ]
    }
  },
}
</script>

<style scoped>
.v-toolbar {
  font-size: 1.5rem;
}
</style>