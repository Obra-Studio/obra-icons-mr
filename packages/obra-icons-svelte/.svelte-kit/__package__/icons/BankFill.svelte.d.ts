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
export type BankFillProps = typeof __propDef.props;
export type BankFillEvents = typeof __propDef.events;
export type BankFillSlots = typeof __propDef.slots;
export default class BankFill extends SvelteComponentTyped<BankFillProps, BankFillEvents, BankFillSlots> {
}
export {};
