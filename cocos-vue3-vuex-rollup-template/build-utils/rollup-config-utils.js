import pkgjson from '../package.json';

/**
 * @en Get the packaged entry from package.json
 * @zh 从package.json获取打包的入口
 */
export function getInputs() {
    const input = {};
    function pushIntoInput(path) {
        if (typeof path === 'string') {
            input[path.replace('.js', '').replace('dist/', '')] = path.replace('dist', 'src').replace('.js', '.ts');
        }
    }
    const panels = pkgjson.panels;
    if (panels) {
        for (const key in panels) {
            if (Object.hasOwnProperty.call(panels, key)) {
                const element = panels[key];
                const main = element.main;
                if (main) {
                    pushIntoInput(main);
                }
            }
        }
    }
    const main = pkgjson.main;
    if (main) {
        pushIntoInput(main);
    }
    const contributions = pkgjson.contributions;
    if (contributions) {
        const scene = pkgjson.contributions.scene;
        if (scene) {
            const script = scene.script;
            if (script) {
                pushIntoInput(script);
            }
        }
        const builder = pkgjson.contributions.builder;
        if (builder) {
            pushIntoInput(builder);
        }
        const preferences = pkgjson.contributions.preferences;
        if (preferences) {
            const custom = preferences.custom;
            if (custom) {
                pushIntoInput(custom);
            }
        }
        const project = pkgjson.contributions.project;
        if (project) {
            const custom = project.custom;
            if (custom) {
                pushIntoInput(custom);
            }
        }
    }
    return input;
}

