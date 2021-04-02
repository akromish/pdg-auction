<template>
  <div>
    <div class="text-center mx-2 my-4">
      <h1>Adding Item</h1>
    </div>
    <v-app class="px-2 my-3 mx-6">
      <v-form ref="form">
        <v-text-field
          label="name"
          v-model="name"
          :rules="inputRules"
          required
        ></v-text-field>
        <v-textarea
            label="description"
            v-model="description"
            :rules="inputRules"
            required
        ></v-textarea>
        <v-text-field
            type="number"
            label="starting price"
            v-model.number="currentPrice"
            required
        ></v-text-field>
        <v-card-actions>
          <label>File
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
          </label>
        </v-card-actions>
        <v-btn @click="pressed">Add Item</v-btn>
      </v-form>
    </v-app>
  </div>
</template>

<script>
import { db } from '@/db';
import firebase from "firebase/app";
import 'firebase/storage'

export default {
  name: "AddItem",
  title: "Add Item",
  methods: {
    pressed(){
      if(this.$refs.form.validate()) {
        const imgPath = `images/${this.file.name}`;
        const storageRef = firebase.storage().ref();
        storageRef.child(imgPath).put(this.file).then(() => {
          const starsRef = storageRef.child(imgPath);
          starsRef.getDownloadURL()
              .then((url) => {
                this.imageUrl = url;
                db.collection("items").doc(this.name).set({
                  name: this.name,
                  description: this.description,
                  currentPrice: this.currentPrice,
                  currentBidder: "No Bids Yet!",
                  imageUrl: this.imageUrl,
                })
              })
        })
        this.$router.replace({name: 'Admin'});
      }
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
  },
  data() {
    return {
      name: '',
      description: '',
      currentPrice: 0,
      file: '',
      imageUrl: '@/assets/pdg_logo.jpg',
      inputRules: [
          v => v.length >=2 || 'please enter a name for the item'
      ]
    }
  }
}
</script>

<style scoped>

</style>