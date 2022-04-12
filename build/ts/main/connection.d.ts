export declare class Connection {
    private isworker;
    private _worker;
    private queryManager;
    constructor(worker?: Worker);
    private processFinished;
    private onResponse;
}
