<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-list subheader two-line v-for="(date, index) in allevents" :key="index">
          <v-subheader v-text="date.date"></v-subheader>
          <v-list-item v-for="(event, i) in date.events" :key="i" 
            @click="setCurrentEventId(event.id)"
          >
            <v-list-item-avatar>
              <v-img style="background-color:orange;"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="event.title"></v-list-item-title>
              <v-list-item-subtitle style="font-color:gray; font-size:12px" v-text="event.content"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text v-text="event.hour"></v-list-item-action-text>
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
      :title=currentTitle 
      :message=currentDescription
      :dialog.sync="dialog"
      :color="$route.meta.color"
    ></ContentDialog>

  </v-container>
</template>
<script>
import paths from "@/routes/paths.js";
import { db } from "@/db.js";
import ContentDialog from "@/components/dialogue/ContentDialog.vue";

export default {
  firestore: {
    events: db.collection("events")
  },
  components: {
    ContentDialog
  },
  data: () => ({
    dialog: false,
    events: [],
    createEvPath: paths.createevent.path,
    currentEventId: null,
    allevents: [
      {
        date: "Aujourd'hui",
        events: [
          {
            id: 1, title: "Projection match", hour: "19h-20", content: "Event 1", img: "img_link"  
          },
          {
            id: 2, title: "Projection match", hour: "19h-20", content: "Event 2", img: "img_link"          
          }
        ]
      },
      {
        date: "Demain",
        events: [
            { 
              id: 3, title: "Projection match", hour: "19h-20", content: "Event 3", img: "img_link"
            }
          ]
      }
    ]
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
        for(var dateIt=0;dateIt<this.allevents.length;dateIt++){
          for(var eventIt=0; eventIt<this.allevents[dateIt].events.length; eventIt++){
            if(this.allevents[dateIt].events[eventIt].id===this.currentEventId){
              return this.allevents[dateIt].events[eventIt];
            }
          }
        }
      }
      return null;
    },
    currentDescription() {
      if (this.currentEvent !== null) {
          return this.currentEvent.content;
      }
      return null;
    },
    currentTitle() {
        if (this.currentEvent !== null) {
            return this.currentEvent.title;
        }
        return null;
      }
    }

};
</script>