<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Status: {{ server.status }}</p>
        <button @click="resetStatus">Reset Status</button>
    </div>

</template>

<script>
import { serverBus } from '../../main.js'
export default{
    data(){
        return{
            server: ''
        }
    },
    methods: {
        resetStatus(){
            this.server.status = "Normal"
        }
    },
    created(){
        serverBus.$on('serverDetail', e => this.server = e)
    }
}
</script>

<style>

</style>
