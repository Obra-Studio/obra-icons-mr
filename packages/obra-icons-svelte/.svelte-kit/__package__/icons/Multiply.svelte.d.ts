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
export type MultiplyProps = typeof __propDef.props;
export type MultiplyEvents = typeof __propDef.events;
export type MultiplySlots = typeof __propDef.slots;
export default class Multiply extends SvelteComponentTyped<MultiplyProps, MultiplyEvents, MultiplySlots> {
}
export {};
