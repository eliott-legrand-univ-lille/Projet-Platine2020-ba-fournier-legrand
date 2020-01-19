<!--toroute
    tostyle-->
<template>
<div>
    <TopBar title="Sports"></TopBar>
    <v-content>
        <v-container fluid>

          <v-row>
            <v-col
              class="d-flex flex-column"
              v-for="n in Menu.length"
              :key="n"
              cols="6"
              sm="4"
            >
              <v-card class="d-flex justify-space-around align-center flex-column" 
              :color="Menu[n - 1].color" tile link :to="Menu[n-1].link">
                <v-card-title primary-title style="word-break:normal" class="orange--text pb-1 pt-3 px-2">
                  <h4 class="text-xs-center">{{Menu[n - 1].label}}</h4>
                </v-card-title>
                <v-icon color="white" x-large v-text="Menu[n - 1].icon"></v-icon>
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
      { label: "Matchs", icon: "mdi-tshirt-crew-outline" ,color: "#673ab7", link: paths.matchs.path},
      { label: "Statistiques", icon: "mdi-medal" ,color: "#673ab7" , link: paths.stats.path},
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

