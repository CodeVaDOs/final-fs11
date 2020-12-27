import { lazy } from "react";

export const routes = [
  {
    isHeaders: true,
    isPublic: false,
    exact: true,
    path: "/",
    name: "Home",
    component: lazy(() => import("@pages/Home")),
  },
  {
    isHeaders: true,
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/setting",
    name: "Setting",
    component: lazy(() => import("@pages/Setting")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/document",
    name: "Document",
    component: lazy(() => import("@pages/Document")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/overview",
    name: "Overview",
    component: lazy(() => import("@pages/Overview")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/houses",
    name: "Houses",
    component: lazy(() => import("@pages/Houses")),
  },
  {
    isPublic: false,
    isAdminRoute: false,
    exact: true,
    path: "/statistics",
    name: "Statistics",
    component: lazy(() => import("@pages/Statistics")),
  },
];