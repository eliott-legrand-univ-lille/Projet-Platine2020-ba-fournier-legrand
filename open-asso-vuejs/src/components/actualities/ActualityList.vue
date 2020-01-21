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
  </v-container>
</template>
<script>
export default {
  data: () => ({
    Content: [
      {
        img: "",
        title: "Bonne année à tous !",
        author: "Allan, le 10/01/20",
        text: ""
      },
      {
        img: "",
        title:
          "Bonne année à tous Agaiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiin !",
        author: "Allan, le 10/01/20",
        text: ""
      }
    ]
  })
};
</script>