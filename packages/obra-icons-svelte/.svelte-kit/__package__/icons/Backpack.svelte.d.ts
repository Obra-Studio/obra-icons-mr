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
export type BackpackProps = typeof __propDef.props;
export type BackpackEvents = typeof __propDef.events;
export type BackpackSlots = typeof __propDef.slots;
export default class Backpack extends SvelteComponentTyped<BackpackProps, BackpackEvents, BackpackSlots> {
}
export {};
