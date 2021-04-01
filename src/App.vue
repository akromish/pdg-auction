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
              class="mt-3"
              contain
              src="@/assets/pdg_new_m.jpg"
              transition="scale-transition"
              width="70"
          />
        </router-link>
      </div>
    </v-app-bar>
    <v-main
        color="#e0d9ce"
    >
      <router-view />
    </v-main>
    <h6 class="text-center">© 2021 Project Downtown Gainesville</h6>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
