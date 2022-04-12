export declare class Connection {
    private isworker;
    private _worker;
    private queryManager;
    private requestQueue;
    private requesting;
    constructor(worker?: Worker);
    private processFinished;
    private onResponse;
    private addQuery;
    private proceedRequest;
    private postRequest;
}
