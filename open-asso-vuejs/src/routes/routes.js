import Home from "@/components/Home.vue";
import Events from "@/components/events/Events.vue";
import FormSubscribeUser from "@/components/subscribe/FormSubscribeUser.vue";
import TestingVue from "@/components/TestingVue.vue";
import FormSubscribeAsso from "@/components/subscribe/FormSubscribeAsso.vue";
import paths from "@/routes/paths.js";
import Profile from "@/components/profile/Profile";
import Login from "@/components/Login";
import Agenda from "@/components/profile/Agenda";
import Documents from "@/components/profile/Documents";
import SportMenu from "@/components/sport/SportMenu";
import EventMenu from "@/components/events/MenuEvent";
import CreateEvent from "@/components/events/CreateEvent";
import CreateMatch from "@/components/sport/CreateMatch";
import MemberList from "@/components/members/MemberList.vue";
import Matchs from "@/components/sport/Matchs.vue";
import Strategies from "@/components/sport/Strategies.vue";
import ActualityList from "@/components/actualities/ActualityList.vue";
import Stats from "@/components/sport/Stats.vue";
import ComptaMenu from "@/components/admin/ComptaMenu";
import BudgetMenu from "@/components/admin/BudgetMenu";
import AdminMenu from "@/components/admin/AdminMenu";

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
      path: paths.createevent.path,
      name: "CreateEvent",
      component: CreateEvent
    }, 
    {
      path: paths.creatematch.path,
      name: "CreateMatch",
      component: CreateMatch
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
    path: paths.login.path,
    name: "login",
    component: Login
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
    },
    {
      path: paths.sports.path,
      name: "Menu Sports",
      component: SportMenu
    },
    {
      path: paths.eventsmenu.path,
      name: "Menu Évènements",
      component: EventMenu
    },
    {
      path: paths.members.path,
      name: "Liste des membres",
      component: MemberList
    },
    {
      path: paths.matchs.path,
      name: "Liste des matchs",
      component: Matchs
    },
    {
      path: paths.strats.path,
      name: "Liste des strats",
      component: Strategies
    },
    {
      path: paths.actualities.path,
      name: "Actualités",
      component: ActualityList
    },
    {
      path: paths.stats.path,
      name: "Statistiques",
      component: Stats
    },
    {
      path: paths.manage.path,
      name: "Gestion",
      component : AdminMenu
    },
    {
      path: paths.accounting.path,
      name: "Comptabilité",
      component : ComptaMenu
    },
    {
      path: paths.budget.path,
      name: "Budget",
      component : BudgetMenu
    },
    
];

export default routes;
