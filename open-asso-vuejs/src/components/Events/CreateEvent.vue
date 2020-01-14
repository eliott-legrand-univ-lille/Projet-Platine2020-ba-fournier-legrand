<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="30"
        label="Nom de l'événement"
        required
      ></v-text-field>

      <v-textarea no-resize :counter="148" :rules="descriptionRules" label="Entrer votre description"></v-textarea>

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

      <v-text-field v-model="address" label="Rue" required></v-text-field>

      <v-row>
        <v-col>
          <v-text-field v-model="city" :rules="cityRules" label="Ville" required></v-text-field>
          <v-btn color="error" @click="reset">Reset Form</v-btn>
        </v-col>
        <v-col>
          <v-text-field v-model="postal" :rules="postalRules" label="Code postal" required></v-text-field>
          <v-btn color="success">Validate</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
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
      v => (v && v.length <= 148) || "La description doit faire moins de 148 caractères"
    ],
    address: "",
    city: "",
    cityRules: [
      v => !!v || "Ville obligatoire",
    ],
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
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>