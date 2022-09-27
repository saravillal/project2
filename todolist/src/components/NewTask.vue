<template>
<div class="container1">
       <div class="tarea">Nueva tarea</div>
       <label for="tarea">
       <input type="text" placeholder="Introduce nueva tarea"
       v-model="nombreTarea"
       v-on:keyup.enter="agregarTarea()"
       /></label>
    <br>
    <div class="row" v-if="tareas.length === 0">
      <h6>No hay tareas para mostrar</h6></div>
      <div>
        <ul class="lista" v-for="(tarea, index) in tareas" v-bind:key="index">
          <li class="lista-grupo d-flex justify-content-between">
            <span class="cursor">
              <i class="fa-regular fa-circle"></i></span>
              <h5>
            {{ tarea.nombre }}
            </h5>
            <span class="cursor text-danger" v-on:click="eliminarTarea(index)" aria-hidden="true">
            <i class="fa-solid fa-trash"></i>
            </span>
          </li>
        </ul>
      </div>
</div>
</template>

<script>
export default {
  name: 'newTask',
  data() {
    return {
      tareas: [],
      nombreTarea: '',
    };
  },
  methods: {
    agregarTarea() {
      const tarea = {
        nombre: this.nombreTarea,
        estado: false,
      };
      this.tareas.push(tarea);
      this.nombreTarea = '';
      console.log(this.tareas);
    },
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
    },
  },
};

</script>

<style>
.tabla {
  width: 100%;
  height: auto;
}

.container1 {
    margin-top: 2%;
    margin-left: 15%;
    height: 80vh;
    width: 150vh;
    background-image: url("../assets/tarea.jpg");
    text-align: center;
    padding: 10%;
    text-align: center;
}
input {
    width: 60%;
    height: 18%;
    border-style: none;
    text-align: center;
}

button {
    width: 20%;
    height: 18%;
    background-color: #2c3e50;
    color: white;
    border-style: none;
    margin-left: 2%;

}

.cursor {
  cursor: pointer;
}
</style>
