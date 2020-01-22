<template>
<div>
    <v-content>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
            <h1>Hello everybody we test here</h1>
            <v-divider></v-divider>
            <FormSubscribeUser></FormSubscribeUser>
        </v-container>
    </v-content>
</div>
</template>

<script>
import FormSubscribeUser from "@/components/subscribe/FormSubscribeUser.vue";


export default {
  name: 'TestingVue',
  components: {
      FormSubscribeUser,
  }
}
</script>