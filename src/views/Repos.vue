<template>
  <div class="row mt-3">
    <user-infor :name="name"></user-infor>
    <div class="col-12 col-md-8">
      <h3>Repositories</h3>
      <div>
        <repo-item
          v-for="(repo, index) in repos"
          :key="index"
          :repo="repo"
        ></repo-item>
      </div>
    </div>
  </div>
</template>
<script>
import RepoItem from "./RepoItem.vue";
import UserInfor from "../components/UserInfor.vue";

export default {
  data() {
    return {
      name: this.$route.query.name,
    };
  },
  components: {
    RepoItem,
    UserInfor,
  },
  computed: {
    repos() {
      return this.$store.getters.getRepo;
    },
  },
};
</script>
<style scoped>
  h3 {
    padding-bottom: 10px;
    border-bottom: 1px double #000;
  }
</style>
