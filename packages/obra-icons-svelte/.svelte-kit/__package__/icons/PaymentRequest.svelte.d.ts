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
export type PaymentRequestProps = typeof __propDef.props;
export type PaymentRequestEvents = typeof __propDef.events;
export type PaymentRequestSlots = typeof __propDef.slots;
export default class PaymentRequest extends SvelteComponentTyped<PaymentRequestProps, PaymentRequestEvents, PaymentRequestSlots> {
}
export {};
