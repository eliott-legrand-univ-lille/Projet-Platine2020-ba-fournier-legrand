<template>
  <div>
    <v-app-bar app :color="color" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-btn icon v-if="back" @click="$router.go(-1)"><v-icon>mdi-arrow-left</v-icon></v-btn>
      

        <router-link to="/">
          <v-btn icon>
            <v-img :src="require('@/assets/logoseul.png')" link to="/" max-width="40" max-height="40"></v-img>
          </v-btn>
        </router-link>


      <v-toolbar-title class="justify-center">{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
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

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import paths from "@/routes/paths.js";

export default {
  name: "TopBar",
  props: {
    title: String,
    back: Boolean,
    color: String,
  },
  data() {
    return {
      drawer: false,
      items: [
        { title: "Accueil", icon: "mdi-home", link: paths.home.path },
        { title: "Profil", icon: "mdi-account", link: paths.profile.path },
        { title: "Membres", icon: "mdi-account-group", link: paths.members.path },
        { title: "Évènements", icon: "mdi-calendar", link: paths.eventsmenu.path },
        { title: "Sports", icon: "mdi-basketball", link: paths.sports.path },
        { title: "Gestion", icon: "mdi-wallet-outline",link: paths.manage.path },
        { title: "Actualités", icon: "mdi-newspaper", link: paths.actualities.path },
        { title: "Login", icon: "mdi-login", link: paths.login.path },
        { title: "S'inscrire", icon: "mdi-login", link: paths.userSubscribe.path },
        { title: "Test", icon: "mdi-help-circle", link: paths.test.path },
        { title: "Créer une Asso", icon: "mdi-briefcase-plus", link: paths.assoSubscribe.path }
      ]
    };
  }
};
</script>