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
export type ReorderProps = typeof __propDef.props;
export type ReorderEvents = typeof __propDef.events;
export type ReorderSlots = typeof __propDef.slots;
export default class Reorder extends SvelteComponentTyped<ReorderProps, ReorderEvents, ReorderSlots> {
}
export {};
