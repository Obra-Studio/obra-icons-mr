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
export type LeafFillProps = typeof __propDef.props;
export type LeafFillEvents = typeof __propDef.events;
export type LeafFillSlots = typeof __propDef.slots;
export default class LeafFill extends SvelteComponentTyped<LeafFillProps, LeafFillEvents, LeafFillSlots> {
}
export {};
