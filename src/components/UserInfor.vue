<template>
  <div class="col-12 col-md-4 d-flex flex-column gap-2 align-items-center">
    <img alt="" :src="userInfo.avatar_url" />
    <div>
      <span class="fs-3 fw-bold">{{ name }}</span>
      <span class="fs-3 fw-bold" v-if="repo">/{{ repo }}</span>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    userInfo() {
      return this.$store.getters.getUserInfo;
    },
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    repo: {
      type: String,
      default: ""
    }
  },
};
</script>
<style scoped>
img {
  width: 300px;
  height: 300px;
}
</style>
