<template>
  <div class="log">
    Login
    <v-app>
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
import firebase from 'firebase';
import '@firebase/auth';

// import { db } from '../db';

export default {
  name: "Login",
  methods: {
    pressed(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
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
.log {
  margin: auto;
  margin-top: 20px;
  width: 40%;
}


</style>