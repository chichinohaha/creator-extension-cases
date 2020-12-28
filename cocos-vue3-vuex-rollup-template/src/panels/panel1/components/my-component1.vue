<template>
  <div>
    <hr />
    <i>{{$store.state.counter}}</i>
    <h2 id="hhh">{{message}}</h2>
  </div>
</template>

<script>
export default {
    name: 'my-component1',
    props: ["message"],
    data() {
        return {};
    },
    mounted() { },
    methods: {},
};

</script>

<style scoped>
  #hhh {
    color: blue;
  }
</style>
