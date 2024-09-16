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
export type CircuitryProps = typeof __propDef.props;
export type CircuitryEvents = typeof __propDef.events;
export type CircuitrySlots = typeof __propDef.slots;
export default class Circuitry extends SvelteComponentTyped<CircuitryProps, CircuitryEvents, CircuitrySlots> {
}
export {};
