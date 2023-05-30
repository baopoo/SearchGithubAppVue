<template>
    <div class="repo-item border-bottom py-3 px-1">
        <h4>{{this.repo.name}}</h4>
        <div class="d-flex gap-5">
            <span>Start number : {{ this.repo.stargazers_count }}</span>
            <span>Issues number : {{ this.repo.open_issues_count }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        repo: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
    h4{
        margin-bottom: 0px;
    }
  .repo-item:hover{
    cursor: pointer;
    background-color: gray;
  }
</style>