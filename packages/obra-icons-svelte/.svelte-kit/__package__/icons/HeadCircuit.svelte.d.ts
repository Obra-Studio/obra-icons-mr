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
export type HeadCircuitProps = typeof __propDef.props;
export type HeadCircuitEvents = typeof __propDef.events;
export type HeadCircuitSlots = typeof __propDef.slots;
export default class HeadCircuit extends SvelteComponentTyped<HeadCircuitProps, HeadCircuitEvents, HeadCircuitSlots> {
}
export {};
