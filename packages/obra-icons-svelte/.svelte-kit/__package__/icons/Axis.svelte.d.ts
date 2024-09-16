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
export type AxisProps = typeof __propDef.props;
export type AxisEvents = typeof __propDef.events;
export type AxisSlots = typeof __propDef.slots;
export default class Axis extends SvelteComponentTyped<AxisProps, AxisEvents, AxisSlots> {
}
export {};
