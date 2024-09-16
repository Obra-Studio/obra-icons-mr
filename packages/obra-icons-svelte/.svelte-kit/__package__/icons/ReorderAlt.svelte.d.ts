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
export type ReorderAltProps = typeof __propDef.props;
export type ReorderAltEvents = typeof __propDef.events;
export type ReorderAltSlots = typeof __propDef.slots;
export default class ReorderAlt extends SvelteComponentTyped<ReorderAltProps, ReorderAltEvents, ReorderAltSlots> {
}
export {};
