const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Company.vue") },
      { path: "prestations", component: () => import("pages/Services.vue") },
      { path: "actualites", component: () => import("pages/News.vue") },
      { path: "contact", component: () => import("pages/Contact.vue") },
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
