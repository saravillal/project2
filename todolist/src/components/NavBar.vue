<template>
<nav>
  <div class="flex">
    <img src="../assets/logo.png" alt="" />
    <router-link to="/">Home</router-link> |
    <router-link to="/auth">Sign Up</router-link> |
    <router-link to="/signIn">Log In</router-link> |
    <router-link to="/signIn">Log Out</router-link>
  </div>
</nav>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import store from '../store/user';
import { supabase } from '../supabase';

export default {
  setup() {
    const user = computed(() => store.state.user);
    const router = useRouter();
    const logout = async () => {
      await supabase.auth.signOut();
      router.push({ name: 'home' });
    };

    return { user, logout };
  },
};
</script>

<style>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  font-size: 12px;
  margin-bottom: -2%;
  margin-top: -2%;
  margin-left: 22%;
  width: 80%;
  display: flex;
  padding: 30px;
  text-align: center;
}
nav a {
  width: 10%;
  margin-left: 2%;
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #69A6CA;
}
img {
  width: 5%;
  height: auto;
}
</style>
