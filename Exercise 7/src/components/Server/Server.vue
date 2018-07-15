<template>
    <li class="list-group-item" @click="emitServer(server)">
        Server #{{ server.id }}
    </li>
</template>

<script>
import { serverBus } from '../../main.js'
export default {
    props: ['server'],
    methods: {
        emitServer(server){
            serverBus.$emit('serverDetail', server)
        }
    }
}
</script>
