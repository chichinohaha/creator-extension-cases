import fs from 'fs';
import Vue from 'vue';
import Vuex from 'vuex';
import { getAbsolutePath } from '../../../utils';
import xxx from './XXX.txt';

Vue.use(Vuex);
const value = Number.parseFloat(fs.readFileSync(getAbsolutePath (xxx), 'utf-8'));
/**
 * @en @see https://vuex.vuejs.org/  vuex document
 * @zh @see https://vuex.vuejs.org/zh/  vuex 文档
 */
const store = new Vuex.Store({
    state: {
        counter: value,

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
