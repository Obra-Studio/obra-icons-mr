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
export type WheelchairMotionProps = typeof __propDef.props;
export type WheelchairMotionEvents = typeof __propDef.events;
export type WheelchairMotionSlots = typeof __propDef.slots;
export default class WheelchairMotion extends SvelteComponentTyped<WheelchairMotionProps, WheelchairMotionEvents, WheelchairMotionSlots> {
}
export {};
