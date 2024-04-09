<template>
  <div>
    <div class="text-center my-4">
      <v-btn @click="add">Add Item</v-btn>
    </div>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm4 md3 lg2 v-for="item in items" :key="item.name">
          <v-card text class="my-3 mx-4 justify-center rounded-md" color="#fffff2">
            <v-responsive class="">
              <v-lazy-image
                  height="150"
                  :src="item.data.imageUrl"
                  style="width: 100%;"
              />
            </v-responsive>
            <v-card-title>
              <div>#{{ item.data.itemNumber }}: {{ item.data.name }}</div>
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
                <v-dialog max-width="400" v-model="deleteDialog">
                  <template v-slot:activator="{ on }">
                    <v-btn color="#FF0000" class="white--text" @click="confirmDelete(item.id)" v-on="on">Delete</v-btn>
                  </template>
                  <v-card>
                    <v-card-text class="font-weight-bold">
                      Are you sure you want to delete this item?
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="#FF0000" @click="deleteItemConfirmed">Yes</v-btn>
                      <v-btn color="primary darken-1" text @click="deleteDialog = false">No</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
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
import VLazyImage from "v-lazy-image/v2";

export default {
  name: "Admin",
  title: "Admin Page",
  components: {
    modifyItem,
    VLazyImage
  },
  methods: {
    add() {
      this.$router.replace({name: 'Add Item'});
    },
    // eslint-disable-next-line no-unused-vars
    updateStuff(updatedStuff) {
      this.$router.go(0);
    },
    confirmDelete(itemId) {
      this.itemIdToDelete = itemId;
      this.deleteDialog = true;
    },
    deleteItemConfirmed() {
      db.collection("items")
        .doc(this.itemIdToDelete)
        .delete()
        .then(() => {
          this.fetchData()
          this.deleteDialog = false;
        })
    },
    fetchData() {
      this.items = [];
      db.collection("items").orderBy("itemNumber").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.items.push({
            data: doc.data(),
            id: doc.id
          });
        });
      })
    },
  },
  data() {
    return {
      headers: [
        { text: 'Item', value: 'name' },
      ],
      items: [],
      deleteDialog: false
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>