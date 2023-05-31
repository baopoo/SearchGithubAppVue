<template>
  <div class="github-user-item my-3 d-flex justify-content-between align-items-center" @click="onClickSearchRepo()">
    <div class="d-flex gap-5 align-items-center">
      <img
        :src="user.avatar_url"
        alt=""
      />
      <span class="fs-2 fw-bold">{{ user.login  }}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script>

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClickSearchRepo(){
      this.$store.dispatch('fetchUserInfo', this.user)
      this.$store.dispatch('fetchRepo', this.user.login);
      this.$router.push({path: '/repository', query: {name: this.user.login}});
    }
  }

}
</script>
<style scoped>
  .github-user-item{
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 8px;
  }
  .github-user-item:hover{
    background-color: rgb(184, 183, 183)
  }
  img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
  }
</style>
