<!--toroute
    tostyle
    toscript-->
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
        <v-card-text>
          {{selectedNotification.description}}
        </v-card-text>
        <v-card-text> Frais : {{selectedNotification.fees}}</v-card-text>
        <v-card-text>
          Adresse : {{selectedNotification.address}}
        </v-card-text>
        <v-card-actions>
          <v-btn>Je participe!</v-btn>
          <v-btn>Je décline...</v-btn>
          <v-btn @click="focusedEvent = false; selectedNotification = []">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { db } from "@/db";
import { mapState } from "vuex";
export default {
  data: () => ({
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
            })
        }
    }
  },
  computed: {
    ...mapState(["currentUser", "userProfile"])
  },
  mounted() {
    this.fetchAllNotifications();
  }
};
</script>