const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "home",
        path: "",
        component: () => import("pages/HomeView.vue"),
      },
      {
        name: "entreprise",
        path: "entreprise",
        component: () => import("pages/Company.vue"),
      },
      {
        name: "prestations",
        path: "prestations",
        component: () => import("pages/Services.vue"),
      },
      {
        name: "actualites",
        path: "actualites",
        component: () => import("pages/News.vue"),
      },
      {
        name: "contact",
        path: "contact",
        component: () => import("pages/Contact.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
