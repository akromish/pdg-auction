<template>
  <v-app
      style="background: #e0d9ce"
  >
    <title>PD Silent Auction</title>
    <v-app-bar
      app
      color="#143344"
    >
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
              alt="PDG Logo"
              class="mt-3"
              contain
              src="@/assets/pdg_new_m.jpg"
              transition="scale-transition"
              width="70"
          />
        </router-link>
      </div>
      <v-toolbar-title class="white--text font-weight-medium pl-4">Silent Auction</v-toolbar-title>
    </v-app-bar>

    <v-main
        color="#e0d9ce"
    >
      <router-view />
    </v-main>
    <h6 class="text-center font-weight-light ma-4">© 2021-22 Project Downtown Gainesville</h6>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
