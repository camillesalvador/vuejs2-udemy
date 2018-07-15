<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server v-for="(server, index) in servers" :key="index" :server="server"></server>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue'
export default{
    components: {
        Server
    },
    data() {
        return {
            servers: [
                { id: 1, status: 'Normal' },
                { id: 2, status: 'Critical' },
                { id: 3, status: 'Unknown' },
                { id: 4, status: 'Normal' },
                { id: 5, status: 'Critical' },
            ]
        }
    }
}
</script>

<style>

</style>
