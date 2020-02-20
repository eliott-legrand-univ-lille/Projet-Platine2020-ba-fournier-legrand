<template>
  <v-container fluid>
    <div class="chart-container" width="300" height="425">
    <canvas ref="chart" ></canvas>
    </div>
    <v-row align="center" justify="center">
      <v-col>
        <v-list v-for="n in Content.length" :key="n">
          <v-list-item v-if="Content[n-1].season">
            <v-subheader>{{Content[n-1].season}}</v-subheader>
          </v-list-item>
          <v-list-item v-else>
            <v-list-item-avatar>
              <v-img style="background-color:orange;"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{Content[n-1].stat}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Chart from "chart.js";
export default {
  data: () => ({
    Content: [
      {
        season: "Saison 2019-2020"
      },
      {
        stat: "Ratio de victoires: 75%"
      },
      {
        stat: "Meilleur Score de la saison: 5-1"
      }
    ]
  }),
  mounted() {
    var chart = this.$refs.chart;
    var ctx = chart.getContext("2d");
    // eslint-disable-next-line no-unused-vars
    new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ["Bloque", "Passe", "Attaque", "Défense", "Cohésion"],
      datasets: [
        {
          label: "2019",
          fill: true,
          backgroundColor: "rgba(120,175,225,1)",
          borderColor: "rgba(120,175,225,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [42.0,43.0,44.0,40.0,39.0]
        }, {
          label: "2020",
          fill: true,
          backgroundColor: "rgba(255,99,132,1)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "rgba(255,99,132,1)",
          pointBackgroundColor: "rgba(255,99,132,1)",
          data: [48.0,47.0,50.0,44.0,45.0]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Forces de l'équipe"      }
    }
});
  },
};
</script>