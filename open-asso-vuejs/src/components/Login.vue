<template>
  <div>
    <TopBar title="Open" color="#1e35b4"></TopBar>
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

              <v-text-field v-model="password" :counter="10" label="Password" required></v-text-field>

              <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">Validate</v-btn>

              <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
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