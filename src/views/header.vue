<template>
  <div class="navbar navbar-default navbar-expand-sm bg-light navbar-light navbar-fixed-top">
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
</template>
<script>
export default {
  name: 'header', 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
  color: rgb(245, 11, 11);
  border: none;
  position: left;
  
}</style>