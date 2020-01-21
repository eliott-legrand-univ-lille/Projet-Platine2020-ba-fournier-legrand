<template>
  <div>
    <TopBar title="Matchs" color="#673ab7" back></TopBar>

    <v-content>
        <v-container fluid>
            <v-row align="center" justify="center">
            <v-col>
                <v-list three-line 
                  v-for="n in Content.length"
                  :key="n"
                >
                    <v-list-item v-if="Content[n-1].season">
                        <v-subheader>{{Content[n-1].season}}</v-subheader>
                    </v-list-item>
                    <v-list-item v-else>
                        <v-list-item-avatar>
                            <v-img  style="background-color:orange;"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{Content[n-1].title}}</v-list-item-title>
                            <v-list-item-subtitle>Le {{Content[n-1].date}}</v-list-item-subtitle>
                            <v-list-item-subtitle>Lieu: {{Content[n-1].adress}}</v-list-item-subtitle>
                            <v-list-item-subtitle>Score: {{Content[n-1].result}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
            </v-row>
        </v-container>
    </v-content>
  </div>
</template>

<script>
import TopBar from "@/components/commons/TopBar.vue";
export default {
  components: {
    TopBar
  },
  data: () => ({
    Content: [
      {
        season: "Saison 2019-2020"
      },
      { 
        title: "Match Vs Lille", 
        date: "08/10/19", 
        adress:"Lille", 
        result: "2-3" 
        },
        { 
        title: "Match Vs Reims", 
        date: "20/09/19", 
        adress:"Reims", 
        result: "5-3" 
        },
    ]
  })
};
</script>