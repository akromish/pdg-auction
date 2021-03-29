<template>
  <div class="home">
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="item in items" :key="item.name">
          <v-card flat class="my-3 mx-6 justify-center rounded-lg" color="#fffff2">
            <v-responsive class="pt-4 justify-center">
              <v-img
                  height="175"
                  src="@/assets/temp-img.jpg"
              />
            </v-responsive>
            <v-card-title class="justify-center">
              <div>{{ item.name }}</div>
            </v-card-title>
            <v-card-text class="justify-center">
              <div>{{ item.description }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { db } from '../db';

export default {
  name: 'Home',
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    db.collection("items").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.items.push(doc.data());
        //should I also store doc.id?
      });
    });
    console.log('1 mounted loop');
  }
}
</script>

<style scoped>
.rounded-card{
  border-radius:10px;
}
</style>