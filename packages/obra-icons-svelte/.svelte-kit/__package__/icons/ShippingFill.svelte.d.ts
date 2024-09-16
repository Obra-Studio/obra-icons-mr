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
export type ShippingFillProps = typeof __propDef.props;
export type ShippingFillEvents = typeof __propDef.events;
export type ShippingFillSlots = typeof __propDef.slots;
export default class ShippingFill extends SvelteComponentTyped<ShippingFillProps, ShippingFillEvents, ShippingFillSlots> {
}
export {};
