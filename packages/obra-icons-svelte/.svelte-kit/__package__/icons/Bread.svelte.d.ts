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
export type BreadProps = typeof __propDef.props;
export type BreadEvents = typeof __propDef.events;
export type BreadSlots = typeof __propDef.slots;
export default class Bread extends SvelteComponentTyped<BreadProps, BreadEvents, BreadSlots> {
}
export {};
