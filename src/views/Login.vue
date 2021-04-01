<template>
  <div class="log">
    <div class="text-center mx-2 my-4">
      <h1>Login</h1>
    </div>
    <v-app class="px-2 my-3 mx-6">
      <v-form>
        <v-text-field
          label="email"
          v-model="email"
        >
        </v-text-field>
        <v-text-field
          :type="'password'"
          label="password"
          v-model="password"
        ></v-text-field>
        <v-btn
          @click="pressed"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-app>
  </div>
</template>

<script>
import { db } from '@/db';

export default {
  name: "Login",
  title: "Login",
  methods: {
    pressed() {
      const auth = db.auth();
      auth.signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            this.$router.replace({name: 'Admin'});
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
          });
    },

  },
  data() {
    return {
      password: '',
      email: '',

    }
  }

}
</script>

<style scoped>

</style>