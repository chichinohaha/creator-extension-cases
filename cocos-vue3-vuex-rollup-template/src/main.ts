/**
 * @en Registration method for the extended master process
 * @zh 为扩展的主进程的注册方法
 */
export const methods = {
    open_panel() {
        Editor.Panel.open('cocos-vue3-vex-rollup-template');
    },
    open_panel1() {
        Editor.Panel.open('cocos-vue3-vex-rollup-template.panel1');
    },
};

/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
export const load = function() { };

/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
export const unload = function() { };
