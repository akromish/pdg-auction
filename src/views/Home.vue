<template>
  <div>
    <v-card elevation="0" max-width="100" text class="my-3 mx-4 justify-center rounded-md" color="#fffff2">
      <input v-model="searchText" placeholder="search for item">
    </v-card>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="item in filteredItems" :key="item.name">
          <v-card text class="my-3 mx-4 justify-center rounded-md" color="#fffff2">
            <v-responsive class="">
              <v-img
                  height="200"
                  :src="item.imageUrl"
              />
            </v-responsive>
            <v-card-title>
              <div>{{ item.name }}</div>
            </v-card-title>
            <v-card-text class="justify-center">
              <div class="mb-2 mt-1 subtitle-1">{{ item.description }}</div>
              <v-divider class="mt-6"></v-divider>
            </v-card-text>
            <v-card-actions>
              <v-col>
                <div>{{ item.currentBidder }}</div>
              </v-col>
              <v-col>
                <div class="font-weight-bold">${{ item.currentPrice }}</div>
              </v-col>
              <v-col class="text-right">
                <PopUp
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
    <div class="text-center ma-4">
      <router-link to="/login"><h5>Admin</h5></router-link>
    </div>
  </div>
</template>

<script>
import { db } from '@/db';
import PopUp from "@/components/PopUp";

export default {
  name: 'Home',
  title: 'PDG Silent Auction',
  components: {
    PopUp,
  },
  data() {
    return {
      items: [],
      searchText: '',
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    updateStuff(updatedStuff) {
      this.$router.go(0);
    }
  },
  mounted() {
    db.collection("items").orderBy("name").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.items.push(doc.data());
      });
    });
  },
  computed: {
    filteredItems() {
      if (this.searchText !== '') {
        return this.items.filter((item) => {
          return item.name.match(this.searchText);
        });
      }
      return this.items;
    }
  }
}
</script>

<style scoped>
</style>