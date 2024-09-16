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
export type RepeatingPaymentEuroProps = typeof __propDef.props;
export type RepeatingPaymentEuroEvents = typeof __propDef.events;
export type RepeatingPaymentEuroSlots = typeof __propDef.slots;
export default class RepeatingPaymentEuro extends SvelteComponentTyped<RepeatingPaymentEuroProps, RepeatingPaymentEuroEvents, RepeatingPaymentEuroSlots> {
}
export {};
