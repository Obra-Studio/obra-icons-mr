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
export type WheelchairProps = typeof __propDef.props;
export type WheelchairEvents = typeof __propDef.events;
export type WheelchairSlots = typeof __propDef.slots;
export default class Wheelchair extends SvelteComponentTyped<WheelchairProps, WheelchairEvents, WheelchairSlots> {
}
export {};
