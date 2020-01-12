<!--toroute
    tostyle-->
<template>
  <v-container fluid>
    <v-row v-for="k in 2" :key="k">
      <v-col v-for="n in 3" :key="n">
        <v-card class="d-flex justify-space-around align-center flex-column" 
        :color="Menu[n + k].color" tile>
          <v-card-title v-text="Menu[n + k].label"></v-card-title>
          <v-icon x-large v-text="Menu[n + k].icon"></v-icon>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    Menu: [
      { label: "Membres", icon: "mdi-account-group" ,color: "##673ab7" },
      { label: "Sport", icon: "mdi-medal" ,color: "#1e35b4"},
      { label: "Evènements", icon: "mdi-calendar-month-outline" ,color: "#673ab7"},
      { label: "Actualités", icon: "mdi-newspaper-variant-multiple-outline" ,color: "#1e35b4"},
      { label: "Comptabilité", icon: "mdi-wallet-outline",color: "#673ab7" },
      { label: "Divers", icon: "mdi-dots-horizontal-circle-outline",color: "#1e35b4" }
    ]
  })
};
</script>