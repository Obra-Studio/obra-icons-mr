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
export type AtomProps = typeof __propDef.props;
export type AtomEvents = typeof __propDef.events;
export type AtomSlots = typeof __propDef.slots;
export default class Atom extends SvelteComponentTyped<AtomProps, AtomEvents, AtomSlots> {
}
export {};
