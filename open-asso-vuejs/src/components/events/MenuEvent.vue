<!-- tostyle
    toroute
-->
<template>
<div>
    <TopBar title="Évènements" color="#1e35b4"></TopBar>
    <v-content>
        <v-container fluid>
             <v-row v-for="n in 3" :key="n">
                <v-col class="d-flex flex-column align-center">
                  <v-card width="150px" height="150px" class="d-flex flex-column justify-center"
                  color="#1e35b4" link :to="Menu[n-1].link"
                  >
                    <v-card-title v-text="Menu[n - 1].name" style="color:#FF9052;word-break:normal; text-align:center"></v-card-title>
                  </v-card>
                 </v-col>
             </v-row>
        </v-container>
    </v-content>
</div>
</template>

<script>
import TopBar from "@/components/commons/TopBar.vue";
import paths from "@/routes/paths.js";
export default {
  data: () => ({
    Menu: [ 
      {name:"Accéder à mon agenda", link: paths.agenda.path}, 
      {name:"Évènements de l'association", link: paths.events.path}, 
      {name: "Créer un évènement", link: paths.createevent.path}
      ]
  }),
  components: {
    TopBar
  }
};
</script>