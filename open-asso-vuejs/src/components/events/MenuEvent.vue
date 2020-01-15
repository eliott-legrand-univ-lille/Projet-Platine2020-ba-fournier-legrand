<!-- tostyle
    toroute
-->
<template>
<div>
    <TopBar title="Évènements"></TopBar>
    <v-content>
        <v-container fluid>
             <v-row v-for="n in 3" :key="n">
                 <v-col class="d-flex flex-column align-center">
              <v-card width="200px" height="100px" class="d-flex flex-column justify-center flex-grow-0"
              color="#1e35b4"
              link :to="Menu[n -1].link"
              >
                <v-card-title v-text="Menu[n - 1].label" style="color:#FF9052;word-break:normal; text-align:center"></v-card-title>
              </v-card>
                 </v-col>
             </v-row>
        </v-container>
    </v-content>
</div>
</template>

<script>
import paths from "@/routes/paths.js";
import TopBar from "@/components/commons/TopBar.vue"
export default {
  data: () => ({
    Menu: [ {label : "Accéder à mon agenda", link : paths.events.path},
     {label : "Créer un évènement", link : paths.events.path},
      {label : "Évènements de l'association", link : paths.events.path},
      ]
  }),
  components: {
    TopBar
  }
};
</script>