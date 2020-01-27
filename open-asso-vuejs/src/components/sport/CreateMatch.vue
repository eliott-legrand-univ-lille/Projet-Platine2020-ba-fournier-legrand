<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :rules="nameRules" :counter="30" label="Nom du match" required></v-text-field>

      <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent>
        <template v-slot:activator="{ on }">
          <v-text-field v-model="date" label="Date de l'événement" readonly v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="date" full-width scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>

      <v-text-field v-model="address" label="Lieu de rencontre" required></v-text-field>

      <v-row>
        <v-col>
          <v-btn min-width="150" color="error" @click="reset">Recommencer</v-btn>
        </v-col>
        <v-col>
          <v-btn min-width="150" color="success" @click="validate">Valider</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { db } from "../../db";
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Le nom est obligatoire",
      v => (v && v.length <= 30) || "Le nom doit faire moins de 30 caractères"
    ],
    address: "",
    date: new Date().toISOString().substr(0, 10),
    modal: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        db.collection("match")
          .add({
            title: this.name,
            date: this.date,
            address: this.place,
            result: "",
            createdAt: new Date()
          })
          .then(function(docRef) {
            // eslint-disable-next-line no-console
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
            // eslint-disable-next-line no-console
            console.error("Error adding document: ", error);
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>