/* import './assets/main.css' */
import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
// import "primevue/resources/themes/saga-blue/theme.css"; // Puedes cambiar el tema
// import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { createPinia } from "pinia";

import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.mount("#app");

app.component("DataTable", DataTable);
app.component("Column", Column);
