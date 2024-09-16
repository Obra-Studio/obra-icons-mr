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
export type NumberFieldProps = typeof __propDef.props;
export type NumberFieldEvents = typeof __propDef.events;
export type NumberFieldSlots = typeof __propDef.slots;
export default class NumberField extends SvelteComponentTyped<NumberFieldProps, NumberFieldEvents, NumberFieldSlots> {
}
export {};
