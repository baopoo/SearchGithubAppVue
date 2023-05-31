<template>
    <div class="repo-item border-bottom py-3 px-1">
        <h4 @click="onClickSearchCommit()">{{this.repo.name}}</h4>
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
    },
    methods: {
        onClickSearchCommit(){
            this.$router.push({path: '/commit', query: {name: this.repo.owner.login, repo: this.repo.name}})
            this.$store.dispatch('fetchCommit', {owner: this.repo.owner.login, repo: this.repo.name})
        }
    }
}
</script>
<style scoped>
    h4{
        margin-bottom: 0px;
    }
    h4:hover {
        text-decoration: underline;
        cursor: pointer;
    }
</style>