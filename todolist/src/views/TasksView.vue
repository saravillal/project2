<template>
    <NewTask></NewTask>
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
 margin-left: 10%;

}
</style>
