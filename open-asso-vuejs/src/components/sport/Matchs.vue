<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-list three-line v-for="todo in todos" :key="todo.id">
            <v-list-item>
              <v-subheader>Saison 2019-2020</v-subheader>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-img style="background-color:orange;"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{todo.title}}</v-list-item-title>
                <v-list-item-subtitle>Le {{todo.date}}</v-list-item-subtitle>
                <v-list-item-subtitle>Lieu: {{todo.address}}</v-list-item-subtitle>
                <v-list-item-subtitle>Score: {{todo.result}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from '../../db'
export default {
  data: () => ({
    Content: [
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
    todos: [],
  }),
   firestore: {
    todos: db.collection('match'),
  },
};
</script>