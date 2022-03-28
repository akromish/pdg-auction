<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600" class="text-center">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="#7b1443"
          v-bind="attrs"
          v-on="on"
          class="white--text"
      >Bid</v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
            color="#143344"
            dark
        >{{ itemName }}</v-toolbar>
        <v-card-text>
          <h2 class="mt-4">Highest Bid: ${{ currentPrice }}({{ currentBidder }})</h2>
        </v-card-text>
        <v-card-actions>
          <v-form ref="form">
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
                @click="bid(); dialog.value = false"
                color="#7b1443"
            ><div class="white--text">Submit Bid</div></v-btn>
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
      if(this.$refs.form.validate()) {
        db.collection("bids").add({
          name: this.name,
          bidPrice: this.bidPrice,
          phoneNumber: this.phoneNumber,
          itemId: this.itemId
        }).then( () => {
          db.collection("items").doc(this.itemId).update({
            currentPrice: this.bidPrice,
            currentBidder: this.name,
            phoneNumber: this.phoneNumber,
          }).then( () => {
            this.$emit('changeStuff', 'hmmm');
          })
        })
      }
    },
  },
  props: {
    itemName: String,
    itemId: String,
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
      ],
      valid: true,
    }
  },
}
</script>

<style scoped>
.v-toolbar {
  font-size: 1.5rem;
}
</style>