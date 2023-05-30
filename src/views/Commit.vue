<template>
  <div class="row mt-3">
    <user-infor :name="name" :repo="repo"></user-infor>
    <div class="col-12 col-md-8">
      <h3>Top 10 Lastest Commit</h3>
      <div>
        <commit-item
          v-for="(commit, index) in commits"
          :key="index" :commit="commit" :repo="repo" :owner="name"
        >
        <span><strong>STT</strong>: {{ index + 1 }}</span>
    </commit-item>
      </div>
    </div>
  </div>
</template>
<script>
import UserInfor from "../components/UserInfor.vue";
import CommitItem from "./CommitItem.vue";

export default {
  data() {
    return {
      name: this.$route.query.name,
      repo: this.$route.query.repo,
    };
  },
  components: { UserInfor, CommitItem },
  computed: {
    commits() {
      return this.$store.getters.getCommits;
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
