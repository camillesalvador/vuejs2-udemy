<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <form>
                        <input class="form-control" type="text" v-model="firstName" placeholder="First Name">
                        <input class="form-control" type="text" v-model="lastName" placeholder="Last Name">
                        <!-- Mail -->
                        <input class="form-control" type="text" v-model="mail" placeholder="Mail">
                        <!-- Password -->
                        <input class="form-control" type="password" v-model="password" placeholder="Password">
                        <!-- Store Data? Yes/No -->
                        Store data <br>
                        <label for="one">Yes</label>
                        <input class="form-control" type="radio" id="one" value="Yes" v-model="storeData">
                        <label for="two">No</label>
                        <input class="form-control" type="radio" id="two" value="No" v-model="storeData">

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                        <button class="btn btn-primary" @click.prevent="submitted = true">Submit</button>
                    </form>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <full-name :fullname="fullName"></full-name>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ firstName }} {{ lastName }}</p>
                        <p>Mail: {{ mail }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                        <p>Full Name 2: {{ fullName }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './components/FullName.vue';
    export default {
        components: {
            FullName
        },
        data() {
            return {
                firstName: '',
                lastName: '',
                fullName: 'Camille Salvador',
                mail: '',
                password: '',
                storeData: 'No',
                submitted: false
            }
        }
    }
</script>

<style>
</style>
