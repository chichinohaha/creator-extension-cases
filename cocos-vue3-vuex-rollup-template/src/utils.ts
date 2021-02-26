/* eslint-disable @typescript-eslint/ban-ts-comment */
import { join } from 'path';
// @ts-ignore
import { name } from '../package.json';
/**
 * @en Return the absolute path of the current extension
 * @zh 返回当前插件的绝对路径
 */
export function getExtensionDir():string {
    return join(Editor.Project.path, 'extensions', name);
}
