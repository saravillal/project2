<template>
  <div class="home">
    <h1>App Task</h1>
    <NewTask></NewTask>
  </div>
</template>

<script>
import NewTask from '../components/NewTask.vue';

export default {
  components: {
    NewTask,
  },
  name: 'HomeView',
};
</script>
