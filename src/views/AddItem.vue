<template>
  <div>
    <div class="text-center mx-2 my-4">
      <h1>Adding Item</h1>
    </div>
    <div class="px-2 my-3 mx-6">
      <v-form ref="form">
        <v-text-field
          label="name"
          v-model="name"
          :rules="inputRules"
          required
        ></v-text-field>
        <v-text-field
            type="number"
            label="item number"
            v-model.number="itemNumber"
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
        <label>
          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" accept=".jpg,.jpeg,.png"/>
          <br/>
          <span>Only JPEG and PNG files are allowed</span>
        </label>
        <div class="text-center mt-12 mb-4">
          <v-btn @click="pressed">Add Item</v-btn>
        </div>
      </v-form>
    </div>
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
        const img_id = URL.createObjectURL(new Blob([])).slice(-36);
        const imgPath = `images/${img_id}-${this.file.name}`;
        const storageRef = firebase.storage().ref();
        storageRef.child(imgPath).put(this.file).then(() => {
          const starsRef = storageRef.child(imgPath);
          starsRef.getDownloadURL()
              .then((url) => {
                this.imageUrl = url;
                db.collection("items").add({
                  name: this.name,
                  itemNumber: this.itemNumber,
                  description: this.description,
                  currentPrice: this.currentPrice,
                  currentBidder: this.currentBidder,
                  phoneNumber: this.phoneNumber,
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
      itemNumber: 0,
      description: '',
      currentPrice: 0,
      currentBidder: 'No Bids Yet!',
      phoneNumber: '',
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