<!--toroute
    tostyle-->
<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="n in Menu.length" :key="n" cols="6" sm="4">
        <v-card
          class="d-flex justify-space-around align-center flex-column"
          :color="Menu[n-1].color"
          link
          :to="Menu[n-1].link"
        >
          <v-card-title v-if="Menu[n - 1].color === '#1e35b4'" style="word-break:normal">
            <p class="orange--text">{{Menu[n-1].label}}</p>
          </v-card-title>
          <v-card-title v-else style="word-break:normal">
            <p class="white--text">{{Menu[n-1].label}}</p>
          </v-card-title>
          <v-icon :color="Menu[n-1].textcolor" x-large v-text="Menu[n-1].icon"></v-icon>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import paths from "@/routes/paths.js";

/*
{
        label: "Divers",
        icon: "mdi-dots-horizontal-circle-outline",
        textcolor: "white",
        color: "#673ab7",
        link: ""
      }
*/

export default {
  data: () => ({
    Menu: [
      {
        label: "Membres",
        icon: "mdi-account-group",
        textcolor: "#FF9052",
        color: "#1e35b4",
        link: paths.members.path
      },
      {
        label: "Sports",
        icon: "mdi-medal",
        textcolor: "white",
        color: "#673ab7",
        link: paths.sports.path
      },
      {
        label: "Évènements",
        icon: "mdi-calendar-month-outline",
        textcolor: "#FF9052",
        color: "#1e35b4",
        link: paths.eventsmenu.path
      },
      {
        label: "Actualités",
        icon: "mdi-newspaper-variant-multiple-outline",
        textcolor: "white",
        color: "#673ab7",
        link: paths.actualities.path
      },
      {
        label: "Comptabilité",
        icon: "mdi-wallet-outline",
        textcolor: "#FF9052",
        color: "#1e35b4",
        link: paths.accounting.path
      },
      {
        label: "Profil",
        icon: "mdi-account-outline",
        textcolor: "white",
        color: "#673ab7",
        link: paths.profile.path
      }
    ]
  })
};
</script>