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
export type OrderedListAltProps = typeof __propDef.props;
export type OrderedListAltEvents = typeof __propDef.events;
export type OrderedListAltSlots = typeof __propDef.slots;
export default class OrderedListAlt extends SvelteComponentTyped<OrderedListAltProps, OrderedListAltEvents, OrderedListAltSlots> {
}
export {};
