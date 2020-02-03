<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <!-- to clean -->
        <v-subheader>Évènements à venir</v-subheader>
        <v-list subheader two-line v-for="(event, it) in events" :key="it">
          <v-list-item v-if="$moment(event.date) > $moment(new Date())" @click="setCurrentEventId(event.id)">
            <v-list-item-avatar>
              <v-img style="background-color:orange;"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="event.name"></v-list-item-title>
              <v-list-item-subtitle style="font-color:gray; font-size:12px" v-text="event.description"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text v-text="$moment(event.date).format('DD-MM-YY')"></v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-subheader>Évènements passés</v-subheader>
        <v-list subheader two-line v-for="event in events" :key="event.id">
          <v-list-item v-if="$moment(event.date) <= $moment(new Date())" @click="setCurrentEventId(event.id)">
            <v-list-item-avatar>
              <v-img style="background-color:orange;"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="event.name"></v-list-item-title>
              <v-list-item-subtitle style="font-color:gray; font-size:12px" v-text="event.description"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text v-text="$moment(event.date).format('DD-MM-YY')"></v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        
      </v-col>
    </v-row>

    <!-- create an event -->
    <v-fab-transition>
      <v-btn color="orange" dark fixed bottom right fab link :to="createEvPath">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>

    

    <ContentDialog 
      :name=currentTitle 
      :description=currentDescription
      :date=currentDate
      :address=currentAddress
      :dialog.sync="dialog"
      :color="$route.meta.color"
    ></ContentDialog>

  </v-container>
</template>
<script>
import paths from "@/routes/paths.js";
import { db } from "@/db.js";
import ContentDialog from "@/components/events/EventsDialog.vue";

export default {
  firestore: {
    events: db.collection("events").orderBy("date", "desc")
  },
  components: {
    ContentDialog
  },
  data: () => ({
    dialog: false,
    events: [],
    createEvPath: paths.createevent.path,
    currentEventId: null,
  }),
  methods: {
      setCurrentEventId(id) {
          this.currentEventId = id;
          this.dialog = true
      }
  },
  computed: {
    // trigger when an event is clicked and return the content of the event clicked 
    currentEvent() {
      if (this.currentEventId !== null) {

          for(var eventIt=0; eventIt<this.events.length; eventIt++){
            if(this.events[eventIt].id===this.currentEventId){
              return this.events[eventIt];
            }
          }
      }
      return null;
    },
    currentDescription() {
      if (this.currentEvent !== null) {
          return this.currentEvent.description;
      }
      return null;
    },
    currentTitle() {
        if (this.currentEvent !== null) {
            return this.currentEvent.name;
        }
        return null;
    },
    currentAddress() {
        if (this.currentEvent !== null) {
            return this.currentEvent.address + ", " + 
            this.currentEvent.postal + " " + this.currentEvent.city;
        }
        return null;
    },
    currentDate() {
        if (this.currentEvent !== null) {
            return this.$moment(this.currentEvent.date).format('DD/MM/YYYY');
        }
        return null;
    }
  },

};
</script>