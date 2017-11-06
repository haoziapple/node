<template>  
    <div class="com1">
        <h1>Com1.vue</h1>
        <input type="text">
        <!-- TODO:组件怎样自动导入？ -->
        <haozi id="id"></haozi>
    </div>
</template>


<script>
import haozi from './haozi'
    export default {
        name: 'component1',
        methods: {
            
        },
        data () {
            return {
                
            }
        },
        render: function (createElement, context) {
            
        },
        filters: {
            
        },
        components: {
            haozi
        }
    }
</script>

<style>
    .com1 {
        border-width: 5px;
        border-color: red;
        border-style: solid
    }
</style>
