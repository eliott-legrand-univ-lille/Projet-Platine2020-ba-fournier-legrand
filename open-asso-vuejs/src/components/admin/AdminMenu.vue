<!--tostyle
toscript for size-->
<template>
  <v-container fluid>
    <v-row v-for="n in 2" :key="n">
      <v-col class="d-flex flex-column align-center">
        <v-card
          width="150px"
          height="150px"
          class="d-flex flex-column justify-center align-center"
          color="#673ab7"
          link
          :to="Menu[n-1].link"
        >
          <v-card-title
            v-text="Menu[n - 1].name"
            style="color:white;word-break:normal; text-align:center"
          ></v-card-title>
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
      { name: "Comptabilité", link: paths.accounting.path },
      { name: "Budget", link: paths.budget.path }
    ]
  })
};
</script>