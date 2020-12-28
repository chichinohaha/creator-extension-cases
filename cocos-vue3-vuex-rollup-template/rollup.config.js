import VuePlugin from 'rollup-plugin-vue';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import NodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import { getInputs } from './build-utils/rollup-config-utils';

const debugConfig = {
    input: getInputs(),
    output: {
        format: 'cjs',
        dir: path.resolve(__dirname, 'dist'),
        globals: { vue: 'Vue' },
    },
    plugins: [
        VuePlugin({
            compilerOptions:{
                isCustomElement:tags => tags.startsWith('ui-'),
            },
            defaultLang: { script: 'ts' },
        }),
        typescript({
            tsconfig: path.resolve('tsconfig.json'),
        }),
        NodeResolve(),
        commonjs(),
        postcss({
            extract: path.resolve('dist/panels/css/all.css'),
        }),
        babel(),
        copy({
            targets: [{ src: 'public/*', dest: 'dist/' }],
        }),
    ],
    /**
     * 
     * @param {*} id 
     * @en Declare external modules to avoid generating external module scripts in directories
     * @zh 声明外部模块，避免在目录生成外部模块脚本
     */
    external(id) {
        return /^(vue)$/.test(id) || /^(vuex)$/.test(id);
    },
};

const releaseConfig = {
    input: getInputs(),
    output: {
        format: 'cjs',
        dir: path.join(__dirname, 'dist'),
        globals: { vue: 'Vue' },
    },
    plugins: [
        VuePlugin({
            compilerOptions: {
                isCustomElement: tags => tags.startsWith('ui-'),
            },
            defaultLang: { script: 'ts' },
        }),
        commonjs(),
        replace({
            /**
             * @see https://v3.vuejs.org/guide/tooling/deployment.html#turn-on-production-mode
             * @en Turn on Production Mode
             * @zh 开启生产环境模式
             */
            'process.env.NODE_ENV': JSON.stringify('production'),

        }),
        typescript({
            tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        }),
        NodeResolve(),

        postcss({
            extract: path.resolve(__dirname, 'dist/panels/css/all.css'),
        }),
        babel(),
        copy({
            targets: [{ src: 'public/*', dest: 'dist/' }],
        }),
        terser(),
    ],
    /**
     * 
     * @param {*} id 
     * @en Declare external modules to avoid generating external module scripts in directories
     * @zh 声明外部模块，避免在目录生成外部模块脚本
     */
    external(id) {
        // return /^(vue)$/.test(id); || /^(vuex)$/.test(id)
    },
};

export default (commandLineArgs) => {
    if (commandLineArgs.configDebug === true) {
        return debugConfig;
    }
    return releaseConfig;
};

