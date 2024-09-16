import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FolderDownloadFillProps = typeof __propDef.props;
export type FolderDownloadFillEvents = typeof __propDef.events;
export type FolderDownloadFillSlots = typeof __propDef.slots;
export default class FolderDownloadFill extends SvelteComponentTyped<FolderDownloadFillProps, FolderDownloadFillEvents, FolderDownloadFillSlots> {
}
export {};
