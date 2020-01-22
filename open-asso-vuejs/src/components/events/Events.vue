<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-list subheader two-line v-for="(date, index) in allevents" :key="index">
          <v-subheader v-text="date.date"></v-subheader>
          <v-list-item v-for="(event, i) in date.events" :key="i" 
            @click="setCurrentEventId(event.id); dialog = true"
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

    <!-- Show event details: solution from https://stackoverflow.com/a/53409893 -->
    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <p>{{ currentDescription }}</p>
        </v-card>
      </v-dialog>
    </v-row>

  </v-container>
</template>
<script>
import paths from "@/routes/paths.js";
import { db } from "../../db";

export default {
  firestore: {
    documents: db.collection("documents")
  },
  data: () => ({
    dialog: false,
    documents: [],
    createEvPath: paths.createevent.path,
    currentEventId: null,
    allevents: [
      {
        date: "Aujourd'hui",
        events: [
          {
            id: 1,
            title: "Projection match",
            hour: "19h-20",
            content: "Event 1",
            img: "img_link"  
          },
          {
            id: 2,
            title: "Projection match",
            hour: "19h-20",
            content: "Event 2",
            img: "img_link"          
          }
        ]
      },
      {
        date: "Demain",
        events: [
            { 
              id: 3,
              title: "Projection match",
              hour: "19h-20",
              content: "Event 3",
              img: "img_link"
            }
          ]
      },
      {
        date: "15/02/2020",
        events: [
            {
              id: 4,
              title: "Projection match",
              hour: "19h-20",
              content: "Event 4",
              img: "img_link"
            }
        ]
      }
    ]
  }),
  methods: {
      setCurrentEventId(id) {
          this.currentEventId = id;
      }
  },
  computed: {
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
    }
  }

};
</script>