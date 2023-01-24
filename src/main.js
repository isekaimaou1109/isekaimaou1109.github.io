import routes from './js/routes';
import HomeComponent from './js/components/homeComponent';

const router = VueRouter.createRouter({
  routes
})

const app = Vue.createApp(HomeComponent)
app.use(router)

app.mount('#app')