<template>
    <v-container>
        <v-form ref="form" lazy-validation>

            <v-text-field
                v-model="title"
                :counter="100"
                label="Titre de l'article"
                required
            ></v-text-field>

            <v-textarea
                v-model="description"
                :counter="1000"
                label="Entrer votre description"
            ></v-textarea>

            <v-row>
                <v-col>
                    <v-btn min-width="150" color="#FF9052" @click="reset" class="white--text">Recommencer</v-btn>
                </v-col>
                <v-col>
                    <v-btn min-width="150" color="#FF9052" class="white--text">Valider</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>
<script>
export default {
  data: () => ({
      title: "",
      description: "",
      valid: true
  }),
  methods: {
    reset() {
        // eslint-disable-next-line no-console
        this.$refs.form.reset();
    }
  }
}
</script>