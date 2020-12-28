<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <ui-button class="blue"
               @click="addition">+</ui-button>
    <ui-button @click="subtraction">-</ui-button>
    <ui-button @click="log">Say Hello</ui-button>
    <my-component :message="testMessage"></my-component>
  </div>
</template>

<script lang="ts">

import MyComponent from './components/my-component.vue';
import { defineComponent } from 'vue';
import store from './store';
export default defineComponent({
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
