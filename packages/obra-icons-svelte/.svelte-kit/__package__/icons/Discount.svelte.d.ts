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
export type DiscountProps = typeof __propDef.props;
export type DiscountEvents = typeof __propDef.events;
export type DiscountSlots = typeof __propDef.slots;
export default class Discount extends SvelteComponentTyped<DiscountProps, DiscountEvents, DiscountSlots> {
}
export {};
