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
export type ButterflyProps = typeof __propDef.props;
export type ButterflyEvents = typeof __propDef.events;
export type ButterflySlots = typeof __propDef.slots;
export default class Butterfly extends SvelteComponentTyped<ButterflyProps, ButterflyEvents, ButterflySlots> {
}
export {};
