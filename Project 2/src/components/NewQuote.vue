<template>
    <div class="row justify-content-center">
        <div class="form-group col-sm-6">
            <label>Quote</label>
            <textarea class="form-control" rows="3" v-model="newQuote"></textarea>
            <br>
            <button class="btn btn-primary" @click.prevent="emitQuote">Add Quote</button>
        </div>
    </div>
</template>

<script>
import { quoteBus } from '../main.js'
export default {
    data(){
        return{
            newQuote: ''
        }
    },
    methods: {
        emitQuote(){
            this.$emit('addQuote', this.newQuote)
            this.newQuote = ''
        }
    }
}
</script>
