import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

Vue.filter('getLength', value => `${value} (${value.length})`)

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

Vue.mixin({
    computed: {
        reverseText2(){
            return this.text.split('').reverse().join('');
        },
        getLength2(){
            return `${this.text} (${this.text.length})`;
        }
    }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
