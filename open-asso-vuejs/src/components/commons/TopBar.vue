<template>
    <div>
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <!--<v-btn @click="$router.go(-1)">Back</v-btn>-->
            <v-spacer></v-spacer>
            <v-toolbar-title class="justify-center">{{ title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon><v-icon>mdi-bell</v-icon></v-btn>
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
    </div>
</template>

<script>
import paths from "@/routes/paths.js";

export default {
  name: 'TopBar',
  props: {
      title: String
  },
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
        { title: "Login", icon: "mdi-login", link: paths.login.path },
        { title: "S'inscrire", icon: "mdi-login", link: paths.userSubscribe.path },
        { title: "Test", icon: "mdi-help-circle", link: paths.test.path },
        { title: "Créer une Asso", icon: "mdi-briefcase-plus", link: paths.assoSubscribe.path }
      ]
    };
  }
}
</script>