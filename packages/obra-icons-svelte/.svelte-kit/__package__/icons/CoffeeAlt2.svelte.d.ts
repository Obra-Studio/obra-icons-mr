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
export type CoffeeAlt2Props = typeof __propDef.props;
export type CoffeeAlt2Events = typeof __propDef.events;
export type CoffeeAlt2Slots = typeof __propDef.slots;
export default class CoffeeAlt2 extends SvelteComponentTyped<CoffeeAlt2Props, CoffeeAlt2Events, CoffeeAlt2Slots> {
}
export {};
