<!--toroute
    tostyle jolie invitation organisation par la date subheader OK
    toscript je participe je décline, notification à la poubelle, vider le conntenue quoi, notification lue ou non lue-->
<template name="component-name">
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-list subheader two-line>
          <v-subheader>POPOPO</v-subheader>
          <v-list-item
            v-for="(notification, i) in allNotifications"
            :key="i"
            @click="getNotificationDetails(notification.type, notification.idLinked);"
          >
            <v-list-item-avatar>
              <v-img style="background-color:orange;"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="notification.titre"></v-list-item-title>
              <v-list-item-subtitle
                style="font-color:gray; font-size:12px"
                v-text="notification.titre"
              ></v-list-item-subtitle>
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
        <v-card-title>{{selectedNotification.title}}</v-card-title>
        <v-card-subtitle>Organisé par {{selectedNotification.createdBy}} , Pour le {{selectedNotification.date}}</v-card-subtitle>
        <v-card-text v-if="inEvent == 1" class="orange--text">Vous participez déjà à cette évènement</v-card-text>
        <v-card-text v-if="inEvent == -1" class="orange--text">Vous avez décliné cet évènement</v-card-text>
        <v-card-text>{{selectedNotification.description}}</v-card-text>
        <v-card-text>Frais : {{selectedNotification.fees}}</v-card-text>
        <v-card-text>Adresse : {{selectedNotification.address}}</v-card-text>
        <v-card-actions>
          <v-label v-if="inEvent != 0" class="orange--text">Je change d'avis</v-label>
          <v-btn
            v-if="inEvent != 1"
            @click="addParticipant(selectedNotification.idEvent, true)"
          >Je participe!</v-btn>
          <v-btn
            v-if="inEvent != -1"
            @click="addParticipant(selectedNotification.idEvent, false)"
          >Je décline...</v-btn>

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
export default {
  data: () => ({
    //confirme = false,
    allNotifications: [],
    selectedNotification: {},
    focusedEvent: false,
    inEvent: 0
  }),
  methods: {
    fetchAllNotifications: function() {
      db.collection("notifications")
        .where("user", "==", this.currentUser.uid)
        .get()
        .then(querySnapshot => {
          let bilbo = [];
          querySnapshot.forEach(element => {
            //si l'élément est de type évènement on récupère les éléments de l'évènement concerné
            if (element.data().type == "event") {
              bilbo.push({
                type: "event",
                idLinked: element.data().idLinked,
                read: element.data().read,
                date: element.data().date,
                titre: element.data().titre
              });
            }
          });
          return bilbo;
        })
        .then(data => {
          this.allNotifications = data;
        });
    },
    getNotificationDetails: function(type, idEvent) {
      /* eslint-disable no-console */
      console.log(this.inEvent);
      /* eslint-enable no-console */
      if (type == "event") {
        db.collection("events")
          .doc(idEvent)
          .get()
          .then(details => {
            let eventDetails = {};

            eventDetails.idEvent = details.id;
            eventDetails.title = details.data().name;
            eventDetails.date = details.data().date;
            eventDetails.creationDate = details.data().createdAt;
            eventDetails.description = details.data().description;
            eventDetails.fees = details.data().fees;
            eventDetails.address = details
              .data()
              .address.concat(
                ", ",
                details.data().postal,
                " ",
                details.data().city
              );
            eventDetails.creator = details.data().createdBy;

            return eventDetails;
          })
          .then(data => {
            this.selectedNotification = data;
            this.focusedEvent = true;
            this.alreadyIn(idEvent);
          });
      }
    },
    addParticipant: function(idEvent, accept) {
      db
        .collection("events")
        .doc(idEvent)
        .get()
        .then(doc => {
          var element = {
            participant: doc.data().participant,
            invited: doc.data().toInvite
          };
          return element;
        })
        .then(toChange => {
          /* eslint-disable no-console */

          console.log(toChange);
          /* eslint-enable no-console */
          var index;
          index = toChange.invited.indexOf(this.currentUser.uid);
          if (index > -1) {
            //on le retire des invités
            toChange.invited.splice(this.currentUser.uid, 1);
          }
          index = toChange.participant.indexOf(this.currentUser.uid);
          if (accept) {
            if(index <= -1){
              toChange.participant.push(this.currentUser.uid);
            }
          } else {
            if(index >= -1){
              toChange.participant.splice(this.currentUser.uid, 1);
            }
          }
          let batch = db.batch();
           /* eslint-disable no-console */

          console.log(toChange);
          /* eslint-enable no-console */
          let eventRef2 = db.collection("events").doc(idEvent);
          batch.update(eventRef2, {toInvite : toChange.invited});
          batch.update(eventRef2, {participant : toChange.participant});
          batch.commit();
        }).then(() => {
          this.focusedEvent = false;
        });
    },
    alreadyIn: function(idEvent) {
      /* eslint-disable no-console */

          console.log(idEvent);
          /* eslint-enable no-console */
      db.collection("events")
        .doc(idEvent)
        .get()
        .then(doc => {
          var element = {
            participant: doc.data().participant,
            invited: doc.data().toInvite
          };
          return element;
        })
        .then(details => {
          //il participe déjà à l'évènement
          if (details.participant.includes(this.currentUser.uid)) {
            return 1;
          }
          //il n'a pas encore répondu à l'invitation
          if (details.invited.includes(this.currentUser.uid)) {
            return 0;
          }
          //il a refusé l'invitation
          return -1;
        })
        .then(response => {
          this.inEvent = response;
        });
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