'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @en
 * @zh 为扩展的主进程的注册方法
 */
var methods = {
    open_panel: function () {
        Editor.Panel.open('cocos-vue2.x-vuex-rollup-template');
    },
};
/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
var load = function () { };
/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
var unload = function () { };

exports.load = load;
exports.methods = methods;
exports.unload = unload;
