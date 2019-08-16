<template>
<div>
<app-header></app-header>
<br><br><br>
   <!--Form   --> 
  <div class="container" id="app">
  <div class="add-product" :class="{'open': formOpen}">
    <form @submit.prevent="submit()">
        <h2>New User </h2>
    <div class="form--container -inline">
        <div class="form--field">
            <label>Name *</label>
            <input type="text" class="form--element" name="name" v-model="name" placeholder="Name" required="">
        </div>
        <div class="form--field">
            <label>Phone Number *</label>
            <input type="tel" class="form--element" name="phno" v-model="phno" placeholder="Phone Number" pattern="[0-9]{10}" required="">
        </div>
    </div>
    <div class="form--container -inline">
        <div class="form--field">
            <label>Email *</label>
            <input  type="email" class="form--element" name="email" v-model="email" placeholder="User Email" required="">
        </div>
    </div>
    <div class="form--container -inline">
        <div class="form--field">
            <label>User Name *</label>
            <input type="text" class="form--element" name="username" v-model="username" placeholder="User Name" required="">
        </div>
        <div class="form--field">
            <label>password *</label>
            <input type="password" class="form--element" name="password" v-model="password" placeholder="password" required="">
        </div>
    </div>
    <div class="form--container -inline">
      <button type="submit" class="submit-button">Submit</button>
   </div>
    </form>
  </div>
</div>
<!--Form End 
-->
</div>
</template>
<script>
import Modal from "@melmacaluso/vue-modal";
import moment from 'moment'
const axios = require('axios');
import gggg from '@/views/global'
import { constants } from 'crypto';
import header from '@/views/header'

export default {
  data() {
    return {
        formOpen: true,
        name : '',
        phno : '',
        email: '',
        username : '',
        password : '',
    }
  },
  components:{
        appHeader:header,
    },
  mounted(){
  },
  created(){    
  },
  methods: {
    submit() {
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
                alert('You Successfully Registered ')
                this.$router.replace(this.$route.query.redirect || '/dashboard')
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

<style lang="css">
  /*check offer*/
.container {
  color: white;
  border: none;
  opacity: 0.8;
  position: left;
  top: 10px;
}
.add-product {
  background-color: rgb(245, 239, 239);
  color: rgb(7, 7, 7);
  border: none;
  opacity: 1;
  position: left;
  top: 10px;
}
.add-product.open {
  background-color: rgb(247, 241, 241);
  padding: 20px 50px;
  position: left;
  border-radius: 0px;
  width: 100%;
  height: 100%;
  cursor: default;
  top: 0px;
}
.add-product.open form {
  opacity: 1;
  transition: opacity 0s ease;
  transition-delay: 0s;
  height: auto;
}
.add-product .button-copy {
  text-align: left;
  line-height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: #f7f7f7;
}
.add-product form {
  transition: none;
  opacity: 0;
  height: 0;
  overflow: hidden;
}
.add-product .cancel {
  font-size: 22px;
  text-align: left;
  margin-top: 0em;
}
.add-product .cancel span {
  cursor: pointer;
}
.add-product .cancel span:hover {
  text-decoration: underline;
}

.submit-button {
  display: block;
  background-color: #3498DB;
  height: 42px;
  border-radius: 20px;
  line-height: 30px;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.875em;
  border: none;
  font-weight: 600;
  padding: 0 23px;
  margin: 0 auto;
}
.submit-button img {
  position: center;
  top: 3px;
  right: 3px;
}
.submit-button:hover {
  background-color: #060707;
  cursor: pointer;
}

.featured-note {
  color: #8f8b8b;
  font-size: 12px;
  margin: 4px 0px;
  line-height: 18px;
  font-style: italic;
}

form * {
  outline: none;
}

label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  user-select: none;
  text-align: left
}
label.emoji input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 21px;
  margin: 0;
  display: none;
}
label.emoji input + span:after {
  content: "😶";
  font-size: 18px;
  top: 2px;
  left: 2px;
  position: relative;
  height: 18px;
  display: inline-block;
}
label.emoji input:checked + span:after {
  content: "😀";
}

.form--field {
  width: 100%;
  align-content: center;
  text-align: center;
  
}
.form--field.-short {
  width: 100%;
}

.form--price {
  position: absolute;
  line-height: 38px;
  width: 16px;
  color: #C7C7C7;
  text-align: center;
}
.form--price + input {
  padding-left: 14px;
}

.form--container {
  width: 100%;
}
.form--container.-inline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: -0px;
}

.form--element {
  background-color: rgb(226, 224, 224);       
  border: 1px solid rgb(233, 232, 232);
  border-radius: 3px;
  font-size: 14px;
  line-height: 28px;
  padding: 0 4px;
  color: rgb(7, 7, 7);
  width: 100%;
  margin: 4px 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}
.form--element:focus {
  border: 1px solid #FFC145;
  border-radius: 2px;
}
.form--element:not(.texteare) {
  height: 32px;
}
.form--element.textarea {
  height: 80px;
  resize: none;
}
  
/*check offer end*/
</style>