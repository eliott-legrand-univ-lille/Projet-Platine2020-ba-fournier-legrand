<template>
  <div>
    <v-content>
      <OkDialog
        title="Invitation envoyée"
        message="Invitation envoyée way !"
        color="#1e35b4"
        btn1="Envoyer une autre"
        btn2="Retour Accueil"
        :dial="this.dia"
        :link1="again"
        :link2="done"
        @created="closedialogue"
      ></OkDialog>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-select
                v-model="defaultVal"
                :items="items"
                filled
                label="Filled style"
                append-icon="mdi-plus"
              ></v-select>
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

              <v-textarea
                filled
                label="Message d'invitation"
                v-model="invitation"
                :rules="msgRules"
              ></v-textarea>
              
            </v-form>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn width="100%" color="#FF9052" @click="$router.go(-1)" class="white--text">Annuler</v-btn>
          </v-col>
          <v-col>
            <v-btn :disabled="!valid" width="100%" color="#FF9052" class="white--text"  @click.stop="dia=true">Valider</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
//ici l'utilisateur pourra stocker son message d'invitation
import OkDialog from "@/components/dialogue/OkDialog.vue";
import paths from "@/routes/paths.js";
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
    items: ["Membre", "Secrétaire", "Vice-Président", "Président", "Trésorier"],
    dia: false,
    again: paths.newmember.path,
    done: paths.members.path,
    defaultVal: "Membre"
  }),

  components: {
    OkDialog
  },
  methods: {
    closedialogue() {
      this.dia = false;
      this.email = "";
      this.invitation = "";
      this.defaultVal = "Membre";
    }
  }
};
</script>