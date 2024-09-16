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
export type ArchiveBoxFillProps = typeof __propDef.props;
export type ArchiveBoxFillEvents = typeof __propDef.events;
export type ArchiveBoxFillSlots = typeof __propDef.slots;
export default class ArchiveBoxFill extends SvelteComponentTyped<ArchiveBoxFillProps, ArchiveBoxFillEvents, ArchiveBoxFillSlots> {
}
export {};
