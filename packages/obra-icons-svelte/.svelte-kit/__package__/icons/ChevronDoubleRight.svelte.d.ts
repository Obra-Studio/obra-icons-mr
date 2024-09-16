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
export type ChevronDoubleRightProps = typeof __propDef.props;
export type ChevronDoubleRightEvents = typeof __propDef.events;
export type ChevronDoubleRightSlots = typeof __propDef.slots;
export default class ChevronDoubleRight extends SvelteComponentTyped<ChevronDoubleRightProps, ChevronDoubleRightEvents, ChevronDoubleRightSlots> {
}
export {};
