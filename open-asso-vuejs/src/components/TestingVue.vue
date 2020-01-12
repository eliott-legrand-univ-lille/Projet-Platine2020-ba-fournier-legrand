<template>
    <div>
        <h1>Hello everybody we test here</h1>
        <Profile></Profile>
        <v-divider></v-divider>
        <Documents></Documents>
        <v-divider></v-divider>
        <Agenda></Agenda>
        <FormSubscribeUser></FormSubscribeUser>
    </div>
</template>

<script>
import Profile from '@/components/profile/Profile.vue';
import Documents from '@/components/profile/Documents.vue';
import Agenda from '@/components/profile/Agenda.vue';
import FormSubscribeUser from "@/components/subscribe/FormSubscribeUser.vue";


export default {
  name: 'TestingVue',
  components: {
      Profile, 
      Documents,
      Agenda,
      FormSubscribeUser
  }
}
</script>