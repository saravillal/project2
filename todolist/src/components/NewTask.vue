<template>
<div class="container1">
       <div class="tarea">Nueva tarea</div>
       <input type="text" placeholder="Introduce nueva tarea"
       aria-labelledby="firstname">
    </div>
</template>

<script>
export default {
  name: 'NewTask',
};
</script>

<style>

.container1 {
    margin-top: 0%;
    margin-left: 15%;
    background-image: url("../assets/tarea.jpg");
    text-align: center;
    padding: 10%;
    height: 50vh;
    width: 100vh;
    text-align: center;
}
input {
    width: 100%;
    height: 10%;
}
</style>
