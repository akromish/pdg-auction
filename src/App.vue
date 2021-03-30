<template>
  <v-app
      style="background: #143344"
  >
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
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
