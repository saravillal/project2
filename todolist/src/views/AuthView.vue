<template>
<div>
  <SignUp></SignUp>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import SignUp from '../components/SignUp.vue';

export default {
  components: {
    SignUp,
  },
  name: 'AuthView',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    signUp() {
      const userData = {
        email: 'nacho.martinez@ironhack.com',
        password: 'pruebasignup',
      };
      this.signUp(userData.email, userData.password);
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>
