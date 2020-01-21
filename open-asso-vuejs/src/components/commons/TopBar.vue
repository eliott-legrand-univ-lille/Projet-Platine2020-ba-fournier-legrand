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

      <v-toolbar-title class="justify-center">{{ $route.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>

    
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