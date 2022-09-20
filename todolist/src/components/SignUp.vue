<template>
<div v-if="errorMsg" class="error">{{ errorMsg }}</div>
  <form @submit.prevent="signUp" class="contenedor">
    <div class="container">
      <div id="email">Email:</div>
      <input type="email" aria-labelledby="email" v-model="email" />
      <div id="password">Password:</div>
      <input type="password" aria-labelledby="password" v-model="password" />
      <div id="confirmPassword">Confirm Password:</div>
      <input
        type="confirmPassword"
        aria-labelledby="confirmPassword"
        v-model="confirmPassword"
      />
      <br /><button type="submit">Create Account</button> <br /><router-link
        to="/SignIn"
        >Already have an Account? Click to Sign In</router-link>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '../supabase';

export default {
  name: 'signUp',
  setup() {
    const router = useRouter();
    const email = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const errorMsg = ref(null);

    const signUp = async () => {
      if (password.value === confirmPassword.value) {
        try {
          const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
          });
          if (error) throw error;
          router.push({ name: 'signIn ' });
        } catch (error) {
          errorMsg.value = error.message;
          setTimeout(() => {
            errorMsg.value = null;
          }, 5000);
        }
        return;
      }
      errorMsg.value = 'Error: Passwords do not match';
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    };
    return {
      email,
      password,
      confirmPassword,
      errorMsg,
      signUp,
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
  padding: 2%;
  height: 20%;
  width: 40%;
  text-align: center;
  background-color: #92e7c5;
}

input {
  margin-top: 1%;
  margin-bottom: 1%;
  width: 40%;
}

button {
  width: 20%;
  font-size: 10px;
  margin-top: 5%;
}

.error {
  color: red;
  text-align: center;
}
</style>
