<!-- tostyle
    toroute
-->
<template>
  <v-container>
    <v-row>
      <v-col v-for="(item,i) in Menu " :key="i">
        <v-row align="center" justify="center" class="grey lighten-5">
          <v-card
            width="150px"
            height="150px"
            class="d-flex flex-column justify-center"
            color="#1e35b4"
            link
            :to="item.link"
          >
            <v-card-title
              v-text="item.name"
              style="color:#FF9052;word-break:normal; text-align:center"
            ></v-card-title>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import paths from "@/routes/paths.js";
export default {
  data: () => ({
    Menu: [
      { name: "Accéder à mon agenda", link: paths.agenda.path },
      { name: "Évènements de l'association", link: paths.events.path },
      { name: "Créer un évènement", link: paths.createevent.path }
    ]
  })
};
</script>