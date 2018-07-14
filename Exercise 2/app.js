new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            storeValue(e){
                this.value = e.target.value;
            },
            alertMe(){
                alert('test');
            }
        }
    });