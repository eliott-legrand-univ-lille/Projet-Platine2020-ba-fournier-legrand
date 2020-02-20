<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="20" :rules="nameRules" label="Nom" required></v-text-field>

      <v-text-field v-model="firstname" label="Prénom" required></v-text-field>

      <v-row>
        <v-col>
          <v-btn width="100%" color="orange" class="white--text" @click="reset">Recommencer</v-btn>
        </v-col>
        <v-col>
          <v-btn
            width="100%"
            :disabled="!valid"
            color="orange"
            class="white--text"
            @click="updateProfile"
          >Valider</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Profile",
  data: () => ({
    valid: true,
    name: "",
    firstname: "",
    nameRules: [
      v => !!v || "Le nom est obligatoire",
      v => (v && v.length <= 20) || "Le nom doit faire moins de 20 caractères"
    ]
  }),
  computed: {
    ...mapState(["userProfile"])
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    updateProfile() {
      this.$store.dispatch("updateProfile", {
        name: this.name !== "" ? this.name : this.userProfile.name,
        firstname:
          this.firstname !== "" ? this.firstname : this.userProfile.firstname
      });
      this.name = "";
      this.firstname = "";
    }
  }
};
</script>