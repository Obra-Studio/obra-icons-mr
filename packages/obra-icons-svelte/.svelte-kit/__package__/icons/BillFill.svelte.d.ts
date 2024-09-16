import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BillFillProps = typeof __propDef.props;
export type BillFillEvents = typeof __propDef.events;
export type BillFillSlots = typeof __propDef.slots;
export default class BillFill extends SvelteComponentTyped<BillFillProps, BillFillEvents, BillFillSlots> {
}
export {};
