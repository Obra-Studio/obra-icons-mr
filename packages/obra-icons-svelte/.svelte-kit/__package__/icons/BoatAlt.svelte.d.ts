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
export type BoatAltProps = typeof __propDef.props;
export type BoatAltEvents = typeof __propDef.events;
export type BoatAltSlots = typeof __propDef.slots;
export default class BoatAlt extends SvelteComponentTyped<BoatAltProps, BoatAltEvents, BoatAltSlots> {
}
export {};
