<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-toolbar-title>OpenAsso</v-toolbar-title>
      </div>
      
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-divider></v-divider>

        <v-list dense>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            link
          >
            <v-list-item-icon class="mb-2">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import paths from '@/routes/paths.js';
export default {
  name: 'App',
  data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-home', link: paths.home.path },
          { title: 'Events', icon: 'question_answer', link: paths.events.path },
          {title : 'Subscribe', icon:'mdi-account-plus', link:'/user'},
          {title: 'Test', icon: '', link: paths.test.path },
          {title : 'test_Subscribe_Asso', icon:'mdi-briefcase-plus', link:'/asso'},
        ],
      }
    },
};
</script>
