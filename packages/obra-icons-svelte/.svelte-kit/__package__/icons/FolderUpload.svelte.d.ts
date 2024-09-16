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
export type FolderUploadProps = typeof __propDef.props;
export type FolderUploadEvents = typeof __propDef.events;
export type FolderUploadSlots = typeof __propDef.slots;
export default class FolderUpload extends SvelteComponentTyped<FolderUploadProps, FolderUploadEvents, FolderUploadSlots> {
}
export {};
