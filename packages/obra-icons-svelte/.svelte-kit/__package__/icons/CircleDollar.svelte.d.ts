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
export type CircleDollarProps = typeof __propDef.props;
export type CircleDollarEvents = typeof __propDef.events;
export type CircleDollarSlots = typeof __propDef.slots;
export default class CircleDollar extends SvelteComponentTyped<CircleDollarProps, CircleDollarEvents, CircleDollarSlots> {
}
export {};
