<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="#7b1443"
          v-bind="attrs"
          v-on="on"
          class="white--text"
      >Edit</v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
            color="#143344"
            dark
        >{{ itemName }}</v-toolbar>
        <v-card-actions>
          <v-form ref="form">
            <v-text-field
                label="name"
                v-model="name"
                :rules="inputRules"
                required
            ></v-text-field>
            <v-textarea
                label="description"
                v-model="desc"
                :rules="inputRules"
                required
            ></v-textarea>
          </v-form>
        </v-card-actions>
        <v-card-actions>
          <v-col>
            <v-btn
                @click="dialog.value = false"
            >Cancel</v-btn>
          </v-col>
          <v-col class="text-right">
            <v-btn
                @click="modify(); dialog.value = false"
                color="#7b1443"
            ><div class="white--text">Confirm Edit</div>
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { db } from '@/db';

export default {
  name: "PopUp",
  methods: {
    modify () {
      const tempName = this.name;
      if(this.$refs.form.validate()) {
        db.collection("bids")
        .where("itemName", "==", this.name)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.docId = doc.id
          });
        })
        .then( () => {
          this.docIds.forEach((docId) => (
              db.collection("bids").doc(docId).update({
                itemName: this.name
              }))
          )
        })
        .then( () => {
          db.collection("items").doc(tempName).update({
            description: this.desc,
            name: this.name,
          })
        })
        .then( () => {
          this.$emit('changeStuff', 'hmmm');
        })
      }
    },
  },
  props: {
    itemName: String,
    currentPrice: Number,
    currentBidder: String,
    description: String,
    phoneNumber: String,
  },
  data() {
    return {
      name: this.itemName,
      desc: this.description,
      docIds: [],
      inputRules: [
        v => v.length >=3 || 'please enter your full name',
      ],
      valid: true,
    }
  },
}
</script>

<style scoped>
.v-toolbar {
  font-size: 1.5rem;
}
</style>