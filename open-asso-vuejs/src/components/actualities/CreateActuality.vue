<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>

            <v-text-field
                v-model="title"
                :counter="100"
                :rules="titleRules"
                label="Titre de l'article"
                required
            ></v-text-field>

            <v-textarea
                v-model="content"
                :counter="1000"
                :rules="contentRules"
                label="Entrer votre description"
            ></v-textarea>

            <v-row>
                <v-col>
                    <v-btn width="100%" color="#FF9052" @click="reset" class="white--text">Recommencer</v-btn>
                </v-col>
                <v-col>
                    <v-btn width="100%" color="#FF9052" :disabled="currentUser===null" @click="validate" class="white--text">Valider</v-btn>
                </v-col>
            </v-row>
        </v-form>

        <Ok-Dialog title="Actualité créée avec succès"
            btn1="Nouvelle actualité" btn2="Retour à l'accueil"
            :dial="this.dialog" :link1="again"
            :link2="done" @created="closeDialog"
        />

    </v-container>
</template>
<script>
import { mapState } from "vuex";
import { db } from "@/db";
import OkDialog from "@/components/dialogue/OkDialog.vue";
import paths from "@/routes/paths.js";

export default {
    data: () => ({
        title: "",
        titleRules: [
            v => !!v || "Le titre est obligatoire",
            v => (v && v.length <= 100) || "Le titre doit faire moins de 100 caractères"
        ],
        content: "",
        contentRules: [
            v => !!v || "Le contenu est obligatoire",
            v => (v && v.length <= 1000) || "Le contenu doit faire moins de 1000 caractères"
        ],
        valid: true,
        dialog: false,
        again : paths.newactu.path,
        done : paths.home.path,
        confirm : false,
    }),
    components: {
        OkDialog
    },
    computed: {
        ...mapState(['userProfile','currentUser'])
    },
    methods: {
        validate() {
            if (this.$refs.form.validate() && this.currentUser != null) { 
                db.collection("articles")
                    .add({
                        userID: this.currentUser.uid,
                        userName: this.userProfile.title,
                        title: this.title,
                        content: this.content,
                        createdAt: new Date()
                    })
                    .then(function(docRef) {
                        // can't use 'this' here
                        // eslint-disable-next-line no-console
                        console.log("Actuality written with ID: ", docRef.id);
                    })
                    .then(() => {
                        // if updated successfully show the dialog
                        this.dialog=true;  
                    })
                    .catch(function(error) {
                        // eslint-disable-next-line no-console
                        console.error("Error adding actuality: ", error);
                    });
            }
        },
        reset() {
            this.$refs.form.reset();
        },
        closeDialog() {
            this.dialog = false;
            this.reset();
        }
    },
    
}
</script>