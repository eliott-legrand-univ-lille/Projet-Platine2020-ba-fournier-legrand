<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn :color="color" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">{{title}}</v-card-title>
        <v-card-text>{{message}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :color="color" text @click="dialog = false">{{btn1}}</v-btn>
          <v-btn :color="color" text @click="dialog = false">{{btn2}}</v-btn>
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
    dialog: Boolean,
    btn1: String,
    link1: String,
    btn2: String,
    link2:String,
  },
};
  </script>