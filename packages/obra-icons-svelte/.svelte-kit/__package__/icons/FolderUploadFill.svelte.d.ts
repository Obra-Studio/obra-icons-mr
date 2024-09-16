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
export type FolderUploadFillProps = typeof __propDef.props;
export type FolderUploadFillEvents = typeof __propDef.events;
export type FolderUploadFillSlots = typeof __propDef.slots;
export default class FolderUploadFill extends SvelteComponentTyped<FolderUploadFillProps, FolderUploadFillEvents, FolderUploadFillSlots> {
}
export {};
