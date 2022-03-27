<template>
  <div class="px-2 my-3 mx-6">
    <div class="text-center mx-2 my-4">
      <h1>Login</h1>
    </div>
    <v-layout row wrap>
      <div class="d-flex justify-center flex align-center">
        <v-flex xs12 sm6 md4 lg3>
          <v-card color="#fffff2">
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
          </v-card>
        </v-flex>
      </div>
    </v-layout>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: "Login",
  title: "Login",
  methods: {
    pressed() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(`is anonymous: ${user.isAnonymous}`);
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