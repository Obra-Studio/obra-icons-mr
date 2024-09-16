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
export type BathroomProps = typeof __propDef.props;
export type BathroomEvents = typeof __propDef.events;
export type BathroomSlots = typeof __propDef.slots;
export default class Bathroom extends SvelteComponentTyped<BathroomProps, BathroomEvents, BathroomSlots> {
}
export {};
