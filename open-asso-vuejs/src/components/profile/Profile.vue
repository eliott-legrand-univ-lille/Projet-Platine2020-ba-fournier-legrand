<!--toroute-->
<!--tostyle-->
<!--toscript-->
<template>
<div>
  <TopBar title="Mon Profil"></TopBar>
  <v-content>
    <v-container fluid>
      <v-card
        class="mx-auto"
        style="max-width: 500px;"
      >
        <v-img :aspect-ratio="16/9" src="https://mon-artisan.pro/img/annuaire/profils/profil_12.png">
        </v-img>
        <v-btn>Modifier la photo de profil</v-btn>
            <v-list class="d-flex justify-content flex-column">
              <v-list-item><div>Jonathan Lee</div></v-list-item>
              <v-list-item> <div>membre depuis le 29/08/2018</div></v-list-item>
              <v-list-item> <v-btn link :to="docPath"> Mes documents </v-btn></v-list-item>
              <v-list-item> <v-btn> Mes statistiques </v-btn></v-list-item>
              <v-list-item><v-btn link :to="agendaPath"> Mon agenda </v-btn></v-list-item>
              
            </v-list>
      </v-card>
    </v-container>
  </v-content>
</div>
</template>

<script>
import paths from "@/routes/paths.js";
import TopBar from "@/components/commons/TopBar.vue";
export default {
  name: 'Profile',
  components: {
    TopBar
  },
  data() {
    return {
      docPath: paths.myDocuments.path,
      agendaPath: paths.agenda.path
    };
  }
}
</script>