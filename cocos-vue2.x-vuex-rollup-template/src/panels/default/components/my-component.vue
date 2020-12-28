<template>
  <div>
    <hr />
    <i>{{$store.state.counter}}</i>
    <h2 id="hhh">{{message}}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'my-component',
    props: ['message'],
    data() {
        return {};
    },
    mounted() { },
    methods: {},
});

</script>

<style scoped>
#hhh {
    color: red;
}
</style>
