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
export type CurrencyEthProps = typeof __propDef.props;
export type CurrencyEthEvents = typeof __propDef.events;
export type CurrencyEthSlots = typeof __propDef.slots;
export default class CurrencyEth extends SvelteComponentTyped<CurrencyEthProps, CurrencyEthEvents, CurrencyEthSlots> {
}
export {};
