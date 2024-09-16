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
export type MilkProps = typeof __propDef.props;
export type MilkEvents = typeof __propDef.events;
export type MilkSlots = typeof __propDef.slots;
export default class Milk extends SvelteComponentTyped<MilkProps, MilkEvents, MilkSlots> {
}
export {};
