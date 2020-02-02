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
                label="Entrer votre description"
            ></v-textarea>

            <v-row>
                <v-col>
                    <v-btn min-width="150" color="#FF9052" @click="reset" class="white--text">Recommencer</v-btn>
                </v-col>
                <v-col>
                    <v-btn min-width="150" color="#FF9052" @click="validate" class="white--text">Valider</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>
<script>
import { mapState } from "vuex";
import { db } from "@/db";

export default {
    data: () => ({
        title: "",
        titleRules: [
            v => !!v || "Le titre est obligatoire",
            v => (v && v.length <= 100) || "Le titre doit faire moins de 100 caractères"
        ],
        content: "",
        valid: true
    }),
    computed: {
        ...mapState(['userProfile','currentUser'])
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) { 
                db.collection("articles")
                    .add({
                        userID: this.currentUser.uid,
                        userName: this.userProfile.name,
                        title: this.title,
                        content: this.content,
                        createdAt: new Date()
                    })
                    .then(function(docRef) {
                        // eslint-disable-next-line no-console
                        console.log("Actuality written with ID: ", docRef.id);
                    })
                    .catch(function(error) {
                        // eslint-disable-next-line no-console
                        console.error("Error adding actuality: ", error);
                    });              
            }
        },
    reset() {
        this.$refs.form.reset();
    }
  }
}
</script>