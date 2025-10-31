export function doDebounceChange(time: any, fn: any): (...args: any[]) => void;
export function doThrottleChange(time: any, fn: any, ...args: any[]): (...args: any[]) => void;
export function registryIntervalTimeout(): void;
export function getCodeTransform(codeTxt: any, checkedFiles: any, rewrite?: boolean): Promise<void>;
export function getFileContent(files: any, path: any): any;
export function replaceFileContent(files: any, path: any, txt: any): void;
declare namespace _default {
    export { getCodeTransform };
}
export default _default;
