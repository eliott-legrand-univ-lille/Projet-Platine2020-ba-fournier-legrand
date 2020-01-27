<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nom" required></v-text-field>

      <v-text-field v-model="firstname" label="Prénom"></v-text-field>

      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Sport"
        required
      ></v-select>

      <v-text-field
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show2 ? 'text' : 'password'"
        label="Mot de passe"
        hint="At least 8 characters"
        class="input-group--focused"
        @click:append="show2 = !show2"
      ></v-text-field>

      <v-text-field
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        v-model="password"
        :type="show2 ? 'text' : 'password'"
        label="Confirmer le mot de passe"
        hint="At least 8 characters"
        @click:append="show2 = !show2"
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="signin">Validate</v-btn>

      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

      <v-snackbar v-model="snackbar">{{ text }}</v-snackbar>
    </v-form>
  </v-container>
</template>

<script>
import { auth } from "../../db";
import { db } from "../../db";
export default {
  name: "FormSubscribeUser",
  data: () => ({
    snackbar: false,
    text: "Veuillez remplir le formulaire",
    show: false,
    show2: false,
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Le nom est obligatoire",
      v => (v && v.length <= 20) || "Name must be less than 10 characters"
    ],
    firstname: "",
    firstnameRules: [
      v => !!v || "Le prénom est obligatoire",
      v => (v && v.length <= 20) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Foot", "Volley", "Basket", "Hockey"],
    password: ""
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
    signin: function() {
      if (this.$refs.form.validate()) {
        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            db.collection("users")
              .doc(cred.user.uid)
              .set({
                name: this.name,
                firstname: this.firstname
              });
          })
          .catch(function(error) {
            // Handle Errors here.
            alert(error);
          });
        this.$router.push({ name: "Accueil" });
      } else {
        this.snackbar = true;
      }
    }
  }
};
</script>