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
export type TemperatureProps = typeof __propDef.props;
export type TemperatureEvents = typeof __propDef.events;
export type TemperatureSlots = typeof __propDef.slots;
export default class Temperature extends SvelteComponentTyped<TemperatureProps, TemperatureEvents, TemperatureSlots> {
}
export {};
