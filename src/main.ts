import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "@/assets/style/tailwind.css";
import { router as setupRouter } from "@/router";
import { RegisterComponents } from "./plugins/Components";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueApexCharts from "vue3-apexcharts";

const init = async () => {
  const router = await setupRouter;
  const pinia = createPinia();
  const app = createApp(App);
  await RegisterComponents(app);
  // await router.isReady()

  app.component('EasyDataTable', Vue3EasyDataTable);
  app.use(VueApexCharts);
  app.use(pinia);
  app.use(router);
  app.mount("#app");
};

init().then();

// merge sort
