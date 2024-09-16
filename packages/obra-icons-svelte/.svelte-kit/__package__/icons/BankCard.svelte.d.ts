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
export type BankCardProps = typeof __propDef.props;
export type BankCardEvents = typeof __propDef.events;
export type BankCardSlots = typeof __propDef.slots;
export default class BankCard extends SvelteComponentTyped<BankCardProps, BankCardEvents, BankCardSlots> {
}
export {};
