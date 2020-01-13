import Home from "@/components/Home.vue";
import Events from "@/components/Events/Events.vue";
import FormSubscribeUser from "@/components/subscribe/FormSubscribeUser.vue";
import TestingVue from "@/components/TestingVue.vue";
import FormSubscribeAsso from "@/components/subscribe/FormSubscribeAsso.vue";
import paths from "@/routes/paths.js";
import Profile from "@/components/profile/Profile";
import Agenda from "@/components/profile/Agenda";
import Documents from "@/components/profile/Documents";

//Define the routes to the different pages
const routes = [
    {
      path: paths.home.path,
      name: "Home",
      component: Home
    },
    {
      path: paths.events.path,
      name: "Events",
      component: Events
    }, 
    {
      path: paths.test.path,
      name: "Test",
      component: TestingVue
    },
    {
      path: paths.userSubscribe.path,
      name: "Form User",
      component: FormSubscribeUser
    },
    {
      path: paths.assoSubscribe.path,
      name: "Form Asso",
      component: FormSubscribeAsso
    },
    {
      path: paths.profile.path,
      name: "Profil user",
      component: Profile
    },
    {
      path: paths.agenda.path,
      name: "Agenda",
      component: Agenda
    },
    {
      path: paths.myDocuments.path,
      name: "Mes Documents",
      component: Documents
    }
    
];

export default routes;
