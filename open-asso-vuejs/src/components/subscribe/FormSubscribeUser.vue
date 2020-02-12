<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="20" :rules="nameRules" label="Nom" required></v-text-field>

      <v-text-field v-model="firstname" label="Prénom"></v-text-field>

      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

       <v-text-field v-model="phone" :rules="phoneRules" label="Phone" required></v-text-field>

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
    phone: "",
    phoneRules: [
      v => !!v || "Phone is required",
      v => /(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}/.test(v) || "Phone must be valid"
    ],
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
    signin() {
      if (this.$refs.form.validate()) {
        // eslint-disable-next-line no-console
        console.log(this.email,this.password);
        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(cred => {
             // eslint-disable-next-line no-console
            console.log(cred.user);
            this.$store.commit("setCurrentUser", cred.user);

            // create user obj
            db.collection("users")
              .doc(cred.user.uid)
              .set({
                name: this.name,
                title: this.firstname,
                phone: this.phone
              })
              .then(() => {
                this.$store.dispatch("fetchUserProfile");
                this.$router.push("/");
              })
              .catch(err => {
                // eslint-disable-next-line no-console
                console.log(err);
              })
          })
          .catch(err => {
            // eslint-disable-next-line no-console
            console.log(err);
          });
      }
    }
  }
};
</script>
