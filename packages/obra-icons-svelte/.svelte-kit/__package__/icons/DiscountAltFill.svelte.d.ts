import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DiscountAltFillProps = typeof __propDef.props;
export type DiscountAltFillEvents = typeof __propDef.events;
export type DiscountAltFillSlots = typeof __propDef.slots;
export default class DiscountAltFill extends SvelteComponentTyped<DiscountAltFillProps, DiscountAltFillEvents, DiscountAltFillSlots> {
}
export {};
