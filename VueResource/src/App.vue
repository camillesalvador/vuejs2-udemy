<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input type="text" class="form-control" v-model="user.mail">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(u, index) in users" :key="index">{{ u.username }} - {{ u.mail }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    mail: ''
                },
                users: []
            }
        },
        methods: {
            submit(){
                console.log(this.user);
                this.$http.post('', this.user)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    });
            },
            fetchData(){
                this.$http.get('')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const resultArr = [];
                        for(let key in data){
                            resultArr.push(data[key]);
                        }
                        this.users = resultArr;
                    });
            }
        }
    }
</script>

<style>
</style>
