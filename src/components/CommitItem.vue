<template>
  <a
    :href="'https://github.com/' + owner + '/'+ repo +'/commit/'+ commit.sha"
    target="_blank"
    class="commit-item border-bottom d-flex flex-column mt-2 py-2 px-2 rounded-2"
  >
    <slot></slot>
    <span><strong>Name</strong>: {{ commit.commit.author.name }}</span>
    <span><strong>Email</strong>: {{ commit.commit.author.email }}</span>
    <span><strong>Commit ID</strong>: {{ commit.sha }}</span>
    <span class="commit-message"
      ><strong>Commit message</strong>: {{ commit.commit.message }}</span
    >
  </a>
</template>
<script>
  export default {
    props: {
      commit : {
        type: Object,
        required: true
      },
      owner: {
        type: String,
        required: true
      },
      repo: {
        type: String,
        required: true
      }
    }
  };
</script>


<style scoped>
.commit-message {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  justify-content: baseline;
}
.commit-item:hover {
  cursor: pointer;
  background-color: rgb(175, 175, 175);
}
.commit-item {
  text-decoration: none;
  color: #000;
}
</style>
