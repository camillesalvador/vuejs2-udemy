<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition name="fade" appear>
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition
                   enter-class=""
                   enter-active-class="animated bounce"
                   leave-class=""
                   leave-active-class="animated shake"
                >
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <hr>
                <transition name="fade" mode="out-in">
                <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                <div class="alert alert-warning" v-else key="warning">This is ome sinfo 2</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load/Remove Element</button>
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @after-cancelled="afterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="afterCancelled"
                >
                    <div style="width: 100px; height: 100px; background-color: lightgreen;" v-if="load"></div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                load: true
            }
        },
        methods: {
            beforeEnter() {
            },
            enter() {
            },
            afterEnter() {

            },
            afterCancelled(){

            },
            beforeLeave(){

            },
            leave(){

            },
            afterLeave(){

            },
            leaveCancelled() {

            }
        }
    }
</script>

<style>
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave{

    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter{
        opacity: 1;
    }
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }
    .slide-leave{}
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 3s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px)
        }
        to {
            transform: translateY(0)
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0)
        }
        to {
            transform: translateY(20px)
        }
    }
</style>
