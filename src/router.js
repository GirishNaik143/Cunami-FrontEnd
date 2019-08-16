import Vue from "vue";
import Router from "vue-router";
import dashboard from './components/dashboard'
import newuser from './components/OMP/newuser'
import userDetails from './components/OMP/userDetails'
import login from './components/Login'
import register from './components/register'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: '/', component: login },
    { path: '/register', component: register },
    { path: '/dashboard', component: dashboard },
    { path: '/newuser', component: newuser },
    { path: '/userDetails', component: userDetails },
  ]
});
