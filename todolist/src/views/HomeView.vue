<template>
  <div class="home">
    <div class="text">
    <div class="title">Organize your day</div>
    <div class="sub"><h1>Organize your life and work</h1></div>
    <router-link class="enlace" to="/auth">Start now</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style>
.text {
  margin-top: 8%;
  margin-left: -30%;
}
.sub {
  margin-bottom: 10%;
}
.title {
  font-weight: bold;
  font-size: 80px;
  margin-bottom: 14px;
}
.home {
  padding: 5%;
  width: 80%;
  height: auto;
 background-image: url("../assets/tarea.jpg");
 background-repeat: no-repeat;
}
.lista {
  line-height: 300%    ;
  font-size: 18px;
  list-style: none;
}
.enlace {
  text-align: center;
  margin-top: 6px;
  background-color: #69A6CA;
  padding: 1%;
  color: white;
  font-size: 24px;
}
</style>
