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
export type CoffeeCupProps = typeof __propDef.props;
export type CoffeeCupEvents = typeof __propDef.events;
export type CoffeeCupSlots = typeof __propDef.slots;
export default class CoffeeCup extends SvelteComponentTyped<CoffeeCupProps, CoffeeCupEvents, CoffeeCupSlots> {
}
export {};
