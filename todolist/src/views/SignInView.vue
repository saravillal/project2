<template>
<div v-if="errorMsg" class="error">{{ errorMsg }}</div>
<form @submit.prevent="login">
<div class="container">
<div id="email">Email:</div> <input type="email" aria-labelledby="email" v-model="email">
<div id="password">Password:</div>
<input type="password" aria-labelledby="password" v-model="password">
<br><button type="submit">Log In</button>
<br><router-link to="/Auth">Don't have an Account? Click to Register</router-link>
</div>
</form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '../supabase';

export default {
  name: 'SignIn',
  setup() {
    const router = useRouter();
    const email = ref(null);
    const password = ref(null);
    const errorMsg = ref(null);

    const login = async () => {
      try {
        const { error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
        router.push({ name: 'home' });
      } catch (error) {
        errorMsg.value = `Error: ${error.message}`;
        /* seTimeout(() => {
          errorMsg.value = null;
        }, 5000); */
      }
    };

    return {
      email, password, errorMsg, login,
    };
  },
};
</script>
<style>
.container {
    margin-left: 30%;
    display: block;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    padding: 2%;;
    height: 20%;
    width: 30%;
    text-align: center;
    background-color: #92E7C5;

}

input { margin-top: 1%;
margin-bottom: 1%;
width: 40%;}

button {
    width: 20%;
    font-size: 10px;
margin-top: 5%;}

.error { color: red; }
</style>
