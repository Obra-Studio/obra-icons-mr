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
export type HeartOffProps = typeof __propDef.props;
export type HeartOffEvents = typeof __propDef.events;
export type HeartOffSlots = typeof __propDef.slots;
export default class HeartOff extends SvelteComponentTyped<HeartOffProps, HeartOffEvents, HeartOffSlots> {
}
export {};
