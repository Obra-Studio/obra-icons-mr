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
export type FolderRemoveProps = typeof __propDef.props;
export type FolderRemoveEvents = typeof __propDef.events;
export type FolderRemoveSlots = typeof __propDef.slots;
export default class FolderRemove extends SvelteComponentTyped<FolderRemoveProps, FolderRemoveEvents, FolderRemoveSlots> {
}
export {};
