<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col>
        <v-list three-line v-for="n in Content.length" :key="n">
          <v-list-item>
            <v-list-item-avatar>
              <v-img style="background-color:orange;"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{Content[n-1].title}}</v-list-item-title>
              <v-list-item-subtitle>{{Content[n-1].text}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    Content: [
      {
        title: "Stratégie de l'aile de la Grue",
        text: "Passes longues, défense ultime"
      },
      {
        title: "Stratégie de la fureur du Lion",
        text: "Passes courtes, full offense"
      }
    ]
  })
};
</script>