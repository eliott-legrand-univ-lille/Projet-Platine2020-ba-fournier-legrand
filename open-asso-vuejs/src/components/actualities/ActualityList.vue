<template>
  <div>
    <TopBar title="Actualités"></TopBar>

    <v-content>
        <v-container fluid>
            <v-row key="0">
                <v-col md="4" cols="6" class="pa-3 d-flex flex-column">
                <v-card class="elevation-5 flex d-flex flex-column">
                    <v-img
                        src="@/assets/LogoApp.png"
                        height="125"
                        class="grey darken-4"
                    ></v-img>
                    <v-card-title style="word-break:normal" class="title">Diapos de la soirée de Noël</v-card-title>
                    <v-card-text style="word-break:normal" class="text--primary flex">
                        <div>Écrit le 10/01/20, par Allan</div>
                        <div>Encore merci à tous !</div>
                    </v-card-text>
                </v-card>
                </v-col>

                <v-col md="4" cols="6" class="pa-3 d-flex flex-column">
                <v-card class="elevation-5 flex d-flex flex-column">
                    <v-img
                    src="@/assets/LogoApp.png"
                    height="125"
                    class="grey darken-4"
                    ></v-img>
                    <v-card-title class="title">Bonne année !</v-card-title>
                    <v-card-text style="word-break:normal" class="text--primary flex">
                        <div>Écrit le 01/01/20, par Allan</div>
                    </v-card-text>
                </v-card>
                </v-col>

                <v-col md="4" cols="6" class="pa-3 d-flex flex-column">
                <v-card class="elevation-5 flex d-flex flex-column">
                    <v-img
                    src="@/assets/LogoApp.png"
                    height="125"
                    class="grey darken-4"
                    ></v-img>
                    <v-card-title class="title">Nouvelle rentrée</v-card-title>
                    <v-card-text style="word-break:normal" class="text--primary flex">
                            <div>Écrit le 07/09/19, par Allan</div>
                    </v-card-text>
                </v-card>
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