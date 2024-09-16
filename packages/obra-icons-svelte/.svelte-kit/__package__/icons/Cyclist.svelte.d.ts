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
export type CyclistProps = typeof __propDef.props;
export type CyclistEvents = typeof __propDef.events;
export type CyclistSlots = typeof __propDef.slots;
export default class Cyclist extends SvelteComponentTyped<CyclistProps, CyclistEvents, CyclistSlots> {
}
export {};
