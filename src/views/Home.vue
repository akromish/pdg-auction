<template>
  <div class="home">
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="item in items" :key="item.name">
          <v-card text class="my-3 mx-4 justify-center rounded-md" color="#fffff2">
            <v-responsive class="">
              <v-img
                  height="200"
                  src="@/assets/temp-img.jpg"
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
                    document-id="123"
                    v-bind:item-name="item.name"
                    v-bind:current-bidder="item.currentBidder"
                    v-bind:current-price="item.currentPrice"
                />
              </v-col>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="text-center ma-4">
      <router-link to="/login"><h3>Admin</h3></router-link>
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
    }
  },
  mounted() {
    db.collection("items").orderBy("name").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.items.push(doc.data());
      });
    });
  }
}
</script>

<style scoped>
</style>