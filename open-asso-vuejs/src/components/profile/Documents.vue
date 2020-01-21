<!-- test -->
<template>
  <div>
    <TopBar title="Mes Documents" color="#1e35b4" back></TopBar>
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col>
            <v-list>
              <v-list-item v-for="(document, i) in documents" :key="i" :inactive="true">
                <v-list-item-title v-text="document"></v-list-item-title>
                <v-list-item-icon>
                  <v-btn icon>
                    <v-icon>mdi-download</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn color="#1e35b4"><span class="white--text">Ajouter un document</span></v-btn>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import TopBar from "@/components/commons/TopBar";
export default {
  name: "Documents",
  components: {
    TopBar
  },
  data: () => ({
    documents: [
      "Factures",
      "Carte d'identité",
      "Fiche d'inscription",
      "Certificat médical"
    ]
  })
};
</script>
