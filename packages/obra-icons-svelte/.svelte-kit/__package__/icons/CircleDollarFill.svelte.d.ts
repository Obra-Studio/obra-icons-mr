import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CircleDollarFillProps = typeof __propDef.props;
export type CircleDollarFillEvents = typeof __propDef.events;
export type CircleDollarFillSlots = typeof __propDef.slots;
export default class CircleDollarFill extends SvelteComponentTyped<CircleDollarFillProps, CircleDollarFillEvents, CircleDollarFillSlots> {
}
export {};
