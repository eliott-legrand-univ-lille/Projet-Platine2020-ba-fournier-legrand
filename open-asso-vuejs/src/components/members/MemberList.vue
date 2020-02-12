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
              <v-img v-if="user.role === 'Membre'" src="@/assets/LogoApp.png"></v-img>
              <v-img v-if="user.role === 'Coach'" src="@/assets/logovuety.jpg"></v-img>
              <v-img v-if="user.role === 'Président'" src="@/assets/logo.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="user.title+' '+user.name"></v-list-item-title>
              <v-list-item-subtitle>Rôle : {{user.role}}</v-list-item-subtitle>
            </v-list-item-content>
              <!--Admin only-->
              <v-list-item-icon>
                <v-icon @click="del(user.id)">mdi-delete</v-icon>
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
import { db } from "@/db";
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
  methods: {
    del(id) {
      db.collection("users")
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
  computed: {
    filteredMembers: function() {
      return this.users.filter(user => {
        return (user.name.toLowerCase() + user.title.toLowerCase()).includes(
          this.search.toLowerCase()
        );
      });
    }
  },
  firestore: {
    users: db.collection("users").orderBy("name", "desc")
  }
};
</script>