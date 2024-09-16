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
export type CalculatorProps = typeof __propDef.props;
export type CalculatorEvents = typeof __propDef.events;
export type CalculatorSlots = typeof __propDef.slots;
export default class Calculator extends SvelteComponentTyped<CalculatorProps, CalculatorEvents, CalculatorSlots> {
}
export {};
