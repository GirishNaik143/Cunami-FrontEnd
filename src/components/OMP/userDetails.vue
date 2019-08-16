<template>
<div>
<app-header></app-header><br><br><br>
<span style="display:inline">
    <h1>User Details</h1>
</span><br>
<!-- User table -->
<div class="container">
    <div class="tab tab-1">
        <center><table id="table" border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>User Name</th>
                    <th>Password</th>
                    <th>Edit</th>
                    <th>Remove</th>
                </tr>

                 <tr v-for="(userdetail,index) in userdetails" :key="index">
                      <td>{{userdetail.name}}</td>
                      <td>{{userdetail.email}}</td>
                      <td>{{userdetail.phno}}</td>
                      <td>{{userdetail.username}}</td>
                      <td class="hidetext">{{userdetail.password}}</td>
                      <td >
                      <button type="button" class="btn btn-success"  @click="edit(userdetail._id)" data-toggle="modal" data-target="#user"><span class="badge"></span>Edit</button>
                      </td>
                      <td>
                      <button type="button" class="btn btn-danger" @click="Delete(userdetail._id,userdetail.username)" >Delete</button>
                      </td>
                  </tr>
            </thead>
        </table></center>
</div>
</div>
<!-- update user details  -->
<div class="modal fade" id="user" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <h6 style="margin-left:0px"> <label> Name : 
                <input type="text" v-model="name"   value=""  id="input_name"></label>
            </h6>
            <h6 style="margin-left:0px"> <label> Email : 
                <input type="email" v-model="email"   value=""  id="input_email"></label>
            </h6><br>
            <h6 style="margin-left:0px"> <label> Phone Number : 
                <input type="tel" v-model="phno"   value=""  id="input_phno"></label>
            </h6><br>
            <h6 style="margin-left:0px"> <label> User Name : 
                <input type="text" v-model="username"   value=""  id="input_username"></label>
            </h6><br>
            <h6 style="margin-left:0px"> <label> Password : 
                <input type="password" v-model="password"   value=""  id="input_password"></label>
            </h6>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" @click="update()" class="btn btn-primary" >Update</button>
      </div>
    </div>
  </div>
</div>

</div>
</template>
<script>


import Modal from "@melmacaluso/vue-modal";
import moment from 'moment'
const axios = require('axios');
import gggg from '@/views/global'
import header from '@/views/header'
import { log } from 'util';


export default {
    data() {

         return {
            name : '',
            email : '',
            phno :'',
            username : '',
            password : '',
            oname : '',
            oemail : '',
            ophno : '',
            ousername : '',
            opassword : '',
            userdetails :[],
            
        }     
    },
    components:{
        appHeader:header,
    },
    mounted () {  
        //Get Cuisine Details
        gggg.get('/userDetails').then(response => {
            this.userdetails=response.data
        })      
    },
    methods : {  
        update() {
            gggg.put('/userDetails/' +this._id,{
                name : this.name,
                email : this.email,
                phno  : this.phno,
                username : this.username,
                password : this.password,
            }).then((res) => {
                gggg.put('/login/'+this.ousername,{
                    username : this.username,
                    password : this.password,
                }).then((res) =>{
                    alert('successfully updated')
                    location.reload()
                })
            }, err => {
                alert('Sorry Something wrong')
                console.log(err)      
            })
        },
        edit(x){
           gggg.get('/userDetails').then(response => {
             for(var i=0;i<response.data.length;i++){
               if(response.data[i]._id==x){
                    this._id= x
                    this.name = response.data[i].name,
                    this.email = response.data[i].email,
                    this.phno = response.data[i].phno,
                    this.username = response.data[i].username,
                    this.ousername = response.data[i].username,
                    this.password = response.data[i].password
                }
             }
            })
        },
        Delete(x,y){
           var a=confirm('Do You Want To Delete ' +y)
           if(a==true){
             gggg.delete('/userDetails/'+x).then((response) =>{
               gggg.delete('/login/'+y).then((response) =>{
                    alert('Deleted')
                    location.reload()
                })
             })
           }   
        }
   
    },
}
</script>
<style>
td,th{
    color: black;
}
.hidetext {
    -webkit-text-security : disc;
}
</style>

