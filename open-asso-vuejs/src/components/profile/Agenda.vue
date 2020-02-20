<!--toroute
    tostyle
    toscript-->
<template name="component-name">
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-list subheader two-line v-for="(date, index) in allevents" :key="index">
          <v-subheader>{{date.date}}</v-subheader>
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
        date: "Demain",
        event: [["Entrainement", "10h-12h", "à la salle", ""]]
      },
      {
        date: "15/11/2019",
        event: [["Match contre Lens", "14h-16h", "Membres :", ""]]
      }
    ]
  }),

  computed: {
    getDate: function() {
      return (
        "Aujourd'hui" + (this.$moment(Date.now()).format("DD/MM/YYYY") + 1)
      );
    }
  }
};
</script>