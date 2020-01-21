<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            prepend-icon="mdi-account"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            prepend-icon="mdi-key"
            :counter="10"
            label="Password"
            required
          ></v-text-field>
          <v-row justify="center">
            <v-btn :disabled="!valid" color="success" @click="login">Login</v-btn>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    valid: true,
    email: "",
    password: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    checkbox: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function() {
            alert("logged");
          },
          function(err) {
            alert(err);
          }
        );
    }
  }
};
</script>