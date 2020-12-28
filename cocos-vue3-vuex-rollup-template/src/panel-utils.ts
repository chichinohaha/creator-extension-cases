import fs from 'fs';
import path from 'path';

/**
 * @en Get the CSS exported from all Vue files
 * @zh 获取从所有Vue文件中导出的CSS
 */
export function getCSSFromVue() {
    let cssStr: string;
    try {
        cssStr = fs.readFileSync(path.join(__dirname, 'panels/css/all.css'), 'utf-8');
    } catch (error) {
        if (path.join(__dirname, '../').endsWith('\\panels\\')) {
            try {
                cssStr = fs.readFileSync(path.join(__dirname, '../css/all.css'), 'utf-8');
            } catch (error) {
                cssStr = '';
            }
        } else {
            cssStr = '';
        }
    }
    return cssStr;
}

/**
 * @en Get the template from public/index.html
 * @zh 从public/index.html中获取模板
 */
export function getTemplateFromHtml() {
    let template: string;
    try {
        template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
    } catch (error) {
        if (path.join(__dirname, '../').endsWith('\\panels\\')) {
            try {
                template = fs.readFileSync(path.join(__dirname, '../../index.html'), 'utf-8');
            } catch (error) {
                template = '<div id="app"></div>';
            }
        } else {
            template = '<div id="app"></div>';
        }

    }
    return template;
}
