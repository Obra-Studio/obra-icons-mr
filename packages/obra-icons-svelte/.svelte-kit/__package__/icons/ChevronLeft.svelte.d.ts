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
export type ChevronLeftProps = typeof __propDef.props;
export type ChevronLeftEvents = typeof __propDef.events;
export type ChevronLeftSlots = typeof __propDef.slots;
export default class ChevronLeft extends SvelteComponentTyped<ChevronLeftProps, ChevronLeftEvents, ChevronLeftSlots> {
}
export {};
