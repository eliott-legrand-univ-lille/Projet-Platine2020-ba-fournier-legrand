<template>
  <v-app>
    <!--THe app componet is called once and contains the nivagation  -->
    <!-- v-if="currentUser" -->
    <!-- The navigation bar drawer -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="!currentUser ? 'Nobody ' : userProfile.title"></v-list-item-title>
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
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon> mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- The appbar with the title and buttons -->
    <v-app-bar app :color="$route.meta.color" dark>
      <!--v-if="currentUser"-->
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <router-link to="/">
        <v-btn icon>
          <v-img :src="require('@/assets/logoseul.png')" link to="/" max-width="40" max-height="40"></v-img>
        </v-btn>
      </router-link>

      <v-toolbar-title class="justify-center">{{ $route.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-if="$route.meta.back" @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn icon :to="notification" link>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Here is the content of the app  -->
    <v-content>
      <!-- the router switch automaticaly between components using routes or with buttons in the differents components -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapState }  from 'vuex';
import paths from "@/routes/paths.js";
import { auth } from "./db";

/* 
{ title: "Login", icon: "mdi-login", link: paths.login.path },
        {
          title: "S'inscrire",
          icon: "mdi-login",
          link: paths.userSubscribe.path
        },
        { title: "Test", icon: "mdi-help-circle", link: paths.test.path },
        {
          title: "Créer une Asso",
          icon: "mdi-briefcase-plus",
          link: paths.assoSubscribe.path
        }
*/ 

export default {
  name: "App",
  /* The data for the drawer */
  data() {
    return {
      drawer: false,
      notification : paths.notification.path,
      items: [
        { title: "Accueil", icon: "mdi-home", link: paths.home.path },
        { title: "Profil", icon: "mdi-account", link: paths.profile.path },
        {
          title: "Membres",
          icon: "mdi-account-group",
          link: paths.members.path
        },
        {
          title: "Évènements",
          icon: "mdi-calendar",
          link: paths.eventsmenu.path
        },
        { title: "Sports", icon: "mdi-basketball", link: paths.sports.path },
        {
          title: "Gestion",
          icon: "mdi-wallet-outline",
          link: paths.accounting.path
        },
        {
          title: "Actualités",
          icon: "mdi-newspaper",
          link: paths.actualities.path
        },
      ]
    };
  },
  /* The local state that we import for the store */
  computed: {
    ...mapState(['currentUser','userProfile'])
  },
  /* Methods for the app component */
  methods: {
    /* Logout method with firebase auth instance, also call to clear the local state */
    logout() {
      auth
        .signOut()
        .then(() => {
          this.$store.dispatch("clearData");
          this.$router.push("/login");
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    }
  }
};
</script>
