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
export type PrismAltProps = typeof __propDef.props;
export type PrismAltEvents = typeof __propDef.events;
export type PrismAltSlots = typeof __propDef.slots;
export default class PrismAlt extends SvelteComponentTyped<PrismAltProps, PrismAltEvents, PrismAltSlots> {
}
export {};
