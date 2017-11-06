<template>
    <div class="haozi">
        <h1>{{msg}}</h1>
        <h2>test</h2>
    </div>
</template>

<script>
    export default {
        name: 'haozi',
        data () {
            return {
                msg: 'Welcome to haozixiaowang vue!!'
            }
        },
        render: function (createElement, context) {
            
        },
        filters: {
            
        }
    }
</script>

<style>
    .haozi {
        border-width: 5px;
        border-color: yellowgreen;
        border-style: solid
    }
</style>