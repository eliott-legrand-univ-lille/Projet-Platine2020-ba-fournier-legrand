<!--toroute
    tostyle
    toscript (in case of admin type user) va voir banner pour le changement de role-->
<template name="component-name">
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-text-field append-icon="mdi-magnify" placeholder="Rechercher un membre" v-model="search"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <!--Admin only-->
        <v-list>
          <v-list-item two-line v-for="user in filteredMembers" :key="user.id" :inactive="true">
            <v-list-item-avatar>
              <v-img src="@/assets/logoseul.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="user.name"></v-list-item-title>
              <v-list-item-subtitle>Rôle : {{user.name}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <!--Admin only-->
              <!--<v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>-->
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-btn color="orange" dark fixed bottom right fab link :to="addNewMember">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>


<script>
import paths from "@/routes/paths.js";
import { db } from "@/db"
export default {
  data: () => ({
    Members: [
      { nom: "Allan F ", role: "Membre" },
      { nom: "Chuck Vandamme", role: "Président" },
      { nom: "Camille Grare", role: "Membre" },
      { nom: "Eliot Compag", role: "Membre" },
      { nom: "Généreux Bakoto", role: "Membre" },
      { nom: "Jean Michel Cousin", role: "Membre" },
      { nom: "Ramata Ba", role: "Secrétaire" },
      { nom: "Richard Bad", role: "Trésorier" },
      { nom: "Sean Claude Cheneville", role: "Membre" },
      { nom: "Ada Princius", role: "Membre" }
    ],
    users: [],
    search: "",
    addNewMember: paths.newmember.path
  }),
  computed: {
    filteredMembers: function() {
      return this.users.filter(user => {
        return user.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  firestore: {
    users: db
      .collection("users")
      .orderBy("name", "desc")
  }
};
</script>