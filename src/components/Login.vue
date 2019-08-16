<template>
  <div class="login-wrapper border border-light">
      <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="inputEmail" class="sr-only">User Name</label>
      <input v-model="username" type="text" id="inputEmail" class="form-control" placeholder="User Name" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <router-link class="dropdown-item" to="/register">If Your First Please Register??</router-link>
      </form>
  </div>
</template>

<script>
const axios = require('axios');
import gggg from '@/views/global'

export default {
  name: 'Login',
  data () {
    return {
      username:'',
      password:'',
      error: false
    }
  },
  methods: {
    login () {
      gggg.get('/login', {params: {username: this.username,password: this.password}})
      .then(response => {
       if (response.data.length > 0) {
          this.$router.replace(this.$route.query.redirect || '/dashboard')
        } else {
          alert('username or password wrong')
        }
    })
       
      }
}
}
</script>

<style >

.login-wrapper {
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100% !important;
}

.form-signin {
  background: rgb(236, 212, 212);
  max-width: 330px;
  padding: 0% 15px;
  margin: 0 auto;
  margin-top: 10%
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>