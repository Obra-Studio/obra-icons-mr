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
export type ChevronDoubleDownProps = typeof __propDef.props;
export type ChevronDoubleDownEvents = typeof __propDef.events;
export type ChevronDoubleDownSlots = typeof __propDef.slots;
export default class ChevronDoubleDown extends SvelteComponentTyped<ChevronDoubleDownProps, ChevronDoubleDownEvents, ChevronDoubleDownSlots> {
}
export {};
