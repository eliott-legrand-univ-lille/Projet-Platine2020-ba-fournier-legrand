<template>
  <v-container fluid  >
    <v-row  justify="center">
      <v-col cols="12">
        <v-card width="100%" class="elevation-12">
          <v-toolbar color="#1e35b4" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" validation>
              <v-text-field
                v-model="email"
                prepend-icon="mdi-account"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :type="showPass ? 'text' : 'password'"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass = !showPass"
                prepend-icon="mdi-key"
                label="Password"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn  width="30%" color="#1e35b4" class="white--text" link :to="link">S'inscrire</v-btn>
            <v-spacer />
            <v-btn :disabled="!valid" width="30%" color="#1e35b4" class="white--text" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
     <v-snackbar
      v-model="snackbar"
      color="error"
      multi-line
    >
      Vos identifiants sont incorrects
      <v-btn
        dark
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import paths from "@/routes/paths.js";
import { auth } from "../db";
export default {
  data: () => ({
    link: paths.userSubscribe.path,
    valid: true,
    snackbar: false,
    email: "",
    password: "",
    showPass: false,
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
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$store.commit("setCurrentUser", user.user);
          this.$store.dispatch("fetchUserProfile");
          this.$router.push("/");
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
          this.snackbar = true;
          
        });
    }
  }
};
</script>