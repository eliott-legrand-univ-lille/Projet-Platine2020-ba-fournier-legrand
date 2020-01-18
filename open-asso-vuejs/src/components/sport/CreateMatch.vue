<template>
  <div>
    <TopBar title="Créer un match"></TopBar>
    <v-content>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="30"
            label="Nom du match"
            required
          ></v-text-field>

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

          <v-text-field v-model="place" label="Lieu de rencontre" required></v-text-field>

        </v-form>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import TopBar from "@/components/commons/TopBar.vue";
export default {
  components: {
    TopBar
  },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Le nom est obligatoire",
      v => (v && v.length <= 30) || "Le nom doit faire moins de 30 caractères"
    ],
    description: "",
    descriptionRules: [
      v => !!v || "La description est obligatoire",
      v =>
        (v && v.length <= 148) ||
        "La description doit faire moins de 148 caractères"
    ],
    address: "",
    place: "",
    city: "",
    cityRules: [v => !!v || "Ville obligatoire"],
    postal: "",
    postalRules: [
      v => !!v || "Code obligatoire",
      v => (v && v.length == 5) || "Non valide"
    ],

    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>