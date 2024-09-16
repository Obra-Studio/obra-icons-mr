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
export type TruckProps = typeof __propDef.props;
export type TruckEvents = typeof __propDef.events;
export type TruckSlots = typeof __propDef.slots;
export default class Truck extends SvelteComponentTyped<TruckProps, TruckEvents, TruckSlots> {
}
export {};
