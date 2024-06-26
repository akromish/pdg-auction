<template>
  <div>
    <div v-if="!isLive" class="text-center" style="margin-top: 14px;"><h1>Thanks for bidding! The silent auction has now ended!</h1></div>
    <v-container class="my-5">
      <v-layout row wrap>
        <div class="d-flex justify-center flex align-center">
          <v-flex xs10 sm6 md4 lg3>
            <v-text-field v-if="isLive" v-model="searchText" background-color="#fffff2" rounded placeholder="search for item"/>
          </v-flex>
        </div>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="item in filteredItems" :key="item.id">
          <v-card text class="my-3 mx-4 justify-center rounded-md" color="#fffff2">
            <v-responsive class="">
              <v-lazy-image
                  height="200"
                  :src="item.data.imageUrl"
                  style="width: 100%;"
              />
            </v-responsive>
            <v-card-title  class="title">
              <div>#{{ item.data.itemNumber }}: {{ item.data.name }}</div>
            </v-card-title>
            <v-card-text class="justify-center description">
              <div class="mb-2 mt-1 subtitle-1">{{ item.data.description }}</div>
              <v-divider class="mt-6"></v-divider>
            </v-card-text>
            <v-card-actions>
              <v-col>
                <div>{{ item.data.currentBidder }}</div>
              </v-col>
              <v-col>
                <div class="font-weight-bold">${{ item.data.currentPrice }}</div>
              </v-col>
              <v-col class="text-right">
                <PopUp
                    v-bind:item-name="item.data.name"
                    v-bind:current-bidder="item.data.currentBidder"
                    v-bind:current-price="item.data.currentPrice"
                    v-bind:item-id="item.id"
                    v-on:changeStuff="updateStuff($event)"
                />
              </v-col>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="text-center ma-4">
      <router-link to="/login"><h5>Admin</h5></router-link>
    </div>
  </div>
</template>

<script>
import { db } from '@/db';
import PopUp from "@/components/PopUp";
import VLazyImage from "v-lazy-image/v2";

export default {
  name: 'Home',
  title: 'PDG Silent Auction',
  components: {
    PopUp,
    VLazyImage
  },
  data() {
    return {
      items: [],
      searchText: '',
      isLive: true
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    updateStuff(updatedStuff) {
      this.$router.go(0);
    }
  },
  mounted() {
    const RUNNING_FLAG_ID = "Yj95OpMYzMfHJcVm3E0X"
      db.collection("auction_running").doc(RUNNING_FLAG_ID).get().then((row)=>{
        this.isLive = row.data()["is_live"]
      }).then(() => {
        if (this.isLive) {
          db.collection("items").orderBy("itemNumber").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.items.push({
                data: doc.data(),
                id: doc.id
              });
            });
          });
        }
      })
  },
  computed: {
    filteredItems() {
      if (this.searchText !== '') {
        const nameFilter = this.items.filter((item) => {
            return item.data.name.toLowerCase().match(this.searchText.toLowerCase());
        });
        const idFilter = this.items.filter((item) => {
          return item.data.itemNumber.toString().match(this.searchText);
        });
        return [ ...new Set([ ...(nameFilter || []), ...(idFilter || []) ])];
      }
      return this.items;
    }
  }
}
</script>

<style scoped>
.title {
  word-break: keep-all; 
  white-space: pre-wrap;
  max-width: 100%;
}

.description {
  word-break: keep-all; 
  white-space: pre-wrap;
  max-width: 100%;
}
</style>
