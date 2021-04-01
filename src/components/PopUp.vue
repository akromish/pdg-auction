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
            <v-text-field
                label="name"
                v-model="name"
            ></v-text-field>
            <v-text-field
                type="number"
                label="price (min $1 increment)"
                v-model="bidPrice"
            ></v-text-field>
            <v-text-field
                label="phone number"
                v-model="phoneNumber"
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
      if(this.bidPrice>=this.bidMin) {
        db.collection("bids").add({
          name: this.name,
          bidPrice: this.bidPrice,
          phoneNumber: this.phoneNumber,
          item: this.documentId,
          itemName: this.itemName
        })
        // this.dialog = false
        this.$emit('close-dialog');
      } else {
        console.log('Price too low')
        console.log(this.bidMin)
      }
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
      bidPrice: 0,
      phoneNumber: '',
      bidMin: this.bidPrice++,
    }
  },
}
</script>

<style scoped>
.v-toolbar {
  font-size: 1.5rem;
}
</style>