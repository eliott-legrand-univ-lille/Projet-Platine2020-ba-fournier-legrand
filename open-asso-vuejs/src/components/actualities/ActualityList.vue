<template>
  <v-container>
    <v-row justify="center">
      <!-- 
        this list use breakpoints(https://vuetifyjs.com/en/customization/breakpoints
        and https://stackoverflow.com/questions/57941447/how-to-make-all-v-card-equal-height-with-vuetify2) 
        to be responsive
      -->
      <v-col v-for="article in articles" :key="article.id" class="d-flex flex-column" md="4" cols="6">
        <v-card @click="setCurrentArticleId(article.id)" 
          class="elevation-5 flex d-flex flex-column">
          <v-img src="@/assets/logoasso2.png" lazy-src="@/assets/logoasso2.png" 
            max-height="125px" class="grey darken-4" ></v-img>
          <v-card-subtitle class="pb-0">{{article.title}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{article.content}}</div>
            <div>{{article.userName}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- create an actuality -->
    <v-fab-transition>
      <v-btn color="#FF9052" dark fixed bottom right fab link :to="createActuPath">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-row justify="center">
        <v-dialog max-width="1200px" v-model="dialog">
            <v-card>
                <v-toolbar dark :color="$route.meta.color">
                <v-spacer></v-spacer>
                <v-btn icon dark @click="closeDialog()">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                </v-toolbar>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1">{{ currentTitle }}</v-list-item-title>
                        <p>{{ currentContent }}</p>
                        <v-list-item-subtitle>Par {{ currentAuthor }}, le {{ currentCreationDate }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-dialog>
    </v-row>  


  </v-container>
</template>

<script>
import paths from "@/routes/paths.js";
import { db } from "@/db";
export default {
  data: () => ({
    createActuPath: paths.newactu.path,
    articles: [],
    dialog: false,
    currentActualityId: null,

  }),
  firestore: {
    articles: db.collection("articles").orderBy("createdAt", "desc")
  },
  methods: {
      setCurrentArticleId(id) {
          this.currentActualityId = id;
          this.dialog = true
      },
      closeDialog () {
          this.dialog=false;
      }
  },
  computed: {
    currentArticle() {
      if (this.currentActualityId !== null) {
        for(var articleIt=0; articleIt<this.articles.length; articleIt++){       
          if(this.articles[articleIt].id === this.currentActualityId){
            return this.articles[articleIt];
          } 
        }
      }
      return null;
    },
    currentContent() {
      if (this.currentArticle !== null) {
          return this.currentArticle.content;
      }
      return null;
    },
    currentTitle() {
        if (this.currentArticle !== null) {
            return this.currentArticle.title;
        }
        return null;
    },
    currentAuthor() {
        if (this.currentArticle !== null) {
            return this.currentArticle.userName;
        }
        return null;
    },
    currentCreationDate() {
        if (this.currentArticle !== null) {
            return this.$moment(this.currentArticle.createdAt.toMillis()).format("DD/MM/YYYY");
        }
        return null;
    }
  }
};
</script>