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
            label="starting price"
            v-model="startingPrice"
        ></v-text-field>
        <v-btn @click="pressed">Add Item</v-btn>
      </v-form>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "AddItem",
  methods: {
    pressed(){
      alert("Item not really added lol");
      this.$router.replace({name: 'Admin'});
    }
  },
  data() {
    return {
      name: '',
      description: '',
      startingPrice: '',
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