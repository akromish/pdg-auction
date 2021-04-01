<template>
  <div>
    <div class="text-center mx-2 my-4">
      <h1>Adding Item</h1>
    </div>
    <v-app class="px-2 my-3 mx-6">
      <v-form>
        <v-text-field
          label="name"
          v-model="name"
        ></v-text-field>
        <v-textarea
            label="description"
            v-model="description"
        ></v-textarea>
        <v-text-field
            type="number"
            label="starting price"
            v-model="currentPrice"
        ></v-text-field>
        <v-btn @click="pressed">Add Item</v-btn>
      </v-form>
    </v-app>
  </div>
</template>

<script>
import { db } from '@/db';

export default {
  name: "AddItem",
  title: "Add Item",
  methods: {
    pressed(){
      db.collection("items").add({
        name: this.name,
        description: this.description,
        currentPrice: this.currentPrice,
        currentBidder: "No Bids Yet!",
        bid: false
      })
      this.$router.replace({name: 'Admin'});

    }
  },
  data() {
    return {
      name: '',
      description: '',
      currentPrice: 0,
    }
  }
}
</script>

<style scoped>

</style>