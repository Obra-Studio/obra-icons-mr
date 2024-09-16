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
export type ChevronRightProps = typeof __propDef.props;
export type ChevronRightEvents = typeof __propDef.events;
export type ChevronRightSlots = typeof __propDef.slots;
export default class ChevronRight extends SvelteComponentTyped<ChevronRightProps, ChevronRightEvents, ChevronRightSlots> {
}
export {};
