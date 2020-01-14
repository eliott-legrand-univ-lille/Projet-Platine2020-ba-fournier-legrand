<template>
<div>
    <TopBar title="Évènements"></TopBar>
    <v-content>
        <v-container fluid>
             <v-row v-for="n in 3" :key="n">
                 <v-col class="d-flex flex-column align-center">
              <v-card width="200px" height="200px" class="d-flex flex-column justify-center"
              color="#1e35b4"
              >
                <v-card-title v-text="Menu[n - 1]" style="color:#FF9052;word-break:normal; text-align:center"></v-card-title>
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
    Menu: [ "Accéder à mon agenda", "Créer un évènement", "Évènements de l'association"]
  }),
  components: {
    TopBar
  }
};
</script>