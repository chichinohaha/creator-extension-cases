declare const cc:any;
// 模块加载的时候触发的函数
export const load = function() {};
// 模块卸载的时候触发的函数
export const unload = function() {};

// 模块内定义的方法
export const methods = {
    log() {
        const scene = cc.director.getScene();
        if (scene) {
            scene.walk((target: any) => console.log(target.name));
        } else {
            console.warn('Scene not found');
        }
    },
};
