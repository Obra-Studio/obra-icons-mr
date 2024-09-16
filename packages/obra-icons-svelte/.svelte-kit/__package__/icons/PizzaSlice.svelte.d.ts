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
export type PizzaSliceProps = typeof __propDef.props;
export type PizzaSliceEvents = typeof __propDef.events;
export type PizzaSliceSlots = typeof __propDef.slots;
export default class PizzaSlice extends SvelteComponentTyped<PizzaSliceProps, PizzaSliceEvents, PizzaSliceSlots> {
}
export {};
