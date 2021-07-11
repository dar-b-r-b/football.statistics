import { createRouter, createWebHistory } from "vue-router";
import AppHomePage from "@/components/AppHomePage";
import AppTeamsPage from "@/components/AppTeamsPage";
import AppLeaguesPage from "@/components/AppLeaguesPage";
import AppCalendarPage from "@/components/AppCalendarPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: AppHomePage,
  },
  {
    path: "/teams",
    name: "Teams",
    component: AppTeamsPage,
  },
  {
    path: "/leagues",
    name: "Leagues",
    component: AppLeaguesPage,
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: AppCalendarPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
