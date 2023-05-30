<template>
  <a-pagination :default-current="+pageCurrent" :total="totalUser" @change="onChangePage" />
</template>
<script>
import { evenBus } from '../main'

export default {
    data() {
      return {
        pageCurrent: this.$route.query.page,
        value: this.$route.query.name
      }
    },
    computed: {
      totalUser(){
        return this.$store.state.totalUser
      }
    },
    methods: {
      onChangePage(pageNumber){
        this.$router.push({path: '/', query: {name: this.value, page: pageNumber}});
        evenBus.$emit('changePage', pageNumber);
      }
    }
}
</script>
<style>
    
</style>