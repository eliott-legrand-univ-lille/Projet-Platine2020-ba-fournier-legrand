<!--toroute
    tostyle jolie invitation organisation par la date subheader OK
    toscript je participe je décline, notification à la poubelle, vider le conntenue quoi, notification lue ou non lue-->
<template name="component-name">
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-list subheader two-line>
          <v-subheader>POPOPO</v-subheader>
          <v-list-item v-for="(notification, i) in allNotifications" :key="i" @click="getNotificationDetails(notification.type, notification.idLinked);">
            <v-list-item-avatar>
              <v-img style="background-color:orange;"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="notification.titre"></v-list-item-title>
              <v-list-item-subtitle style="font-color:gray; font-size:12px" v-text="notification.titre"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text v-text="notification.date"></v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-dialog v-model="focusedEvent">
      <v-card>
        <v-card-title>
          {{selectedNotification.title}}
        </v-card-title>
        <v-card-subtitle>
          Organisé par {{selectedNotification.createdBy}} , Pour le {{selectedNotification.date}}
        </v-card-subtitle>
        <v-card-text v-if="inEvent == 1" class="orange--text">Vous participez déjà à cette évènement</v-card-text>
        <v-card-text v-if="inEvent == -1" class="orange--text">Vous avez décliné cet évènement</v-card-text>
        <v-card-text>
          {{selectedNotification.description}}
        </v-card-text>
        <v-card-text> Frais : {{selectedNotification.fees}}</v-card-text>
        <v-card-text>
          Adresse : {{selectedNotification.address}}
        </v-card-text>
        <v-card-actions>
          <v-label v-if="inEvent != 0" class="orange--text">Je change d'avis</v-label>
          <v-btn v-if="inEvent != 1" @click="addParticipant(selectedNotification.idEvent, true)">Je participe!</v-btn>
          <v-btn v-if="inEvent != -1" @click="addParticipant(selectedNotification.idEvent, false)">Je décline...</v-btn>

          <v-btn @click="focusedEvent = false; selectedNotification = []">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--<v-dialog v-model="confirme"></v-dialog>-->
  </v-container>
</template>

<script>
import { db } from "@/db";
import { mapState } from "vuex";
//import func from '../../../vue-temp/vue-editor-bridge';
export default {
  data: () => ({
    //confirme = false,
    allevents: [
      {
        date: "Aujourd'hui",
        event: [
          [
            "Projection match",
            "19h-20",
            "Match de l'équipe de France",
            "img_link"
          ],
          ["Barbecue", "18h", "Oulalah du viande", ""]
        ]
      },
      {
        date: "Hier",
        event: [["Entrainement", "10h-12h", "à la salle", ""]]
      },
      {
        date: "15/11/2019",
        event: [["Match contre Lens", "14h-16h", "Membres :", ""]]
      }
    ],
    allNotifications : [],
    selectedNotification : {},
    focusedEvent : false,
    inEvent : 0,

  }),
  methods: {
    fetchAllNotifications: function() {
        db.collection("notifications").where('user', '==' , this.currentUser.uid).get()
        .then(querySnapshot => {
          let bilbo = [];
          querySnapshot.forEach(element => {
              //si l'élément est de type évènement on récupère les éléments de l'évènement concerné
              if(element.data().type == "event"){
                bilbo.push({type : "event", idLinked : element.data().idLinked,read : element.data().read, date : element.data().date, titre : element.data().titre});         
              }
          });
          return bilbo;
          }).then(data => {
          this.allNotifications = data;
          });
    },
    getNotificationDetails : function(type, idEvent) {
        if(type == 'event'){
            db.collection("events").doc(idEvent).get().then(details => {
                let eventDetails = {};
                
                    eventDetails.idEvent = details.id;
                    eventDetails.title = details.data().name;
                    eventDetails.date = details.data().date;
                    eventDetails.creationDate = details.data().createdAt;
                    eventDetails.description = details.data().description;
                    eventDetails.fees = details.data().fees;
                    eventDetails.address = details.data().address.concat(", ", details.data().postal, " ", details.data().city);
                    eventDetails.creator = details.data().createdBy;
                
                return eventDetails;
            }).then(data => {
              this.selectedNotification = data;
              this.focusedEvent = true;
              //this.alreadyIn();
            })
        }
    },
    addParticipant : function(idEvent, accept){
      let eventRef = db.collection("events").doc(idEvent);
      db.runTransaction(t => {
        return t.get(eventRef).then(doc => {
          let invited = doc.data().toInvite.slice();
          //L'utilisateur donne sa réponse donc on peut le supprimer de la liste d'invités
          let index = invited.indexOf(this.currentUser.id);
          if(index > -1){
            invited.splice(index, 1);
          }
          //s'il accepte de participer on l'ajoute à la liste des participants
          if(accept){
          let participantL = doc.data().participant.slice().push(this.currentUser.uid);
          t.update(eventRef, {participant : participantL});
          }else{
            //si l'utilisateur refuse de participer on le retire de la liste des participants dans le cas ou il aurait accepté auparavant
            let participantR = doc.data().participant.slice();
            index = participantR.indexOf(this.currentUser.id);
            if(index > -1){
              participantR.splice(index, 1);
            }
          }
          t.update(eventRef, {toInvite : invited});
        })
      });
    },
    alreadyIn : function(idEvent){
      db.collection("events").doc(idEvent).get().then(details => {
        //il participe déjà à l'évènement
        if(details.data().participant.include(this.currentUser.id)){
          return 1;
        }
        //il n'a pas encore répondu à l'invitation
        if(details.data().toInvite.include(this.currentUser.id)){
          return 0;
        }
        //il a refusé l'invitation
        return -1;
      }).then(response => {
        this.inEvent = response;
      })
    },
  },
  computed: {
    ...mapState(["currentUser", "userProfile"])
  },
  mounted() {
    this.fetchAllNotifications();
  }
};
</script>