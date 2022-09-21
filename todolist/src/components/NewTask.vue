<template>
<div class="container1">
       <div class="tarea">Nueva tarea</div>
       <input type="text" placeholder="Introduce nueva tarea"
       aria-labelledby="firstname">
       <button type="submit">Create task</button>
    <br>
    <div class="nose">
        <h6>No hay tareas para mostrar</h6>
        </div>
</div>
</template>

<script>
export default {
  name: 'newTask',
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
    width: 60%;
    height: 11%;
    border-style: none;
    text-align: center;
}

button {
    width: 20%;
    height: 11%;
    background-color: #2c3e50;
    color: white;
    border-style: none;
    margin-left: 2%;

}
</style>
