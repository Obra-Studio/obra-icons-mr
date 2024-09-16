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
export type TakeawayCoffeeProps = typeof __propDef.props;
export type TakeawayCoffeeEvents = typeof __propDef.events;
export type TakeawayCoffeeSlots = typeof __propDef.slots;
export default class TakeawayCoffee extends SvelteComponentTyped<TakeawayCoffeeProps, TakeawayCoffeeEvents, TakeawayCoffeeSlots> {
}
export {};
