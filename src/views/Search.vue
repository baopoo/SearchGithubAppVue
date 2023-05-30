<template>
  <div class="row col-12 col-md-6 mx-auto mt-4">
    <search-input @searchUser="onClickSearchValue($event)"></search-input>
    <search-result :value="value"></search-result>
  </div>
</template>

<script>
import SearchInput from './SearchInput.vue'
import SearchResult from './SearchResult.vue'
import { evenBus } from '../main'

export default {
  components: {
     SearchInput,
     SearchResult,
  },
  data() {
    return {
      value: '',
      totalCount: 0,
      pageCurrent: 1,
    }
  },
  created() {
    evenBus.$on('changePage', (page)=> {
      this.$store.dispatch('fetchUser', {value: this.value, page: page})
    })
  },
  methods: {
    onClickSearchValue(value){
      this.value = value;
      this.$store.dispatch('fetchUser', {value: this.value, page: this.pageCurrent})
    }
  },
}
</script>
<style></style>
