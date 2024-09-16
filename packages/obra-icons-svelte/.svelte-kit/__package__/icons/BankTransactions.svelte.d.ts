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
export type BankTransactionsProps = typeof __propDef.props;
export type BankTransactionsEvents = typeof __propDef.events;
export type BankTransactionsSlots = typeof __propDef.slots;
export default class BankTransactions extends SvelteComponentTyped<BankTransactionsProps, BankTransactionsEvents, BankTransactionsSlots> {
}
export {};
