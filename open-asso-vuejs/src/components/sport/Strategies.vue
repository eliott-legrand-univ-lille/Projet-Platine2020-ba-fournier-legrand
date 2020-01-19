<template>
  <div>
    <TopBar title="Stratégies" back></TopBar>

    <v-content>
        <v-container fluid>
            <v-row align="center" justify="center">
            <v-col>
                <v-list three-line>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img style="background-color:orange;"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Stratégie de l'aile de la Grue</v-list-item-title>
                            <v-list-item-subtitle>Passes longues, défense ultime</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img  style="background-color:orange;"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Stratégie de la fureur du Lion</v-list-item-title>
                            <v-list-item-subtitle>Passes courtes, full offense</v-list-item-subtitle>
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