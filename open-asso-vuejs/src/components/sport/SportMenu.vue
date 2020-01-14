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
              :color="Menu[n - 1 + k *2].color" tile>
                <v-card-title v-text="Menu[n - 1 + k * 2].label"></v-card-title>
                <v-icon x-large v-text="Menu[n - 1 + k * 2].icon"></v-icon>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
    </v-content>
</div>
</template>

<script>
import TopBar from "@/components/commons/TopBar.vue"
export default {
  data: () => ({
    Menu: [
      { label: "Statistiques", icon: "mdi-medal" ,color: "#1e35b4" },
      { label: "Matchs", icon: "t-shirt-crew-outline" ,color: "#1e35b4"},
      { label: "Stratégies", icon: "mdi-target" ,color: "#1e35b4"},
      { label: "Créer un schéma", icon: "mdi-lead-pencil" ,color: "#1e35b4"},
      { label: "Créer un match", icon: "mdi-podium-gold",color: "#1e35b4" },
      { label: "Créer une stratégie", icon: "mdi-soccer-field",color: "#1e35b4" }
    ]
  }),
  components: {
    TopBar
  }
};
</script>

