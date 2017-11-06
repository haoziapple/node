<template>
    <div class="user">
        <h1>User id:{{ $route.params.id }}, name:{{ $route.params.name }}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'userWangHao'
    }
</script>

<style>
    .user {
        border-width: 5px;
        border-color: blue;
        border-style: solid
    }
</style>