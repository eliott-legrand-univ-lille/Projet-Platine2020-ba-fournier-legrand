<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-list-item>
          <v-subheader>Saison 2019-2020</v-subheader>
        </v-list-item>
        <v-list two-line flat>
          <v-list-item-group v-model="selected" color="orange">
            <template v-for="match in matchs">
              <v-list-item :key="match.id">
                <v-list-item-avatar>
                  <v-img style="background-color:orange;"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{match.title}}</v-list-item-title>
                  <v-list-item-subtitle>Le {{match.date | formatDate}}</v-list-item-subtitle>
                  <v-list-item-subtitle>Lieu: {{match.address}}</v-list-item-subtitle>
                  <v-list-item-subtitle>Score: {{match.result}}</v-list-item-subtitle>
                </v-list-item-content>
                 <v-list-item-icon>
                  <v-icon @click="del(match.id)">mdi-delete</v-icon>
                </v-list-item-icon>
                <v-list-item-icon>
                  <v-icon >mdi-pencil</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-fab-transition>
          <v-btn color="orange" dark fixed bottom right fab v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create match</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Equipes du match"
                  v-model="name"
                  :rules="nameRules"
                  hint="Paris VS Bordeaux"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent>
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="date" label="Date de l'événement" readonly v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="date" locale="fr" full-width scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Stade Pierre', 'Salle Jean-Bart', 'Salle Io', 'Salle Nouméa']"
                  label="Lieu de la rencontre"
                  v-model="address"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="orange darken-1" text @click="validate">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import moment from 'moment'
import 'moment/locale/fr.js';
import { db,fb } from "@/db";
moment.locale('fr');
export default {
  data: () => ({
    selected: 0,
    name: "",
    nameRules: [
      v => !!v || "Le nom est obligatoire",
      v => (v && v.length <= 30) || "Le nom doit faire moins de 30 caractères"
    ],
    address: "",
    date: new Date().toISOString().substr(0, 10),
     modal: false,
    dialog: false,
    matchs: []
  }),
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }
      let date = val.toDate();
      return moment(date).format('L');
    }
  },
   computed: {
    ...mapState(['userProfile','currentUser'])
  },
  methods: {
    validate() {
      db.collection("match")
        .add({
          userID: this.currentUser.uid,
          userName: this.userProfile.name,
          title: this.name,
          date: new Date(this.date),
          address: this.address,
          result: "Inconnu",
          createdAt: fb.firestore.FieldValue.serverTimestamp()
        })
        .then(function(docRef) {
          // eslint-disable-next-line no-console
          console.log("Document written with ID: ", docRef.id);
         
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.error("Error adding document: ", error);
        });
        this.dialog = false;
    },
    del(id) {
      db.collection("match")
        .doc(id)
        .delete()
        .then(function() {
          // eslint-disable-next-line no-console
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.error("Error removing document: ", error);
        });
    }
  },
  firestore: {
    matchs: db.collection("match").where("date", ">=", new Date()).orderBy("date", "asc")
  }
};
</script>