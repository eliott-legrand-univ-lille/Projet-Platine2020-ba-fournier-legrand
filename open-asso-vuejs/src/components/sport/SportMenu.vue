<!--toroute
    tostyle-->
<template>
  <v-container fluid>
    <v-row>
      <v-col class="pa3 d-flex flex-column" v-for="n in Menu.length" :key="n" cols="6" sm="4">
        <v-card
          class="flex d-flex justify-space-around align-center flex-column"
          :color="Menu[n - 1].color"
          link
          :to="Menu[n-1].link"
        >
          <v-card-title
            primary-title
            style="text-align: center;word-break:keep-all"
            class="align-center orange--text pb-1 pt-3 px-2 flex"
          >
            <h4 class="white--text text-xs-center">{{Menu[n - 1].label}}</h4>
          </v-card-title>
          <v-icon color="white" x-large v-text="Menu[n - 1].icon"></v-icon>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import paths from "@/routes/paths.js";
export default {
  data: () => ({
    Menu: [
      {
        label: "Matchs",
        icon: "mdi-tshirt-crew-outline",
        color: "#673ab7",
        link: paths.matchs.path
      },
      {
        label: "Statistiques",
        icon: "mdi-medal",
        color: "#673ab7",
        link: paths.stats.path
      },
      {
        label: "Stratégies",
        icon: "mdi-target",
        color: "#673ab7",
        link: paths.strats.path
      },
      {
        label: "Créer un schéma",
        icon: "mdi-lead-pencil",
        color: "#673ab7",
        link: ""
      },
      {
        label: "Créer un match",
        icon: "mdi-podium-gold",
        color: "#673ab7",
        link: paths.creatematch.path
      },
      {
        label: "Créer une stratégie",
        icon: "mdi-soccer-field",
        color: "#673ab7",
        link: ""
      }
    ]
  })
};
</script>

