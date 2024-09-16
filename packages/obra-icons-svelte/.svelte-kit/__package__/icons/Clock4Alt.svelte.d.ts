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
export type Clock4AltProps = typeof __propDef.props;
export type Clock4AltEvents = typeof __propDef.events;
export type Clock4AltSlots = typeof __propDef.slots;
export default class Clock4Alt extends SvelteComponentTyped<Clock4AltProps, Clock4AltEvents, Clock4AltSlots> {
}
export {};
