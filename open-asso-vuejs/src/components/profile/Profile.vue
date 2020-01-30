<template>
<v-container ma-0 pa-0 fluid>
  <v-card tile
    max-width="450"
    class="mx-auto"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/lists/ali.png"
      lazy-src="https://cdn.vuetifyjs.com/images/lists/ali.png"
      min-height="250px"
      max-height="400px"
      dark
    >
      <v-row class="fill-height">
        <v-card-title>
          <v-btn dark icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn dark icon class="mr-4" link :to="updateProfilPath">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn dark icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1 pl-12 pt-12">
           Ali conner
          </div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
     
      <v-list-item >
        <v-list-item-icon>
          <v-icon color="indigo">mdi-phone</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(650) 555-1234</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-email</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

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