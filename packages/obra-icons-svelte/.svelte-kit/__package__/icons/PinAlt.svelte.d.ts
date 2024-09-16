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
export type PinAltProps = typeof __propDef.props;
export type PinAltEvents = typeof __propDef.events;
export type PinAltSlots = typeof __propDef.slots;
export default class PinAlt extends SvelteComponentTyped<PinAltProps, PinAltEvents, PinAltSlots> {
}
export {};
