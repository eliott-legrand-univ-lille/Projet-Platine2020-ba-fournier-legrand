<!--toroute
    tostyle
    toscript (in case of admin type user)-->
<template name="component-name">
  <div>
    <TopBar title="Membres"></TopBar>
    <v-content>
      <v-container fill-height fluid>
        <!-- <v-row>
          <v-autocomplete
            :item="Members"
            hide-selected
            placeholder="Entrez le nom ou le prénom d'un membre"
            prepend-icon="mdi-database-search"></v-autocomplete>
        </v-row>-->
        <v-row justify="center">
          <v-col>
            <!--Admin only-->
            <v-btn color="success">Ajouter un Membre</v-btn>
            <v-list>
              <v-list-item two-line v-for="member in Members" :key="member.noù" :inactive="true">
                <v-list-item-content>
                  <v-list-item-title v-text="member.nom"></v-list-item-title>
                  <v-list-item-subtitle v-text="member.role"></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-icon>
                  <!--Admin only-->
                  <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  </v-list-item-icon>
                </v-list-item-action>
                

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
    ]
  })
};
</script>