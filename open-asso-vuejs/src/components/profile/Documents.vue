<!-- test -->
<template>
  <v-card class="mx-auto"
      style="max-width: 550px;"
  >
    <v-btn color="success">Ajouter un document</v-btn>
      <v-list two-line>
        <v-list-item v-for="(document, i) in documents"
                      :key="i"
                      :inactive="true">
          <v-list-item-title v-text="document"></v-list-item-title>
          <v-list-item-icon>
            <v-btn><v-icon>mdi-download</v-icon></v-btn>
            <v-btn><v-icon>delete</v-icon></v-btn>
            </v-list-item-icon>
        </v-list-item>    
      </v-list>
  </v-card>
</template>
<script>
export default{
    name: 'Documents',
    data: () => ({
    documents: [
      'Factures',
      'Carte d\'identité',
      'Fiche d\'inscription',
      'Certificat médical'
    ],
  }),
}
</script>
