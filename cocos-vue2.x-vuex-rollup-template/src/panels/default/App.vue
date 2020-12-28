<template>
  <div>
    <h2> {{$store.state.counter}}</h2>
    <ui-button class="blue"
               @click="addition">+</ui-button>
    <ui-button @click="subtraction">-</ui-button>
    <ui-button @click="log">Say Hello</ui-button>
    <my-component :message="testMessage"></my-component>
  </div>
</template>

<script lang="ts">

import MyComponent from './components/my-component.vue';
import Vue from 'vue';

export default Vue.extend({
    components: { MyComponent },

    name: 'App',
    data() {
        return {
            testMessage: 'This should be red',
        };
    },
    methods: {
        log() {
            console.log('Hello, I am default panel.');
        },
        addition() {
            this.$store.commit('increment');
            console.log(this.$store.state.counter);
        },
        subtraction() {
            this.$store.commit('decrement');
            console.log(this.$store.state.counter);
        },
    },
});

</script>

<style scoped>

</style>
