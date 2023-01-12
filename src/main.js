import { createApp } from "vue";
import App from "./App.vue";
import i18n from "../i18n.js";
import Home from "./pages/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import VueGtag from "vue-gtag";
import { vueVimeoPlayer } from "vue-vimeo-player";

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

const router = createRouter({
  history: createWebHistory(),
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
  .use(vueVimeoPlayer)
  .mount("#app");
