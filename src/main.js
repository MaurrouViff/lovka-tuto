import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from "vue-router";


import Accueil from './components/pages/Accueil.vue';
import Moderateur from './components/pages/Moderateur.vue';
import Sanction from './components/pages/Sanctions.vue';

const routes = [
    { path: '/', component: Accueil },
    { path: '/accueil', component: Accueil },
    { path: '/moderateur', component: Moderateur},
    { path: '/sanction', component: Sanction }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

app.use(router);


app.mount('#app');