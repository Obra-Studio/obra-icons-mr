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
export type RadioOffProps = typeof __propDef.props;
export type RadioOffEvents = typeof __propDef.events;
export type RadioOffSlots = typeof __propDef.slots;
export default class RadioOff extends SvelteComponentTyped<RadioOffProps, RadioOffEvents, RadioOffSlots> {
}
export {};
