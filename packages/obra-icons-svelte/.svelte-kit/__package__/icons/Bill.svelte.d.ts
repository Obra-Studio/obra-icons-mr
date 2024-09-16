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
export type BillProps = typeof __propDef.props;
export type BillEvents = typeof __propDef.events;
export type BillSlots = typeof __propDef.slots;
export default class Bill extends SvelteComponentTyped<BillProps, BillEvents, BillSlots> {
}
export {};
