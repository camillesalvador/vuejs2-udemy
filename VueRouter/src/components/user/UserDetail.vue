<template>
    <div>
        <h3>Some User Details {{ $route.params.id }}</h3>
        <router-link tag="button" class="btn btn-primary" :to="`/user/${$route.params.id}/edit`">Edit</router-link>
    </div>
</template>