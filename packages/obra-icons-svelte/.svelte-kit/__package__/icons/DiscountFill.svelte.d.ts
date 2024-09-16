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
export type DiscountFillProps = typeof __propDef.props;
export type DiscountFillEvents = typeof __propDef.events;
export type DiscountFillSlots = typeof __propDef.slots;
export default class DiscountFill extends SvelteComponentTyped<DiscountFillProps, DiscountFillEvents, DiscountFillSlots> {
}
export {};
