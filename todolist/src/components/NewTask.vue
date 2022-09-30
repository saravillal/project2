<template>
<div class="container1">
       <div class="container2">
        <div class="tarea">Nueva tarea</div>
       <label for="tarea">
        <button class="primary" @click='fetchTasks()'>Refresh</button>
       <input type="text" placeholder="Introduce nueva tarea"
       v-model="title"
       v-on:keyup.enter="agregarTarea()"
       /></label>
    <br>
    <div class="row" v-if="tareas.length === 0">
      <h6>No hay tareas para mostrar</h6></div>
      <div>
        <ul class="lista" v-for="(tarea, index) in tareas" v-bind:key="index">
          <li class="lista-grupo d-flex justify-content-between">
            <span v-bind:class="[tarea.estado === true ? 'text-success': '', 'cursor']"
            v-on:click="estado(tarea, index)" aria-hidden="true">
              <i  v-bind:class="
              [tarea.estado === true ? 'fa-solid fa-circle-check': 'fa-regular fa-circle']"></i>
              </span>
              <h5>
            {{ tarea.nombre }}
            </h5>
            <span class="cursor text-danger" v-on:click="eliminarTarea(index)" aria-hidden="true">
            <i class="fa-solid fa-trash"></i>" "
            <i class="fa-regular fa-pen-to-square"  aria-hidden="true"></i></span>
          </li>
        </ul>
      </div>
      </div>
</div>
</template>

<script>
import tasksStore from '@/store/tasks';
import userStore from '@/store/user';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'newTask',
  data() {
    return {
      tareas: [],
      title: '',
    };
  },
  methods: {
    agregarTarea() {
      this.createTask(this.title, this.userId);
      const tarea = {
        nombre: this.title,
        estado: false,
      };
      this.tareas.push(tarea);
      this.title = '';
      console.log(this.tareas);
    },
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
    },
    estado(tarea, index) {
      this.tareas[index].estado = !tarea.estado;
    },
    ...mapActions(tasksStore, ['fetchTasks', 'createTask']),
  },
  computed: {
    ...mapState(tasksStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  created() {
    this.fetchTasks();
  },
};

</script>

<style>

.container2 {
  width: 90%;
  height: 90%;
  margin-top: -15%;
}

li {
  line-height: 10%;
  font-size: 16px;
}
.tabla {
  width: 100%;
  height: auto;
}

.container1 {
    margin-top: 2%;
    margin-left: 15%;
    height: 100vh;
    width: 150vh;
    background-image: url("../assets/tarea.jpg");
    text-align: center;
    padding: 10%;
    text-align: center;
}
input {
    width: 100%;
    height: 18%;
    border-style: none;
    padding: 5%;
    text-align: center;
    margin-bottom: 15%;
}

.cursor {
  cursor: pointer;
}
</style>
