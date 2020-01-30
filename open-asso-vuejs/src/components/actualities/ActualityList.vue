<template>
  <v-container>
    <v-row justify="center">
      <v-col v-for="article in articles " :key="article.id">
        <v-card max-width="400">
          <v-img src="@/assets/logoasso2.png" lazy-src="@/assets/logoasso2.png" max-height="125px" class="grey darken-4"></v-img>
          <v-card-subtitle class="pb-0">{{article.title}}</v-card-subtitle>

          <v-card-text class="text--primary flex">
            <div>{{article.content}}</div>
            <div>{{article.userName}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- create an event -->
    <v-fab-transition>
      <v-btn color="#FF9052" dark fixed bottom right fab link :to="createActuPath">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
import paths from "@/routes/paths.js";
import { db } from "@/db";
export default {
  data: () => ({
    createActuPath: paths.newactu.path,
    articles: []
  }),
  firestore: {
    articles: db.collection("articles")
  }
};
</script>