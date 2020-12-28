import pkgjson from '../package.json';
/**
 * @en Get the packaged entry from package.json
 * @zh 从package.json获取打包的入口
 */
export function getInputs() {
    const input = {};
    if (pkgjson.panels) {
        for (const key in pkgjson.panels) {
            if (Object.hasOwnProperty.call(pkgjson.panels, key)) {
                const element = pkgjson.panels[key];
                const main = element.main;
                if (typeof main === 'string') {
                    input[main.replace('.js', '').replace('dist/', '')] = main.replace('dist', 'src').replace('.js', '.ts');
                }
            }
        }
    }
    if (pkgjson.main) {
        const main = pkgjson.main;
        input[main.replace('.js', '').replace('dist/', '')] = main.replace('dist', 'src').replace('.js', '.ts');
    }
    if (pkgjson.contributions.scene)
    {
        const scene = pkgjson.contributions.scene.script;
        input[scene.replace('.js', '').replace('dist/', '')] = scene.replace('dist', 'src').replace('.js', '.ts');
    }
    return input;
}
