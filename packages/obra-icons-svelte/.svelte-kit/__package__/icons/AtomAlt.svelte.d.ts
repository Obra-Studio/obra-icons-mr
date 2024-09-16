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
export type AtomAltProps = typeof __propDef.props;
export type AtomAltEvents = typeof __propDef.events;
export type AtomAltSlots = typeof __propDef.slots;
export default class AtomAlt extends SvelteComponentTyped<AtomAltProps, AtomAltEvents, AtomAltSlots> {
}
export {};
