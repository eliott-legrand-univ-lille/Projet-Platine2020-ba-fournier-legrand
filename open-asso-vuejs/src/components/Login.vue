<template>
  <div>
    <TopBar title="Open"></TopBar>
    <v-content>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field v-model="password" :counter="10" label="Password" required></v-text-field>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">Validate</v-btn>

        <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

        <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
      </v-form>
    </v-content>
  </div>
</template>
<script>
import TopBar from "@/components/commons/TopBar.vue";
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
    resetValidation() {
      this.$refs.form.resetValidation();
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
  },
  components: {
    TopBar
  }
};
</script>