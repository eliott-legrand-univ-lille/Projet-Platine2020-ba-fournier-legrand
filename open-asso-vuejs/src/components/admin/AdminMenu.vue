<!--tostyle
toscript for size-->
<template>
<div>
    <TopBar title="Gestion" color="#673ab7"></TopBar>
    <v-content>
        <v-container fluid>
             <v-row v-for="n in 2" :key="n">
                <v-col class="d-flex flex-column align-center">
                  <v-card width="150px" height="150px" class="d-flex flex-column justify-center align-center"
                  color="#673ab7" link :to="Menu[n-1].link"
                  >
                    <v-card-title v-text="Menu[n - 1].name" style="color:#FF9052;word-break:normal; text-align:center"></v-card-title>
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
      {name:"Comptabilité", link: paths.accounting.path}, 
      {name:"Budget", link: paths.budget.path},
      ]
  }),
  components: {
    TopBar
  }
};
</script>