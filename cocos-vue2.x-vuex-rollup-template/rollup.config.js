import VuePlugin from 'rollup-plugin-vue';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import path, { join } from 'path';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import { getInputs } from './build-utils/rollup-config-utils';
import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';
import { outputDir } from './.editor.js';
import del from 'rollup-plugin-delete';
const debugConfig = {
    input: getInputs(),
    output: {
        format: 'cjs',
        dir: path.resolve(__dirname, outputDir),
        globals: { vue: 'Vue' },
    },
    plugins: [
        VuePlugin({
            compilerOptions:{
                isCustomElement:tags => tags.startsWith('ui-'),
            },
            css: false,
        }),
        typescript({
            tsconfig: path.resolve('tsconfig.json'),
        }),
        commonjs(),
        postcss({
            extract: path.resolve(outputDir, 'panels/css/all.css'),
        }),
        babel(),
        json(),
        url({
            limit:0,
            fileName: '[dirname][name][extname]',
            sourceDir: path.join(__dirname, 'src'),
            include:['**/*.svg', '**/*.png', '**/*.jp(e)?g', '**/*.gif', '**/*.webp', '**/*.txt'],
        }),
        del({
            'targets':outputDir + '/*',
            runOnce:true,
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
        dir: path.join(__dirname, outputDir),
        globals: { vue: 'Vue' },
    },
    plugins: [
        VuePlugin({
            compilerOptions: {
                isCustomElement: tags => tags.startsWith('ui-'),
            },
            defaultLang: { script: 'ts' },
            css: false,
        }),
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
            check: false,
        }),

        commonjs(),
        postcss({
            extract: path.resolve(outputDir, 'panels/css/all.css'),
        }),
        babel(),
        terser(),
        json(),

        url({
            limit:0,
            fileName: '[dirname][name][extname]',
            sourceDir: path.join(__dirname, 'src'),
            include:['**/*.svg', '**/*.png', '**/*.jp(e)?g', '**/*.gif', '**/*.webp', '**/*.txt'],
        }),
        del({
            'targets':outputDir + '/*',
        }),
    ],
    /** 
     * 
     * @param {*} id 
     * @en Declare external modules to avoid generating external module scripts in directories
     * @zh 声明外部模块，避免在目录生成外部模块脚本
     */
    external(id) {
        // return /^(vue)$/.test(id) || /^(vuex)$/.test(id)
    },
};

export default (commandLineArgs) => {
    if (commandLineArgs.configDebug === true) {
        return debugConfig;
    }
    return releaseConfig;
};

