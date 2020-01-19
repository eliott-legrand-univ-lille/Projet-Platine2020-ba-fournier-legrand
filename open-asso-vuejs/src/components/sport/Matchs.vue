<template>
  <div>
    <TopBar title="Matchs" back></TopBar>

    <v-content>
        <v-container fluid>
            <v-row align="center" justify="center">
            <v-col>
                <v-list three-line>
                    <v-list-item>
                        <v-subheader>Saison 2019-2020</v-subheader>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img  style="background-color:orange;"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Match Vs Lille - Retour</v-list-item-title>
                            <v-list-item-subtitle>Le 25/11/19</v-list-item-subtitle>
                            <v-list-item-subtitle>Lieu: Lille</v-list-item-subtitle>
                            <v-list-item-subtitle>Score: 3-2</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img  style="background-color:orange;"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Match Vs Lille</v-list-item-title>
                            <v-list-item-subtitle>Date: 08/10/19</v-list-item-subtitle>
                            <v-list-item-subtitle>Lieu: Lille</v-list-item-subtitle>
                            <v-list-item-subtitle>Score: 2-3</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img  style="background-color:orange;"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Match Vs Reims</v-list-item-title>
                            <v-list-item-subtitle>Date: 20/09/19</v-list-item-subtitle>
                            <v-list-item-subtitle>Lieu: Reims</v-list-item-subtitle>
                            <v-list-item-subtitle>Résultats: 5-2</v-list-item-subtitle>
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
  }
};
</script>