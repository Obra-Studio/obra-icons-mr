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
export type CoffeeProps = typeof __propDef.props;
export type CoffeeEvents = typeof __propDef.events;
export type CoffeeSlots = typeof __propDef.slots;
export default class Coffee extends SvelteComponentTyped<CoffeeProps, CoffeeEvents, CoffeeSlots> {
}
export {};
