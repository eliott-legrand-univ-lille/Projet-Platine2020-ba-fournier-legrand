<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nom de l'association"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail associé à l'association"
      required
    ></v-text-field>

    <v-checkbox v-model="has_fees" label="Adhésion payante ?"></v-checkbox>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Sport"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

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
      :type="show2 ? 'text' : 'password'"
      label="Confirmer le mot de passe"
      hint="At least 8 characters"
      @click:append="show2 = !show2"
    ></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

    <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

    <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
  </v-form>
</template>

<style scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: [
      "Football",
      "Basketball",
      "Volleyball",
      "Hanball",
      "Tennis",
      "Rugby",
      "Badmintonne",
      "Autre"
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
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>