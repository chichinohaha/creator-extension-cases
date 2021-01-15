import App from './App.vue';
import store from './store';
import Vue from 'vue';
import { getCSSFromVue } from '../../panel-utils';
Vue.config.productionTip = false;
Vue.config.devtools = false;

/**
 * @en Listening to panel events
 * @zh 监听面板事件
 */
export const linsteners = {
    /**
     * @en Hooks triggered when the panel is displayed
     * @zh 面板显示的时候触发的钩子
     */
    show() { },
    /**
     * @en Hooks triggered when the panel is hidden
     * @zh 面板隐藏的时候触发的钩子
     */
    hide() { },
};

/**
 * @en Template of the panel
 * @zh 面板的内容
 */
export const template = '<div id=app></div>';

/**
 * @en Style of the panel 
 * @zh 面板上的样式
 */
export const style = getCSSFromVue();

/**
 * @en Selector of the panel
 * @zh 快捷选择器
 */
export const $ = { app: '#app' };

/**
 * @en Hooks triggered when the panel is ready
 * @zh 面板启动后触发的钩子函数
 */
export const ready = function(this:any) {

    const app:Element = this.$.app;
    new Vue({
        el: app,
        store,
        render: h => h(App),
    });

};

/**
 * @en The function that will be triggered when the panel is ready to close, and will terminate 
 * the closing of the panel if it returns false
 * @zh 面板准备关闭的时候会触发的函数，return false 的话，会终止关闭面板
 */
export const beforeClose = function() { };

/**
 * @en Hook functions after panel closure
 * @zh 面板关闭后的钩子函数
 */
export const close = function() { };
