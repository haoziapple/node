<template>
    <div id="user">
        <h1>User id:{{ $route.params.id }}, name:{{ $route.params.name }}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'userWangHao'
    }
</script>