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
export type ChevronDoubleUpProps = typeof __propDef.props;
export type ChevronDoubleUpEvents = typeof __propDef.events;
export type ChevronDoubleUpSlots = typeof __propDef.slots;
export default class ChevronDoubleUp extends SvelteComponentTyped<ChevronDoubleUpProps, ChevronDoubleUpEvents, ChevronDoubleUpSlots> {
}
export {};
