import { createI18n } from 'vue-i18n';
import en from './src/locales/en';
import es from './src/locales/es';

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        en,
        es,
    },
});

export default i18n;