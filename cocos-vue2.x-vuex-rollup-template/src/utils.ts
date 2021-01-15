/* eslint-disable @typescript-eslint/ban-ts-comment */
import { join } from 'path';
// @ts-ignore
import { name } from '../package.json';
// @ts-ignore
import { outputDir } from '../.editor.js';
/**
 * @en Return the absolute path of the current extension
 * @zh 返回当前插件的绝对路径
 */
export function getExtensionDir():string {
    return join(Editor.Project.path, 'extensions', name);
}

/**
 * @en Converts a path relative to source to an absolute path     
 * @zh 转化相对于 source 的路径到绝对路径     
 */
export function getAbsolutePath(relativePath:string):string {
    return join(getExtensionDir(), outputDir, relativePath);
}
