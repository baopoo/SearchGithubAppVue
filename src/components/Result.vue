<template>
  <div class="my-3 d-flex justify-content-between align-items-center" @click="onClickSearchRepo()">
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
import { evenBus } from '../main';

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClickSearchRepo(){
      this.$router.push({path: '/repository', query: {name: this.user.login}});
      // console.log(this.user);
      this.$store.dispatch('updateRepoActions', this.user.login);
      evenBus.$emit('sendUserImg', this.user)
    }
  }

}
</script>
<style scoped>
  div:first-child{
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 8px;
  }
  div:first-child:hover{
    background-color: rgb(184, 183, 183)
  }
  img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
  }
</style>
