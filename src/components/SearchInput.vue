<template>
  <div>
    <a-input-search
      placeholder="input search text"
      enter-button="Search"
      v-model="value"
      size="large"
      @search="onSearch"
    />
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      value: '',
    }
  },
  methods: {
    onSearch(){
      if (this.value) {
        this.$router.push({path: '/', query: {name: this.value, page: 1}})
        this.$emit('searchUser', this.value)
      } else {
        Swal.fire('Oops !','Please Enter the github name you want to search ?', 'warning')

      }
    }
  }
  
}
</script>
<style></style>
