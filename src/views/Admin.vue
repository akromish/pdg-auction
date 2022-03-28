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
              <div>{{ item.data.itemNumber }}, {{ item.data.name }}</div>
            </v-card-title>
            <v-card-text>
              <v-col>
                <div>Bidder: {{ item.data.currentBidder }}</div>
                <div>Phone Number: {{ item.data.phoneNumber }}</div>
                <div class="font-weight-bold">Current Price: ${{ item.data.currentPrice }}</div>
              </v-col>
            </v-card-text>
            <v-card-actions>
              <v-col class="text-left">
                <v-btn color="#FF0000" class="white--text" @click="deleteItem(this.item.itemId)">Delete</v-btn>
              </v-col>
              <v-col class="text-right">
                <modifyItem
                    v-bind:item-name="item.data.name"
                    v-bind:item-number=item.data.itemNumber
                    v-bind:item-id="item.id"
                    v-bind:current-bidder="item.data.currentBidder"
                    v-bind:current-price=item.data.currentPrice
                    v-bind:description="item.data.description"
                    v-bind:phoneNumber="item.data.phoneNumber"
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
import firebase from "@firebase/app";

export default {
  name: "Admin",
  title: "Admin Page",
  components: {
    modifyItem,
  },
  methods: {
    add() {
      this.$router.replace({name: 'Add Item'});
    },
    // eslint-disable-next-line no-unused-vars
    updateStuff(updatedStuff) {
      this.$router.go(0);
    },
    deleteItem(itemId) {
      // TODO: fix lol
      db.collection("items")
          .where(firebase.firestore.FieldPath.documentId(), "==", itemId)
          .get()
          .then(querySnapshot => (querySnapshot.forEach((doc) => (doc.ref.delete()))))
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
    db.collection("items").orderBy("name").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.items.push({
          data: doc.data(),
          id: doc.id
        });
      });
    })
  }
}
</script>