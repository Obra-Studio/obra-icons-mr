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
export type BillsProps = typeof __propDef.props;
export type BillsEvents = typeof __propDef.events;
export type BillsSlots = typeof __propDef.slots;
export default class Bills extends SvelteComponentTyped<BillsProps, BillsEvents, BillsSlots> {
}
export {};
