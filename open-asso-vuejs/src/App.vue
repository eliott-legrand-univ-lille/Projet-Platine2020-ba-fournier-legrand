<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>OpenAsso</v-toolbar-title>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
       <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense >
        <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
          <v-list-item-icon >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
    
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
import paths from "@/routes/paths.js";
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Accueil", icon: "mdi-home", link: paths.home.path },
        { title: "Profil", icon: "mdi-account", link: paths.profile.path },
        { title: "Menbres", icon: "mdi-account-group"},
        { title: "Evénements", icon: "mdi-calendar", link: paths.events.path },
        { title: "Sport", icon: "mdi-basketball",},
        { title: "Actualités", icon: "mdi-newspaper",},
        { title: "S'inscrire", icon: "mdi-login", link: paths.userSubscribe.path },
        { title: "Test", icon: "mdi-help-circle", link: paths.test.path },
        { title: "test_Subscribe_Asso", icon: "mdi-briefcase-plus", link: paths.assoSubscribe.path }
      ]
    };
  }
};
</script>
