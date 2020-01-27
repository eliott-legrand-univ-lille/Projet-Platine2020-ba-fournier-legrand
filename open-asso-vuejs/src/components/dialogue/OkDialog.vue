<template>
  <v-row justify="center">
    <v-dialog v-model="dial" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-card-title class="headline">{{title}}</v-card-title>
        <v-card-text>{{message}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :color="color" text :to="link1">{{btn1}}</v-btn>
          <v-btn :color="color" text :to="link2">{{btn2}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "OkDialog",
  props: {
    title: String,
    message: String,
    color: String,
    dial: {
      default : false,
    },
    btn1: String,
    link1: String,
    btn2: String,
    link2:String,
  },
  data(){
    return {
      dialog : this.dial,
    }
  },
};
  </script>