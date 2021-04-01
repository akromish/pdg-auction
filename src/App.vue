<template>
  <v-app
      style="background: #143344"
  >
    <title>PD Silent Auction</title>
    <v-app-bar
      app
      color="#e0d9ce"
    >
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
              alt="PDG Logo"
              class="shrink mr-2"
              contain
              src="@/assets/pdg_logo.jpg"
              transition="scale-transition"
              width="80"
          />
        </router-link>
      </div>

    </v-app-bar>

    <v-main
        color="#e0d9ce"
    >
      <router-view />
      <div class="nav">
        <router-link to="/login">Login</router-link>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

};
</script>

<style scoped>

.nav {
  margin: auto;
  width: 50%;
}
</style>