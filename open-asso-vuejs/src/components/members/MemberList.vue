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
                <v-icon v-if="userProfile.role ==='Président'"  @click="del(user.id)">mdi-delete</v-icon>
              </v-list-item-icon>
              <v-list-item-icon>
                  <v-icon v-if="userProfile.role === 'Président'" @click="editHandle(user)">mdi-pencil</v-icon>
                </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-btn color="orange" dark fixed bottom right fab link :to="addNewMember">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog2" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Edit role</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-form>
              <v-col cols="12" sm="6">
                <v-text-field label="Role du membre" v-model="role" :rules="[passwordConfirmationRule]" persistent-hint="" hint="Coach,Président,Membre" required></v-text-field>
              </v-col>
              </v-form>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange darken-1" text @click="editCancel">Close</v-btn>
          <v-btn color="orange darken-1" text @click="edit(currID)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<script>
import { mapState } from 'vuex';
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
    dialog2: false,
    nameRules: [
      v => !!v || "Le nom est obligatoire",
      v => (v && v.length <= 30) || "Le nom doit faire moins de 30 caractères"
    ],
    currID: "",
    users: [],
    role: "",
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
    },
    editHandle(user) {
      this.currID = user.id;
      this.role = user.role;
      this.dialog2 = true;
    },
    editCancel() {
      this.currID = "";
      this.role = "";
      this.dialog2 = false;
    },
    edit(id) {
      db.collection("users")
        .doc(id)
        .update({
          role: this.role
        })
        .then(function() {
          // eslint-disable-next-line no-console
          console.log("Document successfully updated!");
          
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.error("Error updating document: ", error);
        });
        this.dialog2 = false;
    }
  },
  computed: {
    filteredMembers: function() {
      return this.users.filter(user => {
        return (user.name.toLowerCase() + user.title.toLowerCase()).includes(
          this.search.toLowerCase()
        );
      });
    },
    ...mapState(['userProfile','currentUser']),
    passwordConfirmationRule() {
      return () => (this.role === "Membre" || this.role === "Président" || this.role === "Coach") || 'Role incorrect'
    },
    
  },
  firestore: {
    users: db.collection("users").orderBy("name", "desc")
  }
};
</script>