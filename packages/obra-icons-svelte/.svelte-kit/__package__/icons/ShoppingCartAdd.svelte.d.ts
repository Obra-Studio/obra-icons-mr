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
export type ShoppingCartAddProps = typeof __propDef.props;
export type ShoppingCartAddEvents = typeof __propDef.events;
export type ShoppingCartAddSlots = typeof __propDef.slots;
export default class ShoppingCartAdd extends SvelteComponentTyped<ShoppingCartAddProps, ShoppingCartAddEvents, ShoppingCartAddSlots> {
}
export {};
