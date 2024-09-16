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
export type WalletAltProps = typeof __propDef.props;
export type WalletAltEvents = typeof __propDef.events;
export type WalletAltSlots = typeof __propDef.slots;
export default class WalletAlt extends SvelteComponentTyped<WalletAltProps, WalletAltEvents, WalletAltSlots> {
}
export {};
