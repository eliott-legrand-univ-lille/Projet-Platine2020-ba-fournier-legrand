<!-- test -->
<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-list>
          <v-list-item v-for="(document, i) in documentsFromBase" :key="i" :inactive="true">
            <v-list-item-title v-text="document.name"></v-list-item-title>
            <v-list-item-icon>
              <!--<v-btn icon @click.stop="downloadDocument(document)">
                <v-icon>mdi-download</v-icon>
              </v-btn>-->
              <v-btn icon @click.stop="deleteFileFromStorage(document)">
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
          <v-text-field v-model="fileLabel" placeholder="Le nom du fichier"></v-text-field>
          <v-file-input v-model="newFile" accept=".pdf, .jpeg, .png, .rtf, .jpg" label="File input"></v-file-input>
          <v-btn @click="saveNewDocument">Ajouter</v-btn>
          <v-btn @click="newDoc=false">Annuler</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { db } from "@/db";
import { storage } from "@/db";
import { mapState } from "vuex";
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
    newDoc: false,
    newFile: null,
    fileLabel: null
  }),
  computed: {
    ...mapState(["currentUser", "userProfile"])
  },
  methods: {
    saveNewDocument() {
      if (this.newFile != null) {
        db.collection("documents")
          .add({
            label: this.fileLabel,
            user: this.currentUser.uid
          })
          .then(documentsRef => {
            var filePath = this.currentUser.uid.concat(
              "/",
              documentsRef.id,
              "/",
              this.newFile.name
            );
            storage
              .ref(filePath)
              .put(this.newFile)
              .then(fileSnapshot => {
                return fileSnapshot.ref.getDownloadURL().then(url => {
                  return documentsRef.update({
                    downloadUrl: url,
                    storageUri: fileSnapshot.metadata.fullPath
                  });
                });
              });
          })
          .then(() => this.fetchAllDocument());
      }
      this.newDoc = false;
    },
    fetchAllDocument() {
      db.collection("documents")
        .where("user", "==", this.currentUser.uid)
        .get()
        .then(querySnapshot => {
          let bilbo = [];
          querySnapshot.forEach(element => {
            bilbo.push({
              id: element.id,
              name: element.data().label,
              url: element.data().downloadUrl,
              path: element.data().storageUri
            });
          });

          return bilbo;
        })
        .then(data => {
          this.documentsFromBase = data;
        });
    },
    downloadDocument(document) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.open("GET", document.url);
      xhr.send();
    },
    deleteFileFromStorage(document) {
      // eslint-disable-next-line no-console
      console.log(document);
      storage
        .ref()
        .child(document.path)
        .delete();
      db.collection("documents")
        .doc(document.id)
        .delete();
      this.fetchAllDocument();
    }
  },
  
  mounted() {
    this.fetchAllDocument();
    /* eslint-disable no-console */
    //console.log("helloe theerro");
    //console.log(this.documentsFromBase);
    /* eslint-enable no-console */
  }
};
</script>
