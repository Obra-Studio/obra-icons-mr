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
export type FolderAddProps = typeof __propDef.props;
export type FolderAddEvents = typeof __propDef.events;
export type FolderAddSlots = typeof __propDef.slots;
export default class FolderAdd extends SvelteComponentTyped<FolderAddProps, FolderAddEvents, FolderAddSlots> {
}
export {};
