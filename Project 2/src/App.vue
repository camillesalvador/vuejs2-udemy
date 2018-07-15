<template>
    <div class="container">
        <app-header></app-header>
        <new-quote @addQuote="addQuote"></new-quote>
        <div class="row">
            <quote
            v-for="(quote, index) in quotes"
            :key="index"
            :quote="quote"
            @click.native="deleteQuote(index)"
            ></quote>
        </div>
        <br>
        <app-footer class="row"></app-footer>
    </div>
</template>

<script>
    import { quoteBus } from './main.js'
    import Header from './components/Header.vue'
    import NewQuote from './components/NewQuote.vue'
    import Quote from './components/Quote.vue'
    import Footer from './components/Footer.vue'
    export default {
        data(){
            return{
                quotes: [
                    'Placeholder quote'
                ],
                max: 10
            }
        },
        components: {
            appHeader: Header,
            NewQuote,
            Quote,
            appFooter: Footer
        },
        methods: {
            addQuote(e){
                if(this.quotes.length <= this.max) {
                    this.quotes.push(e)
                }else{
                    alert(`Max quotes reached: ${this.max}. Delete some to add.`)
                }
            },
            deleteQuote(index){
                this.quotes.splice(index, 1)
            }
        }
    }
</script>

<style scoped>
.card:hover{
    cursor: pointer;
}
</style>
