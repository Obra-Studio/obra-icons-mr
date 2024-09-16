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
export type BusFillProps = typeof __propDef.props;
export type BusFillEvents = typeof __propDef.events;
export type BusFillSlots = typeof __propDef.slots;
export default class BusFill extends SvelteComponentTyped<BusFillProps, BusFillEvents, BusFillSlots> {
}
export {};
