<!--toroute
    tostyle-->
<template>
<div>
    <TopBar title="OpenAsso"></TopBar>
    <v-content>

      <v-container fluid>
        <v-row>
          <v-col
            v-for="n in Menu.length"
            :key="n"
            cols="6"
            sm="4"
          >
            <v-card class="d-flex justify-space-around align-center flex-column" 
              :color="Menu[n-1].color" tile link :to="Menu[n-1].link">
              <v-card-title>
                  <p class="orange--text">{{Menu[n-1].label}}</p>
              </v-card-title>
              <v-icon color="white" x-large v-text="Menu[n-1].icon"></v-icon>
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
      { label: "Membres", icon: "mdi-account-group" ,textcolor:"#FF9052",color: "#1e35b4", link: "" },
      { label: "Sports", icon: "mdi-medal" ,color: "#673ab7", link: paths.sports.path },
      { label: "Évènements", icon: "mdi-calendar-month-outline" ,color: "#1e35b4", link: paths.eventsmenu.path },
      { label: "Actualités", icon: "mdi-newspaper-variant-multiple-outline" ,color: "#673ab7", link: "" },
      { label: "Comptabilité", icon: "mdi-wallet-outline",color: "#1e35b4", link: "" },
      { label: "Divers", icon: "mdi-dots-horizontal-circle-outline",color: "#673ab7", link: "" }
    ]
  }),
  components: {
    TopBar
  }
};
</script>