<!--toroute-->
<!--tostyle-->
<!--toscript-->
<template>
  <div>
    <TopBar title="Mon Profil" color="#1e35b4" back></TopBar>
    <v-content>
      <v-container fluid>
        
        <v-row align="center" justify="center">
          <v-col class="text-center" style="width: 100%" cols="12" sm="4">
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>

            <div class="my-2">Jonathan Lee</div>

            <div class="my-2">membre depuis le 29/08/2018</div>
           
            <div class="my-2"><v-btn color="#1e35b4" min-width="200"><span class="white--text">Modifier la photo</span></v-btn></div>
            <div class="my-2"><v-btn color="#1e35b4" min-width="200" link :to="docPath"><span class="white--text">Mes documents</span></v-btn></div>
            <div class="my-2"><v-btn color="#1e35b4" min-width="200"><span class="white--text">Mes statistiques</span></v-btn></div>
            <div class="my-2"><v-btn color="#1e35b4" min-width="200" link :to="agendaPath"><span class="white--text">Mon agenda</span></v-btn></div>
            
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import paths from "@/routes/paths.js";
import TopBar from "@/components/commons/TopBar.vue";
export default {
  name: "Profile",
  components: {
    TopBar
  },
  data() {
    return {
      docPath: paths.myDocuments.path,
      agendaPath: paths.agenda.path
    };
  }
};
</script>