import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Home from "@/components/Home.vue";
import Events from "@/components/events/Events.vue";
import FormSubscribeUser from "@/components/subscribe/FormSubscribeUser.vue";
import TestingVue from "@/components/TestingVue.vue";
import FormSubscribeAsso from "@/components/subscribe/FormSubscribeAsso.vue";
import paths from "@/routes/paths.js";
import Profile from "@/components/profile/Profile";
import UpdateProfile from "@/components/profile/UpdateProfile.vue";
import Login from "@/components/Login";
import Agenda from "@/components/profile/Agenda";
import Documents from "@/components/profile/Documents";
import SportMenu from "@/components/sport/SportMenu";
import EventMenu from "@/components/events/MenuEvent";
import CreateEvent from "@/components/events/CreateEvent";
import CreateMatch from "@/components/sport/CreateMatch";
import MemberList from "@/components/members/MemberList.vue";
import Matchs from "@/components/sport/Matchs.vue";
import NextMatchs from "@/components/sport/NextMatchs.vue";
import ActualityList from "@/components/actualities/ActualityList.vue";
import Stats from "@/components/sport/Stats.vue";
import Accounting from "@/components/admin/Accounting.vue";
import NewMember from "@/components/members/NewMember"
import CreateActuality from "@/components/actualities/CreateActuality.vue";
import Notifications from "@/components/notifications/Notifications.vue";
//import { turquoise } from 'color-name';

Vue.use(Router)

//Define the routes to the different pages
const router = new Router({
  mode: 'history', // easier to read url ( no #)
  routes: [
    { path: paths.all.path,
     redirect: paths.home.path 
    },
    {
      path: paths.home.path,
      name: "Accueil",
      meta: {
        // Meta data for the back button , the color of the bar and navigation guard
        color: "#1e35b4",
        back: false,
        requiresAuth: false
      },
      component: Home
    },
    {
      path: paths.events.path,
      name: "Évènements",
      meta: {
        //other route meta...
        color: "#1e35b4",
        back: true,
        requiresAuth: false,
      },
      component: Events
    },
    {
      path: paths.createevent.path,
      name: "Créer un événement",
      meta: {
        //other route meta...
        color: "#1e35b4",
        back: true,
        requiresAuth: false
      },
      component: CreateEvent
    },
    {
      path: paths.creatematch.path,
      name: "Créer un match",
      meta: {
        //other route meta...
        color: "#673ab7",
        back: true
      },
      component: CreateMatch
    },
    {
      path: paths.test.path,
      name: "Test",
      meta: {
        //other route meta...
        color: "#673ab7",
        back: true,
        requiresAuth: true
      },
      component: TestingVue
    },
    {
      path: paths.userSubscribe.path,
      name: "Inscription",
      component: FormSubscribeUser
    },
    {
      path: paths.assoSubscribe.path,
      name: "Form Asso",
      component: FormSubscribeAsso
    },
    {
      path: paths.profile.path,
      name: "Profil",
      meta: {
        //other route meta...
        color: "#1e35b4",
        back: true
      },
      component: Profile
    },
    {
      path: paths.updateProfil.path,
      name: "Modifier le profil",
      meta: {
        //other route meta...
        color: "#1e35b4",
        back: true
      },
      component: UpdateProfile
    },
    {
      path: paths.login.path,
      name: "Login",
      meta: {
        //other route meta...
        color: "#1e35b4",
      },
      component: Login
    },
    {
      path: paths.agenda.path,
      name: "Agenda",
      meta: {
        //other route meta...
        color: "#1e35b4",
        back: true
      },
      component: Agenda
    },
    {
      path: paths.myDocuments.path,
      name: "Mes Documents",
      meta: {
        //other route meta...
        color: "#1e35b4",
        back: true
      },
      component: Documents
    },
    {
      path: paths.sports.path,
      name: "Sports",
      meta: {
        //other route meta...
        color: "#673ab7",
        back: true
      },
      component: SportMenu
    },
    {
      path: paths.eventsmenu.path,
      name: "Menu Évènements",
      meta: {
        //other route meta...
        color: "#1e35b4",
        back: true
      },
      component: EventMenu
    },
    {
      path: paths.members.path,
      name: "Liste des membres",
      meta: {
        //other route meta...
        color: "#1e35b4",
        back: true
      },
      component: MemberList
    },
    {
      path: paths.matchs.path,
      name: "Liste des matchs passés",
      meta: {
        //other route meta...
        color: "#673ab7",
        back: true
      },
      component: Matchs
    },
    {
      path: paths.nextmatchs.path,
      name: "Prochains matchs",
      meta: {
        //other route meta...
        color: "#673ab7",
        back: true
      },
      component: NextMatchs
    },
    {
      path: paths.actualities.path,
      name: "Actualités",
      meta: {
        //other route meta...
        color: "#673ab7",
        back: true
      },
      component: ActualityList
    },
    {
      path: paths.stats.path,
      name: "Statistiques",
      meta: {
        //other route meta...
        color: "#673ab7",
        back: true
      },
      component: Stats
    },
    {
      path: paths.accounting.path,
      name: "Comptabilité",
      meta: {
        //other route meta...
        color: "#1e35b4",
        back: true
      },
      component: Accounting
    },
    {
      path: paths.newmember.path,
      name: "Ajouter un membre",
      meta: {
        color: "#1e35b4",
        back: true
      },
      component: NewMember
    },
    {
      path: paths.newactu.path,
      name: "Ajouter une actualité",
      meta: {
        color: "#673ab7",
        back: true
      },
      component: CreateActuality
    },
    {
      path: paths.notifications.path,
      name: "Notifications",
      meta: {
        color: "#1e35b4",
        back: true,
      },
      component: Notifications
    },
  ]
});
// Navigation guard, if you are not loggged in the router will
// send you the login page
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router;
