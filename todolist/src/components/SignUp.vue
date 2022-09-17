<template>
<div id="email">Email:</div> <input type="email" aria-labelledby="email">
<div id="password">Password:</div> <input type="password" aria-labelledby="firstname">
<div id="confirmPassword">Confirm Password:</div>
<input type="password" aria-labelledby="firstname">
<br><button @click="signUp">SignUp</button>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SignUp',
  setup() {
    const email = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const errorMsg = ref(null);

    return {
      email, password, confirmPassword, errorMsg,
    };
  },
};
</script>
