<template>
  <nav>
    <NavBar></NavBar>
    <router-link to="/">Home</router-link> |
    <router-link to="/">Log Out</router-link> |
  </nav>
  <router-view/>
</template>

<script>
import userStore from '@/store/user';
import { mapState, mapActions } from 'pinia';
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  name: 'App',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser']),
  },
  async created() {
    try {
      await this.fetchUser();
      if (!this.user) {
        this.$router.push({ path: '/auth' });
      } else {
        this.$router.push({ path: '/' });
      }
    } catch (e) {
      console.error(e);
    }
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin-left: 20%;
  width: 80%;
  display: flex;
  padding: 30px;
  text-align: left;
}

nav a {
  width: 10%;
  margin-left: 2%;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
