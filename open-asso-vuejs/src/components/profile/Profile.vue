<!--toroute-->
<!--tostyle-->
<!--toscript-->
<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col class="text-center" style="width: 100%" cols="12" sm="4">
        <v-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>

        <div class="my-2">Jonathan Lee</div>

        <div class="my-2">membre depuis le 29/08/2018</div>

        <div class="my-2">
          <v-btn color="#1e35b4" min-width="200" ink :to="updateProfilPath">
            <span class="white--text">Modifier le profil</span>
          </v-btn>
        </div>
        <div class="my-2">
          <v-btn color="#1e35b4" min-width="200" link :to="docPath">
            <span class="white--text">Mes documents</span>
          </v-btn>
        </div>
        <div class="my-2">
          <v-btn color="#1e35b4" min-width="200">
            <span class="white--text">Mes statistiques</span>
          </v-btn>
        </div>
        <div class="my-2">
          <v-btn color="#1e35b4" min-width="200" link :to="agendaPath">
            <span class="white--text">Mon agenda</span>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import paths from "@/routes/paths.js";
export default {
  name: "Profile",
  
  data() {
    return {
      updateProfilPath:  paths.updateProfil.path,
      docPath: paths.myDocuments.path,
      agendaPath: paths.agenda.path
    };
  }
};
</script>