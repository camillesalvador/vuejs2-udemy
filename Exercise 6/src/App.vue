<template>
    <div class="container">
        <server-header></server-header>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5" :key="index">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>
            <server-detail></server-detail>
        </div>
        <hr>
        <server-footer></server-footer>
    </div>
</template>

<script>
import ServerHeader from './components/ServerHeader.vue'
import ServerFooter from './components/ServerFooter.vue'
import ServerDetail from './components/ServerDetail.vue'

export default {
    components: {
        ServerHeader,
        ServerFooter,
        ServerDetail
    }
}
</script>

<style>

</style>
