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
export type BoatProps = typeof __propDef.props;
export type BoatEvents = typeof __propDef.events;
export type BoatSlots = typeof __propDef.slots;
export default class Boat extends SvelteComponentTyped<BoatProps, BoatEvents, BoatSlots> {
}
export {};
