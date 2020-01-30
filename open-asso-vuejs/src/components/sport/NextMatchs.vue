<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-list-item>
          <v-subheader>Saison 2019-2020</v-subheader>
        </v-list-item>
        <v-list two-line flat>
          <v-list-item-group v-model="selected" color="orange">
            <template v-for="match in matchs">
              <v-list-item :key="match.id">
                <v-list-item-avatar>
                  <v-img style="background-color:orange;"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{match.title}}</v-list-item-title>
                  <v-list-item-subtitle>Le {{match.date | formatDate}}</v-list-item-subtitle>
                  <v-list-item-subtitle>Lieu: {{match.address}}</v-list-item-subtitle>
                  <v-list-item-subtitle>Score: {{match.result}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'
import 'moment/locale/fr.js';
import { db } from "@/db";
moment.locale('fr');
export default {
  data: () => ({
    selected: 1,
    matchs: []
  }),
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }
      let date = val.toDate();
      return moment(date).format('L');
    }
  },
  firestore: {
    matchs: db.collection("match").where("date", ">", new Date())
  }
};
</script>