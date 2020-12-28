/**
 * @en Registration method for extension's main process
 * @zh 为扩展的主进程的注册方法
 */
export const methods: { [key: string]: (...any: any) => any } = {
    say_hello() {
        console.log('[base-example]: hello.');
    },
};

/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
export const load = function() {
    console.log('[base-example]: loaded');
};

/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
export const unload = function() {
    console.log('[base-example]: unloaded');
};
