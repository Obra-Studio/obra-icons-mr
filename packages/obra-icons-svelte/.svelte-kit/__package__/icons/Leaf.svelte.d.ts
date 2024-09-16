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
export type LeafProps = typeof __propDef.props;
export type LeafEvents = typeof __propDef.events;
export type LeafSlots = typeof __propDef.slots;
export default class Leaf extends SvelteComponentTyped<LeafProps, LeafEvents, LeafSlots> {
}
export {};
