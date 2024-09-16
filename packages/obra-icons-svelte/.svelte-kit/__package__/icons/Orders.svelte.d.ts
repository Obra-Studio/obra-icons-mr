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
export type OrdersProps = typeof __propDef.props;
export type OrdersEvents = typeof __propDef.events;
export type OrdersSlots = typeof __propDef.slots;
export default class Orders extends SvelteComponentTyped<OrdersProps, OrdersEvents, OrdersSlots> {
}
export {};
