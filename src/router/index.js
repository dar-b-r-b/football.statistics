import { createRouter, createWebHistory } from "vue-router";
import AppHomePage from "@/components/AppHomePage";
import AppTeamsPage from "@/components/AppTeamsPage";
import AppLeaguesPage from "@/components/AppLeaguesPage";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
