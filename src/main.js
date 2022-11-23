import { createApp } from "vue";
import App from "./App.vue";
import i18n from "../i18n.js";
import Home from "./pages/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
// import { h, resolveComponent } from "vue";
import VueGtag from "vue-gtag";
import 'virtual:windi.css'

const routes = [
  {
    path: "/",
    redirect: `/${i18n.getLocale()}`,
  },
  {
    path: "/:lang",
    name: "home",
    component: Home,
  },
];

// component: {
//     render: () => h(resolveComponent("router-view")),
//         children: [{
//         path: '/', name: 'home', component: Home
//     }]
// }

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = "es";
  }

  // i18n.locale = language
  // i18n.global.locale.value = language
  i18n.setLocale(language);
  next();
});

createApp(App)
  .use(router)
  .use(i18n)
  .use(VueGtag, {
    config: { id: "G-X2753YKFNC" },
    router,
    enabled: true,
  })
  .mount("#app");
