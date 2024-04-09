<template>
  <div>
    <div class="text-center my-4">
      <v-btn @click="add">Add Item</v-btn>
    </div>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs10 sm6 md4 lg3 v-for="item in items" :key="item.name">
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
    <div class="text-center my-4">
      <v-dialog v-model="pauseDialog" max-width="400">
        <template v-slot:activator="{ on }">
          <v-btn v-if="isLive" color="#FFA500" dark v-on="on">Pause/Stop Auction</v-btn>
        </template>
        <v-card>
          <v-card-title>Confirm Pause Auction</v-card-title>
          <v-card-text>
            Are you sure you want to pause/stop the auction?<br/>
            This action is reversible.
          </v-card-text>
          <v-card-actions>
            <v-btn color="#FFA500" text @click="pauseAuction">Yes</v-btn>
            <v-btn text @click="pauseDialog = false">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn v-if="!isLive" color="#00FF00" @click="enableAuction">Start Auction</v-btn>
    </div>

    <div v-if="!isLive" class="text-center my-4">
      <hr />
      <h2>Winners list:</h2>
      <v-container>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Item Name</th>
                <th class="text-left">Item Number</th>
                <th class="text-left">Bidder Name</th>
                <th class="text-left">Phone Number</th>
                <th class="text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.data.name }}</td>
                <td>{{ item.data.itemNumber }}</td>
                <td>{{ item.data.currentBidder }}</td>
                <td>{{ item.data.phoneNumber }}</td>
                <td>{{ item.data.currentPrice }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
      <v-btn color="primary" @click="copyTableToClipboard">Copy Table To Clipboard as CSV</v-btn>
    </div>



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
      const RUNNING_FLAG_ID = "Yj95OpMYzMfHJcVm3E0X"
      db.collection("auction_running").doc(RUNNING_FLAG_ID).get().then((row)=>{
        this.isLive = row.data()["is_live"]
      })
    },
    pauseAuction() {
        const RUNNING_FLAG_ID = "Yj95OpMYzMfHJcVm3E0X"
        db.collection("auction_running").doc(RUNNING_FLAG_ID).update({
          is_live: false
        }).then( () => {
          this.isLive = false
          this.pauseDialog = false
        })
    },
    enableAuction() {
      const RUNNING_FLAG_ID = "Yj95OpMYzMfHJcVm3E0X"
        db.collection("auction_running").doc(RUNNING_FLAG_ID).update({
          is_live: true
        }).then( () => {
          this.isLive = true
        })
    },
    copyTableToClipboard() {
    const tableContent = this.generateTableContent();
    navigator.clipboard.writeText(tableContent)
      .then(() => {
        // Optional: Show a notification or perform any other action upon successful copy
        console.log('Copied table to clipboard');
      })
      .catch((error) => {
        console.error('Unable to copy table to clipboard:', error);
      });
    },
    generateTableContent() {
      let content = '';
      // Add table headers
      content += 'Item Name,Item Number,Bidder Name,Phone Number,Price\n';
      // Add table rows
      this.items.forEach((item) => {
        content += `${item.data.name},${item.data.itemNumber},${item.data.currentBidder},${item.data.phoneNumber},${item.data.currentPrice}\n`;
      });
      return content;
    }
  },
  data() {
    return {
      headers: [
        { text: 'Item', value: 'name' },
      ],
      items: [],
      deleteDialog: false,
      pauseDialog: false,
      isLive: true
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>