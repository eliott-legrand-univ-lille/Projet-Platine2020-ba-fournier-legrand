<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="30"
        label="Nom de l'événement"
        required
      ></v-text-field>

      <v-textarea
        v-model="description"
        no-resize
        :counter="148"
        :rules="descriptionRules"
        label="Entrer votre description"
      ></v-textarea>

      <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent>
        <template v-slot:activator="{ on }">
          <v-text-field v-model="date" label="Date de l'événement" readonly v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="date" full-width scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>

      <v-text-field v-model="address" label="Rue" required></v-text-field>

      <v-row>
        <v-col>
          <v-text-field v-model="city" :rules="cityRules" label="Ville" required></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="postal" :rules="postalRules" label="Code postal" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn min-width="150" color="#1e35b4" class="orange--text">Tous membres</v-btn>
        </v-col>
        <v-col>
          <v-btn min-width="150" color="#1e35b4" class="orange--text" @click.stop="fetchMembers">Sélectionner des membres</v-btn>
        </v-col>
      </v-row>Cotisation par membre (en euros)
      <v-slider v-model="cotisation" min="0" max="70" color="#FF9052" thumb-label></v-slider>
      <v-row>
        <v-col>
          <v-btn min-width="150" color="#FF9052" @click="reset" class="white--text">Recommencer</v-btn>
        </v-col>
        <v-col>
          <v-btn min-width="150" color="#FF9052" class="white--text" @click.stop="confirm = true">Valider</v-btn>
        </v-col>
      </v-row>
    </v-form>

    <v-dialog v-model="dialog">
      <v-container class="d-flex align-center justify-center">
      <v-card style="width:50%" >
      <v-row v-for="(member, i) in allmembers" :key="i" style="width: 85%; margin-left: 5%">
        <v-checkbox v-model="selected" :label="member.nom" :value="member.id"></v-checkbox>
      </v-row>
      <v-btn @click="dialog = false" >{{selected.length}} membres sélectionné</v-btn>
      </v-card>
      </v-container>
    </v-dialog>
    <Ok-Dialog title="Évènement crée avec succès"
     message="L'ensemble des participants vont prochainement être notifiés
      et pourront ainsi accepter ou décliner votre invitation" color="#1e35b4" 
    btn1="Créer un nouvel évènement" btn2="Retour Accueil" :dial="confirm" :link1="again"
     :link2="done" @created="closedialogue"></Ok-Dialog>
  </v-container>
</template>

<script>
import { db } from "@/db";
import OkDialog from "@/components/dialogue/OkDialog.vue";
import paths   from "@/routes/paths.js";

export default {
  data: () => ({
    again : paths.newmember.path,
    done : paths.members.path,
    confirm : false,
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Le nom est obligatoire",
      v => (v && v.length <= 30) || "Le nom doit faire moins de 30 caractères"
    ],
    description: "",
    descriptionRules: [
      v => !!v || "La description est obligatoire",
      v =>
        (v && v.length <= 148) ||
        "La description doit faire moins de 148 caractères"
    ],
    address: "",
    city: "",
    cityRules: [v => !!v || "Ville obligatoire"],
    postal: "",
    postalRules: [
      v => !!v || "Code obligatoire",
      v => (v && v.length == 5) || "Non valide"
    ],
    cotisation: 0,
    date: new Date().toISOString().substr(0, 10),
    modal: false,
    selected: [],
    allmembers : [],
    dialog : false,
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        //récupérer l'ID de l'évènement
        db.collection("events").add({
          name: this.name,
          description: this.description,
          date: this.date,
          address: this.address,
          city: this.city,
          postal: this.postal,
          createdAt: new Date(),
          toInvite : this.selected,
          //ajouter les membres à qui il faut envoyer une invitation (leurs ID)
          //les participants à l'évènement par défaut l'utilisateur qui organise est dans la liste, on fera un update à chaque fois qu'un participant accepte
        });

        if(this.selected.length > 0){
          //ajout des nouvelles notifications
          this.selected.forEach(element => {
            db.collection("notifications").add({
              date: Date.now(),
              titre: "Vous avez reçu une invitation à un évènement",
              user : element,
              //on initialise le créateur 
              //on le lie a l'évènement nouvellement créé
              type: "event",

            })
          });
        }
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    fetchMembers(){
    db.collection("users").get().then(function(querySnapshot) {
    let bilbo = [];
    querySnapshot.forEach(function(doc) {
        bilbo.push({id : doc.id, nom : doc.data().firstname.concat(" ", doc.data().name)});
    });

     return bilbo;
      }).then((niama) => {
        this.allmembers = niama;
      }).then(() => this.dialog = true);
    },
    closedialogue(){
      this.dia=false;
      this.email = "";
      this.invitation = "";
      this.defaultVal = "Membre";
    }
  },

  components: {
    OkDialog
  },
};
</script>