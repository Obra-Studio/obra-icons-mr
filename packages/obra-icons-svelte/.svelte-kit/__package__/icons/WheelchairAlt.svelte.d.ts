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
export type WheelchairAltProps = typeof __propDef.props;
export type WheelchairAltEvents = typeof __propDef.events;
export type WheelchairAltSlots = typeof __propDef.slots;
export default class WheelchairAlt extends SvelteComponentTyped<WheelchairAltProps, WheelchairAltEvents, WheelchairAltSlots> {
}
export {};
