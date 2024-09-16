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
export type BatteryEmptyProps = typeof __propDef.props;
export type BatteryEmptyEvents = typeof __propDef.events;
export type BatteryEmptySlots = typeof __propDef.slots;
export default class BatteryEmpty extends SvelteComponentTyped<BatteryEmptyProps, BatteryEmptyEvents, BatteryEmptySlots> {
}
export {};
