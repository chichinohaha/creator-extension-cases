import fs from 'fs';
import { getAbsolutePath } from './utils';

/**
 * @en Get the CSS exported from all Vue files
 * @zh 获取从所有Vue文件中导出的CSS
 */
export function getCSSFromVue() {
    let cssStr:string;
    try {
        cssStr = fs.readFileSync(getAbsolutePath('panels/css/all.css'), 'utf-8');
    } catch (error) {
        cssStr = '';
    }
    return cssStr;
}


