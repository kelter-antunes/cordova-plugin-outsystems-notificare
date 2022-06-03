export declare function bootstrap(): void;
export declare class EventSubscription {
    readonly event: string;
    readonly callback: (data: any) => void;
    constructor(event: string, callback: (data: any) => void);
    remove(): void;
}
//# sourceMappingURL=events.d.ts.map