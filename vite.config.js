import { fileURLToPath, URL } from "node:url";
import svgLoader from "vite-svg-loader";

import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader(),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/locales/**"
      ),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    dedupe: [
      'vue'
    ]
  },
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png"],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/utils/_mixins.scss";`,
      },
    },
  },
});
