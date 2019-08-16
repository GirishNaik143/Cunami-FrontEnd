<template>
    <div>
        <div class="navbar navbar-default navbar-expand-sm bg-light navbar-bg-dark navbar-fixed-top">
            <div class="container">
                <ul class="nav navbar-nav ml-auto" align="left">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard">CUNAMI</router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav ml-auto" align="right">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Logout</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="body">
            <center><button @click="newuser()" style="background-color:#4CAF50 !important;">
                New User
            </button></center><br>
            <center><button @click="edituser()" style="background-color:#4CAF50 !important;">
                Edit User
            </button></center><br>
        </div>                                            
    </div>  
</template>
<script>
const axios = require('axios');
import gggg from '@/views/global'
export default {
  name: 'dashboard', 
  data: () => ({
    }),
    mounted(){
    },
    created(){
    },
    methods: {
        newuser(){
            this.$router.push('/newuser')
        },
        edituser(){
            this.$router.push('/userDetails')
        },
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
  color: rgb(245, 11, 11);
  border: none;
  opacity: 0.8;
  top: 10px;
}
.body {
  padding-top: 20rem;
  width: 130rem;
  padding-bottom: 1rem;
  color: #020202;
}

</style>