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
export type ElectricCarChargingProps = typeof __propDef.props;
export type ElectricCarChargingEvents = typeof __propDef.events;
export type ElectricCarChargingSlots = typeof __propDef.slots;
export default class ElectricCarCharging extends SvelteComponentTyped<ElectricCarChargingProps, ElectricCarChargingEvents, ElectricCarChargingSlots> {
}
export {};
