<!--toroute-->
<!--tostyle-->
<!--toscript-->
<template>
  <v-card
    class="mx-auto"
    style="max-width: 500px;"
  >
    <v-img :aspect-ratio="16/9" src="https://mon-artisan.pro/img/annuaire/profils/profil_12.png">
    </v-img>
    <v-btn>Modifier la photo de profil</v-btn>
        <v-list class="d-flex justify-content flex-column">
          <v-list-item><div>Jonathan Lee</div></v-list-item>
          <v-list-item> <div>membre depuis le 29/08/2018</div></v-list-item>
          <v-list-item> <v-btn> Mes documents </v-btn></v-list-item>
          <v-list-item> <v-btn> Mes statistiques </v-btn></v-list-item>
          <v-list-item><v-btn> Mon agenda </v-btn></v-list-item>
          
        </v-list>
  </v-card>
</template>
<script>
export default {
  name: 'Profile2'
}
</script>