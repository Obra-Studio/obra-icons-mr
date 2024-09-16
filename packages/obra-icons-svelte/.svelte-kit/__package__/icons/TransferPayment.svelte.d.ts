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
export type TransferPaymentProps = typeof __propDef.props;
export type TransferPaymentEvents = typeof __propDef.events;
export type TransferPaymentSlots = typeof __propDef.slots;
export default class TransferPayment extends SvelteComponentTyped<TransferPaymentProps, TransferPaymentEvents, TransferPaymentSlots> {
}
export {};
