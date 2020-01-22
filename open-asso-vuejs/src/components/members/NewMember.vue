<template>
  <div>
    <v-content>
      <OkDialog title="Invitation envoyée" message="Invitation envoyée way !"
       color="1e35b4" btn1="Envoyer une autre" btn2="Retour Accueil" :dial.sync="this.dia"></OkDialog>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-select :items="items" filled label="Filled style" append-icon="mdi-plus" value="Membre"></v-select>
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

              <v-textarea
                filled
                label="Message d'invitation"
                v-model="invitation"
                :rules="msgRules"
              ></v-textarea>

              <v-btn :disabled="!valid" color="#1e35b4" 
              class="mr-4 orange--text" @click.stop="dia=true">Envoyer</v-btn>
              <v-btn @click="$router.go(-1)">Annuler</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import OkDialog from "@/components/dialogue/OkDialog.vue";
export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "une adresse e-mail est requise",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    invitation: "",
    msgRules: [msg => !!msg || "Vous devez saisir un message d'invitation"],
    items:["Membre", "Secrétaire", "Vice-Président", "Président", "Trésorier"],
    dia : false,
  }),
  components: {
    OkDialog
  },
};
</script>