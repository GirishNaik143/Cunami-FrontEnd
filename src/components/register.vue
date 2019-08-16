<template>
  <div class="login-wrapper border border-light">
      <form class="form-signin" @submit.prevent="signup">
            <h2 class="form-signin-heading">Sign Up Here </h2>
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
                <label for="inputEmail" class="sr-only">Name</label>
                <input v-model="name" type="text" id="inputEmail" class="form-control" placeholder=" Name" required autofocus>
                <label for="inputEmail" class="sr-only">Email</label>
                <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email ID" required autofocus>
                <label for="inputEmail" class="sr-only">Phone Number</label>
                <input v-model="phno" type="number" id="inputEmail" class="form-control" placeholder="Phone Number" required autofocus>
                <label for="inputEmail" class="sr-only">User Name</label>
                <input v-model="username" type="text" id="inputEmail" class="form-control" placeholder="User Name" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                <router-link class="dropdown-item" to="/">If Your already Registered Login Here??</router-link>
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
        name: '',
        email:'',
        phno:'',
        username:'',
        password:'',
        error: false
    }
  },
  methods: {
    signup () {
        gggg.post('/userDetails',{
                  name : this.name,
                  email : this.email,
                  phno : this.phno,
                  username : this.username,
                  password : this.password,
        }).then((res) => {
            gggg.post('/login',{
                username : this.username,
                password : this.password,
            }).then((res) => {
                alert('You Successfully Registered please login')
                this.$router.replace(this.$route.query.redirect || '/')
            }, err => {
                alert('Sorry Something wrong')
                console.log(err)      
            })
        }, err => {
            alert('Sorry Something wrong')
            console.log(err)      
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
.form-signin input[type="number"] {
  margin-bottom: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="text"] {
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