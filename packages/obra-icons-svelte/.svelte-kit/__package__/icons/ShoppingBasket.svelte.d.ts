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
export type ShoppingBasketProps = typeof __propDef.props;
export type ShoppingBasketEvents = typeof __propDef.events;
export type ShoppingBasketSlots = typeof __propDef.slots;
export default class ShoppingBasket extends SvelteComponentTyped<ShoppingBasketProps, ShoppingBasketEvents, ShoppingBasketSlots> {
}
export {};
