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
          <v-btn width="100%" color="#FF9052" class="white--text" @click="reset">Recommencer</v-btn>
        </v-col>
        <v-col>
          <v-btn :disabled="!valid" width="100%" color="#FF9052"  class="white--text" @click="validate">Valider</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { db,fb } from "@/db";
export default {
  // Here the data for the component
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
  // Here we load the local state with the deconstructor operator
  computed: {
    ...mapState(['userProfile','currentUser'])
  },
  // We define the method of the component
  methods: {
    validate() {
      // Check the form
      if (this.$refs.form.validate()) {
        // Call db instance and add to the collection a doc with the corresponding fields
        db.collection("match")
          .add({
            userID: this.currentUser.uid,
            userName: this.userProfile.name,
            title: this.name,
            date: new Date(this.date),
            address: this.address,
            result: "Inconnu",
            createdAt: fb.firestore.FieldValue.serverTimestamp()
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
      // Display reset
      this.name = '';
      this.address = '';
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>