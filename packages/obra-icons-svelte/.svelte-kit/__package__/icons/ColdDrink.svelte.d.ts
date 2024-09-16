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
export type ColdDrinkProps = typeof __propDef.props;
export type ColdDrinkEvents = typeof __propDef.events;
export type ColdDrinkSlots = typeof __propDef.slots;
export default class ColdDrink extends SvelteComponentTyped<ColdDrinkProps, ColdDrinkEvents, ColdDrinkSlots> {
}
export {};
