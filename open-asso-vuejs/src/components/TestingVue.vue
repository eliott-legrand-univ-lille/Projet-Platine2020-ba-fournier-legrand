<template>
    <div>
        <h1>Hello everybody we test here</h1>
        <Profile2></Profile2>
        <v-divider></v-divider>
        <Documents></Documents>
        <v-divider></v-divider>
        <Agenda></Agenda>
        <v-divider></v-divider>
        <MainMenu></MainMenu>
    </div>
</template>

<script>
import Profile2 from '@/components/profile/Profile2.vue';
import Documents from '@/components/profile/Documents.vue';
import Agenda from '@/components/Agenda.vue';
import MainMenu from '@/components/MainMenu.vue';

export default {
  name: 'TestingVue',
  components: {
      Profile2, 
      Documents,
      Agenda,
      MainMenu
  }
}
</script>