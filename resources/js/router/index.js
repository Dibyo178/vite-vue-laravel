import { createRouter,createWebHistory } from "vue-router";

import Add from "../crud/AddNewVue.vue";

import List from "../crud/List.vue";

const routes= [

    { path: '/', name:"List",component:List },

    { path: '/add-new', name:"Add",component:Add },

  ];

const router = createRouter({
    history: createWebHistory(),
    routes,

  })

   export default router;
