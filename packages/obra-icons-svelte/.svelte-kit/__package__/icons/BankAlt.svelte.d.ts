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
export type BankAltProps = typeof __propDef.props;
export type BankAltEvents = typeof __propDef.events;
export type BankAltSlots = typeof __propDef.slots;
export default class BankAlt extends SvelteComponentTyped<BankAltProps, BankAltEvents, BankAltSlots> {
}
export {};
