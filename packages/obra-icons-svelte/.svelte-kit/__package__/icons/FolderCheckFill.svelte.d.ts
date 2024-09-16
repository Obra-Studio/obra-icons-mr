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
export type FolderCheckFillProps = typeof __propDef.props;
export type FolderCheckFillEvents = typeof __propDef.events;
export type FolderCheckFillSlots = typeof __propDef.slots;
export default class FolderCheckFill extends SvelteComponentTyped<FolderCheckFillProps, FolderCheckFillEvents, FolderCheckFillSlots> {
}
export {};
