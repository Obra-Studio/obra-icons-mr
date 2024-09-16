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
export type BatteryFullProps = typeof __propDef.props;
export type BatteryFullEvents = typeof __propDef.events;
export type BatteryFullSlots = typeof __propDef.slots;
export default class BatteryFull extends SvelteComponentTyped<BatteryFullProps, BatteryFullEvents, BatteryFullSlots> {
}
export {};
