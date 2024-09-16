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
export type StoreProps = typeof __propDef.props;
export type StoreEvents = typeof __propDef.events;
export type StoreSlots = typeof __propDef.slots;
export default class Store extends SvelteComponentTyped<StoreProps, StoreEvents, StoreSlots> {
}
export {};
