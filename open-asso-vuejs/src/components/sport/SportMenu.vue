<!--toroute
    tostyle-->
<template>
  <v-container>
    <v-row>
      <v-col v-for="(item,i) in Menu" :key="i">
        <v-row align="center" justify="center" class="grey lighten-5">
          <v-card
            class="d-flex justify-space-around align-center flex-column"
            width="150px"
            height="150px"
            color="#673ab7"
            link
            :to="item.link"
          >
            <v-card-title style="color:#FF9052;word-break:normal; text-align:center" v-text="item.label">
            </v-card-title>
            <v-icon color="white" x-large v-text="item.icon"></v-icon>
          </v-card>
        </v-row>
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
        label: "Matchs passés",
        icon: "mdi-tshirt-crew-outline",
        color: "#673ab7",
        link: paths.matchs.path
      },
      {
        label: "Voir les statistiques",
        icon: "mdi-medal",
        color: "#673ab7",
        link: paths.stats.path
      },
      {
        label: "Matchs à venir",
        icon: "mdi-target",
        color: "#673ab7",
        link: paths.nextmatchs.path
      },
      {
        label: "Créer un match",
        icon: "mdi-podium-gold",
        color: "#673ab7",
        link: paths.creatematch.path
      }
    ]
  })
};
</script>

