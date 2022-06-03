import { NotificareDevice } from './models/notificare-device';
import { NotificareDoNotDisturb } from './models/notificare-do-not-disturb';
export declare class NotificareDeviceModule {
    getCurrentDevice(): Promise<NotificareDevice | null>;
    getPreferredLanguage(): Promise<string | null>;
    updatePreferredLanguage(language: string | null): Promise<void>;
    register(userId: string | null, userName: string | null): Promise<void>;
    fetchTags(): Promise<string[]>;
    addTag(tag: string): Promise<void>;
    addTags(tags: string[]): Promise<void>;
    removeTag(tag: string): Promise<void>;
    removeTags(tags: string[]): Promise<void>;
    clearTags(): Promise<void>;
    fetchDoNotDisturb(): Promise<NotificareDoNotDisturb | null>;
    updateDoNotDisturb(dnd: NotificareDoNotDisturb): Promise<void>;
    clearDoNotDisturb(): Promise<void>;
    fetchUserData(): Promise<Record<string, string>>;
    updateUserData(userData: Record<string, string>): Promise<void>;
}
//# sourceMappingURL=notificare-device-module.d.ts.map