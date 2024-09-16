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
export type TrademarkRegisteredProps = typeof __propDef.props;
export type TrademarkRegisteredEvents = typeof __propDef.events;
export type TrademarkRegisteredSlots = typeof __propDef.slots;
export default class TrademarkRegistered extends SvelteComponentTyped<TrademarkRegisteredProps, TrademarkRegisteredEvents, TrademarkRegisteredSlots> {
}
export {};
