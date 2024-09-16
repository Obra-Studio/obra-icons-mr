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
export type FolderAltProps = typeof __propDef.props;
export type FolderAltEvents = typeof __propDef.events;
export type FolderAltSlots = typeof __propDef.slots;
export default class FolderAlt extends SvelteComponentTyped<FolderAltProps, FolderAltEvents, FolderAltSlots> {
}
export {};
