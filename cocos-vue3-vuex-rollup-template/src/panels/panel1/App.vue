<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <ui-button class="blue"
               @click="addition">+</ui-button>
    <ui-button @click="subtraction">-</ui-button>
    <ui-button @click="log">Say Hello</ui-button>
    <my-component-1 :message="testMessage"></my-component-1>
  </div>
</template>

<script lang="ts">

import MyComponent1 from './components/my-component1.vue';
import { defineComponent } from 'vue';
import store from './store';
export default defineComponent({
    components: { MyComponent1 },

    name: 'App',
    data() {
        return {
            testMessage: 'This should be blue',
        };
    },
    methods: {
        log() {
            console.log('Hello, I am panel1.');
        },
        addition() {
            store.commit('increment');
            console.log(store.state.counter);
        },
        subtraction() {
            store.commit('decrement');
            console.log(store.state.counter);
        },
    },
});
</script>

<style scoped>
</style>
