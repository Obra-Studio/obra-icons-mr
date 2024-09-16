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
export type ShoppingCartRemoveProps = typeof __propDef.props;
export type ShoppingCartRemoveEvents = typeof __propDef.events;
export type ShoppingCartRemoveSlots = typeof __propDef.slots;
export default class ShoppingCartRemove extends SvelteComponentTyped<ShoppingCartRemoveProps, ShoppingCartRemoveEvents, ShoppingCartRemoveSlots> {
}
export {};
