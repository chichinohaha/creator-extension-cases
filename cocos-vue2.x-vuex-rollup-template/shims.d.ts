declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module '*.txt' {
    const relativePath:string;
    export default relativePath;
}

declare module '*.svg' {
    const relativePath:string;
    export default relativePath;
}

declare module '*.jpg'{
    const relativePath:string;
    export default relativePath;
}

declare module '*.jpeg'{
    const relativePath:string;
    export default relativePath;
}

declare module '*.gif'{
    const relativePath:string;
    export default relativePath;
}

declare module '*.webp'{
    const relativePath:string;
    export default relativePath;
}

/**
 * @deprecated 
 * @en Relative paths in rollup are unreliable
 * @zh 在 rollup 中相对路径不可靠
 */
declare const __filename:undefined;
/**
 * @deprecated
 * @en Relative paths in rollup are unreliable
 * @zh 在 rollup 中相对路径不可靠
 */
declare const __dirname:undefined;
