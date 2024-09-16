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
export type RentProps = typeof __propDef.props;
export type RentEvents = typeof __propDef.events;
export type RentSlots = typeof __propDef.slots;
export default class Rent extends SvelteComponentTyped<RentProps, RentEvents, RentSlots> {
}
export {};
