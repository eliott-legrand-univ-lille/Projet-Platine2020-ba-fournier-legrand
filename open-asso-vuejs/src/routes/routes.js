import Home from "@/components/Home.vue";
import Events from "@/components/Events/Events.vue";
import FormSubscribeUser from "@/components/FormSubscribeUser.vue";
import TestingVue from "@/components/TestingVue.vue";
import FormSubscribeAsso from "@/components/FormSubscribeAsso.vue";
import paths from "@/routes/paths.js";
import Profile2 from "@/components/profile/Profile2"

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
        path: "/user",
        name: "Form User",
        component: FormSubscribeUser
    },
    {
        path: "/asso",
        name: "Form Asso",
        component: FormSubscribeAsso
    },
    {
      path: "/profil",
      name: "Form Asso",
      component: Profile2
    }
    
];

export default routes;
