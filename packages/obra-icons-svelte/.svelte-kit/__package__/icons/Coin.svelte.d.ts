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
export type CoinProps = typeof __propDef.props;
export type CoinEvents = typeof __propDef.events;
export type CoinSlots = typeof __propDef.slots;
export default class Coin extends SvelteComponentTyped<CoinProps, CoinEvents, CoinSlots> {
}
export {};
