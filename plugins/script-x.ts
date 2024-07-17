import ScriptX from "vue-scriptx";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ScriptX);
});
