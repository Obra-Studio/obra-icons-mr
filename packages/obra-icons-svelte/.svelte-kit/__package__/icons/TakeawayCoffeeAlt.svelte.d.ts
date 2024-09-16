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
export type TakeawayCoffeeAltProps = typeof __propDef.props;
export type TakeawayCoffeeAltEvents = typeof __propDef.events;
export type TakeawayCoffeeAltSlots = typeof __propDef.slots;
export default class TakeawayCoffeeAlt extends SvelteComponentTyped<TakeawayCoffeeAltProps, TakeawayCoffeeAltEvents, TakeawayCoffeeAltSlots> {
}
export {};
