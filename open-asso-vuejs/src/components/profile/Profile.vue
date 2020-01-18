<!--toroute-->
<!--tostyle-->
<!--toscript-->
<template>
  <div>
    <TopBar title="Mon Profil"></TopBar>
    <v-content>
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col :cols="2"></v-col>
          <v-col class="text-center" :cols="8">
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>

            <div>Jonathan Lee</div>

            <div>membre depuis le 29/08/2018</div>
            <v-list>
              <v-list-item>
                <v-btn color="#1e35b4" min-width="200"><span class="white--text">Modifier la photo</span></v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn color="#1e35b4" min-width="200" link :to="docPath"><span class="white--text">Mes documents</span></v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn color="#1e35b4" min-width="200"><span class="white--text">Mes statistiques</span></v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn color="#1e35b4" min-width="200" link :to="agendaPath"><span class="white--text">Mon agenda</span></v-btn>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col :cols="2"></v-col>
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