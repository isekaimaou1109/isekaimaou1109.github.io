import routes from './js/routes.js';
import HomeComponent from './js/components/homeComponent.js';

const router = VueRouter.createRouter({
  history: createWebHistory(),
  routes
})

const app = Vue.createApp(HomeComponent)
app.use(router)

app.mount('#app')