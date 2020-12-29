import { lazy } from "react";
import { HomeWork } from '@material-ui/icons';

export const routes = [
  {
    isHeaders: true,
    isPublic: false,
    exact: true,
    path: "/",
    name: "Home",
    icon: HomeWork,
    component: lazy(() => import("@pages/Home")),
  },
  {
    isHeaders: true,
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/setting",
    name: "Setting",
    icon: HomeWork,
    component: lazy(() => import("@pages/Setting")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/document",
    name: "Document",
    icon: HomeWork,

    component: lazy(() => import("@pages/Document")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/overview",
    name: "Overview",
    icon: HomeWork,

    component: lazy(() => import("@pages/Overview")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/houses",
    name: "Houses",
    icon: HomeWork,

    component: lazy(() => import("@pages/Houses")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/statistics",
    name: "Statistics",
    icon: HomeWork,
    component: lazy(() => import("@pages/Statistics")),
  },

];