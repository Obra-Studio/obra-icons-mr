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
export type TruckAltProps = typeof __propDef.props;
export type TruckAltEvents = typeof __propDef.events;
export type TruckAltSlots = typeof __propDef.slots;
export default class TruckAlt extends SvelteComponentTyped<TruckAltProps, TruckAltEvents, TruckAltSlots> {
}
export {};
