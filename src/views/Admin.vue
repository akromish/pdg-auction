<template>
  <div>
    <div class="text-center my-4">
      <v-btn @click="add">Add Item</v-btn>
    </div>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="item in items" :key="item.name">
          <v-card text class="my-3 mx-4 justify-center rounded-md" color="#fffff2">
            <v-card-title>
              <div>{{ item.name }}</div>
            </v-card-title>
            <v-card-text>
              <v-col>
                <div>Bidder: {{ item.currentBidder }}</div>
                <div>Phone Number: {{ item.phoneNumber }}</div>
                <div class="font-weight-bold">Current Price: ${{ item.currentPrice }}</div>

              </v-col>
            </v-card-text>
            <v-card-actions>
              <v-col class="text-left">
                <v-btn color="#FF0000" class="white--text">Delete</v-btn>
              </v-col>
              <v-col class="text-right">
                <modifyItem
                    v-bind:item-name="item.name"
                    v-bind:current-bidder="item.currentBidder"
                    v-bind:current-price="item.currentPrice"
                    v-on:changeStuff="updateStuff($event)"
                />
              </v-col>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>


  </div>
</template>

<script>
import {db} from "@/db";
import modifyItem from "@/components/modifyItem";

export default {
  name: "Admin",
  title: "Shumail's Page",
  components: {
    modifyItem,
  },
  methods: {
    add() {
      this.$router.replace({name: 'Add Item'});
    }
  },
  data() {
    return {
      headers: [
        { text: 'Item', value: 'name' },
      ],
      items: [],
    }
  },
  mounted() {
    db.collection("items").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.items.push(doc.data());
      });
    });
  }
}
</script>