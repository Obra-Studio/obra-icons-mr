import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FolderDownloadProps = typeof __propDef.props;
export type FolderDownloadEvents = typeof __propDef.events;
export type FolderDownloadSlots = typeof __propDef.slots;
export default class FolderDownload extends SvelteComponentTyped<FolderDownloadProps, FolderDownloadEvents, FolderDownloadSlots> {
}
export {};
