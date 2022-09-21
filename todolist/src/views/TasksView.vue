<template>
  <div class="taska">
    <h1>app takas</h1>
    <NewTask></NewTask>
  </div>
</template>

<script>
import NewTask from '../components/NewTask.vue';

export default {
  name: 'tasksView',
  components: {
    NewTask,
  },
};
</script>

<style>
.home {
  height: 800px;
  width: 100%;
 background-image: url("../assets/tarea.jpg");

}
</style>
