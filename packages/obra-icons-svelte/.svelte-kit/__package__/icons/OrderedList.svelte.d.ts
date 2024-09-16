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
export type OrderedListProps = typeof __propDef.props;
export type OrderedListEvents = typeof __propDef.events;
export type OrderedListSlots = typeof __propDef.slots;
export default class OrderedList extends SvelteComponentTyped<OrderedListProps, OrderedListEvents, OrderedListSlots> {
}
export {};
