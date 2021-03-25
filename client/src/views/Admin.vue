<template>
  <div>
    <div class="out">
      <v-btn @click="pressed">Sign Out</v-btn>
    </div>
    <div class="add">
      <v-btn @click="add">Add Auction Item</v-btn>
    </div>
    <v-data-table/>
  </div>

</template>

<script>
  export default {
  name: "Admin",
  methods: {
    pressed() {
      console.log("sign out");
    },
    add() {
      this.$router.replace({name: 'Add Item'});
    }
  }


}
</script>

<style scoped>
.out {
  margin: auto;
  margin-top: 20px;
  width: 20%;
}
.add {
  margin: auto;
  margin-top: 50px;
  width: 30%;
}
</style>
