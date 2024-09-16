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
export type MarkerAltProps = typeof __propDef.props;
export type MarkerAltEvents = typeof __propDef.events;
export type MarkerAltSlots = typeof __propDef.slots;
export default class MarkerAlt extends SvelteComponentTyped<MarkerAltProps, MarkerAltEvents, MarkerAltSlots> {
}
export {};
