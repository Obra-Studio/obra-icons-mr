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
export type SpeedometerProps = typeof __propDef.props;
export type SpeedometerEvents = typeof __propDef.events;
export type SpeedometerSlots = typeof __propDef.slots;
export default class Speedometer extends SvelteComponentTyped<SpeedometerProps, SpeedometerEvents, SpeedometerSlots> {
}
export {};
