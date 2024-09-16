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
export type WalletProps = typeof __propDef.props;
export type WalletEvents = typeof __propDef.events;
export type WalletSlots = typeof __propDef.slots;
export default class Wallet extends SvelteComponentTyped<WalletProps, WalletEvents, WalletSlots> {
}
export {};
