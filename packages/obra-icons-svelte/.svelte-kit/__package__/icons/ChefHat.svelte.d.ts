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
export type ChefHatProps = typeof __propDef.props;
export type ChefHatEvents = typeof __propDef.events;
export type ChefHatSlots = typeof __propDef.slots;
export default class ChefHat extends SvelteComponentTyped<ChefHatProps, ChefHatEvents, ChefHatSlots> {
}
export {};
