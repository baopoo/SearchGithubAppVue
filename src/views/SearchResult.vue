<template>
  <div class="mt-3">
    <template v-if="value">
      <template v-if="users.length > 0">
        <result v-for="(user, index) in users" :key="index" :user="user">
          <span class="fs-5">{{ index + 1}}</span>
        </result>
        <div class="text-center my-5">
          <pagination ></pagination>
        </div>
      </template>
      <template v-else>
        <span class="fs-4 fst-italic text-danger">User not found !</span>
      </template>
    </template>
    <template v-else>
      <span class="fs-4 fst-italic">Enter the github name you want to search ?</span>
    </template>
  </div>
</template>
<script>
import Result from './Result.vue'
import Pagination from '../components/Pagination.vue';

export default {
  components: {
     Result,
     Pagination
  },
  data() {
    return {
    }
  },
  computed: {
    users() {
      return this.$store.getters.getUser;
    },
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  }
}
</script>
<style></style>
