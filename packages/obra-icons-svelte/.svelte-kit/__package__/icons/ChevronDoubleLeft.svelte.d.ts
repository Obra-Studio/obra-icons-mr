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
export type ChevronDoubleLeftProps = typeof __propDef.props;
export type ChevronDoubleLeftEvents = typeof __propDef.events;
export type ChevronDoubleLeftSlots = typeof __propDef.slots;
export default class ChevronDoubleLeft extends SvelteComponentTyped<ChevronDoubleLeftProps, ChevronDoubleLeftEvents, ChevronDoubleLeftSlots> {
}
export {};
