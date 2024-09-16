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
export type DiningProps = typeof __propDef.props;
export type DiningEvents = typeof __propDef.events;
export type DiningSlots = typeof __propDef.slots;
export default class Dining extends SvelteComponentTyped<DiningProps, DiningEvents, DiningSlots> {
}
export {};
