<template>
  <div>
    <TopBar title="Évènements" color="#1e35b4" back></TopBar>

    <v-content>
      <v-container fill-height fluid>

        <v-row align="center" justify="center">
          <v-col>
            <v-list subheader two-line v-for="(date, index) in allevents" :key="index">
              <v-subheader v-text="date.date"></v-subheader>
              <v-list-item v-for="(event, i) in date.event" :key="i">
                <v-list-item-avatar>
                  <v-img  style="background-color:orange;"></v-img>
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

        <v-fab-transition>
          <v-btn color="orange" dark fixed bottom right fab link :to="createEvPath">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
      
      </v-container>  
    </v-content>
  </div>
</template>
<script>
import TopBar from "@/components/commons/TopBar.vue";
import paths from "@/routes/paths.js";
export default {
  components: {
    TopBar
  },
  data: () => ({
    createEvPath: paths.createevent.path,
    allevents: [
      {
        date: "Aujourd'hui",
        event: [
          ["Projection match", "19h-20", "Match de l'équipe de France", "img_link"],
          ["Barbecue", "18h", "Oulalah de la viande", ""]
        ]
      },
      {
        date: "Demain",
        event: [["Entrainement", "10h-12h", "à la salle", ""]]
      },
      {
        date: "15/11/2019",
        event: [["Match contre Lens", "14h-16h", "Membres :", ""]]
      }
    ]
  })
};
</script>