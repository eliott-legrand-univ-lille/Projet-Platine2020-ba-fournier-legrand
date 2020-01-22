<!--tostyle
toscript for size-->
<!--ici les carte seront paramètrable sur appuie long on pourra changer le nom ou supprimer (sauf pour général) 
et également ajouter une nouvelle carte-->
<template>
  <v-container fluid>
    <v-row>
      <v-col class="d-flex flex-column align-center" v-for="n in Menu.length" :key="n">
        <v-card
          width="100px"
          height="100px"
          class="d-flex flex-column justify-center align-center"
          color="#673ab7"
        >
          <v-card-title
            v-text="Menu[n - 1].name"
            style="color:white;word-break:normal; text-align:center"
          ></v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-column align-center">
        <v-card
          width="100px"
          height="100px"
          class="d-flex flex-column justify-center align-center"
          color="#673ab7"
        >
          <v-card-icon>
            <v-icon x-large color="white">mdi-plus-thick</v-icon>
          </v-card-icon>
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
      { name: "Général", link: paths.accounting.path },
      { name: "Matériel", link: paths.budget.path }
    ]
  }),
};
</script>