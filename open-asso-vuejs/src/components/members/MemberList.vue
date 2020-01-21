<!--toroute
    tostyle
    toscript (in case of admin type user) va voir banner pour le changement de role-->
<template name="component-name">
  <div>
    <TopBar title="Membres" color="#1e35b4" back></TopBar>
    <v-content>
      <v-container fill-height fluid>
       <v-row>
         <!-- <v-autocomplete
            :item="Members"
            hide-selected
            placeholder="Entrez le nom ou le prénom d'un membre"
            append-icon="mdi-magnify"></v-autocomplete> -->
            <v-text-field append-icon="mdi-magnify" placeholder="Rechercher un membre" v-model="search">
              
            </v-text-field>
        </v-row>
        <v-row align="center" justify="center">
          <v-col>
            <!--Admin only-->
            <v-btn color="success">Ajouter un Membre</v-btn>
            <v-list>
              <v-list-item three-line v-for="(member, i) in filteredMembers" :key="i" :inactive="true">
                <v-list-item-content>
                <v-list-item-title v-text="member.nom"></v-list-item-title>
                <v-list-item-subtitle>Rôle : {{member.role}}</v-list-item-subtitle>
                
                </v-list-item-content>
                <v-list-item-icon>
                  <!--Admin only-->
                  <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  </v-list-item-icon>

                

              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>


<script>
import TopBar from "@/components/commons/TopBar.vue";
export default {
  components: {
    TopBar
  },
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
    search: "",
  }),
computed: {
  filteredMembers: function(){
    return this.Members.filter((member) => {
      return member.nom.toLowerCase().includes(this.search.toLowerCase())
    }); 
  }
}
};
</script>