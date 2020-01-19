<template>
  <div>
    <TopBar title="Matchs"></TopBar>

    <v-content>
        <v-container fluid>
            <v-row align="center" justify="center">
            <v-col>
                <v-list three-line>
                    <v-list-item>
                        <v-subheader>Janvier 2020</v-subheader>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Diapos de la soirée de Noël</v-list-item-title>
                            <v-list-item-subtitle>Écrit le 10/01/20, par Allan</v-list-item-subtitle>
                            <v-list-item-subtitle>Merci encore à toutes et à tous d'être venu participer à la soirée au ...</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-subheader>Novembre 2019</v-subheader>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Félicitations à l'équipe des Juniors pour leur arrivée en Finale !</v-list-item-title>
                            <v-list-item-subtitle>Écrit le 20/11/19, par Allan</v-list-item-subtitle>
                            <v-list-item-subtitle>Encore bravo à l'équipe des Juniors et leur entraineur, ...</v-list-item-subtitle>
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