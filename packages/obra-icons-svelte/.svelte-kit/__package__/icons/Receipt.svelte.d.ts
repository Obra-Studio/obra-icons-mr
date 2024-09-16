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
export type ReceiptProps = typeof __propDef.props;
export type ReceiptEvents = typeof __propDef.events;
export type ReceiptSlots = typeof __propDef.slots;
export default class Receipt extends SvelteComponentTyped<ReceiptProps, ReceiptEvents, ReceiptSlots> {
}
export {};
