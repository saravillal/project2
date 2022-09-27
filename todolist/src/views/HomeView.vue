<template>
  <div class="home">
    <div class="title">Organize your day</div>
    <ul class="lista">
      <li> Crea tareas diarias </li>
      <li> Modifica y edítalas </li>
      <li> Elimínalas </li>
        </ul>
    <router-link class="enlace" to="/auth">Start now</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style>
.title {
  font-weight: bold;
  font-size: 110px;
}
.home {
  padding: 5%;
  width: 100%;
  height: auto;
 background-image: url("../assets/tarea.jpg");
}
.lista {
  line-height: 300%    ;
  font-size: 18px;
  list-style: none;
}
.enlace {
  text-align: center;
  margin-top: 36px;
  background-color: #69A6CA;
  padding: 1%;
  color: white;
  font-size: 24px;
}
</style>
