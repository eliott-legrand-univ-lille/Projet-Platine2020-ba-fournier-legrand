<!-- test -->
<template>
<div>
  <TopBar title="Mes Documents"></TopBar>
  <v-content>  
    <v-container>
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
    </v-container>
  </v-content>
</div>
</template>

<script>
import TopBar from "@/components/commons/TopBar";
export default{
    name: 'Documents',
    components: {
      TopBar
    },
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
