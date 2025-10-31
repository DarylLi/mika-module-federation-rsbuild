export const editStore: EditorStore;
export class EditorStore {
    currentIndexDBInstance: null;
    currentFiles: any[];
    curTemplate: string;
    curType: string;
    curStatic: string;
    fileInfo: undefined;
    code: string;
    socket: null;
    showView: boolean;
    showSpin: boolean;
    logPanelRef: null;
    logMsg: any[];
    viewSrc: string;
    setCurrentIndexDBInstance(instance: any): void;
    setCurrentFiles(file: any): void;
    setLogPanelRef(ref: any): void;
    clearLog(): void;
    updateMsg(msg: any): void;
    initSocket(socket: any): void;
    updateSpin(show: any): void;
    updateInfo(data: any): void;
    updateCode(code: any): void;
    replaceFileContent(code: any): void;
    previewView(code: any): void;
}
