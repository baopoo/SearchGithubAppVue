<template>
  <div class="row">
    <div class="col-12 col-md-4">
      <img :src="image" alt="" />
      <span>{{ name }}</span>
    </div>
    <div class="col-12 col-md-8">
      <h3>Repositories</h3>
      <div>
        <app-repo-item v-for="(repo, index) in repos" :key="index" :repo="repo"></app-repo-item>
      </div>
    </div>
  </div>
</template>
<script>
import { evenBus } from '../main'
import RepoItem from './RepoItem.vue'

export default {
  data() {
    return {
      image: '',
      name: this.$route.query.name,
    }
  },
  beforeCreate() {
    evenBus.$on('sendUserImg', (user) => {
      console.log(user)
    })
  },
  components: {
    'app-repo-item': RepoItem,
  },
  computed: {
    repos() {
      return this.$store.state.repo
    },
  },
}
</script>
<style scoped>
  h3 {
    padding-bottom: 10px;
    border-bottom: 1px double #000;
  }
</style>
