<template>
  <v-container fluid>
    <v-row key="0">
      <v-col v-for="n in Content.length" :key="n" md="4" cols="6" class="pa-3 d-flex flex-column">
        <v-card class="elevation-5 flex d-flex flex-column">
          <v-img src="@/assets/LogoApp.png" height="125" class="grey darken-4"></v-img>
          <v-card-title style="word-break:normal" class="title">{{Content[n-1].title}}</v-card-title>
          <v-card-text style="word-break:keep-all" class="text--primary flex">
            <div>{{Content[n-1].author}}</div>
            <div>{{Content[n-1].text}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- create an event -->
    <v-fab-transition>
      <v-btn color="orange" dark fixed bottom right fab link :to="createActuPath">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
import paths from "@/routes/paths.js";

export default {
  data: () => ({
    createActuPath: paths.newactu.path,
    Content: [
      {
        img: "",
        title: "Bonne année à tous !",
        author: "Allan, le 10/01/20",
        text: ""
      },
      {
        img: "",
        title: "Bonne année à tous Again !",
        author: "Allan, le 10/01/20",
        text: ""
      }
    ]
  })
};
</script>