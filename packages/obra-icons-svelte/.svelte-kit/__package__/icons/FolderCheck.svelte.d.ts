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
export type FolderCheckProps = typeof __propDef.props;
export type FolderCheckEvents = typeof __propDef.events;
export type FolderCheckSlots = typeof __propDef.slots;
export default class FolderCheck extends SvelteComponentTyped<FolderCheckProps, FolderCheckEvents, FolderCheckSlots> {
}
export {};
