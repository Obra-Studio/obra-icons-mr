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
export type DiscountAltProps = typeof __propDef.props;
export type DiscountAltEvents = typeof __propDef.events;
export type DiscountAltSlots = typeof __propDef.slots;
export default class DiscountAlt extends SvelteComponentTyped<DiscountAltProps, DiscountAltEvents, DiscountAltSlots> {
}
export {};
