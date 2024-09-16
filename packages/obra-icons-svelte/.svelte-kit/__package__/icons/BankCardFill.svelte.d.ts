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
export type BankCardFillProps = typeof __propDef.props;
export type BankCardFillEvents = typeof __propDef.events;
export type BankCardFillSlots = typeof __propDef.slots;
export default class BankCardFill extends SvelteComponentTyped<BankCardFillProps, BankCardFillEvents, BankCardFillSlots> {
}
export {};
