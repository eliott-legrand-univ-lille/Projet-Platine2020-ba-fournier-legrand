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
              :color="Menu[n-1].color" tile>
              <v-card-title v-text="Menu[n-1].label"></v-card-title>
              <v-icon x-large v-text="Menu[n-1].icon"></v-icon>
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
      { label: "Membres", icon: "mdi-account-group" ,color: "#673ab7" },
      { label: "Sport", icon: "mdi-medal" ,color: "#1e35b4"},
      { label: "Evènements", icon: "mdi-calendar-month-outline" ,color: "#673ab7"},
      { label: "Actualités", icon: "mdi-newspaper-variant-multiple-outline" ,color: "#1e35b4"},
      { label: "Comptabilité", icon: "mdi-wallet-outline",color: "#673ab7" },
      { label: "Divers", icon: "mdi-dots-horizontal-circle-outline",color: "#1e35b4" }
    ]
  }),
  components: {
    TopBar
  }
};
</script>