<template>
  <v-container fluid>
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
  })
};
</script>