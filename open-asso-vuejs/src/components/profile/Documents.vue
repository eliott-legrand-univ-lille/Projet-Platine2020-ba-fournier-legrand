<!-- test -->
<template>
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
      <v-btn color="#1e35b4" @click="newDoc = true">
        <span class="white--text">Ajouter un document</span>
      </v-btn>
    </v-row>
      <v-dialog v-model="newDoc">
        <v-card>
        <v-card-title>Selectionnez le nouveau document à ajouter</v-card-title>
        <v-card-text>
        <v-file-input accept=".pdf,.jpeg,.png,.rtf,.jpg" label="File input"></v-file-input>
        <v-btn @click="newDoc = false">Ajouter</v-btn>
        <v-btn @click="newDoc=false">Annuler</v-btn>
        </v-card-text>
        </v-card>
      </v-dialog>
  </v-container>


</template>

<script>
export default {
  name: "Documents",
  data: () => ({
    documents: [
      "Factures",
      "Carte d'identité",
      "Fiche d'inscription",
      "Certificat médical"
    ],
    documentsFromBase: [],
    newDoc : false,

  }),
  methods: {

  }
};
</script>
