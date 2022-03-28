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
                v-model="updatedName"
                :rules="inputRules"
                required
            ></v-text-field>
            <v-text-field
                label="number"
                type="number"
                v-model="updatedNumber"
                :rules="inputRules"
                required
            ></v-text-field>
            <v-textarea
                label="description"
                v-model="updatedDescription"
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
      if(this.$refs.form.validate()) {
          db.collection("items").doc(this.itemId).update({
            name: this.updatedName,
            itemNumber: parseInt(this.updatedNumber),
            description: this.updatedDescription,
          })
        .then( () => {
          this.$emit('changeStuff', 'hmmm');
        })
      }
    },
  },
  props: {
    itemName: String,
    itemNumber: Number,
    itemId: String,
    currentPrice: Number,
    currentBidder: String,
    description: String,
    phoneNumber: String,
  },
  data() {
    return {
      updatedName: this.itemName,
      updatedNumber: this.itemNumber,
      updatedDescription: this.description,
      docIds: [],
      inputRules: [
        // v => v.length >=3 || 'please enter your full name',
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