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
export type BatteryMediumProps = typeof __propDef.props;
export type BatteryMediumEvents = typeof __propDef.events;
export type BatteryMediumSlots = typeof __propDef.slots;
export default class BatteryMedium extends SvelteComponentTyped<BatteryMediumProps, BatteryMediumEvents, BatteryMediumSlots> {
}
export {};
