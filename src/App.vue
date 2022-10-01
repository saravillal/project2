<template>
  <nav>
    <NavBar></NavBar>|
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
