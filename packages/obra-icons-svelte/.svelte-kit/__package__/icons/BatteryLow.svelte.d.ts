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
export type BatteryLowProps = typeof __propDef.props;
export type BatteryLowEvents = typeof __propDef.events;
export type BatteryLowSlots = typeof __propDef.slots;
export default class BatteryLow extends SvelteComponentTyped<BatteryLowProps, BatteryLowEvents, BatteryLowSlots> {
}
export {};
