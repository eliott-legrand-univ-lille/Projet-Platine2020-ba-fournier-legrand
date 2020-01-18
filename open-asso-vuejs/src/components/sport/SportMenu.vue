<!--toroute
    tostyle-->
<template>
<div>
    <TopBar title="Sports"></TopBar>
    <v-content>
        <v-container fluid>
          <v-row v-for="k in 3" :key="k">
            <v-col v-for="n in 2" :key="n">
              <v-card class="d-flex justify-space-around align-center flex-column" 
              :color="Menu[n - 1 + 2 * (k - 1)].color" tile link :to="Menu[n - 1 + 2 * (k - 1)].link">
                <v-card-title v-text="Menu[n - 1 + 2 * (k - 1)].label"></v-card-title>
                <v-icon x-large v-text="Menu[n - 1 + 2 * (k - 1)].icon"></v-icon>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
    </v-content>
</div>
</template>

<script>
import TopBar from "@/components/commons/TopBar.vue"
import paths from "@/routes/paths.js";
export default {
  data: () => ({
    Menu: [
      { label: "Statistiques", icon: "mdi-medal" ,color: "#673ab7" , link: ""},
      { label: "Matchs", icon: "mdi-tshirt-crew-outline" ,color: "#673ab7", link: paths.matchs.path},
      { label: "Stratégies", icon: "mdi-target" ,color: "#673ab7", link: paths.strats.path},
      { label: "Créer un schéma", icon: "mdi-lead-pencil" ,color: "#673ab7", link: ""},
      { label: "Créer un match", icon: "mdi-podium-gold",color: "#673ab7" , link: paths.creatematch.path},
      { label: "Créer une stratégie", icon: "mdi-soccer-field",color: "#673ab7" , link: ""}
    ]
  }),
  components: {
    TopBar
  }
};
</script>

