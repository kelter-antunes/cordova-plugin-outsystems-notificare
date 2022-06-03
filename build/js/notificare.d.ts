import { NotificareDeviceModule } from './notificare-device-module';
import { NotificareEventsModule } from './notificare-events-module';
import { EventSubscription } from './events';
import { NotificareApplication } from './models/notificare-application';
import { NotificareNotification } from './models/notificare-notification';
import { NotificareDevice } from './models/notificare-device';
export declare class Notificare {
    private static readonly deviceModule;
    private static readonly eventsModule;
    static device(): NotificareDeviceModule;
    static events(): NotificareEventsModule;
    static isConfigured(): Promise<boolean>;
    static isReady(): Promise<boolean>;
    static launch(): Promise<void>;
    static unlaunch(): Promise<void>;
    static getApplication(): Promise<NotificareApplication | null>;
    static fetchApplication(): Promise<NotificareApplication>;
    static fetchNotification(id: string): Promise<NotificareNotification>;
    static onReady(callback: (application: NotificareApplication) => void): EventSubscription;
    static onUnlaunched(callback: () => void): EventSubscription;
    static onDeviceRegistered(callback: (device: NotificareDevice) => void): EventSubscription;
    static onUrlOpened(callback: (url: string) => void): EventSubscription;
}
//# sourceMappingURL=notificare.d.ts.map