<template>
  <div>
    <div id="content" class="ma-2">
      <canvas ref="chart"></canvas>
    </div>
    <v-tabs v-model="tab" background-color="#1e35b4" grow dark>
      <v-tab>Dépenses</v-tab>
      <v-tab>Recettes</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-list two-line flat>
          <v-list-item-group color="red">
            <template v-for="depense in depenses">
              <v-list-item :key="depense.id">
                <v-list-item-avatar>
                  <v-img style="background-color:#FC2108;"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{depense.motif}}</v-list-item-title>
                  <v-list-item-subtitle>Le {{depense.date | formatDate}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text class="title" v-text="depense.somme"></v-list-item-action-text>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </v-tab-item>
      <v-tab-item>
        <v-list two-line flat>
          <v-list-item-group color="green">
            <template v-for="recette in recettes">
              <v-list-item :key="recette.id">
                <v-list-item-avatar>
                  <v-img style="background-color:#6FF248;"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{recette.motif}}</v-list-item-title>
                  <v-list-item-subtitle>Le {{recette.date | formatDate}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text class="title" v-text="recette.somme"></v-list-item-action-text>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </v-tab-item>
    </v-tabs-items>
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
          <span class="headline">Ajouter dépense/recette</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Motif"
                  v-model="motif"
                  hint="Achat de boissons"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select :items="items" label="Dépense ou Recette" v-model="choix"></v-select>
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
                <v-text-field label="Montant" v-model="somme" hint="20e" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="orange darken-1" text @click="validate">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import Chart from "chart.js";
import { db, fb } from "@/db";
export default {
  data: () => ({
    motif: "",
    choix: "",
    date: new Date().toISOString().substr(0, 10),
    somme: 0,
    modal: false,
    dialog: false,
    items: ["Dépense", "Recette"],
    tab: 1,
    depenses: [],
    recettes: []
  }),
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }
      let date = val.toDate();
      return moment(date).format("LL");
    }
  },
  mounted() {
    var chart = this.$refs.chart;
    var ctx = chart.getContext("2d");
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: "# of Votes",
            backgroundColor: ["#F83C42", "#6FF248"],
            data: [50, 50],
            borderWidth: 1
          }
        ]
      },
      options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        title: {
          display: true,
          text: "Equilibre du budget"
        }
      }
    });
  },
  computed: {
    ...mapState(["userProfile", "currentUser"])
  },
  methods: {
    validate() {
      if (this.choix == "Recette")
        db.collection("recettes")
          .add({
            userID: this.currentUser.uid,
            userName: this.userProfile.name,
            motif: this.motif,
            date: new Date(this.date),
            somme: this.somme,
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
      else {
        db.collection("depenses")
          .add({
            userID: this.currentUser.uid,
            userName: this.userProfile.name,
            motif: this.motif,
            date: new Date(this.date),
            somme: this.somme,
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
      }
      this.dialog = false;
    }
  },
  firestore: {
    depenses: db.collection("depenses").orderBy("date", "desc"),
    recettes: db.collection("recettes").orderBy("date", "desc")
  }
};
</script>   