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
export type CalculatorFillProps = typeof __propDef.props;
export type CalculatorFillEvents = typeof __propDef.events;
export type CalculatorFillSlots = typeof __propDef.slots;
export default class CalculatorFill extends SvelteComponentTyped<CalculatorFillProps, CalculatorFillEvents, CalculatorFillSlots> {
}
export {};
