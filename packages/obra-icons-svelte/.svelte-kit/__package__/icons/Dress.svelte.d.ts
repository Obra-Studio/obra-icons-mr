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
export type DressProps = typeof __propDef.props;
export type DressEvents = typeof __propDef.events;
export type DressSlots = typeof __propDef.slots;
export default class Dress extends SvelteComponentTyped<DressProps, DressEvents, DressSlots> {
}
export {};
