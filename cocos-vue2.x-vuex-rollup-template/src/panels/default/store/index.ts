import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
/**
 * @en @see https://vuex.vuejs.org/  vuex document
 * @zh @see https://vuex.vuejs.org/zh/  vuex 文档
 */
const store = new Vuex.Store({
    state: {
        counter: 1000,

    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
    },
    actions: {

    },
    getters: {

    },
});

export default store;
