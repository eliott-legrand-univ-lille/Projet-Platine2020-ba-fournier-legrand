<template>
<v-container ma-0 pa-0 fluid>
  <v-card tile
    max-width="450"
    class="mx-auto"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/lists/ali.png"
      min-height="250px"
      max-height="350px"
      dark
    >
      <v-row class="fill-height">
        <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1 pl-12 pt-12">
            Thomas
          </div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>

        <v-list-item link :to="updateProfilPath">
          <v-list-item-icon>
            <v-icon color="indigo">mdi-pencil</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Éditer mon profil</v-list-item-title>
            <v-list-item-subtitle>Modifiez votre nom et prénom</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      <v-list-item link :to="agendaPath">
        <v-list-item-icon>
          <v-icon color="indigo">mdi-calendar</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Mon agenda</v-list-item-title>
          <v-list-item-subtitle>Voir vos évènements</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link :to="docPath">
        <v-list-item-icon>
          <v-icon color="indigo">mdi-file-document-box-multiple</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Mes documents</v-list-item-title>
          <v-list-item-subtitle>Gérer vos documents</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-phone</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>06 42 50 12 34</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-phone</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>03 28 28 28 28</v-list-item-title>
          <v-list-item-subtitle>Fixe</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-card>
</v-container>
</template>
<script>
import { mapState } from "vuex";
import paths from "@/routes/paths.js";
export default {
  name: "Profile",
  data:() => ({
      updateProfilPath:  paths.updateProfil.path,
      docPath: paths.myDocuments.path,
      agendaPath: paths.agenda.path
  }),
   computed: {
    ...mapState(['currentUser','userProfile'])
  },
};
</script>