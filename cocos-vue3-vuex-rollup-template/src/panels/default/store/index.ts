import { createStore } from "vuex";
/**
 * @en @see https://next.vuex.vuejs.org/  vuex document
 * @zh @see https://next.vuex.vuejs.org/   vuex 文档
 */
export default createStore({
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
