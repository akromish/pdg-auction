<template>
  <div class="adding">
    Adding Item
    <v-app>
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
            v-model="startingPrice"
        ></v-text-field>
        <v-text-field
            type="number"
            label="increment"
            v-model="increment"
        ></v-text-field>
        <v-btn @click="pressed">Add Item</v-btn>
      </v-form>
    </v-app>
  </div>
</template>

<script>
import { db } from '../db';

export default {
  name: "AddItem",
  methods: {
    pressed(){
      db.collection("items").add({
        name: this.name,
        description: this.description,
        startingPrice: this.startingPrice,
        increment: this.increment,
        currentPrice: this.startingPrice,
        bid: false
      })
      this.$router.replace({name: 'Admin'});

    }
  },
  data() {
    return {
      name: '',
      description: '',
      startingPrice: 0,
      increment: 0,
      currentPrice: 0,
    }
  }
}
</script>

<style scoped>
.adding {
  margin: auto;
  margin-top: 30px;
  width: 50%;
}
</style>