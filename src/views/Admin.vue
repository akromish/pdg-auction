<template>
  <div>
    <div class="text-center my-4">
      <v-btn @click="add">Add Item</v-btn>
    </div>
    <v-data-table
        class="mx-4"
        :headers="headers"
        :items="items"
        :items-per-page="10"
    ></v-data-table>
<!--    <table>-->
<!--      <tr>-->
<!--        <td>{{ items.name }}</td>-->
<!--        <td>{{ items.description }}</td>-->
<!--      </tr>-->
<!--    </table>-->
  </div>
</template>

<script>
  import {db} from "@/db";

  export default {
  name: "Admin",
  title: "Shumail's Page",
  methods: {
    add() {
      this.$router.replace({name: 'Add Item'});
    }
  },
  data() {
    return {
      headers: [
        { text: 'Item', value: 'name' },
        { text: 'Description', value: 'text' },
        { text: 'Current Price', value: 'dollars' },
        { text: 'Current Bidder', value: 'person' }
      ],
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
  }
}
</script>
