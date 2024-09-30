import { createRouter,createWebHistory } from "vue-router";

import Add from "../crud/AddNewVue.vue";

const routes= [

    { path: '/add-new', name:"Add",component:Add },

  ];

const router = createRouter({
    history: createWebHistory(),
    routes,

  })

   export default router;
