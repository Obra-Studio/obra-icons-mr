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
export type PenAltProps = typeof __propDef.props;
export type PenAltEvents = typeof __propDef.events;
export type PenAltSlots = typeof __propDef.slots;
export default class PenAlt extends SvelteComponentTyped<PenAltProps, PenAltEvents, PenAltSlots> {
}
export {};
