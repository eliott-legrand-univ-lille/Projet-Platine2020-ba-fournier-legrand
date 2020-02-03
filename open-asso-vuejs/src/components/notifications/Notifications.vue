<!--toroute
    tostyle
    toscript-->
<template name="component-name">
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-list subheader two-line v-for="(date, index) in allevents" :key="index">
          <v-subheader v-text="date.date"></v-subheader>
          <v-list-item v-for="(event, i) in date.event" :key="i">
            <v-list-item-avatar>
              <v-img style="background-color:orange;"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="event[0]"></v-list-item-title>
              <v-list-item-subtitle style="font-color:gray; font-size:12px" v-text="event[2]"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text v-text="event[1]"></v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
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
    allNotifications = [],
    selectedNotification = {},

  }),
  methods: {
    fetchAllNotifications: function() {
        db.collection("notifications").where('toInvite', "array-contains" , this.currentUser.uid).get()
        .then(querySnapshot => {
          let bilbo = [];
          let eventObject = {};

          querySnapshot.forEach(element => {
              //si l'élément est de type évènement on récupère les éléments de l'évènement concerné
              if(element.data().type == "event"){
                bilbo.push({type : "event", idLinked : element.data().idLinked,read : element.data().read, date : element.data().date, titre : element.data().titre});         
              }
          });
          return bilbo;
          }).then(data => this.allevents = allNotifications);
    },
    getNotificationDetails : function(type, idEvent) {
        if(type == 'event'){
            db.collection("events").where(id, "==", idEvent).get().then(snapshot => {
                let eventDetails = {};
                snapshot.forEach(details => {
                    eventDetails.idEvent = event.id;
                    eventDetails.title = event.data().name;
                    eventDetails.date = event.data().date;
                    eventDetails.creationDate = event.data().createdAt;
                    eventDetails.description = event.data().description;
                    eventDetails.fees = event.data().fees;
                    eventDetails.address = event.data().address.concat(", ", event.data().postal, " ", event.data().city);
                    eventDetails.creator = event.data().createdBy;
                })
            })
        }
    }
  },
  computed: {
    ...mapState(["currentUser", "userProfile"])
  },
};
</script>