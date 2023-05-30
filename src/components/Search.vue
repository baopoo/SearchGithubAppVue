<template>
  <div class="row col-12 col-md-6 mx-auto mt-4">
    <app-search-input @searchUser="onClickSearchValue($event)"></app-search-input>
    <app-search-result :value="value"></app-search-result>
  </div>
</template>

<script>
import SearchInput from './SearchInput.vue'
import SearchResult from './SearchResult.vue'
import { evenBus } from '../main'

export default {
  components: {
    'app-search-input': SearchInput,
    'app-search-result': SearchResult,
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
      this.$store.dispatch('updateUserActions', {value: this.value, page: page})
    })
  },
  methods: {
    onClickSearchValue(value){
      this.value = value;
      this.$store.dispatch('updateUserActions', {value: this.value, page: this.pageCurrent})
    }
  },
}
</script>
<style></style>
