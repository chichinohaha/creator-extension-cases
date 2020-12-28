import { FileFilter } from '../../../../cocos-vue3-vuex-rollup-template/@types/editor/dialog/public/node_modules/electron';
export interface SelectDialogOptions {
    title?: string;
    path?: string;
    type?: 'directory' | 'file';
    button?: string;
    multi?: boolean;
    filters?: FileFilter[];
}
export interface MessageDialogOptions {
    title?: string;
    detail?: string;
    default?: number;
    cancel?: number;
    checkboxLabel?: string;
    checkboxChecked?: boolean;
    buttons?: string[];
}
