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
export type FolderFillProps = typeof __propDef.props;
export type FolderFillEvents = typeof __propDef.events;
export type FolderFillSlots = typeof __propDef.slots;
export default class FolderFill extends SvelteComponentTyped<FolderFillProps, FolderFillEvents, FolderFillSlots> {
}
export {};
