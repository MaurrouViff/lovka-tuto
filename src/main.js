import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from "vue-router";


import Accueil from './components/pages/Accueil.vue';
import Zeppelin from "./components/pages/Zeppelin.vue";
import Modmail from ""

const routes = [
    { path: '/', component: Accueil },
    { path: '/accueil', component: Accueil },
    { path: '/zeppelin', component: Zeppelin}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

app.use(router);


app.mount('#app');