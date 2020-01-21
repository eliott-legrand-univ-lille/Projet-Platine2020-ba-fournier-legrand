<template>
  <div>
    <TopBar title="Statistiques" color="#673ab7" back></TopBar>

    <v-content>
        <v-container fluid>
            <v-row align="center" justify="center">
            <v-col>
                <v-list>
                    <v-list-item>
                        <v-subheader>Saison 2019-2020</v-subheader>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img  style="background-color:orange;"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Ratio de vitoires: 75%</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img  style="background-color:orange;"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Meilleur Score de la saison: 5-1</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img  style="background-color:orange;"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>MVP: Chuck Vandamme</v-list-item-title>
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