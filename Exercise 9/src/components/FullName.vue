<template>
    <div>
        <input class="form-control" type="text" :value="firstName" placeholder="First Name" @input="changeName(true, $event)">
        <input class="form-control" type="text" :value="lastName" placeholder="Last Name" @input="changeName(false, $event)">
    </div>
</template>

<script>
export default {
    props: ['fullname'],
    data(){
        return {
            value: this.fullname
        }
    },
    computed: {
        firstName(){
            return this.value.split(' ')[0]
        },
        lastName(){
            return this.value.split(' ')[1]
        }
    },
    methods: {
        changeName(isFirst, event){
            let name = '';
            if(isFirst){
                name = `${event.target.value} ${this.lastName}`;
            }else{
                name = `${this.firstName} ${event.target.value}`;
            }
            this.value = name;
            this.$emit('input', this.value);
        }
    }
}
</script>
