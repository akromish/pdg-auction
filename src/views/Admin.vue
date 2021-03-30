<template>
  <div>
    <div class="text-center my-4">
      <v-btn @click="add">Add Item</v-btn>
    </div>
    <v-data-table class="mx-4"/>
<!--    <div class="text-center mx-4 mt-14">-->
<!--      <v-btn @click="pressed">Sign Out</v-btn>-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
  name: "Admin",
  methods: {
    pressed() {
      // console.log("sign out");
    },
    add() {
      this.$router.replace({name: 'Add Item'});
    }
  }
}
</script>
