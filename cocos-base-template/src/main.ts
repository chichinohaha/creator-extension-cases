/**
 * @en Registration method for extension's main process
 * @zh 为扩展的主进程的注册方法
 */
export const methods: { [key: string]: (...any: any) => any } = {
    say_hello() {
        console.log(`[base]: ${Editor.I18n.t('cocos-base-template.hello')}`);
    },
    async add_project_test_a() {
        const testA = await Editor.Profile.getProject('cocos-base-template', 'test.a');
        await Editor.Profile.setProject('cocos-base-template', 'test.a', testA + 1);
    },
    async add_editor_test_a() {
        const testA = await Editor.Profile.getConfig('cocos-base-template', 'test.a');
        await Editor.Profile.setConfig('cocos-base-template', 'test.a', testA + 1);
    },
    async on_project_profile_changed(key:string, value:any) {
        console.log(`[project profile changed]:key: ${key} value:`, value);
    },
    async on_editor_profile_changed(key:string, value:any) {
        console.log(`[editor profile changed]:key: ${key} value:`, value);
    },
};

/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
export const load = function() {
    console.log(`[base]: ${Editor.I18n.t('cocos-base-template.loaded')}`);
};

/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
export const unload = function() {
    console.log(`[base]:${Editor.I18n.t('cocos-base-template.unloaded')}`);
};
