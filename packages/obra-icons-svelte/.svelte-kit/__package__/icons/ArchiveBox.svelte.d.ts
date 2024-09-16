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
export type ArchiveBoxProps = typeof __propDef.props;
export type ArchiveBoxEvents = typeof __propDef.events;
export type ArchiveBoxSlots = typeof __propDef.slots;
export default class ArchiveBox extends SvelteComponentTyped<ArchiveBoxProps, ArchiveBoxEvents, ArchiveBoxSlots> {
}
export {};
