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

      <v-textarea
        v-model="description"
        no-resize
        :counter="148"
        :rules="descriptionRules"
        label="Entrer votre description"
      ></v-textarea>

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

<<<<<<< HEAD
        <v-row>
          <v-col>
            <v-text-field v-model="city" :rules="cityRules" label="Ville" required></v-text-field>
            <v-btn min-width="150" color="#1e35b4" class="orange--text" >Tous membres</v-btn>
          </v-col>
          <v-col>
            <v-text-field v-model="postal" :rules="postalRules" label="Code postal" required></v-text-field>
            <v-btn min-width="150" color="#1e35b4" class="orange--text">Sélectionner des membres</v-btn>
          </v-col>
        </v-row>
        Cotisation par membre (en euros)
        <v-slider v-model="cotisation"  min="0" max="70" color="#FF9052" thumb-label></v-slider>
        <v-row>
          <v-col>
            <v-btn min-width="150" color="#FF9052" @click="reset" class="white--text">Recommencer</v-btn>
          </v-col>
          <v-col>
            <v-btn min-width="150" color="#FF9052" class="white--text">Valider</v-btn>
          </v-col>
        </v-row>
      </v-form>

      <v-dialog
       v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-row>
          <v-checkbox v-model="selected"></v-checkbox>    
        </v-row>
      </v-dialog>
    </v-container>
  </v-content>
=======
      <v-row>
        <v-col>
          <v-text-field v-model="city" :rules="cityRules" label="Ville" required></v-text-field>
          <v-btn min-width="150" color="error" @click="reset">Recommencer</v-btn>
        </v-col>
        <v-col>
          <v-text-field v-model="postal" :rules="postalRules" label="Code postal" required></v-text-field>
          <v-btn min-width="150" color="success" @click="validate">Valider</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
>>>>>>> 13b40b44731bf1f351576545fed09446b7e9badd
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
    description: "",
    descriptionRules: [
      v => !!v || "La description est obligatoire",
      v =>
        (v && v.length <= 148) ||
        "La description doit faire moins de 148 caractères"
    ],
    address: "",
    city: "",
    cityRules: [v => !!v || "Ville obligatoire"],
    postal: "",
    postalRules: [
      v => !!v || "Code obligatoire",
      v => (v && v.length == 5) || "Non valide"
    ],

    date: new Date().toISOString().substr(0, 10),
    modal: false,

  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        db.collection("events").add({
          name: this.name,
          description: this.description,
          date: this.date,
          address: this.address,
          city: this.city,
          postal: this.postal,
          createdAt: new Date(),
        });
      }
    },
    reset() {
      // eslint-disable-next-line no-console
      this.$refs.form.reset();
    }
  }
};
</script>