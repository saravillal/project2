import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export default defineStore('tasks', {
  state: () => ({
    tasks: null,
  }),
  actions: {
    agregarTarea() {
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
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    },
    async createTask(title, userId) {
      const { data: [newTask], error } = await supabase
        .from('tasks')
        .insert([{ title, user_id: userId }]);
      if (error) throw error;
      this.tasks.push(newTask);
      console.log('newTask:', newTask);
    },
  },
});
