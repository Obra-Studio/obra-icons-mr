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
export type CheeseProps = typeof __propDef.props;
export type CheeseEvents = typeof __propDef.events;
export type CheeseSlots = typeof __propDef.slots;
export default class Cheese extends SvelteComponentTyped<CheeseProps, CheeseEvents, CheeseSlots> {
}
export {};
