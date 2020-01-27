<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-list three-line v-for="n in Content.length" :key="n">
            <v-list-item-avatar>
              <v-img style="background-color:orange;"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{Content[n].title}}</v-list-item-title>
              <v-list-item-subtitle>Le {{Content[n].date}}</v-list-item-subtitle>
              <v-list-item-subtitle>Lieu: {{Content[n].adress}}</v-list-item-subtitle>
              <v-list-item-subtitle>Score: {{Content[n].result}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../../db"
export default {
  data: () => ({
    poeut: [
      {
        season: "Saison 2019-2020"
      },
      {
        title: "Match Vs Lille",
        date: "08/10/19",
        adress: "Lille",
        result: "2-3"
      },
      {
        title: "Match Vs Reims",
        date: "20/09/19",
        adress: "Reims",
        result: "5-3"
      }
    ],
    Content: [],
  }),
   firestore: {
    Content: db.collection('match'),
  },
};
</script>