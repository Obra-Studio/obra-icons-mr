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
export type FolderAddFillProps = typeof __propDef.props;
export type FolderAddFillEvents = typeof __propDef.events;
export type FolderAddFillSlots = typeof __propDef.slots;
export default class FolderAddFill extends SvelteComponentTyped<FolderAddFillProps, FolderAddFillEvents, FolderAddFillSlots> {
}
export {};
